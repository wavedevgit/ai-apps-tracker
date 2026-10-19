import * as acorn from 'acorn';
import * as walk from 'acorn-walk';
import type { ChatGptModel } from '../types.js';

function staticString(node: acorn.Node | null): string | undefined {
    if (node?.type === 'Literal') {
        const value = (node as acorn.Literal).value;
        if (typeof value === 'string') return value;
    }
    if (node?.type === 'TemplateLiteral') {
        const template = node as acorn.TemplateLiteral;
        if (!template.expressions.length)
            return template.quasis[0].value.cooked ?? undefined;
    }
}

function memberName(node: acorn.Node | null): string | undefined {
    if (node?.type !== 'MemberExpression') return;
    const member = node as acorn.MemberExpression;
    return member.computed
        ? staticString(member.property)
        : member.property.type === 'Identifier'
          ? member.property.name
          : undefined;
}

function merge(target: ChatGptModel, source: ChatGptModel) {
    target.codenames = [
        ...new Set([...target.codenames, ...source.codenames]),
    ];
    target.aliases = [...new Set([...target.aliases, ...source.aliases])];
}

export function mergeModels(input: Iterable<ChatGptModel>): ChatGptModel[] {
    const models = new Map<string, ChatGptModel>();
    for (const model of input) {
        const existing = models.get(model.id);
        if (existing) merge(existing, model);
        else
            models.set(model.id, {
                ...model,
                codenames: [...model.codenames],
                aliases: [...model.aliases],
            });
    }

    for (const model of models.values()) {
        if (!models.has(model.id)) continue;
        for (const alias of model.aliases) {
            const aliasModel = models.get(alias);
            if (!aliasModel || aliasModel === model) continue;
            merge(model, aliasModel);
            models.delete(alias);
        }
        model.aliases = model.aliases.filter((alias) => alias !== model.id);
    }

    return [...models.values()];
}

export default function getModels(code: string): ChatGptModel[] {
    const models: ChatGptModel[] = [];
    let ast: acorn.Program;
    try {
        ast = acorn.parse(code, {
            ecmaVersion: 'latest',
            sourceType: 'module',
        });
    } catch {
        return models;
    }

    walk.simple(ast, {
        ArrayExpression(node) {
            // models list is stored like this
            //[...["gpt-6.1-sol", s.sol61],
            //...]
            const byCodename = new Map<string, ChatGptModel>();
            for (const model of node.elements) {
                if (
                    model?.type !== 'ArrayExpression' ||
                    model.elements.length !== 2
                )
                    continue;

                const id = staticString(model.elements[0]);
                const value = model.elements[1];
                const codename = memberName(value);
                if (id?.startsWith('gpt-') && codename) {
                    const existing = byCodename.get(codename);
                    if (existing) existing.aliases.push(id);
                    else
                        byCodename.set(codename, {
                            id,
                            codenames: [codename],
                            aliases: [],
                        });
                }
            }
            models.push(...byCodename.values());
        },
        ObjectExpression(node) {
            const properties = new Map<string, acorn.Node>();
            for (const property of node.properties) {
                if (property.type !== 'Property' || property.computed) continue;
                const key =
                    property.key.type === 'Identifier'
                        ? property.key.name
                        : staticString(property.key);
                if (key) properties.set(key, property.value);
            }

            const id = staticString(properties.get('slug') ?? null);
            if (!id?.startsWith('gpt-')) return;

            const codename =
                staticString(properties.get('displayName') ?? null) ?? id;
            const permission = memberName(properties.get('permission') ?? null);
            const permissionCodename = permission
                ?.match(/^GPT(.+)Access$/)?.[1]
                .toLowerCase();

            const aliases = properties.get('aliases');
            const aliasIds: string[] = [];
            if (aliases?.type === 'ArrayExpression') {
                for (const alias of (aliases as acorn.ArrayExpression).elements) {
                    const aliasId = staticString(alias);
                    if (aliasId?.startsWith('gpt-'))
                        aliasIds.push(aliasId);
                }
            }
            models.push({
                id,
                codenames: permissionCodename
                    ? [codename, permissionCodename]
                    : [codename],
                aliases: aliasIds,
            });
        },
    });

    return mergeModels(models);
}

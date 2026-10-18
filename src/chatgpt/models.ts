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
            if (!node.elements.every((el) => el?.type === 'ArrayExpression'))
                return;

            if (
                node.elements.some(
                    (el) =>
                        el.elements.length !== 2 ||
                        el.elements[0]?.type !== 'Literal' ||
                        el.elements[1]?.type !== 'MemberExpression',
                )
            )
                return;

            for (const model of node.elements) {
                const id = (model.elements[0] as acorn.Literal).value;
                const property = (model.elements[1] as acorn.MemberExpression)
                    .property;
                if (
                    typeof id === 'string' &&
                    id.startsWith('gpt-') &&
                    property.type === 'Identifier'
                )
                    models.push({ id, codename: property.name });
            }
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
            models.push({ id, codename });

            const aliases = properties.get('aliases');
            if (aliases?.type === 'ArrayExpression') {
                for (const alias of (aliases as acorn.ArrayExpression).elements) {
                    const aliasId = staticString(alias);
                    if (aliasId?.startsWith('gpt-'))
                        models.push({ id: aliasId, codename });
                }
            }
        },
    });
    return models;
}

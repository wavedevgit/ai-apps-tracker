import * as acorn from 'acorn';
import * as walk from 'acorn-walk';
import type { ChatGptModel } from '../types.js';

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
    });
    return models;
}

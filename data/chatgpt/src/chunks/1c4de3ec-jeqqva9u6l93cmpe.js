import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    CWn as n,
    xWn as r
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    n as i,
    r as a
} from "./ac827dee-nlnyb2oyz6dk5zix.js";
var o = t({
        stripDirectivePlugin: () => s
    }),
    s, c = e((() => {
        r(), a(), s = (e = {}) => {
            let t = new Set(e.preserve ?? []);
            return e => {
                n(e, `textDirective`, (e, n, r) => {
                    if (!i.includes(e.name) || t.has(e.name) || !r || typeof n != `number`) return;
                    let a = r.children[n - 1];
                    a && a.type === `text` && a.value.endsWith(` `) && (a.value = a.value.slice(0, -1)), r.children.splice(n, 1)
                })
            }
        }
    }));
export {
    s as n, o as r, c as t
};
//# sourceMappingURL=1c4de3ec-jeqqva9u6l93cmpe.js.map
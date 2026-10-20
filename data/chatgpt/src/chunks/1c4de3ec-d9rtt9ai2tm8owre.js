import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    _Wn as n,
    yWn as r
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    n as i,
    r as a
} from "./ac827dee-fn36bf3lnuq5m5f7.js";
var o = t({
        stripDirectivePlugin: () => s
    }),
    s, c = e((() => {
        n(), a(), s = (e = {}) => {
            let t = new Set(e.preserve ?? []);
            return e => {
                r(e, `textDirective`, (e, n, r) => {
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
//# sourceMappingURL=1c4de3ec-d9rtt9ai2tm8owre.js.map
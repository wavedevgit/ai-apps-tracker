import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    SWn as n,
    bWn as r
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    n as i,
    r as a
} from "./ac827dee-jfuqvo7f5fkdzche.js";
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
//# sourceMappingURL=1c4de3ec-fpp8xgrcwieg4sif.js.map
import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    cWn as n,
    uWn as r
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    n as i,
    r as a
} from "./ac827dee-hu9ap7mhw2yr1x4r.js";
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
//# sourceMappingURL=1c4de3ec-n0c240y1whxcjkzx.js.map
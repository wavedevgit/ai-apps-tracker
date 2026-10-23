const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/a1dc37ae-jixnuno6stvoveac.js", "assets/f025431a-ehagpvg3m4e1cduv.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Kt as n,
    cn as r,
    ln as i
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Qu as a,
    Xu as o,
    Yu as s,
    qu as c
} from "./c2675c8c-oz03twoan08d72ud.js";

function l() {
    (0, d.preconnect)(`https://api.stripe.com`, {
        crossOrigin: `anonymous`
    }), f ??= r(() => import(`./a1dc37ae-jixnuno6stvoveac.js`), __vite__mapDeps([0, 1])).catch(() => (f = void 0, {
        loadStripe: a
    }))
}

function u(...e) {
    return s(() => f ? f.then(t => t.loadStripe(...e)) : a(...e))
}
var d, f, p = e((() => {
    c(), o(), d = t(n()), i()
}));
export {
    u as n, l as r, p as t
};
//# sourceMappingURL=285386de-ojpzoga8pza90y40.js.map
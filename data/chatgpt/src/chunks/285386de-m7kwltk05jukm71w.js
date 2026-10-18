const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/a1dc37ae-jixnuno6stvoveac.js", "assets/f025431a-ehagpvg3m4e1cduv.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Kt as n,
    cn as r,
    ln as i
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Ed as a,
    Od as o
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";

function s() {
    (0, l.preconnect)(`https://api.stripe.com`, {
        crossOrigin: `anonymous`
    }), u ??= r(() => import(`./a1dc37ae-jixnuno6stvoveac.js`), __vite__mapDeps([0, 1])).catch(() => (u = void 0, {
        loadStripe: o
    }))
}

function c(...e) {
    return u ? u.then(t => t.loadStripe(...e)) : o(...e)
}
var l, u, d = e((() => {
    a(), l = t(n()), i()
}));
export {
    c as n, s as r, d as t
};
//# sourceMappingURL=285386de-m7kwltk05jukm71w.js.map
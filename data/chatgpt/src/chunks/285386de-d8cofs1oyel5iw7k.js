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
    Ju as a,
    Ku as o,
    Yu as s,
    Zu as c
} from "./c2675c8c-ossqum2x3eut0sh8.js";

function l() {
    (0, d.preconnect)(`https://api.stripe.com`, {
        crossOrigin: `anonymous`
    }), f ??= r(() => import(`./a1dc37ae-jixnuno6stvoveac.js`), __vite__mapDeps([0, 1])).catch(() => (f = void 0, {
        loadStripe: c
    }))
}

function u(...e) {
    return a(() => f ? f.then(t => t.loadStripe(...e)) : c(...e))
}
var d, f, p = e((() => {
    o(), s(), d = t(n()), i()
}));
export {
    u as n, l as r, p as t
};
//# sourceMappingURL=285386de-d8cofs1oyel5iw7k.js.map
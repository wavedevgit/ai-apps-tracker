const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/951d0cf0-icfsxd2ea522i5b2.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/dfee2fd5-cskt5ca94q9pgt9w.js", "assets/6ba0bdec-mvcxt3etr0emavay.js", "assets/9fe250df-osxeis4qnqthjvir.js"]))) => i.map(i => d[i]);
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    fst as t,
    pst as n
} from "./4813494d-mdvd4786a87166cc.js";
import {
    cn as r,
    ln as i
} from "./2340486e-i7pjxgdhv0bs6apg.js";

function a() {
    if (s !== void 0) return s;
    let e = t().locale,
        n = r(() => import(`./951d0cf0-icfsxd2ea522i5b2.js`).then(async t => {
            let {
                preloadValdiLocale: r
            } = t.default ?? t;
            try {
                await r(e)
            } catch {
                await r(`en`), s === n && (s = void 0)
            }
        }), __vite__mapDeps([0, 1, 2, 3, 4, 5])).catch(e => {
            throw s === n && (s = void 0), e
        });
    return s = n, n
}

function o(e) {
    return Promise.all([e, a().catch(() => void 0)]).then(([e]) => e)
}
var s, c = e((() => {
    n(), i()
}));
export {
    o as n, c as t
};
//# sourceMappingURL=e3349b6b-mzabrdjh37ydj1sx.js.map
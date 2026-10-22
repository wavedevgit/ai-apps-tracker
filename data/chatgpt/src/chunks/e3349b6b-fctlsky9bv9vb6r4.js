const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/cb684ea7-b97c5ris25acuhh9.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/dfee2fd5-m8ou3lgbndgvxfnx.js", "assets/9fe250df-jsdj1yik7vblqtlo.js", "assets/6671b9de-nxgp26gka1i5bjxl.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    ast as n,
    ost as r
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    cn as i,
    ln as a
} from "./2340486e-i7pjxgdhv0bs6apg.js";

function o() {
    if (c !== void 0) return c;
    let e = n().locale,
        r = i(() => import(`./cb684ea7-b97c5ris25acuhh9.js`).then(e => t(e.default)).then(async t => {
            let {
                preloadValdiLocale: n
            } = t.default ?? t;
            try {
                await n(e)
            } catch {
                await n(`en`), c === r && (c = void 0)
            }
        }), __vite__mapDeps([0, 1, 2, 3, 4, 5])).catch(e => {
            throw c === r && (c = void 0), e
        });
    return c = r, r
}

function s(e) {
    return Promise.all([e, o().catch(() => void 0)]).then(([e]) => e)
}
var c, l = e((() => {
    r(), a()
}));
export {
    s as n, l as t
};
//# sourceMappingURL=e3349b6b-fctlsky9bv9vb6r4.js.map
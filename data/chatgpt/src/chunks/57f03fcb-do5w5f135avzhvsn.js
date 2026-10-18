import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    bS as n,
    yS as r
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Vn as i
} from "./2340486e-oc6d2eodbcrmxur3.js";

function a(e, t, n = `all`) {
    if (!t) return e;
    let i = r(e),
        a = e => {
            (e.ty === `fl` || e.ty === `st`) && e?.c?.k && (n === `all` || e.ty === `st`) && (e.c.k = t), Array.isArray(e.it) && e.it.forEach(a)
        },
        o = e => {
            e.ty === 4 && Array.isArray(e.shapes) && e.shapes.forEach(a), Array.isArray(e.layers) && e.layers.forEach(o)
        };
    return o(i), Array.isArray(i.assets) && i.assets.forEach(o), i
}

function o(e) {
    let t = (0, c.useRef)(null),
        [n, r] = (0, c.useState)(() => s(window.document.documentElement));
    return (0, c.useEffect)(() => {
        if (!t.current) return;
        let e = () => {
                t.current && r(s(t.current))
            },
            n = new MutationObserver(() => {
                e()
            });
        return n.observe(window.document.documentElement, {
            attributes: !0,
            attributeFilter: [`class`, `style`]
        }), n.observe(t.current, {
            attributes: !0,
            attributeFilter: [`class`, `style`]
        }), e(), () => n.disconnect()
    }, []), {
        processedAnimationData: (0, c.useMemo)(() => a(e, n), [e, n]),
        containerRef: t
    }
}

function s(e) {
    let t = getComputedStyle(e).color?.match(/\d+/g)?.map(Number).map(e => e / 255);
    return t ? (t.push(1), t) : null
}
var c, l = e((() => {
    n(), c = t(i())
}));
export {
    a as n, o as r, l as t
};
//# sourceMappingURL=57f03fcb-do5w5f135avzhvsn.js.map
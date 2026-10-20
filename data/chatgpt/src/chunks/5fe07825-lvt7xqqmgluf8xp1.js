import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J5 as n,
    Y5 as r
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as i,
    Vn as a
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $_t as o,
    Bvt as s,
    GRt as c,
    G_t as l,
    K_t as u,
    VRt as d,
    Vvt as f,
    avt as p,
    ovt as m
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    c as h,
    l as g,
    t as _
} from "./bcae0416-ehgxvm7t7gkttx8l.js";
import {
    n as v,
    t as y
} from "./de879d3e-dg6xmjaknsd4kulr.js";
var b, x, S, C, w = e((() => {
        r(), _(), b = t(a()), s(), d(), m(), u(), v(), x = i(), S = ({
            value: e,
            onChange: t,
            children: r,
            block: i,
            pill: a = p.pill,
            variant: s,
            size: l = `md`,
            gutterSize: u,
            className: d,
            onClick: m,
            ref: g,
            ..._
        }) => {
            let v = (0, b.useRef)(null),
                S = (0, b.useRef)(null),
                C = (0, b.useCallback)(e => {
                    let t = v.current,
                        n = S.current;
                    if (!t || !n) return;
                    let r = t?.querySelector(`[data-state="on"]`);
                    if (!r) return;
                    let i = t.clientWidth,
                        a = Math.floor(r.clientWidth),
                        o = r.offsetLeft,
                        s = Number.parseFloat(getComputedStyle(t).paddingRight) || 0;
                    if (i - (a + o) < s && --a, n.style.width = `${Math.floor(a)}px`, n.style.transform = `translateX(${o}px)`, t.scrollWidth > i) {
                        let n = i * .15,
                            a = t.getBoundingClientRect(),
                            o = r.getBoundingClientRect();
                        if (o.left < a.left + n || o.right > a.right - n) {
                            let n = o.left + o.width / 2 - (a.left + a.width / 2);
                            e ? t.scrollBy({
                                left: n,
                                behavior: `smooth`
                            }) : t.scrollBy({
                                left: n,
                                behavior: `instant`
                            })
                        }
                    }
                }, []);
            return c({
                ref: v,
                onResize: () => {
                    let e = S.current;
                    if (!e) return;
                    let t = e.style.transition;
                    e.style.transition = ``, C(!1), e.style.transition = t
                }
            }), (0, b.useLayoutEffect)(() => {
                let e = v.current,
                    t = S.current;
                !e || !t || (C(!!t.style.transition), t.style.transition || o(() => {
                    t.style.transition = `width 300ms var(--cubic-enter), transform 300ms var(--cubic-enter)`
                }))
            }, [C, e, l, u, a, s]), (0, x.jsxs)(h, {
                ref: f([v, g]),
                className: n(y.SegmentedControl, d),
                type: `single`,
                value: e,
                loop: !1,
                onValueChange: e => {
                    e && t && t(e)
                },
                onClick: m,
                "data-block": i ? `` : void 0,
                "data-pill": a ? `` : void 0,
                "data-variant": s,
                "data-size": l,
                "data-gutter-size": u,
                ..._,
                children: [(0, x.jsx)(`div`, {
                    className: y.SegmentedControlThumb,
                    ref: S
                }), r]
            })
        }, C = ({
            children: e,
            ...t
        }) => (0, x.jsx)(g, {
            className: y.SegmentedControlOption,
            ...t,
            onPointerEnter: l,
            children: (0, x.jsx)(`span`, {
                className: `relative`,
                children: e
            })
        }), S.Option = C
    })),
    T = e((() => {
        w()
    }));
export {
    S as n, w as r, T as t
};
//# sourceMappingURL=5fe07825-lvt7xqqmgluf8xp1.js.map
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    c7 as n,
    l7 as r
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bn as i,
    Vn as a
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    GRt as o,
    Lvt as s,
    Rvt as c,
    VRt as l
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    i as u,
    n as d,
    r as f,
    t as p
} from "./e981ddae-jmgg6ibiidqeeif6.js";
import {
    n as m,
    t as h
} from "./170322a3-osj2nsczby2m2x8s.js";
import {
    n as g,
    t as _
} from "./1f202013-nj4urberuser71rb.js";
var v, y, b, x, S = e((() => {
        r(), v = t(a()), s(), l(), u(), m(), d(), g(), y = i(), b = ({
            color: e = `primary`,
            variant: t = `outline`,
            title: r,
            description: i,
            actions: a,
            actionsPlacement: s,
            indicator: l,
            className: u,
            actionsClassName: d,
            ref: f,
            ...p
        }) => {
            let m = (0, v.useRef)(null),
                h = (0, v.useRef)(null),
                [g, b] = (0, v.useState)(`end`),
                {
                    width: S
                } = o({
                    ref: m
                });
            return (0, v.useEffect)(() => {
                let e = h.current?.clientWidth ?? 0;
                if (e && S) {
                    let t = e > S / 3 ? `bottom` : `end`;
                    b(t)
                }
            }, [S]), (0, y.jsxs)(`div`, {
                ref: c([f, m]),
                className: n(_.Alert, u),
                "data-variant": t,
                "data-color": e,
                role: e === `danger` ? `alert` : void 0,
                "data-actions-placement": s ?? g,
                ...p,
                children: [l === !1 ? null : (0, y.jsx)(`div`, {
                    className: _.Indicator,
                    children: l ?? (0, y.jsx)(x, {
                        color: e
                    })
                }), (0, y.jsxs)(`div`, {
                    className: _.Content,
                    children: [(0, y.jsxs)(`div`, {
                        className: _.Message,
                        children: [r && (0, y.jsx)(`div`, {
                            className: _.Title,
                            children: r
                        }), i && (0, y.jsx)(`div`, {
                            className: _.Description,
                            children: i
                        })]
                    }), a && (0, y.jsx)(`div`, {
                        className: n(_.Actions, d),
                        ref: h,
                        children: a
                    })]
                })]
            })
        }, x = ({
            color: e
        }) => {
            switch (e) {
                case `warning`:
                case `caution`:
                case `danger`:
                    return (0, y.jsx)(p, {});
                case `success`:
                    return (0, y.jsx)(f, {});
                default:
                    return (0, y.jsx)(h, {})
            }
        }
    })),
    C = e((() => {
        S()
    }));
export {
    b as n, S as r, C as t
};
//# sourceMappingURL=44a57b22-e2228kb7etmfg283.js.map
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    b5 as n,
    y5 as r
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as i,
    Vn as a
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Fvt as o,
    HRt as s,
    Ivt as c,
    RRt as l
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    a as u,
    i as d,
    n as f,
    o as p,
    r as m,
    t as h
} from "./e981ddae-m7civn9ndz8nfodx.js";
import {
    n as g,
    t as _
} from "./1f202013-nj4urberuser71rb.js";
var v, y, b, x, S = e((() => {
        n(), v = t(a()), o(), l(), p(), d(), f(), g(), y = i(), b = ({
            color: e = `primary`,
            variant: t = `outline`,
            title: n,
            description: i,
            actions: a,
            actionsPlacement: o,
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
                } = s({
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
                className: r(_.Alert, u),
                "data-variant": t,
                "data-color": e,
                role: e === `danger` ? `alert` : void 0,
                "data-actions-placement": o ?? g,
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
                        children: [n && (0, y.jsx)(`div`, {
                            className: _.Title,
                            children: n
                        }), i && (0, y.jsx)(`div`, {
                            className: _.Description,
                            children: i
                        })]
                    }), a && (0, y.jsx)(`div`, {
                        className: r(_.Actions, d),
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
                    return (0, y.jsx)(h, {});
                case `success`:
                    return (0, y.jsx)(u, {});
                default:
                    return (0, y.jsx)(m, {})
            }
        }
    })),
    C = e((() => {
        S()
    }));
export {
    b as n, S as r, C as t
};
//# sourceMappingURL=44a57b22-75f65818558q9wm3.js.map
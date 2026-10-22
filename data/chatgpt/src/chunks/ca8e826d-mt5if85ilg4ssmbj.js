import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    l7 as n,
    u7 as r
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    Bn as i,
    Vn as a
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    U_t as o,
    q_t as s
} from "./conversation-small-fh0oqifngkf5rvl1.js";
import {
    i as c,
    n as l,
    r as u,
    t as d
} from "./69a60ca3-ex50i5loh4fzo2g5.js";
var f, p, m, h, g, _, v, y, b = e((() => {
        r(), f = t(a()), o(), c(), p = i(), m = e => {
            let t = g(e.imageUrl);
            return (0, p.jsx)(h, {
                ...e,
                imageUrl: t
            })
        }, h = e => {
            let {
                className: t,
                size: r,
                overflowCount: i,
                name: a,
                initials: o = `first`,
                color: c = `secondary`,
                variant: l = `soft`,
                imageUrl: d,
                Icon: m,
                tooltipComponent: h,
                ...g
            } = e, [b, x] = (0, f.useState)(), S = (0, f.useRef)(d);
            (0, f.useEffect)(() => {
                d !== S.current && ((b === `error` || !d) && x(void 0), S.current = d)
            }, [d, b]);
            let C = !!(g.onPointerDown || g.onClick),
                w = (0, p.jsx)(C ? `button` : `span`, {
                    className: n(u.Avatar, t),
                    style: s({
                        "avatar-size": r
                    }),
                    role: C ? void 0 : `presentation`,
                    "data-color": c,
                    "data-variant": l,
                    type: C ? `button` : void 0,
                    ...g,
                    children: d && b !== `error` ? (0, p.jsx)(_, {
                        status: b,
                        url: d,
                        onError: () => x(`error`),
                        onLoad: () => x(`loaded`)
                    }) : m ? (0, p.jsx)(m, {
                        className: u.AvatarIcon
                    }) : i ? (0, p.jsx)(y, {
                        count: i
                    }) : (0, p.jsx)(v, {
                        name: a,
                        initials: o
                    })
                });
            return !a || !h ? w : (0, p.jsx)(h, {
                content: a,
                children: w
            })
        }, g = e => {
            if (e && !(e.includes(`gravatar.com`) && e.includes(`cdn.auth0.com`))) return e
        }, _ = ({
            url: e,
            status: t,
            onLoad: n,
            onError: r
        }) => (0, p.jsx)(`span`, {
            className: u.AvatarImageContainer,
            children: (0, p.jsx)(`img`, {
                src: e,
                className: u.AvatarImage,
                "data-loaded": t === `loaded` ? `` : void 0,
                onLoad: n,
                onError: r,
                alt: ``,
                role: `presentation`
            })
        }), v = ({
            name: e = ``,
            initials: t
        }) => {
            let n = (0, f.useMemo)(() => {
                switch (t) {
                    case `firstlast`: {
                        let t = e.trim().split(/\s+/);
                        return ([...t[0].toUpperCase()][0] ?? ``) + (t.length > 1 ? [...t[t.length - 1].toUpperCase()][0] : ``)
                    }
                    default:
                        return e.charAt(0).toUpperCase()
                }
            }, [e, t]);
            return (0, p.jsx)(`span`, {
                className: u.AvatarInitial,
                "data-letter-count": t === `firstlast` ? [...n].length : void 0,
                children: n
            })
        }, y = ({
            count: e
        }) => {
            let t = (0, f.useMemo)(() => new Intl.NumberFormat(`en`, {
                notation: `compact`,
                compactDisplay: `short`,
                maximumFractionDigits: 0
            }).format(e).toLocaleLowerCase(), [e]);
            return (0, p.jsxs)(`span`, {
                className: u.AvatarOverflowCount,
                "data-letter-count": t.length,
                children: [(0, p.jsx)(`span`, {
                    className: u.AvatarOverflowCountSymbol,
                    children: `+`
                }), t]
            })
        }
    })),
    x, S, C, w = e((() => {
        r(), x = t(a()), o(), l(), S = i(), C = ({
            className: e,
            stack: t = `start`,
            size: r,
            children: i
        }) => {
            let a = x.Children.toArray(i),
                o = t === `start` ? a.slice().reverse() : a;
            return (0, S.jsx)(`div`, {
                className: n(d.Group, e),
                "data-stack": t,
                style: s({
                    "avatar-size": r
                }),
                children: o.map(e => (0, x.isValidElement)(e) ? (0, x.cloneElement)(e) : e)
            })
        }
    })),
    T = e((() => {
        b(), w()
    }));
export {
    b as a, m as i, C as n, w as r, T as t
};
//# sourceMappingURL=ca8e826d-mt5if85ilg4ssmbj.js.map
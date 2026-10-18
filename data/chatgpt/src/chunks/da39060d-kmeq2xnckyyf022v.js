import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $M as n,
    AT as r,
    b5 as i,
    eN as a,
    kT as o,
    lw as s,
    uw as c,
    y5 as l
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as u,
    Nn as d,
    Rn as f,
    Vn as p,
    wn as m,
    zn as h
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    AGt as g,
    dJt as _,
    fJt as v,
    kGt as y
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Uv as b,
    Wv as x,
    ap as S,
    ix as C,
    op as w,
    rx as T
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    a as E,
    o as D,
    s as O
} from "./1c86a5ac-g8o3s7m87lyivalf.js";
var k, A, j, M = e((() => {
        k = m(), v(), f(), A = u(), j = () => {
            "use forget";
            let e = (0, k.c)(1),
                t;
            return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, A.jsx)(`div`, {
                role: `alert`,
                className: `border-token-border-light text-token-text-secondary rounded-2xl border p-4 text-sm`,
                children: (0, A.jsx)(d, {
                    ..._
                })
            }), e[0] = t) : t = e[0], t
        }
    })),
    N, P, F, I, L = e((() => {
        N = m(), r(), w(), x(), c(), T(), g(), i(), f(), P = u(), F = e => {
            "use forget";
            let t = (0, N.c)(23),
                {
                    title: n,
                    widgetDisplayName: r,
                    widgetDomain: i,
                    onClickBack: a,
                    onClickClose: s,
                    onClickForward: c,
                    onClickOpenInApp: l,
                    canGoBack: u,
                    canGoForward: f,
                    logo: p,
                    hideOpenInAppButton: m
                } = e,
                h;
            t[0] !== u || t[1] !== f || t[2] !== a || t[3] !== s || t[4] !== c ? (h = (0, P.jsx)(I, {
                onClickBack: a,
                onClickForward: c,
                canGoBack: u,
                canGoForward: f,
                onClickClose: s,
                isNavOnly: !1
            }), t[0] = u, t[1] = f, t[2] = a, t[3] = s, t[4] = c, t[5] = h) : h = t[5];
            let g;
            t[6] === p ? g = t[7] : (g = p && (0, P.jsx)(`img`, {
                src: p,
                alt: ``,
                "aria-hidden": `true`,
                "data-testid": `fullscreen-header-logo`,
                className: `h-5 w-5 shrink-0 rounded-md object-contain`
            }), t[6] = p, t[7] = g);
            let _;
            t[8] === n ? _ = t[9] : (_ = (0, P.jsx)(`span`, {
                className: `truncate`,
                children: n
            }), t[8] = n, t[9] = _);
            let v;
            t[10] !== g || t[11] !== _ ? (v = (0, P.jsxs)(`div`, {
                className: `text-token-text-secondary flex min-w-0 items-center justify-center gap-2 text-base`,
                children: [g, _]
            }), t[10] = g, t[11] = _, t[12] = v) : v = t[12];
            let y;
            t[13] !== m || t[14] !== p || t[15] !== l || t[16] !== r || t[17] !== i ? (y = !m && i && (0, P.jsx)(`div`, {
                className: `flex items-center justify-end`,
                children: (0, P.jsx)(o, {
                    icon: p ? void 0 : C,
                    onClick: l,
                    color: `secondary`,
                    children: (0, P.jsx)(d, {
                        id: `JvQEOX`,
                        defaultMessage: `Open in {app}`,
                        values: {
                            app: r
                        }
                    })
                })
            }), t[13] = m, t[14] = p, t[15] = l, t[16] = r, t[17] = i, t[18] = y) : y = t[18];
            let b;
            return t[19] !== h || t[20] !== v || t[21] !== y ? (b = (0, P.jsxs)(`div`, {
                className: `border-token-border-secondary bg-token-bg-primary sm:bg-token-bg-primary z-10 grid h-(--header-height) grid-cols-[1fr_auto_1fr] border-b px-2`,
                children: [h, v, y]
            }), t[19] = h, t[20] = v, t[21] = y, t[22] = b) : b = t[22], b
        }, I = e => {
            "use forget";
            let t = (0, N.c)(19),
                {
                    onClickBack: n,
                    onClickForward: r,
                    onClickClose: i,
                    canGoBack: a,
                    canGoForward: o,
                    isNavOnly: c
                } = e,
                u = h(),
                d = c && `absolute start-2 top-2.5 z-10`,
                f;
            t[0] === d ? f = t[1] : (f = l(`flex items-center justify-start gap-3`, d), t[0] = d, t[1] = f);
            let p;
            t[2] === u ? p = t[3] : (p = u.formatMessage({
                id: `H0F9KU`,
                defaultMessage: `Close`
            }), t[2] = u, t[3] = p);
            let m;
            t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (m = l(`h-7! w-7!`), t[4] = m) : m = t[4];
            let g;
            t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (g = (0, P.jsx)(s, {
                className: `icon`
            }), t[5] = g) : g = t[5];
            let _;
            t[6] !== i || t[7] !== p ? (_ = (0, P.jsx)(y, {
                label: p,
                className: m,
                onClick: i,
                icon: g
            }), t[6] = i, t[7] = p, t[8] = _) : _ = t[8];
            let v;
            t[9] !== a || t[10] !== o || t[11] !== u || t[12] !== n || t[13] !== r ? (v = (a || o) && (0, P.jsxs)(`div`, {
                className: `flex items-center gap-1`,
                children: [(0, P.jsx)(y, {
                    label: u.formatMessage({
                        id: `y0H9Ps`,
                        defaultMessage: `Back`
                    }),
                    className: l(`h-7! w-7!`),
                    onClick: n,
                    disabled: !a,
                    icon: (0, P.jsx)(S, {
                        className: `icon`
                    })
                }), (0, P.jsx)(y, {
                    label: u.formatMessage({
                        id: `4zGgS+`,
                        defaultMessage: `Forward`
                    }),
                    className: l(`h-7! w-7!`),
                    onClick: r,
                    disabled: !o,
                    icon: (0, P.jsx)(b, {
                        className: `icon`
                    })
                })]
            }), t[9] = a, t[10] = o, t[11] = u, t[12] = n, t[13] = r, t[14] = v) : v = t[14];
            let x;
            return t[15] !== f || t[16] !== _ || t[17] !== v ? (x = (0, P.jsxs)(`div`, {
                className: f,
                children: [_, v]
            }), t[15] = f, t[16] = _, t[17] = v, t[18] = x) : x = t[18], x
        }
    })),
    R, z, B = e((() => {
        D(), n(), R = t(p()), z = ({
            csp: e,
            domain: t,
            widgetId: n,
            widgetRef: r
        }) => {
            let i = E(t),
                [o, s] = (0, R.useState)(null),
                [c, l] = (0, R.useState)(!1);
            (0, R.useEffect)(() => {
                s(null), l(!1)
            }, [n, i]);
            let u = a(({
                href: r
            }) => {
                if (r === null) {
                    s(null), l(!0);
                    return
                }
                if (!r.trim()) {
                    s(null), l(!1);
                    return
                }
                let a = i ?? window.location.origin,
                    o;
                try {
                    o = new URL(r, a)
                } catch {}!o || !O(o.toString(), e, t) || (l(!1), s({
                    widgetId: n,
                    url: o.toString()
                }))
            });
            return {
                openInApp: a(() => {
                    if (o?.widgetId === n) {
                        window.open(o.url, `_blank`, `noopener,noreferrer`);
                        return
                    }
                    i && r.current?.getCurrentPath()?.then(e => {
                        e != null && window.open(new URL(e.replace(/^\/+/, ``), i), `_blank`, `noopener,noreferrer`)
                    })
                }),
                setOpenInAppUrl: u,
                shouldHideOpenInAppButton: c,
                widgetRedirectUrl: i
            }
        }
    }));
export {
    L as a, I as i, z as n, j as o, F as r, M as s, B as t
};
//# sourceMappingURL=da39060d-kmeq2xnckyyf022v.js.map
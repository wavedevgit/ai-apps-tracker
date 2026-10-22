const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/146967be-d3t0516hg2xrsvyz.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-d7xm9wsvhdfbag9a.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-m7dgsxtvvivh3e6t.js", "assets/30901919-lc79rizhhepnsl3q.js", "assets/c470f5ab-lnsrbaizit3lulwq.js", "assets/0e5afe53-lar0ol3v36kqq3ou.js", "assets/conversation-small-ertg9659.css", "assets/03f00d69-dgwv5fnlw3rfywef.js", "assets/8b34dbc2-ik628tlti8ozm9vq.js", "assets/82782bc9-cyj0qqxyrvk6mamy.js", "assets/55904901-6ydkhtjv6iaksz7z.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as n,
    J5 as r,
    U1 as i,
    V1 as a,
    a2 as o,
    c2 as s,
    d2 as c,
    l7 as l,
    o2 as u,
    q1 as d,
    u7 as f
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    Bn as p,
    Rn as m,
    Vn as h,
    cn as g,
    ln as _,
    wn as v,
    zn as y
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Wt as b,
    BWt as x,
    GWt as S,
    LWt as C,
    RWt as w,
    SUn as T,
    VWt as E,
    XWt as D,
    ZWt as O,
    xUn as k
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    i as A,
    n as j,
    o as M,
    p as N,
    t as P
} from "./90484768-nsjaanhrs109bqgv.js";
import {
    n as F,
    t as I
} from "./03f00d69-dgwv5fnlw3rfywef.js";
var L, R = e((() => {
    u(), _(), L = o(() => g(() => import(`./146967be-d3t0516hg2xrsvyz.js`).then(e => e.LibraryImportFilesModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])))
}));

function z() {
    return (a() ?? i())?.id
}

function B(e, t) {
    return (0, U.jsx)(`span`, {
        className: l(`relative flex shrink-0 items-center justify-center`, t === 0 && `z-3 size-[27.212px]`, t === 1 && `z-2 size-5.5`, t === 2 && `z-1 size-[27.212px]`),
        children: (0, U.jsx)(`span`, {
            className: l(`border-token-border-light bg-token-bg-primary flex size-5.5 items-center justify-center overflow-hidden rounded-lg border-[0.5px]`, t === 0 && `-rotate-16 rtl:rotate-16`, t === 2 && `rotate-16 rtl:-rotate-16`),
            children: (0, U.jsx)(e, {
                className: `size-3.5`
            })
        })
    }, t)
}
var V, H, U, W, G, K = e((() => {
        V = v(), T(), N(), s(), F(), w(), D(), R(), O(), n(), d(), f(), H = t(h()), m(), U = p(), W = e => {
            "use forget";
            let t = (0, V.c)(19),
                {
                    source: n
                } = e,
                i = n === void 0 ? `library_new_menu` : n,
                a = y(),
                o = r(b),
                s = r(z),
                l;
            t[0] === o ? l = t[1] : (l = () => S({
                connectableOnly: !o
            }), t[0] = o, t[1] = l);
            let u = r(l),
                d = (0, H.useRef)(void 0),
                f, p;
            if (t[2] !== s || t[3] !== u || t[4] !== i || t[5] !== o ? (f = () => {
                    if (!u || s == null) return;
                    let e = o ? `provider_picker` : `drive_only`,
                        t = `${s}:${i}:${e}`;
                    d.current !== t && (d.current = t, E(i, e, s))
                }, p = [s, u, i, o], t[2] = s, t[3] = u, t[4] = i, t[5] = o, t[6] = f, t[7] = p) : (f = t[6], p = t[7]), (0, H.useEffect)(f, p), !u || s == null) return null;
            if (!o) {
                let e;
                return t[8] === i ? e = t[9] : (e = (0, U.jsx)(I, {
                    provider: `google_drive`,
                    disabled: !1,
                    isVisible: !0,
                    variant: `menu`,
                    onboardingSource: i
                }), t[8] = i, t[9] = e), e
            }
            let m;
            t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (m = (0, U.jsx)(j, {
                "aria-hidden": `true`,
                className: `icon`
            }), t[10] = m) : m = t[10];
            let h;
            t[11] === a ? h = t[12] : (h = a.formatMessage({
                id: `artifacts.library.providers.new_menu.connect_plugin.label`,
                defaultMessage: `Connect a plugin`
            }), t[11] = a, t[12] = h);
            let g;
            t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (g = (0, U.jsx)(G, {}), t[13] = g) : g = t[13];
            let _;
            t[14] === i ? _ = t[15] : (_ = () => {
                if (b() && S()) {
                    let e = C(i, `provider_picker`);
                    x(e), c(L, {
                        onboardingJourney: e
                    })
                }
            }, t[14] = i, t[15] = _);
            let v;
            return t[16] !== h || t[17] !== _ ? (v = (0, U.jsx)(k.Item, {
                fillContainer: !0,
                className: `touch:[--menu-item-height:40px] tracking-[-0.18px] [--menu-item-height:36px] [&>div:first-child]:gap-2`,
                icon: m,
                label: h,
                trailing: g,
                onSelect: _
            }), t[16] = h, t[17] = _, t[18] = v) : v = t[18], v
        }, G = () => {
            "use forget";
            let e = (0, V.c)(1),
                t;
            return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, U.jsx)(`span`, {
                "aria-hidden": `true`,
                className: `isolate flex h-5 items-center -space-x-2.5 rtl:space-x-reverse`,
                children: [M, P, A].map(B)
            }), e[0] = t) : t = e[0], t
        }
    })),
    q, J, Y = e((() => {
        q = `DWUAxG_content`, J = {
            content: q
        }
    }));
export {
    L as a, K as i, J as n, R as o, W as r, Y as t
};
//# sourceMappingURL=8ae7e063-kz8by7s0bnba48zw.js.map
const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/146967be-kacqrmb6rczky5de.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-itnrgnth03y1sm9d.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-i79e9c315w50am5f.js", "assets/30901919-ikyi1r55w2i02fom.js", "assets/c470f5ab-lpy67c9in1skobas.js", "assets/0e5afe53-jfvcgv06snw44wce.js", "assets/conversation-small-dl8qqd6x.css", "assets/03f00d69-mhd4kpzvdbg7llxp.js", "assets/8b34dbc2-m4883pai3e8fx8q6.js", "assets/82782bc9-o75a7wf6pmueiskp.js", "assets/55904901-msnu70jjcbkpriuc.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    U1 as n,
    V1 as r,
    a2 as i,
    c2 as a,
    c7 as o,
    d2 as s,
    k8 as c,
    l7 as l,
    o2 as u,
    q1 as d,
    q5 as f
} from "./4813494d-itnrgnth03y1sm9d.js";
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
    IWt as b,
    KWt as x,
    LWt as S,
    NWt as C,
    PWt as w,
    VWt as T,
    YWt as E,
    nUn as D,
    qWt as O,
    tUn as k
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    i as A,
    n as j,
    o as M,
    p as N,
    t as P
} from "./90484768-ia71f0se19eb7ni5.js";
import {
    n as F,
    t as I
} from "./03f00d69-mhd4kpzvdbg7llxp.js";
var L, R = e((() => {
    u(), _(), L = i(() => g(() => import(`./146967be-kacqrmb6rczky5de.js`).then(e => e.LibraryImportFilesModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])))
}));

function z() {
    return (r() ?? n())?.id
}

function B(e, t) {
    return (0, U.jsx)(`span`, {
        className: o(`relative flex shrink-0 items-center justify-center`, t === 0 && `z-3 size-[27.212px]`, t === 1 && `z-2 size-5.5`, t === 2 && `z-1 size-[27.212px]`),
        children: (0, U.jsx)(`span`, {
            className: o(`border-token-border-light bg-token-bg-primary flex size-5.5 items-center justify-center overflow-hidden rounded-lg border-[0.5px]`, t === 0 && `-rotate-16 rtl:rotate-16`, t === 2 && `rotate-16 rtl:-rotate-16`),
            children: (0, U.jsx)(e, {
                className: `size-3.5`
            })
        })
    }, t)
}
var V, H, U, W, G, K = e((() => {
        V = v(), D(), N(), a(), F(), w(), x(), R(), O(), c(), d(), l(), H = t(h()), m(), U = p(), W = e => {
            "use forget";
            let t = (0, V.c)(19),
                {
                    source: n
                } = e,
                r = n === void 0 ? `library_new_menu` : n,
                i = y(),
                a = f(E),
                o = f(z),
                c;
            t[0] === a ? c = t[1] : (c = () => T({
                connectableOnly: !a
            }), t[0] = a, t[1] = c);
            let l = f(c),
                u = (0, H.useRef)(void 0),
                d, p;
            if (t[2] !== o || t[3] !== l || t[4] !== r || t[5] !== a ? (d = () => {
                    if (!l || o == null) return;
                    let e = a ? `provider_picker` : `drive_only`,
                        t = `${o}:${r}:${e}`;
                    u.current !== t && (u.current = t, S(r, e, o))
                }, p = [o, l, r, a], t[2] = o, t[3] = l, t[4] = r, t[5] = a, t[6] = d, t[7] = p) : (d = t[6], p = t[7]), (0, H.useEffect)(d, p), !l || o == null) return null;
            if (!a) {
                let e;
                return t[8] === r ? e = t[9] : (e = (0, U.jsx)(I, {
                    provider: `google_drive`,
                    disabled: !1,
                    isVisible: !0,
                    variant: `menu`,
                    onboardingSource: r
                }), t[8] = r, t[9] = e), e
            }
            let m;
            t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (m = (0, U.jsx)(j, {
                "aria-hidden": `true`,
                className: `icon`
            }), t[10] = m) : m = t[10];
            let h;
            t[11] === i ? h = t[12] : (h = i.formatMessage({
                id: `artifacts.library.providers.new_menu.connect_plugin.label`,
                defaultMessage: `Connect a plugin`
            }), t[11] = i, t[12] = h);
            let g;
            t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (g = (0, U.jsx)(G, {}), t[13] = g) : g = t[13];
            let _;
            t[14] === r ? _ = t[15] : (_ = () => {
                if (E() && T()) {
                    let e = C(r, `provider_picker`);
                    b(e), s(L, {
                        onboardingJourney: e
                    })
                }
            }, t[14] = r, t[15] = _);
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
//# sourceMappingURL=8ae7e063-gf0r080wonksi74u.js.map
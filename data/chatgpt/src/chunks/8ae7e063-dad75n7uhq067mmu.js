const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/146967be-iy60nxms6hgkg9y5.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-dfpv67hlp00pbohr.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-cy5f8pl0g26s86so.js", "assets/30901919-7dzdc1ou0jtwkwpt.js", "assets/c470f5ab-d4g7lc53n1e1ao7o.js", "assets/0e5afe53-o2mcfq1ky1uaktz5.js", "assets/conversation-small-j5v9ogf2.css", "assets/03f00d69-abllrgd7q075akmm.js", "assets/8b34dbc2-k1zgxrtsww83602u.js", "assets/82782bc9-mb60yg1xlggwvqri.js", "assets/55904901-jldq49nzssgkpqgh.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J5 as n,
    L1 as r,
    N1 as i,
    N5 as a,
    Q0 as o,
    X0 as s,
    Y0 as c,
    Y5 as l,
    h8 as u,
    j1 as d,
    t2 as f
} from "./4813494d-dfpv67hlp00pbohr.js";
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
    NHn as w,
    PHn as T,
    RWt as E,
    VWt as D,
    XWt as O,
    ZWt as k
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    i as A,
    n as j,
    o as M,
    p as N,
    t as P
} from "./90484768-ult9wybrg1y0yv5d.js";
import {
    n as F,
    t as I
} from "./03f00d69-abllrgd7q075akmm.js";
var L, R = e((() => {
    s(), _(), L = c(() => g(() => import(`./146967be-iy60nxms6hgkg9y5.js`).then(e => e.LibraryImportFilesModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])))
}));

function z() {
    return (d() ?? i())?.id
}

function B(e, t) {
    return (0, U.jsx)(`span`, {
        className: n(`relative flex shrink-0 items-center justify-center`, t === 0 && `z-3 size-[27.212px]`, t === 1 && `z-2 size-5.5`, t === 2 && `z-1 size-[27.212px]`),
        children: (0, U.jsx)(`span`, {
            className: n(`border-token-border-light bg-token-bg-primary flex size-5.5 items-center justify-center overflow-hidden rounded-lg border-[0.5px]`, t === 0 && `-rotate-16 rtl:rotate-16`, t === 2 && `rotate-16 rtl:-rotate-16`),
            children: (0, U.jsx)(e, {
                className: `size-3.5`
            })
        })
    }, t)
}
var V, H, U, W, G, K = e((() => {
        V = v(), T(), N(), o(), F(), E(), O(), R(), k(), u(), r(), l(), H = t(h()), m(), U = p(), W = e => {
            "use forget";
            let t = (0, V.c)(19),
                {
                    source: n
                } = e,
                r = n === void 0 ? `library_new_menu` : n,
                i = y(),
                o = a(b),
                s = a(z),
                c;
            t[0] === o ? c = t[1] : (c = () => S({
                connectableOnly: !o
            }), t[0] = o, t[1] = c);
            let l = a(c),
                u = (0, H.useRef)(void 0),
                d, p;
            if (t[2] !== s || t[3] !== l || t[4] !== r || t[5] !== o ? (d = () => {
                    if (!l || s == null) return;
                    let e = o ? `provider_picker` : `drive_only`,
                        t = `${s}:${r}:${e}`;
                    u.current !== t && (u.current = t, D(r, e, s))
                }, p = [s, l, r, o], t[2] = s, t[3] = l, t[4] = r, t[5] = o, t[6] = d, t[7] = p) : (d = t[6], p = t[7]), (0, H.useEffect)(d, p), !l || s == null) return null;
            if (!o) {
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
                if (b() && S()) {
                    let e = C(r, `provider_picker`);
                    x(e), f(L, {
                        onboardingJourney: e
                    })
                }
            }, t[14] = r, t[15] = _);
            let v;
            return t[16] !== h || t[17] !== _ ? (v = (0, U.jsx)(w.Item, {
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
//# sourceMappingURL=8ae7e063-dad75n7uhq067mmu.js.map
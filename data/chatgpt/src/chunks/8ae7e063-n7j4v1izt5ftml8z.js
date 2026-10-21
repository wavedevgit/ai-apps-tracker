const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/146967be-ltk0m55lphs978dk.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-lxa3wniynbx9ka2a.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-kzsalymynzuddxee.js", "assets/30901919-i8ip8r0znvgcym38.js", "assets/c470f5ab-poh7ivjvb3j2jlfz.js", "assets/0e5afe53-dz59mkfveu52getp.js", "assets/conversation-small-bwtqiuwj.css", "assets/03f00d69-gr2hn36n9acjse2f.js", "assets/8b34dbc2-ba6wt3zxvh7jce7p.js", "assets/82782bc9-idqd90kxtp4zogpp.js", "assets/55904901-kynxb804wx5jca51.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $0 as n,
    M1 as r,
    P1 as i,
    P5 as a,
    R1 as o,
    X0 as s,
    X5 as c,
    Y5 as l,
    Z0 as u,
    g8 as d,
    n2 as f
} from "./4813494d-lxa3wniynbx9ka2a.js";
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
    JWt as S,
    LHn as C,
    RHn as w,
    UWt as T,
    VWt as E,
    WWt as D,
    eGt as O,
    nGt as k
} from "./conversation-small-kzsalymynzuddxee.js";
import {
    i as A,
    n as j,
    o as M,
    p as N,
    t as P
} from "./90484768-ho5jw9hmafvwbw8w.js";
import {
    n as F,
    t as I
} from "./03f00d69-gr2hn36n9acjse2f.js";
var L, R = e((() => {
    u(), _(), L = s(() => g(() => import(`./146967be-ltk0m55lphs978dk.js`).then(e => e.LibraryImportFilesModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])))
}));

function z() {
    return (r() ?? i())?.id
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
        V = v(), w(), N(), n(), F(), E(), b(), R(), O(), d(), o(), c(), H = t(h()), m(), U = p(), W = e => {
            "use forget";
            let t = (0, V.c)(19),
                {
                    source: n
                } = e,
                r = n === void 0 ? `library_new_menu` : n,
                i = y(),
                o = a(k),
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
                if (k() && S()) {
                    let e = x(r, `provider_picker`);
                    T(e), f(L, {
                        onboardingJourney: e
                    })
                }
            }, t[14] = r, t[15] = _);
            let v;
            return t[16] !== h || t[17] !== _ ? (v = (0, U.jsx)(C.Item, {
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
//# sourceMappingURL=8ae7e063-n7j4v1izt5ftml8z.js.map
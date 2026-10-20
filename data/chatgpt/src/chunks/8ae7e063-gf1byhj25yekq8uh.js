const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/146967be-brj6xmyfqgs72d4p.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-ed29bs6yiwucn7st.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/conversation-small-l6tnsr2xfn2d55kk.js", "assets/30901919-om7b3qf5hp4j9x4l.js", "assets/c470f5ab-d0jxi6yggehv1yt2.js", "assets/0e5afe53-goyw8fd3qndq8rq5.js", "assets/conversation-small-ixfdle4i.css", "assets/03f00d69-h00gr7z5vkmsten4.js", "assets/8b34dbc2-j8rcexxiltkm8ucr.js", "assets/82782bc9-cz4jkhg31tycbqqf.js", "assets/55904901-ho19e9t1rzc66l1j.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as n,
    A5 as r,
    G5 as i,
    I1 as a,
    J0 as o,
    K5 as s,
    M1 as c,
    Y0 as l,
    Z0 as u,
    e2 as d,
    f8 as f
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    Bn as p,
    Rn as m,
    Vn as h,
    cn as g,
    ln as _,
    wn as v,
    zn as y
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    FWt as b,
    HWt as x,
    JWt as S,
    LHn as C,
    LWt as w,
    PWt as T,
    RHn as E,
    RWt as D,
    XWt as O,
    qWt as k
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    i as A,
    n as j,
    o as M,
    p as N,
    t as P
} from "./90484768-7fjmwhvghx9li4mh.js";
import {
    n as F,
    t as I
} from "./03f00d69-h00gr7z5vkmsten4.js";
var L, R = e((() => {
    l(), _(), L = o(() => g(() => import(`./146967be-brj6xmyfqgs72d4p.js`).then(e => e.LibraryImportFilesModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])))
}));

function z() {
    return (n() ?? c())?.id
}

function B(e, t) {
    return (0, U.jsx)(`span`, {
        className: i(`relative flex shrink-0 items-center justify-center`, t === 0 && `z-3 size-[27.212px]`, t === 1 && `z-2 size-5.5`, t === 2 && `z-1 size-[27.212px]`),
        children: (0, U.jsx)(`span`, {
            className: i(`border-token-border-light bg-token-bg-primary flex size-5.5 items-center justify-center overflow-hidden rounded-lg border-[0.5px]`, t === 0 && `-rotate-16 rtl:rotate-16`, t === 2 && `rotate-16 rtl:-rotate-16`),
            children: (0, U.jsx)(e, {
                className: `size-3.5`
            })
        })
    }, t)
}
var V, H, U, W, G, K = e((() => {
        V = v(), E(), N(), u(), F(), b(), k(), R(), S(), f(), a(), s(), H = t(h()), m(), U = p(), W = e => {
            "use forget";
            let t = (0, V.c)(19),
                {
                    source: n
                } = e,
                i = n === void 0 ? `library_new_menu` : n,
                a = y(),
                o = r(O),
                s = r(z),
                c;
            t[0] === o ? c = t[1] : (c = () => x({
                connectableOnly: !o
            }), t[0] = o, t[1] = c);
            let l = r(c),
                u = (0, H.useRef)(void 0),
                f, p;
            if (t[2] !== s || t[3] !== l || t[4] !== i || t[5] !== o ? (f = () => {
                    if (!l || s == null) return;
                    let e = o ? `provider_picker` : `drive_only`,
                        t = `${s}:${i}:${e}`;
                    u.current !== t && (u.current = t, D(i, e, s))
                }, p = [s, l, i, o], t[2] = s, t[3] = l, t[4] = i, t[5] = o, t[6] = f, t[7] = p) : (f = t[6], p = t[7]), (0, H.useEffect)(f, p), !l || s == null) return null;
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
                if (O() && x()) {
                    let e = T(i, `provider_picker`);
                    w(e), d(L, {
                        onboardingJourney: e
                    })
                }
            }, t[14] = i, t[15] = _);
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
//# sourceMappingURL=8ae7e063-gf1byhj25yekq8uh.js.map
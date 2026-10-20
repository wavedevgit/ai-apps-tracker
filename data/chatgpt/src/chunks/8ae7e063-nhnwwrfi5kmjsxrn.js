const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/146967be-c1ip7gob5fh4cho9.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-qsuygr73qjc6rh65.js", "assets/2340486e-komxp8tzs51ny4jj.js", "assets/root-lelxp0l2.css", "assets/conversation-small-cawdu7il3ha6y70c.js", "assets/30901919-jory365vq6ym5crx.js", "assets/c470f5ab-in0lllrdrzeo67gs.js", "assets/0e5afe53-f9gmgfmgrr83ziw3.js", "assets/conversation-small-czggvj2v.css", "assets/03f00d69-fhdzijl7w69x7pro.js", "assets/8b34dbc2-d4icgkio4i3wfm6q.js", "assets/82782bc9-jj605vonxg0iyc7p.js", "assets/55904901-cwfwvpuf6sbjcgjd.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as n,
    I1 as r,
    J0 as i,
    J5 as a,
    M1 as o,
    M5 as s,
    Y0 as c,
    Z0 as l,
    e2 as u,
    m8 as d,
    q5 as f
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as p,
    Hn as m,
    Tn as h,
    Vn as g,
    ln as _,
    un as v,
    zn as y
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    FWt as b,
    HWt as x,
    JWt as S,
    LWt as C,
    PWt as w,
    RHn as T,
    RWt as E,
    XWt as D,
    qWt as O,
    zHn as k
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    i as A,
    n as j,
    o as M,
    p as N,
    t as P
} from "./90484768-iajapzechoczr858.js";
import {
    n as F,
    t as I
} from "./03f00d69-fhdzijl7w69x7pro.js";
var L, R = e((() => {
    c(), v(), L = i(() => _(() => import(`./146967be-c1ip7gob5fh4cho9.js`).then(e => e.LibraryImportFilesModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])))
}));

function z() {
    return (n() ?? o())?.id
}

function B(e, t) {
    return (0, U.jsx)(`span`, {
        className: f(`relative flex shrink-0 items-center justify-center`, t === 0 && `z-3 size-[27.212px]`, t === 1 && `z-2 size-5.5`, t === 2 && `z-1 size-[27.212px]`),
        children: (0, U.jsx)(`span`, {
            className: f(`border-token-border-light bg-token-bg-primary flex size-5.5 items-center justify-center overflow-hidden rounded-lg border-[0.5px]`, t === 0 && `-rotate-16 rtl:rotate-16`, t === 2 && `rotate-16 rtl:-rotate-16`),
            children: (0, U.jsx)(e, {
                className: `size-3.5`
            })
        })
    }, t)
}
var V, H, U, W, G, K = e((() => {
        V = h(), k(), N(), l(), F(), b(), O(), R(), S(), d(), r(), a(), H = t(m()), y(), U = g(), W = e => {
            "use forget";
            let t = (0, V.c)(19),
                {
                    source: n
                } = e,
                r = n === void 0 ? `library_new_menu` : n,
                i = p(),
                a = s(D),
                o = s(z),
                c;
            t[0] === a ? c = t[1] : (c = () => x({
                connectableOnly: !a
            }), t[0] = a, t[1] = c);
            let l = s(c),
                d = (0, H.useRef)(void 0),
                f, m;
            if (t[2] !== o || t[3] !== l || t[4] !== r || t[5] !== a ? (f = () => {
                    if (!l || o == null) return;
                    let e = a ? `provider_picker` : `drive_only`,
                        t = `${o}:${r}:${e}`;
                    d.current !== t && (d.current = t, E(r, e, o))
                }, m = [o, l, r, a], t[2] = o, t[3] = l, t[4] = r, t[5] = a, t[6] = f, t[7] = m) : (f = t[6], m = t[7]), (0, H.useEffect)(f, m), !l || o == null) return null;
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
            let h;
            t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (h = (0, U.jsx)(j, {
                "aria-hidden": `true`,
                className: `icon`
            }), t[10] = h) : h = t[10];
            let g;
            t[11] === i ? g = t[12] : (g = i.formatMessage({
                id: `artifacts.library.providers.new_menu.connect_plugin.label`,
                defaultMessage: `Connect a plugin`
            }), t[11] = i, t[12] = g);
            let _;
            t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = (0, U.jsx)(G, {}), t[13] = _) : _ = t[13];
            let v;
            t[14] === r ? v = t[15] : (v = () => {
                if (D() && x()) {
                    let e = w(r, `provider_picker`);
                    C(e), u(L, {
                        onboardingJourney: e
                    })
                }
            }, t[14] = r, t[15] = v);
            let y;
            return t[16] !== g || t[17] !== v ? (y = (0, U.jsx)(T.Item, {
                fillContainer: !0,
                className: `touch:[--menu-item-height:40px] tracking-[-0.18px] [--menu-item-height:36px] [&>div:first-child]:gap-2`,
                icon: h,
                label: g,
                trailing: _,
                onSelect: v
            }), t[16] = g, t[17] = v, t[18] = y) : y = t[18], y
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
//# sourceMappingURL=8ae7e063-nhnwwrfi5kmjsxrn.js.map
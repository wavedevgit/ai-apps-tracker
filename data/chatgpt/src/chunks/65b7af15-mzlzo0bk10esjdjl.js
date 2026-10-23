import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    K5 as n,
    _J as r,
    c2 as i,
    d2 as a,
    dJ as o,
    pJ as s,
    q5 as c,
    yJ as l
} from "./4813494d-mdvd4786a87166cc.js";
import {
    At as u,
    Bn as d,
    Ln as f,
    N as p,
    Q as m,
    Rn as h,
    Vn as g,
    s as _,
    wn as v,
    zn as y
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    HCn as b,
    HFn as x,
    Jrt as S,
    LFn as C,
    RTn as w,
    Sit as T,
    WCn as E,
    XFt as D,
    YFt as O,
    ZFt as k,
    zTn as A
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Bu as j,
    Qu as M,
    Vu as N,
    Xu as P
} from "./8b34dbc2-lmwubajnld74ksfm.js";
import {
    n as F,
    t as I
} from "./38f75407-bv0ewuqb48elptis.js";
import {
    n as L,
    t as R
} from "./203d6bff-l56rwdbua52ovcpp.js";
import {
    r as z,
    t as ee
} from "./db2560a5-pd1jb0v3ae1oznay.js";

function B(e) {
    return t => {
        "use forget";
        let n = (0, V.c)(30),
            i, a, o, s, c, u, d, f, p, m;
        n[0] === t ? (i = n[1], a = n[2], o = n[3], s = n[4], c = n[5], u = n[6], d = n[7], f = n[8], p = n[9], m = n[10]) : ({
            "aria-hidden": i,
            "aria-label": a,
            "aria-labelledby": o,
            fill: p,
            focusable: s,
            height: c,
            ref: d,
            role: f,
            width: m,
            ...u
        } = t, n[0] = t, n[1] = i, n[2] = a, n[3] = o, n[4] = s, n[5] = c, n[6] = u, n[7] = d, n[8] = f, n[9] = p, n[10] = m);
        let h = p === void 0 ? `currentColor` : p,
            g = (0, te.useId)(),
            _ = re.icons[e],
            v = a != null && a !== `` || o != null && o !== ``,
            y;
        if (n[11] !== g) {
            let e;
            n[13] === Symbol.for(`react.memo_cache_sentinel`) ? (e = /[^A-Za-z0-9_.:-]/g, n[13] = e) : e = n[13], y = g.replace(e, `_`), n[11] = g, n[12] = y
        } else y = n[12];
        let b = `app-screenshots-${e}-${y}`,
            x = m ?? _.canvas.width,
            S = c ?? _.canvas.height,
            C = _.canvas.viewBox,
            w = s ?? `false`,
            T = f ?? (v ? `img` : void 0),
            E = i ?? (!v || void 0),
            D;
        n[14] === b ? D = n[15] : (D = r(l(_), b), n[14] = b, n[15] = D);
        let O;
        n[16] === D ? O = n[17] : (O = {
            __html: D
        }, n[16] = D, n[17] = O);
        let k;
        return n[18] !== a || n[19] !== o || n[20] !== h || n[21] !== u || n[22] !== d || n[23] !== O || n[24] !== x || n[25] !== S || n[26] !== w || n[27] !== T || n[28] !== E ? (k = (0, ne.jsx)(`svg`, {
            ...u,
            ref: d,
            xmlns: `http://www.w3.org/2000/svg`,
            width: x,
            height: S,
            viewBox: C,
            fill: h,
            focusable: w,
            role: T,
            "aria-label": a,
            "aria-labelledby": o,
            "aria-hidden": E,
            "data-rtl-flip": ``,
            dangerouslySetInnerHTML: O
        }), n[18] = a, n[19] = o, n[20] = h, n[21] = u, n[22] = d, n[23] = O, n[24] = x, n[25] = S, n[26] = w, n[27] = T, n[28] = E, n[29] = k) : k = n[29], k
    }
}
var V, te, ne, re, ie, ae, oe = e((() => {
    V = v(), o(), F(), L(), te = t(g()), ne = d(), re = s({
        id: `app-screenshots-carousel-native`,
        icons: {
            "chevron-left": I,
            "chevron-right": R
        }
    }), ie = B(`chevron-left`), ae = B(`chevron-right`)
}));

function se(e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`)
}

function H(e, t) {
    if (!e || !t) return e;
    let n = se(t),
        r = RegExp(`(@${n})`, `g`);
    return e.split(r).map((e, n) => e === `@${t}` ? (0, G.jsx)(`span`, {
        className: `font-semibold`,
        children: e
    }, n) : e)
}

function ce(e) {
    "use forget";
    let t = (0, U.c)(39),
        {
            screenshot: r,
            index: i,
            loading: a,
            ref: o,
            isFullWidth: s,
            isTwoScreenshots: c
        } = e,
        l = s !== void 0 && s,
        u = c !== void 0 && c,
        d = y(),
        [f, p] = (0, W.useState)(!1),
        m = l ? q : K[i % K.length],
        h = (0, W.useRef)(null),
        g, _;
    t[0] === f ? (g = t[1], _ = t[2]) : (g = () => {
        h.current?.complete && !f && p(!0)
    }, _ = [f], t[0] = f, t[1] = g, t[2] = _), (0, W.useEffect)(g, _);
    let v = l ? `w-full` : `w-66 max-w-66 min-w-66`,
        b = !l && u && `lg:w-100 lg:max-w-100 lg:min-w-100`,
        x;
    t[3] !== v || t[4] !== b ? (x = n(`relative my-4 h-84 max-h-84 shrink-0 snap-start scroll-m-4 overflow-hidden rounded-2xl border-b border-black/5 object-cover object-top shadow-xs/3 lg:scroll-m-6 xl:scroll-m-10`, v, b), t[3] = v, t[4] = b, t[5] = x) : x = t[5];
    let S;
    t[6] === d ? S = t[7] : (S = d.formatMessage(le.backgroundAlt), t[6] = d, t[7] = S);
    let C;
    t[8] !== m || t[9] !== S ? (C = (0, G.jsx)(`img`, {
        src: m,
        alt: S,
        "aria-hidden": !0,
        className: `absolute inset-0 h-full w-full object-cover dark:opacity-40`,
        loading: `lazy`,
        draggable: !1
    }), t[8] = m, t[9] = S, t[10] = C) : C = t[10];
    let w = `url(${m})`,
        T;
    t[11] === w ? T = t[12] : (T = {
        backgroundImage: w,
        backgroundSize: `cover`,
        backgroundPosition: `center`
    }, t[11] = w, t[12] = T);
    let E = f ? `opacity-100` : `opacity-0`,
        D;
    t[13] === E ? D = t[14] : (D = n(`flex h-full flex-col space-y-3 p-5 transition-opacity duration-200`, E), t[13] = E, t[14] = D);
    let O;
    t[15] !== r.appName || t[16] !== r.prompt ? (O = r.prompt && (0, G.jsx)(`div`, {
        className: `mx-auto flex w-56 items-center justify-end`,
        children: (0, G.jsx)(`p`, {
            className: n(`max-w-48 rounded-xl bg-white/60 text-gray-950/80 shadow-xs/3`, `px-2.5 py-1.5 text-xs leading-3.75 tracking-tight backdrop-blur-md`),
            children: H(r.prompt, r.appName)
        })
    }), t[15] = r.appName, t[16] = r.prompt, t[17] = O) : O = t[17];
    let k, A;
    t[18] === Symbol.for(`react.memo_cache_sentinel`) ? (k = () => p(!0), A = () => p(!0), t[18] = k, t[19] = A) : (k = t[18], A = t[19]);
    let j;
    t[20] !== a || t[21] !== r.alt || t[22] !== r.url ? (j = (0, G.jsx)(`div`, {
        className: `mx-auto flex w-56 items-center justify-center rounded-2xl bg-white p-2.5 shadow-xs ring-1 ring-black/5 dark:ring-white/2`,
        children: (0, G.jsx)(`img`, {
            src: r.url,
            alt: r.alt,
            className: `object-cover object-top`,
            loading: a,
            draggable: !1,
            ref: h,
            onLoad: k,
            onError: A
        })
    }), t[20] = a, t[21] = r.alt, t[22] = r.url, t[23] = j) : j = t[23];
    let M;
    t[24] !== D || t[25] !== O || t[26] !== j ? (M = (0, G.jsxs)(`div`, {
        className: D,
        children: [O, j]
    }), t[24] = D, t[25] = O, t[26] = j, t[27] = M) : M = t[27];
    let N;
    t[28] === f ? N = t[29] : (N = !f && (0, G.jsx)(`div`, {
        className: `absolute inset-0 z-20 flex items-center justify-center bg-black/20 backdrop-blur-md`,
        children: (0, G.jsx)(`span`, {
            className: `h-5 w-5 animate-spin rounded-full border-2 border-white/80 border-t-transparent`
        })
    }), t[28] = f, t[29] = N);
    let P;
    t[30] !== T || t[31] !== M || t[32] !== N ? (P = (0, G.jsxs)(`div`, {
        className: `bg-token-bg-primary relative h-full`,
        style: T,
        children: [M, N]
    }), t[30] = T, t[31] = M, t[32] = N, t[33] = P) : P = t[33];
    let F;
    return t[34] !== o || t[35] !== P || t[36] !== x || t[37] !== C ? (F = (0, G.jsxs)(`div`, {
        role: `listitem`,
        ref: o,
        className: x,
        children: [C, P]
    }), t[34] = o, t[35] = P, t[36] = x, t[37] = C, t[38] = F) : F = t[38], F
}
var U, W, G, K, q, le, ue = e((() => {
    U = v(), c(), W = t(g()), h(), G = d(), K = [`/images/app-directory/app-screenshot-background-1.jpg`, `/images/app-directory/app-screenshot-background-2.jpg`, `/images/app-directory/app-screenshot-background-3.jpg`], q = `/images/app-directory/app-screenshot-background-one-up.jpg`, le = f({
        backgroundAlt: {
            id: `LvEPrV`,
            defaultMessage: `Background image`
        }
    })
}));

function de(e) {
    "use forget";
    let t = (0, J.c)(8),
        n = y(),
        r;
    t[0] === e.name ? r = t[1] : (r = e.name.trim(), t[0] = e.name, t[1] = r);
    let i = r,
        a;
    t[2] === e.app_metadata ? a = t[3] : (a = e.app_metadata ?? {}, t[2] = e.app_metadata, t[3] = a);
    let {
        screenshots: o
    } = a, s;
    if (t[4] !== i || t[5] !== n || t[6] !== o) {
        if (s = [], o)
            for (let [e, t] of o.entries()) {
                let r = t.url;
                r && s.push({
                    url: r,
                    alt: n.formatMessage(Z.screenshotAlt, {
                        connectorName: i || n.formatMessage(Z.unnamedConnector),
                        index: e + 1
                    }),
                    prompt: t.user_prompt,
                    appName: i
                })
            }
        t[4] = i, t[5] = n, t[6] = o, t[7] = s
    } else s = t[7];
    return s
}

function fe(e) {
    "use forget";
    let t = (0, J.c)(38),
        {
            app: r,
            surface: i
        } = e,
        a = i === void 0 ? `default` : i,
        o = y(),
        s = (0, Y.useRef)(null),
        c;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (c = [], t[0] = c) : c = t[0];
    let l = (0, Y.useRef)(c),
        u = de(r),
        d = u.length === 2,
        f = u.length > 1,
        p;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (p = () => {
        let e = l.current[0];
        if (!e) return;
        let t = l.current.find(t => t !== void 0 && t.offsetLeft > (s.current?.scrollLeft ?? 0) + e.offsetLeft + 5);
        t && s.current?.scrollTo({
            left: t.offsetLeft,
            behavior: `smooth`
        })
    }, t[1] = p) : p = t[1];
    let m = p,
        h;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (h = () => {
        let e = l.current.toReversed().find(e => e !== void 0 && e.offsetLeft < (s.current?.scrollLeft ?? 0) - 5);
        e && s.current?.scrollTo({
            left: e.offsetLeft,
            behavior: `smooth`
        })
    }, t[2] = h) : h = t[2];
    let g = h,
        [_, v] = (0, Y.useState)(!1),
        [b, x] = (0, Y.useState)(!1),
        S;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (S = e => {
        let t = l.current[0];
        if (!t) {
            v(!1), x(!1);
            return
        }
        let n = e.scrollLeft;
        v(n < e.scrollWidth - e.clientWidth), x(n > t.clientWidth)
    }, t[3] = S) : S = t[3];
    let C = S,
        w, T;
    if (t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (w = () => {
            s.current && C(s.current)
        }, T = [], t[4] = w, t[5] = T) : (w = t[4], T = t[5]), (0, Y.useEffect)(w, T), u.length === 0) return null;
    let E = a === `main` ? `from-gray-25 dark:from-black` : `from-token-bg-primary`,
        D;
    t[6] === E ? D = t[7] : (D = n(`absolute start-0 top-0 z-10 hidden h-full w-4 bg-gradient-to-r to-transparent sm:block lg:w-6 xl:w-10`, E), t[6] = E, t[7] = D);
    let O;
    t[8] === D ? O = t[9] : (O = (0, X.jsx)(`div`, {
        className: D
    }), t[8] = D, t[9] = O);
    let k = a === `main` ? `from-gray-25 dark:from-black` : `from-token-bg-primary`,
        A;
    t[10] === k ? A = t[11] : (A = n(`absolute end-0 top-0 z-10 hidden h-full w-4 bg-gradient-to-l to-transparent sm:block lg:w-6 xl:w-10`, k), t[10] = k, t[11] = A);
    let j;
    t[12] === A ? j = t[13] : (j = (0, X.jsx)(`div`, {
        className: A
    }), t[12] = A, t[13] = j);
    let M;
    t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (M = n(`no-scrollbar flex touch-pan-x touch-pan-y snap-x snap-proximity gap-2 overflow-x-scroll px-4`, `select-none sm:gap-3 lg:px-6 xl:px-10`), t[14] = M) : M = t[14];
    let N;
    t[15] === o ? N = t[16] : (N = o.formatMessage(Z.screenshotsSectionLabel), t[15] = o, t[16] = N);
    let P;
    t[17] === Symbol.for(`react.memo_cache_sentinel`) ? (P = e => C(e.currentTarget), t[17] = P) : P = t[17];
    let F;
    t[18] !== d || t[19] !== u ? (F = u.map((e, t) => (0, X.jsx)(ce, {
        screenshot: e,
        index: t,
        loading: t < 3 ? `eager` : `lazy`,
        isFullWidth: u.length === 1,
        isTwoScreenshots: d,
        ref: e => {
            e && (l.current[t] = e)
        }
    }, `${e.url}-${t}`)), t[18] = d, t[19] = u, t[20] = F) : F = t[20];
    let I;
    t[21] !== N || t[22] !== F ? (I = (0, X.jsx)(`div`, {
        className: M,
        role: `list`,
        "aria-label": N,
        ref: s,
        onScroll: P,
        tabIndex: 0,
        children: F
    }), t[21] = N, t[22] = F, t[23] = I) : I = t[23];
    let L;
    t[24] !== f || t[25] !== b || t[26] !== o ? (L = f && b ? (0, X.jsx)(pe, {
        ariaLabel: o.formatMessage(Z.previousScreenshots),
        onClick: g,
        className: `start-0 z-20 lg:start-4`,
        children: (0, X.jsx)(ie, {
            className: `h-5 w-5`
        })
    }) : null, t[24] = f, t[25] = b, t[26] = o, t[27] = L) : L = t[27];
    let R;
    t[28] !== f || t[29] !== _ || t[30] !== o ? (R = f && _ ? (0, X.jsx)(pe, {
        ariaLabel: o.formatMessage(Z.nextScreenshots),
        onClick: m,
        className: `end-0 z-20 lg:end-4`,
        children: (0, X.jsx)(ae, {
            className: `h-5 w-5`
        })
    }) : null, t[28] = f, t[29] = _, t[30] = o, t[31] = R) : R = t[31];
    let z;
    return t[32] !== O || t[33] !== j || t[34] !== I || t[35] !== L || t[36] !== R ? (z = (0, X.jsxs)(`section`, {
        className: `group relative -mx-4 lg:-mx-6 xl:-mx-10`,
        children: [O, j, I, L, R]
    }), t[32] = O, t[33] = j, t[34] = I, t[35] = L, t[36] = R, t[37] = z) : z = t[37], z
}

function pe(e) {
    "use forget";
    let t = (0, J.c)(7),
        {
            ariaLabel: r,
            className: i,
            children: a,
            onClick: o
        } = e,
        s;
    t[0] === i ? s = t[1] : (s = n(`absolute top-1/2 -translate-y-1/2`, `hidden sm:group-focus-within:flex sm:group-hover:flex`, `h-8 w-8 items-center justify-center rounded-full`, `bg-token-bg-primary hover:bg-token-bg-tertiary`, `ring-token-border-light shadow-xs ring-1`, `focus-visible:outline-token-text-primary focus-visible:outline-2`, i), t[0] = i, t[1] = s);
    let c;
    return t[2] !== r || t[3] !== a || t[4] !== o || t[5] !== s ? (c = (0, X.jsx)(`button`, {
        type: `button`,
        onClick: o,
        "aria-label": r,
        className: s,
        children: a
    }), t[2] = r, t[3] = a, t[4] = o, t[5] = s, t[6] = c) : c = t[6], c
}
var J, Y, X, Z, me = e((() => {
        J = v(), oe(), c(), Y = t(g()), h(), ue(), X = d(), Z = f({
            screenshotAlt: {
                id: `nH9XZ7`,
                defaultMessage: `Screenshot {index} for {connectorName}`
            },
            unnamedConnector: {
                id: `6ghQh5`,
                defaultMessage: `this app`
            },
            screenshotsSectionLabel: {
                id: `kl4cJx`,
                defaultMessage: `Screenshots`
            },
            previousScreenshots: {
                id: `GrdNrX`,
                defaultMessage: `Previous screenshots`
            },
            nextScreenshots: {
                id: `qf6eOE`,
                defaultMessage: `Next screenshots`
            }
        })
    })),
    he, ge, _e, Q, $, ve = e((() => {
        he = v(), z(), E(), D(), M(), S(), i(), A(), j(), x(), _(), ge = t(g()), h(), m(), _e = (e, t) => {
            let [n, r] = (e.startsWith(`#`) ? e.slice(1) : e).split(`?`), i = n ? `#${n}` : `#`, a = new URLSearchParams(r ?? ``);
            a.set(`referrer`, t);
            let o = a.toString();
            return o ? `${i}?${o}` : i
        }, Q = (e, t) => {
            "use forget";
            let n = (0, he.c)(19),
                r = p(),
                i = y(),
                o = u(),
                s = T(),
                c, l, d;
            if (n[0] !== o.search) {
                let e = new URLSearchParams(o.search);
                l = ee(e), c = e.get(`native_mobile_view`) === `true`, d = e.get(`show_chat_button`), n[0] = o.search, n[1] = c, n[2] = l, n[3] = d
            } else c = n[1], l = n[2], d = n[3];
            let f = d === `true`,
                [m, h] = (0, ge.useState)(!1),
                g;
            n[4] !== t || n[5] !== e || n[6] !== i || n[7] !== c || n[8] !== o.hash || n[9] !== o.search || n[10] !== o.state || n[11] !== s || n[12] !== l || n[13] !== r || n[14] !== f ? (g = () => {
                if (!t || !e) return;
                let n = b(e, t);
                k(t);
                let u = new URLSearchParams(o.search),
                    d = O({
                        state: o.state,
                        searchParams: u
                    }),
                    p = _e(o.hash, d);
                if (c || f) {
                    window.location.href = `${n}/connect${o.search}${p}`;
                    return
                }
                window.location.hash = p, h(!0);
                let m = s ?? l ?? w.CONNECTOR_SETTING,
                    g = async () => {
                        await $(r, t), h(!1)
                    };
                N({
                    connectorId: t,
                    intl: i,
                    onComplete: g,
                    onError: () => h(!1),
                    productSku: w.CONNECTOR_SETTING,
                    queryClient: r,
                    redirectAfter: n,
                    referrer: d,
                    showModal: () => a(P, {
                        checkInstallationPolicy: !0,
                        connectorId: t,
                        redirectAfter: n,
                        productSku: m,
                        linkCreateProductSku: w.CONNECTOR_SETTING,
                        referrer: d,
                        postConnectExperienceSource: `plugin_install`,
                        onComplete: g,
                        onClose: () => {
                            h(!1)
                        }
                    })
                }).catch(() => h(!1))
            }, n[4] = t, n[5] = e, n[6] = i, n[7] = c, n[8] = o.hash, n[9] = o.search, n[10] = o.state, n[11] = s, n[12] = l, n[13] = r, n[14] = f, n[15] = g) : g = n[15];
            let _ = g,
                v;
            return n[16] !== _ || n[17] !== m ? (v = {
                handleConnect: _,
                isPending: m
            }, n[16] = _, n[17] = m, n[18] = v) : v = n[18], v
        }, $ = async (e, t) => {
            await Promise.all([e.invalidateQueries({
                queryKey: [`appAvailability`, t]
            }), e.invalidateQueries({
                queryKey: [`installedAppIds`]
            }), e.invalidateQueries({
                queryKey: C()
            })])
        }
    }));
export {
    me as a, fe as i, $ as n, ue as o, Q as r, H as s, ve as t
};
//# sourceMappingURL=65b7af15-mzlzo0bk10esjdjl.js.map
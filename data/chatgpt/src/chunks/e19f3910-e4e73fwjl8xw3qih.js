import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $tt as r,
    JT as i,
    Wtt as a,
    _j as o,
    cj as s,
    fnt as c,
    gj as l,
    it as u,
    lnt as d,
    mj as f,
    nt as p,
    qT as m,
    sj as h,
    snt as g,
    tt as _,
    vj as v
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    Bn as y,
    Nn as b,
    Rn as x,
    Vn as S,
    wn as C
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    LMt as w,
    NPn as T,
    OJ as E,
    PPn as D,
    RMt as ee,
    kJ as O
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    WC as k,
    bw as A,
    dC as j,
    fC as M
} from "./c2675c8c-fpv9s4kvd412dyap.js";
import {
    a as N,
    i as P,
    n as F
} from "./9ac7a75a-jtc585w9qerwt9l2.js";
import {
    n as I,
    t as L
} from "./620167af-ijasy6aaqn2dfyw0.js";

function R() {
    "use forget";
    let e = (0, z.c)(2),
        t = ee(),
        n;
    return e[0] === t ? n = e[1] : (n = T() && t === `ENABLED`, e[0] = t, e[1] = n), n
}
var z, B = e((() => {
        z = C(), D(), w()
    })),
    V = t({
        CODEX_APP_DOWNLOAD_URL: () => CODEX_APP_DOWNLOAD_URL,
        CODEX_APP_MAC_ARM64_DOWNLOAD_URL: () => f,
        CODEX_APP_MAC_X64_DOWNLOAD_URL: () => l,
        CODEX_APP_WINDOWS_DOWNLOAD_URL: () => o,
        CODEX_GET_STARTED_PATH: () => v,
        CODEX_PUBLIC_LANDING_URL: () => $,
        CodexAppDownloadButton: () => Y,
        CodexPlatformDownloadCta: () => q,
        downloadCodexAppAndRedirect: () => U,
        getCodexPlatformDownloadCta: () => K,
        markCodexAppDownloadAnnouncementsAsViewed: () => H,
        resolveCodexPlatformDownloadCta: () => W
    });

function H() {
    u(_.hasSeenCodexAppHomeBanner)
}
async function U({
    downloadUrl: e,
    signalSurface: t = `codex_app_download_button`,
    trackSelectedPixels: n,
    openInNewTab: r = !0,
    redirectToGetStarted: i = !0
}) {
    if (typeof window < `u`) {
        let a = e ?? await N();
        if (a == null) return;
        H(), s({
            downloadUrl: a,
            surface: t
        }), n(), r ? window.open(a, `_blank`, `noopener,noreferrer`) : window.location.assign(a), i && window.setTimeout(() => {
            window.location.assign(v)
        }, 50)
    }
}
async function W() {
    if (d()) return {
        type: `mobile_learn_more`
    };
    if (c()) return {
        type: `windows_download_url`,
        url: o
    };
    if (g() && !r()) {
        let e = await P();
        return e.type === `download_url` ? {
            type: `mac_download_url`,
            url: e.url
        } : {
            type: `mac_download_options`
        }
    }
    return {
        type: `unknown_download`
    }
}

function G(e) {
    "use forget";
    let t = (0, X.c)(17),
        n, r, i, a, o, c;
    t[0] === e ? (n = t[1], r = t[2], i = t[3], a = t[4], o = t[5], c = t[6]) : ({
        children: r,
        href: i,
        onClick: a,
        signalDownload: c,
        signalSurface: o,
        ...n
    } = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a, t[5] = o, t[6] = c);
    let l = c !== void 0 && c,
        u;
    t[7] !== i || t[8] !== a || t[9] !== l || t[10] !== o ? (u = e => {
        a?.(e), l && s({
            downloadUrl: i,
            surface: o
        })
    }, t[7] = i, t[8] = a, t[9] = l, t[10] = o, t[11] = u) : u = t[11];
    let d;
    return t[12] !== n || t[13] !== r || t[14] !== i || t[15] !== u ? (d = (0, Q.jsx)(m, {
        as: `a`,
        to: i,
        onClick: u,
        ...n,
        children: r
    }), t[12] = n, t[13] = r, t[14] = i, t[15] = u, t[16] = d) : d = t[16], d
}

function K({
    className: e,
    color: t = `primary`,
    contentWrapperClassName: n,
    fullWidth: r,
    icon: i,
    iconClassName: a,
    learnMoreUrl: o = $,
    onClick: s,
    openNewTab: c,
    resolution: u,
    signalDownload: d = !0,
    signalSurface: p = `codex_platform_download_cta`,
    size: h = `large`,
    surface: g
}) {
    let _ = {
            className: e,
            color: t,
            contentWrapperClassName: n,
            fullWidth: r,
            icon: i,
            iconClassName: a,
            onClick: g == null ? s : e => {
                g != null && (u.type === `mac_download_url` || u.type === `mac_download_options` || u.type === `windows_download_url`) && E.recordCodexAppSurfaceAction(g, `download`), s?.(e)
            },
            size: h
        },
        v = {
            ..._,
            openNewTab: c,
            signalSurface: p
        };
    switch (u.type) {
        case `loading`:
            return (0, Q.jsx)(m, {
                type: `button`,
                ..._,
                disabled: !0,
                loading: !0,
                children: (0, Q.jsx)(b, {
                    id: `wham.codexPlatformDownloadCta.loading`,
                    defaultMessage: `Loading`
                })
            });
        case `mac_download_url`:
            return (0, Q.jsx)(G, {
                href: u.url,
                signalDownload: d,
                ...v,
                children: (0, Q.jsx)(b, {
                    id: `wham.codexPlatformDownloadCta.downloadMac`,
                    defaultMessage: `Download for macOS`
                })
            });
        case `mac_download_options`:
            return (0, Q.jsxs)(`div`, {
                className: `flex flex-wrap items-center gap-3`,
                children: [(0, Q.jsx)(G, {
                    href: f,
                    signalDownload: d,
                    ...v,
                    children: (0, Q.jsx)(b, {
                        id: `wham.codexPlatformDownloadCta.downloadAppleSilicon`,
                        defaultMessage: `Download for Apple Silicon`
                    })
                }), (0, Q.jsx)(G, {
                    href: l,
                    signalDownload: d,
                    ...v,
                    color: J(t),
                    children: (0, Q.jsx)(b, {
                        id: `wham.codexPlatformDownloadCta.downloadIntelMac`,
                        defaultMessage: `Download for Intel Mac`
                    })
                })]
            });
        case `windows_download_url`:
            return (0, Q.jsx)(G, {
                href: u.url,
                signalDownload: d,
                ...v,
                children: (0, Q.jsx)(b, {
                    id: `wham.codexPlatformDownloadCta.downloadWindows`,
                    defaultMessage: `Download for Windows`
                })
            });
        case `mobile_learn_more`:
            return (0, Q.jsx)(G, {
                href: o,
                ...v,
                children: (0, Q.jsx)(b, {
                    id: `wham.codexPlatformDownloadCta.learnMore`,
                    defaultMessage: `Learn more`
                })
            });
        case `unknown_download`:
            return (0, Q.jsx)(G, {
                href: o,
                ...v,
                children: (0, Q.jsx)(b, {
                    id: `wham.codexPlatformDownloadCta.download`,
                    defaultMessage: `Download`
                })
            })
    }
}

function q(e) {
    "use forget";
    let t = (0, X.c)(3),
        {
            learnMoreUrl: n,
            ...r
        } = e,
        i;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = {
        type: `loading`
    }, t[0] = i) : i = t[0];
    let [a, o] = (0, Z.useState)(i), s, c;
    return t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (s = () => {
        let e = !1;
        return W().then(t => {
            e || o(t)
        }), () => {
            e = !0
        }
    }, c = [], t[1] = s, t[2] = c) : (s = t[1], c = t[2]), (0, Z.useEffect)(s, c), K({
        ...r,
        learnMoreUrl: n,
        resolution: a
    })
}

function J(e) {
    return e === `primary` ? `secondary` : e
}

function Y(e) {
    "use forget";
    let t = (0, X.c)(36),
        {
            surface: n,
            color: i
        } = e,
        a = i === void 0 ? `primary` : i,
        [o, s] = (0, Z.useState)(null),
        c = R(),
        u;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (u = {
        key: `chatgpt-codex-download`,
        allowUnauthenticatedTracking: !0
    }, t[0] = u) : u = t[0];
    let {
        trackSelectedPixels: d
    } = M(u), p;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (p = {
        key: A.CODEX_DOWNLOAD,
        allowUnauthenticatedTracking: !0
    }, t[1] = p) : p = t[1];
    let {
        trackSelectedPixels: h
    } = M(p), _, v;
    if (t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = () => {
            let e = !1;
            return P().then(t => {
                e || s(t)
            }), () => {
                e = !0
            }
        }, v = [], t[2] = _, t[3] = v) : (_ = t[2], v = t[3]), (0, Z.useEffect)(_, v), !c) return null;
    if (o == null && g() && !r()) {
        let e;
        t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Q.jsx)(b, {
            id: `wham.codexOnboardingConnections.downloadMacAppLoading`,
            defaultMessage: `Loading`
        }), t[4] = e) : e = t[4];
        let n;
        return t[5] === a ? n = t[6] : (n = (0, Q.jsx)(m, {
            type: `button`,
            color: a,
            icon: L,
            disabled: !0,
            loading: !0,
            children: e
        }), t[5] = a, t[6] = n), n
    }
    let y;
    t[7] !== h || t[8] !== d ? (y = () => {
        h(), d()
    }, t[7] = h, t[8] = d, t[9] = y) : y = t[9];
    let x = y,
        S;
    t[10] !== n || t[11] !== x ? (S = e => {
        typeof window < `u` && (n != null && E.recordCodexAppSurfaceAction(n, `download`), E.recordNewFeaturesButtonClicked(`codex_app_card`), U({
            downloadUrl: e,
            signalSurface: n ?? `codex_app_card`,
            trackSelectedPixels: x
        }))
    }, t[10] = n, t[11] = x, t[12] = S) : S = t[12];
    let C = S;
    if (o?.type === `mac_download_options`) {
        let e;
        t[13] === C ? e = t[14] : (e = () => C(f), t[13] = C, t[14] = e);
        let n;
        t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, Q.jsx)(b, {
            id: `wham.codexOnboardingConnections.downloadMacAppAppleSilicon`,
            defaultMessage: `Download for Apple Silicon`
        }), t[15] = n) : n = t[15];
        let r;
        t[16] !== a || t[17] !== e ? (r = (0, Q.jsx)(m, {
            type: `button`,
            color: a,
            icon: L,
            onClick: e,
            children: n
        }), t[16] = a, t[17] = e, t[18] = r) : r = t[18];
        let i;
        t[19] === a ? i = t[20] : (i = J(a), t[19] = a, t[20] = i);
        let o;
        t[21] === C ? o = t[22] : (o = () => C(l), t[21] = C, t[22] = o);
        let s;
        t[23] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, Q.jsx)(b, {
            id: `wham.codexOnboardingConnections.downloadMacAppIntel`,
            defaultMessage: `Download for Intel Mac`
        }), t[23] = s) : s = t[23];
        let c;
        t[24] !== i || t[25] !== o ? (c = (0, Q.jsx)(m, {
            type: `button`,
            color: i,
            icon: L,
            onClick: o,
            children: s
        }), t[24] = i, t[25] = o, t[26] = c) : c = t[26];
        let u;
        return t[27] !== r || t[28] !== c ? (u = (0, Q.jsxs)(`div`, {
            className: `flex flex-wrap items-center gap-3`,
            children: [r, c]
        }), t[27] = r, t[28] = c, t[29] = u) : u = t[29], u
    }
    let w;
    t[30] === C ? w = t[31] : (w = () => {
        C()
    }, t[30] = C, t[31] = w);
    let T;
    t[32] === Symbol.for(`react.memo_cache_sentinel`) ? (T = (0, Q.jsx)(b, {
        id: `wham.codexOnboardingConnections.downloadMacApp`,
        defaultMessage: `Download the app`
    }), t[32] = T) : T = t[32];
    let D;
    return t[33] !== a || t[34] !== w ? (D = (0, Q.jsx)(m, {
        type: `button`,
        color: a,
        icon: L,
        onClick: w,
        children: T
    }), t[33] = a, t[34] = w, t[35] = D) : D = t[35], D
}
var X, Z, Q, $, te = e((() => {
    X = C(), j(), k(), i(), p(), a(), F(), h(), I(), B(), O(), Z = n(S()), x(), Q = y(), $ = `https://chatgpt.com/codex`
}));
export {
    K as a, W as c, U as i, B as l, q as n, te as o, V as r, H as s, Y as t, R as u
};
//# sourceMappingURL=e19f3910-e4e73fwjl8xw3qih.js.map
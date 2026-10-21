import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $tt as r,
    JT as i,
    YT as a,
    _j as o,
    cj as s,
    cnt as c,
    gnt as l,
    hj as u,
    it as d,
    lj as f,
    nt as p,
    tt as m,
    vj as h,
    vnt as g,
    xnt as _,
    yj as v
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    Bn as y,
    Nn as b,
    Rn as x,
    Vn as S,
    wn as C
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    FPn as w,
    MJ as T,
    PPn as E,
    UMt as D,
    WMt as ee,
    jJ as O
} from "./conversation-small-nmt18uiom3b14vca.js";
import {
    MS as k,
    NS as A,
    VC as j,
    dC as M
} from "./c2675c8c-h5ybkhdzcoblzzdu.js";
import {
    a as N,
    i as P,
    n as F
} from "./9ac7a75a-om923aezu3ijmmhn.js";
import {
    n as I,
    t as L
} from "./620167af-jq8ioyd5itarfde4.js";

function R() {
    "use forget";
    let e = (0, z.c)(2),
        t = ee(),
        n;
    return e[0] === t ? n = e[1] : (n = E() && t === `ENABLED`, e[0] = t, e[1] = n), n
}
var z, B = e((() => {
        z = C(), w(), D()
    })),
    V = t({
        CODEX_APP_DOWNLOAD_URL: () => CODEX_APP_DOWNLOAD_URL,
        CODEX_APP_MAC_ARM64_DOWNLOAD_URL: () => u,
        CODEX_APP_MAC_X64_DOWNLOAD_URL: () => o,
        CODEX_APP_WINDOWS_DOWNLOAD_URL: () => h,
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
    d(m.hasSeenCodexAppHomeBanner)
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
        H(), f({
            downloadUrl: a,
            surface: t
        }), n(), r ? window.open(a, `_blank`, `noopener,noreferrer`) : window.location.assign(a), i && window.setTimeout(() => {
            window.location.assign(v)
        }, 50)
    }
}
async function W() {
    if (g()) return {
        type: `mobile_learn_more`
    };
    if (_()) return {
        type: `windows_download_url`,
        url: h
    };
    if (l() && !c()) {
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
        n, r, a, o, s, c;
    t[0] === e ? (n = t[1], r = t[2], a = t[3], o = t[4], s = t[5], c = t[6]) : ({
        children: r,
        href: a,
        onClick: o,
        signalDownload: c,
        signalSurface: s,
        ...n
    } = e, t[0] = e, t[1] = n, t[2] = r, t[3] = a, t[4] = o, t[5] = s, t[6] = c);
    let l = c !== void 0 && c,
        u;
    t[7] !== a || t[8] !== o || t[9] !== l || t[10] !== s ? (u = e => {
        o?.(e), l && f({
            downloadUrl: a,
            surface: s
        })
    }, t[7] = a, t[8] = o, t[9] = l, t[10] = s, t[11] = u) : u = t[11];
    let d;
    return t[12] !== n || t[13] !== r || t[14] !== a || t[15] !== u ? (d = (0, Q.jsx)(i, {
        as: `a`,
        to: a,
        onClick: u,
        ...n,
        children: r
    }), t[12] = n, t[13] = r, t[14] = a, t[15] = u, t[16] = d) : d = t[16], d
}

function K({
    className: e,
    color: t = `primary`,
    contentWrapperClassName: n,
    fullWidth: r,
    icon: a,
    iconClassName: s,
    learnMoreUrl: c = $,
    onClick: l,
    openNewTab: d,
    resolution: f,
    signalDownload: p = !0,
    signalSurface: m = `codex_platform_download_cta`,
    size: h = `large`,
    surface: g
}) {
    let _ = {
            className: e,
            color: t,
            contentWrapperClassName: n,
            fullWidth: r,
            icon: a,
            iconClassName: s,
            onClick: g == null ? l : e => {
                g != null && (f.type === `mac_download_url` || f.type === `mac_download_options` || f.type === `windows_download_url`) && O.recordCodexAppSurfaceAction(g, `download`), l?.(e)
            },
            size: h
        },
        v = {
            ..._,
            openNewTab: d,
            signalSurface: m
        };
    switch (f.type) {
        case `loading`:
            return (0, Q.jsx)(i, {
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
                href: f.url,
                signalDownload: p,
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
                    href: u,
                    signalDownload: p,
                    ...v,
                    children: (0, Q.jsx)(b, {
                        id: `wham.codexPlatformDownloadCta.downloadAppleSilicon`,
                        defaultMessage: `Download for Apple Silicon`
                    })
                }), (0, Q.jsx)(G, {
                    href: o,
                    signalDownload: p,
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
                href: f.url,
                signalDownload: p,
                ...v,
                children: (0, Q.jsx)(b, {
                    id: `wham.codexPlatformDownloadCta.downloadWindows`,
                    defaultMessage: `Download for Windows`
                })
            });
        case `mobile_learn_more`:
            return (0, Q.jsx)(G, {
                href: c,
                ...v,
                children: (0, Q.jsx)(b, {
                    id: `wham.codexPlatformDownloadCta.learnMore`,
                    defaultMessage: `Learn more`
                })
            });
        case `unknown_download`:
            return (0, Q.jsx)(G, {
                href: c,
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
            color: r
        } = e,
        a = r === void 0 ? `primary` : r,
        [s, d] = (0, Z.useState)(null),
        f = R(),
        p;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (p = {
        key: `chatgpt-codex-download`,
        allowUnauthenticatedTracking: !0
    }, t[0] = p) : p = t[0];
    let {
        trackSelectedPixels: m
    } = A(p), h;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (h = {
        key: j.CODEX_DOWNLOAD,
        allowUnauthenticatedTracking: !0
    }, t[1] = h) : h = t[1];
    let {
        trackSelectedPixels: g
    } = A(h), _, v;
    if (t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = () => {
            let e = !1;
            return P().then(t => {
                e || d(t)
            }), () => {
                e = !0
            }
        }, v = [], t[2] = _, t[3] = v) : (_ = t[2], v = t[3]), (0, Z.useEffect)(_, v), !f) return null;
    if (s == null && l() && !c()) {
        let e;
        t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Q.jsx)(b, {
            id: `wham.codexOnboardingConnections.downloadMacAppLoading`,
            defaultMessage: `Loading`
        }), t[4] = e) : e = t[4];
        let n;
        return t[5] === a ? n = t[6] : (n = (0, Q.jsx)(i, {
            type: `button`,
            color: a,
            icon: L,
            disabled: !0,
            loading: !0,
            children: e
        }), t[5] = a, t[6] = n), n
    }
    let y;
    t[7] !== g || t[8] !== m ? (y = () => {
        g(), m()
    }, t[7] = g, t[8] = m, t[9] = y) : y = t[9];
    let x = y,
        S;
    t[10] !== n || t[11] !== x ? (S = e => {
        typeof window < `u` && (n != null && O.recordCodexAppSurfaceAction(n, `download`), O.recordNewFeaturesButtonClicked(`codex_app_card`), U({
            downloadUrl: e,
            signalSurface: n ?? `codex_app_card`,
            trackSelectedPixels: x
        }))
    }, t[10] = n, t[11] = x, t[12] = S) : S = t[12];
    let C = S;
    if (s?.type === `mac_download_options`) {
        let e;
        t[13] === C ? e = t[14] : (e = () => C(u), t[13] = C, t[14] = e);
        let n;
        t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, Q.jsx)(b, {
            id: `wham.codexOnboardingConnections.downloadMacAppAppleSilicon`,
            defaultMessage: `Download for Apple Silicon`
        }), t[15] = n) : n = t[15];
        let r;
        t[16] !== a || t[17] !== e ? (r = (0, Q.jsx)(i, {
            type: `button`,
            color: a,
            icon: L,
            onClick: e,
            children: n
        }), t[16] = a, t[17] = e, t[18] = r) : r = t[18];
        let s;
        t[19] === a ? s = t[20] : (s = J(a), t[19] = a, t[20] = s);
        let c;
        t[21] === C ? c = t[22] : (c = () => C(o), t[21] = C, t[22] = c);
        let l;
        t[23] === Symbol.for(`react.memo_cache_sentinel`) ? (l = (0, Q.jsx)(b, {
            id: `wham.codexOnboardingConnections.downloadMacAppIntel`,
            defaultMessage: `Download for Intel Mac`
        }), t[23] = l) : l = t[23];
        let d;
        t[24] !== s || t[25] !== c ? (d = (0, Q.jsx)(i, {
            type: `button`,
            color: s,
            icon: L,
            onClick: c,
            children: l
        }), t[24] = s, t[25] = c, t[26] = d) : d = t[26];
        let f;
        return t[27] !== r || t[28] !== d ? (f = (0, Q.jsxs)(`div`, {
            className: `flex flex-wrap items-center gap-3`,
            children: [r, d]
        }), t[27] = r, t[28] = d, t[29] = f) : f = t[29], f
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
    let E;
    return t[33] !== a || t[34] !== w ? (E = (0, Q.jsx)(i, {
        type: `button`,
        color: a,
        icon: L,
        onClick: w,
        children: T
    }), t[33] = a, t[34] = w, t[35] = E) : E = t[35], E
}
var X, Z, Q, $, te = e((() => {
    X = C(), k(), M(), a(), p(), r(), F(), s(), I(), B(), T(), Z = n(S()), x(), Q = y(), $ = `https://chatgpt.com/codex`
}));
export {
    K as a, W as c, U as i, B as l, q as n, te as o, V as r, H as s, Y as t, R as u
};
//# sourceMappingURL=e19f3910-gr25pet5p06ryur7.js.map
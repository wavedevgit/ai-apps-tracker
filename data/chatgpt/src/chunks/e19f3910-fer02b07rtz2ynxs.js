import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as r,
    Cj as i,
    Cnt as a,
    Int as o,
    Nnt as s,
    Sj as c,
    bj as l,
    eE as u,
    it as d,
    jnt as f,
    mj as p,
    mnt as m,
    nt as h,
    pj as g,
    tt as _,
    wj as v
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    Bn as y,
    Nn as b,
    Rn as x,
    Vn as S,
    wn as C
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    BMt as w,
    MJ as T,
    jJ as E,
    vFn as D,
    yFn as ee,
    zMt as O
} from "./conversation-small-fh0oqifngkf5rvl1.js";
import {
    GC as k,
    IS as A,
    LS as j,
    hC as M
} from "./c2675c8c-4fpunyxk1uf8cfp1.js";
import {
    a as N,
    i as P,
    n as F
} from "./9ac7a75a-cqecgvgjzu8zlxc7.js";
import {
    n as I,
    t as L
} from "./620167af-ozx9wfr6k17pm40r.js";

function R() {
    "use forget";
    let e = (0, z.c)(2),
        t = w(),
        n;
    return e[0] === t ? n = e[1] : (n = D() && t === `ENABLED`, e[0] = t, e[1] = n), n
}
var z, B = e((() => {
        z = C(), ee(), O()
    })),
    V = t({
        CODEX_APP_DOWNLOAD_URL: () => CODEX_APP_DOWNLOAD_URL,
        CODEX_APP_MAC_ARM64_DOWNLOAD_URL: () => l,
        CODEX_APP_MAC_X64_DOWNLOAD_URL: () => c,
        CODEX_APP_WINDOWS_DOWNLOAD_URL: () => i,
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
    d(_.hasSeenCodexAppHomeBanner)
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
        H(), p({
            downloadUrl: a,
            surface: t
        }), n(), r ? window.open(a, `_blank`, `noopener,noreferrer`) : window.location.assign(a), i && window.setTimeout(() => {
            window.location.assign(v)
        }, 50)
    }
}
async function W() {
    if (s()) return {
        type: `mobile_learn_more`
    };
    if (o()) return {
        type: `windows_download_url`,
        url: i
    };
    if (f() && !a()) {
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
        n, i, a, o, s, c;
    t[0] === e ? (n = t[1], i = t[2], a = t[3], o = t[4], s = t[5], c = t[6]) : ({
        children: i,
        href: a,
        onClick: o,
        signalDownload: c,
        signalSurface: s,
        ...n
    } = e, t[0] = e, t[1] = n, t[2] = i, t[3] = a, t[4] = o, t[5] = s, t[6] = c);
    let l = c !== void 0 && c,
        u;
    t[7] !== a || t[8] !== o || t[9] !== l || t[10] !== s ? (u = e => {
        o?.(e), l && p({
            downloadUrl: a,
            surface: s
        })
    }, t[7] = a, t[8] = o, t[9] = l, t[10] = s, t[11] = u) : u = t[11];
    let d;
    return t[12] !== n || t[13] !== i || t[14] !== a || t[15] !== u ? (d = (0, Q.jsx)(r, {
        as: `a`,
        to: a,
        onClick: u,
        ...n,
        children: i
    }), t[12] = n, t[13] = i, t[14] = a, t[15] = u, t[16] = d) : d = t[16], d
}

function K({
    className: e,
    color: t = `primary`,
    contentWrapperClassName: n,
    fullWidth: i,
    icon: a,
    iconClassName: o,
    learnMoreUrl: s = $,
    onClick: u,
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
            fullWidth: i,
            icon: a,
            iconClassName: o,
            onClick: g == null ? u : e => {
                g != null && (f.type === `mac_download_url` || f.type === `mac_download_options` || f.type === `windows_download_url`) && E.recordCodexAppSurfaceAction(g, `download`), u?.(e)
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
            return (0, Q.jsx)(r, {
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
                    href: l,
                    signalDownload: p,
                    ...v,
                    children: (0, Q.jsx)(b, {
                        id: `wham.codexPlatformDownloadCta.downloadAppleSilicon`,
                        defaultMessage: `Download for Apple Silicon`
                    })
                }), (0, Q.jsx)(G, {
                    href: c,
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
                href: s,
                ...v,
                children: (0, Q.jsx)(b, {
                    id: `wham.codexPlatformDownloadCta.learnMore`,
                    defaultMessage: `Learn more`
                })
            });
        case `unknown_download`:
            return (0, Q.jsx)(G, {
                href: s,
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
        o = i === void 0 ? `primary` : i,
        [s, u] = (0, Z.useState)(null),
        d = R(),
        p;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (p = {
        key: `chatgpt-codex-download`,
        allowUnauthenticatedTracking: !0
    }, t[0] = p) : p = t[0];
    let {
        trackSelectedPixels: m
    } = j(p), h;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (h = {
        key: k.CODEX_DOWNLOAD,
        allowUnauthenticatedTracking: !0
    }, t[1] = h) : h = t[1];
    let {
        trackSelectedPixels: g
    } = j(h), _, v;
    if (t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = () => {
            let e = !1;
            return P().then(t => {
                e || u(t)
            }), () => {
                e = !0
            }
        }, v = [], t[2] = _, t[3] = v) : (_ = t[2], v = t[3]), (0, Z.useEffect)(_, v), !d) return null;
    if (s == null && f() && !a()) {
        let e;
        t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Q.jsx)(b, {
            id: `wham.codexOnboardingConnections.downloadMacAppLoading`,
            defaultMessage: `Loading`
        }), t[4] = e) : e = t[4];
        let n;
        return t[5] === o ? n = t[6] : (n = (0, Q.jsx)(r, {
            type: `button`,
            color: o,
            icon: L,
            disabled: !0,
            loading: !0,
            children: e
        }), t[5] = o, t[6] = n), n
    }
    let y;
    t[7] !== g || t[8] !== m ? (y = () => {
        g(), m()
    }, t[7] = g, t[8] = m, t[9] = y) : y = t[9];
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
    if (s?.type === `mac_download_options`) {
        let e;
        t[13] === C ? e = t[14] : (e = () => C(l), t[13] = C, t[14] = e);
        let n;
        t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, Q.jsx)(b, {
            id: `wham.codexOnboardingConnections.downloadMacAppAppleSilicon`,
            defaultMessage: `Download for Apple Silicon`
        }), t[15] = n) : n = t[15];
        let i;
        t[16] !== o || t[17] !== e ? (i = (0, Q.jsx)(r, {
            type: `button`,
            color: o,
            icon: L,
            onClick: e,
            children: n
        }), t[16] = o, t[17] = e, t[18] = i) : i = t[18];
        let a;
        t[19] === o ? a = t[20] : (a = J(o), t[19] = o, t[20] = a);
        let s;
        t[21] === C ? s = t[22] : (s = () => C(c), t[21] = C, t[22] = s);
        let u;
        t[23] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, Q.jsx)(b, {
            id: `wham.codexOnboardingConnections.downloadMacAppIntel`,
            defaultMessage: `Download for Intel Mac`
        }), t[23] = u) : u = t[23];
        let d;
        t[24] !== a || t[25] !== s ? (d = (0, Q.jsx)(r, {
            type: `button`,
            color: a,
            icon: L,
            onClick: s,
            children: u
        }), t[24] = a, t[25] = s, t[26] = d) : d = t[26];
        let f;
        return t[27] !== i || t[28] !== d ? (f = (0, Q.jsxs)(`div`, {
            className: `flex flex-wrap items-center gap-3`,
            children: [i, d]
        }), t[27] = i, t[28] = d, t[29] = f) : f = t[29], f
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
    return t[33] !== o || t[34] !== w ? (D = (0, Q.jsx)(r, {
        type: `button`,
        color: o,
        icon: L,
        onClick: w,
        children: T
    }), t[33] = o, t[34] = w, t[35] = D) : D = t[35], D
}
var X, Z, Q, $, te = e((() => {
    X = C(), A(), M(), u(), h(), m(), F(), g(), I(), B(), T(), Z = n(S()), x(), Q = y(), $ = `https://chatgpt.com/codex`
}));
export {
    K as a, W as c, U as i, B as l, q as n, te as o, V as r, H as s, Y as t, R as u
};
//# sourceMappingURL=e19f3910-fer02b07rtz2ynxs.js.map
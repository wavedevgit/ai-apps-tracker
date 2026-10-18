import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $A as r,
    AT as i,
    Ett as a,
    Itt as o,
    Ptt as s,
    QA as c,
    UA as l,
    WA as u,
    XA as d,
    _tt as f,
    ej as p,
    it as m,
    kT as h,
    nt as g,
    tt as _,
    ztt as v
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as y,
    Nn as b,
    Rn as x,
    Vn as S,
    wn as C
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    DJ as w,
    EJ as T,
    FMt as E,
    IMt as D,
    _Pn as ee,
    vPn as O
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    hw as k,
    oC as A,
    sC as j,
    zC as M
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    a as N,
    i as P,
    n as F
} from "./9ac7a75a-fqy7qnhwh7jd5rfv.js";
import {
    n as I,
    t as L
} from "./620167af-n2bpjvn118swd9k7.js";

function R() {
    "use forget";
    let e = (0, z.c)(2),
        t = D(),
        n;
    return e[0] === t ? n = e[1] : (n = ee() && t === `ENABLED`, e[0] = t, e[1] = n), n
}
var z, B = e((() => {
        z = C(), O(), E()
    })),
    V = t({
        CODEX_APP_DOWNLOAD_URL: () => CODEX_APP_DOWNLOAD_URL,
        CODEX_APP_MAC_ARM64_DOWNLOAD_URL: () => d,
        CODEX_APP_MAC_X64_DOWNLOAD_URL: () => c,
        CODEX_APP_WINDOWS_DOWNLOAD_URL: () => r,
        CODEX_GET_STARTED_PATH: () => p,
        CODEX_PUBLIC_LANDING_URL: () => $,
        CodexAppDownloadButton: () => Y,
        CodexPlatformDownloadCta: () => q,
        downloadCodexAppAndRedirect: () => U,
        getCodexPlatformDownloadCta: () => K,
        markCodexAppDownloadAnnouncementsAsViewed: () => H,
        resolveCodexPlatformDownloadCta: () => W
    });

function H() {
    m(_.hasSeenCodexAppHomeBanner)
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
        H(), u({
            downloadUrl: a,
            surface: t
        }), n(), r ? window.open(a, `_blank`, `noopener,noreferrer`) : window.location.assign(a), i && window.setTimeout(() => {
            window.location.assign(p)
        }, 50)
    }
}
async function W() {
    if (o()) return {
        type: `mobile_learn_more`
    };
    if (v()) return {
        type: `windows_download_url`,
        url: r
    };
    if (s() && !a()) {
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
        n, r, i, a, o, s;
    t[0] === e ? (n = t[1], r = t[2], i = t[3], a = t[4], o = t[5], s = t[6]) : ({
        children: r,
        href: i,
        onClick: a,
        signalDownload: s,
        signalSurface: o,
        ...n
    } = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a, t[5] = o, t[6] = s);
    let c = s !== void 0 && s,
        l;
    t[7] !== i || t[8] !== a || t[9] !== c || t[10] !== o ? (l = e => {
        a?.(e), c && u({
            downloadUrl: i,
            surface: o
        })
    }, t[7] = i, t[8] = a, t[9] = c, t[10] = o, t[11] = l) : l = t[11];
    let d;
    return t[12] !== n || t[13] !== r || t[14] !== i || t[15] !== l ? (d = (0, Q.jsx)(h, {
        as: `a`,
        to: i,
        onClick: l,
        ...n,
        children: r
    }), t[12] = n, t[13] = r, t[14] = i, t[15] = l, t[16] = d) : d = t[16], d
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
    openNewTab: l,
    resolution: u,
    signalDownload: f = !0,
    signalSurface: p = `codex_platform_download_cta`,
    size: m = `large`,
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
                g != null && (u.type === `mac_download_url` || u.type === `mac_download_options` || u.type === `windows_download_url`) && T.recordCodexAppSurfaceAction(g, `download`), s?.(e)
            },
            size: m
        },
        v = {
            ..._,
            openNewTab: l,
            signalSurface: p
        };
    switch (u.type) {
        case `loading`:
            return (0, Q.jsx)(h, {
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
                signalDownload: f,
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
                    href: d,
                    signalDownload: f,
                    ...v,
                    children: (0, Q.jsx)(b, {
                        id: `wham.codexPlatformDownloadCta.downloadAppleSilicon`,
                        defaultMessage: `Download for Apple Silicon`
                    })
                }), (0, Q.jsx)(G, {
                    href: c,
                    signalDownload: f,
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
                signalDownload: f,
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
            color: r
        } = e,
        i = r === void 0 ? `primary` : r,
        [o, l] = (0, Z.useState)(null),
        u = R(),
        f;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (f = {
        key: `chatgpt-codex-download`,
        allowUnauthenticatedTracking: !0
    }, t[0] = f) : f = t[0];
    let {
        trackSelectedPixels: p
    } = j(f), m;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (m = {
        key: k.CODEX_DOWNLOAD,
        allowUnauthenticatedTracking: !0
    }, t[1] = m) : m = t[1];
    let {
        trackSelectedPixels: g
    } = j(m), _, v;
    if (t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = () => {
            let e = !1;
            return P().then(t => {
                e || l(t)
            }), () => {
                e = !0
            }
        }, v = [], t[2] = _, t[3] = v) : (_ = t[2], v = t[3]), (0, Z.useEffect)(_, v), !u) return null;
    if (o == null && s() && !a()) {
        let e;
        t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Q.jsx)(b, {
            id: `wham.codexOnboardingConnections.downloadMacAppLoading`,
            defaultMessage: `Loading`
        }), t[4] = e) : e = t[4];
        let n;
        return t[5] === i ? n = t[6] : (n = (0, Q.jsx)(h, {
            type: `button`,
            color: i,
            icon: L,
            disabled: !0,
            loading: !0,
            children: e
        }), t[5] = i, t[6] = n), n
    }
    let y;
    t[7] !== g || t[8] !== p ? (y = () => {
        g(), p()
    }, t[7] = g, t[8] = p, t[9] = y) : y = t[9];
    let x = y,
        S;
    t[10] !== n || t[11] !== x ? (S = e => {
        typeof window < `u` && (n != null && T.recordCodexAppSurfaceAction(n, `download`), T.recordNewFeaturesButtonClicked(`codex_app_card`), U({
            downloadUrl: e,
            signalSurface: n ?? `codex_app_card`,
            trackSelectedPixels: x
        }))
    }, t[10] = n, t[11] = x, t[12] = S) : S = t[12];
    let C = S;
    if (o?.type === `mac_download_options`) {
        let e;
        t[13] === C ? e = t[14] : (e = () => C(d), t[13] = C, t[14] = e);
        let n;
        t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, Q.jsx)(b, {
            id: `wham.codexOnboardingConnections.downloadMacAppAppleSilicon`,
            defaultMessage: `Download for Apple Silicon`
        }), t[15] = n) : n = t[15];
        let r;
        t[16] !== i || t[17] !== e ? (r = (0, Q.jsx)(h, {
            type: `button`,
            color: i,
            icon: L,
            onClick: e,
            children: n
        }), t[16] = i, t[17] = e, t[18] = r) : r = t[18];
        let a;
        t[19] === i ? a = t[20] : (a = J(i), t[19] = i, t[20] = a);
        let o;
        t[21] === C ? o = t[22] : (o = () => C(c), t[21] = C, t[22] = o);
        let s;
        t[23] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, Q.jsx)(b, {
            id: `wham.codexOnboardingConnections.downloadMacAppIntel`,
            defaultMessage: `Download for Intel Mac`
        }), t[23] = s) : s = t[23];
        let l;
        t[24] !== a || t[25] !== o ? (l = (0, Q.jsx)(h, {
            type: `button`,
            color: a,
            icon: L,
            onClick: o,
            children: s
        }), t[24] = a, t[25] = o, t[26] = l) : l = t[26];
        let u;
        return t[27] !== r || t[28] !== l ? (u = (0, Q.jsxs)(`div`, {
            className: `flex flex-wrap items-center gap-3`,
            children: [r, l]
        }), t[27] = r, t[28] = l, t[29] = u) : u = t[29], u
    }
    let w;
    t[30] === C ? w = t[31] : (w = () => {
        C()
    }, t[30] = C, t[31] = w);
    let E;
    t[32] === Symbol.for(`react.memo_cache_sentinel`) ? (E = (0, Q.jsx)(b, {
        id: `wham.codexOnboardingConnections.downloadMacApp`,
        defaultMessage: `Download the app`
    }), t[32] = E) : E = t[32];
    let D;
    return t[33] !== i || t[34] !== w ? (D = (0, Q.jsx)(h, {
        type: `button`,
        color: i,
        icon: L,
        onClick: w,
        children: E
    }), t[33] = i, t[34] = w, t[35] = D) : D = t[35], D
}
var X, Z, Q, $, te = e((() => {
    X = C(), A(), M(), i(), g(), f(), F(), l(), I(), B(), w(), Z = n(S()), x(), Q = y(), $ = `https://chatgpt.com/codex`
}));
export {
    K as a, W as c, U as i, B as l, q as n, te as o, V as r, H as s, Y as t, R as u
};
//# sourceMappingURL=e19f3910-nriy7br1qc4gkn80.js.map
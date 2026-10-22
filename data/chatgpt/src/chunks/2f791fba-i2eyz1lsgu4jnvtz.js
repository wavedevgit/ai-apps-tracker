import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Fn as n,
    In as r,
    JT as i,
    Ln as a,
    Wtt as o,
    lnt as s,
    o as c,
    oit as l,
    qT as u,
    s as d,
    sit as f
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    $ as p,
    At as m,
    Bn as h,
    Ln as g,
    Nn as _,
    O as v,
    Rn as y,
    Ut as b,
    Vn as x,
    Wt as S,
    s as C,
    wn as w
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    OJ as T,
    XCn as E,
    Xzt as D,
    Yzt as O,
    ewn as k,
    kJ as ee
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    bC as A,
    xC as j
} from "./30901919-om7b3qf5hp4j9x4l.js";
import {
    t as M
} from "./9ac7a75a-jtc585w9qerwt9l2.js";
import {
    i as N,
    o as P
} from "./e19f3910-e4e73fwjl8xw3qih.js";
import {
    i as F,
    n as I,
    r as L,
    t as R
} from "./18931466-gz6gfm5aaampdcf3.js";
import {
    a as z,
    o as B
} from "./6313cbac-e5hl863fl4prr1xq.js";

function V(e) {
    "use forget";
    let t = (0, U.c)(14),
        {
            shareKey: n
        } = e,
        r;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = f(), t[0] = r) : r = t[0];
    let i = !r,
        a;
    t[1] === n ? a = t[2] : (a = {
        queryKey: [`plugin-share`, n],
        queryFn: () => E({
            shareKey: n
        }),
        retry: !1
    }, t[1] = n, t[2] = a);
    let o = v(a),
        s;
    if (o.isPending) {
        let e;
        t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (e = {
            kind: `loading`
        }, t[3] = e) : e = t[3], s = e
    } else if (o.isError || o.data == null) {
        let e;
        t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (e = {
            kind: `unavailable`
        }, t[4] = e) : e = t[4], s = e
    } else {
        let e;
        t[5] === o.data ? e = t[6] : (e = {
            kind: `plugin_detail`,
            pluginShare: o.data
        }, t[5] = o.data, t[6] = e), s = e
    }
    if (s.kind === `plugin_detail`) {
        let e;
        return t[7] !== n || t[8] !== s.pluginShare.desktopDeeplink || t[9] !== s.pluginShare.pluginId || t[10] !== s.pluginShare.pluginPayload ? (e = (0, G.jsx)(L, {
            pluginId: s.pluginShare.pluginId,
            initialPluginPayload: s.pluginShare.pluginPayload,
            initialPluginPayloadCacheKey: n,
            pluginShareDesktopDeepLink: s.pluginShare.desktopDeeplink,
            hideBackButton: !0,
            useAnonymousPluginDetails: i
        }), t[7] = n, t[8] = s.pluginShare.desktopDeeplink, t[9] = s.pluginShare.pluginId, t[10] = s.pluginShare.pluginPayload, t[11] = e) : e = t[11], e
    }
    if (s.kind === `loading`) {
        let e;
        return t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, G.jsx)(I, {
            hideBackButton: !0
        }), t[12] = e) : e = t[12], e
    }
    let c;
    return t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, G.jsx)(R, {
        hideBackButton: !0
    }), t[13] = c) : c = t[13], c
}

function H(e) {
    "use forget";
    let t = (0, U.c)(23),
        {
            firstPartyPluginShare: n,
            shareKey: r
        } = e,
        i;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = M(), t[0] = i) : i = t[0];
    let a = i,
        o;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (o = s(), t[1] = o) : o = t[1];
    let c = o,
        l = f(),
        d = re,
        p = n == null,
        m, h;
    t[2] === r ? (m = t[3], h = t[4]) : (m = [`plugin-share`, r], h = () => E({
        shareKey: r
    }), t[2] = r, t[3] = m, t[4] = h);
    let g;
    t[5] !== p || t[6] !== m || t[7] !== h ? (g = {
        enabled: p,
        queryKey: m,
        queryFn: h,
        retry: !1
    }, t[5] = p, t[6] = m, t[7] = h, t[8] = g) : g = t[8];
    let y = v(g),
        b;
    b = n == null ? y.isPending ? {
        kind: `loading`
    } : y.isError ? {
        kind: `error`
    } : y.data == null ? l ? {
        kind: `not_found_or_no_access`
    } : {
        kind: `account_required`
    } : {
        kind: `deeplink`,
        pluginShare: y.data
    } : {
        kind: `deeplink`,
        pluginShare: n
    };
    let x = b.kind === `deeplink` && !c ? b.pluginShare.desktopDeeplink : null;
    (0, W.useEffect)(() => {
        x != null && B(x)
    }, [x]);
    let S;
    t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (S = (0, G.jsx)(A, {
        className: `mb-10 size-[88px]`,
        "aria-hidden": !0
    }), t[9] = S) : S = t[9];
    let C = b.kind === `deeplink` ? (0, G.jsx)(_, {
            ...c ? Q.mobileTitle : Q.title
        }) : b.kind === `loading` ? (0, G.jsx)(_, {
            ...Q.loadingTitle
        }) : b.kind === `account_required` ? (0, G.jsx)(_, {
            ...Q.accountRequiredTitle
        }) : (0, G.jsx)(_, {
            ...Q.notFoundTitle
        }),
        w;
    t[10] === C ? w = t[11] : (w = (0, G.jsx)(`h1`, {
        className: `mb-4 text-[34px] leading-10 font-semibold`,
        children: C
    }), t[10] = C, t[11] = w);
    let T = b.kind === `deeplink` ? c ? (0, G.jsx)(`p`, {
            className: `text-token-text-secondary max-w-[520px] text-[15px] leading-[22px]`,
            children: (0, G.jsx)(_, {
                ...Q.mobileBody
            })
        }) : (0, G.jsxs)(G.Fragment, {
            children: [(0, G.jsx)(`p`, {
                className: `text-token-text-secondary max-w-[520px] text-[15px] leading-[22px]`,
                children: (0, G.jsx)(_, {
                    ...Q.openingAppBody
                })
            }), b.pluginShare.displayName.trim() === `` ? null : (0, G.jsx)(`p`, {
                className: `text-token-text-tertiary mt-4 max-w-[520px] text-sm leading-5`,
                children: (0, G.jsx)(_, {
                    ...Q.openingPluginBody,
                    values: {
                        pluginDisplayName: b.pluginShare.displayName
                    }
                })
            })]
        }) : b.kind === `loading` ? (0, G.jsx)(`p`, {
            className: `text-token-text-secondary max-w-[520px] text-[15px] leading-[22px]`,
            children: (0, G.jsx)(_, {
                ...Q.loadingBody
            })
        }) : (0, G.jsx)(`p`, {
            className: `text-token-text-secondary max-w-[520px] text-[15px] leading-[22px]`,
            children: (0, G.jsx)(_, {
                ...b.kind === `account_required` ? Q.accountRequiredBody : b.kind === `error` ? Q.errorBody : Q.notFoundBody
            })
        }),
        D;
    t[12] !== b.kind || t[13] !== b.pluginShare ? (D = b.kind === `deeplink` && !c ? (0, G.jsxs)(`div`, {
        className: `mt-8 flex w-full max-w-sm flex-col gap-3`,
        children: [a == null ? null : (0, G.jsx)(u, {
            type: `button`,
            color: `primary`,
            className: J,
            onClick: te,
            children: (0, G.jsx)(_, {
                ...Q.downloadButton
            })
        }), (0, G.jsx)(u, {
            type: `button`,
            color: a == null ? `primary` : `secondary`,
            className: J,
            onClick: () => {
                B(b.pluginShare.desktopDeeplink)
            },
            children: (0, G.jsx)(_, {
                ...Q.openButton
            })
        })]
    }) : null, t[12] = b.kind, t[13] = b.pluginShare, t[14] = D) : D = t[14];
    let O;
    t[15] === b.kind ? O = t[16] : (O = b.kind === `account_required` ? (0, G.jsxs)(`div`, {
        className: `mt-8 flex w-full max-w-sm flex-col gap-3`,
        children: [(0, G.jsx)(u, {
            type: `button`,
            color: `primary`,
            className: J,
            onClick: d,
            children: (0, G.jsx)(_, {
                ...Q.logInButton
            })
        }), (0, G.jsx)(u, {
            type: `button`,
            color: `secondary`,
            className: J,
            onClick: d,
            children: (0, G.jsx)(_, {
                ...Q.createAccountButton
            })
        })]
    }) : null, t[15] = b.kind, t[16] = O);
    let k;
    return t[17] !== w || t[18] !== T || t[19] !== D || t[20] !== O || t[21] !== S ? (k = (0, G.jsx)(`main`, {
        className: `bg-token-bg-primary text-token-text-primary flex min-h-screen flex-col items-center justify-center px-6 py-10`,
        children: (0, G.jsxs)(`section`, {
            className: `flex w-full max-w-[520px] flex-col items-center text-center`,
            children: [S, w, T, D, O]
        })
    }), t[17] = w, t[18] = T, t[19] = D, t[20] = O, t[21] = S, t[22] = k) : k = t[22], k
}

function te() {
    T.recordCodexAppSurfaceAction(`plugin_share`, `download`), N({
        trackSelectedPixels: ne,
        redirectToGetStarted: !1
    })
}

function ne() {}

function re() {
    window.location.assign(n({
        callbackPath: r()
    }))
}

function ie(e) {
    return Y.test(e) ? {
        pluginId: e,
        displayName: D(e.replace(X, ``)),
        desktopDeeplink: `codex://plugins/${encodeURIComponent(e)}`
    } : null
}
var U, W, G, K, q, J, Y, X, Z, Q, $, ae = e((() => {
    p(), U = w(), i(), j(), k(), F(), o(), P(), z(), ee(), l(), d(), a(), C(), O(), W = t(x()), y(), G = h(), K = {
        hasRouteMeta: !0,
        useScrollRestoration: !0
    }, q = () => [{
        title: `ChatGPT plugin share`
    }], J = `h-12`, Y = /^[a-z0-9]+(?:-[a-z0-9]+)*@(?:openai-bundled|openai-primary-runtime)$/, X = /@(?:openai-bundled|openai-primary-runtime)$/, Z = b(function() {
        "use forget";
        let e = (0, U.c)(7),
            {
                shareKey: t,
                showPluginDetailPage: n
            } = m(),
            r;
        e[0] === t ? r = e[1] : (r = ie(t), e[0] = t, e[1] = r);
        let i = r;
        if (n && i == null) {
            let n;
            return e[2] === t ? n = e[3] : (n = (0, G.jsx)(V, {
                shareKey: t
            }), e[2] = t, e[3] = n), n
        }
        let a;
        return e[4] !== i || e[5] !== t ? (a = (0, G.jsx)(H, {
            firstPartyPluginShare: i,
            shareKey: t
        }), e[4] = i, e[5] = t, e[6] = a) : a = e[6], a
    }), Q = g({
        title: {
            id: `chatgpt.plugins.share.desktop_open.title`,
            defaultMessage: `Opening ChatGPT`
        },
        mobileTitle: {
            id: `wham.codexPluginShareDeeplink.mobileTitle`,
            defaultMessage: `Open this plugin on desktop`
        },
        mobileBody: {
            id: `chatgpt.plugins.share.desktop_open.mobile.body`,
            defaultMessage: `This plugin opens in the ChatGPT app. To continue, open this link on a desktop computer.`
        },
        openingAppBody: {
            id: `chatgpt.plugins.share.desktop_open.body`,
            defaultMessage: `We’re opening your ChatGPT app. If it doesn’t open, click the button below.`
        },
        openingPluginBody: {
            id: `wham.codexPluginShareDeeplink.openingPluginBody`,
            defaultMessage: `Opening plugin: {pluginDisplayName}`
        },
        loadingTitle: {
            id: `wham.codexPluginShareDeeplink.loadingTitle`,
            defaultMessage: `Loading plugin...`
        },
        loadingBody: {
            id: `wham.codexPluginShareDeeplink.loadingBody`,
            defaultMessage: `Checking this plugin share link.`
        },
        notFoundTitle: {
            id: `wham.codexPluginShareDeeplink.notFoundTitle`,
            defaultMessage: `Plugin unavailable`
        },
        notFoundBody: {
            id: `wham.codexPluginShareDeeplink.notFoundBody`,
            defaultMessage: `Plugin not found or you don’t have access to it.`
        },
        accountRequiredTitle: {
            id: `wham.codexPluginShareDeeplink.accountRequiredTitle`,
            defaultMessage: `Log in to ChatGPT`
        },
        accountRequiredBody: {
            id: `wham.codexPluginShareDeeplink.accountRequiredBody`,
            defaultMessage: `Log in or create an account first to view this plugin`
        },
        errorBody: {
            id: `wham.codexPluginShareDeeplink.errorBody`,
            defaultMessage: `We couldn't load this plugin share link. Please try again.`
        },
        downloadButton: {
            id: `wham.codexPluginShareDeeplink.downloadButton`,
            defaultMessage: `Download the app`
        },
        openButton: {
            id: `chatgpt.plugins.share.desktop_open.button.label`,
            defaultMessage: `Open ChatGPT`
        },
        createAccountButton: {
            id: `wham.codexPluginShareDeeplink.createAccountButton`,
            defaultMessage: `Sign up`
        },
        logInButton: {
            id: `wham.codexPluginShareDeeplink.logInButton`,
            defaultMessage: `Log in`
        }
    }), $ = S(c)
}));
export {
    Z as a, q as i, K as n, ae as r, $ as t
};
//# sourceMappingURL=2f791fba-i2eyz1lsgu4jnvtz.js.map
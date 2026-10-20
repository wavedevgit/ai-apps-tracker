import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Fn as n,
    In as r,
    JT as i,
    Ln as a,
    YT as o,
    Ytt as s,
    dit as c,
    fit as l,
    mnt as ee,
    o as u,
    s as d
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as f,
    Ht as p,
    Ln as m,
    Nn as h,
    O as g,
    Q as _,
    Rn as v,
    Ut as y,
    Vn as b,
    kt as x,
    s as S,
    wn as C
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    MJ as w,
    ewn as T,
    iwn as E,
    jJ as D,
    nBt as O,
    tBt as k
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    bC as A,
    xC as j
} from "./30901919-e8h11sw136qen6v0.js";
import {
    t as M
} from "./9ac7a75a-wz31coczqbyok3qn.js";
import {
    i as N,
    o as P
} from "./e19f3910-loev8shk5up3qwjb.js";
import {
    i as F,
    n as I,
    r as L,
    t as R
} from "./18931466-h2pksajpy6akvovk.js";
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
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = l(), t[0] = r) : r = t[0];
    let i = !r,
        a;
    t[1] === n ? a = t[2] : (a = {
        queryKey: [`plugin-share`, n],
        queryFn: () => T({
            shareKey: n
        }),
        retry: !1
    }, t[1] = n, t[2] = a);
    let o = g(a),
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
        a;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (a = M(), t[0] = a) : a = t[0];
    let o = a,
        s;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (s = ee(), t[1] = s) : s = t[1];
    let c = s,
        u = l(),
        d = re,
        f = n == null,
        p, m;
    t[2] === r ? (p = t[3], m = t[4]) : (p = [`plugin-share`, r], m = () => T({
        shareKey: r
    }), t[2] = r, t[3] = p, t[4] = m);
    let _;
    t[5] !== f || t[6] !== p || t[7] !== m ? (_ = {
        enabled: f,
        queryKey: p,
        queryFn: m,
        retry: !1
    }, t[5] = f, t[6] = p, t[7] = m, t[8] = _) : _ = t[8];
    let v = g(_),
        y;
    y = n == null ? v.isPending ? {
        kind: `loading`
    } : v.isError ? {
        kind: `error`
    } : v.data == null ? u ? {
        kind: `not_found_or_no_access`
    } : {
        kind: `account_required`
    } : {
        kind: `deeplink`,
        pluginShare: v.data
    } : {
        kind: `deeplink`,
        pluginShare: n
    };
    let b = y.kind === `deeplink` && !c ? y.pluginShare.desktopDeeplink : null;
    (0, W.useEffect)(() => {
        b != null && B(b)
    }, [b]);
    let x;
    t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (x = (0, G.jsx)(A, {
        className: `mb-10 size-[88px]`,
        "aria-hidden": !0
    }), t[9] = x) : x = t[9];
    let S = y.kind === `deeplink` ? (0, G.jsx)(h, {
            ...c ? Q.mobileTitle : Q.title
        }) : y.kind === `loading` ? (0, G.jsx)(h, {
            ...Q.loadingTitle
        }) : y.kind === `account_required` ? (0, G.jsx)(h, {
            ...Q.accountRequiredTitle
        }) : (0, G.jsx)(h, {
            ...Q.notFoundTitle
        }),
        C;
    t[10] === S ? C = t[11] : (C = (0, G.jsx)(`h1`, {
        className: `mb-4 text-[34px] leading-10 font-semibold`,
        children: S
    }), t[10] = S, t[11] = C);
    let w = y.kind === `deeplink` ? c ? (0, G.jsx)(`p`, {
            className: `text-token-text-secondary max-w-[520px] text-[15px] leading-[22px]`,
            children: (0, G.jsx)(h, {
                ...Q.mobileBody
            })
        }) : (0, G.jsxs)(G.Fragment, {
            children: [(0, G.jsx)(`p`, {
                className: `text-token-text-secondary max-w-[520px] text-[15px] leading-[22px]`,
                children: (0, G.jsx)(h, {
                    ...Q.openingAppBody
                })
            }), y.pluginShare.displayName.trim() === `` ? null : (0, G.jsx)(`p`, {
                className: `text-token-text-tertiary mt-4 max-w-[520px] text-sm leading-5`,
                children: (0, G.jsx)(h, {
                    ...Q.openingPluginBody,
                    values: {
                        pluginDisplayName: y.pluginShare.displayName
                    }
                })
            })]
        }) : y.kind === `loading` ? (0, G.jsx)(`p`, {
            className: `text-token-text-secondary max-w-[520px] text-[15px] leading-[22px]`,
            children: (0, G.jsx)(h, {
                ...Q.loadingBody
            })
        }) : (0, G.jsx)(`p`, {
            className: `text-token-text-secondary max-w-[520px] text-[15px] leading-[22px]`,
            children: (0, G.jsx)(h, {
                ...y.kind === `account_required` ? Q.accountRequiredBody : y.kind === `error` ? Q.errorBody : Q.notFoundBody
            })
        }),
        E;
    t[12] !== y.kind || t[13] !== y.pluginShare ? (E = y.kind === `deeplink` && !c ? (0, G.jsxs)(`div`, {
        className: `mt-8 flex w-full max-w-sm flex-col gap-3`,
        children: [o == null ? null : (0, G.jsx)(i, {
            type: `button`,
            color: `primary`,
            className: J,
            onClick: te,
            children: (0, G.jsx)(h, {
                ...Q.downloadButton
            })
        }), (0, G.jsx)(i, {
            type: `button`,
            color: o == null ? `primary` : `secondary`,
            className: J,
            onClick: () => {
                B(y.pluginShare.desktopDeeplink)
            },
            children: (0, G.jsx)(h, {
                ...Q.openButton
            })
        })]
    }) : null, t[12] = y.kind, t[13] = y.pluginShare, t[14] = E) : E = t[14];
    let D;
    t[15] === y.kind ? D = t[16] : (D = y.kind === `account_required` ? (0, G.jsxs)(`div`, {
        className: `mt-8 flex w-full max-w-sm flex-col gap-3`,
        children: [(0, G.jsx)(i, {
            type: `button`,
            color: `primary`,
            className: J,
            onClick: d,
            children: (0, G.jsx)(h, {
                ...Q.logInButton
            })
        }), (0, G.jsx)(i, {
            type: `button`,
            color: `secondary`,
            className: J,
            onClick: d,
            children: (0, G.jsx)(h, {
                ...Q.createAccountButton
            })
        })]
    }) : null, t[15] = y.kind, t[16] = D);
    let O;
    return t[17] !== C || t[18] !== w || t[19] !== E || t[20] !== D || t[21] !== x ? (O = (0, G.jsx)(`main`, {
        className: `bg-token-bg-primary text-token-text-primary flex min-h-screen flex-col items-center justify-center px-6 py-10`,
        children: (0, G.jsxs)(`section`, {
            className: `flex w-full max-w-[520px] flex-col items-center text-center`,
            children: [x, C, w, E, D]
        })
    }), t[17] = C, t[18] = w, t[19] = E, t[20] = D, t[21] = x, t[22] = O) : O = t[22], O
}

function te() {
    D.recordCodexAppSurfaceAction(`plugin_share`, `download`), N({
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
        displayName: O(e.replace(X, ``)),
        desktopDeeplink: `codex://plugins/${encodeURIComponent(e)}`
    } : null
}
var U, W, G, K, q, J, Y, X, Z, Q, $, ae = e((() => {
    _(), U = C(), o(), j(), E(), F(), s(), P(), z(), w(), c(), d(), a(), S(), k(), W = t(b()), v(), G = f(), K = {
        hasRouteMeta: !0,
        useScrollRestoration: !0
    }, q = () => [{
        title: `ChatGPT plugin share`
    }], J = `h-12`, Y = /^[a-z0-9]+(?:-[a-z0-9]+)*@(?:openai-bundled|openai-primary-runtime)$/, X = /@(?:openai-bundled|openai-primary-runtime)$/, Z = p(function() {
        "use forget";
        let e = (0, U.c)(7),
            {
                shareKey: t,
                showPluginDetailPage: n
            } = x(),
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
    }), Q = m({
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
    }), $ = y(u)
}));
export {
    Z as a, q as i, K as n, ae as r, $ as t
};
//# sourceMappingURL=2f791fba-j971fi998fztbaek.js.map
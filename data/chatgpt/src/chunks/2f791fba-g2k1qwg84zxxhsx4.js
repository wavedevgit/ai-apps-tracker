import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as n,
    Fn as r,
    In as i,
    Itt as a,
    Ln as o,
    Nrt as s,
    Prt as c,
    _tt as l,
    kT as u,
    o as d,
    s as f
} from "./4813494d-cb22y2w19zwyshmt.js";
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
    DJ as T,
    EJ as E,
    LCn as D,
    VCn as O,
    Xzt as k,
    Yzt as ee
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    bC as A,
    xC as j
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    t as M
} from "./9ac7a75a-fqy7qnhwh7jd5rfv.js";
import {
    i as N,
    o as P
} from "./e19f3910-nriy7br1qc4gkn80.js";
import {
    i as F,
    n as I,
    r as L,
    t as R
} from "./18931466-e28s4g1thvso33ew.js";
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
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = c(), t[0] = r) : r = t[0];
    let i = !r,
        a;
    t[1] === n ? a = t[2] : (a = {
        queryKey: [`plugin-share`, n],
        queryFn: () => D({
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
    let l;
    return t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (l = (0, G.jsx)(R, {
        hideBackButton: !0
    }), t[13] = l) : l = t[13], l
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
    let o = i,
        s;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (s = a(), t[1] = s) : s = t[1];
    let l = s,
        d = c(),
        f = re,
        p = n == null,
        m, h;
    t[2] === r ? (m = t[3], h = t[4]) : (m = [`plugin-share`, r], h = () => D({
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
    } : y.data == null ? d ? {
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
    let x = b.kind === `deeplink` && !l ? b.pluginShare.desktopDeeplink : null;
    (0, W.useEffect)(() => {
        x != null && B(x)
    }, [x]);
    let S;
    t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (S = (0, G.jsx)(A, {
        className: `mb-10 size-[88px]`,
        "aria-hidden": !0
    }), t[9] = S) : S = t[9];
    let C = b.kind === `deeplink` ? (0, G.jsx)(_, {
            ...l ? Q.mobileTitle : Q.title
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
    let T = b.kind === `deeplink` ? l ? (0, G.jsx)(`p`, {
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
        E;
    t[12] !== b.kind || t[13] !== b.pluginShare ? (E = b.kind === `deeplink` && !l ? (0, G.jsxs)(`div`, {
        className: `mt-8 flex w-full max-w-sm flex-col gap-3`,
        children: [o == null ? null : (0, G.jsx)(u, {
            type: `button`,
            color: `primary`,
            className: J,
            onClick: te,
            children: (0, G.jsx)(_, {
                ...Q.downloadButton
            })
        }), (0, G.jsx)(u, {
            type: `button`,
            color: o == null ? `primary` : `secondary`,
            className: J,
            onClick: () => {
                B(b.pluginShare.desktopDeeplink)
            },
            children: (0, G.jsx)(_, {
                ...Q.openButton
            })
        })]
    }) : null, t[12] = b.kind, t[13] = b.pluginShare, t[14] = E) : E = t[14];
    let O;
    t[15] === b.kind ? O = t[16] : (O = b.kind === `account_required` ? (0, G.jsxs)(`div`, {
        className: `mt-8 flex w-full max-w-sm flex-col gap-3`,
        children: [(0, G.jsx)(u, {
            type: `button`,
            color: `primary`,
            className: J,
            onClick: f,
            children: (0, G.jsx)(_, {
                ...Q.logInButton
            })
        }), (0, G.jsx)(u, {
            type: `button`,
            color: `secondary`,
            className: J,
            onClick: f,
            children: (0, G.jsx)(_, {
                ...Q.createAccountButton
            })
        })]
    }) : null, t[15] = b.kind, t[16] = O);
    let k;
    return t[17] !== w || t[18] !== T || t[19] !== E || t[20] !== O || t[21] !== S ? (k = (0, G.jsx)(`main`, {
        className: `bg-token-bg-primary text-token-text-primary flex min-h-screen flex-col items-center justify-center px-6 py-10`,
        children: (0, G.jsxs)(`section`, {
            className: `flex w-full max-w-[520px] flex-col items-center text-center`,
            children: [S, w, T, E, O]
        })
    }), t[17] = w, t[18] = T, t[19] = E, t[20] = O, t[21] = S, t[22] = k) : k = t[22], k
}

function te() {
    E.recordCodexAppSurfaceAction(`plugin_share`, `download`), N({
        trackSelectedPixels: ne,
        redirectToGetStarted: !1
    })
}

function ne() {}

function re() {
    window.location.assign(r({
        callbackPath: i()
    }))
}

function ie(e) {
    return Y.test(e) ? {
        pluginId: e,
        displayName: k(e.replace(X, ``)),
        desktopDeeplink: `codex://plugins/${encodeURIComponent(e)}`
    } : null
}
var U, W, G, K, q, J, Y, X, Z, Q, $, ae = e((() => {
    p(), U = w(), n(), j(), O(), F(), l(), P(), z(), T(), s(), f(), o(), C(), ee(), W = t(x()), y(), G = h(), K = {
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
    }), $ = S(d)
}));
export {
    Z as a, q as i, K as n, ae as r, $ as t
};
//# sourceMappingURL=2f791fba-g2k1qwg84zxxhsx4.js.map
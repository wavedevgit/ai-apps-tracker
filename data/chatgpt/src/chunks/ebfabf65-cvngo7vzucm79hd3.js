import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    Aw as r,
    Cv as i,
    Iv as a,
    Jv as o,
    Kv as s,
    LU as c,
    Ov as l,
    Ow as u,
    Vw as d,
    Xh as f,
    Yat as p,
    eE as m,
    ev as h,
    qh as g,
    tot as _,
    zU as v,
    zw as y
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Bn as b,
    Ln as x,
    Nn as S,
    Nt as ee,
    Q as C,
    Rn as w,
    Vn as T,
    wn as E,
    zn as te
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    FTn as D,
    PTn as ne
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    Cv as O,
    Sv as k,
    Xx as A,
    Zx as j,
    nm as M,
    rm as N
} from "./30901919-k5uqyx4vyplt9toa.js";
import {
    mt as P,
    pt as re
} from "./c470f5ab-bhx5jraq636jc4ww.js";

function ie(e) {
    "use forget";
    let t = (0, L.c)(21),
        {
            isOpen: n,
            onCancel: r,
            onConfirm: i,
            confirmText: a,
            cancelText: o,
            title: s,
            description: c,
            loading: l,
            testId: d
        } = e,
        f;
    t[0] === r ? f = t[1] : (f = () => r(), t[0] = r, t[1] = f);
    let p;
    t[2] === s ? p = t[3] : (p = (0, z.jsx)(`span`, {
        className: `text-xl leading-7 font-semibold`,
        children: s
    }), t[2] = s, t[3] = p);
    let m;
    t[4] !== a || t[5] !== l || t[6] !== i ? (m = (0, z.jsx)(y.Button, {
        title: a,
        color: `primary`,
        onClick: i,
        loading: l
    }), t[4] = a, t[5] = l, t[6] = i, t[7] = m) : m = t[7];
    let h;
    t[8] !== o || t[9] !== r ? (h = (0, z.jsx)(y.Button, {
        title: o,
        color: `secondary`,
        onClick: r
    }), t[8] = o, t[9] = r, t[10] = h) : h = t[10];
    let g;
    t[11] === c ? g = t[12] : (g = (0, z.jsx)(`div`, {
        className: `text-token-text-secondary mt-6 text-center text-base leading-6 text-balance`,
        children: c
    }), t[11] = c, t[12] = g);
    let _;
    return t[13] !== n || t[14] !== f || t[15] !== p || t[16] !== m || t[17] !== h || t[18] !== g || t[19] !== d ? (_ = (0, z.jsx)(u, {
        testId: d,
        isOpen: n,
        onClose: f,
        title: p,
        textCenter: !0,
        size: `large`,
        className: `max-w-[520px]`,
        headerClassName: `px-8 pt-8 pb-0`,
        contentClassName: `px-8 pt-0 pb-10`,
        primaryButton: m,
        secondaryButton: h,
        children: g
    }), t[13] = n, t[14] = f, t[15] = p, t[16] = m, t[17] = h, t[18] = g, t[19] = d, t[20] = _) : _ = t[20], _
}

function F(e) {
    "use forget";
    let t = (0, L.c)(53),
        {
            config: r
        } = e,
        a = te(),
        s = ee(),
        c = v(),
        [d, f] = (0, R.useState)(!1),
        [m, _] = (0, R.useState)(!1),
        y;
    t[0] === a ? y = t[1] : (y = a.formatMessage(B.continue), t[0] = a, t[1] = y);
    let b = y,
        x;
    t[2] === a ? x = t[3] : (x = a.formatMessage(B.cancel), t[2] = a, t[3] = x);
    let C = x,
        w = r.requireInstallConfirmation ?? !0,
        T = r.redirectTo ?? `/`,
        E = r.infoBlurbs ?? V,
        D = r.dataDisclaimer ?? B.dataDisclaimer,
        O;
    t[4] !== s || t[5] !== T ? (O = () => s(T), t[4] = s, t[5] = T, t[6] = O) : O = t[6];
    let k = O,
        A;
    t[7] !== r.connectorPlatformParams || t[8] !== r.productSku || t[9] !== r.startOauth || t[10] !== a || t[11] !== T || t[12] !== c ? (A = async () => {
        _(!1);
        try {
            f(!0);
            let e = i.Default;
            r.productSku === ne.SERVICE_ACCOUNTS && (window.location.hostname === `localhost` ? e = i.Localhost : o(window.location.origin) && (e = i.StagingGateway)), await l({
                redirectUri: h(r.connectorPlatformParams.connectorId, void 0, e),
                connectorPlatformParams: r.connectorPlatformParams,
                redirectTo: T,
                productSku: r.productSku,
                startOauth: r.startOauth,
                intl: a,
                toaster: c
            })
        } catch (e) {
            let t = e;
            f(!1), c.danger(a.formatMessage(B.errorToast)), t instanceof p
        }
    }, t[7] = r.connectorPlatformParams, t[8] = r.productSku, t[9] = r.startOauth, t[10] = a, t[11] = T, t[12] = c, t[13] = A) : A = t[13];
    let j = A,
        M;
    t[14] !== j || t[15] !== w ? (M = () => {
        if (w) {
            _(!0);
            return
        }
        j()
    }, t[14] = j, t[15] = w, t[16] = M) : M = t[16];
    let N = M,
        P = r.testId,
        F;
    t[17] === Symbol.for(`react.memo_cache_sentinel`) ? (F = (0, z.jsx)(g, {
        className: `h-10 w-10`
    }), t[17] = F) : F = t[17];
    let H;
    t[18] === Symbol.for(`react.memo_cache_sentinel`) ? (H = (0, z.jsxs)(`div`, {
        className: `flex items-center gap-2.5`,
        children: [F, (0, z.jsxs)(`div`, {
            className: `flex gap-1`,
            children: [(0, z.jsx)(`span`, {
                className: `h-1.5 w-1.5 rounded-full bg-gray-200`
            }), (0, z.jsx)(`span`, {
                className: `h-1.5 w-1.5 rounded-full bg-gray-200`
            }), (0, z.jsx)(`span`, {
                className: `h-1.5 w-1.5 rounded-full bg-gray-200`
            })]
        }), (0, z.jsx)(re, {
            className: `h-10 w-10`
        })]
    }), t[18] = H) : H = t[18];
    let U;
    t[19] === r.title ? U = t[20] : (U = (0, z.jsx)(`div`, {
        className: `pt-4 text-center text-2xl font-semibold`,
        children: (0, z.jsx)(S, {
            ...r.title
        })
    }), t[19] = r.title, t[20] = U);
    let W;
    t[21] === r.subtitle ? W = t[22] : (W = (0, z.jsx)(`div`, {
        className: `text-token-text-tertiary pt-1 text-sm`,
        children: (0, z.jsx)(S, {
            ...r.subtitle
        })
    }), t[21] = r.subtitle, t[22] = W);
    let G;
    t[23] !== W || t[24] !== U ? (G = (0, z.jsxs)(`div`, {
        className: `flex flex-col items-center`,
        children: [H, U, W]
    }), t[23] = W, t[24] = U, t[25] = G) : G = t[25];
    let K;
    t[26] === E ? K = t[27] : (K = E.map(ue), t[26] = E, t[27] = K);
    let q;
    t[28] === K ? q = t[29] : (q = (0, z.jsx)(`div`, {
        className: `border-token-border-default mt-8 mb-4 rounded-2xl border px-4`,
        children: K
    }), t[28] = K, t[29] = q);
    let J;
    t[30] === Symbol.for(`react.memo_cache_sentinel`) ? (J = {
        chatgptTermsLink: le,
        chatgptPrivacyLink: ce,
        slackTermsLink: se,
        slackPrivacyLink: oe,
        learnMoreLink: ae
    }, t[30] = J) : J = t[30];
    let Y;
    t[31] === D ? Y = t[32] : (Y = (0, z.jsx)(`div`, {
        className: `text-token-text-tertiary mt-3 text-center text-xs`,
        children: (0, z.jsx)(S, {
            ...D,
            values: J
        })
    }), t[31] = D, t[32] = Y);
    let X;
    t[33] === Symbol.for(`react.memo_cache_sentinel`) ? (X = (0, z.jsx)(S, {
        ...B.continue
    }), t[33] = X) : X = t[33];
    let Z;
    t[34] !== d || t[35] !== N ? (Z = (0, z.jsx)(n, {
        className: `mt-6 w-full`,
        size: `large`,
        onClick: N,
        loading: d,
        children: X
    }), t[34] = d, t[35] = N, t[36] = Z) : Z = t[36];
    let Q;
    t[37] !== C || t[38] !== r.testId || t[39] !== b || t[40] !== j || t[41] !== m || t[42] !== d || t[43] !== w ? (Q = w && (0, z.jsx)(ie, {
        testId: `${r.testId}-confirm`,
        isOpen: m,
        onCancel: () => _(!1),
        onConfirm: j,
        confirmText: b,
        cancelText: C,
        title: (0, z.jsx)(S, {
            ...B.reinstallCheckConfirmTitle
        }),
        description: (0, z.jsx)(S, {
            ...B.reinstallCheckBanner,
            values: {
                installedAppsLink: I
            }
        }),
        loading: d
    }), t[37] = C, t[38] = r.testId, t[39] = b, t[40] = j, t[41] = m, t[42] = d, t[43] = w, t[44] = Q) : Q = t[44];
    let $;
    return t[45] !== r.testId || t[46] !== k || t[47] !== G || t[48] !== q || t[49] !== Y || t[50] !== Z || t[51] !== Q ? ($ = (0, z.jsxs)(u, {
        testId: P,
        type: `success`,
        isOpen: !0,
        onClose: k,
        size: `custom`,
        className: `max-w-[400px]`,
        contentClassName: `px-8 pt-10 pb-8`,
        children: [G, q, Y, Z, Q]
    }), t[45] = r.testId, t[46] = k, t[47] = G, t[48] = q, t[49] = Y, t[50] = Z, t[51] = Q, t[52] = $) : $ = t[52], $
}

function I(e) {
    return (0, z.jsx)(`a`, {
        href: `https://my.slack.com/apps/manage`,
        target: `_blank`,
        rel: `noreferrer`,
        className: `underline`,
        children: e
    })
}

function ae(e) {
    return (0, z.jsx)(`a`, {
        href: `https://help.openai.com/en/articles/12462158`,
        target: `_blank`,
        rel: `noreferrer`,
        className: `underline`,
        children: e
    })
}

function oe(e) {
    return (0, z.jsx)(`a`, {
        href: `https://slack.com/trust/privacy/privacy-policy#:~:text=Customer%20Data%20will%20be%20used,the%20Customer%20is%20the%20controller.`,
        target: `_blank`,
        rel: `noreferrer`,
        className: `underline`,
        children: e
    })
}

function se(e) {
    return (0, z.jsx)(`a`, {
        href: `https://slack.com/terms-of-service/user`,
        target: `_blank`,
        rel: `noreferrer`,
        className: `underline`,
        children: e
    })
}

function ce(e) {
    return (0, z.jsx)(`a`, {
        href: `https://openai.com/policies/row-privacy-policy/`,
        target: `_blank`,
        rel: `noreferrer`,
        className: `underline`,
        children: e
    })
}

function le(e) {
    return (0, z.jsx)(`a`, {
        href: `https://openai.com/policies/row-terms-of-use/`,
        target: `_blank`,
        rel: `noreferrer`,
        className: `underline`,
        children: e
    })
}

function ue(e) {
    let {
        Icon: t,
        title: n,
        description: r,
        values: i
    } = e;
    return (0, z.jsxs)(`div`, {
        className: `border-token-border-default flex items-center gap-4 border-b py-4 text-sm last-of-type:border-none`,
        children: [(0, z.jsx)(`span`, {
            children: (0, z.jsx)(t, {
                className: `h-6 w-6`
            })
        }), (0, z.jsxs)(`div`, {
            children: [(0, z.jsx)(`div`, {
                className: `pb-0.5 font-medium`,
                children: (0, z.jsx)(S, {
                    ...n
                })
            }), (0, z.jsx)(`div`, {
                className: `text-token-text-secondary`,
                children: (0, z.jsx)(S, {
                    ...r,
                    values: i
                })
            })]
        })]
    }, n.id)
}
var L, R, z, B, V, H = e((() => {
    L = E(), m(), O(), N(), P(), A(), d(), r(), f(), a(), D(), c(), s(), _(), R = t(T()), w(), C(), z = b(), B = x({
        permissionsTitle: {
            id: `slackAiAppInstall.permissionsTitle`,
            defaultMessage: `Permissions always respected`
        },
        permissionsDescription: {
            id: `slackAiAppInstall.permissionsDescription`,
            defaultMessage: `ChatGPT only accesses Slack data you authorize.`
        },
        directAnswerTitle: {
            id: `slackAiAppInstall.directAnswerTitle`,
            defaultMessage: `Get answers directly in Slack`
        },
        directAnswerDescription: {
            id: `slackAiAppInstall.directAnswerDescription`,
            defaultMessage: `Work with ChatGPT in your Slack workspace without switching tools. ChatGPT will get a copy of your Slack conversations and give you responses in Slack. Your ChatGPT <memoriesLink>memories</memoriesLink> may be used in responses that are shared with Slack if allowed in your settings.`
        },
        manageTitle: {
            id: `slackAiAppInstall.manageTitle`,
            defaultMessage: `Manage or uninstall anytime`
        },
        manageDescription: {
            id: `slackAiAppInstall.manageDescription`,
            defaultMessage: `You can manage or uninstall the ChatGPT Slack app at <link>my.slack.com/apps/manage</link>.`
        },
        reinstallCheckBanner: {
            id: `slackAiAppInstall.reinstallCheckBanner`,
            defaultMessage: `Before continuing, check whether the ChatGPT app is already installed in your Slack workspace. You can verify on the <installedAppsLink>Installed Apps page</installedAppsLink> or under Preferences -> Navigation -> App Agents & Assistants. It only needs to be installed once per workspace, usually by a Slack admin.`
        },
        reinstallCheckConfirmTitle: {
            id: `slackAiAppInstall.reinstallCheckConfirmTitle`,
            defaultMessage: `Confirm before continuing to Slack`
        },
        cancel: {
            id: `slackAiAppInstall.cancel`,
            defaultMessage: `Cancel`
        },
        continue: {
            id: `slackAiAppInstall.continue`,
            defaultMessage: `Continue to Slack`
        },
        dataDisclaimer: {
            id: `slackAiAppInstall.dataDisclaimer`,
            defaultMessage: `ChatGPT will process your data according to the ChatGPT <chatgptTermsLink>terms</chatgptTermsLink> and <chatgptPrivacyLink>privacy policy</chatgptPrivacyLink> and your ChatGPT settings. Slack will process your data according to the <slackTermsLink>Slack terms</slackTermsLink> and <slackPrivacyLink>privacy policy</slackPrivacyLink>. You are in control of your data. <learnMoreLink>Learn more</learnMoreLink>.`
        },
        errorToast: {
            id: `slackAiAppInstall.errorToast`,
            defaultMessage: `Couldn't start the authentication flow for the app. Make sure it is enabled in your apps directory`
        }
    }), V = [{
        Icon: j,
        title: B.permissionsTitle,
        description: B.permissionsDescription
    }, {
        Icon: k,
        title: B.directAnswerTitle,
        description: B.directAnswerDescription,
        values: {
            memoriesLink: e => (0, z.jsx)(`a`, {
                href: `https://help.openai.com/en/articles/8590148-memory-faq`,
                target: `_blank`,
                rel: `noreferrer`,
                className: `underline`,
                children: e
            })
        }
    }, {
        Icon: M,
        title: B.manageTitle,
        description: B.manageDescription,
        values: {
            link: e => (0, z.jsx)(`a`, {
                href: `https://my.slack.com/apps/manage`,
                target: `_blank`,
                rel: `noreferrer`,
                className: `underline`,
                children: e
            })
        }
    }]
}));
export {
    H as n, F as t
};
//# sourceMappingURL=ebfabf65-cvngo7vzucm79hd3.js.map
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $_ as n,
    Dv as r,
    Fat as i,
    Fv as a,
    Fw as o,
    Gv as s,
    JT as c,
    Kh as l,
    Nw as u,
    Sv as d,
    Sw as f,
    VU as p,
    Yh as m,
    kat as h,
    qT as g,
    qv as _,
    ww as v,
    zU as y
} from "./4813494d-dfpv67hlp00pbohr.js";
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
    eTn as ne,
    tTn as D
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    $x as O,
    Qx as k,
    Tv as A,
    am as j,
    im as M,
    wv as N
} from "./30901919-7dzdc1ou0jtwkwpt.js";
import {
    mt as P,
    pt as re
} from "./c470f5ab-d4g7lc53n1e1ao7o.js";

function F(e) {
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
        p;
    t[0] === r ? p = t[1] : (p = () => r(), t[0] = r, t[1] = p);
    let m;
    t[2] === s ? m = t[3] : (m = (0, z.jsx)(`span`, {
        className: `text-xl leading-7 font-semibold`,
        children: s
    }), t[2] = s, t[3] = m);
    let h;
    t[4] !== a || t[5] !== l || t[6] !== i ? (h = (0, z.jsx)(u.Button, {
        title: a,
        color: `primary`,
        onClick: i,
        loading: l
    }), t[4] = a, t[5] = l, t[6] = i, t[7] = h) : h = t[7];
    let g;
    t[8] !== o || t[9] !== r ? (g = (0, z.jsx)(u.Button, {
        title: o,
        color: `secondary`,
        onClick: r
    }), t[8] = o, t[9] = r, t[10] = g) : g = t[10];
    let _;
    t[11] === c ? _ = t[12] : (_ = (0, z.jsx)(`div`, {
        className: `text-token-text-secondary mt-6 text-center text-base leading-6 text-balance`,
        children: c
    }), t[11] = c, t[12] = _);
    let v;
    return t[13] !== n || t[14] !== p || t[15] !== m || t[16] !== h || t[17] !== g || t[18] !== _ || t[19] !== d ? (v = (0, z.jsx)(f, {
        testId: d,
        isOpen: n,
        onClose: p,
        title: m,
        textCenter: !0,
        size: `large`,
        className: `max-w-[520px]`,
        headerClassName: `px-8 pt-8 pb-0`,
        contentClassName: `px-8 pt-0 pb-10`,
        primaryButton: h,
        secondaryButton: g,
        children: _
    }), t[13] = n, t[14] = p, t[15] = m, t[16] = h, t[17] = g, t[18] = _, t[19] = d, t[20] = v) : v = t[20], v
}

function I(e) {
    "use forget";
    let t = (0, L.c)(53),
        {
            config: i
        } = e,
        a = te(),
        o = ee(),
        s = p(),
        [c, u] = (0, R.useState)(!1),
        [m, v] = (0, R.useState)(!1),
        y;
    t[0] === a ? y = t[1] : (y = a.formatMessage(B.continue), t[0] = a, t[1] = y);
    let b = y,
        x;
    t[2] === a ? x = t[3] : (x = a.formatMessage(B.cancel), t[2] = a, t[3] = x);
    let C = x,
        w = i.requireInstallConfirmation ?? !0,
        T = i.redirectTo ?? `/`,
        E = i.infoBlurbs ?? V,
        D = i.dataDisclaimer ?? B.dataDisclaimer,
        O;
    t[4] !== o || t[5] !== T ? (O = () => o(T), t[4] = o, t[5] = T, t[6] = O) : O = t[6];
    let k = O,
        A;
    t[7] !== i.connectorPlatformParams || t[8] !== i.productSku || t[9] !== i.startOauth || t[10] !== a || t[11] !== T || t[12] !== s ? (A = async () => {
        v(!1);
        try {
            u(!0);
            let e = d.Default;
            i.productSku === ne.SERVICE_ACCOUNTS && (window.location.hostname === `localhost` ? e = d.Localhost : _(window.location.origin) && (e = d.StagingGateway)), await r({
                redirectUri: n(i.connectorPlatformParams.connectorId, void 0, e),
                connectorPlatformParams: i.connectorPlatformParams,
                redirectTo: T,
                productSku: i.productSku,
                startOauth: i.startOauth,
                intl: a,
                toaster: s
            })
        } catch (e) {
            let t = e;
            u(!1), s.danger(a.formatMessage(B.errorToast)), t instanceof h
        }
    }, t[7] = i.connectorPlatformParams, t[8] = i.productSku, t[9] = i.startOauth, t[10] = a, t[11] = T, t[12] = s, t[13] = A) : A = t[13];
    let j = A,
        M;
    t[14] !== j || t[15] !== w ? (M = () => {
        if (w) {
            v(!0);
            return
        }
        j()
    }, t[14] = j, t[15] = w, t[16] = M) : M = t[16];
    let N = M,
        P = i.testId,
        I;
    t[17] === Symbol.for(`react.memo_cache_sentinel`) ? (I = (0, z.jsx)(l, {
        className: `h-10 w-10`
    }), t[17] = I) : I = t[17];
    let H;
    t[18] === Symbol.for(`react.memo_cache_sentinel`) ? (H = (0, z.jsxs)(`div`, {
        className: `flex items-center gap-2.5`,
        children: [I, (0, z.jsxs)(`div`, {
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
    t[19] === i.title ? U = t[20] : (U = (0, z.jsx)(`div`, {
        className: `pt-4 text-center text-2xl font-semibold`,
        children: (0, z.jsx)(S, {
            ...i.title
        })
    }), t[19] = i.title, t[20] = U);
    let W;
    t[21] === i.subtitle ? W = t[22] : (W = (0, z.jsx)(`div`, {
        className: `text-token-text-tertiary pt-1 text-sm`,
        children: (0, z.jsx)(S, {
            ...i.subtitle
        })
    }), t[21] = i.subtitle, t[22] = W);
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
    t[34] !== c || t[35] !== N ? (Z = (0, z.jsx)(g, {
        className: `mt-6 w-full`,
        size: `large`,
        onClick: N,
        loading: c,
        children: X
    }), t[34] = c, t[35] = N, t[36] = Z) : Z = t[36];
    let Q;
    t[37] !== C || t[38] !== i.testId || t[39] !== b || t[40] !== j || t[41] !== m || t[42] !== c || t[43] !== w ? (Q = w && (0, z.jsx)(F, {
        testId: `${i.testId}-confirm`,
        isOpen: m,
        onCancel: () => v(!1),
        onConfirm: j,
        confirmText: b,
        cancelText: C,
        title: (0, z.jsx)(S, {
            ...B.reinstallCheckConfirmTitle
        }),
        description: (0, z.jsx)(S, {
            ...B.reinstallCheckBanner,
            values: {
                installedAppsLink: ie
            }
        }),
        loading: c
    }), t[37] = C, t[38] = i.testId, t[39] = b, t[40] = j, t[41] = m, t[42] = c, t[43] = w, t[44] = Q) : Q = t[44];
    let $;
    return t[45] !== i.testId || t[46] !== k || t[47] !== G || t[48] !== q || t[49] !== Y || t[50] !== Z || t[51] !== Q ? ($ = (0, z.jsxs)(f, {
        testId: P,
        type: `success`,
        isOpen: !0,
        onClose: k,
        size: `custom`,
        className: `max-w-[400px]`,
        contentClassName: `px-8 pt-10 pb-8`,
        children: [G, q, Y, Z, Q]
    }), t[45] = i.testId, t[46] = k, t[47] = G, t[48] = q, t[49] = Y, t[50] = Z, t[51] = Q, t[52] = $) : $ = t[52], $
}

function ie(e) {
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
    L = E(), c(), A(), j(), P(), k(), o(), v(), m(), a(), D(), y(), s(), i(), R = t(T()), w(), C(), z = b(), B = x({
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
        Icon: O,
        title: B.permissionsTitle,
        description: B.permissionsDescription
    }, {
        Icon: N,
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
    H as n, I as t
};
//# sourceMappingURL=ebfabf65-c615mbynr19szgpl.js.map
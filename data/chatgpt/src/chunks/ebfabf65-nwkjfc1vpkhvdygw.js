import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as n,
    Ah as r,
    Dh as i,
    Ev as a,
    Ov as o,
    P_ as s,
    Qit as c,
    _w as l,
    cv as u,
    gv as d,
    hU as f,
    hw as p,
    iat as m,
    iw as h,
    kT as g,
    ow as _,
    pU as v,
    rv as y
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as b,
    Bn as x,
    Ln as S,
    Nn as C,
    Pt as ee,
    Rn as w,
    Vn as T,
    wn as E,
    zn as D
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Gwn as O,
    Wwn as te
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    $x as k,
    Dv as A,
    Ov as j,
    Qx as M,
    am as N,
    im as P
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    mt as F,
    pt as ne
} from "./c470f5ab-m68dth1hatzjj8yh.js";

function re(e) {
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
            testId: u
        } = e,
        d;
    t[0] === r ? d = t[1] : (d = () => r(), t[0] = r, t[1] = d);
    let f;
    t[2] === s ? f = t[3] : (f = (0, z.jsx)(`span`, {
        className: `text-xl leading-7 font-semibold`,
        children: s
    }), t[2] = s, t[3] = f);
    let m;
    t[4] !== a || t[5] !== l || t[6] !== i ? (m = (0, z.jsx)(p.Button, {
        title: a,
        color: `primary`,
        onClick: i,
        loading: l
    }), t[4] = a, t[5] = l, t[6] = i, t[7] = m) : m = t[7];
    let g;
    t[8] !== o || t[9] !== r ? (g = (0, z.jsx)(p.Button, {
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
    return t[13] !== n || t[14] !== d || t[15] !== f || t[16] !== m || t[17] !== g || t[18] !== _ || t[19] !== u ? (v = (0, z.jsx)(h, {
        testId: u,
        isOpen: n,
        onClose: d,
        title: f,
        textCenter: !0,
        size: `large`,
        className: `max-w-[520px]`,
        headerClassName: `px-8 pt-8 pb-0`,
        contentClassName: `px-8 pt-0 pb-10`,
        primaryButton: m,
        secondaryButton: g,
        children: _
    }), t[13] = n, t[14] = d, t[15] = f, t[16] = m, t[17] = g, t[18] = _, t[19] = u, t[20] = v) : v = t[20], v
}

function I(e) {
    "use forget";
    let t = (0, L.c)(53),
        {
            config: n
        } = e,
        r = D(),
        a = ee(),
        l = f(),
        [d, p] = (0, R.useState)(!1),
        [m, _] = (0, R.useState)(!1),
        v;
    t[0] === r ? v = t[1] : (v = r.formatMessage(B.continue), t[0] = r, t[1] = v);
    let b = v,
        x;
    t[2] === r ? x = t[3] : (x = r.formatMessage(B.cancel), t[2] = r, t[3] = x);
    let S = x,
        w = n.requireInstallConfirmation ?? !0,
        T = n.redirectTo ?? `/`,
        E = n.infoBlurbs ?? V,
        O = n.dataDisclaimer ?? B.dataDisclaimer,
        k;
    t[4] !== a || t[5] !== T ? (k = () => a(T), t[4] = a, t[5] = T, t[6] = k) : k = t[6];
    let A = k,
        j;
    t[7] !== n.connectorPlatformParams || t[8] !== n.productSku || t[9] !== n.startOauth || t[10] !== r || t[11] !== T || t[12] !== l ? (j = async () => {
        _(!1);
        try {
            p(!0);
            let e = y.Default;
            n.productSku === te.SERVICE_ACCOUNTS && (window.location.hostname === `localhost` ? e = y.Localhost : o(window.location.origin) && (e = y.StagingGateway)), await u({
                redirectUri: s(n.connectorPlatformParams.connectorId, void 0, e),
                connectorPlatformParams: n.connectorPlatformParams,
                redirectTo: T,
                productSku: n.productSku,
                startOauth: n.startOauth,
                intl: r,
                toaster: l
            })
        } catch (e) {
            let t = e;
            p(!1), l.danger(r.formatMessage(B.errorToast)), t instanceof c
        }
    }, t[7] = n.connectorPlatformParams, t[8] = n.productSku, t[9] = n.startOauth, t[10] = r, t[11] = T, t[12] = l, t[13] = j) : j = t[13];
    let M = j,
        N;
    t[14] !== M || t[15] !== w ? (N = () => {
        if (w) {
            _(!0);
            return
        }
        M()
    }, t[14] = M, t[15] = w, t[16] = N) : N = t[16];
    let P = N,
        F = n.testId,
        I;
    t[17] === Symbol.for(`react.memo_cache_sentinel`) ? (I = (0, z.jsx)(i, {
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
        }), (0, z.jsx)(ne, {
            className: `h-10 w-10`
        })]
    }), t[18] = H) : H = t[18];
    let U;
    t[19] === n.title ? U = t[20] : (U = (0, z.jsx)(`div`, {
        className: `pt-4 text-center text-2xl font-semibold`,
        children: (0, z.jsx)(C, {
            ...n.title
        })
    }), t[19] = n.title, t[20] = U);
    let W;
    t[21] === n.subtitle ? W = t[22] : (W = (0, z.jsx)(`div`, {
        className: `text-token-text-tertiary pt-1 text-sm`,
        children: (0, z.jsx)(C, {
            ...n.subtitle
        })
    }), t[21] = n.subtitle, t[22] = W);
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
    t[31] === O ? Y = t[32] : (Y = (0, z.jsx)(`div`, {
        className: `text-token-text-tertiary mt-3 text-center text-xs`,
        children: (0, z.jsx)(C, {
            ...O,
            values: J
        })
    }), t[31] = O, t[32] = Y);
    let X;
    t[33] === Symbol.for(`react.memo_cache_sentinel`) ? (X = (0, z.jsx)(C, {
        ...B.continue
    }), t[33] = X) : X = t[33];
    let Z;
    t[34] !== d || t[35] !== P ? (Z = (0, z.jsx)(g, {
        className: `mt-6 w-full`,
        size: `large`,
        onClick: P,
        loading: d,
        children: X
    }), t[34] = d, t[35] = P, t[36] = Z) : Z = t[36];
    let Q;
    t[37] !== S || t[38] !== n.testId || t[39] !== b || t[40] !== M || t[41] !== m || t[42] !== d || t[43] !== w ? (Q = w && (0, z.jsx)(re, {
        testId: `${n.testId}-confirm`,
        isOpen: m,
        onCancel: () => _(!1),
        onConfirm: M,
        confirmText: b,
        cancelText: S,
        title: (0, z.jsx)(C, {
            ...B.reinstallCheckConfirmTitle
        }),
        description: (0, z.jsx)(C, {
            ...B.reinstallCheckBanner,
            values: {
                installedAppsLink: ie
            }
        }),
        loading: d
    }), t[37] = S, t[38] = n.testId, t[39] = b, t[40] = M, t[41] = m, t[42] = d, t[43] = w, t[44] = Q) : Q = t[44];
    let $;
    return t[45] !== n.testId || t[46] !== A || t[47] !== G || t[48] !== q || t[49] !== Y || t[50] !== Z || t[51] !== Q ? ($ = (0, z.jsxs)(h, {
        testId: F,
        type: `success`,
        isOpen: !0,
        onClose: A,
        size: `custom`,
        className: `max-w-[400px]`,
        contentClassName: `px-8 pt-10 pb-8`,
        children: [G, q, Y, Z, Q]
    }), t[45] = n.testId, t[46] = A, t[47] = G, t[48] = q, t[49] = Y, t[50] = Z, t[51] = Q, t[52] = $) : $ = t[52], $
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
                children: (0, z.jsx)(C, {
                    ...n
                })
            }), (0, z.jsx)(`div`, {
                className: `text-token-text-secondary`,
                children: (0, z.jsx)(C, {
                    ...r,
                    values: i
                })
            })]
        })]
    }, n.id)
}
var L, R, z, B, V, H = e((() => {
    L = E(), n(), j(), N(), F(), M(), l(), _(), r(), d(), O(), v(), a(), m(), R = t(T()), w(), b(), z = x(), B = S({
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
        Icon: k,
        title: B.permissionsTitle,
        description: B.permissionsDescription
    }, {
        Icon: A,
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
        Icon: P,
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
//# sourceMappingURL=ebfabf65-nwkjfc1vpkhvdygw.js.map
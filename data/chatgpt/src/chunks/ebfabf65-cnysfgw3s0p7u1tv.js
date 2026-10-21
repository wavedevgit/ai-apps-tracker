import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $_ as n,
    BU as r,
    Bat as i,
    Cw as a,
    Dv as o,
    Fv as s,
    Gv as c,
    HU as l,
    Iw as u,
    JT as d,
    Kh as f,
    Pat as p,
    Pw as m,
    Sv as h,
    Tw as g,
    YT as _,
    Yh as v,
    qv as ee
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    Bn as y,
    Ln as b,
    Nn as x,
    Nt as te,
    Q as S,
    Rn as C,
    Vn as w,
    wn as T,
    zn as ne
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    iTn as E,
    rTn as D
} from "./conversation-small-kzsalymynzuddxee.js";
import {
    $x as O,
    Qx as k,
    Tv as A,
    am as j,
    im as M,
    wv as N
} from "./30901919-i8ip8r0znvgcym38.js";
import {
    mt as P,
    pt as F
} from "./c470f5ab-poh7ivjvb3j2jlfz.js";

function re(e) {
    "use forget";
    let t = (0, L.c)(21),
        {
            isOpen: n,
            onCancel: r,
            onConfirm: i,
            confirmText: o,
            cancelText: s,
            title: c,
            description: l,
            loading: u,
            testId: d
        } = e,
        f;
    t[0] === r ? f = t[1] : (f = () => r(), t[0] = r, t[1] = f);
    let p;
    t[2] === c ? p = t[3] : (p = (0, z.jsx)(`span`, {
        className: `text-xl leading-7 font-semibold`,
        children: c
    }), t[2] = c, t[3] = p);
    let h;
    t[4] !== o || t[5] !== u || t[6] !== i ? (h = (0, z.jsx)(m.Button, {
        title: o,
        color: `primary`,
        onClick: i,
        loading: u
    }), t[4] = o, t[5] = u, t[6] = i, t[7] = h) : h = t[7];
    let g;
    t[8] !== s || t[9] !== r ? (g = (0, z.jsx)(m.Button, {
        title: s,
        color: `secondary`,
        onClick: r
    }), t[8] = s, t[9] = r, t[10] = g) : g = t[10];
    let _;
    t[11] === l ? _ = t[12] : (_ = (0, z.jsx)(`div`, {
        className: `text-token-text-secondary mt-6 text-center text-base leading-6 text-balance`,
        children: l
    }), t[11] = l, t[12] = _);
    let v;
    return t[13] !== n || t[14] !== f || t[15] !== p || t[16] !== h || t[17] !== g || t[18] !== _ || t[19] !== d ? (v = (0, z.jsx)(a, {
        testId: d,
        isOpen: n,
        onClose: f,
        title: p,
        textCenter: !0,
        size: `large`,
        className: `max-w-[520px]`,
        headerClassName: `px-8 pt-8 pb-0`,
        contentClassName: `px-8 pt-0 pb-10`,
        primaryButton: h,
        secondaryButton: g,
        children: _
    }), t[13] = n, t[14] = f, t[15] = p, t[16] = h, t[17] = g, t[18] = _, t[19] = d, t[20] = v) : v = t[20], v
}

function I(e) {
    "use forget";
    let t = (0, L.c)(53),
        {
            config: r
        } = e,
        i = ne(),
        s = te(),
        c = l(),
        [u, m] = (0, R.useState)(!1),
        [g, _] = (0, R.useState)(!1),
        v;
    t[0] === i ? v = t[1] : (v = i.formatMessage(B.continue), t[0] = i, t[1] = v);
    let y = v,
        b;
    t[2] === i ? b = t[3] : (b = i.formatMessage(B.cancel), t[2] = i, t[3] = b);
    let S = b,
        C = r.requireInstallConfirmation ?? !0,
        w = r.redirectTo ?? `/`,
        T = r.infoBlurbs ?? V,
        E = r.dataDisclaimer ?? B.dataDisclaimer,
        O;
    t[4] !== s || t[5] !== w ? (O = () => s(w), t[4] = s, t[5] = w, t[6] = O) : O = t[6];
    let k = O,
        A;
    t[7] !== r.connectorPlatformParams || t[8] !== r.productSku || t[9] !== r.startOauth || t[10] !== i || t[11] !== w || t[12] !== c ? (A = async () => {
        _(!1);
        try {
            m(!0);
            let e = h.Default;
            r.productSku === D.SERVICE_ACCOUNTS && (window.location.hostname === `localhost` ? e = h.Localhost : ee(window.location.origin) && (e = h.StagingGateway)), await o({
                redirectUri: n(r.connectorPlatformParams.connectorId, void 0, e),
                connectorPlatformParams: r.connectorPlatformParams,
                redirectTo: w,
                productSku: r.productSku,
                startOauth: r.startOauth,
                intl: i,
                toaster: c
            })
        } catch (e) {
            let t = e;
            m(!1), c.danger(i.formatMessage(B.errorToast)), t instanceof p
        }
    }, t[7] = r.connectorPlatformParams, t[8] = r.productSku, t[9] = r.startOauth, t[10] = i, t[11] = w, t[12] = c, t[13] = A) : A = t[13];
    let j = A,
        M;
    t[14] !== j || t[15] !== C ? (M = () => {
        if (C) {
            _(!0);
            return
        }
        j()
    }, t[14] = j, t[15] = C, t[16] = M) : M = t[16];
    let N = M,
        P = r.testId,
        I;
    t[17] === Symbol.for(`react.memo_cache_sentinel`) ? (I = (0, z.jsx)(f, {
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
        }), (0, z.jsx)(F, {
            className: `h-10 w-10`
        })]
    }), t[18] = H) : H = t[18];
    let U;
    t[19] === r.title ? U = t[20] : (U = (0, z.jsx)(`div`, {
        className: `pt-4 text-center text-2xl font-semibold`,
        children: (0, z.jsx)(x, {
            ...r.title
        })
    }), t[19] = r.title, t[20] = U);
    let W;
    t[21] === r.subtitle ? W = t[22] : (W = (0, z.jsx)(`div`, {
        className: `text-token-text-tertiary pt-1 text-sm`,
        children: (0, z.jsx)(x, {
            ...r.subtitle
        })
    }), t[21] = r.subtitle, t[22] = W);
    let G;
    t[23] !== W || t[24] !== U ? (G = (0, z.jsxs)(`div`, {
        className: `flex flex-col items-center`,
        children: [H, U, W]
    }), t[23] = W, t[24] = U, t[25] = G) : G = t[25];
    let K;
    t[26] === T ? K = t[27] : (K = T.map(ue), t[26] = T, t[27] = K);
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
    t[31] === E ? Y = t[32] : (Y = (0, z.jsx)(`div`, {
        className: `text-token-text-tertiary mt-3 text-center text-xs`,
        children: (0, z.jsx)(x, {
            ...E,
            values: J
        })
    }), t[31] = E, t[32] = Y);
    let X;
    t[33] === Symbol.for(`react.memo_cache_sentinel`) ? (X = (0, z.jsx)(x, {
        ...B.continue
    }), t[33] = X) : X = t[33];
    let Z;
    t[34] !== u || t[35] !== N ? (Z = (0, z.jsx)(d, {
        className: `mt-6 w-full`,
        size: `large`,
        onClick: N,
        loading: u,
        children: X
    }), t[34] = u, t[35] = N, t[36] = Z) : Z = t[36];
    let Q;
    t[37] !== S || t[38] !== r.testId || t[39] !== y || t[40] !== j || t[41] !== g || t[42] !== u || t[43] !== C ? (Q = C && (0, z.jsx)(re, {
        testId: `${r.testId}-confirm`,
        isOpen: g,
        onCancel: () => _(!1),
        onConfirm: j,
        confirmText: y,
        cancelText: S,
        title: (0, z.jsx)(x, {
            ...B.reinstallCheckConfirmTitle
        }),
        description: (0, z.jsx)(x, {
            ...B.reinstallCheckBanner,
            values: {
                installedAppsLink: ie
            }
        }),
        loading: u
    }), t[37] = S, t[38] = r.testId, t[39] = y, t[40] = j, t[41] = g, t[42] = u, t[43] = C, t[44] = Q) : Q = t[44];
    let $;
    return t[45] !== r.testId || t[46] !== k || t[47] !== G || t[48] !== q || t[49] !== Y || t[50] !== Z || t[51] !== Q ? ($ = (0, z.jsxs)(a, {
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
                children: (0, z.jsx)(x, {
                    ...n
                })
            }), (0, z.jsx)(`div`, {
                className: `text-token-text-secondary`,
                children: (0, z.jsx)(x, {
                    ...r,
                    values: i
                })
            })]
        })]
    }, n.id)
}
var L, R, z, B, V, H = e((() => {
    L = T(), _(), A(), j(), P(), k(), u(), g(), v(), s(), E(), r(), c(), i(), R = t(w()), C(), S(), z = y(), B = b({
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
//# sourceMappingURL=ebfabf65-cnysfgw3s0p7u1tv.js.map
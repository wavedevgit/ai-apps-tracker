import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ev as n,
    Fw as r,
    Gh as i,
    JT as a,
    Jh as o,
    Kv as s,
    Nw as c,
    Pv as l,
    Q_ as u,
    Sw as d,
    Tat as f,
    VU as p,
    Wv as m,
    jat as h,
    qT as g,
    ww as _,
    xv as v,
    zU as y
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    $ as b,
    Bn as x,
    Ln as S,
    Nn as C,
    Pt as w,
    Rn as T,
    Vn as E,
    wn as D,
    zn as ee
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    iTn as O,
    rTn as te
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    $x as k,
    Qx as A,
    Tv as j,
    am as M,
    im as N,
    wv as P
} from "./30901919-om7b3qf5hp4j9x4l.js";
import {
    mt as F,
    pt as ne
} from "./c470f5ab-d0jxi6yggehv1yt2.js";

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
            description: l,
            loading: u,
            testId: f
        } = e,
        p;
    t[0] === r ? p = t[1] : (p = () => r(), t[0] = r, t[1] = p);
    let m;
    t[2] === s ? m = t[3] : (m = (0, z.jsx)(`span`, {
        className: `text-xl leading-7 font-semibold`,
        children: s
    }), t[2] = s, t[3] = m);
    let h;
    t[4] !== a || t[5] !== u || t[6] !== i ? (h = (0, z.jsx)(c.Button, {
        title: a,
        color: `primary`,
        onClick: i,
        loading: u
    }), t[4] = a, t[5] = u, t[6] = i, t[7] = h) : h = t[7];
    let g;
    t[8] !== o || t[9] !== r ? (g = (0, z.jsx)(c.Button, {
        title: o,
        color: `secondary`,
        onClick: r
    }), t[8] = o, t[9] = r, t[10] = g) : g = t[10];
    let _;
    t[11] === l ? _ = t[12] : (_ = (0, z.jsx)(`div`, {
        className: `text-token-text-secondary mt-6 text-center text-base leading-6 text-balance`,
        children: l
    }), t[11] = l, t[12] = _);
    let v;
    return t[13] !== n || t[14] !== p || t[15] !== m || t[16] !== h || t[17] !== g || t[18] !== _ || t[19] !== f ? (v = (0, z.jsx)(d, {
        testId: f,
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
    }), t[13] = n, t[14] = p, t[15] = m, t[16] = h, t[17] = g, t[18] = _, t[19] = f, t[20] = v) : v = t[20], v
}

function I(e) {
    "use forget";
    let t = (0, L.c)(53),
        {
            config: r
        } = e,
        a = ee(),
        o = w(),
        c = p(),
        [l, m] = (0, R.useState)(!1),
        [h, _] = (0, R.useState)(!1),
        y;
    t[0] === a ? y = t[1] : (y = a.formatMessage(B.continue), t[0] = a, t[1] = y);
    let b = y,
        x;
    t[2] === a ? x = t[3] : (x = a.formatMessage(B.cancel), t[2] = a, t[3] = x);
    let S = x,
        T = r.requireInstallConfirmation ?? !0,
        E = r.redirectTo ?? `/`,
        D = r.infoBlurbs ?? V,
        O = r.dataDisclaimer ?? B.dataDisclaimer,
        k;
    t[4] !== o || t[5] !== E ? (k = () => o(E), t[4] = o, t[5] = E, t[6] = k) : k = t[6];
    let A = k,
        j;
    t[7] !== r.connectorPlatformParams || t[8] !== r.productSku || t[9] !== r.startOauth || t[10] !== a || t[11] !== E || t[12] !== c ? (j = async () => {
        _(!1);
        try {
            m(!0);
            let e = v.Default;
            r.productSku === te.SERVICE_ACCOUNTS && (window.location.hostname === `localhost` ? e = v.Localhost : s(window.location.origin) && (e = v.StagingGateway)), await n({
                redirectUri: u(r.connectorPlatformParams.connectorId, void 0, e),
                connectorPlatformParams: r.connectorPlatformParams,
                redirectTo: E,
                productSku: r.productSku,
                startOauth: r.startOauth,
                intl: a,
                toaster: c
            })
        } catch (e) {
            let t = e;
            m(!1), c.danger(a.formatMessage(B.errorToast)), t instanceof f
        }
    }, t[7] = r.connectorPlatformParams, t[8] = r.productSku, t[9] = r.startOauth, t[10] = a, t[11] = E, t[12] = c, t[13] = j) : j = t[13];
    let M = j,
        N;
    t[14] !== M || t[15] !== T ? (N = () => {
        if (T) {
            _(!0);
            return
        }
        M()
    }, t[14] = M, t[15] = T, t[16] = N) : N = t[16];
    let P = N,
        F = r.testId,
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
    t[19] === r.title ? U = t[20] : (U = (0, z.jsx)(`div`, {
        className: `pt-4 text-center text-2xl font-semibold`,
        children: (0, z.jsx)(C, {
            ...r.title
        })
    }), t[19] = r.title, t[20] = U);
    let W;
    t[21] === r.subtitle ? W = t[22] : (W = (0, z.jsx)(`div`, {
        className: `text-token-text-tertiary pt-1 text-sm`,
        children: (0, z.jsx)(C, {
            ...r.subtitle
        })
    }), t[21] = r.subtitle, t[22] = W);
    let G;
    t[23] !== W || t[24] !== U ? (G = (0, z.jsxs)(`div`, {
        className: `flex flex-col items-center`,
        children: [H, U, W]
    }), t[23] = W, t[24] = U, t[25] = G) : G = t[25];
    let K;
    t[26] === D ? K = t[27] : (K = D.map(ue), t[26] = D, t[27] = K);
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
    t[34] !== l || t[35] !== P ? (Z = (0, z.jsx)(g, {
        className: `mt-6 w-full`,
        size: `large`,
        onClick: P,
        loading: l,
        children: X
    }), t[34] = l, t[35] = P, t[36] = Z) : Z = t[36];
    let Q;
    t[37] !== S || t[38] !== r.testId || t[39] !== b || t[40] !== M || t[41] !== h || t[42] !== l || t[43] !== T ? (Q = T && (0, z.jsx)(re, {
        testId: `${r.testId}-confirm`,
        isOpen: h,
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
        loading: l
    }), t[37] = S, t[38] = r.testId, t[39] = b, t[40] = M, t[41] = h, t[42] = l, t[43] = T, t[44] = Q) : Q = t[44];
    let $;
    return t[45] !== r.testId || t[46] !== A || t[47] !== G || t[48] !== q || t[49] !== Y || t[50] !== Z || t[51] !== Q ? ($ = (0, z.jsxs)(d, {
        testId: F,
        type: `success`,
        isOpen: !0,
        onClose: A,
        size: `custom`,
        className: `max-w-[400px]`,
        contentClassName: `px-8 pt-10 pb-8`,
        children: [G, q, Y, Z, Q]
    }), t[45] = r.testId, t[46] = A, t[47] = G, t[48] = q, t[49] = Y, t[50] = Z, t[51] = Q, t[52] = $) : $ = t[52], $
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
    L = D(), a(), j(), M(), F(), A(), r(), _(), o(), l(), O(), y(), m(), h(), R = t(E()), T(), b(), z = x(), B = S({
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
        Icon: P,
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
        Icon: N,
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
//# sourceMappingURL=ebfabf65-m5jbfy0tcwy1khhs.js.map
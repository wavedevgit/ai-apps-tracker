import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as t,
    Ant as n,
    Mw as r,
    Vw as i,
    Xh as a,
    dnt as o,
    eE as s,
    jw as c,
    qh as l,
    zw as u
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    Bn as d,
    Ln as f,
    Nn as p,
    Rn as m,
    wn as h
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    MWt as g,
    _Un as _,
    gUn as v,
    uWt as y
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    A as b,
    k as x
} from "./c470f5ab-py8gip6x11wq9s88.js";

function S(e, t) {
    return (0, w.jsx)(`a`, {
        className: `interactive-label-secondary font-medium`,
        href: e,
        target: `_blank`,
        rel: `noopener noreferrer`,
        children: t
    })
}
var C, w, T, E, D, O, k = e((() => {
    C = h(), g(), s(), _(), r(), b(), i(), a(), o(), m(), w = d(), T = f({
        title: {
            id: `chatgpt.connectors.google_oauth_bundle.interstitial.title`,
            defaultMessage: `Connect to Google plugins`
        },
        description: {
            id: `chatgpt.connectors.google_oauth_bundle.interstitial.description`,
            defaultMessage: `Connect to multiple Google plugins at once`
        },
        dataSharingDisclosure: {
            id: `chatgpt.connectors.google_oauth_bundle.interstitial.disclosure.data_sharing`,
            defaultMessage: `ChatGPT may share relevant chats and memories with this plugin to support interactions with it. {connectorName} use of this data is subject to their <termsLink>terms</termsLink> and <privacyPolicyLink>privacy policy</privacyPolicyLink>. You can <learnMoreLink>learn more</learnMoreLink> and <settingsLink>manage your settings</settingsLink>.`
        },
        connectButton: {
            id: `chatgpt.connectors.google_oauth_bundle.interstitial.button.connect`,
            defaultMessage: `Connect to Google`
        }
    }), E = () => {
        "use forget";
        let e = (0, C.c)(1),
            t;
        return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, w.jsx)(`div`, {
            "aria-hidden": !0,
            className: `pointer-events-none absolute inset-x-0 top-0 h-36 bg-[url('https://persistent.oaistatic.com/assets/m/bundled-oauth-background-mobile-light.webp')] [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] bg-cover bg-top bg-no-repeat [-webkit-mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] sm:h-[217px] sm:bg-[url('https://persistent.oaistatic.com/assets/m/bundled-oauth-background-desktop-light.webp')] dark:bg-[url('https://persistent.oaistatic.com/assets/m/bundled-oauth-background-mobile-dark.webp')] dark:sm:bg-[url('https://persistent.oaistatic.com/assets/m/bundled-oauth-background-desktop-dark.webp')]`
        }), e[0] = t) : t = e[0], t
    }, D = e => {
        "use forget";
        let t = (0, C.c)(2),
            {
                Icon: n
            } = e,
            r;
        return t[0] === n ? r = t[1] : (r = (0, w.jsx)(`div`, {
            className: `bg-token-bg-primary flex h-18 w-18 shrink-0 items-center justify-center rounded-2xl border-[0.5px] shadow-sm`,
            children: (0, w.jsx)(n, {
                className: `h-11 w-11`,
                "aria-hidden": !0
            })
        }), t[0] = n, t[1] = r), r
    }, O = e => {
        "use forget";
        let r = (0, C.c)(27),
            {
                connector: i,
                connectorRows: a,
                isConnecting: o,
                isContinueDisabled: s,
                isEU: d,
                onClose: f,
                onContinue: m,
                tos: h
            } = e,
            g;
        r[0] === Symbol.for(`react.memo_cache_sentinel`) ? (g = (0, w.jsx)(p, {
            ...T.title
        }), r[0] = g) : g = r[0];
        let _ = g,
            b = i?.branding?.terms_of_service ?? `https://policies.google.com/terms`,
            O = i?.branding?.privacy_policy ?? `https://policies.google.com/privacy`,
            k = S,
            A;
        r[1] === Symbol.for(`react.memo_cache_sentinel`) ? (A = (0, w.jsx)(E, {}), r[1] = A) : A = r[1];
        let j;
        r[2] === f ? j = r[3] : (j = (0, w.jsx)(`div`, {
            className: `absolute end-5 top-5 z-10`,
            children: (0, w.jsx)(c, {
                onClick: f,
                radius: `full`,
                className: `bg-token-bg-primary/60 dark:bg-black/20`
            })
        }), r[2] = f, r[3] = j);
        let M;
        r[4] === Symbol.for(`react.memo_cache_sentinel`) ? (M = (0, w.jsx)(D, {
            Icon: l
        }), r[4] = M) : M = r[4];
        let N;
        r[5] === Symbol.for(`react.memo_cache_sentinel`) ? (N = (0, w.jsxs)(`div`, {
            className: `mb-4 flex items-center justify-center gap-4`,
            children: [M, (0, w.jsxs)(`div`, {
                "aria-hidden": !0,
                className: `flex gap-1`,
                children: [(0, w.jsx)(`span`, {
                    className: `h-1.5 w-1.5 rounded-full bg-white/75`
                }), (0, w.jsx)(`span`, {
                    className: `h-1.5 w-1.5 rounded-full bg-white/75`
                }), (0, w.jsx)(`span`, {
                    className: `h-1.5 w-1.5 rounded-full bg-white/75`
                })]
            }), (0, w.jsx)(D, {
                Icon: x
            })]
        }), r[5] = N) : N = r[5];
        let P;
        r[6] === Symbol.for(`react.memo_cache_sentinel`) ? (P = n() ? (0, w.jsx)(v.Title, {
            className: `text-center text-xl font-semibold`,
            children: _
        }) : (0, w.jsx)(u.Title, {
            title: (0, w.jsx)(`span`, {
                className: `text-xl font-semibold`,
                children: _
            })
        }), r[6] = P) : P = r[6];
        let F;
        r[7] === Symbol.for(`react.memo_cache_sentinel`) ? (F = (0, w.jsxs)(`div`, {
            className: `flex flex-col items-center gap-1 text-center`,
            children: [P, (0, w.jsx)(`p`, {
                className: `text-token-text-secondary text-base`,
                children: (0, w.jsx)(p, {
                    ...T.description
                })
            })]
        }), r[7] = F) : F = r[7];
        let I;
        r[8] !== i?.name || r[9] !== d || r[10] !== f || r[11] !== O || r[12] !== b || r[13] !== h ? (I = d && (0, w.jsx)(`p`, {
            className: `text-token-text-secondary text-xs leading-5`,
            children: (0, w.jsx)(p, {
                ...T.dataSharingDisclosure,
                values: {
                    connectorName: i?.name ?? h.genericName,
                    termsLink: e => k(b, e),
                    privacyPolicyLink: e => k(O, e),
                    learnMoreLink: e => k(`https://help.openai.com/en/articles/10408842`, e),
                    settingsLink: e => (0, w.jsx)(`a`, {
                        className: `interactive-label-secondary font-medium`,
                        href: y,
                        onClick: f,
                        children: e
                    })
                }
            })
        }), r[8] = i?.name, r[9] = d, r[10] = f, r[11] = O, r[12] = b, r[13] = h, r[14] = I) : I = r[14];
        let L = s || o,
            R;
        r[15] === Symbol.for(`react.memo_cache_sentinel`) ? (R = (0, w.jsx)(p, {
            ...T.connectButton
        }), r[15] = R) : R = r[15];
        let z;
        r[16] !== o || r[17] !== m || r[18] !== L ? (z = (0, w.jsx)(t, {
            type: `button`,
            color: `primary`,
            size: `large`,
            className: `w-full rounded-full`,
            disabled: L,
            loading: o,
            onClick: m,
            children: R
        }), r[16] = o, r[17] = m, r[18] = L, r[19] = z) : z = r[19];
        let B;
        r[20] !== a || r[21] !== z || r[22] !== I ? (B = (0, w.jsxs)(`div`, {
            className: `relative flex flex-col gap-6 px-6 pt-16 pb-8 sm:px-8`,
            children: [N, F, a, I, z]
        }), r[20] = a, r[21] = z, r[22] = I, r[23] = B) : B = r[23];
        let V;
        return r[24] !== B || r[25] !== j ? (V = (0, w.jsxs)(`section`, {
            "data-google-oauth-bundle-interstitial": !0,
            className: `bg-token-bg-primary relative overflow-hidden rounded-t-2xl sm:rounded-2xl`,
            children: [A, j, B]
        }), r[24] = B, r[25] = j, r[26] = V) : V = r[26], V
    }
}));
export {
    O as n, k as r, E as t
};
//# sourceMappingURL=d5b03218-n8sfi7pdh9v1748n.js.map
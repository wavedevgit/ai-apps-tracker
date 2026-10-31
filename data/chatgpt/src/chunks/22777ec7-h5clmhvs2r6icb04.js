import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as t,
    eE as n
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Bn as r,
    Mn as i,
    Nn as a,
    Rn as o,
    wn as s
} from "./2340486e-i7pjxgdhv0bs6apg.js";

function c(e) {
    return (0, f.jsx)(`a`, {
        href: `https://openai.com/policies/merchant-feed-terms-of-service/`,
        target: `_blank`,
        rel: `noopener noreferrer`,
        className: `font-semibold text-[#0e6d84] underline underline-offset-4 dark:text-[#6bc6da]`,
        children: e
    })
}

function l(e) {
    return (0, f.jsx)(`a`, {
        href: `https://openai.com/policies/commerce-policies/`,
        target: `_blank`,
        rel: `noopener noreferrer`,
        className: `font-semibold text-[#0e6d84] underline underline-offset-4 dark:text-[#6bc6da]`,
        children: e
    })
}

function u(e) {
    return (0, f.jsx)(`a`, {
        href: `https://openai.com/policies/privacy-policy/`,
        target: `_blank`,
        rel: `noopener noreferrer`,
        className: `font-semibold text-[#0e6d84] underline underline-offset-4 dark:text-[#6bc6da]`,
        children: e
    })
}
var d, f, p, m = e((() => {
    d = s(), n(), o(), f = r(), p = e => {
        "use forget";
        let n = (0, d.c)(17),
            {
                submitting: r,
                onSubmit: o,
                onBack: s
            } = e,
            p;
        n[0] === Symbol.for(`react.memo_cache_sentinel`) ? (p = {}, n[0] = p) : p = n[0];
        let m;
        n[1] === Symbol.for(`react.memo_cache_sentinel`) ? (m = (0, f.jsx)(`p`, {
            id: `merchant-acceptance-notice`,
            children: (0, f.jsx)(a, {
                id: `commerceSettingsPage.agreement.nextAcceptanceWithCommercePoliciesStatement`,
                defaultMessage: `By clicking Next, you electronically accept the <terms>OpenAI Merchant Feed Terms of Service</terms> and <policies>OpenAI Commerce Policies</policies> on behalf of your organization, represent that you have the authority to bind your organization to those terms, and agree that this acceptance is legally binding.`,
                values: {
                    terms: c,
                    policies: l
                }
            })
        }), n[1] = m) : m = n[1];
        let h;
        n[2] === Symbol.for(`react.memo_cache_sentinel`) ? (h = (0, f.jsx)(`p`, {
            children: (0, f.jsx)(a, {
                id: `commerceSettingsPage.agreement.privacyStatement`,
                defaultMessage: `You further acknowledge OpenAI’s <privacy>Privacy Policy</privacy> and consent to receive OpenAI Merchant Program updates. You may unsubscribe at any time.`,
                values: {
                    privacy: u
                }
            })
        }), n[2] = h) : h = n[2];
        let g;
        n[3] === Symbol.for(`react.memo_cache_sentinel`) ? (g = (0, f.jsx)(a, {
            id: `commerceSettingsPage.agreement.back`,
            defaultMessage: `Back`
        }), n[3] = g) : g = n[3];
        let _;
        n[4] === s ? _ = n[5] : (_ = (0, f.jsx)(t, {
            type: `button`,
            color: `secondary`,
            size: `large`,
            className: `h-12 min-w-28 px-8 text-base`,
            onClick: s,
            children: g
        }), n[4] = s, n[5] = _);
        let v;
        n[6] === r ? v = n[7] : (v = r ? (0, f.jsx)(a, {
            id: `commerceSettingsPage.agreement.submitting`,
            defaultMessage: `Submitting…`
        }) : (0, f.jsx)(a, {
            id: `commerceSettingsPage.agreement.next`,
            defaultMessage: `Next`
        }), n[6] = r, n[7] = v);
        let y;
        n[8] !== r || n[9] !== v ? (y = (0, f.jsx)(t, {
            type: `submit`,
            color: `primary`,
            size: `large`,
            className: `h-12 min-w-28 px-8 text-base`,
            disabled: r,
            "aria-describedby": `merchant-acceptance-notice`,
            children: v
        }), n[8] = r, n[9] = v, n[10] = y) : y = n[10];
        let b;
        n[11] !== _ || n[12] !== y ? (b = (0, f.jsxs)(`div`, {
            className: `flex gap-4`,
            children: [_, y]
        }), n[11] = _, n[12] = y, n[13] = b) : b = n[13];
        let x;
        return n[14] !== o || n[15] !== b ? (x = (0, f.jsx)(i, {
            locale: `en-US`,
            defaultLocale: `en-US`,
            messages: p,
            children: (0, f.jsxs)(`form`, {
                onSubmit: o,
                className: `text-token-text-primary flex flex-col gap-8 text-base leading-relaxed sm:text-lg`,
                lang: `en-US`,
                children: [m, h, b]
            })
        }), n[14] = o, n[15] = b, n[16] = x) : x = n[16], x
    }
}));
export {
    m as n, p as t
};
//# sourceMappingURL=22777ec7-h5clmhvs2r6icb04.js.map
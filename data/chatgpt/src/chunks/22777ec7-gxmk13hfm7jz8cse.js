import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    JT as t,
    qT as n
} from "./4813494d-dfpv67hlp00pbohr.js";
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
    d = s(), t(), o(), f = r(), p = e => {
        "use forget";
        let t = (0, d.c)(17),
            {
                submitting: r,
                onSubmit: o,
                onBack: s
            } = e,
            p;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (p = {}, t[0] = p) : p = t[0];
        let m;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (m = (0, f.jsx)(`p`, {
            id: `merchant-acceptance-notice`,
            children: (0, f.jsx)(a, {
                id: `commerceSettingsPage.agreement.nextAcceptanceWithCommercePoliciesStatement`,
                defaultMessage: `By clicking Next, you electronically accept the <terms>OpenAI Merchant Feed Terms of Service</terms> and <policies>OpenAI Commerce Policies</policies> on behalf of your organization, represent that you have the authority to bind your organization to those terms, and agree that this acceptance is legally binding.`,
                values: {
                    terms: c,
                    policies: l
                }
            })
        }), t[1] = m) : m = t[1];
        let h;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (h = (0, f.jsx)(`p`, {
            children: (0, f.jsx)(a, {
                id: `commerceSettingsPage.agreement.privacyStatement`,
                defaultMessage: `You further acknowledge OpenAI’s <privacy>Privacy Policy</privacy> and consent to receive OpenAI Merchant Program updates. You may unsubscribe at any time.`,
                values: {
                    privacy: u
                }
            })
        }), t[2] = h) : h = t[2];
        let g;
        t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (g = (0, f.jsx)(a, {
            id: `commerceSettingsPage.agreement.back`,
            defaultMessage: `Back`
        }), t[3] = g) : g = t[3];
        let _;
        t[4] === s ? _ = t[5] : (_ = (0, f.jsx)(n, {
            type: `button`,
            color: `secondary`,
            size: `large`,
            className: `h-12 min-w-28 px-8 text-base`,
            onClick: s,
            children: g
        }), t[4] = s, t[5] = _);
        let v;
        t[6] === r ? v = t[7] : (v = r ? (0, f.jsx)(a, {
            id: `commerceSettingsPage.agreement.submitting`,
            defaultMessage: `Submitting…`
        }) : (0, f.jsx)(a, {
            id: `commerceSettingsPage.agreement.next`,
            defaultMessage: `Next`
        }), t[6] = r, t[7] = v);
        let y;
        t[8] !== r || t[9] !== v ? (y = (0, f.jsx)(n, {
            type: `submit`,
            color: `primary`,
            size: `large`,
            className: `h-12 min-w-28 px-8 text-base`,
            disabled: r,
            "aria-describedby": `merchant-acceptance-notice`,
            children: v
        }), t[8] = r, t[9] = v, t[10] = y) : y = t[10];
        let b;
        t[11] !== _ || t[12] !== y ? (b = (0, f.jsxs)(`div`, {
            className: `flex gap-4`,
            children: [_, y]
        }), t[11] = _, t[12] = y, t[13] = b) : b = t[13];
        let x;
        return t[14] !== o || t[15] !== b ? (x = (0, f.jsx)(i, {
            locale: `en-US`,
            defaultLocale: `en-US`,
            messages: p,
            children: (0, f.jsxs)(`form`, {
                onSubmit: o,
                className: `text-token-text-primary flex flex-col gap-8 text-base leading-relaxed sm:text-lg`,
                lang: `en-US`,
                children: [m, h, b]
            })
        }), t[14] = o, t[15] = b, t[16] = x) : x = t[16], x
    }
}));
export {
    m as n, p as t
};
//# sourceMappingURL=22777ec7-gxmk13hfm7jz8cse.js.map
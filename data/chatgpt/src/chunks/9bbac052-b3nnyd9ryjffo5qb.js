import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AE as t,
    No as n,
    Po as r,
    Ro as i,
    Xh as a,
    kE as o,
    qh as s
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bn as c,
    Ln as l,
    Nn as u,
    Rn as d
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    LWn as f,
    RWn as p
} from "./conversation-small-m08q51xmfe7gjq3d.js";

function m({
    children: e,
    showTerms: t = !0,
    isStorageComplianceEnabled: n
}) {
    return (0, _.jsxs)(`div`, {
        className: `bg-token-main-surface-primary flex h-full w-full flex-col items-center justify-center`,
        children: [e, t && (0, _.jsx)(h, {
            isStorageComplianceEnabled: n
        })]
    })
}

function h({
    isStorageComplianceEnabled: e
}) {
    return (0, _.jsxs)(`div`, {
        className: `text-token-text-tertiary flex gap-3 py-3 text-xs`,
        children: [(0, _.jsx)(f, {
            href: `https://openai.com/policies/terms-of-use`,
            openNewTab: !0,
            children: (0, _.jsx)(u, {
                ...b.terms
            })
        }), (0, _.jsx)(y, {}), (0, _.jsx)(f, {
            href: `https://openai.com/policies/privacy-policy`,
            openNewTab: !0,
            children: (0, _.jsx)(u, {
                ...b.privacy
            })
        }), e && (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)(y, {}), (0, _.jsx)(`button`, {
                className: `underline`,
                onClick: () => r.openModal(n.CookieManagement),
                children: (0, _.jsx)(u, {
                    ...b.cookies
                })
            })]
        })]
    })
}

function g() {
    return (0, _.jsx)(`div`, {
        className: `mb-5`,
        children: (0, _.jsx)(s, {})
    })
}
var _, v, y, b, x = e((() => {
    a(), p(), i(), d(), t(), _ = c(), v = o.div`flex w-[calc(100%-2rem)] max-w-96 flex-auto flex-col items-center justify-center`, y = () => (0, _.jsx)(`span`, {
        className: `text-token-text-tertiary`,
        children: `|`
    }), b = l({
        terms: {
            id: `AuthPage.terms`,
            defaultMessage: `Terms of use`
        },
        privacy: {
            id: `AuthPage.privacy`,
            defaultMessage: `Privacy policy`
        },
        cookies: {
            id: `AuthPage.cookies`,
            defaultMessage: `Manage cookies`
        }
    })
}));
export {
    x as a, h as i, v as n, g as r, m as t
};
//# sourceMappingURL=9bbac052-b3nnyd9ryjffo5qb.js.map
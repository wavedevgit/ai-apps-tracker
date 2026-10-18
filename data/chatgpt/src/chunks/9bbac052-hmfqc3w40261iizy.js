import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ah as t,
    Dh as n,
    Io as r,
    Mo as i,
    aE as a,
    jo as o,
    oE as s
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as c,
    Ln as l,
    Nn as u,
    Rn as d
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    UUn as f,
    WUn as p
} from "./conversation-small-fym1zmu9zimymmm1.js";

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
                onClick: () => i.openModal(o.CookieManagement),
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
        children: (0, _.jsx)(n, {})
    })
}
var _, v, y, b, x = e((() => {
    t(), p(), r(), d(), s(), _ = c(), v = a.div`flex w-[calc(100%-2rem)] max-w-96 flex-auto flex-col items-center justify-center`, y = () => (0, _.jsx)(`span`, {
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
//# sourceMappingURL=9bbac052-hmfqc3w40261iizy.js.map
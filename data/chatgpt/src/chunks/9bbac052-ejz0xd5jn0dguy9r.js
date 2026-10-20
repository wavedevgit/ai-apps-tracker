import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    CE as t,
    Gh as n,
    Io as r,
    Jh as i,
    Mo as a,
    jo as o,
    wE as s
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Pn as c,
    Rn as l,
    Vn as u,
    zn as d
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    iWn as f,
    rWn as p
} from "./conversation-small-cawdu7il3ha6y70c.js";

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
        children: [(0, _.jsx)(p, {
            href: `https://openai.com/policies/terms-of-use`,
            openNewTab: !0,
            children: (0, _.jsx)(c, {
                ...b.terms
            })
        }), (0, _.jsx)(y, {}), (0, _.jsx)(p, {
            href: `https://openai.com/policies/privacy-policy`,
            openNewTab: !0,
            children: (0, _.jsx)(c, {
                ...b.privacy
            })
        }), e && (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)(y, {}), (0, _.jsx)(`button`, {
                className: `underline`,
                onClick: () => a.openModal(o.CookieManagement),
                children: (0, _.jsx)(c, {
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
    i(), f(), r(), d(), s(), _ = u(), v = t.div`flex w-[calc(100%-2rem)] max-w-96 flex-auto flex-col items-center justify-center`, y = () => (0, _.jsx)(`span`, {
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
//# sourceMappingURL=9bbac052-ejz0xd5jn0dguy9r.js.map
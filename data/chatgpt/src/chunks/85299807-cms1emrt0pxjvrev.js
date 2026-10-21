import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Mz as n,
    i0 as r,
    jz as i,
    r0 as a
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    Bn as o,
    Ht as s,
    Nn as c,
    Nt as l,
    Q as u,
    Rn as d,
    Vn as f,
    kt as p,
    zn as m
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    la as h,
    ua as g
} from "./conversation-small-kzsalymynzuddxee.js";
import {
    $n as _,
    Ca as v,
    Qn as y,
    wa as b
} from "./c2675c8c-ossqum2x3eut0sh8.js";
import {
    n as x,
    t as S
} from "./68b36cc8-b4t3ax7liydnquw9.js";

function C() {
    let e = m(),
        t = l(),
        n = p(),
        [a, o] = (0, w.useState)(!1);
    return (0, w.useEffect)(() => {
        if (n?.wantsModal) {
            let e = setTimeout(() => o(!0), 3e3);
            return () => clearTimeout(e)
        }
        o(!0)
    }, [n]), (0, w.useEffect)(() => {
        if (n) {
            if (n.wantsModal) {
                if (!a) return;
                n.isLoggedIn ? window.location.assign(`/#settings/Security`) : r({
                    callbackUrl: `/#settings/Security`,
                    fallbackScreenHint: `login`,
                    useFallbackScreenHint: !0
                });
                return
            }
            n.wantsAuth && !n.isLoggedIn ? r({
                callbackUrl: `/security-settings`,
                fallbackScreenHint: `login`,
                useFallbackScreenHint: !0
            }) : n.wantsAuth && n.isLoggedIn && t({
                pathname: `/security-settings`,
                search: ``
            }, {
                replace: !0
            })
        }
    }, [n, t, a]), (0, T.jsx)(h, {
        ariaLabel: e.formatMessage(b.securityTab),
        anchor: `vertical`,
        className: S.screen,
        children: n?.wantsModal ? (0, T.jsx)(`main`, {
            className: `flex h-full w-full items-center justify-center p-6`,
            role: `status`,
            "aria-live": `polite`,
            "aria-busy": `true`,
            children: (0, T.jsxs)(`div`, {
                className: `flex flex-col items-center gap-4 text-center`,
                children: [(0, T.jsx)(i, {
                    className: `text-token-text-primary h-10 w-10`
                }), (0, T.jsx)(`p`, {
                    className: `text-token-text-primary text-sm`,
                    children: (0, T.jsx)(c, {
                        id: `security-settings.redirect-message`,
                        defaultMessage: `Security settings live in ChatGPT. You’re being redirected in a new tab.`
                    })
                })]
            })
        }) : (0, T.jsx)(`div`, {
            className: `flex w-full justify-center`,
            children: (0, T.jsx)(`div`, {
                className: `w-full max-w-[720px] px-4 sm:max-w-[820px] sm:px-6 md:max-w-[900px] md:px-8 lg:max-w-[1024px] xl:max-w-[1120px]`,
                children: n?.wantsAuth && !n?.isLoggedIn ? null : (0, T.jsx)(_, {
                    isFullPage: !0
                })
            })
        })
    })
}
var w, T, E, D = e((() => {
    u(), g(), x(), d(), n(), y(), v(), a(), w = t(f()), T = o(), E = s(function() {
        return (0, T.jsx)(C, {})
    })
}));
export {
    E as n, D as t
};
//# sourceMappingURL=85299807-cms1emrt0pxjvrev.js.map
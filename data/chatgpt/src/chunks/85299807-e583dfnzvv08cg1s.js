import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as n,
    dz as r,
    fz as i,
    k1 as a
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as o,
    At as s,
    Bn as c,
    Nn as l,
    Pt as u,
    Rn as d,
    Ut as f,
    Vn as p,
    zn as m
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    la as h,
    ua as g
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Sa as _,
    Xn as v,
    Zn as y,
    xa as b
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    n as x,
    t as S
} from "./68b36cc8-b4t3ax7liydnquw9.js";

function C() {
    let e = m(),
        t = u(),
        i = s(),
        [a, o] = (0, w.useState)(!1);
    return (0, w.useEffect)(() => {
        if (i?.wantsModal) {
            let e = setTimeout(() => o(!0), 3e3);
            return () => clearTimeout(e)
        }
        o(!0)
    }, [i]), (0, w.useEffect)(() => {
        if (i) {
            if (i.wantsModal) {
                if (!a) return;
                i.isLoggedIn ? window.location.assign(`/#settings/Security`) : n({
                    callbackUrl: `/#settings/Security`,
                    fallbackScreenHint: `login`,
                    useFallbackScreenHint: !0
                });
                return
            }
            i.wantsAuth && !i.isLoggedIn ? n({
                callbackUrl: `/security-settings`,
                fallbackScreenHint: `login`,
                useFallbackScreenHint: !0
            }) : i.wantsAuth && i.isLoggedIn && t({
                pathname: `/security-settings`,
                search: ``
            }, {
                replace: !0
            })
        }
    }, [i, t, a]), (0, T.jsx)(h, {
        ariaLabel: e.formatMessage(_.securityTab),
        anchor: `vertical`,
        className: S.screen,
        children: i?.wantsModal ? (0, T.jsx)(`main`, {
            className: `flex h-full w-full items-center justify-center p-6`,
            role: `status`,
            "aria-live": `polite`,
            "aria-busy": `true`,
            children: (0, T.jsxs)(`div`, {
                className: `flex flex-col items-center gap-4 text-center`,
                children: [(0, T.jsx)(r, {
                    className: `text-token-text-primary h-10 w-10`
                }), (0, T.jsx)(`p`, {
                    className: `text-token-text-primary text-sm`,
                    children: (0, T.jsx)(l, {
                        id: `security-settings.redirect-message`,
                        defaultMessage: `Security settings live in ChatGPT. You’re being redirected in a new tab.`
                    })
                })]
            })
        }) : (0, T.jsx)(`div`, {
            className: `flex w-full justify-center`,
            children: (0, T.jsx)(`div`, {
                className: `w-full max-w-[720px] px-4 sm:max-w-[820px] sm:px-6 md:max-w-[900px] md:px-8 lg:max-w-[1024px] xl:max-w-[1120px]`,
                children: i?.wantsAuth && !i?.isLoggedIn ? null : (0, T.jsx)(y, {
                    isFullPage: !0
                })
            })
        })
    })
}
var w, T, E, D = e((() => {
    o(), g(), x(), d(), i(), v(), b(), a(), w = t(p()), T = c(), E = f(function() {
        return (0, T.jsx)(C, {})
    })
}));
export {
    E as n, D as t
};
//# sourceMappingURL=85299807-e583dfnzvv08cg1s.js.map
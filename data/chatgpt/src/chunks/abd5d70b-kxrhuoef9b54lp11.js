import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ait as t,
    f0 as n,
    jit as r,
    p0 as i,
    uit as a,
    yit as o
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    Bn as s,
    Nn as c,
    Rn as l,
    wn as u
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    MJ as d,
    jJ as f
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    r as p
} from "./1fbff149-otq0bk7wfmvlqej1.js";
import {
    t as m
} from "./c3e2d78f-onilkv7ldgu9e4f1.js";

function h({
    headerNavData: e,
    intl: t
}) {
    if (e) return {
        ...e,
        secondaryCta: {
            id: `secondary-cta`,
            style: `Secondary Inverse Button`,
            label: t.formatMessage(a.contactSales),
            url: `/contact-sales/`,
            analyticsAction: `header-nav-contact-sales`
        }
    }
}
var g = e((() => {
    o()
}));

function _() {
    "use forget";
    let e = (0, v.c)(2),
        t;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = r(), e[0] = t) : t = e[0];
    let n = t,
        a;
    return e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, y.jsx)(p, {
        as: `link`,
        to: n ? `/codex/cloud` : `/auth/login?next=/codex/cloud`,
        onClick: e => {
            f.recordLogInButtonClicked(`codex_landing`), !n && (e.preventDefault(), i({
                callbackUrl: `/codex/cloud`,
                skipLoginModal: !1
            }))
        },
        children: n ? (0, y.jsx)(c, {
            id: `CodexAppLoggedOutLandingPage.headerGoToCloud`,
            defaultMessage: `Go to Cloud`
        }) : (0, y.jsx)(c, {
            id: `CodexAppLoggedOutLandingPage.headerLogin`,
            defaultMessage: `Log in`
        })
    }), e[1] = a) : a = e[1], a
}
var v, y, b = e((() => {
    v = u(), m(), n(), t(), d(), l(), y = s()
}));
export {
    g as i, b as n, h as r, _ as t
};
//# sourceMappingURL=abd5d70b-kxrhuoef9b54lp11.js.map
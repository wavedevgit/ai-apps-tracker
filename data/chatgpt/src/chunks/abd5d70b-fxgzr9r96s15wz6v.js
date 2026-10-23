import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Eit as t,
    Lit as n,
    Rit as r,
    _it as i,
    f0 as a,
    p0 as o
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as s,
    Nn as c,
    Rn as l,
    wn as u
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    MJ as d,
    jJ as f
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    r as p
} from "./1fbff149-o2kjt5dd0vfhraa6.js";
import {
    t as m
} from "./c3e2d78f-gsmaawcg43m43apl.js";

function h({
    headerNavData: e,
    intl: t
}) {
    if (e) return {
        ...e,
        secondaryCta: {
            id: `secondary-cta`,
            style: `Secondary Inverse Button`,
            label: t.formatMessage(i.contactSales),
            url: `/contact-sales/`,
            analyticsAction: `header-nav-contact-sales`
        }
    }
}
var g = e((() => {
    t()
}));

function _() {
    "use forget";
    let e = (0, v.c)(2),
        t;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = r(), e[0] = t) : t = e[0];
    let n = t,
        i;
    return e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, y.jsx)(p, {
        as: `link`,
        to: n ? `/codex/cloud` : `/auth/login?next=/codex/cloud`,
        onClick: e => {
            f.recordLogInButtonClicked(`codex_landing`), !n && (e.preventDefault(), o({
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
    }), e[1] = i) : i = e[1], i
}
var v, y, b = e((() => {
    v = u(), m(), a(), n(), d(), l(), y = s()
}));
export {
    g as i, b as n, h as r, _ as t
};
//# sourceMappingURL=abd5d70b-fxgzr9r96s15wz6v.js.map
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $rt as t,
    Wrt as n,
    dit as r,
    n0 as i,
    r0 as a,
    uit as o
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as s,
    Nn as c,
    Rn as l,
    wn as u
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    OJ as d,
    kJ as f
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    r as p
} from "./1fbff149-n2djc7m1ar2tzvdq.js";
import {
    t as m
} from "./c3e2d78f-g7yg0x6c3bx7ra7n.js";

function h({
    headerNavData: e,
    intl: t
}) {
    if (e) return {
        ...e,
        secondaryCta: {
            id: `secondary-cta`,
            style: `Secondary Inverse Button`,
            label: t.formatMessage(n.contactSales),
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
            d.recordLogInButtonClicked(`codex_landing`), !n && (e.preventDefault(), a({
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
    v = u(), m(), i(), o(), f(), l(), y = s()
}));
export {
    g as i, b as n, h as r, _ as t
};
//# sourceMappingURL=abd5d70b-if6k7qnnxtocbky8.js.map
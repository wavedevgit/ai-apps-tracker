import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Grt as t,
    dit as n,
    eit as r,
    fit as i,
    i0 as a,
    r0 as o
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as s,
    Nn as c,
    Rn as l,
    wn as u
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    MJ as d,
    jJ as f
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    r as p
} from "./1fbff149-gb0wzlfpl5ty76gm.js";
import {
    t as m
} from "./c3e2d78f-m9if2w1mh2slfzih.js";

function h({
    headerNavData: e,
    intl: n
}) {
    if (e) return {
        ...e,
        secondaryCta: {
            id: `secondary-cta`,
            style: `Secondary Inverse Button`,
            label: n.formatMessage(t.contactSales),
            url: `/contact-sales/`,
            analyticsAction: `header-nav-contact-sales`
        }
    }
}
var g = e((() => {
    r()
}));

function _() {
    "use forget";
    let e = (0, v.c)(2),
        t;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = i(), e[0] = t) : t = e[0];
    let n = t,
        r;
    return e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, y.jsx)(p, {
        as: `link`,
        to: n ? `/codex/cloud` : `/auth/login?next=/codex/cloud`,
        onClick: e => {
            f.recordLogInButtonClicked(`codex_landing`), !n && (e.preventDefault(), a({
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
    }), e[1] = r) : r = e[1], r
}
var v, y, b = e((() => {
    v = u(), m(), o(), n(), d(), l(), y = s()
}));
export {
    g as i, b as n, h as r, _ as t
};
//# sourceMappingURL=abd5d70b-kab5e1xbszfguye3.js.map
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ait as t,
    f0 as n,
    kit as r,
    lit as i,
    p0 as a,
    vit as o
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bn as s,
    Nn as c,
    Rn as l,
    wn as u
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    MJ as d,
    jJ as f
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    r as p
} from "./1fbff149-mztuifcg3lorq16x.js";
import {
    t as m
} from "./c3e2d78f-od6bq91vl0491dz3.js";

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
    o()
}));

function _() {
    "use forget";
    let e = (0, v.c)(2),
        n;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (n = t(), e[0] = n) : n = e[0];
    let r = n,
        i;
    return e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, y.jsx)(p, {
        as: `link`,
        to: r ? `/codex/cloud` : `/auth/login?next=/codex/cloud`,
        onClick: e => {
            f.recordLogInButtonClicked(`codex_landing`), !r && (e.preventDefault(), a({
                callbackUrl: `/codex/cloud`,
                skipLoginModal: !1
            }))
        },
        children: r ? (0, y.jsx)(c, {
            id: `CodexAppLoggedOutLandingPage.headerGoToCloud`,
            defaultMessage: `Go to Cloud`
        }) : (0, y.jsx)(c, {
            id: `CodexAppLoggedOutLandingPage.headerLogin`,
            defaultMessage: `Log in`
        })
    }), e[1] = i) : i = e[1], i
}
var v, y, b = e((() => {
    v = u(), m(), n(), r(), d(), l(), y = s()
}));
export {
    g as i, b as n, h as r, _ as t
};
//# sourceMappingURL=abd5d70b-f57qyx46qli5fat6.js.map
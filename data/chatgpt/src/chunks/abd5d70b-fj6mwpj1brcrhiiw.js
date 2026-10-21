import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Dit as t,
    Oit as n,
    f0 as r,
    git as i,
    p0 as a,
    sit as o
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    Bn as s,
    Nn as c,
    Rn as l,
    wn as u
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    AJ as d,
    jJ as f
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    r as p
} from "./1fbff149-lbpye1huov1ryl6k.js";
import {
    t as m
} from "./c3e2d78f-lvd4caab97jcewnt.js";

function h({
    headerNavData: e,
    intl: t
}) {
    if (e) return {
        ...e,
        secondaryCta: {
            id: `secondary-cta`,
            style: `Secondary Inverse Button`,
            label: t.formatMessage(o.contactSales),
            url: `/contact-sales/`,
            analyticsAction: `header-nav-contact-sales`
        }
    }
}
var g = e((() => {
    i()
}));

function _() {
    "use forget";
    let e = (0, v.c)(2),
        t;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = n(), e[0] = t) : t = e[0];
    let r = t,
        i;
    return e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, y.jsx)(p, {
        as: `link`,
        to: r ? `/codex/cloud` : `/auth/login?next=/codex/cloud`,
        onClick: e => {
            d.recordLogInButtonClicked(`codex_landing`), !r && (e.preventDefault(), a({
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
    v = u(), m(), r(), t(), f(), l(), y = s()
}));
export {
    g as i, b as n, h as r, _ as t
};
//# sourceMappingURL=abd5d70b-fj6mwpj1brcrhiiw.js.map
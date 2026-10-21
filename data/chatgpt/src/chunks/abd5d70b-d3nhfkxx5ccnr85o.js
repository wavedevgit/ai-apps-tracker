import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Brt as t,
    Yrt as n,
    n0 as r,
    oit as i,
    sit as a,
    t0 as o
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    Bn as s,
    Nn as c,
    Rn as l,
    wn as u
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    OJ as d,
    kJ as f
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    r as p
} from "./1fbff149-drcjhfbo8bteq3hu.js";
import {
    t as m
} from "./c3e2d78f-hri5j1zh8okhvj17.js";

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
    n()
}));

function _() {
    "use forget";
    let e = (0, v.c)(2),
        t;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = a(), e[0] = t) : t = e[0];
    let n = t,
        i;
    return e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, y.jsx)(p, {
        as: `link`,
        to: n ? `/codex/cloud` : `/auth/login?next=/codex/cloud`,
        onClick: e => {
            d.recordLogInButtonClicked(`codex_landing`), !n && (e.preventDefault(), r({
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
    v = u(), m(), o(), i(), f(), l(), y = s()
}));
export {
    g as i, b as n, h as r, _ as t
};
//# sourceMappingURL=abd5d70b-d3nhfkxx5ccnr85o.js.map
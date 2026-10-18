import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as t,
    Nrt as n,
    Prt as r,
    Srt as i,
    k1 as a,
    prt as o
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as s,
    Nn as c,
    Rn as l,
    wn as u
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    DJ as d,
    EJ as f
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    r as p
} from "./1fbff149-o5xkp37eq144138g.js";
import {
    t as m
} from "./c3e2d78f-dfx6ipda8gc0kf2d.js";

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
        n;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (n = r(), e[0] = n) : n = e[0];
    let i = n,
        a;
    return e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, y.jsx)(p, {
        as: `link`,
        to: i ? `/codex/cloud` : `/auth/login?next=/codex/cloud`,
        onClick: e => {
            f.recordLogInButtonClicked(`codex_landing`), !i && (e.preventDefault(), t({
                callbackUrl: `/codex/cloud`,
                skipLoginModal: !1
            }))
        },
        children: i ? (0, y.jsx)(c, {
            id: `CodexAppLoggedOutLandingPage.headerGoToCloud`,
            defaultMessage: `Go to Cloud`
        }) : (0, y.jsx)(c, {
            id: `CodexAppLoggedOutLandingPage.headerLogin`,
            defaultMessage: `Log in`
        })
    }), e[1] = a) : a = e[1], a
}
var v, y, b = e((() => {
    v = u(), m(), a(), n(), d(), l(), y = s()
}));
export {
    g as i, b as n, h as r, _ as t
};
//# sourceMappingURL=abd5d70b-bchvxm8z23xih0h1.js.map
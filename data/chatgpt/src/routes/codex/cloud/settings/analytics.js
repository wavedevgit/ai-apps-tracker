import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    C1 as n,
    u1 as r
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as i,
    Bn as a,
    Nn as o,
    Rn as s,
    Ut as c,
    Vn as l,
    at as u,
    jt as d,
    wn as f
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Lo as p,
    Mx as m,
    Ro as h,
    jx as g
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    h as _,
    m as v,
    r as y,
    t as b
} from "./3e72bb91-l4ijhasz7arxe6nl.js";
import {
    i as x,
    t as S
} from "./fab52ad7-c6tze5skxh7lv3b4.js";
import {
    r as C,
    t as w
} from "./0abfb8e8-nm56l8pzmrstpbje.js";

function T() {
    "use forget";
    let e = (0, E.c)(5),
        t;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, O.jsx)(`header`, {
        className: `border-token-border-heavy flex flex-col border-b`,
        children: (0, O.jsx)(`h1`, {
            className: `text-token-text-primary py-2 text-xl leading-7 font-medium`,
            children: (0, O.jsx)(o, {
                id: `codex.analytics.title.codexAndWork`,
                defaultMessage: `Codex and Work Analytics`
            })
        })
    }), e[0] = t) : t = e[0];
    let n;
    e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, O.jsx)(`p`, {
        className: `text-base font-semibold`,
        children: (0, O.jsx)(o, {
            id: `codex.analytics.accessDenied.heading.codexAndWork`,
            defaultMessage: `You don't currently have access to Codex and Work Analytics`
        })
    }), e[1] = n) : n = e[1];
    let r;
    e[2] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, O.jsx)(`p`, {
        className: `text-token-text-secondary mt-2 text-sm leading-6`,
        children: (0, O.jsx)(o, {
            id: `codex.analytics.accessDenied.body.codexAndWork`,
            defaultMessage: `Codex and Work Analytics is only available to ChatGPT Workspace Admins, Analytics Viewers, and Codex Admins.`
        })
    }), e[2] = r) : r = e[2];
    let i;
    e[3] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, O.jsx)(o, {
        id: `codex.analytics.accessDenied.alsoViaApi`,
        defaultMessage: `Codex analytics is also available via the API. `
    }), e[3] = i) : i = e[3];
    let a;
    return e[4] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, O.jsx)(b, {
        topPadding: !0,
        children: (0, O.jsxs)(`div`, {
            className: `mx-auto flex h-full max-w-screen-xl flex-1 flex-col gap-6 ps-4 pe-12 pb-16`,
            children: [t, (0, O.jsxs)(`div`, {
                className: `bg-token-bg-secondary text-token-text-primary border-token-border-heavy rounded-md border p-4`,
                children: [n, r, (0, O.jsxs)(`p`, {
                    className: `text-token-text-secondary mt-2 text-sm leading-6`,
                    children: [i, (0, O.jsx)(u, {
                        to: `/codex/cloud/settings/apireference`,
                        className: `text-token-text-secondary mt-2 text-sm leading-6 underline`,
                        children: (0, O.jsx)(o, {
                            id: `codex.analytics.accessDenied.apiReferenceLink`,
                            defaultMessage: `View the Codex analytics API reference.`
                        })
                    })]
                })]
            })]
        })
    }), e[4] = a) : a = e[4], a
}
var E, D, O, k, A, j = e((() => {
    i(), E = f(), m(), r(), S(), y(), C(), v(), h(), D = t(l()), s(), O = a(), k = () => [{
        title: `Codex`
    }], A = c(function() {
        "use forget";
        let e = (0, E.c)(12),
            t = n(),
            r = d(),
            i = x(),
            a = !!r.state?.embed,
            s;
        e[0] !== t || e[1] !== a ? (s = a ? void 0 : g(t), e[0] = t, e[1] = a, e[2] = s) : s = e[2];
        let c = s,
            l = _({
                isUpsell: a
            }),
            u = i || l,
            f, m;
        if (e[3] === c ? (f = e[4], m = e[5]) : (f = () => {
                c != null && window.location.replace(c)
            }, m = [c], e[3] = c, e[4] = f, e[5] = m), (0, D.useEffect)(f, m), c != null) {
            let t;
            e[6] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, O.jsx)(`h1`, {
                className: `text-token-text-primary py-2 text-xl leading-7 font-medium`,
                children: (0, O.jsx)(o, {
                    id: `codex.analytics.title.codexAndWork`,
                    defaultMessage: `Codex and Work Analytics`
                })
            }), e[6] = t) : t = e[6];
            let n;
            return e[7] === c ? n = e[8] : (n = (0, O.jsx)(b, {
                topPadding: !0,
                children: (0, O.jsxs)(`div`, {
                    className: `mx-auto flex max-w-screen-xl flex-col gap-6 ps-4 pe-12 pb-16`,
                    children: [t, (0, O.jsx)(p, {
                        href: c
                    })]
                })
            }), e[7] = c, e[8] = n), n
        }
        if (!u) {
            let t;
            return e[9] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, O.jsx)(T, {}), e[9] = t) : t = e[9], t
        }
        if (a) {
            let t;
            return e[10] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, O.jsx)(w, {
                isUpsell: !0
            }), e[10] = t) : t = e[10], t
        }
        let h;
        return e[11] === Symbol.for(`react.memo_cache_sentinel`) ? (h = (0, O.jsx)(w, {}), e[11] = h) : h = e[11], h
    })
}));
e((() => {
    j()
}))();
export {
    A as
    default, k as meta
};
//# sourceMappingURL=codex.cloud.settings.analytics-jvkr9xxs.js.map
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    X5 as t,
    Y5 as n
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as r,
    Nn as i,
    Rn as a,
    wn as o,
    zn as s
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Fb as c,
    Lb as l
} from "./c2675c8c-ejvs9hq3rwjwsbcv.js";
import {
    Bt as u,
    Ht as d,
    Vt as f,
    zt as p
} from "./c470f5ab-ab47eubabs8jspdc.js";

function m(e) {
    "use forget";
    let t = (0, h.c)(23),
        {
            value: r,
            onChange: a,
            appearance: o,
            isCompact: l,
            className: u
        } = e,
        d = o === void 0 ? `tabs` : o,
        m = l !== void 0 && l,
        _ = s(),
        v;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (v = {
        value: `github`,
        icon: (0, g.jsx)(f, {
            "aria-hidden": !0,
            className: `icon-xs`
        }),
        label: (0, g.jsx)(i, {
            id: `wham.gitProviderToggle.option.github`,
            defaultMessage: `GitHub`
        })
    }, t[0] = v) : v = t[0];
    let y;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (y = [v, {
        value: `gitlab`,
        icon: (0, g.jsx)(p, {
            "aria-hidden": !0,
            className: `icon-xs`
        }),
        label: (0, g.jsx)(i, {
            id: `wham.gitProviderToggle.option.gitlab.beta`,
            defaultMessage: `GitLab (Beta)`
        })
    }], t[1] = y) : y = t[1];
    let b = y,
        x;
    t[2] === _ ? x = t[3] : (x = _.formatMessage({
        id: `wham.gitProviderToggle.ariaLabel`,
        defaultMessage: `Select Git provider`
    }), t[2] = _, t[3] = x);
    let S = x;
    if (d === `segmented`) {
        let e;
        t[4] === u ? e = t[5] : (e = n(`w-fit`, u), t[4] = u, t[5] = e);
        let i, o;
        t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (i = {
            value: b[0].value,
            label: b[0].label
        }, o = {
            value: b[1].value,
            label: b[1].label
        }, t[6] = i, t[7] = o) : (i = t[6], o = t[7]);
        let s;
        return t[8] !== S || t[9] !== m || t[10] !== a || t[11] !== e || t[12] !== r ? (s = (0, g.jsx)(c, {
            ariaLabel: S,
            className: e,
            isCompact: m,
            value: r,
            onChange: a,
            shouldToggleSelected: !1,
            leftItem: i,
            rightItem: o
        }), t[8] = S, t[9] = m, t[10] = a, t[11] = e, t[12] = r, t[13] = s) : s = t[13], s
    }
    let C;
    t[14] === u ? C = t[15] : (C = n(`flex shrink-0 flex-wrap gap-5`, u), t[14] = u, t[15] = C);
    let w;
    t[16] !== a || t[17] !== r ? (w = b.map(e => {
        let t = r === e.value;
        return (0, g.jsxs)(`button`, {
            type: `button`,
            onClick: () => a(e.value),
            "aria-pressed": t,
            className: n(`text-token-text-tertiary hover:text-token-text-secondary relative inline-flex items-center gap-1.5 py-2 text-sm font-normal transition-colors`, t && `text-token-text-primary font-medium`),
            children: [e.icon, e.label, t ? (0, g.jsx)(`span`, {
                "aria-hidden": !0,
                className: `bg-token-text-primary absolute inset-x-0 bottom-0 h-0.5 rounded-full`
            }) : null]
        }, e.value)
    }), t[16] = a, t[17] = r, t[18] = w) : w = t[18];
    let T;
    return t[19] !== S || t[20] !== C || t[21] !== w ? (T = (0, g.jsx)(`nav`, {
        "aria-label": S,
        className: C,
        children: w
    }), t[19] = S, t[20] = C, t[21] = w, t[22] = T) : T = t[22], T
}
var h, g, _ = e((() => {
    h = o(), l(), d(), u(), t(), a(), g = r()
}));
export {
    _ as n, m as t
};
//# sourceMappingURL=3a774aaf-lgf1bazaf2w9njko.js.map
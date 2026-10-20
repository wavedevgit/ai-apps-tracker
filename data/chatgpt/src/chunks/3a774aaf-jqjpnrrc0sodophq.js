import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J5 as t,
    q5 as n
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as r,
    Pn as i,
    Tn as a,
    Vn as o,
    zn as s
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    gx as c,
    vx as l
} from "./c2675c8c-nxl2ic2ofk2vw70s.js";
import {
    Bt as u,
    Ht as d,
    Vt as f,
    zt as p
} from "./c470f5ab-in0lllrdrzeo67gs.js";

function m(e) {
    "use forget";
    let t = (0, h.c)(23),
        {
            value: a,
            onChange: o,
            appearance: s,
            isCompact: l,
            className: u
        } = e,
        d = s === void 0 ? `tabs` : s,
        m = l !== void 0 && l,
        _ = r(),
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
        let r, i;
        t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (r = {
            value: b[0].value,
            label: b[0].label
        }, i = {
            value: b[1].value,
            label: b[1].label
        }, t[6] = r, t[7] = i) : (r = t[6], i = t[7]);
        let s;
        return t[8] !== S || t[9] !== m || t[10] !== o || t[11] !== e || t[12] !== a ? (s = (0, g.jsx)(c, {
            ariaLabel: S,
            className: e,
            isCompact: m,
            value: a,
            onChange: o,
            shouldToggleSelected: !1,
            leftItem: r,
            rightItem: i
        }), t[8] = S, t[9] = m, t[10] = o, t[11] = e, t[12] = a, t[13] = s) : s = t[13], s
    }
    let C;
    t[14] === u ? C = t[15] : (C = n(`flex shrink-0 flex-wrap gap-5`, u), t[14] = u, t[15] = C);
    let w;
    t[16] !== o || t[17] !== a ? (w = b.map(e => {
        let t = a === e.value;
        return (0, g.jsxs)(`button`, {
            type: `button`,
            onClick: () => o(e.value),
            "aria-pressed": t,
            className: n(`text-token-text-tertiary hover:text-token-text-secondary relative inline-flex items-center gap-1.5 py-2 text-sm font-normal transition-colors`, t && `text-token-text-primary font-medium`),
            children: [e.icon, e.label, t ? (0, g.jsx)(`span`, {
                "aria-hidden": !0,
                className: `bg-token-text-primary absolute inset-x-0 bottom-0 h-0.5 rounded-full`
            }) : null]
        }, e.value)
    }), t[16] = o, t[17] = a, t[18] = w) : w = t[18];
    let T;
    return t[19] !== S || t[20] !== C || t[21] !== w ? (T = (0, g.jsx)(`nav`, {
        "aria-label": S,
        className: C,
        children: w
    }), t[19] = S, t[20] = C, t[21] = w, t[22] = T) : T = t[22], T
}
var h, g, _ = e((() => {
    h = a(), l(), d(), u(), t(), s(), g = o()
}));
export {
    _ as n, m as t
};
//# sourceMappingURL=3a774aaf-jqjpnrrc0sodophq.js.map
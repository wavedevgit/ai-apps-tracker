import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    l7 as t,
    u7 as n
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    Bn as r,
    Ln as i,
    Rn as a,
    wn as o
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    SUn as s,
    bUn as c,
    xUn as l
} from "./conversation-small-fh0oqifngkf5rvl1.js";
import {
    DC as u,
    EC as d,
    Kc as f,
    ay as p,
    iy as m,
    qc as h
} from "./30901919-cmi3nh547dwrqkxv.js";

function g(e) {
    "use forget";
    let n = (0, E.c)(45),
        {
            disabled: r,
            labelId: i,
            onChange: a,
            options: o,
            placeholder: s,
            triggerVariant: u,
            triggerId: p,
            value: h
        } = e,
        g = r !== void 0 && r,
        _ = u === void 0 ? `default` : u,
        v;
    if (n[0] !== o || n[1] !== h) {
        let e;
        n[3] === h ? e = n[4] : (e = e => e.value === h, n[3] = h, n[4] = e), v = o.find(e), n[0] = o, n[1] = h, n[2] = v
    } else v = n[2];
    let y = v,
        b = y?.triggerLabel ?? s,
        x = y == null,
        S = `${p}-value`,
        C = _ === `inline`,
        w = C ? `end` : `start`,
        T = C ? `min-w-44 p-0` : `w-[var(--trigger-width)] p-0`,
        O = `${p}-trigger`,
        k = `${i} ${S}`,
        A = C ? `focus-visible:outline-token-border-default -m-2 inline-flex items-center gap-1.5 rounded-md px-2 py-2 text-start text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2` : `border-token-border-heavy bg-token-bg-primary text-token-text-primary focus:border-token-border-heavy focus:ring-token-text-secondary flex h-10 w-full items-center gap-2 rounded-xl border px-3 text-sm focus:ring-1 focus:outline-hidden`,
        j = g ? `cursor-not-allowed opacity-60` : `radix-state-open:bg-token-interactive-bg-secondary-press cursor-pointer hover:bg-token-interactive-bg-secondary-hover hover:text-token-text-secondary active:bg-token-interactive-bg-secondary-press`,
        M;
    n[5] !== A || n[6] !== j ? (M = t(A, j), n[5] = A, n[6] = j, n[7] = M) : M = n[7];
    let N;
    n[8] === C ? N = n[9] : (N = !C && (0, D.jsx)(m, {
        "aria-hidden": !0,
        className: `icon-sm text-token-text-tertiary shrink-0`
    }), n[8] = C, n[9] = N);
    let P = C ? `text-token-text-primary truncate font-medium whitespace-nowrap` : `min-w-0 flex-1 truncate text-start`,
        F = x && `text-token-text-tertiary`,
        I;
    n[10] !== P || n[11] !== F ? (I = t(P, F), n[10] = P, n[11] = F, n[12] = I) : I = n[12];
    let L;
    n[13] !== b || n[14] !== I || n[15] !== S ? (L = (0, D.jsx)(`span`, {
        id: S,
        className: I,
        children: b
    }), n[13] = b, n[14] = I, n[15] = S, n[16] = L) : L = n[16];
    let R;
    n[17] === C ? R = n[18] : (R = C ? (0, D.jsx)(d, {
        "aria-hidden": !0,
        className: `icon-sm text-token-text-tertiary shrink-0`
    }) : (0, D.jsx)(f, {
        "aria-hidden": !0,
        className: `icon-sm text-token-text-tertiary shrink-0`
    }), n[17] = C, n[18] = R);
    let z;
    n[19] !== g || n[20] !== M || n[21] !== N || n[22] !== L || n[23] !== R || n[24] !== O || n[25] !== k || n[26] !== p ? (z = (0, D.jsxs)(`button`, {
        id: p,
        "data-testid": O,
        type: `button`,
        disabled: g,
        "aria-labelledby": k,
        className: M,
        children: [N, L, R]
    }), n[19] = g, n[20] = M, n[21] = N, n[22] = L, n[23] = R, n[24] = O, n[25] = k, n[26] = p, n[27] = z) : z = n[27];
    let B = y?.value,
        V;
    n[28] !== a || n[29] !== o ? (V = e => {
        let t = o.find(t => t.value === e);
        t != null && a(t.value)
    }, n[28] = a, n[29] = o, n[30] = V) : V = n[30];
    let H;
    if (n[31] !== o || n[32] !== p) {
        let e;
        n[34] === p ? e = n[35] : (e = e => (0, D.jsx)(l.RadioItem, {
            value: e.value,
            label: e.label,
            className: `mx-0 w-full rounded-none px-3 py-2 first:rounded-t-2xl last:rounded-b-2xl`,
            "data-testid": `${p}-option-${e.value}`
        }, e.value), n[34] = p, n[35] = e), H = o.map(e), n[31] = o, n[32] = p, n[33] = H
    } else H = n[33];
    let U;
    n[36] !== B || n[37] !== V || n[38] !== H ? (U = (0, D.jsx)(l.RadioGroup, {
        value: B,
        onValueChange: V,
        children: H
    }), n[36] = B, n[37] = V, n[38] = H, n[39] = U) : U = n[39];
    let W;
    return n[40] !== z || n[41] !== U || n[42] !== w || n[43] !== T ? (W = (0, D.jsx)(c, {
        contentAlign: w,
        contentClassName: T,
        size: `auto`,
        sideOffset: 0,
        triggerButton: z,
        children: U
    }), n[40] = z, n[41] = U, n[42] = w, n[43] = T, n[44] = W) : W = n[44], W
}

function _({
    intl: e,
    maxTtlSeconds: t,
    customLabel: n,
    noneLabel: r,
    showPresetDates: i
}) {
    return [...M.filter(e => t == null || e.days * 86400 <= t).map(t => ({
        value: t.value,
        label: i ? w(t.days, e) : T(t.days, e),
        triggerLabel: T(t.days, e)
    })), ...t == null || t >= 86400 ? [{
        value: `custom`,
        label: n,
        triggerLabel: n
    }] : [], ...r == null ? [] : [{
        value: `none`,
        label: r,
        triggerLabel: r
    }]]
}

function v(e) {
    return e === `7d` || e === `30d` || e === `60d` || e === `90d`
}

function y(e, t) {
    return t.formatDate(new Date(Date.now() + e * O * 1e3), {
        month: `short`,
        day: `2-digit`,
        year: `numeric`
    })
}

function b() {
    let e = new Date(Date.now() + k);
    return e.setHours(0, 0, 0, 0), e
}

function x(e) {
    let t = new Date(Date.now() + e * 1e3);
    return t.setHours(0, 0, 0, 0), t
}

function S(e) {
    return `${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`
}

function C(e) {
    let t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(e);
    if (t == null) return null;
    let n = Number(t[1]),
        r = Number(t[2]),
        i = Number(t[3]),
        a = new Date(n, r - 1, i);
    return a.getFullYear() !== n || a.getMonth() !== r - 1 || a.getDate() !== i ? null : a
}

function w(e, t) {
    return t.formatMessage(N.expirationPresetOption, {
        days: e,
        date: y(e, t)
    })
}

function T(e, t) {
    return t.formatMessage(N.expirationPresetDuration, {
        days: e
    })
}
var E, D, O, k, A, j, M, N, P = e((() => {
    E = o(), s(), p(), u(), h(), n(), a(), D = r(), O = 1440 * 60, k = O * 1e3, A = k / 1e3, j = {
        "7d": 7,
        "30d": 30,
        "60d": 60,
        "90d": 90
    }, M = [{
        value: `7d`,
        days: 7
    }, {
        value: `30d`,
        days: 30
    }, {
        value: `60d`,
        days: 60
    }, {
        value: `90d`,
        days: 90
    }], N = i({
        expirationPresetOption: {
            id: `chatgpt.access_tokens.create_modal.expiration.preset.option`,
            defaultMessage: `{days} days ({date})`
        },
        expirationPresetDuration: {
            id: `chatgpt.access_tokens.create_modal.expiration.preset.duration`,
            defaultMessage: `{days} days`
        }
    })
}));
export {
    _ as a, x as c, v as d, C as f, O as i, b as l, j as n, S as o, A as r, y as s, g as t, P as u
};
//# sourceMappingURL=54aa3ef4-mxb8wmis8bv70qps.js.map
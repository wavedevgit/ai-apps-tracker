import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Int as n,
    JT as r,
    Ji as ee,
    Mw as te,
    Nw as i,
    Pnt as a,
    Qnt as ne,
    Snt as o,
    X5 as s,
    Xi as c,
    Y5 as l,
    YT as u,
    trt as d,
    wnt as f
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    Bn as p,
    Ln as m,
    Nn as h,
    Rn as g,
    Vn as _,
    wn as v
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    CC as y,
    SC as re,
    e_ as b,
    t_ as x
} from "./30901919-niqyapppecmq5jkn.js";

function S(e) {
    return /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(e)
}

function C(e, t) {
    if (!e) return [{
        date: t,
        change: null
    }];
    let n = e.map(e => e.trim()).filter(Boolean);
    return n.length === 0 ? [{
        date: t,
        change: null
    }] : n.map(e => ({
        date: t,
        change: e
    }))
}

function ie(e, t) {
    let n = Object.keys(e).filter(S);
    return S(t) && !n.includes(t) && n.push(t), n.sort((e, t) => t.localeCompare(e)), n.flatMap(t => {
        let n = e[t];
        return C(n, t)
    })
}

function ae(e) {
    if (!e) return {};
    let t = {},
        n = e.changelog_latest_date;
    typeof n == `string` && S(n) && (t.changelog_latest_date = n);
    for (let [n, r] of Object.entries(e)) !S(n) || !Array.isArray(r) || (t[n] = r.filter(e => typeof e == `string`));
    return t
}

function oe(e) {
    let t = a.getItem(e);
    return typeof t == `string` && t.trim() ? t.trim() : null
}

function se(e, t) {
    S(t) && a.setItem(e, t)
}

function w(e) {
    "use forget";
    let t = (0, T.c)(42),
        {
            className: n,
            showFeedbackButton: i,
            storageKey: a,
            title: s
        } = e,
        c = i === void 0 || i,
        u;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (u = ne(O), t[0] = u) : u = t[0];
    let d = u,
        f;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (f = ae(d.value), t[1] = f) : f = t[1];
    let p = f,
        m;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (m = d.get(`changelog_latest_date`, ``), t[2] = m) : m = t[2];
    let g = m,
        _ = typeof g == `string` ? g : ``,
        v;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (v = ie(p, _), t[3] = v) : v = t[3];
    let y = v,
        [b, C] = (0, E.useState)(0),
        [w, j] = (0, E.useState)(!1),
        M;
    bb0: {
        let e, n;
        if (t[4] === a ? (e = t[5], n = t[6]) : (e = oe(a), n = !e || !S(e), t[4] = a, t[5] = e, t[6] = n), n) {
            M = y;
            break bb0
        }
        let r;t[7] === e ? r = t[8] : (r = y.filter(t => t.date > e), t[7] = e, t[8] = r),
        M = r
    }
    let N = M,
        P;
    t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (P = () => {
        C(0)
    }, t[9] = P) : P = t[9];
    let F;
    t[10] === N.length ? F = t[11] : (F = [N.length], t[10] = N.length, t[11] = F), (0, E.useEffect)(P, F);
    let I = N[b] ?? null,
        L = N[0] ?? null,
        R = N.length > 1 || c,
        z;
    bb1: z = N.length > 0;
    let le = z,
        B;
    t[12] !== L || t[13] !== a ? (B = () => {
        L && (o.logStructuredEvent(`AardvarkChangelogBannerDismissed`, {
            changelogUtcDate: L.date
        }), se(a, L.date), j(!0))
    }, t[12] = L, t[13] = a, t[14] = B) : B = t[14];
    let V = B,
        H;
    t[15] === I ? H = t[16] : (H = () => {
        typeof window > `u` || (I && o.logStructuredEvent(`AardvarkChangelogBannerFeedbackClicked`, {
            changelogUtcDate: I.date
        }), window.open(k, `_blank`, `noopener,noreferrer`))
    }, t[15] = I, t[16] = H);
    let U = H;
    if (!le || !I || w) return null;
    let W;
    t[17] !== b || t[18] !== N.length ? (W = N.length > 1 ? (0, D.jsxs)(`div`, {
        className: `text-token-text-tertiary flex items-center justify-center gap-1 text-xs md:text-sm`,
        children: [(0, D.jsxs)(`button`, {
            type: `button`,
            onClick: () => C(ce),
            disabled: b === 0,
            className: `hover:bg-token-main-surface-primary rounded-md p-1.5 disabled:cursor-not-allowed disabled:opacity-50`,
            children: [(0, D.jsx)(`span`, {
                className: `sr-only`,
                children: (0, D.jsx)(h, {
                    ...A.previousCta
                })
            }), (0, D.jsx)(te, {
                className: `icon-sm`
            })]
        }), (0, D.jsx)(`span`, {
            className: `font-mono tabular-nums`,
            children: (0, D.jsx)(h, {
                ...A.pageCounter,
                values: {
                    current: b + 1,
                    total: N.length
                }
            })
        }), (0, D.jsxs)(`button`, {
            type: `button`,
            onClick: () => C(e => Math.min(e + 1, N.length - 1)),
            disabled: b === N.length - 1,
            className: `hover:bg-token-main-surface-primary rounded-md p-1.5 disabled:cursor-not-allowed disabled:opacity-50`,
            children: [(0, D.jsx)(`span`, {
                className: `sr-only`,
                children: (0, D.jsx)(h, {
                    ...A.nextCta
                })
            }), (0, D.jsx)(re, {
                className: `icon-sm`
            })]
        })]
    }) : null, t[17] = b, t[18] = N.length, t[19] = W) : W = t[19];
    let G = W,
        K;
    t[20] === n ? K = t[21] : (K = l(`bg-token-main-surface-secondary text-token-text-primary shadow-xxs mx-auto w-full max-w-3xl rounded-2xl border border-white/5 py-3 ps-4 pe-4`, n), t[20] = n, t[21] = K);
    let q;
    t[22] === Symbol.for(`react.memo_cache_sentinel`) ? (q = (0, D.jsx)(x, {
        "aria-hidden": !0,
        className: `text-token-text-tertiary icon-sm shrink-0`
    }), t[22] = q) : q = t[22];
    let J;
    t[23] === s ? J = t[24] : (J = s ?? (0, D.jsx)(h, {
        ...A.title
    }), t[23] = s, t[24] = J);
    let Y;
    t[25] === J ? Y = t[26] : (Y = (0, D.jsxs)(`div`, {
        className: `text-token-text-primary mb-2 flex items-center gap-2 text-sm font-medium`,
        children: [q, (0, D.jsx)(`span`, {
            children: J
        })]
    }), t[25] = J, t[26] = Y);
    let X;
    t[27] === I.change ? X = t[28] : (X = I.change ? (0, D.jsx)(`p`, {
        className: `text-token-text-secondary text-xs md:text-sm`,
        children: I.change
    }) : null, t[27] = I.change, t[28] = X);
    let Z;
    t[29] !== U || t[30] !== G || t[31] !== c || t[32] !== R ? (Z = R ? (0, D.jsxs)(`div`, {
        className: l(`flex items-center gap-3`, c ? `justify-between` : `justify-end`),
        children: [G, c ? (0, D.jsx)(`div`, {
            className: `shrink-0`,
            children: (0, D.jsx)(r, {
                onClick: U,
                color: `primary`,
                children: (0, D.jsx)(h, {
                    ...A.feedbackCta
                })
            })
        }) : null]
    }) : null, t[29] = U, t[30] = G, t[31] = c, t[32] = R, t[33] = Z) : Z = t[33];
    let Q;
    t[34] !== X || t[35] !== Z ? (Q = (0, D.jsxs)(`div`, {
        className: `flex flex-col gap-5`,
        children: [X, Z]
    }), t[34] = X, t[35] = Z, t[36] = Q) : Q = t[36];
    let $;
    return t[37] !== V || t[38] !== K || t[39] !== Y || t[40] !== Q ? ($ = (0, D.jsx)(ee, {
        className: K,
        onDismiss: V,
        title: Y,
        content: Q,
        contentClassName: `md:flex-col md:items-start md:justify-start md:!gap-0`,
        closeButtonContainerClassName: `self-start pt-0.5 sm:items-start md:items-start`,
        type: `normal`
    }), t[37] = V, t[38] = K, t[39] = Y, t[40] = Q, t[41] = $) : $ = t[41], $
}

function ce(e) {
    return Math.max(e - 1, 0)
}
var T, E, D, O, k, A, j = e((() => {
    T = v(), s(), E = t(_()), g(), u(), c(), i(), y(), b(), f(), n(), d(), D = p(), O = `3923090434`, k = `https://forms.gle/arrj4MzLN1YqdR8S6`, A = m({
        title: {
            id: `aardvark.changelog.banner.title`,
            defaultMessage: `New features and improvements`
        },
        feedbackCta: {
            id: `aardvark.changelog.banner.feedbackCta`,
            defaultMessage: `Share feedback`
        },
        previousCta: {
            id: `aardvark.changelog.banner.previousCta`,
            defaultMessage: `Previous`
        },
        nextCta: {
            id: `aardvark.changelog.banner.nextCta`,
            defaultMessage: `Next`
        },
        pageCounter: {
            id: `aardvark.changelog.banner.pageCounter`,
            defaultMessage: `{current}/{total}`
        }
    })
}));
export {
    j as n, w as t
};
//# sourceMappingURL=4c6c4e54-i4rvicakzxj2u97p.js.map
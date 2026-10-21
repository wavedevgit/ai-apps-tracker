import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Dnt as n,
    Gnt as r,
    J5 as i,
    JT as a,
    Ji as o,
    Jnt as s,
    Mw as c,
    Xi as l,
    _nt as u,
    hnt as d,
    jw as ee,
    knt as f,
    q5 as p,
    qT as te
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Hn as m,
    Pn as h,
    Rn as g,
    Tn as _,
    Vn as v,
    zn as y
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    CC as b,
    SC as ne,
    e_ as x,
    t_ as re
} from "./30901919-jory365vq6ym5crx.js";

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
    let t = n.getItem(e);
    return typeof t == `string` && t.trim() ? t.trim() : null
}

function se(e, t) {
    S(t) && n.setItem(e, t)
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
        l;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (l = r(O), t[0] = l) : l = t[0];
    let u = l,
        f;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (f = ae(u.value), t[1] = f) : f = t[1];
    let m = f,
        g;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (g = u.get(`changelog_latest_date`, ``), t[2] = g) : g = t[2];
    let _ = g,
        v = typeof _ == `string` ? _ : ``,
        y;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (y = ie(m, v), t[3] = y) : y = t[3];
    let b = y,
        [x, C] = (0, E.useState)(0),
        [w, j] = (0, E.useState)(!1),
        M;
    bb0: {
        let e, n;
        if (t[4] === a ? (e = t[5], n = t[6]) : (e = oe(a), n = !e || !S(e), t[4] = a, t[5] = e, t[6] = n), n) {
            M = b;
            break bb0
        }
        let r;t[7] === e ? r = t[8] : (r = b.filter(t => t.date > e), t[7] = e, t[8] = r),
        M = r
    }
    let N = M,
        P;
    t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (P = () => {
        C(0)
    }, t[9] = P) : P = t[9];
    let F;
    t[10] === N.length ? F = t[11] : (F = [N.length], t[10] = N.length, t[11] = F), (0, E.useEffect)(P, F);
    let I = N[x] ?? null,
        L = N[0] ?? null,
        R = N.length > 1 || c,
        z;
    bb1: z = N.length > 0;
    let le = z,
        B;
    t[12] !== L || t[13] !== a ? (B = () => {
        L && (d.logStructuredEvent(`AardvarkChangelogBannerDismissed`, {
            changelogUtcDate: L.date
        }), se(a, L.date), j(!0))
    }, t[12] = L, t[13] = a, t[14] = B) : B = t[14];
    let V = B,
        H;
    t[15] === I ? H = t[16] : (H = () => {
        typeof window > `u` || (I && d.logStructuredEvent(`AardvarkChangelogBannerFeedbackClicked`, {
            changelogUtcDate: I.date
        }), window.open(k, `_blank`, `noopener,noreferrer`))
    }, t[15] = I, t[16] = H);
    let U = H;
    if (!le || !I || w) return null;
    let W;
    t[17] !== x || t[18] !== N.length ? (W = N.length > 1 ? (0, D.jsxs)(`div`, {
        className: `text-token-text-tertiary flex items-center justify-center gap-1 text-xs md:text-sm`,
        children: [(0, D.jsxs)(`button`, {
            type: `button`,
            onClick: () => C(ce),
            disabled: x === 0,
            className: `hover:bg-token-main-surface-primary rounded-md p-1.5 disabled:cursor-not-allowed disabled:opacity-50`,
            children: [(0, D.jsx)(`span`, {
                className: `sr-only`,
                children: (0, D.jsx)(h, {
                    ...A.previousCta
                })
            }), (0, D.jsx)(ee, {
                className: `icon-sm`
            })]
        }), (0, D.jsx)(`span`, {
            className: `font-mono tabular-nums`,
            children: (0, D.jsx)(h, {
                ...A.pageCounter,
                values: {
                    current: x + 1,
                    total: N.length
                }
            })
        }), (0, D.jsxs)(`button`, {
            type: `button`,
            onClick: () => C(e => Math.min(e + 1, N.length - 1)),
            disabled: x === N.length - 1,
            className: `hover:bg-token-main-surface-primary rounded-md p-1.5 disabled:cursor-not-allowed disabled:opacity-50`,
            children: [(0, D.jsx)(`span`, {
                className: `sr-only`,
                children: (0, D.jsx)(h, {
                    ...A.nextCta
                })
            }), (0, D.jsx)(ne, {
                className: `icon-sm`
            })]
        })]
    }) : null, t[17] = x, t[18] = N.length, t[19] = W) : W = t[19];
    let G = W,
        K;
    t[20] === n ? K = t[21] : (K = p(`bg-token-main-surface-secondary text-token-text-primary shadow-xxs mx-auto w-full max-w-3xl rounded-2xl border border-white/5 py-3 ps-4 pe-4`, n), t[20] = n, t[21] = K);
    let q;
    t[22] === Symbol.for(`react.memo_cache_sentinel`) ? (q = (0, D.jsx)(re, {
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
        className: p(`flex items-center gap-3`, c ? `justify-between` : `justify-end`),
        children: [G, c ? (0, D.jsx)(`div`, {
            className: `shrink-0`,
            children: (0, D.jsx)(te, {
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
    return t[37] !== V || t[38] !== K || t[39] !== Y || t[40] !== Q ? ($ = (0, D.jsx)(o, {
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
    T = _(), i(), E = t(m()), y(), a(), l(), c(), b(), x(), u(), f(), s(), D = v(), O = `3923090434`, k = `https://forms.gle/arrj4MzLN1YqdR8S6`, A = g({
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
//# sourceMappingURL=4c6c4e54-j93vtm7t20so3dsh.js.map
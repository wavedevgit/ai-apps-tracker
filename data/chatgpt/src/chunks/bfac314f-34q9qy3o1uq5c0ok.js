import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    _J as n,
    c7 as r,
    cW as i,
    dJ as a,
    fJ as o,
    gJ as s,
    l7 as c,
    lW as l,
    oW as u,
    pJ as d,
    sW as f,
    yJ as p
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bn as m,
    Nn as h,
    On as g,
    Rn as _,
    Vn as v,
    wn as y,
    zn as b
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Bjt as x,
    JAt as S,
    Mjt as C,
    Njt as w,
    qAt as T,
    zjt as E
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    Hc as D,
    Uc as O
} from "./30901919-lgbmg5s09xld40kt.js";
import {
    n as k,
    r as ee
} from "./0eda9bd1-8coeo401ymdc7dtn.js";
var A, j, M = e((() => {
        A = new Set([`awaiting_connection`, `running`]), j = (e, t) => {
            switch (t) {
                case `awaiting_connection`:
                    return e.formatMessage({
                        id: `wham.universe.status.waiting_for_sdk_connection`,
                        defaultMessage: `Waiting for SDK connection`
                    });
                case `pending_setup`:
                    return e.formatMessage({
                        id: `wham.universe.status.setting_up_environment`,
                        defaultMessage: `Setting up environment`
                    });
                case `pending_grading`:
                    return e.formatMessage({
                        id: `wham.universe.status.waiting_for_score`,
                        defaultMessage: `Waiting for score`
                    });
                case `queued`:
                    return e.formatMessage({
                        id: `wham.universe.status.queued`,
                        defaultMessage: `Queued`
                    });
                case `pending`:
                    return e.formatMessage({
                        id: `wham.universe.status.pending`,
                        defaultMessage: `Pending`
                    });
                case `running`:
                    return e.formatMessage({
                        id: `wham.universe.status.running`,
                        defaultMessage: `Running`
                    });
                case `completed`:
                    return e.formatMessage({
                        id: `wham.universe.status.completed`,
                        defaultMessage: `Completed`
                    });
                case `failed`:
                case `errored`:
                    return e.formatMessage({
                        id: `wham.universe.status.run_failed`,
                        defaultMessage: `Run failed`
                    });
                case `canceled`:
                case `cancelled`:
                    return e.formatMessage({
                        id: `wham.universe.status.cancelled`,
                        defaultMessage: `Canceled`
                    });
                default:
                    return e.formatMessage({
                        id: `wham.universe.status.unknown`,
                        defaultMessage: `Unknown`
                    })
            }
        }
    })),
    N, te = e((() => {
        s(), N = o({
            name: `circle-light-20`,
            canvas: {
                width: 20,
                height: 20,
                viewBox: `0 0 20 20`,
                frame: {
                    x: 0,
                    y: 0,
                    width: 20,
                    height: 20
                },
                inkBounds: {
                    x: 1.834961,
                    y: 1.834961,
                    width: 16.330078,
                    height: 16.330078
                },
                visualBounds: {
                    x: 1.834961,
                    y: 1.834961,
                    width: 16.330078,
                    height: 16.330078
                }
            },
            paint: {
                kind: `monochrome`
            },
            optical: {
                shape: `circular`,
                bounds: {
                    x: 1.834961,
                    y: 1.834961,
                    width: 16.330078,
                    height: 16.330078
                },
                center: {
                    x: 10,
                    y: 10
                },
                insets: {
                    top: 1.834961,
                    right: 1.834961,
                    bottom: 1.834961,
                    left: 1.834961
                },
                anchors: {
                    frame: {
                        x: 10,
                        y: 10
                    },
                    ink: {
                        x: 10,
                        y: 10
                    },
                    foreground: {
                        x: 10,
                        y: 10
                    }
                }
            },
            capabilities: [`icon`],
            body: `<path d="M16.835 10C16.835 6.22513 13.7749 3.16504 10 3.16504C6.22513 3.16504 3.16504 6.22513 3.16504 10C3.16504 13.7749 6.22513 16.835 10 16.835C13.7749 16.835 16.835 13.7749 16.835 10ZM18.165 10C18.165 14.5094 14.5094 18.165 10 18.165C5.49059 18.165 1.83496 14.5094 1.83496 10C1.83496 5.49059 5.49059 1.83496 10 1.83496C14.5094 1.83496 18.165 5.49059 18.165 10Z" fill="currentColor"/>`
        })
    }));

function P(e) {
    return function(t) {
        "use forget";
        let r = (0, I.c)(30),
            i, a, o, s, c, l, u, d, f, m;
        r[0] === t ? (i = r[1], a = r[2], o = r[3], s = r[4], c = r[5], l = r[6], u = r[7], d = r[8], f = r[9], m = r[10]) : ({
            "aria-hidden": i,
            "aria-label": a,
            "aria-labelledby": o,
            fill: f,
            focusable: s,
            height: c,
            ref: u,
            role: d,
            width: m,
            ...l
        } = t, r[0] = t, r[1] = i, r[2] = a, r[3] = o, r[4] = s, r[5] = c, r[6] = l, r[7] = u, r[8] = d, r[9] = f, r[10] = m);
        let h = f === void 0 ? `none` : f,
            g = (0, L.useId)(),
            _ = z.icons[e],
            v = a != null && a !== `` || o != null && o !== ``,
            y;
        if (r[11] !== g) {
            let e;
            r[13] === Symbol.for(`react.memo_cache_sentinel`) ? (e = /[^A-Za-z0-9_.:-]/g, r[13] = e) : e = r[13], y = g.replace(e, `_`), r[11] = g, r[12] = y
        } else y = r[12];
        let b = `codex-job-status-${e}-${y}`,
            x = m ?? _.canvas.width,
            S = c ?? _.canvas.height,
            C = _.canvas.viewBox,
            w = s ?? `false`,
            T = d ?? (v ? `img` : void 0),
            E = i ?? (!v || void 0),
            D;
        r[14] === b ? D = r[15] : (D = n(p(_), b), r[14] = b, r[15] = D);
        let O;
        r[16] === D ? O = r[17] : (O = {
            __html: D
        }, r[16] = D, r[17] = O);
        let k;
        return r[18] !== a || r[19] !== o || r[20] !== h || r[21] !== l || r[22] !== u || r[23] !== O || r[24] !== x || r[25] !== S || r[26] !== w || r[27] !== T || r[28] !== E ? (k = (0, R.jsx)(`svg`, {
            ...l,
            ref: u,
            xmlns: `http://www.w3.org/2000/svg`,
            width: x,
            height: S,
            viewBox: C,
            fill: h,
            focusable: w,
            role: T,
            "aria-label": a,
            "aria-labelledby": o,
            "aria-hidden": E,
            dangerouslySetInnerHTML: O
        }), r[18] = a, r[19] = o, r[20] = h, r[21] = l, r[22] = u, r[23] = O, r[24] = x, r[25] = S, r[26] = w, r[27] = T, r[28] = E, r[29] = k) : k = r[29], k
    }
}

function F(e) {
    "use forget";
    let t = (0, I.c)(12),
        {
            status: n
        } = e,
        a = b(),
        o;
    t[0] !== a || t[1] !== n ? (o = j(a, n), t[0] = a, t[1] = n, t[2] = o) : o = t[2];
    let s = o,
        c = n === `failed` || n === `errored`,
        l = n === `canceled` || n === `cancelled`,
        u = n === `completed` ? i : l ? O : c ? V : n === `awaiting_connection` || n === `pending_setup` || n === `pending_grading` || n === `pending` || n === `queued` ? B : H,
        d;
    t[3] !== u || t[4] !== l || t[5] !== c || t[6] !== s || t[7] !== n ? (d = e => (0, R.jsx)(`span`, {
        ...e,
        "aria-label": s,
        className: r(`inline-flex size-4 shrink-0 items-center justify-center`, c || l ? `text-token-text-status-error` : `text-[var(--main-surface-primary-inverse)] dark:text-[var(--sidebar-surface-secondary)]`),
        role: `img`,
        children: n === `running` ? (0, R.jsxs)(`svg`, {
            "aria-hidden": `true`,
            className: `size-4 motion-safe:animate-spin`,
            fill: `none`,
            stroke: `currentColor`,
            strokeWidth: 2,
            style: {
                animationDuration: `2s`
            },
            viewBox: `0 0 16 16`,
            children: [(0, R.jsx)(`circle`, {
                className: `text-[var(--sidebar-surface-secondary)]`,
                cx: 8,
                cy: 8,
                r: 7
            }), (0, R.jsx)(`circle`, {
                className: `text-[var(--main-surface-primary-inverse)]`,
                cx: 8,
                cy: 8,
                pathLength: 100,
                r: 7,
                strokeDasharray: `75 25`,
                transform: `rotate(-90 8 8)`
            })]
        }) : (0, R.jsx)(u, {
            "aria-hidden": `true`,
            className: `size-5 shrink-0`
        })
    }), t[3] = u, t[4] = l, t[5] = c, t[6] = s, t[7] = n, t[8] = d) : d = t[8];
    let f;
    return t[9] !== s || t[10] !== d ? (f = (0, R.jsx)(C, {
        content: s,
        side: `top-center`,
        children: d
    }), t[9] = s, t[10] = d, t[11] = f) : f = t[11], f
}
var I, L, R, z, B, V, H, U = e((() => {
    I = y(), l(), D(), w(), M(), a(), te(), x(), S(), c(), L = t(v()), _(), R = m(), z = d({
        id: `codex-universe-job-status`,
        icons: {
            circle: N,
            "circle-xmark": E,
            clock: T
        }
    }), B = P(`clock`), V = P(`circle-xmark`), H = P(`circle`)
}));

function W(e) {
    return (0, K.jsxs)(`div`, {
        className: `border-token-border-light flex flex-col gap-2 border-b px-3 py-3.5`,
        children: [(0, K.jsx)(k, {
            className: r(`h-2.5`, e)
        }), (0, K.jsx)(k, {
            className: `h-2 w-1/2`
        })]
    }, e)
}
var G, K, q, J, Y, X, Z, Q, $, ne = e((() => {
    G = y(), u(), ee(), U(), M(), c(), _(), K = m(), q = e => {
        "use forget";
        let t = (0, G.c)(12),
            {
                icon: n,
                label: r,
                children: i
            } = e,
            a;
        t[0] === r ? a = t[1] : (a = (0, K.jsx)(`dt`, {
            className: `text-token-text-secondary text-sm`,
            children: r
        }), t[0] = r, t[1] = a);
        let o;
        t[2] === n ? o = t[3] : (o = n != null && (0, K.jsx)(n, {
            "aria-hidden": `true`,
            className: `icon-sm text-token-icon-tertiary mt-0.5 shrink-0`
        }), t[2] = n, t[3] = o);
        let s;
        t[4] === i ? s = t[5] : (s = (0, K.jsx)(`div`, {
            className: `min-w-0 flex-1`,
            children: i
        }), t[4] = i, t[5] = s);
        let c;
        t[6] !== o || t[7] !== s ? (c = (0, K.jsx)(`dd`, {
            className: `text-token-text-primary min-w-0 text-sm break-words`,
            children: (0, K.jsxs)(`div`, {
                className: `flex items-start gap-2`,
                children: [o, s]
            })
        }), t[6] = o, t[7] = s, t[8] = c) : c = t[8];
        let l;
        return t[9] !== a || t[10] !== c ? (l = (0, K.jsxs)(`div`, {
            className: `grid min-w-0 grid-cols-[min(40%,146px)_minmax(0,1fr)] items-start gap-4`,
            children: [a, c]
        }), t[9] = a, t[10] = c, t[11] = l) : l = t[11], l
    }, J = e => {
        "use forget";
        let t = (0, G.c)(10),
            {
                value: n
            } = e,
            r = b(),
            i;
        t[0] === n ? i = t[1] : (i = (0, K.jsx)(`span`, {
            "aria-hidden": `true`,
            className: `mt-0.5 inline-flex shrink-0`,
            children: (0, K.jsx)(F, {
                status: n
            })
        }), t[0] = n, t[1] = i);
        let a;
        t[2] !== r || t[3] !== n ? (a = j(r, n), t[2] = r, t[3] = n, t[4] = a) : a = t[4];
        let o;
        t[5] === a ? o = t[6] : (o = (0, K.jsx)(`span`, {
            children: a
        }), t[5] = a, t[6] = o);
        let s;
        return t[7] !== i || t[8] !== o ? (s = (0, K.jsxs)(`span`, {
            className: `flex items-start gap-2`,
            children: [i, o]
        }), t[7] = i, t[8] = o, t[9] = s) : s = t[9], s
    }, Y = e => {
        "use forget";
        let t = (0, G.c)(3),
            {
                value: n,
                maximumFractionDigits: r
            } = e,
            i = r === void 0 ? 6 : r,
            a;
        return t[0] !== i || t[1] !== n ? (a = n == null || !Number.isFinite(n) ? (0, K.jsx)(`span`, {
            className: `text-token-text-tertiary`,
            children: (0, K.jsx)(h, {
                id: `wham.universe.value.unavailable`,
                defaultMessage: `—`
            })
        }) : (0, K.jsx)(g, {
            value: n,
            maximumFractionDigits: i
        }), t[0] = i, t[1] = n, t[2] = a) : a = t[2], a
    }, X = e => {
        "use forget";
        let t = (0, G.c)(8),
            {
                value: n
            } = e,
            i = b(),
            a = A.has(n) || n === `pending_setup` || n === `pending_grading`,
            o = n === `completed` ? `text-token-text-status-success` : n === `failed` || n === `errored` || n === `cancelled` || n === `canceled` ? `text-token-text-status-error` : a ? `text-token-text-accent` : `text-token-text-secondary`,
            s;
        t[0] === o ? s = t[1] : (s = r(`inline-flex shrink-0 items-center gap-1.5 text-xs`, o), t[0] = o, t[1] = s);
        let c;
        t[2] !== i || t[3] !== n ? (c = j(i, n), t[2] = i, t[3] = n, t[4] = c) : c = t[4];
        let l;
        return t[5] !== s || t[6] !== c ? (l = (0, K.jsx)(`span`, {
            className: s,
            children: c
        }), t[5] = s, t[6] = c, t[7] = l) : l = t[7], l
    }, Z = e => {
        "use forget";
        let t = (0, G.c)(15),
            {
                description: n,
                icon: i,
                title: a,
                compact: o
            } = e,
            s = o !== void 0 && o ? `min-h-40 px-4 py-5` : `min-h-72 px-6 py-10`,
            c;
        t[0] === s ? c = t[1] : (c = r(`flex flex-col items-center justify-center gap-3 text-center`, s), t[0] = s, t[1] = c);
        let l;
        t[2] === i ? l = t[3] : (l = (0, K.jsx)(`span`, {
            className: `border-token-border-light bg-token-bg-secondary-surface text-token-text-secondary flex size-11 items-center justify-center rounded-xl border`,
            children: (0, K.jsx)(i, {
                className: `icon`
            })
        }), t[2] = i, t[3] = l);
        let u;
        t[4] === a ? u = t[5] : (u = (0, K.jsx)(`h3`, {
            className: `text-token-text-primary text-sm font-medium`,
            children: a
        }), t[4] = a, t[5] = u);
        let d;
        t[6] === n ? d = t[7] : (d = (0, K.jsx)(`p`, {
            className: `text-token-text-secondary max-w-72 text-sm`,
            children: n
        }), t[6] = n, t[7] = d);
        let f;
        t[8] !== u || t[9] !== d ? (f = (0, K.jsxs)(`div`, {
            className: `flex flex-col gap-1`,
            children: [u, d]
        }), t[8] = u, t[9] = d, t[10] = f) : f = t[10];
        let p;
        return t[11] !== c || t[12] !== l || t[13] !== f ? (p = (0, K.jsxs)(`div`, {
            className: c,
            children: [l, f]
        }), t[11] = c, t[12] = l, t[13] = f, t[14] = p) : p = t[14], p
    }, Q = e => {
        "use forget";
        let t = (0, G.c)(3),
            {
                label: n
            } = e,
            r;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = [`w-3/4`, `w-2/3`, `w-4/5`].map(W), t[0] = r) : r = t[0];
        let i;
        return t[1] === n ? i = t[2] : (i = (0, K.jsx)(`div`, {
            "aria-label": n,
            role: `status`,
            children: r
        }), t[1] = n, t[2] = i), i
    }, $ = e => {
        "use forget";
        let t = (0, G.c)(8),
            {
                children: n,
                onRetry: r
            } = e,
            i;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, K.jsx)(f, {
            className: `icon-sm shrink-0`
        }), t[0] = i) : i = t[0];
        let a;
        t[1] === n ? a = t[2] : (a = (0, K.jsxs)(`span`, {
            className: `flex min-w-0 items-center gap-2`,
            children: [i, (0, K.jsx)(`span`, {
                children: n
            })]
        }), t[1] = n, t[2] = a);
        let o;
        t[3] === r ? o = t[4] : (o = r && (0, K.jsx)(`button`, {
            className: `interactive-button text-token-text-status-error shrink-0 text-xs`,
            onClick: r,
            type: `button`,
            children: (0, K.jsx)(h, {
                id: `wham.universe.error.retry.button`,
                defaultMessage: `Retry`
            })
        }), t[3] = r, t[4] = o);
        let s;
        return t[5] !== a || t[6] !== o ? (s = (0, K.jsxs)(`div`, {
            className: `border-token-border-status-error bg-token-bg-status-error text-token-text-status-error flex items-start justify-between gap-3 rounded-xl border px-3 py-2.5 text-sm`,
            role: `alert`,
            children: [a, o]
        }), t[5] = a, t[6] = o, t[7] = s) : s = t[7], s
    }
}));
export {
    Y as a, ne as c, A as d, M as f, q as i, F as l, $ as n, X as o, Q as r, J as s, Z as t, U as u
};
//# sourceMappingURL=bfac314f-34q9qy3o1uq5c0ok.js.map
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J5 as n,
    cW as r,
    dW as i,
    hJ as a,
    lW as o,
    mJ as s,
    pJ as c,
    q5 as l,
    uW as u,
    vJ as d,
    xJ as f,
    yJ as p
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as m,
    Hn as h,
    Pn as g,
    Tn as _,
    Vn as v,
    kn as y,
    zn as b
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    Ajt as x,
    GAt as S,
    KAt as C,
    Ljt as w,
    Rjt as T,
    jjt as E
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    Hc as D,
    Uc as O
} from "./30901919-jory365vq6ym5crx.js";
import {
    n as k,
    r as ee
} from "./0eda9bd1-maidyf90lb63ttnx.js";
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
        d(), N = s({
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
        let n = (0, I.c)(30),
            r, i, a, o, s, c, l, u, d, m;
        n[0] === t ? (r = n[1], i = n[2], a = n[3], o = n[4], s = n[5], c = n[6], l = n[7], u = n[8], d = n[9], m = n[10]) : ({
            "aria-hidden": r,
            "aria-label": i,
            "aria-labelledby": a,
            fill: d,
            focusable: o,
            height: s,
            ref: l,
            role: u,
            width: m,
            ...c
        } = t, n[0] = t, n[1] = r, n[2] = i, n[3] = a, n[4] = o, n[5] = s, n[6] = c, n[7] = l, n[8] = u, n[9] = d, n[10] = m);
        let h = d === void 0 ? `none` : d,
            g = (0, L.useId)(),
            _ = z.icons[e],
            v = i != null && i !== `` || a != null && a !== ``,
            y;
        if (n[11] !== g) {
            let e;
            n[13] === Symbol.for(`react.memo_cache_sentinel`) ? (e = /[^A-Za-z0-9_.:-]/g, n[13] = e) : e = n[13], y = g.replace(e, `_`), n[11] = g, n[12] = y
        } else y = n[12];
        let b = `codex-job-status-${e}-${y}`,
            x = m ?? _.canvas.width,
            S = s ?? _.canvas.height,
            C = _.canvas.viewBox,
            w = o ?? `false`,
            T = u ?? (v ? `img` : void 0),
            E = r ?? (!v || void 0),
            D;
        n[14] === b ? D = n[15] : (D = p(f(_), b), n[14] = b, n[15] = D);
        let O;
        n[16] === D ? O = n[17] : (O = {
            __html: D
        }, n[16] = D, n[17] = O);
        let k;
        return n[18] !== i || n[19] !== a || n[20] !== h || n[21] !== c || n[22] !== l || n[23] !== O || n[24] !== x || n[25] !== S || n[26] !== w || n[27] !== T || n[28] !== E ? (k = (0, R.jsx)(`svg`, {
            ...c,
            ref: l,
            xmlns: `http://www.w3.org/2000/svg`,
            width: x,
            height: S,
            viewBox: C,
            fill: h,
            focusable: w,
            role: T,
            "aria-label": i,
            "aria-labelledby": a,
            "aria-hidden": E,
            dangerouslySetInnerHTML: O
        }), n[18] = i, n[19] = a, n[20] = h, n[21] = c, n[22] = l, n[23] = O, n[24] = x, n[25] = S, n[26] = w, n[27] = T, n[28] = E, n[29] = k) : k = n[29], k
    }
}

function F(e) {
    "use forget";
    let t = (0, I.c)(12),
        {
            status: n
        } = e,
        r = m(),
        i;
    t[0] !== r || t[1] !== n ? (i = j(r, n), t[0] = r, t[1] = n, t[2] = i) : i = t[2];
    let a = i,
        o = n === `failed` || n === `errored`,
        s = n === `canceled` || n === `cancelled`,
        c = n === `completed` ? u : s ? O : o ? V : n === `awaiting_connection` || n === `pending_setup` || n === `pending_grading` || n === `pending` || n === `queued` ? B : H,
        d;
    t[3] !== c || t[4] !== s || t[5] !== o || t[6] !== a || t[7] !== n ? (d = e => (0, R.jsx)(`span`, {
        ...e,
        "aria-label": a,
        className: l(`inline-flex size-4 shrink-0 items-center justify-center`, o || s ? `text-token-text-status-error` : `text-[var(--main-surface-primary-inverse)] dark:text-[var(--sidebar-surface-secondary)]`),
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
        }) : (0, R.jsx)(c, {
            "aria-hidden": `true`,
            className: `size-5 shrink-0`
        })
    }), t[3] = c, t[4] = s, t[5] = o, t[6] = a, t[7] = n, t[8] = d) : d = t[8];
    let f;
    return t[9] !== a || t[10] !== d ? (f = (0, R.jsx)(x, {
        content: a,
        side: `top-center`,
        children: d
    }), t[9] = a, t[10] = d, t[11] = f) : f = t[11], f
}
var I, L, R, z, B, V, H, U = e((() => {
    I = _(), i(), D(), E(), M(), c(), te(), T(), C(), n(), L = t(h()), b(), R = v(), z = a({
        id: `codex-universe-job-status`,
        icons: {
            circle: N,
            "circle-xmark": w,
            clock: S
        }
    }), B = P(`clock`), V = P(`circle-xmark`), H = P(`circle`)
}));

function W(e) {
    return (0, K.jsxs)(`div`, {
        className: `border-token-border-light flex flex-col gap-2 border-b px-3 py-3.5`,
        children: [(0, K.jsx)(k, {
            className: l(`h-2.5`, e)
        }), (0, K.jsx)(k, {
            className: `h-2 w-1/2`
        })]
    }, e)
}
var G, K, q, J, Y, X, Z, Q, $, ne = e((() => {
    G = _(), r(), ee(), U(), M(), n(), b(), K = v(), q = e => {
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
            r = m(),
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
            children: (0, K.jsx)(g, {
                id: `wham.universe.value.unavailable`,
                defaultMessage: `—`
            })
        }) : (0, K.jsx)(y, {
            value: n,
            maximumFractionDigits: i
        }), t[0] = i, t[1] = n, t[2] = a) : a = t[2], a
    }, X = e => {
        "use forget";
        let t = (0, G.c)(8),
            {
                value: n
            } = e,
            r = m(),
            i = A.has(n) || n === `pending_setup` || n === `pending_grading`,
            a = n === `completed` ? `text-token-text-status-success` : n === `failed` || n === `errored` || n === `cancelled` || n === `canceled` ? `text-token-text-status-error` : i ? `text-token-text-accent` : `text-token-text-secondary`,
            o;
        t[0] === a ? o = t[1] : (o = l(`inline-flex shrink-0 items-center gap-1.5 text-xs`, a), t[0] = a, t[1] = o);
        let s;
        t[2] !== r || t[3] !== n ? (s = j(r, n), t[2] = r, t[3] = n, t[4] = s) : s = t[4];
        let c;
        return t[5] !== o || t[6] !== s ? (c = (0, K.jsx)(`span`, {
            className: o,
            children: s
        }), t[5] = o, t[6] = s, t[7] = c) : c = t[7], c
    }, Z = e => {
        "use forget";
        let t = (0, G.c)(15),
            {
                description: n,
                icon: r,
                title: i,
                compact: a
            } = e,
            o = a !== void 0 && a ? `min-h-40 px-4 py-5` : `min-h-72 px-6 py-10`,
            s;
        t[0] === o ? s = t[1] : (s = l(`flex flex-col items-center justify-center gap-3 text-center`, o), t[0] = o, t[1] = s);
        let c;
        t[2] === r ? c = t[3] : (c = (0, K.jsx)(`span`, {
            className: `border-token-border-light bg-token-bg-secondary-surface text-token-text-secondary flex size-11 items-center justify-center rounded-xl border`,
            children: (0, K.jsx)(r, {
                className: `icon`
            })
        }), t[2] = r, t[3] = c);
        let u;
        t[4] === i ? u = t[5] : (u = (0, K.jsx)(`h3`, {
            className: `text-token-text-primary text-sm font-medium`,
            children: i
        }), t[4] = i, t[5] = u);
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
        return t[11] !== s || t[12] !== c || t[13] !== f ? (p = (0, K.jsxs)(`div`, {
            className: s,
            children: [c, f]
        }), t[11] = s, t[12] = c, t[13] = f, t[14] = p) : p = t[14], p
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
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, K.jsx)(o, {
            className: `icon-sm shrink-0`
        }), t[0] = i) : i = t[0];
        let a;
        t[1] === n ? a = t[2] : (a = (0, K.jsxs)(`span`, {
            className: `flex min-w-0 items-center gap-2`,
            children: [i, (0, K.jsx)(`span`, {
                children: n
            })]
        }), t[1] = n, t[2] = a);
        let s;
        t[3] === r ? s = t[4] : (s = r && (0, K.jsx)(`button`, {
            className: `interactive-button text-token-text-status-error shrink-0 text-xs`,
            onClick: r,
            type: `button`,
            children: (0, K.jsx)(g, {
                id: `wham.universe.error.retry.button`,
                defaultMessage: `Retry`
            })
        }), t[3] = r, t[4] = s);
        let c;
        return t[5] !== a || t[6] !== s ? (c = (0, K.jsxs)(`div`, {
            className: `border-token-border-status-error bg-token-bg-status-error text-token-text-status-error flex items-start justify-between gap-3 rounded-xl border px-3 py-2.5 text-sm`,
            role: `alert`,
            children: [a, s]
        }), t[5] = a, t[6] = s, t[7] = c) : c = t[7], c
    }
}));
export {
    Y as a, ne as c, A as d, M as f, q as i, F as l, $ as n, X as o, Q as r, J as s, Z as t, U as u
};
//# sourceMappingURL=bfac314f-hgdnt6z9zitvube4.js.map
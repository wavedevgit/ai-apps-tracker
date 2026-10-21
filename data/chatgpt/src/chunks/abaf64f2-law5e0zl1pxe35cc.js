import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Aw as n,
    CR as r,
    Int as i,
    LU as a,
    Ow as o,
    Pnt as s,
    TR as c,
    Vw as l,
    c7 as u,
    dC as d,
    fC as f,
    l7 as p,
    o0 as m,
    q1 as h,
    zU as g,
    zw as _
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    Bn as v,
    N as y,
    Rn as b,
    Vn as x,
    s as S,
    wn as C,
    zn as ee
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Bst as w,
    Fbt as T,
    Pbt as E,
    QHn as D,
    eUn as O,
    oVt as k,
    p6t as A,
    sVt as j,
    y6t as te,
    zst as ne
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    Xc as M,
    Zc as N
} from "./30901919-r9pahacmzqudnt4f.js";
import {
    f_ as P,
    p_ as F
} from "./8b34dbc2-egl8cz04n8nmlktg.js";
import {
    Ht as I,
    Vt as L
} from "./c470f5ab-py8gip6x11wq9s88.js";
import {
    r as R,
    t as re
} from "./948fe603-d31hs2s3i0upht6y.js";
import {
    r as z,
    t as ie
} from "./7c213d4e-b4aphng90hc3533e.js";
import {
    a as ae,
    c as oe,
    i as B,
    l as V,
    n as se,
    o as H,
    r as ce
} from "./5b59f3e4-f9v1k69a0tdaqzc0.js";
import {
    a as le,
    o as ue,
    t as de
} from "./4e7cf3cf-cidnxqbjbd90z0pb.js";
import {
    a as U,
    d as W,
    h as fe,
    p as pe,
    r as me,
    x as G,
    y as K
} from "./6fd89734-me0mlo15lw6zwz6w.js";

function he({
    title: e,
    children: t,
    className: n = ``
}) {
    return (0, J.jsx)(`div`, {
        className: `border-token-border-light bg-token-main-surface-primary ring-token-border-light/60 overflow-hidden rounded-lg border p-4 shadow ring-1 shadow-black/20 md:p-5 dark:shadow-black/60 dark:ring-white/10 ${n}`,
        children: (0, J.jsxs)(`section`, {
            children: [e && (0, J.jsx)(`div`, {
                className: `text-title-small mb-5 font-semibold tracking-wide`,
                children: e
            }), (0, J.jsx)(`div`, {
                className: `grid grid-cols-1 gap-3`,
                children: t
            })]
        })
    })
}

function q({
    label: e,
    children: t
}) {
    return (0, J.jsxs)(`div`, {
        className: `grid grid-cols-2 items-start gap-1 text-sm md:grid-cols-[auto,1fr] md:gap-2`,
        children: [(0, J.jsx)(`div`, {
            className: `text-token-text-tertiary md:w-44`,
            children: e
        }), (0, J.jsx)(`div`, {
            className: `w-full min-w-0 overflow-hidden break-words hyphens-auto`,
            children: t
        })]
    })
}
var J, ge = e((() => {
    x(), J = v()
}));

function _e(e) {
    "use forget";
    let t = (0, ve.c)(7),
        {
            variant: n,
            children: r,
            className: i,
            size: a
        } = e,
        o = (a === void 0 ? `md` : a) === `sm` ? `px-1.5 py-0 text-[11px]` : `px-2 py-0.5 text-xs`,
        s = be[n],
        c;
    t[0] !== i || t[1] !== o || t[2] !== s ? (c = u(`inline-flex items-center rounded-full`, o, s, i), t[0] = i, t[1] = o, t[2] = s, t[3] = c) : c = t[3];
    let l;
    return t[4] !== r || t[5] !== c ? (l = (0, ye.jsx)(`span`, {
        className: c,
        children: r
    }), t[4] = r, t[5] = c, t[6] = l) : l = t[6], l
}
var ve, ye, be, xe = e((() => {
    ve = C(), p(), ye = v(), be = {
        success: `bg-green-700/15 text-green-700 dark:bg-green-900/40 dark:text-green-300`,
        warning: `bg-yellow-700/15 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300`,
        critical: `bg-red-700/15 text-red-700 dark:bg-red-900/60 dark:text-red-300`,
        danger: `bg-red-500/15 text-red-500 dark:bg-red-500/15 dark:text-red-300`,
        muted: `bg-token-bg-elevated-secondary text-token-text-tertiary dark:bg-token-bg-elevated-secondary/70 dark:text-token-text-tertiary`,
        neutral: `bg-token-main-surface-secondary/70 text-token-text-secondary border border-token-border-strong dark:bg-token-main-surface-secondary/80`,
        purple: `bg-purple-400/15 text-purple-400`
    }
}));

function Se({
    name: e,
    email: t
}) {
    let n = (e ?? ``).trim();
    if (n.length > 0) {
        let e = n.split(/\s+/).filter(Boolean);
        return e.length >= 2 ? (e[0][0] + e[e.length - 1][0]).toUpperCase() : e[0].slice(0, 2).toUpperCase()
    }
    let r = (t ?? ``).split(`@`)[0] ?? ``;
    if (!r) return `?`;
    let i = r.split(/[._-]+/).filter(Boolean);
    return i.length >= 2 ? (i[0][0] + i[1][0]).toUpperCase() : r.slice(0, 2).toUpperCase()
}

function Ce(e) {
    "use forget";
    let t = (0, Ee.c)(71),
        {
            finding: n
        } = e,
        r = y(),
        i = g(),
        a = ee(),
        o = m(),
        s;
    t[0] === o ? s = t[1] : (s = o?.getWorkspaceId(), t[0] = o, t[1] = s);
    let l = s,
        u = o?.normalizedAccountUserId,
        [d, f] = (0, De.useState)(``),
        [p, h] = (0, De.useState)(!1),
        _ = c(),
        {
            data: v,
            isLoading: b
        } = te(l ?? void 0, 0, d, 100);
    _?.email, _?.name;
    let x = u ?? ``,
        S = _?.email ?? ``,
        C = _?.name ?? void 0,
        w;
    t[2] !== x || t[3] !== S || t[4] !== C ? (w = {
        id: x,
        email: S,
        name: C
    }, t[2] = x, t[3] = S, t[4] = C, t[5] = w) : w = t[5];
    let T = w,
        E;
    t[6] !== T || t[7] !== v?.items ? (E = () => {
        let e = (v?.items ?? []).map(Te).filter(we);
        return T.id && T.email && (e.some(e => e.id === T.id || e.email.toLowerCase() === T.email.toLowerCase()) || e.unshift(T)), e
    }, t[6] = T, t[7] = v?.items, t[8] = E) : E = t[8], v?.items;
    let O;
    t[9] === E ? O = t[10] : (O = E(), t[9] = E, t[10] = O);
    let k = O,
        A = n.assignee_id ?? `none`,
        j = A === `none` ? `` : n.assignee?.email ?? ``,
        N = A === `none` ? void 0 : n.assignee?.name ?? ``,
        P;
    t[11] !== j || t[12] !== N || t[13] !== A ? (P = A === `none` ? `—` : Se({
        name: N,
        email: j
    }), t[11] = j, t[12] = N, t[13] = A, t[14] = P) : P = t[14];
    let F = P,
        I;
    t[15] !== n.hid || t[16] !== n.id || t[17] !== n.version || t[18] !== a || t[19] !== r || t[20] !== i ? (I = async e => {
        h(!0);
        try {
            let t = await re.safePatch(`/aardvark/scan-findings/{id}`, {
                parameters: {
                    path: {
                        id: n.id
                    }
                },
                requestBody: {
                    version: n.version,
                    assignee_user_email: e
                }
            });
            ue(r, n.hid, t), le(r, n.hid, t), h(!1), i.successNeutral(a.formatMessage({
                id: `aardvark.toast.assigneeUpdated`,
                defaultMessage: `Assignee updated`
            }), {
                duration: 5,
                hasCloseButton: !0
            })
        } catch (e) {
            let t = e;
            h(!1);
            let n = t instanceof Error ? t : Error(String(t)),
                r = a.formatMessage(ae.assigneeUpdate, {
                    details: n.message
                });
            i.danger(r, {
                duration: 5,
                hasCloseButton: !0
            })
        }
    }, t[15] = n.hid, t[16] = n.id, t[17] = n.version, t[18] = a, t[19] = r, t[20] = i, t[21] = I) : I = t[21];
    let L = I;
    if (p) {
        let e;
        t[22] !== F || t[23] !== A ? (e = A === `none` ? (0, Y.jsx)(M, {
            className: `icon-sm`,
            "aria-hidden": !0
        }) : F, t[22] = F, t[23] = A, t[24] = e) : e = t[24];
        let n;
        return t[25] !== j || t[26] !== e ? (n = (0, Y.jsx)(`button`, {
            disabled: !0,
            title: j,
            className: `border-token-border-light bg-token-bg-primary inline-flex h-8 w-8 cursor-not-allowed items-center justify-center rounded-full border text-[11px] font-semibold opacity-60`,
            "aria-disabled": !0,
            children: e
        }), t[25] = j, t[26] = e, t[27] = n) : n = t[27], n
    }
    let R;
    t[28] !== F || t[29] !== A ? (R = A === `none` ? (0, Y.jsx)(M, {
        className: `icon-sm`,
        "aria-hidden": !0
    }) : F, t[28] = F, t[29] = A, t[30] = R) : R = t[30];
    let z;
    t[31] !== j || t[32] !== b || t[33] !== R ? (z = (0, Y.jsx)(`button`, {
        title: j,
        className: `border-token-border-light bg-token-bg-primary inline-flex h-8 w-8 items-center justify-center rounded-full border text-[11px] font-semibold`,
        "aria-busy": b,
        children: R
    }), t[31] = j, t[32] = b, t[33] = R, t[34] = z) : z = t[34];
    let ie;
    t[35] === Symbol.for(`react.memo_cache_sentinel`) ? (ie = e => f(e.target.value), t[35] = ie) : ie = t[35];
    let oe;
    t[36] === a ? oe = t[37] : (oe = a.formatMessage(se.search), t[36] = a, t[37] = oe);
    let B;
    t[38] === a ? B = t[39] : (B = a.formatMessage(se.search), t[38] = a, t[39] = B);
    let V;
    t[40] !== d || t[41] !== oe || t[42] !== B ? (V = (0, Y.jsx)(ne, {
        color: `search`,
        name: `assignee-search`,
        type: `text`,
        value: d,
        onChange: ie,
        placeholder: oe,
        ariaLabel: B,
        className: `text-token-text-tertiary flex h-8 w-full items-center rounded-sm`,
        inputClassName: `text-token-text-primary w-full`,
        containerInputClassName: `w-full`
    }), t[40] = d, t[41] = oe, t[42] = B, t[43] = V) : V = t[43];
    let H;
    t[44] === L ? H = t[45] : (H = () => L(null), t[44] = L, t[45] = H);
    let de = `hover:bg-token-bg-tertiary flex w-full items-center gap-2 rounded-sm px-2 py-1 text-start text-sm ${A===`none`?`bg-token-bg-tertiary`:``}`,
        U;
    t[46] === Symbol.for(`react.memo_cache_sentinel`) ? (U = (0, Y.jsx)(`div`, {
        className: `border-token-border-light bg-token-bg-primary inline-flex h-7 w-7 items-center justify-center rounded-full border text-[11px] font-semibold`,
        children: (0, Y.jsx)(M, {
            className: `icon-sm`,
            "aria-hidden": !0
        })
    }), t[46] = U) : U = t[46];
    let W;
    t[47] === a ? W = t[48] : (W = a.formatMessage(ce.none), t[47] = a, t[48] = W);
    let fe;
    t[49] === W ? fe = t[50] : (fe = (0, Y.jsx)(`div`, {
        className: `flex flex-col`,
        children: (0, Y.jsx)(`span`, {
            className: `leading-4`,
            children: W
        })
    }), t[49] = W, t[50] = fe);
    let pe;
    t[51] !== H || t[52] !== de || t[53] !== fe ? (pe = (0, Y.jsxs)(`button`, {
        type: `button`,
        onClick: H,
        className: de,
        children: [U, fe]
    }, `none`), t[51] = H, t[52] = de, t[53] = fe, t[54] = pe) : pe = t[54];
    let me;
    if (t[55] !== k || t[56] !== L || t[57] !== A) {
        let e;
        t[59] !== L || t[60] !== A ? (e = e => {
            let t = Se({
                name: e.name,
                email: e.email
            });
            return (0, Y.jsxs)(`button`, {
                type: `button`,
                onClick: () => L(e.email),
                className: `hover:bg-token-bg-tertiary flex w-full items-center gap-2 rounded-sm px-2 py-1 text-start text-sm ${e.id===A?`bg-token-bg-tertiary`:``}`,
                children: [(0, Y.jsx)(`div`, {
                    className: `border-token-border-light bg-token-bg-primary inline-flex h-7 w-7 items-center justify-center rounded-full border text-[11px] font-semibold`,
                    children: t
                }), (0, Y.jsxs)(`div`, {
                    className: `flex flex-col`,
                    children: [(0, Y.jsx)(`span`, {
                        className: `leading-4`,
                        children: e.name ?? e.email
                    }), (0, Y.jsx)(`span`, {
                        className: `text-token-text-tertiary text-xs leading-4`,
                        children: e.email
                    })]
                })]
            }, e.id)
        }, t[59] = L, t[60] = A, t[61] = e) : e = t[61], me = k.map(e), t[55] = k, t[56] = L, t[57] = A, t[58] = me
    } else me = t[58];
    let G;
    t[62] !== pe || t[63] !== me ? (G = (0, Y.jsxs)(`div`, {
        className: `mt-2 max-h-60 overflow-y-auto`,
        children: [pe, me]
    }), t[62] = pe, t[63] = me, t[64] = G) : G = t[64];
    let K;
    t[65] !== V || t[66] !== G ? (K = (0, Y.jsxs)(`div`, {
        className: `p-2.5`,
        children: [V, G]
    }), t[65] = V, t[66] = G, t[67] = K) : K = t[67];
    let he;
    return t[68] !== z || t[69] !== K ? (he = (0, Y.jsx)(D, {
        triggerButton: z,
        children: K
    }), t[68] = z, t[69] = K, t[70] = he) : he = t[70], he
}

function we(e) {
    return e.email.length > 0
}

function Te(e) {
    return {
        id: e.account_user_id,
        email: e.email ?? ``,
        name: e.name ?? void 0
    }
}
var Ee, De, Y, Oe = e((() => {
    Ee = C(), V(), de(), R(), A(), O(), N(), w(), h(), r(), a(), S(), De = t(x()), b(), Y = v()
}));

function ke(e) {
    "use forget";
    let t = (0, je.c)(6),
        {
            level: n
        } = e,
        r = ee(),
        i = Ne[n],
        a;
    t[0] !== r || t[1] !== n ? (a = r.formatMessage(B[n]), t[0] = r, t[1] = n, t[2] = a) : a = t[2];
    let o = a,
        s;
    return t[3] !== o || t[4] !== i ? (s = (0, Me.jsx)(_e, {
        variant: i,
        children: o
    }), t[3] = o, t[4] = i, t[5] = s) : s = t[5], s
}

function Ae(e) {
    "use forget";
    let t = (0, je.c)(2);
    if (!e) return;
    let n = String(e),
        r;
    t[0] === n ? r = t[1] : (r = n.toLowerCase(), t[0] = n, t[1] = r);
    let i = r;
    if (i === `critical` || i === `high` || i === `medium` || i === `low` || i === `informational`) return i;
    if (i === `ignore`) return `low`
}
var je, Me, Ne, Pe = e((() => {
    je = C(), xe(), V(), b(), Me = v(), Ne = {
        critical: `critical`,
        high: `danger`,
        medium: `purple`,
        low: `warning`,
        informational: `neutral`
    }
}));

function Fe(e) {
    "use forget";
    let t = (0, Ie.c)(46),
        {
            finding: n,
            onCriticalityChangeSuccess: r,
            sourcePage: i
        } = e,
        a = ee(),
        c = n.criticality ?? `low`,
        l = y(),
        u = g(),
        [d, f] = (0, Le.useState)(!1),
        [p, m] = (0, Le.useState)(!1),
        [h, v] = (0, Le.useState)(null),
        [b, x] = (0, Le.useState)(``),
        S = (0, Le.useId)(),
        C = (0, Le.useId)(),
        w = n.hid ?? n.id ?? void 0,
        T;
    t[0] !== n.criticality || t[1] !== n.hid || t[2] !== n.id || t[3] !== n.version || t[4] !== w || t[5] !== a || t[6] !== r || t[7] !== l || t[8] !== i || t[9] !== u ? (T = async (e, t) => {
        f(!0);
        let o = e => {
                let t = e instanceof Error ? e : Error(String(e)),
                    n = a.formatMessage(ae.criticalityUpdate, {
                        details: t.message
                    });
                return u.danger(n, {
                    duration: 5,
                    hasCloseButton: !0
                }), f(!1), !1
            },
            c = (t ?? ``).trim(),
            d = {
                version: n.version,
                criticality: e,
                criticality_reason: c
            },
            p = n.criticality,
            m = e;
        try {
            let e = await re.safePatch(`/aardvark/scan-findings/{id}`, {
                parameters: {
                    path: {
                        id: n.id
                    }
                },
                requestBody: d
            });
            return ue(l, n.hid, e), le(l, n.hid, e), u.successNeutral(a.formatMessage({
                id: `aardvark.toast.criticalityUpdated`,
                defaultMessage: `Criticality updated`
            }), {
                duration: 5,
                hasCloseButton: !0
            }), s.logStructuredEvent(`AardvarkFindingCriticalityChanged`, {
                findingId: w,
                previousCriticality: p,
                nextCriticality: m,
                sourcePage: i
            }), r && r(), f(!1), !0
        } catch (e) {
            return o(e)
        }
    }, t[0] = n.criticality, t[1] = n.hid, t[2] = n.id, t[3] = n.version, t[4] = w, t[5] = a, t[6] = r, t[7] = l, t[8] = i, t[9] = u, t[10] = T) : T = t[10];
    let E = T,
        D;
    t[11] === c ? D = t[12] : (D = e => {
        e !== c && (v(e), x(``), m(!0))
    }, t[11] = c, t[12] = D);
    let O = D,
        k = `flex min-w-0 items-center gap-2 ${d?`opacity-60`:``}`,
        A;
    t[13] === c ? A = t[14] : (A = (0, X.jsx)(ke, {
        level: c
    }), t[13] = c, t[14] = A);
    let te;
    t[15] !== k || t[16] !== A ? (te = (0, X.jsx)(`div`, {
        className: k,
        children: A
    }), t[15] = k, t[16] = A, t[17] = te) : te = t[17];
    let ne;
    t[18] === Symbol.for(`react.memo_cache_sentinel`) ? (ne = (0, X.jsx)(P.Icon, {}), t[18] = ne) : ne = t[18];
    let M;
    t[19] === te ? M = t[20] : (M = (0, X.jsxs)(`div`, {
        className: `flex w-full items-center justify-between gap-2`,
        children: [te, ne]
    }), t[19] = te, t[20] = M);
    let N;
    t[21] !== d || t[22] !== M ? (N = (0, X.jsx)(P.Trigger, {
        className: `border-token-border-light bg-token-bg-primary mr h-7 rounded-md border px-2 text-xs`,
        "aria-busy": d,
        children: M
    }), t[21] = d, t[22] = M, t[23] = N) : N = t[23];
    let F;
    t[24] === a ? F = t[25] : (F = j(Re, e => (0, X.jsxs)(P.Item, {
        value: e,
        children: [(0, X.jsx)(ke, {
            level: e
        }), (0, X.jsx)(`span`, {
            className: `sr-only`,
            children: a.formatMessage(B[e])
        })]
    }, e)), t[24] = a, t[25] = F);
    let I;
    t[26] === F ? I = t[27] : (I = (0, X.jsx)(P.Portal, {
        children: (0, X.jsx)(P.Content, {
            align: `start`,
            className: `rounded-lg text-sm`,
            children: F
        })
    }), t[26] = F, t[27] = I);
    let L;
    t[28] !== c || t[29] !== d || t[30] !== O || t[31] !== I || t[32] !== N ? (L = (0, X.jsxs)(P.Root, {
        value: c,
        onValueChange: O,
        disabled: d,
        children: [N, I]
    }), t[28] = c, t[29] = d, t[30] = O, t[31] = I, t[32] = N, t[33] = L) : L = t[33];
    let R;
    t[34] !== a || t[35] !== p || t[36] !== d || t[37] !== h || t[38] !== b || t[39] !== S || t[40] !== C || t[41] !== E ? (R = p && (0, X.jsx)(o, {
        testId: `modal-criticality-reason`,
        isOpen: !0,
        shouldIgnoreClickOutside: !0,
        onClose: () => {
            m(!1), v(null), x(``)
        },
        title: a.formatMessage({
            id: `aardvark.findings.criticality.title`,
            defaultMessage: `Update criticality`
        }),
        showCloseButton: !0,
        primaryButton: (0, X.jsx)(_.Button, {
            title: a.formatMessage({
                id: `aardvark.findings.criticality.save`,
                defaultMessage: `Save`
            }),
            color: `primary`,
            loading: d,
            onClick: async () => {
                h && await E(h, b) && (m(!1), v(null), x(``))
            }
        }),
        secondaryButton: (0, X.jsx)(_.Button, {
            title: a.formatMessage({
                id: `aardvark.findings.criticality.cancel`,
                defaultMessage: `Cancel`
            }),
            color: `secondary`,
            onClick: () => {
                m(!1), v(null), x(``)
            }
        }),
        children: (0, X.jsxs)(`div`, {
            className: `space-y-3`,
            children: [(0, X.jsx)(`div`, {
                id: C,
                className: `text-token-text-secondary mt-1 text-sm`,
                children: a.formatMessage({
                    id: `aardvark.findings.criticality.prompt`,
                    defaultMessage: `Optionally share why you're changing the criticality.`
                })
            }), (0, X.jsx)(`label`, {
                htmlFor: S,
                className: `sr-only`,
                children: a.formatMessage({
                    id: `aardvark.findings.criticality.reasonLabel`,
                    defaultMessage: `Reason (optional)`
                })
            }), (0, X.jsx)(`textarea`, {
                id: S,
                "aria-describedby": C,
                value: b,
                onChange: e => x(e.target.value),
                className: `border-token-border-default bg-token-bg-primary text-token-text-primary placeholder:text-token-text-tertiary w-full rounded-lg border p-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none`,
                placeholder: a.formatMessage({
                    id: `aardvark.findings.criticality.placeholder`,
                    defaultMessage: `Add context (optional)`
                }),
                rows: 4
            })]
        })
    }), t[34] = a, t[35] = p, t[36] = d, t[37] = h, t[38] = b, t[39] = S, t[40] = C, t[41] = E, t[42] = R) : R = t[42];
    let z;
    return t[43] !== L || t[44] !== R ? (z = (0, X.jsxs)(X.Fragment, {
        children: [L, R]
    }), t[43] = L, t[44] = R, t[45] = z) : z = t[45], z
}
var Ie, Le, X, Re, ze = e((() => {
    Ie = C(), Pe(), V(), de(), R(), l(), n(), F(), a(), i(), S(), k(), Le = t(x()), b(), X = v(), Re = [`critical`, `high`, `medium`, `low`]
}));

function Be(e) {
    "use forget";
    let t = (0, Ve.c)(28),
        {
            id: n,
            value: r,
            disabled: i,
            onValueChange: a,
            variant: o
        } = e,
        s = o === void 0 ? `default` : o,
        c = ee(),
        l = s === `sidebar` ? `text-token-text-primary hover:bg-token-bg-secondary keyboard-focused:bg-token-bg-secondary h-auto rounded-md border-0 bg-transparent px-2 py-1 text-sm font-medium shadow-none` : `border-token-border-light bg-token-bg-primary mr h-7 rounded-md border px-2 text-xs`,
        d;
    t[0] === l ? d = t[1] : (d = u(l), t[0] = l, t[1] = d);
    let f = s === `sidebar` ? `gap-1` : `w-full`,
        p;
    t[2] === f ? p = t[3] : (p = u(`flex items-center justify-between`, f), t[2] = f, t[3] = p);
    let m = s === `sidebar` && `text-end`,
        h;
    t[4] === m ? h = t[5] : (h = u(`truncate`, m), t[4] = m, t[5] = h);
    let g;
    t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (g = (0, Z.jsx)(P.Value, {}), t[6] = g) : g = t[6];
    let _;
    t[7] === h ? _ = t[8] : (_ = (0, Z.jsx)(`div`, {
        className: h,
        children: g
    }), t[7] = h, t[8] = _);
    let v;
    t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (v = (0, Z.jsx)(P.Icon, {}), t[9] = v) : v = t[9];
    let y;
    t[10] !== p || t[11] !== _ ? (y = (0, Z.jsxs)(`div`, {
        className: p,
        children: [_, v]
    }), t[10] = p, t[11] = _, t[12] = y) : y = t[12];
    let b;
    t[13] !== n || t[14] !== y || t[15] !== d ? (b = (0, Z.jsx)(P.Trigger, {
        id: n,
        className: d,
        children: y
    }), t[13] = n, t[14] = y, t[15] = d, t[16] = b) : b = t[16];
    let x = s === `sidebar` ? `end` : `start`,
        S;
    t[17] === c ? S = t[18] : (S = j(oe, (e, t) => (0, Z.jsx)(P.Item, {
        value: t,
        children: c.formatMessage(e, {
            status: t
        })
    }, t)), t[17] = c, t[18] = S);
    let C;
    t[19] !== x || t[20] !== S ? (C = (0, Z.jsx)(P.Portal, {
        children: (0, Z.jsx)(P.Content, {
            align: x,
            className: `rounded-lg text-sm`,
            children: S
        })
    }), t[19] = x, t[20] = S, t[21] = C) : C = t[21];
    let w;
    return t[22] !== i || t[23] !== a || t[24] !== b || t[25] !== C || t[26] !== r ? (w = (0, Z.jsxs)(P.Root, {
        value: r,
        onValueChange: a,
        disabled: i,
        children: [b, C]
    }), t[22] = i, t[23] = a, t[24] = b, t[25] = C, t[26] = r, t[27] = w) : w = t[27], w
}
var Ve, Z, He = e((() => {
    Ve = C(), V(), F(), p(), k(), b(), Z = v()
}));
async function Ue({
    id: e,
    hid: t,
    payload: n,
    onSuccess: r,
    onError: i,
    setIsSaving: a,
    intl: o,
    queryClient: s,
    toaster: c
}) {
    a(!0);
    try {
        let i = await re.safePatch(`/aardvark/scan-findings/{id}`, {
            parameters: {
                path: {
                    id: e
                }
            },
            requestBody: n
        });
        ue(s, t, i), le(s, t, i), a(!1), c.successNeutral(o.formatMessage({
            id: `aardvark.toast.statusUpdated`,
            defaultMessage: `Status updated`
        }), {
            duration: 5,
            hasCloseButton: !0
        }), r && r(i)
    } catch (e) {
        a(!1);
        let t = e instanceof Error ? e : Error(String(e)),
            n = o.formatMessage(ae.statusUpdate, {
                details: t.message
            });
        c.danger(n), i && i(t)
    }
}

function We(e) {
    "use forget";
    let t = (0, Ge.c)(34),
        {
            finding: n,
            onStatusChangeSuccess: r,
            sourcePage: i,
            variant: a
        } = e,
        c = a === void 0 ? `default` : a,
        l = ee(),
        u = n.status,
        d = y(),
        f = g(),
        [p, m] = (0, Ke.useState)(!1),
        [h, v] = (0, Ke.useState)(!1),
        [b, x] = (0, Ke.useState)(null),
        [S, C] = (0, Ke.useState)(``),
        w = n.hid ?? n.id ?? void 0,
        T;
    t[0] !== u || t[1] !== w || t[2] !== i ? (T = e => {
        s.logStructuredEvent(`AardvarkFindingStatusChanged`, {
            findingId: w,
            previousStatus: u ?? void 0,
            nextStatus: e ?? void 0,
            sourcePage: i
        })
    }, t[0] = u, t[1] = w, t[2] = i, t[3] = T) : T = t[3];
    let E = T,
        D;
    t[4] !== n.hid || t[5] !== n.id || t[6] !== n.version || t[7] !== l || t[8] !== E || t[9] !== r || t[10] !== d || t[11] !== f ? (D = async e => {
        if (e === `wontfix` || e === `fixed` || e === `duplicate`) {
            x(e), v(!0);
            return
        }
        await Ue({
            id: n.id,
            hid: n.hid,
            payload: {
                version: n.version,
                status: e
            },
            setIsSaving: m,
            intl: l,
            queryClient: d,
            toaster: f,
            onSuccess: () => {
                r?.(), E(e)
            }
        })
    }, t[4] = n.hid, t[5] = n.id, t[6] = n.version, t[7] = l, t[8] = E, t[9] = r, t[10] = d, t[11] = f, t[12] = D) : D = t[12];
    let O = D,
        k;
    t[13] !== u || t[14] !== p || t[15] !== O || t[16] !== c ? (k = (0, Q.jsx)(Be, {
        value: u,
        onValueChange: O,
        disabled: p,
        variant: c
    }), t[13] = u, t[14] = p, t[15] = O, t[16] = c, t[17] = k) : k = t[17];
    let A;
    t[18] !== n.hid || t[19] !== n.id || t[20] !== n.version || t[21] !== l || t[22] !== h || t[23] !== p || t[24] !== E || t[25] !== r || t[26] !== b || t[27] !== d || t[28] !== S || t[29] !== f ? (A = h && (0, Q.jsx)(o, {
        testId: `modal-wontfix-reason`,
        isOpen: !0,
        shouldIgnoreClickOutside: !0,
        onClose: () => {
            v(!1), C(``), x(null)
        },
        title: b === `fixed` ? l.formatMessage({
            id: `aardvark.findings.fixed.title`,
            defaultMessage: `Add PR link`
        }) : b === `duplicate` ? l.formatMessage({
            id: `aardvark.findings.duplicate.title`,
            defaultMessage: `Mark as duplicate`
        }) : l.formatMessage({
            id: `aardvark.findings.wontfix.title`,
            defaultMessage: `Add reason`
        }),
        showCloseButton: !0,
        primaryButton: (0, Q.jsx)(_.Button, {
            title: b === `fixed` ? l.formatMessage({
                id: `aardvark.findings.fixed.save`,
                defaultMessage: `Save`
            }) : l.formatMessage({
                id: `aardvark.findings.wontfix.save`,
                defaultMessage: `Save`
            }),
            color: `primary`,
            loading: p,
            onClick: async () => {
                if (b) {
                    if (!S.trim()) {
                        f.danger(b === `fixed` ? l.formatMessage({
                            id: `aardvark.findings.fixed.required`,
                            defaultMessage: `Please paste a PR link`
                        }) : b === `duplicate` ? l.formatMessage({
                            id: `aardvark.findings.duplicate.required`,
                            defaultMessage: `Please paste a link to the original scan finding`
                        }) : l.formatMessage({
                            id: `aardvark.findings.wontfix.required`,
                            defaultMessage: `Please enter a reason`
                        }));
                        return
                    }
                    await Ue({
                        id: n.id,
                        hid: n.hid,
                        payload: {
                            version: n.version,
                            status: b,
                            resolution_reason: S.trim()
                        },
                        setIsSaving: m,
                        intl: l,
                        queryClient: d,
                        toaster: f,
                        onSuccess: () => {
                            v(!1), C(``), x(null), r?.(), E(b)
                        }
                    })
                }
            }
        }),
        secondaryButton: (0, Q.jsx)(_.Button, {
            title: b === `fixed` ? l.formatMessage({
                id: `aardvark.findings.fixed.cancel`,
                defaultMessage: `Cancel`
            }) : l.formatMessage({
                id: `aardvark.findings.wontfix.cancel`,
                defaultMessage: `Cancel`
            }),
            color: `secondary`,
            onClick: () => {
                v(!1), C(``), x(null)
            }
        }),
        children: (0, Q.jsxs)(`div`, {
            className: `space-y-3`,
            children: [(0, Q.jsx)(`div`, {
                children: (0, Q.jsx)(`div`, {
                    className: `text-token-text-secondary mt-1 text-sm`,
                    children: b === `fixed` ? l.formatMessage({
                        id: `aardvark.findings.fixed.prompt`,
                        defaultMessage: `Which PR merged the fix? Paste the URL.`
                    }) : b === `duplicate` ? l.formatMessage({
                        id: `aardvark.findings.duplicate.prompt`,
                        defaultMessage: `Which scan finding does this duplicate? Paste a link to the original finding.`
                    }) : l.formatMessage({
                        id: `aardvark.findings.wontfix.prompt`,
                        defaultMessage: `Why won't this be fixed?`
                    })
                })
            }), (0, Q.jsx)(`div`, {
                children: (0, Q.jsx)(`textarea`, {
                    value: S,
                    onChange: e => C(e.target.value),
                    className: `border-token-border-default bg-token-bg-primary text-token-text-primary placeholder:text-token-text-tertiary w-full rounded-lg border p-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none`,
                    placeholder: b === `fixed` ? l.formatMessage({
                        id: `aardvark.findings.fixed.placeholder`,
                        defaultMessage: `Paste PR URL (required)`
                    }) : b === `duplicate` ? l.formatMessage({
                        id: `aardvark.findings.duplicate.placeholder`,
                        defaultMessage: `Paste link (required)`
                    }) : l.formatMessage({
                        id: `aardvark.findings.wontfix.placeholder`,
                        defaultMessage: `Add a short reason (required)`
                    }),
                    rows: 5
                })
            })]
        })
    }), t[18] = n.hid, t[19] = n.id, t[20] = n.version, t[21] = l, t[22] = h, t[23] = p, t[24] = E, t[25] = r, t[26] = b, t[27] = d, t[28] = S, t[29] = f, t[30] = A) : A = t[30];
    let j;
    return t[31] !== k || t[32] !== A ? (j = (0, Q.jsxs)(Q.Fragment, {
        children: [k, A]
    }), t[31] = k, t[32] = A, t[33] = j) : j = t[33], j
}
var Ge, Ke, Q, qe = e((() => {
    Ge = C(), V(), de(), R(), l(), n(), He(), a(), i(), S(), Ke = t(x()), b(), Q = v()
}));

function Je(e) {
    if (e == null) return ``;
    let t = String(e).trim();
    return t.startsWith(`'`) && t.endsWith(`'`) || t.startsWith(`"`) && t.endsWith(`"`) ? t.slice(1, -1).trim() : t
}

function Ye(e) {
    return typeof e != `object` || !e || !(`role` in e) || !(`output_items` in e) ? !1 : e.role === `assistant` && Array.isArray(e.output_items)
}

function Xe(e, t) {
    let n = [];
    return t.isSecurityRelated && n.push(e.formatMessage(H.security)), t.isPrivacyRelated && n.push(e.formatMessage(H.privacy)), t.isValidated && n.push(e.formatMessage(H.validated)), t.hasPatch && n.push(e.formatMessage(H.patch)), t.hasAttackPath && n.push(e.formatMessage(H.attackpath)), n.length === 0 ? e.formatMessage({
        id: `aardvark.findings.clipboard.noSignals`,
        defaultMessage: `None`
    }) : n.join(`, `)
}

function Ze(e) {
    return typeof e?.path == `string` && e.path.trim() || typeof e?.file_path == `string` && e.file_path.trim() || `(unknown path)`
}

function Qe(e) {
    let t = e.commit_analysis?.relevant_lines ?? [],
        n = Array.isArray(t) && t.length > 0,
        r = e.commit_analysis?.proposed_patch;
    n || (t = fe(r)?.relevant_lines ?? []);
    let i = [];
    if (Array.isArray(t) && t.length > 0) {
        let e = (() => {
            let e = new Map;
            for (let n of t) {
                let t = `${Ze(n)}|${n.start_line_number??0}-${n.end_line_number??n.start_line_number??0}`,
                    r = e.get(t) ?? [];
                r.push(n), e.set(t, r)
            }
            return Array.from(e.entries()).sort((e, t) => e[0].localeCompare(t[0]))
        })();
        for (let [t, n] of e) {
            let [e, r] = t.split(`|`), a = (r ?? ``).replace(`-`, ` to `);
            i.push(`${e} (L${a})`);
            for (let e of n) e.comment && i.push(`  Note: ${e.comment}`), e.content && (i.push("```"), i.push(String(e.content).trimEnd()), i.push("```"));
            i.push(``)
        }
    } else typeof r == `string` && r.trim().length > 0 && i.push(r);
    let a = i.filter((e, t, n) => !(e === `` && n[t - 1] === ``));
    for (; a.at(-1) === ``;) a.pop();
    return a
}

function $e(e) {
    return !Array.isArray(e) || e.length === 0 ? [] : e.flatMap(e => {
        let t = typeof e?.file == `string` && e.file.trim() ? e.file.trim() : `(unknown path)`,
            n = typeof e?.line_start == `number` && Number.isFinite(e.line_start) ? e.line_start : null,
            r = typeof e?.line_end == `number` && Number.isFinite(e.line_end) ? e.line_end : n,
            i = n == null ? `` : r != null && r > n ? `${n}-${r}` : `${n}`;
        return [`- \`${i?`${t}:${i}`:t}\`${typeof e?.why==`string`&&e.why.trim().length>0?` - ${e.why.trim()}`:``}`]
    })
}

function et(e) {
    let t = e.proposed_patch?.latest_task;
    if (!t) return null;
    let n = Ye(t.codex_task_turn?.turn) ? t.codex_task_turn?.turn : null;
    if (!n) return null;
    let r = z({
        assistantTurn: n
    }).map(e => e.hunksText ?? ``).filter(e => e.trim().length > 0).join(`

`).trim();
    return r.length > 0 ? r : null
}

function tt(e, t) {
    let n = [],
        r = typeof window < `u` && window.location ? window.location.href : null,
        i = W(e),
        a = e.commit_analysis?.commit_hash ?? ``,
        o = [];
    e.commit_analysis?.bugs_found_or_fixed && o.push(e.commit_analysis?.bugs_found_or_fixed), e.commit_analysis?.description && o.push(e.commit_analysis?.description), n.push(e.commit_analysis?.title || `Finding`), r && n.push(`Link: ${r}`), n.push(`Criticality: ${e.criticality??`unknown`}${e.commit_analysis?.attack_path_analysis?.adjusted_criticality_final?` (attack path: ${e.commit_analysis.attack_path_analysis.adjusted_criticality_final})`:``}`), n.push(`Status: ${e.status??`unknown`}`), e.criticality_reason && n.push(`Criticality notes: ${e.criticality_reason}`);
    let s = e.commit_analysis?.cvss_score,
        c = e.commit_analysis?.criticality_cvss_score_reason;
    n.push(``), n.push(`# Metadata`), n.push(`Repo: ${K(e.repo_url??``)||`N/A`}`), n.push(`Commit: ${G(a)||`N/A`}`), n.push(`Author: ${Je(e.commit_analysis?.author_email)||`N/A`}`), n.push(`Created: ${U(e.created_at)||`N/A`}`);
    let l = Je(e.assignee_email) || Je(e?.assignee?.email),
        u = Je(e?.assignee?.name),
        d = u && l ? `${u} <${l}>` : u || l;
    n.push(`Assignee: ${d||`Unassigned`}`), n.push(`Signals: ${Xe(t,i)}`), e.resolution_reason && n.push(`Resolution: ${e.resolution_reason}`), o.length > 0 && (n.push(``), n.push(`# Summary`), n.push(...o)), (s != null || c) && (n.push(``), n.push(`# CVSS`), s != null && n.push(`Score: ${s}`), c && n.push(c));
    let f = e.commit_analysis?.validation_report || e?.commit_analysis?.validation_str,
        p = e.commit_analysis?.validation_rubric;
    (p || f) && (n.push(``), n.push(`# Validation`), p && (n.push(`## Rubric`), n.push(p)), f && (n.push(`## Report`), n.push(String(f))));
    let m = Qe(e);
    m.length > 0 && (n.push(``), n.push(`# Evidence`), n.push(...m));
    let h = et(e);
    h ? (n.push(``), n.push(`Proposed patch:`), n.push(h)) : e.proposed_patch && (n.push(``), n.push(`Proposed patch: (no diff available)`));
    let g = e.commit_analysis?.attack_path_analysis;
    if (g) {
        n.push(``), n.push(`# Attack-path analysis`);
        let e = [`Final: ${g.adjusted_criticality_final||g.severity||g.original_severity||`unknown`}`, g.adjustment_decider ? `Decider: ${g.adjustment_decider}` : null, g.matrix_severity ? `Matrix severity: ${g.matrix_severity}` : null, g.policy_adjusted_criticality ? `Policy adjusted: ${g.policy_adjusted_criticality}` : null].filter(Boolean);
        if (e.length > 0 && n.push(e.join(` | `)), g.adjustment_reason && (n.push(`## Rationale`), n.push(g.adjustment_reason)), g.likelihood || g.impact) {
            let e = g.impact ? `${g.impact.level??`unknown`}${g.impact.why?` - ${g.impact.why}`:``}` : null,
                t = g.likelihood ? `${g.likelihood.level??`unknown`}${g.likelihood.why?` - ${g.likelihood.why}`:``}` : null;
            t && (n.push(`## Likelihood`), n.push(t)), e && (n.push(`## Impact`), n.push(e))
        }
        let t = [...g.assumptions ?? [], ...g.facts?.precondition?.requires ?? []];
        if (t.length > 0) {
            n.push(`## Assumptions`);
            for (let e of t) n.push(`- ${e}`)
        }
        g.attack_path?.ascii && (n.push(`## Path`), n.push(g.attack_path.ascii));
        let r = $e(g.evidence);
        if (r.length > 0 && (n.push(`## Path evidence`), n.push(...r)), g.narrative && (n.push(`## Narrative`), n.push(g.narrative)), g.controls && g.controls.length > 0) {
            n.push(`## Controls`);
            for (let e of g.controls) n.push(`- ${e}`)
        }
        if (g.blindspots && g.blindspots.length > 0) {
            n.push(`## Blindspots`);
            for (let e of g.blindspots) n.push(`- ${e}`)
        }
    }
    return n.join(`
`).trim()
}

function nt({
    intl: e,
    signals: t,
    className: n,
    badgeSize: r = `md`,
    badgeVariants: i
}) {
    let {
        isSecurityRelated: a,
        isPrivacyRelated: o,
        isValidated: s,
        hasPatch: c,
        hasAttackPath: l
    } = t, u = (e, t) => i?.[e] ?? t;
    return !a && !o && !s && !c && !l ? null : (0, $.jsxs)(`div`, {
        className: [`flex flex-wrap items-center gap-2`, n].filter(Boolean).join(` `),
        children: [a && (0, $.jsx)(_e, {
            variant: u(`security`, `neutral`),
            size: r,
            children: e.formatMessage(H.security)
        }), o && (0, $.jsx)(_e, {
            variant: u(`privacy`, `neutral`),
            size: r,
            children: e.formatMessage(H.privacy)
        }), s && (0, $.jsx)(_e, {
            variant: u(`validated`, `neutral`),
            size: r,
            children: e.formatMessage(H.validated)
        }), c && (0, $.jsx)(_e, {
            variant: u(`patch`, `neutral`),
            size: r,
            children: e.formatMessage(H.patch)
        }), l && (0, $.jsx)(_e, {
            variant: u(`attackpath`, `neutral`),
            size: r,
            children: e.formatMessage(H.attackpath)
        })]
    })
}

function rt({
    finding: e
}) {
    let t = ee(),
        n = g(),
        r = e,
        i = nt({
            intl: t,
            signals: W(r)
        }),
        a = r.commit_analysis?.commit_hash ?? ``,
        o = me(r.repo_url, a),
        s = `border-token-border-light hover:bg-token-bg-elevated-secondary inline-flex min-h-[3.25rem] w-full items-center justify-center rounded border px-3 py-2 text-center text-sm leading-tight`;
    return (0, $.jsxs)(he, {
        title: t.formatMessage({
            id: `aardvark.findings.metadataTitle`,
            defaultMessage: `Metadata`
        }),
        children: [(0, $.jsxs)(`div`, {
            className: `grid grid-cols-1 items-stretch gap-3 text-sm`,
            children: [(0, $.jsx)(q, {
                label: t.formatMessage({
                    id: `aardvark.table.repo`,
                    defaultMessage: `Repository`
                }),
                children: r.repo_url ? (0, $.jsx)(`a`, {
                    href: r.repo_url,
                    target: `_blank`,
                    rel: `noopener noreferrer`,
                    className: `text-token-text-accent hover:underline`,
                    children: K(r.repo_url)
                }) : (0, $.jsx)(`span`, {
                    className: `text-token-text-tertiary`,
                    children: t.formatMessage({
                        id: `aardvark.findings.repo.na`,
                        defaultMessage: `N/A`
                    })
                })
            }), (0, $.jsx)(q, {
                label: t.formatMessage({
                    id: `aardvark.findings.commit`,
                    defaultMessage: `Commit`
                }),
                children: o ? (0, $.jsx)(`a`, {
                    href: o,
                    target: `_blank`,
                    rel: `noopener noreferrer`,
                    className: `text-token-text-accent font-mono text-xs hover:underline`,
                    children: G(a)
                }) : (0, $.jsx)(`code`, {
                    className: `bg-token-bg-elevated-secondary rounded px-1 py-0.5 text-[10px]`,
                    children: G(a)
                })
            }), (0, $.jsx)(q, {
                label: t.formatMessage({
                    id: `aardvark.findings.author`,
                    defaultMessage: `Author`
                }),
                children: (0, $.jsxs)(`div`, {
                    className: `flex min-w-0 flex-col`,
                    children: [(() => {
                        let e = Je(r.commit_analysis?.author);
                        return e ? (0, $.jsx)(`span`, {
                            className: `truncate`,
                            children: e
                        }) : (0, $.jsx)(`span`, {
                            className: `text-token-text-tertiary`,
                            children: t.formatMessage({
                                id: `aardvark.placeholder.missing`,
                                defaultMessage: `—`
                            })
                        })
                    })(), (() => {
                        let e = Je(r.commit_analysis?.author_email);
                        return e ? (0, $.jsx)(`span`, {
                            className: `text-token-text-tertiary font-mono text-xs break-all`,
                            children: e
                        }) : null
                    })()]
                })
            }), (0, $.jsx)(q, {
                label: t.formatMessage({
                    id: `aardvark.findings.authoredAt`,
                    defaultMessage: `Authored at`
                }),
                children: U(r.commit_analysis?.author_date ?? null)
            }), (0, $.jsx)(q, {
                label: t.formatMessage({
                    id: `aardvark.findings.committedAt`,
                    defaultMessage: `Committed at`
                }),
                children: U(r.commit_analysis?.committer_date ?? null)
            }), (0, $.jsx)(q, {
                label: t.formatMessage({
                    id: `aardvark.findings.createdAt`,
                    defaultMessage: `Detected at`
                }),
                children: U(r.created_at)
            }), (0, $.jsx)(q, {
                label: t.formatMessage({
                    id: `aardvark.table.assignee`,
                    defaultMessage: `Assignee`
                }),
                children: (0, $.jsx)(`div`, {
                    className: `min-w-[200px]`,
                    children: (0, $.jsx)(Ce, {
                        finding: r
                    })
                })
            }), (0, $.jsx)(q, {
                label: t.formatMessage({
                    id: `aardvark.table.criticality`,
                    defaultMessage: `Criticality`
                }),
                children: (0, $.jsx)(`div`, {
                    className: `min-w-[200px]`,
                    children: (0, $.jsx)(Fe, {
                        finding: r,
                        sourcePage: `detail`
                    })
                })
            }), (0, $.jsx)(q, {
                label: t.formatMessage({
                    id: `aardvark.table.status`,
                    defaultMessage: `Status`
                }),
                children: (0, $.jsx)(`div`, {
                    className: `min-w-[200px]`,
                    children: (0, $.jsx)(We, {
                        finding: r,
                        sourcePage: `detail`
                    })
                })
            }), i ? (0, $.jsx)(q, {
                label: t.formatMessage({
                    id: `aardvark.findings.signals`,
                    defaultMessage: `Signals`
                }),
                children: i
            }) : null, r.criticality_reason ? (0, $.jsx)(q, {
                label: t.formatMessage({
                    id: `aardvark.findings.criticalityReason`,
                    defaultMessage: `Criticality notes`
                }),
                children: (0, $.jsxs)(`div`, {
                    className: `text-sm whitespace-pre-wrap`,
                    children: [r.criticality_reason, r.criticality_set_by_email ? (0, $.jsx)(`div`, {
                        className: `text-token-text-tertiary mt-1 text-xs`,
                        children: t.formatMessage({
                            id: `aardvark.findings.criticalitySetBy`,
                            defaultMessage: `Set by {email}`
                        }, {
                            email: r.criticality_set_by_email
                        })
                    }) : null]
                })
            }) : null, r.resolution_reason ? (0, $.jsx)(q, {
                label: t.formatMessage({
                    id: `aardvark.findings.resolutionReason`,
                    defaultMessage: `Resolution notes`
                }),
                children: (0, $.jsxs)(`div`, {
                    className: `text-sm whitespace-pre-wrap`,
                    children: [r.resolution_reason, r.resolution_set_by_email ? (0, $.jsx)(`div`, {
                        className: `text-token-text-tertiary mt-1 text-xs`,
                        children: t.formatMessage({
                            id: `aardvark.findings.resolutionSetBy`,
                            defaultMessage: `Set by {email}`
                        }, {
                            email: r.resolution_set_by_email
                        })
                    }) : null]
                })
            }) : null]
        }), (0, $.jsxs)(`div`, {
            className: `mt-3 grid grid-cols-1 items-stretch gap-3 p-1 sm:grid-cols-3`,
            children: [o && (0, $.jsx)(it, {
                commitUrlStr: o
            }), (0, $.jsx)(E, {
                className: s,
                iconClassName: `icon-sm`,
                buttonText: t.formatMessage({
                    id: `aardvark.actions.share`,
                    defaultMessage: `Share link`
                }),
                onCopy: e => {
                    d(typeof window < `u` && window.location ? `${window.location.origin}${window.location.pathname}` : ``, n, e), n.successNeutral(t.formatMessage({
                        id: `aardvark.toast.linkCopied`,
                        defaultMessage: `Link copied`
                    }), {
                        duration: 2
                    })
                }
            }), (0, $.jsx)(E, {
                className: s,
                iconClassName: `icon-sm`,
                buttonText: t.formatMessage({
                    id: `aardvark.actions.copyFinding`,
                    defaultMessage: `Copy this finding`
                }),
                onCopy: async e => {
                    try {
                        await d(tt(r, t), n, e), n.successNeutral(t.formatMessage({
                            id: `aardvark.toast.findingCopied`,
                            defaultMessage: `Finding copied`
                        }), {
                            duration: 2
                        })
                    } catch {}
                }
            })]
        })]
    })
}

function it({
    commitUrlStr: e
}) {
    let t = ee();
    return (0, $.jsxs)(`a`, {
        href: e,
        target: `_blank`,
        rel: `noopener noreferrer`,
        className: `border-token-border-light hover:bg-token-bg-elevated-secondary inline-flex min-h-[3.25rem] w-full items-center justify-center rounded border px-3 py-2 text-center text-sm leading-tight`,
        children: [(0, $.jsx)(L, {
            className: `icon-sm me-1`,
            "aria-hidden": !0
        }), t.formatMessage({
            id: `aardvark.actions.openGithub`,
            defaultMessage: `Open in GitHub`
        })]
    })
}
var $, at = e((() => {
    xe(), Oe(), ze(), ge(), qe(), pe(), V(), T(), I(), a(), f(), ie(), b(), $ = v()
}));
export {
    xe as _, We as a, He as c, ke as d, Ae as f, _e as g, Oe as h, nt as i, Fe as l, Ce as m, tt as n, qe as o, Pe as p, at as r, Be as s, rt as t, ze as u, he as v, ge as y
};
//# sourceMappingURL=abaf64f2-law5e0zl1pxe35cc.js.map
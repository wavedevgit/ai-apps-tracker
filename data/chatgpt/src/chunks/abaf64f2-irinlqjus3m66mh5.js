import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Fw as n,
    I1 as r,
    J5 as i,
    Nw as a,
    Sw as o,
    VU as s,
    Y1 as c,
    _R as l,
    _nt as u,
    aC as d,
    hnt as f,
    oC as p,
    q5 as m,
    ww as h,
    yR as g,
    zU as _
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as ee,
    Hn as v,
    N as te,
    Tn as y,
    Vn as b,
    s as x,
    zn as S
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    Fbt as C,
    Hst as w,
    Ibt as T,
    LHn as E,
    S6t as D,
    Vst as ne,
    cVt as re,
    g6t as O,
    sVt as k,
    zHn as A
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    Xc as j,
    Zc as M
} from "./30901919-jory365vq6ym5crx.js";
import {
    d_ as N,
    f_ as P
} from "./8b34dbc2-d4icgkio4i3wfm6q.js";
import {
    Ht as F,
    Vt as I
} from "./c470f5ab-in0lllrdrzeo67gs.js";
import {
    r as L,
    t as R
} from "./948fe603-oe0e7k99k9t57ypu.js";
import {
    r as z,
    t as ie
} from "./7c213d4e-cw7usvy9mikpowgq.js";
import {
    a as B,
    c as ae,
    i as V,
    l as H,
    n as U,
    o as W,
    r as oe
} from "./5b59f3e4-f9v1k69a0tdaqzc0.js";
import {
    a as se,
    o as ce,
    t as le
} from "./4e7cf3cf-knnx783v20bmqs3v.js";
import {
    a as ue,
    d as G,
    h as de,
    p as fe,
    r as pe,
    x as K,
    y as q
} from "./6fd89734-me0mlo15lw6zwz6w.js";

function me({
    title: e,
    children: t,
    className: n = ``
}) {
    return (0, Y.jsx)(`div`, {
        className: `border-token-border-light bg-token-main-surface-primary ring-token-border-light/60 overflow-hidden rounded-lg border p-4 shadow ring-1 shadow-black/20 md:p-5 dark:shadow-black/60 dark:ring-white/10 ${n}`,
        children: (0, Y.jsxs)(`section`, {
            children: [e && (0, Y.jsx)(`div`, {
                className: `text-title-small mb-5 font-semibold tracking-wide`,
                children: e
            }), (0, Y.jsx)(`div`, {
                className: `grid grid-cols-1 gap-3`,
                children: t
            })]
        })
    })
}

function J({
    label: e,
    children: t
}) {
    return (0, Y.jsxs)(`div`, {
        className: `grid grid-cols-2 items-start gap-1 text-sm md:grid-cols-[auto,1fr] md:gap-2`,
        children: [(0, Y.jsx)(`div`, {
            className: `text-token-text-tertiary md:w-44`,
            children: e
        }), (0, Y.jsx)(`div`, {
            className: `w-full min-w-0 overflow-hidden break-words hyphens-auto`,
            children: t
        })]
    })
}
var Y, he = e((() => {
    v(), Y = b()
}));

function ge(e) {
    "use forget";
    let t = (0, _e.c)(7),
        {
            variant: n,
            children: r,
            className: i,
            size: a
        } = e,
        o = (a === void 0 ? `md` : a) === `sm` ? `px-1.5 py-0 text-[11px]` : `px-2 py-0.5 text-xs`,
        s = ye[n],
        c;
    t[0] !== i || t[1] !== o || t[2] !== s ? (c = m(`inline-flex items-center rounded-full`, o, s, i), t[0] = i, t[1] = o, t[2] = s, t[3] = c) : c = t[3];
    let l;
    return t[4] !== r || t[5] !== c ? (l = (0, ve.jsx)(`span`, {
        className: c,
        children: r
    }), t[4] = r, t[5] = c, t[6] = l) : l = t[6], l
}
var _e, ve, ye, be = e((() => {
    _e = y(), i(), ve = b(), ye = {
        success: `bg-green-700/15 text-green-700 dark:bg-green-900/40 dark:text-green-300`,
        warning: `bg-yellow-700/15 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300`,
        critical: `bg-red-700/15 text-red-700 dark:bg-red-900/60 dark:text-red-300`,
        danger: `bg-red-500/15 text-red-500 dark:bg-red-500/15 dark:text-red-300`,
        muted: `bg-token-bg-elevated-secondary text-token-text-tertiary dark:bg-token-bg-elevated-secondary/70 dark:text-token-text-tertiary`,
        neutral: `bg-token-main-surface-secondary/70 text-token-text-secondary border border-token-border-strong dark:bg-token-main-surface-secondary/80`,
        purple: `bg-purple-400/15 text-purple-400`
    }
}));

function xe({
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

function Se(e) {
    "use forget";
    let t = (0, Te.c)(71),
        {
            finding: n
        } = e,
        r = te(),
        i = s(),
        a = ee(),
        o = c(),
        l;
    t[0] === o ? l = t[1] : (l = o?.getWorkspaceId(), t[0] = o, t[1] = l);
    let u = l,
        d = o?.normalizedAccountUserId,
        [f, p] = (0, Ee.useState)(``),
        [m, h] = (0, Ee.useState)(!1),
        _ = g(),
        {
            data: v,
            isLoading: y
        } = D(u ?? void 0, 0, f, 100);
    _?.email, _?.name;
    let b = d ?? ``,
        x = _?.email ?? ``,
        S = _?.name ?? void 0,
        C;
    t[2] !== b || t[3] !== x || t[4] !== S ? (C = {
        id: b,
        email: x,
        name: S
    }, t[2] = b, t[3] = x, t[4] = S, t[5] = C) : C = t[5];
    let w = C,
        T;
    t[6] !== w || t[7] !== v?.items ? (T = () => {
        let e = (v?.items ?? []).map(we).filter(Ce);
        return w.id && w.email && (e.some(e => e.id === w.id || e.email.toLowerCase() === w.email.toLowerCase()) || e.unshift(w)), e
    }, t[6] = w, t[7] = v?.items, t[8] = T) : T = t[8], v?.items;
    let re;
    t[9] === T ? re = t[10] : (re = T(), t[9] = T, t[10] = re);
    let O = re,
        k = n.assignee_id ?? `none`,
        A = k === `none` ? `` : n.assignee?.email ?? ``,
        M = k === `none` ? void 0 : n.assignee?.name ?? ``,
        N;
    t[11] !== A || t[12] !== M || t[13] !== k ? (N = k === `none` ? `—` : xe({
        name: M,
        email: A
    }), t[11] = A, t[12] = M, t[13] = k, t[14] = N) : N = t[14];
    let P = N,
        F;
    t[15] !== n.hid || t[16] !== n.id || t[17] !== n.version || t[18] !== a || t[19] !== r || t[20] !== i ? (F = async e => {
        h(!0);
        try {
            let t = await R.safePatch(`/aardvark/scan-findings/{id}`, {
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
            ce(r, n.hid, t), se(r, n.hid, t), h(!1), i.successNeutral(a.formatMessage({
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
                r = a.formatMessage(B.assigneeUpdate, {
                    details: n.message
                });
            i.danger(r, {
                duration: 5,
                hasCloseButton: !0
            })
        }
    }, t[15] = n.hid, t[16] = n.id, t[17] = n.version, t[18] = a, t[19] = r, t[20] = i, t[21] = F) : F = t[21];
    let I = F;
    if (m) {
        let e;
        t[22] !== P || t[23] !== k ? (e = k === `none` ? (0, X.jsx)(j, {
            className: `icon-sm`,
            "aria-hidden": !0
        }) : P, t[22] = P, t[23] = k, t[24] = e) : e = t[24];
        let n;
        return t[25] !== A || t[26] !== e ? (n = (0, X.jsx)(`button`, {
            disabled: !0,
            title: A,
            className: `border-token-border-light bg-token-bg-primary inline-flex h-8 w-8 cursor-not-allowed items-center justify-center rounded-full border text-[11px] font-semibold opacity-60`,
            "aria-disabled": !0,
            children: e
        }), t[25] = A, t[26] = e, t[27] = n) : n = t[27], n
    }
    let L;
    t[28] !== P || t[29] !== k ? (L = k === `none` ? (0, X.jsx)(j, {
        className: `icon-sm`,
        "aria-hidden": !0
    }) : P, t[28] = P, t[29] = k, t[30] = L) : L = t[30];
    let z;
    t[31] !== A || t[32] !== y || t[33] !== L ? (z = (0, X.jsx)(`button`, {
        title: A,
        className: `border-token-border-light bg-token-bg-primary inline-flex h-8 w-8 items-center justify-center rounded-full border text-[11px] font-semibold`,
        "aria-busy": y,
        children: L
    }), t[31] = A, t[32] = y, t[33] = L, t[34] = z) : z = t[34];
    let ie;
    t[35] === Symbol.for(`react.memo_cache_sentinel`) ? (ie = e => p(e.target.value), t[35] = ie) : ie = t[35];
    let ae;
    t[36] === a ? ae = t[37] : (ae = a.formatMessage(U.search), t[36] = a, t[37] = ae);
    let V;
    t[38] === a ? V = t[39] : (V = a.formatMessage(U.search), t[38] = a, t[39] = V);
    let H;
    t[40] !== f || t[41] !== ae || t[42] !== V ? (H = (0, X.jsx)(ne, {
        color: `search`,
        name: `assignee-search`,
        type: `text`,
        value: f,
        onChange: ie,
        placeholder: ae,
        ariaLabel: V,
        className: `text-token-text-tertiary flex h-8 w-full items-center rounded-sm`,
        inputClassName: `text-token-text-primary w-full`,
        containerInputClassName: `w-full`
    }), t[40] = f, t[41] = ae, t[42] = V, t[43] = H) : H = t[43];
    let W;
    t[44] === I ? W = t[45] : (W = () => I(null), t[44] = I, t[45] = W);
    let le = `hover:bg-token-bg-tertiary flex w-full items-center gap-2 rounded-sm px-2 py-1 text-start text-sm ${k===`none`?`bg-token-bg-tertiary`:``}`,
        ue;
    t[46] === Symbol.for(`react.memo_cache_sentinel`) ? (ue = (0, X.jsx)(`div`, {
        className: `border-token-border-light bg-token-bg-primary inline-flex h-7 w-7 items-center justify-center rounded-full border text-[11px] font-semibold`,
        children: (0, X.jsx)(j, {
            className: `icon-sm`,
            "aria-hidden": !0
        })
    }), t[46] = ue) : ue = t[46];
    let G;
    t[47] === a ? G = t[48] : (G = a.formatMessage(oe.none), t[47] = a, t[48] = G);
    let de;
    t[49] === G ? de = t[50] : (de = (0, X.jsx)(`div`, {
        className: `flex flex-col`,
        children: (0, X.jsx)(`span`, {
            className: `leading-4`,
            children: G
        })
    }), t[49] = G, t[50] = de);
    let fe;
    t[51] !== W || t[52] !== le || t[53] !== de ? (fe = (0, X.jsxs)(`button`, {
        type: `button`,
        onClick: W,
        className: le,
        children: [ue, de]
    }, `none`), t[51] = W, t[52] = le, t[53] = de, t[54] = fe) : fe = t[54];
    let pe;
    if (t[55] !== O || t[56] !== I || t[57] !== k) {
        let e;
        t[59] !== I || t[60] !== k ? (e = e => {
            let t = xe({
                name: e.name,
                email: e.email
            });
            return (0, X.jsxs)(`button`, {
                type: `button`,
                onClick: () => I(e.email),
                className: `hover:bg-token-bg-tertiary flex w-full items-center gap-2 rounded-sm px-2 py-1 text-start text-sm ${e.id===k?`bg-token-bg-tertiary`:``}`,
                children: [(0, X.jsx)(`div`, {
                    className: `border-token-border-light bg-token-bg-primary inline-flex h-7 w-7 items-center justify-center rounded-full border text-[11px] font-semibold`,
                    children: t
                }), (0, X.jsxs)(`div`, {
                    className: `flex flex-col`,
                    children: [(0, X.jsx)(`span`, {
                        className: `leading-4`,
                        children: e.name ?? e.email
                    }), (0, X.jsx)(`span`, {
                        className: `text-token-text-tertiary text-xs leading-4`,
                        children: e.email
                    })]
                })]
            }, e.id)
        }, t[59] = I, t[60] = k, t[61] = e) : e = t[61], pe = O.map(e), t[55] = O, t[56] = I, t[57] = k, t[58] = pe
    } else pe = t[58];
    let K;
    t[62] !== fe || t[63] !== pe ? (K = (0, X.jsxs)(`div`, {
        className: `mt-2 max-h-60 overflow-y-auto`,
        children: [fe, pe]
    }), t[62] = fe, t[63] = pe, t[64] = K) : K = t[64];
    let q;
    t[65] !== H || t[66] !== K ? (q = (0, X.jsxs)(`div`, {
        className: `p-2.5`,
        children: [H, K]
    }), t[65] = H, t[66] = K, t[67] = q) : q = t[67];
    let me;
    return t[68] !== z || t[69] !== q ? (me = (0, X.jsx)(E, {
        triggerButton: z,
        children: q
    }), t[68] = z, t[69] = q, t[70] = me) : me = t[70], me
}

function Ce(e) {
    return e.email.length > 0
}

function we(e) {
    return {
        id: e.account_user_id,
        email: e.email ?? ``,
        name: e.name ?? void 0
    }
}
var Te, Ee, X, De = e((() => {
    Te = y(), H(), le(), L(), O(), A(), M(), w(), r(), l(), _(), x(), Ee = t(v()), S(), X = b()
}));

function Oe(e) {
    "use forget";
    let t = (0, Ae.c)(6),
        {
            level: n
        } = e,
        r = ee(),
        i = Me[n],
        a;
    t[0] !== r || t[1] !== n ? (a = r.formatMessage(V[n]), t[0] = r, t[1] = n, t[2] = a) : a = t[2];
    let o = a,
        s;
    return t[3] !== o || t[4] !== i ? (s = (0, je.jsx)(ge, {
        variant: i,
        children: o
    }), t[3] = o, t[4] = i, t[5] = s) : s = t[5], s
}

function ke(e) {
    "use forget";
    let t = (0, Ae.c)(2);
    if (!e) return;
    let n = String(e),
        r;
    t[0] === n ? r = t[1] : (r = n.toLowerCase(), t[0] = n, t[1] = r);
    let i = r;
    if (i === `critical` || i === `high` || i === `medium` || i === `low` || i === `informational`) return i;
    if (i === `ignore`) return `low`
}
var Ae, je, Me, Ne = e((() => {
    Ae = y(), be(), H(), S(), je = b(), Me = {
        critical: `critical`,
        high: `danger`,
        medium: `purple`,
        low: `warning`,
        informational: `neutral`
    }
}));

function Pe(e) {
    "use forget";
    let t = (0, Fe.c)(46),
        {
            finding: n,
            onCriticalityChangeSuccess: r,
            sourcePage: i
        } = e,
        c = ee(),
        l = n.criticality ?? `low`,
        u = te(),
        d = s(),
        [p, m] = (0, Ie.useState)(!1),
        [h, g] = (0, Ie.useState)(!1),
        [_, v] = (0, Ie.useState)(null),
        [y, b] = (0, Ie.useState)(``),
        x = (0, Ie.useId)(),
        S = (0, Ie.useId)(),
        C = n.hid ?? n.id ?? void 0,
        w;
    t[0] !== n.criticality || t[1] !== n.hid || t[2] !== n.id || t[3] !== n.version || t[4] !== C || t[5] !== c || t[6] !== r || t[7] !== u || t[8] !== i || t[9] !== d ? (w = async (e, t) => {
        m(!0);
        let a = e => {
                let t = e instanceof Error ? e : Error(String(e)),
                    n = c.formatMessage(B.criticalityUpdate, {
                        details: t.message
                    });
                return d.danger(n, {
                    duration: 5,
                    hasCloseButton: !0
                }), m(!1), !1
            },
            o = (t ?? ``).trim(),
            s = {
                version: n.version,
                criticality: e,
                criticality_reason: o
            },
            l = n.criticality,
            p = e;
        try {
            let e = await R.safePatch(`/aardvark/scan-findings/{id}`, {
                parameters: {
                    path: {
                        id: n.id
                    }
                },
                requestBody: s
            });
            return ce(u, n.hid, e), se(u, n.hid, e), d.successNeutral(c.formatMessage({
                id: `aardvark.toast.criticalityUpdated`,
                defaultMessage: `Criticality updated`
            }), {
                duration: 5,
                hasCloseButton: !0
            }), f.logStructuredEvent(`AardvarkFindingCriticalityChanged`, {
                findingId: C,
                previousCriticality: l,
                nextCriticality: p,
                sourcePage: i
            }), r && r(), m(!1), !0
        } catch (e) {
            return a(e)
        }
    }, t[0] = n.criticality, t[1] = n.hid, t[2] = n.id, t[3] = n.version, t[4] = C, t[5] = c, t[6] = r, t[7] = u, t[8] = i, t[9] = d, t[10] = w) : w = t[10];
    let T = w,
        E;
    t[11] === l ? E = t[12] : (E = e => {
        e !== l && (v(e), b(``), g(!0))
    }, t[11] = l, t[12] = E);
    let D = E,
        ne = `flex min-w-0 items-center gap-2 ${p?`opacity-60`:``}`,
        O;
    t[13] === l ? O = t[14] : (O = (0, Z.jsx)(Oe, {
        level: l
    }), t[13] = l, t[14] = O);
    let k;
    t[15] !== ne || t[16] !== O ? (k = (0, Z.jsx)(`div`, {
        className: ne,
        children: O
    }), t[15] = ne, t[16] = O, t[17] = k) : k = t[17];
    let A;
    t[18] === Symbol.for(`react.memo_cache_sentinel`) ? (A = (0, Z.jsx)(N.Icon, {}), t[18] = A) : A = t[18];
    let j;
    t[19] === k ? j = t[20] : (j = (0, Z.jsxs)(`div`, {
        className: `flex w-full items-center justify-between gap-2`,
        children: [k, A]
    }), t[19] = k, t[20] = j);
    let M;
    t[21] !== p || t[22] !== j ? (M = (0, Z.jsx)(N.Trigger, {
        className: `border-token-border-light bg-token-bg-primary mr h-7 rounded-md border px-2 text-xs`,
        "aria-busy": p,
        children: j
    }), t[21] = p, t[22] = j, t[23] = M) : M = t[23];
    let P;
    t[24] === c ? P = t[25] : (P = re(Le, e => (0, Z.jsxs)(N.Item, {
        value: e,
        children: [(0, Z.jsx)(Oe, {
            level: e
        }), (0, Z.jsx)(`span`, {
            className: `sr-only`,
            children: c.formatMessage(V[e])
        })]
    }, e)), t[24] = c, t[25] = P);
    let F;
    t[26] === P ? F = t[27] : (F = (0, Z.jsx)(N.Portal, {
        children: (0, Z.jsx)(N.Content, {
            align: `start`,
            className: `rounded-lg text-sm`,
            children: P
        })
    }), t[26] = P, t[27] = F);
    let I;
    t[28] !== l || t[29] !== p || t[30] !== D || t[31] !== F || t[32] !== M ? (I = (0, Z.jsxs)(N.Root, {
        value: l,
        onValueChange: D,
        disabled: p,
        children: [M, F]
    }), t[28] = l, t[29] = p, t[30] = D, t[31] = F, t[32] = M, t[33] = I) : I = t[33];
    let L;
    t[34] !== c || t[35] !== h || t[36] !== p || t[37] !== _ || t[38] !== y || t[39] !== x || t[40] !== S || t[41] !== T ? (L = h && (0, Z.jsx)(o, {
        testId: `modal-criticality-reason`,
        isOpen: !0,
        shouldIgnoreClickOutside: !0,
        onClose: () => {
            g(!1), v(null), b(``)
        },
        title: c.formatMessage({
            id: `aardvark.findings.criticality.title`,
            defaultMessage: `Update criticality`
        }),
        showCloseButton: !0,
        primaryButton: (0, Z.jsx)(a.Button, {
            title: c.formatMessage({
                id: `aardvark.findings.criticality.save`,
                defaultMessage: `Save`
            }),
            color: `primary`,
            loading: p,
            onClick: async () => {
                _ && await T(_, y) && (g(!1), v(null), b(``))
            }
        }),
        secondaryButton: (0, Z.jsx)(a.Button, {
            title: c.formatMessage({
                id: `aardvark.findings.criticality.cancel`,
                defaultMessage: `Cancel`
            }),
            color: `secondary`,
            onClick: () => {
                g(!1), v(null), b(``)
            }
        }),
        children: (0, Z.jsxs)(`div`, {
            className: `space-y-3`,
            children: [(0, Z.jsx)(`div`, {
                id: S,
                className: `text-token-text-secondary mt-1 text-sm`,
                children: c.formatMessage({
                    id: `aardvark.findings.criticality.prompt`,
                    defaultMessage: `Optionally share why you're changing the criticality.`
                })
            }), (0, Z.jsx)(`label`, {
                htmlFor: x,
                className: `sr-only`,
                children: c.formatMessage({
                    id: `aardvark.findings.criticality.reasonLabel`,
                    defaultMessage: `Reason (optional)`
                })
            }), (0, Z.jsx)(`textarea`, {
                id: x,
                "aria-describedby": S,
                value: y,
                onChange: e => b(e.target.value),
                className: `border-token-border-default bg-token-bg-primary text-token-text-primary placeholder:text-token-text-tertiary w-full rounded-lg border p-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none`,
                placeholder: c.formatMessage({
                    id: `aardvark.findings.criticality.placeholder`,
                    defaultMessage: `Add context (optional)`
                }),
                rows: 4
            })]
        })
    }), t[34] = c, t[35] = h, t[36] = p, t[37] = _, t[38] = y, t[39] = x, t[40] = S, t[41] = T, t[42] = L) : L = t[42];
    let z;
    return t[43] !== I || t[44] !== L ? (z = (0, Z.jsxs)(Z.Fragment, {
        children: [I, L]
    }), t[43] = I, t[44] = L, t[45] = z) : z = t[45], z
}
var Fe, Ie, Z, Le, Re = e((() => {
    Fe = y(), Ne(), H(), le(), L(), n(), h(), P(), _(), u(), x(), k(), Ie = t(v()), S(), Z = b(), Le = [`critical`, `high`, `medium`, `low`]
}));
async function ze({
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
        let i = await R.safePatch(`/aardvark/scan-findings/{id}`, {
            parameters: {
                path: {
                    id: e
                }
            },
            requestBody: n
        });
        ce(s, t, i), se(s, t, i), a(!1), c.successNeutral(o.formatMessage({
            id: `aardvark.toast.statusUpdated`,
            defaultMessage: `Status updated`
        }), {
            duration: 5,
            hasCloseButton: !0
        }), r && r(i)
    } catch (e) {
        a(!1);
        let t = e instanceof Error ? e : Error(String(e)),
            n = o.formatMessage(B.statusUpdate, {
                details: t.message
            });
        c.danger(n), i && i(t)
    }
}

function Be(e) {
    "use forget";
    let t = (0, Ve.c)(56),
        {
            finding: n,
            onStatusChangeSuccess: r,
            sourcePage: i,
            variant: c
        } = e,
        l = c === void 0 ? `default` : c,
        u = ee(),
        d = n.status,
        p = te(),
        h = s(),
        [g, _] = (0, He.useState)(!1),
        [v, y] = (0, He.useState)(!1),
        [b, x] = (0, He.useState)(null),
        [S, C] = (0, He.useState)(``),
        w = n.hid ?? n.id ?? void 0,
        T;
    t[0] !== d || t[1] !== w || t[2] !== i ? (T = e => {
        f.logStructuredEvent(`AardvarkFindingStatusChanged`, {
            findingId: w,
            previousStatus: d ?? void 0,
            nextStatus: e ?? void 0,
            sourcePage: i
        })
    }, t[0] = d, t[1] = w, t[2] = i, t[3] = T) : T = t[3];
    let E = T,
        D;
    t[4] !== n.hid || t[5] !== n.id || t[6] !== n.version || t[7] !== u || t[8] !== E || t[9] !== r || t[10] !== p || t[11] !== h ? (D = async e => {
        if (e === `wontfix` || e === `fixed` || e === `duplicate`) {
            x(e), y(!0);
            return
        }
        await ze({
            id: n.id,
            hid: n.hid,
            payload: {
                version: n.version,
                status: e
            },
            setIsSaving: _,
            intl: u,
            queryClient: p,
            toaster: h,
            onSuccess: () => {
                r?.(), E(e)
            }
        })
    }, t[4] = n.hid, t[5] = n.id, t[6] = n.version, t[7] = u, t[8] = E, t[9] = r, t[10] = p, t[11] = h, t[12] = D) : D = t[12];
    let ne = D,
        O = l === `sidebar` ? `text-token-text-primary hover:bg-token-bg-secondary keyboard-focused:bg-token-bg-secondary h-auto rounded-md border-0 bg-transparent px-2 py-1 text-sm font-medium shadow-none` : `border-token-border-light bg-token-bg-primary mr h-7 rounded-md border px-2 text-xs`,
        k;
    t[13] === O ? k = t[14] : (k = m(O), t[13] = O, t[14] = k);
    let A = l === `sidebar` ? `gap-1` : `w-full`,
        j;
    t[15] === A ? j = t[16] : (j = m(`flex items-center justify-between`, A), t[15] = A, t[16] = j);
    let M = l === `sidebar` && `text-end`,
        P;
    t[17] === M ? P = t[18] : (P = m(`truncate`, M), t[17] = M, t[18] = P);
    let F;
    t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (F = (0, Q.jsx)(N.Value, {}), t[19] = F) : F = t[19];
    let I;
    t[20] === P ? I = t[21] : (I = (0, Q.jsx)(`div`, {
        className: P,
        children: F
    }), t[20] = P, t[21] = I);
    let L;
    t[22] === Symbol.for(`react.memo_cache_sentinel`) ? (L = (0, Q.jsx)(N.Icon, {}), t[22] = L) : L = t[22];
    let R;
    t[23] !== I || t[24] !== j ? (R = (0, Q.jsxs)(`div`, {
        className: j,
        children: [I, L]
    }), t[23] = I, t[24] = j, t[25] = R) : R = t[25];
    let z;
    t[26] !== R || t[27] !== k ? (z = (0, Q.jsx)(N.Trigger, {
        className: k,
        children: R
    }), t[26] = R, t[27] = k, t[28] = z) : z = t[28];
    let ie = l === `sidebar` ? `end` : `start`,
        B;
    t[29] === u ? B = t[30] : (B = re(ae, (e, t) => (0, Q.jsx)(N.Item, {
        value: t,
        children: u.formatMessage(e, {
            status: t
        })
    }, t)), t[29] = u, t[30] = B);
    let V;
    t[31] !== ie || t[32] !== B ? (V = (0, Q.jsx)(N.Portal, {
        children: (0, Q.jsx)(N.Content, {
            align: ie,
            className: `rounded-lg text-sm`,
            children: B
        })
    }), t[31] = ie, t[32] = B, t[33] = V) : V = t[33];
    let H;
    t[34] !== d || t[35] !== g || t[36] !== ne || t[37] !== z || t[38] !== V ? (H = (0, Q.jsxs)(N.Root, {
        value: d,
        onValueChange: ne,
        disabled: g,
        children: [z, V]
    }), t[34] = d, t[35] = g, t[36] = ne, t[37] = z, t[38] = V, t[39] = H) : H = t[39];
    let U;
    t[40] !== n.hid || t[41] !== n.id || t[42] !== n.version || t[43] !== u || t[44] !== v || t[45] !== g || t[46] !== E || t[47] !== r || t[48] !== b || t[49] !== p || t[50] !== S || t[51] !== h ? (U = v && (0, Q.jsx)(o, {
        testId: `modal-wontfix-reason`,
        isOpen: !0,
        shouldIgnoreClickOutside: !0,
        onClose: () => {
            y(!1), C(``), x(null)
        },
        title: b === `fixed` ? u.formatMessage({
            id: `aardvark.findings.fixed.title`,
            defaultMessage: `Add PR link`
        }) : b === `duplicate` ? u.formatMessage({
            id: `aardvark.findings.duplicate.title`,
            defaultMessage: `Mark as duplicate`
        }) : u.formatMessage({
            id: `aardvark.findings.wontfix.title`,
            defaultMessage: `Add reason`
        }),
        showCloseButton: !0,
        primaryButton: (0, Q.jsx)(a.Button, {
            title: b === `fixed` ? u.formatMessage({
                id: `aardvark.findings.fixed.save`,
                defaultMessage: `Save`
            }) : u.formatMessage({
                id: `aardvark.findings.wontfix.save`,
                defaultMessage: `Save`
            }),
            color: `primary`,
            loading: g,
            onClick: async () => {
                if (b) {
                    if (!S.trim()) {
                        h.danger(b === `fixed` ? u.formatMessage({
                            id: `aardvark.findings.fixed.required`,
                            defaultMessage: `Please paste a PR link`
                        }) : b === `duplicate` ? u.formatMessage({
                            id: `aardvark.findings.duplicate.required`,
                            defaultMessage: `Please paste a link to the original scan finding`
                        }) : u.formatMessage({
                            id: `aardvark.findings.wontfix.required`,
                            defaultMessage: `Please enter a reason`
                        }));
                        return
                    }
                    await ze({
                        id: n.id,
                        hid: n.hid,
                        payload: {
                            version: n.version,
                            status: b,
                            resolution_reason: S.trim()
                        },
                        setIsSaving: _,
                        intl: u,
                        queryClient: p,
                        toaster: h,
                        onSuccess: () => {
                            y(!1), C(``), x(null), r?.(), E(b)
                        }
                    })
                }
            }
        }),
        secondaryButton: (0, Q.jsx)(a.Button, {
            title: b === `fixed` ? u.formatMessage({
                id: `aardvark.findings.fixed.cancel`,
                defaultMessage: `Cancel`
            }) : u.formatMessage({
                id: `aardvark.findings.wontfix.cancel`,
                defaultMessage: `Cancel`
            }),
            color: `secondary`,
            onClick: () => {
                y(!1), C(``), x(null)
            }
        }),
        children: (0, Q.jsxs)(`div`, {
            className: `space-y-3`,
            children: [(0, Q.jsx)(`div`, {
                children: (0, Q.jsx)(`div`, {
                    className: `text-token-text-secondary mt-1 text-sm`,
                    children: b === `fixed` ? u.formatMessage({
                        id: `aardvark.findings.fixed.prompt`,
                        defaultMessage: `Which PR merged the fix? Paste the URL.`
                    }) : b === `duplicate` ? u.formatMessage({
                        id: `aardvark.findings.duplicate.prompt`,
                        defaultMessage: `Which scan finding does this duplicate? Paste a link to the original finding.`
                    }) : u.formatMessage({
                        id: `aardvark.findings.wontfix.prompt`,
                        defaultMessage: `Why won't this be fixed?`
                    })
                })
            }), (0, Q.jsx)(`div`, {
                children: (0, Q.jsx)(`textarea`, {
                    value: S,
                    onChange: e => C(e.target.value),
                    className: `border-token-border-default bg-token-bg-primary text-token-text-primary placeholder:text-token-text-tertiary w-full rounded-lg border p-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none`,
                    placeholder: b === `fixed` ? u.formatMessage({
                        id: `aardvark.findings.fixed.placeholder`,
                        defaultMessage: `Paste PR URL (required)`
                    }) : b === `duplicate` ? u.formatMessage({
                        id: `aardvark.findings.duplicate.placeholder`,
                        defaultMessage: `Paste link (required)`
                    }) : u.formatMessage({
                        id: `aardvark.findings.wontfix.placeholder`,
                        defaultMessage: `Add a short reason (required)`
                    }),
                    rows: 5
                })
            })]
        })
    }), t[40] = n.hid, t[41] = n.id, t[42] = n.version, t[43] = u, t[44] = v, t[45] = g, t[46] = E, t[47] = r, t[48] = b, t[49] = p, t[50] = S, t[51] = h, t[52] = U) : U = t[52];
    let W;
    return t[53] !== H || t[54] !== U ? (W = (0, Q.jsxs)(Q.Fragment, {
        children: [H, U]
    }), t[53] = H, t[54] = U, t[55] = W) : W = t[55], W
}
var Ve, He, Q, Ue = e((() => {
    Ve = y(), H(), le(), L(), n(), h(), P(), _(), u(), x(), i(), k(), He = t(v()), S(), Q = b()
}));

function We(e) {
    if (e == null) return ``;
    let t = String(e).trim();
    return t.startsWith(`'`) && t.endsWith(`'`) || t.startsWith(`"`) && t.endsWith(`"`) ? t.slice(1, -1).trim() : t
}

function Ge(e) {
    return typeof e != `object` || !e || !(`role` in e) || !(`output_items` in e) ? !1 : e.role === `assistant` && Array.isArray(e.output_items)
}

function Ke(e, t) {
    let n = [];
    return t.isSecurityRelated && n.push(e.formatMessage(W.security)), t.isPrivacyRelated && n.push(e.formatMessage(W.privacy)), t.isValidated && n.push(e.formatMessage(W.validated)), t.hasPatch && n.push(e.formatMessage(W.patch)), t.hasAttackPath && n.push(e.formatMessage(W.attackpath)), n.length === 0 ? e.formatMessage({
        id: `aardvark.findings.clipboard.noSignals`,
        defaultMessage: `None`
    }) : n.join(`, `)
}

function qe(e) {
    return typeof e?.path == `string` && e.path.trim() || typeof e?.file_path == `string` && e.file_path.trim() || `(unknown path)`
}

function Je(e) {
    let t = e.commit_analysis?.relevant_lines ?? [],
        n = Array.isArray(t) && t.length > 0,
        r = e.commit_analysis?.proposed_patch;
    n || (t = de(r)?.relevant_lines ?? []);
    let i = [];
    if (Array.isArray(t) && t.length > 0) {
        let e = (() => {
            let e = new Map;
            for (let n of t) {
                let t = `${qe(n)}|${n.start_line_number??0}-${n.end_line_number??n.start_line_number??0}`,
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

function Ye(e) {
    return !Array.isArray(e) || e.length === 0 ? [] : e.flatMap(e => {
        let t = typeof e?.file == `string` && e.file.trim() ? e.file.trim() : `(unknown path)`,
            n = typeof e?.line_start == `number` && Number.isFinite(e.line_start) ? e.line_start : null,
            r = typeof e?.line_end == `number` && Number.isFinite(e.line_end) ? e.line_end : n,
            i = n == null ? `` : r != null && r > n ? `${n}-${r}` : `${n}`;
        return [`- \`${i?`${t}:${i}`:t}\`${typeof e?.why==`string`&&e.why.trim().length>0?` - ${e.why.trim()}`:``}`]
    })
}

function Xe(e) {
    let t = e.proposed_patch?.latest_task;
    if (!t) return null;
    let n = Ge(t.codex_task_turn?.turn) ? t.codex_task_turn?.turn : null;
    if (!n) return null;
    let r = z({
        assistantTurn: n
    }).map(e => e.hunksText ?? ``).filter(e => e.trim().length > 0).join(`

`).trim();
    return r.length > 0 ? r : null
}

function Ze(e, t) {
    let n = [],
        r = typeof window < `u` && window.location ? window.location.href : null,
        i = G(e),
        a = e.commit_analysis?.commit_hash ?? ``,
        o = [];
    e.commit_analysis?.bugs_found_or_fixed && o.push(e.commit_analysis?.bugs_found_or_fixed), e.commit_analysis?.description && o.push(e.commit_analysis?.description), n.push(e.commit_analysis?.title || `Finding`), r && n.push(`Link: ${r}`), n.push(`Criticality: ${e.criticality??`unknown`}${e.commit_analysis?.attack_path_analysis?.adjusted_criticality_final?` (attack path: ${e.commit_analysis.attack_path_analysis.adjusted_criticality_final})`:``}`), n.push(`Status: ${e.status??`unknown`}`), e.criticality_reason && n.push(`Criticality notes: ${e.criticality_reason}`);
    let s = e.commit_analysis?.cvss_score,
        c = e.commit_analysis?.criticality_cvss_score_reason;
    n.push(``), n.push(`# Metadata`), n.push(`Repo: ${q(e.repo_url??``)||`N/A`}`), n.push(`Commit: ${K(a)||`N/A`}`), n.push(`Author: ${We(e.commit_analysis?.author_email)||`N/A`}`), n.push(`Created: ${ue(e.created_at)||`N/A`}`);
    let l = We(e.assignee_email) || We(e?.assignee?.email),
        u = We(e?.assignee?.name),
        d = u && l ? `${u} <${l}>` : u || l;
    n.push(`Assignee: ${d||`Unassigned`}`), n.push(`Signals: ${Ke(t,i)}`), e.resolution_reason && n.push(`Resolution: ${e.resolution_reason}`), o.length > 0 && (n.push(``), n.push(`# Summary`), n.push(...o)), (s != null || c) && (n.push(``), n.push(`# CVSS`), s != null && n.push(`Score: ${s}`), c && n.push(c));
    let f = e.commit_analysis?.validation_report || e?.commit_analysis?.validation_str,
        p = e.commit_analysis?.validation_rubric;
    (p || f) && (n.push(``), n.push(`# Validation`), p && (n.push(`## Rubric`), n.push(p)), f && (n.push(`## Report`), n.push(String(f))));
    let m = Je(e);
    m.length > 0 && (n.push(``), n.push(`# Evidence`), n.push(...m));
    let h = Xe(e);
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
        let r = Ye(g.evidence);
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

function Qe({
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
        children: [a && (0, $.jsx)(ge, {
            variant: u(`security`, `neutral`),
            size: r,
            children: e.formatMessage(W.security)
        }), o && (0, $.jsx)(ge, {
            variant: u(`privacy`, `neutral`),
            size: r,
            children: e.formatMessage(W.privacy)
        }), s && (0, $.jsx)(ge, {
            variant: u(`validated`, `neutral`),
            size: r,
            children: e.formatMessage(W.validated)
        }), c && (0, $.jsx)(ge, {
            variant: u(`patch`, `neutral`),
            size: r,
            children: e.formatMessage(W.patch)
        }), l && (0, $.jsx)(ge, {
            variant: u(`attackpath`, `neutral`),
            size: r,
            children: e.formatMessage(W.attackpath)
        })]
    })
}

function $e({
    finding: e
}) {
    let t = ee(),
        n = s(),
        r = e,
        i = Qe({
            intl: t,
            signals: G(r)
        }),
        a = r.commit_analysis?.commit_hash ?? ``,
        o = pe(r.repo_url, a),
        c = `border-token-border-light hover:bg-token-bg-elevated-secondary inline-flex min-h-[3.25rem] w-full items-center justify-center rounded border px-3 py-2 text-center text-sm leading-tight`;
    return (0, $.jsxs)(me, {
        title: t.formatMessage({
            id: `aardvark.findings.metadataTitle`,
            defaultMessage: `Metadata`
        }),
        children: [(0, $.jsxs)(`div`, {
            className: `grid grid-cols-1 items-stretch gap-3 text-sm`,
            children: [(0, $.jsx)(J, {
                label: t.formatMessage({
                    id: `aardvark.table.repo`,
                    defaultMessage: `Repository`
                }),
                children: r.repo_url ? (0, $.jsx)(`a`, {
                    href: r.repo_url,
                    target: `_blank`,
                    rel: `noopener noreferrer`,
                    className: `text-token-text-accent hover:underline`,
                    children: q(r.repo_url)
                }) : (0, $.jsx)(`span`, {
                    className: `text-token-text-tertiary`,
                    children: t.formatMessage({
                        id: `aardvark.findings.repo.na`,
                        defaultMessage: `N/A`
                    })
                })
            }), (0, $.jsx)(J, {
                label: t.formatMessage({
                    id: `aardvark.findings.commit`,
                    defaultMessage: `Commit`
                }),
                children: o ? (0, $.jsx)(`a`, {
                    href: o,
                    target: `_blank`,
                    rel: `noopener noreferrer`,
                    className: `text-token-text-accent font-mono text-xs hover:underline`,
                    children: K(a)
                }) : (0, $.jsx)(`code`, {
                    className: `bg-token-bg-elevated-secondary rounded px-1 py-0.5 text-[10px]`,
                    children: K(a)
                })
            }), (0, $.jsx)(J, {
                label: t.formatMessage({
                    id: `aardvark.findings.author`,
                    defaultMessage: `Author`
                }),
                children: (0, $.jsxs)(`div`, {
                    className: `flex min-w-0 flex-col`,
                    children: [(() => {
                        let e = We(r.commit_analysis?.author);
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
                        let e = We(r.commit_analysis?.author_email);
                        return e ? (0, $.jsx)(`span`, {
                            className: `text-token-text-tertiary font-mono text-xs break-all`,
                            children: e
                        }) : null
                    })()]
                })
            }), (0, $.jsx)(J, {
                label: t.formatMessage({
                    id: `aardvark.findings.authoredAt`,
                    defaultMessage: `Authored at`
                }),
                children: ue(r.commit_analysis?.author_date ?? null)
            }), (0, $.jsx)(J, {
                label: t.formatMessage({
                    id: `aardvark.findings.committedAt`,
                    defaultMessage: `Committed at`
                }),
                children: ue(r.commit_analysis?.committer_date ?? null)
            }), (0, $.jsx)(J, {
                label: t.formatMessage({
                    id: `aardvark.findings.createdAt`,
                    defaultMessage: `Detected at`
                }),
                children: ue(r.created_at)
            }), (0, $.jsx)(J, {
                label: t.formatMessage({
                    id: `aardvark.table.assignee`,
                    defaultMessage: `Assignee`
                }),
                children: (0, $.jsx)(`div`, {
                    className: `min-w-[200px]`,
                    children: (0, $.jsx)(Se, {
                        finding: r
                    })
                })
            }), (0, $.jsx)(J, {
                label: t.formatMessage({
                    id: `aardvark.table.criticality`,
                    defaultMessage: `Criticality`
                }),
                children: (0, $.jsx)(`div`, {
                    className: `min-w-[200px]`,
                    children: (0, $.jsx)(Pe, {
                        finding: r,
                        sourcePage: `detail`
                    })
                })
            }), (0, $.jsx)(J, {
                label: t.formatMessage({
                    id: `aardvark.table.status`,
                    defaultMessage: `Status`
                }),
                children: (0, $.jsx)(`div`, {
                    className: `min-w-[200px]`,
                    children: (0, $.jsx)(Be, {
                        finding: r,
                        sourcePage: `detail`
                    })
                })
            }), i ? (0, $.jsx)(J, {
                label: t.formatMessage({
                    id: `aardvark.findings.signals`,
                    defaultMessage: `Signals`
                }),
                children: i
            }) : null, r.criticality_reason ? (0, $.jsx)(J, {
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
            }) : null, r.resolution_reason ? (0, $.jsx)(J, {
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
            children: [o && (0, $.jsx)(et, {
                commitUrlStr: o
            }), (0, $.jsx)(C, {
                className: c,
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
            }), (0, $.jsx)(C, {
                className: c,
                iconClassName: `icon-sm`,
                buttonText: t.formatMessage({
                    id: `aardvark.actions.copyFinding`,
                    defaultMessage: `Copy this finding`
                }),
                onCopy: async e => {
                    try {
                        await d(Ze(r, t), n, e), n.successNeutral(t.formatMessage({
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

function et({
    commitUrlStr: e
}) {
    let t = ee();
    return (0, $.jsxs)(`a`, {
        href: e,
        target: `_blank`,
        rel: `noopener noreferrer`,
        className: `border-token-border-light hover:bg-token-bg-elevated-secondary inline-flex min-h-[3.25rem] w-full items-center justify-center rounded border px-3 py-2 text-center text-sm leading-tight`,
        children: [(0, $.jsx)(I, {
            className: `icon-sm me-1`,
            "aria-hidden": !0
        }), t.formatMessage({
            id: `aardvark.actions.openGithub`,
            defaultMessage: `Open in GitHub`
        })]
    })
}
var $, tt = e((() => {
    be(), De(), Re(), he(), Ue(), fe(), H(), T(), F(), _(), p(), ie(), S(), $ = b()
}));
export {
    he as _, Be as a, Re as c, Ne as d, Se as f, me as g, be as h, Qe as i, Oe as l, ge as m, Ze as n, Ue as o, De as p, tt as r, Pe as s, $e as t, ke as u
};
//# sourceMappingURL=abaf64f2-irinlqjus3m66mh5.js.map
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Fw as n,
    G5 as r,
    I1 as i,
    K5 as a,
    Nw as o,
    Sw as s,
    VU as c,
    Y1 as l,
    _R as u,
    aC as d,
    hnt as f,
    oC as p,
    pnt as ee,
    ww as m,
    yR as h,
    zU as g
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    Bn as _,
    N as te,
    Rn as v,
    Vn as y,
    s as b,
    wn as x,
    zn as ne
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Fbt as S,
    Hst as C,
    IHn as re,
    Ibt as w,
    RHn as T,
    S6t as ie,
    Vst as E,
    cVt as ae,
    g6t as D,
    sVt as O
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    Xc as k,
    Zc as A
} from "./30901919-om7b3qf5hp4j9x4l.js";
import {
    d_ as j,
    f_ as M
} from "./8b34dbc2-j8rcexxiltkm8ucr.js";
import {
    Ht as N,
    Vt as P
} from "./c470f5ab-d0jxi6yggehv1yt2.js";
import {
    r as F,
    t as I
} from "./948fe603-fakjy1ezhrfoxwqt.js";
import {
    r as L,
    t as R
} from "./7c213d4e-oul7hooprq3woqxg.js";
import {
    a as z,
    c as oe,
    i as B,
    l as V,
    n as H,
    o as U,
    r as se
} from "./5b59f3e4-f9v1k69a0tdaqzc0.js";
import {
    a as ce,
    o as le,
    t as ue
} from "./4e7cf3cf-old492xav8khiceo.js";
import {
    a as W,
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
    y(), Y = _()
}));

function ge(e) {
    "use forget";
    let t = (0, _e.c)(7),
        {
            variant: n,
            children: i,
            className: a,
            size: o
        } = e,
        s = (o === void 0 ? `md` : o) === `sm` ? `px-1.5 py-0 text-[11px]` : `px-2 py-0.5 text-xs`,
        c = ye[n],
        l;
    t[0] !== a || t[1] !== s || t[2] !== c ? (l = r(`inline-flex items-center rounded-full`, s, c, a), t[0] = a, t[1] = s, t[2] = c, t[3] = l) : l = t[3];
    let u;
    return t[4] !== i || t[5] !== l ? (u = (0, ve.jsx)(`span`, {
        className: l,
        children: i
    }), t[4] = i, t[5] = l, t[6] = u) : u = t[6], u
}
var _e, ve, ye, be = e((() => {
    _e = x(), a(), ve = _(), ye = {
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
        i = c(),
        a = ne(),
        o = l(),
        s;
    t[0] === o ? s = t[1] : (s = o?.getWorkspaceId(), t[0] = o, t[1] = s);
    let u = s,
        d = o?.normalizedAccountUserId,
        [f, p] = (0, Ee.useState)(``),
        [ee, m] = (0, Ee.useState)(!1),
        g = h(),
        {
            data: _,
            isLoading: v
        } = ie(u ?? void 0, 0, f, 100);
    g?.email, g?.name;
    let y = d ?? ``,
        b = g?.email ?? ``,
        x = g?.name ?? void 0,
        S;
    t[2] !== y || t[3] !== b || t[4] !== x ? (S = {
        id: y,
        email: b,
        name: x
    }, t[2] = y, t[3] = b, t[4] = x, t[5] = S) : S = t[5];
    let C = S,
        w;
    t[6] !== C || t[7] !== _?.items ? (w = () => {
        let e = (_?.items ?? []).map(we).filter(Ce);
        return C.id && C.email && (e.some(e => e.id === C.id || e.email.toLowerCase() === C.email.toLowerCase()) || e.unshift(C)), e
    }, t[6] = C, t[7] = _?.items, t[8] = w) : w = t[8], _?.items;
    let T;
    t[9] === w ? T = t[10] : (T = w(), t[9] = w, t[10] = T);
    let ae = T,
        D = n.assignee_id ?? `none`,
        O = D === `none` ? `` : n.assignee?.email ?? ``,
        A = D === `none` ? void 0 : n.assignee?.name ?? ``,
        j;
    t[11] !== O || t[12] !== A || t[13] !== D ? (j = D === `none` ? `—` : xe({
        name: A,
        email: O
    }), t[11] = O, t[12] = A, t[13] = D, t[14] = j) : j = t[14];
    let M = j,
        N;
    t[15] !== n.hid || t[16] !== n.id || t[17] !== n.version || t[18] !== a || t[19] !== r || t[20] !== i ? (N = async e => {
        m(!0);
        try {
            let t = await I.safePatch(`/aardvark/scan-findings/{id}`, {
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
            le(r, n.hid, t), ce(r, n.hid, t), m(!1), i.successNeutral(a.formatMessage({
                id: `aardvark.toast.assigneeUpdated`,
                defaultMessage: `Assignee updated`
            }), {
                duration: 5,
                hasCloseButton: !0
            })
        } catch (e) {
            let t = e;
            m(!1);
            let n = t instanceof Error ? t : Error(String(t)),
                r = a.formatMessage(z.assigneeUpdate, {
                    details: n.message
                });
            i.danger(r, {
                duration: 5,
                hasCloseButton: !0
            })
        }
    }, t[15] = n.hid, t[16] = n.id, t[17] = n.version, t[18] = a, t[19] = r, t[20] = i, t[21] = N) : N = t[21];
    let P = N;
    if (ee) {
        let e;
        t[22] !== M || t[23] !== D ? (e = D === `none` ? (0, X.jsx)(k, {
            className: `icon-sm`,
            "aria-hidden": !0
        }) : M, t[22] = M, t[23] = D, t[24] = e) : e = t[24];
        let n;
        return t[25] !== O || t[26] !== e ? (n = (0, X.jsx)(`button`, {
            disabled: !0,
            title: O,
            className: `border-token-border-light bg-token-bg-primary inline-flex h-8 w-8 cursor-not-allowed items-center justify-center rounded-full border text-[11px] font-semibold opacity-60`,
            "aria-disabled": !0,
            children: e
        }), t[25] = O, t[26] = e, t[27] = n) : n = t[27], n
    }
    let F;
    t[28] !== M || t[29] !== D ? (F = D === `none` ? (0, X.jsx)(k, {
        className: `icon-sm`,
        "aria-hidden": !0
    }) : M, t[28] = M, t[29] = D, t[30] = F) : F = t[30];
    let L;
    t[31] !== O || t[32] !== v || t[33] !== F ? (L = (0, X.jsx)(`button`, {
        title: O,
        className: `border-token-border-light bg-token-bg-primary inline-flex h-8 w-8 items-center justify-center rounded-full border text-[11px] font-semibold`,
        "aria-busy": v,
        children: F
    }), t[31] = O, t[32] = v, t[33] = F, t[34] = L) : L = t[34];
    let R;
    t[35] === Symbol.for(`react.memo_cache_sentinel`) ? (R = e => p(e.target.value), t[35] = R) : R = t[35];
    let oe;
    t[36] === a ? oe = t[37] : (oe = a.formatMessage(H.search), t[36] = a, t[37] = oe);
    let B;
    t[38] === a ? B = t[39] : (B = a.formatMessage(H.search), t[38] = a, t[39] = B);
    let V;
    t[40] !== f || t[41] !== oe || t[42] !== B ? (V = (0, X.jsx)(E, {
        color: `search`,
        name: `assignee-search`,
        type: `text`,
        value: f,
        onChange: R,
        placeholder: oe,
        ariaLabel: B,
        className: `text-token-text-tertiary flex h-8 w-full items-center rounded-sm`,
        inputClassName: `text-token-text-primary w-full`,
        containerInputClassName: `w-full`
    }), t[40] = f, t[41] = oe, t[42] = B, t[43] = V) : V = t[43];
    let U;
    t[44] === P ? U = t[45] : (U = () => P(null), t[44] = P, t[45] = U);
    let ue = `hover:bg-token-bg-tertiary flex w-full items-center gap-2 rounded-sm px-2 py-1 text-start text-sm ${D===`none`?`bg-token-bg-tertiary`:``}`,
        W;
    t[46] === Symbol.for(`react.memo_cache_sentinel`) ? (W = (0, X.jsx)(`div`, {
        className: `border-token-border-light bg-token-bg-primary inline-flex h-7 w-7 items-center justify-center rounded-full border text-[11px] font-semibold`,
        children: (0, X.jsx)(k, {
            className: `icon-sm`,
            "aria-hidden": !0
        })
    }), t[46] = W) : W = t[46];
    let G;
    t[47] === a ? G = t[48] : (G = a.formatMessage(se.none), t[47] = a, t[48] = G);
    let de;
    t[49] === G ? de = t[50] : (de = (0, X.jsx)(`div`, {
        className: `flex flex-col`,
        children: (0, X.jsx)(`span`, {
            className: `leading-4`,
            children: G
        })
    }), t[49] = G, t[50] = de);
    let fe;
    t[51] !== U || t[52] !== ue || t[53] !== de ? (fe = (0, X.jsxs)(`button`, {
        type: `button`,
        onClick: U,
        className: ue,
        children: [W, de]
    }, `none`), t[51] = U, t[52] = ue, t[53] = de, t[54] = fe) : fe = t[54];
    let pe;
    if (t[55] !== ae || t[56] !== P || t[57] !== D) {
        let e;
        t[59] !== P || t[60] !== D ? (e = e => {
            let t = xe({
                name: e.name,
                email: e.email
            });
            return (0, X.jsxs)(`button`, {
                type: `button`,
                onClick: () => P(e.email),
                className: `hover:bg-token-bg-tertiary flex w-full items-center gap-2 rounded-sm px-2 py-1 text-start text-sm ${e.id===D?`bg-token-bg-tertiary`:``}`,
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
        }, t[59] = P, t[60] = D, t[61] = e) : e = t[61], pe = ae.map(e), t[55] = ae, t[56] = P, t[57] = D, t[58] = pe
    } else pe = t[58];
    let K;
    t[62] !== fe || t[63] !== pe ? (K = (0, X.jsxs)(`div`, {
        className: `mt-2 max-h-60 overflow-y-auto`,
        children: [fe, pe]
    }), t[62] = fe, t[63] = pe, t[64] = K) : K = t[64];
    let q;
    t[65] !== V || t[66] !== K ? (q = (0, X.jsxs)(`div`, {
        className: `p-2.5`,
        children: [V, K]
    }), t[65] = V, t[66] = K, t[67] = q) : q = t[67];
    let me;
    return t[68] !== L || t[69] !== q ? (me = (0, X.jsx)(re, {
        triggerButton: L,
        children: q
    }), t[68] = L, t[69] = q, t[70] = me) : me = t[70], me
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
    Te = x(), V(), ue(), F(), D(), T(), A(), C(), i(), u(), g(), b(), Ee = t(y()), v(), X = _()
}));

function Oe(e) {
    "use forget";
    let t = (0, Ae.c)(6),
        {
            level: n
        } = e,
        r = ne(),
        i = Me[n],
        a;
    t[0] !== r || t[1] !== n ? (a = r.formatMessage(B[n]), t[0] = r, t[1] = n, t[2] = a) : a = t[2];
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
    Ae = x(), be(), V(), v(), je = _(), Me = {
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
        a = ne(),
        l = n.criticality ?? `low`,
        u = te(),
        d = c(),
        [f, p] = (0, Ie.useState)(!1),
        [m, h] = (0, Ie.useState)(!1),
        [g, _] = (0, Ie.useState)(null),
        [v, y] = (0, Ie.useState)(``),
        b = (0, Ie.useId)(),
        x = (0, Ie.useId)(),
        S = n.hid ?? n.id ?? void 0,
        C;
    t[0] !== n.criticality || t[1] !== n.hid || t[2] !== n.id || t[3] !== n.version || t[4] !== S || t[5] !== a || t[6] !== r || t[7] !== u || t[8] !== i || t[9] !== d ? (C = async (e, t) => {
        p(!0);
        let o = e => {
                let t = e instanceof Error ? e : Error(String(e)),
                    n = a.formatMessage(z.criticalityUpdate, {
                        details: t.message
                    });
                return d.danger(n, {
                    duration: 5,
                    hasCloseButton: !0
                }), p(!1), !1
            },
            s = (t ?? ``).trim(),
            c = {
                version: n.version,
                criticality: e,
                criticality_reason: s
            },
            l = n.criticality,
            f = e;
        try {
            let e = await I.safePatch(`/aardvark/scan-findings/{id}`, {
                parameters: {
                    path: {
                        id: n.id
                    }
                },
                requestBody: c
            });
            return le(u, n.hid, e), ce(u, n.hid, e), d.successNeutral(a.formatMessage({
                id: `aardvark.toast.criticalityUpdated`,
                defaultMessage: `Criticality updated`
            }), {
                duration: 5,
                hasCloseButton: !0
            }), ee.logStructuredEvent(`AardvarkFindingCriticalityChanged`, {
                findingId: S,
                previousCriticality: l,
                nextCriticality: f,
                sourcePage: i
            }), r && r(), p(!1), !0
        } catch (e) {
            return o(e)
        }
    }, t[0] = n.criticality, t[1] = n.hid, t[2] = n.id, t[3] = n.version, t[4] = S, t[5] = a, t[6] = r, t[7] = u, t[8] = i, t[9] = d, t[10] = C) : C = t[10];
    let re = C,
        w;
    t[11] === l ? w = t[12] : (w = e => {
        e !== l && (_(e), y(``), h(!0))
    }, t[11] = l, t[12] = w);
    let T = w,
        ie = `flex min-w-0 items-center gap-2 ${f?`opacity-60`:``}`,
        E;
    t[13] === l ? E = t[14] : (E = (0, Z.jsx)(Oe, {
        level: l
    }), t[13] = l, t[14] = E);
    let D;
    t[15] !== ie || t[16] !== E ? (D = (0, Z.jsx)(`div`, {
        className: ie,
        children: E
    }), t[15] = ie, t[16] = E, t[17] = D) : D = t[17];
    let O;
    t[18] === Symbol.for(`react.memo_cache_sentinel`) ? (O = (0, Z.jsx)(j.Icon, {}), t[18] = O) : O = t[18];
    let k;
    t[19] === D ? k = t[20] : (k = (0, Z.jsxs)(`div`, {
        className: `flex w-full items-center justify-between gap-2`,
        children: [D, O]
    }), t[19] = D, t[20] = k);
    let A;
    t[21] !== f || t[22] !== k ? (A = (0, Z.jsx)(j.Trigger, {
        className: `border-token-border-light bg-token-bg-primary mr h-7 rounded-md border px-2 text-xs`,
        "aria-busy": f,
        children: k
    }), t[21] = f, t[22] = k, t[23] = A) : A = t[23];
    let M;
    t[24] === a ? M = t[25] : (M = ae(Le, e => (0, Z.jsxs)(j.Item, {
        value: e,
        children: [(0, Z.jsx)(Oe, {
            level: e
        }), (0, Z.jsx)(`span`, {
            className: `sr-only`,
            children: a.formatMessage(B[e])
        })]
    }, e)), t[24] = a, t[25] = M);
    let N;
    t[26] === M ? N = t[27] : (N = (0, Z.jsx)(j.Portal, {
        children: (0, Z.jsx)(j.Content, {
            align: `start`,
            className: `rounded-lg text-sm`,
            children: M
        })
    }), t[26] = M, t[27] = N);
    let P;
    t[28] !== l || t[29] !== f || t[30] !== T || t[31] !== N || t[32] !== A ? (P = (0, Z.jsxs)(j.Root, {
        value: l,
        onValueChange: T,
        disabled: f,
        children: [A, N]
    }), t[28] = l, t[29] = f, t[30] = T, t[31] = N, t[32] = A, t[33] = P) : P = t[33];
    let F;
    t[34] !== a || t[35] !== m || t[36] !== f || t[37] !== g || t[38] !== v || t[39] !== b || t[40] !== x || t[41] !== re ? (F = m && (0, Z.jsx)(s, {
        testId: `modal-criticality-reason`,
        isOpen: !0,
        shouldIgnoreClickOutside: !0,
        onClose: () => {
            h(!1), _(null), y(``)
        },
        title: a.formatMessage({
            id: `aardvark.findings.criticality.title`,
            defaultMessage: `Update criticality`
        }),
        showCloseButton: !0,
        primaryButton: (0, Z.jsx)(o.Button, {
            title: a.formatMessage({
                id: `aardvark.findings.criticality.save`,
                defaultMessage: `Save`
            }),
            color: `primary`,
            loading: f,
            onClick: async () => {
                g && await re(g, v) && (h(!1), _(null), y(``))
            }
        }),
        secondaryButton: (0, Z.jsx)(o.Button, {
            title: a.formatMessage({
                id: `aardvark.findings.criticality.cancel`,
                defaultMessage: `Cancel`
            }),
            color: `secondary`,
            onClick: () => {
                h(!1), _(null), y(``)
            }
        }),
        children: (0, Z.jsxs)(`div`, {
            className: `space-y-3`,
            children: [(0, Z.jsx)(`div`, {
                id: x,
                className: `text-token-text-secondary mt-1 text-sm`,
                children: a.formatMessage({
                    id: `aardvark.findings.criticality.prompt`,
                    defaultMessage: `Optionally share why you're changing the criticality.`
                })
            }), (0, Z.jsx)(`label`, {
                htmlFor: b,
                className: `sr-only`,
                children: a.formatMessage({
                    id: `aardvark.findings.criticality.reasonLabel`,
                    defaultMessage: `Reason (optional)`
                })
            }), (0, Z.jsx)(`textarea`, {
                id: b,
                "aria-describedby": x,
                value: v,
                onChange: e => y(e.target.value),
                className: `border-token-border-default bg-token-bg-primary text-token-text-primary placeholder:text-token-text-tertiary w-full rounded-lg border p-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none`,
                placeholder: a.formatMessage({
                    id: `aardvark.findings.criticality.placeholder`,
                    defaultMessage: `Add context (optional)`
                }),
                rows: 4
            })]
        })
    }), t[34] = a, t[35] = m, t[36] = f, t[37] = g, t[38] = v, t[39] = b, t[40] = x, t[41] = re, t[42] = F) : F = t[42];
    let L;
    return t[43] !== P || t[44] !== F ? (L = (0, Z.jsxs)(Z.Fragment, {
        children: [P, F]
    }), t[43] = P, t[44] = F, t[45] = L) : L = t[45], L
}
var Fe, Ie, Z, Le, Re = e((() => {
    Fe = x(), Ne(), V(), ue(), F(), n(), m(), M(), g(), f(), b(), O(), Ie = t(y()), v(), Z = _(), Le = [`critical`, `high`, `medium`, `low`]
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
        let i = await I.safePatch(`/aardvark/scan-findings/{id}`, {
            parameters: {
                path: {
                    id: e
                }
            },
            requestBody: n
        });
        le(s, t, i), ce(s, t, i), a(!1), c.successNeutral(o.formatMessage({
            id: `aardvark.toast.statusUpdated`,
            defaultMessage: `Status updated`
        }), {
            duration: 5,
            hasCloseButton: !0
        }), r && r(i)
    } catch (e) {
        a(!1);
        let t = e instanceof Error ? e : Error(String(e)),
            n = o.formatMessage(z.statusUpdate, {
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
            onStatusChangeSuccess: i,
            sourcePage: a,
            variant: l
        } = e,
        u = l === void 0 ? `default` : l,
        d = ne(),
        f = n.status,
        p = te(),
        m = c(),
        [h, g] = (0, He.useState)(!1),
        [_, v] = (0, He.useState)(!1),
        [y, b] = (0, He.useState)(null),
        [x, S] = (0, He.useState)(``),
        C = n.hid ?? n.id ?? void 0,
        re;
    t[0] !== f || t[1] !== C || t[2] !== a ? (re = e => {
        ee.logStructuredEvent(`AardvarkFindingStatusChanged`, {
            findingId: C,
            previousStatus: f ?? void 0,
            nextStatus: e ?? void 0,
            sourcePage: a
        })
    }, t[0] = f, t[1] = C, t[2] = a, t[3] = re) : re = t[3];
    let w = re,
        T;
    t[4] !== n.hid || t[5] !== n.id || t[6] !== n.version || t[7] !== d || t[8] !== w || t[9] !== i || t[10] !== p || t[11] !== m ? (T = async e => {
        if (e === `wontfix` || e === `fixed` || e === `duplicate`) {
            b(e), v(!0);
            return
        }
        await ze({
            id: n.id,
            hid: n.hid,
            payload: {
                version: n.version,
                status: e
            },
            setIsSaving: g,
            intl: d,
            queryClient: p,
            toaster: m,
            onSuccess: () => {
                i?.(), w(e)
            }
        })
    }, t[4] = n.hid, t[5] = n.id, t[6] = n.version, t[7] = d, t[8] = w, t[9] = i, t[10] = p, t[11] = m, t[12] = T) : T = t[12];
    let ie = T,
        E = u === `sidebar` ? `text-token-text-primary hover:bg-token-bg-secondary keyboard-focused:bg-token-bg-secondary h-auto rounded-md border-0 bg-transparent px-2 py-1 text-sm font-medium shadow-none` : `border-token-border-light bg-token-bg-primary mr h-7 rounded-md border px-2 text-xs`,
        D;
    t[13] === E ? D = t[14] : (D = r(E), t[13] = E, t[14] = D);
    let O = u === `sidebar` ? `gap-1` : `w-full`,
        k;
    t[15] === O ? k = t[16] : (k = r(`flex items-center justify-between`, O), t[15] = O, t[16] = k);
    let A = u === `sidebar` && `text-end`,
        M;
    t[17] === A ? M = t[18] : (M = r(`truncate`, A), t[17] = A, t[18] = M);
    let N;
    t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (N = (0, Q.jsx)(j.Value, {}), t[19] = N) : N = t[19];
    let P;
    t[20] === M ? P = t[21] : (P = (0, Q.jsx)(`div`, {
        className: M,
        children: N
    }), t[20] = M, t[21] = P);
    let F;
    t[22] === Symbol.for(`react.memo_cache_sentinel`) ? (F = (0, Q.jsx)(j.Icon, {}), t[22] = F) : F = t[22];
    let I;
    t[23] !== P || t[24] !== k ? (I = (0, Q.jsxs)(`div`, {
        className: k,
        children: [P, F]
    }), t[23] = P, t[24] = k, t[25] = I) : I = t[25];
    let L;
    t[26] !== I || t[27] !== D ? (L = (0, Q.jsx)(j.Trigger, {
        className: D,
        children: I
    }), t[26] = I, t[27] = D, t[28] = L) : L = t[28];
    let R = u === `sidebar` ? `end` : `start`,
        z;
    t[29] === d ? z = t[30] : (z = ae(oe, (e, t) => (0, Q.jsx)(j.Item, {
        value: t,
        children: d.formatMessage(e, {
            status: t
        })
    }, t)), t[29] = d, t[30] = z);
    let B;
    t[31] !== R || t[32] !== z ? (B = (0, Q.jsx)(j.Portal, {
        children: (0, Q.jsx)(j.Content, {
            align: R,
            className: `rounded-lg text-sm`,
            children: z
        })
    }), t[31] = R, t[32] = z, t[33] = B) : B = t[33];
    let V;
    t[34] !== f || t[35] !== h || t[36] !== ie || t[37] !== L || t[38] !== B ? (V = (0, Q.jsxs)(j.Root, {
        value: f,
        onValueChange: ie,
        disabled: h,
        children: [L, B]
    }), t[34] = f, t[35] = h, t[36] = ie, t[37] = L, t[38] = B, t[39] = V) : V = t[39];
    let H;
    t[40] !== n.hid || t[41] !== n.id || t[42] !== n.version || t[43] !== d || t[44] !== _ || t[45] !== h || t[46] !== w || t[47] !== i || t[48] !== y || t[49] !== p || t[50] !== x || t[51] !== m ? (H = _ && (0, Q.jsx)(s, {
        testId: `modal-wontfix-reason`,
        isOpen: !0,
        shouldIgnoreClickOutside: !0,
        onClose: () => {
            v(!1), S(``), b(null)
        },
        title: y === `fixed` ? d.formatMessage({
            id: `aardvark.findings.fixed.title`,
            defaultMessage: `Add PR link`
        }) : y === `duplicate` ? d.formatMessage({
            id: `aardvark.findings.duplicate.title`,
            defaultMessage: `Mark as duplicate`
        }) : d.formatMessage({
            id: `aardvark.findings.wontfix.title`,
            defaultMessage: `Add reason`
        }),
        showCloseButton: !0,
        primaryButton: (0, Q.jsx)(o.Button, {
            title: y === `fixed` ? d.formatMessage({
                id: `aardvark.findings.fixed.save`,
                defaultMessage: `Save`
            }) : d.formatMessage({
                id: `aardvark.findings.wontfix.save`,
                defaultMessage: `Save`
            }),
            color: `primary`,
            loading: h,
            onClick: async () => {
                if (y) {
                    if (!x.trim()) {
                        m.danger(y === `fixed` ? d.formatMessage({
                            id: `aardvark.findings.fixed.required`,
                            defaultMessage: `Please paste a PR link`
                        }) : y === `duplicate` ? d.formatMessage({
                            id: `aardvark.findings.duplicate.required`,
                            defaultMessage: `Please paste a link to the original scan finding`
                        }) : d.formatMessage({
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
                            status: y,
                            resolution_reason: x.trim()
                        },
                        setIsSaving: g,
                        intl: d,
                        queryClient: p,
                        toaster: m,
                        onSuccess: () => {
                            v(!1), S(``), b(null), i?.(), w(y)
                        }
                    })
                }
            }
        }),
        secondaryButton: (0, Q.jsx)(o.Button, {
            title: y === `fixed` ? d.formatMessage({
                id: `aardvark.findings.fixed.cancel`,
                defaultMessage: `Cancel`
            }) : d.formatMessage({
                id: `aardvark.findings.wontfix.cancel`,
                defaultMessage: `Cancel`
            }),
            color: `secondary`,
            onClick: () => {
                v(!1), S(``), b(null)
            }
        }),
        children: (0, Q.jsxs)(`div`, {
            className: `space-y-3`,
            children: [(0, Q.jsx)(`div`, {
                children: (0, Q.jsx)(`div`, {
                    className: `text-token-text-secondary mt-1 text-sm`,
                    children: y === `fixed` ? d.formatMessage({
                        id: `aardvark.findings.fixed.prompt`,
                        defaultMessage: `Which PR merged the fix? Paste the URL.`
                    }) : y === `duplicate` ? d.formatMessage({
                        id: `aardvark.findings.duplicate.prompt`,
                        defaultMessage: `Which scan finding does this duplicate? Paste a link to the original finding.`
                    }) : d.formatMessage({
                        id: `aardvark.findings.wontfix.prompt`,
                        defaultMessage: `Why won't this be fixed?`
                    })
                })
            }), (0, Q.jsx)(`div`, {
                children: (0, Q.jsx)(`textarea`, {
                    value: x,
                    onChange: e => S(e.target.value),
                    className: `border-token-border-default bg-token-bg-primary text-token-text-primary placeholder:text-token-text-tertiary w-full rounded-lg border p-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none`,
                    placeholder: y === `fixed` ? d.formatMessage({
                        id: `aardvark.findings.fixed.placeholder`,
                        defaultMessage: `Paste PR URL (required)`
                    }) : y === `duplicate` ? d.formatMessage({
                        id: `aardvark.findings.duplicate.placeholder`,
                        defaultMessage: `Paste link (required)`
                    }) : d.formatMessage({
                        id: `aardvark.findings.wontfix.placeholder`,
                        defaultMessage: `Add a short reason (required)`
                    }),
                    rows: 5
                })
            })]
        })
    }), t[40] = n.hid, t[41] = n.id, t[42] = n.version, t[43] = d, t[44] = _, t[45] = h, t[46] = w, t[47] = i, t[48] = y, t[49] = p, t[50] = x, t[51] = m, t[52] = H) : H = t[52];
    let U;
    return t[53] !== V || t[54] !== H ? (U = (0, Q.jsxs)(Q.Fragment, {
        children: [V, H]
    }), t[53] = V, t[54] = H, t[55] = U) : U = t[55], U
}
var Ve, He, Q, Ue = e((() => {
    Ve = x(), V(), ue(), F(), n(), m(), M(), g(), f(), b(), a(), O(), He = t(y()), v(), Q = _()
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
    return t.isSecurityRelated && n.push(e.formatMessage(U.security)), t.isPrivacyRelated && n.push(e.formatMessage(U.privacy)), t.isValidated && n.push(e.formatMessage(U.validated)), t.hasPatch && n.push(e.formatMessage(U.patch)), t.hasAttackPath && n.push(e.formatMessage(U.attackpath)), n.length === 0 ? e.formatMessage({
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
    let r = L({
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
    n.push(``), n.push(`# Metadata`), n.push(`Repo: ${q(e.repo_url??``)||`N/A`}`), n.push(`Commit: ${K(a)||`N/A`}`), n.push(`Author: ${We(e.commit_analysis?.author_email)||`N/A`}`), n.push(`Created: ${W(e.created_at)||`N/A`}`);
    let l = We(e.assignee_email) || We(e?.assignee?.email),
        u = We(e?.assignee?.name),
        d = u && l ? `${u} <${l}>` : u || l;
    n.push(`Assignee: ${d||`Unassigned`}`), n.push(`Signals: ${Ke(t,i)}`), e.resolution_reason && n.push(`Resolution: ${e.resolution_reason}`), o.length > 0 && (n.push(``), n.push(`# Summary`), n.push(...o)), (s != null || c) && (n.push(``), n.push(`# CVSS`), s != null && n.push(`Score: ${s}`), c && n.push(c));
    let f = e.commit_analysis?.validation_report || e?.commit_analysis?.validation_str,
        p = e.commit_analysis?.validation_rubric;
    (p || f) && (n.push(``), n.push(`# Validation`), p && (n.push(`## Rubric`), n.push(p)), f && (n.push(`## Report`), n.push(String(f))));
    let ee = Je(e);
    ee.length > 0 && (n.push(``), n.push(`# Evidence`), n.push(...ee));
    let m = Xe(e);
    m ? (n.push(``), n.push(`Proposed patch:`), n.push(m)) : e.proposed_patch && (n.push(``), n.push(`Proposed patch: (no diff available)`));
    let h = e.commit_analysis?.attack_path_analysis;
    if (h) {
        n.push(``), n.push(`# Attack-path analysis`);
        let e = [`Final: ${h.adjusted_criticality_final||h.severity||h.original_severity||`unknown`}`, h.adjustment_decider ? `Decider: ${h.adjustment_decider}` : null, h.matrix_severity ? `Matrix severity: ${h.matrix_severity}` : null, h.policy_adjusted_criticality ? `Policy adjusted: ${h.policy_adjusted_criticality}` : null].filter(Boolean);
        if (e.length > 0 && n.push(e.join(` | `)), h.adjustment_reason && (n.push(`## Rationale`), n.push(h.adjustment_reason)), h.likelihood || h.impact) {
            let e = h.impact ? `${h.impact.level??`unknown`}${h.impact.why?` - ${h.impact.why}`:``}` : null,
                t = h.likelihood ? `${h.likelihood.level??`unknown`}${h.likelihood.why?` - ${h.likelihood.why}`:``}` : null;
            t && (n.push(`## Likelihood`), n.push(t)), e && (n.push(`## Impact`), n.push(e))
        }
        let t = [...h.assumptions ?? [], ...h.facts?.precondition?.requires ?? []];
        if (t.length > 0) {
            n.push(`## Assumptions`);
            for (let e of t) n.push(`- ${e}`)
        }
        h.attack_path?.ascii && (n.push(`## Path`), n.push(h.attack_path.ascii));
        let r = Ye(h.evidence);
        if (r.length > 0 && (n.push(`## Path evidence`), n.push(...r)), h.narrative && (n.push(`## Narrative`), n.push(h.narrative)), h.controls && h.controls.length > 0) {
            n.push(`## Controls`);
            for (let e of h.controls) n.push(`- ${e}`)
        }
        if (h.blindspots && h.blindspots.length > 0) {
            n.push(`## Blindspots`);
            for (let e of h.blindspots) n.push(`- ${e}`)
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
            children: e.formatMessage(U.security)
        }), o && (0, $.jsx)(ge, {
            variant: u(`privacy`, `neutral`),
            size: r,
            children: e.formatMessage(U.privacy)
        }), s && (0, $.jsx)(ge, {
            variant: u(`validated`, `neutral`),
            size: r,
            children: e.formatMessage(U.validated)
        }), c && (0, $.jsx)(ge, {
            variant: u(`patch`, `neutral`),
            size: r,
            children: e.formatMessage(U.patch)
        }), l && (0, $.jsx)(ge, {
            variant: u(`attackpath`, `neutral`),
            size: r,
            children: e.formatMessage(U.attackpath)
        })]
    })
}

function $e({
    finding: e
}) {
    let t = ne(),
        n = c(),
        r = e,
        i = Qe({
            intl: t,
            signals: G(r)
        }),
        a = r.commit_analysis?.commit_hash ?? ``,
        o = pe(r.repo_url, a),
        s = `border-token-border-light hover:bg-token-bg-elevated-secondary inline-flex min-h-[3.25rem] w-full items-center justify-center rounded border px-3 py-2 text-center text-sm leading-tight`;
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
                children: W(r.commit_analysis?.author_date ?? null)
            }), (0, $.jsx)(J, {
                label: t.formatMessage({
                    id: `aardvark.findings.committedAt`,
                    defaultMessage: `Committed at`
                }),
                children: W(r.commit_analysis?.committer_date ?? null)
            }), (0, $.jsx)(J, {
                label: t.formatMessage({
                    id: `aardvark.findings.createdAt`,
                    defaultMessage: `Detected at`
                }),
                children: W(r.created_at)
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
            }), (0, $.jsx)(S, {
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
            }), (0, $.jsx)(S, {
                className: s,
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
    let t = ne();
    return (0, $.jsxs)(`a`, {
        href: e,
        target: `_blank`,
        rel: `noopener noreferrer`,
        className: `border-token-border-light hover:bg-token-bg-elevated-secondary inline-flex min-h-[3.25rem] w-full items-center justify-center rounded border px-3 py-2 text-center text-sm leading-tight`,
        children: [(0, $.jsx)(P, {
            className: `icon-sm me-1`,
            "aria-hidden": !0
        }), t.formatMessage({
            id: `aardvark.actions.openGithub`,
            defaultMessage: `Open in GitHub`
        })]
    })
}
var $, tt = e((() => {
    be(), De(), Re(), he(), Ue(), fe(), V(), w(), N(), g(), p(), R(), v(), $ = _()
}));
export {
    he as _, Be as a, Re as c, Ne as d, Se as f, me as g, be as h, Qe as i, Oe as l, ge as m, Ze as n, Ue as o, De as p, tt as r, Pe as s, $e as t, ke as u
};
//# sourceMappingURL=abaf64f2-k8e73khhewn8ecld.js.map
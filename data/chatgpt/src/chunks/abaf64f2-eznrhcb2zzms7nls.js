import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Fw as n,
    J5 as r,
    L1 as i,
    Nw as a,
    Sw as o,
    VU as s,
    X1 as c,
    Y5 as l,
    _R as u,
    _nt as ee,
    aC as d,
    oC as f,
    ww as p,
    yR as m,
    ynt as h,
    zU as g
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as _,
    N as te,
    Rn as v,
    Vn as y,
    s as b,
    wn as x,
    zn as ne
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    C6t as re,
    MHn as S,
    PHn as C,
    Rbt as w,
    Ust as T,
    Wst as E,
    _6t as D,
    dVt as ie,
    uVt as O,
    zbt as k
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Xc as A,
    Zc as j
} from "./30901919-7dzdc1ou0jtwkwpt.js";
import {
    f_ as M,
    p_ as N
} from "./8b34dbc2-k1zgxrtsww83602u.js";
import {
    Ht as P,
    Vt as F
} from "./c470f5ab-d4g7lc53n1e1ao7o.js";
import {
    r as I,
    t as L
} from "./948fe603-cpky6ejpmy9ea971.js";
import {
    r as R,
    t as z
} from "./7c213d4e-eqeqfh8258y9rf8i.js";
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
} from "./4e7cf3cf-jjmswzibvit67skx.js";
import {
    a as G,
    d as K,
    h as ue,
    p as de,
    r as fe,
    x as q,
    y as J
} from "./6fd89734-me0mlo15lw6zwz6w.js";

function pe({
    title: e,
    children: t,
    className: n = ``
}) {
    return (0, me.jsx)(`div`, {
        className: `border-token-border-light bg-token-main-surface-primary ring-token-border-light/60 overflow-hidden rounded-lg border p-4 shadow ring-1 shadow-black/20 md:p-5 dark:shadow-black/60 dark:ring-white/10 ${n}`,
        children: (0, me.jsxs)(`section`, {
            children: [e && (0, me.jsx)(`div`, {
                className: `text-title-small mb-5 font-semibold tracking-wide`,
                children: e
            }), (0, me.jsx)(`div`, {
                className: `grid grid-cols-1 gap-3`,
                children: t
            })]
        })
    })
}

function Y({
    label: e,
    children: t
}) {
    return (0, me.jsxs)(`div`, {
        className: `grid grid-cols-2 items-start gap-1 text-sm md:grid-cols-[auto,1fr] md:gap-2`,
        children: [(0, me.jsx)(`div`, {
            className: `text-token-text-tertiary md:w-44`,
            children: e
        }), (0, me.jsx)(`div`, {
            className: `w-full min-w-0 overflow-hidden break-words hyphens-auto`,
            children: t
        })]
    })
}
var me, he = e((() => {
    y(), me = _()
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
    _e = x(), l(), ve = _(), ye = {
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
        a = ne(),
        o = c(),
        l;
    t[0] === o ? l = t[1] : (l = o?.getWorkspaceId(), t[0] = o, t[1] = l);
    let u = l,
        ee = o?.normalizedAccountUserId,
        [d, f] = (0, Ee.useState)(``),
        [p, h] = (0, Ee.useState)(!1),
        g = m(),
        {
            data: _,
            isLoading: v
        } = re(u ?? void 0, 0, d, 100);
    g?.email, g?.name;
    let y = ee ?? ``,
        b = g?.email ?? ``,
        x = g?.name ?? void 0,
        C;
    t[2] !== y || t[3] !== b || t[4] !== x ? (C = {
        id: y,
        email: b,
        name: x
    }, t[2] = y, t[3] = b, t[4] = x, t[5] = C) : C = t[5];
    let w = C,
        E;
    t[6] !== w || t[7] !== _?.items ? (E = () => {
        let e = (_?.items ?? []).map(we).filter(Ce);
        return w.id && w.email && (e.some(e => e.id === w.id || e.email.toLowerCase() === w.email.toLowerCase()) || e.unshift(w)), e
    }, t[6] = w, t[7] = _?.items, t[8] = E) : E = t[8], _?.items;
    let D;
    t[9] === E ? D = t[10] : (D = E(), t[9] = E, t[10] = D);
    let ie = D,
        O = n.assignee_id ?? `none`,
        k = O === `none` ? `` : n.assignee?.email ?? ``,
        j = O === `none` ? void 0 : n.assignee?.name ?? ``,
        M;
    t[11] !== k || t[12] !== j || t[13] !== O ? (M = O === `none` ? `—` : xe({
        name: j,
        email: k
    }), t[11] = k, t[12] = j, t[13] = O, t[14] = M) : M = t[14];
    let N = M,
        P;
    t[15] !== n.hid || t[16] !== n.id || t[17] !== n.version || t[18] !== a || t[19] !== r || t[20] !== i ? (P = async e => {
        h(!0);
        try {
            let t = await L.safePatch(`/aardvark/scan-findings/{id}`, {
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
    }, t[15] = n.hid, t[16] = n.id, t[17] = n.version, t[18] = a, t[19] = r, t[20] = i, t[21] = P) : P = t[21];
    let F = P;
    if (p) {
        let e;
        t[22] !== N || t[23] !== O ? (e = O === `none` ? (0, X.jsx)(A, {
            className: `icon-sm`,
            "aria-hidden": !0
        }) : N, t[22] = N, t[23] = O, t[24] = e) : e = t[24];
        let n;
        return t[25] !== k || t[26] !== e ? (n = (0, X.jsx)(`button`, {
            disabled: !0,
            title: k,
            className: `border-token-border-light bg-token-bg-primary inline-flex h-8 w-8 cursor-not-allowed items-center justify-center rounded-full border text-[11px] font-semibold opacity-60`,
            "aria-disabled": !0,
            children: e
        }), t[25] = k, t[26] = e, t[27] = n) : n = t[27], n
    }
    let I;
    t[28] !== N || t[29] !== O ? (I = O === `none` ? (0, X.jsx)(A, {
        className: `icon-sm`,
        "aria-hidden": !0
    }) : N, t[28] = N, t[29] = O, t[30] = I) : I = t[30];
    let R;
    t[31] !== k || t[32] !== v || t[33] !== I ? (R = (0, X.jsx)(`button`, {
        title: k,
        className: `border-token-border-light bg-token-bg-primary inline-flex h-8 w-8 items-center justify-center rounded-full border text-[11px] font-semibold`,
        "aria-busy": v,
        children: I
    }), t[31] = k, t[32] = v, t[33] = I, t[34] = R) : R = t[34];
    let z;
    t[35] === Symbol.for(`react.memo_cache_sentinel`) ? (z = e => f(e.target.value), t[35] = z) : z = t[35];
    let ae;
    t[36] === a ? ae = t[37] : (ae = a.formatMessage(U.search), t[36] = a, t[37] = ae);
    let V;
    t[38] === a ? V = t[39] : (V = a.formatMessage(U.search), t[38] = a, t[39] = V);
    let H;
    t[40] !== d || t[41] !== ae || t[42] !== V ? (H = (0, X.jsx)(T, {
        color: `search`,
        name: `assignee-search`,
        type: `text`,
        value: d,
        onChange: z,
        placeholder: ae,
        ariaLabel: V,
        className: `text-token-text-tertiary flex h-8 w-full items-center rounded-sm`,
        inputClassName: `text-token-text-primary w-full`,
        containerInputClassName: `w-full`
    }), t[40] = d, t[41] = ae, t[42] = V, t[43] = H) : H = t[43];
    let W;
    t[44] === F ? W = t[45] : (W = () => F(null), t[44] = F, t[45] = W);
    let le = `hover:bg-token-bg-tertiary flex w-full items-center gap-2 rounded-sm px-2 py-1 text-start text-sm ${O===`none`?`bg-token-bg-tertiary`:``}`,
        G;
    t[46] === Symbol.for(`react.memo_cache_sentinel`) ? (G = (0, X.jsx)(`div`, {
        className: `border-token-border-light bg-token-bg-primary inline-flex h-7 w-7 items-center justify-center rounded-full border text-[11px] font-semibold`,
        children: (0, X.jsx)(A, {
            className: `icon-sm`,
            "aria-hidden": !0
        })
    }), t[46] = G) : G = t[46];
    let K;
    t[47] === a ? K = t[48] : (K = a.formatMessage(oe.none), t[47] = a, t[48] = K);
    let ue;
    t[49] === K ? ue = t[50] : (ue = (0, X.jsx)(`div`, {
        className: `flex flex-col`,
        children: (0, X.jsx)(`span`, {
            className: `leading-4`,
            children: K
        })
    }), t[49] = K, t[50] = ue);
    let de;
    t[51] !== W || t[52] !== le || t[53] !== ue ? (de = (0, X.jsxs)(`button`, {
        type: `button`,
        onClick: W,
        className: le,
        children: [G, ue]
    }, `none`), t[51] = W, t[52] = le, t[53] = ue, t[54] = de) : de = t[54];
    let fe;
    if (t[55] !== ie || t[56] !== F || t[57] !== O) {
        let e;
        t[59] !== F || t[60] !== O ? (e = e => {
            let t = xe({
                name: e.name,
                email: e.email
            });
            return (0, X.jsxs)(`button`, {
                type: `button`,
                onClick: () => F(e.email),
                className: `hover:bg-token-bg-tertiary flex w-full items-center gap-2 rounded-sm px-2 py-1 text-start text-sm ${e.id===O?`bg-token-bg-tertiary`:``}`,
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
        }, t[59] = F, t[60] = O, t[61] = e) : e = t[61], fe = ie.map(e), t[55] = ie, t[56] = F, t[57] = O, t[58] = fe
    } else fe = t[58];
    let q;
    t[62] !== de || t[63] !== fe ? (q = (0, X.jsxs)(`div`, {
        className: `mt-2 max-h-60 overflow-y-auto`,
        children: [de, fe]
    }), t[62] = de, t[63] = fe, t[64] = q) : q = t[64];
    let J;
    t[65] !== H || t[66] !== q ? (J = (0, X.jsxs)(`div`, {
        className: `p-2.5`,
        children: [H, q]
    }), t[65] = H, t[66] = q, t[67] = J) : J = t[67];
    let pe;
    return t[68] !== R || t[69] !== J ? (pe = (0, X.jsx)(S, {
        triggerButton: R,
        children: J
    }), t[68] = R, t[69] = J, t[70] = pe) : pe = t[70], pe
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
    Te = x(), H(), le(), I(), D(), C(), j(), E(), i(), u(), g(), b(), Ee = t(y()), v(), X = _()
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
    Ae = x(), be(), H(), v(), je = _(), Me = {
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
        c = ne(),
        l = n.criticality ?? `low`,
        u = te(),
        d = s(),
        [f, p] = (0, Ie.useState)(!1),
        [m, h] = (0, Ie.useState)(!1),
        [g, _] = (0, Ie.useState)(null),
        [v, y] = (0, Ie.useState)(``),
        b = (0, Ie.useId)(),
        x = (0, Ie.useId)(),
        re = n.hid ?? n.id ?? void 0,
        S;
    t[0] !== n.criticality || t[1] !== n.hid || t[2] !== n.id || t[3] !== n.version || t[4] !== re || t[5] !== c || t[6] !== r || t[7] !== u || t[8] !== i || t[9] !== d ? (S = async (e, t) => {
        p(!0);
        let a = e => {
                let t = e instanceof Error ? e : Error(String(e)),
                    n = c.formatMessage(B.criticalityUpdate, {
                        details: t.message
                    });
                return d.danger(n, {
                    duration: 5,
                    hasCloseButton: !0
                }), p(!1), !1
            },
            o = (t ?? ``).trim(),
            s = {
                version: n.version,
                criticality: e,
                criticality_reason: o
            },
            l = n.criticality,
            f = e;
        try {
            let e = await L.safePatch(`/aardvark/scan-findings/{id}`, {
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
            }), ee.logStructuredEvent(`AardvarkFindingCriticalityChanged`, {
                findingId: re,
                previousCriticality: l,
                nextCriticality: f,
                sourcePage: i
            }), r && r(), p(!1), !0
        } catch (e) {
            return a(e)
        }
    }, t[0] = n.criticality, t[1] = n.hid, t[2] = n.id, t[3] = n.version, t[4] = re, t[5] = c, t[6] = r, t[7] = u, t[8] = i, t[9] = d, t[10] = S) : S = t[10];
    let C = S,
        w;
    t[11] === l ? w = t[12] : (w = e => {
        e !== l && (_(e), y(``), h(!0))
    }, t[11] = l, t[12] = w);
    let T = w,
        E = `flex min-w-0 items-center gap-2 ${f?`opacity-60`:``}`,
        D;
    t[13] === l ? D = t[14] : (D = (0, Z.jsx)(Oe, {
        level: l
    }), t[13] = l, t[14] = D);
    let O;
    t[15] !== E || t[16] !== D ? (O = (0, Z.jsx)(`div`, {
        className: E,
        children: D
    }), t[15] = E, t[16] = D, t[17] = O) : O = t[17];
    let k;
    t[18] === Symbol.for(`react.memo_cache_sentinel`) ? (k = (0, Z.jsx)(M.Icon, {}), t[18] = k) : k = t[18];
    let A;
    t[19] === O ? A = t[20] : (A = (0, Z.jsxs)(`div`, {
        className: `flex w-full items-center justify-between gap-2`,
        children: [O, k]
    }), t[19] = O, t[20] = A);
    let j;
    t[21] !== f || t[22] !== A ? (j = (0, Z.jsx)(M.Trigger, {
        className: `border-token-border-light bg-token-bg-primary mr h-7 rounded-md border px-2 text-xs`,
        "aria-busy": f,
        children: A
    }), t[21] = f, t[22] = A, t[23] = j) : j = t[23];
    let N;
    t[24] === c ? N = t[25] : (N = ie(Le, e => (0, Z.jsxs)(M.Item, {
        value: e,
        children: [(0, Z.jsx)(Oe, {
            level: e
        }), (0, Z.jsx)(`span`, {
            className: `sr-only`,
            children: c.formatMessage(V[e])
        })]
    }, e)), t[24] = c, t[25] = N);
    let P;
    t[26] === N ? P = t[27] : (P = (0, Z.jsx)(M.Portal, {
        children: (0, Z.jsx)(M.Content, {
            align: `start`,
            className: `rounded-lg text-sm`,
            children: N
        })
    }), t[26] = N, t[27] = P);
    let F;
    t[28] !== l || t[29] !== f || t[30] !== T || t[31] !== P || t[32] !== j ? (F = (0, Z.jsxs)(M.Root, {
        value: l,
        onValueChange: T,
        disabled: f,
        children: [j, P]
    }), t[28] = l, t[29] = f, t[30] = T, t[31] = P, t[32] = j, t[33] = F) : F = t[33];
    let I;
    t[34] !== c || t[35] !== m || t[36] !== f || t[37] !== g || t[38] !== v || t[39] !== b || t[40] !== x || t[41] !== C ? (I = m && (0, Z.jsx)(o, {
        testId: `modal-criticality-reason`,
        isOpen: !0,
        shouldIgnoreClickOutside: !0,
        onClose: () => {
            h(!1), _(null), y(``)
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
            loading: f,
            onClick: async () => {
                g && await C(g, v) && (h(!1), _(null), y(``))
            }
        }),
        secondaryButton: (0, Z.jsx)(a.Button, {
            title: c.formatMessage({
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
                children: c.formatMessage({
                    id: `aardvark.findings.criticality.prompt`,
                    defaultMessage: `Optionally share why you're changing the criticality.`
                })
            }), (0, Z.jsx)(`label`, {
                htmlFor: b,
                className: `sr-only`,
                children: c.formatMessage({
                    id: `aardvark.findings.criticality.reasonLabel`,
                    defaultMessage: `Reason (optional)`
                })
            }), (0, Z.jsx)(`textarea`, {
                id: b,
                "aria-describedby": x,
                value: v,
                onChange: e => y(e.target.value),
                className: `border-token-border-default bg-token-bg-primary text-token-text-primary placeholder:text-token-text-tertiary w-full rounded-lg border p-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none`,
                placeholder: c.formatMessage({
                    id: `aardvark.findings.criticality.placeholder`,
                    defaultMessage: `Add context (optional)`
                }),
                rows: 4
            })]
        })
    }), t[34] = c, t[35] = m, t[36] = f, t[37] = g, t[38] = v, t[39] = b, t[40] = x, t[41] = C, t[42] = I) : I = t[42];
    let R;
    return t[43] !== F || t[44] !== I ? (R = (0, Z.jsxs)(Z.Fragment, {
        children: [F, I]
    }), t[43] = F, t[44] = I, t[45] = R) : R = t[45], R
}
var Fe, Ie, Z, Le, Re = e((() => {
    Fe = x(), Ne(), H(), le(), I(), n(), p(), N(), g(), h(), b(), O(), Ie = t(y()), v(), Z = _(), Le = [`critical`, `high`, `medium`, `low`]
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
        let i = await L.safePatch(`/aardvark/scan-findings/{id}`, {
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
            onStatusChangeSuccess: i,
            sourcePage: c,
            variant: l
        } = e,
        u = l === void 0 ? `default` : l,
        d = ne(),
        f = n.status,
        p = te(),
        m = s(),
        [h, g] = (0, He.useState)(!1),
        [_, v] = (0, He.useState)(!1),
        [y, b] = (0, He.useState)(null),
        [x, re] = (0, He.useState)(``),
        S = n.hid ?? n.id ?? void 0,
        C;
    t[0] !== f || t[1] !== S || t[2] !== c ? (C = e => {
        ee.logStructuredEvent(`AardvarkFindingStatusChanged`, {
            findingId: S,
            previousStatus: f ?? void 0,
            nextStatus: e ?? void 0,
            sourcePage: c
        })
    }, t[0] = f, t[1] = S, t[2] = c, t[3] = C) : C = t[3];
    let w = C,
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
    let E = T,
        D = u === `sidebar` ? `text-token-text-primary hover:bg-token-bg-secondary keyboard-focused:bg-token-bg-secondary h-auto rounded-md border-0 bg-transparent px-2 py-1 text-sm font-medium shadow-none` : `border-token-border-light bg-token-bg-primary mr h-7 rounded-md border px-2 text-xs`,
        O;
    t[13] === D ? O = t[14] : (O = r(D), t[13] = D, t[14] = O);
    let k = u === `sidebar` ? `gap-1` : `w-full`,
        A;
    t[15] === k ? A = t[16] : (A = r(`flex items-center justify-between`, k), t[15] = k, t[16] = A);
    let j = u === `sidebar` && `text-end`,
        N;
    t[17] === j ? N = t[18] : (N = r(`truncate`, j), t[17] = j, t[18] = N);
    let P;
    t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (P = (0, Q.jsx)(M.Value, {}), t[19] = P) : P = t[19];
    let F;
    t[20] === N ? F = t[21] : (F = (0, Q.jsx)(`div`, {
        className: N,
        children: P
    }), t[20] = N, t[21] = F);
    let I;
    t[22] === Symbol.for(`react.memo_cache_sentinel`) ? (I = (0, Q.jsx)(M.Icon, {}), t[22] = I) : I = t[22];
    let L;
    t[23] !== F || t[24] !== A ? (L = (0, Q.jsxs)(`div`, {
        className: A,
        children: [F, I]
    }), t[23] = F, t[24] = A, t[25] = L) : L = t[25];
    let R;
    t[26] !== L || t[27] !== O ? (R = (0, Q.jsx)(M.Trigger, {
        className: O,
        children: L
    }), t[26] = L, t[27] = O, t[28] = R) : R = t[28];
    let z = u === `sidebar` ? `end` : `start`,
        B;
    t[29] === d ? B = t[30] : (B = ie(ae, (e, t) => (0, Q.jsx)(M.Item, {
        value: t,
        children: d.formatMessage(e, {
            status: t
        })
    }, t)), t[29] = d, t[30] = B);
    let V;
    t[31] !== z || t[32] !== B ? (V = (0, Q.jsx)(M.Portal, {
        children: (0, Q.jsx)(M.Content, {
            align: z,
            className: `rounded-lg text-sm`,
            children: B
        })
    }), t[31] = z, t[32] = B, t[33] = V) : V = t[33];
    let H;
    t[34] !== f || t[35] !== h || t[36] !== E || t[37] !== R || t[38] !== V ? (H = (0, Q.jsxs)(M.Root, {
        value: f,
        onValueChange: E,
        disabled: h,
        children: [R, V]
    }), t[34] = f, t[35] = h, t[36] = E, t[37] = R, t[38] = V, t[39] = H) : H = t[39];
    let U;
    t[40] !== n.hid || t[41] !== n.id || t[42] !== n.version || t[43] !== d || t[44] !== _ || t[45] !== h || t[46] !== w || t[47] !== i || t[48] !== y || t[49] !== p || t[50] !== x || t[51] !== m ? (U = _ && (0, Q.jsx)(o, {
        testId: `modal-wontfix-reason`,
        isOpen: !0,
        shouldIgnoreClickOutside: !0,
        onClose: () => {
            v(!1), re(``), b(null)
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
        primaryButton: (0, Q.jsx)(a.Button, {
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
                            v(!1), re(``), b(null), i?.(), w(y)
                        }
                    })
                }
            }
        }),
        secondaryButton: (0, Q.jsx)(a.Button, {
            title: y === `fixed` ? d.formatMessage({
                id: `aardvark.findings.fixed.cancel`,
                defaultMessage: `Cancel`
            }) : d.formatMessage({
                id: `aardvark.findings.wontfix.cancel`,
                defaultMessage: `Cancel`
            }),
            color: `secondary`,
            onClick: () => {
                v(!1), re(``), b(null)
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
                    onChange: e => re(e.target.value),
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
    }), t[40] = n.hid, t[41] = n.id, t[42] = n.version, t[43] = d, t[44] = _, t[45] = h, t[46] = w, t[47] = i, t[48] = y, t[49] = p, t[50] = x, t[51] = m, t[52] = U) : U = t[52];
    let W;
    return t[53] !== H || t[54] !== U ? (W = (0, Q.jsxs)(Q.Fragment, {
        children: [H, U]
    }), t[53] = H, t[54] = U, t[55] = W) : W = t[55], W
}
var Ve, He, Q, Ue = e((() => {
    Ve = x(), H(), le(), I(), n(), p(), N(), g(), h(), b(), l(), O(), He = t(y()), v(), Q = _()
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
    n || (t = ue(r)?.relevant_lines ?? []);
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
    let r = R({
        assistantTurn: n
    }).map(e => e.hunksText ?? ``).filter(e => e.trim().length > 0).join(`

`).trim();
    return r.length > 0 ? r : null
}

function Ze(e, t) {
    let n = [],
        r = typeof window < `u` && window.location ? window.location.href : null,
        i = K(e),
        a = e.commit_analysis?.commit_hash ?? ``,
        o = [];
    e.commit_analysis?.bugs_found_or_fixed && o.push(e.commit_analysis?.bugs_found_or_fixed), e.commit_analysis?.description && o.push(e.commit_analysis?.description), n.push(e.commit_analysis?.title || `Finding`), r && n.push(`Link: ${r}`), n.push(`Criticality: ${e.criticality??`unknown`}${e.commit_analysis?.attack_path_analysis?.adjusted_criticality_final?` (attack path: ${e.commit_analysis.attack_path_analysis.adjusted_criticality_final})`:``}`), n.push(`Status: ${e.status??`unknown`}`), e.criticality_reason && n.push(`Criticality notes: ${e.criticality_reason}`);
    let s = e.commit_analysis?.cvss_score,
        c = e.commit_analysis?.criticality_cvss_score_reason;
    n.push(``), n.push(`# Metadata`), n.push(`Repo: ${J(e.repo_url??``)||`N/A`}`), n.push(`Commit: ${q(a)||`N/A`}`), n.push(`Author: ${We(e.commit_analysis?.author_email)||`N/A`}`), n.push(`Created: ${G(e.created_at)||`N/A`}`);
    let l = We(e.assignee_email) || We(e?.assignee?.email),
        u = We(e?.assignee?.name),
        ee = u && l ? `${u} <${l}>` : u || l;
    n.push(`Assignee: ${ee||`Unassigned`}`), n.push(`Signals: ${Ke(t,i)}`), e.resolution_reason && n.push(`Resolution: ${e.resolution_reason}`), o.length > 0 && (n.push(``), n.push(`# Summary`), n.push(...o)), (s != null || c) && (n.push(``), n.push(`# CVSS`), s != null && n.push(`Score: ${s}`), c && n.push(c));
    let d = e.commit_analysis?.validation_report || e?.commit_analysis?.validation_str,
        f = e.commit_analysis?.validation_rubric;
    (f || d) && (n.push(``), n.push(`# Validation`), f && (n.push(`## Rubric`), n.push(f)), d && (n.push(`## Report`), n.push(String(d))));
    let p = Je(e);
    p.length > 0 && (n.push(``), n.push(`# Evidence`), n.push(...p));
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
    let t = ne(),
        n = s(),
        r = e,
        i = Qe({
            intl: t,
            signals: K(r)
        }),
        a = r.commit_analysis?.commit_hash ?? ``,
        o = fe(r.repo_url, a),
        c = `border-token-border-light hover:bg-token-bg-elevated-secondary inline-flex min-h-[3.25rem] w-full items-center justify-center rounded border px-3 py-2 text-center text-sm leading-tight`;
    return (0, $.jsxs)(pe, {
        title: t.formatMessage({
            id: `aardvark.findings.metadataTitle`,
            defaultMessage: `Metadata`
        }),
        children: [(0, $.jsxs)(`div`, {
            className: `grid grid-cols-1 items-stretch gap-3 text-sm`,
            children: [(0, $.jsx)(Y, {
                label: t.formatMessage({
                    id: `aardvark.table.repo`,
                    defaultMessage: `Repository`
                }),
                children: r.repo_url ? (0, $.jsx)(`a`, {
                    href: r.repo_url,
                    target: `_blank`,
                    rel: `noopener noreferrer`,
                    className: `text-token-text-accent hover:underline`,
                    children: J(r.repo_url)
                }) : (0, $.jsx)(`span`, {
                    className: `text-token-text-tertiary`,
                    children: t.formatMessage({
                        id: `aardvark.findings.repo.na`,
                        defaultMessage: `N/A`
                    })
                })
            }), (0, $.jsx)(Y, {
                label: t.formatMessage({
                    id: `aardvark.findings.commit`,
                    defaultMessage: `Commit`
                }),
                children: o ? (0, $.jsx)(`a`, {
                    href: o,
                    target: `_blank`,
                    rel: `noopener noreferrer`,
                    className: `text-token-text-accent font-mono text-xs hover:underline`,
                    children: q(a)
                }) : (0, $.jsx)(`code`, {
                    className: `bg-token-bg-elevated-secondary rounded px-1 py-0.5 text-[10px]`,
                    children: q(a)
                })
            }), (0, $.jsx)(Y, {
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
            }), (0, $.jsx)(Y, {
                label: t.formatMessage({
                    id: `aardvark.findings.authoredAt`,
                    defaultMessage: `Authored at`
                }),
                children: G(r.commit_analysis?.author_date ?? null)
            }), (0, $.jsx)(Y, {
                label: t.formatMessage({
                    id: `aardvark.findings.committedAt`,
                    defaultMessage: `Committed at`
                }),
                children: G(r.commit_analysis?.committer_date ?? null)
            }), (0, $.jsx)(Y, {
                label: t.formatMessage({
                    id: `aardvark.findings.createdAt`,
                    defaultMessage: `Detected at`
                }),
                children: G(r.created_at)
            }), (0, $.jsx)(Y, {
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
            }), (0, $.jsx)(Y, {
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
            }), (0, $.jsx)(Y, {
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
            }), i ? (0, $.jsx)(Y, {
                label: t.formatMessage({
                    id: `aardvark.findings.signals`,
                    defaultMessage: `Signals`
                }),
                children: i
            }) : null, r.criticality_reason ? (0, $.jsx)(Y, {
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
            }) : null, r.resolution_reason ? (0, $.jsx)(Y, {
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
            }), (0, $.jsx)(w, {
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
            }), (0, $.jsx)(w, {
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
    let t = ne();
    return (0, $.jsxs)(`a`, {
        href: e,
        target: `_blank`,
        rel: `noopener noreferrer`,
        className: `border-token-border-light hover:bg-token-bg-elevated-secondary inline-flex min-h-[3.25rem] w-full items-center justify-center rounded border px-3 py-2 text-center text-sm leading-tight`,
        children: [(0, $.jsx)(F, {
            className: `icon-sm me-1`,
            "aria-hidden": !0
        }), t.formatMessage({
            id: `aardvark.actions.openGithub`,
            defaultMessage: `Open in GitHub`
        })]
    })
}
var $, tt = e((() => {
    be(), De(), Re(), he(), Ue(), de(), H(), k(), P(), g(), f(), z(), v(), $ = _()
}));
export {
    he as _, Be as a, Re as c, Ne as d, Se as f, pe as g, be as h, Qe as i, Oe as l, ge as m, Ze as n, Ue as o, De as p, tt as r, Pe as s, $e as t, ke as u
};
//# sourceMappingURL=abaf64f2-eznrhcb2zzms7nls.js.map
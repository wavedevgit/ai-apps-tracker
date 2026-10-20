import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $G as n,
    Az as r,
    Gnt as i,
    Hnt as a,
    I1 as o,
    J5 as s,
    JT as c,
    Jnt as l,
    L7 as u,
    N7 as d,
    RU as f,
    S_ as p,
    Sw as m,
    Xy as h,
    Y1 as ee,
    Yy as g,
    ZG as _,
    _R as v,
    bR as te,
    eK as y,
    jz as b,
    kz as x,
    q5 as S,
    qT as C,
    ww as w,
    x_ as T,
    zU as E
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    $ as D,
    Bn as ne,
    Hn as O,
    Ht as k,
    N as A,
    O as re,
    Pn as j,
    Pt as M,
    Rn as N,
    Rt as P,
    Tn as F,
    Ut as I,
    Vn as L,
    at as R,
    jt as z,
    p as ie,
    q as B,
    s as V,
    zn as H
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    F8t as U,
    LHn as W,
    Njt as ae,
    Pjt as G,
    RHn as oe,
    _Cn as se,
    _dn as ce,
    cH as K,
    dH as le,
    dKn as ue,
    fH as de,
    fKn as fe,
    lH as pe,
    nw as me,
    pH as he,
    sH as ge,
    tw as _e,
    vdn as ve,
    xCn as ye,
    z8t as be,
    zHn as xe
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    Ax as Se,
    Kl as Ce,
    Ol as we,
    hm as Te,
    kl as Ee,
    kx as De,
    mm as Oe,
    ql as ke
} from "./30901919-jory365vq6ym5crx.js";
import {
    $v as Ae,
    Dl as je,
    El as Me,
    Qv as q,
    es as Ne,
    ls as Pe,
    os as Fe,
    rs as Ie,
    ss as Le
} from "./c2675c8c-nxl2ic2ofk2vw70s.js";
import {
    d_ as Re,
    f_ as ze
} from "./8b34dbc2-d4icgkio4i3wfm6q.js";
import {
    n as Be,
    t as Ve
} from "./e18c46cf-649h5aelqz3metgd.js";
import {
    n as He,
    t as Ue
} from "./18a8b3b4-gl6wj02xlnf84kt4.js";
import {
    n as We,
    t as Ge
} from "./9f2e6d33-oyt43zq6d4tu8sf7.js";
import {
    i as Ke,
    n as qe,
    r as Je,
    t as Ye
} from "./e6141aca-eoyrpeujellyeqxr.js";
import {
    r as Xe,
    t as Ze
} from "./8c6976e5-gdwaok95k95oa24g.js";
import {
    a as Qe,
    i as $e,
    n as et,
    o as tt,
    r as nt,
    s as rt,
    t as it
} from "./0bd66cc9-ja41shgipc3umets.js";
import {
    i as at,
    r as ot
} from "./af584902-mg2ufznjptumngn4.js";
import {
    r as st,
    t as ct
} from "./ef852af5-err1jtx5ooj91h50.js";
import {
    i as lt,
    n as ut,
    r as dt,
    t as ft
} from "./543878e5-m9p63zgxnk4c1a4b.js";

function pt(e) {
    return [`workspace-admin-requests`, e]
}

function mt(e) {
    return [`workspace-admin-requests-indicator`, e]
}
async function ht(e, {
    fetchAllPages: t = !0,
    pageSize: n = zt
} = {}) {
    let r, i = [];
    do {
        let t = await d.safeGet(`/accounts/{account_id}/admin/workspace_admin_requests`, {
            parameters: {
                path: {
                    account_id: e
                },
                query: {
                    limit: n,
                    ...r == null ? {} : {
                        cursor: r
                    }
                }
            }
        });
        i.push(...t.items), r = t.cursor ?? void 0
    } while (t && r != null);
    return {
        items: i,
        ...r == null ? {} : {
            cursor: r
        }
    }
}

function gt(e) {
    return e.payloads.find(e => e.kind === `spend_limit`) ?? e.payloads[0] ?? null
}

function _t(e) {
    let t = gt(e)?.update;
    return t != null && `requested_limit` in t ? t.requested_limit ?? null : null
}

function vt(e) {
    let t = _t(e);
    return t == null ? `` : String(t)
}

function yt(e) {
    return {
        value: vt(e),
        dirty: !1
    }
}

function bt(e) {
    let t = e.trim();
    if (!/^\d+$/.test(t)) return null;
    let n = Number(t);
    return !Number.isSafeInteger(n) || n > Bt ? null : n
}

function xt(e, t) {
    return e.payloads.map((e, n) => n === 0 ? {
        ...e,
        update: {
            kind: `increase_with_amount`,
            requested_limit: t
        }
    } : e)
}

function St(e) {
    return gt(e)?.original_limit_snapshot ?? null
}

function Ct(e, t) {
    return t == null ? e.formatMessage(Y.notSet) : e.formatMessage(Y.creditsValue, {
        credits: e.formatNumber(t)
    })
}

function wt(e) {
    return e.requester_name || e.requester_email || e.requester_account_user_id
}

function Tt(e) {
    return e.requester_email || e.requester_account_user_id
}

function Et() {
    "use forget";
    let e = (0, Lt.c)(70),
        t = ne(),
        n;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (n = f(), e[0] = n) : n = e[0];
    let i = n,
        a = A(),
        o = ee(),
        s = te(Pt),
        {
            role: c
        } = je(),
        l = o?.id,
        u;
    e[1] !== c || e[2] !== s ? (u = c == null ? s != null && se(s.role) : se(c), e[1] = c, e[2] = s, e[3] = u) : u = e[3];
    let p = u,
        [m, h] = (0, Rt.useState)(``),
        [g, _] = (0, Rt.useState)(Nt),
        v;
    e[4] === Symbol.for(`react.memo_cache_sentinel`) ? (v = {}, e[4] = v) : v = e[4];
    let [y, b] = (0, Rt.useState)(v), x;
    e[5] === l ? x = e[6] : (x = pt(l), e[5] = l, e[6] = x);
    let S;
    e[7] === l ? S = e[8] : (S = async () => {
        if (!l) throw Error(`Workspace id is required`);
        return await ht(l)
    }, e[7] = l, e[8] = S);
    let C = !!l,
        w;
    e[9] !== x || e[10] !== S || e[11] !== C ? (w = {
        queryKey: x,
        queryFn: S,
        enabled: C,
        staleTime: 0,
        refetchOnMount: `always`,
        refetchOnWindowFocus: `always`
    }, e[9] = x, e[10] = S, e[11] = C, e[12] = w) : w = e[12];
    let T = re(w);
    T.data?.items;
    let E;
    e[13] === T.data?.items ? E = e[14] : (E = T.data?.items ?? [], e[13] = T.data?.items, e[14] = E);
    let D;
    e[15] === E ? D = e[16] : (D = E.filter(Mt), e[15] = E, e[16] = D);
    let O = D,
        k, M;
    e[17] === O ? (k = e[18], M = e[19]) : (M = () => {
        let e = new Set(O.map(jt));
        _(t => {
            let n = new Set(Array.from(t).filter(t => e.has(t)));
            return n.size === t.size ? t : n
        })
    }, k = [O], e[17] = O, e[18] = k, e[19] = M), (0, Rt.useEffect)(M, k);
    let N, P;
    e[20] === O ? (N = e[21], P = e[22]) : (N = () => {
        let e = new Set(O.map(At));
        b(t => {
            let n = !1,
                r = {};
            for (let e of O) {
                let i = t[e.id];
                r[e.id] = i?.dirty ? i : yt(e), n ||= r[e.id] !== t[e.id]
            }
            return n ||= Object.keys(t).some(t => !e.has(t)), n ? r : t
        })
    }, P = [O], e[20] = O, e[21] = N, e[22] = P), (0, Rt.useEffect)(N, P);
    let F;
    if (e[23] !== O || e[24] !== y || e[25] !== m) {
        bb0: {
            let e = m.trim().toLowerCase();
            if (e === ``) {
                F = O;
                break bb0
            }
            F = O.filter(t => {
                let n = _t(t),
                    r = y[t.id]?.value ?? (n == null ? `` : String(n));
                return [wt(t), Tt(t), t.requester_account_user_id, t.justification, r].join(` `).toLowerCase().includes(e)
            })
        }
        e[23] = O,
        e[24] = y,
        e[25] = m,
        e[26] = F
    }
    else F = e[26];
    let I = F,
        L;
    e[27] === I ? L = e[28] : (L = I.map(kt), e[27] = I, e[28] = L);
    let R = L,
        z;
    e[29] !== g || e[30] !== R ? (z = R.length > 0 && R.every(e => g.has(e)), e[29] = g, e[30] = R, e[31] = z) : z = e[31];
    let B = z,
        V;
    if (e[32] !== g || e[33] !== R) {
        let t;
        e[35] === g ? t = e[36] : (t = e => g.has(e), e[35] = g, e[36] = t), V = R.filter(t), e[32] = g, e[33] = R, e[34] = V
    } else V = e[34];
    let H = V.length,
        U;
    e[37] === l ? U = e[38] : (U = async e => {
        let {
            requests: t,
            status: n
        } = e;
        if (!l) throw Error(`Workspace id is required`);
        if (n === `approved` && t.some(Ot)) throw Error(`Requested limit is required`);
        let r = await Promise.allSettled(t.map(async e => {
                let {
                    request: t,
                    requestedLimit: r
                } = e, i = n === `approved` && r != null ? {
                    status: n,
                    payloads: xt(t, r)
                } : {
                    status: n
                };
                return await d.safePatch(`/accounts/{account_id}/admin/workspace_admin_requests/{request_id}`, {
                    parameters: {
                        path: {
                            account_id: l,
                            request_id: t.id
                        }
                    },
                    requestBody: i
                }), t.id
            })),
            i = r.flatMap(Dt),
            a = r.length - i.length;
        if (i.length === 0 && a > 0) throw Error(`Unable to update usage limit requests`);
        return {
            failedCount: a,
            succeededRequestIds: i
        }
    }, e[37] = l, e[38] = U);
    let W;
    e[39] !== t || e[40] !== a || e[41] !== l ? (W = async (e, n) => {
        let r = new Set(e.succeededRequestIds);
        _(e => {
            let t = new Set(e);
            for (let e of r) t.delete(e);
            return t
        }), a.setQueryData(pt(l), e => e == null ? e : {
            ...e,
            items: e.items.filter(e => !r.has(e.id))
        }), await a.invalidateQueries({
            queryKey: pt(l)
        }), await a.invalidateQueries({
            queryKey: mt(l)
        }), n.status === `approved` && l != null && await Promise.all([Qe({
            queryClient: a,
            workspaceId: l
        }), at({
            queryClient: a,
            workspaceId: l
        })]), e.failedCount > 0 ? i.warning(t.formatMessage(Y.resolvePartialError, {
            succeededCount: e.succeededRequestIds.length,
            totalCount: n.requests.length
        }), {
            hasCloseButton: !0
        }) : i.success(t.formatMessage(n.status === `approved` ? Y.approveSuccess : Y.denySuccess, {
            count: n.requests.length
        }), {
            hasCloseButton: !0
        })
    }, e[39] = t, e[40] = a, e[41] = l, e[42] = W) : W = e[42];
    let ae;
    e[43] === t ? ae = e[44] : (ae = () => {
        i.warning(t.formatMessage(Y.resolveError), {
            hasCloseButton: !0
        })
    }, e[43] = t, e[44] = ae);
    let G;
    e[45] !== U || e[46] !== W || e[47] !== ae ? (G = {
        mutationFn: U,
        onSuccess: W,
        onError: ae
    }, e[45] = U, e[46] = W, e[47] = ae, e[48] = G) : G = e[48];
    let oe = ie(G);
    if (l == null) {
        let t;
        return e[49] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, J.jsx)(`div`, {
            className: `flex min-h-[40vh] items-center justify-center`,
            children: (0, J.jsx)(r, {})
        }), e[49] = t) : t = e[49], t
    }
    let K;
    e[50] === Symbol.for(`react.memo_cache_sentinel`) ? (K = e => h(e.target.value), e[50] = K) : K = e[50];
    let le;
    e[51] === t ? le = e[52] : (le = t.formatMessage(Y.searchPlaceholder), e[51] = t, e[52] = le);
    let ue;
    e[53] !== m || e[54] !== le ? (ue = (0, J.jsx)(`div`, {
        className: `mb-4.5 flex items-center justify-between`,
        children: (0, J.jsx)(ce, {
            id: `workspace-admin-requests-search`,
            className: `w-full`,
            inputClassName: `w-full rounded-full! text-sm`,
            value: m,
            onChange: K,
            placeholder: le
        })
    }), e[53] = m, e[54] = le, e[55] = ue) : ue = e[55];
    let de;
    e[56] !== B || e[57] !== I || e[58] !== p || e[59] !== y || e[60] !== oe || e[61] !== g || e[62] !== H || e[63] !== R || e[64] !== T.isError || e[65] !== T.isLoading ? (de = T.isLoading ? (0, J.jsx)(`div`, {
        className: `flex min-h-[40vh] items-center justify-center`,
        children: (0, J.jsx)(r, {})
    }) : T.isError ? (0, J.jsx)(`div`, {
        className: `border-token-border-heavy bg-token-bg-tertiary text-token-text-primary rounded-md border px-4 py-3`,
        children: (0, J.jsx)(j, {
            ...Y.loadError
        })
    }) : (0, J.jsx)(Ft, {
        requests: I,
        selectedRequestIds: g,
        requestedLimitDrafts: y,
        allVisibleRequestsSelected: B,
        selectedVisibleRequestCount: H,
        hasAdminPrivileges: p,
        isResolving: oe.isPending,
        onToggleRequest: (e, t) => {
            _(n => {
                let r = new Set(n);
                return t ? r.add(e) : r.delete(e), r
            })
        },
        onToggleAllVisibleRequests: e => {
            _(t => {
                let n = new Set(t);
                for (let t of R) e ? n.add(t) : n.delete(t);
                return n
            })
        },
        onRequestedLimitChange: (e, t) => {
            b(n => ({
                ...n,
                [e.id]: {
                    ...n[e.id] ?? yt(e),
                    value: t,
                    dirty: !0
                }
            }))
        },
        onResolveRequests: (e, t) => {
            oe.mutateAsync({
                requests: e.map(e => ({
                    request: e,
                    requestedLimit: bt((y[e.id] ?? yt(e)).value)
                })),
                status: t
            })
        }
    }), e[56] = B, e[57] = I, e[58] = p, e[59] = y, e[60] = oe, e[61] = g, e[62] = H, e[63] = R, e[64] = T.isError, e[65] = T.isLoading, e[66] = de) : de = e[66];
    let fe;
    return e[67] !== ue || e[68] !== de ? (fe = (0, J.jsxs)(`div`, {
        className: `max-w-[72rem]`,
        children: [ue, de]
    }), e[67] = ue, e[68] = de, e[69] = fe) : fe = e[69], fe
}

function Dt(e) {
    return e.status === `fulfilled` ? [e.value] : []
}

function Ot(e) {
    let {
        requestedLimit: t
    } = e;
    return t == null
}

function kt(e) {
    return e.id
}

function At(e) {
    return e.id
}

function jt(e) {
    return e.id
}

function Mt(e) {
    return e.status === `pending`
}

function Nt() {
    return new Set
}

function Pt(e) {
    return e.currentWorkspace
}

function Ft(e) {
    "use forget";
    let t = (0, Lt.c)(81),
        {
            requests: n,
            selectedRequestIds: r,
            requestedLimitDrafts: i,
            allVisibleRequestsSelected: a,
            selectedVisibleRequestCount: o,
            hasAdminPrivileges: s,
            isResolving: c,
            onToggleRequest: l,
            onToggleAllVisibleRequests: u,
            onRequestedLimitChange: d,
            onResolveRequests: f
        } = e,
        p = ne(),
        m, h;
    if (t[0] !== i || t[1] !== n || t[2] !== r) {
        let e;
        t[5] === r ? e = t[6] : (e = e => r.has(e.id), t[5] = r, t[6] = e), m = n.filter(e);
        let a;
        t[7] === i ? a = t[8] : (a = e => bt(i[e.id]?.value ?? vt(e)) != null, t[7] = i, t[8] = a), h = m.every(a), t[0] = i, t[1] = n, t[2] = r, t[3] = m, t[4] = h
    } else m = t[3], h = t[4];
    let ee = h,
        _;
    t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = (0, J.jsxs)(`colgroup`, {
        children: [(0, J.jsx)(`col`, {
            className: `w-12`
        }), (0, J.jsx)(`col`, {
            className: `w-[28%]`
        }), (0, J.jsx)(`col`, {
            className: `w-[15%]`
        }), (0, J.jsx)(`col`, {
            className: `w-[15%]`
        }), (0, J.jsx)(`col`, {
            className: `w-[28%]`
        }), (0, J.jsx)(`col`, {
            className: `w-[14%]`
        })]
    }), t[9] = _) : _ = t[9];
    let v = o > 0 && !a,
        te = n.length === 0,
        y;
    t[10] === u ? y = t[11] : (y = e => u(e.target.checked), t[10] = u, t[11] = y);
    let b;
    t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (b = (0, J.jsx)(`span`, {
        className: `sr-only`,
        children: (0, J.jsx)(j, {
            ...Y.selectAllRequests
        })
    }), t[12] = b) : b = t[12];
    let x;
    t[13] !== a || t[14] !== v || t[15] !== te || t[16] !== y ? (x = (0, J.jsx)(q.HeaderCell, {
        className: `ps-2`,
        children: (0, J.jsx)(ue, {
            id: `workspace-admin-requests-select-all`,
            checked: a,
            indeterminate: v,
            disabled: te,
            onChange: y,
            label: b
        })
    }), t[13] = a, t[14] = v, t[15] = te, t[16] = y, t[17] = x) : x = t[17];
    let S;
    t[18] === Symbol.for(`react.memo_cache_sentinel`) ? (S = (0, J.jsx)(q.HeaderCell, {
        children: (0, J.jsx)(j, {
            ...Y.nameColumn
        })
    }), t[18] = S) : S = t[18];
    let C;
    t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (C = (0, J.jsx)(q.HeaderCell, {
        children: (0, J.jsx)(j, {
            ...Y.currentLimitColumn
        })
    }), t[19] = C) : C = t[19];
    let w;
    t[20] === Symbol.for(`react.memo_cache_sentinel`) ? (w = (0, J.jsx)(q.HeaderCell, {
        children: (0, J.jsx)(j, {
            ...Y.recommendedColumn
        })
    }), t[20] = w) : w = t[20];
    let T;
    t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (T = (0, J.jsx)(q.HeaderCell, {
        children: (0, J.jsx)(j, {
            ...Y.justificationColumn
        })
    }), t[21] = T) : T = t[21];
    let E;
    t[22] === o ? E = t[23] : (E = o > 0 ? (0, J.jsx)(j, {
        ...Y.selectedCount,
        values: {
            count: o
        }
    }) : null, t[22] = o, t[23] = E);
    let D;
    t[24] === p ? D = t[25] : (D = p.formatMessage(Y.bulkActionsLabel), t[24] = p, t[25] = D);
    let O = c || m.length === 0,
        k;
    t[26] === Symbol.for(`react.memo_cache_sentinel`) ? (k = (0, J.jsx)(De, {
        "aria-hidden": `true`,
        className: `icon-sm`
    }), t[26] = k) : k = t[26];
    let A;
    t[27] !== D || t[28] !== O ? (A = (0, J.jsx)(`button`, {
        type: `button`,
        "aria-label": D,
        className: `interactive-button-secondary inline-flex size-8 items-center justify-center rounded-md p-0`,
        disabled: O,
        children: k
    }), t[27] = D, t[28] = O, t[29] = A) : A = t[29];
    let re = c || !s || !ee,
        M;
    t[30] !== f || t[31] !== m ? (M = () => f(m, `approved`), t[30] = f, t[31] = m, t[32] = M) : M = t[32];
    let N;
    t[33] === Symbol.for(`react.memo_cache_sentinel`) ? (N = (0, J.jsx)(j, {
        ...Y.approveSelectedButton
    }), t[33] = N) : N = t[33];
    let P;
    t[34] !== re || t[35] !== M ? (P = (0, J.jsx)(oe.Item, {
        disabled: re,
        onClick: M,
        children: N
    }), t[34] = re, t[35] = M, t[36] = P) : P = t[36];
    let F;
    t[37] !== f || t[38] !== m ? (F = () => f(m, `denied`), t[37] = f, t[38] = m, t[39] = F) : F = t[39];
    let I;
    t[40] === Symbol.for(`react.memo_cache_sentinel`) ? (I = (0, J.jsx)(j, {
        ...Y.denySelectedButton
    }), t[40] = I) : I = t[40];
    let L;
    t[41] !== c || t[42] !== F ? (L = (0, J.jsx)(oe.Item, {
        color: `danger`,
        disabled: c,
        onClick: F,
        children: I
    }), t[41] = c, t[42] = F, t[43] = L) : L = t[43];
    let R;
    t[44] !== A || t[45] !== P || t[46] !== L ? (R = (0, J.jsxs)(W, {
        side: `bottom`,
        sideOffset: 4,
        contentAlign: `end`,
        triggerButton: A,
        children: [P, L]
    }), t[44] = A, t[45] = P, t[46] = L, t[47] = R) : R = t[47];
    let z;
    t[48] !== E || t[49] !== R ? (z = (0, J.jsx)(q.HeaderCell, {
        textAlign: `right`,
        children: (0, J.jsxs)(`div`, {
            className: `text-token-text-primary flex items-center justify-end gap-2`,
            children: [E, R]
        })
    }), t[48] = E, t[49] = R, t[50] = z) : z = t[50];
    let ie;
    t[51] !== z || t[52] !== x ? (ie = (0, J.jsxs)(q.Header, {
        children: [x, S, C, w, T, z]
    }), t[51] = z, t[52] = x, t[53] = ie) : ie = t[53];
    let B;
    if (t[54] !== s || t[55] !== p || t[56] !== c || t[57] !== d || t[58] !== f || t[59] !== l || t[60] !== i || t[61] !== n || t[62] !== r) {
        let e;
        t[64] !== s || t[65] !== p || t[66] !== c || t[67] !== d || t[68] !== f || t[69] !== l || t[70] !== i || t[71] !== r ? (e = e => {
            let t = wt(e),
                n = Tt(e),
                a = i[e.id]?.value ?? vt(e),
                o = bt(a) != null;
            return (0, J.jsxs)(q.Row, {
                className: `[&>td]:py-2`,
                children: [(0, J.jsx)(q.Cell, {
                    className: `ps-2`,
                    divClassName: `min-h-[48px] items-center`,
                    children: (0, J.jsx)(ue, {
                        id: `workspace-admin-request-${e.id}`,
                        checked: r.has(e.id),
                        onChange: t => l(e.id, t.target.checked),
                        label: (0, J.jsx)(`span`, {
                            className: `sr-only`,
                            children: (0, J.jsx)(j, {
                                ...Y.selectRequest,
                                values: {
                                    name: t
                                }
                            })
                        })
                    })
                }), (0, J.jsxs)(q.Cell, {
                    divClassName: `min-h-[48px] min-w-0 items-center`,
                    children: [(0, J.jsx)(`div`, {
                        className: `relative shrink-0 pe-3`,
                        children: (0, J.jsx)(Ue, {
                            userName: t,
                            isScimManaged: !1
                        })
                    }), (0, J.jsxs)(`div`, {
                        className: `min-w-0`,
                        children: [(0, J.jsx)(`div`, {
                            className: `flex min-w-0 items-center gap-1`,
                            children: (0, J.jsx)(`span`, {
                                className: `min-w-0 truncate`,
                                title: t,
                                children: t
                            })
                        }), (0, J.jsx)(`div`, {
                            className: `text-body-small-regular text-token-text-secondary truncate`,
                            title: n,
                            children: n
                        })]
                    })]
                }), (0, J.jsx)(q.Cell, {
                    divClassName: `min-h-[48px] items-center`,
                    children: Ct(p, St(e))
                }), (0, J.jsx)(q.Cell, {
                    divClassName: `min-h-[48px] items-center`,
                    children: (0, J.jsx)(`input`, {
                        "aria-label": p.formatMessage(Y.recommendedLimitInput, {
                            name: t
                        }),
                        "aria-invalid": !o,
                        inputMode: `numeric`,
                        min: 0,
                        max: Bt,
                        name: `requested-limit-${e.id}`,
                        onChange: t => d(e, t.target.value),
                        step: 1,
                        type: `number`,
                        value: a,
                        className: `border-token-border-light bg-token-bg-primary h-9 w-24 rounded-lg border px-3 text-sm`
                    })
                }), (0, J.jsx)(q.Cell, {
                    divClassName: `min-h-[48px] items-center`,
                    children: (0, J.jsx)(g, {
                        label: e.justification,
                        children: (0, J.jsx)(`span`, {
                            className: `line-clamp-2`,
                            children: e.justification
                        })
                    })
                }), (0, J.jsxs)(q.Cell, {
                    textAlign: `right`,
                    divClassName: `min-h-[48px] items-center justify-end gap-4`,
                    children: [(0, J.jsx)(`button`, {
                        type: `button`,
                        disabled: c,
                        className: `text-sm text-[#FF002A] hover:underline focus-visible:underline focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50`,
                        onClick: () => f([e], `denied`),
                        children: (0, J.jsx)(j, {
                            ...Y.denyButton
                        })
                    }), (0, J.jsx)(It, {
                        disabled: !s,
                        testId: `${e.id}-usage-limits-approve-admin-disabled-tooltip-trigger`,
                        children: (0, J.jsx)(`button`, {
                            type: `button`,
                            disabled: c || !o || !s,
                            className: `text-sm text-[#0285FF] hover:underline focus-visible:underline focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50`,
                            onClick: () => f([e], `approved`),
                            children: (0, J.jsx)(j, {
                                ...Y.approveButton
                            })
                        })
                    })]
                })]
            }, e.id)
        }, t[64] = s, t[65] = p, t[66] = c, t[67] = d, t[68] = f, t[69] = l, t[70] = i, t[71] = r, t[72] = e) : e = t[72], B = n.map(e), t[54] = s, t[55] = p, t[56] = c, t[57] = d, t[58] = f, t[59] = l, t[60] = i, t[61] = n, t[62] = r, t[63] = B
    } else B = t[63];
    let V;
    t[73] === n.length ? V = t[74] : (V = n.length === 0 && (0, J.jsx)(q.Row, {
        className: `[&>td]:py-2`,
        children: (0, J.jsx)(q.Cell, {
            colSpan: 6,
            children: (0, J.jsx)(`div`, {
                className: `text-token-text-tertiary`,
                children: (0, J.jsx)(j, {
                    ...Y.noRequests
                })
            })
        })
    }), t[73] = n.length, t[74] = V);
    let H;
    t[75] !== B || t[76] !== V ? (H = (0, J.jsxs)(q.Body, {
        children: [B, V]
    }), t[75] = B, t[76] = V, t[77] = H) : H = t[77];
    let U;
    return t[78] !== ie || t[79] !== H ? (U = (0, J.jsxs)(q.Root, {
        fixed: !0,
        size: `normal`,
        children: [_, ie, H]
    }), t[78] = ie, t[79] = H, t[80] = U) : U = t[80], U
}

function It(e) {
    "use forget";
    let t = (0, Lt.c)(6),
        {
            children: n,
            disabled: r,
            testId: i
        } = e;
    if (!r) {
        let e;
        return t[0] === n ? e = t[1] : (e = (0, J.jsx)(J.Fragment, {
            children: n
        }), t[0] = n, t[1] = e), e
    }
    let a;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, J.jsx)(j, {
        ...Y.adminDisabledTooltip
    }), t[2] = a) : a = t[2];
    let o;
    return t[3] !== n || t[4] !== i ? (o = (0, J.jsx)(g, {
        label: a,
        children: (0, J.jsx)(`span`, {
            className: `inline-flex`,
            "data-testid": i,
            children: n
        })
    }), t[3] = n, t[4] = i, t[5] = o) : o = t[5], o
}
var Lt, Rt, J, zt, Bt, Y, Vt = e((() => {
    Lt = F(), Me(), He(), $e(), ye(), ot(), fe(), xe(), Ae(), h(), Se(), ve(), b(), o(), v(), E(), u(), V(), Rt = t(O()), H(), J = L(), zt = 100, Bt = 2147483647, Y = N({
        adminDisabledTooltip: {
            id: `workspaceUsageLimits.adminDisabledTooltip`,
            defaultMessage: `Contact a workspace admin to change this setting.`
        },
        approveButton: {
            id: `workspaceUsageLimits.approveButton`,
            defaultMessage: `Approve`
        },
        approveSelectedButton: {
            id: `workspaceUsageLimits.approveSelectedButton`,
            defaultMessage: `Approve selected`
        },
        approveSuccess: {
            id: `workspaceUsageLimits.approveSuccessWithCount`,
            defaultMessage: `{count, plural, one {Usage limit request approved} other {# usage limit requests approved}}`
        },
        bulkActionsLabel: {
            id: `workspaceUsageLimits.bulkActionsLabel`,
            defaultMessage: `Bulk request actions`
        },
        creditsValue: {
            id: `workspaceUsageLimits.creditsValue`,
            defaultMessage: `{credits} credits`
        },
        currentLimitColumn: {
            id: `workspaceUsageLimits.limitWhenRequestedColumn`,
            defaultMessage: `Limit when requested`
        },
        denyButton: {
            id: `workspaceUsageLimits.denyButton`,
            defaultMessage: `Deny`
        },
        denySelectedButton: {
            id: `workspaceUsageLimits.denySelectedButton`,
            defaultMessage: `Deny selected`
        },
        denySuccess: {
            id: `workspaceUsageLimits.denySuccessWithCount`,
            defaultMessage: `{count, plural, one {Usage limit request denied} other {# usage limit requests denied}}`
        },
        justificationColumn: {
            id: `workspaceUsageLimits.justificationColumn`,
            defaultMessage: `Justification`
        },
        loadError: {
            id: `workspaceUsageLimits.loadError`,
            defaultMessage: `Unable to load pending requests.`
        },
        nameColumn: {
            id: `workspaceUsageLimits.nameColumn`,
            defaultMessage: `Name`
        },
        noRequests: {
            id: `workspaceUsageLimits.noRequests`,
            defaultMessage: `No pending requests`
        },
        notSet: {
            id: `workspaceUsageLimits.notSet`,
            defaultMessage: `Not set`
        },
        recommendedColumn: {
            id: `workspaceUsageLimits.recommendedColumn`,
            defaultMessage: `Recommended`
        },
        recommendedLimitInput: {
            id: `workspaceUsageLimits.recommendedLimitInput`,
            defaultMessage: `Recommended limit for {name}`
        },
        resolveError: {
            id: `workspaceUsageLimits.resolveError`,
            defaultMessage: `Unable to update the usage limit request`
        },
        resolvePartialError: {
            id: `workspaceUsageLimits.resolvePartialError`,
            defaultMessage: `Updated {succeededCount} of {totalCount} usage limit requests. Try again for the rest.`
        },
        searchPlaceholder: {
            id: `workspaceUsageLimits.searchPlaceholder`,
            defaultMessage: `Search by name`
        },
        selectAllRequests: {
            id: `workspaceUsageLimits.selectAllRequests`,
            defaultMessage: `Select all pending requests`
        },
        selectedCount: {
            id: `workspaceUsageLimits.selectedCount`,
            defaultMessage: `{count} selected`
        },
        selectRequest: {
            id: `workspaceUsageLimits.selectRequest`,
            defaultMessage: `Select request from {name}`
        }
    })
}));

function Ht(e) {
    "use forget";
    let t = (0, Jt.c)(27),
        {
            workspaceId: n,
            canEdit: r
        } = e,
        i = ne(),
        a = A(),
        [o, s] = (0, Yt.useState)(!1),
        c = y(n),
        l = c.data ?? _,
        u;
    t[0] === n ? u = t[1] : (u = e => {
        if (n == null) throw Error(`Workspace id is required`);
        return d.safePost(`/accounts/{account_id}/settings/usage_limit_increase_request`, {
            parameters: {
                path: {
                    account_id: n
                }
            },
            requestBody: {
                usage_limit_increase_request: e
            }
        })
    }, t[0] = n, t[1] = u);
    let p;
    t[2] !== a || t[3] !== n ? (p = async e => {
        a.setQueryData([`workspace-settings`, n], e), await a.invalidateQueries({
            queryKey: [`workspace-settings`, n]
        })
    }, t[2] = a, t[3] = n, t[4] = p) : p = t[4];
    let m;
    t[5] !== u || t[6] !== p ? (m = {
        mutationFn: u,
        onSuccess: p
    }, t[5] = u, t[6] = p, t[7] = m) : m = t[7];
    let h = ie(m),
        ee;
    t[8] !== i || t[9] !== h ? (ee = async e => {
        try {
            await h.mutateAsync(e), f().success(i.formatMessage(Z.saveSuccess), {
                hasCloseButton: !0
            }), s(!1)
        } catch {
            f().warning(i.formatMessage(Z.saveError), {
                hasCloseButton: !0
            })
        }
    }, t[8] = i, t[9] = h, t[10] = ee) : ee = t[10];
    let g = ee,
        v;
    t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (v = (0, X.jsx)(`div`, {
        className: `text-token-text-primary text-base leading-[26px] font-semibold tracking-[-0.32px]`,
        children: (0, X.jsx)(j, {
            ...Z.settingLabel
        })
    }), t[11] = v) : v = t[11];
    let te;
    t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (te = (0, X.jsxs)(`div`, {
        className: `min-w-0 pe-6`,
        children: [v, (0, X.jsx)(`div`, {
            className: `text-token-text-tertiary text-sm leading-[18px] tracking-[-0.15px]`,
            children: (0, X.jsx)(j, {
                ...Z.settingDescription
            })
        })]
    }), t[12] = te) : te = t[12];
    let b;
    t[13] !== r || t[14] !== l || t[15] !== i || t[16] !== c.isError || t[17] !== c.isLoading ? (b = (0, X.jsxs)(`div`, {
        className: `border-token-border-default flex w-full items-start justify-between border-b py-4`,
        children: [te, c.isLoading ? (0, X.jsx)(`div`, {
            className: `text-token-text-tertiary text-sm`,
            children: (0, X.jsx)(j, {
                ...Z.loading
            })
        }) : (0, X.jsxs)(`div`, {
            className: `flex shrink-0 flex-col items-end gap-0.5`,
            children: [(0, X.jsx)(`div`, {
                className: `text-token-text-primary text-base`,
                children: (0, X.jsx)(j, {
                    ...Kt(l.kind)
                })
            }), (0, X.jsx)(`button`, {
                type: `button`,
                "aria-label": i.formatMessage(Z.editRequestPolicy),
                className: `disabled:text-token-text-tertiary text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline focus-visible:underline focus-visible:outline-none disabled:cursor-not-allowed disabled:no-underline dark:text-blue-400 dark:hover:text-blue-300`,
                disabled: !r || c.isError,
                onClick: () => s(!0),
                children: (0, X.jsx)(j, {
                    ...Z.edit
                })
            })]
        })]
    }), t[13] = r, t[14] = l, t[15] = i, t[16] = c.isError, t[17] = c.isLoading, t[18] = b) : b = t[18];
    let x;
    t[19] !== l || t[20] !== g || t[21] !== o || t[22] !== h ? (x = o ? (0, X.jsx)(Ut, {
        config: l,
        isSaving: h.isPending,
        onClose: () => s(!1),
        onSave: g
    }) : null, t[19] = l, t[20] = g, t[21] = o, t[22] = h, t[23] = x) : x = t[23];
    let S;
    return t[24] !== b || t[25] !== x ? (S = (0, X.jsxs)(X.Fragment, {
        children: [b, x]
    }), t[24] = b, t[25] = x, t[26] = S) : S = t[26], S
}

function Ut(e) {
    "use forget";
    let t = (0, Jt.c)(52),
        {
            config: n,
            isSaving: r,
            onClose: i,
            onSave: a
        } = e,
        o = ne(),
        [s, c] = (0, Yt.useState)(n.kind),
        [l, u] = (0, Yt.useState)(n.kind === `custom` ? n.instructions ?? `` : ``),
        [d, f] = (0, Yt.useState)(n.kind === `custom` ? n.request_url ?? `` : ``),
        p;
    t[0] === l ? p = t[1] : (p = l.trim(), t[0] = l, t[1] = p);
    let h = p,
        ee, g;
    t[2] === d ? (ee = t[3], g = t[4]) : (g = d.trim(), ee = Gt(g), t[2] = d, t[3] = ee, t[4] = g);
    let _ = ee,
        v = !r && (s !== `custom` || _),
        te;
    t[5] !== v || t[6] !== s || t[7] !== a || t[8] !== h || t[9] !== g ? (te = async () => {
        if (v) {
            if (s === `custom`) {
                await a({
                    kind: s,
                    instructions: h.length === 0 ? null : h,
                    request_url: g.length === 0 ? null : g
                });
                return
            }
            await a({
                kind: s
            })
        }
    }, t[5] = v, t[6] = s, t[7] = a, t[8] = h, t[9] = g, t[10] = te) : te = t[10];
    let y = te,
        b;
    t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (b = (0, X.jsx)(j, {
        ...Z.modalTitle
    }), t[11] = b) : b = t[11];
    let x = !v,
        S;
    t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (S = (0, X.jsx)(j, {
        ...Z.save
    }), t[12] = S) : S = t[12];
    let w;
    t[13] !== y || t[14] !== r || t[15] !== x ? (w = (0, X.jsx)(C, {
        color: `primary`,
        loading: r,
        disabled: x,
        onClick: y,
        children: S
    }), t[13] = y, t[14] = r, t[15] = x, t[16] = w) : w = t[16];
    let T;
    t[17] === Symbol.for(`react.memo_cache_sentinel`) ? (T = (0, X.jsx)(j, {
        ...Z.cancel
    }), t[17] = T) : T = t[17];
    let E;
    t[18] !== r || t[19] !== i ? (E = (0, X.jsx)(C, {
        color: `secondary`,
        disabled: r,
        onClick: i,
        children: T
    }), t[18] = r, t[19] = i, t[20] = E) : E = t[20];
    let D;
    t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (D = e => {
        c(e)
    }, t[21] = D) : D = t[21];
    let O;
    t[22] === o ? O = t[23] : (O = o.formatMessage(Z.requestExperienceLabel), t[22] = o, t[23] = O);
    let k, A;
    t[24] === Symbol.for(`react.memo_cache_sentinel`) ? (k = (0, X.jsx)(Re.Value, {}), A = (0, X.jsx)(Re.Icon, {}), t[24] = k, t[25] = A) : (k = t[24], A = t[25]);
    let re;
    t[26] === O ? re = t[27] : (re = (0, X.jsxs)(Re.Trigger, {
        "aria-label": O,
        className: `border-token-border-default w-full justify-between border`,
        children: [k, A]
    }), t[26] = O, t[27] = re);
    let M;
    t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (M = (0, X.jsx)(Re.Portal, {
        children: (0, X.jsx)(Re.Content, {
            className: `w-[var(--radix-select-trigger-width)]`,
            children: [`openai_native`, `custom`, `disabled`].map(Wt)
        })
    }), t[28] = M) : M = t[28];
    let N;
    t[29] !== s || t[30] !== re ? (N = (0, X.jsxs)(Re.Root, {
        value: s,
        onValueChange: D,
        children: [re, M]
    }), t[29] = s, t[30] = re, t[31] = N) : N = t[31];
    let P;
    t[32] === s ? P = t[33] : (P = qt(s), t[32] = s, t[33] = P);
    let F;
    t[34] === P ? F = t[35] : (F = (0, X.jsx)(`div`, {
        className: `text-token-text-tertiary text-sm leading-5`,
        children: (0, X.jsx)(j, {
            ...P
        })
    }), t[34] = P, t[35] = F);
    let I;
    t[36] !== _ || t[37] !== l || t[38] !== o || t[39] !== s || t[40] !== d || t[41] !== g ? (I = s === `custom` ? (0, X.jsxs)(X.Fragment, {
        children: [(0, X.jsxs)(`div`, {
            className: `flex flex-col gap-1.5`,
            children: [(0, X.jsx)(`label`, {
                htmlFor: `usage-limit-request-description`,
                className: `text-token-text-primary text-sm font-medium`,
                children: (0, X.jsx)(j, {
                    ...Z.customDescriptionLabel
                })
            }), (0, X.jsx)(`textarea`, {
                id: `usage-limit-request-description`,
                name: `usage-limit-request-description`,
                value: l,
                maxLength: 500,
                rows: 4,
                placeholder: o.formatMessage(Z.customDescriptionPlaceholder),
                className: `border-token-border-default bg-token-bg-primary text-token-text-primary placeholder:text-token-text-tertiary focus:border-token-border-heavy resize-none rounded-lg border px-3 py-2 text-sm font-normal outline-none`,
                onChange: e => u(e.target.value)
            })]
        }), (0, X.jsxs)(`div`, {
            className: `flex flex-col gap-1.5`,
            children: [(0, X.jsx)(`label`, {
                htmlFor: `usage-limit-request-url`,
                className: `text-token-text-primary text-sm font-medium`,
                children: (0, X.jsx)(j, {
                    ...Z.customUrlLabel
                })
            }), (0, X.jsx)(`input`, {
                id: `usage-limit-request-url`,
                name: `usage-limit-request-url`,
                type: `url`,
                required: !0,
                value: d,
                placeholder: o.formatMessage(Z.customUrlPlaceholder),
                className: `border-token-border-default bg-token-bg-primary text-token-text-primary placeholder:text-token-text-tertiary focus:border-token-border-heavy rounded-lg border px-3 py-2 text-sm font-normal outline-none`,
                "aria-invalid": g.length > 0 && !_,
                onChange: e => f(e.target.value)
            }), g.length > 0 && !_ ? (0, X.jsx)(`span`, {
                className: `text-token-interactive-label-warning-secondary text-sm font-normal`,
                children: (0, X.jsx)(j, {
                    ...Z.invalidHttps
                })
            }) : null]
        })]
    }) : null, t[36] = _, t[37] = l, t[38] = o, t[39] = s, t[40] = d, t[41] = g, t[42] = I) : I = t[42];
    let L;
    t[43] !== N || t[44] !== F || t[45] !== I ? (L = (0, X.jsxs)(`div`, {
        className: `flex flex-col gap-4`,
        children: [N, F, I]
    }), t[43] = N, t[44] = F, t[45] = I, t[46] = L) : L = t[46];
    let R;
    return t[47] !== i || t[48] !== L || t[49] !== w || t[50] !== E ? (R = (0, X.jsx)(m, {
        isOpen: !0,
        showCloseButton: !0,
        testId: `modal-usage-limit-increase-request`,
        title: b,
        onClose: i,
        primaryButton: w,
        secondaryButton: E,
        children: L
    }), t[47] = i, t[48] = L, t[49] = w, t[50] = E, t[51] = R) : R = t[51], R
}

function Wt(e) {
    return (0, X.jsx)(Re.Item, {
        value: e,
        children: (0, X.jsx)(j, {
            ...Kt(e)
        })
    }, e)
}

function Gt(e) {
    try {
        return new URL(e).protocol === `https:`
    } catch {
        return !1
    }
}

function Kt(e) {
    switch (e) {
        case `openai_native`:
            return Z.openaiNativeLabel;
        case `custom`:
            return Z.customLabel;
        case `disabled`:
            return Z.disabledLabel
    }
}

function qt(e) {
    switch (e) {
        case `openai_native`:
            return Z.openaiNativeDescription;
        case `custom`:
            return Z.customDescription;
        case `disabled`:
            return Z.disabledDescription
    }
}
var Jt, Yt, X, Z, Xt = e((() => {
    Jt = F(), c(), w(), ze(), n(), E(), u(), V(), Yt = t(O()), H(), X = L(), Z = N({
        settingLabel: {
            id: `admin.usageLimits.increaseRequests.setting.title`,
            defaultMessage: `Usage increase request process`
        },
        settingDescription: {
            id: `admin.usageLimits.increaseRequests.setting.description`,
            defaultMessage: `Choose how members request more usage when they reach their monthly limit.`
        },
        modalTitle: {
            id: `admin.usageLimits.increaseRequests.modal.title.usageLimit`,
            defaultMessage: `Usage increase request process`
        },
        requestExperienceLabel: {
            id: `admin.usageLimits.increaseRequests.requestExperience.label`,
            defaultMessage: `Request experience`
        },
        openaiNativeLabel: {
            id: `admin.usageLimits.increaseRequests.openaiNative.label`,
            defaultMessage: `Default`
        },
        openaiNativeDescription: {
            id: `admin.usageLimits.increaseRequests.openaiNative.description.v2`,
            defaultMessage: `Members can request more usage in ChatGPT and Codex. Requests appear in Pending requests.`
        },
        customLabel: {
            id: `admin.usageLimits.increaseRequests.custom.label`,
            defaultMessage: `Custom`
        },
        customDescription: {
            id: `admin.usageLimits.increaseRequests.custom.description`,
            defaultMessage: `Send members to a URL you choose to request more usage.`
        },
        disabledLabel: {
            id: `admin.usageLimits.increaseRequests.disabled.label`,
            defaultMessage: `Disabled`
        },
        disabledDescription: {
            id: `admin.usageLimits.increaseRequests.disabled.description`,
            defaultMessage: `Members cannot request more usage when they reach their monthly limit.`
        },
        customDescriptionLabel: {
            id: `admin.usageLimits.increaseRequests.custom.descriptionLabel`,
            defaultMessage: `Description`
        },
        customDescriptionPlaceholder: {
            id: `admin.usageLimits.increaseRequests.custom.descriptionPlaceholder`,
            defaultMessage: `Contact your manager before requesting additional monthly usage.`
        },
        customUrlLabel: {
            id: `admin.usageLimits.increaseRequests.custom.urlLabel`,
            defaultMessage: `URL`
        },
        customUrlPlaceholder: {
            id: `admin.usageLimits.increaseRequests.custom.urlPlaceholder`,
            defaultMessage: `https://requests.example.com`
        },
        invalidHttps: {
            id: `admin.usageLimits.increaseRequests.invalidHttps`,
            defaultMessage: `Enter a valid URL that starts with https://.`
        },
        loading: {
            id: `admin.usageLimits.increaseRequests.loading`,
            defaultMessage: `Loading…`
        },
        edit: {
            id: `admin.usageLimits.increaseRequests.edit`,
            defaultMessage: `Edit`
        },
        editRequestPolicy: {
            id: `admin.usageLimits.increaseRequests.editRequestPolicy`,
            defaultMessage: `Edit usage increase request process`
        },
        save: {
            id: `admin.usageLimits.increaseRequests.save`,
            defaultMessage: `Save`
        },
        cancel: {
            id: `admin.usageLimits.increaseRequests.cancel`,
            defaultMessage: `Cancel`
        },
        saveSuccess: {
            id: `admin.usageLimits.increaseRequests.saveSuccess`,
            defaultMessage: `Usage increase request process updated.`
        },
        saveError: {
            id: `admin.usageLimits.increaseRequests.saveError`,
            defaultMessage: `We couldn’t update this setting. Please try again.`
        }
    })
}));

function Zt({
    pathname: e,
    search: t,
    workspaceId: n
}) {
    let r = new URL(U(`/usage-limits`, n, {
        includeWorkspaceLoginMethodHint: !0
    }));
    switch (dt(e.split(`/`).at(-1))) {
        case `groups`:
            r.searchParams.set(`tab`, `groups`);
            break;
        case `users`: {
            r.searchParams.set(`tab`, `users`);
            let e = new URLSearchParams(t).get(`query`);
            e && r.searchParams.set(`user_name`, e);
            break
        }
        case `pending-requests`:
            r.searchParams.set(`tab`, `requests`);
            break;
        case `workspace`:
            break
    }
    return r.toString()
}

function Qt() {
    "use forget";
    let e = (0, Tn.c)(5),
        t = Pe(),
        n = ee(),
        r = n?.isEnterprisey() === !0 && a(`3778045255`);
    if (!t.isLoaded) {
        let t;
        return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Q.jsx)(x, {
            className: `icon-xl`
        }), e[0] = t) : t = e[0], t
    }
    if (!t.isEnabled) {
        let t;
        return e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Q.jsx)(Ve, {}), e[1] = t) : t = e[1], t
    }
    if (r) {
        let t = n?.id,
            r;
        return e[2] === t ? r = e[3] : (r = (0, Q.jsx)($t, {
            workspaceId: t
        }), e[2] = t, e[3] = r), r
    }
    let i;
    return e[4] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, Q.jsx)(en, {}), e[4] = i) : i = e[4], i
}

function $t(e) {
    "use forget";
    let t = (0, Tn.c)(16),
        {
            workspaceId: n
        } = e,
        r = ne(),
        i = z(),
        a;
    t[0] === r ? a = t[1] : (a = r.formatMessage($.browserTitle), t[0] = r, t[1] = a);
    let o;
    t[2] === a ? o = t[3] : (o = (0, Q.jsx)(Ge, {
        children: (0, Q.jsx)(`title`, {
            children: a
        })
    }), t[2] = a, t[3] = o);
    let s;
    t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, Q.jsx)(`p`, {
        className: `text-token-text-primary font-[590]`,
        children: (0, Q.jsx)(j, {
            ...$.usageLimitsMovedToAdminConsoleTitle
        })
    }), t[4] = s) : s = t[4];
    let c;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, Q.jsxs)(`div`, {
        className: `flex flex-col gap-1 pb-1 text-[16px] leading-[26px] tracking-[-0.32px]`,
        children: [s, (0, Q.jsx)(`p`, {
            className: `text-token-text-secondary font-normal`,
            children: (0, Q.jsx)(j, {
                ...$.usageLimitsMovedToAdminConsoleBody
            })
        })]
    }), t[5] = c) : c = t[5];
    let l;
    t[6] !== i.pathname || t[7] !== i.search || t[8] !== n ? (l = Zt({
        pathname: i.pathname,
        search: i.search,
        workspaceId: n
    }), t[6] = i.pathname, t[7] = i.search, t[8] = n, t[9] = l) : l = t[9];
    let u;
    t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, Q.jsx)(j, {
        ...$.usageLimitsMovedToAdminConsoleAction
    }), t[10] = u) : u = t[10];
    let d;
    t[11] === l ? d = t[12] : (d = (0, Q.jsx)(Ne, {
        className: `flex min-h-[80vh] items-center justify-center`,
        children: (0, Q.jsxs)(`div`, {
            className: `flex flex-col items-center justify-center gap-4 text-center`,
            children: [c, (0, Q.jsx)(C, {
                as: `a`,
                color: `secondary`,
                openNewTab: !0,
                rel: `noopener noreferrer`,
                size: `large`,
                to: l,
                children: u
            })]
        })
    }), t[11] = l, t[12] = d);
    let f;
    return t[13] !== o || t[14] !== d ? (f = (0, Q.jsxs)(Q.Fragment, {
        children: [o, d]
    }), t[13] = o, t[14] = d, t[15] = f) : f = t[15], f
}

function en() {
    "use forget";
    let e = (0, Tn.c)(88),
        t = ne(),
        n = P(),
        r = M(),
        o = ee(),
        s = te(nn),
        {
            role: c
        } = je(),
        l = o?.id,
        u;
    e[0] !== c || e[1] !== s ? (u = c == null ? s != null && se(s.role) : se(c), e[0] = c, e[1] = s, e[2] = u) : u = e[2];
    let f = u,
        p;
    e[3] === n.tab ? p = e[4] : (p = dt(n.tab), e[3] = n.tab, e[4] = p);
    let m = p,
        h;
    e[5] === o ? h = e[6] : (h = o == null ? null : o.isEnterprisey() || o.isEdu(), e[5] = o, e[6] = h);
    let g = h,
        _ = y(l),
        v;
    e[7] !== o || e[8] !== f || e[9] !== _ ? (v = f && o != null && _.data != null && ge(o) && a(jn), e[7] = o, e[8] = f, e[9] = _, e[10] = v) : v = e[10];
    let b = v,
        x;
    e[11] !== m || e[12] !== l ? (x = m === `pending-requests` ? pt(l) : mt(l), e[11] = m, e[12] = l, e[13] = x) : x = e[13];
    let C;
    e[14] !== m || e[15] !== l ? (C = async () => {
        if (l == null) throw Error(`Workspace id is required`);
        return await ht(l, m === `pending-requests` ? void 0 : {
            fetchAllPages: !1,
            pageSize: An
        })
    }, e[14] = m, e[15] = l, e[16] = C) : C = e[16];
    let w = l != null && b,
        T;
    e[17] !== x || e[18] !== C || e[19] !== w ? (T = {
        queryKey: x,
        queryFn: C,
        enabled: w,
        staleTime: 0,
        refetchOnMount: `always`,
        refetchOnWindowFocus: `always`
    }, e[17] = x, e[18] = C, e[19] = w, e[20] = T) : T = e[20];
    let E = re(T),
        D;
    e[21] === E.data?.items ? D = e[22] : (D = E.data?.items.some(tn) ?? !1, e[21] = E.data?.items, e[22] = D);
    let O = D,
        k = o == null || _.isLoading ? null : b ? _.data?.kind === `openai_native` || m === `pending-requests` && E.fetchStatus !== `idle` ? !0 : E.isPending ? null : E.isError || O || !!E.data?.cursor : !1,
        A = g === !1 && m === `groups` || k !== !0 && m === `pending-requests` ? `workspace` : m,
        N;
    e[23] !== o || e[24] !== f || e[25] !== m ? (N = m !== `pending-requests` && f && o != null && (o.isEnterprisey() || o.isEdu()) && a(Mn), e[23] = o, e[24] = f, e[25] = m, e[26] = N) : N = e[26];
    let F = N,
        I = m !== `pending-requests` && f && o != null,
        L;
    e[27] !== g || e[28] !== k ? (L = e => !(g === !1 && e === `groups` || k !== !0 && e === `pending-requests`), e[27] = g, e[28] = k, e[29] = L) : L = e[29];
    let R = ft.filter(L),
        z, ie;
    e[30] === l ? (z = e[31], ie = e[32]) : (z = [`spend-controls-explainability`, l], ie = async () => {
        if (l == null) throw Error(`Workspace id is required`);
        return await d.safeGet(`/accounts/{account_id}/spend-controls/explainability`, {
            parameters: {
                path: {
                    account_id: l
                }
            }
        })
    }, e[30] = l, e[31] = z, e[32] = ie);
    let B = l != null && F,
        V;
    e[33] !== z || e[34] !== ie || e[35] !== B ? (V = {
        queryKey: z,
        queryFn: ie,
        enabled: B
    }, e[33] = z, e[34] = ie, e[35] = B, e[36] = V) : V = e[36];
    let H = re(V),
        U = F ? H.data : void 0,
        W;
    if (e[37] !== I) {
        let t = I ? i(Pn) : null;
        W = t == null ? void 0 : {
            thresholdCreditsPerMember: t.get(`low_limit_warning_threshold_credits_per_member`, Fn),
            averageMonthlyCreditsPerMember: t.get(`low_limit_warning_average_monthly_credits_per_member`, In),
            powerUserMonthlyCreditsPerMember: t.get(`low_limit_warning_power_user_monthly_credits_per_member`, Ln)
        }, e[37] = I, e[38] = W
    } else W = e[38];
    let G = W,
        oe, ce;
    e[39] !== r || e[40] !== E.isFetching || e[41] !== m || e[42] !== g || e[43] !== k ? (oe = () => {
        (g === !1 && m === `groups` || k === !1 && !E.isFetching && m === `pending-requests`) && r(ut(`workspace`), {
            replace: !0
        })
    }, ce = [r, E.isFetching, m, g, k], e[39] = r, e[40] = E.isFetching, e[41] = m, e[42] = g, e[43] = k, e[44] = oe, e[45] = ce) : (oe = e[44], ce = e[45]), (0, En.useEffect)(oe, ce);
    let K;
    e[46] === t ? K = e[47] : (K = t.formatMessage($.browserTitle), e[46] = t, e[47] = K);
    let le;
    e[48] === K ? le = e[49] : (le = (0, Q.jsx)(Ge, {
        children: (0, Q.jsx)(`title`, {
            children: K
        })
    }), e[48] = K, e[49] = le);
    let ue = Ie,
        de;
    e[50] === t ? de = e[51] : (de = t.formatMessage($.pageTitle), e[50] = t, e[51] = de);
    let fe = F ? $.pageSubtitleWithEstimatedValues : $.pageSubtitle,
        pe;
    e[52] === fe ? pe = e[53] : (pe = (0, Q.jsx)(j, {
        ...fe
    }), e[52] = fe, e[53] = pe);
    let me;
    e[54] !== A || e[55] !== O || e[56] !== r ? (me = e => (0, Q.jsx)(`button`, {
        type: `button`,
        className: S(`min-h-[32px] border-b py-[10px] text-[14px] leading-5 whitespace-nowrap`, A === e ? `text-token-text-primary border-current` : `text-token-text-tertiary hover:text-token-text-secondary cursor-pointer border-transparent`),
        onClick: () => r(ut(e)),
        children: (0, Q.jsxs)(`span`, {
            className: `inline-flex items-center gap-1.5`,
            children: [(0, Q.jsx)(j, {
                ...$[e]
            }), e === `pending-requests` && O ? (0, Q.jsxs)(Q.Fragment, {
                children: [(0, Q.jsx)(ae, {
                    color: `blue`,
                    className: `shrink-0`
                }), (0, Q.jsx)(`span`, {
                    className: `sr-only`,
                    children: (0, Q.jsx)(j, {
                        ...$.pendingRequestsAvailable
                    })
                })]
            }) : null]
        })
    }, e), e[54] = A, e[55] = O, e[56] = r, e[57] = me) : me = e[57];
    let he = R.map(me),
        _e;
    e[58] === he ? _e = e[59] : (_e = (0, Q.jsx)(`div`, {
        className: `flex items-end justify-between gap-4`,
        children: (0, Q.jsx)(`div`, {
            className: `flex items-center gap-4`,
            children: he
        })
    }), e[58] = he, e[59] = _e);
    let ve;
    e[60] !== ue || e[61] !== de || e[62] !== pe || e[63] !== _e ? (ve = (0, Q.jsx)(ue, {
        contentWidth: `medium`,
        title: de,
        subtitle: pe,
        tabsHeader: _e
    }), e[60] = ue, e[61] = de, e[62] = pe, e[63] = _e, e[64] = ve) : ve = e[64];
    let ye;
    e[65] !== A || e[66] !== U || e[67] !== G ? (ye = A === `workspace` ? (0, Q.jsx)(rn, {
        explainabilityContext: U,
        lowLimitWarningConfig: G
    }) : null, e[65] = A, e[66] = U, e[67] = G, e[68] = ye) : ye = e[68];
    let be;
    e[69] !== A || e[70] !== U || e[71] !== G ? (be = A === `users` ? (0, Q.jsx)(on, {
        explainabilityContext: U,
        lowLimitWarningConfig: G
    }) : null, e[69] = A, e[70] = U, e[71] = G, e[72] = be) : be = e[72];
    let xe;
    e[73] !== A || e[74] !== U || e[75] !== G ? (xe = A === `groups` ? (0, Q.jsx)(fn, {
        explainabilityContext: U,
        lowLimitWarningConfig: G
    }) : null, e[73] = A, e[74] = U, e[75] = G, e[76] = xe) : xe = e[76];
    let Se;
    e[77] === A ? Se = e[78] : (Se = A === `pending-requests` ? (0, Q.jsx)(Et, {}) : null, e[77] = A, e[78] = Se);
    let Ce;
    e[79] !== ye || e[80] !== be || e[81] !== xe || e[82] !== Se ? (Ce = (0, Q.jsx)(Ne, {
        contentWidth: `medium`,
        showSpinner: !1,
        children: (0, Q.jsxs)(`div`, {
            className: `pt-4 pb-8`,
            children: [ye, be, xe, Se]
        })
    }), e[79] = ye, e[80] = be, e[81] = xe, e[82] = Se, e[83] = Ce) : Ce = e[83];
    let we;
    return e[84] !== le || e[85] !== ve || e[86] !== Ce ? (we = (0, Q.jsxs)(Q.Fragment, {
        children: [le, ve, Ce]
    }), e[84] = le, e[85] = ve, e[86] = Ce, e[87] = we) : we = e[87], we
}

function tn(e) {
    return e.status === `pending`
}

function nn(e) {
    return e.currentWorkspace
}

function rn(e) {
    "use forget";
    let t = (0, Tn.c)(58),
        {
            explainabilityContext: n,
            lowLimitWarningConfig: i
        } = e,
        o = ne(),
        s = A(),
        c = ee(),
        l = te(an),
        {
            role: u
        } = je(),
        [p, m] = (0, En.useState)(!1),
        h = c?.id,
        g;
    t[0] !== u || t[1] !== l ? (g = u == null ? l != null && se(l.role) : se(u), t[0] = u, t[1] = l, t[2] = g) : g = t[2];
    let _ = g,
        v, y;
    t[3] === h ? (v = t[4], y = t[5]) : (v = [`workspace-spend-controls`, h], y = async () => {
        if (!h) throw Error(`Workspace id is required`);
        return await d.safeGet(`/accounts/{account_id}/spend-controls/workspace`, {
            parameters: {
                path: {
                    account_id: h
                }
            }
        })
    }, t[3] = h, t[4] = v, t[5] = y);
    let b = !!h,
        x;
    t[6] !== v || t[7] !== y || t[8] !== b ? (x = {
        queryKey: v,
        queryFn: y,
        enabled: b
    }, t[6] = v, t[7] = y, t[8] = b, t[9] = x) : x = t[9];
    let S = re(x),
        C;
    t[10] === h ? C = t[11] : (C = async e => {
        if (!h) throw Error(`Workspace id is required`);
        return await d.safePost(`/accounts/{account_id}/settings/seat_type_credit_limits`, {
            parameters: {
                path: {
                    account_id: h
                }
            },
            requestBody: wn(e)
        })
    }, t[10] = h, t[11] = C);
    let w;
    t[12] !== s || t[13] !== h ? (w = async e => {
        if (!h) throw Error(`Workspace id is required`);
        s.setQueryData([`workspace-settings`, h], e), await s.invalidateQueries({
            queryKey: [`workspace-settings`, h]
        }), await s.invalidateQueries({
            queryKey: [`workspace-spend-controls`, h]
        }), await Qe({
            queryClient: s,
            workspaceId: h,
            refetchType: `all`
        })
    }, t[12] = s, t[13] = h, t[14] = w) : w = t[14];
    let T;
    t[15] !== C || t[16] !== w ? (T = {
        mutationFn: C,
        onSuccess: w
    }, t[15] = C, t[16] = w, t[17] = T) : T = t[17];
    let E = ie(T),
        D = S.data?.default_user_credit_limits,
        O;
    t[18] === D ? O = t[19] : (O = le(D), t[18] = D, t[19] = O);
    let k = O,
        M = typeof k == `number` ? k : null,
        N = i != null && (p || M != null && M < i.thresholdCreditsPerMember) && a(Nn) ? i : void 0,
        P;
    t[20] !== o || t[21] !== E ? (P = async e => {
        try {
            await E.mutateAsync(e), f().success(o.formatMessage($.limitSaveSuccess), {
                hasCloseButton: !0
            }), m(!1)
        } catch {
            f().warning(o.formatMessage($.limitSaveError), {
                hasCloseButton: !0
            })
        }
    }, t[20] = o, t[21] = E, t[22] = P) : P = t[22];
    let F = P,
        I;
    t[23] !== p || t[24] !== F ? (I = async e => {
        p && await F(e)
    }, t[23] = p, t[24] = F, t[25] = I) : I = t[25];
    let L = I,
        R;
    t[26] === Symbol.for(`react.memo_cache_sentinel`) ? (R = (0, Q.jsx)(`div`, {
        className: `text-token-text-primary text-base leading-[26px] font-semibold tracking-[-0.32px]`,
        children: (0, Q.jsx)(j, {
            ...$.workspaceDefaultLimitLabel
        })
    }), t[26] = R) : R = t[26];
    let z;
    t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (z = (0, Q.jsxs)(`div`, {
        children: [R, (0, Q.jsx)(`div`, {
            className: `text-token-text-tertiary text-sm leading-5 tracking-[-0.15px]`,
            children: (0, Q.jsx)(j, {
                ...$.workspaceDefaultLimitDescription
            })
        })]
    }), t[27] = z) : z = t[27];
    let B;
    t[28] !== k || t[29] !== n || t[30] !== _ || t[31] !== E || t[32] !== S.isError || t[33] !== S.isFetching || t[34] !== S.isLoading ? (B = (0, Q.jsxs)(`div`, {
        className: `flex w-full items-start justify-between`,
        children: [z, S.isLoading || S.isFetching ? (0, Q.jsx)(r, {
            className: `text-token-text-tertiary mt-1 h-4 w-4`
        }) : (0, Q.jsxs)(`div`, {
            className: `flex flex-col items-end gap-0.5`,
            children: [(0, Q.jsx)(Ye, {
                explainabilityContext: n,
                limit: k
            }), (0, Q.jsx)(vn, {
                disabled: !_,
                testId: `workspace-usage-limits-admin-disabled-tooltip-trigger`,
                children: (0, Q.jsx)(_n, {
                    disabled: !_ || S.isError || E.isPending,
                    onClick: () => m(!0),
                    label: k == null ? $.addButton : $.editButton
                })
            })]
        })]
    }), t[28] = k, t[29] = n, t[30] = _, t[31] = E, t[32] = S.isError, t[33] = S.isFetching, t[34] = S.isLoading, t[35] = B) : B = t[35];
    let V;
    t[36] !== N || t[37] !== M || t[38] !== n ? (V = (0, Q.jsx)(Je, {
        className: `mt-4`,
        explainabilityContext: n,
        limit: M,
        lowLimitWarningConfig: N,
        variant: `workspace-default`
    }), t[36] = N, t[37] = M, t[38] = n, t[39] = V) : V = t[39];
    let H;
    t[40] !== B || t[41] !== V ? (H = (0, Q.jsxs)(`div`, {
        className: `border-token-border-default border-b pb-4`,
        children: [B, V]
    }), t[40] = B, t[41] = V, t[42] = H) : H = t[42];
    let U;
    t[43] !== _ || t[44] !== h ? (U = (0, Q.jsx)(Ht, {
        workspaceId: h,
        canEdit: _
    }), t[43] = _, t[44] = h, t[45] = U) : U = t[45];
    let W;
    t[46] !== H || t[47] !== U ? (W = (0, Q.jsxs)(`section`, {
        children: [H, U]
    }), t[46] = H, t[47] = U, t[48] = W) : W = t[48];
    let ae;
    t[49] !== N || t[50] !== k || t[51] !== n || t[52] !== L || t[53] !== p ? (ae = p ? (0, Q.jsx)(ct, {
        currentLimit: k,
        placeholder: ``,
        onClose: () => m(!1),
        onSave: L,
        renderLimitContext: e => (0, Q.jsx)(qe, {
            explainabilityContext: n,
            limit: e,
            lowLimitWarningConfig: N
        })
    }) : null, t[49] = N, t[50] = k, t[51] = n, t[52] = L, t[53] = p, t[54] = ae) : ae = t[54];
    let G;
    return t[55] !== W || t[56] !== ae ? (G = (0, Q.jsxs)(Q.Fragment, {
        children: [W, ae]
    }), t[55] = W, t[56] = ae, t[57] = G) : G = t[57], G
}

function an(e) {
    return e.currentWorkspace
}

function on(e) {
    "use forget";
    let t = (0, Tn.c)(83),
        {
            explainabilityContext: n,
            lowLimitWarningConfig: i
        } = e,
        o = ne(),
        s = A(),
        c = ee(),
        l = te(dn),
        {
            role: u
        } = je(),
        [p] = k(),
        m;
    t[0] === p ? m = t[1] : (m = p.get(`query`) ?? ``, t[0] = p, t[1] = m);
    let h = m,
        [g, _] = (0, En.useState)(0),
        [v, y] = (0, En.useState)(h),
        [b, x] = (0, En.useState)(h),
        C;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (C = {
        field: `name`,
        direction: `ASC`
    }, t[2] = C) : C = t[2];
    let [w, E] = (0, En.useState)(C), [D, O] = (0, En.useState)(null), M = D != null && i != null && a(Nn) ? i : void 0, N = c?.id, P;
    t[3] !== u || t[4] !== l ? (P = u == null ? l != null && se(l.role) : se(u), t[3] = u, t[4] = l, t[5] = P) : P = t[5];
    let F = P,
        I;
    t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (I = T(e => {
        _(0), x(e)
    }, 300, {
        leading: !1,
        trailing: !0
    }), t[6] = I) : I = t[6];
    let L = I,
        R, z;
    t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (R = () => () => L.cancel(), z = [L], t[7] = R, t[8] = z) : (R = t[7], z = t[8]), (0, En.useEffect)(R, z);
    let V, H;
    t[9] === h ? (V = t[10], H = t[11]) : (V = () => {
        _(0), y(h), x(h)
    }, H = [h], t[9] = h, t[10] = V, t[11] = H), (0, En.useEffect)(V, H);
    let U = g * kn,
        W;
    t[12] !== b || t[13] !== w.direction || t[14] !== w.field || t[15] !== U || t[16] !== N ? (W = nt(N, U, b, kn, w.field, w.direction), t[12] = b, t[13] = w.direction, t[14] = w.field, t[15] = U, t[16] = N, t[17] = W) : W = t[17];
    let ae;
    t[18] !== b || t[19] !== g || t[20] !== w.direction || t[21] !== w.field || t[22] !== N ? (ae = async () => {
        if (!N) throw Error(`Workspace id is required`);
        return await d.safeGet(`/accounts/{account_id}/spend-controls/users`, {
            parameters: {
                path: {
                    account_id: N
                },
                query: {
                    offset: g * kn,
                    limit: kn,
                    query: b,
                    order_by_field: w.field,
                    order_by_direction: w.direction
                }
            }
        })
    }, t[18] = b, t[19] = g, t[20] = w.direction, t[21] = w.field, t[22] = N, t[23] = ae) : ae = t[23];
    let G = !!N,
        oe;
    t[24] !== W || t[25] !== ae || t[26] !== G ? (oe = {
        queryKey: W,
        queryFn: ae,
        enabled: G,
        placeholderData: B
    }, t[24] = W, t[25] = ae, t[26] = G, t[27] = oe) : oe = t[27];
    let K = re(oe),
        ue = K.data,
        de;
    t[28] === N ? de = t[29] : (de = async e => {
        let {
            userId: t,
            limit: n
        } = e;
        if (!N) throw Error(`Workspace id is required`);
        return await d.safePatch(`/accounts/{account_id}/users/{user_id}`, {
            parameters: {
                path: {
                    account_id: N,
                    user_id: t
                }
            },
            requestBody: {
                credit_limits: he(n)
            }
        })
    }, t[28] = N, t[29] = de);
    let fe;
    t[30] !== s || t[31] !== N ? (fe = async e => {
        if (!N) return {
            previousCacheEntries: []
        };
        await it({
            queryClient: s,
            workspaceId: N
        });
        let t = et({
            queryClient: s,
            workspaceId: N
        });
        return rt({
            queryClient: s,
            workspaceId: N,
            userId: e.userId,
            creditLimits: he(e.limit)
        }), {
            previousCacheEntries: t
        }
    }, t[30] = s, t[31] = N, t[32] = fe) : fe = t[32];
    let pe;
    t[33] === s ? pe = t[34] : (pe = (e, t, n) => {
        n != null && tt({
            queryClient: s,
            snapshot: n.previousCacheEntries
        })
    }, t[33] = s, t[34] = pe);
    let me;
    t[35] !== s || t[36] !== N ? (me = async (e, t) => {
        N && (await Qe({
            queryClient: s,
            workspaceId: N,
            refetchType: `active`
        }), rt({
            queryClient: s,
            workspaceId: N,
            userId: t.userId,
            creditLimits: he(t.limit),
            updateEffectiveHardCap: t.limit != null
        }), await at({
            queryClient: s,
            workspaceId: N,
            refetchType: `active`
        }))
    }, t[35] = s, t[36] = N, t[37] = me) : me = t[37];
    let ge;
    t[38] !== de || t[39] !== fe || t[40] !== pe || t[41] !== me ? (ge = {
        mutationFn: de,
        onMutate: fe,
        onError: pe,
        onSuccess: me
    }, t[38] = de, t[39] = fe, t[40] = pe, t[41] = me, t[42] = ge) : ge = t[42];
    let ve = ie(ge),
        ye;
    t[43] !== D || t[44] !== o || t[45] !== ve ? (ye = async e => {
        if (D != null) try {
            await ve.mutateAsync({
                userId: D.id,
                limit: e
            }), f().success(o.formatMessage($.limitSaveSuccess), {
                hasCloseButton: !0
            }), O(null)
        } catch {
            f().warning(o.formatMessage($.limitSaveError), {
                hasCloseButton: !0
            })
        }
    }, t[43] = D, t[44] = o, t[45] = ve, t[46] = ye) : ye = t[46];
    let be = ye,
        xe;
    t[47] !== ue?.items || t[48] !== K.isError ? (xe = K.isError ? [] : ue?.items ?? [], t[47] = ue?.items, t[48] = K.isError, t[49] = xe) : xe = t[49];
    let Se = xe,
        Ce = Math.ceil((ue?.total ?? 0) / kn),
        we = N == null || ue === void 0 && (K.isPending || K.isFetching),
        Te = K.isPlaceholderData,
        Ee, De;
    t[50] !== Ce || t[51] !== g ? (Ee = () => {
        g >= Ce && Ce !== 0 && _(Math.max(Ce - 1, 0))
    }, De = [Ce, g], t[50] = Ce, t[51] = g, t[52] = Ee, t[53] = De) : (Ee = t[52], De = t[53]), (0, En.useEffect)(Ee, De);
    let Oe;
    t[54] === Symbol.for(`react.memo_cache_sentinel`) ? (Oe = e => {
        y(e.target.value), L(e.target.value)
    }, t[54] = Oe) : Oe = t[54];
    let ke;
    t[55] === o ? ke = t[56] : (ke = o.formatMessage($.searchUsersPlaceholder), t[55] = o, t[56] = ke);
    let Ae;
    t[57] !== v || t[58] !== ke ? (Ae = (0, Q.jsx)(`div`, {
        className: `mb-4.5 flex items-center justify-between`,
        children: (0, Q.jsx)(ce, {
            className: `w-full`,
            value: v,
            onChange: Oe,
            placeholder: ke,
            inputClassName: `w-full rounded-full! text-sm`
        })
    }), t[57] = v, t[58] = ke, t[59] = Ae) : Ae = t[59];
    let Me;
    t[60] !== n || t[61] !== F || t[62] !== o || t[63] !== we || t[64] !== Te || t[65] !== Se || t[66] !== Ce || t[67] !== g || t[68] !== w.direction || t[69] !== w.field || t[70] !== K.isError ? (Me = we ? (0, Q.jsx)(`div`, {
        className: `flex min-h-[18rem] items-center justify-center`,
        children: (0, Q.jsx)(r, {})
    }) : (0, Q.jsxs)(Q.Fragment, {
        children: [(0, Q.jsxs)(`div`, {
            className: `relative`,
            children: [(0, Q.jsxs)(q.Root, {
                fixed: !0,
                size: `normal`,
                children: [(0, Q.jsxs)(`colgroup`, {
                    children: [(0, Q.jsx)(`col`, {
                        className: `w-[38%]`
                    }), (0, Q.jsx)(`col`, {
                        className: `w-[18%]`
                    }), (0, Q.jsx)(`col`, {
                        className: `w-[22%]`
                    }), (0, Q.jsx)(`col`, {
                        className: `w-[22%]`
                    })]
                }), (0, Q.jsxs)(q.Header, {
                    children: [(0, Q.jsx)(yn, {
                        active: w.field === `name`,
                        direction: w.direction,
                        onSort: () => {
                            _(0), E(un)
                        },
                        children: (0, Q.jsx)(j, {
                            ...$.nameColumn
                        })
                    }), (0, Q.jsx)(yn, {
                        active: w.field === `current_month_usage`,
                        direction: w.direction,
                        onSort: () => {
                            _(0), E(ln)
                        },
                        children: (0, Q.jsx)(j, {
                            ...$.usedThisMonthColumn
                        })
                    }), (0, Q.jsx)(yn, {
                        active: w.field === `effective_hard_cap_limit`,
                        direction: w.direction,
                        onSort: () => {
                            _(0), E(cn)
                        },
                        children: (0, Q.jsx)(j, {
                            ...$.currentLimitColumn
                        })
                    }), (0, Q.jsx)(yn, {
                        active: w.field === `override_hard_cap_limit`,
                        direction: w.direction,
                        onSort: () => {
                            _(0), E(sn)
                        },
                        children: (0, Q.jsx)(j, {
                            ...$.overrideLimitColumn
                        })
                    })]
                }), (0, Q.jsxs)(q.Body, {
                    className: S(Te && `pointer-events-none opacity-50`),
                    children: [K.isError ? (0, Q.jsx)(q.Row, {
                        className: `[&>td]:py-3`,
                        children: (0, Q.jsx)(q.Cell, {
                            colSpan: 4,
                            children: (0, Q.jsx)(`div`, {
                                className: `text-token-text-tertiary`,
                                children: (0, Q.jsx)(j, {
                                    ...$.usersLoadError
                                })
                            })
                        })
                    }) : null, Se.map(e => {
                        let t = e.name || e.email || e.id,
                            r = e.email || o.formatMessage($.noEmail),
                            i = le(e.override_credit_limits);
                        return (0, Q.jsxs)(q.Row, {
                            className: `[&>td]:py-3`,
                            children: [(0, Q.jsxs)(q.Cell, {
                                divClassName: `min-h-[40px] min-w-0 items-center`,
                                children: [(0, Q.jsx)(`div`, {
                                    className: `relative shrink-0 pe-3`,
                                    children: (0, Q.jsx)(Ue, {
                                        userName: t,
                                        isScimManaged: e.is_scim_managed
                                    })
                                }), (0, Q.jsxs)(`div`, {
                                    className: `min-w-0`,
                                    children: [(0, Q.jsx)(`div`, {
                                        className: `min-w-0 truncate`,
                                        title: t,
                                        children: t
                                    }), (0, Q.jsx)(`div`, {
                                        className: `text-body-small-regular text-token-text-secondary truncate`,
                                        title: r,
                                        children: r
                                    })]
                                })]
                            }), (0, Q.jsx)(q.Cell, {
                                children: (0, Q.jsx)(j, {
                                    ...$.creditValue,
                                    values: {
                                        limit: o.formatNumber(e.current_month_usage ?? 0, {
                                            maximumFractionDigits: 1
                                        })
                                    }
                                })
                            }), (0, Q.jsx)(q.Cell, {
                                children: (0, Q.jsx)(xn, {
                                    effectiveHardCap: e.effective_hard_cap,
                                    inheritedHardCap: e.inherited_hard_cap,
                                    explainabilityContext: n
                                })
                            }), (0, Q.jsx)(q.Cell, {
                                children: (0, Q.jsxs)(`div`, {
                                    className: `flex flex-col items-start gap-0.5`,
                                    children: [i == null ? (0, Q.jsx)(`span`, {
                                        className: `text-token-text-secondary`,
                                        children: (0, Q.jsx)(j, {
                                            ...$.noOverride
                                        })
                                    }) : (0, Q.jsx)(Ye, {
                                        explainabilityContext: n,
                                        limit: i
                                    }), (0, Q.jsx)(vn, {
                                        disabled: !F,
                                        testId: `${e.id}-usage-limits-admin-disabled-tooltip-trigger`,
                                        children: (0, Q.jsx)(_n, {
                                            disabled: !F || Te,
                                            onClick: () => O(e),
                                            label: i == null ? $.addButton : $.editButton
                                        })
                                    })]
                                })
                            })]
                        }, e.id)
                    }), !K.isError && Se.length === 0 ? (0, Q.jsx)(q.Row, {
                        className: `[&>td]:py-3`,
                        children: (0, Q.jsx)(q.Cell, {
                            colSpan: 4,
                            children: (0, Q.jsx)(`div`, {
                                className: `text-token-text-tertiary`,
                                children: (0, Q.jsx)(j, {
                                    ...$.noUsersFound
                                })
                            })
                        })
                    }) : null]
                })]
            }), Te ? (0, Q.jsx)(`div`, {
                className: `pointer-events-none absolute inset-0 flex items-center justify-center`,
                children: (0, Q.jsx)(r, {
                    className: `text-token-text-tertiary h-5 w-5`
                })
            }) : null]
        }), (0, Q.jsx)(`div`, {
            className: `relative mt-4 min-h-[20px]`,
            children: Ce > 1 ? (0, Q.jsx)(`div`, {
                className: `absolute start-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 justify-center`,
                children: (0, Q.jsx)(_e, {
                    currentPage: g,
                    onChangeIndex: _,
                    length: Ce
                })
            }) : null
        })]
    }), t[60] = n, t[61] = F, t[62] = o, t[63] = we, t[64] = Te, t[65] = Se, t[66] = Ce, t[67] = g, t[68] = w.direction, t[69] = w.field, t[70] = K.isError, t[71] = Me) : Me = t[71];
    let Ne;
    t[72] !== Ae || t[73] !== Me ? (Ne = (0, Q.jsxs)(`section`, {
        children: [Ae, Me]
    }), t[72] = Ae, t[73] = Me, t[74] = Ne) : Ne = t[74];
    let Pe;
    t[75] !== M || t[76] !== D || t[77] !== n || t[78] !== be ? (Pe = D == null ? null : (0, Q.jsx)(ct, {
        allowUnlimited: !0,
        currentLimit: le(D.override_credit_limits),
        getValidationResult: void 0,
        placeholder: ``,
        onClose: () => O(null),
        onSave: be,
        renderLimitContext: e => (0, Q.jsx)(qe, {
            explainabilityContext: n,
            limit: e,
            lowLimitWarningConfig: M
        })
    }), t[75] = M, t[76] = D, t[77] = n, t[78] = be, t[79] = Pe) : Pe = t[79];
    let Fe;
    return t[80] !== Ne || t[81] !== Pe ? (Fe = (0, Q.jsxs)(Q.Fragment, {
        children: [Ne, Pe]
    }), t[80] = Ne, t[81] = Pe, t[82] = Fe) : Fe = t[82], Fe
}

function sn(e) {
    return bn(e, `override_hard_cap_limit`, `DESC`)
}

function cn(e) {
    return bn(e, `effective_hard_cap_limit`, `DESC`)
}

function ln(e) {
    return bn(e, `current_month_usage`, `DESC`)
}

function un(e) {
    return bn(e, `name`, `ASC`)
}

function dn(e) {
    return e.currentWorkspace
}

function fn(e) {
    "use forget";
    let t = (0, Tn.c)(52),
        {
            explainabilityContext: n,
            lowLimitWarningConfig: i
        } = e,
        o = ne(),
        s = A(),
        c = ee(),
        l = te(gn),
        {
            role: u
        } = je(),
        [p, m] = (0, En.useState)(``),
        h;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (h = {
        field: `group_name`,
        direction: `ASC`
    }, t[0] = h) : h = t[0];
    let [g, _] = (0, En.useState)(h), [v, y] = (0, En.useState)(null), b = v != null && i != null && a(Nn) ? i : void 0, x = c?.id, S;
    t[1] !== u || t[2] !== l ? (S = u == null ? l != null && se(l.role) : se(u), t[1] = u, t[2] = l, t[3] = S) : S = t[3];
    let C = S,
        w, T;
    t[4] === x ? (w = t[5], T = t[6]) : (w = [`group-spend-controls`, x], T = async () => {
        if (!x) throw Error(`Workspace id is required`);
        return await d.safeGet(`/accounts/{account_id}/spend-controls/groups`, {
            parameters: {
                path: {
                    account_id: x
                }
            }
        })
    }, t[4] = x, t[5] = w, t[6] = T);
    let E = !!x,
        D;
    t[7] !== w || t[8] !== T || t[9] !== E ? (D = {
        queryKey: w,
        queryFn: T,
        enabled: E
    }, t[7] = w, t[8] = T, t[9] = E, t[10] = D) : D = t[10];
    let O = re(D),
        k;
    t[11] === x ? k = t[12] : (k = async e => {
        let {
            groupId: t,
            limit: n
        } = e;
        if (!x) throw Error(`Workspace id is required`);
        return await d.safePatch(`/accounts/{account_id}/groups/{group_id}/spend-controls`, {
            parameters: {
                path: {
                    account_id: x,
                    group_id: t
                }
            },
            requestBody: {
                default_user_credit_limits: he(n)
            }
        })
    }, t[11] = x, t[12] = k);
    let M;
    t[13] !== s || t[14] !== x ? (M = async () => {
        x && (await s.invalidateQueries({
            queryKey: [`group-spend-controls`, x]
        }), await Qe({
            queryClient: s,
            workspaceId: x,
            refetchType: `all`
        }))
    }, t[13] = s, t[14] = x, t[15] = M) : M = t[15];
    let N;
    t[16] !== k || t[17] !== M ? (N = {
        mutationFn: k,
        onSuccess: M
    }, t[16] = k, t[17] = M, t[18] = N) : N = t[18];
    let P = ie(N),
        F = O.data,
        I, L;
    if (t[19] !== v || t[20] !== n || t[21] !== p || t[22] !== O.isFetching || t[23] !== O.isPending || t[24] !== F || t[25] !== C || t[26] !== o || t[27] !== g || t[28] !== P || t[29] !== x) {
        let e = Array.isArray(F) ? F : F?.items ?? [],
            i = x == null || O.isPending || O.isFetching,
            a = p.trim().toLowerCase(),
            s = a === `` ? e : e.filter(e => e.group_name.toLowerCase().includes(a)),
            c;
        t[32] === g ? c = t[33] : (c = (e, t) => {
            let n;
            if (g.field === `group_name`) n = e.group_name.localeCompare(t.group_name);
            else if (g.field === `num_members`) n = e.num_members - t.num_members;
            else {
                let r = le(e.default_user_credit_limits),
                    i = le(t.default_user_credit_limits);
                if (r == null) return i == null ? 0 : 1;
                if (i == null) return -1;
                let a = [r === pe, typeof r == `number` ? r : 0],
                    o = [i === pe, typeof i == `number` ? i : 0];
                n = Number(a[0]) - Number(o[0]) || a[1] - o[1]
            }
            return g.direction === `ASC` ? n : -n
        }, t[32] = g, t[33] = c);
        let l = s.toSorted(c),
            u;
        t[34] !== v || t[35] !== o || t[36] !== P ? (u = async e => {
            if (v != null) try {
                await P.mutateAsync({
                    groupId: v.group_id,
                    limit: e
                }), f().success(o.formatMessage($.limitSaveSuccess), {
                    hasCloseButton: !0
                }), y(null)
            } catch {
                f().warning(o.formatMessage($.limitSaveError), {
                    hasCloseButton: !0
                })
            }
        }, t[34] = v, t[35] = o, t[36] = P, t[37] = u) : u = t[37], I = u;
        let d;
        t[38] === Symbol.for(`react.memo_cache_sentinel`) ? (d = e => m(e.target.value), t[38] = d) : d = t[38];
        let h;
        t[39] === o ? h = t[40] : (h = o.formatMessage($.searchGroupsPlaceholder), t[39] = o, t[40] = h);
        let ee;
        t[41] !== p || t[42] !== h ? (ee = (0, Q.jsx)(`div`, {
            className: `mb-4.5 flex items-center justify-between`,
            children: (0, Q.jsx)(ce, {
                className: `w-full`,
                value: p,
                onChange: d,
                placeholder: h,
                inputClassName: `w-full rounded-full! text-sm`
            })
        }), t[41] = p, t[42] = h, t[43] = ee) : ee = t[43], L = (0, Q.jsxs)(`section`, {
            children: [ee, i ? (0, Q.jsx)(`div`, {
                className: `flex min-h-[18rem] items-center justify-center`,
                children: (0, Q.jsx)(r, {})
            }) : (0, Q.jsxs)(q.Root, {
                fixed: !0,
                size: `normal`,
                children: [(0, Q.jsxs)(`colgroup`, {
                    children: [(0, Q.jsx)(`col`, {
                        className: `w-[34%]`
                    }), (0, Q.jsx)(`col`, {
                        className: `w-[27%]`
                    }), (0, Q.jsx)(`col`, {
                        className: `w-[39%]`
                    })]
                }), (0, Q.jsxs)(q.Header, {
                    children: [(0, Q.jsx)(yn, {
                        active: g.field === `group_name`,
                        direction: g.direction,
                        onSort: () => _(hn),
                        children: (0, Q.jsx)(j, {
                            ...$.groupColumn
                        })
                    }), (0, Q.jsx)(yn, {
                        active: g.field === `num_members`,
                        direction: g.direction,
                        onSort: () => _(mn),
                        children: (0, Q.jsx)(j, {
                            ...$.membersColumn
                        })
                    }), (0, Q.jsx)(yn, {
                        active: g.field === `default_limit`,
                        direction: g.direction,
                        onSort: () => _(pn),
                        children: (0, Q.jsx)(j, {
                            ...$.defaultMonthlyLimitColumn
                        })
                    })]
                }), (0, Q.jsxs)(q.Body, {
                    children: [l.map(e => {
                        let t = le(e.default_user_credit_limits);
                        return (0, Q.jsxs)(q.Row, {
                            className: `[&>td]:py-3`,
                            children: [(0, Q.jsxs)(q.Cell, {
                                divClassName: `min-h-[40px] min-w-0 items-center`,
                                children: [(0, Q.jsx)(`div`, {
                                    className: `bg-token-bg-tertiary text-token-text-secondary me-3 flex size-8 shrink-0 items-center justify-center rounded-full`,
                                    children: (0, Q.jsx)(Oe, {
                                        className: `icon-sm`
                                    })
                                }), (0, Q.jsx)(R, {
                                    className: `min-w-0 truncate hover:underline focus-visible:underline focus-visible:outline-none`,
                                    to: `/admin/groups/${e.group_id}`,
                                    title: e.group_name,
                                    children: e.group_name
                                })]
                            }), (0, Q.jsx)(q.Cell, {
                                children: o.formatNumber(e.num_members)
                            }), (0, Q.jsx)(q.Cell, {
                                children: (0, Q.jsxs)(`div`, {
                                    className: `flex flex-col items-start gap-0.5`,
                                    children: [(0, Q.jsx)(Ye, {
                                        explainabilityContext: n,
                                        limit: t
                                    }), (0, Q.jsx)(_n, {
                                        disabled: !C,
                                        onClick: () => y(e),
                                        label: t == null ? $.addButton : $.editButton
                                    })]
                                })
                            })]
                        }, e.group_id)
                    }), l.length === 0 ? (0, Q.jsx)(q.Row, {
                        className: `[&>td]:py-3`,
                        children: (0, Q.jsx)(q.Cell, {
                            colSpan: 3,
                            children: (0, Q.jsx)(`div`, {
                                className: `text-token-text-tertiary`,
                                children: (0, Q.jsx)(j, {
                                    ...$.noGroupsFound
                                })
                            })
                        })
                    }) : null]
                })]
            })]
        }), t[19] = v, t[20] = n, t[21] = p, t[22] = O.isFetching, t[23] = O.isPending, t[24] = F, t[25] = C, t[26] = o, t[27] = g, t[28] = P, t[29] = x, t[30] = I, t[31] = L
    } else I = t[30], L = t[31];
    let z;
    t[44] !== b || t[45] !== v || t[46] !== n || t[47] !== I ? (z = v == null ? null : (0, Q.jsx)(ct, {
        allowUnlimited: !0,
        currentLimit: le(v.default_user_credit_limits),
        getValidationResult: void 0,
        placeholder: ``,
        onClose: () => y(null),
        onSave: I,
        renderLimitContext: e => (0, Q.jsx)(qe, {
            explainabilityContext: n,
            limit: e,
            lowLimitWarningConfig: b
        })
    }), t[44] = b, t[45] = v, t[46] = n, t[47] = I, t[48] = z) : z = t[48];
    let B;
    return t[49] !== L || t[50] !== z ? (B = (0, Q.jsxs)(Q.Fragment, {
        children: [L, z]
    }), t[49] = L, t[50] = z, t[51] = B) : B = t[51], B
}

function pn(e) {
    return bn(e, `default_limit`, `DESC`)
}

function mn(e) {
    return bn(e, `num_members`, `DESC`)
}

function hn(e) {
    return bn(e, `group_name`, `ASC`)
}

function gn(e) {
    return e.currentWorkspace
}

function _n(e) {
    "use forget";
    let t = (0, Tn.c)(6),
        {
            disabled: n,
            label: r,
            onClick: i
        } = e,
        a;
    t[0] === r ? a = t[1] : (a = (0, Q.jsx)(j, {
        ...r
    }), t[0] = r, t[1] = a);
    let o;
    return t[2] !== n || t[3] !== i || t[4] !== a ? (o = (0, Q.jsx)(`button`, {
        type: `button`,
        className: `disabled:text-token-text-tertiary text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline focus-visible:underline focus-visible:outline-none disabled:cursor-not-allowed disabled:no-underline dark:text-blue-400 dark:hover:text-blue-300`,
        disabled: n,
        onClick: i,
        children: a
    }), t[2] = n, t[3] = i, t[4] = a, t[5] = o) : o = t[5], o
}

function vn(e) {
    "use forget";
    let t = (0, Tn.c)(6),
        {
            children: n,
            disabled: r,
            testId: i
        } = e;
    if (!r) {
        let e;
        return t[0] === n ? e = t[1] : (e = (0, Q.jsx)(Q.Fragment, {
            children: n
        }), t[0] = n, t[1] = e), e
    }
    let a;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, Q.jsx)(j, {
        ...$.adminDisabledTooltip
    }), t[2] = a) : a = t[2];
    let o;
    return t[3] !== n || t[4] !== i ? (o = (0, Q.jsx)(g, {
        label: a,
        children: (0, Q.jsx)(`span`, {
            className: `inline-flex`,
            "data-testid": i,
            children: n
        })
    }), t[3] = n, t[4] = i, t[5] = o) : o = t[5], o
}

function yn(e) {
    "use forget";
    let t = (0, Tn.c)(7),
        {
            active: n,
            children: r,
            direction: i,
            onSort: a
        } = e,
        o = i === `ASC` ? Ce : we,
        s;
    t[0] !== o || t[1] !== n ? (s = n ? (0, Q.jsx)(o, {
        "aria-hidden": `true`,
        className: `icon-xs text-token-interactive-icon-tertiary-default`
    }) : null, t[0] = o, t[1] = n, t[2] = s) : s = t[2];
    let c;
    return t[3] !== r || t[4] !== a || t[5] !== s ? (c = (0, Q.jsx)(q.HeaderCell, {
        children: (0, Q.jsxs)(`button`, {
            type: `button`,
            className: `flex items-center gap-1 text-start`,
            onClick: a,
            children: [r, s]
        })
    }), t[3] = r, t[4] = a, t[5] = s, t[6] = c) : c = t[6], c
}

function bn(e, t, n) {
    return {
        field: t,
        direction: e.field === t ? e.direction === `ASC` ? `DESC` : `ASC` : n
    }
}

function xn(e) {
    "use forget";
    let t = (0, Tn.c)(10),
        {
            effectiveHardCap: n,
            inheritedHardCap: r,
            explainabilityContext: i
        } = e;
    if (n == null || n.source.kind === `role_based_personal_budget`) {
        let e;
        return t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Q.jsx)(Ye, {
            limit: null
        }), t[0] = e) : e = t[0], e
    }
    let a = r?.source.kind === `role_based_personal_budget` ? null : r,
        o;
    t[1] !== n.source || t[2] !== a ? (o = Sn(n.source, a), t[1] = n.source, t[2] = a, t[3] = o) : o = t[3];
    let s = o,
        c;
    t[4] === n.limit ? c = t[5] : (c = le([n.limit]), t[4] = n.limit, t[5] = c);
    let l;
    return t[6] !== i || t[7] !== c || t[8] !== s ? (l = (0, Q.jsx)(Ye, {
        creditValueTooltip: s,
        explainabilityContext: i,
        limit: c
    }), t[6] = i, t[7] = c, t[8] = s, t[9] = l) : l = t[9], l
}

function Sn(e, t) {
    switch (e.kind) {
        case `individual_override`:
            return {
                label: (0, Q.jsx)(j, {
                    ...$.userOverrideHardCapTooltipTitle
                }), secondaryLabel: (0, Q.jsxs)(Q.Fragment, {
                    children: [(0, Q.jsx)(j, {
                        ...$.userOverrideHardCapTooltipDescription
                    }), t == null ? null : (0, Q.jsxs)(Q.Fragment, {
                        children: [(0, Q.jsx)(`br`, {}), (0, Q.jsx)(Cn, {
                            inheritedHardCap: t
                        })]
                    })]
                })
            };
        case `group_default`:
            return {
                label: (0, Q.jsx)(j, {
                    ...$.groupDefaultHardCapTooltipTitle,
                    values: {
                        groupName: e.group_name
                    }
                }), secondaryLabel: (0, Q.jsx)(j, {
                    ...$.groupDefaultHardCapTooltipDescription
                })
            };
        case `workspace_default`:
            return {
                label: (0, Q.jsx)(j, {
                    ...$.workspaceDefaultHardCapTooltipTitle
                }), secondaryLabel: (0, Q.jsx)(j, {
                    ...$.workspaceDefaultHardCapTooltipDescription,
                    values: {
                        seatType: e.seat_type === Dn ? (0, Q.jsx)(j, {
                            ...$.chatgptSeatLabel
                        }) : (0, Q.jsx)(j, {
                            ...$.codexSeatLabel
                        })
                    }
                })
            }
    }
}

function Cn(e) {
    "use forget";
    let t = (0, Tn.c)(10),
        {
            inheritedHardCap: n
        } = e,
        r;
    t[0] === n.limit ? r = t[1] : (r = le([n.limit]), t[0] = n.limit, t[1] = r);
    let i = r;
    switch (n.source.kind) {
        case `group_default`: {
            let e;
            return t[2] !== n.limit || t[3] !== n.source.group_name || t[4] !== i ? (e = i === `unlimited_platform_max` ? (0, Q.jsx)(j, {
                ...$.groupUnlimitedOutsideOverride,
                values: {
                    groupName: n.source.group_name
                }
            }) : (0, Q.jsx)(j, {
                ...$.groupLimitOutsideOverride,
                values: {
                    groupName: n.source.group_name,
                    limit: n.limit.limit
                }
            }), t[2] = n.limit, t[3] = n.source.group_name, t[4] = i, t[5] = e) : e = t[5], e
        }
        case `workspace_default`: {
            let e;
            return t[6] !== n.limit || t[7] !== n.source.seat_type || t[8] !== i ? (e = i === `unlimited_platform_max` ? (0, Q.jsx)(j, {
                ...$.workspaceUnlimitedOutsideOverride,
                values: {
                    seatType: n.source.seat_type === Dn ? (0, Q.jsx)(j, {
                        ...$.chatgptSeatLabel
                    }) : (0, Q.jsx)(j, {
                        ...$.codexSeatLabel
                    })
                }
            }) : (0, Q.jsx)(j, {
                ...$.workspaceLimitOutsideOverride,
                values: {
                    limit: n.limit.limit,
                    seatType: n.source.seat_type === Dn ? (0, Q.jsx)(j, {
                        ...$.chatgptSeatLabel
                    }) : (0, Q.jsx)(j, {
                        ...$.codexSeatLabel
                    })
                }
            }), t[6] = n.limit, t[7] = n.source.seat_type, t[8] = i, t[9] = e) : e = t[9], e
        }
        case `role_based_personal_budget`:
            return null;
        case `individual_override`:
            return null
    }
}

function wn(e) {
    let t = he(e);
    return {
        seat_type_credit_limits: {
            [Dn]: t,
            [On]: t
        }
    }
}
var Tn, En, Q, Dn, On, kn, An, jn, Mn, Nn, Pn, Fn, In, Ln, $, Rn = e((() => {
        Tn = F(), Me(), Fe(), be(), Vt(), c(), He(), ye(), ot(), Ae(), h(), G(), Ee(), ke(), Te(), me(), ve(), b(), Be(), o(), v(), n(), E(), u(), l(), We(), V(), s(), p(), En = t(O()), H(), D(), st(), Ke(), de(), K(), Xt(), $e(), lt(), Le(), Q = L(), Dn = `default`, On = `usage_based`, kn = 25, An = 50, jn = `3909937021`, Mn = `3002192639`, Nn = `3581456201`, Pn = `3421588596`, Fn = 400, In = 1250, Ln = 5e3, $ = N({
            addButton: {
                id: `admin.usageLimits.addButton`,
                defaultMessage: `Add`
            },
            adminDisabledTooltip: {
                id: `admin.usageLimits.adminDisabledTooltip`,
                defaultMessage: `Contact a workspace admin to change this setting.`
            },
            browserTitle: {
                id: `admin.usageLimits.browserTitle`,
                defaultMessage: `ChatGPT - Admin | Usage limits`
            },
            chatgptSeatLabel: {
                id: `admin.usageLimits.chatgptSeatLabel`,
                defaultMessage: `ChatGPT seat`
            },
            codexSeatLabel: {
                id: `admin.usageLimits.codexSeatLabel`,
                defaultMessage: `Codex seat`
            },
            currentLimitColumn: {
                id: `admin.usageLimits.currentLimitColumn`,
                defaultMessage: `Current monthly limit`
            },
            defaultMonthlyLimitColumn: {
                id: `admin.usageLimits.defaultMonthlyLimitColumn`,
                defaultMessage: `Default monthly limit`
            },
            editButton: {
                id: `admin.usageLimits.editButton`,
                defaultMessage: `Edit`
            },
            groupColumn: {
                id: `admin.usageLimits.groupColumn`,
                defaultMessage: `Group name`
            },
            membersColumn: {
                id: `admin.usageLimits.membersColumn`,
                defaultMessage: `Members`
            },
            groups: {
                id: `admin.usageLimits.groupsTab`,
                defaultMessage: `Groups`
            },
            creditValue: {
                id: `admin.usageLimits.creditValue`,
                defaultMessage: `{limit} credits`
            },
            limitSaveError: {
                id: `admin.usageLimits.limitSaveError`,
                defaultMessage: `Unable to update the usage limit.`
            },
            limitSaveSuccess: {
                id: `admin.usageLimits.limitSaveSuccess`,
                defaultMessage: `Usage limit updated`
            },
            nameColumn: {
                id: `admin.usageLimits.nameColumn`,
                defaultMessage: `Name`
            },
            noEmail: {
                id: `admin.usageLimits.noEmail`,
                defaultMessage: `No email`
            },
            noGroupsFound: {
                id: `admin.usageLimits.noGroupsFound`,
                defaultMessage: `No groups found.`
            },
            noOverride: {
                id: `admin.usageLimits.noOverride`,
                defaultMessage: `No override`
            },
            noUsersFound: {
                id: `admin.usageLimits.noUsersFound`,
                defaultMessage: `No users found.`
            },
            usersLoadError: {
                id: `admin.usageLimits.usersLoadError`,
                defaultMessage: `Unable to load users. Narrow your search or try again.`
            },
            overrideLimitColumn: {
                id: `admin.usageLimits.overrideLimitColumn`,
                defaultMessage: `Override limit`
            },
            pageSubtitle: {
                id: `admin.usageLimits.pageSubtitle`,
                defaultMessage: `Set monthly credit limits for the workspace, individual users, and groups.`
            },
            pageSubtitleWithEstimatedValues: {
                id: `admin.usageLimits.pageSubtitleWithEstimatedValues`,
                defaultMessage: `Set monthly credit limits for workspace, individual usage and groups. Dollar amounts are estimated based on credit rate.`
            },
            pageTitle: {
                id: `admin.usageLimits.pageTitle`,
                defaultMessage: `Usage limits`
            },
            usageLimitsMovedToAdminConsoleTitle: {
                id: `admin.usageLimits.adminConsoleMovedScreen.title`,
                defaultMessage: `Usage limits aren’t available here`
            },
            usageLimitsMovedToAdminConsoleBody: {
                id: `admin.usageLimits.adminConsoleMovedScreen.body`,
                defaultMessage: `To view or manage usage limits for this workspace, go to the Admin Console.`
            },
            usageLimitsMovedToAdminConsoleAction: {
                id: `admin.usageLimits.adminConsoleMovedScreen.action`,
                defaultMessage: `Go to Admin Console`
            },
            "pending-requests": {
                id: `admin.usageLimits.pendingRequestsTab`,
                defaultMessage: `Pending requests`
            },
            pendingRequestsAvailable: {
                id: `admin.usageLimits.pendingRequestsAvailable`,
                defaultMessage: `has pending requests`
            },
            searchGroupsPlaceholder: {
                id: `admin.usageLimits.searchGroupsPlaceholder`,
                defaultMessage: `Search by group name`
            },
            searchUsersPlaceholder: {
                id: `admin.usageLimits.searchUsersPlaceholder`,
                defaultMessage: `Search by user's name`
            },
            usedThisMonthColumn: {
                id: `admin.usageLimits.usedThisResetPeriodColumn`,
                defaultMessage: `Used this reset period`
            },
            users: {
                id: `admin.usageLimits.usersTab`,
                defaultMessage: `Users`
            },
            workspace: {
                id: `admin.usageLimits.workspaceTab`,
                defaultMessage: `Workspace`
            },
            workspaceDefaultLimitLabel: {
                id: `admin.usageLimits.workspaceDefaultLimitLabel`,
                defaultMessage: `Default monthly limit`
            },
            workspaceDefaultLimitDescription: {
                id: `admin.usageLimits.workspaceDefaultLimitDescription`,
                defaultMessage: `Applies to each member unless a group or user override is more specific.`
            },
            groupDefaultHardCapTooltipDescription: {
                id: `admin.usageLimits.groupDefaultHardCapTooltipDescription`,
                defaultMessage: `This is the active limit after evaluating the user’s available limits.`
            },
            groupDefaultHardCapTooltipTitle: {
                id: `admin.usageLimits.groupDefaultHardCapTooltipTitle`,
                defaultMessage: `Inherited from group: {groupName}`
            },
            groupLimitOutsideOverride: {
                id: `admin.usageLimits.groupLimitOutsideOverride`,
                defaultMessage: `Outside this override, this user inherits {limit, number} credits from {groupName}.`
            },
            groupUnlimitedOutsideOverride: {
                id: `admin.usageLimits.groupUnlimitedOutsideOverride`,
                defaultMessage: `Outside this override, this user inherits unlimited usage from {groupName}.`
            },
            userOverrideHardCapTooltipDescription: {
                id: `admin.usageLimits.userOverrideHardCapTooltipDescription`,
                defaultMessage: `This explicit per-user override currently determines the limit.`
            },
            userOverrideHardCapTooltipTitle: {
                id: `admin.usageLimits.userOverrideHardCapTooltipTitle`,
                defaultMessage: `Set by this user’s limit override`
            },
            workspaceDefaultHardCapTooltipDescription: {
                id: `admin.usageLimits.workspaceDefaultHardCapTooltipDescription`,
                defaultMessage: `This user inherits the {seatType} workspace default.`
            },
            workspaceDefaultHardCapTooltipTitle: {
                id: `admin.usageLimits.workspaceDefaultHardCapTooltipTitle`,
                defaultMessage: `Inherited from workspace default`
            },
            workspaceLimitOutsideOverride: {
                id: `admin.usageLimits.workspaceLimitOutsideOverride`,
                defaultMessage: `Outside this override, this user inherits the {limit, number} credit {seatType} workspace default.`
            },
            workspaceUnlimitedOutsideOverride: {
                id: `admin.usageLimits.workspaceUnlimitedOutsideOverride`,
                defaultMessage: `Outside this override, this user inherits the unlimited {seatType} workspace default.`
            }
        })
    })),
    zn, Bn, Vn, Hn = e((() => {
        D(), zn = F(), Rn(), Ze(), Bn = L(), Vn = I(function() {
            "use forget";
            let e = (0, zn.c)(1);
            Xe();
            let t;
            return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Bn.jsx)(Qt, {}), e[0] = t) : t = e[0], t
        })
    }));
export {
    Hn as n, Vn as t
};
//# sourceMappingURL=90a39c8d-cvpmwzvhwlh0ngcv.js.map
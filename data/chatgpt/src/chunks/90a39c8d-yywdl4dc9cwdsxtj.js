import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as n,
    $T as r,
    Aw as i,
    CR as a,
    C_ as o,
    ER as s,
    IU as c,
    LU as l,
    Lz as u,
    Ow as d,
    QG as f,
    Qy as p,
    Rz as m,
    Y7 as h,
    YG as g,
    ZG as _,
    Zy as v,
    eE as y,
    grt as b,
    l7 as x,
    o0 as ee,
    prt as S,
    q1 as C,
    u7 as w,
    urt as te,
    w_ as T,
    zz as E
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    At as D,
    Bn as O,
    Ht as k,
    Ln as A,
    Lt as j,
    N as ne,
    Nn as M,
    Nt as N,
    O as re,
    Q as P,
    Rn as F,
    Vn as I,
    Vt as L,
    it as R,
    p as ie,
    q as z,
    s as B,
    wn as V,
    zn as ae
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Fjt as H,
    G8t as U,
    HH as W,
    Ijt as G,
    JKn as oe,
    LH as se,
    Ldn as ce,
    RH as le,
    Rdn as K,
    SUn as ue,
    UH as de,
    VH as fe,
    Y8t as pe,
    YKn as me,
    bUn as he,
    nw as ge,
    nwn as _e,
    own as ve,
    rw as ye,
    xUn as be,
    zH as xe
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    Ax as Se,
    Kl as Ce,
    Ol as we,
    hm as Te,
    kl as Ee,
    kx as De,
    mm as Oe,
    ql as ke
} from "./30901919-lc79rizhhepnsl3q.js";
import {
    Fv as q,
    Iv as Ae,
    cs as je,
    ex as Me,
    fl as Ne,
    is as Pe,
    ns as Fe,
    nx as Ie,
    pl as Le,
    ss as Re,
    us as ze
} from "./c2675c8c-f8x469cgefxzeo6l.js";
import {
    g_ as Be,
    h_ as Ve
} from "./8b34dbc2-ik628tlti8ozm9vq.js";
import {
    n as He,
    t as Ue
} from "./e18c46cf-nlze7y6994a7w739.js";
import {
    n as We,
    t as Ge
} from "./18a8b3b4-g2kvly4g3smq0jkj.js";
import {
    n as Ke,
    t as qe
} from "./9f2e6d33-h33rm8r24h08gyr1.js";
import {
    i as Je,
    n as Ye,
    r as Xe,
    t as Ze
} from "./e6141aca-cc8d9uttf3afm2il.js";
import {
    r as Qe,
    t as $e
} from "./8c6976e5-gslcvvotcp514w6d.js";
import {
    a as et,
    i as tt,
    n as nt,
    o as rt,
    r as it,
    s as at,
    t as ot
} from "./0bd66cc9-ja41shgipc3umets.js";
import {
    i as st,
    r as ct
} from "./af584902-n064zf6slnlfjs15.js";
import {
    r as lt,
    t as ut
} from "./ef852af5-c57v3xt6x0gncdoo.js";
import {
    i as dt,
    n as ft,
    r as pt,
    t as mt
} from "./543878e5-m9p63zgxnk4c1a4b.js";

function ht(e) {
    return [`workspace-admin-requests`, e]
}

function gt(e) {
    return [`workspace-admin-requests-indicator`, e]
}
async function _t(e, {
    fetchAllPages: t = !0,
    pageSize: n = Vt
} = {}) {
    let r, i = [];
    do {
        let t = await h.safeGet(`/accounts/{account_id}/admin/workspace_admin_requests`, {
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

function vt(e) {
    return e.payloads.find(e => e.kind === `spend_limit`) ?? e.payloads[0] ?? null
}

function yt(e) {
    let t = vt(e)?.update;
    return t != null && `requested_limit` in t ? t.requested_limit ?? null : null
}

function bt(e) {
    let t = yt(e);
    return t == null ? `` : String(t)
}

function xt(e) {
    return {
        value: bt(e),
        dirty: !1
    }
}

function St(e) {
    let t = e.trim();
    if (!/^\d+$/.test(t)) return null;
    let n = Number(t);
    return !Number.isSafeInteger(n) || n > Ht ? null : n
}

function Ct(e, t) {
    return e.payloads.map((e, n) => n === 0 ? {
        ...e,
        update: {
            kind: `increase_with_amount`,
            requested_limit: t
        }
    } : e)
}

function wt(e) {
    return vt(e)?.original_limit_snapshot ?? null
}

function Tt(e, t) {
    return t == null ? e.formatMessage(Y.notSet) : e.formatMessage(Y.creditsValue, {
        credits: e.formatNumber(t)
    })
}

function Et(e) {
    return e.requester_name || e.requester_email || e.requester_account_user_id
}

function Dt(e) {
    return e.requester_email || e.requester_account_user_id
}

function Ot() {
    "use forget";
    let e = (0, zt.c)(70),
        t = ae(),
        n;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (n = c(), e[0] = n) : n = e[0];
    let r = n,
        i = ne(),
        a = ee(),
        o = s(It),
        {
            role: l
        } = Le(),
        u = a?.id,
        d;
    e[1] !== l || e[2] !== o ? (d = l == null ? o != null && _e(o.role) : _e(l), e[1] = l, e[2] = o, e[3] = d) : d = e[3];
    let f = d,
        [p, g] = (0, Bt.useState)(``),
        [_, v] = (0, Bt.useState)(Ft),
        y;
    e[4] === Symbol.for(`react.memo_cache_sentinel`) ? (y = {}, e[4] = y) : y = e[4];
    let [b, x] = (0, Bt.useState)(y), S;
    e[5] === u ? S = e[6] : (S = ht(u), e[5] = u, e[6] = S);
    let C;
    e[7] === u ? C = e[8] : (C = async () => {
        if (!u) throw Error(`Workspace id is required`);
        return await _t(u)
    }, e[7] = u, e[8] = C);
    let w = !!u,
        te;
    e[9] !== S || e[10] !== C || e[11] !== w ? (te = {
        queryKey: S,
        queryFn: C,
        enabled: w,
        staleTime: 0,
        refetchOnMount: `always`,
        refetchOnWindowFocus: `always`
    }, e[9] = S, e[10] = C, e[11] = w, e[12] = te) : te = e[12];
    let T = re(te);
    T.data?.items;
    let E;
    e[13] === T.data?.items ? E = e[14] : (E = T.data?.items ?? [], e[13] = T.data?.items, e[14] = E);
    let D;
    e[15] === E ? D = e[16] : (D = E.filter(Pt), e[15] = E, e[16] = D);
    let O = D,
        k, A;
    e[17] === O ? (k = e[18], A = e[19]) : (A = () => {
        let e = new Set(O.map(Nt));
        v(t => {
            let n = new Set(Array.from(t).filter(t => e.has(t)));
            return n.size === t.size ? t : n
        })
    }, k = [O], e[17] = O, e[18] = k, e[19] = A), (0, Bt.useEffect)(A, k);
    let j, N;
    e[20] === O ? (j = e[21], N = e[22]) : (j = () => {
        let e = new Set(O.map(Mt));
        x(t => {
            let n = !1,
                r = {};
            for (let e of O) {
                let i = t[e.id];
                r[e.id] = i?.dirty ? i : xt(e), n ||= r[e.id] !== t[e.id]
            }
            return n ||= Object.keys(t).some(t => !e.has(t)), n ? r : t
        })
    }, N = [O], e[20] = O, e[21] = j, e[22] = N), (0, Bt.useEffect)(j, N);
    let P;
    if (e[23] !== O || e[24] !== b || e[25] !== p) {
        bb0: {
            let e = p.trim().toLowerCase();
            if (e === ``) {
                P = O;
                break bb0
            }
            P = O.filter(t => {
                let n = yt(t),
                    r = b[t.id]?.value ?? (n == null ? `` : String(n));
                return [Et(t), Dt(t), t.requester_account_user_id, t.justification, r].join(` `).toLowerCase().includes(e)
            })
        }
        e[23] = O,
        e[24] = b,
        e[25] = p,
        e[26] = P
    }
    else P = e[26];
    let F = P,
        I;
    e[27] === F ? I = e[28] : (I = F.map(jt), e[27] = F, e[28] = I);
    let L = I,
        R;
    e[29] !== _ || e[30] !== L ? (R = L.length > 0 && L.every(e => _.has(e)), e[29] = _, e[30] = L, e[31] = R) : R = e[31];
    let z = R,
        B;
    if (e[32] !== _ || e[33] !== L) {
        let t;
        e[35] === _ ? t = e[36] : (t = e => _.has(e), e[35] = _, e[36] = t), B = L.filter(t), e[32] = _, e[33] = L, e[34] = B
    } else B = e[34];
    let V = B.length,
        H;
    e[37] === u ? H = e[38] : (H = async e => {
        let {
            requests: t,
            status: n
        } = e;
        if (!u) throw Error(`Workspace id is required`);
        if (n === `approved` && t.some(At)) throw Error(`Requested limit is required`);
        let r = await Promise.allSettled(t.map(async e => {
                let {
                    request: t,
                    requestedLimit: r
                } = e, i = n === `approved` && r != null ? {
                    status: n,
                    payloads: Ct(t, r)
                } : {
                    status: n
                };
                return await h.safePatch(`/accounts/{account_id}/admin/workspace_admin_requests/{request_id}`, {
                    parameters: {
                        path: {
                            account_id: u,
                            request_id: t.id
                        }
                    },
                    requestBody: i
                }), t.id
            })),
            i = r.flatMap(kt),
            a = r.length - i.length;
        if (i.length === 0 && a > 0) throw Error(`Unable to update usage limit requests`);
        return {
            failedCount: a,
            succeededRequestIds: i
        }
    }, e[37] = u, e[38] = H);
    let U;
    e[39] !== t || e[40] !== i || e[41] !== u ? (U = async (e, n) => {
        let a = new Set(e.succeededRequestIds);
        v(e => {
            let t = new Set(e);
            for (let e of a) t.delete(e);
            return t
        }), i.setQueryData(ht(u), e => e == null ? e : {
            ...e,
            items: e.items.filter(e => !a.has(e.id))
        }), await i.invalidateQueries({
            queryKey: ht(u)
        }), await i.invalidateQueries({
            queryKey: gt(u)
        }), n.status === `approved` && u != null && await Promise.all([et({
            queryClient: i,
            workspaceId: u
        }), st({
            queryClient: i,
            workspaceId: u
        })]), e.failedCount > 0 ? r.warning(t.formatMessage(Y.resolvePartialError, {
            succeededCount: e.succeededRequestIds.length,
            totalCount: n.requests.length
        }), {
            hasCloseButton: !0
        }) : r.success(t.formatMessage(n.status === `approved` ? Y.approveSuccess : Y.denySuccess, {
            count: n.requests.length
        }), {
            hasCloseButton: !0
        })
    }, e[39] = t, e[40] = i, e[41] = u, e[42] = U) : U = e[42];
    let W;
    e[43] === t ? W = e[44] : (W = () => {
        r.warning(t.formatMessage(Y.resolveError), {
            hasCloseButton: !0
        })
    }, e[43] = t, e[44] = W);
    let G;
    e[45] !== H || e[46] !== U || e[47] !== W ? (G = {
        mutationFn: H,
        onSuccess: U,
        onError: W
    }, e[45] = H, e[46] = U, e[47] = W, e[48] = G) : G = e[48];
    let oe = ie(G);
    if (u == null) {
        let t;
        return e[49] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, J.jsx)(`div`, {
            className: `flex min-h-[40vh] items-center justify-center`,
            children: (0, J.jsx)(m, {})
        }), e[49] = t) : t = e[49], t
    }
    let se;
    e[50] === Symbol.for(`react.memo_cache_sentinel`) ? (se = e => g(e.target.value), e[50] = se) : se = e[50];
    let le;
    e[51] === t ? le = e[52] : (le = t.formatMessage(Y.searchPlaceholder), e[51] = t, e[52] = le);
    let K;
    e[53] !== p || e[54] !== le ? (K = (0, J.jsx)(`div`, {
        className: `mb-4.5 flex items-center justify-between`,
        children: (0, J.jsx)(ce, {
            id: `workspace-admin-requests-search`,
            className: `w-full`,
            inputClassName: `w-full rounded-full! text-sm`,
            value: p,
            onChange: se,
            placeholder: le
        })
    }), e[53] = p, e[54] = le, e[55] = K) : K = e[55];
    let ue;
    e[56] !== z || e[57] !== F || e[58] !== f || e[59] !== b || e[60] !== oe || e[61] !== _ || e[62] !== V || e[63] !== L || e[64] !== T.isError || e[65] !== T.isLoading ? (ue = T.isLoading ? (0, J.jsx)(`div`, {
        className: `flex min-h-[40vh] items-center justify-center`,
        children: (0, J.jsx)(m, {})
    }) : T.isError ? (0, J.jsx)(`div`, {
        className: `border-token-border-heavy bg-token-bg-tertiary text-token-text-primary rounded-md border px-4 py-3`,
        children: (0, J.jsx)(M, {
            ...Y.loadError
        })
    }) : (0, J.jsx)(Lt, {
        requests: F,
        selectedRequestIds: _,
        requestedLimitDrafts: b,
        allVisibleRequestsSelected: z,
        selectedVisibleRequestCount: V,
        hasAdminPrivileges: f,
        isResolving: oe.isPending,
        onToggleRequest: (e, t) => {
            v(n => {
                let r = new Set(n);
                return t ? r.add(e) : r.delete(e), r
            })
        },
        onToggleAllVisibleRequests: e => {
            v(t => {
                let n = new Set(t);
                for (let t of L) e ? n.add(t) : n.delete(t);
                return n
            })
        },
        onRequestedLimitChange: (e, t) => {
            x(n => ({
                ...n,
                [e.id]: {
                    ...n[e.id] ?? xt(e),
                    value: t,
                    dirty: !0
                }
            }))
        },
        onResolveRequests: (e, t) => {
            oe.mutateAsync({
                requests: e.map(e => ({
                    request: e,
                    requestedLimit: St((b[e.id] ?? xt(e)).value)
                })),
                status: t
            })
        }
    }), e[56] = z, e[57] = F, e[58] = f, e[59] = b, e[60] = oe, e[61] = _, e[62] = V, e[63] = L, e[64] = T.isError, e[65] = T.isLoading, e[66] = ue) : ue = e[66];
    let de;
    return e[67] !== K || e[68] !== ue ? (de = (0, J.jsxs)(`div`, {
        className: `max-w-[72rem]`,
        children: [K, ue]
    }), e[67] = K, e[68] = ue, e[69] = de) : de = e[69], de
}

function kt(e) {
    return e.status === `fulfilled` ? [e.value] : []
}

function At(e) {
    let {
        requestedLimit: t
    } = e;
    return t == null
}

function jt(e) {
    return e.id
}

function Mt(e) {
    return e.id
}

function Nt(e) {
    return e.id
}

function Pt(e) {
    return e.status === `pending`
}

function Ft() {
    return new Set
}

function It(e) {
    return e.currentWorkspace
}

function Lt(e) {
    "use forget";
    let t = (0, zt.c)(81),
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
        p = ae(),
        m, h;
    if (t[0] !== i || t[1] !== n || t[2] !== r) {
        let e;
        t[5] === r ? e = t[6] : (e = e => r.has(e.id), t[5] = r, t[6] = e), m = n.filter(e);
        let a;
        t[7] === i ? a = t[8] : (a = e => St(i[e.id]?.value ?? bt(e)) != null, t[7] = i, t[8] = a), h = m.every(a), t[0] = i, t[1] = n, t[2] = r, t[3] = m, t[4] = h
    } else m = t[3], h = t[4];
    let g = h,
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
    let y = o > 0 && !a,
        b = n.length === 0,
        x;
    t[10] === u ? x = t[11] : (x = e => u(e.target.checked), t[10] = u, t[11] = x);
    let ee;
    t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (ee = (0, J.jsx)(`span`, {
        className: `sr-only`,
        children: (0, J.jsx)(M, {
            ...Y.selectAllRequests
        })
    }), t[12] = ee) : ee = t[12];
    let S;
    t[13] !== a || t[14] !== y || t[15] !== b || t[16] !== x ? (S = (0, J.jsx)(q.HeaderCell, {
        className: `ps-2`,
        children: (0, J.jsx)(oe, {
            id: `workspace-admin-requests-select-all`,
            checked: a,
            indeterminate: y,
            disabled: b,
            onChange: x,
            label: ee
        })
    }), t[13] = a, t[14] = y, t[15] = b, t[16] = x, t[17] = S) : S = t[17];
    let C;
    t[18] === Symbol.for(`react.memo_cache_sentinel`) ? (C = (0, J.jsx)(q.HeaderCell, {
        children: (0, J.jsx)(M, {
            ...Y.nameColumn
        })
    }), t[18] = C) : C = t[18];
    let w;
    t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (w = (0, J.jsx)(q.HeaderCell, {
        children: (0, J.jsx)(M, {
            ...Y.currentLimitColumn
        })
    }), t[19] = w) : w = t[19];
    let te;
    t[20] === Symbol.for(`react.memo_cache_sentinel`) ? (te = (0, J.jsx)(q.HeaderCell, {
        children: (0, J.jsx)(M, {
            ...Y.recommendedColumn
        })
    }), t[20] = te) : te = t[20];
    let T;
    t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (T = (0, J.jsx)(q.HeaderCell, {
        children: (0, J.jsx)(M, {
            ...Y.justificationColumn
        })
    }), t[21] = T) : T = t[21];
    let E;
    t[22] === o ? E = t[23] : (E = o > 0 ? (0, J.jsx)(M, {
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
    let j = c || !s || !g,
        ne;
    t[30] !== f || t[31] !== m ? (ne = () => f(m, `approved`), t[30] = f, t[31] = m, t[32] = ne) : ne = t[32];
    let N;
    t[33] === Symbol.for(`react.memo_cache_sentinel`) ? (N = (0, J.jsx)(M, {
        ...Y.approveSelectedButton
    }), t[33] = N) : N = t[33];
    let re;
    t[34] !== j || t[35] !== ne ? (re = (0, J.jsx)(be.Item, {
        disabled: j,
        onClick: ne,
        children: N
    }), t[34] = j, t[35] = ne, t[36] = re) : re = t[36];
    let P;
    t[37] !== f || t[38] !== m ? (P = () => f(m, `denied`), t[37] = f, t[38] = m, t[39] = P) : P = t[39];
    let F;
    t[40] === Symbol.for(`react.memo_cache_sentinel`) ? (F = (0, J.jsx)(M, {
        ...Y.denySelectedButton
    }), t[40] = F) : F = t[40];
    let I;
    t[41] !== c || t[42] !== P ? (I = (0, J.jsx)(be.Item, {
        color: `danger`,
        disabled: c,
        onClick: P,
        children: F
    }), t[41] = c, t[42] = P, t[43] = I) : I = t[43];
    let L;
    t[44] !== A || t[45] !== re || t[46] !== I ? (L = (0, J.jsxs)(he, {
        side: `bottom`,
        sideOffset: 4,
        contentAlign: `end`,
        triggerButton: A,
        children: [re, I]
    }), t[44] = A, t[45] = re, t[46] = I, t[47] = L) : L = t[47];
    let R;
    t[48] !== E || t[49] !== L ? (R = (0, J.jsx)(q.HeaderCell, {
        textAlign: `right`,
        children: (0, J.jsxs)(`div`, {
            className: `text-token-text-primary flex items-center justify-end gap-2`,
            children: [E, L]
        })
    }), t[48] = E, t[49] = L, t[50] = R) : R = t[50];
    let ie;
    t[51] !== R || t[52] !== S ? (ie = (0, J.jsxs)(q.Header, {
        children: [S, C, w, te, T, R]
    }), t[51] = R, t[52] = S, t[53] = ie) : ie = t[53];
    let z;
    if (t[54] !== s || t[55] !== p || t[56] !== c || t[57] !== d || t[58] !== f || t[59] !== l || t[60] !== i || t[61] !== n || t[62] !== r) {
        let e;
        t[64] !== s || t[65] !== p || t[66] !== c || t[67] !== d || t[68] !== f || t[69] !== l || t[70] !== i || t[71] !== r ? (e = e => {
            let t = Et(e),
                n = Dt(e),
                a = i[e.id]?.value ?? bt(e),
                o = St(a) != null;
            return (0, J.jsxs)(q.Row, {
                className: `[&>td]:py-2`,
                children: [(0, J.jsx)(q.Cell, {
                    className: `ps-2`,
                    divClassName: `min-h-[48px] items-center`,
                    children: (0, J.jsx)(oe, {
                        id: `workspace-admin-request-${e.id}`,
                        checked: r.has(e.id),
                        onChange: t => l(e.id, t.target.checked),
                        label: (0, J.jsx)(`span`, {
                            className: `sr-only`,
                            children: (0, J.jsx)(M, {
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
                        children: (0, J.jsx)(Ge, {
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
                    children: Tt(p, wt(e))
                }), (0, J.jsx)(q.Cell, {
                    divClassName: `min-h-[48px] items-center`,
                    children: (0, J.jsx)(`input`, {
                        "aria-label": p.formatMessage(Y.recommendedLimitInput, {
                            name: t
                        }),
                        "aria-invalid": !o,
                        inputMode: `numeric`,
                        min: 0,
                        max: Ht,
                        name: `requested-limit-${e.id}`,
                        onChange: t => d(e, t.target.value),
                        step: 1,
                        type: `number`,
                        value: a,
                        className: `border-token-border-light bg-token-bg-primary h-9 w-24 rounded-lg border px-3 text-sm`
                    })
                }), (0, J.jsx)(q.Cell, {
                    divClassName: `min-h-[48px] items-center`,
                    children: (0, J.jsx)(v, {
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
                        children: (0, J.jsx)(M, {
                            ...Y.denyButton
                        })
                    }), (0, J.jsx)(Rt, {
                        disabled: !s,
                        testId: `${e.id}-usage-limits-approve-admin-disabled-tooltip-trigger`,
                        children: (0, J.jsx)(`button`, {
                            type: `button`,
                            disabled: c || !o || !s,
                            className: `text-sm text-[#0285FF] hover:underline focus-visible:underline focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50`,
                            onClick: () => f([e], `approved`),
                            children: (0, J.jsx)(M, {
                                ...Y.approveButton
                            })
                        })
                    })]
                })]
            }, e.id)
        }, t[64] = s, t[65] = p, t[66] = c, t[67] = d, t[68] = f, t[69] = l, t[70] = i, t[71] = r, t[72] = e) : e = t[72], z = n.map(e), t[54] = s, t[55] = p, t[56] = c, t[57] = d, t[58] = f, t[59] = l, t[60] = i, t[61] = n, t[62] = r, t[63] = z
    } else z = t[63];
    let B;
    t[73] === n.length ? B = t[74] : (B = n.length === 0 && (0, J.jsx)(q.Row, {
        className: `[&>td]:py-2`,
        children: (0, J.jsx)(q.Cell, {
            colSpan: 6,
            children: (0, J.jsx)(`div`, {
                className: `text-token-text-tertiary`,
                children: (0, J.jsx)(M, {
                    ...Y.noRequests
                })
            })
        })
    }), t[73] = n.length, t[74] = B);
    let V;
    t[75] !== z || t[76] !== B ? (V = (0, J.jsxs)(q.Body, {
        children: [z, B]
    }), t[75] = z, t[76] = B, t[77] = V) : V = t[77];
    let H;
    return t[78] !== ie || t[79] !== V ? (H = (0, J.jsxs)(q.Root, {
        fixed: !0,
        size: `normal`,
        children: [_, ie, V]
    }), t[78] = ie, t[79] = V, t[80] = H) : H = t[80], H
}

function Rt(e) {
    "use forget";
    let t = (0, zt.c)(6),
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
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, J.jsx)(M, {
        ...Y.adminDisabledTooltip
    }), t[2] = a) : a = t[2];
    let o;
    return t[3] !== n || t[4] !== i ? (o = (0, J.jsx)(v, {
        label: a,
        children: (0, J.jsx)(`span`, {
            className: `inline-flex`,
            "data-testid": i,
            children: n
        })
    }), t[3] = n, t[4] = i, t[5] = o) : o = t[5], o
}
var zt, Bt, J, Vt, Ht, Y, Ut = e((() => {
    zt = V(), Ne(), We(), tt(), ve(), ct(), me(), ue(), Ae(), p(), Se(), K(), E(), C(), a(), l(), n(), B(), Bt = t(I()), F(), J = O(), Vt = 100, Ht = 2147483647, Y = A({
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

function Wt(e) {
    "use forget";
    let t = (0, Xt.c)(27),
        {
            workspaceId: n,
            canEdit: r
        } = e,
        i = ae(),
        a = ne(),
        [o, s] = (0, Zt.useState)(!1),
        l = f(n),
        u = l.data ?? g,
        d;
    t[0] === n ? d = t[1] : (d = e => {
        if (n == null) throw Error(`Workspace id is required`);
        return h.safePost(`/accounts/{account_id}/settings/usage_limit_increase_request`, {
            parameters: {
                path: {
                    account_id: n
                }
            },
            requestBody: {
                usage_limit_increase_request: e
            }
        })
    }, t[0] = n, t[1] = d);
    let p;
    t[2] !== a || t[3] !== n ? (p = async e => {
        a.setQueryData([`workspace-settings`, n], e), await a.invalidateQueries({
            queryKey: [`workspace-settings`, n]
        })
    }, t[2] = a, t[3] = n, t[4] = p) : p = t[4];
    let m;
    t[5] !== d || t[6] !== p ? (m = {
        mutationFn: d,
        onSuccess: p
    }, t[5] = d, t[6] = p, t[7] = m) : m = t[7];
    let _ = ie(m),
        v;
    t[8] !== i || t[9] !== _ ? (v = async e => {
        try {
            await _.mutateAsync(e), c().success(i.formatMessage(Z.saveSuccess), {
                hasCloseButton: !0
            }), s(!1)
        } catch {
            c().warning(i.formatMessage(Z.saveError), {
                hasCloseButton: !0
            })
        }
    }, t[8] = i, t[9] = _, t[10] = v) : v = t[10];
    let y = v,
        b;
    t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (b = (0, X.jsx)(`div`, {
        className: `text-token-text-primary text-base leading-[26px] font-semibold tracking-[-0.32px]`,
        children: (0, X.jsx)(M, {
            ...Z.settingLabel
        })
    }), t[11] = b) : b = t[11];
    let x;
    t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (x = (0, X.jsxs)(`div`, {
        className: `min-w-0 pe-6`,
        children: [b, (0, X.jsx)(`div`, {
            className: `text-token-text-tertiary text-sm leading-[18px] tracking-[-0.15px]`,
            children: (0, X.jsx)(M, {
                ...Z.settingDescription
            })
        })]
    }), t[12] = x) : x = t[12];
    let ee;
    t[13] !== r || t[14] !== u || t[15] !== i || t[16] !== l.isError || t[17] !== l.isLoading ? (ee = (0, X.jsxs)(`div`, {
        className: `border-token-border-default flex w-full items-start justify-between border-b py-4`,
        children: [x, l.isLoading ? (0, X.jsx)(`div`, {
            className: `text-token-text-tertiary text-sm`,
            children: (0, X.jsx)(M, {
                ...Z.loading
            })
        }) : (0, X.jsxs)(`div`, {
            className: `flex shrink-0 flex-col items-end gap-0.5`,
            children: [(0, X.jsx)(`div`, {
                className: `text-token-text-primary text-base`,
                children: (0, X.jsx)(M, {
                    ...Jt(u.kind)
                })
            }), (0, X.jsx)(`button`, {
                type: `button`,
                "aria-label": i.formatMessage(Z.editRequestPolicy),
                className: `disabled:text-token-text-tertiary text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline focus-visible:underline focus-visible:outline-none disabled:cursor-not-allowed disabled:no-underline dark:text-blue-400 dark:hover:text-blue-300`,
                disabled: !r || l.isError,
                onClick: () => s(!0),
                children: (0, X.jsx)(M, {
                    ...Z.edit
                })
            })]
        })]
    }), t[13] = r, t[14] = u, t[15] = i, t[16] = l.isError, t[17] = l.isLoading, t[18] = ee) : ee = t[18];
    let S;
    t[19] !== u || t[20] !== y || t[21] !== o || t[22] !== _ ? (S = o ? (0, X.jsx)(Gt, {
        config: u,
        isSaving: _.isPending,
        onClose: () => s(!1),
        onSave: y
    }) : null, t[19] = u, t[20] = y, t[21] = o, t[22] = _, t[23] = S) : S = t[23];
    let C;
    return t[24] !== ee || t[25] !== S ? (C = (0, X.jsxs)(X.Fragment, {
        children: [ee, S]
    }), t[24] = ee, t[25] = S, t[26] = C) : C = t[26], C
}

function Gt(e) {
    "use forget";
    let t = (0, Xt.c)(52),
        {
            config: n,
            isSaving: i,
            onClose: a,
            onSave: o
        } = e,
        s = ae(),
        [c, l] = (0, Zt.useState)(n.kind),
        [u, f] = (0, Zt.useState)(n.kind === `custom` ? n.instructions ?? `` : ``),
        [p, m] = (0, Zt.useState)(n.kind === `custom` ? n.request_url ?? `` : ``),
        h;
    t[0] === u ? h = t[1] : (h = u.trim(), t[0] = u, t[1] = h);
    let g = h,
        _, v;
    t[2] === p ? (_ = t[3], v = t[4]) : (v = p.trim(), _ = qt(v), t[2] = p, t[3] = _, t[4] = v);
    let y = _,
        b = !i && (c !== `custom` || y),
        x;
    t[5] !== b || t[6] !== c || t[7] !== o || t[8] !== g || t[9] !== v ? (x = async () => {
        if (b) {
            if (c === `custom`) {
                await o({
                    kind: c,
                    instructions: g.length === 0 ? null : g,
                    request_url: v.length === 0 ? null : v
                });
                return
            }
            await o({
                kind: c
            })
        }
    }, t[5] = b, t[6] = c, t[7] = o, t[8] = g, t[9] = v, t[10] = x) : x = t[10];
    let ee = x,
        S;
    t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (S = (0, X.jsx)(M, {
        ...Z.modalTitle
    }), t[11] = S) : S = t[11];
    let C = !b,
        w;
    t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (w = (0, X.jsx)(M, {
        ...Z.save
    }), t[12] = w) : w = t[12];
    let te;
    t[13] !== ee || t[14] !== i || t[15] !== C ? (te = (0, X.jsx)(r, {
        color: `primary`,
        loading: i,
        disabled: C,
        onClick: ee,
        children: w
    }), t[13] = ee, t[14] = i, t[15] = C, t[16] = te) : te = t[16];
    let T;
    t[17] === Symbol.for(`react.memo_cache_sentinel`) ? (T = (0, X.jsx)(M, {
        ...Z.cancel
    }), t[17] = T) : T = t[17];
    let E;
    t[18] !== i || t[19] !== a ? (E = (0, X.jsx)(r, {
        color: `secondary`,
        disabled: i,
        onClick: a,
        children: T
    }), t[18] = i, t[19] = a, t[20] = E) : E = t[20];
    let D;
    t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (D = e => {
        l(e)
    }, t[21] = D) : D = t[21];
    let O;
    t[22] === s ? O = t[23] : (O = s.formatMessage(Z.requestExperienceLabel), t[22] = s, t[23] = O);
    let k, A;
    t[24] === Symbol.for(`react.memo_cache_sentinel`) ? (k = (0, X.jsx)(Ve.Value, {}), A = (0, X.jsx)(Ve.Icon, {}), t[24] = k, t[25] = A) : (k = t[24], A = t[25]);
    let j;
    t[26] === O ? j = t[27] : (j = (0, X.jsxs)(Ve.Trigger, {
        "aria-label": O,
        className: `border-token-border-default w-full justify-between border`,
        children: [k, A]
    }), t[26] = O, t[27] = j);
    let ne;
    t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (ne = (0, X.jsx)(Ve.Portal, {
        children: (0, X.jsx)(Ve.Content, {
            className: `w-[var(--radix-select-trigger-width)]`,
            children: [`openai_native`, `custom`, `disabled`].map(Kt)
        })
    }), t[28] = ne) : ne = t[28];
    let N;
    t[29] !== c || t[30] !== j ? (N = (0, X.jsxs)(Ve.Root, {
        value: c,
        onValueChange: D,
        children: [j, ne]
    }), t[29] = c, t[30] = j, t[31] = N) : N = t[31];
    let re;
    t[32] === c ? re = t[33] : (re = Yt(c), t[32] = c, t[33] = re);
    let P;
    t[34] === re ? P = t[35] : (P = (0, X.jsx)(`div`, {
        className: `text-token-text-tertiary text-sm leading-5`,
        children: (0, X.jsx)(M, {
            ...re
        })
    }), t[34] = re, t[35] = P);
    let F;
    t[36] !== y || t[37] !== u || t[38] !== s || t[39] !== c || t[40] !== p || t[41] !== v ? (F = c === `custom` ? (0, X.jsxs)(X.Fragment, {
        children: [(0, X.jsxs)(`div`, {
            className: `flex flex-col gap-1.5`,
            children: [(0, X.jsx)(`label`, {
                htmlFor: `usage-limit-request-description`,
                className: `text-token-text-primary text-sm font-medium`,
                children: (0, X.jsx)(M, {
                    ...Z.customDescriptionLabel
                })
            }), (0, X.jsx)(`textarea`, {
                id: `usage-limit-request-description`,
                name: `usage-limit-request-description`,
                value: u,
                maxLength: 500,
                rows: 4,
                placeholder: s.formatMessage(Z.customDescriptionPlaceholder),
                className: `border-token-border-default bg-token-bg-primary text-token-text-primary placeholder:text-token-text-tertiary focus:border-token-border-heavy resize-none rounded-lg border px-3 py-2 text-sm font-normal outline-none`,
                onChange: e => f(e.target.value)
            })]
        }), (0, X.jsxs)(`div`, {
            className: `flex flex-col gap-1.5`,
            children: [(0, X.jsx)(`label`, {
                htmlFor: `usage-limit-request-url`,
                className: `text-token-text-primary text-sm font-medium`,
                children: (0, X.jsx)(M, {
                    ...Z.customUrlLabel
                })
            }), (0, X.jsx)(`input`, {
                id: `usage-limit-request-url`,
                name: `usage-limit-request-url`,
                type: `url`,
                required: !0,
                value: p,
                placeholder: s.formatMessage(Z.customUrlPlaceholder),
                className: `border-token-border-default bg-token-bg-primary text-token-text-primary placeholder:text-token-text-tertiary focus:border-token-border-heavy rounded-lg border px-3 py-2 text-sm font-normal outline-none`,
                "aria-invalid": v.length > 0 && !y,
                onChange: e => m(e.target.value)
            }), v.length > 0 && !y ? (0, X.jsx)(`span`, {
                className: `text-token-interactive-label-warning-secondary text-sm font-normal`,
                children: (0, X.jsx)(M, {
                    ...Z.invalidHttps
                })
            }) : null]
        })]
    }) : null, t[36] = y, t[37] = u, t[38] = s, t[39] = c, t[40] = p, t[41] = v, t[42] = F) : F = t[42];
    let I;
    t[43] !== N || t[44] !== P || t[45] !== F ? (I = (0, X.jsxs)(`div`, {
        className: `flex flex-col gap-4`,
        children: [N, P, F]
    }), t[43] = N, t[44] = P, t[45] = F, t[46] = I) : I = t[46];
    let L;
    return t[47] !== a || t[48] !== I || t[49] !== te || t[50] !== E ? (L = (0, X.jsx)(d, {
        isOpen: !0,
        showCloseButton: !0,
        testId: `modal-usage-limit-increase-request`,
        title: S,
        onClose: a,
        primaryButton: te,
        secondaryButton: E,
        children: I
    }), t[47] = a, t[48] = I, t[49] = te, t[50] = E, t[51] = L) : L = t[51], L
}

function Kt(e) {
    return (0, X.jsx)(Ve.Item, {
        value: e,
        children: (0, X.jsx)(M, {
            ...Jt(e)
        })
    }, e)
}

function qt(e) {
    try {
        return new URL(e).protocol === `https:`
    } catch {
        return !1
    }
}

function Jt(e) {
    switch (e) {
        case `openai_native`:
            return Z.openaiNativeLabel;
        case `custom`:
            return Z.customLabel;
        case `disabled`:
            return Z.disabledLabel
    }
}

function Yt(e) {
    switch (e) {
        case `openai_native`:
            return Z.openaiNativeDescription;
        case `custom`:
            return Z.customDescription;
        case `disabled`:
            return Z.disabledDescription
    }
}
var Xt, Zt, X, Z, Qt = e((() => {
    Xt = V(), y(), i(), Be(), _(), l(), n(), B(), Zt = t(I()), F(), X = O(), Z = A({
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

function $t({
    pathname: e,
    search: t,
    workspaceId: n
}) {
    let r = new URL(U(`/usage-limits`, n, {
        includeWorkspaceLoginMethodHint: !0
    }));
    return Ie(e.split(`/`).at(-1), new URLSearchParams(t), r.searchParams), r.toString()
}

function en() {
    "use forget";
    let e = (0, Dn.c)(5),
        t = ze(),
        n = ee(),
        r = n?.isEnterprisey() === !0 && te(`3778045255`);
    if (!t.isLoaded) {
        let t;
        return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Q.jsx)(u, {
            className: `icon-xl`
        }), e[0] = t) : t = e[0], t
    }
    if (!t.isEnabled) {
        let t;
        return e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Q.jsx)(Ue, {}), e[1] = t) : t = e[1], t
    }
    if (r) {
        let t = n?.id,
            r;
        return e[2] === t ? r = e[3] : (r = (0, Q.jsx)(tn, {
            workspaceId: t
        }), e[2] = t, e[3] = r), r
    }
    let i;
    return e[4] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, Q.jsx)(nn, {}), e[4] = i) : i = e[4], i
}

function tn(e) {
    "use forget";
    let t = (0, Dn.c)(16),
        {
            workspaceId: n
        } = e,
        i = ae(),
        a = D(),
        o;
    t[0] === i ? o = t[1] : (o = i.formatMessage($.browserTitle), t[0] = i, t[1] = o);
    let s;
    t[2] === o ? s = t[3] : (s = (0, Q.jsx)(qe, {
        children: (0, Q.jsx)(`title`, {
            children: o
        })
    }), t[2] = o, t[3] = s);
    let c;
    t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, Q.jsx)(`p`, {
        className: `text-token-text-primary font-[590]`,
        children: (0, Q.jsx)(M, {
            ...$.usageLimitsMovedToAdminConsoleTitle
        })
    }), t[4] = c) : c = t[4];
    let l;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (l = (0, Q.jsxs)(`div`, {
        className: `flex flex-col gap-1 pb-1 text-[16px] leading-[26px] tracking-[-0.32px]`,
        children: [c, (0, Q.jsx)(`p`, {
            className: `text-token-text-secondary font-normal`,
            children: (0, Q.jsx)(M, {
                ...$.usageLimitsMovedToAdminConsoleBody
            })
        })]
    }), t[5] = l) : l = t[5];
    let u;
    t[6] !== a.pathname || t[7] !== a.search || t[8] !== n ? (u = $t({
        pathname: a.pathname,
        search: a.search,
        workspaceId: n
    }), t[6] = a.pathname, t[7] = a.search, t[8] = n, t[9] = u) : u = t[9];
    let d;
    t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, Q.jsx)(M, {
        ...$.usageLimitsMovedToAdminConsoleAction
    }), t[10] = d) : d = t[10];
    let f;
    t[11] === u ? f = t[12] : (f = (0, Q.jsx)(Fe, {
        className: `flex min-h-[80vh] items-center justify-center`,
        children: (0, Q.jsxs)(`div`, {
            className: `flex flex-col items-center justify-center gap-4 text-center`,
            children: [l, (0, Q.jsx)(r, {
                as: `a`,
                color: `secondary`,
                openNewTab: !0,
                rel: `noopener noreferrer`,
                size: `large`,
                to: u,
                children: d
            })]
        })
    }), t[11] = u, t[12] = f);
    let p;
    return t[13] !== s || t[14] !== f ? (p = (0, Q.jsxs)(Q.Fragment, {
        children: [s, f]
    }), t[13] = s, t[14] = f, t[15] = p) : p = t[15], p
}

function nn() {
    "use forget";
    let e = (0, Dn.c)(88),
        t = ae(),
        n = j(),
        r = N(),
        i = ee(),
        a = s(an),
        {
            role: o
        } = Le(),
        c = i?.id,
        l;
    e[0] !== o || e[1] !== a ? (l = o == null ? a != null && _e(a.role) : _e(o), e[0] = o, e[1] = a, e[2] = l) : l = e[2];
    let u = l,
        d;
    e[3] === n.tab ? d = e[4] : (d = pt(n.tab), e[3] = n.tab, e[4] = d);
    let p = d,
        m;
    e[5] === i ? m = e[6] : (m = i == null ? null : i.isEnterprisey() || i.isEdu(), e[5] = i, e[6] = m);
    let g = m,
        _ = f(c),
        v;
    e[7] !== i || e[8] !== u || e[9] !== _ ? (v = u && i != null && _.data != null && se(i) && te(Nn), e[7] = i, e[8] = u, e[9] = _, e[10] = v) : v = e[10];
    let y = v,
        b;
    e[11] !== p || e[12] !== c ? (b = p === `pending-requests` ? ht(c) : gt(c), e[11] = p, e[12] = c, e[13] = b) : b = e[13];
    let C;
    e[14] !== p || e[15] !== c ? (C = async () => {
        if (c == null) throw Error(`Workspace id is required`);
        return await _t(c, p === `pending-requests` ? void 0 : {
            fetchAllPages: !1,
            pageSize: Mn
        })
    }, e[14] = p, e[15] = c, e[16] = C) : C = e[16];
    let w = c != null && y,
        T;
    e[17] !== b || e[18] !== C || e[19] !== w ? (T = {
        queryKey: b,
        queryFn: C,
        enabled: w,
        staleTime: 0,
        refetchOnMount: `always`,
        refetchOnWindowFocus: `always`
    }, e[17] = b, e[18] = C, e[19] = w, e[20] = T) : T = e[20];
    let E = re(T),
        D;
    e[21] === E.data?.items ? D = e[22] : (D = E.data?.items.some(rn) ?? !1, e[21] = E.data?.items, e[22] = D);
    let O = D,
        k = i == null || _.isLoading ? null : y ? _.data?.kind === `openai_native` || p === `pending-requests` && E.fetchStatus !== `idle` ? !0 : E.isPending ? null : E.isError || O || !!E.data?.cursor : !1,
        A = g === !1 && p === `groups` || k !== !0 && p === `pending-requests` ? `workspace` : p,
        ne;
    e[23] !== i || e[24] !== u || e[25] !== p ? (ne = p !== `pending-requests` && u && i != null && (i.isEnterprisey() || i.isEdu()) && te(Pn), e[23] = i, e[24] = u, e[25] = p, e[26] = ne) : ne = e[26];
    let P = ne,
        F = p !== `pending-requests` && u && i != null,
        I;
    e[27] !== g || e[28] !== k ? (I = e => !(g === !1 && e === `groups` || k !== !0 && e === `pending-requests`), e[27] = g, e[28] = k, e[29] = I) : I = e[29];
    let L = mt.filter(I),
        R, ie;
    e[30] === c ? (R = e[31], ie = e[32]) : (R = [`spend-controls-explainability`, c], ie = async () => {
        if (c == null) throw Error(`Workspace id is required`);
        return await h.safeGet(`/accounts/{account_id}/spend-controls/explainability`, {
            parameters: {
                path: {
                    account_id: c
                }
            }
        })
    }, e[30] = c, e[31] = R, e[32] = ie);
    let z = c != null && P,
        B;
    e[33] !== R || e[34] !== ie || e[35] !== z ? (B = {
        queryKey: R,
        queryFn: ie,
        enabled: z
    }, e[33] = R, e[34] = ie, e[35] = z, e[36] = B) : B = e[36];
    let V = re(B),
        U = P ? V.data : void 0,
        W;
    if (e[37] !== F) {
        let t = F ? S(In) : null;
        W = t == null ? void 0 : {
            thresholdCreditsPerMember: t.get(`low_limit_warning_threshold_credits_per_member`, Ln),
            averageMonthlyCreditsPerMember: t.get(`low_limit_warning_average_monthly_credits_per_member`, Rn),
            powerUserMonthlyCreditsPerMember: t.get(`low_limit_warning_power_user_monthly_credits_per_member`, zn)
        }, e[37] = F, e[38] = W
    } else W = e[38];
    let G = W,
        oe, ce;
    e[39] !== r || e[40] !== E.isFetching || e[41] !== p || e[42] !== g || e[43] !== k ? (oe = () => {
        (g === !1 && p === `groups` || k === !1 && !E.isFetching && p === `pending-requests`) && r(ft(`workspace`), {
            replace: !0
        })
    }, ce = [r, E.isFetching, p, g, k], e[39] = r, e[40] = E.isFetching, e[41] = p, e[42] = g, e[43] = k, e[44] = oe, e[45] = ce) : (oe = e[44], ce = e[45]), (0, On.useEffect)(oe, ce);
    let le;
    e[46] === t ? le = e[47] : (le = t.formatMessage($.browserTitle), e[46] = t, e[47] = le);
    let K;
    e[48] === le ? K = e[49] : (K = (0, Q.jsx)(qe, {
        children: (0, Q.jsx)(`title`, {
            children: le
        })
    }), e[48] = le, e[49] = K);
    let ue = Pe,
        de;
    e[50] === t ? de = e[51] : (de = t.formatMessage($.pageTitle), e[50] = t, e[51] = de);
    let fe = P ? $.pageSubtitleWithEstimatedValues : $.pageSubtitle,
        pe;
    e[52] === fe ? pe = e[53] : (pe = (0, Q.jsx)(M, {
        ...fe
    }), e[52] = fe, e[53] = pe);
    let me;
    e[54] !== A || e[55] !== O || e[56] !== r ? (me = e => (0, Q.jsx)(`button`, {
        type: `button`,
        className: x(`min-h-[32px] border-b py-[10px] text-[14px] leading-5 whitespace-nowrap`, A === e ? `text-token-text-primary border-current` : `text-token-text-tertiary hover:text-token-text-secondary cursor-pointer border-transparent`),
        onClick: () => r(ft(e)),
        children: (0, Q.jsxs)(`span`, {
            className: `inline-flex items-center gap-1.5`,
            children: [(0, Q.jsx)(M, {
                ...$[e]
            }), e === `pending-requests` && O ? (0, Q.jsxs)(Q.Fragment, {
                children: [(0, Q.jsx)(H, {
                    color: `blue`,
                    className: `shrink-0`
                }), (0, Q.jsx)(`span`, {
                    className: `sr-only`,
                    children: (0, Q.jsx)(M, {
                        ...$.pendingRequestsAvailable
                    })
                })]
            }) : null]
        })
    }, e), e[54] = A, e[55] = O, e[56] = r, e[57] = me) : me = e[57];
    let he = L.map(me),
        ge;
    e[58] === he ? ge = e[59] : (ge = (0, Q.jsx)(`div`, {
        className: `flex items-end justify-between gap-4`,
        children: (0, Q.jsx)(`div`, {
            className: `flex items-center gap-4`,
            children: he
        })
    }), e[58] = he, e[59] = ge);
    let ve;
    e[60] !== ue || e[61] !== de || e[62] !== pe || e[63] !== ge ? (ve = (0, Q.jsx)(ue, {
        contentWidth: `medium`,
        title: de,
        subtitle: pe,
        tabsHeader: ge
    }), e[60] = ue, e[61] = de, e[62] = pe, e[63] = ge, e[64] = ve) : ve = e[64];
    let ye;
    e[65] !== A || e[66] !== U || e[67] !== G ? (ye = A === `workspace` ? (0, Q.jsx)(on, {
        explainabilityContext: U,
        lowLimitWarningConfig: G
    }) : null, e[65] = A, e[66] = U, e[67] = G, e[68] = ye) : ye = e[68];
    let be;
    e[69] !== A || e[70] !== U || e[71] !== G ? (be = A === `users` ? (0, Q.jsx)(cn, {
        explainabilityContext: U,
        lowLimitWarningConfig: G
    }) : null, e[69] = A, e[70] = U, e[71] = G, e[72] = be) : be = e[72];
    let xe;
    e[73] !== A || e[74] !== U || e[75] !== G ? (xe = A === `groups` ? (0, Q.jsx)(mn, {
        explainabilityContext: U,
        lowLimitWarningConfig: G
    }) : null, e[73] = A, e[74] = U, e[75] = G, e[76] = xe) : xe = e[76];
    let Se;
    e[77] === A ? Se = e[78] : (Se = A === `pending-requests` ? (0, Q.jsx)(Ot, {}) : null, e[77] = A, e[78] = Se);
    let Ce;
    e[79] !== ye || e[80] !== be || e[81] !== xe || e[82] !== Se ? (Ce = (0, Q.jsx)(Fe, {
        contentWidth: `medium`,
        showSpinner: !1,
        children: (0, Q.jsxs)(`div`, {
            className: `pt-4 pb-8`,
            children: [ye, be, xe, Se]
        })
    }), e[79] = ye, e[80] = be, e[81] = xe, e[82] = Se, e[83] = Ce) : Ce = e[83];
    let we;
    return e[84] !== K || e[85] !== ve || e[86] !== Ce ? (we = (0, Q.jsxs)(Q.Fragment, {
        children: [K, ve, Ce]
    }), e[84] = K, e[85] = ve, e[86] = Ce, e[87] = we) : we = e[87], we
}

function rn(e) {
    return e.status === `pending`
}

function an(e) {
    return e.currentWorkspace
}

function on(e) {
    "use forget";
    let t = (0, Dn.c)(58),
        {
            explainabilityContext: n,
            lowLimitWarningConfig: r
        } = e,
        i = ae(),
        a = ne(),
        o = ee(),
        l = s(sn),
        {
            role: u
        } = Le(),
        [d, f] = (0, On.useState)(!1),
        p = o?.id,
        g;
    t[0] !== u || t[1] !== l ? (g = u == null ? l != null && _e(l.role) : _e(u), t[0] = u, t[1] = l, t[2] = g) : g = t[2];
    let _ = g,
        v, y;
    t[3] === p ? (v = t[4], y = t[5]) : (v = [`workspace-spend-controls`, p], y = async () => {
        if (!p) throw Error(`Workspace id is required`);
        return await h.safeGet(`/accounts/{account_id}/spend-controls/workspace`, {
            parameters: {
                path: {
                    account_id: p
                }
            }
        })
    }, t[3] = p, t[4] = v, t[5] = y);
    let b = !!p,
        x;
    t[6] !== v || t[7] !== y || t[8] !== b ? (x = {
        queryKey: v,
        queryFn: y,
        enabled: b
    }, t[6] = v, t[7] = y, t[8] = b, t[9] = x) : x = t[9];
    let S = re(x),
        C;
    t[10] === p ? C = t[11] : (C = async e => {
        if (!p) throw Error(`Workspace id is required`);
        return await h.safePost(`/accounts/{account_id}/settings/seat_type_credit_limits`, {
            parameters: {
                path: {
                    account_id: p
                }
            },
            requestBody: En(e)
        })
    }, t[10] = p, t[11] = C);
    let w;
    t[12] !== a || t[13] !== p ? (w = async e => {
        if (!p) throw Error(`Workspace id is required`);
        a.setQueryData([`workspace-settings`, p], e), await a.invalidateQueries({
            queryKey: [`workspace-settings`, p]
        }), await a.invalidateQueries({
            queryKey: [`workspace-spend-controls`, p]
        }), await et({
            queryClient: a,
            workspaceId: p,
            refetchType: `all`
        })
    }, t[12] = a, t[13] = p, t[14] = w) : w = t[14];
    let T;
    t[15] !== C || t[16] !== w ? (T = {
        mutationFn: C,
        onSuccess: w
    }, t[15] = C, t[16] = w, t[17] = T) : T = t[17];
    let E = ie(T),
        D = S.data?.default_user_credit_limits,
        O;
    t[18] === D ? O = t[19] : (O = fe(D), t[18] = D, t[19] = O);
    let k = O,
        A = typeof k == `number` ? k : null,
        j = r != null && (d || A != null && A < r.thresholdCreditsPerMember) && te(Fn) ? r : void 0,
        N;
    t[20] !== i || t[21] !== E ? (N = async e => {
        try {
            await E.mutateAsync(e), c().success(i.formatMessage($.limitSaveSuccess), {
                hasCloseButton: !0
            }), f(!1)
        } catch {
            c().warning(i.formatMessage($.limitSaveError), {
                hasCloseButton: !0
            })
        }
    }, t[20] = i, t[21] = E, t[22] = N) : N = t[22];
    let P = N,
        F;
    t[23] !== d || t[24] !== P ? (F = async e => {
        d && await P(e)
    }, t[23] = d, t[24] = P, t[25] = F) : F = t[25];
    let I = F,
        L;
    t[26] === Symbol.for(`react.memo_cache_sentinel`) ? (L = (0, Q.jsx)(`div`, {
        className: `text-token-text-primary text-base leading-[26px] font-semibold tracking-[-0.32px]`,
        children: (0, Q.jsx)(M, {
            ...$.workspaceDefaultLimitLabel
        })
    }), t[26] = L) : L = t[26];
    let R;
    t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (R = (0, Q.jsxs)(`div`, {
        children: [L, (0, Q.jsx)(`div`, {
            className: `text-token-text-tertiary text-sm leading-5 tracking-[-0.15px]`,
            children: (0, Q.jsx)(M, {
                ...$.workspaceDefaultLimitDescription
            })
        })]
    }), t[27] = R) : R = t[27];
    let z;
    t[28] !== k || t[29] !== n || t[30] !== _ || t[31] !== E || t[32] !== S.isError || t[33] !== S.isFetching || t[34] !== S.isLoading ? (z = (0, Q.jsxs)(`div`, {
        className: `flex w-full items-start justify-between`,
        children: [R, S.isLoading || S.isFetching ? (0, Q.jsx)(m, {
            className: `text-token-text-tertiary mt-1 h-4 w-4`
        }) : (0, Q.jsxs)(`div`, {
            className: `flex flex-col items-end gap-0.5`,
            children: [(0, Q.jsx)(Ze, {
                explainabilityContext: n,
                limit: k
            }), (0, Q.jsx)(bn, {
                disabled: !_,
                testId: `workspace-usage-limits-admin-disabled-tooltip-trigger`,
                children: (0, Q.jsx)(yn, {
                    disabled: !_ || S.isError || E.isPending,
                    onClick: () => f(!0),
                    label: k == null ? $.addButton : $.editButton
                })
            })]
        })]
    }), t[28] = k, t[29] = n, t[30] = _, t[31] = E, t[32] = S.isError, t[33] = S.isFetching, t[34] = S.isLoading, t[35] = z) : z = t[35];
    let B;
    t[36] !== j || t[37] !== A || t[38] !== n ? (B = (0, Q.jsx)(Xe, {
        className: `mt-4`,
        explainabilityContext: n,
        limit: A,
        lowLimitWarningConfig: j,
        variant: `workspace-default`
    }), t[36] = j, t[37] = A, t[38] = n, t[39] = B) : B = t[39];
    let V;
    t[40] !== z || t[41] !== B ? (V = (0, Q.jsxs)(`div`, {
        className: `border-token-border-default border-b pb-4`,
        children: [z, B]
    }), t[40] = z, t[41] = B, t[42] = V) : V = t[42];
    let H;
    t[43] !== _ || t[44] !== p ? (H = (0, Q.jsx)(Wt, {
        workspaceId: p,
        canEdit: _
    }), t[43] = _, t[44] = p, t[45] = H) : H = t[45];
    let U;
    t[46] !== V || t[47] !== H ? (U = (0, Q.jsxs)(`section`, {
        children: [V, H]
    }), t[46] = V, t[47] = H, t[48] = U) : U = t[48];
    let W;
    t[49] !== j || t[50] !== k || t[51] !== n || t[52] !== I || t[53] !== d ? (W = d ? (0, Q.jsx)(ut, {
        currentLimit: k,
        placeholder: ``,
        onClose: () => f(!1),
        onSave: I,
        renderLimitContext: e => (0, Q.jsx)(Ye, {
            explainabilityContext: n,
            limit: e,
            lowLimitWarningConfig: j
        })
    }) : null, t[49] = j, t[50] = k, t[51] = n, t[52] = I, t[53] = d, t[54] = W) : W = t[54];
    let G;
    return t[55] !== U || t[56] !== W ? (G = (0, Q.jsxs)(Q.Fragment, {
        children: [U, W]
    }), t[55] = U, t[56] = W, t[57] = G) : G = t[57], G
}

function sn(e) {
    return e.currentWorkspace
}

function cn(e) {
    "use forget";
    let t = (0, Dn.c)(83),
        {
            explainabilityContext: n,
            lowLimitWarningConfig: r
        } = e,
        i = ae(),
        a = ne(),
        l = ee(),
        u = s(pn),
        {
            role: d
        } = Le(),
        [f] = L(),
        p;
    t[0] === f ? p = t[1] : (p = f.get(`query`) ?? ``, t[0] = f, t[1] = p);
    let g = p,
        [_, v] = (0, On.useState)(0),
        [y, b] = (0, On.useState)(g),
        [S, C] = (0, On.useState)(g),
        w;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (w = {
        field: `name`,
        direction: `ASC`
    }, t[2] = w) : w = t[2];
    let [T, E] = (0, On.useState)(w), [D, O] = (0, On.useState)(null), k = D != null && r != null && te(Fn) ? r : void 0, A = l?.id, j;
    t[3] !== d || t[4] !== u ? (j = d == null ? u != null && _e(u.role) : _e(d), t[3] = d, t[4] = u, t[5] = j) : j = t[5];
    let N = j,
        P;
    t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (P = o(e => {
        v(0), C(e)
    }, 300, {
        leading: !1,
        trailing: !0
    }), t[6] = P) : P = t[6];
    let F = P,
        I, R;
    t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (I = () => () => F.cancel(), R = [F], t[7] = I, t[8] = R) : (I = t[7], R = t[8]), (0, On.useEffect)(I, R);
    let B, V;
    t[9] === g ? (B = t[10], V = t[11]) : (B = () => {
        v(0), b(g), C(g)
    }, V = [g], t[9] = g, t[10] = B, t[11] = V), (0, On.useEffect)(B, V);
    let H = _ * jn,
        U;
    t[12] !== S || t[13] !== T.direction || t[14] !== T.field || t[15] !== H || t[16] !== A ? (U = it(A, H, S, jn, T.field, T.direction), t[12] = S, t[13] = T.direction, t[14] = T.field, t[15] = H, t[16] = A, t[17] = U) : U = t[17];
    let W;
    t[18] !== S || t[19] !== _ || t[20] !== T.direction || t[21] !== T.field || t[22] !== A ? (W = async () => {
        if (!A) throw Error(`Workspace id is required`);
        return await h.safeGet(`/accounts/{account_id}/spend-controls/users`, {
            parameters: {
                path: {
                    account_id: A
                },
                query: {
                    offset: _ * jn,
                    limit: jn,
                    query: S,
                    order_by_field: T.field,
                    order_by_direction: T.direction
                }
            }
        })
    }, t[18] = S, t[19] = _, t[20] = T.direction, t[21] = T.field, t[22] = A, t[23] = W) : W = t[23];
    let G = !!A,
        oe;
    t[24] !== U || t[25] !== W || t[26] !== G ? (oe = {
        queryKey: U,
        queryFn: W,
        enabled: G,
        placeholderData: z
    }, t[24] = U, t[25] = W, t[26] = G, t[27] = oe) : oe = t[27];
    let se = re(oe),
        le = se.data,
        K;
    t[28] === A ? K = t[29] : (K = async e => {
        let {
            userId: t,
            limit: n
        } = e;
        if (!A) throw Error(`Workspace id is required`);
        return await h.safePatch(`/accounts/{account_id}/users/{user_id}`, {
            parameters: {
                path: {
                    account_id: A,
                    user_id: t
                }
            },
            requestBody: {
                credit_limits: de(n)
            }
        })
    }, t[28] = A, t[29] = K);
    let ue;
    t[30] !== a || t[31] !== A ? (ue = async e => {
        if (!A) return {
            previousCacheEntries: []
        };
        await ot({
            queryClient: a,
            workspaceId: A
        });
        let t = nt({
            queryClient: a,
            workspaceId: A
        });
        return at({
            queryClient: a,
            workspaceId: A,
            userId: e.userId,
            creditLimits: de(e.limit)
        }), {
            previousCacheEntries: t
        }
    }, t[30] = a, t[31] = A, t[32] = ue) : ue = t[32];
    let pe;
    t[33] === a ? pe = t[34] : (pe = (e, t, n) => {
        n != null && rt({
            queryClient: a,
            snapshot: n.previousCacheEntries
        })
    }, t[33] = a, t[34] = pe);
    let me;
    t[35] !== a || t[36] !== A ? (me = async (e, t) => {
        A && (await et({
            queryClient: a,
            workspaceId: A,
            refetchType: `active`
        }), at({
            queryClient: a,
            workspaceId: A,
            userId: t.userId,
            creditLimits: de(t.limit),
            updateEffectiveHardCap: t.limit != null
        }), await st({
            queryClient: a,
            workspaceId: A,
            refetchType: `active`
        }))
    }, t[35] = a, t[36] = A, t[37] = me) : me = t[37];
    let he;
    t[38] !== K || t[39] !== ue || t[40] !== pe || t[41] !== me ? (he = {
        mutationFn: K,
        onMutate: ue,
        onError: pe,
        onSuccess: me
    }, t[38] = K, t[39] = ue, t[40] = pe, t[41] = me, t[42] = he) : he = t[42];
    let ve = ie(he),
        ye;
    t[43] !== D || t[44] !== i || t[45] !== ve ? (ye = async e => {
        if (D != null) try {
            await ve.mutateAsync({
                userId: D.id,
                limit: e
            }), c().success(i.formatMessage($.limitSaveSuccess), {
                hasCloseButton: !0
            }), O(null)
        } catch {
            c().warning(i.formatMessage($.limitSaveError), {
                hasCloseButton: !0
            })
        }
    }, t[43] = D, t[44] = i, t[45] = ve, t[46] = ye) : ye = t[46];
    let be = ye,
        xe;
    t[47] !== le?.items || t[48] !== se.isError ? (xe = se.isError ? [] : le?.items ?? [], t[47] = le?.items, t[48] = se.isError, t[49] = xe) : xe = t[49];
    let Se = xe,
        Ce = Math.ceil((le?.total ?? 0) / jn),
        we = A == null || le === void 0 && (se.isPending || se.isFetching),
        Te = se.isPlaceholderData,
        Ee, De;
    t[50] !== Ce || t[51] !== _ ? (Ee = () => {
        _ >= Ce && Ce !== 0 && v(Math.max(Ce - 1, 0))
    }, De = [Ce, _], t[50] = Ce, t[51] = _, t[52] = Ee, t[53] = De) : (Ee = t[52], De = t[53]), (0, On.useEffect)(Ee, De);
    let Oe;
    t[54] === Symbol.for(`react.memo_cache_sentinel`) ? (Oe = e => {
        b(e.target.value), F(e.target.value)
    }, t[54] = Oe) : Oe = t[54];
    let ke;
    t[55] === i ? ke = t[56] : (ke = i.formatMessage($.searchUsersPlaceholder), t[55] = i, t[56] = ke);
    let Ae;
    t[57] !== y || t[58] !== ke ? (Ae = (0, Q.jsx)(`div`, {
        className: `mb-4.5 flex items-center justify-between`,
        children: (0, Q.jsx)(ce, {
            className: `w-full`,
            value: y,
            onChange: Oe,
            placeholder: ke,
            inputClassName: `w-full rounded-full! text-sm`
        })
    }), t[57] = y, t[58] = ke, t[59] = Ae) : Ae = t[59];
    let je;
    t[60] !== n || t[61] !== N || t[62] !== i || t[63] !== we || t[64] !== Te || t[65] !== Se || t[66] !== Ce || t[67] !== _ || t[68] !== T.direction || t[69] !== T.field || t[70] !== se.isError ? (je = we ? (0, Q.jsx)(`div`, {
        className: `flex min-h-[18rem] items-center justify-center`,
        children: (0, Q.jsx)(m, {})
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
                    children: [(0, Q.jsx)(xn, {
                        active: T.field === `name`,
                        direction: T.direction,
                        onSort: () => {
                            v(0), E(fn)
                        },
                        children: (0, Q.jsx)(M, {
                            ...$.nameColumn
                        })
                    }), (0, Q.jsx)(xn, {
                        active: T.field === `current_month_usage`,
                        direction: T.direction,
                        onSort: () => {
                            v(0), E(dn)
                        },
                        children: (0, Q.jsx)(M, {
                            ...$.usedThisMonthColumn
                        })
                    }), (0, Q.jsx)(xn, {
                        active: T.field === `effective_hard_cap_limit`,
                        direction: T.direction,
                        onSort: () => {
                            v(0), E(un)
                        },
                        children: (0, Q.jsx)(M, {
                            ...$.currentLimitColumn
                        })
                    }), (0, Q.jsx)(xn, {
                        active: T.field === `override_hard_cap_limit`,
                        direction: T.direction,
                        onSort: () => {
                            v(0), E(ln)
                        },
                        children: (0, Q.jsx)(M, {
                            ...$.overrideLimitColumn
                        })
                    })]
                }), (0, Q.jsxs)(q.Body, {
                    className: x(Te && `pointer-events-none opacity-50`),
                    children: [se.isError ? (0, Q.jsx)(q.Row, {
                        className: `[&>td]:py-3`,
                        children: (0, Q.jsx)(q.Cell, {
                            colSpan: 4,
                            children: (0, Q.jsx)(`div`, {
                                className: `text-token-text-tertiary`,
                                children: (0, Q.jsx)(M, {
                                    ...$.usersLoadError
                                })
                            })
                        })
                    }) : null, Se.map(e => {
                        let t = e.name || e.email || e.id,
                            r = e.email || i.formatMessage($.noEmail),
                            a = fe(e.override_credit_limits);
                        return (0, Q.jsxs)(q.Row, {
                            className: `[&>td]:py-3`,
                            children: [(0, Q.jsxs)(q.Cell, {
                                divClassName: `min-h-[40px] min-w-0 items-center`,
                                children: [(0, Q.jsx)(`div`, {
                                    className: `relative shrink-0 pe-3`,
                                    children: (0, Q.jsx)(Ge, {
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
                                children: (0, Q.jsx)(M, {
                                    ...$.creditValue,
                                    values: {
                                        limit: i.formatNumber(e.current_month_usage ?? 0, {
                                            maximumFractionDigits: 1
                                        })
                                    }
                                })
                            }), (0, Q.jsx)(q.Cell, {
                                children: (0, Q.jsx)(Cn, {
                                    effectiveHardCap: e.effective_hard_cap,
                                    inheritedHardCap: e.inherited_hard_cap,
                                    explainabilityContext: n
                                })
                            }), (0, Q.jsx)(q.Cell, {
                                children: (0, Q.jsxs)(`div`, {
                                    className: `flex flex-col items-start gap-0.5`,
                                    children: [a == null ? (0, Q.jsx)(`span`, {
                                        className: `text-token-text-secondary`,
                                        children: (0, Q.jsx)(M, {
                                            ...$.noOverride
                                        })
                                    }) : (0, Q.jsx)(Ze, {
                                        explainabilityContext: n,
                                        limit: a
                                    }), (0, Q.jsx)(bn, {
                                        disabled: !N,
                                        testId: `${e.id}-usage-limits-admin-disabled-tooltip-trigger`,
                                        children: (0, Q.jsx)(yn, {
                                            disabled: !N || Te,
                                            onClick: () => O(e),
                                            label: a == null ? $.addButton : $.editButton
                                        })
                                    })]
                                })
                            })]
                        }, e.id)
                    }), !se.isError && Se.length === 0 ? (0, Q.jsx)(q.Row, {
                        className: `[&>td]:py-3`,
                        children: (0, Q.jsx)(q.Cell, {
                            colSpan: 4,
                            children: (0, Q.jsx)(`div`, {
                                className: `text-token-text-tertiary`,
                                children: (0, Q.jsx)(M, {
                                    ...$.noUsersFound
                                })
                            })
                        })
                    }) : null]
                })]
            }), Te ? (0, Q.jsx)(`div`, {
                className: `pointer-events-none absolute inset-0 flex items-center justify-center`,
                children: (0, Q.jsx)(m, {
                    className: `text-token-text-tertiary h-5 w-5`
                })
            }) : null]
        }), (0, Q.jsx)(`div`, {
            className: `relative mt-4 min-h-[20px]`,
            children: Ce > 1 ? (0, Q.jsx)(`div`, {
                className: `absolute start-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 justify-center`,
                children: (0, Q.jsx)(ge, {
                    currentPage: _,
                    onChangeIndex: v,
                    length: Ce
                })
            }) : null
        })]
    }), t[60] = n, t[61] = N, t[62] = i, t[63] = we, t[64] = Te, t[65] = Se, t[66] = Ce, t[67] = _, t[68] = T.direction, t[69] = T.field, t[70] = se.isError, t[71] = je) : je = t[71];
    let Me;
    t[72] !== Ae || t[73] !== je ? (Me = (0, Q.jsxs)(`section`, {
        children: [Ae, je]
    }), t[72] = Ae, t[73] = je, t[74] = Me) : Me = t[74];
    let Ne;
    t[75] !== k || t[76] !== D || t[77] !== n || t[78] !== be ? (Ne = D == null ? null : (0, Q.jsx)(ut, {
        allowUnlimited: !0,
        currentLimit: fe(D.override_credit_limits),
        getValidationResult: void 0,
        placeholder: ``,
        onClose: () => O(null),
        onSave: be,
        renderLimitContext: e => (0, Q.jsx)(Ye, {
            explainabilityContext: n,
            limit: e,
            lowLimitWarningConfig: k
        })
    }), t[75] = k, t[76] = D, t[77] = n, t[78] = be, t[79] = Ne) : Ne = t[79];
    let Pe;
    return t[80] !== Me || t[81] !== Ne ? (Pe = (0, Q.jsxs)(Q.Fragment, {
        children: [Me, Ne]
    }), t[80] = Me, t[81] = Ne, t[82] = Pe) : Pe = t[82], Pe
}

function ln(e) {
    return Sn(e, `override_hard_cap_limit`, `DESC`)
}

function un(e) {
    return Sn(e, `effective_hard_cap_limit`, `DESC`)
}

function dn(e) {
    return Sn(e, `current_month_usage`, `DESC`)
}

function fn(e) {
    return Sn(e, `name`, `ASC`)
}

function pn(e) {
    return e.currentWorkspace
}

function mn(e) {
    "use forget";
    let t = (0, Dn.c)(52),
        {
            explainabilityContext: n,
            lowLimitWarningConfig: r
        } = e,
        i = ae(),
        a = ne(),
        o = ee(),
        l = s(vn),
        {
            role: u
        } = Le(),
        [d, f] = (0, On.useState)(``),
        p;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (p = {
        field: `group_name`,
        direction: `ASC`
    }, t[0] = p) : p = t[0];
    let [g, _] = (0, On.useState)(p), [v, y] = (0, On.useState)(null), b = v != null && r != null && te(Fn) ? r : void 0, x = o?.id, S;
    t[1] !== u || t[2] !== l ? (S = u == null ? l != null && _e(l.role) : _e(u), t[1] = u, t[2] = l, t[3] = S) : S = t[3];
    let C = S,
        w, T;
    t[4] === x ? (w = t[5], T = t[6]) : (w = [`group-spend-controls`, x], T = async () => {
        if (!x) throw Error(`Workspace id is required`);
        return await h.safeGet(`/accounts/{account_id}/spend-controls/groups`, {
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
        return await h.safePatch(`/accounts/{account_id}/groups/{group_id}/spend-controls`, {
            parameters: {
                path: {
                    account_id: x,
                    group_id: t
                }
            },
            requestBody: {
                default_user_credit_limits: de(n)
            }
        })
    }, t[11] = x, t[12] = k);
    let A;
    t[13] !== a || t[14] !== x ? (A = async () => {
        x && (await a.invalidateQueries({
            queryKey: [`group-spend-controls`, x]
        }), await et({
            queryClient: a,
            workspaceId: x,
            refetchType: `all`
        }))
    }, t[13] = a, t[14] = x, t[15] = A) : A = t[15];
    let j;
    t[16] !== k || t[17] !== A ? (j = {
        mutationFn: k,
        onSuccess: A
    }, t[16] = k, t[17] = A, t[18] = j) : j = t[18];
    let N = ie(j),
        P = O.data,
        F, I;
    if (t[19] !== v || t[20] !== n || t[21] !== d || t[22] !== O.isFetching || t[23] !== O.isPending || t[24] !== P || t[25] !== C || t[26] !== i || t[27] !== g || t[28] !== N || t[29] !== x) {
        let e = Array.isArray(P) ? P : P?.items ?? [],
            r = x == null || O.isPending || O.isFetching,
            a = d.trim().toLowerCase(),
            o = a === `` ? e : e.filter(e => e.group_name.toLowerCase().includes(a)),
            s;
        t[32] === g ? s = t[33] : (s = (e, t) => {
            let n;
            if (g.field === `group_name`) n = e.group_name.localeCompare(t.group_name);
            else if (g.field === `num_members`) n = e.num_members - t.num_members;
            else {
                let r = fe(e.default_user_credit_limits),
                    i = fe(t.default_user_credit_limits);
                if (r == null) return i == null ? 0 : 1;
                if (i == null) return -1;
                let a = [r === xe, typeof r == `number` ? r : 0],
                    o = [i === xe, typeof i == `number` ? i : 0];
                n = Number(a[0]) - Number(o[0]) || a[1] - o[1]
            }
            return g.direction === `ASC` ? n : -n
        }, t[32] = g, t[33] = s);
        let l = o.toSorted(s),
            u;
        t[34] !== v || t[35] !== i || t[36] !== N ? (u = async e => {
            if (v != null) try {
                await N.mutateAsync({
                    groupId: v.group_id,
                    limit: e
                }), c().success(i.formatMessage($.limitSaveSuccess), {
                    hasCloseButton: !0
                }), y(null)
            } catch {
                c().warning(i.formatMessage($.limitSaveError), {
                    hasCloseButton: !0
                })
            }
        }, t[34] = v, t[35] = i, t[36] = N, t[37] = u) : u = t[37], F = u;
        let p;
        t[38] === Symbol.for(`react.memo_cache_sentinel`) ? (p = e => f(e.target.value), t[38] = p) : p = t[38];
        let h;
        t[39] === i ? h = t[40] : (h = i.formatMessage($.searchGroupsPlaceholder), t[39] = i, t[40] = h);
        let b;
        t[41] !== d || t[42] !== h ? (b = (0, Q.jsx)(`div`, {
            className: `mb-4.5 flex items-center justify-between`,
            children: (0, Q.jsx)(ce, {
                className: `w-full`,
                value: d,
                onChange: p,
                placeholder: h,
                inputClassName: `w-full rounded-full! text-sm`
            })
        }), t[41] = d, t[42] = h, t[43] = b) : b = t[43], I = (0, Q.jsxs)(`section`, {
            children: [b, r ? (0, Q.jsx)(`div`, {
                className: `flex min-h-[18rem] items-center justify-center`,
                children: (0, Q.jsx)(m, {})
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
                    children: [(0, Q.jsx)(xn, {
                        active: g.field === `group_name`,
                        direction: g.direction,
                        onSort: () => _(_n),
                        children: (0, Q.jsx)(M, {
                            ...$.groupColumn
                        })
                    }), (0, Q.jsx)(xn, {
                        active: g.field === `num_members`,
                        direction: g.direction,
                        onSort: () => _(gn),
                        children: (0, Q.jsx)(M, {
                            ...$.membersColumn
                        })
                    }), (0, Q.jsx)(xn, {
                        active: g.field === `default_limit`,
                        direction: g.direction,
                        onSort: () => _(hn),
                        children: (0, Q.jsx)(M, {
                            ...$.defaultMonthlyLimitColumn
                        })
                    })]
                }), (0, Q.jsxs)(q.Body, {
                    children: [l.map(e => {
                        let t = fe(e.default_user_credit_limits);
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
                                children: i.formatNumber(e.num_members)
                            }), (0, Q.jsx)(q.Cell, {
                                children: (0, Q.jsxs)(`div`, {
                                    className: `flex flex-col items-start gap-0.5`,
                                    children: [(0, Q.jsx)(Ze, {
                                        explainabilityContext: n,
                                        limit: t
                                    }), (0, Q.jsx)(yn, {
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
                                children: (0, Q.jsx)(M, {
                                    ...$.noGroupsFound
                                })
                            })
                        })
                    }) : null]
                })]
            })]
        }), t[19] = v, t[20] = n, t[21] = d, t[22] = O.isFetching, t[23] = O.isPending, t[24] = P, t[25] = C, t[26] = i, t[27] = g, t[28] = N, t[29] = x, t[30] = F, t[31] = I
    } else F = t[30], I = t[31];
    let L;
    t[44] !== b || t[45] !== v || t[46] !== n || t[47] !== F ? (L = v == null ? null : (0, Q.jsx)(ut, {
        allowUnlimited: !0,
        currentLimit: fe(v.default_user_credit_limits),
        getValidationResult: void 0,
        placeholder: ``,
        onClose: () => y(null),
        onSave: F,
        renderLimitContext: e => (0, Q.jsx)(Ye, {
            explainabilityContext: n,
            limit: e,
            lowLimitWarningConfig: b
        })
    }), t[44] = b, t[45] = v, t[46] = n, t[47] = F, t[48] = L) : L = t[48];
    let z;
    return t[49] !== I || t[50] !== L ? (z = (0, Q.jsxs)(Q.Fragment, {
        children: [I, L]
    }), t[49] = I, t[50] = L, t[51] = z) : z = t[51], z
}

function hn(e) {
    return Sn(e, `default_limit`, `DESC`)
}

function gn(e) {
    return Sn(e, `num_members`, `DESC`)
}

function _n(e) {
    return Sn(e, `group_name`, `ASC`)
}

function vn(e) {
    return e.currentWorkspace
}

function yn(e) {
    "use forget";
    let t = (0, Dn.c)(6),
        {
            disabled: n,
            label: r,
            onClick: i
        } = e,
        a;
    t[0] === r ? a = t[1] : (a = (0, Q.jsx)(M, {
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

function bn(e) {
    "use forget";
    let t = (0, Dn.c)(6),
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
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, Q.jsx)(M, {
        ...$.adminDisabledTooltip
    }), t[2] = a) : a = t[2];
    let o;
    return t[3] !== n || t[4] !== i ? (o = (0, Q.jsx)(v, {
        label: a,
        children: (0, Q.jsx)(`span`, {
            className: `inline-flex`,
            "data-testid": i,
            children: n
        })
    }), t[3] = n, t[4] = i, t[5] = o) : o = t[5], o
}

function xn(e) {
    "use forget";
    let t = (0, Dn.c)(7),
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

function Sn(e, t, n) {
    return {
        field: t,
        direction: e.field === t ? e.direction === `ASC` ? `DESC` : `ASC` : n
    }
}

function Cn(e) {
    "use forget";
    let t = (0, Dn.c)(10),
        {
            effectiveHardCap: n,
            inheritedHardCap: r,
            explainabilityContext: i
        } = e;
    if (n == null || n.source.kind === `role_based_personal_budget`) {
        let e;
        return t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Q.jsx)(Ze, {
            limit: null
        }), t[0] = e) : e = t[0], e
    }
    let a = r?.source.kind === `role_based_personal_budget` ? null : r,
        o;
    t[1] !== n.source || t[2] !== a ? (o = wn(n.source, a), t[1] = n.source, t[2] = a, t[3] = o) : o = t[3];
    let s = o,
        c;
    t[4] === n.limit ? c = t[5] : (c = fe([n.limit]), t[4] = n.limit, t[5] = c);
    let l;
    return t[6] !== i || t[7] !== c || t[8] !== s ? (l = (0, Q.jsx)(Ze, {
        creditValueTooltip: s,
        explainabilityContext: i,
        limit: c
    }), t[6] = i, t[7] = c, t[8] = s, t[9] = l) : l = t[9], l
}

function wn(e, t) {
    switch (e.kind) {
        case `individual_override`:
            return {
                label: (0, Q.jsx)(M, {
                    ...$.userOverrideHardCapTooltipTitle
                }), secondaryLabel: (0, Q.jsxs)(Q.Fragment, {
                    children: [(0, Q.jsx)(M, {
                        ...$.userOverrideHardCapTooltipDescription
                    }), t == null ? null : (0, Q.jsxs)(Q.Fragment, {
                        children: [(0, Q.jsx)(`br`, {}), (0, Q.jsx)(Tn, {
                            inheritedHardCap: t
                        })]
                    })]
                })
            };
        case `group_default`:
            return {
                label: (0, Q.jsx)(M, {
                    ...$.groupDefaultHardCapTooltipTitle,
                    values: {
                        groupName: e.group_name
                    }
                }), secondaryLabel: (0, Q.jsx)(M, {
                    ...$.groupDefaultHardCapTooltipDescription
                })
            };
        case `workspace_default`:
            return {
                label: (0, Q.jsx)(M, {
                    ...$.workspaceDefaultHardCapTooltipTitle
                }), secondaryLabel: (0, Q.jsx)(M, {
                    ...$.workspaceDefaultHardCapTooltipDescription,
                    values: {
                        seatType: e.seat_type === kn ? (0, Q.jsx)(M, {
                            ...$.chatgptSeatLabel
                        }) : (0, Q.jsx)(M, {
                            ...$.codexSeatLabel
                        })
                    }
                })
            }
    }
}

function Tn(e) {
    "use forget";
    let t = (0, Dn.c)(10),
        {
            inheritedHardCap: n
        } = e,
        r;
    t[0] === n.limit ? r = t[1] : (r = fe([n.limit]), t[0] = n.limit, t[1] = r);
    let i = r;
    switch (n.source.kind) {
        case `group_default`: {
            let e;
            return t[2] !== n.limit || t[3] !== n.source.group_name || t[4] !== i ? (e = i === `unlimited_platform_max` ? (0, Q.jsx)(M, {
                ...$.groupUnlimitedOutsideOverride,
                values: {
                    groupName: n.source.group_name
                }
            }) : (0, Q.jsx)(M, {
                ...$.groupLimitOutsideOverride,
                values: {
                    groupName: n.source.group_name,
                    limit: n.limit.limit
                }
            }), t[2] = n.limit, t[3] = n.source.group_name, t[4] = i, t[5] = e) : e = t[5], e
        }
        case `workspace_default`: {
            let e;
            return t[6] !== n.limit || t[7] !== n.source.seat_type || t[8] !== i ? (e = i === `unlimited_platform_max` ? (0, Q.jsx)(M, {
                ...$.workspaceUnlimitedOutsideOverride,
                values: {
                    seatType: n.source.seat_type === kn ? (0, Q.jsx)(M, {
                        ...$.chatgptSeatLabel
                    }) : (0, Q.jsx)(M, {
                        ...$.codexSeatLabel
                    })
                }
            }) : (0, Q.jsx)(M, {
                ...$.workspaceLimitOutsideOverride,
                values: {
                    limit: n.limit.limit,
                    seatType: n.source.seat_type === kn ? (0, Q.jsx)(M, {
                        ...$.chatgptSeatLabel
                    }) : (0, Q.jsx)(M, {
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

function En(e) {
    let t = de(e);
    return {
        seat_type_credit_limits: {
            [kn]: t,
            [An]: t
        }
    }
}
var Dn, On, Q, kn, An, jn, Mn, Nn, Pn, Fn, In, Ln, Rn, zn, $, Bn = e((() => {
        Dn = V(), Ne(), Re(), pe(), Me(), Ut(), y(), We(), ve(), ct(), Ae(), p(), G(), Ee(), ke(), Te(), ye(), K(), E(), He(), C(), a(), _(), l(), n(), b(), Ke(), B(), w(), T(), On = t(I()), F(), P(), lt(), Je(), W(), le(), Qt(), tt(), dt(), je(), Q = O(), kn = `default`, An = `usage_based`, jn = 25, Mn = 50, Nn = `3909937021`, Pn = `3002192639`, Fn = `3581456201`, In = `3421588596`, Ln = 400, Rn = 1250, zn = 5e3, $ = A({
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
    Vn, Hn, Un, Wn = e((() => {
        P(), Vn = V(), Bn(), $e(), Hn = O(), Un = k(function() {
            "use forget";
            let e = (0, Vn.c)(1);
            Qe();
            let t;
            return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Hn.jsx)(en, {}), e[0] = t) : t = e[0], t
        })
    }));
export {
    Wn as n, Un as t
};
//# sourceMappingURL=90a39c8d-yywdl4dc9cwdsxtj.js.map
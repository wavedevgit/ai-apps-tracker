import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $G as n,
    Az as r,
    C_ as i,
    J5 as a,
    JT as o,
    L1 as s,
    P7 as c,
    R7 as l,
    RU as u,
    S_ as d,
    Sw as f,
    Wnt as p,
    X1 as m,
    Xnt as h,
    Xy as g,
    Y5 as _,
    ZG as v,
    Zy as y,
    _R as b,
    bR as ee,
    eK as x,
    jz as S,
    kz as C,
    qT as w,
    qnt as T,
    ww as E,
    zU as D
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    At as O,
    Bn as k,
    Ht as A,
    Ln as j,
    Lt as M,
    N as te,
    Nn as N,
    Nt as P,
    O as ne,
    Q as F,
    Rn as I,
    Vn as L,
    Vt as R,
    it as z,
    p as re,
    q as B,
    s as V,
    wn as H,
    zn as ie
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    B8t as U,
    I8t as W,
    Ijt as ae,
    Ljt as G,
    MHn as oe,
    NHn as K,
    PHn as se,
    SCn as ce,
    cH as le,
    dH as ue,
    fH as de,
    lH as fe,
    nw as pe,
    oKn as me,
    pH as he,
    sH as ge,
    sKn as _e,
    tw as ve,
    vCn as ye,
    vdn as be,
    ydn as xe
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Ax as Se,
    Kl as Ce,
    Ol as we,
    hm as Te,
    kl as Ee,
    kx as De,
    mm as Oe,
    ql as ke
} from "./30901919-7dzdc1ou0jtwkwpt.js";
import {
    Ev as Ae,
    Tv as q,
    as as je,
    cs as Me,
    dl as Ne,
    es as Pe,
    ns as Fe,
    os as Ie,
    ul as Le
} from "./c2675c8c-9bs3zsr3vq259es7.js";
import {
    f_ as Re,
    p_ as ze
} from "./8b34dbc2-k1zgxrtsww83602u.js";
import {
    n as Be,
    t as Ve
} from "./e18c46cf-nle0n93onlxfymmm.js";
import {
    n as He,
    t as Ue
} from "./18a8b3b4-laaxr9t00wj4bito.js";
import {
    n as We,
    t as Ge
} from "./9f2e6d33-h33rm8r24h08gyr1.js";
import {
    i as Ke,
    n as qe,
    r as Je,
    t as Ye
} from "./e6141aca-cg0kicaji6x7a3qg.js";
import {
    r as Xe,
    t as Ze
} from "./8c6976e5-3q5198gg5t3bqqf2.js";
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
} from "./af584902-j6ashdep3ulsad2k.js";
import {
    r as st,
    t as ct
} from "./ef852af5-ntv272msshygmo4v.js";
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
        let t = await c.safeGet(`/accounts/{account_id}/admin/workspace_admin_requests`, {
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
        t = ie(),
        n;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (n = u(), e[0] = n) : n = e[0];
    let i = n,
        a = te(),
        o = m(),
        s = ee(Pt),
        {
            role: l
        } = Ne(),
        d = o?.id,
        f;
    e[1] !== l || e[2] !== s ? (f = l == null ? s != null && ye(s.role) : ye(l), e[1] = l, e[2] = s, e[3] = f) : f = e[3];
    let p = f,
        [h, g] = (0, Rt.useState)(``),
        [_, v] = (0, Rt.useState)(Nt),
        y;
    e[4] === Symbol.for(`react.memo_cache_sentinel`) ? (y = {}, e[4] = y) : y = e[4];
    let [b, x] = (0, Rt.useState)(y), S;
    e[5] === d ? S = e[6] : (S = pt(d), e[5] = d, e[6] = S);
    let C;
    e[7] === d ? C = e[8] : (C = async () => {
        if (!d) throw Error(`Workspace id is required`);
        return await ht(d)
    }, e[7] = d, e[8] = C);
    let w = !!d,
        T;
    e[9] !== S || e[10] !== C || e[11] !== w ? (T = {
        queryKey: S,
        queryFn: C,
        enabled: w,
        staleTime: 0,
        refetchOnMount: `always`,
        refetchOnWindowFocus: `always`
    }, e[9] = S, e[10] = C, e[11] = w, e[12] = T) : T = e[12];
    let E = ne(T);
    E.data?.items;
    let D;
    e[13] === E.data?.items ? D = e[14] : (D = E.data?.items ?? [], e[13] = E.data?.items, e[14] = D);
    let O;
    e[15] === D ? O = e[16] : (O = D.filter(Mt), e[15] = D, e[16] = O);
    let k = O,
        A, j;
    e[17] === k ? (A = e[18], j = e[19]) : (j = () => {
        let e = new Set(k.map(jt));
        v(t => {
            let n = new Set(Array.from(t).filter(t => e.has(t)));
            return n.size === t.size ? t : n
        })
    }, A = [k], e[17] = k, e[18] = A, e[19] = j), (0, Rt.useEffect)(j, A);
    let M, P;
    e[20] === k ? (M = e[21], P = e[22]) : (M = () => {
        let e = new Set(k.map(At));
        x(t => {
            let n = !1,
                r = {};
            for (let e of k) {
                let i = t[e.id];
                r[e.id] = i?.dirty ? i : yt(e), n ||= r[e.id] !== t[e.id]
            }
            return n ||= Object.keys(t).some(t => !e.has(t)), n ? r : t
        })
    }, P = [k], e[20] = k, e[21] = M, e[22] = P), (0, Rt.useEffect)(M, P);
    let F;
    if (e[23] !== k || e[24] !== b || e[25] !== h) {
        bb0: {
            let e = h.trim().toLowerCase();
            if (e === ``) {
                F = k;
                break bb0
            }
            F = k.filter(t => {
                let n = _t(t),
                    r = b[t.id]?.value ?? (n == null ? `` : String(n));
                return [wt(t), Tt(t), t.requester_account_user_id, t.justification, r].join(` `).toLowerCase().includes(e)
            })
        }
        e[23] = k,
        e[24] = b,
        e[25] = h,
        e[26] = F
    }
    else F = e[26];
    let I = F,
        L;
    e[27] === I ? L = e[28] : (L = I.map(kt), e[27] = I, e[28] = L);
    let R = L,
        z;
    e[29] !== _ || e[30] !== R ? (z = R.length > 0 && R.every(e => _.has(e)), e[29] = _, e[30] = R, e[31] = z) : z = e[31];
    let B = z,
        V;
    if (e[32] !== _ || e[33] !== R) {
        let t;
        e[35] === _ ? t = e[36] : (t = e => _.has(e), e[35] = _, e[36] = t), V = R.filter(t), e[32] = _, e[33] = R, e[34] = V
    } else V = e[34];
    let H = V.length,
        U;
    e[37] === d ? U = e[38] : (U = async e => {
        let {
            requests: t,
            status: n
        } = e;
        if (!d) throw Error(`Workspace id is required`);
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
                return await c.safePatch(`/accounts/{account_id}/admin/workspace_admin_requests/{request_id}`, {
                    parameters: {
                        path: {
                            account_id: d,
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
    }, e[37] = d, e[38] = U);
    let W;
    e[39] !== t || e[40] !== a || e[41] !== d ? (W = async (e, n) => {
        let r = new Set(e.succeededRequestIds);
        v(e => {
            let t = new Set(e);
            for (let e of r) t.delete(e);
            return t
        }), a.setQueryData(pt(d), e => e == null ? e : {
            ...e,
            items: e.items.filter(e => !r.has(e.id))
        }), await a.invalidateQueries({
            queryKey: pt(d)
        }), await a.invalidateQueries({
            queryKey: mt(d)
        }), n.status === `approved` && d != null && await Promise.all([Qe({
            queryClient: a,
            workspaceId: d
        }), at({
            queryClient: a,
            workspaceId: d
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
    }, e[39] = t, e[40] = a, e[41] = d, e[42] = W) : W = e[42];
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
    let oe = re(G);
    if (d == null) {
        let t;
        return e[49] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, J.jsx)(`div`, {
            className: `flex min-h-[40vh] items-center justify-center`,
            children: (0, J.jsx)(r, {})
        }), e[49] = t) : t = e[49], t
    }
    let K;
    e[50] === Symbol.for(`react.memo_cache_sentinel`) ? (K = e => g(e.target.value), e[50] = K) : K = e[50];
    let se;
    e[51] === t ? se = e[52] : (se = t.formatMessage(Y.searchPlaceholder), e[51] = t, e[52] = se);
    let ce;
    e[53] !== h || e[54] !== se ? (ce = (0, J.jsx)(`div`, {
        className: `mb-4.5 flex items-center justify-between`,
        children: (0, J.jsx)(be, {
            id: `workspace-admin-requests-search`,
            className: `w-full`,
            inputClassName: `w-full rounded-full! text-sm`,
            value: h,
            onChange: K,
            placeholder: se
        })
    }), e[53] = h, e[54] = se, e[55] = ce) : ce = e[55];
    let le;
    e[56] !== B || e[57] !== I || e[58] !== p || e[59] !== b || e[60] !== oe || e[61] !== _ || e[62] !== H || e[63] !== R || e[64] !== E.isError || e[65] !== E.isLoading ? (le = E.isLoading ? (0, J.jsx)(`div`, {
        className: `flex min-h-[40vh] items-center justify-center`,
        children: (0, J.jsx)(r, {})
    }) : E.isError ? (0, J.jsx)(`div`, {
        className: `border-token-border-heavy bg-token-bg-tertiary text-token-text-primary rounded-md border px-4 py-3`,
        children: (0, J.jsx)(N, {
            ...Y.loadError
        })
    }) : (0, J.jsx)(Ft, {
        requests: I,
        selectedRequestIds: _,
        requestedLimitDrafts: b,
        allVisibleRequestsSelected: B,
        selectedVisibleRequestCount: H,
        hasAdminPrivileges: p,
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
                for (let t of R) e ? n.add(t) : n.delete(t);
                return n
            })
        },
        onRequestedLimitChange: (e, t) => {
            x(n => ({
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
                    requestedLimit: bt((b[e.id] ?? yt(e)).value)
                })),
                status: t
            })
        }
    }), e[56] = B, e[57] = I, e[58] = p, e[59] = b, e[60] = oe, e[61] = _, e[62] = H, e[63] = R, e[64] = E.isError, e[65] = E.isLoading, e[66] = le) : le = e[66];
    let ue;
    return e[67] !== ce || e[68] !== le ? (ue = (0, J.jsxs)(`div`, {
        className: `max-w-[72rem]`,
        children: [ce, le]
    }), e[67] = ce, e[68] = le, e[69] = ue) : ue = e[69], ue
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
        p = ie(),
        m, h;
    if (t[0] !== i || t[1] !== n || t[2] !== r) {
        let e;
        t[5] === r ? e = t[6] : (e = e => r.has(e.id), t[5] = r, t[6] = e), m = n.filter(e);
        let a;
        t[7] === i ? a = t[8] : (a = e => bt(i[e.id]?.value ?? vt(e)) != null, t[7] = i, t[8] = a), h = m.every(a), t[0] = i, t[1] = n, t[2] = r, t[3] = m, t[4] = h
    } else m = t[3], h = t[4];
    let _ = h,
        v;
    t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (v = (0, J.jsxs)(`colgroup`, {
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
    }), t[9] = v) : v = t[9];
    let y = o > 0 && !a,
        b = n.length === 0,
        ee;
    t[10] === u ? ee = t[11] : (ee = e => u(e.target.checked), t[10] = u, t[11] = ee);
    let x;
    t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (x = (0, J.jsx)(`span`, {
        className: `sr-only`,
        children: (0, J.jsx)(N, {
            ...Y.selectAllRequests
        })
    }), t[12] = x) : x = t[12];
    let S;
    t[13] !== a || t[14] !== y || t[15] !== b || t[16] !== ee ? (S = (0, J.jsx)(q.HeaderCell, {
        className: `ps-2`,
        children: (0, J.jsx)(me, {
            id: `workspace-admin-requests-select-all`,
            checked: a,
            indeterminate: y,
            disabled: b,
            onChange: ee,
            label: x
        })
    }), t[13] = a, t[14] = y, t[15] = b, t[16] = ee, t[17] = S) : S = t[17];
    let C;
    t[18] === Symbol.for(`react.memo_cache_sentinel`) ? (C = (0, J.jsx)(q.HeaderCell, {
        children: (0, J.jsx)(N, {
            ...Y.nameColumn
        })
    }), t[18] = C) : C = t[18];
    let w;
    t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (w = (0, J.jsx)(q.HeaderCell, {
        children: (0, J.jsx)(N, {
            ...Y.currentLimitColumn
        })
    }), t[19] = w) : w = t[19];
    let T;
    t[20] === Symbol.for(`react.memo_cache_sentinel`) ? (T = (0, J.jsx)(q.HeaderCell, {
        children: (0, J.jsx)(N, {
            ...Y.recommendedColumn
        })
    }), t[20] = T) : T = t[20];
    let E;
    t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (E = (0, J.jsx)(q.HeaderCell, {
        children: (0, J.jsx)(N, {
            ...Y.justificationColumn
        })
    }), t[21] = E) : E = t[21];
    let D;
    t[22] === o ? D = t[23] : (D = o > 0 ? (0, J.jsx)(N, {
        ...Y.selectedCount,
        values: {
            count: o
        }
    }) : null, t[22] = o, t[23] = D);
    let O;
    t[24] === p ? O = t[25] : (O = p.formatMessage(Y.bulkActionsLabel), t[24] = p, t[25] = O);
    let k = c || m.length === 0,
        A;
    t[26] === Symbol.for(`react.memo_cache_sentinel`) ? (A = (0, J.jsx)(De, {
        "aria-hidden": `true`,
        className: `icon-sm`
    }), t[26] = A) : A = t[26];
    let j;
    t[27] !== O || t[28] !== k ? (j = (0, J.jsx)(`button`, {
        type: `button`,
        "aria-label": O,
        className: `interactive-button-secondary inline-flex size-8 items-center justify-center rounded-md p-0`,
        disabled: k,
        children: A
    }), t[27] = O, t[28] = k, t[29] = j) : j = t[29];
    let M = c || !s || !_,
        te;
    t[30] !== f || t[31] !== m ? (te = () => f(m, `approved`), t[30] = f, t[31] = m, t[32] = te) : te = t[32];
    let P;
    t[33] === Symbol.for(`react.memo_cache_sentinel`) ? (P = (0, J.jsx)(N, {
        ...Y.approveSelectedButton
    }), t[33] = P) : P = t[33];
    let ne;
    t[34] !== M || t[35] !== te ? (ne = (0, J.jsx)(K.Item, {
        disabled: M,
        onClick: te,
        children: P
    }), t[34] = M, t[35] = te, t[36] = ne) : ne = t[36];
    let F;
    t[37] !== f || t[38] !== m ? (F = () => f(m, `denied`), t[37] = f, t[38] = m, t[39] = F) : F = t[39];
    let I;
    t[40] === Symbol.for(`react.memo_cache_sentinel`) ? (I = (0, J.jsx)(N, {
        ...Y.denySelectedButton
    }), t[40] = I) : I = t[40];
    let L;
    t[41] !== c || t[42] !== F ? (L = (0, J.jsx)(K.Item, {
        color: `danger`,
        disabled: c,
        onClick: F,
        children: I
    }), t[41] = c, t[42] = F, t[43] = L) : L = t[43];
    let R;
    t[44] !== j || t[45] !== ne || t[46] !== L ? (R = (0, J.jsxs)(oe, {
        side: `bottom`,
        sideOffset: 4,
        contentAlign: `end`,
        triggerButton: j,
        children: [ne, L]
    }), t[44] = j, t[45] = ne, t[46] = L, t[47] = R) : R = t[47];
    let z;
    t[48] !== D || t[49] !== R ? (z = (0, J.jsx)(q.HeaderCell, {
        textAlign: `right`,
        children: (0, J.jsxs)(`div`, {
            className: `text-token-text-primary flex items-center justify-end gap-2`,
            children: [D, R]
        })
    }), t[48] = D, t[49] = R, t[50] = z) : z = t[50];
    let re;
    t[51] !== z || t[52] !== S ? (re = (0, J.jsxs)(q.Header, {
        children: [S, C, w, T, E, z]
    }), t[51] = z, t[52] = S, t[53] = re) : re = t[53];
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
                    children: (0, J.jsx)(me, {
                        id: `workspace-admin-request-${e.id}`,
                        checked: r.has(e.id),
                        onChange: t => l(e.id, t.target.checked),
                        label: (0, J.jsx)(`span`, {
                            className: `sr-only`,
                            children: (0, J.jsx)(N, {
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
                        children: (0, J.jsx)(N, {
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
                            children: (0, J.jsx)(N, {
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
                children: (0, J.jsx)(N, {
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
    return t[78] !== re || t[79] !== H ? (U = (0, J.jsxs)(q.Root, {
        fixed: !0,
        size: `normal`,
        children: [v, re, H]
    }), t[78] = re, t[79] = H, t[80] = U) : U = t[80], U
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
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, J.jsx)(N, {
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
    Lt = H(), Le(), He(), $e(), ce(), ot(), _e(), se(), Ae(), y(), Se(), xe(), S(), s(), b(), D(), l(), V(), Rt = t(L()), I(), J = k(), zt = 100, Bt = 2147483647, Y = j({
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
        i = ie(),
        a = te(),
        [o, s] = (0, Yt.useState)(!1),
        l = x(n),
        d = l.data ?? v,
        f;
    t[0] === n ? f = t[1] : (f = e => {
        if (n == null) throw Error(`Workspace id is required`);
        return c.safePost(`/accounts/{account_id}/settings/usage_limit_increase_request`, {
            parameters: {
                path: {
                    account_id: n
                }
            },
            requestBody: {
                usage_limit_increase_request: e
            }
        })
    }, t[0] = n, t[1] = f);
    let p;
    t[2] !== a || t[3] !== n ? (p = async e => {
        a.setQueryData([`workspace-settings`, n], e), await a.invalidateQueries({
            queryKey: [`workspace-settings`, n]
        })
    }, t[2] = a, t[3] = n, t[4] = p) : p = t[4];
    let m;
    t[5] !== f || t[6] !== p ? (m = {
        mutationFn: f,
        onSuccess: p
    }, t[5] = f, t[6] = p, t[7] = m) : m = t[7];
    let h = re(m),
        g;
    t[8] !== i || t[9] !== h ? (g = async e => {
        try {
            await h.mutateAsync(e), u().success(i.formatMessage(Z.saveSuccess), {
                hasCloseButton: !0
            }), s(!1)
        } catch {
            u().warning(i.formatMessage(Z.saveError), {
                hasCloseButton: !0
            })
        }
    }, t[8] = i, t[9] = h, t[10] = g) : g = t[10];
    let _ = g,
        y;
    t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (y = (0, X.jsx)(`div`, {
        className: `text-token-text-primary text-base leading-[26px] font-semibold tracking-[-0.32px]`,
        children: (0, X.jsx)(N, {
            ...Z.settingLabel
        })
    }), t[11] = y) : y = t[11];
    let b;
    t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (b = (0, X.jsxs)(`div`, {
        className: `min-w-0 pe-6`,
        children: [y, (0, X.jsx)(`div`, {
            className: `text-token-text-tertiary text-sm leading-[18px] tracking-[-0.15px]`,
            children: (0, X.jsx)(N, {
                ...Z.settingDescription
            })
        })]
    }), t[12] = b) : b = t[12];
    let ee;
    t[13] !== r || t[14] !== d || t[15] !== i || t[16] !== l.isError || t[17] !== l.isLoading ? (ee = (0, X.jsxs)(`div`, {
        className: `border-token-border-default flex w-full items-start justify-between border-b py-4`,
        children: [b, l.isLoading ? (0, X.jsx)(`div`, {
            className: `text-token-text-tertiary text-sm`,
            children: (0, X.jsx)(N, {
                ...Z.loading
            })
        }) : (0, X.jsxs)(`div`, {
            className: `flex shrink-0 flex-col items-end gap-0.5`,
            children: [(0, X.jsx)(`div`, {
                className: `text-token-text-primary text-base`,
                children: (0, X.jsx)(N, {
                    ...Kt(d.kind)
                })
            }), (0, X.jsx)(`button`, {
                type: `button`,
                "aria-label": i.formatMessage(Z.editRequestPolicy),
                className: `disabled:text-token-text-tertiary text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline focus-visible:underline focus-visible:outline-none disabled:cursor-not-allowed disabled:no-underline dark:text-blue-400 dark:hover:text-blue-300`,
                disabled: !r || l.isError,
                onClick: () => s(!0),
                children: (0, X.jsx)(N, {
                    ...Z.edit
                })
            })]
        })]
    }), t[13] = r, t[14] = d, t[15] = i, t[16] = l.isError, t[17] = l.isLoading, t[18] = ee) : ee = t[18];
    let S;
    t[19] !== d || t[20] !== _ || t[21] !== o || t[22] !== h ? (S = o ? (0, X.jsx)(Ut, {
        config: d,
        isSaving: h.isPending,
        onClose: () => s(!1),
        onSave: _
    }) : null, t[19] = d, t[20] = _, t[21] = o, t[22] = h, t[23] = S) : S = t[23];
    let C;
    return t[24] !== ee || t[25] !== S ? (C = (0, X.jsxs)(X.Fragment, {
        children: [ee, S]
    }), t[24] = ee, t[25] = S, t[26] = C) : C = t[26], C
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
        o = ie(),
        [s, c] = (0, Yt.useState)(n.kind),
        [l, u] = (0, Yt.useState)(n.kind === `custom` ? n.instructions ?? `` : ``),
        [d, p] = (0, Yt.useState)(n.kind === `custom` ? n.request_url ?? `` : ``),
        m;
    t[0] === l ? m = t[1] : (m = l.trim(), t[0] = l, t[1] = m);
    let h = m,
        g, _;
    t[2] === d ? (g = t[3], _ = t[4]) : (_ = d.trim(), g = Gt(_), t[2] = d, t[3] = g, t[4] = _);
    let v = g,
        y = !r && (s !== `custom` || v),
        b;
    t[5] !== y || t[6] !== s || t[7] !== a || t[8] !== h || t[9] !== _ ? (b = async () => {
        if (y) {
            if (s === `custom`) {
                await a({
                    kind: s,
                    instructions: h.length === 0 ? null : h,
                    request_url: _.length === 0 ? null : _
                });
                return
            }
            await a({
                kind: s
            })
        }
    }, t[5] = y, t[6] = s, t[7] = a, t[8] = h, t[9] = _, t[10] = b) : b = t[10];
    let ee = b,
        x;
    t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (x = (0, X.jsx)(N, {
        ...Z.modalTitle
    }), t[11] = x) : x = t[11];
    let S = !y,
        C;
    t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (C = (0, X.jsx)(N, {
        ...Z.save
    }), t[12] = C) : C = t[12];
    let T;
    t[13] !== ee || t[14] !== r || t[15] !== S ? (T = (0, X.jsx)(w, {
        color: `primary`,
        loading: r,
        disabled: S,
        onClick: ee,
        children: C
    }), t[13] = ee, t[14] = r, t[15] = S, t[16] = T) : T = t[16];
    let E;
    t[17] === Symbol.for(`react.memo_cache_sentinel`) ? (E = (0, X.jsx)(N, {
        ...Z.cancel
    }), t[17] = E) : E = t[17];
    let D;
    t[18] !== r || t[19] !== i ? (D = (0, X.jsx)(w, {
        color: `secondary`,
        disabled: r,
        onClick: i,
        children: E
    }), t[18] = r, t[19] = i, t[20] = D) : D = t[20];
    let O;
    t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (O = e => {
        c(e)
    }, t[21] = O) : O = t[21];
    let k;
    t[22] === o ? k = t[23] : (k = o.formatMessage(Z.requestExperienceLabel), t[22] = o, t[23] = k);
    let A, j;
    t[24] === Symbol.for(`react.memo_cache_sentinel`) ? (A = (0, X.jsx)(Re.Value, {}), j = (0, X.jsx)(Re.Icon, {}), t[24] = A, t[25] = j) : (A = t[24], j = t[25]);
    let M;
    t[26] === k ? M = t[27] : (M = (0, X.jsxs)(Re.Trigger, {
        "aria-label": k,
        className: `border-token-border-default w-full justify-between border`,
        children: [A, j]
    }), t[26] = k, t[27] = M);
    let te;
    t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (te = (0, X.jsx)(Re.Portal, {
        children: (0, X.jsx)(Re.Content, {
            className: `w-[var(--radix-select-trigger-width)]`,
            children: [`openai_native`, `custom`, `disabled`].map(Wt)
        })
    }), t[28] = te) : te = t[28];
    let P;
    t[29] !== s || t[30] !== M ? (P = (0, X.jsxs)(Re.Root, {
        value: s,
        onValueChange: O,
        children: [M, te]
    }), t[29] = s, t[30] = M, t[31] = P) : P = t[31];
    let ne;
    t[32] === s ? ne = t[33] : (ne = qt(s), t[32] = s, t[33] = ne);
    let F;
    t[34] === ne ? F = t[35] : (F = (0, X.jsx)(`div`, {
        className: `text-token-text-tertiary text-sm leading-5`,
        children: (0, X.jsx)(N, {
            ...ne
        })
    }), t[34] = ne, t[35] = F);
    let I;
    t[36] !== v || t[37] !== l || t[38] !== o || t[39] !== s || t[40] !== d || t[41] !== _ ? (I = s === `custom` ? (0, X.jsxs)(X.Fragment, {
        children: [(0, X.jsxs)(`div`, {
            className: `flex flex-col gap-1.5`,
            children: [(0, X.jsx)(`label`, {
                htmlFor: `usage-limit-request-description`,
                className: `text-token-text-primary text-sm font-medium`,
                children: (0, X.jsx)(N, {
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
                children: (0, X.jsx)(N, {
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
                "aria-invalid": _.length > 0 && !v,
                onChange: e => p(e.target.value)
            }), _.length > 0 && !v ? (0, X.jsx)(`span`, {
                className: `text-token-interactive-label-warning-secondary text-sm font-normal`,
                children: (0, X.jsx)(N, {
                    ...Z.invalidHttps
                })
            }) : null]
        })]
    }) : null, t[36] = v, t[37] = l, t[38] = o, t[39] = s, t[40] = d, t[41] = _, t[42] = I) : I = t[42];
    let L;
    t[43] !== P || t[44] !== F || t[45] !== I ? (L = (0, X.jsxs)(`div`, {
        className: `flex flex-col gap-4`,
        children: [P, F, I]
    }), t[43] = P, t[44] = F, t[45] = I, t[46] = L) : L = t[46];
    let R;
    return t[47] !== i || t[48] !== L || t[49] !== T || t[50] !== D ? (R = (0, X.jsx)(f, {
        isOpen: !0,
        showCloseButton: !0,
        testId: `modal-usage-limit-increase-request`,
        title: x,
        onClose: i,
        primaryButton: T,
        secondaryButton: D,
        children: L
    }), t[47] = i, t[48] = L, t[49] = T, t[50] = D, t[51] = R) : R = t[51], R
}

function Wt(e) {
    return (0, X.jsx)(Re.Item, {
        value: e,
        children: (0, X.jsx)(N, {
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
    Jt = H(), o(), E(), ze(), n(), D(), l(), V(), Yt = t(L()), I(), X = k(), Z = j({
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
    let r = new URL(W(`/usage-limits`, n, {
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
        t = Me(),
        n = m(),
        r = n?.isEnterprisey() === !0 && p(`3778045255`);
    if (!t.isLoaded) {
        let t;
        return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Q.jsx)(C, {
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
        r = ie(),
        i = O(),
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
        children: (0, Q.jsx)(N, {
            ...$.usageLimitsMovedToAdminConsoleTitle
        })
    }), t[4] = s) : s = t[4];
    let c;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, Q.jsxs)(`div`, {
        className: `flex flex-col gap-1 pb-1 text-[16px] leading-[26px] tracking-[-0.32px]`,
        children: [s, (0, Q.jsx)(`p`, {
            className: `text-token-text-secondary font-normal`,
            children: (0, Q.jsx)(N, {
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
    t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, Q.jsx)(N, {
        ...$.usageLimitsMovedToAdminConsoleAction
    }), t[10] = u) : u = t[10];
    let d;
    t[11] === l ? d = t[12] : (d = (0, Q.jsx)(Pe, {
        className: `flex min-h-[80vh] items-center justify-center`,
        children: (0, Q.jsxs)(`div`, {
            className: `flex flex-col items-center justify-center gap-4 text-center`,
            children: [c, (0, Q.jsx)(w, {
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
        t = ie(),
        n = M(),
        r = P(),
        i = m(),
        o = ee(nn),
        {
            role: s
        } = Ne(),
        l = i?.id,
        u;
    e[0] !== s || e[1] !== o ? (u = s == null ? o != null && ye(o.role) : ye(s), e[0] = s, e[1] = o, e[2] = u) : u = e[2];
    let d = u,
        f;
    e[3] === n.tab ? f = e[4] : (f = dt(n.tab), e[3] = n.tab, e[4] = f);
    let h = f,
        g;
    e[5] === i ? g = e[6] : (g = i == null ? null : i.isEnterprisey() || i.isEdu(), e[5] = i, e[6] = g);
    let _ = g,
        v = x(l),
        y;
    e[7] !== i || e[8] !== d || e[9] !== v ? (y = d && i != null && v.data != null && ge(i) && p(jn), e[7] = i, e[8] = d, e[9] = v, e[10] = y) : y = e[10];
    let b = y,
        S;
    e[11] !== h || e[12] !== l ? (S = h === `pending-requests` ? pt(l) : mt(l), e[11] = h, e[12] = l, e[13] = S) : S = e[13];
    let C;
    e[14] !== h || e[15] !== l ? (C = async () => {
        if (l == null) throw Error(`Workspace id is required`);
        return await ht(l, h === `pending-requests` ? void 0 : {
            fetchAllPages: !1,
            pageSize: An
        })
    }, e[14] = h, e[15] = l, e[16] = C) : C = e[16];
    let w = l != null && b,
        E;
    e[17] !== S || e[18] !== C || e[19] !== w ? (E = {
        queryKey: S,
        queryFn: C,
        enabled: w,
        staleTime: 0,
        refetchOnMount: `always`,
        refetchOnWindowFocus: `always`
    }, e[17] = S, e[18] = C, e[19] = w, e[20] = E) : E = e[20];
    let D = ne(E),
        O;
    e[21] === D.data?.items ? O = e[22] : (O = D.data?.items.some(tn) ?? !1, e[21] = D.data?.items, e[22] = O);
    let k = O,
        A = i == null || v.isLoading ? null : b ? v.data?.kind === `openai_native` || h === `pending-requests` && D.fetchStatus !== `idle` ? !0 : D.isPending ? null : D.isError || k || !!D.data?.cursor : !1,
        j = _ === !1 && h === `groups` || A !== !0 && h === `pending-requests` ? `workspace` : h,
        te;
    e[23] !== i || e[24] !== d || e[25] !== h ? (te = h !== `pending-requests` && d && i != null && (i.isEnterprisey() || i.isEdu()) && p(Mn), e[23] = i, e[24] = d, e[25] = h, e[26] = te) : te = e[26];
    let F = te,
        I = h !== `pending-requests` && d && i != null,
        L;
    e[27] !== _ || e[28] !== A ? (L = e => !(_ === !1 && e === `groups` || A !== !0 && e === `pending-requests`), e[27] = _, e[28] = A, e[29] = L) : L = e[29];
    let R = ft.filter(L),
        z, re;
    e[30] === l ? (z = e[31], re = e[32]) : (z = [`spend-controls-explainability`, l], re = async () => {
        if (l == null) throw Error(`Workspace id is required`);
        return await c.safeGet(`/accounts/{account_id}/spend-controls/explainability`, {
            parameters: {
                path: {
                    account_id: l
                }
            }
        })
    }, e[30] = l, e[31] = z, e[32] = re);
    let B = l != null && F,
        V;
    e[33] !== z || e[34] !== re || e[35] !== B ? (V = {
        queryKey: z,
        queryFn: re,
        enabled: B
    }, e[33] = z, e[34] = re, e[35] = B, e[36] = V) : V = e[36];
    let H = ne(V),
        U = F ? H.data : void 0,
        W;
    if (e[37] !== I) {
        let t = I ? T(Pn) : null;
        W = t == null ? void 0 : {
            thresholdCreditsPerMember: t.get(`low_limit_warning_threshold_credits_per_member`, Fn),
            averageMonthlyCreditsPerMember: t.get(`low_limit_warning_average_monthly_credits_per_member`, In),
            powerUserMonthlyCreditsPerMember: t.get(`low_limit_warning_power_user_monthly_credits_per_member`, Ln)
        }, e[37] = I, e[38] = W
    } else W = e[38];
    let G = W,
        oe, K;
    e[39] !== r || e[40] !== D.isFetching || e[41] !== h || e[42] !== _ || e[43] !== A ? (oe = () => {
        (_ === !1 && h === `groups` || A === !1 && !D.isFetching && h === `pending-requests`) && r(ut(`workspace`), {
            replace: !0
        })
    }, K = [r, D.isFetching, h, _, A], e[39] = r, e[40] = D.isFetching, e[41] = h, e[42] = _, e[43] = A, e[44] = oe, e[45] = K) : (oe = e[44], K = e[45]), (0, En.useEffect)(oe, K);
    let se;
    e[46] === t ? se = e[47] : (se = t.formatMessage($.browserTitle), e[46] = t, e[47] = se);
    let ce;
    e[48] === se ? ce = e[49] : (ce = (0, Q.jsx)(Ge, {
        children: (0, Q.jsx)(`title`, {
            children: se
        })
    }), e[48] = se, e[49] = ce);
    let le = Fe,
        ue;
    e[50] === t ? ue = e[51] : (ue = t.formatMessage($.pageTitle), e[50] = t, e[51] = ue);
    let de = F ? $.pageSubtitleWithEstimatedValues : $.pageSubtitle,
        fe;
    e[52] === de ? fe = e[53] : (fe = (0, Q.jsx)(N, {
        ...de
    }), e[52] = de, e[53] = fe);
    let pe;
    e[54] !== j || e[55] !== k || e[56] !== r ? (pe = e => (0, Q.jsx)(`button`, {
        type: `button`,
        className: a(`min-h-[32px] border-b py-[10px] text-[14px] leading-5 whitespace-nowrap`, j === e ? `text-token-text-primary border-current` : `text-token-text-tertiary hover:text-token-text-secondary cursor-pointer border-transparent`),
        onClick: () => r(ut(e)),
        children: (0, Q.jsxs)(`span`, {
            className: `inline-flex items-center gap-1.5`,
            children: [(0, Q.jsx)(N, {
                ...$[e]
            }), e === `pending-requests` && k ? (0, Q.jsxs)(Q.Fragment, {
                children: [(0, Q.jsx)(ae, {
                    color: `blue`,
                    className: `shrink-0`
                }), (0, Q.jsx)(`span`, {
                    className: `sr-only`,
                    children: (0, Q.jsx)(N, {
                        ...$.pendingRequestsAvailable
                    })
                })]
            }) : null]
        })
    }, e), e[54] = j, e[55] = k, e[56] = r, e[57] = pe) : pe = e[57];
    let me = R.map(pe),
        he;
    e[58] === me ? he = e[59] : (he = (0, Q.jsx)(`div`, {
        className: `flex items-end justify-between gap-4`,
        children: (0, Q.jsx)(`div`, {
            className: `flex items-center gap-4`,
            children: me
        })
    }), e[58] = me, e[59] = he);
    let _e;
    e[60] !== le || e[61] !== ue || e[62] !== fe || e[63] !== he ? (_e = (0, Q.jsx)(le, {
        contentWidth: `medium`,
        title: ue,
        subtitle: fe,
        tabsHeader: he
    }), e[60] = le, e[61] = ue, e[62] = fe, e[63] = he, e[64] = _e) : _e = e[64];
    let ve;
    e[65] !== j || e[66] !== U || e[67] !== G ? (ve = j === `workspace` ? (0, Q.jsx)(rn, {
        explainabilityContext: U,
        lowLimitWarningConfig: G
    }) : null, e[65] = j, e[66] = U, e[67] = G, e[68] = ve) : ve = e[68];
    let be;
    e[69] !== j || e[70] !== U || e[71] !== G ? (be = j === `users` ? (0, Q.jsx)(on, {
        explainabilityContext: U,
        lowLimitWarningConfig: G
    }) : null, e[69] = j, e[70] = U, e[71] = G, e[72] = be) : be = e[72];
    let xe;
    e[73] !== j || e[74] !== U || e[75] !== G ? (xe = j === `groups` ? (0, Q.jsx)(fn, {
        explainabilityContext: U,
        lowLimitWarningConfig: G
    }) : null, e[73] = j, e[74] = U, e[75] = G, e[76] = xe) : xe = e[76];
    let Se;
    e[77] === j ? Se = e[78] : (Se = j === `pending-requests` ? (0, Q.jsx)(Et, {}) : null, e[77] = j, e[78] = Se);
    let Ce;
    e[79] !== ve || e[80] !== be || e[81] !== xe || e[82] !== Se ? (Ce = (0, Q.jsx)(Pe, {
        contentWidth: `medium`,
        showSpinner: !1,
        children: (0, Q.jsxs)(`div`, {
            className: `pt-4 pb-8`,
            children: [ve, be, xe, Se]
        })
    }), e[79] = ve, e[80] = be, e[81] = xe, e[82] = Se, e[83] = Ce) : Ce = e[83];
    let we;
    return e[84] !== ce || e[85] !== _e || e[86] !== Ce ? (we = (0, Q.jsxs)(Q.Fragment, {
        children: [ce, _e, Ce]
    }), e[84] = ce, e[85] = _e, e[86] = Ce, e[87] = we) : we = e[87], we
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
        a = ie(),
        o = te(),
        s = m(),
        l = ee(an),
        {
            role: d
        } = Ne(),
        [f, h] = (0, En.useState)(!1),
        g = s?.id,
        _;
    t[0] !== d || t[1] !== l ? (_ = d == null ? l != null && ye(l.role) : ye(d), t[0] = d, t[1] = l, t[2] = _) : _ = t[2];
    let v = _,
        y, b;
    t[3] === g ? (y = t[4], b = t[5]) : (y = [`workspace-spend-controls`, g], b = async () => {
        if (!g) throw Error(`Workspace id is required`);
        return await c.safeGet(`/accounts/{account_id}/spend-controls/workspace`, {
            parameters: {
                path: {
                    account_id: g
                }
            }
        })
    }, t[3] = g, t[4] = y, t[5] = b);
    let x = !!g,
        S;
    t[6] !== y || t[7] !== b || t[8] !== x ? (S = {
        queryKey: y,
        queryFn: b,
        enabled: x
    }, t[6] = y, t[7] = b, t[8] = x, t[9] = S) : S = t[9];
    let C = ne(S),
        w;
    t[10] === g ? w = t[11] : (w = async e => {
        if (!g) throw Error(`Workspace id is required`);
        return await c.safePost(`/accounts/{account_id}/settings/seat_type_credit_limits`, {
            parameters: {
                path: {
                    account_id: g
                }
            },
            requestBody: wn(e)
        })
    }, t[10] = g, t[11] = w);
    let T;
    t[12] !== o || t[13] !== g ? (T = async e => {
        if (!g) throw Error(`Workspace id is required`);
        o.setQueryData([`workspace-settings`, g], e), await o.invalidateQueries({
            queryKey: [`workspace-settings`, g]
        }), await o.invalidateQueries({
            queryKey: [`workspace-spend-controls`, g]
        }), await Qe({
            queryClient: o,
            workspaceId: g,
            refetchType: `all`
        })
    }, t[12] = o, t[13] = g, t[14] = T) : T = t[14];
    let E;
    t[15] !== w || t[16] !== T ? (E = {
        mutationFn: w,
        onSuccess: T
    }, t[15] = w, t[16] = T, t[17] = E) : E = t[17];
    let D = re(E),
        O = C.data?.default_user_credit_limits,
        k;
    t[18] === O ? k = t[19] : (k = ue(O), t[18] = O, t[19] = k);
    let A = k,
        j = typeof A == `number` ? A : null,
        M = i != null && (f || j != null && j < i.thresholdCreditsPerMember) && p(Nn) ? i : void 0,
        P;
    t[20] !== a || t[21] !== D ? (P = async e => {
        try {
            await D.mutateAsync(e), u().success(a.formatMessage($.limitSaveSuccess), {
                hasCloseButton: !0
            }), h(!1)
        } catch {
            u().warning(a.formatMessage($.limitSaveError), {
                hasCloseButton: !0
            })
        }
    }, t[20] = a, t[21] = D, t[22] = P) : P = t[22];
    let F = P,
        I;
    t[23] !== f || t[24] !== F ? (I = async e => {
        f && await F(e)
    }, t[23] = f, t[24] = F, t[25] = I) : I = t[25];
    let L = I,
        R;
    t[26] === Symbol.for(`react.memo_cache_sentinel`) ? (R = (0, Q.jsx)(`div`, {
        className: `text-token-text-primary text-base leading-[26px] font-semibold tracking-[-0.32px]`,
        children: (0, Q.jsx)(N, {
            ...$.workspaceDefaultLimitLabel
        })
    }), t[26] = R) : R = t[26];
    let z;
    t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (z = (0, Q.jsxs)(`div`, {
        children: [R, (0, Q.jsx)(`div`, {
            className: `text-token-text-tertiary text-sm leading-5 tracking-[-0.15px]`,
            children: (0, Q.jsx)(N, {
                ...$.workspaceDefaultLimitDescription
            })
        })]
    }), t[27] = z) : z = t[27];
    let B;
    t[28] !== A || t[29] !== n || t[30] !== v || t[31] !== D || t[32] !== C.isError || t[33] !== C.isFetching || t[34] !== C.isLoading ? (B = (0, Q.jsxs)(`div`, {
        className: `flex w-full items-start justify-between`,
        children: [z, C.isLoading || C.isFetching ? (0, Q.jsx)(r, {
            className: `text-token-text-tertiary mt-1 h-4 w-4`
        }) : (0, Q.jsxs)(`div`, {
            className: `flex flex-col items-end gap-0.5`,
            children: [(0, Q.jsx)(Ye, {
                explainabilityContext: n,
                limit: A
            }), (0, Q.jsx)(vn, {
                disabled: !v,
                testId: `workspace-usage-limits-admin-disabled-tooltip-trigger`,
                children: (0, Q.jsx)(_n, {
                    disabled: !v || C.isError || D.isPending,
                    onClick: () => h(!0),
                    label: A == null ? $.addButton : $.editButton
                })
            })]
        })]
    }), t[28] = A, t[29] = n, t[30] = v, t[31] = D, t[32] = C.isError, t[33] = C.isFetching, t[34] = C.isLoading, t[35] = B) : B = t[35];
    let V;
    t[36] !== M || t[37] !== j || t[38] !== n ? (V = (0, Q.jsx)(Je, {
        className: `mt-4`,
        explainabilityContext: n,
        limit: j,
        lowLimitWarningConfig: M,
        variant: `workspace-default`
    }), t[36] = M, t[37] = j, t[38] = n, t[39] = V) : V = t[39];
    let H;
    t[40] !== B || t[41] !== V ? (H = (0, Q.jsxs)(`div`, {
        className: `border-token-border-default border-b pb-4`,
        children: [B, V]
    }), t[40] = B, t[41] = V, t[42] = H) : H = t[42];
    let U;
    t[43] !== v || t[44] !== g ? (U = (0, Q.jsx)(Ht, {
        workspaceId: g,
        canEdit: v
    }), t[43] = v, t[44] = g, t[45] = U) : U = t[45];
    let W;
    t[46] !== H || t[47] !== U ? (W = (0, Q.jsxs)(`section`, {
        children: [H, U]
    }), t[46] = H, t[47] = U, t[48] = W) : W = t[48];
    let ae;
    t[49] !== M || t[50] !== A || t[51] !== n || t[52] !== L || t[53] !== f ? (ae = f ? (0, Q.jsx)(ct, {
        currentLimit: A,
        placeholder: ``,
        onClose: () => h(!1),
        onSave: L,
        renderLimitContext: e => (0, Q.jsx)(qe, {
            explainabilityContext: n,
            limit: e,
            lowLimitWarningConfig: M
        })
    }) : null, t[49] = M, t[50] = A, t[51] = n, t[52] = L, t[53] = f, t[54] = ae) : ae = t[54];
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
        o = ie(),
        s = te(),
        l = m(),
        f = ee(dn),
        {
            role: h
        } = Ne(),
        [g] = R(),
        _;
    t[0] === g ? _ = t[1] : (_ = g.get(`query`) ?? ``, t[0] = g, t[1] = _);
    let v = _,
        [y, b] = (0, En.useState)(0),
        [x, S] = (0, En.useState)(v),
        [C, w] = (0, En.useState)(v),
        T;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (T = {
        field: `name`,
        direction: `ASC`
    }, t[2] = T) : T = t[2];
    let [E, D] = (0, En.useState)(T), [O, k] = (0, En.useState)(null), A = O != null && i != null && p(Nn) ? i : void 0, j = l?.id, M;
    t[3] !== h || t[4] !== f ? (M = h == null ? f != null && ye(f.role) : ye(h), t[3] = h, t[4] = f, t[5] = M) : M = t[5];
    let P = M,
        F;
    t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (F = d(e => {
        b(0), w(e)
    }, 300, {
        leading: !1,
        trailing: !0
    }), t[6] = F) : F = t[6];
    let I = F,
        L, z;
    t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (L = () => () => I.cancel(), z = [I], t[7] = L, t[8] = z) : (L = t[7], z = t[8]), (0, En.useEffect)(L, z);
    let V, H;
    t[9] === v ? (V = t[10], H = t[11]) : (V = () => {
        b(0), S(v), w(v)
    }, H = [v], t[9] = v, t[10] = V, t[11] = H), (0, En.useEffect)(V, H);
    let U = y * kn,
        W;
    t[12] !== C || t[13] !== E.direction || t[14] !== E.field || t[15] !== U || t[16] !== j ? (W = nt(j, U, C, kn, E.field, E.direction), t[12] = C, t[13] = E.direction, t[14] = E.field, t[15] = U, t[16] = j, t[17] = W) : W = t[17];
    let ae;
    t[18] !== C || t[19] !== y || t[20] !== E.direction || t[21] !== E.field || t[22] !== j ? (ae = async () => {
        if (!j) throw Error(`Workspace id is required`);
        return await c.safeGet(`/accounts/{account_id}/spend-controls/users`, {
            parameters: {
                path: {
                    account_id: j
                },
                query: {
                    offset: y * kn,
                    limit: kn,
                    query: C,
                    order_by_field: E.field,
                    order_by_direction: E.direction
                }
            }
        })
    }, t[18] = C, t[19] = y, t[20] = E.direction, t[21] = E.field, t[22] = j, t[23] = ae) : ae = t[23];
    let G = !!j,
        oe;
    t[24] !== W || t[25] !== ae || t[26] !== G ? (oe = {
        queryKey: W,
        queryFn: ae,
        enabled: G,
        placeholderData: B
    }, t[24] = W, t[25] = ae, t[26] = G, t[27] = oe) : oe = t[27];
    let K = ne(oe),
        se = K.data,
        ce;
    t[28] === j ? ce = t[29] : (ce = async e => {
        let {
            userId: t,
            limit: n
        } = e;
        if (!j) throw Error(`Workspace id is required`);
        return await c.safePatch(`/accounts/{account_id}/users/{user_id}`, {
            parameters: {
                path: {
                    account_id: j,
                    user_id: t
                }
            },
            requestBody: {
                credit_limits: he(n)
            }
        })
    }, t[28] = j, t[29] = ce);
    let le;
    t[30] !== s || t[31] !== j ? (le = async e => {
        if (!j) return {
            previousCacheEntries: []
        };
        await it({
            queryClient: s,
            workspaceId: j
        });
        let t = et({
            queryClient: s,
            workspaceId: j
        });
        return rt({
            queryClient: s,
            workspaceId: j,
            userId: e.userId,
            creditLimits: he(e.limit)
        }), {
            previousCacheEntries: t
        }
    }, t[30] = s, t[31] = j, t[32] = le) : le = t[32];
    let de;
    t[33] === s ? de = t[34] : (de = (e, t, n) => {
        n != null && tt({
            queryClient: s,
            snapshot: n.previousCacheEntries
        })
    }, t[33] = s, t[34] = de);
    let fe;
    t[35] !== s || t[36] !== j ? (fe = async (e, t) => {
        j && (await Qe({
            queryClient: s,
            workspaceId: j,
            refetchType: `active`
        }), rt({
            queryClient: s,
            workspaceId: j,
            userId: t.userId,
            creditLimits: he(t.limit),
            updateEffectiveHardCap: t.limit != null
        }), await at({
            queryClient: s,
            workspaceId: j,
            refetchType: `active`
        }))
    }, t[35] = s, t[36] = j, t[37] = fe) : fe = t[37];
    let pe;
    t[38] !== ce || t[39] !== le || t[40] !== de || t[41] !== fe ? (pe = {
        mutationFn: ce,
        onMutate: le,
        onError: de,
        onSuccess: fe
    }, t[38] = ce, t[39] = le, t[40] = de, t[41] = fe, t[42] = pe) : pe = t[42];
    let me = re(pe),
        ge;
    t[43] !== O || t[44] !== o || t[45] !== me ? (ge = async e => {
        if (O != null) try {
            await me.mutateAsync({
                userId: O.id,
                limit: e
            }), u().success(o.formatMessage($.limitSaveSuccess), {
                hasCloseButton: !0
            }), k(null)
        } catch {
            u().warning(o.formatMessage($.limitSaveError), {
                hasCloseButton: !0
            })
        }
    }, t[43] = O, t[44] = o, t[45] = me, t[46] = ge) : ge = t[46];
    let _e = ge,
        xe;
    t[47] !== se?.items || t[48] !== K.isError ? (xe = K.isError ? [] : se?.items ?? [], t[47] = se?.items, t[48] = K.isError, t[49] = xe) : xe = t[49];
    let Se = xe,
        Ce = Math.ceil((se?.total ?? 0) / kn),
        we = j == null || se === void 0 && (K.isPending || K.isFetching),
        Te = K.isPlaceholderData,
        Ee, De;
    t[50] !== Ce || t[51] !== y ? (Ee = () => {
        y >= Ce && Ce !== 0 && b(Math.max(Ce - 1, 0))
    }, De = [Ce, y], t[50] = Ce, t[51] = y, t[52] = Ee, t[53] = De) : (Ee = t[52], De = t[53]), (0, En.useEffect)(Ee, De);
    let Oe;
    t[54] === Symbol.for(`react.memo_cache_sentinel`) ? (Oe = e => {
        S(e.target.value), I(e.target.value)
    }, t[54] = Oe) : Oe = t[54];
    let ke;
    t[55] === o ? ke = t[56] : (ke = o.formatMessage($.searchUsersPlaceholder), t[55] = o, t[56] = ke);
    let Ae;
    t[57] !== x || t[58] !== ke ? (Ae = (0, Q.jsx)(`div`, {
        className: `mb-4.5 flex items-center justify-between`,
        children: (0, Q.jsx)(be, {
            className: `w-full`,
            value: x,
            onChange: Oe,
            placeholder: ke,
            inputClassName: `w-full rounded-full! text-sm`
        })
    }), t[57] = x, t[58] = ke, t[59] = Ae) : Ae = t[59];
    let je;
    t[60] !== n || t[61] !== P || t[62] !== o || t[63] !== we || t[64] !== Te || t[65] !== Se || t[66] !== Ce || t[67] !== y || t[68] !== E.direction || t[69] !== E.field || t[70] !== K.isError ? (je = we ? (0, Q.jsx)(`div`, {
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
                        active: E.field === `name`,
                        direction: E.direction,
                        onSort: () => {
                            b(0), D(un)
                        },
                        children: (0, Q.jsx)(N, {
                            ...$.nameColumn
                        })
                    }), (0, Q.jsx)(yn, {
                        active: E.field === `current_month_usage`,
                        direction: E.direction,
                        onSort: () => {
                            b(0), D(ln)
                        },
                        children: (0, Q.jsx)(N, {
                            ...$.usedThisMonthColumn
                        })
                    }), (0, Q.jsx)(yn, {
                        active: E.field === `effective_hard_cap_limit`,
                        direction: E.direction,
                        onSort: () => {
                            b(0), D(cn)
                        },
                        children: (0, Q.jsx)(N, {
                            ...$.currentLimitColumn
                        })
                    }), (0, Q.jsx)(yn, {
                        active: E.field === `override_hard_cap_limit`,
                        direction: E.direction,
                        onSort: () => {
                            b(0), D(sn)
                        },
                        children: (0, Q.jsx)(N, {
                            ...$.overrideLimitColumn
                        })
                    })]
                }), (0, Q.jsxs)(q.Body, {
                    className: a(Te && `pointer-events-none opacity-50`),
                    children: [K.isError ? (0, Q.jsx)(q.Row, {
                        className: `[&>td]:py-3`,
                        children: (0, Q.jsx)(q.Cell, {
                            colSpan: 4,
                            children: (0, Q.jsx)(`div`, {
                                className: `text-token-text-tertiary`,
                                children: (0, Q.jsx)(N, {
                                    ...$.usersLoadError
                                })
                            })
                        })
                    }) : null, Se.map(e => {
                        let t = e.name || e.email || e.id,
                            r = e.email || o.formatMessage($.noEmail),
                            i = ue(e.override_credit_limits);
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
                                children: (0, Q.jsx)(N, {
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
                                        children: (0, Q.jsx)(N, {
                                            ...$.noOverride
                                        })
                                    }) : (0, Q.jsx)(Ye, {
                                        explainabilityContext: n,
                                        limit: i
                                    }), (0, Q.jsx)(vn, {
                                        disabled: !P,
                                        testId: `${e.id}-usage-limits-admin-disabled-tooltip-trigger`,
                                        children: (0, Q.jsx)(_n, {
                                            disabled: !P || Te,
                                            onClick: () => k(e),
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
                                children: (0, Q.jsx)(N, {
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
                children: (0, Q.jsx)(ve, {
                    currentPage: y,
                    onChangeIndex: b,
                    length: Ce
                })
            }) : null
        })]
    }), t[60] = n, t[61] = P, t[62] = o, t[63] = we, t[64] = Te, t[65] = Se, t[66] = Ce, t[67] = y, t[68] = E.direction, t[69] = E.field, t[70] = K.isError, t[71] = je) : je = t[71];
    let Me;
    t[72] !== Ae || t[73] !== je ? (Me = (0, Q.jsxs)(`section`, {
        children: [Ae, je]
    }), t[72] = Ae, t[73] = je, t[74] = Me) : Me = t[74];
    let Pe;
    t[75] !== A || t[76] !== O || t[77] !== n || t[78] !== _e ? (Pe = O == null ? null : (0, Q.jsx)(ct, {
        allowUnlimited: !0,
        currentLimit: ue(O.override_credit_limits),
        getValidationResult: void 0,
        placeholder: ``,
        onClose: () => k(null),
        onSave: _e,
        renderLimitContext: e => (0, Q.jsx)(qe, {
            explainabilityContext: n,
            limit: e,
            lowLimitWarningConfig: A
        })
    }), t[75] = A, t[76] = O, t[77] = n, t[78] = _e, t[79] = Pe) : Pe = t[79];
    let Fe;
    return t[80] !== Me || t[81] !== Pe ? (Fe = (0, Q.jsxs)(Q.Fragment, {
        children: [Me, Pe]
    }), t[80] = Me, t[81] = Pe, t[82] = Fe) : Fe = t[82], Fe
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
        a = ie(),
        o = te(),
        s = m(),
        l = ee(gn),
        {
            role: d
        } = Ne(),
        [f, h] = (0, En.useState)(``),
        g;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (g = {
        field: `group_name`,
        direction: `ASC`
    }, t[0] = g) : g = t[0];
    let [_, v] = (0, En.useState)(g), [y, b] = (0, En.useState)(null), x = y != null && i != null && p(Nn) ? i : void 0, S = s?.id, C;
    t[1] !== d || t[2] !== l ? (C = d == null ? l != null && ye(l.role) : ye(d), t[1] = d, t[2] = l, t[3] = C) : C = t[3];
    let w = C,
        T, E;
    t[4] === S ? (T = t[5], E = t[6]) : (T = [`group-spend-controls`, S], E = async () => {
        if (!S) throw Error(`Workspace id is required`);
        return await c.safeGet(`/accounts/{account_id}/spend-controls/groups`, {
            parameters: {
                path: {
                    account_id: S
                }
            }
        })
    }, t[4] = S, t[5] = T, t[6] = E);
    let D = !!S,
        O;
    t[7] !== T || t[8] !== E || t[9] !== D ? (O = {
        queryKey: T,
        queryFn: E,
        enabled: D
    }, t[7] = T, t[8] = E, t[9] = D, t[10] = O) : O = t[10];
    let k = ne(O),
        A;
    t[11] === S ? A = t[12] : (A = async e => {
        let {
            groupId: t,
            limit: n
        } = e;
        if (!S) throw Error(`Workspace id is required`);
        return await c.safePatch(`/accounts/{account_id}/groups/{group_id}/spend-controls`, {
            parameters: {
                path: {
                    account_id: S,
                    group_id: t
                }
            },
            requestBody: {
                default_user_credit_limits: he(n)
            }
        })
    }, t[11] = S, t[12] = A);
    let j;
    t[13] !== o || t[14] !== S ? (j = async () => {
        S && (await o.invalidateQueries({
            queryKey: [`group-spend-controls`, S]
        }), await Qe({
            queryClient: o,
            workspaceId: S,
            refetchType: `all`
        }))
    }, t[13] = o, t[14] = S, t[15] = j) : j = t[15];
    let M;
    t[16] !== A || t[17] !== j ? (M = {
        mutationFn: A,
        onSuccess: j
    }, t[16] = A, t[17] = j, t[18] = M) : M = t[18];
    let P = re(M),
        F = k.data,
        I, L;
    if (t[19] !== y || t[20] !== n || t[21] !== f || t[22] !== k.isFetching || t[23] !== k.isPending || t[24] !== F || t[25] !== w || t[26] !== a || t[27] !== _ || t[28] !== P || t[29] !== S) {
        let e = Array.isArray(F) ? F : F?.items ?? [],
            i = S == null || k.isPending || k.isFetching,
            o = f.trim().toLowerCase(),
            s = o === `` ? e : e.filter(e => e.group_name.toLowerCase().includes(o)),
            c;
        t[32] === _ ? c = t[33] : (c = (e, t) => {
            let n;
            if (_.field === `group_name`) n = e.group_name.localeCompare(t.group_name);
            else if (_.field === `num_members`) n = e.num_members - t.num_members;
            else {
                let r = ue(e.default_user_credit_limits),
                    i = ue(t.default_user_credit_limits);
                if (r == null) return i == null ? 0 : 1;
                if (i == null) return -1;
                let a = [r === fe, typeof r == `number` ? r : 0],
                    o = [i === fe, typeof i == `number` ? i : 0];
                n = Number(a[0]) - Number(o[0]) || a[1] - o[1]
            }
            return _.direction === `ASC` ? n : -n
        }, t[32] = _, t[33] = c);
        let l = s.toSorted(c),
            d;
        t[34] !== y || t[35] !== a || t[36] !== P ? (d = async e => {
            if (y != null) try {
                await P.mutateAsync({
                    groupId: y.group_id,
                    limit: e
                }), u().success(a.formatMessage($.limitSaveSuccess), {
                    hasCloseButton: !0
                }), b(null)
            } catch {
                u().warning(a.formatMessage($.limitSaveError), {
                    hasCloseButton: !0
                })
            }
        }, t[34] = y, t[35] = a, t[36] = P, t[37] = d) : d = t[37], I = d;
        let p;
        t[38] === Symbol.for(`react.memo_cache_sentinel`) ? (p = e => h(e.target.value), t[38] = p) : p = t[38];
        let m;
        t[39] === a ? m = t[40] : (m = a.formatMessage($.searchGroupsPlaceholder), t[39] = a, t[40] = m);
        let g;
        t[41] !== f || t[42] !== m ? (g = (0, Q.jsx)(`div`, {
            className: `mb-4.5 flex items-center justify-between`,
            children: (0, Q.jsx)(be, {
                className: `w-full`,
                value: f,
                onChange: p,
                placeholder: m,
                inputClassName: `w-full rounded-full! text-sm`
            })
        }), t[41] = f, t[42] = m, t[43] = g) : g = t[43], L = (0, Q.jsxs)(`section`, {
            children: [g, i ? (0, Q.jsx)(`div`, {
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
                        active: _.field === `group_name`,
                        direction: _.direction,
                        onSort: () => v(hn),
                        children: (0, Q.jsx)(N, {
                            ...$.groupColumn
                        })
                    }), (0, Q.jsx)(yn, {
                        active: _.field === `num_members`,
                        direction: _.direction,
                        onSort: () => v(mn),
                        children: (0, Q.jsx)(N, {
                            ...$.membersColumn
                        })
                    }), (0, Q.jsx)(yn, {
                        active: _.field === `default_limit`,
                        direction: _.direction,
                        onSort: () => v(pn),
                        children: (0, Q.jsx)(N, {
                            ...$.defaultMonthlyLimitColumn
                        })
                    })]
                }), (0, Q.jsxs)(q.Body, {
                    children: [l.map(e => {
                        let t = ue(e.default_user_credit_limits);
                        return (0, Q.jsxs)(q.Row, {
                            className: `[&>td]:py-3`,
                            children: [(0, Q.jsxs)(q.Cell, {
                                divClassName: `min-h-[40px] min-w-0 items-center`,
                                children: [(0, Q.jsx)(`div`, {
                                    className: `bg-token-bg-tertiary text-token-text-secondary me-3 flex size-8 shrink-0 items-center justify-center rounded-full`,
                                    children: (0, Q.jsx)(Oe, {
                                        className: `icon-sm`
                                    })
                                }), (0, Q.jsx)(z, {
                                    className: `min-w-0 truncate hover:underline focus-visible:underline focus-visible:outline-none`,
                                    to: `/admin/groups/${e.group_id}`,
                                    title: e.group_name,
                                    children: e.group_name
                                })]
                            }), (0, Q.jsx)(q.Cell, {
                                children: a.formatNumber(e.num_members)
                            }), (0, Q.jsx)(q.Cell, {
                                children: (0, Q.jsxs)(`div`, {
                                    className: `flex flex-col items-start gap-0.5`,
                                    children: [(0, Q.jsx)(Ye, {
                                        explainabilityContext: n,
                                        limit: t
                                    }), (0, Q.jsx)(_n, {
                                        disabled: !w,
                                        onClick: () => b(e),
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
                                children: (0, Q.jsx)(N, {
                                    ...$.noGroupsFound
                                })
                            })
                        })
                    }) : null]
                })]
            })]
        }), t[19] = y, t[20] = n, t[21] = f, t[22] = k.isFetching, t[23] = k.isPending, t[24] = F, t[25] = w, t[26] = a, t[27] = _, t[28] = P, t[29] = S, t[30] = I, t[31] = L
    } else I = t[30], L = t[31];
    let R;
    t[44] !== x || t[45] !== y || t[46] !== n || t[47] !== I ? (R = y == null ? null : (0, Q.jsx)(ct, {
        allowUnlimited: !0,
        currentLimit: ue(y.default_user_credit_limits),
        getValidationResult: void 0,
        placeholder: ``,
        onClose: () => b(null),
        onSave: I,
        renderLimitContext: e => (0, Q.jsx)(qe, {
            explainabilityContext: n,
            limit: e,
            lowLimitWarningConfig: x
        })
    }), t[44] = x, t[45] = y, t[46] = n, t[47] = I, t[48] = R) : R = t[48];
    let B;
    return t[49] !== L || t[50] !== R ? (B = (0, Q.jsxs)(Q.Fragment, {
        children: [L, R]
    }), t[49] = L, t[50] = R, t[51] = B) : B = t[51], B
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
    t[0] === r ? a = t[1] : (a = (0, Q.jsx)(N, {
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
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, Q.jsx)(N, {
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
    t[4] === n.limit ? c = t[5] : (c = ue([n.limit]), t[4] = n.limit, t[5] = c);
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
                label: (0, Q.jsx)(N, {
                    ...$.userOverrideHardCapTooltipTitle
                }), secondaryLabel: (0, Q.jsxs)(Q.Fragment, {
                    children: [(0, Q.jsx)(N, {
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
                label: (0, Q.jsx)(N, {
                    ...$.groupDefaultHardCapTooltipTitle,
                    values: {
                        groupName: e.group_name
                    }
                }), secondaryLabel: (0, Q.jsx)(N, {
                    ...$.groupDefaultHardCapTooltipDescription
                })
            };
        case `workspace_default`:
            return {
                label: (0, Q.jsx)(N, {
                    ...$.workspaceDefaultHardCapTooltipTitle
                }), secondaryLabel: (0, Q.jsx)(N, {
                    ...$.workspaceDefaultHardCapTooltipDescription,
                    values: {
                        seatType: e.seat_type === Dn ? (0, Q.jsx)(N, {
                            ...$.chatgptSeatLabel
                        }) : (0, Q.jsx)(N, {
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
    t[0] === n.limit ? r = t[1] : (r = ue([n.limit]), t[0] = n.limit, t[1] = r);
    let i = r;
    switch (n.source.kind) {
        case `group_default`: {
            let e;
            return t[2] !== n.limit || t[3] !== n.source.group_name || t[4] !== i ? (e = i === `unlimited_platform_max` ? (0, Q.jsx)(N, {
                ...$.groupUnlimitedOutsideOverride,
                values: {
                    groupName: n.source.group_name
                }
            }) : (0, Q.jsx)(N, {
                ...$.groupLimitOutsideOverride,
                values: {
                    groupName: n.source.group_name,
                    limit: n.limit.limit
                }
            }), t[2] = n.limit, t[3] = n.source.group_name, t[4] = i, t[5] = e) : e = t[5], e
        }
        case `workspace_default`: {
            let e;
            return t[6] !== n.limit || t[7] !== n.source.seat_type || t[8] !== i ? (e = i === `unlimited_platform_max` ? (0, Q.jsx)(N, {
                ...$.workspaceUnlimitedOutsideOverride,
                values: {
                    seatType: n.source.seat_type === Dn ? (0, Q.jsx)(N, {
                        ...$.chatgptSeatLabel
                    }) : (0, Q.jsx)(N, {
                        ...$.codexSeatLabel
                    })
                }
            }) : (0, Q.jsx)(N, {
                ...$.workspaceLimitOutsideOverride,
                values: {
                    limit: n.limit.limit,
                    seatType: n.source.seat_type === Dn ? (0, Q.jsx)(N, {
                        ...$.chatgptSeatLabel
                    }) : (0, Q.jsx)(N, {
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
        Tn = H(), Le(), je(), U(), Vt(), o(), He(), ce(), ot(), Ae(), y(), G(), Ee(), ke(), Te(), pe(), xe(), S(), Be(), s(), b(), n(), D(), l(), h(), We(), V(), _(), i(), En = t(L()), I(), F(), st(), Ke(), de(), le(), Xt(), $e(), lt(), Ie(), Q = k(), Dn = `default`, On = `usage_based`, kn = 25, An = 50, jn = `3909937021`, Mn = `3002192639`, Nn = `3581456201`, Pn = `3421588596`, Fn = 400, In = 1250, Ln = 5e3, $ = j({
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
        F(), zn = H(), Rn(), Ze(), Bn = k(), Vn = A(function() {
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
//# sourceMappingURL=90a39c8d-c54ekih51j27whrs.js.map
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    Aw as r,
    CR as i,
    C_ as a,
    ER as o,
    IU as s,
    J7 as c,
    LU as l,
    Lz as u,
    Ow as d,
    Q7 as f,
    QG as p,
    Qy as m,
    Rz as h,
    YG as g,
    ZG as _,
    Zy as v,
    c7 as y,
    eE as b,
    l7 as x,
    o0 as S,
    prt as C,
    q1 as w,
    srt as ee,
    urt as T,
    w_ as E,
    zz as D
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    At as O,
    Bn as k,
    Ht as A,
    Ln as j,
    Lt as M,
    N,
    Nn as P,
    Nt as F,
    O as te,
    Q as I,
    Rn as L,
    Vn as R,
    Vt as z,
    it as B,
    p as ne,
    q as V,
    s as H,
    wn as U,
    zn as re
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    BCn as W,
    BH as ie,
    HH as G,
    I8t as K,
    ICn as ae,
    IH as oe,
    LH as se,
    M8t as ce,
    Mjt as le,
    Njt as ue,
    OKn as de,
    RH as fe,
    VH as pe,
    _dn as me,
    eUn as he,
    kKn as ge,
    nUn as _e,
    nw as ve,
    rw as ye,
    tUn as be,
    vdn as xe
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    Ax as Se,
    Kl as Ce,
    Ol as we,
    hm as Te,
    kl as Ee,
    kx as De,
    mm as Oe,
    ql as ke
} from "./30901919-ikyi1r55w2i02fom.js";
import {
    Av as Ae,
    Jb as je,
    Xb as Me,
    as as Ne,
    cs as Pe,
    dl as Fe,
    es as Ie,
    kv as q,
    ns as Le,
    os as Re,
    ul as ze
} from "./c2675c8c-d62p1sdq1sy52umm.js";
import {
    h_ as Be,
    m_ as Ve
} from "./8b34dbc2-m4883pai3e8fx8q6.js";
import {
    n as He,
    t as Ue
} from "./e18c46cf-lxxjjq3hsrb49f95.js";
import {
    n as We,
    t as Ge
} from "./18a8b3b4-jdpl8oft2l72gxch.js";
import {
    n as Ke,
    t as qe
} from "./9f2e6d33-h33rm8r24h08gyr1.js";
import {
    i as Je,
    n as Ye,
    r as Xe,
    t as Ze
} from "./e6141aca-lnhcodnpwbrpry3j.js";
import {
    r as Qe,
    t as $e
} from "./8c6976e5-cynt7o7akchhsm1f.js";
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
} from "./af584902-gfdytqfm3igml4iu.js";
import {
    r as lt,
    t as ut
} from "./ef852af5-fpltugm4gyigb53q.js";
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
        t = re(),
        n;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (n = s(), e[0] = n) : n = e[0];
    let r = n,
        i = N(),
        a = S(),
        l = o(It),
        {
            role: u
        } = Fe(),
        d = a?.id,
        f;
    e[1] !== u || e[2] !== l ? (f = u == null ? l != null && ae(l.role) : ae(u), e[1] = u, e[2] = l, e[3] = f) : f = e[3];
    let p = f,
        [m, g] = (0, Bt.useState)(``),
        [_, v] = (0, Bt.useState)(Ft),
        y;
    e[4] === Symbol.for(`react.memo_cache_sentinel`) ? (y = {}, e[4] = y) : y = e[4];
    let [b, x] = (0, Bt.useState)(y), C;
    e[5] === d ? C = e[6] : (C = ht(d), e[5] = d, e[6] = C);
    let w;
    e[7] === d ? w = e[8] : (w = async () => {
        if (!d) throw Error(`Workspace id is required`);
        return await _t(d)
    }, e[7] = d, e[8] = w);
    let ee = !!d,
        T;
    e[9] !== C || e[10] !== w || e[11] !== ee ? (T = {
        queryKey: C,
        queryFn: w,
        enabled: ee,
        staleTime: 0,
        refetchOnMount: `always`,
        refetchOnWindowFocus: `always`
    }, e[9] = C, e[10] = w, e[11] = ee, e[12] = T) : T = e[12];
    let E = te(T);
    E.data?.items;
    let D;
    e[13] === E.data?.items ? D = e[14] : (D = E.data?.items ?? [], e[13] = E.data?.items, e[14] = D);
    let O;
    e[15] === D ? O = e[16] : (O = D.filter(Pt), e[15] = D, e[16] = O);
    let k = O,
        A, j;
    e[17] === k ? (A = e[18], j = e[19]) : (j = () => {
        let e = new Set(k.map(Nt));
        v(t => {
            let n = new Set(Array.from(t).filter(t => e.has(t)));
            return n.size === t.size ? t : n
        })
    }, A = [k], e[17] = k, e[18] = A, e[19] = j), (0, Bt.useEffect)(j, A);
    let M, F;
    e[20] === k ? (M = e[21], F = e[22]) : (M = () => {
        let e = new Set(k.map(Mt));
        x(t => {
            let n = !1,
                r = {};
            for (let e of k) {
                let i = t[e.id];
                r[e.id] = i?.dirty ? i : xt(e), n ||= r[e.id] !== t[e.id]
            }
            return n ||= Object.keys(t).some(t => !e.has(t)), n ? r : t
        })
    }, F = [k], e[20] = k, e[21] = M, e[22] = F), (0, Bt.useEffect)(M, F);
    let I;
    if (e[23] !== k || e[24] !== b || e[25] !== m) {
        bb0: {
            let e = m.trim().toLowerCase();
            if (e === ``) {
                I = k;
                break bb0
            }
            I = k.filter(t => {
                let n = yt(t),
                    r = b[t.id]?.value ?? (n == null ? `` : String(n));
                return [Et(t), Dt(t), t.requester_account_user_id, t.justification, r].join(` `).toLowerCase().includes(e)
            })
        }
        e[23] = k,
        e[24] = b,
        e[25] = m,
        e[26] = I
    }
    else I = e[26];
    let L = I,
        R;
    e[27] === L ? R = e[28] : (R = L.map(jt), e[27] = L, e[28] = R);
    let z = R,
        B;
    e[29] !== _ || e[30] !== z ? (B = z.length > 0 && z.every(e => _.has(e)), e[29] = _, e[30] = z, e[31] = B) : B = e[31];
    let V = B,
        H;
    if (e[32] !== _ || e[33] !== z) {
        let t;
        e[35] === _ ? t = e[36] : (t = e => _.has(e), e[35] = _, e[36] = t), H = z.filter(t), e[32] = _, e[33] = z, e[34] = H
    } else H = e[34];
    let U = H.length,
        W;
    e[37] === d ? W = e[38] : (W = async e => {
        let {
            requests: t,
            status: n
        } = e;
        if (!d) throw Error(`Workspace id is required`);
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
            i = r.flatMap(kt),
            a = r.length - i.length;
        if (i.length === 0 && a > 0) throw Error(`Unable to update usage limit requests`);
        return {
            failedCount: a,
            succeededRequestIds: i
        }
    }, e[37] = d, e[38] = W);
    let ie;
    e[39] !== t || e[40] !== i || e[41] !== d ? (ie = async (e, n) => {
        let a = new Set(e.succeededRequestIds);
        v(e => {
            let t = new Set(e);
            for (let e of a) t.delete(e);
            return t
        }), i.setQueryData(ht(d), e => e == null ? e : {
            ...e,
            items: e.items.filter(e => !a.has(e.id))
        }), await i.invalidateQueries({
            queryKey: ht(d)
        }), await i.invalidateQueries({
            queryKey: gt(d)
        }), n.status === `approved` && d != null && await Promise.all([et({
            queryClient: i,
            workspaceId: d
        }), st({
            queryClient: i,
            workspaceId: d
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
    }, e[39] = t, e[40] = i, e[41] = d, e[42] = ie) : ie = e[42];
    let G;
    e[43] === t ? G = e[44] : (G = () => {
        r.warning(t.formatMessage(Y.resolveError), {
            hasCloseButton: !0
        })
    }, e[43] = t, e[44] = G);
    let K;
    e[45] !== W || e[46] !== ie || e[47] !== G ? (K = {
        mutationFn: W,
        onSuccess: ie,
        onError: G
    }, e[45] = W, e[46] = ie, e[47] = G, e[48] = K) : K = e[48];
    let oe = ne(K);
    if (d == null) {
        let t;
        return e[49] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, J.jsx)(`div`, {
            className: `flex min-h-[40vh] items-center justify-center`,
            children: (0, J.jsx)(h, {})
        }), e[49] = t) : t = e[49], t
    }
    let se;
    e[50] === Symbol.for(`react.memo_cache_sentinel`) ? (se = e => g(e.target.value), e[50] = se) : se = e[50];
    let ce;
    e[51] === t ? ce = e[52] : (ce = t.formatMessage(Y.searchPlaceholder), e[51] = t, e[52] = ce);
    let le;
    e[53] !== m || e[54] !== ce ? (le = (0, J.jsx)(`div`, {
        className: `mb-4.5 flex items-center justify-between`,
        children: (0, J.jsx)(me, {
            id: `workspace-admin-requests-search`,
            className: `w-full`,
            inputClassName: `w-full rounded-full! text-sm`,
            value: m,
            onChange: se,
            placeholder: ce
        })
    }), e[53] = m, e[54] = ce, e[55] = le) : le = e[55];
    let ue;
    e[56] !== V || e[57] !== L || e[58] !== p || e[59] !== b || e[60] !== oe || e[61] !== _ || e[62] !== U || e[63] !== z || e[64] !== E.isError || e[65] !== E.isLoading ? (ue = E.isLoading ? (0, J.jsx)(`div`, {
        className: `flex min-h-[40vh] items-center justify-center`,
        children: (0, J.jsx)(h, {})
    }) : E.isError ? (0, J.jsx)(`div`, {
        className: `border-token-border-heavy bg-token-bg-tertiary text-token-text-primary rounded-md border px-4 py-3`,
        children: (0, J.jsx)(P, {
            ...Y.loadError
        })
    }) : (0, J.jsx)(Lt, {
        requests: L,
        selectedRequestIds: _,
        requestedLimitDrafts: b,
        allVisibleRequestsSelected: V,
        selectedVisibleRequestCount: U,
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
                for (let t of z) e ? n.add(t) : n.delete(t);
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
    }), e[56] = V, e[57] = L, e[58] = p, e[59] = b, e[60] = oe, e[61] = _, e[62] = U, e[63] = z, e[64] = E.isError, e[65] = E.isLoading, e[66] = ue) : ue = e[66];
    let de;
    return e[67] !== le || e[68] !== ue ? (de = (0, J.jsxs)(`div`, {
        className: `max-w-[72rem]`,
        children: [le, ue]
    }), e[67] = le, e[68] = ue, e[69] = de) : de = e[69], de
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
        p = re(),
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
    let S;
    t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (S = (0, J.jsx)(`span`, {
        className: `sr-only`,
        children: (0, J.jsx)(P, {
            ...Y.selectAllRequests
        })
    }), t[12] = S) : S = t[12];
    let C;
    t[13] !== a || t[14] !== y || t[15] !== b || t[16] !== x ? (C = (0, J.jsx)(q.HeaderCell, {
        className: `ps-2`,
        children: (0, J.jsx)(de, {
            id: `workspace-admin-requests-select-all`,
            checked: a,
            indeterminate: y,
            disabled: b,
            onChange: x,
            label: S
        })
    }), t[13] = a, t[14] = y, t[15] = b, t[16] = x, t[17] = C) : C = t[17];
    let w;
    t[18] === Symbol.for(`react.memo_cache_sentinel`) ? (w = (0, J.jsx)(q.HeaderCell, {
        children: (0, J.jsx)(P, {
            ...Y.nameColumn
        })
    }), t[18] = w) : w = t[18];
    let ee;
    t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (ee = (0, J.jsx)(q.HeaderCell, {
        children: (0, J.jsx)(P, {
            ...Y.currentLimitColumn
        })
    }), t[19] = ee) : ee = t[19];
    let T;
    t[20] === Symbol.for(`react.memo_cache_sentinel`) ? (T = (0, J.jsx)(q.HeaderCell, {
        children: (0, J.jsx)(P, {
            ...Y.recommendedColumn
        })
    }), t[20] = T) : T = t[20];
    let E;
    t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (E = (0, J.jsx)(q.HeaderCell, {
        children: (0, J.jsx)(P, {
            ...Y.justificationColumn
        })
    }), t[21] = E) : E = t[21];
    let D;
    t[22] === o ? D = t[23] : (D = o > 0 ? (0, J.jsx)(P, {
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
    let M = c || !s || !g,
        N;
    t[30] !== f || t[31] !== m ? (N = () => f(m, `approved`), t[30] = f, t[31] = m, t[32] = N) : N = t[32];
    let F;
    t[33] === Symbol.for(`react.memo_cache_sentinel`) ? (F = (0, J.jsx)(P, {
        ...Y.approveSelectedButton
    }), t[33] = F) : F = t[33];
    let te;
    t[34] !== M || t[35] !== N ? (te = (0, J.jsx)(be.Item, {
        disabled: M,
        onClick: N,
        children: F
    }), t[34] = M, t[35] = N, t[36] = te) : te = t[36];
    let I;
    t[37] !== f || t[38] !== m ? (I = () => f(m, `denied`), t[37] = f, t[38] = m, t[39] = I) : I = t[39];
    let L;
    t[40] === Symbol.for(`react.memo_cache_sentinel`) ? (L = (0, J.jsx)(P, {
        ...Y.denySelectedButton
    }), t[40] = L) : L = t[40];
    let R;
    t[41] !== c || t[42] !== I ? (R = (0, J.jsx)(be.Item, {
        color: `danger`,
        disabled: c,
        onClick: I,
        children: L
    }), t[41] = c, t[42] = I, t[43] = R) : R = t[43];
    let z;
    t[44] !== j || t[45] !== te || t[46] !== R ? (z = (0, J.jsxs)(he, {
        side: `bottom`,
        sideOffset: 4,
        contentAlign: `end`,
        triggerButton: j,
        children: [te, R]
    }), t[44] = j, t[45] = te, t[46] = R, t[47] = z) : z = t[47];
    let B;
    t[48] !== D || t[49] !== z ? (B = (0, J.jsx)(q.HeaderCell, {
        textAlign: `right`,
        children: (0, J.jsxs)(`div`, {
            className: `text-token-text-primary flex items-center justify-end gap-2`,
            children: [D, z]
        })
    }), t[48] = D, t[49] = z, t[50] = B) : B = t[50];
    let ne;
    t[51] !== B || t[52] !== C ? (ne = (0, J.jsxs)(q.Header, {
        children: [C, w, ee, T, E, B]
    }), t[51] = B, t[52] = C, t[53] = ne) : ne = t[53];
    let V;
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
                    children: (0, J.jsx)(de, {
                        id: `workspace-admin-request-${e.id}`,
                        checked: r.has(e.id),
                        onChange: t => l(e.id, t.target.checked),
                        label: (0, J.jsx)(`span`, {
                            className: `sr-only`,
                            children: (0, J.jsx)(P, {
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
                        children: (0, J.jsx)(P, {
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
                            children: (0, J.jsx)(P, {
                                ...Y.approveButton
                            })
                        })
                    })]
                })]
            }, e.id)
        }, t[64] = s, t[65] = p, t[66] = c, t[67] = d, t[68] = f, t[69] = l, t[70] = i, t[71] = r, t[72] = e) : e = t[72], V = n.map(e), t[54] = s, t[55] = p, t[56] = c, t[57] = d, t[58] = f, t[59] = l, t[60] = i, t[61] = n, t[62] = r, t[63] = V
    } else V = t[63];
    let H;
    t[73] === n.length ? H = t[74] : (H = n.length === 0 && (0, J.jsx)(q.Row, {
        className: `[&>td]:py-2`,
        children: (0, J.jsx)(q.Cell, {
            colSpan: 6,
            children: (0, J.jsx)(`div`, {
                className: `text-token-text-tertiary`,
                children: (0, J.jsx)(P, {
                    ...Y.noRequests
                })
            })
        })
    }), t[73] = n.length, t[74] = H);
    let U;
    t[75] !== V || t[76] !== H ? (U = (0, J.jsxs)(q.Body, {
        children: [V, H]
    }), t[75] = V, t[76] = H, t[77] = U) : U = t[77];
    let W;
    return t[78] !== ne || t[79] !== U ? (W = (0, J.jsxs)(q.Root, {
        fixed: !0,
        size: `normal`,
        children: [_, ne, U]
    }), t[78] = ne, t[79] = U, t[80] = W) : W = t[80], W
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
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, J.jsx)(P, {
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
    zt = U(), ze(), We(), tt(), W(), ct(), ge(), _e(), Ae(), m(), Se(), xe(), D(), w(), i(), l(), f(), H(), Bt = t(R()), L(), J = k(), Vt = 100, Ht = 2147483647, Y = j({
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
        i = re(),
        a = N(),
        [o, l] = (0, Zt.useState)(!1),
        u = p(n),
        d = u.data ?? g,
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
    let m;
    t[2] !== a || t[3] !== n ? (m = async e => {
        a.setQueryData([`workspace-settings`, n], e), await a.invalidateQueries({
            queryKey: [`workspace-settings`, n]
        })
    }, t[2] = a, t[3] = n, t[4] = m) : m = t[4];
    let h;
    t[5] !== f || t[6] !== m ? (h = {
        mutationFn: f,
        onSuccess: m
    }, t[5] = f, t[6] = m, t[7] = h) : h = t[7];
    let _ = ne(h),
        v;
    t[8] !== i || t[9] !== _ ? (v = async e => {
        try {
            await _.mutateAsync(e), s().success(i.formatMessage(Z.saveSuccess), {
                hasCloseButton: !0
            }), l(!1)
        } catch {
            s().warning(i.formatMessage(Z.saveError), {
                hasCloseButton: !0
            })
        }
    }, t[8] = i, t[9] = _, t[10] = v) : v = t[10];
    let y = v,
        b;
    t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (b = (0, X.jsx)(`div`, {
        className: `text-token-text-primary text-base leading-[26px] font-semibold tracking-[-0.32px]`,
        children: (0, X.jsx)(P, {
            ...Z.settingLabel
        })
    }), t[11] = b) : b = t[11];
    let x;
    t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (x = (0, X.jsxs)(`div`, {
        className: `min-w-0 pe-6`,
        children: [b, (0, X.jsx)(`div`, {
            className: `text-token-text-tertiary text-sm leading-[18px] tracking-[-0.15px]`,
            children: (0, X.jsx)(P, {
                ...Z.settingDescription
            })
        })]
    }), t[12] = x) : x = t[12];
    let S;
    t[13] !== r || t[14] !== d || t[15] !== i || t[16] !== u.isError || t[17] !== u.isLoading ? (S = (0, X.jsxs)(`div`, {
        className: `border-token-border-default flex w-full items-start justify-between border-b py-4`,
        children: [x, u.isLoading ? (0, X.jsx)(`div`, {
            className: `text-token-text-tertiary text-sm`,
            children: (0, X.jsx)(P, {
                ...Z.loading
            })
        }) : (0, X.jsxs)(`div`, {
            className: `flex shrink-0 flex-col items-end gap-0.5`,
            children: [(0, X.jsx)(`div`, {
                className: `text-token-text-primary text-base`,
                children: (0, X.jsx)(P, {
                    ...Jt(d.kind)
                })
            }), (0, X.jsx)(`button`, {
                type: `button`,
                "aria-label": i.formatMessage(Z.editRequestPolicy),
                className: `disabled:text-token-text-tertiary text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline focus-visible:underline focus-visible:outline-none disabled:cursor-not-allowed disabled:no-underline dark:text-blue-400 dark:hover:text-blue-300`,
                disabled: !r || u.isError,
                onClick: () => l(!0),
                children: (0, X.jsx)(P, {
                    ...Z.edit
                })
            })]
        })]
    }), t[13] = r, t[14] = d, t[15] = i, t[16] = u.isError, t[17] = u.isLoading, t[18] = S) : S = t[18];
    let C;
    t[19] !== d || t[20] !== y || t[21] !== o || t[22] !== _ ? (C = o ? (0, X.jsx)(Gt, {
        config: d,
        isSaving: _.isPending,
        onClose: () => l(!1),
        onSave: y
    }) : null, t[19] = d, t[20] = y, t[21] = o, t[22] = _, t[23] = C) : C = t[23];
    let w;
    return t[24] !== S || t[25] !== C ? (w = (0, X.jsxs)(X.Fragment, {
        children: [S, C]
    }), t[24] = S, t[25] = C, t[26] = w) : w = t[26], w
}

function Gt(e) {
    "use forget";
    let t = (0, Xt.c)(52),
        {
            config: r,
            isSaving: i,
            onClose: a,
            onSave: o
        } = e,
        s = re(),
        [c, l] = (0, Zt.useState)(r.kind),
        [u, f] = (0, Zt.useState)(r.kind === `custom` ? r.instructions ?? `` : ``),
        [p, m] = (0, Zt.useState)(r.kind === `custom` ? r.request_url ?? `` : ``),
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
    let S = x,
        C;
    t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (C = (0, X.jsx)(P, {
        ...Z.modalTitle
    }), t[11] = C) : C = t[11];
    let w = !b,
        ee;
    t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (ee = (0, X.jsx)(P, {
        ...Z.save
    }), t[12] = ee) : ee = t[12];
    let T;
    t[13] !== S || t[14] !== i || t[15] !== w ? (T = (0, X.jsx)(n, {
        color: `primary`,
        loading: i,
        disabled: w,
        onClick: S,
        children: ee
    }), t[13] = S, t[14] = i, t[15] = w, t[16] = T) : T = t[16];
    let E;
    t[17] === Symbol.for(`react.memo_cache_sentinel`) ? (E = (0, X.jsx)(P, {
        ...Z.cancel
    }), t[17] = E) : E = t[17];
    let D;
    t[18] !== i || t[19] !== a ? (D = (0, X.jsx)(n, {
        color: `secondary`,
        disabled: i,
        onClick: a,
        children: E
    }), t[18] = i, t[19] = a, t[20] = D) : D = t[20];
    let O;
    t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (O = e => {
        l(e)
    }, t[21] = O) : O = t[21];
    let k;
    t[22] === s ? k = t[23] : (k = s.formatMessage(Z.requestExperienceLabel), t[22] = s, t[23] = k);
    let A, j;
    t[24] === Symbol.for(`react.memo_cache_sentinel`) ? (A = (0, X.jsx)(Ve.Value, {}), j = (0, X.jsx)(Ve.Icon, {}), t[24] = A, t[25] = j) : (A = t[24], j = t[25]);
    let M;
    t[26] === k ? M = t[27] : (M = (0, X.jsxs)(Ve.Trigger, {
        "aria-label": k,
        className: `border-token-border-default w-full justify-between border`,
        children: [A, j]
    }), t[26] = k, t[27] = M);
    let N;
    t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (N = (0, X.jsx)(Ve.Portal, {
        children: (0, X.jsx)(Ve.Content, {
            className: `w-[var(--radix-select-trigger-width)]`,
            children: [`openai_native`, `custom`, `disabled`].map(Kt)
        })
    }), t[28] = N) : N = t[28];
    let F;
    t[29] !== c || t[30] !== M ? (F = (0, X.jsxs)(Ve.Root, {
        value: c,
        onValueChange: O,
        children: [M, N]
    }), t[29] = c, t[30] = M, t[31] = F) : F = t[31];
    let te;
    t[32] === c ? te = t[33] : (te = Yt(c), t[32] = c, t[33] = te);
    let I;
    t[34] === te ? I = t[35] : (I = (0, X.jsx)(`div`, {
        className: `text-token-text-tertiary text-sm leading-5`,
        children: (0, X.jsx)(P, {
            ...te
        })
    }), t[34] = te, t[35] = I);
    let L;
    t[36] !== y || t[37] !== u || t[38] !== s || t[39] !== c || t[40] !== p || t[41] !== v ? (L = c === `custom` ? (0, X.jsxs)(X.Fragment, {
        children: [(0, X.jsxs)(`div`, {
            className: `flex flex-col gap-1.5`,
            children: [(0, X.jsx)(`label`, {
                htmlFor: `usage-limit-request-description`,
                className: `text-token-text-primary text-sm font-medium`,
                children: (0, X.jsx)(P, {
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
                children: (0, X.jsx)(P, {
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
                children: (0, X.jsx)(P, {
                    ...Z.invalidHttps
                })
            }) : null]
        })]
    }) : null, t[36] = y, t[37] = u, t[38] = s, t[39] = c, t[40] = p, t[41] = v, t[42] = L) : L = t[42];
    let R;
    t[43] !== F || t[44] !== I || t[45] !== L ? (R = (0, X.jsxs)(`div`, {
        className: `flex flex-col gap-4`,
        children: [F, I, L]
    }), t[43] = F, t[44] = I, t[45] = L, t[46] = R) : R = t[46];
    let z;
    return t[47] !== a || t[48] !== R || t[49] !== T || t[50] !== D ? (z = (0, X.jsx)(d, {
        isOpen: !0,
        showCloseButton: !0,
        testId: `modal-usage-limit-increase-request`,
        title: C,
        onClose: a,
        primaryButton: T,
        secondaryButton: D,
        children: R
    }), t[47] = a, t[48] = R, t[49] = T, t[50] = D, t[51] = z) : z = t[51], z
}

function Kt(e) {
    return (0, X.jsx)(Ve.Item, {
        value: e,
        children: (0, X.jsx)(P, {
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
    Xt = U(), b(), r(), Be(), _(), l(), f(), H(), Zt = t(R()), L(), X = k(), Z = j({
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
    let r = new URL(ce(`/usage-limits`, n, {
        includeWorkspaceLoginMethodHint: !0
    }));
    return Me(e.split(`/`).at(-1), new URLSearchParams(t), r.searchParams), r.toString()
}

function en() {
    "use forget";
    let e = (0, Dn.c)(5),
        t = Pe(),
        n = S(),
        r = n?.isEnterprisey() === !0 && ee(`3778045255`);
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
            workspaceId: r
        } = e,
        i = re(),
        a = O(),
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
        children: (0, Q.jsx)(P, {
            ...$.usageLimitsMovedToAdminConsoleTitle
        })
    }), t[4] = c) : c = t[4];
    let l;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (l = (0, Q.jsxs)(`div`, {
        className: `flex flex-col gap-1 pb-1 text-[16px] leading-[26px] tracking-[-0.32px]`,
        children: [c, (0, Q.jsx)(`p`, {
            className: `text-token-text-secondary font-normal`,
            children: (0, Q.jsx)(P, {
                ...$.usageLimitsMovedToAdminConsoleBody
            })
        })]
    }), t[5] = l) : l = t[5];
    let u;
    t[6] !== a.pathname || t[7] !== a.search || t[8] !== r ? (u = $t({
        pathname: a.pathname,
        search: a.search,
        workspaceId: r
    }), t[6] = a.pathname, t[7] = a.search, t[8] = r, t[9] = u) : u = t[9];
    let d;
    t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, Q.jsx)(P, {
        ...$.usageLimitsMovedToAdminConsoleAction
    }), t[10] = d) : d = t[10];
    let f;
    t[11] === u ? f = t[12] : (f = (0, Q.jsx)(Ie, {
        className: `flex min-h-[80vh] items-center justify-center`,
        children: (0, Q.jsxs)(`div`, {
            className: `flex flex-col items-center justify-center gap-4 text-center`,
            children: [l, (0, Q.jsx)(n, {
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
        t = re(),
        n = M(),
        r = F(),
        i = S(),
        a = o(an),
        {
            role: s
        } = Fe(),
        l = i?.id,
        u;
    e[0] !== s || e[1] !== a ? (u = s == null ? a != null && ae(a.role) : ae(s), e[0] = s, e[1] = a, e[2] = u) : u = e[2];
    let d = u,
        f;
    e[3] === n.tab ? f = e[4] : (f = pt(n.tab), e[3] = n.tab, e[4] = f);
    let m = f,
        h;
    e[5] === i ? h = e[6] : (h = i == null ? null : i.isEnterprisey() || i.isEdu(), e[5] = i, e[6] = h);
    let g = h,
        _ = p(l),
        v;
    e[7] !== i || e[8] !== d || e[9] !== _ ? (v = d && i != null && _.data != null && oe(i) && ee(Nn), e[7] = i, e[8] = d, e[9] = _, e[10] = v) : v = e[10];
    let b = v,
        x;
    e[11] !== m || e[12] !== l ? (x = m === `pending-requests` ? ht(l) : gt(l), e[11] = m, e[12] = l, e[13] = x) : x = e[13];
    let C;
    e[14] !== m || e[15] !== l ? (C = async () => {
        if (l == null) throw Error(`Workspace id is required`);
        return await _t(l, m === `pending-requests` ? void 0 : {
            fetchAllPages: !1,
            pageSize: Mn
        })
    }, e[14] = m, e[15] = l, e[16] = C) : C = e[16];
    let w = l != null && b,
        E;
    e[17] !== x || e[18] !== C || e[19] !== w ? (E = {
        queryKey: x,
        queryFn: C,
        enabled: w,
        staleTime: 0,
        refetchOnMount: `always`,
        refetchOnWindowFocus: `always`
    }, e[17] = x, e[18] = C, e[19] = w, e[20] = E) : E = e[20];
    let D = te(E),
        O;
    e[21] === D.data?.items ? O = e[22] : (O = D.data?.items.some(rn) ?? !1, e[21] = D.data?.items, e[22] = O);
    let k = O,
        A = i == null || _.isLoading ? null : b ? _.data?.kind === `openai_native` || m === `pending-requests` && D.fetchStatus !== `idle` ? !0 : D.isPending ? null : D.isError || k || !!D.data?.cursor : !1,
        j = g === !1 && m === `groups` || A !== !0 && m === `pending-requests` ? `workspace` : m,
        N;
    e[23] !== i || e[24] !== d || e[25] !== m ? (N = m !== `pending-requests` && d && i != null && (i.isEnterprisey() || i.isEdu()) && ee(Pn), e[23] = i, e[24] = d, e[25] = m, e[26] = N) : N = e[26];
    let I = N,
        L = m !== `pending-requests` && d && i != null,
        R;
    e[27] !== g || e[28] !== A ? (R = e => !(g === !1 && e === `groups` || A !== !0 && e === `pending-requests`), e[27] = g, e[28] = A, e[29] = R) : R = e[29];
    let z = mt.filter(R),
        B, ne;
    e[30] === l ? (B = e[31], ne = e[32]) : (B = [`spend-controls-explainability`, l], ne = async () => {
        if (l == null) throw Error(`Workspace id is required`);
        return await c.safeGet(`/accounts/{account_id}/spend-controls/explainability`, {
            parameters: {
                path: {
                    account_id: l
                }
            }
        })
    }, e[30] = l, e[31] = B, e[32] = ne);
    let V = l != null && I,
        H;
    e[33] !== B || e[34] !== ne || e[35] !== V ? (H = {
        queryKey: B,
        queryFn: ne,
        enabled: V
    }, e[33] = B, e[34] = ne, e[35] = V, e[36] = H) : H = e[36];
    let U = te(H),
        W = I ? U.data : void 0,
        ie;
    if (e[37] !== L) {
        let t = L ? T(In) : null;
        ie = t == null ? void 0 : {
            thresholdCreditsPerMember: t.get(`low_limit_warning_threshold_credits_per_member`, Ln),
            averageMonthlyCreditsPerMember: t.get(`low_limit_warning_average_monthly_credits_per_member`, Rn),
            powerUserMonthlyCreditsPerMember: t.get(`low_limit_warning_power_user_monthly_credits_per_member`, zn)
        }, e[37] = L, e[38] = ie
    } else ie = e[38];
    let G = ie,
        K, se;
    e[39] !== r || e[40] !== D.isFetching || e[41] !== m || e[42] !== g || e[43] !== A ? (K = () => {
        (g === !1 && m === `groups` || A === !1 && !D.isFetching && m === `pending-requests`) && r(ft(`workspace`), {
            replace: !0
        })
    }, se = [r, D.isFetching, m, g, A], e[39] = r, e[40] = D.isFetching, e[41] = m, e[42] = g, e[43] = A, e[44] = K, e[45] = se) : (K = e[44], se = e[45]), (0, On.useEffect)(K, se);
    let ce;
    e[46] === t ? ce = e[47] : (ce = t.formatMessage($.browserTitle), e[46] = t, e[47] = ce);
    let ue;
    e[48] === ce ? ue = e[49] : (ue = (0, Q.jsx)(qe, {
        children: (0, Q.jsx)(`title`, {
            children: ce
        })
    }), e[48] = ce, e[49] = ue);
    let de = Le,
        fe;
    e[50] === t ? fe = e[51] : (fe = t.formatMessage($.pageTitle), e[50] = t, e[51] = fe);
    let pe = I ? $.pageSubtitleWithEstimatedValues : $.pageSubtitle,
        me;
    e[52] === pe ? me = e[53] : (me = (0, Q.jsx)(P, {
        ...pe
    }), e[52] = pe, e[53] = me);
    let he;
    e[54] !== j || e[55] !== k || e[56] !== r ? (he = e => (0, Q.jsx)(`button`, {
        type: `button`,
        className: y(`min-h-[32px] border-b py-[10px] text-[14px] leading-5 whitespace-nowrap`, j === e ? `text-token-text-primary border-current` : `text-token-text-tertiary hover:text-token-text-secondary cursor-pointer border-transparent`),
        onClick: () => r(ft(e)),
        children: (0, Q.jsxs)(`span`, {
            className: `inline-flex items-center gap-1.5`,
            children: [(0, Q.jsx)(P, {
                ...$[e]
            }), e === `pending-requests` && k ? (0, Q.jsxs)(Q.Fragment, {
                children: [(0, Q.jsx)(le, {
                    color: `blue`,
                    className: `shrink-0`
                }), (0, Q.jsx)(`span`, {
                    className: `sr-only`,
                    children: (0, Q.jsx)(P, {
                        ...$.pendingRequestsAvailable
                    })
                })]
            }) : null]
        })
    }, e), e[54] = j, e[55] = k, e[56] = r, e[57] = he) : he = e[57];
    let ge = z.map(he),
        _e;
    e[58] === ge ? _e = e[59] : (_e = (0, Q.jsx)(`div`, {
        className: `flex items-end justify-between gap-4`,
        children: (0, Q.jsx)(`div`, {
            className: `flex items-center gap-4`,
            children: ge
        })
    }), e[58] = ge, e[59] = _e);
    let ve;
    e[60] !== de || e[61] !== fe || e[62] !== me || e[63] !== _e ? (ve = (0, Q.jsx)(de, {
        contentWidth: `medium`,
        title: fe,
        subtitle: me,
        tabsHeader: _e
    }), e[60] = de, e[61] = fe, e[62] = me, e[63] = _e, e[64] = ve) : ve = e[64];
    let ye;
    e[65] !== j || e[66] !== W || e[67] !== G ? (ye = j === `workspace` ? (0, Q.jsx)(on, {
        explainabilityContext: W,
        lowLimitWarningConfig: G
    }) : null, e[65] = j, e[66] = W, e[67] = G, e[68] = ye) : ye = e[68];
    let be;
    e[69] !== j || e[70] !== W || e[71] !== G ? (be = j === `users` ? (0, Q.jsx)(cn, {
        explainabilityContext: W,
        lowLimitWarningConfig: G
    }) : null, e[69] = j, e[70] = W, e[71] = G, e[72] = be) : be = e[72];
    let xe;
    e[73] !== j || e[74] !== W || e[75] !== G ? (xe = j === `groups` ? (0, Q.jsx)(mn, {
        explainabilityContext: W,
        lowLimitWarningConfig: G
    }) : null, e[73] = j, e[74] = W, e[75] = G, e[76] = xe) : xe = e[76];
    let Se;
    e[77] === j ? Se = e[78] : (Se = j === `pending-requests` ? (0, Q.jsx)(Ot, {}) : null, e[77] = j, e[78] = Se);
    let Ce;
    e[79] !== ye || e[80] !== be || e[81] !== xe || e[82] !== Se ? (Ce = (0, Q.jsx)(Ie, {
        contentWidth: `medium`,
        showSpinner: !1,
        children: (0, Q.jsxs)(`div`, {
            className: `pt-4 pb-8`,
            children: [ye, be, xe, Se]
        })
    }), e[79] = ye, e[80] = be, e[81] = xe, e[82] = Se, e[83] = Ce) : Ce = e[83];
    let we;
    return e[84] !== ue || e[85] !== ve || e[86] !== Ce ? (we = (0, Q.jsxs)(Q.Fragment, {
        children: [ue, ve, Ce]
    }), e[84] = ue, e[85] = ve, e[86] = Ce, e[87] = we) : we = e[87], we
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
        i = re(),
        a = N(),
        l = S(),
        u = o(sn),
        {
            role: d
        } = Fe(),
        [f, p] = (0, On.useState)(!1),
        m = l?.id,
        g;
    t[0] !== d || t[1] !== u ? (g = d == null ? u != null && ae(u.role) : ae(d), t[0] = d, t[1] = u, t[2] = g) : g = t[2];
    let _ = g,
        v, y;
    t[3] === m ? (v = t[4], y = t[5]) : (v = [`workspace-spend-controls`, m], y = async () => {
        if (!m) throw Error(`Workspace id is required`);
        return await c.safeGet(`/accounts/{account_id}/spend-controls/workspace`, {
            parameters: {
                path: {
                    account_id: m
                }
            }
        })
    }, t[3] = m, t[4] = v, t[5] = y);
    let b = !!m,
        x;
    t[6] !== v || t[7] !== y || t[8] !== b ? (x = {
        queryKey: v,
        queryFn: y,
        enabled: b
    }, t[6] = v, t[7] = y, t[8] = b, t[9] = x) : x = t[9];
    let C = te(x),
        w;
    t[10] === m ? w = t[11] : (w = async e => {
        if (!m) throw Error(`Workspace id is required`);
        return await c.safePost(`/accounts/{account_id}/settings/seat_type_credit_limits`, {
            parameters: {
                path: {
                    account_id: m
                }
            },
            requestBody: En(e)
        })
    }, t[10] = m, t[11] = w);
    let T;
    t[12] !== a || t[13] !== m ? (T = async e => {
        if (!m) throw Error(`Workspace id is required`);
        a.setQueryData([`workspace-settings`, m], e), await a.invalidateQueries({
            queryKey: [`workspace-settings`, m]
        }), await a.invalidateQueries({
            queryKey: [`workspace-spend-controls`, m]
        }), await et({
            queryClient: a,
            workspaceId: m,
            refetchType: `all`
        })
    }, t[12] = a, t[13] = m, t[14] = T) : T = t[14];
    let E;
    t[15] !== w || t[16] !== T ? (E = {
        mutationFn: w,
        onSuccess: T
    }, t[15] = w, t[16] = T, t[17] = E) : E = t[17];
    let D = ne(E),
        O = C.data?.default_user_credit_limits,
        k;
    t[18] === O ? k = t[19] : (k = ie(O), t[18] = O, t[19] = k);
    let A = k,
        j = typeof A == `number` ? A : null,
        M = r != null && (f || j != null && j < r.thresholdCreditsPerMember) && ee(Fn) ? r : void 0,
        F;
    t[20] !== i || t[21] !== D ? (F = async e => {
        try {
            await D.mutateAsync(e), s().success(i.formatMessage($.limitSaveSuccess), {
                hasCloseButton: !0
            }), p(!1)
        } catch {
            s().warning(i.formatMessage($.limitSaveError), {
                hasCloseButton: !0
            })
        }
    }, t[20] = i, t[21] = D, t[22] = F) : F = t[22];
    let I = F,
        L;
    t[23] !== f || t[24] !== I ? (L = async e => {
        f && await I(e)
    }, t[23] = f, t[24] = I, t[25] = L) : L = t[25];
    let R = L,
        z;
    t[26] === Symbol.for(`react.memo_cache_sentinel`) ? (z = (0, Q.jsx)(`div`, {
        className: `text-token-text-primary text-base leading-[26px] font-semibold tracking-[-0.32px]`,
        children: (0, Q.jsx)(P, {
            ...$.workspaceDefaultLimitLabel
        })
    }), t[26] = z) : z = t[26];
    let B;
    t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (B = (0, Q.jsxs)(`div`, {
        children: [z, (0, Q.jsx)(`div`, {
            className: `text-token-text-tertiary text-sm leading-5 tracking-[-0.15px]`,
            children: (0, Q.jsx)(P, {
                ...$.workspaceDefaultLimitDescription
            })
        })]
    }), t[27] = B) : B = t[27];
    let V;
    t[28] !== A || t[29] !== n || t[30] !== _ || t[31] !== D || t[32] !== C.isError || t[33] !== C.isFetching || t[34] !== C.isLoading ? (V = (0, Q.jsxs)(`div`, {
        className: `flex w-full items-start justify-between`,
        children: [B, C.isLoading || C.isFetching ? (0, Q.jsx)(h, {
            className: `text-token-text-tertiary mt-1 h-4 w-4`
        }) : (0, Q.jsxs)(`div`, {
            className: `flex flex-col items-end gap-0.5`,
            children: [(0, Q.jsx)(Ze, {
                explainabilityContext: n,
                limit: A
            }), (0, Q.jsx)(bn, {
                disabled: !_,
                testId: `workspace-usage-limits-admin-disabled-tooltip-trigger`,
                children: (0, Q.jsx)(yn, {
                    disabled: !_ || C.isError || D.isPending,
                    onClick: () => p(!0),
                    label: A == null ? $.addButton : $.editButton
                })
            })]
        })]
    }), t[28] = A, t[29] = n, t[30] = _, t[31] = D, t[32] = C.isError, t[33] = C.isFetching, t[34] = C.isLoading, t[35] = V) : V = t[35];
    let H;
    t[36] !== M || t[37] !== j || t[38] !== n ? (H = (0, Q.jsx)(Xe, {
        className: `mt-4`,
        explainabilityContext: n,
        limit: j,
        lowLimitWarningConfig: M,
        variant: `workspace-default`
    }), t[36] = M, t[37] = j, t[38] = n, t[39] = H) : H = t[39];
    let U;
    t[40] !== V || t[41] !== H ? (U = (0, Q.jsxs)(`div`, {
        className: `border-token-border-default border-b pb-4`,
        children: [V, H]
    }), t[40] = V, t[41] = H, t[42] = U) : U = t[42];
    let W;
    t[43] !== _ || t[44] !== m ? (W = (0, Q.jsx)(Wt, {
        workspaceId: m,
        canEdit: _
    }), t[43] = _, t[44] = m, t[45] = W) : W = t[45];
    let G;
    t[46] !== U || t[47] !== W ? (G = (0, Q.jsxs)(`section`, {
        children: [U, W]
    }), t[46] = U, t[47] = W, t[48] = G) : G = t[48];
    let K;
    t[49] !== M || t[50] !== A || t[51] !== n || t[52] !== R || t[53] !== f ? (K = f ? (0, Q.jsx)(ut, {
        currentLimit: A,
        placeholder: ``,
        onClose: () => p(!1),
        onSave: R,
        renderLimitContext: e => (0, Q.jsx)(Ye, {
            explainabilityContext: n,
            limit: e,
            lowLimitWarningConfig: M
        })
    }) : null, t[49] = M, t[50] = A, t[51] = n, t[52] = R, t[53] = f, t[54] = K) : K = t[54];
    let oe;
    return t[55] !== G || t[56] !== K ? (oe = (0, Q.jsxs)(Q.Fragment, {
        children: [G, K]
    }), t[55] = G, t[56] = K, t[57] = oe) : oe = t[57], oe
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
        i = re(),
        l = N(),
        u = S(),
        d = o(pn),
        {
            role: f
        } = Fe(),
        [p] = z(),
        m;
    t[0] === p ? m = t[1] : (m = p.get(`query`) ?? ``, t[0] = p, t[1] = m);
    let g = m,
        [_, v] = (0, On.useState)(0),
        [b, x] = (0, On.useState)(g),
        [C, w] = (0, On.useState)(g),
        T;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (T = {
        field: `name`,
        direction: `ASC`
    }, t[2] = T) : T = t[2];
    let [E, D] = (0, On.useState)(T), [O, k] = (0, On.useState)(null), A = O != null && r != null && ee(Fn) ? r : void 0, j = u?.id, M;
    t[3] !== f || t[4] !== d ? (M = f == null ? d != null && ae(d.role) : ae(f), t[3] = f, t[4] = d, t[5] = M) : M = t[5];
    let F = M,
        I;
    t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (I = a(e => {
        v(0), w(e)
    }, 300, {
        leading: !1,
        trailing: !0
    }), t[6] = I) : I = t[6];
    let L = I,
        R, B;
    t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (R = () => () => L.cancel(), B = [L], t[7] = R, t[8] = B) : (R = t[7], B = t[8]), (0, On.useEffect)(R, B);
    let H, U;
    t[9] === g ? (H = t[10], U = t[11]) : (H = () => {
        v(0), x(g), w(g)
    }, U = [g], t[9] = g, t[10] = H, t[11] = U), (0, On.useEffect)(H, U);
    let W = _ * jn,
        K;
    t[12] !== C || t[13] !== E.direction || t[14] !== E.field || t[15] !== W || t[16] !== j ? (K = it(j, W, C, jn, E.field, E.direction), t[12] = C, t[13] = E.direction, t[14] = E.field, t[15] = W, t[16] = j, t[17] = K) : K = t[17];
    let oe;
    t[18] !== C || t[19] !== _ || t[20] !== E.direction || t[21] !== E.field || t[22] !== j ? (oe = async () => {
        if (!j) throw Error(`Workspace id is required`);
        return await c.safeGet(`/accounts/{account_id}/spend-controls/users`, {
            parameters: {
                path: {
                    account_id: j
                },
                query: {
                    offset: _ * jn,
                    limit: jn,
                    query: C,
                    order_by_field: E.field,
                    order_by_direction: E.direction
                }
            }
        })
    }, t[18] = C, t[19] = _, t[20] = E.direction, t[21] = E.field, t[22] = j, t[23] = oe) : oe = t[23];
    let se = !!j,
        ce;
    t[24] !== K || t[25] !== oe || t[26] !== se ? (ce = {
        queryKey: K,
        queryFn: oe,
        enabled: se,
        placeholderData: V
    }, t[24] = K, t[25] = oe, t[26] = se, t[27] = ce) : ce = t[27];
    let le = te(ce),
        ue = le.data,
        de;
    t[28] === j ? de = t[29] : (de = async e => {
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
                credit_limits: G(n)
            }
        })
    }, t[28] = j, t[29] = de);
    let fe;
    t[30] !== l || t[31] !== j ? (fe = async e => {
        if (!j) return {
            previousCacheEntries: []
        };
        await ot({
            queryClient: l,
            workspaceId: j
        });
        let t = nt({
            queryClient: l,
            workspaceId: j
        });
        return at({
            queryClient: l,
            workspaceId: j,
            userId: e.userId,
            creditLimits: G(e.limit)
        }), {
            previousCacheEntries: t
        }
    }, t[30] = l, t[31] = j, t[32] = fe) : fe = t[32];
    let pe;
    t[33] === l ? pe = t[34] : (pe = (e, t, n) => {
        n != null && rt({
            queryClient: l,
            snapshot: n.previousCacheEntries
        })
    }, t[33] = l, t[34] = pe);
    let he;
    t[35] !== l || t[36] !== j ? (he = async (e, t) => {
        j && (await et({
            queryClient: l,
            workspaceId: j,
            refetchType: `active`
        }), at({
            queryClient: l,
            workspaceId: j,
            userId: t.userId,
            creditLimits: G(t.limit),
            updateEffectiveHardCap: t.limit != null
        }), await st({
            queryClient: l,
            workspaceId: j,
            refetchType: `active`
        }))
    }, t[35] = l, t[36] = j, t[37] = he) : he = t[37];
    let ge;
    t[38] !== de || t[39] !== fe || t[40] !== pe || t[41] !== he ? (ge = {
        mutationFn: de,
        onMutate: fe,
        onError: pe,
        onSuccess: he
    }, t[38] = de, t[39] = fe, t[40] = pe, t[41] = he, t[42] = ge) : ge = t[42];
    let _e = ne(ge),
        ye;
    t[43] !== O || t[44] !== i || t[45] !== _e ? (ye = async e => {
        if (O != null) try {
            await _e.mutateAsync({
                userId: O.id,
                limit: e
            }), s().success(i.formatMessage($.limitSaveSuccess), {
                hasCloseButton: !0
            }), k(null)
        } catch {
            s().warning(i.formatMessage($.limitSaveError), {
                hasCloseButton: !0
            })
        }
    }, t[43] = O, t[44] = i, t[45] = _e, t[46] = ye) : ye = t[46];
    let be = ye,
        xe;
    t[47] !== ue?.items || t[48] !== le.isError ? (xe = le.isError ? [] : ue?.items ?? [], t[47] = ue?.items, t[48] = le.isError, t[49] = xe) : xe = t[49];
    let Se = xe,
        Ce = Math.ceil((ue?.total ?? 0) / jn),
        we = j == null || ue === void 0 && (le.isPending || le.isFetching),
        Te = le.isPlaceholderData,
        Ee, De;
    t[50] !== Ce || t[51] !== _ ? (Ee = () => {
        _ >= Ce && Ce !== 0 && v(Math.max(Ce - 1, 0))
    }, De = [Ce, _], t[50] = Ce, t[51] = _, t[52] = Ee, t[53] = De) : (Ee = t[52], De = t[53]), (0, On.useEffect)(Ee, De);
    let Oe;
    t[54] === Symbol.for(`react.memo_cache_sentinel`) ? (Oe = e => {
        x(e.target.value), L(e.target.value)
    }, t[54] = Oe) : Oe = t[54];
    let ke;
    t[55] === i ? ke = t[56] : (ke = i.formatMessage($.searchUsersPlaceholder), t[55] = i, t[56] = ke);
    let Ae;
    t[57] !== b || t[58] !== ke ? (Ae = (0, Q.jsx)(`div`, {
        className: `mb-4.5 flex items-center justify-between`,
        children: (0, Q.jsx)(me, {
            className: `w-full`,
            value: b,
            onChange: Oe,
            placeholder: ke,
            inputClassName: `w-full rounded-full! text-sm`
        })
    }), t[57] = b, t[58] = ke, t[59] = Ae) : Ae = t[59];
    let je;
    t[60] !== n || t[61] !== F || t[62] !== i || t[63] !== we || t[64] !== Te || t[65] !== Se || t[66] !== Ce || t[67] !== _ || t[68] !== E.direction || t[69] !== E.field || t[70] !== le.isError ? (je = we ? (0, Q.jsx)(`div`, {
        className: `flex min-h-[18rem] items-center justify-center`,
        children: (0, Q.jsx)(h, {})
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
                        active: E.field === `name`,
                        direction: E.direction,
                        onSort: () => {
                            v(0), D(fn)
                        },
                        children: (0, Q.jsx)(P, {
                            ...$.nameColumn
                        })
                    }), (0, Q.jsx)(xn, {
                        active: E.field === `current_month_usage`,
                        direction: E.direction,
                        onSort: () => {
                            v(0), D(dn)
                        },
                        children: (0, Q.jsx)(P, {
                            ...$.usedThisMonthColumn
                        })
                    }), (0, Q.jsx)(xn, {
                        active: E.field === `effective_hard_cap_limit`,
                        direction: E.direction,
                        onSort: () => {
                            v(0), D(un)
                        },
                        children: (0, Q.jsx)(P, {
                            ...$.currentLimitColumn
                        })
                    }), (0, Q.jsx)(xn, {
                        active: E.field === `override_hard_cap_limit`,
                        direction: E.direction,
                        onSort: () => {
                            v(0), D(ln)
                        },
                        children: (0, Q.jsx)(P, {
                            ...$.overrideLimitColumn
                        })
                    })]
                }), (0, Q.jsxs)(q.Body, {
                    className: y(Te && `pointer-events-none opacity-50`),
                    children: [le.isError ? (0, Q.jsx)(q.Row, {
                        className: `[&>td]:py-3`,
                        children: (0, Q.jsx)(q.Cell, {
                            colSpan: 4,
                            children: (0, Q.jsx)(`div`, {
                                className: `text-token-text-tertiary`,
                                children: (0, Q.jsx)(P, {
                                    ...$.usersLoadError
                                })
                            })
                        })
                    }) : null, Se.map(e => {
                        let t = e.name || e.email || e.id,
                            r = e.email || i.formatMessage($.noEmail),
                            a = ie(e.override_credit_limits);
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
                                children: (0, Q.jsx)(P, {
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
                                        children: (0, Q.jsx)(P, {
                                            ...$.noOverride
                                        })
                                    }) : (0, Q.jsx)(Ze, {
                                        explainabilityContext: n,
                                        limit: a
                                    }), (0, Q.jsx)(bn, {
                                        disabled: !F,
                                        testId: `${e.id}-usage-limits-admin-disabled-tooltip-trigger`,
                                        children: (0, Q.jsx)(yn, {
                                            disabled: !F || Te,
                                            onClick: () => k(e),
                                            label: a == null ? $.addButton : $.editButton
                                        })
                                    })]
                                })
                            })]
                        }, e.id)
                    }), !le.isError && Se.length === 0 ? (0, Q.jsx)(q.Row, {
                        className: `[&>td]:py-3`,
                        children: (0, Q.jsx)(q.Cell, {
                            colSpan: 4,
                            children: (0, Q.jsx)(`div`, {
                                className: `text-token-text-tertiary`,
                                children: (0, Q.jsx)(P, {
                                    ...$.noUsersFound
                                })
                            })
                        })
                    }) : null]
                })]
            }), Te ? (0, Q.jsx)(`div`, {
                className: `pointer-events-none absolute inset-0 flex items-center justify-center`,
                children: (0, Q.jsx)(h, {
                    className: `text-token-text-tertiary h-5 w-5`
                })
            }) : null]
        }), (0, Q.jsx)(`div`, {
            className: `relative mt-4 min-h-[20px]`,
            children: Ce > 1 ? (0, Q.jsx)(`div`, {
                className: `absolute start-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 justify-center`,
                children: (0, Q.jsx)(ve, {
                    currentPage: _,
                    onChangeIndex: v,
                    length: Ce
                })
            }) : null
        })]
    }), t[60] = n, t[61] = F, t[62] = i, t[63] = we, t[64] = Te, t[65] = Se, t[66] = Ce, t[67] = _, t[68] = E.direction, t[69] = E.field, t[70] = le.isError, t[71] = je) : je = t[71];
    let Me;
    t[72] !== Ae || t[73] !== je ? (Me = (0, Q.jsxs)(`section`, {
        children: [Ae, je]
    }), t[72] = Ae, t[73] = je, t[74] = Me) : Me = t[74];
    let Ne;
    t[75] !== A || t[76] !== O || t[77] !== n || t[78] !== be ? (Ne = O == null ? null : (0, Q.jsx)(ut, {
        allowUnlimited: !0,
        currentLimit: ie(O.override_credit_limits),
        getValidationResult: void 0,
        placeholder: ``,
        onClose: () => k(null),
        onSave: be,
        renderLimitContext: e => (0, Q.jsx)(Ye, {
            explainabilityContext: n,
            limit: e,
            lowLimitWarningConfig: A
        })
    }), t[75] = A, t[76] = O, t[77] = n, t[78] = be, t[79] = Ne) : Ne = t[79];
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
        i = re(),
        a = N(),
        l = S(),
        u = o(vn),
        {
            role: d
        } = Fe(),
        [f, p] = (0, On.useState)(``),
        m;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (m = {
        field: `group_name`,
        direction: `ASC`
    }, t[0] = m) : m = t[0];
    let [g, _] = (0, On.useState)(m), [v, y] = (0, On.useState)(null), b = v != null && r != null && ee(Fn) ? r : void 0, x = l?.id, C;
    t[1] !== d || t[2] !== u ? (C = d == null ? u != null && ae(u.role) : ae(d), t[1] = d, t[2] = u, t[3] = C) : C = t[3];
    let w = C,
        T, E;
    t[4] === x ? (T = t[5], E = t[6]) : (T = [`group-spend-controls`, x], E = async () => {
        if (!x) throw Error(`Workspace id is required`);
        return await c.safeGet(`/accounts/{account_id}/spend-controls/groups`, {
            parameters: {
                path: {
                    account_id: x
                }
            }
        })
    }, t[4] = x, t[5] = T, t[6] = E);
    let D = !!x,
        O;
    t[7] !== T || t[8] !== E || t[9] !== D ? (O = {
        queryKey: T,
        queryFn: E,
        enabled: D
    }, t[7] = T, t[8] = E, t[9] = D, t[10] = O) : O = t[10];
    let k = te(O),
        A;
    t[11] === x ? A = t[12] : (A = async e => {
        let {
            groupId: t,
            limit: n
        } = e;
        if (!x) throw Error(`Workspace id is required`);
        return await c.safePatch(`/accounts/{account_id}/groups/{group_id}/spend-controls`, {
            parameters: {
                path: {
                    account_id: x,
                    group_id: t
                }
            },
            requestBody: {
                default_user_credit_limits: G(n)
            }
        })
    }, t[11] = x, t[12] = A);
    let j;
    t[13] !== a || t[14] !== x ? (j = async () => {
        x && (await a.invalidateQueries({
            queryKey: [`group-spend-controls`, x]
        }), await et({
            queryClient: a,
            workspaceId: x,
            refetchType: `all`
        }))
    }, t[13] = a, t[14] = x, t[15] = j) : j = t[15];
    let M;
    t[16] !== A || t[17] !== j ? (M = {
        mutationFn: A,
        onSuccess: j
    }, t[16] = A, t[17] = j, t[18] = M) : M = t[18];
    let F = ne(M),
        I = k.data,
        L, R;
    if (t[19] !== v || t[20] !== n || t[21] !== f || t[22] !== k.isFetching || t[23] !== k.isPending || t[24] !== I || t[25] !== w || t[26] !== i || t[27] !== g || t[28] !== F || t[29] !== x) {
        let e = Array.isArray(I) ? I : I?.items ?? [],
            r = x == null || k.isPending || k.isFetching,
            a = f.trim().toLowerCase(),
            o = a === `` ? e : e.filter(e => e.group_name.toLowerCase().includes(a)),
            c;
        t[32] === g ? c = t[33] : (c = (e, t) => {
            let n;
            if (g.field === `group_name`) n = e.group_name.localeCompare(t.group_name);
            else if (g.field === `num_members`) n = e.num_members - t.num_members;
            else {
                let r = ie(e.default_user_credit_limits),
                    i = ie(t.default_user_credit_limits);
                if (r == null) return i == null ? 0 : 1;
                if (i == null) return -1;
                let a = [r === fe, typeof r == `number` ? r : 0],
                    o = [i === fe, typeof i == `number` ? i : 0];
                n = Number(a[0]) - Number(o[0]) || a[1] - o[1]
            }
            return g.direction === `ASC` ? n : -n
        }, t[32] = g, t[33] = c);
        let l = o.toSorted(c),
            u;
        t[34] !== v || t[35] !== i || t[36] !== F ? (u = async e => {
            if (v != null) try {
                await F.mutateAsync({
                    groupId: v.group_id,
                    limit: e
                }), s().success(i.formatMessage($.limitSaveSuccess), {
                    hasCloseButton: !0
                }), y(null)
            } catch {
                s().warning(i.formatMessage($.limitSaveError), {
                    hasCloseButton: !0
                })
            }
        }, t[34] = v, t[35] = i, t[36] = F, t[37] = u) : u = t[37], L = u;
        let d;
        t[38] === Symbol.for(`react.memo_cache_sentinel`) ? (d = e => p(e.target.value), t[38] = d) : d = t[38];
        let m;
        t[39] === i ? m = t[40] : (m = i.formatMessage($.searchGroupsPlaceholder), t[39] = i, t[40] = m);
        let b;
        t[41] !== f || t[42] !== m ? (b = (0, Q.jsx)(`div`, {
            className: `mb-4.5 flex items-center justify-between`,
            children: (0, Q.jsx)(me, {
                className: `w-full`,
                value: f,
                onChange: d,
                placeholder: m,
                inputClassName: `w-full rounded-full! text-sm`
            })
        }), t[41] = f, t[42] = m, t[43] = b) : b = t[43], R = (0, Q.jsxs)(`section`, {
            children: [b, r ? (0, Q.jsx)(`div`, {
                className: `flex min-h-[18rem] items-center justify-center`,
                children: (0, Q.jsx)(h, {})
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
                        children: (0, Q.jsx)(P, {
                            ...$.groupColumn
                        })
                    }), (0, Q.jsx)(xn, {
                        active: g.field === `num_members`,
                        direction: g.direction,
                        onSort: () => _(gn),
                        children: (0, Q.jsx)(P, {
                            ...$.membersColumn
                        })
                    }), (0, Q.jsx)(xn, {
                        active: g.field === `default_limit`,
                        direction: g.direction,
                        onSort: () => _(hn),
                        children: (0, Q.jsx)(P, {
                            ...$.defaultMonthlyLimitColumn
                        })
                    })]
                }), (0, Q.jsxs)(q.Body, {
                    children: [l.map(e => {
                        let t = ie(e.default_user_credit_limits);
                        return (0, Q.jsxs)(q.Row, {
                            className: `[&>td]:py-3`,
                            children: [(0, Q.jsxs)(q.Cell, {
                                divClassName: `min-h-[40px] min-w-0 items-center`,
                                children: [(0, Q.jsx)(`div`, {
                                    className: `bg-token-bg-tertiary text-token-text-secondary me-3 flex size-8 shrink-0 items-center justify-center rounded-full`,
                                    children: (0, Q.jsx)(Oe, {
                                        className: `icon-sm`
                                    })
                                }), (0, Q.jsx)(B, {
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
                                        disabled: !w,
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
                                children: (0, Q.jsx)(P, {
                                    ...$.noGroupsFound
                                })
                            })
                        })
                    }) : null]
                })]
            })]
        }), t[19] = v, t[20] = n, t[21] = f, t[22] = k.isFetching, t[23] = k.isPending, t[24] = I, t[25] = w, t[26] = i, t[27] = g, t[28] = F, t[29] = x, t[30] = L, t[31] = R
    } else L = t[30], R = t[31];
    let z;
    t[44] !== b || t[45] !== v || t[46] !== n || t[47] !== L ? (z = v == null ? null : (0, Q.jsx)(ut, {
        allowUnlimited: !0,
        currentLimit: ie(v.default_user_credit_limits),
        getValidationResult: void 0,
        placeholder: ``,
        onClose: () => y(null),
        onSave: L,
        renderLimitContext: e => (0, Q.jsx)(Ye, {
            explainabilityContext: n,
            limit: e,
            lowLimitWarningConfig: b
        })
    }), t[44] = b, t[45] = v, t[46] = n, t[47] = L, t[48] = z) : z = t[48];
    let V;
    return t[49] !== R || t[50] !== z ? (V = (0, Q.jsxs)(Q.Fragment, {
        children: [R, z]
    }), t[49] = R, t[50] = z, t[51] = V) : V = t[51], V
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
    t[0] === r ? a = t[1] : (a = (0, Q.jsx)(P, {
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
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, Q.jsx)(P, {
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
    t[4] === n.limit ? c = t[5] : (c = ie([n.limit]), t[4] = n.limit, t[5] = c);
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
                label: (0, Q.jsx)(P, {
                    ...$.userOverrideHardCapTooltipTitle
                }), secondaryLabel: (0, Q.jsxs)(Q.Fragment, {
                    children: [(0, Q.jsx)(P, {
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
                label: (0, Q.jsx)(P, {
                    ...$.groupDefaultHardCapTooltipTitle,
                    values: {
                        groupName: e.group_name
                    }
                }), secondaryLabel: (0, Q.jsx)(P, {
                    ...$.groupDefaultHardCapTooltipDescription
                })
            };
        case `workspace_default`:
            return {
                label: (0, Q.jsx)(P, {
                    ...$.workspaceDefaultHardCapTooltipTitle
                }), secondaryLabel: (0, Q.jsx)(P, {
                    ...$.workspaceDefaultHardCapTooltipDescription,
                    values: {
                        seatType: e.seat_type === kn ? (0, Q.jsx)(P, {
                            ...$.chatgptSeatLabel
                        }) : (0, Q.jsx)(P, {
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
    t[0] === n.limit ? r = t[1] : (r = ie([n.limit]), t[0] = n.limit, t[1] = r);
    let i = r;
    switch (n.source.kind) {
        case `group_default`: {
            let e;
            return t[2] !== n.limit || t[3] !== n.source.group_name || t[4] !== i ? (e = i === `unlimited_platform_max` ? (0, Q.jsx)(P, {
                ...$.groupUnlimitedOutsideOverride,
                values: {
                    groupName: n.source.group_name
                }
            }) : (0, Q.jsx)(P, {
                ...$.groupLimitOutsideOverride,
                values: {
                    groupName: n.source.group_name,
                    limit: n.limit.limit
                }
            }), t[2] = n.limit, t[3] = n.source.group_name, t[4] = i, t[5] = e) : e = t[5], e
        }
        case `workspace_default`: {
            let e;
            return t[6] !== n.limit || t[7] !== n.source.seat_type || t[8] !== i ? (e = i === `unlimited_platform_max` ? (0, Q.jsx)(P, {
                ...$.workspaceUnlimitedOutsideOverride,
                values: {
                    seatType: n.source.seat_type === kn ? (0, Q.jsx)(P, {
                        ...$.chatgptSeatLabel
                    }) : (0, Q.jsx)(P, {
                        ...$.codexSeatLabel
                    })
                }
            }) : (0, Q.jsx)(P, {
                ...$.workspaceLimitOutsideOverride,
                values: {
                    limit: n.limit.limit,
                    seatType: n.source.seat_type === kn ? (0, Q.jsx)(P, {
                        ...$.chatgptSeatLabel
                    }) : (0, Q.jsx)(P, {
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
    let t = G(e);
    return {
        seat_type_credit_limits: {
            [kn]: t,
            [An]: t
        }
    }
}
var Dn, On, Q, kn, An, jn, Mn, Nn, Pn, Fn, In, Ln, Rn, zn, $, Bn = e((() => {
        Dn = U(), ze(), Ne(), K(), je(), Ut(), b(), We(), W(), ct(), Ae(), m(), ue(), Ee(), ke(), Te(), ye(), xe(), D(), He(), w(), i(), _(), l(), f(), C(), Ke(), H(), x(), E(), On = t(R()), L(), I(), lt(), Je(), pe(), se(), Qt(), tt(), dt(), Re(), Q = k(), kn = `default`, An = `usage_based`, jn = 25, Mn = 50, Nn = `3909937021`, Pn = `3002192639`, Fn = `3581456201`, In = `3421588596`, Ln = 400, Rn = 1250, zn = 5e3, $ = j({
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
        I(), Vn = U(), Bn(), $e(), Hn = k(), Un = A(function() {
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
//# sourceMappingURL=90a39c8d-qbnddpli7mhw58va.js.map
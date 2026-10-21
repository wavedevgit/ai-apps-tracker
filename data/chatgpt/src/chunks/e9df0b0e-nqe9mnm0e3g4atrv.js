import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    N as t,
    O as n,
    p as r,
    s as i,
    wn as a
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    bVt as o,
    xVt as s
} from "./conversation-small-nmt18uiom3b14vca.js";
import {
    n as c,
    r as l,
    t as u
} from "./948fe603-orh1h0nmbzil5lh0.js";
async function d({
    signal: e
} = {}) {
    let t = await u.safeGet(`/aardvark/scan_configurations/metadata`, e ? {
            signal: e
        } : void 0),
        n = new Map;
    for (let e of t.items) n.get(e.repo_id)?.state != null && e.state == null || n.set(e.repo_id, e);
    return {
        ...t,
        items: Array.from(n.values())
    }
}

function f(e) {
    if (!e.hid) throw Error(`Scan configuration ${e.id} is missing hid`);
    return e.hid
}
async function p(e) {
    return await u.safeGet(`/aardvark/scan_configurations`, {
        parameters: {
            query: {
                limit: e?.limit ?? S,
                cursor: e?.cursor,
                ...e?.repoId ? {
                    repo_id: e.repoId
                } : {},
                ...e?.repoUrl ? {
                    repo_url: e.repoUrl
                } : {},
                ...e?.scanType ? {
                    scan_type: e.scanType
                } : {},
                ...e?.view === `recently_deleted` ? {
                    recently_deleted: !0
                } : {},
                ...e?.pinnedIds?.length ? {
                    pinned_ids: Array.from(new Set(e.pinnedIds)).slice(0, 20)
                } : {}
            }
        },
        ...e?.signal ? {
            signal: e.signal
        } : {}
    })
}

function m(e, i) {
    "use forget";
    let a = (0, v.c)(49),
        o = t(),
        s = i?.view ?? `active`,
        c;
    a[0] !== s || a[1] !== e ? (c = y(e, s), a[0] = s, a[1] = e, a[2] = c) : c = a[2];
    let l = c,
        u;
    a[3] !== i || a[4] !== s ? (u = async () => {
        let e = i?.pinnedIds?.length ? Array.from(new Set(i.pinnedIds)).slice(0, 20) : void 0;
        return {
            ...await p({
                limit: S,
                pinnedIds: e,
                view: s
            }),
            pinnedIdsForPagination: e
        }
    }, a[3] = i, a[4] = s, a[5] = u) : u = a[5];
    let d;
    a[6] !== l || a[7] !== u ? (d = {
        queryKey: l,
        enabled: !0,
        queryFn: u,
        refetchOnWindowFocus: !1
    }, a[6] = l, a[7] = u, a[8] = d) : d = a[8];
    let {
        data: m,
        isLoading: h,
        refetch: g,
        isFetching: _,
        error: b
    } = n(d), x;
    a[9] !== o || a[10] !== l || a[11] !== s ? (x = async e => await p({
        limit: S,
        cursor: e,
        pinnedIds: o.getQueryData(l)?.pinnedIdsForPagination,
        view: s
    }), a[9] = o, a[10] = l, a[11] = s, a[12] = x) : x = a[12];
    let C;
    a[13] !== o || a[14] !== l ? (C = (e, t) => {
        o.setQueryData(l, n => {
            if (!n || n.next_cursor !== t) return n;
            let r = new Set(n.items.map(f));
            return {
                ...n,
                ...e,
                next_cursor: e.next_cursor,
                items: [...n.items, ...e.items.filter(e => !r.has(f(e)))]
            }
        })
    }, a[13] = o, a[14] = l, a[15] = C) : C = a[15];
    let w;
    a[16] !== x || a[17] !== C ? (w = {
        mutationFn: x,
        onSuccess: C
    }, a[16] = x, a[17] = C, a[18] = w) : w = a[18];
    let T = r(w),
        E, D, O;
    if (a[19] !== m?.items || a[20] !== s) {
        D = new Map, E = new Map, O = new Map;
        for (let e of m?.items ?? []) {
            let t = f(e);
            E.set(e.scan_input.repo_id, t), O.set(t, e.version), O.set(e.id, e.version), D.set(s === `recently_deleted` ? t : e.scan_input.repo_id, e)
        }
        a[19] = m?.items, a[20] = s, a[21] = E, a[22] = D, a[23] = O
    } else E = a[21], D = a[22], O = a[23];
    let k;
    a[24] !== E || a[25] !== D || a[26] !== O ? (k = {
        scanMap: D,
        configIdByRepo: E,
        configVersionById: O
    }, a[24] = E, a[25] = D, a[26] = O, a[27] = k) : k = a[27];
    let {
        scanMap: A,
        configIdByRepo: j,
        configVersionById: M
    } = k, N;
    a[28] !== m || a[29] !== T ? (N = () => {
        m?.next_cursor && !T.isPending && T.mutate(m.next_cursor)
    }, a[28] = m, a[29] = T, a[30] = N) : N = a[30];
    let P = N,
        F = m != null,
        I = m?.total_in_account,
        L = m?.total_visible,
        R = m?.quota_used,
        z = h || _,
        B = m != null && !m.next_cursor && !b,
        V = !!m?.next_cursor,
        H = b ?? T.error,
        U;
    return a[31] !== j || a[32] !== M || a[33] !== P || a[34] !== b || a[35] !== h || a[36] !== T.isError || a[37] !== T.isPending || a[38] !== g || a[39] !== A || a[40] !== L || a[41] !== R || a[42] !== z || a[43] !== B || a[44] !== V || a[45] !== H || a[46] !== F || a[47] !== I ? (U = {
        scanMap: A,
        configIdByRepo: j,
        configVersionById: M,
        hasData: F,
        isInitialLoading: h,
        totalInAccountCount: I,
        totalVisibleCount: L,
        quotaUsedCount: R,
        isLoading: z,
        hasLoadedAllPages: B,
        hasNextPage: V,
        isFetchingNextPage: T.isPending,
        isFetchNextPageError: T.isError,
        fetchNextPage: P,
        refetch: g,
        initialPageError: b,
        error: H
    }, a[31] = j, a[32] = M, a[33] = P, a[34] = b, a[35] = h, a[36] = T.isError, a[37] = T.isPending, a[38] = g, a[39] = A, a[40] = L, a[41] = R, a[42] = z, a[43] = B, a[44] = V, a[45] = H, a[46] = F, a[47] = I, a[48] = U) : U = a[48], U
}
async function h(e, t) {
    return (await u.safeGet(`/aardvark/scan_configurations`, {
        parameters: {
            query: {
                repo_id: e,
                limit: 1,
                ...t?.scanType ? {
                    scan_type: t.scanType
                } : {}
            }
        },
        ...t?.signal ? {
            signal: t.signal
        } : {}
    })).items?.[0] ?? null
}
async function g(e, t) {
    return await u.safeGet(`/aardvark/scan_configurations/{id}`, {
        parameters: {
            path: {
                id: e
            },
            ...t?.includeDeleted ? {
                query: {
                    include_deleted: !0
                }
            } : {}
        },
        ...c(e),
        ...t?.signal ? {
            signal: t.signal
        } : {}
    })
}

function _(e, t, n, r) {
    let i = y(e);
    n.setQueryData(i, e => {
        let n = Array.isArray(e?.items) ? [...e.items] : [],
            i = f(t),
            a = o(n, e => e.id === t.id || f(e) === i);
        if (a >= 0) {
            let e = n[a];
            n[a] = {
                ...t,
                current_step: t.current_step ?? e?.current_step ?? null
            }
        } else n.push({
            ...t,
            current_step: t.current_step ?? null
        });
        let s = a < 0 && r?.isNew === !0;
        return {
            ...e,
            items: n,
            total_in_account: e?.total_in_account === void 0 ? void 0 : e.total_in_account + Number(s),
            ...e?.total_visible === void 0 ? {} : {
                total_visible: e.total_visible + Number(s)
            },
            ...e?.quota_used === void 0 ? {} : {
                quota_used: e.quota_used + Number(s)
            }
        }
    }), n.setQueryData(b(e), e => {
        if (!e) return;
        let n = t.scan_input,
            r = {
                repo_id: n.repo_id,
                repo_url: n.repo_url,
                state: `state` in n ? n.state ?? null : null,
                owner_id: t.owner_id,
                owner_email: t.owner?.email ?? null,
                can_write: t.permissions?.can_write ?? !1
            },
            i = e.items.findIndex(e => e.repo_id === r.repo_id),
            a = [...e.items];
        return i >= 0 ? a[i] = r : a.push(r), {
            ...e,
            items: a
        }
    })
}
var v, y, b, x, S, C = e((() => {
    v = a(), l(), i(), s(), y = (e, t = `active`) => t === `active` ? [`aardvark`, `scan-configs`, e ?? `personal`] : [`aardvark`, `scan-configs`, e ?? `personal`, t], b = e => [`aardvark`, `scan-config-metadata`, e ?? `personal`], x = (e, t) => [`aardvark`, `scan-config-by-repo`, e ?? `personal`, t], S = 200
}));
export {
    f as a, y as c, m as d, p as i, x as l, g as n, C as o, d as r, _ as s, h as t, b as u
};
//# sourceMappingURL=e9df0b0e-nqe9mnm0e3g4atrv.js.map
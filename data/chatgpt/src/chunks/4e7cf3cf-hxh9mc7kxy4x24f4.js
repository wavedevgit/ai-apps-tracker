import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    V1 as t,
    o0 as n,
    q1 as r
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    N as i,
    O as a,
    p as o,
    s,
    wn as c
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    r as l,
    t as u
} from "./948fe603-hmusu36oq8g5vvqo.js";
import {
    o as d
} from "./e9df0b0e-bnvssa5nc586v6ol.js";

function f() {
    return a({
        queryKey: g,
        queryFn: () => u.safeGet(`/aardvark/malware/jobs`),
        refetchInterval: 4e3
    })
}

function p() {
    let e = i();
    return o({
        mutationFn: e => u.safePost(`/aardvark/malware/jobs`, {
            requestBody: e
        }),
        onSuccess: () => {
            e.invalidateQueries({
                queryKey: g
            })
        }
    })
}

function m() {
    let e = i();
    return o({
        mutationFn: async ({
            parentJobId: e,
            question: t,
            targetPath: n
        }) => await u.safePost(`/aardvark/malware/jobs/{job_id}/followups`, {
            parameters: {
                path: {
                    job_id: e
                }
            },
            requestBody: {
                question: t,
                target_path: n ?? null
            }
        }),
        onSuccess: () => {
            e.invalidateQueries({
                queryKey: g
            })
        }
    })
}

function h() {
    let e = i();
    return o({
        mutationFn: async ({
            parentJobId: e
        }) => await u.safePost(`/aardvark/malware/jobs/{job_id}/regenerate-report`, {
            parameters: {
                path: {
                    job_id: e
                }
            }
        }),
        onSuccess: () => {
            e.invalidateQueries({
                queryKey: g
            })
        }
    })
}
var g, _ = e((() => {
    l(), s(), g = [`aardvark`, `malware-jobs`]
}));

function v(e) {
    "use forget";
    let t = (0, j.c)(6),
        r = e === void 0 || e,
        i = n(),
        o = i?.id,
        s = i?.normalizedAccountUserId,
        c = o ?? null,
        l = s ?? null,
        u;
    t[0] !== c || t[1] !== l ? (u = N(c, l), t[0] = c, t[1] = l, t[2] = u) : u = t[2];
    let d = !!(o && s && r),
        f;
    return t[3] !== u || t[4] !== d ? (f = {
        queryKey: u,
        queryFn: y,
        enabled: d,
        staleTime: 9e5,
        refetchOnWindowFocus: !0
    }, t[3] = u, t[4] = d, t[5] = f) : f = t[5], a(f)
}

function y(e) {
    let {
        signal: t
    } = e;
    return P(!1, t)
}

function b() {
    "use forget";
    let e = (0, j.c)(4),
        t = n(),
        r = t?.id,
        a = t?.normalizedAccountUserId,
        o = i(),
        s;
    return e[0] !== r || e[1] !== a || e[2] !== o ? (s = async e => {
        if (!r || !a) return;
        let t = await P(e);
        return o.setQueryData(N(r, a), t), t
    }, e[0] = r, e[1] = a, e[2] = o, e[3] = s) : s = e[3], s
}

function x(e, n, r = t()?.id ?? null, i = t()?.normalizedAccountUserId ?? null) {
    let a = n.trim();
    !a || !r || !i || e.setQueryData(N(r, i), e => {
        if (!e) return;
        let t = e.items ?? [];
        if (t.some(e => e.canonical_url?.trim().toLowerCase() === a.toLowerCase())) return e;
        let n = {
            canonical_url: a
        };
        return {
            ...e,
            items: [...t, n]
        }
    })
}

function S(e) {
    "use forget";
    let t = (0, j.c)(42),
        n;
    bb0: {
        if (!e) {
            let e;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (e = [], t[0] = e) : e = t[0];
            let r;
            t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (r = [], t[1] = r) : r = t[1];
            let i;
            t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (i = [], t[2] = i) : i = t[2];
            let a;
            t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (a = [], t[3] = a) : a = t[3];
            let o;
            t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (o = [], t[4] = o) : o = t[4];
            let s;
            t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (s = {
                repoCsv: ``,
                repoList: e,
                validationFilter: `all`,
                patchFilter: `all`,
                statusesCsv: ``,
                statusList: r,
                critCsv: ``,
                criticalityList: i,
                assigneesCsv: ``,
                assigneeList: a,
                assigneeEmailsCsv: ``,
                assigneeEmailList: o,
                authorsCsv: ``,
                authorList: [],
                sortParam: ``,
                pathPrefixesCsv: ``,
                queryText: ``
            }, t[5] = s) : s = t[5], n = s;
            break bb0
        }
        let r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v, y;
        if (t[6] !== e) {
            let n = new URLSearchParams(e),
                b = n.get(`repo`) ?? ``,
                x = n.get(`validated`),
                S = n.get(`has_patch`),
                C = x === `true` ? `validated` : x === `false` ? `unvalidated` : `all`,
                w = S === `true` ? `with_patch` : S === `false` ? `without_patch` : `all`,
                T = n.get(`status`) ?? ``,
                E = n.get(`criticality`) ?? ``,
                D = n.get(`assignee`) ?? ``,
                O = n.get(`assignee_email`) ?? ``,
                k = n.get(`author`) ?? ``;
            a = n.get(`sort`) ?? ``, r = n.get(`path_prefix`) ?? ``, i = n.get(`q`) ?? ``, o = b, f = b ? M(b) : [], p = C, m = w, h = T, g = T ? M(T) : [], _ = E, v = E ? M(E) : [], y = D, s = D ? M(D) : [], c = O, l = O ? M(O) : [], u = k, d = k ? M(k) : [], t[6] = e, t[7] = r, t[8] = i, t[9] = a, t[10] = o, t[11] = s, t[12] = c, t[13] = l, t[14] = u, t[15] = d, t[16] = f, t[17] = p, t[18] = m, t[19] = h, t[20] = g, t[21] = _, t[22] = v, t[23] = y
        } else r = t[7],
        i = t[8],
        a = t[9],
        o = t[10],
        s = t[11],
        c = t[12],
        l = t[13],
        u = t[14],
        d = t[15],
        f = t[16],
        p = t[17],
        m = t[18],
        h = t[19],
        g = t[20],
        _ = t[21],
        v = t[22],
        y = t[23];
        let b;t[24] !== r || t[25] !== i || t[26] !== a || t[27] !== o || t[28] !== s || t[29] !== c || t[30] !== l || t[31] !== u || t[32] !== d || t[33] !== f || t[34] !== p || t[35] !== m || t[36] !== h || t[37] !== g || t[38] !== _ || t[39] !== v || t[40] !== y ? (b = {
            repoCsv: o,
            repoList: f,
            validationFilter: p,
            patchFilter: m,
            statusesCsv: h,
            statusList: g,
            critCsv: _,
            criticalityList: v,
            assigneesCsv: y,
            assigneeList: s,
            assigneeEmailsCsv: c,
            assigneeEmailList: l,
            authorsCsv: u,
            authorList: d,
            sortParam: a,
            pathPrefixesCsv: r,
            queryText: i
        }, t[24] = r, t[25] = i, t[26] = a, t[27] = o, t[28] = s, t[29] = c, t[30] = l, t[31] = u, t[32] = d, t[33] = f, t[34] = p, t[35] = m, t[36] = h, t[37] = g, t[38] = _, t[39] = v, t[40] = y, t[41] = b) : b = t[41],
        n = b
    }
    return n
}

function C(e, t) {
    "use forget";
    let r = (0, j.c)(34),
        i = n(),
        o = i?.id,
        s = i?.normalizedAccountUserId,
        {
            repoCsv: c,
            validationFilter: l,
            patchFilter: d,
            statusesCsv: f,
            critCsv: p,
            assigneesCsv: m,
            assigneeEmailsCsv: h,
            authorsCsv: g,
            sortParam: _,
            pathPrefixesCsv: v,
            queryText: y
        } = S(e),
        b = t?.limit,
        x = t?.cursor,
        C = o ?? null,
        w = s ?? null,
        T = b ?? null,
        E = x ?? null,
        D = _ || null,
        O = v || null,
        k = y || null,
        A;
    r[0] !== h || r[1] !== m || r[2] !== g || r[3] !== p || r[4] !== d || r[5] !== c || r[6] !== f || r[7] !== C || r[8] !== w || r[9] !== T || r[10] !== E || r[11] !== D || r[12] !== O || r[13] !== k || r[14] !== l ? (A = [`aardvark`, `findings`, `scan`, C, w, c, l, f, p, m, h, g, T, E, D, O, k, d], r[0] = h, r[1] = m, r[2] = g, r[3] = p, r[4] = d, r[5] = c, r[6] = f, r[7] = C, r[8] = w, r[9] = T, r[10] = E, r[11] = D, r[12] = O, r[13] = k, r[14] = l, r[15] = A) : A = r[15];
    let N;
    r[16] !== h || r[17] !== m || r[18] !== g || r[19] !== p || r[20] !== x || r[21] !== b || r[22] !== d || r[23] !== v || r[24] !== y || r[25] !== c || r[26] !== _ || r[27] !== f || r[28] !== l ? (N = async e => {
        let {
            signal: t
        } = e, n = {}, r = typeof b == `number` && Number.isFinite(b) && b > 0 ? b : 500, i = typeof x == `number` && Number.isFinite(x) && x >= 0, a = i ? x : 0;
        if (n.limit = r, i && (n.cursor = String(a)), c) {
            let e = M(c);
            e.length > 0 && (n.repo = e.join(`,`))
        }
        if (l === `validated` ? n.validated = !0 : l === `unvalidated` && (n.validated = !1), d === `with_patch` ? n.has_patch = !0 : d === `without_patch` && (n.has_patch = !1), _ && (n.sort = _), f) {
            let e = M(f);
            e.length > 0 && (n.status = e.join(`,`))
        }
        if (p) {
            let e = M(p);
            e.length > 0 && (n.criticality = e.join(`,`))
        }
        if (m || h) {
            let e = [...m ? M(m) : [], ...h ? M(h) : []];
            e.length > 0 && (n.assignee = Array.from(new Set(e)).join(`,`))
        }
        if (g) {
            let e = M(g);
            e.length > 0 && (n.author = e.join(`,`))
        }
        if (v) {
            let e = M(v);
            e.length > 0 && (n.path_prefix = e.join(`,`))
        }
        let o = y.trim();
        return o && (n.q = o), await u.safeGet(`/aardvark/scan-findings`, {
            parameters: {
                query: n
            },
            signal: t
        })
    }, r[16] = h, r[17] = m, r[18] = g, r[19] = p, r[20] = x, r[21] = b, r[22] = d, r[23] = v, r[24] = y, r[25] = c, r[26] = _, r[27] = f, r[28] = l, r[29] = N) : N = r[29];
    let P = !!(o && s),
        F;
    return r[30] !== A || r[31] !== N || r[32] !== P ? (F = {
        queryKey: A,
        queryFn: N,
        enabled: P,
        staleTime: 3e4,
        refetchOnWindowFocus: !1
    }, r[30] = A, r[31] = N, r[32] = P, r[33] = F) : F = r[33], a(F)
}

function w(e) {
    "use forget";
    let t = (0, j.c)(8),
        n = e ?? null,
        r;
    t[0] === n ? r = t[1] : (r = [`aardvark`, `findings`, `recommended`, n], t[0] = n, t[1] = r);
    let i = !!n,
        o;
    t[2] === n ? o = t[3] : (o = async () => {
        if (!n) throw Error(`No configured scan id found for recommended findings`);
        let e = await u.safeGet(`/aardvark/rankings`, {
            parameters: {
                query: {
                    configured_scan_id: n
                }
            }
        });
        return {
            items: e.ranking_item_list ?? [],
            total: e.ranking_item_list?.length ?? 0,
            ranking_end_time: e.ranking_end_time ?? null
        }
    }, t[2] = n, t[3] = o);
    let s;
    return t[4] !== r || t[5] !== i || t[6] !== o ? (s = {
        queryKey: r,
        enabled: i,
        queryFn: o,
        staleTime: 3e4,
        refetchOnWindowFocus: !0
    }, t[4] = r, t[5] = i, t[6] = o, t[7] = s) : s = t[7], a(s)
}

function T(e, n = t()?.id ?? null) {
    return [`aardvark`, `finding`, n, e ?? null]
}

function E(e) {
    "use forget";
    let t = (0, j.c)(9),
        r = n()?.id,
        i = r ?? null,
        o;
    t[0] !== e || t[1] !== i ? (o = T(e, i), t[0] = e, t[1] = i, t[2] = o) : o = t[2];
    let s;
    t[3] === e ? s = t[4] : (s = async () => {
        if (!e) throw Error(`Missing finding id`);
        return await u.safeGet(`/aardvark/scan-findings/{id}`, {
            parameters: {
                path: {
                    id: e
                }
            }
        })
    }, t[3] = e, t[4] = s);
    let c = !!(e && r),
        l;
    return t[5] !== o || t[6] !== s || t[7] !== c ? (l = {
        queryKey: o,
        queryFn: s,
        enabled: c,
        staleTime: 3e4,
        refetchInterval: D,
        refetchOnWindowFocus: !0
    }, t[5] = o, t[6] = s, t[7] = c, t[8] = l) : l = t[8], a(l)
}

function D(e) {
    let t = e.state.data?.manual_patch_request_status;
    return t === `queued` || t === `running` ? 1e3 : !1
}

function O(e, t, n) {
    e.setQueriesData({
        queryKey: [`aardvark`, `findings`],
        exact: !1
    }, e => {
        if (!e) return e;
        let r = (e.items ?? []).map(e => e.hid === t ? A(e, n) : e);
        return {
            ...e,
            items: r
        }
    })
}

function k(e, t, n) {
    e.setQueryData(T(t), e => e && A(e, n))
}

function A(e, t) {
    let n = {
        ...e,
        ...t
    };
    return t.proposed_patch == null && e.proposed_patch != null && (n.proposed_patch = e.proposed_patch), t.commit_analysis == null && e.commit_analysis != null && (n.commit_analysis = e.commit_analysis), n
}
var j, M, N, P, F = e((() => {
        j = c(), l(), r(), s(), M = e => e.split(`,`).map(e => e.trim()).filter(e => e && e.toLowerCase() !== `all`), N = (e = t()?.id ?? null, n = t()?.normalizedAccountUserId ?? null) => [`aardvark`, `scan-findings`, `accessible-repos`, e, n], P = async (e, t) => await u.safeGet(`/aardvark/scan-findings/list-accessible-repos`, {
            parameters: {
                query: {
                    force_refresh: e
                }
            },
            signal: t
        })
    })),
    I = e((() => {
        _(), d(), F()
    }));
export {
    k as a, C as c, b as d, _ as f, p as g, m as h, x as i, w as l, h as m, T as n, O as o, f as p, F as r, E as s, I as t, v as u
};
//# sourceMappingURL=4e7cf3cf-hxh9mc7kxy4x24f4.js.map
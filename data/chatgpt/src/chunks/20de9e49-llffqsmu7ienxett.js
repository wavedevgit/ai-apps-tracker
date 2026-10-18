import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    C1 as n,
    HQ as r,
    UQ as i,
    hU as a,
    pU as o,
    u1 as s,
    vN as c,
    yN as l
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as u,
    Bn as d,
    O as f,
    Pt as p,
    Rn as m,
    Vn as h,
    jt as g,
    s as _,
    wn as v,
    zn as y
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    cVt as b,
    sVt as x
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    r as S,
    t as C
} from "./948fe603-jmn3j8ixfx3i0uqo.js";
import {
    a as w,
    l as T
} from "./5b59f3e4-f9v1k69a0tdaqzc0.js";
import {
    t as E,
    u as D
} from "./4e7cf3cf-bytq9jsazycjc5xj.js";
import {
    C as O,
    g as k,
    n as A,
    p as j,
    t as M,
    y as N
} from "./6fd89734-me0mlo15lw6zwz6w.js";

function P(e, t) {
    let n = new URLSearchParams(e).get(t);
    return !n || n.trim() === `` ? [] : n.split(`,`).map(e => e.trim()).filter(Boolean)
}

function F(e) {
    return M.some(t => e.has(t))
}

function I({
    defaultRecommendedOnly: e = !0,
    persistRecommendedParam: t = !0,
    defaultCriticalities: n = V,
    defaultStatuses: r = H,
    severityParamName: a = `criticality`,
    fetchAccessibleRepos: o = !0
} = {}) {
    let s = g(),
        c = p(),
        {
            data: u,
            isLoading: d,
            error: f
        } = D(o),
        m = (0, z.useMemo)(() => b(i(u?.items, e => e.canonical_url), e => ({
            ...e,
            label: N(e.canonical_url)
        })), [u]),
        h = (0, z.useMemo)(() => [{
            param: a,
            values: n
        }, {
            param: `status`,
            values: r
        }], [a, n, r]),
        _ = (0, z.useRef)({});
    return l(() => {
        let e = new URLSearchParams(s.search),
            n = !1;
        a === `sev` && (F(e) || A(e, k()) && (n = !0)), t && (e.has(`recommended`) || (e.set(`recommended`, `true`), n = !0));
        for (let {
                param: t,
                values: r
            }
            of h) e.has(t) || r.length === 0 || _.current[t] || (e.set(t, r.join(`,`)), _.current[t] = !0, n = !0);
        n && c({
            search: `?${e.toString()}`,
            hash: s.hash
        }, {
            replace: !0
        })
    }, [s.search, c, t, h]), {
        filters: (0, z.useMemo)(() => {
            let n = new URLSearchParams(s.search),
                r = new Set(P(s.search, `status`)),
                i = new Set(P(s.search, a)),
                o = P(s.search, `repo`),
                c = [...P(s.search, `assignee`), ...P(s.search, `assignee_email`)],
                l = P(s.search, `path_prefix`),
                u = n.get(`q`)?.trim() ?? ``,
                d = n.get(`validated`),
                f = n.get(`has_patch`),
                p = d === `true` ? `validated` : d === `false` ? `unvalidated` : `all`,
                m = f === `true` ? `with_patch` : f === `false` ? `without_patch` : `all`,
                h = n.get(`recommended`),
                g = t ? h === null ? e : h === `true` : e,
                _ = new Set(Array.from(r)),
                v = new Set(Array.from(i)),
                y = new Set(o),
                b = y.size === 1 ? Array.from(y)[0] : `all`,
                x = new Set(c),
                S = P(s.search, `author`),
                C = new Set(S);
            return {
                selectedCriticalities: v,
                securityOnly: !1,
                privacyOnly: !1,
                selectedStatuses: _,
                selectedRepo: b,
                selectedRepos: y,
                selectedPathPrefixes: new Set(l),
                keywordQuery: u,
                recommendedOnly: g,
                existsInHeadOnly: !1,
                validationFilter: p,
                patchFilter: m,
                selectedAssignees: x,
                selectedAuthors: C
            }
        }, [a, e, s.search, t]),
        onChangeFilters: e => {
            let i = new URLSearchParams(s.search),
                o = e;
            if (i.delete(`cursor`), i.delete(`page`), t && (o.recommendedOnly ? i.set(`recommended`, `true`) : i.set(`recommended`, `false`)), o.selectedRepos && o.selectedRepos.size > 0) {
                let e = Array.from(o.selectedRepos).join(`,`);
                i.set(`repo`, e)
            } else i.delete(`repo`);
            o.selectedCriticalities && o.selectedCriticalities.size > 0 ? i.set(a, Array.from(o.selectedCriticalities).join(`,`)) : n.length > 0 ? i.set(a, ``) : i.delete(a), o.selectedStatuses && o.selectedStatuses.size > 0 ? i.set(`status`, Array.from(o.selectedStatuses).join(`,`)) : r.length > 0 || i.has(`status`) ? i.set(`status`, ``) : i.delete(`status`), o.validationFilter === `validated` ? i.set(`validated`, `true`) : o.validationFilter === `unvalidated` ? i.set(`validated`, `false`) : i.delete(`validated`), o.patchFilter === `with_patch` ? i.set(`has_patch`, `true`) : o.patchFilter === `without_patch` ? i.set(`has_patch`, `false`) : i.delete(`has_patch`), o.selectedAssignees && o.selectedAssignees.size > 0 ? i.set(`assignee`, Array.from(o.selectedAssignees).join(`,`)) : i.delete(`assignee`), i.delete(`assignee_email`), o.selectedAuthors && o.selectedAuthors.size > 0 ? i.set(`author`, Array.from(o.selectedAuthors).join(`,`)) : i.delete(`author`), o.selectedPathPrefixes && o.selectedPathPrefixes.size > 0 ? i.set(`path_prefix`, Array.from(o.selectedPathPrefixes).join(`,`)) : i.delete(`path_prefix`);
            let l = o.keywordQuery.trim();
            l ? i.set(`q`, l) : i.delete(`q`), a === `sev` && O(i), c({
                search: `?${i.toString()}`,
                hash: s.hash
            }, {
                replace: !0
            })
        },
        accessibleRepos: m,
        accessibleReposLoading: d,
        accessibleReposError: f
    }
}

function L({
    children: e,
    defaultRecommendedOnly: t = !0,
    persistRecommendedParam: n = !0,
    defaultCriticalities: r = V,
    defaultStatuses: i = H,
    severityParamName: o = `criticality`,
    suppressAccessibleReposErrorToast: s = !1,
    fetchAccessibleRepos: c = !0
}) {
    let {
        filters: u,
        onChangeFilters: d,
        accessibleRepos: f,
        accessibleReposLoading: p,
        accessibleReposError: m
    } = I({
        defaultRecommendedOnly: t,
        persistRecommendedParam: n,
        defaultCriticalities: r,
        defaultStatuses: i,
        severityParamName: o,
        fetchAccessibleRepos: c
    }), h = a(), g = y();
    return l(() => {
        if (s || !m) return;
        let e = g.formatMessage(w.accessibleReposLoad, {
            details: m.message
        });
        h.danger(e)
    }, [m, g, s, h]), (0, B.jsx)(U.Provider, {
        value: {
            filters: u,
            onChangeFilters: d,
            accessibleRepos: f,
            accessibleReposLoading: p,
            accessibleReposError: m
        },
        children: e
    })
}

function R() {
    let e = (0, z.useContext)(U);
    if (!e) throw Error(`useAardvarkFiltersContext must be used within AardvarkFiltersProvider`);
    return e
}
var z, B, V, H, U, W = e((() => {
    j(), T(), E(), o(), c(), x(), r(), z = t(h()), m(), u(), B = d(), V = [], H = [], U = (0, z.createContext)(null)
}));

function G(e, t, r, i) {
    "use forget";
    let a = (0, K.c)(18),
        o = r === void 0 ? 50 : r,
        s = i === void 0 || i,
        c = n(),
        l = c?.id,
        u = c?.normalizedAccountUserId,
        d = String(t ?? ``),
        p;
    a[0] === d ? p = a[1] : (p = d.trim(), a[0] = d, a[1] = p);
    let m = p,
        h = Math.max(1, Math.min(o, 500)),
        g;
    a[2] === e ? g = a[3] : (g = e && e.size > 0 ? Array.from(e).sort().join(`,`) : null, a[2] = e, a[3] = g);
    let _ = g,
        v = l ?? null,
        y = u ?? null,
        b = m || null,
        x;
    a[4] !== h || a[5] !== _ || a[6] !== v || a[7] !== y || a[8] !== b ? (x = [`aardvark`, `authors`, v, y, _, b, h], a[4] = h, a[5] = _, a[6] = v, a[7] = y, a[8] = b, a[9] = x) : x = a[9];
    let S;
    a[10] !== h || a[11] !== m || a[12] !== _ ? (S = async e => {
        let {
            signal: t
        } = e, n = {
            limit: h
        };
        return _ && (n.repo = _), m && (n.q = m), await C.safeGet(`/aardvark/scan-findings/list-authors`, {
            parameters: {
                query: n
            },
            signal: t
        })
    }, a[10] = h, a[11] = m, a[12] = _, a[13] = S) : S = a[13];
    let w = !!(l && u && s),
        T;
    return a[14] !== w || a[15] !== x || a[16] !== S ? (T = {
        queryKey: x,
        queryFn: S,
        staleTime: 3e4,
        refetchOnWindowFocus: !0,
        enabled: w
    }, a[14] = w, a[15] = x, a[16] = S, a[17] = T) : T = a[17], f(T)
}
var K, q = e((() => {
    K = v(), S(), s(), _()
}));
export {
    R as a, W as i, G as n, L as r, q as t
};
//# sourceMappingURL=20de9e49-llffqsmu7ienxett.js.map
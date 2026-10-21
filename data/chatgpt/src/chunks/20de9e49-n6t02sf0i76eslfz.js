import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    BU as n,
    HU as r,
    LN as i,
    R1 as a,
    RN as o,
    Z1 as s,
    g$ as c,
    h$ as l
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    At as u,
    Bn as d,
    Nt as f,
    O as p,
    Q as m,
    Rn as h,
    Vn as g,
    s as _,
    wn as v,
    zn as y
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    mVt as b,
    pVt as x
} from "./conversation-small-nmt18uiom3b14vca.js";
import {
    r as S,
    t as C
} from "./948fe603-orh1h0nmbzil5lh0.js";
import {
    a as w,
    l as T
} from "./5b59f3e4-f9v1k69a0tdaqzc0.js";
import {
    t as E,
    u as D
} from "./4e7cf3cf-n5b6ob5ak9khuvte.js";
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
    severityParamName: i = `criticality`,
    fetchAccessibleRepos: a = !0
} = {}) {
    let s = u(),
        l = f(),
        {
            data: d,
            isLoading: p,
            error: m
        } = D(a),
        h = (0, z.useMemo)(() => b(c(d?.items, e => e.canonical_url), e => ({
            ...e,
            label: N(e.canonical_url)
        })), [d]),
        g = (0, z.useMemo)(() => [{
            param: i,
            values: n
        }, {
            param: `status`,
            values: r
        }], [i, n, r]),
        _ = (0, z.useRef)({});
    return o(() => {
        let e = new URLSearchParams(s.search),
            n = !1;
        i === `sev` && (F(e) || A(e, k()) && (n = !0)), t && (e.has(`recommended`) || (e.set(`recommended`, `true`), n = !0));
        for (let {
                param: t,
                values: r
            }
            of g) e.has(t) || r.length === 0 || _.current[t] || (e.set(t, r.join(`,`)), _.current[t] = !0, n = !0);
        n && l({
            search: `?${e.toString()}`,
            hash: s.hash
        }, {
            replace: !0
        })
    }, [s.search, l, t, g]), {
        filters: (0, z.useMemo)(() => {
            let n = new URLSearchParams(s.search),
                r = new Set(P(s.search, `status`)),
                a = new Set(P(s.search, i)),
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
                v = new Set(Array.from(a)),
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
        }, [i, e, s.search, t]),
        onChangeFilters: e => {
            let a = new URLSearchParams(s.search),
                o = e;
            if (a.delete(`cursor`), a.delete(`page`), t && (o.recommendedOnly ? a.set(`recommended`, `true`) : a.set(`recommended`, `false`)), o.selectedRepos && o.selectedRepos.size > 0) {
                let e = Array.from(o.selectedRepos).join(`,`);
                a.set(`repo`, e)
            } else a.delete(`repo`);
            o.selectedCriticalities && o.selectedCriticalities.size > 0 ? a.set(i, Array.from(o.selectedCriticalities).join(`,`)) : n.length > 0 ? a.set(i, ``) : a.delete(i), o.selectedStatuses && o.selectedStatuses.size > 0 ? a.set(`status`, Array.from(o.selectedStatuses).join(`,`)) : r.length > 0 || a.has(`status`) ? a.set(`status`, ``) : a.delete(`status`), o.validationFilter === `validated` ? a.set(`validated`, `true`) : o.validationFilter === `unvalidated` ? a.set(`validated`, `false`) : a.delete(`validated`), o.patchFilter === `with_patch` ? a.set(`has_patch`, `true`) : o.patchFilter === `without_patch` ? a.set(`has_patch`, `false`) : a.delete(`has_patch`), o.selectedAssignees && o.selectedAssignees.size > 0 ? a.set(`assignee`, Array.from(o.selectedAssignees).join(`,`)) : a.delete(`assignee`), a.delete(`assignee_email`), o.selectedAuthors && o.selectedAuthors.size > 0 ? a.set(`author`, Array.from(o.selectedAuthors).join(`,`)) : a.delete(`author`), o.selectedPathPrefixes && o.selectedPathPrefixes.size > 0 ? a.set(`path_prefix`, Array.from(o.selectedPathPrefixes).join(`,`)) : a.delete(`path_prefix`);
            let c = o.keywordQuery.trim();
            c ? a.set(`q`, c) : a.delete(`q`), i === `sev` && O(a), l({
                search: `?${a.toString()}`,
                hash: s.hash
            }, {
                replace: !0
            })
        },
        accessibleRepos: h,
        accessibleReposLoading: p,
        accessibleReposError: m
    }
}

function L({
    children: e,
    defaultRecommendedOnly: t = !0,
    persistRecommendedParam: n = !0,
    defaultCriticalities: i = V,
    defaultStatuses: a = H,
    severityParamName: s = `criticality`,
    suppressAccessibleReposErrorToast: c = !1,
    fetchAccessibleRepos: l = !0
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
        defaultCriticalities: i,
        defaultStatuses: a,
        severityParamName: s,
        fetchAccessibleRepos: l
    }), h = r(), g = y();
    return o(() => {
        if (c || !m) return;
        let e = g.formatMessage(w.accessibleReposLoad, {
            details: m.message
        });
        h.danger(e)
    }, [m, g, c, h]), (0, B.jsx)(U.Provider, {
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
    j(), T(), E(), n(), i(), x(), l(), z = t(g()), h(), m(), B = d(), V = [], H = [], U = (0, z.createContext)(null)
}));

function G(e, t, n, r) {
    "use forget";
    let i = (0, K.c)(18),
        a = n === void 0 ? 50 : n,
        o = r === void 0 || r,
        c = s(),
        l = c?.id,
        u = c?.normalizedAccountUserId,
        d = String(t ?? ``),
        f;
    i[0] === d ? f = i[1] : (f = d.trim(), i[0] = d, i[1] = f);
    let m = f,
        h = Math.max(1, Math.min(a, 500)),
        g;
    i[2] === e ? g = i[3] : (g = e && e.size > 0 ? Array.from(e).sort().join(`,`) : null, i[2] = e, i[3] = g);
    let _ = g,
        v = l ?? null,
        y = u ?? null,
        b = m || null,
        x;
    i[4] !== h || i[5] !== _ || i[6] !== v || i[7] !== y || i[8] !== b ? (x = [`aardvark`, `authors`, v, y, _, b, h], i[4] = h, i[5] = _, i[6] = v, i[7] = y, i[8] = b, i[9] = x) : x = i[9];
    let S;
    i[10] !== h || i[11] !== m || i[12] !== _ ? (S = async e => {
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
    }, i[10] = h, i[11] = m, i[12] = _, i[13] = S) : S = i[13];
    let w = !!(l && u && o),
        T;
    return i[14] !== w || i[15] !== x || i[16] !== S ? (T = {
        queryKey: x,
        queryFn: S,
        staleTime: 3e4,
        refetchOnWindowFocus: !0,
        enabled: w
    }, i[14] = w, i[15] = x, i[16] = S, i[17] = T) : T = i[17], p(T)
}
var K, q = e((() => {
    K = v(), S(), a(), _()
}));
export {
    R as a, W as i, G as n, L as r, q as t
};
//# sourceMappingURL=20de9e49-n6t02sf0i76eslfz.js.map
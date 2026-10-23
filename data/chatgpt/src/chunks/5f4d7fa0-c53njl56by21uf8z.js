import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    GE as n,
    I7 as r,
    Iv as i,
    JE as a,
    L8 as o,
    M7 as s,
    Oct as c,
    Q_ as l,
    S5 as u,
    Sat as d,
    U1 as f,
    bat as p,
    cK as m,
    cct as h,
    j5 as g,
    lK as _,
    q1 as v,
    qE as y,
    x5 as b,
    z8 as x
} from "./4813494d-mdvd4786a87166cc.js";
import {
    wn as S
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    DFn as C,
    EFn as ee,
    HFn as te,
    Hyn as w,
    MFn as T,
    Qun as E,
    RQ as D,
    RTn as O,
    SFn as k,
    Trt as A,
    Vyn as j,
    _nt as ne,
    gnt as re,
    mun as ie,
    qQ as M,
    wrt as N,
    yFn as P,
    zTn as F
} from "./conversation-small-bcbq46iub1p0ca1t.js";
var I, L, R = e((() => {
    w(), F(), te(), ee(), ne(), t(), v(), a(), d(), _(), r(), u(), I = x(({
        connectorId: e,
        templateId: t
    }) => o(() => {
        let n = b(),
            r = f();
        return {
            queryKey: [...T(), `codex-template`, r?.id, r?.normalizedAccountUserId, e, t],
            queryFn: async () => {
                let [r, i] = await Promise.all([j(n, e, O.CODEX, {
                    staleTime: 0
                }), re.safeGet(`/connectors/by-template`, {
                    parameters: {
                        query: {
                            template_id: t
                        }
                    },
                    additionalHeaders: {
                        [p]: O.CODEX
                    }
                })]);
                return {
                    connectors: [...r ? [r] : [], ...i.connectors]
                }
            },
            enabled: r?.normalizedAccountUserId != null && C()
        }
    })), L = x(({
        productSku: e,
        purpose: t
    }) => o(() => {
        let r = T(t, !0, !1);
        return {
            queryKey: r,
            queryFn: async () => {
                let r = await s.safePost(`/aip/connectors/list_accessible`, {
                        requestBody: {
                            principals: [],
                            purpose: t
                        },
                        parameters: {
                            query: {
                                include_actions: !1,
                                external_logos: !0
                            }
                        },
                        additionalHeaders: e ? {
                            [p]: e
                        } : void 0
                    }),
                    i = y();
                return {
                    connectors: (r.connectors ?? []).map(e => n(e, {
                        preferIconAssets: i
                    })),
                    templates: r.app_templates ?? []
                }
            },
            placeholderData: t == null ? m(`system-connectors`, 1, r, {
                ignoreQuotaExceededError: !0
            }) : void 0,
            enabled: f()?.normalizedAccountUserId != null && C()
        }
    }))
}));

function z(e) {
    return e.id === X || e.template_id === `templated_apps_GitHubEnterprise`
}

function B(e) {
    return Array.from(e.values()).filter(z).filter(e => e.labels?.admin_only_connector !== `true`).filter(Q).sort((e, t) => e.id === X ? -1 : t.id === X ? 1 : e.name.localeCompare(t.name))
}

function V(e) {
    return Array.from(e.values()).some(e => z(e) && Q(e))
}

function H(e = {}) {
    let {
        data: t
    } = L(e);
    return t && V(N(t))
}

function U({
    candidates: e,
    connectorLinks: t,
    preferredConnectorId: n,
    selectedConnectorId: r
}) {
    for (let t of [r, n]) {
        let n = e.find(e => e.id === t);
        if (n && Q(n)) return n.id
    }
    let i = e.find(e => Q(e) && $(e.id, t));
    if (i) return i.id;
    let a = e.find(e => e.id === X && Q(e));
    return a ? a.id : e.find(Q)?.id ?? X
}

function W() {
    "use forget";
    let e = (0, Y.c)(7),
        {
            data: t,
            isLoading: n,
            error: r,
            refetch: i
        } = g(K),
        a;
    e[0] === t?.connectors ? a = e[1] : (a = B(new Map(t?.connectors.map(G))), e[0] = t?.connectors, e[1] = a);
    let o = a,
        s = r ?? null,
        c;
    return e[2] !== o || e[3] !== n || e[4] !== i || e[5] !== s ? (c = {
        candidates: o,
        isLoading: n,
        error: s,
        refetch: i
    }, e[2] = o, e[3] = n, e[4] = i, e[5] = s, e[6] = c) : c = e[6], c
}

function G(e) {
    return [e.id, e]
}

function K() {
    return I({
        connectorId: X,
        templateId: Z
    })
}

function q() {
    "use forget";
    let e = (0, Y.c)(2),
        {
            candidates: t,
            isLoading: n,
            error: r
        } = W();
    if (n || r) return;
    let i;
    return e[0] === t ? i = e[1] : (i = t.some(Q), e[0] = t, e[1] = i), i
}

function J(e) {
    "use forget";
    let t = (0, Y.c)(12),
        {
            connectorId: n,
            redirectAfter: r,
            onNoConnector: i,
            onNoOAuthClients: a
        } = e === void 0 ? {} : e,
        o = r === void 0 ? `/codex/cloud` : r,
        {
            candidates: s,
            isLoading: c,
            error: l,
            refetch: u
        } = W(),
        {
            data: d,
            isLoading: f
        } = E(),
        p;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (p = {
        productSku: O.CODEX
    }, t[0] = p) : p = t[0];
    let {
        connectorLinks: m,
        isLoading: g
    } = k(p), _ = U({
        candidates: s,
        connectorLinks: m,
        preferredConnectorId: d?.preferred_github_connector_id,
        selectedConnectorId: n
    }), v = M(h.GITHUB_CONNECTOR, _, `github`, o, O.CODEX, i, a), y = v.error ?? l, b;
    t[1] !== v || t[2] !== u ? (b = () => {
        v.refetch(), u()
    }, t[1] = v, t[2] = u, t[3] = b) : b = t[3];
    let x = (c || l != null || s.length > 0) && v.isConnected,
        S = v.isLoading || c || g || f,
        C;
    return t[4] !== s || t[5] !== v || t[6] !== _ || t[7] !== y || t[8] !== b || t[9] !== x || t[10] !== S ? (C = {
        ...v,
        error: y,
        refetch: b,
        isConnected: x,
        isLoading: S,
        connectorId: _,
        githubConnectorCandidates: s
    }, t[4] = s, t[5] = v, t[6] = _, t[7] = y, t[8] = b, t[9] = x, t[10] = S, t[11] = C) : C = t[11], C
}
var Y, X, Z, Q, $, ae = e((() => {
    Y = S(), c(), P(), i(), D(), F(), A(), t(), ie(), R(), X = l[h.GITHUB_CONNECTOR], Z = `templated_apps_GitHubEnterprise`, Q = e => e.status !== `DISABLED_BY_ADMIN`, $ = (e, t) => (t.get(e)?.length ?? 0) > 0
}));
export {
    q as a, J as i, ae as n, I as o, H as r, R as s, X as t
};
//# sourceMappingURL=5f4d7fa0-c53njl56by21uf8z.js.map
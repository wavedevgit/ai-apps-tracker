import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as t,
    A8 as n,
    GE as r,
    Iv as i,
    J5 as a,
    JE as o,
    L8 as s,
    Q_ as c,
    R5 as l,
    U1 as u,
    Y7 as d,
    cK as f,
    hat as p,
    lK as m,
    pat as h,
    q1 as g,
    qE as _,
    tct as v,
    xct as y,
    z5 as b,
    z8 as x
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    wn as S
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    FTn as C,
    Lyn as ee,
    PTn as w,
    RQ as T,
    Ryn as E,
    Trt as te,
    Yun as D,
    _nt as O,
    dun as k,
    gnt as A,
    kFn as j,
    lFn as ne,
    mFn as M,
    oFn as re,
    pFn as ie,
    qQ as N,
    wrt as P,
    yFn as F
} from "./conversation-small-dwpaie1hln28efxb.js";
var I, L, R = e((() => {
    E(), C(), j(), ie(), O(), n(), g(), o(), p(), m(), t(), b(), I = x(({
        connectorId: e,
        templateId: t
    }) => s(() => {
        let n = l(),
            r = u();
        return {
            queryKey: [...F(), `codex-template`, r?.id, r?.normalizedAccountUserId, e, t],
            queryFn: async () => {
                let [r, i] = await Promise.all([ee(n, e, w.CODEX, {
                    staleTime: 0
                }), A.safeGet(`/connectors/by-template`, {
                    parameters: {
                        query: {
                            template_id: t
                        }
                    },
                    additionalHeaders: {
                        [h]: w.CODEX
                    }
                })]);
                return {
                    connectors: [...r ? [r] : [], ...i.connectors]
                }
            },
            enabled: r?.normalizedAccountUserId != null && M()
        }
    })), L = x(({
        productSku: e,
        purpose: t
    }) => s(() => {
        let n = F(t, !0, !1);
        return {
            queryKey: n,
            queryFn: async () => {
                let n = await d.safePost(`/aip/connectors/list_accessible`, {
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
                            [h]: e
                        } : void 0
                    }),
                    i = _();
                return {
                    connectors: (n.connectors ?? []).map(e => r(e, {
                        preferIconAssets: i
                    })),
                    templates: n.app_templates ?? []
                }
            },
            placeholderData: t == null ? f(`system-connectors`, 1, n, {
                ignoreQuotaExceededError: !0
            }) : void 0,
            enabled: u()?.normalizedAccountUserId != null && M()
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
    return t && V(P(t))
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
        } = a(K),
        o;
    e[0] === t?.connectors ? o = e[1] : (o = B(new Map(t?.connectors.map(G))), e[0] = t?.connectors, e[1] = o);
    let s = o,
        c = r ?? null,
        l;
    return e[2] !== s || e[3] !== n || e[4] !== i || e[5] !== c ? (l = {
        candidates: s,
        isLoading: n,
        error: c,
        refetch: i
    }, e[2] = s, e[3] = n, e[4] = i, e[5] = c, e[6] = l) : l = e[6], l
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
        } = D(),
        p;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (p = {
        productSku: w.CODEX
    }, t[0] = p) : p = t[0];
    let {
        connectorLinks: m,
        isLoading: h
    } = ne(p), g = U({
        candidates: s,
        connectorLinks: m,
        preferredConnectorId: d?.preferred_github_connector_id,
        selectedConnectorId: n
    }), _ = N(v.GITHUB_CONNECTOR, g, `github`, o, w.CODEX, i, a), y = _.error ?? l, b;
    t[1] !== _ || t[2] !== u ? (b = () => {
        _.refetch(), u()
    }, t[1] = _, t[2] = u, t[3] = b) : b = t[3];
    let x = (c || l != null || s.length > 0) && _.isConnected,
        S = _.isLoading || c || h || f,
        C;
    return t[4] !== s || t[5] !== _ || t[6] !== g || t[7] !== y || t[8] !== b || t[9] !== x || t[10] !== S ? (C = {
        ..._,
        error: y,
        refetch: b,
        isConnected: x,
        isLoading: S,
        connectorId: g,
        githubConnectorCandidates: s
    }, t[4] = s, t[5] = _, t[6] = g, t[7] = y, t[8] = b, t[9] = x, t[10] = S, t[11] = C) : C = t[11], C
}
var Y, X, Z, Q, $, ae = e((() => {
    Y = S(), y(), re(), i(), T(), C(), te(), n(), k(), R(), X = c[v.GITHUB_CONNECTOR], Z = `templated_apps_GitHubEnterprise`, Q = e => e.status !== `DISABLED_BY_ADMIN`, $ = (e, t) => (t.get(e)?.length ?? 0) > 0
}));
export {
    q as a, J as i, ae as n, I as o, H as r, R as s, X as t
};
//# sourceMappingURL=5f4d7fa0-me27tfro8khlo54d.js.map
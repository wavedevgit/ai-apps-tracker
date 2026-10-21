import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    BE as t,
    C8 as n,
    F7 as r,
    Fv as i,
    HE as a,
    Ist as o,
    Jit as s,
    P1 as c,
    P5 as l,
    R1 as u,
    T5 as d,
    T8 as f,
    UE as p,
    Xit as m,
    Z_ as h,
    dK as g,
    fK as _,
    g8 as v,
    nct as y,
    w5 as b,
    z7 as x
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    wn as S
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Art as C,
    Cnt as ee,
    DPn as te,
    Iun as ne,
    LPn as w,
    MPn as T,
    Qln as E,
    RQ as D,
    Snt as O,
    ayn as k,
    iTn as A,
    jPn as j,
    jrt as M,
    oyn as re,
    qPn as ie,
    qQ as N,
    rTn as P,
    wPn as F
} from "./conversation-small-ikg0dwuw782klweb.js";
var I, L, R = e((() => {
    re(), A(), ie(), j(), ee(), v(), u(), p(), m(), _(), x(), d(), I = f(({
        connectorId: e,
        templateId: t
    }) => n(() => {
        let n = b(),
            r = c();
        return {
            queryKey: [...w(), `codex-template`, r?.id, r?.normalizedAccountUserId, e, t],
            queryFn: async () => {
                let [r, i] = await Promise.all([k(n, e, P.CODEX, {
                    staleTime: 0
                }), O.safeGet(`/connectors/by-template`, {
                    parameters: {
                        query: {
                            template_id: t
                        }
                    },
                    additionalHeaders: {
                        [s]: P.CODEX
                    }
                })]);
                return {
                    connectors: [...r ? [r] : [], ...i.connectors]
                }
            },
            enabled: r?.normalizedAccountUserId != null && T()
        }
    })), L = f(({
        productSku: e,
        purpose: i
    }) => n(() => {
        let n = w(i, !0, !1);
        return {
            queryKey: n,
            queryFn: async () => {
                let n = await r.safePost(`/aip/connectors/list_accessible`, {
                        requestBody: {
                            principals: [],
                            purpose: i
                        },
                        parameters: {
                            query: {
                                include_actions: !1,
                                external_logos: !0
                            }
                        },
                        additionalHeaders: e ? {
                            [s]: e
                        } : void 0
                    }),
                    o = a();
                return {
                    connectors: (n.connectors ?? []).map(e => t(e, {
                        preferIconAssets: o
                    })),
                    templates: n.app_templates ?? []
                }
            },
            placeholderData: i == null ? g(`system-connectors`, 1, n, {
                ignoreQuotaExceededError: !0
            }) : void 0,
            enabled: c()?.normalizedAccountUserId != null && T()
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
    return t && V(C(t))
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
        } = l(K),
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
        s = r === void 0 ? `/codex/cloud` : r,
        {
            candidates: c,
            isLoading: l,
            error: u,
            refetch: d
        } = W(),
        {
            data: f,
            isLoading: p
        } = ne(),
        m;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (m = {
        productSku: P.CODEX
    }, t[0] = m) : m = t[0];
    let {
        connectorLinks: h,
        isLoading: g
    } = te(m), _ = U({
        candidates: c,
        connectorLinks: h,
        preferredConnectorId: f?.preferred_github_connector_id,
        selectedConnectorId: n
    }), v = N(o.GITHUB_CONNECTOR, _, `github`, s, P.CODEX, i, a), y = v.error ?? u, b;
    t[1] !== v || t[2] !== d ? (b = () => {
        v.refetch(), d()
    }, t[1] = v, t[2] = d, t[3] = b) : b = t[3];
    let x = (l || u != null || c.length > 0) && v.isConnected,
        S = v.isLoading || l || g || p,
        C;
    return t[4] !== c || t[5] !== v || t[6] !== _ || t[7] !== y || t[8] !== b || t[9] !== x || t[10] !== S ? (C = {
        ...v,
        error: y,
        refetch: b,
        isConnected: x,
        isLoading: S,
        connectorId: _,
        githubConnectorCandidates: c
    }, t[4] = c, t[5] = v, t[6] = _, t[7] = y, t[8] = b, t[9] = x, t[10] = S, t[11] = C) : C = t[11], C
}
var Y, X, Z, Q, $, ae = e((() => {
    Y = S(), y(), F(), i(), D(), A(), M(), v(), E(), R(), X = h[o.GITHUB_CONNECTOR], Z = `templated_apps_GitHubEnterprise`, Q = e => e.status !== `DISABLED_BY_ADMIN`, $ = (e, t) => (t.get(e)?.length ?? 0) > 0
}));
export {
    q as a, J as i, ae as n, I as o, H as r, R as s, X as t
};
//# sourceMappingURL=5f4d7fa0-y1o3zavyaxi1zm3x.js.map
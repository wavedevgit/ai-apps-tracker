import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    BE as t,
    Bst as n,
    C8 as r,
    F7 as i,
    Fv as a,
    HE as o,
    P1 as s,
    P5 as c,
    Qit as l,
    R1 as u,
    T5 as d,
    T8 as f,
    UE as p,
    Z_ as m,
    dK as h,
    eat as g,
    fK as _,
    g8 as v,
    oct as y,
    w5 as b,
    z7 as x
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    wn as S
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Art as C,
    Cnt as ee,
    Iun as w,
    JPn as te,
    MPn as ne,
    NPn as T,
    OPn as E,
    Qln as D,
    RPn as O,
    RQ as k,
    Snt as A,
    TPn as j,
    ayn as M,
    iTn as N,
    jrt as re,
    oyn as ie,
    qQ as P,
    rTn as F
} from "./conversation-small-nmt18uiom3b14vca.js";
var I, L, R = e((() => {
    ie(), N(), te(), ne(), ee(), v(), u(), p(), g(), _(), x(), d(), I = f(({
        connectorId: e,
        templateId: t
    }) => r(() => {
        let n = b(),
            r = s();
        return {
            queryKey: [...O(), `codex-template`, r?.id, r?.normalizedAccountUserId, e, t],
            queryFn: async () => {
                let [r, i] = await Promise.all([M(n, e, F.CODEX, {
                    staleTime: 0
                }), A.safeGet(`/connectors/by-template`, {
                    parameters: {
                        query: {
                            template_id: t
                        }
                    },
                    additionalHeaders: {
                        [l]: F.CODEX
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
        purpose: n
    }) => r(() => {
        let r = O(n, !0, !1);
        return {
            queryKey: r,
            queryFn: async () => {
                let r = await i.safePost(`/aip/connectors/list_accessible`, {
                        requestBody: {
                            principals: [],
                            purpose: n
                        },
                        parameters: {
                            query: {
                                include_actions: !1,
                                external_logos: !0
                            }
                        },
                        additionalHeaders: e ? {
                            [l]: e
                        } : void 0
                    }),
                    a = o();
                return {
                    connectors: (r.connectors ?? []).map(e => t(e, {
                        preferIconAssets: a
                    })),
                    templates: r.app_templates ?? []
                }
            },
            placeholderData: n == null ? h(`system-connectors`, 1, r, {
                ignoreQuotaExceededError: !0
            }) : void 0,
            enabled: s()?.normalizedAccountUserId != null && T()
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
        } = c(K),
        a;
    e[0] === t?.connectors ? a = e[1] : (a = B(new Map(t?.connectors.map(G))), e[0] = t?.connectors, e[1] = a);
    let o = a,
        s = r ?? null,
        l;
    return e[2] !== o || e[3] !== n || e[4] !== i || e[5] !== s ? (l = {
        candidates: o,
        isLoading: n,
        error: s,
        refetch: i
    }, e[2] = o, e[3] = n, e[4] = i, e[5] = s, e[6] = l) : l = e[6], l
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
            connectorId: r,
            redirectAfter: i,
            onNoConnector: a,
            onNoOAuthClients: o
        } = e === void 0 ? {} : e,
        s = i === void 0 ? `/codex/cloud` : i,
        {
            candidates: c,
            isLoading: l,
            error: u,
            refetch: d
        } = W(),
        {
            data: f,
            isLoading: p
        } = w(),
        m;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (m = {
        productSku: F.CODEX
    }, t[0] = m) : m = t[0];
    let {
        connectorLinks: h,
        isLoading: g
    } = E(m), _ = U({
        candidates: c,
        connectorLinks: h,
        preferredConnectorId: f?.preferred_github_connector_id,
        selectedConnectorId: r
    }), v = P(n.GITHUB_CONNECTOR, _, `github`, s, F.CODEX, a, o), y = v.error ?? u, b;
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
    Y = S(), y(), j(), a(), k(), N(), re(), v(), D(), R(), X = m[n.GITHUB_CONNECTOR], Z = `templated_apps_GitHubEnterprise`, Q = e => e.status !== `DISABLED_BY_ADMIN`, $ = (e, t) => (t.get(e)?.length ?? 0) > 0
}));
export {
    q as a, J as i, ae as n, I as o, H as r, R as s, X as t
};
//# sourceMappingURL=5f4d7fa0-cfnccctp9kn5bxge.js.map
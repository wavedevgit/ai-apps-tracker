import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $st as t,
    C5 as n,
    C8 as r,
    Git as i,
    HE as a,
    I1 as o,
    L7 as s,
    M1 as c,
    M5 as l,
    N7 as u,
    Nst as d,
    Pv as f,
    S5 as p,
    VE as m,
    X_ as h,
    dK as g,
    m8 as _,
    qit as v,
    uK as y,
    x8 as b,
    zE as x
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Tn as S
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    Ert as C,
    FQ as ee,
    Jln as w,
    MPn as T,
    Mun as te,
    NPn as E,
    OPn as ne,
    RPn as D,
    TPn as O,
    Trt as k,
    WQ as A,
    YPn as j,
    _nt as M,
    aTn as N,
    iTn as P,
    nyn as re,
    tyn as ie,
    vnt as F
} from "./conversation-small-cawdu7il3ha6y70c.js";
var I, L, R = e((() => {
    re(), N(), j(), T(), F(), _(), o(), a(), v(), g(), s(), n(), I = r(({
        connectorId: e,
        templateId: t
    }) => b(() => {
        let n = p(),
            r = c();
        return {
            queryKey: [...D(), `codex-template`, r?.id, r?.normalizedAccountUserId, e, t],
            queryFn: async () => {
                let [r, a] = await Promise.all([ie(n, e, P.CODEX, {
                    staleTime: 0
                }), M.safeGet(`/connectors/by-template`, {
                    parameters: {
                        query: {
                            template_id: t
                        }
                    },
                    additionalHeaders: {
                        [i]: P.CODEX
                    }
                })]);
                return {
                    connectors: [...r ? [r] : [], ...a.connectors]
                }
            },
            enabled: r?.normalizedAccountUserId != null && E()
        }
    })), L = r(({
        productSku: e,
        purpose: t
    }) => b(() => {
        let n = D(t, !0, !1);
        return {
            queryKey: n,
            queryFn: async () => {
                let n = await u.safePost(`/aip/connectors/list_accessible`, {
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
                            [i]: e
                        } : void 0
                    }),
                    r = m();
                return {
                    connectors: (n.connectors ?? []).map(e => x(e, {
                        preferIconAssets: r
                    })),
                    templates: n.app_templates ?? []
                }
            },
            placeholderData: t == null ? y(`system-connectors`, 1, n, {
                ignoreQuotaExceededError: !0
            }) : void 0,
            enabled: c()?.normalizedAccountUserId != null && E()
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
    return t && V(k(t))
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
        o = r === void 0 ? `/codex/cloud` : r,
        {
            candidates: s,
            isLoading: c,
            error: l,
            refetch: u
        } = W(),
        {
            data: f,
            isLoading: p
        } = te(),
        m;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (m = {
        productSku: P.CODEX
    }, t[0] = m) : m = t[0];
    let {
        connectorLinks: h,
        isLoading: g
    } = ne(m), _ = U({
        candidates: s,
        connectorLinks: h,
        preferredConnectorId: f?.preferred_github_connector_id,
        selectedConnectorId: n
    }), v = A(d.GITHUB_CONNECTOR, _, `github`, o, P.CODEX, i, a), y = v.error ?? l, b;
    t[1] !== v || t[2] !== u ? (b = () => {
        v.refetch(), u()
    }, t[1] = v, t[2] = u, t[3] = b) : b = t[3];
    let x = (c || l != null || s.length > 0) && v.isConnected,
        S = v.isLoading || c || g || p,
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
    Y = S(), t(), O(), f(), ee(), N(), C(), _(), w(), R(), X = h[d.GITHUB_CONNECTOR], Z = `templated_apps_GitHubEnterprise`, Q = e => e.status !== `DISABLED_BY_ADMIN`, $ = (e, t) => (t.get(e)?.length ?? 0) > 0
}));
export {
    q as a, J as i, ae as n, I as o, H as r, R as s, X as t
};
//# sourceMappingURL=5f4d7fa0-b7743t275etbjxn4.js.map
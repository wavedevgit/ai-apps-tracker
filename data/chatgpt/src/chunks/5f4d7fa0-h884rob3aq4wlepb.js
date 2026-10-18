import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B6 as t,
    CE as n,
    J8 as r,
    M_ as i,
    RG as a,
    Y6 as o,
    Y8 as s,
    a7 as c,
    git as l,
    gv as u,
    i5 as d,
    ist as f,
    l7 as p,
    o1 as m,
    q6 as h,
    u1 as g,
    vit as _,
    wE as v,
    wst as y,
    xE as b,
    zG as x
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    wn as S
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Crt as C,
    Gwn as w,
    HQ as ee,
    Hvn as T,
    MPn as E,
    NQ as D,
    Pln as O,
    Vvn as k,
    Wwn as A,
    cPn as j,
    dPn as M,
    gPn as N,
    gnt as te,
    hPn as ne,
    hnt as re,
    vun as ie,
    wrt as P,
    xPn as F
} from "./conversation-small-fym1zmu9zimymmm1.js";
var I, L, R = e((() => {
    T(), w(), E(), ne(), te(), t(), g(), v(), _(), x(), p(), s(), I = o(({
        connectorId: e,
        templateId: t
    }) => h(() => {
        let n = r(),
            i = m();
        return {
            queryKey: [...F(), `codex-template`, i?.id, i?.normalizedAccountUserId, e, t],
            queryFn: async () => {
                let [r, i] = await Promise.all([k(n, e, A.CODEX, {
                    staleTime: 0
                }), re.safeGet(`/connectors/by-template`, {
                    parameters: {
                        query: {
                            template_id: t
                        }
                    },
                    additionalHeaders: {
                        [l]: A.CODEX
                    }
                })]);
                return {
                    connectors: [...r ? [r] : [], ...i.connectors]
                }
            },
            enabled: i?.normalizedAccountUserId != null && N()
        }
    })), L = o(({
        productSku: e,
        purpose: t
    }) => h(() => {
        let r = F(t, !0, !1);
        return {
            queryKey: r,
            queryFn: async () => {
                let r = await c.safePost(`/aip/connectors/list_accessible`, {
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
                            [l]: e
                        } : void 0
                    }),
                    i = n();
                return {
                    connectors: (r.connectors ?? []).map(e => b(e, {
                        preferIconAssets: i
                    })),
                    templates: r.app_templates ?? []
                }
            },
            placeholderData: t == null ? a(`system-connectors`, 1, r, {
                ignoreQuotaExceededError: !0
            }) : void 0,
            enabled: m()?.normalizedAccountUserId != null && N()
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
        } = d(K),
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
            isLoading: p
        } = ie(),
        m;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (m = {
        productSku: A.CODEX
    }, t[0] = m) : m = t[0];
    let {
        connectorLinks: h,
        isLoading: g
    } = M(m), _ = U({
        candidates: s,
        connectorLinks: h,
        preferredConnectorId: d?.preferred_github_connector_id,
        selectedConnectorId: n
    }), v = ee(f.GITHUB_CONNECTOR, _, `github`, o, A.CODEX, i, a), y = v.error ?? l, b;
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
    Y = S(), y(), j(), u(), D(), w(), P(), t(), O(), R(), X = i[f.GITHUB_CONNECTOR], Z = `templated_apps_GitHubEnterprise`, Q = e => e.status !== `DISABLED_BY_ADMIN`, $ = (e, t) => (t.get(e)?.length ?? 0) > 0
}));
export {
    q as a, J as i, ae as n, I as o, H as r, R as s, X as t
};
//# sourceMappingURL=5f4d7fa0-h884rob3aq4wlepb.js.map
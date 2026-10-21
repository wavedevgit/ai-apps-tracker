import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    GE as t,
    I8 as n,
    Iv as r,
    J7 as i,
    JE as a,
    L5 as o,
    Q7 as s,
    Q_ as c,
    Qst as l,
    R5 as u,
    R8 as d,
    U1 as f,
    cK as p,
    fat as m,
    k8 as h,
    lK as g,
    q1 as _,
    q5 as v,
    qE as y,
    uat as b,
    vct as x
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    wn as S
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Crt as C,
    JPn as ee,
    Jln as w,
    KQ as te,
    LQ as ne,
    Mun as T,
    VPn as E,
    WPn as D,
    YPn as O,
    eFn as k,
    gTn as A,
    gnt as j,
    hTn as M,
    hnt as N,
    uFn as P,
    vyn as re,
    wrt as ie,
    yyn as F
} from "./conversation-small-ocicxxw6jegn4vux.js";
var I, L, R = e((() => {
    F(), A(), P(), ee(), j(), h(), _(), a(), m(), g(), s(), u(), I = d(({
        connectorId: e,
        templateId: t
    }) => n(() => {
        let n = o(),
            r = f();
        return {
            queryKey: [...k(), `codex-template`, r?.id, r?.normalizedAccountUserId, e, t],
            queryFn: async () => {
                let [r, i] = await Promise.all([re(n, e, M.CODEX, {
                    staleTime: 0
                }), N.safeGet(`/connectors/by-template`, {
                    parameters: {
                        query: {
                            template_id: t
                        }
                    },
                    additionalHeaders: {
                        [b]: M.CODEX
                    }
                })]);
                return {
                    connectors: [...r ? [r] : [], ...i.connectors]
                }
            },
            enabled: r?.normalizedAccountUserId != null && O()
        }
    })), L = d(({
        productSku: e,
        purpose: r
    }) => n(() => {
        let n = k(r, !0, !1);
        return {
            queryKey: n,
            queryFn: async () => {
                let n = await i.safePost(`/aip/connectors/list_accessible`, {
                        requestBody: {
                            principals: [],
                            purpose: r
                        },
                        parameters: {
                            query: {
                                include_actions: !1,
                                external_logos: !0
                            }
                        },
                        additionalHeaders: e ? {
                            [b]: e
                        } : void 0
                    }),
                    a = y();
                return {
                    connectors: (n.connectors ?? []).map(e => t(e, {
                        preferIconAssets: a
                    })),
                    templates: n.app_templates ?? []
                }
            },
            placeholderData: r == null ? p(`system-connectors`, 1, n, {
                ignoreQuotaExceededError: !0
            }) : void 0,
            enabled: f()?.normalizedAccountUserId != null && O()
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
        } = v(K),
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
            error: u,
            refetch: d
        } = W(),
        {
            data: f,
            isLoading: p
        } = T(),
        m;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (m = {
        productSku: M.CODEX
    }, t[0] = m) : m = t[0];
    let {
        connectorLinks: h,
        isLoading: g
    } = D(m), _ = U({
        candidates: s,
        connectorLinks: h,
        preferredConnectorId: f?.preferred_github_connector_id,
        selectedConnectorId: n
    }), v = te(l.GITHUB_CONNECTOR, _, `github`, o, M.CODEX, i, a), y = v.error ?? u, b;
    t[1] !== v || t[2] !== d ? (b = () => {
        v.refetch(), d()
    }, t[1] = v, t[2] = d, t[3] = b) : b = t[3];
    let x = (c || u != null || s.length > 0) && v.isConnected,
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
    Y = S(), x(), E(), r(), ne(), A(), ie(), h(), w(), R(), X = c[l.GITHUB_CONNECTOR], Z = `templated_apps_GitHubEnterprise`, Q = e => e.status !== `DISABLED_BY_ADMIN`, $ = (e, t) => (t.get(e)?.length ?? 0) > 0
}));
export {
    q as a, J as i, ae as n, I as o, H as r, R as s, X as t
};
//# sourceMappingURL=5f4d7fa0-ozobd91aufocy1xp.js.map
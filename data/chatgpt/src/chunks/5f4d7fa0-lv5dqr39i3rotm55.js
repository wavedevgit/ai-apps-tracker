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
    R5 as l,
    R8 as u,
    U1 as d,
    bct as f,
    cK as p,
    ect as m,
    fat as h,
    k8 as g,
    lK as _,
    mat as v,
    q1 as y,
    q5 as b,
    qE as x
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    wn as S
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    FTn as C,
    Lyn as w,
    PTn as T,
    RQ as ee,
    Ryn as te,
    Trt as E,
    Yun as D,
    _nt as O,
    dun as k,
    gnt as A,
    kFn as j,
    lFn as M,
    mFn as N,
    oFn as P,
    pFn as F,
    qQ as I,
    wrt as L,
    yFn as R
} from "./conversation-small-m08q51xmfe7gjq3d.js";
var z, B, V = e((() => {
    te(), C(), j(), F(), O(), g(), y(), a(), v(), _(), s(), l(), z = u(({
        connectorId: e,
        templateId: t
    }) => n(() => {
        let n = o(),
            r = d();
        return {
            queryKey: [...R(), `codex-template`, r?.id, r?.normalizedAccountUserId, e, t],
            queryFn: async () => {
                let [r, i] = await Promise.all([w(n, e, T.CODEX, {
                    staleTime: 0
                }), A.safeGet(`/connectors/by-template`, {
                    parameters: {
                        query: {
                            template_id: t
                        }
                    },
                    additionalHeaders: {
                        [h]: T.CODEX
                    }
                })]);
                return {
                    connectors: [...r ? [r] : [], ...i.connectors]
                }
            },
            enabled: r?.normalizedAccountUserId != null && N()
        }
    })), B = u(({
        productSku: e,
        purpose: r
    }) => n(() => {
        let n = R(r, !0, !1);
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
                            [h]: e
                        } : void 0
                    }),
                    a = x();
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
            enabled: d()?.normalizedAccountUserId != null && N()
        }
    }))
}));

function H(e) {
    return e.id === X || e.template_id === `templated_apps_GitHubEnterprise`
}

function U(e) {
    return Array.from(e.values()).filter(H).filter(e => e.labels?.admin_only_connector !== `true`).filter(Q).sort((e, t) => e.id === X ? -1 : t.id === X ? 1 : e.name.localeCompare(t.name))
}

function W(e) {
    return Array.from(e.values()).some(e => H(e) && Q(e))
}

function G(e = {}) {
    let {
        data: t
    } = B(e);
    return t && W(L(t))
}

function K({
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

function q() {
    "use forget";
    let e = (0, Y.c)(7),
        {
            data: t,
            isLoading: n,
            error: r,
            refetch: i
        } = b(ne),
        a;
    e[0] === t?.connectors ? a = e[1] : (a = U(new Map(t?.connectors.map(J))), e[0] = t?.connectors, e[1] = a);
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

function J(e) {
    return [e.id, e]
}

function ne() {
    return z({
        connectorId: X,
        templateId: Z
    })
}

function re() {
    "use forget";
    let e = (0, Y.c)(2),
        {
            candidates: t,
            isLoading: n,
            error: r
        } = q();
    if (n || r) return;
    let i;
    return e[0] === t ? i = e[1] : (i = t.some(Q), e[0] = t, e[1] = i), i
}

function ie(e) {
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
        } = q(),
        {
            data: d,
            isLoading: f
        } = D(),
        p;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (p = {
        productSku: T.CODEX
    }, t[0] = p) : p = t[0];
    let {
        connectorLinks: h,
        isLoading: g
    } = M(p), _ = K({
        candidates: s,
        connectorLinks: h,
        preferredConnectorId: d?.preferred_github_connector_id,
        selectedConnectorId: n
    }), v = I(m.GITHUB_CONNECTOR, _, `github`, o, T.CODEX, i, a), y = v.error ?? l, b;
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
    Y = S(), f(), P(), r(), ee(), C(), E(), g(), k(), V(), X = c[m.GITHUB_CONNECTOR], Z = `templated_apps_GitHubEnterprise`, Q = e => e.status !== `DISABLED_BY_ADMIN`, $ = (e, t) => (t.get(e)?.length ?? 0) > 0
}));
export {
    re as a, ie as i, ae as n, z as o, G as r, V as s, X as t
};
//# sourceMappingURL=5f4d7fa0-lv5dqr39i3rotm55.js.map
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Iv as t,
    Q_ as n,
    Qst as r,
    k8 as i,
    q5 as a,
    vct as o
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    wn as s
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Jln as c,
    KQ as l,
    LQ as u,
    Mun as d,
    VPn as f,
    WPn as p,
    gTn as m,
    hTn as h
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    o as g,
    s as _
} from "./5f4d7fa0-ozobd91aufocy1xp.js";

function v(e) {
    return e.id === E || e.template_id === `templated_apps_GitLab`
}

function y(e) {
    return Array.from(e.values()).filter(v).filter(e => e.labels?.admin_only_connector !== `true`).filter(O).sort((e, t) => e.id === E ? -1 : t.id === E ? 1 : e.name.localeCompare(t.name))
}

function b({
    candidates: e,
    connectorLinks: t,
    preferredConnectorId: n,
    selectedConnectorId: r
}) {
    for (let t of [r, n]) {
        let n = e.find(e => e.id === t);
        if (n && O(n)) return n.id
    }
    let i = e.find(e => O(e) && k(e.id, t));
    if (i) return i.id;
    let a = e.find(e => e.id === E && O(e));
    return a ? a.id : e.find(O)?.id
}

function x() {
    "use forget";
    let e = (0, T.c)(7),
        {
            data: t,
            isLoading: n,
            error: r,
            refetch: i
        } = a(C),
        o;
    e[0] === t?.connectors ? o = e[1] : (o = y(new Map(t?.connectors.map(S))), e[0] = t?.connectors, e[1] = o);
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

function S(e) {
    return [e.id, e]
}

function C() {
    return g({
        connectorId: E,
        templateId: D
    })
}

function w(e) {
    "use forget";
    let t = (0, T.c)(11),
        {
            connectorId: n,
            redirectAfter: i,
            onNoConnector: a,
            onNoOAuthClients: o
        } = e === void 0 ? {} : e,
        s = i === void 0 ? `/codex/cloud` : i,
        {
            candidates: c,
            isLoading: u,
            error: f,
            refetch: m
        } = x(),
        {
            data: g,
            isLoading: _
        } = d(),
        v;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (v = {
        productSku: h.CODEX
    }, t[0] = v) : v = t[0];
    let {
        connectorLinks: y,
        isLoading: S
    } = p(v), C = b({
        candidates: c,
        connectorLinks: y,
        preferredConnectorId: g?.preferred_gitlab_connector_id,
        selectedConnectorId: n
    }), w = l(r.GITLAB_CONNECTOR, C ?? ``, `gitlab`, s, h.CODEX, a, o), E = w.error ?? f, D;
    t[1] !== w || t[2] !== m ? (D = () => {
        w.refetch(), m()
    }, t[1] = w, t[2] = m, t[3] = D) : D = t[3];
    let O = w.isLoading || u || S || _,
        k = C ?? ``,
        A;
    return t[4] !== c || t[5] !== w || t[6] !== E || t[7] !== D || t[8] !== O || t[9] !== k ? (A = {
        ...w,
        error: E,
        refetch: D,
        isLoading: O,
        connectorId: k,
        gitlabConnectorCandidates: c
    }, t[4] = c, t[5] = w, t[6] = E, t[7] = D, t[8] = O, t[9] = k, t[10] = A) : A = t[10], A
}
var T, E, D, O, k, A = e((() => {
    T = s(), o(), f(), t(), u(), m(), i(), c(), _(), E = n[r.GITLAB_CONNECTOR], D = `templated_apps_GitLab`, O = e => e.status !== `DISABLED_BY_ADMIN`, k = (e, t) => (t.get(e)?.length ?? 0) > 0
}));
export {
    w as i, D as n, A as r, E as t
};
//# sourceMappingURL=ab92372e-h3j4qii1au9y3ur0.js.map
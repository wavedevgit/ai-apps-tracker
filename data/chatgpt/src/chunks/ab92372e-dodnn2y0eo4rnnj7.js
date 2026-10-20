import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $st as t,
    M5 as n,
    Nst as r,
    Pv as i,
    X_ as a,
    m8 as o
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Tn as s
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    FQ as c,
    Jln as l,
    Mun as u,
    OPn as d,
    TPn as f,
    WQ as p,
    aTn as m,
    iTn as h
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    o as g,
    s as _
} from "./5f4d7fa0-b7743t275etbjxn4.js";

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
            isLoading: r,
            error: i,
            refetch: a
        } = n(C),
        o;
    e[0] === t?.connectors ? o = e[1] : (o = y(new Map(t?.connectors.map(S))), e[0] = t?.connectors, e[1] = o);
    let s = o,
        c = i ?? null,
        l;
    return e[2] !== s || e[3] !== r || e[4] !== a || e[5] !== c ? (l = {
        candidates: s,
        isLoading: r,
        error: c,
        refetch: a
    }, e[2] = s, e[3] = r, e[4] = a, e[5] = c, e[6] = l) : l = e[6], l
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
            isLoading: l,
            error: f,
            refetch: m
        } = x(),
        {
            data: g,
            isLoading: _
        } = u(),
        v;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (v = {
        productSku: h.CODEX
    }, t[0] = v) : v = t[0];
    let {
        connectorLinks: y,
        isLoading: S
    } = d(v), C = b({
        candidates: c,
        connectorLinks: y,
        preferredConnectorId: g?.preferred_gitlab_connector_id,
        selectedConnectorId: n
    }), w = p(r.GITLAB_CONNECTOR, C ?? ``, `gitlab`, s, h.CODEX, a, o), E = w.error ?? f, D;
    t[1] !== w || t[2] !== m ? (D = () => {
        w.refetch(), m()
    }, t[1] = w, t[2] = m, t[3] = D) : D = t[3];
    let O = w.isLoading || l || S || _,
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
    T = s(), t(), f(), i(), c(), m(), o(), l(), _(), E = a[r.GITLAB_CONNECTOR], D = `templated_apps_GitLab`, O = e => e.status !== `DISABLED_BY_ADMIN`, k = (e, t) => (t.get(e)?.length ?? 0) > 0
}));
export {
    w as i, D as n, A as r, E as t
};
//# sourceMappingURL=ab92372e-dodnn2y0eo4rnnj7.js.map
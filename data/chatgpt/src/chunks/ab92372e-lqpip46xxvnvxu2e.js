import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Fv as t,
    Ist as n,
    P5 as r,
    Z_ as i,
    g8 as a,
    nct as o
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    wn as s
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    DPn as c,
    Iun as l,
    Qln as u,
    RQ as d,
    iTn as f,
    qQ as p,
    rTn as m,
    wPn as h
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    o as g,
    s as _
} from "./5f4d7fa0-y1o3zavyaxi1zm3x.js";

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
            error: i,
            refetch: a
        } = r(C),
        o;
    e[0] === t?.connectors ? o = e[1] : (o = y(new Map(t?.connectors.map(S))), e[0] = t?.connectors, e[1] = o);
    let s = o,
        c = i ?? null,
        l;
    return e[2] !== s || e[3] !== n || e[4] !== a || e[5] !== c ? (l = {
        candidates: s,
        isLoading: n,
        error: c,
        refetch: a
    }, e[2] = s, e[3] = n, e[4] = a, e[5] = c, e[6] = l) : l = e[6], l
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
            connectorId: r,
            redirectAfter: i,
            onNoConnector: a,
            onNoOAuthClients: o
        } = e === void 0 ? {} : e,
        s = i === void 0 ? `/codex/cloud` : i,
        {
            candidates: u,
            isLoading: d,
            error: f,
            refetch: h
        } = x(),
        {
            data: g,
            isLoading: _
        } = l(),
        v;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (v = {
        productSku: m.CODEX
    }, t[0] = v) : v = t[0];
    let {
        connectorLinks: y,
        isLoading: S
    } = c(v), C = b({
        candidates: u,
        connectorLinks: y,
        preferredConnectorId: g?.preferred_gitlab_connector_id,
        selectedConnectorId: r
    }), w = p(n.GITLAB_CONNECTOR, C ?? ``, `gitlab`, s, m.CODEX, a, o), E = w.error ?? f, D;
    t[1] !== w || t[2] !== h ? (D = () => {
        w.refetch(), h()
    }, t[1] = w, t[2] = h, t[3] = D) : D = t[3];
    let O = w.isLoading || d || S || _,
        k = C ?? ``,
        A;
    return t[4] !== u || t[5] !== w || t[6] !== E || t[7] !== D || t[8] !== O || t[9] !== k ? (A = {
        ...w,
        error: E,
        refetch: D,
        isLoading: O,
        connectorId: k,
        gitlabConnectorCandidates: u
    }, t[4] = u, t[5] = w, t[6] = E, t[7] = D, t[8] = O, t[9] = k, t[10] = A) : A = t[10], A
}
var T, E, D, O, k, A = e((() => {
    T = s(), o(), h(), t(), d(), f(), a(), u(), _(), E = i[n.GITLAB_CONNECTOR], D = `templated_apps_GitLab`, O = e => e.status !== `DISABLED_BY_ADMIN`, k = (e, t) => (t.get(e)?.length ?? 0) > 0
}));
export {
    w as i, D as n, A as r, E as t
};
//# sourceMappingURL=ab92372e-lqpip46xxvnvxu2e.js.map
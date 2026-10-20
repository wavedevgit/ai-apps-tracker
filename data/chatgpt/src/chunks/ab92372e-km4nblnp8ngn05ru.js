import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Fst as t,
    Fv as n,
    N5 as r,
    Z_ as i,
    h8 as a,
    tct as o
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    wn as s
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    FQ as c,
    Nun as l,
    WQ as u,
    Yln as d,
    eTn as f,
    tTn as p,
    wPn as m,
    xPn as h
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    o as g,
    s as _
} from "./5f4d7fa0-ecwvalz9rud7vc7c.js";

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
    let n = (0, T.c)(11),
        {
            connectorId: r,
            redirectAfter: i,
            onNoConnector: a,
            onNoOAuthClients: o
        } = e === void 0 ? {} : e,
        s = i === void 0 ? `/codex/cloud` : i,
        {
            candidates: c,
            isLoading: d,
            error: p,
            refetch: h
        } = x(),
        {
            data: g,
            isLoading: _
        } = l(),
        v;
    n[0] === Symbol.for(`react.memo_cache_sentinel`) ? (v = {
        productSku: f.CODEX
    }, n[0] = v) : v = n[0];
    let {
        connectorLinks: y,
        isLoading: S
    } = m(v), C = b({
        candidates: c,
        connectorLinks: y,
        preferredConnectorId: g?.preferred_gitlab_connector_id,
        selectedConnectorId: r
    }), w = u(t.GITLAB_CONNECTOR, C ?? ``, `gitlab`, s, f.CODEX, a, o), E = w.error ?? p, D;
    n[1] !== w || n[2] !== h ? (D = () => {
        w.refetch(), h()
    }, n[1] = w, n[2] = h, n[3] = D) : D = n[3];
    let O = w.isLoading || d || S || _,
        k = C ?? ``,
        A;
    return n[4] !== c || n[5] !== w || n[6] !== E || n[7] !== D || n[8] !== O || n[9] !== k ? (A = {
        ...w,
        error: E,
        refetch: D,
        isLoading: O,
        connectorId: k,
        gitlabConnectorCandidates: c
    }, n[4] = c, n[5] = w, n[6] = E, n[7] = D, n[8] = O, n[9] = k, n[10] = A) : A = n[10], A
}
var T, E, D, O, k, A = e((() => {
    T = s(), o(), h(), n(), c(), p(), a(), d(), _(), E = i[t.GITLAB_CONNECTOR], D = `templated_apps_GitLab`, O = e => e.status !== `DISABLED_BY_ADMIN`, k = (e, t) => (t.get(e)?.length ?? 0) > 0
}));
export {
    w as i, D as n, A as r, E as t
};
//# sourceMappingURL=ab92372e-km4nblnp8ngn05ru.js.map
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    Iv as n,
    Oct as r,
    Q_ as i,
    cct as a,
    j5 as o
} from "./4813494d-mdvd4786a87166cc.js";
import {
    wn as s
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Qun as c,
    RQ as l,
    RTn as u,
    SFn as d,
    mun as f,
    qQ as p,
    yFn as m,
    zTn as h
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    o as g,
    s as _
} from "./5f4d7fa0-c53njl56by21uf8z.js";

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
        } = o(C),
        a;
    e[0] === t?.connectors ? a = e[1] : (a = y(new Map(t?.connectors.map(S))), e[0] = t?.connectors, e[1] = a);
    let s = a,
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
            redirectAfter: r,
            onNoConnector: i,
            onNoOAuthClients: o
        } = e === void 0 ? {} : e,
        s = r === void 0 ? `/codex/cloud` : r,
        {
            candidates: l,
            isLoading: f,
            error: m,
            refetch: h
        } = x(),
        {
            data: g,
            isLoading: _
        } = c(),
        v;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (v = {
        productSku: u.CODEX
    }, t[0] = v) : v = t[0];
    let {
        connectorLinks: y,
        isLoading: S
    } = d(v), C = b({
        candidates: l,
        connectorLinks: y,
        preferredConnectorId: g?.preferred_gitlab_connector_id,
        selectedConnectorId: n
    }), w = p(a.GITLAB_CONNECTOR, C ?? ``, `gitlab`, s, u.CODEX, i, o), E = w.error ?? m, D;
    t[1] !== w || t[2] !== h ? (D = () => {
        w.refetch(), h()
    }, t[1] = w, t[2] = h, t[3] = D) : D = t[3];
    let O = w.isLoading || f || S || _,
        k = C ?? ``,
        A;
    return t[4] !== l || t[5] !== w || t[6] !== E || t[7] !== D || t[8] !== O || t[9] !== k ? (A = {
        ...w,
        error: E,
        refetch: D,
        isLoading: O,
        connectorId: k,
        gitlabConnectorCandidates: l
    }, t[4] = l, t[5] = w, t[6] = E, t[7] = D, t[8] = O, t[9] = k, t[10] = A) : A = t[10], A
}
var T, E, D, O, k, A = e((() => {
    T = s(), r(), m(), n(), l(), h(), t(), f(), _(), E = i[a.GITLAB_CONNECTOR], D = `templated_apps_GitLab`, O = e => e.status !== `DISABLED_BY_ADMIN`, k = (e, t) => (t.get(e)?.length ?? 0) > 0
}));
export {
    w as i, D as n, A as r, E as t
};
//# sourceMappingURL=ab92372e-o4jvgv4y4zodpseo.js.map
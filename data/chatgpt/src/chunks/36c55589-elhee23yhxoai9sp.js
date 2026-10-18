import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    BS as t,
    FS as n,
    PS as r,
    dS as i
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";

function a(e, t) {
    try {
        if (!e.searchParams.has(`workspace_connection_created`)) return null;
        let n = t == null ? window.sessionStorage.getItem(d) : null,
            r = p.safeParse(t ?? (n ? JSON.parse(n) : null));
        if (!r.success) return null;
        let i = r.data;
        return e.origin !== window.location.origin || !/^\/admin\/(?:service-accounts|agent-deployments)\/[^/]+$/.test(e.pathname) || e.pathname !== i.pathname || e.searchParams.get(`workspace_connection_created`) !== i.id || Date.now() < i.startedAt || Date.now() - i.startedAt > f ? null : i
    } catch {
        return null
    }
}

function o({
    workspaceId: e,
    accountUserId: t,
    connectorId: n,
    connectionName: r,
    returnUrl: i,
    linkId: a
}) {
    let o = crypto.randomUUID(),
        s = new URL(i);
    s.searchParams.set(`tab`, `plugins`), s.searchParams.delete(`plugin`), s.searchParams.delete(`instance`), s.searchParams.delete(`workspace_connection`), s.searchParams.set(u, o);
    let c = {
        id: o,
        workspaceId: e,
        accountUserId: t,
        connectorId: n,
        connectionName: r,
        pathname: s.pathname,
        startedAt: Date.now(),
        linkId: a
    };
    return a ?? window.sessionStorage.setItem(d, JSON.stringify(c)), {
        path: `${s.pathname}${s.search}${s.hash}`,
        creation: c
    }
}

function s({
    url: e,
    connectorId: t,
    linkId: n
}) {
    let r = a(e);
    if (!(r == null || r.connectorId !== t)) try {
        window.sessionStorage.setItem(d, JSON.stringify({
            ...r,
            linkId: n
        }))
    } catch {}
}

function c({
    url: e,
    workspaceId: t,
    accountUserId: n,
    navigationState: r
}) {
    let i = a(e, r);
    return i?.linkId == null || i.workspaceId !== t || i.accountUserId !== n ? null : {
        ...i,
        linkId: i.linkId
    }
}

function l(e) {
    let t = c(e);
    if (t == null) return null;
    if (e.navigationState == null) try {
        window.sessionStorage.removeItem(d)
    } catch {
        return null
    }
    return t
}
var u, d, f, p, m = e((() => {
    i(), u = `workspace_connection_created`, d = `chatgpt.service-account-workspace-connection.pending`, f = 1800 * 1e3, p = n({
        id: t(),
        workspaceId: t(),
        accountUserId: t(),
        connectorId: t(),
        connectionName: t(),
        pathname: t(),
        startedAt: r(),
        linkId: t().optional()
    })
}));
export {
    c as a, o as i, l as n, s as o, m as r, u as t
};
//# sourceMappingURL=36c55589-elhee23yhxoai9sp.js.map
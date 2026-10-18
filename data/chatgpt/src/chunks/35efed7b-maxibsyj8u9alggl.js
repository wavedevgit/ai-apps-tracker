import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    i1 as t,
    u1 as n
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    H as r,
    s as i,
    w as a
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Eb as o,
    Qv as s,
    by as c,
    jb as l,
    ty as u,
    yy as d
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    a as f,
    i as p,
    n as m,
    o as h,
    r as g
} from "./832dbd3a-8ils21g1hok0as2u.js";
async function _(e, t) {
    if (t.workspaceId === `` || t.connectorId == null || t.connectorId === ``) throw new r({
        revert: !0
    });
    let n = h();
    if (!g(n, t.workspaceId, t.connectorId, !0)) throw new r({
        revert: !0
    });
    let i = await e.fetchQuery(y({
        ...t,
        scope: `v2`,
        transport: n
    }));
    return m(n, t.workspaceId), i
}
var v, y, b = e((() => {
    c(), n(), i(), o(), u(), f(), v = ({
        connectorId: e,
        workspaceId: t
    }) => [`connector-workspace-permissions`, t, e], y = ({
        connectorId: e,
        workspaceId: n,
        scope: i,
        transport: o,
        reconciliation: c
    }) => {
        let u = n !== `` && e != null && e !== `` && (c == null || c.requestId !== `` && c.workspaceUserId !== `` && t()?.normalizedAccountUserId === c.workspaceUserId),
            f = i === `v2` && u ? o ?? h() : `legacy`,
            _ = async i => {
                let a = f === `sheep` ? i.signal : void 0;
                if (c != null && (c.requestId === `` || c.workspaceUserId === `` || t()?.normalizedAccountUserId !== c.workspaceUserId) || c != null && !g(f, n, e, !0)) throw new r({
                    revert: !0
                });
                f === `sheep` && m(f, n, a);
                let o = await l({
                    operation: `connector_permissions`,
                    signal: a,
                    request: async () => {
                        let t = f === `sheep` && a != null ? await p({
                            connectorId: e ?? ``,
                            workspaceId: n,
                            signal: a
                        }) : await d({
                            connectorId: e ?? ``,
                            workspaceId: n
                        });
                        return f === `sheep` && m(f, n, a), t
                    }
                });
                if (c != null && (i.signal.aborted || t()?.normalizedAccountUserId !== c.workspaceUserId)) throw new r({
                    revert: !0
                });
                return c != null && m(f, n, a), o
            }, y = c == null ? s : 0;
        return {
            ...a({
                queryKey: [...v({
                    connectorId: e,
                    workspaceId: n
                }), ...c == null ? [] : [`reconciliation`, c.workspaceUserId, c.requestId], ...f === `sheep` ? [`sheep`] : []],
                enabled: u,
                staleTime: y,
                queryFn: _
            }),
            enabled: u,
            queryFn: _,
            staleTime: y
        }
    }
}));
export {
    b as i, v as n, y as r, _ as t
};
//# sourceMappingURL=35efed7b-maxibsyj8u9alggl.js.map
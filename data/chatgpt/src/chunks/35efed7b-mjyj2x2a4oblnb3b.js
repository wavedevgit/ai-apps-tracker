import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as t,
    I1 as n
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    H as r,
    s as i,
    w as a
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Qv as o,
    bb as s,
    cy as c,
    hb as l,
    ly as u,
    ty as d
} from "./c2675c8c-fpv9s4kvd412dyap.js";
import {
    a as f,
    i as p,
    n as m,
    o as h,
    r as g
} from "./832dbd3a-bk26djhng80afq3w.js";
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
    u(), n(), i(), l(), d(), f(), v = ({
        connectorId: e,
        workspaceId: t
    }) => [`connector-workspace-permissions`, t, e], y = ({
        connectorId: e,
        workspaceId: n,
        scope: i,
        transport: l,
        reconciliation: u
    }) => {
        let d = n !== `` && e != null && e !== `` && (u == null || u.requestId !== `` && u.workspaceUserId !== `` && t()?.normalizedAccountUserId === u.workspaceUserId),
            f = i === `v2` && d ? l ?? h() : `legacy`,
            _ = async i => {
                let a = f === `sheep` ? i.signal : void 0;
                if (u != null && (u.requestId === `` || u.workspaceUserId === `` || t()?.normalizedAccountUserId !== u.workspaceUserId) || u != null && !g(f, n, e, !0)) throw new r({
                    revert: !0
                });
                f === `sheep` && m(f, n, a);
                let o = await s({
                    operation: `connector_permissions`,
                    signal: a,
                    request: async () => {
                        let t = f === `sheep` && a != null ? await p({
                            connectorId: e ?? ``,
                            workspaceId: n,
                            signal: a
                        }) : await c({
                            connectorId: e ?? ``,
                            workspaceId: n
                        });
                        return f === `sheep` && m(f, n, a), t
                    }
                });
                if (u != null && (i.signal.aborted || t()?.normalizedAccountUserId !== u.workspaceUserId)) throw new r({
                    revert: !0
                });
                return u != null && m(f, n, a), o
            }, y = u == null ? o : 0;
        return {
            ...a({
                queryKey: [...v({
                    connectorId: e,
                    workspaceId: n
                }), ...u == null ? [] : [`reconciliation`, u.workspaceUserId, u.requestId], ...f === `sheep` ? [`sheep`] : []],
                enabled: d,
                staleTime: y,
                queryFn: _
            }),
            enabled: d,
            queryFn: _,
            staleTime: y
        }
    }
}));
export {
    b as i, v as n, y as r, _ as t
};
//# sourceMappingURL=35efed7b-mjyj2x2a4oblnb3b.js.map
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    V1 as t,
    q1 as n
} from "./4813494d-mdvd4786a87166cc.js";
import {
    H as r,
    s as i,
    w as a
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $y as o,
    Jv as s,
    Rv as c,
    Vv as l,
    Yv as u,
    Zy as d
} from "./c2675c8c-oz03twoan08d72ud.js";
import {
    a as f,
    i as p,
    n as m,
    o as h,
    r as g
} from "./832dbd3a-hbk6u3oq5isiaqp3.js";
var _, v, y = e((() => {
    u(), d(), n(), i(), f(), l(), _ = ({
        connectorId: e,
        workspaceId: t
    }) => [`connector-workspace-permissions`, t, e], v = ({
        connectorId: e,
        workspaceId: n,
        scope: i,
        transport: l,
        reconciliation: u
    }) => {
        let d = n !== `` && e != null && e !== `` && (u == null || u.requestId !== `` && u.workspaceUserId !== `` && t()?.normalizedAccountUserId === u.workspaceUserId),
            f = i === `v2` && d ? l ?? h() : `legacy`,
            v = async i => {
                let a = f === `sheep` ? i.signal : void 0;
                if (u != null && (u.requestId === `` || u.workspaceUserId === `` || t()?.normalizedAccountUserId !== u.workspaceUserId) || u != null && !g(f, n, e, !0)) throw new r({
                    revert: !0
                });
                f === `sheep` && m(f, n, a);
                let c = await o({
                    operation: `connector_permissions`,
                    signal: a,
                    request: async () => {
                        let t = f === `sheep` && a != null ? await p({
                            connectorId: e ?? ``,
                            workspaceId: n,
                            signal: a
                        }) : await s({
                            connectorId: e ?? ``,
                            workspaceId: n
                        });
                        return f === `sheep` && m(f, n, a), t
                    }
                });
                if (u != null && (i.signal.aborted || t()?.normalizedAccountUserId !== u.workspaceUserId)) throw new r({
                    revert: !0
                });
                return u != null && m(f, n, a), c
            }, y = u == null ? c : 0;
        return {
            ...a({
                queryKey: [..._({
                    connectorId: e,
                    workspaceId: n
                }), ...u == null ? [] : [`reconciliation`, u.workspaceUserId, u.requestId], ...f === `sheep` ? [`sheep`] : []],
                enabled: d,
                staleTime: y,
                queryFn: v
            }),
            enabled: d,
            queryFn: v,
            staleTime: y
        }
    }
}));
export {
    v as n, y as r, _ as t
};
//# sourceMappingURL=35efed7b-ku6gj22e3tac7lsq.js.map
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    V1 as t,
    q1 as n
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    H as r,
    s as i,
    w as a
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Hv as o,
    Ky as s,
    Pv as c,
    Vv as l,
    Wy as u,
    jv as d
} from "./c2675c8c-p3x4d0bnf7e77o1n.js";
import {
    a as f,
    i as p,
    n as m,
    o as h,
    r as g
} from "./832dbd3a-ojxt56c5s36f7tim.js";
var _, v, y = e((() => {
    o(), u(), n(), i(), f(), c(), _ = ({
        connectorId: e,
        workspaceId: t
    }) => [`connector-workspace-permissions`, t, e], v = ({
        connectorId: e,
        workspaceId: n,
        scope: i,
        transport: o,
        reconciliation: c
    }) => {
        let u = n !== `` && e != null && e !== `` && (c == null || c.requestId !== `` && c.workspaceUserId !== `` && t()?.normalizedAccountUserId === c.workspaceUserId),
            f = i === `v2` && u ? o ?? h() : `legacy`,
            v = async i => {
                let a = f === `sheep` ? i.signal : void 0;
                if (c != null && (c.requestId === `` || c.workspaceUserId === `` || t()?.normalizedAccountUserId !== c.workspaceUserId) || c != null && !g(f, n, e, !0)) throw new r({
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
                        }) : await l({
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
            }, y = c == null ? d : 0;
        return {
            ...a({
                queryKey: [..._({
                    connectorId: e,
                    workspaceId: n
                }), ...c == null ? [] : [`reconciliation`, c.workspaceUserId, c.requestId], ...f === `sheep` ? [`sheep`] : []],
                enabled: u,
                staleTime: y,
                queryFn: v
            }),
            enabled: u,
            queryFn: v,
            staleTime: y
        }
    }
}));
export {
    v as n, y as r, _ as t
};
//# sourceMappingURL=35efed7b-nf0gzo2xv7hxg7ll.js.map
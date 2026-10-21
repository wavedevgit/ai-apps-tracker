import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    M1 as t,
    R1 as n
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    H as r,
    s as i,
    w as a
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Av as o,
    By as s,
    Dv as c,
    Hy as l,
    Lv as u,
    Rv as d
} from "./c2675c8c-ossqum2x3eut0sh8.js";
import {
    a as f,
    i as p,
    n as m,
    o as h,
    r as g
} from "./832dbd3a-idgsxq54ljs11fnz.js";
var _, v, y = e((() => {
    d(), n(), i(), s(), o(), f(), _ = ({
        connectorId: e,
        workspaceId: t
    }) => [`connector-workspace-permissions`, t, e], v = ({
        connectorId: e,
        workspaceId: n,
        scope: i,
        transport: o,
        reconciliation: s
    }) => {
        let d = n !== `` && e != null && e !== `` && (s == null || s.requestId !== `` && s.workspaceUserId !== `` && t()?.normalizedAccountUserId === s.workspaceUserId),
            f = i === `v2` && d ? o ?? h() : `legacy`,
            v = async i => {
                let a = f === `sheep` ? i.signal : void 0;
                if (s != null && (s.requestId === `` || s.workspaceUserId === `` || t()?.normalizedAccountUserId !== s.workspaceUserId) || s != null && !g(f, n, e, !0)) throw new r({
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
                        }) : await u({
                            connectorId: e ?? ``,
                            workspaceId: n
                        });
                        return f === `sheep` && m(f, n, a), t
                    }
                });
                if (s != null && (i.signal.aborted || t()?.normalizedAccountUserId !== s.workspaceUserId)) throw new r({
                    revert: !0
                });
                return s != null && m(f, n, a), o
            }, y = s == null ? c : 0;
        return {
            ...a({
                queryKey: [..._({
                    connectorId: e,
                    workspaceId: n
                }), ...s == null ? [] : [`reconciliation`, s.workspaceUserId, s.requestId], ...f === `sheep` ? [`sheep`] : []],
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
//# sourceMappingURL=35efed7b-nrwa14eyrn4n4a1e.js.map
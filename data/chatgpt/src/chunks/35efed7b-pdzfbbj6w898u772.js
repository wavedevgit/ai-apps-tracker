import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    L1 as t,
    j1 as n
} from "./4813494d-dfpv67hlp00pbohr.js";
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
} from "./c2675c8c-9bs3zsr3vq259es7.js";
import {
    a as f,
    i as p,
    n as m,
    o as h,
    r as g
} from "./832dbd3a-kczb4igcdcx4itca.js";
var _, v, y = e((() => {
    d(), t(), i(), s(), o(), f(), _ = ({
        connectorId: e,
        workspaceId: t
    }) => [`connector-workspace-permissions`, t, e], v = ({
        connectorId: e,
        workspaceId: t,
        scope: i,
        transport: o,
        reconciliation: s
    }) => {
        let d = t !== `` && e != null && e !== `` && (s == null || s.requestId !== `` && s.workspaceUserId !== `` && n()?.normalizedAccountUserId === s.workspaceUserId),
            f = i === `v2` && d ? o ?? h() : `legacy`,
            v = async i => {
                let a = f === `sheep` ? i.signal : void 0;
                if (s != null && (s.requestId === `` || s.workspaceUserId === `` || n()?.normalizedAccountUserId !== s.workspaceUserId) || s != null && !g(f, t, e, !0)) throw new r({
                    revert: !0
                });
                f === `sheep` && m(f, t, a);
                let o = await l({
                    operation: `connector_permissions`,
                    signal: a,
                    request: async () => {
                        let n = f === `sheep` && a != null ? await p({
                            connectorId: e ?? ``,
                            workspaceId: t,
                            signal: a
                        }) : await u({
                            connectorId: e ?? ``,
                            workspaceId: t
                        });
                        return f === `sheep` && m(f, t, a), n
                    }
                });
                if (s != null && (i.signal.aborted || n()?.normalizedAccountUserId !== s.workspaceUserId)) throw new r({
                    revert: !0
                });
                return s != null && m(f, t, a), o
            }, y = s == null ? c : 0;
        return {
            ...a({
                queryKey: [..._({
                    connectorId: e,
                    workspaceId: t
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
//# sourceMappingURL=35efed7b-pdzfbbj6w898u772.js.map
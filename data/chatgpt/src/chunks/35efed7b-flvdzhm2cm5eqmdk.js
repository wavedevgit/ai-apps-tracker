import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    V1 as t,
    q1 as n
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    H as r,
    s as i,
    w as a
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Bv as o,
    Jv as s,
    Lv as c,
    Qy as l,
    Xy as u,
    qv as d
} from "./c2675c8c-4fpunyxk1uf8cfp1.js";
import {
    a as f,
    i as p,
    n as m,
    o as h,
    r as g
} from "./832dbd3a-nt6ho4ay949wjxow.js";
var _, v, y = e((() => {
    s(), u(), n(), i(), f(), o(), _ = ({
        connectorId: e,
        workspaceId: t
    }) => [`connector-workspace-permissions`, t, e], v = ({
        connectorId: e,
        workspaceId: n,
        scope: i,
        transport: o,
        reconciliation: s
    }) => {
        let u = n !== `` && e != null && e !== `` && (s == null || s.requestId !== `` && s.workspaceUserId !== `` && t()?.normalizedAccountUserId === s.workspaceUserId),
            f = i === `v2` && u ? o ?? h() : `legacy`,
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
                        }) : await d({
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
//# sourceMappingURL=35efed7b-flvdzhm2cm5eqmdk.js.map
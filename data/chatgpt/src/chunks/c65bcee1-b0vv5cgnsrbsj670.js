import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as t,
    CK as n,
    Git as r,
    I1 as i,
    L7 as a,
    N7 as o,
    aat as s,
    lat as c,
    qit as l,
    wK as u
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    s as d,
    w as f
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    aTn as p,
    fwn as m,
    iTn as h,
    uwn as g
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    Sb as _,
    _b as v,
    ey as y,
    ry as b
} from "./c2675c8c-nxl2ic2ofk2vw70s.js";
import {
    c as x,
    i as S,
    n as C,
    o as w,
    s as T
} from "./46464433-ink33fnzh9e4tama.js";

function E(e, t, n, r) {
    return r && n !== `` && t !== `` && S(e, t)
}

function D(e, t) {
    let n = x();
    E(n, t.workspaceId, t.connectorId, !0) && e.prefetchQuery(A({
        ...t,
        transport: n
    }))
}
var O, k, A, j = e((() => {
    g(), u(), p(), i(), c(), l(), a(), d(), v(), b(), T(), O = ({
        connectorId: e,
        workspaceId: t
    }) => [`connector-actions`, e, t], k = ({
        connectorId: e,
        workspaceId: t
    }) => [`plugin-admin-v2`, `app-action-controls`, t, e], A = ({
        connectorId: e,
        workspaceId: i,
        transport: a = x()
    }) => f({
        queryKey: [...O({
            connectorId: e,
            workspaceId: i
        }), ...a === `sheep` ? [`sheep`] : []],
        enabled: e !== `` && i !== ``,
        staleTime: y,
        queryFn: ({
            signal: c
        }) => {
            if (C(a, i, c), t()?.getWorkspaceId() !== i) throw Error(`The current workspace cannot access these actions.`);
            return _({
                operation: `connector_actions`,
                signal: c,
                request: async () => a === `sheep` ? await w({
                    connectorId: e,
                    workspaceId: i,
                    signal: c
                }) : await m({
                    operation: `connector_actions`,
                    transport: `sa_server`,
                    workspaceId: i,
                    signal: c,
                    request: t => o.safeGet(`/aip/connectors/{connector_id}/actions`, {
                        ...t,
                        authOption: s.Required,
                        signal: c,
                        additionalHeaders: {
                            ...n(i),
                            [r]: h.ADMIN_SETTING
                        },
                        parameters: {
                            path: {
                                connector_id: e
                            }
                        }
                    })
                })
            })
        }
    })
}));
export {
    j as a, A as i, k as n, D as o, O as r, E as t
};
//# sourceMappingURL=c65bcee1-b0vv5cgnsrbsj670.js.map
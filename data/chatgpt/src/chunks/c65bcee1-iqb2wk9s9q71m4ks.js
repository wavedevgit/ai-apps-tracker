import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ait as t,
    Pit as n,
    QG as r,
    ZG as i,
    a7 as a,
    git as o,
    i1 as s,
    l7 as c,
    u1 as l,
    vit as u
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    s as d,
    w as f
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Gwn as p,
    QCn as m,
    Wwn as h,
    XCn as g
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Eb as _,
    Qv as v,
    jb as y,
    ty as b
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    c as x,
    i as S,
    n as C,
    o as w,
    s as T
} from "./46464433-i8k628j3n5wwc6bl.js";

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
    g(), r(), p(), l(), n(), u(), c(), d(), _(), b(), T(), O = ({
        connectorId: e,
        workspaceId: t
    }) => [`connector-actions`, e, t], k = ({
        connectorId: e,
        workspaceId: t
    }) => [`plugin-admin-v2`, `app-action-controls`, t, e], A = ({
        connectorId: e,
        workspaceId: n,
        transport: r = x()
    }) => f({
        queryKey: [...O({
            connectorId: e,
            workspaceId: n
        }), ...r === `sheep` ? [`sheep`] : []],
        enabled: e !== `` && n !== ``,
        staleTime: v,
        queryFn: ({
            signal: c
        }) => {
            if (C(r, n, c), s()?.getWorkspaceId() !== n) throw Error(`The current workspace cannot access these actions.`);
            return y({
                operation: `connector_actions`,
                signal: c,
                request: async () => r === `sheep` ? await w({
                    connectorId: e,
                    workspaceId: n,
                    signal: c
                }) : await m({
                    operation: `connector_actions`,
                    transport: `sa_server`,
                    workspaceId: n,
                    signal: c,
                    request: r => a.safeGet(`/aip/connectors/{connector_id}/actions`, {
                        ...r,
                        authOption: t.Required,
                        signal: c,
                        additionalHeaders: {
                            ...i(n),
                            [o]: h.ADMIN_SETTING
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
//# sourceMappingURL=c65bcee1-iqb2wk9s9q71m4ks.js.map
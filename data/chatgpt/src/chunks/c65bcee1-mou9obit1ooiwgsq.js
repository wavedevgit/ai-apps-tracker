import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Aat as t,
    Eat as n,
    J7 as r,
    Q7 as i,
    SK as a,
    V1 as o,
    fat as s,
    mat as c,
    q1 as l,
    xK as u
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    s as d,
    w as f
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    FTn as p,
    Hwn as m,
    PTn as h,
    Vwn as g
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    Ky as _,
    Pv as v,
    Wy as y,
    jv as b
} from "./c2675c8c-otyjprdiowg2v8hl.js";
import {
    c as x,
    i as S,
    n as C,
    o as w,
    s as T
} from "./46464433-dwdz5ec7iqncacxe.js";

function E(e, t, n, r) {
    return r && n !== `` && t !== `` && S(e, t)
}
var D, O, k, A = e((() => {
    y(), p(), l(), t(), c(), i(), a(), d(), g(), v(), T(), D = ({
        connectorId: e,
        workspaceId: t
    }) => [`connector-actions`, e, t], O = ({
        connectorId: e,
        workspaceId: t
    }) => [`plugin-admin-v2`, `app-action-controls`, t, e], k = ({
        connectorId: e,
        workspaceId: t,
        transport: i = x()
    }) => f({
        queryKey: [...D({
            connectorId: e,
            workspaceId: t
        }), ...i === `sheep` ? [`sheep`] : []],
        enabled: e !== `` && t !== ``,
        staleTime: b,
        queryFn: ({
            signal: a
        }) => {
            if (C(i, t, a), o()?.getWorkspaceId() !== t) throw Error(`The current workspace cannot access these actions.`);
            return _({
                operation: `connector_actions`,
                signal: a,
                request: async () => i === `sheep` ? await w({
                    connectorId: e,
                    workspaceId: t,
                    signal: a
                }) : await m({
                    operation: `connector_actions`,
                    transport: `sa_server`,
                    workspaceId: t,
                    signal: a,
                    request: i => r.safeGet(`/aip/connectors/{connector_id}/actions`, {
                        ...i,
                        authOption: n.Required,
                        signal: a,
                        additionalHeaders: {
                            ...u(t),
                            [s]: h.ADMIN_SETTING
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
    A as a, k as i, O as n, D as r, E as t
};
//# sourceMappingURL=c65bcee1-mou9obit1ooiwgsq.js.map
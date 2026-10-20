import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    F7 as t,
    Jit as n,
    M1 as r,
    R1 as i,
    TK as a,
    Xit as o,
    cat as s,
    fat as c,
    wK as l,
    z7 as u
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    s as d,
    w as f
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    dwn as p,
    iTn as m,
    rTn as h,
    uwn as g
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    Av as _,
    By as v,
    Dv as y,
    Hy as b
} from "./c2675c8c-ejvs9hq3rwjwsbcv.js";
import {
    c as x,
    i as S,
    n as C,
    o as w,
    s as T
} from "./46464433-l21gswyijm194ixu.js";

function E(e, t, n, r) {
    return r && n !== `` && t !== `` && S(e, t)
}
var D, O, k, A = e((() => {
    g(), a(), m(), i(), c(), o(), u(), d(), v(), _(), T(), D = ({
        connectorId: e,
        workspaceId: t
    }) => [`connector-actions`, e, t], O = ({
        connectorId: e,
        workspaceId: t
    }) => [`plugin-admin-v2`, `app-action-controls`, t, e], k = ({
        connectorId: e,
        workspaceId: i,
        transport: a = x()
    }) => f({
        queryKey: [...D({
            connectorId: e,
            workspaceId: i
        }), ...a === `sheep` ? [`sheep`] : []],
        enabled: e !== `` && i !== ``,
        staleTime: y,
        queryFn: ({
            signal: o
        }) => {
            if (C(a, i, o), r()?.getWorkspaceId() !== i) throw Error(`The current workspace cannot access these actions.`);
            return b({
                operation: `connector_actions`,
                signal: o,
                request: async () => a === `sheep` ? await w({
                    connectorId: e,
                    workspaceId: i,
                    signal: o
                }) : await p({
                    operation: `connector_actions`,
                    transport: `sa_server`,
                    workspaceId: i,
                    signal: o,
                    request: r => t.safeGet(`/aip/connectors/{connector_id}/actions`, {
                        ...r,
                        authOption: s.Required,
                        signal: o,
                        additionalHeaders: {
                            ...l(i),
                            [n]: h.ADMIN_SETTING
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
//# sourceMappingURL=c65bcee1-nras6rtihfx0mzsk.js.map
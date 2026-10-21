import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    F7 as t,
    M1 as n,
    Qit as r,
    R1 as i,
    TK as a,
    eat as o,
    fat as s,
    gat as c,
    wK as l,
    z7 as u
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    s as d,
    w as f
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    dwn as p,
    iTn as m,
    rTn as h,
    uwn as g
} from "./conversation-small-nmt18uiom3b14vca.js";
import {
    Av as _,
    By as v,
    Dv as y,
    Hy as b
} from "./c2675c8c-h5ybkhdzcoblzzdu.js";
import {
    c as x,
    i as S,
    n as C,
    o as w,
    s as T
} from "./46464433-b4z87wdb48pj3s0b.js";

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
            if (C(a, i, o), n()?.getWorkspaceId() !== i) throw Error(`The current workspace cannot access these actions.`);
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
                    request: n => t.safeGet(`/aip/connectors/{connector_id}/actions`, {
                        ...n,
                        authOption: s.Required,
                        signal: o,
                        additionalHeaders: {
                            ...l(i),
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
    A as a, k as i, O as n, D as r, E as t
};
//# sourceMappingURL=c65bcee1-gr7ydwn6mih99a95.js.map
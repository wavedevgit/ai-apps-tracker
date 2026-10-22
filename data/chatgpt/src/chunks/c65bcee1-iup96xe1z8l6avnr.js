import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J7 as t,
    Oat as n,
    Q7 as r,
    SK as i,
    V1 as a,
    fat as o,
    q1 as s,
    uat as c,
    wat as l,
    xK as u
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    s as d,
    w as f
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Twn as p,
    _Tn as m,
    vTn as h,
    wwn as g
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    Ky as _,
    Pv as v,
    Wy as y,
    jv as b
} from "./c2675c8c-d62p1sdq1sy52umm.js";
import {
    c as x,
    i as S,
    n as C,
    o as w,
    s as T
} from "./46464433-gd4l72ulldog8da4.js";

function E(e, t, n, r) {
    return r && n !== `` && t !== `` && S(e, t)
}
var D, O, k, A = e((() => {
    y(), h(), s(), n(), o(), r(), i(), d(), g(), v(), T(), D = ({
        connectorId: e,
        workspaceId: t
    }) => [`connector-actions`, e, t], O = ({
        connectorId: e,
        workspaceId: t
    }) => [`plugin-admin-v2`, `app-action-controls`, t, e], k = ({
        connectorId: e,
        workspaceId: n,
        transport: r = x()
    }) => f({
        queryKey: [...D({
            connectorId: e,
            workspaceId: n
        }), ...r === `sheep` ? [`sheep`] : []],
        enabled: e !== `` && n !== ``,
        staleTime: b,
        queryFn: ({
            signal: i
        }) => {
            if (C(r, n, i), a()?.getWorkspaceId() !== n) throw Error(`The current workspace cannot access these actions.`);
            return _({
                operation: `connector_actions`,
                signal: i,
                request: async () => r === `sheep` ? await w({
                    connectorId: e,
                    workspaceId: n,
                    signal: i
                }) : await p({
                    operation: `connector_actions`,
                    transport: `sa_server`,
                    workspaceId: n,
                    signal: i,
                    request: r => t.safeGet(`/aip/connectors/{connector_id}/actions`, {
                        ...r,
                        authOption: l.Required,
                        signal: i,
                        additionalHeaders: {
                            ...u(n),
                            [c]: m.ADMIN_SETTING
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
//# sourceMappingURL=c65bcee1-iup96xe1z8l6avnr.js.map
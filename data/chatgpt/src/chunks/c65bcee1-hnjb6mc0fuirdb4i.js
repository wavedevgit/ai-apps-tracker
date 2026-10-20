import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    CK as t,
    L1 as n,
    P7 as r,
    R7 as i,
    Yit as a,
    dat as o,
    j1 as s,
    qit as c,
    sat as l,
    wK as u
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    s as d,
    w as f
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    cwn as p,
    eTn as m,
    swn as h,
    tTn as g
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Av as _,
    By as v,
    Dv as y,
    Hy as b
} from "./c2675c8c-9bs3zsr3vq259es7.js";
import {
    c as x,
    i as S,
    n as C,
    o as w,
    s as T
} from "./46464433-g946xnvlgzfys2yo.js";

function E(e, t, n, r) {
    return r && n !== `` && t !== `` && S(e, t)
}
var D, O, k, A = e((() => {
    h(), u(), g(), n(), o(), a(), i(), d(), v(), _(), T(), D = ({
        connectorId: e,
        workspaceId: t
    }) => [`connector-actions`, e, t], O = ({
        connectorId: e,
        workspaceId: t
    }) => [`plugin-admin-v2`, `app-action-controls`, t, e], k = ({
        connectorId: e,
        workspaceId: n,
        transport: i = x()
    }) => f({
        queryKey: [...D({
            connectorId: e,
            workspaceId: n
        }), ...i === `sheep` ? [`sheep`] : []],
        enabled: e !== `` && n !== ``,
        staleTime: y,
        queryFn: ({
            signal: a
        }) => {
            if (C(i, n, a), s()?.getWorkspaceId() !== n) throw Error(`The current workspace cannot access these actions.`);
            return b({
                operation: `connector_actions`,
                signal: a,
                request: async () => i === `sheep` ? await w({
                    connectorId: e,
                    workspaceId: n,
                    signal: a
                }) : await p({
                    operation: `connector_actions`,
                    transport: `sa_server`,
                    workspaceId: n,
                    signal: a,
                    request: i => r.safeGet(`/aip/connectors/{connector_id}/actions`, {
                        ...i,
                        authOption: l.Required,
                        signal: a,
                        additionalHeaders: {
                            ...t(n),
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
//# sourceMappingURL=c65bcee1-hnjb6mc0fuirdb4i.js.map
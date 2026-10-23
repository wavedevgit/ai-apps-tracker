import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    I7 as t,
    M7 as n,
    Pat as r,
    Rat as i,
    SK as a,
    Sat as o,
    V1 as s,
    bat as c,
    q1 as l,
    xK as u
} from "./4813494d-mdvd4786a87166cc.js";
import {
    s as d,
    w as f
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Gwn as p,
    Kwn as m,
    RTn as h,
    zTn as g
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    $y as _,
    Rv as v,
    Vv as y,
    Zy as b
} from "./c2675c8c-oz03twoan08d72ud.js";
import {
    c as x,
    i as S,
    n as C,
    o as w,
    s as T
} from "./46464433-j3bblkphm8h3mk11.js";

function E(e, t, n, r) {
    return r && n !== `` && t !== `` && S(e, t)
}
var D, O, k, A = e((() => {
    b(), g(), l(), i(), o(), t(), a(), d(), p(), y(), T(), D = ({
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
        staleTime: v,
        queryFn: ({
            signal: a
        }) => {
            if (C(i, t, a), s()?.getWorkspaceId() !== t) throw Error(`The current workspace cannot access these actions.`);
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
                    request: i => n.safeGet(`/aip/connectors/{connector_id}/actions`, {
                        ...i,
                        authOption: r.Required,
                        signal: a,
                        additionalHeaders: {
                            ...u(t),
                            [c]: h.ADMIN_SETTING
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
//# sourceMappingURL=c65bcee1-ht1sgkwgn73o9enu.js.map
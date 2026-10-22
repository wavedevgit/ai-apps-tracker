import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as t,
    Dat as n,
    SK as r,
    V1 as i,
    Y7 as a,
    hat as o,
    jat as s,
    pat as c,
    q1 as l,
    xK as u
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    s as d,
    w as f
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Gwn as p,
    LTn as m,
    RTn as h,
    Wwn as g
} from "./conversation-small-fh0oqifngkf5rvl1.js";
import {
    Bv as _,
    Lv as v,
    Qy as y,
    Xy as b
} from "./c2675c8c-4fpunyxk1uf8cfp1.js";
import {
    c as x,
    i as S,
    n as C,
    o as w,
    s as T
} from "./46464433-kyrp2o89gyic5kyy.js";

function E(e, t, n, r) {
    return r && n !== `` && t !== `` && S(e, t)
}
var D, O, k, A = e((() => {
    b(), h(), l(), s(), o(), t(), r(), d(), g(), _(), T(), D = ({
        connectorId: e,
        workspaceId: t
    }) => [`connector-actions`, e, t], O = ({
        connectorId: e,
        workspaceId: t
    }) => [`plugin-admin-v2`, `app-action-controls`, t, e], k = ({
        connectorId: e,
        workspaceId: t,
        transport: r = x()
    }) => f({
        queryKey: [...D({
            connectorId: e,
            workspaceId: t
        }), ...r === `sheep` ? [`sheep`] : []],
        enabled: e !== `` && t !== ``,
        staleTime: v,
        queryFn: ({
            signal: o
        }) => {
            if (C(r, t, o), i()?.getWorkspaceId() !== t) throw Error(`The current workspace cannot access these actions.`);
            return y({
                operation: `connector_actions`,
                signal: o,
                request: async () => r === `sheep` ? await w({
                    connectorId: e,
                    workspaceId: t,
                    signal: o
                }) : await p({
                    operation: `connector_actions`,
                    transport: `sa_server`,
                    workspaceId: t,
                    signal: o,
                    request: r => a.safeGet(`/aip/connectors/{connector_id}/actions`, {
                        ...r,
                        authOption: n.Required,
                        signal: o,
                        additionalHeaders: {
                            ...u(t),
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
//# sourceMappingURL=c65bcee1-mscshyqsiugi41bc.js.map
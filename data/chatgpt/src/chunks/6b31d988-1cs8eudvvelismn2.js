import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ait as t,
    Nit as n,
    Pit as r,
    QG as i,
    ZG as a,
    git as o,
    i1 as s,
    l7 as c,
    o7 as l,
    u1 as u,
    vit as d
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    s as f,
    w as p
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $Sn as m,
    QCn as h,
    XCn as g,
    eCn as _,
    nCn as v
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Qv as y,
    ey as b,
    ty as x
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    n as S,
    r as C
} from "./29ad5082-ji4voo2pncjppg0h.js";
var w, T = e((() => {
        r(), c(), w = new l({
            baseUrl: n,
            targetRoutesAreCanonical: !0
        })
    })),
    E, D = e((() => {
        g(), S(), u(), i(), d(), r(), T(), f(), v(), x(), E = ({
            appId: e,
            workspaceId: n,
            workspaceUserId: r,
            admitted: i
        }) => {
            let c = () => r != null && s()?.normalizedAccountUserId === r,
                l = () => {
                    if (m(n), !C() || i !== !0 || e === `` || !c()) throw Error(`App role policy is unavailable for the selected administrator.`)
                };
            return p({
                queryKey: b(`app-role-policy`, n, r, e),
                enabled: C() && i === !0 && e !== `` && c() && _(n),
                staleTime: y,
                queryFn: async ({
                    signal: r
                }) => {
                    l();
                    let i = a(n);
                    if (i == null) throw Error(`The selected workspace changed.`);
                    let s = await h({
                        operation: `app_role_policy_read`,
                        transport: `sheep`,
                        workspaceId: n,
                        signal: r,
                        request: a => w.safeGet(`/rbac/workspace/{workspace_id}/connector/{connector_id}/roles`, {
                            ...a,
                            signal: r,
                            authOption: t.Required,
                            additionalHeaders: {
                                ...i,
                                [o]: `ADMIN_SETTING`,
                                "x-openai-use-sheep": `1`
                            },
                            parameters: {
                                path: {
                                    workspace_id: n,
                                    connector_id: e
                                },
                                query: {
                                    consistency: `strong`,
                                    role_policy: `informational`
                                }
                            }
                        })
                    });
                    l(), r.throwIfAborted();
                    let c = s.role_policy;
                    if (c == null) return null;
                    if (c.workspace_id !== n || c.app_id.trim() === `` || c.consistency !== `optimize_latency`) throw Error(`App role policy does not match the selected workspace and app.`);
                    return c
                }
            })
        }
    }));
export {
    D as n, E as t
};
//# sourceMappingURL=6b31d988-1cs8eudvvelismn2.js.map
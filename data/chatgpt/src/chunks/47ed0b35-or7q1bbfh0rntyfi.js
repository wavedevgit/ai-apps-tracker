const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/7998f7a4-ck3iz1pdjk0tolmy.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/conversation-small-ikg0dwuw782klweb.js", "assets/4813494d-bo7e0c29ngt4zgx0.js", "assets/root-lelxp0l2.css", "assets/30901919-e8h11sw136qen6v0.js", "assets/c470f5ab-ab47eubabs8jspdc.js", "assets/0e5afe53-esm68l11os61djoy.js", "assets/conversation-small-oilgsqfa.css", "assets/c2675c8c-ejvs9hq3rwjwsbcv.js", "assets/82782bc9-fcii2id0x6lspwtj.js", "assets/8b34dbc2-dtawqv9t1aqckqj4.js", "assets/global-modals-lv5n3ujm.css"]))) => i.map(i => d[i]);
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $0 as t,
    BU as n,
    F7 as r,
    X0 as i,
    Z0 as a,
    z7 as o
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    O as s,
    cn as c,
    ln as l,
    s as u
} from "./2340486e-i7pjxgdhv0bs6apg.js";

function d() {
    return s({
        queryKey: [`mfa-is-enabled`],
        queryFn: async () => (await r.safeGet(`/accounts/mfa_info`, {})).mfa_enabled_v2
    })
}

function f(e) {
    let {
        data: t,
        isLoading: n,
        isError: i,
        refetch: a
    } = s({
        queryKey: [`mfa-requirement-level-${e}`],
        queryFn: async () => await r.safeGet(`/aip/connectors/{connector_id}/mfa_requirement`, {
            parameters: {
                path: {
                    connector_id: e
                }
            }
        })
    });
    return n ? {
        status: `loading`,
        retry: () => {}
    } : i ? {
        status: `error`,
        retry: a
    } : {
        status: t?.requirement ?? `not_required`,
        retry: a
    }
}
var p = e((() => {
    t(), n(), o(), a(), u(), l(), i(() => c(() => import(`./7998f7a4-ck3iz1pdjk0tolmy.js`).then(e => e.ConfirmEnableMfaForGithubModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])))
}));
export {
    d as n, f as r, p as t
};
//# sourceMappingURL=47ed0b35-or7q1bbfh0rntyfi.js.map
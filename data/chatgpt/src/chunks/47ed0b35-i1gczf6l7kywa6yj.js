const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/7998f7a4-bx8ch09n8vejoo40.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/conversation-small-dwpaie1hln28efxb.js", "assets/4813494d-r54yv6lv29x4ew99.js", "assets/root-lelxp0l2.css", "assets/30901919-k5uqyx4vyplt9toa.js", "assets/c470f5ab-bhx5jraq636jc4ww.js", "assets/0e5afe53-d830ix843j2kh0p0.js", "assets/conversation-small-gfjfeahf.css", "assets/c2675c8c-jg3tpj8mw86wdc0g.js", "assets/82782bc9-loong612qtaq7sd9.js", "assets/8b34dbc2-bgocf3s6t6l67twq.js", "assets/global-modals-dxg9ukpk.css"]))) => i.map(i => d[i]);
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as t,
    LU as n,
    Y7 as r,
    a2 as i,
    c2 as a,
    o2 as o
} from "./4813494d-r54yv6lv29x4ew99.js";
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
    a(), n(), t(), o(), u(), l(), i(() => c(() => import(`./7998f7a4-bx8ch09n8vejoo40.js`).then(e => e.ConfirmEnableMfaForGithubModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])))
}));
export {
    d as n, f as r, p as t
};
//# sourceMappingURL=47ed0b35-i1gczf6l7kywa6yj.js.map
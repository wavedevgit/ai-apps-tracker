const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/7998f7a4-khkbabpczhbvur5y.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/conversation-small-fh0oqifngkf5rvl1.js", "assets/4813494d-i89nb6zlze66idsz.js", "assets/root-lelxp0l2.css", "assets/30901919-cmi3nh547dwrqkxv.js", "assets/c470f5ab-ctk9cdujw17c2exz.js", "assets/0e5afe53-fofrudqqfgiodxgc.js", "assets/conversation-small-7l2sfhqg.css", "assets/c2675c8c-4fpunyxk1uf8cfp1.js", "assets/82782bc9-ivetrmhdn140ze7c.js", "assets/8b34dbc2-peb5nzi8z3rrflnv.js", "assets/global-modals-dxg9ukpk.css"]))) => i.map(i => d[i]);
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
} from "./4813494d-i89nb6zlze66idsz.js";
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
    a(), n(), t(), o(), u(), l(), i(() => c(() => import(`./7998f7a4-khkbabpczhbvur5y.js`).then(e => e.ConfirmEnableMfaForGithubModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])))
}));
export {
    d as n, f as r, p as t
};
//# sourceMappingURL=47ed0b35-eola1chalb7mj5ny.js.map
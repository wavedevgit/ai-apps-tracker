const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/7998f7a4-bevcb00x8w4heaf3.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/conversation-small-bcbq46iub1p0ca1t.js", "assets/4813494d-mdvd4786a87166cc.js", "assets/root-lelxp0l2.css", "assets/30901919-s8bko9nrkqwv6i4f.js", "assets/c470f5ab-jwd0o7jx9i9say9k.js", "assets/0e5afe53-hxm3yzzjqriayom4.js", "assets/conversation-small-ep6mlz5m.css", "assets/c2675c8c-oz03twoan08d72ud.js", "assets/82782bc9-b4xbouzwkkyrfqq2.js", "assets/8b34dbc2-lmwubajnld74ksfm.js", "assets/global-modals-dxg9ukpk.css"]))) => i.map(i => d[i]);
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    I7 as t,
    LU as n,
    M7 as r,
    a2 as i,
    c2 as a,
    o2 as o
} from "./4813494d-mdvd4786a87166cc.js";
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
    a(), n(), t(), o(), u(), l(), i(() => c(() => import(`./7998f7a4-bevcb00x8w4heaf3.js`).then(e => e.ConfirmEnableMfaForGithubModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])))
}));
export {
    d as n, f as r, p as t
};
//# sourceMappingURL=47ed0b35-mtmk41pn6rh5nxnd.js.map
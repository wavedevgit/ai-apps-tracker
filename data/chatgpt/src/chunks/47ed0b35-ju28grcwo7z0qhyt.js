const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/7998f7a4-knwplqtqjd50bved.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/conversation-small-fym1zmu9zimymmm1.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/root-lelxp0l2.css", "assets/30901919-e33mbl5u1y88w5wu.js", "assets/c470f5ab-m68dth1hatzjj8yh.js", "assets/0e5afe53-dl0nq2u2siu8c8q5.js", "assets/conversation-small-iha453gv.css", "assets/c2675c8c-ig7dykzhv7vbqkt7.js", "assets/82782bc9-h658ejxn3ufkvr7a.js", "assets/8b34dbc2-gf9wnwcahty27ylx.js", "assets/global-modals-njebr7y8.css"]))) => i.map(i => d[i]);
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    C0 as t,
    S0 as n,
    T0 as r,
    a7 as i,
    l7 as a,
    pU as o
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    O as s,
    cn as c,
    ln as l,
    s as u
} from "./2340486e-oc6d2eodbcrmxur3.js";

function d() {
    return s({
        queryKey: [`mfa-is-enabled`],
        queryFn: async () => (await i.safeGet(`/accounts/mfa_info`, {})).mfa_enabled_v2
    })
}

function f(e) {
    let {
        data: t,
        isLoading: n,
        isError: r,
        refetch: a
    } = s({
        queryKey: [`mfa-requirement-level-${e}`],
        queryFn: async () => await i.safeGet(`/aip/connectors/{connector_id}/mfa_requirement`, {
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
    } : r ? {
        status: `error`,
        retry: a
    } : {
        status: t?.requirement ?? `not_required`,
        retry: a
    }
}
var p = e((() => {
    r(), o(), a(), t(), u(), l(), n(() => c(() => import(`./7998f7a4-knwplqtqjd50bved.js`).then(e => e.ConfirmEnableMfaForGithubModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])))
}));
export {
    d as n, f as r, p as t
};
//# sourceMappingURL=47ed0b35-ju28grcwo7z0qhyt.js.map
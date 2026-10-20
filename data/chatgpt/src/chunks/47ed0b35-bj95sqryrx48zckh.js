const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/7998f7a4-g0sscd38z2svvn2k.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/conversation-small-l6tnsr2xfn2d55kk.js", "assets/4813494d-ed29bs6yiwucn7st.js", "assets/root-lelxp0l2.css", "assets/30901919-om7b3qf5hp4j9x4l.js", "assets/c470f5ab-d0jxi6yggehv1yt2.js", "assets/0e5afe53-goyw8fd3qndq8rq5.js", "assets/conversation-small-ixfdle4i.css", "assets/c2675c8c-fpv9s4kvd412dyap.js", "assets/82782bc9-cz4jkhg31tycbqqf.js", "assets/8b34dbc2-j8rcexxiltkm8ucr.js", "assets/global-modals-lv5n3ujm.css"]))) => i.map(i => d[i]);
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    F7 as t,
    J0 as n,
    Y0 as r,
    Z0 as i,
    j7 as a,
    zU as o
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    O as s,
    cn as c,
    ln as l,
    s as u
} from "./2340486e-oc6d2eodbcrmxur3.js";

function d() {
    return s({
        queryKey: [`mfa-is-enabled`],
        queryFn: async () => (await a.safeGet(`/accounts/mfa_info`, {})).mfa_enabled_v2
    })
}

function f(e) {
    let {
        data: t,
        isLoading: n,
        isError: r,
        refetch: i
    } = s({
        queryKey: [`mfa-requirement-level-${e}`],
        queryFn: async () => await a.safeGet(`/aip/connectors/{connector_id}/mfa_requirement`, {
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
        retry: i
    } : {
        status: t?.requirement ?? `not_required`,
        retry: i
    }
}
var p = e((() => {
    i(), o(), t(), r(), u(), l(), n(() => c(() => import(`./7998f7a4-g0sscd38z2svvn2k.js`).then(e => e.ConfirmEnableMfaForGithubModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])))
}));
export {
    d as n, f as r, p as t
};
//# sourceMappingURL=47ed0b35-bj95sqryrx48zckh.js.map
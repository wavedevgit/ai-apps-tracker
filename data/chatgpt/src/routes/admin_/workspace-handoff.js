import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    fz as t,
    uz as n
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as r,
    xt as i,
    yt as a
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    n as o,
    t as s
} from "./d06c718e-dm44nle8elvz6ag9.js";

function c(e) {
    let t = e.searchParams.get(`return_to`);
    if (!t) throw i(`/`);
    let n;
    try {
        n = new URL(t, e)
    } catch {
        throw i(`/`)
    }
    if (n.origin !== e.origin || a([{
            path: `/admin/*`
        }], n.pathname) == null || a([{
            path: `/admin/workspace-handoff`
        }], n.pathname) != null) throw i(`/`);
    return n.searchParams.delete(`account_id`), n
}
var l, u = e((() => {
    r(), s(), t(), l = async ({
        request: e
    }) => {
        let t = new URL(e.url),
            n = c(t),
            r = window.__reactRouterDataRouter?.state.navigation.location,
            a = r?.pathname === t.pathname && r.search === t.search ? r : window.location;
        !n.hash && a.pathname === t.pathname && a.search === t.search && (n.hash = a.hash);
        let s = n.pathname + n.search + n.hash;
        if (t.searchParams.set(`return_to`, s), t.hash = ``, await o(new Request(t, {
                signal: e.signal
            })) == null) return null;
        throw i(s)
    }, l.hydrate = !0
}));
e((() => {
    u()
}))();
export {
    n as HydrateFallback, n as
    default, l as clientLoader
};
//# sourceMappingURL=admin_.workspace-handoff-llizkhri.js.map
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    a as t
} from "./b26e60ff-buooiibaqv0tlwsm.js";
var n, r, i, a = e((() => {
    t(), n = (e, t) => {
        if (t == null) return e;
        let n = typeof t == `string` ? new URLSearchParams(t) : t;
        for (let t of n.getAll(`statsig_overrides`)) e.append(`statsig_overrides`, t);
        return e
    }, r = e => {
        let t = new URLSearchParams,
            n = e.searchTerm.trim();
        return n && t.set(`q`, n), e.statusFilter !== `all` && t.set(`status`, e.statusFilter), e.verificationFilter != null && e.verificationFilter !== `all` && t.set(`verified`, e.verificationFilter === `verified` ? `true` : `false`), e.installationPolicyFilter !== `all` && t.set(`policy`, e.installationPolicyFilter), e.sourceFilter !== `all` && t.set(`catalog`, e.sourceFilter), e.categoryFilter !== `all` && t.set(`category`, e.categoryFilter), e.accessFilter !== `__all_roles__` && t.set(`role`, e.accessFilter), e.marketplaceSourceId != null && t.set(`marketplace`, e.marketplaceSourceId), t
    }, i = ({
        pluginId: e,
        vanityName: t,
        plugin: i,
        listState: a,
        openEnableFlow: o = !1,
        currentSearchParams: s
    }) => {
        let c = n(a ? r(a) : new URLSearchParams, s);
        o && c.set(`enable`, `1`);
        let l = c.toString(),
            u = e || i?.id || t || ``;
        return `/admin/plugins/${encodeURIComponent(u)}${l?`?${l}`:``}`
    }
}));
export {
    a as n, i as t
};
//# sourceMappingURL=d91ece2a-j9q4fhpx8usu16xl.js.map
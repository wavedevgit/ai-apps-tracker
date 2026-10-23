import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Hst as t,
    Oct as n,
    fst as r,
    pst as i
} from "./4813494d-mdvd4786a87166cc.js";
import {
    RTn as a,
    zTn as o
} from "./conversation-small-bcbq46iub1p0ca1t.js";

function s(e) {
    return e.get(`search`) ?? e.get(`q`) ?? ``
}
var c = e((() => {}));

function l(e) {
    let n = new URL(e.url),
        i = r(),
        o = i.session?.account,
        s = o?.structure === t.WORKSPACE;
    return {
        country: n.searchParams.get(`country`),
        platform: n.searchParams.get(`platform`) ?? `chat`,
        locale: n.searchParams.get(`locale`) ?? i.locale,
        hasWorkspace: s,
        accountId: o?.id,
        workspaceId: s ? o.id : null,
        productSku: a.CONNECTOR_SETTING
    }
}

function u(e) {
    let t = new URL(e.url);
    return t.pathname.replace(/\/+$/, ``) === `/plugins` && !s(t.searchParams).trim() && !t.searchParams.get(`category`)?.trim() && !t.searchParams.get(`section`)?.trim()
}
var d = e((() => {
    n(), o(), c(), i()
}));
export {
    c as a, s as i, d as n, u as r, l as t
};
//# sourceMappingURL=55be7374-nqj38ubqqfqwowr5.js.map
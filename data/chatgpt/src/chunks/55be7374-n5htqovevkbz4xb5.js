import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Pst as t,
    ast as n,
    bct as r,
    ist as i
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    FTn as a,
    PTn as o
} from "./conversation-small-m08q51xmfe7gjq3d.js";

function s(e) {
    return e.get(`search`) ?? e.get(`q`) ?? ``
}
var c = e((() => {}));

function l(e) {
    let n = new URL(e.url),
        r = i(),
        a = r.session?.account,
        s = a?.structure === t.WORKSPACE;
    return {
        country: n.searchParams.get(`country`),
        platform: n.searchParams.get(`platform`) ?? `chat`,
        locale: n.searchParams.get(`locale`) ?? r.locale,
        hasWorkspace: s,
        accountId: a?.id,
        workspaceId: s ? a.id : null,
        productSku: o.CONNECTOR_SETTING
    }
}

function u(e) {
    let t = new URL(e.url);
    return t.pathname.replace(/\/+$/, ``) === `/plugins` && !s(t.searchParams).trim() && !t.searchParams.get(`category`)?.trim() && !t.searchParams.get(`section`)?.trim()
}
var d = e((() => {
    r(), a(), c(), n()
}));
export {
    c as a, s as i, d as n, u as r, l as t
};
//# sourceMappingURL=55be7374-n5htqovevkbz4xb5.js.map
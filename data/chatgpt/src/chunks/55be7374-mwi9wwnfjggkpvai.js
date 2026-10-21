import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Mst as t,
    nst as n,
    rst as r,
    vct as i
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    gTn as a,
    hTn as o
} from "./conversation-small-ocicxxw6jegn4vux.js";

function s(e) {
    return e.get(`search`) ?? e.get(`q`) ?? ``
}
var c = e((() => {}));

function l(e) {
    let r = new URL(e.url),
        i = n(),
        a = i.session?.account,
        s = a?.structure === t.WORKSPACE;
    return {
        country: r.searchParams.get(`country`),
        platform: r.searchParams.get(`platform`) ?? `chat`,
        locale: r.searchParams.get(`locale`) ?? i.locale,
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
    i(), a(), c(), r()
}));
export {
    c as a, s as i, d as n, u as r, l as t
};
//# sourceMappingURL=55be7374-mwi9wwnfjggkpvai.js.map
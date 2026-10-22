import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Fst as t,
    ast as n,
    ost as r,
    xct as i
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    FTn as a,
    PTn as o
} from "./conversation-small-dwpaie1hln28efxb.js";

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
//# sourceMappingURL=55be7374-ogl8lya338bl92hc.js.map
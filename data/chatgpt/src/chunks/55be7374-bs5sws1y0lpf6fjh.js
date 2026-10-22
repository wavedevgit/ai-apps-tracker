import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Fst as t,
    ast as n,
    ost as r,
    xct as i
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    LTn as a,
    RTn as o
} from "./conversation-small-m7dgsxtvvivh3e6t.js";

function s(e) {
    return e.get(`search`) ?? e.get(`q`) ?? ``
}
var c = e((() => {}));

function l(e) {
    let r = new URL(e.url),
        i = n(),
        o = i.session?.account,
        s = o?.structure === t.WORKSPACE;
    return {
        country: r.searchParams.get(`country`),
        platform: r.searchParams.get(`platform`) ?? `chat`,
        locale: r.searchParams.get(`locale`) ?? i.locale,
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
    i(), o(), c(), r()
}));
export {
    c as a, s as i, d as n, u as r, l as t
};
//# sourceMappingURL=55be7374-bs5sws1y0lpf6fjh.js.map
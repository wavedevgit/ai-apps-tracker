import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Mst as t,
    nst as n,
    rst as r,
    vct as i
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    _Tn as a,
    vTn as o
} from "./conversation-small-i79e9c315w50am5f.js";

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
//# sourceMappingURL=55be7374-dh1qzly62j7wrdzp.js.map
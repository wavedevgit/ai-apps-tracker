import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Rot as t,
    cot as n,
    lot as r,
    wst as i
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Gwn as a,
    Wwn as o
} from "./conversation-small-fym1zmu9zimymmm1.js";

function s(e) {
    return e.get(`search`) ?? e.get(`q`) ?? ``
}
var c = e((() => {}));

function l(e) {
    let r = new URL(e.url),
        i = n();
    return {
        country: r.searchParams.get(`country`),
        platform: r.searchParams.get(`platform`) ?? `chat`,
        locale: r.searchParams.get(`locale`) ?? i.locale,
        hasWorkspace: i.session?.account?.structure === t.WORKSPACE,
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
//# sourceMappingURL=55be7374-gvdthqnsy7avjfwo.js.map
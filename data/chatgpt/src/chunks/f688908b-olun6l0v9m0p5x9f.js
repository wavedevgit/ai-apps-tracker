import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ait as t,
    Brt as n,
    Nit as r,
    Pit as i,
    QG as a,
    ZG as o,
    git as s,
    i1 as c,
    iot as l,
    l7 as u,
    o7 as d,
    rot as f,
    u1 as p,
    vit as m,
    zrt as h
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Gwn as g,
    Wwn as _
} from "./conversation-small-fym1zmu9zimymmm1.js";

function v({
    nativeEnabled: e,
    connectorType: t,
    workspaceId: n,
    requestBody: r
}) {
    return e && t === `SERVICE` && !!n && !x(r.logo_url) && !x(r.logo_url_dark) && w(n)
}
async function y({
    workspaceId: e,
    templateId: n,
    requestBody: i,
    onBeforeWrite: a,
    productSku: c = _.ADMIN_SETTING
}) {
    let l = C(e);
    if (!l || !S()) throw Error(`The current workspace administrator has changed.`);
    let u = await h({
            reason: `service_template_instantiation_before_write`,
            method: `POST`,
            path: `/backend-api/v2/apps/templates/{template_id}/instantiate`
        }),
        f = C(e);
    if (!u.ok || f?.accountUserId !== l.accountUserId || f?.actorUserId !== l.actorUserId) throw Error(`The current workspace administrator has changed.`);
    let p = o(e);
    if (p == null) throw Error(`The current workspace administrator has changed.`);
    return b ??= new d({
        baseUrl: r.replace(/\/$/, ``),
        targetRoutesAreCanonical: !0
    }), a?.(), b.safePost(`/v2/apps/templates/{template_id}/instantiate`, {
        authOption: t.Required,
        disableAutomaticRetry: !0,
        additionalHeaders: {
            ...p,
            [s]: c,
            "x-openai-use-sheep": `1`
        },
        parameters: {
            path: {
                template_id: n
            }
        },
        requestBody: i
    })
}
var b, x, S, C, w, T, E = e((() => {
    g(), p(), n(), l(), i(), m(), u(), a(), x = e => e?.trimStart().toLowerCase().startsWith(`data:`) === !0, S = () => {
        if (typeof window > `u`) return !1;
        let e = new URL(r, window.location.href);
        return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
    }, C = e => {
        let t = c(),
            n = f();
        if (!(!e || !t?.normalizedAccountUserId || !n?.user?.id || n.account?.id !== e || t.authUserId !== n.user.id || t.getWorkspaceId() !== e || !t.isOwnerOfAccount() && !t.isAdminOfAccount())) return {
            accountUserId: t.normalizedAccountUserId,
            actorUserId: n.user.id
        }
    }, w = e => !!e && S() && C(e) != null && o(e) != null, T = y
}));
export {
    y as a, T as i, w as n, E as r, v as t
};
//# sourceMappingURL=f688908b-olun6l0v9m0p5x9f.js.map
const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/e44043a9-beb76p045suzj0tp.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-qsuygr73qjc6rh65.js", "assets/2340486e-komxp8tzs51ny4jj.js", "assets/root-lelxp0l2.css", "assets/46464433-ink33fnzh9e4tama.js", "assets/conversation-small-cawdu7il3ha6y70c.js", "assets/30901919-jory365vq6ym5crx.js", "assets/c470f5ab-in0lllrdrzeo67gs.js", "assets/0e5afe53-f9gmgfmgrr83ziw3.js", "assets/conversation-small-czggvj2v.css", "assets/c65bcee1-b0vv5cgnsrbsj670.js", "assets/c2675c8c-nxl2ic2ofk2vw70s.js", "assets/82782bc9-jj605vonxg0iyc7p.js", "assets/8b34dbc2-d4icgkio4i3wfm6q.js", "assets/global-modals-lv5n3ujm.css", "assets/832dbd3a-klwywsa40rwcjix6.js", "assets/35efed7b-erfaeg1cma06avez.js", "assets/bb6515d2-i85q2pz7w3prqlp3.js", "assets/58f127ca-fk0jao6b3k91zjvp.js", "assets/12ecfb5d-mmrnvhweq1606rmv.js", "assets/ea670f64-f4ml5gxiw1llvybm.js", "assets/1e80c281-hrrji7u65in7gkqo.js", "assets/16e34fcb-fit1mu5dwux7fh71.js", "assets/e1258b01-gguen6vzza2gncx4.js", "assets/e048c888-fqt10wzt8hhdd5l4.js", "assets/9d2fe035-f5zowvsmdk7oerps.js"]))) => i.map(i => d[i]);
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    CK as t,
    Dat as n,
    Git as r,
    Hnt as i,
    J0 as a,
    Jnt as o,
    Nat as s,
    Y0 as c,
    aat as l,
    lat as u,
    qit as d,
    wK as f
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    H as p,
    ln as m,
    s as h,
    un as g,
    w as _
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    _nt as v,
    aTn as y,
    fwn as b,
    iTn as x,
    uwn as S,
    vnt as C
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    dy as w,
    ey as T,
    ly as E,
    ny as D,
    py as O,
    ry as k
} from "./c2675c8c-nxl2ic2ofk2vw70s.js";
import {
    d as A,
    f as j,
    l as M,
    m as N,
    u as P
} from "./eec17ee5-pfmqng99zntx5uvn.js";
import {
    i as F,
    r as I,
    t as L
} from "./595779bf-kwm49o3hdvs7w3yc.js";
var R, z, B, V = e((() => {
    f(), w(), y(), C(), u(), s(), d(), o(), R = (e, t) => {
        if (!(e instanceof n) || e.status !== 409 || e.code !== `APP_USED_BY_OTHER_PLUGINS`) return null;
        let r = e.detail;
        if (typeof r != `object` || !r || !(`code` in r) || r.code !== `APP_USED_BY_OTHER_PLUGINS` || !(`message` in r) || typeof r.message != `string` || !(`impact` in r) || typeof r.impact != `object` || r.impact == null || !(`supported_policies` in r) || !Array.isArray(r.supported_policies) || r.supported_policies.length !== 2 || !r.supported_policies.every(e => e === `reject` || e === `force`) || !r.supported_policies.includes(`reject`) || !r.supported_policies.includes(`force`)) return null;
        let i = r.impact;
        if (!(`app_id` in i) || i.app_id !== t || !(`dependent_plugins` in i) || !Array.isArray(i.dependent_plugins) || i.dependent_plugins.length > 10 || !(`dependent_plugin_count` in i) || typeof i.dependent_plugin_count != `number` || !Number.isSafeInteger(i.dependent_plugin_count) || i.dependent_plugins.length !== i.dependent_plugin_count || !(`dependent_plugin_count_is_complete` in i) || i.dependent_plugin_count_is_complete !== !1) return null;
        let a = [],
            o = new Set;
        for (let e of i.dependent_plugins) {
            if (typeof e != `object` || !e || !(`plugin_id` in e) || typeof e.plugin_id != `string` || e.plugin_id.trim() === `` || !(`display_name` in e) || typeof e.display_name != `string` || e.display_name.trim() === `` || o.has(e.plugin_id)) return null;
            o.add(e.plugin_id), a.push({
                plugin_id: e.plugin_id,
                display_name: e.display_name
            })
        }
        return {
            code: `APP_USED_BY_OTHER_PLUGINS`,
            message: r.message,
            impact: {
                app_id: t,
                dependent_plugins: a,
                dependent_plugin_count: i.dependent_plugin_count,
                dependent_plugin_count_is_complete: i.dependent_plugin_count_is_complete
            },
            supported_policies: r.supported_policies
        }
    }, z = e => {
        if (!(e instanceof n)) return !1;
        let t;
        if (e.status === 400) {
            let n = e.detail;
            if (typeof n != `object` || !n || Array.isArray(n) || !(`retryable` in n) || n.retryable !== !0 || !(`message` in n) || typeof n.message != `string` || n.message.trim() === ``) return !1;
            t = e.json.validation_errors
        } else if (e.status === 422) {
            if (e.json.validation_errors !== void 0) return !1;
            t = e.detail
        } else return !1;
        if (!Array.isArray(t) || t.length !== 1) return !1;
        let r = t[0];
        return typeof r == `object` && !!r && `type` in r && r.type === `extra_forbidden` && `loc` in r && Array.isArray(r.loc) && r.loc.length === 4 && r.loc[0] === `body` && r.loc[1] === `app_updates` && r.loc[2] === 0 && r.loc[3] === `shared_app_policy` && `input` in r && r.input === `reject`
    }, B = async ({
        workspaceId: e,
        pluginId: n,
        app: a,
        enabled: o,
        enabledRoleIds: s,
        sharedAppPolicy: c
    }) => {
        if (c !== void 0 && o) throw Error(`Shared-app policy is only valid when disabling a plugin.`);
        if (i(`4057407015`)) return await v.safePatch(`/plugins/admin/{plugin_id}/settings`, {
            authOption: l.Required,
            additionalHeaders: {
                ...t(e),
                [r]: x.ADMIN_SETTING
            },
            parameters: {
                path: {
                    plugin_id: n
                }
            },
            requestBody: {
                enabled: o,
                app_updates: [{
                    app_id: a.primaryConnector.id,
                    enabled: o,
                    ...s == null ? {} : {
                        enabled_role_ids: s
                    },
                    ...c == null ? {} : {
                        shared_app_policy: c
                    }
                }],
                source_surface: `admin_plugins`
            }
        });
        if (c !== void 0 && c !== `reject`) throw Error(`Shared-app policy requires the canonical plugin-service mutation.`);
        await Promise.all([O({
            workspaceId: e,
            app: a,
            enabled: o,
            ...s == null ? {} : {
                enabledRoles: s
            },
            auditContext: {
                sourceSurface: `admin_plugins`,
                contextPluginId: n
            },
            analyticsAction: o ? `enable_app` : `disable_app`
        }), ...o ? [] : [E(e, a)]])
    }
}));
async function H(e, t, n, r) {
    let i = N();
    if (L(n, r), M(i, n), !P(i, n, t)) throw new p({
        revert: !0
    });
    let a = await e.fetchQuery(U(t, n, r, i));
    return L(n, r), M(i, n), a
}
var U, W = e((() => {
        S(), f(), C(), u(), s(), d(), h(), F(), j(), k(), U = (e, r, i, a = N()) => _({
            queryKey: D(`template-eligibility`, r, e, i, a),
            enabled: !!(e && r && i),
            staleTime: T,
            queryFn: async ({
                client: o,
                signal: s
            }) => {
                s.throwIfAborted(), L(r, i), M(a, r, s);
                let c;
                try {
                    c = (a === `sheep` ? await A({
                        pluginId: e,
                        workspaceId: r,
                        signal: s,
                        includeAdminDetail: !0
                    }) : await b({
                        operation: `plugin_detail`,
                        transport: `plugin_service`,
                        workspaceId: r,
                        signal: s,
                        request: n => v.safeGet(`/plugins/admin/{plugin_id}`, {
                            ...n,
                            authOption: l.Required,
                            additionalHeaders: {
                                ...t(r),
                                "OAI-Product-Sku": `ADMIN_SETTING`
                            },
                            signal: s,
                            parameters: {
                                path: {
                                    plugin_id: e
                                },
                                query: {
                                    include: `admin_detail`
                                }
                            }
                        })
                    })).detail?.templates ?? []
                } catch (e) {
                    if (!(e instanceof n) || e.status !== 413 && e.status !== 503) throw e;
                    c = (await o.fetchQuery(I(r, i))).templates
                }
                return L(r, i), M(a, r, s), c
            }
        })
    })),
    G, K = e((() => {
        c(), g(), G = a(() => m(() => import(`./e44043a9-beb76p045suzj0tp.js`).then(e => e.AdminPluginMicrosoftPermissionsBeforeEnableModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26])))
    }));
export {
    W as a, z as c, U as i, B as l, K as n, R as o, H as r, V as s, G as t
};
//# sourceMappingURL=ef61e4c2-lyk6d3zus2u9p7b0.js.map
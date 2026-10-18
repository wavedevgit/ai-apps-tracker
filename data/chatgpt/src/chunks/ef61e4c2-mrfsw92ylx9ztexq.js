const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/e44043a9-lro8elkwiw1azc8c.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/46464433-i8k628j3n5wwc6bl.js", "assets/conversation-small-fym1zmu9zimymmm1.js", "assets/30901919-e33mbl5u1y88w5wu.js", "assets/c470f5ab-m68dth1hatzjj8yh.js", "assets/0e5afe53-dl0nq2u2siu8c8q5.js", "assets/conversation-small-iha453gv.css", "assets/c65bcee1-iqb2wk9s9q71m4ks.js", "assets/c2675c8c-ig7dykzhv7vbqkt7.js", "assets/82782bc9-h658ejxn3ufkvr7a.js", "assets/8b34dbc2-gf9wnwcahty27ylx.js", "assets/global-modals-njebr7y8.css", "assets/832dbd3a-8ils21g1hok0as2u.js", "assets/35efed7b-maxibsyj8u9alggl.js", "assets/bb6515d2-kwgbk3krkzbqnh7d.js", "assets/58f127ca-obgb448743afeso0.js", "assets/12ecfb5d-noztpx42cigxuot7.js", "assets/ea670f64-lktv1n0bakiceg2d.js", "assets/1e80c281-ccbzyhw9s935ki06.js", "assets/16e34fcb-fvkkfa9ku41olykd.js", "assets/e1258b01-dvyn277oke1zy2e2.js", "assets/e048c888-c5axk8w5li6vkydp.js", "assets/9d2fe035-mjwuqgsxuqosyae2.js"]))) => i.map(i => d[i]);
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ait as t,
    C0 as n,
    Pit as r,
    QG as i,
    Qit as a,
    S0 as o,
    ZG as s,
    git as c,
    iat as l,
    pnt as u,
    vit as d,
    ynt as f
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    H as p,
    cn as m,
    ln as h,
    s as g,
    w as _
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Gwn as v,
    QCn as y,
    Wwn as b,
    XCn as x,
    gnt as S,
    hnt as C
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Qv as w,
    Sy as T,
    by as E,
    ey as D,
    ty as O,
    vy as k
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    d as A,
    f as j,
    l as M,
    m as N,
    u as P
} from "./eec17ee5-lm6v8wlbrzui7fe1.js";
import {
    i as F,
    r as I,
    t as L
} from "./595779bf-b4o1b0amyrjxv489.js";
var R, z, B, V = e((() => {
    i(), E(), v(), S(), r(), l(), d(), f(), R = (e, t) => {
        if (!(e instanceof a) || e.status !== 409 || e.code !== `APP_USED_BY_OTHER_PLUGINS`) return null;
        let n = e.detail;
        if (typeof n != `object` || !n || !(`code` in n) || n.code !== `APP_USED_BY_OTHER_PLUGINS` || !(`message` in n) || typeof n.message != `string` || !(`impact` in n) || typeof n.impact != `object` || n.impact == null || !(`supported_policies` in n) || !Array.isArray(n.supported_policies) || n.supported_policies.length !== 2 || !n.supported_policies.every(e => e === `reject` || e === `force`) || !n.supported_policies.includes(`reject`) || !n.supported_policies.includes(`force`)) return null;
        let r = n.impact;
        if (!(`app_id` in r) || r.app_id !== t || !(`dependent_plugins` in r) || !Array.isArray(r.dependent_plugins) || r.dependent_plugins.length > 10 || !(`dependent_plugin_count` in r) || typeof r.dependent_plugin_count != `number` || !Number.isSafeInteger(r.dependent_plugin_count) || r.dependent_plugins.length !== r.dependent_plugin_count || !(`dependent_plugin_count_is_complete` in r) || r.dependent_plugin_count_is_complete !== !1) return null;
        let i = [],
            o = new Set;
        for (let e of r.dependent_plugins) {
            if (typeof e != `object` || !e || !(`plugin_id` in e) || typeof e.plugin_id != `string` || e.plugin_id.trim() === `` || !(`display_name` in e) || typeof e.display_name != `string` || e.display_name.trim() === `` || o.has(e.plugin_id)) return null;
            o.add(e.plugin_id), i.push({
                plugin_id: e.plugin_id,
                display_name: e.display_name
            })
        }
        return {
            code: `APP_USED_BY_OTHER_PLUGINS`,
            message: n.message,
            impact: {
                app_id: t,
                dependent_plugins: i,
                dependent_plugin_count: r.dependent_plugin_count,
                dependent_plugin_count_is_complete: r.dependent_plugin_count_is_complete
            },
            supported_policies: n.supported_policies
        }
    }, z = e => {
        if (!(e instanceof a)) return !1;
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
        let n = t[0];
        return typeof n == `object` && !!n && `type` in n && n.type === `extra_forbidden` && `loc` in n && Array.isArray(n.loc) && n.loc.length === 4 && n.loc[0] === `body` && n.loc[1] === `app_updates` && n.loc[2] === 0 && n.loc[3] === `shared_app_policy` && `input` in n && n.input === `reject`
    }, B = async ({
        workspaceId: e,
        pluginId: n,
        app: r,
        enabled: i,
        enabledRoleIds: a,
        sharedAppPolicy: o
    }) => {
        if (o !== void 0 && i) throw Error(`Shared-app policy is only valid when disabling a plugin.`);
        if (u(`4057407015`)) return await C.safePatch(`/plugins/admin/{plugin_id}/settings`, {
            authOption: t.Required,
            additionalHeaders: {
                ...s(e),
                [c]: b.ADMIN_SETTING
            },
            parameters: {
                path: {
                    plugin_id: n
                }
            },
            requestBody: {
                enabled: i,
                app_updates: [{
                    app_id: r.primaryConnector.id,
                    enabled: i,
                    ...a == null ? {} : {
                        enabled_role_ids: a
                    },
                    ...o == null ? {} : {
                        shared_app_policy: o
                    }
                }],
                source_surface: `admin_plugins`
            }
        });
        if (o !== void 0 && o !== `reject`) throw Error(`Shared-app policy requires the canonical plugin-service mutation.`);
        await Promise.all([T({
            workspaceId: e,
            app: r,
            enabled: i,
            ...a == null ? {} : {
                enabledRoles: a
            },
            auditContext: {
                sourceSurface: `admin_plugins`,
                contextPluginId: n
            },
            analyticsAction: i ? `enable_app` : `disable_app`
        }), ...i ? [] : [k(e, r)]])
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
        x(), i(), S(), r(), l(), d(), g(), F(), j(), O(), U = (e, n, r, i = N()) => _({
            queryKey: D(`template-eligibility`, n, e, r, i),
            enabled: !!(e && n && r),
            staleTime: w,
            queryFn: async ({
                client: o,
                signal: c
            }) => {
                c.throwIfAborted(), L(n, r), M(i, n, c);
                let l;
                try {
                    l = (i === `sheep` ? await A({
                        pluginId: e,
                        workspaceId: n,
                        signal: c,
                        includeAdminDetail: !0
                    }) : await y({
                        operation: `plugin_detail`,
                        transport: `plugin_service`,
                        workspaceId: n,
                        signal: c,
                        request: r => C.safeGet(`/plugins/admin/{plugin_id}`, {
                            ...r,
                            authOption: t.Required,
                            additionalHeaders: {
                                ...s(n),
                                "OAI-Product-Sku": `ADMIN_SETTING`
                            },
                            signal: c,
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
                    if (!(e instanceof a) || e.status !== 413 && e.status !== 503) throw e;
                    l = (await o.fetchQuery(I(n, r))).templates
                }
                return L(n, r), M(i, n, c), l
            }
        })
    })),
    G, K = e((() => {
        n(), h(), G = o(() => m(() => import(`./e44043a9-lro8elkwiw1azc8c.js`).then(e => e.AdminPluginMicrosoftPermissionsBeforeEnableModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26])))
    }));
export {
    W as a, z as c, U as i, B as l, K as n, R as o, H as r, V as s, G as t
};
//# sourceMappingURL=ef61e4c2-mrfsw92ylx9ztexq.js.map
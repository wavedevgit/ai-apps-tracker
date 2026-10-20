const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/e44043a9-jxin4hpfuv2dkdtx.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-ed29bs6yiwucn7st.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/46464433-ladl1n0axikr8gyx.js", "assets/conversation-small-l6tnsr2xfn2d55kk.js", "assets/30901919-om7b3qf5hp4j9x4l.js", "assets/c470f5ab-d0jxi6yggehv1yt2.js", "assets/0e5afe53-goyw8fd3qndq8rq5.js", "assets/conversation-small-ixfdle4i.css", "assets/c65bcee1-eckkd8yn3qrlxc1q.js", "assets/c2675c8c-fpv9s4kvd412dyap.js", "assets/82782bc9-cz4jkhg31tycbqqf.js", "assets/8b34dbc2-j8rcexxiltkm8ucr.js", "assets/global-modals-lv5n3ujm.css", "assets/832dbd3a-bk26djhng80afq3w.js", "assets/35efed7b-mjyj2x2a4oblnb3b.js", "assets/bb6515d2-ega2epfujxx49sd4.js", "assets/58f127ca-gqicanscp02746uq.js", "assets/12ecfb5d-hcwpsjpo4f5md7fj.js", "assets/ea670f64-l77gbhjzwj6kv4yz.js", "assets/1e80c281-beo3o7l868elmg1x.js", "assets/16e34fcb-hdb1mgyvgkr28amc.js", "assets/e1258b01-mthkgiytv33jieoc.js", "assets/e048c888-jeydtg27wjx2me65.js", "assets/9d2fe035-dchbk1z958i5vx87.js"]))) => i.map(i => d[i]);
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bnt as t,
    CK as n,
    Git as r,
    J0 as i,
    Knt as a,
    Tat as o,
    Uit as s,
    Y0 as c,
    jat as l,
    rat as u,
    sat as d,
    wK as f
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    H as p,
    cn as m,
    ln as h,
    s as g,
    w as _
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    _nt as v,
    dwn as y,
    iTn as b,
    lwn as x,
    rTn as S,
    vnt as C
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    Qv as w,
    dy as T,
    ey as E,
    ly as D,
    sy as O,
    ty as k
} from "./c2675c8c-fpv9s4kvd412dyap.js";
import {
    d as A,
    f as j,
    l as M,
    m as N,
    u as P
} from "./eec17ee5-fdfjyfmbzzdpknv9.js";
import {
    i as F,
    r as I,
    t as L
} from "./595779bf-krq1t0u91xc2vyfv.js";
var R, z, B, V = e((() => {
    f(), D(), b(), C(), d(), l(), r(), a(), R = (e, t) => {
        if (!(e instanceof o) || e.status !== 409 || e.code !== `APP_USED_BY_OTHER_PLUGINS`) return null;
        let n = e.detail;
        if (typeof n != `object` || !n || !(`code` in n) || n.code !== `APP_USED_BY_OTHER_PLUGINS` || !(`message` in n) || typeof n.message != `string` || !(`impact` in n) || typeof n.impact != `object` || n.impact == null || !(`supported_policies` in n) || !Array.isArray(n.supported_policies) || n.supported_policies.length !== 2 || !n.supported_policies.every(e => e === `reject` || e === `force`) || !n.supported_policies.includes(`reject`) || !n.supported_policies.includes(`force`)) return null;
        let r = n.impact;
        if (!(`app_id` in r) || r.app_id !== t || !(`dependent_plugins` in r) || !Array.isArray(r.dependent_plugins) || r.dependent_plugins.length > 10 || !(`dependent_plugin_count` in r) || typeof r.dependent_plugin_count != `number` || !Number.isSafeInteger(r.dependent_plugin_count) || r.dependent_plugins.length !== r.dependent_plugin_count || !(`dependent_plugin_count_is_complete` in r) || r.dependent_plugin_count_is_complete !== !1) return null;
        let i = [],
            a = new Set;
        for (let e of r.dependent_plugins) {
            if (typeof e != `object` || !e || !(`plugin_id` in e) || typeof e.plugin_id != `string` || e.plugin_id.trim() === `` || !(`display_name` in e) || typeof e.display_name != `string` || e.display_name.trim() === `` || a.has(e.plugin_id)) return null;
            a.add(e.plugin_id), i.push({
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
        if (!(e instanceof o)) return !1;
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
        pluginId: r,
        app: i,
        enabled: a,
        enabledRoleIds: o,
        sharedAppPolicy: c
    }) => {
        if (c !== void 0 && a) throw Error(`Shared-app policy is only valid when disabling a plugin.`);
        if (t(`4057407015`)) return await v.safePatch(`/plugins/admin/{plugin_id}/settings`, {
            authOption: u.Required,
            additionalHeaders: {
                ...n(e),
                [s]: S.ADMIN_SETTING
            },
            parameters: {
                path: {
                    plugin_id: r
                }
            },
            requestBody: {
                enabled: a,
                app_updates: [{
                    app_id: i.primaryConnector.id,
                    enabled: a,
                    ...o == null ? {} : {
                        enabled_role_ids: o
                    },
                    ...c == null ? {} : {
                        shared_app_policy: c
                    }
                }],
                source_surface: `admin_plugins`
            }
        });
        if (c !== void 0 && c !== `reject`) throw Error(`Shared-app policy requires the canonical plugin-service mutation.`);
        await Promise.all([T({
            workspaceId: e,
            app: i,
            enabled: a,
            ...o == null ? {} : {
                enabledRoles: o
            },
            auditContext: {
                sourceSurface: `admin_plugins`,
                contextPluginId: r
            },
            analyticsAction: a ? `enable_app` : `disable_app`
        }), ...a ? [] : [O(e, i)]])
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
        x(), f(), C(), d(), l(), r(), g(), F(), j(), k(), U = (e, t, r, i = N()) => _({
            queryKey: E(`template-eligibility`, t, e, r, i),
            enabled: !!(e && t && r),
            staleTime: w,
            queryFn: async ({
                client: a,
                signal: s
            }) => {
                s.throwIfAborted(), L(t, r), M(i, t, s);
                let c;
                try {
                    c = (i === `sheep` ? await A({
                        pluginId: e,
                        workspaceId: t,
                        signal: s,
                        includeAdminDetail: !0
                    }) : await y({
                        operation: `plugin_detail`,
                        transport: `plugin_service`,
                        workspaceId: t,
                        signal: s,
                        request: r => v.safeGet(`/plugins/admin/{plugin_id}`, {
                            ...r,
                            authOption: u.Required,
                            additionalHeaders: {
                                ...n(t),
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
                    if (!(e instanceof o) || e.status !== 413 && e.status !== 503) throw e;
                    c = (await a.fetchQuery(I(t, r))).templates
                }
                return L(t, r), M(i, t, s), c
            }
        })
    })),
    G, K = e((() => {
        c(), h(), G = i(() => m(() => import(`./e44043a9-jxin4hpfuv2dkdtx.js`).then(e => e.AdminPluginMicrosoftPermissionsBeforeEnableModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26])))
    }));
export {
    W as a, z as c, U as i, B as l, K as n, R as o, H as r, V as s, G as t
};
//# sourceMappingURL=ef61e4c2-ejiqdh0kx614u3w0.js.map
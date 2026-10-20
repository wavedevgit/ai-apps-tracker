import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Jot as t,
    Zot as n
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    _b as r,
    bb as i,
    fb as a,
    gb as o,
    hb as s,
    mb as c,
    vb as l,
    yb as u
} from "./c2675c8c-nxl2ic2ofk2vw70s.js";
var d, f, p, m, h, g, _ = e((() => {
        n(), d = t(() => ({
            contextKey: null,
            latestLocationKey: null,
            detailActive: !1,
            entries: new Map
        })), f = () => {
            d().latestLocationKey = null
        }, p = () => {
            let e = d(),
                t = e.latestLocationKey;
            return () => (e.latestLocationKey = t, e.detailActive = !0, () => {
                e.detailActive = !1, e.latestLocationKey = null
            })
        }, m = e => {
            let t = d();
            t.contextKey !== e && (t.contextKey = e, t.latestLocationKey = null, t.entries.clear())
        }, h = e => {
            m(e.contextKey);
            let t = d();
            if (t.latestLocationKey = e.locationKey, t.entries.delete(e.locationKey), t.entries.set(e.locationKey, e), t.entries.size > 20) {
                let e = t.entries.keys().next().value;
                e != null && t.entries.delete(e)
            }
        }, g = (e, t, n) => {
            let r = d(),
                i = n === `POP` ? r.entries.get(t) : r.detailActive && r.latestLocationKey != null ? r.entries.get(r.latestLocationKey) : void 0;
            return i != null && i.contextKey === e && Date.now() - i.savedAt < 5 * 6e4 ? i : null
        }
    })),
    v, y, b, x, S, C = e((() => {
        r(), v = `adminPlugins.launch.documentRender`, y = () => {
            if (typeof window > `u` || typeof performance.getEntriesByType != `function`) return `unknown`;
            let e = s({
                currentPathname: window.location.pathname,
                currentSearch: window.location.search,
                hasRecordedDocumentRender: typeof performance.getEntriesByName == `function` && performance.getEntriesByName(v).length > 0,
                navigationEntryUrl: performance.getEntriesByType(`navigation`)[0]?.name
            });
            return e === `document` && performance.mark?.(v), e
        }, b = ({
            page: e
        }) => {
            let t = performance.now(),
                n = y(),
                r = `unknown`,
                s = 0,
                d = null,
                f = !1,
                p = new Set,
                m = () => ({
                    dataSource: r,
                    navigationType: n,
                    page: e,
                    uiVersion: `v2`
                }),
                h = e => {
                    f || p.has(e) || (p.add(e), i({
                        ...m(),
                        durationMs: o({
                            navigationType: n,
                            nowMs: performance.now(),
                            pageMountedAtMs: t
                        }),
                        stage: e
                    }))
                },
                g = e => {
                    if (f || d != null) return;
                    d = e, window.clearTimeout(_);
                    let r = performance.now();
                    u({
                        ...m(),
                        durationMs: o({
                            navigationType: n,
                            nowMs: r,
                            pageMountedAtMs: t
                        }),
                        result: e
                    })
                },
                _ = window.setTimeout(() => {
                    d != null || f || (l({
                        ...m(),
                        phase: `timeout`,
                        rowCount: s
                    }), g(`timeout`))
                }, a),
                v = () => {
                    d ?? g(`abandoned`), c()
                };
            return window.addEventListener(`pagehide`, v, {
                capture: !0
            }), {
                update(e) {
                    if (!(f || d != null)) {
                        if (s = e.loadingRows, r === `unknown` && (e.hasPrimaryResult || e.hasError) && (r = e.dataSource), !e.hasPrimaryResult) {
                            e.hasError && g(`error`);
                            return
                        }
                        if (p.has(`primary_result_ready`) || (h(`primary_result_ready`), l({
                                ...m(),
                                phase: `primary_result_ready`,
                                rowCount: e.loadingRows
                            })), e.hasError) {
                            g(`error`);
                            return
                        }
                        if (e.isEmpty) {
                            g(`empty`);
                            return
                        }
                        e.hasMeaningfulContent && h(`first_meaningful_content`), e.appsReady && h(`apps_ready`), e.availabilityReady && h(`availability_ready`), e.installationPolicyReady && h(`installation_policy_ready`), e.rbacRolesReady === !0 && h(`rbac_roles_ready`), e.hasMeaningfulContent && e.loadingRows === 0 && e.appsReady && e.availabilityReady && e.installationPolicyReady && e.rbacRolesReady === !0 && !p.has(`all_visible_rows_ready`) && (h(`all_visible_rows_ready`), l({
                            ...m(),
                            phase: `all_visible_rows_ready`,
                            rowCount: 0
                        }), g(`success`))
                    }
                },
                dispose() {
                    f || (g(`abandoned`), f = !0, window.clearTimeout(_), window.removeEventListener(`pagehide`, v, {
                        capture: !0
                    }))
                }
            }
        }, x = ({
            queryClient: e,
            treatCachedWorkspaceRoleErrorsAsFatal: t = !1,
            workspaceId: n
        }) => {
            let r = e.getQueryCache().findAll({
                    queryKey: [`roles`, n],
                    type: `active`
                }),
                i = e.getQueryCache().findAll({
                    queryKey: [n, `roles`],
                    type: `active`
                });
            return r.some(e => e.state.status === `error`) || i.some(e => e.state.status === `error` && (t || e.state.data == null)) ? `error` : [...r, ...i].some(e => e.state.fetchStatus === `fetching`) ? `pending` : `ready`
        }, S = ({
            getRbacRoleRequestState: e,
            snapshot: t,
            subscribeToRbacRoleRequests: n,
            tracker: r
        }) => {
            if (r.update(t), t.hasError || t.rbacRolesReady === !0 || !t.hasMeaningfulContent || t.loadingRows !== 0 || !t.appsReady || !t.availabilityReady || !t.installationPolicyReady) return;
            let i = !1,
                a, o = () => {
                    if (i) return;
                    let n = e();
                    n !== `pending` && (a?.(), r.update({
                        ...t,
                        hasError: t.hasError || n === `error`,
                        rbacRolesReady: n === `ready`
                    }))
                };
            return queueMicrotask(() => {
                if (!i) {
                    if (e() === `pending`) {
                        a = n(o), o();
                        return
                    }
                    o()
                }
            }), () => {
                i = !0, a?.()
            }
        }
    }));
export {
    f as a, _ as c, S as i, m as l, x as n, p as o, C as r, g as s, b as t, h as u
};
//# sourceMappingURL=2c1ebeb2-mx2lqytwt9oqzmjy.js.map
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    a7 as t,
    bst as n,
    fU as r,
    hU as i,
    l7 as a,
    n1 as o,
    pU as s,
    u1 as c,
    wst as l
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Ln as u,
    N as d,
    Rn as f,
    p,
    s as m,
    wn as h,
    zn as g
} from "./2340486e-oc6d2eodbcrmxur3.js";
var _, v, y, b, x, S, C, w, T = e((() => {
    _ = h(), l(), c(), s(), a(), m(), f(), v = ({
        workspaceId: e,
        optimisticallyUpdateWorkspaceSettings: r = !1
    }) => {
        let a = i(),
            s = d(),
            c = g(),
            l = [`workspace-settings`, e];
        return p({
            mutationFn: ({
                feature: n,
                enabled: r
            }) => t.safePost(`/accounts/{account_id}/beta_features`, {
                parameters: {
                    path: {
                        account_id: e
                    }
                },
                requestBody: {
                    feature: n,
                    value: r
                }
            }),
            onMutate: r ? async ({
                feature: e,
                enabled: t
            }) => {
                await s.cancelQueries({
                    queryKey: l
                });
                let n = s.getQueryData(l),
                    r = n != null && Object.hasOwn(n.beta_settings, e),
                    i = n?.beta_settings[e];
                return s.setQueryData(l, n => n == null ? n : {
                    ...n,
                    beta_settings: {
                        ...n.beta_settings,
                        [e]: t
                    }
                }), {
                    hadWorkspaceSettings: n != null,
                    hadPreviousValue: r,
                    previousEnabled: i
                }
            } : void 0,
            onSettled: (t, i, a) => {
                let c = s.invalidateQueries({
                    queryKey: r ? l : [`workspace-settings`]
                });
                return a.feature === n.LIBRARY_SHARING_ENABLED && s.invalidateQueries(o()), a.feature === n.TASK_SUGGESTIONS_ENABLED && (s.invalidateQueries({
                    queryKey: [`userSettings`]
                }), s.invalidateQueries({
                    queryKey: [`task-suggestion-prompts`]
                })), a.feature === n.ENABLE_VALUE_SURVEY_CAMPAIGN && s.invalidateQueries({
                    queryKey: [`workspace-analytics-enterprise-surveys`, {
                        workspaceId: e
                    }]
                }), r ? c : void 0
            },
            onError: (e, t, n) => {
                n?.hadWorkspaceSettings && s.setQueryData(l, e => {
                    if (e == null) return e;
                    let r = {
                        ...e.beta_settings
                    };
                    return n.hadPreviousValue ? r[t.feature] = n.previousEnabled ?? !1 : delete r[t.feature], {
                        ...e,
                        beta_settings: r
                    }
                }), a.danger(c.formatMessage(w.featureSettingsUpdateFailed, {
                    toastId: `workspace_settings`
                }))
            }
        })
    }, y = ({
        workspaceId: e
    }) => {
        let n = i(),
            r = d(),
            a = g();
        return p({
            mutationFn: ({
                setting: n,
                value: r
            }) => t.safePost(`/accounts/{account_id}/settings/share_settings`, {
                parameters: {
                    path: {
                        account_id: e
                    }
                },
                requestBody: {
                    setting: n,
                    value: r
                }
            }),
            onSettled: () => {
                r.invalidateQueries({
                    queryKey: [`workspace-settings`]
                })
            },
            onError: () => {
                n.danger(a.formatMessage(w.featureSettingsUpdateFailed, {
                    toastId: `share_settings_row`
                }))
            }
        })
    }, b = ({
        workspaceId: e
    }) => {
        let n = i(),
            r = d(),
            a = g();
        return p({
            mutationFn: ({
                enabled: n
            }) => t.safePost(`/accounts/{account_id}/settings/enable_account_switching`, {
                parameters: {
                    path: {
                        account_id: e
                    }
                },
                requestBody: {
                    value: n
                }
            }),
            onError: () => {
                n.danger(a.formatMessage(w.featureSettingsUpdateFailed, {
                    toastId: `workspace_settings_enable_account_switching`
                }))
            },
            onSettled: () => {
                r.invalidateQueries({
                    queryKey: [`workspace-settings`, e]
                }), r.invalidateQueries({
                    queryKey: [`account-status`]
                })
            }
        })
    }, x = ({
        workspaceId: e
    }) => {
        let n = i(),
            r = d(),
            a = g();
        return p({
            mutationFn: ({
                enabled: n
            }) => t.safePost(`/accounts/{account_id}/settings/workspace_referrals_enabled`, {
                parameters: {
                    path: {
                        account_id: e
                    }
                },
                requestBody: {
                    value: n
                }
            }),
            onError: () => {
                n.danger(a.formatMessage(w.featureSettingsUpdateFailed, {
                    toastId: `workspace_settings_workspace_referrals_enabled`
                }))
            },
            onSettled: () => {
                r.invalidateQueries({
                    queryKey: [`workspace-settings`, e]
                })
            }
        })
    }, S = ({
        workspaceId: e,
        settingName: n = `member_profiles_enabled`
    }) => {
        let i = r(),
            a = d(),
            o = g();
        return p({
            mutationKey: [`workspace-member-profiles`, e, n],
            mutationFn: ({
                enabled: r
            }) => t.safePost(n === `member_profile_activity_enabled` ? `/accounts/{account_id}/settings/member_profile_activity_enabled` : `/accounts/{account_id}/settings/member_profiles_enabled`, {
                parameters: {
                    path: {
                        account_id: e
                    }
                },
                requestBody: {
                    value: r
                }
            }),
            onSuccess: t => {
                a.setQueryData([`workspace-settings`, e], e => e == null ? e : {
                    ...e,
                    [n]: t[n]
                })
            },
            onError: () => {
                i.danger(o.formatMessage(w.featureSettingsUpdateFailed, {
                    toastId: `workspace_settings_${n}`
                }))
            },
            onSettled: () => a.invalidateQueries({
                queryKey: [`workspace-settings`, e]
            })
        })
    }, C = e => {
        "use forget";
        let n = (0, _.c)(18),
            {
                workspaceId: r
            } = e,
            a = i(),
            o = d(),
            s = g(),
            c;
        n[0] === r ? c = n[1] : (c = e => {
            let {
                maxTtlSeconds: n
            } = e;
            return t.safePost(`/accounts/{account_id}/settings/access_token_max_ttl`, {
                parameters: {
                    path: {
                        account_id: r
                    }
                },
                requestBody: {
                    value: n
                }
            })
        }, n[0] = r, n[1] = c);
        let l;
        n[2] !== o || n[3] !== r ? (l = async e => {
            let {
                maxTtlSeconds: t
            } = e, n = [`workspace-settings`, r];
            await o.cancelQueries({
                queryKey: n
            });
            let i = o.getQueryData(n);
            return o.setQueryData(n, e => e == null ? e : {
                ...e,
                access_token_max_ttl: t
            }), {
                previousWorkspaceSettings: i
            }
        }, n[2] = o, n[3] = r, n[4] = l) : l = n[4];
        let u;
        n[5] !== s || n[6] !== o || n[7] !== a || n[8] !== r ? (u = (e, t, n) => {
            n?.previousWorkspaceSettings != null && o.setQueryData([`workspace-settings`, r], n.previousWorkspaceSettings), a.danger(s.formatMessage(w.featureSettingsUpdateFailed, {
                toastId: `workspace_settings_access_token_max_ttl`
            }))
        }, n[5] = s, n[6] = o, n[7] = a, n[8] = r, n[9] = u) : u = n[9];
        let f;
        n[10] !== o || n[11] !== r ? (f = () => {
            o.invalidateQueries({
                queryKey: [`workspace-settings`, r]
            })
        }, n[10] = o, n[11] = r, n[12] = f) : f = n[12];
        let m;
        return n[13] !== c || n[14] !== l || n[15] !== u || n[16] !== f ? (m = {
            mutationFn: c,
            onMutate: l,
            onError: u,
            onSettled: f
        }, n[13] = c, n[14] = l, n[15] = u, n[16] = f, n[17] = m) : m = n[17], p(m)
    }, w = u({
        featureSettingsUpdateFailed: {
            id: `workspaceSettings.featureSettingsUpdateFailed`,
            defaultMessage: `Failed to update feature setting`
        }
    })
}));
export {
    v as a, S as i, C as n, y as o, b as r, x as s, T as t
};
//# sourceMappingURL=191ef300-omyhxkslvlmq58bo.js.map
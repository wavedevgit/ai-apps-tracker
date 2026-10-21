import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    IU as t,
    J7 as n,
    LU as r,
    Q7 as i,
    mct as a,
    q1 as o,
    vct as s,
    z1 as c,
    zU as l
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    Ln as u,
    N as d,
    Rn as f,
    p,
    s as m,
    wn as h,
    zn as g
} from "./2340486e-i7pjxgdhv0bs6apg.js";
var _, v, y, b, x, S, C, w, T = e((() => {
    _ = h(), s(), o(), r(), i(), m(), f(), v = ({
        workspaceId: e,
        optimisticallyUpdateWorkspaceSettings: t = !1
    }) => {
        let r = l(),
            i = d(),
            o = g(),
            s = [`workspace-settings`, e];
        return p({
            mutationFn: ({
                feature: t,
                enabled: r
            }) => n.safePost(`/accounts/{account_id}/beta_features`, {
                parameters: {
                    path: {
                        account_id: e
                    }
                },
                requestBody: {
                    feature: t,
                    value: r
                }
            }),
            onMutate: t ? async ({
                feature: e,
                enabled: t
            }) => {
                await i.cancelQueries({
                    queryKey: s
                });
                let n = i.getQueryData(s),
                    r = n != null && Object.hasOwn(n.beta_settings, e),
                    a = n?.beta_settings[e];
                return i.setQueryData(s, n => n == null ? n : {
                    ...n,
                    beta_settings: {
                        ...n.beta_settings,
                        [e]: t
                    }
                }), {
                    hadWorkspaceSettings: n != null,
                    hadPreviousValue: r,
                    previousEnabled: a
                }
            } : void 0,
            onSettled: (n, r, o) => {
                let l = i.invalidateQueries({
                    queryKey: t ? s : [`workspace-settings`]
                });
                return o.feature === a.LIBRARY_SHARING_ENABLED && i.invalidateQueries(c()), o.feature === a.TASK_SUGGESTIONS_ENABLED && (i.invalidateQueries({
                    queryKey: [`userSettings`]
                }), i.invalidateQueries({
                    queryKey: [`task-suggestion-prompts`]
                })), o.feature === a.ENABLE_VALUE_SURVEY_CAMPAIGN && i.invalidateQueries({
                    queryKey: [`workspace-analytics-enterprise-surveys`, {
                        workspaceId: e
                    }]
                }), t ? l : void 0
            },
            onError: (e, t, n) => {
                n?.hadWorkspaceSettings && i.setQueryData(s, e => {
                    if (e == null) return e;
                    let r = {
                        ...e.beta_settings
                    };
                    return n.hadPreviousValue ? r[t.feature] = n.previousEnabled ?? !1 : delete r[t.feature], {
                        ...e,
                        beta_settings: r
                    }
                }), r.danger(o.formatMessage(w.featureSettingsUpdateFailed, {
                    toastId: `workspace_settings`
                }))
            }
        })
    }, y = ({
        workspaceId: e
    }) => {
        let t = l(),
            r = d(),
            i = g();
        return p({
            mutationFn: ({
                setting: t,
                value: r
            }) => n.safePost(`/accounts/{account_id}/settings/share_settings`, {
                parameters: {
                    path: {
                        account_id: e
                    }
                },
                requestBody: {
                    setting: t,
                    value: r
                }
            }),
            onSettled: () => {
                r.invalidateQueries({
                    queryKey: [`workspace-settings`]
                })
            },
            onError: () => {
                t.danger(i.formatMessage(w.featureSettingsUpdateFailed, {
                    toastId: `share_settings_row`
                }))
            }
        })
    }, b = ({
        workspaceId: e
    }) => {
        let t = l(),
            r = d(),
            i = g();
        return p({
            mutationFn: ({
                enabled: t
            }) => n.safePost(`/accounts/{account_id}/settings/enable_account_switching`, {
                parameters: {
                    path: {
                        account_id: e
                    }
                },
                requestBody: {
                    value: t
                }
            }),
            onError: () => {
                t.danger(i.formatMessage(w.featureSettingsUpdateFailed, {
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
        let t = l(),
            r = d(),
            i = g();
        return p({
            mutationFn: ({
                enabled: t
            }) => n.safePost(`/accounts/{account_id}/settings/workspace_referrals_enabled`, {
                parameters: {
                    path: {
                        account_id: e
                    }
                },
                requestBody: {
                    value: t
                }
            }),
            onError: () => {
                t.danger(i.formatMessage(w.featureSettingsUpdateFailed, {
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
        settingName: r = `member_profiles_enabled`
    }) => {
        let i = t(),
            a = d(),
            o = g();
        return p({
            mutationKey: [`workspace-member-profiles`, e, r],
            mutationFn: ({
                enabled: t
            }) => n.safePost(r === `member_profile_activity_enabled` ? `/accounts/{account_id}/settings/member_profile_activity_enabled` : `/accounts/{account_id}/settings/member_profiles_enabled`, {
                parameters: {
                    path: {
                        account_id: e
                    }
                },
                requestBody: {
                    value: t
                }
            }),
            onSuccess: t => {
                a.setQueryData([`workspace-settings`, e], e => e == null ? e : {
                    ...e,
                    [r]: t[r]
                })
            },
            onError: () => {
                i.danger(o.formatMessage(w.featureSettingsUpdateFailed, {
                    toastId: `workspace_settings_${r}`
                }))
            },
            onSettled: () => a.invalidateQueries({
                queryKey: [`workspace-settings`, e]
            })
        })
    }, C = e => {
        "use forget";
        let t = (0, _.c)(18),
            {
                workspaceId: r
            } = e,
            i = l(),
            a = d(),
            o = g(),
            s;
        t[0] === r ? s = t[1] : (s = e => {
            let {
                maxTtlSeconds: t
            } = e;
            return n.safePost(`/accounts/{account_id}/settings/access_token_max_ttl`, {
                parameters: {
                    path: {
                        account_id: r
                    }
                },
                requestBody: {
                    value: t
                }
            })
        }, t[0] = r, t[1] = s);
        let c;
        t[2] !== a || t[3] !== r ? (c = async e => {
            let {
                maxTtlSeconds: t
            } = e, n = [`workspace-settings`, r];
            await a.cancelQueries({
                queryKey: n
            });
            let i = a.getQueryData(n);
            return a.setQueryData(n, e => e == null ? e : {
                ...e,
                access_token_max_ttl: t
            }), {
                previousWorkspaceSettings: i
            }
        }, t[2] = a, t[3] = r, t[4] = c) : c = t[4];
        let u;
        t[5] !== o || t[6] !== a || t[7] !== i || t[8] !== r ? (u = (e, t, n) => {
            n?.previousWorkspaceSettings != null && a.setQueryData([`workspace-settings`, r], n.previousWorkspaceSettings), i.danger(o.formatMessage(w.featureSettingsUpdateFailed, {
                toastId: `workspace_settings_access_token_max_ttl`
            }))
        }, t[5] = o, t[6] = a, t[7] = i, t[8] = r, t[9] = u) : u = t[9];
        let f;
        t[10] !== a || t[11] !== r ? (f = () => {
            a.invalidateQueries({
                queryKey: [`workspace-settings`, r]
            })
        }, t[10] = a, t[11] = r, t[12] = f) : f = t[12];
        let m;
        return t[13] !== s || t[14] !== c || t[15] !== u || t[16] !== f ? (m = {
            mutationFn: s,
            onMutate: c,
            onError: u,
            onSettled: f
        }, t[13] = s, t[14] = c, t[15] = u, t[16] = f, t[17] = m) : m = t[17], p(m)
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
//# sourceMappingURL=191ef300-k6lcitdb80stxtf7.js.map
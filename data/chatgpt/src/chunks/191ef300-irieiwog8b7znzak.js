import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    F7 as t,
    I1 as n,
    O1 as r,
    RU as i,
    VU as a,
    Zst as o,
    j7 as s,
    qst as c,
    zU as l
} from "./4813494d-ed29bs6yiwucn7st.js";
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
    _ = h(), o(), n(), l(), t(), m(), f(), v = ({
        workspaceId: e,
        optimisticallyUpdateWorkspaceSettings: t = !1
    }) => {
        let n = a(),
            i = d(),
            o = g(),
            l = [`workspace-settings`, e];
        return p({
            mutationFn: ({
                feature: t,
                enabled: n
            }) => s.safePost(`/accounts/{account_id}/beta_features`, {
                parameters: {
                    path: {
                        account_id: e
                    }
                },
                requestBody: {
                    feature: t,
                    value: n
                }
            }),
            onMutate: t ? async ({
                feature: e,
                enabled: t
            }) => {
                await i.cancelQueries({
                    queryKey: l
                });
                let n = i.getQueryData(l),
                    r = n != null && Object.hasOwn(n.beta_settings, e),
                    a = n?.beta_settings[e];
                return i.setQueryData(l, n => n == null ? n : {
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
            onSettled: (n, a, o) => {
                let s = i.invalidateQueries({
                    queryKey: t ? l : [`workspace-settings`]
                });
                return o.feature === c.LIBRARY_SHARING_ENABLED && i.invalidateQueries(r()), o.feature === c.TASK_SUGGESTIONS_ENABLED && (i.invalidateQueries({
                    queryKey: [`userSettings`]
                }), i.invalidateQueries({
                    queryKey: [`task-suggestion-prompts`]
                })), o.feature === c.ENABLE_VALUE_SURVEY_CAMPAIGN && i.invalidateQueries({
                    queryKey: [`workspace-analytics-enterprise-surveys`, {
                        workspaceId: e
                    }]
                }), t ? s : void 0
            },
            onError: (e, t, r) => {
                r?.hadWorkspaceSettings && i.setQueryData(l, e => {
                    if (e == null) return e;
                    let n = {
                        ...e.beta_settings
                    };
                    return r.hadPreviousValue ? n[t.feature] = r.previousEnabled ?? !1 : delete n[t.feature], {
                        ...e,
                        beta_settings: n
                    }
                }), n.danger(o.formatMessage(w.featureSettingsUpdateFailed, {
                    toastId: `workspace_settings`
                }))
            }
        })
    }, y = ({
        workspaceId: e
    }) => {
        let t = a(),
            n = d(),
            r = g();
        return p({
            mutationFn: ({
                setting: t,
                value: n
            }) => s.safePost(`/accounts/{account_id}/settings/share_settings`, {
                parameters: {
                    path: {
                        account_id: e
                    }
                },
                requestBody: {
                    setting: t,
                    value: n
                }
            }),
            onSettled: () => {
                n.invalidateQueries({
                    queryKey: [`workspace-settings`]
                })
            },
            onError: () => {
                t.danger(r.formatMessage(w.featureSettingsUpdateFailed, {
                    toastId: `share_settings_row`
                }))
            }
        })
    }, b = ({
        workspaceId: e
    }) => {
        let t = a(),
            n = d(),
            r = g();
        return p({
            mutationFn: ({
                enabled: t
            }) => s.safePost(`/accounts/{account_id}/settings/enable_account_switching`, {
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
                t.danger(r.formatMessage(w.featureSettingsUpdateFailed, {
                    toastId: `workspace_settings_enable_account_switching`
                }))
            },
            onSettled: () => {
                n.invalidateQueries({
                    queryKey: [`workspace-settings`, e]
                }), n.invalidateQueries({
                    queryKey: [`account-status`]
                })
            }
        })
    }, x = ({
        workspaceId: e
    }) => {
        let t = a(),
            n = d(),
            r = g();
        return p({
            mutationFn: ({
                enabled: t
            }) => s.safePost(`/accounts/{account_id}/settings/workspace_referrals_enabled`, {
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
                t.danger(r.formatMessage(w.featureSettingsUpdateFailed, {
                    toastId: `workspace_settings_workspace_referrals_enabled`
                }))
            },
            onSettled: () => {
                n.invalidateQueries({
                    queryKey: [`workspace-settings`, e]
                })
            }
        })
    }, S = ({
        workspaceId: e,
        settingName: t = `member_profiles_enabled`
    }) => {
        let n = i(),
            r = d(),
            a = g();
        return p({
            mutationKey: [`workspace-member-profiles`, e, t],
            mutationFn: ({
                enabled: n
            }) => s.safePost(t === `member_profile_activity_enabled` ? `/accounts/{account_id}/settings/member_profile_activity_enabled` : `/accounts/{account_id}/settings/member_profiles_enabled`, {
                parameters: {
                    path: {
                        account_id: e
                    }
                },
                requestBody: {
                    value: n
                }
            }),
            onSuccess: n => {
                r.setQueryData([`workspace-settings`, e], e => e == null ? e : {
                    ...e,
                    [t]: n[t]
                })
            },
            onError: () => {
                n.danger(a.formatMessage(w.featureSettingsUpdateFailed, {
                    toastId: `workspace_settings_${t}`
                }))
            },
            onSettled: () => r.invalidateQueries({
                queryKey: [`workspace-settings`, e]
            })
        })
    }, C = e => {
        "use forget";
        let t = (0, _.c)(18),
            {
                workspaceId: n
            } = e,
            r = a(),
            i = d(),
            o = g(),
            c;
        t[0] === n ? c = t[1] : (c = e => {
            let {
                maxTtlSeconds: t
            } = e;
            return s.safePost(`/accounts/{account_id}/settings/access_token_max_ttl`, {
                parameters: {
                    path: {
                        account_id: n
                    }
                },
                requestBody: {
                    value: t
                }
            })
        }, t[0] = n, t[1] = c);
        let l;
        t[2] !== i || t[3] !== n ? (l = async e => {
            let {
                maxTtlSeconds: t
            } = e, r = [`workspace-settings`, n];
            await i.cancelQueries({
                queryKey: r
            });
            let a = i.getQueryData(r);
            return i.setQueryData(r, e => e == null ? e : {
                ...e,
                access_token_max_ttl: t
            }), {
                previousWorkspaceSettings: a
            }
        }, t[2] = i, t[3] = n, t[4] = l) : l = t[4];
        let u;
        t[5] !== o || t[6] !== i || t[7] !== r || t[8] !== n ? (u = (e, t, a) => {
            a?.previousWorkspaceSettings != null && i.setQueryData([`workspace-settings`, n], a.previousWorkspaceSettings), r.danger(o.formatMessage(w.featureSettingsUpdateFailed, {
                toastId: `workspace_settings_access_token_max_ttl`
            }))
        }, t[5] = o, t[6] = i, t[7] = r, t[8] = n, t[9] = u) : u = t[9];
        let f;
        t[10] !== i || t[11] !== n ? (f = () => {
            i.invalidateQueries({
                queryKey: [`workspace-settings`, n]
            })
        }, t[10] = i, t[11] = n, t[12] = f) : f = t[12];
        let m;
        return t[13] !== c || t[14] !== l || t[15] !== u || t[16] !== f ? (m = {
            mutationFn: c,
            onMutate: l,
            onError: u,
            onSettled: f
        }, t[13] = c, t[14] = l, t[15] = u, t[16] = f, t[17] = m) : m = t[17], p(m)
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
//# sourceMappingURL=191ef300-irieiwog8b7znzak.js.map
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    L1 as t,
    P7 as n,
    R7 as r,
    RU as i,
    VU as a,
    Zst as o,
    k1 as s,
    tct as c,
    zU as l
} from "./4813494d-dfpv67hlp00pbohr.js";
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
    _ = h(), c(), t(), l(), r(), m(), f(), v = ({
        workspaceId: e,
        optimisticallyUpdateWorkspaceSettings: t = !1
    }) => {
        let r = a(),
            i = d(),
            c = g(),
            l = [`workspace-settings`, e];
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
            onSettled: (n, r, a) => {
                let c = i.invalidateQueries({
                    queryKey: t ? l : [`workspace-settings`]
                });
                return a.feature === o.LIBRARY_SHARING_ENABLED && i.invalidateQueries(s()), a.feature === o.TASK_SUGGESTIONS_ENABLED && (i.invalidateQueries({
                    queryKey: [`userSettings`]
                }), i.invalidateQueries({
                    queryKey: [`task-suggestion-prompts`]
                })), a.feature === o.ENABLE_VALUE_SURVEY_CAMPAIGN && i.invalidateQueries({
                    queryKey: [`workspace-analytics-enterprise-surveys`, {
                        workspaceId: e
                    }]
                }), t ? c : void 0
            },
            onError: (e, t, n) => {
                n?.hadWorkspaceSettings && i.setQueryData(l, e => {
                    if (e == null) return e;
                    let r = {
                        ...e.beta_settings
                    };
                    return n.hadPreviousValue ? r[t.feature] = n.previousEnabled ?? !1 : delete r[t.feature], {
                        ...e,
                        beta_settings: r
                    }
                }), r.danger(c.formatMessage(w.featureSettingsUpdateFailed, {
                    toastId: `workspace_settings`
                }))
            }
        })
    }, y = ({
        workspaceId: e
    }) => {
        let t = a(),
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
        let t = a(),
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
        let t = a(),
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
        settingName: t = `member_profiles_enabled`
    }) => {
        let r = i(),
            a = d(),
            o = g();
        return p({
            mutationKey: [`workspace-member-profiles`, e, t],
            mutationFn: ({
                enabled: r
            }) => n.safePost(t === `member_profile_activity_enabled` ? `/accounts/{account_id}/settings/member_profile_activity_enabled` : `/accounts/{account_id}/settings/member_profiles_enabled`, {
                parameters: {
                    path: {
                        account_id: e
                    }
                },
                requestBody: {
                    value: r
                }
            }),
            onSuccess: n => {
                a.setQueryData([`workspace-settings`, e], e => e == null ? e : {
                    ...e,
                    [t]: n[t]
                })
            },
            onError: () => {
                r.danger(o.formatMessage(w.featureSettingsUpdateFailed, {
                    toastId: `workspace_settings_${t}`
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
            i = a(),
            o = d(),
            s = g(),
            c;
        t[0] === r ? c = t[1] : (c = e => {
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
        }, t[0] = r, t[1] = c);
        let l;
        t[2] !== o || t[3] !== r ? (l = async e => {
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
        }, t[2] = o, t[3] = r, t[4] = l) : l = t[4];
        let u;
        t[5] !== s || t[6] !== o || t[7] !== i || t[8] !== r ? (u = (e, t, n) => {
            n?.previousWorkspaceSettings != null && o.setQueryData([`workspace-settings`, r], n.previousWorkspaceSettings), i.danger(s.formatMessage(w.featureSettingsUpdateFailed, {
                toastId: `workspace_settings_access_token_max_ttl`
            }))
        }, t[5] = s, t[6] = o, t[7] = i, t[8] = r, t[9] = u) : u = t[9];
        let f;
        t[10] !== o || t[11] !== r ? (f = () => {
            o.invalidateQueries({
                queryKey: [`workspace-settings`, r]
            })
        }, t[10] = o, t[11] = r, t[12] = f) : f = t[12];
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
//# sourceMappingURL=191ef300-oq8txhmag4nxxjh5.js.map
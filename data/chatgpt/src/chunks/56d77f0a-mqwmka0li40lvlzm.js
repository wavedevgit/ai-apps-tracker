const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/c04703b1-ctjst8uqssczabnx.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-itnrgnth03y1sm9d.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-i79e9c315w50am5f.js", "assets/30901919-ikyi1r55w2i02fom.js", "assets/c470f5ab-lpy67c9in1skobas.js", "assets/0e5afe53-jfvcgv06snw44wce.js", "assets/conversation-small-dl8qqd6x.css", "assets/c2675c8c-d62p1sdq1sy52umm.js", "assets/82782bc9-o75a7wf6pmueiskp.js", "assets/8b34dbc2-m4883pai3e8fx8q6.js", "assets/global-modals-dxg9ukpk.css", "assets/46464433-gd4l72ulldog8da4.js", "assets/51994dd8-ld5ed2fuy4h768iv.js", "assets/99a48954-ehrq2ggbboscx5gi.js", "assets/832dbd3a-hr2f7nt6qa1t7a5r.js", "assets/7f8fbef9-g23ry5p2xgkm3jt0.js", "assets/34f04bae-gv8xi2woa847rdht.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    Aw as r,
    Int as i,
    LU as a,
    N1 as o,
    Ow as s,
    Pnt as c,
    Qy as l,
    Rz as u,
    U1 as d,
    Zy as f,
    a2 as p,
    ax as m,
    eE as h,
    fB as g,
    gst as _,
    hst as v,
    ix as y,
    k8 as ee,
    o2 as b,
    oW as te,
    pB as x,
    q1 as S,
    q5 as C,
    sW as w,
    zU as T,
    zz as E
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Bn as D,
    Ln as O,
    Nn as k,
    O as A,
    Rn as j,
    Vn as M,
    cn as ne,
    ln as re,
    p as ie,
    s as ae,
    wn as N,
    zn as P
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $y as F,
    Ay as I,
    C3t as L,
    Dyn as R,
    Oyn as z,
    eb as oe,
    ky as B,
    xWn as se,
    y3t as ce,
    yWn as le
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    Mv as ue,
    Nv as de,
    Tp as fe,
    by as pe,
    fu as me,
    ob as he,
    pu as ge,
    sb as _e,
    wp as ve,
    xy as ye
} from "./30901919-ikyi1r55w2i02fom.js";
import {
    Bb as be,
    Gl as xe,
    Hb as Se,
    Ul as Ce,
    Wl as we,
    _y as Te,
    dy as Ee,
    fy as De,
    gy as Oe,
    hy as ke,
    ly as Ae,
    my as je,
    ny as Me,
    py as Ne,
    vy as Pe
} from "./c2675c8c-d62p1sdq1sy52umm.js";
import {
    n as Fe,
    t as Ie
} from "./62b1bc77-n9gt3xioya6nekxh.js";
import {
    n as Le,
    r as Re
} from "./7517017f-m0e7hb8h6fyirvew.js";
import {
    a as ze,
    r as Be,
    t as Ve
} from "./832dbd3a-hr2f7nt6qa1t7a5r.js";
import {
    r as He,
    s as Ue
} from "./e1258b01-jdqyg86kgujku4v3.js";
import {
    a as We,
    i as Ge,
    l as Ke,
    n as qe,
    o as Je,
    r as Ye,
    u as Xe
} from "./51994dd8-ld5ed2fuy4h768iv.js";
var Ze, Qe, $e, et, tt, nt = e((() => {
        Ze = N(), b(), Je(), Qe = D(), re(), $e = e => {
            "use forget";
            let t = (0, Ze.c)(2),
                {
                    onClose: n
                } = e,
                r;
            return t[0] === n ? r = t[1] : (r = (0, Qe.jsx)(We, {
                onClose: n,
                hasError: !0
            }), t[0] = n, t[1] = r), r
        }, et = p(() => ne(() => import(`./c04703b1-ctjst8uqssczabnx.js`).then(e => e.MicrosoftAdminSyncConnectorLoader), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])), {
            loading: We,
            fallback: $e
        }), tt = p(() => ne(() => import(`./c04703b1-ctjst8uqssczabnx.js`).then(e => e.MicrosoftAdminSyncSetup), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])), {
            loading: We,
            fallback: $e
        })
    })),
    rt, it = e((() => {
        i(), rt = ({
            link: e,
            location: t
        }) => {
            c.logEventWithStatsig(`Contextual Answers Help Link Clicked`, `chatgpt_contextual_answers_help_link_clicked`, {
                link: e,
                location: t
            })
        }
    })),
    at, ot, st, ct = e((() => {
        at = t(M()), ot = (0, at.createContext)({
            triggerLocation: `admin_settings`
        }), ot.Provider, st = () => {
            let e = (0, at.useContext)(ot);
            if (!e) throw Error(`useTriggerLocation must be used within a TriggerLocationProvider`);
            return e
        }
    }));

function lt({
    accountId: e,
    connectionId: t,
    onClose: r,
    onNext: i,
    secondaryButton: a,
    footerContent: o
}) {
    let l = P(),
        u = T(),
        d = (0, V.useId)(),
        [p, m] = (0, V.useState)(``),
        [h, _] = (0, V.useState)(null),
        [v, y] = (0, V.useState)(!1),
        {
            triggerLocation: ee
        } = st(),
        {
            isLoading: b,
            refetch: te,
            data: x
        } = A({
            queryKey: [`admin:connection_instance`, t],
            queryFn: async () => await R.admin_get_connection_instance(e, t)
        });
    (0, V.useEffect)(() => {
        x?.connection_config.knowledge_connector_type === `google_drive_dwd` && m(x.connection_config.admin_email_address ?? ``)
    }, [x]);
    let S = x?.connection_config.knowledge_connector_type === `google_drive_dwd` ? x.connection_config.service_account_credential_id : void 0,
        C = p.trim().length > 0 && (!!h || S),
        w = async () => {
            if (!(!C || !e || v)) {
                y(!0);
                try {
                    let n;
                    h && (n = await h.text()), await R.admin_connection_update_credential(e, t, {
                        admin_email: p,
                        new_service_credential_content: n,
                        credential_id: S && !n ? S : void 0
                    }), u.success(l.formatMessage({
                        id: `q/AX/d`,
                        defaultMessage: `Credentials successfully updated.`
                    })), i()
                } catch (e) {
                    let t = l.formatMessage({
                            id: `qbD4Az`,
                            defaultMessage: `Failed to update credentials.`
                        }),
                        n = Ie(e);
                    n && (t = l.formatMessage({
                        id: `pzfjhv`,
                        defaultMessage: `Failed to update credentials: {error}`
                    }, {
                        error: n.message
                    })), c.logEventWithStatsig(`Contextual Answers Admin Connection Config Change Error`, `chatgpt_contextual_answers_admin_connection_config_change_error`, {
                        connectorType: `google_drive_dwd`,
                        error: n?.error_type,
                        triggerLocation: ee
                    }), u.danger(t, {
                        toastId: `gdrive_dwd_credentials_modal`,
                        loggingTitle: `Failed to update credentials`,
                        loggingDescription: `Failed to update credentials`
                    })
                } finally {
                    te(), y(!1)
                }
            }
        };
    return (0, H.jsx)(s, {
        ...Te,
        onClose: r,
        testId: `modal-gdrive-dwd-credentials`,
        children: b ? (0, H.jsx)(ce, {
            lines: 4,
            className: `px-6 pt-4 pb-10`
        }) : (0, H.jsxs)(H.Fragment, {
            children: [(0, H.jsxs)(`form`, {
                onSubmit: e => {
                    e.preventDefault(), C && w()
                },
                className: `flex flex-col px-6 pt-4 pb-10`,
                children: [(0, H.jsx)(`button`, {
                    type: `submit`,
                    className: `display-none`
                }), (0, H.jsxs)(`div`, {
                    className: `flex flex-col gap-6`,
                    children: [(0, H.jsxs)(`div`, {
                        children: [(0, H.jsx)(`div`, {
                            className: `text-xl font-medium`,
                            children: (0, H.jsx)(k, {
                                id: `qq+Txa`,
                                defaultMessage: `Setup a new connection`
                            })
                        }), (0, H.jsx)(`div`, {
                            className: `text-token-text-secondary mt-2`,
                            children: (0, H.jsx)(k, {
                                id: `oXAF7U`,
                                defaultMessage: `First, read the <link>setup instructions</link>, then upload the service account key provided by Google.`,
                                values: {
                                    link: e => (0, H.jsx)(le, {
                                        href: Le,
                                        className: `underline`,
                                        onClick: () => rt({
                                            link: Le,
                                            location: `admin_onboarding_dwd_credentials`
                                        }),
                                        children: e
                                    })
                                }
                            })
                        })]
                    }), (0, H.jsx)(ut, {
                        existingServiceKeyId: S,
                        serviceKeyFile: h,
                        setServiceKeyFile: _
                    }), (0, H.jsxs)(`div`, {
                        className: `mb-2 flex flex-col gap-2`,
                        children: [(0, H.jsxs)(`label`, {
                            htmlFor: d,
                            className: `flex flex-row items-center gap-2 text-base font-medium`,
                            children: [(0, H.jsx)(`span`, {
                                children: (0, H.jsx)(k, {
                                    id: `sPqjJA`,
                                    defaultMessage: `Google Workspace admin email address`
                                })
                            }), (0, H.jsx)(f, {
                                withArrow: !0,
                                side: `top`,
                                label: (0, H.jsx)(`p`, {
                                    className: `p-1 text-sm`,
                                    children: (0, H.jsx)(k, {
                                        id: `4xWSaU`,
                                        defaultMessage: `Your workspace admin’s email address is required to configure user access and select which shared drives you’d like to sync.`
                                    })
                                }),
                                children: (0, H.jsx)(g, {
                                    className: `icon text-token-text-tertiary`
                                })
                            })]
                        }), (0, H.jsx)(`input`, {
                            type: `text`,
                            value: p,
                            onChange: e => m(e.target.value),
                            placeholder: l.formatMessage({
                                id: `+zP1RE`,
                                defaultMessage: `admin@example.com`
                            }),
                            id: d,
                            className: `border-token-border-default bg-token-main-surface-primary text-token-text-primary rounded-lg border border-solid`
                        })]
                    })]
                })]
            }), (0, H.jsx)(B, {
                primaryButton: (0, H.jsx)(n, {
                    loading: v,
                    color: `primary`,
                    disabled: !C || v,
                    onClick: w,
                    children: (0, H.jsx)(k, {
                        id: `+itf/D`,
                        defaultMessage: `Save`
                    })
                }),
                secondaryButton: a,
                footerContent: o
            })]
        })
    })
}

function ut({
    existingServiceKeyId: e,
    serviceKeyFile: t,
    setServiceKeyFile: r
}) {
    let i = (0, V.useRef)(null),
        a = (0, V.useId)();
    return (0, H.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [(0, H.jsx)(`p`, {
            className: `text-base font-medium`,
            children: (0, H.jsx)(k, {
                id: `gI0O53`,
                defaultMessage: `Service account key`
            })
        }), !!e && !t && (0, H.jsxs)(`div`, {
            className: `flex flex-row items-center gap-2`,
            children: [(0, H.jsx)(ue, {
                className: `icon-sm`
            }), (0, H.jsx)(k, {
                id: `B+/4/L`,
                defaultMessage: `Service account key already exists.`
            })]
        }), !!t && (0, H.jsx)(`p`, {
            className: `text-token-text-secondary`,
            children: t.name
        }), (0, H.jsxs)(`div`, {
            className: `flex flex-row gap-2`,
            children: [!e && !t && (0, H.jsx)(n, {
                color: `primary`,
                type: `button`,
                onClick: () => i.current?.click(),
                children: (0, H.jsx)(k, {
                    id: `4GjErm`,
                    defaultMessage: `Upload key`
                })
            }), (!!e && !t || !e && !!t) && (0, H.jsx)(n, {
                color: `secondary`,
                type: `button`,
                onClick: () => i.current?.click(),
                children: (0, H.jsx)(k, {
                    id: `qV3zuG`,
                    defaultMessage: `Replace key`
                })
            }), !!e && !!t && (0, H.jsx)(n, {
                color: `danger-outline`,
                type: `button`,
                onClick: () => r(null),
                children: (0, H.jsx)(k, {
                    id: `NFpNok`,
                    defaultMessage: `Clear`
                })
            })]
        }), (0, H.jsx)(`input`, {
            type: `file`,
            className: `hidden`,
            id: a,
            ref: i,
            onChange: e => {
                e.target.files && e.target.files.length > 0 ? r(e.target.files[0]) : r(null)
            },
            accept: `.json`
        })]
    })
}
var V, H, dt = e((() => {
    h(), Pe(), Fe(), Re(), it(), z(), de(), x(), r(), l(), se(), L(), a(), i(), ae(), V = t(M()), j(), I(), ct(), H = D()
}));

function ft({
    isOpen: e,
    onClose: t,
    connectionId: r,
    accountId: i,
    primaryButton: a,
    secondaryButton: o,
    footerContent: c,
    showSaveButton: l = !0,
    stagedSharedDriveSettings: u,
    onStagedSharedDriveSettingsChange: d
}) {
    let {
        refetch: f,
        data: p,
        error: m,
        isLoading: h
    } = A({
        queryFn: () => yt({
            accountId: i,
            connectionId: r
        }),
        queryKey: [`admin_connection_list_item_scopes`, r, `shared_drive`]
    });
    return (0, G.jsxs)(s, {
        ...Te,
        isOpen: e,
        onClose: t,
        testId: `modal-gdrive-dwd-shared-drive-picker`,
        children: [(0, G.jsx)(`div`, {
            className: `flex flex-col gap-6 px-6 pt-4 pb-10`,
            children: h ? (0, G.jsx)(ce, {
                lines: 4
            }) : m ? (0, G.jsxs)(`div`, {
                className: `flex flex-col items-center justify-center gap-2`,
                children: [(0, G.jsx)(`div`, {
                    className: `text-token-text-error`,
                    children: (0, G.jsx)(k, {
                        id: `3BZzpX`,
                        defaultMessage: `Something went wrong`
                    })
                }), (0, G.jsx)(`div`, {
                    children: (0, G.jsx)(n, {
                        color: `secondary`,
                        icon: ve,
                        onClick: () => f(),
                        children: (0, G.jsx)(k, {
                            id: `fFd9RR`,
                            defaultMessage: `Try again`
                        })
                    })
                })]
            }) : (0, G.jsx)(G.Fragment, {
                children: p && (0, G.jsx)(pt, {
                    accountId: i,
                    connectionId: r,
                    sharedDriveDefaultScope: p.default_selection,
                    sharedDriveScopes: p.object_selections,
                    refetch: f,
                    showSaveButton: l,
                    stagedSharedDriveSettings: u,
                    onStagedSharedDriveSettingsChange: d
                })
            })
        }), (0, G.jsx)(B, {
            primaryButton: a,
            secondaryButton: o,
            footerContent: c
        })]
    })
}

function pt({
    refetch: e,
    accountId: t,
    connectionId: r,
    sharedDriveDefaultScope: i,
    sharedDriveScopes: a,
    showSaveButton: o,
    stagedSharedDriveSettings: s,
    onStagedSharedDriveSettingsChange: c
}) {
    let l = P(),
        u = T(),
        [d, f] = W.useState(() => s?.draftScopes.map(U) ?? a.map(U)),
        [p, m] = W.useState(s?.draftDefaultSelection ?? i);
    W.useEffect(() => {
        s || m(i)
    }, [i, s]), W.useEffect(() => {
        s || f(a.map(U))
    }, [a, s]), W.useEffect(() => {
        c && c({
            baseDefaultSelection: i,
            baseScopes: a.map(U),
            draftDefaultSelection: p,
            draftScopes: d.map(U)
        })
    }, [p, d, c, i, a]);
    let {
        isPending: h,
        mutate: g
    } = ie({
        mutationFn: async () => {
            let e = p;
            e !== i && await R.admin_connection_update_item_default_scope(t, r, `shared_drive`, e);
            let n = vt({
                currentScopes: a.map(U),
                draftScopes: d,
                finalDefaultSelection: e
            });
            n.excludeHandles.length > 0 && await R.admin_connection_block_items(t, r, `shared_drive`, n.excludeHandles), n.includeHandles.length > 0 && await R.admin_connection_unblock_items(t, r, `shared_drive`, n.includeHandles)
        },
        mutationKey: [`admin_connection_save_shared_drive_scope_settings`, r],
        onError: () => {
            u.danger(l.formatMessage({
                id: `n1puJB`,
                defaultMessage: `Failed to save Shared Drive settings.`
            }), {
                toastId: `gdrive_dwd_shared_drive_picker_modal`,
                loggingTitle: `Failed to save Shared Drive settings`,
                loggingDescription: `Failed to save Shared Drive settings`
            })
        },
        onSuccess: () => {
            u.success(l.formatMessage({
                id: `b/Yc2c`,
                defaultMessage: `Shared Drive settings saved.`
            }))
        },
        onSettled: () => {
            e()
        }
    }), _ = p !== i, v = !ht(d, a.map(U)), y = _ || v;
    return (0, G.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [(0, G.jsx)(`div`, {
            className: `text-xl font-medium`,
            children: (0, G.jsx)(k, {
                id: `CIWfUm`,
                defaultMessage: `How do you want to handle Shared Drives?`
            })
        }), (0, G.jsx)(`div`, {
            className: `text-token-text-secondary text-sm`,
            children: (0, G.jsx)(k, {
                id: `BXG6kp`,
                defaultMessage: `Add any Shared Drives you’d like to exclude or include by default.`
            })
        }), (0, G.jsx)(be, {
            ariaLabel: l.formatMessage({
                id: `ca.scope-selector.aria-label`,
                defaultMessage: `Select whether Shared drives are included or excluded from syncing by default.`
            }),
            onChange: e => {
                h || m(e)
            },
            value: p,
            leftItem: {
                ariaLabel: l.formatMessage(bt.includeToggleLabel),
                label: l.formatMessage(bt.includeToggleLabel),
                value: `include`
            },
            rightItem: {
                ariaLabel: l.formatMessage(bt.excludeToggleLabel),
                label: l.formatMessage(bt.excludeToggleLabel),
                value: `exclude`
            }
        }), h ? (0, G.jsx)(ce, {
            lines: 3
        }) : p === `include` ? (0, G.jsxs)(G.Fragment, {
            children: [(0, G.jsx)(`p`, {
                className: `text-token-text-secondary text-sm`,
                children: (0, G.jsx)(k, {
                    id: `dmDuO6`,
                    defaultMessage: `All Shared drives will be synced except for ones you choose to exclude.`
                })
            }), (0, G.jsx)(`p`, {
                className: `text-token-text-secondary font-medium`,
                children: (0, G.jsx)(k, {
                    id: `buyi/M`,
                    defaultMessage: `Excluded Shared drives`
                })
            }), (0, G.jsx)(`ul`, {
                children: d.filter(e => e.selection === `exclude`).map(e => (0, G.jsx)(Ce, {
                    objectHandle: e.object_handle,
                    objectType: `shared_drive`,
                    accountId: t,
                    connectionId: r,
                    scopeChangeIcon: ge,
                    scopeChangeLabel: l.formatMessage({
                        id: `NLi7nF`,
                        defaultMessage: `Remove exclusion`
                    }),
                    scopeChangeTarget: `include`,
                    onScopeChangeRequested: ({
                        objectHandle: e
                    }) => {
                        f(t => _t(t, e))
                    },
                    onError: () => {},
                    onScopeUpdated: () => {},
                    disabled: h
                }, e.object_handle))
            }), (0, G.jsx)(we, {
                objectType: `shared_drive`,
                targetScopeSelection: `exclude`,
                accountId: t,
                connectionId: r,
                buttonLabel: l.formatMessage({
                    id: `ThGxVh`,
                    defaultMessage: `Exclude`
                }),
                onSubmitDraft: ({
                    objectHandle: e
                }) => {
                    f(t => gt(t, e, `exclude`))
                },
                onSuccess: () => {},
                onError: () => {},
                disabled: h
            })]
        }) : (0, G.jsxs)(G.Fragment, {
            children: [(0, G.jsx)(`p`, {
                className: `text-token-text-secondary text-sm`,
                children: (0, G.jsx)(k, {
                    id: `Pa+iyD`,
                    defaultMessage: `Only the Shared drives you select will be synced.`
                })
            }), (0, G.jsx)(`p`, {
                className: `text-token-text-secondary font-medium`,
                children: (0, G.jsx)(k, {
                    id: `e4EV27`,
                    defaultMessage: `Included Shared drives`
                })
            }), (0, G.jsx)(`ul`, {
                children: d.filter(e => e.selection === `include`).map(e => (0, G.jsx)(Ce, {
                    objectHandle: e.object_handle,
                    objectType: `shared_drive`,
                    accountId: t,
                    connectionId: r,
                    scopeChangeIcon: ge,
                    scopeChangeLabel: l.formatMessage({
                        id: `/oSk2L`,
                        defaultMessage: `Remove inclusion`
                    }),
                    scopeChangeTarget: `exclude`,
                    onScopeChangeRequested: ({
                        objectHandle: e
                    }) => {
                        f(t => _t(t, e))
                    },
                    onError: () => {},
                    onScopeUpdated: () => {},
                    disabled: h
                }, e.object_handle))
            }), (0, G.jsx)(we, {
                objectType: `shared_drive`,
                targetScopeSelection: `include`,
                accountId: t,
                connectionId: r,
                buttonLabel: l.formatMessage({
                    id: `At82Iq`,
                    defaultMessage: `Include`
                }),
                onSubmitDraft: ({
                    objectHandle: e
                }) => {
                    f(t => gt(t, e, `include`))
                },
                onSuccess: () => {},
                onError: () => {},
                disabled: h
            })]
        }), o && (0, G.jsx)(`div`, {
            className: `border-token-border-default mt-6 flex justify-end border-t pt-4`,
            children: (0, G.jsx)(n, {
                color: `primary`,
                disabled: h || !y,
                onClick: () => {
                    h || !y || g()
                },
                children: (0, G.jsx)(k, {
                    id: `0AFmil`,
                    defaultMessage: `Save changes`
                })
            })
        })]
    })
}

function U(e) {
    return {
        object_handle: e.object_handle,
        selection: e.selection
    }
}

function mt(e) {
    let t = new Map;
    for (let n of e) t.set(n.object_handle, n.selection);
    return t
}

function ht(e, t) {
    let n = mt(e),
        r = mt(t);
    if (n.size !== r.size) return !1;
    for (let [e, t] of n)
        if (r.get(e) !== t) return !1;
    return !0
}

function gt(e, t, n) {
    let r = t.trim();
    if (!r) return [...e];
    let i = [...e],
        a = i.findIndex(e => e.object_handle === r);
    return a === -1 ? (i.push({
        object_handle: r,
        selection: n
    }), i) : (i[a] = {
        ...i[a],
        selection: n
    }, i)
}

function _t(e, t) {
    return e.filter(e => e.object_handle !== t)
}

function vt({
    currentScopes: e,
    draftScopes: t,
    finalDefaultSelection: n
}) {
    let r = mt(e),
        i = mt(t),
        a = new Set([...r.keys(), ...i.keys()]),
        o = [],
        s = [];
    for (let e of a) {
        let t = r.get(e),
            a = i.get(e);
        t !== a && ((a ?? n) === `exclude` ? s.push(e) : o.push(e))
    }
    return o.sort(), s.sort(), {
        includeHandles: o,
        excludeHandles: s
    }
}
async function yt({
    accountId: e,
    connectionId: t
}) {
    let n = [],
        r = await R.admin_connection_list_item_scopes(e, t, `shared_drive`, null);
    for (n.push(r); r.page_token != null;) r = await R.admin_connection_list_item_scopes(e, t, `shared_drive`, r.page_token), n.push(r);
    return {
        object_type: `shared_drive`,
        default_selection: n[0].default_selection,
        object_selections: n.flatMap(e => e.object_selections)
    }
}
var W, G, bt, xt = e((() => {
    h(), xe(), z(), fe(), me(), r(), L(), Se(), a(), ae(), W = t(M()), j(), Pe(), I(), G = D(), bt = O({
        includeToggleLabel: {
            id: `ca.scope-selection.include-by-default`,
            defaultMessage: `Include by default`
        },
        excludeToggleLabel: {
            id: `ca.scope-selection.exclude-by-default`,
            defaultMessage: `Exclude by default`
        }
    })
}));

function St({
    isOpen: e,
    onClose: t,
    connectionId: r,
    accountId: i,
    isPostActivation: a,
    footerContent: o,
    primaryButton: c,
    secondaryButton: l
}) {
    let d = P(),
        p = T(),
        {
            refetch: m,
            data: h,
            error: g,
            isLoading: _
        } = A({
            queryFn: async () => await R.admin_connection_list_item_scopes(i, r, `user_drive`),
            queryKey: [`admin_connection_list_item_scopes`, r, `user_drive`]
        }),
        {
            isPending: v,
            mutate: ee
        } = ie({
            mutationFn: async e => await R.admin_connection_update_item_default_scope(i, r, `user_drive`, e ? `include` : `exclude`),
            mutationKey: [`admin_connection_update_item_default_scope`, r, `user_drive`],
            onError: () => {
                p.danger(d.formatMessage({
                    id: `YnlDV7`,
                    defaultMessage: `Failed to update policy.`
                }), {
                    toastId: `gdrive_dwd_user_drives_modal`,
                    loggingTitle: `Failed to update policy`,
                    loggingDescription: `Failed to update policy`
                })
            },
            onSettled: () => {
                m()
            }
        }),
        b = h?.default_selection === `include`;
    return (0, K.jsxs)(s, {
        ...Te,
        isOpen: e,
        onClose: t,
        testId: `modal-gdrive-dwd-user-drives`,
        children: [(0, K.jsx)(`div`, {
            className: `flex flex-col gap-6 px-6 pt-4 pb-10`,
            children: _ ? (0, K.jsx)(ce, {
                lines: 4
            }) : g ? (0, K.jsxs)(`div`, {
                className: `flex flex-col items-center justify-center gap-2`,
                children: [(0, K.jsx)(`div`, {
                    className: `text-token-text-error`,
                    children: (0, K.jsx)(k, {
                        id: `3BZzpX`,
                        defaultMessage: `Something went wrong`
                    })
                }), (0, K.jsx)(`div`, {
                    children: (0, K.jsx)(n, {
                        color: `secondary`,
                        icon: ve,
                        onClick: () => m(),
                        children: (0, K.jsx)(k, {
                            id: `fFd9RR`,
                            defaultMessage: `Try again`
                        })
                    })
                })]
            }) : a ? (0, K.jsx)(`div`, {
                className: `group border-token-border-medium flex w-full flex-row items-center gap-4 rounded-xl border px-8 py-4`,
                children: b ? (0, K.jsxs)(K.Fragment, {
                    children: [(0, K.jsx)(ue, {
                        className: `icon-lg`
                    }), (0, K.jsx)(`p`, {
                        className: `grow`,
                        children: (0, K.jsx)(k, {
                            id: `rWqZ31`,
                            defaultMessage: `User owned files in My Drives are being synced.`
                        })
                    })]
                }) : (0, K.jsxs)(K.Fragment, {
                    children: [(0, K.jsx)(he, {
                        className: `icon-lg`
                    }), (0, K.jsx)(`p`, {
                        className: `grow`,
                        children: (0, K.jsx)(k, {
                            id: `/dUChW`,
                            defaultMessage: `User owned files in My Drives are not being synced.`
                        })
                    })]
                })
            }) : (0, K.jsxs)(`div`, {
                className: `flex flex-col gap-4`,
                children: [(0, K.jsx)(`div`, {
                    className: `text-xl font-medium`,
                    children: (0, K.jsx)(k, {
                        id: `K4ZFoX`,
                        defaultMessage: `How do you want to handle My Drives?`
                    })
                }), (0, K.jsx)(`div`, {
                    className: `text-token-text-secondary text-sm`,
                    children: (0, K.jsx)(k, {
                        id: `kAW/VW`,
                        defaultMessage: `Choose whether you want to sync the My Drive folder for your users.`
                    })
                }), (0, K.jsxs)(`div`, {
                    className: `group border-token-border-medium flex w-full flex-row items-center gap-4 rounded-xl border px-8 py-4`,
                    children: [(0, K.jsx)(y, {
                        checked: b,
                        disabled: v,
                        "aria-label": d.formatMessage(Ct.includeUserDrivesLabel),
                        onCheckedChange: () => {
                            !v && ee(!b)
                        }
                    }), (0, K.jsx)(`p`, {
                        children: (0, K.jsx)(k, {
                            ...Ct.includeUserDrivesLabel
                        })
                    }), v && (0, K.jsx)(u, {}), (0, K.jsx)(`div`, {
                        className: `grow`
                    }), (0, K.jsx)(f, {
                        label: (0, K.jsx)(`p`, {
                            children: (0, K.jsx)(k, {
                                id: `xJvlxk`,
                                defaultMessage: `Enable this setting to sync files in users' individual My Drives.`
                            })
                        }),
                        children: (0, K.jsx)(ye, {
                            className: `icon-lg text-token-text-tertiary`
                        })
                    })]
                }), (0, K.jsxs)(`div`, {
                    className: `bg-token-main-surface-secondary text-token-text-primary flex w-full flex-row items-center gap-4 rounded-xl p-4`,
                    children: [(0, K.jsx)(w, {
                        className: `icon-lg`
                    }), (0, K.jsx)(`span`, {
                        className: `text-token-text-secondary text-sm`,
                        children: (0, K.jsx)(k, {
                            id: `4vN9WK`,
                            defaultMessage: `You will not be able to change whether user My Drives are included once the connection starts syncing data.`
                        })
                    })]
                })]
            })
        }), (0, K.jsx)(B, {
            footerContent: o,
            primaryButton: c,
            secondaryButton: l
        })]
    })
}
var K, Ct, wt = e((() => {
    h(), z(), fe(), de(), _e(), pe(), te(), r(), m(), l(), L(), E(), a(), ae(), M(), j(), Pe(), I(), K = D(), Ct = O({
        includeUserDrivesLabel: {
            id: `75ojp7`,
            defaultMessage: `Include user My Drives?`
        }
    })
}));

function Tt(e) {
    "use forget";
    let t = (0, Et.c)(5),
        {
            connectionDisplayInfo: n
        } = e,
        r;
    t[0] === n.icon_url ? r = t[1] : (r = n.icon_url && (0, Dt.jsx)(`img`, {
        src: n.icon_url,
        alt: ``,
        className: `icon-sm me-2 inline`
    }), t[0] = n.icon_url, t[1] = r);
    let i;
    return t[2] !== n.display_name || t[3] !== r ? (i = (0, Dt.jsxs)(`span`, {
        className: `bg-token-bg-tertiary rounded-xl px-2 py-1 font-bold whitespace-nowrap`,
        children: [r, n.display_name]
    }), t[2] = n.display_name, t[3] = r, t[4] = i) : i = t[4], i
}
var Et, Dt, Ot = e((() => {
    Et = N(), Dt = D()
}));

function kt({
    isOpen: e,
    onClose: t,
    onActivate: r,
    onBeforeActivate: i,
    connectionId: a,
    accountId: o,
    connectionDisplayInfo: l,
    footerContent: u,
    secondaryButton: d,
    connectorType: f
}) {
    let p = P(),
        m = T(),
        {
            triggerLocation: h
        } = st(),
        [g, _] = (0, At.useState)(!1),
        v = (0, q.jsx)(n, {
            color: `primary`,
            loading: g,
            onClick: async () => {
                if (!g) {
                    _(!0);
                    try {
                        await i?.(), await R.admin_activate_connection_instance(o, a), c.logEventWithStatsig(`Contextual Answers Admin Connection Activated`, `chatgpt_contextual_answers_admin_connection_activated`, {
                            connectorType: f,
                            triggerLocation: h
                        }), m.success(p.formatMessage({
                            id: `y5DD0Z`,
                            defaultMessage: `Connection successfully activated.`
                        })), r?.(), t?.()
                    } catch {
                        m.danger(p.formatMessage({
                            id: `aqpeYE`,
                            defaultMessage: `Something went wrong. Please try again.`
                        }), {
                            toastId: `review_and_activate_modal`,
                            loggingTitle: `Failed to activate connection`,
                            loggingDescription: `Failed to activate connection`
                        })
                    } finally {
                        _(!1)
                    }
                }
            },
            children: (0, q.jsx)(k, {
                id: `C2dZRO`,
                defaultMessage: `Done`
            })
        });
    return (0, q.jsxs)(s, {
        ...Oe,
        testId: `modal-review-and-activate`,
        isOpen: e,
        onClose: t,
        title: F(f),
        children: [(0, q.jsxs)(`div`, {
            className: `flex flex-col gap-3 px-6 pt-4 pb-10`,
            children: [(0, q.jsx)(`div`, {
                className: `text-xl font-medium`,
                children: (0, q.jsx)(k, {
                    id: `38WXzu`,
                    defaultMessage: `Review`
                })
            }), (0, q.jsx)(`p`, {
                className: `text-token-text-secondary text-sm`,
                children: (0, q.jsx)(k, {
                    id: `yQhjtE`,
                    defaultMessage: `Confirm everything looks good to you, then click the button to activate the connection and start syncing. `
                })
            }), (0, q.jsx)(Tt, {
                connectionDisplayInfo: l
            })]
        }), (0, q.jsx)(B, {
            primaryButton: v,
            secondaryButton: d,
            footerContent: u
        })]
    })
}
var At, q, jt = e((() => {
    h(), Ot(), z(), r(), a(), i(), At = t(M()), j(), oe(), ct(), Pe(), I(), q = D()
}));

function Mt({
    steps: e,
    onClose: t
}) {
    let n = e.length,
        [r, i] = (0, Nt.useState)(0),
        a = e[0]?.connectorType,
        o = e[0]?.name;
    (0, Nt.useEffect)(() => {
        if (!a || !o) return;
        let e = `chatgpt_contextual_answers_admin_create_connection_step`,
            t = c.logStructuredEvent(`ChatgptContextualAnswersAdminCreateConnectionStepShown`, {
                legacyStatsigEventName: e,
                connectorType: a,
                stepName: o
            });
        c.logValueEventWithStatsig({
            segmentEventName: `Contextual Answers Admin Create Connection Step`,
            statsigEventName: e,
            data: {
                connectorType: a,
                stepName: o
            },
            eventId: t
        })
    }, [a, o]);
    let s = t => {
        if (i(t), t < 0 || t >= e.length) return;
        let n = `chatgpt_contextual_answers_admin_create_connection_step`,
            r = c.logStructuredEvent(`ChatgptContextualAnswersAdminCreateConnectionStepShown`, {
                legacyStatsigEventName: n,
                connectorType: e[t].connectorType,
                stepName: e[t].name
            });
        c.logValueEventWithStatsig({
            segmentEventName: `Contextual Answers Admin Create Connection Step`,
            statsigEventName: n,
            data: {
                connectorType: e[t].connectorType,
                stepName: e[t].name
            },
            eventId: r
        })
    };
    return r < e.length ? e[r].fn({
        goForward: r < n - 1 ? () => s(r + 1) : void 0,
        goBackward: r > 0 ? () => s(r - 1) : void 0,
        close: t,
        stepNumber: r,
        totalSteps: n
    }) : null
}
var Nt, Pt = e((() => {
    i(), Nt = t(M())
}));

function Ft({
    onClose: e,
    backButton: t
}) {
    let [n, r] = (0, Y.useState)(), i = d();
    return i ? n ? (0, X.jsx)(Lt, {
        accountId: i.id,
        connection: n,
        onClose: () => e(!0)
    }) : (0, X.jsx)(It, {
        onClose: e,
        backButton: t,
        setConnection: r
    }) : null
}

function It({
    onClose: e,
    setConnection: t,
    backButton: r
}) {
    let i = P(),
        a = T(),
        o = d(),
        l = (0, Y.useId)(),
        {
            triggerLocation: u
        } = st();
    (0, Y.useEffect)(() => {
        let e = `chatgpt_contextual_answers_admin_create_connection_step`,
            t = c.logStructuredEvent(`ChatgptContextualAnswersAdminCreateConnectionStepShown`, {
                legacyStatsigEventName: e,
                connectorType: `google_drive_dwd`,
                stepName: `basic_info`,
                triggerLocation: u
            });
        c.logValueEventWithStatsig({
            segmentEventName: `Contextual Answers Admin Create Connection Step`,
            statsigEventName: e,
            data: {
                connectorType: `google_drive_dwd`,
                stepName: `basic_info`,
                triggerLocation: u
            },
            eventId: t
        })
    }, [u]);
    let [f, p] = (0, Y.useState)(``), m = f.length > 128, h = f.trim().length > 0 && !m, [g, _] = (0, Y.useState)(!1), v = (0, Y.useCallback)(() => {
        !h || !o || g || (_(!0), R.admin_create_connection_instance_via_workspace_permissions(o.id, {
            knowledge_connector_type: `google_drive_dwd`,
            connection_config_id: `--fake-local-id`
        }, f.trim()).then(e => {
            t(e)
        }).catch(() => {
            a.danger(i.formatMessage({
                id: `aqpeYE`,
                defaultMessage: `Something went wrong. Please try again.`
            }), {
                toastId: `gdrive_dwd_setup_flow`,
                loggingTitle: `Failed to create connection`,
                loggingDescription: `Failed to create connection`
            })
        }).finally(() => {
            _(!1)
        }))
    }, [o, f, i, h, g, t, a]);
    return (0, X.jsxs)(s, {
        ...Te,
        onClose: () => e?.(),
        testId: `modal-gdrive-dwd-basic-info`,
        children: [(0, X.jsxs)(`form`, {
            onSubmit: e => {
                e.preventDefault(), h && v()
            },
            className: `flex flex-col px-6 pt-4 pb-10`,
            children: [(0, X.jsxs)(`div`, {
                className: `flex flex-col gap-2`,
                children: [(0, X.jsx)(`label`, {
                    htmlFor: l,
                    className: `text-xl font-medium`,
                    children: (0, X.jsx)(k, {
                        id: `+wLWeZ`,
                        defaultMessage: `Enter display name`
                    })
                }), (0, X.jsx)(`input`, {
                    type: `text`,
                    value: f,
                    onChange: e => p(e.target.value),
                    id: l,
                    className: `border-token-border-default bg-token-main-surface-primary text-token-text-primary rounded-lg border border-solid`
                }), (0, X.jsx)(`div`, {
                    className: `text-token-text-tertiary text-sm`,
                    children: (0, X.jsx)(k, {
                        id: `CPXVQO`,
                        defaultMessage: `This is the name your members will see in their ChatGPT connectors.`
                    })
                }), m ? (0, X.jsx)(`p`, {
                    className: `text-red-500`,
                    children: (0, X.jsx)(k, {
                        id: `vT7EGU`,
                        defaultMessage: `Name is too long.`
                    })
                }) : null]
            }), (0, X.jsx)(`button`, {
                type: `submit`,
                className: `display-none`
            })]
        }), (0, X.jsx)(B, {
            secondaryButton: r,
            primaryButton: (0, X.jsx)(n, {
                color: `primary`,
                disabled: !h || g,
                loading: g,
                onClick: v,
                children: (0, X.jsx)(k, {
                    id: `lZthRm`,
                    defaultMessage: `Save Draft and Continue`
                })
            })
        })]
    })
}

function Lt({
    connection: e,
    accountId: t,
    onClose: r
}) {
    let [i, a] = (0, Y.useState)(null), o = e.connection_config.connection_config_id, s = (0, Y.useCallback)(e => {
        a(t => t ? {
            ...e,
            baseDefaultSelection: t.baseDefaultSelection,
            baseScopes: J(t.baseScopes),
            draftScopes: J(e.draftScopes)
        } : {
            ...e,
            baseScopes: J(e.baseScopes),
            draftScopes: J(e.draftScopes)
        })
    }, []), c = (0, Y.useCallback)(async () => {
        if (!i) return;
        let e = i;
        try {
            e.draftDefaultSelection !== e.baseDefaultSelection && await R.admin_connection_update_item_default_scope(t, o, `shared_drive`, e.draftDefaultSelection);
            let n = vt({
                currentScopes: e.baseScopes,
                draftScopes: e.draftScopes,
                finalDefaultSelection: e.draftDefaultSelection
            });
            n.excludeHandles.length > 0 && await R.admin_connection_block_items(t, o, `shared_drive`, n.excludeHandles), n.includeHandles.length > 0 && await R.admin_connection_unblock_items(t, o, `shared_drive`, n.includeHandles), a({
                baseDefaultSelection: e.draftDefaultSelection,
                baseScopes: J(e.draftScopes),
                draftDefaultSelection: e.draftDefaultSelection,
                draftScopes: J(e.draftScopes)
            })
        } catch (e) {
            try {
                let e = await yt({
                    accountId: t,
                    connectionId: o
                });
                a(t => t && {
                    baseDefaultSelection: e.default_selection,
                    baseScopes: e.object_selections.map(({
                        object_handle: e,
                        selection: t
                    }) => ({
                        object_handle: e,
                        selection: t
                    })),
                    draftDefaultSelection: t.draftDefaultSelection,
                    draftScopes: J(t.draftScopes)
                })
            } catch {}
            throw e
        }
    }, [t, o, i]);
    return (0, X.jsx)(Mt, {
        onClose: r,
        steps: [{
            connectorType: `google_drive_dwd`,
            name: `credential`,
            fn: ({
                goForward: n,
                close: r,
                stepNumber: i,
                totalSteps: a
            }) => (0, X.jsx)(lt, {
                onClose: () => r?.(),
                accountId: t,
                connectionId: e.connection_config.connection_config_id,
                onNext: n ?? (() => null),
                footerContent: (0, X.jsx)(`span`, {
                    className: `text-token-text-secondary flex-1 align-middle font-medium`,
                    children: (0, X.jsx)(k, {
                        id: `Wp0nVY`,
                        defaultMessage: `Step {stepNum} of {totalSteps}`,
                        values: {
                            stepNum: i + 1,
                            totalSteps: a
                        }
                    })
                })
            })
        }, {
            connectorType: `google_drive_dwd`,
            name: `user_drives`,
            fn: ({
                goForward: r,
                goBackward: i,
                close: a,
                stepNumber: o,
                totalSteps: s
            }) => (0, X.jsx)(St, {
                onClose: () => a?.(),
                accountId: t,
                connectionId: e.connection_config.connection_config_id,
                primaryButton: r && (0, X.jsx)(n, {
                    color: `primary`,
                    onClick: r,
                    children: (0, X.jsx)(k, {
                        id: `z5fExR`,
                        defaultMessage: `Next`
                    })
                }),
                secondaryButton: i && (0, X.jsx)(n, {
                    color: `secondary`,
                    onClick: i,
                    children: (0, X.jsx)(k, {
                        id: `xJnONr`,
                        defaultMessage: `Back`
                    })
                }),
                footerContent: (0, X.jsx)(`span`, {
                    className: `text-token-text-secondary flex-1 align-middle font-medium`,
                    children: (0, X.jsx)(k, {
                        id: `Wp0nVY`,
                        defaultMessage: `Step {stepNum} of {totalSteps}`,
                        values: {
                            stepNum: o + 1,
                            totalSteps: s
                        }
                    })
                }),
                isOpen: !0,
                isPostActivation: !1
            })
        }, {
            connectorType: `google_drive_dwd`,
            name: `shared_drives`,
            fn: ({
                goForward: r,
                goBackward: a,
                close: o,
                stepNumber: c,
                totalSteps: l
            }) => (0, X.jsx)(ft, {
                onClose: () => o?.(),
                accountId: t,
                connectionId: e.connection_config.connection_config_id,
                primaryButton: r && (0, X.jsx)(n, {
                    color: `primary`,
                    onClick: r,
                    children: (0, X.jsx)(k, {
                        id: `z5fExR`,
                        defaultMessage: `Next`
                    })
                }),
                secondaryButton: a && (0, X.jsx)(n, {
                    color: `secondary`,
                    onClick: a,
                    children: (0, X.jsx)(k, {
                        id: `xJnONr`,
                        defaultMessage: `Back`
                    })
                }),
                footerContent: (0, X.jsx)(`span`, {
                    className: `text-token-text-secondary flex-1 align-middle font-medium`,
                    children: (0, X.jsx)(k, {
                        id: `Wp0nVY`,
                        defaultMessage: `Step {stepNum} of {totalSteps}`,
                        values: {
                            stepNum: c + 1,
                            totalSteps: l
                        }
                    })
                }),
                isOpen: !0,
                showSaveButton: !1,
                stagedSharedDriveSettings: i ?? void 0,
                onStagedSharedDriveSettingsChange: s
            })
        }, {
            connectorType: `google_drive_dwd`,
            name: `review_and_activate`,
            fn: ({
                goBackward: r,
                close: i,
                stepNumber: a,
                totalSteps: o
            }) => (0, X.jsx)(kt, {
                isOpen: !0,
                onClose: () => i?.(),
                accountId: t,
                connectorType: `google_drive_dwd`,
                connectionId: e.connection_config.connection_config_id,
                connectionDisplayInfo: e.display_info,
                onBeforeActivate: c,
                secondaryButton: r && (0, X.jsx)(n, {
                    color: `secondary`,
                    onClick: r,
                    children: (0, X.jsx)(k, {
                        id: `xJnONr`,
                        defaultMessage: `Back`
                    })
                }),
                footerContent: (0, X.jsx)(`span`, {
                    className: `text-token-text-secondary flex-1 align-middle font-medium`,
                    children: (0, X.jsx)(k, {
                        id: `Wp0nVY`,
                        defaultMessage: `Step {stepNum} of {totalSteps}`,
                        values: {
                            stepNum: a + 1,
                            totalSteps: o
                        }
                    })
                })
            })
        }]
    })
}

function J(e) {
    return e.map(e => ({
        ...e
    }))
}
var Y, X, Rt = e((() => {
    h(), dt(), xt(), wt(), Pe(), jt(), Pt(), z(), r(), S(), a(), i(), Y = t(M()), j(), I(), ct(), X = D()
}));

function zt(e) {
    "use forget";
    let t = (0, Bt.c)(11),
        {
            isDwdEnabled: n,
            onClose: r,
            triggerLocation: i
        } = e,
        a, o;
    if (t[0] !== n || t[1] !== r ? (a = () => {
            n || r()
        }, o = [n, r], t[0] = n, t[1] = r, t[2] = a, t[3] = o) : (a = t[2], o = t[3]), (0, Vt.useEffect)(a, o), !n) return null;
    let s;
    t[4] === i ? s = t[5] : (s = {
        triggerLocation: i
    }, t[4] = i, t[5] = s);
    let c;
    t[6] === r ? c = t[7] : (c = (0, Ht.jsx)(Ft, {
        onClose: r,
        backButton: null
    }), t[6] = r, t[7] = c);
    let l;
    return t[8] !== s || t[9] !== c ? (l = (0, Ht.jsx)(ot.Provider, {
        value: s,
        children: c
    }), t[8] = s, t[9] = c, t[10] = l) : l = t[10], l
}
var Bt, Vt, Ht, Ut = e((() => {
    Bt = N(), Rt(), Vt = t(M()), ct(), Ht = D()
}));

function Wt(e) {
    function t({
        accountId: t,
        onClose: r,
        onSuccess: i
    }) {
        let a = P(),
            o = T(),
            [c, l] = (0, Gt.useState)(!1),
            u = (0, Gt.useCallback)(async () => {
                l(!0);
                let n = e.type === `github` ? {
                    connection_config_id: Kt,
                    knowledge_connector_type: e.type,
                    organization_name: null
                } : {
                    connection_config_id: Kt,
                    knowledge_connector_type: e.type
                };
                try {
                    await R.admin_create_connection_instance_via_workspace_permissions(t, n, void 0), await i?.(), r()
                } catch {
                    o.danger(a.formatMessage({
                        id: `aqpeYE`,
                        defaultMessage: `Something went wrong. Please try again.`
                    }), {
                        toastId: e.modal.toastId,
                        loggingTitle: `Failed to create connection`,
                        loggingDescription: `Failed to create connection`
                    })
                } finally {
                    l(!1)
                }
            }, [t, a, r, i, o]);
        return (0, Z.jsxs)(s, {
            ...e.modal.props,
            onClose: r,
            testId: e.modal.testId,
            children: [(0, Z.jsxs)(`div`, {
                className: `px-6 pt-4 pb-10`,
                children: [(0, Z.jsx)(`div`, {
                    className: `text-xl font-medium`,
                    children: (0, Z.jsx)(k, {
                        ...e.modal.copy.title
                    })
                }), (0, Z.jsx)(`div`, {
                    className: `text-md text-token-text-secondary mt-3`,
                    children: (0, Z.jsx)(k, {
                        ...e.modal.copy.description
                    })
                }), (0, Z.jsx)(`div`, {
                    className: `mt-6 text-lg font-medium`,
                    children: (0, Z.jsx)(k, {
                        id: `edoz9r`,
                        defaultMessage: `What to expect`
                    })
                }), (0, Z.jsx)(`ul`, {
                    className: `text-md text-token-text-secondary ms-6 mt-4`,
                    children: e.modal.copy.bulletPoints.map((e, t, n) => (0, Z.jsx)(`li`, {
                        className: t < n.length - 1 ? `mb-2 list-disc` : `list-disc`,
                        children: (0, Z.jsx)(k, {
                            ...e
                        })
                    }, t))
                })]
            }), (0, Z.jsx)(B, {
                primaryButton: (0, Z.jsx)(n, {
                    color: `primary`,
                    onClick: u,
                    loading: c,
                    children: (0, Z.jsx)(k, {
                        id: `y+cVaH`,
                        defaultMessage: `Enable`
                    })
                })
            })]
        })
    }

    function r({
        onClose: e,
        onSuccess: n
    }) {
        let r = d();
        return r ? (0, Z.jsx)(t, {
            accountId: r.id,
            onClose: e,
            onSuccess: n
        }) : null
    }
    return {
        Controller: r,
        Modal: t
    }
}
var Gt, Z, Kt, qt = e((() => {
    h(), I(), z(), r(), S(), a(), Gt = t(M()), j(), Z = D(), Kt = `--fake-local-id`
}));

function Jt(e) {
    let t = Zt.get(e);
    if (!t) throw Error(`Unknown simple connector flow for type: ${e}`);
    return t
}

function Yt(e) {
    return Jt(e).Controller
}
var Xt, Zt, Qt = e((() => {
    ke(), qt(), Xt = Ne.map(e => [e, Wt(je[e])]), Zt = new Map(Xt), Ne.map(Yt)
}));

function $t(e) {
    let {
        key: t
    } = e;
    return t === `outlook_email_admin` || t === `teams_admin`
}

function en() {
    return Ve()
}

function tn() {
    return o()?.normalizedAccountUserId
}

function nn(e) {
    return e.key === `google_drive_dwd`
}
var rn, Q, $, an, on, sn, cn, ln, un = e((() => {
    rn = N(), ze(), ee(), S(), _(), Xe(), nt(), h(), Ut(), Qt(), r(), E(), Q = t(M()), j(), Me(), Ee(), Ue(), Ye(), $ = D(), an = {
        sharepoint_admin: `sharepoint`,
        teams_admin: `teams`,
        google_drive_oauth: `google_drive`,
        google_drive_dwd: `google_drive`
    }, on = (0, Q.createContext)(() => {}), sn = O({
        loadingSyncSetupTitle: {
            id: `DEHsc9`,
            defaultMessage: `Loading sync setup`
        },
        syncConstraintsPreflightTitle: {
            id: `L7+/XY`,
            defaultMessage: `Parameter Constraints won’t apply to synced data`
        }
    }), cn = e => {
        "use forget";
        let t = (0, rn.c)(6),
            {
                children: n,
                connectorReadScope: r
            } = e,
            [i, a] = (0, Q.useState)(null),
            o;
        t[0] !== r || t[1] !== i ? (o = i && (0, $.jsx)(ln, {
            connectorReadScope: r,
            app: i.app,
            openToAdminSync: i.openToAdminSync,
            openToUserSync: i.openToUserSync,
            skipParameterConstraintsPreflight: i.skipParameterConstraintsPreflight,
            onClose: () => {
                a(null), i.onClose?.()
            }
        }), t[0] = r, t[1] = i, t[2] = o) : o = t[2];
        let s;
        return t[3] !== n || t[4] !== o ? (s = (0, $.jsxs)(on.Provider, {
            value: a,
            children: [o, n]
        }), t[3] = n, t[4] = o, t[5] = s) : s = t[5], s
    }, ln = e => {
        "use forget";
        let t = (0, rn.c)(57),
            {
                app: r,
                connectorReadScope: i,
                openToAdminSync: a,
                openToUserSync: o,
                skipParameterConstraintsPreflight: c,
                onClose: l
            } = e,
            f = a !== void 0 && a,
            p = o !== void 0 && o,
            m = c !== void 0 && c,
            h = P(),
            g;
        t[0] === r.knowledgeConfig ? g = t[1] : (g = r.knowledgeConfig.some($t), t[0] = r.knowledgeConfig, t[1] = g);
        let _ = g,
            y;
        t[2] !== r.primaryConnector.id || t[3] !== _ ? (y = _ || De(r.primaryConnector.id), t[2] = r.primaryConnector.id, t[3] = _, t[4] = y) : y = t[4];
        let ee = y,
            b = ee && f,
            te = ee && !b && p,
            x = r.knowledgeConfig[0].key,
            S = an[x] || x,
            w = Ae(),
            T = C(en),
            E = C(tn),
            D;
        t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (D = d(v())?.getWorkspaceId(), t[5] = D) : D = t[5];
        let O = D,
            A;
        t[6] !== r.primaryConnector.id || t[7] !== T ? (A = () => {
            Be(T, O ?? ``, r.primaryConnector.id, !!(O && r.primaryConnector.id))
        }, t[6] = r.primaryConnector.id, t[7] = T, t[8] = A) : A = t[8];
        let j;
        t[9] !== r.primaryConnector.id || t[10] !== E || t[11] !== T ? (j = [T, E, O, r.primaryConnector.id], t[9] = r.primaryConnector.id, t[10] = E, t[11] = T, t[12] = j) : j = t[12], (0, Q.useEffect)(A, j);
        let {
            hasParameterConstraints: M,
            isLoading: ne
        } = Ge(r, T, E), [re, ie] = (0, Q.useState)(!1), ae = He({
            app: r
        }), N;
        t[13] !== w || t[14] !== l ? (N = () => {
            w(), l()
        }, t[13] = w, t[14] = l, t[15] = N) : N = t[15];
        let F = N,
            I = ae && M && !m && !re,
            L;
        t[16] === r ? L = t[17] : (L = Ke(r), t[16] = r, t[17] = L);
        let R = L;
        if (ne) {
            let e;
            t[18] === h ? e = t[19] : (e = h.formatMessage(sn.loadingSyncSetupTitle), t[18] = h, t[19] = e);
            let n;
            t[20] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, $.jsx)(`div`, {
                className: `flex min-h-52 items-center justify-center p-8`,
                children: (0, $.jsx)(u, {})
            }), t[20] = n) : n = t[20];
            let r;
            return t[21] !== F || t[22] !== e ? (r = (0, $.jsx)(s, {
                testId: `modal-app-sync-setup-loading`,
                isOpen: !0,
                onClose: F,
                size: `custom`,
                className: `max-w-[420px]`,
                contentClassName: `max-h-[90vh] flex flex-col`,
                visuallyHiddenHeader: !0,
                title: e,
                noPadding: !0,
                children: n
            }), t[21] = F, t[22] = e, t[23] = r) : r = t[23], r
        }
        if (I) {
            let e;
            t[24] === h ? e = t[25] : (e = h.formatMessage(sn.syncConstraintsPreflightTitle), t[24] = h, t[25] = e);
            let r;
            t[26] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, $.jsxs)(`div`, {
                className: `p-6`,
                children: [(0, $.jsx)(`div`, {
                    className: `text-xl font-semibold`,
                    children: (0, $.jsx)(k, {
                        ...sn.syncConstraintsPreflightTitle
                    })
                }), (0, $.jsx)(qe, {
                    className: `mt-4`
                })]
            }), t[26] = r) : r = t[26];
            let i;
            t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, $.jsx)(k, {
                id: `kmMRzz`,
                defaultMessage: `Cancel`
            }), t[27] = i) : i = t[27];
            let a;
            t[28] === F ? a = t[29] : (a = (0, $.jsx)(n, {
                color: `secondary`,
                onClick: F,
                children: i
            }), t[28] = F, t[29] = a);
            let o;
            t[30] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, $.jsx)(n, {
                color: `primary`,
                onClick: () => ie(!0),
                children: (0, $.jsx)(k, {
                    id: `C3NxrS`,
                    defaultMessage: `Continue`
                })
            }), t[30] = o) : o = t[30];
            let c;
            t[31] === a ? c = t[32] : (c = (0, $.jsxs)(`div`, {
                className: `flex justify-end gap-2 border-t p-4`,
                children: [a, o]
            }), t[31] = a, t[32] = c);
            let l;
            return t[33] !== F || t[34] !== e || t[35] !== c ? (l = (0, $.jsxs)(s, {
                testId: `modal-app-sync-constraints-preflight`,
                isOpen: !0,
                onClose: F,
                size: `custom`,
                className: `max-w-[480px]`,
                contentClassName: `max-h-[90vh] flex flex-col`,
                visuallyHiddenHeader: !0,
                title: e,
                noPadding: !0,
                children: [r, c]
            }), t[33] = F, t[34] = e, t[35] = c, t[36] = l) : l = t[36], l
        }
        if (R) {
            let e;
            t[37] !== r.primaryConnector || t[38] !== r.relatedConnectors ? (e = [r.primaryConnector, ...r.relatedConnectors], t[37] = r.primaryConnector, t[38] = r.relatedConnectors, t[39] = e) : e = t[39];
            let n;
            return t[40] !== i || t[41] !== R || t[42] !== F || t[43] !== e ? (n = (0, $.jsx)(tt, {
                connectorReadScope: i,
                kind: R,
                connectors: e,
                onClose: F
            }), t[40] = i, t[41] = R, t[42] = F, t[43] = e, t[44] = n) : n = t[44], n
        }
        if (S === `google_drive`) {
            let e;
            t[45] === r.knowledgeConfig ? e = t[46] : (e = r.knowledgeConfig.some(nn), t[45] = r.knowledgeConfig, t[46] = e);
            let n = e,
                i = b ? `gdrive-dwd` : te ? `gdrive-oauth` : void 0,
                a = b || te,
                o;
            return t[47] !== n || t[48] !== F || t[49] !== i || t[50] !== a ? (o = (0, $.jsx)(zt, {
                isDwdEnabled: n,
                onClose: F,
                initialConnectorOption: i,
                skipConnectorSelection: a,
                triggerLocation: `admin_settings`
            }), t[47] = n, t[48] = F, t[49] = i, t[50] = a, t[51] = o) : o = t[51], o
        }
        let z;
        t[52] === S ? z = t[53] : (z = Jt(S), t[52] = S, t[53] = z);
        let oe = z.Controller,
            B;
        return t[54] !== oe || t[55] !== F ? (B = (0, $.jsx)(oe, {
            onClose: F
        }), t[54] = oe, t[55] = F, t[56] = B) : B = t[56], B
    }
}));
export {
    Lt as a, wt as c, lt as d, dt as f, nt as h, un as i, ft as l, tt as m, cn as n, Rt as o, et as p, an as r, St as s, on as t, xt as u
};
//# sourceMappingURL=56d77f0a-mqwmka0li40lvlzm.js.map
const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/c04703b1-krqxq498833fffy7.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-dfpv67hlp00pbohr.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-cy5f8pl0g26s86so.js", "assets/30901919-7dzdc1ou0jtwkwpt.js", "assets/c470f5ab-d4g7lc53n1e1ao7o.js", "assets/0e5afe53-o2mcfq1ky1uaktz5.js", "assets/conversation-small-j5v9ogf2.css", "assets/c2675c8c-9bs3zsr3vq259es7.js", "assets/82782bc9-mb60yg1xlggwvqri.js", "assets/8b34dbc2-k1zgxrtsww83602u.js", "assets/global-modals-lv5n3ujm.css", "assets/46464433-g946xnvlgzfys2yo.js", "assets/51994dd8-iorpxuhvjfkp2ym1.js", "assets/99a48954-di1yvdw6ghqm4hqh.js", "assets/832dbd3a-kczb4igcdcx4itca.js", "assets/7f8fbef9-jkql7364kxi0yqww.js", "assets/34f04bae-gq4q4vqkkmrvrml5.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $ot as n,
    Az as r,
    C1 as i,
    JT as a,
    L1 as o,
    N1 as s,
    N5 as c,
    Qot as l,
    Sw as u,
    VU as d,
    X0 as f,
    Xy as p,
    Y0 as m,
    Zy as h,
    _nt as g,
    aB as _,
    cW as v,
    h8 as y,
    iB as b,
    ix as ee,
    jz as te,
    lW as x,
    qT as S,
    rx as C,
    ww as w,
    ynt as T,
    zU as E
} from "./4813494d-dfpv67hlp00pbohr.js";
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
    $Un as F,
    $y as oe,
    C3t as I,
    D3t as L,
    Oy as R,
    Qy as se,
    ZUn as ce,
    ky as z,
    lyn as B,
    uyn as V
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Mv as le,
    Nv as ue,
    Tp as de,
    by as fe,
    fu as pe,
    ob as me,
    pu as he,
    sb as ge,
    wp as _e,
    xy as ve
} from "./30901919-7dzdc1ou0jtwkwpt.js";
import {
    Fb as ye,
    Gl as be,
    Lb as xe,
    Qv as Se,
    Ul as Ce,
    Wl as we,
    ay as Te,
    cy as Ee,
    dy as De,
    fy as Oe,
    ly as ke,
    my as Ae,
    py as je,
    sy as Me,
    uy as Ne
} from "./c2675c8c-9bs3zsr3vq259es7.js";
import {
    n as Pe,
    t as Fe
} from "./62b1bc77-nn0f9z332hr2qeag.js";
import {
    n as Ie,
    r as Le
} from "./7517017f-m0e7hb8h6fyirvew.js";
import {
    a as Re,
    r as ze,
    t as Be
} from "./832dbd3a-kczb4igcdcx4itca.js";
import {
    r as Ve,
    s as He
} from "./e1258b01-e4w4cezsgms4ti7w.js";
import {
    a as Ue,
    i as We,
    l as Ge,
    n as Ke,
    o as qe,
    r as Je,
    u as Ye
} from "./51994dd8-iorpxuhvjfkp2ym1.js";
var Xe, Ze, Qe, $e, et, tt = e((() => {
        Xe = N(), f(), qe(), Ze = D(), re(), Qe = e => {
            "use forget";
            let t = (0, Xe.c)(2),
                {
                    onClose: n
                } = e,
                r;
            return t[0] === n ? r = t[1] : (r = (0, Ze.jsx)(Ue, {
                onClose: n,
                hasError: !0
            }), t[0] = n, t[1] = r), r
        }, $e = m(() => ne(() => import(`./c04703b1-krqxq498833fffy7.js`).then(e => e.MicrosoftAdminSyncConnectorLoader), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])), {
            loading: Ue,
            fallback: Qe
        }), et = m(() => ne(() => import(`./c04703b1-krqxq498833fffy7.js`).then(e => e.MicrosoftAdminSyncSetup), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])), {
            loading: Ue,
            fallback: Qe
        })
    })),
    nt, rt = e((() => {
        T(), nt = ({
            link: e,
            location: t
        }) => {
            g.logEventWithStatsig(`Contextual Answers Help Link Clicked`, `chatgpt_contextual_answers_help_link_clicked`, {
                link: e,
                location: t
            })
        }
    })),
    it, at, ot, st = e((() => {
        it = t(M()), at = (0, it.createContext)({
            triggerLocation: `admin_settings`
        }), at.Provider, ot = () => {
            let e = (0, it.useContext)(at);
            if (!e) throw Error(`useTriggerLocation must be used within a TriggerLocationProvider`);
            return e
        }
    }));

function ct({
    accountId: e,
    connectionId: t,
    onClose: n,
    onNext: r,
    secondaryButton: i,
    footerContent: a
}) {
    let o = P(),
        s = d(),
        c = (0, H.useId)(),
        [l, f] = (0, H.useState)(``),
        [m, h] = (0, H.useState)(null),
        [_, v] = (0, H.useState)(!1),
        {
            triggerLocation: y
        } = ot(),
        {
            isLoading: ee,
            refetch: te,
            data: x
        } = A({
            queryKey: [`admin:connection_instance`, t],
            queryFn: async () => await B.admin_get_connection_instance(e, t)
        });
    (0, H.useEffect)(() => {
        x?.connection_config.knowledge_connector_type === `google_drive_dwd` && f(x.connection_config.admin_email_address ?? ``)
    }, [x]);
    let C = x?.connection_config.knowledge_connector_type === `google_drive_dwd` ? x.connection_config.service_account_credential_id : void 0,
        w = l.trim().length > 0 && (!!m || C),
        T = async () => {
            if (!(!w || !e || _)) {
                v(!0);
                try {
                    let n;
                    m && (n = await m.text()), await B.admin_connection_update_credential(e, t, {
                        admin_email: l,
                        new_service_credential_content: n,
                        credential_id: C && !n ? C : void 0
                    }), s.success(o.formatMessage({
                        id: `q/AX/d`,
                        defaultMessage: `Credentials successfully updated.`
                    })), r()
                } catch (e) {
                    let t = o.formatMessage({
                            id: `qbD4Az`,
                            defaultMessage: `Failed to update credentials.`
                        }),
                        n = Fe(e);
                    n && (t = o.formatMessage({
                        id: `pzfjhv`,
                        defaultMessage: `Failed to update credentials: {error}`
                    }, {
                        error: n.message
                    })), g.logEventWithStatsig(`Contextual Answers Admin Connection Config Change Error`, `chatgpt_contextual_answers_admin_connection_config_change_error`, {
                        connectorType: `google_drive_dwd`,
                        error: n?.error_type,
                        triggerLocation: y
                    }), s.danger(t, {
                        toastId: `gdrive_dwd_credentials_modal`,
                        loggingTitle: `Failed to update credentials`,
                        loggingDescription: `Failed to update credentials`
                    })
                } finally {
                    te(), v(!1)
                }
            }
        };
    return (0, U.jsx)(u, {
        ...je,
        onClose: n,
        testId: `modal-gdrive-dwd-credentials`,
        children: ee ? (0, U.jsx)(I, {
            lines: 4,
            className: `px-6 pt-4 pb-10`
        }) : (0, U.jsxs)(U.Fragment, {
            children: [(0, U.jsxs)(`form`, {
                onSubmit: e => {
                    e.preventDefault(), w && T()
                },
                className: `flex flex-col px-6 pt-4 pb-10`,
                children: [(0, U.jsx)(`button`, {
                    type: `submit`,
                    className: `display-none`
                }), (0, U.jsxs)(`div`, {
                    className: `flex flex-col gap-6`,
                    children: [(0, U.jsxs)(`div`, {
                        children: [(0, U.jsx)(`div`, {
                            className: `text-xl font-medium`,
                            children: (0, U.jsx)(k, {
                                id: `qq+Txa`,
                                defaultMessage: `Setup a new connection`
                            })
                        }), (0, U.jsx)(`div`, {
                            className: `text-token-text-secondary mt-2`,
                            children: (0, U.jsx)(k, {
                                id: `oXAF7U`,
                                defaultMessage: `First, read the <link>setup instructions</link>, then upload the service account key provided by Google.`,
                                values: {
                                    link: e => (0, U.jsx)(ce, {
                                        href: Ie,
                                        className: `underline`,
                                        onClick: () => nt({
                                            link: Ie,
                                            location: `admin_onboarding_dwd_credentials`
                                        }),
                                        children: e
                                    })
                                }
                            })
                        })]
                    }), (0, U.jsx)(lt, {
                        existingServiceKeyId: C,
                        serviceKeyFile: m,
                        setServiceKeyFile: h
                    }), (0, U.jsxs)(`div`, {
                        className: `mb-2 flex flex-col gap-2`,
                        children: [(0, U.jsxs)(`label`, {
                            htmlFor: c,
                            className: `flex flex-row items-center gap-2 text-base font-medium`,
                            children: [(0, U.jsx)(`span`, {
                                children: (0, U.jsx)(k, {
                                    id: `sPqjJA`,
                                    defaultMessage: `Google Workspace admin email address`
                                })
                            }), (0, U.jsx)(p, {
                                withArrow: !0,
                                side: `top`,
                                label: (0, U.jsx)(`p`, {
                                    className: `p-1 text-sm`,
                                    children: (0, U.jsx)(k, {
                                        id: `4xWSaU`,
                                        defaultMessage: `Your workspace admin’s email address is required to configure user access and select which shared drives you’d like to sync.`
                                    })
                                }),
                                children: (0, U.jsx)(b, {
                                    className: `icon text-token-text-tertiary`
                                })
                            })]
                        }), (0, U.jsx)(`input`, {
                            type: `text`,
                            value: l,
                            onChange: e => f(e.target.value),
                            placeholder: o.formatMessage({
                                id: `+zP1RE`,
                                defaultMessage: `admin@example.com`
                            }),
                            id: c,
                            className: `border-token-border-default bg-token-main-surface-primary text-token-text-primary rounded-lg border border-solid`
                        })]
                    })]
                })]
            }), (0, U.jsx)(R, {
                primaryButton: (0, U.jsx)(S, {
                    loading: _,
                    color: `primary`,
                    disabled: !w || _,
                    onClick: T,
                    children: (0, U.jsx)(k, {
                        id: `+itf/D`,
                        defaultMessage: `Save`
                    })
                }),
                secondaryButton: i,
                footerContent: a
            })]
        })
    })
}

function lt({
    existingServiceKeyId: e,
    serviceKeyFile: t,
    setServiceKeyFile: n
}) {
    let r = (0, H.useRef)(null),
        i = (0, H.useId)();
    return (0, U.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [(0, U.jsx)(`p`, {
            className: `text-base font-medium`,
            children: (0, U.jsx)(k, {
                id: `gI0O53`,
                defaultMessage: `Service account key`
            })
        }), !!e && !t && (0, U.jsxs)(`div`, {
            className: `flex flex-row items-center gap-2`,
            children: [(0, U.jsx)(le, {
                className: `icon-sm`
            }), (0, U.jsx)(k, {
                id: `B+/4/L`,
                defaultMessage: `Service account key already exists.`
            })]
        }), !!t && (0, U.jsx)(`p`, {
            className: `text-token-text-secondary`,
            children: t.name
        }), (0, U.jsxs)(`div`, {
            className: `flex flex-row gap-2`,
            children: [!e && !t && (0, U.jsx)(S, {
                color: `primary`,
                type: `button`,
                onClick: () => r.current?.click(),
                children: (0, U.jsx)(k, {
                    id: `4GjErm`,
                    defaultMessage: `Upload key`
                })
            }), (!!e && !t || !e && !!t) && (0, U.jsx)(S, {
                color: `secondary`,
                type: `button`,
                onClick: () => r.current?.click(),
                children: (0, U.jsx)(k, {
                    id: `qV3zuG`,
                    defaultMessage: `Replace key`
                })
            }), !!e && !!t && (0, U.jsx)(S, {
                color: `danger-outline`,
                type: `button`,
                onClick: () => n(null),
                children: (0, U.jsx)(k, {
                    id: `NFpNok`,
                    defaultMessage: `Clear`
                })
            })]
        }), (0, U.jsx)(`input`, {
            type: `file`,
            className: `hidden`,
            id: i,
            ref: r,
            onChange: e => {
                e.target.files && e.target.files.length > 0 ? n(e.target.files[0]) : n(null)
            },
            accept: `.json`
        })]
    })
}
var H, U, ut = e((() => {
    a(), Ae(), Pe(), Le(), rt(), V(), ue(), _(), w(), h(), F(), L(), E(), T(), ae(), H = t(M()), j(), z(), st(), U = D()
}));

function dt({
    isOpen: e,
    onClose: t,
    connectionId: n,
    accountId: r,
    primaryButton: i,
    secondaryButton: a,
    footerContent: o,
    showSaveButton: s = !0,
    stagedSharedDriveSettings: c,
    onStagedSharedDriveSettingsChange: l
}) {
    let {
        refetch: d,
        data: f,
        error: p,
        isLoading: m
    } = A({
        queryFn: () => vt({
            accountId: r,
            connectionId: n
        }),
        queryKey: [`admin_connection_list_item_scopes`, n, `shared_drive`]
    });
    return (0, K.jsxs)(u, {
        ...je,
        isOpen: e,
        onClose: t,
        testId: `modal-gdrive-dwd-shared-drive-picker`,
        children: [(0, K.jsx)(`div`, {
            className: `flex flex-col gap-6 px-6 pt-4 pb-10`,
            children: m ? (0, K.jsx)(I, {
                lines: 4
            }) : p ? (0, K.jsxs)(`div`, {
                className: `flex flex-col items-center justify-center gap-2`,
                children: [(0, K.jsx)(`div`, {
                    className: `text-token-text-error`,
                    children: (0, K.jsx)(k, {
                        id: `3BZzpX`,
                        defaultMessage: `Something went wrong`
                    })
                }), (0, K.jsx)(`div`, {
                    children: (0, K.jsx)(S, {
                        color: `secondary`,
                        icon: _e,
                        onClick: () => d(),
                        children: (0, K.jsx)(k, {
                            id: `fFd9RR`,
                            defaultMessage: `Try again`
                        })
                    })
                })]
            }) : (0, K.jsx)(K.Fragment, {
                children: f && (0, K.jsx)(ft, {
                    accountId: r,
                    connectionId: n,
                    sharedDriveDefaultScope: f.default_selection,
                    sharedDriveScopes: f.object_selections,
                    refetch: d,
                    showSaveButton: s,
                    stagedSharedDriveSettings: c,
                    onStagedSharedDriveSettingsChange: l
                })
            })
        }), (0, K.jsx)(R, {
            primaryButton: i,
            secondaryButton: a,
            footerContent: o
        })]
    })
}

function ft({
    refetch: e,
    accountId: t,
    connectionId: n,
    sharedDriveDefaultScope: r,
    sharedDriveScopes: i,
    showSaveButton: a,
    stagedSharedDriveSettings: o,
    onStagedSharedDriveSettingsChange: s
}) {
    let c = P(),
        l = d(),
        [u, f] = G.useState(() => o?.draftScopes.map(W) ?? i.map(W)),
        [p, m] = G.useState(o?.draftDefaultSelection ?? r);
    G.useEffect(() => {
        o || m(r)
    }, [r, o]), G.useEffect(() => {
        o || f(i.map(W))
    }, [i, o]), G.useEffect(() => {
        s && s({
            baseDefaultSelection: r,
            baseScopes: i.map(W),
            draftDefaultSelection: p,
            draftScopes: u.map(W)
        })
    }, [p, u, s, r, i]);
    let {
        isPending: h,
        mutate: g
    } = ie({
        mutationFn: async () => {
            let e = p;
            e !== r && await B.admin_connection_update_item_default_scope(t, n, `shared_drive`, e);
            let a = _t({
                currentScopes: i.map(W),
                draftScopes: u,
                finalDefaultSelection: e
            });
            a.excludeHandles.length > 0 && await B.admin_connection_block_items(t, n, `shared_drive`, a.excludeHandles), a.includeHandles.length > 0 && await B.admin_connection_unblock_items(t, n, `shared_drive`, a.includeHandles)
        },
        mutationKey: [`admin_connection_save_shared_drive_scope_settings`, n],
        onError: () => {
            l.danger(c.formatMessage({
                id: `n1puJB`,
                defaultMessage: `Failed to save Shared Drive settings.`
            }), {
                toastId: `gdrive_dwd_shared_drive_picker_modal`,
                loggingTitle: `Failed to save Shared Drive settings`,
                loggingDescription: `Failed to save Shared Drive settings`
            })
        },
        onSuccess: () => {
            l.success(c.formatMessage({
                id: `b/Yc2c`,
                defaultMessage: `Shared Drive settings saved.`
            }))
        },
        onSettled: () => {
            e()
        }
    }), _ = p !== r, v = !mt(u, i.map(W)), y = _ || v;
    return (0, K.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [(0, K.jsx)(`div`, {
            className: `text-xl font-medium`,
            children: (0, K.jsx)(k, {
                id: `CIWfUm`,
                defaultMessage: `How do you want to handle Shared Drives?`
            })
        }), (0, K.jsx)(`div`, {
            className: `text-token-text-secondary text-sm`,
            children: (0, K.jsx)(k, {
                id: `BXG6kp`,
                defaultMessage: `Add any Shared Drives you’d like to exclude or include by default.`
            })
        }), (0, K.jsx)(ye, {
            ariaLabel: c.formatMessage({
                id: `ca.scope-selector.aria-label`,
                defaultMessage: `Select whether Shared drives are included or excluded from syncing by default.`
            }),
            onChange: e => {
                h || m(e)
            },
            value: p,
            leftItem: {
                ariaLabel: c.formatMessage(yt.includeToggleLabel),
                label: c.formatMessage(yt.includeToggleLabel),
                value: `include`
            },
            rightItem: {
                ariaLabel: c.formatMessage(yt.excludeToggleLabel),
                label: c.formatMessage(yt.excludeToggleLabel),
                value: `exclude`
            }
        }), h ? (0, K.jsx)(I, {
            lines: 3
        }) : p === `include` ? (0, K.jsxs)(K.Fragment, {
            children: [(0, K.jsx)(`p`, {
                className: `text-token-text-secondary text-sm`,
                children: (0, K.jsx)(k, {
                    id: `dmDuO6`,
                    defaultMessage: `All Shared drives will be synced except for ones you choose to exclude.`
                })
            }), (0, K.jsx)(`p`, {
                className: `text-token-text-secondary font-medium`,
                children: (0, K.jsx)(k, {
                    id: `buyi/M`,
                    defaultMessage: `Excluded Shared drives`
                })
            }), (0, K.jsx)(`ul`, {
                children: u.filter(e => e.selection === `exclude`).map(e => (0, K.jsx)(Ce, {
                    objectHandle: e.object_handle,
                    objectType: `shared_drive`,
                    accountId: t,
                    connectionId: n,
                    scopeChangeIcon: he,
                    scopeChangeLabel: c.formatMessage({
                        id: `NLi7nF`,
                        defaultMessage: `Remove exclusion`
                    }),
                    scopeChangeTarget: `include`,
                    onScopeChangeRequested: ({
                        objectHandle: e
                    }) => {
                        f(t => gt(t, e))
                    },
                    onError: () => {},
                    onScopeUpdated: () => {},
                    disabled: h
                }, e.object_handle))
            }), (0, K.jsx)(we, {
                objectType: `shared_drive`,
                targetScopeSelection: `exclude`,
                accountId: t,
                connectionId: n,
                buttonLabel: c.formatMessage({
                    id: `ThGxVh`,
                    defaultMessage: `Exclude`
                }),
                onSubmitDraft: ({
                    objectHandle: e
                }) => {
                    f(t => ht(t, e, `exclude`))
                },
                onSuccess: () => {},
                onError: () => {},
                disabled: h
            })]
        }) : (0, K.jsxs)(K.Fragment, {
            children: [(0, K.jsx)(`p`, {
                className: `text-token-text-secondary text-sm`,
                children: (0, K.jsx)(k, {
                    id: `Pa+iyD`,
                    defaultMessage: `Only the Shared drives you select will be synced.`
                })
            }), (0, K.jsx)(`p`, {
                className: `text-token-text-secondary font-medium`,
                children: (0, K.jsx)(k, {
                    id: `e4EV27`,
                    defaultMessage: `Included Shared drives`
                })
            }), (0, K.jsx)(`ul`, {
                children: u.filter(e => e.selection === `include`).map(e => (0, K.jsx)(Ce, {
                    objectHandle: e.object_handle,
                    objectType: `shared_drive`,
                    accountId: t,
                    connectionId: n,
                    scopeChangeIcon: he,
                    scopeChangeLabel: c.formatMessage({
                        id: `/oSk2L`,
                        defaultMessage: `Remove inclusion`
                    }),
                    scopeChangeTarget: `exclude`,
                    onScopeChangeRequested: ({
                        objectHandle: e
                    }) => {
                        f(t => gt(t, e))
                    },
                    onError: () => {},
                    onScopeUpdated: () => {},
                    disabled: h
                }, e.object_handle))
            }), (0, K.jsx)(we, {
                objectType: `shared_drive`,
                targetScopeSelection: `include`,
                accountId: t,
                connectionId: n,
                buttonLabel: c.formatMessage({
                    id: `At82Iq`,
                    defaultMessage: `Include`
                }),
                onSubmitDraft: ({
                    objectHandle: e
                }) => {
                    f(t => ht(t, e, `include`))
                },
                onSuccess: () => {},
                onError: () => {},
                disabled: h
            })]
        }), a && (0, K.jsx)(`div`, {
            className: `border-token-border-default mt-6 flex justify-end border-t pt-4`,
            children: (0, K.jsx)(S, {
                color: `primary`,
                disabled: h || !y,
                onClick: () => {
                    h || !y || g()
                },
                children: (0, K.jsx)(k, {
                    id: `0AFmil`,
                    defaultMessage: `Save changes`
                })
            })
        })]
    })
}

function W(e) {
    return {
        object_handle: e.object_handle,
        selection: e.selection
    }
}

function pt(e) {
    let t = new Map;
    for (let n of e) t.set(n.object_handle, n.selection);
    return t
}

function mt(e, t) {
    let n = pt(e),
        r = pt(t);
    if (n.size !== r.size) return !1;
    for (let [e, t] of n)
        if (r.get(e) !== t) return !1;
    return !0
}

function ht(e, t, n) {
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

function gt(e, t) {
    return e.filter(e => e.object_handle !== t)
}

function _t({
    currentScopes: e,
    draftScopes: t,
    finalDefaultSelection: n
}) {
    let r = pt(e),
        i = pt(t),
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
async function vt({
    accountId: e,
    connectionId: t
}) {
    let n = [],
        r = await B.admin_connection_list_item_scopes(e, t, `shared_drive`, null);
    for (n.push(r); r.page_token != null;) r = await B.admin_connection_list_item_scopes(e, t, `shared_drive`, r.page_token), n.push(r);
    return {
        object_type: `shared_drive`,
        default_selection: n[0].default_selection,
        object_selections: n.flatMap(e => e.object_selections)
    }
}
var G, K, yt, bt = e((() => {
    a(), be(), V(), de(), pe(), w(), L(), xe(), E(), ae(), G = t(M()), j(), Ae(), z(), K = D(), yt = O({
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

function xt({
    isOpen: e,
    onClose: t,
    connectionId: n,
    accountId: i,
    isPostActivation: a,
    footerContent: o,
    primaryButton: s,
    secondaryButton: c
}) {
    let l = P(),
        f = d(),
        {
            refetch: m,
            data: h,
            error: g,
            isLoading: _
        } = A({
            queryFn: async () => await B.admin_connection_list_item_scopes(i, n, `user_drive`),
            queryKey: [`admin_connection_list_item_scopes`, n, `user_drive`]
        }),
        {
            isPending: v,
            mutate: y
        } = ie({
            mutationFn: async e => await B.admin_connection_update_item_default_scope(i, n, `user_drive`, e ? `include` : `exclude`),
            mutationKey: [`admin_connection_update_item_default_scope`, n, `user_drive`],
            onError: () => {
                f.danger(l.formatMessage({
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
    return (0, q.jsxs)(u, {
        ...je,
        isOpen: e,
        onClose: t,
        testId: `modal-gdrive-dwd-user-drives`,
        children: [(0, q.jsx)(`div`, {
            className: `flex flex-col gap-6 px-6 pt-4 pb-10`,
            children: _ ? (0, q.jsx)(I, {
                lines: 4
            }) : g ? (0, q.jsxs)(`div`, {
                className: `flex flex-col items-center justify-center gap-2`,
                children: [(0, q.jsx)(`div`, {
                    className: `text-token-text-error`,
                    children: (0, q.jsx)(k, {
                        id: `3BZzpX`,
                        defaultMessage: `Something went wrong`
                    })
                }), (0, q.jsx)(`div`, {
                    children: (0, q.jsx)(S, {
                        color: `secondary`,
                        icon: _e,
                        onClick: () => m(),
                        children: (0, q.jsx)(k, {
                            id: `fFd9RR`,
                            defaultMessage: `Try again`
                        })
                    })
                })]
            }) : a ? (0, q.jsx)(`div`, {
                className: `group border-token-border-medium flex w-full flex-row items-center gap-4 rounded-xl border px-8 py-4`,
                children: b ? (0, q.jsxs)(q.Fragment, {
                    children: [(0, q.jsx)(le, {
                        className: `icon-lg`
                    }), (0, q.jsx)(`p`, {
                        className: `grow`,
                        children: (0, q.jsx)(k, {
                            id: `rWqZ31`,
                            defaultMessage: `User owned files in My Drives are being synced.`
                        })
                    })]
                }) : (0, q.jsxs)(q.Fragment, {
                    children: [(0, q.jsx)(me, {
                        className: `icon-lg`
                    }), (0, q.jsx)(`p`, {
                        className: `grow`,
                        children: (0, q.jsx)(k, {
                            id: `/dUChW`,
                            defaultMessage: `User owned files in My Drives are not being synced.`
                        })
                    })]
                })
            }) : (0, q.jsxs)(`div`, {
                className: `flex flex-col gap-4`,
                children: [(0, q.jsx)(`div`, {
                    className: `text-xl font-medium`,
                    children: (0, q.jsx)(k, {
                        id: `K4ZFoX`,
                        defaultMessage: `How do you want to handle My Drives?`
                    })
                }), (0, q.jsx)(`div`, {
                    className: `text-token-text-secondary text-sm`,
                    children: (0, q.jsx)(k, {
                        id: `kAW/VW`,
                        defaultMessage: `Choose whether you want to sync the My Drive folder for your users.`
                    })
                }), (0, q.jsxs)(`div`, {
                    className: `group border-token-border-medium flex w-full flex-row items-center gap-4 rounded-xl border px-8 py-4`,
                    children: [(0, q.jsx)(C, {
                        checked: b,
                        disabled: v,
                        "aria-label": l.formatMessage(St.includeUserDrivesLabel),
                        onCheckedChange: () => {
                            !v && y(!b)
                        }
                    }), (0, q.jsx)(`p`, {
                        children: (0, q.jsx)(k, {
                            ...St.includeUserDrivesLabel
                        })
                    }), v && (0, q.jsx)(r, {}), (0, q.jsx)(`div`, {
                        className: `grow`
                    }), (0, q.jsx)(p, {
                        label: (0, q.jsx)(`p`, {
                            children: (0, q.jsx)(k, {
                                id: `xJvlxk`,
                                defaultMessage: `Enable this setting to sync files in users' individual My Drives.`
                            })
                        }),
                        children: (0, q.jsx)(ve, {
                            className: `icon-lg text-token-text-tertiary`
                        })
                    })]
                }), (0, q.jsxs)(`div`, {
                    className: `bg-token-main-surface-secondary text-token-text-primary flex w-full flex-row items-center gap-4 rounded-xl p-4`,
                    children: [(0, q.jsx)(x, {
                        className: `icon-lg`
                    }), (0, q.jsx)(`span`, {
                        className: `text-token-text-secondary text-sm`,
                        children: (0, q.jsx)(k, {
                            id: `4vN9WK`,
                            defaultMessage: `You will not be able to change whether user My Drives are included once the connection starts syncing data.`
                        })
                    })]
                })]
            })
        }), (0, q.jsx)(R, {
            footerContent: o,
            primaryButton: s,
            secondaryButton: c
        })]
    })
}
var q, St, Ct = e((() => {
    a(), V(), de(), ue(), ge(), fe(), v(), w(), ee(), h(), L(), te(), E(), ae(), M(), j(), Ae(), z(), q = D(), St = O({
        includeUserDrivesLabel: {
            id: `75ojp7`,
            defaultMessage: `Include user My Drives?`
        }
    })
}));

function wt(e) {
    "use forget";
    let t = (0, Tt.c)(5),
        {
            connectionDisplayInfo: n
        } = e,
        r;
    t[0] === n.icon_url ? r = t[1] : (r = n.icon_url && (0, Et.jsx)(`img`, {
        src: n.icon_url,
        alt: ``,
        className: `icon-sm me-2 inline`
    }), t[0] = n.icon_url, t[1] = r);
    let i;
    return t[2] !== n.display_name || t[3] !== r ? (i = (0, Et.jsxs)(`span`, {
        className: `bg-token-bg-tertiary rounded-xl px-2 py-1 font-bold whitespace-nowrap`,
        children: [r, n.display_name]
    }), t[2] = n.display_name, t[3] = r, t[4] = i) : i = t[4], i
}
var Tt, Et, Dt = e((() => {
    Tt = N(), Et = D()
}));

function Ot({
    isOpen: e,
    onClose: t,
    onActivate: n,
    onBeforeActivate: r,
    connectionId: i,
    accountId: a,
    connectionDisplayInfo: o,
    footerContent: s,
    secondaryButton: c,
    connectorType: l
}) {
    let f = P(),
        p = d(),
        {
            triggerLocation: m
        } = ot(),
        [h, _] = (0, kt.useState)(!1),
        v = (0, J.jsx)(S, {
            color: `primary`,
            loading: h,
            onClick: async () => {
                if (!h) {
                    _(!0);
                    try {
                        await r?.(), await B.admin_activate_connection_instance(a, i), g.logEventWithStatsig(`Contextual Answers Admin Connection Activated`, `chatgpt_contextual_answers_admin_connection_activated`, {
                            connectorType: l,
                            triggerLocation: m
                        }), p.success(f.formatMessage({
                            id: `y5DD0Z`,
                            defaultMessage: `Connection successfully activated.`
                        })), n?.(), t?.()
                    } catch {
                        p.danger(f.formatMessage({
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
            children: (0, J.jsx)(k, {
                id: `C2dZRO`,
                defaultMessage: `Done`
            })
        });
    return (0, J.jsxs)(u, {
        ...Oe,
        testId: `modal-review-and-activate`,
        isOpen: e,
        onClose: t,
        title: se(l),
        children: [(0, J.jsxs)(`div`, {
            className: `flex flex-col gap-3 px-6 pt-4 pb-10`,
            children: [(0, J.jsx)(`div`, {
                className: `text-xl font-medium`,
                children: (0, J.jsx)(k, {
                    id: `38WXzu`,
                    defaultMessage: `Review`
                })
            }), (0, J.jsx)(`p`, {
                className: `text-token-text-secondary text-sm`,
                children: (0, J.jsx)(k, {
                    id: `yQhjtE`,
                    defaultMessage: `Confirm everything looks good to you, then click the button to activate the connection and start syncing. `
                })
            }), (0, J.jsx)(wt, {
                connectionDisplayInfo: o
            })]
        }), (0, J.jsx)(R, {
            primaryButton: v,
            secondaryButton: c,
            footerContent: s
        })]
    })
}
var kt, J, At = e((() => {
    a(), Dt(), V(), w(), E(), T(), kt = t(M()), j(), oe(), st(), Ae(), z(), J = D()
}));

function jt({
    steps: e,
    onClose: t
}) {
    let n = e.length,
        [r, i] = (0, Mt.useState)(0),
        a = e[0]?.connectorType,
        o = e[0]?.name;
    (0, Mt.useEffect)(() => {
        if (!a || !o) return;
        let e = `chatgpt_contextual_answers_admin_create_connection_step`,
            t = g.logStructuredEvent(`ChatgptContextualAnswersAdminCreateConnectionStepShown`, {
                legacyStatsigEventName: e,
                connectorType: a,
                stepName: o
            });
        g.logValueEventWithStatsig({
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
            r = g.logStructuredEvent(`ChatgptContextualAnswersAdminCreateConnectionStepShown`, {
                legacyStatsigEventName: n,
                connectorType: e[t].connectorType,
                stepName: e[t].name
            });
        g.logValueEventWithStatsig({
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
var Mt, Nt = e((() => {
    T(), Mt = t(M())
}));

function Pt({
    onClose: e,
    backButton: t
}) {
    let [n, r] = (0, X.useState)(), i = s();
    return i ? n ? (0, Z.jsx)(It, {
        accountId: i.id,
        connection: n,
        onClose: () => e(!0)
    }) : (0, Z.jsx)(Ft, {
        onClose: e,
        backButton: t,
        setConnection: r
    }) : null
}

function Ft({
    onClose: e,
    setConnection: t,
    backButton: n
}) {
    let r = P(),
        i = d(),
        a = s(),
        o = (0, X.useId)(),
        {
            triggerLocation: c
        } = ot();
    (0, X.useEffect)(() => {
        let e = `chatgpt_contextual_answers_admin_create_connection_step`,
            t = g.logStructuredEvent(`ChatgptContextualAnswersAdminCreateConnectionStepShown`, {
                legacyStatsigEventName: e,
                connectorType: `google_drive_dwd`,
                stepName: `basic_info`,
                triggerLocation: c
            });
        g.logValueEventWithStatsig({
            segmentEventName: `Contextual Answers Admin Create Connection Step`,
            statsigEventName: e,
            data: {
                connectorType: `google_drive_dwd`,
                stepName: `basic_info`,
                triggerLocation: c
            },
            eventId: t
        })
    }, [c]);
    let [l, f] = (0, X.useState)(``), p = l.length > 128, m = l.trim().length > 0 && !p, [h, _] = (0, X.useState)(!1), v = (0, X.useCallback)(() => {
        !m || !a || h || (_(!0), B.admin_create_connection_instance_via_workspace_permissions(a.id, {
            knowledge_connector_type: `google_drive_dwd`,
            connection_config_id: `--fake-local-id`
        }, l.trim()).then(e => {
            t(e)
        }).catch(() => {
            i.danger(r.formatMessage({
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
    }, [a, l, r, m, h, t, i]);
    return (0, Z.jsxs)(u, {
        ...je,
        onClose: () => e?.(),
        testId: `modal-gdrive-dwd-basic-info`,
        children: [(0, Z.jsxs)(`form`, {
            onSubmit: e => {
                e.preventDefault(), m && v()
            },
            className: `flex flex-col px-6 pt-4 pb-10`,
            children: [(0, Z.jsxs)(`div`, {
                className: `flex flex-col gap-2`,
                children: [(0, Z.jsx)(`label`, {
                    htmlFor: o,
                    className: `text-xl font-medium`,
                    children: (0, Z.jsx)(k, {
                        id: `+wLWeZ`,
                        defaultMessage: `Enter display name`
                    })
                }), (0, Z.jsx)(`input`, {
                    type: `text`,
                    value: l,
                    onChange: e => f(e.target.value),
                    id: o,
                    className: `border-token-border-default bg-token-main-surface-primary text-token-text-primary rounded-lg border border-solid`
                }), (0, Z.jsx)(`div`, {
                    className: `text-token-text-tertiary text-sm`,
                    children: (0, Z.jsx)(k, {
                        id: `CPXVQO`,
                        defaultMessage: `This is the name your members will see in their ChatGPT connectors.`
                    })
                }), p ? (0, Z.jsx)(`p`, {
                    className: `text-red-500`,
                    children: (0, Z.jsx)(k, {
                        id: `vT7EGU`,
                        defaultMessage: `Name is too long.`
                    })
                }) : null]
            }), (0, Z.jsx)(`button`, {
                type: `submit`,
                className: `display-none`
            })]
        }), (0, Z.jsx)(R, {
            secondaryButton: n,
            primaryButton: (0, Z.jsx)(S, {
                color: `primary`,
                disabled: !m || h,
                loading: h,
                onClick: v,
                children: (0, Z.jsx)(k, {
                    id: `lZthRm`,
                    defaultMessage: `Save Draft and Continue`
                })
            })
        })]
    })
}

function It({
    connection: e,
    accountId: t,
    onClose: n
}) {
    let [r, i] = (0, X.useState)(null), a = e.connection_config.connection_config_id, o = (0, X.useCallback)(e => {
        i(t => t ? {
            ...e,
            baseDefaultSelection: t.baseDefaultSelection,
            baseScopes: Y(t.baseScopes),
            draftScopes: Y(e.draftScopes)
        } : {
            ...e,
            baseScopes: Y(e.baseScopes),
            draftScopes: Y(e.draftScopes)
        })
    }, []), s = (0, X.useCallback)(async () => {
        if (!r) return;
        let e = r;
        try {
            e.draftDefaultSelection !== e.baseDefaultSelection && await B.admin_connection_update_item_default_scope(t, a, `shared_drive`, e.draftDefaultSelection);
            let n = _t({
                currentScopes: e.baseScopes,
                draftScopes: e.draftScopes,
                finalDefaultSelection: e.draftDefaultSelection
            });
            n.excludeHandles.length > 0 && await B.admin_connection_block_items(t, a, `shared_drive`, n.excludeHandles), n.includeHandles.length > 0 && await B.admin_connection_unblock_items(t, a, `shared_drive`, n.includeHandles), i({
                baseDefaultSelection: e.draftDefaultSelection,
                baseScopes: Y(e.draftScopes),
                draftDefaultSelection: e.draftDefaultSelection,
                draftScopes: Y(e.draftScopes)
            })
        } catch (e) {
            try {
                let e = await vt({
                    accountId: t,
                    connectionId: a
                });
                i(t => t && {
                    baseDefaultSelection: e.default_selection,
                    baseScopes: e.object_selections.map(({
                        object_handle: e,
                        selection: t
                    }) => ({
                        object_handle: e,
                        selection: t
                    })),
                    draftDefaultSelection: t.draftDefaultSelection,
                    draftScopes: Y(t.draftScopes)
                })
            } catch {}
            throw e
        }
    }, [t, a, r]);
    return (0, Z.jsx)(jt, {
        onClose: n,
        steps: [{
            connectorType: `google_drive_dwd`,
            name: `credential`,
            fn: ({
                goForward: n,
                close: r,
                stepNumber: i,
                totalSteps: a
            }) => (0, Z.jsx)(ct, {
                onClose: () => r?.(),
                accountId: t,
                connectionId: e.connection_config.connection_config_id,
                onNext: n ?? (() => null),
                footerContent: (0, Z.jsx)(`span`, {
                    className: `text-token-text-secondary flex-1 align-middle font-medium`,
                    children: (0, Z.jsx)(k, {
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
                goForward: n,
                goBackward: r,
                close: i,
                stepNumber: a,
                totalSteps: o
            }) => (0, Z.jsx)(xt, {
                onClose: () => i?.(),
                accountId: t,
                connectionId: e.connection_config.connection_config_id,
                primaryButton: n && (0, Z.jsx)(S, {
                    color: `primary`,
                    onClick: n,
                    children: (0, Z.jsx)(k, {
                        id: `z5fExR`,
                        defaultMessage: `Next`
                    })
                }),
                secondaryButton: r && (0, Z.jsx)(S, {
                    color: `secondary`,
                    onClick: r,
                    children: (0, Z.jsx)(k, {
                        id: `xJnONr`,
                        defaultMessage: `Back`
                    })
                }),
                footerContent: (0, Z.jsx)(`span`, {
                    className: `text-token-text-secondary flex-1 align-middle font-medium`,
                    children: (0, Z.jsx)(k, {
                        id: `Wp0nVY`,
                        defaultMessage: `Step {stepNum} of {totalSteps}`,
                        values: {
                            stepNum: a + 1,
                            totalSteps: o
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
                goForward: n,
                goBackward: i,
                close: a,
                stepNumber: s,
                totalSteps: c
            }) => (0, Z.jsx)(dt, {
                onClose: () => a?.(),
                accountId: t,
                connectionId: e.connection_config.connection_config_id,
                primaryButton: n && (0, Z.jsx)(S, {
                    color: `primary`,
                    onClick: n,
                    children: (0, Z.jsx)(k, {
                        id: `z5fExR`,
                        defaultMessage: `Next`
                    })
                }),
                secondaryButton: i && (0, Z.jsx)(S, {
                    color: `secondary`,
                    onClick: i,
                    children: (0, Z.jsx)(k, {
                        id: `xJnONr`,
                        defaultMessage: `Back`
                    })
                }),
                footerContent: (0, Z.jsx)(`span`, {
                    className: `text-token-text-secondary flex-1 align-middle font-medium`,
                    children: (0, Z.jsx)(k, {
                        id: `Wp0nVY`,
                        defaultMessage: `Step {stepNum} of {totalSteps}`,
                        values: {
                            stepNum: s + 1,
                            totalSteps: c
                        }
                    })
                }),
                isOpen: !0,
                showSaveButton: !1,
                stagedSharedDriveSettings: r ?? void 0,
                onStagedSharedDriveSettingsChange: o
            })
        }, {
            connectorType: `google_drive_dwd`,
            name: `review_and_activate`,
            fn: ({
                goBackward: n,
                close: r,
                stepNumber: i,
                totalSteps: a
            }) => (0, Z.jsx)(Ot, {
                isOpen: !0,
                onClose: () => r?.(),
                accountId: t,
                connectorType: `google_drive_dwd`,
                connectionId: e.connection_config.connection_config_id,
                connectionDisplayInfo: e.display_info,
                onBeforeActivate: s,
                secondaryButton: n && (0, Z.jsx)(S, {
                    color: `secondary`,
                    onClick: n,
                    children: (0, Z.jsx)(k, {
                        id: `xJnONr`,
                        defaultMessage: `Back`
                    })
                }),
                footerContent: (0, Z.jsx)(`span`, {
                    className: `text-token-text-secondary flex-1 align-middle font-medium`,
                    children: (0, Z.jsx)(k, {
                        id: `Wp0nVY`,
                        defaultMessage: `Step {stepNum} of {totalSteps}`,
                        values: {
                            stepNum: i + 1,
                            totalSteps: a
                        }
                    })
                })
            })
        }]
    })
}

function Y(e) {
    return e.map(e => ({
        ...e
    }))
}
var X, Z, Lt = e((() => {
    a(), ut(), bt(), Ct(), Ae(), At(), Nt(), V(), w(), o(), E(), T(), X = t(M()), j(), z(), st(), Z = D()
}));

function Rt(e) {
    "use forget";
    let t = (0, zt.c)(11),
        {
            isDwdEnabled: n,
            onClose: r,
            triggerLocation: i
        } = e,
        a, o;
    if (t[0] !== n || t[1] !== r ? (a = () => {
            n || r()
        }, o = [n, r], t[0] = n, t[1] = r, t[2] = a, t[3] = o) : (a = t[2], o = t[3]), (0, Bt.useEffect)(a, o), !n) return null;
    let s;
    t[4] === i ? s = t[5] : (s = {
        triggerLocation: i
    }, t[4] = i, t[5] = s);
    let c;
    t[6] === r ? c = t[7] : (c = (0, Vt.jsx)(Pt, {
        onClose: r,
        backButton: null
    }), t[6] = r, t[7] = c);
    let l;
    return t[8] !== s || t[9] !== c ? (l = (0, Vt.jsx)(at.Provider, {
        value: s,
        children: c
    }), t[8] = s, t[9] = c, t[10] = l) : l = t[10], l
}
var zt, Bt, Vt, Ht = e((() => {
    zt = N(), Lt(), Bt = t(M()), st(), Vt = D()
}));

function Ut(e) {
    function t({
        accountId: t,
        onClose: n,
        onSuccess: r
    }) {
        let i = P(),
            a = d(),
            [o, s] = (0, Wt.useState)(!1),
            c = (0, Wt.useCallback)(async () => {
                s(!0);
                let o = e.type === `github` ? {
                    connection_config_id: Gt,
                    knowledge_connector_type: e.type,
                    organization_name: null
                } : {
                    connection_config_id: Gt,
                    knowledge_connector_type: e.type
                };
                try {
                    await B.admin_create_connection_instance_via_workspace_permissions(t, o, void 0), await r?.(), n()
                } catch {
                    a.danger(i.formatMessage({
                        id: `aqpeYE`,
                        defaultMessage: `Something went wrong. Please try again.`
                    }), {
                        toastId: e.modal.toastId,
                        loggingTitle: `Failed to create connection`,
                        loggingDescription: `Failed to create connection`
                    })
                } finally {
                    s(!1)
                }
            }, [t, i, n, r, a]);
        return (0, Q.jsxs)(u, {
            ...e.modal.props,
            onClose: n,
            testId: e.modal.testId,
            children: [(0, Q.jsxs)(`div`, {
                className: `px-6 pt-4 pb-10`,
                children: [(0, Q.jsx)(`div`, {
                    className: `text-xl font-medium`,
                    children: (0, Q.jsx)(k, {
                        ...e.modal.copy.title
                    })
                }), (0, Q.jsx)(`div`, {
                    className: `text-md text-token-text-secondary mt-3`,
                    children: (0, Q.jsx)(k, {
                        ...e.modal.copy.description
                    })
                }), (0, Q.jsx)(`div`, {
                    className: `mt-6 text-lg font-medium`,
                    children: (0, Q.jsx)(k, {
                        id: `edoz9r`,
                        defaultMessage: `What to expect`
                    })
                }), (0, Q.jsx)(`ul`, {
                    className: `text-md text-token-text-secondary ms-6 mt-4`,
                    children: e.modal.copy.bulletPoints.map((e, t, n) => (0, Q.jsx)(`li`, {
                        className: t < n.length - 1 ? `mb-2 list-disc` : `list-disc`,
                        children: (0, Q.jsx)(k, {
                            ...e
                        })
                    }, t))
                })]
            }), (0, Q.jsx)(R, {
                primaryButton: (0, Q.jsx)(S, {
                    color: `primary`,
                    onClick: c,
                    loading: o,
                    children: (0, Q.jsx)(k, {
                        id: `y+cVaH`,
                        defaultMessage: `Enable`
                    })
                })
            })]
        })
    }

    function n({
        onClose: e,
        onSuccess: n
    }) {
        let r = s();
        return r ? (0, Q.jsx)(t, {
            accountId: r.id,
            onClose: e,
            onSuccess: n
        }) : null
    }
    return {
        Controller: n,
        Modal: t
    }
}
var Wt, Q, Gt, Kt = e((() => {
    a(), z(), V(), w(), o(), E(), Wt = t(M()), j(), Q = D(), Gt = `--fake-local-id`
}));

function qt(e) {
    let t = Xt.get(e);
    if (!t) throw Error(`Unknown simple connector flow for type: ${e}`);
    return t
}

function Jt(e) {
    return qt(e).Controller
}
var Yt, Xt, Zt = e((() => {
    De(), Kt(), Yt = ke.map(e => [e, Ut(Ne[e])]), Xt = new Map(Yt), ke.map(Jt)
}));

function Qt(e) {
    let {
        key: t
    } = e;
    return t === `outlook_email_admin` || t === `teams_admin`
}

function $t() {
    return Be()
}

function en() {
    return i()?.normalizedAccountUserId
}

function tn(e) {
    return e.key === `google_drive_dwd`
}
var nn, rn, $, an, on, sn, cn, ln, un = e((() => {
    nn = N(), Re(), y(), o(), n(), Ye(), tt(), a(), Ht(), Zt(), w(), te(), rn = t(M()), j(), Se(), Me(), He(), Je(), $ = D(), an = {
        sharepoint_admin: `sharepoint`,
        teams_admin: `teams`,
        google_drive_oauth: `google_drive`,
        google_drive_dwd: `google_drive`
    }, on = (0, rn.createContext)(() => {}), sn = O({
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
        let t = (0, nn.c)(6),
            {
                children: n,
                connectorReadScope: r
            } = e,
            [i, a] = (0, rn.useState)(null),
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
        let t = (0, nn.c)(57),
            {
                app: n,
                connectorReadScope: i,
                openToAdminSync: a,
                openToUserSync: o,
                skipParameterConstraintsPreflight: d,
                onClose: f
            } = e,
            p = a !== void 0 && a,
            m = o !== void 0 && o,
            h = d !== void 0 && d,
            g = P(),
            _;
        t[0] === n.knowledgeConfig ? _ = t[1] : (_ = n.knowledgeConfig.some(Qt), t[0] = n.knowledgeConfig, t[1] = _);
        let v = _,
            y;
        t[2] !== n.primaryConnector.id || t[3] !== v ? (y = v || Ee(n.primaryConnector.id), t[2] = n.primaryConnector.id, t[3] = v, t[4] = y) : y = t[4];
        let b = y,
            ee = b && p,
            te = b && !ee && m,
            x = n.knowledgeConfig[0].key,
            C = an[x] || x,
            w = Te(),
            T = c($t),
            E = c(en),
            D;
        t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (D = s(l())?.getWorkspaceId(), t[5] = D) : D = t[5];
        let O = D,
            A;
        t[6] !== n.primaryConnector.id || t[7] !== T ? (A = () => {
            ze(T, O ?? ``, n.primaryConnector.id, !!(O && n.primaryConnector.id))
        }, t[6] = n.primaryConnector.id, t[7] = T, t[8] = A) : A = t[8];
        let j;
        t[9] !== n.primaryConnector.id || t[10] !== E || t[11] !== T ? (j = [T, E, O, n.primaryConnector.id], t[9] = n.primaryConnector.id, t[10] = E, t[11] = T, t[12] = j) : j = t[12], (0, rn.useEffect)(A, j);
        let {
            hasParameterConstraints: M,
            isLoading: ne
        } = We(n, T, E), [re, ie] = (0, rn.useState)(!1), ae = Ve({
            app: n
        }), N;
        t[13] !== w || t[14] !== f ? (N = () => {
            w(), f()
        }, t[13] = w, t[14] = f, t[15] = N) : N = t[15];
        let F = N,
            oe = ae && M && !h && !re,
            I;
        t[16] === n ? I = t[17] : (I = Ge(n), t[16] = n, t[17] = I);
        let L = I;
        if (ne) {
            let e;
            t[18] === g ? e = t[19] : (e = g.formatMessage(sn.loadingSyncSetupTitle), t[18] = g, t[19] = e);
            let n;
            t[20] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, $.jsx)(`div`, {
                className: `flex min-h-52 items-center justify-center p-8`,
                children: (0, $.jsx)(r, {})
            }), t[20] = n) : n = t[20];
            let i;
            return t[21] !== F || t[22] !== e ? (i = (0, $.jsx)(u, {
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
            }), t[21] = F, t[22] = e, t[23] = i) : i = t[23], i
        }
        if (oe) {
            let e;
            t[24] === g ? e = t[25] : (e = g.formatMessage(sn.syncConstraintsPreflightTitle), t[24] = g, t[25] = e);
            let n;
            t[26] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, $.jsxs)(`div`, {
                className: `p-6`,
                children: [(0, $.jsx)(`div`, {
                    className: `text-xl font-semibold`,
                    children: (0, $.jsx)(k, {
                        ...sn.syncConstraintsPreflightTitle
                    })
                }), (0, $.jsx)(Ke, {
                    className: `mt-4`
                })]
            }), t[26] = n) : n = t[26];
            let r;
            t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, $.jsx)(k, {
                id: `kmMRzz`,
                defaultMessage: `Cancel`
            }), t[27] = r) : r = t[27];
            let i;
            t[28] === F ? i = t[29] : (i = (0, $.jsx)(S, {
                color: `secondary`,
                onClick: F,
                children: r
            }), t[28] = F, t[29] = i);
            let a;
            t[30] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, $.jsx)(S, {
                color: `primary`,
                onClick: () => ie(!0),
                children: (0, $.jsx)(k, {
                    id: `C3NxrS`,
                    defaultMessage: `Continue`
                })
            }), t[30] = a) : a = t[30];
            let o;
            t[31] === i ? o = t[32] : (o = (0, $.jsxs)(`div`, {
                className: `flex justify-end gap-2 border-t p-4`,
                children: [i, a]
            }), t[31] = i, t[32] = o);
            let s;
            return t[33] !== F || t[34] !== e || t[35] !== o ? (s = (0, $.jsxs)(u, {
                testId: `modal-app-sync-constraints-preflight`,
                isOpen: !0,
                onClose: F,
                size: `custom`,
                className: `max-w-[480px]`,
                contentClassName: `max-h-[90vh] flex flex-col`,
                visuallyHiddenHeader: !0,
                title: e,
                noPadding: !0,
                children: [n, o]
            }), t[33] = F, t[34] = e, t[35] = o, t[36] = s) : s = t[36], s
        }
        if (L) {
            let e;
            t[37] !== n.primaryConnector || t[38] !== n.relatedConnectors ? (e = [n.primaryConnector, ...n.relatedConnectors], t[37] = n.primaryConnector, t[38] = n.relatedConnectors, t[39] = e) : e = t[39];
            let r;
            return t[40] !== i || t[41] !== L || t[42] !== F || t[43] !== e ? (r = (0, $.jsx)(et, {
                connectorReadScope: i,
                kind: L,
                connectors: e,
                onClose: F
            }), t[40] = i, t[41] = L, t[42] = F, t[43] = e, t[44] = r) : r = t[44], r
        }
        if (C === `google_drive`) {
            let e;
            t[45] === n.knowledgeConfig ? e = t[46] : (e = n.knowledgeConfig.some(tn), t[45] = n.knowledgeConfig, t[46] = e);
            let r = e,
                i = ee ? `gdrive-dwd` : te ? `gdrive-oauth` : void 0,
                a = ee || te,
                o;
            return t[47] !== r || t[48] !== F || t[49] !== i || t[50] !== a ? (o = (0, $.jsx)(Rt, {
                isDwdEnabled: r,
                onClose: F,
                initialConnectorOption: i,
                skipConnectorSelection: a,
                triggerLocation: `admin_settings`
            }), t[47] = r, t[48] = F, t[49] = i, t[50] = a, t[51] = o) : o = t[51], o
        }
        let R;
        t[52] === C ? R = t[53] : (R = qt(C), t[52] = C, t[53] = R);
        let se = R.Controller,
            ce;
        return t[54] !== se || t[55] !== F ? (ce = (0, $.jsx)(se, {
            onClose: F
        }), t[54] = se, t[55] = F, t[56] = ce) : ce = t[56], ce
    }
}));
export {
    It as a, Ct as c, ct as d, ut as f, tt as h, un as i, dt as l, et as m, cn as n, Lt as o, $e as p, an as r, xt as s, on as t, bt as u
};
//# sourceMappingURL=56d77f0a-h4uvi08yvw48xs8d.js.map
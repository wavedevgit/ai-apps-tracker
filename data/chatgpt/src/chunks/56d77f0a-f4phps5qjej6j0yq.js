const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/c04703b1-hu5du73g6e4gemu3.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-mdvd4786a87166cc.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-bcbq46iub1p0ca1t.js", "assets/30901919-s8bko9nrkqwv6i4f.js", "assets/c470f5ab-jwd0o7jx9i9say9k.js", "assets/0e5afe53-hxm3yzzjqriayom4.js", "assets/conversation-small-ep6mlz5m.css", "assets/c2675c8c-oz03twoan08d72ud.js", "assets/82782bc9-b4xbouzwkkyrfqq2.js", "assets/8b34dbc2-lmwubajnld74ksfm.js", "assets/global-modals-dxg9ukpk.css", "assets/46464433-j3bblkphm8h3mk11.js", "assets/51994dd8-mozssaq5vtfpexwj.js", "assets/99a48954-i0bknqne6giw28e4.js", "assets/832dbd3a-hbk6u3oq5isiaqp3.js", "assets/7f8fbef9-mu32swotlt5ap29t.js", "assets/34f04bae-e0b1jtjslz3x3t39.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    A8 as r,
    Aw as i,
    Est as a,
    Knt as o,
    LU as s,
    N1 as c,
    Ow as l,
    Qy as u,
    Rz as d,
    Tst as f,
    U1 as p,
    Wnt as m,
    Zy as h,
    a2 as g,
    ax as _,
    eE as v,
    fB as y,
    ix as ee,
    j5 as b,
    o2 as te,
    oW as x,
    pB as S,
    q1 as C,
    sW as w,
    zU as T,
    zz as E
} from "./4813494d-mdvd4786a87166cc.js";
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
    Jyn as L,
    T3t as R,
    YWn as z,
    Yyn as B,
    ZWn as oe,
    eb as se,
    k3t as ce,
    ky as V
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Av as le,
    Cp as ue,
    Sp as de,
    ab as fe,
    du as pe,
    ib as me,
    jv as he,
    uu as ge,
    vy as _e,
    yy as ve
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    Cy as ye,
    Gl as be,
    Kl as xe,
    Sy as Se,
    Ty as Ce,
    Wl as we,
    Yb as Te,
    by as Ee,
    gy as De,
    ly as Oe,
    qb as ke,
    vy as Ae,
    wy as je,
    xy as Me,
    yy as Ne
} from "./c2675c8c-oz03twoan08d72ud.js";
import {
    n as Pe,
    t as Fe
} from "./62b1bc77-krwzqvuc5tlwe4wl.js";
import {
    n as Ie,
    r as Le
} from "./7517017f-m0e7hb8h6fyirvew.js";
import {
    a as Re,
    r as ze,
    t as Be
} from "./832dbd3a-hbk6u3oq5isiaqp3.js";
import {
    r as Ve,
    s as He
} from "./e1258b01-h30gw9gshi5r8pfl.js";
import {
    a as Ue,
    i as We,
    l as Ge,
    n as Ke,
    o as qe,
    r as Je,
    u as Ye
} from "./51994dd8-mozssaq5vtfpexwj.js";
var Xe, Ze, Qe, $e, et, tt = e((() => {
        Xe = N(), te(), qe(), Ze = D(), re(), Qe = e => {
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
        }, $e = g(() => ne(() => import(`./c04703b1-hu5du73g6e4gemu3.js`).then(e => e.MicrosoftAdminSyncConnectorLoader), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])), {
            loading: Ue,
            fallback: Qe
        }), et = g(() => ne(() => import(`./c04703b1-hu5du73g6e4gemu3.js`).then(e => e.MicrosoftAdminSyncSetup), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])), {
            loading: Ue,
            fallback: Qe
        })
    })),
    nt, rt = e((() => {
        o(), nt = ({
            link: e,
            location: t
        }) => {
            m.logEventWithStatsig(`Contextual Answers Help Link Clicked`, `chatgpt_contextual_answers_help_link_clicked`, {
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
    onClose: r,
    onNext: i,
    secondaryButton: a,
    footerContent: o
}) {
    let s = P(),
        c = T(),
        u = (0, H.useId)(),
        [d, f] = (0, H.useState)(``),
        [p, g] = (0, H.useState)(null),
        [_, v] = (0, H.useState)(!1),
        {
            triggerLocation: ee
        } = ot(),
        {
            isLoading: b,
            refetch: te,
            data: x
        } = A({
            queryKey: [`admin:connection_instance`, t],
            queryFn: async () => await L.admin_get_connection_instance(e, t)
        });
    (0, H.useEffect)(() => {
        x?.connection_config.knowledge_connector_type === `google_drive_dwd` && f(x.connection_config.admin_email_address ?? ``)
    }, [x]);
    let S = x?.connection_config.knowledge_connector_type === `google_drive_dwd` ? x.connection_config.service_account_credential_id : void 0,
        C = d.trim().length > 0 && (!!p || S),
        w = async () => {
            if (!(!C || !e || _)) {
                v(!0);
                try {
                    let n;
                    p && (n = await p.text()), await L.admin_connection_update_credential(e, t, {
                        admin_email: d,
                        new_service_credential_content: n,
                        credential_id: S && !n ? S : void 0
                    }), c.success(s.formatMessage({
                        id: `q/AX/d`,
                        defaultMessage: `Credentials successfully updated.`
                    })), i()
                } catch (e) {
                    let t = s.formatMessage({
                            id: `qbD4Az`,
                            defaultMessage: `Failed to update credentials.`
                        }),
                        n = Fe(e);
                    n && (t = s.formatMessage({
                        id: `pzfjhv`,
                        defaultMessage: `Failed to update credentials: {error}`
                    }, {
                        error: n.message
                    })), m.logEventWithStatsig(`Contextual Answers Admin Connection Config Change Error`, `chatgpt_contextual_answers_admin_connection_config_change_error`, {
                        connectorType: `google_drive_dwd`,
                        error: n?.error_type,
                        triggerLocation: ee
                    }), c.danger(t, {
                        toastId: `gdrive_dwd_credentials_modal`,
                        loggingTitle: `Failed to update credentials`,
                        loggingDescription: `Failed to update credentials`
                    })
                } finally {
                    te(), v(!1)
                }
            }
        };
    return (0, U.jsx)(l, {
        ...je,
        onClose: r,
        testId: `modal-gdrive-dwd-credentials`,
        children: b ? (0, U.jsx)(R, {
            lines: 4,
            className: `px-6 pt-4 pb-10`
        }) : (0, U.jsxs)(U.Fragment, {
            children: [(0, U.jsxs)(`form`, {
                onSubmit: e => {
                    e.preventDefault(), C && w()
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
                                    link: e => (0, U.jsx)(z, {
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
                        existingServiceKeyId: S,
                        serviceKeyFile: p,
                        setServiceKeyFile: g
                    }), (0, U.jsxs)(`div`, {
                        className: `mb-2 flex flex-col gap-2`,
                        children: [(0, U.jsxs)(`label`, {
                            htmlFor: u,
                            className: `flex flex-row items-center gap-2 text-base font-medium`,
                            children: [(0, U.jsx)(`span`, {
                                children: (0, U.jsx)(k, {
                                    id: `sPqjJA`,
                                    defaultMessage: `Google Workspace admin email address`
                                })
                            }), (0, U.jsx)(h, {
                                withArrow: !0,
                                side: `top`,
                                label: (0, U.jsx)(`p`, {
                                    className: `p-1 text-sm`,
                                    children: (0, U.jsx)(k, {
                                        id: `4xWSaU`,
                                        defaultMessage: `Your workspace admin’s email address is required to configure user access and select which shared drives you’d like to sync.`
                                    })
                                }),
                                children: (0, U.jsx)(y, {
                                    className: `icon text-token-text-tertiary`
                                })
                            })]
                        }), (0, U.jsx)(`input`, {
                            type: `text`,
                            value: d,
                            onChange: e => f(e.target.value),
                            placeholder: s.formatMessage({
                                id: `+zP1RE`,
                                defaultMessage: `admin@example.com`
                            }),
                            id: u,
                            className: `border-token-border-default bg-token-main-surface-primary text-token-text-primary rounded-lg border border-solid`
                        })]
                    })]
                })]
            }), (0, U.jsx)(V, {
                primaryButton: (0, U.jsx)(n, {
                    loading: _,
                    color: `primary`,
                    disabled: !C || _,
                    onClick: w,
                    children: (0, U.jsx)(k, {
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

function lt({
    existingServiceKeyId: e,
    serviceKeyFile: t,
    setServiceKeyFile: r
}) {
    let i = (0, H.useRef)(null),
        a = (0, H.useId)();
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
            children: [!e && !t && (0, U.jsx)(n, {
                color: `primary`,
                type: `button`,
                onClick: () => i.current?.click(),
                children: (0, U.jsx)(k, {
                    id: `4GjErm`,
                    defaultMessage: `Upload key`
                })
            }), (!!e && !t || !e && !!t) && (0, U.jsx)(n, {
                color: `secondary`,
                type: `button`,
                onClick: () => i.current?.click(),
                children: (0, U.jsx)(k, {
                    id: `qV3zuG`,
                    defaultMessage: `Replace key`
                })
            }), !!e && !!t && (0, U.jsx)(n, {
                color: `danger-outline`,
                type: `button`,
                onClick: () => r(null),
                children: (0, U.jsx)(k, {
                    id: `NFpNok`,
                    defaultMessage: `Clear`
                })
            })]
        }), (0, U.jsx)(`input`, {
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
var H, U, ut = e((() => {
    v(), Ce(), Pe(), Le(), rt(), B(), he(), S(), i(), u(), oe(), ce(), s(), o(), ae(), H = t(M()), j(), I(), st(), U = D()
}));

function dt({
    isOpen: e,
    onClose: t,
    connectionId: r,
    accountId: i,
    primaryButton: a,
    secondaryButton: o,
    footerContent: s,
    showSaveButton: c = !0,
    stagedSharedDriveSettings: u,
    onStagedSharedDriveSettingsChange: d
}) {
    let {
        refetch: f,
        data: p,
        error: m,
        isLoading: h
    } = A({
        queryFn: () => vt({
            accountId: i,
            connectionId: r
        }),
        queryKey: [`admin_connection_list_item_scopes`, r, `shared_drive`]
    });
    return (0, K.jsxs)(l, {
        ...je,
        isOpen: e,
        onClose: t,
        testId: `modal-gdrive-dwd-shared-drive-picker`,
        children: [(0, K.jsx)(`div`, {
            className: `flex flex-col gap-6 px-6 pt-4 pb-10`,
            children: h ? (0, K.jsx)(R, {
                lines: 4
            }) : m ? (0, K.jsxs)(`div`, {
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
                        icon: de,
                        onClick: () => f(),
                        children: (0, K.jsx)(k, {
                            id: `fFd9RR`,
                            defaultMessage: `Try again`
                        })
                    })
                })]
            }) : (0, K.jsx)(K.Fragment, {
                children: p && (0, K.jsx)(ft, {
                    accountId: i,
                    connectionId: r,
                    sharedDriveDefaultScope: p.default_selection,
                    sharedDriveScopes: p.object_selections,
                    refetch: f,
                    showSaveButton: c,
                    stagedSharedDriveSettings: u,
                    onStagedSharedDriveSettingsChange: d
                })
            })
        }), (0, K.jsx)(V, {
            primaryButton: a,
            secondaryButton: o,
            footerContent: s
        })]
    })
}

function ft({
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
        [d, f] = G.useState(() => s?.draftScopes.map(W) ?? a.map(W)),
        [p, m] = G.useState(s?.draftDefaultSelection ?? i);
    G.useEffect(() => {
        s || m(i)
    }, [i, s]), G.useEffect(() => {
        s || f(a.map(W))
    }, [a, s]), G.useEffect(() => {
        c && c({
            baseDefaultSelection: i,
            baseScopes: a.map(W),
            draftDefaultSelection: p,
            draftScopes: d.map(W)
        })
    }, [p, d, c, i, a]);
    let {
        isPending: h,
        mutate: g
    } = ie({
        mutationFn: async () => {
            let e = p;
            e !== i && await L.admin_connection_update_item_default_scope(t, r, `shared_drive`, e);
            let n = _t({
                currentScopes: a.map(W),
                draftScopes: d,
                finalDefaultSelection: e
            });
            n.excludeHandles.length > 0 && await L.admin_connection_block_items(t, r, `shared_drive`, n.excludeHandles), n.includeHandles.length > 0 && await L.admin_connection_unblock_items(t, r, `shared_drive`, n.includeHandles)
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
    }), _ = p !== i, v = !mt(d, a.map(W)), y = _ || v;
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
        }), (0, K.jsx)(ke, {
            ariaLabel: l.formatMessage({
                id: `ca.scope-selector.aria-label`,
                defaultMessage: `Select whether Shared drives are included or excluded from syncing by default.`
            }),
            onChange: e => {
                h || m(e)
            },
            value: p,
            leftItem: {
                ariaLabel: l.formatMessage(yt.includeToggleLabel),
                label: l.formatMessage(yt.includeToggleLabel),
                value: `include`
            },
            rightItem: {
                ariaLabel: l.formatMessage(yt.excludeToggleLabel),
                label: l.formatMessage(yt.excludeToggleLabel),
                value: `exclude`
            }
        }), h ? (0, K.jsx)(R, {
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
                children: d.filter(e => e.selection === `exclude`).map(e => (0, K.jsx)(we, {
                    objectHandle: e.object_handle,
                    objectType: `shared_drive`,
                    accountId: t,
                    connectionId: r,
                    scopeChangeIcon: pe,
                    scopeChangeLabel: l.formatMessage({
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
            }), (0, K.jsx)(be, {
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
                children: d.filter(e => e.selection === `include`).map(e => (0, K.jsx)(we, {
                    objectHandle: e.object_handle,
                    objectType: `shared_drive`,
                    accountId: t,
                    connectionId: r,
                    scopeChangeIcon: pe,
                    scopeChangeLabel: l.formatMessage({
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
            }), (0, K.jsx)(be, {
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
                    f(t => ht(t, e, `include`))
                },
                onSuccess: () => {},
                onError: () => {},
                disabled: h
            })]
        }), o && (0, K.jsx)(`div`, {
            className: `border-token-border-default mt-6 flex justify-end border-t pt-4`,
            children: (0, K.jsx)(n, {
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
        r = await L.admin_connection_list_item_scopes(e, t, `shared_drive`, null);
    for (n.push(r); r.page_token != null;) r = await L.admin_connection_list_item_scopes(e, t, `shared_drive`, r.page_token), n.push(r);
    return {
        object_type: `shared_drive`,
        default_selection: n[0].default_selection,
        object_selections: n.flatMap(e => e.object_selections)
    }
}
var G, K, yt, bt = e((() => {
    v(), xe(), B(), ue(), ge(), i(), ce(), Te(), s(), ae(), G = t(M()), j(), Ce(), I(), K = D(), yt = O({
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
    connectionId: r,
    accountId: i,
    isPostActivation: a,
    footerContent: o,
    primaryButton: s,
    secondaryButton: c
}) {
    let u = P(),
        f = T(),
        {
            refetch: p,
            data: m,
            error: g,
            isLoading: _
        } = A({
            queryFn: async () => await L.admin_connection_list_item_scopes(i, r, `user_drive`),
            queryKey: [`admin_connection_list_item_scopes`, r, `user_drive`]
        }),
        {
            isPending: v,
            mutate: y
        } = ie({
            mutationFn: async e => await L.admin_connection_update_item_default_scope(i, r, `user_drive`, e ? `include` : `exclude`),
            mutationKey: [`admin_connection_update_item_default_scope`, r, `user_drive`],
            onError: () => {
                f.danger(u.formatMessage({
                    id: `YnlDV7`,
                    defaultMessage: `Failed to update policy.`
                }), {
                    toastId: `gdrive_dwd_user_drives_modal`,
                    loggingTitle: `Failed to update policy`,
                    loggingDescription: `Failed to update policy`
                })
            },
            onSettled: () => {
                p()
            }
        }),
        b = m?.default_selection === `include`;
    return (0, q.jsxs)(l, {
        ...je,
        isOpen: e,
        onClose: t,
        testId: `modal-gdrive-dwd-user-drives`,
        children: [(0, q.jsx)(`div`, {
            className: `flex flex-col gap-6 px-6 pt-4 pb-10`,
            children: _ ? (0, q.jsx)(R, {
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
                    children: (0, q.jsx)(n, {
                        color: `secondary`,
                        icon: de,
                        onClick: () => p(),
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
                    children: [(0, q.jsx)(ee, {
                        checked: b,
                        disabled: v,
                        "aria-label": u.formatMessage(St.includeUserDrivesLabel),
                        onCheckedChange: () => {
                            !v && y(!b)
                        }
                    }), (0, q.jsx)(`p`, {
                        children: (0, q.jsx)(k, {
                            ...St.includeUserDrivesLabel
                        })
                    }), v && (0, q.jsx)(d, {}), (0, q.jsx)(`div`, {
                        className: `grow`
                    }), (0, q.jsx)(h, {
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
                    children: [(0, q.jsx)(w, {
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
        }), (0, q.jsx)(V, {
            footerContent: o,
            primaryButton: s,
            secondaryButton: c
        })]
    })
}
var q, St, Ct = e((() => {
    v(), B(), ue(), he(), fe(), _e(), x(), i(), _(), u(), ce(), E(), s(), ae(), M(), j(), Ce(), I(), q = D(), St = O({
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
    onActivate: r,
    onBeforeActivate: i,
    connectionId: a,
    accountId: o,
    connectionDisplayInfo: s,
    footerContent: c,
    secondaryButton: u,
    connectorType: d
}) {
    let f = P(),
        p = T(),
        {
            triggerLocation: h
        } = ot(),
        [g, _] = (0, kt.useState)(!1),
        v = (0, J.jsx)(n, {
            color: `primary`,
            loading: g,
            onClick: async () => {
                if (!g) {
                    _(!0);
                    try {
                        await i?.(), await L.admin_activate_connection_instance(o, a), m.logEventWithStatsig(`Contextual Answers Admin Connection Activated`, `chatgpt_contextual_answers_admin_connection_activated`, {
                            connectorType: d,
                            triggerLocation: h
                        }), p.success(f.formatMessage({
                            id: `y5DD0Z`,
                            defaultMessage: `Connection successfully activated.`
                        })), r?.(), t?.()
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
    return (0, J.jsxs)(l, {
        ...ye,
        testId: `modal-review-and-activate`,
        isOpen: e,
        onClose: t,
        title: F(d),
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
                connectionDisplayInfo: s
            })]
        }), (0, J.jsx)(V, {
            primaryButton: v,
            secondaryButton: u,
            footerContent: c
        })]
    })
}
var kt, J, At = e((() => {
    v(), Dt(), B(), i(), s(), o(), kt = t(M()), j(), se(), st(), Ce(), I(), J = D()
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
            t = m.logStructuredEvent(`ChatgptContextualAnswersAdminCreateConnectionStepShown`, {
                legacyStatsigEventName: e,
                connectorType: a,
                stepName: o
            });
        m.logValueEventWithStatsig({
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
            r = m.logStructuredEvent(`ChatgptContextualAnswersAdminCreateConnectionStepShown`, {
                legacyStatsigEventName: n,
                connectorType: e[t].connectorType,
                stepName: e[t].name
            });
        m.logValueEventWithStatsig({
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
    o(), Mt = t(M())
}));

function Pt({
    onClose: e,
    backButton: t
}) {
    let [n, r] = (0, X.useState)(), i = p();
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
    backButton: r
}) {
    let i = P(),
        a = T(),
        o = p(),
        s = (0, X.useId)(),
        {
            triggerLocation: c
        } = ot();
    (0, X.useEffect)(() => {
        let e = `chatgpt_contextual_answers_admin_create_connection_step`,
            t = m.logStructuredEvent(`ChatgptContextualAnswersAdminCreateConnectionStepShown`, {
                legacyStatsigEventName: e,
                connectorType: `google_drive_dwd`,
                stepName: `basic_info`,
                triggerLocation: c
            });
        m.logValueEventWithStatsig({
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
    let [u, d] = (0, X.useState)(``), f = u.length > 128, h = u.trim().length > 0 && !f, [g, _] = (0, X.useState)(!1), v = (0, X.useCallback)(() => {
        !h || !o || g || (_(!0), L.admin_create_connection_instance_via_workspace_permissions(o.id, {
            knowledge_connector_type: `google_drive_dwd`,
            connection_config_id: `--fake-local-id`
        }, u.trim()).then(e => {
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
    }, [o, u, i, h, g, t, a]);
    return (0, Z.jsxs)(l, {
        ...je,
        onClose: () => e?.(),
        testId: `modal-gdrive-dwd-basic-info`,
        children: [(0, Z.jsxs)(`form`, {
            onSubmit: e => {
                e.preventDefault(), h && v()
            },
            className: `flex flex-col px-6 pt-4 pb-10`,
            children: [(0, Z.jsxs)(`div`, {
                className: `flex flex-col gap-2`,
                children: [(0, Z.jsx)(`label`, {
                    htmlFor: s,
                    className: `text-xl font-medium`,
                    children: (0, Z.jsx)(k, {
                        id: `+wLWeZ`,
                        defaultMessage: `Enter display name`
                    })
                }), (0, Z.jsx)(`input`, {
                    type: `text`,
                    value: u,
                    onChange: e => d(e.target.value),
                    id: s,
                    className: `border-token-border-default bg-token-main-surface-primary text-token-text-primary rounded-lg border border-solid`
                }), (0, Z.jsx)(`div`, {
                    className: `text-token-text-tertiary text-sm`,
                    children: (0, Z.jsx)(k, {
                        id: `CPXVQO`,
                        defaultMessage: `This is the name your members will see in their ChatGPT connectors.`
                    })
                }), f ? (0, Z.jsx)(`p`, {
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
        }), (0, Z.jsx)(V, {
            secondaryButton: r,
            primaryButton: (0, Z.jsx)(n, {
                color: `primary`,
                disabled: !h || g,
                loading: g,
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
    onClose: r
}) {
    let [i, a] = (0, X.useState)(null), o = e.connection_config.connection_config_id, s = (0, X.useCallback)(e => {
        a(t => t ? {
            ...e,
            baseDefaultSelection: t.baseDefaultSelection,
            baseScopes: Y(t.baseScopes),
            draftScopes: Y(e.draftScopes)
        } : {
            ...e,
            baseScopes: Y(e.baseScopes),
            draftScopes: Y(e.draftScopes)
        })
    }, []), c = (0, X.useCallback)(async () => {
        if (!i) return;
        let e = i;
        try {
            e.draftDefaultSelection !== e.baseDefaultSelection && await L.admin_connection_update_item_default_scope(t, o, `shared_drive`, e.draftDefaultSelection);
            let n = _t({
                currentScopes: e.baseScopes,
                draftScopes: e.draftScopes,
                finalDefaultSelection: e.draftDefaultSelection
            });
            n.excludeHandles.length > 0 && await L.admin_connection_block_items(t, o, `shared_drive`, n.excludeHandles), n.includeHandles.length > 0 && await L.admin_connection_unblock_items(t, o, `shared_drive`, n.includeHandles), a({
                baseDefaultSelection: e.draftDefaultSelection,
                baseScopes: Y(e.draftScopes),
                draftDefaultSelection: e.draftDefaultSelection,
                draftScopes: Y(e.draftScopes)
            })
        } catch (e) {
            try {
                let e = await vt({
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
                    draftScopes: Y(t.draftScopes)
                })
            } catch {}
            throw e
        }
    }, [t, o, i]);
    return (0, Z.jsx)(jt, {
        onClose: r,
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
                goForward: r,
                goBackward: i,
                close: a,
                stepNumber: o,
                totalSteps: s
            }) => (0, Z.jsx)(xt, {
                onClose: () => a?.(),
                accountId: t,
                connectionId: e.connection_config.connection_config_id,
                primaryButton: r && (0, Z.jsx)(n, {
                    color: `primary`,
                    onClick: r,
                    children: (0, Z.jsx)(k, {
                        id: `z5fExR`,
                        defaultMessage: `Next`
                    })
                }),
                secondaryButton: i && (0, Z.jsx)(n, {
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
            }) => (0, Z.jsx)(dt, {
                onClose: () => o?.(),
                accountId: t,
                connectionId: e.connection_config.connection_config_id,
                primaryButton: r && (0, Z.jsx)(n, {
                    color: `primary`,
                    onClick: r,
                    children: (0, Z.jsx)(k, {
                        id: `z5fExR`,
                        defaultMessage: `Next`
                    })
                }),
                secondaryButton: a && (0, Z.jsx)(n, {
                    color: `secondary`,
                    onClick: a,
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
            }) => (0, Z.jsx)(Ot, {
                isOpen: !0,
                onClose: () => i?.(),
                accountId: t,
                connectorType: `google_drive_dwd`,
                connectionId: e.connection_config.connection_config_id,
                connectionDisplayInfo: e.display_info,
                onBeforeActivate: c,
                secondaryButton: r && (0, Z.jsx)(n, {
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
    v(), ut(), bt(), Ct(), Ce(), At(), Nt(), B(), i(), C(), s(), o(), X = t(M()), j(), I(), st(), Z = D()
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
        onClose: r,
        onSuccess: i
    }) {
        let a = P(),
            o = T(),
            [s, c] = (0, Wt.useState)(!1),
            u = (0, Wt.useCallback)(async () => {
                c(!0);
                let n = e.type === `github` ? {
                    connection_config_id: Gt,
                    knowledge_connector_type: e.type,
                    organization_name: null
                } : {
                    connection_config_id: Gt,
                    knowledge_connector_type: e.type
                };
                try {
                    await L.admin_create_connection_instance_via_workspace_permissions(t, n, void 0), await i?.(), r()
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
                    c(!1)
                }
            }, [t, a, r, i, o]);
        return (0, Q.jsxs)(l, {
            ...e.modal.props,
            onClose: r,
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
            }), (0, Q.jsx)(V, {
                primaryButton: (0, Q.jsx)(n, {
                    color: `primary`,
                    onClick: u,
                    loading: s,
                    children: (0, Q.jsx)(k, {
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
        let r = p();
        return r ? (0, Q.jsx)(t, {
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
var Wt, Q, Gt, Kt = e((() => {
    v(), I(), B(), i(), C(), s(), Wt = t(M()), j(), Q = D(), Gt = `--fake-local-id`
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
    Se(), Kt(), Yt = Ee.map(e => [e, Ut(Me[e])]), Xt = new Map(Yt), Ee.map(Jt)
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
    return c()?.normalizedAccountUserId
}

function tn(e) {
    return e.key === `google_drive_dwd`
}
var nn, rn, $, an, on, sn, cn, ln, un = e((() => {
    nn = N(), Re(), r(), C(), a(), Ye(), tt(), v(), Ht(), Zt(), i(), E(), rn = t(M()), j(), Oe(), Ae(), He(), Je(), $ = D(), an = {
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
                app: r,
                connectorReadScope: i,
                openToAdminSync: a,
                openToUserSync: o,
                skipParameterConstraintsPreflight: s,
                onClose: c
            } = e,
            u = a !== void 0 && a,
            m = o !== void 0 && o,
            h = s !== void 0 && s,
            g = P(),
            _;
        t[0] === r.knowledgeConfig ? _ = t[1] : (_ = r.knowledgeConfig.some(Qt), t[0] = r.knowledgeConfig, t[1] = _);
        let v = _,
            y;
        t[2] !== r.primaryConnector.id || t[3] !== v ? (y = v || Ne(r.primaryConnector.id), t[2] = r.primaryConnector.id, t[3] = v, t[4] = y) : y = t[4];
        let ee = y,
            te = ee && u,
            x = ee && !te && m,
            S = r.knowledgeConfig[0].key,
            C = an[S] || S,
            w = De(),
            T = b($t),
            E = b(en),
            D;
        t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (D = p(f())?.getWorkspaceId(), t[5] = D) : D = t[5];
        let O = D,
            A;
        t[6] !== r.primaryConnector.id || t[7] !== T ? (A = () => {
            ze(T, O ?? ``, r.primaryConnector.id, !!(O && r.primaryConnector.id))
        }, t[6] = r.primaryConnector.id, t[7] = T, t[8] = A) : A = t[8];
        let j;
        t[9] !== r.primaryConnector.id || t[10] !== E || t[11] !== T ? (j = [T, E, O, r.primaryConnector.id], t[9] = r.primaryConnector.id, t[10] = E, t[11] = T, t[12] = j) : j = t[12], (0, rn.useEffect)(A, j);
        let {
            hasParameterConstraints: M,
            isLoading: ne
        } = We(r, T, E), [re, ie] = (0, rn.useState)(!1), ae = Ve({
            app: r
        }), N;
        t[13] !== w || t[14] !== c ? (N = () => {
            w(), c()
        }, t[13] = w, t[14] = c, t[15] = N) : N = t[15];
        let F = N,
            I = ae && M && !h && !re,
            L;
        t[16] === r ? L = t[17] : (L = Ge(r), t[16] = r, t[17] = L);
        let R = L;
        if (ne) {
            let e;
            t[18] === g ? e = t[19] : (e = g.formatMessage(sn.loadingSyncSetupTitle), t[18] = g, t[19] = e);
            let n;
            t[20] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, $.jsx)(`div`, {
                className: `flex min-h-52 items-center justify-center p-8`,
                children: (0, $.jsx)(d, {})
            }), t[20] = n) : n = t[20];
            let r;
            return t[21] !== F || t[22] !== e ? (r = (0, $.jsx)(l, {
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
            t[24] === g ? e = t[25] : (e = g.formatMessage(sn.syncConstraintsPreflightTitle), t[24] = g, t[25] = e);
            let r;
            t[26] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, $.jsxs)(`div`, {
                className: `p-6`,
                children: [(0, $.jsx)(`div`, {
                    className: `text-xl font-semibold`,
                    children: (0, $.jsx)(k, {
                        ...sn.syncConstraintsPreflightTitle
                    })
                }), (0, $.jsx)(Ke, {
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
            let s;
            t[31] === a ? s = t[32] : (s = (0, $.jsxs)(`div`, {
                className: `flex justify-end gap-2 border-t p-4`,
                children: [a, o]
            }), t[31] = a, t[32] = s);
            let c;
            return t[33] !== F || t[34] !== e || t[35] !== s ? (c = (0, $.jsxs)(l, {
                testId: `modal-app-sync-constraints-preflight`,
                isOpen: !0,
                onClose: F,
                size: `custom`,
                className: `max-w-[480px]`,
                contentClassName: `max-h-[90vh] flex flex-col`,
                visuallyHiddenHeader: !0,
                title: e,
                noPadding: !0,
                children: [r, s]
            }), t[33] = F, t[34] = e, t[35] = s, t[36] = c) : c = t[36], c
        }
        if (R) {
            let e;
            t[37] !== r.primaryConnector || t[38] !== r.relatedConnectors ? (e = [r.primaryConnector, ...r.relatedConnectors], t[37] = r.primaryConnector, t[38] = r.relatedConnectors, t[39] = e) : e = t[39];
            let n;
            return t[40] !== i || t[41] !== R || t[42] !== F || t[43] !== e ? (n = (0, $.jsx)(et, {
                connectorReadScope: i,
                kind: R,
                connectors: e,
                onClose: F
            }), t[40] = i, t[41] = R, t[42] = F, t[43] = e, t[44] = n) : n = t[44], n
        }
        if (C === `google_drive`) {
            let e;
            t[45] === r.knowledgeConfig ? e = t[46] : (e = r.knowledgeConfig.some(tn), t[45] = r.knowledgeConfig, t[46] = e);
            let n = e,
                i = te ? `gdrive-dwd` : x ? `gdrive-oauth` : void 0,
                a = te || x,
                o;
            return t[47] !== n || t[48] !== F || t[49] !== i || t[50] !== a ? (o = (0, $.jsx)(Rt, {
                isDwdEnabled: n,
                onClose: F,
                initialConnectorOption: i,
                skipConnectorSelection: a,
                triggerLocation: `admin_settings`
            }), t[47] = n, t[48] = F, t[49] = i, t[50] = a, t[51] = o) : o = t[51], o
        }
        let z;
        t[52] === C ? z = t[53] : (z = qt(C), t[52] = C, t[53] = z);
        let B = z.Controller,
            oe;
        return t[54] !== B || t[55] !== F ? (oe = (0, $.jsx)(B, {
            onClose: F
        }), t[54] = B, t[55] = F, t[56] = oe) : oe = t[56], oe
    }
}));
export {
    It as a, Ct as c, ct as d, ut as f, tt as h, un as i, dt as l, et as m, cn as n, Lt as o, $e as p, an as r, xt as s, on as t, bt as u
};
//# sourceMappingURL=56d77f0a-f4phps5qjej6j0yq.js.map
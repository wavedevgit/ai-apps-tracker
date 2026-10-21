const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/c04703b1-o74tcspfyrwuv3ol.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-lxa3wniynbx9ka2a.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-kzsalymynzuddxee.js", "assets/30901919-i8ip8r0znvgcym38.js", "assets/c470f5ab-poh7ivjvb3j2jlfz.js", "assets/0e5afe53-dz59mkfveu52getp.js", "assets/conversation-small-bwtqiuwj.css", "assets/c2675c8c-ossqum2x3eut0sh8.js", "assets/82782bc9-idqd90kxtp4zogpp.js", "assets/8b34dbc2-ba6wt3zxvh7jce7p.js", "assets/global-modals-lv5n3ujm.css", "assets/46464433-eonduaqr48lmk2kb.js", "assets/51994dd8-co85ycdizdiijjtf.js", "assets/99a48954-mgardf9h5h58bj78.js", "assets/832dbd3a-idgsxq54ljs11fnz.js", "assets/7f8fbef9-gn4zlvdtqcu7vjdg.js", "assets/34f04bae-hyywezl4jr9ltrwl.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    BU as n,
    Cw as r,
    HU as i,
    JT as a,
    Mz as o,
    P1 as s,
    P5 as c,
    R1 as l,
    Snt as u,
    Tw as d,
    X0 as f,
    Xy as p,
    YT as m,
    Z0 as h,
    Zy as g,
    aB as _,
    g8 as v,
    ist as y,
    ix as b,
    jz as ee,
    lW as te,
    oB as ne,
    rst as x,
    rx as S,
    uW as C,
    w1 as w,
    wnt as T
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    Bn as E,
    Ln as D,
    Nn as O,
    O as k,
    Rn as A,
    Vn as j,
    cn as re,
    ln as ie,
    p as ae,
    s as oe,
    wn as M,
    zn as N
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $y as P,
    A3t as se,
    Ay as F,
    E3t as I,
    eb as L,
    fyn as R,
    ky as z,
    pyn as B,
    rWn as ce,
    tWn as le
} from "./conversation-small-kzsalymynzuddxee.js";
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
} from "./30901919-i8ip8r0znvgcym38.js";
import {
    Fb as be,
    Gl as xe,
    Lb as Se,
    Qv as Ce,
    Ul as we,
    Wl as Te,
    ay as Ee,
    cy as De,
    dy as Oe,
    fy as ke,
    ly as Ae,
    my as je,
    py as Me,
    sy as Ne,
    uy as Pe
} from "./c2675c8c-ossqum2x3eut0sh8.js";
import {
    n as Fe,
    t as Ie
} from "./62b1bc77-em0zjobdt4ojrgvj.js";
import {
    n as Le,
    r as Re
} from "./7517017f-m0e7hb8h6fyirvew.js";
import {
    a as ze,
    r as Be,
    t as Ve
} from "./832dbd3a-idgsxq54ljs11fnz.js";
import {
    r as He,
    s as Ue
} from "./e1258b01-fzbxtk03z0u6i2b6.js";
import {
    a as We,
    i as Ge,
    l as Ke,
    n as qe,
    o as Je,
    r as Ye,
    u as Xe
} from "./51994dd8-co85ycdizdiijjtf.js";
var Ze, Qe, $e, et, tt, nt = e((() => {
        Ze = M(), h(), Je(), Qe = E(), ie(), $e = e => {
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
        }, et = f(() => re(() => import(`./c04703b1-o74tcspfyrwuv3ol.js`).then(e => e.MicrosoftAdminSyncConnectorLoader), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])), {
            loading: We,
            fallback: $e
        }), tt = f(() => re(() => import(`./c04703b1-o74tcspfyrwuv3ol.js`).then(e => e.MicrosoftAdminSyncSetup), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])), {
            loading: We,
            fallback: $e
        })
    })),
    rt, it = e((() => {
        T(), rt = ({
            link: e,
            location: t
        }) => {
            u.logEventWithStatsig(`Contextual Answers Help Link Clicked`, `chatgpt_contextual_answers_help_link_clicked`, {
                link: e,
                location: t
            })
        }
    })),
    at, ot, st, ct = e((() => {
        at = t(j()), ot = (0, at.createContext)({
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
    onClose: n,
    onNext: o,
    secondaryButton: s,
    footerContent: c
}) {
    let l = N(),
        d = i(),
        f = (0, V.useId)(),
        [m, h] = (0, V.useState)(``),
        [g, v] = (0, V.useState)(null),
        [y, b] = (0, V.useState)(!1),
        {
            triggerLocation: ee
        } = st(),
        {
            isLoading: te,
            refetch: ne,
            data: x
        } = k({
            queryKey: [`admin:connection_instance`, t],
            queryFn: async () => await R.admin_get_connection_instance(e, t)
        });
    (0, V.useEffect)(() => {
        x?.connection_config.knowledge_connector_type === `google_drive_dwd` && h(x.connection_config.admin_email_address ?? ``)
    }, [x]);
    let S = x?.connection_config.knowledge_connector_type === `google_drive_dwd` ? x.connection_config.service_account_credential_id : void 0,
        C = m.trim().length > 0 && (!!g || S),
        w = async () => {
            if (!(!C || !e || y)) {
                b(!0);
                try {
                    let n;
                    g && (n = await g.text()), await R.admin_connection_update_credential(e, t, {
                        admin_email: m,
                        new_service_credential_content: n,
                        credential_id: S && !n ? S : void 0
                    }), d.success(l.formatMessage({
                        id: `q/AX/d`,
                        defaultMessage: `Credentials successfully updated.`
                    })), o()
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
                    })), u.logEventWithStatsig(`Contextual Answers Admin Connection Config Change Error`, `chatgpt_contextual_answers_admin_connection_config_change_error`, {
                        connectorType: `google_drive_dwd`,
                        error: n?.error_type,
                        triggerLocation: ee
                    }), d.danger(t, {
                        toastId: `gdrive_dwd_credentials_modal`,
                        loggingTitle: `Failed to update credentials`,
                        loggingDescription: `Failed to update credentials`
                    })
                } finally {
                    ne(), b(!1)
                }
            }
        };
    return (0, H.jsx)(r, {
        ...Me,
        onClose: n,
        testId: `modal-gdrive-dwd-credentials`,
        children: te ? (0, H.jsx)(I, {
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
                            children: (0, H.jsx)(O, {
                                id: `qq+Txa`,
                                defaultMessage: `Setup a new connection`
                            })
                        }), (0, H.jsx)(`div`, {
                            className: `text-token-text-secondary mt-2`,
                            children: (0, H.jsx)(O, {
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
                        serviceKeyFile: g,
                        setServiceKeyFile: v
                    }), (0, H.jsxs)(`div`, {
                        className: `mb-2 flex flex-col gap-2`,
                        children: [(0, H.jsxs)(`label`, {
                            htmlFor: f,
                            className: `flex flex-row items-center gap-2 text-base font-medium`,
                            children: [(0, H.jsx)(`span`, {
                                children: (0, H.jsx)(O, {
                                    id: `sPqjJA`,
                                    defaultMessage: `Google Workspace admin email address`
                                })
                            }), (0, H.jsx)(p, {
                                withArrow: !0,
                                side: `top`,
                                label: (0, H.jsx)(`p`, {
                                    className: `p-1 text-sm`,
                                    children: (0, H.jsx)(O, {
                                        id: `4xWSaU`,
                                        defaultMessage: `Your workspace admin’s email address is required to configure user access and select which shared drives you’d like to sync.`
                                    })
                                }),
                                children: (0, H.jsx)(_, {
                                    className: `icon text-token-text-tertiary`
                                })
                            })]
                        }), (0, H.jsx)(`input`, {
                            type: `text`,
                            value: m,
                            onChange: e => h(e.target.value),
                            placeholder: l.formatMessage({
                                id: `+zP1RE`,
                                defaultMessage: `admin@example.com`
                            }),
                            id: f,
                            className: `border-token-border-default bg-token-main-surface-primary text-token-text-primary rounded-lg border border-solid`
                        })]
                    })]
                })]
            }), (0, H.jsx)(z, {
                primaryButton: (0, H.jsx)(a, {
                    loading: y,
                    color: `primary`,
                    disabled: !C || y,
                    onClick: w,
                    children: (0, H.jsx)(O, {
                        id: `+itf/D`,
                        defaultMessage: `Save`
                    })
                }),
                secondaryButton: s,
                footerContent: c
            })]
        })
    })
}

function ut({
    existingServiceKeyId: e,
    serviceKeyFile: t,
    setServiceKeyFile: n
}) {
    let r = (0, V.useRef)(null),
        i = (0, V.useId)();
    return (0, H.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [(0, H.jsx)(`p`, {
            className: `text-base font-medium`,
            children: (0, H.jsx)(O, {
                id: `gI0O53`,
                defaultMessage: `Service account key`
            })
        }), !!e && !t && (0, H.jsxs)(`div`, {
            className: `flex flex-row items-center gap-2`,
            children: [(0, H.jsx)(ue, {
                className: `icon-sm`
            }), (0, H.jsx)(O, {
                id: `B+/4/L`,
                defaultMessage: `Service account key already exists.`
            })]
        }), !!t && (0, H.jsx)(`p`, {
            className: `text-token-text-secondary`,
            children: t.name
        }), (0, H.jsxs)(`div`, {
            className: `flex flex-row gap-2`,
            children: [!e && !t && (0, H.jsx)(a, {
                color: `primary`,
                type: `button`,
                onClick: () => r.current?.click(),
                children: (0, H.jsx)(O, {
                    id: `4GjErm`,
                    defaultMessage: `Upload key`
                })
            }), (!!e && !t || !e && !!t) && (0, H.jsx)(a, {
                color: `secondary`,
                type: `button`,
                onClick: () => r.current?.click(),
                children: (0, H.jsx)(O, {
                    id: `qV3zuG`,
                    defaultMessage: `Replace key`
                })
            }), !!e && !!t && (0, H.jsx)(a, {
                color: `danger-outline`,
                type: `button`,
                onClick: () => n(null),
                children: (0, H.jsx)(O, {
                    id: `NFpNok`,
                    defaultMessage: `Clear`
                })
            })]
        }), (0, H.jsx)(`input`, {
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
var V, H, dt = e((() => {
    m(), je(), Fe(), Re(), it(), B(), de(), ne(), d(), g(), ce(), se(), n(), T(), oe(), V = t(j()), A(), F(), ct(), H = E()
}));

function ft({
    isOpen: e,
    onClose: t,
    connectionId: n,
    accountId: i,
    primaryButton: o,
    secondaryButton: s,
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
    } = k({
        queryFn: () => yt({
            accountId: i,
            connectionId: n
        }),
        queryKey: [`admin_connection_list_item_scopes`, n, `shared_drive`]
    });
    return (0, G.jsxs)(r, {
        ...Me,
        isOpen: e,
        onClose: t,
        testId: `modal-gdrive-dwd-shared-drive-picker`,
        children: [(0, G.jsx)(`div`, {
            className: `flex flex-col gap-6 px-6 pt-4 pb-10`,
            children: h ? (0, G.jsx)(I, {
                lines: 4
            }) : m ? (0, G.jsxs)(`div`, {
                className: `flex flex-col items-center justify-center gap-2`,
                children: [(0, G.jsx)(`div`, {
                    className: `text-token-text-error`,
                    children: (0, G.jsx)(O, {
                        id: `3BZzpX`,
                        defaultMessage: `Something went wrong`
                    })
                }), (0, G.jsx)(`div`, {
                    children: (0, G.jsx)(a, {
                        color: `secondary`,
                        icon: ve,
                        onClick: () => f(),
                        children: (0, G.jsx)(O, {
                            id: `fFd9RR`,
                            defaultMessage: `Try again`
                        })
                    })
                })]
            }) : (0, G.jsx)(G.Fragment, {
                children: p && (0, G.jsx)(pt, {
                    accountId: i,
                    connectionId: n,
                    sharedDriveDefaultScope: p.default_selection,
                    sharedDriveScopes: p.object_selections,
                    refetch: f,
                    showSaveButton: l,
                    stagedSharedDriveSettings: u,
                    onStagedSharedDriveSettingsChange: d
                })
            })
        }), (0, G.jsx)(z, {
            primaryButton: o,
            secondaryButton: s,
            footerContent: c
        })]
    })
}

function pt({
    refetch: e,
    accountId: t,
    connectionId: n,
    sharedDriveDefaultScope: r,
    sharedDriveScopes: o,
    showSaveButton: s,
    stagedSharedDriveSettings: c,
    onStagedSharedDriveSettingsChange: l
}) {
    let u = N(),
        d = i(),
        [f, p] = W.useState(() => c?.draftScopes.map(U) ?? o.map(U)),
        [m, h] = W.useState(c?.draftDefaultSelection ?? r);
    W.useEffect(() => {
        c || h(r)
    }, [r, c]), W.useEffect(() => {
        c || p(o.map(U))
    }, [o, c]), W.useEffect(() => {
        l && l({
            baseDefaultSelection: r,
            baseScopes: o.map(U),
            draftDefaultSelection: m,
            draftScopes: f.map(U)
        })
    }, [m, f, l, r, o]);
    let {
        isPending: g,
        mutate: _
    } = ae({
        mutationFn: async () => {
            let e = m;
            e !== r && await R.admin_connection_update_item_default_scope(t, n, `shared_drive`, e);
            let i = vt({
                currentScopes: o.map(U),
                draftScopes: f,
                finalDefaultSelection: e
            });
            i.excludeHandles.length > 0 && await R.admin_connection_block_items(t, n, `shared_drive`, i.excludeHandles), i.includeHandles.length > 0 && await R.admin_connection_unblock_items(t, n, `shared_drive`, i.includeHandles)
        },
        mutationKey: [`admin_connection_save_shared_drive_scope_settings`, n],
        onError: () => {
            d.danger(u.formatMessage({
                id: `n1puJB`,
                defaultMessage: `Failed to save Shared Drive settings.`
            }), {
                toastId: `gdrive_dwd_shared_drive_picker_modal`,
                loggingTitle: `Failed to save Shared Drive settings`,
                loggingDescription: `Failed to save Shared Drive settings`
            })
        },
        onSuccess: () => {
            d.success(u.formatMessage({
                id: `b/Yc2c`,
                defaultMessage: `Shared Drive settings saved.`
            }))
        },
        onSettled: () => {
            e()
        }
    }), v = m !== r, y = !ht(f, o.map(U)), b = v || y;
    return (0, G.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [(0, G.jsx)(`div`, {
            className: `text-xl font-medium`,
            children: (0, G.jsx)(O, {
                id: `CIWfUm`,
                defaultMessage: `How do you want to handle Shared Drives?`
            })
        }), (0, G.jsx)(`div`, {
            className: `text-token-text-secondary text-sm`,
            children: (0, G.jsx)(O, {
                id: `BXG6kp`,
                defaultMessage: `Add any Shared Drives you’d like to exclude or include by default.`
            })
        }), (0, G.jsx)(be, {
            ariaLabel: u.formatMessage({
                id: `ca.scope-selector.aria-label`,
                defaultMessage: `Select whether Shared drives are included or excluded from syncing by default.`
            }),
            onChange: e => {
                g || h(e)
            },
            value: m,
            leftItem: {
                ariaLabel: u.formatMessage(bt.includeToggleLabel),
                label: u.formatMessage(bt.includeToggleLabel),
                value: `include`
            },
            rightItem: {
                ariaLabel: u.formatMessage(bt.excludeToggleLabel),
                label: u.formatMessage(bt.excludeToggleLabel),
                value: `exclude`
            }
        }), g ? (0, G.jsx)(I, {
            lines: 3
        }) : m === `include` ? (0, G.jsxs)(G.Fragment, {
            children: [(0, G.jsx)(`p`, {
                className: `text-token-text-secondary text-sm`,
                children: (0, G.jsx)(O, {
                    id: `dmDuO6`,
                    defaultMessage: `All Shared drives will be synced except for ones you choose to exclude.`
                })
            }), (0, G.jsx)(`p`, {
                className: `text-token-text-secondary font-medium`,
                children: (0, G.jsx)(O, {
                    id: `buyi/M`,
                    defaultMessage: `Excluded Shared drives`
                })
            }), (0, G.jsx)(`ul`, {
                children: f.filter(e => e.selection === `exclude`).map(e => (0, G.jsx)(we, {
                    objectHandle: e.object_handle,
                    objectType: `shared_drive`,
                    accountId: t,
                    connectionId: n,
                    scopeChangeIcon: ge,
                    scopeChangeLabel: u.formatMessage({
                        id: `NLi7nF`,
                        defaultMessage: `Remove exclusion`
                    }),
                    scopeChangeTarget: `include`,
                    onScopeChangeRequested: ({
                        objectHandle: e
                    }) => {
                        p(t => _t(t, e))
                    },
                    onError: () => {},
                    onScopeUpdated: () => {},
                    disabled: g
                }, e.object_handle))
            }), (0, G.jsx)(Te, {
                objectType: `shared_drive`,
                targetScopeSelection: `exclude`,
                accountId: t,
                connectionId: n,
                buttonLabel: u.formatMessage({
                    id: `ThGxVh`,
                    defaultMessage: `Exclude`
                }),
                onSubmitDraft: ({
                    objectHandle: e
                }) => {
                    p(t => gt(t, e, `exclude`))
                },
                onSuccess: () => {},
                onError: () => {},
                disabled: g
            })]
        }) : (0, G.jsxs)(G.Fragment, {
            children: [(0, G.jsx)(`p`, {
                className: `text-token-text-secondary text-sm`,
                children: (0, G.jsx)(O, {
                    id: `Pa+iyD`,
                    defaultMessage: `Only the Shared drives you select will be synced.`
                })
            }), (0, G.jsx)(`p`, {
                className: `text-token-text-secondary font-medium`,
                children: (0, G.jsx)(O, {
                    id: `e4EV27`,
                    defaultMessage: `Included Shared drives`
                })
            }), (0, G.jsx)(`ul`, {
                children: f.filter(e => e.selection === `include`).map(e => (0, G.jsx)(we, {
                    objectHandle: e.object_handle,
                    objectType: `shared_drive`,
                    accountId: t,
                    connectionId: n,
                    scopeChangeIcon: ge,
                    scopeChangeLabel: u.formatMessage({
                        id: `/oSk2L`,
                        defaultMessage: `Remove inclusion`
                    }),
                    scopeChangeTarget: `exclude`,
                    onScopeChangeRequested: ({
                        objectHandle: e
                    }) => {
                        p(t => _t(t, e))
                    },
                    onError: () => {},
                    onScopeUpdated: () => {},
                    disabled: g
                }, e.object_handle))
            }), (0, G.jsx)(Te, {
                objectType: `shared_drive`,
                targetScopeSelection: `include`,
                accountId: t,
                connectionId: n,
                buttonLabel: u.formatMessage({
                    id: `At82Iq`,
                    defaultMessage: `Include`
                }),
                onSubmitDraft: ({
                    objectHandle: e
                }) => {
                    p(t => gt(t, e, `include`))
                },
                onSuccess: () => {},
                onError: () => {},
                disabled: g
            })]
        }), s && (0, G.jsx)(`div`, {
            className: `border-token-border-default mt-6 flex justify-end border-t pt-4`,
            children: (0, G.jsx)(a, {
                color: `primary`,
                disabled: g || !b,
                onClick: () => {
                    g || !b || _()
                },
                children: (0, G.jsx)(O, {
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
    m(), xe(), B(), fe(), me(), d(), se(), Se(), n(), oe(), W = t(j()), A(), je(), F(), G = E(), bt = D({
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
    connectionId: n,
    accountId: o,
    isPostActivation: s,
    footerContent: c,
    primaryButton: l,
    secondaryButton: u
}) {
    let d = N(),
        f = i(),
        {
            refetch: m,
            data: h,
            error: g,
            isLoading: _
        } = k({
            queryFn: async () => await R.admin_connection_list_item_scopes(o, n, `user_drive`),
            queryKey: [`admin_connection_list_item_scopes`, n, `user_drive`]
        }),
        {
            isPending: v,
            mutate: y
        } = ae({
            mutationFn: async e => await R.admin_connection_update_item_default_scope(o, n, `user_drive`, e ? `include` : `exclude`),
            mutationKey: [`admin_connection_update_item_default_scope`, n, `user_drive`],
            onError: () => {
                f.danger(d.formatMessage({
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
    return (0, K.jsxs)(r, {
        ...Me,
        isOpen: e,
        onClose: t,
        testId: `modal-gdrive-dwd-user-drives`,
        children: [(0, K.jsx)(`div`, {
            className: `flex flex-col gap-6 px-6 pt-4 pb-10`,
            children: _ ? (0, K.jsx)(I, {
                lines: 4
            }) : g ? (0, K.jsxs)(`div`, {
                className: `flex flex-col items-center justify-center gap-2`,
                children: [(0, K.jsx)(`div`, {
                    className: `text-token-text-error`,
                    children: (0, K.jsx)(O, {
                        id: `3BZzpX`,
                        defaultMessage: `Something went wrong`
                    })
                }), (0, K.jsx)(`div`, {
                    children: (0, K.jsx)(a, {
                        color: `secondary`,
                        icon: ve,
                        onClick: () => m(),
                        children: (0, K.jsx)(O, {
                            id: `fFd9RR`,
                            defaultMessage: `Try again`
                        })
                    })
                })]
            }) : s ? (0, K.jsx)(`div`, {
                className: `group border-token-border-medium flex w-full flex-row items-center gap-4 rounded-xl border px-8 py-4`,
                children: b ? (0, K.jsxs)(K.Fragment, {
                    children: [(0, K.jsx)(ue, {
                        className: `icon-lg`
                    }), (0, K.jsx)(`p`, {
                        className: `grow`,
                        children: (0, K.jsx)(O, {
                            id: `rWqZ31`,
                            defaultMessage: `User owned files in My Drives are being synced.`
                        })
                    })]
                }) : (0, K.jsxs)(K.Fragment, {
                    children: [(0, K.jsx)(he, {
                        className: `icon-lg`
                    }), (0, K.jsx)(`p`, {
                        className: `grow`,
                        children: (0, K.jsx)(O, {
                            id: `/dUChW`,
                            defaultMessage: `User owned files in My Drives are not being synced.`
                        })
                    })]
                })
            }) : (0, K.jsxs)(`div`, {
                className: `flex flex-col gap-4`,
                children: [(0, K.jsx)(`div`, {
                    className: `text-xl font-medium`,
                    children: (0, K.jsx)(O, {
                        id: `K4ZFoX`,
                        defaultMessage: `How do you want to handle My Drives?`
                    })
                }), (0, K.jsx)(`div`, {
                    className: `text-token-text-secondary text-sm`,
                    children: (0, K.jsx)(O, {
                        id: `kAW/VW`,
                        defaultMessage: `Choose whether you want to sync the My Drive folder for your users.`
                    })
                }), (0, K.jsxs)(`div`, {
                    className: `group border-token-border-medium flex w-full flex-row items-center gap-4 rounded-xl border px-8 py-4`,
                    children: [(0, K.jsx)(S, {
                        checked: b,
                        disabled: v,
                        "aria-label": d.formatMessage(Ct.includeUserDrivesLabel),
                        onCheckedChange: () => {
                            !v && y(!b)
                        }
                    }), (0, K.jsx)(`p`, {
                        children: (0, K.jsx)(O, {
                            ...Ct.includeUserDrivesLabel
                        })
                    }), v && (0, K.jsx)(ee, {}), (0, K.jsx)(`div`, {
                        className: `grow`
                    }), (0, K.jsx)(p, {
                        label: (0, K.jsx)(`p`, {
                            children: (0, K.jsx)(O, {
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
                    children: [(0, K.jsx)(C, {
                        className: `icon-lg`
                    }), (0, K.jsx)(`span`, {
                        className: `text-token-text-secondary text-sm`,
                        children: (0, K.jsx)(O, {
                            id: `4vN9WK`,
                            defaultMessage: `You will not be able to change whether user My Drives are included once the connection starts syncing data.`
                        })
                    })]
                })]
            })
        }), (0, K.jsx)(z, {
            footerContent: c,
            primaryButton: l,
            secondaryButton: u
        })]
    })
}
var K, Ct, wt = e((() => {
    m(), B(), fe(), de(), _e(), pe(), te(), d(), b(), g(), se(), o(), n(), oe(), j(), A(), je(), F(), K = E(), Ct = D({
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
    Et = M(), Dt = E()
}));

function kt({
    isOpen: e,
    onClose: t,
    onActivate: n,
    onBeforeActivate: o,
    connectionId: s,
    accountId: c,
    connectionDisplayInfo: l,
    footerContent: d,
    secondaryButton: f,
    connectorType: p
}) {
    let m = N(),
        h = i(),
        {
            triggerLocation: g
        } = st(),
        [_, v] = (0, At.useState)(!1),
        y = (0, q.jsx)(a, {
            color: `primary`,
            loading: _,
            onClick: async () => {
                if (!_) {
                    v(!0);
                    try {
                        await o?.(), await R.admin_activate_connection_instance(c, s), u.logEventWithStatsig(`Contextual Answers Admin Connection Activated`, `chatgpt_contextual_answers_admin_connection_activated`, {
                            connectorType: p,
                            triggerLocation: g
                        }), h.success(m.formatMessage({
                            id: `y5DD0Z`,
                            defaultMessage: `Connection successfully activated.`
                        })), n?.(), t?.()
                    } catch {
                        h.danger(m.formatMessage({
                            id: `aqpeYE`,
                            defaultMessage: `Something went wrong. Please try again.`
                        }), {
                            toastId: `review_and_activate_modal`,
                            loggingTitle: `Failed to activate connection`,
                            loggingDescription: `Failed to activate connection`
                        })
                    } finally {
                        v(!1)
                    }
                }
            },
            children: (0, q.jsx)(O, {
                id: `C2dZRO`,
                defaultMessage: `Done`
            })
        });
    return (0, q.jsxs)(r, {
        ...ke,
        testId: `modal-review-and-activate`,
        isOpen: e,
        onClose: t,
        title: P(p),
        children: [(0, q.jsxs)(`div`, {
            className: `flex flex-col gap-3 px-6 pt-4 pb-10`,
            children: [(0, q.jsx)(`div`, {
                className: `text-xl font-medium`,
                children: (0, q.jsx)(O, {
                    id: `38WXzu`,
                    defaultMessage: `Review`
                })
            }), (0, q.jsx)(`p`, {
                className: `text-token-text-secondary text-sm`,
                children: (0, q.jsx)(O, {
                    id: `yQhjtE`,
                    defaultMessage: `Confirm everything looks good to you, then click the button to activate the connection and start syncing. `
                })
            }), (0, q.jsx)(Tt, {
                connectionDisplayInfo: l
            })]
        }), (0, q.jsx)(z, {
            primaryButton: y,
            secondaryButton: f,
            footerContent: d
        })]
    })
}
var At, q, jt = e((() => {
    m(), Ot(), B(), d(), n(), T(), At = t(j()), A(), L(), ct(), je(), F(), q = E()
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
            t = u.logStructuredEvent(`ChatgptContextualAnswersAdminCreateConnectionStepShown`, {
                legacyStatsigEventName: e,
                connectorType: a,
                stepName: o
            });
        u.logValueEventWithStatsig({
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
            r = u.logStructuredEvent(`ChatgptContextualAnswersAdminCreateConnectionStepShown`, {
                legacyStatsigEventName: n,
                connectorType: e[t].connectorType,
                stepName: e[t].name
            });
        u.logValueEventWithStatsig({
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
    T(), Nt = t(j())
}));

function Ft({
    onClose: e,
    backButton: t
}) {
    let [n, r] = (0, Y.useState)(), i = s();
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
    backButton: n
}) {
    let o = N(),
        c = i(),
        l = s(),
        d = (0, Y.useId)(),
        {
            triggerLocation: f
        } = st();
    (0, Y.useEffect)(() => {
        let e = `chatgpt_contextual_answers_admin_create_connection_step`,
            t = u.logStructuredEvent(`ChatgptContextualAnswersAdminCreateConnectionStepShown`, {
                legacyStatsigEventName: e,
                connectorType: `google_drive_dwd`,
                stepName: `basic_info`,
                triggerLocation: f
            });
        u.logValueEventWithStatsig({
            segmentEventName: `Contextual Answers Admin Create Connection Step`,
            statsigEventName: e,
            data: {
                connectorType: `google_drive_dwd`,
                stepName: `basic_info`,
                triggerLocation: f
            },
            eventId: t
        })
    }, [f]);
    let [p, m] = (0, Y.useState)(``), h = p.length > 128, g = p.trim().length > 0 && !h, [_, v] = (0, Y.useState)(!1), y = (0, Y.useCallback)(() => {
        !g || !l || _ || (v(!0), R.admin_create_connection_instance_via_workspace_permissions(l.id, {
            knowledge_connector_type: `google_drive_dwd`,
            connection_config_id: `--fake-local-id`
        }, p.trim()).then(e => {
            t(e)
        }).catch(() => {
            c.danger(o.formatMessage({
                id: `aqpeYE`,
                defaultMessage: `Something went wrong. Please try again.`
            }), {
                toastId: `gdrive_dwd_setup_flow`,
                loggingTitle: `Failed to create connection`,
                loggingDescription: `Failed to create connection`
            })
        }).finally(() => {
            v(!1)
        }))
    }, [l, p, o, g, _, t, c]);
    return (0, X.jsxs)(r, {
        ...Me,
        onClose: () => e?.(),
        testId: `modal-gdrive-dwd-basic-info`,
        children: [(0, X.jsxs)(`form`, {
            onSubmit: e => {
                e.preventDefault(), g && y()
            },
            className: `flex flex-col px-6 pt-4 pb-10`,
            children: [(0, X.jsxs)(`div`, {
                className: `flex flex-col gap-2`,
                children: [(0, X.jsx)(`label`, {
                    htmlFor: d,
                    className: `text-xl font-medium`,
                    children: (0, X.jsx)(O, {
                        id: `+wLWeZ`,
                        defaultMessage: `Enter display name`
                    })
                }), (0, X.jsx)(`input`, {
                    type: `text`,
                    value: p,
                    onChange: e => m(e.target.value),
                    id: d,
                    className: `border-token-border-default bg-token-main-surface-primary text-token-text-primary rounded-lg border border-solid`
                }), (0, X.jsx)(`div`, {
                    className: `text-token-text-tertiary text-sm`,
                    children: (0, X.jsx)(O, {
                        id: `CPXVQO`,
                        defaultMessage: `This is the name your members will see in their ChatGPT connectors.`
                    })
                }), h ? (0, X.jsx)(`p`, {
                    className: `text-red-500`,
                    children: (0, X.jsx)(O, {
                        id: `vT7EGU`,
                        defaultMessage: `Name is too long.`
                    })
                }) : null]
            }), (0, X.jsx)(`button`, {
                type: `submit`,
                className: `display-none`
            })]
        }), (0, X.jsx)(z, {
            secondaryButton: n,
            primaryButton: (0, X.jsx)(a, {
                color: `primary`,
                disabled: !g || _,
                loading: _,
                onClick: y,
                children: (0, X.jsx)(O, {
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
    onClose: n
}) {
    let [r, i] = (0, Y.useState)(null), o = e.connection_config.connection_config_id, s = (0, Y.useCallback)(e => {
        i(t => t ? {
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
        if (!r) return;
        let e = r;
        try {
            e.draftDefaultSelection !== e.baseDefaultSelection && await R.admin_connection_update_item_default_scope(t, o, `shared_drive`, e.draftDefaultSelection);
            let n = vt({
                currentScopes: e.baseScopes,
                draftScopes: e.draftScopes,
                finalDefaultSelection: e.draftDefaultSelection
            });
            n.excludeHandles.length > 0 && await R.admin_connection_block_items(t, o, `shared_drive`, n.excludeHandles), n.includeHandles.length > 0 && await R.admin_connection_unblock_items(t, o, `shared_drive`, n.includeHandles), i({
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
                    draftScopes: J(t.draftScopes)
                })
            } catch {}
            throw e
        }
    }, [t, o, r]);
    return (0, X.jsx)(Mt, {
        onClose: n,
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
                    children: (0, X.jsx)(O, {
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
                stepNumber: o,
                totalSteps: s
            }) => (0, X.jsx)(St, {
                onClose: () => i?.(),
                accountId: t,
                connectionId: e.connection_config.connection_config_id,
                primaryButton: n && (0, X.jsx)(a, {
                    color: `primary`,
                    onClick: n,
                    children: (0, X.jsx)(O, {
                        id: `z5fExR`,
                        defaultMessage: `Next`
                    })
                }),
                secondaryButton: r && (0, X.jsx)(a, {
                    color: `secondary`,
                    onClick: r,
                    children: (0, X.jsx)(O, {
                        id: `xJnONr`,
                        defaultMessage: `Back`
                    })
                }),
                footerContent: (0, X.jsx)(`span`, {
                    className: `text-token-text-secondary flex-1 align-middle font-medium`,
                    children: (0, X.jsx)(O, {
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
                goForward: n,
                goBackward: i,
                close: o,
                stepNumber: c,
                totalSteps: l
            }) => (0, X.jsx)(ft, {
                onClose: () => o?.(),
                accountId: t,
                connectionId: e.connection_config.connection_config_id,
                primaryButton: n && (0, X.jsx)(a, {
                    color: `primary`,
                    onClick: n,
                    children: (0, X.jsx)(O, {
                        id: `z5fExR`,
                        defaultMessage: `Next`
                    })
                }),
                secondaryButton: i && (0, X.jsx)(a, {
                    color: `secondary`,
                    onClick: i,
                    children: (0, X.jsx)(O, {
                        id: `xJnONr`,
                        defaultMessage: `Back`
                    })
                }),
                footerContent: (0, X.jsx)(`span`, {
                    className: `text-token-text-secondary flex-1 align-middle font-medium`,
                    children: (0, X.jsx)(O, {
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
                stagedSharedDriveSettings: r ?? void 0,
                onStagedSharedDriveSettingsChange: s
            })
        }, {
            connectorType: `google_drive_dwd`,
            name: `review_and_activate`,
            fn: ({
                goBackward: n,
                close: r,
                stepNumber: i,
                totalSteps: o
            }) => (0, X.jsx)(kt, {
                isOpen: !0,
                onClose: () => r?.(),
                accountId: t,
                connectorType: `google_drive_dwd`,
                connectionId: e.connection_config.connection_config_id,
                connectionDisplayInfo: e.display_info,
                onBeforeActivate: c,
                secondaryButton: n && (0, X.jsx)(a, {
                    color: `secondary`,
                    onClick: n,
                    children: (0, X.jsx)(O, {
                        id: `xJnONr`,
                        defaultMessage: `Back`
                    })
                }),
                footerContent: (0, X.jsx)(`span`, {
                    className: `text-token-text-secondary flex-1 align-middle font-medium`,
                    children: (0, X.jsx)(O, {
                        id: `Wp0nVY`,
                        defaultMessage: `Step {stepNum} of {totalSteps}`,
                        values: {
                            stepNum: i + 1,
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
    m(), dt(), xt(), wt(), je(), jt(), Pt(), B(), d(), l(), n(), T(), Y = t(j()), A(), F(), ct(), X = E()
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
    Bt = M(), Rt(), Vt = t(j()), ct(), Ht = E()
}));

function Wt(e) {
    function t({
        accountId: t,
        onClose: n,
        onSuccess: o
    }) {
        let s = N(),
            c = i(),
            [l, u] = (0, Gt.useState)(!1),
            d = (0, Gt.useCallback)(async () => {
                u(!0);
                let r = e.type === `github` ? {
                    connection_config_id: Kt,
                    knowledge_connector_type: e.type,
                    organization_name: null
                } : {
                    connection_config_id: Kt,
                    knowledge_connector_type: e.type
                };
                try {
                    await R.admin_create_connection_instance_via_workspace_permissions(t, r, void 0), await o?.(), n()
                } catch {
                    c.danger(s.formatMessage({
                        id: `aqpeYE`,
                        defaultMessage: `Something went wrong. Please try again.`
                    }), {
                        toastId: e.modal.toastId,
                        loggingTitle: `Failed to create connection`,
                        loggingDescription: `Failed to create connection`
                    })
                } finally {
                    u(!1)
                }
            }, [t, s, n, o, c]);
        return (0, Z.jsxs)(r, {
            ...e.modal.props,
            onClose: n,
            testId: e.modal.testId,
            children: [(0, Z.jsxs)(`div`, {
                className: `px-6 pt-4 pb-10`,
                children: [(0, Z.jsx)(`div`, {
                    className: `text-xl font-medium`,
                    children: (0, Z.jsx)(O, {
                        ...e.modal.copy.title
                    })
                }), (0, Z.jsx)(`div`, {
                    className: `text-md text-token-text-secondary mt-3`,
                    children: (0, Z.jsx)(O, {
                        ...e.modal.copy.description
                    })
                }), (0, Z.jsx)(`div`, {
                    className: `mt-6 text-lg font-medium`,
                    children: (0, Z.jsx)(O, {
                        id: `edoz9r`,
                        defaultMessage: `What to expect`
                    })
                }), (0, Z.jsx)(`ul`, {
                    className: `text-md text-token-text-secondary ms-6 mt-4`,
                    children: e.modal.copy.bulletPoints.map((e, t, n) => (0, Z.jsx)(`li`, {
                        className: t < n.length - 1 ? `mb-2 list-disc` : `list-disc`,
                        children: (0, Z.jsx)(O, {
                            ...e
                        })
                    }, t))
                })]
            }), (0, Z.jsx)(z, {
                primaryButton: (0, Z.jsx)(a, {
                    color: `primary`,
                    onClick: d,
                    loading: l,
                    children: (0, Z.jsx)(O, {
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
        return r ? (0, Z.jsx)(t, {
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
var Gt, Z, Kt, qt = e((() => {
    m(), F(), B(), d(), l(), n(), Gt = t(j()), A(), Z = E(), Kt = `--fake-local-id`
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
    Oe(), qt(), Xt = Ae.map(e => [e, Wt(Pe[e])]), Zt = new Map(Xt), Ae.map(Yt)
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
    return w()?.normalizedAccountUserId
}

function nn(e) {
    return e.key === `google_drive_dwd`
}
var rn, Q, $, an, on, sn, cn, ln, un = e((() => {
    rn = M(), ze(), v(), l(), y(), Xe(), nt(), m(), Ut(), Qt(), d(), o(), Q = t(j()), A(), Ce(), Ne(), Ue(), Ye(), $ = E(), an = {
        sharepoint_admin: `sharepoint`,
        teams_admin: `teams`,
        google_drive_oauth: `google_drive`,
        google_drive_dwd: `google_drive`
    }, on = (0, Q.createContext)(() => {}), sn = D({
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
                app: n,
                connectorReadScope: i,
                openToAdminSync: o,
                openToUserSync: l,
                skipParameterConstraintsPreflight: u,
                onClose: d
            } = e,
            f = o !== void 0 && o,
            p = l !== void 0 && l,
            m = u !== void 0 && u,
            h = N(),
            g;
        t[0] === n.knowledgeConfig ? g = t[1] : (g = n.knowledgeConfig.some($t), t[0] = n.knowledgeConfig, t[1] = g);
        let _ = g,
            v;
        t[2] !== n.primaryConnector.id || t[3] !== _ ? (v = _ || De(n.primaryConnector.id), t[2] = n.primaryConnector.id, t[3] = _, t[4] = v) : v = t[4];
        let y = v,
            b = y && f,
            te = y && !b && p,
            ne = n.knowledgeConfig[0].key,
            S = an[ne] || ne,
            C = Ee(),
            w = c(en),
            T = c(tn),
            E;
        t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (E = s(x())?.getWorkspaceId(), t[5] = E) : E = t[5];
        let D = E,
            k;
        t[6] !== n.primaryConnector.id || t[7] !== w ? (k = () => {
            Be(w, D ?? ``, n.primaryConnector.id, !!(D && n.primaryConnector.id))
        }, t[6] = n.primaryConnector.id, t[7] = w, t[8] = k) : k = t[8];
        let A;
        t[9] !== n.primaryConnector.id || t[10] !== T || t[11] !== w ? (A = [w, T, D, n.primaryConnector.id], t[9] = n.primaryConnector.id, t[10] = T, t[11] = w, t[12] = A) : A = t[12], (0, Q.useEffect)(k, A);
        let {
            hasParameterConstraints: j,
            isLoading: re
        } = Ge(n, w, T), [ie, ae] = (0, Q.useState)(!1), oe = He({
            app: n
        }), M;
        t[13] !== C || t[14] !== d ? (M = () => {
            C(), d()
        }, t[13] = C, t[14] = d, t[15] = M) : M = t[15];
        let P = M,
            se = oe && j && !m && !ie,
            F;
        t[16] === n ? F = t[17] : (F = Ke(n), t[16] = n, t[17] = F);
        let I = F;
        if (re) {
            let e;
            t[18] === h ? e = t[19] : (e = h.formatMessage(sn.loadingSyncSetupTitle), t[18] = h, t[19] = e);
            let n;
            t[20] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, $.jsx)(`div`, {
                className: `flex min-h-52 items-center justify-center p-8`,
                children: (0, $.jsx)(ee, {})
            }), t[20] = n) : n = t[20];
            let i;
            return t[21] !== P || t[22] !== e ? (i = (0, $.jsx)(r, {
                testId: `modal-app-sync-setup-loading`,
                isOpen: !0,
                onClose: P,
                size: `custom`,
                className: `max-w-[420px]`,
                contentClassName: `max-h-[90vh] flex flex-col`,
                visuallyHiddenHeader: !0,
                title: e,
                noPadding: !0,
                children: n
            }), t[21] = P, t[22] = e, t[23] = i) : i = t[23], i
        }
        if (se) {
            let e;
            t[24] === h ? e = t[25] : (e = h.formatMessage(sn.syncConstraintsPreflightTitle), t[24] = h, t[25] = e);
            let n;
            t[26] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, $.jsxs)(`div`, {
                className: `p-6`,
                children: [(0, $.jsx)(`div`, {
                    className: `text-xl font-semibold`,
                    children: (0, $.jsx)(O, {
                        ...sn.syncConstraintsPreflightTitle
                    })
                }), (0, $.jsx)(qe, {
                    className: `mt-4`
                })]
            }), t[26] = n) : n = t[26];
            let i;
            t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, $.jsx)(O, {
                id: `kmMRzz`,
                defaultMessage: `Cancel`
            }), t[27] = i) : i = t[27];
            let o;
            t[28] === P ? o = t[29] : (o = (0, $.jsx)(a, {
                color: `secondary`,
                onClick: P,
                children: i
            }), t[28] = P, t[29] = o);
            let s;
            t[30] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, $.jsx)(a, {
                color: `primary`,
                onClick: () => ae(!0),
                children: (0, $.jsx)(O, {
                    id: `C3NxrS`,
                    defaultMessage: `Continue`
                })
            }), t[30] = s) : s = t[30];
            let c;
            t[31] === o ? c = t[32] : (c = (0, $.jsxs)(`div`, {
                className: `flex justify-end gap-2 border-t p-4`,
                children: [o, s]
            }), t[31] = o, t[32] = c);
            let l;
            return t[33] !== P || t[34] !== e || t[35] !== c ? (l = (0, $.jsxs)(r, {
                testId: `modal-app-sync-constraints-preflight`,
                isOpen: !0,
                onClose: P,
                size: `custom`,
                className: `max-w-[480px]`,
                contentClassName: `max-h-[90vh] flex flex-col`,
                visuallyHiddenHeader: !0,
                title: e,
                noPadding: !0,
                children: [n, c]
            }), t[33] = P, t[34] = e, t[35] = c, t[36] = l) : l = t[36], l
        }
        if (I) {
            let e;
            t[37] !== n.primaryConnector || t[38] !== n.relatedConnectors ? (e = [n.primaryConnector, ...n.relatedConnectors], t[37] = n.primaryConnector, t[38] = n.relatedConnectors, t[39] = e) : e = t[39];
            let r;
            return t[40] !== i || t[41] !== I || t[42] !== P || t[43] !== e ? (r = (0, $.jsx)(tt, {
                connectorReadScope: i,
                kind: I,
                connectors: e,
                onClose: P
            }), t[40] = i, t[41] = I, t[42] = P, t[43] = e, t[44] = r) : r = t[44], r
        }
        if (S === `google_drive`) {
            let e;
            t[45] === n.knowledgeConfig ? e = t[46] : (e = n.knowledgeConfig.some(nn), t[45] = n.knowledgeConfig, t[46] = e);
            let r = e,
                i = b ? `gdrive-dwd` : te ? `gdrive-oauth` : void 0,
                a = b || te,
                o;
            return t[47] !== r || t[48] !== P || t[49] !== i || t[50] !== a ? (o = (0, $.jsx)(zt, {
                isDwdEnabled: r,
                onClose: P,
                initialConnectorOption: i,
                skipConnectorSelection: a,
                triggerLocation: `admin_settings`
            }), t[47] = r, t[48] = P, t[49] = i, t[50] = a, t[51] = o) : o = t[51], o
        }
        let L;
        t[52] === S ? L = t[53] : (L = Jt(S), t[52] = S, t[53] = L);
        let R = L.Controller,
            z;
        return t[54] !== R || t[55] !== P ? (z = (0, $.jsx)(R, {
            onClose: P
        }), t[54] = R, t[55] = P, t[56] = z) : z = t[56], z
    }
}));
export {
    Lt as a, wt as c, lt as d, dt as f, nt as h, un as i, ft as l, tt as m, cn as n, Rt as o, et as p, an as r, St as s, on as t, xt as u
};
//# sourceMappingURL=56d77f0a-npk5qohh6r6jexfq.js.map
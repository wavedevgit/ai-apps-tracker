import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $$ as n,
    C1 as r,
    Cit as i,
    Dit as a,
    Go as o,
    Grt as s,
    Io as c,
    J2 as l,
    Mo as u,
    Nrt as d,
    QL as f,
    QM as ee,
    Qit as te,
    Rot as p,
    Rrt as ne,
    S1 as re,
    Sit as m,
    Srt as h,
    Tit as g,
    Wrt as _,
    Xm as ie,
    Y2 as v,
    ZM as y,
    _1 as ae,
    _w as b,
    a7 as x,
    dnt as oe,
    dz as S,
    eR as se,
    fz as C,
    gw as w,
    h4 as T,
    hU as E,
    iat as D,
    ih as O,
    iw as ce,
    kit as k,
    l7 as A,
    mI as le,
    n1 as ue,
    ow as j,
    pU as M,
    r1 as N,
    u1 as P,
    v1 as de,
    wst as fe,
    xrt as pe,
    ynt as me
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as he,
    Bn as F,
    Ln as ge,
    N as I,
    Nn as L,
    O as _e,
    Pt as ve,
    Rn as ye,
    Ut as be,
    Vn as R,
    s as xe,
    wn as Se,
    zn as z
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Gst as Ce,
    THn as we,
    Ust as B,
    wHn as V
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    DC as Te,
    EC as Ee,
    Ex as De,
    TC as Oe,
    Tx as ke,
    wC as Ae
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    As as H,
    Ic as je,
    Lc as Me,
    Rc as Ne,
    Yf as Pe,
    ks as Fe
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    n as Ie,
    t as Le
} from "./da2e4f1d-hjo3ad3fmcgvexi4.js";
import {
    n as Re,
    r as ze,
    t as Be
} from "./1e5e38ab-ioq37iao8xvk95hq.js";
import {
    n as Ve,
    t as U
} from "./e14a92db-meahc77t1ym157j5.js";

function He(e) {
    "use forget";
    let t = (0, W.c)(10),
        {
            loadingLabel: n
        } = e,
        r;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, K.jsxs)(`div`, {
        className: `flex items-center gap-2`,
        children: [(0, K.jsx)(B, {
            className: `h-6 w-6 rounded-full`
        }), (0, K.jsx)(B, {
            className: `h-5 w-40`
        })]
    }), t[0] = r) : r = t[0];
    let i;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, K.jsxs)(`div`, {
        className: `flex flex-col gap-2 ps-5`,
        children: [(0, K.jsx)(B, {
            className: `h-4 w-full`
        }), (0, K.jsx)(B, {
            className: `h-4 w-11/12`
        })]
    }), t[1] = i) : i = t[1];
    let a, o;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, K.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [(0, K.jsx)(B, {
            className: `h-4 w-full`
        }), (0, K.jsx)(B, {
            className: `h-4 w-5/6`
        }), (0, K.jsx)(B, {
            className: `mt-2 h-10 w-full rounded-lg`
        })]
    }), o = (0, K.jsx)(U, {}), t[2] = a, t[3] = o) : (a = t[2], o = t[3]);
    let s, c, l;
    t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, K.jsx)(B, {
        className: `h-5 w-64`
    }), c = (0, K.jsx)(B, {
        className: `h-4 w-full`
    }), l = (0, K.jsx)(B, {
        className: `h-4 w-11/12`
    }), t[4] = s, t[5] = c, t[6] = l) : (s = t[4], c = t[5], l = t[6]);
    let u;
    t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, K.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [s, c, l, (0, K.jsxs)(`div`, {
            className: `mt-4 flex items-center justify-between gap-4`,
            children: [(0, K.jsx)(B, {
                className: `h-4 w-28`
            }), (0, K.jsx)(B, {
                className: `h-10 w-52 rounded-full`
            })]
        })]
    }), t[7] = u) : u = t[7];
    let d;
    return t[8] === n ? d = t[9] : (d = (0, K.jsxs)(`div`, {
        className: `flex flex-col gap-4`,
        "aria-busy": `true`,
        "aria-label": n,
        children: [r, i, a, o, u]
    }), t[8] = n, t[9] = d), d
}

function Ue() {
    "use no forget";
    let e = I(),
        t = se(),
        {
            data: n
        } = re(),
        r = J(n),
        i = o(e => e.purchaseWorkspaceData),
        c = r != null || n != null,
        [d, f] = (0, G.useState)(!1),
        p = n?.accountItems,
        m = le(),
        h = p?.filter(e => !e.isDeactivated()) ?? [],
        g = q(p),
        {
            data: _,
            isLoading: v
        } = Ne(r?.id),
        y = je(_),
        b = Math.max(y, m),
        S = Re(r),
        C = S === `checkout`,
        T = S === `customer_portal`,
        D = r?.id ?? null,
        {
            data: O,
            isLoading: k
        } = _e({
            queryKey: [`deactivated-workspace-invoice-context`, D],
            queryFn: async () => await x.safeGet(`/subscriptions/deactivated_workspace_invoice_context`, {
                parameters: {
                    query: {
                        account_id: D ?? ``
                    }
                }
            }),
            enabled: T && D != null,
            retry: !1
        }),
        A = z(),
        j = E(),
        M = r ? r.mustGetSubscriptionBillingCurrency(`DeactivatedWorkspaceModal`) : `USD`;
    (0, G.useEffect)(() => {
        n && !r && (a.addError(Error(`Current account is undefined in DeactivatedWorkspaceModal`)), oe.logEvent(`chatgpt_undefined_current_account`))
    }, [n, r]), (0, G.useEffect)(() => {
        if (!D || !i) return;
        let e = p?.find(e => e.id === D) ?? null;
        if (!e) return;
        let t = i.existingAccount?.id !== D,
            n = i.minimumSeats < b,
            r = i.billingDetails.currency !== M;
        !t && !n && !r || u.setPurchaseWorkspaceData({
            ...i,
            existingAccount: e,
            minimumSeats: Math.max(i.minimumSeats, b),
            billingDetails: {
                ...i.billingDetails,
                currency: M
            }
        })
    }, [D, i, b, M, p]);
    let N = () => {
            !r || v || u.setPurchaseWorkspaceData({
                minimumSeats: b,
                billingDetails: {
                    currency: M
                },
                existingAccount: r,
                reactivationCheckoutButtonClickSource: `deactivated_workspace_modal`
            })
        },
        P = async () => {
            if (r) {
                f(!0);
                try {
                    location.href = await Be(r.id)
                } catch {
                    f(!1), j.danger(A.formatMessage(X.unableToOpenStripeDashboard), {
                        duration: 2
                    })
                }
            }
        };
    return r == null ? null : (0, K.jsx)(ce, {
        testId: `modal-deactivated-workspace`,
        type: `success`,
        onClose: ee,
        isOpen: c,
        title: k ? (0, K.jsx)(B, {
            className: `h-6 w-56`
        }) : (0, K.jsx)(`span`, {
            className: `text-lg`,
            children: (0, K.jsx)(L, {
                ...X.workspaceDeactivated
            })
        }),
        children: k ? (0, K.jsx)(He, {
            loadingLabel: A.formatMessage(X.loadingInvoiceContext)
        }) : (0, K.jsxs)(`div`, {
            className: `flex flex-col items-center justify-center gap-4`,
            children: [(0, K.jsx)(`div`, {
                className: `flex w-full items-center gap-2`,
                children: g.length > 1 ? (0, K.jsx)(Y, {
                    workspaces: g,
                    currentWorkspace: r,
                    currentWorkspaceId: D
                }) : (0, K.jsxs)(K.Fragment, {
                    children: [(0, K.jsx)(ie, {
                        src: r.data.profilePictureUrl
                    }), (0, K.jsx)(`div`, {
                        children: r.data.name
                    })]
                })
            }), (0, K.jsx)(`div`, {
                children: (0, K.jsxs)(`ul`, {
                    className: `list-disc ps-5 text-sm`,
                    children: [(0, K.jsx)(`li`, {
                        className: `mb-1`,
                        children: (0, K.jsx)(L, {
                            ...X.chatHistoryUnavailable
                        })
                    }), (0, K.jsx)(`li`, {
                        children: (0, K.jsx)(L, {
                            ...X.otherWorkspacesAvailable
                        })
                    })]
                })
            }), C && (0, K.jsxs)(`div`, {
                className: `flex w-full flex-col`,
                children: [(0, K.jsx)(`p`, {
                    children: (0, K.jsx)(L, {
                        ...X.purchaseNewSubscription
                    })
                }), (0, K.jsx)(w, {
                    className: `m-auto mt-2 w-full`,
                    disabled: v,
                    loading: d,
                    onClick: N,
                    children: (0, K.jsx)(L, {
                        ...X.purchaseNewSubscriptionButton
                    })
                })]
            }), T && (0, K.jsxs)(`div`, {
                className: `flex w-full flex-col`,
                children: [(0, K.jsx)(`p`, {
                    className: `text-sm leading-5`,
                    children: O?.available && O.invoice_kind === `true_up` ? (0, K.jsx)(L, {
                        ...X.resolveSeatIncreaseInvoice,
                        values: {
                            additionalPaidSeats: O.additional_paid_seats,
                            b: e => (0, K.jsx)(`strong`, {
                                children: e
                            })
                        }
                    }) : O?.available && O.invoice_kind === `renewal` ? (0, K.jsx)(L, {
                        ...X.resolveRenewalInvoice
                    }) : (0, K.jsx)(L, {
                        ...X.resolveOutstandingInvoice
                    })
                }), (0, K.jsx)(w, {
                    className: `m-auto mt-2 w-full`,
                    loading: d,
                    onClick: P,
                    children: (0, K.jsx)(L, {
                        ...X.manageSubscriptionButton
                    })
                })]
            }), (0, K.jsx)(U, {}), (0, K.jsx)(`div`, {
                className: `w-full justify-center`,
                children: h.length > 0 ? (0, K.jsxs)(K.Fragment, {
                    children: [(0, K.jsx)(`h3`, {
                        className: `mb-2 text-base font-normal`,
                        children: (0, K.jsx)(L, {
                            ...X.selectWorkspace
                        })
                    }), (0, K.jsx)(Le, {
                        data: h
                    })]
                }) : (0, K.jsxs)(`div`, {
                    className: `flex flex-col gap-6 text-sm`,
                    children: [(0, K.jsxs)(`div`, {
                        className: `flex flex-col gap-2`,
                        children: [(0, K.jsx)(`h3`, {
                            className: `text-base font-normal`,
                            children: (0, K.jsx)(L, {
                                ...X.createPersonalWorkspace
                            })
                        }), (0, K.jsx)(L, {
                            ...X.deactivatedWorkspaceReason
                        })]
                    }), (0, K.jsxs)(`div`, {
                        className: `flex justify-between`,
                        children: [(0, K.jsxs)(`div`, {
                            className: `flex w-full items-center gap-2`,
                            children: [t && t.picture && (0, K.jsx)(`img`, {
                                alt: `Profile`,
                                src: t.picture,
                                className: `flex h-6 w-6 items-center justify-center rounded-full`
                            }), t && (0, K.jsx)(`span`, {
                                className: `truncate`,
                                children: t.name
                            })]
                        }), (0, K.jsx)(w, {
                            title: A.formatMessage(X.createPersonalWorkspaceButton),
                            loading: d,
                            onClick: async () => {
                                f(!0);
                                try {
                                    await ne((await x.safePost(`/accounts/personal`, {})).id, {
                                        reason: `DeactivatedWorkspaceModal.createPersonal`
                                    }), ae(pe), l()
                                } catch (t) {
                                    f(!1), a.addError(Error(`Failed to create personal workspace`, {
                                        cause: t
                                    })), e.invalidateQueries({
                                        queryKey: ue().queryKey
                                    }), (!(t instanceof te) || !s(t)) && j.danger(A.formatMessage(H.switchAccountError))
                                }
                            },
                            color: `primary`,
                            className: `ms-4`
                        })]
                    })]
                })
            })]
        })
    })
}
var W, G, K, q, J, Y, X, We = e((() => {
        W = Se(), fe(), O(), Ve(), C(), Ie(), ze(), Fe(), h(), we(), b(), De(), Te(), Oe(), j(), Ce(), Pe(), Me(), P(), c(), f(), M(), d(), i(), T(), k(), D(), v(), A(), me(), _(), xe(), y(), G = t(R()), ye(), K = F(), q = e => e?.filter(e => e.structure === p.WORKSPACE && e.isDeactivated() && e.isOwnerOfAccount()) ?? [], J = e => {
            let t = N(e);
            if (t) return t;
            let r = m.getCookie(g.Workspace),
                i = r != null && r !== `personal` ? n(e, r) : null;
            if (i?.isDeactivated()) return i;
            let a = e?.accountItems,
                o = q(a);
            return o.length > 0 ? o[0] : (a?.filter(e => e.isDeactivated()) ?? [])[0] ?? null
        }, Y = ({
            workspaces: e,
            currentWorkspace: t,
            currentWorkspaceId: n
        }) => {
            "use no forget";
            let r = I(),
                i = z(),
                o = E(),
                [s, c] = (0, G.useState)(!1),
                [l, u] = (0, G.useState)(null),
                d = (0, G.useRef)(null),
                f = t => {
                    if (t === n || l) return;
                    let s = e.find(e => e.id === t);
                    s && (u(t), d.current = t, c(!0), window.setTimeout(() => {
                        (async () => {
                            try {
                                let {
                                    updatedAccount: e,
                                    willRedirect: t
                                } = await de(r, s.id, i, o);
                                if (e || t) return
                            } catch (e) {
                                a.addError(Error(`Failed to switch deactivated owner workspace`, {
                                    cause: e
                                }))
                            }
                            d.current = null, u(null), o.danger(i.formatMessage(H.switchAccountError))
                        })()
                    }, 0))
                };
            return (0, K.jsxs)(V.Root, {
                open: s,
                onOpenChange: e => {
                    d.current && !e || c(e)
                },
                children: [(0, K.jsxs)(V.Trigger, {
                    className: `inline-flex h-auto items-center justify-between px-1 py-1 text-start text-base font-normal`,
                    children: [(0, K.jsxs)(`div`, {
                        className: `flex items-center gap-2`,
                        children: [(0, K.jsx)(ie, {
                            src: t.data.profilePictureUrl
                        }), (0, K.jsx)(`div`, {
                            children: t.data.name
                        })]
                    }), (0, K.jsx)(Ee, {
                        className: `icon-sm`
                    })]
                }), (0, K.jsx)(V.Portal, {
                    children: (0, K.jsx)(V.Content, {
                        align: `start`,
                        sideOffset: 4,
                        size: `auto`,
                        children: (0, K.jsx)(V.RadioGroup, {
                            value: n ?? void 0,
                            onValueChange: e => {
                                f(e)
                            },
                            children: e.map(e => (0, K.jsx)(V.RadioItem, {
                                value: e.id,
                                trailing: e.id === l ? (0, K.jsx)(S, {
                                    className: `icon-sm`
                                }) : n === e.id ? (0, K.jsx)(ke, {
                                    className: `icon-sm`
                                }) : (0, K.jsx)(Ae, {
                                    className: `icon-sm`
                                }),
                                children: e.name ?? e.id
                            }, e.id))
                        })
                    })
                })]
            })
        }, X = ge({
            workspaceDeactivated: {
                id: `deactivatedWorkspaceModal.workspaceDeactivated`,
                defaultMessage: `Your workspace has been deactivated`
            },
            chatHistoryUnavailable: {
                id: `deactivatedWorkspaceModal.chatHistoryUnavailable`,
                defaultMessage: `Your chat history and settings will not be available.`
            },
            otherWorkspacesAvailable: {
                id: `deactivatedWorkspaceModal.otherWorkspacesAvailable`,
                defaultMessage: `You will still be able to use ChatGPT with the other workspaces associated with this email address.`
            },
            selectWorkspace: {
                id: `deactivatedWorkspaceModal.selectWorkspace`,
                defaultMessage: `Select a workspace to continue`
            },
            createPersonalWorkspace: {
                id: `deactivatedWorkspaceModal.createPersonalWorkspace`,
                defaultMessage: `Create a personal workspace to continue`
            },
            deactivatedWorkspaceReason: {
                id: `deactivatedWorkspaceModal.deactivatedWorkspaceReason`,
                defaultMessage: `Because your workspace has been deactivated, you need to create a personal workspace to continue using ChatGPT.`
            },
            createPersonalWorkspaceButton: {
                id: `deactivatedWorkspaceModal.createPersonalWorkspaceButton`,
                defaultMessage: `Create a personal workspace`
            },
            purchaseNewSubscription: {
                id: `deactivatedWorkspaceModal.purchaseNewSubscription`,
                defaultMessage: `You can reactivate your workspace by purchasing a new subscription.`
            },
            purchaseNewSubscriptionButton: {
                id: `deactivatedWorkspaceModal.purchaseNewSubscriptionButton`,
                defaultMessage: `Purchase subscription`
            },
            resolveOutstandingInvoice: {
                id: `deactivatedWorkspaceModal.resolveOutstandingInvoice`,
                defaultMessage: `You can reactivate your workspace by resolving an outstanding invoice on your subscription.`
            },
            resolveSeatIncreaseInvoice: {
                id: `deactivatedWorkspaceModal.resolveSeatIncreaseInvoice`,
                defaultMessage: `{additionalPaidSeats, plural, one {<b># seat</b> was} other {<b># seats</b> were}} recently added to your organization, and payment failed when we tried to charge you. Resolve the outstanding payment to reactivate your workspace.`
            },
            resolveRenewalInvoice: {
                id: `deactivatedWorkspaceModal.resolveRenewalInvoice`,
                defaultMessage: `Payment failed when we tried to renew your subscription. Resolve the outstanding payment to reactivate your workspace.`
            },
            loadingInvoiceContext: {
                id: `deactivatedWorkspaceModal.loadingInvoiceContext`,
                defaultMessage: `Loading payment details`
            },
            manageSubscriptionButton: {
                id: `deactivatedWorkspaceModal.manageSubscriptionButton`,
                defaultMessage: `Manage subscription`
            },
            unableToOpenStripeDashboard: {
                id: `deactivatedWorkspaceModal.unableToOpenStripeDashboard`,
                defaultMessage: `Unable to open the Stripe dashboard.`
            }
        })
    })),
    Z, Q, $, Ge = e((() => {
        he(), We(), P(), Z = t(R()), Q = F(), $ = be(function() {
            let e = r(),
                t = ve();
            return (0, Z.useEffect)(() => {
                e && !e.isDeactivated() && t(`/`)
            }, [e, t]), e && !e.isDeactivated() ? (0, Q.jsx)(`div`, {}) : (0, Q.jsx)(Ue, {})
        })
    }));
e((() => {
    Ge()
}))();
export {
    $ as
    default
};
//# sourceMappingURL=workspace.deactivated-pb33eypn.js.map
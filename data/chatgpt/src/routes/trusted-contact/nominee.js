import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ant as n,
    Btt as r,
    Htt as i,
    knt as a
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as o,
    At as s,
    Bn as c,
    Pt as l,
    Ut as u,
    Vn as d
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    EDn as f,
    ODn as p,
    TDn as m
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    a as h,
    d as g,
    l as _,
    n as v,
    o as y,
    r as b,
    s as x,
    t as S,
    u as C
} from "./7bce5d58-e0h9mexzr2bx36tu.js";
var w, T, E, D = e((() => {
    o(), g(), y(), v(), i(), a(), p(), w = t(d()), T = c(), E = u(function() {
        "use no forget";
        let e = l(),
            t = s(),
            [i, a] = (0, w.useState)(() => t.initialErrorState == null ? {
                status: `loading`
            } : t.initialErrorState),
            o = () => e(`/`, {
                replace: !0
            });
        return (0, w.useEffect)(() => {
            if (t.token == null || t.initialErrorState != null) return;
            let e = !1;
            return h(t.token).then(t => {
                if (!e) {
                    if (t.status === `success`) {
                        a({
                            status: `ready`,
                            isSubmitting: !1,
                            inviterName: t.inviterName,
                            inviterAccountIdentifier: t.inviterAccountIdentifier,
                            invitationDeadlineTimestamp: t.invitationDeadlineTimestamp
                        });
                        return
                    }
                    a(t)
                }
            }), () => {
                e = !0
            }
        }, [t.initialErrorState, t.token]), (0, w.useEffect)(() => {
            if (i.status === `ready`) try {
                r.logStructuredEvent(`ChatgptTrustedContactNomineeModalShown`, {
                    entryPoint: t.entryPoint,
                    modal: f.CHATGPT_TRUSTED_CONTACT_NOMINEE_MODAL_ACCEPT
                })
            } catch (e) {
                n.debug(`Failed to log trusted-contact analytics event`, {
                    eventName: `ChatgptTrustedContactNomineeModalShown`,
                    error: e
                })
            }
        }, [t.entryPoint, i.status]), i.status === `success` ? (0, T.jsx)(S, {
            children: (0, T.jsx)(C, {
                variant: `accepted`,
                ownerName: i.ownerName,
                onClose: o
            })
        }) : i.status === `loading` ? (0, T.jsx)(S, {
            children: (0, T.jsx)(_, {
                onClose: o
            })
        }) : i.status === `error` ? (0, T.jsx)(S, {
            children: (0, T.jsx)(C, {
                variant: `error`,
                ownerName: null,
                errorKind: i.errorKind,
                onClose: o
            })
        }) : (0, T.jsx)(S, {
            children: (0, T.jsx)(x, {
                inviterName: i.inviterName,
                inviterAccountIdentifier: i.inviterAccountIdentifier,
                invitationDeadlineTimestamp: i.invitationDeadlineTimestamp,
                isPending: i.isSubmitting,
                onAccept: () => {
                    if (t.token == null) {
                        a({
                            status: `error`,
                            errorKind: `invalidLink`
                        });
                        return
                    }
                    try {
                        r.logStructuredEvent(`ChatgptTrustedContactNomineeActionTaken`, {
                            entryPoint: t.entryPoint,
                            action: m.CHATGPT_TRUSTED_CONTACT_NOMINEE_ACTION_ACCEPT_CLICKED
                        })
                    } catch (e) {
                        n.debug(`Failed to log trusted-contact analytics event`, {
                            eventName: `ChatgptTrustedContactNomineeActionTaken`,
                            error: e
                        })
                    }
                    a({
                        ...i,
                        isSubmitting: !0
                    }), b(t.token).then(e => {
                        if (e.status === `success`) {
                            a({
                                status: `success`,
                                ownerName: i.inviterName
                            });
                            return
                        }
                        a(e)
                    })
                },
                onDecline: () => {
                    if (t.token == null) {
                        o();
                        return
                    }
                    let n = new URLSearchParams({
                        token: t.token,
                        entry_point: t.entryPoint
                    });
                    e(`/trusted-contact/decline?${n.toString()}`, {
                        replace: !1
                    })
                },
                onClose: o
            })
        })
    })
}));
e((() => {
    D()
}))();
export {
    E as
    default
};
//# sourceMappingURL=trusted-contact.nominee-l0xpcnsd.js.map
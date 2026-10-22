import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    IU as n,
    J5 as r,
    LU as i,
    R5 as a,
    R8 as o,
    _q as s,
    q5 as c,
    vq as l,
    z5 as u
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Bn as d,
    Ln as f,
    Rn as p,
    wn as m,
    zn as h
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Jit as g,
    Jrt as _,
    Yit as v,
    ZVt as y,
    dzt as b,
    nHt as x,
    qit as S,
    tit as C,
    vzt as w,
    wzt as T,
    xHt as E
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    a as D,
    o as O,
    s as k,
    t as A,
    x as j
} from "./4285e798-h11w1wjvb5tjxvuy.js";
import {
    n as M,
    t as N
} from "./8e88ec39-ly2p52dkrwo6r0lt.js";
import {
    n as P,
    t as F
} from "./126cbe2b-ohvvw0aq1s4xxjh3.js";
import {
    a as I,
    i as L,
    n as R,
    o as z,
    t as B
} from "./caea150f-fq96zd33v319mysd.js";
import {
    n as V,
    t as H
} from "./11d5ad21-omeqhp6tu8mes117.js";

function U() {
    return w().currentGpt.id
}
var W, G, K, q, J, Y, X, Z = e((() => {
        W = m(), x(), A(), T(), S(), _(), l(), t(), c(), i(), u(), p(), F(), G = s(() => o(new Set)), K = (e, t) => {
            G.set(n => {
                let r = new Set([...n].filter(t => t !== e));
                return t && r.add(e), r
            })
        }, q = e => {
            "use forget";
            let t = (0, W.c)(18),
                i = h(),
                o;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (o = a(), t[0] = o) : o = t[0];
            let s = o,
                c;
            t[1] === e.connectorId ? c = t[2] : (c = () => G().has(e.connectorId), t[1] = e.connectorId, t[2] = c);
            let l = r(c),
                u = P(),
                d = r(U),
                {
                    connectorHealthByConnectorId: f,
                    isLoading: p
                } = v(d, `draft`),
                m;
            t[3] !== f || t[4] !== e.connectorId ? (m = f.get(e.connectorId), t[3] = f, t[4] = e.connectorId, t[5] = m) : m = t[5];
            let _ = m,
                y = e.connectionType !== `end_user_connection`,
                x;
            t[6] !== _ || t[7] !== u || t[8] !== d || t[9] !== i || t[10] !== p || t[11] !== l || t[12] !== y || t[13] !== e ? (x = async () => {
                if (p || l) return;
                if (K(e.connectorId, !0), _?.link_id != null && (_.link_status === `missing_actions` || _.link_status === `needs_reconnect` || g(_))) {
                    let t = E();
                    D({
                        actionType: O.CONNECTOR_RECONNECT,
                        actionResult: k.STARTED,
                        actionInstanceId: t.actionInstanceId,
                        source: j.CONNECTOR_DETAIL,
                        connector: {
                            connectorId: e.connectorId,
                            linkId: _.link_id
                        }
                    });
                    try {
                        await C({
                            connectorId: e.connectorId,
                            linkId: _.link_id,
                            redirectAfter: location.href
                        }), D({
                            actionType: O.CONNECTOR_RECONNECT,
                            actionResult: k.SUCCEEDED,
                            source: j.CONNECTOR_DETAIL,
                            connector: {
                                connectorId: e.connectorId,
                                linkId: _.link_id
                            },
                            request: t()
                        })
                    } catch (r) {
                        let a = r;
                        D({
                            actionType: O.CONNECTOR_RECONNECT,
                            actionResult: k.FAILED,
                            source: j.CONNECTOR_DETAIL,
                            connector: {
                                connectorId: e.connectorId,
                                linkId: _.link_id
                            },
                            request: t({
                                error: a
                            })
                        }), n().danger(i.formatMessage(X.reconnectError), {
                            error: a
                        })
                    }
                    K(e.connectorId, !1);
                    return
                }
                let t, r = E();
                D({
                    actionType: O.APP_CONNECT,
                    actionResult: k.STARTED,
                    actionInstanceId: r.actionInstanceId,
                    source: j.CONNECTOR_DETAIL,
                    connector: {
                        connectorId: e.connectorId
                    }
                });
                try {
                    t = await u(e.connectorId)
                } catch (t) {
                    let a = t;
                    D({
                        actionType: O.APP_CONNECT,
                        actionResult: k.FAILED,
                        source: j.CONNECTOR_DETAIL,
                        connector: {
                            connectorId: e.connectorId
                        },
                        request: r({
                            error: a
                        })
                    }), n().danger(i.formatMessage(X.connectError), {
                        error: a
                    }), K(e.connectorId, !1);
                    return
                }
                if (!t) {
                    D({
                        actionType: O.APP_CONNECT,
                        actionResult: k.CANCELED,
                        source: j.CONNECTOR_DETAIL,
                        connector: {
                            connectorId: e.connectorId
                        },
                        request: r()
                    }), K(e.connectorId, !1);
                    return
                }
                y && b.setTool({
                    type: `connector`,
                    config: {
                        ...e,
                        link: t,
                        linkId: t.id
                    }
                }), d && J(s, d, e.connectorId), D({
                    actionType: O.APP_CONNECT,
                    actionResult: k.SUCCEEDED,
                    source: j.CONNECTOR_DETAIL,
                    connector: {
                        connectorId: e.connectorId,
                        linkId: t.id
                    },
                    request: r()
                }), K(e.connectorId, !1)
            }, t[6] = _, t[7] = u, t[8] = d, t[9] = i, t[10] = p, t[11] = l, t[12] = y, t[13] = e, t[14] = x) : x = t[14];
            let S = x,
                w;
            return t[15] !== S || t[16] !== l ? (w = {
                isCreatingLink: l,
                createLinkForTool: S
            }, t[15] = S, t[16] = l, t[17] = w) : w = t[17], w
        }, J = (e, t, n) => {
            e.setQueryData(y(t, `draft`), e => e.map(e => e.connector_id === n ? {
                ...e,
                link_status: `healthy`
            } : e))
        }, Y = ({
            queryClient: e,
            gptId: t,
            connectorId: n,
            connectorName: r,
            accountLabel: i,
            authType: a
        }) => {
            e.setQueryData(y(t, `draft`), e => [...e, {
                connector_id: n,
                connector_name: r,
                auth_type: a,
                status: `healthy`,
                link_status: `healthy`,
                fixability: `none`,
                account_label: i
            }])
        }, X = f({
            connectError: {
                id: `Hermes.GptStudio.Builder.UseCreateLinkForTool.connectError`,
                defaultMessage: `Couldn't connect your account. Try again.`
            },
            reconnectError: {
                id: `Hermes.GptStudio.Builder.UseCreateLinkForTool.reconnectError`,
                defaultMessage: `Couldn't reconnect your account. Try again.`
            }
        })
    })),
    Q, $, ee = e((() => {
        V(), R(), I(), M(), Q = d(), $ = ({
            connector: e,
            connectorName: t,
            intl: n,
            onDelete: r
        }) => {
            z((0, Q.jsx)(B, {
                icon: (0, Q.jsx)(H, {
                    connector: e,
                    borderStyle: `normal`,
                    className: `size-10`,
                    iconClassName: `size-8`
                }),
                title: n.formatMessage(N.removeAppDialogTitle, {
                    connectorName: t
                }),
                description: n.formatMessage(N.removeAppDialogDescription, {
                    connectorName: t
                }),
                onCancel: L,
                onDelete: async () => {
                    await r(), L()
                }
            }))
        }
    }));
export {
    q as a, Y as i, $ as n, Z as r, ee as t
};
//# sourceMappingURL=4614e65c-g4ud9pkjueubm4p0.js.map
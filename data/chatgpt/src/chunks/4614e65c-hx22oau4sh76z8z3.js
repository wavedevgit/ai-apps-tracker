import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A5 as t,
    A8 as n,
    IU as r,
    LU as i,
    R8 as a,
    S5 as o,
    _q as s,
    j5 as c,
    vq as l,
    x5 as u
} from "./4813494d-mdvd4786a87166cc.js";
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
    QVt as v,
    Yit as y,
    _Ht as b,
    bzt as x,
    mzt as S,
    qVt as C,
    qit as w,
    szt as T,
    tit as E
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    a as D,
    o as O,
    s as k,
    t as A,
    x as j
} from "./4285e798-jmweay4m4zvq8jkw.js";
import {
    n as M,
    t as N
} from "./8e88ec39-ly2p52dkrwo6r0lt.js";
import {
    n as P,
    t as F
} from "./126cbe2b-j1crmo4fa3bbsqro.js";
import {
    a as I,
    i as L,
    n as R,
    o as z,
    t as B
} from "./caea150f-ck0ogfoxnllf2mqc.js";
import {
    n as V,
    t as H
} from "./11d5ad21-ep4ifhoy6pf78fxz.js";

function U() {
    return S().currentGpt.id
}
var W, G, K, q, J, Y, X, Z = e((() => {
        W = m(), v(), A(), x(), w(), _(), l(), n(), t(), i(), o(), p(), F(), G = s(() => a(new Set)), K = (e, t) => {
            G.set(n => {
                let r = new Set([...n].filter(t => t !== e));
                return t && r.add(e), r
            })
        }, q = e => {
            "use forget";
            let t = (0, W.c)(18),
                n = h(),
                i;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = u(), t[0] = i) : i = t[0];
            let a = i,
                o;
            t[1] === e.connectorId ? o = t[2] : (o = () => G().has(e.connectorId), t[1] = e.connectorId, t[2] = o);
            let s = c(o),
                l = P(),
                d = c(U),
                {
                    connectorHealthByConnectorId: f,
                    isLoading: p
                } = y(d, `draft`),
                m;
            t[3] !== f || t[4] !== e.connectorId ? (m = f.get(e.connectorId), t[3] = f, t[4] = e.connectorId, t[5] = m) : m = t[5];
            let _ = m,
                v = e.connectionType !== `end_user_connection`,
                x;
            t[6] !== _ || t[7] !== l || t[8] !== d || t[9] !== n || t[10] !== p || t[11] !== s || t[12] !== v || t[13] !== e ? (x = async () => {
                if (p || s) return;
                if (K(e.connectorId, !0), _?.link_id != null && (_.link_status === `missing_actions` || _.link_status === `needs_reconnect` || g(_))) {
                    let t = b();
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
                        await E({
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
                    } catch (i) {
                        let a = i;
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
                        }), r().danger(n.formatMessage(X.reconnectError), {
                            error: a
                        })
                    }
                    K(e.connectorId, !1);
                    return
                }
                let t, i = b();
                D({
                    actionType: O.APP_CONNECT,
                    actionResult: k.STARTED,
                    actionInstanceId: i.actionInstanceId,
                    source: j.CONNECTOR_DETAIL,
                    connector: {
                        connectorId: e.connectorId
                    }
                });
                try {
                    t = await l(e.connectorId)
                } catch (t) {
                    let a = t;
                    D({
                        actionType: O.APP_CONNECT,
                        actionResult: k.FAILED,
                        source: j.CONNECTOR_DETAIL,
                        connector: {
                            connectorId: e.connectorId
                        },
                        request: i({
                            error: a
                        })
                    }), r().danger(n.formatMessage(X.connectError), {
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
                        request: i()
                    }), K(e.connectorId, !1);
                    return
                }
                v && T.setTool({
                    type: `connector`,
                    config: {
                        ...e,
                        link: t,
                        linkId: t.id
                    }
                }), d && J(a, d, e.connectorId), D({
                    actionType: O.APP_CONNECT,
                    actionResult: k.SUCCEEDED,
                    source: j.CONNECTOR_DETAIL,
                    connector: {
                        connectorId: e.connectorId,
                        linkId: t.id
                    },
                    request: i()
                }), K(e.connectorId, !1)
            }, t[6] = _, t[7] = l, t[8] = d, t[9] = n, t[10] = p, t[11] = s, t[12] = v, t[13] = e, t[14] = x) : x = t[14];
            let S = x,
                C;
            return t[15] !== S || t[16] !== s ? (C = {
                isCreatingLink: s,
                createLinkForTool: S
            }, t[15] = S, t[16] = s, t[17] = C) : C = t[17], C
        }, J = (e, t, n) => {
            e.setQueryData(C(t, `draft`), e => e.map(e => e.connector_id === n ? {
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
            e.setQueryData(C(t, `draft`), e => [...e, {
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
//# sourceMappingURL=4614e65c-hx22oau4sh76z8z3.js.map
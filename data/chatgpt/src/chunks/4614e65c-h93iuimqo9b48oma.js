import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    IU as t,
    K5 as n,
    L5 as r,
    L8 as i,
    LU as a,
    R5 as o,
    _q as s,
    k8 as c,
    q5 as l,
    vq as u
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    Bn as d,
    Ln as f,
    Rn as p,
    wn as m,
    zn as h
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Czt as g,
    Jit as _,
    Kit as v,
    XVt as y,
    _zt as b,
    bHt as x,
    eit as S,
    qit as C,
    qrt as w,
    tHt as T,
    uzt as E
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    a as D,
    o as O,
    s as k,
    t as A,
    x as j
} from "./4285e798-db8ayjk99ugt4omv.js";
import {
    n as M,
    t as N
} from "./8e88ec39-ly2p52dkrwo6r0lt.js";
import {
    n as P,
    t as F
} from "./126cbe2b-ojyyb05awbpmdcsy.js";
import {
    a as I,
    i as L,
    n as R,
    o as z,
    t as B
} from "./caea150f-e9r6e59a4ha9w0f8.js";
import {
    n as V,
    t as H
} from "./11d5ad21-bjmid5xee8nl7hji.js";

function U() {
    return b().currentGpt.id
}
var W, G, K, q, J, Y, X, Z = e((() => {
        W = m(), T(), A(), g(), v(), w(), u(), c(), n(), a(), o(), p(), F(), G = s(() => i(new Set)), K = (e, t) => {
            G.set(n => {
                let r = new Set([...n].filter(t => t !== e));
                return t && r.add(e), r
            })
        }, q = e => {
            "use forget";
            let n = (0, W.c)(18),
                i = h(),
                a;
            n[0] === Symbol.for(`react.memo_cache_sentinel`) ? (a = r(), n[0] = a) : a = n[0];
            let o = a,
                s;
            n[1] === e.connectorId ? s = n[2] : (s = () => G().has(e.connectorId), n[1] = e.connectorId, n[2] = s);
            let c = l(s),
                u = P(),
                d = l(U),
                {
                    connectorHealthByConnectorId: f,
                    isLoading: p
                } = _(d, `draft`),
                m;
            n[3] !== f || n[4] !== e.connectorId ? (m = f.get(e.connectorId), n[3] = f, n[4] = e.connectorId, n[5] = m) : m = n[5];
            let g = m,
                v = e.connectionType !== `end_user_connection`,
                y;
            n[6] !== g || n[7] !== u || n[8] !== d || n[9] !== i || n[10] !== p || n[11] !== c || n[12] !== v || n[13] !== e ? (y = async () => {
                if (p || c) return;
                if (K(e.connectorId, !0), g?.link_id != null && (g.link_status === `missing_actions` || g.link_status === `needs_reconnect` || C(g))) {
                    let n = x();
                    D({
                        actionType: O.CONNECTOR_RECONNECT,
                        actionResult: k.STARTED,
                        actionInstanceId: n.actionInstanceId,
                        source: j.CONNECTOR_DETAIL,
                        connector: {
                            connectorId: e.connectorId,
                            linkId: g.link_id
                        }
                    });
                    try {
                        await S({
                            connectorId: e.connectorId,
                            linkId: g.link_id,
                            redirectAfter: location.href
                        }), D({
                            actionType: O.CONNECTOR_RECONNECT,
                            actionResult: k.SUCCEEDED,
                            source: j.CONNECTOR_DETAIL,
                            connector: {
                                connectorId: e.connectorId,
                                linkId: g.link_id
                            },
                            request: n()
                        })
                    } catch (r) {
                        let a = r;
                        D({
                            actionType: O.CONNECTOR_RECONNECT,
                            actionResult: k.FAILED,
                            source: j.CONNECTOR_DETAIL,
                            connector: {
                                connectorId: e.connectorId,
                                linkId: g.link_id
                            },
                            request: n({
                                error: a
                            })
                        }), t().danger(i.formatMessage(X.reconnectError), {
                            error: a
                        })
                    }
                    K(e.connectorId, !1);
                    return
                }
                let n, r = x();
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
                    n = await u(e.connectorId)
                } catch (n) {
                    let a = n;
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
                    }), t().danger(i.formatMessage(X.connectError), {
                        error: a
                    }), K(e.connectorId, !1);
                    return
                }
                if (!n) {
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
                v && E.setTool({
                    type: `connector`,
                    config: {
                        ...e,
                        link: n,
                        linkId: n.id
                    }
                }), d && J(o, d, e.connectorId), D({
                    actionType: O.APP_CONNECT,
                    actionResult: k.SUCCEEDED,
                    source: j.CONNECTOR_DETAIL,
                    connector: {
                        connectorId: e.connectorId,
                        linkId: n.id
                    },
                    request: r()
                }), K(e.connectorId, !1)
            }, n[6] = g, n[7] = u, n[8] = d, n[9] = i, n[10] = p, n[11] = c, n[12] = v, n[13] = e, n[14] = y) : y = n[14];
            let b = y,
                w;
            return n[15] !== b || n[16] !== c ? (w = {
                isCreatingLink: c,
                createLinkForTool: b
            }, n[15] = b, n[16] = c, n[17] = w) : w = n[17], w
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
//# sourceMappingURL=4614e65c-h93iuimqo9b48oma.js.map
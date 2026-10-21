import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    BU as t,
    N5 as n,
    P5 as r,
    T5 as i,
    bq as a,
    g8 as o,
    w5 as s,
    w8 as c,
    xq as l,
    zU as u
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    Bn as d,
    Ln as f,
    Rn as p,
    wn as m,
    zn as h
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $it as g,
    Azt as _,
    DHt as v,
    _zt as y,
    cHt as b,
    eat as x,
    eit as S,
    rHt as C,
    sit as w,
    tat as T,
    wzt as E
} from "./conversation-small-nmt18uiom3b14vca.js";
import {
    a as D,
    o as O,
    s as k,
    t as A,
    x as j
} from "./4285e798-d12vw91yd8v2awo6.js";
import {
    n as M,
    t as N
} from "./8e88ec39-ly2p52dkrwo6r0lt.js";
import {
    n as P,
    t as F
} from "./126cbe2b-impnyhf39xot19zj.js";
import {
    a as I,
    i as L,
    n as R,
    o as z,
    t as B
} from "./caea150f-kolm8kajlnutrv9u.js";
import {
    n as V,
    t as H
} from "./11d5ad21-eanizw349e81p8yy.js";

function U() {
    return E().currentGpt.id
}
var W, G, K, q, J, Y, X, Z = e((() => {
        W = m(), b(), A(), _(), g(), S(), l(), o(), n(), t(), i(), p(), F(), G = a(() => c(new Set)), K = (e, t) => {
            G.set(n => {
                let r = new Set([...n].filter(t => t !== e));
                return t && r.add(e), r
            })
        }, q = e => {
            "use forget";
            let t = (0, W.c)(18),
                n = h(),
                i;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = s(), t[0] = i) : i = t[0];
            let a = i,
                o;
            t[1] === e.connectorId ? o = t[2] : (o = () => G().has(e.connectorId), t[1] = e.connectorId, t[2] = o);
            let c = r(o),
                l = P(),
                d = r(U),
                {
                    connectorHealthByConnectorId: f,
                    isLoading: p
                } = T(d, `draft`),
                m;
            t[3] !== f || t[4] !== e.connectorId ? (m = f.get(e.connectorId), t[3] = f, t[4] = e.connectorId, t[5] = m) : m = t[5];
            let g = m,
                _ = e.connectionType !== `end_user_connection`,
                b;
            t[6] !== g || t[7] !== l || t[8] !== d || t[9] !== n || t[10] !== p || t[11] !== c || t[12] !== _ || t[13] !== e ? (b = async () => {
                if (p || c) return;
                if (K(e.connectorId, !0), g?.link_id != null && (g.link_status === `missing_actions` || g.link_status === `needs_reconnect` || x(g))) {
                    let t = v();
                    D({
                        actionType: O.CONNECTOR_RECONNECT,
                        actionResult: k.STARTED,
                        actionInstanceId: t.actionInstanceId,
                        source: j.CONNECTOR_DETAIL,
                        connector: {
                            connectorId: e.connectorId,
                            linkId: g.link_id
                        }
                    });
                    try {
                        await w({
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
                            request: t()
                        })
                    } catch (r) {
                        let i = r;
                        D({
                            actionType: O.CONNECTOR_RECONNECT,
                            actionResult: k.FAILED,
                            source: j.CONNECTOR_DETAIL,
                            connector: {
                                connectorId: e.connectorId,
                                linkId: g.link_id
                            },
                            request: t({
                                error: i
                            })
                        }), u().danger(n.formatMessage(X.reconnectError), {
                            error: i
                        })
                    }
                    K(e.connectorId, !1);
                    return
                }
                let t, r = v();
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
                    t = await l(e.connectorId)
                } catch (t) {
                    let i = t;
                    D({
                        actionType: O.APP_CONNECT,
                        actionResult: k.FAILED,
                        source: j.CONNECTOR_DETAIL,
                        connector: {
                            connectorId: e.connectorId
                        },
                        request: r({
                            error: i
                        })
                    }), u().danger(n.formatMessage(X.connectError), {
                        error: i
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
                _ && y.setTool({
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
                    request: r()
                }), K(e.connectorId, !1)
            }, t[6] = g, t[7] = l, t[8] = d, t[9] = n, t[10] = p, t[11] = c, t[12] = _, t[13] = e, t[14] = b) : b = t[14];
            let S = b,
                C;
            return t[15] !== S || t[16] !== c ? (C = {
                isCreatingLink: c,
                createLinkForTool: S
            }, t[15] = S, t[16] = c, t[17] = C) : C = t[17], C
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
//# sourceMappingURL=4614e65c-i6mnablgkxyx5qol.js.map
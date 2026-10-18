import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B6 as t,
    J6 as n,
    J8 as r,
    JK as i,
    Y8 as a,
    fU as o,
    i5 as s,
    pU as c,
    qK as l,
    r5 as u
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as d,
    Ln as f,
    Rn as p,
    wn as m,
    zn as h
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Jit as g,
    Kit as _,
    ZVt as v,
    dzt as y,
    eit as b,
    nHt as x,
    qit as S,
    qrt as C,
    vzt as w,
    wzt as T,
    xHt as E
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    a as D,
    o as O,
    s as k,
    t as A,
    x as j
} from "./4285e798-mb6k70xz6sq0hl39.js";
import {
    n as M,
    t as N
} from "./8e88ec39-jrrevbpz199sv0ky.js";
import {
    n as P,
    t as F
} from "./126cbe2b-bjxqgcqvvujayiah.js";
import {
    a as I,
    i as L,
    n as R,
    o as z,
    t as B
} from "./caea150f-k6gh2rxc9k6djrd0.js";
import {
    n as V,
    t as H
} from "./11d5ad21-lv1z4lwt9f7xdwl5.js";

function U() {
    return w().currentGpt.id
}
var W, G, K, q, J, Y, X, Z = e((() => {
        W = m(), x(), A(), T(), _(), C(), i(), t(), u(), c(), a(), p(), F(), G = l(() => n(new Set)), K = (e, t) => {
            G.set(n => {
                let r = new Set([...n].filter(t => t !== e));
                return t && r.add(e), r
            })
        }, q = e => {
            "use forget";
            let t = (0, W.c)(18),
                n = h(),
                i;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = r(), t[0] = i) : i = t[0];
            let a = i,
                c;
            t[1] === e.connectorId ? c = t[2] : (c = () => G().has(e.connectorId), t[1] = e.connectorId, t[2] = c);
            let l = s(c),
                u = P(),
                d = s(U),
                {
                    connectorHealthByConnectorId: f,
                    isLoading: p
                } = g(d, `draft`),
                m;
            t[3] !== f || t[4] !== e.connectorId ? (m = f.get(e.connectorId), t[3] = f, t[4] = e.connectorId, t[5] = m) : m = t[5];
            let _ = m,
                v = e.connectionType !== `end_user_connection`,
                x;
            t[6] !== _ || t[7] !== u || t[8] !== d || t[9] !== n || t[10] !== p || t[11] !== l || t[12] !== v || t[13] !== e ? (x = async () => {
                if (p || l) return;
                if (K(e.connectorId, !0), _?.link_id != null && (_.link_status === `missing_actions` || _.link_status === `needs_reconnect` || S(_))) {
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
                        await b({
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
                        let i = r;
                        D({
                            actionType: O.CONNECTOR_RECONNECT,
                            actionResult: k.FAILED,
                            source: j.CONNECTOR_DETAIL,
                            connector: {
                                connectorId: e.connectorId,
                                linkId: _.link_id
                            },
                            request: t({
                                error: i
                            })
                        }), o().danger(n.formatMessage(X.reconnectError), {
                            error: i
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
                    }), o().danger(n.formatMessage(X.connectError), {
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
                v && y.setTool({
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
            }, t[6] = _, t[7] = u, t[8] = d, t[9] = n, t[10] = p, t[11] = l, t[12] = v, t[13] = e, t[14] = x) : x = t[14];
            let C = x,
                w;
            return t[15] !== C || t[16] !== l ? (w = {
                isCreatingLink: l,
                createLinkForTool: C
            }, t[15] = C, t[16] = l, t[17] = w) : w = t[17], w
        }, J = (e, t, n) => {
            e.setQueryData(v(t, `draft`), e => e.map(e => e.connector_id === n ? {
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
            e.setQueryData(v(t, `draft`), e => [...e, {
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
//# sourceMappingURL=4614e65c-bq4p7p8g99nvrk0z.js.map
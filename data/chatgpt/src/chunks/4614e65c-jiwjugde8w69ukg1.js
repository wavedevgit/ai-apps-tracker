import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A5 as t,
    RU as n,
    b5 as r,
    b8 as i,
    bq as a,
    f8 as o,
    k5 as s,
    x5 as c,
    yq as l,
    zU as u
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    Bn as d,
    Ln as f,
    Rn as p,
    wn as m,
    zn as h
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Jit as g,
    Xit as _,
    Yit as v,
    Yrt as y,
    ZVt as b,
    dzt as x,
    nHt as S,
    nit as C,
    vzt as w,
    wzt as T,
    xHt as E
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    a as D,
    o as O,
    s as k,
    t as A,
    x as j
} from "./4285e798-jv6dhkkljo44ybd3.js";
import {
    n as M,
    t as N
} from "./8e88ec39-jrrevbpz199sv0ky.js";
import {
    n as P,
    t as F
} from "./126cbe2b-chvr2ztoiecxnbb9.js";
import {
    a as I,
    i as L,
    n as R,
    o as z,
    t as B
} from "./caea150f-h1up7coju4t5gkol.js";
import {
    n as V,
    t as H
} from "./11d5ad21-lcbjeqjm48rbbibg.js";

function U() {
    return w().currentGpt.id
}
var W, G, K, q, J, Y, X, Z = e((() => {
        W = m(), S(), A(), T(), g(), y(), a(), o(), s(), u(), c(), p(), F(), G = l(() => i(new Set)), K = (e, t) => {
            G.set(n => {
                let r = new Set([...n].filter(t => t !== e));
                return t && r.add(e), r
            })
        }, q = e => {
            "use forget";
            let i = (0, W.c)(18),
                a = h(),
                o;
            i[0] === Symbol.for(`react.memo_cache_sentinel`) ? (o = r(), i[0] = o) : o = i[0];
            let s = o,
                c;
            i[1] === e.connectorId ? c = i[2] : (c = () => G().has(e.connectorId), i[1] = e.connectorId, i[2] = c);
            let l = t(c),
                u = P(),
                d = t(U),
                {
                    connectorHealthByConnectorId: f,
                    isLoading: p
                } = _(d, `draft`),
                m;
            i[3] !== f || i[4] !== e.connectorId ? (m = f.get(e.connectorId), i[3] = f, i[4] = e.connectorId, i[5] = m) : m = i[5];
            let g = m,
                y = e.connectionType !== `end_user_connection`,
                b;
            i[6] !== g || i[7] !== u || i[8] !== d || i[9] !== a || i[10] !== p || i[11] !== l || i[12] !== y || i[13] !== e ? (b = async () => {
                if (p || l) return;
                if (K(e.connectorId, !0), g?.link_id != null && (g.link_status === `missing_actions` || g.link_status === `needs_reconnect` || v(g))) {
                    let t = E();
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
                        await C({
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
                        }), n().danger(a.formatMessage(X.reconnectError), {
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
                    }), n().danger(a.formatMessage(X.connectError), {
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
                y && x.setTool({
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
            }, i[6] = g, i[7] = u, i[8] = d, i[9] = a, i[10] = p, i[11] = l, i[12] = y, i[13] = e, i[14] = b) : b = i[14];
            let S = b,
                w;
            return i[15] !== S || i[16] !== l ? (w = {
                isCreatingLink: l,
                createLinkForTool: S
            }, i[15] = S, i[16] = l, i[17] = w) : w = i[17], w
        }, J = (e, t, n) => {
            e.setQueryData(b(t, `draft`), e => e.map(e => e.connector_id === n ? {
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
            e.setQueryData(b(t, `draft`), e => [...e, {
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
//# sourceMappingURL=4614e65c-jiwjugde8w69ukg1.js.map
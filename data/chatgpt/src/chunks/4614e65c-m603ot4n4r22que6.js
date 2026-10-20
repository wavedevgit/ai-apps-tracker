import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    C5 as t,
    C8 as n,
    M5 as r,
    N5 as i,
    RU as a,
    bq as o,
    h8 as s,
    w5 as c,
    yq as l,
    zU as u
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as d,
    Ln as f,
    Rn as p,
    wn as m,
    zn as h
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Dzt as g,
    Qit as _,
    Xit as v,
    Zit as y,
    Zrt as b,
    aHt as x,
    eHt as S,
    iit as C,
    mzt as w,
    wHt as T,
    xzt as E
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    a as D,
    o as O,
    s as k,
    t as A,
    x as j
} from "./4285e798-gdl12dl0yi3x94rm.js";
import {
    n as M,
    t as N
} from "./8e88ec39-ly2p52dkrwo6r0lt.js";
import {
    n as P,
    t as F
} from "./126cbe2b-gabi8c2u4fs4fzc3.js";
import {
    a as I,
    i as L,
    n as R,
    o as z,
    t as B
} from "./caea150f-mz22dbwgqm52sawr.js";
import {
    n as V,
    t as H
} from "./11d5ad21-ma066ruaee1b9osf.js";

function U() {
    return E().currentGpt.id
}
var W, G, K, q, J, Y, X, Z = e((() => {
        W = m(), x(), A(), g(), v(), b(), o(), s(), r(), u(), c(), p(), F(), G = l(() => n(new Set)), K = (e, t) => {
            G.set(n => {
                let r = new Set([...n].filter(t => t !== e));
                return t && r.add(e), r
            })
        }, q = e => {
            "use forget";
            let n = (0, W.c)(18),
                r = h(),
                o;
            n[0] === Symbol.for(`react.memo_cache_sentinel`) ? (o = t(), n[0] = o) : o = n[0];
            let s = o,
                c;
            n[1] === e.connectorId ? c = n[2] : (c = () => G().has(e.connectorId), n[1] = e.connectorId, n[2] = c);
            let l = i(c),
                u = P(),
                d = i(U),
                {
                    connectorHealthByConnectorId: f,
                    isLoading: p
                } = _(d, `draft`),
                m;
            n[3] !== f || n[4] !== e.connectorId ? (m = f.get(e.connectorId), n[3] = f, n[4] = e.connectorId, n[5] = m) : m = n[5];
            let g = m,
                v = e.connectionType !== `end_user_connection`,
                b;
            n[6] !== g || n[7] !== u || n[8] !== d || n[9] !== r || n[10] !== p || n[11] !== l || n[12] !== v || n[13] !== e ? (b = async () => {
                if (p || l) return;
                if (K(e.connectorId, !0), g?.link_id != null && (g.link_status === `missing_actions` || g.link_status === `needs_reconnect` || y(g))) {
                    let t = T();
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
                    } catch (n) {
                        let i = n;
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
                        }), a().danger(r.formatMessage(X.reconnectError), {
                            error: i
                        })
                    }
                    K(e.connectorId, !1);
                    return
                }
                let t, n = T();
                D({
                    actionType: O.APP_CONNECT,
                    actionResult: k.STARTED,
                    actionInstanceId: n.actionInstanceId,
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
                        request: n({
                            error: i
                        })
                    }), a().danger(r.formatMessage(X.connectError), {
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
                        request: n()
                    }), K(e.connectorId, !1);
                    return
                }
                v && w.setTool({
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
                    request: n()
                }), K(e.connectorId, !1)
            }, n[6] = g, n[7] = u, n[8] = d, n[9] = r, n[10] = p, n[11] = l, n[12] = v, n[13] = e, n[14] = b) : b = n[14];
            let x = b,
                S;
            return n[15] !== x || n[16] !== l ? (S = {
                isCreatingLink: l,
                createLinkForTool: x
            }, n[15] = x, n[16] = l, n[17] = S) : S = n[17], S
        }, J = (e, t, n) => {
            e.setQueryData(S(t, `draft`), e => e.map(e => e.connector_id === n ? {
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
            e.setQueryData(S(t, `draft`), e => [...e, {
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
//# sourceMappingURL=4614e65c-m603ot4n4r22que6.js.map
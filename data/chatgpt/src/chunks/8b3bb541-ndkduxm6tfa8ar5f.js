import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as n,
    IU as r,
    Iv as i,
    LU as a,
    S5 as o,
    aO as s,
    bA as c,
    bh as l,
    iO as u,
    j5 as d,
    mA as f,
    tv as p,
    wh as m,
    x5 as h
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as g,
    Ln as _,
    Nn as v,
    Rn as y,
    Vn as b,
    p as x,
    s as S,
    wn as C,
    zn as w
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $it as T,
    HFn as E,
    Kst as D,
    PIt as O,
    RIt as k,
    RTn as A,
    VIt as j,
    Wst as M,
    XIt as N,
    Xit as P,
    Zit as F,
    _Ht as I,
    bzt as L,
    eat as R,
    gLt as z,
    hFn as B,
    iLt as ee,
    jFn as te,
    jLt as ne,
    kLt as re,
    m_t as ie,
    mzt as V,
    szt as H,
    x_t as ae,
    yFn as oe,
    zTn as se
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    bx as ce,
    xx as le
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    ar as ue,
    ir as de
} from "./c2675c8c-oz03twoan08d72ud.js";
import {
    mt as fe,
    pt as pe
} from "./c470f5ab-jwd0o7jx9i9say9k.js";
import {
    U as me,
    c as he,
    h as ge,
    st as _e,
    u as ve
} from "./1c919af1-ll7qduuzf4eqlddy.js";
import {
    l as ye
} from "./74a883a0-0bl4w620esk73bmz.js";
import {
    b as be,
    d as U,
    t as xe,
    x as Se
} from "./707eab0c-iv8ek9kc5qu6c0ky.js";
import {
    t as Ce
} from "./a35abcd6-byh6ggz75l0wrrkr.js";
import {
    a as we,
    n as W,
    t as Te
} from "./18093cad-n00fxxrbtwbr8v1m.js";
import {
    f as Ee,
    o as De,
    t as Oe
} from "./5579e947-iy03q325vx43bflj.js";
import {
    a as G,
    o as K,
    s as ke,
    t as Ae,
    x as je
} from "./4285e798-jmweay4m4zvq8jkw.js";
import {
    At as Me,
    Ct as Ne,
    E as Pe,
    J as Fe,
    T as Ie,
    ct as Le,
    d as Re,
    dt as ze,
    f as Be,
    ft as Ve,
    g as He,
    h as Ue,
    kt as We,
    lt as Ge,
    m as Ke,
    pt as qe,
    q as Je,
    u as Ye,
    w as Xe
} from "./8e7d0a25-5w3ub90bjwjvii11.js";
import {
    n as Ze,
    t as Qe
} from "./43332649-c72puvefq51arpt7.js";
import {
    n as $e,
    t as et
} from "./11d5ad21-ep4ifhoy6pf78fxz.js";
import {
    a as tt,
    t as nt
} from "./f24939f4-pal5isn6y62twbdg.js";
import {
    n as rt,
    t as it
} from "./d103a138-nc4i4rbpi23ruvpx.js";
import {
    n as at,
    t as ot
} from "./39921a74-ksii0a15ht2c1ftw.js";
import {
    i as st,
    n as ct,
    r as lt,
    t as ut
} from "./b1291236-b2ulwafjl897v3a5.js";

function dt() {
    return De()
}

function ft() {
    return Oe.closeBuilderModal()
}

function pt() {
    return ft
}

function mt(e) {
    e || Oe.closeBuilderModal()
}
var ht, gt, _t, vt, yt, bt = e((() => {
        ht = C(), n(), Te(), gt = t(b()), Ee(), _t = g(), vt = () => {
            "use forget";
            let e = (0, ht.c)(8),
                t = d(dt),
                n = t?.maxWidth ?? (t?.contentClassName == null ? 280 : void 0),
                r;
            e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = [], e[0] = r) : r = e[0], (0, gt.useEffect)(pt, r);
            let i = t != null,
                a = t?.contentClassName,
                o = t?.content ?? null,
                s;
            e[1] !== n || e[2] !== a || e[3] !== o ? (s = (0, _t.jsx)(W.Content, {
                className: a,
                maxWidth: n,
                children: o
            }), e[1] = n, e[2] = a, e[3] = o, e[4] = s) : s = e[4];
            let c;
            return e[5] !== i || e[6] !== s ? (c = (0, _t.jsx)(W, {
                open: i,
                onOpenChange: mt,
                children: s
            }), e[5] = i, e[6] = s, e[7] = c) : c = e[7], c
        }, yt = (e, {
            contentClassName: t,
            maxWidth: n,
            onClose: r
        } = {}) => {
            Oe.openBuilderModal({
                content: e,
                contentClassName: t,
                maxWidth: n,
                onClose: r
            })
        }
    })),
    xt, St, Ct, wt, Tt, Et, Dt = e((() => {
        oe(), i(), se(), E(), o(), xt = e => e ? e instanceof Map ? e : new Map(Object.entries(e)) : new Map, St = e => e instanceof Map || typeof e == `object` && !!e, Ct = () => h().getQueryData(te(!0, p, A.HERMES)), wt = () => xt(Ct()), Tt = () => {
            let e = Ct();
            return e === void 0 ? null : xt(e)
        }, Et = async e => {
            let t = await h().fetchQuery({
                ...B(!0, A.HERMES, p),
                staleTime: e?.staleTime,
                retry: e?.retry
            });
            return St(t) ? xt(t) : new Map
        }
    }));

function Ot(e) {
    return e.connectorId
}

function kt() {
    let {
        currentGpt: e,
        previewGpt: t
    } = V();
    return new Set((t ?? e).tools.connectors.map(Ot))
}

function At(e) {
    let {
        connectorTool: t
    } = e;
    return t.connectorId
}

function jt(e) {
    return e && e.is_enabled !== !1 && e.visibility !== `private` && ne(e)
}
var Mt, q, Nt, Pt, Ft, It, Lt, Rt, zt, Bt = e((() => {
        Mt = C(), $e(), f(), re(), P(), Qe(), L(), k(), le(), D(), n(), ue(), xe(), be(), S(), y(), q = g(), Nt = e => e.connectionType !== `end_user_connection` && e.connectionType !== `none`, Pt = ({
            connectorTools: e,
            linksByConnectorId: t,
            allowFirstAvailableLinkForEndUserConnectors: n = !1
        }) => e.map(e => ({
            connectorTool: e,
            sharedLink: T({
                sharedLinks: (t?.get(e.connectorId) ?? []).filter(F),
                persistedSharedLinkId: e.connectionType === `end_user_connection` ? null : e.linkId ?? e.link.id,
                allowFirstAvailableLink: n && e.connectionType === `end_user_connection`
            })
        })), Ft = e => e.some(e => !e.sharedLink), It = e => {
            "use forget";
            let t = (0, Mt.c)(22),
                {
                    allowReconnect: n,
                    connectorItems: r,
                    newConnectors: i
                } = e,
                a = n === void 0 || n,
                o;
            t[0] === i ? o = t[1] : (o = i === void 0 ? [] : i, t[0] = i, t[1] = o);
            let s = o,
                c = d(kt),
                l;
            if (t[2] !== c || t[3] !== r) {
                let e;
                t[5] === c ? e = t[6] : (e = e => !c.has(e), t[5] = c, t[6] = e), l = r.map(At).filter(e), t[2] = c, t[3] = r, t[4] = l
            } else l = t[4];
            let u = l,
                f;
            t[7] === u ? f = t[8] : (f = {
                additionalConnectorDisplayIds: u
            }, t[7] = u, t[8] = f);
            let {
                connectorById: p,
                createLink: m
            } = Ze(f), h;
            if (t[9] !== a || t[10] !== p || t[11] !== r || t[12] !== m || t[13] !== s) {
                let e;
                t[15] !== a || t[16] !== p || t[17] !== m || t[18] !== s ? (e = (e, t) => {
                    let {
                        connectorTool: n,
                        sharedLink: r
                    } = e;
                    return (0, q.jsx)(Rt, {
                        connectorById: p,
                        connectorTool: n,
                        createLink: m,
                        allowReconnect: a,
                        sharedLink: r,
                        isNew: s.includes(n)
                    }, `${n.connectorId}:${t}`)
                }, t[15] = a, t[16] = p, t[17] = m, t[18] = s, t[19] = e) : e = t[19], h = r.map(e), t[9] = a, t[10] = p, t[11] = r, t[12] = m, t[13] = s, t[14] = h
            } else h = t[14];
            let g;
            return t[20] === h ? g = t[21] : (g = (0, q.jsx)(`div`, {
                children: h
            }), t[20] = h, t[21] = g), g
        }, Lt = () => {
            "use forget";
            let e = (0, Mt.c)(1),
                t = c(),
                n;
            return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, q.jsx)(`div`, {
                className: `bg-token-bg-status-warning rounded-md px-3 py-2.5`,
                children: (0, q.jsx)(v, {
                    ...t ? zt.missingConnectionWarningUseForEveryone : zt.missingConnectionWarning
                })
            }), e[0] = n) : n = e[0], n
        }, Rt = e => {
            "use forget";
            let t = (0, Mt.c)(44),
                {
                    allowReconnect: n,
                    connectorById: r,
                    connectorTool: i,
                    createLink: a,
                    isNew: o,
                    sharedLink: s
                } = e,
                c;
            t[0] !== r || t[1] !== i.connectorId ? (c = r.get(i.connectorId) ?? null, t[0] = r, t[1] = i.connectorId, t[2] = c) : c = t[2];
            let l = c,
                {
                    data: u,
                    isLoading: d
                } = j(i.connectorId),
                f;
            t[3] === u ? f = t[4] : (f = u === void 0 ? [] : u, t[3] = u, t[4] = f);
            let p = f,
                m;
            t[5] !== s?.owner_profile?.email || t[6] !== s?.owner_profile?.name ? (m = s?.owner_profile?.email?.trim() || s?.owner_profile?.name?.trim() || null, t[5] = s?.owner_profile?.email, t[6] = s?.owner_profile?.name, t[7] = m) : m = t[7];
            let h = m,
                g;
            if (t[8] !== p || t[9] !== i.allowedActions) {
                let e;
                t[11] === p ? e = t[12] : (e = e => p.find(t => {
                    let {
                        name: n
                    } = t;
                    return n === e
                }), t[11] = p, t[12] = e), g = i.allowedActions.map(e).some(jt), t[8] = p, t[9] = i.allowedActions, t[10] = g
            } else g = t[10];
            let _ = g,
                y = s != null,
                b;
            t[13] !== i.connectorId || t[14] !== a ? (b = {
                mutationFn: () => a(i.connectorId)
            }, t[13] = i.connectorId, t[14] = a, t[15] = b) : b = t[15];
            let {
                mutateAsync: S,
                isPending: C
            } = x(b), w;
            t[16] !== i || t[17] !== S ? (w = async () => {
                let e = await S();
                e && H.setTool({
                    type: `connector`,
                    config: {
                        ...i,
                        connectionType: z(e.auth_type) ?? `oauth`,
                        link: e,
                        linkId: e.id
                    }
                })
            }, t[16] = i, t[17] = S, t[18] = w) : w = t[18];
            let T = w,
                E = `${i.connectorId}:${i.linkId??i.link?.id}`,
                D;
            t[19] === l ? D = t[20] : (D = (0, q.jsx)(et, {
                connector: l,
                className: `size-5 shrink-0`,
                iconClassName: `h-5 w-5`,
                borderStyle: `hairline`
            }), t[19] = l, t[20] = D);
            let O = l?.name ?? i.connectorId,
                k;
            t[21] === O ? k = t[22] : (k = (0, q.jsx)(`span`, {
                className: `truncate font-medium`,
                children: O
            }), t[21] = O, t[22] = k);
            let A;
            t[23] !== p || t[24] !== _ || t[25] !== d ? (A = d ? (0, q.jsx)(M, {
                className: `mt-0.5 h-[16px] w-[80px] rounded-md`
            }) : p.length > 0 ? (0, q.jsx)(`span`, {
                className: `text-token-text-secondary shrink-0`,
                children: _ ? (0, q.jsx)(v, {
                    ...zt.readAndWrite
                }) : (0, q.jsx)(v, {
                    ...zt.readOnly
                })
            }) : null, t[23] = p, t[24] = _, t[25] = d, t[26] = A) : A = t[26];
            let N;
            t[27] === o ? N = t[28] : (N = o && (0, q.jsx)(de, {
                color: `info`,
                size: `sm`,
                variant: `soft`,
                children: (0, q.jsx)(v, {
                    ...zt.newBadge
                })
            }), t[27] = o, t[28] = N);
            let P;
            t[29] !== k || t[30] !== A || t[31] !== N ? (P = (0, q.jsx)(`div`, {
                className: `flex min-w-0 flex-1 gap-1.5`,
                children: (0, q.jsxs)(`div`, {
                    className: `flex w-full flex-wrap gap-1.5`,
                    children: [k, A, N]
                })
            }), t[29] = k, t[30] = A, t[31] = N, t[32] = P) : P = t[32];
            let F;
            t[33] !== n || t[34] !== T || t[35] !== y || t[36] !== C || t[37] !== h ? (F = y ? (0, q.jsx)(`div`, {
                className: `text-emphasis max-w-[40%] min-w-0 shrink-0 truncate text-end`,
                children: h || (0, q.jsxs)(`div`, {
                    className: `flex min-w-0 items-center justify-end gap-1`,
                    children: [(0, q.jsx)(ce, {
                        "aria-hidden": !0,
                        className: `text-token-text-primary h-4 w-4 shrink-0`
                    }), (0, q.jsx)(`span`, {
                        className: `truncate`,
                        children: (0, q.jsx)(v, {
                            ...zt.connectedSharedConnection
                        })
                    })]
                })
            }) : C ? (0, q.jsx)(Se, {}) : n ? (0, q.jsx)(U, {
                type: `button`,
                color: `info`,
                onClick: T,
                size: `xs`,
                variant: `ghost`,
                opticallyAlign: `end`,
                className: `-my-1 font-normal`,
                children: (0, q.jsx)(v, {
                    ...zt.connectAccount
                })
            }) : null, t[33] = n, t[34] = T, t[35] = y, t[36] = C, t[37] = h, t[38] = F) : F = t[38];
            let I;
            return t[39] !== P || t[40] !== F || t[41] !== E || t[42] !== D ? (I = (0, q.jsxs)(`div`, {
                className: `flex gap-2 border-t py-2`,
                children: [D, P, F]
            }, E), t[39] = P, t[40] = F, t[41] = E, t[42] = D, t[43] = I) : I = t[43], I
        }, zt = _({
            missingConnectionWarning: {
                id: `Hermes.GptStudio.Builder.SharePersonalConnectorsModal.missingConnectionWarning`,
                defaultMessage: `Connect all agent-owned apps to continue.`
            },
            missingConnectionWarningUseForEveryone: {
                id: `Hermes.GptStudio.Builder.SharePersonalConnectorsModal.missingConnectionWarningUseForEveryone`,
                defaultMessage: `Connect all shared connections to continue.`
            },
            readAndWrite: {
                id: `Hermes.GptStudio.Builder.SharePersonalConnectorsModal.readAndWrite`,
                defaultMessage: `Read & write`
            },
            readOnly: {
                id: `Hermes.GptStudio.Builder.SharePersonalConnectorsModal.readOnly`,
                defaultMessage: `Read-only`
            },
            newBadge: {
                id: `Hermes.GptStudio.Builder.SharedConnectorConsent.newBadge`,
                defaultMessage: `New`
            },
            connectAccount: {
                id: `Hermes.GptStudio.Builder.SharePersonalConnectorsModal.connectAccount`,
                defaultMessage: `Connect`
            },
            connectedSharedConnection: {
                id: `gptStudio.publishSharedConnectorsConsentModal.connectedSharedConnection`,
                defaultMessage: `Connected`
            }
        })
    })),
    Vt, Ht, Ut, Wt = e((() => {
        Vt = `_7EJ_5q_FixIssuesIcon`, Ht = `_7EJ_5q_FixIssuesItem`, Ut = {
            FixIssuesIcon: Vt,
            FixIssuesItem: Ht
        }
    }));

function Gt(e) {
    return e.label
}

function Kt(e) {
    return (0, J.jsxs)(`li`, {
        className: Ut.FixIssuesItem,
        children: [e.icon === `slack` ? (0, J.jsx)(pe, {
            className: Ut.FixIssuesIcon
        }) : (0, J.jsx)(he, {
            className: Ut.FixIssuesIcon
        }), (0, J.jsx)(`span`, {
            children: e.label
        })]
    }, e.key)
}
var qt, Jt, J, Yt, Xt, Zt, Qt, $t = e((() => {
        qt = C(), Ae(), $e(), re(), Qe(), nt(), L(), fe(), a(), xe(), Ce(), be(), Te(), S(), Jt = t(b()), y(), Wt(), J = g(), Yt = e => {
            "use forget";
            let t = (0, qt.c)(9),
                {
                    analyticsSource: n,
                    missingConnectorTools: r,
                    publishChecklistItems: i,
                    isPublished: a,
                    onSuccessfulConnection: o
                } = e,
                s = n === void 0 ? je.PUBLISH_MODAL : n,
                c = a ? Qt.mustFixIssuesBeforeUpdating : Qt.mustFixIssuesBeforeCreating,
                l;
            t[0] === c ? l = t[1] : (l = (0, J.jsx)(v, {
                ...c
            }), t[0] = c, t[1] = l);
            let u = a ? `update` : `create`,
                d;
            return t[2] !== s || t[3] !== r || t[4] !== o || t[5] !== i || t[6] !== l || t[7] !== u ? (d = (0, J.jsx)(Xt, {
                missingConnectorTools: r,
                publishChecklistItems: i,
                title: l,
                fixInChatUpdateType: u,
                onSuccessfulConnection: o,
                analyticsSource: s
            }), t[2] = s, t[3] = r, t[4] = o, t[5] = i, t[6] = l, t[7] = u, t[8] = d) : d = t[8], d
        }, Xt = e => {
            "use forget";
            let t = (0, qt.c)(35),
                {
                    analyticsSource: n,
                    missingConnectorTools: i,
                    publishChecklistItems: a,
                    title: o,
                    fixInChatUpdateType: s,
                    onSuccessfulConnection: c
                } = e,
                l = n === void 0 ? je.PUBLISH_MODAL : n,
                u = w(),
                {
                    close: d
                } = we(),
                [f, p] = (0, Jt.useState)(!1),
                m = i.length > 0,
                h = a.length > 0,
                g;
            t[0] === a ? g = t[1] : (g = a.map(Gt), t[0] = a, t[1] = g);
            let _ = g,
                y = _.length > 0,
                b;
            t[2] !== l || t[3] !== _ || t[4] !== d || t[5] !== s || t[6] !== u ? (b = async () => {
                p(!0);
                let e = I();
                G({
                    actionType: K.PUBLISH_FIX_IN_CHAT,
                    actionResult: ke.STARTED,
                    actionInstanceId: e.actionInstanceId,
                    source: l,
                    publish: {
                        checklistItemCount: _.length
                    }
                });
                try {
                    await tt({
                        kind: `publish_checklist`,
                        checklistItems: _,
                        updateType: s
                    })
                } catch (t) {
                    let n = t;
                    G({
                        actionType: K.PUBLISH_FIX_IN_CHAT,
                        actionResult: ke.FAILED,
                        source: l,
                        publish: {
                            checklistItemCount: _.length
                        },
                        request: e({
                            error: n
                        })
                    }), p(!1), r().danger(u.formatMessage(Qt.fixInChatFailed));
                    return
                }
                G({
                    actionType: K.PUBLISH_FIX_IN_CHAT,
                    actionResult: ke.SUCCEEDED,
                    source: l,
                    publish: {
                        checklistItemCount: _.length
                    },
                    request: e()
                }), p(!1), d()
            }, t[2] = l, t[3] = _, t[4] = d, t[5] = s, t[6] = u, t[7] = b) : b = t[7];
            let x = b,
                S;
            t[8] === o ? S = t[9] : (S = (0, J.jsx)(W.Title, {
                className: `m-0 text-base font-medium`,
                children: o
            }), t[8] = o, t[9] = S);
            let C;
            t[10] !== l || t[11] !== m || t[12] !== i || t[13] !== c ? (C = m && (0, J.jsxs)(`div`, {
                children: [(0, J.jsx)(`div`, {
                    className: `text-md py-2.5 font-medium`,
                    children: (0, J.jsx)(v, {
                        ...Qt.missingConnections
                    })
                }), (0, J.jsx)(`ul`, {
                    children: i.map(e => (0, J.jsx)(Zt, {
                        connectorTool: e,
                        missingConnectorCount: i.length,
                        onSuccessfulConnection: c,
                        analyticsSource: l
                    }, e.connectorId))
                })]
            }), t[10] = l, t[11] = m, t[12] = i, t[13] = c, t[14] = C) : C = t[14];
            let T;
            t[15] !== h || t[16] !== a ? (T = h && (0, J.jsx)(`div`, {
                children: (0, J.jsx)(`ul`, {
                    children: a.map(Kt)
                })
            }), t[15] = h, t[16] = a, t[17] = T) : T = t[17];
            let E;
            t[18] !== x || t[19] !== y || t[20] !== u || t[21] !== f ? (E = y && (0, J.jsx)(U, {
                color: `primary`,
                variant: `solid`,
                pill: !0,
                size: `lg`,
                loading: f,
                onClick: x,
                className: `flex-1`,
                block: !0,
                children: u.formatMessage(Qt.fixInChat)
            }), t[18] = x, t[19] = y, t[20] = u, t[21] = f, t[22] = E) : E = t[22];
            let D;
            t[23] === u ? D = t[24] : (D = u.formatMessage(Qt.close), t[23] = u, t[24] = D);
            let O;
            t[25] === D ? O = t[26] : (O = (0, J.jsx)(`div`, {
                className: `pt-2`,
                children: (0, J.jsx)(W.Close, {
                    children: (0, J.jsx)(U, {
                        color: `primary`,
                        variant: `outline`,
                        pill: !0,
                        size: `lg`,
                        block: !0,
                        className: `flex-1`,
                        children: D
                    })
                })
            }), t[25] = D, t[26] = O);
            let k;
            t[27] !== E || t[28] !== O ? (k = (0, J.jsxs)(`div`, {
                children: [E, O]
            }), t[27] = E, t[28] = O, t[29] = k) : k = t[29];
            let A;
            return t[30] !== k || t[31] !== S || t[32] !== C || t[33] !== T ? (A = (0, J.jsxs)(`div`, {
                className: `flex flex-col gap-4 p-5`,
                "data-width-400": !0,
                children: [S, C, T, k]
            }), t[30] = k, t[31] = S, t[32] = C, t[33] = T, t[34] = A) : A = t[34], A
        }, Zt = e => {
            "use forget";
            let t = (0, qt.c)(25),
                {
                    analyticsSource: n,
                    connectorTool: r,
                    missingConnectorCount: i,
                    onSuccessfulConnection: a
                } = e,
                {
                    connectorById: o,
                    createLink: s
                } = Ze(),
                c;
            t[0] !== o || t[1] !== r.connectorId ? (c = o.get(r.connectorId) ?? null, t[0] = o, t[1] = r.connectorId, t[2] = c) : c = t[2];
            let l = c,
                u;
            t[3] !== r.connectorId || t[4] !== s ? (u = {
                mutationFn: () => s(r.connectorId)
            }, t[3] = r.connectorId, t[4] = s, t[5] = u) : u = t[5];
            let {
                mutateAsync: d,
                isPending: f,
                isSuccess: p,
                data: m
            } = x(u), h;
            t[6] !== n || t[7] !== r || t[8] !== d || t[9] !== i || t[10] !== a ? (h = async () => {
                let e = I(),
                    t = {
                        connector: {
                            connectorId: r.connectorId
                        },
                        publish: {
                            missingConnectorCount: i
                        }
                    };
                G({
                    actionType: K.PUBLISH_MISSING_CONNECTION_CONNECT,
                    actionResult: ke.STARTED,
                    actionInstanceId: e.actionInstanceId,
                    source: n,
                    ...t
                });
                let o;
                try {
                    o = await d()
                } catch (r) {
                    let i = r;
                    throw G({
                        actionType: K.PUBLISH_MISSING_CONNECTION_CONNECT,
                        actionResult: ke.FAILED,
                        source: n,
                        ...t,
                        request: e({
                            error: i
                        })
                    }), i
                }
                if (!o) {
                    G({
                        actionType: K.PUBLISH_MISSING_CONNECTION_CONNECT,
                        actionResult: ke.CANCELED,
                        source: n,
                        ...t,
                        request: e()
                    });
                    return
                }
                H.setTool({
                    type: `connector`,
                    config: {
                        ...r,
                        connectionType: z(o.auth_type) ?? `oauth`,
                        link: o,
                        linkId: o.id
                    }
                }), G({
                    actionType: K.PUBLISH_MISSING_CONNECTION_CONNECT,
                    actionResult: ke.SUCCEEDED,
                    source: n,
                    connector: {
                        connectorId: r.connectorId,
                        linkId: o.id
                    },
                    publish: t.publish,
                    request: e()
                }), a()
            }, t[6] = n, t[7] = r, t[8] = d, t[9] = i, t[10] = a, t[11] = h) : h = t[11];
            let g = h,
                _;
            t[12] === l ? _ = t[13] : (_ = (0, J.jsx)(et, {
                connector: l,
                className: `size-5 shrink-0`,
                iconClassName: `size-5`,
                borderStyle: `hairline`
            }), t[12] = l, t[13] = _);
            let y = l?.name ?? r.connectorId,
                b;
            t[14] === y ? b = t[15] : (b = (0, J.jsx)(`span`, {
                className: `min-w-0 flex-1 truncate`,
                children: y
            }), t[14] = y, t[15] = b);
            let S;
            t[16] !== m || t[17] !== g || t[18] !== f || t[19] !== p ? (S = p && m ? (0, J.jsx)(`span`, {
                className: `font-normal`,
                children: (0, J.jsx)(v, {
                    ...Qt.connected
                })
            }) : f ? (0, J.jsx)(Se, {}) : (0, J.jsx)(U, {
                color: `info`,
                onClick: g,
                size: `xs`,
                variant: `ghost`,
                opticallyAlign: `end`,
                loading: f,
                className: `-my-0.5 font-normal`,
                children: (0, J.jsx)(v, {
                    ...Qt.connect
                })
            }), t[16] = m, t[17] = g, t[18] = f, t[19] = p, t[20] = S) : S = t[20];
            let C;
            return t[21] !== _ || t[22] !== b || t[23] !== S ? (C = (0, J.jsxs)(`li`, {
                className: Ut.FixIssuesItem,
                children: [_, b, S]
            }), t[21] = _, t[22] = b, t[23] = S, t[24] = C) : C = t[24], C
        }, Qt = _({
            mustFixIssuesBeforeCreating: {
                id: `Hermes.GptStudio.Builder.PublishFixIssuesModalContent.mustFixIssuesBeforeCreating`,
                defaultMessage: `Review these issues before creating:`
            },
            mustFixIssuesBeforeUpdating: {
                id: `Hermes.GptStudio.Builder.PublishFixIssuesModalContent.mustFixIssuesToContinue`,
                defaultMessage: `Review these issues before updating:`
            },
            missingConnections: {
                id: `Hermes.GptStudio.Builder.PublishFixIssuesModalContent.missingConnections`,
                defaultMessage: `Missing connections`
            },
            close: {
                id: `Hermes.GptStudio.Builder.PublishFixIssuesModalContent.close`,
                defaultMessage: `Close`
            },
            fixInChat: {
                id: `Hermes.GptStudio.Builder.PublishFixIssuesModalContent.fixInChat`,
                defaultMessage: `Fix for me`
            },
            fixInChatFailed: {
                id: `Hermes.GptStudio.Builder.PublishFixIssuesModalContent.fixInChatFailed`,
                defaultMessage: `Couldn't send to chat. Try again.`
            },
            connect: {
                id: `Hermes.GptStudio.Builder.PublishFixIssuesModalContent.connect`,
                defaultMessage: `Connect`
            },
            connected: {
                id: `Hermes.GptStudio.Builder.PublishFixIssuesModalContent.connected`,
                defaultMessage: `Connected`
            }
        })
    })),
    en, Y, tn, nn, rn = e((() => {
        en = C(), Ae(), $e(), re(), Qe(), L(), xe(), Ce(), Te(), S(), y(), Y = g(), tn = e => {
            "use forget";
            let t = (0, en.c)(35),
                {
                    connectorTool: n,
                    onSuccessfulConnection: r
                } = e,
                {
                    connectorById: i,
                    createLink: a
                } = Ze(),
                o;
            t[0] !== i || t[1] !== n.connectorId ? (o = i.get(n.connectorId) ?? null, t[0] = i, t[1] = n.connectorId, t[2] = o) : o = t[2];
            let s = o,
                c;
            t[3] !== n.connectorId || t[4] !== a ? (c = {
                mutationFn: () => a(n.connectorId)
            }, t[3] = n.connectorId, t[4] = a, t[5] = c) : c = t[5];
            let {
                mutateAsync: l,
                isPending: u
            } = x(c), d;
            t[6] !== n || t[7] !== l || t[8] !== r ? (d = async () => {
                let e = I(),
                    t = {
                        connector: {
                            connectorId: n.connectorId
                        },
                        publish: {
                            missingConnectorCount: 1
                        }
                    };
                G({
                    actionType: K.PUBLISH_MISSING_CONNECTION_CONNECT,
                    actionResult: ke.STARTED,
                    actionInstanceId: e.actionInstanceId,
                    source: je.PUBLISH_MODAL,
                    ...t
                });
                let i;
                try {
                    i = await l()
                } catch (n) {
                    let r = n;
                    throw G({
                        actionType: K.PUBLISH_MISSING_CONNECTION_CONNECT,
                        actionResult: ke.FAILED,
                        source: je.PUBLISH_MODAL,
                        ...t,
                        request: e({
                            error: r
                        })
                    }), r
                }
                if (!i) {
                    G({
                        actionType: K.PUBLISH_MISSING_CONNECTION_CONNECT,
                        actionResult: ke.CANCELED,
                        source: je.PUBLISH_MODAL,
                        ...t,
                        request: e()
                    });
                    return
                }
                H.setTool({
                    type: `connector`,
                    config: {
                        ...n,
                        connectionType: z(i.auth_type) ?? `oauth`,
                        link: i,
                        linkId: i.id
                    }
                }), G({
                    actionType: K.PUBLISH_MISSING_CONNECTION_CONNECT,
                    actionResult: ke.SUCCEEDED,
                    source: je.PUBLISH_MODAL,
                    connector: {
                        connectorId: n.connectorId,
                        linkId: i.id
                    },
                    publish: t.publish,
                    request: e()
                }), r()
            }, t[6] = n, t[7] = l, t[8] = r, t[9] = d) : d = t[9];
            let f = d,
                p;
            t[10] === s ? p = t[11] : (p = (0, Y.jsx)(et, {
                connector: s,
                className: `size-10`,
                iconClassName: `size-10`,
                borderStyle: `hairline`
            }), t[10] = s, t[11] = p);
            let m;
            t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (m = (0, Y.jsx)(_e, {
                className: `absolute -inset-e-0.5 -bottom-0.5 size-5 rounded-full bg-red-400 p-1 text-white`
            }), t[12] = m) : m = t[12];
            let h;
            t[13] === p ? h = t[14] : (h = (0, Y.jsxs)(`div`, {
                className: `relative size-10`,
                children: [p, m]
            }), t[13] = p, t[14] = h);
            let g = s?.name ?? n.connectorId,
                _;
            t[15] === g ? _ = t[16] : (_ = (0, Y.jsx)(W.Title, {
                className: `text-base font-medium`,
                children: (0, Y.jsx)(v, {
                    ...nn.missingConnectionTitle,
                    values: {
                        connectorName: g
                    }
                })
            }), t[15] = g, t[16] = _);
            let y;
            t[17] === Symbol.for(`react.memo_cache_sentinel`) ? (y = (0, Y.jsx)(v, {
                ...nn.connect
            }), t[17] = y) : y = t[17];
            let b;
            t[18] !== f || t[19] !== u ? (b = (0, Y.jsx)(U, {
                color: `primary`,
                variant: `solid`,
                pill: !0,
                size: `lg`,
                loading: u,
                onClick: f,
                children: y
            }), t[18] = f, t[19] = u, t[20] = b) : b = t[20];
            let S;
            t[21] !== n.connectorId || t[22] !== r ? (S = () => {
                H.removeConnectorTool(n.connectorId), r()
            }, t[21] = n.connectorId, t[22] = r, t[23] = S) : S = t[23];
            let C;
            t[24] === Symbol.for(`react.memo_cache_sentinel`) ? (C = (0, Y.jsx)(v, {
                ...nn.removeApp
            }), t[24] = C) : C = t[24];
            let w;
            t[25] !== u || t[26] !== S ? (w = (0, Y.jsx)(U, {
                color: `danger`,
                variant: `outline`,
                pill: !0,
                size: `lg`,
                disabled: u,
                onClick: S,
                children: C
            }), t[25] = u, t[26] = S, t[27] = w) : w = t[27];
            let T;
            t[28] !== b || t[29] !== w ? (T = (0, Y.jsxs)(`div`, {
                className: `flex flex-col gap-2`,
                children: [b, w]
            }), t[28] = b, t[29] = w, t[30] = T) : T = t[30];
            let E;
            return t[31] !== T || t[32] !== h || t[33] !== _ ? (E = (0, Y.jsxs)(W.Body, {
                className: `flex flex-col gap-4`,
                "data-width-290": !0,
                children: [h, _, T]
            }), t[31] = T, t[32] = h, t[33] = _, t[34] = E) : E = t[34], E
        }, nn = _({
            missingConnectionTitle: {
                id: `Hermes.GptStudio.Builder.PublishMissingConnectionModalContent.missingConnectionTitle`,
                defaultMessage: `The {connectorName} connection is missing. Reconnect or remove the app to continue.`
            },
            connect: {
                id: `Hermes.GptStudio.Builder.PublishMissingConnectionModalContent.connect`,
                defaultMessage: `Connect`
            },
            removeApp: {
                id: `Hermes.GptStudio.Builder.PublishMissingConnectionModalContent.removeApp`,
                defaultMessage: `Remove app`
            }
        })
    })),
    an, on, sn, cn = e((() => {
        an = `hermes_read_config`, on = e => e?.capability == null ? `private` : e.store_visible ? `directory` : `workspace_link`, sn = ({
            workspaceId: e,
            storeVisible: t
        }) => ({
            workspace_id: e,
            capability: an,
            store_visible: t
        })
    }));

function ln() {
    return V().currentGpt
}

function un(e) {
    return e.connectionType === `end_user_connection`
}

function dn(e) {
    return e.sharedLink == null
}
var fn, pn, X, mn, hn, gn, _n = e((() => {
    fn = C(), Ae(), f(), cn(), P(), Bt(), L(), Ue(), k(), u(), n(), ue(), xe(), it(), Ce(), be(), Te(), ie(), pn = t(b()), y(), We(), ze(), X = g(), mn = e => {
        "use forget";
        let t = (0, fn.c)(19),
            {
                onConfirm: n,
                isConfirmPending: r,
                showEndUserConnectors: i
            } = e,
            a = w(),
            o = c(),
            l = d(ln),
            u = l.id,
            f = l.deployments.slack,
            p = He(),
            {
                data: m
            } = R(),
            {
                data: h,
                isLoading: g
            } = ee(u),
            _ = s(),
            [y, b] = (0, pn.useState)(!1),
            x = l.tools.connectors,
            S = x.filter(Nt),
            C = x.filter(un),
            {
                data: T,
                isLoading: E
            } = N(u),
            D;
        t[0] === T ? D = t[1] : (D = on(O(T)), t[0] = T, t[1] = D);
        let k = D,
            A = Ge({
                draftSlackDeployments: f,
                publishedBaselineGpt: h
            }),
            j = Le({
                draftConnectors: S,
                publishedBaselineGpt: h,
                treatDraftConnectorsAsShared: i
            }),
            M = A.length > 0 ? [...S] : [...j];
        i && (M.push(...C), j.push(...C));
        let P = j.length > 0 ? f.filter(Me) : A,
            F = Pt({
                connectorTools: M,
                linksByConnectorId: m,
                allowFirstAvailableLinkForEndUserConnectors: !0
            }),
            I = F.filter(dn).length,
            L = Ft(F),
            z = g || E,
            B = W,
            te = ae,
            ne = z ? (0, X.jsx)(`div`, {
                className: `flex h-[200px] items-center justify-center`,
                children: (0, X.jsx)(Se, {})
            }, `loading`) : (0, X.jsxs)(`div`, {
                className: `flex flex-col gap-4`,
                children: [(0, X.jsxs)(`div`, {
                    className: `flex flex-col gap-1.5`,
                    children: [(0, X.jsx)(W.Title, {
                        className: `ont-medium`,
                        children: (0, X.jsx)(v, {
                            ...gn.reviewAccessTitle
                        })
                    }), (0, X.jsx)(W.Description, {
                        className: `text-secondary text-sm`,
                        children: (0, X.jsx)(v, {
                            ...o ? gn.reviewAccessDescriptionUseForEveryone : gn.reviewAccessDescription
                        })
                    })]
                }), (0, X.jsx)(It, {
                    connectorItems: F,
                    newConnectors: j
                }), (0, X.jsxs)(`div`, {
                    children: [(0, X.jsx)(`div`, {
                        className: `py-2.5 font-medium`,
                        children: (0, X.jsx)(v, {
                            ...gn.channelsHeading
                        })
                    }), P.map((e, t) => (0, X.jsx)(hn, {
                        Icon: ge,
                        title: `#${Ne(e)}`,
                        isNew: A.includes(e)
                    }, t)), j.length > 0 && k !== `private` && (0, X.jsx)(hn, {
                        Icon: k === `directory` ? ye : me,
                        title: k === `directory` ? a.formatMessage(gn.workspaceDirectoryAccess, {
                            workspaceName: _
                        }) : a.formatMessage(gn.workspaceLinkChannel, {
                            workspaceName: _
                        }),
                        isNew: !1
                    })]
                }), (0, X.jsxs)(`div`, {
                    className: `-mb-2 flex w-full flex-col gap-4 pt-4`,
                    children: [L && (0, X.jsx)(Lt, {}), (0, X.jsx)(rt, {
                        checked: y,
                        label: (0, X.jsx)(v, {
                            ...gn.consentCheckboxLabel
                        }),
                        onCheckedChange: e => b(e)
                    })]
                })]
            }, `loaded-body`),
            re;
        t[2] !== te || t[3] !== ne ? (re = (0, X.jsx)(te, {
            children: ne
        }), t[2] = te, t[3] = ne, t[4] = re) : re = t[4];
        let ie;
        t[5] !== B.Body || t[6] !== re ? (ie = (0, X.jsx)(B.Body, {
            children: re
        }), t[5] = B.Body, t[6] = re, t[7] = ie) : ie = t[7];
        let V;
        t[8] !== y || t[9] !== L || t[10] !== r || t[11] !== p || t[12] !== I || t[13] !== n || t[14] !== z ? (V = !z && (0, X.jsx)(W.Footer, {
            className: `flex flex-col`,
            children: (0, X.jsxs)(`div`, {
                className: `flex w-full gap-2.5`,
                children: [(0, X.jsx)(W.Close, {
                    children: (0, X.jsx)(U, {
                        color: `primary`,
                        variant: `outline`,
                        size: `lg`,
                        pill: !0,
                        disabled: r,
                        className: `flex-1`,
                        children: (0, X.jsx)(v, {
                            ...gn.cancel
                        })
                    })
                }), (0, X.jsx)(U, {
                    className: `flex-1`,
                    color: `info`,
                    variant: `solid`,
                    size: `lg`,
                    pill: !0,
                    disabled: !y || L,
                    loading: r,
                    onClick: () => {
                        y && (G({
                            actionType: K.PUBLISH_SHARED_CONNECTOR_CONSENT_CONFIRM,
                            source: je.PUBLISH_MODAL,
                            publish: {
                                missingConnectorCount: I
                            }
                        }), n())
                    },
                    children: p ? (0, X.jsx)(v, {
                        ...gn.confirmUpdate
                    }) : (0, X.jsx)(v, {
                        ...gn.confirmCreate
                    })
                })]
            })
        }), t[8] = y, t[9] = L, t[10] = r, t[11] = p, t[12] = I, t[13] = n, t[14] = z, t[15] = V) : V = t[15];
        let H;
        return t[16] !== ie || t[17] !== V ? (H = (0, X.jsxs)(X.Fragment, {
            children: [ie, V]
        }), t[16] = ie, t[17] = V, t[18] = H) : H = t[18], H
    }, hn = e => {
        "use forget";
        let t = (0, fn.c)(10),
            {
                Icon: n,
                title: r,
                isNew: i
            } = e,
            a;
        t[0] === n ? a = t[1] : (a = (0, X.jsx)(n, {
            className: `h-5 w-5`
        }), t[0] = n, t[1] = a);
        let o;
        t[2] === r ? o = t[3] : (o = (0, X.jsx)(`span`, {
            className: `font-medium`,
            children: r
        }), t[2] = r, t[3] = o);
        let s;
        t[4] === i ? s = t[5] : (s = i && (0, X.jsx)(de, {
            color: `info`,
            size: `sm`,
            variant: `soft`,
            children: (0, X.jsx)(v, {
                ...gn.newBadge
            })
        }), t[4] = i, t[5] = s);
        let c;
        return t[6] !== a || t[7] !== o || t[8] !== s ? (c = (0, X.jsxs)(`div`, {
            className: `flex items-center gap-2 border-t py-2`,
            children: [a, o, s]
        }), t[6] = a, t[7] = o, t[8] = s, t[9] = c) : c = t[9], c
    }, gn = _({
        reviewAccessTitle: {
            id: `Hermes.GptStudio.Builder.SharePersonalConnectorsModal.reviewAccessTitle`,
            defaultMessage: `Review access before sharing`
        },
        reviewAccessDescription: {
            id: `Hermes.GptStudio.Builder.SharePersonalConnectorsModal.reviewAccessDescription`,
            defaultMessage: `People in the shared channels below may gain access to personal data or actions available through agent-owned connections.`
        },
        reviewAccessDescriptionUseForEveryone: {
            id: `Hermes.GptStudio.Builder.SharePersonalConnectorsModal.reviewAccessDescriptionUseForEveryone`,
            defaultMessage: `People in the shared channels below may gain access to personal data or actions available through this agent's connections.`
        },
        channelsHeading: {
            id: `Hermes.GptStudio.Builder.SharePersonalConnectorsModal.channelsHeading`,
            defaultMessage: `Shared channels`
        },
        consentCheckboxLabel: {
            id: `Hermes.GptStudio.Builder.SharePersonalConnectorsModal.consentCheckboxLabel`,
            defaultMessage: `I understand that people in the shared channels above may use this agent’s connections.`
        },
        workspaceLinkChannel: {
            id: `Hermes.GptStudio.Builder.SharePersonalConnectorsModal.workspaceLinkChannel`,
            defaultMessage: `Anyone at {workspaceName} with the link`
        },
        workspaceDirectoryAccess: {
            id: `Hermes.GptStudio.Builder.SharePersonalConnectorsModal.workspaceDirectoryAccess`,
            defaultMessage: `Publish to {workspaceName} directory`
        },
        newBadge: {
            id: `Hermes.GptStudio.Builder.SharePersonalConnectorsModal.newBadge`,
            defaultMessage: `New`
        },
        confirmCreate: {
            id: `Hermes.GptStudio.Builder.SharePersonalConnectorsModal.confirmCreate`,
            defaultMessage: `Confirm and create`
        },
        confirmUpdate: {
            id: `Hermes.GptStudio.Builder.SharePersonalConnectorsModal.confirmUpdate`,
            defaultMessage: `Confirm and update`
        },
        cancel: {
            id: `Hermes.GptStudio.Builder.SharePersonalConnectorsModal.cancel`,
            defaultMessage: `Cancel`
        }
    })
}));

function vn() {
    return new Set
}

function yn(e) {
    return (0, Z.jsx)(Dn, {
        connectorTool: e
    }, e.connectorId)
}

function bn(e) {
    return e && e.is_enabled !== !1 && e.visibility !== `private` && ne(e)
}
var xn, Sn, Z, Cn, wn, Tn, En, Dn, On, Q, kn = e((() => {
    xn = C(), m(), $e(), Dt(), Qe(), L(), f(), k(), fe(), D(), a(), xe(), Ce(), Te(), ot(), Sn = t(b()), y(), st(), ct(), re(), P(), Z = g(), Cn = 12e4, wn = e => {
        "use forget";
        let t = (0, xn.c)(6),
            {
                onContinue: n,
                endUserConnectors: r
            } = e;
        if (!c()) {
            let e;
            return t[0] !== r || t[1] !== n ? (e = (0, Z.jsx)(En, {
                onContinue: n,
                endUserConnectors: r
            }), t[0] = r, t[1] = n, t[2] = e) : e = t[2], e
        }
        let i;
        return t[3] !== r || t[4] !== n ? (i = (0, Z.jsx)(Tn, {
            onContinue: n,
            endUserConnectors: r
        }), t[3] = r, t[4] = n, t[5] = i) : i = t[5], i
    }, Tn = e => {
        "use forget";
        let t = (0, xn.c)(29),
            {
                onContinue: n,
                endUserConnectors: r
            } = e,
            i = r.length > 0,
            a;
        t[0] === i ? a = t[1] : (a = {
            enabled: i
        }, t[0] = i, t[1] = a);
        let {
            data: o
        } = R(a), [s, c] = (0, Sn.useState)(r), [l, u] = (0, Sn.useState)(vn), d;
        if (t[2] !== s || t[3] !== l) {
            let e;
            t[5] === l ? e = t[6] : (e = e => {
                let {
                    connectorId: t
                } = e;
                return !l.has(t)
            }, t[5] = l, t[6] = e), d = s.some(e), t[2] = s, t[3] = l, t[4] = d
        } else d = t[4];
        let f = d,
            p;
        t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (p = (0, Z.jsx)(pe, {
            className: `size-10`
        }), t[7] = p) : p = t[7];
        let m;
        t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (m = (0, Z.jsx)(W.Title, {
            className: `m-0 text-2xl leading-8 font-semibold`,
            children: (0, Z.jsx)(v, {
                ...Q.titleUseForEveryone
            })
        }), t[8] = m) : m = t[8];
        let h;
        t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (h = (0, Z.jsxs)(`div`, {
            className: `flex flex-col gap-6`,
            children: [p, (0, Z.jsxs)(`div`, {
                className: `flex flex-col gap-3`,
                children: [m, (0, Z.jsx)(W.Description, {
                    className: `text-secondary text-base leading-6`,
                    children: (0, Z.jsx)(v, {
                        ...Q.sharedConnectionExplanationUseForEveryone
                    })
                })]
            })]
        }), t[9] = h) : h = t[9];
        let g;
        if (t[10] !== o || t[11] !== s) {
            let e;
            t[13] === o ? e = t[14] : (e = e => (0, Z.jsx)(On, {
                connectorTool: e,
                sharedLinks: o?.get(e.connectorId) ?? [],
                onSharedConnectionChange: t => {
                    u(n => {
                        let r = new Set(n);
                        return t ? r.add(e.connectorId) : r.delete(e.connectorId), r
                    })
                },
                onRemoveConnector: () => {
                    c(t => t.filter(t => {
                        let {
                            connectorId: n
                        } = t;
                        return n !== e.connectorId
                    })), u(t => {
                        let n = new Set(t);
                        return n.delete(e.connectorId), n
                    })
                }
            }, e.connectorId), t[13] = o, t[14] = e), g = s.map(e), t[10] = o, t[11] = s, t[12] = g
        } else g = t[12];
        let _;
        t[15] === g ? _ = t[16] : (_ = (0, Z.jsx)(`div`, {
            className: `divide-token-border-light border-token-border-light divide-y border-y`,
            children: g
        }), t[15] = g, t[16] = _);
        let y;
        t[17] === n ? y = t[18] : (y = () => {
            n()
        }, t[17] = n, t[18] = y);
        let b;
        t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (b = (0, Z.jsx)(v, {
            ...Q.switchToSharedConnectionUseForEveryone
        }), t[19] = b) : b = t[19];
        let x;
        t[20] !== f || t[21] !== y ? (x = (0, Z.jsx)(U, {
            color: `primary`,
            variant: `solid`,
            size: `lg`,
            pill: !0,
            block: !0,
            disabled: f,
            onClick: y,
            children: b
        }), t[20] = f, t[21] = y, t[22] = x) : x = t[22];
        let S;
        t[23] === Symbol.for(`react.memo_cache_sentinel`) ? (S = (0, Z.jsx)(W.Close, {
            children: (0, Z.jsx)(U, {
                color: `primary`,
                variant: `outline`,
                size: `lg`,
                pill: !0,
                block: !0,
                children: (0, Z.jsx)(v, {
                    ...Q.notNow
                })
            })
        }), t[23] = S) : S = t[23];
        let C;
        t[24] === x ? C = t[25] : (C = (0, Z.jsxs)(`div`, {
            className: `flex flex-col gap-3 pt-1`,
            children: [x, S]
        }), t[24] = x, t[25] = C);
        let w;
        return t[26] !== C || t[27] !== _ ? (w = (0, Z.jsxs)(W.Body, {
            className: `flex flex-col gap-6`,
            children: [h, _, C]
        }), t[26] = C, t[27] = _, t[28] = w) : w = t[28], w
    }, En = e => {
        "use forget";
        let t = (0, xn.c)(18),
            {
                onContinue: n,
                endUserConnectors: r
            } = e,
            i;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, Z.jsx)(pe, {
            className: `size-10`
        }), t[0] = i) : i = t[0];
        let a;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, Z.jsx)(W.Title, {
            className: `m-0`,
            children: (0, Z.jsx)(v, {
                ...Q.title
            })
        }), t[1] = a) : a = t[1];
        let o;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, Z.jsx)(W.Description, {
            className: `text-token-text-secondary text-sm`,
            children: (0, Z.jsx)(v, {
                ...Q.sharedConnectionExplanation
            })
        }), t[2] = o) : o = t[2];
        let s;
        t[3] === r ? s = t[4] : (s = r.map(yn), t[3] = r, t[4] = s);
        let c;
        t[5] === s ? c = t[6] : (c = (0, Z.jsx)(`div`, {
            className: `border-token-border-light border-t`,
            children: s
        }), t[5] = s, t[6] = c);
        let l;
        t[7] === n ? l = t[8] : (l = () => {
            n()
        }, t[7] = n, t[8] = l);
        let u;
        t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, Z.jsx)(v, {
            ...Q.switchToSharedConnection
        }), t[9] = u) : u = t[9];
        let d;
        t[10] === l ? d = t[11] : (d = (0, Z.jsx)(U, {
            color: `primary`,
            variant: `solid`,
            size: `lg`,
            pill: !0,
            block: !0,
            onClick: l,
            children: u
        }), t[10] = l, t[11] = d);
        let f;
        t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (f = (0, Z.jsx)(W.Close, {
            children: (0, Z.jsx)(U, {
                color: `primary`,
                variant: `outline`,
                size: `lg`,
                pill: !0,
                block: !0,
                children: (0, Z.jsx)(v, {
                    ...Q.notNow
                })
            })
        }), t[12] = f) : f = t[12];
        let p;
        t[13] === d ? p = t[14] : (p = (0, Z.jsxs)(`div`, {
            className: `flex flex-col gap-3`,
            children: [d, f]
        }), t[13] = d, t[14] = p);
        let m;
        return t[15] !== p || t[16] !== c ? (m = (0, Z.jsxs)(W.Body, {
            className: `flex flex-col gap-4`,
            "data-width-400": !0,
            children: [i, a, o, c, p]
        }), t[15] = p, t[16] = c, t[17] = m) : m = t[17], m
    }, Dn = e => {
        "use forget";
        let t = (0, xn.c)(24),
            {
                connectorTool: n
            } = e,
            {
                connectorById: r
            } = Ze(),
            i;
        t[0] !== r || t[1] !== n.connectorId ? (i = r.get(n.connectorId) ?? null, t[0] = r, t[1] = n.connectorId, t[2] = i) : i = t[2];
        let a = i,
            {
                data: o,
                isLoading: s
            } = j(n.connectorId),
            c;
        t[3] === o ? c = t[4] : (c = o === void 0 ? [] : o, t[3] = o, t[4] = c);
        let l = c,
            u;
        if (t[5] !== l || t[6] !== n.allowedActions) {
            let e;
            t[8] === l ? e = t[9] : (e = e => l.find(t => {
                let {
                    name: n
                } = t;
                return n === e
            }), t[8] = l, t[9] = e), u = n.allowedActions.map(e).some(bn), t[5] = l, t[6] = n.allowedActions, t[7] = u
        } else u = t[7];
        let d = u,
            f;
        t[10] === a ? f = t[11] : (f = (0, Z.jsx)(et, {
            connector: a,
            className: `size-9`,
            borderStyle: `hairline`
        }), t[10] = a, t[11] = f);
        let p = a?.name ?? n.connectorId,
            m;
        t[12] === p ? m = t[13] : (m = (0, Z.jsx)(`div`, {
            className: `truncate font-medium`,
            children: p
        }), t[12] = p, t[13] = m);
        let h;
        t[14] !== d || t[15] !== s ? (h = (0, Z.jsx)(`div`, {
            className: `text-secondary`,
            children: s ? (0, Z.jsx)(M, {
                className: `mt-0.5 mb-0.75 h-[16px] w-[100px] rounded-md`
            }) : d ? (0, Z.jsx)(v, {
                ...Q.readAndWrite
            }) : (0, Z.jsx)(v, {
                ...Q.readOnly
            })
        }), t[14] = d, t[15] = s, t[16] = h) : h = t[16];
        let g;
        t[17] !== m || t[18] !== h ? (g = (0, Z.jsxs)(`div`, {
            className: `min-w-0 flex-1`,
            children: [m, h]
        }), t[17] = m, t[18] = h, t[19] = g) : g = t[19];
        let _;
        t[20] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = (0, Z.jsx)(`div`, {
            className: `text-secondary shrink-0`,
            children: (0, Z.jsx)(v, {
                ...Q.personal
            })
        }), t[20] = _) : _ = t[20];
        let y;
        return t[21] !== f || t[22] !== g ? (y = (0, Z.jsxs)(`div`, {
            className: `text-md flex items-center gap-3 py-3`,
            children: [f, g, _]
        }), t[21] = f, t[22] = g, t[23] = y) : y = t[23], y
    }, On = e => {
        "use forget";
        let t = (0, xn.c)(38),
            {
                connectorTool: n,
                sharedLinks: i,
                onSharedConnectionChange: a,
                onRemoveConnector: o
            } = e,
            s = w(),
            {
                connectorById: c
            } = Ze(),
            u = c.get(n.connectorId) ?? null,
            [d, f] = (0, Sn.useState)(!1),
            [p, m] = (0, Sn.useState)(!1),
            h = u?.name ?? n.connectorId,
            g, _, y;
        if (t[0] !== s || t[1] !== i) {
            let e = T({
                    sharedLinks: i.filter(F),
                    persistedSharedLinkId: null,
                    allowFirstAvailableLink: !0
                }),
                n = e?.owner_profile ?? null;
            g = n?.email?.trim() || n?.name?.trim() || e?.name?.trim() || s.formatMessage(Q.currentUserAccountUseForEveryone), _ = g, y = n?.picture?.trim() || null, t[0] = s, t[1] = i, t[2] = g, t[3] = _, t[4] = y
        } else g = t[2], _ = t[3], y = t[4];
        let b;
        t[5] !== _ || t[6] !== y ? (b = {
            name: _,
            picture: y
        }, t[5] = _, t[6] = y, t[7] = b) : b = t[7];
        let x = b,
            S;
        t[8] !== n || t[9] !== s || t[10] !== a ? (S = async () => {
            f(!0);
            try {
                let e = T({
                    sharedLinks: ((await Et({
                        staleTime: Cn,
                        retry: !1
                    })).get(n.connectorId) ?? []).filter(F),
                    persistedSharedLinkId: null,
                    allowFirstAvailableLink: !0
                });
                e ? (H.setTool({
                    type: `connector`,
                    config: {
                        ...n,
                        connectionType: z(e.auth_type) ?? `oauth`,
                        link: e,
                        linkId: e.id
                    }
                }), m(!0), a(!0)) : r().danger(s.formatMessage(Q.switchAppFailedUseForEveryone))
            } catch (e) {
                let t = e;
                r().danger(s.formatMessage(Q.switchAppFailedUseForEveryone), {
                    error: t
                })
            }
            f(!1)
        }, t[8] = n, t[9] = s, t[10] = a, t[11] = S) : S = t[11];
        let C = S,
            E;
        t[12] !== n || t[13] !== a ? (E = () => {
            H.setTool({
                type: `connector`,
                config: n
            }), m(!1), a(!1)
        }, t[12] = n, t[13] = a, t[14] = E) : E = t[14];
        let D = E,
            O;
        t[15] === x ? O = t[16] : (O = (0, Z.jsx)(l, {
            user: x,
            size: `large`
        }), t[15] = x, t[16] = O);
        let k;
        t[17] === Symbol.for(`react.memo_cache_sentinel`) ? (k = (0, Z.jsx)(v, {
            ...Q.connectedUseForEveryone
        }), t[17] = k) : k = t[17];
        let A;
        t[18] === Symbol.for(`react.memo_cache_sentinel`) ? (A = (0, Z.jsx)(v, {
            ...Q.connectionModeLabelUseForEveryone
        }), t[18] = A) : A = t[18];
        let j;
        t[19] !== D || t[20] !== C ? (j = e => {
            e ? C() : D()
        }, t[19] = D, t[20] = C, t[21] = j) : j = t[21];
        let M;
        t[22] !== d || t[23] !== p || t[24] !== j ? (M = (0, Z.jsx)(at, {
            className: `${ut.ForEveryoneSwitch} text-primary whitespace-nowrap`,
            label: A,
            labelPosition: `start`,
            checked: p,
            disabled: d,
            onCheckedChange: j
        }), t[22] = d, t[23] = p, t[24] = j, t[25] = M) : M = t[25];
        let N = U,
            P = s.formatMessage(Q.removeAppUseForEveryone, {
                connectorName: h
            }),
            I;
        t[26] !== n.connectorId || t[27] !== o ? (I = () => {
            H.removeConnectorTool(n.connectorId), o()
        }, t[26] = n.connectorId, t[27] = o, t[28] = I) : I = t[28];
        let L;
        t[29] === Symbol.for(`react.memo_cache_sentinel`) ? (L = (0, Z.jsx)(ve, {
            className: `size-5`
        }), t[29] = L) : L = t[29];
        let R;
        t[30] !== N || t[31] !== d || t[32] !== P || t[33] !== I ? (R = (0, Z.jsx)(N, {
            "aria-label": P,
            color: `primary`,
            variant: `ghost`,
            size: `sm`,
            uniform: !0,
            pill: !0,
            disabled: d,
            className: `shrink-0`,
            onClick: I,
            children: L
        }), t[30] = N, t[31] = d, t[32] = P, t[33] = I, t[34] = R) : R = t[34];
        let B;
        return t[35] !== M || t[36] !== R ? (B = (0, Z.jsxs)(Z.Fragment, {
            children: [M, R]
        }), t[35] = M, t[36] = R, t[37] = B) : B = t[37], (0, Z.jsx)(lt, {
            variant: `list`,
            size: `large`,
            avatar: (0, Z.jsxs)(`div`, {
                className: `relative size-12 shrink-0`,
                children: [O, (0, Z.jsx)(et, {
                    connector: u,
                    className: `bg-surface absolute -end-1 -bottom-1 size-6 p-0.5 shadow-(--shadow-100)`,
                    iconClassName: `bg-surface size-full rounded-full`,
                    borderStyle: `hairline`
                })]
            }),
            primaryLabel: g,
            secondaryLabel: k,
            endItem: B
        })
    }, Q = _({
        title: {
            id: `Hermes.GptStudio.Builder.SlackEndUserConnectorConflictModal.title`,
            defaultMessage: `Use agent-owned connections for Slack`
        },
        titleUseForEveryone: {
            id: `Hermes.GptStudio.Builder.SlackEndUserConnectorConflictModal.titleUseForEveryone`,
            defaultMessage: `Slack requires "Use for everyone"`
        },
        sharedConnectionExplanation: {
            id: `Hermes.GptStudio.Builder.SlackEndUserConnectorConflictModal.sharedConnectionExplanation`,
            defaultMessage: `An agent-owned connection lets the agent use a single account you provide instead of an end-user's account. Slack does not support end-user accounts.`
        },
        sharedConnectionExplanationUseForEveryone: {
            id: `Hermes.GptStudio.Builder.SlackEndUserConnectorConflictModal.sharedConnectionExplanationUseForEveryone`,
            defaultMessage: `Slack only supports shared connections. To avoid this agent failing because each person would need to sign in, turn on "Use for everyone" or remove the app from the agent.`
        },
        readAndWrite: {
            id: `Hermes.GptStudio.Builder.SlackEndUserConnectorConflictModal.readAndWrite`,
            defaultMessage: `Read & write`
        },
        readOnly: {
            id: `Hermes.GptStudio.Builder.SlackEndUserConnectorConflictModal.readOnly`,
            defaultMessage: `Read-only`
        },
        personal: {
            id: `Hermes.GptStudio.Builder.SlackEndUserConnectorConflictModal.personal`,
            defaultMessage: `End-user connection`
        },
        connectedUseForEveryone: {
            id: `Hermes.GptStudio.Builder.SlackEndUserConnectorConflictModal.connectedUseForEveryone`,
            defaultMessage: `Connected`
        },
        currentUserAccountUseForEveryone: {
            id: `Hermes.GptStudio.Builder.SlackEndUserConnectorConflictModal.currentUserAccountUseForEveryone`,
            defaultMessage: `Your account`
        },
        connectionModeLabelUseForEveryone: {
            id: `Hermes.GptStudio.Builder.SlackEndUserConnectorConflictModal.connectionModeLabelUseForEveryone`,
            defaultMessage: `Use for everyone`
        },
        switchToSharedConnection: {
            id: `Hermes.GptStudio.Builder.SlackEndUserConnectorConflictModal.switchToSharedConnection`,
            defaultMessage: `Switch to agent-owned connection`
        },
        switchToSharedConnectionUseForEveryone: {
            id: `Hermes.GptStudio.Builder.SlackEndUserConnectorConflictModal.switchToSharedConnectionUseForEveryone`,
            defaultMessage: `Continue`
        },
        removeAppUseForEveryone: {
            id: `Hermes.GptStudio.Builder.SlackEndUserConnectorConflictModal.removeAppUseForEveryone`,
            defaultMessage: `Remove {connectorName}`
        },
        switchAppFailedUseForEveryone: {
            id: `Hermes.GptStudio.Builder.SlackEndUserConnectorConflictModal.switchAppFailedUseForEveryone`,
            defaultMessage: `Couldn’t switch this app. Try again.`
        },
        notNow: {
            id: `Hermes.GptStudio.Builder.SlackEndUserConnectorConflictModal.notNow`,
            defaultMessage: `Not now`
        }
    })
}));

function An(e) {
    return e.connectionType === `end_user_connection`
}

function jn(e) {
    return [e.connectorId, e]
}
var Mn, Nn, $, Pn, Fn, In, Ln, Rn, zn, Bn, Vn = e((() => {
        Mn = C(), f(), qe(), re(), Dt(), Ie(), Bt(), Fe(), L(), a(), xe(), Te(), Nn = t(b()), y(), P(), We(), ze(), Ke(), $t(), rn(), _n(), kn(), $ = g(), Pn = 12e4, Fn = e => {
            "use forget";
            let t = (0, Mn.c)(51),
                {
                    missingConnectorTools: n,
                    publishChecklistItems: i,
                    publishOptionalItemsChecklist: a,
                    isPublished: o,
                    isPublishPending: s,
                    onPublish: l,
                    endUserConnectors: u,
                    alwaysPromptToPublish: d,
                    needsSharedConnectorConsent: f,
                    publishedBaselineGpt: p,
                    promptToPublishActionLabel: m,
                    promptToPublishDescription: h
                } = e,
                g;
            t[0] === a ? g = t[1] : (g = a === void 0 ? [] : a, t[0] = a, t[1] = g);
            let _ = g,
                v = s !== void 0 && s,
                y = d !== void 0 && d,
                b = w(),
                {
                    close: x
                } = we(),
                S;
            t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (S = c(), t[2] = S) : S = t[2];
            let C = S,
                [T] = (0, Nn.useState)(i),
                [E] = (0, Nn.useState)(_),
                [D] = (0, Nn.useState)(n),
                O = T.length === 1 && T[0].key === `switch-slack-connectors-to-shared-connection`,
                k = f || D.length + T.length + E.length > 0,
                [A, j] = (0, Nn.useState)(y || !k ? `prompt-to-publish` : T.length || E.length || D.length ? `show-issues` : `consent`),
                M;
            t[3] === u ? M = t[4] : (M = async () => {
                let e = await Et({
                        staleTime: Pn
                    }),
                    t = new Map(V().currentGpt.tools.connectors.filter(An).map(jn));
                u.forEach(n => {
                    let r = t.get(n.connectorId);
                    if (!r) return;
                    let i = (e.get(r.connectorId) ?? []).filter(F),
                        a = Rn({
                            currentToolConfig: r,
                            sharedLinks: i
                        });
                    a && H.setTool({
                        type: `connector`,
                        config: a
                    })
                })
            }, t[3] = u, t[4] = M);
            let N = M,
                P;
            t[5] !== x || t[6] !== b || t[7] !== O || t[8] !== l || t[9] !== N ? (P = async e => {
                let t = !1,
                    n = e?.shareSlackEndUserConnectors ?? O;
                try {
                    n && await N(), t = !0, x(), await l()
                } catch (e) {
                    let n = e;
                    t || r().danger(Je(n, b.formatMessage(Bn.shareConnectionsFailed), b.formatMessage))
                }
            }, t[5] = x, t[6] = b, t[7] = O, t[8] = l, t[9] = N, t[10] = P) : P = t[10];
            let I = P,
                L;
            t[11] !== I || t[12] !== f ? (L = async () => {
                if (f) {
                    j(`consent`);
                    return
                }
                await I()
            }, t[11] = I, t[12] = f, t[13] = L) : L = t[13];
            let R = L;
            if (A === `prompt-to-publish`) {
                let e;
                t[14] !== R || t[15] !== D || t[16] !== T.length || t[17] !== E ? (e = () => {
                    T.length || E.length || D.length ? j(`show-issues`) : R()
                }, t[14] = R, t[15] = D, t[16] = T.length, t[17] = E, t[18] = e) : e = t[18];
                let n;
                return t[19] !== v || t[20] !== m || t[21] !== h || t[22] !== e ? (n = (0, $.jsx)(zn, {
                    isUpdatePending: v,
                    actionLabel: m,
                    onUpdate: e,
                    description: h
                }, `continue-prompt`), t[19] = v, t[20] = m, t[21] = h, t[22] = e, t[23] = n) : n = t[23], n
            }
            if (A === `consent`) {
                let e;
                return t[24] !== I || t[25] !== v || t[26] !== O ? (e = (0, $.jsx)(mn, {
                    onConfirm: I,
                    isConfirmPending: v,
                    showEndUserConnectors: O
                }), t[24] = I, t[25] = v, t[26] = O, t[27] = e) : e = t[27], e
            }
            if (O) {
                let e;
                t[28] !== x || t[29] !== I || t[30] !== p ? (e = C ? async () => {
                    if (In(p) === 0) {
                        x();
                        return
                    }
                    if (Ln({
                            publishedBaselineGpt: p
                        })) {
                        j(`consent`);
                        return
                    }
                    await I({
                        shareSlackEndUserConnectors: !1
                    })
                }: () => j(`consent`), t[28] = x, t[29] = I, t[30] = p, t[31] = e) : e = t[31];
                let n;
                return t[32] !== u || t[33] !== e ? (n = (0, $.jsx)(wn, {
                    endUserConnectors: u,
                    onContinue: e
                }), t[32] = u, t[33] = e, t[34] = n) : n = t[34], n
            }
            if (!T.length && D.length === 1 && !E.length) {
                let e;
                return t[35] !== R || t[36] !== D[0] ? (e = (0, $.jsx)(tn, {
                    connectorTool: D[0],
                    onSuccessfulConnection: R
                }), t[35] = R, t[36] = D[0], t[37] = e) : e = t[37], e
            }
            let z;
            t[38] !== R || t[39] !== n || t[40] !== i.length || t[41] !== _ ? (z = () => {
                !i.length && !_.length && n.length === 1 && R()
            }, t[38] = R, t[39] = n, t[40] = i.length, t[41] = _, t[42] = z) : z = t[42];
            let B;
            return t[43] !== R || t[44] !== D || t[45] !== T || t[46] !== E || t[47] !== v || t[48] !== o || t[49] !== z ? (B = (0, $.jsx)(Yt, {
                missingConnectorTools: D,
                publishChecklistItems: T,
                publishOptionalItemsChecklist: E,
                isPublished: o,
                isPublishPending: v,
                onPublishAnyway: R,
                onSuccessfulConnection: z
            }), t[43] = R, t[44] = D, t[45] = T, t[46] = E, t[47] = v, t[48] = o, t[49] = z, t[50] = B) : B = t[50], B
        }, In = e => {
            let t = V().currentGpt;
            return Pe(Ve(t, e), Xe(t.id)).length
        }, Ln = ({
            publishedBaselineGpt: e
        }) => {
            let t = V().currentGpt,
                n = t.deployments.slack.some(Me),
                r = t.tools.connectors.some(Nt);
            return !n || !r ? !1 : Le({
                draftConnectors: t.tools.connectors,
                publishedBaselineGpt: e,
                treatDraftConnectorsAsShared: !0
            }).length > 0 || Ge({
                draftSlackDeployments: t.deployments.slack,
                publishedBaselineGpt: e
            }).length > 0
        }, Rn = ({
            currentToolConfig: e,
            sharedLinks: t
        }) => {
            let n = T({
                sharedLinks: t,
                persistedSharedLinkId: null,
                allowFirstAvailableLink: e.connectionType === `end_user_connection`
            });
            return n ? {
                ...e,
                connectionType: z(n.auth_type) ?? `none`,
                link: n,
                linkId: n.id
            } : null
        }, zn = e => {
            "use forget";
            let t = (0, Mn.c)(19),
                {
                    actionLabel: n,
                    description: r,
                    onUpdate: i,
                    isUpdatePending: a
                } = e,
                o = a !== void 0 && a,
                s;
            t[0] === r ? s = t[1] : (s = r ?? (0, $.jsx)(v, {
                ...Bn.applyChangesPrompt
            }), t[0] = r, t[1] = s);
            let c;
            t[2] === s ? c = t[3] : (c = (0, $.jsx)(W.Title, {
                className: `mb-2 text-base font-medium`,
                children: s
            }), t[2] = s, t[3] = c);
            let l;
            t[4] === n ? l = t[5] : (l = n ?? (0, $.jsx)(v, {
                ...Bn.update
            }), t[4] = n, t[5] = l);
            let u;
            t[6] !== o || t[7] !== i || t[8] !== l ? (u = (0, $.jsx)(U, {
                color: `info`,
                variant: `solid`,
                pill: !0,
                size: `lg`,
                onClick: i,
                loading: o,
                children: l
            }), t[6] = o, t[7] = i, t[8] = l, t[9] = u) : u = t[9];
            let d;
            t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, $.jsx)(v, {
                ...Bn.notNow
            }), t[10] = d) : d = t[10];
            let f;
            t[11] === o ? f = t[12] : (f = (0, $.jsx)(W.Close, {
                children: (0, $.jsx)(U, {
                    color: `primary`,
                    variant: `outline`,
                    pill: !0,
                    size: `lg`,
                    disabled: o,
                    children: d
                })
            }), t[11] = o, t[12] = f);
            let p;
            t[13] !== u || t[14] !== f ? (p = (0, $.jsxs)(`div`, {
                className: `flex flex-col gap-2`,
                children: [u, f]
            }), t[13] = u, t[14] = f, t[15] = p) : p = t[15];
            let m;
            return t[16] !== c || t[17] !== p ? (m = (0, $.jsxs)(W.Body, {
                className: `flex flex-col gap-4`,
                "data-width-290": !0,
                children: [c, p]
            }), t[16] = c, t[17] = p, t[18] = m) : m = t[18], m
        }, Bn = _({
            applyChangesPrompt: {
                id: `Hermes.GptStudio.Builder.PublishAndConsentModalContent.applyChangesPrompt`,
                defaultMessage: `To modify ChatGPT sharing, you’ll need to apply all pending changes.`
            },
            update: {
                id: `Hermes.GptStudio.Builder.PublishAndConsentModalContent.update`,
                defaultMessage: `Update`
            },
            notNow: {
                id: `Hermes.GptStudio.Builder.PublishAndConsentModalContent.notNow`,
                defaultMessage: `Not now`
            },
            shareConnectionsFailed: {
                id: `Hermes.GptStudio.Builder.PublishAndConsentModalContent.shareConnectionsFailed`,
                defaultMessage: `Couldn't update app connections. Try again.`
            }
        }), {
            ...Bn.update
        }, {
            ...Bn.applyChangesPrompt
        }
    })),
    Hn, Un, Wn = e((() => {
        Hn = `_2D_nW_PublishFlowModalContent`, Un = {
            PublishFlowModalContent: Hn
        }
    }));

function Gn() {
    return V().currentGpt
}

function Kn(e) {
    return e.connectionType === `end_user_connection`
}
var qn, Jn, Yn, Xn, Zn, Qn, $n, er = e((() => {
    qn = C(), Ae(), bt(), L(), n(), be(), y(), Vn(), Wn(), Ye(), Jn = g(), Yn = e => {
        yt((0, Jn.jsx)(Xn, {
            ...e
        }), {
            contentClassName: Un.PublishFlowModalContent
        })
    }, Xn = e => {
        "use forget";
        let t = (0, qn.c)(19),
            {
                onPublish: n,
                onPublishSucceeded: r,
                promptToPublish: i
            } = e,
            a = d(Gn),
            {
                isPending: o,
                publishCurrentDraft: s,
                subscribeToPublishLifecycle: c
            } = Re(),
            l = Be(),
            u;
        t[0] === a.tools.connectors ? u = t[1] : (u = a.tools.connectors.filter(Kn), t[0] = a.tools.connectors, t[1] = u);
        let f = u,
            {
                isPublishChecklistItemsLoading: p,
                isPublishPermissionsLoading: m,
                isPublishStateLoading: h,
                isUnpublishedCustomMcpEndUserConnectionPolicyLoading: g,
                isSharedConnectorPolicyCheckLoading: _,
                missingConnectorTools: v,
                needsSharedConnectorConsent: y,
                publishChecklistItems: b,
                publishOptionalItemsChecklist: x
            } = l,
            S = p || m || h || g || _,
            C;
        t[2] !== n || t[3] !== r || t[4] !== s || t[5] !== c ? (C = async () => {
            if (n != null) {
                await n();
                return
            }
            let e = !1,
                t = c(t => {
                    t.status === `succeeded` && (e = !0)
                });
            try {
                await s({
                    source: je.PUBLISH_MODAL
                })
            } catch (e) {
                let n = e;
                throw t(), n
            }
            t(), e && await r?.()
        }, t[2] = n, t[3] = r, t[4] = s, t[5] = c, t[6] = C) : C = t[6];
        let w = C,
            T;
        return t[7] !== f || t[8] !== w || t[9] !== S || t[10] !== o || t[11] !== v || t[12] !== y || t[13] !== i || t[14] !== b || t[15] !== l.isPublished || t[16] !== l.publishedBaselineGpt || t[17] !== x ? (T = (0, Jn.jsx)(Jn.Fragment, {
            children: S ? (0, Jn.jsx)(`div`, {
                className: `flex h-[200px] items-center justify-center`,
                children: (0, Jn.jsx)(Se, {})
            }, `loading`) : (0, Jn.jsx)(Fn, {
                missingConnectorTools: v,
                publishChecklistItems: b,
                publishOptionalItemsChecklist: x,
                isPublished: l.isPublished,
                isPublishPending: o,
                onPublish: w,
                endUserConnectors: f,
                needsSharedConnectorConsent: y,
                publishedBaselineGpt: l.publishedBaselineGpt,
                alwaysPromptToPublish: i != null,
                promptToPublishActionLabel: i?.actionLabel,
                promptToPublishDescription: i?.description
            }, `content`)
        }), t[7] = f, t[8] = w, t[9] = S, t[10] = o, t[11] = v, t[12] = y, t[13] = i, t[14] = b, t[15] = l.isPublished, t[16] = l.publishedBaselineGpt, t[17] = x, t[18] = T) : T = t[18], T
    }, Zn = ({
        formatMessage: e,
        lockedPublishState: t,
        publishCurrentDraftReadiness: n
    }) => {
        let {
            canBuild: r,
            canPublishFromMenu: i,
            isPublished: a,
            isWorkspacePermissionsLoading: o
        } = n, s = !o && !r ? e($n.publishPermissionRequired) : null, c = Qn(n);
        return {
            buttonText: e(t?.isPublished ?? a ? $n.update : $n.create),
            canPublishFromMenu: i,
            publishTooltip: s,
            shouldShowModal: c
        }
    }, Qn = ({
        canPublishFromMenu: e,
        missingConnectorTools: t,
        needsSharedConnectorConsent: n,
        publishChecklistItems: r,
        publishOptionalItemsChecklist: i
    }) => r.length > 0 || i.length > 0 && e || t.length > 0 || n, $n = _({
        create: {
            id: `Hermes.GptStudio.Builder.PublishHeaderSection.create`,
            defaultMessage: `Create`
        },
        update: {
            id: `Hermes.GptStudio.Builder.PublishHeaderSection.update`,
            defaultMessage: `Update`
        },
        publishPermissionRequired: {
            id: `Hermes.GptStudio.Builder.PublishHeaderSection.publishPermissionRequired`,
            defaultMessage: `You don't have permission to publish this agent to your workspace.`
        }
    })
}));
export {
    on as a, Xt as c, Tt as d, Et as f, yt as g, bt as h, Yn as i, $t as l, vt as m, Qn as n, sn as o, Dt as p, er as r, cn as s, Zn as t, wt as u
};
//# sourceMappingURL=8b3bb541-ndkduxm6tfa8ar5f.js.map
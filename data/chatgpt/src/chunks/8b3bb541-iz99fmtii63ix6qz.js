import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $D as n,
    C5 as r,
    Ch as i,
    Fv as a,
    N5 as o,
    QD as s,
    RU as c,
    cA as l,
    ev as u,
    h8 as d,
    mA as f,
    w5 as p,
    yh as m,
    zU as h
} from "./4813494d-dfpv67hlp00pbohr.js";
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
    Dzt as E,
    HIt as D,
    ILt as O,
    KIt as k,
    NPn as A,
    RLt as j,
    S_t as M,
    WPn as N,
    YIt as P,
    Yst as F,
    _Pn as I,
    eTn as L,
    eat as ee,
    fLt as te,
    iLt as ne,
    k_t as re,
    mzt as R,
    nat as ie,
    qst as ae,
    rat as oe,
    tTn as se,
    wHt as z,
    wLt as ce,
    xPn as le,
    xzt as ue
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Cx as de,
    Sx as fe
} from "./30901919-7dzdc1ou0jtwkwpt.js";
import {
    ar as pe,
    ir as me
} from "./c2675c8c-9bs3zsr3vq259es7.js";
import {
    mt as he,
    pt as ge
} from "./c470f5ab-d4g7lc53n1e1ao7o.js";
import {
    c as _e,
    dt as ve,
    h as ye,
    q as be,
    u as xe
} from "./1c919af1-n3qwx9w7ipxrf1ap.js";
import {
    l as Se
} from "./74a883a0-0bl4w620esk73bmz.js";
import {
    b as Ce,
    d as B,
    t as we,
    x as Te
} from "./707eab0c-iziu4upusihd9xbv.js";
import {
    t as Ee
} from "./a35abcd6-fl6iafxr1mqknzi0.js";
import {
    a as De,
    n as V,
    t as Oe
} from "./18093cad-gxacttrmb37lcogg.js";
import {
    f as ke,
    o as Ae,
    t as je
} from "./5579e947-d0fek7d0kja8srgk.js";
import {
    a as H,
    o as U,
    s as W,
    t as Me,
    x as Ne
} from "./4285e798-gdl12dl0yi3x94rm.js";
import {
    At as Pe,
    Ct as Fe,
    E as Ie,
    J as Le,
    T as Re,
    ct as ze,
    d as Be,
    dt as Ve,
    f as He,
    ft as Ue,
    g as We,
    h as Ge,
    kt as Ke,
    lt as qe,
    m as Je,
    pt as Ye,
    q as Xe,
    u as Ze,
    w as Qe
} from "./8e7d0a25-dv486t3dl7v5p6ha.js";
import {
    n as $e,
    t as et
} from "./43332649-o2md3i0fmv5sh32a.js";
import {
    n as tt,
    t as nt
} from "./11d5ad21-ma066ruaee1b9osf.js";
import {
    a as rt,
    t as it
} from "./f24939f4-pal5isn6y62twbdg.js";
import {
    n as at,
    t as ot
} from "./d103a138-lryg572uesizi4af.js";
import {
    n as st,
    t as ct
} from "./39921a74-cem7qiwklfuuy4oc.js";
import {
    i as lt,
    n as ut,
    r as dt,
    t as ft
} from "./b1291236-ll8n9pg345c2i0oi.js";

function pt() {
    return Ae()
}

function mt() {
    return je.closeBuilderModal()
}

function ht() {
    return mt
}

function gt(e) {
    e || je.closeBuilderModal()
}
var _t, vt, yt, bt, xt, St = e((() => {
        _t = C(), d(), Oe(), vt = t(b()), ke(), yt = g(), bt = () => {
            "use forget";
            let e = (0, _t.c)(8),
                t = o(pt),
                n = t?.maxWidth ?? (t?.contentClassName == null ? 280 : void 0),
                r;
            e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = [], e[0] = r) : r = e[0], (0, vt.useEffect)(ht, r);
            let i = t != null,
                a = t?.contentClassName,
                s = t?.content ?? null,
                c;
            e[1] !== n || e[2] !== a || e[3] !== s ? (c = (0, yt.jsx)(V.Content, {
                className: a,
                maxWidth: n,
                children: s
            }), e[1] = n, e[2] = a, e[3] = s, e[4] = c) : c = e[4];
            let l;
            return e[5] !== i || e[6] !== c ? (l = (0, yt.jsx)(V, {
                open: i,
                onOpenChange: gt,
                children: c
            }), e[5] = i, e[6] = c, e[7] = l) : l = e[7], l
        }, xt = (e, {
            contentClassName: t,
            maxWidth: n,
            onClose: r
        } = {}) => {
            je.openBuilderModal({
                content: e,
                contentClassName: t,
                maxWidth: n,
                onClose: r
            })
        }
    })),
    Ct, wt, Tt, Et, Dt, Ot, kt = e((() => {
        le(), a(), se(), N(), p(), Ct = e => e ? e instanceof Map ? e : new Map(Object.entries(e)) : new Map, wt = e => e instanceof Map || typeof e == `object` && !!e, Tt = () => r().getQueryData(A(!0, u, L.HERMES)), Et = () => Ct(Tt()), Dt = () => {
            let e = Tt();
            return e === void 0 ? null : Ct(e)
        }, Ot = async e => {
            let t = await r().fetchQuery({
                ...I(!0, L.HERMES, u),
                staleTime: e?.staleTime,
                retry: e?.retry
            });
            return wt(t) ? Ct(t) : new Map
        }
    }));

function At(e) {
    return e.connectorId
}

function jt() {
    let {
        currentGpt: e,
        previewGpt: t
    } = ue();
    return new Set((t ?? e).tools.connectors.map(At))
}

function Mt(e) {
    let {
        connectorTool: t
    } = e;
    return t.connectorId
}

function Nt(e) {
    return e && e.is_enabled !== !1 && e.visibility !== `private` && j(e)
}
var Pt, G, Ft, It, Lt, Rt, zt, Bt, Vt, Ht = e((() => {
        Pt = C(), tt(), l(), O(), T(), et(), E(), k(), de(), F(), d(), pe(), we(), Ce(), S(), y(), G = g(), Ft = e => e.connectionType !== `end_user_connection` && e.connectionType !== `none`, It = ({
            connectorTools: e,
            linksByConnectorId: t,
            allowFirstAvailableLinkForEndUserConnectors: n = !1
        }) => e.map(e => ({
            connectorTool: e,
            sharedLink: ie({
                sharedLinks: (t?.get(e.connectorId) ?? []).filter(ee),
                persistedSharedLinkId: e.connectionType === `end_user_connection` ? null : e.linkId ?? e.link.id,
                allowFirstAvailableLink: n && e.connectionType === `end_user_connection`
            })
        })), Lt = e => e.some(e => !e.sharedLink), Rt = e => {
            "use forget";
            let t = (0, Pt.c)(22),
                {
                    allowReconnect: n,
                    connectorItems: r,
                    newConnectors: i
                } = e,
                a = n === void 0 || n,
                s;
            t[0] === i ? s = t[1] : (s = i === void 0 ? [] : i, t[0] = i, t[1] = s);
            let c = s,
                l = o(jt),
                u;
            if (t[2] !== l || t[3] !== r) {
                let e;
                t[5] === l ? e = t[6] : (e = e => !l.has(e), t[5] = l, t[6] = e), u = r.map(Mt).filter(e), t[2] = l, t[3] = r, t[4] = u
            } else u = t[4];
            let d = u,
                f;
            t[7] === d ? f = t[8] : (f = {
                additionalConnectorDisplayIds: d
            }, t[7] = d, t[8] = f);
            let {
                connectorById: p,
                createLink: m
            } = $e(f), h;
            if (t[9] !== a || t[10] !== p || t[11] !== r || t[12] !== m || t[13] !== c) {
                let e;
                t[15] !== a || t[16] !== p || t[17] !== m || t[18] !== c ? (e = (e, t) => {
                    let {
                        connectorTool: n,
                        sharedLink: r
                    } = e;
                    return (0, G.jsx)(Bt, {
                        connectorById: p,
                        connectorTool: n,
                        createLink: m,
                        allowReconnect: a,
                        sharedLink: r,
                        isNew: c.includes(n)
                    }, `${n.connectorId}:${t}`)
                }, t[15] = a, t[16] = p, t[17] = m, t[18] = c, t[19] = e) : e = t[19], h = r.map(e), t[9] = a, t[10] = p, t[11] = r, t[12] = m, t[13] = c, t[14] = h
            } else h = t[14];
            let g;
            return t[20] === h ? g = t[21] : (g = (0, G.jsx)(`div`, {
                children: h
            }), t[20] = h, t[21] = g), g
        }, zt = () => {
            "use forget";
            let e = (0, Pt.c)(1),
                t = f(),
                n;
            return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, G.jsx)(`div`, {
                className: `bg-token-bg-status-warning rounded-md px-3 py-2.5`,
                children: (0, G.jsx)(v, {
                    ...t ? Vt.missingConnectionWarningUseForEveryone : Vt.missingConnectionWarning
                })
            }), e[0] = n) : n = e[0], n
        }, Bt = e => {
            "use forget";
            let t = (0, Pt.c)(44),
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
                } = P(i.connectorId),
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
                }), t[11] = p, t[12] = e), g = i.allowedActions.map(e).some(Nt), t[8] = p, t[9] = i.allowedActions, t[10] = g
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
                e && R.setTool({
                    type: `connector`,
                    config: {
                        ...i,
                        connectionType: ce(e.auth_type) ?? `oauth`,
                        link: e,
                        linkId: e.id
                    }
                })
            }, t[16] = i, t[17] = S, t[18] = w) : w = t[18];
            let T = w,
                E = `${i.connectorId}:${i.linkId??i.link?.id}`,
                D;
            t[19] === l ? D = t[20] : (D = (0, G.jsx)(nt, {
                connector: l,
                className: `size-5 shrink-0`,
                iconClassName: `h-5 w-5`,
                borderStyle: `hairline`
            }), t[19] = l, t[20] = D);
            let O = l?.name ?? i.connectorId,
                k;
            t[21] === O ? k = t[22] : (k = (0, G.jsx)(`span`, {
                className: `truncate font-medium`,
                children: O
            }), t[21] = O, t[22] = k);
            let A;
            t[23] !== p || t[24] !== _ || t[25] !== d ? (A = d ? (0, G.jsx)(ae, {
                className: `mt-0.5 h-[16px] w-[80px] rounded-md`
            }) : p.length > 0 ? (0, G.jsx)(`span`, {
                className: `text-token-text-secondary shrink-0`,
                children: _ ? (0, G.jsx)(v, {
                    ...Vt.readAndWrite
                }) : (0, G.jsx)(v, {
                    ...Vt.readOnly
                })
            }) : null, t[23] = p, t[24] = _, t[25] = d, t[26] = A) : A = t[26];
            let j;
            t[27] === o ? j = t[28] : (j = o && (0, G.jsx)(me, {
                color: `info`,
                size: `sm`,
                variant: `soft`,
                children: (0, G.jsx)(v, {
                    ...Vt.newBadge
                })
            }), t[27] = o, t[28] = j);
            let M;
            t[29] !== k || t[30] !== A || t[31] !== j ? (M = (0, G.jsx)(`div`, {
                className: `flex min-w-0 flex-1 gap-1.5`,
                children: (0, G.jsxs)(`div`, {
                    className: `flex w-full flex-wrap gap-1.5`,
                    children: [k, A, j]
                })
            }), t[29] = k, t[30] = A, t[31] = j, t[32] = M) : M = t[32];
            let N;
            t[33] !== n || t[34] !== T || t[35] !== y || t[36] !== C || t[37] !== h ? (N = y ? (0, G.jsx)(`div`, {
                className: `text-emphasis max-w-[40%] min-w-0 shrink-0 truncate text-end`,
                children: h || (0, G.jsxs)(`div`, {
                    className: `flex min-w-0 items-center justify-end gap-1`,
                    children: [(0, G.jsx)(fe, {
                        "aria-hidden": !0,
                        className: `text-token-text-primary h-4 w-4 shrink-0`
                    }), (0, G.jsx)(`span`, {
                        className: `truncate`,
                        children: (0, G.jsx)(v, {
                            ...Vt.connectedSharedConnection
                        })
                    })]
                })
            }) : C ? (0, G.jsx)(Te, {}) : n ? (0, G.jsx)(B, {
                type: `button`,
                color: `info`,
                onClick: T,
                size: `xs`,
                variant: `ghost`,
                opticallyAlign: `end`,
                className: `-my-1 font-normal`,
                children: (0, G.jsx)(v, {
                    ...Vt.connectAccount
                })
            }) : null, t[33] = n, t[34] = T, t[35] = y, t[36] = C, t[37] = h, t[38] = N) : N = t[38];
            let F;
            return t[39] !== M || t[40] !== N || t[41] !== E || t[42] !== D ? (F = (0, G.jsxs)(`div`, {
                className: `flex gap-2 border-t py-2`,
                children: [D, M, N]
            }, E), t[39] = M, t[40] = N, t[41] = E, t[42] = D, t[43] = F) : F = t[43], F
        }, Vt = _({
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
    Ut, Wt, Gt, Kt = e((() => {
        Ut = `_7EJ_5q_FixIssuesIcon`, Wt = `_7EJ_5q_FixIssuesItem`, Gt = {
            FixIssuesIcon: Ut,
            FixIssuesItem: Wt
        }
    }));

function qt(e) {
    return e.label
}

function Jt(e) {
    return (0, K.jsxs)(`li`, {
        className: Gt.FixIssuesItem,
        children: [e.icon === `slack` ? (0, K.jsx)(ge, {
            className: Gt.FixIssuesIcon
        }) : (0, K.jsx)(_e, {
            className: Gt.FixIssuesIcon
        }), (0, K.jsx)(`span`, {
            children: e.label
        })]
    }, e.key)
}
var Yt, Xt, K, Zt, Qt, $t, q, en = e((() => {
        Yt = C(), Me(), tt(), O(), et(), it(), E(), he(), h(), we(), Ee(), Ce(), Oe(), S(), Xt = t(b()), y(), Kt(), K = g(), Zt = e => {
            "use forget";
            let t = (0, Yt.c)(9),
                {
                    analyticsSource: n,
                    missingConnectorTools: r,
                    publishChecklistItems: i,
                    isPublished: a,
                    onSuccessfulConnection: o
                } = e,
                s = n === void 0 ? Ne.PUBLISH_MODAL : n,
                c = a ? q.mustFixIssuesBeforeUpdating : q.mustFixIssuesBeforeCreating,
                l;
            t[0] === c ? l = t[1] : (l = (0, K.jsx)(v, {
                ...c
            }), t[0] = c, t[1] = l);
            let u = a ? `update` : `create`,
                d;
            return t[2] !== s || t[3] !== r || t[4] !== o || t[5] !== i || t[6] !== l || t[7] !== u ? (d = (0, K.jsx)(Qt, {
                missingConnectorTools: r,
                publishChecklistItems: i,
                title: l,
                fixInChatUpdateType: u,
                onSuccessfulConnection: o,
                analyticsSource: s
            }), t[2] = s, t[3] = r, t[4] = o, t[5] = i, t[6] = l, t[7] = u, t[8] = d) : d = t[8], d
        }, Qt = e => {
            "use forget";
            let t = (0, Yt.c)(35),
                {
                    analyticsSource: n,
                    missingConnectorTools: r,
                    publishChecklistItems: i,
                    title: a,
                    fixInChatUpdateType: o,
                    onSuccessfulConnection: s
                } = e,
                l = n === void 0 ? Ne.PUBLISH_MODAL : n,
                u = w(),
                {
                    close: d
                } = De(),
                [f, p] = (0, Xt.useState)(!1),
                m = r.length > 0,
                h = i.length > 0,
                g;
            t[0] === i ? g = t[1] : (g = i.map(qt), t[0] = i, t[1] = g);
            let _ = g,
                y = _.length > 0,
                b;
            t[2] !== l || t[3] !== _ || t[4] !== d || t[5] !== o || t[6] !== u ? (b = async () => {
                p(!0);
                let e = z();
                H({
                    actionType: U.PUBLISH_FIX_IN_CHAT,
                    actionResult: W.STARTED,
                    actionInstanceId: e.actionInstanceId,
                    source: l,
                    publish: {
                        checklistItemCount: _.length
                    }
                });
                try {
                    await rt({
                        kind: `publish_checklist`,
                        checklistItems: _,
                        updateType: o
                    })
                } catch (t) {
                    let n = t;
                    H({
                        actionType: U.PUBLISH_FIX_IN_CHAT,
                        actionResult: W.FAILED,
                        source: l,
                        publish: {
                            checklistItemCount: _.length
                        },
                        request: e({
                            error: n
                        })
                    }), p(!1), c().danger(u.formatMessage(q.fixInChatFailed));
                    return
                }
                H({
                    actionType: U.PUBLISH_FIX_IN_CHAT,
                    actionResult: W.SUCCEEDED,
                    source: l,
                    publish: {
                        checklistItemCount: _.length
                    },
                    request: e()
                }), p(!1), d()
            }, t[2] = l, t[3] = _, t[4] = d, t[5] = o, t[6] = u, t[7] = b) : b = t[7];
            let x = b,
                S;
            t[8] === a ? S = t[9] : (S = (0, K.jsx)(V.Title, {
                className: `m-0 text-base font-medium`,
                children: a
            }), t[8] = a, t[9] = S);
            let C;
            t[10] !== l || t[11] !== m || t[12] !== r || t[13] !== s ? (C = m && (0, K.jsxs)(`div`, {
                children: [(0, K.jsx)(`div`, {
                    className: `text-md py-2.5 font-medium`,
                    children: (0, K.jsx)(v, {
                        ...q.missingConnections
                    })
                }), (0, K.jsx)(`ul`, {
                    children: r.map(e => (0, K.jsx)($t, {
                        connectorTool: e,
                        missingConnectorCount: r.length,
                        onSuccessfulConnection: s,
                        analyticsSource: l
                    }, e.connectorId))
                })]
            }), t[10] = l, t[11] = m, t[12] = r, t[13] = s, t[14] = C) : C = t[14];
            let T;
            t[15] !== h || t[16] !== i ? (T = h && (0, K.jsx)(`div`, {
                children: (0, K.jsx)(`ul`, {
                    children: i.map(Jt)
                })
            }), t[15] = h, t[16] = i, t[17] = T) : T = t[17];
            let E;
            t[18] !== x || t[19] !== y || t[20] !== u || t[21] !== f ? (E = y && (0, K.jsx)(B, {
                color: `primary`,
                variant: `solid`,
                pill: !0,
                size: `lg`,
                loading: f,
                onClick: x,
                className: `flex-1`,
                block: !0,
                children: u.formatMessage(q.fixInChat)
            }), t[18] = x, t[19] = y, t[20] = u, t[21] = f, t[22] = E) : E = t[22];
            let D;
            t[23] === u ? D = t[24] : (D = u.formatMessage(q.close), t[23] = u, t[24] = D);
            let O;
            t[25] === D ? O = t[26] : (O = (0, K.jsx)(`div`, {
                className: `pt-2`,
                children: (0, K.jsx)(V.Close, {
                    children: (0, K.jsx)(B, {
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
            t[27] !== E || t[28] !== O ? (k = (0, K.jsxs)(`div`, {
                children: [E, O]
            }), t[27] = E, t[28] = O, t[29] = k) : k = t[29];
            let A;
            return t[30] !== k || t[31] !== S || t[32] !== C || t[33] !== T ? (A = (0, K.jsxs)(`div`, {
                className: `flex flex-col gap-4 p-5`,
                "data-width-400": !0,
                children: [S, C, T, k]
            }), t[30] = k, t[31] = S, t[32] = C, t[33] = T, t[34] = A) : A = t[34], A
        }, $t = e => {
            "use forget";
            let t = (0, Yt.c)(25),
                {
                    analyticsSource: n,
                    connectorTool: r,
                    missingConnectorCount: i,
                    onSuccessfulConnection: a
                } = e,
                {
                    connectorById: o,
                    createLink: s
                } = $e(),
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
                let e = z(),
                    t = {
                        connector: {
                            connectorId: r.connectorId
                        },
                        publish: {
                            missingConnectorCount: i
                        }
                    };
                H({
                    actionType: U.PUBLISH_MISSING_CONNECTION_CONNECT,
                    actionResult: W.STARTED,
                    actionInstanceId: e.actionInstanceId,
                    source: n,
                    ...t
                });
                let o;
                try {
                    o = await d()
                } catch (r) {
                    let i = r;
                    throw H({
                        actionType: U.PUBLISH_MISSING_CONNECTION_CONNECT,
                        actionResult: W.FAILED,
                        source: n,
                        ...t,
                        request: e({
                            error: i
                        })
                    }), i
                }
                if (!o) {
                    H({
                        actionType: U.PUBLISH_MISSING_CONNECTION_CONNECT,
                        actionResult: W.CANCELED,
                        source: n,
                        ...t,
                        request: e()
                    });
                    return
                }
                R.setTool({
                    type: `connector`,
                    config: {
                        ...r,
                        connectionType: ce(o.auth_type) ?? `oauth`,
                        link: o,
                        linkId: o.id
                    }
                }), H({
                    actionType: U.PUBLISH_MISSING_CONNECTION_CONNECT,
                    actionResult: W.SUCCEEDED,
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
            t[12] === l ? _ = t[13] : (_ = (0, K.jsx)(nt, {
                connector: l,
                className: `size-5 shrink-0`,
                iconClassName: `size-5`,
                borderStyle: `hairline`
            }), t[12] = l, t[13] = _);
            let y = l?.name ?? r.connectorId,
                b;
            t[14] === y ? b = t[15] : (b = (0, K.jsx)(`span`, {
                className: `min-w-0 flex-1 truncate`,
                children: y
            }), t[14] = y, t[15] = b);
            let S;
            t[16] !== m || t[17] !== g || t[18] !== f || t[19] !== p ? (S = p && m ? (0, K.jsx)(`span`, {
                className: `font-normal`,
                children: (0, K.jsx)(v, {
                    ...q.connected
                })
            }) : f ? (0, K.jsx)(Te, {}) : (0, K.jsx)(B, {
                color: `info`,
                onClick: g,
                size: `xs`,
                variant: `ghost`,
                opticallyAlign: `end`,
                loading: f,
                className: `-my-0.5 font-normal`,
                children: (0, K.jsx)(v, {
                    ...q.connect
                })
            }), t[16] = m, t[17] = g, t[18] = f, t[19] = p, t[20] = S) : S = t[20];
            let C;
            return t[21] !== _ || t[22] !== b || t[23] !== S ? (C = (0, K.jsxs)(`li`, {
                className: Gt.FixIssuesItem,
                children: [_, b, S]
            }), t[21] = _, t[22] = b, t[23] = S, t[24] = C) : C = t[24], C
        }, q = _({
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
    tn, J, nn, rn, an = e((() => {
        tn = C(), Me(), tt(), O(), et(), E(), we(), Ee(), Oe(), S(), y(), J = g(), nn = e => {
            "use forget";
            let t = (0, tn.c)(35),
                {
                    connectorTool: n,
                    onSuccessfulConnection: r
                } = e,
                {
                    connectorById: i,
                    createLink: a
                } = $e(),
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
                let e = z(),
                    t = {
                        connector: {
                            connectorId: n.connectorId
                        },
                        publish: {
                            missingConnectorCount: 1
                        }
                    };
                H({
                    actionType: U.PUBLISH_MISSING_CONNECTION_CONNECT,
                    actionResult: W.STARTED,
                    actionInstanceId: e.actionInstanceId,
                    source: Ne.PUBLISH_MODAL,
                    ...t
                });
                let i;
                try {
                    i = await l()
                } catch (n) {
                    let r = n;
                    throw H({
                        actionType: U.PUBLISH_MISSING_CONNECTION_CONNECT,
                        actionResult: W.FAILED,
                        source: Ne.PUBLISH_MODAL,
                        ...t,
                        request: e({
                            error: r
                        })
                    }), r
                }
                if (!i) {
                    H({
                        actionType: U.PUBLISH_MISSING_CONNECTION_CONNECT,
                        actionResult: W.CANCELED,
                        source: Ne.PUBLISH_MODAL,
                        ...t,
                        request: e()
                    });
                    return
                }
                R.setTool({
                    type: `connector`,
                    config: {
                        ...n,
                        connectionType: ce(i.auth_type) ?? `oauth`,
                        link: i,
                        linkId: i.id
                    }
                }), H({
                    actionType: U.PUBLISH_MISSING_CONNECTION_CONNECT,
                    actionResult: W.SUCCEEDED,
                    source: Ne.PUBLISH_MODAL,
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
            t[10] === s ? p = t[11] : (p = (0, J.jsx)(nt, {
                connector: s,
                className: `size-10`,
                iconClassName: `size-10`,
                borderStyle: `hairline`
            }), t[10] = s, t[11] = p);
            let m;
            t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (m = (0, J.jsx)(ve, {
                className: `absolute -inset-e-0.5 -bottom-0.5 size-5 rounded-full bg-red-400 p-1 text-white`
            }), t[12] = m) : m = t[12];
            let h;
            t[13] === p ? h = t[14] : (h = (0, J.jsxs)(`div`, {
                className: `relative size-10`,
                children: [p, m]
            }), t[13] = p, t[14] = h);
            let g = s?.name ?? n.connectorId,
                _;
            t[15] === g ? _ = t[16] : (_ = (0, J.jsx)(V.Title, {
                className: `text-base font-medium`,
                children: (0, J.jsx)(v, {
                    ...rn.missingConnectionTitle,
                    values: {
                        connectorName: g
                    }
                })
            }), t[15] = g, t[16] = _);
            let y;
            t[17] === Symbol.for(`react.memo_cache_sentinel`) ? (y = (0, J.jsx)(v, {
                ...rn.connect
            }), t[17] = y) : y = t[17];
            let b;
            t[18] !== f || t[19] !== u ? (b = (0, J.jsx)(B, {
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
                R.removeConnectorTool(n.connectorId), r()
            }, t[21] = n.connectorId, t[22] = r, t[23] = S) : S = t[23];
            let C;
            t[24] === Symbol.for(`react.memo_cache_sentinel`) ? (C = (0, J.jsx)(v, {
                ...rn.removeApp
            }), t[24] = C) : C = t[24];
            let w;
            t[25] !== u || t[26] !== S ? (w = (0, J.jsx)(B, {
                color: `danger`,
                variant: `outline`,
                pill: !0,
                size: `lg`,
                disabled: u,
                onClick: S,
                children: C
            }), t[25] = u, t[26] = S, t[27] = w) : w = t[27];
            let T;
            t[28] !== b || t[29] !== w ? (T = (0, J.jsxs)(`div`, {
                className: `flex flex-col gap-2`,
                children: [b, w]
            }), t[28] = b, t[29] = w, t[30] = T) : T = t[30];
            let E;
            return t[31] !== T || t[32] !== h || t[33] !== _ ? (E = (0, J.jsxs)(V.Body, {
                className: `flex flex-col gap-4`,
                "data-width-290": !0,
                children: [h, _, T]
            }), t[31] = T, t[32] = h, t[33] = _, t[34] = E) : E = t[34], E
        }, rn = _({
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
    on, sn, cn, ln = e((() => {
        on = `hermes_read_config`, sn = e => e?.capability == null ? `private` : e.store_visible ? `directory` : `workspace_link`, cn = ({
            workspaceId: e,
            storeVisible: t
        }) => ({
            workspace_id: e,
            capability: on,
            store_visible: t
        })
    }));

function un() {
    return ue().currentGpt
}

function dn(e) {
    return e.connectionType === `end_user_connection`
}

function fn(e) {
    return e.sharedLink == null
}
var pn, mn, Y, hn, gn, X, _n = e((() => {
    pn = C(), Me(), l(), ln(), T(), Ht(), E(), Ge(), k(), s(), d(), pe(), we(), ot(), Ee(), Ce(), Oe(), M(), mn = t(b()), y(), Ke(), Ve(), Y = g(), hn = e => {
        "use forget";
        let t = (0, pn.c)(19),
            {
                onConfirm: r,
                isConfirmPending: i,
                showEndUserConnectors: a
            } = e,
            s = w(),
            c = f(),
            l = o(un),
            u = l.id,
            d = l.deployments.slack,
            p = We(),
            {
                data: m
            } = oe(),
            {
                data: h,
                isLoading: g
            } = te(u),
            _ = n(),
            [y, b] = (0, mn.useState)(!1),
            x = l.tools.connectors,
            S = x.filter(Ft),
            C = x.filter(dn),
            {
                data: T,
                isLoading: E
            } = ne(u),
            O;
        t[0] === T ? O = t[1] : (O = sn(D(T)), t[0] = T, t[1] = O);
        let k = O,
            A = qe({
                draftSlackDeployments: d,
                publishedBaselineGpt: h
            }),
            j = ze({
                draftConnectors: S,
                publishedBaselineGpt: h,
                treatDraftConnectorsAsShared: a
            }),
            M = A.length > 0 ? [...S] : [...j];
        a && (M.push(...C), j.push(...C));
        let N = j.length > 0 ? d.filter(Pe) : A,
            P = It({
                connectorTools: M,
                linksByConnectorId: m,
                allowFirstAvailableLinkForEndUserConnectors: !0
            }),
            F = P.filter(fn).length,
            I = Lt(P),
            L = g || E,
            ee = V,
            R = re,
            ie = L ? (0, Y.jsx)(`div`, {
                className: `flex h-[200px] items-center justify-center`,
                children: (0, Y.jsx)(Te, {})
            }, `loading`) : (0, Y.jsxs)(`div`, {
                className: `flex flex-col gap-4`,
                children: [(0, Y.jsxs)(`div`, {
                    className: `flex flex-col gap-1.5`,
                    children: [(0, Y.jsx)(V.Title, {
                        className: `ont-medium`,
                        children: (0, Y.jsx)(v, {
                            ...X.reviewAccessTitle
                        })
                    }), (0, Y.jsx)(V.Description, {
                        className: `text-secondary text-sm`,
                        children: (0, Y.jsx)(v, {
                            ...c ? X.reviewAccessDescriptionUseForEveryone : X.reviewAccessDescription
                        })
                    })]
                }), (0, Y.jsx)(Rt, {
                    connectorItems: P,
                    newConnectors: j
                }), (0, Y.jsxs)(`div`, {
                    children: [(0, Y.jsx)(`div`, {
                        className: `py-2.5 font-medium`,
                        children: (0, Y.jsx)(v, {
                            ...X.channelsHeading
                        })
                    }), N.map((e, t) => (0, Y.jsx)(gn, {
                        Icon: ye,
                        title: `#${Fe(e)}`,
                        isNew: A.includes(e)
                    }, t)), j.length > 0 && k !== `private` && (0, Y.jsx)(gn, {
                        Icon: k === `directory` ? Se : be,
                        title: k === `directory` ? s.formatMessage(X.workspaceDirectoryAccess, {
                            workspaceName: _
                        }) : s.formatMessage(X.workspaceLinkChannel, {
                            workspaceName: _
                        }),
                        isNew: !1
                    })]
                }), (0, Y.jsxs)(`div`, {
                    className: `-mb-2 flex w-full flex-col gap-4 pt-4`,
                    children: [I && (0, Y.jsx)(zt, {}), (0, Y.jsx)(at, {
                        checked: y,
                        label: (0, Y.jsx)(v, {
                            ...X.consentCheckboxLabel
                        }),
                        onCheckedChange: e => b(e)
                    })]
                })]
            }, `loaded-body`),
            ae;
        t[2] !== R || t[3] !== ie ? (ae = (0, Y.jsx)(R, {
            children: ie
        }), t[2] = R, t[3] = ie, t[4] = ae) : ae = t[4];
        let se;
        t[5] !== ee.Body || t[6] !== ae ? (se = (0, Y.jsx)(ee.Body, {
            children: ae
        }), t[5] = ee.Body, t[6] = ae, t[7] = se) : se = t[7];
        let z;
        t[8] !== y || t[9] !== I || t[10] !== i || t[11] !== p || t[12] !== F || t[13] !== r || t[14] !== L ? (z = !L && (0, Y.jsx)(V.Footer, {
            className: `flex flex-col`,
            children: (0, Y.jsxs)(`div`, {
                className: `flex w-full gap-2.5`,
                children: [(0, Y.jsx)(V.Close, {
                    children: (0, Y.jsx)(B, {
                        color: `primary`,
                        variant: `outline`,
                        size: `lg`,
                        pill: !0,
                        disabled: i,
                        className: `flex-1`,
                        children: (0, Y.jsx)(v, {
                            ...X.cancel
                        })
                    })
                }), (0, Y.jsx)(B, {
                    className: `flex-1`,
                    color: `info`,
                    variant: `solid`,
                    size: `lg`,
                    pill: !0,
                    disabled: !y || I,
                    loading: i,
                    onClick: () => {
                        y && (H({
                            actionType: U.PUBLISH_SHARED_CONNECTOR_CONSENT_CONFIRM,
                            source: Ne.PUBLISH_MODAL,
                            publish: {
                                missingConnectorCount: F
                            }
                        }), r())
                    },
                    children: p ? (0, Y.jsx)(v, {
                        ...X.confirmUpdate
                    }) : (0, Y.jsx)(v, {
                        ...X.confirmCreate
                    })
                })]
            })
        }), t[8] = y, t[9] = I, t[10] = i, t[11] = p, t[12] = F, t[13] = r, t[14] = L, t[15] = z) : z = t[15];
        let ce;
        return t[16] !== se || t[17] !== z ? (ce = (0, Y.jsxs)(Y.Fragment, {
            children: [se, z]
        }), t[16] = se, t[17] = z, t[18] = ce) : ce = t[18], ce
    }, gn = e => {
        "use forget";
        let t = (0, pn.c)(10),
            {
                Icon: n,
                title: r,
                isNew: i
            } = e,
            a;
        t[0] === n ? a = t[1] : (a = (0, Y.jsx)(n, {
            className: `h-5 w-5`
        }), t[0] = n, t[1] = a);
        let o;
        t[2] === r ? o = t[3] : (o = (0, Y.jsx)(`span`, {
            className: `font-medium`,
            children: r
        }), t[2] = r, t[3] = o);
        let s;
        t[4] === i ? s = t[5] : (s = i && (0, Y.jsx)(me, {
            color: `info`,
            size: `sm`,
            variant: `soft`,
            children: (0, Y.jsx)(v, {
                ...X.newBadge
            })
        }), t[4] = i, t[5] = s);
        let c;
        return t[6] !== a || t[7] !== o || t[8] !== s ? (c = (0, Y.jsxs)(`div`, {
            className: `flex items-center gap-2 border-t py-2`,
            children: [a, o, s]
        }), t[6] = a, t[7] = o, t[8] = s, t[9] = c) : c = t[9], c
    }, X = _({
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
    return e && e.is_enabled !== !1 && e.visibility !== `private` && j(e)
}
var xn, Sn, Z, Cn, wn, Tn, En, Dn, On, Q, kn = e((() => {
    xn = C(), i(), tt(), kt(), et(), E(), l(), k(), he(), F(), h(), we(), Ee(), Oe(), ct(), Sn = t(b()), y(), lt(), ut(), O(), T(), Z = g(), Cn = 12e4, wn = e => {
        "use forget";
        let t = (0, xn.c)(6),
            {
                onContinue: n,
                endUserConnectors: r
            } = e;
        if (!f()) {
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
        } = oe(a), [s, c] = (0, Sn.useState)(r), [l, u] = (0, Sn.useState)(vn), d;
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
        t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (p = (0, Z.jsx)(ge, {
            className: `size-10`
        }), t[7] = p) : p = t[7];
        let m;
        t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (m = (0, Z.jsx)(V.Title, {
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
                children: [m, (0, Z.jsx)(V.Description, {
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
        t[20] !== f || t[21] !== y ? (x = (0, Z.jsx)(B, {
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
        t[23] === Symbol.for(`react.memo_cache_sentinel`) ? (S = (0, Z.jsx)(V.Close, {
            children: (0, Z.jsx)(B, {
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
        return t[26] !== C || t[27] !== _ ? (w = (0, Z.jsxs)(V.Body, {
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
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, Z.jsx)(ge, {
            className: `size-10`
        }), t[0] = i) : i = t[0];
        let a;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, Z.jsx)(V.Title, {
            className: `m-0`,
            children: (0, Z.jsx)(v, {
                ...Q.title
            })
        }), t[1] = a) : a = t[1];
        let o;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, Z.jsx)(V.Description, {
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
        t[10] === l ? d = t[11] : (d = (0, Z.jsx)(B, {
            color: `primary`,
            variant: `solid`,
            size: `lg`,
            pill: !0,
            block: !0,
            onClick: l,
            children: u
        }), t[10] = l, t[11] = d);
        let f;
        t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (f = (0, Z.jsx)(V.Close, {
            children: (0, Z.jsx)(B, {
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
        return t[15] !== p || t[16] !== c ? (m = (0, Z.jsxs)(V.Body, {
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
            } = $e(),
            i;
        t[0] !== r || t[1] !== n.connectorId ? (i = r.get(n.connectorId) ?? null, t[0] = r, t[1] = n.connectorId, t[2] = i) : i = t[2];
        let a = i,
            {
                data: o,
                isLoading: s
            } = P(n.connectorId),
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
        t[10] === a ? f = t[11] : (f = (0, Z.jsx)(nt, {
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
            children: s ? (0, Z.jsx)(ae, {
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
                sharedLinks: r,
                onSharedConnectionChange: i,
                onRemoveConnector: a
            } = e,
            o = w(),
            {
                connectorById: s
            } = $e(),
            l = s.get(n.connectorId) ?? null,
            [u, d] = (0, Sn.useState)(!1),
            [f, p] = (0, Sn.useState)(!1),
            h = l?.name ?? n.connectorId,
            g, _, y;
        if (t[0] !== o || t[1] !== r) {
            let e = ie({
                    sharedLinks: r.filter(ee),
                    persistedSharedLinkId: null,
                    allowFirstAvailableLink: !0
                }),
                n = e?.owner_profile ?? null;
            g = n?.email?.trim() || n?.name?.trim() || e?.name?.trim() || o.formatMessage(Q.currentUserAccountUseForEveryone), _ = g, y = n?.picture?.trim() || null, t[0] = o, t[1] = r, t[2] = g, t[3] = _, t[4] = y
        } else g = t[2], _ = t[3], y = t[4];
        let b;
        t[5] !== _ || t[6] !== y ? (b = {
            name: _,
            picture: y
        }, t[5] = _, t[6] = y, t[7] = b) : b = t[7];
        let x = b,
            S;
        t[8] !== n || t[9] !== o || t[10] !== i ? (S = async () => {
            d(!0);
            try {
                let e = ie({
                    sharedLinks: ((await Ot({
                        staleTime: Cn,
                        retry: !1
                    })).get(n.connectorId) ?? []).filter(ee),
                    persistedSharedLinkId: null,
                    allowFirstAvailableLink: !0
                });
                e ? (R.setTool({
                    type: `connector`,
                    config: {
                        ...n,
                        connectionType: ce(e.auth_type) ?? `oauth`,
                        link: e,
                        linkId: e.id
                    }
                }), p(!0), i(!0)) : c().danger(o.formatMessage(Q.switchAppFailedUseForEveryone))
            } catch (e) {
                let t = e;
                c().danger(o.formatMessage(Q.switchAppFailedUseForEveryone), {
                    error: t
                })
            }
            d(!1)
        }, t[8] = n, t[9] = o, t[10] = i, t[11] = S) : S = t[11];
        let C = S,
            T;
        t[12] !== n || t[13] !== i ? (T = () => {
            R.setTool({
                type: `connector`,
                config: n
            }), p(!1), i(!1)
        }, t[12] = n, t[13] = i, t[14] = T) : T = t[14];
        let E = T,
            D;
        t[15] === x ? D = t[16] : (D = (0, Z.jsx)(m, {
            user: x,
            size: `large`
        }), t[15] = x, t[16] = D);
        let O;
        t[17] === Symbol.for(`react.memo_cache_sentinel`) ? (O = (0, Z.jsx)(v, {
            ...Q.connectedUseForEveryone
        }), t[17] = O) : O = t[17];
        let k;
        t[18] === Symbol.for(`react.memo_cache_sentinel`) ? (k = (0, Z.jsx)(v, {
            ...Q.connectionModeLabelUseForEveryone
        }), t[18] = k) : k = t[18];
        let A;
        t[19] !== E || t[20] !== C ? (A = e => {
            e ? C() : E()
        }, t[19] = E, t[20] = C, t[21] = A) : A = t[21];
        let j;
        t[22] !== u || t[23] !== f || t[24] !== A ? (j = (0, Z.jsx)(st, {
            className: `${ft.ForEveryoneSwitch} text-primary whitespace-nowrap`,
            label: k,
            labelPosition: `start`,
            checked: f,
            disabled: u,
            onCheckedChange: A
        }), t[22] = u, t[23] = f, t[24] = A, t[25] = j) : j = t[25];
        let M = B,
            N = o.formatMessage(Q.removeAppUseForEveryone, {
                connectorName: h
            }),
            P;
        t[26] !== n.connectorId || t[27] !== a ? (P = () => {
            R.removeConnectorTool(n.connectorId), a()
        }, t[26] = n.connectorId, t[27] = a, t[28] = P) : P = t[28];
        let F;
        t[29] === Symbol.for(`react.memo_cache_sentinel`) ? (F = (0, Z.jsx)(xe, {
            className: `size-5`
        }), t[29] = F) : F = t[29];
        let I;
        t[30] !== M || t[31] !== u || t[32] !== N || t[33] !== P ? (I = (0, Z.jsx)(M, {
            "aria-label": N,
            color: `primary`,
            variant: `ghost`,
            size: `sm`,
            uniform: !0,
            pill: !0,
            disabled: u,
            className: `shrink-0`,
            onClick: P,
            children: F
        }), t[30] = M, t[31] = u, t[32] = N, t[33] = P, t[34] = I) : I = t[34];
        let L;
        return t[35] !== j || t[36] !== I ? (L = (0, Z.jsxs)(Z.Fragment, {
            children: [j, I]
        }), t[35] = j, t[36] = I, t[37] = L) : L = t[37], (0, Z.jsx)(dt, {
            variant: `list`,
            size: `large`,
            avatar: (0, Z.jsxs)(`div`, {
                className: `relative size-12 shrink-0`,
                children: [D, (0, Z.jsx)(nt, {
                    connector: l,
                    className: `bg-surface absolute -end-1 -bottom-1 size-6 p-0.5 shadow-(--shadow-100)`,
                    iconClassName: `bg-surface size-full rounded-full`,
                    borderStyle: `hairline`
                })]
            }),
            primaryLabel: g,
            secondaryLabel: O,
            endItem: L
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
        Mn = C(), l(), Ye(), O(), kt(), Re(), Ht(), Le(), E(), h(), we(), Oe(), Nn = t(b()), y(), T(), Ke(), Ve(), Je(), en(), an(), _n(), kn(), $ = g(), Pn = 12e4, Fn = e => {
            "use forget";
            let t = (0, Mn.c)(51),
                {
                    missingConnectorTools: n,
                    publishChecklistItems: r,
                    publishOptionalItemsChecklist: i,
                    isPublished: a,
                    isPublishPending: o,
                    onPublish: s,
                    endUserConnectors: l,
                    alwaysPromptToPublish: u,
                    needsSharedConnectorConsent: d,
                    publishedBaselineGpt: p,
                    promptToPublishActionLabel: m,
                    promptToPublishDescription: h
                } = e,
                g;
            t[0] === i ? g = t[1] : (g = i === void 0 ? [] : i, t[0] = i, t[1] = g);
            let _ = g,
                v = o !== void 0 && o,
                y = u !== void 0 && u,
                b = w(),
                {
                    close: x
                } = De(),
                S;
            t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (S = f(), t[2] = S) : S = t[2];
            let C = S,
                [T] = (0, Nn.useState)(r),
                [E] = (0, Nn.useState)(_),
                [D] = (0, Nn.useState)(n),
                O = T.length === 1 && T[0].key === `switch-slack-connectors-to-shared-connection`,
                k = d || D.length + T.length + E.length > 0,
                [A, j] = (0, Nn.useState)(y || !k ? `prompt-to-publish` : T.length || E.length || D.length ? `show-issues` : `consent`),
                M;
            t[3] === l ? M = t[4] : (M = async () => {
                let e = await Ot({
                        staleTime: Pn
                    }),
                    t = new Map(ue().currentGpt.tools.connectors.filter(An).map(jn));
                l.forEach(n => {
                    let r = t.get(n.connectorId);
                    if (!r) return;
                    let i = (e.get(r.connectorId) ?? []).filter(ee),
                        a = Rn({
                            currentToolConfig: r,
                            sharedLinks: i
                        });
                    a && R.setTool({
                        type: `connector`,
                        config: a
                    })
                })
            }, t[3] = l, t[4] = M);
            let N = M,
                P;
            t[5] !== x || t[6] !== b || t[7] !== O || t[8] !== s || t[9] !== N ? (P = async e => {
                let t = !1,
                    n = e?.shareSlackEndUserConnectors ?? O;
                try {
                    n && await N(), t = !0, x(), await s()
                } catch (e) {
                    let n = e;
                    t || c().danger(Xe(n, b.formatMessage(Bn.shareConnectionsFailed), b.formatMessage))
                }
            }, t[5] = x, t[6] = b, t[7] = O, t[8] = s, t[9] = N, t[10] = P) : P = t[10];
            let F = P,
                I;
            t[11] !== F || t[12] !== d ? (I = async () => {
                if (d) {
                    j(`consent`);
                    return
                }
                await F()
            }, t[11] = F, t[12] = d, t[13] = I) : I = t[13];
            let L = I;
            if (A === `prompt-to-publish`) {
                let e;
                t[14] !== L || t[15] !== D || t[16] !== T.length || t[17] !== E ? (e = () => {
                    T.length || E.length || D.length ? j(`show-issues`) : L()
                }, t[14] = L, t[15] = D, t[16] = T.length, t[17] = E, t[18] = e) : e = t[18];
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
                return t[24] !== F || t[25] !== v || t[26] !== O ? (e = (0, $.jsx)(hn, {
                    onConfirm: F,
                    isConfirmPending: v,
                    showEndUserConnectors: O
                }), t[24] = F, t[25] = v, t[26] = O, t[27] = e) : e = t[27], e
            }
            if (O) {
                let e;
                t[28] !== x || t[29] !== F || t[30] !== p ? (e = C ? async () => {
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
                    await F({
                        shareSlackEndUserConnectors: !1
                    })
                }: () => j(`consent`), t[28] = x, t[29] = F, t[30] = p, t[31] = e) : e = t[31];
                let n;
                return t[32] !== l || t[33] !== e ? (n = (0, $.jsx)(wn, {
                    endUserConnectors: l,
                    onContinue: e
                }), t[32] = l, t[33] = e, t[34] = n) : n = t[34], n
            }
            if (!T.length && D.length === 1 && !E.length) {
                let e;
                return t[35] !== L || t[36] !== D[0] ? (e = (0, $.jsx)(nn, {
                    connectorTool: D[0],
                    onSuccessfulConnection: L
                }), t[35] = L, t[36] = D[0], t[37] = e) : e = t[37], e
            }
            let te;
            t[38] !== L || t[39] !== n || t[40] !== r.length || t[41] !== _ ? (te = () => {
                !r.length && !_.length && n.length === 1 && L()
            }, t[38] = L, t[39] = n, t[40] = r.length, t[41] = _, t[42] = te) : te = t[42];
            let ne;
            return t[43] !== L || t[44] !== D || t[45] !== T || t[46] !== E || t[47] !== v || t[48] !== a || t[49] !== te ? (ne = (0, $.jsx)(Zt, {
                missingConnectorTools: D,
                publishChecklistItems: T,
                publishOptionalItemsChecklist: E,
                isPublished: a,
                isPublishPending: v,
                onPublishAnyway: L,
                onSuccessfulConnection: te
            }), t[43] = L, t[44] = D, t[45] = T, t[46] = E, t[47] = v, t[48] = a, t[49] = te, t[50] = ne) : ne = t[50], ne
        }, In = e => {
            let t = ue().currentGpt;
            return Ie(Ue(t, e), Qe(t.id)).length
        }, Ln = ({
            publishedBaselineGpt: e
        }) => {
            let t = ue().currentGpt,
                n = t.deployments.slack.some(Pe),
                r = t.tools.connectors.some(Ft);
            return !n || !r ? !1 : ze({
                draftConnectors: t.tools.connectors,
                publishedBaselineGpt: e,
                treatDraftConnectorsAsShared: !0
            }).length > 0 || qe({
                draftSlackDeployments: t.deployments.slack,
                publishedBaselineGpt: e
            }).length > 0
        }, Rn = ({
            currentToolConfig: e,
            sharedLinks: t
        }) => {
            let n = ie({
                sharedLinks: t,
                persistedSharedLinkId: null,
                allowFirstAvailableLink: e.connectionType === `end_user_connection`
            });
            return n ? {
                ...e,
                connectionType: ce(n.auth_type) ?? `none`,
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
            t[2] === s ? c = t[3] : (c = (0, $.jsx)(V.Title, {
                className: `mb-2 text-base font-medium`,
                children: s
            }), t[2] = s, t[3] = c);
            let l;
            t[4] === n ? l = t[5] : (l = n ?? (0, $.jsx)(v, {
                ...Bn.update
            }), t[4] = n, t[5] = l);
            let u;
            t[6] !== o || t[7] !== i || t[8] !== l ? (u = (0, $.jsx)(B, {
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
            t[11] === o ? f = t[12] : (f = (0, $.jsx)(V.Close, {
                children: (0, $.jsx)(B, {
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
            return t[16] !== c || t[17] !== p ? (m = (0, $.jsxs)(V.Body, {
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
    return ue().currentGpt
}

function Kn(e) {
    return e.connectionType === `end_user_connection`
}
var qn, Jn, Yn, Xn, Zn, Qn, $n, er = e((() => {
    qn = C(), Me(), St(), E(), d(), Ce(), y(), Vn(), Wn(), Ze(), Jn = g(), Yn = e => {
        xt((0, Jn.jsx)(Xn, {
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
            a = o(Gn),
            {
                isPending: s,
                publishCurrentDraft: c,
                subscribeToPublishLifecycle: l
            } = Be(),
            u = He(),
            d;
        t[0] === a.tools.connectors ? d = t[1] : (d = a.tools.connectors.filter(Kn), t[0] = a.tools.connectors, t[1] = d);
        let f = d,
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
            } = u,
            S = p || m || h || g || _,
            C;
        t[2] !== n || t[3] !== r || t[4] !== c || t[5] !== l ? (C = async () => {
            if (n != null) {
                await n();
                return
            }
            let e = !1,
                t = l(t => {
                    t.status === `succeeded` && (e = !0)
                });
            try {
                await c({
                    source: Ne.PUBLISH_MODAL
                })
            } catch (e) {
                let n = e;
                throw t(), n
            }
            t(), e && await r?.()
        }, t[2] = n, t[3] = r, t[4] = c, t[5] = l, t[6] = C) : C = t[6];
        let w = C,
            T;
        return t[7] !== f || t[8] !== w || t[9] !== S || t[10] !== s || t[11] !== v || t[12] !== y || t[13] !== i || t[14] !== b || t[15] !== u.isPublished || t[16] !== u.publishedBaselineGpt || t[17] !== x ? (T = (0, Jn.jsx)(Jn.Fragment, {
            children: S ? (0, Jn.jsx)(`div`, {
                className: `flex h-[200px] items-center justify-center`,
                children: (0, Jn.jsx)(Te, {})
            }, `loading`) : (0, Jn.jsx)(Fn, {
                missingConnectorTools: v,
                publishChecklistItems: b,
                publishOptionalItemsChecklist: x,
                isPublished: u.isPublished,
                isPublishPending: s,
                onPublish: w,
                endUserConnectors: f,
                needsSharedConnectorConsent: y,
                publishedBaselineGpt: u.publishedBaselineGpt,
                alwaysPromptToPublish: i != null,
                promptToPublishActionLabel: i?.actionLabel,
                promptToPublishDescription: i?.description
            }, `content`)
        }), t[7] = f, t[8] = w, t[9] = S, t[10] = s, t[11] = v, t[12] = y, t[13] = i, t[14] = b, t[15] = u.isPublished, t[16] = u.publishedBaselineGpt, t[17] = x, t[18] = T) : T = t[18], T
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
    sn as a, Qt as c, Dt as d, Ot as f, xt as g, St as h, Yn as i, en as l, bt as m, Qn as n, cn as o, kt as p, er as r, ln as s, Zn as t, Et as u
};
//# sourceMappingURL=8b3bb541-iz99fmtii63ix6qz.js.map
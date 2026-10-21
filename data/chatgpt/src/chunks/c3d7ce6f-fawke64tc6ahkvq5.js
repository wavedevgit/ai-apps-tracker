import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    IU as t,
    Iv as n,
    LU as r,
    bh as i,
    k8 as a,
    nv as o,
    q5 as s,
    wh as c
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    Bn as l,
    Ln as u,
    N as d,
    Nn as f,
    O as p,
    Rn as m,
    p as h,
    s as g,
    wn as _
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Pn as v,
    KLt as y,
    RPn as b,
    T_t as ee,
    VPn as x,
    YLt as S,
    bHt as te,
    drt as ne,
    prt as C,
    uFn as w,
    v_t as T
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    b as E,
    d as re,
    f as D,
    t as O,
    x as ie
} from "./707eab0c-hnzftmd8o2cha32b.js";
import {
    n as ae,
    t as k
} from "./18093cad-j82m3e3j2p8dxsmx.js";
import {
    n as A,
    o as j
} from "./6550989e-o9h0phxq38vnnvih.js";
import {
    a as M,
    o as oe,
    s as N,
    t as P,
    x as se
} from "./4285e798-db8ayjk99ugt4omv.js";
import {
    n as F,
    t as ce
} from "./8e88ec39-ly2p52dkrwo6r0lt.js";
import {
    l as I,
    u as le
} from "./126cbe2b-ojyyb05awbpmdcsy.js";
var L, R, z, B, V, H, U, W = e((() => {
        L = `R5di3a_AgentAvatar`, R = `R5di3a_Badge`, z = `R5di3a_Card`, B = `R5di3a_Divider`, V = `R5di3a_Mention`, H = `R5di3a_UserAvatar`, U = {
            AgentAvatar: L,
            Badge: R,
            Card: z,
            Divider: B,
            Mention: V,
            UserAvatar: H
        }
    })),
    G, K, ue, q, de, J, Y, X, fe = e((() => {
        G = _(), c(), j(), m(), W(), K = l(), ue = e => {
            "use forget";
            let t = (0, G.c)(2),
                n;
            return t[0] === e ? n = t[1] : (n = (0, K.jsx)(`span`, {
                className: U.Mention,
                children: e
            }), t[0] = e, t[1] = n), n
        }, q = e => {
            "use forget";
            let t = (0, G.c)(2),
                {
                    children: n
                } = e,
                r;
            return t[0] === n ? r = t[1] : (r = (0, K.jsx)(`div`, {
                className: U.Card,
                inert: !0,
                children: n
            }), t[0] = n, t[1] = r), r
        }, de = e => {
            "use forget";
            let t = (0, G.c)(13),
                {
                    agentIcon: n,
                    agentMessage: r,
                    agentName: i,
                    children: a,
                    userMessage: o,
                    userName: s,
                    userPicture: c
                } = e,
                l;
            t[0] !== o || t[1] !== s || t[2] !== c ? (l = (0, K.jsx)(J, {
                message: o,
                userName: s,
                userPicture: c
            }), t[0] = o, t[1] = s, t[2] = c, t[3] = l) : l = t[3];
            let u;
            t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, K.jsxs)(`div`, {
                className: `text-secondary flex items-center gap-1.75 text-sm`,
                children: [(0, K.jsx)(`span`, {
                    children: (0, K.jsx)(f, {
                        ...X.replyCount
                    })
                }), (0, K.jsx)(`div`, {
                    className: U.Divider
                })]
            }), t[4] = u) : u = t[4];
            let d;
            t[5] !== n || t[6] !== r || t[7] !== i ? (d = (0, K.jsx)(Y, {
                agentIcon: n,
                agentName: i,
                message: r
            }), t[5] = n, t[6] = r, t[7] = i, t[8] = d) : d = t[8];
            let p;
            return t[9] !== a || t[10] !== l || t[11] !== d ? (p = (0, K.jsxs)(q, {
                children: [l, u, d, a]
            }), t[9] = a, t[10] = l, t[11] = d, t[12] = p) : p = t[12], p
        }, J = e => {
            "use forget";
            let t = (0, G.c)(13),
                {
                    message: n,
                    userName: r,
                    userPicture: a
                } = e,
                o;
            t[0] !== r || t[1] !== a ? (o = (0, K.jsx)(`div`, {
                className: `mt-0.5`,
                children: (0, K.jsx)(i, {
                    size: `mediumLarge`,
                    user: {
                        name: r,
                        picture: a
                    },
                    className: `rounded-lg`
                })
            }), t[0] = r, t[1] = a, t[2] = o) : o = t[2];
            let s;
            t[3] === r ? s = t[4] : (s = (0, K.jsx)(`p`, {
                className: `font-bold`,
                children: r
            }), t[3] = r, t[4] = s);
            let c;
            t[5] === n ? c = t[6] : (c = (0, K.jsx)(`p`, {
                className: `wrap-break-words text-sm`,
                children: n
            }), t[5] = n, t[6] = c);
            let l;
            t[7] !== s || t[8] !== c ? (l = (0, K.jsxs)(`div`, {
                className: `flex min-w-0 flex-col`,
                children: [s, c]
            }), t[7] = s, t[8] = c, t[9] = l) : l = t[9];
            let u;
            return t[10] !== o || t[11] !== l ? (u = (0, K.jsxs)(`div`, {
                className: `flex items-start gap-2.5`,
                children: [o, l]
            }), t[10] = o, t[11] = l, t[12] = u) : u = t[12], u
        }, Y = e => {
            "use forget";
            let t = (0, G.c)(14),
                {
                    agentIcon: n,
                    agentName: r,
                    message: i
                } = e,
                a;
            t[0] !== n.color || t[1] !== n.name ? (a = (0, K.jsx)(`div`, {
                className: U.AgentAvatar,
                children: (0, K.jsx)(A, {
                    color: n.color,
                    name: n.name,
                    size: 24
                })
            }), t[0] = n.color, t[1] = n.name, t[2] = a) : a = t[2];
            let o;
            t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, K.jsx)(`span`, {
                className: U.Badge,
                children: (0, K.jsx)(f, {
                    ...X.appBadge
                })
            }), t[3] = o) : o = t[3];
            let s;
            t[4] === r ? s = t[5] : (s = (0, K.jsxs)(`p`, {
                className: `font-bold wrap-break-word`,
                children: [r, o]
            }), t[4] = r, t[5] = s);
            let c;
            t[6] === i ? c = t[7] : (c = (0, K.jsx)(`p`, {
                className: `text-sm`,
                children: i
            }), t[6] = i, t[7] = c);
            let l;
            t[8] !== s || t[9] !== c ? (l = (0, K.jsxs)(`div`, {
                className: `flex min-w-0 flex-col`,
                children: [s, c]
            }), t[8] = s, t[9] = c, t[10] = l) : l = t[10];
            let u;
            return t[11] !== a || t[12] !== l ? (u = (0, K.jsxs)(`div`, {
                className: `flex items-start gap-2.5`,
                children: [a, l]
            }), t[11] = a, t[12] = l, t[13] = u) : u = t[13], u
        }, X = u({
            appBadge: {
                id: `Hermes.GptStudio.Builder.SlackConversationPreview.appBadge`,
                defaultMessage: `APP`
            },
            replyCount: {
                id: `Hermes.GptStudio.Builder.SlackConversationPreview.replyCount`,
                defaultMessage: `1 reply`
            }
        })
    })),
    pe, me, he, ge = e((() => {
        pe = e => e.normalize(`NFKD`).replaceAll(/[\u0300-\u036f]/g, ``).replaceAll(/@/g, ``).trim().toLowerCase().replaceAll(/['’]/g, ``), me = e => pe(e).replaceAll(/[^a-z0-9_-]+/g, ``), he = e => pe(e).replaceAll(/[^a-z0-9]+/g, `-`).replaceAll(/-+/g, `-`).replaceAll(/^-+|-+$/g, ``) || `agent`
    })),
    _e, ve, ye = e((() => {
        m(), _e = ({
            agentName: e,
            intl: t
        }) => e || t.formatMessage(ve.agentFallbackName), ve = u({
            agentFallbackName: {
                id: `Hermes.GptStudio.Builder.SlackPreviewFallbacks.agentFallbackName`,
                defaultMessage: `Your agent`
            }
        })
    }));

function be() {
    return b({
        fetchValidLinksOnly: !0
    })
}

function xe(e) {
    return e.id
}

function Se(e) {
    return e.auth_status === `ACTIVE`
}
var Ce, we, Te = e((() => {
        Ce = _(), x(), n(), a(), we = () => {
            "use forget";
            let e = (0, Ce.c)(9),
                {
                    data: t,
                    isLoading: n
                } = s(be),
                r, i, a;
            e[0] === t ? (r = e[1], i = e[2], a = e[3]) : (i = t?.get(`connector_OdO9DCSRc2wYX4lGC3Ko7jbg5f7QpNum`) ?? [], r = new Set(i.map(xe)), a = i.find(Se)?.id ?? i[0]?.id ?? null, e[0] = t, e[1] = r, e[2] = i, e[3] = a);
            let o = a,
                c;
            return e[4] !== n || e[5] !== o || e[6] !== r || e[7] !== i ? (c = {
                isLoading: n,
                slackBotLinks: i,
                slackBotLinkIds: r,
                slackBotLinkId: o
            }, e[4] = n, e[5] = o, e[6] = r, e[7] = i, e[8] = c) : c = e[8], c
        }
    })),
    Ee, De, Oe, ke = e((() => {
        w(), Ee = [v(!1), v(!0)], De = e => Promise.all(Ee.map(t => e.resetQueries({
            exact: !0,
            queryKey: t
        }))), Oe = e => Promise.all(Ee.map(t => e.invalidateQueries({
            queryKey: t
        })))
    }));

function Ae(e) {
    return `/agents/studio/edit/${encodeURIComponent(e)}`
}

function je(e) {
    return e == null || e.length === 0 ? null : e.startsWith(`@`) ? e : `@${e}`
}

function Me(e, t) {
    if (e.length === 0) return null;
    let n = t == null ? Re : Le,
        r = e.length - n;
    return r <= 1 ? e.map(Ne).join(`, `) : `${e.slice(0,n).map(Ne).join(`, `)} + ${r} other channels`
}

function Ne(e) {
    return e.startsWith(`#`) ? e : `#${e}`
}
var Pe, Z, Fe, Ie, Le, Re, ze, Be, Ve = e((() => {
    Pe = _(), O(), m(), j(), Z = l(), Fe = {
        name: `bloop`,
        color: `blue`
    }, Ie = `•`, Le = 1, Re = 2, ze = e => {
        "use forget";
        let t = (0, Pe.c)(25),
            {
                linkedSlackAgent: n
            } = e,
            r = n.agent_icon?.name ?? Fe.name,
            i = n.agent_icon?.color ?? Fe.color,
            a, o;
        t[0] !== n.slack_channel_names || t[1] !== n.slack_user_group_handle ? (a = je(n.slack_user_group_handle), o = Me(n.slack_channel_names, a), t[0] = n.slack_channel_names, t[1] = n.slack_user_group_handle, t[2] = a, t[3] = o) : (a = t[2], o = t[3]);
        let s = o,
            c = a != null || s != null,
            l;
        t[4] !== i || t[5] !== r ? (l = (0, Z.jsx)(A, {
            className: `shrink-0`,
            name: r,
            color: i,
            size: 48
        }), t[4] = i, t[5] = r, t[6] = l) : l = t[6];
        let u;
        t[7] === n.agent_name ? u = t[8] : (u = (0, Z.jsx)(`p`, {
            className: `text-primary truncate text-sm font-medium`,
            children: n.agent_name
        }), t[7] = n.agent_name, t[8] = u);
        let d;
        t[9] !== c || t[10] !== s || t[11] !== a ? (d = c && (0, Z.jsxs)(`p`, {
            className: `flex min-w-0 items-center gap-1 text-sm`,
            children: [a != null && (0, Z.jsx)(`span`, {
                className: `text-secondary shrink-0`,
                children: a
            }), a != null && s != null && (0, Z.jsx)(`span`, {
                className: `text-tertiary shrink-0`,
                children: Ie
            }), s != null && (0, Z.jsx)(`span`, {
                className: `text-secondary min-w-0 truncate`,
                children: s
            })]
        }), t[9] = c, t[10] = s, t[11] = a, t[12] = d) : d = t[12];
        let p;
        t[13] !== u || t[14] !== d ? (p = (0, Z.jsxs)(`div`, {
            className: `min-w-0 flex-1`,
            children: [u, d]
        }), t[13] = u, t[14] = d, t[15] = p) : p = t[15];
        let m;
        t[16] === n.agent_id ? m = t[17] : (m = Ae(n.agent_id), t[16] = n.agent_id, t[17] = m);
        let h;
        t[18] === Symbol.for(`react.memo_cache_sentinel`) ? (h = (0, Z.jsx)(f, {
            ...Be.editAgent
        }), t[18] = h) : h = t[18];
        let g;
        t[19] === m ? g = t[20] : (g = (0, Z.jsx)(D, {
            className: `ms-2 shrink-0 opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100`,
            color: `secondary`,
            draggable: `false`,
            pill: !0,
            rel: `noreferrer`,
            size: `md`,
            target: `_blank`,
            to: m,
            variant: `outline`,
            children: h
        }), t[19] = m, t[20] = g);
        let _;
        return t[21] !== l || t[22] !== p || t[23] !== g ? (_ = (0, Z.jsxs)(`li`, {
            className: `group flex items-center gap-5`,
            children: [l, p, g]
        }), t[21] = l, t[22] = p, t[23] = g, t[24] = _) : _ = t[24], _
    }, Be = u({
        editAgent: {
            id: `Hermes.GptStudio.Builder.SlackDisconnectLinkedAgentListItem.editAgent`,
            defaultMessage: `Edit agent`
        }
    })
}));

function He() {
    return b({
        fetchValidLinksOnly: !0
    })
}

function Ue(e) {
    return (0, Q.jsx)(ze, {
        linkedSlackAgent: e
    }, e.agent_id)
}
var We, Q, Ge, Ke, qe, $, Je = e((() => {
    We = _(), S(), P(), ke(), I(), F(), Ve(), x(), n(), C(), a(), r(), O(), E(), k(), T(), g(), m(), Q = l(), Ge = e => ({
        queryKey: [`hermes`, `slack-linked-agents`, e],
        queryFn: () => y({
            linkId: e ?? ``
        })
    }), Ke = (e, t) => {
        t != null && e.prefetchQuery(Ge(t))
    }, qe = e => {
        "use forget";
        let n = (0, We.c)(56),
            {
                analyticsSource: r,
                onBack: i,
                onDisconnected: a,
                slackBotLinkId: c
            } = e,
            l = r === void 0 ? se.OVERFLOW_MENU : r,
            u = d(),
            m;
        n[0] === Symbol.for(`react.memo_cache_sentinel`) ? (m = t(), n[0] = m) : m = n[0];
        let g = m,
            {
                data: _
            } = s(He),
            v;
        if (n[1] !== _ || n[2] !== c) {
            let e = _?.get(`connector_OdO9DCSRc2wYX4lGC3Ko7jbg5f7QpNum`) ?? [],
                t;
            n[4] === c ? t = n[5] : (t = e => e.id === c, n[4] = c, n[5] = t);
            let r = e.find(t);
            v = r?.link_params?.team_name?.trim() || r?.name?.trim() || null, n[1] = _, n[2] = c, n[3] = v
        } else v = n[3];
        let y = v,
            b = y == null ? $.disconnectSlackBody : $.disconnectSlackBodyWithTeamName,
            x;
        n[6] === u ? x = n[7] : (x = async e => {
            await ne(o), await Promise.all([De(u), le(u)])
        }, n[6] = u, n[7] = x);
        let S;
        n[8] !== l || n[9] !== a ? (S = (e, t) => {
            M({
                actionType: oe.SLACK_WORKSPACE_DISCONNECT,
                actionResult: N.SUCCEEDED,
                source: l,
                slack: {},
                request: t?.()
            }), a()
        }, n[8] = l, n[9] = a, n[10] = S) : S = n[10];
        let C;
        n[11] === l ? C = n[12] : (C = (e, t) => {
            M({
                actionType: oe.SLACK_WORKSPACE_DISCONNECT,
                actionResult: N.FAILED,
                source: l,
                slack: {},
                request: t?.({
                    error: e
                })
            }), g.danger($.disconnectSlackFailed)
        }, n[11] = l, n[12] = C);
        let w;
        n[13] !== x || n[14] !== S || n[15] !== C ? (w = {
            mutationFn: x,
            onSuccess: S,
            onError: C
        }, n[13] = x, n[14] = S, n[15] = C, n[16] = w) : w = n[16];
        let T = h(w),
            E;
        n[17] === c ? E = n[18] : (E = Ge(c), n[17] = c, n[18] = E);
        let D = c != null,
            O;
        n[19] !== E || n[20] !== D ? (O = {
            ...E,
            enabled: D
        }, n[19] = E, n[20] = D, n[21] = O) : O = n[21];
        let k = p(O),
            A;
        n[22] === k.data?.items ? A = n[23] : (A = k.data?.items ?? [], n[22] = k.data?.items, n[23] = A);
        let j = A,
            P;
        n[24] === Symbol.for(`react.memo_cache_sentinel`) ? (P = (0, Q.jsx)(`div`, {
            className: `flex h-13 items-center gap-2`,
            children: (0, Q.jsx)(`div`, {
                className: `text-primary text-lg`,
                children: (0, Q.jsx)(f, {
                    ...$.disconnectSlackTitle
                })
            })
        }), n[24] = P) : P = n[24];
        let F;
        n[25] === y ? F = n[26] : (F = {
            teamName: y
        }, n[25] = y, n[26] = F);
        let I;
        n[27] !== b || n[28] !== F ? (I = (0, Q.jsx)(`p`, {
            className: `text-primary pt-1 text-sm`,
            children: (0, Q.jsx)(f, {
                ...b,
                values: F
            })
        }), n[27] = b, n[28] = F, n[29] = I) : I = n[29];
        let L;
        n[30] !== j || n[31] !== k.isError || n[32] !== k.isLoading || n[33] !== k.isSuccess ? (L = k.isLoading ? (0, Q.jsxs)(`div`, {
            className: `mt-4 flex justify-center`,
            children: [(0, Q.jsx)(ie, {}), (0, Q.jsx)(`span`, {
                className: `sr-only`,
                children: (0, Q.jsx)(f, {
                    ...$.disconnectSlackLinkedAgentsLoading
                })
            })]
        }, `loading`) : k.isError ? (0, Q.jsx)(`p`, {
            className: `text-secondary mt-4 text-sm`,
            children: (0, Q.jsx)(f, {
                ...$.disconnectSlackLinkedAgentsError
            })
        }, `error`) : k.isSuccess ? j.length > 0 ? (0, Q.jsx)(`ul`, {
            className: `mt-6 space-y-6`,
            children: j.map(Ue)
        }, `content`) : (0, Q.jsx)(`p`, {
            className: `text-secondary mt-4 text-sm`,
            children: (0, Q.jsx)(f, {
                ...$.disconnectSlackLinkedAgentsEmpty
            })
        }, `empty`) : null, n[30] = j, n[31] = k.isError, n[32] = k.isLoading, n[33] = k.isSuccess, n[34] = L) : L = n[34];
        let R;
        n[35] === L ? R = n[36] : (R = (0, Q.jsx)(ee, {
            children: L
        }), n[35] = L, n[36] = R);
        let z;
        n[37] !== I || n[38] !== R ? (z = (0, Q.jsxs)(ae.Body, {
            className: `px-5 pt-0 pb-4`,
            children: [P, I, R]
        }), n[37] = I, n[38] = R, n[39] = z) : z = n[39];
        let B;
        n[40] === Symbol.for(`react.memo_cache_sentinel`) ? (B = (0, Q.jsx)(f, {
            ...ce.back
        }), n[40] = B) : B = n[40];
        let V;
        n[41] === i ? V = n[42] : (V = (0, Q.jsx)(re, {
            color: `primary`,
            type: `button`,
            variant: `soft`,
            onClick: i,
            children: B
        }), n[41] = i, n[42] = V);
        let H;
        n[43] !== l || n[44] !== T ? (H = () => {
            let e = te();
            M({
                actionType: oe.SLACK_WORKSPACE_DISCONNECT,
                actionResult: N.STARTED,
                actionInstanceId: e.actionInstanceId,
                source: l,
                slack: {}
            }), T.mutate(e)
        }, n[43] = l, n[44] = T, n[45] = H) : H = n[45];
        let U;
        n[46] === Symbol.for(`react.memo_cache_sentinel`) ? (U = (0, Q.jsx)(f, {
            ...$.disconnectSlackConfirm
        }), n[46] = U) : U = n[46];
        let W;
        n[47] !== T.isPending || n[48] !== H ? (W = (0, Q.jsx)(re, {
            color: `danger`,
            type: `button`,
            loading: T.isPending,
            onClick: H,
            children: U
        }), n[47] = T.isPending, n[48] = H, n[49] = W) : W = n[49];
        let G;
        n[50] !== V || n[51] !== W ? (G = (0, Q.jsx)(ae.Footer, {
            children: (0, Q.jsxs)(`div`, {
                className: `flex w-full items-center justify-between gap-2`,
                children: [V, W]
            })
        }), n[50] = V, n[51] = W, n[52] = G) : G = n[52];
        let K;
        return n[53] !== z || n[54] !== G ? (K = (0, Q.jsxs)(Q.Fragment, {
            children: [z, G]
        }), n[53] = z, n[54] = G, n[55] = K) : K = n[55], K
    }, $ = u({
        disconnectSlackTitle: {
            id: `Hermes.GptStudio.Builder.AgentSettingsModal.disconnectSlackTitle`,
            defaultMessage: `Disconnect Slack workspace?`
        },
        disconnectSlackBody: {
            id: `Hermes.GptStudio.Builder.AgentSettingsModal.disconnectSlackBody`,
            defaultMessage: `Disconnecting from this Slack workspace will remove your agents from their Slack channels.`
        },
        disconnectSlackBodyWithTeamName: {
            id: `Hermes.GptStudio.Builder.AgentSettingsModal.disconnectSlackBodyWithTeamName`,
            defaultMessage: `Disconnecting from the {teamName} Slack workspace will remove your agents from their Slack channels.`
        },
        disconnectSlackLinkedAgentsLoading: {
            id: `Hermes.GptStudio.Builder.AgentSettingsModal.disconnectSlackLinkedAgentsLoading`,
            defaultMessage: `Loading impacted agents...`
        },
        disconnectSlackLinkedAgentsEmpty: {
            id: `Hermes.GptStudio.Builder.AgentSettingsModal.disconnectSlackLinkedAgentsEmpty`,
            defaultMessage: `No agents with Slack bots are linked to this workspace.`
        },
        disconnectSlackLinkedAgentsError: {
            id: `Hermes.GptStudio.Builder.AgentSettingsModal.disconnectSlackLinkedAgentsError`,
            defaultMessage: `Could not load the impacted agents.`
        },
        disconnectSlackConfirm: {
            id: `Hermes.GptStudio.Builder.AgentSettingsModal.disconnectSlackConfirm`,
            defaultMessage: `Disconnect`
        },
        disconnectSlackFailed: {
            id: `Hermes.GptStudio.Builder.AgentSettingsModal.disconnectSlackFailed`,
            defaultMessage: `Couldn't disconnect Slack workspace. Try again.`
        }
    })
}));
export {
    J as _, Oe as a, _e as c, ge as d, me as f, de as g, ue as h, ke as i, ye as l, q as m, Je as n, Te as o, Y as p, Ke as r, we as s, qe as t, he as u, fe as v
};
//# sourceMappingURL=c3d7ce6f-fawke64tc6ahkvq5.js.map
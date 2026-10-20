import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ch as t,
    Fv as n,
    N5 as r,
    RU as i,
    h8 as a,
    tv as o,
    yh as s,
    zU as c
} from "./4813494d-dfpv67hlp00pbohr.js";
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
    $Lt as v,
    NPn as y,
    S_t as b,
    WPn as x,
    XLt as S,
    _rt as C,
    hrt as ee,
    k_t as te,
    vPn as w,
    wHt as ne,
    xPn as T
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    b as E,
    d as re,
    f as D,
    t as O,
    x as ie
} from "./707eab0c-iziu4upusihd9xbv.js";
import {
    n as ae,
    t as k
} from "./18093cad-gxacttrmb37lcogg.js";
import {
    n as A,
    o as j
} from "./6550989e-cmyjat2wx5njm44i.js";
import {
    a as oe,
    o as M,
    s as se,
    t as N,
    x as ce
} from "./4285e798-gdl12dl0yi3x94rm.js";
import {
    n as P,
    t as le
} from "./8e88ec39-ly2p52dkrwo6r0lt.js";
import {
    l as F,
    u as ue
} from "./126cbe2b-gabi8c2u4fs4fzc3.js";
var I, L, R, z, B, V, H, U = e((() => {
        I = `R5di3a_AgentAvatar`, L = `R5di3a_Badge`, R = `R5di3a_Card`, z = `R5di3a_Divider`, B = `R5di3a_Mention`, V = `R5di3a_UserAvatar`, H = {
            AgentAvatar: I,
            Badge: L,
            Card: R,
            Divider: z,
            Mention: B,
            UserAvatar: V
        }
    })),
    W, G, de, K, fe, q, J, Y, pe = e((() => {
        W = _(), t(), j(), m(), U(), G = l(), de = e => {
            "use forget";
            let t = (0, W.c)(2),
                n;
            return t[0] === e ? n = t[1] : (n = (0, G.jsx)(`span`, {
                className: H.Mention,
                children: e
            }), t[0] = e, t[1] = n), n
        }, K = e => {
            "use forget";
            let t = (0, W.c)(2),
                {
                    children: n
                } = e,
                r;
            return t[0] === n ? r = t[1] : (r = (0, G.jsx)(`div`, {
                className: H.Card,
                inert: !0,
                children: n
            }), t[0] = n, t[1] = r), r
        }, fe = e => {
            "use forget";
            let t = (0, W.c)(13),
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
            t[0] !== o || t[1] !== s || t[2] !== c ? (l = (0, G.jsx)(q, {
                message: o,
                userName: s,
                userPicture: c
            }), t[0] = o, t[1] = s, t[2] = c, t[3] = l) : l = t[3];
            let u;
            t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, G.jsxs)(`div`, {
                className: `text-secondary flex items-center gap-1.75 text-sm`,
                children: [(0, G.jsx)(`span`, {
                    children: (0, G.jsx)(f, {
                        ...Y.replyCount
                    })
                }), (0, G.jsx)(`div`, {
                    className: H.Divider
                })]
            }), t[4] = u) : u = t[4];
            let d;
            t[5] !== n || t[6] !== r || t[7] !== i ? (d = (0, G.jsx)(J, {
                agentIcon: n,
                agentName: i,
                message: r
            }), t[5] = n, t[6] = r, t[7] = i, t[8] = d) : d = t[8];
            let p;
            return t[9] !== a || t[10] !== l || t[11] !== d ? (p = (0, G.jsxs)(K, {
                children: [l, u, d, a]
            }), t[9] = a, t[10] = l, t[11] = d, t[12] = p) : p = t[12], p
        }, q = e => {
            "use forget";
            let t = (0, W.c)(13),
                {
                    message: n,
                    userName: r,
                    userPicture: i
                } = e,
                a;
            t[0] !== r || t[1] !== i ? (a = (0, G.jsx)(`div`, {
                className: `mt-0.5`,
                children: (0, G.jsx)(s, {
                    size: `mediumLarge`,
                    user: {
                        name: r,
                        picture: i
                    },
                    className: `rounded-lg`
                })
            }), t[0] = r, t[1] = i, t[2] = a) : a = t[2];
            let o;
            t[3] === r ? o = t[4] : (o = (0, G.jsx)(`p`, {
                className: `font-bold`,
                children: r
            }), t[3] = r, t[4] = o);
            let c;
            t[5] === n ? c = t[6] : (c = (0, G.jsx)(`p`, {
                className: `wrap-break-words text-sm`,
                children: n
            }), t[5] = n, t[6] = c);
            let l;
            t[7] !== o || t[8] !== c ? (l = (0, G.jsxs)(`div`, {
                className: `flex min-w-0 flex-col`,
                children: [o, c]
            }), t[7] = o, t[8] = c, t[9] = l) : l = t[9];
            let u;
            return t[10] !== a || t[11] !== l ? (u = (0, G.jsxs)(`div`, {
                className: `flex items-start gap-2.5`,
                children: [a, l]
            }), t[10] = a, t[11] = l, t[12] = u) : u = t[12], u
        }, J = e => {
            "use forget";
            let t = (0, W.c)(14),
                {
                    agentIcon: n,
                    agentName: r,
                    message: i
                } = e,
                a;
            t[0] !== n.color || t[1] !== n.name ? (a = (0, G.jsx)(`div`, {
                className: H.AgentAvatar,
                children: (0, G.jsx)(A, {
                    color: n.color,
                    name: n.name,
                    size: 24
                })
            }), t[0] = n.color, t[1] = n.name, t[2] = a) : a = t[2];
            let o;
            t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, G.jsx)(`span`, {
                className: H.Badge,
                children: (0, G.jsx)(f, {
                    ...Y.appBadge
                })
            }), t[3] = o) : o = t[3];
            let s;
            t[4] === r ? s = t[5] : (s = (0, G.jsxs)(`p`, {
                className: `font-bold wrap-break-word`,
                children: [r, o]
            }), t[4] = r, t[5] = s);
            let c;
            t[6] === i ? c = t[7] : (c = (0, G.jsx)(`p`, {
                className: `text-sm`,
                children: i
            }), t[6] = i, t[7] = c);
            let l;
            t[8] !== s || t[9] !== c ? (l = (0, G.jsxs)(`div`, {
                className: `flex min-w-0 flex-col`,
                children: [s, c]
            }), t[8] = s, t[9] = c, t[10] = l) : l = t[10];
            let u;
            return t[11] !== a || t[12] !== l ? (u = (0, G.jsxs)(`div`, {
                className: `flex items-start gap-2.5`,
                children: [a, l]
            }), t[11] = a, t[12] = l, t[13] = u) : u = t[13], u
        }, Y = u({
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
    X, me, he, ge = e((() => {
        X = e => e.normalize(`NFKD`).replaceAll(/[\u0300-\u036f]/g, ``).replaceAll(/@/g, ``).trim().toLowerCase().replaceAll(/['’]/g, ``), me = e => X(e).replaceAll(/[^a-z0-9_-]+/g, ``), he = e => X(e).replaceAll(/[^a-z0-9]+/g, `-`).replaceAll(/-+/g, `-`).replaceAll(/^-+|-+$/g, ``) || `agent`
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
    return w({
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
        Ce = _(), T(), n(), a(), we = () => {
            "use forget";
            let e = (0, Ce.c)(9),
                {
                    data: t,
                    isLoading: n
                } = r(be),
                i, a, o;
            e[0] === t ? (i = e[1], a = e[2], o = e[3]) : (a = t?.get(`connector_OdO9DCSRc2wYX4lGC3Ko7jbg5f7QpNum`) ?? [], i = new Set(a.map(xe)), o = a.find(Se)?.id ?? a[0]?.id ?? null, e[0] = t, e[1] = i, e[2] = a, e[3] = o);
            let s = o,
                c;
            return e[4] !== n || e[5] !== s || e[6] !== i || e[7] !== a ? (c = {
                isLoading: n,
                slackBotLinks: a,
                slackBotLinkIds: i,
                slackBotLinkId: s
            }, e[4] = n, e[5] = s, e[6] = i, e[7] = a, e[8] = c) : c = e[8], c
        }
    })),
    Ee, De, Oe, ke = e((() => {
        x(), Ee = [y(!1), y(!0)], De = e => Promise.all(Ee.map(t => e.resetQueries({
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
    return w({
        fetchValidLinksOnly: !0
    })
}

function Ue(e) {
    return (0, Q.jsx)(ze, {
        linkedSlackAgent: e
    }, e.agent_id)
}
var We, Q, Ge, Ke, qe, $, Je = e((() => {
    We = _(), v(), N(), ke(), F(), P(), Ve(), T(), n(), C(), a(), c(), O(), E(), k(), b(), g(), m(), Q = l(), Ge = e => ({
        queryKey: [`hermes`, `slack-linked-agents`, e],
        queryFn: () => S({
            linkId: e ?? ``
        })
    }), Ke = (e, t) => {
        t != null && e.prefetchQuery(Ge(t))
    }, qe = e => {
        "use forget";
        let t = (0, We.c)(56),
            {
                analyticsSource: n,
                onBack: a,
                onDisconnected: s,
                slackBotLinkId: c
            } = e,
            l = n === void 0 ? ce.OVERFLOW_MENU : n,
            u = d(),
            m;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (m = i(), t[0] = m) : m = t[0];
        let g = m,
            {
                data: _
            } = r(He),
            v;
        if (t[1] !== _ || t[2] !== c) {
            let e = _?.get(`connector_OdO9DCSRc2wYX4lGC3Ko7jbg5f7QpNum`) ?? [],
                n;
            t[4] === c ? n = t[5] : (n = e => e.id === c, t[4] = c, t[5] = n);
            let r = e.find(n);
            v = r?.link_params?.team_name?.trim() || r?.name?.trim() || null, t[1] = _, t[2] = c, t[3] = v
        } else v = t[3];
        let y = v,
            b = y == null ? $.disconnectSlackBody : $.disconnectSlackBodyWithTeamName,
            x;
        t[6] === u ? x = t[7] : (x = async e => {
            await ee(o), await Promise.all([De(u), ue(u)])
        }, t[6] = u, t[7] = x);
        let S;
        t[8] !== l || t[9] !== s ? (S = (e, t) => {
            oe({
                actionType: M.SLACK_WORKSPACE_DISCONNECT,
                actionResult: se.SUCCEEDED,
                source: l,
                slack: {},
                request: t?.()
            }), s()
        }, t[8] = l, t[9] = s, t[10] = S) : S = t[10];
        let C;
        t[11] === l ? C = t[12] : (C = (e, t) => {
            oe({
                actionType: M.SLACK_WORKSPACE_DISCONNECT,
                actionResult: se.FAILED,
                source: l,
                slack: {},
                request: t?.({
                    error: e
                })
            }), g.danger($.disconnectSlackFailed)
        }, t[11] = l, t[12] = C);
        let w;
        t[13] !== x || t[14] !== S || t[15] !== C ? (w = {
            mutationFn: x,
            onSuccess: S,
            onError: C
        }, t[13] = x, t[14] = S, t[15] = C, t[16] = w) : w = t[16];
        let T = h(w),
            E;
        t[17] === c ? E = t[18] : (E = Ge(c), t[17] = c, t[18] = E);
        let D = c != null,
            O;
        t[19] !== E || t[20] !== D ? (O = {
            ...E,
            enabled: D
        }, t[19] = E, t[20] = D, t[21] = O) : O = t[21];
        let k = p(O),
            A;
        t[22] === k.data?.items ? A = t[23] : (A = k.data?.items ?? [], t[22] = k.data?.items, t[23] = A);
        let j = A,
            N;
        t[24] === Symbol.for(`react.memo_cache_sentinel`) ? (N = (0, Q.jsx)(`div`, {
            className: `flex h-13 items-center gap-2`,
            children: (0, Q.jsx)(`div`, {
                className: `text-primary text-lg`,
                children: (0, Q.jsx)(f, {
                    ...$.disconnectSlackTitle
                })
            })
        }), t[24] = N) : N = t[24];
        let P;
        t[25] === y ? P = t[26] : (P = {
            teamName: y
        }, t[25] = y, t[26] = P);
        let F;
        t[27] !== b || t[28] !== P ? (F = (0, Q.jsx)(`p`, {
            className: `text-primary pt-1 text-sm`,
            children: (0, Q.jsx)(f, {
                ...b,
                values: P
            })
        }), t[27] = b, t[28] = P, t[29] = F) : F = t[29];
        let I;
        t[30] !== j || t[31] !== k.isError || t[32] !== k.isLoading || t[33] !== k.isSuccess ? (I = k.isLoading ? (0, Q.jsxs)(`div`, {
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
        }, `empty`) : null, t[30] = j, t[31] = k.isError, t[32] = k.isLoading, t[33] = k.isSuccess, t[34] = I) : I = t[34];
        let L;
        t[35] === I ? L = t[36] : (L = (0, Q.jsx)(te, {
            children: I
        }), t[35] = I, t[36] = L);
        let R;
        t[37] !== F || t[38] !== L ? (R = (0, Q.jsxs)(ae.Body, {
            className: `px-5 pt-0 pb-4`,
            children: [N, F, L]
        }), t[37] = F, t[38] = L, t[39] = R) : R = t[39];
        let z;
        t[40] === Symbol.for(`react.memo_cache_sentinel`) ? (z = (0, Q.jsx)(f, {
            ...le.back
        }), t[40] = z) : z = t[40];
        let B;
        t[41] === a ? B = t[42] : (B = (0, Q.jsx)(re, {
            color: `primary`,
            type: `button`,
            variant: `soft`,
            onClick: a,
            children: z
        }), t[41] = a, t[42] = B);
        let V;
        t[43] !== l || t[44] !== T ? (V = () => {
            let e = ne();
            oe({
                actionType: M.SLACK_WORKSPACE_DISCONNECT,
                actionResult: se.STARTED,
                actionInstanceId: e.actionInstanceId,
                source: l,
                slack: {}
            }), T.mutate(e)
        }, t[43] = l, t[44] = T, t[45] = V) : V = t[45];
        let H;
        t[46] === Symbol.for(`react.memo_cache_sentinel`) ? (H = (0, Q.jsx)(f, {
            ...$.disconnectSlackConfirm
        }), t[46] = H) : H = t[46];
        let U;
        t[47] !== T.isPending || t[48] !== V ? (U = (0, Q.jsx)(re, {
            color: `danger`,
            type: `button`,
            loading: T.isPending,
            onClick: V,
            children: H
        }), t[47] = T.isPending, t[48] = V, t[49] = U) : U = t[49];
        let W;
        t[50] !== B || t[51] !== U ? (W = (0, Q.jsx)(ae.Footer, {
            children: (0, Q.jsxs)(`div`, {
                className: `flex w-full items-center justify-between gap-2`,
                children: [B, U]
            })
        }), t[50] = B, t[51] = U, t[52] = W) : W = t[52];
        let G;
        return t[53] !== R || t[54] !== W ? (G = (0, Q.jsxs)(Q.Fragment, {
            children: [R, W]
        }), t[53] = R, t[54] = W, t[55] = G) : G = t[55], G
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
    q as _, Oe as a, _e as c, ge as d, me as f, fe as g, de as h, ke as i, ye as l, K as m, Je as n, Te as o, J as p, Ke as r, we as s, qe as t, he as u, pe as v
};
//# sourceMappingURL=c3d7ce6f-k177miorkk1vjlu8.js.map
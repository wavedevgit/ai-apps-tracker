import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Iv as n,
    Kat as r,
    Qat as i,
    c2 as a,
    d2 as o,
    k8 as s,
    nv as c,
    q5 as l
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    Bn as u,
    Ln as d,
    N as f,
    Nn as p,
    Rn as m,
    Vn as h,
    s as g,
    wn as _,
    zn as ee
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Czt as te,
    HIt as v,
    T_t as ne,
    _zt as y,
    bHt as re,
    hLt as ie,
    uzt as ae,
    v_t as b
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    Yu as x,
    qu as oe
} from "./8b34dbc2-egl8cz04n8nmlktg.js";
import {
    t as S
} from "./4b68ab38-hqs0yc0b0yhvv7p6.js";
import {
    d as se,
    t as C
} from "./707eab0c-hnzftmd8o2cha32b.js";
import {
    t as w
} from "./a35abcd6-ckxh13c2nv3bytau.js";
import {
    a as T,
    t as E
} from "./18093cad-j82m3e3j2p8dxsmx.js";
import {
    a as D,
    o as ce,
    s as O,
    t as k,
    x as A
} from "./4285e798-db8ayjk99ugt4omv.js";
import {
    J as j,
    q as M
} from "./8e7d0a25-l7bd7mjhpj4tsyzi.js";
import {
    l as N,
    u as P
} from "./126cbe2b-ojyyb05awbpmdcsy.js";
import {
    n as le,
    t as F
} from "./36ecb4f8-mczy9u7sxzk336ky.js";
import {
    a as I,
    c as ue,
    d as L,
    f as de,
    g as fe,
    h as pe,
    i as R,
    l as z,
    n as B,
    t as V,
    u as me,
    v as H
} from "./c3d7ce6f-fawke64tc6ahkvq5.js";
import {
    n as he,
    t as U
} from "./6c02b080-eons2ui3dpz2z09m.js";
import {
    t as W
} from "./500b4410-k9acofgvs3l6113b.js";
import {
    t as ge
} from "./500b4410-ot2m8v6au507labm.js";

function _e() {}
var ve, G, ye = e((() => {
        ve = _(), N(), x(), a(), n(), g(), R(), G = e => {
            "use forget";
            let t = (0, ve.c)(5),
                n;
            t[0] === e ? n = t[1] : (n = e === void 0 ? {} : e, t[0] = e, t[1] = n);
            let {
                onComplete: r
            } = n, i = f(), a;
            return t[2] !== r || t[3] !== i ? (a = () => {
                o(oe, {
                    connectorId: c,
                    noRedirect: !0,
                    onClose: _e,
                    onComplete: () => {
                        I(i), P(i), r?.()
                    }
                })
            }, t[2] = r, t[3] = i, t[4] = a) : a = t[4], a
        }
    })),
    be, K, q, xe, Se = e((() => {
        be = _(), C(), w(), E(), m(), K = u(), q = e => {
            "use forget";
            let t = (0, be.c)(11),
                {
                    title: n
                } = e,
                r = ee(),
                {
                    close: i
                } = T(),
                a;
            t[0] === n ? a = t[1] : (a = (0, K.jsx)(`div`, {
                className: `text-primary text-lg font-normal`,
                children: n
            }), t[0] = n, t[1] = a);
            let o;
            t[2] === r ? o = t[3] : (o = r.formatMessage(xe.closeLabel), t[2] = r, t[3] = o);
            let s;
            t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, K.jsx)(S, {
                className: `size-5`
            }), t[4] = s) : s = t[4];
            let c;
            t[5] !== i || t[6] !== o ? (c = (0, K.jsx)(`div`, {
                className: `translate-x-1 -translate-y-1`,
                children: (0, K.jsx)(se, {
                    "aria-label": o,
                    color: `primary`,
                    variant: `ghost`,
                    uniform: !0,
                    onClick: i,
                    children: s
                })
            }), t[5] = i, t[6] = o, t[7] = c) : c = t[7];
            let l;
            return t[8] !== a || t[9] !== c ? (l = (0, K.jsxs)(`div`, {
                className: `flex justify-between gap-3 pb-3`,
                children: [a, c]
            }), t[8] = a, t[9] = c, t[10] = l) : l = t[10], l
        }, xe = d({
            closeLabel: {
                id: `Hermes.GptStudio.Builder.SetupModalHeader.closeLabel`,
                defaultMessage: `Close Slack setup`
            }
        })
    })),
    J, Ce = e((() => {
        m(), J = d({
            agentMentionPreviewMessage: {
                id: `Hermes.GptStudio.Builder.SlackConversationPreviewMessages.agentMentionPreviewMessage`,
                defaultMessage: `Happy to help. What's up?`
            },
            agentProactivePreviewMessage: {
                id: `Hermes.GptStudio.Builder.SlackConversationPreviewMessages.agentProactivePreviewMessage`,
                defaultMessage: `Good news, we're on track.`
            },
            userMentionPreviewMessage: {
                id: `Hermes.GptStudio.Builder.SlackConversationPreviewMessages.userMentionPreviewMessage`,
                defaultMessage: `<mention>@{handle}</mention> I have a question.`
            },
            userProactivePreviewMessage: {
                id: `Hermes.GptStudio.Builder.SlackConversationPreviewMessages.userProactivePreviewMessage`,
                defaultMessage: `What's the current project status?`
            },
            agentSmartThreadPreviewMessage: {
                id: `Hermes.GptStudio.Builder.SlackConversationPreviewMessages.agentSmartThreadPreviewMessage`,
                defaultMessage: `Sure, happy to help! What's up?`
            },
            agentThreadFollowupPreviewMessage: {
                id: `Hermes.GptStudio.Builder.SlackConversationPreviewMessages.agentThreadFollowupPreviewMessage`,
                defaultMessage: `It's a sunny 72 degrees F.`
            },
            userSmartThreadPreviewMessage: {
                id: `Hermes.GptStudio.Builder.SlackConversationPreviewMessages.userSmartThreadPreviewMessage`,
                defaultMessage: `I have a question.`
            },
            userThreadFollowupMentionPreviewMessage: {
                id: `Hermes.GptStudio.Builder.SlackConversationPreviewMessages.userThreadFollowupMentionPreviewMessage`,
                defaultMessage: `<mention>@{handle}</mention> What's the weather like today?`
            },
            userThreadFollowupPreviewMessage: {
                id: `Hermes.GptStudio.Builder.SlackConversationPreviewMessages.userThreadFollowupPreviewMessage`,
                defaultMessage: `What's the weather like today?`
            }
        })
    })),
    we, Te, Y, Ee = e((() => {
        we = `h2Uyfq_HandlePrefix`, Te = `h2Uyfq_PreviewSurface`, Y = {
            HandlePrefix: we,
            PreviewSurface: Te
        }
    }));

function De() {
    return y().currentGpt
}
var X, Z, Q, Oe, ke, Ae, je, Me, Ne, $, Pe = e((() => {
        X = _(), k(), j(), te(), v(), U(), s(), i(), C(), F(), ge(), b(), Z = t(h()), m(), H(), Ce(), L(), z(), Ee(), Se(), Q = u(), Oe = `@`, ke = `https://help.openai.com/articles/20001199`, Ae = e => {
            "use forget";
            let t = (0, X.c)(62),
                {
                    initialHandle: n,
                    onNextStep: r,
                    onReconnect: i
                } = e,
                a = ee(),
                o = l(De),
                {
                    userName: s,
                    userPictureUrl: c
                } = he(),
                {
                    mutateAsync: u,
                    isPending: d
                } = ie(),
                f;
            t[0] !== o.name || t[1] !== a ? (f = ue({
                agentName: o.name,
                intl: a
            }), t[0] = o.name, t[1] = a, t[2] = f) : f = t[2];
            let m = f,
                h = n != null,
                g;
            t[3] !== o.name || t[4] !== n ? (g = n || me(o.name), t[3] = o.name, t[4] = n, t[5] = g) : g = t[5];
            let [_, te] = (0, Z.useState)(g), [v, y] = (0, Z.useState)(null), b;
            t[6] === _ ? b = t[7] : (b = de(_), t[6] = _, t[7] = b);
            let x = b,
                oe = x.length === 0,
                S;
            t[8] !== o.id || t[9] !== x || t[10] !== n || t[11] !== a || t[12] !== h || t[13] !== r || t[14] !== i || t[15] !== u ? (S = async () => {
                if (x.length === 0) return;
                let e = h ? ce.SLACK_HANDLE_CHANGE : ce.SLACK_HANDLE_CREATE;
                if (n != null && x === n) {
                    r(x), D({
                        actionType: e,
                        actionResult: O.SUCCEEDED,
                        source: A.SLACK_CHANNEL,
                        slack: {}
                    });
                    return
                }
                if (!o.id) {
                    D({
                        actionType: e,
                        actionResult: O.BLOCKED,
                        source: A.SLACK_CHANNEL,
                        slack: {}
                    }), y(a.formatMessage($.missingAgentIdError));
                    return
                }
                y(null);
                let t = re();
                D({
                    actionType: e,
                    actionResult: O.STARTED,
                    actionInstanceId: t.actionInstanceId,
                    source: A.SLACK_CHANNEL,
                    slack: {}
                });
                try {
                    let n = await u({
                        gptId: o.id,
                        params: {
                            agent_handle: x
                        }
                    });
                    ae.setSlackHandle(n.agent_handle), r(n.agent_handle), D({
                        actionType: e,
                        actionResult: O.SUCCEEDED,
                        source: A.SLACK_CHANNEL,
                        slack: {},
                        request: t()
                    })
                } catch (n) {
                    let r = n;
                    D({
                        actionType: e,
                        actionResult: O.FAILED,
                        source: A.SLACK_CHANNEL,
                        slack: {},
                        request: t({
                            error: r
                        })
                    }), y(je(r, a, i))
                }
            }, t[8] = o.id, t[9] = x, t[10] = n, t[11] = a, t[12] = h, t[13] = r, t[14] = i, t[15] = u, t[16] = S) : S = t[16];
            let C = S,
                w;
            t[17] === h ? w = t[18] : (w = (0, Q.jsx)(q, {
                title: h ? (0, Q.jsx)(p, {
                    ...$.changeTitle
                }) : (0, Q.jsx)(p, {
                    ...$.createTitle
                })
            }), t[17] = h, t[18] = w);
            let T;
            t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (T = (0, Q.jsx)(p, {
                ...J.agentMentionPreviewMessage
            }), t[19] = T) : T = t[19];
            let E;
            t[20] === x ? E = t[21] : (E = (0, Q.jsx)(p, {
                ...J.userMentionPreviewMessage,
                values: {
                    handle: x,
                    mention: pe
                }
            }), t[20] = x, t[21] = E);
            let k;
            t[22] !== m || t[23] !== o.icon || t[24] !== E || t[25] !== s || t[26] !== c ? (k = (0, Q.jsx)(`div`, {
                className: Y.PreviewSurface,
                children: (0, Q.jsx)(fe, {
                    agentIcon: o.icon,
                    agentMessage: T,
                    agentName: m,
                    userMessage: E,
                    userName: s,
                    userPicture: c
                })
            }), t[22] = m, t[23] = o.icon, t[24] = E, t[25] = s, t[26] = c, t[27] = k) : k = t[27];
            let j;
            t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (j = (0, Q.jsx)(`p`, {
                className: `text-primary text-sm font-medium`,
                children: (0, Q.jsx)(p, {
                    ...$.fieldLabel
                })
            }), t[28] = j) : j = t[28];
            let M;
            t[29] === a ? M = t[30] : (M = a.formatMessage($.fieldLabel), t[29] = a, t[30] = M);
            let N;
            t[31] === Symbol.for(`react.memo_cache_sentinel`) ? (N = (0, Q.jsx)(`span`, {
                className: Y.HandlePrefix,
                children: Oe
            }), t[31] = N) : N = t[31];
            let P;
            t[32] === v ? P = t[33] : (P = e => {
                v != null && y(null), te(de(e.target.value))
            }, t[32] = v, t[33] = P);
            let F;
            t[34] !== _ || t[35] !== d || t[36] !== M || t[37] !== P ? (F = (0, Q.jsxs)(`div`, {
                className: `flex flex-col gap-1.5`,
                children: [j, (0, Q.jsx)(le, {
                    "aria-label": M,
                    autoComplete: `off`,
                    disabled: d,
                    name: `slack-handle`,
                    size: `lg`,
                    startAdornment: N,
                    value: _,
                    onChange: P
                })]
            }), t[34] = _, t[35] = d, t[36] = M, t[37] = P, t[38] = F) : F = t[38];
            let I;
            t[39] === v ? I = t[40] : (I = v && (0, Q.jsx)(`div`, {
                className: `text-danger mb-3 text-sm`,
                role: `alert`,
                children: v
            }, `error`), t[39] = v, t[40] = I);
            let L;
            t[41] === I ? L = t[42] : (L = (0, Q.jsx)(ne, {
                children: I
            }), t[41] = I, t[42] = L);
            let R = oe || d,
                z;
            t[43] === C ? z = t[44] : (z = () => {
                C()
            }, t[43] = C, t[44] = z);
            let B;
            t[45] === h ? B = t[46] : (B = h ? (0, Q.jsx)(p, {
                ...$.changeCta
            }) : (0, Q.jsx)(p, {
                ...$.createCta
            }), t[45] = h, t[46] = B);
            let V;
            t[47] !== d || t[48] !== R || t[49] !== z || t[50] !== B ? (V = (0, Q.jsx)(se, {
                color: `primary`,
                disabled: R,
                pill: !0,
                block: !0,
                loading: d,
                size: `lg`,
                onClick: z,
                children: B
            }), t[47] = d, t[48] = R, t[49] = z, t[50] = B, t[51] = V) : V = t[51];
            let H;
            t[52] !== L || t[53] !== V ? (H = (0, Q.jsxs)(`div`, {
                children: [L, V]
            }), t[52] = L, t[53] = V, t[54] = H) : H = t[54];
            let U;
            t[55] !== F || t[56] !== H || t[57] !== k ? (U = (0, Q.jsxs)(`div`, {
                className: `flex flex-col gap-5`,
                children: [k, F, H]
            }), t[55] = F, t[56] = H, t[57] = k, t[58] = U) : U = t[58];
            let W;
            return t[59] !== U || t[60] !== w ? (W = (0, Q.jsxs)(`div`, {
                className: `flex flex-col p-4`,
                children: [w, U]
            }), t[59] = U, t[60] = w, t[61] = W) : W = t[61], W
        }, je = (e, t, n) => {
            if (e instanceof r) switch (typeof e.detail?.error_code == `string` ? e.detail.error_code : null) {
                case `slack_agent_name_conflict`:
                    return t.formatMessage($.agentNameConflictError);
                case `slack_agent_name_required`:
                    return t.formatMessage($.agentNameRequiredError);
                case `slack_handle_conflict`:
                    return t.formatMessage($.handleConflictError);
                case `feature_not_in_plan`:
                    return (0, Q.jsx)(p, {
                        ...$.featureNotInPlanError,
                        values: {
                            link: e => (0, Q.jsx)(W, {
                                to: ke,
                                target: `_blank`,
                                rel: `noopener noreferrer`,
                                children: e
                            })
                        }
                    });
                case `slack_generic_permissions_error`:
                    return (0, Q.jsx)(p, {
                        ...$.genericPermissionsError,
                        values: {
                            link: e => (0, Q.jsx)(W, {
                                to: ke,
                                target: `_blank`,
                                rel: `noopener noreferrer`,
                                children: e
                            })
                        }
                    });
                case `slack_permissions_error`:
                    return t.formatMessage($.permissionsError);
                case `slack_permissions_missing`:
                    return t.formatMessage($.permissionsMissingError);
                case `slack_workspace_required`:
                    return t.formatMessage($.workspaceRequiredError);
                case `slack_connection_invalid_team_id`:
                    return n ? (0, Q.jsx)(Me, {
                        message: $.invalidConnectionTeamIdErrorWithReconnect,
                        onReconnect: n
                    }) : t.formatMessage($.invalidConnectionTeamIdError);
                case `slack_installation_not_found`:
                    return n ? (0, Q.jsx)(Me, {
                        message: $.installationMissingErrorWithReconnect,
                        onReconnect: n
                    }) : t.formatMessage($.installationMissingError);
                case `agent_not_found`:
                case `slack_agent_profile_not_found`:
                    return t.formatMessage($.agentNotFoundError);
                case `invalid_slack_handle`:
                    return t.formatMessage($.invalidHandleError)
            }
            return M(e, t.formatMessage($.createFailedFallback))
        }, Me = e => {
            "use forget";
            let t = (0, X.c)(5),
                {
                    message: n,
                    onReconnect: r
                } = e,
                i;
            t[0] === r ? i = t[1] : (i = {
                reconnect: e => (0, Q.jsx)(Ne, {
                    onClick: r,
                    children: e
                })
            }, t[0] = r, t[1] = i);
            let a;
            return t[2] !== n || t[3] !== i ? (a = (0, Q.jsx)(p, {
                ...n,
                values: i
            }), t[2] = n, t[3] = i, t[4] = a) : a = t[4], a
        }, Ne = e => {
            "use forget";
            let t = (0, X.c)(3),
                {
                    children: n,
                    onClick: r
                } = e,
                i;
            return t[0] !== n || t[1] !== r ? (i = (0, Q.jsx)(`button`, {
                className: `font-medium text-inherit underline decoration-current underline-offset-2 transition-opacity hover:opacity-80`,
                type: `button`,
                onClick: r,
                children: n
            }), t[0] = n, t[1] = r, t[2] = i) : i = t[2], i
        }, $ = d({
            agentNameConflictError: {
                id: `Hermes.GptStudio.Builder.SetupHandleView.agentNameConflictError`,
                defaultMessage: `Name is already in use. Rename your agent and try again.`
            },
            agentNotFoundError: {
                id: `Hermes.GptStudio.Builder.SetupHandleView.agentNotFoundError`,
                defaultMessage: `Make sure your agent is saved before creating the Slack handle.`
            },
            agentNameRequiredError: {
                id: `Hermes.GptStudio.Builder.SetupHandleView.agentNameRequiredError`,
                defaultMessage: `Your agent needs a name before creating the Slack handle.`
            },
            changeCta: {
                id: `Hermes.GptStudio.Builder.SetupHandleView.changeCta`,
                defaultMessage: `Change handle`
            },
            changeTitle: {
                id: `Hermes.GptStudio.Builder.SetupHandleView.changeTitle`,
                defaultMessage: `Change Slack handle`
            },
            createCta: {
                id: `Hermes.GptStudio.Builder.SetupHandleView.createCta`,
                defaultMessage: `Create handle`
            },
            createFailedFallback: {
                id: `Hermes.GptStudio.Builder.SetupHandleView.createFailedFallback`,
                defaultMessage: `We couldn't create this Slack handle right now. Try again.`
            },
            createTitle: {
                id: `Hermes.GptStudio.Builder.SetupHandleView.createTitle`,
                defaultMessage: `Create Slack handle`
            },
            featureNotInPlanError: {
                id: `Hermes.GptStudio.Builder.SetupHandleView.featureNotInPlanError`,
                defaultMessage: `This Slack workspace's plan doesn't include user groups, which are required to create agent handles. <link>Learn more</link>`
            },
            fieldLabel: {
                id: `Hermes.GptStudio.Builder.SetupHandleView.fieldLabel`,
                defaultMessage: `Slack handle`
            },
            genericPermissionsError: {
                id: `Hermes.GptStudio.Builder.SetupHandleView.genericPermissionsError`,
                defaultMessage: `Your Slack workspace is missing permissions for members to manage Slack user groups. Ask your admin to <link>enable this</link>.`
            },
            handleConflictError: {
                id: `Hermes.GptStudio.Builder.SetupHandleView.handleConflictError`,
                defaultMessage: `Handle is already taken. Try a different one.`
            },
            installationMissingError: {
                id: `Hermes.GptStudio.Builder.SetupHandleView.installationMissingError`,
                defaultMessage: `Reconnect Slack before creating the Slack handle for this agent.`
            },
            invalidConnectionTeamIdError: {
                id: `Hermes.GptStudio.Builder.SetupHandleView.invalidConnectionTeamIdError`,
                defaultMessage: `Reconnect Slack and choose the Slack workspace where you want to create this handle.`
            },
            installationMissingErrorWithReconnect: {
                id: `Hermes.GptStudio.Builder.SetupHandleView.installationMissingErrorWithReconnect`,
                defaultMessage: `<reconnect>Reconnect</reconnect> Slack before creating the Slack handle for this agent.`
            },
            invalidConnectionTeamIdErrorWithReconnect: {
                id: `Hermes.GptStudio.Builder.SetupHandleView.invalidConnectionTeamIdErrorWithReconnect`,
                defaultMessage: `<reconnect>Reconnect</reconnect> Slack and choose the Slack workspace where you want to create this handle.`
            },
            workspaceRequiredError: {
                id: `Hermes.GptStudio.Builder.SetupHandleView.workspaceRequiredError`,
                defaultMessage: `You must be logged in on a ChatGPT workspace.`
            },
            invalidHandleError: {
                id: `Hermes.GptStudio.Builder.SetupHandleView.invalidHandleError`,
                defaultMessage: `Use letters, numbers, or underscores for this handle.`
            },
            missingAgentIdError: {
                id: `Hermes.GptStudio.Builder.SetupHandleView.missingAgentIdError`,
                defaultMessage: `Save your agent before creating the Slack handle.`
            },
            permissionsError: {
                id: `Hermes.GptStudio.Builder.SetupHandleView.permissionsError`,
                defaultMessage: `Slack permissions need to be refreshed before this handle can be created.`
            },
            permissionsMissingError: {
                id: `Hermes.GptStudio.Builder.SetupHandleView.permissionsMissingError`,
                defaultMessage: `Slack needs more permissions before this handle can be created.`
            }
        })
    })),
    Fe, Ie, Le, Re = e((() => {
        Fe = _(), k(), ye(), B(), Ie = u(), Le = e => {
            "use forget";
            let t = (0, Fe.c)(7),
                {
                    onReturn: n,
                    slackBotLinkId: r
                } = e,
                i = G(),
                a;
            t[0] !== n || t[1] !== i ? (a = () => {
                i(), n()
            }, t[0] = n, t[1] = i, t[2] = a) : a = t[2];
            let o;
            return t[3] !== n || t[4] !== r || t[5] !== a ? (o = (0, Ie.jsx)(V, {
                analyticsSource: A.SLACK_CHANNEL,
                onBack: n,
                onDisconnected: a,
                slackBotLinkId: r
            }), t[3] = n, t[4] = r, t[5] = a, t[6] = o) : o = t[6], o
        }
    }));
export {
    Ce as a, Se as c, Pe as i, ye as l, Re as n, J as o, Ae as r, q as s, Le as t, G as u
};
//# sourceMappingURL=2d8719cd-mpedd3fgfn9z5d7y.js.map
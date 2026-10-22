import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as n,
    $J as r,
    A2 as i,
    A8 as a,
    Ait as o,
    Aq as s,
    B1 as c,
    Hot as l,
    I5 as u,
    IU as d,
    Iv as f,
    J5 as p,
    LU as m,
    Mtt as h,
    Ott as g,
    QZ as _,
    R5 as v,
    R8 as y,
    RZ as b,
    Vot as x,
    Y7 as S,
    Yat as C,
    a0 as ee,
    aot as w,
    bA as T,
    cst as E,
    eY as D,
    est as te,
    gF as ne,
    j2 as O,
    mA as k,
    nv as A,
    ott as j,
    ptt as M,
    q1 as N,
    qJ as P,
    sY as re,
    sst as ie,
    tot as ae,
    vF as oe,
    z5 as se,
    zU as ce,
    zq as le
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Bn as ue,
    Ln as F,
    Lt as de,
    N as fe,
    O as pe,
    Q as me,
    Rn as I,
    Vn as he,
    Zt as ge,
    p as _e,
    rn as ve,
    s as ye,
    w as be,
    wn as L,
    zn as xe
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Rt as Se,
    $it as Ce,
    ARt as we,
    AVn as Te,
    DRt as Ee,
    EVn as De,
    Ezt as Oe,
    FRt as ke,
    GRt as Ae,
    GVt as je,
    HIt as Me,
    JRt as Ne,
    KVt as Pe,
    MRt as Fe,
    NRt as Ie,
    ORt as Le,
    OTn as Re,
    Ozt as ze,
    PRt as Be,
    QRt as Ve,
    RIt as He,
    TRt as Ue,
    TTn as We,
    UVt as Ge,
    V_n as Ke,
    WRt as qe,
    XLt as Je,
    XVt as Ye,
    Xit as Xe,
    YRt as Ze,
    Zit as Qe,
    aRt as $e,
    abn as et,
    bRt as tt,
    cHt as nt,
    cLt as rt,
    cRt as it,
    dLt as at,
    dRt as ot,
    dzt as R,
    eLt as st,
    eRt as ct,
    eat as lt,
    fLt as ut,
    fRt as dt,
    fbn as ft,
    gzt as pt,
    hRt as mt,
    iHt as ht,
    iRt as gt,
    izt as _t,
    jRt as vt,
    kRt as yt,
    nHt as bt,
    nRt as xt,
    nzt as St,
    oRt as Ct,
    pRt as wt,
    qRt as Tt,
    rzt as Et,
    sRt as Dt,
    tHt as Ot,
    tzt as kt,
    uRt as At,
    vzt as z,
    wzt as B,
    xHt as jt,
    xRt as Mt,
    zIt as Nt,
    z_n as Pt
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    Ch as Ft,
    Mm as It,
    Nm as Lt,
    Sh as Rt,
    xh as zt
} from "./8b34dbc2-bgocf3s6t6l67twq.js";
import {
    C as Bt,
    S as Vt,
    a as V,
    d as Ht,
    f as Ut,
    h as H,
    o as U,
    s as W,
    t as Wt,
    x as G
} from "./4285e798-h11w1wjvb5tjxvuy.js";
import {
    a as Gt,
    i as Kt,
    n as qt
} from "./cfc49363-daqpdi2y11gn9mrb.js";
import {
    c as Jt,
    o as Yt
} from "./e2ef8fe8-cf69inh4iz3xxcb8.js";
import {
    n as Xt,
    t as Zt
} from "./8e88ec39-ly2p52dkrwo6r0lt.js";
var Qt, $t, en, tn = e((() => {
        Qt = L(), qt(), $t = [], en = e => {
            "use forget";
            let t = (0, Qt.c)(9),
                {
                    displayIds: n
                } = e,
                r = n === void 0 ? $t : n,
                i;
            t[0] === r ? i = t[1] : (i = Kt(r), t[0] = r, t[1] = i);
            let a = Gt(i),
                o;
            t[2] === a.data?.displayById ? o = t[3] : (o = a.data?.displayById ?? new Map, t[2] = a.data?.displayById, t[3] = o);
            let s = o,
                c;
            return t[4] !== s || t[5] !== a.error || t[6] !== a.isLoading || t[7] !== a.refetch ? (c = {
                connectorById: s,
                connectorDisplayById: s,
                isLoading: a.isLoading,
                error: a.error,
                refetch: a.refetch
            }, t[4] = s, t[5] = a.error, t[6] = a.isLoading, t[7] = a.refetch, t[8] = c) : c = t[8], c
        }
    })),
    nn, rn, an, on, sn, cn = e((() => {
        f(), nn = e => e.trim().toUpperCase(), rn = e => (typeof e.owner_profile?.name == `string` ? e.owner_profile.name : ``) || (typeof e.owner_profile?.email == `string` ? e.owner_profile.email : ``) || (typeof e.name == `string` ? e.name.trim() : ``) || e.id, an = [`send_message`, `add_reaction`, `remove_reaction`, `get_thread`, `get_file`, `send_file`], on = ({
            config: e,
            enabled: t = !0
        }) => ({
            trigger: {
                type: `CONNECTOR`,
                connector_id: A,
                link: {
                    id: e.linkId
                },
                webhook_name: `message`,
                enabled: t,
                required_actions: an,
                params: {
                    channel_id: e.channelId,
                    ...e.channelName != null && e.channelName.trim().length > 0 ? {
                        channel_name: e.channelName.trim()
                    } : {},
                    ...e.channelVisibility == null ? {} : {
                        channel_visibility: e.channelVisibility
                    },
                    only_initial_message: e.onlyInitialMessage,
                    thread_followup_mode: e.threadFollowupMode,
                    ...e.reviewRepliesBeforePosting === !0 ? {
                        review_replies_before_posting: !0
                    } : {}
                }
            }
        }), sn = ({
            config: e,
            enabled: t = !0
        }) => ({
            trigger: {
                type: `CONNECTOR`,
                connector_id: A,
                link: {
                    id: e.linkId
                },
                webhook_name: `mention`,
                enabled: t,
                required_actions: an,
                params: {
                    channel_id: e.channelId,
                    ...e.channelName != null && e.channelName.trim().length > 0 ? {
                        channel_name: e.channelName.trim()
                    } : {},
                    ...e.channelVisibility == null ? {} : {
                        channel_visibility: e.channelVisibility
                    },
                    thread_followup_mode: e.threadFollowupMode,
                    ...e.reviewRepliesBeforePosting === !0 ? {
                        review_replies_before_posting: !0
                    } : {}
                }
            }
        })
    })),
    ln, un, dn, fn, pn, mn, hn, gn, _n, vn, yn, bn, xn, Sn, Cn, wn, Tn, En = e((() => {
        cn(), f(), ge(), ln = e => typeof e == `object` && !!e, un = e => ln(e.slack_trigger.params) ? e.slack_trigger.params : {}, dn = e => {
            let t = un(e);
            return typeof t.channel_name == `string` ? t.channel_name.trim() : ``
        }, fn = e => {
            let t = un(e);
            return typeof t.channel_id == `string` ? nn(t.channel_id) : ``
        }, pn = e => {
            let t = dn(e);
            return t.length > 0 ? t : fn(e)
        }, mn = e => e.startsWith(`#`) ? e : `#${e}`, hn = e => typeof e.slack_trigger.link.id == `string` ? e.slack_trigger.link.id : null, gn = e => {
            let t = un(e);
            return t.channel_visibility === `public` || t.channel_visibility === `private` ? t.channel_visibility : typeof t.channel_name != `string` || t.channel_name.trim().length === 0 ? `private` : `public`
        }, _n = e => e.pending_deletion !== !0 && e.slack_trigger.enabled !== !1, vn = e => e.slack_trigger.webhook_name === `mention` ? `mentions` : `all_messages`, yn = e => un(e).thread_followup_mode === `all_replies` ? `all_replies` : `mentions`, bn = e => un(e).review_replies_before_posting === !0, xn = (e, t) => {
            let n = nn(t);
            return e.find(e => e.pending_deletion !== !0 && fn(e) === n)
        }, Sn = ({
            deployments: e,
            existingDeployment: t,
            nextDeployment: n
        }) => t == null ? [...e, n] : e.map(e => e.deployment_id === t.deployment_id ? n : e), Cn = e => {
            let t = hn(e),
                n = fn(e);
            return !t || !n ? null : {
                type: `slack`,
                link_id: t,
                channel_id: n
            }
        }, wn = ({
            existingDeployment: e,
            channelId: t,
            channelName: n,
            channelVisibility: r,
            linkId: i,
            responseMode: a,
            threadFollowupMode: o,
            reviewRepliesBeforePosting: s
        }) => {
            let c = nn(t),
                l = e == null ? `` : dn(e),
                u = r === `private` && c === n && l.length === 0 ? `` : n,
                d = o ?? (e == null ? `all_replies` : yn(e)),
                f = s ?? (e != null && bn(e)),
                p = {
                    linkId: i,
                    workspaceName: ``,
                    channelId: c,
                    channelName: u,
                    channelVisibility: r,
                    onlyInitialMessage: a === `all_messages`,
                    threadFollowupMode: d,
                    reviewRepliesBeforePosting: f
                },
                m = a === `mentions` ? sn({
                    config: p
                }).trigger : on({
                    config: p
                }).trigger,
                h = e?.slack_trigger.instructions;
            if (m.type !== `CONNECTOR`) throw Error(`Slack deployments must use connector triggers.`);
            return {
                deployment_id: e?.deployment_id ?? ve(),
                slack_trigger: {
                    ...m,
                    connector_id: A,
                    ...h == null ? {} : {
                        instructions: h
                    }
                },
                materialized_trigger_id: e?.materialized_trigger_id,
                pending_deletion: !1
            }
        }, Tn = ({
            channelId: e,
            channelName: t,
            currentSlackDeployments: n,
            isPrivate: r,
            slackBotLinkId: i
        }) => {
            let a = xn(n, e),
                o = wn({
                    existingDeployment: a,
                    channelId: e,
                    channelName: t ?? e,
                    channelVisibility: r ? `private` : `public`,
                    linkId: i,
                    responseMode: a == null ? `mentions` : vn(a)
                });
            return Sn({
                deployments: n,
                existingDeployment: a,
                nextDeployment: o
            })
        }
    })),
    Dn, On, kn, An, jn, Mn, Nn, Pn, Fn, In, Ln, Rn, zn, Bn, Vn, Hn, Un, Wn, Gn, Kn, qn, Jn, Yn, Xn, Zn, Qn, $n, er, tr, nr, rr, ir, ar, or, K, sr = e((() => {
        Dn = L(), Je(), i(), En(), On = e => e.replace(/\u200b/g, ``).replace(/\n{2,}/g, `
`), kn = (e, t, n = `visible`) => n === `visible` ? On(e.prompt) !== On(t.prompt) : e.prompt !== t.prompt, An = (e, t, n) => {
            "use forget";
            let r = (0, Dn.c)(4),
                i;
            return r[0] !== e || r[1] !== t || r[2] !== n ? (i = Mn(e, t, n), r[0] = e, r[1] = t, r[2] = n, r[3] = i) : i = r[3], i
        }, jn = (e, t, n) => {
            "use forget";
            return An(e, t, n).length
        }, Mn = (e, t, n) => Nn(Rn(t), In(e), n), Nn = (e, t, n) => {
            let r = [];
            (e.name !== t.name || e.tagline !== t.tagline) && r.push({
                type: `agent_profile`,
                changeType: `modified`
            }), O(Ln(e.modelSpec), Ln(t.modelSpec)) || r.push({
                type: `agent_settings`,
                changeType: `modified`
            }), kn(e, t, n?.diffType) && r.push({
                type: `prompt`,
                changeType: `modified`
            }), (e.icon.color !== t.icon.color || e.icon.name !== t.icon.name) && r.push({
                type: `icon`,
                changeType: `modified`,
                icon: t.icon
            }), or(e, t, n) && r.push({
                type: `files`,
                changeType: `modified`
            });
            let i = er(e.starterPrompts, t.starterPrompts);
            i && r.push({
                type: `starter_prompts`,
                changeType: i.changeType,
                iconName: i.iconName
            });
            let a = rr(e.deployments, t.deployments);
            r.push(...a);
            let o = ir(e.deployments, t.deployments);
            o != null && r.push(o);
            let s = Pn(e.tools.memory, t.tools.memory, Xn);
            return s != null && r.push({
                type: `memory`,
                changeType: s
            }), Fn(e.tools.connectors, t.tools.connectors, e => e.connectorId).forEach(({
                before: e,
                after: t
            }) => {
                let n = Pn(e, t, Zn);
                if (n == null) return;
                let i = t ?? e;
                i != null && r.push({
                    type: `connector`,
                    connectorId: i.connectorId,
                    connectorName: i.connectorName,
                    changeType: n
                })
            }), Fn(e.tools.skills, t.tools.skills, e => e.id).forEach(({
                before: e,
                after: t
            }) => {
                let n = Pn(e, t, $n);
                if (n == null) return;
                let i = t ?? e;
                i != null && r.push({
                    type: `skill`,
                    skillId: i.id,
                    skillName: Jn(i),
                    iconName: i.icon?.name,
                    changeType: n
                })
            }), r
        }, Pn = (e, t, n) => e == null && t == null ? null : e == null ? `added` : t == null ? `removed` : n(e, t) ? null : `modified`, Fn = (e, t, n) => {
            let r = new Map(e.map(e => [n(e), e])),
                i = new Map(t.map(e => [n(e), e]));
            return K([...r.keys(), ...i.keys()]).map(e => ({
                before: r.get(e),
                after: i.get(e)
            }))
        }, In = e => ({
            name: e.name.trim(),
            modelSpec: e.modelSpec,
            tagline: e.tagline.trim(),
            prompt: e.prompt.trim(),
            starterPrompts: e.starterPrompts.map(qn),
            treeRevision: e.treeRevision,
            fileTreeId: e.fileTreeId ?? null,
            icon: e.icon,
            deployments: e.deployments,
            tools: {
                memory: e.tools.memory,
                connectors: e.tools.connectors.map(Vn).sort(Gn),
                skills: e.tools.skills.map(Kn).sort(Yn)
            }
        }), Ln = e => ({
            ...e?.name == null ? {} : {
                name: e.name
            },
            ...e?.reasoning_effort == null ? {} : {
                reasoning_effort: e.reasoning_effort
            }
        }), Rn = e => e == null ? zn() : {
            name: e.name.trim(),
            modelSpec: e.model_spec,
            tagline: e.tagline.trim(),
            prompt: e.prompt.trim(),
            starterPrompts: e.starter_prompts.map(qn),
            treeRevision: e.file_tree?.tree_revision ?? null,
            fileTreeId: e.file_tree_id ?? null,
            icon: e.icon,
            deployments: ct(e.deployments),
            tools: {
                memory: Bn(e),
                connectors: e.tools.connectors?.map(Hn).sort(Gn) ?? [],
                skills: e.skills.map(Kn).sort(Yn)
            }
        }, zn = () => ({
            name: ``,
            modelSpec: null,
            tagline: ``,
            prompt: ``,
            starterPrompts: [],
            treeRevision: null,
            fileTreeId: null,
            icon: {
                name: `suitcase`,
                color: `purple`
            },
            deployments: ct(null),
            tools: {
                memory: null,
                connectors: [],
                skills: []
            }
        }), Bn = e => e.persistent_folder === `none` ? null : {
            type: `memory`
        }, Vn = e => {
            switch (e.connectionType) {
                case `oauth`:
                case `xaa_oauth`:
                case `api_key`:
                    return {
                        connectorId: e.connectorId, connectorName: e.connectorId, authType: `LINK`, connectionTypeHint: e.connectionType, linkId: e.link.id, allowedActions: K(e.allowedActions), actionParamSchemas: e.actionParamSchemas ?? null, userApprovals: Wn(e.userApprovals), appsPrivacyControl: e.appsPrivacyControl ?? null, actionsConstraintsConfiguration: Un(e.actionsConstraintsConfiguration)
                    };
                case `end_user_connection`:
                    return {
                        connectorId: e.connectorId, connectorName: e.connectorId, authType: `LINK_PLACEHOLDER`, connectionTypeHint: `end_user_connection`, linkId: `link_placeholder_${e.connectorId}`, allowedActions: K(e.allowedActions), actionParamSchemas: e.actionParamSchemas ?? null, userApprovals: Wn(e.userApprovals), appsPrivacyControl: e.appsPrivacyControl ?? null, actionsConstraintsConfiguration: Un(e.actionsConstraintsConfiguration)
                    };
                case `none`:
                    return {
                        connectorId: e.connectorId, connectorName: e.connectorId, authType: `NONE`, connectionTypeHint: `none`, linkId: e.link.id, allowedActions: K(e.allowedActions), actionParamSchemas: e.actionParamSchemas ?? null, userApprovals: Wn(e.userApprovals), appsPrivacyControl: e.appsPrivacyControl ?? null, actionsConstraintsConfiguration: Un(e.actionsConstraintsConfiguration)
                    };
                default:
                    throw Error(`Unsupported connector connection type`)
            }
        }, Hn = e => {
            let t = e.connector_identifier.type === `CONNECTOR_ID` ? e.connector_identifier.connector_id : e.connector_identifier.server_url,
                n = e.server_label?.trim() ?? ``,
                r = n.length > 0 ? n : t;
            return e.auth.type === `LINK` ? e.auth.link.auth_type === `NONE` ? {
                connectorId: t,
                connectorName: r,
                authType: `NONE`,
                connectionTypeHint: `none`,
                linkId: e.auth.link.id,
                allowedActions: K(e.allowed_tools),
                actionParamSchemas: e.action_param_schemas ?? null,
                userApprovals: Wn(e.user_approvals),
                appsPrivacyControl: e.apps_privacy_control ?? null,
                actionsConstraintsConfiguration: Un(e.actions_constraints_configuration)
            } : {
                connectorId: t,
                connectorName: r,
                authType: `LINK`,
                connectionTypeHint: e.auth.link.auth_type === `API_KEY` ? `api_key` : `oauth`,
                link: e.auth.link,
                linkId: e.auth.link.id,
                allowedActions: K(e.allowed_tools),
                actionParamSchemas: e.action_param_schemas ?? null,
                userApprovals: Wn(e.user_approvals),
                appsPrivacyControl: e.apps_privacy_control ?? null,
                actionsConstraintsConfiguration: Un(e.actions_constraints_configuration)
            } : {
                connectorId: t,
                connectorName: r,
                authType: `LINK_PLACEHOLDER`,
                connectionTypeHint: `end_user_connection`,
                linkId: e.auth.id,
                allowedActions: K(e.allowed_tools),
                actionParamSchemas: e.action_param_schemas ?? null,
                userApprovals: Wn(e.user_approvals),
                appsPrivacyControl: e.apps_privacy_control ?? null,
                actionsConstraintsConfiguration: Un(e.actions_constraints_configuration)
            }
        }, Un = e => {
            let t = e?.rules ?? [];
            return t.length === 0 ? null : {
                rules: t.map(e => ({
                    id: e.id,
                    name: e.name,
                    constraints: (e.constraints ?? []).map(e => ({
                        action_name: e.action_name,
                        parameter: e.parameter,
                        constraint: e.constraint ?? {}
                    }))
                }))
            }
        }, Wn = e => {
            if (e == null) return `always`;
            if (e === `always` || e === `never`) return e;
            let t = e.always?.tool_names ? K(e.always.tool_names) : void 0,
                n = e.never?.tool_names ? K(e.never.tool_names) : void 0;
            if (!t && !n) return `always`;
            let r = {};
            return t && (r.always = {
                tool_names: t
            }), n && (r.never = {
                tool_names: n
            }), r
        }, Gn = (e, t) => {
            let n = e.connectorName.localeCompare(t.connectorName);
            return n === 0 ? e.connectorId.localeCompare(t.connectorId) : n
        }, Kn = e => ({
            ...e,
            name: e.name.trim(),
            description: e.description.trim()
        }), qn = e => ({
            ...e,
            title: e.title.trim(),
            prompt: e.prompt.trim(),
            short_description: e.short_description?.trim() ?? ``
        }), Jn = e => e.name.trim().length > 0 ? e.name : e.id, Yn = (e, t) => {
            let n = Jn(e).localeCompare(Jn(t));
            return n === 0 ? e.id.localeCompare(t.id) : n
        }, Xn = (e, t) => O(e, t), Zn = (e, t) => e.authType === t.authType && e.connectionTypeHint === t.connectionTypeHint && e.linkId === t.linkId && O(e.allowedActions, t.allowedActions) && O(e.userApprovals, t.userApprovals) && e.appsPrivacyControl === t.appsPrivacyControl && O(e.actionsConstraintsConfiguration, t.actionsConstraintsConfiguration), Qn = e => `file_tree_id` in e ? e.file_tree_id ?? `` : ``, $n = (e, t) => e.name === t.name && e.description === t.description && (e.icon?.name ?? ``) === (t.icon?.name ?? ``) && Qn(e) === Qn(t), er = (e, t) => {
            let n, r, i = !1,
                a = !1,
                o = !1,
                s = Math.max(e.length, t.length);
            for (let c = 0; c < s; c++) {
                let s = c < e.length,
                    l = c < t.length;
                s && l ? O(e[c], t[c]) || (o = !0, n ??= t[c]) : !s && l ? (i = !0, n ??= t[c]) : s && !l && (a = !0, r ??= e[c])
            }
            let c = n ?? r;
            if (o || i && a) return {
                changeType: `modified`,
                iconName: c?.icon
            };
            if (i) return {
                changeType: `added`,
                iconName: c?.icon
            };
            if (a) return {
                changeType: `removed`,
                iconName: c?.icon
            }
        }, tr = (e, t) => ({
            memory: e.memory == null ? null : {
                ...e.memory
            },
            connectors: e.connectors.map(e => nr(e, t.connectors)),
            skills: e.skills.map(e => ({
                ...e
            }))
        }), nr = (e, t) => {
            let n = t.find(t => t.connectorId === e.connectorId),
                r = {
                    connectorId: e.connectorId,
                    allowedActions: e.allowedActions,
                    actionParamSchemas: e.actionParamSchemas,
                    actionsConstraintsConfiguration: e.actionsConstraintsConfiguration,
                    userApprovals: e.userApprovals,
                    appsPrivacyControl: e.appsPrivacyControl
                };
            if (e.connectionTypeHint === `end_user_connection`) return {
                ...r,
                connectionType: `end_user_connection`
            };
            if (e.connectionTypeHint === `none`) {
                let t = n != null && n.connectionType === `none` ? n.link : null,
                    i = e.linkId.trim().length > 0 ? e.linkId : `link_none_${e.connectorId}`;
                return {
                    ...r,
                    connectionType: `none`,
                    link: t ?? {
                        id: i,
                        connector_id: e.connectorId,
                        auth_type: `NONE`
                    },
                    linkId: t?.id ?? i
                }
            }
            return n == null || n.connectionType !== `oauth` && n.connectionType !== `api_key` ? e.link == null ? {
                ...r,
                connectionType: `end_user_connection`
            } : {
                ...r,
                connectionType: e.connectionTypeHint,
                link: e.link
            } : {
                ...r,
                connectionType: e.connectionTypeHint,
                link: n.link
            }
        }, rr = (e, t) => {
            let n = [],
                r = e.slack.filter(e => !e.pending_deletion),
                i = t.slack.filter(e => !e.pending_deletion);
            for (let e of r) {
                let t = i.find(t => t.deployment_id === e.deployment_id);
                t && !O(ar(e), ar(t)) ? n.push({
                    type: `slack_channel`,
                    changeType: `modified`,
                    slackChannelName: pn(t),
                    deploymentId: t.deployment_id
                }) : t || n.push({
                    type: `slack_channel`,
                    changeType: `removed`,
                    slackChannelName: pn(e),
                    deploymentId: e.deployment_id
                })
            }
            for (let e of i) r.find(t => t.deployment_id === e.deployment_id) || n.push({
                type: `slack_channel`,
                changeType: `added`,
                slackChannelName: pn(e),
                deploymentId: e.deployment_id
            });
            return n
        }, ir = (e, t) => {
            let n = e.api.find(e => !e.pending_deletion),
                r = t.api.find(e => !e.pending_deletion),
                i = Pn(n, r, (e, t) => e.deployment_id === t.deployment_id && O(e.api_trigger, t.api_trigger)),
                a = r ?? n;
            return i == null || a == null ? null : {
                type: `api_channel`,
                changeType: i,
                deploymentId: a.deployment_id
            }
        }, ar = e => ({
            ...e,
            slack_trigger: {
                ...e.slack_trigger,
                enabled: e.slack_trigger.enabled !== !1,
                instructions: e.slack_trigger.instructions ?? ``,
                link: {
                    id: e.slack_trigger.link.id
                },
                params: {
                    ...e.slack_trigger.params,
                    channel_name: pn(e),
                    channel_visibility: gn(e),
                    only_initial_message: e.slack_trigger.params?.only_initial_message === !0,
                    thread_followup_mode: yn(e)
                },
                required_actions: K(e.slack_trigger.required_actions ?? [])
            }
        }), or = (e, t, n) => n?.compareDraftFileTreeRevision && e.treeRevision != null && t.treeRevision != null && e.treeRevision < t.treeRevision ? !0 : e.fileTreeId !== t.fileTreeId, K = e => [...new Set(e)].sort()
    })),
    cr, lr, ur, dr, fr, pr = e((() => {
        Me(), En(), cr = e => e?.connector_type === `MCP` && e.status === `ONLY_ME`, lr = ({
            connectorById: e,
            draftConnectors: t
        }) => t.some(t => t.connectionType === `end_user_connection` && cr(e.get(t.connectorId))), ur = ({
            draftConnectors: e,
            publishedBaselineGpt: t,
            treatDraftConnectorsAsShared: n
        }) => {
            let r = t?.tools.connectors?.filter(e => e.auth.type === `LINK` && e.auth.link.auth_type !== `NONE`);
            return e.filter(e => e.connectionType !== `none` && (n || e.connectionType !== `end_user_connection`) && r?.find(t => t.connector_identifier.type === `CONNECTOR_ID` && t.connector_identifier.connector_id === e.connectorId) == null)
        }, dr = ({
            draftSlackDeployments: e,
            publishedBaselineGpt: t
        }) => e.filter(e => _n(e) && t?.deployments?.slack.find(t => t.deployment_id === e.deployment_id) == null), fr = ({
            canManageSharedConnections: e,
            connectorById: t,
            draftConnectors: n,
            draftSlackDeployments: r,
            publishedBaselineGpt: i,
            canBuild: a,
            isConnectorMetadataLoading: o,
            isWorkspacePermissionsLoading: s,
            publishPermissions: c,
            isPublishPermissionsLoading: l,
            isPublishPermissionsRefetching: u,
            shouldLoadWorkspaceSharingStateForSharedConnectorPolicy: d
        }) => {
            let f = n.some(e => e.connectionType === `end_user_connection`),
                p = t ?? new Map,
                m = f && o === !0,
                h = n.some(e => e.connectionType !== `end_user_connection` && e.connectionType !== `none`),
                g = lr({
                    connectorById: p,
                    draftConnectors: n
                }),
                _ = r.some(e => e.pending_deletion !== !0 && e.slack_trigger.enabled !== !1),
                v = !!i?.tools.connectors?.filter(e => e.auth.type === `LINK` && e.auth.link.auth_type !== `NONE`)?.length,
                y = f && _,
                b = m,
                x = g,
                S = He(c)?.capability != null,
                C = !!(e && d && (l || u) && c == null),
                ee = !!(e && d && S && h),
                w = !!(!s && a),
                T = ur({
                    draftConnectors: n,
                    publishedBaselineGpt: i,
                    treatDraftConnectorsAsShared: _
                }),
                E = dr({
                    draftSlackDeployments: r,
                    publishedBaselineGpt: i
                }),
                D = _ || S;
            return {
                canBuild: a,
                shouldLoadWorkspaceSharingStateForSharedConnectorPolicy: d,
                hasPublishPermission: w,
                hasDraftSharedPersonalConnector: h,
                hasPublishedSharedPersonalConnector: v,
                hasDraftEndUserConnector: f,
                hasDraftUnpublishedCustomMcpEndUserConnector: g,
                hasActiveSlackChannel: _,
                isPublishBlockedBySharedPersonalConnectionPolicy: ee,
                isPublishBlockedBySlackEndUserConnectionPolicy: y,
                isUnpublishedCustomMcpEndUserConnectionPolicyLoading: b,
                isPublishBlockedByUnpublishedCustomMcpEndUserConnectionPolicy: x,
                isSharedConnectorPolicyCheckLoading: C,
                isWorkspacePermissionsLoading: s,
                needsSharedConnectorConsent: e && (T.length > 0 || E.length > 0) && h && D,
                isPublishPermissionsLoading: e && l || m
            }
        }
    }));

function mr({
    conversation: e,
    gptId: t,
    isRunningDraftAgent: n
}) {
    n && Ft(e);
    let r = hr(e);
    if (!r) return;
    let i = gr(t, n);
    Rt(e.id, r, i, () => {}, {
        isRegen: !1,
        isOnboardingConversation: !1,
        delayAfterCompletion: !1,
        prepareDispatch: `immediate`,
        prepareSource: `custom_agent_conversation`
    })
}

function hr(e) {
    return u(() => et(e).id)
}

function gr(e, t) {
    return [le(e, {
        draft: t
    })]
}
var _r = e((() => {
        zt(), ft(), a(), s()
    })),
    vr, yr, br, xr, Sr, Cr, wr, Tr, Er = e((() => {
        Je(), vr = e => ({
            ...e,
            title: e.title,
            short_description: e.short_description,
            prompt: e.prompt.trim()
        }), yr = e => e == null ? null : {
            rules: e.rules.map(e => ({
                id: e.id,
                name: e.name,
                ...e.constraints == null ? {} : {
                    constraints: e.constraints.map(e => ({
                        action_name: e.action_name,
                        parameter: e.parameter,
                        ...e.constraint == null ? {} : {
                            constraint: e.constraint
                        }
                    }))
                }
            }))
        }, br = e => ({
            ...e?.name == null ? {} : {
                name: e.name
            },
            ...e?.reasoning_effort == null ? {} : {
                reasoning_effort: e.reasoning_effort
            }
        }), xr = e => {
            let t = e.icon,
                n = e.tools.memory,
                r = {
                    connectors: e.tools.connectors.map(e => {
                        let t = `link_placeholder_${e.connectorId}`,
                            n = (() => {
                                switch (e.connectionType) {
                                    case `end_user_connection`:
                                        return {
                                            type: `LINK_PLACEHOLDER`, connector_id: e.connectorId, actions: e.allowedActions, id: t
                                        };
                                    case `none`:
                                        return {
                                            type: `LINK`, link: {
                                                id: typeof e.linkId == `string` && e.linkId.trim().length > 0 ? e.linkId.trim() : t,
                                                connector_id: e.connectorId,
                                                auth_type: `NONE`
                                            }
                                        };
                                    case `oauth`:
                                    case `xaa_oauth`:
                                    case `api_key`:
                                        return {
                                            type: `LINK`, link: e.link
                                        }
                                }
                            })();
                        return {
                            connector_identifier: {
                                type: `CONNECTOR_ID`,
                                connector_id: e.connectorId
                            },
                            auth: n,
                            allowed_tools: e.allowedActions,
                            action_param_schemas: e.actionParamSchemas ?? null,
                            actions_constraints_configuration: yr(e.actionsConstraintsConfiguration),
                            user_approvals: e.userApprovals,
                            ...e.appsPrivacyControl == null ? {} : {
                                apps_privacy_control: e.appsPrivacyControl
                            }
                        }
                    })
                },
                i = e.id == null && n == null;
            return {
                name: e.name,
                prompt: e.prompt.trim(),
                model_spec: br(e.modelSpec),
                description: ``,
                tools: r,
                ...i ? {} : {
                    persistent_folder: n == null ? `none` : `per_user`
                },
                skills: e.tools.skills.map(xt),
                icon: t,
                tagline: e.tagline ?? ``,
                category: `general`,
                starter_prompts: e.starterPrompts.map(vr)
            }
        }, Sr = e => ({
            ...xr(e),
            deployments: e.deployments,
            file_tree_id: null,
            expected_draft_revision: e.draftRevision
        }), Cr = e => ({
            ...Sr(e),
            file_tree_id: e.fileTreeId ?? null
        }), wr = e => ({
            ...Sr(e),
            file_tree_id: null
        }), Tr = e => ({
            ...xr(e)
        })
    })),
    Dr, Or, kr, Ar, jr = e((() => {
        Je(), B(), Dr = (e, t) => ({
            model_spec: e.model_spec,
            name: e.name,
            prompt: e.prompt,
            tools: e.tools,
            skills: e.skills,
            creator_name: e.creator_name,
            icon: e.icon,
            tagline: e.tagline,
            category: e.category,
            persistent_folder: e.persistent_folder,
            starter_prompts: e.starter_prompts,
            creator_id: e.creator_id,
            created_at: e.created_at,
            updated_at: e.updated_at ?? e.created_at,
            id: t,
            version_id: e.version_id,
            file_tree_id: e.file_tree_id,
            file_tree: e.file_tree,
            deployments: ct(e.deployments),
            draft_revision: e.draft_revision
        }), Or = (e, t) => ({
            model_spec: e.model_spec,
            name: e.name,
            prompt: e.prompt,
            tools: e.tools,
            skills: e.skills,
            creator_name: e.creator_name,
            icon: e.icon,
            tagline: e.tagline,
            category: e.category,
            persistent_folder: e.persistent_folder,
            starter_prompts: e.starter_prompts,
            creator_id: e.creator_id,
            created_at: e.created_at,
            updated_at: e.updated_at ?? e.created_at,
            id: t,
            version_id: e.version_id,
            file_tree_id: e.file_tree_id,
            file_tree: e.file_tree,
            deployments: ct(e.deployments)
        }), kr = (e, t) => ({
            ...Or(e, t),
            version_id: e.draft_head_version_id ?? e.version_id,
            draft_revision: e.draft_head_revision
        }), Ar = (e, t, n) => {
            let r = Or(e, t),
                i = kr(e, t);
            return R.setCurrentGptFileTreeId(e.file_tree_id ?? null, {
                gptId: t,
                expectedTreeRevision: e.file_tree?.tree_revision
            }), R.setCurrentGptDraftRevision(e.draft_head_revision), R.setCurrentGptDeployments(r.deployments ?? ct(null), {
                gptId: t
            }), R.syncCurrentGptSkillsFromSavedGpt(i, {
                expectedSkillTreeRevisions: n?.expectedSkillTreeRevisions
            }), R.setLastPublishedGpt(r), R.setSavedGpt(i), r
        }
    }));

function Mr() {
    return Promise.resolve()
}
var Nr, q, Pr, Fr = e((() => {
    Nr = L(), i(), q = t(he()), Pr = e => {
        "use forget";
        let t = (0, Nr.c)(25),
            {
                hasChanges: n,
                payload: r,
                isBlocked: i,
                onSave: a,
                minIntervalMs: o,
                blockedRecheckMs: s
            } = e,
            c = o === void 0 ? 200 : o,
            l = s === void 0 ? 200 : s,
            u = (0, q.useRef)(null),
            d = (0, q.useRef)(null),
            f = (0, q.useRef)(null),
            p = (0, q.useRef)(null),
            m = (0, q.useRef)(i),
            h = (0, q.useRef)(a),
            g = (0, q.useRef)(Mr),
            _;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = () => {
            u.current != null && (clearTimeout(u.current), u.current = null)
        }, t[0] = _) : _ = t[0];
        let v = _,
            y;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (y = e => {
            v(), u.current = setTimeout(() => {
                u.current = null, g.current()
            }, e)
        }, t[1] = y) : y = t[1];
        let b = y,
            x;
        t[2] === c ? x = t[3] : (x = () => {
            d.current = null, p.current != null && b(c)
        }, t[2] = c, t[3] = x);
        let S = x,
            C;
        t[4] !== l || t[5] !== S ? (C = () => {
            if (d.current != null) return d.current;
            let e = p.current;
            if (e == null) return Promise.resolve();
            if (O(e, f.current)) return p.current = null, Promise.resolve();
            if (m.current) return b(l), Promise.resolve();
            p.current = null;
            let t = h.current(e).then(() => {
                f.current = e
            });
            return d.current = t, t.then(S, S), t
        }, t[4] = l, t[5] = S, t[6] = C) : C = t[6];
        let ee = C,
            w;
        t[7] === l ? w = t[8] : (w = async () => {
            for (v(); p.current != null || d.current != null;) {
                if (d.current != null) {
                    await d.current;
                    continue
                }
                if (v(), m.current) {
                    b(l);
                    return
                }
                await g.current()
            }
        }, t[7] = l, t[8] = w);
        let T = w,
            E, D;
        t[9] === i ? (E = t[10], D = t[11]) : (E = () => {
            m.current = i
        }, D = [i], t[9] = i, t[10] = E, t[11] = D), (0, q.useEffect)(E, D);
        let te, ne;
        t[12] === a ? (te = t[13], ne = t[14]) : (te = () => {
            h.current = a
        }, ne = [a], t[12] = a, t[13] = te, t[14] = ne), (0, q.useEffect)(te, ne);
        let k, A;
        t[15] === ee ? (k = t[16], A = t[17]) : (k = () => {
            g.current = ee
        }, A = [ee], t[15] = ee, t[16] = k, t[17] = A), (0, q.useEffect)(k, A);
        let j, M;
        t[18] !== n || t[19] !== c || t[20] !== r ? (j = () => {
            if (!n || r == null) {
                p.current = null, v();
                return
            }
            p.current = r, b(c)
        }, M = [v, n, c, r, b], t[18] = n, t[19] = c, t[20] = r, t[21] = j, t[22] = M) : (j = t[21], M = t[22]), (0, q.useEffect)(j, M);
        let N, P;
        return t[23] === Symbol.for(`react.memo_cache_sentinel`) ? (N = () => () => {
            g.current(), v()
        }, P = [v], t[23] = N, t[24] = P) : (N = t[23], P = t[24]), (0, q.useEffect)(N, P), T
    }
}));

function Ir(e, t) {
    if (e == null) return t;
    let n = Rr.get(e) ?? new Set;
    Rr.set(e, n), n.add(t);
    let r = () => {
        n.delete(t), n.size === 0 && Rr.delete(e)
    };
    return t.then(r, r), t
}
async function Lr(e) {
    if (e == null) return;
    let t = [...Rr.get(e) ?? []];
    t.length !== 0 && await Promise.allSettled(t)
}
var Rr, zr = e((() => {
        Rr = new Map
    })),
    Br, Vr, Hr, Ur, Wr = e((() => {
        ae(), I(), Br = F({
            slackDeploymentLinkNotAccessible: {
                id: `Hermes.GptStudio.Builder.SaveError.slackDeploymentLinkNotAccessible`,
                defaultMessage: `One or more Slack channels use a connection that was turned off in your workspace. Remove and re-add those channels after Slack is turned back on to continue.`
            },
            slackDeploymentLinkNotFound: {
                id: `Hermes.GptStudio.Builder.SaveError.slackDeploymentLinkNotFound`,
                defaultMessage: `One or more Slack channels use a connection that no longer exists or can't be accessed. Remove and re-add those channels to continue.`
            }
        }), Vr = (e, t) => {
            switch (e.code) {
                case `slack_deployment_link_not_accessible`:
                    return t(Br.slackDeploymentLinkNotAccessible);
                case `slack_deployment_link_not_found`:
                    return t(Br.slackDeploymentLinkNotFound);
                default:
                    return null
            }
        }, Hr = (e, t, n) => {
            if (e instanceof C) {
                if (n != null) {
                    let t = Vr(e, n);
                    if (t != null) return t
                }
                return w(e) ?? e.message
            }
            return typeof e == `string` && e.trim().length > 0 ? e : typeof e == `object` && e && `message` in e && typeof e.message == `string` && e.message.trim().length > 0 ? e.message : t
        }, Ur = e => e instanceof C && (e.code === `draft_revision_mismatch` || e.detail?.reason === `draft_version_mismatch`)
    }));

function Gr(e) {
    return Zr(e) || Qr(e)
}

function Kr(e) {
    "use forget";
    let t = (0, qr.c)(4),
        {
            skillId: n,
            enabled: r
        } = e,
        i = r === void 0 || r,
        {
            gptId: a
        } = je(),
        o;
    return t[0] !== i || t[1] !== a || t[2] !== n ? (o = ei({
        enabled: i,
        gptId: a,
        skillId: n
    }), t[0] = i, t[1] = a, t[2] = n, t[3] = o) : o = t[3], pe(o)
}
var qr, Jr, Yr, Xr, Zr, Qr, $r, ei, ti = e((() => {
        qr = L(), Ge(), B(), ie(), n(), ye(), Jr = `agents`, Yr = `openai.yaml`, Xr = 300 * 1e3, Zr = e => {
            let t = e.name.toLocaleLowerCase();
            return e.recursive_parents?.length === 2 && e.recursive_parents.at(1)?.name.toLocaleLowerCase() === Jr && t === Yr
        }, Qr = e => {
            let t = e.name.toLocaleLowerCase();
            return e.recursive_parents?.length === 1 && t === Jr
        }, $r = ({
            gptId: e,
            skillId: t
        }) => t == null ? [`hermes-gpt-skill-definition`, e ?? null] : [`hermes-gpt-skill-definition`, e ?? null, t], ei = ({
            enabled: e = !0,
            gptId: t,
            skillId: n
        }) => be({
            queryKey: $r({
                gptId: t,
                skillId: n
            }),
            enabled: e && t != null,
            staleTime: Xr,
            queryFn: async ({
                signal: e
            }) => {
                let r = E(t, `gptId`),
                    i = await S.safeGet(`/hermes/agent/{agent_id}/skills/{skill_id}/definition`, {
                        parameters: {
                            path: {
                                agent_id: r,
                                skill_id: n
                            }
                        },
                        signal: e
                    });
                return R.setCurrentGptSkillTreeRevision({
                    treeRevision: i.tree_revision,
                    skillId: n,
                    gptId: r
                }), i
            }
        })
    })),
    ni, ri, ii, ai, oi, si, ci, li, ui = e((() => {
        h(), B(), It(), oe(), Te(), D(), s(), o(), _(), ni = {
            hideFromHistory: !0,
            isDoNotRemember: !0
        }, ri = e => [le(e, {
            draft: !0
        })], ii = (e, t) => ne(e, {
            alwaysOnSystemHints: ri(t)
        }), ai = e => {
            let t = te();
            P.initThread({
                clientThreadId: e,
                conversationMode: {
                    kind: j.PrimaryAssistant
                },
                userId: t?.user?.id,
                accountId: t?.account?.id,
                disableConversationNavigation: !0
            });
            let n = r(e);
            n?.mode.kind === j.PrimaryAssistant && n.disableConversationNavigation === !0 && n.hideFromHistory === !0 || re(e, e => {
                e.mode = {
                    kind: j.PrimaryAssistant
                }, e.disableConversationNavigation = !0, e.hideFromHistory = !0
            })
        }, oi = (e, t) => (ai(e), ii(e, t)), si = async e => {
            e && await De(e, {
                skipIfExisting: !1
            })
        }, ci = async ({
            conversation: e,
            gptId: t,
            payload: n
        }) => {
            let r = ri(t);
            R.setPlutoCurrentPreview(e.id), await Lt({
                callsiteId: `request_completion.restricted.trusted_tester.gpt_studio.builder.chatgpt_preview.preview_thread_actions.1`,
                conversation: e,
                eventSource: `url`,
                promptMessage: b(n, {
                    system_hints: r
                }),
                completionMetadata: {
                    conversationMode: {
                        kind: j.PrimaryAssistant
                    },
                    systemHints: r
                },
                extraStreamParams: ni
            })
        }, li = e => {
            let t = r(e);
            if (!t) return null;
            let n = t.tree.getBranchFromLeaf(t.tree.currentLeafId)?.find(e => e.message.author.role === g.User);
            return !n || (n.message.metadata?.attachments?.length ?? 0) > 0 || n.message.content.content_type !== M.Text ? null : n.message.content.parts.join(``).trim() || null
        }
    }));

function di() {
    return z().currentGpt
}

function fi() {
    return ze(z())
}

function pi() {
    return z().savedGpt
}

function mi() {
    R.setIsAutosaving(!1)
}

function hi() {
    return mi
}
var gi, J, _i, vi, yi, bi, xi, Si, Ci, wi, Ti, Ei, Di, Oi = e((() => {
        gi = L(), bt(), _r(), sr(), Er(), jr(), Fr(), zr(), Wr(), B(), Me(), a(), Ke(), s(), m(), ye(), J = t(he()), I(), Wt(), At(), ti(), ui(), _i = ue(), vi = (e, t) => e.id != null && t?.id === e.id, yi = (0, J.createContext)(null), bi = ({
            children: e
        }) => {
            "use no forget";
            let t = xe(),
                n = fe(),
                {
                    mutate: r
                } = ut(),
                i = (0, J.useRef)(null),
                a = (0, J.useRef)(() => Promise.resolve(!1)),
                o = (0, J.useCallback)(async () => {
                    await i.current?.()
                }, []),
                s = (0, J.useCallback)(async () => {
                    let e = jt();
                    V({
                        actionType: U.DRAFT_SAVE_RETRY,
                        actionResult: W.STARTED,
                        actionInstanceId: e.actionInstanceId,
                        source: G.HEADER
                    });
                    try {
                        let t = await a.current();
                        V({
                            actionType: U.DRAFT_SAVE_RETRY,
                            actionResult: t ? W.SUCCEEDED : W.CANCELED,
                            source: G.HEADER,
                            request: e()
                        })
                    } catch (t) {
                        V({
                            actionType: U.DRAFT_SAVE_RETRY,
                            actionResult: W.FAILED,
                            source: G.HEADER,
                            request: e({
                                error: t
                            })
                        })
                    }
                }, []),
                c = (0, J.useCallback)(e => (i.current = e, () => {
                    i.current === e && (i.current = null)
                }), []),
                l = (0, J.useCallback)(async e => {
                    try {
                        let t = await n.fetchQuery({
                            ...Nt(e),
                            staleTime: 0
                        });
                        z().currentGpt.id === e && (R.loadAgent(t), await Promise.all([ot({
                            queryClient: n,
                            gptId: e
                        }), n.invalidateQueries({
                            queryKey: $r({
                                gptId: e
                            })
                        })]))
                    } catch (e) {
                        d().danger(t.formatMessage(Di.refreshAfterConflictFailed), {
                            error: e
                        })
                    }
                }, [t, n]),
                u = (0, J.useCallback)(async (e, i) => (await Lr(e.gptId), new Promise((a, o) => {
                    let c = null,
                        u = pt(e.gptId, e.params.expected_draft_revision ?? null),
                        f = i === `auto_save` ? U.DRAFT_AUTOSAVE : U.DRAFT_SAVE,
                        p = jt(),
                        m = t => {
                            V({
                                actionType: f,
                                actionResult: W.SUCCEEDED,
                                source: G.DIRECT,
                                agentId: e.gptId,
                                request: p()
                            });
                            let r = Dr(t, e.gptId);
                            n.invalidateQueries({
                                queryKey: Ye(e.gptId)
                            }), ot({
                                queryClient: n,
                                gptId: e.gptId
                            }), n.invalidateQueries({
                                queryKey: $r({
                                    gptId: e.gptId
                                })
                            }), n.invalidateQueries({
                                queryKey: [Pe]
                            }), n.invalidateQueries({
                                queryKey: Pt(e.gptId, le(e.gptId, {
                                    draft: !0
                                }))
                            }), z().currentGpt.id === e.gptId && (R.setCurrentGptFileTreeId(t.file_tree_id ?? null, {
                                gptId: e.gptId,
                                expectedTreeRevision: t.file_tree?.tree_revision
                            }), R.setCurrentGptDraftRevision(t.draft_revision), R.syncCurrentGptSkillsFromSavedGpt(r, {
                                expectedSkillTreeRevisions: e.expectedSkillTreeRevisions
                            }), R.setSavedGpt(r), R.setSaveError(null), wi(e.gptId))
                        },
                        h = n => {
                            if (V({
                                    actionType: f,
                                    actionResult: W.FAILED,
                                    source: G.DIRECT,
                                    agentId: e.gptId,
                                    request: p({
                                        error: n
                                    })
                                }), z().currentGpt.id === e.gptId) {
                                if (Ur(n)) {
                                    let r = t.formatMessage(Di.saveConflictDescription);
                                    d().danger(t.formatMessage(Di.saveConflictTitle), {
                                        id: `hermes-save-conflict`,
                                        description: r,
                                        duration: 12,
                                        hasCloseButton: !0,
                                        action: (0, _i.jsx)(`button`, {
                                            type: `button`,
                                            className: `font-medium underline`,
                                            onClick: () => l(e.gptId),
                                            children: t.formatMessage(Di.refreshAgent)
                                        })
                                    }), c = n, R.setSaveError(r);
                                    return
                                }
                                c = n, R.setSaveError(Hr(n, t.formatMessage(Di.autosaveFailedFallback), t.formatMessage), s)
                            }
                        };
                    R.setIsAutosaving(!0), V({
                        actionType: f,
                        actionResult: W.STARTED,
                        actionInstanceId: p.actionInstanceId,
                        source: G.DIRECT,
                        agentId: e.gptId
                    }), r({
                        ...e,
                        params: {
                            ...e.params,
                            save_source: i,
                            expected_draft_revision: u
                        }
                    }, {
                        onSuccess: m,
                        onError: h,
                        onSettled: () => {
                            if (R.setIsAutosaving(!1), c != null) {
                                o(c);
                                return
                            }
                            a()
                        }
                    })
                })), [t, n, l, s, r]),
                f = (0, J.useCallback)(async () => {
                    let e = z(),
                        t = e.currentGpt;
                    return !vi(t, e.savedGpt) || ze(e) || Mn(t, e.savedGpt, {
                        compareDraftFileTreeRevision: !0,
                        diffType: `strict`
                    }).length === 0 ? !1 : (await u({
                        gptId: t.id,
                        params: {
                            ...wr(t),
                            save_source: `auto_save`
                        },
                        expectedSkillTreeRevisions: Ci(t)
                    }, `auto_save`), !0)
                }, [u]),
                p = (0, J.useMemo)(() => ({
                    flushGptBuilderAutosave: o,
                    immediatelySaveDraft: f,
                    registerFlushGptBuilderAutosave: c,
                    saveDraft: u
                }), [o, f, c, u]);
            return (0, J.useEffect)(() => {
                a.current = f
            }, [f]), (0, _i.jsx)(yi, {
                value: p,
                children: e
            })
        }, xi = () => {
            "use forget";
            let e = (0, J.use)(yi);
            if (e == null) throw Error(`GptBuilderAutosave must be used within a GptBuilderAutosaveProvider`);
            return e
        }, Si = () => {
            "use forget";
            let {
                flushGptBuilderAutosave: e
            } = xi();
            return e
        }, Ci = e => {
            let t = {};
            for (let n of e.tools.skills) {
                if (n.type !== `uploaded_skill`) continue;
                let r = e.skillFileTreeRevisions[n.id];
                r !== void 0 && (t[n.id] = r)
            }
            return t
        }, wi = e => {
            let t = z();
            t.currentGpt.id === e && mr({
                conversation: oi(t.displayState.activePreviewThreadId, e),
                gptId: e,
                isRunningDraftAgent: !0
            })
        }, Ti = e => {
            "use forget";
            let t = (0, gi.c)(5),
                {
                    isPublishPending: n
                } = e,
                r = p(di),
                i = p(fi),
                a = p(pi),
                o;
            return t[0] !== r || t[1] !== n || t[2] !== i || t[3] !== a ? (o = (0, _i.jsx)(Ei, {
                currentGpt: r,
                isPublishPending: n,
                isReadonly: i,
                savedGpt: a
            }), t[0] = r, t[1] = n, t[2] = i, t[3] = a, t[4] = o) : o = t[4], o
        }, Ei = e => {
            "use forget";
            let t = (0, gi.c)(30),
                {
                    currentGpt: n,
                    isPublishPending: r,
                    isReadonly: i,
                    savedGpt: a
                } = e,
                {
                    registerFlushGptBuilderAutosave: o,
                    saveDraft: s
                } = xi(),
                c;
            t[0] !== n || t[1] !== a ? (c = vi(n, a), t[0] = n, t[1] = a, t[2] = c) : c = t[2];
            let l = c,
                u;
            t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (u = {
                compareDraftFileTreeRevision: !0,
                diffType: `strict`
            }, t[3] = u) : u = t[3];
            let d = jn(n, a, u),
                f;
            bb0: {
                if (n.id == null) {
                    f = null;
                    break bb0
                }
                let e = n.id,
                    r;t[4] === n ? r = t[5] : (r = wr(n), t[4] = n, t[5] = r);
                let i;t[6] === r ? i = t[7] : (i = {
                    ...r,
                    save_source: `auto_save`
                }, t[6] = r, t[7] = i);
                let a;t[8] === n ? a = t[9] : (a = Ci(n), t[8] = n, t[9] = a);
                let o;t[10] !== n.id || t[11] !== i || t[12] !== a ? (o = {
                    gptId: e,
                    params: i,
                    expectedSkillTreeRevisions: a
                }, t[10] = n.id, t[11] = i, t[12] = a, t[13] = o) : o = t[13],
                f = o
            }
            let p = f,
                m = l && !i && d > 0,
                h;
            t[14] === s ? h = t[15] : (h = e => s(e, `auto_save`), t[14] = s, t[15] = h);
            let g;
            t[16] !== p || t[17] !== r || t[18] !== m || t[19] !== h ? (g = {
                hasChanges: m,
                payload: p,
                isBlocked: r,
                onSave: h
            }, t[16] = p, t[17] = r, t[18] = m, t[19] = h, t[20] = g) : g = t[20];
            let _ = Pr(g),
                v, y;
            t[21] !== _ || t[22] !== o ? (v = () => o(_), y = [_, o], t[21] = _, t[22] = o, t[23] = v, t[24] = y) : (v = t[23], y = t[24]), (0, J.useEffect)(v, y);
            let b, x;
            t[25] !== l || t[26] !== d ? (x = () => {
                (!l || d === 0) && R.setIsAutosaving(!1)
            }, b = [l, d], t[25] = l, t[26] = d, t[27] = b, t[28] = x) : (b = t[27], x = t[28]), (0, J.useEffect)(x, b);
            let S;
            return t[29] === Symbol.for(`react.memo_cache_sentinel`) ? (S = [], t[29] = S) : S = t[29], (0, J.useEffect)(hi, S), null
        }, Di = F({
            autosaveFailedFallback: {
                id: `Hermes.GptStudio.Builder.PublishHeaderSection.autosaveFailedFallback`,
                defaultMessage: `Autosave failed`
            },
            saveConflictTitle: {
                id: `Hermes.GptStudio.Builder.SaveConflict.title`,
                defaultMessage: `Save conflict`
            },
            saveConflictDescription: {
                id: `Hermes.GptStudio.Builder.SaveConflict.description`,
                defaultMessage: `Someone else saved changes to this agent. Refresh to load the latest version before continuing.`
            },
            refreshAgent: {
                id: `Hermes.GptStudio.Builder.SaveConflict.refreshAgent`,
                defaultMessage: `Refresh agent`
            },
            refreshAfterConflictFailed: {
                id: `Hermes.GptStudio.Builder.SaveConflict.refreshFailed`,
                defaultMessage: `Couldn't refresh the agent. Try again.`
            }
        })
    })),
    ki, Ai, ji, Mi, Ni, Pi, Fi, Ii, Li, Ri = e((() => {
        ki = L(), B(), a(), Ai = y({}), ji = e => {
            "use forget";
            let t = (0, ki.c)(2),
                n;
            return t[0] === e ? n = t[1] : (n = () => Mi(e), t[0] = e, t[1] = n), p(n)
        }, Mi = e => {
            if (e == null) return [];
            let t = `${e}:`;
            return Object.entries(Ai()).filter(([e]) => e.startsWith(t)).map(([, e]) => e)
        }, Ni = (e, t) => {
            let n = new Set(e.map(Li));
            return [...e, ...t.filter(e => !n.has(Li(e)))]
        }, Pi = ({
            gptId: e,
            isDirty: t,
            skillId: n
        }) => {
            if (n == null) {
                Ii({
                    gptId: e,
                    isDirty: t,
                    change: {
                        type: `files`,
                        changeType: `modified`
                    }
                });
                return
            }
            let r = z().currentGpt.tools.skills.find(e => e.id === n);
            r != null && Fi({
                gptId: e,
                isDirty: t,
                skillIconName: r.icon?.name,
                skillId: n,
                skillName: r.name
            })
        }, Fi = ({
            gptId: e,
            isDirty: t,
            skillIconName: n,
            skillId: r,
            skillName: i
        }) => {
            Ii({
                gptId: e,
                isDirty: t,
                change: {
                    type: `skill`,
                    changeType: `modified`,
                    iconName: n,
                    skillId: r,
                    skillName: i.trim().length > 0 ? i : r
                }
            })
        }, Ii = ({
            change: e,
            gptId: t,
            isDirty: n
        }) => {
            if (t == null) return;
            let r = `${t}:${Li(e)}`;
            Ai.set(t => {
                if (!n && t[r] == null) return t;
                let i = {
                    ...t
                };
                return n ? i[r] = e : delete i[r], i
            })
        }, Li = e => {
            switch (e.type) {
                case `connector`:
                    return `${e.type}:${e.connectorId}`;
                case `skill`:
                    return `${e.type}:${e.skillId}`;
                default:
                    return e.type
            }
        }
    }));

function zi() {
    removeEventListener(`beforeunload`, Xi)
}

function Bi() {
    return addEventListener(`beforeunload`, Xi), zi
}
var Vi, Hi, Ui, Wi, Gi, Ki, qi, Ji, Yi, Xi, Zi, Qi, $i, ea, ta, na, ra, ia, aa, oa, sa, ca = e((() => {
    Vi = L(), a(), Hi = t(he()), l(), Ui = new Map, Wi = y(new Map), Gi = new Set, Ki = e => Wi().has(e), qi = e => {
        "use forget";
        let t = (0, Vi.c)(6),
            n;
        t[0] === e ? n = t[1] : (n = () => Ki(e), t[0] = e, t[1] = n);
        let r = p(n),
            [i, a] = (0, Hi.useState)(r),
            o, s;
        return t[2] !== r || t[3] !== i ? (o = () => {
            !r && i && a(!1)
        }, s = [r, i], t[2] = r, t[3] = i, t[4] = o, t[5] = s) : (o = t[4], s = t[5]), (0, Hi.useEffect)(o, s), i && r
    }, Ji = e => `active:${e}`, Yi = (e, t, n) => {
        Wi.set(r => {
            if (r.has(e) === n) return r;
            let i = new Map(r);
            return n ? i.set(e, t) : i.delete(e), i
        })
    }, Xi = e => {
        oa(), Wi().size !== 0 && (e.preventDefault(), e.returnValue = ``)
    }, Zi = () => {
        "use forget";
        let e = (0, Vi.c)(1),
            t;
        e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = [], e[0] = t) : t = e[0], (0, Hi.useEffect)(Bi, t)
    }, Qi = (e, t) => {
        let n = e ?? ``,
            r = Ui.get(n) ?? new Set;
        Ui.set(n, r), r.add(t);
        let i = Ji(n);
        Yi(i, n, !0);
        let a = () => {
            r.delete(t), r.size === 0 && (Ui.delete(n), Yi(i, n, !1))
        };
        t.then(a, a)
    }, $i = async e => {
        if (e != null)
            for (;;) {
                aa(e);
                let t = [...Ui.get(e) ?? []];
                if (t.length === 0) {
                    if (!sa(e)) return;
                    continue
                }
                await Promise.all(t)
            }
    }, ea = $i, ta = e => {
        e != null && aa(e)
    }, na = ta, ra = e => {
        for (let t of Gi)
            if (t.clear(e)) return !0;
        return !1
    }, ia = class {
        constructor(e) {
            x(this, `saveJob`, void 0), x(this, `pendingSaves`, new Map), this.saveJob = e, Gi.add(this)
        }
        enqueue({
            gptId: e,
            key: t,
            job: n
        }) {
            let r = this.pendingSaves.get(t);
            return r ?? (r = {
                activePromise: null,
                gptId: e,
                queuedSave: null
            }, this.pendingSaves.set(t, r)), r.gptId = e, Yi(t, r.gptId, !0), r.queuedSave?.resolve(), new Promise((e, t) => {
                r.queuedSave = {
                    job: n,
                    reject: t,
                    resolve: e
                }
            })
        }
        start$(e) {
            for (let [t, n] of this.pendingSaves) n.gptId === e && this.startQueuedSave$(t)
        }
        hasQueuedSave(e) {
            for (let t of this.pendingSaves.values())
                if (t.gptId === e && t.queuedSave != null) return !0;
            return !1
        }
        clear(e) {
            let t = this.pendingSaves.get(e);
            if (t == null || t.activePromise != null || t.queuedSave == null) return !1;
            let {
                gptId: n,
                queuedSave: r
            } = t;
            return r.resolve(), this.pendingSaves.delete(e), Yi(e, n, !1), !0
        }
        startQueuedSave$(e) {
            let t = this.pendingSaves.get(e);
            if (t == null || t.activePromise != null || t.queuedSave == null) return;
            let n = t.queuedSave;
            t.queuedSave = null;
            let r = this.runSaveQueue$(e, t, n);
            t.activePromise = r, Qi(t.gptId, r)
        }
        async runSaveQueue$(e, t, n) {
            let r = n;
            try {
                for (; r != null;) {
                    try {
                        await this.saveJob(r.job), r.resolve()
                    } catch (e) {
                        if (t.queuedSave == null) throw r.reject(e), e;
                        r.resolve()
                    }
                    r = t.queuedSave, t.queuedSave = null
                }
            } finally {
                if (t.activePromise = null, t.queuedSave == null) {
                    let n = t.gptId;
                    this.pendingSaves.delete(e), Yi(e, n, !1)
                } else Yi(e, t.gptId, !0)
            }
        }
    }, aa = e => {
        for (let t of Gi) t.start$(e)
    }, oa = () => {
        for (let e of Wi().values()) e != null && aa(e)
    }, sa = e => {
        for (let t of Gi)
            if (t.hasQueuedSave(e)) return !0;
        return !1
    }
}));

function la() {
    return z().currentGpt
}

function ua() {
    return z().lastPublishedGpt
}
var da, fa = e((() => {
    Me(), a(), B(), da = () => {
        "use forget";
        let e = p(la),
            t = p(ua),
            {
                data: n
            } = rt(e.id);
        return e.id != null && (t?.id === e.id || n != null)
    }
}));

function pa(e) {
    return e.connectorId
}

function ma() {
    return Oe(z())
}

function ha(e) {
    return e.connectionType !== `end_user_connection` && e.connectionType !== `none`
}
var ga, _a, va, ya, ba, xa, Y, Sa = e((() => {
        ga = L(), k(), tn(), Xe(), B(), We(), a(), N(), I(), _a = `switch-slack-connectors-to-shared-connection`, va = `slack-end-user-connection-owner-required`, ya = `switch-unpublished-custom-mcps-to-agent-owned-account`, ba = e => {
            "use forget";
            let t = (0, ga.c)(28),
                {
                    currentGpt: n,
                    isPublishBlockedBySharedPersonalConnectionPolicy: r,
                    isPublishBlockedBySlackEndUserConnectionPolicy: i,
                    isPublishBlockedByUnpublishedCustomMcpEndUserConnectionPolicy: a
                } = e,
                o = xe(),
                s;
            t[0] === n.tools.connectors ? s = t[1] : (s = n.tools.connectors.map(pa), t[0] = n.tools.connectors, t[1] = s);
            let c = s,
                l;
            t[2] === c ? l = t[3] : (l = {
                displayIds: c
            }, t[2] = c, t[3] = l);
            let u = en(l),
                d = u.connectorById,
                {
                    oldToNewAppIds: f
                } = Re(),
                m = p(ma),
                h;
            if (t[4] !== m || t[5] !== n.tools.connectors || t[6] !== f) {
                let e;
                t[8] !== m || t[9] !== f ? (e = e => f.has(e.connectorId) && (m || e.connectionType === `end_user_connection`), t[8] = m, t[9] = f, t[10] = e) : e = t[10], h = n.tools.connectors.some(e), t[4] = m, t[5] = n.tools.connectors, t[6] = f, t[7] = h
            } else h = t[7];
            let g = h,
                _;
            t[11] === n.tools.connectors ? _ = t[12] : (_ = n.tools.connectors.filter(ha), t[11] = n.tools.connectors, t[12] = _);
            let v = m && _.length > 0,
                {
                    isLoading: y
                } = ee(),
                b;
            t[13] === v ? b = t[14] : (b = {
                enabled: v
            }, t[13] = v, t[14] = b);
            let {
                data: x,
                isLoading: S
            } = lt(b), C = v && (y || S) || g && u.isLoading, w;
            t[15] !== m || t[16] !== d || t[17] !== n || t[18] !== o.formatMessage || t[19] !== r || t[20] !== i || t[21] !== a || t[22] !== x || t[23] !== f ? (w = xa({
                connectorById: d,
                currentGpt: n,
                formatMessage: o.formatMessage,
                isPublishBlockedBySharedPersonalConnectionPolicy: r,
                isPublishBlockedBySlackEndUserConnectionPolicy: i,
                isPublishBlockedByUnpublishedCustomMcpEndUserConnectionPolicy: a,
                canManageSharedConnections: m,
                linksByConnectorId: x,
                oldToNewAppIds: f
            }), t[15] = m, t[16] = d, t[17] = n, t[18] = o.formatMessage, t[19] = r, t[20] = i, t[21] = a, t[22] = x, t[23] = f, t[24] = w) : w = t[24];
            let T;
            return t[25] !== C || t[26] !== w ? (T = {
                isLoading: C,
                ...w
            }, t[25] = C, t[26] = w, t[27] = T) : T = t[27], T
        }, xa = ({
            connectorById: e,
            currentGpt: t,
            formatMessage: n,
            isPublishBlockedBySharedPersonalConnectionPolicy: r,
            isPublishBlockedBySlackEndUserConnectionPolicy: i,
            isPublishBlockedByUnpublishedCustomMcpEndUserConnectionPolicy: a,
            canManageSharedConnections: o,
            linksByConnectorId: s,
            oldToNewAppIds: c
        }) => {
            let l = T(),
                u = [],
                d = [];
            t.name.trim() || u.push({
                key: `add-name`,
                label: n(Y.addNameChecklistItem)
            }), t.prompt.trim() || u.push({
                key: `add-instructions`,
                label: n(Y.addInstructionsChecklistItem)
            }), r && u.push({
                key: `remove-shared-personal-connections`,
                label: n(l ? Y.removeSharedPersonalConnectionChecklistItemUseForEveryone : Y.removeSharedPersonalConnectionChecklistItem)
            }), i && u.push({
                key: o ? _a : va,
                label: n(o ? l ? Y.slackSharedConnectionChecklistItemUseForEveryone : Y.slackSharedConnectionChecklistItem : Y.slackSharedConnectionChecklistItemEditor),
                icon: `slack`
            }), a && u.push({
                key: ya,
                label: n(o ? l ? Y.unpublishedCustomMcpSharedConnectionChecklistItemUseForEveryone : Y.unpublishedCustomMcpSharedConnectionChecklistItem : Y.unpublishedCustomMcpSharedConnectionChecklistItemEditor)
            });
            let f = t.tools.connectors.filter(e => c.has(e.connectorId) && (o || e.connectionType === `end_user_connection`));
            for (let t of f) u.push({
                key: `upgrade-legacy-connector:${t.connectorId}`,
                label: n(Y.upgradeLegacyConnectorChecklistItem, {
                    connectorName: e.get(t.connectorId)?.name ?? t.connectorId
                })
            });
            return {
                missingConnectorTools: t.tools.connectors.filter(e => e.connectionType !== `end_user_connection` && e.connectionType !== `none`).filter(e => !o || c.has(e.connectorId) ? !1 : Ce({
                    sharedLinks: (s?.get(e.connectorId) ?? []).filter(Qe),
                    persistedSharedLinkId: e.connectionType === `end_user_connection` ? null : e.linkId ?? e.link.id,
                    allowFirstAvailableLink: !1
                }) == null),
                publishChecklistItems: u,
                publishOptionalItemsChecklist: d
            }
        }, Y = F({
            addNameChecklistItem: {
                id: `Hermes.GptStudio.Builder.UsePublishChecklist.addNameChecklistItem`,
                defaultMessage: `Missing name`
            },
            addInstructionsChecklistItem: {
                id: `Hermes.GptStudio.Builder.UsePublishChecklist.addInstructionsChecklistItem`,
                defaultMessage: `Missing instructions`
            },
            removeSharedPersonalConnectionChecklistItem: {
                id: `Hermes.GptStudio.Builder.UsePublishChecklist.removeSharedPersonalConnectionChecklistItem`,
                defaultMessage: `Remove agent-owned app connections`
            },
            removeSharedPersonalConnectionChecklistItemUseForEveryone: {
                id: `Hermes.GptStudio.Builder.UsePublishChecklist.removeSharedPersonalConnectionChecklistItemUseForEveryone`,
                defaultMessage: `Remove apps using shared connections`
            },
            slackSharedConnectionChecklistItem: {
                id: `Hermes.GptStudio.Builder.UsePublishChecklist.slackSharedConnectionChecklistItem`,
                defaultMessage: `To work in Slack, all apps must use an agent-owned connection.`
            },
            slackSharedConnectionChecklistItemUseForEveryone: {
                id: `Hermes.GptStudio.Builder.UsePublishChecklist.slackSharedConnectionChecklistItemUseForEveryone`,
                defaultMessage: `To work in Slack, turn on "Use for everyone" for all apps.`
            },
            slackSharedConnectionChecklistItemEditor: {
                id: `Hermes.GptStudio.Builder.UsePublishChecklist.slackSharedConnectionChecklistItemEditor`,
                defaultMessage: `To work in Slack, an agent owner must configure all apps to use an agent-owned connection.`
            },
            unpublishedCustomMcpSharedConnectionChecklistItem: {
                id: `Hermes.GptStudio.Builder.UsePublishChecklist.unpublishedCustomMcpSharedConnectionChecklistItem`,
                defaultMessage: `Unpublished Custom MCPs must use an agent-owned account to publish.`
            },
            unpublishedCustomMcpSharedConnectionChecklistItemUseForEveryone: {
                id: `Hermes.GptStudio.Builder.UsePublishChecklist.unpublishedCustomMcpSharedConnectionChecklistItemUseForEveryone`,
                defaultMessage: `Turn on "Use for everyone" for unpublished Custom MCPs before publishing.`
            },
            unpublishedCustomMcpSharedConnectionChecklistItemEditor: {
                id: `Hermes.GptStudio.Builder.UsePublishChecklist.unpublishedCustomMcpSharedConnectionChecklistItemEditor`,
                defaultMessage: `An agent owner must configure unpublished Custom MCPs to use an agent-owned connection before publishing.`
            },
            upgradeLegacyConnectorChecklistItem: {
                id: `Hermes.GptStudio.Builder.UsePublishChecklist.upgradeLegacyConnectorChecklistItem`,
                defaultMessage: `Upgrade {connectorName}`
            }
        })
    })),
    Ca, wa, Ta = e((() => {
        Ca = ({
            hasPersistedId: e,
            hasName: t,
            hasPrompt: n,
            hasPublishPermission: r,
            isPublishBlockedBySharedPersonalConnectionPolicy: i,
            isPublishBlockedBySlackEndUserConnectionPolicy: a,
            isPublishBlockedByUnpublishedCustomMcpEndUserConnectionPolicy: o,
            isUnpublishedCustomMcpEndUserConnectionPolicyLoading: s,
            isSharedConnectorPolicyCheckLoading: c,
            isPublishPending: l,
            isPublishStateLoading: u,
            isWorkspacePermissionsLoading: d,
            isPublished: f,
            numChangesToPublish: p
        }) => e ? t ? n ? d || s || c || u ? `permissions_loading` : r ? i ? `shared_personal_connection_blocked` : a ? `slack_end_user_connection_blocked` : o ? `unpublished_custom_mcp_end_user_connection_blocked` : l ? `publish_pending` : f && p === 0 ? `no_changes` : null : `missing_permission` : `missing_prompt` : `missing_name` : `missing_id`, wa = e => Ca(e) == null
    }));

function Ea() {
    return z().currentGpt
}

function Da(e) {
    return e.connectorId
}

function Oa() {}

function ka() {
    return z().currentGpt
}

function Aa() {
    return Oe(z())
}
var ja, X, Ma, Z, Na, Pa, Fa, Ia, La, Ra, za, Ba, Va, Ha, Ua = e((() => {
    ja = L(), k(), bt(), ht(), Wt(), tn(), Jt(), sr(), pr(), At(), Xt(), Oi(), Ri(), zr(), Er(), jr(), Wr(), ca(), B(), fa(), Me(), a(), N(), m(), ye(), X = t(he()), I(), Sa(), Ta(), Ma = ue(), Z = F({
        publishFailedFallback: {
            id: `Hermes.GptStudio.Builder.PublishCurrentDraft.publishFailedFallback`,
            defaultMessage: `We couldn't publish your changes right now.`
        },
        missingName: {
            id: `Hermes.GptStudio.Builder.PublishCurrentDraft.missingName`,
            defaultMessage: `Name your agent before making it live.`
        },
        missingPrompt: {
            id: `Hermes.GptStudio.Builder.PublishCurrentDraft.missingPrompt`,
            defaultMessage: `Give your agent instructions before making it live.`
        },
        sharedPersonalConnectionBlocked: {
            id: `Hermes.GptStudio.Builder.PublishCurrentDraft.sharedPersonalConnectionBlocked`,
            defaultMessage: `Your workspace doesn't allow agent-owned app connections.`
        },
        sharedPersonalConnectionBlockedUseForEveryone: {
            id: `Hermes.GptStudio.Builder.PublishCurrentDraft.sharedPersonalConnectionBlockedUseForEveryone`,
            defaultMessage: `Your workspace doesn’t allow shared connections.`
        },
        slackEndUserConnectionBlocked: {
            id: `Hermes.GptStudio.Builder.PublishCurrentDraft.slackEndUserConnectionBlocked`,
            defaultMessage: `To work in Slack, all apps must use an agent-owned connection.`
        },
        slackEndUserConnectionBlockedUseForEveryone: {
            id: `Hermes.GptStudio.Builder.PublishCurrentDraft.slackEndUserConnectionBlockedUseForEveryone`,
            defaultMessage: `To work in Slack, turn on "Use for everyone" for all apps.`
        },
        unpublishedCustomMcpEndUserConnectionBlocked: {
            id: `Hermes.GptStudio.Builder.PublishCurrentDraft.unpublishedCustomMcpEndUserConnectionBlocked`,
            defaultMessage: `To publish, unpublished Custom MCPs must be configured to use an agent-owned account.`
        },
        unpublishedCustomMcpEndUserConnectionBlockedUseForEveryone: {
            id: `Hermes.GptStudio.Builder.PublishCurrentDraft.unpublishedCustomMcpEndUserConnectionBlockedUseForEveryone`,
            defaultMessage: `To publish, turn on "Use for everyone" for unpublished Custom MCPs.`
        },
        publishNotReady: {
            id: `Hermes.GptStudio.Builder.PublishCurrentDraft.publishNotReady`,
            defaultMessage: `We couldn't update your agent. Try again.`
        },
        noChanges: {
            id: `Hermes.GptStudio.Builder.PublishCurrentDraft.noChanges`,
            defaultMessage: `There are no draft changes to update.`
        }
    }), Na = (0, X.createContext)(null), Pa = (0, X.createContext)(null), Fa = () => {
        "use forget";
        let e = (0, ja.c)(54),
            {
                flushGptBuilderAutosave: t,
                immediatelySaveDraft: n
            } = xi(),
            r = xe(),
            i = fe(),
            a = p(Ea),
            o;
        e[0] === a.tools.connectors ? o = e[1] : (o = a.tools.connectors.map(Da), e[0] = a.tools.connectors, e[1] = o);
        let s;
        e[2] === o ? s = e[3] : (s = {
            displayIds: o
        }, e[2] = o, e[3] = s);
        let l = en(s),
            u = l.connectorById,
            f = a.id,
            {
                data: m
            } = ee(),
            h;
        e[4] === m ? h = e[5] : (h = c(m)?.isWorkspaceAccount(), e[4] = m, e[5] = h);
        let g = h,
            {
                canBuild: _,
                canSharePersonal: v,
                isLoading: y
            } = nt(),
            {
                mutateAsync: b
            } = at(),
            {
                data: x,
                isLoading: S,
                isRefetching: C
            } = st(f),
            {
                data: w,
                isLoading: T
            } = rt(f),
            E = f != null && w == null && T,
            D = da(),
            te = !!g,
            ne = w ?? null,
            O;
        e[6] !== _ || e[7] !== v || e[8] !== u || e[9] !== l.isLoading || e[10] !== f || e[11] !== S || e[12] !== C || e[13] !== E || e[14] !== D || e[15] !== y || e[16] !== x || e[17] !== te || e[18] !== ne ? (O = {
            canBuild: _,
            canSharePersonal: v,
            connectorById: u,
            currentGptId: f,
            isConnectorMetadataLoading: l.isLoading,
            isPublishPermissionsLoading: S,
            isPublishPermissionsRefetching: C,
            isPublishStateLoading: E,
            isPublished: D,
            isWorkspaceAccount: te,
            isWorkspacePermissionsLoading: y,
            publishPermissions: x,
            publishedBaselineGpt: ne
        }, e[6] = _, e[7] = v, e[8] = u, e[9] = l.isLoading, e[10] = f, e[11] = S, e[12] = C, e[13] = E, e[14] = D, e[15] = y, e[16] = x, e[17] = te, e[18] = ne, e[19] = O) : O = e[19];
        let k = O,
            A = (0, X.useRef)(!1),
            j = (0, X.useRef)(k),
            M;
        e[20] === Symbol.for(`react.memo_cache_sentinel`) ? (M = new Set, e[20] = M) : M = e[20];
        let N = (0, X.useRef)(M),
            P = (0, X.useRef)(null),
            [re, ie] = (0, X.useState)(!1),
            [ae, oe] = (0, X.useState)(null),
            se;
        e[21] === Symbol.for(`react.memo_cache_sentinel`) ? (se = () => {
            P.current != null && (clearTimeout(P.current), P.current = null)
        }, e[21] = se) : se = e[21];
        let ce = se,
            le, ue;
        e[22] !== _ || e[23] !== v || e[24] !== u || e[25] !== l.isLoading || e[26] !== f || e[27] !== S || e[28] !== C || e[29] !== E || e[30] !== D || e[31] !== g || e[32] !== y || e[33] !== x || e[34] !== w ? (le = () => {
            j.current = {
                canBuild: _,
                canSharePersonal: v,
                connectorById: u,
                currentGptId: f,
                isConnectorMetadataLoading: l.isLoading,
                isPublishPermissionsLoading: S,
                isPublishPermissionsRefetching: C,
                isPublishStateLoading: E,
                isPublished: D,
                isWorkspaceAccount: !!g,
                isWorkspacePermissionsLoading: y,
                publishPermissions: x,
                publishedBaselineGpt: w ?? null
            }
        }, ue = [_, v, u, f, l.isLoading, S, C, E, D, g, y, x, w], e[22] = _, e[23] = v, e[24] = u, e[25] = l.isLoading, e[26] = f, e[27] = S, e[28] = C, e[29] = E, e[30] = D, e[31] = g, e[32] = y, e[33] = x, e[34] = w, e[35] = le, e[36] = ue) : (le = e[35], ue = e[36]), (0, X.useEffect)(le, ue);
        let F, de;
        e[37] === Symbol.for(`react.memo_cache_sentinel`) ? (F = () => () => {
            ce()
        }, de = [ce], e[37] = F, e[38] = de) : (F = e[37], de = e[38]), (0, X.useEffect)(F, de);
        let pe;
        e[39] === Symbol.for(`react.memo_cache_sentinel`) ? (pe = e => Promise.allSettled([...N.current].map(t => Promise.resolve().then(() => t(e)))).then(Oa), e[39] = pe) : pe = e[39];
        let me = pe,
            I;
        e[40] === Symbol.for(`react.memo_cache_sentinel`) ? (I = e => (N.current.add(e), () => {
            N.current.delete(e)
        }), e[40] = I) : I = e[40];
        let he = I,
            ge;
        e[41] !== t || e[42] !== n || e[43] !== r || e[44] !== b || e[45] !== i ? (ge = e => {
            let a = e?.source ?? G.DIRECT,
                o = j.current;
            if (A.current) {
                let e = r.formatMessage(Z.publishNotReady);
                return V({
                    actionType: U.PUBLISH,
                    actionResult: W.BLOCKED,
                    source: a,
                    publish: {
                        blockReason: H.PUBLISH_PENDING,
                        canPublishFromMenu: !1
                    }
                }), d().danger(e), Promise.reject(Error(e))
            }
            let s = o.currentGptId,
                c = Ni(Mn(z().currentGpt, o.publishedBaselineGpt), Mi(s)),
                l = {
                    isPublished: o.isPublished,
                    numChangesToPublish: o.isPublished ? c.length : 0
                },
                u = () => {
                    A.current = !1, ie(!1)
                },
                f = () => {
                    ce(), oe(null)
                };
            A.current = !0, ce(), oe(l), ie(!0), me({
                status: `started`
            });
            let p = jt(),
                m = null;
            return V({
                actionType: U.PUBLISH,
                actionResult: W.STARTED,
                actionInstanceId: p.actionInstanceId,
                source: a,
                publish: {
                    changeCount: c.length,
                    canPublishFromMenu: !0
                }
            }), za({
                formatMessage: r.formatMessage,
                flushGptBuilderAutosave: t,
                getPublishSnapshot: () => j.current,
                immediatelySaveDraft: n,
                onBlocked: e => {
                    m = e, V({
                        actionType: U.PUBLISH,
                        actionResult: W.BLOCKED,
                        source: a,
                        publish: {
                            blockReason: Ba(e),
                            changeCount: c.length,
                            canPublishFromMenu: !1
                        },
                        request: p()
                    })
                },
                publishMutateAsync: b,
                queryClient: i,
                publishFailedFallbackMessage: r.formatMessage(Z.publishFailedFallback),
                publishGptId: s
            }).then(e => (u(), e ? (P.current = setTimeout(f, 280), V({
                actionType: U.PUBLISH,
                actionResult: W.SUCCEEDED,
                source: a,
                publish: {
                    changeCount: c.length,
                    canPublishFromMenu: !0
                },
                request: p()
            }), me({
                status: `succeeded`
            })) : (f(), V({
                actionType: U.PUBLISH,
                actionResult: W.FAILED,
                source: a,
                publish: {
                    changeCount: c.length,
                    canPublishFromMenu: !0
                },
                request: p({
                    errorMessage: `Publish request could not be built.`
                })
            }), me({
                status: `failed`
            }))), e => (u(), f(), m ?? V({
                actionType: U.PUBLISH,
                actionResult: W.FAILED,
                source: a,
                publish: {
                    changeCount: c.length,
                    canPublishFromMenu: !0
                },
                request: p({
                    error: e
                })
            }), me({
                status: `failed`
            }).then(() => {
                throw e
            })))
        }, e[41] = t, e[42] = n, e[43] = r, e[44] = b, e[45] = i, e[46] = ge) : ge = e[46];
        let _e = ge,
            ve;
        e[47] !== re || e[48] !== ae || e[49] !== _e ? (ve = {
            isPending: re,
            lockedPublishState: ae,
            publishCurrentDraft: _e,
            subscribeToPublishLifecycle: he
        }, e[47] = re, e[48] = ae, e[49] = _e, e[50] = ve) : ve = e[50];
        let ye;
        return e[51] !== k || e[52] !== ve ? (ye = {
            publishCurrentDraftController: ve,
            publishCurrentDraftSnapshot: k
        }, e[51] = k, e[52] = ve, e[53] = ye) : ye = e[53], ye
    }, Ia = e => {
        "use forget";
        let t = (0, ja.c)(29),
            {
                children: n
            } = e,
            r = p(ka),
            i = p(Aa),
            {
                publishCurrentDraftController: a,
                publishCurrentDraftSnapshot: o
            } = Fa(),
            s = fr({
                canBuild: o.canBuild,
                canManageSharedConnections: i,
                connectorById: o.connectorById,
                currentGptId: r.id,
                draftConnectors: r.tools.connectors,
                draftSlackDeployments: r.deployments.slack,
                isConnectorMetadataLoading: o.isConnectorMetadataLoading,
                isPublishPermissionsLoading: o.isPublishPermissionsLoading,
                isPublishPermissionsRefetching: o.isPublishPermissionsRefetching,
                isPublished: o.isPublished,
                isWorkspacePermissionsLoading: o.isWorkspacePermissionsLoading,
                publishPermissions: o.publishPermissions,
                publishedBaselineGpt: o.publishedBaselineGpt,
                shouldLoadWorkspaceSharingStateForSharedConnectorPolicy: o.isWorkspaceAccount && o.isPublished && !o.isWorkspacePermissionsLoading && o.canBuild && !o.canSharePersonal
            }),
            {
                isLoading: c,
                missingConnectorTools: l,
                publishChecklistItems: u,
                publishOptionalItemsChecklist: d
            } = ba({
                currentGpt: r,
                isPublishBlockedBySharedPersonalConnectionPolicy: s.isPublishBlockedBySharedPersonalConnectionPolicy,
                isPublishBlockedBySlackEndUserConnectionPolicy: s.isPublishBlockedBySlackEndUserConnectionPolicy,
                isPublishBlockedByUnpublishedCustomMcpEndUserConnectionPolicy: s.isPublishBlockedByUnpublishedCustomMcpEndUserConnectionPolicy
            }),
            f = Ni(An(r, o.publishedBaselineGpt), ji(r.id)),
            m = o.isPublishStateLoading ? 0 : f.length,
            h;
        t[0] === r.name ? h = t[1] : (h = r.name.trim(), t[0] = r.name, t[1] = h);
        let g;
        t[2] === r.prompt ? g = t[3] : (g = r.prompt.trim(), t[2] = r.prompt, t[3] = g);
        let _ = wa({
                hasPersistedId: r.id != null,
                hasName: h.length > 0,
                hasPrompt: g.length > 0,
                hasPublishPermission: s.hasPublishPermission,
                isPublishBlockedBySharedPersonalConnectionPolicy: s.isPublishBlockedBySharedPersonalConnectionPolicy,
                isPublishBlockedBySlackEndUserConnectionPolicy: s.isPublishBlockedBySlackEndUserConnectionPolicy,
                isPublishBlockedByUnpublishedCustomMcpEndUserConnectionPolicy: s.isPublishBlockedByUnpublishedCustomMcpEndUserConnectionPolicy,
                isUnpublishedCustomMcpEndUserConnectionPolicyLoading: s.isUnpublishedCustomMcpEndUserConnectionPolicyLoading,
                isSharedConnectorPolicyCheckLoading: s.isSharedConnectorPolicyCheckLoading,
                isPublishPending: a.isPending,
                isPublishStateLoading: o.isPublishStateLoading,
                isWorkspacePermissionsLoading: s.isWorkspacePermissionsLoading,
                isPublished: o.isPublished,
                numChangesToPublish: m
            }),
            v;
        t[4] !== _ || t[5] !== c || t[6] !== l || t[7] !== m || t[8] !== u || t[9] !== o.isPublishStateLoading || t[10] !== o.isPublished || t[11] !== o.publishedBaselineGpt || t[12] !== d || t[13] !== s.canBuild || t[14] !== s.isPublishBlockedBySharedPersonalConnectionPolicy || t[15] !== s.isPublishBlockedBySlackEndUserConnectionPolicy || t[16] !== s.isPublishBlockedByUnpublishedCustomMcpEndUserConnectionPolicy || t[17] !== s.isPublishPermissionsLoading || t[18] !== s.isSharedConnectorPolicyCheckLoading || t[19] !== s.isUnpublishedCustomMcpEndUserConnectionPolicyLoading || t[20] !== s.isWorkspacePermissionsLoading || t[21] !== s.needsSharedConnectorConsent ? (v = {
            canBuild: s.canBuild,
            canPublishFromMenu: _,
            isPublishBlockedBySharedPersonalConnectionPolicy: s.isPublishBlockedBySharedPersonalConnectionPolicy,
            isPublishBlockedBySlackEndUserConnectionPolicy: s.isPublishBlockedBySlackEndUserConnectionPolicy,
            isPublishBlockedByUnpublishedCustomMcpEndUserConnectionPolicy: s.isPublishBlockedByUnpublishedCustomMcpEndUserConnectionPolicy,
            isUnpublishedCustomMcpEndUserConnectionPolicyLoading: s.isUnpublishedCustomMcpEndUserConnectionPolicyLoading,
            isPublishChecklistItemsLoading: c,
            isPublishPermissionsLoading: s.isPublishPermissionsLoading,
            isPublishStateLoading: o.isPublishStateLoading,
            isPublished: o.isPublished,
            isSharedConnectorPolicyCheckLoading: s.isSharedConnectorPolicyCheckLoading,
            isWorkspacePermissionsLoading: s.isWorkspacePermissionsLoading,
            missingConnectorTools: l,
            needsSharedConnectorConsent: s.needsSharedConnectorConsent,
            numChangesToPublish: m,
            publishChecklistItems: u,
            publishOptionalItemsChecklist: d,
            publishedBaselineGpt: o.publishedBaselineGpt
        }, t[4] = _, t[5] = c, t[6] = l, t[7] = m, t[8] = u, t[9] = o.isPublishStateLoading, t[10] = o.isPublished, t[11] = o.publishedBaselineGpt, t[12] = d, t[13] = s.canBuild, t[14] = s.isPublishBlockedBySharedPersonalConnectionPolicy, t[15] = s.isPublishBlockedBySlackEndUserConnectionPolicy, t[16] = s.isPublishBlockedByUnpublishedCustomMcpEndUserConnectionPolicy, t[17] = s.isPublishPermissionsLoading, t[18] = s.isSharedConnectorPolicyCheckLoading, t[19] = s.isUnpublishedCustomMcpEndUserConnectionPolicyLoading, t[20] = s.isWorkspacePermissionsLoading, t[21] = s.needsSharedConnectorConsent, t[22] = v) : v = t[22];
        let y;
        t[23] !== n || t[24] !== v ? (y = (0, Ma.jsx)(Pa.Provider, {
            value: v,
            children: n
        }), t[23] = n, t[24] = v, t[25] = y) : y = t[25];
        let b;
        return t[26] !== a || t[27] !== y ? (b = (0, Ma.jsx)(Na.Provider, {
            value: a,
            children: y
        }), t[26] = a, t[27] = y, t[28] = b) : b = t[28], b
    }, La = () => {
        "use forget";
        let e = (0, X.use)(Na);
        if (e == null) throw Error(`PublishCurrentDraftContext not found`);
        return e
    }, Ra = () => {
        "use forget";
        let e = (0, X.use)(Pa);
        if (e == null) throw Error(`PublishCurrentDraftReadinessContext not found`);
        return e
    }, za = async ({
        formatMessage: e,
        flushGptBuilderAutosave: t,
        getPublishSnapshot: n,
        immediatelySaveDraft: r,
        onBlocked: i,
        publishMutateAsync: a,
        queryClient: o,
        publishFailedFallbackMessage: s,
        publishGptId: c
    }) => {
        await Lr(c), await ea(c), await t(), await r();
        let l = n();
        if (l == null) throw Error(`Publish state is unavailable.`);
        let u;
        try {
            u = Va({
                canBuild: l.canBuild,
                canSharePersonal: l.canSharePersonal,
                connectorById: l.connectorById,
                isConnectorMetadataLoading: l.isConnectorMetadataLoading,
                isPublishPermissionsLoading: l.isPublishPermissionsLoading,
                isPublishPermissionsRefetching: l.isPublishPermissionsRefetching,
                isPublishStateLoading: l.isPublishStateLoading,
                isPublished: l.isPublished,
                isWorkspaceAccount: l.isWorkspaceAccount,
                isWorkspacePermissionsLoading: l.isWorkspacePermissionsLoading,
                publishPermissions: l.publishPermissions,
                publishedBaselineGpt: l.publishedBaselineGpt
            })
        } catch {
            return d().danger(s), !1
        }
        let {
            blockReason: f,
            gptId: p,
            numChangesToPublish: m,
            saveParams: h
        } = u;
        if (f != null) {
            i?.(f);
            let t = Ha(f, e);
            throw t != null && d().danger(t), Error(t ?? `Publishing is currently blocked.`)
        }
        if (p == null) throw Error(`A persisted agent id is required before publishing.`);
        let g = z().currentGpt.skillFileTreeRevisions;
        try {
            let e = await a({
                    gptId: p,
                    params: {
                        ...h,
                        save_source: `manual_save`,
                        publish_type: `changes`,
                        changes_count: m
                    }
                }),
                t = new Set((h.deployments?.api ?? []).flatMap(e => e.pending_deletion === !0 && e.materialized_trigger_id != null ? [e.materialized_trigger_id] : []));
            t.size > 0 && o.setQueriesData({
                queryKey: Ot(p)
            }, e => e?.filter(e => e.trigger.type !== `API` || !t.has(e.id) && !t.has(Yt(e) ?? e.id)));
            let n = Ar(e, p, {
                expectedSkillTreeRevisions: g
            });
            return await dt({
                queryClient: o,
                gptId: p
            }), z.set(e => ({
                ...e,
                currentGpt: {
                    ...e.currentGpt,
                    id: n.id
                }
            })), R.setSaveError(null), !0
        } catch (t) {
            throw d().danger(Hr(t, s, e)), t
        }
    }, Ba = e => {
        switch (e) {
            case `missing_id`:
                return H.MISSING_AGENT_ID;
            case `missing_name`:
                return H.MISSING_NAME;
            case `missing_prompt`:
                return H.MISSING_INSTRUCTIONS;
            case `missing_permission`:
                return H.MISSING_PERMISSION;
            case `shared_personal_connection_blocked`:
                return H.SHARED_PERSONAL_CONNECTION;
            case `slack_end_user_connection_blocked`:
                return H.SLACK_END_USER_CONNECTION;
            case `unpublished_custom_mcp_end_user_connection_blocked`:
                return H.UNPUBLISHED_CUSTOM_MCP_END_USER_CONNECTION;
            case `permissions_loading`:
                return H.PERMISSIONS_LOADING;
            case `publish_pending`:
                return H.PUBLISH_PENDING;
            case `no_changes`:
                return H.NO_CHANGES
        }
    }, Va = ({
        canBuild: e,
        canSharePersonal: t,
        connectorById: n,
        isConnectorMetadataLoading: r,
        isPublishPermissionsLoading: i,
        isPublishPermissionsRefetching: a,
        isPublishStateLoading: o,
        isPublished: s,
        isWorkspaceAccount: c,
        isWorkspacePermissionsLoading: l,
        publishPermissions: u,
        publishedBaselineGpt: d
    }) => {
        let f = z().currentGpt,
            p = f.name.trim().length > 0,
            m = f.prompt.trim().length > 0,
            h = Ni(Mn(f, d), Mi(f.id)),
            g = c && s && !l && e && !t,
            {
                hasPublishPermission: _,
                isPublishBlockedBySharedPersonalConnectionPolicy: v,
                isPublishBlockedBySlackEndUserConnectionPolicy: y,
                isPublishBlockedByUnpublishedCustomMcpEndUserConnectionPolicy: b,
                isUnpublishedCustomMcpEndUserConnectionPolicyLoading: x,
                isSharedConnectorPolicyCheckLoading: S
            } = fr({
                canManageSharedConnections: Oe(z()),
                connectorById: n,
                currentGptId: f.id,
                draftConnectors: f.tools.connectors,
                draftSlackDeployments: f.deployments.slack,
                publishedBaselineGpt: d,
                isPublished: s,
                canBuild: e,
                isConnectorMetadataLoading: r,
                isWorkspacePermissionsLoading: l,
                publishPermissions: u,
                isPublishPermissionsLoading: i,
                isPublishPermissionsRefetching: a,
                shouldLoadWorkspaceSharingStateForSharedConnectorPolicy: g
            });
        return {
            blockReason: Ca({
                hasPersistedId: f.id != null,
                hasName: p,
                hasPrompt: m,
                hasPublishPermission: _,
                isPublishBlockedBySharedPersonalConnectionPolicy: v,
                isPublishBlockedBySlackEndUserConnectionPolicy: y,
                isPublishBlockedByUnpublishedCustomMcpEndUserConnectionPolicy: b,
                isUnpublishedCustomMcpEndUserConnectionPolicyLoading: x,
                isSharedConnectorPolicyCheckLoading: S,
                isPublishPending: !1,
                isPublishStateLoading: o,
                isWorkspacePermissionsLoading: l,
                isPublished: s,
                numChangesToPublish: h.length
            }),
            gptId: f.id,
            numChangesToPublish: h.length,
            saveParams: Sr(f)
        }
    }, Ha = (e, t) => {
        let n = T();
        switch (e) {
            case `missing_id`:
                return `A persisted agent id is required before publishing.`;
            case `missing_name`:
                return t(Z.missingName);
            case `missing_prompt`:
                return t(Z.missingPrompt);
            case `missing_permission`:
                return t(Zt.permissionToPublishAgent);
            case `shared_personal_connection_blocked`:
                return t(n ? Z.sharedPersonalConnectionBlockedUseForEveryone : Z.sharedPersonalConnectionBlocked);
            case `slack_end_user_connection_blocked`:
                return t(n ? Z.slackEndUserConnectionBlockedUseForEveryone : Z.slackEndUserConnectionBlocked);
            case `unpublished_custom_mcp_end_user_connection_blocked`:
                return t(n ? Z.unpublishedCustomMcpEndUserConnectionBlockedUseForEveryone : Z.unpublishedCustomMcpEndUserConnectionBlocked);
            case `permissions_loading`:
            case `publish_pending`:
                return t(Z.publishNotReady);
            case `no_changes`:
                return t(Z.noChanges);
            default:
                return null
        }
    }
}));

function Wa(e) {
    return e === `folder` ? Ut.FOLDER : Ut.FILE
}

function Q(e) {
    return e == null ? {} : {
        skill: {
            skillId: e
        }
    }
}

function $(e) {
    return e == null ? G.FILES_DETAIL : G.SKILL_DETAIL
}

function Ga(e) {
    return e.some(e => Ka(e).includes(`/`)) ? Vt.FOLDER : Vt.FILE
}

function Ka(e) {
    let t = e.webkitRelativePath || e.relativePath;
    if (t) {
        let n = t.replace(/\\/g, `/`).replace(/^\/+/, ``).replace(/^(?:\.\/)+/, ``);
        return n.includes(`/`) ? n : e.name
    }
    if (!e.path) return e.name;
    let n = e.path.replace(/\\/g, `/`);
    if (n.startsWith(`/`) || /^[A-Za-z]:\//.test(n)) return e.name;
    let r = n.replace(/^(?:\.\/)+/, ``);
    return r.includes(`/`) ? r : e.name
}

function qa(e) {
    return String(e.reduce((e, t) => e + t.size, 0))
}

function Ja(e) {
    return Array.isArray(e) ? {
        selectedFiles: e,
        uploadSource: Bt.PICKER
    } : {
        selectedFiles: e.files,
        uploadSource: e.uploadSource
    }
}

function Ya(e, t) {
    "use forget";
    let n = (0, oo.c)(17),
        r = p(gt),
        {
            isPending: i
        } = La(),
        {
            skillId: a
        } = de(),
        o = t ?? a ?? null,
        s = fe(),
        c;
    n[0] !== e || n[1] !== o ? (c = {
        nodeId: e,
        skillId: o
    }, n[0] = e, n[1] = o, n[2] = c) : c = n[2];
    let {
        data: l
    } = mt(c), d = fo(), f = (0, so.useRef)(null), m;
    if (n[3] !== r || n[4] !== s || n[5] !== o) {
        let e = async e => {
            r == null || e == null || await io({
                gptId: r,
                skillId: o,
                treeRevision: e.tree_revision,
                draftRevision: e.draft_revision,
                queryClient: s
            })
        };
        m = async t => {
            let n = f.current;
            try {
                await e(t)
            } catch (e) {
                let t = e;
                throw n != null && V({
                    actionType: U.FOLDER_CREATE,
                    actionResult: W.FAILED,
                    source: $(n.skillId),
                    agentId: n.agentId,
                    file: n.file,
                    request: n.finishRequest({
                        error: t
                    }),
                    ...Q(n.skillId)
                }), f.current = null, t
            }
            n != null && t != null && V({
                actionType: U.FOLDER_CREATE,
                actionResult: W.SUCCEEDED,
                source: $(n.skillId),
                agentId: n.agentId,
                file: {
                    ...n.file,
                    fileNodeId: t.node?.id
                },
                request: n.finishRequest(),
                ...Q(n.skillId)
            }), f.current = null
        }, n[3] = r, n[4] = s, n[5] = o, n[6] = m
    } else m = n[6];
    let h = m,
        g;
    n[7] !== l || n[8] !== d || n[9] !== r || n[10] !== i || n[11] !== o ? (g = async e => {
        if (i) throw Error(co);
        if (r == null || l?.node == null) return null;
        await d(r);
        let t = jt(),
            n = {
                parentFileNodeId: l.node.id,
                fileKind: Ut.FOLDER
            };
        f.current = {
            finishRequest: t,
            agentId: r,
            skillId: o,
            file: n
        }, V({
            actionType: U.FOLDER_CREATE,
            actionResult: W.STARTED,
            actionInstanceId: t.actionInstanceId,
            source: $(o),
            agentId: r,
            file: n,
            ...Q(o)
        });
        let a = u(() => pt(r)),
            s = o == null ? Dt() : Ct(o),
            c = {
                parent_node_id: l.node.id,
                name: e,
                current_tree_revision: Math.max(s, l.tree_revision),
                expected_draft_revision: a
            };
        try {
            return o == null ? await Ve({
                gptId: r,
                request: c
            }) : await qe({
                gptId: r,
                skillId: o,
                request: c
            })
        } catch (e) {
            let i = e;
            throw V({
                actionType: U.FOLDER_CREATE,
                actionResult: W.FAILED,
                source: $(o),
                agentId: r,
                file: n,
                request: t({
                    error: i
                }),
                ...Q(o)
            }), f.current = null, i
        }
    }, n[7] = l, n[8] = d, n[9] = r, n[10] = i, n[11] = o, n[12] = g) : g = n[12];
    let _ = g,
        v;
    n[13] === Symbol.for(`react.memo_cache_sentinel`) ? (v = {
        id: `gpt_studio_create_folder`
    }, n[13] = v) : v = n[13];
    let y;
    return n[14] !== _ || n[15] !== h ? (y = {
        scope: v,
        mutationFn: _,
        onSuccess: h
    }, n[14] = _, n[15] = h, n[16] = y) : y = n[16], _e(y)
}

function Xa(e, t) {
    "use forget";
    let n = (0, oo.c)(19),
        r = p(gt),
        {
            isPending: i
        } = La(),
        a = p($e),
        {
            skillId: o
        } = de(),
        s = t ?? o ?? null,
        c = fe(),
        l;
    n[0] !== e || n[1] !== s ? (l = {
        nodeId: e,
        skillId: s
    }, n[0] = e, n[1] = s, n[2] = l) : l = n[2];
    let {
        data: d
    } = mt(l), f = fo(), m = xe(), h = ce(), g;
    n[3] !== d || n[4] !== f || n[5] !== r || n[6] !== m || n[7] !== i || n[8] !== c || n[9] !== s || n[10] !== a ? (g = async e => {
        if (i) throw Error(co);
        if (r == null || d?.node == null) return null;
        let {
            selectedFiles: t,
            uploadSource: n
        } = Ja(e), o = Fe(Mt(t));
        o ?? await f(r);
        let l = d.node,
            p = Math.max(d.tree_revision, s == null ? Dt() : Ct(s)),
            h = jt(),
            g = Ga(t),
            _ = {
                parentFileNodeId: l.id,
                fileKind: Ut.FILE,
                uploadMode: g,
                uploadSource: n,
                fileCount: t.length,
                totalByteCount: qa(t)
            };
        V({
            actionType: U.FILE_UPLOAD,
            actionResult: W.STARTED,
            actionInstanceId: h.actionInstanceId,
            source: $(s),
            agentId: r,
            file: _,
            ...Q(s)
        });
        let v = e => {
            V({
                actionType: U.FILE_UPLOAD,
                actionResult: W.FAILED,
                source: $(s),
                agentId: r,
                file: _,
                request: h({
                    error: e
                }),
                ...Q(s)
            })
        };
        if (o != null) {
            let e = new tt(we.uploadFileEmpty);
            throw v(e), e
        }
        let y = () => {
                Pi({
                    gptId: r,
                    isDirty: !0,
                    skillId: s
                })
            },
            b = u(() => pt(r)),
            x = await Ir(r, (async () => {
                let e = await Le({
                    parentNode: l,
                    files: t,
                    treeRevision: p,
                    gptId: r,
                    versionId: s == null ? a : null,
                    skillId: s,
                    expectedDraftRevision: b,
                    onUploadBatchStart: y
                });
                if (e == null) return e;
                let n = null;
                try {
                    await io({
                        gptId: r,
                        skillId: s,
                        treeRevision: e.treeRevision,
                        draftRevision: e.draftRevision,
                        queryClient: c
                    })
                } catch (e) {
                    n = e
                }
                if (Ee({
                        gptId: r,
                        versionId: s == null ? a : null,
                        skillId: s,
                        batchId: e.batchId,
                        isActive: !1
                    }), n != null) throw n;
                return Pi({
                    gptId: r,
                    isDirty: !1,
                    skillId: s
                }), R.setSaveError(e.firstFailure == null ? null : ao({
                    error: e.firstFailure,
                    fallbackMessage: m.formatMessage(we.uploadFailedFallback),
                    intl: m
                })), e
            })()).catch(e => (v(e), Promise.reject(e)));
        return V({
            actionType: U.FILE_UPLOAD,
            actionResult: x == null ? W.CANCELED : x.firstFailure == null ? W.SUCCEEDED : W.FAILED,
            source: $(s),
            agentId: r,
            file: _,
            request: h(x?.firstFailure == null ? void 0 : {
                error: x.firstFailure
            }),
            ...Q(s)
        }), x
    }, n[3] = d, n[4] = f, n[5] = r, n[6] = m, n[7] = i, n[8] = c, n[9] = s, n[10] = a, n[11] = g) : g = n[11];
    let _ = g,
        v;
    n[12] === Symbol.for(`react.memo_cache_sentinel`) ? (v = {
        id: `gpt_studio_file_upload`
    }, n[12] = v) : v = n[12];
    let y;
    n[13] !== m || n[14] !== h ? (y = e => {
        let t = ao({
            error: e,
            fallbackMessage: m.formatMessage(we.uploadFailedFallback),
            intl: m
        });
        if (e instanceof tt) {
            h.danger(t), R.setSaveError(null);
            return
        }
        R.setSaveError(t)
    }, n[13] = m, n[14] = h, n[15] = y) : y = n[15];
    let b;
    return n[16] !== y || n[17] !== _ ? (b = {
        scope: v,
        onMutate: Za,
        mutationFn: _,
        onError: y
    }, n[16] = y, n[17] = _, n[18] = b) : b = n[18], _e(b)
}

function Za() {
    R.setSaveError(null)
}

function Qa(e, t) {
    "use forget";
    let n = (0, oo.c)(17),
        r = p(gt),
        {
            isPending: i
        } = La(),
        {
            skillId: a
        } = de(),
        o = t ?? a ?? null,
        s = fe(),
        c;
    n[0] !== e || n[1] !== o ? (c = {
        nodeId: e,
        skillId: o
    }, n[0] = e, n[1] = o, n[2] = c) : c = n[2];
    let {
        data: l
    } = mt(c), d = fo(), f = (0, so.useRef)(null), m;
    if (n[3] !== r || n[4] !== s || n[5] !== o) {
        let e = async e => {
            r == null || e == null || await io({
                gptId: r,
                skillId: o,
                treeRevision: e.tree_revision,
                draftRevision: e.draft_revision,
                queryClient: s
            })
        };
        m = async t => {
            let n = f.current;
            try {
                await e(t)
            } catch (e) {
                let t = e;
                throw n != null && V({
                    actionType: U.FILE_DELETE,
                    actionResult: W.FAILED,
                    source: $(n.skillId),
                    agentId: n.agentId,
                    file: n.file,
                    request: n.finishRequest({
                        error: t
                    }),
                    ...Q(n.skillId)
                }), f.current = null, t
            }
            n != null && t != null && V({
                actionType: U.FILE_DELETE,
                actionResult: W.SUCCEEDED,
                source: $(n.skillId),
                agentId: n.agentId,
                file: n.file,
                request: n.finishRequest(),
                ...Q(n.skillId)
            }), f.current = null
        }, n[3] = r, n[4] = s, n[5] = o, n[6] = m
    } else m = n[6];
    let h = m,
        g;
    n[7] !== l || n[8] !== d || n[9] !== r || n[10] !== i || n[11] !== o ? (g = async () => {
        if (i) throw Error(co);
        if (r == null || l?.node == null) return null;
        await d(r);
        let e = l.node,
            t = jt(),
            n = {
                fileNodeId: e.id,
                parentFileNodeId: e.parent_node_id ?? void 0,
                fileKind: Wa(e.kind)
            };
        f.current = {
            finishRequest: t,
            agentId: r,
            skillId: o,
            file: n
        }, V({
            actionType: U.FILE_DELETE,
            actionResult: W.STARTED,
            actionInstanceId: t.actionInstanceId,
            source: $(o),
            agentId: r,
            file: n,
            ...Q(o)
        });
        let a = u(() => pt(r)),
            s = o == null ? Dt() : Ct(o),
            c = {
                current_tree_revision: Math.max(s, l.tree_revision),
                expected_draft_revision: a
            },
            p = {
                recursive: !0
            };
        try {
            return o == null ? await Se({
                gptId: r,
                nodeId: e.id,
                request: c,
                params: p
            }) : await Ae({
                gptId: r,
                skillId: o,
                nodeId: e.id,
                request: c,
                params: p
            })
        } catch (e) {
            let i = e;
            throw V({
                actionType: U.FILE_DELETE,
                actionResult: W.FAILED,
                source: $(o),
                agentId: r,
                file: n,
                request: t({
                    error: i
                }),
                ...Q(o)
            }), f.current = null, i
        }
    }, n[7] = l, n[8] = d, n[9] = r, n[10] = i, n[11] = o, n[12] = g) : g = n[12];
    let _ = g,
        v;
    n[13] === Symbol.for(`react.memo_cache_sentinel`) ? (v = {
        id: `gpt_studio_file_delete`
    }, n[13] = v) : v = n[13];
    let y;
    return n[14] !== _ || n[15] !== h ? (y = {
        scope: v,
        mutationFn: _,
        onSuccess: h
    }, n[14] = _, n[15] = h, n[16] = y) : y = n[16], _e(y)
}

function $a(e, t) {
    "use forget";
    let n = (0, oo.c)(19),
        r = p(gt),
        {
            isPending: i
        } = La(),
        {
            skillId: a
        } = de(),
        o = t ?? a ?? null,
        s = fe(),
        c;
    n[0] !== e || n[1] !== o ? (c = {
        nodeId: e,
        skillId: o
    }, n[0] = e, n[1] = o, n[2] = c) : c = n[2];
    let {
        data: l
    } = mt(c), u = fo(), d;
    n[3] !== r || n[4] !== s || n[5] !== o ? (d = async e => {
        r == null || e == null || await io({
            gptId: r,
            skillId: o,
            treeRevision: e.tree_revision,
            draftRevision: e.draft_revision,
            queryClient: s
        })
    }, n[3] = r, n[4] = s, n[5] = o, n[6] = d) : d = n[6];
    let f = d,
        m;
    n[7] !== l || n[8] !== u || n[9] !== r || n[10] !== i || n[11] !== f || n[12] !== o ? (m = async e => {
        if (i) throw Error(co);
        if (r == null || l?.node == null) return null;
        let t = l.node,
            n = l.tree_revision;
        await u(r);
        let a = jt(),
            s = {
                fileNodeId: t.id,
                parentFileNodeId: t.parent_node_id ?? void 0,
                fileKind: Wa(t.kind)
            };
        V({
            actionType: U.FILE_RENAME,
            actionResult: W.STARTED,
            actionInstanceId: a.actionInstanceId,
            source: $(o),
            agentId: r,
            file: s,
            ...Q(o)
        });
        let c = po({
                gptId: r,
                skillId: o,
                nodeId: t.id
            }),
            d = o == null ? Dt() : Ct(o),
            p = pt(r),
            m = {
                name: e,
                current_tree_revision: Math.max(d, n),
                expected_draft_revision: p
            },
            h = (async () => {
                let e;
                try {
                    e = o == null ? await _t({
                        gptId: r,
                        nodeId: t.id,
                        request: m
                    }) : await Ze({
                        gptId: r,
                        skillId: o,
                        nodeId: t.id,
                        request: m
                    }), await f(e)
                } catch (e) {
                    let t = e;
                    throw V({
                        actionType: U.FILE_RENAME,
                        actionResult: W.FAILED,
                        source: $(o),
                        agentId: r,
                        file: s,
                        request: a({
                            error: t
                        }),
                        ...Q(o)
                    }), t
                }
                return V({
                    actionType: U.FILE_RENAME,
                    actionResult: W.SUCCEEDED,
                    source: $(o),
                    agentId: r,
                    file: s,
                    request: a(),
                    ...Q(o)
                }), e
            })(),
            g = h.then(to, eo);
        return uo.set(c, g), Qi(r, h), g.then(() => {
            uo.get(c) === g && uo.delete(c)
        }), await h
    }, n[7] = l, n[8] = u, n[9] = r, n[10] = i, n[11] = f, n[12] = o, n[13] = m) : m = n[13];
    let h = m,
        g = e == null ? `gpt_studio_file_rename` : `gpt_studio_file_mutation:${e}`,
        _;
    n[14] === g ? _ = n[15] : (_ = {
        id: g
    }, n[14] = g, n[15] = _);
    let v;
    return n[16] !== h || n[17] !== _ ? (v = {
        scope: _,
        mutationFn: h
    }, n[16] = h, n[17] = _, n[18] = v) : v = n[18], _e(v)
}

function eo() {
    return null
}

function to(e) {
    return e.node ?? null
}

function no({
    content: e,
    flushGptBuilderAutosave: t,
    node: n,
    gptId: r,
    versionId: i,
    skillId: a
}) {
    return lo.enqueue({
        gptId: r,
        key: po({
            gptId: r,
            skillId: a,
            nodeId: n.id
        }),
        job: {
            content: e,
            flushGptBuilderAutosave: t,
            gptId: r,
            node: n,
            skillId: a,
            versionId: i
        }
    })
}
async function ro({
    content: e,
    flushGptBuilderAutosave: t,
    gptId: n,
    node: r,
    skillId: i,
    versionId: a
}) {
    let o = jt(),
        s = {
            fileNodeId: r.id,
            parentFileNodeId: r.parent_node_id ?? void 0,
            fileKind: Wa(r.kind)
        };
    V({
        actionType: U.FILE_CONTENT_SAVE,
        actionResult: W.STARTED,
        actionInstanceId: o.actionInstanceId,
        source: $(i),
        agentId: n ?? void 0,
        file: s,
        editor: {
            field: Ht.FILE_CONTENT
        },
        ...Q(i)
    });
    let c = e => {
        V({
            actionType: U.FILE_CONTENT_SAVE,
            actionResult: W.FAILED,
            source: $(i),
            agentId: n ?? void 0,
            file: s,
            editor: {
                field: Ht.FILE_CONTENT
            },
            request: o({
                error: e
            }),
            ...Q(i)
        })
    };
    try {
        let c = await uo.get(po({
                gptId: n,
                skillId: i,
                nodeId: r.id
            })),
            l = v(),
            u = it({
                gptId: n,
                nodeId: r.id,
                versionId: i == null ? a : null,
                skillId: i
            }).queryKey,
            d = l.getQueryData(u),
            f = c ?? d?.node ?? r;
        if (n == null || f.parent_node_id == null) throw Error(`Missing file metadata for save`);
        let p = i == null ? Dt() : Ct(i),
            m = new File([e], f.name, {
                type: f.mime_type ?? `text/plain;charset=utf-8`
            });
        if (Fe([m]) != null) throw new tt(we.uploadFileEmpty);
        if (Ie([m]) != null) throw new tt(we.uploadFileTooLarge);
        if (i == null && vt({
                currentFileTreeSizeBytes: Be(await kt({
                    gptId: n,
                    versionId: null,
                    depth: null
                })),
                uploadSizeBytes: m.size,
                replacedFileSizeBytes: f.size_bytes ?? 0
            })) throw new tt(we.uploadAgentFileTreeTooLarge);
        let h = Math.max(p, d?.tree_revision ?? 0);
        await t();
        let g = pt(n),
            _ = await Ir(n, i == null ? Et({
                gptId: n,
                parentNodeId: f.parent_node_id,
                name: f.name,
                content: e,
                mimeType: f.mime_type,
                currentTreeRevision: h,
                expectedDraftVersionId: a,
                expectedDraftRevision: g
            }) : Ne({
                gptId: n,
                skillId: i,
                parentNodeId: f.parent_node_id,
                name: f.name,
                content: e,
                mimeType: f.mime_type,
                currentTreeRevision: h,
                expectedDraftVersionId: null,
                expectedDraftRevision: g
            }));
        await io({
            gptId: n,
            skillId: i,
            treeRevision: _.tree_revision,
            draftRevision: _.draft_revision,
            queryClient: l
        }), V({
            actionType: U.FILE_CONTENT_SAVE,
            actionResult: W.SUCCEEDED,
            source: $(i),
            agentId: n,
            file: s,
            editor: {
                field: Ht.FILE_CONTENT
            },
            request: o(),
            ...Q(i)
        })
    } catch (e) {
        throw c(e), e
    }
}
async function io({
    gptId: e,
    skillId: t,
    treeRevision: n,
    draftRevision: r,
    queryClient: i
}) {
    r !== void 0 && R.setCurrentGptDraftRevision(r), t == null ? (wt({
        gptId: e,
        treeRevision: n
    }), R.setCurrentGptFileTreeId(null, {
        gptId: e,
        expectedTreeRevision: n
    })) : (R.setCurrentGptSkillTreeRevision({
        treeRevision: n,
        skillId: t,
        gptId: e
    }), R.setCurrentUploadedSkillFileTreeId({
        gptId: e,
        skillId: t,
        fileTreeId: null
    })), await ot({
        queryClient: i,
        gptId: e,
        skillId: t
    }), t != null && i.prefetchQuery({
        ...ei({
            gptId: e,
            skillId: t
        }),
        staleTime: 0
    })
}

function ao({
    error: e,
    fallbackMessage: t,
    intl: n
}) {
    return e instanceof tt ? n.formatMessage(e.messageDescriptor) : Hr(e, t)
}
var oo, so, co, lo, uo, fo, po, mo = e((() => {
    oo = L(), Wt(), Ua(), Oi(), Ri(), zr(), Wr(), ca(), B(), a(), m(), se(), ye(), so = t(he()), I(), me(), ti(), Tt(), ke(), St(), yt(), At(), Ue(), co = `Publishing is in progress. Wait a moment.`, lo = new ia(ro), uo = new Map, fo = () => {
        "use forget";
        let e = (0, oo.c)(2),
            t = Si(),
            n;
        return e[0] === t ? n = e[1] : (n = async e => {
            await ea(e), await t()
        }, e[0] = t, e[1] = n), n
    }, po = ({
        gptId: e,
        skillId: t,
        nodeId: n
    }) => [e ?? ``, t ?? ``, n].join(`:`)
}));
export {
    Dr as $, Ti as A, _n as At, si as B, qi as C, pn as Ct, Pi as D, bn as Dt, Ni as E, vn as Et, oi as F, en as Ft, Gr as G, $r as H, li as I, Wr as J, Kr as K, ii as L, Oi as M, cn as Mt, Si as N, nn as Nt, Fi as O, yn as Ot, xi as P, tn as Pt, kr as Q, ui as R, Zi as S, fn as St, Ri as T, hn as Tt, ei as U, ci as V, ti as W, Ir as X, zr as Y, jr as Z, ia as _, wn as _t, Ya as a, gr as at, Ki as b, xn as bt, Xa as c, ur as ct, La as d, pr as dt, Or as et, Ra as f, Mn as ft, da as g, An as gt, fa as h, tr as ht, no as i, hr as it, bi as j, rn as jt, ji as k, En as kt, Ia as l, dr as lt, Sa as m, Rn as mt, mo as n, Cr as nt, Qa as o, _r as ot, _a as p, sr as pt, Hr as q, io as r, Er as rt, $a as s, mr as st, po as t, Tr as tt, Ua as u, fr as ut, ra as v, Tn as vt, Mi as w, gn as wt, na as x, mn as xt, ca as y, Cn as yt, ai as z
};
//# sourceMappingURL=8e7d0a25-hjalwed8futvzicp.js.map
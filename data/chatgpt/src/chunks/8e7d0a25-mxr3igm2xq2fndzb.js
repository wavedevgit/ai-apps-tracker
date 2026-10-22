import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $J as n,
    $ot as r,
    A2 as i,
    Aq as a,
    B1 as o,
    Bot as s,
    Dtt as c,
    F5 as l,
    IU as u,
    Iv as d,
    J7 as f,
    Jat as p,
    L5 as m,
    L8 as h,
    LU as g,
    Q7 as _,
    QZ as v,
    R5 as y,
    RZ as b,
    Vot as x,
    a0 as S,
    att as C,
    bA as w,
    eY as T,
    eot as E,
    ftt as D,
    gF as O,
    iot as ee,
    j2 as k,
    jtt as A,
    k8 as j,
    kit as te,
    mA as M,
    nv as N,
    ost as P,
    q1 as ne,
    q5 as F,
    qJ as re,
    sY as ie,
    sst as ae,
    vF as oe,
    zU as se,
    zq as ce
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bn as le,
    Ln as ue,
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
    $Lt as Se,
    $Vt as Ce,
    $it as we,
    ARt as Te,
    AVn as Ee,
    CRt as De,
    Dzt as R,
    EVn as Oe,
    FRt as ke,
    GIt as Ae,
    HIt as je,
    IRt as Me,
    JRt as Ne,
    JVt as Pe,
    KVt as Fe,
    LRt as Ie,
    MRt as Le,
    NRt as Re,
    ORt as ze,
    OTn as Be,
    PRt as Ve,
    QRt as He,
    RRt as Ue,
    TTn as We,
    VIt as Ge,
    V_n as Ke,
    XRt as qe,
    Xit as Je,
    YVt as Ye,
    ZRt as Xe,
    Zit as Ze,
    aHt as Qe,
    aRt as $e,
    abn as et,
    azt as tt,
    cRt as nt,
    dHt as rt,
    dLt as it,
    dRt as at,
    eat as ot,
    fbn as st,
    gRt as ct,
    hLt as lt,
    hRt as ut,
    iHt as dt,
    izt as ft,
    jRt as pt,
    jzt as mt,
    kzt as ht,
    lRt as gt,
    mLt as _t,
    mRt as vt,
    mzt as z,
    nzt as yt,
    ozt as bt,
    pRt as xt,
    qRt as St,
    rLt as Ct,
    rRt as wt,
    sHt as Tt,
    sRt as Et,
    szt as Dt,
    tzt as Ot,
    uRt as kt,
    vRt as At,
    wHt as jt,
    wRt as Mt,
    xzt as B,
    yzt as Nt,
    z_n as Pt
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    Mm as Ft,
    Sh as It,
    bh as Lt,
    jm as Rt,
    xh as zt
} from "./8b34dbc2-n194ohawifys3bko.js";
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
} from "./4285e798-dp66nwf09gsij2gf.js";
import {
    a as Gt,
    i as Kt,
    n as qt
} from "./cfc49363-c0v7blbu8jaeeuos.js";
import {
    c as Jt,
    o as Yt
} from "./e2ef8fe8-btbmuq01v3oq2j8d.js";
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
        d(), nn = e => e.trim().toUpperCase(), rn = e => (typeof e.owner_profile?.name == `string` ? e.owner_profile.name : ``) || (typeof e.owner_profile?.email == `string` ? e.owner_profile.email : ``) || (typeof e.name == `string` ? e.name.trim() : ``) || e.id, an = [`send_message`, `add_reaction`, `remove_reaction`, `get_thread`, `get_file`, `send_file`], on = ({
            config: e,
            enabled: t = !0
        }) => ({
            trigger: {
                type: `CONNECTOR`,
                connector_id: N,
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
                connector_id: N,
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
        cn(), d(), ge(), ln = e => typeof e == `object` && !!e, un = e => ln(e.slack_trigger.params) ? e.slack_trigger.params : {}, dn = e => {
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
                    connector_id: N,
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
        Dn = L(), Se(), i(), En(), On = e => e.replace(/\u200b/g, ``).replace(/\n{2,}/g, `
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
            }), k(Ln(e.modelSpec), Ln(t.modelSpec)) || r.push({
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
            deployments: wt(e.deployments),
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
            deployments: wt(null),
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
        }, Xn = (e, t) => k(e, t), Zn = (e, t) => e.authType === t.authType && e.connectionTypeHint === t.connectionTypeHint && e.linkId === t.linkId && k(e.allowedActions, t.allowedActions) && k(e.userApprovals, t.userApprovals) && e.appsPrivacyControl === t.appsPrivacyControl && k(e.actionsConstraintsConfiguration, t.actionsConstraintsConfiguration), Qn = e => `file_tree_id` in e ? e.file_tree_id ?? `` : ``, $n = (e, t) => e.name === t.name && e.description === t.description && (e.icon?.name ?? ``) === (t.icon?.name ?? ``) && Qn(e) === Qn(t), er = (e, t) => {
            let n, r, i = !1,
                a = !1,
                o = !1,
                s = Math.max(e.length, t.length);
            for (let c = 0; c < s; c++) {
                let s = c < e.length,
                    l = c < t.length;
                s && l ? k(e[c], t[c]) || (o = !0, n ??= t[c]) : !s && l ? (i = !0, n ??= t[c]) : s && !l && (a = !0, r ??= e[c])
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
                t && !k(ar(e), ar(t)) ? n.push({
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
                i = Pn(n, r, (e, t) => e.deployment_id === t.deployment_id && k(e.api_trigger, t.api_trigger)),
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
        Ae(), En(), cr = e => e?.connector_type === `MCP` && e.status === `ONLY_ME`, lr = ({
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
                S = Ge(c)?.capability != null,
                C = !!(e && d && (l || u) && c == null),
                w = !!(e && d && S && h),
                T = !!(!s && a),
                E = ur({
                    draftConnectors: n,
                    publishedBaselineGpt: i,
                    treatDraftConnectorsAsShared: _
                }),
                D = dr({
                    draftSlackDeployments: r,
                    publishedBaselineGpt: i
                }),
                O = _ || S;
            return {
                canBuild: a,
                shouldLoadWorkspaceSharingStateForSharedConnectorPolicy: d,
                hasPublishPermission: T,
                hasDraftSharedPersonalConnector: h,
                hasPublishedSharedPersonalConnector: v,
                hasDraftEndUserConnector: f,
                hasDraftUnpublishedCustomMcpEndUserConnector: g,
                hasActiveSlackChannel: _,
                isPublishBlockedBySharedPersonalConnectionPolicy: w,
                isPublishBlockedBySlackEndUserConnectionPolicy: y,
                isUnpublishedCustomMcpEndUserConnectionPolicyLoading: b,
                isPublishBlockedByUnpublishedCustomMcpEndUserConnectionPolicy: x,
                isSharedConnectorPolicyCheckLoading: C,
                isWorkspacePermissionsLoading: s,
                needsSharedConnectorConsent: e && (E.length > 0 || D.length > 0) && h && O,
                isPublishPermissionsLoading: e && l || m
            }
        }
    }));

function mr({
    conversation: e,
    gptId: t,
    isRunningDraftAgent: n
}) {
    n && It(e);
    let r = hr(e);
    if (!r) return;
    let i = gr(t, n);
    zt(e.id, r, i, () => {}, {
        isRegen: !1,
        isOnboardingConversation: !1,
        delayAfterCompletion: !1,
        prepareDispatch: `immediate`,
        prepareSource: `custom_agent_conversation`
    })
}

function hr(e) {
    return l(() => et(e).id)
}

function gr(e, t) {
    return [ce(e, {
        draft: t
    })]
}
var _r = e((() => {
        Lt(), st(), j(), a()
    })),
    vr, yr, br, xr, Sr, Cr, wr, Tr, Er = e((() => {
        Se(), vr = e => ({
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
                skills: e.tools.skills.map($e),
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
        Se(), R(), Dr = (e, t) => ({
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
            deployments: wt(e.deployments),
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
            deployments: wt(e.deployments)
        }), kr = (e, t) => ({
            ...Or(e, t),
            version_id: e.draft_head_version_id ?? e.version_id,
            draft_revision: e.draft_head_revision
        }), Ar = (e, t, n) => {
            let r = Or(e, t),
                i = kr(e, t);
            return z.setCurrentGptFileTreeId(e.file_tree_id ?? null, {
                gptId: t,
                expectedTreeRevision: e.file_tree?.tree_revision
            }), z.setCurrentGptDraftRevision(e.draft_head_revision), z.setCurrentGptDeployments(r.deployments ?? wt(null), {
                gptId: t
            }), z.syncCurrentGptSkillsFromSavedGpt(i, {
                expectedSkillTreeRevisions: n?.expectedSkillTreeRevisions
            }), z.setLastPublishedGpt(r), z.setSavedGpt(i), r
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
            if (k(e, f.current)) return p.current = null, Promise.resolve();
            if (m.current) return b(l), Promise.resolve();
            p.current = null;
            let t = h.current(e).then(() => {
                f.current = e
            });
            return d.current = t, t.then(S, S), t
        }, t[4] = l, t[5] = S, t[6] = C) : C = t[6];
        let w = C,
            T;
        t[7] === l ? T = t[8] : (T = async () => {
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
        }, t[7] = l, t[8] = T);
        let E = T,
            D, O;
        t[9] === i ? (D = t[10], O = t[11]) : (D = () => {
            m.current = i
        }, O = [i], t[9] = i, t[10] = D, t[11] = O), (0, q.useEffect)(D, O);
        let ee, A;
        t[12] === a ? (ee = t[13], A = t[14]) : (ee = () => {
            h.current = a
        }, A = [a], t[12] = a, t[13] = ee, t[14] = A), (0, q.useEffect)(ee, A);
        let j, te;
        t[15] === w ? (j = t[16], te = t[17]) : (j = () => {
            g.current = w
        }, te = [w], t[15] = w, t[16] = j, t[17] = te), (0, q.useEffect)(j, te);
        let M, N;
        t[18] !== n || t[19] !== c || t[20] !== r ? (M = () => {
            if (!n || r == null) {
                p.current = null, v();
                return
            }
            p.current = r, b(c)
        }, N = [v, n, c, r, b], t[18] = n, t[19] = c, t[20] = r, t[21] = M, t[22] = N) : (M = t[21], N = t[22]), (0, q.useEffect)(M, N);
        let P, ne;
        return t[23] === Symbol.for(`react.memo_cache_sentinel`) ? (P = () => () => {
            g.current(), v()
        }, ne = [v], t[23] = P, t[24] = ne) : (P = t[23], ne = t[24]), (0, q.useEffect)(P, ne), E
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
        E(), I(), Br = ue({
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
            if (e instanceof p) {
                if (n != null) {
                    let t = Vr(e, n);
                    if (t != null) return t
                }
                return ee(e) ?? e.message
            }
            return typeof e == `string` && e.trim().length > 0 ? e : typeof e == `object` && e && `message` in e && typeof e.message == `string` && e.message.trim().length > 0 ? e.message : t
        }, Ur = e => e instanceof p && (e.code === `draft_revision_mismatch` || e.detail?.reason === `draft_version_mismatch`)
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
        } = Pe(),
        o;
    return t[0] !== i || t[1] !== a || t[2] !== n ? (o = ei({
        enabled: i,
        gptId: a,
        skillId: n
    }), t[0] = i, t[1] = a, t[2] = n, t[3] = o) : o = t[3], pe(o)
}
var qr, Jr, Yr, Xr, Zr, Qr, $r, ei, ti = e((() => {
        qr = L(), Fe(), R(), P(), _(), ye(), Jr = `agents`, Yr = `openai.yaml`, Xr = 300 * 1e3, Zr = e => {
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
                let r = ae(t, `gptId`),
                    i = await f.safeGet(`/hermes/agent/{agent_id}/skills/{skill_id}/definition`, {
                        parameters: {
                            path: {
                                agent_id: r,
                                skill_id: n
                            }
                        },
                        signal: e
                    });
                return z.setCurrentGptSkillTreeRevision({
                    treeRevision: i.tree_revision,
                    skillId: n,
                    gptId: r
                }), i
            }
        })
    })),
    ni, ri, ii, ai, oi, si, ci, li, ui = e((() => {
        A(), R(), Rt(), oe(), Ee(), T(), a(), te(), v(), ni = {
            hideFromHistory: !0,
            isDoNotRemember: !0
        }, ri = e => [ce(e, {
            draft: !0
        })], ii = (e, t) => O(e, {
            alwaysOnSystemHints: ri(t)
        }), ai = e => {
            let t = r();
            re.initThread({
                clientThreadId: e,
                conversationMode: {
                    kind: C.PrimaryAssistant
                },
                userId: t?.user?.id,
                accountId: t?.account?.id,
                disableConversationNavigation: !0
            });
            let i = n(e);
            i?.mode.kind === C.PrimaryAssistant && i.disableConversationNavigation === !0 && i.hideFromHistory === !0 || ie(e, e => {
                e.mode = {
                    kind: C.PrimaryAssistant
                }, e.disableConversationNavigation = !0, e.hideFromHistory = !0
            })
        }, oi = (e, t) => (ai(e), ii(e, t)), si = async e => {
            e && await Oe(e, {
                skipIfExisting: !1
            })
        }, ci = async ({
            conversation: e,
            gptId: t,
            payload: n
        }) => {
            let r = ri(t);
            z.setPlutoCurrentPreview(e.id), await Ft({
                callsiteId: `request_completion.restricted.trusted_tester.gpt_studio.builder.chatgpt_preview.preview_thread_actions.1`,
                conversation: e,
                eventSource: `url`,
                promptMessage: b(n, {
                    system_hints: r
                }),
                completionMetadata: {
                    conversationMode: {
                        kind: C.PrimaryAssistant
                    },
                    systemHints: r
                },
                extraStreamParams: ni
            })
        }, li = e => {
            let t = n(e);
            if (!t) return null;
            let r = t.tree.getBranchFromLeaf(t.tree.currentLeafId)?.find(e => e.message.author.role === c.User);
            return !r || (r.message.metadata?.attachments?.length ?? 0) > 0 || r.message.content.content_type !== D.Text ? null : r.message.content.parts.join(``).trim() || null
        }
    }));

function di() {
    return B().currentGpt
}

function fi() {
    return mt(B())
}

function pi() {
    return B().savedGpt
}

function mi() {
    z.setIsAutosaving(!1)
}

function hi() {
    return mi
}
var gi, J, _i, vi, yi, bi, xi, Si, Ci, wi, Ti, Ei, Di, Oi = e((() => {
        gi = L(), Qe(), _r(), sr(), Er(), jr(), Fr(), zr(), Wr(), R(), Ae(), j(), Ke(), a(), g(), ye(), J = t(he()), I(), Wt(), xt(), ti(), ui(), _i = le(), vi = (e, t) => e.id != null && t?.id === e.id, yi = (0, J.createContext)(null), bi = ({
            children: e
        }) => {
            "use no forget";
            let t = xe(),
                n = fe(),
                {
                    mutate: r
                } = lt(),
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
                            ...je(e),
                            staleTime: 0
                        });
                        B().currentGpt.id === e && (z.loadAgent(t), await Promise.all([vt({
                            queryClient: n,
                            gptId: e
                        }), n.invalidateQueries({
                            queryKey: $r({
                                gptId: e
                            })
                        })]))
                    } catch (e) {
                        u().danger(t.formatMessage(Di.refreshAfterConflictFailed), {
                            error: e
                        })
                    }
                }, [t, n]),
                d = (0, J.useCallback)(async (e, i) => (await Lr(e.gptId), new Promise((a, o) => {
                    let c = null,
                        d = Nt(e.gptId, e.params.expected_draft_revision ?? null),
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
                                queryKey: Ce(e.gptId)
                            }), vt({
                                queryClient: n,
                                gptId: e.gptId
                            }), n.invalidateQueries({
                                queryKey: $r({
                                    gptId: e.gptId
                                })
                            }), n.invalidateQueries({
                                queryKey: [Ye]
                            }), n.invalidateQueries({
                                queryKey: Pt(e.gptId, ce(e.gptId, {
                                    draft: !0
                                }))
                            }), B().currentGpt.id === e.gptId && (z.setCurrentGptFileTreeId(t.file_tree_id ?? null, {
                                gptId: e.gptId,
                                expectedTreeRevision: t.file_tree?.tree_revision
                            }), z.setCurrentGptDraftRevision(t.draft_revision), z.syncCurrentGptSkillsFromSavedGpt(r, {
                                expectedSkillTreeRevisions: e.expectedSkillTreeRevisions
                            }), z.setSavedGpt(r), z.setSaveError(null), wi(e.gptId))
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
                                }), B().currentGpt.id === e.gptId) {
                                if (Ur(n)) {
                                    let r = t.formatMessage(Di.saveConflictDescription);
                                    u().danger(t.formatMessage(Di.saveConflictTitle), {
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
                                    }), c = n, z.setSaveError(r);
                                    return
                                }
                                c = n, z.setSaveError(Hr(n, t.formatMessage(Di.autosaveFailedFallback), t.formatMessage), s)
                            }
                        };
                    z.setIsAutosaving(!0), V({
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
                            expected_draft_revision: d
                        }
                    }, {
                        onSuccess: m,
                        onError: h,
                        onSettled: () => {
                            if (z.setIsAutosaving(!1), c != null) {
                                o(c);
                                return
                            }
                            a()
                        }
                    })
                })), [t, n, l, s, r]),
                f = (0, J.useCallback)(async () => {
                    let e = B(),
                        t = e.currentGpt;
                    return !vi(t, e.savedGpt) || mt(e) || Mn(t, e.savedGpt, {
                        compareDraftFileTreeRevision: !0,
                        diffType: `strict`
                    }).length === 0 ? !1 : (await d({
                        gptId: t.id,
                        params: {
                            ...wr(t),
                            save_source: `auto_save`
                        },
                        expectedSkillTreeRevisions: Ci(t)
                    }, `auto_save`), !0)
                }, [d]),
                p = (0, J.useMemo)(() => ({
                    flushGptBuilderAutosave: o,
                    immediatelySaveDraft: f,
                    registerFlushGptBuilderAutosave: c,
                    saveDraft: d
                }), [o, f, c, d]);
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
            let t = B();
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
                r = F(di),
                i = F(fi),
                a = F(pi),
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
                (!l || d === 0) && z.setIsAutosaving(!1)
            }, b = [l, d], t[25] = l, t[26] = d, t[27] = b, t[28] = x) : (b = t[27], x = t[28]), (0, J.useEffect)(x, b);
            let S;
            return t[29] === Symbol.for(`react.memo_cache_sentinel`) ? (S = [], t[29] = S) : S = t[29], (0, J.useEffect)(hi, S), null
        }, Di = ue({
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
        ki = L(), R(), j(), Ai = h({}), ji = e => {
            "use forget";
            let t = (0, ki.c)(2),
                n;
            return t[0] === e ? n = t[1] : (n = () => Mi(e), t[0] = e, t[1] = n), F(n)
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
            let r = B().currentGpt.tools.skills.find(e => e.id === n);
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
    Vi = L(), j(), Hi = t(he()), x(), Ui = new Map, Wi = h(new Map), Gi = new Set, Ki = e => Wi().has(e), qi = e => {
        "use forget";
        let t = (0, Vi.c)(6),
            n;
        t[0] === e ? n = t[1] : (n = () => Ki(e), t[0] = e, t[1] = n);
        let r = F(n),
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
            s(this, `saveJob`, void 0), s(this, `pendingSaves`, new Map), this.saveJob = e, Gi.add(this)
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
    return B().currentGpt
}

function ua() {
    return B().lastPublishedGpt
}
var da, fa = e((() => {
    Ae(), j(), R(), da = () => {
        "use forget";
        let e = F(la),
            t = F(ua),
            {
                data: n
            } = it(e.id);
        return e.id != null && (t?.id === e.id || n != null)
    }
}));

function pa(e) {
    return e.connectorId
}

function ma() {
    return ht(B())
}

function ha(e) {
    return e.connectionType !== `end_user_connection` && e.connectionType !== `none`
}
var ga, _a, va, ya, ba, xa, Y, Sa = e((() => {
        ga = L(), M(), tn(), Je(), R(), We(), j(), ne(), I(), _a = `switch-slack-connectors-to-shared-connection`, va = `slack-end-user-connection-owner-required`, ya = `switch-unpublished-custom-mcps-to-agent-owned-account`, ba = e => {
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
                } = Be(),
                p = F(ma),
                m;
            if (t[4] !== p || t[5] !== n.tools.connectors || t[6] !== f) {
                let e;
                t[8] !== p || t[9] !== f ? (e = e => f.has(e.connectorId) && (p || e.connectionType === `end_user_connection`), t[8] = p, t[9] = f, t[10] = e) : e = t[10], m = n.tools.connectors.some(e), t[4] = p, t[5] = n.tools.connectors, t[6] = f, t[7] = m
            } else m = t[7];
            let h = m,
                g;
            t[11] === n.tools.connectors ? g = t[12] : (g = n.tools.connectors.filter(ha), t[11] = n.tools.connectors, t[12] = g);
            let _ = p && g.length > 0,
                {
                    isLoading: v
                } = S(),
                y;
            t[13] === _ ? y = t[14] : (y = {
                enabled: _
            }, t[13] = _, t[14] = y);
            let {
                data: b,
                isLoading: x
            } = ot(y), C = _ && (v || x) || h && u.isLoading, w;
            t[15] !== p || t[16] !== d || t[17] !== n || t[18] !== o.formatMessage || t[19] !== r || t[20] !== i || t[21] !== a || t[22] !== b || t[23] !== f ? (w = xa({
                connectorById: d,
                currentGpt: n,
                formatMessage: o.formatMessage,
                isPublishBlockedBySharedPersonalConnectionPolicy: r,
                isPublishBlockedBySlackEndUserConnectionPolicy: i,
                isPublishBlockedByUnpublishedCustomMcpEndUserConnectionPolicy: a,
                canManageSharedConnections: p,
                linksByConnectorId: b,
                oldToNewAppIds: f
            }), t[15] = p, t[16] = d, t[17] = n, t[18] = o.formatMessage, t[19] = r, t[20] = i, t[21] = a, t[22] = b, t[23] = f, t[24] = w) : w = t[24];
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
            let l = w(),
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
                missingConnectorTools: t.tools.connectors.filter(e => e.connectionType !== `end_user_connection` && e.connectionType !== `none`).filter(e => !o || c.has(e.connectorId) ? !1 : we({
                    sharedLinks: (s?.get(e.connectorId) ?? []).filter(Ze),
                    persistedSharedLinkId: e.connectionType === `end_user_connection` ? null : e.linkId ?? e.link.id,
                    allowFirstAvailableLink: !1
                }) == null),
                publishChecklistItems: u,
                publishOptionalItemsChecklist: d
            }
        }, Y = ue({
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
    return B().currentGpt
}

function Da(e) {
    return e.connectorId
}

function Oa() {}

function ka() {
    return B().currentGpt
}

function Aa() {
    return ht(B())
}
var ja, X, Ma, Z, Na, Pa, Fa, Ia, La, Ra, za, Ba, Va, Ha, Ua = e((() => {
    ja = L(), M(), Qe(), Tt(), Wt(), tn(), Jt(), sr(), pr(), xt(), Xt(), Oi(), Ri(), zr(), Er(), jr(), Wr(), ca(), R(), fa(), Ae(), j(), ne(), g(), ye(), X = t(he()), I(), Sa(), Ta(), Ma = le(), Z = ue({
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
            a = F(Ea),
            s;
        e[0] === a.tools.connectors ? s = e[1] : (s = a.tools.connectors.map(Da), e[0] = a.tools.connectors, e[1] = s);
        let c;
        e[2] === s ? c = e[3] : (c = {
            displayIds: s
        }, e[2] = s, e[3] = c);
        let l = en(c),
            d = l.connectorById,
            f = a.id,
            {
                data: p
            } = S(),
            m;
        e[4] === p ? m = e[5] : (m = o(p)?.isWorkspaceAccount(), e[4] = p, e[5] = m);
        let h = m,
            {
                canBuild: g,
                canSharePersonal: _,
                isLoading: v
            } = rt(),
            {
                mutateAsync: y
            } = _t(),
            {
                data: b,
                isLoading: x,
                isRefetching: C
            } = Ct(f),
            {
                data: w,
                isLoading: T
            } = it(f),
            E = f != null && w == null && T,
            D = da(),
            O = !!h,
            ee = w ?? null,
            k;
        e[6] !== g || e[7] !== _ || e[8] !== d || e[9] !== l.isLoading || e[10] !== f || e[11] !== x || e[12] !== C || e[13] !== E || e[14] !== D || e[15] !== v || e[16] !== b || e[17] !== O || e[18] !== ee ? (k = {
            canBuild: g,
            canSharePersonal: _,
            connectorById: d,
            currentGptId: f,
            isConnectorMetadataLoading: l.isLoading,
            isPublishPermissionsLoading: x,
            isPublishPermissionsRefetching: C,
            isPublishStateLoading: E,
            isPublished: D,
            isWorkspaceAccount: O,
            isWorkspacePermissionsLoading: v,
            publishPermissions: b,
            publishedBaselineGpt: ee
        }, e[6] = g, e[7] = _, e[8] = d, e[9] = l.isLoading, e[10] = f, e[11] = x, e[12] = C, e[13] = E, e[14] = D, e[15] = v, e[16] = b, e[17] = O, e[18] = ee, e[19] = k) : k = e[19];
        let A = k,
            j = (0, X.useRef)(!1),
            te = (0, X.useRef)(A),
            M;
        e[20] === Symbol.for(`react.memo_cache_sentinel`) ? (M = new Set, e[20] = M) : M = e[20];
        let N = (0, X.useRef)(M),
            P = (0, X.useRef)(null),
            [ne, re] = (0, X.useState)(!1),
            [ie, ae] = (0, X.useState)(null),
            oe;
        e[21] === Symbol.for(`react.memo_cache_sentinel`) ? (oe = () => {
            P.current != null && (clearTimeout(P.current), P.current = null)
        }, e[21] = oe) : oe = e[21];
        let se = oe,
            ce, le;
        e[22] !== g || e[23] !== _ || e[24] !== d || e[25] !== l.isLoading || e[26] !== f || e[27] !== x || e[28] !== C || e[29] !== E || e[30] !== D || e[31] !== h || e[32] !== v || e[33] !== b || e[34] !== w ? (ce = () => {
            te.current = {
                canBuild: g,
                canSharePersonal: _,
                connectorById: d,
                currentGptId: f,
                isConnectorMetadataLoading: l.isLoading,
                isPublishPermissionsLoading: x,
                isPublishPermissionsRefetching: C,
                isPublishStateLoading: E,
                isPublished: D,
                isWorkspaceAccount: !!h,
                isWorkspacePermissionsLoading: v,
                publishPermissions: b,
                publishedBaselineGpt: w ?? null
            }
        }, le = [g, _, d, f, l.isLoading, x, C, E, D, h, v, b, w], e[22] = g, e[23] = _, e[24] = d, e[25] = l.isLoading, e[26] = f, e[27] = x, e[28] = C, e[29] = E, e[30] = D, e[31] = h, e[32] = v, e[33] = b, e[34] = w, e[35] = ce, e[36] = le) : (ce = e[35], le = e[36]), (0, X.useEffect)(ce, le);
        let ue, de;
        e[37] === Symbol.for(`react.memo_cache_sentinel`) ? (ue = () => () => {
            se()
        }, de = [se], e[37] = ue, e[38] = de) : (ue = e[37], de = e[38]), (0, X.useEffect)(ue, de);
        let pe;
        e[39] === Symbol.for(`react.memo_cache_sentinel`) ? (pe = e => Promise.allSettled([...N.current].map(t => Promise.resolve().then(() => t(e)))).then(Oa), e[39] = pe) : pe = e[39];
        let me = pe,
            I;
        e[40] === Symbol.for(`react.memo_cache_sentinel`) ? (I = e => (N.current.add(e), () => {
            N.current.delete(e)
        }), e[40] = I) : I = e[40];
        let he = I,
            ge;
        e[41] !== t || e[42] !== n || e[43] !== r || e[44] !== y || e[45] !== i ? (ge = e => {
            let a = e?.source ?? G.DIRECT,
                o = te.current;
            if (j.current) {
                let e = r.formatMessage(Z.publishNotReady);
                return V({
                    actionType: U.PUBLISH,
                    actionResult: W.BLOCKED,
                    source: a,
                    publish: {
                        blockReason: H.PUBLISH_PENDING,
                        canPublishFromMenu: !1
                    }
                }), u().danger(e), Promise.reject(Error(e))
            }
            let s = o.currentGptId,
                c = Ni(Mn(B().currentGpt, o.publishedBaselineGpt), Mi(s)),
                l = {
                    isPublished: o.isPublished,
                    numChangesToPublish: o.isPublished ? c.length : 0
                },
                d = () => {
                    j.current = !1, re(!1)
                },
                f = () => {
                    se(), ae(null)
                };
            j.current = !0, se(), ae(l), re(!0), me({
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
                getPublishSnapshot: () => te.current,
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
                publishMutateAsync: y,
                queryClient: i,
                publishFailedFallbackMessage: r.formatMessage(Z.publishFailedFallback),
                publishGptId: s
            }).then(e => (d(), e ? (P.current = setTimeout(f, 280), V({
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
            }))), e => (d(), f(), m ?? V({
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
        }, e[41] = t, e[42] = n, e[43] = r, e[44] = y, e[45] = i, e[46] = ge) : ge = e[46];
        let _e = ge,
            ve;
        e[47] !== ne || e[48] !== ie || e[49] !== _e ? (ve = {
            isPending: ne,
            lockedPublishState: ie,
            publishCurrentDraft: _e,
            subscribeToPublishLifecycle: he
        }, e[47] = ne, e[48] = ie, e[49] = _e, e[50] = ve) : ve = e[50];
        let ye;
        return e[51] !== A || e[52] !== ve ? (ye = {
            publishCurrentDraftController: ve,
            publishCurrentDraftSnapshot: A
        }, e[51] = A, e[52] = ve, e[53] = ye) : ye = e[53], ye
    }, Ia = e => {
        "use forget";
        let t = (0, ja.c)(29),
            {
                children: n
            } = e,
            r = F(ka),
            i = F(Aa),
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
            p = o.isPublishStateLoading ? 0 : f.length,
            m;
        t[0] === r.name ? m = t[1] : (m = r.name.trim(), t[0] = r.name, t[1] = m);
        let h;
        t[2] === r.prompt ? h = t[3] : (h = r.prompt.trim(), t[2] = r.prompt, t[3] = h);
        let g = wa({
                hasPersistedId: r.id != null,
                hasName: m.length > 0,
                hasPrompt: h.length > 0,
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
                numChangesToPublish: p
            }),
            _;
        t[4] !== g || t[5] !== c || t[6] !== l || t[7] !== p || t[8] !== u || t[9] !== o.isPublishStateLoading || t[10] !== o.isPublished || t[11] !== o.publishedBaselineGpt || t[12] !== d || t[13] !== s.canBuild || t[14] !== s.isPublishBlockedBySharedPersonalConnectionPolicy || t[15] !== s.isPublishBlockedBySlackEndUserConnectionPolicy || t[16] !== s.isPublishBlockedByUnpublishedCustomMcpEndUserConnectionPolicy || t[17] !== s.isPublishPermissionsLoading || t[18] !== s.isSharedConnectorPolicyCheckLoading || t[19] !== s.isUnpublishedCustomMcpEndUserConnectionPolicyLoading || t[20] !== s.isWorkspacePermissionsLoading || t[21] !== s.needsSharedConnectorConsent ? (_ = {
            canBuild: s.canBuild,
            canPublishFromMenu: g,
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
            numChangesToPublish: p,
            publishChecklistItems: u,
            publishOptionalItemsChecklist: d,
            publishedBaselineGpt: o.publishedBaselineGpt
        }, t[4] = g, t[5] = c, t[6] = l, t[7] = p, t[8] = u, t[9] = o.isPublishStateLoading, t[10] = o.isPublished, t[11] = o.publishedBaselineGpt, t[12] = d, t[13] = s.canBuild, t[14] = s.isPublishBlockedBySharedPersonalConnectionPolicy, t[15] = s.isPublishBlockedBySlackEndUserConnectionPolicy, t[16] = s.isPublishBlockedByUnpublishedCustomMcpEndUserConnectionPolicy, t[17] = s.isPublishPermissionsLoading, t[18] = s.isSharedConnectorPolicyCheckLoading, t[19] = s.isUnpublishedCustomMcpEndUserConnectionPolicyLoading, t[20] = s.isWorkspacePermissionsLoading, t[21] = s.needsSharedConnectorConsent, t[22] = _) : _ = t[22];
        let v;
        t[23] !== n || t[24] !== _ ? (v = (0, Ma.jsx)(Pa.Provider, {
            value: _,
            children: n
        }), t[23] = n, t[24] = _, t[25] = v) : v = t[25];
        let y;
        return t[26] !== a || t[27] !== v ? (y = (0, Ma.jsx)(Na.Provider, {
            value: a,
            children: v
        }), t[26] = a, t[27] = v, t[28] = y) : y = t[28], y
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
        let d;
        try {
            d = Va({
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
            return u().danger(s), !1
        }
        let {
            blockReason: f,
            gptId: p,
            numChangesToPublish: m,
            saveParams: h
        } = d;
        if (f != null) {
            i?.(f);
            let t = Ha(f, e);
            throw t != null && u().danger(t), Error(t ?? `Publishing is currently blocked.`)
        }
        if (p == null) throw Error(`A persisted agent id is required before publishing.`);
        let g = B().currentGpt.skillFileTreeRevisions;
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
                queryKey: dt(p)
            }, e => e?.filter(e => e.trigger.type !== `API` || !t.has(e.id) && !t.has(Yt(e) ?? e.id)));
            let n = Ar(e, p, {
                expectedSkillTreeRevisions: g
            });
            return await ut({
                queryClient: o,
                gptId: p
            }), B.set(e => ({
                ...e,
                currentGpt: {
                    ...e.currentGpt,
                    id: n.id
                }
            })), z.setSaveError(null), !0
        } catch (t) {
            throw u().danger(Hr(t, s, e)), t
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
        let f = B().currentGpt,
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
                canManageSharedConnections: ht(B()),
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
        let n = w();
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
        r = F(Et),
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
        data: u
    } = At(c), d = fo(), f = (0, so.useRef)(null), p;
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
        p = async t => {
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
        }, n[3] = r, n[4] = s, n[5] = o, n[6] = p
    } else p = n[6];
    let m = p,
        h;
    n[7] !== u || n[8] !== d || n[9] !== r || n[10] !== i || n[11] !== o ? (h = async e => {
        if (i) throw Error(co);
        if (r == null || u?.node == null) return null;
        await d(r);
        let t = jt(),
            n = {
                parentFileNodeId: u.node.id,
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
        let a = l(() => Nt(r)),
            s = o == null ? kt() : gt(o),
            c = {
                parent_node_id: u.node.id,
                name: e,
                current_tree_revision: Math.max(s, u.tree_revision),
                expected_draft_revision: a
            };
        try {
            return o == null ? await Ot({
                gptId: r,
                request: c
            }) : await St({
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
    }, n[7] = u, n[8] = d, n[9] = r, n[10] = i, n[11] = o, n[12] = h) : h = n[12];
    let g = h,
        _;
    n[13] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = {
        id: `gpt_studio_create_folder`
    }, n[13] = _) : _ = n[13];
    let v;
    return n[14] !== g || n[15] !== m ? (v = {
        scope: _,
        mutationFn: g,
        onSuccess: m
    }, n[14] = g, n[15] = m, n[16] = v) : v = n[16], _e(v)
}

function Xa(e, t) {
    "use forget";
    let n = (0, oo.c)(19),
        r = F(Et),
        {
            isPending: i
        } = La(),
        a = F(nt),
        {
            skillId: o
        } = de(),
        s = t ?? o ?? null,
        c = fe(),
        u;
    n[0] !== e || n[1] !== s ? (u = {
        nodeId: e,
        skillId: s
    }, n[0] = e, n[1] = s, n[2] = u) : u = n[2];
    let {
        data: d
    } = At(u), f = fo(), p = xe(), m = se(), h;
    n[3] !== d || n[4] !== f || n[5] !== r || n[6] !== p || n[7] !== i || n[8] !== c || n[9] !== s || n[10] !== a ? (h = async e => {
        if (i) throw Error(co);
        if (r == null || d?.node == null) return null;
        let {
            selectedFiles: t,
            uploadSource: n
        } = Ja(e), o = ke(Mt(t));
        o ?? await f(r);
        let u = d.node,
            m = Math.max(d.tree_revision, s == null ? kt() : gt(s)),
            h = jt(),
            g = Ga(t),
            _ = {
                parentFileNodeId: u.id,
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
            let e = new De(Re.uploadFileEmpty);
            throw v(e), e
        }
        let y = () => {
                Pi({
                    gptId: r,
                    isDirty: !0,
                    skillId: s
                })
            },
            b = l(() => Nt(r)),
            x = await Ir(r, (async () => {
                let e = await pt({
                    parentNode: u,
                    files: t,
                    treeRevision: m,
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
                if (Te({
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
                }), z.setSaveError(e.firstFailure == null ? null : ao({
                    error: e.firstFailure,
                    fallbackMessage: p.formatMessage(Re.uploadFailedFallback),
                    intl: p
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
    }, n[3] = d, n[4] = f, n[5] = r, n[6] = p, n[7] = i, n[8] = c, n[9] = s, n[10] = a, n[11] = h) : h = n[11];
    let g = h,
        _;
    n[12] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = {
        id: `gpt_studio_file_upload`
    }, n[12] = _) : _ = n[12];
    let v;
    n[13] !== p || n[14] !== m ? (v = e => {
        let t = ao({
            error: e,
            fallbackMessage: p.formatMessage(Re.uploadFailedFallback),
            intl: p
        });
        if (e instanceof De) {
            m.danger(t), z.setSaveError(null);
            return
        }
        z.setSaveError(t)
    }, n[13] = p, n[14] = m, n[15] = v) : v = n[15];
    let y;
    return n[16] !== v || n[17] !== g ? (y = {
        scope: _,
        onMutate: Za,
        mutationFn: g,
        onError: v
    }, n[16] = v, n[17] = g, n[18] = y) : y = n[18], _e(y)
}

function Za() {
    z.setSaveError(null)
}

function Qa(e, t) {
    "use forget";
    let n = (0, oo.c)(17),
        r = F(Et),
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
        data: u
    } = At(c), d = fo(), f = (0, so.useRef)(null), p;
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
        p = async t => {
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
        }, n[3] = r, n[4] = s, n[5] = o, n[6] = p
    } else p = n[6];
    let m = p,
        h;
    n[7] !== u || n[8] !== d || n[9] !== r || n[10] !== i || n[11] !== o ? (h = async () => {
        if (i) throw Error(co);
        if (r == null || u?.node == null) return null;
        await d(r);
        let e = u.node,
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
        let a = l(() => Nt(r)),
            s = o == null ? kt() : gt(o),
            c = {
                current_tree_revision: Math.max(s, u.tree_revision),
                expected_draft_revision: a
            },
            p = {
                recursive: !0
            };
        try {
            return o == null ? await yt({
                gptId: r,
                nodeId: e.id,
                request: c,
                params: p
            }) : await Ne({
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
    }, n[7] = u, n[8] = d, n[9] = r, n[10] = i, n[11] = o, n[12] = h) : h = n[12];
    let g = h,
        _;
    n[13] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = {
        id: `gpt_studio_file_delete`
    }, n[13] = _) : _ = n[13];
    let v;
    return n[14] !== g || n[15] !== m ? (v = {
        scope: _,
        mutationFn: g,
        onSuccess: m
    }, n[14] = g, n[15] = m, n[16] = v) : v = n[16], _e(v)
}

function $a(e, t) {
    "use forget";
    let n = (0, oo.c)(19),
        r = F(Et),
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
    } = At(c), u = fo(), d;
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
        p;
    n[7] !== l || n[8] !== u || n[9] !== r || n[10] !== i || n[11] !== f || n[12] !== o ? (p = async e => {
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
            d = o == null ? kt() : gt(o),
            p = Nt(r),
            m = {
                name: e,
                current_tree_revision: Math.max(d, n),
                expected_draft_revision: p
            },
            h = (async () => {
                let e;
                try {
                    e = o == null ? await Dt({
                        gptId: r,
                        nodeId: t.id,
                        request: m
                    }) : await He({
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
    }, n[7] = l, n[8] = u, n[9] = r, n[10] = i, n[11] = f, n[12] = o, n[13] = p) : p = n[13];
    let m = p,
        h = e == null ? `gpt_studio_file_rename` : `gpt_studio_file_mutation:${e}`,
        g;
    n[14] === h ? g = n[15] : (g = {
        id: h
    }, n[14] = h, n[15] = g);
    let _;
    return n[16] !== m || n[17] !== g ? (_ = {
        scope: g,
        mutationFn: m
    }, n[16] = m, n[17] = g, n[18] = _) : _ = n[18], _e(_)
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
            l = m(),
            u = at({
                gptId: n,
                nodeId: r.id,
                versionId: i == null ? a : null,
                skillId: i
            }).queryKey,
            d = l.getQueryData(u),
            f = c ?? d?.node ?? r;
        if (n == null || f.parent_node_id == null) throw Error(`Missing file metadata for save`);
        let p = i == null ? kt() : gt(i),
            h = new File([e], f.name, {
                type: f.mime_type ?? `text/plain;charset=utf-8`
            });
        if (ke([h]) != null) throw new De(Re.uploadFileEmpty);
        if (Me([h]) != null) throw new De(Re.uploadFileTooLarge);
        if (i == null && Ve({
                currentFileTreeSizeBytes: Ie(await ft({
                    gptId: n,
                    versionId: null,
                    depth: null
                })),
                uploadSizeBytes: h.size,
                replacedFileSizeBytes: f.size_bytes ?? 0
            })) throw new De(Re.uploadAgentFileTreeTooLarge);
        let g = Math.max(p, d?.tree_revision ?? 0);
        await t();
        let _ = Nt(n),
            v = await Ir(n, i == null ? bt({
                gptId: n,
                parentNodeId: f.parent_node_id,
                name: f.name,
                content: e,
                mimeType: f.mime_type,
                currentTreeRevision: g,
                expectedDraftVersionId: a,
                expectedDraftRevision: _
            }) : Xe({
                gptId: n,
                skillId: i,
                parentNodeId: f.parent_node_id,
                name: f.name,
                content: e,
                mimeType: f.mime_type,
                currentTreeRevision: g,
                expectedDraftVersionId: null,
                expectedDraftRevision: _
            }));
        await io({
            gptId: n,
            skillId: i,
            treeRevision: v.tree_revision,
            draftRevision: v.draft_revision,
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
    r !== void 0 && z.setCurrentGptDraftRevision(r), t == null ? (ct({
        gptId: e,
        treeRevision: n
    }), z.setCurrentGptFileTreeId(null, {
        gptId: e,
        expectedTreeRevision: n
    })) : (z.setCurrentGptSkillTreeRevision({
        treeRevision: n,
        skillId: t,
        gptId: e
    }), z.setCurrentUploadedSkillFileTreeId({
        gptId: e,
        skillId: t,
        fileTreeId: null
    })), await vt({
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
    return e instanceof De ? n.formatMessage(e.messageDescriptor) : Hr(e, t)
}
var oo, so, co, lo, uo, fo, po, mo = e((() => {
    oo = L(), Wt(), Ua(), Oi(), Ri(), zr(), Wr(), ca(), R(), j(), g(), y(), ye(), so = t(he()), I(), me(), ti(), qe(), Ue(), tt(), Le(), xt(), ze(), co = `Publishing is in progress. Wait a moment.`, lo = new ia(ro), uo = new Map, fo = () => {
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
//# sourceMappingURL=8e7d0a25-mxr3igm2xq2fndzb.js.map
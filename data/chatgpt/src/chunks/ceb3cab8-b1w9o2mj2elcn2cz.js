import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J5 as n,
    TQ as r,
    Wnt as i,
    Xnt as a,
    Y5 as o,
    aB as s,
    cK as c,
    iB as l,
    lK as u,
    qnt as d,
    wQ as f
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as p,
    Ln as m,
    Nn as h,
    Rn as g,
    Vn as _,
    wn as v,
    zn as y
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    CVt as b,
    Njt as x,
    Pjt as S,
    cM as C,
    uM as w,
    wVt as T
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Ho as ee,
    Wo as E
} from "./c2675c8c-9bs3zsr3vq259es7.js";
import {
    r as D,
    t as O
} from "./b17d4512-n5oefn6s0xsto4mp.js";
import {
    s as te,
    t as ne
} from "./4ed85438-ezidm3qm7yr0vslx.js";
import {
    A as k,
    D as re,
    E as ie,
    N as ae,
    O as A,
    S as oe,
    T as se,
    j as ce,
    x as j
} from "./b90db9d2-gg8cij0iwol0uu3s.js";
import {
    n as le,
    t as ue
} from "./e17f5811-jq8tv7erposlp7p1.js";

function de(e) {
    let t = new Map;
    for (let n of e) {
        let e = t.get(n.name) ?? [];
        e.push(n), t.set(n.name, e)
    }
    let n = new Set;
    for (let e of Object.values(F))
        if ([...e === M ? Ee : e].some(e => t.has(e)) && [...e].every(e => {
                let n = t.get(e) ?? [],
                    [r] = n;
                return n.length === 1 && r != null && typeof r.visibility_rule == `string` && r.visibility_rule.trim().length > 0 && typeof r.editability_rule == `string` && r.editability_rule.trim().length > 0 && typeof r.inheritable == `boolean`
            }))
            for (let t of e) n.add(t);
    return n
}

function fe(e, t) {
    if (e == null) return !0;
    if (e.trim().length === 0) return !1;
    try {
        return ve ??= O({
            activeBreakpoints: [],
            theme: `light`
        }), ve.evaluate(e, t) === !0
    } catch {
        return !1
    }
}

function pe({
    explicitPermissions: e,
    effectivePermissions: t,
    rules: n
}) {
    let r = new Set(e),
        i = new Set(n.filter(e => e.inheritable === !1).map(e => e.name));
    return t.filter(e => r.has(e) || !i.has(e))
}

function me({
    entries: e,
    rules: t,
    context: n
}) {
    let r = new Map(t.map(e => [e.name, e]));
    return e.flatMap(e => {
        if (!e.rbac || !Te.has(e.permissionName) || r.get(e.permissionName) == null) return [e];
        let t = [e.permissionName, ...e.additionalPermissionNames ?? [], ...e.permissionName === c.UseConnector ? [c.UseWorkspacePlugins] : []],
            i = t.map(e => r.get(e));
        return i.some((r, i) => r == null ? e.permissionName === c.UseConnector && t[i] === c.UseWorkspacePlugins : !fe(r.visibility_rule, n)) ? [] : i.every(t => t == null || e.permissionName === c.UseConnector && t.name === c.UseWorkspacePlugins && n.workspace.is_fedramp_compliant && !n.role.is_lockdown || fe(t.editability_rule, n)) ? [e] : [{
            ...e,
            disabled: !0
        }]
    })
}

function he({
    permissions: e,
    rules: t,
    context: n
}) {
    let r = e.permissionsBySection.map(e => ({
        ...e,
        entries: me({
            entries: e.entries,
            rules: t,
            context: n
        })
    })).filter(e => e.entries.length > 0);
    return {
        ...e,
        permissionsBySection: r,
        totalPermissionsCount: r.reduce((e, t) => e + t.entries.length, 0)
    }
}
var ge, _e, ve, ye, M, be, N, P, xe, Se, Ce, we, F, Te, Ee, De = e((() => {
        u(), D(), ge = e => typeof e == `object` && !!e && `name` in e && typeof e.name == `string`, _e = e => typeof e != `object` || !e ? !1 : `name` in e && typeof e.name == `string` && (!(`visibility_rule` in e) || e.visibility_rule == null || typeof e.visibility_rule == `string`) && (!(`editability_rule` in e) || e.editability_rule == null || typeof e.editability_rule == `string`) && (!(`inheritable` in e) || e.inheritable == null || typeof e.inheritable == `boolean`), ye = new Set([c.UseConnector, c.UseWorkspacePlugins, c.UploadWorkspacePlugins, c.ShareWorkspacePlugins, c.PublishWorkspacePlugins, c.CreateMcpConnector]), M = new Set([c.SkillsAccess, c.SkillsCreate, c.SkillsUpload, c.SkillsShare, c.SkillsShareWorkspace, c.SkillsEnableShareWorkspace, c.SitesAccess, c.SitesPublishAccess, c.SitesInviteExternalAccess, c.MemoryAccess, c.ImprovedMemoryAccess, c.ProgrammaticAgentIdentitiesAccess, c.MemberRoleView, c.TeamCreate, c.TeamMemberInvite]), be = new Set([c.WorkOnlyMode, c.WorkOnlyChatInstant, c.SearchAccess, c.DeepResearchAccess, c.AgentModeAccess, c.CrudProject, c.ShareProject, c.ShareWorkspaceProject, `chatgpt.workspace.feature.hermes.access`, `chatgpt.workspace.feature.hermes.builder.access`, `chatgpt.workspace.feature.hermes.share.access`, `chatgpt.workspace.feature.hermes.publish.access`, `chatgpt.workspace.feature.hermes.share_personal.access`, c.CrudGPT, c.ShareWorkspaceGPT, c.ShareExternalGPT, c.AllowAllThirdPartyGPT, c.AllowSpecificThirdPartyGPT, c.AllowFirstPartyGPT, c.ImageGenAccess, c.VoiceAccess, c.VideoScreenSharingAccess, c.FileLibraryAutoReferenceAccess, c.HiveAccess, c.HiveKnowledgeRetrievalAccess, c.CanvasCodeExecutionAccess, c.CanvasCodeNetworkAccess, c.ShareChatWithWorkspace, c.EnhancedCitations, c.DesktopAppBetaFeaturesAccess, c.DataExportAccess, `chatgpt.workspace.contextlayer.admin`]), N = new Set([c.BasisPointsPowerPointAccess, c.BasisPointsWordAccess, c.BasisPointsAccess]), P = new Set([c.EarlyModelAccess, c.ReasoningModelAccess, c.ProModelAccess, c.GPT5ThinkingMiniAccess, c.GPT52ReasoningAccess, c.GPT52ProAccess, c.GPT51ReasoningAccess, c.GPT51ProAccess, c.GPTO3Access, c.GPT41Access, c.GPT45Access, c.GPTO4MiniAccess]), xe = new Set([c.GPT56SolAccess, c.GPT56TerraAccess, c.GPT56LunaAccess]), Se = new Set([c.FloraLocalAccess, `chatgpt.workspace.feature.flora.access`, `chatgpt.workspace.feature.flora-browser-use.access`, `chatgpt.workspace.feature.flora-network-access.access`, `chatgpt.workspace.feature.flora-webhook-automations.access`]), Ce = new Set([c.AllowCodexLocalAccess, c.AllowComputerHistory, `chatgpt.workspace.feature.codex-remote-control.access`, c.WindowsComputerUseAccess, c.CodexDeviceCodeAuthAccess, c.AllowCodexAccess, c.CodexOptimizeAccess, c.CodexOptimizeAdminAccess, c.CodexAgentNetworkAccess, c.CodexSlackPostingAccess, c.SecurityCodexAccessAllow, c.CodexAdminAccess, c.SecurityCodexAdminAllow]), we = new Set([c.PrivatePublishGPT]), F = {
            plugins_and_connected_data: ye,
            plugin_custom_mcp_upload: new Set([c.UploadWorkspacePluginsWithCustomMcpServers]),
            workspace_capabilities: M,
            team_automation_write: new Set([c.TeamAutomationWrite]),
            chat: be,
            cme: new Set([c.CmeAccess]),
            chat_extensions: N,
            chat_models: P,
            chat_models_frontier: xe,
            work: Se,
            codex: Ce,
            codex_workspace_environments: new Set([c.CodexManageWorkspaceEnvironments]),
            gpts: we
        }, Te = new Set(Object.values(F).flatMap(e => [...e])), Ee = new Set([...M].filter(e => e !== c.MemberRoleView))
    })),
    I, L, Oe, ke, R = e((() => {
        k(), o(), I = e => {
            if (e.visualParentPermissionNames != null) return e.visualParentPermissionNames;
            let t = ie(e.permissionName),
                n = e.dependsOnPermissionName;
            return n ? t && (t.includes(n) || ie(n)?.some(e => t.includes(e))) ? t : [n] : t
        }, L = (e, t) => I(e)?.find(n => n !== e.permissionName && t.has(n)), Oe = ({
            sections: e,
            permissionStates: t,
            showDisabledDependencies: n = !1
        }) => {
            let r = new Map(e.flatMap(e => e.entries.map(e => [e.permissionName, e]))),
                i = new Map,
                a = new Set,
                o = e => {
                    let s = i.get(e.permissionName);
                    if (s !== void 0) return s;
                    if (n && e.showWhenParentDisabled) return i.set(e.permissionName, !0), !0;
                    if (a.has(e.permissionName)) return t.get(e.permissionName) !== !1;
                    let c = I(e)?.flatMap(e => {
                        let t = r.get(e);
                        return t ? [t] : []
                    }) ?? [];
                    if (c.length === 0) return i.set(e.permissionName, !0), !0;
                    a.add(e.permissionName);
                    let l = c.some(e => t.get(e.permissionName) !== !1 && o(e));
                    return a.delete(e.permissionName), i.set(e.permissionName, l), l
                };
            return e.map(e => ({
                ...e,
                entries: e.entries.filter(o)
            })).filter(e => e.entries.length > 0)
        }, ke = (e, {
            visiblePermissionNames: t,
            followingEntry: r,
            connectorsManagedByTree: i = !1
        } = {}) => {
            if (i) return `min-h-14 px-4`;
            let a = se(e.permissionName)?.hierarchy,
                o = I(e),
                s = t === void 0 || o?.some(e => t.has(e)) === !0,
                c = r ? I(r) : void 0,
                l = a === `child` && s && r != null && se(r.permissionName)?.hierarchy === `child` && o?.some(e => c?.includes(e) && (t === void 0 || t.has(e))) === !0;
            return n(`min-h-14 px-4`, a === `child` && s && `relative ps-16 before:absolute before:start-9 before:top-0 before:h-1/2 before:w-4 before:rounded-es-md before:border-b before:border-s before:border-token-border-default`, l && `after:absolute after:start-9 after:top-1/2 after:bottom-0 after:border-s after:border-token-border-default`)
        }
    })),
    z, B, V, Ae, je = e((() => {
        ae(), k(), R(), g(), z = m({
            earlyAccessDescription: {
                id: `chatgpt.admin.permissions.july30.role.category.early_access.description`,
                defaultMessage: `Preview features are off by default. Set access before launch, or they’ll turn on automatically for the Workspace default role.`
            },
            financialServicesDescription: {
                id: `chatgpt.workspace.permissions.financial_services.category.description`,
                defaultMessage: `Manage access to ChatGPT Financial Services and financial data.`
            },
            legalDescription: {
                id: `chatgpt.workspace.permissions.legal.category.description`,
                defaultMessage: `Manage access to OpenAI for Legal and legal workflows.`
            },
            platformCapabilitiesDescription: {
                id: `chatgpt.admin.permissions.july30.role.category.workspace_capabilities.description`,
                defaultMessage: `Manage access to features, credentials, and member information shared across products.`
            },
            usageLimitsDescription: {
                id: `chatgpt.admin.permissions.july30.role.category.usage_limits.description`,
                defaultMessage: `Manage individual usage limits and shared credit budgets for members with this role.`
            },
            chatDescription: {
                id: `chatgpt.admin.permissions.july30.role.category.chat.description`,
                defaultMessage: `Manage how members use Chat and collaborate.`
            },
            chatExtensionsDescription: {
                id: `chatgpt.admin.permissions.july30.role.category.chat_extensions.description`,
                defaultMessage: `Choose which Chat extensions members can use.`
            },
            chatModelsDescription: {
                id: `chatgpt.admin.permissions.july30.role.category.chat_models.description`,
                defaultMessage: `Choose which models users can use.`
            },
            workDescription: {
                id: `chatgpt.admin.permissions.july30.role.category.work.description`,
                defaultMessage: `Manage how members use Work.`
            },
            codexDescription: {
                id: `chatgpt.admin.permissions.july30.role.category.codex.description`,
                defaultMessage: `Manage how members use Codex.`
            }
        }), B = {
            "Early access": {
                title: j.earlyAccess,
                description: z.earlyAccessDescription
            },
            "ChartGPT - EHR Integrations": {
                title: ce.title,
                description: ce.description
            },
            "Financial services": {
                title: j.financialServices,
                description: z.financialServicesDescription
            },
            Legal: {
                title: j.legal,
                description: z.legalDescription
            },
            "Platform Capabilities": {
                title: j.platformCapabilities,
                description: z.platformCapabilitiesDescription
            },
            "Usage limits": {
                title: j.usageLimits,
                description: z.usageLimitsDescription
            },
            Chat: {
                title: j.chat,
                description: z.chatDescription
            },
            "Chat extensions": {
                title: j.chatExtensions,
                description: z.chatExtensionsDescription
            },
            "Chat models": {
                title: j.chatModels,
                description: z.chatModelsDescription
            },
            Work: {
                title: j.work,
                description: z.workDescription
            },
            Codex: {
                title: j.codex,
                description: z.codexDescription
            }
        }, V = (e, ...t) => t.join(` `).toLowerCase().includes(e), Ae = ({
            sections: e,
            searchQuery: t,
            intl: n
        }) => {
            let r = t.trim().toLowerCase(),
                i = new Set;
            if (!r) return {
                sections: e,
                matchedCategories: i
            };
            for (let e of oe) {
                let t = B[e];
                V(r, n.formatMessage(t.title), n.formatMessage(t.description)) && i.add(e)
            }
            let a = new Set(e.flatMap(e => e.entries.map(e => e.permissionName))),
                o = new Map(e.flatMap(e => e.entries.map(e => [e.permissionName, e]))),
                s = e => {
                    let t = e,
                        n = new Set;
                    for (; !n.has(t.permissionName);) {
                        n.add(t.permissionName);
                        let e = L(t, a),
                            r = e ? o.get(e) : void 0;
                        if (!r) return t.permissionName;
                        t = r
                    }
                    return e.permissionName
                },
                c = new Set,
                l = new Set;
            for (let t of e) {
                let e = V(r, n.formatMessage(t.title), t.description ? String(n.formatMessage(t.description, t.descriptionValues)) : ``);
                for (let i of t.entries) {
                    let t = re(i),
                        o = A(i.permissionName),
                        u = t ? typeof t.title == `string` ? t.title : n.formatMessage(t.title) : typeof i.title == `string` ? i.title : n.formatMessage(i.title),
                        d = !t && i.description ? String(n.formatMessage(i.description, i.descriptionValues)) : ``,
                        f = i.additionalDescription ? String(n.formatMessage(i.additionalDescription, i.additionalDescriptionValues)) : ``;
                    if (!(!V(r, u, d, f) && (o || !e))) {
                        if (t?.hierarchy === `parent`) {
                            l.add(s(i));
                            continue
                        }
                        if (t?.hierarchy === `child` && L(i, a)) {
                            l.add(s(i));
                            continue
                        }
                        c.add(i.permissionName)
                    }
                }
            }
            return {
                sections: e.map(e => ({
                    ...e,
                    entries: e.entries.filter(e => {
                        let t = A(e.permissionName);
                        return t != null && i.has(t.category) || c.has(e.permissionName) || l.has(s(e))
                    })
                })).filter(e => e.entries.length > 0),
                matchedCategories: i
            }
        }
    }));

function Me(e, t) {
    return t % 2 == 1 ? (0, H.jsx)(`mark`, {
        className: `bg-token-theme-yellow-background rounded text-inherit`,
        children: e
    }, `${t}-${e}`) : e
}
var Ne, H, U, Pe = e((() => {
    Ne = v(), T(), H = p(), U = e => {
        "use forget";
        let t = (0, Ne.c)(8),
            {
                text: n,
                searchQuery: r
            } = e,
            i = r === void 0 ? `` : r,
            a, o;
        if (t[0] !== i || t[1] !== n) {
            o = Symbol.for(`react.early_return_sentinel`);
            bb0: {
                let e = i.trim();
                if (!e) {
                    let e;
                    t[4] === n ? e = t[5] : (e = (0, H.jsx)(H.Fragment, {
                        children: n
                    }), t[4] = n, t[5] = e), o = e;
                    break bb0
                }
                a = n.split(RegExp(`(${b(e)})`, `gi`)).map(Me)
            }
            t[0] = i, t[1] = n, t[2] = a, t[3] = o
        } else a = t[2], o = t[3];
        if (o !== Symbol.for(`react.early_return_sentinel`)) return o;
        let s;
        return t[6] === a ? s = t[7] : (s = (0, H.jsx)(H.Fragment, {
            children: a
        }), t[6] = a, t[7] = s), s
    }
}));

function Fe(e, t) {
    let n = e.match(/\S+\s*$/u);
    if (n?.index == null || n.index <= 0 || typeof Intl.Segmenter != `function`) return Ie(e);
    try {
        let r = n.index,
            i = new Intl.Segmenter(t, {
                granularity: `word`
            }).segment(e);
        for (let e of i) e.isWordLike && e.index > 0 && (r = e.index);
        return r
    } catch {
        return Ie(e)
    }
}

function Ie(e) {
    return e.length - (f(e).at(-1)?.length ?? 0)
}

function Le(e) {
    let {
        sourceSection: t
    } = e;
    return t.anchorId
}

function Re(e, t) {
    return e.order - t.order
}
var W, G, K, ze, q, Be, J, Ve, He, Ue = e((() => {
        W = v(), le(), E(), s(), S(), k(), je(), R(), Pe(), r(), o(), G = t(_()), g(), K = p(), ze = e => {
            let t = new Set(e.map(({
                    entry: e
                }) => e.permissionName)),
                n = e.map(e => ({
                    ...e,
                    children: []
                })),
                r = new Map(n.map((e, t) => [e.entry.permissionName, t])),
                i = [];
            return n.forEach((e, a) => {
                let o = L(e.entry, t),
                    s = o ? r.get(o) : void 0;
                if (s == null || s >= a) {
                    i.push(e);
                    return
                }
                n[s]?.children.push(e)
            }), i
        }, q = e => {
            "use forget";
            let t = (0, W.c)(5),
                {
                    entries: r,
                    renderEntry: i
                } = e,
                a;
            if (t[0] !== r || t[1] !== i) {
                let e = t => t.map((r, a) => {
                        let o = t[a + 1],
                            s = o == null;
                        return (0, K.jsx)(G.Fragment, {
                            children: (0, K.jsxs)(`div`, {
                                className: `relative`,
                                children: [(0, K.jsx)(`span`, {
                                    "aria-hidden": `true`,
                                    "data-testid": `permission-tree-connector-rail`,
                                    className: n(`border-gray-solid-100 dark:border-gray-solid-700 pointer-events-none absolute -start-[13px] top-0 border-s-2`, s ? `h-[calc(50%-8px)]` : `bottom-0`)
                                }), (0, K.jsxs)(`div`, {
                                    className: `relative`,
                                    children: [(0, K.jsx)(`svg`, {
                                        "aria-hidden": `true`,
                                        "data-testid": `permission-tree-connector`,
                                        width: `18`,
                                        height: `10`,
                                        viewBox: `0 0 18 10`,
                                        className: `pointer-events-none absolute -start-[13px] top-[calc(50%-8px)] h-[10px] w-[18px] overflow-visible rtl:-scale-x-100`,
                                        children: (0, K.jsx)(`path`, {
                                            "data-testid": `permission-tree-connector-knee`,
                                            d: `M1 0C1 4.41828 4.58172 8 9 8H17`,
                                            fill: `none`,
                                            strokeWidth: `2`,
                                            strokeLinecap: `round`,
                                            className: `stroke-gray-solid-100 dark:stroke-gray-solid-700`,
                                            style: s ? void 0 : {
                                                clipPath: `inset(0 0 0 2px)`
                                            }
                                        })
                                    }), i(r.entry, r.sourceSection, o?.entry, !0)]
                                }), r.children.length > 0 && (0, K.jsx)(`div`, {
                                    "data-testid": `permission-tree-branch`,
                                    className: `ms-12 flex flex-col`,
                                    children: e(r.children)
                                })]
                            })
                        }, r.entry.permissionName)
                    }),
                    o = ze(r);
                a = o.map((t, n) => (0, K.jsxs)(G.Fragment, {
                    children: [i(t.entry, t.sourceSection, o[n + 1]?.entry, !0), t.children.length > 0 && (0, K.jsx)(`div`, {
                        "data-testid": `permission-tree-branch`,
                        className: `ms-12 flex flex-col`,
                        children: e(t.children)
                    })]
                }, t.entry.permissionName)), t[0] = r, t[1] = i, t[2] = a
            } else a = t[2];
            let o;
            return t[3] === a ? o = t[4] : (o = (0, K.jsx)(K.Fragment, {
                children: a
            }), t[3] = a, t[4] = o), o
        }, Be = e => {
            "use forget";
            let t = (0, W.c)(15),
                {
                    entry: n,
                    title: r,
                    searchQuery: i,
                    showBadge: a
                } = e,
                o = i === void 0 ? `` : i,
                s = a === void 0 || a,
                c = y(),
                u;
            t[0] === n ? u = t[1] : (u = re(n), t[0] = n, t[1] = u);
            let d = u,
                f = d?.infoTooltip ?? n.description,
                p;
            if (t[2] !== d || t[3] !== n || t[4] !== c || t[5] !== o || t[6] !== r || t[7] !== f) {
                let e = Fe(r, c.locale),
                    i = o.trim(),
                    a = i ? r.toLowerCase().lastIndexOf(i.toLowerCase()) : -1,
                    s = a >= 0 && a < e && a + i.length > e ? a : e;
                p = (0, K.jsxs)(`span`, {
                    children: [(0, K.jsx)(U, {
                        text: f ? r.slice(0, s) : r,
                        searchQuery: o
                    }), f && (0, K.jsxs)(`span`, {
                        className: `whitespace-nowrap`,
                        children: [(0, K.jsx)(U, {
                            text: r.slice(s),
                            searchQuery: o
                        }), (0, K.jsx)(x, {
                            content: (0, K.jsx)(h, {
                                ...f,
                                values: d ? void 0 : n.descriptionValues
                            }),
                            side: `top-center`,
                            children: e => (0, K.jsx)(`button`, {
                                ...e,
                                type: `button`,
                                "aria-label": c.formatMessage(He.permissionInfoAriaLabel, {
                                    permission: r
                                }),
                                className: `interactive-button text-token-text-tertiary hover:text-token-text-primary ms-1 inline-flex shrink-0 items-center rounded-sm align-middle`,
                                children: (0, K.jsx)(l, {
                                    "aria-hidden": `true`,
                                    className: `icon-sm`
                                })
                            })
                        })]
                    })]
                }), t[2] = d, t[3] = n, t[4] = c, t[5] = o, t[6] = r, t[7] = f, t[8] = p
            } else p = t[8];
            let m;
            t[9] !== d || t[10] !== s ? (m = s && d?.badge && (0, K.jsx)(`span`, {
                className: `inline-flex h-[18px] shrink-0 items-center justify-center rounded-[6px] bg-[var(--green-a50)] px-[5px] text-xs font-medium text-[light-dark(var(--green-600),var(--green-400))]`,
                children: (0, K.jsx)(h, {
                    ...d.badge
                })
            }), t[9] = d, t[10] = s, t[11] = m) : m = t[11];
            let g;
            return t[12] !== p || t[13] !== m ? (g = (0, K.jsxs)(K.Fragment, {
                children: [p, m]
            }), t[12] = p, t[13] = m, t[14] = g) : g = t[14], g
        }, J = e => {
            "use forget";
            let t = (0, W.c)(32),
                {
                    sectionKey: r,
                    id: i,
                    title: a,
                    titleContent: o,
                    description: s,
                    descriptionValues: c,
                    expanded: l,
                    forceExpanded: u,
                    onExpandedChange: d,
                    children: f
                } = e,
                p = y(),
                m = (0, G.useId)(),
                h = u || l,
                g;
            t[0] !== p || t[1] !== a ? (g = p.formatMessage(a), t[0] = p, t[1] = a, t[2] = g) : g = t[2];
            let _ = g,
                v;
            t[3] !== d || t[4] !== r ? (v = e => d(r, e), t[3] = d, t[4] = r, t[5] = v) : v = t[5];
            let b;
            t[6] !== m || t[7] !== h || t[8] !== u || t[9] !== _ || t[10] !== v ? (b = (0, K.jsx)(ue, {
                sectionTitle: _,
                expanded: h,
                controlsId: m,
                disabled: u,
                onExpandedChange: v
            }), t[6] = m, t[7] = h, t[8] = u, t[9] = _, t[10] = v, t[11] = b) : b = t[11];
            let x;
            t[12] === o ? x = t[13] : (x = (0, K.jsx)(`span`, {
                children: o
            }), t[12] = o, t[13] = x);
            let S;
            t[14] !== b || t[15] !== x ? (S = (0, K.jsxs)(`span`, {
                className: `flex items-center gap-3`,
                children: [b, x]
            }), t[14] = b, t[15] = x, t[16] = S) : S = t[16];
            let C = h && `md:grid md:grid-cols-[minmax(0,240px)_minmax(0,1fr)] md:gap-x-[30px]`,
                w;
            t[17] === C ? w = t[18] : (w = n(`border-token-border-default gap-4 border-b pb-8 last:border-b-0`, C), t[17] = C, t[18] = w);
            let T = !h,
                E = h ? `contents` : `hidden`,
                D;
            t[19] !== f || t[20] !== m || t[21] !== T || t[22] !== E ? (D = (0, K.jsx)(`div`, {
                id: m,
                hidden: T,
                className: E,
                children: f
            }), t[19] = f, t[20] = m, t[21] = T, t[22] = E, t[23] = D) : D = t[23];
            let O;
            return t[24] !== s || t[25] !== c || t[26] !== i || t[27] !== D || t[28] !== S || t[29] !== w || t[30] !== a ? (O = (0, K.jsx)(ee, {
                id: i,
                title: a,
                titleContent: S,
                description: s,
                descriptionValues: c,
                descriptionClassName: `ps-11`,
                className: w,
                children: D
            }), t[24] = s, t[25] = c, t[26] = i, t[27] = D, t[28] = S, t[29] = w, t[30] = a, t[31] = O) : O = t[31], O
        }, Ve = e => {
            "use forget";
            let t = (0, W.c)(11),
                {
                    sections: n,
                    renderEntry: r,
                    codexSectionNotice: i,
                    usageLimitsContent: a,
                    chatModelsMovedContent: o,
                    searchQuery: s,
                    isSectionExpanded: c,
                    onSectionExpandedChange: l,
                    forceSectionsExpanded: u
                } = e,
                d = s === void 0 ? `` : s,
                f = u !== void 0 && u,
                p = y(),
                m;
            if (t[0] !== o || t[1] !== i || t[2] !== f || t[3] !== p || t[4] !== c || t[5] !== l || t[6] !== r || t[7] !== d || t[8] !== n || t[9] !== a) {
                let e = new Map,
                    s = [];
                for (let t of n) {
                    let n = [];
                    for (let r of t.entries) {
                        let i = A(r.permissionName);
                        if (!i) {
                            n.push(r);
                            continue
                        }
                        let a = e.get(i.category) ?? [];
                        a.push({
                            entry: r,
                            order: i.order,
                            sourceSection: t
                        }), e.set(i.category, a)
                    }
                    n.length > 0 && s.push({
                        ...t,
                        entries: n
                    })
                }
                m = (0, K.jsxs)(`div`, {
                    className: `flex flex-col gap-8`,
                    children: [oe.map(t => {
                        let n = e.get(t),
                            s = t === `Usage limits` && a != null && a !== !1,
                            u = t === `Chat models` && o != null && o !== !1;
                        if (!n?.length && !s && !u) return null;
                        let m = B[t],
                            h = n?.find(Le)?.sourceSection.anchorId,
                            g = n ? [...n].sort(Re) : [];
                        return (0, K.jsxs)(J, {
                            sectionKey: t,
                            id: h,
                            title: m.title,
                            titleContent: (0, K.jsx)(`span`, {
                                children: (0, K.jsx)(U, {
                                    text: p.formatMessage(m.title),
                                    searchQuery: d
                                })
                            }),
                            description: (0, K.jsxs)(K.Fragment, {
                                children: [(0, K.jsx)(U, {
                                    text: p.formatMessage(m.description),
                                    searchQuery: d
                                }), t === `Codex` ? i : null]
                            }),
                            expanded: c(t),
                            forceExpanded: f,
                            onExpandedChange: l,
                            children: [g.length > 0 ? (0, K.jsx)(`div`, {
                                role: `group`,
                                "aria-label": p.formatMessage(m.title),
                                className: `flex flex-col`,
                                children: (0, K.jsx)(q, {
                                    entries: g,
                                    renderEntry: r
                                })
                            }) : null, s ? a : null, u ? o : null]
                        }, t)
                    }), s.map(e => {
                        let t = `fallback:${e.anchorId??e.title.id??String(e.title.defaultMessage)}`;
                        return (0, K.jsx)(J, {
                            sectionKey: t,
                            id: e.anchorId,
                            title: e.title,
                            titleContent: (0, K.jsx)(`span`, {
                                children: (0, K.jsx)(U, {
                                    text: p.formatMessage(e.title),
                                    searchQuery: d
                                })
                            }),
                            description: e.description,
                            descriptionValues: e.descriptionValues,
                            expanded: c(t),
                            forceExpanded: f,
                            onExpandedChange: l,
                            children: (0, K.jsx)(`div`, {
                                role: `group`,
                                "aria-label": p.formatMessage(e.title),
                                className: `flex flex-col`,
                                children: (0, K.jsx)(q, {
                                    entries: e.entries.map((t, n) => ({
                                        entry: t,
                                        order: n,
                                        sourceSection: e
                                    })),
                                    renderEntry: r
                                })
                            })
                        }, t)
                    })]
                }), t[0] = o, t[1] = i, t[2] = f, t[3] = p, t[4] = c, t[5] = l, t[6] = r, t[7] = d, t[8] = n, t[9] = a, t[10] = m
            } else m = t[10];
            return m
        }, He = m({
            permissionInfoAriaLabel: {
                id: `chatgpt.admin.permissions.july30.role.permission.info.aria_label`,
                defaultMessage: `More information about {permission}`
            }
        })
    })),
    Y, We, X, Z, Ge, Q, Ke = e((() => {
        u(), w(), te(), a(), g(), Y = m({
            financeSectionTitle: {
                id: `chatgpt.workspace.permissions.financial_services.section.title`,
                defaultMessage: `Financial services`
            },
            financeSectionDescription: {
                id: `chatgpt.workspace.permissions.financial_services.section.description`,
                defaultMessage: `Manage access to ChatGPT Financial Services and financial data.`
            },
            financeAccessTitle: {
                id: `chatgpt.workspace.permissions.financial_services.access.title`,
                defaultMessage: `Enable ChatGPT Financial Services`
            },
            financeAccessDescription: {
                id: `chatgpt.workspace.permissions.financial_services.access.description.work_defaults`,
                defaultMessage: `Enable ChatGPT Financial Services and Work in the cloud. Members use Work, with Chat available through Instant for quick questions. You can adjust these Work settings afterward.`
            },
            financeCompanyFilingsAccessDescription: {
                id: `chatgpt.workspace.permissions.financial_services.company_filings.description`,
                defaultMessage: `Allow members to search public company filings, including annual and quarterly reports.`
            },
            financeInvestorReportsAccessDescription: {
                id: `chatgpt.workspace.permissions.financial_services.investor_reports.description`,
                defaultMessage: `Allow members to search company-published reports on financial results and business performance.`
            },
            financeEarningsCallsAccessDescription: {
                id: `chatgpt.workspace.permissions.financial_services.earnings_calls.description`,
                defaultMessage: `Allow members to search earnings call transcripts, including management commentary and Q&A.`
            },
            financeInvestorPresentationsAccessDescription: {
                id: `chatgpt.workspace.permissions.financial_services.investor_presentations.description`,
                defaultMessage: `Allow members to search company investor presentations and financial results slide decks.`
            },
            financeFinancialMetricsAccessDescription: {
                id: `chatgpt.workspace.permissions.financial_services.financial_metrics.description`,
                defaultMessage: `Allow members to query company financial metrics and explore available financial data tables.`
            },
            financeMarketPricingAccessDescription: {
                id: `chatgpt.workspace.permissions.financial_services.market_pricing.description`,
                defaultMessage: `Allow members to retrieve current market prices and historical price data.`
            },
            financePrivateCompanyMetricsAccessDescription: {
                id: `chatgpt.workspace.permissions.financial_services.private_company_metrics.description`,
                defaultMessage: `Allow members to explore private company profiles, funding rounds, investors, and investment metrics.`
            },
            financeNewsAccessDescription: {
                id: `chatgpt.workspace.permissions.financial_services.news.description`,
                defaultMessage: `Allow members to search financial and business news.`
            }
        }), We = `3150987624`, X = {
            company_filings: {
                rbac: !0,
                title: C.company_filings,
                description: Y.financeCompanyFilingsAccessDescription,
                permissionName: c.FinDataCompanyFilingsAccess,
                dependsOnPermissionName: c.FinServAccess
            },
            investor_reports: {
                rbac: !0,
                title: C.investor_reports,
                description: Y.financeInvestorReportsAccessDescription,
                permissionName: c.FinDataInvestorReportsAccess,
                dependsOnPermissionName: c.FinServAccess
            },
            earnings_calls: {
                rbac: !0,
                title: C.earnings_calls,
                description: Y.financeEarningsCallsAccessDescription,
                permissionName: c.FinDataEarningsCallsAccess,
                dependsOnPermissionName: c.FinServAccess
            },
            investor_presentations: {
                rbac: !0,
                title: C.investor_presentations,
                description: Y.financeInvestorPresentationsAccessDescription,
                permissionName: c.FinDataInvestorPresentationsAccess,
                dependsOnPermissionName: c.FinServAccess
            },
            financial_metrics: {
                rbac: !0,
                title: C.financial_metrics,
                description: Y.financeFinancialMetricsAccessDescription,
                permissionName: c.FinDataFinancialMetricsAccess,
                dependsOnPermissionName: c.FinServAccess
            },
            market_pricing: {
                rbac: !0,
                title: C.market_pricing,
                description: Y.financeMarketPricingAccessDescription,
                permissionName: c.FinDataMarketPricingAccess,
                dependsOnPermissionName: c.FinServAccess
            },
            private_company_metrics: {
                rbac: !0,
                title: C.private_company_metrics,
                description: Y.financePrivateCompanyMetricsAccessDescription,
                permissionName: c.FinDataPrivateCompanyMetricsAccess,
                dependsOnPermissionName: c.FinServAccess
            },
            news: {
                rbac: !0,
                title: C.news,
                description: Y.financeNewsAccessDescription,
                permissionName: c.FinDataNewsAccess,
                dependsOnPermissionName: c.FinServAccess
            }
        }, Z = () => {
            let e = d(We).get(`categories`, {});
            return typeof e != `object` || !e || Array.isArray(e) ? [] : Object.entries(e).flatMap(([e, t]) => {
                let n = X[e];
                return !Object.hasOwn(X, e) || n == null || typeof t != `object` || !t || !(`enabled` in t) || t.enabled !== !0 || !(`workspace_permission` in t) || t.workspace_permission !== n.permissionName ? [] : [{
                    ...n
                }]
            })
        }, Ge = () => ({
            title: Y.financeSectionTitle,
            description: Y.financeSectionDescription,
            anchorId: `financial-services-permissions`,
            entries: [{
                rbac: !0,
                title: Y.financeAccessTitle,
                description: Y.financeAccessDescription,
                permissionName: c.FinServAccess,
                permissionNamesToAddWhenEnabled: [ne, c.WorkOnlyMode, c.WorkOnlyChatInstant, ...Z().map(e => e.permissionName)],
                permissionNamesToRemoveWhenDisabled: Object.values(X).map(e => e.permissionName)
            }, ...Z()]
        }), Q = (e, t, n, r) => {
            let a = r.trim().toLowerCase();
            return e?.id === t && e.isOwnerOfAccount() && e.isEnterprisey() && i(`3856252093`) && (a === `` || [`finance`, ...Object.values(Y).map(e => n.formatMessage(e))].join(` `).toLowerCase().includes(a))
        }
    })),
    $, qe, Je, Ye = e((() => {
        $ = p(), _(), qe = e => (0, $.jsx)(`svg`, {
            preserveAspectRatio: `none`,
            overflow: `visible`,
            style: {
                display: `block`
            },
            width: 48,
            height: 48,
            viewBox: `0 0 48 48`,
            fill: `none`,
            xmlns: `http://www.w3.org/2000/svg`,
            ...e,
            children: (0, $.jsxs)(`g`, {
                id: `icon-financial-services`,
                children: [(0, $.jsx)(`path`, {
                    id: `vector`,
                    d: `M18.8232 4.67796C22.4085 3.71738 26.0615 4.88521 28.4444 7.40547C31.7691 6.4128 35.5195 7.2295 38.1451 9.85518C40.7701 12.4804 41.5856 16.2294 40.5938 19.5537C43.1148 21.9366 44.283 25.5911 43.3223 29.1772C42.3612 32.7639 39.5212 35.3446 36.1456 36.1473C35.3424 39.5221 32.7634 42.361 29.1776 43.322C25.5913 44.2829 21.937 43.1146 19.554 40.5931C16.2296 41.5852 12.4809 40.7701 9.85564 38.1448C7.2307 35.5197 6.41357 31.7709 7.40511 28.4468C4.88438 26.0637 3.71766 22.4086 4.67844 18.8227C5.63935 15.2365 8.47783 12.6544 11.8528 11.8513C12.6563 8.47682 15.2375 5.63876 18.8232 4.67796Z`,
                    fill: `#488631`
                }), (0, $.jsx)(`path`, {
                    id: `Vector 2928`,
                    d: `M17.5 20V30`,
                    stroke: `#8ADE6B`,
                    strokeWidth: 3.6
                }), (0, $.jsx)(`path`, {
                    id: `Vector 2929`,
                    d: `M24 20V30`,
                    stroke: `#8ADE6B`,
                    strokeWidth: 3.6
                }), (0, $.jsx)(`path`, {
                    id: `Vector 2930`,
                    d: `M30.5 20V30`,
                    stroke: `#8ADE6B`,
                    strokeWidth: 3.6
                }), (0, $.jsx)(`path`, {
                    id: `Vector 2932`,
                    d: `M15.5 31H32.5`,
                    stroke: `#8ADE6B`,
                    strokeWidth: 5.2,
                    strokeLinecap: `round`
                }), (0, $.jsx)(`path`, {
                    id: `Vector 2931`,
                    d: `M33.467 20H14.533C13.5247 20 13.1502 18.6768 14.0089 18.1483L23.4759 12.3225C23.7973 12.1247 24.2027 12.1247 24.5241 12.3225L33.9911 18.1483C34.8498 18.6768 34.4753 20 33.467 20Z`,
                    fill: `#8ADE6B`,
                    stroke: `#8ADE6B`,
                    strokeWidth: 2
                })]
            })
        }), Je = qe
    }));
export {
    ge as C, _e as S, M as T, R as _, Ke as a, de as b, Be as c, U as d, Pe as f, Oe as g, ke as h, Ge as i, Ve as l, je as m, Ye as n, Q as o, Ae as p, Y as r, J as s, Je as t, Ue as u, he as v, pe as w, De as x, me as y
};
//# sourceMappingURL=ceb3cab8-b1w9o2mj2elcn2cz.js.map
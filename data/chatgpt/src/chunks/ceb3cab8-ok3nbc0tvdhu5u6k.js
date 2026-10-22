import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    CQ as n,
    SQ as r,
    c7 as i,
    fB as a,
    l7 as o,
    oK as s,
    pB as c,
    prt as l,
    sK as u,
    srt as d,
    urt as f
} from "./4813494d-itnrgnth03y1sm9d.js";
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
    Ajt as b,
    bVt as x,
    dM as S,
    kjt as C,
    pM as w,
    yVt as T
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    Ho as ee,
    Wo as E
} from "./c2675c8c-d62p1sdq1sy52umm.js";
import {
    s as D,
    t as O
} from "./4ed85438-d3iehz718flwc6ou.js";
import {
    C as te,
    D as k,
    E as ne,
    M as re,
    O as ie,
    P as ae,
    S as A,
    j,
    k as M
} from "./b90db9d2-i7oumdosc3q3hqd0.js";
import {
    n as oe,
    t as se
} from "./e17f5811-bjdofltzig180y3e.js";
var N, P, ce, le, F = e((() => {
        j(), o(), N = e => {
            if (e.visualParentPermissionNames != null) return e.visualParentPermissionNames;
            let t = k(e.permissionName),
                n = e.dependsOnPermissionName;
            return n ? t && (t.includes(n) || k(n)?.some(e => t.includes(e))) ? t : [n] : t
        }, P = (e, t) => N(e)?.find(n => n !== e.permissionName && t.has(n)), ce = ({
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
                    let c = N(e)?.flatMap(e => {
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
        }, le = (e, {
            visiblePermissionNames: t,
            followingEntry: n,
            connectorsManagedByTree: r = !1
        } = {}) => {
            if (r) return `min-h-14 px-4`;
            let a = ne(e.permissionName)?.hierarchy,
                o = N(e),
                s = t === void 0 || o?.some(e => t.has(e)) === !0,
                c = n ? N(n) : void 0,
                l = a === `child` && s && n != null && ne(n.permissionName)?.hierarchy === `child` && o?.some(e => c?.includes(e) && (t === void 0 || t.has(e))) === !0;
            return i(`min-h-14 px-4`, a === `child` && s && `relative ps-16 before:absolute before:start-9 before:top-0 before:h-1/2 before:w-4 before:rounded-es-md before:border-b before:border-s before:border-token-border-default`, l && `after:absolute after:start-9 after:top-1/2 after:bottom-0 after:border-s after:border-token-border-default`)
        }
    })),
    I, L, R, ue, z = e((() => {
        ae(), j(), F(), g(), I = m({
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
        }), L = {
            "Early access": {
                title: A.earlyAccess,
                description: I.earlyAccessDescription
            },
            "ChartGPT - EHR Integrations": {
                title: re.title,
                description: re.description
            },
            "Financial services": {
                title: A.financialServices,
                description: I.financialServicesDescription
            },
            Legal: {
                title: A.legal,
                description: I.legalDescription
            },
            "Platform Capabilities": {
                title: A.platformCapabilities,
                description: I.platformCapabilitiesDescription
            },
            "Usage limits": {
                title: A.usageLimits,
                description: I.usageLimitsDescription
            },
            Chat: {
                title: A.chat,
                description: I.chatDescription
            },
            "Chat extensions": {
                title: A.chatExtensions,
                description: I.chatExtensionsDescription
            },
            "Chat models": {
                title: A.chatModels,
                description: I.chatModelsDescription
            },
            Work: {
                title: A.work,
                description: I.workDescription
            },
            Codex: {
                title: A.codex,
                description: I.codexDescription
            }
        }, R = (e, ...t) => t.join(` `).toLowerCase().includes(e), ue = ({
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
            for (let e of te) {
                let t = L[e];
                R(r, n.formatMessage(t.title), n.formatMessage(t.description)) && i.add(e)
            }
            let a = new Set(e.flatMap(e => e.entries.map(e => e.permissionName))),
                o = new Map(e.flatMap(e => e.entries.map(e => [e.permissionName, e]))),
                s = e => {
                    let t = e,
                        n = new Set;
                    for (; !n.has(t.permissionName);) {
                        n.add(t.permissionName);
                        let e = P(t, a),
                            r = e ? o.get(e) : void 0;
                        if (!r) return t.permissionName;
                        t = r
                    }
                    return e.permissionName
                },
                c = new Set,
                l = new Set;
            for (let t of e) {
                let e = R(r, n.formatMessage(t.title), t.description ? String(n.formatMessage(t.description, t.descriptionValues)) : ``);
                for (let i of t.entries) {
                    let t = ie(i),
                        o = M(i.permissionName),
                        u = t ? typeof t.title == `string` ? t.title : n.formatMessage(t.title) : typeof i.title == `string` ? i.title : n.formatMessage(i.title),
                        d = !t && i.description ? String(n.formatMessage(i.description, i.descriptionValues)) : ``,
                        f = i.additionalDescription ? String(n.formatMessage(i.additionalDescription, i.additionalDescriptionValues)) : ``;
                    if (!(!R(r, u, d, f) && (o || !e))) {
                        if (t?.hierarchy === `parent`) {
                            l.add(s(i));
                            continue
                        }
                        if (t?.hierarchy === `child` && P(i, a)) {
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
                        let t = M(e.permissionName);
                        return t != null && i.has(t.category) || c.has(e.permissionName) || l.has(s(e))
                    })
                })).filter(e => e.entries.length > 0),
                matchedCategories: i
            }
        }
    }));

function de(e, t) {
    return t % 2 == 1 ? (0, V.jsx)(`mark`, {
        className: `bg-token-theme-yellow-background rounded text-inherit`,
        children: e
    }, `${t}-${e}`) : e
}
var B, V, H, U = e((() => {
    B = v(), x(), V = p(), H = e => {
        "use forget";
        let t = (0, B.c)(8),
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
                    t[4] === n ? e = t[5] : (e = (0, V.jsx)(V.Fragment, {
                        children: n
                    }), t[4] = n, t[5] = e), o = e;
                    break bb0
                }
                a = n.split(RegExp(`(${T(e)})`, `gi`)).map(de)
            }
            t[0] = i, t[1] = n, t[2] = a, t[3] = o
        } else a = t[2], o = t[3];
        if (o !== Symbol.for(`react.early_return_sentinel`)) return o;
        let s;
        return t[6] === a ? s = t[7] : (s = (0, V.jsx)(V.Fragment, {
            children: a
        }), t[6] = a, t[7] = s), s
    }
}));

function fe(e, t) {
    let n = e.match(/\S+\s*$/u);
    if (n?.index == null || n.index <= 0 || typeof Intl.Segmenter != `function`) return pe(e);
    try {
        let r = n.index,
            i = new Intl.Segmenter(t, {
                granularity: `word`
            }).segment(e);
        for (let e of i) e.isWordLike && e.index > 0 && (r = e.index);
        return r
    } catch {
        return pe(e)
    }
}

function pe(e) {
    return e.length - (r(e).at(-1)?.length ?? 0)
}

function me(e) {
    let {
        sourceSection: t
    } = e;
    return t.anchorId
}

function he(e, t) {
    return e.order - t.order
}
var W, G, K, ge, q, _e, J, ve, ye, be = e((() => {
        W = v(), oe(), E(), c(), b(), j(), z(), F(), U(), n(), o(), G = t(_()), g(), K = p(), ge = e => {
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
                let o = P(e.entry, t),
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
                    entries: n,
                    renderEntry: r
                } = e,
                a;
            if (t[0] !== n || t[1] !== r) {
                let e = t => t.map((n, a) => {
                        let o = t[a + 1],
                            s = o == null;
                        return (0, K.jsx)(G.Fragment, {
                            children: (0, K.jsxs)(`div`, {
                                className: `relative`,
                                children: [(0, K.jsx)(`span`, {
                                    "aria-hidden": `true`,
                                    "data-testid": `permission-tree-connector-rail`,
                                    className: i(`border-gray-solid-100 dark:border-gray-solid-700 pointer-events-none absolute -start-[13px] top-0 border-s-2`, s ? `h-[calc(50%-8px)]` : `bottom-0`)
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
                                    }), r(n.entry, n.sourceSection, o?.entry, !0)]
                                }), n.children.length > 0 && (0, K.jsx)(`div`, {
                                    "data-testid": `permission-tree-branch`,
                                    className: `ms-12 flex flex-col`,
                                    children: e(n.children)
                                })]
                            })
                        }, n.entry.permissionName)
                    }),
                    o = ge(n);
                a = o.map((t, n) => (0, K.jsxs)(G.Fragment, {
                    children: [r(t.entry, t.sourceSection, o[n + 1]?.entry, !0), t.children.length > 0 && (0, K.jsx)(`div`, {
                        "data-testid": `permission-tree-branch`,
                        className: `ms-12 flex flex-col`,
                        children: e(t.children)
                    })]
                }, t.entry.permissionName)), t[0] = n, t[1] = r, t[2] = a
            } else a = t[2];
            let o;
            return t[3] === a ? o = t[4] : (o = (0, K.jsx)(K.Fragment, {
                children: a
            }), t[3] = a, t[4] = o), o
        }, _e = e => {
            "use forget";
            let t = (0, W.c)(15),
                {
                    entry: n,
                    title: r,
                    searchQuery: i,
                    showBadge: o
                } = e,
                s = i === void 0 ? `` : i,
                c = o === void 0 || o,
                l = y(),
                u;
            t[0] === n ? u = t[1] : (u = ie(n), t[0] = n, t[1] = u);
            let d = u,
                f = d?.infoTooltip ?? n.description,
                p;
            if (t[2] !== d || t[3] !== n || t[4] !== l || t[5] !== s || t[6] !== r || t[7] !== f) {
                let e = fe(r, l.locale),
                    i = s.trim(),
                    o = i ? r.toLowerCase().lastIndexOf(i.toLowerCase()) : -1,
                    c = o >= 0 && o < e && o + i.length > e ? o : e;
                p = (0, K.jsxs)(`span`, {
                    children: [(0, K.jsx)(H, {
                        text: f ? r.slice(0, c) : r,
                        searchQuery: s
                    }), f && (0, K.jsxs)(`span`, {
                        className: `whitespace-nowrap`,
                        children: [(0, K.jsx)(H, {
                            text: r.slice(c),
                            searchQuery: s
                        }), (0, K.jsx)(C, {
                            content: (0, K.jsx)(h, {
                                ...f,
                                values: d ? void 0 : n.descriptionValues
                            }),
                            side: `top-center`,
                            children: e => (0, K.jsx)(`button`, {
                                ...e,
                                type: `button`,
                                "aria-label": l.formatMessage(ye.permissionInfoAriaLabel, {
                                    permission: r
                                }),
                                className: `interactive-button text-token-text-tertiary hover:text-token-text-primary ms-1 inline-flex shrink-0 items-center rounded-sm align-middle`,
                                children: (0, K.jsx)(a, {
                                    "aria-hidden": `true`,
                                    className: `icon-sm`
                                })
                            })
                        })]
                    })]
                }), t[2] = d, t[3] = n, t[4] = l, t[5] = s, t[6] = r, t[7] = f, t[8] = p
            } else p = t[8];
            let m;
            t[9] !== d || t[10] !== c ? (m = c && d?.badge && (0, K.jsx)(`span`, {
                className: `inline-flex h-[18px] shrink-0 items-center justify-center rounded-[6px] bg-[var(--green-a50)] px-[5px] text-xs font-medium text-[light-dark(var(--green-600),var(--green-400))]`,
                children: (0, K.jsx)(h, {
                    ...d.badge
                })
            }), t[9] = d, t[10] = c, t[11] = m) : m = t[11];
            let g;
            return t[12] !== p || t[13] !== m ? (g = (0, K.jsxs)(K.Fragment, {
                children: [p, m]
            }), t[12] = p, t[13] = m, t[14] = g) : g = t[14], g
        }, J = e => {
            "use forget";
            let t = (0, W.c)(32),
                {
                    sectionKey: n,
                    id: r,
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
            t[3] !== d || t[4] !== n ? (v = e => d(n, e), t[3] = d, t[4] = n, t[5] = v) : v = t[5];
            let b;
            t[6] !== m || t[7] !== h || t[8] !== u || t[9] !== _ || t[10] !== v ? (b = (0, K.jsx)(se, {
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
            t[17] === C ? w = t[18] : (w = i(`border-token-border-default gap-4 border-b pb-8 last:border-b-0`, C), t[17] = C, t[18] = w);
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
            return t[24] !== s || t[25] !== c || t[26] !== r || t[27] !== D || t[28] !== S || t[29] !== w || t[30] !== a ? (O = (0, K.jsx)(ee, {
                id: r,
                title: a,
                titleContent: S,
                description: s,
                descriptionValues: c,
                descriptionClassName: `ps-11`,
                className: w,
                children: D
            }), t[24] = s, t[25] = c, t[26] = r, t[27] = D, t[28] = S, t[29] = w, t[30] = a, t[31] = O) : O = t[31], O
        }, ve = e => {
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
                        let i = M(r.permissionName);
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
                    children: [te.map(t => {
                        let n = e.get(t),
                            s = t === `Usage limits` && a != null && a !== !1,
                            u = t === `Chat models` && o != null && o !== !1;
                        if (!n?.length && !s && !u) return null;
                        let m = L[t],
                            h = n?.find(me)?.sourceSection.anchorId,
                            g = n ? [...n].sort(he) : [];
                        return (0, K.jsxs)(J, {
                            sectionKey: t,
                            id: h,
                            title: m.title,
                            titleContent: (0, K.jsx)(`span`, {
                                children: (0, K.jsx)(H, {
                                    text: p.formatMessage(m.title),
                                    searchQuery: d
                                })
                            }),
                            description: (0, K.jsxs)(K.Fragment, {
                                children: [(0, K.jsx)(H, {
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
                                children: (0, K.jsx)(H, {
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
        }, ye = m({
            permissionInfoAriaLabel: {
                id: `chatgpt.admin.permissions.july30.role.permission.info.aria_label`,
                defaultMessage: `More information about {permission}`
            }
        })
    })),
    Y, X, Z, Q, xe, Se, Ce = e((() => {
        u(), w(), D(), l(), g(), Y = m({
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
        }), X = `3150987624`, Z = {
            company_filings: {
                rbac: !0,
                title: S.company_filings,
                description: Y.financeCompanyFilingsAccessDescription,
                permissionName: s.FinDataCompanyFilingsAccess,
                dependsOnPermissionName: s.FinServAccess
            },
            investor_reports: {
                rbac: !0,
                title: S.investor_reports,
                description: Y.financeInvestorReportsAccessDescription,
                permissionName: s.FinDataInvestorReportsAccess,
                dependsOnPermissionName: s.FinServAccess
            },
            earnings_calls: {
                rbac: !0,
                title: S.earnings_calls,
                description: Y.financeEarningsCallsAccessDescription,
                permissionName: s.FinDataEarningsCallsAccess,
                dependsOnPermissionName: s.FinServAccess
            },
            investor_presentations: {
                rbac: !0,
                title: S.investor_presentations,
                description: Y.financeInvestorPresentationsAccessDescription,
                permissionName: s.FinDataInvestorPresentationsAccess,
                dependsOnPermissionName: s.FinServAccess
            },
            financial_metrics: {
                rbac: !0,
                title: S.financial_metrics,
                description: Y.financeFinancialMetricsAccessDescription,
                permissionName: s.FinDataFinancialMetricsAccess,
                dependsOnPermissionName: s.FinServAccess
            },
            market_pricing: {
                rbac: !0,
                title: S.market_pricing,
                description: Y.financeMarketPricingAccessDescription,
                permissionName: s.FinDataMarketPricingAccess,
                dependsOnPermissionName: s.FinServAccess
            },
            private_company_metrics: {
                rbac: !0,
                title: S.private_company_metrics,
                description: Y.financePrivateCompanyMetricsAccessDescription,
                permissionName: s.FinDataPrivateCompanyMetricsAccess,
                dependsOnPermissionName: s.FinServAccess
            },
            news: {
                rbac: !0,
                title: S.news,
                description: Y.financeNewsAccessDescription,
                permissionName: s.FinDataNewsAccess,
                dependsOnPermissionName: s.FinServAccess
            }
        }, Q = () => {
            let e = f(X).get(`categories`, {});
            return typeof e != `object` || !e || Array.isArray(e) ? [] : Object.entries(e).flatMap(([e, t]) => {
                let n = Z[e];
                return !Object.hasOwn(Z, e) || n == null || typeof t != `object` || !t || !(`enabled` in t) || t.enabled !== !0 || !(`workspace_permission` in t) || t.workspace_permission !== n.permissionName ? [] : [{
                    ...n
                }]
            })
        }, xe = () => ({
            title: Y.financeSectionTitle,
            description: Y.financeSectionDescription,
            anchorId: `financial-services-permissions`,
            entries: [{
                rbac: !0,
                title: Y.financeAccessTitle,
                description: Y.financeAccessDescription,
                permissionName: s.FinServAccess,
                permissionNamesToAddWhenEnabled: [O, s.WorkOnlyMode, s.WorkOnlyChatInstant, ...Q().map(e => e.permissionName)],
                permissionNamesToRemoveWhenDisabled: Object.values(Z).map(e => e.permissionName)
            }, ...Q()]
        }), Se = (e, t, n, r) => {
            let i = r.trim().toLowerCase();
            return e?.id === t && e.isOwnerOfAccount() && e.isEnterprisey() && d(`3856252093`) && (i === `` || [`finance`, ...Object.values(Y).map(e => n.formatMessage(e))].join(` `).toLowerCase().includes(i))
        }
    })),
    $, we, Te, Ee = e((() => {
        $ = p(), _(), we = e => (0, $.jsx)(`svg`, {
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
        }), Te = we
    }));
export {
    F as _, Ce as a, _e as c, H as d, U as f, ce as g, le as h, xe as i, ve as l, z as m, Ee as n, Se as o, ue as p, Y as r, J as s, Te as t, be as u
};
//# sourceMappingURL=ceb3cab8-ok3nbc0tvdhu5u6k.js.map
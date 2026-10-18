import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AG as n,
    DG as r,
    FD as i,
    GU as a,
    KU as o,
    My as s,
    PD as c,
    Rb as l,
    b5 as u,
    jy as d,
    y5 as f,
    zb as p
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as m,
    Ln as h,
    Nn as g,
    Rn as _,
    Vn as v,
    wn as y,
    zn as b
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Bst as x,
    QGn as S,
    ZGn as C,
    eg as w,
    fg as T,
    pg as E,
    zst as D
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Go as O,
    Wo as k,
    Yo as A,
    Zo as j
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
var M, N, P = e((() => {
    j(), s(), u(), M = m(), N = ({
        icon: e,
        title: t,
        body: n,
        toggle: r,
        disabled: i = !1,
        disabledPill: a,
        disabledMessage: o,
        children: s,
        showDivider: c = !0
    }) => (0, M.jsx)(d, {
        label: o,
        side: `top`,
        disabled: !i || !o,
        className: `max-w-xl`,
        triggerAs: null,
        children: (0, M.jsxs)(`div`, {
            children: [(0, M.jsxs)(k, {
                className: f(`border-token-border-default mb-3 p-6`, i && `text-token-text-tertiary`),
                children: [(0, M.jsxs)(`div`, {
                    className: `flex items-center justify-between`,
                    children: [(0, M.jsxs)(`div`, {
                        className: `flex items-center gap-2`,
                        children: [e && (0, M.jsx)(e, {
                            className: `icon-sm`
                        }), (0, M.jsxs)(O, {
                            className: `flex items-center gap-3`,
                            children: [t, i && a && (0, M.jsx)(`span`, {
                                className: `bg-token-main-surface-tertiary rounded-xl px-2 pb-0.5 text-sm`,
                                children: a
                            })]
                        })]
                    }), (0, M.jsx)(`div`, {
                        children: r
                    })]
                }), (0, M.jsx)(A, {
                    children: n
                }), s && (0, M.jsx)(`div`, {
                    className: `mt-4`,
                    children: s
                })]
            }), c && (0, M.jsx)(`div`, {
                className: `border-token-border-default mt-6 border border-t`
            })]
        })
    })
}));

function F(e) {
    "use forget";
    let t = (0, I.c)(48),
        {
            workspaceId: r,
            showAutoAcceptRequests: o
        } = e,
        s = b(),
        {
            data: c,
            isPending: u
        } = n(r),
        {
            mutateAsync: d,
            isPending: p
        } = E(r),
        {
            mutateAsync: m,
            isPending: h
        } = T(r),
        _ = !!c?.workspace_discoverable,
        v = c?.auto_accept_requests === !0,
        y = c?.use_workspace_name_for_discovery === !0,
        x = y ? `` : c?.public_display_name ?? ``,
        S = i(),
        [w, O] = L.useState(``),
        [k, A] = L.useState(!1),
        j = c?.support_workspace_discovery === !1;
    if (j && !_) return null;
    let M = k ? w : x,
        P;
    t[0] === w ? P = t[1] : (P = w.trim(), t[0] = w, t[1] = P);
    let F = P,
        z;
    t[2] !== x || t[3] !== k || t[4] !== F ? (z = !k || F === x.trim(), t[2] = x, t[3] = k, t[4] = F, t[5] = z) : z = t[5];
    let V = z,
        H = u,
        U = H || p || h,
        W = H || h || j && !v,
        G;
    t[6] !== x || t[7] !== w || t[8] !== k || t[9] !== p || t[10] !== y ? (G = !p && !y && (k ? w.trim() !== `` : x.trim() !== ``), t[6] = x, t[7] = w, t[8] = k, t[9] = p, t[10] = y, t[11] = G) : G = t[11];
    let K = G,
        q;
    t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (q = (0, R.jsx)(g, {
        ...B.discoveryTitle
    }), t[12] = q) : q = t[12];
    let J;
    t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (J = (0, R.jsx)(`span`, {
        className: `text-token-text-secondary`,
        children: (0, R.jsx)(g, {
            ...B.discoveryBody
        })
    }), t[13] = J) : J = t[13];
    let Y;
    t[14] !== x || t[15] !== y || t[16] !== d ? (Y = async e => {
        await d({
            value: e,
            public_display_name: x === `` ? null : x,
            use_workspace_name_for_discovery: y,
            action: `toggle`
        }), e || A(!1)
    }, t[14] = x, t[15] = y, t[16] = d, t[17] = Y) : Y = t[17];
    let X;
    t[18] === s ? X = t[19] : (X = s.formatMessage(B.discoveryToggleLabel), t[18] = s, t[19] = X);
    let Z;
    t[20] !== U || t[21] !== Y || t[22] !== X || t[23] !== _ ? (Z = (0, R.jsx)(l, {
        disabled: U,
        checked: _,
        onCheckedChange: Y,
        "aria-label": X
    }), t[20] = U, t[21] = Y, t[22] = X, t[23] = _, t[24] = Z) : Z = t[24];
    let Q;
    t[25] !== v || t[26] !== x || t[27] !== M || t[28] !== s || t[29] !== p || t[30] !== W || t[31] !== V || t[32] !== U || t[33] !== y || t[34] !== m || t[35] !== d || t[36] !== c?.unified_workspace_name || t[37] !== o || t[38] !== K || t[39] !== F || t[40] !== j || t[41] !== _ || t[42] !== S ? (Q = _ && (0, R.jsxs)(R.Fragment, {
        children: [o && (0, R.jsxs)(R.Fragment, {
            children: [(0, R.jsxs)(`div`, {
                className: `flex items-center justify-between`,
                children: [(0, R.jsx)(`div`, {
                    className: `text-token-text-primary text-base font-semibold`,
                    children: (0, R.jsx)(g, {
                        ...B.autoAcceptLabel
                    })
                }), (0, R.jsx)(l, {
                    disabled: W,
                    checked: v,
                    onCheckedChange: async e => {
                        await m({
                            autoAcceptRequests: e
                        })
                    },
                    "aria-label": s.formatMessage(B.autoAcceptToggleLabel)
                })]
            }), (0, R.jsx)(`div`, {
                className: `text-token-text-secondary mb-4 text-xs`,
                children: (0, R.jsx)(g, {
                    ...B.autoAcceptHelp
                })
            })]
        }), (0, R.jsxs)(`fieldset`, {
            hidden: c?.unified_workspace_name,
            disabled: j,
            className: `w-full`,
            children: [(0, R.jsx)(`label`, {
                htmlFor: `public_display_name`,
                id: `workspace-discoverability-display-name`,
                className: `text-token-text-primary mb-1 block scroll-mt-24 text-base font-semibold`,
                children: (0, R.jsx)(g, {
                    ...B.publicDisplayNameLabel
                })
            }), (0, R.jsx)(`div`, {
                className: `text-token-text-secondary mb-2 text-sm`,
                children: (0, R.jsx)(g, {
                    ...B.publicDisplayNameHelp,
                    values: {
                        workspaceName: S
                    }
                })
            }), (0, R.jsx)(`div`, {
                className: `mb-2`,
                children: (0, R.jsx)(C, {
                    id: `use-workspace-name-for-discovery`,
                    checked: y,
                    disabled: U,
                    onChange: async e => {
                        let t = e.currentTarget.checked;
                        await d({
                            value: _,
                            public_display_name: t ? null : x || null,
                            use_workspace_name_for_discovery: t,
                            action: `name`
                        }), t && A(!1)
                    },
                    label: (0, R.jsx)(`span`, {
                        className: `text-sm`,
                        children: (0, R.jsx)(g, {
                            ...B.workspaceNameSameAsCheckbox
                        })
                    })
                })
            }), !y && (0, R.jsxs)(R.Fragment, {
                children: [(0, R.jsx)(D, {
                    name: `public_display_name`,
                    ariaLabel: !1,
                    placeholder: S,
                    maxLength: 128,
                    value: M,
                    onChange: e => {
                        O(e.target.value), A(!0)
                    },
                    insideContainerChildren: K ? (0, R.jsx)(`button`, {
                        type: `button`,
                        className: `text-token-text-tertiary hover:text-token-text-secondary absolute end-0 top-1/2 -translate-y-1/2 pe-1`,
                        "aria-label": s.formatMessage(B.clearToWorkspaceNameAria),
                        onClick: () => {
                            O(``), A(!0)
                        },
                        children: (0, R.jsx)(a, {
                            className: `icon-sm`
                        })
                    }) : null
                }), (0, R.jsx)(`div`, {
                    className: `mt-2 flex justify-end`,
                    children: (0, R.jsx)(`div`, {
                        className: `flex items-center gap-2`,
                        children: (0, R.jsx)(`button`, {
                            className: f(`disabled:pointer-events-none disabled:cursor-auto disabled:hover:bg-transparent`, p || V ? `btn btn-secondary` : `btn btn-primary`),
                            disabled: p || V,
                            "aria-busy": p || void 0,
                            onClick: async () => {
                                if (p || V) return;
                                let e = F === `` ? null : F;
                                await d({
                                    value: _,
                                    public_display_name: e,
                                    use_workspace_name_for_discovery: e == null,
                                    action: `name`
                                }), A(!1)
                            },
                            children: (0, R.jsx)(g, {
                                ...B.saveDisplayNameCta
                            })
                        })
                    })
                })]
            })]
        })]
    }), t[25] = v, t[26] = x, t[27] = M, t[28] = s, t[29] = p, t[30] = W, t[31] = V, t[32] = U, t[33] = y, t[34] = m, t[35] = d, t[36] = c?.unified_workspace_name, t[37] = o, t[38] = K, t[39] = F, t[40] = j, t[41] = _, t[42] = S, t[43] = Q) : Q = t[43];
    let $;
    return t[44] !== H || t[45] !== Z || t[46] !== Q ? ($ = (0, R.jsx)(N, {
        title: q,
        body: J,
        toggle: Z,
        disabled: H,
        children: Q
    }), t[44] = H, t[45] = Z, t[46] = Q, t[47] = $) : $ = t[47], $
}
var I, L, R, z, B, V = e((() => {
    I = y(), c(), S(), o(), p(), x(), r(), u(), L = t(v()), _(), P(), w(), R = m(), z = `workspace-discoverability-display-name`, B = h({
        discoveryTitle: {
            id: `workspaceIdentity.discoveryTitle`,
            defaultMessage: `Enable workspace discovery`
        },
        discoveryBody: {
            id: `workspaceIdentity.discoveryBody.organizationDomains`,
            defaultMessage: `Allow people with your organization's email domains to find and request to join this workspace.`
        },
        discoveryToggleLabel: {
            id: `workspaceIdentity.discoveryToggleLabel`,
            defaultMessage: `Enable workspace discovery`
        },
        publicDisplayNameLabel: {
            id: `workspaceIdentity.publicDisplayNameLabel`,
            defaultMessage: `Discoverable name`
        },
        autoAcceptLabel: {
            id: `workspaceIdentity.autoAcceptLabel`,
            defaultMessage: `Automatically accept join requests`
        },
        autoAcceptToggleLabel: {
            id: `workspaceIdentity.autoAcceptToggleLabel`,
            defaultMessage: `Toggle automatic acceptance of join requests`
        },
        autoAcceptHelp: {
            id: `workspaceIdentity.autoAcceptHelp`,
            defaultMessage: `When on, users who request to join your workspace are added automatically. Each new member is billed as a seat.`
        },
        saveDisplayNameCta: {
            id: `workspaceIdentity.saveDisplayNameCta`,
            defaultMessage: `Save`
        },
        publicDisplayNameHelp: {
            id: `workspaceIdentity.publicDisplayNameHelp`,
            defaultMessage: `This is what users will see when they request access to this workspace.`
        },
        clearToWorkspaceNameAria: {
            id: `workspaceIdentity.clearToWorkspaceNameAria`,
            defaultMessage: `Clear and use workspace name`
        },
        workspaceNameSameAsCheckbox: {
            id: `workspaceIdentity.workspaceNameSameAsCheckbox`,
            defaultMessage: `Same as workspace name`
        }
    })
}));
export {
    P as a, N as i, z as n, V as r, F as t
};
//# sourceMappingURL=ff3e4ba2-mo1ehpn5jn36p6h3.js.map
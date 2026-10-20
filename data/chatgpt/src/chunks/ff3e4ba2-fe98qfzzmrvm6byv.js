import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $D as n,
    $G as r,
    J5 as i,
    QD as a,
    Xy as o,
    Yy as s,
    _W as c,
    nK as l,
    nx as u,
    q5 as d,
    rx as f,
    vW as p
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as m,
    Hn as h,
    Pn as g,
    Rn as _,
    Tn as v,
    Vn as y,
    zn as b
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    Hst as x,
    Vst as S,
    dKn as C,
    eg as w,
    fKn as T,
    fg as E,
    pg as D
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    $o as O,
    Ko as k,
    Zo as A,
    qo as j
} from "./c2675c8c-nxl2ic2ofk2vw70s.js";
var M, N, P = e((() => {
    O(), o(), i(), M = y(), N = ({
        icon: e,
        title: t,
        body: n,
        toggle: r,
        disabled: i = !1,
        disabledPill: a,
        disabledMessage: o,
        children: c,
        showDivider: l = !0
    }) => (0, M.jsx)(s, {
        label: o,
        side: `top`,
        disabled: !i || !o,
        className: `max-w-xl`,
        triggerAs: null,
        children: (0, M.jsxs)(`div`, {
            children: [(0, M.jsxs)(k, {
                className: d(`border-token-border-default mb-3 p-6`, i && `text-token-text-tertiary`),
                children: [(0, M.jsxs)(`div`, {
                    className: `flex items-center justify-between`,
                    children: [(0, M.jsxs)(`div`, {
                        className: `flex items-center gap-2`,
                        children: [e && (0, M.jsx)(e, {
                            className: `icon-sm`
                        }), (0, M.jsxs)(j, {
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
                }), c && (0, M.jsx)(`div`, {
                    className: `mt-4`,
                    children: c
                })]
            }), l && (0, M.jsx)(`div`, {
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
            showAutoAcceptRequests: i
        } = e,
        a = m(),
        {
            data: o,
            isPending: s
        } = l(r),
        {
            mutateAsync: f,
            isPending: p
        } = D(r),
        {
            mutateAsync: h,
            isPending: _
        } = E(r),
        v = !!o?.workspace_discoverable,
        y = o?.auto_accept_requests === !0,
        b = o?.use_workspace_name_for_discovery === !0,
        x = b ? `` : o?.public_display_name ?? ``,
        w = n(),
        [T, O] = L.useState(``),
        [k, A] = L.useState(!1),
        j = o?.support_workspace_discovery === !1;
    if (j && !v) return null;
    let M = k ? T : x,
        P;
    t[0] === T ? P = t[1] : (P = T.trim(), t[0] = T, t[1] = P);
    let F = P,
        z;
    t[2] !== x || t[3] !== k || t[4] !== F ? (z = !k || F === x.trim(), t[2] = x, t[3] = k, t[4] = F, t[5] = z) : z = t[5];
    let V = z,
        H = s,
        U = H || p || _,
        W = H || _ || j && !y,
        G;
    t[6] !== x || t[7] !== T || t[8] !== k || t[9] !== p || t[10] !== b ? (G = !p && !b && (k ? T.trim() !== `` : x.trim() !== ``), t[6] = x, t[7] = T, t[8] = k, t[9] = p, t[10] = b, t[11] = G) : G = t[11];
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
    t[14] !== x || t[15] !== b || t[16] !== f ? (Y = async e => {
        await f({
            value: e,
            public_display_name: x === `` ? null : x,
            use_workspace_name_for_discovery: b,
            action: `toggle`
        }), e || A(!1)
    }, t[14] = x, t[15] = b, t[16] = f, t[17] = Y) : Y = t[17];
    let X;
    t[18] === a ? X = t[19] : (X = a.formatMessage(B.discoveryToggleLabel), t[18] = a, t[19] = X);
    let Z;
    t[20] !== U || t[21] !== Y || t[22] !== X || t[23] !== v ? (Z = (0, R.jsx)(u, {
        disabled: U,
        checked: v,
        onCheckedChange: Y,
        "aria-label": X
    }), t[20] = U, t[21] = Y, t[22] = X, t[23] = v, t[24] = Z) : Z = t[24];
    let Q;
    t[25] !== y || t[26] !== x || t[27] !== M || t[28] !== a || t[29] !== p || t[30] !== W || t[31] !== V || t[32] !== U || t[33] !== b || t[34] !== h || t[35] !== f || t[36] !== o?.unified_workspace_name || t[37] !== i || t[38] !== K || t[39] !== F || t[40] !== j || t[41] !== v || t[42] !== w ? (Q = v && (0, R.jsxs)(R.Fragment, {
        children: [i && (0, R.jsxs)(R.Fragment, {
            children: [(0, R.jsxs)(`div`, {
                className: `flex items-center justify-between`,
                children: [(0, R.jsx)(`div`, {
                    className: `text-token-text-primary text-base font-semibold`,
                    children: (0, R.jsx)(g, {
                        ...B.autoAcceptLabel
                    })
                }), (0, R.jsx)(u, {
                    disabled: W,
                    checked: y,
                    onCheckedChange: async e => {
                        await h({
                            autoAcceptRequests: e
                        })
                    },
                    "aria-label": a.formatMessage(B.autoAcceptToggleLabel)
                })]
            }), (0, R.jsx)(`div`, {
                className: `text-token-text-secondary mb-4 text-xs`,
                children: (0, R.jsx)(g, {
                    ...B.autoAcceptHelp
                })
            })]
        }), (0, R.jsxs)(`fieldset`, {
            hidden: o?.unified_workspace_name,
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
                        workspaceName: w
                    }
                })
            }), (0, R.jsx)(`div`, {
                className: `mb-2`,
                children: (0, R.jsx)(C, {
                    id: `use-workspace-name-for-discovery`,
                    checked: b,
                    disabled: U,
                    onChange: async e => {
                        let t = e.currentTarget.checked;
                        await f({
                            value: v,
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
            }), !b && (0, R.jsxs)(R.Fragment, {
                children: [(0, R.jsx)(S, {
                    name: `public_display_name`,
                    ariaLabel: !1,
                    placeholder: w,
                    maxLength: 128,
                    value: M,
                    onChange: e => {
                        O(e.target.value), A(!0)
                    },
                    insideContainerChildren: K ? (0, R.jsx)(`button`, {
                        type: `button`,
                        className: `text-token-text-tertiary hover:text-token-text-secondary absolute end-0 top-1/2 -translate-y-1/2 pe-1`,
                        "aria-label": a.formatMessage(B.clearToWorkspaceNameAria),
                        onClick: () => {
                            O(``), A(!0)
                        },
                        children: (0, R.jsx)(c, {
                            className: `icon-sm`
                        })
                    }) : null
                }), (0, R.jsx)(`div`, {
                    className: `mt-2 flex justify-end`,
                    children: (0, R.jsx)(`div`, {
                        className: `flex items-center gap-2`,
                        children: (0, R.jsx)(`button`, {
                            className: d(`disabled:pointer-events-none disabled:cursor-auto disabled:hover:bg-transparent`, p || V ? `btn btn-secondary` : `btn btn-primary`),
                            disabled: p || V,
                            "aria-busy": p || void 0,
                            onClick: async () => {
                                if (p || V) return;
                                let e = F === `` ? null : F;
                                await f({
                                    value: v,
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
    }), t[25] = y, t[26] = x, t[27] = M, t[28] = a, t[29] = p, t[30] = W, t[31] = V, t[32] = U, t[33] = b, t[34] = h, t[35] = f, t[36] = o?.unified_workspace_name, t[37] = i, t[38] = K, t[39] = F, t[40] = j, t[41] = v, t[42] = w, t[43] = Q) : Q = t[43];
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
    I = v(), a(), T(), p(), f(), x(), r(), i(), L = t(h()), b(), P(), w(), R = y(), z = `workspace-discoverability-display-name`, B = _({
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
//# sourceMappingURL=ff3e4ba2-fe98qfzzmrvm6byv.js.map
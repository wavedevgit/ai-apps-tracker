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
    Y5 as s,
    Zy as c,
    _W as l,
    ix as u,
    nK as d,
    rx as f,
    vW as p
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as m,
    Ln as h,
    Nn as g,
    Rn as _,
    Vn as v,
    wn as y,
    zn as b
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Ust as x,
    Wst as S,
    eg as C,
    fg as w,
    oKn as T,
    pg as E,
    sKn as D
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    $o as O,
    Ko as k,
    Zo as A,
    qo as j
} from "./c2675c8c-9bs3zsr3vq259es7.js";
var M, N, P = e((() => {
    O(), c(), s(), M = m(), N = ({
        icon: e,
        title: t,
        body: n,
        toggle: r,
        disabled: a = !1,
        disabledPill: s,
        disabledMessage: c,
        children: l,
        showDivider: u = !0
    }) => (0, M.jsx)(o, {
        label: c,
        side: `top`,
        disabled: !a || !c,
        className: `max-w-xl`,
        triggerAs: null,
        children: (0, M.jsxs)(`div`, {
            children: [(0, M.jsxs)(k, {
                className: i(`border-token-border-default mb-3 p-6`, a && `text-token-text-tertiary`),
                children: [(0, M.jsxs)(`div`, {
                    className: `flex items-center justify-between`,
                    children: [(0, M.jsxs)(`div`, {
                        className: `flex items-center gap-2`,
                        children: [e && (0, M.jsx)(e, {
                            className: `icon-sm`
                        }), (0, M.jsxs)(j, {
                            className: `flex items-center gap-3`,
                            children: [t, a && s && (0, M.jsx)(`span`, {
                                className: `bg-token-main-surface-tertiary rounded-xl px-2 pb-0.5 text-sm`,
                                children: s
                            })]
                        })]
                    }), (0, M.jsx)(`div`, {
                        children: r
                    })]
                }), (0, M.jsx)(A, {
                    children: n
                }), l && (0, M.jsx)(`div`, {
                    className: `mt-4`,
                    children: l
                })]
            }), u && (0, M.jsx)(`div`, {
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
            showAutoAcceptRequests: a
        } = e,
        o = b(),
        {
            data: s,
            isPending: c
        } = d(r),
        {
            mutateAsync: u,
            isPending: p
        } = E(r),
        {
            mutateAsync: m,
            isPending: h
        } = w(r),
        _ = !!s?.workspace_discoverable,
        v = s?.auto_accept_requests === !0,
        y = s?.use_workspace_name_for_discovery === !0,
        S = y ? `` : s?.public_display_name ?? ``,
        C = n(),
        [D, O] = L.useState(``),
        [k, A] = L.useState(!1),
        j = s?.support_workspace_discovery === !1;
    if (j && !_) return null;
    let M = k ? D : S,
        P;
    t[0] === D ? P = t[1] : (P = D.trim(), t[0] = D, t[1] = P);
    let F = P,
        z;
    t[2] !== S || t[3] !== k || t[4] !== F ? (z = !k || F === S.trim(), t[2] = S, t[3] = k, t[4] = F, t[5] = z) : z = t[5];
    let V = z,
        H = c,
        U = H || p || h,
        W = H || h || j && !v,
        G;
    t[6] !== S || t[7] !== D || t[8] !== k || t[9] !== p || t[10] !== y ? (G = !p && !y && (k ? D.trim() !== `` : S.trim() !== ``), t[6] = S, t[7] = D, t[8] = k, t[9] = p, t[10] = y, t[11] = G) : G = t[11];
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
    t[14] !== S || t[15] !== y || t[16] !== u ? (Y = async e => {
        await u({
            value: e,
            public_display_name: S === `` ? null : S,
            use_workspace_name_for_discovery: y,
            action: `toggle`
        }), e || A(!1)
    }, t[14] = S, t[15] = y, t[16] = u, t[17] = Y) : Y = t[17];
    let X;
    t[18] === o ? X = t[19] : (X = o.formatMessage(B.discoveryToggleLabel), t[18] = o, t[19] = X);
    let Z;
    t[20] !== U || t[21] !== Y || t[22] !== X || t[23] !== _ ? (Z = (0, R.jsx)(f, {
        disabled: U,
        checked: _,
        onCheckedChange: Y,
        "aria-label": X
    }), t[20] = U, t[21] = Y, t[22] = X, t[23] = _, t[24] = Z) : Z = t[24];
    let Q;
    t[25] !== v || t[26] !== S || t[27] !== M || t[28] !== o || t[29] !== p || t[30] !== W || t[31] !== V || t[32] !== U || t[33] !== y || t[34] !== m || t[35] !== u || t[36] !== s?.unified_workspace_name || t[37] !== a || t[38] !== K || t[39] !== F || t[40] !== j || t[41] !== _ || t[42] !== C ? (Q = _ && (0, R.jsxs)(R.Fragment, {
        children: [a && (0, R.jsxs)(R.Fragment, {
            children: [(0, R.jsxs)(`div`, {
                className: `flex items-center justify-between`,
                children: [(0, R.jsx)(`div`, {
                    className: `text-token-text-primary text-base font-semibold`,
                    children: (0, R.jsx)(g, {
                        ...B.autoAcceptLabel
                    })
                }), (0, R.jsx)(f, {
                    disabled: W,
                    checked: v,
                    onCheckedChange: async e => {
                        await m({
                            autoAcceptRequests: e
                        })
                    },
                    "aria-label": o.formatMessage(B.autoAcceptToggleLabel)
                })]
            }), (0, R.jsx)(`div`, {
                className: `text-token-text-secondary mb-4 text-xs`,
                children: (0, R.jsx)(g, {
                    ...B.autoAcceptHelp
                })
            })]
        }), (0, R.jsxs)(`fieldset`, {
            hidden: s?.unified_workspace_name,
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
                        workspaceName: C
                    }
                })
            }), (0, R.jsx)(`div`, {
                className: `mb-2`,
                children: (0, R.jsx)(T, {
                    id: `use-workspace-name-for-discovery`,
                    checked: y,
                    disabled: U,
                    onChange: async e => {
                        let t = e.currentTarget.checked;
                        await u({
                            value: _,
                            public_display_name: t ? null : S || null,
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
                children: [(0, R.jsx)(x, {
                    name: `public_display_name`,
                    ariaLabel: !1,
                    placeholder: C,
                    maxLength: 128,
                    value: M,
                    onChange: e => {
                        O(e.target.value), A(!0)
                    },
                    insideContainerChildren: K ? (0, R.jsx)(`button`, {
                        type: `button`,
                        className: `text-token-text-tertiary hover:text-token-text-secondary absolute end-0 top-1/2 -translate-y-1/2 pe-1`,
                        "aria-label": o.formatMessage(B.clearToWorkspaceNameAria),
                        onClick: () => {
                            O(``), A(!0)
                        },
                        children: (0, R.jsx)(l, {
                            className: `icon-sm`
                        })
                    }) : null
                }), (0, R.jsx)(`div`, {
                    className: `mt-2 flex justify-end`,
                    children: (0, R.jsx)(`div`, {
                        className: `flex items-center gap-2`,
                        children: (0, R.jsx)(`button`, {
                            className: i(`disabled:pointer-events-none disabled:cursor-auto disabled:hover:bg-transparent`, p || V ? `btn btn-secondary` : `btn btn-primary`),
                            disabled: p || V,
                            "aria-busy": p || void 0,
                            onClick: async () => {
                                if (p || V) return;
                                let e = F === `` ? null : F;
                                await u({
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
    }), t[25] = v, t[26] = S, t[27] = M, t[28] = o, t[29] = p, t[30] = W, t[31] = V, t[32] = U, t[33] = y, t[34] = m, t[35] = u, t[36] = s?.unified_workspace_name, t[37] = a, t[38] = K, t[39] = F, t[40] = j, t[41] = _, t[42] = C, t[43] = Q) : Q = t[43];
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
    I = y(), a(), D(), p(), u(), S(), r(), s(), L = t(v()), _(), P(), C(), R = m(), z = `workspace-discoverability-display-name`, B = h({
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
//# sourceMappingURL=ff3e4ba2-od7gk345dqv2sqah.js.map
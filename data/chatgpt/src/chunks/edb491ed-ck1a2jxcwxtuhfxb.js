import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Az as n,
    JT as r,
    Sw as i,
    cK as a,
    jz as o,
    lK as s,
    nx as c,
    qT as l,
    rx as u,
    ww as d
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as f,
    Hn as p,
    Pn as m,
    Rn as h,
    Vn as g,
    zn as _
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    CC as v,
    SC as y,
    hC as b,
    mC as x
} from "./30901919-jory365vq6ym5crx.js";
import {
    s as S,
    t as C
} from "./4ed85438-hz4bre3zbg5z2llh.js";
import {
    A as w,
    C as T
} from "./b90db9d2-dq7o1nq7z944qy0j.js";

function E({
    sections: e,
    role: t,
    showCompletePermissionRows: n = !1,
    showDisabledDependencies: r = !1
}) {
    let i = e.find(e => e.entries.some(e => e.permissionName === C));
    if (!i) return e;
    let o = i.entries.find(e => e.permissionName === C);
    if (!o) return e;
    let s = e.flatMap(e => e.entries).find(e => e.permissionName === a.FloraLocalAccess);
    if (!s) return e;
    let c = {
            ...o,
            permissionName: T,
            dependsOnPermissionName: void 0,
            additionalPermissionNames: void 0
        },
        l = {
            ...s,
            permissionName: a.FloraLocalAccess,
            dependsOnPermissionName: void 0,
            additionalPermissionNames: void 0
        },
        u = D(t.permissions),
        d = t.permissions.includes(C);
    return e.map(e => {
        if (e !== i) return {
            ...e,
            entries: e.entries.filter(e => e.permissionName !== a.FloraLocalAccess)
        };
        let t = e.entries.filter(e => e.permissionName !== `chatgpt.workspace.feature.flora.access` && e.permissionName !== a.FloraLocalAccess && (r && e.showWhenParentDisabled || n || e.dependsOnPermissionName !== `chatgpt.workspace.feature.flora.access` || d)),
            s = t.some(e => r && e.showWhenParentDisabled),
            f = s ? {
                ...o,
                showWhenParentDisabled: !0
            } : o;
        return {
            ...e,
            entries: n || u || s ? [c, l, f, ...t] : [c]
        }
    }).filter(e => e.entries.length > 0)
}
var D, O = e((() => {
        s(), w(), S(), D = e => e.includes(a.FloraLocalAccess) || e.includes(`chatgpt.workspace.feature.flora.access`)
    })),
    k, A, j, M, N, P = e((() => {
        r(), v(), x(), d(), u(), o(), k = t(p()), _(), A = g(), j = `text-token-link hover:text-token-link-hover underline`, M = ({
            onClose: e,
            onSave: t,
            isCreate: r,
            defaultData: a,
            rootClassName: o
        }) => {
            "use no forget";
            let s = f(),
                [u, d] = (0, k.useState)(a?.name || ``),
                [p, h] = (0, k.useState)(a?.description || ``),
                [g, _] = (0, k.useState)(``),
                [v, x] = (0, k.useState)(!1),
                [S, C] = (0, k.useState)(!1),
                [w, T] = (0, k.useState)(a?.metadata?.lockdown_mode ?? !1),
                E = async () => {
                    if (!u.trim()) {
                        _(s.formatMessage(N.roleNameError));
                        return
                    }
                    x(!0);
                    try {
                        let n = {
                            name: u,
                            description: p,
                            metadata: {}
                        };
                        r && (n.metadata = {
                            lockdown_mode: w
                        }), await t(n), e()
                    } catch {} finally {
                        x(!1)
                    }
                };
            return (0, A.jsx)(i, {
                testId: `modal-upsert-role`,
                size: `custom`,
                rootClassName: o,
                className: `max-w-lg text-sm`,
                isOpen: !0,
                onClose: e,
                showCloseButton: !0,
                type: `success`,
                title: s.formatMessage(r ? N.createRoleTitle : N.editRoleTitle),
                primaryButton: (0, A.jsx)(l, {
                    color: `primary`,
                    onClick: () => E(),
                    loading: v,
                    children: s.formatMessage(r && v ? N.buttonCreatingRoleLabel : N.buttonSaveLabel)
                }),
                secondaryButton: (0, A.jsx)(l, {
                    onClick: e,
                    color: `secondary`,
                    children: s.formatMessage(N.buttonCancelLabel)
                }),
                children: (0, A.jsxs)(`form`, {
                    className: `flex flex-col gap-6`,
                    children: [(0, A.jsxs)(`label`, {
                        className: `block`,
                        children: [(0, A.jsx)(`span`, {
                            className: `text-sm font-medium`,
                            children: s.formatMessage(N.roleNameLabel)
                        }), (0, A.jsx)(`input`, {
                            type: `text`,
                            className: `border-token-border-primary text-token-text-primary focus:border-token-brand focus:ring-token-brand bg-token-bg-primary mt-1 block w-full rounded-md border px-3 py-2 text-sm ${g?`border-token-text-status-error`:``}`,
                            placeholder: s.formatMessage(N.roleNameLabel),
                            value: u,
                            onChange: e => {
                                d(e.target.value), _(``)
                            }
                        }), g && (0, A.jsx)(`span`, {
                            className: `text-token-text-status-error mt-1 text-xs`,
                            children: g
                        })]
                    }), (0, A.jsxs)(`label`, {
                        className: `block`,
                        children: [(0, A.jsx)(`span`, {
                            className: `text-sm font-medium`,
                            children: s.formatMessage(N.descriptionLabel)
                        }), (0, A.jsx)(`span`, {
                            className: `text-token-text-tertiary ms-1 text-sm font-medium`,
                            children: s.formatMessage(N.optionalLabel)
                        }), (0, A.jsx)(`input`, {
                            type: `text`,
                            className: `border-token-border-primary text-token-text-primary focus:border-token-brand focus:ring-token-brand bg-token-bg-primary mt-1 block w-full rounded-md border px-3 py-2 text-sm`,
                            placeholder: s.formatMessage(N.descriptionLabel),
                            value: p,
                            onChange: e => h(e.target.value)
                        })]
                    }), r && (0, A.jsxs)(`div`, {
                        className: `flex flex-col gap-3`,
                        children: [(0, A.jsxs)(`button`, {
                            type: `button`,
                            className: `interactive-button text-token-text-primary flex w-fit items-center gap-0.5 text-sm font-medium`,
                            "aria-expanded": S,
                            "aria-controls": `role-advanced-options`,
                            onClick: () => C(e => !e),
                            children: [(0, A.jsx)(y, {
                                "aria-hidden": !0,
                                className: `icon shrink-0 transition-transform ${S?`rotate-90`:``}`
                            }), (0, A.jsx)(m, {
                                ...N.advancedOptions
                            })]
                        }), S && (0, A.jsxs)(`div`, {
                            id: `role-advanced-options`,
                            className: `flex w-full items-center justify-between gap-4 ps-[22px]`,
                            children: [(0, A.jsxs)(`div`, {
                                children: [(0, A.jsx)(`div`, {
                                    className: `text-sm font-medium`,
                                    children: s.formatMessage(N.sandboxModeLabel)
                                }), (0, A.jsx)(`div`, {
                                    className: `text-token-text-tertiary text-[13px] leading-[18px]`,
                                    children: s.formatMessage(N.sandboxModeDescription, {
                                        link: e => (0, A.jsx)(`a`, {
                                            className: j,
                                            href: `https://help.openai.com/articles/20001061`,
                                            target: `_blank`,
                                            rel: `noreferrer`,
                                            children: e
                                        })
                                    })
                                })]
                            }), (0, A.jsx)(c, {
                                size: `normal`,
                                "aria-label": s.formatMessage(N.sandboxModeAriaLabel),
                                checked: w,
                                onCheckedChange: e => T(e)
                            })]
                        })]
                    }), (0, A.jsxs)(`div`, {
                        className: `bg-token-bg-tertiary text-token-text-primary mb-1 flex w-full flex-row gap-4 rounded-xl p-4`,
                        children: [(0, A.jsx)(b, {
                            className: `icon`
                        }), (0, A.jsxs)(`div`, {
                            children: [(0, A.jsx)(`div`, {
                                className: `text-sm font-medium`,
                                children: s.formatMessage(N.infomationTitle)
                            }), (0, A.jsx)(`div`, {
                                className: `text-token-text-secondary`,
                                children: s.formatMessage(N.informationText)
                            })]
                        })]
                    }), r && v && (0, A.jsxs)(`div`, {
                        className: `text-token-text-primary flex items-center gap-2 text-sm font-medium`,
                        "aria-live": `polite`,
                        children: [(0, A.jsx)(n, {
                            className: `icon-sm shrink-0`,
                            "aria-hidden": !0
                        }), s.formatMessage(N.createRoleLoadingNote)]
                    })]
                })
            })
        }, N = h({
            createRoleTitle: {
                id: `xmlnWv`,
                defaultMessage: `New custom role`
            },
            editRoleTitle: {
                id: `6A6tgB`,
                defaultMessage: `Edit custom role`
            },
            roleNameLabel: {
                id: `VGBBHP`,
                defaultMessage: `Role name`
            },
            optionalLabel: {
                id: `KR/EbO`,
                defaultMessage: `(optional)`
            },
            descriptionLabel: {
                id: `BnuWZw`,
                defaultMessage: `Description`
            },
            infomationTitle: {
                id: `L1pBDh`,
                defaultMessage: `What's a custom role?`
            },
            informationText: {
                id: `DvDdnE`,
                defaultMessage: `Roles are a great way to control which features a user can access. When assigned, the user’s permissions will be calculated as the sum of their custom roles.`
            },
            buttonCancelLabel: {
                id: `rMxszm`,
                defaultMessage: `Cancel`
            },
            buttonSaveLabel: {
                id: `JELOdt`,
                defaultMessage: `Save`
            },
            buttonCreatingRoleLabel: {
                id: `workspaceSettings.roles.creatingRole`,
                defaultMessage: `Creating role...`
            },
            roleNameError: {
                id: `iyN7K7`,
                defaultMessage: `Role name is required`
            },
            createRoleLoadingNote: {
                id: `workspaceSettings.roles.createRoleLoadingNote`,
                defaultMessage: `Hang tight, this may take a few moments. Please keep this window open while we finish up.`
            },
            advancedOptions: {
                id: `workspaceSettings.roles.advancedOptions.label`,
                defaultMessage: `Advanced options`
            },
            sandboxModeLabel: {
                id: `atXUfW`,
                defaultMessage: `Lockdown mode`
            },
            sandboxModeDescription: {
                id: `workspaceSettings.roles.lockdownMode.description`,
                defaultMessage: `Limit access to the web and connected services to reduce the risk of data exposure from prompt injection. <link>Learn more</link>`
            },
            sandboxModeAriaLabel: {
                id: `/crY+k`,
                defaultMessage: `Toggle Lockdown mode`
            }
        })
    }));
export {
    D as a, O as i, P as n, E as r, M as t
};
//# sourceMappingURL=edb491ed-ck1a2jxcwxtuhfxb.js.map
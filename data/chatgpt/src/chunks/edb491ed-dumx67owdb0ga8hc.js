import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as n,
    IG as r,
    LG as i,
    Rb as a,
    dz as o,
    fz as s,
    iw as c,
    kT as l,
    ow as u,
    zb as d
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as f,
    Ln as p,
    Nn as m,
    Rn as h,
    Vn as g,
    zn as _
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    CC as v,
    SC as y,
    hC as b,
    mC as x
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    s as S,
    t as C
} from "./4ed85438-j32h7byl3jel8uhr.js";
import {
    A as w,
    C as T
} from "./b90db9d2-nqn5x1xpx8jm45ix.js";

function E({
    sections: e,
    role: t,
    showCompletePermissionRows: n = !1,
    showDisabledDependencies: i = !1
}) {
    let a = e.find(e => e.entries.some(e => e.permissionName === C));
    if (!a) return e;
    let o = a.entries.find(e => e.permissionName === C);
    if (!o) return e;
    let s = e.flatMap(e => e.entries).find(e => e.permissionName === r.FloraLocalAccess);
    if (!s) return e;
    let c = {
            ...o,
            permissionName: T,
            dependsOnPermissionName: void 0,
            additionalPermissionNames: void 0
        },
        l = {
            ...s,
            permissionName: r.FloraLocalAccess,
            dependsOnPermissionName: void 0,
            additionalPermissionNames: void 0
        },
        u = D(t.permissions),
        d = t.permissions.includes(C);
    return e.map(e => {
        if (e !== a) return {
            ...e,
            entries: e.entries.filter(e => e.permissionName !== r.FloraLocalAccess)
        };
        let t = e.entries.filter(e => e.permissionName !== `chatgpt.workspace.feature.flora.access` && e.permissionName !== r.FloraLocalAccess && (i && e.showWhenParentDisabled || n || e.dependsOnPermissionName !== `chatgpt.workspace.feature.flora.access` || d)),
            s = t.some(e => i && e.showWhenParentDisabled),
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
        i(), w(), S(), D = e => e.includes(r.FloraLocalAccess) || e.includes(`chatgpt.workspace.feature.flora.access`)
    })),
    k, A, j, M, N, P = e((() => {
        n(), v(), x(), u(), d(), s(), k = t(g()), h(), A = f(), j = `text-token-link hover:text-token-link-hover underline`, M = ({
            onClose: e,
            onSave: t,
            isCreate: n,
            defaultData: r,
            rootClassName: i
        }) => {
            "use no forget";
            let s = _(),
                [u, d] = (0, k.useState)(r?.name || ``),
                [f, p] = (0, k.useState)(r?.description || ``),
                [h, g] = (0, k.useState)(``),
                [v, x] = (0, k.useState)(!1),
                [S, C] = (0, k.useState)(!1),
                [w, T] = (0, k.useState)(r?.metadata?.lockdown_mode ?? !1),
                E = async () => {
                    if (!u.trim()) {
                        g(s.formatMessage(N.roleNameError));
                        return
                    }
                    x(!0);
                    try {
                        let r = {
                            name: u,
                            description: f,
                            metadata: {}
                        };
                        n && (r.metadata = {
                            lockdown_mode: w
                        }), await t(r), e()
                    } catch {} finally {
                        x(!1)
                    }
                };
            return (0, A.jsx)(c, {
                testId: `modal-upsert-role`,
                size: `custom`,
                rootClassName: i,
                className: `max-w-lg text-sm`,
                isOpen: !0,
                onClose: e,
                showCloseButton: !0,
                type: `success`,
                title: s.formatMessage(n ? N.createRoleTitle : N.editRoleTitle),
                primaryButton: (0, A.jsx)(l, {
                    color: `primary`,
                    onClick: () => E(),
                    loading: v,
                    children: s.formatMessage(n && v ? N.buttonCreatingRoleLabel : N.buttonSaveLabel)
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
                            className: `border-token-border-primary text-token-text-primary focus:border-token-brand focus:ring-token-brand bg-token-bg-primary mt-1 block w-full rounded-md border px-3 py-2 text-sm ${h?`border-token-text-status-error`:``}`,
                            placeholder: s.formatMessage(N.roleNameLabel),
                            value: u,
                            onChange: e => {
                                d(e.target.value), g(``)
                            }
                        }), h && (0, A.jsx)(`span`, {
                            className: `text-token-text-status-error mt-1 text-xs`,
                            children: h
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
                            value: f,
                            onChange: e => p(e.target.value)
                        })]
                    }), n && (0, A.jsxs)(`div`, {
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
                            }), (0, A.jsx)(a, {
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
                    }), n && v && (0, A.jsxs)(`div`, {
                        className: `text-token-text-primary flex items-center gap-2 text-sm font-medium`,
                        "aria-live": `polite`,
                        children: [(0, A.jsx)(o, {
                            className: `icon-sm shrink-0`,
                            "aria-hidden": !0
                        }), s.formatMessage(N.createRoleLoadingNote)]
                    })]
                })
            })
        }, N = p({
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
//# sourceMappingURL=edb491ed-dumx67owdb0ga8hc.js.map
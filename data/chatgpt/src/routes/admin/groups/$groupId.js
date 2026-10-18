import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as n,
    My as r,
    dz as i,
    fz as a,
    iw as o,
    jy as s,
    kT as c,
    mz as l,
    ow as u,
    pz as d
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as f,
    Bn as p,
    Ln as m,
    N as h,
    Nn as g,
    Pt as _,
    Rn as v,
    Rt as y,
    Ut as b,
    Vn as x,
    s as S,
    zn as C
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $C as w,
    THn as T,
    aCn as ee,
    ew as te,
    idn as ne,
    rCn as re,
    rdn as ie,
    sCn as E,
    wHn as D
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Ax as ae,
    Fx as oe,
    Ix as se,
    Sv as O,
    Uy as ce,
    Wy as le,
    kx as k,
    xv as A
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    Qo as ue,
    Tl as de,
    Xv as j,
    Zv as M,
    is as N,
    rs as P,
    ts as F,
    wl as I
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    n as L,
    t as R
} from "./9f2e6d33-favh86igrrldl3up.js";
import {
    n as z,
    t as B
} from "./f5cccfb7-e5jrruc4oi3c1hcm.js";
import {
    n as V,
    t as H
} from "./8c6976e5-ibz7fcap50r267b6.js";
import {
    i as fe,
    t as pe
} from "./552e61db-fu8e9p7vj59brpmf.js";
import {
    a as me,
    c as he,
    i as ge,
    r as U,
    s as _e,
    t as W
} from "./cc70ddac-d0fxm344gzp90als.js";
import {
    i as ve,
    r as ye,
    t as be
} from "./8212174c-bjibr7qdv9zjhb6h.js";
import {
    a as xe,
    i as Se,
    n as Ce,
    o as we,
    r as Te,
    s as Ee
} from "./16d1957c-fq8hpy20z4lorrqg.js";

function De({
    group: e,
    onDelete: t,
    onClose: n
}) {
    return (0, G.jsx)(o, {
        type: `warning`,
        isOpen: !0,
        onClose: n,
        title: C().formatMessage({
            id: `workspaceSettings.groups.deleteGroupTitle`,
            defaultMessage: `Delete group {groupName}?`
        }, {
            groupName: e.name
        }),
        testId: `modal-delete-group`,
        showCloseButton: !0,
        primaryButton: (0, G.jsx)(c, {
            color: `danger`,
            onClick: async () => {
                t(e.id), n()
            },
            children: (0, G.jsx)(g, {
                id: `workspaceSettings.groups.confirmDelete`,
                defaultMessage: `Delete`
            })
        }),
        secondaryButton: (0, G.jsx)(c, {
            onClick: n,
            color: `secondary`,
            children: (0, G.jsx)(g, {
                id: `workspaceSettings.groups.cancelDelete`,
                defaultMessage: `Cancel`
            })
        }),
        children: (0, G.jsx)(`p`, {
            children: (0, G.jsx)(g, {
                id: `workspaceSettings.groups.deleteGroupWarning`,
                defaultMessage: `Are you sure you want to delete the "{groupName}" group? This action cannot be undone.`,
                values: {
                    groupName: e.name
                }
            })
        })
    })
}
var G, Oe = e((() => {
    n(), u(), v(), G = p()
}));

function ke({
    workspaceId: e,
    group: t,
    readOnly: n,
    isCloudConsoleM3ReadOnly: r = !1
}) {
    let a = C(),
        [o, l] = (0, K.useState)(``),
        [u, f] = (0, K.useState)(0),
        {
            data: p,
            isLoading: m,
            isPlaceholderData: _
        } = me({
            workspaceId: e,
            groupId: t.id,
            search: o,
            currPage: u
        }),
        [v, y] = (0, K.useState)(!1),
        b = h(),
        {
            mutateAsync: x
        } = _e({
            workspaceId: e,
            groupId: t.id,
            members: p,
            currPage: u,
            search: o
        }),
        S = (0, q.jsx)(c, {
            onClick: () => y(!0),
            icon: d.Plus,
            disabled: n,
            children: (0, q.jsx)(g, {
                id: `workspaceSettings.groups.addMemberButton`,
                defaultMessage: `Add member`
            })
        });
    return (0, q.jsxs)(`div`, {
        className: `flex w-full flex-col`,
        children: [(0, q.jsxs)(`div`, {
            className: `mt-6 mb-3 flex flex-row justify-between gap-2`,
            children: [(0, q.jsx)(ie, {
                className: `min-w-0 flex-1`,
                inputClassName: `w-full max-w-[250px] rounded-full! text-sm`,
                value: o,
                onChange: e => {
                    f(0), l(e.target.value)
                },
                placeholder: a.formatMessage({
                    id: `9pGyFG`,
                    defaultMessage: `Search name or email`
                })
            }), !r && t.is_dynamic === !1 && (n ? (0, q.jsx)(s, {
                label: a.formatMessage(z.managedViaSCIMTooltip),
                side: `right`,
                children: S
            }) : S)]
        }), (0, q.jsxs)(j.Root, {
            className: `min-w-full`,
            children: [(0, q.jsxs)(j.Header, {
                children: [(0, q.jsx)(j.HeaderCell, {
                    children: (0, q.jsx)(g, {
                        id: `workspaceSettings.groups.memberName`,
                        defaultMessage: `Name`
                    })
                }), (0, q.jsx)(j.HeaderCell, {
                    children: (0, q.jsx)(g, {
                        id: `workspaceSettings.groups.email`,
                        defaultMessage: `Email`
                    })
                }), (0, q.jsx)(j.HeaderCell, {})]
            }), (0, q.jsx)(j.Body, {
                className: m || _ ? `opacity-50` : void 0,
                children: p == null ? (0, q.jsx)(j.Row, {
                    children: (0, q.jsx)(j.Cell, {
                        colSpan: 3,
                        children: (0, q.jsx)(i, {})
                    })
                }) : p.items.length === 0 ? (0, q.jsx)(j.Row, {
                    children: (0, q.jsx)(j.Cell, {
                        colSpan: 3,
                        children: o === `` ? (0, q.jsx)(g, {
                            id: `workspaceSettings.groups.noMembers`,
                            defaultMessage: `No members`
                        }) : (0, q.jsx)(g, {
                            id: `workspaceSettings.groups.noMembersForSearch`,
                            defaultMessage: `No members matched the filter`
                        })
                    })
                }) : p.items.map(e => (0, q.jsxs)(j.Row, {
                    className: `[&>td]:py-2`,
                    children: [(0, q.jsx)(j.Cell, {
                        children: (0, q.jsx)(`span`, {
                            children: e.name
                        })
                    }), (0, q.jsx)(j.Cell, {
                        children: e.email
                    }), (0, q.jsx)(j.Cell, {
                        textAlign: `right`,
                        children: !n && t.is_dynamic === !1 && (t.is_scim_managed ? (0, q.jsx)(D.Root, {
                            children: (0, q.jsx)(D.Trigger, {
                                disabled: !0,
                                children: (0, q.jsx)(s, {
                                    label: a.formatMessage(z.managedViaSCIMTooltip),
                                    className: `flex`,
                                    side: `right`,
                                    children: (0, q.jsx)(k, {
                                        className: `icon-sm`
                                    })
                                })
                            })
                        }) : (0, q.jsxs)(D.Root, {
                            children: [(0, q.jsx)(D.Trigger, {
                                className: `-my-2`,
                                children: (0, q.jsx)(k, {
                                    className: `icon-sm`
                                })
                            }), (0, q.jsx)(D.Portal, {
                                children: (0, q.jsx)(D.Content, {
                                    size: `default`,
                                    children: (0, q.jsx)(D.Item, {
                                        onClick: () => x(e.id),
                                        icon: (0, q.jsx)(O, {
                                            className: `text-token-text-status-error`
                                        }),
                                        className: `text-token-text-status-error`,
                                        children: (0, q.jsx)(g, {
                                            id: `workspaceSettings.groups.removeMember`,
                                            defaultMessage: `Remove member`
                                        })
                                    })
                                })
                            })]
                        }))
                    })]
                }, e.id))
            })]
        }), (0, q.jsx)(`div`, {
            className: `mt-2 flex justify-center`,
            children: p && p.items.length > 0 && (0, q.jsx)(w, {
                currentPage: u,
                onChangeIndex: e => {
                    f(e)
                },
                length: Math.ceil(p.total / J)
            })
        }), v && !n && t.is_dynamic === !1 && (0, q.jsx)(Se, {
            workspaceId: e,
            isOpen: !0,
            onClose: () => {
                b.invalidateQueries({
                    queryKey: [e, `groups`]
                }), y(!1)
            },
            group: t
        }, `${e}:${t.id}`)]
    })
}
var K, q, J, Ae = e((() => {
    n(), te(), ne(), a(), B(), T(), M(), r(), ae(), l(), A(), S(), K = t(x()), v(), xe(), W(), q = p(), J = 10
}));

function je({
    currentWorkspaceId: e,
    groupId: t
}) {
    let n = C(),
        {
            role: r,
            cloudConsoleM3Enrolled: a
        } = de(),
        o = a === !0,
        s = _(),
        {
            data: c,
            isLoading: l
        } = ge({
            workspaceId: e,
            groupId: t ?? ``
        }),
        [u, d] = (0, Y.useState)(!1),
        [f, p] = (0, Y.useState)(!1),
        m = r != null && re(r),
        h = r != null && ee(r),
        g = !!(o || !(m || h) || c?.is_scim_managed),
        v = (0, Y.useMemo)(() => [{
            label: n.formatMessage(Te.title),
            href: `/admin/groups`
        }, {
            label: c?.name ?? ``
        }], [n, c?.name]),
        {
            deleteGroup: y
        } = U({
            workspaceId: e
        }),
        b = async e => {
            await y(e), s(`/admin/groups`)
        }, {
            updateGroupName: x
        } = he({
            workspaceId: e
        });
    if (l) return (0, X.jsx)(i, {});
    if (!c) return (0, X.jsxs)(`div`, {
        className: `flex h-full flex-col items-center justify-center space-y-4`,
        children: [(0, X.jsx)(`h2`, {
            className: `text-lg font-semibold`,
            children: n.formatMessage(Z.groupNotFoundLabel)
        }), (0, X.jsx)(`p`, {
            className: `text-sm text-gray-500`,
            children: n.formatMessage(Z.groupNotFoundDescription)
        })]
    });
    let S = ve(c),
        w = (0, X.jsxs)(D.Root, {
            children: [(0, X.jsx)(D.Trigger, {
                asChild: !0,
                className: `border-token-border-default! border!`,
                children: (0, X.jsxs)(`div`, {
                    children: [n.formatMessage(Z.manageLabel), (0, X.jsx)(ce, {
                        className: `icon-sm ms-0.5`
                    })]
                })
            }), (0, X.jsx)(D.Portal, {
                children: (0, X.jsxs)(D.Content, {
                    children: [(0, X.jsx)(D.Item, {
                        onClick: () => requestAnimationFrame(() => d(!0)),
                        icon: se,
                        label: n.formatMessage(Z.editGroupLabel)
                    }), (0, X.jsx)(D.Item, {
                        onClick: () => requestAnimationFrame(() => p(!0)),
                        icon: O,
                        label: n.formatMessage(Z.deleteGroupLabel),
                        color: `danger`
                    })]
                })
            })]
        });
    return (0, X.jsxs)(X.Fragment, {
        children: [(0, X.jsx)(R, {
            children: (0, X.jsx)(`title`, {
                children: c.name
            })
        }), (0, X.jsx)(F, {
            navigation: (0, X.jsx)(P, {
                items: v
            }),
            title: c.name,
            badge: S ? (0, X.jsx)(be, {}) : void 0,
            actions: c && !g && !S ? w : void 0
        }), (0, X.jsxs)(ue, {
            showSpinner: !1,
            children: [o && (0, X.jsx)(pe, {}), (0, X.jsx)(ke, {
                group: c,
                readOnly: g,
                workspaceId: e,
                isCloudConsoleM3ReadOnly: o
            }), f && !g && (0, X.jsx)(De, {
                group: c,
                onDelete: b,
                onClose: () => p(!1)
            }), u && !g && (0, X.jsx)(we, {
                defaultName: c.name,
                onSave: async t => {
                    await x({
                        workspaceId: e,
                        groupID: c.id,
                        name: t
                    })
                },
                onClose: () => d(!1),
                placeholder: `E.g. marketing team`
            })]
        })]
    })
}
var Y, X, Z, Me = e((() => {
        I(), fe(), N(), T(), le(), oe(), A(), a(), L(), Y = t(x()), v(), f(), ye(), E(), Oe(), W(), Ee(), Ae(), Ce(), X = p(), Z = m({
            manageLabel: {
                id: `lII8Sf`,
                defaultMessage: `Manage`
            },
            editGroupLabel: {
                id: `aBFPzn`,
                defaultMessage: `Edit group`
            },
            deleteGroupLabel: {
                id: `FtvUh/`,
                defaultMessage: `Delete group`
            },
            groupNotFoundLabel: {
                id: `Lfq9Z4`,
                defaultMessage: `Group not found`
            },
            groupNotFoundDescription: {
                id: `++TB5R`,
                defaultMessage: `It may take a few minutes for the new group to appear.`
            }
        })
    })),
    Q, $, Ne = e((() => {
        f(), Me(), H(), Q = p(), $ = b(function() {
            let e = V(),
                {
                    groupId: t
                } = y();
            return (0, Q.jsx)(je, {
                ...e,
                groupId: t
            })
        })
    }));
e((() => {
    Ne()
}))();
export {
    $ as
    default
};
//# sourceMappingURL=admin.groups._groupId-eil0d7wf.js.map
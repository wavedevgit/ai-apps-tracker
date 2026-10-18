import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AG as n,
    AT as r,
    DG as i,
    Dit as a,
    Hn as o,
    IU as s,
    LU as c,
    QM as l,
    Un as u,
    ZM as d,
    a7 as f,
    b5 as p,
    dz as m,
    fU as h,
    fz as g,
    hU as _,
    iw as v,
    kT as y,
    kit as b,
    l7 as x,
    mz as S,
    o1 as C,
    ow as w,
    pU as T,
    pnt as E,
    pz as ee,
    u1 as D,
    y5 as te,
    ynt as O
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as ne,
    Bn as k,
    Ln as A,
    N as re,
    Nn as j,
    Pt as M,
    Rn as N,
    Tn as P,
    Vn as F,
    q as ie,
    s as I,
    wn as L,
    zn as R
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $C as ae,
    F8 as z,
    P8 as B,
    Qb as V,
    T6t as oe,
    Zb as se,
    aCn as ce,
    ew as le,
    iCn as ue,
    idn as de,
    j6t as fe,
    rCn as pe,
    rdn as me,
    sCn as he
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Gh as ge,
    Kh as _e,
    Qy as ve,
    Zy as ye
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    Qo as be,
    Qs as xe,
    Tl as Se,
    Xs as Ce,
    Xv as H,
    Zv as we,
    is as Te,
    ts as Ee,
    wl as De
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    n as Oe,
    t as ke
} from "./9f2e6d33-favh86igrrldl3up.js";
import {
    i as Ae,
    r as je
} from "./32d3feda-hbhklz8kr5m3bmo8.js";
import {
    n as Me,
    t as Ne
} from "./2d8fa5e7-l3ycnk3lp2kga3cf.js";
import {
    i as Pe,
    t as Fe
} from "./552e61db-fu8e9p7vj59brpmf.js";
import {
    l as Ie,
    n as Le,
    o as Re,
    t as ze,
    u as Be
} from "./cc70ddac-d0fxm344gzp90als.js";
import {
    n as Ve,
    t as He
} from "./68d63dde-dfzhydxff94ca79k.js";
import {
    r as Ue,
    t as We
} from "./12cc112f-ke1wk3g74v45e9wi.js";
import {
    a as Ge,
    i as Ke,
    n as qe,
    r as Je,
    t as Ye
} from "./8212174c-bjibr7qdv9zjhb6h.js";
import {
    n as Xe,
    t as Ze
} from "./9c85c693-dy4wfx1rszyhs5fu.js";

function Qe({
    defaultName: e,
    placeholder: t,
    onSave: n,
    onClose: r
}) {
    let i = R(),
        a = e == null,
        [o, s] = (0, U.useState)(e || ``),
        [c, l] = (0, U.useState)(!1),
        [u, d] = (0, U.useState)(null),
        f = _(),
        p = async () => {
            if (o.trim() === ``) {
                d(i.formatMessage({
                    id: `workspaceSettings.groups.emptyName`,
                    defaultMessage: `Group name cannot be empty`
                }));
                return
            }
            l(!0);
            try {
                await n(o), f.success(a ? i.formatMessage({
                    id: `workspaceSettings.groups.createdGroup`,
                    defaultMessage: `Group created successfully`
                }) : i.formatMessage({
                    id: `workspaceSettings.groups.nameChanged`,
                    defaultMessage: `Group name changed successfully`
                })), r()
            } catch {
                d(i.formatMessage({
                    id: `workspaceSettings.groups.duplicateName`,
                    defaultMessage: `Group with this name already exists`
                }))
            } finally {
                l(!1)
            }
        };
    return (0, W.jsx)(v, {
        isOpen: !0,
        type: `success`,
        onClose: r,
        title: a ? i.formatMessage($e.newGroupTitle) : i.formatMessage($e.updateNameTitle),
        testId: `modal-change-group-name`,
        showCloseButton: !0,
        primaryButton: (0, W.jsx)(y, {
            color: `primary`,
            onClick: () => p(),
            loading: c,
            children: (0, W.jsx)(j, {
                id: `workspaceSettings.groups.save`,
                defaultMessage: `Save`
            })
        }),
        secondaryButton: (0, W.jsx)(y, {
            onClick: r,
            color: `secondary`,
            children: (0, W.jsx)(j, {
                id: `workspaceSettings.groups.cancel`,
                defaultMessage: `Cancel`
            })
        }),
        children: (0, W.jsxs)(`div`, {
            className: `mb-3 flex flex-col gap-2`,
            children: [(0, W.jsx)(`label`, {
                className: `text-sm font-medium`,
                children: (0, W.jsx)(j, {
                    id: `workspaceSettings.groups.groupNameLabel`,
                    defaultMessage: `Group Name`
                })
            }), (0, W.jsx)(`input`, {
                autoFocus: !0,
                type: `text`,
                value: o,
                placeholder: t,
                onChange: e => {
                    s(e.target.value), d(null)
                },
                className: `border-token-border-secondary focus:border-token-accent bg-token-bg-primary w-full rounded border px-3 py-2 text-sm focus:outline-none`,
                onKeyDown: e => {
                    e.key === `Enter` && p()
                }
            }), u && (0, W.jsx)(`p`, {
                className: `text-xs text-red-500`,
                children: u
            })]
        })
    })
}
var U, W, $e, et = e((() => {
    T(), r(), w(), U = t(F()), N(), W = k(), $e = A({
        newGroupTitle: {
            id: `workspaceSettings.groups.newGroup`,
            defaultMessage: `New group`
        },
        updateNameTitle: {
            id: `workspaceSettings.groups.updateNameTitle`,
            defaultMessage: `Update group name`
        }
    })
}));

function tt({
    group: e,
    isOpen: t,
    onClose: n
}) {
    let r = R(),
        i = _(),
        a = r.formatMessage({
            id: `workspaceSettings.groups.addMember`,
            defaultMessage: `Add members to the {groupName} group`
        }, {
            groupName: e.name
        }),
        o = C(),
        [s, c] = (0, G.useState)([]),
        [u, d] = (0, G.useState)(!1),
        [p, m] = (0, G.useState)([]);
    async function h() {
        let t = o?.getWorkspaceId();
        if (!t) throw Error(`No workspace ID found`);
        d(!0), m([]);
        let a = [];
        for (let e = 0; e < s.length; e += 50) a.push(s.slice(e, e + 50));
        let c = async n => f.safePost(`/accounts/{account_id}/group/{group_id}/users`, {
            parameters: {
                path: {
                    account_id: t,
                    group_id: e.id
                }
            },
            requestBody: {
                email_addresses: n
            }
        });
        try {
            let e = await Promise.all(a.map(e => c(e))),
                t = e.reduce((e, t) => e + t.added_group_users.length, 0),
                o = e.flatMap(e => e.rejected_group_users ?? []);
            o.length > 0 ? (m(o), i.warning(r.formatMessage({
                id: `workspaceSettings.groups.bulkAddMembers.partialSuccessToast`,
                defaultMessage: `{numUsers, plural, one {Added # user.} other {Added # users.}} {numRejectedUsers, plural, one {# user couldn't be added.} other {# users couldn't be added.}}`
            }, {
                numUsers: t,
                numRejectedUsers: o.length
            }))) : (i.success(r.formatMessage({
                id: `yU4Zf0`,
                defaultMessage: `Added {numUsers} users to the group`
            }, {
                numUsers: t
            })), n?.())
        } catch (t) {
            let n = qe(r, t, {
                targetIsRestrictedSafeModeGroup: Ke(e)
            }) ?? r.formatMessage(it.bulkAddMembersError);
            i.danger(n, {
                duration: 3
            })
        } finally {
            d(!1)
        }
    }
    return (0, K.jsxs)(v, {
        testId: `modal-bulk-add-group-members`,
        isOpen: t,
        onClose: n ?? l,
        title: a,
        type: `success`,
        showCloseButton: !0,
        primaryButton: (0, K.jsx)(y, {
            onClick: h,
            disabled: s.length === 0 || s.length > q,
            loading: u,
            children: (0, K.jsx)(j, {
                id: `EpbOzA`,
                defaultMessage: `Add users to group`
            })
        }),
        children: [(0, K.jsx)(nt, {
            onChange: e => {
                c(e), m([])
            }
        }), s.length > q && (0, K.jsx)(`div`, {
            className: `text-token-text-error mt-2 text-sm`,
            children: (0, K.jsx)(j, {
                id: `9lp0Tc`,
                defaultMessage: `Email list is limited to {maxEmails} users at once`,
                values: {
                    maxEmails: q
                }
            })
        }), p.length > 0 && (0, K.jsxs)(`div`, {
            className: `border-token-border-light mt-4 rounded-lg border p-3`,
            children: [(0, K.jsx)(`p`, {
                className: `text-token-interactive-label-warning-secondary text-sm font-medium`,
                children: (0, K.jsx)(j, {
                    id: `workspaceSettings.groups.bulkAddMembers.rejectedUsers.heading`,
                    defaultMessage: `{numRejectedUsers, plural, one {# user wasn't added} other {# users weren't added}}`,
                    values: {
                        numRejectedUsers: p.length
                    }
                })
            }), (0, K.jsx)(`p`, {
                className: `text-token-text-secondary mt-1 text-sm`,
                children: (0, K.jsx)(j, {
                    id: `workspaceSettings.groups.bulkAddMembers.rejectedUsers.description`,
                    defaultMessage: `These users are not current members of this workspace.`
                })
            }), (0, K.jsx)(`div`, {
                className: `mt-3 max-h-40 overflow-y-auto`,
                children: (0, K.jsxs)(`table`, {
                    className: `w-full text-start text-sm`,
                    children: [(0, K.jsx)(`thead`, {
                        children: (0, K.jsxs)(`tr`, {
                            className: `text-token-text-secondary`,
                            children: [(0, K.jsx)(`th`, {
                                scope: `col`,
                                className: `pb-1 font-medium`,
                                children: (0, K.jsx)(j, {
                                    id: `workspaceSettings.groups.bulkAddMembers.rejectedUsers.table.emailColumn`,
                                    defaultMessage: `Email`
                                })
                            }), (0, K.jsx)(`th`, {
                                scope: `col`,
                                className: `pb-1 font-medium`,
                                children: (0, K.jsx)(j, {
                                    id: `workspaceSettings.groups.bulkAddMembers.rejectedUsers.table.reasonColumn`,
                                    defaultMessage: `Reason`
                                })
                            })]
                        })
                    }), (0, K.jsx)(`tbody`, {
                        children: p.map(({
                            email_address: e
                        }, t) => (0, K.jsxs)(`tr`, {
                            children: [(0, K.jsx)(`td`, {
                                className: `py-1 pe-4`,
                                children: e
                            }), (0, K.jsx)(`td`, {
                                className: `py-1`,
                                children: (0, K.jsx)(j, {
                                    id: `workspaceSettings.groups.bulkAddMembers.rejectedUsers.notInWorkspaceReason`,
                                    defaultMessage: `Not a current workspace member`
                                })
                            })]
                        }, `${e}-${t}`))
                    })]
                })
            })]
        })]
    })
}

function nt({
    onChange: e
}) {
    let [t, n] = (0, G.useState)(``);
    return (0, K.jsxs)(`div`, {
        className: `flex flex-col space-y-4`,
        children: [(0, K.jsxs)(`label`, {
            htmlFor: `group-email-paste`,
            children: [(0, K.jsx)(j, {
                id: `qvGcSC`,
                defaultMessage: `Emails`
            }), (0, K.jsx)(`br`, {}), (0, K.jsx)(`span`, {
                className: `text-token-text-tertiary text-sm`,
                children: (0, K.jsx)(j, {
                    id: `Fhd+5h`,
                    defaultMessage: `Paste email addresses here, one per line:`
                })
            })]
        }), (0, K.jsx)(B, {
            id: `group-email-paste`,
            className: `h-[250px] text-sm`,
            value: t,
            onChange: t => {
                n(t.target.value), e(rt(t.target.value))
            },
            placeholder: `jean@example.com
joohyun@example.com
muhammed@example.com
susan@example.com`
        })]
    })
}

function rt(e) {
    return e.split(`
`).map(e => e.trim()).filter(e => e.length > 0).filter(e => u.test(e))
}
var G, K, it, q, at = e((() => {
    r(), z(), w(), D(), T(), o(), x(), d(), G = t(F()), N(), Je(), K = k(), it = A({
        bulkAddMembersError: {
            id: `workspaceSettings.groups.bulkAddMembers.error`,
            defaultMessage: `Unable to add some members to the group.`
        }
    }), q = 1e3
}));

function ot(e) {
    "use forget";
    let t = (0, ct.c)(26),
        {
            workspaceId: n,
            group: r,
            isOpen: i,
            onClose: o
        } = e,
        s = R(),
        c = re(),
        [u, d] = (0, J.useState)(`users`),
        f = h(),
        p;
    t[0] !== r.name || t[1] !== s ? (p = s.formatMessage({
        id: `workspaceSettings.addGroupsMembersModal.title`,
        defaultMessage: `Add members to the {groupName} group`
    }, {
        groupName: r.name
    }), t[0] = r.name, t[1] = s, t[2] = p) : p = t[2];
    let g = p,
        [_, b] = (0, J.useState)(``),
        [x, S] = (0, J.useState)(0),
        {
            data: C,
            isLoading: w
        } = fe(n, x * 25, _, 25, ie),
        T;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (T = [], t[3] = T) : T = t[3];
    let [E, ee] = (0, J.useState)(T), D;
    t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (D = [], t[4] = D) : D = t[4];
    let [te, O] = (0, J.useState)(D), [ne, k] = (0, J.useState)(`interactive`), A = C ? Math.ceil((C.total ?? 0) / 25) : 0, M = function(e) {
        return O(t => [...t, e]), st(n, r.id, e).then(async () => (ee(t => [...t, e]), await Be(c, n), !0)).catch(e => {
            a.addError(e);
            let t = qe(s, e, {
                targetIsRestrictedSafeModeGroup: Ke(r)
            }) ?? s.formatMessage(X.addMemberError);
            return f.danger(t, {
                duration: 3
            }), !1
        }).finally(() => {
            O(t => t.filter(t => t !== e))
        })
    };
    if (ne === `batch`) {
        let e;
        return t[5] !== r || t[6] !== i || t[7] !== o ? (e = (0, Y.jsx)(tt, {
            group: r,
            isOpen: i,
            onClose: o
        }), t[5] = r, t[6] = i, t[7] = o, t[8] = e) : e = t[8], e
    }
    let N = v,
        P = o ?? l,
        F;
    t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (F = (0, Y.jsx)(j, {
        id: `workspaceSettings.groups.addMember.doneButton`,
        defaultMessage: `Done`
    }), t[9] = F) : F = t[9];
    let I;
    t[10] === o ? I = t[11] : (I = (0, Y.jsx)(y, {
        type: `button`,
        onClick: o,
        children: F
    }), t[10] = o, t[11] = I);
    let L;
    t[12] !== s || t[13] !== u || t[14] !== n ? (L = n && xe(n) && (0, Y.jsx)(je, {
        activeTab: u,
        onTabChange: d,
        items: [{
            key: `users`,
            label: s.formatMessage({
                id: `workspaceSettings.groups.addMember.users`,
                defaultMessage: `Users`
            }),
            children: null
        }, {
            key: `service-accounts`,
            label: s.formatMessage(Me.serviceAccounts),
            children: null
        }]
    }), t[12] = s, t[13] = u, t[14] = n, t[15] = L) : L = t[15];
    let z = n && xe(n) && u === `service-accounts` ? (0, Y.jsx)(Ze, {
            workspaceId: n,
            groupId: r.id,
            assignedIds: new Set(E),
            onAdd: async e => {
                if (!await M(e.service_account_user_id)) throw Error(`Group membership was not saved`)
            }
        }, `${n}:${r.id}`) : (0, Y.jsxs)(Y.Fragment, {
            children: [(0, Y.jsxs)(`div`, {
                className: `flex flex-row justify-between`,
                children: [(0, Y.jsx)(`p`, {
                    children: g
                }), (0, Y.jsx)(y, {
                    onClick: () => {
                        k(`batch`)
                    },
                    color: `secondary`,
                    children: (0, Y.jsx)(j, {
                        id: `workspaceSettings.groups.addMember.bulkAddButton`,
                        defaultMessage: `Bulk add users`
                    })
                })]
            }), (0, Y.jsx)(`label`, {
                htmlFor: `add-group-member-search`,
                className: `sr-only`,
                children: s.formatMessage(X.searchLabel)
            }), (0, Y.jsx)(me, {
                id: `add-group-member-search`,
                value: _,
                inputClassName: `w-full`,
                placeholder: s.formatMessage(X.searchPlaceholder),
                onChange: e => {
                    S(0), b(e.target.value)
                }
            }), (0, Y.jsxs)(H.Root, {
                className: `min-w-full`,
                children: [(0, Y.jsxs)(H.Header, {
                    children: [(0, Y.jsx)(H.HeaderCell, {
                        children: (0, Y.jsx)(j, {
                            id: `workspaceSettings.groups.addMember.name`,
                            defaultMessage: `Name`
                        })
                    }), (0, Y.jsx)(H.HeaderCell, {
                        children: (0, Y.jsx)(j, {
                            id: `workspaceSettings.groups.addMember.email`,
                            defaultMessage: `Email`
                        })
                    }), (0, Y.jsx)(H.HeaderCell, {})]
                }), (0, Y.jsxs)(H.Body, {
                    children: [!C && w && (0, Y.jsx)(H.Row, {
                        children: (0, Y.jsx)(H.Cell, {
                            colSpan: 3,
                            textAlign: `center`,
                            children: (0, Y.jsx)(m, {})
                        })
                    }), C?.items.map(e => (0, Y.jsxs)(H.Row, {
                        children: [(0, Y.jsx)(H.Cell, {
                            children: e.name
                        }), (0, Y.jsx)(H.Cell, {
                            children: e.email
                        }), (0, Y.jsx)(H.Cell, {
                            textAlign: `right`,
                            className: `pe-1`,
                            children: (0, Y.jsx)(y, {
                                size: `small`,
                                color: `secondary`,
                                disabled: te.includes(e.id),
                                onClick: () => {
                                    E.includes(e.id) || M(e.id)
                                },
                                icon: E.includes(e.id) ? ye : _e,
                                children: E.includes(e.id) ? (0, Y.jsx)(j, {
                                    id: `workspaceSettings.groups.addMember.addButton`,
                                    defaultMessage: `Added`
                                }) : (0, Y.jsx)(j, {
                                    id: `workspaceSettings.groups.addMember.addedButton`,
                                    defaultMessage: `Add`
                                })
                            })
                        })]
                    }, e.id))]
                })]
            }), A > 1 && (0, Y.jsx)(`div`, {
                className: `flex flex-row justify-center`,
                children: (0, Y.jsx)(ae, {
                    currentPage: x,
                    onChangeIndex: e => {
                        S(e)
                    },
                    length: A
                })
            })]
        }),
        B;
    t[16] !== L || t[17] !== z ? (B = (0, Y.jsxs)(`div`, {
        className: `flex flex-col gap-3`,
        children: [L, z]
    }), t[16] = L, t[17] = z, t[18] = B) : B = t[18];
    let V;
    return t[19] !== N || t[20] !== i || t[21] !== I || t[22] !== B || t[23] !== P || t[24] !== g ? (V = (0, Y.jsx)(N, {
        testId: `modal-add-group-member`,
        type: `warning`,
        isOpen: i,
        onClose: P,
        title: g,
        size: `custom`,
        className: `max-w-(--breakpoint-md)`,
        showCloseButton: !0,
        primaryButton: I,
        children: B
    }), t[19] = N, t[20] = i, t[21] = I, t[22] = B, t[23] = P, t[24] = g, t[25] = V) : V = t[25], V
}
async function st(e, t, n) {
    await f.safePatch(`/accounts/{account_id}/group/{group_id}`, {
        parameters: {
            path: {
                account_id: e,
                group_id: t
            }
        },
        requestBody: {
            user_id: n
        }
    })
}
var ct, J, Y, X, lt = e((() => {
    ct = L(), r(), le(), de(), g(), we(), ve(), ge(), w(), T(), b(), x(), I(), Ae(), Xe(), Ne(), Ce(), d(), J = t(F()), N(), Je(), oe(), at(), Ie(), Y = k(), X = A({
        searchPlaceholder: {
            id: `workspaceSettings.groups.addMember.searchPlaceholder`,
            defaultMessage: `Search members`
        },
        searchLabel: {
            id: `workspaceSettings.groups.addMember.searchLabel`,
            defaultMessage: `Search workspace members`
        },
        addMemberError: {
            id: `workspaceSettings.groups.addMember.addMemberError`,
            defaultMessage: `Unable to add member to the group.`
        }
    })
}));

function ut({
    workspaceId: e,
    isCloudConsoleM3ReadOnly: t = !1
}) {
    let n = R(),
        r = re(),
        {
            role: i
        } = Se(),
        a = i == null ? void 0 : pe(i),
        o = i == null ? void 0 : ce(i),
        s = t || !(a || o),
        [c, l] = (0, Z.useState)(``),
        u = V(c, 300),
        d = M(),
        [f, p] = (0, Z.useState)(0),
        {
            groups: h,
            isError: g,
            isFetching: _,
            isLoading: v,
            isPlaceholderData: b,
            refetch: x
        } = Re({
            workspaceId: e,
            currPage: f,
            groupFilter: u,
            includeScimGroups: a || o
        }),
        [S, C] = (0, Z.useState)(!1),
        {
            data: w
        } = Ge(e, E(`3020999601`)),
        T = e => {
            e && s || (e && (p(0), l(``)), C(e))
        },
        {
            createGroup: D
        } = Le({
            workspaceId: e,
            currentGroups: h
        }),
        O = h ? [...h.items] : [];
    if (w && h) {
        let e = w.group;
        if (e) {
            let t = O.filter(({
                id: t
            }) => t !== e.id);
            O = f === 0 ? [{
                ...e,
                num_members: e.num_members ?? 0
            }, ...t] : O
        }
    }
    let ne = !g && h != null && (v || b);
    return (0, Q.jsxs)(Q.Fragment, {
        children: [(0, Q.jsxs)(`div`, {
            className: `mt-6 mb-3 flex flex-row justify-between gap-2`,
            children: [(0, Q.jsx)(me, {
                inputClassName: `w-[250px] rounded-full! text-sm`,
                value: c,
                onChange: e => {
                    l(e.target.value), p(0)
                },
                placeholder: n.formatMessage({
                    id: `workspaceSettings.groups.search`,
                    defaultMessage: `Search group name`
                })
            }), !s && (0, Q.jsx)(y, {
                onClick: () => T(!0),
                icon: ee.Plus,
                children: (0, Q.jsx)(j, {
                    id: `workspaceSettings.groups.create`,
                    defaultMessage: `Create group`
                })
            })]
        }), (0, Q.jsxs)(`div`, {
            children: [(0, Q.jsxs)(`div`, {
                className: `relative`,
                children: [(0, Q.jsxs)(H.Root, {
                    className: `min-w-full`,
                    children: [(0, Q.jsxs)(`colgroup`, {
                        children: [(0, Q.jsx)(`col`, {
                            className: `w-[60%]`
                        }), (0, Q.jsx)(`col`, {
                            className: `w-[20%]`
                        }), (0, Q.jsx)(`col`, {
                            className: `w-[20%]`
                        }), (0, Q.jsx)(`col`, {
                            className: `w-16`
                        })]
                    }), (0, Q.jsxs)(H.Header, {
                        children: [(0, Q.jsx)(H.HeaderCell, {
                            children: (0, Q.jsx)(j, {
                                id: `workspaceSettings.groups.groupName`,
                                defaultMessage: `Group name`
                            })
                        }), (0, Q.jsx)(H.HeaderCell, {
                            children: (0, Q.jsx)(j, {
                                id: `workspaceSettings.groups.members`,
                                defaultMessage: `Members`
                            })
                        }), (0, Q.jsx)(H.HeaderCell, {
                            children: (0, Q.jsx)(j, {
                                id: `workspaceSettings.groups.created`,
                                defaultMessage: `Created`
                            })
                        }), (0, Q.jsx)(H.HeaderCell, {})]
                    }), (0, Q.jsx)(H.Body, {
                        className: te(!g && (v || b) && `pointer-events-none opacity-50`),
                        children: g ? (0, Q.jsx)(H.Row, {
                            children: (0, Q.jsx)(H.Cell, {
                                colSpan: 4,
                                textAlign: `center`,
                                children: (0, Q.jsxs)(`div`, {
                                    className: `flex min-h-32 flex-col items-center justify-center`,
                                    role: `alert`,
                                    children: [(0, Q.jsx)(`div`, {
                                        className: `text-token-text-secondary text-sm`,
                                        children: (0, Q.jsx)(j, {
                                            id: `workspaceSettings.groups.list.loadError`,
                                            defaultMessage: `We couldn’t load groups.`
                                        })
                                    }), (0, Q.jsx)(y, {
                                        className: `mt-3`,
                                        color: `secondary`,
                                        loading: _,
                                        size: `small`,
                                        type: `button`,
                                        onClick: () => {
                                            x()
                                        },
                                        children: (0, Q.jsx)(j, {
                                            id: `workspaceSettings.groups.list.retryLoad`,
                                            defaultMessage: `Try again`
                                        })
                                    })]
                                })
                            })
                        }) : h == null ? (0, Q.jsx)(H.Row, {
                            children: (0, Q.jsx)(H.Cell, {
                                colSpan: 5,
                                textAlign: `center`,
                                children: (0, Q.jsx)(m, {})
                            })
                        }) : O.length === 0 ? (0, Q.jsx)(H.Row, {
                            children: (0, Q.jsx)(H.Cell, {
                                colSpan: 5,
                                textAlign: `center`,
                                children: c === `` ? (0, Q.jsx)(j, {
                                    id: `workspaceSettings.groups.noGroups`,
                                    defaultMessage: `No groups found.`
                                }) : (0, Q.jsx)(j, {
                                    id: `workspaceSettings.groups.noGroupsWithFIlter`,
                                    defaultMessage: `No groups found. Try changing the search query.`
                                })
                            })
                        }) : O.map(t => (0, Q.jsx)(ft, {
                            group: t,
                            workspaceId: e,
                            onAddMember: () => {
                                r.invalidateQueries({
                                    queryKey: [e, `groups`]
                                })
                            },
                            readOnly: s
                        }, t.id))
                    })]
                }), ne && (0, Q.jsx)(`div`, {
                    className: `absolute inset-0 z-20 flex items-center justify-center`,
                    children: (0, Q.jsx)(m, {})
                })]
            }), h && !g && (0, Q.jsx)(`div`, {
                className: `text-center`,
                children: (0, Q.jsx)(ae, {
                    length: Math.ceil(h.total / 20),
                    currentPage: Math.min(f, Math.ceil(h.total / 20)),
                    onChangeIndex: e => p(e)
                })
            })]
        }), S && !s && (0, Q.jsx)(Qe, {
            onClose: () => T(!1),
            onSave: async t => {
                let {
                    id: n
                } = await D({
                    name: t,
                    workspaceId: e
                });
                d(`/admin/groups/${n}`)
            },
            placeholder: n.formatMessage({
                id: `workspaceSettings.groups.placeholder`,
                defaultMessage: `E.g. marketing team`
            })
        })]
    })
}

function dt({
    currentWorkspaceId: e
}) {
    let t = R(),
        r = C(),
        i = !!r?.isFreeWorkspace(),
        a = !1,
        {
            role: o,
            cloudConsoleM3Enrolled: s
        } = Se(),
        l = s === !0,
        u = o == null ? void 0 : pe(o),
        d = o == null ? void 0 : ce(o),
        f = o == null ? void 0 : ue(o),
        p = r?.isEnterprisey(),
        {
            data: h,
            isLoading: g
        } = n(e);
    return i ? (0, Q.jsxs)(Q.Fragment, {
        children: [(0, Q.jsx)(ke, {
            children: (0, Q.jsx)(`title`, {
                children: t.formatMessage($.title)
            })
        }), (0, Q.jsx)(Ee, {
            contentWidth: `medium`,
            title: t.formatMessage($.title),
            subtitle: (0, Q.jsx)(j, {
                id: `NDDzzF`,
                defaultMessage: `Only workspace admins can edit these settings.`
            })
        }), (0, Q.jsx)(be, {
            contentWidth: `medium`,
            children: (0, Q.jsx)(We, {})
        })]
    }) : (a = d || u || f || !p ? !0 : !!h?.permissions?.includes(`chatgpt.workspace.member.role.view`), g ? (0, Q.jsx)(`div`, {
        className: `mt-6 flex min-h-[40vh] items-center justify-center`,
        children: (0, Q.jsx)(m, {})
    }) : a ? (0, Q.jsxs)(Q.Fragment, {
        children: [(0, Q.jsx)(ke, {
            children: (0, Q.jsx)(`title`, {
                children: t.formatMessage($.title)
            })
        }), (0, Q.jsx)(Ee, {
            contentWidth: `medium`,
            title: t.formatMessage($.title),
            subtitle: (0, Q.jsx)(j, {
                id: `admin.groupsSettings.subtitle`,
                defaultMessage: `Only workspace admins can edit these settings. Member counts exclude pending invites.`
            })
        }), (0, Q.jsxs)(be, {
            contentWidth: `medium`,
            showSpinner: !1,
            children: [l && (0, Q.jsx)(Fe, {}), (0, Q.jsx)(ut, {
                workspaceId: e,
                isCloudConsoleM3ReadOnly: l
            })]
        })]
    }) : (0, Q.jsx)(`div`, {
        className: `m-6`,
        children: (0, Q.jsxs)(`div`, {
            className: `border-token-border-medium bg-token-main-surface-secondary text-token-text-primary flex items-center gap-3 rounded-md border px-4 py-3`,
            children: [(0, Q.jsx)(c, {
                className: `icon-sm interactive-label-warning-secondary shrink-0`
            }), (0, Q.jsx)(j, {
                ...$.groupsPagePermissionDenied
            })]
        })
    }))
}

function ft({
    workspaceId: e,
    group: t,
    onAddMember: n,
    readOnly: r
}) {
    let [i, a] = (0, Z.useState)(!1), o = M(), s = Ke(t);
    return (0, Q.jsxs)(Q.Fragment, {
        children: [(0, Q.jsxs)(H.Row, {
            className: `[&>td]:py-2`,
            onClick: () => o(`/admin/groups/${t.id}`),
            children: [(0, Q.jsxs)(H.Cell, {
                children: [(0, Q.jsx)(He, {
                    group: t
                }), (0, Q.jsx)(`div`, {
                    className: `flex flex-col gap-1`,
                    children: (0, Q.jsxs)(`div`, {
                        className: `flex items-center gap-2`,
                        children: [(0, Q.jsx)(`span`, {
                            children: t.name
                        }), s && (0, Q.jsx)(Ye, {})]
                    })
                })]
            }), (0, Q.jsx)(H.Cell, {
                children: (0, Q.jsx)(j, {
                    id: `workspaceSettings.groups.memberCount`,
                    defaultMessage: `{count} members`,
                    values: {
                        count: t.num_members
                    }
                })
            }), (0, Q.jsx)(H.Cell, {
                children: t.created_time && (0, Q.jsx)(P, {
                    value: t.created_time,
                    year: `numeric`,
                    month: `short`,
                    day: `numeric`
                })
            })]
        }), i && !r && !t.is_scim_managed && t.is_dynamic === !1 && (0, Q.jsx)(ot, {
            workspaceId: e,
            isOpen: !0,
            onClose: () => {
                n(t.id), a(!1)
            },
            group: t
        })]
    })
}
var Z, Q, $, pt = e((() => {
    D(), r(), le(), de(), g(), Te(), De(), Pe(), he(), we(), S(), s(), i(), O(), se(), Oe(), I(), p(), Z = t(F()), N(), ne(), Je(), Ue(), lt(), Ve(), ze(), et(), Q = k(), $ = A({
        title: {
            id: `admin.groupsSettings.title`,
            defaultMessage: `Groups`
        },
        groupsPagePermissionDenied: {
            id: `adminPage.groupsPagePermissionDenied`,
            defaultMessage: `You don't have permission to view this groups list.`
        }
    })
}));
export {
    lt as a, ot as i, pt as n, Qe as o, $ as r, et as s, dt as t
};
//# sourceMappingURL=16d1957c-fq8hpy20z4lorrqg.js.map
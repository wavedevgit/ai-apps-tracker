import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $G as n,
    Az as r,
    Hn as i,
    Hnt as a,
    I1 as o,
    J5 as s,
    JT as c,
    Jnt as l,
    L7 as u,
    M1 as d,
    Mz as f,
    N7 as p,
    Nz as m,
    RU as h,
    Sw as g,
    Un as _,
    VU as v,
    cW as y,
    gN as b,
    hN as x,
    iat as ee,
    jz as S,
    lW as C,
    nK as w,
    nat as te,
    q5 as T,
    qT as E,
    ww as D,
    zU as O
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    $ as k,
    Bn as A,
    En as ne,
    Hn as j,
    N as re,
    Pn as M,
    Pt as N,
    Rn as P,
    Tn as F,
    Vn as I,
    q as ie,
    s as L,
    zn as R
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    $b as z,
    I8 as B,
    L8 as V,
    S6t as ae,
    _Cn as oe,
    _dn as se,
    ex as ce,
    g6t as le,
    nw as ue,
    tw as de,
    vCn as fe,
    vdn as pe,
    xCn as me,
    yCn as he
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    Gh as ge,
    Jy as _e,
    Kh as ve,
    Yy as ye
} from "./30901919-jory365vq6ym5crx.js";
import {
    $v as be,
    Dl as xe,
    El as Se,
    Qs as Ce,
    Qv as H,
    ec as we,
    es as Te,
    os as Ee,
    rs as De
} from "./c2675c8c-nxl2ic2ofk2vw70s.js";
import {
    n as Oe,
    t as ke
} from "./9f2e6d33-oyt43zq6d4tu8sf7.js";
import {
    i as Ae,
    r as je
} from "./32d3feda-e8pknumpr7gn5ftr.js";
import {
    n as Me,
    t as Ne
} from "./2d8fa5e7-dcytyxx23fob372a.js";
import {
    i as Pe,
    t as Fe
} from "./552e61db-ol61vdrmit8xn4vv.js";
import {
    l as Ie,
    n as Le,
    o as Re,
    t as ze,
    u as Be
} from "./cc70ddac-ekkdws52huu4s00x.js";
import {
    n as Ve,
    t as He
} from "./68d63dde-hg6uzieh6cocqub5.js";
import {
    r as Ue,
    t as We
} from "./12cc112f-cn7mn2qcphpw6lp5.js";
import {
    a as Ge,
    i as Ke,
    n as qe,
    r as Je,
    t as Ye
} from "./8212174c-l3gveyv60v4sidca.js";
import {
    n as Xe,
    t as Ze
} from "./9c85c693-d0roibun1q982kff.js";

function Qe({
    defaultName: e,
    placeholder: t,
    onSave: n,
    onClose: r
}) {
    let i = A(),
        a = e == null,
        [o, s] = (0, U.useState)(e || ``),
        [c, l] = (0, U.useState)(!1),
        [u, d] = (0, U.useState)(null),
        f = v(),
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
    return (0, W.jsx)(g, {
        isOpen: !0,
        type: `success`,
        onClose: r,
        title: a ? i.formatMessage($e.newGroupTitle) : i.formatMessage($e.updateNameTitle),
        testId: `modal-change-group-name`,
        showCloseButton: !0,
        primaryButton: (0, W.jsx)(E, {
            color: `primary`,
            onClick: () => p(),
            loading: c,
            children: (0, W.jsx)(M, {
                id: `workspaceSettings.groups.save`,
                defaultMessage: `Save`
            })
        }),
        secondaryButton: (0, W.jsx)(E, {
            onClick: r,
            color: `secondary`,
            children: (0, W.jsx)(M, {
                id: `workspaceSettings.groups.cancel`,
                defaultMessage: `Cancel`
            })
        }),
        children: (0, W.jsxs)(`div`, {
            className: `mb-3 flex flex-col gap-2`,
            children: [(0, W.jsx)(`label`, {
                className: `text-sm font-medium`,
                children: (0, W.jsx)(M, {
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
    O(), c(), D(), U = t(j()), R(), W = I(), $e = P({
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
    let r = A(),
        i = v(),
        a = r.formatMessage({
            id: `workspaceSettings.groups.addMember`,
            defaultMessage: `Add members to the {groupName} group`
        }, {
            groupName: e.name
        }),
        o = d(),
        [s, c] = (0, G.useState)([]),
        [l, u] = (0, G.useState)(!1),
        [f, m] = (0, G.useState)([]);
    async function h() {
        let t = o?.getWorkspaceId();
        if (!t) throw Error(`No workspace ID found`);
        u(!0), m([]);
        let a = [];
        for (let e = 0; e < s.length; e += 50) a.push(s.slice(e, e + 50));
        let c = async n => p.safePost(`/accounts/{account_id}/group/{group_id}/users`, {
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
            u(!1)
        }
    }
    return (0, K.jsxs)(g, {
        testId: `modal-bulk-add-group-members`,
        isOpen: t,
        onClose: n ?? b,
        title: a,
        type: `success`,
        showCloseButton: !0,
        primaryButton: (0, K.jsx)(E, {
            onClick: h,
            disabled: s.length === 0 || s.length > q,
            loading: l,
            children: (0, K.jsx)(M, {
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
            children: (0, K.jsx)(M, {
                id: `9lp0Tc`,
                defaultMessage: `Email list is limited to {maxEmails} users at once`,
                values: {
                    maxEmails: q
                }
            })
        }), f.length > 0 && (0, K.jsxs)(`div`, {
            className: `border-token-border-light mt-4 rounded-lg border p-3`,
            children: [(0, K.jsx)(`p`, {
                className: `text-token-interactive-label-warning-secondary text-sm font-medium`,
                children: (0, K.jsx)(M, {
                    id: `workspaceSettings.groups.bulkAddMembers.rejectedUsers.heading`,
                    defaultMessage: `{numRejectedUsers, plural, one {# user wasn't added} other {# users weren't added}}`,
                    values: {
                        numRejectedUsers: f.length
                    }
                })
            }), (0, K.jsx)(`p`, {
                className: `text-token-text-secondary mt-1 text-sm`,
                children: (0, K.jsx)(M, {
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
                                children: (0, K.jsx)(M, {
                                    id: `workspaceSettings.groups.bulkAddMembers.rejectedUsers.table.emailColumn`,
                                    defaultMessage: `Email`
                                })
                            }), (0, K.jsx)(`th`, {
                                scope: `col`,
                                className: `pb-1 font-medium`,
                                children: (0, K.jsx)(M, {
                                    id: `workspaceSettings.groups.bulkAddMembers.rejectedUsers.table.reasonColumn`,
                                    defaultMessage: `Reason`
                                })
                            })]
                        })
                    }), (0, K.jsx)(`tbody`, {
                        children: f.map(({
                            email_address: e
                        }, t) => (0, K.jsxs)(`tr`, {
                            children: [(0, K.jsx)(`td`, {
                                className: `py-1 pe-4`,
                                children: e
                            }), (0, K.jsx)(`td`, {
                                className: `py-1`,
                                children: (0, K.jsx)(M, {
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
            children: [(0, K.jsx)(M, {
                id: `qvGcSC`,
                defaultMessage: `Emails`
            }), (0, K.jsx)(`br`, {}), (0, K.jsx)(`span`, {
                className: `text-token-text-tertiary text-sm`,
                children: (0, K.jsx)(M, {
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
`).map(e => e.trim()).filter(e => e.length > 0).filter(e => _.test(e))
}
var G, K, it, q, at = e((() => {
    c(), V(), D(), o(), O(), i(), u(), x(), G = t(j()), R(), Je(), K = I(), it = P({
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
            group: i,
            isOpen: a,
            onClose: o
        } = e,
        s = A(),
        c = re(),
        [l, u] = (0, J.useState)(`users`),
        d = h(),
        f;
    t[0] !== i.name || t[1] !== s ? (f = s.formatMessage({
        id: `workspaceSettings.addGroupsMembersModal.title`,
        defaultMessage: `Add members to the {groupName} group`
    }, {
        groupName: i.name
    }), t[0] = i.name, t[1] = s, t[2] = f) : f = t[2];
    let p = f,
        [m, _] = (0, J.useState)(``),
        [v, y] = (0, J.useState)(0),
        {
            data: x,
            isLoading: ee
        } = ae(n, v * 25, m, 25, ie),
        S;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (S = [], t[3] = S) : S = t[3];
    let [C, w] = (0, J.useState)(S), T;
    t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (T = [], t[4] = T) : T = t[4];
    let [D, O] = (0, J.useState)(T), [k, ne] = (0, J.useState)(`interactive`), j = x ? Math.ceil((x.total ?? 0) / 25) : 0, N = function(e) {
        return O(t => [...t, e]), st(n, i.id, e).then(async () => (w(t => [...t, e]), await Be(c, n), !0)).catch(e => {
            te.addError(e);
            let t = qe(s, e, {
                targetIsRestrictedSafeModeGroup: Ke(i)
            }) ?? s.formatMessage(X.addMemberError);
            return d.danger(t, {
                duration: 3
            }), !1
        }).finally(() => {
            O(t => t.filter(t => t !== e))
        })
    };
    if (k === `batch`) {
        let e;
        return t[5] !== i || t[6] !== a || t[7] !== o ? (e = (0, Y.jsx)(tt, {
            group: i,
            isOpen: a,
            onClose: o
        }), t[5] = i, t[6] = a, t[7] = o, t[8] = e) : e = t[8], e
    }
    let P = g,
        F = o ?? b,
        I;
    t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (I = (0, Y.jsx)(M, {
        id: `workspaceSettings.groups.addMember.doneButton`,
        defaultMessage: `Done`
    }), t[9] = I) : I = t[9];
    let L;
    t[10] === o ? L = t[11] : (L = (0, Y.jsx)(E, {
        type: `button`,
        onClick: o,
        children: I
    }), t[10] = o, t[11] = L);
    let R;
    t[12] !== s || t[13] !== l || t[14] !== n ? (R = n && we(n) && (0, Y.jsx)(je, {
        activeTab: l,
        onTabChange: u,
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
    }), t[12] = s, t[13] = l, t[14] = n, t[15] = R) : R = t[15];
    let z = n && we(n) && l === `service-accounts` ? (0, Y.jsx)(Ze, {
            workspaceId: n,
            groupId: i.id,
            assignedIds: new Set(C),
            onAdd: async e => {
                if (!await N(e.service_account_user_id)) throw Error(`Group membership was not saved`)
            }
        }, `${n}:${i.id}`) : (0, Y.jsxs)(Y.Fragment, {
            children: [(0, Y.jsxs)(`div`, {
                className: `flex flex-row justify-between`,
                children: [(0, Y.jsx)(`p`, {
                    children: p
                }), (0, Y.jsx)(E, {
                    onClick: () => {
                        ne(`batch`)
                    },
                    color: `secondary`,
                    children: (0, Y.jsx)(M, {
                        id: `workspaceSettings.groups.addMember.bulkAddButton`,
                        defaultMessage: `Bulk add users`
                    })
                })]
            }), (0, Y.jsx)(`label`, {
                htmlFor: `add-group-member-search`,
                className: `sr-only`,
                children: s.formatMessage(X.searchLabel)
            }), (0, Y.jsx)(se, {
                id: `add-group-member-search`,
                value: m,
                inputClassName: `w-full`,
                placeholder: s.formatMessage(X.searchPlaceholder),
                onChange: e => {
                    y(0), _(e.target.value)
                }
            }), (0, Y.jsxs)(H.Root, {
                className: `min-w-full`,
                children: [(0, Y.jsxs)(H.Header, {
                    children: [(0, Y.jsx)(H.HeaderCell, {
                        children: (0, Y.jsx)(M, {
                            id: `workspaceSettings.groups.addMember.name`,
                            defaultMessage: `Name`
                        })
                    }), (0, Y.jsx)(H.HeaderCell, {
                        children: (0, Y.jsx)(M, {
                            id: `workspaceSettings.groups.addMember.email`,
                            defaultMessage: `Email`
                        })
                    }), (0, Y.jsx)(H.HeaderCell, {})]
                }), (0, Y.jsxs)(H.Body, {
                    children: [!x && ee && (0, Y.jsx)(H.Row, {
                        children: (0, Y.jsx)(H.Cell, {
                            colSpan: 3,
                            textAlign: `center`,
                            children: (0, Y.jsx)(r, {})
                        })
                    }), x?.items.map(e => (0, Y.jsxs)(H.Row, {
                        children: [(0, Y.jsx)(H.Cell, {
                            children: e.name
                        }), (0, Y.jsx)(H.Cell, {
                            children: e.email
                        }), (0, Y.jsx)(H.Cell, {
                            textAlign: `right`,
                            className: `pe-1`,
                            children: (0, Y.jsx)(E, {
                                size: `small`,
                                color: `secondary`,
                                disabled: D.includes(e.id),
                                onClick: () => {
                                    C.includes(e.id) || N(e.id)
                                },
                                icon: C.includes(e.id) ? _e : ve,
                                children: C.includes(e.id) ? (0, Y.jsx)(M, {
                                    id: `workspaceSettings.groups.addMember.addButton`,
                                    defaultMessage: `Added`
                                }) : (0, Y.jsx)(M, {
                                    id: `workspaceSettings.groups.addMember.addedButton`,
                                    defaultMessage: `Add`
                                })
                            })
                        })]
                    }, e.id))]
                })]
            }), j > 1 && (0, Y.jsx)(`div`, {
                className: `flex flex-row justify-center`,
                children: (0, Y.jsx)(de, {
                    currentPage: v,
                    onChangeIndex: e => {
                        y(e)
                    },
                    length: j
                })
            })]
        }),
        B;
    t[16] !== R || t[17] !== z ? (B = (0, Y.jsxs)(`div`, {
        className: `flex flex-col gap-3`,
        children: [R, z]
    }), t[16] = R, t[17] = z, t[18] = B) : B = t[18];
    let V;
    return t[19] !== P || t[20] !== a || t[21] !== L || t[22] !== B || t[23] !== F || t[24] !== p ? (V = (0, Y.jsx)(P, {
        testId: `modal-add-group-member`,
        type: `warning`,
        isOpen: a,
        onClose: F,
        title: p,
        size: `custom`,
        className: `max-w-(--breakpoint-md)`,
        showCloseButton: !0,
        primaryButton: L,
        children: B
    }), t[19] = P, t[20] = a, t[21] = L, t[22] = B, t[23] = F, t[24] = p, t[25] = V) : V = t[25], V
}
async function st(e, t, n) {
    await p.safePatch(`/accounts/{account_id}/group/{group_id}`, {
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
    ct = F(), c(), ue(), pe(), S(), be(), ye(), ge(), D(), O(), ee(), u(), L(), Ae(), Xe(), Ne(), Ce(), x(), J = t(j()), R(), Je(), le(), at(), Ie(), Y = I(), X = P({
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
    let n = A(),
        i = re(),
        {
            role: o
        } = xe(),
        s = o == null ? void 0 : oe(o),
        c = o == null ? void 0 : he(o),
        l = t || !(s || c),
        [u, d] = (0, Z.useState)(``),
        p = ce(u, 300),
        m = N(),
        [h, g] = (0, Z.useState)(0),
        {
            groups: _,
            isError: v,
            isFetching: y,
            isLoading: b,
            isPlaceholderData: x,
            refetch: ee
        } = Re({
            workspaceId: e,
            currPage: h,
            groupFilter: p,
            includeScimGroups: s || c
        }),
        [S, C] = (0, Z.useState)(!1),
        {
            data: w
        } = Ge(e, a(`3020999601`)),
        te = e => {
            e && l || (e && (g(0), d(``)), C(e))
        },
        {
            createGroup: D
        } = Le({
            workspaceId: e,
            currentGroups: _
        }),
        O = _ ? [..._.items] : [];
    if (w && _) {
        let e = w.group;
        if (e) {
            let t = O.filter(({
                id: t
            }) => t !== e.id);
            O = h === 0 ? [{
                ...e,
                num_members: e.num_members ?? 0
            }, ...t] : O
        }
    }
    let k = !v && _ != null && (b || x);
    return (0, Q.jsxs)(Q.Fragment, {
        children: [(0, Q.jsxs)(`div`, {
            className: `mt-6 mb-3 flex flex-row justify-between gap-2`,
            children: [(0, Q.jsx)(se, {
                inputClassName: `w-[250px] rounded-full! text-sm`,
                value: u,
                onChange: e => {
                    d(e.target.value), g(0)
                },
                placeholder: n.formatMessage({
                    id: `workspaceSettings.groups.search`,
                    defaultMessage: `Search group name`
                })
            }), !l && (0, Q.jsx)(E, {
                onClick: () => te(!0),
                icon: f.Plus,
                children: (0, Q.jsx)(M, {
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
                            children: (0, Q.jsx)(M, {
                                id: `workspaceSettings.groups.groupName`,
                                defaultMessage: `Group name`
                            })
                        }), (0, Q.jsx)(H.HeaderCell, {
                            children: (0, Q.jsx)(M, {
                                id: `workspaceSettings.groups.members`,
                                defaultMessage: `Members`
                            })
                        }), (0, Q.jsx)(H.HeaderCell, {
                            children: (0, Q.jsx)(M, {
                                id: `workspaceSettings.groups.created`,
                                defaultMessage: `Created`
                            })
                        }), (0, Q.jsx)(H.HeaderCell, {})]
                    }), (0, Q.jsx)(H.Body, {
                        className: T(!v && (b || x) && `pointer-events-none opacity-50`),
                        children: v ? (0, Q.jsx)(H.Row, {
                            children: (0, Q.jsx)(H.Cell, {
                                colSpan: 4,
                                textAlign: `center`,
                                children: (0, Q.jsxs)(`div`, {
                                    className: `flex min-h-32 flex-col items-center justify-center`,
                                    role: `alert`,
                                    children: [(0, Q.jsx)(`div`, {
                                        className: `text-token-text-secondary text-sm`,
                                        children: (0, Q.jsx)(M, {
                                            id: `workspaceSettings.groups.list.loadError`,
                                            defaultMessage: `We couldn’t load groups.`
                                        })
                                    }), (0, Q.jsx)(E, {
                                        className: `mt-3`,
                                        color: `secondary`,
                                        loading: y,
                                        size: `small`,
                                        type: `button`,
                                        onClick: () => {
                                            ee()
                                        },
                                        children: (0, Q.jsx)(M, {
                                            id: `workspaceSettings.groups.list.retryLoad`,
                                            defaultMessage: `Try again`
                                        })
                                    })]
                                })
                            })
                        }) : _ == null ? (0, Q.jsx)(H.Row, {
                            children: (0, Q.jsx)(H.Cell, {
                                colSpan: 5,
                                textAlign: `center`,
                                children: (0, Q.jsx)(r, {})
                            })
                        }) : O.length === 0 ? (0, Q.jsx)(H.Row, {
                            children: (0, Q.jsx)(H.Cell, {
                                colSpan: 5,
                                textAlign: `center`,
                                children: u === `` ? (0, Q.jsx)(M, {
                                    id: `workspaceSettings.groups.noGroups`,
                                    defaultMessage: `No groups found.`
                                }) : (0, Q.jsx)(M, {
                                    id: `workspaceSettings.groups.noGroupsWithFIlter`,
                                    defaultMessage: `No groups found. Try changing the search query.`
                                })
                            })
                        }) : O.map(t => (0, Q.jsx)(ft, {
                            group: t,
                            workspaceId: e,
                            onAddMember: () => {
                                i.invalidateQueries({
                                    queryKey: [e, `groups`]
                                })
                            },
                            readOnly: l
                        }, t.id))
                    })]
                }), k && (0, Q.jsx)(`div`, {
                    className: `absolute inset-0 z-20 flex items-center justify-center`,
                    children: (0, Q.jsx)(r, {})
                })]
            }), _ && !v && (0, Q.jsx)(`div`, {
                className: `text-center`,
                children: (0, Q.jsx)(de, {
                    length: Math.ceil(_.total / 20),
                    currentPage: Math.min(h, Math.ceil(_.total / 20)),
                    onChangeIndex: e => g(e)
                })
            })]
        }), S && !l && (0, Q.jsx)(Qe, {
            onClose: () => te(!1),
            onSave: async t => {
                let {
                    id: n
                } = await D({
                    name: t,
                    workspaceId: e
                });
                m(`/admin/groups/${n}`)
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
    let t = A(),
        n = d(),
        i = !!n?.isFreeWorkspace(),
        a = !1,
        {
            role: o,
            cloudConsoleM3Enrolled: s
        } = xe(),
        c = s === !0,
        l = o == null ? void 0 : oe(o),
        u = o == null ? void 0 : he(o),
        f = o == null ? void 0 : fe(o),
        p = n?.isEnterprisey(),
        {
            data: m,
            isLoading: h
        } = w(e);
    return i ? (0, Q.jsxs)(Q.Fragment, {
        children: [(0, Q.jsx)(ke, {
            children: (0, Q.jsx)(`title`, {
                children: t.formatMessage($.title)
            })
        }), (0, Q.jsx)(De, {
            contentWidth: `medium`,
            title: t.formatMessage($.title),
            subtitle: (0, Q.jsx)(M, {
                id: `NDDzzF`,
                defaultMessage: `Only workspace admins can edit these settings.`
            })
        }), (0, Q.jsx)(Te, {
            contentWidth: `medium`,
            children: (0, Q.jsx)(We, {})
        })]
    }) : (a = u || l || f || !p ? !0 : !!m?.permissions?.includes(`chatgpt.workspace.member.role.view`), h ? (0, Q.jsx)(`div`, {
        className: `mt-6 flex min-h-[40vh] items-center justify-center`,
        children: (0, Q.jsx)(r, {})
    }) : a ? (0, Q.jsxs)(Q.Fragment, {
        children: [(0, Q.jsx)(ke, {
            children: (0, Q.jsx)(`title`, {
                children: t.formatMessage($.title)
            })
        }), (0, Q.jsx)(De, {
            contentWidth: `medium`,
            title: t.formatMessage($.title),
            subtitle: (0, Q.jsx)(M, {
                id: `admin.groupsSettings.subtitle`,
                defaultMessage: `Only workspace admins can edit these settings. Member counts exclude pending invites.`
            })
        }), (0, Q.jsxs)(Te, {
            contentWidth: `medium`,
            showSpinner: !1,
            children: [c && (0, Q.jsx)(Fe, {}), (0, Q.jsx)(ut, {
                workspaceId: e,
                isCloudConsoleM3ReadOnly: c
            })]
        })]
    }) : (0, Q.jsx)(`div`, {
        className: `m-6`,
        children: (0, Q.jsxs)(`div`, {
            className: `border-token-border-medium bg-token-main-surface-secondary text-token-text-primary flex items-center gap-3 rounded-md border px-4 py-3`,
            children: [(0, Q.jsx)(C, {
                className: `icon-sm interactive-label-warning-secondary shrink-0`
            }), (0, Q.jsx)(M, {
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
    let [i, a] = (0, Z.useState)(!1), o = N(), s = Ke(t);
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
                children: (0, Q.jsx)(M, {
                    id: `workspaceSettings.groups.memberCount`,
                    defaultMessage: `{count} members`,
                    values: {
                        count: t.num_members
                    }
                })
            }), (0, Q.jsx)(H.Cell, {
                children: t.created_time && (0, Q.jsx)(ne, {
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
    o(), c(), ue(), pe(), S(), Ee(), Se(), Pe(), me(), be(), m(), y(), n(), l(), z(), Oe(), L(), s(), Z = t(j()), R(), k(), Je(), Ue(), lt(), Ve(), ze(), et(), Q = I(), $ = P({
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
//# sourceMappingURL=16d1957c-l7wl1qlwanpfuxmk.js.map
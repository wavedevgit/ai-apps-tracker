import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $G as n,
    Az as r,
    Bnt as i,
    F7 as a,
    G5 as o,
    Hn as s,
    I1 as c,
    JT as l,
    K5 as u,
    Knt as d,
    M1 as f,
    Mz as p,
    Nz as m,
    RU as ee,
    Sw as h,
    Un as g,
    VU as _,
    cW as v,
    eat as te,
    gN as y,
    hN as b,
    j7 as x,
    jz as S,
    lW as C,
    nK as w,
    nat as T,
    qT as E,
    ww as D,
    zU as O
} from "./4813494d-ed29bs6yiwucn7st.js";
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
    $b as z,
    I8 as B,
    L8 as V,
    S6t as ae,
    _Cn as oe,
    _dn as se,
    bCn as ce,
    ex as le,
    g6t as ue,
    gCn as de,
    gdn as fe,
    nw as pe,
    tw as me,
    vCn as he
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    Gh as ge,
    Jy as _e,
    Kh as ve,
    Yy as ye
} from "./30901919-om7b3qf5hp4j9x4l.js";
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
} from "./c2675c8c-fpv9s4kvd412dyap.js";
import {
    n as Oe,
    t as ke
} from "./9f2e6d33-favh86igrrldl3up.js";
import {
    i as Ae,
    r as je
} from "./32d3feda-cvf9amyf2w6ko3dw.js";
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
} from "./cc70ddac-bm5rsqoomcnvdfn4.js";
import {
    n as Ve,
    t as He
} from "./68d63dde-hn93v98kdr1bqvrf.js";
import {
    r as Ue,
    t as We
} from "./12cc112f-cybsq8lolwrafw0l.js";
import {
    a as Ge,
    i as Ke,
    n as qe,
    r as Je,
    t as Ye
} from "./8212174c-inm9y27voshwvkby.js";
import {
    n as Xe,
    t as Ze
} from "./9c85c693-i29yj71skmobkkjg.js";

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
    return (0, W.jsx)(h, {
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
            children: (0, W.jsx)(j, {
                id: `workspaceSettings.groups.save`,
                defaultMessage: `Save`
            })
        }),
        secondaryButton: (0, W.jsx)(E, {
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
    O(), l(), D(), U = t(F()), N(), W = k(), $e = A({
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
        o = f(),
        [s, c] = (0, G.useState)([]),
        [l, u] = (0, G.useState)(!1),
        [d, p] = (0, G.useState)([]);
    async function m() {
        let t = o?.getWorkspaceId();
        if (!t) throw Error(`No workspace ID found`);
        u(!0), p([]);
        let a = [];
        for (let e = 0; e < s.length; e += 50) a.push(s.slice(e, e + 50));
        let c = async n => x.safePost(`/accounts/{account_id}/group/{group_id}/users`, {
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
            o.length > 0 ? (p(o), i.warning(r.formatMessage({
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
    return (0, K.jsxs)(h, {
        testId: `modal-bulk-add-group-members`,
        isOpen: t,
        onClose: n ?? y,
        title: a,
        type: `success`,
        showCloseButton: !0,
        primaryButton: (0, K.jsx)(E, {
            onClick: m,
            disabled: s.length === 0 || s.length > q,
            loading: l,
            children: (0, K.jsx)(j, {
                id: `EpbOzA`,
                defaultMessage: `Add users to group`
            })
        }),
        children: [(0, K.jsx)(nt, {
            onChange: e => {
                c(e), p([])
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
        }), d.length > 0 && (0, K.jsxs)(`div`, {
            className: `border-token-border-light mt-4 rounded-lg border p-3`,
            children: [(0, K.jsx)(`p`, {
                className: `text-token-interactive-label-warning-secondary text-sm font-medium`,
                children: (0, K.jsx)(j, {
                    id: `workspaceSettings.groups.bulkAddMembers.rejectedUsers.heading`,
                    defaultMessage: `{numRejectedUsers, plural, one {# user wasn't added} other {# users weren't added}}`,
                    values: {
                        numRejectedUsers: d.length
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
                        children: d.map(({
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
`).map(e => e.trim()).filter(e => e.length > 0).filter(e => g.test(e))
}
var G, K, it, q, at = e((() => {
    l(), V(), D(), c(), O(), s(), a(), b(), G = t(F()), N(), Je(), K = k(), it = A({
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
        s = R(),
        c = re(),
        [l, u] = (0, J.useState)(`users`),
        d = ee(),
        f;
    t[0] !== i.name || t[1] !== s ? (f = s.formatMessage({
        id: `workspaceSettings.addGroupsMembersModal.title`,
        defaultMessage: `Add members to the {groupName} group`
    }, {
        groupName: i.name
    }), t[0] = i.name, t[1] = s, t[2] = f) : f = t[2];
    let p = f,
        [m, g] = (0, J.useState)(``),
        [_, v] = (0, J.useState)(0),
        {
            data: b,
            isLoading: x
        } = ae(n, _ * 25, m, 25, ie),
        S;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (S = [], t[3] = S) : S = t[3];
    let [C, w] = (0, J.useState)(S), T;
    t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (T = [], t[4] = T) : T = t[4];
    let [D, O] = (0, J.useState)(T), [ne, k] = (0, J.useState)(`interactive`), A = b ? Math.ceil((b.total ?? 0) / 25) : 0, M = function(e) {
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
    if (ne === `batch`) {
        let e;
        return t[5] !== i || t[6] !== a || t[7] !== o ? (e = (0, Y.jsx)(tt, {
            group: i,
            isOpen: a,
            onClose: o
        }), t[5] = i, t[6] = a, t[7] = o, t[8] = e) : e = t[8], e
    }
    let N = h,
        P = o ?? y,
        F;
    t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (F = (0, Y.jsx)(j, {
        id: `workspaceSettings.groups.addMember.doneButton`,
        defaultMessage: `Done`
    }), t[9] = F) : F = t[9];
    let I;
    t[10] === o ? I = t[11] : (I = (0, Y.jsx)(E, {
        type: `button`,
        onClick: o,
        children: F
    }), t[10] = o, t[11] = I);
    let L;
    t[12] !== s || t[13] !== l || t[14] !== n ? (L = n && xe(n) && (0, Y.jsx)(je, {
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
    }), t[12] = s, t[13] = l, t[14] = n, t[15] = L) : L = t[15];
    let z = n && xe(n) && l === `service-accounts` ? (0, Y.jsx)(Ze, {
            workspaceId: n,
            groupId: i.id,
            assignedIds: new Set(C),
            onAdd: async e => {
                if (!await M(e.service_account_user_id)) throw Error(`Group membership was not saved`)
            }
        }, `${n}:${i.id}`) : (0, Y.jsxs)(Y.Fragment, {
            children: [(0, Y.jsxs)(`div`, {
                className: `flex flex-row justify-between`,
                children: [(0, Y.jsx)(`p`, {
                    children: p
                }), (0, Y.jsx)(E, {
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
            }), (0, Y.jsx)(fe, {
                id: `add-group-member-search`,
                value: m,
                inputClassName: `w-full`,
                placeholder: s.formatMessage(X.searchPlaceholder),
                onChange: e => {
                    v(0), g(e.target.value)
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
                    children: [!b && x && (0, Y.jsx)(H.Row, {
                        children: (0, Y.jsx)(H.Cell, {
                            colSpan: 3,
                            textAlign: `center`,
                            children: (0, Y.jsx)(r, {})
                        })
                    }), b?.items.map(e => (0, Y.jsxs)(H.Row, {
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
                                    C.includes(e.id) || M(e.id)
                                },
                                icon: C.includes(e.id) ? _e : ve,
                                children: C.includes(e.id) ? (0, Y.jsx)(j, {
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
                children: (0, Y.jsx)(me, {
                    currentPage: _,
                    onChangeIndex: e => {
                        v(e)
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
    return t[19] !== N || t[20] !== a || t[21] !== I || t[22] !== B || t[23] !== P || t[24] !== p ? (V = (0, Y.jsx)(N, {
        testId: `modal-add-group-member`,
        type: `warning`,
        isOpen: a,
        onClose: P,
        title: p,
        size: `custom`,
        className: `max-w-(--breakpoint-md)`,
        showCloseButton: !0,
        primaryButton: I,
        children: B
    }), t[19] = N, t[20] = a, t[21] = I, t[22] = B, t[23] = P, t[24] = p, t[25] = V) : V = t[25], V
}
async function st(e, t, n) {
    await x.safePatch(`/accounts/{account_id}/group/{group_id}`, {
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
    ct = L(), l(), pe(), se(), S(), we(), ye(), ge(), D(), O(), T(), a(), I(), Ae(), Xe(), Ne(), Ce(), b(), J = t(F()), N(), Je(), ue(), at(), Ie(), Y = k(), X = A({
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
        a = re(),
        {
            role: s
        } = Se(),
        c = s == null ? void 0 : de(s),
        l = s == null ? void 0 : he(s),
        u = t || !(c || l),
        [d, f] = (0, Z.useState)(``),
        m = le(d, 300),
        ee = M(),
        [h, g] = (0, Z.useState)(0),
        {
            groups: _,
            isError: v,
            isFetching: te,
            isLoading: y,
            isPlaceholderData: b,
            refetch: x
        } = Re({
            workspaceId: e,
            currPage: h,
            groupFilter: m,
            includeScimGroups: c || l
        }),
        [S, C] = (0, Z.useState)(!1),
        {
            data: w
        } = Ge(e, i(`3020999601`)),
        T = e => {
            e && u || (e && (g(0), f(``)), C(e))
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
    let ne = !v && _ != null && (y || b);
    return (0, Q.jsxs)(Q.Fragment, {
        children: [(0, Q.jsxs)(`div`, {
            className: `mt-6 mb-3 flex flex-row justify-between gap-2`,
            children: [(0, Q.jsx)(fe, {
                inputClassName: `w-[250px] rounded-full! text-sm`,
                value: d,
                onChange: e => {
                    f(e.target.value), g(0)
                },
                placeholder: n.formatMessage({
                    id: `workspaceSettings.groups.search`,
                    defaultMessage: `Search group name`
                })
            }), !u && (0, Q.jsx)(E, {
                onClick: () => T(!0),
                icon: p.Plus,
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
                        className: o(!v && (y || b) && `pointer-events-none opacity-50`),
                        children: v ? (0, Q.jsx)(H.Row, {
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
                                    }), (0, Q.jsx)(E, {
                                        className: `mt-3`,
                                        color: `secondary`,
                                        loading: te,
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
                                children: d === `` ? (0, Q.jsx)(j, {
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
                                a.invalidateQueries({
                                    queryKey: [e, `groups`]
                                })
                            },
                            readOnly: u
                        }, t.id))
                    })]
                }), ne && (0, Q.jsx)(`div`, {
                    className: `absolute inset-0 z-20 flex items-center justify-center`,
                    children: (0, Q.jsx)(r, {})
                })]
            }), _ && !v && (0, Q.jsx)(`div`, {
                className: `text-center`,
                children: (0, Q.jsx)(me, {
                    length: Math.ceil(_.total / 20),
                    currentPage: Math.min(h, Math.ceil(_.total / 20)),
                    onChangeIndex: e => g(e)
                })
            })]
        }), S && !u && (0, Q.jsx)(Qe, {
            onClose: () => T(!1),
            onSave: async t => {
                let {
                    id: n
                } = await D({
                    name: t,
                    workspaceId: e
                });
                ee(`/admin/groups/${n}`)
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
        n = f(),
        i = !!n?.isFreeWorkspace(),
        a = !1,
        {
            role: o,
            cloudConsoleM3Enrolled: s
        } = Se(),
        c = s === !0,
        l = o == null ? void 0 : de(o),
        u = o == null ? void 0 : he(o),
        d = o == null ? void 0 : oe(o),
        p = n?.isEnterprisey(),
        {
            data: m,
            isLoading: ee
        } = w(e);
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
    }) : (a = u || l || d || !p ? !0 : !!m?.permissions?.includes(`chatgpt.workspace.member.role.view`), ee ? (0, Q.jsx)(`div`, {
        className: `mt-6 flex min-h-[40vh] items-center justify-center`,
        children: (0, Q.jsx)(r, {})
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
    c(), l(), pe(), se(), S(), Te(), De(), Pe(), ce(), we(), m(), v(), n(), d(), z(), Oe(), I(), u(), Z = t(F()), N(), ne(), Je(), Ue(), lt(), Ve(), ze(), et(), Q = k(), $ = A({
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
//# sourceMappingURL=16d1957c-fce9hc7mxxkbq9o4.js.map
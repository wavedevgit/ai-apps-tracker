import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as n,
    $T as r,
    Aw as i,
    Bz as a,
    Eat as o,
    Hn as s,
    IU as c,
    LU as l,
    Ow as u,
    Rz as d,
    SN as f,
    U1 as p,
    Un as m,
    Vz as h,
    Y7 as g,
    ZG as _,
    eE as v,
    eK as ee,
    grt as y,
    l7 as te,
    oW as b,
    q1 as x,
    sW as S,
    u7 as C,
    urt as ne,
    wat as re,
    xN as w,
    zU as T,
    zz as E
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    Bn as D,
    Ln as O,
    N as ie,
    Nn as k,
    Nt as A,
    Q as ae,
    Rn as j,
    Tn as M,
    Vn as N,
    q as oe,
    s as P,
    wn as F,
    zn as I
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    E6t as L,
    H8 as R,
    Ldn as se,
    M6t as ce,
    Rdn as z,
    U8 as le,
    ex as ue,
    iwn as de,
    nw as fe,
    nwn as pe,
    own as me,
    rw as he,
    rwn as ge,
    tx as _e
} from "./conversation-small-fh0oqifngkf5rvl1.js";
import {
    Gh as ve,
    Jy as ye,
    Kh as be,
    Yy as xe
} from "./30901919-cmi3nh547dwrqkxv.js";
import {
    Bs as Se,
    Fv as B,
    Iv as Ce,
    Rs as we,
    fl as Te,
    is as Ee,
    ns as De,
    pl as Oe,
    ss as ke
} from "./c2675c8c-4fpunyxk1uf8cfp1.js";
import {
    n as Ae,
    t as je
} from "./9f2e6d33-h33rm8r24h08gyr1.js";
import {
    i as Me,
    r as Ne
} from "./32d3feda-bh06w3pduc5hpv1h.js";
import {
    n as Pe,
    t as Fe
} from "./2d8fa5e7-lngzyesyaikkyzce.js";
import {
    i as Ie,
    t as Le
} from "./552e61db-bshpkao8z1edj0cq.js";
import {
    l as Re,
    n as ze,
    o as Be,
    t as Ve,
    u as He
} from "./cc70ddac-j2c1hze2nsonvjs5.js";
import {
    n as Ue,
    t as We
} from "./68d63dde-ez7swzblx8uyd5ww.js";
import {
    r as Ge,
    t as Ke
} from "./12cc112f-c6peav7cg1wbxzdb.js";
import {
    a as qe,
    i as V,
    n as Je,
    r as H,
    t as Ye
} from "./8212174c-l5n3bd1s36619bbf.js";
import {
    n as Xe,
    t as Ze
} from "./9c85c693-cvkchfw8osmwov5i.js";

function Qe({
    defaultName: e,
    placeholder: t,
    onSave: n,
    onClose: i
}) {
    let a = I(),
        o = e == null,
        [s, c] = (0, U.useState)(e || ``),
        [l, d] = (0, U.useState)(!1),
        [f, p] = (0, U.useState)(null),
        m = T(),
        h = async () => {
            if (s.trim() === ``) {
                p(a.formatMessage({
                    id: `workspaceSettings.groups.emptyName`,
                    defaultMessage: `Group name cannot be empty`
                }));
                return
            }
            d(!0);
            try {
                await n(s), m.success(o ? a.formatMessage({
                    id: `workspaceSettings.groups.createdGroup`,
                    defaultMessage: `Group created successfully`
                }) : a.formatMessage({
                    id: `workspaceSettings.groups.nameChanged`,
                    defaultMessage: `Group name changed successfully`
                })), i()
            } catch {
                p(a.formatMessage({
                    id: `workspaceSettings.groups.duplicateName`,
                    defaultMessage: `Group with this name already exists`
                }))
            } finally {
                d(!1)
            }
        };
    return (0, W.jsx)(u, {
        isOpen: !0,
        type: `success`,
        onClose: i,
        title: o ? a.formatMessage($e.newGroupTitle) : a.formatMessage($e.updateNameTitle),
        testId: `modal-change-group-name`,
        showCloseButton: !0,
        primaryButton: (0, W.jsx)(r, {
            color: `primary`,
            onClick: () => h(),
            loading: l,
            children: (0, W.jsx)(k, {
                id: `workspaceSettings.groups.save`,
                defaultMessage: `Save`
            })
        }),
        secondaryButton: (0, W.jsx)(r, {
            onClick: i,
            color: `secondary`,
            children: (0, W.jsx)(k, {
                id: `workspaceSettings.groups.cancel`,
                defaultMessage: `Cancel`
            })
        }),
        children: (0, W.jsxs)(`div`, {
            className: `mb-3 flex flex-col gap-2`,
            children: [(0, W.jsx)(`label`, {
                className: `text-sm font-medium`,
                children: (0, W.jsx)(k, {
                    id: `workspaceSettings.groups.groupNameLabel`,
                    defaultMessage: `Group Name`
                })
            }), (0, W.jsx)(`input`, {
                autoFocus: !0,
                type: `text`,
                value: s,
                placeholder: t,
                onChange: e => {
                    c(e.target.value), p(null)
                },
                className: `border-token-border-secondary focus:border-token-accent bg-token-bg-primary w-full rounded border px-3 py-2 text-sm focus:outline-none`,
                onKeyDown: e => {
                    e.key === `Enter` && h()
                }
            }), f && (0, W.jsx)(`p`, {
                className: `text-xs text-red-500`,
                children: f
            })]
        })
    })
}
var U, W, $e, et = e((() => {
    l(), v(), i(), U = t(N()), j(), W = D(), $e = O({
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
    let i = I(),
        a = T(),
        o = i.formatMessage({
            id: `workspaceSettings.groups.addMember`,
            defaultMessage: `Add members to the {groupName} group`
        }, {
            groupName: e.name
        }),
        s = p(),
        [c, l] = (0, G.useState)([]),
        [d, m] = (0, G.useState)(!1),
        [h, _] = (0, G.useState)([]);
    async function v() {
        let t = s?.getWorkspaceId();
        if (!t) throw Error(`No workspace ID found`);
        m(!0), _([]);
        let r = [];
        for (let e = 0; e < c.length; e += 50) r.push(c.slice(e, e + 50));
        let o = async n => g.safePost(`/accounts/{account_id}/group/{group_id}/users`, {
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
            let e = await Promise.all(r.map(e => o(e))),
                t = e.reduce((e, t) => e + t.added_group_users.length, 0),
                s = e.flatMap(e => e.rejected_group_users ?? []);
            s.length > 0 ? (_(s), a.warning(i.formatMessage({
                id: `workspaceSettings.groups.bulkAddMembers.partialSuccessToast`,
                defaultMessage: `{numUsers, plural, one {Added # user.} other {Added # users.}} {numRejectedUsers, plural, one {# user couldn't be added.} other {# users couldn't be added.}}`
            }, {
                numUsers: t,
                numRejectedUsers: s.length
            }))) : (a.success(i.formatMessage({
                id: `yU4Zf0`,
                defaultMessage: `Added {numUsers} users to the group`
            }, {
                numUsers: t
            })), n?.())
        } catch (t) {
            let n = Je(i, t, {
                targetIsRestrictedSafeModeGroup: V(e)
            }) ?? i.formatMessage(it.bulkAddMembersError);
            a.danger(n, {
                duration: 3
            })
        } finally {
            m(!1)
        }
    }
    return (0, K.jsxs)(u, {
        testId: `modal-bulk-add-group-members`,
        isOpen: t,
        onClose: n ?? f,
        title: o,
        type: `success`,
        showCloseButton: !0,
        primaryButton: (0, K.jsx)(r, {
            onClick: v,
            disabled: c.length === 0 || c.length > q,
            loading: d,
            children: (0, K.jsx)(k, {
                id: `EpbOzA`,
                defaultMessage: `Add users to group`
            })
        }),
        children: [(0, K.jsx)(nt, {
            onChange: e => {
                l(e), _([])
            }
        }), c.length > q && (0, K.jsx)(`div`, {
            className: `text-token-text-error mt-2 text-sm`,
            children: (0, K.jsx)(k, {
                id: `9lp0Tc`,
                defaultMessage: `Email list is limited to {maxEmails} users at once`,
                values: {
                    maxEmails: q
                }
            })
        }), h.length > 0 && (0, K.jsxs)(`div`, {
            className: `border-token-border-light mt-4 rounded-lg border p-3`,
            children: [(0, K.jsx)(`p`, {
                className: `text-token-interactive-label-warning-secondary text-sm font-medium`,
                children: (0, K.jsx)(k, {
                    id: `workspaceSettings.groups.bulkAddMembers.rejectedUsers.heading`,
                    defaultMessage: `{numRejectedUsers, plural, one {# user wasn't added} other {# users weren't added}}`,
                    values: {
                        numRejectedUsers: h.length
                    }
                })
            }), (0, K.jsx)(`p`, {
                className: `text-token-text-secondary mt-1 text-sm`,
                children: (0, K.jsx)(k, {
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
                                children: (0, K.jsx)(k, {
                                    id: `workspaceSettings.groups.bulkAddMembers.rejectedUsers.table.emailColumn`,
                                    defaultMessage: `Email`
                                })
                            }), (0, K.jsx)(`th`, {
                                scope: `col`,
                                className: `pb-1 font-medium`,
                                children: (0, K.jsx)(k, {
                                    id: `workspaceSettings.groups.bulkAddMembers.rejectedUsers.table.reasonColumn`,
                                    defaultMessage: `Reason`
                                })
                            })]
                        })
                    }), (0, K.jsx)(`tbody`, {
                        children: h.map(({
                            email_address: e
                        }, t) => (0, K.jsxs)(`tr`, {
                            children: [(0, K.jsx)(`td`, {
                                className: `py-1 pe-4`,
                                children: e
                            }), (0, K.jsx)(`td`, {
                                className: `py-1`,
                                children: (0, K.jsx)(k, {
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
            children: [(0, K.jsx)(k, {
                id: `qvGcSC`,
                defaultMessage: `Emails`
            }), (0, K.jsx)(`br`, {}), (0, K.jsx)(`span`, {
                className: `text-token-text-tertiary text-sm`,
                children: (0, K.jsx)(k, {
                    id: `Fhd+5h`,
                    defaultMessage: `Paste email addresses here, one per line:`
                })
            })]
        }), (0, K.jsx)(R, {
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
`).map(e => e.trim()).filter(e => e.length > 0).filter(e => m.test(e))
}
var G, K, it, q, at = e((() => {
    v(), le(), i(), x(), l(), s(), n(), w(), G = t(N()), j(), H(), K = D(), it = O({
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
        s = I(),
        l = ie(),
        [p, m] = (0, J.useState)(`users`),
        h = c(),
        g;
    t[0] !== i.name || t[1] !== s ? (g = s.formatMessage({
        id: `workspaceSettings.addGroupsMembersModal.title`,
        defaultMessage: `Add members to the {groupName} group`
    }, {
        groupName: i.name
    }), t[0] = i.name, t[1] = s, t[2] = g) : g = t[2];
    let _ = g,
        [v, ee] = (0, J.useState)(``),
        [y, te] = (0, J.useState)(0),
        {
            data: b,
            isLoading: x
        } = ce(n, y * 25, v, 25, oe),
        S;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (S = [], t[3] = S) : S = t[3];
    let [C, ne] = (0, J.useState)(S), w;
    t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (w = [], t[4] = w) : w = t[4];
    let [T, E] = (0, J.useState)(w), [D, O] = (0, J.useState)(`interactive`), A = b ? Math.ceil((b.total ?? 0) / 25) : 0, ae = function(e) {
        return E(t => [...t, e]), st(n, i.id, e).then(async () => (ne(t => [...t, e]), await He(l, n), !0)).catch(e => {
            re.addError(e);
            let t = Je(s, e, {
                targetIsRestrictedSafeModeGroup: V(i)
            }) ?? s.formatMessage(X.addMemberError);
            return h.danger(t, {
                duration: 3
            }), !1
        }).finally(() => {
            E(t => t.filter(t => t !== e))
        })
    };
    if (D === `batch`) {
        let e;
        return t[5] !== i || t[6] !== a || t[7] !== o ? (e = (0, Y.jsx)(tt, {
            group: i,
            isOpen: a,
            onClose: o
        }), t[5] = i, t[6] = a, t[7] = o, t[8] = e) : e = t[8], e
    }
    let j = u,
        M = o ?? f,
        N;
    t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (N = (0, Y.jsx)(k, {
        id: `workspaceSettings.groups.addMember.doneButton`,
        defaultMessage: `Done`
    }), t[9] = N) : N = t[9];
    let P;
    t[10] === o ? P = t[11] : (P = (0, Y.jsx)(r, {
        type: `button`,
        onClick: o,
        children: N
    }), t[10] = o, t[11] = P);
    let F;
    t[12] !== s || t[13] !== p || t[14] !== n ? (F = n && Se(n) && (0, Y.jsx)(Ne, {
        activeTab: p,
        onTabChange: m,
        items: [{
            key: `users`,
            label: s.formatMessage({
                id: `workspaceSettings.groups.addMember.users`,
                defaultMessage: `Users`
            }),
            children: null
        }, {
            key: `service-accounts`,
            label: s.formatMessage(Pe.serviceAccounts),
            children: null
        }]
    }), t[12] = s, t[13] = p, t[14] = n, t[15] = F) : F = t[15];
    let L = n && Se(n) && p === `service-accounts` ? (0, Y.jsx)(Ze, {
            workspaceId: n,
            groupId: i.id,
            assignedIds: new Set(C),
            onAdd: async e => {
                if (!await ae(e.service_account_user_id)) throw Error(`Group membership was not saved`)
            }
        }, `${n}:${i.id}`) : (0, Y.jsxs)(Y.Fragment, {
            children: [(0, Y.jsxs)(`div`, {
                className: `flex flex-row justify-between`,
                children: [(0, Y.jsx)(`p`, {
                    children: _
                }), (0, Y.jsx)(r, {
                    onClick: () => {
                        O(`batch`)
                    },
                    color: `secondary`,
                    children: (0, Y.jsx)(k, {
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
                value: v,
                inputClassName: `w-full`,
                placeholder: s.formatMessage(X.searchPlaceholder),
                onChange: e => {
                    te(0), ee(e.target.value)
                }
            }), (0, Y.jsxs)(B.Root, {
                className: `min-w-full`,
                children: [(0, Y.jsxs)(B.Header, {
                    children: [(0, Y.jsx)(B.HeaderCell, {
                        children: (0, Y.jsx)(k, {
                            id: `workspaceSettings.groups.addMember.name`,
                            defaultMessage: `Name`
                        })
                    }), (0, Y.jsx)(B.HeaderCell, {
                        children: (0, Y.jsx)(k, {
                            id: `workspaceSettings.groups.addMember.email`,
                            defaultMessage: `Email`
                        })
                    }), (0, Y.jsx)(B.HeaderCell, {})]
                }), (0, Y.jsxs)(B.Body, {
                    children: [!b && x && (0, Y.jsx)(B.Row, {
                        children: (0, Y.jsx)(B.Cell, {
                            colSpan: 3,
                            textAlign: `center`,
                            children: (0, Y.jsx)(d, {})
                        })
                    }), b?.items.map(e => (0, Y.jsxs)(B.Row, {
                        children: [(0, Y.jsx)(B.Cell, {
                            children: e.name
                        }), (0, Y.jsx)(B.Cell, {
                            children: e.email
                        }), (0, Y.jsx)(B.Cell, {
                            textAlign: `right`,
                            className: `pe-1`,
                            children: (0, Y.jsx)(r, {
                                size: `small`,
                                color: `secondary`,
                                disabled: T.includes(e.id),
                                onClick: () => {
                                    C.includes(e.id) || ae(e.id)
                                },
                                icon: C.includes(e.id) ? ye : be,
                                children: C.includes(e.id) ? (0, Y.jsx)(k, {
                                    id: `workspaceSettings.groups.addMember.addButton`,
                                    defaultMessage: `Added`
                                }) : (0, Y.jsx)(k, {
                                    id: `workspaceSettings.groups.addMember.addedButton`,
                                    defaultMessage: `Add`
                                })
                            })
                        })]
                    }, e.id))]
                })]
            }), A > 1 && (0, Y.jsx)(`div`, {
                className: `flex flex-row justify-center`,
                children: (0, Y.jsx)(fe, {
                    currentPage: y,
                    onChangeIndex: e => {
                        te(e)
                    },
                    length: A
                })
            })]
        }),
        R;
    t[16] !== F || t[17] !== L ? (R = (0, Y.jsxs)(`div`, {
        className: `flex flex-col gap-3`,
        children: [F, L]
    }), t[16] = F, t[17] = L, t[18] = R) : R = t[18];
    let z;
    return t[19] !== j || t[20] !== a || t[21] !== P || t[22] !== R || t[23] !== M || t[24] !== _ ? (z = (0, Y.jsx)(j, {
        testId: `modal-add-group-member`,
        type: `warning`,
        isOpen: a,
        onClose: M,
        title: _,
        size: `custom`,
        className: `max-w-(--breakpoint-md)`,
        showCloseButton: !0,
        primaryButton: P,
        children: R
    }), t[19] = j, t[20] = a, t[21] = P, t[22] = R, t[23] = M, t[24] = _, t[25] = z) : z = t[25], z
}
async function st(e, t, n) {
    await g.safePatch(`/accounts/{account_id}/group/{group_id}`, {
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
    ct = F(), v(), he(), z(), E(), Ce(), xe(), ve(), i(), l(), o(), n(), P(), Me(), Xe(), Fe(), we(), w(), J = t(N()), j(), H(), L(), at(), Re(), Y = D(), X = O({
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
    let n = I(),
        i = ie(),
        {
            role: o
        } = Oe(),
        s = o == null ? void 0 : pe(o),
        c = o == null ? void 0 : de(o),
        l = t || !(s || c),
        [u, f] = (0, Z.useState)(``),
        p = _e(u, 300),
        m = A(),
        [h, g] = (0, Z.useState)(0),
        {
            groups: _,
            isError: v,
            isFetching: ee,
            isLoading: y,
            isPlaceholderData: b,
            refetch: x
        } = Be({
            workspaceId: e,
            currPage: h,
            groupFilter: p,
            includeScimGroups: s || c
        }),
        [S, C] = (0, Z.useState)(!1),
        {
            data: re
        } = qe(e, ne(`3020999601`)),
        w = e => {
            e && l || (e && (g(0), f(``)), C(e))
        },
        {
            createGroup: T
        } = ze({
            workspaceId: e,
            currentGroups: _
        }),
        E = _ ? [..._.items] : [];
    if (re && _) {
        let e = re.group;
        if (e) {
            let t = E.filter(({
                id: t
            }) => t !== e.id);
            E = h === 0 ? [{
                ...e,
                num_members: e.num_members ?? 0
            }, ...t] : E
        }
    }
    let D = !v && _ != null && (y || b);
    return (0, Q.jsxs)(Q.Fragment, {
        children: [(0, Q.jsxs)(`div`, {
            className: `mt-6 mb-3 flex flex-row justify-between gap-2`,
            children: [(0, Q.jsx)(se, {
                inputClassName: `w-[250px] rounded-full! text-sm`,
                value: u,
                onChange: e => {
                    f(e.target.value), g(0)
                },
                placeholder: n.formatMessage({
                    id: `workspaceSettings.groups.search`,
                    defaultMessage: `Search group name`
                })
            }), !l && (0, Q.jsx)(r, {
                onClick: () => w(!0),
                icon: a.Plus,
                children: (0, Q.jsx)(k, {
                    id: `workspaceSettings.groups.create`,
                    defaultMessage: `Create group`
                })
            })]
        }), (0, Q.jsxs)(`div`, {
            children: [(0, Q.jsxs)(`div`, {
                className: `relative`,
                children: [(0, Q.jsxs)(B.Root, {
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
                    }), (0, Q.jsxs)(B.Header, {
                        children: [(0, Q.jsx)(B.HeaderCell, {
                            children: (0, Q.jsx)(k, {
                                id: `workspaceSettings.groups.groupName`,
                                defaultMessage: `Group name`
                            })
                        }), (0, Q.jsx)(B.HeaderCell, {
                            children: (0, Q.jsx)(k, {
                                id: `workspaceSettings.groups.members`,
                                defaultMessage: `Members`
                            })
                        }), (0, Q.jsx)(B.HeaderCell, {
                            children: (0, Q.jsx)(k, {
                                id: `workspaceSettings.groups.created`,
                                defaultMessage: `Created`
                            })
                        }), (0, Q.jsx)(B.HeaderCell, {})]
                    }), (0, Q.jsx)(B.Body, {
                        className: te(!v && (y || b) && `pointer-events-none opacity-50`),
                        children: v ? (0, Q.jsx)(B.Row, {
                            children: (0, Q.jsx)(B.Cell, {
                                colSpan: 4,
                                textAlign: `center`,
                                children: (0, Q.jsxs)(`div`, {
                                    className: `flex min-h-32 flex-col items-center justify-center`,
                                    role: `alert`,
                                    children: [(0, Q.jsx)(`div`, {
                                        className: `text-token-text-secondary text-sm`,
                                        children: (0, Q.jsx)(k, {
                                            id: `workspaceSettings.groups.list.loadError`,
                                            defaultMessage: `We couldn’t load groups.`
                                        })
                                    }), (0, Q.jsx)(r, {
                                        className: `mt-3`,
                                        color: `secondary`,
                                        loading: ee,
                                        size: `small`,
                                        type: `button`,
                                        onClick: () => {
                                            x()
                                        },
                                        children: (0, Q.jsx)(k, {
                                            id: `workspaceSettings.groups.list.retryLoad`,
                                            defaultMessage: `Try again`
                                        })
                                    })]
                                })
                            })
                        }) : _ == null ? (0, Q.jsx)(B.Row, {
                            children: (0, Q.jsx)(B.Cell, {
                                colSpan: 5,
                                textAlign: `center`,
                                children: (0, Q.jsx)(d, {})
                            })
                        }) : E.length === 0 ? (0, Q.jsx)(B.Row, {
                            children: (0, Q.jsx)(B.Cell, {
                                colSpan: 5,
                                textAlign: `center`,
                                children: u === `` ? (0, Q.jsx)(k, {
                                    id: `workspaceSettings.groups.noGroups`,
                                    defaultMessage: `No groups found.`
                                }) : (0, Q.jsx)(k, {
                                    id: `workspaceSettings.groups.noGroupsWithFIlter`,
                                    defaultMessage: `No groups found. Try changing the search query.`
                                })
                            })
                        }) : E.map(t => (0, Q.jsx)(ft, {
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
                }), D && (0, Q.jsx)(`div`, {
                    className: `absolute inset-0 z-20 flex items-center justify-center`,
                    children: (0, Q.jsx)(d, {})
                })]
            }), _ && !v && (0, Q.jsx)(`div`, {
                className: `text-center`,
                children: (0, Q.jsx)(fe, {
                    length: Math.ceil(_.total / 20),
                    currentPage: Math.min(h, Math.ceil(_.total / 20)),
                    onChangeIndex: e => g(e)
                })
            })]
        }), S && !l && (0, Q.jsx)(Qe, {
            onClose: () => w(!1),
            onSave: async t => {
                let {
                    id: n
                } = await T({
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
    let t = I(),
        n = p(),
        r = !!n?.isFreeWorkspace(),
        i = !1,
        {
            role: a,
            cloudConsoleM3Enrolled: o
        } = Oe(),
        s = o === !0,
        c = a == null ? void 0 : pe(a),
        l = a == null ? void 0 : de(a),
        u = a == null ? void 0 : ge(a),
        f = n?.isEnterprisey(),
        {
            data: m,
            isLoading: h
        } = ee(e);
    return r ? (0, Q.jsxs)(Q.Fragment, {
        children: [(0, Q.jsx)(je, {
            children: (0, Q.jsx)(`title`, {
                children: t.formatMessage($.title)
            })
        }), (0, Q.jsx)(Ee, {
            contentWidth: `medium`,
            title: t.formatMessage($.title),
            subtitle: (0, Q.jsx)(k, {
                id: `NDDzzF`,
                defaultMessage: `Only workspace admins can edit these settings.`
            })
        }), (0, Q.jsx)(De, {
            contentWidth: `medium`,
            children: (0, Q.jsx)(Ke, {})
        })]
    }) : (i = l || c || u || !f ? !0 : !!m?.permissions?.includes(`chatgpt.workspace.member.role.view`), h ? (0, Q.jsx)(`div`, {
        className: `mt-6 flex min-h-[40vh] items-center justify-center`,
        children: (0, Q.jsx)(d, {})
    }) : i ? (0, Q.jsxs)(Q.Fragment, {
        children: [(0, Q.jsx)(je, {
            children: (0, Q.jsx)(`title`, {
                children: t.formatMessage($.title)
            })
        }), (0, Q.jsx)(Ee, {
            contentWidth: `medium`,
            title: t.formatMessage($.title),
            subtitle: (0, Q.jsx)(k, {
                id: `admin.groupsSettings.subtitle`,
                defaultMessage: `Only workspace admins can edit these settings. Member counts exclude pending invites.`
            })
        }), (0, Q.jsxs)(De, {
            contentWidth: `medium`,
            showSpinner: !1,
            children: [s && (0, Q.jsx)(Le, {}), (0, Q.jsx)(ut, {
                workspaceId: e,
                isCloudConsoleM3ReadOnly: s
            })]
        })]
    }) : (0, Q.jsx)(`div`, {
        className: `m-6`,
        children: (0, Q.jsxs)(`div`, {
            className: `border-token-border-medium bg-token-main-surface-secondary text-token-text-primary flex items-center gap-3 rounded-md border px-4 py-3`,
            children: [(0, Q.jsx)(S, {
                className: `icon-sm interactive-label-warning-secondary shrink-0`
            }), (0, Q.jsx)(k, {
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
    let [i, a] = (0, Z.useState)(!1), o = A(), s = V(t);
    return (0, Q.jsxs)(Q.Fragment, {
        children: [(0, Q.jsxs)(B.Row, {
            className: `[&>td]:py-2`,
            onClick: () => o(`/admin/groups/${t.id}`),
            children: [(0, Q.jsxs)(B.Cell, {
                children: [(0, Q.jsx)(We, {
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
            }), (0, Q.jsx)(B.Cell, {
                children: (0, Q.jsx)(k, {
                    id: `workspaceSettings.groups.memberCount`,
                    defaultMessage: `{count} members`,
                    values: {
                        count: t.num_members
                    }
                })
            }), (0, Q.jsx)(B.Cell, {
                children: t.created_time && (0, Q.jsx)(M, {
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
    x(), v(), he(), z(), E(), ke(), Te(), Ie(), me(), Ce(), h(), b(), _(), y(), ue(), Ae(), P(), C(), Z = t(N()), j(), ae(), H(), Ge(), lt(), Ue(), Ve(), et(), Q = D(), $ = O({
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
//# sourceMappingURL=16d1957c-na62e1ada5moaxx5.js.map
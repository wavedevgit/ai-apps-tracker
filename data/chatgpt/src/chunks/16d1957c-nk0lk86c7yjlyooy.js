import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    Aw as r,
    Bz as i,
    Cat as a,
    Hn as o,
    IU as s,
    J7 as c,
    LU as l,
    Ow as u,
    Q7 as d,
    Rz as f,
    SN as p,
    U1 as m,
    Un as h,
    Vz as g,
    ZG as _,
    c7 as v,
    eE as y,
    eK as b,
    l7 as x,
    oW as S,
    prt as ee,
    q1 as C,
    sW as w,
    srt as te,
    xN as T,
    xat as ne,
    zU as E,
    zz as D
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Bn as O,
    Ln as k,
    N as re,
    Nn as A,
    Nt as j,
    Q as ie,
    Rn as M,
    Tn as N,
    Vn as P,
    q as ae,
    s as F,
    wn as I,
    zn as L
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    BCn as R,
    H8 as z,
    ICn as B,
    LCn as oe,
    RCn as se,
    V8 as ce,
    _dn as le,
    ex as ue,
    nw as de,
    p6t as fe,
    rw as pe,
    tx as me,
    vdn as he,
    y6t as ge
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    Gh as _e,
    Jy as ve,
    Kh as ye,
    Yy as be
} from "./30901919-ikyi1r55w2i02fom.js";
import {
    Av as xe,
    Is as Se,
    Rs as Ce,
    as as we,
    dl as Te,
    es as Ee,
    kv as V,
    ns as De,
    ul as Oe
} from "./c2675c8c-d62p1sdq1sy52umm.js";
import {
    n as ke,
    t as Ae
} from "./9f2e6d33-h33rm8r24h08gyr1.js";
import {
    i as je,
    r as Me
} from "./32d3feda-ekj9mb0379kxuf17.js";
import {
    n as Ne,
    t as Pe
} from "./2d8fa5e7-lngzyesyaikkyzce.js";
import {
    i as Fe,
    t as Ie
} from "./552e61db-bshpkao8z1edj0cq.js";
import {
    l as Le,
    n as Re,
    o as ze,
    t as Be,
    u as Ve
} from "./cc70ddac-ozjwlqu4nexqhhtc.js";
import {
    n as He,
    t as Ue
} from "./68d63dde-d3atqszc11fjoe1x.js";
import {
    r as We,
    t as Ge
} from "./12cc112f-fvi2nvuteae3ysgf.js";
import {
    a as Ke,
    i as qe,
    n as Je,
    r as Ye,
    t as Xe
} from "./8212174c-mghskmhnnxbc8jvr.js";
import {
    n as Ze,
    t as Qe
} from "./9c85c693-bfuyfw919e1hsgp7.js";

function $e({
    defaultName: e,
    placeholder: t,
    onSave: r,
    onClose: i
}) {
    let a = L(),
        o = e == null,
        [s, c] = (0, H.useState)(e || ``),
        [l, d] = (0, H.useState)(!1),
        [f, p] = (0, H.useState)(null),
        m = E(),
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
                await r(s), m.success(o ? a.formatMessage({
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
    return (0, U.jsx)(u, {
        isOpen: !0,
        type: `success`,
        onClose: i,
        title: o ? a.formatMessage(W.newGroupTitle) : a.formatMessage(W.updateNameTitle),
        testId: `modal-change-group-name`,
        showCloseButton: !0,
        primaryButton: (0, U.jsx)(n, {
            color: `primary`,
            onClick: () => h(),
            loading: l,
            children: (0, U.jsx)(A, {
                id: `workspaceSettings.groups.save`,
                defaultMessage: `Save`
            })
        }),
        secondaryButton: (0, U.jsx)(n, {
            onClick: i,
            color: `secondary`,
            children: (0, U.jsx)(A, {
                id: `workspaceSettings.groups.cancel`,
                defaultMessage: `Cancel`
            })
        }),
        children: (0, U.jsxs)(`div`, {
            className: `mb-3 flex flex-col gap-2`,
            children: [(0, U.jsx)(`label`, {
                className: `text-sm font-medium`,
                children: (0, U.jsx)(A, {
                    id: `workspaceSettings.groups.groupNameLabel`,
                    defaultMessage: `Group Name`
                })
            }), (0, U.jsx)(`input`, {
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
            }), f && (0, U.jsx)(`p`, {
                className: `text-xs text-red-500`,
                children: f
            })]
        })
    })
}
var H, U, W, et = e((() => {
    l(), y(), r(), H = t(P()), M(), U = O(), W = k({
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
    onClose: r
}) {
    let i = L(),
        a = E(),
        o = i.formatMessage({
            id: `workspaceSettings.groups.addMember`,
            defaultMessage: `Add members to the {groupName} group`
        }, {
            groupName: e.name
        }),
        s = m(),
        [l, d] = (0, G.useState)([]),
        [f, h] = (0, G.useState)(!1),
        [g, _] = (0, G.useState)([]);
    async function v() {
        let t = s?.getWorkspaceId();
        if (!t) throw Error(`No workspace ID found`);
        h(!0), _([]);
        let n = [];
        for (let e = 0; e < l.length; e += 50) n.push(l.slice(e, e + 50));
        let o = async n => c.safePost(`/accounts/{account_id}/group/{group_id}/users`, {
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
            let e = await Promise.all(n.map(e => o(e))),
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
            })), r?.())
        } catch (t) {
            let n = Je(i, t, {
                targetIsRestrictedSafeModeGroup: qe(e)
            }) ?? i.formatMessage(it.bulkAddMembersError);
            a.danger(n, {
                duration: 3
            })
        } finally {
            h(!1)
        }
    }
    return (0, K.jsxs)(u, {
        testId: `modal-bulk-add-group-members`,
        isOpen: t,
        onClose: r ?? p,
        title: o,
        type: `success`,
        showCloseButton: !0,
        primaryButton: (0, K.jsx)(n, {
            onClick: v,
            disabled: l.length === 0 || l.length > q,
            loading: f,
            children: (0, K.jsx)(A, {
                id: `EpbOzA`,
                defaultMessage: `Add users to group`
            })
        }),
        children: [(0, K.jsx)(nt, {
            onChange: e => {
                d(e), _([])
            }
        }), l.length > q && (0, K.jsx)(`div`, {
            className: `text-token-text-error mt-2 text-sm`,
            children: (0, K.jsx)(A, {
                id: `9lp0Tc`,
                defaultMessage: `Email list is limited to {maxEmails} users at once`,
                values: {
                    maxEmails: q
                }
            })
        }), g.length > 0 && (0, K.jsxs)(`div`, {
            className: `border-token-border-light mt-4 rounded-lg border p-3`,
            children: [(0, K.jsx)(`p`, {
                className: `text-token-interactive-label-warning-secondary text-sm font-medium`,
                children: (0, K.jsx)(A, {
                    id: `workspaceSettings.groups.bulkAddMembers.rejectedUsers.heading`,
                    defaultMessage: `{numRejectedUsers, plural, one {# user wasn't added} other {# users weren't added}}`,
                    values: {
                        numRejectedUsers: g.length
                    }
                })
            }), (0, K.jsx)(`p`, {
                className: `text-token-text-secondary mt-1 text-sm`,
                children: (0, K.jsx)(A, {
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
                                children: (0, K.jsx)(A, {
                                    id: `workspaceSettings.groups.bulkAddMembers.rejectedUsers.table.emailColumn`,
                                    defaultMessage: `Email`
                                })
                            }), (0, K.jsx)(`th`, {
                                scope: `col`,
                                className: `pb-1 font-medium`,
                                children: (0, K.jsx)(A, {
                                    id: `workspaceSettings.groups.bulkAddMembers.rejectedUsers.table.reasonColumn`,
                                    defaultMessage: `Reason`
                                })
                            })]
                        })
                    }), (0, K.jsx)(`tbody`, {
                        children: g.map(({
                            email_address: e
                        }, t) => (0, K.jsxs)(`tr`, {
                            children: [(0, K.jsx)(`td`, {
                                className: `py-1 pe-4`,
                                children: e
                            }), (0, K.jsx)(`td`, {
                                className: `py-1`,
                                children: (0, K.jsx)(A, {
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
            children: [(0, K.jsx)(A, {
                id: `qvGcSC`,
                defaultMessage: `Emails`
            }), (0, K.jsx)(`br`, {}), (0, K.jsx)(`span`, {
                className: `text-token-text-tertiary text-sm`,
                children: (0, K.jsx)(A, {
                    id: `Fhd+5h`,
                    defaultMessage: `Paste email addresses here, one per line:`
                })
            })]
        }), (0, K.jsx)(ce, {
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
`).map(e => e.trim()).filter(e => e.length > 0).filter(e => h.test(e))
}
var G, K, it, q, at = e((() => {
    y(), z(), r(), C(), l(), o(), d(), T(), G = t(P()), M(), Ye(), K = O(), it = k({
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
            workspaceId: r,
            group: i,
            isOpen: a,
            onClose: o
        } = e,
        c = L(),
        l = re(),
        [d, m] = (0, J.useState)(`users`),
        h = s(),
        g;
    t[0] !== i.name || t[1] !== c ? (g = c.formatMessage({
        id: `workspaceSettings.addGroupsMembersModal.title`,
        defaultMessage: `Add members to the {groupName} group`
    }, {
        groupName: i.name
    }), t[0] = i.name, t[1] = c, t[2] = g) : g = t[2];
    let _ = g,
        [v, y] = (0, J.useState)(``),
        [b, x] = (0, J.useState)(0),
        {
            data: S,
            isLoading: ee
        } = ge(r, b * 25, v, 25, ae),
        C;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (C = [], t[3] = C) : C = t[3];
    let [w, te] = (0, J.useState)(C), T;
    t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (T = [], t[4] = T) : T = t[4];
    let [E, D] = (0, J.useState)(T), [O, k] = (0, J.useState)(`interactive`), j = S ? Math.ceil((S.total ?? 0) / 25) : 0, ie = function(e) {
        return D(t => [...t, e]), st(r, i.id, e).then(async () => (te(t => [...t, e]), await Ve(l, r), !0)).catch(e => {
            ne.addError(e);
            let t = Je(c, e, {
                targetIsRestrictedSafeModeGroup: qe(i)
            }) ?? c.formatMessage(X.addMemberError);
            return h.danger(t, {
                duration: 3
            }), !1
        }).finally(() => {
            D(t => t.filter(t => t !== e))
        })
    };
    if (O === `batch`) {
        let e;
        return t[5] !== i || t[6] !== a || t[7] !== o ? (e = (0, Y.jsx)(tt, {
            group: i,
            isOpen: a,
            onClose: o
        }), t[5] = i, t[6] = a, t[7] = o, t[8] = e) : e = t[8], e
    }
    let M = u,
        N = o ?? p,
        P;
    t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (P = (0, Y.jsx)(A, {
        id: `workspaceSettings.groups.addMember.doneButton`,
        defaultMessage: `Done`
    }), t[9] = P) : P = t[9];
    let F;
    t[10] === o ? F = t[11] : (F = (0, Y.jsx)(n, {
        type: `button`,
        onClick: o,
        children: P
    }), t[10] = o, t[11] = F);
    let I;
    t[12] !== c || t[13] !== d || t[14] !== r ? (I = r && Ce(r) && (0, Y.jsx)(Me, {
        activeTab: d,
        onTabChange: m,
        items: [{
            key: `users`,
            label: c.formatMessage({
                id: `workspaceSettings.groups.addMember.users`,
                defaultMessage: `Users`
            }),
            children: null
        }, {
            key: `service-accounts`,
            label: c.formatMessage(Ne.serviceAccounts),
            children: null
        }]
    }), t[12] = c, t[13] = d, t[14] = r, t[15] = I) : I = t[15];
    let R = r && Ce(r) && d === `service-accounts` ? (0, Y.jsx)(Qe, {
            workspaceId: r,
            groupId: i.id,
            assignedIds: new Set(w),
            onAdd: async e => {
                if (!await ie(e.service_account_user_id)) throw Error(`Group membership was not saved`)
            }
        }, `${r}:${i.id}`) : (0, Y.jsxs)(Y.Fragment, {
            children: [(0, Y.jsxs)(`div`, {
                className: `flex flex-row justify-between`,
                children: [(0, Y.jsx)(`p`, {
                    children: _
                }), (0, Y.jsx)(n, {
                    onClick: () => {
                        k(`batch`)
                    },
                    color: `secondary`,
                    children: (0, Y.jsx)(A, {
                        id: `workspaceSettings.groups.addMember.bulkAddButton`,
                        defaultMessage: `Bulk add users`
                    })
                })]
            }), (0, Y.jsx)(`label`, {
                htmlFor: `add-group-member-search`,
                className: `sr-only`,
                children: c.formatMessage(X.searchLabel)
            }), (0, Y.jsx)(le, {
                id: `add-group-member-search`,
                value: v,
                inputClassName: `w-full`,
                placeholder: c.formatMessage(X.searchPlaceholder),
                onChange: e => {
                    x(0), y(e.target.value)
                }
            }), (0, Y.jsxs)(V.Root, {
                className: `min-w-full`,
                children: [(0, Y.jsxs)(V.Header, {
                    children: [(0, Y.jsx)(V.HeaderCell, {
                        children: (0, Y.jsx)(A, {
                            id: `workspaceSettings.groups.addMember.name`,
                            defaultMessage: `Name`
                        })
                    }), (0, Y.jsx)(V.HeaderCell, {
                        children: (0, Y.jsx)(A, {
                            id: `workspaceSettings.groups.addMember.email`,
                            defaultMessage: `Email`
                        })
                    }), (0, Y.jsx)(V.HeaderCell, {})]
                }), (0, Y.jsxs)(V.Body, {
                    children: [!S && ee && (0, Y.jsx)(V.Row, {
                        children: (0, Y.jsx)(V.Cell, {
                            colSpan: 3,
                            textAlign: `center`,
                            children: (0, Y.jsx)(f, {})
                        })
                    }), S?.items.map(e => (0, Y.jsxs)(V.Row, {
                        children: [(0, Y.jsx)(V.Cell, {
                            children: e.name
                        }), (0, Y.jsx)(V.Cell, {
                            children: e.email
                        }), (0, Y.jsx)(V.Cell, {
                            textAlign: `right`,
                            className: `pe-1`,
                            children: (0, Y.jsx)(n, {
                                size: `small`,
                                color: `secondary`,
                                disabled: E.includes(e.id),
                                onClick: () => {
                                    w.includes(e.id) || ie(e.id)
                                },
                                icon: w.includes(e.id) ? ve : ye,
                                children: w.includes(e.id) ? (0, Y.jsx)(A, {
                                    id: `workspaceSettings.groups.addMember.addButton`,
                                    defaultMessage: `Added`
                                }) : (0, Y.jsx)(A, {
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
                    currentPage: b,
                    onChangeIndex: e => {
                        x(e)
                    },
                    length: j
                })
            })]
        }),
        z;
    t[16] !== I || t[17] !== R ? (z = (0, Y.jsxs)(`div`, {
        className: `flex flex-col gap-3`,
        children: [I, R]
    }), t[16] = I, t[17] = R, t[18] = z) : z = t[18];
    let B;
    return t[19] !== M || t[20] !== a || t[21] !== F || t[22] !== z || t[23] !== N || t[24] !== _ ? (B = (0, Y.jsx)(M, {
        testId: `modal-add-group-member`,
        type: `warning`,
        isOpen: a,
        onClose: N,
        title: _,
        size: `custom`,
        className: `max-w-(--breakpoint-md)`,
        showCloseButton: !0,
        primaryButton: F,
        children: z
    }), t[19] = M, t[20] = a, t[21] = F, t[22] = z, t[23] = N, t[24] = _, t[25] = B) : B = t[25], B
}
async function st(e, t, n) {
    await c.safePatch(`/accounts/{account_id}/group/{group_id}`, {
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
    ct = I(), y(), pe(), he(), D(), xe(), be(), _e(), r(), l(), a(), d(), F(), je(), Ze(), Pe(), Se(), T(), J = t(P()), M(), Ye(), fe(), at(), Le(), Y = O(), X = k({
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
    let r = L(),
        a = re(),
        {
            role: o
        } = Te(),
        s = o == null ? void 0 : B(o),
        c = o == null ? void 0 : se(o),
        l = t || !(s || c),
        [u, d] = (0, Z.useState)(``),
        p = me(u, 300),
        m = j(),
        [h, g] = (0, Z.useState)(0),
        {
            groups: _,
            isError: y,
            isFetching: b,
            isLoading: x,
            isPlaceholderData: S,
            refetch: ee
        } = ze({
            workspaceId: e,
            currPage: h,
            groupFilter: p,
            includeScimGroups: s || c
        }),
        [C, w] = (0, Z.useState)(!1),
        {
            data: T
        } = Ke(e, te(`3020999601`)),
        ne = e => {
            e && l || (e && (g(0), d(``)), w(e))
        },
        {
            createGroup: E
        } = Re({
            workspaceId: e,
            currentGroups: _
        }),
        D = _ ? [..._.items] : [];
    if (T && _) {
        let e = T.group;
        if (e) {
            let t = D.filter(({
                id: t
            }) => t !== e.id);
            D = h === 0 ? [{
                ...e,
                num_members: e.num_members ?? 0
            }, ...t] : D
        }
    }
    let O = !y && _ != null && (x || S);
    return (0, Q.jsxs)(Q.Fragment, {
        children: [(0, Q.jsxs)(`div`, {
            className: `mt-6 mb-3 flex flex-row justify-between gap-2`,
            children: [(0, Q.jsx)(le, {
                inputClassName: `w-[250px] rounded-full! text-sm`,
                value: u,
                onChange: e => {
                    d(e.target.value), g(0)
                },
                placeholder: r.formatMessage({
                    id: `workspaceSettings.groups.search`,
                    defaultMessage: `Search group name`
                })
            }), !l && (0, Q.jsx)(n, {
                onClick: () => ne(!0),
                icon: i.Plus,
                children: (0, Q.jsx)(A, {
                    id: `workspaceSettings.groups.create`,
                    defaultMessage: `Create group`
                })
            })]
        }), (0, Q.jsxs)(`div`, {
            children: [(0, Q.jsxs)(`div`, {
                className: `relative`,
                children: [(0, Q.jsxs)(V.Root, {
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
                    }), (0, Q.jsxs)(V.Header, {
                        children: [(0, Q.jsx)(V.HeaderCell, {
                            children: (0, Q.jsx)(A, {
                                id: `workspaceSettings.groups.groupName`,
                                defaultMessage: `Group name`
                            })
                        }), (0, Q.jsx)(V.HeaderCell, {
                            children: (0, Q.jsx)(A, {
                                id: `workspaceSettings.groups.members`,
                                defaultMessage: `Members`
                            })
                        }), (0, Q.jsx)(V.HeaderCell, {
                            children: (0, Q.jsx)(A, {
                                id: `workspaceSettings.groups.created`,
                                defaultMessage: `Created`
                            })
                        }), (0, Q.jsx)(V.HeaderCell, {})]
                    }), (0, Q.jsx)(V.Body, {
                        className: v(!y && (x || S) && `pointer-events-none opacity-50`),
                        children: y ? (0, Q.jsx)(V.Row, {
                            children: (0, Q.jsx)(V.Cell, {
                                colSpan: 4,
                                textAlign: `center`,
                                children: (0, Q.jsxs)(`div`, {
                                    className: `flex min-h-32 flex-col items-center justify-center`,
                                    role: `alert`,
                                    children: [(0, Q.jsx)(`div`, {
                                        className: `text-token-text-secondary text-sm`,
                                        children: (0, Q.jsx)(A, {
                                            id: `workspaceSettings.groups.list.loadError`,
                                            defaultMessage: `We couldn’t load groups.`
                                        })
                                    }), (0, Q.jsx)(n, {
                                        className: `mt-3`,
                                        color: `secondary`,
                                        loading: b,
                                        size: `small`,
                                        type: `button`,
                                        onClick: () => {
                                            ee()
                                        },
                                        children: (0, Q.jsx)(A, {
                                            id: `workspaceSettings.groups.list.retryLoad`,
                                            defaultMessage: `Try again`
                                        })
                                    })]
                                })
                            })
                        }) : _ == null ? (0, Q.jsx)(V.Row, {
                            children: (0, Q.jsx)(V.Cell, {
                                colSpan: 5,
                                textAlign: `center`,
                                children: (0, Q.jsx)(f, {})
                            })
                        }) : D.length === 0 ? (0, Q.jsx)(V.Row, {
                            children: (0, Q.jsx)(V.Cell, {
                                colSpan: 5,
                                textAlign: `center`,
                                children: u === `` ? (0, Q.jsx)(A, {
                                    id: `workspaceSettings.groups.noGroups`,
                                    defaultMessage: `No groups found.`
                                }) : (0, Q.jsx)(A, {
                                    id: `workspaceSettings.groups.noGroupsWithFIlter`,
                                    defaultMessage: `No groups found. Try changing the search query.`
                                })
                            })
                        }) : D.map(t => (0, Q.jsx)(ft, {
                            group: t,
                            workspaceId: e,
                            onAddMember: () => {
                                a.invalidateQueries({
                                    queryKey: [e, `groups`]
                                })
                            },
                            readOnly: l
                        }, t.id))
                    })]
                }), O && (0, Q.jsx)(`div`, {
                    className: `absolute inset-0 z-20 flex items-center justify-center`,
                    children: (0, Q.jsx)(f, {})
                })]
            }), _ && !y && (0, Q.jsx)(`div`, {
                className: `text-center`,
                children: (0, Q.jsx)(de, {
                    length: Math.ceil(_.total / 20),
                    currentPage: Math.min(h, Math.ceil(_.total / 20)),
                    onChangeIndex: e => g(e)
                })
            })]
        }), C && !l && (0, Q.jsx)($e, {
            onClose: () => ne(!1),
            onSave: async t => {
                let {
                    id: n
                } = await E({
                    name: t,
                    workspaceId: e
                });
                m(`/admin/groups/${n}`)
            },
            placeholder: r.formatMessage({
                id: `workspaceSettings.groups.placeholder`,
                defaultMessage: `E.g. marketing team`
            })
        })]
    })
}

function dt({
    currentWorkspaceId: e
}) {
    let t = L(),
        n = m(),
        r = !!n?.isFreeWorkspace(),
        i = !1,
        {
            role: a,
            cloudConsoleM3Enrolled: o
        } = Te(),
        s = o === !0,
        c = a == null ? void 0 : B(a),
        l = a == null ? void 0 : se(a),
        u = a == null ? void 0 : oe(a),
        d = n?.isEnterprisey(),
        {
            data: p,
            isLoading: h
        } = b(e);
    return r ? (0, Q.jsxs)(Q.Fragment, {
        children: [(0, Q.jsx)(Ae, {
            children: (0, Q.jsx)(`title`, {
                children: t.formatMessage($.title)
            })
        }), (0, Q.jsx)(De, {
            contentWidth: `medium`,
            title: t.formatMessage($.title),
            subtitle: (0, Q.jsx)(A, {
                id: `NDDzzF`,
                defaultMessage: `Only workspace admins can edit these settings.`
            })
        }), (0, Q.jsx)(Ee, {
            contentWidth: `medium`,
            children: (0, Q.jsx)(Ge, {})
        })]
    }) : (i = l || c || u || !d ? !0 : !!p?.permissions?.includes(`chatgpt.workspace.member.role.view`), h ? (0, Q.jsx)(`div`, {
        className: `mt-6 flex min-h-[40vh] items-center justify-center`,
        children: (0, Q.jsx)(f, {})
    }) : i ? (0, Q.jsxs)(Q.Fragment, {
        children: [(0, Q.jsx)(Ae, {
            children: (0, Q.jsx)(`title`, {
                children: t.formatMessage($.title)
            })
        }), (0, Q.jsx)(De, {
            contentWidth: `medium`,
            title: t.formatMessage($.title),
            subtitle: (0, Q.jsx)(A, {
                id: `admin.groupsSettings.subtitle`,
                defaultMessage: `Only workspace admins can edit these settings. Member counts exclude pending invites.`
            })
        }), (0, Q.jsxs)(Ee, {
            contentWidth: `medium`,
            showSpinner: !1,
            children: [s && (0, Q.jsx)(Ie, {}), (0, Q.jsx)(ut, {
                workspaceId: e,
                isCloudConsoleM3ReadOnly: s
            })]
        })]
    }) : (0, Q.jsx)(`div`, {
        className: `m-6`,
        children: (0, Q.jsxs)(`div`, {
            className: `border-token-border-medium bg-token-main-surface-secondary text-token-text-primary flex items-center gap-3 rounded-md border px-4 py-3`,
            children: [(0, Q.jsx)(w, {
                className: `icon-sm interactive-label-warning-secondary shrink-0`
            }), (0, Q.jsx)(A, {
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
    let [i, a] = (0, Z.useState)(!1), o = j(), s = qe(t);
    return (0, Q.jsxs)(Q.Fragment, {
        children: [(0, Q.jsxs)(V.Row, {
            className: `[&>td]:py-2`,
            onClick: () => o(`/admin/groups/${t.id}`),
            children: [(0, Q.jsxs)(V.Cell, {
                children: [(0, Q.jsx)(Ue, {
                    group: t
                }), (0, Q.jsx)(`div`, {
                    className: `flex flex-col gap-1`,
                    children: (0, Q.jsxs)(`div`, {
                        className: `flex items-center gap-2`,
                        children: [(0, Q.jsx)(`span`, {
                            children: t.name
                        }), s && (0, Q.jsx)(Xe, {})]
                    })
                })]
            }), (0, Q.jsx)(V.Cell, {
                children: (0, Q.jsx)(A, {
                    id: `workspaceSettings.groups.memberCount`,
                    defaultMessage: `{count} members`,
                    values: {
                        count: t.num_members
                    }
                })
            }), (0, Q.jsx)(V.Cell, {
                children: t.created_time && (0, Q.jsx)(N, {
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
    C(), y(), pe(), he(), D(), we(), Oe(), Fe(), R(), xe(), g(), S(), _(), ee(), ue(), ke(), F(), x(), Z = t(P()), M(), ie(), Ye(), We(), lt(), He(), Be(), et(), Q = O(), $ = k({
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
    lt as a, ot as i, pt as n, $e as o, $ as r, et as s, dt as t
};
//# sourceMappingURL=16d1957c-nk0lk86c7yjlyooy.js.map
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    BU as n,
    Cw as r,
    F7 as i,
    Gnt as a,
    HU as o,
    Hn as s,
    JT as c,
    Mz as l,
    Nz as u,
    P1 as d,
    Pz as f,
    R1 as p,
    Tw as m,
    Un as h,
    X5 as g,
    Y5 as _,
    YT as v,
    Znt as y,
    _N as ee,
    aat as b,
    eK as x,
    gN as S,
    jz as C,
    lW as w,
    rK as te,
    sat as T,
    uW as E,
    z7 as D,
    zU as O
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as k,
    Ln as A,
    N as ne,
    Nn as j,
    Nt as M,
    Q as re,
    Rn as N,
    Tn as P,
    Vn as F,
    q as ie,
    s as I,
    wn as L,
    zn as R
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    B8 as z,
    CCn as B,
    E6t as ae,
    SCn as V,
    Sdn as oe,
    TCn as se,
    b6t as ce,
    ex as le,
    nw as ue,
    rw as de,
    tx as fe,
    xCn as pe,
    xdn as me,
    z8 as he
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    Gh as ge,
    Jy as _e,
    Kh as ve,
    Yy as ye
} from "./30901919-e8h11sw136qen6v0.js";
import {
    Ev as be,
    Is as xe,
    Rs as Se,
    Tv as H,
    as as Ce,
    dl as we,
    es as Te,
    ns as Ee,
    ul as De
} from "./c2675c8c-ejvs9hq3rwjwsbcv.js";
import {
    n as Oe,
    t as ke
} from "./9f2e6d33-h33rm8r24h08gyr1.js";
import {
    i as Ae,
    r as je
} from "./32d3feda-fn8618u3ujhkx26f.js";
import {
    n as Me,
    t as Ne
} from "./2d8fa5e7-lngzyesyaikkyzce.js";
import {
    i as Pe,
    t as Fe
} from "./552e61db-bshpkao8z1edj0cq.js";
import {
    l as Ie,
    n as Le,
    o as Re,
    t as ze,
    u as Be
} from "./cc70ddac-i0wipczkitxmz0e2.js";
import {
    n as Ve,
    t as He
} from "./68d63dde-jv6lhukurjsfbzgx.js";
import {
    r as Ue,
    t as We
} from "./12cc112f-hdkjnn6u165pneqd.js";
import {
    a as Ge,
    i as Ke,
    n as qe,
    r as Je,
    t as Ye
} from "./8212174c-lx9hswadcayb7dkx.js";
import {
    n as Xe,
    t as Ze
} from "./9c85c693-ha571p95levworea.js";

function Qe({
    defaultName: e,
    placeholder: t,
    onSave: n,
    onClose: i
}) {
    let a = R(),
        s = e == null,
        [l, u] = (0, U.useState)(e || ``),
        [d, f] = (0, U.useState)(!1),
        [p, m] = (0, U.useState)(null),
        h = o(),
        g = async () => {
            if (l.trim() === ``) {
                m(a.formatMessage({
                    id: `workspaceSettings.groups.emptyName`,
                    defaultMessage: `Group name cannot be empty`
                }));
                return
            }
            f(!0);
            try {
                await n(l), h.success(s ? a.formatMessage({
                    id: `workspaceSettings.groups.createdGroup`,
                    defaultMessage: `Group created successfully`
                }) : a.formatMessage({
                    id: `workspaceSettings.groups.nameChanged`,
                    defaultMessage: `Group name changed successfully`
                })), i()
            } catch {
                m(a.formatMessage({
                    id: `workspaceSettings.groups.duplicateName`,
                    defaultMessage: `Group with this name already exists`
                }))
            } finally {
                f(!1)
            }
        };
    return (0, W.jsx)(r, {
        isOpen: !0,
        type: `success`,
        onClose: i,
        title: s ? a.formatMessage($e.newGroupTitle) : a.formatMessage($e.updateNameTitle),
        testId: `modal-change-group-name`,
        showCloseButton: !0,
        primaryButton: (0, W.jsx)(c, {
            color: `primary`,
            onClick: () => g(),
            loading: d,
            children: (0, W.jsx)(j, {
                id: `workspaceSettings.groups.save`,
                defaultMessage: `Save`
            })
        }),
        secondaryButton: (0, W.jsx)(c, {
            onClick: i,
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
                value: l,
                placeholder: t,
                onChange: e => {
                    u(e.target.value), m(null)
                },
                className: `border-token-border-secondary focus:border-token-accent bg-token-bg-primary w-full rounded border px-3 py-2 text-sm focus:outline-none`,
                onKeyDown: e => {
                    e.key === `Enter` && g()
                }
            }), p && (0, W.jsx)(`p`, {
                className: `text-xs text-red-500`,
                children: p
            })]
        })
    })
}
var U, W, $e, et = e((() => {
    n(), v(), m(), U = t(F()), N(), W = k(), $e = A({
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
    let a = R(),
        s = o(),
        l = a.formatMessage({
            id: `workspaceSettings.groups.addMember`,
            defaultMessage: `Add members to the {groupName} group`
        }, {
            groupName: e.name
        }),
        u = d(),
        [f, p] = (0, G.useState)([]),
        [m, h] = (0, G.useState)(!1),
        [g, _] = (0, G.useState)([]);
    async function v() {
        let t = u?.getWorkspaceId();
        if (!t) throw Error(`No workspace ID found`);
        h(!0), _([]);
        let r = [];
        for (let e = 0; e < f.length; e += 50) r.push(f.slice(e, e + 50));
        let o = async n => i.safePost(`/accounts/{account_id}/group/{group_id}/users`, {
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
                i = e.flatMap(e => e.rejected_group_users ?? []);
            i.length > 0 ? (_(i), s.warning(a.formatMessage({
                id: `workspaceSettings.groups.bulkAddMembers.partialSuccessToast`,
                defaultMessage: `{numUsers, plural, one {Added # user.} other {Added # users.}} {numRejectedUsers, plural, one {# user couldn't be added.} other {# users couldn't be added.}}`
            }, {
                numUsers: t,
                numRejectedUsers: i.length
            }))) : (s.success(a.formatMessage({
                id: `yU4Zf0`,
                defaultMessage: `Added {numUsers} users to the group`
            }, {
                numUsers: t
            })), n?.())
        } catch (t) {
            let n = qe(a, t, {
                targetIsRestrictedSafeModeGroup: Ke(e)
            }) ?? a.formatMessage(it.bulkAddMembersError);
            s.danger(n, {
                duration: 3
            })
        } finally {
            h(!1)
        }
    }
    return (0, K.jsxs)(r, {
        testId: `modal-bulk-add-group-members`,
        isOpen: t,
        onClose: n ?? ee,
        title: l,
        type: `success`,
        showCloseButton: !0,
        primaryButton: (0, K.jsx)(c, {
            onClick: v,
            disabled: f.length === 0 || f.length > q,
            loading: m,
            children: (0, K.jsx)(j, {
                id: `EpbOzA`,
                defaultMessage: `Add users to group`
            })
        }),
        children: [(0, K.jsx)(nt, {
            onChange: e => {
                p(e), _([])
            }
        }), f.length > q && (0, K.jsx)(`div`, {
            className: `text-token-text-error mt-2 text-sm`,
            children: (0, K.jsx)(j, {
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
                children: (0, K.jsx)(j, {
                    id: `workspaceSettings.groups.bulkAddMembers.rejectedUsers.heading`,
                    defaultMessage: `{numRejectedUsers, plural, one {# user wasn't added} other {# users weren't added}}`,
                    values: {
                        numRejectedUsers: g.length
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
                        children: g.map(({
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
        }), (0, K.jsx)(he, {
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
    v(), z(), m(), p(), n(), s(), D(), S(), G = t(F()), N(), Je(), K = k(), it = A({
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
        l = ne(),
        [u, d] = (0, J.useState)(`users`),
        f = O(),
        p;
    t[0] !== i.name || t[1] !== s ? (p = s.formatMessage({
        id: `workspaceSettings.addGroupsMembersModal.title`,
        defaultMessage: `Add members to the {groupName} group`
    }, {
        groupName: i.name
    }), t[0] = i.name, t[1] = s, t[2] = p) : p = t[2];
    let m = p,
        [h, g] = (0, J.useState)(``),
        [_, v] = (0, J.useState)(0),
        {
            data: y,
            isLoading: x
        } = ae(n, _ * 25, h, 25, ie),
        S;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (S = [], t[3] = S) : S = t[3];
    let [w, te] = (0, J.useState)(S), T;
    t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (T = [], t[4] = T) : T = t[4];
    let [E, D] = (0, J.useState)(T), [k, A] = (0, J.useState)(`interactive`), M = y ? Math.ceil((y.total ?? 0) / 25) : 0, re = function(e) {
        return D(t => [...t, e]), st(n, i.id, e).then(async () => (te(t => [...t, e]), await Be(l, n), !0)).catch(e => {
            b.addError(e);
            let t = qe(s, e, {
                targetIsRestrictedSafeModeGroup: Ke(i)
            }) ?? s.formatMessage(X.addMemberError);
            return f.danger(t, {
                duration: 3
            }), !1
        }).finally(() => {
            D(t => t.filter(t => t !== e))
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
    let N = r,
        P = o ?? ee,
        F;
    t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (F = (0, Y.jsx)(j, {
        id: `workspaceSettings.groups.addMember.doneButton`,
        defaultMessage: `Done`
    }), t[9] = F) : F = t[9];
    let I;
    t[10] === o ? I = t[11] : (I = (0, Y.jsx)(c, {
        type: `button`,
        onClick: o,
        children: F
    }), t[10] = o, t[11] = I);
    let L;
    t[12] !== s || t[13] !== u || t[14] !== n ? (L = n && Se(n) && (0, Y.jsx)(je, {
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
    let z = n && Se(n) && u === `service-accounts` ? (0, Y.jsx)(Ze, {
            workspaceId: n,
            groupId: i.id,
            assignedIds: new Set(w),
            onAdd: async e => {
                if (!await re(e.service_account_user_id)) throw Error(`Group membership was not saved`)
            }
        }, `${n}:${i.id}`) : (0, Y.jsxs)(Y.Fragment, {
            children: [(0, Y.jsxs)(`div`, {
                className: `flex flex-row justify-between`,
                children: [(0, Y.jsx)(`p`, {
                    children: m
                }), (0, Y.jsx)(c, {
                    onClick: () => {
                        A(`batch`)
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
                value: h,
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
                    children: [!y && x && (0, Y.jsx)(H.Row, {
                        children: (0, Y.jsx)(H.Cell, {
                            colSpan: 3,
                            textAlign: `center`,
                            children: (0, Y.jsx)(C, {})
                        })
                    }), y?.items.map(e => (0, Y.jsxs)(H.Row, {
                        children: [(0, Y.jsx)(H.Cell, {
                            children: e.name
                        }), (0, Y.jsx)(H.Cell, {
                            children: e.email
                        }), (0, Y.jsx)(H.Cell, {
                            textAlign: `right`,
                            className: `pe-1`,
                            children: (0, Y.jsx)(c, {
                                size: `small`,
                                color: `secondary`,
                                disabled: E.includes(e.id),
                                onClick: () => {
                                    w.includes(e.id) || re(e.id)
                                },
                                icon: w.includes(e.id) ? _e : ve,
                                children: w.includes(e.id) ? (0, Y.jsx)(j, {
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
            }), M > 1 && (0, Y.jsx)(`div`, {
                className: `flex flex-row justify-center`,
                children: (0, Y.jsx)(ue, {
                    currentPage: _,
                    onChangeIndex: e => {
                        v(e)
                    },
                    length: M
                })
            })]
        }),
        B;
    t[16] !== L || t[17] !== z ? (B = (0, Y.jsxs)(`div`, {
        className: `flex flex-col gap-3`,
        children: [L, z]
    }), t[16] = L, t[17] = z, t[18] = B) : B = t[18];
    let V;
    return t[19] !== N || t[20] !== a || t[21] !== I || t[22] !== B || t[23] !== P || t[24] !== m ? (V = (0, Y.jsx)(N, {
        testId: `modal-add-group-member`,
        type: `warning`,
        isOpen: a,
        onClose: P,
        title: m,
        size: `custom`,
        className: `max-w-(--breakpoint-md)`,
        showCloseButton: !0,
        primaryButton: I,
        children: B
    }), t[19] = N, t[20] = a, t[21] = I, t[22] = B, t[23] = P, t[24] = m, t[25] = V) : V = t[25], V
}
async function st(e, t, n) {
    await i.safePatch(`/accounts/{account_id}/group/{group_id}`, {
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
    ct = L(), v(), de(), oe(), l(), be(), ye(), ge(), m(), n(), T(), D(), I(), Ae(), Xe(), Ne(), xe(), S(), J = t(F()), N(), Je(), ce(), at(), Ie(), Y = k(), X = A({
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
        r = ne(),
        {
            role: i
        } = we(),
        o = i == null ? void 0 : pe(i),
        s = i == null ? void 0 : B(i),
        l = t || !(o || s),
        [d, f] = (0, Z.useState)(``),
        p = fe(d, 300),
        m = M(),
        [h, g] = (0, Z.useState)(0),
        {
            groups: v,
            isError: y,
            isFetching: ee,
            isLoading: b,
            isPlaceholderData: x,
            refetch: S
        } = Re({
            workspaceId: e,
            currPage: h,
            groupFilter: p,
            includeScimGroups: o || s
        }),
        [w, te] = (0, Z.useState)(!1),
        {
            data: T
        } = Ge(e, a(`3020999601`)),
        E = e => {
            e && l || (e && (g(0), f(``)), te(e))
        },
        {
            createGroup: D
        } = Le({
            workspaceId: e,
            currentGroups: v
        }),
        O = v ? [...v.items] : [];
    if (T && v) {
        let e = T.group;
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
    let k = !y && v != null && (b || x);
    return (0, Q.jsxs)(Q.Fragment, {
        children: [(0, Q.jsxs)(`div`, {
            className: `mt-6 mb-3 flex flex-row justify-between gap-2`,
            children: [(0, Q.jsx)(me, {
                inputClassName: `w-[250px] rounded-full! text-sm`,
                value: d,
                onChange: e => {
                    f(e.target.value), g(0)
                },
                placeholder: n.formatMessage({
                    id: `workspaceSettings.groups.search`,
                    defaultMessage: `Search group name`
                })
            }), !l && (0, Q.jsx)(c, {
                onClick: () => E(!0),
                icon: u.Plus,
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
                        className: _(!y && (b || x) && `pointer-events-none opacity-50`),
                        children: y ? (0, Q.jsx)(H.Row, {
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
                                    }), (0, Q.jsx)(c, {
                                        className: `mt-3`,
                                        color: `secondary`,
                                        loading: ee,
                                        size: `small`,
                                        type: `button`,
                                        onClick: () => {
                                            S()
                                        },
                                        children: (0, Q.jsx)(j, {
                                            id: `workspaceSettings.groups.list.retryLoad`,
                                            defaultMessage: `Try again`
                                        })
                                    })]
                                })
                            })
                        }) : v == null ? (0, Q.jsx)(H.Row, {
                            children: (0, Q.jsx)(H.Cell, {
                                colSpan: 5,
                                textAlign: `center`,
                                children: (0, Q.jsx)(C, {})
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
                                r.invalidateQueries({
                                    queryKey: [e, `groups`]
                                })
                            },
                            readOnly: l
                        }, t.id))
                    })]
                }), k && (0, Q.jsx)(`div`, {
                    className: `absolute inset-0 z-20 flex items-center justify-center`,
                    children: (0, Q.jsx)(C, {})
                })]
            }), v && !y && (0, Q.jsx)(`div`, {
                className: `text-center`,
                children: (0, Q.jsx)(ue, {
                    length: Math.ceil(v.total / 20),
                    currentPage: Math.min(h, Math.ceil(v.total / 20)),
                    onChangeIndex: e => g(e)
                })
            })]
        }), w && !l && (0, Q.jsx)(Qe, {
            onClose: () => E(!1),
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
    let t = R(),
        n = d(),
        r = !!n?.isFreeWorkspace(),
        i = !1,
        {
            role: a,
            cloudConsoleM3Enrolled: o
        } = we(),
        s = o === !0,
        c = a == null ? void 0 : pe(a),
        l = a == null ? void 0 : B(a),
        u = a == null ? void 0 : V(a),
        f = n?.isEnterprisey(),
        {
            data: p,
            isLoading: m
        } = te(e);
    return r ? (0, Q.jsxs)(Q.Fragment, {
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
        }), (0, Q.jsx)(Te, {
            contentWidth: `medium`,
            children: (0, Q.jsx)(We, {})
        })]
    }) : (i = l || c || u || !f ? !0 : !!p?.permissions?.includes(`chatgpt.workspace.member.role.view`), m ? (0, Q.jsx)(`div`, {
        className: `mt-6 flex min-h-[40vh] items-center justify-center`,
        children: (0, Q.jsx)(C, {})
    }) : i ? (0, Q.jsxs)(Q.Fragment, {
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
        }), (0, Q.jsxs)(Te, {
            contentWidth: `medium`,
            showSpinner: !1,
            children: [s && (0, Q.jsx)(Fe, {}), (0, Q.jsx)(ut, {
                workspaceId: e,
                isCloudConsoleM3ReadOnly: s
            })]
        })]
    }) : (0, Q.jsx)(`div`, {
        className: `m-6`,
        children: (0, Q.jsxs)(`div`, {
            className: `border-token-border-medium bg-token-main-surface-secondary text-token-text-primary flex items-center gap-3 rounded-md border px-4 py-3`,
            children: [(0, Q.jsx)(E, {
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
    p(), v(), de(), oe(), l(), Ce(), De(), Pe(), se(), be(), f(), w(), x(), y(), le(), Oe(), I(), g(), Z = t(F()), N(), re(), Je(), Ue(), lt(), Ve(), ze(), et(), Q = k(), $ = A({
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
//# sourceMappingURL=16d1957c-f9xf8vgy9iph1ofo.js.map
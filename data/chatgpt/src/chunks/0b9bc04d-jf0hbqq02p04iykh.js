import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    A8 as r,
    Bct as i,
    K5 as a,
    LU as o,
    Qy as s,
    Rz as c,
    Zy as l,
    d1 as u,
    eE as d,
    fl as f,
    gl as p,
    hl as m,
    j5 as h,
    ml as g,
    q5 as _,
    rq as v,
    u1 as ee,
    uq as te,
    zU as ne,
    zct as y,
    zz as re
} from "./4813494d-mdvd4786a87166cc.js";
import {
    At as ie,
    Bn as b,
    N as x,
    Nn as S,
    Nt as ae,
    Q as C,
    Rn as w,
    Vn as T,
    it as E,
    p as oe,
    s as D,
    zn as O
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    MJ as k,
    idn as A,
    jJ as j,
    odn as M,
    rdn as se,
    sdn as N
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    By as P,
    Ky as F,
    Rm as ce,
    Vy as le,
    gS as ue,
    hS as de,
    hy as fe,
    my as I,
    qy as L,
    vh as pe,
    yh as R,
    zm as me
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    n as z,
    t as he
} from "./af004db9-ncue41w0x271s8a6.js";
import {
    n as B,
    r as ge
} from "./0eda9bd1-ebo11evwa61b710z.js";
import {
    n as _e,
    t as ve
} from "./7271f1c9-eisaobgjylt9iv5o.js";
import {
    n as V,
    t as ye
} from "./1f8ec761-e2arxi28s9sfpt35.js";
import {
    n as H,
    t as be
} from "./805f0379-k1cpczzsp4mg94x2.js";
import {
    B as xe,
    G as Se,
    H as U,
    K as Ce,
    U as we,
    V as W,
    W as Te,
    z as Ee
} from "./9e18a103-h1quzy0ff906eufh.js";
import {
    i as De,
    r as Oe,
    t as ke
} from "./9371a995-nv0jykh4xx8ox1pg.js";

function G({
    taskId: e,
    latestTurnId: t,
    behavior: n = `navigate`,
    repositoryProvider: r,
    onFixCreated: a
}) {
    let o = O(),
        s = ne(),
        c = ae(),
        l = x(),
        u = N(e => e.setLastViewedTaskId),
        d = N(e => e.assignPendingTaskToFinalTask),
        m = N(e => e.removePendingTaskId),
        h = N(e => e.clearFixReviewTaskInFlight),
        _ = (0, K.useCallback)(t => {
            [`current`, `all`, `code_review`, `archived`].forEach(n => {
                let r = [`wham`, `tasks`, n];
                l.setQueryData(r, n => i(n, n => {
                    n && n.pages.forEach(n => {
                        n.items?.forEach(n => {
                            if (n.id === e) {
                                if (!n.task_status_display) {
                                    n.task_status_display = {
                                        fix_task_id: t
                                    };
                                    return
                                }
                                n.task_status_display.fix_task_id = t
                            }
                        })
                    })
                }))
            })
        }, [l, e]);
    return oe({
        mutationFn: async () => {
            if (!t) throw Error(`missing_latest_turn_id`);
            return await g.createFixReviewTask(e, t)
        },
        onSuccess: (t, r) => {
            _(t.task.id), l.invalidateQueries({
                queryKey: [`wham`, `tasks`]
            }), l.invalidateQueries({
                queryKey: [`wham`, `tasks`, `current`]
            }), h(e), r?.pendingTaskId && d(r.pendingTaskId, t.task.id), n === `navigate` && (u(t.task.id), c(`/codex/cloud/tasks/${t.task.id}`), s.success(o.formatMessage({
                id: `wham.whamTaskRow.fixTaskCreated`,
                defaultMessage: `Started fix task`
            }))), a?.({
                fixTaskId: t.task.id,
                pendingTaskId: r?.pendingTaskId,
                response: t
            })
        },
        onError: (t, n) => {
            if (h(e), n?.pendingTaskId && m(n.pendingTaskId), t instanceof f) {
                p(t, e, o, s, {
                    repositoryProvider: r
                });
                return
            }
            s.danger(o.formatMessage({
                id: `wham.whamTaskRow.fixTaskCreateError`,
                defaultMessage: `Couldn't start fix task`
            }))
        }
    })
}

function Ae({
    taskId: e,
    latestTurnId: t,
    highlightTasksTabOnSuccess: n = !1,
    repositoryProvider: r
}) {
    let i = N(e => e.addPendingTaskId),
        a = N(e => e.shouldHighlightTasksTab),
        o = N(e => e.setShouldHighlightTasksTab),
        s = N(e => e.markFixReviewTaskInFlight),
        l = N(e => e.clearFixReviewTaskInFlight),
        u = N(t => !!t.fixReviewTasksInFlight[e]),
        d = G({
            taskId: e,
            latestTurnId: t,
            behavior: `stay`,
            repositoryProvider: r
        }),
        f = (0, K.useCallback)(r => {
            if (r.stopPropagation(), r.preventDefault(), u || d.isPending || !t) return;
            let c = crypto.randomUUID();
            i(c);
            let f = n && !a;
            f && o(!0), s(e), d.mutateAsync({
                pendingTaskId: c
            }).catch(() => {
                f && o(!1), l(e)
            })
        }, [i, n, u, d, o, s, l, a, e, t]),
        p = d.isPending || u;
    return (0, q.jsx)(`button`, {
        type: `button`,
        className: `border-token-border-subtle bg-token-bg-tertiary text-token-text-primary hover:bg-token-bg-secondary flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-70`,
        onClick: f,
        disabled: p || !t,
        children: p ? (0, q.jsx)(c, {
            className: `icon-sm`
        }) : (0, q.jsx)(S, {
            id: `wham.whamTaskRow.fixButton`,
            defaultMessage: `Fix`
        })
    })
}
var K, q, J = e((() => {
    re(), o(), m(), M(), D(), y(), K = t(T()), w(), C(), q = b()
}));

function je({
    criticalIssueCount: e,
    highIssueCount: t,
    mediumIssueCount: n,
    lowIssueCount: r,
    totalIssueCount: i
}) {
    "use no forget";
    let o = O();
    return i === 0 ? (0, Y.jsx)(l, {
        label: o.formatMessage({
            id: `wham.whamTaskIssuesSummary.noIssuesTooltip`,
            defaultMessage: `Codex didn’t flag any issues`
        }),
        children: (0, Y.jsx)(`span`, {
            className: `bg-token-bg-success/20 text-token-text-primary inline-flex min-w-[1.5rem] items-center justify-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold`,
            children: (0, Y.jsx)(F, {
                className: `icon-sm text-[#008000]`
            })
        })
    }) : (0, Y.jsx)(`div`, {
        className: `flex flex-wrap items-center gap-2`,
        children: [{
            severity: `critical`,
            count: e
        }, {
            severity: `high`,
            count: t
        }, {
            severity: `medium`,
            count: n
        }, {
            severity: `low`,
            count: r
        }].filter(({
            count: e
        }) => e > 0).map(({
            severity: e,
            count: t
        }) => {
            let n = e === `critical`,
                r = e === `critical` ? o.formatMessage({
                    id: `wham.whamTaskIssuesSummary.criticalIssueTooltip`,
                    defaultMessage: `Codex flagged {count, plural, one {# severe bug} other {# severe bugs}}`
                }, {
                    count: t
                }) : e === `high` ? o.formatMessage({
                    id: `wham.whamTaskIssuesSummary.highIssueTooltip`,
                    defaultMessage: `Codex flagged {count, plural, one {# bug} other {# bugs}}`
                }, {
                    count: t
                }) : e === `medium` ? o.formatMessage({
                    id: `wham.whamTaskIssuesSummary.mediumIssueTooltip`,
                    defaultMessage: `Codex flagged {count, plural, one {# bug} other {# bugs}}`
                }, {
                    count: t
                }) : o.formatMessage({
                    id: `wham.whamTaskIssuesSummary.lowIssueTooltip`,
                    defaultMessage: `Codex flagged {count, plural, one {# bug} other {# bugs}}`
                }, {
                    count: t
                }),
                i = n ? `bg-token-text-status-error/15 text-token-text-status-error` : e === `high` ? `bg-token-text-status-warning/15 text-token-text-status-warning` : e === `medium` ? `bg-token-bg-tertiary text-token-text-secondary` : `bg-token-bg-tertiary text-token-text-tertiary`,
                s = n ? `text-token-text-status-error` : e === `high` ? `text-token-text-status-warning` : e === `medium` ? `text-token-text-secondary` : `text-token-text-tertiary`;
            return (0, Y.jsx)(l, {
                label: r,
                children: (0, Y.jsxs)(`span`, {
                    className: a(`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium`, i),
                    children: [(0, Y.jsx)(pe, {
                        className: a(`icon-sm`, s)
                    }), e === `critical` ? (0, Y.jsx)(S, {
                        id: `wham.whamTaskIssuesSummary.criticalIssueCopy`,
                        defaultMessage: `{count, plural, one {# severe bug} other {# severe bugs}}`,
                        values: {
                            count: t
                        }
                    }) : e === `high` ? (0, Y.jsx)(S, {
                        id: `wham.whamTaskIssuesSummary.highIssueCopy`,
                        defaultMessage: `{count, plural, one {# bug} other {# bugs}}`,
                        values: {
                            count: t
                        }
                    }) : e === `medium` ? (0, Y.jsx)(S, {
                        id: `wham.whamTaskIssuesSummary.mediumIssueCopy`,
                        defaultMessage: `{count, plural, one {# bug} other {# bugs}}`,
                        values: {
                            count: t
                        }
                    }) : (0, Y.jsx)(S, {
                        id: `wham.whamTaskIssuesSummary.lowIssueCopy`,
                        defaultMessage: `{count, plural, one {# bug} other {# bugs}}`,
                        values: {
                            count: t
                        }
                    })]
                })
            }, `${e}-${t}`)
        })
    })
}
var Y, Me = e((() => {
    L(), R(), s(), _(), w(), Y = b()
}));

function Ne(e) {
    return /^[0-9a-f]{40}$/i.test(e) ? e.slice(-7) : e.length > 48 ? `…` + e.slice(-48) : e
}
var Pe = e((() => {}));

function Fe(e) {
    return e ? e.merged ? `merged` : e.state === `closed` ? `closed` : e.draft ? `draft` : `open` : null
}

function Ie({
    taskAssistantTurnId: e,
    taskId: t,
    data: n,
    className: r
}) {
    let [i, o] = (0, X.useState)(n), s = (0, X.useRef)(!1);
    if ((0, X.useEffect)(() => {
            async function n() {
                if (!(!i || !e || !t || s.current)) {
                    if (!i.merged) try {
                        let n = await g.getTaskTurnPR(t, e);
                        o(n.pr)
                    } catch {}
                    s.current = !0
                }
            }
            n()
        }, [i, e, t]), !i) return null;
    let c = Fe(i);
    if (!c) return null;
    let l = i.url,
        u = e => {
            e.stopPropagation(), e.preventDefault(), window.open(l, `_blank`, `noopener,noreferrer`)
        };
    return (0, Z.jsxs)(`button`, {
        type: `button`,
        onClick: u,
        onAuxClick: e => {
            e.button === 1 && u(e)
        },
        className: a(`inline-flex w-fit cursor-pointer items-center rounded-full px-2.5 py-1 text-[10px] font-semibold`, `border border-transparent`, `group/pill overflow-hidden`, {
            "bg-[#C3DEC780] text-[#008C2E] dark:bg-[#6BBD6720] dark:text-[#6BBD67]": c === `open`,
            "bg-[#D6303D20] text-[#D6303D] dark:bg-[#FD756F20] dark:text-[#FD756F]": c === `closed`,
            "bg-[#8E3CF320] text-[#8E3CF3] dark:bg-[#C26FFD20] dark:text-[#C26FFD]": c === `merged`,
            "bg-[#59636E20] text-[#59636E] dark:bg-[#B2B2B220] dark:text-[#B2B2B2]": c === `draft`
        }, r),
        children: [(0, Z.jsxs)(`div`, {
            className: `relative`,
            children: [(0, Z.jsx)(`div`, {
                className: `icon-container relative transition-all duration-100 group-hover/pill:translate-y-full group-hover/pill:opacity-0 group-hover/pill:blur-sm`,
                children: c === `open` ? (0, Z.jsx)(xe, {
                    "aria-hidden": !0,
                    className: `icon-xs me-1`
                }) : c === `closed` ? (0, Z.jsx)(Ce, {
                    "aria-hidden": !0,
                    className: `icon-xs me-1`
                }) : c === `merged` ? (0, Z.jsx)(U, {
                    "aria-hidden": !0,
                    className: `icon-xs me-1`
                }) : (0, Z.jsx)(Te, {
                    "aria-hidden": !0,
                    className: `icon-xs me-1`
                })
            }), (0, Z.jsx)(`div`, {
                className: `absolute start-0 top-0 -translate-y-full opacity-0 transition-all duration-100 group-hover/pill:translate-y-0 group-hover/pill:opacity-100`,
                children: (0, Z.jsx)(P, {
                    "aria-hidden": !0,
                    className: `icon-xs me-1`
                })
            })]
        }), c === `open` ? (0, Z.jsx)(S, {
            id: `wham.prStatusBadge.open`,
            defaultMessage: `Open`
        }) : c === `closed` ? (0, Z.jsx)(S, {
            id: `wham.prStatusBadge.closed`,
            defaultMessage: `Closed`
        }) : c === `merged` ? (0, Z.jsx)(S, {
            id: `wham.prStatusBadge.merged`,
            defaultMessage: `Merged`
        }) : (0, Z.jsx)(S, {
            id: `wham.prStatusBadge.draft`,
            defaultMessage: `Draft`
        })]
    })
}
var X, Z, Le = e((() => {
    le(), Se(), we(), W(), Ee(), m(), _(), X = t(T()), w(), Z = b()
}));

function Re(e) {
    return e ? e.task_status_display?.initial_intent ?? null : null
}

function ze(e) {
    return e ? e.task_status_display?.latest_turn_status_display?.intent ?? null : null
}

function Be(e, t = `latest`) {
    let n = t === `initial` ? Re(e) : ze(e);
    return n === `cr` || n === `sr`
}
var Ve = e((() => {}));

function He(e) {
    return e === `archived` ? {
        add: [`current`, `all`],
        remove: [`archived`, `code_review`]
    } : e === `code_review` ? {
        add: [`archived`],
        remove: [`code_review`, `current`, `all`]
    } : {
        add: [`archived`],
        remove: [`current`, `all`, `code_review`]
    }
}

function Ue(e) {
    if (e) return typeof e == `string` ? e : `${e.partition_key}~${e.id}`
}

function We({
    taskListItem: e,
    index: t,
    disableFocusStyle: r,
    hoveredIndex: o,
    isCompact: s = !1,
    hideBorder: c = !1,
    onMouseEnter: d,
    onMouseLeave: f,
    linkPath: p,
    showArchiveButton: m = !0,
    currentFilter: _
}) {
    let v = O(),
        ee = ne(),
        y = !h(te),
        re = N(e => e.homeTab),
        ie = _ ?? se(re),
        b = N(e => e.removePendingTaskByTaskId),
        C = N(e => e.setLastViewedTaskId),
        w = e.task_status_display?.fix_task_id,
        T = ae(),
        E = e.task_status_display?.latest_turn_status_display?.turn_status ?? `pending`,
        D = Oe(e.id, E, e.task_status_display?.latest_turn_status_display?.turn_id),
        k = e.task_status_display?.latest_turn_status_display?.diff_stats?.lines_added ?? 0,
        A = e.task_status_display?.latest_turn_status_display?.diff_stats?.lines_removed ?? 0,
        j = e.task_status_display?.latest_turn_status_display,
        M = Be(e, `initial`),
        P = j?.issue_counts ?? null,
        F = Re(e) === `cr`,
        ce = P?.[`0`] ?? 0,
        le = P?.[`1`] ?? 0,
        ue = P?.[`2`] ?? 0,
        fe = P?.[`3`] ?? 0,
        I = P ? Object.values(P).reduce((e, t) => e + t, 0) : 0,
        L = u(e.pull_requests),
        pe = L?.id.startsWith(`gitlab-`) ?? !1,
        R = L?.pull_request,
        z = Ue(L?.assistant_turn_id),
        B = M ? R : null,
        ge = R?.head,
        ve = e.task_status_display?.branch_name,
        V = ge ?? ve ?? ``,
        H = Ne(V),
        xe = V && V !== H,
        Se = !y && !!V && V !== `master` && V !== `main` && R?.state !== `closed` && R?.state !== `merged`,
        U = j?.turn_id,
        Ce = j?.cancellation_requested_at != null,
        we = E === `completed` && I > 0 && !!U && P != null && !w && F,
        W = x(),
        Te = (0, Q.useMemo)(() => (0, $.jsx)(he, {
            size: 20,
            initialOffset: Math.random() * 20 * Math.PI
        }), []),
        Ee = t !== void 0 && o != null && t === o - 1,
        De = !M && !y && !s && E !== `pending` && E !== `in_progress` && m;
    (0, Q.useEffect)(() => {
        b(e.id)
    }, [e.id, b]);
    let {
        mutate: ke
    } = oe({
        mutationFn: ({
            taskId: e,
            currentFilter: t
        }) => t === `archived` ? g.recoverTask(e) : g.archiveTask(e),
        onMutate: async ({
            taskId: e,
            taskListItem: t,
            currentFilter: n
        }) => {
            let {
                add: r,
                remove: a
            } = He(n), o = {}, s = async e => {
                o[e.join(`|`)] = W.getQueryData(e), await W.cancelQueries({
                    queryKey: e
                })
            };
            for (let t of a) {
                let n = [`wham`, `tasks`, t];
                await s(n), W.setQueryData(n, t => i(t, t => {
                    t?.pages.forEach(t => {
                        t.items = (t.items ?? []).filter(t => t.id !== e)
                    })
                }))
            }
            for (let e of r) {
                let n = [`wham`, `tasks`, e];
                await s(n), W.setQueryData(n, e => i(e, e => {
                    if (!e || e.pages.length === 0) return;
                    let n = e.pages[0];
                    n.items = [t, ...n.items ?? []].filter((e, t, n) => n.findIndex(t => t.id === e.id) === t)
                }))
            }
            let c = [`wham`, `task`, t.id, t.task_status_display?.latest_turn_status_display?.turn_id];
            return o[c.join(`|`)] = W.getQueryData(c), await W.cancelQueries({
                queryKey: c
            }), W.setQueryData(c, e => i(e, e => {
                e && (e.task.archived = !e.task.archived)
            })), {
                snapshots: o
            }
        },
        onError: (e, t, n) => {
            Object.entries(n?.snapshots ?? {}).forEach(([e, t]) => {
                W.setQueryData(e.split(`|`), t)
            }), ee.danger(v.formatMessage({
                id: `wham.whamTaskRow.failedToUpdateTask`,
                defaultMessage: `Failed to update task`
            }))
        },
        onSuccess: (e, t) => {
            let {
                taskListItem: n,
                currentFilter: r
            } = t, {
                add: i,
                remove: a
            } = He(r);
            W.invalidateQueries({
                queryKey: [`wham`, `task`, n.id, n.task_status_display?.latest_turn_status_display?.turn_id]
            }), [...i, ...a].forEach(e => W.invalidateQueries({
                queryKey: [`wham`, `tasks`, e]
            }))
        }
    }), G = P == null ? null : (0, $.jsx)(je, {
        criticalIssueCount: ce,
        highIssueCount: le,
        mediumIssueCount: ue,
        lowIssueCount: fe,
        totalIssueCount: I
    }, `issues-summary`), K = [];
    switch (E) {
        case `pending`:
        case `in_progress`:
            Ce ? K.push((0, $.jsx)(`span`, {
                className: `text-token-text-secondary`,
                children: (0, $.jsx)(S, {
                    id: `wham.whamTaskRow.cancelling`,
                    defaultMessage: `Cancelling…`
                })
            }, `cancelling-text`)) : s ? K.push(Te) : (K.push((0, $.jsx)(`span`, {
                className: `loading-shimmer-pure-text`,
                children: _e(D, 32)
            }, `in-progress-text`)), Ce || K.push((0, $.jsx)(qe, {
                taskId: e.id
            })));
            break;
        case `failed`:
            K.push((0, $.jsx)(`span`, {
                className: `text-token-text-status-error`,
                children: (0, $.jsx)(S, {
                    id: `wham.whamTaskRow.failed`,
                    defaultMessage: `Failed`
                })
            }, `failed-text`));
            break;
        case `cancelled`:
            K.push((0, $.jsx)(`span`, {
                className: `text-token-text-secondary`,
                children: (0, $.jsx)(S, {
                    id: `wham.whamTaskRow.cancelled`,
                    defaultMessage: `Cancelled`
                })
            }, `cancelled-text`));
            break;
        case `completed`:
            G && K.push(G), R && z && K.push((0, $.jsx)(Ie, {
                taskAssistantTurnId: z,
                taskId: e.id,
                data: R
            }, `pr-status`)), (k !== 0 || A !== 0) && !P && K.push((0, $.jsx)(ye, {
                className: `min-w-10 justify-end`,
                linesAdded: k,
                linesRemoved: A
            }, `message-stats`));
            break;
        default:
            K.push((0, $.jsx)(`span`, {
                className: `text-token-text-secondary`,
                children: (0, $.jsx)(S, {
                    id: `wham.whamTaskRow.unknown`,
                    defaultMessage: `Unknown`
                })
            }, `unknown-text`));
            break
    }
    w && F ? K.push((0, $.jsx)(n, {
        type: `button`,
        size: `small`,
        color: `secondary`,
        onClick: e => {
            e.preventDefault(), e.stopPropagation(), C(w), T(`/codex/cloud/tasks/${w}`)
        },
        children: (0, $.jsx)(S, {
            id: `wham.whamTaskRow.viewFixTask`,
            defaultMessage: `Open fix`
        })
    }, `view-fix-button`)) : we && K.push((0, $.jsx)(Ae, {
        taskId: e.id,
        latestTurnId: U,
        highlightTasksTabOnSuccess: ie === `code_review`,
        repositoryProvider: pe ? `gitlab` : void 0
    }, `fix-button`)), E !== `completed` && G && K.unshift(G);
    let q = e.updated_at ? new Date(e.updated_at * 1e3) : null,
        J = e.task_status_display?.environment_label;
    return (0, $.jsx)(`div`, {
        className: `group task-row-container`,
        onMouseEnter: d,
        onMouseLeave: f,
        children: (0, $.jsxs)(Ge, {
            disableFocusStyle: r,
            taskId: e.id,
            linkPath: p,
            children: [(0, $.jsxs)(`div`, {
                className: a(`border-token-border-light grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-5 border-b px-4 py-3.5 text-sm md:px-3`, (Ee || c) && `border-b-transparent`),
                children: [(0, $.jsxs)(`div`, {
                    className: `flex flex-col gap-0.5`,
                    children: [(0, $.jsxs)(`div`, {
                        className: `text-token-text-primary flex w-full min-w-0 items-center gap-1.5`,
                        children: [e.has_unread_turn && (0, $.jsx)(`div`, {
                            className: `size-1.5 rounded-full bg-blue-500`
                        }), (0, $.jsx)(`div`, {
                            className: `flex-1 truncate font-medium`,
                            children: B?.title ? (0, $.jsx)(`span`, {
                                children: B.title
                            }) : (0, $.jsx)(Ke, {
                                task: e
                            })
                        })]
                    }), q && (0, $.jsxs)(`div`, {
                        className: `text-token-text-tertiary flex gap-1`,
                        children: [(0, $.jsx)(`span`, {
                            className: `truncate empty:hidden`,
                            children: (0, $.jsx)(be, {
                                dateString: q.toISOString()
                            })
                        }), J && (0, $.jsxs)($.Fragment, {
                            children: [(0, $.jsx)(`span`, {
                                className: `text-token-text-tertiary`,
                                children: `·`
                            }), (0, $.jsx)(`span`, {
                                className: `truncate empty:hidden`,
                                children: J
                            })]
                        }), Se && (0, $.jsxs)($.Fragment, {
                            children: [(0, $.jsx)(`span`, {
                                className: `text-token-text-tertiary`,
                                children: `·`
                            }), (0, $.jsx)(l, {
                                label: xe ? V : void 0,
                                children: (0, $.jsx)(`span`, {
                                    className: `max-w-[8rem] truncate md:max-w-[10rem]`,
                                    children: H
                                })
                            })]
                        })]
                    })]
                }), (0, $.jsx)(`div`, {
                    className: `flex flex-1 items-center gap-2`,
                    children: K
                })]
            }), De && (0, $.jsx)(`div`, {
                role: `button`,
                onClick: t => {
                    t.stopPropagation(), t.preventDefault(), ke({
                        taskId: e.id,
                        taskListItem: e,
                        currentFilter: ie
                    })
                },
                className: `before:from-token-bg-tertiary before:via-token-bg-tertiary absolute inset-y-1 end-0 z-20 flex w-20 cursor-pointer items-center justify-end pe-2 opacity-0 transition-opacity duration-0 group-hover:opacity-100 group-hover:duration-0 before:pointer-events-none before:absolute before:inset-0 before:-start-0.5 before:bg-gradient-to-l before:to-transparent before:content-['']`,
                children: (0, $.jsx)(l, {
                    label: e.archived ? v.formatMessage({
                        id: `wham.whamTaskRow.unarchiveTask`,
                        defaultMessage: `Unarchive`
                    }) : v.formatMessage({
                        id: `wham.whamTaskRow.archiveTask`,
                        defaultMessage: `Archive`
                    }),
                    side: `top`,
                    children: e.archived ? (0, $.jsx)(me, {
                        className: `icon-md text-token-text-secondary hover:text-token-text-primary relative z-10`
                    }) : (0, $.jsx)(de, {
                        className: `icon-md text-token-text-secondary hover:text-token-text-primary relative z-10`
                    })
                })
            })]
        })
    })
}

function Ge({
    taskId: e,
    children: t,
    disableFocusStyle: n,
    linkPath: r
}) {
    let i = N(e => e.setLastViewedTaskId),
        o = N(e => e.lastViewedTaskId),
        s = (0, Q.useRef)(null),
        c = ie();
    return (0, Q.useEffect)(() => {
        o === e && requestAnimationFrame(() => {
            s.current?.scrollIntoView({
                behavior: `instant`,
                block: `center`
            }), c.state?.focusComposer || s.current?.focus()
        })
    }, []), e ? (0, $.jsx)(`div`, {
        className: a(`hover:bg-token-bg-tertiary relative ring-inset`, !n && `focus-within:border-token-border-heavy focus-within:border-s-2 focus-within:ps-[-2px]`),
        children: (0, $.jsx)(E, {
            className: `outline-offset-[-1px] focus-within:rounded-lg`,
            ref: s,
            to: r ?? `/codex/cloud/tasks/${e}`,
            onClick: () => i(e),
            onMouseDown: e => e.preventDefault(),
            children: t
        })
    }) : (0, $.jsx)(`div`, {
        className: `hover:bg-token-bg-tertiary relative rounded-lg`,
        children: t
    })
}

function Ke({
    task: e
}) {
    let t = O(),
        n = e.task_status_display?.latest_turn_status_display,
        r = n ? n.turn_status ?? `pending` : `failed`,
        [i, a] = (0, Q.useState)(),
        o = n?.turn_id,
        s = e.has_generated_title === !1 && (r === `pending` || r === `in_progress`) && !!o,
        c = (0, Q.useMemo)(() => `title-${e.id}-${o??``}`, [e.id, o]);
    return De(e.id, o, [`task_title_generated`], {
        enabled: s,
        subscriberId: c,
        onEvent: e => a(e.title)
    }), r === `failed` && e.has_generated_title === !1 ? t.formatMessage({
        id: `wham.whamTaskRow.codexTask`,
        defaultMessage: `Codex task`
    }) : e.has_generated_title === !1 && !i ? (0, $.jsx)(B, {
        className: `mt-[0.425rem] mb-[0.225rem] h-[0.6rem] w-[200px]`
    }) : (0, $.jsx)(`span`, {
        children: i ?? e.title
    })
}

function qe({
    taskId: e
}) {
    let t = O(),
        n = ne(),
        r = x(),
        [i, a] = (0, Q.useState)(!1),
        {
            mutate: o
        } = oe({
            mutationFn: async () => (a(!0), await g.cancelTask(e), await r.invalidateQueries({
                queryKey: [`wham`, `tasks`]
            }), !0),
            onError: () => {
                n.danger(t.formatMessage({
                    id: `wham.whamTaskRow.failedToCancelTask`,
                    defaultMessage: `Failed to cancel task`
                }))
            },
            onSuccess: () => {}
        });
    return (0, $.jsx)(`button`, {
        type: `button`,
        className: `border-token-border-heavy hover:bg-token-bg-secondary flex h-6 w-6 items-center justify-center rounded-full border`,
        onClick: e => {
            e.stopPropagation(), e.preventDefault(), j.recordCancel(`home`), o()
        },
        disabled: i,
        "aria-label": t.formatMessage({
            id: `wham.composer.cancelTask`,
            defaultMessage: `Cancel task`
        }),
        "data-testid": `stop-button`,
        children: i ? (0, $.jsx)(c, {
            className: `icon-sm p-0.5`
        }) : (0, $.jsx)(fe, {
            className: `icon-sm`
        })
    })
}
var Q, $, Je = e((() => {
    d(), z(), ue(), I(), ce(), s(), r(), re(), o(), v(), ve(), ge(), J(), Me(), A(), V(), k(), H(), Pe(), Le(), Ve(), ke(), m(), M(), D(), _(), y(), ee(), Q = t(T()), w(), C(), $ = b()
}));
export {
    Ve as a, Pe as c, ze as i, J as l, Je as n, Be as o, Re as r, Ne as s, We as t, G as u
};
//# sourceMappingURL=0b9bc04d-jf0hbqq02p04iykh.js.map
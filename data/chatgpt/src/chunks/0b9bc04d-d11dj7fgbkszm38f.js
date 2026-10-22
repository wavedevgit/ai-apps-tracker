import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    Act as r,
    LU as i,
    Qy as a,
    Rz as o,
    Zy as s,
    c7 as c,
    d1 as l,
    eE as u,
    fl as d,
    gl as f,
    hl as p,
    k8 as m,
    kct as h,
    l7 as g,
    ml as _,
    q5 as ee,
    rq as te,
    u1 as v,
    uq as ne,
    zU as y,
    zz as b
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    At as re,
    Bn as x,
    N as S,
    Nn as C,
    Nt as ie,
    Q as w,
    Rn as T,
    Vn as E,
    it as D,
    p as ae,
    s as oe,
    zn as O
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    AJ as se,
    Bun as k,
    Lun as ce,
    Run as A,
    Vun as j,
    jJ as M
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    Bm as N,
    Hy as P,
    Jy as le,
    Uy as ue,
    Vm as de,
    Yy as fe,
    _S as pe,
    _y as me,
    bh as F,
    gy as I,
    vS as he,
    xh as L
} from "./30901919-r9pahacmzqudnt4f.js";
import {
    n as R,
    t as ge
} from "./af004db9-fzg2csyped3pyyuu.js";
import {
    n as z,
    r as _e
} from "./0eda9bd1-bxv643wkhtasmlvu.js";
import {
    n as ve,
    t as ye
} from "./7271f1c9-eisaobgjylt9iv5o.js";
import {
    n as B,
    t as be
} from "./1f8ec761-l37uzs59ssarykby.js";
import {
    n as V,
    t as xe
} from "./805f0379-h7v3i6qmjtuodpbb.js";
import {
    B as Se,
    G as Ce,
    H,
    K as U,
    U as we,
    V as W,
    W as Te,
    z as Ee
} from "./9e18a103-gt2rxabbn5kudo6n.js";
import {
    i as De,
    r as Oe,
    t as ke
} from "./9371a995-l1cmxmylmhalyqd0.js";

function G({
    taskId: e,
    latestTurnId: t,
    behavior: n = `navigate`,
    repositoryProvider: i,
    onFixCreated: a
}) {
    let o = O(),
        s = y(),
        c = ie(),
        l = S(),
        u = j(e => e.setLastViewedTaskId),
        p = j(e => e.assignPendingTaskToFinalTask),
        m = j(e => e.removePendingTaskId),
        h = j(e => e.clearFixReviewTaskInFlight),
        g = (0, K.useCallback)(t => {
            [`current`, `all`, `code_review`, `archived`].forEach(n => {
                let i = [`wham`, `tasks`, n];
                l.setQueryData(i, n => r(n, n => {
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
    return ae({
        mutationFn: async () => {
            if (!t) throw Error(`missing_latest_turn_id`);
            return await _.createFixReviewTask(e, t)
        },
        onSuccess: (t, r) => {
            g(t.task.id), l.invalidateQueries({
                queryKey: [`wham`, `tasks`]
            }), l.invalidateQueries({
                queryKey: [`wham`, `tasks`, `current`]
            }), h(e), r?.pendingTaskId && p(r.pendingTaskId, t.task.id), n === `navigate` && (u(t.task.id), c(`/codex/cloud/tasks/${t.task.id}`), s.success(o.formatMessage({
                id: `wham.whamTaskRow.fixTaskCreated`,
                defaultMessage: `Started fix task`
            }))), a?.({
                fixTaskId: t.task.id,
                pendingTaskId: r?.pendingTaskId,
                response: t
            })
        },
        onError: (t, n) => {
            if (h(e), n?.pendingTaskId && m(n.pendingTaskId), t instanceof d) {
                f(t, e, o, s, {
                    repositoryProvider: i
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
    let i = j(e => e.addPendingTaskId),
        a = j(e => e.shouldHighlightTasksTab),
        s = j(e => e.setShouldHighlightTasksTab),
        c = j(e => e.markFixReviewTaskInFlight),
        l = j(e => e.clearFixReviewTaskInFlight),
        u = j(t => !!t.fixReviewTasksInFlight[e]),
        d = G({
            taskId: e,
            latestTurnId: t,
            behavior: `stay`,
            repositoryProvider: r
        }),
        f = (0, K.useCallback)(r => {
            if (r.stopPropagation(), r.preventDefault(), u || d.isPending || !t) return;
            let o = crypto.randomUUID();
            i(o);
            let f = n && !a;
            f && s(!0), c(e), d.mutateAsync({
                pendingTaskId: o
            }).catch(() => {
                f && s(!1), l(e)
            })
        }, [i, n, u, d, s, c, l, a, e, t]),
        p = d.isPending || u;
    return (0, q.jsx)(`button`, {
        type: `button`,
        className: `border-token-border-subtle bg-token-bg-tertiary text-token-text-primary hover:bg-token-bg-secondary flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-70`,
        onClick: f,
        disabled: p || !t,
        children: p ? (0, q.jsx)(o, {
            className: `icon-sm`
        }) : (0, q.jsx)(C, {
            id: `wham.whamTaskRow.fixButton`,
            defaultMessage: `Fix`
        })
    })
}
var K, q, J = e((() => {
    b(), i(), p(), k(), oe(), h(), K = t(E()), T(), w(), q = x()
}));

function je({
    criticalIssueCount: e,
    highIssueCount: t,
    mediumIssueCount: n,
    lowIssueCount: r,
    totalIssueCount: i
}) {
    "use no forget";
    let a = O();
    return i === 0 ? (0, Y.jsx)(s, {
        label: a.formatMessage({
            id: `wham.whamTaskIssuesSummary.noIssuesTooltip`,
            defaultMessage: `Codex didn’t flag any issues`
        }),
        children: (0, Y.jsx)(`span`, {
            className: `bg-token-bg-success/20 text-token-text-primary inline-flex min-w-[1.5rem] items-center justify-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold`,
            children: (0, Y.jsx)(le, {
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
                r = e === `critical` ? a.formatMessage({
                    id: `wham.whamTaskIssuesSummary.criticalIssueTooltip`,
                    defaultMessage: `Codex flagged {count, plural, one {# severe bug} other {# severe bugs}}`
                }, {
                    count: t
                }) : e === `high` ? a.formatMessage({
                    id: `wham.whamTaskIssuesSummary.highIssueTooltip`,
                    defaultMessage: `Codex flagged {count, plural, one {# bug} other {# bugs}}`
                }, {
                    count: t
                }) : e === `medium` ? a.formatMessage({
                    id: `wham.whamTaskIssuesSummary.mediumIssueTooltip`,
                    defaultMessage: `Codex flagged {count, plural, one {# bug} other {# bugs}}`
                }, {
                    count: t
                }) : a.formatMessage({
                    id: `wham.whamTaskIssuesSummary.lowIssueTooltip`,
                    defaultMessage: `Codex flagged {count, plural, one {# bug} other {# bugs}}`
                }, {
                    count: t
                }),
                i = n ? `bg-token-text-status-error/15 text-token-text-status-error` : e === `high` ? `bg-token-text-status-warning/15 text-token-text-status-warning` : e === `medium` ? `bg-token-bg-tertiary text-token-text-secondary` : `bg-token-bg-tertiary text-token-text-tertiary`,
                o = n ? `text-token-text-status-error` : e === `high` ? `text-token-text-status-warning` : e === `medium` ? `text-token-text-secondary` : `text-token-text-tertiary`;
            return (0, Y.jsx)(s, {
                label: r,
                children: (0, Y.jsxs)(`span`, {
                    className: c(`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium`, i),
                    children: [(0, Y.jsx)(F, {
                        className: c(`icon-sm`, o)
                    }), e === `critical` ? (0, Y.jsx)(C, {
                        id: `wham.whamTaskIssuesSummary.criticalIssueCopy`,
                        defaultMessage: `{count, plural, one {# severe bug} other {# severe bugs}}`,
                        values: {
                            count: t
                        }
                    }) : e === `high` ? (0, Y.jsx)(C, {
                        id: `wham.whamTaskIssuesSummary.highIssueCopy`,
                        defaultMessage: `{count, plural, one {# bug} other {# bugs}}`,
                        values: {
                            count: t
                        }
                    }) : e === `medium` ? (0, Y.jsx)(C, {
                        id: `wham.whamTaskIssuesSummary.mediumIssueCopy`,
                        defaultMessage: `{count, plural, one {# bug} other {# bugs}}`,
                        values: {
                            count: t
                        }
                    }) : (0, Y.jsx)(C, {
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
    fe(), L(), a(), g(), T(), Y = x()
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
    let [i, a] = (0, X.useState)(n), o = (0, X.useRef)(!1);
    if ((0, X.useEffect)(() => {
            async function n() {
                if (!(!i || !e || !t || o.current)) {
                    if (!i.merged) try {
                        let n = await _.getTaskTurnPR(t, e);
                        a(n.pr)
                    } catch {}
                    o.current = !0
                }
            }
            n()
        }, [i, e, t]), !i) return null;
    let s = Fe(i);
    if (!s) return null;
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
        className: c(`inline-flex w-fit cursor-pointer items-center rounded-full px-2.5 py-1 text-[10px] font-semibold`, `border border-transparent`, `group/pill overflow-hidden`, {
            "bg-[#C3DEC780] text-[#008C2E] dark:bg-[#6BBD6720] dark:text-[#6BBD67]": s === `open`,
            "bg-[#D6303D20] text-[#D6303D] dark:bg-[#FD756F20] dark:text-[#FD756F]": s === `closed`,
            "bg-[#8E3CF320] text-[#8E3CF3] dark:bg-[#C26FFD20] dark:text-[#C26FFD]": s === `merged`,
            "bg-[#59636E20] text-[#59636E] dark:bg-[#B2B2B220] dark:text-[#B2B2B2]": s === `draft`
        }, r),
        children: [(0, Z.jsxs)(`div`, {
            className: `relative`,
            children: [(0, Z.jsx)(`div`, {
                className: `icon-container relative transition-all duration-100 group-hover/pill:translate-y-full group-hover/pill:opacity-0 group-hover/pill:blur-sm`,
                children: s === `open` ? (0, Z.jsx)(Se, {
                    "aria-hidden": !0,
                    className: `icon-xs me-1`
                }) : s === `closed` ? (0, Z.jsx)(U, {
                    "aria-hidden": !0,
                    className: `icon-xs me-1`
                }) : s === `merged` ? (0, Z.jsx)(H, {
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
        }), s === `open` ? (0, Z.jsx)(C, {
            id: `wham.prStatusBadge.open`,
            defaultMessage: `Open`
        }) : s === `closed` ? (0, Z.jsx)(C, {
            id: `wham.prStatusBadge.closed`,
            defaultMessage: `Closed`
        }) : s === `merged` ? (0, Z.jsx)(C, {
            id: `wham.prStatusBadge.merged`,
            defaultMessage: `Merged`
        }) : (0, Z.jsx)(C, {
            id: `wham.prStatusBadge.draft`,
            defaultMessage: `Draft`
        })]
    })
}
var X, Z, Le = e((() => {
    ue(), Ce(), we(), W(), Ee(), p(), g(), X = t(E()), T(), Z = x()
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
    disableFocusStyle: i,
    hoveredIndex: a,
    isCompact: o = !1,
    hideBorder: u = !1,
    onMouseEnter: d,
    onMouseLeave: f,
    linkPath: p,
    showArchiveButton: m = !0,
    currentFilter: h
}) {
    let g = O(),
        te = y(),
        v = !ee(ne),
        b = j(e => e.homeTab),
        re = h ?? ce(b),
        x = j(e => e.removePendingTaskByTaskId),
        w = j(e => e.setLastViewedTaskId),
        T = e.task_status_display?.fix_task_id,
        E = ie(),
        D = e.task_status_display?.latest_turn_status_display?.turn_status ?? `pending`,
        oe = Oe(e.id, D, e.task_status_display?.latest_turn_status_display?.turn_id),
        se = e.task_status_display?.latest_turn_status_display?.diff_stats?.lines_added ?? 0,
        k = e.task_status_display?.latest_turn_status_display?.diff_stats?.lines_removed ?? 0,
        A = e.task_status_display?.latest_turn_status_display,
        M = Be(e, `initial`),
        N = A?.issue_counts ?? null,
        P = Re(e) === `cr`,
        le = N?.[`0`] ?? 0,
        ue = N?.[`1`] ?? 0,
        fe = N?.[`2`] ?? 0,
        me = N?.[`3`] ?? 0,
        F = N ? Object.values(N).reduce((e, t) => e + t, 0) : 0,
        I = l(e.pull_requests),
        he = I?.id.startsWith(`gitlab-`) ?? !1,
        L = I?.pull_request,
        R = Ue(I?.assistant_turn_id),
        z = M ? L : null,
        _e = L?.head,
        ye = e.task_status_display?.branch_name,
        B = _e ?? ye ?? ``,
        V = Ne(B),
        Se = B && B !== V,
        Ce = !v && !!B && B !== `master` && B !== `main` && L?.state !== `closed` && L?.state !== `merged`,
        H = A?.turn_id,
        U = A?.cancellation_requested_at != null,
        we = D === `completed` && F > 0 && !!H && N != null && !T && P,
        W = S(),
        Te = (0, Q.useMemo)(() => (0, $.jsx)(ge, {
            size: 20,
            initialOffset: Math.random() * 20 * Math.PI
        }), []),
        Ee = t !== void 0 && a != null && t === a - 1,
        De = !M && !v && !o && D !== `pending` && D !== `in_progress` && m;
    (0, Q.useEffect)(() => {
        x(e.id)
    }, [e.id, x]);
    let {
        mutate: ke
    } = ae({
        mutationFn: ({
            taskId: e,
            currentFilter: t
        }) => t === `archived` ? _.recoverTask(e) : _.archiveTask(e),
        onMutate: async ({
            taskId: e,
            taskListItem: t,
            currentFilter: n
        }) => {
            let {
                add: i,
                remove: a
            } = He(n), o = {}, s = async e => {
                o[e.join(`|`)] = W.getQueryData(e), await W.cancelQueries({
                    queryKey: e
                })
            };
            for (let t of a) {
                let n = [`wham`, `tasks`, t];
                await s(n), W.setQueryData(n, t => r(t, t => {
                    t?.pages.forEach(t => {
                        t.items = (t.items ?? []).filter(t => t.id !== e)
                    })
                }))
            }
            for (let e of i) {
                let n = [`wham`, `tasks`, e];
                await s(n), W.setQueryData(n, e => r(e, e => {
                    if (!e || e.pages.length === 0) return;
                    let n = e.pages[0];
                    n.items = [t, ...n.items ?? []].filter((e, t, n) => n.findIndex(t => t.id === e.id) === t)
                }))
            }
            let c = [`wham`, `task`, t.id, t.task_status_display?.latest_turn_status_display?.turn_id];
            return o[c.join(`|`)] = W.getQueryData(c), await W.cancelQueries({
                queryKey: c
            }), W.setQueryData(c, e => r(e, e => {
                e && (e.task.archived = !e.task.archived)
            })), {
                snapshots: o
            }
        },
        onError: (e, t, n) => {
            Object.entries(n?.snapshots ?? {}).forEach(([e, t]) => {
                W.setQueryData(e.split(`|`), t)
            }), te.danger(g.formatMessage({
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
    }), G = N == null ? null : (0, $.jsx)(je, {
        criticalIssueCount: le,
        highIssueCount: ue,
        mediumIssueCount: fe,
        lowIssueCount: me,
        totalIssueCount: F
    }, `issues-summary`), K = [];
    switch (D) {
        case `pending`:
        case `in_progress`:
            U ? K.push((0, $.jsx)(`span`, {
                className: `text-token-text-secondary`,
                children: (0, $.jsx)(C, {
                    id: `wham.whamTaskRow.cancelling`,
                    defaultMessage: `Cancelling…`
                })
            }, `cancelling-text`)) : o ? K.push(Te) : (K.push((0, $.jsx)(`span`, {
                className: `loading-shimmer-pure-text`,
                children: ve(oe, 32)
            }, `in-progress-text`)), U || K.push((0, $.jsx)(qe, {
                taskId: e.id
            })));
            break;
        case `failed`:
            K.push((0, $.jsx)(`span`, {
                className: `text-token-text-status-error`,
                children: (0, $.jsx)(C, {
                    id: `wham.whamTaskRow.failed`,
                    defaultMessage: `Failed`
                })
            }, `failed-text`));
            break;
        case `cancelled`:
            K.push((0, $.jsx)(`span`, {
                className: `text-token-text-secondary`,
                children: (0, $.jsx)(C, {
                    id: `wham.whamTaskRow.cancelled`,
                    defaultMessage: `Cancelled`
                })
            }, `cancelled-text`));
            break;
        case `completed`:
            G && K.push(G), L && R && K.push((0, $.jsx)(Ie, {
                taskAssistantTurnId: R,
                taskId: e.id,
                data: L
            }, `pr-status`)), (se !== 0 || k !== 0) && !N && K.push((0, $.jsx)(be, {
                className: `min-w-10 justify-end`,
                linesAdded: se,
                linesRemoved: k
            }, `message-stats`));
            break;
        default:
            K.push((0, $.jsx)(`span`, {
                className: `text-token-text-secondary`,
                children: (0, $.jsx)(C, {
                    id: `wham.whamTaskRow.unknown`,
                    defaultMessage: `Unknown`
                })
            }, `unknown-text`));
            break
    }
    T && P ? K.push((0, $.jsx)(n, {
        type: `button`,
        size: `small`,
        color: `secondary`,
        onClick: e => {
            e.preventDefault(), e.stopPropagation(), w(T), E(`/codex/cloud/tasks/${T}`)
        },
        children: (0, $.jsx)(C, {
            id: `wham.whamTaskRow.viewFixTask`,
            defaultMessage: `Open fix`
        })
    }, `view-fix-button`)) : we && K.push((0, $.jsx)(Ae, {
        taskId: e.id,
        latestTurnId: H,
        highlightTasksTabOnSuccess: re === `code_review`,
        repositoryProvider: he ? `gitlab` : void 0
    }, `fix-button`)), D !== `completed` && G && K.unshift(G);
    let q = e.updated_at ? new Date(e.updated_at * 1e3) : null,
        J = e.task_status_display?.environment_label;
    return (0, $.jsx)(`div`, {
        className: `group task-row-container`,
        onMouseEnter: d,
        onMouseLeave: f,
        children: (0, $.jsxs)(Ge, {
            disableFocusStyle: i,
            taskId: e.id,
            linkPath: p,
            children: [(0, $.jsxs)(`div`, {
                className: c(`border-token-border-light grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-5 border-b px-4 py-3.5 text-sm md:px-3`, (Ee || u) && `border-b-transparent`),
                children: [(0, $.jsxs)(`div`, {
                    className: `flex flex-col gap-0.5`,
                    children: [(0, $.jsxs)(`div`, {
                        className: `text-token-text-primary flex w-full min-w-0 items-center gap-1.5`,
                        children: [e.has_unread_turn && (0, $.jsx)(`div`, {
                            className: `size-1.5 rounded-full bg-blue-500`
                        }), (0, $.jsx)(`div`, {
                            className: `flex-1 truncate font-medium`,
                            children: z?.title ? (0, $.jsx)(`span`, {
                                children: z.title
                            }) : (0, $.jsx)(Ke, {
                                task: e
                            })
                        })]
                    }), q && (0, $.jsxs)(`div`, {
                        className: `text-token-text-tertiary flex gap-1`,
                        children: [(0, $.jsx)(`span`, {
                            className: `truncate empty:hidden`,
                            children: (0, $.jsx)(xe, {
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
                        }), Ce && (0, $.jsxs)($.Fragment, {
                            children: [(0, $.jsx)(`span`, {
                                className: `text-token-text-tertiary`,
                                children: `·`
                            }), (0, $.jsx)(s, {
                                label: Se ? B : void 0,
                                children: (0, $.jsx)(`span`, {
                                    className: `max-w-[8rem] truncate md:max-w-[10rem]`,
                                    children: V
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
                        currentFilter: re
                    })
                },
                className: `before:from-token-bg-tertiary before:via-token-bg-tertiary absolute inset-y-1 end-0 z-20 flex w-20 cursor-pointer items-center justify-end pe-2 opacity-0 transition-opacity duration-0 group-hover:opacity-100 group-hover:duration-0 before:pointer-events-none before:absolute before:inset-0 before:-start-0.5 before:bg-gradient-to-l before:to-transparent before:content-['']`,
                children: (0, $.jsx)(s, {
                    label: e.archived ? g.formatMessage({
                        id: `wham.whamTaskRow.unarchiveTask`,
                        defaultMessage: `Unarchive`
                    }) : g.formatMessage({
                        id: `wham.whamTaskRow.archiveTask`,
                        defaultMessage: `Archive`
                    }),
                    side: `top`,
                    children: e.archived ? (0, $.jsx)(de, {
                        className: `icon-md text-token-text-secondary hover:text-token-text-primary relative z-10`
                    }) : (0, $.jsx)(pe, {
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
    let i = j(e => e.setLastViewedTaskId),
        a = j(e => e.lastViewedTaskId),
        o = (0, Q.useRef)(null),
        s = re();
    return (0, Q.useEffect)(() => {
        a === e && requestAnimationFrame(() => {
            o.current?.scrollIntoView({
                behavior: `instant`,
                block: `center`
            }), s.state?.focusComposer || o.current?.focus()
        })
    }, []), e ? (0, $.jsx)(`div`, {
        className: c(`hover:bg-token-bg-tertiary relative ring-inset`, !n && `focus-within:border-token-border-heavy focus-within:border-s-2 focus-within:ps-[-2px]`),
        children: (0, $.jsx)(D, {
            className: `outline-offset-[-1px] focus-within:rounded-lg`,
            ref: o,
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
    }) : e.has_generated_title === !1 && !i ? (0, $.jsx)(z, {
        className: `mt-[0.425rem] mb-[0.225rem] h-[0.6rem] w-[200px]`
    }) : (0, $.jsx)(`span`, {
        children: i ?? e.title
    })
}

function qe({
    taskId: e
}) {
    let t = O(),
        n = y(),
        r = S(),
        [i, a] = (0, Q.useState)(!1),
        {
            mutate: s
        } = ae({
            mutationFn: async () => (a(!0), await _.cancelTask(e), await r.invalidateQueries({
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
            e.stopPropagation(), e.preventDefault(), se.recordCancel(`home`), s()
        },
        disabled: i,
        "aria-label": t.formatMessage({
            id: `wham.composer.cancelTask`,
            defaultMessage: `Cancel task`
        }),
        "data-testid": `stop-button`,
        children: i ? (0, $.jsx)(o, {
            className: `icon-sm p-0.5`
        }) : (0, $.jsx)(me, {
            className: `icon-sm`
        })
    })
}
var Q, $, Je = e((() => {
    u(), R(), he(), I(), N(), a(), m(), b(), i(), te(), ye(), _e(), J(), Me(), A(), B(), M(), V(), Pe(), Le(), Ve(), ke(), p(), k(), oe(), g(), h(), v(), Q = t(E()), T(), w(), $ = x()
}));
export {
    Ve as a, Pe as c, ze as i, J as l, Je as n, Be as o, Re as r, Ne as s, We as t, G as u
};
//# sourceMappingURL=0b9bc04d-d11dj7fgbkszm38f.js.map
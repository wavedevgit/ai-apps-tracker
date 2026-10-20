import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A5 as n,
    Az as r,
    G5 as i,
    JT as a,
    K5 as o,
    VU as s,
    Xy as c,
    Yy as l,
    aq as u,
    cct as d,
    e1 as f,
    f8 as p,
    fl as m,
    fq as ee,
    jz as h,
    lct as g,
    ml as _,
    pl as v,
    qT as te,
    t1 as ne,
    ul as re,
    zU as ie
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    $ as y,
    Bn as b,
    N as ae,
    Nn as x,
    Pt as oe,
    Rn as S,
    Vn as C,
    at as se,
    jt as w,
    p as T,
    s as E,
    zn as D
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Bun as O,
    Iun as ce,
    Lun as k,
    OJ as A,
    kJ as j,
    zun as M
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
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
} from "./30901919-om7b3qf5hp4j9x4l.js";
import {
    n as R,
    t as ge
} from "./af004db9-kouk4100w6rgjqxb.js";
import {
    n as z,
    r as _e
} from "./0eda9bd1-mzrypn6zt6pr0mto.js";
import {
    n as ve,
    t as ye
} from "./7271f1c9-eisaobgjylt9iv5o.js";
import {
    n as B,
    t as be
} from "./1f8ec761-cht50a3vmd1gnos7.js";
import {
    n as V,
    t as xe
} from "./805f0379-ixh7u7o4mzi2s9eb.js";
import {
    B as Se,
    G as Ce,
    H,
    K as U,
    U as we,
    V as W,
    W as Te,
    z as Ee
} from "./9e18a103-k713d1yermbdqxul.js";
import {
    i as De,
    r as Oe,
    t as ke
} from "./9371a995-c0r14k31un7q5cyq.js";

function G({
    taskId: e,
    latestTurnId: t,
    behavior: n = `navigate`,
    repositoryProvider: r,
    onFixCreated: i
}) {
    let a = D(),
        o = s(),
        c = oe(),
        l = ae(),
        u = O(e => e.setLastViewedTaskId),
        d = O(e => e.assignPendingTaskToFinalTask),
        f = O(e => e.removePendingTaskId),
        p = O(e => e.clearFixReviewTaskInFlight),
        ee = (0, K.useCallback)(t => {
            [`current`, `all`, `code_review`, `archived`].forEach(n => {
                let r = [`wham`, `tasks`, n];
                l.setQueryData(r, n => g(n, n => {
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
    return T({
        mutationFn: async () => {
            if (!t) throw Error(`missing_latest_turn_id`);
            return await m.createFixReviewTask(e, t)
        },
        onSuccess: (t, r) => {
            ee(t.task.id), l.invalidateQueries({
                queryKey: [`wham`, `tasks`]
            }), l.invalidateQueries({
                queryKey: [`wham`, `tasks`, `current`]
            }), p(e), r?.pendingTaskId && d(r.pendingTaskId, t.task.id), n === `navigate` && (u(t.task.id), c(`/codex/cloud/tasks/${t.task.id}`), o.success(a.formatMessage({
                id: `wham.whamTaskRow.fixTaskCreated`,
                defaultMessage: `Started fix task`
            }))), i?.({
                fixTaskId: t.task.id,
                pendingTaskId: r?.pendingTaskId,
                response: t
            })
        },
        onError: (t, n) => {
            if (p(e), n?.pendingTaskId && f(n.pendingTaskId), t instanceof re) {
                _(t, e, a, o, {
                    repositoryProvider: r
                });
                return
            }
            o.danger(a.formatMessage({
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
    repositoryProvider: i
}) {
    let a = O(e => e.addPendingTaskId),
        o = O(e => e.shouldHighlightTasksTab),
        s = O(e => e.setShouldHighlightTasksTab),
        c = O(e => e.markFixReviewTaskInFlight),
        l = O(e => e.clearFixReviewTaskInFlight),
        u = O(t => !!t.fixReviewTasksInFlight[e]),
        d = G({
            taskId: e,
            latestTurnId: t,
            behavior: `stay`,
            repositoryProvider: i
        }),
        f = (0, K.useCallback)(r => {
            if (r.stopPropagation(), r.preventDefault(), u || d.isPending || !t) return;
            let i = crypto.randomUUID();
            a(i);
            let f = n && !o;
            f && s(!0), c(e), d.mutateAsync({
                pendingTaskId: i
            }).catch(() => {
                f && s(!1), l(e)
            })
        }, [a, n, u, d, s, c, l, o, e, t]),
        p = d.isPending || u;
    return (0, q.jsx)(`button`, {
        type: `button`,
        className: `border-token-border-subtle bg-token-bg-tertiary text-token-text-primary hover:bg-token-bg-secondary flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-70`,
        onClick: f,
        disabled: p || !t,
        children: p ? (0, q.jsx)(r, {
            className: `icon-sm`
        }) : (0, q.jsx)(x, {
            id: `wham.whamTaskRow.fixButton`,
            defaultMessage: `Fix`
        })
    })
}
var K, q, J = e((() => {
    h(), ie(), v(), M(), E(), d(), K = t(C()), S(), y(), q = b()
}));

function je({
    criticalIssueCount: e,
    highIssueCount: t,
    mediumIssueCount: n,
    lowIssueCount: r,
    totalIssueCount: a
}) {
    "use no forget";
    let o = D();
    return a === 0 ? (0, Y.jsx)(l, {
        label: o.formatMessage({
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
                a = n ? `bg-token-text-status-error/15 text-token-text-status-error` : e === `high` ? `bg-token-text-status-warning/15 text-token-text-status-warning` : e === `medium` ? `bg-token-bg-tertiary text-token-text-secondary` : `bg-token-bg-tertiary text-token-text-tertiary`,
                s = n ? `text-token-text-status-error` : e === `high` ? `text-token-text-status-warning` : e === `medium` ? `text-token-text-secondary` : `text-token-text-tertiary`;
            return (0, Y.jsx)(l, {
                label: r,
                children: (0, Y.jsxs)(`span`, {
                    className: i(`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium`, a),
                    children: [(0, Y.jsx)(F, {
                        className: i(`icon-sm`, s)
                    }), e === `critical` ? (0, Y.jsx)(x, {
                        id: `wham.whamTaskIssuesSummary.criticalIssueCopy`,
                        defaultMessage: `{count, plural, one {# severe bug} other {# severe bugs}}`,
                        values: {
                            count: t
                        }
                    }) : e === `high` ? (0, Y.jsx)(x, {
                        id: `wham.whamTaskIssuesSummary.highIssueCopy`,
                        defaultMessage: `{count, plural, one {# bug} other {# bugs}}`,
                        values: {
                            count: t
                        }
                    }) : e === `medium` ? (0, Y.jsx)(x, {
                        id: `wham.whamTaskIssuesSummary.mediumIssueCopy`,
                        defaultMessage: `{count, plural, one {# bug} other {# bugs}}`,
                        values: {
                            count: t
                        }
                    }) : (0, Y.jsx)(x, {
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
    fe(), L(), c(), o(), S(), Y = b()
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
    let [a, o] = (0, X.useState)(n), s = (0, X.useRef)(!1);
    if ((0, X.useEffect)(() => {
            async function n() {
                if (!(!a || !e || !t || s.current)) {
                    if (!a.merged) try {
                        let n = await m.getTaskTurnPR(t, e);
                        o(n.pr)
                    } catch {}
                    s.current = !0
                }
            }
            n()
        }, [a, e, t]), !a) return null;
    let c = Fe(a);
    if (!c) return null;
    let l = a.url,
        u = e => {
            e.stopPropagation(), e.preventDefault(), window.open(l, `_blank`, `noopener,noreferrer`)
        };
    return (0, Z.jsxs)(`button`, {
        type: `button`,
        onClick: u,
        onAuxClick: e => {
            e.button === 1 && u(e)
        },
        className: i(`inline-flex w-fit cursor-pointer items-center rounded-full px-2.5 py-1 text-[10px] font-semibold`, `border border-transparent`, `group/pill overflow-hidden`, {
            "bg-[#C3DEC780] text-[#008C2E] dark:bg-[#6BBD6720] dark:text-[#6BBD67]": c === `open`,
            "bg-[#D6303D20] text-[#D6303D] dark:bg-[#FD756F20] dark:text-[#FD756F]": c === `closed`,
            "bg-[#8E3CF320] text-[#8E3CF3] dark:bg-[#C26FFD20] dark:text-[#C26FFD]": c === `merged`,
            "bg-[#59636E20] text-[#59636E] dark:bg-[#B2B2B220] dark:text-[#B2B2B2]": c === `draft`
        }, r),
        children: [(0, Z.jsxs)(`div`, {
            className: `relative`,
            children: [(0, Z.jsx)(`div`, {
                className: `icon-container relative transition-all duration-100 group-hover/pill:translate-y-full group-hover/pill:opacity-0 group-hover/pill:blur-sm`,
                children: c === `open` ? (0, Z.jsx)(Se, {
                    "aria-hidden": !0,
                    className: `icon-xs me-1`
                }) : c === `closed` ? (0, Z.jsx)(U, {
                    "aria-hidden": !0,
                    className: `icon-xs me-1`
                }) : c === `merged` ? (0, Z.jsx)(H, {
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
        }), c === `open` ? (0, Z.jsx)(x, {
            id: `wham.prStatusBadge.open`,
            defaultMessage: `Open`
        }) : c === `closed` ? (0, Z.jsx)(x, {
            id: `wham.prStatusBadge.closed`,
            defaultMessage: `Closed`
        }) : c === `merged` ? (0, Z.jsx)(x, {
            id: `wham.prStatusBadge.merged`,
            defaultMessage: `Merged`
        }) : (0, Z.jsx)(x, {
            id: `wham.prStatusBadge.draft`,
            defaultMessage: `Draft`
        })]
    })
}
var X, Z, Le = e((() => {
    ue(), Ce(), we(), W(), Ee(), v(), o(), X = t(C()), S(), Z = b()
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
    hoveredIndex: a,
    isCompact: o = !1,
    hideBorder: c = !1,
    onMouseEnter: u,
    onMouseLeave: d,
    linkPath: f,
    showArchiveButton: p = !0,
    currentFilter: h
}) {
    let _ = D(),
        v = s(),
        re = !n(ee),
        ie = O(e => e.homeTab),
        y = h ?? ce(ie),
        b = O(e => e.removePendingTaskByTaskId),
        S = O(e => e.setLastViewedTaskId),
        C = e.task_status_display?.fix_task_id,
        se = oe(),
        w = e.task_status_display?.latest_turn_status_display?.turn_status ?? `pending`,
        E = Oe(e.id, w, e.task_status_display?.latest_turn_status_display?.turn_id),
        k = e.task_status_display?.latest_turn_status_display?.diff_stats?.lines_added ?? 0,
        A = e.task_status_display?.latest_turn_status_display?.diff_stats?.lines_removed ?? 0,
        j = e.task_status_display?.latest_turn_status_display,
        M = Be(e, `initial`),
        N = j?.issue_counts ?? null,
        P = Re(e) === `cr`,
        le = N?.[`0`] ?? 0,
        ue = N?.[`1`] ?? 0,
        fe = N?.[`2`] ?? 0,
        me = N?.[`3`] ?? 0,
        F = N ? Object.values(N).reduce((e, t) => e + t, 0) : 0,
        I = ne(e.pull_requests),
        he = I?.id.startsWith(`gitlab-`) ?? !1,
        L = I?.pull_request,
        R = Ue(I?.assistant_turn_id),
        z = M ? L : null,
        _e = L?.head,
        ye = e.task_status_display?.branch_name,
        B = _e ?? ye ?? ``,
        V = Ne(B),
        Se = B && B !== V,
        Ce = !re && !!B && B !== `master` && B !== `main` && L?.state !== `closed` && L?.state !== `merged`,
        H = j?.turn_id,
        U = j?.cancellation_requested_at != null,
        we = w === `completed` && F > 0 && !!H && N != null && !C && P,
        W = ae(),
        Te = (0, Q.useMemo)(() => (0, $.jsx)(ge, {
            size: 20,
            initialOffset: Math.random() * 20 * Math.PI
        }), []),
        Ee = t !== void 0 && a != null && t === a - 1,
        De = !M && !re && !o && w !== `pending` && w !== `in_progress` && p;
    (0, Q.useEffect)(() => {
        b(e.id)
    }, [e.id, b]);
    let {
        mutate: ke
    } = T({
        mutationFn: ({
            taskId: e,
            currentFilter: t
        }) => t === `archived` ? m.recoverTask(e) : m.archiveTask(e),
        onMutate: async ({
            taskId: e,
            taskListItem: t,
            currentFilter: n
        }) => {
            let {
                add: r,
                remove: i
            } = He(n), a = {}, o = async e => {
                a[e.join(`|`)] = W.getQueryData(e), await W.cancelQueries({
                    queryKey: e
                })
            };
            for (let t of i) {
                let n = [`wham`, `tasks`, t];
                await o(n), W.setQueryData(n, t => g(t, t => {
                    t?.pages.forEach(t => {
                        t.items = (t.items ?? []).filter(t => t.id !== e)
                    })
                }))
            }
            for (let e of r) {
                let n = [`wham`, `tasks`, e];
                await o(n), W.setQueryData(n, e => g(e, e => {
                    if (!e || e.pages.length === 0) return;
                    let n = e.pages[0];
                    n.items = [t, ...n.items ?? []].filter((e, t, n) => n.findIndex(t => t.id === e.id) === t)
                }))
            }
            let s = [`wham`, `task`, t.id, t.task_status_display?.latest_turn_status_display?.turn_id];
            return a[s.join(`|`)] = W.getQueryData(s), await W.cancelQueries({
                queryKey: s
            }), W.setQueryData(s, e => g(e, e => {
                e && (e.task.archived = !e.task.archived)
            })), {
                snapshots: a
            }
        },
        onError: (e, t, n) => {
            Object.entries(n?.snapshots ?? {}).forEach(([e, t]) => {
                W.setQueryData(e.split(`|`), t)
            }), v.danger(_.formatMessage({
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
    switch (w) {
        case `pending`:
        case `in_progress`:
            U ? K.push((0, $.jsx)(`span`, {
                className: `text-token-text-secondary`,
                children: (0, $.jsx)(x, {
                    id: `wham.whamTaskRow.cancelling`,
                    defaultMessage: `Cancelling…`
                })
            }, `cancelling-text`)) : o ? K.push(Te) : (K.push((0, $.jsx)(`span`, {
                className: `loading-shimmer-pure-text`,
                children: ve(E, 32)
            }, `in-progress-text`)), U || K.push((0, $.jsx)(qe, {
                taskId: e.id
            })));
            break;
        case `failed`:
            K.push((0, $.jsx)(`span`, {
                className: `text-token-text-status-error`,
                children: (0, $.jsx)(x, {
                    id: `wham.whamTaskRow.failed`,
                    defaultMessage: `Failed`
                })
            }, `failed-text`));
            break;
        case `cancelled`:
            K.push((0, $.jsx)(`span`, {
                className: `text-token-text-secondary`,
                children: (0, $.jsx)(x, {
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
            }, `pr-status`)), (k !== 0 || A !== 0) && !N && K.push((0, $.jsx)(be, {
                className: `min-w-10 justify-end`,
                linesAdded: k,
                linesRemoved: A
            }, `message-stats`));
            break;
        default:
            K.push((0, $.jsx)(`span`, {
                className: `text-token-text-secondary`,
                children: (0, $.jsx)(x, {
                    id: `wham.whamTaskRow.unknown`,
                    defaultMessage: `Unknown`
                })
            }, `unknown-text`));
            break
    }
    C && P ? K.push((0, $.jsx)(te, {
        type: `button`,
        size: `small`,
        color: `secondary`,
        onClick: e => {
            e.preventDefault(), e.stopPropagation(), S(C), se(`/codex/cloud/tasks/${C}`)
        },
        children: (0, $.jsx)(x, {
            id: `wham.whamTaskRow.viewFixTask`,
            defaultMessage: `Open fix`
        })
    }, `view-fix-button`)) : we && K.push((0, $.jsx)(Ae, {
        taskId: e.id,
        latestTurnId: H,
        highlightTasksTabOnSuccess: y === `code_review`,
        repositoryProvider: he ? `gitlab` : void 0
    }, `fix-button`)), w !== `completed` && G && K.unshift(G);
    let q = e.updated_at ? new Date(e.updated_at * 1e3) : null,
        J = e.task_status_display?.environment_label;
    return (0, $.jsx)(`div`, {
        className: `group task-row-container`,
        onMouseEnter: u,
        onMouseLeave: d,
        children: (0, $.jsxs)(Ge, {
            disableFocusStyle: r,
            taskId: e.id,
            linkPath: f,
            children: [(0, $.jsxs)(`div`, {
                className: i(`border-token-border-light grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-5 border-b px-4 py-3.5 text-sm md:px-3`, (Ee || c) && `border-b-transparent`),
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
                            }), (0, $.jsx)(l, {
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
                        currentFilter: y
                    })
                },
                className: `before:from-token-bg-tertiary before:via-token-bg-tertiary absolute inset-y-1 end-0 z-20 flex w-20 cursor-pointer items-center justify-end pe-2 opacity-0 transition-opacity duration-0 group-hover:opacity-100 group-hover:duration-0 before:pointer-events-none before:absolute before:inset-0 before:-start-0.5 before:bg-gradient-to-l before:to-transparent before:content-['']`,
                children: (0, $.jsx)(l, {
                    label: e.archived ? _.formatMessage({
                        id: `wham.whamTaskRow.unarchiveTask`,
                        defaultMessage: `Unarchive`
                    }) : _.formatMessage({
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
    let a = O(e => e.setLastViewedTaskId),
        o = O(e => e.lastViewedTaskId),
        s = (0, Q.useRef)(null),
        c = w();
    return (0, Q.useEffect)(() => {
        o === e && requestAnimationFrame(() => {
            s.current?.scrollIntoView({
                behavior: `instant`,
                block: `center`
            }), c.state?.focusComposer || s.current?.focus()
        })
    }, []), e ? (0, $.jsx)(`div`, {
        className: i(`hover:bg-token-bg-tertiary relative ring-inset`, !n && `focus-within:border-token-border-heavy focus-within:border-s-2 focus-within:ps-[-2px]`),
        children: (0, $.jsx)(se, {
            className: `outline-offset-[-1px] focus-within:rounded-lg`,
            ref: s,
            to: r ?? `/codex/cloud/tasks/${e}`,
            onClick: () => a(e),
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
    let t = D(),
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
    let t = D(),
        n = s(),
        i = ae(),
        [a, o] = (0, Q.useState)(!1),
        {
            mutate: c
        } = T({
            mutationFn: async () => (o(!0), await m.cancelTask(e), await i.invalidateQueries({
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
            e.stopPropagation(), e.preventDefault(), A.recordCancel(`home`), c()
        },
        disabled: a,
        "aria-label": t.formatMessage({
            id: `wham.composer.cancelTask`,
            defaultMessage: `Cancel task`
        }),
        "data-testid": `stop-button`,
        children: a ? (0, $.jsx)(r, {
            className: `icon-sm p-0.5`
        }) : (0, $.jsx)(me, {
            className: `icon-sm`
        })
    })
}
var Q, $, Je = e((() => {
    a(), R(), he(), I(), N(), c(), p(), h(), ie(), u(), ye(), _e(), J(), Me(), k(), B(), j(), V(), Pe(), Le(), Ve(), ke(), v(), M(), E(), o(), d(), f(), Q = t(C()), S(), y(), $ = b()
}));
export {
    Ve as a, Pe as c, ze as i, J as l, Je as n, Be as o, Re as r, Ne as s, We as t, G as u
};
//# sourceMappingURL=0b9bc04d-6xpedzqhybe541bw.js.map
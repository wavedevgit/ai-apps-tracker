import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as n,
    B6 as r,
    BK as i,
    Fst as a,
    Ist as o,
    Jc as s,
    Kc as c,
    My as l,
    NK as u,
    O$ as d,
    Xc as f,
    Yc as p,
    b5 as m,
    dz as h,
    fz as g,
    hU as _,
    i5 as ee,
    jy as v,
    k$ as te,
    kT as ne,
    pU as y,
    y5 as b
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as x,
    Bn as S,
    N as re,
    Nn as C,
    Pt as ie,
    Rn as w,
    Vn as T,
    at as ae,
    jt as E,
    p as D,
    s as O,
    zn as k
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Cun as oe,
    DJ as A,
    Dun as j,
    EJ as M,
    Eun as N,
    wun as P
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Bm as F,
    Gy as I,
    Ky as se,
    Qy as ce,
    Vm as le,
    Zy as ue,
    _S as de,
    bh as fe,
    by as L,
    vS as R,
    xh as pe,
    yy as z
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    n as B,
    t as me
} from "./af004db9-6w68dbz1fjui3k0e.js";
import {
    n as V,
    r as he
} from "./0eda9bd1-pag9sfwu5sisajp5.js";
import {
    n as ge,
    t as _e
} from "./7271f1c9-eisaobgjylt9iv5o.js";
import {
    n as H,
    t as ve
} from "./1f8ec761-gdkbctews9uyc4zr.js";
import {
    n as U,
    t as ye
} from "./805f0379-nvlpr5wf5y470ia1.js";
import {
    B as be,
    G as xe,
    H as Se,
    K as Ce,
    U as we,
    V as W,
    W as Te,
    z as Ee
} from "./9e18a103-lu5tm6szxryelo1d.js";
import {
    i as De,
    r as Oe,
    t as ke
} from "./9371a995-j1lfbgf3u3mrb88w.js";

function G({
    taskId: e,
    latestTurnId: t,
    behavior: n = `navigate`,
    repositoryProvider: r,
    onFixCreated: i
}) {
    let a = k(),
        l = _(),
        u = ie(),
        d = re(),
        p = j(e => e.setLastViewedTaskId),
        m = j(e => e.assignPendingTaskToFinalTask),
        h = j(e => e.removePendingTaskId),
        g = j(e => e.clearFixReviewTaskInFlight),
        ee = (0, K.useCallback)(t => {
            [`current`, `all`, `code_review`, `archived`].forEach(n => {
                let r = [`wham`, `tasks`, n];
                d.setQueryData(r, n => o(n, n => {
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
        }, [d, e]);
    return D({
        mutationFn: async () => {
            if (!t) throw Error(`missing_latest_turn_id`);
            return await s.createFixReviewTask(e, t)
        },
        onSuccess: (t, r) => {
            ee(t.task.id), d.invalidateQueries({
                queryKey: [`wham`, `tasks`]
            }), d.invalidateQueries({
                queryKey: [`wham`, `tasks`, `current`]
            }), g(e), r?.pendingTaskId && m(r.pendingTaskId, t.task.id), n === `navigate` && (p(t.task.id), u(`/codex/cloud/tasks/${t.task.id}`), l.success(a.formatMessage({
                id: `wham.whamTaskRow.fixTaskCreated`,
                defaultMessage: `Started fix task`
            }))), i?.({
                fixTaskId: t.task.id,
                pendingTaskId: r?.pendingTaskId,
                response: t
            })
        },
        onError: (t, n) => {
            if (g(e), n?.pendingTaskId && h(n.pendingTaskId), t instanceof c) {
                f(t, e, a, l, {
                    repositoryProvider: r
                });
                return
            }
            l.danger(a.formatMessage({
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
        o = j(e => e.setShouldHighlightTasksTab),
        s = j(e => e.markFixReviewTaskInFlight),
        c = j(e => e.clearFixReviewTaskInFlight),
        l = j(t => !!t.fixReviewTasksInFlight[e]),
        u = G({
            taskId: e,
            latestTurnId: t,
            behavior: `stay`,
            repositoryProvider: r
        }),
        d = (0, K.useCallback)(r => {
            if (r.stopPropagation(), r.preventDefault(), l || u.isPending || !t) return;
            let d = crypto.randomUUID();
            i(d);
            let f = n && !a;
            f && o(!0), s(e), u.mutateAsync({
                pendingTaskId: d
            }).catch(() => {
                f && o(!1), c(e)
            })
        }, [i, n, l, u, o, s, c, a, e, t]),
        f = u.isPending || l;
    return (0, q.jsx)(`button`, {
        type: `button`,
        className: `border-token-border-subtle bg-token-bg-tertiary text-token-text-primary hover:bg-token-bg-secondary flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-70`,
        onClick: d,
        disabled: f || !t,
        children: f ? (0, q.jsx)(h, {
            className: `icon-sm`
        }) : (0, q.jsx)(C, {
            id: `wham.whamTaskRow.fixButton`,
            defaultMessage: `Fix`
        })
    })
}
var K, q, J = e((() => {
    g(), y(), p(), N(), O(), a(), K = t(T()), w(), x(), q = S()
}));

function je({
    criticalIssueCount: e,
    highIssueCount: t,
    mediumIssueCount: n,
    lowIssueCount: r,
    totalIssueCount: i
}) {
    "use no forget";
    let a = k();
    return i === 0 ? (0, Y.jsx)(v, {
        label: a.formatMessage({
            id: `wham.whamTaskIssuesSummary.noIssuesTooltip`,
            defaultMessage: `Codex didn’t flag any issues`
        }),
        children: (0, Y.jsx)(`span`, {
            className: `bg-token-bg-success/20 text-token-text-primary inline-flex min-w-[1.5rem] items-center justify-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold`,
            children: (0, Y.jsx)(ue, {
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
            return (0, Y.jsx)(v, {
                label: r,
                children: (0, Y.jsxs)(`span`, {
                    className: b(`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium`, i),
                    children: [(0, Y.jsx)(fe, {
                        className: b(`icon-sm`, o)
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
    ce(), pe(), l(), m(), w(), Y = S()
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
                        let n = await s.getTaskTurnPR(t, e);
                        a(n.pr)
                    } catch {}
                    o.current = !0
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
        className: b(`inline-flex w-fit cursor-pointer items-center rounded-full px-2.5 py-1 text-[10px] font-semibold`, `border border-transparent`, `group/pill overflow-hidden`, {
            "bg-[#C3DEC780] text-[#008C2E] dark:bg-[#6BBD6720] dark:text-[#6BBD67]": c === `open`,
            "bg-[#D6303D20] text-[#D6303D] dark:bg-[#FD756F20] dark:text-[#FD756F]": c === `closed`,
            "bg-[#8E3CF320] text-[#8E3CF3] dark:bg-[#C26FFD20] dark:text-[#C26FFD]": c === `merged`,
            "bg-[#59636E20] text-[#59636E] dark:bg-[#B2B2B220] dark:text-[#B2B2B2]": c === `draft`
        }, r),
        children: [(0, Z.jsxs)(`div`, {
            className: `relative`,
            children: [(0, Z.jsx)(`div`, {
                className: `icon-container relative transition-all duration-100 group-hover/pill:translate-y-full group-hover/pill:opacity-0 group-hover/pill:blur-sm`,
                children: c === `open` ? (0, Z.jsx)(be, {
                    "aria-hidden": !0,
                    className: `icon-xs me-1`
                }) : c === `closed` ? (0, Z.jsx)(Ce, {
                    "aria-hidden": !0,
                    className: `icon-xs me-1`
                }) : c === `merged` ? (0, Z.jsx)(Se, {
                    "aria-hidden": !0,
                    className: `icon-xs me-1`
                }) : (0, Z.jsx)(Te, {
                    "aria-hidden": !0,
                    className: `icon-xs me-1`
                })
            }), (0, Z.jsx)(`div`, {
                className: `absolute start-0 top-0 -translate-y-full opacity-0 transition-all duration-100 group-hover/pill:translate-y-0 group-hover/pill:opacity-100`,
                children: (0, Z.jsx)(I, {
                    "aria-hidden": !0,
                    className: `icon-xs me-1`
                })
            })]
        }), c === `open` ? (0, Z.jsx)(C, {
            id: `wham.prStatusBadge.open`,
            defaultMessage: `Open`
        }) : c === `closed` ? (0, Z.jsx)(C, {
            id: `wham.prStatusBadge.closed`,
            defaultMessage: `Closed`
        }) : c === `merged` ? (0, Z.jsx)(C, {
            id: `wham.prStatusBadge.merged`,
            defaultMessage: `Merged`
        }) : (0, Z.jsx)(C, {
            id: `wham.prStatusBadge.draft`,
            defaultMessage: `Draft`
        })]
    })
}
var X, Z, Le = e((() => {
    se(), xe(), we(), W(), Ee(), p(), m(), X = t(T()), w(), Z = S()
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
    disableFocusStyle: n,
    hoveredIndex: r,
    isCompact: a = !1,
    hideBorder: c = !1,
    onMouseEnter: l,
    onMouseLeave: u,
    linkPath: d,
    showArchiveButton: f = !0,
    currentFilter: p
}) {
    let m = k(),
        h = _(),
        g = !ee(i),
        y = j(e => e.homeTab),
        x = p ?? oe(y),
        S = j(e => e.removePendingTaskByTaskId),
        w = j(e => e.setLastViewedTaskId),
        T = e.task_status_display?.fix_task_id,
        ae = ie(),
        E = e.task_status_display?.latest_turn_status_display?.turn_status ?? `pending`,
        O = Oe(e.id, E, e.task_status_display?.latest_turn_status_display?.turn_id),
        A = e.task_status_display?.latest_turn_status_display?.diff_stats?.lines_added ?? 0,
        M = e.task_status_display?.latest_turn_status_display?.diff_stats?.lines_removed ?? 0,
        N = e.task_status_display?.latest_turn_status_display,
        P = Be(e, `initial`),
        F = N?.issue_counts ?? null,
        I = Re(e) === `cr`,
        se = F?.[`0`] ?? 0,
        ce = F?.[`1`] ?? 0,
        ue = F?.[`2`] ?? 0,
        fe = F?.[`3`] ?? 0,
        L = F ? Object.values(F).reduce((e, t) => e + t, 0) : 0,
        R = te(e.pull_requests),
        pe = R?.id.startsWith(`gitlab-`) ?? !1,
        z = R?.pull_request,
        B = Ue(R?.assistant_turn_id),
        V = P ? z : null,
        he = z?.head,
        _e = e.task_status_display?.branch_name,
        H = he ?? _e ?? ``,
        U = Ne(H),
        be = H && H !== U,
        xe = !g && !!H && H !== `master` && H !== `main` && z?.state !== `closed` && z?.state !== `merged`,
        Se = N?.turn_id,
        Ce = N?.cancellation_requested_at != null,
        we = E === `completed` && L > 0 && !!Se && F != null && !T && I,
        W = re(),
        Te = (0, Q.useMemo)(() => (0, $.jsx)(me, {
            size: 20,
            initialOffset: Math.random() * 20 * Math.PI
        }), []),
        Ee = t !== void 0 && r != null && t === r - 1,
        De = !P && !g && !a && E !== `pending` && E !== `in_progress` && f;
    (0, Q.useEffect)(() => {
        S(e.id)
    }, [e.id, S]);
    let {
        mutate: ke
    } = D({
        mutationFn: ({
            taskId: e,
            currentFilter: t
        }) => t === `archived` ? s.recoverTask(e) : s.archiveTask(e),
        onMutate: async ({
            taskId: e,
            taskListItem: t,
            currentFilter: n
        }) => {
            let {
                add: r,
                remove: i
            } = He(n), a = {}, s = async e => {
                a[e.join(`|`)] = W.getQueryData(e), await W.cancelQueries({
                    queryKey: e
                })
            };
            for (let t of i) {
                let n = [`wham`, `tasks`, t];
                await s(n), W.setQueryData(n, t => o(t, t => {
                    t?.pages.forEach(t => {
                        t.items = (t.items ?? []).filter(t => t.id !== e)
                    })
                }))
            }
            for (let e of r) {
                let n = [`wham`, `tasks`, e];
                await s(n), W.setQueryData(n, e => o(e, e => {
                    if (!e || e.pages.length === 0) return;
                    let n = e.pages[0];
                    n.items = [t, ...n.items ?? []].filter((e, t, n) => n.findIndex(t => t.id === e.id) === t)
                }))
            }
            let c = [`wham`, `task`, t.id, t.task_status_display?.latest_turn_status_display?.turn_id];
            return a[c.join(`|`)] = W.getQueryData(c), await W.cancelQueries({
                queryKey: c
            }), W.setQueryData(c, e => o(e, e => {
                e && (e.task.archived = !e.task.archived)
            })), {
                snapshots: a
            }
        },
        onError: (e, t, n) => {
            Object.entries(n?.snapshots ?? {}).forEach(([e, t]) => {
                W.setQueryData(e.split(`|`), t)
            }), h.danger(m.formatMessage({
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
    }), G = F == null ? null : (0, $.jsx)(je, {
        criticalIssueCount: se,
        highIssueCount: ce,
        mediumIssueCount: ue,
        lowIssueCount: fe,
        totalIssueCount: L
    }, `issues-summary`), K = [];
    switch (E) {
        case `pending`:
        case `in_progress`:
            Ce ? K.push((0, $.jsx)(`span`, {
                className: `text-token-text-secondary`,
                children: (0, $.jsx)(C, {
                    id: `wham.whamTaskRow.cancelling`,
                    defaultMessage: `Cancelling…`
                })
            }, `cancelling-text`)) : a ? K.push(Te) : (K.push((0, $.jsx)(`span`, {
                className: `loading-shimmer-pure-text`,
                children: ge(O, 32)
            }, `in-progress-text`)), Ce || K.push((0, $.jsx)(qe, {
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
            G && K.push(G), z && B && K.push((0, $.jsx)(Ie, {
                taskAssistantTurnId: B,
                taskId: e.id,
                data: z
            }, `pr-status`)), (A !== 0 || M !== 0) && !F && K.push((0, $.jsx)(ve, {
                className: `min-w-10 justify-end`,
                linesAdded: A,
                linesRemoved: M
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
    T && I ? K.push((0, $.jsx)(ne, {
        type: `button`,
        size: `small`,
        color: `secondary`,
        onClick: e => {
            e.preventDefault(), e.stopPropagation(), w(T), ae(`/codex/cloud/tasks/${T}`)
        },
        children: (0, $.jsx)(C, {
            id: `wham.whamTaskRow.viewFixTask`,
            defaultMessage: `Open fix`
        })
    }, `view-fix-button`)) : we && K.push((0, $.jsx)(Ae, {
        taskId: e.id,
        latestTurnId: Se,
        highlightTasksTabOnSuccess: x === `code_review`,
        repositoryProvider: pe ? `gitlab` : void 0
    }, `fix-button`)), E !== `completed` && G && K.unshift(G);
    let q = e.updated_at ? new Date(e.updated_at * 1e3) : null,
        J = e.task_status_display?.environment_label;
    return (0, $.jsx)(`div`, {
        className: `group task-row-container`,
        onMouseEnter: l,
        onMouseLeave: u,
        children: (0, $.jsxs)(Ge, {
            disableFocusStyle: n,
            taskId: e.id,
            linkPath: d,
            children: [(0, $.jsxs)(`div`, {
                className: b(`border-token-border-light grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-5 border-b px-4 py-3.5 text-sm md:px-3`, (Ee || c) && `border-b-transparent`),
                children: [(0, $.jsxs)(`div`, {
                    className: `flex flex-col gap-0.5`,
                    children: [(0, $.jsxs)(`div`, {
                        className: `text-token-text-primary flex w-full min-w-0 items-center gap-1.5`,
                        children: [e.has_unread_turn && (0, $.jsx)(`div`, {
                            className: `size-1.5 rounded-full bg-blue-500`
                        }), (0, $.jsx)(`div`, {
                            className: `flex-1 truncate font-medium`,
                            children: V?.title ? (0, $.jsx)(`span`, {
                                children: V.title
                            }) : (0, $.jsx)(Ke, {
                                task: e
                            })
                        })]
                    }), q && (0, $.jsxs)(`div`, {
                        className: `text-token-text-tertiary flex gap-1`,
                        children: [(0, $.jsx)(`span`, {
                            className: `truncate empty:hidden`,
                            children: (0, $.jsx)(ye, {
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
                        }), xe && (0, $.jsxs)($.Fragment, {
                            children: [(0, $.jsx)(`span`, {
                                className: `text-token-text-tertiary`,
                                children: `·`
                            }), (0, $.jsx)(v, {
                                label: be ? H : void 0,
                                children: (0, $.jsx)(`span`, {
                                    className: `max-w-[8rem] truncate md:max-w-[10rem]`,
                                    children: U
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
                        currentFilter: x
                    })
                },
                className: `before:from-token-bg-tertiary before:via-token-bg-tertiary absolute inset-y-1 end-0 z-20 flex w-20 cursor-pointer items-center justify-end pe-2 opacity-0 transition-opacity duration-0 group-hover:opacity-100 group-hover:duration-0 before:pointer-events-none before:absolute before:inset-0 before:-start-0.5 before:bg-gradient-to-l before:to-transparent before:content-['']`,
                children: (0, $.jsx)(v, {
                    label: e.archived ? m.formatMessage({
                        id: `wham.whamTaskRow.unarchiveTask`,
                        defaultMessage: `Unarchive`
                    }) : m.formatMessage({
                        id: `wham.whamTaskRow.archiveTask`,
                        defaultMessage: `Archive`
                    }),
                    side: `top`,
                    children: e.archived ? (0, $.jsx)(le, {
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
    let i = j(e => e.setLastViewedTaskId),
        a = j(e => e.lastViewedTaskId),
        o = (0, Q.useRef)(null),
        s = E();
    return (0, Q.useEffect)(() => {
        a === e && requestAnimationFrame(() => {
            o.current?.scrollIntoView({
                behavior: `instant`,
                block: `center`
            }), s.state?.focusComposer || o.current?.focus()
        })
    }, []), e ? (0, $.jsx)(`div`, {
        className: b(`hover:bg-token-bg-tertiary relative ring-inset`, !n && `focus-within:border-token-border-heavy focus-within:border-s-2 focus-within:ps-[-2px]`),
        children: (0, $.jsx)(ae, {
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
    let t = k(),
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
    }) : e.has_generated_title === !1 && !i ? (0, $.jsx)(V, {
        className: `mt-[0.425rem] mb-[0.225rem] h-[0.6rem] w-[200px]`
    }) : (0, $.jsx)(`span`, {
        children: i ?? e.title
    })
}

function qe({
    taskId: e
}) {
    let t = k(),
        n = _(),
        r = re(),
        [i, a] = (0, Q.useState)(!1),
        {
            mutate: o
        } = D({
            mutationFn: async () => (a(!0), await s.cancelTask(e), await r.invalidateQueries({
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
            e.stopPropagation(), e.preventDefault(), M.recordCancel(`home`), o()
        },
        disabled: i,
        "aria-label": t.formatMessage({
            id: `wham.composer.cancelTask`,
            defaultMessage: `Cancel task`
        }),
        "data-testid": `stop-button`,
        children: i ? (0, $.jsx)(h, {
            className: `icon-sm p-0.5`
        }) : (0, $.jsx)(L, {
            className: `icon-sm`
        })
    })
}
var Q, $, Je = e((() => {
    n(), B(), R(), z(), F(), l(), r(), g(), y(), u(), _e(), he(), J(), Me(), P(), H(), A(), U(), Pe(), Le(), Ve(), ke(), p(), N(), O(), m(), a(), d(), Q = t(T()), w(), x(), $ = S()
}));
export {
    Ve as a, Pe as c, ze as i, J as l, Je as n, Be as o, Re as r, Ne as s, We as t, G as u
};
//# sourceMappingURL=0b9bc04d-nf9dbb000yyruxom.js.map
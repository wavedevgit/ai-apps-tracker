import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Jc as n,
    N0 as r,
    T0 as i,
    Yc as a,
    _x as o,
    cz as s,
    hU as c,
    hx as l,
    lz as u,
    mx as d,
    pU as f
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as p,
    Bn as m,
    In as ee,
    N as h,
    Pt as g,
    Rn as _,
    Rt as v,
    Ut as y,
    Vn as b,
    jt as x,
    lt as te,
    s as S,
    wn as C,
    zn as ne
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $Fn as w,
    Dun as T,
    Eun as E,
    Gln as D,
    Pln as O,
    ZFn as re,
    gun as k,
    mun as A
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    S_ as ie,
    w_ as j
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    f as M,
    o as N,
    t as ae
} from "./cf64444f-jch0myr3a8q4imcr.js";
import {
    n as oe,
    t as se
} from "./39cfea03-ekcy065kyvihhr7m.js";
import {
    r as ce,
    t as le
} from "./0f28d127-g7pcd3sfhh818mzy.js";
import {
    n as ue,
    t as de
} from "./b0ac1aff-bkopvbfcfix69tj6.js";
import {
    a as fe,
    i as P,
    n as F,
    o as I,
    r as L,
    t as R
} from "./f8de74c4-jlfj69aar0h5fnho.js";
import {
    a as z,
    i as B,
    n as V,
    t as pe
} from "./f538e41f-mz2sc20fx6wkahp5.js";
import {
    n as me,
    t as he
} from "./22bcb108-gve3yhi30zn4m51v.js";

function ge() {
    return (0, H.useSyncExternalStore)(e => (document.addEventListener(`focusin`, e), document.addEventListener(`focusout`, e), () => {
        document.removeEventListener(`focusin`, e), document.removeEventListener(`focusout`, e)
    }), () => typeof document < `u` && document.activeElement?.hasAttribute(`data-wham-comment-textarea`) === !0, () => !1)
}
var H, _e = e((() => {
    H = t(b())
}));

function ve(e) {
    let t = h(),
        r = ge(),
        {
            data: i,
            error: a
        } = A(e, {
            refetchOnWindowFocus: !0,
            refetchOnMount: !0
        }),
        {
            isLoading: o
        } = D(e),
        s = T((0, U.useCallback)(({
            getTurnsForTask: t
        }) => t(e) ?? [], [e])),
        {
            focusedAssistantTurn: c,
            setFocusedAssistantTurnId: l
        } = P({
            taskId: e,
            task: i?.task,
            currentUserTurn: i?.current_user_turn ?? null,
            currentAssistantTurn: i?.current_assistant_turn ?? null
        }),
        u = (0, U.useMemo)(() => R({
            focusedAssistantTurn: c,
            pastTurns: s,
            currentDiffTaskTurnId: i?.current_diff_task_turn?.id ?? null
        }), [c, i?.current_diff_task_turn?.id, s]),
        d = i?.task?.current_turn_id,
        f = !!i?.task.has_unread_turn && d === i?.current_assistant_turn?.id,
        p = i?.current_assistant_turn?.turn_status === `completed`;
    return (0, U.useEffect)(() => {
        !f || !p || n.markTurnAsRead(e).then(() => {
            t.invalidateQueries({
                queryKey: [`wham`, `tasks`]
            }), t.invalidateQueries({
                queryKey: [`wham`, `task`, e]
            })
        })
    }, [f, p, e, t]), {
        taskDetails: i,
        taskDetailsError: a,
        loadingTurnMapping: o,
        turns: s,
        focusedAssistantTurn: c,
        setFocusedAssistantTurnId: l,
        currentDiffTaskTurn: u,
        canFollowUp: (0, U.useMemo)(() => {
            let e = M(c),
                t = c?.sibling_turn_ids?.includes(i?.current_assistant_turn?.id ?? ``) || c?.id === i?.current_assistant_turn?.id,
                n = !i?.current_diff_task_turn;
            return e && (t || n)
        }, [c, i?.current_assistant_turn, i?.current_diff_task_turn]),
        isCommentFocused: r
    }
}
var U, ye = e((() => {
    _e(), L(), F(), N(), O(), a(), E(), S(), U = t(b())
}));

function be() {
    let [e, t] = (0, W.useState)([]), [n, r] = (0, W.useState)(!1), i = (0, W.useCallback)(() => {
        t([])
    }, []);
    return {
        comments: e,
        setComments: t,
        confirmClose: n,
        setConfirmClose: r,
        clearComments: i,
        createCloseHandler: (0, W.useCallback)(({
            onClose: t,
            isComposerEmpty: n
        }) => ({
            force: a = !1
        } = {}) => {
            if (a || e.length === 0 && n) {
                i(), t();
                return
            }
            r(!0)
        }, [e.length, i])
    }
}
var W, xe = e((() => {
    W = t(b())
}));

function Se({
    taskId: e,
    onClose: t
}) {
    "use no forget";
    let n = c(),
        i = ne(),
        a = g(),
        {
            composerController: o,
            isComposerEmpty: s
        } = me(),
        {
            taskDetails: u,
            taskDetailsError: f,
            loadingTurnMapping: p,
            turns: m,
            focusedAssistantTurn: h,
            currentDiffTaskTurn: _,
            setFocusedAssistantTurnId: v,
            canFollowUp: y,
            isCommentFocused: b
        } = ve(e),
        x = (0, G.useMemo)(() => ae(h), [h]),
        S = (0, G.useMemo)(() => ({
            taskId: e,
            task: u?.task,
            pastTurns: m,
            canFollowUp: y,
            focusedAssistantTurn: h,
            currentDiffTaskTurn: _,
            setFocusedAssistantTurnId: v
        }), [e, u, m, y, h, _, v]),
        {
            comments: C,
            setComments: w,
            confirmClose: T,
            setConfirmClose: E,
            clearComments: D,
            createCloseHandler: O
        } = be(),
        k = (0, G.useMemo)(() => ({
            comments: C,
            setComments: w,
            clearComments: D,
            readonlyComments: x
        }), [C, w, D, x]),
        A = r(re),
        j = O({
            onClose: t,
            isComposerEmpty: s
        });
    ue(), ce([{
        key: `newTask`,
        action: () => {
            a(`/codex/cloud`, {
                state: {
                    focusComposer: !0
                }
            })
        },
        actionMessageDescriptor: i.formatMessage({
            id: `wham.keyboardActions.newTask`,
            defaultMessage: `New task`
        }),
        group: d.Chat,
        bindings: [{
            binding: [l.Mod, l.Shift, `o`]
        }]
    }, {
        key: `closeTask`,
        action: () => {
            a(`/codex/cloud`)
        },
        actionMessageDescriptor: i.formatMessage({
            id: `wham.keyboardActions.closeTask`,
            defaultMessage: `Close task`
        }),
        group: d.Chat,
        bindings: [{
            binding: [l.Escape]
        }],
        enabled: !A && !b
    }]);
    let M = (0, G.useCallback)(({
        force: e = !1
    } = {}) => {
        j({
            force: e
        })
    }, [j]);
    return f ? (n.danger(ee({
        id: `wham.task-details.error`,
        defaultMessage: `Error loading task`
    }), {
        id: `wham-task-details-error-${e}`,
        hasCloseButton: !0,
        duration: 3,
        toastId: `wham_task_page_content_error`
    }), (0, K.jsx)(te, {
        to: `/codex/cloud`
    })) : (0, K.jsx)(ie.Provider, {
        value: o,
        children: (0, K.jsx)(pe, {
            value: k,
            children: (0, K.jsx)(B, {
                value: S,
                children: (0, K.jsx)(fe, {
                    permissions: `write`,
                    turnId: u?.current_assistant_turn?.id ?? ``,
                    confirmClose: T,
                    setConfirmClose: E,
                    handleClose: M,
                    loadingTurnMapping: p
                })
            })
        })
    })
}
var G, K, Ce = e((() => {
    j(), w(), i(), f(), o(), le(), de(), I(), N(), G = t(b()), _(), p(), ye(), xe(), he(), V(), z(), K = m()
}));

function we() {
    let e = g(),
        t = x(),
        {
            taskId: n
        } = v();
    k();
    let {
        backgroundLocation: r
    } = t.state ?? {}, i = (0, q.useCallback)(() => {
        e(r ? -1 : `/codex/cloud`)
    }, [r, e]);
    return n ? (0, J.jsx)(s, {
        children: (0, J.jsx)(se, {
            children: (0, J.jsx)(Se, {
                taskId: n,
                onClose: i
            })
        })
    }) : null
}
var q, J, Y = e((() => {
        u(), oe(), q = t(b()), p(), O(), Ce(), J = m()
    })),
    X, Z, Q, $, Te = e((() => {
        p(), X = C(), Y(), Z = m(), Q = () => [{
            title: `Codex`
        }], $ = y(function() {
            "use forget";
            let e = (0, X.c)(1),
                t;
            return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Z.jsx)(we, {}), e[0] = t) : t = e[0], t
        })
    }));
e((() => {
    Te()
}))();
export {
    $ as
    default, Q as meta
};
//# sourceMappingURL=codex.cloud.tasks._taskId._index-n3vhtz9o.js.map
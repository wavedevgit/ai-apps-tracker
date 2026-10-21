import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $8 as t,
    bst as n,
    c7 as r,
    e5 as i,
    l7 as a,
    yst as o
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    Cmn as s,
    Q7 as c,
    Z7 as l,
    gmn as u
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    c as d,
    r as f,
    t as p
} from "./31cec8d8-ejzahhq8v425zkie.js";

function m(e, t, n) {
    let r = new Map;
    return e.forEach((e, i) => {
        let a = c(e, t, n);
        a && r.set(i, a)
    }), r
}
var h = e((() => {
    l()
}));

function g(e, t) {
    return {
        "bg-yellow-100 dark:bg-yellow-400": !0,
        "bg-yellow-400/40 dark:bg-yellow-400/50": e && !t,
        "bg-yellow-400/60 dark:bg-yellow-500/70": t,
        "bg-yellow-100 dark:bg-yellow-400/30": !e && !t
    }
}

function _({
    isHovered: e,
    isFocused: t,
    isCode: n,
    diffStatus: i
}) {
    return r(n ? p : f, `cursor-text group is-comment transition-colors`, {
        ...i === u.REMOVED ? v : g(e, t)
    }, `group-[.is-comment]:bg-opacity-40`)
}
var v, y = e((() => {
    d(), s(), a(), v = {
        "bg-transparent!": !0
    }
}));

function b(e, t) {
    return e.map(e => {
        let n = t.get(e.id);
        return n ? {
            ...e,
            at: n
        } : null
    }).filter(i)
}
var x = e((() => {
    t()
}));

function S(e) {
    return e?.type === `selection`
}
var C, w, T, E, D, O, k = e((() => {
    n(), C = function(e) {
        return e.ASK = `ask`, e.CREATE_TEXTDOC = `create_textdoc`, e.COMMENT = `comment`, e.EDIT = `edit`, e
    }({}), w = function(e) {
        return e.SELECTION = `selection`, e.BLOCK = `block`, e
    }({}), T = o(() => ({
        commentingOn: null,
        hoveredCommentId: null,
        focusedCommentId: null,
        visibleBlockCommentLauncher_DEBUG_ONLY: null,
        hoveredBlockCommentLauncherPos: null
    })), {
        setState: E,
        getInitialState: D
    } = T, O = {
        reset: () => E(D()),
        startCommentingOn: e => E(t => ({
            ...t,
            commentingOn: e
        })),
        cancelCommentingOn: () => E(e => ({
            ...e,
            commentingOn: null
        })),
        focusComment: e => E(t => ({
            ...t,
            focusedCommentId: e
        })),
        blurComment: () => E(e => ({
            ...e,
            focusedCommentId: null
        })),
        mouseEnterComment: e => E(t => ({
            ...t,
            hoveredCommentId: e
        })),
        mouseLeaveComment: () => E(e => ({
            ...e,
            hoveredCommentId: null
        })),
        mouseEnterBlock: e => E(t => ({
            ...t,
            hoveredBlockCommentLauncherPos: e
        })),
        mouseLeaveBlock: () => E(e => ({
            ...e,
            hoveredBlockCommentLauncherPos: null
        })),
        setVisibleBlockComment_DEBUG_ONLY: e => E(t => ({
            ...t,
            visibleBlockCommentLauncher_DEBUG_ONLY: e
        }))
    }
}));
export {
    S as a, b as c, m as d, h as f, k as i, _ as l, O as n, T as o, C as r, x as s, w as t, y as u
};
//# sourceMappingURL=dced7e81-mkqxunxhrucdjfig.js.map
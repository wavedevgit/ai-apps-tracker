import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $J as t,
    BC as n,
    Bst as r,
    GJ as i,
    RC as a,
    bct as o,
    eY as s,
    fd as c,
    gF as l,
    k8 as u,
    md as d,
    pY as f,
    q5 as p,
    vF as m
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Ln as h,
    Rn as g,
    wn as _,
    zn as v
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Dzt as y,
    LYt as b,
    RYt as x,
    l6 as S,
    u6 as C,
    xzt as w,
    zYt as T
} from "./conversation-small-m08q51xmfe7gjq3d.js";

function E(e) {
    switch (e) {
        case r.DEPRECATED_PENDING:
        case r.STREAMING:
        case r.REALTIME:
        case r.REALTIME_BUSY:
        case r.REALTIME_BACKGROUND:
            return !0;
        default:
            return !1
    }
}

function D() {
    return w().displayState.previewThreadIds
}
var O, k, A, j, M, N, P = e((() => {
    O = _(), o(), c(), m(), n(), C(), b(), u(), s(), g(), y(), k = () => {
        "use forget";
        let e = (0, O.c)(5),
            n = v(),
            r = p(D),
            a;
        e[0] === r ? a = e[1] : (a = e => r.map(n => ({
            threadId: n,
            thread: t(n, e)
        })), e[0] = r, e[1] = a);
        let o = f(a),
            s;
        return e[2] !== n || e[3] !== o ? (s = () => o.flatMap(e => {
            let {
                threadId: t,
                thread: r
            } = e;
            return !r || !i.hasUserMessage(r) ? [] : [A({
                id: t,
                thread: r,
                intl: n
            })]
        }), e[2] = n, e[3] = o, e[4] = s) : s = e[4], p(s)
    }, A = ({
        id: e,
        thread: t,
        intl: n
    }) => {
        let r = i.getRequestId(t),
            o = l(e),
            s = i.getConversationLastTurn(t)?.messages ?? [],
            c = j(o, s),
            u = a(o)?.value ?? null,
            f = c?.latestEvent?.timestamp_ms ?? (t.update_time ? t.update_time * 1e3 : null),
            p = c?.isResponding || d(r) || E(u) ? `in_progress` : c?.status ?? `completed`;
        return {
            id: e,
            title: t.title ?? n.formatMessage(N.untitledChat),
            last_used_at: M(t, f),
            fiber_status: p,
            fiber_is_responding: !1,
            invocation: {
                type: `chatgpt`,
                is_scheduled: !1
            }
        }
    }, j = (e, t) => {
        if (!x(t)) return null;
        try {
            let n = S(e),
                r = n.getLatestChatSDK$(T(t));
            return n.getWidgetState$(r)
        } catch {
            return null
        }
    }, M = (e, t) => t == null ? e.createTime?.toISOString() ?? new Date().toISOString() : new Date(t).toISOString(), N = h({
        untitledChat: {
            id: `Hermes.GptStudio.ChatgptPreview.useRecentPreviewConvos.untitledChat`,
            defaultMessage: `New chat`
        }
    })
}));
export {
    k as n, P as t
};
//# sourceMappingURL=aaf9e772-om88m8w7obe7enyk.js.map
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $J as t,
    A8 as n,
    BC as r,
    GJ as i,
    J5 as a,
    RC as o,
    Vst as s,
    eY as c,
    fd as l,
    gF as u,
    md as d,
    pY as f,
    vF as p,
    xct as m
} from "./4813494d-d7xm9wsvhdfbag9a.js";
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
} from "./conversation-small-m7dgsxtvvivh3e6t.js";

function E(e) {
    switch (e) {
        case s.DEPRECATED_PENDING:
        case s.STREAMING:
        case s.REALTIME:
        case s.REALTIME_BUSY:
        case s.REALTIME_BACKGROUND:
            return !0;
        default:
            return !1
    }
}

function D() {
    return w().displayState.previewThreadIds
}
var O, k, A, j, M, N, P = e((() => {
    O = _(), m(), l(), p(), r(), C(), b(), n(), c(), g(), y(), k = () => {
        "use forget";
        let e = (0, O.c)(5),
            n = v(),
            r = a(D),
            o;
        e[0] === r ? o = e[1] : (o = e => r.map(n => ({
            threadId: n,
            thread: t(n, e)
        })), e[0] = r, e[1] = o);
        let s = f(o),
            c;
        return e[2] !== n || e[3] !== s ? (c = () => s.flatMap(e => {
            let {
                threadId: t,
                thread: r
            } = e;
            return !r || !i.hasUserMessage(r) ? [] : [A({
                id: t,
                thread: r,
                intl: n
            })]
        }), e[2] = n, e[3] = s, e[4] = c) : c = e[4], a(c)
    }, A = ({
        id: e,
        thread: t,
        intl: n
    }) => {
        let r = i.getRequestId(t),
            a = u(e),
            s = i.getConversationLastTurn(t)?.messages ?? [],
            c = j(a, s),
            l = o(a)?.value ?? null,
            f = c?.latestEvent?.timestamp_ms ?? (t.update_time ? t.update_time * 1e3 : null),
            p = c?.isResponding || d(r) || E(l) ? `in_progress` : c?.status ?? `completed`;
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
//# sourceMappingURL=aaf9e772-omkt6hcwdkh4f982.js.map
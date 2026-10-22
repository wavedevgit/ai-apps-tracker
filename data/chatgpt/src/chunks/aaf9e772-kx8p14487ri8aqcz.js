import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $J as t,
    BC as n,
    GJ as r,
    RC as i,
    Rst as a,
    eY as o,
    fd as s,
    gF as c,
    k8 as l,
    md as u,
    pY as d,
    q5 as f,
    vF as p,
    vct as m
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Ln as h,
    Rn as g,
    wn as _,
    zn as v
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Czt as y,
    DYt as b,
    EYt as x,
    OYt as S,
    _zt as C,
    c6 as w,
    l6 as T
} from "./conversation-small-i79e9c315w50am5f.js";

function E(e) {
    switch (e) {
        case a.DEPRECATED_PENDING:
        case a.STREAMING:
        case a.REALTIME:
        case a.REALTIME_BUSY:
        case a.REALTIME_BACKGROUND:
            return !0;
        default:
            return !1
    }
}

function D() {
    return C().displayState.previewThreadIds
}
var O, k, A, j, M, N, P = e((() => {
    O = _(), m(), s(), p(), n(), T(), x(), l(), o(), g(), y(), k = () => {
        "use forget";
        let e = (0, O.c)(5),
            n = v(),
            i = f(D),
            a;
        e[0] === i ? a = e[1] : (a = e => i.map(n => ({
            threadId: n,
            thread: t(n, e)
        })), e[0] = i, e[1] = a);
        let o = d(a),
            s;
        return e[2] !== n || e[3] !== o ? (s = () => o.flatMap(e => {
            let {
                threadId: t,
                thread: i
            } = e;
            return !i || !r.hasUserMessage(i) ? [] : [A({
                id: t,
                thread: i,
                intl: n
            })]
        }), e[2] = n, e[3] = o, e[4] = s) : s = e[4], f(s)
    }, A = ({
        id: e,
        thread: t,
        intl: n
    }) => {
        let a = r.getRequestId(t),
            o = c(e),
            s = r.getConversationLastTurn(t)?.messages ?? [],
            l = j(o, s),
            d = i(o)?.value ?? null,
            f = l?.latestEvent?.timestamp_ms ?? (t.update_time ? t.update_time * 1e3 : null),
            p = l?.isResponding || u(a) || E(d) ? `in_progress` : l?.status ?? `completed`;
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
        if (!b(t)) return null;
        try {
            let n = w(e),
                r = n.getLatestChatSDK$(S(t));
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
//# sourceMappingURL=aaf9e772-kx8p14487ri8aqcz.js.map
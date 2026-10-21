import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Est as t,
    FC as n,
    JJ as r,
    NC as i,
    P5 as a,
    dF as o,
    dd as s,
    g8 as c,
    gY as l,
    nY as u,
    oct as d,
    pF as f,
    pd as p,
    rY as m
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    Ln as h,
    Rn as g,
    wn as _,
    zn as v
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Azt as y,
    FYt as b,
    NYt as x,
    PYt as S,
    o6 as C,
    s6 as w,
    wzt as T
} from "./conversation-small-kzsalymynzuddxee.js";

function E(e) {
    switch (e) {
        case t.DEPRECATED_PENDING:
        case t.STREAMING:
        case t.REALTIME:
        case t.REALTIME_BUSY:
        case t.REALTIME_BACKGROUND:
            return !0;
        default:
            return !1
    }
}

function D() {
    return T().displayState.previewThreadIds
}
var O, k, A, j, M, N, P = e((() => {
    O = _(), d(), s(), f(), n(), w(), x(), c(), m(), g(), y(), k = () => {
        "use forget";
        let e = (0, O.c)(5),
            t = v(),
            n = a(D),
            i;
        e[0] === n ? i = e[1] : (i = e => n.map(t => ({
            threadId: t,
            thread: u(t, e)
        })), e[0] = n, e[1] = i);
        let o = l(i),
            s;
        return e[2] !== t || e[3] !== o ? (s = () => o.flatMap(e => {
            let {
                threadId: n,
                thread: i
            } = e;
            return !i || !r.hasUserMessage(i) ? [] : [A({
                id: n,
                thread: i,
                intl: t
            })]
        }), e[2] = t, e[3] = o, e[4] = s) : s = e[4], a(s)
    }, A = ({
        id: e,
        thread: t,
        intl: n
    }) => {
        let a = r.getRequestId(t),
            s = o(e),
            c = r.getConversationLastTurn(t)?.messages ?? [],
            l = j(s, c),
            u = i(s)?.value ?? null,
            d = l?.latestEvent?.timestamp_ms ?? (t.update_time ? t.update_time * 1e3 : null),
            f = l?.isResponding || p(a) || E(u) ? `in_progress` : l?.status ?? `completed`;
        return {
            id: e,
            title: t.title ?? n.formatMessage(N.untitledChat),
            last_used_at: M(t, d),
            fiber_status: f,
            fiber_is_responding: !1,
            invocation: {
                type: `chatgpt`,
                is_scheduled: !1
            }
        }
    }, j = (e, t) => {
        if (!S(t)) return null;
        try {
            let n = C(e),
                r = n.getLatestChatSDK$(b(t));
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
//# sourceMappingURL=aaf9e772-1v4c4u01xoormd1o.js.map
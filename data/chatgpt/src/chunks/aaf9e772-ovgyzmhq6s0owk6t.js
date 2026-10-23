import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $J as t,
    A8 as n,
    BC as r,
    GJ as i,
    Jst as a,
    Oct as o,
    RC as s,
    eY as c,
    fd as l,
    gF as u,
    j5 as d,
    md as f,
    pY as p,
    vF as m
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Ln as h,
    Rn as g,
    wn as _,
    zn as v
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    AYt as y,
    bzt as b,
    jYt as x,
    kYt as S,
    l6 as C,
    mzt as w,
    u6 as T
} from "./conversation-small-bcbq46iub1p0ca1t.js";

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
    return w().displayState.previewThreadIds
}
var O, k, A, j, M, N, P = e((() => {
    O = _(), o(), l(), m(), r(), T(), S(), n(), c(), g(), b(), k = () => {
        "use forget";
        let e = (0, O.c)(5),
            n = v(),
            r = d(D),
            a;
        e[0] === r ? a = e[1] : (a = e => r.map(n => ({
            threadId: n,
            thread: t(n, e)
        })), e[0] = r, e[1] = a);
        let o = p(a),
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
        }), e[2] = n, e[3] = o, e[4] = s) : s = e[4], d(s)
    }, A = ({
        id: e,
        thread: t,
        intl: n
    }) => {
        let r = i.getRequestId(t),
            a = u(e),
            o = i.getConversationLastTurn(t)?.messages ?? [],
            c = j(a, o),
            l = s(a)?.value ?? null,
            d = c?.latestEvent?.timestamp_ms ?? (t.update_time ? t.update_time * 1e3 : null),
            p = c?.isResponding || f(r) || E(l) ? `in_progress` : c?.status ?? `completed`;
        return {
            id: e,
            title: t.title ?? n.formatMessage(N.untitledChat),
            last_used_at: M(t, d),
            fiber_status: p,
            fiber_is_responding: !1,
            invocation: {
                type: `chatgpt`,
                is_scheduled: !1
            }
        }
    }, j = (e, t) => {
        if (!y(t)) return null;
        try {
            let n = C(e),
                r = n.getLatestChatSDK$(x(t));
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
//# sourceMappingURL=aaf9e772-ovgyzmhq6s0owk6t.js.map
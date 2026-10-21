import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $st as t,
    M5 as n,
    MC as r,
    PC as i,
    fF as a,
    fd as o,
    hY as s,
    m8 as c,
    nY as l,
    qJ as u,
    tY as d,
    uF as f,
    ud as p,
    yst as m
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as h,
    Rn as g,
    Tn as _,
    zn as v
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    DYt as y,
    OYt as b,
    i6 as x,
    kYt as S,
    r6 as C,
    vzt as w,
    wzt as T
} from "./conversation-small-cawdu7il3ha6y70c.js";

function E(e) {
    switch (e) {
        case m.DEPRECATED_PENDING:
        case m.STREAMING:
        case m.REALTIME:
        case m.REALTIME_BUSY:
        case m.REALTIME_BACKGROUND:
            return !0;
        default:
            return !1
    }
}

function D() {
    return w().displayState.previewThreadIds
}
var O, k, A, j, M, N, P = e((() => {
    O = _(), t(), p(), a(), i(), x(), y(), c(), l(), v(), T(), k = () => {
        "use forget";
        let e = (0, O.c)(5),
            t = h(),
            r = n(D),
            i;
        e[0] === r ? i = e[1] : (i = e => r.map(t => ({
            threadId: t,
            thread: d(t, e)
        })), e[0] = r, e[1] = i);
        let a = s(i),
            o;
        return e[2] !== t || e[3] !== a ? (o = () => a.flatMap(e => {
            let {
                threadId: n,
                thread: r
            } = e;
            return !r || !u.hasUserMessage(r) ? [] : [A({
                id: n,
                thread: r,
                intl: t
            })]
        }), e[2] = t, e[3] = a, e[4] = o) : o = e[4], n(o)
    }, A = ({
        id: e,
        thread: t,
        intl: n
    }) => {
        let i = u.getRequestId(t),
            a = f(e),
            s = u.getConversationLastTurn(t)?.messages ?? [],
            c = j(a, s),
            l = r(a)?.value ?? null,
            d = c?.latestEvent?.timestamp_ms ?? (t.update_time ? t.update_time * 1e3 : null),
            p = c?.isResponding || o(i) || E(l) ? `in_progress` : c?.status ?? `completed`;
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
        if (!b(t)) return null;
        try {
            let n = C(e),
                r = n.getLatestChatSDK$(S(t));
            return n.getWidgetState$(r)
        } catch {
            return null
        }
    }, M = (e, t) => t == null ? e.createTime?.toISOString() ?? new Date().toISOString() : new Date(t).toISOString(), N = g({
        untitledChat: {
            id: `Hermes.GptStudio.ChatgptPreview.useRecentPreviewConvos.untitledChat`,
            defaultMessage: `New chat`
        }
    })
}));
export {
    k as n, P as t
};
//# sourceMappingURL=aaf9e772-pvam3pmqwcpmvevq.js.map
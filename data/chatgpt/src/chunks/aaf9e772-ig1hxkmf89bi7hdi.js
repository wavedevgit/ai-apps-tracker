import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AJ as t,
    B6 as n,
    JP as r,
    Ju as i,
    KP as a,
    Ku as o,
    UJ as s,
    Wot as c,
    gC as l,
    i5 as u,
    kJ as d,
    mC as f,
    wst as p,
    xJ as m
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Ln as h,
    Rn as g,
    wn as _,
    zn as v
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    EYt as y,
    TYt as b,
    n6 as x,
    t6 as S,
    vzt as C,
    wYt as w,
    wzt as T
} from "./conversation-small-fym1zmu9zimymmm1.js";

function E(e) {
    switch (e) {
        case c.DEPRECATED_PENDING:
        case c.STREAMING:
        case c.REALTIME:
        case c.REALTIME_BUSY:
        case c.REALTIME_BACKGROUND:
            return !0;
        default:
            return !1
    }
}

function D() {
    return C().displayState.previewThreadIds
}
var O, k, A, j, M, N, P = e((() => {
    O = _(), p(), o(), r(), l(), x(), w(), n(), t(), g(), T(), k = () => {
        "use forget";
        let e = (0, O.c)(5),
            t = v(),
            n = u(D),
            r;
        e[0] === n ? r = e[1] : (r = e => n.map(t => ({
            threadId: t,
            thread: d(t, e)
        })), e[0] = n, e[1] = r);
        let i = s(r),
            a;
        return e[2] !== t || e[3] !== i ? (a = () => i.flatMap(e => {
            let {
                threadId: n,
                thread: r
            } = e;
            return !r || !m.hasUserMessage(r) ? [] : [A({
                id: n,
                thread: r,
                intl: t
            })]
        }), e[2] = t, e[3] = i, e[4] = a) : a = e[4], u(a)
    }, A = ({
        id: e,
        thread: t,
        intl: n
    }) => {
        let r = m.getRequestId(t),
            o = a(e),
            s = m.getConversationLastTurn(t)?.messages ?? [],
            c = j(o, s),
            l = f(o)?.value ?? null,
            u = c?.latestEvent?.timestamp_ms ?? (t.update_time ? t.update_time * 1e3 : null),
            d = c?.isResponding || i(r) || E(l) ? `in_progress` : c?.status ?? `completed`;
        return {
            id: e,
            title: t.title ?? n.formatMessage(N.untitledChat),
            last_used_at: M(t, u),
            fiber_status: d,
            fiber_is_responding: !1,
            invocation: {
                type: `chatgpt`,
                is_scheduled: !1
            }
        }
    }, j = (e, t) => {
        if (!b(t)) return null;
        try {
            let n = S(e),
                r = n.getLatestChatSDK$(y(t));
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
//# sourceMappingURL=aaf9e772-ig1hxkmf89bi7hdi.js.map
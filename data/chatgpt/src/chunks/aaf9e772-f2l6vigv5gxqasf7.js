import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A5 as t,
    MC as n,
    PC as r,
    Zst as i,
    _st as a,
    f8 as o,
    fF as s,
    fd as c,
    hY as l,
    nY as u,
    qJ as d,
    tY as f,
    uF as p,
    ud as m
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    Ln as h,
    Rn as g,
    wn as _,
    zn as v
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    DYt as y,
    OYt as b,
    i6 as x,
    kYt as S,
    r6 as C,
    vzt as w,
    wzt as T
} from "./conversation-small-l6tnsr2xfn2d55kk.js";

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
    O = _(), i(), m(), s(), r(), x(), y(), o(), u(), g(), T(), k = () => {
        "use forget";
        let e = (0, O.c)(5),
            n = v(),
            r = t(D),
            i;
        e[0] === r ? i = e[1] : (i = e => r.map(t => ({
            threadId: t,
            thread: f(t, e)
        })), e[0] = r, e[1] = i);
        let a = l(i),
            o;
        return e[2] !== n || e[3] !== a ? (o = () => a.flatMap(e => {
            let {
                threadId: t,
                thread: r
            } = e;
            return !r || !d.hasUserMessage(r) ? [] : [A({
                id: t,
                thread: r,
                intl: n
            })]
        }), e[2] = n, e[3] = a, e[4] = o) : o = e[4], t(o)
    }, A = ({
        id: e,
        thread: t,
        intl: r
    }) => {
        let i = d.getRequestId(t),
            a = p(e),
            o = d.getConversationLastTurn(t)?.messages ?? [],
            s = j(a, o),
            l = n(a)?.value ?? null,
            u = s?.latestEvent?.timestamp_ms ?? (t.update_time ? t.update_time * 1e3 : null),
            f = s?.isResponding || c(i) || E(l) ? `in_progress` : s?.status ?? `completed`;
        return {
            id: e,
            title: t.title ?? r.formatMessage(N.untitledChat),
            last_used_at: M(t, u),
            fiber_status: f,
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
//# sourceMappingURL=aaf9e772-f2l6vigv5gxqasf7.js.map
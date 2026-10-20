import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Jtt as t,
    P7 as n,
    R7 as r,
    dY as i,
    dat as a,
    iat as o,
    nY as s,
    oat as c,
    qtt as l,
    sat as u
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    p as d,
    s as f
} from "./2340486e-i7pjxgdhv0bs6apg.js";

function p(e) {
    if (typeof e == `object` && e && `status` in e) return String(e.status)
}

function m({
    messageId: e,
    clientThreadId: t,
    source: r = `full-screen-map`
}) {
    "use no forget";
    let a = i(t);
    return d({
        mutationFn: async ({
            feedbackText: t,
            feedbackReasons: i
        }) => {
            let s = t.trim();
            if (s === `` && i.length === 0) return;
            let c = typeof navigator < `u` ? navigator.language : `en-US`,
                d = l() || void 0;
            try {
                await n.safePost(`/conversation/message/immersive-maps/feedback`, {
                    requestBody: {
                        message_id: e ?? `unknown`,
                        conversation_id: a ?? `unknown`,
                        feedback: s,
                        source: r,
                        checked_reasons: i.length > 0 ? i : void 0,
                        user_agent: d,
                        language: c,
                        timestamp_client: Date.now()
                    },
                    authOption: u.SendIfAvailable
                })
            } catch (t) {
                o.addAction(`immersive_map_feedback.submit_failed`, {
                    checked_reason_count: i.length,
                    checked_reasons: i.join(`,`),
                    has_message_id: e != null,
                    has_conversation_id: a != null,
                    status: p(t)
                })
            }
        }
    })
}
var h = e((() => {
    s(), a(), c(), r(), t(), f()
}));
export {
    m as n, h as t
};
//# sourceMappingURL=97c6978d-bzefa3gramr5o0y3.js.map
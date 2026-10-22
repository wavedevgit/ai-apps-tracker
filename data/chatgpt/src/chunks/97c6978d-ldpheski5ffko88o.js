import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Cat as t,
    J7 as n,
    Oat as r,
    Q7 as i,
    dnt as a,
    eY as o,
    lY as s,
    unt as c,
    wat as l,
    xat as u
} from "./4813494d-t80q9ew944ej0mgk.js";
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
    let i = s(t);
    return d({
        mutationFn: async ({
            feedbackText: t,
            feedbackReasons: a
        }) => {
            let o = t.trim();
            if (o === `` && a.length === 0) return;
            let s = typeof navigator < `u` ? navigator.language : `en-US`,
                d = c() || void 0;
            try {
                await n.safePost(`/conversation/message/immersive-maps/feedback`, {
                    requestBody: {
                        message_id: e ?? `unknown`,
                        conversation_id: i ?? `unknown`,
                        feedback: o,
                        source: r,
                        checked_reasons: a.length > 0 ? a : void 0,
                        user_agent: d,
                        language: s,
                        timestamp_client: Date.now()
                    },
                    authOption: l.SendIfAvailable
                })
            } catch (t) {
                u.addAction(`immersive_map_feedback.submit_failed`, {
                    checked_reason_count: a.length,
                    checked_reasons: a.join(`,`),
                    has_message_id: e != null,
                    has_conversation_id: i != null,
                    status: p(t)
                })
            }
        }
    })
}
var h = e((() => {
    o(), r(), t(), i(), a(), f()
}));
export {
    m as n, h as t
};
//# sourceMappingURL=97c6978d-ldpheski5ffko88o.js.map
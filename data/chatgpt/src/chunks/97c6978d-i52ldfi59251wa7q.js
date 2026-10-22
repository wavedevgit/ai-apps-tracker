import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Aat as t,
    Cat as n,
    Eat as r,
    J7 as i,
    Q7 as a,
    Tat as o,
    eY as s,
    fnt as c,
    lY as l,
    pnt as u
} from "./4813494d-nxpmzchfjvwqts17.js";
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
    source: a = `full-screen-map`
}) {
    "use no forget";
    let o = l(t);
    return d({
        mutationFn: async ({
            feedbackText: t,
            feedbackReasons: s
        }) => {
            let l = t.trim();
            if (l === `` && s.length === 0) return;
            let u = typeof navigator < `u` ? navigator.language : `en-US`,
                d = c() || void 0;
            try {
                await i.safePost(`/conversation/message/immersive-maps/feedback`, {
                    requestBody: {
                        message_id: e ?? `unknown`,
                        conversation_id: o ?? `unknown`,
                        feedback: l,
                        source: a,
                        checked_reasons: s.length > 0 ? s : void 0,
                        user_agent: d,
                        language: u,
                        timestamp_client: Date.now()
                    },
                    authOption: r.SendIfAvailable
                })
            } catch (t) {
                n.addAction(`immersive_map_feedback.submit_failed`, {
                    checked_reason_count: s.length,
                    checked_reasons: s.join(`,`),
                    has_message_id: e != null,
                    has_conversation_id: o != null,
                    status: p(t)
                })
            }
        }
    })
}
var h = e((() => {
    s(), t(), o(), a(), u(), f()
}));
export {
    m as n, h as t
};
//# sourceMappingURL=97c6978d-i52ldfi59251wa7q.js.map
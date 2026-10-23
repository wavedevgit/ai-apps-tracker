import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    I7 as t,
    M7 as n,
    Nat as r,
    Pat as i,
    Rat as a,
    bnt as o,
    eY as s,
    jat as c,
    lY as l,
    xnt as u
} from "./4813494d-mdvd4786a87166cc.js";
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
    let a = l(t);
    return d({
        mutationFn: async ({
            feedbackText: t,
            feedbackReasons: s
        }) => {
            let l = t.trim();
            if (l === `` && s.length === 0) return;
            let u = typeof navigator < `u` ? navigator.language : `en-US`,
                d = o() || void 0;
            try {
                await n.safePost(`/conversation/message/immersive-maps/feedback`, {
                    requestBody: {
                        message_id: e ?? `unknown`,
                        conversation_id: a ?? `unknown`,
                        feedback: l,
                        source: r,
                        checked_reasons: s.length > 0 ? s : void 0,
                        user_agent: d,
                        language: u,
                        timestamp_client: Date.now()
                    },
                    authOption: i.SendIfAvailable
                })
            } catch (t) {
                c.addAction(`immersive_map_feedback.submit_failed`, {
                    checked_reason_count: s.length,
                    checked_reasons: s.join(`,`),
                    has_message_id: e != null,
                    has_conversation_id: a != null,
                    status: p(t)
                })
            }
        }
    })
}
var h = e((() => {
    s(), a(), r(), t(), u(), f()
}));
export {
    m as n, h as t
};
//# sourceMappingURL=97c6978d-gyfqahfj16nyfxcs.js.map
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as t,
    Dat as n,
    Eat as r,
    Y7 as i,
    eY as a,
    jat as o,
    lY as s,
    mnt as c,
    pnt as l,
    wat as u
} from "./4813494d-i89nb6zlze66idsz.js";
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
    let a = s(t);
    return d({
        mutationFn: async ({
            feedbackText: t,
            feedbackReasons: o
        }) => {
            let s = t.trim();
            if (s === `` && o.length === 0) return;
            let c = typeof navigator < `u` ? navigator.language : `en-US`,
                d = l() || void 0;
            try {
                await i.safePost(`/conversation/message/immersive-maps/feedback`, {
                    requestBody: {
                        message_id: e ?? `unknown`,
                        conversation_id: a ?? `unknown`,
                        feedback: s,
                        source: r,
                        checked_reasons: o.length > 0 ? o : void 0,
                        user_agent: d,
                        language: c,
                        timestamp_client: Date.now()
                    },
                    authOption: n.SendIfAvailable
                })
            } catch (t) {
                u.addAction(`immersive_map_feedback.submit_failed`, {
                    checked_reason_count: o.length,
                    checked_reasons: o.join(`,`),
                    has_message_id: e != null,
                    has_conversation_id: a != null,
                    status: p(t)
                })
            }
        }
    })
}
var h = e((() => {
    a(), o(), r(), t(), c(), f()
}));
export {
    m as n, h as t
};
//# sourceMappingURL=97c6978d-m6h65nfkv7shs0ks.js.map
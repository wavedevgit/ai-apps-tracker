import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AJ as t,
    Ait as n,
    Dit as r,
    Pit as i,
    _tt as a,
    a7 as o,
    gtt as s,
    kit as c,
    l7 as l,
    zJ as u
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    p as d,
    s as f
} from "./2340486e-oc6d2eodbcrmxur3.js";

function p(e) {
    if (typeof e == `object` && e && `status` in e) return String(e.status)
}

function m({
    messageId: e,
    clientThreadId: t,
    source: i = `full-screen-map`
}) {
    "use no forget";
    let a = u(t);
    return d({
        mutationFn: async ({
            feedbackText: t,
            feedbackReasons: c
        }) => {
            let l = t.trim();
            if (l === `` && c.length === 0) return;
            let u = typeof navigator < `u` ? navigator.language : `en-US`,
                d = s() || void 0;
            try {
                await o.safePost(`/conversation/message/immersive-maps/feedback`, {
                    requestBody: {
                        message_id: e ?? `unknown`,
                        conversation_id: a ?? `unknown`,
                        feedback: l,
                        source: i,
                        checked_reasons: c.length > 0 ? c : void 0,
                        user_agent: d,
                        language: u,
                        timestamp_client: Date.now()
                    },
                    authOption: n.SendIfAvailable
                })
            } catch (t) {
                r.addAction(`immersive_map_feedback.submit_failed`, {
                    checked_reason_count: c.length,
                    checked_reasons: c.join(`,`),
                    has_message_id: e != null,
                    has_conversation_id: a != null,
                    status: p(t)
                })
            }
        }
    })
}
var h = e((() => {
    t(), i(), c(), l(), a(), f()
}));
export {
    m as n, h as t
};
//# sourceMappingURL=97c6978d-mv7owuxmixniixhv.js.map
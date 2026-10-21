import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    F7 as t,
    Jtt as n,
    Ytt as r,
    aat as i,
    cat as a,
    fY as o,
    fat as s,
    rY as c,
    sat as l,
    z7 as u
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    p as d,
    s as f
} from "./2340486e-i7pjxgdhv0bs6apg.js";

function p(e) {
    if (typeof e == `object` && e && `status` in e) return String(e.status)
}

function m({
    messageId: e,
    clientThreadId: r,
    source: s = `full-screen-map`
}) {
    "use no forget";
    let c = o(r);
    return d({
        mutationFn: async ({
            feedbackText: r,
            feedbackReasons: o
        }) => {
            let l = r.trim();
            if (l === `` && o.length === 0) return;
            let u = typeof navigator < `u` ? navigator.language : `en-US`,
                d = n() || void 0;
            try {
                await t.safePost(`/conversation/message/immersive-maps/feedback`, {
                    requestBody: {
                        message_id: e ?? `unknown`,
                        conversation_id: c ?? `unknown`,
                        feedback: l,
                        source: s,
                        checked_reasons: o.length > 0 ? o : void 0,
                        user_agent: d,
                        language: u,
                        timestamp_client: Date.now()
                    },
                    authOption: a.SendIfAvailable
                })
            } catch (t) {
                i.addAction(`immersive_map_feedback.submit_failed`, {
                    checked_reason_count: o.length,
                    checked_reasons: o.join(`,`),
                    has_message_id: e != null,
                    has_conversation_id: c != null,
                    status: p(t)
                })
            }
        }
    })
}
var h = e((() => {
    c(), s(), l(), u(), r(), f()
}));
export {
    m as n, h as t
};
//# sourceMappingURL=97c6978d-db97tkni5krgvwb1.js.map
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $tt as t,
    F7 as n,
    Qtt as r,
    dat as i,
    fY as a,
    fat as o,
    gat as s,
    lat as c,
    rY as l,
    z7 as u
} from "./4813494d-lxa3wniynbx9ka2a.js";
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
    source: i = `full-screen-map`
}) {
    "use no forget";
    let s = a(t);
    return d({
        mutationFn: async ({
            feedbackText: t,
            feedbackReasons: a
        }) => {
            let l = t.trim();
            if (l === `` && a.length === 0) return;
            let u = typeof navigator < `u` ? navigator.language : `en-US`,
                d = r() || void 0;
            try {
                await n.safePost(`/conversation/message/immersive-maps/feedback`, {
                    requestBody: {
                        message_id: e ?? `unknown`,
                        conversation_id: s ?? `unknown`,
                        feedback: l,
                        source: i,
                        checked_reasons: a.length > 0 ? a : void 0,
                        user_agent: d,
                        language: u,
                        timestamp_client: Date.now()
                    },
                    authOption: o.SendIfAvailable
                })
            } catch (t) {
                c.addAction(`immersive_map_feedback.submit_failed`, {
                    checked_reason_count: a.length,
                    checked_reasons: a.join(`,`),
                    has_message_id: e != null,
                    has_conversation_id: s != null,
                    status: p(t)
                })
            }
        }
    })
}
var h = e((() => {
    l(), s(), i(), u(), t(), f()
}));
export {
    m as n, h as t
};
//# sourceMappingURL=97c6978d-cwzdaf61oalunysb.js.map
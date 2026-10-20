import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    F7 as t,
    Utt as n,
    Wtt as r,
    dY as i,
    eat as a,
    j7 as o,
    nY as s,
    nat as c,
    rat as l,
    sat as u
} from "./4813494d-ed29bs6yiwucn7st.js";
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
    source: r = `full-screen-map`
}) {
    "use no forget";
    let s = i(t);
    return d({
        mutationFn: async ({
            feedbackText: t,
            feedbackReasons: i
        }) => {
            let c = t.trim();
            if (c === `` && i.length === 0) return;
            let u = typeof navigator < `u` ? navigator.language : `en-US`,
                d = n() || void 0;
            try {
                await o.safePost(`/conversation/message/immersive-maps/feedback`, {
                    requestBody: {
                        message_id: e ?? `unknown`,
                        conversation_id: s ?? `unknown`,
                        feedback: c,
                        source: r,
                        checked_reasons: i.length > 0 ? i : void 0,
                        user_agent: d,
                        language: u,
                        timestamp_client: Date.now()
                    },
                    authOption: l.SendIfAvailable
                })
            } catch (t) {
                a.addAction(`immersive_map_feedback.submit_failed`, {
                    checked_reason_count: i.length,
                    checked_reasons: i.join(`,`),
                    has_message_id: e != null,
                    has_conversation_id: s != null,
                    status: p(t)
                })
            }
        }
    })
}
var h = e((() => {
    s(), u(), c(), t(), r(), f()
}));
export {
    m as n, h as t
};
//# sourceMappingURL=97c6978d-fxdy3l2uxcqb4jur.js.map
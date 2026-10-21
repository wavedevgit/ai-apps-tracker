import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    prt as t,
    srt as n
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    Zt as r,
    rn as i
} from "./2340486e-i7pjxgdhv0bs6apg.js";

function a(e) {
    if (e.trigger.type !== `API`) return null;
    let t = Reflect.get(e, `api_trigger_id`);
    return typeof t == `string` ? t : e.id
}

function o(e) {
    return (e ?? []).filter(e => e.trigger.type === `API`)
}

function s() {
    return n(`1010509169`)
}

function c(e) {
    return `${u}${encodeURIComponent(e)}/trigger`
}

function l(e) {
    return `curl -sS -X POST \\
  "${c(e)}" \\
  -H "Authorization: Bearer $AGENT_ACCESS_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "input": "Hello world"
  }' \\
  -w '\\nHTTP %{response_code}\\n'`
}
var u, d, f, p, m = e((() => {
    t(), r(), u = `https://api.chatgpt.com/v1/workspace_agents/`, d = () => ({
        deployment_id: i(),
        api_trigger: {
            type: `API`,
            instructions: `Run this agent from the API channel.`
        },
        materialized_trigger_id: null,
        pending_deletion: !1
    }), f = e => e.pending_deletion !== !0, p = e => e.materialized_trigger_id ?? null
}));
export {
    o as a, m as c, p as i, f as l, c as n, a as o, l as r, s, d as t
};
//# sourceMappingURL=e2ef8fe8-d3ky2y7s5c3tsrh6.js.map
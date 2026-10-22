import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Kx as t,
    Vx as n,
    dS as r,
    gS as i,
    oS as a,
    uS as o
} from "./c2675c8c-4fpunyxk1uf8cfp1.js";

function s(e, t = !1) {
    return e === void 0 ? void 0 : (t ? u : l).parse(e)
}
var c, l, u, d = e((() => {
    n(), c = {
        kind: a(`personality_quiz`),
        mode: t([`quiz`, `result`])
    }, l = r({
        ...c,
        expected_revision: o().int().nonnegative().max(2 ** 53 - 1).optional()
    }).refine(e => e.mode !== `result` || e.expected_revision != null), u = r({
        ...c,
        result_id: i().uuid().optional()
    }).refine(e => e.mode !== `result` || e.result_id != null)
}));
export {
    s as n, d as t
};
//# sourceMappingURL=3e7ffcd4-d1folk2oa1utlcda.js.map
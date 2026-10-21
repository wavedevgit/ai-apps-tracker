import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Hx as t,
    Lx as n,
    fS as r,
    nS as i,
    oS as a,
    sS as o
} from "./c2675c8c-h5ybkhdzcoblzzdu.js";

function s(e, t = !1) {
    return e === void 0 ? void 0 : (t ? u : l).parse(e)
}
var c, l, u, d = e((() => {
    n(), c = {
        kind: i(`personality_quiz`),
        mode: t([`quiz`, `result`])
    }, l = o({
        ...c,
        expected_revision: a().int().nonnegative().max(2 ** 53 - 1).optional()
    }).refine(e => e.mode !== `result` || e.expected_revision != null), u = o({
        ...c,
        result_id: r().uuid().optional()
    }).refine(e => e.mode !== `result` || e.result_id != null)
}));
export {
    s as n, d as t
};
//# sourceMappingURL=3e7ffcd4-6eso504xzs27mxla.js.map
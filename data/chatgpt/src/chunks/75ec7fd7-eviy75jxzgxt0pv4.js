import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B6 as t,
    WE as n,
    cst as r,
    i5 as i,
    ost as a,
    qE as o,
    wst as s
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as c,
    Rn as l,
    zn as u
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    D8 as d,
    M8 as f,
    N8 as p,
    j8 as m,
    k8 as h
} from "./conversation-small-fym1zmu9zimymmm1.js";

function g({
    gizmoId: e,
    onClose: t
}) {
    let o = i(() => n(e).data),
        {
            data: s
        } = p(a.Gizmo),
        c = f(u(), e, a.Gizmo, r.GPTs);
    if (s == null) return null;
    let l = o == null ? `Report` : `Report ${o.gizmo.display.name}`;
    return (0, _.jsx)(d, {
        reasons: s.reasons,
        submitReport: c,
        title: l,
        onClose: t,
        header: s.header,
        subHeader: s.header_explanation
    })
}
var _, v = e((() => {
    s(), o(), h(), t(), m(), l(), _ = c()
}));
export {
    v as n, g as t
};
//# sourceMappingURL=75ec7fd7-eviy75jxzgxt0pv4.js.map
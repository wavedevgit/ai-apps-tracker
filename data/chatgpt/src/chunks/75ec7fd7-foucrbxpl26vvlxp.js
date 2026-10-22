import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    _D as t,
    ect as n,
    k8 as r,
    mD as i,
    nct as a,
    q5 as o,
    vct as s
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    Bn as c,
    Rn as l,
    zn as u
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    B8 as d,
    I8 as f,
    P8 as p,
    R8 as m,
    z8 as h
} from "./conversation-small-ocicxxw6jegn4vux.js";

function g({
    gizmoId: e,
    onClose: t
}) {
    let r = o(() => i(e).data),
        {
            data: s
        } = d(n.Gizmo),
        c = h(u(), e, n.Gizmo, a.GPTs);
    if (s == null) return null;
    let l = r == null ? `Report` : `Report ${r.gizmo.display.name}`;
    return (0, _.jsx)(p, {
        reasons: s.reasons,
        submitReport: c,
        title: l,
        onClose: t,
        header: s.header,
        subHeader: s.header_explanation
    })
}
var _, v = e((() => {
    s(), t(), f(), r(), m(), l(), _ = c()
}));
export {
    v as n, g as t
};
//# sourceMappingURL=75ec7fd7-foucrbxpl26vvlxp.js.map
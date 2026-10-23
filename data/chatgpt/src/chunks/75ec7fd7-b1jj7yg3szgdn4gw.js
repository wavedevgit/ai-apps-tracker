import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    Oct as n,
    _D as r,
    fct as i,
    j5 as a,
    mD as o,
    uct as s
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as c,
    Rn as l,
    zn as u
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    B8 as d,
    F8 as f,
    L8 as p,
    V8 as m,
    z8 as h
} from "./conversation-small-bcbq46iub1p0ca1t.js";

function g({
    gizmoId: e,
    onClose: t
}) {
    let n = a(() => o(e).data),
        {
            data: r
        } = m(s.Gizmo),
        c = d(u(), e, s.Gizmo, i.GPTs);
    if (r == null) return null;
    let l = n == null ? `Report` : `Report ${n.gizmo.display.name}`;
    return (0, _.jsx)(f, {
        reasons: r.reasons,
        submitReport: c,
        title: l,
        onClose: t,
        header: r.header,
        subHeader: r.header_explanation
    })
}
var _, v = e((() => {
    n(), r(), p(), t(), h(), l(), _ = c()
}));
export {
    v as n, g as t
};
//# sourceMappingURL=75ec7fd7-b1jj7yg3szgdn4gw.js.map
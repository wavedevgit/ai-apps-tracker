import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    J5 as n,
    _D as r,
    act as i,
    mD as a,
    rct as o,
    xct as s
} from "./4813494d-i89nb6zlze66idsz.js";
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
} from "./conversation-small-fh0oqifngkf5rvl1.js";

function g({
    gizmoId: e,
    onClose: t
}) {
    let r = n(() => a(e).data),
        {
            data: s
        } = m(o.Gizmo),
        c = d(u(), e, o.Gizmo, i.GPTs);
    if (s == null) return null;
    let l = r == null ? `Report` : `Report ${r.gizmo.display.name}`;
    return (0, _.jsx)(f, {
        reasons: s.reasons,
        submitReport: c,
        title: l,
        onClose: t,
        header: s.header,
        subHeader: s.header_explanation
    })
}
var _, v = e((() => {
    s(), r(), p(), t(), h(), l(), _ = c()
}));
export {
    v as n, g as t
};
//# sourceMappingURL=75ec7fd7-koj47oyqr8fgf4le.js.map
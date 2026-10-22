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
} from "./4813494d-r54yv6lv29x4ew99.js";
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
} from "./conversation-small-dwpaie1hln28efxb.js";

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
//# sourceMappingURL=75ec7fd7-luk4lc0797nolgkl.js.map
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    _D as t,
    bct as n,
    ict as r,
    k8 as i,
    mD as a,
    nct as o,
    q5 as s
} from "./4813494d-nxpmzchfjvwqts17.js";
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
} from "./conversation-small-m08q51xmfe7gjq3d.js";

function g({
    gizmoId: e,
    onClose: t
}) {
    let n = s(() => a(e).data),
        {
            data: i
        } = m(o.Gizmo),
        c = d(u(), e, o.Gizmo, r.GPTs);
    if (i == null) return null;
    let l = n == null ? `Report` : `Report ${n.gizmo.display.name}`;
    return (0, _.jsx)(f, {
        reasons: i.reasons,
        submitReport: c,
        title: l,
        onClose: t,
        header: i.header,
        subHeader: i.header_explanation
    })
}
var _, v = e((() => {
    n(), t(), p(), i(), h(), l(), _ = c()
}));
export {
    v as n, g as t
};
//# sourceMappingURL=75ec7fd7-ncslniyz2yyk6cbl.js.map
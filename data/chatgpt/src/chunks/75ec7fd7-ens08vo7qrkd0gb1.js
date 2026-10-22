import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Lst as t,
    N5 as n,
    cD as r,
    dD as i,
    h8 as a,
    tct as o,
    zst as s
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as c,
    Rn as l,
    zn as u
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    F8 as d,
    N8 as f,
    P8 as p,
    j8 as m,
    k8 as h
} from "./conversation-small-cy5f8pl0g26s86so.js";

function g({
    gizmoId: e,
    onClose: i
}) {
    let a = n(() => r(e).data),
        {
            data: o
        } = d(t.Gizmo),
        c = p(u(), e, t.Gizmo, s.GPTs);
    if (o == null) return null;
    let l = a == null ? `Report` : `Report ${a.gizmo.display.name}`;
    return (0, _.jsx)(h, {
        reasons: o.reasons,
        submitReport: c,
        title: l,
        onClose: i,
        header: o.header,
        subHeader: o.header_explanation
    })
}
var _, v = e((() => {
    o(), i(), m(), a(), f(), l(), _ = c()
}));
export {
    v as n, g as t
};
//# sourceMappingURL=75ec7fd7-ens08vo7qrkd0gb1.js.map
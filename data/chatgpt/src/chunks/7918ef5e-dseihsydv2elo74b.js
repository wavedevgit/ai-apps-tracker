import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    _w as t,
    hU as n,
    hw as r,
    iw as i,
    ow as a,
    pU as o,
    qE as s,
    tD as c
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as l,
    In as u,
    Nn as d,
    Rn as f,
    zn as p
} from "./2340486e-oc6d2eodbcrmxur3.js";

function m({
    gizmoId: e,
    onSuccess: t,
    onClose: a
}) {
    let o = p(),
        s = n(),
        l = c(),
        f = async () => {
            try {
                await l.mutateAsync({
                    gizmoId: e
                }), t()
            } catch {
                s.danger(u({
                    id: `QmcISs`,
                    defaultMessage: `Failed to delete GPT. Please try again.`
                }), {
                    toastId: `gizmo_editor_deletion_modal`
                })
            }
        };
    return (0, h.jsx)(i, {
        testId: `modal-gizmo-editor-deletion`,
        isOpen: !0,
        onClose: a,
        type: `danger`,
        title: (0, h.jsx)(d, {
            id: `shLmv5`,
            defaultMessage: `Delete GPT`
        }),
        primaryButton: (0, h.jsx)(r.Button, {
            title: o.formatMessage({
                id: `nlWRPu`,
                defaultMessage: `Delete GPT`
            }),
            color: `danger`,
            loading: l.isPending,
            onClick: () => {
                f()
            }
        }),
        secondaryButton: (0, h.jsx)(r.Button, {
            title: o.formatMessage({
                id: `D4IuIb`,
                defaultMessage: `Cancel`
            }),
            color: `secondary`,
            onClick: a
        }),
        children: (0, h.jsx)(`div`, {
            className: `text-sm`,
            children: (0, h.jsx)(d, {
                id: `zIR+cK`,
                defaultMessage: `Are you sure you want to delete this GPT? This cannot be undone.`
            })
        })
    })
}
var h, g = e((() => {
    t(), a(), s(), o(), f(), h = l()
}));
export {
    g as n, m as t
};
//# sourceMappingURL=7918ef5e-dseihsydv2elo74b.js.map
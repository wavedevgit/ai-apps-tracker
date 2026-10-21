import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    BU as t,
    Cw as n,
    HU as r,
    Iw as i,
    Pw as a,
    Tw as o,
    bD as s,
    fD as c
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    Bn as l,
    In as u,
    Nn as d,
    Rn as f,
    zn as p
} from "./2340486e-i7pjxgdhv0bs6apg.js";

function m({
    gizmoId: e,
    onSuccess: t,
    onClose: i
}) {
    let o = p(),
        c = r(),
        l = s(),
        f = async () => {
            try {
                await l.mutateAsync({
                    gizmoId: e
                }), t()
            } catch {
                c.danger(u({
                    id: `QmcISs`,
                    defaultMessage: `Failed to delete GPT. Please try again.`
                }), {
                    toastId: `gizmo_editor_deletion_modal`
                })
            }
        };
    return (0, h.jsx)(n, {
        testId: `modal-gizmo-editor-deletion`,
        isOpen: !0,
        onClose: i,
        type: `danger`,
        title: (0, h.jsx)(d, {
            id: `shLmv5`,
            defaultMessage: `Delete GPT`
        }),
        primaryButton: (0, h.jsx)(a.Button, {
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
        secondaryButton: (0, h.jsx)(a.Button, {
            title: o.formatMessage({
                id: `D4IuIb`,
                defaultMessage: `Cancel`
            }),
            color: `secondary`,
            onClick: i
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
    i(), o(), c(), t(), f(), h = l()
}));
export {
    g as n, m as t
};
//# sourceMappingURL=7918ef5e-fd8daz5ea5aosgvk.js.map
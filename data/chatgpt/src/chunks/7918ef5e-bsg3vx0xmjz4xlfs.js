import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Aw as t,
    LU as n,
    Ow as r,
    TD as i,
    Vw as a,
    _D as o,
    zU as s,
    zw as c
} from "./4813494d-mdvd4786a87166cc.js";
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
    onClose: n
}) {
    let a = p(),
        o = s(),
        l = i(),
        f = async () => {
            try {
                await l.mutateAsync({
                    gizmoId: e
                }), t()
            } catch {
                o.danger(u({
                    id: `QmcISs`,
                    defaultMessage: `Failed to delete GPT. Please try again.`
                }), {
                    toastId: `gizmo_editor_deletion_modal`
                })
            }
        };
    return (0, h.jsx)(r, {
        testId: `modal-gizmo-editor-deletion`,
        isOpen: !0,
        onClose: n,
        type: `danger`,
        title: (0, h.jsx)(d, {
            id: `shLmv5`,
            defaultMessage: `Delete GPT`
        }),
        primaryButton: (0, h.jsx)(c.Button, {
            title: a.formatMessage({
                id: `nlWRPu`,
                defaultMessage: `Delete GPT`
            }),
            color: `danger`,
            loading: l.isPending,
            onClick: () => {
                f()
            }
        }),
        secondaryButton: (0, h.jsx)(c.Button, {
            title: a.formatMessage({
                id: `D4IuIb`,
                defaultMessage: `Cancel`
            }),
            color: `secondary`,
            onClick: n
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
    a(), t(), o(), n(), f(), h = l()
}));
export {
    g as n, m as t
};
//# sourceMappingURL=7918ef5e-bsg3vx0xmjz4xlfs.js.map
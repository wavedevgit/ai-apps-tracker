import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AE as t,
    LU as n,
    kE as r,
    lm as i,
    om as a,
    zU as o
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bn as s,
    Nn as c,
    Rn as l,
    wn as u,
    zn as d
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    i0 as f,
    jtn as p,
    ktn as m,
    n0 as h
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    S as g,
    x as _
} from "./82782bc9-ca5kcqz13rn6iprj.js";
import {
    $h as v,
    Gh as y,
    Jh as b,
    Wh as x,
    Yh as S,
    ig as C,
    ng as w,
    nl as T,
    rl as E
} from "./8b34dbc2-n194ohawifys3bko.js";

function D({
    className: e,
    children: t
}) {
    let n = d(),
        r = o(),
        i = S(),
        {
            getRootProps: s,
            isDragActive: l
        } = g({
            accept: k,
            multiple: !0,
            noClick: !0,
            noKeyboard: !0,
            maxSize: m,
            onDropAccepted: e => {
                for (let t of e) x.uploadFile(i, w(t), t, a.Codex, [], n, r, {
                    entrySurface: `codex_composer`,
                    selectionMethod: `drag_drop`,
                    isTemporaryChat: !1,
                    isProjectThread: !1
                }).catch(e => {
                    if (!(e instanceof v)) throw e
                })
            },
            onDropRejected: e => T(e, n, r, a.Codex)
        });
    return (0, O.jsxs)(`div`, {
        ...s({
            className: e
        }),
        children: [t, l && (0, O.jsxs)(A, {
            children: [(0, O.jsx)(h, {}), (0, O.jsx)(`h3`, {
                children: (0, O.jsx)(c, {
                    id: `wham.fileDropZone.dragImages`,
                    defaultMessage: `Drop images to upload`
                })
            })]
        })]
    })
}
var O, k, A, j = e((() => {
    p(), E(), f(), b(), i(), C(), n(), _(), l(), t(), O = s(), k = {
        "image/png": [`.png`],
        "image/jpeg": [`.jpg`, `.jpeg`],
        "image/gif": [`.gif`],
        "image/webp": [`.webp`]
    }, A = r.div`absolute inset-0 z-50 flex flex-col items-center justify-center gap-2 after:absolute after:inset-0 after:z-[-1] after:bg-token-main-surface-primary after:opacity-80`
}));

function M(e) {
    "use forget";
    let t = (0, N.c)(2),
        {
            children: n
        } = e,
        r;
    return t[0] === n ? r = t[1] : (r = (0, P.jsx)(y, {
        children: (0, P.jsx)(D, {
            className: `contents`,
            children: n
        })
    }), t[0] = n, t[1] = r), r
}
var N, P, F = e((() => {
    N = u(), b(), j(), P = s()
}));
export {
    F as n, M as t
};
//# sourceMappingURL=39cfea03-l4y4h7tpgn34ybys.js.map
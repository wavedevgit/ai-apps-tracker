import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    BU as t,
    HU as n,
    TE as r,
    am as i,
    cm as a,
    wE as o
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    Bn as s,
    Nn as c,
    Rn as l,
    wn as u,
    zn as d
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $1 as f,
    Stn as p,
    t0 as m,
    wtn as h
} from "./conversation-small-nmt18uiom3b14vca.js";
import {
    S as g,
    x as _
} from "./82782bc9-g3liom11amtlr9kq.js";
import {
    Hh as v,
    Kh as y,
    Uh as b,
    Zh as x,
    eg as S,
    ng as C,
    nl as w,
    qh as T,
    rl as E
} from "./8b34dbc2-ojcl97ddvu2212q0.js";

function D({
    className: e,
    children: t
}) {
    let r = d(),
        a = n(),
        o = T(),
        {
            getRootProps: s,
            isDragActive: l
        } = g({
            accept: k,
            multiple: !0,
            noClick: !0,
            noKeyboard: !0,
            maxSize: p,
            onDropAccepted: e => {
                for (let t of e) v.uploadFile(o, S(t), t, i.Codex, [], r, a, {
                    entrySurface: `codex_composer`,
                    selectionMethod: `drag_drop`,
                    isTemporaryChat: !1,
                    isProjectThread: !1
                }).catch(e => {
                    if (!(e instanceof x)) throw e
                })
            },
            onDropRejected: e => w(e, r, a, i.Codex)
        });
    return (0, O.jsxs)(`div`, {
        ...s({
            className: e
        }),
        children: [t, l && (0, O.jsxs)(A, {
            children: [(0, O.jsx)(f, {}), (0, O.jsx)(`h3`, {
                children: (0, O.jsx)(c, {
                    id: `wham.fileDropZone.dragImages`,
                    defaultMessage: `Drop images to upload`
                })
            })]
        })]
    })
}
var O, k, A, j = e((() => {
    h(), E(), m(), y(), a(), C(), t(), _(), l(), r(), O = s(), k = {
        "image/png": [`.png`],
        "image/jpeg": [`.jpg`, `.jpeg`],
        "image/gif": [`.gif`],
        "image/webp": [`.webp`]
    }, A = o.div`absolute inset-0 z-50 flex flex-col items-center justify-center gap-2 after:absolute after:inset-0 after:z-[-1] after:bg-token-main-surface-primary after:opacity-80`
}));

function M(e) {
    "use forget";
    let t = (0, N.c)(2),
        {
            children: n
        } = e,
        r;
    return t[0] === n ? r = t[1] : (r = (0, P.jsx)(b, {
        children: (0, P.jsx)(D, {
            className: `contents`,
            children: n
        })
    }), t[0] = n, t[1] = r), r
}
var N, P, F = e((() => {
    N = u(), y(), j(), P = s()
}));
export {
    F as n, M as t
};
//# sourceMappingURL=39cfea03-kz96i2wlsv6ofhy0.js.map
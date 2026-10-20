import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    CE as t,
    VU as n,
    im as r,
    sm as i,
    wE as a,
    zU as o
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    Bn as s,
    Nn as c,
    Rn as l,
    wn as u,
    zn as d
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Q1 as f,
    X1 as p,
    _tn as m,
    ytn as h
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    S as g,
    x as _
} from "./82782bc9-cz4jkhg31tycbqqf.js";
import {
    $h as v,
    Gh as y,
    Hh as b,
    Kh as x,
    Vh as S,
    Xh as C,
    nl as w,
    rl as T,
    tg as E
} from "./8b34dbc2-j8rcexxiltkm8ucr.js";

function D({
    className: e,
    children: t
}) {
    let i = d(),
        a = n(),
        o = x(),
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
                for (let t of e) S.uploadFile(o, v(t), t, r.Codex, [], i, a, {
                    entrySurface: `codex_composer`,
                    selectionMethod: `drag_drop`,
                    isTemporaryChat: !1,
                    isProjectThread: !1
                }).catch(e => {
                    if (!(e instanceof C)) throw e
                })
            },
            onDropRejected: e => w(e, i, a, r.Codex)
        });
    return (0, O.jsxs)(`div`, {
        ...s({
            className: e
        }),
        children: [t, l && (0, O.jsxs)(A, {
            children: [(0, O.jsx)(p, {}), (0, O.jsx)(`h3`, {
                children: (0, O.jsx)(c, {
                    id: `wham.fileDropZone.dragImages`,
                    defaultMessage: `Drop images to upload`
                })
            })]
        })]
    })
}
var O, k, A, j = e((() => {
    h(), T(), f(), y(), i(), E(), o(), _(), l(), a(), O = s(), k = {
        "image/png": [`.png`],
        "image/jpeg": [`.jpg`, `.jpeg`],
        "image/gif": [`.gif`],
        "image/webp": [`.webp`]
    }, A = t.div`absolute inset-0 z-50 flex flex-col items-center justify-center gap-2 after:absolute after:inset-0 after:z-[-1] after:bg-token-main-surface-primary after:opacity-80`
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
//# sourceMappingURL=39cfea03-giyhc179p3xrpano.js.map
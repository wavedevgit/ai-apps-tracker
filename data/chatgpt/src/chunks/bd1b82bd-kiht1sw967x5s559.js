import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Dp as t,
    Up as n,
    c2 as r,
    d2 as i,
    grt as a,
    gst as o,
    mrt as s,
    urt as c,
    yst as l
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Bxt as u,
    EOt as d,
    Hxt as f,
    IDt as p,
    KDt as m,
    Lxt as h,
    RDt as g,
    Rxt as _,
    TDt as v,
    Uxt as y,
    XDt as b,
    ZDt as x,
    dDt as S,
    eOt as C,
    mDt as w,
    tOt as T,
    wDt as E,
    wOt as D,
    zxt as O
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    fp as k,
    hp as A,
    mp as j
} from "./8b34dbc2-bgocf3s6t6l67twq.js";

function M(e) {
    return typeof e == `string` && P.has(e)
}
var N, P, F, I = e((() => {
    l(), a(), N = `1799476725`, P = new Set([`files/search`, `files/list`, `files/read`, `files/find`, `files/context_stuff`]), F = o(() => {
        let e = s(N, {
            disableExposureLog: !0
        }).get(`variant`, `unassigned`);
        switch (e) {
            case `control`:
            case `treatment`:
                return e;
            default:
                return `unassigned`
        }
    })
}));
async function L({
    conversation: e,
    fileRef: n,
    filePreviewEnabled: r,
    gizmoId: a,
    clientThreadId: o,
    mountedLibraryFileId: s,
    librarySourceMimeType: c
}) {
    let l = d({
            file: n,
            clientThreadId: e?.id ?? o,
            mountedLibraryFileId: s,
            librarySourceMimeType: c
        }),
        p = l?.mountedLibraryFileId,
        h = l?.librarySourceMimeType ?? c,
        v = S({
            mountedLibraryFileId: p,
            sourceMimeType: h
        });
    if (!g({
            fileName: n.name,
            mimeType: h,
            mountedLibraryFileId: p
        })) {
        v == null ? i(E, {
            gizmoId: a,
            fileId: n.id,
            fileName: n.name,
            clientThreadId: o,
            mountedLibraryFileId: p,
            librarySourceMimeType: h,
            showDelete: !1
        }) : window.open(v, `_blank`, `noopener noreferrer`);
        return
    }
    let y = f(),
        x = v == null ? {} : {
            librarySourceMimeType: h,
            librarySourceUrl: v
        },
        w = C({
            fileName: n.name
        }) === `pdf`,
        T = w && M(n.api_tool_source) && F() !== `unassigned`,
        D = !1;
    if (!T) {
        let e = j();
        D = m(n) && (w ? _() && (e || A()) : e)
    }
    if (D) {
        i(O, {
            gizmoId: a,
            fileId: n.id,
            fileName: n.name,
            clientThreadId: o,
            ...b(n),
            presentationResetKey: y,
            ...x
        });
        return
    }
    if (r) {
        i(u, {
            gizmoId: a,
            fileId: n.id,
            fileName: n.name,
            clientThreadId: o,
            ...x
        });
        return
    }
    await t(n.id, n.name, {
        conversationId: o,
        gizmoId: a
    })
}
var R = e((() => {
    r(), I(), x(), k(), T(), y(), h(), D(), n(), v(), w(), p()
}));

function z(e) {
    return c(B, {
        disableExposureLog: e
    })
}
var B, V, H = e((() => {
    l(), a(), B = `3165253532`, V = o(() => z(!1)), o(() => z(!0))
}));
export {
    F as a, L as i, V as n, I as o, R as r, M as s, H as t
};
//# sourceMappingURL=bd1b82bd-kiht1sw967x5s559.js.map
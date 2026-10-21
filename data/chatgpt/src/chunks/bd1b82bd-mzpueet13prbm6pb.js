import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Dp as t,
    Up as n,
    c2 as r,
    d2 as i,
    drt as a,
    gst as o,
    prt as s,
    pst as c,
    srt as l
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    Bxt as u,
    EOt as d,
    Gxt as f,
    Hxt as p,
    IDt as m,
    KDt as h,
    RDt as g,
    TDt as _,
    Vxt as v,
    Wxt as y,
    XDt as b,
    ZDt as x,
    dDt as S,
    eOt as C,
    mDt as w,
    tOt as T,
    wDt as E,
    wOt as D,
    zxt as O
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    dp as k,
    fp as A,
    lp as j
} from "./8b34dbc2-egl8cz04n8nmlktg.js";

function M(e) {
    return typeof e == `string` && P.has(e)
}
var N, P, F, I = e((() => {
    o(), s(), N = `1799476725`, P = new Set([`files/search`, `files/list`, `files/read`, `files/find`, `files/context_stuff`]), F = c(() => {
        let e = a(N, {
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
        f = l?.mountedLibraryFileId,
        m = l?.librarySourceMimeType ?? c,
        _ = S({
            mountedLibraryFileId: f,
            sourceMimeType: m
        });
    if (!g({
            fileName: n.name,
            mimeType: m,
            mountedLibraryFileId: f
        })) {
        _ == null ? i(E, {
            gizmoId: a,
            fileId: n.id,
            fileName: n.name,
            clientThreadId: o,
            mountedLibraryFileId: f,
            librarySourceMimeType: m,
            showDelete: !1
        }) : window.open(_, `_blank`, `noopener noreferrer`);
        return
    }
    let x = y(),
        w = _ == null ? {} : {
            librarySourceMimeType: m,
            librarySourceUrl: _
        },
        T = C({
            fileName: n.name
        }) === `pdf`,
        D = T && M(n.api_tool_source) && F() !== `unassigned`,
        O = !1;
    if (!D) {
        let e = k();
        O = h(n) && (T ? u() && (e || A()) : e)
    }
    if (O) {
        i(v, {
            gizmoId: a,
            fileId: n.id,
            fileName: n.name,
            clientThreadId: o,
            ...b(n),
            presentationResetKey: x,
            ...w
        });
        return
    }
    if (r) {
        i(p, {
            gizmoId: a,
            fileId: n.id,
            fileName: n.name,
            clientThreadId: o,
            ...w
        });
        return
    }
    await t(n.id, n.name, {
        conversationId: o,
        gizmoId: a
    })
}
var R = e((() => {
    r(), I(), x(), j(), T(), f(), O(), D(), n(), _(), w(), m()
}));

function z(e) {
    return l(B, {
        disableExposureLog: e
    })
}
var B, V, H = e((() => {
    o(), s(), B = `3165253532`, V = c(() => z(!1)), c(() => z(!0))
}));
export {
    F as a, L as i, V as n, I as o, R as r, M as s, H as t
};
//# sourceMappingURL=bd1b82bd-mzpueet13prbm6pb.js.map
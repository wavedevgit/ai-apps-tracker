import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Cp as t,
    O0 as n,
    Sot as r,
    T0 as i,
    _nt as a,
    pnt as o,
    sp as s,
    ynt as c,
    yot as l
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $Dt as u,
    Bxt as d,
    CDt as f,
    COt as p,
    FDt as m,
    GDt as h,
    LDt as g,
    Rxt as _,
    TOt as v,
    Uxt as y,
    Vxt as b,
    Wxt as x,
    XDt as S,
    YDt as C,
    eOt as w,
    pDt as T,
    uDt as E,
    wDt as D,
    zxt as O
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    cp as k,
    dp as A,
    up as j
} from "./8b34dbc2-gf9wnwcahty27ylx.js";

function M(e) {
    return typeof e == `string` && P.has(e)
}
var N, P, F, I = e((() => {
    r(), c(), N = `1799476725`, P = new Set([`files/search`, `files/list`, `files/read`, `files/find`, `files/context_stuff`]), F = l(() => {
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
    fileRef: t,
    filePreviewEnabled: r,
    gizmoId: i,
    clientThreadId: a,
    mountedLibraryFileId: o,
    librarySourceMimeType: c
}) {
    let l = v({
            file: t,
            clientThreadId: e?.id ?? a,
            mountedLibraryFileId: o,
            librarySourceMimeType: c
        }),
        p = l?.mountedLibraryFileId,
        m = l?.librarySourceMimeType ?? c,
        _ = E({
            mountedLibraryFileId: p,
            sourceMimeType: m
        });
    if (!g({
            fileName: t.name,
            mimeType: m,
            mountedLibraryFileId: p
        })) {
        _ == null ? n(f, {
            gizmoId: i,
            fileId: t.id,
            fileName: t.name,
            clientThreadId: a,
            mountedLibraryFileId: p,
            librarySourceMimeType: m,
            showDelete: !1
        }) : window.open(_, `_blank`, `noopener noreferrer`);
        return
    }
    let x = y(),
        S = _ == null ? {} : {
            librarySourceMimeType: m,
            librarySourceUrl: _
        },
        w = u({
            fileName: t.name
        }) === `pdf`,
        T = w && M(t.api_tool_source) && F() !== `unassigned`,
        D = !1;
    if (!T) {
        let e = j();
        D = h(t) && (w ? O() && (e || A()) : e)
    }
    if (D) {
        n(d, {
            gizmoId: i,
            fileId: t.id,
            fileName: t.name,
            clientThreadId: a,
            ...C(t),
            presentationResetKey: x,
            ...S
        });
        return
    }
    if (r) {
        n(b, {
            gizmoId: i,
            fileId: t.id,
            fileName: t.name,
            clientThreadId: a,
            ...S
        });
        return
    }
    await s(t.id, t.name, {
        conversationId: a,
        gizmoId: i
    })
}
var R = e((() => {
    i(), I(), S(), k(), w(), x(), _(), p(), t(), D(), T(), m()
}));

function z(e) {
    return o(B, {
        disableExposureLog: e
    })
}
var B, V, H = e((() => {
    r(), c(), B = `3165253532`, V = l(() => z(!1)), l(() => z(!0))
}));
export {
    F as a, L as i, V as n, I as o, R as r, M as s, H as t
};
//# sourceMappingURL=bd1b82bd-lz9rgl0iva9somab.js.map
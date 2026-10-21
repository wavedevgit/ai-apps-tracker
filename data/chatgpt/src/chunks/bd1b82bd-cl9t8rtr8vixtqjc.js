import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $0 as t,
    $nt as n,
    Ep as r,
    Hp as i,
    Ynt as a,
    ist as o,
    n2 as s,
    trt as c,
    tst as l
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    $Dt as u,
    GDt as d,
    Jxt as f,
    Kxt as p,
    MDt as m,
    NOt as h,
    Qxt as g,
    UDt as _,
    Yxt as v,
    Zxt as y,
    cOt as b,
    iOt as x,
    jDt as S,
    jOt as C,
    qxt as w,
    rOt as T,
    sOt as E,
    vDt as D,
    xDt as O
} from "./conversation-small-nmt18uiom3b14vca.js";
import {
    dp as k,
    fp as A,
    lp as j
} from "./8b34dbc2-ojcl97ddvu2212q0.js";

function M(e) {
    return typeof e == `string` && P.has(e)
}
var N, P, F, I = e((() => {
    o(), c(), N = `1799476725`, P = new Set([`files/search`, `files/list`, `files/read`, `files/find`, `files/context_stuff`]), F = l(() => {
        let e = n(N, {
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
    filePreviewEnabled: n,
    gizmoId: i,
    clientThreadId: a,
    mountedLibraryFileId: o,
    librarySourceMimeType: c
}) {
    let l = h({
            file: t,
            clientThreadId: e?.id ?? a,
            mountedLibraryFileId: o,
            librarySourceMimeType: c
        }),
        p = l?.mountedLibraryFileId,
        m = l?.librarySourceMimeType ?? c,
        g = D({
            mountedLibraryFileId: p,
            sourceMimeType: m
        });
    if (!d({
            fileName: t.name,
            mimeType: m,
            mountedLibraryFileId: p
        })) {
        g == null ? s(S, {
            gizmoId: i,
            fileId: t.id,
            fileName: t.name,
            clientThreadId: a,
            mountedLibraryFileId: p,
            librarySourceMimeType: m,
            showDelete: !1
        }) : window.open(g, `_blank`, `noopener noreferrer`);
        return
    }
    let _ = y(),
        b = g == null ? {} : {
            librarySourceMimeType: m,
            librarySourceUrl: g
        },
        x = E({
            fileName: t.name
        }) === `pdf`,
        C = x && M(t.api_tool_source) && F() !== `unassigned`,
        O = !1;
    if (!C) {
        let e = k();
        O = u(t) && (x ? w() && (e || A()) : e)
    }
    if (O) {
        s(f, {
            gizmoId: i,
            fileId: t.id,
            fileName: t.name,
            clientThreadId: a,
            ...T(t),
            presentationResetKey: _,
            ...b
        });
        return
    }
    if (n) {
        s(v, {
            gizmoId: i,
            fileId: t.id,
            fileName: t.name,
            clientThreadId: a,
            ...b
        });
        return
    }
    await r(t.id, t.name, {
        conversationId: a,
        gizmoId: i
    })
}
var R = e((() => {
    t(), I(), x(), j(), b(), g(), p(), C(), i(), m(), O(), _()
}));

function z(e) {
    return a(B, {
        disableExposureLog: e
    })
}
var B, V, H = e((() => {
    o(), c(), B = `3165253532`, V = l(() => z(!1)), l(() => z(!0))
}));
export {
    F as a, L as i, V as n, I as o, R as r, M as s, H as t
};
//# sourceMappingURL=bd1b82bd-cl9t8rtr8vixtqjc.js.map
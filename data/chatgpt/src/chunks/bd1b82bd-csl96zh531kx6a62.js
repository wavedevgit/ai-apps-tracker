import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Crt as t,
    Cst as n,
    Dp as r,
    Est as i,
    Up as a,
    _rt as o,
    c2 as s,
    d2 as c,
    xrt as l
} from "./4813494d-mdvd4786a87166cc.js";
import {
    $Dt as u,
    Bxt as d,
    CDt as f,
    Fxt as p,
    IDt as m,
    Ixt as h,
    JDt as g,
    Lxt as _,
    PDt as v,
    QDt as y,
    Rxt as b,
    SDt as x,
    SOt as S,
    Vxt as C,
    WDt as w,
    YDt as T,
    fDt as E,
    lDt as D,
    wOt as O
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    fp as k,
    hp as A,
    mp as j
} from "./8b34dbc2-lmwubajnld74ksfm.js";

function M(e) {
    return typeof e == `string` && P.has(e)
}
var N, P, F, I = e((() => {
    i(), t(), N = `1799476725`, P = new Set([`files/search`, `files/list`, `files/read`, `files/find`, `files/context_stuff`]), F = n(() => {
        let e = l(N, {
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
    librarySourceMimeType: s
}) {
    let l = O({
            file: t,
            clientThreadId: e?.id ?? a,
            mountedLibraryFileId: o,
            librarySourceMimeType: s
        }),
        u = l?.mountedLibraryFileId,
        f = l?.librarySourceMimeType ?? s,
        p = D({
            mountedLibraryFileId: u,
            sourceMimeType: f
        });
    if (!m({
            fileName: t.name,
            mimeType: f,
            mountedLibraryFileId: u
        })) {
        p == null ? c(x, {
            gizmoId: i,
            fileId: t.id,
            fileName: t.name,
            clientThreadId: a,
            mountedLibraryFileId: u,
            librarySourceMimeType: f,
            showDelete: !1
        }) : window.open(p, `_blank`, `noopener noreferrer`);
        return
    }
    let v = d(),
        S = p == null ? {} : {
            librarySourceMimeType: f,
            librarySourceUrl: p
        },
        C = y({
            fileName: t.name
        }) === `pdf`,
        T = C && M(t.api_tool_source) && F() !== `unassigned`,
        E = !1;
    if (!T) {
        let e = j();
        E = w(t) && (C ? h() && (e || A()) : e)
    }
    if (E) {
        c(_, {
            gizmoId: i,
            fileId: t.id,
            fileName: t.name,
            clientThreadId: a,
            ...g(t),
            presentationResetKey: v,
            ...S
        });
        return
    }
    if (n) {
        c(b, {
            gizmoId: i,
            fileId: t.id,
            fileName: t.name,
            clientThreadId: a,
            ...S
        });
        return
    }
    await r(t.id, t.name, {
        conversationId: a,
        gizmoId: i
    })
}
var R = e((() => {
    s(), I(), T(), k(), u(), C(), p(), S(), a(), f(), E(), v()
}));

function z(e) {
    return o(B, {
        disableExposureLog: e
    })
}
var B, V, H = e((() => {
    i(), t(), B = `3165253532`, V = n(() => z(!1)), n(() => z(!0))
}));
export {
    F as a, L as i, V as n, I as o, R as r, M as s, H as t
};
//# sourceMappingURL=bd1b82bd-csl96zh531kx6a62.js.map
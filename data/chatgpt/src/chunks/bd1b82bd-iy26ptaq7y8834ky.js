import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $ot as t,
    Ep as n,
    Hp as r,
    Jnt as i,
    Q0 as a,
    Wnt as o,
    Xnt as s,
    Xot as c,
    t2 as l
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    AOt as u,
    BDt as d,
    Gxt as f,
    HDt as p,
    Jxt as m,
    Kxt as h,
    ODt as g,
    OOt as _,
    Uxt as v,
    Wxt as y,
    XDt as b,
    Yxt as x,
    aOt as S,
    eOt as C,
    hDt as w,
    iOt as T,
    kDt as E,
    tOt as D,
    vDt as O
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    dp as k,
    fp as A,
    lp as j
} from "./8b34dbc2-k1zgxrtsww83602u.js";

function M(e) {
    return typeof e == `string` && P.has(e)
}
var N, P, F, I = e((() => {
    t(), s(), N = `1799476725`, P = new Set([`files/search`, `files/list`, `files/read`, `files/find`, `files/context_stuff`]), F = c(() => {
        let e = i(N, {
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
    librarySourceMimeType: s
}) {
    let c = u({
            file: t,
            clientThreadId: e?.id ?? a,
            mountedLibraryFileId: o,
            librarySourceMimeType: s
        }),
        d = c?.mountedLibraryFileId,
        _ = c?.librarySourceMimeType ?? s,
        v = w({
            mountedLibraryFileId: d,
            sourceMimeType: _
        });
    if (!p({
            fileName: t.name,
            mimeType: _,
            mountedLibraryFileId: d
        })) {
        v == null ? l(g, {
            gizmoId: i,
            fileId: t.id,
            fileName: t.name,
            clientThreadId: a,
            mountedLibraryFileId: d,
            librarySourceMimeType: _,
            showDelete: !1
        }) : window.open(v, `_blank`, `noopener noreferrer`);
        return
    }
    let x = m(),
        S = v == null ? {} : {
            librarySourceMimeType: _,
            librarySourceUrl: v
        },
        E = T({
            fileName: t.name
        }) === `pdf`,
        D = E && M(t.api_tool_source) && F() !== `unassigned`,
        O = !1;
    if (!D) {
        let e = k();
        O = b(t) && (E ? y() && (e || A()) : e)
    }
    if (O) {
        l(f, {
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
        l(h, {
            gizmoId: i,
            fileId: t.id,
            fileName: t.name,
            clientThreadId: a,
            ...S
        });
        return
    }
    await n(t.id, t.name, {
        conversationId: a,
        gizmoId: i
    })
}
var R = e((() => {
    a(), I(), D(), j(), S(), x(), v(), _(), r(), E(), O(), d()
}));

function z(e) {
    return o(B, {
        disableExposureLog: e
    })
}
var B, V, H = e((() => {
    t(), s(), B = `3165253532`, V = c(() => z(!1)), c(() => z(!0))
}));
export {
    F as a, L as i, V as n, I as o, R as r, M as s, H as t
};
//# sourceMappingURL=bd1b82bd-iy26ptaq7y8834ky.js.map
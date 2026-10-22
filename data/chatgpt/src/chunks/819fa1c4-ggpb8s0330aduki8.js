import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    GJ as t,
    QZ as n,
    Ttt as r,
    eY as i,
    ktt as a,
    sQ as o
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    CLn as s,
    COt as c,
    ELn as l,
    VOt as u,
    gLn as d,
    hLn as f,
    lLn as p,
    mDt as m,
    pDt as h,
    vOt as g,
    wOt as _,
    yLn as v,
    zOt as y
} from "./conversation-small-i79e9c315w50am5f.js";

function b(e) {
    if (typeof e == `string`) return e.startsWith(`file-library:`) ? e.slice(13) : e
}

function x(e) {
    return u(b(e.id)) || u(b(e.library_file_id))
}

function S(e) {
    return [e.id, e.library_file_id].some(e => typeof e == `string` && e.startsWith(`file-library:file-library:`))
}

function C(e) {
    for (let t of [e.library_file_id, e.id]) {
        let e = b(t),
            n = e?.startsWith(`external-`) === !0;
        if (s(e) || n) return e
    }
}

function w(e, t, n, r) {
    let i = t?.metadata?.attachments,
        a = Array.isArray(i) ? i : [];
    if (r == null) return a;
    let s = t => typeof t == `object` && !!t && !Array.isArray(t) && `id` in t && t.id === e.id;
    for (let e = n.length - 1; e >= 0; --e) {
        let t = n[e].messages;
        for (let e = t.length - 1; e >= 0; --e) {
            let n = t[e],
                i = n.metadata?.attachments;
            if (!r.has(n.id) || !o(n) || n.metadata?.is_contextual_retry_user_message || !Array.isArray(i)) continue;
            let c = i.filter(s);
            if (c.length > 0) return [...a.filter(s), ...c]
        }
    }
    return a
}

function T(e, n) {
    if (e == null) return {
        turns: []
    };
    let i = n?.id;
    if (n?.author?.role !== r.Assistant || typeof i != `string` || !t.hasNode(e, i)) return {
        turns: t.getConversationTurns(e)
    };
    let a = t.getTree(e),
        o = new Set,
        s = a.getNodeIfExists(i);
    for (; s != null && s.id !== a.rootId;) {
        if (o.has(s.id)) return {
            turns: []
        };
        o.add(s.id), s = a.getNodeIfExists(s.parentId)
    }
    return s == null ? {
        turns: []
    } : {
        turns: t.getConversationTurnsForLeaf(e, i),
        ancestorMessageIds: o
    }
}

function E(e, t, n) {
    let r = C(e),
        i = e.cloud_doc_url ?? e.extra?.cloud_doc_url ?? e.url,
        a = typeof i == `string` ? i : void 0,
        o = c(a),
        s = o != null && !v(o),
        u = Array.isArray(n) ? n : void 0,
        p = r == null && u?.some(t => typeof t == `object` && !!t && !Array.isArray(t) && t.id === e.id && (t.library_provider === `google_drive` || t.library_provider === `box` || t.library_provider === `dropbox` || t.library_provider === `native` || typeof t.mounted_library_file_id == `string` && d(t.mounted_library_file_id) != null || t.library_provider == null && t.mounted_library_file_id == null)) === !0,
        m = x(e) || S(e) || e.source !== `my_files` && e.source !== `agent` || r == null && (s || !v(o) && p),
        _ = r == null && !m ? u?.find(t => typeof t == `object` && !!t && t.id === e.id && (t.library_provider == null || t.library_provider === f(t.mounted_library_file_id)) && typeof t.mounted_library_file_id == `string` && l(t.mounted_library_file_id)) : void 0,
        y = r ?? _?.mounted_library_file_id;
    return {
        authoritativeMountedLibraryFileId: y,
        excludeSharePoint: m,
        allowHistoricalSharePoint: !m && y == null && a != null && h({
            mountedLibraryFileId: g(t, e.id)?.mounted_library_file_id,
            sourceUrl: a
        }) != null
    }
}

function D(e, t) {
    return t.authoritativeMountedLibraryFileId != null && e !== t.authoritativeMountedLibraryFileId ? !1 : !l(e) || !t.excludeSharePoint && (t.allowHistoricalSharePoint === !0 || t.authoritativeMountedLibraryFileId === e)
}
var O = e((() => {
    a(), _(), m(), p(), y(), i(), n()
}));
export {
    x as a, S as i, T as n, O as o, E as r, D as s, w as t
};
//# sourceMappingURL=819fa1c4-ggpb8s0330aduki8.js.map
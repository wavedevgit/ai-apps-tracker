import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    GJ as t,
    Mtt as n,
    Ott as r,
    QZ as i,
    eY as a,
    sQ as o
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    BLn as s,
    COt as c,
    ELn as l,
    ILn as u,
    MLn as d,
    NLn as f,
    ULn as p,
    VOt as m,
    mDt as h,
    pDt as g,
    vOt as _,
    wOt as v,
    zOt as y
} from "./conversation-small-dwpaie1hln28efxb.js";

function b(e) {
    if (typeof e == `string`) return e.startsWith(`file-library:`) ? e.slice(13) : e
}

function x(e) {
    return m(b(e.id)) || m(b(e.library_file_id))
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
        s = o != null && !u(o),
        l = Array.isArray(n) ? n : void 0,
        m = r == null && l?.some(t => typeof t == `object` && !!t && !Array.isArray(t) && t.id === e.id && (t.library_provider === `google_drive` || t.library_provider === `box` || t.library_provider === `dropbox` || t.library_provider === `native` || typeof t.mounted_library_file_id == `string` && f(t.mounted_library_file_id) != null || t.library_provider == null && t.mounted_library_file_id == null)) === !0,
        h = x(e) || S(e) || e.source !== `my_files` && e.source !== `agent` || r == null && (s || !u(o) && m),
        v = r == null && !h ? l?.find(t => typeof t == `object` && !!t && t.id === e.id && (t.library_provider == null || t.library_provider === d(t.mounted_library_file_id)) && typeof t.mounted_library_file_id == `string` && p(t.mounted_library_file_id)) : void 0,
        y = r ?? v?.mounted_library_file_id;
    return {
        authoritativeMountedLibraryFileId: y,
        excludeSharePoint: h,
        allowHistoricalSharePoint: !h && y == null && a != null && g({
            mountedLibraryFileId: _(t, e.id)?.mounted_library_file_id,
            sourceUrl: a
        }) != null
    }
}

function D(e, t) {
    return t.authoritativeMountedLibraryFileId != null && e !== t.authoritativeMountedLibraryFileId ? !1 : !p(e) || !t.excludeSharePoint && (t.allowHistoricalSharePoint === !0 || t.authoritativeMountedLibraryFileId === e)
}
var O = e((() => {
    n(), v(), h(), l(), y(), a(), i()
}));
export {
    x as a, S as i, T as n, O as o, E as r, D as s, w as t
};
//# sourceMappingURL=819fa1c4-cnl2kz6inrx1gyt7.js.map
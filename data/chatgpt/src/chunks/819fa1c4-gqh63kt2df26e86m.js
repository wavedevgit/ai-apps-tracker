import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Dtt as t,
    GJ as n,
    QZ as r,
    eY as i,
    jtt as a,
    sQ as o
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    BLn as s,
    DOt as c,
    ELn as l,
    EOt as u,
    HOt as d,
    ILn as f,
    MLn as p,
    NLn as m,
    ULn as h,
    WOt as g,
    _Dt as _,
    gDt as v,
    xOt as y
} from "./conversation-small-m08q51xmfe7gjq3d.js";

function b(e) {
    if (typeof e == `string`) return e.startsWith(`file-library:`) ? e.slice(13) : e
}

function x(e) {
    return g(b(e.id)) || g(b(e.library_file_id))
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

function T(e, r) {
    if (e == null) return {
        turns: []
    };
    let i = r?.id;
    if (r?.author?.role !== t.Assistant || typeof i != `string` || !n.hasNode(e, i)) return {
        turns: n.getConversationTurns(e)
    };
    let a = n.getTree(e),
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
        turns: n.getConversationTurnsForLeaf(e, i),
        ancestorMessageIds: o
    }
}

function E(e, t, n) {
    let r = C(e),
        i = e.cloud_doc_url ?? e.extra?.cloud_doc_url ?? e.url,
        a = typeof i == `string` ? i : void 0,
        o = u(a),
        s = o != null && !f(o),
        c = Array.isArray(n) ? n : void 0,
        l = r == null && c?.some(t => typeof t == `object` && !!t && !Array.isArray(t) && t.id === e.id && (t.library_provider === `google_drive` || t.library_provider === `box` || t.library_provider === `dropbox` || t.library_provider === `native` || typeof t.mounted_library_file_id == `string` && m(t.mounted_library_file_id) != null || t.library_provider == null && t.mounted_library_file_id == null)) === !0,
        d = x(e) || S(e) || e.source !== `my_files` && e.source !== `agent` || r == null && (s || !f(o) && l),
        g = r == null && !d ? c?.find(t => typeof t == `object` && !!t && t.id === e.id && (t.library_provider == null || t.library_provider === p(t.mounted_library_file_id)) && typeof t.mounted_library_file_id == `string` && h(t.mounted_library_file_id)) : void 0,
        _ = r ?? g?.mounted_library_file_id;
    return {
        authoritativeMountedLibraryFileId: _,
        excludeSharePoint: d,
        allowHistoricalSharePoint: !d && _ == null && a != null && v({
            mountedLibraryFileId: y(t, e.id)?.mounted_library_file_id,
            sourceUrl: a
        }) != null
    }
}

function D(e, t) {
    return t.authoritativeMountedLibraryFileId != null && e !== t.authoritativeMountedLibraryFileId ? !1 : !h(e) || !t.excludeSharePoint && (t.allowHistoricalSharePoint === !0 || t.authoritativeMountedLibraryFileId === e)
}
var O = e((() => {
    a(), c(), _(), l(), d(), i(), r()
}));
export {
    x as a, S as i, T as n, O as o, E as r, D as s, w as t
};
//# sourceMappingURL=819fa1c4-gqh63kt2df26e86m.js.map
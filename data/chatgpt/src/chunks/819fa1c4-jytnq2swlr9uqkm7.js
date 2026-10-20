import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    eQ as t,
    ftt as n,
    gtt as r,
    lQ as i,
    nY as a,
    qJ as o
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    DOt as s,
    GOt as c,
    JIn as l,
    OOt as u,
    SOt as d,
    UOt as f,
    VIn as p,
    ZIn as m,
    _Dt as h,
    iLn as g,
    qIn as _,
    tLn as v,
    vDt as y
} from "./conversation-small-cy5f8pl0g26s86so.js";

function b(e) {
    if (typeof e == `string`) return e.startsWith(`file-library:`) ? e.slice(13) : e
}

function x(e) {
    return c(b(e.id)) || c(b(e.library_file_id))
}

function S(e) {
    return [e.id, e.library_file_id].some(e => typeof e == `string` && e.startsWith(`file-library:file-library:`))
}

function C(e) {
    for (let t of [e.library_file_id, e.id]) {
        let e = b(t),
            n = e?.startsWith(`external-`) === !0;
        if (v(e) || n) return e
    }
}

function w(e, t, n, r) {
    let a = t?.metadata?.attachments,
        o = Array.isArray(a) ? a : [];
    if (r == null) return o;
    let s = t => typeof t == `object` && !!t && !Array.isArray(t) && `id` in t && t.id === e.id;
    for (let e = n.length - 1; e >= 0; --e) {
        let t = n[e].messages;
        for (let e = t.length - 1; e >= 0; --e) {
            let n = t[e],
                a = n.metadata?.attachments;
            if (!r.has(n.id) || !i(n) || n.metadata?.is_contextual_retry_user_message || !Array.isArray(a)) continue;
            let c = a.filter(s);
            if (c.length > 0) return [...o.filter(s), ...c]
        }
    }
    return o
}

function T(e, t) {
    if (e == null) return {
        turns: []
    };
    let r = t?.id;
    if (t?.author?.role !== n.Assistant || typeof r != `string` || !o.hasNode(e, r)) return {
        turns: o.getConversationTurns(e)
    };
    let i = o.getTree(e),
        a = new Set,
        s = i.getNodeIfExists(r);
    for (; s != null && s.id !== i.rootId;) {
        if (a.has(s.id)) return {
            turns: []
        };
        a.add(s.id), s = i.getNodeIfExists(s.parentId)
    }
    return s == null ? {
        turns: []
    } : {
        turns: o.getConversationTurnsForLeaf(e, r),
        ancestorMessageIds: a
    }
}

function E(e, t, n) {
    let r = C(e),
        i = e.cloud_doc_url ?? e.extra?.cloud_doc_url ?? e.url,
        a = typeof i == `string` ? i : void 0,
        o = s(a),
        c = o != null && !m(o),
        u = Array.isArray(n) ? n : void 0,
        f = r == null && u?.some(t => typeof t == `object` && !!t && !Array.isArray(t) && t.id === e.id && (t.library_provider === `google_drive` || t.library_provider === `box` || t.library_provider === `dropbox` || t.library_provider === `native` || typeof t.mounted_library_file_id == `string` && l(t.mounted_library_file_id) != null || t.library_provider == null && t.mounted_library_file_id == null)) === !0,
        p = x(e) || S(e) || e.source !== `my_files` && e.source !== `agent` || r == null && (c || !m(o) && f),
        v = r == null && !p ? u?.find(t => typeof t == `object` && !!t && t.id === e.id && (t.library_provider == null || t.library_provider === _(t.mounted_library_file_id)) && typeof t.mounted_library_file_id == `string` && g(t.mounted_library_file_id)) : void 0,
        y = r ?? v?.mounted_library_file_id;
    return {
        authoritativeMountedLibraryFileId: y,
        excludeSharePoint: p,
        allowHistoricalSharePoint: !p && y == null && a != null && h({
            mountedLibraryFileId: d(t, e.id)?.mounted_library_file_id,
            sourceUrl: a
        }) != null
    }
}

function D(e, t) {
    return t.authoritativeMountedLibraryFileId != null && e !== t.authoritativeMountedLibraryFileId ? !1 : !g(e) || !t.excludeSharePoint && (t.allowHistoricalSharePoint === !0 || t.authoritativeMountedLibraryFileId === e)
}
var O = e((() => {
    r(), u(), y(), p(), f(), a(), t()
}));
export {
    x as a, S as i, T as n, O as o, E as r, D as s, w as t
};
//# sourceMappingURL=819fa1c4-jytnq2swlr9uqkm7.js.map
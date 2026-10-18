import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AJ as t,
    Fet as n,
    LZ as r,
    OZ as i,
    xJ as a,
    zet as o
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    BOt as s,
    COt as c,
    FIn as l,
    IIn as u,
    KIn as d,
    ROt as f,
    SOt as p,
    UIn as m,
    _Ot as h,
    fDt as g,
    kIn as _,
    pDt as v,
    zIn as y
} from "./conversation-small-fym1zmu9zimymmm1.js";

function b(e) {
    if (typeof e == `string`) return e.startsWith(`file-library:`) ? e.slice(13) : e
}

function x(e) {
    return s(b(e.id)) || s(b(e.library_file_id))
}

function S(e) {
    return [e.id, e.library_file_id].some(e => typeof e == `string` && e.startsWith(`file-library:file-library:`))
}

function C(e) {
    for (let t of [e.library_file_id, e.id]) {
        let e = b(t),
            n = e?.startsWith(`external-`) === !0;
        if (m(e) || n) return e
    }
}

function w(e, t, n, i) {
    let a = t?.metadata?.attachments,
        o = Array.isArray(a) ? a : [];
    if (i == null) return o;
    let s = t => typeof t == `object` && !!t && !Array.isArray(t) && `id` in t && t.id === e.id;
    for (let e = n.length - 1; e >= 0; --e) {
        let t = n[e].messages;
        for (let e = t.length - 1; e >= 0; --e) {
            let n = t[e],
                a = n.metadata?.attachments;
            if (!i.has(n.id) || !r(n) || n.metadata?.is_contextual_retry_user_message || !Array.isArray(a)) continue;
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
    if (t?.author?.role !== n.Assistant || typeof r != `string` || !a.hasNode(e, r)) return {
        turns: a.getConversationTurns(e)
    };
    let i = a.getTree(e),
        o = new Set,
        s = i.getNodeIfExists(r);
    for (; s != null && s.id !== i.rootId;) {
        if (o.has(s.id)) return {
            turns: []
        };
        o.add(s.id), s = i.getNodeIfExists(s.parentId)
    }
    return s == null ? {
        turns: []
    } : {
        turns: a.getConversationTurnsForLeaf(e, r),
        ancestorMessageIds: o
    }
}

function E(e, t, n) {
    let r = C(e),
        i = e.cloud_doc_url ?? e.extra?.cloud_doc_url ?? e.url,
        a = typeof i == `string` ? i : void 0,
        o = p(a),
        s = o != null && !y(o),
        c = Array.isArray(n) ? n : void 0,
        f = r == null && c?.some(t => typeof t == `object` && !!t && !Array.isArray(t) && t.id === e.id && (t.library_provider === `google_drive` || t.library_provider === `box` || t.library_provider === `dropbox` || t.library_provider === `native` || typeof t.mounted_library_file_id == `string` && u(t.mounted_library_file_id) != null || t.library_provider == null && t.mounted_library_file_id == null)) === !0,
        m = x(e) || S(e) || e.source !== `my_files` && e.source !== `agent` || r == null && (s || !y(o) && f),
        _ = r == null && !m ? c?.find(t => typeof t == `object` && !!t && t.id === e.id && (t.library_provider == null || t.library_provider === l(t.mounted_library_file_id)) && typeof t.mounted_library_file_id == `string` && d(t.mounted_library_file_id)) : void 0,
        v = r ?? _?.mounted_library_file_id;
    return {
        authoritativeMountedLibraryFileId: v,
        excludeSharePoint: m,
        allowHistoricalSharePoint: !m && v == null && a != null && g({
            mountedLibraryFileId: h(t, e.id)?.mounted_library_file_id,
            sourceUrl: a
        }) != null
    }
}

function D(e, t) {
    return t.authoritativeMountedLibraryFileId != null && e !== t.authoritativeMountedLibraryFileId ? !1 : !d(e) || !t.excludeSharePoint && (t.allowHistoricalSharePoint === !0 || t.authoritativeMountedLibraryFileId === e)
}
var O = e((() => {
    o(), c(), v(), _(), f(), t(), i()
}));
export {
    x as a, S as i, T as n, O as o, E as r, D as s, w as t
};
//# sourceMappingURL=819fa1c4-rsqlkpjm5fwvcukn.js.map
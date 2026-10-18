import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Qit as n,
    Qp as r,
    Srt as i,
    a7 as a,
    am as o,
    i1 as s,
    iat as c,
    l7 as l,
    nm as u,
    o1 as d,
    u1 as f
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    DEt as p,
    EEt as m,
    GOt as h,
    KOt as g,
    NOt as _,
    ROt as v,
    TEt as y,
    UOt as b,
    VOt as x,
    XOt as S,
    c9t as C,
    gPt as w,
    qHt as T,
    qOt as E,
    tUt as D,
    v9t as O,
    yPt as k
} from "./conversation-small-fym1zmu9zimymmm1.js";
var A = t({
    LIBRARY_SHARE_FILE_ID_QUERY_PARAM: () => L,
    getLibraryShareLink: () => j,
    resolveLibraryShareLinkArtifact: () => I
});

function j({
    libraryFileId: e,
    resourceKind: t,
    sharedDirectoryId: n,
    workspaceId: r
}) {
    let i = o(n) ? n : null,
        a = t === `folder` ? b(i == null ? e : S(i)?.rootDirectoryId ?? e, e) : i,
        s = a == null ? `/library` : _(`/library`, a),
        c = t === `file` && E(e) && (a == null || s.startsWith(`/library/share/`)),
        l = new URL(c ? h(`/library`, e, a == null ? null : s) : s, window.location.origin);
    return t === `file` && !c && l.searchParams.set(L, e), l.searchParams.set(`account_id`, r ?? `personal`), l
}
async function M(e, t) {
    let n = null;
    do {
        t.throwIfAborted();
        let r = await C({
            cursor: n,
            includeHiddenFiles: !0,
            includeSavedEntities: !0,
            limit: R
        });
        t.throwIfAborted();
        let i = r.items.find(t => t.id === e);
        if (i != null) {
            let e = w({
                ...i,
                kind: `file`,
                name: i.file_name,
                parent_directory_id: i.directory_id ?? null
            });
            if (e != null) return {
                artifact: e
            }
        }
        if (r.cursor == null || r.cursor === n) break;
        n = r.cursor
    } while (n != null);
    throw new z(`Library file ${e} was not found.`)
}
async function N(e, t, n) {
    let r = null;
    do {
        t.throwIfAborted();
        let i = await T({
            parentDirectoryId: n,
            cursor: r,
            includeHiddenFiles: !0
        });
        t.throwIfAborted();
        let a = i.items.find(t => t.kind === `file` && t.id === e);
        if (a != null) {
            let t = w(a);
            if (t != null) return {
                artifact: t,
                sharedLibraryFileId: e
            }
        }
        if (i.cursor == null || i.cursor === r) break;
        r = i.cursor
    } while (r != null);
    throw new z(`Shared Library file ${e} was not found.`)
}

function P(e, t) {
    return typeof e == `object` && !!e && !Array.isArray(e) && `kind` in e && e.kind === `file` && `id` in e && e.id === t && `name` in e && typeof e.name == `string` && `is_shared` in e && e.is_shared === !0 && `parent_directory_id` in e && e.parent_directory_id === `library:collection:shared-with-me`
}
async function F(e, t) {
    let n = s() ?? d(),
        r = n?.normalizedAccountUserId;
    if (n == null || r == null) throw Error(`Shared Library read account is unavailable.`);
    let i = {
            accountId: n.id,
            accountUserId: r,
            libraryFileId: e
        },
        o = m(i, t);
    t.throwIfAborted();
    let c = await a.safeGet(`/files/library/files/{library_file_id}/node`, {
        ...o,
        parameters: {
            path: {
                library_file_id: e
            }
        },
        skipJsonTransform: !0
    });
    t.throwIfAborted(), y(i);
    let l = await c.json();
    if (t.throwIfAborted(), y(i), !P(l, e)) throw Error(`Invalid shared Library file response.`);
    let u = w(l);
    if (u == null) throw Error(`Shared Library file ${e} could not be opened.`);
    return {
        artifact: u,
        sharedLibraryFileId: e
    }
}
async function I(e, t) {
    let i = new AbortController,
        a = () => i.abort();
    t?.aborted ? a() : t?.addEventListener(`abort`, a, {
        once: !0
    });
    try {
        let t = x(window.location.pathname).directoryId,
            a = o(t) ? [t, r] : [r],
            c = s() ?? d(),
            l = c?.normalizedAccountUserId == null ? void 0 : {
                accountId: c.id,
                accountUserId: c.normalizedAccountUserId,
                libraryFileId: e
            },
            u = a.length === 1 ? F(e, i.signal) : void 0;
        try {
            return await Promise.any([M(e, i.signal), ...a.map(t => N(e, i.signal, t)), ...u == null ? [] : [u]])
        } catch (t) {
            i.signal.throwIfAborted(), l != null && y(l);
            try {
                return await F(e, i.signal)
            } catch (e) {
                throw (t instanceof AggregateError ? t.errors.find(e => !(e instanceof z) && (!(e instanceof n) || ![403, 404].includes(e.status))) : void 0) ?? e
            }
        }
    } finally {
        t?.removeEventListener(`abort`, a), i.abort()
    }
}
var L, R, z, B = e((() => {
    O(), i(), k(), D(), v(), p(), g(), u(), f(), c(), l(), L = `file_id`, R = 100, z = class extends Error {}
}));
export {
    I as a, A as i, j as n, B as r, L as t
};
//# sourceMappingURL=ede2e481-bm1xmi401ysxjhvc.js.map
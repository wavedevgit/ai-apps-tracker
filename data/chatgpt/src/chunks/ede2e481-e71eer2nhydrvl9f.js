import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    IU as r,
    J7 as i,
    Kat as a,
    LU as o,
    Q7 as s,
    Qat as c,
    Sm as l,
    Tm as u,
    U1 as d,
    V1 as f,
    git as p,
    q1 as m,
    vm as h
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    Nn as g,
    Rn as _,
    Vn as v
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $9t as y,
    D9t as b,
    DEt as x,
    EEt as S,
    HOt as C,
    JOt as w,
    KHt as T,
    KOt as E,
    OEt as D,
    POt as O,
    Q9t as k,
    WOt as A,
    ZOt as j,
    _9t as M,
    _Pt as N,
    bPt as P,
    eUt as F,
    qOt as I,
    zOt as L
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    i as R,
    r as z
} from "./181180d3-czl42wh9nl55jb7d.js";
var B = t({
    LIBRARY_SHARE_FILE_ID_QUERY_PARAM: () => Y,
    getLibraryShareLink: () => H,
    openNativeLibrarySharing: () => V,
    resolveLibraryShareLinkArtifact: () => q
});

function V({
    libraryFileId: e,
    resourceKind: t,
    sharingEntryId: n,
    sharingCanManage: i
}) {
    if (n == null) return !1;
    if (i === !1) return !0;
    if (!y()) return !1;
    let a = f() ?? d();
    if (e != null && a != null) {
        let n = H({
            libraryFileId: e,
            resourceKind: t,
            workspaceId: a.getWorkspaceId()
        });
        n.searchParams.set(`native_sharing`, `1`), n.searchParams.set(`open_sharing`, `1`);
        let i = window.open(n.href, `_blank`);
        i != null && !i.closed ? i.opener = null : r().notify(R.nativePopupBlocked, {
            id: `native-library-sharing-popup-blocked`,
            duration: 0,
            hasCloseButton: !0,
            action: (0, J.createElement)(`a`, {
                href: n.href,
                target: `_blank`,
                rel: `noopener noreferrer`,
                className: `underline`
            }, (0, J.createElement)(g, R.nativePopupOpen))
        })
    }
    return !0
}

function H({
    libraryFileId: e,
    resourceKind: t,
    sharedDirectoryId: n,
    workspaceId: r
}) {
    let i = u(n) ? n : null,
        a = t === `folder` ? A(i == null ? e : j(i)?.rootDirectoryId ?? e, e) : i,
        o = a == null ? `/library` : O(`/library`, a),
        s = t === `file` && w(e) && (a == null || o.startsWith(`/library/share/`)),
        c = new URL(s ? E(`/library`, e, a == null ? null : o) : o, window.location.origin);
    return t === `file` && !s && c.searchParams.set(Y, e), c.searchParams.set(`account_id`, r ?? `personal`), c
}
async function U(e, t) {
    let n = null;
    do {
        t.throwIfAborted();
        let r = await M({
            cursor: n,
            includeHiddenFiles: !0,
            includeSavedEntities: !0,
            limit: X
        });
        t.throwIfAborted();
        let i = r.items.find(t => t.id === e);
        if (i != null) {
            let e = N({
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
    throw new Z(`Library file ${e} was not found.`)
}
async function W(e, t, n) {
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
            let t = N(a);
            if (t != null) return {
                artifact: t,
                sharedLibraryFileId: e
            }
        }
        if (i.cursor == null || i.cursor === r) break;
        r = i.cursor
    } while (r != null);
    throw new Z(`Shared Library file ${e} was not found.`)
}

function G(e, t) {
    return typeof e == `object` && !!e && !Array.isArray(e) && `kind` in e && e.kind === `file` && `id` in e && e.id === t && (!(`canonical_file_id` in e) || e.canonical_file_id == null || typeof e.canonical_file_id == `string` && !/^libfile_fde[123]_/.test(t) && w(e.canonical_file_id) && /^libfile_fde[123]_/.test(e.canonical_file_id)) && `name` in e && typeof e.name == `string` && `is_shared` in e && e.is_shared === !0 && `parent_directory_id` in e && e.parent_directory_id === `library:collection:shared-with-me`
}
async function K(e, t) {
    let n = f() ?? d(),
        r = n?.normalizedAccountUserId;
    if (n == null || r == null) throw Error(`Shared Library read account is unavailable.`);
    let a = {
            accountId: n.id,
            accountUserId: r,
            libraryFileId: e
        },
        o = x(a, t);
    t.throwIfAborted();
    let s = await i.safeGet(`/files/library/files/{library_file_id}/node`, {
        ...o,
        parameters: {
            path: {
                library_file_id: e
            }
        },
        skipJsonTransform: !0
    });
    t.throwIfAborted(), S(a);
    let c = await s.json();
    if (t.throwIfAborted(), S(a), !G(c, e)) throw Error(`Invalid shared Library file response.`);
    let l = c.canonical_file_id == null ? c : {
            ...c,
            id: c.canonical_file_id
        },
        u = N(l);
    if (u == null) throw Error(`Shared Library file ${e} could not be opened.`);
    return {
        artifact: u,
        sharedLibraryFileId: l.id
    }
}
async function q(e, t) {
    let n = new AbortController,
        r = () => n.abort();
    t?.aborted ? r() : t?.addEventListener(`abort`, r, {
        once: !0
    });
    try {
        let t = C(window.location.pathname).directoryId,
            r = u(t) ? [t, h] : [h],
            i = f() ?? d(),
            o = i?.normalizedAccountUserId == null ? void 0 : {
                accountId: i.id,
                accountUserId: i.normalizedAccountUserId,
                libraryFileId: e
            },
            s = r.length === 1 ? K(e, n.signal) : void 0;
        try {
            return await Promise.any([U(e, n.signal), ...r.map(t => W(e, n.signal, t)), ...s == null ? [] : [s]])
        } catch (t) {
            n.signal.throwIfAborted(), o != null && S(o);
            try {
                return await K(e, n.signal)
            } catch (e) {
                throw (t instanceof AggregateError ? t.errors.find(e => !(e instanceof Z) && (!(e instanceof a) || ![403, 404].includes(e.status))) : void 0) ?? e
            }
        }
    } finally {
        t?.removeEventListener(`abort`, r), n.abort()
    }
}
var J, Y, X, Z, Q = e((() => {
    b(), p(), P(), F(), L(), D(), I(), l(), m(), c(), s(), o(), z(), J = n(v()), _(), k(), Y = `file_id`, X = 100, Z = class extends Error {}
}));
export {
    V as a, B as i, H as n, q as o, Q as r, Y as t
};
//# sourceMappingURL=ede2e481-e71eer2nhydrvl9f.js.map
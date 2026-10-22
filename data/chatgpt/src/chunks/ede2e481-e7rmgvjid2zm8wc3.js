import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as r,
    IU as i,
    LU as a,
    Sm as o,
    Tm as s,
    U1 as c,
    V1 as l,
    Y7 as u,
    Yat as d,
    q1 as f,
    tot as p,
    vm as m,
    yit as h
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    Nn as g,
    Rn as _,
    Vn as v
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    A9t as y,
    AEt as b,
    B9t as x,
    CPt as S,
    GOt as C,
    HOt as w,
    LOt as T,
    XHt as E,
    XOt as D,
    YOt as O,
    ZOt as k,
    bPt as A,
    den as j,
    ekt as M,
    fen as N,
    iUt as P,
    jEt as F,
    kEt as I,
    qOt as L
} from "./conversation-small-fh0oqifngkf5rvl1.js";
import {
    i as R,
    r as z
} from "./181180d3-kewby7qvvamjt1qt.js";
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
    sharingCanManage: r
}) {
    if (n == null) return !1;
    if (r === !1) return !0;
    if (!N()) return !1;
    let a = l() ?? c();
    if (e != null && a != null) {
        let n = H({
            libraryFileId: e,
            resourceKind: t,
            workspaceId: a.getWorkspaceId()
        });
        n.searchParams.set(`native_sharing`, `1`), n.searchParams.set(`open_sharing`, `1`);
        let r = window.open(n.href, `_blank`);
        r != null && !r.closed ? r.opener = null : i().notify(R.nativePopupBlocked, {
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
    let i = s(n) ? n : null,
        a = t === `folder` ? L(i == null ? e : M(i)?.rootDirectoryId ?? e, e) : i,
        o = a == null ? `/library` : T(`/library`, a),
        c = t === `file` && k(e) && (a == null || o.startsWith(`/library/share/`)),
        l = new URL(c ? O(`/library`, e, a == null ? null : o) : o, window.location.origin);
    return t === `file` && !c && l.searchParams.set(Y, e), l.searchParams.set(`account_id`, r ?? `personal`), l
}
async function U(e, t) {
    let n = null;
    do {
        t.throwIfAborted();
        let r = await y({
            cursor: n,
            includeHiddenFiles: !0,
            includeSavedEntities: !0,
            limit: X
        });
        t.throwIfAborted();
        let i = r.items.find(t => t.id === e);
        if (i != null) {
            let e = A({
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
        let i = await E({
            parentDirectoryId: n,
            cursor: r,
            includeHiddenFiles: !0
        });
        t.throwIfAborted();
        let a = i.items.find(t => t.kind === `file` && t.id === e);
        if (a != null) {
            let t = A(a);
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
    return typeof e == `object` && !!e && !Array.isArray(e) && `kind` in e && e.kind === `file` && `id` in e && e.id === t && (!(`canonical_file_id` in e) || e.canonical_file_id == null || typeof e.canonical_file_id == `string` && !/^libfile_fde[123]_/.test(t) && k(e.canonical_file_id) && /^libfile_fde[123]_/.test(e.canonical_file_id)) && `name` in e && typeof e.name == `string` && `is_shared` in e && e.is_shared === !0 && `parent_directory_id` in e && e.parent_directory_id === `library:collection:shared-with-me`
}
async function K(e, t) {
    let n = l() ?? c(),
        r = n?.normalizedAccountUserId;
    if (n == null || r == null) throw Error(`Shared Library read account is unavailable.`);
    let i = {
            accountId: n.id,
            accountUserId: r,
            libraryFileId: e
        },
        a = b(i, t);
    t.throwIfAborted();
    let o = await u.safeGet(`/files/library/files/{library_file_id}/node`, {
        ...a,
        parameters: {
            path: {
                library_file_id: e
            }
        },
        skipJsonTransform: !0
    });
    t.throwIfAborted(), I(i);
    let s = await o.json();
    if (t.throwIfAborted(), I(i), !G(s, e)) throw Error(`Invalid shared Library file response.`);
    let d = s.canonical_file_id == null ? s : {
            ...s,
            id: s.canonical_file_id
        },
        f = A(d);
    if (f == null) throw Error(`Shared Library file ${e} could not be opened.`);
    return {
        artifact: f,
        sharedLibraryFileId: d.id
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
            r = s(t) ? [t, m] : [m],
            i = l() ?? c(),
            a = i?.normalizedAccountUserId == null ? void 0 : {
                accountId: i.id,
                accountUserId: i.normalizedAccountUserId,
                libraryFileId: e
            },
            o = r.length === 1 ? K(e, n.signal) : void 0;
        try {
            return await Promise.any([U(e, n.signal), ...r.map(t => W(e, n.signal, t)), ...o == null ? [] : [o]])
        } catch (t) {
            n.signal.throwIfAborted(), a != null && I(a);
            try {
                return await K(e, n.signal)
            } catch (e) {
                throw (t instanceof AggregateError ? t.errors.find(e => !(e instanceof Z) && (!(e instanceof d) || ![403, 404].includes(e.status))) : void 0) ?? e
            }
        }
    } finally {
        t?.removeEventListener(`abort`, r), n.abort()
    }
}
var J, Y, X, Z, Q = e((() => {
    x(), h(), S(), P(), w(), F(), D(), o(), f(), p(), r(), a(), z(), J = n(v()), _(), j(), Y = `file_id`, X = 100, Z = class extends Error {}
}));
export {
    V as a, B as i, H as n, q as o, Q as r, Y as t
};
//# sourceMappingURL=ede2e481-e7rmgvjid2zm8wc3.js.map
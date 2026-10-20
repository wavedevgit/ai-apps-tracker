import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Aat as r,
    BU as i,
    F7 as a,
    Iat as o,
    M1 as s,
    P1 as c,
    R1 as l,
    _m as u,
    eit as d,
    wm as f,
    xm as p,
    z7 as m,
    zU as h
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Nn as g,
    Rn as _,
    Vn as v
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Ht as y,
    $Ot as b,
    DPt as x,
    FEt as S,
    KOt as C,
    NEt as w,
    P9t as T,
    PEt as E,
    VOt as D,
    YOt as O,
    ZOt as k,
    aen as A,
    ekt as j,
    ikt as M,
    oen as N,
    sUt as P,
    tkt as F,
    w9t as I,
    wPt as L
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    i as R,
    r as z
} from "./181180d3-fe8o9a6hkwil5u3q.js";
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
    let i = s() ?? c();
    if (e != null && i != null) {
        let n = H({
            libraryFileId: e,
            resourceKind: t,
            workspaceId: i.getWorkspaceId()
        });
        n.searchParams.set(`native_sharing`, `1`), n.searchParams.set(`open_sharing`, `1`);
        let r = window.open(n.href, `_blank`);
        r != null && !r.closed ? r.opener = null : h().notify(R.nativePopupBlocked, {
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
    let i = f(n) ? n : null,
        a = t === `folder` ? k(i == null ? e : M(i)?.rootDirectoryId ?? e, e) : i,
        o = a == null ? `/library` : D(`/library`, a),
        s = t === `file` && F(e) && (a == null || o.startsWith(`/library/share/`)),
        c = new URL(s ? b(`/library`, e, a == null ? null : o) : o, window.location.origin);
    return t === `file` && !s && c.searchParams.set(Y, e), c.searchParams.set(`account_id`, r ?? `personal`), c
}
async function U(e, t) {
    let n = null;
    do {
        t.throwIfAborted();
        let r = await I({
            cursor: n,
            includeHiddenFiles: !0,
            includeSavedEntities: !0,
            limit: X
        });
        t.throwIfAborted();
        let i = r.items.find(t => t.id === e);
        if (i != null) {
            let e = L({
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
        let i = await y({
            parentDirectoryId: n,
            cursor: r,
            includeHiddenFiles: !0
        });
        t.throwIfAborted();
        let a = i.items.find(t => t.kind === `file` && t.id === e);
        if (a != null) {
            let t = L(a);
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
    return typeof e == `object` && !!e && !Array.isArray(e) && `kind` in e && e.kind === `file` && `id` in e && e.id === t && (!(`canonical_file_id` in e) || e.canonical_file_id == null || typeof e.canonical_file_id == `string` && !/^libfile_fde[123]_/.test(t) && F(e.canonical_file_id) && /^libfile_fde[123]_/.test(e.canonical_file_id)) && `name` in e && typeof e.name == `string` && `is_shared` in e && e.is_shared === !0 && `parent_directory_id` in e && e.parent_directory_id === `library:collection:shared-with-me`
}
async function K(e, t) {
    let n = s() ?? c(),
        r = n?.normalizedAccountUserId;
    if (n == null || r == null) throw Error(`Shared Library read account is unavailable.`);
    let i = {
            accountId: n.id,
            accountUserId: r,
            libraryFileId: e
        },
        o = E(i, t);
    t.throwIfAborted();
    let l = await a.safeGet(`/files/library/files/{library_file_id}/node`, {
        ...o,
        parameters: {
            path: {
                library_file_id: e
            }
        },
        skipJsonTransform: !0
    });
    t.throwIfAborted(), w(i);
    let u = await l.json();
    if (t.throwIfAborted(), w(i), !G(u, e)) throw Error(`Invalid shared Library file response.`);
    let d = u.canonical_file_id == null ? u : {
            ...u,
            id: u.canonical_file_id
        },
        f = L(d);
    if (f == null) throw Error(`Shared Library file ${e} could not be opened.`);
    return {
        artifact: f,
        sharedLibraryFileId: d.id
    }
}
async function q(e, t) {
    let n = new AbortController,
        i = () => n.abort();
    t?.aborted ? i() : t?.addEventListener(`abort`, i, {
        once: !0
    });
    try {
        let t = O(window.location.pathname).directoryId,
            i = f(t) ? [t, u] : [u],
            a = s() ?? c(),
            o = a?.normalizedAccountUserId == null ? void 0 : {
                accountId: a.id,
                accountUserId: a.normalizedAccountUserId,
                libraryFileId: e
            },
            l = i.length === 1 ? K(e, n.signal) : void 0;
        try {
            return await Promise.any([U(e, n.signal), ...i.map(t => W(e, n.signal, t)), ...l == null ? [] : [l]])
        } catch (t) {
            n.signal.throwIfAborted(), o != null && w(o);
            try {
                return await K(e, n.signal)
            } catch (e) {
                throw (t instanceof AggregateError ? t.errors.find(e => !(e instanceof Z) && (!(e instanceof r) || ![403, 404].includes(e.status))) : void 0) ?? e
            }
        }
    } finally {
        t?.removeEventListener(`abort`, i), n.abort()
    }
}
var J, Y, X, Z, Q = e((() => {
    T(), d(), x(), P(), C(), S(), j(), p(), l(), o(), m(), i(), z(), J = n(v()), _(), A(), Y = `file_id`, X = 100, Z = class extends Error {}
}));
export {
    V as a, B as i, H as n, q as o, Q as r, Y as t
};
//# sourceMappingURL=ede2e481-gaq1rdx0iymjbodd.js.map
import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    IU as r,
    J7 as i,
    Jat as a,
    LU as o,
    Q7 as s,
    Sm as c,
    Tm as l,
    U1 as u,
    V1 as d,
    eot as f,
    q1 as p,
    vit as m,
    vm as h
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Nn as g,
    Rn as _,
    Vn as v
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    AEt as y,
    CPt as b,
    GOt as x,
    HOt as S,
    LOt as C,
    O9t as w,
    R9t as T,
    XHt as E,
    XOt as D,
    YOt as O,
    ZOt as k,
    bPt as A,
    ekt as j,
    iUt as M,
    jEt as N,
    kEt as P,
    len as F,
    qOt as I,
    uen as L
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    i as R,
    r as z
} from "./181180d3-i1yai5eqchns5dqk.js";
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
    if (!L()) return !1;
    let a = d() ?? u();
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
    let i = l(n) ? n : null,
        a = t === `folder` ? I(i == null ? e : j(i)?.rootDirectoryId ?? e, e) : i,
        o = a == null ? `/library` : C(`/library`, a),
        s = t === `file` && k(e) && (a == null || o.startsWith(`/library/share/`)),
        c = new URL(s ? O(`/library`, e, a == null ? null : o) : o, window.location.origin);
    return t === `file` && !s && c.searchParams.set(Y, e), c.searchParams.set(`account_id`, r ?? `personal`), c
}
async function U(e, t) {
    let n = null;
    do {
        t.throwIfAborted();
        let r = await w({
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
    let n = d() ?? u(),
        r = n?.normalizedAccountUserId;
    if (n == null || r == null) throw Error(`Shared Library read account is unavailable.`);
    let a = {
            accountId: n.id,
            accountUserId: r,
            libraryFileId: e
        },
        o = y(a, t);
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
    t.throwIfAborted(), P(a);
    let c = await s.json();
    if (t.throwIfAborted(), P(a), !G(c, e)) throw Error(`Invalid shared Library file response.`);
    let l = c.canonical_file_id == null ? c : {
            ...c,
            id: c.canonical_file_id
        },
        f = A(l);
    if (f == null) throw Error(`Shared Library file ${e} could not be opened.`);
    return {
        artifact: f,
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
        let t = x(window.location.pathname).directoryId,
            r = l(t) ? [t, h] : [h],
            i = d() ?? u(),
            o = i?.normalizedAccountUserId == null ? void 0 : {
                accountId: i.id,
                accountUserId: i.normalizedAccountUserId,
                libraryFileId: e
            },
            s = r.length === 1 ? K(e, n.signal) : void 0;
        try {
            return await Promise.any([U(e, n.signal), ...r.map(t => W(e, n.signal, t)), ...s == null ? [] : [s]])
        } catch (t) {
            n.signal.throwIfAborted(), o != null && P(o);
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
    T(), m(), b(), M(), S(), N(), D(), c(), p(), f(), s(), o(), z(), J = n(v()), _(), F(), Y = `file_id`, X = 100, Z = class extends Error {}
}));
export {
    V as a, B as i, H as n, q as o, Q as r, Y as t
};
//# sourceMappingURL=ede2e481-evqldz0xifs3sz23.js.map
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ci as t,
    JV as n,
    XV as r,
    k5 as i,
    k8 as a,
    wi as o,
    xi as s
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Adt as c,
    IPt as l,
    J5t as u,
    LPt as d,
    MPt as f,
    Mdt as p,
    NPt as m,
    Ndt as h,
    Odt as g,
    PPt as _,
    R9t as v,
    W5t as y,
    gPt as b,
    hPt as x,
    iUt as S,
    jdt as C,
    kdt as w
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    if as T,
    lf as E,
    sf as D,
    uf as O
} from "./8b34dbc2-n194ohawifys3bko.js";

function k(e, {
    accountUserId: n,
    libraryFileId: i,
    fromFileNames: a,
    matchAnyFileName: s = !1,
    toFileName: c,
    updateArtifactsStore: l = !0
}) {
    let d = e => {
        if (e == null) return e;
        let t = !1,
            n = e.pages.map(e => ({
                ...e,
                items: e.items.map(e => e.kind !== `file` || e.id !== i || !s && !a.has(e.name) ? e : (t = !0, {
                    ...e,
                    name: c
                }))
            }));
        return t ? {
            ...e,
            pages: n
        } : e
    };
    e.setQueriesData({
        queryKey: [o]
    }, d), e.setQueriesData({
        queryKey: [t]
    }, d), e.setQueriesData({
        queryKey: T(n)
    }, e => {
        if (e == null) return e;
        let t = !1,
            n = e.pages.map(e => {
                let n = !1,
                    r = e.items.map(e => e.availability !== `available` || e.item == null || e.item.id !== i || e.item.file_name === c || !s && !a.has(e.item.file_name) ? e : (t = !0, n = !0, {
                        ...e,
                        item: {
                            ...e.item,
                            file_name: c
                        }
                    }));
                return n ? {
                    ...e,
                    items: r
                } : e
            });
        return t ? {
            ...e,
            pages: n
        } : e
    }), e.setQueriesData({
        queryKey: [`gizmo`]
    }, e => {
        if (e == null || !Array.isArray(e.files)) return e;
        let t = !1,
            n = e.files.map(e => !r(e) || e.library_file_id !== i || e.name === c ? e : (t = !0, {
                ...e,
                name: c
            }));
        return t ? {
            ...e,
            files: n
        } : e
    }), l && O.getState().updateArtifactFileName({
        expectedFileNames: a,
        fileName: c,
        libraryFileId: i
    }), u(i) && x().updateGoogleDriveFileName({
        fileId: i,
        fileName: c
    })
}

function A(e) {
    return !!e && typeof e == `object` && `pages` in e
}

function j(e, t) {
    return A(e) ? e.pages.some(e => e.items.some(e => `kind` in e ? e.kind === `file` && e.id === t : e.availability === `available` && e.item?.id === t)) : !1
}

function M(e, t) {
    if (typeof e != `object` || !e || !(`files` in e)) return !1;
    let n = e.files;
    return Array.isArray(n) && n.some(e => typeof e == `object` && !!e && `library_file_id` in e && e.library_file_id === t)
}

function N(e, t) {
    let n = T(t);
    return e[0] === `recall-folder-view` || e[0] === `recall-folder-search` || e[0] === n[0] && e[1] === n[1] && e[2] === n[2]
}

function P(e, t, n) {
    return e[0] === `gizmo` && M(t, n)
}
async function F(e, t, n) {
    await e.cancelQueries({
        predicate: e => N(e.queryKey, n) && j(e.state.data, t) || P(e.queryKey, e.state.data, t)
    })
}
async function I(e, t) {
    let n = [e.invalidateQueries({
            predicate: e => N(e.queryKey, t),
            refetchType: `active`
        })],
        r = O.getState();
    r.initialized && r.viewState.listQuery.search != null && n.push(r.loadList(!0)), await Promise.allSettled(n)
}

function L({
    fileName: e,
    libraryFileId: t,
    queryClient: n,
    queue: r
}) {
    k(n, {
        accountUserId: r.accountUserId,
        libraryFileId: t,
        fromFileNames: r.knownFileNames,
        matchAnyFileName: !0,
        toFileName: e
    }), m({
        libraryFileId: t,
        fileName: e
    }), r.knownFileNames.add(e), r.latestFileName = e
}

function R({
    libraryFileId: e,
    queue: t
}) {
    if (t.inFlight = !1, t.pendingRename != null) {
        z({
            libraryFileId: e,
            queue: t
        });
        return
    }
    U.get(e) === t && U.delete(e)
}

function z({
    libraryFileId: e,
    queue: t
}) {
    t.debounceTimeoutId != null && clearTimeout(t.debounceTimeoutId);
    let n = t.pendingRename?.debounce === !1 ? 0 : W;
    t.debounceTimeoutId = setTimeout(() => {
        if (t.debounceTimeoutId = null, t.inFlight) return;
        let n = t.pendingRename;
        if (t.pendingRename = null, n == null) {
            U.get(e) === t && U.delete(e);
            return
        }
        B({
            libraryFileId: e,
            queue: t,
            rename: n
        })
    }, n)
}
async function B({
    libraryFileId: e,
    queue: t,
    rename: n
}) {
    t.inFlight = !0;
    try {
        g(t.accountUserId), await F(n.queryClient, e, t.accountUserId), g(t.accountUserId), await p.rename(e, n.fileName), g(t.accountUserId), t.settledFileName = n.fileName, t.pendingRename ?? (k(n.queryClient, {
            accountUserId: t.accountUserId,
            libraryFileId: e,
            fromFileNames: t.knownFileNames,
            matchAnyFileName: !0,
            toFileName: t.latestFileName
        }), s(), await I(n.queryClient, t.accountUserId), g(t.accountUserId), k(n.queryClient, {
            accountUserId: t.accountUserId,
            libraryFileId: e,
            fromFileNames: t.knownFileNames,
            matchAnyFileName: !0,
            toFileName: t.latestFileName,
            updateArtifactsStore: !O.getState().listLoading
        }), t.pendingRename ?? l({
            libraryFileId: e,
            fileName: t.latestFileName
        })), n.resolve()
    } catch (r) {
        C(t.accountUserId) ? t.latestFileName === n.fileName ? (k(n.queryClient, {
            accountUserId: t.accountUserId,
            libraryFileId: e,
            fromFileNames: t.knownFileNames,
            toFileName: t.settledFileName
        }), d({
            libraryFileId: e,
            fileName: t.settledFileName
        }), s(), I(n.queryClient, t.accountUserId), n.reject(r)) : n.resolve() : (n.queryClient.removeQueries({
            queryKey: T(t.accountUserId)
        }), n.reject(r))
    } finally {
        R({
            libraryFileId: e,
            queue: t
        })
    }
}

function V({
    debounce: e = !0,
    fileName: t,
    initialFileName: n,
    libraryFileId: r,
    queryClient: i
}) {
    let a = w();
    g(a);
    let o = U.get(r);
    if (o == null || o.accountUserId !== a) {
        let e = f({
            libraryFileId: r,
            fileName: n
        });
        o = {
            accountUserId: a,
            knownFileNames: new Set([n, e]),
            settledFileName: e,
            latestFileName: e,
            inFlight: !1,
            latestOperation: null,
            pendingRename: null,
            debounceTimeoutId: null
        }, U.set(r, o)
    }
    L({
        fileName: t,
        libraryFileId: r,
        queryClient: i,
        queue: o
    });
    let s = new Promise((n, a) => {
        let s = {
            debounce: e,
            fileName: t,
            queryClient: i,
            resolve: n,
            reject: a
        };
        o.pendingRename?.resolve(), o.pendingRename = s, z({
            libraryFileId: r,
            queue: o
        })
    });
    return o.latestOperation = s, s
}
async function H(e) {
    let t = U.get(e);
    if (t == null) return;
    g(t.accountUserId);
    let n;
    do t.pendingRename != null && (t.pendingRename.debounce = !1, i(() => {
        z({
            libraryFileId: e,
            queue: t
        })
    })), n = t.latestOperation, await n, g(t.accountUserId); while (n !== t.latestOperation)
}
var U, W, G = e((() => {
    v(), _(), n(), h(), b(), y(), D(), S(), E(), c(), a(), U = new Map, W = 750
}));
export {
    G as n, V as r, H as t
};
//# sourceMappingURL=1af2f3f4-mgibrt3xb531a8hl.js.map
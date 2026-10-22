import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A5 as t,
    A8 as n,
    F8 as r,
    I5 as i,
    L8 as a,
    Q8 as o,
    R5 as s,
    R8 as c,
    Yat as ee,
    Z8 as te,
    tot as ne,
    x5 as re,
    z5 as ie,
    z8 as l
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    s as ae,
    w as u
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $y as d,
    nb as f,
    rb as oe,
    ub as se
} from "./8b34dbc2-peb5nzi8z3rrflnv.js";
import {
    a as ce,
    i as p,
    n as le,
    r as m,
    t as ue
} from "./ec72420d-d6izbm89auevn375.js";

function h({
    fileId: e,
    limit: t = 20
}) {
    return [`artifact-preview`, `file-version-history`, e, t]
}

function g({
    fileId: e,
    limit: t = 20
}) {
    return u({
        queryKey: h({
            fileId: e,
            limit: t
        }),
        queryFn: () => p({
            fileId: e,
            limit: t
        })
    })
}

function _({
    fileId: e,
    versionNumber: t
}) {
    return u({
        queryKey: [`artifact-preview`, `file-version-history`, e, `requested-version`, t],
        queryFn: () => le({
            fileId: e,
            versionNumber: t
        })
    })
}
var v, de = e((() => {
    ae(), m(), v = {
        items: [],
        cursor: null
    }
}));

function y(e, t) {
    if (!e) return null;
    let n = new Date(e);
    return Number.isNaN(n.getTime()) ? null : new Intl.DateTimeFormat(`en-US`, t).format(n)
}

function fe(e) {
    let t = y(e, {
            month: `short`,
            day: `numeric`
        }),
        n = y(e, {
            hour: `numeric`,
            minute: `2-digit`,
            hour12: !0
        });
    return !t || !n ? e ?? `` : `${t}, ${n.replace(` `,``)}`
}

function pe(e) {
    return y(e, {
        month: `short`,
        day: `numeric`
    })
}

function b({
    allVersions: e,
    showCurrentLabel: t = !0,
    version: n
}) {
    if (t && n.isCurrent) return `Current version`;
    switch (n.action) {
        case `create`:
            return `Created`;
        case `restore`: {
            let t = pe(e.find(e => e.versionNumber === n.sourceVersionNumber)?.createdAt);
            return t ? `Restored from ${t}` : `Restored`
        }
        case `edit`: {
            let e = n.reason?.trim();
            return e ? `Edited (${e})` : `Edited`
        }
        default:
            return `Edited`
    }
}
var me = e((() => {}));

function x({
    allVersions: e,
    version: t
}) {
    let n = t.reason?.trim(),
        r = n === `Autosaved from writing block editor` || n === `Autosaved from shared writing block editor` ? void 0 : n,
        i = r === n ? t : {
            ...t,
            reason: void 0
        };
    return {
        id: t.id,
        fileId: t.fileId,
        fileName: t.fileName,
        mimeType: t.mimeType,
        sizeBytes: t.sizeBytes,
        gizmoId: t.gizmoId,
        versionNumber: t.versionNumber,
        label: b({
            allVersions: e,
            version: i
        }),
        historicalLabel: b({
            allVersions: e,
            showCurrentLabel: !1,
            version: i
        }),
        timestamp: fe(t.createdAt),
        action: t.action,
        actor: t.actor,
        ...t.actorId == null ? {} : {
            actorId: t.actorId
        },
        ...t.actorEmail == null ? {} : {
            actorEmail: t.actorEmail
        },
        ...t.actorDisplayName == null ? {} : {
            actorDisplayName: t.actorDisplayName
        },
        ...r ? {
            reason: r
        } : {},
        sourceVersionNumber: t.sourceVersionNumber,
        badge: t.actor === `agent` ? `Agent` : void 0,
        isCurrent: t.isCurrent,
        canRestore: !t.isCurrent
    }
}

function he(e) {
    return e.items.map(t => x({
        allVersions: e.items,
        version: t
    }))
}
var ge = e((() => {
    me()
}));

function _e({
    currentVersionNumber: e,
    page: t
}) {
    return t?.items.find(t => t.isCurrent && t.versionNumber === e)
}

function S({
    currentVersionNumber: e,
    page: t
}) {
    return _e({
        currentVersionNumber: e,
        page: t
    }) ?? null
}

function C(e) {
    let t = e.currentVersion;
    if (t) return x({
        allVersions: [t],
        version: t
    })
}

function w({
    currentVersionEntry: e,
    entry: t
}) {
    let n = (e?.versionNumber ?? t.versionNumber) + 1;
    return {
        ...t,
        id: F,
        versionNumber: n,
        label: `Current version`,
        timestamp: ``,
        isRestorePending: !0,
        isCurrent: !0,
        canRestore: !1,
        isPending: !0
    }
}

function ve({
    entries: e,
    pendingCurrentVersionEntry: t
}) {
    return t == null ? e : [t, ...e.filter(e => e.versionNumber !== t.versionNumber).map(e => e.isCurrent ? {
        ...e,
        label: e.historicalLabel,
        isRestorePending: !1,
        isCurrent: !1,
        canRestore: !1
    } : e)]
}

function ye({
    entries: e,
    selectedVersionId: t
}) {
    return t === F ? e.find(e => e.isCurrent) ?? e[0] : e.find(e => e.id === t) ?? e.find(e => e.isCurrent) ?? e[0]
}

function be(e) {
    if (e != null) return e.isCurrent ? F : e.id
}

function T(e) {
    return e?.trim() ?? ``
}

function xe(e) {
    let t = U(e);
    if (t != null) return (K(e).data ?? v).items.find(e => e.versionNumber === t) ?? W({
        fileId: e,
        versionNumber: t
    }).data ?? void 0
}

function E(e) {
    let t = K(e),
        n = t.data ?? v,
        r = xe(e),
        i = r != null && !n.items.some(e => e.versionNumber === r.versionNumber),
        a = he(i ? {
            ...n,
            items: [...n.items, r].sort((e, t) => t.versionNumber - e.versionNumber)
        } : n);
    return !t.isFetching && (!i || n.items.some(e => e.isCurrent)) ? a : a.map(e => e.canRestore ? {
        ...e,
        canRestore: !1
    } : e)
}

function D(e) {
    return E(e).find(e => e.isCurrent)
}

function Se(e) {
    $.has(e) || $.set(e, re(() => ({
        entries: E(e),
        isRestoring: V(e),
        requestedVersionNumber: U(e),
        selectedVersionId: H(e)
    }), ({
        entries: n,
        isRestoring: r,
        requestedVersionNumber: i,
        selectedVersionId: a
    }) => {
        if (r) return;
        if (n.length === 0) {
            t(() => {
                G.set(e, void 0), H.set(e, void 0)
            });
            return
        }
        let o = i == null ? void 0 : n.find(e => e.versionNumber === i);
        if (o != null) {
            a !== o.id && H.set(e, o.id);
            return
        }
        a !== F && (!a || !n.some(e => e.id === a)) && H.set(e, F)
    }))
}

function Ce({
    fileId: e
}) {
    let t = T(e);
    if (t.length !== 0) return Se(t), () => {
        O(t)
    }
}

function O(e, {
    preserveOpenPreview: t = !1
} = {}) {
    let n = T(e);
    if (n.length === 0 || t && i(() => R(n))) return;
    $.get(n)?.(), $.delete(n);
    let r = i(() => U(n));
    L.delete(n), R.delete(n), z.delete(n), B.delete(n), V.delete(n), H.delete(n), U.delete(n), r != null && W.delete({
        fileId: n,
        versionNumber: r
    }), q.delete(n), J.delete(n), G.delete(n), K.delete(n), Y.delete(n), X.delete(n), Z.delete(n), Q.delete(n)
}

function k(e, t) {
    let n = i(() => U(e));
    n != null && n !== t && W.delete({
        fileId: e,
        versionNumber: n
    }), U.set(e, t)
}
async function A(e, t) {
    let n = s();
    await n.invalidateQueries({
        queryKey: h({
            fileId: e,
            limit: I
        }),
        refetchType: `none`
    });
    let r = await n.fetchQuery(g({
        fileId: e,
        limit: I
    }));
    return {
        ...t,
        currentVersion: S({
            currentVersionNumber: t.currentVersionNumber,
            page: r
        }) ?? t.currentVersion ?? null
    }
}
async function we({
    fileId: e,
    sourceFile: n,
    versionReason: r
}) {
    let a = T(e);
    if (a.length === 0) return;
    B.set(a, !0);
    let o = i(() => D(a))?.versionNumber ?? null;
    d({
        status: `started`
    });
    try {
        let e = await A(a, await ue({
            fileId: a,
            sourceFile: n,
            expectedCurrentVersion: o,
            versionReason: r ?? null
        }));
        return t(() => {
            k(a, void 0), H.set(a, F)
        }), d({
            status: `succeeded`
        }), C(e)
    } catch (e) {
        throw d({
            status: `failed`
        }), e
    } finally {
        B.set(a, !1)
    }
}

function Te({
    entryId: e,
    fileId: n
}) {
    let r = T(n);
    if (r.length === 0 || i(() => X(r))) return;
    let a = i(() => Y(r)).find(t => t.id === e);
    t(() => {
        a?.versionNumber !== U(r) && k(r, void 0), H.set(r, be(a) ?? e)
    }), a && oe()
}
async function j({
    entryId: e,
    fileId: n
}) {
    let r = T(n),
        a = i(() => E(r)).find(t => t.id === e);
    if (r.length === 0 || a == null || !a.canRestore) return;
    let o = i(() => D(r)),
        c = w({
            currentVersionEntry: o,
            entry: a
        });
    f({
        status: `started`
    }), t(() => {
        V.set(r, !0), G.set(r, c), H.set(r, F)
    });
    try {
        let e = C(await A(r, await ce({
            fileId: r,
            versionNumber: a.versionNumber,
            expectedCurrentVersion: o?.versionNumber ?? null
        })));
        return f({
            status: `succeeded`
        }), t(() => {
            k(r, void 0), G.set(r, void 0), H.set(r, F)
        }), e
    } catch (e) {
        throw e instanceof ee && e.status === 409 && s().invalidateQueries({
            queryKey: h({
                fileId: r,
                limit: I
            }),
            refetchType: `all`
        }), t(() => {
            H.set(r, a.id), G.set(r, void 0)
        }), f({
            status: `failed`
        }), e
    } finally {
        V.set(r, !1)
    }
}

function Ee(e) {
    let t = T(e),
        n = i(() => Z(t));
    return n ? j({
        entryId: n.id,
        fileId: t
    }) : Promise.resolve(void 0)
}

function M(e, t) {
    let n = t == null ? void 0 : i(() => E(e)).find(e => e.versionNumber === t);
    k(e, t), H.set(e, n?.id ?? F), R.set(e, !0)
}

function De(e, n) {
    let r = T(e);
    r.length !== 0 && t(() => {
        M(r, n)
    })
}

function N(e) {
    R.set(e, !0), L.set(e, !0), s().invalidateQueries({
        queryKey: h({
            fileId: e,
            limit: I
        }),
        refetchType: `all`
    })
}

function P(e) {
    let n = T(e);
    n.length !== 0 && t(() => N(n))
}

function Oe(e) {
    let t = T(e);
    t.length !== 0 && L.set(t, !1)
}

function ke(e) {
    let t = T(e),
        n = i(() => U(t));
    t.length === 0 || n == null || s().invalidateQueries({
        queryKey: _({
            fileId: t,
            versionNumber: n
        }).queryKey
    })
}

function Ae(e, n) {
    let r = T(e);
    r.length !== 0 && t(() => {
        M(r, n), N(r)
    })
}

function je(e) {
    let n = T(e);
    n.length !== 0 && t(() => {
        k(n, void 0), R.set(n, !1), L.set(n, !1)
    })
}
var F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, $, Me = e((() => {
    n(), se(), ne(), ie(), te(), de(), m(), ge(), F = `__current__`, I = 20, L = l(e => c(!1)), R = l(e => c(!1)), z = l(e => c(!1)), B = l(e => c(!1)), V = l(e => c(!1)), H = l(e => c(void 0)), U = l(e => c(void 0)), W = l(({
        fileId: e,
        versionNumber: t
    }) => a(() => _({
        fileId: e,
        versionNumber: t
    }), {
        name: `requestedFileVersion:${e}:${t}`
    }), {
        cacheKey: ({
            fileId: e,
            versionNumber: t
        }) => [e, t]
    }), G = l(e => c(void 0)), K = l(e => a(() => g({
        fileId: e,
        limit: I
    }), {
        name: `fileVersionHistory:${e}`
    })), q = l(e => r(() => {
        let t = U(e);
        return t != null && !(K(e).data ?? v).items.some(e => e.versionNumber === t) && W({
            fileId: e,
            versionNumber: t
        }).isFetching
    })), J = l(e => r(() => {
        let t = U(e);
        if (t == null || (K(e).data ?? v).items.some(e => e.versionNumber === t)) return !1;
        let n = W({
            fileId: e,
            versionNumber: t
        });
        return n.isFetched && n.data == null
    })), Y = l(e => r(() => ve({
        entries: E(e),
        pendingCurrentVersionEntry: G(e)
    }), {
        equals: o
    })), X = l(e => r(() => {
        if (V(e)) return !0;
        let t = G(e);
        return t != null && t.isPending === !0
    })), Z = l(e => r(() => ye({
        entries: Y(e),
        selectedVersionId: H(e)
    }))), Q = l(e => r(() => {
        let t = Z(e);
        if (t != null) return Y(e).find(e => e.isCurrent && e.versionNumber > t.versionNumber)
    }, {
        equals: o
    })), $ = new Map
}));
export {
    P as C, Z as S, Ee as _, z as a, Te as b, R as c, Me as d, Q as f, j as g, J as h, we as i, L as l, q as m, je as n, B as o, Ae as p, Ce as r, Y as s, O as t, Oe as u, X as v, De as x, ke as y
};
//# sourceMappingURL=4117f58d-b5kgdt9d2f95a05w.js.map
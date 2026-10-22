import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    F5 as t,
    I8 as n,
    Kat as r,
    L5 as i,
    L8 as a,
    P8 as o,
    Qat as s,
    R5 as c,
    R8 as l,
    X8 as ee,
    Z8 as u,
    b5 as te,
    k5 as d,
    k8 as f
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    s as ne,
    w as p
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Qy as m,
    lb as re,
    nb as ie,
    tb as h
} from "./8b34dbc2-m4883pai3e8fx8q6.js";
import {
    a as ae,
    i as oe,
    n as se,
    r as g,
    t as ce
} from "./ec72420d-iol6hfwza00tr1it.js";

function _({
    fileId: e,
    limit: t = 20
}) {
    return [`artifact-preview`, `file-version-history`, e, t]
}

function v({
    fileId: e,
    limit: t = 20
}) {
    return p({
        queryKey: _({
            fileId: e,
            limit: t
        }),
        queryFn: () => oe({
            fileId: e,
            limit: t
        })
    })
}

function y({
    fileId: e,
    versionNumber: t
}) {
    return p({
        queryKey: [`artifact-preview`, `file-version-history`, e, `requested-version`, t],
        queryFn: () => se({
            fileId: e,
            versionNumber: t
        })
    })
}
var b, le = e((() => {
    ne(), g(), b = {
        items: [],
        cursor: null
    }
}));

function x(e, t) {
    if (!e) return null;
    let n = new Date(e);
    return Number.isNaN(n.getTime()) ? null : new Intl.DateTimeFormat(`en-US`, t).format(n)
}

function ue(e) {
    let t = x(e, {
            month: `short`,
            day: `numeric`
        }),
        n = x(e, {
            hour: `numeric`,
            minute: `2-digit`,
            hour12: !0
        });
    return !t || !n ? e ?? `` : `${t}, ${n.replace(` `,``)}`
}

function de(e) {
    return x(e, {
        month: `short`,
        day: `numeric`
    })
}

function S({
    allVersions: e,
    showCurrentLabel: t = !0,
    version: n
}) {
    if (t && n.isCurrent) return `Current version`;
    switch (n.action) {
        case `create`:
            return `Created`;
        case `restore`: {
            let t = de(e.find(e => e.versionNumber === n.sourceVersionNumber)?.createdAt);
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
var fe = e((() => {}));

function C({
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
        label: S({
            allVersions: e,
            version: i
        }),
        historicalLabel: S({
            allVersions: e,
            showCurrentLabel: !1,
            version: i
        }),
        timestamp: ue(t.createdAt),
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

function pe(e) {
    return e.items.map(t => C({
        allVersions: e.items,
        version: t
    }))
}
var me = e((() => {
    fe()
}));

function he({
    currentVersionNumber: e,
    page: t
}) {
    return t?.items.find(t => t.isCurrent && t.versionNumber === e)
}

function ge({
    currentVersionNumber: e,
    page: t
}) {
    return he({
        currentVersionNumber: e,
        page: t
    }) ?? null
}

function w(e) {
    let t = e.currentVersion;
    if (t) return C({
        allVersions: [t],
        version: t
    })
}

function _e({
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
    if (t != null) return (K(e).data ?? b).items.find(e => e.versionNumber === t) ?? W({
        fileId: e,
        versionNumber: t
    }).data ?? void 0
}

function E(e) {
    let t = K(e),
        n = t.data ?? b,
        r = xe(e),
        i = r != null && !n.items.some(e => e.versionNumber === r.versionNumber),
        a = pe(i ? {
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
    $.has(e) || $.set(e, te(() => ({
        entries: E(e),
        isRestoring: V(e),
        requestedVersionNumber: U(e),
        selectedVersionId: H(e)
    }), ({
        entries: t,
        isRestoring: n,
        requestedVersionNumber: r,
        selectedVersionId: i
    }) => {
        if (n) return;
        if (t.length === 0) {
            d(() => {
                G.set(e, void 0), H.set(e, void 0)
            });
            return
        }
        let a = r == null ? void 0 : t.find(e => e.versionNumber === r);
        if (a != null) {
            i !== a.id && H.set(e, a.id);
            return
        }
        i !== F && (!i || !t.some(e => e.id === i)) && H.set(e, F)
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
    preserveOpenPreview: n = !1
} = {}) {
    let r = T(e);
    if (r.length === 0 || n && t(() => R(r))) return;
    $.get(r)?.(), $.delete(r);
    let i = t(() => U(r));
    L.delete(r), R.delete(r), z.delete(r), B.delete(r), V.delete(r), H.delete(r), U.delete(r), i != null && W.delete({
        fileId: r,
        versionNumber: i
    }), q.delete(r), J.delete(r), G.delete(r), K.delete(r), Y.delete(r), X.delete(r), Z.delete(r), Q.delete(r)
}

function k(e, n) {
    let r = t(() => U(e));
    r != null && r !== n && W.delete({
        fileId: e,
        versionNumber: r
    }), U.set(e, n)
}
async function A(e, t) {
    let n = i();
    await n.invalidateQueries({
        queryKey: _({
            fileId: e,
            limit: I
        }),
        refetchType: `none`
    });
    let r = await n.fetchQuery(v({
        fileId: e,
        limit: I
    }));
    return {
        ...t,
        currentVersion: ge({
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
    let i = T(e);
    if (i.length === 0) return;
    B.set(i, !0);
    let a = t(() => D(i))?.versionNumber ?? null;
    m({
        status: `started`
    });
    try {
        let e = await A(i, await ce({
            fileId: i,
            sourceFile: n,
            expectedCurrentVersion: a,
            versionReason: r ?? null
        }));
        return d(() => {
            k(i, void 0), H.set(i, F)
        }), m({
            status: `succeeded`
        }), w(e)
    } catch (e) {
        throw m({
            status: `failed`
        }), e
    } finally {
        B.set(i, !1)
    }
}

function Te({
    entryId: e,
    fileId: n
}) {
    let r = T(n);
    if (r.length === 0 || t(() => X(r))) return;
    let i = t(() => Y(r)).find(t => t.id === e);
    d(() => {
        i?.versionNumber !== U(r) && k(r, void 0), H.set(r, be(i) ?? e)
    }), i && ie()
}
async function j({
    entryId: e,
    fileId: n
}) {
    let a = T(n),
        o = t(() => E(a)).find(t => t.id === e);
    if (a.length === 0 || o == null || !o.canRestore) return;
    let s = t(() => D(a)),
        c = _e({
            currentVersionEntry: s,
            entry: o
        });
    h({
        status: `started`
    }), d(() => {
        V.set(a, !0), G.set(a, c), H.set(a, F)
    });
    try {
        let e = w(await A(a, await ae({
            fileId: a,
            versionNumber: o.versionNumber,
            expectedCurrentVersion: s?.versionNumber ?? null
        })));
        return h({
            status: `succeeded`
        }), d(() => {
            k(a, void 0), G.set(a, void 0), H.set(a, F)
        }), e
    } catch (e) {
        throw e instanceof r && e.status === 409 && i().invalidateQueries({
            queryKey: _({
                fileId: a,
                limit: I
            }),
            refetchType: `all`
        }), d(() => {
            H.set(a, o.id), G.set(a, void 0)
        }), h({
            status: `failed`
        }), e
    } finally {
        V.set(a, !1)
    }
}

function Ee(e) {
    let n = T(e),
        r = t(() => Z(n));
    return r ? j({
        entryId: r.id,
        fileId: n
    }) : Promise.resolve(void 0)
}

function M(e, n) {
    let r = n == null ? void 0 : t(() => E(e)).find(e => e.versionNumber === n);
    k(e, n), H.set(e, r?.id ?? F), R.set(e, !0)
}

function De(e, t) {
    let n = T(e);
    n.length !== 0 && d(() => {
        M(n, t)
    })
}

function N(e) {
    R.set(e, !0), L.set(e, !0), i().invalidateQueries({
        queryKey: _({
            fileId: e,
            limit: I
        }),
        refetchType: `all`
    })
}

function P(e) {
    let t = T(e);
    t.length !== 0 && d(() => N(t))
}

function Oe(e) {
    let t = T(e);
    t.length !== 0 && L.set(t, !1)
}

function ke(e) {
    let n = T(e),
        r = t(() => U(n));
    n.length === 0 || r == null || i().invalidateQueries({
        queryKey: y({
            fileId: n,
            versionNumber: r
        }).queryKey
    })
}

function Ae(e, t) {
    let n = T(e);
    n.length !== 0 && d(() => {
        M(n, t), N(n)
    })
}

function je(e) {
    let t = T(e);
    t.length !== 0 && d(() => {
        k(t, void 0), R.set(t, !1), L.set(t, !1)
    })
}
var F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, $, Me = e((() => {
    f(), re(), s(), c(), ee(), le(), g(), me(), F = `__current__`, I = 20, L = l(e => a(!1)), R = l(e => a(!1)), z = l(e => a(!1)), B = l(e => a(!1)), V = l(e => a(!1)), H = l(e => a(void 0)), U = l(e => a(void 0)), W = l(({
        fileId: e,
        versionNumber: t
    }) => n(() => y({
        fileId: e,
        versionNumber: t
    }), {
        name: `requestedFileVersion:${e}:${t}`
    }), {
        cacheKey: ({
            fileId: e,
            versionNumber: t
        }) => [e, t]
    }), G = l(e => a(void 0)), K = l(e => n(() => v({
        fileId: e,
        limit: I
    }), {
        name: `fileVersionHistory:${e}`
    })), q = l(e => o(() => {
        let t = U(e);
        return t != null && !(K(e).data ?? b).items.some(e => e.versionNumber === t) && W({
            fileId: e,
            versionNumber: t
        }).isFetching
    })), J = l(e => o(() => {
        let t = U(e);
        if (t == null || (K(e).data ?? b).items.some(e => e.versionNumber === t)) return !1;
        let n = W({
            fileId: e,
            versionNumber: t
        });
        return n.isFetched && n.data == null
    })), Y = l(e => o(() => ve({
        entries: E(e),
        pendingCurrentVersionEntry: G(e)
    }), {
        equals: u
    })), X = l(e => o(() => {
        if (V(e)) return !0;
        let t = G(e);
        return t != null && t.isPending === !0
    })), Z = l(e => o(() => ye({
        entries: Y(e),
        selectedVersionId: H(e)
    }))), Q = l(e => o(() => {
        let t = Z(e);
        if (t != null) return Y(e).find(e => e.isCurrent && e.versionNumber > t.versionNumber)
    }, {
        equals: u
    })), $ = new Map
}));
export {
    P as C, Z as S, Ee as _, z as a, Te as b, R as c, Me as d, Q as f, j as g, J as h, we as i, L as l, q as m, je as n, B as o, Ae as p, Ce as r, Y as s, O as t, Oe as u, X as v, De as x, ke as y
};
//# sourceMappingURL=4117f58d-1zbcrzsawo6n4z9t.js.map
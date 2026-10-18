import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B6 as t,
    B8 as n,
    G6 as r,
    J6 as i,
    J8 as a,
    K8 as o,
    Qit as ee,
    Y6 as s,
    Y8 as c,
    c8 as l,
    iat as te,
    j8 as ne,
    q6 as u,
    s8 as re
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    s as ie,
    w as d
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $y as f,
    Xy as p,
    eb as ae,
    sb as oe
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    a as m,
    i as se,
    n as ce,
    r as h,
    t as le
} from "./ec72420d-mhn8rl6o5559xbc2.js";

function g({
    fileId: e,
    limit: t = 20
}) {
    return [`artifact-preview`, `file-version-history`, e, t]
}

function _({
    fileId: e,
    limit: t = 20
}) {
    return d({
        queryKey: g({
            fileId: e,
            limit: t
        }),
        queryFn: () => se({
            fileId: e,
            limit: t
        })
    })
}

function v({
    fileId: e,
    versionNumber: t
}) {
    return d({
        queryKey: [`artifact-preview`, `file-version-history`, e, `requested-version`, t],
        queryFn: () => ce({
            fileId: e,
            versionNumber: t
        })
    })
}
var y, ue = e((() => {
    ie(), h(), y = {
        items: [],
        cursor: null
    }
}));

function b(e, t) {
    if (!e) return null;
    let n = new Date(e);
    return Number.isNaN(n.getTime()) ? null : new Intl.DateTimeFormat(`en-US`, t).format(n)
}

function de(e) {
    let t = b(e, {
            month: `short`,
            day: `numeric`
        }),
        n = b(e, {
            hour: `numeric`,
            minute: `2-digit`,
            hour12: !0
        });
    return !t || !n ? e ?? `` : `${t}, ${n.replace(` `,``)}`
}

function fe(e) {
    return b(e, {
        month: `short`,
        day: `numeric`
    })
}

function x({
    allVersions: e,
    showCurrentLabel: t = !0,
    version: n
}) {
    if (t && n.isCurrent) return `Current version`;
    switch (n.action) {
        case `create`:
            return `Created`;
        case `restore`: {
            let t = fe(e.find(e => e.versionNumber === n.sourceVersionNumber)?.createdAt);
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
var pe = e((() => {}));

function S({
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
        label: x({
            allVersions: e,
            version: i
        }),
        historicalLabel: x({
            allVersions: e,
            showCurrentLabel: !1,
            version: i
        }),
        timestamp: de(t.createdAt),
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

function me(e) {
    return e.items.map(t => S({
        allVersions: e.items,
        version: t
    }))
}
var C = e((() => {
    pe()
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
    if (t) return S({
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
    if (t != null) return (K(e).data ?? y).items.find(e => e.versionNumber === t) ?? W({
        fileId: e,
        versionNumber: t
    }).data ?? void 0
}

function E(e) {
    let t = K(e),
        n = t.data ?? y,
        r = xe(e),
        i = r != null && !n.items.some(e => e.versionNumber === r.versionNumber),
        a = me(i ? {
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
    $.has(e) || $.set(e, ne(() => ({
        entries: E(e),
        isRestoring: V(e),
        requestedVersionNumber: U(e),
        selectedVersionId: H(e)
    }), ({
        entries: t,
        isRestoring: r,
        requestedVersionNumber: i,
        selectedVersionId: a
    }) => {
        if (r) return;
        if (t.length === 0) {
            n(() => {
                G.set(e, void 0), H.set(e, void 0)
            });
            return
        }
        let o = i == null ? void 0 : t.find(e => e.versionNumber === i);
        if (o != null) {
            a !== o.id && H.set(e, o.id);
            return
        }
        a !== F && (!a || !t.some(e => e.id === a)) && H.set(e, F)
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
    if (n.length === 0 || t && o(() => R(n))) return;
    $.get(n)?.(), $.delete(n);
    let r = o(() => U(n));
    L.delete(n), R.delete(n), z.delete(n), B.delete(n), V.delete(n), H.delete(n), U.delete(n), r != null && W.delete({
        fileId: n,
        versionNumber: r
    }), q.delete(n), J.delete(n), G.delete(n), K.delete(n), Y.delete(n), X.delete(n), Z.delete(n), Q.delete(n)
}

function k(e, t) {
    let n = o(() => U(e));
    n != null && n !== t && W.delete({
        fileId: e,
        versionNumber: n
    }), U.set(e, t)
}
async function A(e, t) {
    let n = a();
    await n.invalidateQueries({
        queryKey: g({
            fileId: e,
            limit: I
        }),
        refetchType: `none`
    });
    let r = await n.fetchQuery(_({
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
    sourceFile: t,
    versionReason: r
}) {
    let i = T(e);
    if (i.length === 0) return;
    B.set(i, !0);
    let a = o(() => D(i))?.versionNumber ?? null;
    p({
        status: `started`
    });
    try {
        let e = await A(i, await le({
            fileId: i,
            sourceFile: t,
            expectedCurrentVersion: a,
            versionReason: r ?? null
        }));
        return n(() => {
            k(i, void 0), H.set(i, F)
        }), p({
            status: `succeeded`
        }), w(e)
    } catch (e) {
        throw p({
            status: `failed`
        }), e
    } finally {
        B.set(i, !1)
    }
}

function Te({
    entryId: e,
    fileId: t
}) {
    let r = T(t);
    if (r.length === 0 || o(() => X(r))) return;
    let i = o(() => Y(r)).find(t => t.id === e);
    n(() => {
        i?.versionNumber !== U(r) && k(r, void 0), H.set(r, be(i) ?? e)
    }), i && ae()
}
async function j({
    entryId: e,
    fileId: t
}) {
    let r = T(t),
        i = o(() => E(r)).find(t => t.id === e);
    if (r.length === 0 || i == null || !i.canRestore) return;
    let s = o(() => D(r)),
        c = _e({
            currentVersionEntry: s,
            entry: i
        });
    f({
        status: `started`
    }), n(() => {
        V.set(r, !0), G.set(r, c), H.set(r, F)
    });
    try {
        let e = w(await A(r, await m({
            fileId: r,
            versionNumber: i.versionNumber,
            expectedCurrentVersion: s?.versionNumber ?? null
        })));
        return f({
            status: `succeeded`
        }), n(() => {
            k(r, void 0), G.set(r, void 0), H.set(r, F)
        }), e
    } catch (e) {
        throw e instanceof ee && e.status === 409 && a().invalidateQueries({
            queryKey: g({
                fileId: r,
                limit: I
            }),
            refetchType: `all`
        }), n(() => {
            H.set(r, i.id), G.set(r, void 0)
        }), f({
            status: `failed`
        }), e
    } finally {
        V.set(r, !1)
    }
}

function Ee(e) {
    let t = T(e),
        n = o(() => Z(t));
    return n ? j({
        entryId: n.id,
        fileId: t
    }) : Promise.resolve(void 0)
}

function M(e, t) {
    let n = t == null ? void 0 : o(() => E(e)).find(e => e.versionNumber === t);
    k(e, t), H.set(e, n?.id ?? F), R.set(e, !0)
}

function N(e, t) {
    let r = T(e);
    r.length !== 0 && n(() => {
        M(r, t)
    })
}

function P(e) {
    R.set(e, !0), L.set(e, !0), a().invalidateQueries({
        queryKey: g({
            fileId: e,
            limit: I
        }),
        refetchType: `all`
    })
}

function De(e) {
    let t = T(e);
    t.length !== 0 && n(() => P(t))
}

function Oe(e) {
    let t = T(e);
    t.length !== 0 && L.set(t, !1)
}

function ke(e) {
    let t = T(e),
        n = o(() => U(t));
    t.length === 0 || n == null || a().invalidateQueries({
        queryKey: v({
            fileId: t,
            versionNumber: n
        }).queryKey
    })
}

function Ae(e, t) {
    let r = T(e);
    r.length !== 0 && n(() => {
        M(r, t), P(r)
    })
}

function je(e) {
    let t = T(e);
    t.length !== 0 && n(() => {
        k(t, void 0), R.set(t, !1), L.set(t, !1)
    })
}
var F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, $, Me = e((() => {
    t(), oe(), te(), c(), re(), ue(), h(), C(), F = `__current__`, I = 20, L = s(e => i(!1)), R = s(e => i(!1)), z = s(e => i(!1)), B = s(e => i(!1)), V = s(e => i(!1)), H = s(e => i(void 0)), U = s(e => i(void 0)), W = s(({
        fileId: e,
        versionNumber: t
    }) => u(() => v({
        fileId: e,
        versionNumber: t
    }), {
        name: `requestedFileVersion:${e}:${t}`
    }), {
        cacheKey: ({
            fileId: e,
            versionNumber: t
        }) => [e, t]
    }), G = s(e => i(void 0)), K = s(e => u(() => _({
        fileId: e,
        limit: I
    }), {
        name: `fileVersionHistory:${e}`
    })), q = s(e => r(() => {
        let t = U(e);
        return t != null && !(K(e).data ?? y).items.some(e => e.versionNumber === t) && W({
            fileId: e,
            versionNumber: t
        }).isFetching
    })), J = s(e => r(() => {
        let t = U(e);
        if (t == null || (K(e).data ?? y).items.some(e => e.versionNumber === t)) return !1;
        let n = W({
            fileId: e,
            versionNumber: t
        });
        return n.isFetched && n.data == null
    })), Y = s(e => r(() => ve({
        entries: E(e),
        pendingCurrentVersionEntry: G(e)
    }), {
        equals: l
    })), X = s(e => r(() => {
        if (V(e)) return !0;
        let t = G(e);
        return t != null && t.isPending === !0
    })), Z = s(e => r(() => ye({
        entries: Y(e),
        selectedVersionId: H(e)
    }))), Q = s(e => r(() => {
        let t = Z(e);
        if (t != null) return Y(e).find(e => e.isCurrent && e.versionNumber > t.versionNumber)
    }, {
        equals: l
    })), $ = new Map
}));
export {
    De as C, Z as S, Ee as _, z as a, Te as b, R as c, Me as d, Q as f, j as g, J as h, we as i, L as l, q as m, je as n, B as o, Ae as p, Ce as r, Y as s, O as t, Oe as u, X as v, N as x, ke as y
};
//# sourceMappingURL=4117f58d-oe1bh6kt9k686u45.js.map
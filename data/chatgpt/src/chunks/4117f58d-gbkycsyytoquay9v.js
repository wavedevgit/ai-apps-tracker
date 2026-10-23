import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    F8 as n,
    L8 as r,
    Q8 as i,
    R8 as a,
    S5 as ee,
    Z8 as te,
    cot as o,
    i5 as ne,
    not as re,
    p5 as s,
    x5 as c,
    y5 as l,
    z8 as u
} from "./4813494d-mdvd4786a87166cc.js";
import {
    s as ie,
    w as d
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $y as f,
    nb as p,
    rb as ae,
    ub as oe
} from "./8b34dbc2-lmwubajnld74ksfm.js";
import {
    a as se,
    i as m,
    n as ce,
    r as h,
    t as le
} from "./ec72420d-j75s9njjwrmcxzof.js";

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
        queryFn: () => m({
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
var he = e((() => {
    pe()
}));

function ge({
    currentVersionNumber: e,
    page: t
}) {
    return t?.items.find(t => t.isCurrent && t.versionNumber === e)
}

function _e({
    currentVersionNumber: e,
    page: t
}) {
    return ge({
        currentVersionNumber: e,
        page: t
    }) ?? null
}

function C(e) {
    let t = e.currentVersion;
    if (t) return S({
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
        isRestoring: n,
        requestedVersionNumber: r,
        selectedVersionId: i
    }) => {
        if (n) return;
        if (t.length === 0) {
            s(() => {
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
    preserveOpenPreview: t = !1
} = {}) {
    let n = T(e);
    if (n.length === 0 || t && l(() => R(n))) return;
    $.get(n)?.(), $.delete(n);
    let r = l(() => U(n));
    L.delete(n), R.delete(n), z.delete(n), B.delete(n), V.delete(n), H.delete(n), U.delete(n), r != null && W.delete({
        fileId: n,
        versionNumber: r
    }), q.delete(n), J.delete(n), G.delete(n), K.delete(n), Y.delete(n), X.delete(n), Z.delete(n), Q.delete(n)
}

function k(e, t) {
    let n = l(() => U(e));
    n != null && n !== t && W.delete({
        fileId: e,
        versionNumber: n
    }), U.set(e, t)
}
async function A(e, t) {
    let n = c();
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
        currentVersion: _e({
            currentVersionNumber: t.currentVersionNumber,
            page: r
        }) ?? t.currentVersion ?? null
    }
}
async function we({
    fileId: e,
    sourceFile: t,
    versionReason: n
}) {
    let r = T(e);
    if (r.length === 0) return;
    B.set(r, !0);
    let i = l(() => D(r))?.versionNumber ?? null;
    f({
        status: `started`
    });
    try {
        let e = await A(r, await le({
            fileId: r,
            sourceFile: t,
            expectedCurrentVersion: i,
            versionReason: n ?? null
        }));
        return s(() => {
            k(r, void 0), H.set(r, F)
        }), f({
            status: `succeeded`
        }), C(e)
    } catch (e) {
        throw f({
            status: `failed`
        }), e
    } finally {
        B.set(r, !1)
    }
}

function Te({
    entryId: e,
    fileId: t
}) {
    let n = T(t);
    if (n.length === 0 || l(() => X(n))) return;
    let r = l(() => Y(n)).find(t => t.id === e);
    s(() => {
        r?.versionNumber !== U(n) && k(n, void 0), H.set(n, be(r) ?? e)
    }), r && ae()
}
async function j({
    entryId: e,
    fileId: t
}) {
    let n = T(t),
        r = l(() => E(n)).find(t => t.id === e);
    if (n.length === 0 || r == null || !r.canRestore) return;
    let i = l(() => D(n)),
        a = w({
            currentVersionEntry: i,
            entry: r
        });
    p({
        status: `started`
    }), s(() => {
        V.set(n, !0), G.set(n, a), H.set(n, F)
    });
    try {
        let e = C(await A(n, await se({
            fileId: n,
            versionNumber: r.versionNumber,
            expectedCurrentVersion: i?.versionNumber ?? null
        })));
        return p({
            status: `succeeded`
        }), s(() => {
            k(n, void 0), G.set(n, void 0), H.set(n, F)
        }), e
    } catch (e) {
        throw e instanceof re && e.status === 409 && c().invalidateQueries({
            queryKey: g({
                fileId: n,
                limit: I
            }),
            refetchType: `all`
        }), s(() => {
            H.set(n, r.id), G.set(n, void 0)
        }), p({
            status: `failed`
        }), e
    } finally {
        V.set(n, !1)
    }
}

function Ee(e) {
    let t = T(e),
        n = l(() => Z(t));
    return n ? j({
        entryId: n.id,
        fileId: t
    }) : Promise.resolve(void 0)
}

function M(e, t) {
    let n = t == null ? void 0 : l(() => E(e)).find(e => e.versionNumber === t);
    k(e, t), H.set(e, n?.id ?? F), R.set(e, !0)
}

function De(e, t) {
    let n = T(e);
    n.length !== 0 && s(() => {
        M(n, t)
    })
}

function N(e) {
    R.set(e, !0), L.set(e, !0), c().invalidateQueries({
        queryKey: g({
            fileId: e,
            limit: I
        }),
        refetchType: `all`
    })
}

function P(e) {
    let t = T(e);
    t.length !== 0 && s(() => N(t))
}

function Oe(e) {
    let t = T(e);
    t.length !== 0 && L.set(t, !1)
}

function ke(e) {
    let t = T(e),
        n = l(() => U(t));
    t.length === 0 || n == null || c().invalidateQueries({
        queryKey: v({
            fileId: t,
            versionNumber: n
        }).queryKey
    })
}

function Ae(e, t) {
    let n = T(e);
    n.length !== 0 && s(() => {
        M(n, t), N(n)
    })
}

function je(e) {
    let t = T(e);
    t.length !== 0 && s(() => {
        k(t, void 0), R.set(t, !1), L.set(t, !1)
    })
}
var F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, $, Me = e((() => {
    t(), oe(), o(), ee(), te(), ue(), h(), he(), F = `__current__`, I = 20, L = u(e => a(!1)), R = u(e => a(!1)), z = u(e => a(!1)), B = u(e => a(!1)), V = u(e => a(!1)), H = u(e => a(void 0)), U = u(e => a(void 0)), W = u(({
        fileId: e,
        versionNumber: t
    }) => r(() => v({
        fileId: e,
        versionNumber: t
    }), {
        name: `requestedFileVersion:${e}:${t}`
    }), {
        cacheKey: ({
            fileId: e,
            versionNumber: t
        }) => [e, t]
    }), G = u(e => a(void 0)), K = u(e => r(() => _({
        fileId: e,
        limit: I
    }), {
        name: `fileVersionHistory:${e}`
    })), q = u(e => n(() => {
        let t = U(e);
        return t != null && !(K(e).data ?? y).items.some(e => e.versionNumber === t) && W({
            fileId: e,
            versionNumber: t
        }).isFetching
    })), J = u(e => n(() => {
        let t = U(e);
        if (t == null || (K(e).data ?? y).items.some(e => e.versionNumber === t)) return !1;
        let n = W({
            fileId: e,
            versionNumber: t
        });
        return n.isFetched && n.data == null
    })), Y = u(e => n(() => ve({
        entries: E(e),
        pendingCurrentVersionEntry: G(e)
    }), {
        equals: i
    })), X = u(e => n(() => {
        if (V(e)) return !0;
        let t = G(e);
        return t != null && t.isPending === !0
    })), Z = u(e => n(() => ye({
        entries: Y(e),
        selectedVersionId: H(e)
    }))), Q = u(e => n(() => {
        let t = Z(e);
        if (t != null) return Y(e).find(e => e.isCurrent && e.versionNumber > t.versionNumber)
    }, {
        equals: i
    })), $ = new Map
}));
export {
    P as C, Z as S, Ee as _, z as a, Te as b, R as c, Me as d, Q as f, j as g, J as h, we as i, L as l, q as m, je as n, B as o, Ae as p, Ce as r, Y as s, O as t, Oe as u, X as v, De as x, ke as y
};
//# sourceMappingURL=4117f58d-gbkycsyytoquay9v.js.map
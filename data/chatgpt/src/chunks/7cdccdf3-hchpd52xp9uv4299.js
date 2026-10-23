const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/277f528d-ktzzyitdovhc9iew.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-mdvd4786a87166cc.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-bcbq46iub1p0ca1t.js", "assets/30901919-s8bko9nrkqwv6i4f.js", "assets/c470f5ab-jwd0o7jx9i9say9k.js", "assets/0e5afe53-hxm3yzzjqriayom4.js", "assets/conversation-small-ep6mlz5m.css", "assets/8b34dbc2-lmwubajnld74ksfm.js", "assets/82782bc9-b4xbouzwkkyrfqq2.js", "assets/1ef76d03-gzxnjj7xgnaqtv4d.js", "assets/779905f4-i1y1kbmj5l5yd2to.js"]))) => i.map(i => d[i]);
import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as r,
    Da as i,
    GJ as a,
    Oa as o,
    a2 as s,
    dY as c,
    eY as l,
    j5 as u,
    n5 as d,
    o2 as f
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as p,
    O as m,
    Vn as h,
    cn as g,
    ln as _,
    s as v,
    wn as y
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    G6 as b,
    K6 as x,
    MHt as S,
    NHt as C,
    U6 as w,
    W6 as T,
    Z6 as E,
    eM as D,
    q6 as O,
    rM as k,
    tM as A
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    n as j,
    r as M,
    t as N
} from "./d8c30629-fdo8imr26ajctuq2.js";
import {
    r as P,
    t as F
} from "./1ef76d03-gzxnjj7xgnaqtv4d.js";
var I, L = e((() => {
    f(), _(), I = s(() => g(() => import(`./277f528d-ktzzyitdovhc9iew.js`).then(e => e.TPPSitePreviewModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])))
}));

function R(e, t) {
    let n, r = t,
        i = t,
        a = t,
        o;
    for (let s of e) {
        let {
            invocationCandidate: e,
            message: c,
            resultCandidate: l
        } = s;
        e?.projectId != null && (n = e.projectId);
        let u = l?.projectId ?? n;
        u === t && l != null && (l.publishedRevision != null && (o = JSON.stringify([t, `published`, l.publishedRevision])), r = JSON.stringify([c.id, u, l.accessMode, l.availableAccessModes, l.archivePath, l.privacyStatus, l.title, l.url]), l.url != null && (i = JSON.stringify([c.id, u, l.url]), a = c.id))
    }
    return {
        latestResultRevision: r,
        latestUrlResultRevision: i,
        previewRevision: a,
        publishedRevision: o
    }
}
var z = e((() => {})),
    B = t({
        TPPSitePreviewController: () => G,
        TPPSitePreviewResourceController: () => K
    });

function V(e) {
    return e.message
}
var H, U, W, G, K, q = e((() => {
    H = y(), k(), j(), L(), P(), z(), O(), r(), l(), i(), v(), U = n(h()), w(), S(), W = p(), G = e => {
        "use forget";
        let t = (0, H.c)(7),
            {
                conversation: n
            } = e,
            r = u(E),
            i, a;
        if (t[0] === n ? (i = t[1], a = t[2]) : (i = () => d(() => {
                let e = b(n);
                if (e == null || n.serverId$() == null) return;
                let t = new AbortController;
                return T(n, e, t.signal), () => t.abort()
            }), a = [n], t[0] = n, t[1] = i, t[2] = a), (0, U.useEffect)(i, a), r?.conversationId !== n.id) return null;
        let o;
        return t[3] !== n || t[4] !== r.presentation || t[5] !== r.resource ? (o = (0, W.jsx)(K, {
            conversation: n,
            onClose: x,
            presentation: r.presentation,
            previewResource: r.resource
        }), t[3] = n, t[4] = r.presentation, t[5] = r.resource, t[6] = o) : o = t[6], o
    }, K = e => {
        "use forget";
        let t = (0, H.c)(23),
            {
                canManage: n,
                conversation: r,
                onClose: i,
                presentation: s,
                previewResource: l
            } = e,
            u = n === void 0 || n,
            d = s === void 0 ? `fullscreen` : s,
            f = c(r.id, a.getBranch),
            p = C(),
            h = o(),
            g = f.map(V).map(A),
            {
                latestResultRevision: _,
                latestUrlResultRevision: v,
                previewRevision: y,
                publishedRevision: b
            } = R(g, l.projectId),
            x = !h,
            S;
        t[0] !== p || t[1] !== l.projectId || t[2] !== x ? (S = N({
            accountId: p,
            enabled: x,
            projectId: l.projectId
        }), t[0] = p, t[1] = l.projectId, t[2] = x, t[3] = S) : S = t[3];
        let w = m(S),
            [T, E] = (0, U.useState)(() => ({
                initialLatestResultRevision: _,
                initialLatestUrlResultRevision: v,
                latestUrlResultRevision: v,
                preferredLiveUrlUpdatedAt: w.dataUpdatedAt,
                previewResource: l
            }));
        T.previewResource === l ? T.latestUrlResultRevision !== v && E({
            ...T,
            latestUrlResultRevision: v,
            preferredLiveUrlUpdatedAt: w.dataUpdatedAt
        }) : E({
            initialLatestResultRevision: _,
            initialLatestUrlResultRevision: v,
            latestUrlResultRevision: v,
            preferredLiveUrlUpdatedAt: w.dataUpdatedAt,
            previewResource: l
        });
        let O = T.previewResource === l ? T.initialLatestResultRevision : _,
            k = T.previewResource === l ? T.initialLatestUrlResultRevision : v,
            j = T.previewResource === l && T.latestUrlResultRevision === v ? T.preferredLiveUrlUpdatedAt : w.dataUpdatedAt,
            P = D(g, {
                allowAssistantLinkOverrides: !1
            }),
            L = r.config?.isStandaloneSitePreview === !0 && _ === O,
            z = r.config?.isStandaloneSitePreview === !0 && v !== k,
            B = w.dataUpdatedAt > j,
            G;
        t[4] !== P || t[5] !== l || t[6] !== L ? (G = P?.projectId === l.projectId ? L ? {
            ...P,
            accessMode: l.accessMode,
            privacyStatus: l.privacyStatus,
            slug: l.slug
        } : P : l, t[4] = P, t[5] = l, t[6] = L, t[7] = G) : G = t[7];
        let K = G,
            q = h || z && !B ? void 0 : w.data?.live_url,
            J;
        t[8] !== K || t[9] !== q ? (J = M(K, q), t[8] = K, t[9] = q, t[10] = J) : J = t[10];
        let Y = J;
        if (Y == null) return null;
        if (d === `side-pane`) {
            let e = b ?? y,
                n;
            return t[11] !== u || t[12] !== r || t[13] !== Y || t[14] !== i || t[15] !== e ? (n = (0, W.jsx)(F, {
                canManage: u,
                conversation: r,
                onClose: i,
                previewRevision: e,
                resource: Y
            }), t[11] = u, t[12] = r, t[13] = Y, t[14] = i, t[15] = e, t[16] = n) : n = t[16], n
        }
        let X;
        return t[17] !== u || t[18] !== r || t[19] !== Y || t[20] !== i || t[21] !== y ? (X = (0, W.jsx)(I, {
            canManage: u,
            conversation: r,
            onClose: i,
            previewRevision: y,
            resource: Y
        }), t[17] = u, t[18] = r, t[19] = Y, t[20] = i, t[21] = y, t[22] = X) : X = t[22], X
    }
}));
export {
    B as i, K as n, q as r, G as t
};
//# sourceMappingURL=7cdccdf3-hchpd52xp9uv4299.js.map
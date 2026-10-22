const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/277f528d-l6vwjej11jevl4em.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-bo7e0c29ngt4zgx0.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-ikg0dwuw782klweb.js", "assets/30901919-e8h11sw136qen6v0.js", "assets/c470f5ab-ab47eubabs8jspdc.js", "assets/0e5afe53-esm68l11os61djoy.js", "assets/conversation-small-oilgsqfa.css", "assets/8b34dbc2-dtawqv9t1aqckqj4.js", "assets/82782bc9-fcii2id0x6lspwtj.js", "assets/1ef76d03-gidd0y6fckkykjd6.js", "assets/779905f4-jdu27e9cu6ajqusx.js"]))) => i.map(i => d[i]);
import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Da as r,
    Ea as i,
    JJ as a,
    P5 as o,
    X0 as s,
    Z0 as c,
    a5 as l,
    g8 as u,
    mY as d,
    rY as f
} from "./4813494d-bo7e0c29ngt4zgx0.js";
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
    $j as b,
    B6 as x,
    H6 as S,
    HHt as C,
    J6 as w,
    U6 as T,
    UHt as E,
    V6 as D,
    W6 as O,
    eM as k,
    nM as A
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    n as j,
    r as M,
    t as N
} from "./d8c30629-fhxf5tk4nlyp29k4.js";
import {
    r as P,
    t as F
} from "./1ef76d03-gidd0y6fckkykjd6.js";
var I, L = e((() => {
    c(), _(), I = s(() => g(() => import(`./277f528d-l6vwjej11jevl4em.js`).then(e => e.TPPSitePreviewModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])))
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
    H = y(), A(), j(), L(), P(), z(), O(), u(), f(), i(), v(), U = n(h()), x(), C(), W = p(), G = e => {
        "use forget";
        let t = (0, H.c)(7),
            {
                conversation: n
            } = e,
            r = o(w),
            i, a;
        if (t[0] === n ? (i = t[1], a = t[2]) : (i = () => l(() => {
                let e = S(n);
                if (e == null || n.serverId$() == null) return;
                let t = new AbortController;
                return D(n, e, t.signal), () => t.abort()
            }), a = [n], t[0] = n, t[1] = i, t[2] = a), (0, U.useEffect)(i, a), r?.conversationId !== n.id) return null;
        let s;
        return t[3] !== n || t[4] !== r.presentation || t[5] !== r.resource ? (s = (0, W.jsx)(K, {
            conversation: n,
            onClose: T,
            presentation: r.presentation,
            previewResource: r.resource
        }), t[3] = n, t[4] = r.presentation, t[5] = r.resource, t[6] = s) : s = t[6], s
    }, K = e => {
        "use forget";
        let t = (0, H.c)(23),
            {
                canManage: n,
                conversation: i,
                onClose: o,
                presentation: s,
                previewResource: c
            } = e,
            l = n === void 0 || n,
            u = s === void 0 ? `fullscreen` : s,
            f = d(i.id, a.getBranch),
            p = E(),
            h = r(),
            g = f.map(V).map(k),
            {
                latestResultRevision: _,
                latestUrlResultRevision: v,
                previewRevision: y,
                publishedRevision: x
            } = R(g, c.projectId),
            S = !h,
            C;
        t[0] !== p || t[1] !== c.projectId || t[2] !== S ? (C = N({
            accountId: p,
            enabled: S,
            projectId: c.projectId
        }), t[0] = p, t[1] = c.projectId, t[2] = S, t[3] = C) : C = t[3];
        let w = m(C),
            [T, D] = (0, U.useState)(() => ({
                initialLatestResultRevision: _,
                initialLatestUrlResultRevision: v,
                latestUrlResultRevision: v,
                preferredLiveUrlUpdatedAt: w.dataUpdatedAt,
                previewResource: c
            }));
        T.previewResource === c ? T.latestUrlResultRevision !== v && D({
            ...T,
            latestUrlResultRevision: v,
            preferredLiveUrlUpdatedAt: w.dataUpdatedAt
        }) : D({
            initialLatestResultRevision: _,
            initialLatestUrlResultRevision: v,
            latestUrlResultRevision: v,
            preferredLiveUrlUpdatedAt: w.dataUpdatedAt,
            previewResource: c
        });
        let O = T.previewResource === c ? T.initialLatestResultRevision : _,
            A = T.previewResource === c ? T.initialLatestUrlResultRevision : v,
            j = T.previewResource === c && T.latestUrlResultRevision === v ? T.preferredLiveUrlUpdatedAt : w.dataUpdatedAt,
            P = b(g, {
                allowAssistantLinkOverrides: !1
            }),
            L = i.config?.isStandaloneSitePreview === !0 && _ === O,
            z = i.config?.isStandaloneSitePreview === !0 && v !== A,
            B = w.dataUpdatedAt > j,
            G;
        t[4] !== P || t[5] !== c || t[6] !== L ? (G = P?.projectId === c.projectId ? L ? {
            ...P,
            accessMode: c.accessMode,
            privacyStatus: c.privacyStatus,
            slug: c.slug
        } : P : c, t[4] = P, t[5] = c, t[6] = L, t[7] = G) : G = t[7];
        let K = G,
            q = h || z && !B ? void 0 : w.data?.live_url,
            J;
        t[8] !== K || t[9] !== q ? (J = M(K, q), t[8] = K, t[9] = q, t[10] = J) : J = t[10];
        let Y = J;
        if (Y == null) return null;
        if (u === `side-pane`) {
            let e = x ?? y,
                n;
            return t[11] !== l || t[12] !== i || t[13] !== Y || t[14] !== o || t[15] !== e ? (n = (0, W.jsx)(F, {
                canManage: l,
                conversation: i,
                onClose: o,
                previewRevision: e,
                resource: Y
            }), t[11] = l, t[12] = i, t[13] = Y, t[14] = o, t[15] = e, t[16] = n) : n = t[16], n
        }
        let X;
        return t[17] !== l || t[18] !== i || t[19] !== Y || t[20] !== o || t[21] !== y ? (X = (0, W.jsx)(I, {
            canManage: l,
            conversation: i,
            onClose: o,
            previewRevision: y,
            resource: Y
        }), t[17] = l, t[18] = i, t[19] = Y, t[20] = o, t[21] = y, t[22] = X) : X = t[22], X
    }
}));
export {
    B as i, K as n, q as r, G as t
};
//# sourceMappingURL=7cdccdf3-ktok05c7a57d2uuy.js.map
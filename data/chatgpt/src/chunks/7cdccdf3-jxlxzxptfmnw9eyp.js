const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/277f528d-i2wxfrizy772t31c.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-d7xm9wsvhdfbag9a.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-m7dgsxtvvivh3e6t.js", "assets/30901919-lc79rizhhepnsl3q.js", "assets/c470f5ab-lnsrbaizit3lulwq.js", "assets/0e5afe53-lar0ol3v36kqq3ou.js", "assets/conversation-small-ertg9659.css", "assets/8b34dbc2-ik628tlti8ozm9vq.js", "assets/82782bc9-cyj0qqxyrvk6mamy.js", "assets/1ef76d03-fm13wo4aw3ce0w59.js", "assets/779905f4-lcf6rqdga2mp7ikw.js"]))) => i.map(i => d[i]);
import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as r,
    Da as i,
    GJ as a,
    J5 as o,
    Oa as s,
    a2 as c,
    dY as l,
    eY as u,
    o2 as d,
    y5 as f
} from "./4813494d-d7xm9wsvhdfbag9a.js";
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
    BHt as b,
    G6 as x,
    K6 as S,
    U6 as C,
    W6 as w,
    Z6 as T,
    eM as E,
    q6 as D,
    rM as O,
    tM as k,
    zHt as A
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    n as j,
    r as M,
    t as N
} from "./d8c30629-b8kvz4vzkgqcbcls.js";
import {
    r as P,
    t as F
} from "./1ef76d03-fm13wo4aw3ce0w59.js";
var I, L = e((() => {
    d(), _(), I = c(() => g(() => import(`./277f528d-i2wxfrizy772t31c.js`).then(e => e.TPPSitePreviewModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])))
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
    H = y(), O(), j(), L(), P(), z(), D(), r(), u(), i(), v(), U = n(h()), C(), A(), W = p(), G = e => {
        "use forget";
        let t = (0, H.c)(7),
            {
                conversation: n
            } = e,
            r = o(T),
            i, a;
        if (t[0] === n ? (i = t[1], a = t[2]) : (i = () => f(() => {
                let e = x(n);
                if (e == null || n.serverId$() == null) return;
                let t = new AbortController;
                return w(n, e, t.signal), () => t.abort()
            }), a = [n], t[0] = n, t[1] = i, t[2] = a), (0, U.useEffect)(i, a), r?.conversationId !== n.id) return null;
        let s;
        return t[3] !== n || t[4] !== r.presentation || t[5] !== r.resource ? (s = (0, W.jsx)(K, {
            conversation: n,
            onClose: S,
            presentation: r.presentation,
            previewResource: r.resource
        }), t[3] = n, t[4] = r.presentation, t[5] = r.resource, t[6] = s) : s = t[6], s
    }, K = e => {
        "use forget";
        let t = (0, H.c)(23),
            {
                canManage: n,
                conversation: r,
                onClose: i,
                presentation: o,
                previewResource: c
            } = e,
            u = n === void 0 || n,
            d = o === void 0 ? `fullscreen` : o,
            f = l(r.id, a.getBranch),
            p = b(),
            h = s(),
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
            P = E(g, {
                allowAssistantLinkOverrides: !1
            }),
            L = r.config?.isStandaloneSitePreview === !0 && _ === O,
            z = r.config?.isStandaloneSitePreview === !0 && v !== A,
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
        if (d === `side-pane`) {
            let e = x ?? y,
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
//# sourceMappingURL=7cdccdf3-jxlxzxptfmnw9eyp.js.map
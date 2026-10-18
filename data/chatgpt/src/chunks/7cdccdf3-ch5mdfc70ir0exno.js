const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/277f528d-knsr2a7ku7g5jio4.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/conversation-small-fym1zmu9zimymmm1.js", "assets/30901919-e33mbl5u1y88w5wu.js", "assets/c470f5ab-m68dth1hatzjj8yh.js", "assets/0e5afe53-dl0nq2u2siu8c8q5.js", "assets/conversation-small-iha453gv.css", "assets/8b34dbc2-gf9wnwcahty27ylx.js", "assets/82782bc9-h658ejxn3ufkvr7a.js", "assets/1ef76d03-k6e5etemttcbmou4.js", "assets/779905f4-lnxlgbttoml8sfyn.js"]))) => i.map(i => d[i]);
import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AJ as r,
    B6 as i,
    C0 as a,
    Da as o,
    Ea as s,
    S0 as c,
    VJ as l,
    i5 as u,
    k8 as d,
    xJ as f
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as p,
    O as m,
    Vn as h,
    cn as g,
    ln as _,
    s as v,
    wn as y
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    F6 as b,
    I6 as x,
    IHt as S,
    Jj as C,
    L6 as w,
    LHt as T,
    R6 as E,
    U6 as D,
    Yj as O,
    Zj as k,
    z6 as A
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    n as j,
    r as M,
    t as N
} from "./d8c30629-hxy6vraw9wlimdke.js";
import {
    r as P,
    t as F
} from "./1ef76d03-k6e5etemttcbmou4.js";
var I, L = e((() => {
    a(), _(), I = c(() => g(() => import(`./277f528d-knsr2a7ku7g5jio4.js`).then(e => e.TPPSitePreviewModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])))
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
    H = y(), k(), j(), L(), P(), z(), A(), i(), r(), s(), v(), U = n(h()), b(), S(), W = p(), G = e => {
        "use forget";
        let t = (0, H.c)(7),
            {
                conversation: n
            } = e,
            r = u(D),
            i, a;
        if (t[0] === n ? (i = t[1], a = t[2]) : (i = () => d(() => {
                let e = w(n);
                if (e == null || n.serverId$() == null) return;
                let t = new AbortController;
                return x(n, e, t.signal), () => t.abort()
            }), a = [n], t[0] = n, t[1] = i, t[2] = a), (0, U.useEffect)(i, a), r?.conversationId !== n.id) return null;
        let o;
        return t[3] !== n || t[4] !== r.presentation || t[5] !== r.resource ? (o = (0, W.jsx)(K, {
            conversation: n,
            onClose: E,
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
                presentation: a,
                previewResource: s
            } = e,
            c = n === void 0 || n,
            u = a === void 0 ? `fullscreen` : a,
            d = l(r.id, f.getBranch),
            p = T(),
            h = o(),
            g = d.map(V).map(O),
            {
                latestResultRevision: _,
                latestUrlResultRevision: v,
                previewRevision: y,
                publishedRevision: b
            } = R(g, s.projectId),
            x = !h,
            S;
        t[0] !== p || t[1] !== s.projectId || t[2] !== x ? (S = N({
            accountId: p,
            enabled: x,
            projectId: s.projectId
        }), t[0] = p, t[1] = s.projectId, t[2] = x, t[3] = S) : S = t[3];
        let w = m(S),
            [E, D] = (0, U.useState)(() => ({
                initialLatestResultRevision: _,
                initialLatestUrlResultRevision: v,
                latestUrlResultRevision: v,
                preferredLiveUrlUpdatedAt: w.dataUpdatedAt,
                previewResource: s
            }));
        E.previewResource === s ? E.latestUrlResultRevision !== v && D({
            ...E,
            latestUrlResultRevision: v,
            preferredLiveUrlUpdatedAt: w.dataUpdatedAt
        }) : D({
            initialLatestResultRevision: _,
            initialLatestUrlResultRevision: v,
            latestUrlResultRevision: v,
            preferredLiveUrlUpdatedAt: w.dataUpdatedAt,
            previewResource: s
        });
        let k = E.previewResource === s ? E.initialLatestResultRevision : _,
            A = E.previewResource === s ? E.initialLatestUrlResultRevision : v,
            j = E.previewResource === s && E.latestUrlResultRevision === v ? E.preferredLiveUrlUpdatedAt : w.dataUpdatedAt,
            P = C(g, {
                allowAssistantLinkOverrides: !1
            }),
            L = r.config?.isStandaloneSitePreview === !0 && _ === k,
            z = r.config?.isStandaloneSitePreview === !0 && v !== A,
            B = w.dataUpdatedAt > j,
            G;
        t[4] !== P || t[5] !== s || t[6] !== L ? (G = P?.projectId === s.projectId ? L ? {
            ...P,
            accessMode: s.accessMode,
            privacyStatus: s.privacyStatus,
            slug: s.slug
        } : P : s, t[4] = P, t[5] = s, t[6] = L, t[7] = G) : G = t[7];
        let K = G,
            q = h || z && !B ? void 0 : w.data?.live_url,
            J;
        t[8] !== K || t[9] !== q ? (J = M(K, q), t[8] = K, t[9] = q, t[10] = J) : J = t[10];
        let Y = J;
        if (Y == null) return null;
        if (u === `side-pane`) {
            let e = b ?? y,
                n;
            return t[11] !== c || t[12] !== r || t[13] !== Y || t[14] !== i || t[15] !== e ? (n = (0, W.jsx)(F, {
                canManage: c,
                conversation: r,
                onClose: i,
                previewRevision: e,
                resource: Y
            }), t[11] = c, t[12] = r, t[13] = Y, t[14] = i, t[15] = e, t[16] = n) : n = t[16], n
        }
        let X;
        return t[17] !== c || t[18] !== r || t[19] !== Y || t[20] !== i || t[21] !== y ? (X = (0, W.jsx)(I, {
            canManage: c,
            conversation: r,
            onClose: i,
            previewRevision: y,
            resource: Y
        }), t[17] = c, t[18] = r, t[19] = Y, t[20] = i, t[21] = y, t[22] = X) : X = t[22], X
    }
}));
export {
    B as i, K as n, q as r, G as t
};
//# sourceMappingURL=7cdccdf3-ch5mdfc70ir0exno.js.map
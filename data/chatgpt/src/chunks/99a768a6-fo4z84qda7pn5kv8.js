const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/0942d205-bce0oi6gbf6rmfrm.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-d7xm9wsvhdfbag9a.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-m7dgsxtvvivh3e6t.js", "assets/30901919-lc79rizhhepnsl3q.js", "assets/c470f5ab-lnsrbaizit3lulwq.js", "assets/0e5afe53-lar0ol3v36kqq3ou.js", "assets/conversation-small-ertg9659.css", "assets/7f43a190-gfv8njndfdxthh17.js", "assets/8b34dbc2-ik628tlti8ozm9vq.js", "assets/82782bc9-cyj0qqxyrvk6mamy.js", "assets/3e88eafe-lxil873pfmml13nu.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as n,
    $J as r,
    $T as i,
    A8 as a,
    Da as o,
    EJ as s,
    Eat as c,
    GJ as l,
    IU as u,
    J5 as ee,
    LU as d,
    Lnt as te,
    N1 as f,
    Oa as ne,
    Y7 as p,
    ZW as m,
    a2 as h,
    bF as re,
    c2 as g,
    d2 as ie,
    dY as ae,
    e2 as _,
    eE as v,
    eY as y,
    g2 as oe,
    gF as b,
    grt as x,
    hrt as S,
    o2 as C,
    q1 as w,
    qW as T,
    urt as se,
    vF as E,
    wJ as D,
    wat as O,
    znt as ce
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    At as le,
    Bn as ue,
    In as k,
    Nn as A,
    Nt as de,
    Q as fe,
    Rn as j,
    Vn as pe,
    cn as M,
    ln as N,
    wn as P,
    zn as F
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    C6 as I,
    E6 as L,
    Fin as R,
    Iin as z
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    bS as B,
    yS as me
} from "./30901919-lc79rizhhepnsl3q.js";
import {
    n as he,
    r as V,
    t as H
} from "./3e88eafe-lxil873pfmml13nu.js";
import {
    n as U,
    r as ge,
    t as W
} from "./56dee4d8-hoog6mhihcjarved.js";
var G, K, _e = e((() => {
        j(), G = k({
            id: `chatgpt.sites.preview.header.title`,
            defaultMessage: `Site preview`
        }), K = k({
            id: `chatgpt.sites.preview.loading.frame`,
            defaultMessage: `Loading site`
        })
    })),
    q, ve = e((() => {
        C(), N(), q = h(() => M(() => import(`./0942d205-bce0oi6gbf6rmfrm.js`).then(e => e.SitesPreviewUpgradeModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])))
    }));

function J(e, t) {
    let n = new URLSearchParams(e),
        r = n.get(`temporary-chat`) === `true` || n.get(`training_disabled`) === `true`;
    if (r) throw new H(`temporary`);
    let i = f();
    if (i == null || !i.isPersonalAccount()) throw new H(`accountChanged`);
    let {
        threadId: a,
        branchMessageId: o,
        libraryFileId: c,
        fileName: l
    } = be(t);
    if (s({
            conversationId: a
        })) throw Error(`Locked preview`);
    return {
        threadId: a,
        target: {
            accountId: i.id,
            branchMessageId: o,
            libraryFileId: c,
            fileName: l,
            temporaryChat: r
        }
    }
}
async function ye(e, t, n) {
    let {
        threadId: r,
        target: i
    } = J(e, n), a = f();
    if (a == null || !a.isPlus() && !a.isProTier()) throw new H(`unavailable`);
    let o = await p.safeGet(`/websites/access`, {
        signal: t
    });
    t.throwIfAborted();
    let s = f();
    if (s == null || s.id !== a.id) throw Error(`Account changed`);
    if (o.enabled && m()) return {
        threadId: r,
        target: i
    };
    throw new H(`unavailable`)
}

function be(e) {
    if (e != null) {
        let {
            conversation: t,
            libraryFileId: n,
            fileName: r,
            origin: i
        } = e;
        if (s({
                conversationId: t.id
            })) throw Error(`Locked preview`);
        if (i != null) {
            if (!z(i.conversationId) || !i.messageId) throw new H(`sourceChanged`);
            return {
                threadId: i.conversationId,
                branchMessageId: i.messageId,
                libraryFileId: n,
                fileName: r
            }
        }
        let a = U(W(t), n);
        if (a?.previewType !== `sites`) throw new H(`sourceChanged`);
        return {
            ...Y(t),
            libraryFileId: n,
            fileName: a.libraryFileName ?? `index.html`
        }
    }
    let t = I();
    if (t == null || t.conversationId == null || t.source.messageId == null || t.source.libraryFileId == null || t.isOriginalVersion === !0 || t.versionNumber != null) throw new H(`sourceChanged`);
    let n = b(t.conversationId),
        r = U(W(n), t.source.libraryFileId);
    return {
        ...Y(n),
        libraryFileId: t.source.libraryFileId,
        fileName: r?.libraryFileName ?? `index.html`
    }
}

function Y(e) {
    let t = e.serverId$(),
        n = l.getLastAssistantMessageForBranching(r(e.id));
    if (t == null || n == null) throw new H(`sourceChanged`);
    return {
        threadId: t,
        branchMessageId: n.id
    }
}

function xe() {
    return M(() => import(`./7f43a190-gfv8njndfdxthh17.js`), __vite__mapDeps([10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13]))
}

function Se(e) {
    return e?.sharedProjectConversationOwner?.id
}
var X, Z, Q, $, Ce = e((() => {
    X = P(), v(), R(), _(), L(), ge(), E(), me(), g(), a(), w(), y(), d(), ce(), o(), T(), D(), n(), c(), x(), Z = t(pe()), j(), fe(), he(), ve(), Q = ue(), N(), $ = e => {
        "use forget";
        let t = (0, X.c)(19),
            {
                conversationId: n,
                librarySource: r
            } = e,
            a = F(),
            o = le(),
            s = de(),
            c = re(),
            l = ne(),
            d = ae(r?.conversation.id ?? c?.id, Se),
            p = (0, Z.useRef)(null),
            m, h;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (m = () => () => p.current?.abort(), h = [], t[0] = m, t[1] = h) : (m = t[0], h = t[1]), (0, Z.useEffect)(m, h);
        let [g, _] = (0, Z.useState)(!1), v = oe(q), y;
        t[2] !== l || t[3] !== d ? (y = () => {
            let e = f();
            return e == null || !e.isPersonalAccount() || l || d != null && d !== e.normalizedAccountUserId ? null : e.isPlus() || e.isProTier() ? `publish` : (e.isFree() || e.isGo()) && se(`3226734443`, {
                disableExposureLog: !0
            }) && S(`933354605`).get(`show_share_button`, !1) ? `share` : null
        }, t[2] = l, t[3] = d, t[4] = y) : y = t[4];
        let b = ee(y),
            x;
        t[5] !== b || t[6] !== n || t[7] !== a || t[8] !== r || t[9] !== o || t[10] !== s ? (x = async e => {
            if (p.current != null) return;
            if (te.logStructuredEvent(b === `publish` ? `ChatgptSiteLitePublishClicked` : `ChatgptSiteLiteShareClicked`, {
                    conversationId: n
                }), b === `share`) {
                ie(q, {
                    getHandoffContext$: () => J(o.search, r)
                });
                return
            }
            let t = new AbortController;
            p.current = t, _(!0);
            try {
                let n = await ye(o.search, t.signal, r);
                t.signal.throwIfAborted();
                let {
                    submitSitesPreviewWorkTask: i
                } = await xe();
                t.signal.throwIfAborted();
                let c = await i({
                    target: n.target,
                    intl: a,
                    sourceEvent: e,
                    signal: t.signal
                });
                t.signal.aborted || s(`/c/${c}?surface=work`)
            } catch (e) {
                let n = e;
                t.signal.aborted || (n instanceof H ? u().danger(a.formatMessage(V[n.reason])) : (O.addError(n, {
                    source: `sites_preview_work_handoff`
                }), u().danger(a.formatMessage(V.failed))))
            }
            p.current = null, t.signal.aborted || _(!1)
        }, t[5] = b, t[6] = n, t[7] = a, t[8] = r, t[9] = o, t[10] = s, t[11] = x) : x = t[11];
        let C = x;
        if (b == null) return null;
        let w = v ? `primary` : `secondary`,
            T;
        t[12] === b ? T = t[13] : (T = b === `publish` ? (0, Q.jsx)(A, {
            id: `chatgpt.sites.preview.publish.button.label`,
            defaultMessage: `Publish`
        }) : (0, Q.jsx)(A, {
            id: `chatgpt.sites.preview.share.button.label`,
            defaultMessage: `Share`
        }), t[12] = b, t[13] = T);
        let E;
        return t[14] !== g || t[15] !== C || t[16] !== w || t[17] !== T ? (E = (0, Q.jsx)(i, {
            className: `tracking-[-0.15px]`,
            color: w,
            icon: B,
            iconClassName: `ms-0`,
            onClick: C,
            disabled: g,
            loading: g,
            size: `medium`,
            type: `button`,
            children: T
        }), t[14] = g, t[15] = C, t[16] = w, t[17] = T, t[18] = E) : E = t[18], E
    }
}));
export {
    G as a, K as i, Ce as n, _e as r, $ as t
};
//# sourceMappingURL=99a768a6-fo4z84qda7pn5kv8.js.map
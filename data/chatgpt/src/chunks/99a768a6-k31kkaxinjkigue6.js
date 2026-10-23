const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/0942d205-o0kppmm4aryf9n4y.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-mdvd4786a87166cc.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-bcbq46iub1p0ca1t.js", "assets/30901919-s8bko9nrkqwv6i4f.js", "assets/c470f5ab-jwd0o7jx9i9say9k.js", "assets/0e5afe53-hxm3yzzjqriayom4.js", "assets/conversation-small-ep6mlz5m.css", "assets/7f43a190-h8y6zupmnadzoi1u.js", "assets/8b34dbc2-lmwubajnld74ksfm.js", "assets/82782bc9-b4xbouzwkkyrfqq2.js", "assets/3e88eafe-b2zpko2gc4dzatw6.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $J as n,
    $T as r,
    A8 as i,
    Crt as a,
    Da as o,
    EJ as s,
    GJ as c,
    I7 as l,
    IU as u,
    Knt as d,
    LU as f,
    M7 as p,
    N1 as m,
    Nat as h,
    Oa as ee,
    Srt as te,
    Wnt as ne,
    ZW as g,
    _rt as re,
    a2 as _,
    bF as ie,
    c2 as v,
    d2 as ae,
    dY as oe,
    e2 as y,
    eE as b,
    eY as x,
    g2 as S,
    gF as C,
    j5 as w,
    jat as se,
    o2 as T,
    q1 as E,
    qW as D,
    vF as O,
    wJ as ce
} from "./4813494d-mdvd4786a87166cc.js";
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
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    _S as B,
    vS as me
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    n as he,
    r as V,
    t as H
} from "./3e88eafe-b2zpko2gc4dzatw6.js";
import {
    n as U,
    r as ge,
    t as W
} from "./56dee4d8-ltugsd768vbpvhik.js";
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
        T(), N(), q = _(() => M(() => import(`./0942d205-o0kppmm4aryf9n4y.js`).then(e => e.SitesPreviewUpgradeModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])))
    }));

function J(e, t) {
    let n = new URLSearchParams(e),
        r = n.get(`temporary-chat`) === `true` || n.get(`training_disabled`) === `true`;
    if (r) throw new H(`temporary`);
    let i = m();
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
    } = J(e, n), a = m();
    if (a == null || !a.isPlus() && !a.isProTier()) throw new H(`unavailable`);
    let o = await p.safeGet(`/websites/access`, {
        signal: t
    });
    t.throwIfAborted();
    let s = m();
    if (s == null || s.id !== a.id) throw Error(`Account changed`);
    if (o.enabled && g()) return {
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
    let n = C(t.conversationId),
        r = U(W(n), t.source.libraryFileId);
    return {
        ...Y(n),
        libraryFileId: t.source.libraryFileId,
        fileName: r?.libraryFileName ?? `index.html`
    }
}

function Y(e) {
    let t = e.serverId$(),
        r = c.getLastAssistantMessageForBranching(n(e.id));
    if (t == null || r == null) throw new H(`sourceChanged`);
    return {
        threadId: t,
        branchMessageId: r.id
    }
}

function xe() {
    return M(() => import(`./7f43a190-h8y6zupmnadzoi1u.js`), __vite__mapDeps([10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13]))
}

function Se(e) {
    return e?.sharedProjectConversationOwner?.id
}
var X, Z, Q, $, Ce = e((() => {
    X = P(), b(), R(), y(), L(), ge(), O(), B(), v(), i(), E(), x(), f(), d(), o(), D(), ce(), l(), h(), a(), Z = t(pe()), j(), fe(), he(), ve(), Q = ue(), N(), $ = e => {
        "use forget";
        let t = (0, X.c)(19),
            {
                conversationId: n,
                librarySource: i
            } = e,
            a = F(),
            o = le(),
            s = de(),
            c = ie(),
            l = ee(),
            d = oe(i?.conversation.id ?? c?.id, Se),
            f = (0, Z.useRef)(null),
            p, h;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (p = () => () => f.current?.abort(), h = [], t[0] = p, t[1] = h) : (p = t[0], h = t[1]), (0, Z.useEffect)(p, h);
        let [g, _] = (0, Z.useState)(!1), v = S(q), y;
        t[2] !== l || t[3] !== d ? (y = () => {
            let e = m();
            return e == null || !e.isPersonalAccount() || l || d != null && d !== e.normalizedAccountUserId ? null : e.isPlus() || e.isProTier() ? `publish` : (e.isFree() || e.isGo()) && re(`3226734443`, {
                disableExposureLog: !0
            }) && te(`933354605`).get(`show_share_button`, !1) ? `share` : null
        }, t[2] = l, t[3] = d, t[4] = y) : y = t[4];
        let b = w(y),
            x;
        t[5] !== b || t[6] !== n || t[7] !== a || t[8] !== i || t[9] !== o || t[10] !== s ? (x = async e => {
            if (f.current != null) return;
            if (ne.logStructuredEvent(b === `publish` ? `ChatgptSiteLitePublishClicked` : `ChatgptSiteLiteShareClicked`, {
                    conversationId: n
                }), b === `share`) {
                ae(q, {
                    getHandoffContext$: () => J(o.search, i)
                });
                return
            }
            let t = new AbortController;
            f.current = t, _(!0);
            try {
                let n = await ye(o.search, t.signal, i);
                t.signal.throwIfAborted();
                let {
                    submitSitesPreviewWorkTask: r
                } = await xe();
                t.signal.throwIfAborted();
                let c = await r({
                    target: n.target,
                    intl: a,
                    sourceEvent: e,
                    signal: t.signal
                });
                t.signal.aborted || s(`/c/${c}?surface=work`)
            } catch (e) {
                let n = e;
                t.signal.aborted || (n instanceof H ? u().danger(a.formatMessage(V[n.reason])) : (se.addError(n, {
                    source: `sites_preview_work_handoff`
                }), u().danger(a.formatMessage(V.failed))))
            }
            f.current = null, t.signal.aborted || _(!1)
        }, t[5] = b, t[6] = n, t[7] = a, t[8] = i, t[9] = o, t[10] = s, t[11] = x) : x = t[11];
        let C = x;
        if (b == null) return null;
        let T = v ? `primary` : `secondary`,
            E;
        t[12] === b ? E = t[13] : (E = b === `publish` ? (0, Q.jsx)(A, {
            id: `chatgpt.sites.preview.publish.button.label`,
            defaultMessage: `Publish`
        }) : (0, Q.jsx)(A, {
            id: `chatgpt.sites.preview.share.button.label`,
            defaultMessage: `Share`
        }), t[12] = b, t[13] = E);
        let D;
        return t[14] !== g || t[15] !== C || t[16] !== T || t[17] !== E ? (D = (0, Q.jsx)(r, {
            className: `tracking-[-0.15px]`,
            color: T,
            icon: me,
            iconClassName: `ms-0`,
            onClick: C,
            disabled: g,
            loading: g,
            size: `medium`,
            type: `button`,
            children: E
        }), t[14] = g, t[15] = C, t[16] = T, t[17] = E, t[18] = D) : D = t[18], D
    }
}));
export {
    G as a, K as i, Ce as n, _e as r, $ as t
};
//# sourceMappingURL=99a768a6-k31kkaxinjkigue6.js.map
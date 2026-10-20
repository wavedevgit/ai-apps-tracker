const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/0942d205-jn9rdx4gvwqgv5fw.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-bo7e0c29ngt4zgx0.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-ikg0dwuw782klweb.js", "assets/30901919-e8h11sw136qen6v0.js", "assets/c470f5ab-ab47eubabs8jspdc.js", "assets/0e5afe53-esm68l11os61djoy.js", "assets/conversation-small-oilgsqfa.css", "assets/7f43a190-bdg0vwhdvg57iiuu.js", "assets/8b34dbc2-dtawqv9t1aqckqj4.js", "assets/82782bc9-fcii2id0x6lspwtj.js", "assets/3e88eafe-hciy4izy3db82w7l.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $0 as n,
    BU as r,
    DJ as i,
    Da as a,
    Ea as o,
    F7 as s,
    G0 as c,
    Gnt as l,
    JJ as u,
    JT as ee,
    P5 as te,
    R1 as d,
    X0 as f,
    XW as p,
    Xnt as ne,
    YT as m,
    Z0 as h,
    Znt as g,
    aat as _,
    bnt as v,
    dF as y,
    eG as b,
    g8 as x,
    hF as re,
    kJ as S,
    mY as ie,
    n2 as ae,
    nY as C,
    pF as w,
    rY as T,
    s2 as oe,
    sat as se,
    vnt as ce,
    w1 as E,
    z7 as D,
    zU as O
} from "./4813494d-bo7e0c29ngt4zgx0.js";
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
    Din as L,
    Ein as R,
    b6 as z
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    bS as B,
    yS as me
} from "./30901919-e8h11sw136qen6v0.js";
import {
    n as he,
    r as V,
    t as H
} from "./3e88eafe-hciy4izy3db82w7l.js";
import {
    n as U,
    r as ge,
    t as W
} from "./56dee4d8-jzvub6hoel5vk1wt.js";
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
        h(), N(), q = f(() => M(() => import(`./0942d205-jn9rdx4gvwqgv5fw.js`).then(e => e.SitesPreviewUpgradeModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])))
    }));

function J(e, t) {
    let n = new URLSearchParams(e),
        r = n.get(`temporary-chat`) === `true` || n.get(`training_disabled`) === `true`;
    if (r) throw new H(`temporary`);
    let i = E();
    if (i == null || !i.isPersonalAccount()) throw new H(`accountChanged`);
    let {
        threadId: a,
        branchMessageId: o,
        libraryFileId: s,
        fileName: c
    } = be(t);
    if (S({
            conversationId: a
        })) throw Error(`Locked preview`);
    return {
        threadId: a,
        target: {
            accountId: i.id,
            branchMessageId: o,
            libraryFileId: s,
            fileName: c,
            temporaryChat: r
        }
    }
}
async function ye(e, t, n) {
    let {
        threadId: r,
        target: i
    } = J(e, n), a = E();
    if (a == null || !a.isPlus() && !a.isProTier()) throw new H(`unavailable`);
    let o = await s.safeGet(`/websites/access`, {
        signal: t
    });
    t.throwIfAborted();
    let c = E();
    if (c == null || c.id !== a.id) throw Error(`Account changed`);
    if (o.enabled && b()) return {
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
        if (S({
                conversationId: t.id
            })) throw Error(`Locked preview`);
        if (i != null) {
            if (!L(i.conversationId) || !i.messageId) throw new H(`sourceChanged`);
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
    let t = z();
    if (t == null || t.conversationId == null || t.source.messageId == null || t.source.libraryFileId == null || t.isOriginalVersion === !0 || t.versionNumber != null) throw new H(`sourceChanged`);
    let n = y(t.conversationId),
        r = U(W(n), t.source.libraryFileId);
    return {
        ...Y(n),
        libraryFileId: t.source.libraryFileId,
        fileName: r?.libraryFileName ?? `index.html`
    }
}

function Y(e) {
    let t = e.serverId$(),
        n = u.getLastAssistantMessageForBranching(C(e.id));
    if (t == null || n == null) throw new H(`sourceChanged`);
    return {
        threadId: t,
        branchMessageId: n.id
    }
}

function xe() {
    return M(() => import(`./7f43a190-bdg0vwhdvg57iiuu.js`), __vite__mapDeps([10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13]))
}

function Se(e) {
    return e?.sharedProjectConversationOwner?.id
}
var X, Z, Q, $, Ce = e((() => {
    X = P(), m(), R(), c(), I(), ge(), w(), me(), n(), x(), d(), T(), r(), v(), o(), p(), i(), D(), se(), g(), Z = t(pe()), j(), fe(), he(), ve(), Q = ue(), N(), $ = e => {
        "use forget";
        let t = (0, X.c)(19),
            {
                conversationId: n,
                librarySource: r
            } = e,
            i = F(),
            o = le(),
            s = de(),
            c = re(),
            u = a(),
            d = ie(r?.conversation.id ?? c?.id, Se),
            f = (0, Z.useRef)(null),
            p, m;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (p = () => () => f.current?.abort(), m = [], t[0] = p, t[1] = m) : (p = t[0], m = t[1]), (0, Z.useEffect)(p, m);
        let [h, g] = (0, Z.useState)(!1), v = oe(q), y;
        t[2] !== u || t[3] !== d ? (y = () => {
            let e = E();
            return e == null || !e.isPersonalAccount() || u || d != null && d !== e.normalizedAccountUserId ? null : e.isPlus() || e.isProTier() ? `publish` : (e.isFree() || e.isGo()) && l(`3226734443`, {
                disableExposureLog: !0
            }) && ne(`933354605`).get(`show_share_button`, !1) ? `share` : null
        }, t[2] = u, t[3] = d, t[4] = y) : y = t[4];
        let b = te(y),
            x;
        t[5] !== b || t[6] !== n || t[7] !== i || t[8] !== r || t[9] !== o || t[10] !== s ? (x = async e => {
            if (f.current != null) return;
            if (ce.logStructuredEvent(b === `publish` ? `ChatgptSiteLitePublishClicked` : `ChatgptSiteLiteShareClicked`, {
                    conversationId: n
                }), b === `share`) {
                ae(q, {
                    getHandoffContext$: () => J(o.search, r)
                });
                return
            }
            let t = new AbortController;
            f.current = t, g(!0);
            try {
                let n = await ye(o.search, t.signal, r);
                t.signal.throwIfAborted();
                let {
                    submitSitesPreviewWorkTask: a
                } = await xe();
                t.signal.throwIfAborted();
                let c = await a({
                    target: n.target,
                    intl: i,
                    sourceEvent: e,
                    signal: t.signal
                });
                t.signal.aborted || s(`/c/${c}?surface=work`)
            } catch (e) {
                let n = e;
                t.signal.aborted || (n instanceof H ? O().danger(i.formatMessage(V[n.reason])) : (_.addError(n, {
                    source: `sites_preview_work_handoff`
                }), O().danger(i.formatMessage(V.failed))))
            }
            f.current = null, t.signal.aborted || g(!1)
        }, t[5] = b, t[6] = n, t[7] = i, t[8] = r, t[9] = o, t[10] = s, t[11] = x) : x = t[11];
        let S = x;
        if (b == null) return null;
        let C = v ? `primary` : `secondary`,
            w;
        t[12] === b ? w = t[13] : (w = b === `publish` ? (0, Q.jsx)(A, {
            id: `chatgpt.sites.preview.publish.button.label`,
            defaultMessage: `Publish`
        }) : (0, Q.jsx)(A, {
            id: `chatgpt.sites.preview.share.button.label`,
            defaultMessage: `Share`
        }), t[12] = b, t[13] = w);
        let T;
        return t[14] !== h || t[15] !== S || t[16] !== C || t[17] !== w ? (T = (0, Q.jsx)(ee, {
            className: `tracking-[-0.15px]`,
            color: C,
            icon: B,
            iconClassName: `ms-0`,
            onClick: S,
            disabled: h,
            loading: h,
            size: `medium`,
            type: `button`,
            children: w
        }), t[14] = h, t[15] = S, t[16] = C, t[17] = w, t[18] = T) : T = t[18], T
    }
}));
export {
    G as a, K as i, Ce as n, _e as r, $ as t
};
//# sourceMappingURL=99a768a6-hv39md9i4ahhgqzb.js.map
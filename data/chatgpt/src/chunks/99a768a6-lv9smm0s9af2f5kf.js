const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/0942d205-fold99ylhpakc46q.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-tap9fxyhk4ehe0bs.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-nmt18uiom3b14vca.js", "assets/30901919-niqyapppecmq5jkn.js", "assets/c470f5ab-uuoa2gfm4goj6p9f.js", "assets/0e5afe53-f7up6uuou2fv3lyg.js", "assets/conversation-small-bwtqiuwj.css", "assets/7f43a190-kmg4r589ic0qs14z.js", "assets/8b34dbc2-ojcl97ddvu2212q0.js", "assets/82782bc9-g3liom11amtlr9kq.js", "assets/3e88eafe-jq6hd4qeo7soql9r.js"]))) => i.map(i => d[i]);
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
    JJ as l,
    JT as u,
    P5 as ee,
    R1 as d,
    Snt as te,
    X0 as f,
    XW as p,
    YT as m,
    Ynt as ne,
    Z0 as h,
    dF as g,
    dat as _,
    eG as v,
    ert as re,
    g8 as y,
    hF as ie,
    kJ as b,
    lat as ae,
    mY as oe,
    n2 as se,
    nY as x,
    pF as S,
    rY as C,
    s2 as ce,
    trt as w,
    w1 as T,
    wnt as E,
    z7 as D,
    zU as O
} from "./4813494d-tap9fxyhk4ehe0bs.js";
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
} from "./conversation-small-nmt18uiom3b14vca.js";
import {
    bS as B,
    yS as me
} from "./30901919-niqyapppecmq5jkn.js";
import {
    n as he,
    r as V,
    t as H
} from "./3e88eafe-jq6hd4qeo7soql9r.js";
import {
    n as U,
    r as ge,
    t as W
} from "./56dee4d8-n4lxubvw0xevyy04.js";
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
        h(), N(), q = f(() => M(() => import(`./0942d205-fold99ylhpakc46q.js`).then(e => e.SitesPreviewUpgradeModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])))
    }));

function J(e, t) {
    let n = new URLSearchParams(e),
        r = n.get(`temporary-chat`) === `true` || n.get(`training_disabled`) === `true`;
    if (r) throw new H(`temporary`);
    let i = T();
    if (i == null || !i.isPersonalAccount()) throw new H(`accountChanged`);
    let {
        threadId: a,
        branchMessageId: o,
        libraryFileId: s,
        fileName: c
    } = be(t);
    if (b({
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
    } = J(e, n), a = T();
    if (a == null || !a.isPlus() && !a.isProTier()) throw new H(`unavailable`);
    let o = await s.safeGet(`/websites/access`, {
        signal: t
    });
    t.throwIfAborted();
    let c = T();
    if (c == null || c.id !== a.id) throw Error(`Account changed`);
    if (o.enabled && v()) return {
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
        if (b({
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
    let n = g(t.conversationId),
        r = U(W(n), t.source.libraryFileId);
    return {
        ...Y(n),
        libraryFileId: t.source.libraryFileId,
        fileName: r?.libraryFileName ?? `index.html`
    }
}

function Y(e) {
    let t = e.serverId$(),
        n = l.getLastAssistantMessageForBranching(x(e.id));
    if (t == null || n == null) throw new H(`sourceChanged`);
    return {
        threadId: t,
        branchMessageId: n.id
    }
}

function xe() {
    return M(() => import(`./7f43a190-kmg4r589ic0qs14z.js`), __vite__mapDeps([10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13]))
}

function Se(e) {
    return e?.sharedProjectConversationOwner?.id
}
var X, Z, Q, $, Ce = e((() => {
    X = P(), m(), R(), c(), I(), ge(), S(), me(), n(), y(), d(), C(), r(), E(), o(), p(), i(), D(), _(), w(), Z = t(pe()), j(), fe(), he(), ve(), Q = ue(), N(), $ = e => {
        "use forget";
        let t = (0, X.c)(19),
            {
                conversationId: n,
                librarySource: r
            } = e,
            i = F(),
            o = le(),
            s = de(),
            c = ie(),
            l = a(),
            d = oe(r?.conversation.id ?? c?.id, Se),
            f = (0, Z.useRef)(null),
            p, m;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (p = () => () => f.current?.abort(), m = [], t[0] = p, t[1] = m) : (p = t[0], m = t[1]), (0, Z.useEffect)(p, m);
        let [h, g] = (0, Z.useState)(!1), _ = ce(q), v;
        t[2] !== l || t[3] !== d ? (v = () => {
            let e = T();
            return e == null || !e.isPersonalAccount() || l || d != null && d !== e.normalizedAccountUserId ? null : e.isPlus() || e.isProTier() ? `publish` : (e.isFree() || e.isGo()) && ne(`3226734443`, {
                disableExposureLog: !0
            }) && re(`933354605`).get(`show_share_button`, !1) ? `share` : null
        }, t[2] = l, t[3] = d, t[4] = v) : v = t[4];
        let y = ee(v),
            b;
        t[5] !== y || t[6] !== n || t[7] !== i || t[8] !== r || t[9] !== o || t[10] !== s ? (b = async e => {
            if (f.current != null) return;
            if (te.logStructuredEvent(y === `publish` ? `ChatgptSiteLitePublishClicked` : `ChatgptSiteLiteShareClicked`, {
                    conversationId: n
                }), y === `share`) {
                se(q, {
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
                t.signal.aborted || (n instanceof H ? O().danger(i.formatMessage(V[n.reason])) : (ae.addError(n, {
                    source: `sites_preview_work_handoff`
                }), O().danger(i.formatMessage(V.failed))))
            }
            f.current = null, t.signal.aborted || g(!1)
        }, t[5] = y, t[6] = n, t[7] = i, t[8] = r, t[9] = o, t[10] = s, t[11] = b) : b = t[11];
        let x = b;
        if (y == null) return null;
        let S = _ ? `primary` : `secondary`,
            C;
        t[12] === y ? C = t[13] : (C = y === `publish` ? (0, Q.jsx)(A, {
            id: `chatgpt.sites.preview.publish.button.label`,
            defaultMessage: `Publish`
        }) : (0, Q.jsx)(A, {
            id: `chatgpt.sites.preview.share.button.label`,
            defaultMessage: `Share`
        }), t[12] = y, t[13] = C);
        let w;
        return t[14] !== h || t[15] !== x || t[16] !== S || t[17] !== C ? (w = (0, Q.jsx)(u, {
            className: `tracking-[-0.15px]`,
            color: S,
            icon: B,
            iconClassName: `ms-0`,
            onClick: x,
            disabled: h,
            loading: h,
            size: `medium`,
            type: `button`,
            children: C
        }), t[14] = h, t[15] = x, t[16] = S, t[17] = C, t[18] = w) : w = t[18], w
    }
}));
export {
    G as a, K as i, Ce as n, _e as r, $ as t
};
//# sourceMappingURL=99a768a6-lv9smm0s9af2f5kf.js.map
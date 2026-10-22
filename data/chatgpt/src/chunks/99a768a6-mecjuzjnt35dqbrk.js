const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/0942d205-ij0ac4pcarzd5xoy.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-nxpmzchfjvwqts17.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-m08q51xmfe7gjq3d.js", "assets/30901919-lgbmg5s09xld40kt.js", "assets/c470f5ab-hgik953cu5ujlhdm.js", "assets/0e5afe53-i4tqvmyg38miikw0.js", "assets/conversation-small-dtc7tvsx.css", "assets/7f43a190-bn3y5sjwnglozeol.js", "assets/8b34dbc2-n194ohawifys3bko.js", "assets/82782bc9-ca5kcqz13rn6iprj.js", "assets/3e88eafe-fhikd8d5x9bpideb.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $J as n,
    $T as r,
    Cat as i,
    Da as a,
    EJ as o,
    GJ as s,
    IU as c,
    Int as l,
    J7 as u,
    LU as d,
    N1 as f,
    Oa as ee,
    Q7 as p,
    Rnt as m,
    Tat as h,
    ZW as g,
    a2 as _,
    bF as te,
    c2 as v,
    d2 as ne,
    dY as re,
    e2 as y,
    eE as b,
    eY as x,
    g2 as ie,
    gF as S,
    hrt as C,
    k8 as w,
    lrt as ae,
    mrt as T,
    o2 as E,
    q1 as D,
    q5 as oe,
    qW as O,
    vF as se,
    wJ as ce
} from "./4813494d-nxpmzchfjvwqts17.js";
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
    Nin as R,
    Pin as z
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    bS as B,
    yS as me
} from "./30901919-lgbmg5s09xld40kt.js";
import {
    n as he,
    r as V,
    t as H
} from "./3e88eafe-fhikd8d5x9bpideb.js";
import {
    n as U,
    r as ge,
    t as W
} from "./56dee4d8-l7pzj89c6ze0prcg.js";
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
        E(), N(), q = _(() => M(() => import(`./0942d205-ij0ac4pcarzd5xoy.js`).then(e => e.SitesPreviewUpgradeModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])))
    }));

function J(e, t) {
    let n = new URLSearchParams(e),
        r = n.get(`temporary-chat`) === `true` || n.get(`training_disabled`) === `true`;
    if (r) throw new H(`temporary`);
    let i = f();
    if (i == null || !i.isPersonalAccount()) throw new H(`accountChanged`);
    let {
        threadId: a,
        branchMessageId: s,
        libraryFileId: c,
        fileName: l
    } = be(t);
    if (o({
            conversationId: a
        })) throw Error(`Locked preview`);
    return {
        threadId: a,
        target: {
            accountId: i.id,
            branchMessageId: s,
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
    let o = await u.safeGet(`/websites/access`, {
        signal: t
    });
    t.throwIfAborted();
    let s = f();
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
        if (o({
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
    let n = S(t.conversationId),
        r = U(W(n), t.source.libraryFileId);
    return {
        ...Y(n),
        libraryFileId: t.source.libraryFileId,
        fileName: r?.libraryFileName ?? `index.html`
    }
}

function Y(e) {
    let t = e.serverId$(),
        r = s.getLastAssistantMessageForBranching(n(e.id));
    if (t == null || r == null) throw new H(`sourceChanged`);
    return {
        threadId: t,
        branchMessageId: r.id
    }
}

function xe() {
    return M(() => import(`./7f43a190-bn3y5sjwnglozeol.js`), __vite__mapDeps([10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13]))
}

function Se(e) {
    return e?.sharedProjectConversationOwner?.id
}
var X, Z, Q, $, Ce = e((() => {
    X = P(), b(), R(), y(), L(), ge(), se(), me(), v(), w(), D(), x(), d(), m(), a(), O(), ce(), p(), h(), C(), Z = t(pe()), j(), fe(), he(), ve(), Q = ue(), N(), $ = e => {
        "use forget";
        let t = (0, X.c)(19),
            {
                conversationId: n,
                librarySource: a
            } = e,
            o = F(),
            s = le(),
            u = de(),
            d = te(),
            p = ee(),
            m = re(a?.conversation.id ?? d?.id, Se),
            h = (0, Z.useRef)(null),
            g, _;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (g = () => () => h.current?.abort(), _ = [], t[0] = g, t[1] = _) : (g = t[0], _ = t[1]), (0, Z.useEffect)(g, _);
        let [v, y] = (0, Z.useState)(!1), b = ie(q), x;
        t[2] !== p || t[3] !== m ? (x = () => {
            let e = f();
            return e == null || !e.isPersonalAccount() || p || m != null && m !== e.normalizedAccountUserId ? null : e.isPlus() || e.isProTier() ? `publish` : (e.isFree() || e.isGo()) && ae(`3226734443`, {
                disableExposureLog: !0
            }) && T(`933354605`).get(`show_share_button`, !1) ? `share` : null
        }, t[2] = p, t[3] = m, t[4] = x) : x = t[4];
        let S = oe(x),
            C;
        t[5] !== S || t[6] !== n || t[7] !== o || t[8] !== a || t[9] !== s || t[10] !== u ? (C = async e => {
            if (h.current != null) return;
            if (l.logStructuredEvent(S === `publish` ? `ChatgptSiteLitePublishClicked` : `ChatgptSiteLiteShareClicked`, {
                    conversationId: n
                }), S === `share`) {
                ne(q, {
                    getHandoffContext$: () => J(s.search, a)
                });
                return
            }
            let t = new AbortController;
            h.current = t, y(!0);
            try {
                let n = await ye(s.search, t.signal, a);
                t.signal.throwIfAborted();
                let {
                    submitSitesPreviewWorkTask: r
                } = await xe();
                t.signal.throwIfAborted();
                let i = await r({
                    target: n.target,
                    intl: o,
                    sourceEvent: e,
                    signal: t.signal
                });
                t.signal.aborted || u(`/c/${i}?surface=work`)
            } catch (e) {
                let n = e;
                t.signal.aborted || (n instanceof H ? c().danger(o.formatMessage(V[n.reason])) : (i.addError(n, {
                    source: `sites_preview_work_handoff`
                }), c().danger(o.formatMessage(V.failed))))
            }
            h.current = null, t.signal.aborted || y(!1)
        }, t[5] = S, t[6] = n, t[7] = o, t[8] = a, t[9] = s, t[10] = u, t[11] = C) : C = t[11];
        let w = C;
        if (S == null) return null;
        let E = b ? `primary` : `secondary`,
            D;
        t[12] === S ? D = t[13] : (D = S === `publish` ? (0, Q.jsx)(A, {
            id: `chatgpt.sites.preview.publish.button.label`,
            defaultMessage: `Publish`
        }) : (0, Q.jsx)(A, {
            id: `chatgpt.sites.preview.share.button.label`,
            defaultMessage: `Share`
        }), t[12] = S, t[13] = D);
        let O;
        return t[14] !== v || t[15] !== w || t[16] !== E || t[17] !== D ? (O = (0, Q.jsx)(r, {
            className: `tracking-[-0.15px]`,
            color: E,
            icon: B,
            iconClassName: `ms-0`,
            onClick: w,
            disabled: v,
            loading: v,
            size: `medium`,
            type: `button`,
            children: D
        }), t[14] = v, t[15] = w, t[16] = E, t[17] = D, t[18] = O) : O = t[18], O
    }
}));
export {
    G as a, K as i, Ce as n, _e as r, $ as t
};
//# sourceMappingURL=99a768a6-mecjuzjnt35dqbrk.js.map
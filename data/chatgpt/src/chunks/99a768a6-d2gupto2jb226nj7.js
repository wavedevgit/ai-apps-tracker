const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/0942d205-dy0ngsb9l262yk9d.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-itnrgnth03y1sm9d.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-i79e9c315w50am5f.js", "assets/30901919-ikyi1r55w2i02fom.js", "assets/c470f5ab-lpy67c9in1skobas.js", "assets/0e5afe53-jfvcgv06snw44wce.js", "assets/conversation-small-dl8qqd6x.css", "assets/7f43a190-ktidq19o9wvvsqzs.js", "assets/8b34dbc2-m4883pai3e8fx8q6.js", "assets/82782bc9-o75a7wf6pmueiskp.js", "assets/3e88eafe-te7077tg1w3h4l0p.js"]))) => i.map(i => d[i]);
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
    Oa as p,
    Pnt as ee,
    Q7 as m,
    ZW as h,
    a2 as g,
    bF as te,
    c2 as _,
    d2 as ne,
    dY as re,
    e2 as v,
    eE as y,
    eY as b,
    frt as ie,
    g2 as ae,
    gF as x,
    k8 as S,
    o2 as C,
    prt as w,
    q1 as T,
    q5 as oe,
    qW as E,
    srt as se,
    vF as D,
    wJ as O,
    xat as ce
} from "./4813494d-itnrgnth03y1sm9d.js";
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
    Cin as I,
    S6 as L,
    Sin as R,
    T6 as z
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    bS as B,
    yS as me
} from "./30901919-ikyi1r55w2i02fom.js";
import {
    n as he,
    r as V,
    t as H
} from "./3e88eafe-te7077tg1w3h4l0p.js";
import {
    n as U,
    r as ge,
    t as W
} from "./56dee4d8-g36fwhjdvs4zjnv9.js";
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
        C(), N(), q = g(() => M(() => import(`./0942d205-dy0ngsb9l262yk9d.js`).then(e => e.SitesPreviewUpgradeModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])))
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
    if (o.enabled && h()) return {
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
            if (!I(i.conversationId) || !i.messageId) throw new H(`sourceChanged`);
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
    let t = L();
    if (t == null || t.conversationId == null || t.source.messageId == null || t.source.libraryFileId == null || t.isOriginalVersion === !0 || t.versionNumber != null) throw new H(`sourceChanged`);
    let n = x(t.conversationId),
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
    return M(() => import(`./7f43a190-ktidq19o9wvvsqzs.js`), __vite__mapDeps([10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13]))
}

function Se(e) {
    return e?.sharedProjectConversationOwner?.id
}
var X, Z, Q, $, Ce = e((() => {
    X = P(), y(), R(), v(), z(), ge(), D(), me(), _(), S(), T(), b(), d(), l(), a(), E(), O(), m(), i(), w(), Z = t(pe()), j(), fe(), he(), ve(), Q = ue(), N(), $ = e => {
        "use forget";
        let t = (0, X.c)(19),
            {
                conversationId: n,
                librarySource: i
            } = e,
            a = F(),
            o = le(),
            s = de(),
            l = te(),
            u = p(),
            d = re(i?.conversation.id ?? l?.id, Se),
            m = (0, Z.useRef)(null),
            h, g;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (h = () => () => m.current?.abort(), g = [], t[0] = h, t[1] = g) : (h = t[0], g = t[1]), (0, Z.useEffect)(h, g);
        let [_, v] = (0, Z.useState)(!1), y = ae(q), b;
        t[2] !== u || t[3] !== d ? (b = () => {
            let e = f();
            return e == null || !e.isPersonalAccount() || u || d != null && d !== e.normalizedAccountUserId ? null : e.isPlus() || e.isProTier() ? `publish` : (e.isFree() || e.isGo()) && se(`3226734443`, {
                disableExposureLog: !0
            }) && ie(`933354605`).get(`show_share_button`, !1) ? `share` : null
        }, t[2] = u, t[3] = d, t[4] = b) : b = t[4];
        let x = oe(b),
            S;
        t[5] !== x || t[6] !== n || t[7] !== a || t[8] !== i || t[9] !== o || t[10] !== s ? (S = async e => {
            if (m.current != null) return;
            if (ee.logStructuredEvent(x === `publish` ? `ChatgptSiteLitePublishClicked` : `ChatgptSiteLiteShareClicked`, {
                    conversationId: n
                }), x === `share`) {
                ne(q, {
                    getHandoffContext$: () => J(o.search, i)
                });
                return
            }
            let t = new AbortController;
            m.current = t, v(!0);
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
                t.signal.aborted || (n instanceof H ? c().danger(a.formatMessage(V[n.reason])) : (ce.addError(n, {
                    source: `sites_preview_work_handoff`
                }), c().danger(a.formatMessage(V.failed))))
            }
            m.current = null, t.signal.aborted || v(!1)
        }, t[5] = x, t[6] = n, t[7] = a, t[8] = i, t[9] = o, t[10] = s, t[11] = S) : S = t[11];
        let C = S;
        if (x == null) return null;
        let w = y ? `primary` : `secondary`,
            T;
        t[12] === x ? T = t[13] : (T = x === `publish` ? (0, Q.jsx)(A, {
            id: `chatgpt.sites.preview.publish.button.label`,
            defaultMessage: `Publish`
        }) : (0, Q.jsx)(A, {
            id: `chatgpt.sites.preview.share.button.label`,
            defaultMessage: `Share`
        }), t[12] = x, t[13] = T);
        let E;
        return t[14] !== _ || t[15] !== C || t[16] !== w || t[17] !== T ? (E = (0, Q.jsx)(r, {
            className: `tracking-[-0.15px]`,
            color: w,
            icon: B,
            iconClassName: `ms-0`,
            onClick: C,
            disabled: _,
            loading: _,
            size: `medium`,
            type: `button`,
            children: T
        }), t[14] = _, t[15] = C, t[16] = w, t[17] = T, t[18] = E) : E = t[18], E
    }
}));
export {
    G as a, K as i, Ce as n, _e as r, $ as t
};
//# sourceMappingURL=99a768a6-d2gupto2jb226nj7.js.map
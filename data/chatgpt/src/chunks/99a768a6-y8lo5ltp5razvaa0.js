const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/0942d205-fynvxvc3tnppvw3j.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/conversation-small-fym1zmu9zimymmm1.js", "assets/30901919-e33mbl5u1y88w5wu.js", "assets/c470f5ab-m68dth1hatzjj8yh.js", "assets/0e5afe53-dl0nq2u2siu8c8q5.js", "assets/conversation-small-iha453gv.css", "assets/7f43a190-olhmeom53oj1r7i2.js", "assets/8b34dbc2-gf9wnwcahty27ylx.js", "assets/82782bc9-h658ejxn3ufkvr7a.js", "assets/3e88eafe-eiaidml4de0vsorb.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AJ as n,
    AT as r,
    B6 as i,
    Btt as a,
    C0 as o,
    CW as s,
    DW as c,
    Da as ee,
    Dit as te,
    Ea as l,
    Htt as u,
    JP as d,
    KP as f,
    N0 as ne,
    O0 as re,
    S0 as p,
    T0 as m,
    VJ as h,
    X$ as g,
    XP as ie,
    _0 as _,
    a7 as v,
    eJ as y,
    fU as b,
    i5 as ae,
    kJ as x,
    kT as oe,
    kit as S,
    l7 as C,
    nJ as w,
    pU as T,
    pnt as se,
    u1 as E,
    vnt as ce,
    xJ as D,
    ynt as le
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as ue,
    Bn as de,
    In as O,
    Nn as k,
    Pt as fe,
    Rn as A,
    Vn as pe,
    cn as j,
    jt as M,
    ln as N,
    wn as P,
    zn as F
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    h6 as I,
    lin as L,
    uin as R,
    v6 as z
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    bS as B,
    yS as me
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    n as he,
    r as V,
    t as H
} from "./3e88eafe-eiaidml4de0vsorb.js";
import {
    n as U,
    r as ge,
    t as W
} from "./56dee4d8-htvgkg7hvgu32vdb.js";
var G, K, _e = e((() => {
        A(), G = O({
            id: `chatgpt.sites.preview.header.title`,
            defaultMessage: `Site preview`
        }), K = O({
            id: `chatgpt.sites.preview.loading.frame`,
            defaultMessage: `Loading site`
        })
    })),
    q, ve = e((() => {
        o(), N(), q = p(() => j(() => import(`./0942d205-fynvxvc3tnppvw3j.js`).then(e => e.SitesPreviewUpgradeModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])))
    }));

function J(e, t) {
    let n = new URLSearchParams(e),
        r = n.get(`temporary-chat`) === `true` || n.get(`training_disabled`) === `true`;
    if (r) throw new H(`temporary`);
    let i = g();
    if (i == null || !i.isPersonalAccount()) throw new H(`accountChanged`);
    let {
        threadId: a,
        branchMessageId: o,
        libraryFileId: s,
        fileName: c
    } = be(t);
    if (w({
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
    } = J(e, n), a = g();
    if (a == null || !a.isPlus() && !a.isProTier()) throw new H(`unavailable`);
    let o = await v.safeGet(`/websites/access`, {
        signal: t
    });
    t.throwIfAborted();
    let s = g();
    if (s == null || s.id !== a.id) throw Error(`Account changed`);
    if (o.enabled && c()) return {
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
        if (w({
                conversationId: t.id
            })) throw Error(`Locked preview`);
        if (i != null) {
            if (!R(i.conversationId) || !i.messageId) throw new H(`sourceChanged`);
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
    let n = f(t.conversationId),
        r = U(W(n), t.source.libraryFileId);
    return {
        ...Y(n),
        libraryFileId: t.source.libraryFileId,
        fileName: r?.libraryFileName ?? `index.html`
    }
}

function Y(e) {
    let t = e.serverId$(),
        n = D.getLastAssistantMessageForBranching(x(e.id));
    if (t == null || n == null) throw new H(`sourceChanged`);
    return {
        threadId: t,
        branchMessageId: n.id
    }
}

function xe() {
    return j(() => import(`./7f43a190-olhmeom53oj1r7i2.js`), __vite__mapDeps([10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13]))
}

function Se(e) {
    return e?.sharedProjectConversationOwner?.id
}
var X, Z, Q, $, Ce = e((() => {
    X = P(), r(), L(), _(), z(), ge(), d(), me(), m(), i(), E(), n(), T(), u(), l(), s(), y(), C(), S(), le(), Z = t(pe()), A(), ue(), he(), ve(), Q = de(), N(), $ = e => {
        "use forget";
        let t = (0, X.c)(19),
            {
                conversationId: n,
                librarySource: r
            } = e,
            i = F(),
            o = M(),
            s = fe(),
            c = ie(),
            l = ee(),
            u = h(r?.conversation.id ?? c?.id, Se),
            d = (0, Z.useRef)(null),
            f, p;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (f = () => () => d.current?.abort(), p = [], t[0] = f, t[1] = p) : (f = t[0], p = t[1]), (0, Z.useEffect)(f, p);
        let [m, _] = (0, Z.useState)(!1), v = ne(q), y;
        t[2] !== l || t[3] !== u ? (y = () => {
            let e = g();
            return e == null || !e.isPersonalAccount() || l || u != null && u !== e.normalizedAccountUserId ? null : e.isPlus() || e.isProTier() ? `publish` : (e.isFree() || e.isGo()) && se(`3226734443`, {
                disableExposureLog: !0
            }) && ce(`933354605`).get(`show_share_button`, !1) ? `share` : null
        }, t[2] = l, t[3] = u, t[4] = y) : y = t[4];
        let x = ae(y),
            S;
        t[5] !== x || t[6] !== n || t[7] !== i || t[8] !== r || t[9] !== o || t[10] !== s ? (S = async e => {
            if (d.current != null) return;
            if (a.logStructuredEvent(x === `publish` ? `ChatgptSiteLitePublishClicked` : `ChatgptSiteLiteShareClicked`, {
                    conversationId: n
                }), x === `share`) {
                re(q, {
                    getHandoffContext$: () => J(o.search, r)
                });
                return
            }
            let t = new AbortController;
            d.current = t, _(!0);
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
                t.signal.aborted || (n instanceof H ? b().danger(i.formatMessage(V[n.reason])) : (te.addError(n, {
                    source: `sites_preview_work_handoff`
                }), b().danger(i.formatMessage(V.failed))))
            }
            d.current = null, t.signal.aborted || _(!1)
        }, t[5] = x, t[6] = n, t[7] = i, t[8] = r, t[9] = o, t[10] = s, t[11] = S) : S = t[11];
        let C = S;
        if (x == null) return null;
        let w = v ? `primary` : `secondary`,
            T;
        t[12] === x ? T = t[13] : (T = x === `publish` ? (0, Q.jsx)(k, {
            id: `chatgpt.sites.preview.publish.button.label`,
            defaultMessage: `Publish`
        }) : (0, Q.jsx)(k, {
            id: `chatgpt.sites.preview.share.button.label`,
            defaultMessage: `Share`
        }), t[12] = x, t[13] = T);
        let E;
        return t[14] !== m || t[15] !== C || t[16] !== w || t[17] !== T ? (E = (0, Q.jsx)(oe, {
            className: `tracking-[-0.15px]`,
            color: w,
            icon: B,
            iconClassName: `ms-0`,
            onClick: C,
            disabled: m,
            loading: m,
            size: `medium`,
            type: `button`,
            children: T
        }), t[14] = m, t[15] = C, t[16] = w, t[17] = T, t[18] = E) : E = t[18], E
    }
}));
export {
    G as a, K as i, Ce as n, _e as r, $ as t
};
//# sourceMappingURL=99a768a6-y8lo5ltp5razvaa0.js.map
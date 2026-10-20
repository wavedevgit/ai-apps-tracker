const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/a05edf66-gqfpouxeybbsnkkp.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-bo7e0c29ngt4zgx0.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-ikg0dwuw782klweb.js", "assets/30901919-e8h11sw136qen6v0.js", "assets/c470f5ab-ab47eubabs8jspdc.js", "assets/0e5afe53-esm68l11os61djoy.js", "assets/conversation-small-oilgsqfa.css", "assets/8742b478-dn4h2mddd9nbsw05.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $0 as n,
    Da as ee,
    Ea as te,
    HF as ne,
    L0 as re,
    P5 as r,
    UF as ie,
    X0 as i,
    X5 as a,
    Y5 as ae,
    Z0 as o,
    Zc as oe,
    _tt as s,
    bnt as c,
    ei as se,
    el as ce,
    g8 as l,
    hF as le,
    iE as ue,
    ii as de,
    il as fe,
    j0 as u,
    n2 as pe,
    ni as me,
    oE as he,
    pF as d,
    ptt as f,
    ri as ge,
    ti as _e,
    vnt as p
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as m,
    Vn as h,
    cn as g,
    ln as _,
    wn as v
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $St as ve,
    $g as ye,
    DEt as y,
    Ggt as b,
    Kwt as be,
    QPn as xe,
    QSt as Se,
    Qg as x,
    TEt as Ce,
    Wwt as we,
    XSt as Te,
    YPn as Ee,
    ZPn as S,
    aBn as De,
    gTt as C,
    nBn as w,
    pTt as Oe,
    qgt as ke,
    tCt as Ae
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    l as je,
    n as T,
    r as E
} from "./3ed411a3-miau4a3jx6gjr5qn.js";
import {
    n as Me,
    t as D
} from "./8baac9c1-ku18e83ojt7o2c7q.js";
import {
    n as Ne,
    r as O
} from "./8742b478-dn4h2mddd9nbsw05.js";

function Pe(e) {
    if (E(e)) return !1;
    try {
        let t = new URL(e, window.location.href);
        return (t.protocol === `http:` || t.protocol === `https:`) && (t.pathname.endsWith(`/bing/redirect`) || t.origin !== window.location.origin)
    } catch {
        return !1
    }
}
var k = e((() => {
    T()
}));

function A(e, t) {
    return `${e}::${t}`
}

function Fe(e) {
    return I[e]
}

function Ie(e) {
    I[e] = !0
}

function Le(e) {
    return P[e]
}

function Re(e) {
    P[e] = !0
}

function ze(e, t) {
    return F[A(e, t)]
}

function Be(e, t) {
    F[A(e, t)] = !0
}

function j(e) {
    "use forget";
    let t = (0, Ve.c)(29),
        {
            node: n,
            onClick: te,
            onAuxClick: ne,
            children: i,
            messageId: a,
            href: o,
            disableSafeURLs: s,
            trackLinkAction: c,
            trackSavedContentAnalytics: ce,
            prepareOutboundUrl: l,
            ref: ue,
            ...u
        } = e,
        d = c === void 0 || c,
        ge = ce === void 0 || ce,
        m = le(),
        h, g = n?.properties?.href,
        _ = (0, M.useContext)(Ce),
        v = _?.isActivelyStreaming,
        y;
    t[0] === m ? y = t[1] : (y = () => m?.serverId$(), t[0] = m, t[1] = y);
    let b = r(y),
        x;
    t[2] === m ? x = t[3] : (x = () => m != null && fe(m), t[2] = m, t[3] = x);
    let we = r(x),
        S = ee(),
        C = ie(),
        w;
    t[4] !== m || t[5] !== C || t[6] !== S ? (w = () => m != null && oe(m) === `work` && !re() && !S && !C, t[4] = m, t[5] = C, t[6] = S, t[7] = w) : w = t[7];
    let Ae = r(w),
        T = _?.useSafeUrls !== !1 && !s,
        E;
    t[8] !== o || t[9] !== T ? (E = T && typeof o == `string` && (o.toLowerCase().startsWith(`mailto:`) || o.toLowerCase().startsWith(`tel:`) && !_e(o)), t[8] = o, t[9] = T, t[10] = E) : E = t[10];
    let D = E,
        O = ve(m?.id, a),
        k = _?.message ?? O,
        j = n?.children.length === 1 && n.children[0]?.type === `text` ? n.children[0].value : i,
        {
            safeUrl: P,
            isPending: F,
            isUnsafe: I,
            isBlocked: We,
            isPolicySuppressed: Ge
        } = je(b, D ? void 0 : o, T, m?.id),
        L = D ? k?.author.role === f.Assistant && k.metadata?.safe_urls?.includes(o) && j === o.slice(o.indexOf(`:`) + 1) && (!o.toLowerCase().startsWith(`tel:`) || /^\+?[0-9]{1,15}$/.test(o.slice(4))) ? o : void 0 : P,
        R = !D && F,
        Ke = !D && I,
        z = !D && We,
        qe = !D && Ge,
        Je = _?.analyticsMetadata?.isGenui === !0 || be(_?.message?.metadata) || be(O?.metadata),
        Ye = O?.metadata?.__internal?.utm_tags ?? {},
        Xe = Se(m?.id),
        Ze = (0, M.useRef)(null),
        B = he(Ze, ue),
        Qe = Me({
            includeElementText: !1,
            rootRef: Ze,
            searchableText: [o, typeof g == `string` ? g : void 0, u.title]
        }),
        V = !s && L === void 0 && !z,
        H = typeof o == `string` ? de(o) : o,
        U = typeof L == `string` ? de(L) : L,
        $e = U != null || !R && !Ke && !z && !qe,
        W = $e && !s && _?.message?.author.role === f.Assistant && typeof H == `string` ? Ee(H, {
            allowGenericDriveFile: we,
            requireGoogleDriveLibrary: !1
        }) : void 0,
        G = U ?? ($e ? W?.previewTarget.url : void 0),
        et = ge && Ae && k?.author.role === f.Assistant && !R && !z && !qe && G != null ? De(G) : null,
        K = et?.kind,
        tt = et?.id,
        nt = k?.metadata?.turn_exchange_id,
        rt = (0, M.useRef)(void 0),
        it = e => {
            ke(rt, e, b, nt, K, tt)
        };
    (0, M.useEffect)(() => {
        ke(rt, `show`, b, nt, K, tt)
    }, [b, nt, K, tt]);
    let q = typeof g == `string` ? g : typeof o == `string` ? o : void 0,
        J, Y;
    t[11] !== v || t[12] !== a || t[13] !== d || t[14] !== q ? (J = () => {
        if (!d || !a || !q || v) return;
        let e = A(a, q);
        if (Fe(e)) return;
        let t = window.setTimeout(() => {
            Fe(e) || (p.logEvent(`link_action`, {
                action: `show`,
                id: a,
                link_type: `url`,
                section_location: `response`,
                url: q
            }), Ie(e))
        }, Ue);
        return () => window.clearTimeout(t)
    }, Y = [v, a, d, q], t[11] = v, t[12] = a, t[13] = d, t[14] = q, t[15] = J, t[16] = Y) : (J = t[15], Y = t[16]), (0, M.useEffect)(J, Y), a != null && typeof g == `string` && g.includes(`/bing/redirect`) && (Le(a) || (p.logEvent(`Browsing Show Bing Link`, {
        id: a,
        content: g
    }), Re(a)));
    let X;
    t[17] === o ? X = t[18] : (X = () => {
        if (!_e(o)) return;
        let e = me(o);
        e && p.logStructuredEvent(`ChatgptDisclaimerLinkClicked`, {
            protocol: e,
            via: `pointer`,
            disclaimerSource: se
        })
    }, t[17] = o, t[18] = X);
    let at = X,
        Z;
    t[19] === m ? Z = t[20] : (Z = e => {
        Pe(e) && ye(m)
    }, t[19] = m, t[20] = Z);
    let ot = Z,
        st = e => {
            pe(He, {
                urls: l ? l(e) : Te(e, Ye, Xe),
                contactLinkWarningMetadata: Ne({
                    href: o,
                    message: k,
                    visibleLabel: j,
                    node: n,
                    shouldUseSafeUrls: T
                }),
                analyticsMetadata: {
                    clientThreadId: m?.id,
                    messageId: a
                },
                onAction: t => {
                    t === `open` && ot(e)
                }
            })
        };
    h = e => {
        if (R) {
            e.preventDefault();
            return
        }
        if (z) {
            e.preventDefault();
            return
        }
        e.button === 0 && e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey || it(`click`);
        let t = `` + g;
        if (d && q && p.logEvent(`link_action`, {
                action: `click`,
                id: a,
                ...Je ? {
                    is_genui: !0
                } : {},
                link_type: `url`,
                section_location: `response`,
                url: q
            }), a && !ze(a, t)) {
            let e = L || V ? `URL Clicked Allowed` : `URL Clicked Blocked`;
            p.logEvent(e, {
                id: a,
                content: t
            }), Be(a, t)
        }
        at(), te?.(e);
        let n = e.button === 0 && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey;
        if (W && m && n) {
            e.preventDefault();
            let t = () => {
                st(U ?? W.previewTarget.url)
            };
            xe({
                messageId: a,
                conversation: m,
                providerKey: W.providerKey,
                target: W.previewTarget,
                title: e.currentTarget.textContent ?? void 0
            }).then(e => {
                e || t()
            }, t);
            return
        }
        V && o && W == null && (e.preventDefault(), st(typeof H == `string` ? H : String(H))), !e.defaultPrevented && typeof G == `string` && ot(G)
    };
    let ct = h,
        lt = e => {
            e.button === 1 && it(`click`), ne?.(e), e.button === 1 && !e.defaultPrevented && !R && !z && typeof G == `string` && ot(G)
        },
        ut = ae(u.className, V && !R && `cursor-pointer`, Qe && Oe),
        Q = G && (l ? l(G) : Te(G, Ye, Xe)),
        $;
    return t[21] !== i || t[22] !== B || t[23] !== h || t[24] !== u || t[25] !== lt || t[26] !== ut || t[27] !== Q ? ($ = (0, N.jsx)(N.Fragment, {
        children: (0, N.jsx)(`a`, {
            ref: B,
            onClick: ct,
            onAuxClick: lt,
            ...u,
            className: ut,
            href: Q,
            rel: `noopener`,
            children: i
        })
    }), t[21] = i, t[22] = B, t[23] = h, t[24] = u, t[25] = lt, t[26] = ut, t[27] = Q, t[28] = $) : $ = t[28], $
}
var Ve, M, N, He, P, F, I, Ue, We = e((() => {
    Ve = v(), s(), u(), x(), d(), n(), D(), C(), ge(), T(), l(), ne(), ce(), c(), te(), ue(), w(), o(), a(), M = t(h()), y(), O(), S(), we(), Ae(), k(), b(), N = m(), _(), He = i(() => g(() => import(`./a05edf66-gqfpouxeybbsnkkp.js`).then(e => e.SafeLinkWarningModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))), P = {}, F = {}, I = {}, Ue = 1e3
}));
export {
    Pe as i, We as n, k as r, j as t
};
//# sourceMappingURL=edb73080-ndpj3vofplaoq9uy.js.map
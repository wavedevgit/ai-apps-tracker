const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/a05edf66-l2toenwc7073zrvv.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-d7xm9wsvhdfbag9a.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-m7dgsxtvvivh3e6t.js", "assets/30901919-lc79rizhhepnsl3q.js", "assets/c470f5ab-lnsrbaizit3lulwq.js", "assets/0e5afe53-lar0ol3v36kqq3ou.js", "assets/conversation-small-ertg9659.css", "assets/8742b478-f9gex6be3gahswv2.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as n,
    B0 as ee,
    Da as te,
    J5 as r,
    JF as ne,
    K0 as re,
    Lnt as i,
    Mtt as a,
    Oa as ie,
    Ott as o,
    Qc as ae,
    a2 as s,
    ai as oe,
    al as se,
    bF as ce,
    c2 as c,
    d2 as le,
    dE as ue,
    ii as l,
    l7 as de,
    lE as u,
    ni as fe,
    o2 as d,
    qF as f,
    ri as pe,
    ti as me,
    tl as he,
    u7 as p,
    vF as m,
    znt as ge
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    Bn as h,
    Vn as g,
    cn as _,
    ln as v,
    wn as y
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $g as _e,
    Bwt as b,
    CEt as x,
    Hwt as ve,
    IFn as S,
    JSt as ye,
    KSt as be,
    LFn as xe,
    PFn as Se,
    Qg as Ce,
    VBn as C,
    Vgt as we,
    WBn as Te,
    YSt as Ee,
    ZSt as w,
    fTt as T,
    lTt as De,
    xEt as Oe,
    zgt as ke
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    l as Ae,
    n as E,
    r as D
} from "./3ed411a3-mgj8i0ktstxovckj.js";
import {
    n as je,
    t as O
} from "./8baac9c1-mms17jhur9entyo8.js";
import {
    n as Me,
    r as k
} from "./8742b478-f9gex6be3gahswv2.js";

function Ne(e) {
    if (D(e)) return !1;
    try {
        let t = new URL(e, window.location.href);
        return (t.protocol === `http:` || t.protocol === `https:`) && (t.pathname.endsWith(`/bing/redirect`) || t.origin !== window.location.origin)
    } catch {
        return !1
    }
}
var A = e((() => {
    E()
}));

function Pe(e, t) {
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
    return F[Pe(e, t)]
}

function Be(e, t) {
    F[Pe(e, t)] = !0
}

function j(e) {
    "use forget";
    let t = (0, Ve.c)(29),
        {
            node: n,
            onClick: ee,
            onAuxClick: te,
            children: a,
            messageId: s,
            href: c,
            disableSafeURLs: l,
            trackLinkAction: u,
            trackSavedContentAnalytics: d,
            prepareOutboundUrl: f,
            ref: he,
            ...p
        } = e,
        m = u === void 0 || u,
        ge = d === void 0 || d,
        h = ce(),
        g, _ = n?.properties?.href,
        v = (0, M.useContext)(Oe),
        y = v?.isActivelyStreaming,
        b;
    t[0] === h ? b = t[1] : (b = () => h?.serverId$(), t[0] = h, t[1] = b);
    let x = r(b),
        S;
    t[2] === h ? S = t[3] : (S = () => h != null && se(h), t[2] = h, t[3] = S);
    let Ce = r(S),
        C = ie(),
        w = ne(),
        T;
    t[4] !== h || t[5] !== w || t[6] !== C ? (T = () => h != null && ae(h) === `work` && !re() && !C && !w, t[4] = h, t[5] = w, t[6] = C, t[7] = T) : T = t[7];
    let ke = r(T),
        E = v?.useSafeUrls !== !1 && !l,
        D;
    t[8] !== c || t[9] !== E ? (D = E && typeof c == `string` && (c.toLowerCase().startsWith(`mailto:`) || c.toLowerCase().startsWith(`tel:`) && !fe(c)), t[8] = c, t[9] = E, t[10] = D) : D = t[10];
    let O = D,
        k = Ee(h?.id, s),
        A = v?.message ?? k,
        j = n?.children.length === 1 && n.children[0]?.type === `text` ? n.children[0].value : a,
        {
            safeUrl: P,
            isPending: F,
            isUnsafe: I,
            isBlocked: We,
            isPolicySuppressed: Ge
        } = Ae(x, O ? void 0 : c, E, h?.id),
        L = O ? A?.author.role === o.Assistant && A.metadata?.safe_urls?.includes(c) && j === c.slice(c.indexOf(`:`) + 1) && (!c.toLowerCase().startsWith(`tel:`) || /^\+?[0-9]{1,15}$/.test(c.slice(4))) ? c : void 0 : P,
        R = !O && F,
        Ke = !O && I,
        z = !O && We,
        qe = !O && Ge,
        Je = v?.analyticsMetadata?.isGenui === !0 || ve(v?.message?.metadata) || ve(k?.metadata),
        Ye = k?.metadata?.__internal?.utm_tags ?? {},
        Xe = ye(h?.id),
        Ze = (0, M.useRef)(null),
        B = ue(Ze, he),
        Qe = je({
            includeElementText: !1,
            rootRef: Ze,
            searchableText: [c, typeof _ == `string` ? _ : void 0, p.title]
        }),
        V = !l && L === void 0 && !z,
        H = typeof c == `string` ? oe(c) : c,
        U = typeof L == `string` ? oe(L) : L,
        $e = U != null || !R && !Ke && !z && !qe,
        W = $e && !l && v?.message?.author.role === o.Assistant && typeof H == `string` ? Se(H, {
            allowGenericDriveFile: Ce,
            requireGoogleDriveLibrary: !1
        }) : void 0,
        G = U ?? ($e ? W?.previewTarget.url : void 0),
        et = ge && ke && A?.author.role === o.Assistant && !R && !z && !qe && G != null ? Te(G) : null,
        K = et?.kind,
        q = et?.id,
        tt = A?.metadata?.turn_exchange_id,
        nt = (0, M.useRef)(void 0),
        rt = e => {
            we(nt, e, x, tt, K, q)
        };
    (0, M.useEffect)(() => {
        we(nt, `show`, x, tt, K, q)
    }, [x, tt, K, q]);
    let J = typeof _ == `string` ? _ : typeof c == `string` ? c : void 0,
        Y, X;
    t[11] !== y || t[12] !== s || t[13] !== m || t[14] !== J ? (Y = () => {
        if (!m || !s || !J || y) return;
        let e = Pe(s, J);
        if (Fe(e)) return;
        let t = window.setTimeout(() => {
            Fe(e) || (i.logEvent(`link_action`, {
                action: `show`,
                id: s,
                link_type: `url`,
                section_location: `response`,
                url: J
            }), Ie(e))
        }, Ue);
        return () => window.clearTimeout(t)
    }, X = [y, s, m, J], t[11] = y, t[12] = s, t[13] = m, t[14] = J, t[15] = Y, t[16] = X) : (Y = t[15], X = t[16]), (0, M.useEffect)(Y, X), s != null && typeof _ == `string` && _.includes(`/bing/redirect`) && (Le(s) || (i.logEvent(`Browsing Show Bing Link`, {
        id: s,
        content: _
    }), Re(s)));
    let Z;
    t[17] === c ? Z = t[18] : (Z = () => {
        if (!fe(c)) return;
        let e = pe(c);
        e && i.logStructuredEvent(`ChatgptDisclaimerLinkClicked`, {
            protocol: e,
            via: `pointer`,
            disclaimerSource: me
        })
    }, t[17] = c, t[18] = Z);
    let it = Z,
        Q;
    t[19] === h ? Q = t[20] : (Q = e => {
        Ne(e) && _e(h)
    }, t[19] = h, t[20] = Q);
    let at = Q,
        ot = e => {
            le(He, {
                urls: f ? f(e) : be(e, Ye, Xe),
                contactLinkWarningMetadata: Me({
                    href: c,
                    message: A,
                    visibleLabel: j,
                    node: n,
                    shouldUseSafeUrls: E
                }),
                analyticsMetadata: {
                    clientThreadId: h?.id,
                    messageId: s
                },
                onAction: t => {
                    t === `open` && at(e)
                }
            })
        };
    g = e => {
        if (R) {
            e.preventDefault();
            return
        }
        if (z) {
            e.preventDefault();
            return
        }
        e.button === 0 && e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey || rt(`click`);
        let t = `` + _;
        if (m && J && i.logEvent(`link_action`, {
                action: `click`,
                id: s,
                ...Je ? {
                    is_genui: !0
                } : {},
                link_type: `url`,
                section_location: `response`,
                url: J
            }), s && !ze(s, t)) {
            let e = L || V ? `URL Clicked Allowed` : `URL Clicked Blocked`;
            i.logEvent(e, {
                id: s,
                content: t
            }), Be(s, t)
        }
        it(), ee?.(e);
        let n = e.button === 0 && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey;
        if (W && h && n) {
            e.preventDefault();
            let t = () => {
                ot(U ?? W.previewTarget.url)
            };
            xe({
                messageId: s,
                conversation: h,
                providerKey: W.providerKey,
                target: W.previewTarget,
                title: e.currentTarget.textContent ?? void 0
            }).then(e => {
                e || t()
            }, t);
            return
        }
        V && c && W == null && (e.preventDefault(), ot(typeof H == `string` ? H : String(H))), !e.defaultPrevented && typeof G == `string` && at(G)
    };
    let st = g,
        ct = e => {
            e.button === 1 && rt(`click`), te?.(e), e.button === 1 && !e.defaultPrevented && !R && !z && typeof G == `string` && at(G)
        },
        lt = de(p.className, V && !R && `cursor-pointer`, Qe && De),
        ut = G && (f ? f(G) : be(G, Ye, Xe)),
        $;
    return t[21] !== a || t[22] !== B || t[23] !== g || t[24] !== p || t[25] !== ct || t[26] !== lt || t[27] !== ut ? ($ = (0, N.jsx)(N.Fragment, {
        children: (0, N.jsx)(`a`, {
            ref: B,
            onClick: st,
            onAuxClick: ct,
            ...p,
            className: lt,
            href: ut,
            rel: `noopener`,
            children: a
        })
    }), t[21] = a, t[22] = B, t[23] = g, t[24] = p, t[25] = ct, t[26] = lt, t[27] = ut, t[28] = $) : $ = t[28], $
}
var Ve, M, N, He, P, F, I, Ue, We = e((() => {
    Ve = y(), a(), ee(), Ce(), m(), c(), O(), T(), l(), E(), n(), f(), he(), ge(), te(), u(), C(), d(), p(), M = t(g()), x(), k(), S(), b(), w(), A(), ke(), N = h(), v(), He = s(() => _(() => import(`./a05edf66-l2toenwc7073zrvv.js`).then(e => e.SafeLinkWarningModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))), P = {}, F = {}, I = {}, Ue = 1e3
}));
export {
    Ne as i, We as n, A as r, j as t
};
//# sourceMappingURL=edb73080-k0woulfs7wrgv1rl.js.map
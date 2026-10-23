const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/a05edf66-f6ebinxrpvpwcliw.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-mdvd4786a87166cc.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-bcbq46iub1p0ca1t.js", "assets/30901919-s8bko9nrkqwv6i4f.js", "assets/c470f5ab-jwd0o7jx9i9say9k.js", "assets/0e5afe53-hxm3yzzjqriayom4.js", "assets/conversation-small-ep6mlz5m.css", "assets/8742b478-bmafmljnkmm000be.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as n,
    B0 as ee,
    Da as te,
    JF as ne,
    K0 as re,
    K5 as ie,
    Knt as r,
    Oa as ae,
    Qc as oe,
    Wnt as i,
    a2 as a,
    ai as se,
    al as ce,
    bF as le,
    c2 as o,
    d2 as ue,
    dE as de,
    ftt as s,
    gtt as c,
    ii as l,
    j5 as u,
    lE as d,
    ni as fe,
    o2 as f,
    q5 as pe,
    qF as p,
    ri as me,
    ti as he,
    tl as m,
    vF as ge
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as h,
    Vn as g,
    cn as _,
    ln as v,
    wn as y
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $g as _e,
    Fwt as b,
    Igt as x,
    KFn as S,
    KSt as ve,
    Lwt as ye,
    Qg as C,
    Rgt as be,
    USt as xe,
    VSt as Se,
    WFn as Ce,
    WSt as we,
    ZBn as w,
    eVn as Te,
    gEt as Ee,
    iTt as De,
    qFn as Oe,
    sTt as T,
    vEt as ke
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    l as Ae,
    n as E,
    r as D
} from "./3ed411a3-byuit4zmj8b452ow.js";
import {
    n as je,
    t as O
} from "./8baac9c1-krllc3xmzav9eje0.js";
import {
    n as Me,
    r as k
} from "./8742b478-bmafmljnkmm000be.js";

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
            children: r,
            messageId: a,
            href: o,
            disableSafeURLs: c,
            trackLinkAction: l,
            trackSavedContentAnalytics: d,
            prepareOutboundUrl: f,
            ref: pe,
            ...p
        } = e,
        m = l === void 0 || l,
        ge = d === void 0 || d,
        h = le(),
        g, _ = n?.properties?.href,
        v = (0, M.useContext)(Ee),
        y = v?.isActivelyStreaming,
        b;
    t[0] === h ? b = t[1] : (b = () => h?.serverId$(), t[0] = h, t[1] = b);
    let x = u(b),
        S;
    t[2] === h ? S = t[3] : (S = () => h != null && ce(h), t[2] = h, t[3] = S);
    let ve = u(S),
        C = ae(),
        w = ne(),
        T;
    t[4] !== h || t[5] !== w || t[6] !== C ? (T = () => h != null && oe(h) === `work` && !re() && !C && !w, t[4] = h, t[5] = w, t[6] = C, t[7] = T) : T = t[7];
    let ke = u(T),
        E = v?.useSafeUrls !== !1 && !c,
        D;
    t[8] !== o || t[9] !== E ? (D = E && typeof o == `string` && (o.toLowerCase().startsWith(`mailto:`) || o.toLowerCase().startsWith(`tel:`) && !fe(o)), t[8] = o, t[9] = E, t[10] = D) : D = t[10];
    let O = D,
        k = we(h?.id, a),
        A = v?.message ?? k,
        j = n?.children.length === 1 && n.children[0]?.type === `text` ? n.children[0].value : r,
        {
            safeUrl: P,
            isPending: F,
            isUnsafe: I,
            isBlocked: We,
            isPolicySuppressed: Ge
        } = Ae(x, O ? void 0 : o, E, h?.id),
        L = O ? A?.author.role === s.Assistant && A.metadata?.safe_urls?.includes(o) && j === o.slice(o.indexOf(`:`) + 1) && (!o.toLowerCase().startsWith(`tel:`) || /^\+?[0-9]{1,15}$/.test(o.slice(4))) ? o : void 0 : P,
        R = !O && F,
        Ke = !O && I,
        z = !O && We,
        qe = !O && Ge,
        Je = v?.analyticsMetadata?.isGenui === !0 || ye(v?.message?.metadata) || ye(k?.metadata),
        Ye = k?.metadata?.__internal?.utm_tags ?? {},
        Xe = xe(h?.id),
        Ze = (0, M.useRef)(null),
        B = de(Ze, pe),
        Qe = je({
            includeElementText: !1,
            rootRef: Ze,
            searchableText: [o, typeof _ == `string` ? _ : void 0, p.title]
        }),
        V = !c && L === void 0 && !z,
        H = typeof o == `string` ? se(o) : o,
        U = typeof L == `string` ? se(L) : L,
        $e = U != null || !R && !Ke && !z && !qe,
        W = $e && !c && v?.message?.author.role === s.Assistant && typeof H == `string` ? Ce(H, {
            allowGenericDriveFile: ve,
            requireGoogleDriveLibrary: !1
        }) : void 0,
        G = U ?? ($e ? W?.previewTarget.url : void 0),
        et = ge && ke && A?.author.role === s.Assistant && !R && !z && !qe && G != null ? Te(G) : null,
        K = et?.kind,
        q = et?.id,
        tt = A?.metadata?.turn_exchange_id,
        nt = (0, M.useRef)(void 0),
        rt = e => {
            be(nt, e, x, tt, K, q)
        };
    (0, M.useEffect)(() => {
        be(nt, `show`, x, tt, K, q)
    }, [x, tt, K, q]);
    let J = typeof _ == `string` ? _ : typeof o == `string` ? o : void 0,
        Y, X;
    t[11] !== y || t[12] !== a || t[13] !== m || t[14] !== J ? (Y = () => {
        if (!m || !a || !J || y) return;
        let e = Pe(a, J);
        if (Fe(e)) return;
        let t = window.setTimeout(() => {
            Fe(e) || (i.logEvent(`link_action`, {
                action: `show`,
                id: a,
                link_type: `url`,
                section_location: `response`,
                url: J
            }), Ie(e))
        }, Ue);
        return () => window.clearTimeout(t)
    }, X = [y, a, m, J], t[11] = y, t[12] = a, t[13] = m, t[14] = J, t[15] = Y, t[16] = X) : (Y = t[15], X = t[16]), (0, M.useEffect)(Y, X), a != null && typeof _ == `string` && _.includes(`/bing/redirect`) && (Le(a) || (i.logEvent(`Browsing Show Bing Link`, {
        id: a,
        content: _
    }), Re(a)));
    let Z;
    t[17] === o ? Z = t[18] : (Z = () => {
        if (!fe(o)) return;
        let e = me(o);
        e && i.logStructuredEvent(`ChatgptDisclaimerLinkClicked`, {
            protocol: e,
            via: `pointer`,
            disclaimerSource: he
        })
    }, t[17] = o, t[18] = Z);
    let it = Z,
        Q;
    t[19] === h ? Q = t[20] : (Q = e => {
        Ne(e) && _e(h)
    }, t[19] = h, t[20] = Q);
    let at = Q,
        ot = e => {
            ue(He, {
                urls: f ? f(e) : Se(e, Ye, Xe),
                contactLinkWarningMetadata: Me({
                    href: o,
                    message: A,
                    visibleLabel: j,
                    node: n,
                    shouldUseSafeUrls: E
                }),
                analyticsMetadata: {
                    clientThreadId: h?.id,
                    messageId: a
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
                id: a,
                ...Je ? {
                    is_genui: !0
                } : {},
                link_type: `url`,
                section_location: `response`,
                url: J
            }), a && !ze(a, t)) {
            let e = L || V ? `URL Clicked Allowed` : `URL Clicked Blocked`;
            i.logEvent(e, {
                id: a,
                content: t
            }), Be(a, t)
        }
        it(), ee?.(e);
        let n = e.button === 0 && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey;
        if (W && h && n) {
            e.preventDefault();
            let t = () => {
                ot(U ?? W.previewTarget.url)
            };
            Oe({
                messageId: a,
                conversation: h,
                providerKey: W.providerKey,
                target: W.previewTarget,
                title: e.currentTarget.textContent ?? void 0
            }).then(e => {
                e || t()
            }, t);
            return
        }
        V && o && W == null && (e.preventDefault(), ot(typeof H == `string` ? H : String(H))), !e.defaultPrevented && typeof G == `string` && at(G)
    };
    let st = g,
        ct = e => {
            e.button === 1 && rt(`click`), te?.(e), e.button === 1 && !e.defaultPrevented && !R && !z && typeof G == `string` && at(G)
        },
        lt = ie(p.className, V && !R && `cursor-pointer`, Qe && De),
        ut = G && (f ? f(G) : Se(G, Ye, Xe)),
        $;
    return t[21] !== r || t[22] !== B || t[23] !== g || t[24] !== p || t[25] !== ct || t[26] !== lt || t[27] !== ut ? ($ = (0, N.jsx)(N.Fragment, {
        children: (0, N.jsx)(`a`, {
            ref: B,
            onClick: st,
            onAuxClick: ct,
            ...p,
            className: lt,
            href: ut,
            rel: `noopener`,
            children: r
        })
    }), t[21] = r, t[22] = B, t[23] = g, t[24] = p, t[25] = ct, t[26] = lt, t[27] = ut, t[28] = $) : $ = t[28], $
}
var Ve, M, N, He, P, F, I, Ue, We = e((() => {
    Ve = y(), c(), ee(), C(), ge(), o(), O(), T(), l(), E(), n(), p(), m(), r(), te(), d(), w(), f(), pe(), M = t(g()), ke(), k(), S(), b(), ve(), A(), x(), N = h(), v(), He = a(() => _(() => import(`./a05edf66-f6ebinxrpvpwcliw.js`).then(e => e.SafeLinkWarningModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))), P = {}, F = {}, I = {}, Ue = 1e3
}));
export {
    Ne as i, We as n, A as r, j as t
};
//# sourceMappingURL=edb73080-glpx5qux9j7hkj1w.js.map
const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/a05edf66-hlw97uwss7e2zzdv.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-itnrgnth03y1sm9d.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-i79e9c315w50am5f.js", "assets/30901919-ikyi1r55w2i02fom.js", "assets/c470f5ab-lpy67c9in1skobas.js", "assets/0e5afe53-jfvcgv06snw44wce.js", "assets/conversation-small-dl8qqd6x.css", "assets/8742b478-koa121s644rz34gp.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B0 as n,
    Da as ee,
    Int as te,
    JF as ne,
    K0 as re,
    Oa as ie,
    Pnt as r,
    Qc as ae,
    Ttt as i,
    a2 as a,
    ai as oe,
    al as se,
    bF as ce,
    c2 as o,
    c7 as le,
    d2 as ue,
    dE as de,
    ii as s,
    k8 as c,
    ktt as l,
    l7 as u,
    lE as d,
    ni as fe,
    o2 as pe,
    q5 as f,
    qF as p,
    ri as me,
    ti as he,
    tl as m,
    vF as ge
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Bn as h,
    Vn as g,
    cn as _,
    ln as v,
    wn as y
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $g as _e,
    Bgt as ve,
    GSt as ye,
    JSt as b,
    KSt as be,
    Lwt as x,
    Qg as S,
    Rgt as xe,
    USt as Se,
    _Fn as Ce,
    bEt as C,
    gFn as w,
    lTt as T,
    mFn as we,
    oTt as Te,
    vEt as Ee,
    wBn as De,
    xBn as Oe,
    zwt as ke
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    l as Ae,
    n as E,
    r as D
} from "./3ed411a3-drr16q61vipwaca8.js";
import {
    n as je,
    t as O
} from "./8baac9c1-eume7xd6l2kcxxv2.js";
import {
    n as Me,
    r as k
} from "./8742b478-koa121s644rz34gp.js";

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
            messageId: o,
            href: s,
            disableSafeURLs: c,
            trackLinkAction: l,
            trackSavedContentAnalytics: u,
            prepareOutboundUrl: d,
            ref: pe,
            ...p
        } = e,
        m = l === void 0 || l,
        ge = u === void 0 || u,
        h = ce(),
        g, _ = n?.properties?.href,
        v = (0, M.useContext)(Ee),
        y = v?.isActivelyStreaming,
        b;
    t[0] === h ? b = t[1] : (b = () => h?.serverId$(), t[0] = h, t[1] = b);
    let x = f(b),
        S;
    t[2] === h ? S = t[3] : (S = () => h != null && se(h), t[2] = h, t[3] = S);
    let xe = f(S),
        C = ie(),
        w = ne(),
        T;
    t[4] !== h || t[5] !== w || t[6] !== C ? (T = () => h != null && ae(h) === `work` && !re() && !C && !w, t[4] = h, t[5] = w, t[6] = C, t[7] = T) : T = t[7];
    let Oe = f(T),
        E = v?.useSafeUrls !== !1 && !c,
        D;
    t[8] !== s || t[9] !== E ? (D = E && typeof s == `string` && (s.toLowerCase().startsWith(`mailto:`) || s.toLowerCase().startsWith(`tel:`) && !fe(s)), t[8] = s, t[9] = E, t[10] = D) : D = t[10];
    let O = D,
        k = be(h?.id, o),
        A = v?.message ?? k,
        j = n?.children.length === 1 && n.children[0]?.type === `text` ? n.children[0].value : a,
        {
            safeUrl: P,
            isPending: F,
            isUnsafe: I,
            isBlocked: We,
            isPolicySuppressed: Ge
        } = Ae(x, O ? void 0 : s, E, h?.id),
        L = O ? A?.author.role === i.Assistant && A.metadata?.safe_urls?.includes(s) && j === s.slice(s.indexOf(`:`) + 1) && (!s.toLowerCase().startsWith(`tel:`) || /^\+?[0-9]{1,15}$/.test(s.slice(4))) ? s : void 0 : P,
        R = !O && F,
        Ke = !O && I,
        z = !O && We,
        qe = !O && Ge,
        Je = v?.analyticsMetadata?.isGenui === !0 || ke(v?.message?.metadata) || ke(k?.metadata),
        Ye = k?.metadata?.__internal?.utm_tags ?? {},
        Xe = ye(h?.id),
        Ze = (0, M.useRef)(null),
        B = de(Ze, pe),
        Qe = je({
            includeElementText: !1,
            rootRef: Ze,
            searchableText: [s, typeof _ == `string` ? _ : void 0, p.title]
        }),
        V = !c && L === void 0 && !z,
        H = typeof s == `string` ? oe(s) : s,
        U = typeof L == `string` ? oe(L) : L,
        $e = U != null || !R && !Ke && !z && !qe,
        W = $e && !c && v?.message?.author.role === i.Assistant && typeof H == `string` ? we(H, {
            allowGenericDriveFile: xe,
            requireGoogleDriveLibrary: !1
        }) : void 0,
        G = U ?? ($e ? W?.previewTarget.url : void 0),
        et = ge && Oe && A?.author.role === i.Assistant && !R && !z && !qe && G != null ? De(G) : null,
        K = et?.kind,
        q = et?.id,
        tt = A?.metadata?.turn_exchange_id,
        nt = (0, M.useRef)(void 0),
        rt = e => {
            ve(nt, e, x, tt, K, q)
        };
    (0, M.useEffect)(() => {
        ve(nt, `show`, x, tt, K, q)
    }, [x, tt, K, q]);
    let J = typeof _ == `string` ? _ : typeof s == `string` ? s : void 0,
        Y, X;
    t[11] !== y || t[12] !== o || t[13] !== m || t[14] !== J ? (Y = () => {
        if (!m || !o || !J || y) return;
        let e = Pe(o, J);
        if (Fe(e)) return;
        let t = window.setTimeout(() => {
            Fe(e) || (r.logEvent(`link_action`, {
                action: `show`,
                id: o,
                link_type: `url`,
                section_location: `response`,
                url: J
            }), Ie(e))
        }, Ue);
        return () => window.clearTimeout(t)
    }, X = [y, o, m, J], t[11] = y, t[12] = o, t[13] = m, t[14] = J, t[15] = Y, t[16] = X) : (Y = t[15], X = t[16]), (0, M.useEffect)(Y, X), o != null && typeof _ == `string` && _.includes(`/bing/redirect`) && (Le(o) || (r.logEvent(`Browsing Show Bing Link`, {
        id: o,
        content: _
    }), Re(o)));
    let Z;
    t[17] === s ? Z = t[18] : (Z = () => {
        if (!fe(s)) return;
        let e = me(s);
        e && r.logStructuredEvent(`ChatgptDisclaimerLinkClicked`, {
            protocol: e,
            via: `pointer`,
            disclaimerSource: he
        })
    }, t[17] = s, t[18] = Z);
    let it = Z,
        Q;
    t[19] === h ? Q = t[20] : (Q = e => {
        Ne(e) && _e(h)
    }, t[19] = h, t[20] = Q);
    let at = Q,
        ot = e => {
            ue(He, {
                urls: d ? d(e) : Se(e, Ye, Xe),
                contactLinkWarningMetadata: Me({
                    href: s,
                    message: A,
                    visibleLabel: j,
                    node: n,
                    shouldUseSafeUrls: E
                }),
                analyticsMetadata: {
                    clientThreadId: h?.id,
                    messageId: o
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
        if (m && J && r.logEvent(`link_action`, {
                action: `click`,
                id: o,
                ...Je ? {
                    is_genui: !0
                } : {},
                link_type: `url`,
                section_location: `response`,
                url: J
            }), o && !ze(o, t)) {
            let e = L || V ? `URL Clicked Allowed` : `URL Clicked Blocked`;
            r.logEvent(e, {
                id: o,
                content: t
            }), Be(o, t)
        }
        it(), ee?.(e);
        let n = e.button === 0 && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey;
        if (W && h && n) {
            e.preventDefault();
            let t = () => {
                ot(U ?? W.previewTarget.url)
            };
            Ce({
                messageId: o,
                conversation: h,
                providerKey: W.providerKey,
                target: W.previewTarget,
                title: e.currentTarget.textContent ?? void 0
            }).then(e => {
                e || t()
            }, t);
            return
        }
        V && s && W == null && (e.preventDefault(), ot(typeof H == `string` ? H : String(H))), !e.defaultPrevented && typeof G == `string` && at(G)
    };
    let st = g,
        ct = e => {
            e.button === 1 && rt(`click`), te?.(e), e.button === 1 && !e.defaultPrevented && !R && !z && typeof G == `string` && at(G)
        },
        lt = le(p.className, V && !R && `cursor-pointer`, Qe && Te),
        ut = G && (d ? d(G) : Se(G, Ye, Xe)),
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
    Ve = y(), l(), n(), S(), ge(), o(), O(), T(), s(), E(), c(), p(), m(), te(), ee(), d(), Oe(), pe(), u(), M = t(g()), C(), k(), w(), x(), b(), A(), xe(), N = h(), v(), He = a(() => _(() => import(`./a05edf66-hlw97uwss7e2zzdv.js`).then(e => e.SafeLinkWarningModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))), P = {}, F = {}, I = {}, Ue = 1e3
}));
export {
    Ne as i, We as n, A as r, j as t
};
//# sourceMappingURL=edb73080-l6v3015ng1607smq.js.map
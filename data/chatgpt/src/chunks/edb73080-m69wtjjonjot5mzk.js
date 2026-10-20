const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/a05edf66-lnrm8oucy4udax7b.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-dfpv67hlp00pbohr.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-cy5f8pl0g26s86so.js", "assets/30901919-7dzdc1ou0jtwkwpt.js", "assets/c470f5ab-d4g7lc53n1e1ao7o.js", "assets/0e5afe53-o2mcfq1ky1uaktz5.js", "assets/conversation-small-j5v9ogf2.css", "assets/8742b478-hr3b0wxygp6ofdug.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A0 as n,
    Da as ee,
    Ea as te,
    HF as ne,
    I0 as re,
    J5 as ie,
    N5 as r,
    Q0 as ae,
    VF as i,
    X0 as a,
    Y0 as o,
    Y5 as s,
    Zc as oe,
    _nt as c,
    aE as se,
    ei as ce,
    el as l,
    fF as u,
    ftt as d,
    gtt as f,
    h8 as le,
    ii as ue,
    il as de,
    mF as fe,
    ni as pe,
    rE as p,
    ri as m,
    t2 as me,
    ti as he,
    ynt as ge
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as h,
    Vn as g,
    cn as _,
    ln as v,
    wn as y
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $zn as b,
    Hgt as x,
    JPn as S,
    KPn as _e,
    QSt as ve,
    Qg as ye,
    SEt as be,
    Uwt as xe,
    Vwt as C,
    Wgt as Se,
    XSt as Ce,
    YPn as we,
    YSt as Te,
    Zg as w,
    nBn as Ee,
    pTt as T,
    qSt as De,
    uTt as Oe,
    wEt as ke
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    l as Ae,
    n as E,
    r as D
} from "./3ed411a3-ez8khl8qd0usjqrn.js";
import {
    n as je,
    t as O
} from "./8baac9c1-k9z05fmhrb1vkp7w.js";
import {
    n as Me,
    r as k
} from "./8742b478-hr3b0wxygp6ofdug.js";

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
            onClick: te,
            onAuxClick: ae,
            children: i,
            messageId: a,
            href: o,
            disableSafeURLs: s,
            trackLinkAction: l,
            trackSavedContentAnalytics: u,
            prepareOutboundUrl: f,
            ref: le,
            ...p
        } = e,
        m = l === void 0 || l,
        ge = u === void 0 || u,
        h = fe(),
        g, _ = n?.properties?.href,
        v = (0, M.useContext)(be),
        y = v?.isActivelyStreaming,
        b;
    t[0] === h ? b = t[1] : (b = () => h?.serverId$(), t[0] = h, t[1] = b);
    let x = r(b),
        S;
    t[2] === h ? S = t[3] : (S = () => h != null && de(h), t[2] = h, t[3] = S);
    let ve = r(S),
        C = ee(),
        w = ne(),
        T;
    t[4] !== h || t[5] !== w || t[6] !== C ? (T = () => h != null && oe(h) === `work` && !re() && !C && !w, t[4] = h, t[5] = w, t[6] = C, t[7] = T) : T = t[7];
    let ke = r(T),
        E = v?.useSafeUrls !== !1 && !s,
        D;
    t[8] !== o || t[9] !== E ? (D = E && typeof o == `string` && (o.toLowerCase().startsWith(`mailto:`) || o.toLowerCase().startsWith(`tel:`) && !he(o)), t[8] = o, t[9] = E, t[10] = D) : D = t[10];
    let O = D,
        k = Ce(h?.id, a),
        A = v?.message ?? k,
        j = n?.children.length === 1 && n.children[0]?.type === `text` ? n.children[0].value : i,
        {
            safeUrl: P,
            isPending: F,
            isUnsafe: I,
            isBlocked: We,
            isPolicySuppressed: Ge
        } = Ae(x, O ? void 0 : o, E, h?.id),
        L = O ? A?.author.role === d.Assistant && A.metadata?.safe_urls?.includes(o) && j === o.slice(o.indexOf(`:`) + 1) && (!o.toLowerCase().startsWith(`tel:`) || /^\+?[0-9]{1,15}$/.test(o.slice(4))) ? o : void 0 : P,
        R = !O && F,
        Ke = !O && I,
        z = !O && We,
        qe = !O && Ge,
        Je = v?.analyticsMetadata?.isGenui === !0 || xe(v?.message?.metadata) || xe(k?.metadata),
        Ye = k?.metadata?.__internal?.utm_tags ?? {},
        Xe = Te(h?.id),
        Ze = (0, M.useRef)(null),
        B = se(Ze, le),
        Qe = je({
            includeElementText: !1,
            rootRef: Ze,
            searchableText: [o, typeof _ == `string` ? _ : void 0, p.title]
        }),
        V = !s && L === void 0 && !z,
        H = typeof o == `string` ? ue(o) : o,
        U = typeof L == `string` ? ue(L) : L,
        $e = U != null || !R && !Ke && !z && !qe,
        W = $e && !s && v?.message?.author.role === d.Assistant && typeof H == `string` ? _e(H, {
            allowGenericDriveFile: ve,
            requireGoogleDriveLibrary: !1
        }) : void 0,
        G = U ?? ($e ? W?.previewTarget.url : void 0),
        et = ge && ke && A?.author.role === d.Assistant && !R && !z && !qe && G != null ? Ee(G) : null,
        K = et?.kind,
        q = et?.id,
        tt = A?.metadata?.turn_exchange_id,
        nt = (0, M.useRef)(void 0),
        rt = e => {
            Se(nt, e, x, tt, K, q)
        };
    (0, M.useEffect)(() => {
        Se(nt, `show`, x, tt, K, q)
    }, [x, tt, K, q]);
    let J = typeof _ == `string` ? _ : typeof o == `string` ? o : void 0,
        Y, X;
    t[11] !== y || t[12] !== a || t[13] !== m || t[14] !== J ? (Y = () => {
        if (!m || !a || !J || y) return;
        let e = Pe(a, J);
        if (Fe(e)) return;
        let t = window.setTimeout(() => {
            Fe(e) || (c.logEvent(`link_action`, {
                action: `show`,
                id: a,
                link_type: `url`,
                section_location: `response`,
                url: J
            }), Ie(e))
        }, Ue);
        return () => window.clearTimeout(t)
    }, X = [y, a, m, J], t[11] = y, t[12] = a, t[13] = m, t[14] = J, t[15] = Y, t[16] = X) : (Y = t[15], X = t[16]), (0, M.useEffect)(Y, X), a != null && typeof _ == `string` && _.includes(`/bing/redirect`) && (Le(a) || (c.logEvent(`Browsing Show Bing Link`, {
        id: a,
        content: _
    }), Re(a)));
    let Z;
    t[17] === o ? Z = t[18] : (Z = () => {
        if (!he(o)) return;
        let e = pe(o);
        e && c.logStructuredEvent(`ChatgptDisclaimerLinkClicked`, {
            protocol: e,
            via: `pointer`,
            disclaimerSource: ce
        })
    }, t[17] = o, t[18] = Z);
    let it = Z,
        Q;
    t[19] === h ? Q = t[20] : (Q = e => {
        Ne(e) && ye(h)
    }, t[19] = h, t[20] = Q);
    let at = Q,
        ot = e => {
            me(He, {
                urls: f ? f(e) : De(e, Ye, Xe),
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
        if (m && J && c.logEvent(`link_action`, {
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
            c.logEvent(e, {
                id: a,
                content: t
            }), Be(a, t)
        }
        it(), te?.(e);
        let n = e.button === 0 && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey;
        if (W && h && n) {
            e.preventDefault();
            let t = () => {
                ot(U ?? W.previewTarget.url)
            };
            we({
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
            e.button === 1 && rt(`click`), ae?.(e), e.button === 1 && !e.defaultPrevented && !R && !z && typeof G == `string` && at(G)
        },
        lt = ie(p.className, V && !R && `cursor-pointer`, Qe && Oe),
        ut = G && (f ? f(G) : De(G, Ye, Xe)),
        $;
    return t[21] !== i || t[22] !== B || t[23] !== g || t[24] !== p || t[25] !== ct || t[26] !== lt || t[27] !== ut ? ($ = (0, N.jsx)(N.Fragment, {
        children: (0, N.jsx)(`a`, {
            ref: B,
            onClick: st,
            onAuxClick: ct,
            ...p,
            className: lt,
            href: ut,
            rel: `noopener`,
            children: i
        })
    }), t[21] = i, t[22] = B, t[23] = g, t[24] = p, t[25] = ct, t[26] = lt, t[27] = ut, t[28] = $) : $ = t[28], $
}
var Ve, M, N, He, P, F, I, Ue, We = e((() => {
    Ve = y(), f(), n(), w(), u(), ae(), O(), T(), m(), E(), le(), i(), l(), ge(), te(), p(), b(), a(), s(), M = t(g()), ke(), k(), S(), C(), ve(), A(), x(), N = h(), v(), He = o(() => _(() => import(`./a05edf66-lnrm8oucy4udax7b.js`).then(e => e.SafeLinkWarningModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))), P = {}, F = {}, I = {}, Ue = 1e3
}));
export {
    Ne as i, We as n, A as r, j as t
};
//# sourceMappingURL=edb73080-m69wtjjonjot5mzk.js.map
const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/a05edf66-b5n6xno381hs9jmk.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-lxa3wniynbx9ka2a.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-kzsalymynzuddxee.js", "assets/30901919-i8ip8r0znvgcym38.js", "assets/c470f5ab-poh7ivjvb3j2jlfz.js", "assets/0e5afe53-dz59mkfveu52getp.js", "assets/conversation-small-bwtqiuwj.css", "assets/8742b478-oww4twhg6yjbetn8.js"]))) => i.map(i => d[i]);
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
    Snt as i,
    UF as ie,
    X0 as a,
    X5 as o,
    Y5 as ae,
    Z0 as s,
    Zc as oe,
    _tt as c,
    ei as se,
    el as ce,
    g8 as le,
    hF as ue,
    iE as l,
    ii as de,
    il as fe,
    j0 as pe,
    n2 as me,
    ni as he,
    oE as ge,
    pF as u,
    ptt as d,
    ri as f,
    ti as _e,
    wnt as ve
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    Bn as p,
    Vn as m,
    cn as h,
    ln as g,
    wn as _
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Pn as ye,
    $St as be,
    $g as xe,
    DEt as v,
    Ggt as y,
    Kwt as Se,
    QPn as b,
    QSt as Ce,
    Qg as we,
    TEt as Te,
    Wwt as x,
    XPn as Ee,
    XSt as De,
    gTt as S,
    oBn as Oe,
    pTt as ke,
    qgt as Ae,
    rBn as C,
    tCt as je
} from "./conversation-small-kzsalymynzuddxee.js";
import {
    l as Me,
    n as w,
    r as T
} from "./3ed411a3-mjcm9ythe8lkqbvb.js";
import {
    n as Ne,
    t as E
} from "./8baac9c1-f3vktslcesvcuusb.js";
import {
    n as Pe,
    r as D
} from "./8742b478-oww4twhg6yjbetn8.js";

function Fe(e) {
    if (T(e)) return !1;
    try {
        let t = new URL(e, window.location.href);
        return (t.protocol === `http:` || t.protocol === `https:`) && (t.pathname.endsWith(`/bing/redirect`) || t.origin !== window.location.origin)
    } catch {
        return !1
    }
}
var O = e((() => {
    w()
}));

function k(e, t) {
    return `${e}::${t}`
}

function Ie(e) {
    return F[e]
}

function Le(e) {
    F[e] = !0
}

function Re(e) {
    return N[e]
}

function ze(e) {
    N[e] = !0
}

function Be(e, t) {
    return P[k(e, t)]
}

function Ve(e, t) {
    P[k(e, t)] = !0
}

function A(e) {
    "use forget";
    let t = (0, He.c)(29),
        {
            node: n,
            onClick: te,
            onAuxClick: ne,
            children: a,
            messageId: o,
            href: s,
            disableSafeURLs: c,
            trackLinkAction: ce,
            trackSavedContentAnalytics: le,
            prepareOutboundUrl: l,
            ref: pe,
            ...u
        } = e,
        f = ce === void 0 || ce,
        ve = le === void 0 || le,
        p = ue(),
        m, h = n?.properties?.href,
        g = (0, j.useContext)(Te),
        _ = g?.isActivelyStreaming,
        v;
    t[0] === p ? v = t[1] : (v = () => p?.serverId$(), t[0] = p, t[1] = v);
    let y = r(v),
        b;
    t[2] === p ? b = t[3] : (b = () => p != null && fe(p), t[2] = p, t[3] = b);
    let we = r(b),
        x = ee(),
        S = ie(),
        C;
    t[4] !== p || t[5] !== S || t[6] !== x ? (C = () => p != null && oe(p) === `work` && !re() && !x && !S, t[4] = p, t[5] = S, t[6] = x, t[7] = C) : C = t[7];
    let je = r(C),
        w = g?.useSafeUrls !== !1 && !c,
        T;
    t[8] !== s || t[9] !== w ? (T = w && typeof s == `string` && (s.toLowerCase().startsWith(`mailto:`) || s.toLowerCase().startsWith(`tel:`) && !_e(s)), t[8] = s, t[9] = w, t[10] = T) : T = t[10];
    let E = T,
        D = be(p?.id, o),
        O = g?.message ?? D,
        A = n?.children.length === 1 && n.children[0]?.type === `text` ? n.children[0].value : a,
        {
            safeUrl: N,
            isPending: P,
            isUnsafe: F,
            isBlocked: Ge,
            isPolicySuppressed: Ke
        } = Me(y, E ? void 0 : s, w, p?.id),
        I = E ? O?.author.role === d.Assistant && O.metadata?.safe_urls?.includes(s) && A === s.slice(s.indexOf(`:`) + 1) && (!s.toLowerCase().startsWith(`tel:`) || /^\+?[0-9]{1,15}$/.test(s.slice(4))) ? s : void 0 : N,
        L = !E && P,
        qe = !E && F,
        R = !E && Ge,
        Je = !E && Ke,
        Ye = g?.analyticsMetadata?.isGenui === !0 || Se(g?.message?.metadata) || Se(D?.metadata),
        Xe = D?.metadata?.__internal?.utm_tags ?? {},
        Ze = Ce(p?.id),
        Qe = (0, j.useRef)(null),
        z = ge(Qe, pe),
        $e = Ne({
            includeElementText: !1,
            rootRef: Qe,
            searchableText: [s, typeof h == `string` ? h : void 0, u.title]
        }),
        B = !c && I === void 0 && !R,
        V = typeof s == `string` ? de(s) : s,
        H = typeof I == `string` ? de(I) : I,
        et = H != null || !L && !qe && !R && !Je,
        U = et && !c && g?.message?.author.role === d.Assistant && typeof V == `string` ? Ee(V, {
            allowGenericDriveFile: we,
            requireGoogleDriveLibrary: !1
        }) : void 0,
        W = H ?? (et ? U?.previewTarget.url : void 0),
        tt = ve && je && O?.author.role === d.Assistant && !L && !R && !Je && W != null ? Oe(W) : null,
        G = tt?.kind,
        K = tt?.id,
        nt = O?.metadata?.turn_exchange_id,
        rt = (0, j.useRef)(void 0),
        it = e => {
            Ae(rt, e, y, nt, G, K)
        };
    (0, j.useEffect)(() => {
        Ae(rt, `show`, y, nt, G, K)
    }, [y, nt, G, K]);
    let q = typeof h == `string` ? h : typeof s == `string` ? s : void 0,
        J, Y;
    t[11] !== _ || t[12] !== o || t[13] !== f || t[14] !== q ? (J = () => {
        if (!f || !o || !q || _) return;
        let e = k(o, q);
        if (Ie(e)) return;
        let t = window.setTimeout(() => {
            Ie(e) || (i.logEvent(`link_action`, {
                action: `show`,
                id: o,
                link_type: `url`,
                section_location: `response`,
                url: q
            }), Le(e))
        }, We);
        return () => window.clearTimeout(t)
    }, Y = [_, o, f, q], t[11] = _, t[12] = o, t[13] = f, t[14] = q, t[15] = J, t[16] = Y) : (J = t[15], Y = t[16]), (0, j.useEffect)(J, Y), o != null && typeof h == `string` && h.includes(`/bing/redirect`) && (Re(o) || (i.logEvent(`Browsing Show Bing Link`, {
        id: o,
        content: h
    }), ze(o)));
    let X;
    t[17] === s ? X = t[18] : (X = () => {
        if (!_e(s)) return;
        let e = he(s);
        e && i.logStructuredEvent(`ChatgptDisclaimerLinkClicked`, {
            protocol: e,
            via: `pointer`,
            disclaimerSource: se
        })
    }, t[17] = s, t[18] = X);
    let at = X,
        Z;
    t[19] === p ? Z = t[20] : (Z = e => {
        Fe(e) && xe(p)
    }, t[19] = p, t[20] = Z);
    let ot = Z,
        st = e => {
            me(Ue, {
                urls: l ? l(e) : De(e, Xe, Ze),
                contactLinkWarningMetadata: Pe({
                    href: s,
                    message: O,
                    visibleLabel: A,
                    node: n,
                    shouldUseSafeUrls: w
                }),
                analyticsMetadata: {
                    clientThreadId: p?.id,
                    messageId: o
                },
                onAction: t => {
                    t === `open` && ot(e)
                }
            })
        };
    m = e => {
        if (L) {
            e.preventDefault();
            return
        }
        if (R) {
            e.preventDefault();
            return
        }
        e.button === 0 && e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey || it(`click`);
        let t = `` + h;
        if (f && q && i.logEvent(`link_action`, {
                action: `click`,
                id: o,
                ...Ye ? {
                    is_genui: !0
                } : {},
                link_type: `url`,
                section_location: `response`,
                url: q
            }), o && !Be(o, t)) {
            let e = I || B ? `URL Clicked Allowed` : `URL Clicked Blocked`;
            i.logEvent(e, {
                id: o,
                content: t
            }), Ve(o, t)
        }
        at(), te?.(e);
        let n = e.button === 0 && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey;
        if (U && p && n) {
            e.preventDefault();
            let t = () => {
                st(H ?? U.previewTarget.url)
            };
            ye({
                messageId: o,
                conversation: p,
                providerKey: U.providerKey,
                target: U.previewTarget,
                title: e.currentTarget.textContent ?? void 0
            }).then(e => {
                e || t()
            }, t);
            return
        }
        B && s && U == null && (e.preventDefault(), st(typeof V == `string` ? V : String(V))), !e.defaultPrevented && typeof W == `string` && ot(W)
    };
    let ct = m,
        lt = e => {
            e.button === 1 && it(`click`), ne?.(e), e.button === 1 && !e.defaultPrevented && !L && !R && typeof W == `string` && ot(W)
        },
        ut = ae(u.className, B && !L && `cursor-pointer`, $e && ke),
        Q = W && (l ? l(W) : De(W, Xe, Ze)),
        $;
    return t[21] !== a || t[22] !== z || t[23] !== m || t[24] !== u || t[25] !== lt || t[26] !== ut || t[27] !== Q ? ($ = (0, M.jsx)(M.Fragment, {
        children: (0, M.jsx)(`a`, {
            ref: z,
            onClick: ct,
            onAuxClick: lt,
            ...u,
            className: ut,
            href: Q,
            rel: `noopener`,
            children: a
        })
    }), t[21] = a, t[22] = z, t[23] = m, t[24] = u, t[25] = lt, t[26] = ut, t[27] = Q, t[28] = $) : $ = t[28], $
}
var He, j, M, Ue, N, P, F, We, Ge = e((() => {
    He = _(), c(), pe(), we(), u(), n(), E(), S(), f(), w(), le(), ne(), ce(), ve(), te(), l(), C(), s(), o(), j = t(m()), v(), D(), b(), x(), je(), O(), y(), M = p(), g(), Ue = a(() => h(() => import(`./a05edf66-b5n6xno381hs9jmk.js`).then(e => e.SafeLinkWarningModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))), N = {}, P = {}, F = {}, We = 1e3
}));
export {
    Fe as i, Ge as n, O as r, A as t
};
//# sourceMappingURL=edb73080-be5pchooanr4yxhf.js.map
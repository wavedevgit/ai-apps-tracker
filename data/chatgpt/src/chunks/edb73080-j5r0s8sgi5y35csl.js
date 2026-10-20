const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/a05edf66-ih7uzopt7zad60du.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-qsuygr73qjc6rh65.js", "assets/2340486e-komxp8tzs51ny4jj.js", "assets/root-lelxp0l2.css", "assets/conversation-small-cawdu7il3ha6y70c.js", "assets/30901919-jory365vq6ym5crx.js", "assets/c470f5ab-in0lllrdrzeo67gs.js", "assets/0e5afe53-f9gmgfmgrr83ziw3.js", "assets/conversation-small-czggvj2v.css", "assets/8742b478-n9ctg1vxa2pdnusu.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $c as n,
    Da as ee,
    Ea as te,
    F0 as ne,
    HF as re,
    J0 as ie,
    J5 as r,
    M5 as i,
    VF as a,
    Xc as ae,
    Y0 as o,
    Z0 as s,
    _nt as c,
    aE as oe,
    e2 as se,
    ei as ce,
    fF as l,
    hnt as u,
    ii as le,
    k0 as d,
    m8 as ue,
    mF as de,
    mtt as f,
    ni as fe,
    q5 as pe,
    rE as p,
    ri as me,
    rl as he,
    ti as ge,
    utt as m
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Hn as h,
    Tn as g,
    Vn as _,
    ln as v,
    un as y
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    $Pn as b,
    Bwt as _e,
    KSt as ve,
    Qg as ye,
    Rwt as x,
    Vgt as be,
    WSt as xe,
    YSt as S,
    ZPn as Se,
    Zg as Ce,
    eFn as we,
    iBn as C,
    qSt as Te,
    sBn as Ee,
    sTt as De,
    uTt as w,
    xEt as T,
    yEt as Oe,
    zgt as ke
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    l as Ae,
    n as E,
    r as D
} from "./3ed411a3-e9fz4l2rt3pjugcf.js";
import {
    n as je,
    t as O
} from "./8baac9c1-lv7abm5nmqnkirb9.js";
import {
    n as Me,
    r as k
} from "./8742b478-n9ctg1vxa2pdnusu.js";

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
            onAuxClick: ie,
            children: r,
            messageId: a,
            href: o,
            disableSafeURLs: s,
            trackLinkAction: c,
            trackSavedContentAnalytics: l,
            prepareOutboundUrl: d,
            ref: ue,
            ...f
        } = e,
        p = c === void 0 || c,
        me = l === void 0 || l,
        h = de(),
        g, _ = n?.properties?.href,
        v = (0, M.useContext)(Oe),
        y = v?.isActivelyStreaming,
        b;
    t[0] === h ? b = t[1] : (b = () => h?.serverId$(), t[0] = h, t[1] = b);
    let x = i(b),
        S;
    t[2] === h ? S = t[3] : (S = () => h != null && he(h), t[2] = h, t[3] = S);
    let Ce = i(S),
        C = ee(),
        w = re(),
        T;
    t[4] !== h || t[5] !== w || t[6] !== C ? (T = () => h != null && ae(h) === `work` && !ne() && !C && !w, t[4] = h, t[5] = w, t[6] = C, t[7] = T) : T = t[7];
    let ke = i(T),
        E = v?.useSafeUrls !== !1 && !s,
        D;
    t[8] !== o || t[9] !== E ? (D = E && typeof o == `string` && (o.toLowerCase().startsWith(`mailto:`) || o.toLowerCase().startsWith(`tel:`) && !ge(o)), t[8] = o, t[9] = E, t[10] = D) : D = t[10];
    let O = D,
        k = Te(h?.id, a),
        A = v?.message ?? k,
        j = n?.children.length === 1 && n.children[0]?.type === `text` ? n.children[0].value : r,
        {
            safeUrl: P,
            isPending: F,
            isUnsafe: I,
            isBlocked: We,
            isPolicySuppressed: Ge
        } = Ae(x, O ? void 0 : o, E, h?.id),
        L = O ? A?.author.role === m.Assistant && A.metadata?.safe_urls?.includes(o) && j === o.slice(o.indexOf(`:`) + 1) && (!o.toLowerCase().startsWith(`tel:`) || /^\+?[0-9]{1,15}$/.test(o.slice(4))) ? o : void 0 : P,
        R = !O && F,
        Ke = !O && I,
        z = !O && We,
        qe = !O && Ge,
        Je = v?.analyticsMetadata?.isGenui === !0 || _e(v?.message?.metadata) || _e(k?.metadata),
        Ye = k?.metadata?.__internal?.utm_tags ?? {},
        Xe = ve(h?.id),
        Ze = (0, M.useRef)(null),
        B = oe(Ze, ue),
        Qe = je({
            includeElementText: !1,
            rootRef: Ze,
            searchableText: [o, typeof _ == `string` ? _ : void 0, f.title]
        }),
        V = !s && L === void 0 && !z,
        H = typeof o == `string` ? le(o) : o,
        U = typeof L == `string` ? le(L) : L,
        $e = U != null || !R && !Ke && !z && !qe,
        W = $e && !s && v?.message?.author.role === m.Assistant && typeof H == `string` ? Se(H, {
            allowGenericDriveFile: Ce,
            requireGoogleDriveLibrary: !1
        }) : void 0,
        G = U ?? ($e ? W?.previewTarget.url : void 0),
        et = me && ke && A?.author.role === m.Assistant && !R && !z && !qe && G != null ? Ee(G) : null,
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
    t[11] !== y || t[12] !== a || t[13] !== p || t[14] !== J ? (Y = () => {
        if (!p || !a || !J || y) return;
        let e = Pe(a, J);
        if (Fe(e)) return;
        let t = window.setTimeout(() => {
            Fe(e) || (u.logEvent(`link_action`, {
                action: `show`,
                id: a,
                link_type: `url`,
                section_location: `response`,
                url: J
            }), Ie(e))
        }, Ue);
        return () => window.clearTimeout(t)
    }, X = [y, a, p, J], t[11] = y, t[12] = a, t[13] = p, t[14] = J, t[15] = Y, t[16] = X) : (Y = t[15], X = t[16]), (0, M.useEffect)(Y, X), a != null && typeof _ == `string` && _.includes(`/bing/redirect`) && (Le(a) || (u.logEvent(`Browsing Show Bing Link`, {
        id: a,
        content: _
    }), Re(a)));
    let Z;
    t[17] === o ? Z = t[18] : (Z = () => {
        if (!ge(o)) return;
        let e = fe(o);
        e && u.logStructuredEvent(`ChatgptDisclaimerLinkClicked`, {
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
            se(He, {
                urls: d ? d(e) : xe(e, Ye, Xe),
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
        if (p && J && u.logEvent(`link_action`, {
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
            u.logEvent(e, {
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
            e.button === 1 && rt(`click`), ie?.(e), e.button === 1 && !e.defaultPrevented && !R && !z && typeof G == `string` && at(G)
        },
        lt = pe(f.className, V && !R && `cursor-pointer`, Qe && De),
        ut = G && (d ? d(G) : xe(G, Ye, Xe)),
        $;
    return t[21] !== r || t[22] !== B || t[23] !== g || t[24] !== f || t[25] !== ct || t[26] !== lt || t[27] !== ut ? ($ = (0, N.jsx)(N.Fragment, {
        children: (0, N.jsx)(`a`, {
            ref: B,
            onClick: st,
            onAuxClick: ct,
            ...f,
            className: lt,
            href: ut,
            rel: `noopener`,
            children: r
        })
    }), t[21] = r, t[22] = B, t[23] = g, t[24] = f, t[25] = ct, t[26] = lt, t[27] = ut, t[28] = $) : $ = t[28], $
}
var Ve, M, N, He, P, F, I, Ue, We = e((() => {
    Ve = g(), f(), d(), Ce(), l(), s(), O(), w(), me(), E(), ue(), a(), n(), c(), te(), p(), C(), o(), r(), M = t(h()), T(), k(), b(), x(), S(), A(), ke(), N = _(), y(), He = ie(() => v(() => import(`./a05edf66-ih7uzopt7zad60du.js`).then(e => e.SafeLinkWarningModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))), P = {}, F = {}, I = {}, Ue = 1e3
}));
export {
    Ne as i, We as n, A as r, j as t
};
//# sourceMappingURL=edb73080-j5r0s8sgi5y35csl.js.map
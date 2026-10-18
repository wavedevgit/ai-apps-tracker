const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/a05edf66-hhqkq5ff44o43iar.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/conversation-small-fym1zmu9zimymmm1.js", "assets/30901919-e33mbl5u1y88w5wu.js", "assets/c470f5ab-m68dth1hatzjj8yh.js", "assets/0e5afe53-dl0nq2u2siu8c8q5.js", "assets/conversation-small-iha453gv.css", "assets/8742b478-ja0nh126im8iybw2.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B6 as n,
    Btt as r,
    C0 as ee,
    CF as te,
    Da as ne,
    Ea as i,
    Fc as a,
    Fet as o,
    Htt as s,
    JP as c,
    Mc as re,
    O0 as ie,
    S0 as l,
    T0 as ae,
    VT as oe,
    XP as se,
    b5 as u,
    ei as ce,
    i5 as d,
    ii as le,
    l0 as ue,
    ni as de,
    r0 as fe,
    ri as f,
    ti as pe,
    wF as me,
    y5 as he,
    zT as p,
    zc as ge,
    zet as _e
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as m,
    Vn as h,
    cn as g,
    ln as _,
    wn as v
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    GSt as ve,
    HSt as ye,
    IPn as y,
    Iwt as b,
    LPn as be,
    Lgt as x,
    PPn as xe,
    Rwt as Se,
    Vzn as Ce,
    WSt as we,
    Wzn as Te,
    Xg as Ee,
    Yg as S,
    _Et as De,
    aTt as Oe,
    cTt as C,
    qSt as w,
    yEt as ke,
    zgt as Ae
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    l as je,
    n as T,
    r as E
} from "./3ed411a3-iqxlocnjdudkmqcn.js";
import {
    n as Me,
    t as D
} from "./8baac9c1-imxu72ls5qrg7sh7.js";
import {
    n as Ne,
    r as O
} from "./8742b478-ja0nh126im8iybw2.js";

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
            onClick: ee,
            onAuxClick: te,
            children: i,
            messageId: a,
            href: s,
            disableSafeURLs: c,
            trackLinkAction: l,
            trackSavedContentAnalytics: ae,
            prepareOutboundUrl: u,
            ref: fe,
            ...f
        } = e,
        p = l === void 0 || l,
        _e = ae === void 0 || ae,
        m = se(),
        h, g = n?.properties?.href,
        _ = (0, M.useContext)(De),
        v = _?.isActivelyStreaming,
        y;
    t[0] === m ? y = t[1] : (y = () => m?.serverId$(), t[0] = m, t[1] = y);
    let b = d(y),
        x;
    t[2] === m ? x = t[3] : (x = () => m != null && ge(m), t[2] = m, t[3] = x);
    let Ce = d(x),
        S = ne(),
        C = me(),
        w;
    t[4] !== m || t[5] !== C || t[6] !== S ? (w = () => m != null && re(m) === `work` && !ue() && !S && !C, t[4] = m, t[5] = C, t[6] = S, t[7] = w) : w = t[7];
    let ke = d(w),
        T = _?.useSafeUrls !== !1 && !c,
        E;
    t[8] !== s || t[9] !== T ? (E = T && typeof s == `string` && (s.toLowerCase().startsWith(`mailto:`) || s.toLowerCase().startsWith(`tel:`) && !pe(s)), t[8] = s, t[9] = T, t[10] = E) : E = t[10];
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
        } = je(b, D ? void 0 : s, T, m?.id),
        L = D ? k?.author.role === o.Assistant && k.metadata?.safe_urls?.includes(s) && j === s.slice(s.indexOf(`:`) + 1) && (!s.toLowerCase().startsWith(`tel:`) || /^\+?[0-9]{1,15}$/.test(s.slice(4))) ? s : void 0 : P,
        R = !D && F,
        Ke = !D && I,
        z = !D && We,
        qe = !D && Ge,
        Je = _?.analyticsMetadata?.isGenui === !0 || Se(_?.message?.metadata) || Se(O?.metadata),
        Ye = O?.metadata?.__internal?.utm_tags ?? {},
        Xe = we(m?.id),
        Ze = (0, M.useRef)(null),
        B = oe(Ze, fe),
        Qe = Me({
            includeElementText: !1,
            rootRef: Ze,
            searchableText: [s, typeof g == `string` ? g : void 0, f.title]
        }),
        V = !c && L === void 0 && !z,
        H = typeof s == `string` ? le(s) : s,
        U = typeof L == `string` ? le(L) : L,
        $e = U != null || !R && !Ke && !z && !qe,
        W = $e && !c && _?.message?.author.role === o.Assistant && typeof H == `string` ? xe(H, {
            allowGenericDriveFile: Ce,
            requireGoogleDriveLibrary: !1
        }) : void 0,
        G = U ?? ($e ? W?.previewTarget.url : void 0),
        et = _e && ke && k?.author.role === o.Assistant && !R && !z && !qe && G != null ? Te(G) : null,
        tt = et?.kind,
        K = et?.id,
        nt = k?.metadata?.turn_exchange_id,
        rt = (0, M.useRef)(void 0),
        it = e => {
            Ae(rt, e, b, nt, tt, K)
        };
    (0, M.useEffect)(() => {
        Ae(rt, `show`, b, nt, tt, K)
    }, [b, nt, tt, K]);
    let q = typeof g == `string` ? g : typeof s == `string` ? s : void 0,
        J, Y;
    t[11] !== v || t[12] !== a || t[13] !== p || t[14] !== q ? (J = () => {
        if (!p || !a || !q || v) return;
        let e = A(a, q);
        if (Fe(e)) return;
        let t = window.setTimeout(() => {
            Fe(e) || (r.logEvent(`link_action`, {
                action: `show`,
                id: a,
                link_type: `url`,
                section_location: `response`,
                url: q
            }), Ie(e))
        }, Ue);
        return () => window.clearTimeout(t)
    }, Y = [v, a, p, q], t[11] = v, t[12] = a, t[13] = p, t[14] = q, t[15] = J, t[16] = Y) : (J = t[15], Y = t[16]), (0, M.useEffect)(J, Y), a != null && typeof g == `string` && g.includes(`/bing/redirect`) && (Le(a) || (r.logEvent(`Browsing Show Bing Link`, {
        id: a,
        content: g
    }), Re(a)));
    let X;
    t[17] === s ? X = t[18] : (X = () => {
        if (!pe(s)) return;
        let e = de(s);
        e && r.logStructuredEvent(`ChatgptDisclaimerLinkClicked`, {
            protocol: e,
            via: `pointer`,
            disclaimerSource: ce
        })
    }, t[17] = s, t[18] = X);
    let at = X,
        Z;
    t[19] === m ? Z = t[20] : (Z = e => {
        Pe(e) && Ee(m)
    }, t[19] = m, t[20] = Z);
    let ot = Z,
        st = e => {
            ie(He, {
                urls: u ? u(e) : ye(e, Ye, Xe),
                contactLinkWarningMetadata: Ne({
                    href: s,
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
        if (p && q && r.logEvent(`link_action`, {
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
            r.logEvent(e, {
                id: a,
                content: t
            }), Be(a, t)
        }
        at(), ee?.(e);
        let n = e.button === 0 && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey;
        if (W && m && n) {
            e.preventDefault();
            let t = () => {
                st(U ?? W.previewTarget.url)
            };
            be({
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
        V && s && W == null && (e.preventDefault(), st(typeof H == `string` ? H : String(H))), !e.defaultPrevented && typeof G == `string` && ot(G)
    };
    let ct = h,
        lt = e => {
            e.button === 1 && it(`click`), te?.(e), e.button === 1 && !e.defaultPrevented && !R && !z && typeof G == `string` && ot(G)
        },
        ut = he(f.className, V && !R && `cursor-pointer`, Qe && Oe),
        Q = G && (u ? u(G) : ye(G, Ye, Xe)),
        $;
    return t[21] !== i || t[22] !== B || t[23] !== h || t[24] !== f || t[25] !== lt || t[26] !== ut || t[27] !== Q ? ($ = (0, N.jsx)(N.Fragment, {
        children: (0, N.jsx)(`a`, {
            ref: B,
            onClick: ct,
            onAuxClick: lt,
            ...f,
            className: ut,
            href: Q,
            rel: `noopener`,
            children: i
        })
    }), t[21] = i, t[22] = B, t[23] = h, t[24] = f, t[25] = lt, t[26] = ut, t[27] = Q, t[28] = $) : $ = t[28], $
}
var Ve, M, N, He, P, F, I, Ue, We = e((() => {
    Ve = v(), _e(), fe(), S(), c(), ae(), D(), C(), f(), T(), n(), te(), a(), s(), i(), p(), Ce(), ee(), u(), M = t(h()), ke(), O(), y(), b(), w(), k(), x(), N = m(), _(), He = l(() => g(() => import(`./a05edf66-hhqkq5ff44o43iar.js`).then(e => e.SafeLinkWarningModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))), P = {}, F = {}, I = {}, Ue = 1e3
}));
export {
    Pe as i, We as n, k as r, j as t
};
//# sourceMappingURL=edb73080-n9p8yud839ow4sqv.js.map
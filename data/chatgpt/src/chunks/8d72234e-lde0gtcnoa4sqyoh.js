import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $a as n,
    Cw as r,
    FU as i,
    Ka as ee,
    Ow as a,
    PU as o,
    _w as s,
    b5 as c,
    cw as l,
    hw as u,
    i5 as te,
    jw as d,
    mw as f,
    pw as ne,
    r5 as p,
    sw as re,
    y5 as m
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as h,
    Vn as g,
    wn as _
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Fut as v,
    Iut as ie,
    n6 as y,
    nUn as ae,
    rUn as b,
    t6 as oe
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    a as se,
    n as x,
    o as S,
    t as ce
} from "./f7e0bf69-hdoaxjv4q8h43ul9.js";
import {
    n as le,
    r as ue,
    t as de
} from "./e762572d-d9m2q4bht39qycrh.js";
import {
    n as C,
    t as fe
} from "./72e0c7a5-eju4qyjfanccit9p.js";
var pe, w, T, me, E = e((() => {
    pe = _(), l(), n(), f(), s(), x(), ue(), S(), y(), v(), b(), p(), i(), C(), d(), c(), w = t(g()), T = h(), me = e => {
        "use forget";
        let t = (0, pe.c)(82),
            {
                heightHint: n,
                widthHint: i,
                title: s,
                conversation: c,
                chatSDK: l,
                clientThreadId: d,
                onClose: f,
                onRefreshOrigin: p,
                features: h,
                locale: g,
                params: _,
                appOverride: v,
                templateOverride: y
            } = e,
            b = n === void 0 ? null : n,
            x = i != null && Number.isFinite(i) && i > 0 ? i : void 0,
            [S, ue] = (0, w.useState)(!1),
            [C, me] = (0, w.useState)(!1),
            [E, he] = (0, w.useState)(!1),
            ge = (0, w.useRef)(null),
            D = (0, w.useRef)(void 0),
            O;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (O = e => (D.current = e, {
            cancel: () => {
                D.current === e && (D.current = void 0)
            }
        }), t[0] = O) : O = t[0];
        let _e = O,
            k;
        t[1] === f ? k = t[2] : (k = () => {
            let e = D.current;
            e ? e() : f()
        }, t[1] = f, t[2] = k);
        let ve = k,
            [ye, be] = (0, w.useState)(null),
            A;
        t[3] === c ? A = t[4] : (A = oe(c), t[3] = c, t[4] = A);
        let xe = A,
            j;
        t[5] !== l || t[6] !== xe ? (j = () => xe.getLatestChatSDKForSession$(l), t[5] = l, t[6] = xe, t[7] = j) : j = t[7];
        let M = te(j),
            {
                metadata: Se,
                widgetId: Ce,
                widgetParent: N,
                widgetType: P
            } = M,
            we = Se.attribution_id ?? N,
            Te = Se.suggestion_message_id ?? null,
            Ee = _,
            F;
        t[8] !== M || t[9] !== Ee ? (F = se(M, Ee), t[8] = M, t[9] = Ee, t[10] = F) : F = t[10];
        let I = F,
            L;
        t[11] !== v || t[12] !== y ? (L = {
            appOverride: v,
            templateOverride: y
        }, t[11] = v, t[12] = y, t[13] = L) : L = t[13];
        let De = I != null,
            R;
        t[14] === De ? R = t[15] : (R = {
            skipResolution: De
        }, t[14] = De, t[15] = R);
        let z = ie(M, L, R),
            B = ye ?? 0,
            V;
        t[16] === B ? V = t[17] : (V = {
            insets: {
                top: B,
                bottom: 0,
                left: 0,
                right: 0
            }
        }, t[16] = B, t[17] = V);
        let H = V,
            U;
        t[18] === Symbol.for(`react.memo_cache_sentinel`) ? (U = () => me(!0), t[18] = U) : U = t[18];
        let W;
        t[19] !== we || t[20] !== d || t[21] !== c || t[22] !== h || t[23] !== b || t[24] !== M || t[25] !== g || t[26] !== f || t[27] !== p || t[28] !== _ || t[29] !== z || t[30] !== H || t[31] !== Te || t[32] !== s || t[33] !== Ce || t[34] !== N || t[35] !== P ? (W = (0, T.jsx)(ce, {
            onReady: U,
            onClose: f,
            onRefreshOrigin: p,
            onCanGoBack: ue,
            widgetRef: ge,
            domain: z.domain,
            html: z.html,
            attributionId: we,
            widgetId: Ce,
            widgetParent: N,
            suggestionMessageId: Te,
            widgetType: P,
            features: h,
            subdomain: z.subdomain,
            csp: z.csp,
            locale: g,
            params: _,
            displayMode: `modal`,
            heightHint: b,
            safeArea: H,
            conversation: c,
            chatSDK: M,
            clientThreadId: d,
            resolvedWidget: z,
            title: s
        }), t[19] = we, t[20] = d, t[21] = c, t[22] = h, t[23] = b, t[24] = M, t[25] = g, t[26] = f, t[27] = p, t[28] = _, t[29] = z, t[30] = H, t[31] = Te, t[32] = s, t[33] = Ce, t[34] = N, t[35] = P, t[36] = W) : W = t[36];
        let G = W;
        if (I?.supportsExternalPresentation) {
            let e = !E && `flex`,
                n;
            t[37] === e ? n = t[38] : (n = m(`group/dialog @container inset-0 min-h-full min-w-full cursor-default items-center justify-center overflow-auto overscroll-y-contain whitespace-normal bg-gray-200/50 backdrop-blur-[1px] dark:bg-black/50`, e), t[37] = e, t[38] = n);
            let r = !E && `modal`,
                i = !C || E,
                a = C ? `opacity-100` : `opacity-0`,
                o;
            t[39] === a ? o = t[40] : (o = m(`max-h-full w-fit max-w-[calc(100vw-2rem)]`, a), t[39] = a, t[40] = o);
            let c;
            t[41] === G ? c = t[42] : (c = (0, T.jsx)(ee, {
                className: `relative flex h-fit! max-h-full min-h-0 w-full! max-w-full flex-col overflow-hidden md:w-fit!`,
                rootClassName: `max-h-full max-w-full`,
                size: `custom`,
                children: G
            }), t[41] = G, t[42] = c);
            let l;
            t[43] !== i || t[44] !== o || t[45] !== c ? (l = (0, T.jsx)(`div`, {
                "aria-hidden": i,
                className: o,
                "data-ignore-for-page-load": !0,
                "data-testid": `modal-kanzi-widget`,
                id: `modal-kanzi-widget`,
                children: c
            }), t[43] = i, t[44] = o, t[45] = c, t[46] = l) : l = t[46];
            let u;
            return t[47] !== ve || t[48] !== n || t[49] !== r || t[50] !== l || t[51] !== s ? (u = (0, T.jsx)(de.Provider, {
                value: he,
                children: (0, T.jsx)(le.Provider, {
                    value: _e,
                    children: (0, T.jsx)(fe, {
                        "aria-label": s,
                        className: n,
                        closedBy: `closerequest`,
                        onClose: ve,
                        open: r,
                        children: l
                    })
                })
            }), t[47] = ve, t[48] = n, t[49] = r, t[50] = l, t[51] = s, t[52] = u) : u = t[52], u
        }
        let Oe = !C,
            ke = C ? `opacity-100` : `opacity-0`,
            K;
        t[53] === ke ? K = t[54] : (K = m(ke), t[53] = ke, t[54] = K);
        let Ae = !C,
            q;
        t[55] !== I || t[56] !== x ? (q = I ? void 0 : {
            width: x
        }, t[55] = I, t[56] = x, t[57] = q) : q = t[57];
        let je = I ? `h-fit! max-h-full w-full! max-w-full md:w-fit!` : x == null ? `max-w-xl lg:max-w-3xl` : `max-w-full`,
            Me = C ? `opacity-100` : `opacity-0`,
            J;
        t[58] !== je || t[59] !== Me ? (J = m(`relative flex min-h-0 flex-col overflow-hidden`, je, Me), t[58] = je, t[59] = Me, t[60] = J) : J = t[60];
        let Y;
        t[61] === s ? Y = t[62] : (Y = (0, T.jsx)(a, {
            asChild: !0,
            className: `sr-only`,
            children: (0, T.jsx)(`span`, {
                children: s
            })
        }), t[61] = s, t[62] = Y);
        let X;
        t[63] !== S || t[64] !== f || t[65] !== I ? (X = !I && (0, T.jsxs)(`header`, {
            className: `pointer-events-none absolute start-0 end-0 top-0 flex items-center p-2`,
            ref: o({
                axis: `height`,
                onChange: e => {
                    let {
                        height: t
                    } = e;
                    return be(t)
                }
            }),
            children: [S && (0, T.jsx)(ae, {
                onClick: () => ge.current?.navigate({
                    delta: -1
                }),
                className: `pointer-events-auto text-white mix-blend-difference grayscale`,
                children: (0, T.jsx)(ne, {})
            }), (0, T.jsx)(r, {
                asChild: !0,
                children: (0, T.jsx)(re, {
                    onClick: f,
                    iconSize: `lg`,
                    className: `pointer-events-auto ms-auto text-white mix-blend-difference grayscale`
                })
            })]
        }), t[63] = S, t[64] = f, t[65] = I, t[66] = X) : X = t[66];
        let Z;
        t[67] !== G || t[68] !== Ae || t[69] !== q || t[70] !== J || t[71] !== Y || t[72] !== X ? (Z = (0, T.jsxs)(u.Content, {
            "aria-hidden": Ae,
            style: q,
            className: J,
            children: [Y, X, G]
        }), t[67] = G, t[68] = Ae, t[69] = q, t[70] = J, t[71] = Y, t[72] = X, t[73] = Z) : Z = t[73];
        let Q;
        t[74] !== C || t[75] !== Z ? (Q = (0, T.jsx)(u.Overlay, {
            showBackground: C,
            children: Z
        }), t[74] = C, t[75] = Z, t[76] = Q) : Q = t[76];
        let $;
        return t[77] !== f || t[78] !== Oe || t[79] !== K || t[80] !== Q ? ($ = (0, T.jsx)(u.Root, {
            "aria-hidden": Oe,
            className: K,
            isOpen: !0,
            onClose: f,
            testId: `modal-kanzi-widget`,
            children: Q
        }), t[77] = f, t[78] = Oe, t[79] = K, t[80] = Q, t[81] = $) : $ = t[81], $
    }
}));
export {
    E as n, me as t
};
//# sourceMappingURL=8d72234e-lde0gtcnoa4sqyoh.js.map
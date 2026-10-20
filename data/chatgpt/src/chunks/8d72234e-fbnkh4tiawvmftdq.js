import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $a as n,
    Ew as r,
    Fw as i,
    J5 as a,
    Ka as ee,
    Kw as o,
    M5 as s,
    Mw as c,
    Nw as l,
    Tw as u,
    Vw as te,
    Yw as d,
    j5 as f,
    jw as ne,
    oW as re,
    q5 as p,
    sW as m
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Hn as h,
    Tn as g,
    Vn as _
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    Lut as v,
    Rut as ie,
    _Un as y,
    gUn as ae,
    i6 as b,
    r6 as oe
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    a as se,
    n as x,
    o as S,
    t as ce
} from "./f7e0bf69-dfh33vyqyj8mpiiq.js";
import {
    n as le,
    r as ue,
    t as de
} from "./e762572d-eus8emgj0hycazxs.js";
import {
    n as C,
    t as fe
} from "./72e0c7a5-cq2a0etag6rps2p8.js";
var pe, w, T, me, E = e((() => {
    pe = g(), r(), n(), c(), i(), x(), ue(), S(), b(), v(), y(), f(), m(), C(), d(), a(), w = t(h()), T = _(), me = e => {
        "use forget";
        let t = (0, pe.c)(82),
            {
                heightHint: n,
                widthHint: r,
                title: i,
                conversation: a,
                chatSDK: c,
                clientThreadId: d,
                onClose: f,
                onRefreshOrigin: m,
                features: h,
                locale: g,
                params: _,
                appOverride: v,
                templateOverride: y
            } = e,
            b = n === void 0 ? null : n,
            x = r != null && Number.isFinite(r) && r > 0 ? r : void 0,
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
        t[3] === a ? A = t[4] : (A = oe(a), t[3] = a, t[4] = A);
        let j = A,
            M;
        t[5] !== c || t[6] !== j ? (M = () => j.getLatestChatSDKForSession$(c), t[5] = c, t[6] = j, t[7] = M) : M = t[7];
        let N = s(M),
            {
                metadata: xe,
                widgetId: P,
                widgetParent: F,
                widgetType: I
            } = N,
            Se = xe.attribution_id ?? F,
            Ce = xe.suggestion_message_id ?? null,
            we = _,
            L;
        t[8] !== N || t[9] !== we ? (L = se(N, we), t[8] = N, t[9] = we, t[10] = L) : L = t[10];
        let R = L,
            z;
        t[11] !== v || t[12] !== y ? (z = {
            appOverride: v,
            templateOverride: y
        }, t[11] = v, t[12] = y, t[13] = z) : z = t[13];
        let Te = R != null,
            B;
        t[14] === Te ? B = t[15] : (B = {
            skipResolution: Te
        }, t[14] = Te, t[15] = B);
        let V = ie(N, z, B),
            Ee = ye ?? 0,
            H;
        t[16] === Ee ? H = t[17] : (H = {
            insets: {
                top: Ee,
                bottom: 0,
                left: 0,
                right: 0
            }
        }, t[16] = Ee, t[17] = H);
        let De = H,
            U;
        t[18] === Symbol.for(`react.memo_cache_sentinel`) ? (U = () => me(!0), t[18] = U) : U = t[18];
        let W;
        t[19] !== Se || t[20] !== d || t[21] !== a || t[22] !== h || t[23] !== b || t[24] !== N || t[25] !== g || t[26] !== f || t[27] !== m || t[28] !== _ || t[29] !== V || t[30] !== De || t[31] !== Ce || t[32] !== i || t[33] !== P || t[34] !== F || t[35] !== I ? (W = (0, T.jsx)(ce, {
            onReady: U,
            onClose: f,
            onRefreshOrigin: m,
            onCanGoBack: ue,
            widgetRef: ge,
            domain: V.domain,
            html: V.html,
            attributionId: Se,
            widgetId: P,
            widgetParent: F,
            suggestionMessageId: Ce,
            widgetType: I,
            features: h,
            subdomain: V.subdomain,
            csp: V.csp,
            locale: g,
            params: _,
            displayMode: `modal`,
            heightHint: b,
            safeArea: De,
            conversation: a,
            chatSDK: N,
            clientThreadId: d,
            resolvedWidget: V,
            title: i
        }), t[19] = Se, t[20] = d, t[21] = a, t[22] = h, t[23] = b, t[24] = N, t[25] = g, t[26] = f, t[27] = m, t[28] = _, t[29] = V, t[30] = De, t[31] = Ce, t[32] = i, t[33] = P, t[34] = F, t[35] = I, t[36] = W) : W = t[36];
        let G = W;
        if (R?.supportsExternalPresentation) {
            let e = !E && `flex`,
                n;
            t[37] === e ? n = t[38] : (n = p(`group/dialog @container inset-0 min-h-full min-w-full cursor-default items-center justify-center overflow-auto overscroll-y-contain whitespace-normal bg-gray-200/50 backdrop-blur-[1px] dark:bg-black/50`, e), t[37] = e, t[38] = n);
            let r = !E && `modal`,
                a = !C || E,
                o = C ? `opacity-100` : `opacity-0`,
                s;
            t[39] === o ? s = t[40] : (s = p(`max-h-full w-fit max-w-[calc(100vw-2rem)]`, o), t[39] = o, t[40] = s);
            let c;
            t[41] === G ? c = t[42] : (c = (0, T.jsx)(ee, {
                className: `relative flex h-fit! max-h-full min-h-0 w-full! max-w-full flex-col overflow-hidden md:w-fit!`,
                rootClassName: `max-h-full max-w-full`,
                size: `custom`,
                children: G
            }), t[41] = G, t[42] = c);
            let l;
            t[43] !== a || t[44] !== s || t[45] !== c ? (l = (0, T.jsx)(`div`, {
                "aria-hidden": a,
                className: s,
                "data-ignore-for-page-load": !0,
                "data-testid": `modal-kanzi-widget`,
                id: `modal-kanzi-widget`,
                children: c
            }), t[43] = a, t[44] = s, t[45] = c, t[46] = l) : l = t[46];
            let u;
            return t[47] !== ve || t[48] !== n || t[49] !== r || t[50] !== l || t[51] !== i ? (u = (0, T.jsx)(de.Provider, {
                value: he,
                children: (0, T.jsx)(le.Provider, {
                    value: _e,
                    children: (0, T.jsx)(fe, {
                        "aria-label": i,
                        className: n,
                        closedBy: `closerequest`,
                        onClose: ve,
                        open: r,
                        children: l
                    })
                })
            }), t[47] = ve, t[48] = n, t[49] = r, t[50] = l, t[51] = i, t[52] = u) : u = t[52], u
        }
        let Oe = !C,
            ke = C ? `opacity-100` : `opacity-0`,
            K;
        t[53] === ke ? K = t[54] : (K = p(ke), t[53] = ke, t[54] = K);
        let Ae = !C,
            q;
        t[55] !== R || t[56] !== x ? (q = R ? void 0 : {
            width: x
        }, t[55] = R, t[56] = x, t[57] = q) : q = t[57];
        let je = R ? `h-fit! max-h-full w-full! max-w-full md:w-fit!` : x == null ? `max-w-xl lg:max-w-3xl` : `max-w-full`,
            Me = C ? `opacity-100` : `opacity-0`,
            J;
        t[58] !== je || t[59] !== Me ? (J = p(`relative flex min-h-0 flex-col overflow-hidden`, je, Me), t[58] = je, t[59] = Me, t[60] = J) : J = t[60];
        let Y;
        t[61] === i ? Y = t[62] : (Y = (0, T.jsx)(o, {
            asChild: !0,
            className: `sr-only`,
            children: (0, T.jsx)(`span`, {
                children: i
            })
        }), t[61] = i, t[62] = Y);
        let X;
        t[63] !== S || t[64] !== f || t[65] !== R ? (X = !R && (0, T.jsxs)(`header`, {
            className: `pointer-events-none absolute start-0 end-0 top-0 flex items-center p-2`,
            ref: re({
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
            }), (0, T.jsx)(te, {
                asChild: !0,
                children: (0, T.jsx)(u, {
                    onClick: f,
                    iconSize: `lg`,
                    className: `pointer-events-auto ms-auto text-white mix-blend-difference grayscale`
                })
            })]
        }), t[63] = S, t[64] = f, t[65] = R, t[66] = X) : X = t[66];
        let Z;
        t[67] !== G || t[68] !== Ae || t[69] !== q || t[70] !== J || t[71] !== Y || t[72] !== X ? (Z = (0, T.jsxs)(l.Content, {
            "aria-hidden": Ae,
            style: q,
            className: J,
            children: [Y, X, G]
        }), t[67] = G, t[68] = Ae, t[69] = q, t[70] = J, t[71] = Y, t[72] = X, t[73] = Z) : Z = t[73];
        let Q;
        t[74] !== C || t[75] !== Z ? (Q = (0, T.jsx)(l.Overlay, {
            showBackground: C,
            children: Z
        }), t[74] = C, t[75] = Z, t[76] = Q) : Q = t[76];
        let $;
        return t[77] !== f || t[78] !== Oe || t[79] !== K || t[80] !== Q ? ($ = (0, T.jsx)(l.Root, {
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
//# sourceMappingURL=8d72234e-fbnkh4tiawvmftdq.js.map
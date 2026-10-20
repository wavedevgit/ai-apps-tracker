import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ew as n,
    Fw as r,
    J5 as i,
    Kw as a,
    M5 as o,
    Mw as s,
    N5 as c,
    Nw as l,
    Tw as u,
    Vw as d,
    Y5 as f,
    Yw as p,
    eo as m,
    jw as ee,
    oW as te,
    qa as ne,
    sW as h
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as g,
    Vn as _,
    wn as v
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    But as re,
    dUn as ie,
    fUn as y,
    i6 as b,
    r6 as ae,
    zut as x
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    a as oe,
    n as S,
    o as C,
    t as se
} from "./f7e0bf69-hugrx1oxvlrf9yze.js";
import {
    n as ce,
    r as le,
    t as ue
} from "./e762572d-hplb1nd79ppn7q2q.js";
import {
    n as w,
    t as de
} from "./72e0c7a5-g2uputjjdq2ymv51.js";
var fe, T, E, pe, D = e((() => {
    fe = v(), n(), m(), s(), r(), S(), le(), C(), b(), x(), y(), o(), h(), w(), p(), f(), T = t(_()), E = g(), pe = e => {
        "use forget";
        let t = (0, fe.c)(82),
            {
                heightHint: n,
                widthHint: r,
                title: o,
                conversation: s,
                chatSDK: f,
                clientThreadId: p,
                onClose: m,
                onRefreshOrigin: h,
                features: g,
                locale: _,
                params: v,
                appOverride: y,
                templateOverride: b
            } = e,
            x = n === void 0 ? null : n,
            S = r != null && Number.isFinite(r) && r > 0 ? r : void 0,
            [C, le] = (0, T.useState)(!1),
            [w, pe] = (0, T.useState)(!1),
            [D, me] = (0, T.useState)(!1),
            he = (0, T.useRef)(null),
            O = (0, T.useRef)(void 0),
            k;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (k = e => (O.current = e, {
            cancel: () => {
                O.current === e && (O.current = void 0)
            }
        }), t[0] = k) : k = t[0];
        let ge = k,
            A;
        t[1] === m ? A = t[2] : (A = () => {
            let e = O.current;
            e ? e() : m()
        }, t[1] = m, t[2] = A);
        let _e = A,
            [ve, ye] = (0, T.useState)(null),
            j;
        t[3] === s ? j = t[4] : (j = ae(s), t[3] = s, t[4] = j);
        let M = j,
            N;
        t[5] !== f || t[6] !== M ? (N = () => M.getLatestChatSDKForSession$(f), t[5] = f, t[6] = M, t[7] = N) : N = t[7];
        let P = c(N),
            {
                metadata: be,
                widgetId: F,
                widgetParent: I,
                widgetType: xe
            } = P,
            Se = be.attribution_id ?? I,
            Ce = be.suggestion_message_id ?? null,
            we = v,
            L;
        t[8] !== P || t[9] !== we ? (L = oe(P, we), t[8] = P, t[9] = we, t[10] = L) : L = t[10];
        let R = L,
            z;
        t[11] !== y || t[12] !== b ? (z = {
            appOverride: y,
            templateOverride: b
        }, t[11] = y, t[12] = b, t[13] = z) : z = t[13];
        let Te = R != null,
            B;
        t[14] === Te ? B = t[15] : (B = {
            skipResolution: Te
        }, t[14] = Te, t[15] = B);
        let V = re(P, z, B),
            Ee = ve ?? 0,
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
        t[18] === Symbol.for(`react.memo_cache_sentinel`) ? (U = () => pe(!0), t[18] = U) : U = t[18];
        let W;
        t[19] !== Se || t[20] !== p || t[21] !== s || t[22] !== g || t[23] !== x || t[24] !== P || t[25] !== _ || t[26] !== m || t[27] !== h || t[28] !== v || t[29] !== V || t[30] !== De || t[31] !== Ce || t[32] !== o || t[33] !== F || t[34] !== I || t[35] !== xe ? (W = (0, E.jsx)(se, {
            onReady: U,
            onClose: m,
            onRefreshOrigin: h,
            onCanGoBack: le,
            widgetRef: he,
            domain: V.domain,
            html: V.html,
            attributionId: Se,
            widgetId: F,
            widgetParent: I,
            suggestionMessageId: Ce,
            widgetType: xe,
            features: g,
            subdomain: V.subdomain,
            csp: V.csp,
            locale: _,
            params: v,
            displayMode: `modal`,
            heightHint: x,
            safeArea: De,
            conversation: s,
            chatSDK: P,
            clientThreadId: p,
            resolvedWidget: V,
            title: o
        }), t[19] = Se, t[20] = p, t[21] = s, t[22] = g, t[23] = x, t[24] = P, t[25] = _, t[26] = m, t[27] = h, t[28] = v, t[29] = V, t[30] = De, t[31] = Ce, t[32] = o, t[33] = F, t[34] = I, t[35] = xe, t[36] = W) : W = t[36];
        let G = W;
        if (R?.supportsExternalPresentation) {
            let e = !D && `flex`,
                n;
            t[37] === e ? n = t[38] : (n = i(`group/dialog @container inset-0 min-h-full min-w-full cursor-default items-center justify-center overflow-auto overscroll-y-contain whitespace-normal bg-gray-200/50 backdrop-blur-[1px] dark:bg-black/50`, e), t[37] = e, t[38] = n);
            let r = !D && `modal`,
                a = !w || D,
                s = w ? `opacity-100` : `opacity-0`,
                c;
            t[39] === s ? c = t[40] : (c = i(`max-h-full w-fit max-w-[calc(100vw-2rem)]`, s), t[39] = s, t[40] = c);
            let l;
            t[41] === G ? l = t[42] : (l = (0, E.jsx)(ne, {
                className: `relative flex h-fit! max-h-full min-h-0 w-full! max-w-full flex-col overflow-hidden md:w-fit!`,
                rootClassName: `max-h-full max-w-full`,
                size: `custom`,
                children: G
            }), t[41] = G, t[42] = l);
            let u;
            t[43] !== a || t[44] !== c || t[45] !== l ? (u = (0, E.jsx)(`div`, {
                "aria-hidden": a,
                className: c,
                "data-ignore-for-page-load": !0,
                "data-testid": `modal-kanzi-widget`,
                id: `modal-kanzi-widget`,
                children: l
            }), t[43] = a, t[44] = c, t[45] = l, t[46] = u) : u = t[46];
            let d;
            return t[47] !== _e || t[48] !== n || t[49] !== r || t[50] !== u || t[51] !== o ? (d = (0, E.jsx)(ue.Provider, {
                value: me,
                children: (0, E.jsx)(ce.Provider, {
                    value: ge,
                    children: (0, E.jsx)(de, {
                        "aria-label": o,
                        className: n,
                        closedBy: `closerequest`,
                        onClose: _e,
                        open: r,
                        children: u
                    })
                })
            }), t[47] = _e, t[48] = n, t[49] = r, t[50] = u, t[51] = o, t[52] = d) : d = t[52], d
        }
        let Oe = !w,
            ke = w ? `opacity-100` : `opacity-0`,
            K;
        t[53] === ke ? K = t[54] : (K = i(ke), t[53] = ke, t[54] = K);
        let Ae = !w,
            q;
        t[55] !== R || t[56] !== S ? (q = R ? void 0 : {
            width: S
        }, t[55] = R, t[56] = S, t[57] = q) : q = t[57];
        let je = R ? `h-fit! max-h-full w-full! max-w-full md:w-fit!` : S == null ? `max-w-xl lg:max-w-3xl` : `max-w-full`,
            Me = w ? `opacity-100` : `opacity-0`,
            J;
        t[58] !== je || t[59] !== Me ? (J = i(`relative flex min-h-0 flex-col overflow-hidden`, je, Me), t[58] = je, t[59] = Me, t[60] = J) : J = t[60];
        let Y;
        t[61] === o ? Y = t[62] : (Y = (0, E.jsx)(a, {
            asChild: !0,
            className: `sr-only`,
            children: (0, E.jsx)(`span`, {
                children: o
            })
        }), t[61] = o, t[62] = Y);
        let X;
        t[63] !== C || t[64] !== m || t[65] !== R ? (X = !R && (0, E.jsxs)(`header`, {
            className: `pointer-events-none absolute start-0 end-0 top-0 flex items-center p-2`,
            ref: te({
                axis: `height`,
                onChange: e => {
                    let {
                        height: t
                    } = e;
                    return ye(t)
                }
            }),
            children: [C && (0, E.jsx)(ie, {
                onClick: () => he.current?.navigate({
                    delta: -1
                }),
                className: `pointer-events-auto text-white mix-blend-difference grayscale`,
                children: (0, E.jsx)(ee, {})
            }), (0, E.jsx)(d, {
                asChild: !0,
                children: (0, E.jsx)(u, {
                    onClick: m,
                    iconSize: `lg`,
                    className: `pointer-events-auto ms-auto text-white mix-blend-difference grayscale`
                })
            })]
        }), t[63] = C, t[64] = m, t[65] = R, t[66] = X) : X = t[66];
        let Z;
        t[67] !== G || t[68] !== Ae || t[69] !== q || t[70] !== J || t[71] !== Y || t[72] !== X ? (Z = (0, E.jsxs)(l.Content, {
            "aria-hidden": Ae,
            style: q,
            className: J,
            children: [Y, X, G]
        }), t[67] = G, t[68] = Ae, t[69] = q, t[70] = J, t[71] = Y, t[72] = X, t[73] = Z) : Z = t[73];
        let Q;
        t[74] !== w || t[75] !== Z ? (Q = (0, E.jsx)(l.Overlay, {
            showBackground: w,
            children: Z
        }), t[74] = w, t[75] = Z, t[76] = Q) : Q = t[76];
        let $;
        return t[77] !== m || t[78] !== Oe || t[79] !== K || t[80] !== Q ? ($ = (0, E.jsx)(l.Root, {
            "aria-hidden": Oe,
            className: K,
            isOpen: !0,
            onClose: m,
            testId: `modal-kanzi-widget`,
            children: Q
        }), t[77] = m, t[78] = Oe, t[79] = K, t[80] = Q, t[81] = $) : $ = t[81], $
    }
}));
export {
    D as n, pe as t
};
//# sourceMappingURL=8d72234e-obk32jue8z5o42oo.js.map
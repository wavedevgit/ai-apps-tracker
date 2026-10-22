import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J5 as n,
    Ja as ee,
    Lw as r,
    Mw as i,
    Qw as a,
    Rw as o,
    Vw as s,
    aW as c,
    iW as l,
    jw as u,
    l7 as d,
    q5 as f,
    qw as te,
    tT as p,
    to as m,
    u7 as h,
    zw as ne
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    Bn as g,
    Vn as _,
    wn as v
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Un as re,
    Iut as y,
    Lut as ie,
    eWn as b,
    l6 as ae,
    u6 as x
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    a as oe,
    n as S,
    o as C,
    t as se
} from "./f7e0bf69-d0ino2qi50dsktc0.js";
import {
    n as ce,
    r as le,
    t as ue
} from "./e762572d-hplb1nd79ppn7q2q.js";
import {
    n as w,
    t as de
} from "./72e0c7a5-ftnrwjzugnspsjqf.js";
var fe, T, E, pe, D = e((() => {
    fe = v(), i(), m(), o(), s(), S(), le(), C(), x(), y(), b(), f(), c(), w(), p(), h(), T = t(_()), E = g(), pe = e => {
        "use forget";
        let t = (0, fe.c)(82),
            {
                heightHint: i,
                widthHint: o,
                title: s,
                conversation: c,
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
            x = i === void 0 ? null : i,
            S = o != null && Number.isFinite(o) && o > 0 ? o : void 0,
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
        t[3] === c ? j = t[4] : (j = ae(c), t[3] = c, t[4] = j);
        let M = j,
            N;
        t[5] !== f || t[6] !== M ? (N = () => M.getLatestChatSDKForSession$(f), t[5] = f, t[6] = M, t[7] = N) : N = t[7];
        let P = n(N),
            {
                metadata: be,
                widgetId: xe,
                widgetParent: F,
                widgetType: Se
            } = P,
            Ce = be.attribution_id ?? F,
            we = be.suggestion_message_id ?? null,
            Te = v,
            I;
        t[8] !== P || t[9] !== Te ? (I = oe(P, Te), t[8] = P, t[9] = Te, t[10] = I) : I = t[10];
        let L = I,
            R;
        t[11] !== y || t[12] !== b ? (R = {
            appOverride: y,
            templateOverride: b
        }, t[11] = y, t[12] = b, t[13] = R) : R = t[13];
        let Ee = L != null,
            z;
        t[14] === Ee ? z = t[15] : (z = {
            skipResolution: Ee
        }, t[14] = Ee, t[15] = z);
        let B = ie(P, R, z),
            V = ve ?? 0,
            H;
        t[16] === V ? H = t[17] : (H = {
            insets: {
                top: V,
                bottom: 0,
                left: 0,
                right: 0
            }
        }, t[16] = V, t[17] = H);
        let De = H,
            U;
        t[18] === Symbol.for(`react.memo_cache_sentinel`) ? (U = () => pe(!0), t[18] = U) : U = t[18];
        let W;
        t[19] !== Ce || t[20] !== p || t[21] !== c || t[22] !== g || t[23] !== x || t[24] !== P || t[25] !== _ || t[26] !== m || t[27] !== h || t[28] !== v || t[29] !== B || t[30] !== De || t[31] !== we || t[32] !== s || t[33] !== xe || t[34] !== F || t[35] !== Se ? (W = (0, E.jsx)(se, {
            onReady: U,
            onClose: m,
            onRefreshOrigin: h,
            onCanGoBack: le,
            widgetRef: he,
            domain: B.domain,
            html: B.html,
            attributionId: Ce,
            widgetId: xe,
            widgetParent: F,
            suggestionMessageId: we,
            widgetType: Se,
            features: g,
            subdomain: B.subdomain,
            csp: B.csp,
            locale: _,
            params: v,
            displayMode: `modal`,
            heightHint: x,
            safeArea: De,
            conversation: c,
            chatSDK: P,
            clientThreadId: p,
            resolvedWidget: B,
            title: s
        }), t[19] = Ce, t[20] = p, t[21] = c, t[22] = g, t[23] = x, t[24] = P, t[25] = _, t[26] = m, t[27] = h, t[28] = v, t[29] = B, t[30] = De, t[31] = we, t[32] = s, t[33] = xe, t[34] = F, t[35] = Se, t[36] = W) : W = t[36];
        let G = W;
        if (L?.supportsExternalPresentation) {
            let e = !D && `flex`,
                n;
            t[37] === e ? n = t[38] : (n = d(`group/dialog @container inset-0 min-h-full min-w-full cursor-default items-center justify-center overflow-auto overscroll-y-contain whitespace-normal bg-gray-200/50 backdrop-blur-[1px] dark:bg-black/50`, e), t[37] = e, t[38] = n);
            let r = !D && `modal`,
                i = !w || D,
                a = w ? `opacity-100` : `opacity-0`,
                o;
            t[39] === a ? o = t[40] : (o = d(`max-h-full w-fit max-w-[calc(100vw-2rem)]`, a), t[39] = a, t[40] = o);
            let c;
            t[41] === G ? c = t[42] : (c = (0, E.jsx)(ee, {
                className: `relative flex h-fit! max-h-full min-h-0 w-full! max-w-full flex-col overflow-hidden md:w-fit!`,
                rootClassName: `max-h-full max-w-full`,
                size: `custom`,
                children: G
            }), t[41] = G, t[42] = c);
            let l;
            t[43] !== i || t[44] !== o || t[45] !== c ? (l = (0, E.jsx)(`div`, {
                "aria-hidden": i,
                className: o,
                "data-ignore-for-page-load": !0,
                "data-testid": `modal-kanzi-widget`,
                id: `modal-kanzi-widget`,
                children: c
            }), t[43] = i, t[44] = o, t[45] = c, t[46] = l) : l = t[46];
            let u;
            return t[47] !== _e || t[48] !== n || t[49] !== r || t[50] !== l || t[51] !== s ? (u = (0, E.jsx)(ue.Provider, {
                value: me,
                children: (0, E.jsx)(ce.Provider, {
                    value: ge,
                    children: (0, E.jsx)(de, {
                        "aria-label": s,
                        className: n,
                        closedBy: `closerequest`,
                        onClose: _e,
                        open: r,
                        children: l
                    })
                })
            }), t[47] = _e, t[48] = n, t[49] = r, t[50] = l, t[51] = s, t[52] = u) : u = t[52], u
        }
        let Oe = !w,
            ke = w ? `opacity-100` : `opacity-0`,
            K;
        t[53] === ke ? K = t[54] : (K = d(ke), t[53] = ke, t[54] = K);
        let Ae = !w,
            q;
        t[55] !== L || t[56] !== S ? (q = L ? void 0 : {
            width: S
        }, t[55] = L, t[56] = S, t[57] = q) : q = t[57];
        let je = L ? `h-fit! max-h-full w-full! max-w-full md:w-fit!` : S == null ? `max-w-xl lg:max-w-3xl` : `max-w-full`,
            Me = w ? `opacity-100` : `opacity-0`,
            J;
        t[58] !== je || t[59] !== Me ? (J = d(`relative flex min-h-0 flex-col overflow-hidden`, je, Me), t[58] = je, t[59] = Me, t[60] = J) : J = t[60];
        let Y;
        t[61] === s ? Y = t[62] : (Y = (0, E.jsx)(a, {
            asChild: !0,
            className: `sr-only`,
            children: (0, E.jsx)(`span`, {
                children: s
            })
        }), t[61] = s, t[62] = Y);
        let X;
        t[63] !== C || t[64] !== m || t[65] !== L ? (X = !L && (0, E.jsxs)(`header`, {
            className: `pointer-events-none absolute start-0 end-0 top-0 flex items-center p-2`,
            ref: l({
                axis: `height`,
                onChange: e => {
                    let {
                        height: t
                    } = e;
                    return ye(t)
                }
            }),
            children: [C && (0, E.jsx)(re, {
                onClick: () => he.current?.navigate({
                    delta: -1
                }),
                className: `pointer-events-auto text-white mix-blend-difference grayscale`,
                children: (0, E.jsx)(r, {})
            }), (0, E.jsx)(te, {
                asChild: !0,
                children: (0, E.jsx)(u, {
                    onClick: m,
                    iconSize: `lg`,
                    className: `pointer-events-auto ms-auto text-white mix-blend-difference grayscale`
                })
            })]
        }), t[63] = C, t[64] = m, t[65] = L, t[66] = X) : X = t[66];
        let Z;
        t[67] !== G || t[68] !== Ae || t[69] !== q || t[70] !== J || t[71] !== Y || t[72] !== X ? (Z = (0, E.jsxs)(ne.Content, {
            "aria-hidden": Ae,
            style: q,
            className: J,
            children: [Y, X, G]
        }), t[67] = G, t[68] = Ae, t[69] = q, t[70] = J, t[71] = Y, t[72] = X, t[73] = Z) : Z = t[73];
        let Q;
        t[74] !== w || t[75] !== Z ? (Q = (0, E.jsx)(ne.Overlay, {
            showBackground: w,
            children: Z
        }), t[74] = w, t[75] = Z, t[76] = Q) : Q = t[76];
        let $;
        return t[77] !== m || t[78] !== Oe || t[79] !== K || t[80] !== Q ? ($ = (0, E.jsx)(ne.Root, {
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
//# sourceMappingURL=8d72234e-f8jwug98g93p6nun.js.map
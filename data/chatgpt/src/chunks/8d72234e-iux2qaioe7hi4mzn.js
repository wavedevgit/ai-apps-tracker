import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A5 as n,
    Ja as ee,
    K5 as r,
    Lw as i,
    Mw as a,
    Qw as o,
    Rw as s,
    Vw as c,
    aW as l,
    iW as u,
    j5 as d,
    jw as te,
    q5 as f,
    qw as ne,
    tT as p,
    to as m,
    zw as h
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as g,
    Vn as _,
    wn as v
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Nut as y,
    Put as re,
    l6 as ie,
    lWn as ae,
    u6 as b,
    uWn as x
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    a as oe,
    n as S,
    o as C,
    t as se
} from "./f7e0bf69-kg4gumu5ukmjdoq0.js";
import {
    n as ce,
    r as le,
    t as ue
} from "./e762572d-hplb1nd79ppn7q2q.js";
import {
    n as w,
    t as de
} from "./72e0c7a5-jfppujmqmju2nior.js";
var fe, T, E, pe, D = e((() => {
    fe = v(), a(), m(), s(), c(), S(), le(), C(), b(), y(), x(), n(), l(), w(), p(), f(), T = t(_()), E = g(), pe = e => {
        "use forget";
        let t = (0, fe.c)(82),
            {
                heightHint: n,
                widthHint: a,
                title: s,
                conversation: c,
                chatSDK: l,
                clientThreadId: f,
                onClose: p,
                onRefreshOrigin: m,
                features: g,
                locale: _,
                params: v,
                appOverride: y,
                templateOverride: b
            } = e,
            x = n === void 0 ? null : n,
            S = a != null && Number.isFinite(a) && a > 0 ? a : void 0,
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
        t[1] === p ? A = t[2] : (A = () => {
            let e = O.current;
            e ? e() : p()
        }, t[1] = p, t[2] = A);
        let _e = A,
            [ve, ye] = (0, T.useState)(null),
            j;
        t[3] === c ? j = t[4] : (j = ie(c), t[3] = c, t[4] = j);
        let be = j,
            M;
        t[5] !== l || t[6] !== be ? (M = () => be.getLatestChatSDKForSession$(l), t[5] = l, t[6] = be, t[7] = M) : M = t[7];
        let N = d(M),
            {
                metadata: xe,
                widgetId: P,
                widgetParent: F,
                widgetType: Se
            } = N,
            Ce = xe.attribution_id ?? F,
            we = xe.suggestion_message_id ?? null,
            Te = v,
            I;
        t[8] !== N || t[9] !== Te ? (I = oe(N, Te), t[8] = N, t[9] = Te, t[10] = I) : I = t[10];
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
        let B = re(N, R, z),
            De = ve ?? 0,
            V;
        t[16] === De ? V = t[17] : (V = {
            insets: {
                top: De,
                bottom: 0,
                left: 0,
                right: 0
            }
        }, t[16] = De, t[17] = V);
        let Oe = V,
            H;
        t[18] === Symbol.for(`react.memo_cache_sentinel`) ? (H = () => pe(!0), t[18] = H) : H = t[18];
        let U;
        t[19] !== Ce || t[20] !== f || t[21] !== c || t[22] !== g || t[23] !== x || t[24] !== N || t[25] !== _ || t[26] !== p || t[27] !== m || t[28] !== v || t[29] !== B || t[30] !== Oe || t[31] !== we || t[32] !== s || t[33] !== P || t[34] !== F || t[35] !== Se ? (U = (0, E.jsx)(se, {
            onReady: H,
            onClose: p,
            onRefreshOrigin: m,
            onCanGoBack: le,
            widgetRef: he,
            domain: B.domain,
            html: B.html,
            attributionId: Ce,
            widgetId: P,
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
            safeArea: Oe,
            conversation: c,
            chatSDK: N,
            clientThreadId: f,
            resolvedWidget: B,
            title: s
        }), t[19] = Ce, t[20] = f, t[21] = c, t[22] = g, t[23] = x, t[24] = N, t[25] = _, t[26] = p, t[27] = m, t[28] = v, t[29] = B, t[30] = Oe, t[31] = we, t[32] = s, t[33] = P, t[34] = F, t[35] = Se, t[36] = U) : U = t[36];
        let W = U;
        if (L?.supportsExternalPresentation) {
            let e = !D && `flex`,
                n;
            t[37] === e ? n = t[38] : (n = r(`group/dialog @container inset-0 min-h-full min-w-full cursor-default items-center justify-center overflow-auto overscroll-y-contain whitespace-normal bg-gray-200/50 backdrop-blur-[1px] dark:bg-black/50`, e), t[37] = e, t[38] = n);
            let i = !D && `modal`,
                a = !w || D,
                o = w ? `opacity-100` : `opacity-0`,
                c;
            t[39] === o ? c = t[40] : (c = r(`max-h-full w-fit max-w-[calc(100vw-2rem)]`, o), t[39] = o, t[40] = c);
            let l;
            t[41] === W ? l = t[42] : (l = (0, E.jsx)(ee, {
                className: `relative flex h-fit! max-h-full min-h-0 w-full! max-w-full flex-col overflow-hidden md:w-fit!`,
                rootClassName: `max-h-full max-w-full`,
                size: `custom`,
                children: W
            }), t[41] = W, t[42] = l);
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
            return t[47] !== _e || t[48] !== n || t[49] !== i || t[50] !== u || t[51] !== s ? (d = (0, E.jsx)(ue.Provider, {
                value: me,
                children: (0, E.jsx)(ce.Provider, {
                    value: ge,
                    children: (0, E.jsx)(de, {
                        "aria-label": s,
                        className: n,
                        closedBy: `closerequest`,
                        onClose: _e,
                        open: i,
                        children: u
                    })
                })
            }), t[47] = _e, t[48] = n, t[49] = i, t[50] = u, t[51] = s, t[52] = d) : d = t[52], d
        }
        let ke = !w,
            Ae = w ? `opacity-100` : `opacity-0`,
            G;
        t[53] === Ae ? G = t[54] : (G = r(Ae), t[53] = Ae, t[54] = G);
        let je = !w,
            K;
        t[55] !== L || t[56] !== S ? (K = L ? void 0 : {
            width: S
        }, t[55] = L, t[56] = S, t[57] = K) : K = t[57];
        let Me = L ? `h-fit! max-h-full w-full! max-w-full md:w-fit!` : S == null ? `max-w-xl lg:max-w-3xl` : `max-w-full`,
            q = w ? `opacity-100` : `opacity-0`,
            J;
        t[58] !== Me || t[59] !== q ? (J = r(`relative flex min-h-0 flex-col overflow-hidden`, Me, q), t[58] = Me, t[59] = q, t[60] = J) : J = t[60];
        let Y;
        t[61] === s ? Y = t[62] : (Y = (0, E.jsx)(o, {
            asChild: !0,
            className: `sr-only`,
            children: (0, E.jsx)(`span`, {
                children: s
            })
        }), t[61] = s, t[62] = Y);
        let X;
        t[63] !== C || t[64] !== p || t[65] !== L ? (X = !L && (0, E.jsxs)(`header`, {
            className: `pointer-events-none absolute start-0 end-0 top-0 flex items-center p-2`,
            ref: u({
                axis: `height`,
                onChange: e => {
                    let {
                        height: t
                    } = e;
                    return ye(t)
                }
            }),
            children: [C && (0, E.jsx)(ae, {
                onClick: () => he.current?.navigate({
                    delta: -1
                }),
                className: `pointer-events-auto text-white mix-blend-difference grayscale`,
                children: (0, E.jsx)(i, {})
            }), (0, E.jsx)(ne, {
                asChild: !0,
                children: (0, E.jsx)(te, {
                    onClick: p,
                    iconSize: `lg`,
                    className: `pointer-events-auto ms-auto text-white mix-blend-difference grayscale`
                })
            })]
        }), t[63] = C, t[64] = p, t[65] = L, t[66] = X) : X = t[66];
        let Z;
        t[67] !== W || t[68] !== je || t[69] !== K || t[70] !== J || t[71] !== Y || t[72] !== X ? (Z = (0, E.jsxs)(h.Content, {
            "aria-hidden": je,
            style: K,
            className: J,
            children: [Y, X, W]
        }), t[67] = W, t[68] = je, t[69] = K, t[70] = J, t[71] = Y, t[72] = X, t[73] = Z) : Z = t[73];
        let Q;
        t[74] !== w || t[75] !== Z ? (Q = (0, E.jsx)(h.Overlay, {
            showBackground: w,
            children: Z
        }), t[74] = w, t[75] = Z, t[76] = Q) : Q = t[76];
        let $;
        return t[77] !== p || t[78] !== ke || t[79] !== G || t[80] !== Q ? ($ = (0, E.jsx)(h.Root, {
            "aria-hidden": ke,
            className: G,
            isOpen: !0,
            onClose: p,
            testId: `modal-kanzi-widget`,
            children: Q
        }), t[77] = p, t[78] = ke, t[79] = G, t[80] = Q, t[81] = $) : $ = t[81], $
    }
}));
export {
    D as n, pe as t
};
//# sourceMappingURL=8d72234e-iux2qaioe7hi4mzn.js.map
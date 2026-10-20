import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Cw as ee,
    Dw as n,
    Ew as te,
    JT as ne,
    Tw as r,
    X5 as i,
    Y5 as a,
    YT as o
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as s,
    Vn as c,
    wn as l
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    YHn as u,
    qHn as re
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    n as d,
    t as ie
} from "./573d60b9-blno2vba6ijdh68h.js";

function f(e) {
    "use forget";
    let t = (0, ae.c)(85),
        {
            className: n,
            headerClassName: r,
            contentContainerClassName: i,
            titleClassName: o,
            title: s,
            description: c,
            children: l,
            primaryActionLabel: u,
            onPrimaryAction: d,
            onClose: f,
            isOpen: h,
            headerIcon: oe,
            headerIconAltText: se,
            bodyClassName: ce,
            primaryButtonClassName: le,
            secondaryButtonClassName: ue,
            isPrimaryActionDisabled: de,
            isPrimaryActionLoading: fe,
            isSecondaryActionDisabled: pe,
            sectionClassName: me,
            footerClassName: he,
            secondaryHeaderIcon: g,
            secondaryActionLabel: _,
            onSecondaryAction: v,
            testId: ge,
            showOverlayBackground: _e,
            overlayClassName: y
        } = e,
        b = h === void 0 || h,
        x = de !== void 0 && de,
        S = fe !== void 0 && fe,
        C = pe !== void 0 && pe,
        w = _e !== void 0 && _e,
        [ve, ye] = (0, p.useState)(!1),
        be = (0, p.useRef)(null),
        xe = (0, p.useRef)(null),
        Se = (0, p.useId)(),
        T = ge ?? `modal-trusted-contact-shell`,
        E;
    t[0] === f ? E = t[1] : (E = () => {
        f()
    }, t[0] = f, t[1] = E);
    let D;
    t[2] === n ? D = t[3] : (D = a(`max-h-[calc(100dvh-32px)] max-w-[min(480px,95dvw)]`, n), t[2] = n, t[3] = D);
    let O;
    t[4] === r ? O = t[5] : (O = a(`relative z-10 grid h-[214px] shrink-0 overflow-hidden max-md:h-[136px]`, r), t[4] = r, t[5] = O);
    let k;
    t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (k = (0, m.jsx)(`div`, {
        className: `absolute inset-0`,
        children: (0, m.jsx)(`img`, {
            src: ie.src,
            alt: ``,
            className: `h-full w-full bg-gradient-to-b from-white to-gray-50 object-cover`
        })
    }), t[6] = k) : k = t[6];
    let A;
    t[7] === f ? A = t[8] : (A = (0, m.jsx)(te, {
        className: `absolute end-2 top-2`,
        onClick: () => {
            f()
        }
    }), t[7] = f, t[8] = A);
    let j;
    t[9] === g ? j = t[10] : (j = g && (0, m.jsx)(`div`, {
        "data-secondary-header-icon": !0,
        className: `translate-x-1 rtl:-translate-x-1`,
        children: g
    }), t[9] = g, t[10] = j);
    let M = g && `-translate-x-1 rtl:translate-x-1`,
        N;
    t[11] === M ? N = t[12] : (N = a(`flex h-20 w-20 items-center justify-center rounded-[20px] bg-gradient-to-b from-white to-[#EEEAFC] shadow-lg dark:from-[#353535] dark:to-[#262626]`, M), t[11] = M, t[12] = N);
    let P;
    t[13] !== oe || t[14] !== se || t[15] !== N ? (P = (0, m.jsx)(`div`, {
        "data-header-icon": !0,
        className: N,
        "aria-label": se,
        children: oe
    }), t[13] = oe, t[14] = se, t[15] = N, t[16] = P) : P = t[16];
    let F;
    t[17] !== j || t[18] !== P ? (F = (0, m.jsxs)(`div`, {
        className: `pointer-events-none absolute inset-0 flex items-center justify-center`,
        children: [j, P]
    }), t[17] = j, t[18] = P, t[19] = F) : F = t[19];
    let I;
    t[20] !== A || t[21] !== F || t[22] !== O ? (I = (0, m.jsxs)(`header`, {
        "data-testid": `trusted-contact-modal-shell-header`,
        className: O,
        children: [k, A, F]
    }), t[20] = A, t[21] = F, t[22] = O, t[23] = I) : I = t[23];
    let L;
    t[24] === i ? L = t[25] : (L = a(`bg-token-bg-primary flex min-h-0 flex-1 flex-col`, i), t[24] = i, t[25] = L);
    let R;
    t[26] === me ? R = t[27] : (R = a(`relative min-h-0 flex-1 space-y-6 overflow-y-auto p-8 pb-0`, me), t[26] = me, t[27] = R);
    let z;
    t[28] === o ? z = t[29] : (z = a(`text-token-text-primary text-heading-2 max-md:text-heading-3 text-pretty`, o), t[28] = o, t[29] = z);
    let B;
    t[30] !== z || t[31] !== s || t[32] !== Se ? (B = (0, m.jsx)(`div`, {
        children: (0, m.jsx)(`h1`, {
            className: z,
            id: Se,
            children: s
        })
    }), t[30] = z, t[31] = s, t[32] = Se, t[33] = B) : B = t[33];
    let V;
    t[34] === ce ? V = t[35] : (V = a(`text-token-text-secondary text-body-regular max-md:text-footnote-regular space-y-6 *:[text-box-edge:text_alphabetic] *:[text-box-trim:trim-both]`, ce), t[34] = ce, t[35] = V);
    let H;
    t[36] !== l || t[37] !== V ? (H = (0, m.jsx)(`div`, {
        className: V,
        children: l
    }), t[36] = l, t[37] = V, t[38] = H) : H = t[38];
    let U;
    t[39] === Symbol.for(`react.memo_cache_sentinel`) ? (U = (0, m.jsx)(re, {
        className: `h-px`,
        setIsScrolledToEdge: e => {
            if (xe.current) {
                if (be.current == null) {
                    let {
                        scrollHeight: e,
                        clientHeight: t
                    } = xe.current;
                    be.current = e > t
                }
                if (!be.current) {
                    ye(!0);
                    return
                }
                ye(!e)
            }
        }
    }), t[39] = U) : U = t[39];
    let W;
    t[40] !== R || t[41] !== B || t[42] !== H ? (W = (0, m.jsxs)(`section`, {
        "data-testid": `trusted-contact-modal-shell-scroll-area`,
        className: R,
        ref: xe,
        children: [B, H, U]
    }), t[40] = R, t[41] = B, t[42] = H, t[43] = W) : W = t[43];
    let Ce = ve ? `[box-shadow:var(--sharp-edge-bottom-shadow-placeholder)]` : `[box-shadow:var(--sharp-edge-bottom-shadow)]`,
        G;
    t[44] !== he || t[45] !== Ce ? (G = a(`flex shrink-0 justify-end gap-3 px-8 pt-4 pb-8`, Ce, he), t[44] = he, t[45] = Ce, t[46] = G) : G = t[46];
    let K;
    t[47] !== C || t[48] !== v || t[49] !== _ || t[50] !== ue ? (K = _ && (0, m.jsx)(ne, {
        color: `secondary`,
        className: a(`rounded-full px-4 py-2`, ue),
        disabled: C,
        onClick: () => {
            C || v?.()
        },
        children: _
    }), t[47] = C, t[48] = v, t[49] = _, t[50] = ue, t[51] = K) : K = t[51];
    let q;
    t[52] === le ? q = t[53] : (q = a(`rounded-full px-4 py-2`, le), t[52] = le, t[53] = q);
    let we = x || S,
        J;
    t[54] !== x || t[55] !== S || t[56] !== d ? (J = () => {
        !x && !S && d()
    }, t[54] = x, t[55] = S, t[56] = d, t[57] = J) : J = t[57];
    let Y;
    t[58] !== S || t[59] !== u || t[60] !== q || t[61] !== we || t[62] !== J ? (Y = (0, m.jsx)(ne, {
        color: `primary`,
        className: q,
        disabled: we,
        loading: S,
        onClick: J,
        children: u
    }), t[58] = S, t[59] = u, t[60] = q, t[61] = we, t[62] = J, t[63] = Y) : Y = t[63];
    let X;
    t[64] !== G || t[65] !== K || t[66] !== Y ? (X = (0, m.jsxs)(`footer`, {
        className: G,
        children: [K, Y]
    }), t[64] = G, t[65] = K, t[66] = Y, t[67] = X) : X = t[67];
    let Z;
    t[68] !== L || t[69] !== W || t[70] !== X ? (Z = (0, m.jsxs)(`div`, {
        className: L,
        children: [W, X]
    }), t[68] = L, t[69] = W, t[70] = X, t[71] = Z) : Z = t[71];
    let Q;
    t[72] !== I || t[73] !== Z ? (Q = (0, m.jsxs)(`div`, {
        className: `flex size-full min-h-0 flex-col justify-center p-0`,
        children: [I, Z]
    }), t[72] = I, t[73] = Z, t[74] = Q) : Q = t[74];
    let $;
    return t[75] !== c || t[76] !== b || t[77] !== y || t[78] !== w || t[79] !== Q || t[80] !== T || t[81] !== E || t[82] !== D || t[83] !== s ? ($ = (0, m.jsx)(ee, {
        testId: T,
        isOpen: b,
        onClose: E,
        noPadding: !0,
        showOverlayBackground: w,
        overlayClassName: y,
        className: D,
        isScrollable: !1,
        contentClassName: `min-h-0`,
        size: `custom`,
        footerContent: null,
        title: s,
        description: c,
        visuallyHiddenHeader: !0,
        children: Q
    }), t[75] = c, t[76] = b, t[77] = y, t[78] = w, t[79] = Q, t[80] = T, t[81] = E, t[82] = D, t[83] = s, t[84] = $) : $ = t[84], $
}
var ae, p, m, h = e((() => {
    ae = l(), d(), o(), n(), r(), u(), i(), p = t(c()), m = s()
}));
export {
    h as n, f as t
};
//# sourceMappingURL=8cc478ca-b8po1pwijfwgvvhd.js.map
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as n,
    Ait as r,
    Ant as i,
    Nrt as a,
    Pit as o,
    Prt as s,
    Qit as c,
    a7 as l,
    dz as u,
    fz as d,
    iat as f,
    iw as p,
    kT as m,
    knt as h,
    l7 as g,
    lw as _,
    ow as v,
    uw as y
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as b,
    Ln as x,
    Nn as S,
    Rn as C,
    Vn as w,
    wn as T,
    zn as E
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Gh as D,
    Kh as O,
    Ml as k,
    Nl as ee
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    c as A,
    l as j
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    n as M,
    t as N
} from "./f0880031-e3ys0zo7ugyrac09.js";
import {
    n as P,
    t as te
} from "./8cc478ca-maaqwbh89ujvr3u7.js";

function ne(e) {
    "use forget";
    let t = (0, z.c)(13),
        {
            onClose: n
        } = e,
        r = E(),
        i;
    t[0] === r ? i = t[1] : (i = r.formatMessage(V.loadingTitle), t[0] = r, t[1] = i);
    let a;
    t[2] === i ? a = t[3] : (a = (0, B.jsx)(`span`, {
        className: `text-token-text-primary mx-auto block max-w-[320px] text-[28px] leading-[1.15] font-semibold tracking-[-0.03em]`,
        children: i
    }), t[2] = i, t[3] = a);
    let o;
    t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, B.jsx)(u, {
        className: `text-token-text-primary h-8 w-8`
    }), t[4] = o) : o = t[4];
    let s;
    t[5] === r ? s = t[6] : (s = r.formatMessage(V.loadingDescription), t[5] = r, t[6] = s);
    let c;
    t[7] === s ? c = t[8] : (c = (0, B.jsxs)(`div`, {
        className: `text-token-text-secondary mx-auto flex max-w-[330px] flex-col items-center gap-4 text-center text-[16px] leading-6 tracking-[-0.027em]`,
        children: [o, (0, B.jsx)(`p`, {
            children: s
        })]
    }), t[7] = s, t[8] = c);
    let l;
    return t[9] !== n || t[10] !== a || t[11] !== c ? (l = (0, B.jsx)(p, {
        testId: `modal-trusted-contact-public-loading`,
        isOpen: !0,
        onClose: n,
        noPadding: !0,
        size: `custom`,
        showOverlayBackground: !1,
        overlayClassName: `bg-black/40`,
        className: `bg-token-bg-primary w-full max-w-[min(400px,calc(100dvw-32px))] overflow-hidden rounded-2xl px-10 py-10 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] max-md:px-6 max-md:py-8`,
        headerClassName: `justify-center p-0`,
        footerContent: null,
        textCenter: !0,
        title: a,
        children: c
    }), t[9] = n, t[10] = a, t[11] = c, t[12] = l) : l = t[12], l
}

function re(e, t) {
    return t?.trim() || e.formatMessage(V.inviterNameFallback)
}

function ie(e, t) {
    if (t == null) return null;
    let n = new Date(t * 1e3);
    return e.formatDate(n, {
        month: `long`,
        day: `numeric`,
        year: `numeric`
    })
}

function ae(e) {
    "use forget";
    let t = (0, z.c)(14),
        {
            title: n,
            isOpen: r,
            onToggle: i,
            children: a
        } = e,
        o;
    t[0] === n ? o = t[1] : (o = (0, B.jsx)(`span`, {
        children: n
    }), t[0] = n, t[1] = o);
    let s;
    t[2] === r ? s = t[3] : (s = r ? (0, B.jsx)(_, {
        "aria-hidden": !0,
        className: `icon h-4 w-4 shrink-0`
    }) : (0, B.jsx)(O, {
        "aria-hidden": !0,
        className: `icon h-4 w-4 shrink-0`
    }), t[2] = r, t[3] = s);
    let c;
    t[4] !== i || t[5] !== o || t[6] !== s ? (c = (0, B.jsxs)(`button`, {
        type: `button`,
        onClick: i,
        className: `text-token-text-primary flex w-full items-center justify-between gap-4 py-4 text-start text-[16px] leading-[26px] font-semibold tracking-[-0.025em]`,
        children: [o, s]
    }), t[4] = i, t[5] = o, t[6] = s, t[7] = c) : c = t[7];
    let l;
    t[8] !== a || t[9] !== r ? (l = r ? (0, B.jsx)(`div`, {
        className: `text-token-text-secondary pb-4 text-[16px] leading-[26px] tracking-[-0.025em]`,
        children: a
    }) : null, t[8] = a, t[9] = r, t[10] = l) : l = t[10];
    let u;
    return t[11] !== c || t[12] !== l ? (u = (0, B.jsxs)(`div`, {
        className: `border-token-border-light border-b`,
        children: [c, l]
    }), t[11] = c, t[12] = l, t[13] = u) : u = t[13], u
}

function F(e) {
    "use forget";
    let t = (0, z.c)(33),
        {
            testId: n,
            title: r,
            children: i,
            primaryActionLabel: a,
            primaryActionColor: o,
            secondaryActionLabel: s,
            modalClassName: c,
            titleClassName: l,
            bodyClassName: u,
            actionsClassName: d,
            isPrimaryActionDisabled: f,
            isPrimaryActionLoading: h,
            isSecondaryActionDisabled: g,
            onPrimaryAction: _,
            onSecondaryAction: v,
            onClose: y
        } = e,
        b = o === void 0 ? `primary` : o,
        x = c === void 0 ? `bg-token-bg-primary w-full max-w-[min(400px,calc(100dvw-32px))] overflow-hidden rounded-2xl px-10 py-10 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] max-md:px-6 max-md:py-8` : c,
        S = l === void 0 ? `text-token-text-primary mx-auto block max-w-[320px] text-[28px] leading-[1.15] font-semibold tracking-[-0.03em]` : l,
        C = u === void 0 ? `text-token-text-secondary mx-auto max-w-[330px] text-center text-[16px] leading-6 tracking-[-0.027em]` : u,
        w = d === void 0 ? `space-y-3` : d,
        T = f !== void 0 && f,
        E = h !== void 0 && h,
        D = g !== void 0 && g,
        O;
    t[0] !== r || t[1] !== S ? (O = (0, B.jsx)(`span`, {
        className: S,
        children: r
    }), t[0] = r, t[1] = S, t[2] = O) : O = t[2];
    let k;
    t[3] !== C || t[4] !== i ? (k = (0, B.jsx)(`div`, {
        className: C,
        children: i
    }), t[3] = C, t[4] = i, t[5] = k) : k = t[5];
    let ee = T || E,
        A;
    t[6] !== T || t[7] !== E || t[8] !== _ ? (A = () => {
        !T && !E && _()
    }, t[6] = T, t[7] = E, t[8] = _, t[9] = A) : A = t[9];
    let j;
    t[10] !== E || t[11] !== b || t[12] !== a || t[13] !== ee || t[14] !== A ? (j = (0, B.jsx)(m, {
        color: b,
        fullWidth: !0,
        size: `large`,
        className: `rounded-full`,
        disabled: ee,
        loading: E,
        onClick: A,
        children: a
    }), t[10] = E, t[11] = b, t[12] = a, t[13] = ee, t[14] = A, t[15] = j) : j = t[15];
    let M;
    t[16] !== D || t[17] !== v || t[18] !== s ? (M = s && (0, B.jsx)(m, {
        color: `secondary`,
        fullWidth: !0,
        size: `large`,
        className: `rounded-full`,
        disabled: D,
        onClick: () => {
            D || v?.()
        },
        children: s
    }), t[16] = D, t[17] = v, t[18] = s, t[19] = M) : M = t[19];
    let N;
    t[20] !== w || t[21] !== j || t[22] !== M ? (N = (0, B.jsxs)(`div`, {
        className: w,
        children: [j, M]
    }), t[20] = w, t[21] = j, t[22] = M, t[23] = N) : N = t[23];
    let P;
    t[24] !== k || t[25] !== N ? (P = (0, B.jsxs)(`div`, {
        className: `space-y-8`,
        children: [k, N]
    }), t[24] = k, t[25] = N, t[26] = P) : P = t[26];
    let te;
    return t[27] !== x || t[28] !== y || t[29] !== P || t[30] !== O || t[31] !== n ? (te = (0, B.jsx)(p, {
        testId: n,
        isOpen: !0,
        onClose: y,
        noPadding: !0,
        size: `custom`,
        showOverlayBackground: !1,
        overlayClassName: `bg-black/40`,
        className: x,
        headerClassName: `justify-center p-0`,
        footerContent: null,
        textCenter: !0,
        title: O,
        children: P
    }), t[27] = x, t[28] = y, t[29] = P, t[30] = O, t[31] = n, t[32] = te) : te = t[32], te
}

function I(e) {
    "use forget";
    let t = (0, z.c)(74),
        {
            inviterName: n,
            inviterAccountIdentifier: r,
            invitationDeadlineTimestamp: i,
            isPending: a,
            initialOpenSection: o,
            onAccept: s,
            onDecline: c,
            onClose: l
        } = e,
        u = i === void 0 ? null : i,
        d = a !== void 0 && a,
        f = o === void 0 ? null : o,
        p = E(),
        m = M() ? V.participationEligibilityBodyKorea : V.participationEligibilityBody,
        [h, g] = (0, ce.useState)(f),
        _;
    t[0] !== p || t[1] !== n ? (_ = re(p, n), t[0] = p, t[1] = n, t[2] = _) : _ = t[2];
    let v = _,
        y;
    if (t[3] !== p || t[4] !== u) {
        let e = ie(p, u);
        y = e ? p.formatMessage(V.acceptByDeadlineHint, {
            invitationDeadline: e
        }) : p.formatMessage(V.acceptDeadlineHint), t[3] = p, t[4] = u, t[5] = y
    } else y = t[5];
    let b = y,
        x;
    t[6] === v ? x = t[7] : (x = (0, B.jsx)(S, {
        ...V.acceptTitle,
        values: {
            inviterName: v
        }
    }), t[6] = v, t[7] = x);
    let C;
    t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (C = (0, B.jsx)(ee, {
        "aria-hidden": !0,
        className: `icon text-token-text-primary h-12 w-12`
    }), t[8] = C) : C = t[8];
    let w;
    t[9] === p ? w = t[10] : (w = p.formatMessage(V.iconAltText), t[9] = p, t[10] = w);
    let T;
    t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (T = (0, B.jsx)(S, {
        ...V.acceptButton
    }), t[11] = T) : T = t[11];
    let D;
    t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (D = (0, B.jsx)(S, {
        ...V.closeButton
    }), t[12] = D) : D = t[12];
    let O;
    t[13] !== d || t[14] !== s ? (O = () => {
        d || s()
    }, t[13] = d, t[14] = s, t[15] = O) : O = t[15];
    let k;
    t[16] === r ? k = t[17] : (k = r ? (0, B.jsx)(`p`, {
        className: `text-token-text-secondary text-[16px] leading-[26px] tracking-[-0.025em]`,
        children: r
    }) : null, t[16] = r, t[17] = k);
    let A;
    t[18] === b ? A = t[19] : (A = (0, B.jsx)(`p`, {
        className: `text-token-text-secondary text-[16px] leading-[26px] tracking-[-0.025em]`,
        children: b
    }), t[18] = b, t[19] = A);
    let j;
    t[20] === Symbol.for(`react.memo_cache_sentinel`) ? (j = (0, B.jsx)(`p`, {
        className: `text-token-text-secondary text-[16px] leading-[26px] tracking-[-0.025em]`,
        children: (0, B.jsx)(S, {
            ...V.acceptSummary
        })
    }), t[20] = j) : j = t[20];
    let N;
    t[21] === v ? N = t[22] : (N = (0, B.jsx)(`p`, {
        className: `text-token-text-secondary text-[16px] leading-[26px] tracking-[-0.025em]`,
        children: (0, B.jsx)(S, {
            ...V.acceptSupportSummary,
            values: {
                inviterName: v
            }
        })
    }), t[21] = v, t[22] = N);
    let P;
    t[23] === p ? P = t[24] : (P = p.formatMessage(V.whatIsTrustedContactTitle), t[23] = p, t[24] = P);
    let ne = h === `whatToExpect`,
        F;
    t[25] === Symbol.for(`react.memo_cache_sentinel`) ? (F = () => {
        g(se)
    }, t[25] = F) : F = t[25];
    let I;
    t[26] === v ? I = t[27] : (I = (0, B.jsx)(`li`, {
        children: (0, B.jsx)(S, {
            ...V.whatToExpectOne,
            values: {
                inviterName: v
            }
        })
    }), t[26] = v, t[27] = I);
    let L, R;
    t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (L = (0, B.jsx)(`li`, {
        children: (0, B.jsx)(S, {
            ...V.whatToExpectTwo
        })
    }), R = (0, B.jsx)(`li`, {
        children: (0, B.jsx)(S, {
            ...V.whatToExpectThree
        })
    }), t[28] = L, t[29] = R) : (L = t[28], R = t[29]);
    let H;
    t[30] === p ? H = t[31] : (H = p.formatMessage(V.safetyReviewProcessInlineLabel), t[30] = p, t[31] = H);
    let U;
    t[32] === H ? U = t[33] : (U = (0, B.jsx)(`li`, {
        children: (0, B.jsx)(S, {
            ...V.whatToExpectFour,
            values: {
                safetyReviewProcessLink: (0, B.jsx)(`a`, {
                    href: le,
                    target: `_blank`,
                    rel: `noreferrer`,
                    className: `underline underline-offset-2`,
                    children: H
                })
            }
        })
    }), t[32] = H, t[33] = U);
    let W;
    t[34] !== I || t[35] !== U ? (W = (0, B.jsxs)(`ul`, {
        className: `list-disc space-y-4 ps-5`,
        children: [I, L, R, U]
    }), t[34] = I, t[35] = U, t[36] = W) : W = t[36];
    let G;
    t[37] !== P || t[38] !== ne || t[39] !== W ? (G = (0, B.jsx)(ae, {
        title: P,
        isOpen: ne,
        onToggle: F,
        children: W
    }), t[37] = P, t[38] = ne, t[39] = W, t[40] = G) : G = t[40];
    let K;
    t[41] === p ? K = t[42] : (K = p.formatMessage(V.participationTitle), t[41] = p, t[42] = K);
    let ue = h === `conversationStarters`,
        de;
    t[43] === Symbol.for(`react.memo_cache_sentinel`) ? (de = () => {
        g(oe)
    }, t[43] = de) : de = t[43];
    let q;
    t[44] !== d || t[45] !== c ? (q = () => {
        d || c()
    }, t[44] = d, t[45] = c, t[46] = q) : q = t[46];
    let J;
    t[47] === p ? J = t[48] : (J = p.formatMessage(V.declineInlineLabel), t[47] = p, t[48] = J);
    let Y;
    t[49] !== q || t[50] !== J ? (Y = (0, B.jsx)(`p`, {
        children: (0, B.jsx)(S, {
            ...m,
            values: {
                declineAction: (0, B.jsx)(`em`, {
                    children: (0, B.jsx)(`button`, {
                        type: `button`,
                        className: `text-token-text-secondary underline underline-offset-2`,
                        onClick: q,
                        children: J
                    })
                })
            }
        })
    }), t[49] = q, t[50] = J, t[51] = Y) : Y = t[51];
    let X;
    t[52] === p ? X = t[53] : (X = p.formatMessage(V.helpCenterInlineLabel), t[52] = p, t[53] = X);
    let Z;
    t[54] === X ? Z = t[55] : (Z = (0, B.jsx)(`p`, {
        className: `mt-4`,
        children: (0, B.jsx)(S, {
            ...V.participationHelpCenterBody,
            values: {
                helpCenterLink: (0, B.jsx)(`a`, {
                    href: le,
                    target: `_blank`,
                    rel: `noreferrer`,
                    className: `underline underline-offset-2`,
                    children: X
                })
            }
        })
    }), t[54] = X, t[55] = Z);
    let Q;
    t[56] !== K || t[57] !== ue || t[58] !== Y || t[59] !== Z ? (Q = (0, B.jsxs)(ae, {
        title: K,
        isOpen: ue,
        onToggle: de,
        children: [Y, Z]
    }), t[56] = K, t[57] = ue, t[58] = Y, t[59] = Z, t[60] = Q) : Q = t[60];
    let $;
    t[61] !== G || t[62] !== Q ? ($ = (0, B.jsxs)(`div`, {
        children: [G, Q]
    }), t[61] = G, t[62] = Q, t[63] = $) : $ = t[63];
    let fe;
    return t[64] !== d || t[65] !== l || t[66] !== O || t[67] !== k || t[68] !== A || t[69] !== N || t[70] !== $ || t[71] !== x || t[72] !== w ? (fe = (0, B.jsxs)(te, {
        testId: `modal-trusted-contact-public-accept`,
        title: x,
        titleClassName: `text-[24px] leading-[1.04] font-semibold tracking-[-0.03em] max-md:text-[24px]`,
        headerIcon: C,
        headerIconAltText: w,
        primaryActionLabel: T,
        className: `max-w-[min(480px,calc(100dvw-32px))]`,
        overlayClassName: `bg-black/40`,
        primaryButtonClassName: `min-w-[86px] px-7 py-2.5 text-[15px] leading-5`,
        secondaryActionLabel: D,
        secondaryButtonClassName: `min-w-[86px] px-7 py-2.5 text-[15px] leading-5`,
        isPrimaryActionDisabled: d,
        isPrimaryActionLoading: d,
        isSecondaryActionDisabled: d,
        sectionClassName: `space-y-4 px-6 pt-4 pb-0 max-md:px-6 max-md:pt-4 max-md:pb-0`,
        footerClassName: `px-6 pt-3 pb-8 max-md:px-6 max-md:pb-8`,
        onPrimaryAction: O,
        onSecondaryAction: l,
        onClose: l,
        bodyClassName: `space-y-4 text-[16px] leading-[26px] tracking-[-0.025em]`,
        children: [k, A, j, N, $]
    }), t[64] = d, t[65] = l, t[66] = O, t[67] = k, t[68] = A, t[69] = N, t[70] = $, t[71] = x, t[72] = w, t[73] = fe) : fe = t[73], fe
}

function oe(e) {
    return e === `conversationStarters` ? null : `conversationStarters`
}

function se(e) {
    return e === `whatToExpect` ? null : `whatToExpect`
}

function L(e) {
    "use forget";
    let t = (0, z.c)(14),
        {
            ownerName: n,
            isPending: r,
            onDecline: i,
            onGoBack: a,
            onClose: o
        } = e,
        s = r !== void 0 && r,
        c = E(),
        l;
    t[0] !== c || t[1] !== n ? (l = re(c, n), t[0] = c, t[1] = n, t[2] = l) : l = t[2];
    let u = l,
        d, f;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, B.jsx)(S, {
        ...V.declineTitle
    }), f = (0, B.jsx)(S, {
        ...V.declineButton
    }), t[3] = d, t[4] = f) : (d = t[3], f = t[4]);
    let p;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (p = (0, B.jsx)(S, {
        ...V.goBackButton
    }), t[5] = p) : p = t[5];
    let m;
    t[6] === u ? m = t[7] : (m = (0, B.jsx)(`p`, {
        children: (0, B.jsx)(S, {
            ...V.declineDescription,
            values: {
                ownerName: u
            }
        })
    }), t[6] = u, t[7] = m);
    let h;
    return t[8] !== s || t[9] !== o || t[10] !== i || t[11] !== a || t[12] !== m ? (h = (0, B.jsx)(F, {
        testId: `modal-trusted-contact-public-decline`,
        title: d,
        primaryActionLabel: f,
        primaryActionColor: `danger-outline`,
        secondaryActionLabel: p,
        isPrimaryActionDisabled: s,
        isPrimaryActionLoading: s,
        isSecondaryActionDisabled: s,
        onPrimaryAction: i,
        onSecondaryAction: a,
        onClose: o,
        children: m
    }), t[8] = s, t[9] = o, t[10] = i, t[11] = a, t[12] = m, t[13] = h) : h = t[13], h
}

function R(e) {
    "use forget";
    let t = (0, z.c)(16),
        {
            variant: n,
            ownerName: r,
            errorKind: i,
            onClose: a
        } = e,
        o = E(),
        s, c;
    if (t[0] !== i || t[1] !== o || t[2] !== r || t[3] !== n) {
        let e = re(o, r),
            a;
        t[6] !== o || t[7] !== n ? (a = n === `accepted` ? o.formatMessage(V.acceptedTitle) : n === `declined` ? o.formatMessage(V.declinedTitle) : o.formatMessage(V.errorTitle), t[6] = o, t[7] = n, t[8] = a) : a = t[8], c = a, s = n === `accepted` ? o.formatMessage(V.acceptedDescription, {
            ownerName: e
        }) : n === `declined` ? o.formatMessage(V.declinedDescription, {
            ownerName: e
        }) : i === `invalidLink` ? o.formatMessage(V.invalidLinkDescription) : o.formatMessage(V.genericErrorDescription), t[0] = i, t[1] = o, t[2] = r, t[3] = n, t[4] = s, t[5] = c
    } else s = t[4], c = t[5];
    let l = s,
        u;
    t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, B.jsx)(S, {
        ...V.closeButton
    }), t[9] = u) : u = t[9];
    let d;
    t[10] === l ? d = t[11] : (d = (0, B.jsx)(`p`, {
        children: l
    }), t[10] = l, t[11] = d);
    let f;
    return t[12] !== a || t[13] !== d || t[14] !== c ? (f = (0, B.jsx)(F, {
        testId: `modal-trusted-contact-public-result`,
        title: c,
        primaryActionLabel: u,
        onPrimaryAction: a,
        onClose: a,
        children: d
    }), t[12] = a, t[13] = d, t[14] = c, t[15] = f) : f = t[15], f
}
var z, ce, B, le, V, H = e((() => {
    z = T(), n(), y(), D(), k(), v(), d(), N(), P(), ce = t(w()), C(), B = b(), le = `https://help.openai.com/articles/20001105`, V = x({
        loadingTitle: {
            id: `trustedContact.publicLink.loading.title`,
            defaultMessage: `Loading invitation`
        },
        loadingDescription: {
            id: `trustedContact.publicLink.loading.description`,
            defaultMessage: `Getting your trusted contact invitation details.`
        },
        acceptTitle: {
            id: `trustedContact.publicLink.accept.title`,
            defaultMessage: `{inviterName} wants to add you as a trusted contact`
        },
        acceptDeadlineHint: {
            id: `trustedContact.publicLink.accept.deadlineHint`,
            defaultMessage: `Choose whether to participate.`
        },
        acceptByDeadlineHint: {
            id: `trustedContact.publicLink.accept.acceptByDeadlineHint`,
            defaultMessage: `Choose whether to participate by {invitationDeadline}.`
        },
        acceptSummary: {
            id: `trustedContact.publicLink.accept.summary.v2`,
            defaultMessage: `Having a trusted contact can make it easier for someone to connect with a friend, family member, or trusted adult if they ever discuss suicide in a way that indicates a serious safety risk.`
        },
        acceptSupportSummary: {
            id: `trustedContact.publicLink.accept.supportSummary`,
            defaultMessage: `This can be a meaningful step toward having support in place, in case {inviterName} ever needs it.`
        },
        declineInlineLabel: {
            id: `trustedContact.publicLink.accept.inlineDeclineLabel`,
            defaultMessage: `decline`
        },
        whatIsTrustedContactTitle: {
            id: `trustedContact.publicLink.accept.accordion.whatIsTrustedContactTitle`,
            defaultMessage: `What to expect`
        },
        whatToExpectOne: {
            id: `trustedContact.publicLink.accept.accordion.whatToExpectOne.v2`,
            defaultMessage: `As a trusted contact, we may notify you if we detect that {inviterName} has discussed suicide with ChatGPT in a way that indicates a serious safety concern.`
        },
        whatToExpectTwo: {
            id: `trustedContact.publicLink.accept.accordion.whatToExpectTwo.v2`,
            defaultMessage: `If we notify you, we'll only share the general reason: that suicide came up in a way that may indicate a serious safety concern. We won't share chat details or transcripts.`
        },
        whatToExpectThree: {
            id: `trustedContact.publicLink.accept.accordion.whatToExpectThree.v2`,
            defaultMessage: `Your role is simply to check in, listen, and help them find additional support if needed. You're not expected to handle emergencies or be their sole support.`
        },
        whatToExpectFour: {
            id: `trustedContact.publicLink.accept.accordion.whatToExpectFour`,
            defaultMessage: `We take care to send these notifications only in specific cases, though we may not always interpret every conversation perfectly. Learn more about how our {safetyReviewProcessLink} works.`
        },
        safetyReviewProcessInlineLabel: {
            id: `trustedContact.publicLink.accept.inlineSafetyReviewProcessLabel`,
            defaultMessage: `safety review process`
        },
        helpCenterInlineLabel: {
            id: `trustedContact.publicLink.accept.inlineHelpCenterLabel`,
            defaultMessage: `Help Center`
        },
        participationTitle: {
            id: `trustedContact.publicLink.accept.accordion.participationTitle`,
            defaultMessage: `Choose whether to participate`
        },
        participationEligibilityBody: {
            id: `trustedContact.publicLink.accept.accordion.participationEligibilityBody.v2`,
            defaultMessage: `You must be 18 or older to be a trusted contact. If you aren't able to participate, or were named by mistake, you can {declineAction}.`
        },
        participationEligibilityBodyKorea: {
            id: `trustedContact.publicLink.accept.accordion.participationEligibilityBodyKorea.v1`,
            defaultMessage: `You and the person who invited you must be 19 or older to participate. If you aren't able to participate, or were named by mistake, you can {declineAction}.`
        },
        participationHelpCenterBody: {
            id: `trustedContact.publicLink.accept.accordion.participationHelpCenterBody.v2`,
            defaultMessage: `To learn more about being a trusted contact and how to have a conversation with your friend or loved one, visit our {helpCenterLink}.`
        },
        acceptButton: {
            id: `trustedContact.publicLink.accept.primaryButton`,
            defaultMessage: `Accept`
        },
        closeButton: {
            id: `trustedContact.publicLink.common.closeButton`,
            defaultMessage: `Close`
        },
        declineTitle: {
            id: `trustedContact.publicLink.decline.title`,
            defaultMessage: `Are you sure you want to decline?`
        },
        declineDescription: {
            id: `trustedContact.publicLink.decline.description`,
            defaultMessage: `{ownerName} won't be able to invite you as a trusted contact again, but they can add someone else.`
        },
        declineButton: {
            id: `trustedContact.publicLink.decline.primaryButton`,
            defaultMessage: `Decline`
        },
        goBackButton: {
            id: `trustedContact.publicLink.decline.secondaryButton`,
            defaultMessage: `Go back`
        },
        acceptedTitle: {
            id: `trustedContact.publicLink.result.accepted.title`,
            defaultMessage: `Thanks for confirming`
        },
        acceptedDescription: {
            id: `trustedContact.publicLink.result.accepted.description`,
            defaultMessage: `You've been added as a trusted contact for {ownerName}.`
        },
        declinedTitle: {
            id: `trustedContact.publicLink.result.declined.title`,
            defaultMessage: `You've declined`
        },
        declinedDescription: {
            id: `trustedContact.publicLink.result.declined.description`,
            defaultMessage: `You won’t be added as {ownerName}’s trusted contact.`
        },
        errorTitle: {
            id: `trustedContact.publicLink.result.error.title`,
            defaultMessage: `We couldn't complete that request`
        },
        invalidLinkDescription: {
            id: `trustedContact.publicLink.result.error.invalidLinkDescription`,
            defaultMessage: `This link is invalid or has expired.`
        },
        genericErrorDescription: {
            id: `trustedContact.publicLink.result.error.genericDescription`,
            defaultMessage: `Please try again.`
        },
        iconAltText: {
            id: `trustedContact.publicLink.common.iconAltText`,
            defaultMessage: `Illustration of a trusted contact represented by a person inside a heart`
        },
        inviterNameFallback: {
            id: `trustedContact.publicLink.common.inviterNameFallback`,
            defaultMessage: `Someone`
        }
    })
}));

function U(e) {
    return e.status === 400 || e.status === 404 || e.status === 410 ? {
        status: `error`,
        errorKind: `invalidLink`
    } : {
        status: `error`,
        errorKind: `generic`
    }
}
async function W(e) {
    try {
        let t = await l.safeGet(`/trusted_contact/nominee`, {
            parameters: {
                query: {
                    token: e
                }
            },
            authOption: r.SendIfAvailable
        });
        return {
            status: `success`,
            inviterName: t.name ?? null,
            inviterAccountIdentifier: t.account_id ?? null,
            invitationDeadlineTimestamp: t.deadline_timestamp ?? null
        }
    } catch (e) {
        return e instanceof c ? U(e) : (i.error(`Unexpected trusted contact nominee params failure`, {
            error: e
        }), {
            status: `error`,
            errorKind: `generic`
        })
    }
}
async function G(e, t, n) {
    try {
        return {
            status: `success`,
            ownerName: (await l.safePost(e, {
                requestBody: {
                    token: t,
                    trusted_contact_id: t
                },
                authOption: r.SendIfAvailable
            })).user_name ?? null
        }
    } catch (e) {
        return e instanceof c ? U(e) : (i.error(n, {
            error: e
        }), {
            status: `error`,
            errorKind: `generic`
        })
    }
}

function K(e) {
    return G(`/trusted_contact/accept`, e, `Unexpected trusted contact accept link failure`)
}

function ue(e) {
    return G(`/trusted_contact/removal`, e, `Unexpected trusted contact decline link failure`)
}
var de = e((() => {
    o(), f(), h(), g()
}));

function q({
    children: e
}) {
    return s() ? (0, J.jsx)(A, {
        children: e
    }) : (0, J.jsx)(`main`, {
        className: `bg-token-bg-primary min-h-dvh`,
        "data-testid": `trusted-contact-public-link-bare-shell`,
        children: e
    })
}
var J, Y = e((() => {
    j(), a(), J = b()
}));
export {
    W as a, L as c, H as d, ue as i, ne as l, Y as n, de as o, K as r, I as s, q as t, R as u
};
//# sourceMappingURL=7bce5d58-e0h9mexzr2bx36tu.js.map
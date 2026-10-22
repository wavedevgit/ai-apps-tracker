import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    At as r,
    Bz as i,
    CN as a,
    Drt as o,
    Ert as s,
    Int as c,
    J7 as l,
    LU as u,
    Oat as d,
    Ort as f,
    Pnt as p,
    Q7 as m,
    Qy as h,
    Rz as g,
    Vz as _,
    Zy as v,
    c7 as y,
    cn as b,
    dC as x,
    eE as S,
    eY as C,
    fC as w,
    gq as T,
    k8 as E,
    l7 as D,
    lY as O,
    q5 as k,
    rq as A,
    uq as j,
    wN as M,
    wat as N,
    zU as ee,
    zz as te
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Bn as P,
    Rn as F,
    Vn as ne,
    p as I,
    s as re,
    wn as L,
    zn as ie
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Bhn as ae,
    Ghn as oe,
    Hhn as R,
    Uhn as z,
    Vhn as B,
    Whn as V,
    gR as se,
    hR as H
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    Ai as ce,
    Fi as U,
    Mi as le,
    Ni as ue,
    Oi as de,
    Pi as fe,
    bS as pe,
    ji as me,
    ki as he,
    yS as ge
} from "./30901919-ikyi1r55w2i02fom.js";
import {
    n as W,
    t as _e
} from "./2ab5aa6c-dz9vfahz8wuftpyq.js";
import {
    n as ve,
    r as ye
} from "./c01cad0d-kcla04z8lzj7ivsr.js";

function be(e) {
    "use forget";
    let t = (0, xe.c)(33),
        {
            isFullscreen: n,
            codeBlockRef: r,
            isEscapeCloseDisabled: i,
            onEscapeClose: a,
            firstElementRef: o,
            lastElementRef: s,
            children: c,
            ref: l
        } = e,
        u = (0, G.useRef)(null),
        [d, f] = (0, G.useState)(null),
        p = ie(),
        m;
    t[0] === p ? m = t[1] : (m = p.formatMessage({
        id: `code-block-fullscreen-dialog-label`,
        defaultMessage: `Code block editor`
    }), t[0] = p, t[1] = m);
    let h = m,
        g, _;
    t[2] !== i || t[3] !== n || t[4] !== a ? (g = () => {
        if (!n) return;
        let e = e => {
            i || e.key !== `Escape` && e.key !== `Esc` || (e.preventDefault(), e.stopPropagation(), a())
        };
        return document.addEventListener(`keydown`, e, !0), () => {
            document.removeEventListener(`keydown`, e, !0)
        }
    }, _ = [i, n, a], t[2] = i, t[3] = n, t[4] = a, t[5] = g, t[6] = _) : (g = t[5], _ = t[6]), (0, G.useEffect)(g, _);
    let v, b;
    t[7] === r ? (v = t[8], b = t[9]) : (v = () => ({
        measurePlaceholderMetrics: () => {
            let e = r.current;
            if (!e) return;
            let t = getComputedStyle(e),
                n = Number.parseFloat(t.marginTop) || 0,
                i = Number.parseFloat(t.marginBottom) || 0;
            f({
                height: e.offsetHeight,
                width: e.offsetWidth,
                marginTop: n,
                marginBottom: i
            })
        }
    }), b = [r], t[7] = r, t[8] = v, t[9] = b), (0, G.useImperativeHandle)(l, v, b);
    let x = !n && `mt-4 mb-1`,
        S;
    t[10] === x ? S = t[11] : (S = y(`relative w-full`, x), t[10] = x, t[11] = S);
    let C = n ? d ?? void 0 : void 0,
        w = n ? -1 : void 0,
        T = n ? `dialog` : void 0,
        E = n ? !0 : void 0,
        D = n ? h : void 0,
        O = n && `bg-token-bg-primary fixed inset-0 z-20 flex flex-col items-stretch px-4 pb-4`,
        k;
    t[12] === O ? k = t[13] : (k = y(O), t[12] = O, t[13] = k);
    let A;
    t[14] !== n || t[15] !== s ? (A = n && (0, K.jsx)(`span`, {
        tabIndex: 0,
        "aria-hidden": `true`,
        "data-code-block-focus-sentinel": `true`,
        className: `h-0 w-0 overflow-hidden opacity-0`,
        onFocus: () => {
            if (s.current != null) {
                s.current.focus();
                return
            }
            u.current?.focus()
        }
    }), t[14] = n, t[15] = s, t[16] = A) : A = t[16];
    let j;
    t[17] !== o || t[18] !== n ? (j = n && (0, K.jsx)(`span`, {
        tabIndex: 0,
        "aria-hidden": `true`,
        "data-code-block-focus-sentinel": `true`,
        className: `h-0 w-0 overflow-hidden opacity-0`,
        onFocus: () => {
            o.current?.focus()
        }
    }), t[17] = o, t[18] = n, t[19] = j) : j = t[19];
    let M;
    t[20] !== c || t[21] !== T || t[22] !== E || t[23] !== D || t[24] !== k || t[25] !== A || t[26] !== j || t[27] !== w ? (M = (0, K.jsxs)(`div`, {
        ref: u,
        tabIndex: w,
        role: T,
        "aria-modal": E,
        "aria-label": D,
        className: k,
        children: [A, c, j]
    }), t[20] = c, t[21] = T, t[22] = E, t[23] = D, t[24] = k, t[25] = A, t[26] = j, t[27] = w, t[28] = M) : M = t[28];
    let N;
    return t[29] !== M || t[30] !== S || t[31] !== C ? (N = (0, K.jsx)(`div`, {
        className: S,
        style: C,
        children: M
    }), t[29] = M, t[30] = S, t[31] = C, t[32] = N) : N = t[32], N
}
var xe, G, K, q = e((() => {
        xe = L(), D(), G = t(ne()), F(), K = P()
    })),
    J, Y, X, Z = e((() => {
        _(), V(), z(), B(), J = oe({
            id: `code-block-header-actions`,
            icons: {
                download: {
                    normal: ae,
                    small: R
                }
            }
        }), Y = i.Cross, X = J.Download
    }));

function Se(e) {
    "use forget";
    let t = (0, Ce.c)(12),
        {
            disabled: r,
            className: i,
            ref: a,
            onClick: o
        } = e,
        s = r !== void 0 && r,
        c = (0, we.useRef)(null),
        l, u;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (l = () => ({
        focus: () => {
            c.current?.focus()
        }
    }), u = [], t[0] = l, t[1] = u) : (l = t[0], u = t[1]), (0, we.useImperativeHandle)(a, l, u);
    let d = ie(),
        f;
    t[2] === d ? f = t[3] : (f = d.formatMessage({
        id: `CodeBlockCloseButton.closeTooltip`,
        defaultMessage: `Close`
    }), t[2] = d, t[3] = f);
    let p = f,
        m;
    t[4] !== s || t[5] !== p || t[6] !== o ? (m = (0, Te.jsx)(n, {
        icon: Y,
        color: `ghost`,
        size: `medium`,
        "aria-disabled": s,
        "aria-label": p,
        ref: c,
        onClick: o,
        className: `rounded-lg border-0`
    }), t[4] = s, t[5] = p, t[6] = o, t[7] = m) : m = t[7];
    let h;
    return t[8] !== i || t[9] !== p || t[10] !== m ? (h = (0, Te.jsx)(v, {
        label: p,
        className: i,
        children: m
    }), t[8] = i, t[9] = p, t[10] = m, t[11] = h) : h = t[11], h
}
var Ce, we, Te, Ee = e((() => {
    Ce = L(), S(), h(), Z(), we = t(ne()), F(), Te = P()
}));

function De(e) {
    "use forget";
    let t = (0, Oe.c)(33),
        {
            onClick: r,
            disabled: i,
            className: a,
            kind: s,
            withText: c
        } = e,
        l = s === void 0 ? `png` : s,
        u = c !== void 0 && c,
        d = ie(),
        p;
    t[0] !== d || t[1] !== l ? (p = l === `code` ? d.formatMessage({
        id: `codeBlockExportButton.downloadCodeFile`,
        defaultMessage: `Download code file`
    }) : d.formatMessage({
        id: `codeBlockExportButton.downloadPng`,
        defaultMessage: `Download PNG`
    }), t[0] = d, t[1] = l, t[2] = p) : p = t[2];
    let m = p,
        h;
    t[3] !== d || t[4] !== l || t[5] !== u ? (h = u ? l === `code` ? d.formatMessage({
        id: `codeBlockExportButton.downloadFile`,
        defaultMessage: `Download file`
    }) : d.formatMessage({
        id: `codeBlockExportButton.downloadImage`,
        defaultMessage: `Download image`
    }) : null, t[3] = d, t[4] = l, t[5] = u, t[6] = h) : h = t[6];
    let g = h,
        _;
    t[7] === a ? _ = t[8] : (_ = y(`inline-flex`, a), t[7] = a, t[8] = _);
    let b;
    t[9] !== i || t[10] !== l || t[11] !== r ? (b = e => {
        if (i) {
            e.preventDefault();
            return
        }
        o.count(f.CODE_BLOCKS, `chatgpt_code_block_export_button_clicked`, {
            kind: l
        }), r()
    }, t[9] = i, t[10] = l, t[11] = r, t[12] = b) : b = t[12];
    let x = u ? `rounded-lg px-3` : `size-9 rounded-full px-2`,
        S = !i && `hover:bg-token-bg-secondary`,
        C = i && `cursor-not-allowed hover:bg-transparent`,
        w;
    t[13] !== x || t[14] !== S || t[15] !== C ? (w = y(`py-2 text-sm font-medium`, x, S, C), t[13] = x, t[14] = S, t[15] = C, t[16] = w) : w = t[16];
    let T;
    t[17] !== g || t[18] !== u ? (T = u ? (0, ke.jsxs)(`span`, {
        className: `inline-flex items-center gap-1.5 whitespace-nowrap`,
        children: [(0, ke.jsx)(X, {
            className: `icon-md`
        }), g]
    }) : (0, ke.jsx)(X, {
        className: `icon-md`
    }), t[17] = g, t[18] = u, t[19] = T) : T = t[19];
    let E;
    t[20] !== i || t[21] !== m || t[22] !== w || t[23] !== T || t[24] !== b ? (E = (0, ke.jsx)(n, {
        type: `button`,
        color: `ghost`,
        label: m,
        visuallyDisabled: i,
        "aria-disabled": i,
        onClick: b,
        className: w,
        children: T
    }), t[20] = i, t[21] = m, t[22] = w, t[23] = T, t[24] = b, t[25] = E) : E = t[25];
    let D;
    t[26] !== E || t[27] !== _ ? (D = (0, ke.jsx)(`span`, {
        className: _,
        children: E
    }), t[26] = E, t[27] = _, t[28] = D) : D = t[28];
    let O;
    return t[29] !== m || t[30] !== D || t[31] !== u ? (O = (0, ke.jsx)(v, {
        label: m,
        disabled: u,
        children: D
    }), t[29] = m, t[30] = D, t[31] = u, t[32] = O) : O = t[32], O
}
var Oe, ke, Ae = e((() => {
    Oe = L(), S(), h(), Z(), s(), D(), F(), ke = P()
}));

function je(e) {
    "use forget";
    let t = (0, Me.c)(5),
        {
            clientThreadId: n,
            messageId: r,
            codeIndex: i
        } = e,
        a = O(n),
        o = a != null && r != null,
        s;
    return t[0] !== o || t[1] !== i || t[2] !== r || t[3] !== a ? (s = {
        mutationKey: o ? [`code-block-share`, a, r, i] : [`code-block-share`, `disabled`, i],
        mutationFn: async () => !o || i == null ? null : await l.safePost(`/share/post`, {
            requestBody: {
                attachments_to_create: [{
                    kind: `code_block`,
                    conversation_id: a,
                    message_id: r,
                    code_index: i
                }]
            },
            authOption: N.SendIfAvailable
        })
    }, t[0] = o, t[1] = i, t[2] = r, t[3] = a, t[4] = s) : s = t[4], I(s)
}
var Me, Ne = e((() => {
    Me = L(), C(), d(), m(), re()
}));

function Pe() {
    return j()
}
var Fe, Ie, Le, Re = e((() => {
        Fe = L(), S(), Ne(), ge(), se(), E(), te(), u(), c(), w(), A(), s(), a(), D(), F(), Ie = P(), Le = e => {
            "use forget";
            let t = (0, Fe.c)(28),
                {
                    clientThreadId: r,
                    messageId: i,
                    codeIndex: a,
                    flushSave: s,
                    language: c
                } = e,
                l = ie(),
                u = ee(),
                d = k(Pe),
                m;
            t[0] !== r || t[1] !== a || t[2] !== i ? (m = {
                clientThreadId: r,
                messageId: i,
                codeIndex: a
            }, t[0] = r, t[1] = a, t[2] = i, t[3] = m) : m = t[3];
            let h = je(m),
                _;
            t[4] === l ? _ = t[5] : (_ = l.formatMessage({
                id: `CodeBlockFullScreenHeader.shareLabel`,
                defaultMessage: `Share`
            }), t[4] = l, t[5] = _);
            let v = _,
                b;
            t[6] !== l || t[7] !== u ? (b = () => {
                u.danger(l.formatMessage({
                    id: `CodeBlock.share.error`,
                    defaultMessage: `Failed to create share link.`
                }))
            }, t[6] = l, t[7] = u, t[8] = b) : b = t[8];
            let S = M(b),
                C;
            t[9] !== r || t[10] !== h || t[11] !== s || t[12] !== l || t[13] !== c || t[14] !== i || t[15] !== S || t[16] !== u ? (C = async () => {
                if (!r || !i || h.isPending) return;
                if (o.count(f.CODE_BLOCKS, `chatgpt_code_block_share_button_clicked`), !await s?.()) {
                    S();
                    return
                }
                let e;
                try {
                    e = await h.mutateAsync()
                } catch {
                    S();
                    return
                }
                let t;
                if (e != null && e.post != null && (t = e.post.id), !t) {
                    S();
                    return
                }
                p.logStructuredEvent(`ChatgptCodeBlockShareButtonClicked`, {
                    conversationId: r,
                    messageId: i,
                    language: c,
                    postId: t
                });
                let n = H(t);
                try {
                    await x(n), u.success(l.formatMessage({
                        id: `CodeBlock.share.success`,
                        defaultMessage: `Share link copied`
                    }))
                } catch {
                    u.danger(l.formatMessage({
                        id: `CodeBlock.share.copyError`,
                        defaultMessage: `Failed to copy share link.`
                    }))
                }
            }, t[9] = r, t[10] = h, t[11] = s, t[12] = l, t[13] = c, t[14] = i, t[15] = S, t[16] = u, t[17] = C) : C = t[17];
            let w = M(C),
                T = h.isPending ? g : pe,
                E = d ? `rounded-lg px-2 whitespace-nowrap` : `size-9 rounded-full p-0`,
                D = !h.isPending && `hover:bg-token-bg-secondary`,
                O;
            t[18] !== E || t[19] !== D ? (O = y(`py-2 text-sm font-medium`, E, D), t[18] = E, t[19] = D, t[20] = O) : O = t[20];
            let A = d ? v : null,
                j;
            return t[21] !== h.isPending || t[22] !== w || t[23] !== v || t[24] !== T || t[25] !== O || t[26] !== A ? (j = (0, Ie.jsx)(n, {
                icon: T,
                color: `ghost`,
                size: `medium`,
                label: v,
                className: O,
                disabled: h.isPending,
                onClick: w,
                children: A
            }), t[21] = h.isPending, t[22] = w, t[23] = v, t[24] = T, t[25] = O, t[26] = A, t[27] = j) : j = t[27], j
        }
    })),
    ze, Be, Ve, He = e((() => {
        ze = L(), S(), h(), U(), ue(), D(), F(), Be = P(), Ve = e => {
            "use forget";
            let t = (0, ze.c)(19),
                {
                    isOpen: r,
                    hasErrorOutput: i,
                    isDisabled: a,
                    onClick: o
                } = e,
                s = r !== void 0 && r,
                c = i !== void 0 && i,
                l = a !== void 0 && a,
                u = ie(),
                d;
            t[0] === u ? d = t[1] : (d = u.formatMessage({
                id: `CodeBlockFullScreenHeader.consoleToggleLabel`,
                defaultMessage: `Toggle console`
            }), t[0] = u, t[1] = d);
            let f = d,
                p = c ? le : fe,
                m;
            t[2] !== l || t[3] !== o ? (m = () => {
                l || o?.()
            }, t[2] = l, t[3] = o, t[4] = m) : m = t[4];
            let h = !l && `hover:bg-token-bg-secondary`,
                g = l && `cursor-not-allowed opacity-50 hover:bg-transparent`,
                _ = s && `bg-token-bg-secondary`,
                b;
            t[5] !== h || t[6] !== g || t[7] !== _ ? (b = y(`h-9 w-9 rounded-full p-0`, h, g, _), t[5] = h, t[6] = g, t[7] = _, t[8] = b) : b = t[8];
            let x;
            t[9] !== f || t[10] !== l || t[11] !== s || t[12] !== b || t[13] !== p || t[14] !== m ? (x = (0, Be.jsx)(`span`, {
                className: `inline-flex`,
                children: (0, Be.jsx)(n, {
                    icon: p,
                    type: `button`,
                    color: `ghost`,
                    size: `medium`,
                    label: f,
                    "aria-pressed": s,
                    "aria-disabled": l,
                    onClick: m,
                    className: b
                })
            }), t[9] = f, t[10] = l, t[11] = s, t[12] = b, t[13] = p, t[14] = m, t[15] = x) : x = t[15];
            let S;
            return t[16] !== f || t[17] !== x ? (S = (0, Be.jsx)(v, {
                label: f,
                children: x
            }), t[16] = f, t[17] = x, t[18] = S) : S = t[18], S
        }
    }));

function Ue() {
    return j()
}
var We, Q, Ge, Ke = e((() => {
    We = L(), S(), Ee(), W(), Ae(), Re(), He(), me(), he(), E(), A(), D(), F(), Q = P(), Ge = e => {
        "use forget";
        let t = (0, We.c)(64),
            {
                code: r,
                messageId: i,
                clientThreadId: a,
                codeIndex: o,
                isStreaming: s,
                isPreviewOpen: c,
                isExecutionPaneOnly: l,
                isPreviewDisabled: u,
                isPreviewExportable: d,
                isPreviewExportDisabled: f,
                previewExportKind: p,
                showConsoleToggle: m,
                isConsoleOpen: h,
                hasConsoleErrorOutput: g,
                showCopyButton: _,
                showCodeToggle: v,
                isShareable: b,
                flushSave: x,
                language: S,
                additionalActionButtons: C,
                isCodeOpen: w,
                isCodeDisabled: T,
                onPreviewClick: E,
                onPreviewExportClick: D,
                onPreviewHover: O,
                onConsoleToggle: A,
                onCodeClick: j,
                showCloseButton: M,
                onCloseClick: N,
                closeButtonRef: ee
            } = e,
            te = s !== void 0 && s,
            P = l !== void 0 && l,
            F = u !== void 0 && u,
            ne = d !== void 0 && d,
            I = f !== void 0 && f,
            re = p === void 0 ? `png` : p,
            L = m !== void 0 && m,
            ae = h !== void 0 && h,
            oe = g !== void 0 && g,
            R = _ === void 0 || _,
            z = v === void 0 || v,
            B = b !== void 0 && b,
            V = T !== void 0 && T,
            se = M === void 0 || M,
            H = ie(),
            U = k(Ue),
            le = L && (U || c),
            ue = U && c && ne && D != null,
            fe = le || B || R || ue || C != null,
            pe;
        t[0] === H ? pe = t[1] : (pe = H.formatMessage({
            id: `CodeBlockFullScreenHeader.codeLabel`,
            defaultMessage: `Code`
        }), t[0] = H, t[1] = pe);
        let me = pe,
            he;
        t[2] === H ? he = t[3] : (he = H.formatMessage({
            id: `CodeBlockFullScreenHeader.previewLabel`,
            defaultMessage: `Preview`
        }), t[2] = H, t[3] = he);
        let ge = he,
            W;
        t[4] === H ? W = t[5] : (W = H.formatMessage({
            id: `CodeBlockFullScreenHeader.consoleLabel`,
            defaultMessage: `Console`
        }), t[4] = H, t[5] = W);
        let ve = P ? W : ge,
            ye;
        t[6] === H ? ye = t[7] : (ye = H.formatMessage({
            id: `CodeBlockFullScreenHeader.viewToggleLabel`,
            defaultMessage: `Toggle view`
        }), t[6] = H, t[7] = ye);
        let be = ye,
            xe;
        t[8] !== H || t[9] !== w || t[10] !== U ? (xe = U && w ? H.formatMessage({
            id: `CodeBlockFullScreenHeader.hideCodeViewLabel`,
            defaultMessage: `Hide code`
        }) : H.formatMessage({
            id: `CodeBlockFullScreenHeader.showCodeViewLabel`,
            defaultMessage: `Show code`
        }), t[8] = H, t[9] = w, t[10] = U, t[11] = xe) : xe = t[11];
        let G = xe,
            K;
        t[12] !== ee || t[13] !== N || t[14] !== se ? (K = se && (0, Q.jsx)(Se, {
            onClick: N,
            ref: ee
        }), t[12] = ee, t[13] = N, t[14] = se, t[15] = K) : K = t[15];
        let q;
        t[16] !== G || t[17] !== V || t[18] !== w || t[19] !== U || t[20] !== j || t[21] !== z ? (q = U && z && (0, Q.jsx)(n, {
            icon: w ? ce : de,
            color: `ghost`,
            size: `medium`,
            "aria-label": G,
            "aria-pressed": w,
            disabled: V,
            onClick: () => {
                V || j?.()
            },
            className: `rounded-lg`,
            children: G
        }), t[16] = G, t[17] = V, t[18] = w, t[19] = U, t[20] = j, t[21] = z, t[22] = q) : q = t[22];
        let J;
        t[23] !== K || t[24] !== q ? (J = (0, Q.jsxs)(`div`, {
            className: `justify-self-start`,
            children: [K, q]
        }), t[23] = K, t[24] = q, t[25] = J) : J = t[25];
        let Y;
        t[26] !== me || t[27] !== V || t[28] !== w || t[29] !== F || t[30] !== c || t[31] !== U || t[32] !== j || t[33] !== E || t[34] !== O || t[35] !== ve || t[36] !== z || t[37] !== be ? (Y = F ? (0, Q.jsx)(`div`, {}) : (0, Q.jsx)(`div`, {
            className: `justify-self-center`,
            children: !U && z && (0, Q.jsxs)(`div`, {
                role: `group`,
                "aria-label": be,
                className: `bg-token-bg-tertiary inline-grid min-w-[190px] grid-cols-2 gap-1 rounded-full p-1`,
                children: [(0, Q.jsx)(`button`, {
                    type: `button`,
                    "aria-label": me,
                    "aria-pressed": !c,
                    "aria-disabled": !c || V,
                    className: y(`h-8 rounded-full px-4 text-sm font-medium transition-colors`, w ? `bg-token-bg-primary text-token-text-primary` : `text-token-text-secondary`, !w && !V && `hover:text-token-text-primary`, V && `text-token-text-quaternary cursor-not-allowed`),
                    onClick: () => {
                        V || w || j?.()
                    },
                    children: me
                }), (0, Q.jsx)(`button`, {
                    type: `button`,
                    "aria-label": ve,
                    "aria-pressed": c,
                    "aria-disabled": c || F,
                    className: y(`h-8 rounded-full px-4 text-sm font-medium transition-colors`, c ? `bg-token-bg-primary text-token-text-primary` : `text-token-text-secondary`, !c && !F && `hover:text-token-text-primary`, F && `text-token-text-quaternary cursor-not-allowed`),
                    onClick: () => {
                        F || c || E()
                    },
                    onMouseEnter: O,
                    children: ve
                })]
            })
        }), t[26] = me, t[27] = V, t[28] = w, t[29] = F, t[30] = c, t[31] = U, t[32] = j, t[33] = E, t[34] = O, t[35] = ve, t[36] = z, t[37] = be, t[38] = Y) : Y = t[38];
        let X;
        t[39] !== C || t[40] !== a || t[41] !== r || t[42] !== o || t[43] !== x || t[44] !== oe || t[45] !== ae || t[46] !== F || t[47] !== I || t[48] !== B || t[49] !== te || t[50] !== S || t[51] !== i || t[52] !== A || t[53] !== D || t[54] !== re || t[55] !== fe || t[56] !== le || t[57] !== R || t[58] !== ue ? (X = fe ? (0, Q.jsxs)(`div`, {
            className: `flex items-center gap-0.5 justify-self-end`,
            children: [le ? (0, Q.jsx)(Ve, {
                isOpen: ae,
                hasErrorOutput: oe,
                isDisabled: F,
                onClick: A
            }) : null, R ? (0, Q.jsx)(_e, {
                code: r,
                messageId: i,
                clientThreadId: a,
                disabled: te
            }) : null, ue ? (0, Q.jsx)(De, {
                onClick: D,
                disabled: I,
                kind: re
            }) : null, B ? (0, Q.jsx)(Le, {
                clientThreadId: a,
                messageId: i,
                codeIndex: o,
                flushSave: x,
                language: S
            }) : null, C]
        }) : (0, Q.jsx)(`div`, {}), t[39] = C, t[40] = a, t[41] = r, t[42] = o, t[43] = x, t[44] = oe, t[45] = ae, t[46] = F, t[47] = I, t[48] = B, t[49] = te, t[50] = S, t[51] = i, t[52] = A, t[53] = D, t[54] = re, t[55] = fe, t[56] = le, t[57] = R, t[58] = ue, t[59] = X) : X = t[59];
        let Z;
        return t[60] !== J || t[61] !== Y || t[62] !== X ? (Z = (0, Q.jsx)(`div`, {
            className: `sticky top-0 z-1 select-none`,
            children: (0, Q.jsxs)(`div`, {
                className: `grid w-full grid-cols-[1fr_auto_1fr] items-center gap-2 py-1.5 pe-1.5 font-sans`,
                children: [J, Y, X]
            })
        }), t[60] = J, t[61] = Y, t[62] = X, t[63] = Z) : Z = t[63], Z
    }
}));

function qe(e) {
    return e.includes(`'react'`) || e.includes(`"react"`)
}

function Je(e) {
    return tt.test(e)
}

function Ye(e) {
    return nt.test(e)
}

function Xe(e) {
    return it.test(e) ? `vega-lite` : rt.test(e) ? `vega` : null
}

function Ze({
    previewLanguage: e,
    languageTag: t,
    isStreaming: n
}) {
    return e == null ? n ? t === `javascript` || t === `typescript` : !1 : !0
}

function Qe(e, t, n) {
    if (n != null) return n;
    switch (e) {
        case `html`:
            return ve(t) ? `svg` : `html`;
        case `xml`:
            return ve(t) ? `svg` : null;
        case `svg`:
            return `svg`;
        case `vega`:
            return `vega`;
        case `vega-lite`:
        case `vegalite`:
            return `vega-lite`;
        case `json`:
            return Xe(t);
        case `mermaid`:
            return `mermaid`;
        case `threejs`:
            return `threejs`;
        case `recharts`:
            return `recharts`;
        case `react`:
            return Je(t) ? `react` : null;
        case `javascript`:
        case `typescript`:
            return qe(t) && Je(t) ? `react` : null;
        case void 0:
            return ve(t) ? `svg` : null;
        default:
            return null
    }
}

function $e(e) {
    return e === `python` ? `python` : null
}

function et(e, t) {
    return e === `react` || e === `html` && Ye(t)
}
var tt, nt, rt, it, at = e((() => {
    ye(), tt = /\bexport\s+default\b/, nt = /<html(?:\s|>)/i, rt = /["']\$schema["']\s*:\s*["']https:\/\/vega\.github\.io\/schema\/vega\/v\d+(?:\.\d+)?\.json["']/i, it = /["']\$schema["']\s*:\s*["']https:\/\/vega\.github\.io\/schema\/vega-lite\/v\d+(?:\.\d+)?\.json["']/i
}));

function ot(e, t) {
    if (t <= 0 || !Number.isFinite(e)) return dt;
    let n = Math.min(.8, ft / t),
        r = Math.max(n, 1 - pt / t);
    return Math.min(r, Math.max(n, e))
}

function st(e) {
    "use forget";
    let t = (0, lt.c)(11);
    (0, $.useRef)(!1);
    let n;
    t[0] === e ? n = t[1] : (n = $.Children.count(e), t[0] = e, t[1] = n);
    let r = n,
        i, a;
    t[2] === e ? (i = t[3], a = t[4]) : (i = null, a = null, $.Children.forEach(e, (e, t) => {
        if (t === 0) {
            i = e;
            return
        }
        t === 1 && (a = e)
    }), t[2] = e, t[3] = i, t[4] = a);
    let o, s;
    t[5] === r ? (o = t[6], s = t[7]) : (o = () => {}, s = [r], t[5] = r, t[6] = o, t[7] = s), (0, $.useEffect)(o, s);
    let c;
    return t[8] !== i || t[9] !== a ? (c = [i, a], t[8] = i, t[9] = a, t[10] = c) : c = t[10], c
}

function ct() {
    return T()
}
var lt, $, ut, dt, ft, pt, mt, ht, gt = e((() => {
    lt = L(), E(), A(), a(), D(), r(), $ = t(ne()), ut = P(), dt = .33, ft = 200, pt = 200, mt = 8, ht = e => {
        "use forget";
        let t = (0, lt.c)(72),
            {
                "data-custom-highlighting-behavior": n,
                isActive: r,
                isLeftPaneVisible: i,
                isRightPaneVisible: a,
                ref: o,
                children: s,
                className: c,
                onRightPaneAnimationComplete: l
            } = e,
            u = i === void 0 || i,
            d = a === void 0 || a,
            f = (0, $.useRef)(null),
            p = (0, $.useRef)(null),
            m = (0, $.useRef)(null),
            h = (0, $.useRef)(null),
            g = (0, $.useRef)(dt),
            _ = (0, $.useRef)(0),
            v = (0, $.useRef)(null),
            x = (0, $.useRef)(null),
            S = (0, $.useRef)(null),
            C = (0, $.useRef)(null),
            [w, T] = (0, $.useState)(dt),
            [E, D] = (0, $.useState)(!1),
            [O, A] = (0, $.useState)(!u),
            N = k(ct),
            [ee, te] = st(s),
            P;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (P = () => {
            let e = document.body.style;
            S.current != null && (e.cursor = S.current, S.current = null), C.current != null && (e.userSelect = C.current, C.current = null)
        }, t[0] = P) : P = t[0];
        let F = M(P),
            ne;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (ne = e => {
            let t = f.current?.getBoundingClientRect().width;
            if (t == null || t <= 0) return g.current;
            let n = ot(e, t);
            return g.current = n, p.current?.style.setProperty(`flex-basis`, `${n*100}%`), n
        }, t[1] = ne) : ne = t[1];
        let I = M(ne),
            re;
        t[2] === I ? re = t[3] : (re = e => {
            let t = f.current?.getBoundingClientRect();
            if (t == null || t.width <= 0) return g.current;
            let n = (e - _.current - t.left) / Math.max(t.width, 1);
            return I(n)
        }, t[2] = I, t[3] = re);
        let L = M(re),
            ie;
        t[4] === L ? ie = t[5] : (ie = () => {
            x.current != null && (window.cancelAnimationFrame(x.current), x.current = null);
            let e = v.current;
            return v.current = null, e == null ? g.current : L(e)
        }, t[4] = L, t[5] = ie);
        let ae = M(ie),
            oe;
        t[6] === ae ? oe = t[7] : (oe = e => {
            v.current = e, x.current ??= window.requestAnimationFrame(() => {
                x.current = null, ae()
            })
        }, t[6] = ae, t[7] = oe);
        let R = M(oe),
            z;
        t[8] !== ae || t[9] !== F ? (z = () => {
            let e = h.current,
                t = m.current;
            e != null && t?.hasPointerCapture(e) && t.releasePointerCapture(e), h.current = null;
            let n = ae();
            T(n), _.current = 0, F(), D(!1)
        }, t[8] = ae, t[9] = F, t[10] = z) : z = t[10];
        let B = M(z),
            V;
        t[11] === R ? V = t[12] : (V = e => {
            if (e.pointerType === `mouse` && e.button !== 0) return;
            e.preventDefault();
            let t = document.body.style;
            S.current ??= t.cursor, C.current ??= t.userSelect, t.cursor = `col-resize`, t.userSelect = `none`, h.current = e.pointerId, m.current = e.currentTarget, e.currentTarget.setPointerCapture(e.pointerId);
            let n = f.current?.getBoundingClientRect();
            if (n == null || n.width <= 0) _.current = 0;
            else {
                let t = n.left + g.current * n.width;
                _.current = e.clientX - t
            }
            D(!0), R(e.clientX)
        }, t[11] = R, t[12] = V);
        let se = M(V),
            H;
        t[13] === I ? H = t[14] : (H = () => {
            let e = I(dt);
            T(e)
        }, t[13] = I, t[14] = H);
        let ce = M(H),
            U, le;
        t[15] !== E || t[16] !== R || t[17] !== B ? (U = () => {
            if (!E) return;
            let e = e => {
                    e.pointerId === h.current && R(e.clientX)
                },
                t = e => {
                    e.pointerId === h.current && (R(e.clientX), B())
                };
            return document.addEventListener(`pointermove`, e, {
                passive: !0
            }), document.addEventListener(`pointerup`, t), document.addEventListener(`pointercancel`, t), window.addEventListener(`blur`, B), () => {
                document.removeEventListener(`pointermove`, e), document.removeEventListener(`pointerup`, t), document.removeEventListener(`pointercancel`, t), window.removeEventListener(`blur`, B)
            }
        }, le = [E, R, B], t[15] = E, t[16] = R, t[17] = B, t[18] = U, t[19] = le) : (U = t[18], le = t[19]), (0, $.useEffect)(U, le);
        let ue, de;
        t[20] !== I || t[21] !== r || t[22] !== B ? (ue = () => {
            if (!r) {
                B();
                return
            }
            let e = () => {
                let e = I(g.current);
                T(e)
            };
            return e(), window.addEventListener(`resize`, e), () => {
                window.removeEventListener(`resize`, e)
            }
        }, de = [I, r, B], t[20] = I, t[21] = r, t[22] = B, t[23] = ue, t[24] = de) : (ue = t[23], de = t[24]), (0, $.useEffect)(ue, de);
        let fe, pe;
        t[25] === B ? (fe = t[26], pe = t[27]) : (fe = () => () => {
            B()
        }, pe = [B], t[25] = B, t[26] = fe, t[27] = pe), (0, $.useEffect)(fe, pe);
        let me, he;
        t[28] === u ? (me = t[29], he = t[30]) : (me = () => {
            u && A(!1)
        }, he = [u], t[28] = u, t[29] = me, t[30] = he), (0, $.useEffect)(me, he);
        let ge = k(j),
            W = !u && O,
            _e = r || ge ? u || d : u,
            ve = r && u || d,
            ye = r && u && d,
            be = Math.max(1 - w, 1e-4),
            xe = ye ? mt / be : 0,
            G = `${1/w*100}%`,
            K = `calc(${100/be}% + ${xe}px)`,
            q;
        t[31] === o ? q = t[32] : (q = e => {
            f.current = e, o != null && (o.current = e)
        }, t[31] = o, t[32] = q);
        let J = r && `flex h-full min-h-0 flex-1 items-stretch overflow-hidden pb-4`,
            Y = !r && `relative`,
            X = E && `select-none`,
            Z;
        t[33] !== c || t[34] !== J || t[35] !== Y || t[36] !== X ? (Z = y(c, J, Y, X), t[33] = c, t[34] = J, t[35] = Y, t[36] = X, t[37] = Z) : Z = t[37];
        let Se;
        t[38] !== w || t[39] !== r || t[40] !== u || t[41] !== d || t[42] !== ee || t[43] !== G || t[44] !== N || t[45] !== W || t[46] !== _e ? (Se = _e && (0, ut.jsx)(`div`, {
            ref: p,
            className: y(`h-full min-h-0 min-w-0`, r && `shrink-0`),
            style: r ? {
                flexBasis: `${w*100}%`
            } : void 0,
            children: (0, ut.jsx)(b.div, {
                initial: !1,
                "aria-hidden": W ? !0 : void 0,
                inert: W,
                animate: r ? {
                    x: u ? `0` : `-100%`,
                    width: d ? `100%` : G
                } : {
                    x: `0`,
                    width: `100%`
                },
                transition: {
                    duration: r && !N ? .22 : 0,
                    ease: `easeInOut`
                },
                className: y(`h-full min-h-0 min-w-0`, W && `pointer-events-none invisible`),
                onAnimationComplete: () => {
                    r && !u && A(!0)
                },
                children: ee
            })
        }), t[38] = w, t[39] = r, t[40] = u, t[41] = d, t[42] = ee, t[43] = G, t[44] = N, t[45] = W, t[46] = _e, t[47] = Se) : Se = t[47];
        let Ce;
        t[48] !== E || t[49] !== ge || t[50] !== N || t[51] !== ce || t[52] !== ye || t[53] !== se || t[54] !== B ? (Ce = ye && (0, ut.jsx)(`div`, {
            ref: m,
            role: `separator`,
            "aria-orientation": `vertical`,
            className: y(`bg-token-text-tertiary z-10 w-2 shrink-0 origin-center transform-gpu cursor-ew-resize opacity-0 transition-[transform,opacity]`, N ? `duration-0` : `duration-220`, E && `scale-x-[0.5] opacity-75`, !ge && `pointer-events-none invisible`),
            onPointerDown: se,
            onLostPointerCapture: B,
            onDoubleClick: ce
        }), t[48] = E, t[49] = ge, t[50] = N, t[51] = ce, t[52] = ye, t[53] = se, t[54] = B, t[55] = Ce) : Ce = t[55];
        let we;
        t[56] !== r || t[57] !== u || t[58] !== d || t[59] !== l || t[60] !== N || t[61] !== te || t[62] !== K || t[63] !== ve ? (we = ve && (0, ut.jsx)(`div`, {
            className: y(r && `grid h-full min-h-0 min-w-0 flex-1 grid-cols-[minmax(0,1fr)]`),
            children: (0, ut.jsx)(b.div, {
                initial: !1,
                className: y(r && `h-full min-h-0 min-w-0 justify-self-end`),
                animate: r ? {
                    width: u ? `100%` : K,
                    x: d ? `0` : `100%`
                } : {
                    x: `0`,
                    width: `100%`
                },
                transition: {
                    duration: r && !N ? .22 : 0,
                    ease: `easeInOut`
                },
                onAnimationComplete: () => {
                    r && !d && l?.()
                },
                children: te
            })
        }), t[56] = r, t[57] = u, t[58] = d, t[59] = l, t[60] = N, t[61] = te, t[62] = K, t[63] = ve, t[64] = we) : we = t[64];
        let Te;
        return t[65] !== n || t[66] !== q || t[67] !== Z || t[68] !== Se || t[69] !== Ce || t[70] !== we ? (Te = (0, ut.jsxs)(`div`, {
            "data-custom-highlighting-behavior": n,
            ref: q,
            className: Z,
            children: [Se, Ce, we]
        }), t[65] = n, t[66] = q, t[67] = Z, t[68] = Se, t[69] = Ce, t[70] = we, t[71] = Te) : Te = t[71], Te
    }
}));
export {
    at as a, Ge as c, q as d, Qe as i, Ke as l, gt as n, et as o, $e as r, Ze as s, ht as t, be as u
};
//# sourceMappingURL=9e6b8179-mmh2m17r5xy4f2t8.js.map
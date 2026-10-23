import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    A8 as r,
    At as i,
    Bz as a,
    CN as o,
    I7 as s,
    Irt as c,
    K5 as l,
    Knt as u,
    LU as d,
    Lrt as f,
    M7 as p,
    Pat as m,
    Qy as h,
    Rat as g,
    Rrt as _,
    Rz as v,
    Vz as y,
    Wnt as b,
    Zy as x,
    cn as S,
    dC as C,
    eE as w,
    eY as T,
    fC as E,
    gq as D,
    j5 as O,
    lY as k,
    q5 as A,
    rq as j,
    uq as M,
    wN as N,
    zU as ee,
    zz as te
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as P,
    Rn as F,
    Vn as ne,
    p as I,
    s as re,
    wn as L,
    zn as R
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    _R as ie,
    cgn as ae,
    dgn as z,
    fgn as B,
    gR as V,
    lgn as H,
    sgn as oe,
    ugn as U
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Ai as W,
    Di as se,
    Ei as ce,
    Mi as le,
    Ni as ue,
    Oi as de,
    _S as fe,
    ji as pe,
    ki as me,
    vS as he
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    n as ge,
    t as _e
} from "./2ab5aa6c-b9jxmwevrdxoirtf.js";
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
            ref: u
        } = e,
        d = (0, G.useRef)(null),
        [f, p] = (0, G.useState)(null),
        m = R(),
        h;
    t[0] === m ? h = t[1] : (h = m.formatMessage({
        id: `code-block-fullscreen-dialog-label`,
        defaultMessage: `Code block editor`
    }), t[0] = m, t[1] = h);
    let g = h,
        _, v;
    t[2] !== i || t[3] !== n || t[4] !== a ? (_ = () => {
        if (!n) return;
        let e = e => {
            i || e.key !== `Escape` && e.key !== `Esc` || (e.preventDefault(), e.stopPropagation(), a())
        };
        return document.addEventListener(`keydown`, e, !0), () => {
            document.removeEventListener(`keydown`, e, !0)
        }
    }, v = [i, n, a], t[2] = i, t[3] = n, t[4] = a, t[5] = _, t[6] = v) : (_ = t[5], v = t[6]), (0, G.useEffect)(_, v);
    let y, b;
    t[7] === r ? (y = t[8], b = t[9]) : (y = () => ({
        measurePlaceholderMetrics: () => {
            let e = r.current;
            if (!e) return;
            let t = getComputedStyle(e),
                n = Number.parseFloat(t.marginTop) || 0,
                i = Number.parseFloat(t.marginBottom) || 0;
            p({
                height: e.offsetHeight,
                width: e.offsetWidth,
                marginTop: n,
                marginBottom: i
            })
        }
    }), b = [r], t[7] = r, t[8] = y, t[9] = b), (0, G.useImperativeHandle)(u, y, b);
    let x = !n && `mt-4 mb-1`,
        S;
    t[10] === x ? S = t[11] : (S = l(`relative w-full`, x), t[10] = x, t[11] = S);
    let C = n ? f ?? void 0 : void 0,
        w = n ? -1 : void 0,
        T = n ? `dialog` : void 0,
        E = n ? !0 : void 0,
        D = n ? g : void 0,
        O = n && `bg-token-bg-primary fixed inset-0 z-20 flex flex-col items-stretch px-4 pb-4`,
        k;
    t[12] === O ? k = t[13] : (k = l(O), t[12] = O, t[13] = k);
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
            d.current?.focus()
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
        ref: d,
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
        xe = L(), A(), G = t(ne()), F(), K = P()
    })),
    J, Y, X, Z = e((() => {
        y(), z(), U(), ae(), J = B({
            id: `code-block-header-actions`,
            icons: {
                download: {
                    normal: oe,
                    small: H
                }
            }
        }), Y = a.Cross, X = J.Download
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
    let d = R(),
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
    return t[8] !== i || t[9] !== p || t[10] !== m ? (h = (0, Te.jsx)(x, {
        label: p,
        className: i,
        children: m
    }), t[8] = i, t[9] = p, t[10] = m, t[11] = h) : h = t[11], h
}
var Ce, we, Te, Ee = e((() => {
    Ce = L(), w(), h(), Z(), we = t(ne()), F(), Te = P()
}));

function De(e) {
    "use forget";
    let t = (0, Oe.c)(33),
        {
            onClick: r,
            disabled: i,
            className: a,
            kind: o,
            withText: s
        } = e,
        c = o === void 0 ? `png` : o,
        u = s !== void 0 && s,
        d = R(),
        p;
    t[0] !== d || t[1] !== c ? (p = c === `code` ? d.formatMessage({
        id: `codeBlockExportButton.downloadCodeFile`,
        defaultMessage: `Download code file`
    }) : d.formatMessage({
        id: `codeBlockExportButton.downloadPng`,
        defaultMessage: `Download PNG`
    }), t[0] = d, t[1] = c, t[2] = p) : p = t[2];
    let m = p,
        h;
    t[3] !== d || t[4] !== c || t[5] !== u ? (h = u ? c === `code` ? d.formatMessage({
        id: `codeBlockExportButton.downloadFile`,
        defaultMessage: `Download file`
    }) : d.formatMessage({
        id: `codeBlockExportButton.downloadImage`,
        defaultMessage: `Download image`
    }) : null, t[3] = d, t[4] = c, t[5] = u, t[6] = h) : h = t[6];
    let g = h,
        v;
    t[7] === a ? v = t[8] : (v = l(`inline-flex`, a), t[7] = a, t[8] = v);
    let y;
    t[9] !== i || t[10] !== c || t[11] !== r ? (y = e => {
        if (i) {
            e.preventDefault();
            return
        }
        f.count(_.CODE_BLOCKS, `chatgpt_code_block_export_button_clicked`, {
            kind: c
        }), r()
    }, t[9] = i, t[10] = c, t[11] = r, t[12] = y) : y = t[12];
    let b = u ? `rounded-lg px-3` : `size-9 rounded-full px-2`,
        S = !i && `hover:bg-token-bg-secondary`,
        C = i && `cursor-not-allowed hover:bg-transparent`,
        w;
    t[13] !== b || t[14] !== S || t[15] !== C ? (w = l(`py-2 text-sm font-medium`, b, S, C), t[13] = b, t[14] = S, t[15] = C, t[16] = w) : w = t[16];
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
    t[20] !== i || t[21] !== m || t[22] !== w || t[23] !== T || t[24] !== y ? (E = (0, ke.jsx)(n, {
        type: `button`,
        color: `ghost`,
        label: m,
        visuallyDisabled: i,
        "aria-disabled": i,
        onClick: y,
        className: w,
        children: T
    }), t[20] = i, t[21] = m, t[22] = w, t[23] = T, t[24] = y, t[25] = E) : E = t[25];
    let D;
    t[26] !== E || t[27] !== v ? (D = (0, ke.jsx)(`span`, {
        className: v,
        children: E
    }), t[26] = E, t[27] = v, t[28] = D) : D = t[28];
    let O;
    return t[29] !== m || t[30] !== D || t[31] !== u ? (O = (0, ke.jsx)(x, {
        label: m,
        disabled: u,
        children: D
    }), t[29] = m, t[30] = D, t[31] = u, t[32] = O) : O = t[32], O
}
var Oe, ke, Ae = e((() => {
    Oe = L(), w(), h(), Z(), c(), A(), F(), ke = P()
}));

function je(e) {
    "use forget";
    let t = (0, Me.c)(5),
        {
            clientThreadId: n,
            messageId: r,
            codeIndex: i
        } = e,
        a = k(n),
        o = a != null && r != null,
        s;
    return t[0] !== o || t[1] !== i || t[2] !== r || t[3] !== a ? (s = {
        mutationKey: o ? [`code-block-share`, a, r, i] : [`code-block-share`, `disabled`, i],
        mutationFn: async () => !o || i == null ? null : await p.safePost(`/share/post`, {
            requestBody: {
                attachments_to_create: [{
                    kind: `code_block`,
                    conversation_id: a,
                    message_id: r,
                    code_index: i
                }]
            },
            authOption: m.SendIfAvailable
        })
    }, t[0] = o, t[1] = i, t[2] = r, t[3] = a, t[4] = s) : s = t[4], I(s)
}
var Me, Ne = e((() => {
    Me = L(), T(), g(), s(), re()
}));

function Pe() {
    return M()
}
var Fe, Ie, Le, Re = e((() => {
        Fe = L(), w(), Ne(), fe(), ie(), r(), te(), d(), u(), E(), j(), c(), o(), A(), F(), Ie = P(), Le = e => {
            "use forget";
            let t = (0, Fe.c)(28),
                {
                    clientThreadId: r,
                    messageId: i,
                    codeIndex: a,
                    flushSave: o,
                    language: s
                } = e,
                c = R(),
                u = ee(),
                d = O(Pe),
                p;
            t[0] !== r || t[1] !== a || t[2] !== i ? (p = {
                clientThreadId: r,
                messageId: i,
                codeIndex: a
            }, t[0] = r, t[1] = a, t[2] = i, t[3] = p) : p = t[3];
            let m = je(p),
                h;
            t[4] === c ? h = t[5] : (h = c.formatMessage({
                id: `CodeBlockFullScreenHeader.shareLabel`,
                defaultMessage: `Share`
            }), t[4] = c, t[5] = h);
            let g = h,
                y;
            t[6] !== c || t[7] !== u ? (y = () => {
                u.danger(c.formatMessage({
                    id: `CodeBlock.share.error`,
                    defaultMessage: `Failed to create share link.`
                }))
            }, t[6] = c, t[7] = u, t[8] = y) : y = t[8];
            let x = N(y),
                S;
            t[9] !== r || t[10] !== m || t[11] !== o || t[12] !== c || t[13] !== s || t[14] !== i || t[15] !== x || t[16] !== u ? (S = async () => {
                if (!r || !i || m.isPending) return;
                if (f.count(_.CODE_BLOCKS, `chatgpt_code_block_share_button_clicked`), !await o?.()) {
                    x();
                    return
                }
                let e;
                try {
                    e = await m.mutateAsync()
                } catch {
                    x();
                    return
                }
                let t;
                if (e != null && e.post != null && (t = e.post.id), !t) {
                    x();
                    return
                }
                b.logStructuredEvent(`ChatgptCodeBlockShareButtonClicked`, {
                    conversationId: r,
                    messageId: i,
                    language: s,
                    postId: t
                });
                let n = V(t);
                try {
                    await C(n), u.success(c.formatMessage({
                        id: `CodeBlock.share.success`,
                        defaultMessage: `Share link copied`
                    }))
                } catch {
                    u.danger(c.formatMessage({
                        id: `CodeBlock.share.copyError`,
                        defaultMessage: `Failed to copy share link.`
                    }))
                }
            }, t[9] = r, t[10] = m, t[11] = o, t[12] = c, t[13] = s, t[14] = i, t[15] = x, t[16] = u, t[17] = S) : S = t[17];
            let w = N(S),
                T = m.isPending ? v : he,
                E = d ? `rounded-lg px-2 whitespace-nowrap` : `size-9 rounded-full p-0`,
                D = !m.isPending && `hover:bg-token-bg-secondary`,
                k;
            t[18] !== E || t[19] !== D ? (k = l(`py-2 text-sm font-medium`, E, D), t[18] = E, t[19] = D, t[20] = k) : k = t[20];
            let A = d ? g : null,
                j;
            return t[21] !== m.isPending || t[22] !== w || t[23] !== g || t[24] !== T || t[25] !== k || t[26] !== A ? (j = (0, Ie.jsx)(n, {
                icon: T,
                color: `ghost`,
                size: `medium`,
                label: g,
                className: k,
                disabled: m.isPending,
                onClick: w,
                children: A
            }), t[21] = m.isPending, t[22] = w, t[23] = g, t[24] = T, t[25] = k, t[26] = A, t[27] = j) : j = t[27], j
        }
    })),
    ze, Be, Ve, He = e((() => {
        ze = L(), w(), h(), ue(), pe(), A(), F(), Be = P(), Ve = e => {
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
                u = a !== void 0 && a,
                d = R(),
                f;
            t[0] === d ? f = t[1] : (f = d.formatMessage({
                id: `CodeBlockFullScreenHeader.consoleToggleLabel`,
                defaultMessage: `Toggle console`
            }), t[0] = d, t[1] = f);
            let p = f,
                m = c ? W : le,
                h;
            t[2] !== u || t[3] !== o ? (h = () => {
                u || o?.()
            }, t[2] = u, t[3] = o, t[4] = h) : h = t[4];
            let g = !u && `hover:bg-token-bg-secondary`,
                _ = u && `cursor-not-allowed opacity-50 hover:bg-transparent`,
                v = s && `bg-token-bg-secondary`,
                y;
            t[5] !== g || t[6] !== _ || t[7] !== v ? (y = l(`h-9 w-9 rounded-full p-0`, g, _, v), t[5] = g, t[6] = _, t[7] = v, t[8] = y) : y = t[8];
            let b;
            t[9] !== p || t[10] !== u || t[11] !== s || t[12] !== y || t[13] !== m || t[14] !== h ? (b = (0, Be.jsx)(`span`, {
                className: `inline-flex`,
                children: (0, Be.jsx)(n, {
                    icon: m,
                    type: `button`,
                    color: `ghost`,
                    size: `medium`,
                    label: p,
                    "aria-pressed": s,
                    "aria-disabled": u,
                    onClick: h,
                    className: y
                })
            }), t[9] = p, t[10] = u, t[11] = s, t[12] = y, t[13] = m, t[14] = h, t[15] = b) : b = t[15];
            let S;
            return t[16] !== p || t[17] !== b ? (S = (0, Be.jsx)(x, {
                label: p,
                children: b
            }), t[16] = p, t[17] = b, t[18] = S) : S = t[18], S
        }
    }));

function Ue() {
    return M()
}
var We, Q, Ge, Ke = e((() => {
    We = L(), w(), Ee(), ge(), Ae(), Re(), He(), me(), se(), r(), j(), A(), F(), Q = P(), Ge = e => {
        "use forget";
        let t = (0, We.c)(64),
            {
                code: r,
                messageId: i,
                clientThreadId: a,
                codeIndex: o,
                isStreaming: s,
                isPreviewOpen: c,
                isExecutionPaneOnly: u,
                isPreviewDisabled: d,
                isPreviewExportable: f,
                isPreviewExportDisabled: p,
                previewExportKind: m,
                showConsoleToggle: h,
                isConsoleOpen: g,
                hasConsoleErrorOutput: _,
                showCopyButton: v,
                showCodeToggle: y,
                isShareable: b,
                flushSave: x,
                language: S,
                additionalActionButtons: C,
                isCodeOpen: w,
                isCodeDisabled: T,
                onPreviewClick: E,
                onPreviewExportClick: D,
                onPreviewHover: k,
                onConsoleToggle: A,
                onCodeClick: j,
                showCloseButton: M,
                onCloseClick: N,
                closeButtonRef: ee
            } = e,
            te = s !== void 0 && s,
            P = u !== void 0 && u,
            F = d !== void 0 && d,
            ne = f !== void 0 && f,
            I = p !== void 0 && p,
            re = m === void 0 ? `png` : m,
            L = h !== void 0 && h,
            ie = g !== void 0 && g,
            ae = _ !== void 0 && _,
            z = v === void 0 || v,
            B = y === void 0 || y,
            V = b !== void 0 && b,
            H = T !== void 0 && T,
            oe = M === void 0 || M,
            U = R(),
            W = O(Ue),
            se = L && (W || c),
            le = W && c && ne && D != null,
            ue = se || V || z || le || C != null,
            fe;
        t[0] === U ? fe = t[1] : (fe = U.formatMessage({
            id: `CodeBlockFullScreenHeader.codeLabel`,
            defaultMessage: `Code`
        }), t[0] = U, t[1] = fe);
        let pe = fe,
            me;
        t[2] === U ? me = t[3] : (me = U.formatMessage({
            id: `CodeBlockFullScreenHeader.previewLabel`,
            defaultMessage: `Preview`
        }), t[2] = U, t[3] = me);
        let he = me,
            ge;
        t[4] === U ? ge = t[5] : (ge = U.formatMessage({
            id: `CodeBlockFullScreenHeader.consoleLabel`,
            defaultMessage: `Console`
        }), t[4] = U, t[5] = ge);
        let ve = P ? ge : he,
            ye;
        t[6] === U ? ye = t[7] : (ye = U.formatMessage({
            id: `CodeBlockFullScreenHeader.viewToggleLabel`,
            defaultMessage: `Toggle view`
        }), t[6] = U, t[7] = ye);
        let be = ye,
            xe;
        t[8] !== U || t[9] !== w || t[10] !== W ? (xe = W && w ? U.formatMessage({
            id: `CodeBlockFullScreenHeader.hideCodeViewLabel`,
            defaultMessage: `Hide code`
        }) : U.formatMessage({
            id: `CodeBlockFullScreenHeader.showCodeViewLabel`,
            defaultMessage: `Show code`
        }), t[8] = U, t[9] = w, t[10] = W, t[11] = xe) : xe = t[11];
        let G = xe,
            K;
        t[12] !== ee || t[13] !== N || t[14] !== oe ? (K = oe && (0, Q.jsx)(Se, {
            onClick: N,
            ref: ee
        }), t[12] = ee, t[13] = N, t[14] = oe, t[15] = K) : K = t[15];
        let q;
        t[16] !== G || t[17] !== H || t[18] !== w || t[19] !== W || t[20] !== j || t[21] !== B ? (q = W && B && (0, Q.jsx)(n, {
            icon: w ? de : ce,
            color: `ghost`,
            size: `medium`,
            "aria-label": G,
            "aria-pressed": w,
            disabled: H,
            onClick: () => {
                H || j?.()
            },
            className: `rounded-lg`,
            children: G
        }), t[16] = G, t[17] = H, t[18] = w, t[19] = W, t[20] = j, t[21] = B, t[22] = q) : q = t[22];
        let J;
        t[23] !== K || t[24] !== q ? (J = (0, Q.jsxs)(`div`, {
            className: `justify-self-start`,
            children: [K, q]
        }), t[23] = K, t[24] = q, t[25] = J) : J = t[25];
        let Y;
        t[26] !== pe || t[27] !== H || t[28] !== w || t[29] !== F || t[30] !== c || t[31] !== W || t[32] !== j || t[33] !== E || t[34] !== k || t[35] !== ve || t[36] !== B || t[37] !== be ? (Y = F ? (0, Q.jsx)(`div`, {}) : (0, Q.jsx)(`div`, {
            className: `justify-self-center`,
            children: !W && B && (0, Q.jsxs)(`div`, {
                role: `group`,
                "aria-label": be,
                className: `bg-token-bg-tertiary inline-grid min-w-[190px] grid-cols-2 gap-1 rounded-full p-1`,
                children: [(0, Q.jsx)(`button`, {
                    type: `button`,
                    "aria-label": pe,
                    "aria-pressed": !c,
                    "aria-disabled": !c || H,
                    className: l(`h-8 rounded-full px-4 text-sm font-medium transition-colors`, w ? `bg-token-bg-primary text-token-text-primary` : `text-token-text-secondary`, !w && !H && `hover:text-token-text-primary`, H && `text-token-text-quaternary cursor-not-allowed`),
                    onClick: () => {
                        H || w || j?.()
                    },
                    children: pe
                }), (0, Q.jsx)(`button`, {
                    type: `button`,
                    "aria-label": ve,
                    "aria-pressed": c,
                    "aria-disabled": c || F,
                    className: l(`h-8 rounded-full px-4 text-sm font-medium transition-colors`, c ? `bg-token-bg-primary text-token-text-primary` : `text-token-text-secondary`, !c && !F && `hover:text-token-text-primary`, F && `text-token-text-quaternary cursor-not-allowed`),
                    onClick: () => {
                        F || c || E()
                    },
                    onMouseEnter: k,
                    children: ve
                })]
            })
        }), t[26] = pe, t[27] = H, t[28] = w, t[29] = F, t[30] = c, t[31] = W, t[32] = j, t[33] = E, t[34] = k, t[35] = ve, t[36] = B, t[37] = be, t[38] = Y) : Y = t[38];
        let X;
        t[39] !== C || t[40] !== a || t[41] !== r || t[42] !== o || t[43] !== x || t[44] !== ae || t[45] !== ie || t[46] !== F || t[47] !== I || t[48] !== V || t[49] !== te || t[50] !== S || t[51] !== i || t[52] !== A || t[53] !== D || t[54] !== re || t[55] !== ue || t[56] !== se || t[57] !== z || t[58] !== le ? (X = ue ? (0, Q.jsxs)(`div`, {
            className: `flex items-center gap-0.5 justify-self-end`,
            children: [se ? (0, Q.jsx)(Ve, {
                isOpen: ie,
                hasErrorOutput: ae,
                isDisabled: F,
                onClick: A
            }) : null, z ? (0, Q.jsx)(_e, {
                code: r,
                messageId: i,
                clientThreadId: a,
                disabled: te
            }) : null, le ? (0, Q.jsx)(De, {
                onClick: D,
                disabled: I,
                kind: re
            }) : null, V ? (0, Q.jsx)(Le, {
                clientThreadId: a,
                messageId: i,
                codeIndex: o,
                flushSave: x,
                language: S
            }) : null, C]
        }) : (0, Q.jsx)(`div`, {}), t[39] = C, t[40] = a, t[41] = r, t[42] = o, t[43] = x, t[44] = ae, t[45] = ie, t[46] = F, t[47] = I, t[48] = V, t[49] = te, t[50] = S, t[51] = i, t[52] = A, t[53] = D, t[54] = re, t[55] = ue, t[56] = se, t[57] = z, t[58] = le, t[59] = X) : X = t[59];
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
    return D()
}
var lt, $, ut, dt, ft, pt, mt, ht, gt = e((() => {
    lt = L(), r(), j(), o(), A(), i(), $ = t(ne()), ut = P(), dt = .33, ft = 200, pt = 200, mt = 8, ht = e => {
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
                onRightPaneAnimationComplete: u
            } = e,
            d = i === void 0 || i,
            f = a === void 0 || a,
            p = (0, $.useRef)(null),
            m = (0, $.useRef)(null),
            h = (0, $.useRef)(null),
            g = (0, $.useRef)(null),
            _ = (0, $.useRef)(dt),
            v = (0, $.useRef)(0),
            y = (0, $.useRef)(null),
            b = (0, $.useRef)(null),
            x = (0, $.useRef)(null),
            C = (0, $.useRef)(null),
            [w, T] = (0, $.useState)(dt),
            [E, D] = (0, $.useState)(!1),
            [k, A] = (0, $.useState)(!d),
            j = O(ct),
            [ee, te] = st(s),
            P;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (P = () => {
            let e = document.body.style;
            x.current != null && (e.cursor = x.current, x.current = null), C.current != null && (e.userSelect = C.current, C.current = null)
        }, t[0] = P) : P = t[0];
        let F = N(P),
            ne;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (ne = e => {
            let t = p.current?.getBoundingClientRect().width;
            if (t == null || t <= 0) return _.current;
            let n = ot(e, t);
            return _.current = n, m.current?.style.setProperty(`flex-basis`, `${n*100}%`), n
        }, t[1] = ne) : ne = t[1];
        let I = N(ne),
            re;
        t[2] === I ? re = t[3] : (re = e => {
            let t = p.current?.getBoundingClientRect();
            if (t == null || t.width <= 0) return _.current;
            let n = (e - v.current - t.left) / Math.max(t.width, 1);
            return I(n)
        }, t[2] = I, t[3] = re);
        let L = N(re),
            R;
        t[4] === L ? R = t[5] : (R = () => {
            b.current != null && (window.cancelAnimationFrame(b.current), b.current = null);
            let e = y.current;
            return y.current = null, e == null ? _.current : L(e)
        }, t[4] = L, t[5] = R);
        let ie = N(R),
            ae;
        t[6] === ie ? ae = t[7] : (ae = e => {
            y.current = e, b.current ??= window.requestAnimationFrame(() => {
                b.current = null, ie()
            })
        }, t[6] = ie, t[7] = ae);
        let z = N(ae),
            B;
        t[8] !== ie || t[9] !== F ? (B = () => {
            let e = g.current,
                t = h.current;
            e != null && t?.hasPointerCapture(e) && t.releasePointerCapture(e), g.current = null;
            let n = ie();
            T(n), v.current = 0, F(), D(!1)
        }, t[8] = ie, t[9] = F, t[10] = B) : B = t[10];
        let V = N(B),
            H;
        t[11] === z ? H = t[12] : (H = e => {
            if (e.pointerType === `mouse` && e.button !== 0) return;
            e.preventDefault();
            let t = document.body.style;
            x.current ??= t.cursor, C.current ??= t.userSelect, t.cursor = `col-resize`, t.userSelect = `none`, g.current = e.pointerId, h.current = e.currentTarget, e.currentTarget.setPointerCapture(e.pointerId);
            let n = p.current?.getBoundingClientRect();
            if (n == null || n.width <= 0) v.current = 0;
            else {
                let t = n.left + _.current * n.width;
                v.current = e.clientX - t
            }
            D(!0), z(e.clientX)
        }, t[11] = z, t[12] = H);
        let oe = N(H),
            U;
        t[13] === I ? U = t[14] : (U = () => {
            let e = I(dt);
            T(e)
        }, t[13] = I, t[14] = U);
        let W = N(U),
            se, ce;
        t[15] !== E || t[16] !== z || t[17] !== V ? (se = () => {
            if (!E) return;
            let e = e => {
                    e.pointerId === g.current && z(e.clientX)
                },
                t = e => {
                    e.pointerId === g.current && (z(e.clientX), V())
                };
            return document.addEventListener(`pointermove`, e, {
                passive: !0
            }), document.addEventListener(`pointerup`, t), document.addEventListener(`pointercancel`, t), window.addEventListener(`blur`, V), () => {
                document.removeEventListener(`pointermove`, e), document.removeEventListener(`pointerup`, t), document.removeEventListener(`pointercancel`, t), window.removeEventListener(`blur`, V)
            }
        }, ce = [E, z, V], t[15] = E, t[16] = z, t[17] = V, t[18] = se, t[19] = ce) : (se = t[18], ce = t[19]), (0, $.useEffect)(se, ce);
        let le, ue;
        t[20] !== I || t[21] !== r || t[22] !== V ? (le = () => {
            if (!r) {
                V();
                return
            }
            let e = () => {
                let e = I(_.current);
                T(e)
            };
            return e(), window.addEventListener(`resize`, e), () => {
                window.removeEventListener(`resize`, e)
            }
        }, ue = [I, r, V], t[20] = I, t[21] = r, t[22] = V, t[23] = le, t[24] = ue) : (le = t[23], ue = t[24]), (0, $.useEffect)(le, ue);
        let de, fe;
        t[25] === V ? (de = t[26], fe = t[27]) : (de = () => () => {
            V()
        }, fe = [V], t[25] = V, t[26] = de, t[27] = fe), (0, $.useEffect)(de, fe);
        let pe, me;
        t[28] === d ? (pe = t[29], me = t[30]) : (pe = () => {
            d && A(!1)
        }, me = [d], t[28] = d, t[29] = pe, t[30] = me), (0, $.useEffect)(pe, me);
        let he = O(M),
            ge = !d && k,
            _e = r || he ? d || f : d,
            ve = r && d || f,
            ye = r && d && f,
            be = Math.max(1 - w, 1e-4),
            xe = ye ? mt / be : 0,
            G = `${1/w*100}%`,
            K = `calc(${100/be}% + ${xe}px)`,
            q;
        t[31] === o ? q = t[32] : (q = e => {
            p.current = e, o != null && (o.current = e)
        }, t[31] = o, t[32] = q);
        let J = r && `flex h-full min-h-0 flex-1 items-stretch overflow-hidden pb-4`,
            Y = !r && `relative`,
            X = E && `select-none`,
            Z;
        t[33] !== c || t[34] !== J || t[35] !== Y || t[36] !== X ? (Z = l(c, J, Y, X), t[33] = c, t[34] = J, t[35] = Y, t[36] = X, t[37] = Z) : Z = t[37];
        let Se;
        t[38] !== w || t[39] !== r || t[40] !== d || t[41] !== f || t[42] !== ee || t[43] !== G || t[44] !== j || t[45] !== ge || t[46] !== _e ? (Se = _e && (0, ut.jsx)(`div`, {
            ref: m,
            className: l(`h-full min-h-0 min-w-0`, r && `shrink-0`),
            style: r ? {
                flexBasis: `${w*100}%`
            } : void 0,
            children: (0, ut.jsx)(S.div, {
                initial: !1,
                "aria-hidden": ge ? !0 : void 0,
                inert: ge,
                animate: r ? {
                    x: d ? `0` : `-100%`,
                    width: f ? `100%` : G
                } : {
                    x: `0`,
                    width: `100%`
                },
                transition: {
                    duration: r && !j ? .22 : 0,
                    ease: `easeInOut`
                },
                className: l(`h-full min-h-0 min-w-0`, ge && `pointer-events-none invisible`),
                onAnimationComplete: () => {
                    r && !d && A(!0)
                },
                children: ee
            })
        }), t[38] = w, t[39] = r, t[40] = d, t[41] = f, t[42] = ee, t[43] = G, t[44] = j, t[45] = ge, t[46] = _e, t[47] = Se) : Se = t[47];
        let Ce;
        t[48] !== E || t[49] !== he || t[50] !== j || t[51] !== W || t[52] !== ye || t[53] !== oe || t[54] !== V ? (Ce = ye && (0, ut.jsx)(`div`, {
            ref: h,
            role: `separator`,
            "aria-orientation": `vertical`,
            className: l(`bg-token-text-tertiary z-10 w-2 shrink-0 origin-center transform-gpu cursor-ew-resize opacity-0 transition-[transform,opacity]`, j ? `duration-0` : `duration-220`, E && `scale-x-[0.5] opacity-75`, !he && `pointer-events-none invisible`),
            onPointerDown: oe,
            onLostPointerCapture: V,
            onDoubleClick: W
        }), t[48] = E, t[49] = he, t[50] = j, t[51] = W, t[52] = ye, t[53] = oe, t[54] = V, t[55] = Ce) : Ce = t[55];
        let we;
        t[56] !== r || t[57] !== d || t[58] !== f || t[59] !== u || t[60] !== j || t[61] !== te || t[62] !== K || t[63] !== ve ? (we = ve && (0, ut.jsx)(`div`, {
            className: l(r && `grid h-full min-h-0 min-w-0 flex-1 grid-cols-[minmax(0,1fr)]`),
            children: (0, ut.jsx)(S.div, {
                initial: !1,
                className: l(r && `h-full min-h-0 min-w-0 justify-self-end`),
                animate: r ? {
                    width: d ? `100%` : K,
                    x: f ? `0` : `100%`
                } : {
                    x: `0`,
                    width: `100%`
                },
                transition: {
                    duration: r && !j ? .22 : 0,
                    ease: `easeInOut`
                },
                onAnimationComplete: () => {
                    r && !f && u?.()
                },
                children: te
            })
        }), t[56] = r, t[57] = d, t[58] = f, t[59] = u, t[60] = j, t[61] = te, t[62] = K, t[63] = ve, t[64] = we) : we = t[64];
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
//# sourceMappingURL=9e6b8179-bc35hnzcg7c91c23.js.map
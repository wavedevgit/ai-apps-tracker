import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    At as n,
    BU as r,
    F7 as i,
    HU as a,
    JT as o,
    Mz as s,
    Nz as c,
    P5 as l,
    Pz as u,
    X5 as d,
    Xy as f,
    Y5 as p,
    YT as m,
    Zy as h,
    bnt as g,
    cat as _,
    cn as v,
    drt as y,
    fY as b,
    fat as x,
    frt as S,
    g8 as C,
    jz as w,
    oC as T,
    oq as E,
    pq as D,
    rY as O,
    sC as k,
    urt as A,
    vN as j,
    vnt as M,
    yN as N,
    yq as ee,
    z7 as te
} from "./4813494d-bo7e0c29ngt4zgx0.js";
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
    Ahn as ie,
    Dhn as ae,
    Ehn as z,
    Ohn as B,
    Thn as V,
    bR as H,
    khn as oe,
    xR as U
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    Ai as se,
    Fi as W,
    Mi as ce,
    Ni as le,
    Oi as ue,
    Pi as de,
    bS as fe,
    ji as pe,
    ki as me,
    yS as he
} from "./30901919-e8h11sw136qen6v0.js";
import {
    n as ge,
    t as _e
} from "./2ab5aa6c-d4r7qf556w7yvmqk.js";
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
            f({
                height: e.offsetHeight,
                width: e.offsetWidth,
                marginTop: n,
                marginBottom: i
            })
        }
    }), b = [r], t[7] = r, t[8] = y, t[9] = b), (0, G.useImperativeHandle)(l, y, b);
    let x = !n && `mt-4 mb-1`,
        S;
    t[10] === x ? S = t[11] : (S = p(`relative w-full`, x), t[10] = x, t[11] = S);
    let C = n ? d ?? void 0 : void 0,
        w = n ? -1 : void 0,
        T = n ? `dialog` : void 0,
        E = n ? !0 : void 0,
        D = n ? g : void 0,
        O = n && `bg-token-bg-primary fixed inset-0 z-20 flex flex-col items-stretch px-4 pb-4`,
        k;
    t[12] === O ? k = t[13] : (k = p(O), t[12] = O, t[13] = k);
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
        xe = L(), d(), G = t(ne()), F(), K = P()
    })),
    J, Y, X, Z = e((() => {
        u(), oe(), B(), z(), J = ie({
            id: `code-block-header-actions`,
            icons: {
                download: {
                    normal: V,
                    small: ae
                }
            }
        }), Y = c.Cross, X = J.Download
    }));

function Se(e) {
    "use forget";
    let t = (0, Ce.c)(12),
        {
            disabled: n,
            className: r,
            ref: i,
            onClick: a
        } = e,
        s = n !== void 0 && n,
        c = (0, we.useRef)(null),
        l, u;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (l = () => ({
        focus: () => {
            c.current?.focus()
        }
    }), u = [], t[0] = l, t[1] = u) : (l = t[0], u = t[1]), (0, we.useImperativeHandle)(i, l, u);
    let d = R(),
        p;
    t[2] === d ? p = t[3] : (p = d.formatMessage({
        id: `CodeBlockCloseButton.closeTooltip`,
        defaultMessage: `Close`
    }), t[2] = d, t[3] = p);
    let m = p,
        h;
    t[4] !== s || t[5] !== m || t[6] !== a ? (h = (0, Te.jsx)(o, {
        icon: Y,
        color: `ghost`,
        size: `medium`,
        "aria-disabled": s,
        "aria-label": m,
        ref: c,
        onClick: a,
        className: `rounded-lg border-0`
    }), t[4] = s, t[5] = m, t[6] = a, t[7] = h) : h = t[7];
    let g;
    return t[8] !== r || t[9] !== m || t[10] !== h ? (g = (0, Te.jsx)(f, {
        label: m,
        className: r,
        children: h
    }), t[8] = r, t[9] = m, t[10] = h, t[11] = g) : g = t[11], g
}
var Ce, we, Te, Ee = e((() => {
    Ce = L(), m(), h(), Z(), we = t(ne()), F(), Te = P()
}));

function De(e) {
    "use forget";
    let t = (0, Oe.c)(33),
        {
            onClick: n,
            disabled: r,
            className: i,
            kind: a,
            withText: s
        } = e,
        c = a === void 0 ? `png` : a,
        l = s !== void 0 && s,
        u = R(),
        d;
    t[0] !== u || t[1] !== c ? (d = c === `code` ? u.formatMessage({
        id: `codeBlockExportButton.downloadCodeFile`,
        defaultMessage: `Download code file`
    }) : u.formatMessage({
        id: `codeBlockExportButton.downloadPng`,
        defaultMessage: `Download PNG`
    }), t[0] = u, t[1] = c, t[2] = d) : d = t[2];
    let m = d,
        h;
    t[3] !== u || t[4] !== c || t[5] !== l ? (h = l ? c === `code` ? u.formatMessage({
        id: `codeBlockExportButton.downloadFile`,
        defaultMessage: `Download file`
    }) : u.formatMessage({
        id: `codeBlockExportButton.downloadImage`,
        defaultMessage: `Download image`
    }) : null, t[3] = u, t[4] = c, t[5] = l, t[6] = h) : h = t[6];
    let g = h,
        _;
    t[7] === i ? _ = t[8] : (_ = p(`inline-flex`, i), t[7] = i, t[8] = _);
    let v;
    t[9] !== r || t[10] !== c || t[11] !== n ? (v = e => {
        if (r) {
            e.preventDefault();
            return
        }
        y.count(S.CODE_BLOCKS, `chatgpt_code_block_export_button_clicked`, {
            kind: c
        }), n()
    }, t[9] = r, t[10] = c, t[11] = n, t[12] = v) : v = t[12];
    let b = l ? `rounded-lg px-3` : `size-9 rounded-full px-2`,
        x = !r && `hover:bg-token-bg-secondary`,
        C = r && `cursor-not-allowed hover:bg-transparent`,
        w;
    t[13] !== b || t[14] !== x || t[15] !== C ? (w = p(`py-2 text-sm font-medium`, b, x, C), t[13] = b, t[14] = x, t[15] = C, t[16] = w) : w = t[16];
    let T;
    t[17] !== g || t[18] !== l ? (T = l ? (0, ke.jsxs)(`span`, {
        className: `inline-flex items-center gap-1.5 whitespace-nowrap`,
        children: [(0, ke.jsx)(X, {
            className: `icon-md`
        }), g]
    }) : (0, ke.jsx)(X, {
        className: `icon-md`
    }), t[17] = g, t[18] = l, t[19] = T) : T = t[19];
    let E;
    t[20] !== r || t[21] !== m || t[22] !== w || t[23] !== T || t[24] !== v ? (E = (0, ke.jsx)(o, {
        type: `button`,
        color: `ghost`,
        label: m,
        visuallyDisabled: r,
        "aria-disabled": r,
        onClick: v,
        className: w,
        children: T
    }), t[20] = r, t[21] = m, t[22] = w, t[23] = T, t[24] = v, t[25] = E) : E = t[25];
    let D;
    t[26] !== E || t[27] !== _ ? (D = (0, ke.jsx)(`span`, {
        className: _,
        children: E
    }), t[26] = E, t[27] = _, t[28] = D) : D = t[28];
    let O;
    return t[29] !== m || t[30] !== D || t[31] !== l ? (O = (0, ke.jsx)(f, {
        label: m,
        disabled: l,
        children: D
    }), t[29] = m, t[30] = D, t[31] = l, t[32] = O) : O = t[32], O
}
var Oe, ke, Ae = e((() => {
    Oe = L(), m(), h(), Z(), A(), d(), F(), ke = P()
}));

function je(e) {
    "use forget";
    let t = (0, Me.c)(5),
        {
            clientThreadId: n,
            messageId: r,
            codeIndex: a
        } = e,
        o = b(n),
        s = o != null && r != null,
        c;
    return t[0] !== s || t[1] !== a || t[2] !== r || t[3] !== o ? (c = {
        mutationKey: s ? [`code-block-share`, o, r, a] : [`code-block-share`, `disabled`, a],
        mutationFn: async () => !s || a == null ? null : await i.safePost(`/share/post`, {
            requestBody: {
                attachments_to_create: [{
                    kind: `code_block`,
                    conversation_id: o,
                    message_id: r,
                    code_index: a
                }]
            },
            authOption: _.SendIfAvailable
        })
    }, t[0] = s, t[1] = a, t[2] = r, t[3] = o, t[4] = c) : c = t[4], I(c)
}
var Me, Ne = e((() => {
    Me = L(), O(), x(), te(), re()
}));

function Pe() {
    return D()
}
var Fe, Ie, Le, Re = e((() => {
        Fe = L(), m(), Ne(), he(), U(), C(), s(), r(), g(), k(), E(), A(), j(), d(), F(), Ie = P(), Le = e => {
            "use forget";
            let t = (0, Fe.c)(28),
                {
                    clientThreadId: n,
                    messageId: r,
                    codeIndex: i,
                    flushSave: s,
                    language: c
                } = e,
                u = R(),
                d = a(),
                f = l(Pe),
                m;
            t[0] !== n || t[1] !== i || t[2] !== r ? (m = {
                clientThreadId: n,
                messageId: r,
                codeIndex: i
            }, t[0] = n, t[1] = i, t[2] = r, t[3] = m) : m = t[3];
            let h = je(m),
                g;
            t[4] === u ? g = t[5] : (g = u.formatMessage({
                id: `CodeBlockFullScreenHeader.shareLabel`,
                defaultMessage: `Share`
            }), t[4] = u, t[5] = g);
            let _ = g,
                v;
            t[6] !== u || t[7] !== d ? (v = () => {
                d.danger(u.formatMessage({
                    id: `CodeBlock.share.error`,
                    defaultMessage: `Failed to create share link.`
                }))
            }, t[6] = u, t[7] = d, t[8] = v) : v = t[8];
            let b = N(v),
                x;
            t[9] !== n || t[10] !== h || t[11] !== s || t[12] !== u || t[13] !== c || t[14] !== r || t[15] !== b || t[16] !== d ? (x = async () => {
                if (!n || !r || h.isPending) return;
                if (y.count(S.CODE_BLOCKS, `chatgpt_code_block_share_button_clicked`), !await s?.()) {
                    b();
                    return
                }
                let e;
                try {
                    e = await h.mutateAsync()
                } catch {
                    b();
                    return
                }
                let t;
                if (e != null && e.post != null && (t = e.post.id), !t) {
                    b();
                    return
                }
                M.logStructuredEvent(`ChatgptCodeBlockShareButtonClicked`, {
                    conversationId: n,
                    messageId: r,
                    language: c,
                    postId: t
                });
                let i = H(t);
                try {
                    await T(i), d.success(u.formatMessage({
                        id: `CodeBlock.share.success`,
                        defaultMessage: `Share link copied`
                    }))
                } catch {
                    d.danger(u.formatMessage({
                        id: `CodeBlock.share.copyError`,
                        defaultMessage: `Failed to copy share link.`
                    }))
                }
            }, t[9] = n, t[10] = h, t[11] = s, t[12] = u, t[13] = c, t[14] = r, t[15] = b, t[16] = d, t[17] = x) : x = t[17];
            let C = N(x),
                E = h.isPending ? w : fe,
                D = f ? `rounded-lg px-2 whitespace-nowrap` : `size-9 rounded-full p-0`,
                O = !h.isPending && `hover:bg-token-bg-secondary`,
                k;
            t[18] !== D || t[19] !== O ? (k = p(`py-2 text-sm font-medium`, D, O), t[18] = D, t[19] = O, t[20] = k) : k = t[20];
            let A = f ? _ : null,
                j;
            return t[21] !== h.isPending || t[22] !== C || t[23] !== _ || t[24] !== E || t[25] !== k || t[26] !== A ? (j = (0, Ie.jsx)(o, {
                icon: E,
                color: `ghost`,
                size: `medium`,
                label: _,
                className: k,
                disabled: h.isPending,
                onClick: C,
                children: A
            }), t[21] = h.isPending, t[22] = C, t[23] = _, t[24] = E, t[25] = k, t[26] = A, t[27] = j) : j = t[27], j
        }
    })),
    ze, Be, Ve, He = e((() => {
        ze = L(), m(), h(), W(), le(), d(), F(), Be = P(), Ve = e => {
            "use forget";
            let t = (0, ze.c)(19),
                {
                    isOpen: n,
                    hasErrorOutput: r,
                    isDisabled: i,
                    onClick: a
                } = e,
                s = n !== void 0 && n,
                c = r !== void 0 && r,
                l = i !== void 0 && i,
                u = R(),
                d;
            t[0] === u ? d = t[1] : (d = u.formatMessage({
                id: `CodeBlockFullScreenHeader.consoleToggleLabel`,
                defaultMessage: `Toggle console`
            }), t[0] = u, t[1] = d);
            let m = d,
                h = c ? ce : de,
                g;
            t[2] !== l || t[3] !== a ? (g = () => {
                l || a?.()
            }, t[2] = l, t[3] = a, t[4] = g) : g = t[4];
            let _ = !l && `hover:bg-token-bg-secondary`,
                v = l && `cursor-not-allowed opacity-50 hover:bg-transparent`,
                y = s && `bg-token-bg-secondary`,
                b;
            t[5] !== _ || t[6] !== v || t[7] !== y ? (b = p(`h-9 w-9 rounded-full p-0`, _, v, y), t[5] = _, t[6] = v, t[7] = y, t[8] = b) : b = t[8];
            let x;
            t[9] !== m || t[10] !== l || t[11] !== s || t[12] !== b || t[13] !== h || t[14] !== g ? (x = (0, Be.jsx)(`span`, {
                className: `inline-flex`,
                children: (0, Be.jsx)(o, {
                    icon: h,
                    type: `button`,
                    color: `ghost`,
                    size: `medium`,
                    label: m,
                    "aria-pressed": s,
                    "aria-disabled": l,
                    onClick: g,
                    className: b
                })
            }), t[9] = m, t[10] = l, t[11] = s, t[12] = b, t[13] = h, t[14] = g, t[15] = x) : x = t[15];
            let S;
            return t[16] !== m || t[17] !== x ? (S = (0, Be.jsx)(f, {
                label: m,
                children: x
            }), t[16] = m, t[17] = x, t[18] = S) : S = t[18], S
        }
    }));

function Ue() {
    return D()
}
var We, Q, Ge, Ke = e((() => {
    We = L(), m(), Ee(), ge(), Ae(), Re(), He(), pe(), me(), C(), E(), d(), F(), Q = P(), Ge = e => {
        "use forget";
        let t = (0, We.c)(64),
            {
                code: n,
                messageId: r,
                clientThreadId: i,
                codeIndex: a,
                isStreaming: s,
                isPreviewOpen: c,
                isExecutionPaneOnly: u,
                isPreviewDisabled: d,
                isPreviewExportable: f,
                isPreviewExportDisabled: m,
                previewExportKind: h,
                showConsoleToggle: g,
                isConsoleOpen: _,
                hasConsoleErrorOutput: v,
                showCopyButton: y,
                showCodeToggle: b,
                isShareable: x,
                flushSave: S,
                language: C,
                additionalActionButtons: w,
                isCodeOpen: T,
                isCodeDisabled: E,
                onPreviewClick: D,
                onPreviewExportClick: O,
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
            I = m !== void 0 && m,
            re = h === void 0 ? `png` : h,
            L = g !== void 0 && g,
            ie = _ !== void 0 && _,
            ae = v !== void 0 && v,
            z = y === void 0 || y,
            B = b === void 0 || b,
            V = x !== void 0 && x,
            H = E !== void 0 && E,
            oe = M === void 0 || M,
            U = R(),
            W = l(Ue),
            ce = L && (W || c),
            le = W && c && ne && O != null,
            de = ce || V || z || le || w != null,
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
        t[8] !== U || t[9] !== T || t[10] !== W ? (xe = W && T ? U.formatMessage({
            id: `CodeBlockFullScreenHeader.hideCodeViewLabel`,
            defaultMessage: `Hide code`
        }) : U.formatMessage({
            id: `CodeBlockFullScreenHeader.showCodeViewLabel`,
            defaultMessage: `Show code`
        }), t[8] = U, t[9] = T, t[10] = W, t[11] = xe) : xe = t[11];
        let G = xe,
            K;
        t[12] !== ee || t[13] !== N || t[14] !== oe ? (K = oe && (0, Q.jsx)(Se, {
            onClick: N,
            ref: ee
        }), t[12] = ee, t[13] = N, t[14] = oe, t[15] = K) : K = t[15];
        let q;
        t[16] !== G || t[17] !== H || t[18] !== T || t[19] !== W || t[20] !== j || t[21] !== B ? (q = W && B && (0, Q.jsx)(o, {
            icon: T ? se : ue,
            color: `ghost`,
            size: `medium`,
            "aria-label": G,
            "aria-pressed": T,
            disabled: H,
            onClick: () => {
                H || j?.()
            },
            className: `rounded-lg`,
            children: G
        }), t[16] = G, t[17] = H, t[18] = T, t[19] = W, t[20] = j, t[21] = B, t[22] = q) : q = t[22];
        let J;
        t[23] !== K || t[24] !== q ? (J = (0, Q.jsxs)(`div`, {
            className: `justify-self-start`,
            children: [K, q]
        }), t[23] = K, t[24] = q, t[25] = J) : J = t[25];
        let Y;
        t[26] !== pe || t[27] !== H || t[28] !== T || t[29] !== F || t[30] !== c || t[31] !== W || t[32] !== j || t[33] !== D || t[34] !== k || t[35] !== ve || t[36] !== B || t[37] !== be ? (Y = F ? (0, Q.jsx)(`div`, {}) : (0, Q.jsx)(`div`, {
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
                    className: p(`h-8 rounded-full px-4 text-sm font-medium transition-colors`, T ? `bg-token-bg-primary text-token-text-primary` : `text-token-text-secondary`, !T && !H && `hover:text-token-text-primary`, H && `text-token-text-quaternary cursor-not-allowed`),
                    onClick: () => {
                        H || T || j?.()
                    },
                    children: pe
                }), (0, Q.jsx)(`button`, {
                    type: `button`,
                    "aria-label": ve,
                    "aria-pressed": c,
                    "aria-disabled": c || F,
                    className: p(`h-8 rounded-full px-4 text-sm font-medium transition-colors`, c ? `bg-token-bg-primary text-token-text-primary` : `text-token-text-secondary`, !c && !F && `hover:text-token-text-primary`, F && `text-token-text-quaternary cursor-not-allowed`),
                    onClick: () => {
                        F || c || D()
                    },
                    onMouseEnter: k,
                    children: ve
                })]
            })
        }), t[26] = pe, t[27] = H, t[28] = T, t[29] = F, t[30] = c, t[31] = W, t[32] = j, t[33] = D, t[34] = k, t[35] = ve, t[36] = B, t[37] = be, t[38] = Y) : Y = t[38];
        let X;
        t[39] !== w || t[40] !== i || t[41] !== n || t[42] !== a || t[43] !== S || t[44] !== ae || t[45] !== ie || t[46] !== F || t[47] !== I || t[48] !== V || t[49] !== te || t[50] !== C || t[51] !== r || t[52] !== A || t[53] !== O || t[54] !== re || t[55] !== de || t[56] !== ce || t[57] !== z || t[58] !== le ? (X = de ? (0, Q.jsxs)(`div`, {
            className: `flex items-center gap-0.5 justify-self-end`,
            children: [ce ? (0, Q.jsx)(Ve, {
                isOpen: ie,
                hasErrorOutput: ae,
                isDisabled: F,
                onClick: A
            }) : null, z ? (0, Q.jsx)(_e, {
                code: n,
                messageId: r,
                clientThreadId: i,
                disabled: te
            }) : null, le ? (0, Q.jsx)(De, {
                onClick: O,
                disabled: I,
                kind: re
            }) : null, V ? (0, Q.jsx)(Le, {
                clientThreadId: i,
                messageId: r,
                codeIndex: a,
                flushSave: S,
                language: C
            }) : null, w]
        }) : (0, Q.jsx)(`div`, {}), t[39] = w, t[40] = i, t[41] = n, t[42] = a, t[43] = S, t[44] = ae, t[45] = ie, t[46] = F, t[47] = I, t[48] = V, t[49] = te, t[50] = C, t[51] = r, t[52] = A, t[53] = O, t[54] = re, t[55] = de, t[56] = ce, t[57] = z, t[58] = le, t[59] = X) : X = t[59];
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
    return ee()
}
var lt, $, ut, dt, ft, pt, mt, ht, gt = e((() => {
    lt = L(), C(), E(), j(), d(), n(), $ = t(ne()), ut = P(), dt = .33, ft = 200, pt = 200, mt = 8, ht = e => {
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
            m = (0, $.useRef)(null),
            h = (0, $.useRef)(null),
            g = (0, $.useRef)(null),
            _ = (0, $.useRef)(null),
            y = (0, $.useRef)(dt),
            b = (0, $.useRef)(0),
            x = (0, $.useRef)(null),
            S = (0, $.useRef)(null),
            C = (0, $.useRef)(null),
            w = (0, $.useRef)(null),
            [T, E] = (0, $.useState)(dt),
            [O, k] = (0, $.useState)(!1),
            [A, j] = (0, $.useState)(!d),
            M = l(ct),
            [ee, te] = st(s),
            P;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (P = () => {
            let e = document.body.style;
            C.current != null && (e.cursor = C.current, C.current = null), w.current != null && (e.userSelect = w.current, w.current = null)
        }, t[0] = P) : P = t[0];
        let F = N(P),
            ne;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (ne = e => {
            let t = m.current?.getBoundingClientRect().width;
            if (t == null || t <= 0) return y.current;
            let n = ot(e, t);
            return y.current = n, h.current?.style.setProperty(`flex-basis`, `${n*100}%`), n
        }, t[1] = ne) : ne = t[1];
        let I = N(ne),
            re;
        t[2] === I ? re = t[3] : (re = e => {
            let t = m.current?.getBoundingClientRect();
            if (t == null || t.width <= 0) return y.current;
            let n = (e - b.current - t.left) / Math.max(t.width, 1);
            return I(n)
        }, t[2] = I, t[3] = re);
        let L = N(re),
            R;
        t[4] === L ? R = t[5] : (R = () => {
            S.current != null && (window.cancelAnimationFrame(S.current), S.current = null);
            let e = x.current;
            return x.current = null, e == null ? y.current : L(e)
        }, t[4] = L, t[5] = R);
        let ie = N(R),
            ae;
        t[6] === ie ? ae = t[7] : (ae = e => {
            x.current = e, S.current ??= window.requestAnimationFrame(() => {
                S.current = null, ie()
            })
        }, t[6] = ie, t[7] = ae);
        let z = N(ae),
            B;
        t[8] !== ie || t[9] !== F ? (B = () => {
            let e = _.current,
                t = g.current;
            e != null && t?.hasPointerCapture(e) && t.releasePointerCapture(e), _.current = null;
            let n = ie();
            E(n), b.current = 0, F(), k(!1)
        }, t[8] = ie, t[9] = F, t[10] = B) : B = t[10];
        let V = N(B),
            H;
        t[11] === z ? H = t[12] : (H = e => {
            if (e.pointerType === `mouse` && e.button !== 0) return;
            e.preventDefault();
            let t = document.body.style;
            C.current ??= t.cursor, w.current ??= t.userSelect, t.cursor = `col-resize`, t.userSelect = `none`, _.current = e.pointerId, g.current = e.currentTarget, e.currentTarget.setPointerCapture(e.pointerId);
            let n = m.current?.getBoundingClientRect();
            if (n == null || n.width <= 0) b.current = 0;
            else {
                let t = n.left + y.current * n.width;
                b.current = e.clientX - t
            }
            k(!0), z(e.clientX)
        }, t[11] = z, t[12] = H);
        let oe = N(H),
            U;
        t[13] === I ? U = t[14] : (U = () => {
            let e = I(dt);
            E(e)
        }, t[13] = I, t[14] = U);
        let se = N(U),
            W, ce;
        t[15] !== O || t[16] !== z || t[17] !== V ? (W = () => {
            if (!O) return;
            let e = e => {
                    e.pointerId === _.current && z(e.clientX)
                },
                t = e => {
                    e.pointerId === _.current && (z(e.clientX), V())
                };
            return document.addEventListener(`pointermove`, e, {
                passive: !0
            }), document.addEventListener(`pointerup`, t), document.addEventListener(`pointercancel`, t), window.addEventListener(`blur`, V), () => {
                document.removeEventListener(`pointermove`, e), document.removeEventListener(`pointerup`, t), document.removeEventListener(`pointercancel`, t), window.removeEventListener(`blur`, V)
            }
        }, ce = [O, z, V], t[15] = O, t[16] = z, t[17] = V, t[18] = W, t[19] = ce) : (W = t[18], ce = t[19]), (0, $.useEffect)(W, ce);
        let le, ue;
        t[20] !== I || t[21] !== r || t[22] !== V ? (le = () => {
            if (!r) {
                V();
                return
            }
            let e = () => {
                let e = I(y.current);
                E(e)
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
            d && j(!1)
        }, me = [d], t[28] = d, t[29] = pe, t[30] = me), (0, $.useEffect)(pe, me);
        let he = l(D),
            ge = !d && A,
            _e = r || he ? d || f : d,
            ve = r && d || f,
            ye = r && d && f,
            be = Math.max(1 - T, 1e-4),
            xe = ye ? mt / be : 0,
            G = `${1/T*100}%`,
            K = `calc(${100/be}% + ${xe}px)`,
            q;
        t[31] === o ? q = t[32] : (q = e => {
            m.current = e, o != null && (o.current = e)
        }, t[31] = o, t[32] = q);
        let J = r && `flex h-full min-h-0 flex-1 items-stretch overflow-hidden pb-4`,
            Y = !r && `relative`,
            X = O && `select-none`,
            Z;
        t[33] !== c || t[34] !== J || t[35] !== Y || t[36] !== X ? (Z = p(c, J, Y, X), t[33] = c, t[34] = J, t[35] = Y, t[36] = X, t[37] = Z) : Z = t[37];
        let Se;
        t[38] !== T || t[39] !== r || t[40] !== d || t[41] !== f || t[42] !== ee || t[43] !== G || t[44] !== M || t[45] !== ge || t[46] !== _e ? (Se = _e && (0, ut.jsx)(`div`, {
            ref: h,
            className: p(`h-full min-h-0 min-w-0`, r && `shrink-0`),
            style: r ? {
                flexBasis: `${T*100}%`
            } : void 0,
            children: (0, ut.jsx)(v.div, {
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
                    duration: r && !M ? .22 : 0,
                    ease: `easeInOut`
                },
                className: p(`h-full min-h-0 min-w-0`, ge && `pointer-events-none invisible`),
                onAnimationComplete: () => {
                    r && !d && j(!0)
                },
                children: ee
            })
        }), t[38] = T, t[39] = r, t[40] = d, t[41] = f, t[42] = ee, t[43] = G, t[44] = M, t[45] = ge, t[46] = _e, t[47] = Se) : Se = t[47];
        let Ce;
        t[48] !== O || t[49] !== he || t[50] !== M || t[51] !== se || t[52] !== ye || t[53] !== oe || t[54] !== V ? (Ce = ye && (0, ut.jsx)(`div`, {
            ref: g,
            role: `separator`,
            "aria-orientation": `vertical`,
            className: p(`bg-token-text-tertiary z-10 w-2 shrink-0 origin-center transform-gpu cursor-ew-resize opacity-0 transition-[transform,opacity]`, M ? `duration-0` : `duration-220`, O && `scale-x-[0.5] opacity-75`, !he && `pointer-events-none invisible`),
            onPointerDown: oe,
            onLostPointerCapture: V,
            onDoubleClick: se
        }), t[48] = O, t[49] = he, t[50] = M, t[51] = se, t[52] = ye, t[53] = oe, t[54] = V, t[55] = Ce) : Ce = t[55];
        let we;
        t[56] !== r || t[57] !== d || t[58] !== f || t[59] !== u || t[60] !== M || t[61] !== te || t[62] !== K || t[63] !== ve ? (we = ve && (0, ut.jsx)(`div`, {
            className: p(r && `grid h-full min-h-0 min-w-0 flex-1 grid-cols-[minmax(0,1fr)]`),
            children: (0, ut.jsx)(v.div, {
                initial: !1,
                className: p(r && `h-full min-h-0 min-w-0 justify-self-end`),
                animate: r ? {
                    width: d ? `100%` : K,
                    x: f ? `0` : `100%`
                } : {
                    x: `0`,
                    width: `100%`
                },
                transition: {
                    duration: r && !M ? .22 : 0,
                    ease: `easeInOut`
                },
                onAnimationComplete: () => {
                    r && !f && u?.()
                },
                children: te
            })
        }), t[56] = r, t[57] = d, t[58] = f, t[59] = u, t[60] = M, t[61] = te, t[62] = K, t[63] = ve, t[64] = we) : we = t[64];
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
//# sourceMappingURL=9e6b8179-fsyfkiejml4cm9ej.js.map
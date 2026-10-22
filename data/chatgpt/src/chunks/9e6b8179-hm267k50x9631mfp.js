import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as n,
    $T as r,
    A8 as i,
    Art as a,
    At as o,
    Bz as s,
    CN as c,
    Dat as l,
    J5 as u,
    LU as d,
    Lnt as f,
    Qy as p,
    Rz as m,
    Vz as h,
    Y7 as g,
    Zy as _,
    cn as v,
    dC as y,
    eE as b,
    eY as x,
    fC as S,
    gq as C,
    jat as w,
    jrt as ee,
    krt as T,
    l7 as E,
    lY as D,
    rq as O,
    u7 as k,
    uq as A,
    wN as j,
    zU as M,
    znt as te,
    zz as ne
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Bn as N,
    Rn as P,
    Vn as re,
    p as F,
    s as ie,
    wn as I,
    zn as L
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    _R as R,
    agn as ae,
    cgn as z,
    gR as B,
    ign as V,
    ogn as H,
    rgn as oe,
    sgn as U
} from "./conversation-small-dwpaie1hln28efxb.js";
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
} from "./30901919-k5uqyx4vyplt9toa.js";
import {
    n as ge,
    t as _e
} from "./2ab5aa6c-j60tftt2lr0hc2y9.js";
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
        p = L(),
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
    let v, y;
    t[7] === r ? (v = t[8], y = t[9]) : (v = () => ({
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
    }), y = [r], t[7] = r, t[8] = v, t[9] = y), (0, G.useImperativeHandle)(l, v, y);
    let b = !n && `mt-4 mb-1`,
        x;
    t[10] === b ? x = t[11] : (x = E(`relative w-full`, b), t[10] = b, t[11] = x);
    let S = n ? d ?? void 0 : void 0,
        C = n ? -1 : void 0,
        w = n ? `dialog` : void 0,
        ee = n ? !0 : void 0,
        T = n ? h : void 0,
        D = n && `bg-token-bg-primary fixed inset-0 z-20 flex flex-col items-stretch px-4 pb-4`,
        O;
    t[12] === D ? O = t[13] : (O = E(D), t[12] = D, t[13] = O);
    let k;
    t[14] !== n || t[15] !== s ? (k = n && (0, K.jsx)(`span`, {
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
    }), t[14] = n, t[15] = s, t[16] = k) : k = t[16];
    let A;
    t[17] !== o || t[18] !== n ? (A = n && (0, K.jsx)(`span`, {
        tabIndex: 0,
        "aria-hidden": `true`,
        "data-code-block-focus-sentinel": `true`,
        className: `h-0 w-0 overflow-hidden opacity-0`,
        onFocus: () => {
            o.current?.focus()
        }
    }), t[17] = o, t[18] = n, t[19] = A) : A = t[19];
    let j;
    t[20] !== c || t[21] !== w || t[22] !== ee || t[23] !== T || t[24] !== O || t[25] !== k || t[26] !== A || t[27] !== C ? (j = (0, K.jsxs)(`div`, {
        ref: u,
        tabIndex: C,
        role: w,
        "aria-modal": ee,
        "aria-label": T,
        className: O,
        children: [k, c, A]
    }), t[20] = c, t[21] = w, t[22] = ee, t[23] = T, t[24] = O, t[25] = k, t[26] = A, t[27] = C, t[28] = j) : j = t[28];
    let M;
    return t[29] !== j || t[30] !== x || t[31] !== S ? (M = (0, K.jsx)(`div`, {
        className: x,
        style: S,
        children: j
    }), t[29] = j, t[30] = x, t[31] = S, t[32] = M) : M = t[32], M
}
var xe, G, K, q = e((() => {
        xe = I(), k(), G = t(re()), P(), K = N()
    })),
    J, Y, X, Z = e((() => {
        h(), U(), H(), V(), J = z({
            id: `code-block-header-actions`,
            icons: {
                download: {
                    normal: oe,
                    small: ae
                }
            }
        }), Y = s.Cross, X = J.Download
    }));

function Se(e) {
    "use forget";
    let t = (0, Ce.c)(12),
        {
            disabled: n,
            className: i,
            ref: a,
            onClick: o
        } = e,
        s = n !== void 0 && n,
        c = (0, we.useRef)(null),
        l, u;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (l = () => ({
        focus: () => {
            c.current?.focus()
        }
    }), u = [], t[0] = l, t[1] = u) : (l = t[0], u = t[1]), (0, we.useImperativeHandle)(a, l, u);
    let d = L(),
        f;
    t[2] === d ? f = t[3] : (f = d.formatMessage({
        id: `CodeBlockCloseButton.closeTooltip`,
        defaultMessage: `Close`
    }), t[2] = d, t[3] = f);
    let p = f,
        m;
    t[4] !== s || t[5] !== p || t[6] !== o ? (m = (0, Te.jsx)(r, {
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
    return t[8] !== i || t[9] !== p || t[10] !== m ? (h = (0, Te.jsx)(_, {
        label: p,
        className: i,
        children: m
    }), t[8] = i, t[9] = p, t[10] = m, t[11] = h) : h = t[11], h
}
var Ce, we, Te, Ee = e((() => {
    Ce = I(), b(), p(), Z(), we = t(re()), P(), Te = N()
}));

function De(e) {
    "use forget";
    let t = (0, Oe.c)(33),
        {
            onClick: n,
            disabled: i,
            className: o,
            kind: s,
            withText: c
        } = e,
        l = s === void 0 ? `png` : s,
        u = c !== void 0 && c,
        d = L(),
        f;
    t[0] !== d || t[1] !== l ? (f = l === `code` ? d.formatMessage({
        id: `codeBlockExportButton.downloadCodeFile`,
        defaultMessage: `Download code file`
    }) : d.formatMessage({
        id: `codeBlockExportButton.downloadPng`,
        defaultMessage: `Download PNG`
    }), t[0] = d, t[1] = l, t[2] = f) : f = t[2];
    let p = f,
        m;
    t[3] !== d || t[4] !== l || t[5] !== u ? (m = u ? l === `code` ? d.formatMessage({
        id: `codeBlockExportButton.downloadFile`,
        defaultMessage: `Download file`
    }) : d.formatMessage({
        id: `codeBlockExportButton.downloadImage`,
        defaultMessage: `Download image`
    }) : null, t[3] = d, t[4] = l, t[5] = u, t[6] = m) : m = t[6];
    let h = m,
        g;
    t[7] === o ? g = t[8] : (g = E(`inline-flex`, o), t[7] = o, t[8] = g);
    let v;
    t[9] !== i || t[10] !== l || t[11] !== n ? (v = e => {
        if (i) {
            e.preventDefault();
            return
        }
        a.count(ee.CODE_BLOCKS, `chatgpt_code_block_export_button_clicked`, {
            kind: l
        }), n()
    }, t[9] = i, t[10] = l, t[11] = n, t[12] = v) : v = t[12];
    let y = u ? `rounded-lg px-3` : `size-9 rounded-full px-2`,
        b = !i && `hover:bg-token-bg-secondary`,
        x = i && `cursor-not-allowed hover:bg-transparent`,
        S;
    t[13] !== y || t[14] !== b || t[15] !== x ? (S = E(`py-2 text-sm font-medium`, y, b, x), t[13] = y, t[14] = b, t[15] = x, t[16] = S) : S = t[16];
    let C;
    t[17] !== h || t[18] !== u ? (C = u ? (0, ke.jsxs)(`span`, {
        className: `inline-flex items-center gap-1.5 whitespace-nowrap`,
        children: [(0, ke.jsx)(X, {
            className: `icon-md`
        }), h]
    }) : (0, ke.jsx)(X, {
        className: `icon-md`
    }), t[17] = h, t[18] = u, t[19] = C) : C = t[19];
    let w;
    t[20] !== i || t[21] !== p || t[22] !== S || t[23] !== C || t[24] !== v ? (w = (0, ke.jsx)(r, {
        type: `button`,
        color: `ghost`,
        label: p,
        visuallyDisabled: i,
        "aria-disabled": i,
        onClick: v,
        className: S,
        children: C
    }), t[20] = i, t[21] = p, t[22] = S, t[23] = C, t[24] = v, t[25] = w) : w = t[25];
    let T;
    t[26] !== w || t[27] !== g ? (T = (0, ke.jsx)(`span`, {
        className: g,
        children: w
    }), t[26] = w, t[27] = g, t[28] = T) : T = t[28];
    let D;
    return t[29] !== p || t[30] !== T || t[31] !== u ? (D = (0, ke.jsx)(_, {
        label: p,
        disabled: u,
        children: T
    }), t[29] = p, t[30] = T, t[31] = u, t[32] = D) : D = t[32], D
}
var Oe, ke, Ae = e((() => {
    Oe = I(), b(), p(), Z(), T(), k(), P(), ke = N()
}));

function je(e) {
    "use forget";
    let t = (0, Me.c)(5),
        {
            clientThreadId: n,
            messageId: r,
            codeIndex: i
        } = e,
        a = D(n),
        o = a != null && r != null,
        s;
    return t[0] !== o || t[1] !== i || t[2] !== r || t[3] !== a ? (s = {
        mutationKey: o ? [`code-block-share`, a, r, i] : [`code-block-share`, `disabled`, i],
        mutationFn: async () => !o || i == null ? null : await g.safePost(`/share/post`, {
            requestBody: {
                attachments_to_create: [{
                    kind: `code_block`,
                    conversation_id: a,
                    message_id: r,
                    code_index: i
                }]
            },
            authOption: l.SendIfAvailable
        })
    }, t[0] = o, t[1] = i, t[2] = r, t[3] = a, t[4] = s) : s = t[4], F(s)
}
var Me, Ne = e((() => {
    Me = I(), x(), w(), n(), ie()
}));

function Pe() {
    return A()
}
var Fe, Ie, Le, Re = e((() => {
        Fe = I(), b(), Ne(), fe(), R(), i(), ne(), d(), te(), S(), O(), T(), c(), k(), P(), Ie = N(), Le = e => {
            "use forget";
            let t = (0, Fe.c)(28),
                {
                    clientThreadId: n,
                    messageId: i,
                    codeIndex: o,
                    flushSave: s,
                    language: c
                } = e,
                l = L(),
                d = M(),
                p = u(Pe),
                h;
            t[0] !== n || t[1] !== o || t[2] !== i ? (h = {
                clientThreadId: n,
                messageId: i,
                codeIndex: o
            }, t[0] = n, t[1] = o, t[2] = i, t[3] = h) : h = t[3];
            let g = je(h),
                _;
            t[4] === l ? _ = t[5] : (_ = l.formatMessage({
                id: `CodeBlockFullScreenHeader.shareLabel`,
                defaultMessage: `Share`
            }), t[4] = l, t[5] = _);
            let v = _,
                b;
            t[6] !== l || t[7] !== d ? (b = () => {
                d.danger(l.formatMessage({
                    id: `CodeBlock.share.error`,
                    defaultMessage: `Failed to create share link.`
                }))
            }, t[6] = l, t[7] = d, t[8] = b) : b = t[8];
            let x = j(b),
                S;
            t[9] !== n || t[10] !== g || t[11] !== s || t[12] !== l || t[13] !== c || t[14] !== i || t[15] !== x || t[16] !== d ? (S = async () => {
                if (!n || !i || g.isPending) return;
                if (a.count(ee.CODE_BLOCKS, `chatgpt_code_block_share_button_clicked`), !await s?.()) {
                    x();
                    return
                }
                let e;
                try {
                    e = await g.mutateAsync()
                } catch {
                    x();
                    return
                }
                let t;
                if (e != null && e.post != null && (t = e.post.id), !t) {
                    x();
                    return
                }
                f.logStructuredEvent(`ChatgptCodeBlockShareButtonClicked`, {
                    conversationId: n,
                    messageId: i,
                    language: c,
                    postId: t
                });
                let r = B(t);
                try {
                    await y(r), d.success(l.formatMessage({
                        id: `CodeBlock.share.success`,
                        defaultMessage: `Share link copied`
                    }))
                } catch {
                    d.danger(l.formatMessage({
                        id: `CodeBlock.share.copyError`,
                        defaultMessage: `Failed to copy share link.`
                    }))
                }
            }, t[9] = n, t[10] = g, t[11] = s, t[12] = l, t[13] = c, t[14] = i, t[15] = x, t[16] = d, t[17] = S) : S = t[17];
            let C = j(S),
                w = g.isPending ? m : he,
                T = p ? `rounded-lg px-2 whitespace-nowrap` : `size-9 rounded-full p-0`,
                D = !g.isPending && `hover:bg-token-bg-secondary`,
                O;
            t[18] !== T || t[19] !== D ? (O = E(`py-2 text-sm font-medium`, T, D), t[18] = T, t[19] = D, t[20] = O) : O = t[20];
            let k = p ? v : null,
                A;
            return t[21] !== g.isPending || t[22] !== C || t[23] !== v || t[24] !== w || t[25] !== O || t[26] !== k ? (A = (0, Ie.jsx)(r, {
                icon: w,
                color: `ghost`,
                size: `medium`,
                label: v,
                className: O,
                disabled: g.isPending,
                onClick: C,
                children: k
            }), t[21] = g.isPending, t[22] = C, t[23] = v, t[24] = w, t[25] = O, t[26] = k, t[27] = A) : A = t[27], A
        }
    })),
    ze, Be, Ve, He = e((() => {
        ze = I(), b(), p(), ue(), pe(), k(), P(), Be = N(), Ve = e => {
            "use forget";
            let t = (0, ze.c)(19),
                {
                    isOpen: n,
                    hasErrorOutput: i,
                    isDisabled: a,
                    onClick: o
                } = e,
                s = n !== void 0 && n,
                c = i !== void 0 && i,
                l = a !== void 0 && a,
                u = L(),
                d;
            t[0] === u ? d = t[1] : (d = u.formatMessage({
                id: `CodeBlockFullScreenHeader.consoleToggleLabel`,
                defaultMessage: `Toggle console`
            }), t[0] = u, t[1] = d);
            let f = d,
                p = c ? W : le,
                m;
            t[2] !== l || t[3] !== o ? (m = () => {
                l || o?.()
            }, t[2] = l, t[3] = o, t[4] = m) : m = t[4];
            let h = !l && `hover:bg-token-bg-secondary`,
                g = l && `cursor-not-allowed opacity-50 hover:bg-transparent`,
                v = s && `bg-token-bg-secondary`,
                y;
            t[5] !== h || t[6] !== g || t[7] !== v ? (y = E(`h-9 w-9 rounded-full p-0`, h, g, v), t[5] = h, t[6] = g, t[7] = v, t[8] = y) : y = t[8];
            let b;
            t[9] !== f || t[10] !== l || t[11] !== s || t[12] !== y || t[13] !== p || t[14] !== m ? (b = (0, Be.jsx)(`span`, {
                className: `inline-flex`,
                children: (0, Be.jsx)(r, {
                    icon: p,
                    type: `button`,
                    color: `ghost`,
                    size: `medium`,
                    label: f,
                    "aria-pressed": s,
                    "aria-disabled": l,
                    onClick: m,
                    className: y
                })
            }), t[9] = f, t[10] = l, t[11] = s, t[12] = y, t[13] = p, t[14] = m, t[15] = b) : b = t[15];
            let x;
            return t[16] !== f || t[17] !== b ? (x = (0, Be.jsx)(_, {
                label: f,
                children: b
            }), t[16] = f, t[17] = b, t[18] = x) : x = t[18], x
        }
    }));

function Ue() {
    return A()
}
var We, Q, Ge, Ke = e((() => {
    We = I(), b(), Ee(), ge(), Ae(), Re(), He(), me(), se(), i(), O(), k(), P(), Q = N(), Ge = e => {
        "use forget";
        let t = (0, We.c)(64),
            {
                code: n,
                messageId: i,
                clientThreadId: a,
                codeIndex: o,
                isStreaming: s,
                isPreviewOpen: c,
                isExecutionPaneOnly: l,
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
                isCodeDisabled: ee,
                onPreviewClick: T,
                onPreviewExportClick: D,
                onPreviewHover: O,
                onConsoleToggle: k,
                onCodeClick: A,
                showCloseButton: j,
                onCloseClick: M,
                closeButtonRef: te
            } = e,
            ne = s !== void 0 && s,
            N = l !== void 0 && l,
            P = d !== void 0 && d,
            re = f !== void 0 && f,
            F = p !== void 0 && p,
            ie = m === void 0 ? `png` : m,
            I = h !== void 0 && h,
            R = g !== void 0 && g,
            ae = _ !== void 0 && _,
            z = v === void 0 || v,
            B = y === void 0 || y,
            V = b !== void 0 && b,
            H = ee !== void 0 && ee,
            oe = j === void 0 || j,
            U = L(),
            W = u(Ue),
            se = I && (W || c),
            le = W && c && re && D != null,
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
        let ve = N ? ge : he,
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
        t[12] !== te || t[13] !== M || t[14] !== oe ? (K = oe && (0, Q.jsx)(Se, {
            onClick: M,
            ref: te
        }), t[12] = te, t[13] = M, t[14] = oe, t[15] = K) : K = t[15];
        let q;
        t[16] !== G || t[17] !== H || t[18] !== w || t[19] !== W || t[20] !== A || t[21] !== B ? (q = W && B && (0, Q.jsx)(r, {
            icon: w ? de : ce,
            color: `ghost`,
            size: `medium`,
            "aria-label": G,
            "aria-pressed": w,
            disabled: H,
            onClick: () => {
                H || A?.()
            },
            className: `rounded-lg`,
            children: G
        }), t[16] = G, t[17] = H, t[18] = w, t[19] = W, t[20] = A, t[21] = B, t[22] = q) : q = t[22];
        let J;
        t[23] !== K || t[24] !== q ? (J = (0, Q.jsxs)(`div`, {
            className: `justify-self-start`,
            children: [K, q]
        }), t[23] = K, t[24] = q, t[25] = J) : J = t[25];
        let Y;
        t[26] !== pe || t[27] !== H || t[28] !== w || t[29] !== P || t[30] !== c || t[31] !== W || t[32] !== A || t[33] !== T || t[34] !== O || t[35] !== ve || t[36] !== B || t[37] !== be ? (Y = P ? (0, Q.jsx)(`div`, {}) : (0, Q.jsx)(`div`, {
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
                    className: E(`h-8 rounded-full px-4 text-sm font-medium transition-colors`, w ? `bg-token-bg-primary text-token-text-primary` : `text-token-text-secondary`, !w && !H && `hover:text-token-text-primary`, H && `text-token-text-quaternary cursor-not-allowed`),
                    onClick: () => {
                        H || w || A?.()
                    },
                    children: pe
                }), (0, Q.jsx)(`button`, {
                    type: `button`,
                    "aria-label": ve,
                    "aria-pressed": c,
                    "aria-disabled": c || P,
                    className: E(`h-8 rounded-full px-4 text-sm font-medium transition-colors`, c ? `bg-token-bg-primary text-token-text-primary` : `text-token-text-secondary`, !c && !P && `hover:text-token-text-primary`, P && `text-token-text-quaternary cursor-not-allowed`),
                    onClick: () => {
                        P || c || T()
                    },
                    onMouseEnter: O,
                    children: ve
                })]
            })
        }), t[26] = pe, t[27] = H, t[28] = w, t[29] = P, t[30] = c, t[31] = W, t[32] = A, t[33] = T, t[34] = O, t[35] = ve, t[36] = B, t[37] = be, t[38] = Y) : Y = t[38];
        let X;
        t[39] !== C || t[40] !== a || t[41] !== n || t[42] !== o || t[43] !== x || t[44] !== ae || t[45] !== R || t[46] !== P || t[47] !== F || t[48] !== V || t[49] !== ne || t[50] !== S || t[51] !== i || t[52] !== k || t[53] !== D || t[54] !== ie || t[55] !== ue || t[56] !== se || t[57] !== z || t[58] !== le ? (X = ue ? (0, Q.jsxs)(`div`, {
            className: `flex items-center gap-0.5 justify-self-end`,
            children: [se ? (0, Q.jsx)(Ve, {
                isOpen: R,
                hasErrorOutput: ae,
                isDisabled: P,
                onClick: k
            }) : null, z ? (0, Q.jsx)(_e, {
                code: n,
                messageId: i,
                clientThreadId: a,
                disabled: ne
            }) : null, le ? (0, Q.jsx)(De, {
                onClick: D,
                disabled: F,
                kind: ie
            }) : null, V ? (0, Q.jsx)(Le, {
                clientThreadId: a,
                messageId: i,
                codeIndex: o,
                flushSave: x,
                language: S
            }) : null, C]
        }) : (0, Q.jsx)(`div`, {}), t[39] = C, t[40] = a, t[41] = n, t[42] = o, t[43] = x, t[44] = ae, t[45] = R, t[46] = P, t[47] = F, t[48] = V, t[49] = ne, t[50] = S, t[51] = i, t[52] = k, t[53] = D, t[54] = ie, t[55] = ue, t[56] = se, t[57] = z, t[58] = le, t[59] = X) : X = t[59];
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
    return C()
}
var lt, $, ut, dt, ft, pt, mt, ht, gt = e((() => {
    lt = I(), i(), O(), c(), k(), o(), $ = t(re()), ut = N(), dt = .33, ft = 200, pt = 200, mt = 8, ht = e => {
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
            d = i === void 0 || i,
            f = a === void 0 || a,
            p = (0, $.useRef)(null),
            m = (0, $.useRef)(null),
            h = (0, $.useRef)(null),
            g = (0, $.useRef)(null),
            _ = (0, $.useRef)(dt),
            y = (0, $.useRef)(0),
            b = (0, $.useRef)(null),
            x = (0, $.useRef)(null),
            S = (0, $.useRef)(null),
            C = (0, $.useRef)(null),
            [w, ee] = (0, $.useState)(dt),
            [T, D] = (0, $.useState)(!1),
            [O, k] = (0, $.useState)(!d),
            M = u(ct),
            [te, ne] = st(s),
            N;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (N = () => {
            let e = document.body.style;
            S.current != null && (e.cursor = S.current, S.current = null), C.current != null && (e.userSelect = C.current, C.current = null)
        }, t[0] = N) : N = t[0];
        let P = j(N),
            re;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (re = e => {
            let t = p.current?.getBoundingClientRect().width;
            if (t == null || t <= 0) return _.current;
            let n = ot(e, t);
            return _.current = n, m.current?.style.setProperty(`flex-basis`, `${n*100}%`), n
        }, t[1] = re) : re = t[1];
        let F = j(re),
            ie;
        t[2] === F ? ie = t[3] : (ie = e => {
            let t = p.current?.getBoundingClientRect();
            if (t == null || t.width <= 0) return _.current;
            let n = (e - y.current - t.left) / Math.max(t.width, 1);
            return F(n)
        }, t[2] = F, t[3] = ie);
        let I = j(ie),
            L;
        t[4] === I ? L = t[5] : (L = () => {
            x.current != null && (window.cancelAnimationFrame(x.current), x.current = null);
            let e = b.current;
            return b.current = null, e == null ? _.current : I(e)
        }, t[4] = I, t[5] = L);
        let R = j(L),
            ae;
        t[6] === R ? ae = t[7] : (ae = e => {
            b.current = e, x.current ??= window.requestAnimationFrame(() => {
                x.current = null, R()
            })
        }, t[6] = R, t[7] = ae);
        let z = j(ae),
            B;
        t[8] !== R || t[9] !== P ? (B = () => {
            let e = g.current,
                t = h.current;
            e != null && t?.hasPointerCapture(e) && t.releasePointerCapture(e), g.current = null;
            let n = R();
            ee(n), y.current = 0, P(), D(!1)
        }, t[8] = R, t[9] = P, t[10] = B) : B = t[10];
        let V = j(B),
            H;
        t[11] === z ? H = t[12] : (H = e => {
            if (e.pointerType === `mouse` && e.button !== 0) return;
            e.preventDefault();
            let t = document.body.style;
            S.current ??= t.cursor, C.current ??= t.userSelect, t.cursor = `col-resize`, t.userSelect = `none`, g.current = e.pointerId, h.current = e.currentTarget, e.currentTarget.setPointerCapture(e.pointerId);
            let n = p.current?.getBoundingClientRect();
            if (n == null || n.width <= 0) y.current = 0;
            else {
                let t = n.left + _.current * n.width;
                y.current = e.clientX - t
            }
            D(!0), z(e.clientX)
        }, t[11] = z, t[12] = H);
        let oe = j(H),
            U;
        t[13] === F ? U = t[14] : (U = () => {
            let e = F(dt);
            ee(e)
        }, t[13] = F, t[14] = U);
        let W = j(U),
            se, ce;
        t[15] !== T || t[16] !== z || t[17] !== V ? (se = () => {
            if (!T) return;
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
        }, ce = [T, z, V], t[15] = T, t[16] = z, t[17] = V, t[18] = se, t[19] = ce) : (se = t[18], ce = t[19]), (0, $.useEffect)(se, ce);
        let le, ue;
        t[20] !== F || t[21] !== r || t[22] !== V ? (le = () => {
            if (!r) {
                V();
                return
            }
            let e = () => {
                let e = F(_.current);
                ee(e)
            };
            return e(), window.addEventListener(`resize`, e), () => {
                window.removeEventListener(`resize`, e)
            }
        }, ue = [F, r, V], t[20] = F, t[21] = r, t[22] = V, t[23] = le, t[24] = ue) : (le = t[23], ue = t[24]), (0, $.useEffect)(le, ue);
        let de, fe;
        t[25] === V ? (de = t[26], fe = t[27]) : (de = () => () => {
            V()
        }, fe = [V], t[25] = V, t[26] = de, t[27] = fe), (0, $.useEffect)(de, fe);
        let pe, me;
        t[28] === d ? (pe = t[29], me = t[30]) : (pe = () => {
            d && k(!1)
        }, me = [d], t[28] = d, t[29] = pe, t[30] = me), (0, $.useEffect)(pe, me);
        let he = u(A),
            ge = !d && O,
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
            X = T && `select-none`,
            Z;
        t[33] !== c || t[34] !== J || t[35] !== Y || t[36] !== X ? (Z = E(c, J, Y, X), t[33] = c, t[34] = J, t[35] = Y, t[36] = X, t[37] = Z) : Z = t[37];
        let Se;
        t[38] !== w || t[39] !== r || t[40] !== d || t[41] !== f || t[42] !== te || t[43] !== G || t[44] !== M || t[45] !== ge || t[46] !== _e ? (Se = _e && (0, ut.jsx)(`div`, {
            ref: m,
            className: E(`h-full min-h-0 min-w-0`, r && `shrink-0`),
            style: r ? {
                flexBasis: `${w*100}%`
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
                className: E(`h-full min-h-0 min-w-0`, ge && `pointer-events-none invisible`),
                onAnimationComplete: () => {
                    r && !d && k(!0)
                },
                children: te
            })
        }), t[38] = w, t[39] = r, t[40] = d, t[41] = f, t[42] = te, t[43] = G, t[44] = M, t[45] = ge, t[46] = _e, t[47] = Se) : Se = t[47];
        let Ce;
        t[48] !== T || t[49] !== he || t[50] !== M || t[51] !== W || t[52] !== ye || t[53] !== oe || t[54] !== V ? (Ce = ye && (0, ut.jsx)(`div`, {
            ref: h,
            role: `separator`,
            "aria-orientation": `vertical`,
            className: E(`bg-token-text-tertiary z-10 w-2 shrink-0 origin-center transform-gpu cursor-ew-resize opacity-0 transition-[transform,opacity]`, M ? `duration-0` : `duration-220`, T && `scale-x-[0.5] opacity-75`, !he && `pointer-events-none invisible`),
            onPointerDown: oe,
            onLostPointerCapture: V,
            onDoubleClick: W
        }), t[48] = T, t[49] = he, t[50] = M, t[51] = W, t[52] = ye, t[53] = oe, t[54] = V, t[55] = Ce) : Ce = t[55];
        let we;
        t[56] !== r || t[57] !== d || t[58] !== f || t[59] !== l || t[60] !== M || t[61] !== ne || t[62] !== K || t[63] !== ve ? (we = ve && (0, ut.jsx)(`div`, {
            className: E(r && `grid h-full min-h-0 min-w-0 flex-1 grid-cols-[minmax(0,1fr)]`),
            children: (0, ut.jsx)(v.div, {
                initial: !1,
                className: E(r && `h-full min-h-0 min-w-0 justify-self-end`),
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
                    r && !f && l?.()
                },
                children: ne
            })
        }), t[56] = r, t[57] = d, t[58] = f, t[59] = l, t[60] = M, t[61] = ne, t[62] = K, t[63] = ve, t[64] = we) : we = t[64];
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
//# sourceMappingURL=9e6b8179-hm267k50x9631mfp.js.map
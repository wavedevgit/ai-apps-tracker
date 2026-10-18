import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $M as n,
    AJ as r,
    AT as i,
    Ait as a,
    At as o,
    B6 as s,
    BK as c,
    Btt as l,
    HS as u,
    Htt as d,
    KK as f,
    Mnt as p,
    My as m,
    NK as h,
    Nnt as g,
    Pit as _,
    Pnt as v,
    VS as y,
    a7 as b,
    b5 as x,
    cn as S,
    dz as C,
    eN as w,
    fz as T,
    hU as ee,
    i5 as te,
    jy as E,
    kT as D,
    l7 as O,
    mz as k,
    pU as A,
    pz as ne,
    y5 as j,
    zJ as re
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as M,
    Rn as N,
    Vn as ie,
    p as P,
    s as ae,
    wn as F,
    zn as I
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    chn as L,
    dhn as oe,
    fhn as R,
    gR as z,
    hR as B,
    lhn as V,
    shn as se,
    uhn as H
} from "./conversation-small-fym1zmu9zimymmm1.js";
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
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    n as W,
    t as _e
} from "./2ab5aa6c-onb8hy7o60mvk37o.js";
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
        p = I(),
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
    t[10] === b ? x = t[11] : (x = j(`relative w-full`, b), t[10] = b, t[11] = x);
    let S = n ? d ?? void 0 : void 0,
        C = n ? -1 : void 0,
        w = n ? `dialog` : void 0,
        T = n ? !0 : void 0,
        ee = n ? h : void 0,
        te = n && `bg-token-bg-primary fixed inset-0 z-20 flex flex-col items-stretch px-4 pb-4`,
        E;
    t[12] === te ? E = t[13] : (E = j(te), t[12] = te, t[13] = E);
    let D;
    t[14] !== n || t[15] !== s ? (D = n && (0, K.jsx)(`span`, {
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
    }), t[14] = n, t[15] = s, t[16] = D) : D = t[16];
    let O;
    t[17] !== o || t[18] !== n ? (O = n && (0, K.jsx)(`span`, {
        tabIndex: 0,
        "aria-hidden": `true`,
        "data-code-block-focus-sentinel": `true`,
        className: `h-0 w-0 overflow-hidden opacity-0`,
        onFocus: () => {
            o.current?.focus()
        }
    }), t[17] = o, t[18] = n, t[19] = O) : O = t[19];
    let k;
    t[20] !== c || t[21] !== w || t[22] !== T || t[23] !== ee || t[24] !== E || t[25] !== D || t[26] !== O || t[27] !== C ? (k = (0, K.jsxs)(`div`, {
        ref: u,
        tabIndex: C,
        role: w,
        "aria-modal": T,
        "aria-label": ee,
        className: E,
        children: [D, c, O]
    }), t[20] = c, t[21] = w, t[22] = T, t[23] = ee, t[24] = E, t[25] = D, t[26] = O, t[27] = C, t[28] = k) : k = t[28];
    let A;
    return t[29] !== k || t[30] !== x || t[31] !== S ? (A = (0, K.jsx)(`div`, {
        className: x,
        style: S,
        children: k
    }), t[29] = k, t[30] = x, t[31] = S, t[32] = A) : A = t[32], A
}
var xe, G, K, q = e((() => {
        xe = F(), x(), G = t(ie()), N(), K = M()
    })),
    J, Y, X, Z = e((() => {
        k(), oe(), H(), L(), J = R({
            id: `code-block-header-actions`,
            icons: {
                download: {
                    normal: se,
                    small: V
                }
            }
        }), Y = ne.Cross, X = J.Download
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
        o = n !== void 0 && n,
        s = (0, we.useRef)(null),
        c, l;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (c = () => ({
        focus: () => {
            s.current?.focus()
        }
    }), l = [], t[0] = c, t[1] = l) : (c = t[0], l = t[1]), (0, we.useImperativeHandle)(i, c, l);
    let u = I(),
        d;
    t[2] === u ? d = t[3] : (d = u.formatMessage({
        id: `CodeBlockCloseButton.closeTooltip`,
        defaultMessage: `Close`
    }), t[2] = u, t[3] = d);
    let f = d,
        p;
    t[4] !== o || t[5] !== f || t[6] !== a ? (p = (0, Te.jsx)(D, {
        icon: Y,
        color: `ghost`,
        size: `medium`,
        "aria-disabled": o,
        "aria-label": f,
        ref: s,
        onClick: a,
        className: `rounded-lg border-0`
    }), t[4] = o, t[5] = f, t[6] = a, t[7] = p) : p = t[7];
    let m;
    return t[8] !== r || t[9] !== f || t[10] !== p ? (m = (0, Te.jsx)(E, {
        label: f,
        className: r,
        children: p
    }), t[8] = r, t[9] = f, t[10] = p, t[11] = m) : m = t[11], m
}
var Ce, we, Te, Ee = e((() => {
    Ce = F(), i(), m(), Z(), we = t(ie()), N(), Te = M()
}));

function De(e) {
    "use forget";
    let t = (0, Oe.c)(33),
        {
            onClick: n,
            disabled: r,
            className: i,
            kind: a,
            withText: o
        } = e,
        s = a === void 0 ? `png` : a,
        c = o !== void 0 && o,
        l = I(),
        u;
    t[0] !== l || t[1] !== s ? (u = s === `code` ? l.formatMessage({
        id: `codeBlockExportButton.downloadCodeFile`,
        defaultMessage: `Download code file`
    }) : l.formatMessage({
        id: `codeBlockExportButton.downloadPng`,
        defaultMessage: `Download PNG`
    }), t[0] = l, t[1] = s, t[2] = u) : u = t[2];
    let d = u,
        f;
    t[3] !== l || t[4] !== s || t[5] !== c ? (f = c ? s === `code` ? l.formatMessage({
        id: `codeBlockExportButton.downloadFile`,
        defaultMessage: `Download file`
    }) : l.formatMessage({
        id: `codeBlockExportButton.downloadImage`,
        defaultMessage: `Download image`
    }) : null, t[3] = l, t[4] = s, t[5] = c, t[6] = f) : f = t[6];
    let p = f,
        m;
    t[7] === i ? m = t[8] : (m = j(`inline-flex`, i), t[7] = i, t[8] = m);
    let h;
    t[9] !== r || t[10] !== s || t[11] !== n ? (h = e => {
        if (r) {
            e.preventDefault();
            return
        }
        g.count(v.CODE_BLOCKS, `chatgpt_code_block_export_button_clicked`, {
            kind: s
        }), n()
    }, t[9] = r, t[10] = s, t[11] = n, t[12] = h) : h = t[12];
    let _ = c ? `rounded-lg px-3` : `size-9 rounded-full px-2`,
        y = !r && `hover:bg-token-bg-secondary`,
        b = r && `cursor-not-allowed hover:bg-transparent`,
        x;
    t[13] !== _ || t[14] !== y || t[15] !== b ? (x = j(`py-2 text-sm font-medium`, _, y, b), t[13] = _, t[14] = y, t[15] = b, t[16] = x) : x = t[16];
    let S;
    t[17] !== p || t[18] !== c ? (S = c ? (0, ke.jsxs)(`span`, {
        className: `inline-flex items-center gap-1.5 whitespace-nowrap`,
        children: [(0, ke.jsx)(X, {
            className: `icon-md`
        }), p]
    }) : (0, ke.jsx)(X, {
        className: `icon-md`
    }), t[17] = p, t[18] = c, t[19] = S) : S = t[19];
    let C;
    t[20] !== r || t[21] !== d || t[22] !== x || t[23] !== S || t[24] !== h ? (C = (0, ke.jsx)(D, {
        type: `button`,
        color: `ghost`,
        label: d,
        visuallyDisabled: r,
        "aria-disabled": r,
        onClick: h,
        className: x,
        children: S
    }), t[20] = r, t[21] = d, t[22] = x, t[23] = S, t[24] = h, t[25] = C) : C = t[25];
    let w;
    t[26] !== C || t[27] !== m ? (w = (0, ke.jsx)(`span`, {
        className: m,
        children: C
    }), t[26] = C, t[27] = m, t[28] = w) : w = t[28];
    let T;
    return t[29] !== d || t[30] !== w || t[31] !== c ? (T = (0, ke.jsx)(E, {
        label: d,
        disabled: c,
        children: w
    }), t[29] = d, t[30] = w, t[31] = c, t[32] = T) : T = t[32], T
}
var Oe, ke, Ae = e((() => {
    Oe = F(), i(), m(), Z(), p(), x(), N(), ke = M()
}));

function je(e) {
    "use forget";
    let t = (0, Me.c)(5),
        {
            clientThreadId: n,
            messageId: r,
            codeIndex: i
        } = e,
        o = re(n),
        s = o != null && r != null,
        c;
    return t[0] !== s || t[1] !== i || t[2] !== r || t[3] !== o ? (c = {
        mutationKey: s ? [`code-block-share`, o, r, i] : [`code-block-share`, `disabled`, i],
        mutationFn: async () => !s || i == null ? null : await b.safePost(`/share/post`, {
            requestBody: {
                attachments_to_create: [{
                    kind: `code_block`,
                    conversation_id: o,
                    message_id: r,
                    code_index: i
                }]
            },
            authOption: a.SendIfAvailable
        })
    }, t[0] = s, t[1] = i, t[2] = r, t[3] = o, t[4] = c) : c = t[4], P(c)
}
var Me, Ne = e((() => {
    Me = F(), r(), _(), O(), ae()
}));

function Pe() {
    return c()
}
var Fe, Ie, Le, Re = e((() => {
        Fe = F(), i(), Ne(), ge(), z(), s(), T(), A(), d(), u(), h(), p(), n(), x(), N(), Ie = M(), Le = e => {
            "use forget";
            let t = (0, Fe.c)(28),
                {
                    clientThreadId: n,
                    messageId: r,
                    codeIndex: i,
                    flushSave: a,
                    language: o
                } = e,
                s = I(),
                c = ee(),
                u = te(Pe),
                d;
            t[0] !== n || t[1] !== i || t[2] !== r ? (d = {
                clientThreadId: n,
                messageId: r,
                codeIndex: i
            }, t[0] = n, t[1] = i, t[2] = r, t[3] = d) : d = t[3];
            let f = je(d),
                p;
            t[4] === s ? p = t[5] : (p = s.formatMessage({
                id: `CodeBlockFullScreenHeader.shareLabel`,
                defaultMessage: `Share`
            }), t[4] = s, t[5] = p);
            let m = p,
                h;
            t[6] !== s || t[7] !== c ? (h = () => {
                c.danger(s.formatMessage({
                    id: `CodeBlock.share.error`,
                    defaultMessage: `Failed to create share link.`
                }))
            }, t[6] = s, t[7] = c, t[8] = h) : h = t[8];
            let _ = w(h),
                b;
            t[9] !== n || t[10] !== f || t[11] !== a || t[12] !== s || t[13] !== o || t[14] !== r || t[15] !== _ || t[16] !== c ? (b = async () => {
                if (!n || !r || f.isPending) return;
                if (g.count(v.CODE_BLOCKS, `chatgpt_code_block_share_button_clicked`), !await a?.()) {
                    _();
                    return
                }
                let e;
                try {
                    e = await f.mutateAsync()
                } catch {
                    _();
                    return
                }
                let t;
                if (e != null && e.post != null && (t = e.post.id), !t) {
                    _();
                    return
                }
                l.logStructuredEvent(`ChatgptCodeBlockShareButtonClicked`, {
                    conversationId: n,
                    messageId: r,
                    language: o,
                    postId: t
                });
                let i = B(t);
                try {
                    await y(i), c.success(s.formatMessage({
                        id: `CodeBlock.share.success`,
                        defaultMessage: `Share link copied`
                    }))
                } catch {
                    c.danger(s.formatMessage({
                        id: `CodeBlock.share.copyError`,
                        defaultMessage: `Failed to copy share link.`
                    }))
                }
            }, t[9] = n, t[10] = f, t[11] = a, t[12] = s, t[13] = o, t[14] = r, t[15] = _, t[16] = c, t[17] = b) : b = t[17];
            let x = w(b),
                S = f.isPending ? C : pe,
                T = u ? `rounded-lg px-2 whitespace-nowrap` : `size-9 rounded-full p-0`,
                E = !f.isPending && `hover:bg-token-bg-secondary`,
                O;
            t[18] !== T || t[19] !== E ? (O = j(`py-2 text-sm font-medium`, T, E), t[18] = T, t[19] = E, t[20] = O) : O = t[20];
            let k = u ? m : null,
                A;
            return t[21] !== f.isPending || t[22] !== x || t[23] !== m || t[24] !== S || t[25] !== O || t[26] !== k ? (A = (0, Ie.jsx)(D, {
                icon: S,
                color: `ghost`,
                size: `medium`,
                label: m,
                className: O,
                disabled: f.isPending,
                onClick: x,
                children: k
            }), t[21] = f.isPending, t[22] = x, t[23] = m, t[24] = S, t[25] = O, t[26] = k, t[27] = A) : A = t[27], A
        }
    })),
    ze, Be, Ve, He = e((() => {
        ze = F(), i(), m(), U(), ue(), x(), N(), Be = M(), Ve = e => {
            "use forget";
            let t = (0, ze.c)(19),
                {
                    isOpen: n,
                    hasErrorOutput: r,
                    isDisabled: i,
                    onClick: a
                } = e,
                o = n !== void 0 && n,
                s = r !== void 0 && r,
                c = i !== void 0 && i,
                l = I(),
                u;
            t[0] === l ? u = t[1] : (u = l.formatMessage({
                id: `CodeBlockFullScreenHeader.consoleToggleLabel`,
                defaultMessage: `Toggle console`
            }), t[0] = l, t[1] = u);
            let d = u,
                f = s ? le : fe,
                p;
            t[2] !== c || t[3] !== a ? (p = () => {
                c || a?.()
            }, t[2] = c, t[3] = a, t[4] = p) : p = t[4];
            let m = !c && `hover:bg-token-bg-secondary`,
                h = c && `cursor-not-allowed opacity-50 hover:bg-transparent`,
                g = o && `bg-token-bg-secondary`,
                _;
            t[5] !== m || t[6] !== h || t[7] !== g ? (_ = j(`h-9 w-9 rounded-full p-0`, m, h, g), t[5] = m, t[6] = h, t[7] = g, t[8] = _) : _ = t[8];
            let v;
            t[9] !== d || t[10] !== c || t[11] !== o || t[12] !== _ || t[13] !== f || t[14] !== p ? (v = (0, Be.jsx)(`span`, {
                className: `inline-flex`,
                children: (0, Be.jsx)(D, {
                    icon: f,
                    type: `button`,
                    color: `ghost`,
                    size: `medium`,
                    label: d,
                    "aria-pressed": o,
                    "aria-disabled": c,
                    onClick: p,
                    className: _
                })
            }), t[9] = d, t[10] = c, t[11] = o, t[12] = _, t[13] = f, t[14] = p, t[15] = v) : v = t[15];
            let y;
            return t[16] !== d || t[17] !== v ? (y = (0, Be.jsx)(E, {
                label: d,
                children: v
            }), t[16] = d, t[17] = v, t[18] = y) : y = t[18], y
        }
    }));

function Ue() {
    return c()
}
var We, Q, Ge, Ke = e((() => {
    We = F(), i(), Ee(), W(), Ae(), Re(), He(), me(), he(), s(), h(), x(), N(), Q = M(), Ge = e => {
        "use forget";
        let t = (0, We.c)(64),
            {
                code: n,
                messageId: r,
                clientThreadId: i,
                codeIndex: a,
                isStreaming: o,
                isPreviewOpen: s,
                isExecutionPaneOnly: c,
                isPreviewDisabled: l,
                isPreviewExportable: u,
                isPreviewExportDisabled: d,
                previewExportKind: f,
                showConsoleToggle: p,
                isConsoleOpen: m,
                hasConsoleErrorOutput: h,
                showCopyButton: g,
                showCodeToggle: _,
                isShareable: v,
                flushSave: y,
                language: b,
                additionalActionButtons: x,
                isCodeOpen: S,
                isCodeDisabled: C,
                onPreviewClick: w,
                onPreviewExportClick: T,
                onPreviewHover: ee,
                onConsoleToggle: E,
                onCodeClick: O,
                showCloseButton: k,
                onCloseClick: A,
                closeButtonRef: ne
            } = e,
            re = o !== void 0 && o,
            M = c !== void 0 && c,
            N = l !== void 0 && l,
            ie = u !== void 0 && u,
            P = d !== void 0 && d,
            ae = f === void 0 ? `png` : f,
            F = p !== void 0 && p,
            L = m !== void 0 && m,
            oe = h !== void 0 && h,
            R = g === void 0 || g,
            z = _ === void 0 || _,
            B = v !== void 0 && v,
            V = C !== void 0 && C,
            se = k === void 0 || k,
            H = I(),
            U = te(Ue),
            le = F && (U || s),
            ue = U && s && ie && T != null,
            fe = le || B || R || ue || x != null,
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
        let ve = M ? W : ge,
            ye;
        t[6] === H ? ye = t[7] : (ye = H.formatMessage({
            id: `CodeBlockFullScreenHeader.viewToggleLabel`,
            defaultMessage: `Toggle view`
        }), t[6] = H, t[7] = ye);
        let be = ye,
            xe;
        t[8] !== H || t[9] !== S || t[10] !== U ? (xe = U && S ? H.formatMessage({
            id: `CodeBlockFullScreenHeader.hideCodeViewLabel`,
            defaultMessage: `Hide code`
        }) : H.formatMessage({
            id: `CodeBlockFullScreenHeader.showCodeViewLabel`,
            defaultMessage: `Show code`
        }), t[8] = H, t[9] = S, t[10] = U, t[11] = xe) : xe = t[11];
        let G = xe,
            K;
        t[12] !== ne || t[13] !== A || t[14] !== se ? (K = se && (0, Q.jsx)(Se, {
            onClick: A,
            ref: ne
        }), t[12] = ne, t[13] = A, t[14] = se, t[15] = K) : K = t[15];
        let q;
        t[16] !== G || t[17] !== V || t[18] !== S || t[19] !== U || t[20] !== O || t[21] !== z ? (q = U && z && (0, Q.jsx)(D, {
            icon: S ? ce : de,
            color: `ghost`,
            size: `medium`,
            "aria-label": G,
            "aria-pressed": S,
            disabled: V,
            onClick: () => {
                V || O?.()
            },
            className: `rounded-lg`,
            children: G
        }), t[16] = G, t[17] = V, t[18] = S, t[19] = U, t[20] = O, t[21] = z, t[22] = q) : q = t[22];
        let J;
        t[23] !== K || t[24] !== q ? (J = (0, Q.jsxs)(`div`, {
            className: `justify-self-start`,
            children: [K, q]
        }), t[23] = K, t[24] = q, t[25] = J) : J = t[25];
        let Y;
        t[26] !== me || t[27] !== V || t[28] !== S || t[29] !== N || t[30] !== s || t[31] !== U || t[32] !== O || t[33] !== w || t[34] !== ee || t[35] !== ve || t[36] !== z || t[37] !== be ? (Y = N ? (0, Q.jsx)(`div`, {}) : (0, Q.jsx)(`div`, {
            className: `justify-self-center`,
            children: !U && z && (0, Q.jsxs)(`div`, {
                role: `group`,
                "aria-label": be,
                className: `bg-token-bg-tertiary inline-grid min-w-[190px] grid-cols-2 gap-1 rounded-full p-1`,
                children: [(0, Q.jsx)(`button`, {
                    type: `button`,
                    "aria-label": me,
                    "aria-pressed": !s,
                    "aria-disabled": !s || V,
                    className: j(`h-8 rounded-full px-4 text-sm font-medium transition-colors`, S ? `bg-token-bg-primary text-token-text-primary` : `text-token-text-secondary`, !S && !V && `hover:text-token-text-primary`, V && `text-token-text-quaternary cursor-not-allowed`),
                    onClick: () => {
                        V || S || O?.()
                    },
                    children: me
                }), (0, Q.jsx)(`button`, {
                    type: `button`,
                    "aria-label": ve,
                    "aria-pressed": s,
                    "aria-disabled": s || N,
                    className: j(`h-8 rounded-full px-4 text-sm font-medium transition-colors`, s ? `bg-token-bg-primary text-token-text-primary` : `text-token-text-secondary`, !s && !N && `hover:text-token-text-primary`, N && `text-token-text-quaternary cursor-not-allowed`),
                    onClick: () => {
                        N || s || w()
                    },
                    onMouseEnter: ee,
                    children: ve
                })]
            })
        }), t[26] = me, t[27] = V, t[28] = S, t[29] = N, t[30] = s, t[31] = U, t[32] = O, t[33] = w, t[34] = ee, t[35] = ve, t[36] = z, t[37] = be, t[38] = Y) : Y = t[38];
        let X;
        t[39] !== x || t[40] !== i || t[41] !== n || t[42] !== a || t[43] !== y || t[44] !== oe || t[45] !== L || t[46] !== N || t[47] !== P || t[48] !== B || t[49] !== re || t[50] !== b || t[51] !== r || t[52] !== E || t[53] !== T || t[54] !== ae || t[55] !== fe || t[56] !== le || t[57] !== R || t[58] !== ue ? (X = fe ? (0, Q.jsxs)(`div`, {
            className: `flex items-center gap-0.5 justify-self-end`,
            children: [le ? (0, Q.jsx)(Ve, {
                isOpen: L,
                hasErrorOutput: oe,
                isDisabled: N,
                onClick: E
            }) : null, R ? (0, Q.jsx)(_e, {
                code: n,
                messageId: r,
                clientThreadId: i,
                disabled: re
            }) : null, ue ? (0, Q.jsx)(De, {
                onClick: T,
                disabled: P,
                kind: ae
            }) : null, B ? (0, Q.jsx)(Le, {
                clientThreadId: i,
                messageId: r,
                codeIndex: a,
                flushSave: y,
                language: b
            }) : null, x]
        }) : (0, Q.jsx)(`div`, {}), t[39] = x, t[40] = i, t[41] = n, t[42] = a, t[43] = y, t[44] = oe, t[45] = L, t[46] = N, t[47] = P, t[48] = B, t[49] = re, t[50] = b, t[51] = r, t[52] = E, t[53] = T, t[54] = ae, t[55] = fe, t[56] = le, t[57] = R, t[58] = ue, t[59] = X) : X = t[59];
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
    return f()
}
var lt, $, ut, dt, ft, pt, mt, ht, gt = e((() => {
    lt = F(), s(), h(), n(), x(), o(), $ = t(ie()), ut = M(), dt = .33, ft = 200, pt = 200, mt = 8, ht = e => {
        "use forget";
        let t = (0, lt.c)(72),
            {
                "data-custom-highlighting-behavior": n,
                isActive: r,
                isLeftPaneVisible: i,
                isRightPaneVisible: a,
                ref: o,
                children: s,
                className: l,
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
            [T, ee] = (0, $.useState)(dt),
            [E, D] = (0, $.useState)(!1),
            [O, k] = (0, $.useState)(!d),
            A = te(ct),
            [ne, re] = st(s),
            M;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (M = () => {
            let e = document.body.style;
            x.current != null && (e.cursor = x.current, x.current = null), C.current != null && (e.userSelect = C.current, C.current = null)
        }, t[0] = M) : M = t[0];
        let N = w(M),
            ie;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (ie = e => {
            let t = p.current?.getBoundingClientRect().width;
            if (t == null || t <= 0) return _.current;
            let n = ot(e, t);
            return _.current = n, m.current?.style.setProperty(`flex-basis`, `${n*100}%`), n
        }, t[1] = ie) : ie = t[1];
        let P = w(ie),
            ae;
        t[2] === P ? ae = t[3] : (ae = e => {
            let t = p.current?.getBoundingClientRect();
            if (t == null || t.width <= 0) return _.current;
            let n = (e - v.current - t.left) / Math.max(t.width, 1);
            return P(n)
        }, t[2] = P, t[3] = ae);
        let F = w(ae),
            I;
        t[4] === F ? I = t[5] : (I = () => {
            b.current != null && (window.cancelAnimationFrame(b.current), b.current = null);
            let e = y.current;
            return y.current = null, e == null ? _.current : F(e)
        }, t[4] = F, t[5] = I);
        let L = w(I),
            oe;
        t[6] === L ? oe = t[7] : (oe = e => {
            y.current = e, b.current ??= window.requestAnimationFrame(() => {
                b.current = null, L()
            })
        }, t[6] = L, t[7] = oe);
        let R = w(oe),
            z;
        t[8] !== L || t[9] !== N ? (z = () => {
            let e = g.current,
                t = h.current;
            e != null && t?.hasPointerCapture(e) && t.releasePointerCapture(e), g.current = null;
            let n = L();
            ee(n), v.current = 0, N(), D(!1)
        }, t[8] = L, t[9] = N, t[10] = z) : z = t[10];
        let B = w(z),
            V;
        t[11] === R ? V = t[12] : (V = e => {
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
            D(!0), R(e.clientX)
        }, t[11] = R, t[12] = V);
        let se = w(V),
            H;
        t[13] === P ? H = t[14] : (H = () => {
            let e = P(dt);
            ee(e)
        }, t[13] = P, t[14] = H);
        let ce = w(H),
            U, le;
        t[15] !== E || t[16] !== R || t[17] !== B ? (U = () => {
            if (!E) return;
            let e = e => {
                    e.pointerId === g.current && R(e.clientX)
                },
                t = e => {
                    e.pointerId === g.current && (R(e.clientX), B())
                };
            return document.addEventListener(`pointermove`, e, {
                passive: !0
            }), document.addEventListener(`pointerup`, t), document.addEventListener(`pointercancel`, t), window.addEventListener(`blur`, B), () => {
                document.removeEventListener(`pointermove`, e), document.removeEventListener(`pointerup`, t), document.removeEventListener(`pointercancel`, t), window.removeEventListener(`blur`, B)
            }
        }, le = [E, R, B], t[15] = E, t[16] = R, t[17] = B, t[18] = U, t[19] = le) : (U = t[18], le = t[19]), (0, $.useEffect)(U, le);
        let ue, de;
        t[20] !== P || t[21] !== r || t[22] !== B ? (ue = () => {
            if (!r) {
                B();
                return
            }
            let e = () => {
                let e = P(_.current);
                ee(e)
            };
            return e(), window.addEventListener(`resize`, e), () => {
                window.removeEventListener(`resize`, e)
            }
        }, de = [P, r, B], t[20] = P, t[21] = r, t[22] = B, t[23] = ue, t[24] = de) : (ue = t[23], de = t[24]), (0, $.useEffect)(ue, de);
        let fe, pe;
        t[25] === B ? (fe = t[26], pe = t[27]) : (fe = () => () => {
            B()
        }, pe = [B], t[25] = B, t[26] = fe, t[27] = pe), (0, $.useEffect)(fe, pe);
        let me, he;
        t[28] === d ? (me = t[29], he = t[30]) : (me = () => {
            d && k(!1)
        }, he = [d], t[28] = d, t[29] = me, t[30] = he), (0, $.useEffect)(me, he);
        let ge = te(c),
            W = !d && O,
            _e = r || ge ? d || f : d,
            ve = r && d || f,
            ye = r && d && f,
            be = Math.max(1 - T, 1e-4),
            xe = ye ? mt / be : 0,
            G = `${1/T*100}%`,
            K = `calc(${100/be}% + ${xe}px)`,
            q;
        t[31] === o ? q = t[32] : (q = e => {
            p.current = e, o != null && (o.current = e)
        }, t[31] = o, t[32] = q);
        let J = r && `flex h-full min-h-0 flex-1 items-stretch overflow-hidden pb-4`,
            Y = !r && `relative`,
            X = E && `select-none`,
            Z;
        t[33] !== l || t[34] !== J || t[35] !== Y || t[36] !== X ? (Z = j(l, J, Y, X), t[33] = l, t[34] = J, t[35] = Y, t[36] = X, t[37] = Z) : Z = t[37];
        let Se;
        t[38] !== T || t[39] !== r || t[40] !== d || t[41] !== f || t[42] !== ne || t[43] !== G || t[44] !== A || t[45] !== W || t[46] !== _e ? (Se = _e && (0, ut.jsx)(`div`, {
            ref: m,
            className: j(`h-full min-h-0 min-w-0`, r && `shrink-0`),
            style: r ? {
                flexBasis: `${T*100}%`
            } : void 0,
            children: (0, ut.jsx)(S.div, {
                initial: !1,
                "aria-hidden": W ? !0 : void 0,
                inert: W,
                animate: r ? {
                    x: d ? `0` : `-100%`,
                    width: f ? `100%` : G
                } : {
                    x: `0`,
                    width: `100%`
                },
                transition: {
                    duration: r && !A ? .22 : 0,
                    ease: `easeInOut`
                },
                className: j(`h-full min-h-0 min-w-0`, W && `pointer-events-none invisible`),
                onAnimationComplete: () => {
                    r && !d && k(!0)
                },
                children: ne
            })
        }), t[38] = T, t[39] = r, t[40] = d, t[41] = f, t[42] = ne, t[43] = G, t[44] = A, t[45] = W, t[46] = _e, t[47] = Se) : Se = t[47];
        let Ce;
        t[48] !== E || t[49] !== ge || t[50] !== A || t[51] !== ce || t[52] !== ye || t[53] !== se || t[54] !== B ? (Ce = ye && (0, ut.jsx)(`div`, {
            ref: h,
            role: `separator`,
            "aria-orientation": `vertical`,
            className: j(`bg-token-text-tertiary z-10 w-2 shrink-0 origin-center transform-gpu cursor-ew-resize opacity-0 transition-[transform,opacity]`, A ? `duration-0` : `duration-220`, E && `scale-x-[0.5] opacity-75`, !ge && `pointer-events-none invisible`),
            onPointerDown: se,
            onLostPointerCapture: B,
            onDoubleClick: ce
        }), t[48] = E, t[49] = ge, t[50] = A, t[51] = ce, t[52] = ye, t[53] = se, t[54] = B, t[55] = Ce) : Ce = t[55];
        let we;
        t[56] !== r || t[57] !== d || t[58] !== f || t[59] !== u || t[60] !== A || t[61] !== re || t[62] !== K || t[63] !== ve ? (we = ve && (0, ut.jsx)(`div`, {
            className: j(r && `grid h-full min-h-0 min-w-0 flex-1 grid-cols-[minmax(0,1fr)]`),
            children: (0, ut.jsx)(S.div, {
                initial: !1,
                className: j(r && `h-full min-h-0 min-w-0 justify-self-end`),
                animate: r ? {
                    width: d ? `100%` : K,
                    x: f ? `0` : `100%`
                } : {
                    x: `0`,
                    width: `100%`
                },
                transition: {
                    duration: r && !A ? .22 : 0,
                    ease: `easeInOut`
                },
                onAnimationComplete: () => {
                    r && !f && u?.()
                },
                children: re
            })
        }), t[56] = r, t[57] = d, t[58] = f, t[59] = u, t[60] = A, t[61] = re, t[62] = K, t[63] = ve, t[64] = we) : we = t[64];
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
//# sourceMappingURL=9e6b8179-isvcbj7whybsvqn9.js.map
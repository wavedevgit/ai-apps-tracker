import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    BU as n,
    CN as r,
    HU as i,
    JT as a,
    LN as o,
    RN as s,
    X5 as c,
    Xy as l,
    Y5 as u,
    YT as d,
    Zy as f,
    bN as p
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    Bn as m,
    Nn as h,
    Rn as g,
    Vn as _,
    wn as v,
    zn as y
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    IHn as b,
    LHn as x,
    RHn as S
} from "./conversation-small-kzsalymynzuddxee.js";
import {
    CC as C,
    FS as w,
    IS as ee,
    Im as te,
    Lm as ne,
    SC as re,
    df as ie,
    ff as T
} from "./30901919-i8ip8r0znvgcym38.js";
import {
    n as E,
    t as ae
} from "./1f8ec761-bmtyk12tnmxci4if.js";
import {
    n as oe,
    t as se
} from "./d937f443-l44ptnwd3847lmgg.js";
import {
    a as D,
    c as ce,
    i as le,
    l as O,
    o as ue,
    r as de,
    s as fe,
    u as k
} from "./f531ca99-mqo7mr0qg76gxjct.js";
import {
    n as A,
    t as pe
} from "./4e320c5c-ngza98wxcu8ymm3e.js";

function me() {
    "use forget";
    return (0, j.useContext)(M)
}
var j, M, N = e((() => {
        j = t(_()), M = (0, j.createContext)(null)
    })),
    P, F = e((() => {
        P = `md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem]`
    }));

function he({
    filePath: e,
    side: t,
    lineNumber: n,
    onSubmit: r,
    onDelete: i,
    onClose: o,
    initialComment: s,
    readOnly: c = !1
}) {
    let l = s ? I(s) : ``,
        [d, f] = (0, L.useState)(s ? I(s) : ``),
        [p, m] = (0, L.useState)(!s && !c),
        [g, _] = (0, L.useState)(!1),
        v = (0, L.useRef)(null),
        b = y(),
        x = () => {
            !d || c || !r || (r(s ? {
                ...s,
                content: [{
                    content_type: `text`,
                    text: d
                }]
            } : {
                id: crypto.randomUUID(),
                type: `comment`,
                content: [{
                    content_type: `text`,
                    text: d
                }],
                position: {
                    side: t === O.old ? `left` : `right`,
                    path: e,
                    line: n
                }
            }), m(!1), v.current?.blur(), o?.())
        };
    return (0, L.useEffect)(() => {
        if (c) {
            m(!1);
            return
        }!g && s && d === l && setTimeout(() => {
            m(!1)
        }, 100), g && (m(!0), v.current?.focus())
    }, [g, s, d, l, c]), (0, R.jsx)(`div`, {
        className: `gap-2 bg-gray-100/50 p-4 font-sans dark:bg-gray-900`,
        id: s?.id,
        children: (0, R.jsxs)(`div`, {
            className: u(`flex flex-col gap-2`, P),
            children: [(0, R.jsx)(se, {
                ref: v,
                className: `border-token-border-medium bg-token-main-surface-primary text-token-text-primary border-1.5 w-full resize-none rounded-lg p-4 text-sm ring-0 focus:border-black focus:outline-hidden dark:focus:border-white`,
                "data-wham-comment-textarea": !0,
                onFocus: () => {
                    c || _(!0)
                },
                onBlur: () => {
                    c || _(!1)
                },
                placeholder: b.formatMessage({
                    id: `code.diff.addComment`,
                    defaultMessage: `Add a comment`
                }),
                minRows: 1,
                maxRows: 10,
                autoFocus: !s && !c,
                readOnly: c,
                "aria-readonly": c,
                onSubmit: () => {},
                value: d,
                onChange: e => {
                    c || f(e.target.value)
                },
                onKeyDown: e => {
                    c || (e.key === `Enter` && e.metaKey && (e.preventDefault(), x()), e.key === `Escape` && (e.preventDefault(), o?.()))
                }
            }), !c && p && (0, R.jsxs)(`div`, {
                className: u(`mt-2 flex items-center justify-between gap-2`, !i && `justify-end`),
                children: [i && (0, R.jsx)(a, {
                    color: `danger`,
                    onClick: () => i?.(),
                    children: (0, R.jsx)(h, {
                        id: `code.diffComment.delete`,
                        defaultMessage: `Delete`
                    })
                }), (0, R.jsxs)(`div`, {
                    className: `flex items-center justify-end gap-2`,
                    children: [(0, R.jsx)(a, {
                        color: `secondary`,
                        onClick: () => {
                            o?.(), m(!1), s && f(I(s))
                        },
                        children: (0, R.jsx)(h, {
                            id: `code.diffComment.cancel`,
                            defaultMessage: `Cancel`
                        })
                    }), (0, R.jsx)(a, {
                        color: `primary`,
                        disabled: !d,
                        onClick: x,
                        children: s ? (0, R.jsx)(h, {
                            id: `code.diffComment.save`,
                            defaultMessage: `Save`
                        }) : (0, R.jsx)(h, {
                            id: `code.diffComment.comment`,
                            defaultMessage: `Comment`
                        })
                    })]
                })]
            })]
        })
    })
}

function I(e) {
    return e.content.map(e => e.content_type === `text` ? e.text : ``).join(``)
}
var L, R, z = e((() => {
    d(), F(), k(), c(), L = t(_()), g(), oe(), R = m()
}));

function ge(e) {
    return e.content.map(e => e.content_type === `text` ? e.text : ``).filter(e => e.length > 0).join(`
`).trim()
}

function _e({
    comment: e,
    showFileInfo: t = !1
}) {
    let n = (0, B.useMemo)(() => ge(e), [e]),
        r = e.priority,
        i = Math.round(e.confidence_score * 100),
        a = e.position.start_line,
        o = e.position.line,
        s = !!a && !!o,
        c = e.position.side === `left` ? `-` : `+`,
        l = e => `${c}${e}`,
        d = [];
    return t && e.position.path && d.push((0, V.jsx)(`span`, {
        className: `text-token-text-primary font-semibold`,
        children: e.position.path
    }, `path`)), s && d.push(a === o ? (0, V.jsx)(h, {
        id: `wham.codeDiffReadonlyComment.commentOnSingleLine`,
        defaultMessage: `Comment on line {line}`,
        values: {
            line: (0, V.jsx)(`span`, {
                className: `font-semibold`,
                children: l(a)
            })
        }
    }, `single`) : (0, V.jsx)(h, {
        id: `wham.codeDiffReadonlyComment.commentOnMultipleLines`,
        defaultMessage: `Comment on lines {start} to {end}`,
        values: {
            start: (0, V.jsx)(`span`, {
                className: `font-semibold`,
                children: l(a)
            }),
            end: (0, V.jsx)(`span`, {
                className: `font-semibold`,
                children: l(o)
            })
        }
    }, `range`)), (0, V.jsxs)(`div`, {
        className: `border-token-border-default bg-token-bg-secondary rounded-lg border px-4 py-3 text-sm`,
        children: [d.length > 0 && (0, V.jsx)(`div`, {
            className: `text-token-text-tertiary border-token-border-subtle mb-3 border-b pb-2 text-xs font-medium`,
            children: (0, V.jsx)(`div`, {
                className: `flex flex-col gap-1`,
                children: d.map((e, t) => (0, V.jsx)(`span`, {
                    children: e
                }, t))
            })
        }), (0, V.jsxs)(`div`, {
            className: `text-token-text-tertiary flex flex-wrap items-center gap-2 text-xs`,
            children: [r != null && (0, V.jsx)(`span`, {
                className: `bg-token-bg-tertiary text-token-text-tertiary rounded px-1 py-0.5 font-medium`,
                children: (0, V.jsx)(h, {
                    id: `wham.codeDiffReadonlyComment.priority`,
                    defaultMessage: `Priority {priority}`,
                    values: {
                        priority: r
                    }
                })
            }), e.title && (0, V.jsx)(`span`, {
                className: `text-token-text-primary font-medium`,
                children: e.title
            }), i != null && (0, V.jsx)(`span`, {
                className: u(`ms-auto`, !e.title && `font-medium`),
                "data-testid": `codex-comment-confidence`,
                children: (0, V.jsx)(h, {
                    id: `wham.codeDiffReadonlyComment.confidence`,
                    defaultMessage: `{confidence}% confidence`,
                    values: {
                        confidence: i
                    }
                })
            })]
        }), n && (0, V.jsx)(`div`, {
            className: `text-token-text-primary mt-2 leading-5 whitespace-pre-wrap`,
            children: n
        })]
    })
}
var B, V, ve = e((() => {
    c(), B = t(_()), g(), V = m()
}));

function ye(e) {
    "use forget";
    let t = (0, be.c)(27),
        {
            copyDiffToClipboard: n,
            copyPatchToClipboard: r,
            copyFileToClipboard: i
        } = e,
        [a, o] = (0, xe.useState)(!1),
        s = y(),
        c;
    t[0] !== n || t[1] !== r ? (c = e => t => {
        t.preventDefault(), t.stopPropagation(), e === `diff` ? n() : r()
    }, t[0] = n, t[1] = r, t[2] = c) : c = t[2];
    let l = c,
        u;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (u = e => {
        e.preventDefault(), e.stopPropagation(), o(!0)
    }, t[3] = u) : u = t[3];
    let d;
    t[4] === s ? d = t[5] : (d = s.formatMessage({
        id: `wham.copyFileActionDropdown.openMenu`,
        defaultMessage: `Open copy menu`
    }), t[4] = s, t[5] = d);
    let f;
    t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (f = (0, H.jsx)(te, {
        className: `icon`
    }), t[6] = f) : f = t[6];
    let p;
    t[7] === d ? p = t[8] : (p = (0, H.jsx)(`button`, {
        type: `button`,
        onClick: u,
        className: `hover:bg-token-border-light rounded p-1`,
        "aria-label": d,
        children: f
    }), t[7] = d, t[8] = p);
    let m;
    t[9] === l ? m = t[10] : (m = l(`diff`), t[9] = l, t[10] = m);
    let g;
    t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (g = (0, H.jsx)(h, {
        id: `wham.copyFile.apply`,
        defaultMessage: `Copy git apply`
    }), t[11] = g) : g = t[11];
    let _;
    t[12] === m ? _ = t[13] : (_ = (0, H.jsx)(x.Item, {
        icon: ie,
        onClick: m,
        children: g
    }), t[12] = m, t[13] = _);
    let v;
    t[14] === l ? v = t[15] : (v = l(`patch`), t[14] = l, t[15] = v);
    let S;
    t[16] === Symbol.for(`react.memo_cache_sentinel`) ? (S = (0, H.jsx)(h, {
        id: `wham.copyFile.patch`,
        defaultMessage: `Copy patch`
    }), t[16] = S) : S = t[16];
    let C;
    t[17] === v ? C = t[18] : (C = (0, H.jsx)(x.Item, {
        icon: ie,
        onClick: v,
        children: S
    }), t[17] = v, t[18] = C);
    let w;
    t[19] === i ? w = t[20] : (w = i && (0, H.jsx)(x.Item, {
        icon: ie,
        onClick: i,
        children: (0, H.jsx)(h, {
            id: `wham.copyFile.contents`,
            defaultMessage: `Copy file`
        })
    }), t[19] = i, t[20] = w);
    let ee;
    return t[21] !== a || t[22] !== C || t[23] !== w || t[24] !== p || t[25] !== _ ? (ee = (0, H.jsxs)(b, {
        open: a,
        onOpenChange: o,
        contentAlign: `end`,
        sideOffset: 8,
        modal: !0,
        triggerButton: p,
        children: [_, C, w]
    }), t[21] = a, t[22] = C, t[23] = w, t[24] = p, t[25] = _, t[26] = ee) : ee = t[26], ee
}
var be, xe, H, U = e((() => {
    be = v(), S(), T(), ne(), xe = t(_()), g(), H = m()
}));

function Se(e) {
    return ` (cd "$(git rev-parse --show-toplevel)" && printf '%s' ` + (`'` + (e.endsWith(`
`) ? e : `${e}\n`).replaceAll(`'`, `'\\''`) + `'`) + ` | git apply --3way)`
}
var W = e((() => {})),
    G, Ce, K, we, Te = e((() => {
        G = `M6_DWa_diffView`, Ce = `M6_DWa_disableHorizontalScroll`, K = `M6_DWa_placeholder`, we = {
            diffView: G,
            disableHorizontalScroll: Ce,
            placeholder: K
        }
    })),
    Ee = e((() => {}));

function De(e) {
    return (0, q.useEffect)(() => {
        function t(t) {
            e(t.detail.open)
        }
        return window.addEventListener(J, t), () => {
            window.removeEventListener(J, t)
        }
    }, [e]), (0, q.useCallback)(e => {
        window.dispatchEvent(new CustomEvent(J, {
            detail: {
                open: e
            }
        }))
    }, [])
}
var q, J, Y = e((() => {
    q = t(_()), J = `wham-toggle-all-diffs`
}));

function Oe(e) {
    "use forget";
    let t = (0, Pe.c)(26),
        {
            text: n,
            className: r,
            title: i
        } = e,
        a = (0, X.useRef)(null),
        o = (0, X.useRef)(null),
        [c, l] = (0, X.useState)(n),
        d;
    t[0] === n ? d = t[1] : (d = () => {
        let e = a.current,
            t = o.current;
        if (!e || !t) return;
        let r = e.clientWidth;
        if (t.textContent = n, t.scrollWidth <= r) {
            l(n);
            return
        }
        let i = 0,
            s = n.length,
            c = `…`;
        for (; i <= s;) {
            let e = Math.floor((i + s) / 2),
                a = `…${n.slice(Math.max(n.length-e,0))}`;
            t.textContent = a, t.scrollWidth <= r ? (c = a, i = e + 1) : s = e - 1
        }
        l(c)
    }, t[0] = n, t[1] = d);
    let f = d,
        p, m;
    t[2] !== n || t[3] !== f ? (p = () => {
        l(n), f()
    }, m = [n, f], t[2] = n, t[3] = f, t[4] = p, t[5] = m) : (p = t[4], m = t[5]), s(p, m);
    let h, g;
    t[6] === f ? (h = t[7], g = t[8]) : (h = () => {
        let e = a.current;
        if (!e) return;
        let t = new ResizeObserver(() => f());
        return t.observe(e), () => t.disconnect()
    }, g = [f], t[6] = f, t[7] = h, t[8] = g), s(h, g);
    let _, v;
    t[9] === n ? (_ = t[10], v = t[11]) : (_ = e => {
        e.preventDefault(), e.clipboardData.setData(`text/plain`, n)
    }, v = (0, Z.jsx)(`span`, {
        className: `sr-only`,
        children: n
    }), t[9] = n, t[10] = _, t[11] = v);
    let y;
    t[12] !== r || t[13] !== c || t[14] !== i ? (y = (0, Z.jsx)(`span`, {
        "aria-hidden": !0,
        className: r,
        title: i,
        children: c
    }), t[12] = r, t[13] = c, t[14] = i, t[15] = y) : y = t[15];
    let b;
    t[16] === r ? b = t[17] : (b = u(`invisible fixed whitespace-nowrap`, r), t[16] = r, t[17] = b);
    let x;
    t[18] === b ? x = t[19] : (x = (0, Z.jsx)(`span`, {
        "aria-hidden": !0,
        ref: o,
        className: b
    }), t[18] = b, t[19] = x);
    let S;
    return t[20] !== x || t[21] !== _ || t[22] !== v || t[23] !== y || t[24] !== n ? (S = (0, Z.jsxs)(`span`, {
        ref: a,
        className: `block min-w-0`,
        "aria-label": n,
        onCopy: _,
        children: [v, y, x]
    }), t[20] = x, t[21] = _, t[22] = v, t[23] = y, t[24] = n, t[25] = S) : S = t[25], S
}

function ke(e, t) {
    return [...e.map(e => ({
        kind: `editable`,
        comment: e
    })), ...t.map(e => ({
        kind: `readonly`,
        comment: e
    }))].reduce((e, t) => {
        let {
            position: n
        } = t.comment, {
            side: r,
            line: i,
            path: a
        } = n;
        if (i == null || !a) return e;
        e[a] || (e[a] = {
            oldFile: {},
            newFile: {}
        });
        let o = r === `left` ? e[a].oldFile : e[a].newFile;
        return o[i] = {
            data: [...o[i]?.data ?? [], t]
        }, e
    }, {})
}

function Ae(e, t) {
    return {
        oldFile: e._oldFileName ? t[e._oldFileName]?.oldFile ?? {} : {},
        newFile: e._newFileName ? t[e._newFileName]?.newFile ?? {} : {}
    }
}

function je(e) {
    "use forget";
    let t = (0, Pe.c)(142),
        {
            diff: n,
            viewType: o,
            stickyHeader: s,
            enableComments: c,
            comments: d,
            buttonClassName: f,
            onCommentCreate: p,
            onCommentDelete: m,
            onCommentUpdate: g,
            readonlyComments: _,
            showReadonlyComments: v,
            forceLargeDiff: b,
            headerHref: x,
            headerLinkAriaLabel: S,
            copyHeaderText: C,
            copyHeaderAriaLabel: w,
            copiedHeaderTooltipLabel: te,
            showCopyActions: ne
        } = e,
        T = c !== void 0 && c,
        E = v === void 0 || v,
        oe = b !== void 0 && b,
        se = ne === void 0 || ne,
        D = me(),
        O = r(),
        k = y(),
        A, j, M, N, P;
    t[0] !== n || t[1] !== oe || t[2] !== D ? (j = de(n.diffFile), A = D ? `${D.versionKey}::${j}` : j, M = le(n.diffFile, n.hunksText), N = M >= Fe || oe, P = D ? D.getOpenState(A) : void 0, t[0] = n, t[1] = oe, t[2] = D, t[3] = A, t[4] = j, t[5] = M, t[6] = N, t[7] = P) : (A = t[3], j = t[4], M = t[5], N = t[6], P = t[7]);
    let F = P,
        I;
    t[8] === n.diffFile ? I = t[9] : (I = fe(n.diffFile), t[8] = n.diffFile, t[9] = I);
    let L = !I,
        R;
    t[10] !== L || t[11] !== F ? (R = () => F ?? L, t[10] = L, t[11] = F, t[12] = R) : R = t[12];
    let [z, ge] = (0, X.useState)(R), B = `${A}::${M}::${oe?`forced`:`auto`}`, [V, ve] = (0, X.useState)(null), be = !N || V === B, [xe, H] = (0, X.useState)(!1), U = i(), W;
    t[13] !== A || t[14] !== D ? (W = e => {
        ge(t => {
            let n = typeof e == `function` ? e(t) : e;
            return D && D.setOpenState(A, n), n
        })
    }, t[13] = A, t[14] = D, t[15] = W) : W = t[15];
    let G = W,
        Ce = De(G),
        K;
    t[16] !== L || t[17] !== F ? (K = () => {
        ge(F ?? L)
    }, t[16] = L, t[17] = F, t[18] = K) : K = t[18];
    let Te;
    t[19] !== A || t[20] !== L || t[21] !== F ? (Te = [A, F, L], t[19] = A, t[20] = L, t[21] = F, t[22] = Te) : Te = t[22], (0, X.useEffect)(K, Te);
    let Ee, q;
    t[23] !== n.diffFile || t[24] !== O ? (Ee = () => {
        n.diffFile.initTheme(O ? `dark` : `light`)
    }, q = [n.diffFile, O], t[23] = n.diffFile, t[24] = O, t[25] = Ee, t[26] = q) : (Ee = t[25], q = t[26]), (0, X.useEffect)(Ee, q);
    let J;
    t[27] === d ? J = t[28] : (J = d ?? [], t[27] = d, t[28] = J);
    let Y;
    t[29] !== _ || t[30] !== E ? (Y = E ? _ ?? [] : [], t[29] = _, t[30] = E, t[31] = Y) : Y = t[31];
    let je;
    t[32] !== J || t[33] !== Y ? (je = ke(J, Y), t[32] = J, t[33] = Y, t[34] = je) : je = t[34];
    let Ie = je,
        Le;
    t[35] !== n.diffFile || t[36] !== Ie ? (Le = Ae(n.diffFile, Ie), t[35] = n.diffFile, t[36] = Ie, t[37] = Le) : Le = t[37];
    let Re = Le,
        ze;
    t[38] !== C || t[39] !== n.diffFile._newFileName || t[40] !== n.diffFile._oldFileName ? (ze = () => {
        let e = n.diffFile._newFileName === `/dev/null` ? n.diffFile._oldFileName : n.diffFile._newFileName;
        navigator.clipboard.writeText(C ?? e), H(!0), setTimeout(() => {
            H(!1)
        }, 1e3)
    }, t[38] = C, t[39] = n.diffFile._newFileName, t[40] = n.diffFile._oldFileName, t[41] = ze) : ze = t[41];
    let Be = ze,
        Ve;
    t[42] !== n.hunksText || t[43] !== k || t[44] !== U ? (Ve = async () => {
        n.hunksText && (await navigator.clipboard.writeText(Se(n.hunksText)), U.success(k.formatMessage({
            id: `wham.message.modal.footer.copiedToClipboard`,
            defaultMessage: `Copied git apply command to clipboard`
        }), {
            duration: 3,
            hasCloseButton: !0
        }))
    }, t[42] = n.hunksText, t[43] = k, t[44] = U, t[45] = Ve) : Ve = t[45];
    let He = Ve,
        Ue;
    t[46] !== n.hunksText || t[47] !== k || t[48] !== U ? (Ue = async () => {
        n.hunksText && (await navigator.clipboard.writeText(n.hunksText), U.success(k.formatMessage({
            id: `wham.codeDiff.copiedPatchToClipboard`,
            defaultMessage: `Copied patch to clipboard`
        }), {
            duration: 3,
            hasCloseButton: !0
        }))
    }, t[46] = n.hunksText, t[47] = k, t[48] = U, t[49] = Ue) : Ue = t[49];
    let We = Ue,
        Ge;
    t[50] !== n.diffFile || t[51] !== k || t[52] !== U ? (Ge = async () => {
        if (!ue(n.diffFile)) return;
        let e = n.diffFile.getNewFileContent() ?? ``;
        await navigator.clipboard.writeText(e), U.success(k.formatMessage({
            id: `wham.codeDiff.copiedFileToClipboard`,
            defaultMessage: `Copied file contents to clipboard`
        }), {
            duration: 3,
            hasCloseButton: !0
        })
    }, t[50] = n.diffFile, t[51] = k, t[52] = U, t[53] = Ge) : Ge = t[53];
    let Ke = Ge,
        qe;
    t[54] === n.diffFile ? qe = t[55] : (qe = ue(n.diffFile), t[54] = n.diffFile, t[55] = qe);
    let Je = qe,
        Ye = !n.diffFile.unifiedLineLength && !n.diffFile.splitLineLength,
        Xe;
    t[56] === Symbol.for(`react.memo_cache_sentinel`) ? (Xe = u(`flex flex-col pt-1`, we.diffView), t[56] = Xe) : Xe = t[56];
    let Ze;
    t[57] !== Ce || t[58] !== z || t[59] !== G ? (Ze = e => {
        let t = !z;
        e.altKey ? Ce(t) : G(t)
    }, t[57] = Ce, t[58] = z, t[59] = G, t[60] = Ze) : Ze = t[60];
    let Qe = s && `sticky top-0 z-1`,
        $e;
    t[61] !== f || t[62] !== Qe ? ($e = u(`focus-visible:outline-none`, Qe, f), t[61] = f, t[62] = Qe, t[63] = $e) : $e = t[63];
    let et = !z && `rounded-b-2xl`,
        tt;
    t[64] === et ? tt = t[65] : (tt = u(`bg-token-bg-primary border-token-border-default relative flex items-center rounded-t-2xl border px-4 py-3 text-sm font-medium before:absolute before:inset-x-[-1px] before:top-[-1px] before:bottom-0 before:z-[-1] before:bg-[var(--right-bg)] before:content-['']`, et), t[64] = et, t[65] = tt);
    let nt = z && `rotate-90`,
        Q;
    t[66] === nt ? Q = t[67] : (Q = u(`icon me-3 transition-transform duration-200`, nt), t[66] = nt, t[67] = Q);
    let rt;
    t[68] === Q ? rt = t[69] : (rt = (0, Z.jsx)(re, {
        className: Q
    }), t[68] = Q, t[69] = rt);
    let it;
    t[70] !== j || t[71] !== x || t[72] !== S ? (it = (0, Z.jsx)(`div`, {
        className: `me-1 min-w-0 flex-1`,
        children: x ? (0, Z.jsx)(`a`, {
            href: x,
            target: `_blank`,
            rel: `noreferrer`,
            "aria-label": S,
            className: `block min-w-0 text-inherit hover:underline`,
            onClick: Ne,
            children: (0, Z.jsx)(Oe, {
                text: j,
                className: `block text-start select-text`,
                title: j
            })
        }) : (0, Z.jsx)(Oe, {
            text: j,
            className: `block text-start select-text`,
            title: j
        })
    }), t[70] = j, t[71] = x, t[72] = S, t[73] = it) : it = t[73];
    let at;
    t[74] === n.diffFile ? at = t[75] : (at = (0, Z.jsx)(pe, {
        diffFile: n.diffFile
    }), t[74] = n.diffFile, t[75] = at);
    let ot;
    t[76] !== te || t[77] !== k ? (ot = te ?? k.formatMessage({
        id: `wham.codeDiff.copiedFileName`,
        defaultMessage: `Copied File Name`
    }), t[76] = te, t[77] = k, t[78] = ot) : ot = t[78];
    let st;
    t[79] === Be ? st = t[80] : (st = e => {
        e.preventDefault(), e.stopPropagation(), Be()
    }, t[79] = Be, t[80] = st);
    let ct;
    t[81] !== w || t[82] !== k ? (ct = w ?? k.formatMessage({
        id: `wham.codeDiff.copyFileName`,
        defaultMessage: `Copy file name`
    }), t[81] = w, t[82] = k, t[83] = ct) : ct = t[83];
    let lt;
    t[84] === Symbol.for(`react.memo_cache_sentinel`) ? (lt = (0, Z.jsx)(ie, {
        className: `icon-xs`
    }), t[84] = lt) : lt = t[84];
    let ut;
    t[85] !== st || t[86] !== ct ? (ut = (0, Z.jsx)(`div`, {
        role: `button`,
        onClick: st,
        className: `hover:bg-token-border-light rounded p-1`,
        "aria-label": ct,
        children: lt
    }), t[85] = st, t[86] = ct, t[87] = ut) : ut = t[87];
    let dt;
    t[88] !== xe || t[89] !== ot || t[90] !== ut ? (dt = (0, Z.jsx)(l, {
        label: ot,
        open: xe,
        children: ut
    }), t[88] = xe, t[89] = ot, t[90] = ut, t[91] = dt) : dt = t[91];
    let ft;
    t[92] !== x || t[93] !== S ? (ft = x ? (0, Z.jsx)(`a`, {
        href: x,
        target: `_blank`,
        rel: `noreferrer`,
        "aria-label": S,
        className: `hover:bg-token-border-light rounded p-1`,
        onClick: Me,
        children: (0, Z.jsx)(ee, {
            className: `icon-xs`
        })
    }) : null, t[92] = x, t[93] = S, t[94] = ft) : ft = t[94];
    let pt;
    t[95] !== n.diffFile.additionLength || t[96] !== n.diffFile.deletionLength ? (pt = (0, Z.jsx)(ae, {
        linesAdded: n.diffFile.additionLength,
        linesRemoved: n.diffFile.deletionLength
    }), t[95] = n.diffFile.additionLength, t[96] = n.diffFile.deletionLength, t[97] = pt) : pt = t[97];
    let mt;
    t[98] !== He || t[99] !== Ke || t[100] !== We || t[101] !== n.isBinary || t[102] !== Je || t[103] !== se ? (mt = !n.isBinary && se && (0, Z.jsx)(ye, {
        copyDiffToClipboard: He,
        copyPatchToClipboard: We,
        copyFileToClipboard: Je ? Ke : void 0
    }), t[98] = He, t[99] = Ke, t[100] = We, t[101] = n.isBinary, t[102] = Je, t[103] = se, t[104] = mt) : mt = t[104];
    let ht;
    t[105] !== pt || t[106] !== mt ? (ht = (0, Z.jsxs)(`div`, {
        className: `ms-auto flex items-center gap-1 ps-1`,
        children: [pt, mt]
    }), t[105] = pt, t[106] = mt, t[107] = ht) : ht = t[107];
    let gt;
    t[108] !== tt || t[109] !== rt || t[110] !== it || t[111] !== at || t[112] !== dt || t[113] !== ft || t[114] !== ht ? (gt = (0, Z.jsxs)(`div`, {
        className: tt,
        children: [rt, it, at, dt, ft, ht]
    }), t[108] = tt, t[109] = rt, t[110] = it, t[111] = at, t[112] = dt, t[113] = ft, t[114] = ht, t[115] = gt) : gt = t[115];
    let _t;
    t[116] !== Ze || t[117] !== $e || t[118] !== gt ? (_t = (0, Z.jsx)(`div`, {
        role: `button`,
        onClick: Ze,
        className: $e,
        children: gt
    }), t[116] = Ze, t[117] = $e, t[118] = gt, t[119] = _t) : _t = t[119];
    let $;
    t[120] !== n.diffFile || t[121] !== n.isBinary || t[122] !== M || t[123] !== T || t[124] !== Re || t[125] !== k || t[126] !== O || t[127] !== Ye || t[128] !== N || t[129] !== p || t[130] !== m || t[131] !== g || t[132] !== z || t[133] !== B || t[134] !== be || t[135] !== E || t[136] !== o ? ($ = z && (Ye || n.isBinary ? (0, Z.jsx)(`div`, {
        className: `text-token-text-secondary bg-token-bg-secondary flex h-full justify-center rounded-b-2xl py-4 text-sm font-medium`,
        children: n.isBinary ? (0, Z.jsx)(h, {
            id: `wham.diff.binaryFile`,
            defaultMessage: `Binary file not shown`
        }) : (0, Z.jsx)(h, {
            id: `wham.diff.noContent`,
            defaultMessage: `No content`
        })
    }) : be ? (0, Z.jsx)(ce, {
        className: u(`relative overflow-clip rounded-b-2xl transition-opacity duration-300`, `after:border-token-border-default after:pointer-events-none after:absolute after:inset-0 after:rounded-b-2xl after:border-s after:border-e after:border-b after:content-['']`),
        diffViewFontSize: 12,
        diffFile: n.diffFile,
        diffViewTheme: O ? `dark` : `light`,
        diffViewHighlight: !N,
        diffViewMode: o === `split` ? 3 : 4,
        diffViewWrap: !0,
        diffViewAddWidget: T,
        extendData: Re,
        renderExtendLine: e => {
            let {
                lineNumber: t,
                side: r,
                data: i
            } = e;
            return i.length ? (0, Z.jsx)(`div`, {
                className: `flex flex-col gap-2`,
                children: i.map((e, i) => {
                    if (e.kind === `readonly`) return E ? (0, Z.jsx)(_e, {
                        comment: e.comment
                    }, `readonly-${e.comment.position.path}-${e.comment.position.line}-${i}`) : null;
                    let a = e.comment,
                        o = !T;
                    return (0, Z.jsx)(he, {
                        initialComment: a,
                        onSubmit: o ? void 0 : e => g?.(e),
                        onDelete: o ? void 0 : () => m?.(a),
                        readOnly: o,
                        filePath: n.diffFile._newFileName,
                        side: r,
                        lineNumber: t
                    }, a.id)
                })
            }) : null
        },
        renderWidgetLine: e => {
            let {
                onClose: t,
                lineNumber: r,
                side: i
            } = e;
            return !T || !p ? null : (0, Z.jsx)(he, {
                onSubmit: p,
                onClose: t,
                filePath: n.diffFile._newFileName,
                side: i,
                lineNumber: r
            })
        }
    }) : (0, Z.jsxs)(`div`, {
        className: `text-token-text-secondary bg-token-bg-secondary flex flex-col items-center justify-center gap-3 rounded-b-2xl px-4 py-6 text-sm`,
        children: [(0, Z.jsx)(`span`, {
            className: `text-token-text-primary font-medium`,
            children: (0, Z.jsx)(h, {
                id: `wham.diff.largeDiffTitle`,
                defaultMessage: `Large diff`
            })
        }), (0, Z.jsx)(`span`, {
            children: (0, Z.jsx)(h, {
                id: `wham.diff.largeDiffLineCount`,
                defaultMessage: `{lineCount} lines`,
                values: {
                    lineCount: k.formatNumber(M)
                }
            })
        }), (0, Z.jsx)(a, {
            size: `small`,
            color: `secondary`,
            onClick: () => ve(B),
            children: (0, Z.jsx)(h, {
                id: `wham.diff.loadLargeDiff`,
                defaultMessage: `Load diff`
            })
        })]
    })), t[120] = n.diffFile, t[121] = n.isBinary, t[122] = M, t[123] = T, t[124] = Re, t[125] = k, t[126] = O, t[127] = Ye, t[128] = N, t[129] = p, t[130] = m, t[131] = g, t[132] = z, t[133] = B, t[134] = be, t[135] = E, t[136] = o, t[137] = $) : $ = t[137];
    let vt;
    return t[138] !== j || t[139] !== _t || t[140] !== $ ? (vt = (0, Z.jsxs)(`div`, {
        "data-diff-header": j,
        className: Xe,
        children: [_t, $]
    }), t[138] = j, t[139] = _t, t[140] = $, t[141] = vt) : vt = t[141], vt
}

function Me(e) {
    e.stopPropagation()
}

function Ne(e) {
    e.stopPropagation()
}
var Pe, X, Z, Fe, Ie = e((() => {
    Pe = v(), d(), C(), T(), w(), f(), n(), p(), o(), z(), N(), ve(), U(), D(), A(), E(), W(), k(), c(), X = t(_()), g(), Te(), Ee(), Y(), Z = m(), Fe = 300
}));
export {
    _e as a, F as c, me as d, W as i, M as l, Ie as n, ve as o, Se as r, P as s, je as t, N as u
};
//# sourceMappingURL=66c1b32b-homso3cb5jt41vuf.js.map
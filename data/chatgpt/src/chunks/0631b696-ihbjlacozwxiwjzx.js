import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ai as r,
    CN as i,
    C_ as a,
    Cnt as o,
    Drt as s,
    Ei as c,
    Ert as l,
    Fi as u,
    Fx as d,
    HN as f,
    Hx as p,
    Lx as m,
    Ont as h,
    Ox as g,
    Px as _,
    ST as v,
    Tx as y,
    UN as b,
    Vx as x,
    bQ as S,
    bx as C,
    dx as ee,
    hQ as w,
    jnt as T,
    kx as E,
    l7 as D,
    mnt as O,
    nx as k,
    pZ as A,
    rx as te,
    u7 as ne,
    vQ as j,
    wN as re,
    wT as M,
    w_ as ie,
    wx as ae
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    Bn as N,
    Ln as oe,
    Rn as se,
    Vn as P,
    wn as ce
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    B2t as le,
    Cv as F,
    LS as ue,
    RS as de,
    Sv as fe,
    Tv as pe,
    V2t as me,
    c5t as he,
    f5t as ge,
    l5t as _e,
    o5t as I,
    tBn as L,
    u5t as R,
    wv as ve
} from "./conversation-small-fh0oqifngkf5rvl1.js";
import {
    Ci as ye,
    DC as be,
    Dg as xe,
    EC as Se,
    FS as Ce,
    Fx as we,
    IS as Te,
    Ix as Ee,
    Jy as De,
    Ky as Oe,
    Og as ke,
    Si as Ae,
    Yy as je,
    bi as Me,
    ex as Ne,
    qy as Pe,
    tx as Fe,
    xi as Ie
} from "./30901919-cmi3nh547dwrqkxv.js";
import {
    At as Le,
    Dt as Re,
    kt as ze,
    wt as Be
} from "./82782bc9-ivetrmhdn140ze7c.js";
import {
    CC as Ve,
    DC as He,
    HC as Ue,
    NC as We,
    NS as Ge,
    QC as Ke,
    _C as qe,
    yC as Je,
    zC as Ye
} from "./8b34dbc2-peb5nzi8z3rrflnv.js";
import {
    c as Xe,
    o as Ze,
    s as Qe
} from "./31cec8d8-ejzahhq8v425zkie.js";
import {
    t as $e
} from "./4c0f1f8e-o4zbuwgknf8ay6gx.js";
import {
    t as z,
    y as et
} from "./2d39f94f-1ob1efk098s9ur4z.js";
import {
    n as tt,
    r as nt
} from "./781797c9-lbh7ig0wveh4plp8.js";
import {
    n as rt,
    t as it
} from "./2ac7f54f-2c9hd4wra91k4uh7.js";
import {
    n as at,
    t as ot
} from "./0379e822-jzslruhv2n3v5hd8.js";

function st({
    buttonText: e,
    triggerLabel: t,
    options: n,
    selectedOptionId: r,
    isOpen: i,
    onOpenChange: a,
    onSelect: o,
    preserveSelection: s,
    editorRef: c
}) {
    "use no forget";
    let l = te(),
        u = (0, B.useRef)(null),
        [d, f] = (0, B.useState)(null);
    (0, B.useEffect)(() => {
        let e = u.current;
        !e || typeof document > `u` || f(e.closest(`[aria-hidden="true"]`) != null)
    }, []);
    let p = (0, V.jsxs)(V.Fragment, {
        children: [(0, V.jsx)(`span`, {
            className: `text-sm font-medium`,
            children: e
        }), (0, V.jsx)(Se, {
            "aria-hidden": !0,
            className: `icon-xs text-current`
        })]
    });
    return d === !1 ? (0, V.jsx)(`div`, {
        ref: u,
        "data-toolbar-surface": `true`,
        className: `h-full`,
        children: (0, V.jsxs)(_e, {
            open: i,
            onOpenChange: e => {
                e && s(), a(e)
            },
            children: [(0, V.jsx)(R, {
                asChild: !0,
                children: (0, V.jsx)(tt.Button, {
                    type: `button`,
                    "aria-label": t,
                    "aria-haspopup": `menu`,
                    "aria-expanded": i,
                    className: D(`text-token-text-primary flex h-full items-center gap-1 rounded-lg px-2.5`, `dark:hover:bg-token-interactive-bg-secondary-hover hover:bg-black/5`, `data-[state=open]:bg-token-interactive-bg-secondary-selected`),
                    onMouseDown: e => e.preventDefault(),
                    onPointerDownCapture: s,
                    onKeyDownCapture: e => {
                        (e.key === ` ` || e.key === `Enter`) && s()
                    },
                    children: p
                })
            }), (0, V.jsx)(he, {
                ...l,
                children: (0, V.jsx)(I, {
                    align: `start`,
                    alignOffset: -8,
                    sideOffset: 8,
                    className: D(Qe.toolbar, `popover`, `bg-token-main-surface-primary w-fit rounded-2xl p-1.5`, Ze),
                    "data-toolbar-surface": `true`,
                    onOpenAutoFocus: e => e.preventDefault(),
                    onCloseAutoFocus: e => {
                        e.preventDefault(), c.current?.focus({
                            preventScroll: !0
                        })
                    },
                    children: (0, V.jsx)(`div`, {
                        className: `flex flex-col gap-0.5`,
                        role: `menu`,
                        children: n.map(e => {
                            let t = e.id === r;
                            return (0, V.jsx)(`button`, {
                                type: `button`,
                                role: `menuitemradio`,
                                "aria-checked": t,
                                "data-selected": t ? `true` : void 0,
                                className: D(`text-token-text-primary dark:hover:bg-token-main-surface-secondary rounded-[10px] py-1.5 ps-3 pe-1 text-start text-sm hover:bg-[#f5f5f5]`, t && `dark:bg-token-main-surface-secondary bg-[#f5f5f5] font-medium`),
                                onPointerDown: e => e.preventDefault(),
                                onClick: () => o(e.id),
                                children: (0, V.jsxs)(`span`, {
                                    className: `flex w-full items-center justify-between gap-8`,
                                    children: [(0, V.jsx)(`span`, {
                                        className: e.className,
                                        children: e.label
                                    }), (0, V.jsx)(`span`, {
                                        className: `text-token-text-tertiary`,
                                        children: (0, V.jsx)(le, {
                                            binding: e.shortcut
                                        })
                                    })]
                                })
                            }, e.id)
                        })
                    })
                })
            })]
        })
    }) : (0, V.jsx)(`div`, {
        ref: u,
        "data-toolbar-surface": `true`,
        className: `h-full`,
        children: (0, V.jsx)(tt.Button, {
            type: `button`,
            "aria-label": t,
            "aria-haspopup": `menu`,
            "aria-expanded": i,
            tabIndex: -1,
            "data-state": i ? `open` : `closed`,
            className: D(`text-token-text-primary flex h-full items-center gap-1 rounded-lg px-2.5`, `dark:hover:bg-token-interactive-bg-secondary-hover hover:bg-black/5`, i && `bg-token-interactive-bg-secondary-selected`),
            children: p
        })
    })
}
var B, V, ct = e((() => {
    Xe(), nt(), be(), k(), me(), ge(), ne(), B = n(P()), V = N()
}));

function lt(e) {
    "use forget";
    let t = (0, ut.c)(29),
        {
            onDismiss: n,
            editorView: r,
            toolbarContentRef: i,
            isToolbarOpen: a,
            dismissOnPointerDown: s,
            dismissOnEscapeKeyDown: c,
            consumeEscapeKeyDown: l,
            blockOutsidePointerDown: u,
            onEscapeKeyDown: d
        } = e,
        f = s === void 0 || s,
        p = c === void 0 || c,
        m = l !== void 0 && l,
        h = u !== void 0 && u,
        g;
    t[0] === i ? g = t[1] : (g = e => {
        if (!(e instanceof Node)) return !1;
        let t = i.current;
        return t && t.contains(e) ? !0 : e instanceof Element && e.closest(`[data-toolbar-surface="true"]`) != null
    }, t[0] = i, t[1] = g);
    let _ = g,
        v;
    t[2] === r?.dom ? v = t[3] : (v = e => e instanceof Node ? r?.dom.contains(e) ?? !1 : !1, t[2] = r?.dom, t[3] = v);
    let y = v,
        b;
    t[4] !== m || t[5] !== p || t[6] !== r?.dom || t[7] !== a || t[8] !== n || t[9] !== d ? (b = e => {
        if (e.key !== `Escape` || !a || (m && (e.preventDefault(), e.stopPropagation()), d?.(), !p)) return;
        n();
        let t = r?.dom;
        t && t.focus({
            preventScroll: !0
        })
    }, t[4] = m, t[5] = p, t[6] = r?.dom, t[7] = a, t[8] = n, t[9] = d, t[10] = b) : b = t[10];
    let x = b,
        S;
    t[11] !== h || t[12] !== y || t[13] !== _ || t[14] !== a || t[15] !== n ? (S = e => {
        let t = e.button === 0 && e.ctrlKey && T() && !o();
        if (!(_(e.target) || e.shiftKey && y(e.target) || !a || e.button !== 0 || t)) {
            if (h) {
                e.preventDefault(), e.stopPropagation();
                return
            }
            n(e.target)
        }
    }, t[11] = h, t[12] = y, t[13] = _, t[14] = a, t[15] = n, t[16] = S) : S = t[16];
    let C = S,
        ee;
    t[17] !== f || t[18] !== r?.dom?.ownerDocument || t[19] !== x || t[20] !== C ? (ee = () => {
        let e = r?.dom?.ownerDocument ?? (typeof document < `u` ? document : null);
        if (e) return e.addEventListener(`keydown`, x), f && e.addEventListener(`pointerdown`, C, {
            capture: !0
        }), () => {
            e.removeEventListener(`keydown`, x), f && e.removeEventListener(`pointerdown`, C, !0)
        }
    }, t[17] = f, t[18] = r?.dom?.ownerDocument, t[19] = x, t[20] = C, t[21] = ee) : ee = t[21];
    let w;
    t[22] !== f || t[23] !== r || t[24] !== x || t[25] !== C ? (w = [f, r, x, C], t[22] = f, t[23] = r, t[24] = x, t[25] = C, t[26] = w) : w = t[26], (0, dt.useEffect)(ee, w);
    let E;
    return t[27] === x ? E = t[28] : (E = {
        handleKeyDown: x
    }, t[27] = x, t[28] = E), E
}
var ut, dt, ft = e((() => {
    ut = ce(), O(), dt = n(P())
}));

function pt(e) {
    return !!wt.test(e)
}

function H(e) {
    return mt(e, {
        startBuffer: () => [],
        pushBodyLine: (e, t) => {
            e.push(t)
        },
        closeBuffer: (e, t, n) => {
            n.push(...e)
        },
        flushDanglingBuffer: (e, t) => {
            t.push(...e)
        }
    })
}

function mt(e, t) {
    let n = e.split(`
`),
        r = [],
        i = [],
        a = null;
    for (let [e, o] of n.entries()) {
        if (a) {
            if (Et.test(o)) {
                t.closeBuffer(a, o, r), a = null;
                continue
            }
            t.pushBodyLine(a, o);
            continue
        }
        if (i.length > 0) {
            r.push(o);
            let t = w(o, {
                    lines: n,
                    index: e
                }),
                a = i.at(-1);
            t && a && ht(t, a) && i.pop();
            continue
        }
        let s = w(o, {
            lines: n,
            index: e
        });
        if (/^(?: {4,}| {0,3}\t)/.test(o) && s == null) {
            r.push(o);
            continue
        }
        if (Tt.test(o)) {
            a = t.startBuffer(o);
            continue
        }
        if (!s) {
            r.push(o);
            continue
        }
        i.push({
            marker: s.marker,
            length: s.fence.length
        }), r.push(o)
    }
    return a && t.flushDanglingBuffer(a, r), r.join(`
`)
}

function ht(e, t) {
    return e.info.trim().length === 0 && e.marker === t.marker && e.fence.length >= t.length
}
var gt, _t, vt, yt, bt, xt, St, Ct, wt, Tt, Et, Dt = e((() => {
    m(), A(), S(), gt = [d.Mod, `k`], _t = [d.Mod, d.Alt, `0`], vt = [d.Mod, d.Alt, `1`], yt = [d.Mod, d.Alt, `2`], bt = [d.Mod, d.Alt, `3`], xt = [d.Mod, d.Alt, `4`], St = [d.Mod, d.Alt, `5`], Ct = [d.Mod, d.Alt, `6`], new RegExp(String.raw`^\s*:::${j}\{[^}]*\}[\s\S]*?:::`, `m`), wt = new RegExp(String.raw`^\s*:::${j}`, `m`), Tt = new RegExp(String.raw`^\s*:::${j}(?:\s|\{|$)`), Et = /^\s*:::\s*$/, new RegExp(String.raw`^\s*:::${j}\s*\{\s*\}\s*$`)
}));

function Ot(e) {
    "use forget";
    let t = (0, U.c)(37),
        {
            value: n,
            onChange: r,
            placeholder: i,
            onSubmit: a,
            onCancel: o,
            isLoading: s,
            submitAriaLabel: c,
            cancelAriaLabel: l,
            name: u,
            autoFocus: d,
            disabled: f,
            selectAllOnFocus: p,
            inputRef: m,
            inputClassName: h,
            onKeyDownCapture: g,
            isSubmitDisabled: _,
            submitIcon: v
        } = e,
        y = p !== void 0 && p,
        b = v === void 0 ? ke : v,
        x;
    t[0] !== s || t[1] !== _ || t[2] !== n ? (x = !s && (_ ?? n.trim() === ``), t[0] = s, t[1] = _, t[2] = n, t[3] = x) : x = t[3];
    let S = x,
        C;
    t[4] === r ? C = t[5] : (C = e => r(e.target.value), t[4] = r, t[5] = C);
    let w;
    t[6] !== s || t[7] !== o || t[8] !== a ? (w = () => {
        if (s) {
            o();
            return
        }
        a()
    }, t[6] = s, t[7] = o, t[8] = a, t[9] = w) : w = t[9];
    let T;
    t[10] === h ? T = t[11] : (T = D(`mx-0! min-w-[300px]! ps-2.5! pe-9!`, h), t[10] = h, t[11] = T);
    let E = f ?? s,
        O;
    t[12] === g ? O = t[13] : (O = e => {
        g?.(e)
    }, t[12] = g, t[13] = O);
    let k;
    t[14] !== d || t[15] !== m || t[16] !== u || t[17] !== i || t[18] !== y || t[19] !== C || t[20] !== w || t[21] !== T || t[22] !== E || t[23] !== O || t[24] !== n ? (k = (0, W.jsx)(ee, {
        ref: m,
        value: n,
        onChange: C,
        placeholder: i,
        onSubmit: w,
        border: !1,
        className: T,
        name: u,
        autoFocus: d,
        disabled: E,
        selectAllOnFocus: y,
        onKeyDownCapture: O
    }), t[14] = d, t[15] = m, t[16] = u, t[17] = i, t[18] = y, t[19] = C, t[20] = w, t[21] = T, t[22] = E, t[23] = O, t[24] = n, t[25] = k) : k = t[25];
    let A;
    t[26] !== b || t[27] !== l || t[28] !== s || t[29] !== o || t[30] !== a || t[31] !== S || t[32] !== c ? (A = (0, W.jsx)(`div`, {
        className: `absolute end-1.5 top-1/2 flex -translate-y-1/2 items-center justify-center`,
        children: s ? (0, W.jsx)(it, {
            ariaLabel: l,
            size: 20,
            onClick: o
        }) : (0, W.jsx)(`button`, {
            className: D(`icon`, `composer-submit-btn composer-submit-button-color`),
            onClick: a,
            disabled: S,
            "aria-label": c,
            children: (0, W.jsx)(b, {
                className: `icon-xs`
            })
        })
    }), t[26] = b, t[27] = l, t[28] = s, t[29] = o, t[30] = a, t[31] = S, t[32] = c, t[33] = A) : A = t[33];
    let te;
    return t[34] !== A || t[35] !== k ? (te = (0, W.jsxs)(`div`, {
        className: `relative`,
        children: [k, A]
    }), t[34] = A, t[35] = k, t[36] = te) : te = t[36], te
}
var U, W, G = e((() => {
        U = ce(), rt(), xe(), C(), ne(), W = N()
    })),
    kt = t({
        RichTextFormatToolbar: () => Qt
    });

function At(e) {
    let {
        selection: t
    } = e.state;
    return t instanceof Be && t.node.type.name === `writing_block_image` && et.get(e.state) != null
}

function jt(e) {
    return {
        top: e.top,
        left: e.left,
        width: e.width,
        height: e.height
    }
}

function Mt(e, t) {
    let n = Math.max(e.left, t.left),
        r = Math.max(e.top, t.top),
        i = Math.min(e.left + e.width, t.left + t.width),
        a = Math.min(e.top + e.height, t.top + t.height);
    return {
        top: r,
        left: n,
        width: Math.max(i - n, 0),
        height: Math.max(a - r, 0)
    }
}

function K(e) {
    let t = window.getComputedStyle(e);
    return [t.overflow, t.overflowX, t.overflowY].some(e => [`auto`, `scroll`, `hidden`, `clip`].includes(e))
}

function Nt(e) {
    let t = jt(e.getBoundingClientRect());
    for (let n = e.parentElement; n != null && n !== document.body; n = n.parentElement) K(n) && (t = Mt(t, jt(n.getBoundingClientRect())));
    return t
}

function q(e, t, n) {
    let {
        state: r
    } = e;
    if (t >= n) return null;
    let i = r.schema.marks[L.proseMirrorMarkName()];
    if (i == null) return null;
    let a = null,
        o = !1,
        s = !1,
        c = !1;
    if (r.doc.nodesBetween(t, n, e => {
            if (!e.isText || (e.text?.length ?? 0) === 0) return !0;
            let t = e.marks.find(e => e.type === i),
                n = t?.attrs.href;
            return typeof n != `string` || n.length === 0 ? (c = !0, !1) : (s = !0, o ||= t?.attrs.isAutolink === !0, a == null ? (a = n, !0) : a === n ? !0 : (c = !0, !1))
        }), !s || c || a == null) return null;
    let l = r.doc.textBetween(t, n, `
`, `
`);
    return {
        href: a,
        isAutolink: o || l === a
    }
}

function Pt(e) {
    let {
        state: t
    } = e, {
        selection: n
    } = t;
    if (!n.empty) return null;
    let r = t.schema.marks[L.proseMirrorMarkName()];
    if (r == null) return null;
    let i = n.from,
        a = n.from;
    for (; i > 0 && t.doc.rangeHasMark(i - 1, i, r);) --i;
    for (; a < t.doc.content.size && t.doc.rangeHasMark(a, a + 1, r);) a += 1;
    if (i >= a) return null;
    let o = q(e, i, a);
    return o == null ? null : {
        ...o,
        from: i,
        to: a
    }
}

function Ft(e) {
    let {
        state: t
    } = e, {
        selection: n
    } = t;
    if (n.empty) return null;
    let r = t.schema.marks[L.proseMirrorMarkName()];
    if (r == null) return null;
    let i = q(e, n.from, n.to);
    if (i == null) return null;
    let a = n.from,
        o = n.to;
    for (; a > 0 && t.doc.rangeHasMark(a - 1, a, r);) --a;
    for (; o < t.doc.content.size && t.doc.rangeHasMark(o, o + 1, r);) o += 1;
    let s = q(e, a, o);
    return s == null || s.href !== i.href || s.isAutolink !== i.isAutolink ? {
        ...i,
        from: n.from,
        to: n.to
    } : {
        ...s,
        from: a,
        to: o
    }
}

function It(e, t) {
    if (t == null || !Lt(t) || t.rangeCount === 0) return null;
    let n = t.anchorNode;
    if (n == null || !e.dom.contains(n)) return null;
    let r = (n instanceof Element ? n : n.parentElement)?.closest(`a[href]`);
    if (r == null || !e.dom.contains(r) || (r.getAttribute(`href`) ?? ``).length === 0) return null;
    let i = e.state.selection.from,
        a = e.state.selection.to;
    try {
        i = e.posAtDOM(r, 0), a = e.posAtDOM(r, r.childNodes.length)
    } catch {}
    if (i > a && ([i, a] = [a, i]), i === a) {
        let {
            state: r
        } = e, o = r.schema.marks[L.proseMirrorMarkName()];
        if (o == null) return null;
        let s = null;
        try {
            s = e.posAtDOM(n, t.anchorOffset)
        } catch {}
        if (s != null) {
            let e = Math.min(Math.max(0, s), r.doc.content.size),
                t = e;
            for (; e > 0 && r.doc.rangeHasMark(e - 1, e, o);) --e;
            for (; t < r.doc.content.size && r.doc.rangeHasMark(t, t + 1, o);) t += 1;
            i = e, a = t
        }
    }
    if (i === a) return null;
    let o = q(e, i, a);
    return o == null ? null : {
        ...o,
        from: i,
        to: a
    }
}

function Lt(e) {
    return e.anchorNode != null && e.anchorNode === e.focusNode && e.anchorOffset === e.focusOffset
}

function Rt(e, t) {
    let n = Pt(e);
    if (n != null) return n;
    let {
        state: r
    } = e;
    return r.selection.empty ? It(e, t) : null
}

function zt(e) {
    let {
        state: t
    } = e, {
        from: n,
        to: r,
        empty: i
    } = t.selection;
    return i ? null : q(e, n, r)?.href ?? null
}

function Bt(e) {
    let {
        state: t
    } = e, {
        from: n,
        to: r,
        empty: i
    } = t.selection;
    if (i) return !1;
    let a = t.schema.marks[L.proseMirrorMarkName()];
    if (a == null) return !1;
    let o = !1;
    return t.doc.nodesBetween(n, r, e => !e.isText || (e.text?.length ?? 0) === 0 ? !0 : e.marks.some(e => e.type === a) ? (o = !0, !1) : !0), o
}

function Vt(e) {
    let t = /^([^/:?#]+):(\d+)(?:[/?#].*)?$/.exec(e);
    if (t == null) return !1;
    let n = t[1].toLowerCase();
    return n === `localhost` || n.includes(`.`) || /^\d{1,3}(?:\.\d{1,3}){3}$/.test(n) || /^\[[0-9a-f:]+\]$/i.test(n)
}

function Ht(e) {
    let t = e.trim();
    if (t.length === 0) return null;
    let n = /^([a-z][a-z\d+.-]*):/i.exec(t)?.[1]?.toLowerCase();
    if (n != null && n !== `http` && n !== `https` && !Vt(t)) return null;
    let r = Z.test(t) ? t : `https://${t}`;
    try {
        let e = new URL(r);
        if (e.protocol !== `http:` && e.protocol !== `https:`) return null
    } catch {
        return null
    }
    return r
}

function Ut(e) {
    return e.length <= qt ? e : `${e.slice(0,qt)}...`
}
var J, Wt, Y, X, Gt, Kt, qt, Z, Jt, Yt, Xt, Zt, Q, Qt, $t = e((() => {
    ye(), je(), Pe(), Me(), Ne(), Ce(), we(), p(), k(), r(), pe(), y(), m(), O(), ct(), ft(), Le(), J = n(P()), se(), Dt(), Ge(), G(), z(), l(), i(), f(), ue(), ot(), M(), ne(), ie(), Wt = n($e()), Y = N(), X = .5, Gt = `writing-block-open-link-mode`, Kt = 2e3, qt = 34, Z = /^https?:\/\//i, Jt = ``, Yt = (e, t) => Math.abs(e.left - t.left) < X && Math.abs(e.top - t.top) < X && Math.abs(e.width - t.width) < X && Math.abs(e.height - t.height) < X, Xt = e => typeof e.props.editable == `function` ? e.props.editable(e.state) : e.props.editable !== !1, Zt = (e, t) => {
        if (!e) return null;
        let {
            selectionRect: n,
            editorRect: r
        } = e, i = n.left + n.width / 2 - t.width / 2, a = Math.min(Math.max(i, r.left), Math.max(r.left + r.width - t.width, 0)), o = Math.max(n.top, r.top), s = Math.max(n.top + n.height - o, X);
        return {
            left: a,
            top: o - t.height - 8,
            height: s + t.height * 2 + 16
        }
    }, Q = oe({
        bold: {
            id: `writingBlocks.formatToolbar.bold`,
            defaultMessage: `Bold`
        },
        italic: {
            id: `writingBlocks.formatToolbar.italic`,
            defaultMessage: `Italic`
        },
        link: {
            id: `writingBlocks.formatToolbar.link`,
            defaultMessage: `Link`
        },
        linkInputPlaceholder: {
            id: `writingBlocks.formatToolbar.linkInputPlaceholder`,
            defaultMessage: `Type or paste a link`
        },
        linkApplyAriaLabel: {
            id: `writingBlocks.formatToolbar.linkApplyAriaLabel`,
            defaultMessage: `Apply link`
        },
        linkCancelAriaLabel: {
            id: `writingBlocks.formatToolbar.linkCancelAriaLabel`,
            defaultMessage: `Cancel link entry`
        },
        textStylesTrigger: {
            id: `writingBlocks.formatToolbar.textStylesTrigger`,
            defaultMessage: `Text styles`
        },
        text: {
            id: `writingBlocks.formatToolbar.text`,
            defaultMessage: `Text`
        },
        heading1: {
            id: `writingBlocks.formatToolbar.heading1`,
            defaultMessage: `Heading 1`
        },
        heading2: {
            id: `writingBlocks.formatToolbar.heading2`,
            defaultMessage: `Heading 2`
        },
        heading3: {
            id: `writingBlocks.formatToolbar.heading3`,
            defaultMessage: `Heading 3`
        },
        numberedList: {
            id: `writingBlocks.formatToolbar.numberedList`,
            defaultMessage: `Numbered list`
        },
        bulletedList: {
            id: `writingBlocks.formatToolbar.bulletedList`,
            defaultMessage: `Bulleted list`
        },
        checklist: {
            id: `writingBlocks.formatToolbar.checklist`,
            defaultMessage: `Checklist`
        },
        openLink: {
            id: `writingBlocks.formatToolbar.openLink`,
            defaultMessage: `Open`
        },
        copyLink: {
            id: `writingBlocks.formatToolbar.copyLink`,
            defaultMessage: `Copy`
        },
        clearLink: {
            id: `writingBlocks.formatToolbar.clearLink`,
            defaultMessage: `Clear`
        },
        editLink: {
            id: `writingBlocks.formatToolbar.editLink`,
            defaultMessage: `Edit`
        }
    }), Qt = ({
        editorView: e,
        intl: t,
        conversation: n,
        isLinkSupportEnabled: r,
        selectionPin: i,
        magicEdit: o,
        suppressToolbar: l = !1,
        toolbarContentRef: d,
        onToolbarOpenChange: f,
        fullscreenMode: p,
        isChecklistSupportEnabled: m = !1,
        disableStickyPlacement: y = !1,
        trailingSectionActions: S
    }) => {
        "use no forget";
        let C = h(),
            ee = te(),
            [w, T] = (0, J.useState)(() => !Xt(e)),
            O = (0, J.useRef)(null),
            k = d ?? O,
            [A, ne] = (0, J.useState)(!1),
            [j, M] = (0, J.useState)(null),
            [ie, N] = (0, J.useState)(!1),
            [oe, se] = (0, J.useState)(!1),
            [P, ce] = (0, J.useState)(!1),
            [le, ue] = (0, J.useState)(!1),
            [pe, me] = (0, J.useState)(Jt),
            he = (0, J.useRef)(null),
            ge = (0, J.useRef)(!1),
            _e = (0, J.useRef)(!1),
            I = (0, J.useRef)(null),
            R = (0, J.useCallback)(e => {
                _e.current = e, ue(e)
            }, []),
            ye = de();
        (0, J.useEffect)(() => {
            let t = () => {
                T(!Xt(e))
            };
            if (t(), typeof MutationObserver > `u`) return;
            let n = e.dom;
            if (n == null) return;
            let r = new MutationObserver(e => {
                e.some(e => e.type === `attributes` && e.attributeName === `contenteditable`) && t()
            });
            return r.observe(n, {
                attributes: !0,
                attributeFilter: [`contenteditable`]
            }), () => {
                r.disconnect()
            }
        }, [e]), (0, J.useEffect)(() => {
            f?.(A)
        }, [A, f]), (0, J.useEffect)(() => {
            N(!1)
        }, [j?.href]);
        let [be, xe] = (0, J.useState)(!1), [Se, Ce] = (0, J.useState)(!1), [we, ke] = (0, J.useState)(!1), je = o?.show === !0, Me = o?.shouldDisable === !0, Ne = o?.isLoading === !0, Pe = o?.onOpenRequested, Le = o?.shortcutBinding, Be = Me || we, [Ge, Xe] = (0, J.useState)(!1), Ze = (0, J.useRef)(null), Qe = (0, J.useCallback)(() => e.dom, [e]), $e = (0, J.useRef)(null), z = (0, J.useRef)(null), et = (0, J.useRef)(null), tt = (0, J.useRef)(null), [nt, rt] = (0, J.useState)(0), it = (0, J.useRef)(!1), ot = (0, J.useRef)(!1), B = (0, J.useRef)(null), [V, ct] = (0, J.useState)(!1), [ut, dt] = (0, J.useState)(!1), [ft, pt] = (0, J.useState)(`paragraph`), H = (0, J.useCallback)(e => {
            e ?? (z.current = null);
            let t = $e.current;
            t == null && e == null || t != null && e != null && Yt(t.selectionRect, e.selectionRect) && Yt(t.editorRect, e.editorRect) || ($e.current = e, rt(e => e + 1))
        }, []), mt = (0, J.useCallback)(() => {
            let t = e.state,
                {
                    from: n,
                    to: r,
                    empty: i,
                    $from: a
                } = t.selection,
                o = t.schema.marks[We.proseMirrorMarkName()],
                s = t.schema.marks[Ve.proseMirrorMarkName()];
            if (i) {
                let e = t.storedMarks ?? a.marks(),
                    n = !!o && !!e?.find(e => e.type === o),
                    r = !!s && !!e?.find(e => e.type === s);
                ct(n), dt(r)
            } else {
                let e = t.doc.textBetween(n, r, `
`, `
`),
                    i = e.match(/^\s*/)?.[0].length ?? 0,
                    a = e.match(/\s*$/)?.[0].length ?? 0,
                    c = n + i,
                    l = r - a;
                if (c >= l) ct(!1), dt(!1);
                else {
                    let e = !1,
                        n = !0,
                        r = !0;
                    t.doc.nodesBetween(c, l, t => {
                        if (t.isText) {
                            if (!(t.text ?? ``).trim()) return !0;
                            e = !0;
                            let i = !!o && t.marks.some(e => e.type === o),
                                a = !!s && t.marks.some(e => e.type === s);
                            if (i || (n = !1), a || (r = !1), !n && !r) return !1
                        }
                        return !0
                    }), ct(e && n), dt(e && r)
                }
            }
            let c = `paragraph`,
                l = t.schema.nodes[He.proseMirrorNodeName()],
                u = t.schema.nodes[Je.proseMirrorNodeName()],
                d = t.schema.nodes[qe.proseMirrorNodeName()],
                f = t.schema.nodes.task_list_item;
            for (let e = a.depth; e >= 0; e--) {
                let t = a.node(e);
                if (m && t.type === f) {
                    c = `checklist`;
                    break
                }
                if (t.type === u) {
                    c = `orderedList`;
                    break
                }
                if (t.type === d) {
                    c = `unorderedList`;
                    break
                }
                if (t.type === l) {
                    let e = Number(t.attrs.level);
                    c = e === 1 ? `heading1` : e === 2 ? `heading2` : `heading3`;
                    break
                }
            }
            pt(c)
        }, [e, m]), ht = re(() => {
            typeof window < `u` && et.current != null && (window.cancelAnimationFrame(et.current), et.current = null)
        }), [gt, wt] = (0, J.useState)(!0), Tt = (0, J.useRef)(!0), [Et, Dt] = (0, J.useState)(!l), U = (0, J.useCallback)(e => {
            Tt.current !== e && (Tt.current = e, wt(e))
        }, []);
        b(() => {
            l && Dt(!1)
        }, [l]);
        let W = (0, J.useCallback)(() => {
                let t = Qe(),
                    n = document.getSelection();
                if (t == null || At(e) || n == null || n.rangeCount === 0) return !0;
                let {
                    anchorNode: i,
                    focusNode: a
                } = n;
                return i != null && t.contains(i) || a != null && t.contains(a) ? Lt(n) ? !r || Rt(e, n) == null : !1 : !0
            }, [e, Qe, r]),
            G = re(t => {
                typeof window > `u` || t == null || t.aborted || (ht(), et.current = window.requestAnimationFrame(() => {
                    if (et.current = null, t.aborted || l || it.current) return;
                    Dt(!0), R(!1);
                    let n = e.dom;
                    if (!n || At(e)) {
                        U(!0), M(null), H(null);
                        return
                    }
                    if (P) return;
                    o != null && ke(o.isSelectionInside(e));
                    let i = window.getSelection(),
                        a = i != null && Lt(i);
                    if (i == null || i.rangeCount === 0 || a) {
                        let t = a && i.anchorNode != null && n.contains(i.anchorNode),
                            o = document.activeElement != null && n.contains(document.activeElement),
                            s = r && (t || o) ? Rt(e, t ? i : null) : null;
                        if (U(s == null), M(s), s == null) {
                            H(null);
                            return
                        }
                        mt();
                        let c = e.state.selection.from,
                            l = e.coordsAtPos(c),
                            u = Nt(n);
                        H({
                            selectionRect: {
                                top: l.top,
                                left: l.left,
                                width: 0,
                                height: Math.max(l.bottom - l.top, 1)
                            },
                            editorRect: u
                        });
                        return
                    }
                    let s = i.getRangeAt(0);
                    if (!s || !n.contains(s.commonAncestorContainer)) {
                        U(!0), M(null), mt(), H(null);
                        return
                    }
                    let c = r ? Ft(e) : null;
                    U(!1), M(c), mt();
                    let u = e.state.selection,
                        d = !u.empty && z.current?.from === u.from && z.current?.to === u.to ? z.current : null;
                    if (z.current != null && d == null && (z.current = null), d != null) {
                        H(d.geometry);
                        return
                    }
                    let f = s.getBoundingClientRect();
                    if (!f || f.width === 0 && f.height === 0) {
                        H(null);
                        return
                    }
                    let p = Nt(n),
                        {
                            focusNode: m,
                            focusOffset: h
                        } = i;
                    if (m != null) try {
                        let e = document.createRange();
                        e.setStart(m, h), e.setEnd(m, h)
                    } catch {}
                    H({
                        selectionRect: {
                            top: f.top,
                            left: f.left,
                            width: f.width,
                            height: f.height
                        },
                        editorRect: p
                    })
                }))
            });
        (0, J.useEffect)(() => {
            if (typeof document > `u` || typeof window > `u` || l) return;
            let e = new AbortController;
            tt.current = e.signal;
            let t = () => {
                    U(W()), G(e.signal)
                },
                n = () => {
                    z.current = null, G(e.signal)
                };
            return document.addEventListener(`selectionchange`, t, {
                signal: e.signal
            }), window.addEventListener(`resize`, n, {
                signal: e.signal
            }), window.addEventListener(`scroll`, n, {
                capture: !0,
                signal: e.signal
            }), G(e.signal), () => {
                tt.current = null, e.abort(), ht()
            }
        }, [ht, e, W, G, U, l]), (0, J.useEffect)(() => {
            if (typeof window > `u` || C || !r) {
                se(!1);
                return
            }
            let e = e => {
                    let t = ae(e) === `Meta`;
                    if (e.type === `keydown`) {
                        se(e.metaKey || t);
                        return
                    }
                    if (t) {
                        se(!1);
                        return
                    }
                    se(e.metaKey)
                },
                t = () => {
                    se(!1)
                };
            return window.addEventListener(`keydown`, e, !0), window.addEventListener(`keyup`, e, !0), window.addEventListener(`blur`, t), () => {
                window.removeEventListener(`keydown`, e, !0), window.removeEventListener(`keyup`, e, !0), window.removeEventListener(`blur`, t)
            }
        }, [C, r]), (0, J.useEffect)(() => {
            let t = e.dom;
            if (t != null) {
                if (!r || C || !oe && !w) {
                    t.classList.remove(Gt);
                    return
                }
                return t.classList.add(Gt), () => {
                    t.classList.remove(Gt)
                }
            }
        }, [e, w, C, oe, r]);
        let kt = (0, J.useCallback)(() => {
                let {
                    state: t,
                    dispatch: n
                } = e, {
                    selection: r
                } = t;
                if (r.empty) return;
                let i = Math.min(r.to, t.doc.content.size),
                    a = t.doc.resolve(i),
                    o = Re.near(a, -1);
                o.eq(r) || n(t.tr.setSelection(o))
            }, [e]),
            jt = (0, J.useCallback)(() => {
                let t = (e.dom?.ownerDocument ?? (typeof document < `u` ? document : null))?.getSelection?.();
                t && t.removeAllRanges()
            }, [e]),
            Mt = (0, J.useCallback)(() => {
                kt(), jt()
            }, [kt, jt]),
            K = (0, J.useCallback)(t => {
                t ? i.pin(e) : i.unpin(e), Xe(t)
            }, [e, i]),
            q = (0, J.useCallback)(() => {
                ce(!1), R(!1), me(Jt), ge.current = !1
            }, [R]),
            Vt = (0, J.useCallback)(e => {
                if (e) {
                    if (Pe != null) {
                        Pe();
                        return
                    }
                    K(!0), xe(!0)
                } else K(!1), xe(!1)
            }, [Pe, K]),
            X = (0, J.useCallback)(() => {
                Ne || (Vt(!1), q(), I.current = null, Mt())
            }, [Mt, Ne, q, Vt]),
            {
                handleKeyDown: qt
            } = lt({
                editorView: e,
                toolbarContentRef: k,
                isToolbarOpen: A,
                onDismiss: X,
                dismissOnPointerDown: !C
            }),
            Z = (0, J.useCallback)((t, n) => {
                let r = e.dom;
                if (!r) return;
                let i = n?.maintainToolbarPosition === !0,
                    a = e.state.selection;
                i && !a.empty && $e.current != null ? z.current = {
                    from: a.from,
                    to: a.to,
                    geometry: $e.current
                } : i || (z.current = null), it.current = !0, ot.current = !i, typeof window < `u` && B.current && (window.clearTimeout(B.current), B.current = null), r.focus({
                    preventScroll: !0
                });
                try {
                    t(), mt()
                } finally {
                    typeof window < `u` ? B.current = window.setTimeout(() => {
                        it.current = !1, ot.current = !1, B.current = null, i || G(tt.current)
                    }, 0) : (it.current = !1, ot.current = !1)
                }
            }, [e, mt, G]),
            Qt = (0, J.useCallback)(t => {
                Z(() => {
                    let {
                        state: n,
                        dispatch: r
                    } = e, i = n.schema.marks[t];
                    i && Ke(n, r, i)
                }, {
                    maintainToolbarPosition: !0
                })
            }, [e, Z]),
            $t = (0, J.useCallback)(() => {
                let t = I.current;
                if (t == null) return;
                let {
                    state: n,
                    dispatch: r
                } = e, i = Math.min(Math.max(0, t.from), n.doc.content.size), a = Math.min(Math.max(i, t.to), n.doc.content.size);
                if (i === a) return;
                let o = ze.create(n.doc, i, a);
                n.selection.eq(o) || r(n.tr.setSelection(o))
            }, [e]),
            en = (0, J.useCallback)(() => {
                K(!1), Z(() => {
                    $t()
                }, {
                    maintainToolbarPosition: !0
                }), q(), I.current = null
            }, [$t, Z, K, q]),
            tn = (0, J.useCallback)((t, n) => {
                let {
                    state: r
                } = e, i = Math.min(Math.max(0, t.from), r.doc.content.size), a = Math.min(Math.max(i, t.to), r.doc.content.size);
                i !== a && r.doc.textBetween(i, a, `
`, `
`).trim().length !== 0 && (I.current = {
                    from: i,
                    to: a
                }, ge.current = !0, R(!0), me(n ?? Jt), N(!1), ce(!0), Z(() => {
                    let {
                        state: t,
                        dispatch: n
                    } = e, r = Math.min(Math.max(0, i), t.doc.content.size), o = Math.min(Math.max(r, a), t.doc.content.size);
                    if (r === o) return;
                    let s = ze.create(t.doc, r, o);
                    t.selection.eq(s) || n(t.tr.setSelection(s))
                }, {
                    maintainToolbarPosition: !0
                }), K(!0))
            }, [e, Z, R, K]),
            nn = (0, J.useCallback)(() => {
                let {
                    state: t
                } = e, {
                    selection: n
                } = t;
                if (n.empty) return;
                let r = Ft(e),
                    i = r?.href ?? zt(e),
                    a = r?.isAutolink === !0 ? {
                        from: r.from,
                        to: r.to
                    } : {
                        from: n.from,
                        to: n.to
                    };
                tn(a, i)
            }, [e, tn]),
            rn = (0, J.useCallback)(() => {
                let t = Ht(pe);
                if (t == null) return;
                let n = null;
                Z(() => {
                    let {
                        state: r,
                        dispatch: i
                    } = e, a = r.schema.marks[L.proseMirrorMarkName()];
                    if (a == null) return;
                    let o = I.current,
                        s = Math.min(Math.max(0, o?.from ?? r.selection.from), r.doc.content.size),
                        c = Math.min(Math.max(s, o?.to ?? r.selection.to), r.doc.content.size);
                    if (s === c) return;
                    let l = r.doc.textBetween(s, c, `
`, `
`);
                    if (l.trim().length === 0) return;
                    let u = l === t,
                        d = r.tr,
                        f = c;
                    d = d.removeMark(s, f, a).addMark(s, f, a.create({
                        href: t,
                        disabled: !1,
                        isAutolink: u
                    }));
                    let p = Math.min(f, d.doc.content.size);
                    d = d.setSelection(Re.near(d.doc.resolve(p), -1)), i(d.scrollIntoView()), n = {
                        href: t,
                        isAutolink: u,
                        from: s,
                        to: f
                    }
                }, {
                    maintainToolbarPosition: !1
                }), K(!1), q(), I.current = null, M(n)
            }, [e, pe, Z, K, q]);
        (0, J.useEffect)(() => {
            if (!P || l || typeof window > `u`) return;
            ge.current = !1;
            let e = window.requestAnimationFrame(() => {
                he.current?.focus()
            });
            return () => {
                window.cancelAnimationFrame(e)
            }
        }, [P, l]), (0, J.useEffect)(() => {
            r || (M(null), N(!1), P && (q(), I.current = null, be || K(!1)))
        }, [P, r, be, q, K]), (0, J.useEffect)(() => () => {
            typeof window < `u` && B.current != null && (window.clearTimeout(B.current), B.current = null), it.current = !1, ot.current = !1
        }, []), (0, J.useEffect)(() => {
            if (!je || Le == null) return;
            let t = e.dom;
            Ce(e.hasFocus());
            let n = () => {
                    Ce(!0)
                },
                r = () => {
                    if (typeof window > `u`) {
                        Ce(e.hasFocus());
                        return
                    }
                    window.requestAnimationFrame(() => {
                        Ce(e.hasFocus())
                    })
                };
            return t.addEventListener(`focusin`, n), t.addEventListener(`focusout`, r), () => {
                t.removeEventListener(`focusin`, n), t.removeEventListener(`focusout`, r)
            }
        }, [e, Le, je]), (0, J.useEffect)(() => {
            let n = () => {
                Ze.current &&= (Ze.current.action(), Ze.current.disableGroups(), null)
            };
            return !w && Se && e.hasFocus() && je && Le != null ? Ze.current = {
                action: u({
                    key: `magicEdit`,
                    action: () => e.hasFocus() ? (!e.state.selection.empty && !Be && Vt(!0), !0) : !1,
                    actionMessageDescriptor: t.formatMessage({
                        id: `writingBlocks.formatToolbar.magicEdit.toggle`,
                        defaultMessage: `Toggle magic edit`
                    }),
                    group: _.Chat,
                    bindings: [{
                        binding: Le
                    }],
                    scope: `thread`
                }),
                disableGroups: c(Object.values(_).filter(e => e !== _.Chat))
            } : n(), () => {
                n()
            }
        }, [e, t, Se, w, Be, Le, je, Vt]);
        let an = (0, J.useCallback)(t => {
                Z(() => {
                    t === `checklist` ? Ue(e) : Ye(e, t)
                })
            }, [e, Z]),
            on = (0, J.useMemo)(() => {
                let n = [{
                    id: `paragraph`,
                    label: t.formatMessage(Q.text),
                    shortcut: _t
                }, {
                    id: `heading1`,
                    label: t.formatMessage(Q.heading1),
                    className: `font-semibold text-[16px]`,
                    shortcut: vt
                }, {
                    id: `heading2`,
                    label: t.formatMessage(Q.heading2),
                    className: `font-semibold text-[15px]`,
                    shortcut: yt
                }, {
                    id: `heading3`,
                    label: t.formatMessage(Q.heading3),
                    className: `font-semibold text-[14px]`,
                    shortcut: bt
                }, {
                    id: `orderedList`,
                    label: t.formatMessage(Q.numberedList),
                    shortcut: xt
                }, {
                    id: `unorderedList`,
                    label: t.formatMessage(Q.bulletedList),
                    shortcut: St
                }];
                return m && e.state.schema.nodes.task_list_item && n.push({
                    id: `checklist`,
                    label: t.formatMessage(Q.checklist),
                    shortcut: Ct
                }), n
            }, [e, t, m]),
            sn = t.formatMessage(Q.textStylesTrigger),
            [cn, ln] = (0, J.useState)(!1),
            un = (0, J.useRef)(null),
            dn = (0, J.useCallback)(() => {
                if (typeof window > `u`) {
                    un.current = null;
                    return
                }
                let e = window.getSelection();
                if (!e || e.rangeCount === 0) {
                    un.current = null;
                    return
                }
                un.current = e.getRangeAt(0).cloneRange()
            }, []),
            fn = (0, J.useCallback)(() => {
                if (typeof window > `u`) return;
                let e = un.current;
                if (!e) return;
                let t = window.getSelection();
                t && (t.removeAllRanges(), t.addRange(e))
            }, []);
        (0, J.useEffect)(() => {
            cn || (un.current = null)
        }, [cn]);
        let pn = (0, J.useMemo)(() => {
                let e = on.find(e => e.id === ft);
                return e ? e.label : t.formatMessage(Q.text)
            }, [ft, t, on]),
            $ = (0, J.useCallback)(() => {
                let {
                    selection: t
                } = e.state;
                return (t.empty ? Pt(e) : Ft(e)) ?? j
            }, [j, e]),
            mn = $(),
            hn = (0, J.useCallback)(() => {
                let e = $()?.href;
                e == null || e.length === 0 || at({
                    href: e,
                    conversation: n
                })
            }, [n, $]),
            gn = (0, J.useCallback)(() => {
                let e = $()?.href;
                if (!(e == null || e.length === 0) && !ie) {
                    if (N(!0), ye(() => N(!1), Kt), typeof navigator > `u` || typeof navigator.clipboard?.writeText != `function`) {
                        s.error(`Clipboard API unavailable for writing block link copy`);
                        return
                    }
                    navigator.clipboard.writeText(e).catch(e => {
                        s.error(`Failed to copy writing block link`, {
                            error: e
                        })
                    })
                }
            }, [$, ye, ie]),
            _n = (0, J.useCallback)(() => {
                let t = $();
                if (t == null) return;
                let n = e.state.selection.empty;
                R(!0), Z(() => {
                    let {
                        state: n,
                        dispatch: r
                    } = e, i = typeof window > `u` ? null : window.getSelection(), a = Pt(e) ?? Ft(e) ?? It(e, i) ?? t, o = n.schema.marks[L.proseMirrorMarkName()];
                    if (o == null) return;
                    let s = Math.min(Math.max(0, a.from), n.doc.content.size),
                        c = Math.min(Math.max(s, a.to), n.doc.content.size);
                    if (s === c) return;
                    let l = n.tr.removeMark(s, c, o),
                        u = n.selection.map(l.doc, l.mapping);
                    l = l.setSelection(u), r(l.scrollIntoView())
                }, {
                    maintainToolbarPosition: !1
                }), N(!1), M(null), n && U(!0)
            }, [e, $, Z, R, U]),
            vn = (0, J.useCallback)(() => {
                let e = $();
                e != null && tn({
                    from: e.from,
                    to: e.to
                }, e.href)
            }, [$, tn]),
            yn = (0, J.useCallback)(e => {
                e.preventDefault(), e.button === 0 && vn()
            }, [vn]),
            bn = (0, J.useCallback)(() => {
                e.focus(), ye(() => {
                    e.hasFocus() || e.focus()
                }, 0)
            }, [e, ye]),
            xn = (0, J.useCallback)(e => {
                e.pointerType === `mouse` && e.button === 0 && (e.target instanceof Element ? e.target : null)?.closest(`[data-preserve-editor-focus-on-pointerdown="true"]`) != null && (e.preventDefault(), bn())
            }, [bn]),
            Sn = (0, J.useCallback)(e => {
                e.button === 0 && (e.preventDefault(), bn())
            }, [bn]),
            Cn = (0, J.useCallback)(e => {
                e.detail === 0 && vn()
            }, [vn]),
            [{
                height: wn,
                width: Tn,
                target: En
            }, Dn] = (0, Wt.default)(),
            On = (0, J.useRef)(null),
            kn = (0, J.useCallback)(e => {
                On.current = e, Dn(e)
            }, [Dn]),
            An = En == null ? wn > 0 && Tn > 0 : En === On.current,
            jn = An ? wn : 0,
            Mn = An ? Tn : 0,
            [Nn, Pn] = (0, J.useState)(!1),
            [Fn, In] = (0, J.useState)(!0),
            Ln = Qe(),
            [Rn, zn] = (0, J.useState)(null);
        (0, J.useEffect)(() => {
            if (Ne) {
                Pn(!1), In(!0);
                return
            }
            let e = a(() => {
                    In(!0)
                }, 200, {
                    leading: !1
                }),
                t = a(() => {
                    Pn(!0), In(!1), e()
                }, 200, {
                    leading: !0
                }),
                n = () => {
                    t.cancel(), e.cancel(), Pn(!1), In(!0), G(tt.current)
                },
                r = new AbortController;
            return Ln?.addEventListener(`pointerdown`, t, {
                passive: !0,
                signal: r.signal
            }), document.addEventListener(`pointerup`, n, {
                passive: !0,
                signal: r.signal
            }), () => {
                r.abort(), t.cancel(), e.cancel()
            }
        }, [Ln, Ne, G]), b(() => {
            if (!gt) try {
                let e = Zt($e.current, {
                    width: Mn,
                    height: jn
                });
                e != null && zn(e)
            } catch (e) {
                s.error(`Invalid position in getToolbarPosition`, {
                    error: e
                })
            }
        }, [jn, Mn, gt, En, nt]);
        let Bn = ge.current || P || I.current != null,
            Vn = r && mn != null && !Ge && !Bn,
            Hn = (_e.current || le || it.current && ot.current) && !Vn && !Bn,
            Un = Vn && !mn?.isAutolink,
            Wn = Un && mn != null ? Ut(mn.href) : null,
            Gn = oe && !C && Vn,
            Kn = Bt(e),
            qn = be || !l && !we && (!gt || !e.state.selection.empty || Ge || r && (P || le)),
            Jn = !l && Et && !we && (!gt || Ge || Bn && r) && An && Rn != null && Fn && !Gn && !Hn,
            Yn = p || !y;
        return (0, J.useEffect)(() => {
            ne?.(Jn)
        }, [Jn, ne]), qn ? (0, Y.jsx)(Y.Fragment, {
            children: (0, Y.jsx)(v, {
                asChild: !0,
                ...ee,
                children: (0, Y.jsx)(`div`, {
                    style: Jn && Rn ? {
                        top: Rn.top,
                        left: Rn.left,
                        height: Rn.height
                    } : void 0,
                    className: D(`pointer-events-none fixed top-0 h-0`, !Jn && `invisible overflow-clip`),
                    ref: k,
                    children: (0, Y.jsx)(`div`, {
                        ref: kn,
                        style: Yn ? void 0 : {
                            left: 0
                        },
                        onPointerDownCapture: xn,
                        className: D(Yn ? [`sticky`, p ? `top-2` : `@w-xl/main:top-2 top-[calc(var(--header-height,48px)+48px+8px)]`] : `absolute top-0`, Nn ? `pointer-events-none` : `pointer-events-auto`),
                        children: (0, Y.jsx)(fe, {
                            children: Vn ? (0, Y.jsxs)(Y.Fragment, {
                                children: [Wn != null && (0, Y.jsx)(`span`, {
                                    className: `text-token-text-secondary max-w-[220px] truncate px-2 text-xs`,
                                    "data-testid": `writing-block-link-preview`,
                                    title: mn?.href,
                                    children: Wn
                                }), Un && (0, Y.jsx)(F, {
                                    label: t.formatMessage(Q.editLink),
                                    hideLabel: !0,
                                    icon: Ee,
                                    onClick: Cn,
                                    onMouseDown: yn
                                }), Un && (0, Y.jsx)(F, {
                                    label: t.formatMessage(Q.clearLink),
                                    hideLabel: !0,
                                    icon: x.Unlink,
                                    onClick: _n,
                                    onMouseDown: e => e.preventDefault()
                                }), Un && (0, Y.jsx)(ve, {}), (0, Y.jsx)(F, {
                                    label: t.formatMessage(Q.copyLink),
                                    icon: ie ? De : Oe,
                                    iconClassName: `!text-token-text-primary`,
                                    onClick: gn,
                                    onMouseDown: e => e.preventDefault()
                                }), (0, Y.jsx)(F, {
                                    label: t.formatMessage(Q.openLink),
                                    icon: Fe,
                                    iconClassName: `!text-token-text-primary`,
                                    onClick: hn,
                                    onMouseDown: e => e.preventDefault()
                                })]
                            }) : r && Bn ? (0, Y.jsx)(`div`, {
                                className: `flex min-w-0 flex-1`,
                                children: (0, Y.jsx)(Ot, {
                                    inputRef: he,
                                    value: pe,
                                    onChange: me,
                                    placeholder: t.formatMessage(Q.linkInputPlaceholder),
                                    onSubmit: rn,
                                    onCancel: en,
                                    isLoading: !1,
                                    submitAriaLabel: t.formatMessage(Q.linkApplyAriaLabel),
                                    submitIcon: De,
                                    cancelAriaLabel: t.formatMessage(Q.linkCancelAriaLabel),
                                    disabled: !1,
                                    selectAllOnFocus: !0,
                                    inputClassName: `w-full`,
                                    onKeyDownCapture: e => {
                                        if (g(e)) {
                                            e.preventDefault(), e.stopPropagation();
                                            return
                                        }
                                        if (E(e)) {
                                            e.preventDefault(), e.stopPropagation(), en();
                                            return
                                        }
                                        qt(e)
                                    },
                                    isSubmitDisabled: Ht(pe) == null
                                })
                            }) : Hn ? null : (0, Y.jsxs)(Y.Fragment, {
                                children: [je && o?.renderTool({
                                    editorView: e,
                                    intl: t,
                                    isMagicEditOpen: be,
                                    toggleMagicEdit: Vt,
                                    isMagicEditDisabled: Be,
                                    handleKeyDown: qt
                                }), !be && (0, Y.jsxs)(Y.Fragment, {
                                    children: [r && (0, Y.jsx)(F, {
                                        label: t.formatMessage(Q.link),
                                        hideLabel: !0,
                                        icon: Te,
                                        onClick: nn,
                                        onMouseDown: e => e.preventDefault(),
                                        isDisabled: Kn
                                    }), (0, Y.jsx)(F, {
                                        label: t.formatMessage(Q.bold),
                                        hideLabel: !0,
                                        icon: Ae,
                                        onClick: () => Qt(We.proseMirrorMarkName()),
                                        onMouseDown: Sn,
                                        preserveEditorFocusOnPointerDown: !0,
                                        isActive: V
                                    }), (0, Y.jsx)(F, {
                                        label: t.formatMessage(Q.italic),
                                        hideLabel: !0,
                                        icon: Ie,
                                        onClick: () => Qt(Ve.proseMirrorMarkName()),
                                        onMouseDown: Sn,
                                        preserveEditorFocusOnPointerDown: !0,
                                        isActive: ut
                                    }), (0, Y.jsx)(st, {
                                        buttonText: pn,
                                        editorRef: {
                                            current: e.dom
                                        },
                                        selectedOptionId: ft,
                                        isOpen: cn,
                                        onOpenChange: e => {
                                            e ? dn() : un.current = null, ln(e)
                                        },
                                        onSelect: e => {
                                            fn(), an(e), ln(!1), X()
                                        },
                                        options: on,
                                        preserveSelection: dn,
                                        triggerLabel: sn
                                    }), S != null && (0, J.cloneElement)(S, {
                                        editorView: e,
                                        dismissToolbar: X,
                                        preserveEditorFocusOnMouseDown: Sn
                                    })]
                                })]
                            })
                        })
                    })
                })
            })
        }) : null
    }
}));
export {
    G as a, Dt as c, Ot as i, H as l, $t as n, gt as o, kt as r, pt as s, Qt as t
};
//# sourceMappingURL=0631b696-ihbjlacozwxiwjzx.js.map
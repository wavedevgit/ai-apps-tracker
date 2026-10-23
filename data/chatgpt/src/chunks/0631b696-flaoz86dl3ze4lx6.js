import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ai as r,
    Ant as i,
    CN as a,
    C_ as o,
    Ei as s,
    Fi as c,
    Fnt as l,
    Fx as u,
    HN as d,
    Hx as f,
    K5 as p,
    Lx as m,
    Nrt as h,
    Ox as g,
    Prt as _,
    Px as v,
    Rnt as ee,
    ST as y,
    Tx as b,
    UN as x,
    Vx as S,
    bQ as C,
    bx as w,
    dx as T,
    hQ as E,
    kx as te,
    nx as D,
    pZ as O,
    q5 as k,
    rx as ne,
    vQ as re,
    wN as ie,
    wT as ae,
    w_ as A,
    wx as oe,
    xnt as se
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as j,
    Ln as ce,
    Rn as le,
    Vn as M,
    wn as ue
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Cv as N,
    LS as de,
    N2t as fe,
    P2t as pe,
    RS as me,
    Sv as he,
    Tv as ge,
    c5t as _e,
    dBn as P,
    f5t as ve,
    l5t as ye,
    o5t as F,
    u5t as I,
    wv as be
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    $b as xe,
    Eg as Se,
    Gy as Ce,
    Ky as we,
    NS as Te,
    Nx as Ee,
    PS as De,
    Px as Oe,
    Qb as ke,
    TC as Ae,
    Tg as je,
    Wy as Me,
    bi as Ne,
    qy as Pe,
    vi as Fe,
    wC as Ie,
    xi as Le,
    yi as Re
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    At as ze,
    Dt as Be,
    kt as Ve,
    wt as He
} from "./82782bc9-b4xbouzwkkyrfqq2.js";
import {
    CC as Ue,
    DC as We,
    HC as Ge,
    NC as Ke,
    NS as qe,
    QC as Je,
    _C as Ye,
    yC as Xe,
    zC as Ze
} from "./8b34dbc2-lmwubajnld74ksfm.js";
import {
    c as Qe,
    o as $e,
    s as et
} from "./31cec8d8-ejzahhq8v425zkie.js";
import {
    t as tt
} from "./4c0f1f8e-o4zbuwgknf8ay6gx.js";
import {
    C as L,
    t as nt
} from "./2d39f94f-l9kjl7wrlvb50rln.js";
import {
    n as rt,
    r as it
} from "./781797c9-dgnoim3xgsx14hxn.js";
import {
    n as at,
    t as R
} from "./2ac7f54f-l8pnzp97tb7vdudt.js";
import {
    n as ot,
    t as st
} from "./0379e822-iv8nmy6i5uxblv30.js";

function ct({
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
    let l = ne(),
        u = (0, z.useRef)(null),
        [d, f] = (0, z.useState)(null);
    (0, z.useEffect)(() => {
        let e = u.current;
        !e || typeof document > `u` || f(e.closest(`[aria-hidden="true"]`) != null)
    }, []);
    let m = (0, B.jsxs)(B.Fragment, {
        children: [(0, B.jsx)(`span`, {
            className: `text-sm font-medium`,
            children: e
        }), (0, B.jsx)(Ie, {
            "aria-hidden": !0,
            className: `icon-xs text-current`
        })]
    });
    return d === !1 ? (0, B.jsx)(`div`, {
        ref: u,
        "data-toolbar-surface": `true`,
        className: `h-full`,
        children: (0, B.jsxs)(ye, {
            open: i,
            onOpenChange: e => {
                e && s(), a(e)
            },
            children: [(0, B.jsx)(I, {
                asChild: !0,
                children: (0, B.jsx)(rt.Button, {
                    type: `button`,
                    "aria-label": t,
                    "aria-haspopup": `menu`,
                    "aria-expanded": i,
                    className: p(`text-token-text-primary flex h-full items-center gap-1 rounded-lg px-2.5`, `dark:hover:bg-token-interactive-bg-secondary-hover hover:bg-black/5`, `data-[state=open]:bg-token-interactive-bg-secondary-selected`),
                    onMouseDown: e => e.preventDefault(),
                    onPointerDownCapture: s,
                    onKeyDownCapture: e => {
                        (e.key === ` ` || e.key === `Enter`) && s()
                    },
                    children: m
                })
            }), (0, B.jsx)(_e, {
                ...l,
                children: (0, B.jsx)(F, {
                    align: `start`,
                    alignOffset: -8,
                    sideOffset: 8,
                    className: p(et.toolbar, `popover`, `bg-token-main-surface-primary w-fit rounded-2xl p-1.5`, $e),
                    "data-toolbar-surface": `true`,
                    onOpenAutoFocus: e => e.preventDefault(),
                    onCloseAutoFocus: e => {
                        e.preventDefault(), c.current?.focus({
                            preventScroll: !0
                        })
                    },
                    children: (0, B.jsx)(`div`, {
                        className: `flex flex-col gap-0.5`,
                        role: `menu`,
                        children: n.map(e => {
                            let t = e.id === r;
                            return (0, B.jsx)(`button`, {
                                type: `button`,
                                role: `menuitemradio`,
                                "aria-checked": t,
                                "data-selected": t ? `true` : void 0,
                                className: p(`text-token-text-primary dark:hover:bg-token-main-surface-secondary rounded-[10px] py-1.5 ps-3 pe-1 text-start text-sm hover:bg-[#f5f5f5]`, t && `dark:bg-token-main-surface-secondary bg-[#f5f5f5] font-medium`),
                                onPointerDown: e => e.preventDefault(),
                                onClick: () => o(e.id),
                                children: (0, B.jsxs)(`span`, {
                                    className: `flex w-full items-center justify-between gap-8`,
                                    children: [(0, B.jsx)(`span`, {
                                        className: e.className,
                                        children: e.label
                                    }), (0, B.jsx)(`span`, {
                                        className: `text-token-text-tertiary`,
                                        children: (0, B.jsx)(fe, {
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
    }) : (0, B.jsx)(`div`, {
        ref: u,
        "data-toolbar-surface": `true`,
        className: `h-full`,
        children: (0, B.jsx)(rt.Button, {
            type: `button`,
            "aria-label": t,
            "aria-haspopup": `menu`,
            "aria-expanded": i,
            tabIndex: -1,
            "data-state": i ? `open` : `closed`,
            className: p(`text-token-text-primary flex h-full items-center gap-1 rounded-lg px-2.5`, `dark:hover:bg-token-interactive-bg-secondary-hover hover:bg-black/5`, i && `bg-token-interactive-bg-secondary-selected`),
            children: m
        })
    })
}
var z, B, lt = e((() => {
    Qe(), it(), Ae(), D(), pe(), ve(), k(), z = n(M()), B = j()
}));

function ut(e) {
    "use forget";
    let t = (0, dt.c)(29),
        {
            onDismiss: n,
            editorView: r,
            toolbarContentRef: a,
            isToolbarOpen: o,
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
    t[0] === a ? g = t[1] : (g = e => {
        if (!(e instanceof Node)) return !1;
        let t = a.current;
        return t && t.contains(e) ? !0 : e instanceof Element && e.closest(`[data-toolbar-surface="true"]`) != null
    }, t[0] = a, t[1] = g);
    let _ = g,
        v;
    t[2] === r?.dom ? v = t[3] : (v = e => e instanceof Node ? r?.dom.contains(e) ?? !1 : !1, t[2] = r?.dom, t[3] = v);
    let y = v,
        b;
    t[4] !== m || t[5] !== p || t[6] !== r?.dom || t[7] !== o || t[8] !== n || t[9] !== d ? (b = e => {
        if (e.key !== `Escape` || !o || (m && (e.preventDefault(), e.stopPropagation()), d?.(), !p)) return;
        n();
        let t = r?.dom;
        t && t.focus({
            preventScroll: !0
        })
    }, t[4] = m, t[5] = p, t[6] = r?.dom, t[7] = o, t[8] = n, t[9] = d, t[10] = b) : b = t[10];
    let x = b,
        S;
    t[11] !== h || t[12] !== y || t[13] !== _ || t[14] !== o || t[15] !== n ? (S = e => {
        let t = e.button === 0 && e.ctrlKey && ee() && !i();
        if (!(_(e.target) || e.shiftKey && y(e.target) || !o || e.button !== 0 || t)) {
            if (h) {
                e.preventDefault(), e.stopPropagation();
                return
            }
            n(e.target)
        }
    }, t[11] = h, t[12] = y, t[13] = _, t[14] = o, t[15] = n, t[16] = S) : S = t[16];
    let C = S,
        w;
    t[17] !== f || t[18] !== r?.dom?.ownerDocument || t[19] !== x || t[20] !== C ? (w = () => {
        let e = r?.dom?.ownerDocument ?? (typeof document < `u` ? document : null);
        if (e) return e.addEventListener(`keydown`, x), f && e.addEventListener(`pointerdown`, C, {
            capture: !0
        }), () => {
            e.removeEventListener(`keydown`, x), f && e.removeEventListener(`pointerdown`, C, !0)
        }
    }, t[17] = f, t[18] = r?.dom?.ownerDocument, t[19] = x, t[20] = C, t[21] = w) : w = t[21];
    let T;
    t[22] !== f || t[23] !== r || t[24] !== x || t[25] !== C ? (T = [f, r, x, C], t[22] = f, t[23] = r, t[24] = x, t[25] = C, t[26] = T) : T = t[26], (0, ft.useEffect)(w, T);
    let E;
    return t[27] === x ? E = t[28] : (E = {
        handleKeyDown: x
    }, t[27] = x, t[28] = E), E
}
var dt, ft, pt = e((() => {
    dt = ue(), se(), ft = n(M())
}));

function mt(e) {
    return !!wt.test(e)
}

function V(e) {
    return H(e, {
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

function H(e, t) {
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
            let t = E(o, {
                    lines: n,
                    index: e
                }),
                a = i.at(-1);
            t && a && ht(t, a) && i.pop();
            continue
        }
        let s = E(o, {
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
    m(), O(), C(), gt = [u.Mod, `k`], _t = [u.Mod, u.Alt, `0`], vt = [u.Mod, u.Alt, `1`], yt = [u.Mod, u.Alt, `2`], bt = [u.Mod, u.Alt, `3`], xt = [u.Mod, u.Alt, `4`], St = [u.Mod, u.Alt, `5`], Ct = [u.Mod, u.Alt, `6`], new RegExp(String.raw`^\s*:::${re}\{[^}]*\}[\s\S]*?:::`, `m`), wt = new RegExp(String.raw`^\s*:::${re}`, `m`), Tt = new RegExp(String.raw`^\s*:::${re}(?:\s|\{|$)`), Et = /^\s*:::\s*$/, new RegExp(String.raw`^\s*:::${re}\s*\{\s*\}\s*$`)
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
            selectAllOnFocus: m,
            inputRef: h,
            inputClassName: g,
            onKeyDownCapture: _,
            isSubmitDisabled: v,
            submitIcon: ee
        } = e,
        y = m !== void 0 && m,
        b = ee === void 0 ? Se : ee,
        x;
    t[0] !== s || t[1] !== v || t[2] !== n ? (x = !s && (v ?? n.trim() === ``), t[0] = s, t[1] = v, t[2] = n, t[3] = x) : x = t[3];
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
    let E;
    t[10] === g ? E = t[11] : (E = p(`mx-0! min-w-[300px]! ps-2.5! pe-9!`, g), t[10] = g, t[11] = E);
    let te = f ?? s,
        D;
    t[12] === _ ? D = t[13] : (D = e => {
        _?.(e)
    }, t[12] = _, t[13] = D);
    let O;
    t[14] !== d || t[15] !== h || t[16] !== u || t[17] !== i || t[18] !== y || t[19] !== C || t[20] !== w || t[21] !== E || t[22] !== te || t[23] !== D || t[24] !== n ? (O = (0, W.jsx)(T, {
        ref: h,
        value: n,
        onChange: C,
        placeholder: i,
        onSubmit: w,
        border: !1,
        className: E,
        name: u,
        autoFocus: d,
        disabled: te,
        selectAllOnFocus: y,
        onKeyDownCapture: D
    }), t[14] = d, t[15] = h, t[16] = u, t[17] = i, t[18] = y, t[19] = C, t[20] = w, t[21] = E, t[22] = te, t[23] = D, t[24] = n, t[25] = O) : O = t[25];
    let k;
    t[26] !== b || t[27] !== l || t[28] !== s || t[29] !== o || t[30] !== a || t[31] !== S || t[32] !== c ? (k = (0, W.jsx)(`div`, {
        className: `absolute end-1.5 top-1/2 flex -translate-y-1/2 items-center justify-center`,
        children: s ? (0, W.jsx)(R, {
            ariaLabel: l,
            size: 20,
            onClick: o
        }) : (0, W.jsx)(`button`, {
            className: p(`icon`, `composer-submit-btn composer-submit-button-color`),
            onClick: a,
            disabled: S,
            "aria-label": c,
            children: (0, W.jsx)(b, {
                className: `icon-xs`
            })
        })
    }), t[26] = b, t[27] = l, t[28] = s, t[29] = o, t[30] = a, t[31] = S, t[32] = c, t[33] = k) : k = t[33];
    let ne;
    return t[34] !== k || t[35] !== O ? (ne = (0, W.jsxs)(`div`, {
        className: `relative`,
        children: [O, k]
    }), t[34] = k, t[35] = O, t[36] = ne) : ne = t[36], ne
}
var U, W, G = e((() => {
        U = ue(), at(), je(), w(), k(), W = j()
    })),
    kt = t({
        RichTextFormatToolbar: () => Qt
    });

function At(e) {
    let {
        selection: t
    } = e.state;
    return t instanceof He && t.node.type.name === `writing_block_image` && L.get(e.state) != null
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
    let i = r.schema.marks[P.proseMirrorMarkName()];
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
    let r = t.schema.marks[P.proseMirrorMarkName()];
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
    let r = t.schema.marks[P.proseMirrorMarkName()];
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
        } = e, o = r.schema.marks[P.proseMirrorMarkName()];
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
    let a = t.schema.marks[P.proseMirrorMarkName()];
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
    Le(), Pe(), Ce(), Fe(), ke(), Te(), Ee(), f(), D(), r(), ge(), b(), m(), se(), lt(), pt(), ze(), J = n(M()), le(), Dt(), qe(), G(), nt(), h(), a(), d(), de(), st(), ae(), k(), A(), Wt = n(tt()), Y = j(), X = .5, Gt = `writing-block-open-link-mode`, Kt = 2e3, qt = 34, Z = /^https?:\/\//i, Jt = ``, Yt = (e, t) => Math.abs(e.left - t.left) < X && Math.abs(e.top - t.top) < X && Math.abs(e.width - t.width) < X && Math.abs(e.height - t.height) < X, Xt = e => typeof e.props.editable == `function` ? e.props.editable(e.state) : e.props.editable !== !1, Zt = (e, t) => {
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
    }, Q = ce({
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
        magicEdit: a,
        suppressToolbar: u = !1,
        toolbarContentRef: d,
        onToolbarOpenChange: f,
        fullscreenMode: m,
        isChecklistSupportEnabled: h = !1,
        disableStickyPlacement: ee = !1,
        trailingSectionActions: b
    }) => {
        "use no forget";
        let C = l(),
            w = ne(),
            [T, E] = (0, J.useState)(() => !Xt(e)),
            D = (0, J.useRef)(null),
            O = d ?? D,
            [k, re] = (0, J.useState)(!1),
            [ae, A] = (0, J.useState)(null),
            [se, j] = (0, J.useState)(!1),
            [ce, le] = (0, J.useState)(!1),
            [M, ue] = (0, J.useState)(!1),
            [de, fe] = (0, J.useState)(!1),
            [pe, ge] = (0, J.useState)(Jt),
            _e = (0, J.useRef)(null),
            ve = (0, J.useRef)(!1),
            ye = (0, J.useRef)(!1),
            F = (0, J.useRef)(null),
            I = (0, J.useCallback)(e => {
                ye.current = e, fe(e)
            }, []),
            Se = me();
        (0, J.useEffect)(() => {
            let t = () => {
                E(!Xt(e))
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
            f?.(k)
        }, [k, f]), (0, J.useEffect)(() => {
            j(!1)
        }, [ae?.href]);
        let [Ce, Te] = (0, J.useState)(!1), [Ee, ke] = (0, J.useState)(!1), [Ae, je] = (0, J.useState)(!1), Pe = a?.show === !0, Fe = a?.shouldDisable === !0, Ie = a?.isLoading === !0, Le = a?.onOpenRequested, ze = a?.shortcutBinding, He = Fe || Ae, [qe, Qe] = (0, J.useState)(!1), $e = (0, J.useRef)(null), et = (0, J.useCallback)(() => e.dom, [e]), tt = (0, J.useRef)(null), L = (0, J.useRef)(null), nt = (0, J.useRef)(null), rt = (0, J.useRef)(null), [it, at] = (0, J.useState)(0), R = (0, J.useRef)(!1), st = (0, J.useRef)(!1), z = (0, J.useRef)(null), [B, lt] = (0, J.useState)(!1), [dt, ft] = (0, J.useState)(!1), [pt, mt] = (0, J.useState)(`paragraph`), V = (0, J.useCallback)(e => {
            e ?? (L.current = null);
            let t = tt.current;
            t == null && e == null || t != null && e != null && Yt(t.selectionRect, e.selectionRect) && Yt(t.editorRect, e.editorRect) || (tt.current = e, at(e => e + 1))
        }, []), H = (0, J.useCallback)(() => {
            let t = e.state,
                {
                    from: n,
                    to: r,
                    empty: i,
                    $from: a
                } = t.selection,
                o = t.schema.marks[Ke.proseMirrorMarkName()],
                s = t.schema.marks[Ue.proseMirrorMarkName()];
            if (i) {
                let e = t.storedMarks ?? a.marks(),
                    n = !!o && !!e?.find(e => e.type === o),
                    r = !!s && !!e?.find(e => e.type === s);
                lt(n), ft(r)
            } else {
                let e = t.doc.textBetween(n, r, `
`, `
`),
                    i = e.match(/^\s*/)?.[0].length ?? 0,
                    a = e.match(/\s*$/)?.[0].length ?? 0,
                    c = n + i,
                    l = r - a;
                if (c >= l) lt(!1), ft(!1);
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
                    }), lt(e && n), ft(e && r)
                }
            }
            let c = `paragraph`,
                l = t.schema.nodes[We.proseMirrorNodeName()],
                u = t.schema.nodes[Xe.proseMirrorNodeName()],
                d = t.schema.nodes[Ye.proseMirrorNodeName()],
                f = t.schema.nodes.task_list_item;
            for (let e = a.depth; e >= 0; e--) {
                let t = a.node(e);
                if (h && t.type === f) {
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
            mt(c)
        }, [e, h]), ht = ie(() => {
            typeof window < `u` && nt.current != null && (window.cancelAnimationFrame(nt.current), nt.current = null)
        }), [gt, wt] = (0, J.useState)(!0), Tt = (0, J.useRef)(!0), [Et, Dt] = (0, J.useState)(!u), U = (0, J.useCallback)(e => {
            Tt.current !== e && (Tt.current = e, wt(e))
        }, []);
        x(() => {
            u && Dt(!1)
        }, [u]);
        let W = (0, J.useCallback)(() => {
                let t = et(),
                    n = document.getSelection();
                if (t == null || At(e) || n == null || n.rangeCount === 0) return !0;
                let {
                    anchorNode: i,
                    focusNode: a
                } = n;
                return i != null && t.contains(i) || a != null && t.contains(a) ? Lt(n) ? !r || Rt(e, n) == null : !1 : !0
            }, [e, et, r]),
            G = ie(t => {
                typeof window > `u` || t == null || t.aborted || (ht(), nt.current = window.requestAnimationFrame(() => {
                    if (nt.current = null, t.aborted || u || R.current) return;
                    Dt(!0), I(!1);
                    let n = e.dom;
                    if (!n || At(e)) {
                        U(!0), A(null), V(null);
                        return
                    }
                    if (M) return;
                    a != null && je(a.isSelectionInside(e));
                    let i = window.getSelection(),
                        o = i != null && Lt(i);
                    if (i == null || i.rangeCount === 0 || o) {
                        let t = o && i.anchorNode != null && n.contains(i.anchorNode),
                            a = document.activeElement != null && n.contains(document.activeElement),
                            s = r && (t || a) ? Rt(e, t ? i : null) : null;
                        if (U(s == null), A(s), s == null) {
                            V(null);
                            return
                        }
                        H();
                        let c = e.state.selection.from,
                            l = e.coordsAtPos(c),
                            u = Nt(n);
                        V({
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
                        U(!0), A(null), H(), V(null);
                        return
                    }
                    let c = r ? Ft(e) : null;
                    U(!1), A(c), H();
                    let l = e.state.selection,
                        d = !l.empty && L.current?.from === l.from && L.current?.to === l.to ? L.current : null;
                    if (L.current != null && d == null && (L.current = null), d != null) {
                        V(d.geometry);
                        return
                    }
                    let f = s.getBoundingClientRect();
                    if (!f || f.width === 0 && f.height === 0) {
                        V(null);
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
                    V({
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
            if (typeof document > `u` || typeof window > `u` || u) return;
            let e = new AbortController;
            rt.current = e.signal;
            let t = () => {
                    U(W()), G(e.signal)
                },
                n = () => {
                    L.current = null, G(e.signal)
                };
            return document.addEventListener(`selectionchange`, t, {
                signal: e.signal
            }), window.addEventListener(`resize`, n, {
                signal: e.signal
            }), window.addEventListener(`scroll`, n, {
                capture: !0,
                signal: e.signal
            }), G(e.signal), () => {
                rt.current = null, e.abort(), ht()
            }
        }, [ht, e, W, G, U, u]), (0, J.useEffect)(() => {
            if (typeof window > `u` || C || !r) {
                le(!1);
                return
            }
            let e = e => {
                    let t = oe(e) === `Meta`;
                    if (e.type === `keydown`) {
                        le(e.metaKey || t);
                        return
                    }
                    if (t) {
                        le(!1);
                        return
                    }
                    le(e.metaKey)
                },
                t = () => {
                    le(!1)
                };
            return window.addEventListener(`keydown`, e, !0), window.addEventListener(`keyup`, e, !0), window.addEventListener(`blur`, t), () => {
                window.removeEventListener(`keydown`, e, !0), window.removeEventListener(`keyup`, e, !0), window.removeEventListener(`blur`, t)
            }
        }, [C, r]), (0, J.useEffect)(() => {
            let t = e.dom;
            if (t != null) {
                if (!r || C || !ce && !T) {
                    t.classList.remove(Gt);
                    return
                }
                return t.classList.add(Gt), () => {
                    t.classList.remove(Gt)
                }
            }
        }, [e, T, C, ce, r]);
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
                    o = Be.near(a, -1);
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
                t ? i.pin(e) : i.unpin(e), Qe(t)
            }, [e, i]),
            q = (0, J.useCallback)(() => {
                ue(!1), I(!1), ge(Jt), ve.current = !1
            }, [I]),
            Vt = (0, J.useCallback)(e => {
                if (e) {
                    if (Le != null) {
                        Le();
                        return
                    }
                    K(!0), Te(!0)
                } else K(!1), Te(!1)
            }, [Le, K]),
            X = (0, J.useCallback)(() => {
                Ie || (Vt(!1), q(), F.current = null, Mt())
            }, [Mt, Ie, q, Vt]),
            {
                handleKeyDown: qt
            } = ut({
                editorView: e,
                toolbarContentRef: O,
                isToolbarOpen: k,
                onDismiss: X,
                dismissOnPointerDown: !C
            }),
            Z = (0, J.useCallback)((t, n) => {
                let r = e.dom;
                if (!r) return;
                let i = n?.maintainToolbarPosition === !0,
                    a = e.state.selection;
                i && !a.empty && tt.current != null ? L.current = {
                    from: a.from,
                    to: a.to,
                    geometry: tt.current
                } : i || (L.current = null), R.current = !0, st.current = !i, typeof window < `u` && z.current && (window.clearTimeout(z.current), z.current = null), r.focus({
                    preventScroll: !0
                });
                try {
                    t(), H()
                } finally {
                    typeof window < `u` ? z.current = window.setTimeout(() => {
                        R.current = !1, st.current = !1, z.current = null, i || G(rt.current)
                    }, 0) : (R.current = !1, st.current = !1)
                }
            }, [e, H, G]),
            Qt = (0, J.useCallback)(t => {
                Z(() => {
                    let {
                        state: n,
                        dispatch: r
                    } = e, i = n.schema.marks[t];
                    i && Je(n, r, i)
                }, {
                    maintainToolbarPosition: !0
                })
            }, [e, Z]),
            $t = (0, J.useCallback)(() => {
                let t = F.current;
                if (t == null) return;
                let {
                    state: n,
                    dispatch: r
                } = e, i = Math.min(Math.max(0, t.from), n.doc.content.size), a = Math.min(Math.max(i, t.to), n.doc.content.size);
                if (i === a) return;
                let o = Ve.create(n.doc, i, a);
                n.selection.eq(o) || r(n.tr.setSelection(o))
            }, [e]),
            en = (0, J.useCallback)(() => {
                K(!1), Z(() => {
                    $t()
                }, {
                    maintainToolbarPosition: !0
                }), q(), F.current = null
            }, [$t, Z, K, q]),
            tn = (0, J.useCallback)((t, n) => {
                let {
                    state: r
                } = e, i = Math.min(Math.max(0, t.from), r.doc.content.size), a = Math.min(Math.max(i, t.to), r.doc.content.size);
                i !== a && r.doc.textBetween(i, a, `
`, `
`).trim().length !== 0 && (F.current = {
                    from: i,
                    to: a
                }, ve.current = !0, I(!0), ge(n ?? Jt), j(!1), ue(!0), Z(() => {
                    let {
                        state: t,
                        dispatch: n
                    } = e, r = Math.min(Math.max(0, i), t.doc.content.size), o = Math.min(Math.max(r, a), t.doc.content.size);
                    if (r === o) return;
                    let s = Ve.create(t.doc, r, o);
                    t.selection.eq(s) || n(t.tr.setSelection(s))
                }, {
                    maintainToolbarPosition: !0
                }), K(!0))
            }, [e, Z, I, K]),
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
                    } = e, a = r.schema.marks[P.proseMirrorMarkName()];
                    if (a == null) return;
                    let o = F.current,
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
                    d = d.setSelection(Be.near(d.doc.resolve(p), -1)), i(d.scrollIntoView()), n = {
                        href: t,
                        isAutolink: u,
                        from: s,
                        to: f
                    }
                }, {
                    maintainToolbarPosition: !1
                }), K(!1), q(), F.current = null, A(n)
            }, [e, pe, Z, K, q]);
        (0, J.useEffect)(() => {
            if (!M || u || typeof window > `u`) return;
            ve.current = !1;
            let e = window.requestAnimationFrame(() => {
                _e.current?.focus()
            });
            return () => {
                window.cancelAnimationFrame(e)
            }
        }, [M, u]), (0, J.useEffect)(() => {
            r || (A(null), j(!1), M && (q(), F.current = null, Ce || K(!1)))
        }, [M, r, Ce, q, K]), (0, J.useEffect)(() => () => {
            typeof window < `u` && z.current != null && (window.clearTimeout(z.current), z.current = null), R.current = !1, st.current = !1
        }, []), (0, J.useEffect)(() => {
            if (!Pe || ze == null) return;
            let t = e.dom;
            ke(e.hasFocus());
            let n = () => {
                    ke(!0)
                },
                r = () => {
                    if (typeof window > `u`) {
                        ke(e.hasFocus());
                        return
                    }
                    window.requestAnimationFrame(() => {
                        ke(e.hasFocus())
                    })
                };
            return t.addEventListener(`focusin`, n), t.addEventListener(`focusout`, r), () => {
                t.removeEventListener(`focusin`, n), t.removeEventListener(`focusout`, r)
            }
        }, [e, ze, Pe]), (0, J.useEffect)(() => {
            let n = () => {
                $e.current &&= ($e.current.action(), $e.current.disableGroups(), null)
            };
            return !T && Ee && e.hasFocus() && Pe && ze != null ? $e.current = {
                action: c({
                    key: `magicEdit`,
                    action: () => e.hasFocus() ? (!e.state.selection.empty && !He && Vt(!0), !0) : !1,
                    actionMessageDescriptor: t.formatMessage({
                        id: `writingBlocks.formatToolbar.magicEdit.toggle`,
                        defaultMessage: `Toggle magic edit`
                    }),
                    group: v.Chat,
                    bindings: [{
                        binding: ze
                    }],
                    scope: `thread`
                }),
                disableGroups: s(Object.values(v).filter(e => e !== v.Chat))
            } : n(), () => {
                n()
            }
        }, [e, t, Ee, T, He, ze, Pe, Vt]);
        let an = (0, J.useCallback)(t => {
                Z(() => {
                    t === `checklist` ? Ge(e) : Ze(e, t)
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
                return h && e.state.schema.nodes.task_list_item && n.push({
                    id: `checklist`,
                    label: t.formatMessage(Q.checklist),
                    shortcut: Ct
                }), n
            }, [e, t, h]),
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
                let e = on.find(e => e.id === pt);
                return e ? e.label : t.formatMessage(Q.text)
            }, [pt, t, on]),
            $ = (0, J.useCallback)(() => {
                let {
                    selection: t
                } = e.state;
                return (t.empty ? Pt(e) : Ft(e)) ?? ae
            }, [ae, e]),
            mn = $(),
            hn = (0, J.useCallback)(() => {
                let e = $()?.href;
                e == null || e.length === 0 || ot({
                    href: e,
                    conversation: n
                })
            }, [n, $]),
            gn = (0, J.useCallback)(() => {
                let e = $()?.href;
                if (!(e == null || e.length === 0) && !se) {
                    if (j(!0), Se(() => j(!1), Kt), typeof navigator > `u` || typeof navigator.clipboard?.writeText != `function`) {
                        _.error(`Clipboard API unavailable for writing block link copy`);
                        return
                    }
                    navigator.clipboard.writeText(e).catch(e => {
                        _.error(`Failed to copy writing block link`, {
                            error: e
                        })
                    })
                }
            }, [$, Se, se]),
            _n = (0, J.useCallback)(() => {
                let t = $();
                if (t == null) return;
                let n = e.state.selection.empty;
                I(!0), Z(() => {
                    let {
                        state: n,
                        dispatch: r
                    } = e, i = typeof window > `u` ? null : window.getSelection(), a = Pt(e) ?? Ft(e) ?? It(e, i) ?? t, o = n.schema.marks[P.proseMirrorMarkName()];
                    if (o == null) return;
                    let s = Math.min(Math.max(0, a.from), n.doc.content.size),
                        c = Math.min(Math.max(s, a.to), n.doc.content.size);
                    if (s === c) return;
                    let l = n.tr.removeMark(s, c, o),
                        u = n.selection.map(l.doc, l.mapping);
                    l = l.setSelection(u), r(l.scrollIntoView())
                }, {
                    maintainToolbarPosition: !1
                }), j(!1), A(null), n && U(!0)
            }, [e, $, Z, I, U]),
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
                e.focus(), Se(() => {
                    e.hasFocus() || e.focus()
                }, 0)
            }, [e, Se]),
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
            Ln = et(),
            [Rn, zn] = (0, J.useState)(null);
        (0, J.useEffect)(() => {
            if (Ie) {
                Pn(!1), In(!0);
                return
            }
            let e = o(() => {
                    In(!0)
                }, 200, {
                    leading: !1
                }),
                t = o(() => {
                    Pn(!0), In(!1), e()
                }, 200, {
                    leading: !0
                }),
                n = () => {
                    t.cancel(), e.cancel(), Pn(!1), In(!0), G(rt.current)
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
        }, [Ln, Ie, G]), x(() => {
            if (!gt) try {
                let e = Zt(tt.current, {
                    width: Mn,
                    height: jn
                });
                e != null && zn(e)
            } catch (e) {
                _.error(`Invalid position in getToolbarPosition`, {
                    error: e
                })
            }
        }, [jn, Mn, gt, En, it]);
        let Bn = ve.current || M || F.current != null,
            Vn = r && mn != null && !qe && !Bn,
            Hn = (ye.current || de || R.current && st.current) && !Vn && !Bn,
            Un = Vn && !mn?.isAutolink,
            Wn = Un && mn != null ? Ut(mn.href) : null,
            Gn = ce && !C && Vn,
            Kn = Bt(e),
            qn = Ce || !u && !Ae && (!gt || !e.state.selection.empty || qe || r && (M || de)),
            Jn = !u && Et && !Ae && (!gt || qe || Bn && r) && An && Rn != null && Fn && !Gn && !Hn,
            Yn = m || !ee;
        return (0, J.useEffect)(() => {
            re?.(Jn)
        }, [Jn, re]), qn ? (0, Y.jsx)(Y.Fragment, {
            children: (0, Y.jsx)(y, {
                asChild: !0,
                ...w,
                children: (0, Y.jsx)(`div`, {
                    style: Jn && Rn ? {
                        top: Rn.top,
                        left: Rn.left,
                        height: Rn.height
                    } : void 0,
                    className: p(`pointer-events-none fixed top-0 h-0`, !Jn && `invisible overflow-clip`),
                    ref: O,
                    children: (0, Y.jsx)(`div`, {
                        ref: kn,
                        style: Yn ? void 0 : {
                            left: 0
                        },
                        onPointerDownCapture: xn,
                        className: p(Yn ? [`sticky`, m ? `top-2` : `@w-xl/main:top-2 top-[calc(var(--header-height,48px)+48px+8px)]`] : `absolute top-0`, Nn ? `pointer-events-none` : `pointer-events-auto`),
                        children: (0, Y.jsx)(he, {
                            children: Vn ? (0, Y.jsxs)(Y.Fragment, {
                                children: [Wn != null && (0, Y.jsx)(`span`, {
                                    className: `text-token-text-secondary max-w-[220px] truncate px-2 text-xs`,
                                    "data-testid": `writing-block-link-preview`,
                                    title: mn?.href,
                                    children: Wn
                                }), Un && (0, Y.jsx)(N, {
                                    label: t.formatMessage(Q.editLink),
                                    hideLabel: !0,
                                    icon: Oe,
                                    onClick: Cn,
                                    onMouseDown: yn
                                }), Un && (0, Y.jsx)(N, {
                                    label: t.formatMessage(Q.clearLink),
                                    hideLabel: !0,
                                    icon: S.Unlink,
                                    onClick: _n,
                                    onMouseDown: e => e.preventDefault()
                                }), Un && (0, Y.jsx)(be, {}), (0, Y.jsx)(N, {
                                    label: t.formatMessage(Q.copyLink),
                                    icon: se ? we : Me,
                                    iconClassName: `!text-token-text-primary`,
                                    onClick: gn,
                                    onMouseDown: e => e.preventDefault()
                                }), (0, Y.jsx)(N, {
                                    label: t.formatMessage(Q.openLink),
                                    icon: xe,
                                    iconClassName: `!text-token-text-primary`,
                                    onClick: hn,
                                    onMouseDown: e => e.preventDefault()
                                })]
                            }) : r && Bn ? (0, Y.jsx)(`div`, {
                                className: `flex min-w-0 flex-1`,
                                children: (0, Y.jsx)(Ot, {
                                    inputRef: _e,
                                    value: pe,
                                    onChange: ge,
                                    placeholder: t.formatMessage(Q.linkInputPlaceholder),
                                    onSubmit: rn,
                                    onCancel: en,
                                    isLoading: !1,
                                    submitAriaLabel: t.formatMessage(Q.linkApplyAriaLabel),
                                    submitIcon: we,
                                    cancelAriaLabel: t.formatMessage(Q.linkCancelAriaLabel),
                                    disabled: !1,
                                    selectAllOnFocus: !0,
                                    inputClassName: `w-full`,
                                    onKeyDownCapture: e => {
                                        if (g(e)) {
                                            e.preventDefault(), e.stopPropagation();
                                            return
                                        }
                                        if (te(e)) {
                                            e.preventDefault(), e.stopPropagation(), en();
                                            return
                                        }
                                        qt(e)
                                    },
                                    isSubmitDisabled: Ht(pe) == null
                                })
                            }) : Hn ? null : (0, Y.jsxs)(Y.Fragment, {
                                children: [Pe && a?.renderTool({
                                    editorView: e,
                                    intl: t,
                                    isMagicEditOpen: Ce,
                                    toggleMagicEdit: Vt,
                                    isMagicEditDisabled: He,
                                    handleKeyDown: qt
                                }), !Ce && (0, Y.jsxs)(Y.Fragment, {
                                    children: [r && (0, Y.jsx)(N, {
                                        label: t.formatMessage(Q.link),
                                        hideLabel: !0,
                                        icon: De,
                                        onClick: nn,
                                        onMouseDown: e => e.preventDefault(),
                                        isDisabled: Kn
                                    }), (0, Y.jsx)(N, {
                                        label: t.formatMessage(Q.bold),
                                        hideLabel: !0,
                                        icon: Ne,
                                        onClick: () => Qt(Ke.proseMirrorMarkName()),
                                        onMouseDown: Sn,
                                        preserveEditorFocusOnPointerDown: !0,
                                        isActive: B
                                    }), (0, Y.jsx)(N, {
                                        label: t.formatMessage(Q.italic),
                                        hideLabel: !0,
                                        icon: Re,
                                        onClick: () => Qt(Ue.proseMirrorMarkName()),
                                        onMouseDown: Sn,
                                        preserveEditorFocusOnPointerDown: !0,
                                        isActive: dt
                                    }), (0, Y.jsx)(ct, {
                                        buttonText: pn,
                                        editorRef: {
                                            current: e.dom
                                        },
                                        selectedOptionId: pt,
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
                                    }), b != null && (0, J.cloneElement)(b, {
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
    G as a, Dt as c, Ot as i, V as l, $t as n, gt as o, kt as r, mt as s, Qt as t
};
//# sourceMappingURL=0631b696-flaoz86dl3ze4lx6.js.map
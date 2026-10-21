import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ai as r,
    CN as i,
    C_ as a,
    Crt as o,
    Ei as s,
    Fi as c,
    Fx as l,
    HN as u,
    Hx as d,
    Lx as f,
    Ont as p,
    Ox as m,
    Px as h,
    ST as g,
    Tnt as _,
    Tx as v,
    UN as y,
    Vx as b,
    bQ as x,
    bnt as S,
    bx as C,
    c7 as w,
    dnt as T,
    dx as ee,
    hQ as E,
    kx as te,
    l7 as D,
    nx as O,
    pZ as k,
    rx as ne,
    vQ as A,
    wN as re,
    wT as j,
    w_ as ie,
    wrt as ae,
    wx as oe
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    Bn as M,
    Ln as se,
    Rn as ce,
    Vn as N,
    wn as le
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $8t as ue,
    Cv as P,
    D2t as de,
    LS as fe,
    Nzn as F,
    O2t as pe,
    RS as me,
    Sv as he,
    Tv as ge,
    X8t as _e,
    Y8t as ve,
    Z8t as I,
    q8t as L,
    wv as ye
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    Ci as be,
    DC as xe,
    Dg as Se,
    EC as Ce,
    FS as we,
    Fx as Te,
    IS as Ee,
    Ix as De,
    Jy as Oe,
    Ky as ke,
    Og as Ae,
    Si as je,
    Yy as Me,
    bi as Ne,
    ex as Pe,
    qy as Fe,
    tx as Ie,
    xi as Le
} from "./30901919-r9pahacmzqudnt4f.js";
import {
    At as Re,
    Dt as ze,
    kt as Be,
    wt as Ve
} from "./82782bc9-dyzlhaxotei12n1t.js";
import {
    AC as He,
    AS as Ue,
    IC as We,
    YC as Ge,
    bC as Ke,
    gC as qe,
    mC as Je,
    wC as Ye,
    zC as Xe
} from "./8b34dbc2-egl8cz04n8nmlktg.js";
import {
    c as Ze,
    o as Qe,
    s as $e
} from "./31cec8d8-ejzahhq8v425zkie.js";
import {
    t as et
} from "./4c0f1f8e-o4zbuwgknf8ay6gx.js";
import {
    t as R,
    y as tt
} from "./2d39f94f-hspt79egpmqwdjzf.js";
import {
    n as nt,
    r as rt
} from "./781797c9-k4u84k8fedqn5cci.js";
import {
    n as it,
    t as z
} from "./2ac7f54f-fwqqxrilo5xds4qj.js";
import {
    n as at,
    t as ot
} from "./0379e822-f78t22i9ivvhu61j.js";

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
    let l = ne(),
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
        }), (0, V.jsx)(Ce, {
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
            children: [(0, V.jsx)(I, {
                asChild: !0,
                children: (0, V.jsx)(nt.Button, {
                    type: `button`,
                    "aria-label": t,
                    "aria-haspopup": `menu`,
                    "aria-expanded": i,
                    className: w(`text-token-text-primary flex h-full items-center gap-1 rounded-lg px-2.5`, `dark:hover:bg-token-interactive-bg-secondary-hover hover:bg-black/5`, `data-[state=open]:bg-token-interactive-bg-secondary-selected`),
                    onMouseDown: e => e.preventDefault(),
                    onPointerDownCapture: s,
                    onKeyDownCapture: e => {
                        (e.key === ` ` || e.key === `Enter`) && s()
                    },
                    children: p
                })
            }), (0, V.jsx)(ve, {
                ...l,
                children: (0, V.jsx)(L, {
                    align: `start`,
                    alignOffset: -8,
                    sideOffset: 8,
                    className: w($e.toolbar, `popover`, `bg-token-main-surface-primary w-fit rounded-2xl p-1.5`, Qe),
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
                                className: w(`text-token-text-primary dark:hover:bg-token-main-surface-secondary rounded-[10px] py-1.5 ps-3 pe-1 text-start text-sm hover:bg-[#f5f5f5]`, t && `dark:bg-token-main-surface-secondary bg-[#f5f5f5] font-medium`),
                                onPointerDown: e => e.preventDefault(),
                                onClick: () => o(e.id),
                                children: (0, V.jsxs)(`span`, {
                                    className: `flex w-full items-center justify-between gap-8`,
                                    children: [(0, V.jsx)(`span`, {
                                        className: e.className,
                                        children: e.label
                                    }), (0, V.jsx)(`span`, {
                                        className: `text-token-text-tertiary`,
                                        children: (0, V.jsx)(de, {
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
        children: (0, V.jsx)(nt.Button, {
            type: `button`,
            "aria-label": t,
            "aria-haspopup": `menu`,
            "aria-expanded": i,
            tabIndex: -1,
            "data-state": i ? `open` : `closed`,
            className: w(`text-token-text-primary flex h-full items-center gap-1 rounded-lg px-2.5`, `dark:hover:bg-token-interactive-bg-secondary-hover hover:bg-black/5`, i && `bg-token-interactive-bg-secondary-selected`),
            children: p
        })
    })
}
var B, V, ct = e((() => {
    Ze(), rt(), xe(), O(), pe(), ue(), D(), B = n(N()), V = M()
}));

function lt(e) {
    "use forget";
    let t = (0, ut.c)(29),
        {
            onDismiss: n,
            editorView: r,
            toolbarContentRef: i,
            isToolbarOpen: a,
            dismissOnPointerDown: o,
            dismissOnEscapeKeyDown: s,
            consumeEscapeKeyDown: c,
            blockOutsidePointerDown: l,
            onEscapeKeyDown: u
        } = e,
        d = o === void 0 || o,
        f = s === void 0 || s,
        m = c !== void 0 && c,
        h = l !== void 0 && l,
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
    t[4] !== m || t[5] !== f || t[6] !== r?.dom || t[7] !== a || t[8] !== n || t[9] !== u ? (b = e => {
        if (e.key !== `Escape` || !a || (m && (e.preventDefault(), e.stopPropagation()), u?.(), !f)) return;
        n();
        let t = r?.dom;
        t && t.focus({
            preventScroll: !0
        })
    }, t[4] = m, t[5] = f, t[6] = r?.dom, t[7] = a, t[8] = n, t[9] = u, t[10] = b) : b = t[10];
    let x = b,
        C;
    t[11] !== h || t[12] !== y || t[13] !== _ || t[14] !== a || t[15] !== n ? (C = e => {
        let t = e.button === 0 && e.ctrlKey && p() && !S();
        if (!(_(e.target) || e.shiftKey && y(e.target) || !a || e.button !== 0 || t)) {
            if (h) {
                e.preventDefault(), e.stopPropagation();
                return
            }
            n(e.target)
        }
    }, t[11] = h, t[12] = y, t[13] = _, t[14] = a, t[15] = n, t[16] = C) : C = t[16];
    let w = C,
        T;
    t[17] !== d || t[18] !== r?.dom?.ownerDocument || t[19] !== x || t[20] !== w ? (T = () => {
        let e = r?.dom?.ownerDocument ?? (typeof document < `u` ? document : null);
        if (e) return e.addEventListener(`keydown`, x), d && e.addEventListener(`pointerdown`, w, {
            capture: !0
        }), () => {
            e.removeEventListener(`keydown`, x), d && e.removeEventListener(`pointerdown`, w, !0)
        }
    }, t[17] = d, t[18] = r?.dom?.ownerDocument, t[19] = x, t[20] = w, t[21] = T) : T = t[21];
    let ee;
    t[22] !== d || t[23] !== r || t[24] !== x || t[25] !== w ? (ee = [d, r, x, w], t[22] = d, t[23] = r, t[24] = x, t[25] = w, t[26] = ee) : ee = t[26], (0, dt.useEffect)(T, ee);
    let E;
    return t[27] === x ? E = t[28] : (E = {
        handleKeyDown: x
    }, t[27] = x, t[28] = E), E
}
var ut, dt, ft = e((() => {
    ut = le(), T(), dt = n(N())
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
    f(), k(), x(), gt = [l.Mod, `k`], _t = [l.Mod, l.Alt, `0`], vt = [l.Mod, l.Alt, `1`], yt = [l.Mod, l.Alt, `2`], bt = [l.Mod, l.Alt, `3`], xt = [l.Mod, l.Alt, `4`], St = [l.Mod, l.Alt, `5`], Ct = [l.Mod, l.Alt, `6`], new RegExp(String.raw`^\s*:::${A}\{[^}]*\}[\s\S]*?:::`, `m`), wt = new RegExp(String.raw`^\s*:::${A}`, `m`), Tt = new RegExp(String.raw`^\s*:::${A}(?:\s|\{|$)`), Et = /^\s*:::\s*$/, new RegExp(String.raw`^\s*:::${A}\s*\{\s*\}\s*$`)
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
        b = v === void 0 ? Ae : v,
        x;
    t[0] !== s || t[1] !== _ || t[2] !== n ? (x = !s && (_ ?? n.trim() === ``), t[0] = s, t[1] = _, t[2] = n, t[3] = x) : x = t[3];
    let S = x,
        C;
    t[4] === r ? C = t[5] : (C = e => r(e.target.value), t[4] = r, t[5] = C);
    let T;
    t[6] !== s || t[7] !== o || t[8] !== a ? (T = () => {
        if (s) {
            o();
            return
        }
        a()
    }, t[6] = s, t[7] = o, t[8] = a, t[9] = T) : T = t[9];
    let E;
    t[10] === h ? E = t[11] : (E = w(`mx-0! min-w-[300px]! ps-2.5! pe-9!`, h), t[10] = h, t[11] = E);
    let te = f ?? s,
        D;
    t[12] === g ? D = t[13] : (D = e => {
        g?.(e)
    }, t[12] = g, t[13] = D);
    let O;
    t[14] !== d || t[15] !== m || t[16] !== u || t[17] !== i || t[18] !== y || t[19] !== C || t[20] !== T || t[21] !== E || t[22] !== te || t[23] !== D || t[24] !== n ? (O = (0, W.jsx)(ee, {
        ref: m,
        value: n,
        onChange: C,
        placeholder: i,
        onSubmit: T,
        border: !1,
        className: E,
        name: u,
        autoFocus: d,
        disabled: te,
        selectAllOnFocus: y,
        onKeyDownCapture: D
    }), t[14] = d, t[15] = m, t[16] = u, t[17] = i, t[18] = y, t[19] = C, t[20] = T, t[21] = E, t[22] = te, t[23] = D, t[24] = n, t[25] = O) : O = t[25];
    let k;
    t[26] !== b || t[27] !== l || t[28] !== s || t[29] !== o || t[30] !== a || t[31] !== S || t[32] !== c ? (k = (0, W.jsx)(`div`, {
        className: `absolute end-1.5 top-1/2 flex -translate-y-1/2 items-center justify-center`,
        children: s ? (0, W.jsx)(z, {
            ariaLabel: l,
            size: 20,
            onClick: o
        }) : (0, W.jsx)(`button`, {
            className: w(`icon`, `composer-submit-btn composer-submit-button-color`),
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
        U = le(), it(), Se(), C(), D(), W = M()
    })),
    kt = t({
        RichTextFormatToolbar: () => Qt
    });

function At(e) {
    let {
        selection: t
    } = e.state;
    return t instanceof Ve && t.node.type.name === `writing_block_image` && tt.get(e.state) != null
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
    let i = r.schema.marks[F.proseMirrorMarkName()];
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
    let r = t.schema.marks[F.proseMirrorMarkName()];
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
    let r = t.schema.marks[F.proseMirrorMarkName()];
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
        } = e, o = r.schema.marks[F.proseMirrorMarkName()];
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
    let a = t.schema.marks[F.proseMirrorMarkName()];
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
    be(), Me(), Fe(), Ne(), Pe(), we(), Te(), d(), O(), r(), ge(), v(), f(), T(), ct(), ft(), Re(), J = n(N()), ce(), Dt(), Ue(), G(), R(), o(), i(), u(), fe(), ot(), j(), D(), ie(), Wt = n(et()), Y = M(), X = .5, Gt = `writing-block-open-link-mode`, Kt = 2e3, qt = 34, Z = /^https?:\/\//i, Jt = ``, Yt = (e, t) => Math.abs(e.left - t.left) < X && Math.abs(e.top - t.top) < X && Math.abs(e.width - t.width) < X && Math.abs(e.height - t.height) < X, Xt = e => typeof e.props.editable == `function` ? e.props.editable(e.state) : e.props.editable !== !1, Zt = (e, t) => {
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
    }, Q = se({
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
        toolbarContentRef: u,
        onToolbarOpenChange: d,
        fullscreenMode: f,
        isChecklistSupportEnabled: p = !1,
        disableStickyPlacement: v = !1,
        trailingSectionActions: x
    }) => {
        "use no forget";
        let S = _(),
            C = ne(),
            [T, ee] = (0, J.useState)(() => !Xt(e)),
            E = (0, J.useRef)(null),
            D = u ?? E,
            [O, k] = (0, J.useState)(!1),
            [A, j] = (0, J.useState)(null),
            [ie, M] = (0, J.useState)(!1),
            [se, ce] = (0, J.useState)(!1),
            [N, le] = (0, J.useState)(!1),
            [ue, de] = (0, J.useState)(!1),
            [fe, pe] = (0, J.useState)(Jt),
            ge = (0, J.useRef)(null),
            _e = (0, J.useRef)(!1),
            ve = (0, J.useRef)(!1),
            I = (0, J.useRef)(null),
            L = (0, J.useCallback)(e => {
                ve.current = e, de(e)
            }, []),
            be = me();
        (0, J.useEffect)(() => {
            let t = () => {
                ee(!Xt(e))
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
            d?.(O)
        }, [O, d]), (0, J.useEffect)(() => {
            M(!1)
        }, [A?.href]);
        let [xe, Se] = (0, J.useState)(!1), [Ce, we] = (0, J.useState)(!1), [Te, Ae] = (0, J.useState)(!1), Me = o?.show === !0, Ne = o?.shouldDisable === !0, Pe = o?.isLoading === !0, Fe = o?.onOpenRequested, Re = o?.shortcutBinding, Ve = Ne || Te, [Ue, Ze] = (0, J.useState)(!1), Qe = (0, J.useRef)(null), $e = (0, J.useCallback)(() => e.dom, [e]), et = (0, J.useRef)(null), R = (0, J.useRef)(null), tt = (0, J.useRef)(null), nt = (0, J.useRef)(null), [rt, it] = (0, J.useState)(0), z = (0, J.useRef)(!1), ot = (0, J.useRef)(!1), B = (0, J.useRef)(null), [V, ct] = (0, J.useState)(!1), [ut, dt] = (0, J.useState)(!1), [ft, pt] = (0, J.useState)(`paragraph`), H = (0, J.useCallback)(e => {
            e ?? (R.current = null);
            let t = et.current;
            t == null && e == null || t != null && e != null && Yt(t.selectionRect, e.selectionRect) && Yt(t.editorRect, e.editorRect) || (et.current = e, it(e => e + 1))
        }, []), mt = (0, J.useCallback)(() => {
            let t = e.state,
                {
                    from: n,
                    to: r,
                    empty: i,
                    $from: a
                } = t.selection,
                o = t.schema.marks[He.proseMirrorMarkName()],
                s = t.schema.marks[Ke.proseMirrorMarkName()];
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
                l = t.schema.nodes[Ye.proseMirrorNodeName()],
                u = t.schema.nodes[qe.proseMirrorNodeName()],
                d = t.schema.nodes[Je.proseMirrorNodeName()],
                f = t.schema.nodes.task_list_item;
            for (let e = a.depth; e >= 0; e--) {
                let t = a.node(e);
                if (p && t.type === f) {
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
        }, [e, p]), ht = re(() => {
            typeof window < `u` && tt.current != null && (window.cancelAnimationFrame(tt.current), tt.current = null)
        }), [gt, wt] = (0, J.useState)(!0), Tt = (0, J.useRef)(!0), [Et, Dt] = (0, J.useState)(!l), U = (0, J.useCallback)(e => {
            Tt.current !== e && (Tt.current = e, wt(e))
        }, []);
        y(() => {
            l && Dt(!1)
        }, [l]);
        let W = (0, J.useCallback)(() => {
                let t = $e(),
                    n = document.getSelection();
                if (t == null || At(e) || n == null || n.rangeCount === 0) return !0;
                let {
                    anchorNode: i,
                    focusNode: a
                } = n;
                return i != null && t.contains(i) || a != null && t.contains(a) ? Lt(n) ? !r || Rt(e, n) == null : !1 : !0
            }, [e, $e, r]),
            G = re(t => {
                typeof window > `u` || t == null || t.aborted || (ht(), tt.current = window.requestAnimationFrame(() => {
                    if (tt.current = null, t.aborted || l || z.current) return;
                    Dt(!0), L(!1);
                    let n = e.dom;
                    if (!n || At(e)) {
                        U(!0), j(null), H(null);
                        return
                    }
                    if (N) return;
                    o != null && Ae(o.isSelectionInside(e));
                    let i = window.getSelection(),
                        a = i != null && Lt(i);
                    if (i == null || i.rangeCount === 0 || a) {
                        let t = a && i.anchorNode != null && n.contains(i.anchorNode),
                            o = document.activeElement != null && n.contains(document.activeElement),
                            s = r && (t || o) ? Rt(e, t ? i : null) : null;
                        if (U(s == null), j(s), s == null) {
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
                        U(!0), j(null), mt(), H(null);
                        return
                    }
                    let c = r ? Ft(e) : null;
                    U(!1), j(c), mt();
                    let u = e.state.selection,
                        d = !u.empty && R.current?.from === u.from && R.current?.to === u.to ? R.current : null;
                    if (R.current != null && d == null && (R.current = null), d != null) {
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
            nt.current = e.signal;
            let t = () => {
                    U(W()), G(e.signal)
                },
                n = () => {
                    R.current = null, G(e.signal)
                };
            return document.addEventListener(`selectionchange`, t, {
                signal: e.signal
            }), window.addEventListener(`resize`, n, {
                signal: e.signal
            }), window.addEventListener(`scroll`, n, {
                capture: !0,
                signal: e.signal
            }), G(e.signal), () => {
                nt.current = null, e.abort(), ht()
            }
        }, [ht, e, W, G, U, l]), (0, J.useEffect)(() => {
            if (typeof window > `u` || S || !r) {
                ce(!1);
                return
            }
            let e = e => {
                    let t = oe(e) === `Meta`;
                    if (e.type === `keydown`) {
                        ce(e.metaKey || t);
                        return
                    }
                    if (t) {
                        ce(!1);
                        return
                    }
                    ce(e.metaKey)
                },
                t = () => {
                    ce(!1)
                };
            return window.addEventListener(`keydown`, e, !0), window.addEventListener(`keyup`, e, !0), window.addEventListener(`blur`, t), () => {
                window.removeEventListener(`keydown`, e, !0), window.removeEventListener(`keyup`, e, !0), window.removeEventListener(`blur`, t)
            }
        }, [S, r]), (0, J.useEffect)(() => {
            let t = e.dom;
            if (t != null) {
                if (!r || S || !se && !T) {
                    t.classList.remove(Gt);
                    return
                }
                return t.classList.add(Gt), () => {
                    t.classList.remove(Gt)
                }
            }
        }, [e, T, S, se, r]);
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
                    o = ze.near(a, -1);
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
                t ? i.pin(e) : i.unpin(e), Ze(t)
            }, [e, i]),
            q = (0, J.useCallback)(() => {
                le(!1), L(!1), pe(Jt), _e.current = !1
            }, [L]),
            Vt = (0, J.useCallback)(e => {
                if (e) {
                    if (Fe != null) {
                        Fe();
                        return
                    }
                    K(!0), Se(!0)
                } else K(!1), Se(!1)
            }, [Fe, K]),
            X = (0, J.useCallback)(() => {
                Pe || (Vt(!1), q(), I.current = null, Mt())
            }, [Mt, Pe, q, Vt]),
            {
                handleKeyDown: qt
            } = lt({
                editorView: e,
                toolbarContentRef: D,
                isToolbarOpen: O,
                onDismiss: X,
                dismissOnPointerDown: !S
            }),
            Z = (0, J.useCallback)((t, n) => {
                let r = e.dom;
                if (!r) return;
                let i = n?.maintainToolbarPosition === !0,
                    a = e.state.selection;
                i && !a.empty && et.current != null ? R.current = {
                    from: a.from,
                    to: a.to,
                    geometry: et.current
                } : i || (R.current = null), z.current = !0, ot.current = !i, typeof window < `u` && B.current && (window.clearTimeout(B.current), B.current = null), r.focus({
                    preventScroll: !0
                });
                try {
                    t(), mt()
                } finally {
                    typeof window < `u` ? B.current = window.setTimeout(() => {
                        z.current = !1, ot.current = !1, B.current = null, i || G(nt.current)
                    }, 0) : (z.current = !1, ot.current = !1)
                }
            }, [e, mt, G]),
            Qt = (0, J.useCallback)(t => {
                Z(() => {
                    let {
                        state: n,
                        dispatch: r
                    } = e, i = n.schema.marks[t];
                    i && Ge(n, r, i)
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
                let o = Be.create(n.doc, i, a);
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
                }, _e.current = !0, L(!0), pe(n ?? Jt), M(!1), le(!0), Z(() => {
                    let {
                        state: t,
                        dispatch: n
                    } = e, r = Math.min(Math.max(0, i), t.doc.content.size), o = Math.min(Math.max(r, a), t.doc.content.size);
                    if (r === o) return;
                    let s = Be.create(t.doc, r, o);
                    t.selection.eq(s) || n(t.tr.setSelection(s))
                }, {
                    maintainToolbarPosition: !0
                }), K(!0))
            }, [e, Z, L, K]),
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
                let t = Ht(fe);
                if (t == null) return;
                let n = null;
                Z(() => {
                    let {
                        state: r,
                        dispatch: i
                    } = e, a = r.schema.marks[F.proseMirrorMarkName()];
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
                    d = d.setSelection(ze.near(d.doc.resolve(p), -1)), i(d.scrollIntoView()), n = {
                        href: t,
                        isAutolink: u,
                        from: s,
                        to: f
                    }
                }, {
                    maintainToolbarPosition: !1
                }), K(!1), q(), I.current = null, j(n)
            }, [e, fe, Z, K, q]);
        (0, J.useEffect)(() => {
            if (!N || l || typeof window > `u`) return;
            _e.current = !1;
            let e = window.requestAnimationFrame(() => {
                ge.current?.focus()
            });
            return () => {
                window.cancelAnimationFrame(e)
            }
        }, [N, l]), (0, J.useEffect)(() => {
            r || (j(null), M(!1), N && (q(), I.current = null, xe || K(!1)))
        }, [N, r, xe, q, K]), (0, J.useEffect)(() => () => {
            typeof window < `u` && B.current != null && (window.clearTimeout(B.current), B.current = null), z.current = !1, ot.current = !1
        }, []), (0, J.useEffect)(() => {
            if (!Me || Re == null) return;
            let t = e.dom;
            we(e.hasFocus());
            let n = () => {
                    we(!0)
                },
                r = () => {
                    if (typeof window > `u`) {
                        we(e.hasFocus());
                        return
                    }
                    window.requestAnimationFrame(() => {
                        we(e.hasFocus())
                    })
                };
            return t.addEventListener(`focusin`, n), t.addEventListener(`focusout`, r), () => {
                t.removeEventListener(`focusin`, n), t.removeEventListener(`focusout`, r)
            }
        }, [e, Re, Me]), (0, J.useEffect)(() => {
            let n = () => {
                Qe.current &&= (Qe.current.action(), Qe.current.disableGroups(), null)
            };
            return !T && Ce && e.hasFocus() && Me && Re != null ? Qe.current = {
                action: c({
                    key: `magicEdit`,
                    action: () => e.hasFocus() ? (!e.state.selection.empty && !Ve && Vt(!0), !0) : !1,
                    actionMessageDescriptor: t.formatMessage({
                        id: `writingBlocks.formatToolbar.magicEdit.toggle`,
                        defaultMessage: `Toggle magic edit`
                    }),
                    group: h.Chat,
                    bindings: [{
                        binding: Re
                    }],
                    scope: `thread`
                }),
                disableGroups: s(Object.values(h).filter(e => e !== h.Chat))
            } : n(), () => {
                n()
            }
        }, [e, t, Ce, T, Ve, Re, Me, Vt]);
        let an = (0, J.useCallback)(t => {
                Z(() => {
                    t === `checklist` ? Xe(e) : We(e, t)
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
                return p && e.state.schema.nodes.task_list_item && n.push({
                    id: `checklist`,
                    label: t.formatMessage(Q.checklist),
                    shortcut: Ct
                }), n
            }, [e, t, p]),
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
                return (t.empty ? Pt(e) : Ft(e)) ?? A
            }, [A, e]),
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
                    if (M(!0), be(() => M(!1), Kt), typeof navigator > `u` || typeof navigator.clipboard?.writeText != `function`) {
                        ae.error(`Clipboard API unavailable for writing block link copy`);
                        return
                    }
                    navigator.clipboard.writeText(e).catch(e => {
                        ae.error(`Failed to copy writing block link`, {
                            error: e
                        })
                    })
                }
            }, [$, be, ie]),
            _n = (0, J.useCallback)(() => {
                let t = $();
                if (t == null) return;
                let n = e.state.selection.empty;
                L(!0), Z(() => {
                    let {
                        state: n,
                        dispatch: r
                    } = e, i = typeof window > `u` ? null : window.getSelection(), a = Pt(e) ?? Ft(e) ?? It(e, i) ?? t, o = n.schema.marks[F.proseMirrorMarkName()];
                    if (o == null) return;
                    let s = Math.min(Math.max(0, a.from), n.doc.content.size),
                        c = Math.min(Math.max(s, a.to), n.doc.content.size);
                    if (s === c) return;
                    let l = n.tr.removeMark(s, c, o),
                        u = n.selection.map(l.doc, l.mapping);
                    l = l.setSelection(u), r(l.scrollIntoView())
                }, {
                    maintainToolbarPosition: !1
                }), M(!1), j(null), n && U(!0)
            }, [e, $, Z, L, U]),
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
                e.focus(), be(() => {
                    e.hasFocus() || e.focus()
                }, 0)
            }, [e, be]),
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
            Ln = $e(),
            [Rn, zn] = (0, J.useState)(null);
        (0, J.useEffect)(() => {
            if (Pe) {
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
                    t.cancel(), e.cancel(), Pn(!1), In(!0), G(nt.current)
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
        }, [Ln, Pe, G]), y(() => {
            if (!gt) try {
                let e = Zt(et.current, {
                    width: Mn,
                    height: jn
                });
                e != null && zn(e)
            } catch (e) {
                ae.error(`Invalid position in getToolbarPosition`, {
                    error: e
                })
            }
        }, [jn, Mn, gt, En, rt]);
        let Bn = _e.current || N || I.current != null,
            Vn = r && mn != null && !Ue && !Bn,
            Hn = (ve.current || ue || z.current && ot.current) && !Vn && !Bn,
            Un = Vn && !mn?.isAutolink,
            Wn = Un && mn != null ? Ut(mn.href) : null,
            Gn = se && !S && Vn,
            Kn = Bt(e),
            qn = xe || !l && !Te && (!gt || !e.state.selection.empty || Ue || r && (N || ue)),
            Jn = !l && Et && !Te && (!gt || Ue || Bn && r) && An && Rn != null && Fn && !Gn && !Hn,
            Yn = f || !v;
        return (0, J.useEffect)(() => {
            k?.(Jn)
        }, [Jn, k]), qn ? (0, Y.jsx)(Y.Fragment, {
            children: (0, Y.jsx)(g, {
                asChild: !0,
                ...C,
                children: (0, Y.jsx)(`div`, {
                    style: Jn && Rn ? {
                        top: Rn.top,
                        left: Rn.left,
                        height: Rn.height
                    } : void 0,
                    className: w(`pointer-events-none fixed top-0 h-0`, !Jn && `invisible overflow-clip`),
                    ref: D,
                    children: (0, Y.jsx)(`div`, {
                        ref: kn,
                        style: Yn ? void 0 : {
                            left: 0
                        },
                        onPointerDownCapture: xn,
                        className: w(Yn ? [`sticky`, f ? `top-2` : `@w-xl/main:top-2 top-[calc(var(--header-height,48px)+48px+8px)]`] : `absolute top-0`, Nn ? `pointer-events-none` : `pointer-events-auto`),
                        children: (0, Y.jsx)(he, {
                            children: Vn ? (0, Y.jsxs)(Y.Fragment, {
                                children: [Wn != null && (0, Y.jsx)(`span`, {
                                    className: `text-token-text-secondary max-w-[220px] truncate px-2 text-xs`,
                                    "data-testid": `writing-block-link-preview`,
                                    title: mn?.href,
                                    children: Wn
                                }), Un && (0, Y.jsx)(P, {
                                    label: t.formatMessage(Q.editLink),
                                    hideLabel: !0,
                                    icon: De,
                                    onClick: Cn,
                                    onMouseDown: yn
                                }), Un && (0, Y.jsx)(P, {
                                    label: t.formatMessage(Q.clearLink),
                                    hideLabel: !0,
                                    icon: b.Unlink,
                                    onClick: _n,
                                    onMouseDown: e => e.preventDefault()
                                }), Un && (0, Y.jsx)(ye, {}), (0, Y.jsx)(P, {
                                    label: t.formatMessage(Q.copyLink),
                                    icon: ie ? Oe : ke,
                                    iconClassName: `!text-token-text-primary`,
                                    onClick: gn,
                                    onMouseDown: e => e.preventDefault()
                                }), (0, Y.jsx)(P, {
                                    label: t.formatMessage(Q.openLink),
                                    icon: Ie,
                                    iconClassName: `!text-token-text-primary`,
                                    onClick: hn,
                                    onMouseDown: e => e.preventDefault()
                                })]
                            }) : r && Bn ? (0, Y.jsx)(`div`, {
                                className: `flex min-w-0 flex-1`,
                                children: (0, Y.jsx)(Ot, {
                                    inputRef: ge,
                                    value: fe,
                                    onChange: pe,
                                    placeholder: t.formatMessage(Q.linkInputPlaceholder),
                                    onSubmit: rn,
                                    onCancel: en,
                                    isLoading: !1,
                                    submitAriaLabel: t.formatMessage(Q.linkApplyAriaLabel),
                                    submitIcon: Oe,
                                    cancelAriaLabel: t.formatMessage(Q.linkCancelAriaLabel),
                                    disabled: !1,
                                    selectAllOnFocus: !0,
                                    inputClassName: `w-full`,
                                    onKeyDownCapture: e => {
                                        if (m(e)) {
                                            e.preventDefault(), e.stopPropagation();
                                            return
                                        }
                                        if (te(e)) {
                                            e.preventDefault(), e.stopPropagation(), en();
                                            return
                                        }
                                        qt(e)
                                    },
                                    isSubmitDisabled: Ht(fe) == null
                                })
                            }) : Hn ? null : (0, Y.jsxs)(Y.Fragment, {
                                children: [Me && o?.renderTool({
                                    editorView: e,
                                    intl: t,
                                    isMagicEditOpen: xe,
                                    toggleMagicEdit: Vt,
                                    isMagicEditDisabled: Ve,
                                    handleKeyDown: qt
                                }), !xe && (0, Y.jsxs)(Y.Fragment, {
                                    children: [r && (0, Y.jsx)(P, {
                                        label: t.formatMessage(Q.link),
                                        hideLabel: !0,
                                        icon: Ee,
                                        onClick: nn,
                                        onMouseDown: e => e.preventDefault(),
                                        isDisabled: Kn
                                    }), (0, Y.jsx)(P, {
                                        label: t.formatMessage(Q.bold),
                                        hideLabel: !0,
                                        icon: je,
                                        onClick: () => Qt(He.proseMirrorMarkName()),
                                        onMouseDown: Sn,
                                        preserveEditorFocusOnPointerDown: !0,
                                        isActive: V
                                    }), (0, Y.jsx)(P, {
                                        label: t.formatMessage(Q.italic),
                                        hideLabel: !0,
                                        icon: Le,
                                        onClick: () => Qt(Ke.proseMirrorMarkName()),
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
                                    }), x != null && (0, J.cloneElement)(x, {
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
//# sourceMappingURL=0631b696-l0owp7a0mw74ix3z.js.map
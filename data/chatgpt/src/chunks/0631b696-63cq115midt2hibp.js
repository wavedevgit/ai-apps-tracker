import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $M as r,
    Ant as i,
    Ett as a,
    GZ as o,
    Gb as s,
    Ib as c,
    JZ as l,
    Lb as u,
    Pi as d,
    Ptt as f,
    Qw as p,
    Sx as m,
    Ti as h,
    UX as g,
    XZ as _,
    _tt as v,
    _x as y,
    ax as b,
    b5 as x,
    cx as S,
    eN as C,
    eT as w,
    ex as T,
    hx as E,
    i_ as D,
    ix as O,
    jtt as ee,
    ki as k,
    knt as A,
    lx as te,
    mx as ne,
    r_ as re,
    vN as ie,
    xx as ae,
    y5 as j,
    yN as oe
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as M,
    Ln as se,
    Rn as ce,
    Vn as N,
    wn as le
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    B2t as ue,
    C0t as de,
    FS as fe,
    PS as pe,
    S0t as me,
    Sv as he,
    T0t as ge,
    bv as P,
    tzn as F,
    x0t as _e,
    xv as ve,
    y0t as I,
    yv as ye,
    z2t as L
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Ci as be,
    DC as xe,
    Dg as Se,
    EC as Ce,
    FS as we,
    Fx as Te,
    IS as Ee,
    Ix as De,
    Og as Oe,
    Qy as ke,
    Si as Ae,
    Xy as je,
    Yy as Me,
    Zy as Ne,
    bi as Pe,
    ix as Fe,
    rx as Ie,
    xi as Le
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    At as Re,
    Dt as ze,
    kt as Be,
    wt as Ve
} from "./82782bc9-h658ejxn3ufkvr7a.js";
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
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    c as Ze,
    o as Qe,
    s as $e
} from "./31cec8d8-ejzahhq8v425zkie.js";
import {
    t as et
} from "./4c0f1f8e-go23ccluwcn7b4ji.js";
import {
    t as R,
    y as tt
} from "./2d39f94f-dsodv7khzeu3rwj5.js";
import {
    n as nt,
    r as rt
} from "./781797c9-mn2bk852uqxf6ehm.js";
import {
    n as it,
    t as z
} from "./2ac7f54f-mxkwezsilbh3ve8a.js";
import {
    n as at,
    t as ot
} from "./0379e822-e9c3afz372oxb8wm.js";

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
    let l = u(),
        d = (0, B.useRef)(null),
        [f, p] = (0, B.useState)(null);
    (0, B.useEffect)(() => {
        let e = d.current;
        !e || typeof document > `u` || p(e.closest(`[aria-hidden="true"]`) != null)
    }, []);
    let m = (0, V.jsxs)(V.Fragment, {
        children: [(0, V.jsx)(`span`, {
            className: `text-sm font-medium`,
            children: e
        }), (0, V.jsx)(Ce, {
            "aria-hidden": !0,
            className: `icon-xs text-current`
        })]
    });
    return f === !1 ? (0, V.jsx)(`div`, {
        ref: d,
        "data-toolbar-surface": `true`,
        className: `h-full`,
        children: (0, V.jsxs)(me, {
            open: i,
            onOpenChange: e => {
                e && s(), a(e)
            },
            children: [(0, V.jsx)(de, {
                asChild: !0,
                children: (0, V.jsx)(nt.Button, {
                    type: `button`,
                    "aria-label": t,
                    "aria-haspopup": `menu`,
                    "aria-expanded": i,
                    className: j(`text-token-text-primary flex h-full items-center gap-1 rounded-lg px-2.5`, `dark:hover:bg-token-interactive-bg-secondary-hover hover:bg-black/5`, `data-[state=open]:bg-token-interactive-bg-secondary-selected`),
                    onMouseDown: e => e.preventDefault(),
                    onPointerDownCapture: s,
                    onKeyDownCapture: e => {
                        (e.key === ` ` || e.key === `Enter`) && s()
                    },
                    children: m
                })
            }), (0, V.jsx)(_e, {
                ...l,
                children: (0, V.jsx)(I, {
                    align: `start`,
                    alignOffset: -8,
                    sideOffset: 8,
                    className: j($e.toolbar, `popover`, `bg-token-main-surface-primary w-fit rounded-2xl p-1.5`, Qe),
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
                                className: j(`text-token-text-primary dark:hover:bg-token-main-surface-secondary rounded-[10px] py-1.5 ps-3 pe-1 text-start text-sm hover:bg-[#f5f5f5]`, t && `dark:bg-token-main-surface-secondary bg-[#f5f5f5] font-medium`),
                                onPointerDown: e => e.preventDefault(),
                                onClick: () => o(e.id),
                                children: (0, V.jsxs)(`span`, {
                                    className: `flex w-full items-center justify-between gap-8`,
                                    children: [(0, V.jsx)(`span`, {
                                        className: e.className,
                                        children: e.label
                                    }), (0, V.jsx)(`span`, {
                                        className: `text-token-text-tertiary`,
                                        children: (0, V.jsx)(L, {
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
        ref: d,
        "data-toolbar-surface": `true`,
        className: `h-full`,
        children: (0, V.jsx)(nt.Button, {
            type: `button`,
            "aria-label": t,
            "aria-haspopup": `menu`,
            "aria-expanded": i,
            tabIndex: -1,
            "data-state": i ? `open` : `closed`,
            className: j(`text-token-text-primary flex h-full items-center gap-1 rounded-lg px-2.5`, `dark:hover:bg-token-interactive-bg-secondary-hover hover:bg-black/5`, i && `bg-token-interactive-bg-secondary-selected`),
            children: m
        })
    })
}
var B, V, ct = e((() => {
    Ze(), rt(), xe(), c(), ue(), ge(), x(), B = n(N()), V = M()
}));

function lt(e) {
    "use forget";
    let t = (0, ut.c)(29),
        {
            onDismiss: n,
            editorView: r,
            toolbarContentRef: i,
            isToolbarOpen: o,
            dismissOnPointerDown: s,
            dismissOnEscapeKeyDown: c,
            consumeEscapeKeyDown: l,
            blockOutsidePointerDown: u,
            onEscapeKeyDown: d
        } = e,
        p = s === void 0 || s,
        m = c === void 0 || c,
        h = l !== void 0 && l,
        g = u !== void 0 && u,
        _;
    t[0] === i ? _ = t[1] : (_ = e => {
        if (!(e instanceof Node)) return !1;
        let t = i.current;
        return t && t.contains(e) ? !0 : e instanceof Element && e.closest(`[data-toolbar-surface="true"]`) != null
    }, t[0] = i, t[1] = _);
    let v = _,
        y;
    t[2] === r?.dom ? y = t[3] : (y = e => e instanceof Node ? r?.dom.contains(e) ?? !1 : !1, t[2] = r?.dom, t[3] = y);
    let b = y,
        x;
    t[4] !== h || t[5] !== m || t[6] !== r?.dom || t[7] !== o || t[8] !== n || t[9] !== d ? (x = e => {
        if (e.key !== `Escape` || !o || (h && (e.preventDefault(), e.stopPropagation()), d?.(), !m)) return;
        n();
        let t = r?.dom;
        t && t.focus({
            preventScroll: !0
        })
    }, t[4] = h, t[5] = m, t[6] = r?.dom, t[7] = o, t[8] = n, t[9] = d, t[10] = x) : x = t[10];
    let S = x,
        C;
    t[11] !== g || t[12] !== b || t[13] !== v || t[14] !== o || t[15] !== n ? (C = e => {
        let t = e.button === 0 && e.ctrlKey && f() && !a();
        if (!(v(e.target) || e.shiftKey && b(e.target) || !o || e.button !== 0 || t)) {
            if (g) {
                e.preventDefault(), e.stopPropagation();
                return
            }
            n(e.target)
        }
    }, t[11] = g, t[12] = b, t[13] = v, t[14] = o, t[15] = n, t[16] = C) : C = t[16];
    let w = C,
        T;
    t[17] !== p || t[18] !== r?.dom?.ownerDocument || t[19] !== S || t[20] !== w ? (T = () => {
        let e = r?.dom?.ownerDocument ?? (typeof document < `u` ? document : null);
        if (e) return e.addEventListener(`keydown`, S), p && e.addEventListener(`pointerdown`, w, {
            capture: !0
        }), () => {
            e.removeEventListener(`keydown`, S), p && e.removeEventListener(`pointerdown`, w, !0)
        }
    }, t[17] = p, t[18] = r?.dom?.ownerDocument, t[19] = S, t[20] = w, t[21] = T) : T = t[21];
    let E;
    t[22] !== p || t[23] !== r || t[24] !== S || t[25] !== w ? (E = [p, r, S, w], t[22] = p, t[23] = r, t[24] = S, t[25] = w, t[26] = E) : E = t[26], (0, dt.useEffect)(T, E);
    let D;
    return t[27] === S ? D = t[28] : (D = {
        handleKeyDown: S
    }, t[27] = S, t[28] = D), D
}
var ut, dt, ft = e((() => {
    ut = le(), v(), dt = n(N())
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
    for (let [e, s] of n.entries()) {
        if (a) {
            if (Et.test(s)) {
                t.closeBuffer(a, s, r), a = null;
                continue
            }
            t.pushBodyLine(a, s);
            continue
        }
        if (i.length > 0) {
            r.push(s);
            let t = o(s, {
                    lines: n,
                    index: e
                }),
                a = i.at(-1);
            t && a && ht(t, a) && i.pop();
            continue
        }
        let c = o(s, {
            lines: n,
            index: e
        });
        if (/^(?: {4,}| {0,3}\t)/.test(s) && c == null) {
            r.push(s);
            continue
        }
        if (Tt.test(s)) {
            a = t.startBuffer(s);
            continue
        }
        if (!c) {
            r.push(s);
            continue
        }
        i.push({
            marker: c.marker,
            length: c.fence.length
        }), r.push(s)
    }
    return a && t.flushDanglingBuffer(a, r), r.join(`
`)
}

function ht(e, t) {
    return e.info.trim().length === 0 && e.marker === t.marker && e.fence.length >= t.length
}
var gt, _t, vt, yt, bt, xt, St, Ct, wt, Tt, Et, Dt = e((() => {
    y(), g(), _(), gt = [E.Mod, `k`], _t = [E.Mod, E.Alt, `0`], vt = [E.Mod, E.Alt, `1`], yt = [E.Mod, E.Alt, `2`], bt = [E.Mod, E.Alt, `3`], xt = [E.Mod, E.Alt, `4`], St = [E.Mod, E.Alt, `5`], Ct = [E.Mod, E.Alt, `6`], new RegExp(String.raw`^\s*:::${l}\{[^}]*\}[\s\S]*?:::`, `m`), wt = new RegExp(String.raw`^\s*:::${l}`, `m`), Tt = new RegExp(String.raw`^\s*:::${l}(?:\s|\{|$)`), Et = /^\s*:::\s*$/, new RegExp(String.raw`^\s*:::${l}\s*\{\s*\}\s*$`)
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
            isLoading: c,
            submitAriaLabel: l,
            cancelAriaLabel: u,
            name: d,
            autoFocus: f,
            disabled: p,
            selectAllOnFocus: m,
            inputRef: h,
            inputClassName: g,
            onKeyDownCapture: _,
            isSubmitDisabled: v,
            submitIcon: y
        } = e,
        b = m !== void 0 && m,
        x = y === void 0 ? Oe : y,
        S;
    t[0] !== c || t[1] !== v || t[2] !== n ? (S = !c && (v ?? n.trim() === ``), t[0] = c, t[1] = v, t[2] = n, t[3] = S) : S = t[3];
    let C = S,
        w;
    t[4] === r ? w = t[5] : (w = e => r(e.target.value), t[4] = r, t[5] = w);
    let T;
    t[6] !== c || t[7] !== o || t[8] !== a ? (T = () => {
        if (c) {
            o();
            return
        }
        a()
    }, t[6] = c, t[7] = o, t[8] = a, t[9] = T) : T = t[9];
    let E;
    t[10] === g ? E = t[11] : (E = j(`mx-0! min-w-[300px]! ps-2.5! pe-9!`, g), t[10] = g, t[11] = E);
    let D = p ?? c,
        O;
    t[12] === _ ? O = t[13] : (O = e => {
        _?.(e)
    }, t[12] = _, t[13] = O);
    let ee;
    t[14] !== f || t[15] !== h || t[16] !== d || t[17] !== i || t[18] !== b || t[19] !== w || t[20] !== T || t[21] !== E || t[22] !== D || t[23] !== O || t[24] !== n ? (ee = (0, W.jsx)(s, {
        ref: h,
        value: n,
        onChange: w,
        placeholder: i,
        onSubmit: T,
        border: !1,
        className: E,
        name: d,
        autoFocus: f,
        disabled: D,
        selectAllOnFocus: b,
        onKeyDownCapture: O
    }), t[14] = f, t[15] = h, t[16] = d, t[17] = i, t[18] = b, t[19] = w, t[20] = T, t[21] = E, t[22] = D, t[23] = O, t[24] = n, t[25] = ee) : ee = t[25];
    let k;
    t[26] !== x || t[27] !== u || t[28] !== c || t[29] !== o || t[30] !== a || t[31] !== C || t[32] !== l ? (k = (0, W.jsx)(`div`, {
        className: `absolute end-1.5 top-1/2 flex -translate-y-1/2 items-center justify-center`,
        children: c ? (0, W.jsx)(z, {
            ariaLabel: u,
            size: 20,
            onClick: o
        }) : (0, W.jsx)(`button`, {
            className: j(`icon`, `composer-submit-btn composer-submit-button-color`),
            onClick: a,
            disabled: C,
            "aria-label": l,
            children: (0, W.jsx)(x, {
                className: `icon-xs`
            })
        })
    }), t[26] = x, t[27] = u, t[28] = c, t[29] = o, t[30] = a, t[31] = C, t[32] = l, t[33] = k) : k = t[33];
    let A;
    return t[34] !== k || t[35] !== ee ? (A = (0, W.jsxs)(`div`, {
        className: `relative`,
        children: [ee, k]
    }), t[34] = k, t[35] = ee, t[36] = A) : A = t[36], A
}
var U, W, G = e((() => {
        U = le(), it(), Se(), T(), x(), W = M()
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
    be(), ke(), je(), Pe(), Ie(), we(), Te(), m(), c(), k(), he(), b(), y(), v(), ct(), ft(), Re(), J = n(N()), ce(), Dt(), Ue(), G(), R(), A(), r(), ie(), pe(), ot(), w(), x(), D(), Wt = n(et()), Y = M(), X = .5, Gt = `writing-block-open-link-mode`, Kt = 2e3, qt = 34, Z = /^https?:\/\//i, Jt = ``, Yt = (e, t) => Math.abs(e.left - t.left) < X && Math.abs(e.top - t.top) < X && Math.abs(e.width - t.width) < X && Math.abs(e.height - t.height) < X, Xt = e => typeof e.props.editable == `function` ? e.props.editable(e.state) : e.props.editable !== !1, Zt = (e, t) => {
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
        selectionPin: a,
        magicEdit: o,
        suppressToolbar: s = !1,
        toolbarContentRef: c,
        onToolbarOpenChange: l,
        fullscreenMode: f,
        isChecklistSupportEnabled: m = !1,
        disableStickyPlacement: g = !1,
        trailingSectionActions: _
    }) => {
        "use no forget";
        let v = ee(),
            y = u(),
            [b, x] = (0, J.useState)(() => !Xt(e)),
            w = (0, J.useRef)(null),
            T = c ?? w,
            [E, D] = (0, J.useState)(!1),
            [k, A] = (0, J.useState)(null),
            [ie, M] = (0, J.useState)(!1),
            [se, ce] = (0, J.useState)(!1),
            [N, le] = (0, J.useState)(!1),
            [ue, de] = (0, J.useState)(!1),
            [pe, me] = (0, J.useState)(Jt),
            he = (0, J.useRef)(null),
            ge = (0, J.useRef)(!1),
            _e = (0, J.useRef)(!1),
            I = (0, J.useRef)(null),
            L = (0, J.useCallback)(e => {
                _e.current = e, de(e)
            }, []),
            be = fe();
        (0, J.useEffect)(() => {
            let t = () => {
                x(!Xt(e))
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
            l?.(E)
        }, [E, l]), (0, J.useEffect)(() => {
            M(!1)
        }, [k?.href]);
        let [xe, Se] = (0, J.useState)(!1), [Ce, we] = (0, J.useState)(!1), [Te, Oe] = (0, J.useState)(!1), ke = o?.show === !0, je = o?.shouldDisable === !0, Pe = o?.isLoading === !0, Ie = o?.onOpenRequested, Re = o?.shortcutBinding, Ve = je || Te, [Ue, Ze] = (0, J.useState)(!1), Qe = (0, J.useRef)(null), $e = (0, J.useCallback)(() => e.dom, [e]), et = (0, J.useRef)(null), R = (0, J.useRef)(null), tt = (0, J.useRef)(null), nt = (0, J.useRef)(null), [rt, it] = (0, J.useState)(0), z = (0, J.useRef)(!1), ot = (0, J.useRef)(!1), B = (0, J.useRef)(null), [V, ct] = (0, J.useState)(!1), [ut, dt] = (0, J.useState)(!1), [ft, pt] = (0, J.useState)(`paragraph`), H = (0, J.useCallback)(e => {
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
        }, [e, m]), ht = C(() => {
            typeof window < `u` && tt.current != null && (window.cancelAnimationFrame(tt.current), tt.current = null)
        }), [gt, wt] = (0, J.useState)(!0), Tt = (0, J.useRef)(!0), [Et, Dt] = (0, J.useState)(!s), U = (0, J.useCallback)(e => {
            Tt.current !== e && (Tt.current = e, wt(e))
        }, []);
        oe(() => {
            s && Dt(!1)
        }, [s]);
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
            G = C(t => {
                typeof window > `u` || t == null || t.aborted || (ht(), tt.current = window.requestAnimationFrame(() => {
                    if (tt.current = null, t.aborted || s || z.current) return;
                    Dt(!0), L(!1);
                    let n = e.dom;
                    if (!n || At(e)) {
                        U(!0), A(null), H(null);
                        return
                    }
                    if (N) return;
                    o != null && Oe(o.isSelectionInside(e));
                    let i = window.getSelection(),
                        a = i != null && Lt(i);
                    if (i == null || i.rangeCount === 0 || a) {
                        let t = a && i.anchorNode != null && n.contains(i.anchorNode),
                            o = document.activeElement != null && n.contains(document.activeElement),
                            s = r && (t || o) ? Rt(e, t ? i : null) : null;
                        if (U(s == null), A(s), s == null) {
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
                    let c = i.getRangeAt(0);
                    if (!c || !n.contains(c.commonAncestorContainer)) {
                        U(!0), A(null), mt(), H(null);
                        return
                    }
                    let l = r ? Ft(e) : null;
                    U(!1), A(l), mt();
                    let u = e.state.selection,
                        d = !u.empty && R.current?.from === u.from && R.current?.to === u.to ? R.current : null;
                    if (R.current != null && d == null && (R.current = null), d != null) {
                        H(d.geometry);
                        return
                    }
                    let f = c.getBoundingClientRect();
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
            if (typeof document > `u` || typeof window > `u` || s) return;
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
        }, [ht, e, W, G, U, s]), (0, J.useEffect)(() => {
            if (typeof window > `u` || v || !r) {
                ce(!1);
                return
            }
            let e = e => {
                    let t = O(e) === `Meta`;
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
        }, [v, r]), (0, J.useEffect)(() => {
            let t = e.dom;
            if (t != null) {
                if (!r || v || !se && !b) {
                    t.classList.remove(Gt);
                    return
                }
                return t.classList.add(Gt), () => {
                    t.classList.remove(Gt)
                }
            }
        }, [e, b, v, se, r]);
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
                t ? a.pin(e) : a.unpin(e), Ze(t)
            }, [e, a]),
            q = (0, J.useCallback)(() => {
                le(!1), L(!1), me(Jt), ge.current = !1
            }, [L]),
            Vt = (0, J.useCallback)(e => {
                if (e) {
                    if (Ie != null) {
                        Ie();
                        return
                    }
                    K(!0), Se(!0)
                } else K(!1), Se(!1)
            }, [Ie, K]),
            X = (0, J.useCallback)(() => {
                Pe || (Vt(!1), q(), I.current = null, Mt())
            }, [Mt, Pe, q, Vt]),
            {
                handleKeyDown: qt
            } = lt({
                editorView: e,
                toolbarContentRef: T,
                isToolbarOpen: E,
                onDismiss: X,
                dismissOnPointerDown: !v
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
                }, ge.current = !0, L(!0), me(n ?? Jt), M(!1), le(!0), Z(() => {
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
                let t = Ht(pe);
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
                }), K(!1), q(), I.current = null, A(n)
            }, [e, pe, Z, K, q]);
        (0, J.useEffect)(() => {
            if (!N || s || typeof window > `u`) return;
            ge.current = !1;
            let e = window.requestAnimationFrame(() => {
                he.current?.focus()
            });
            return () => {
                window.cancelAnimationFrame(e)
            }
        }, [N, s]), (0, J.useEffect)(() => {
            r || (A(null), M(!1), N && (q(), I.current = null, xe || K(!1)))
        }, [N, r, xe, q, K]), (0, J.useEffect)(() => () => {
            typeof window < `u` && B.current != null && (window.clearTimeout(B.current), B.current = null), z.current = !1, ot.current = !1
        }, []), (0, J.useEffect)(() => {
            if (!ke || Re == null) return;
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
        }, [e, Re, ke]), (0, J.useEffect)(() => {
            let n = () => {
                Qe.current &&= (Qe.current.action(), Qe.current.disableGroups(), null)
            };
            return !b && Ce && e.hasFocus() && ke && Re != null ? Qe.current = {
                action: d({
                    key: `magicEdit`,
                    action: () => e.hasFocus() ? (!e.state.selection.empty && !Ve && Vt(!0), !0) : !1,
                    actionMessageDescriptor: t.formatMessage({
                        id: `writingBlocks.formatToolbar.magicEdit.toggle`,
                        defaultMessage: `Toggle magic edit`
                    }),
                    group: ne.Chat,
                    bindings: [{
                        binding: Re
                    }],
                    scope: `thread`
                }),
                disableGroups: h(Object.values(ne).filter(e => e !== ne.Chat))
            } : n(), () => {
                n()
            }
        }, [e, t, Ce, b, Ve, Re, ke, Vt]);
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
                return (t.empty ? Pt(e) : Ft(e)) ?? k
            }, [k, e]),
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
                        i.error(`Clipboard API unavailable for writing block link copy`);
                        return
                    }
                    navigator.clipboard.writeText(e).catch(e => {
                        i.error(`Failed to copy writing block link`, {
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
                }), M(!1), A(null), n && U(!0)
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
            let e = re(() => {
                    In(!0)
                }, 200, {
                    leading: !1
                }),
                t = re(() => {
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
        }, [Ln, Pe, G]), oe(() => {
            if (!gt) try {
                let e = Zt(et.current, {
                    width: Mn,
                    height: jn
                });
                e != null && zn(e)
            } catch (e) {
                i.error(`Invalid position in getToolbarPosition`, {
                    error: e
                })
            }
        }, [jn, Mn, gt, En, rt]);
        let Bn = ge.current || N || I.current != null,
            Vn = r && mn != null && !Ue && !Bn,
            Hn = (_e.current || ue || z.current && ot.current) && !Vn && !Bn,
            Un = Vn && !mn?.isAutolink,
            Wn = Un && mn != null ? Ut(mn.href) : null,
            Gn = se && !v && Vn,
            Kn = Bt(e),
            qn = xe || !s && !Te && (!gt || !e.state.selection.empty || Ue || r && (N || ue)),
            Jn = !s && Et && !Te && (!gt || Ue || Bn && r) && An && Rn != null && Fn && !Gn && !Hn,
            Yn = f || !g;
        return (0, J.useEffect)(() => {
            D?.(Jn)
        }, [Jn, D]), qn ? (0, Y.jsx)(Y.Fragment, {
            children: (0, Y.jsx)(p, {
                asChild: !0,
                ...y,
                children: (0, Y.jsx)(`div`, {
                    style: Jn && Rn ? {
                        top: Rn.top,
                        left: Rn.left,
                        height: Rn.height
                    } : void 0,
                    className: j(`pointer-events-none fixed top-0 h-0`, !Jn && `invisible overflow-clip`),
                    ref: T,
                    children: (0, Y.jsx)(`div`, {
                        ref: kn,
                        style: Yn ? void 0 : {
                            left: 0
                        },
                        onPointerDownCapture: xn,
                        className: j(Yn ? [`sticky`, f ? `top-2` : `@w-xl/main:top-2 top-[calc(var(--header-height,48px)+48px+8px)]`] : `absolute top-0`, Nn ? `pointer-events-none` : `pointer-events-auto`),
                        children: (0, Y.jsx)(ye, {
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
                                    icon: ae.Unlink,
                                    onClick: _n,
                                    onMouseDown: e => e.preventDefault()
                                }), Un && (0, Y.jsx)(ve, {}), (0, Y.jsx)(P, {
                                    label: t.formatMessage(Q.copyLink),
                                    icon: ie ? Ne : Me,
                                    iconClassName: `!text-token-text-primary`,
                                    onClick: gn,
                                    onMouseDown: e => e.preventDefault()
                                }), (0, Y.jsx)(P, {
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
                                    submitIcon: Ne,
                                    cancelAriaLabel: t.formatMessage(Q.linkCancelAriaLabel),
                                    disabled: !1,
                                    selectAllOnFocus: !0,
                                    inputClassName: `w-full`,
                                    onKeyDownCapture: e => {
                                        if (S(e)) {
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
                                children: [ke && o?.renderTool({
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
                                        icon: Ae,
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
                                    }), _ != null && (0, J.cloneElement)(_, {
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
//# sourceMappingURL=0631b696-63cq115midt2hibp.js.map
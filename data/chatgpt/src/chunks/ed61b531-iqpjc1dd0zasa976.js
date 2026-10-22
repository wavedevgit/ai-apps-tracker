import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A2 as n,
    Eat as r,
    HN as i,
    Hot as a,
    LU as o,
    ON as s,
    Pst as c,
    TN as l,
    U1 as u,
    UN as d,
    Vot as f,
    cst as p,
    d1 as m,
    e5 as h,
    grt as g,
    j2 as _,
    kN as v,
    l7 as y,
    lE as b,
    mZ as x,
    o5 as S,
    q1 as C,
    sst as w,
    t5 as T,
    u1 as E,
    u7 as D,
    uE as O,
    urt as ee,
    wat as k,
    xct as A,
    yZ as te,
    zU as ne
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Bn as j,
    Kt as re,
    Ln as ie,
    Rn as M,
    Vn as N,
    Zt as ae,
    rn as oe,
    zn as se
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Dzn as ce,
    GUn as le,
    IVt as ue,
    JSt as de,
    KWn as fe,
    LVt as pe,
    UUn as P,
    WUn as F,
    XSt as me,
    YWn as I,
    cct as he,
    d9 as ge,
    dct as _e,
    f9 as ve,
    l9 as ye,
    lct as be,
    u9 as xe
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    At as L,
    B as Se,
    Ct as Ce,
    Dt as we,
    Et as R,
    Ft as Te,
    H as z,
    It as Ee,
    K as De,
    Rt as Oe,
    St as ke,
    Tt as B,
    U as Ae,
    V,
    W as H,
    X as je,
    Yt as Me,
    Z as Ne,
    Zt as Pe,
    an as Fe,
    at as Ie,
    in as Le,
    jt as Re,
    kt as U,
    ot as ze,
    q as Be,
    qt as Ve,
    rn as He,
    ut as Ue,
    wt as We,
    z as Ge,
    zt as Ke
} from "./82782bc9-loong612qtaq7sd9.js";
import {
    NS as qe,
    YS as Je,
    ZS as Ye,
    bS as Xe,
    bw as Ze,
    cS as Qe,
    iw as $e,
    sw as et,
    tw as tt,
    uS as nt,
    xS as rt,
    xw as it,
    yw as at
} from "./8b34dbc2-bgocf3s6t6l67twq.js";
import {
    c as ot,
    r as st,
    s as ct
} from "./31cec8d8-ejzahhq8v425zkie.js";
import {
    c as lt,
    s as ut
} from "./dced7e81-jazy4nhfdoqjj6ki.js";
import {
    E as dt,
    U as ft,
    f as pt,
    p as mt,
    r as ht,
    s as gt,
    w as _t
} from "./bcae0416-fqcs5j9jytyr15sc.js";
import {
    h as vt,
    i as yt,
    m as bt,
    n as xt,
    r as St,
    t as Ct
} from "./df59e297-o5kfrs88howaxph8.js";
import {
    t as wt
} from "./4c0f1f8e-o4zbuwgknf8ay6gx.js";
import {
    a as Tt,
    i as Et,
    o as Dt,
    r as Ot
} from "./373ddd65-o5ueta5lk6m8a4cj.js";
import {
    i as kt,
    t as At
} from "./6afb0137-bzxsac0gs9k0euza.js";
import {
    a as jt,
    o as Mt,
    r as Nt,
    t as Pt
} from "./e74608d1-hserbq0itkyr5o3k.js";
import {
    C as Ft,
    E as It,
    b as Lt,
    o as Rt
} from "./bcae0416-haikiajwbs003u1j.js";
import {
    n as zt,
    t as Bt
} from "./21d5ff49-jb0dwvqzgbxncuvu.js";
import {
    n as Vt,
    r as Ht,
    s as Ut
} from "./bcae0416-fjun3ts9ursnlt0n.js";
import {
    a as Wt,
    i as Gt,
    t as Kt
} from "./bcae0416-hu76kcaotat0wetg.js";
import {
    n as qt,
    r as Jt,
    t as Yt
} from "./6cb574fa-j2m46lf94zm9amj0.js";
import {
    a as Xt,
    c as Zt,
    d as Qt,
    f as $t,
    i as en,
    l as tn,
    m as nn,
    n as rn,
    o as an,
    p as on,
    r as sn,
    s as cn,
    t as ln,
    u as un
} from "./e99f8e1a-juoov2bakxxo01av.js";
import {
    c as dn,
    h as fn,
    l as pn,
    m as mn,
    n as hn,
    o as gn,
    p as _n,
    s as vn,
    t as yn,
    u as bn,
    v as xn,
    y as Sn
} from "./e5d54aa7-dopjvlyrywplu5ei.js";
import {
    n as Cn,
    t as wn
} from "./1c4de3ec-gbtdgwwak3bkvk6d.js";
import {
    n as Tn,
    r as En,
    t as Dn
} from "./60549c99-ljg58x2g4xar4kyp.js";
import {
    a as On,
    t as kn
} from "./dccfc4ad-g550gyn0rmeyan9b.js";

function An(e, t) {
    let n = [];
    return e.descendants((e, r) => {
        e.marks.forEach(i => {
            i.type === t && n.push({
                from: r,
                to: r + e.nodeSize,
                mark: i
            })
        })
    }), n
}

function jn(e, t, n) {
    let r = t.mark.type,
        i = {
            ...t.mark.attrs,
            disabled: n
        };
    return e.removeMark(t.from, t.to, r), e.addMark(t.from, t.to, r.create(i)), e
}

function Mn(e, t) {
    return e.setMeta(Fn, {
        safeUrls: t
    })
}

function Nn(e) {
    return e.getMeta(Fn) ?? null
}

function Pn(e = new Set) {
    return new B({
        key: Fn,
        state: {
            init(t) {
                return {
                    safeUrls: e
                }
            },
            apply(e, t) {
                let n = Nn(e);
                if (n == null) return t;
                let {
                    safeUrls: r
                } = n;
                return {
                    ...t,
                    safeUrls: r
                }
            }
        },
        appendTransaction(e, t, n) {
            let r = this.getState(n),
                i = n.tr,
                a = n.schema.marks[xn.proseMirrorMarkName()],
                o = An(n.doc, a),
                s = !1;
            return o.forEach(e => {
                let t = e.mark.attrs.href,
                    n = r.safeUrls.has(t);
                n === (e.mark.attrs.disabled === !0) && (jn(i, e, !n), s = !0)
            }), s ? i : null
        }
    })
}
var Fn, In = e((() => {
    Sn(), L(), Fn = new R(`disableUnsafeLinks`)
}));

function Ln(e, t) {
    return e.setMeta(W, {
        isDisabled: t
    })
}

function Rn(e) {
    return e.getMeta(W) ?? null
}

function zn(e, t = !1) {
    return new B({
        key: W,
        state: {
            init() {
                return {
                    isDisabled: t
                }
            },
            apply(e, t) {
                let n = Rn(e);
                return n?.isDisabled == null ? t : {
                    ...t,
                    isDisabled: n.isDisabled
                }
            }
        },
        props: {
            decorations(t) {
                let {
                    doc: n,
                    selection: r
                } = t;
                if (W.getState(t).isDisabled || !(r instanceof U && r.empty)) return null;
                let {
                    $cursor: i
                } = r;
                if (!i || !e) return null;
                let a = i.start();
                if (!((i.parent.isTextblock || i.parent.type.name === `doc`) && i.pos === a && i.node().content.size === 0)) return null;
                let o = V.widget(a, () => {
                    let t = document.createTextNode(e.formatMessage(Bn.placeholder)),
                        n = document.createElement(`span`);
                    return n.className = `text-token-text-tertiary dark:text-gray-500 pointer-events-none select-none`, n.style.position = `absolute`, n.appendChild(t), n
                });
                return z.create(n, [o])
            }
        }
    })
}
var W, Bn, Vn = e((() => {
        L(), H(), M(), W = new R(`placeholder`), Bn = ie({
            placeholder: {
                id: `n2B51U`,
                defaultMessage: `Write something...`
            }
        })
    })),
    Hn, Un = e((() => {
        Hn = {
            "override-strong-color": `_1bGYnG_override-strong-color`
        }
    }));

function Wn({
    isHovered: e,
    isRejected: t,
    isTextAcive: n
}) {
    return y({
        "line-through": !n,
        "filter grayscale-[0.6]": t && !n,
        "opacity-60": t && !n,
        "bg-opacity-50 dark:bg-opacity-50": t && e,
        "bg-opacity-10 dark:bg-opacity-10": t && !e,
        "bg-opacity-60 dark:bg-opacity-60": !t && !e
    })
}

function Gn({
    isHovered: e,
    isRejected: t,
    isReplacement: n
}) {
    return y(`bg-red-100 dark:bg-red-600`, Wn({
        isHovered: e,
        isRejected: t,
        isTextAcive: t
    }), {
        "dark:bg-red-800": t,
        "text-red-500 dark:text-red-200": !t,
        "border border-red-400 rounded-s border-e-0": t && n,
        "border border-red-400 rounded-sm": t && !n
    })
}

function Kn({
    isHovered: e,
    isRejected: t,
    isReplacement: n
}) {
    let r = !t;
    return y(Hn[`override-strong-color`], `text-green-600 dark:text-green-200 bg-green-100 dark:bg-green-600`, Wn({
        isHovered: e,
        isRejected: t,
        isTextAcive: r
    }), {
        "dark:bg-green-800": t,
        "border border-green-500 rounded-e border-s-0": t && n,
        "border border-green-500 rounded-sm": t && !n
    })
}
var qn = e((() => {
        Un(), D()
    })),
    Jn, Yn, Xn, Zn = e((() => {
        qn(), L(), H(), Jn = new R(`edit`), Yn = (e, t, n, r) => {
            let i = [];
            for (let {
                    start: e,
                    end: n,
                    editId: r
                }
                of t) i.push(V.inline(e, n, {
                class: Gn({
                    isHovered: !1,
                    isRejected: !1,
                    isReplacement: !1
                }),
                "data-edit-id": r
            }));
            for (let {
                    start: t,
                    end: n,
                    editId: r
                }
                of e) i.push(V.inline(t, n, {
                class: Kn({
                    isHovered: !1,
                    isRejected: !1,
                    isReplacement: !0
                }),
                "data-edit-id": r
            }));
            return i
        }, Xn = (e, t) => new B({
            key: Jn,
            state: {
                init() {
                    let n = new Set;
                    return {
                        decorations: Yn(e, t, null, n),
                        hoveredEditId: null,
                        rejectedEdits: n
                    }
                },
                apply(n, r) {
                    let {
                        hoveredEditId: i,
                        rejectedEdits: a
                    } = n.getMeta(Jn) ?? null ?? r;
                    return {
                        decorations: Yn(e, t, i, a),
                        hoveredEditId: i,
                        rejectedEdits: a
                    }
                }
            },
            props: {
                decorations(e) {
                    let t = this.getState(e);
                    return t ? z.create(e.doc, t.decorations.concat()) : z.empty
                },
                editable() {
                    return !1
                },
                attributes() {
                    return {
                        class: `cursor-default`,
                        style: `--text-primary:var(--text-secondary)`
                    }
                }
            }
        })
    })),
    G, Qn, $n = e((() => {
        a(), G = class e {
            constructor(e, t) {
                f(this, `length`, void 0), f(this, `step`, void 0), this.length = e, this.step = t
            }
            cut(t) {
                return t === this.length ? this : new e(t, this.step)
            }
            static slice(t, n, r) {
                if (n === r) return e.none;
                if (n === 0 && r === e.len(t)) return t;
                let i = [];
                for (let e = 0, a = 0; a < r; e++) {
                    let o = t[e],
                        s = a + o.length,
                        c = Math.min(r, s) - Math.max(n, a);
                    c > 0 && i.push(o.cut(c)), a = s
                }
                return i
            }
            static join(t, n, r) {
                if (t.length === 0) return n;
                if (n.length === 0) return t;
                let i = r(t[t.length - 1].step, n[0].step);
                if (i == null) return t.concat(n);
                let a = t.slice(0, t.length - 1);
                a.push(new e(t[t.length - 1].length + n[0].length, i));
                for (let e of n) a.push(e);
                return a
            }
            static len(e) {
                let t = 0;
                for (let n of e) t += n.length;
                return t
            }
        }, f(G, `none`, []), Qn = class {
            constructor(e, t, n, r, i, a) {
                f(this, `fromA`, void 0), f(this, `toA`, void 0), f(this, `fromB`, void 0), f(this, `toB`, void 0), f(this, `deleted`, void 0), f(this, `inserted`, void 0), this.fromA = e, this.toA = t, this.fromB = n, this.toB = r, this.deleted = i, this.inserted = a
            }
            get lenA() {
                return this.toA - this.fromA
            }
            get lenB() {
                return this.toB - this.fromB
            }
        }
    })),
    er, tr, nr = e((() => {
        Me(), $n(), a(), er = (e, t, n, r, i) => new Qn(e, t, n, r, e === t ? G.none : [new G(t - e, i)], n === r ? G.none : [new G(r - n, i)]), tr = class e {
            constructor(e, t) {
                f(this, `doc`, void 0), f(this, `changes`, void 0), this.doc = e, this.changes = t
            }
            static create(t) {
                return new e(t, [])
            }
            addSteps(t, n) {
                let r = [];
                for (let e of n) {
                    let t = 0;
                    if (e.getMap().forEach((n, i, a, o) => {
                            r.push(er(n + t, i + t, a, o, e)), t = o - a - (i - n)
                        }), e instanceof Re || e instanceof Ee) {
                        let {
                            from: t,
                            to: n
                        } = e;
                        r.push(er(t, n, t, n, e))
                    }
                }
                if (r.length === 0) return this;
                let i = this.changes.concat(r);
                return new e(t, i)
            }
        }
    })),
    K, rr, ir, ar, or, sr, cr = e((() => {
        L(), Me(), H(), nr(), K = new R(`changeset`), rr = new R(`highlightChanges`), ir = e => K.getState(e), ar = e => {
            let {
                state: t
            } = e, n = t.tr.setMeta(K, !0);
            e.updateState(t.apply(n))
        }, or = e => {
            let {
                state: t
            } = e, n = ir(t);
            if (!n) return;
            let {
                maps: r,
                steps: i
            } = n, a = new Te(r), o = t.tr;
            for (let e = i.length - 1; e >= 0; e--) {
                let t = i[e].map(a.slice(e + 1));
                t && o.maybeStep(t).doc && a.appendMap(t.getMap(), e)
            }
            let s = t.apply(o.setMeta(K, !0));
            e.updateState(s)
        }, sr = () => {
            let e = e => ({
                    changeset: tr.create(e),
                    maps: [],
                    steps: []
                }),
                t = new B({
                    key: K,
                    state: {
                        init: (t, {
                            doc: n
                        }) => e(n),
                        apply: (t, n, r, i) => {
                            let {
                                doc: a
                            } = i;
                            if (t.getMeta(K)) return e(a);
                            let {
                                docChanged: o,
                                mapping: s,
                                steps: c,
                                docs: l
                            } = t;
                            if (!o) return n;
                            let {
                                changeset: u,
                                maps: d,
                                steps: f
                            } = n, {
                                maps: p
                            } = s, m = c.map((e, t) => e.invert(l[t]));
                            return {
                                changeset: u.addSteps(a, c),
                                maps: d.concat(p),
                                steps: f.concat(m)
                            }
                        }
                    }
                });
            return [t, new B({
                key: rr,
                state: {
                    init() {
                        return {
                            deco: z.empty,
                            show: !1
                        }
                    },
                    apply(e, n, r, i) {
                        let a = t.getState(i);
                        if (!a) return n;
                        let {
                            changeset: o
                        } = a, {
                            doc: s
                        } = i, {
                            changes: c
                        } = o, l = c.map(({
                            fromB: e,
                            toB: t
                        }) => V.inline(e, t, {
                            class: `blame-marker`
                        })), u = e.getMeta(rr);
                        return {
                            deco: z.create(s, l),
                            show: u ?? n.show
                        }
                    }
                },
                props: {
                    decorations(e) {
                        let t = this.getState(e);
                        if (!t?.show) return z.empty;
                        let {
                            deco: n
                        } = t;
                        return n
                    }
                }
            })]
        }
    })),
    lr, q, ur = e((() => {
        lr = t(N()), q = (e, t, n) => {
            (0, lr.useEffect)(() => {
                let n = t.current;
                if (!n) return;
                let {
                    state: r
                } = n, i = e(r.tr);
                i && n.dispatch(i)
            }, n)
        }
    })),
    J, dr = e((() => {
        J = function(e) {
            return e.PROSEMIRROR_CONTEXT_CHILDREN = `prosemirror-context-children`, e.PROSEMIRROR_EDITOR_CONTAINER = `prosemirror-editor-container`, e
        }({})
    }));

function fr(e, t) {
    return {
        x: ue(t.x, e.left, e.right),
        y: ue(t.y, e.top, e.bottom)
    }
}
var pr = e((() => {
        pe()
    })),
    mr, hr = e((() => {
        mr = (e, t) => {
            if (e === t) return null;
            let n = 0,
                r = e.length,
                i = t.length;
            for (; n < r && e.charCodeAt(n) === t.charCodeAt(n);) n += 1;
            for (; r > n && i > n && e.charCodeAt(r - 1) === t.charCodeAt(i - 1);) --r, --i;
            return {
                from: n,
                to: r,
                text: t.slice(n, i)
            }
        }
    })),
    gr, Y, _r = e((() => {
        qe(), Ut(), Wt(), Ft(), ft(), pt(), L(), hr(), nn(), Jt(), a(), gr = e => ht.theme({
            "&": {
                backgroundColor: e ? `var(--main-surface-primary)` : `var(--gray-100)`
            }
        }), Y = class {
            constructor(e, t, n, r) {
                f(this, `pmView`, void 0), f(this, `getPos`, void 0), f(this, `node`, void 0), f(this, `updating`, !1), f(this, `cm`, void 0), f(this, `languageCompartment`, void 0), f(this, `themeCompartment`, void 0), f(this, `setLanguage`, async e => {
                    let t = await Yt(e);
                    t && this.cm.dispatch({
                        effects: this.languageCompartment.reconfigure(t)
                    })
                }), f(this, `setTheme`, e => {
                    let t = [gr(e), It(on(e))];
                    this.cm.dispatch({
                        effects: this.themeCompartment.reconfigure(t)
                    })
                }), f(this, `handleBackspace`, e => {
                    let {
                        selection: t
                    } = e.state;
                    if (!(t.main.empty && t.main.from === 0) || this.cm.state.doc.length > 0) return !1;
                    let n = Je(this.pmView.state, this.pmView.dispatch);
                    return this.pmView.focus(), n
                }), f(this, `handleShiftEnter`, () => {
                    let e = Ye(this.pmView.state, this.pmView.dispatch);
                    return this.pmView.focus(), e
                }), f(this, `dispatch`, e => {
                    if (this.cm.update([e]), this.updating) return;
                    let t = (this.getPos() ?? 0) + 1,
                        n = e.state.doc.toString(),
                        r = mr(this.node.textContent, n);
                    if (r) {
                        let {
                            text: e,
                            from: n,
                            to: i
                        } = r, a = e ? this.pmSchema.text(e) : null, o = this.pmView.state.tr.replaceWith(n + t, i + t, a);
                        this.pmView.dispatch(o)
                    }
                    this.forwardSelection()
                }), f(this, `update`, e => {
                    if (e.type !== this.node.type) return !1;
                    e.attrs.lang !== this.node.attrs.lang && this.setLanguage(e.attrs.lang), e.attrs.isDarkMode != null && e.attrs.isDarkMode !== this.node.attrs.isDarkMode && this.setTheme(e.attrs.isDarkMode), this.node = e;
                    let t = mr(this.cm.state.doc.toString(), e.textContent);
                    if (t) {
                        let {
                            text: e,
                            from: n,
                            to: r
                        } = t;
                        this.updating = !0, this.cm.dispatch({
                            changes: {
                                from: n,
                                to: r,
                                insert: e
                            }
                        }), this.updating = !1
                    }
                    return !0
                }), f(this, `asProseMirrorSelection`, e => {
                    let t = (this.getPos() ?? 0) + 2,
                        {
                            anchor: n,
                            head: r
                        } = this.cm.state.selection.main;
                    return U.create(e, n + t, r + t)
                }), f(this, `forwardSelection`, () => {
                    if (!this.cm.hasFocus) return;
                    let {
                        state: e
                    } = this.pmView, t = this.asProseMirrorSelection(e.doc);
                    t.eq(e.selection) || this.pmView.dispatch(e.tr.setSelection(t))
                }), f(this, `maybeEscape`, (e, t) => n => {
                    let {
                        state: r
                    } = n, {
                        selection: i
                    } = r, a = (() => {
                        let e = i.main.from,
                            {
                                number: t,
                                from: n
                            } = r.doc.lineAt(e);
                        return {
                            line: t,
                            ch: e - n
                        }
                    })(), o = r.selection.ranges.some(e => !e.empty), s = r.doc.lineAt(r.doc.length).number;
                    if (o || a.line !== (t < 0 ? 1 : s) || e === `char` && a.ch !== (t < 0 ? 0 : r.doc.line(a.line).length)) return !1;
                    let c = (this.getPos() ?? 0) + (t < 0 ? 0 : this.node.nodeSize),
                        l = we.near(this.pmView.state.doc.resolve(c), t);
                    return this.pmView.dispatch(this.pmView.state.tr.setSelection(l).scrollIntoView()), this.pmView.focus(), !0
                }), f(this, `setSelection`, (e, t) => {
                    this.focus(), this.updating = !0, this.cm.dispatch({
                        selection: {
                            anchor: e,
                            head: t
                        }
                    }), this.updating = !1
                }), f(this, `focus`, () => {
                    this.cm.focus(), this.forwardSelection()
                }), f(this, `selectNode`, () => {
                    this.focus()
                }), f(this, `stopEvent`, () => !0), f(this, `destroy`, () => {
                    this.cm.destroy()
                }), f(this, `_setIsCodeBlockView`, () => {
                    this.cm.dom.dataset.isCodeBlockView = `true`
                }), this.pmView = t, this.getPos = n, this.node = e;
                let i = [{
                    key: `ArrowUp`,
                    run: this.maybeEscape(`line`, -1)
                }, {
                    key: `ArrowLeft`,
                    run: this.maybeEscape(`char`, -1)
                }, {
                    key: `ArrowDown`,
                    run: this.maybeEscape(`line`, 1)
                }, {
                    key: `ArrowRight`,
                    run: this.maybeEscape(`char`, 1)
                }, {
                    key: `Backspace`,
                    run: this.handleBackspace
                }, {
                    key: `Shift-Enter`,
                    run: this.handleShiftEnter
                }];
                this.languageCompartment = new _t, this.themeCompartment = new _t;
                let a = qt(e.attrs.lang),
                    o = dt.create({
                        doc: this.node.textContent,
                        extensions: [this.themeCompartment.of([gr(r), It(on(r))]), ht.theme({
                            "&": {
                                borderRadius: `4px`,
                                padding: `0.5rem`
                            },
                            "&.cm-focused": {
                                outline: `none`
                            }
                        }), mt.of([...i, ...Kt, ...Ht, Gt]), Rt(), Vt(), Lt(), gt(), this.languageCompartment.of(a == null ? [] : [a]), dt.changeFilter.of(e => (!e.docChanged && !this.updating && this.forwardSelection(), !0))]
                    });
                this.cm = new ht({
                    state: o,
                    dispatch: this.dispatch
                }), this.cm.dom.dir = `ltr`, a ?? this.setLanguage(e.attrs.lang)
            }
            get pmSchema() {
                return this.pmView.state.schema
            }
            get dom() {
                return this._setIsCodeBlockView(), this.cm.dom
            }
            static isInCodeBlockView(e) {
                return e instanceof HTMLElement && e.closest(`[data-is-code-block-view]`) != null
            }
        }, f(Y, `_getIsCodeBlockView`, e => e.dataset.isCodeBlockView === `true`)
    }));

function vr(e, t, n) {
    try {
        return t instanceof U ? U.create(e, t.anchor, t.head) : t instanceof We ? U.create(e, t.from, t.to) : t instanceof ke ? new ke(e) : void 0
    } catch {
        return n ?? U.create(e, 0)
    }
}
var yr = e((() => {
        L()
    })),
    br, xr = e((() => {
        De(), fn(), mn(), a(), br = class {
            constructor(e, t) {
                f(this, `rules`, void 0);
                let n = [].concat.apply([], e.syntaxExtensions().map(e => e.proseMirrorInputRules(t))),
                    r = n.filter(e => e instanceof _n);
                r.sort((e, t) => _n.priority(t) - _n.priority(e));
                let i = 0;
                this.rules = n.map(e => {
                    if (!(e instanceof _n)) return e;
                    let t = r[i];
                    return i += 1, t ?? e
                })
            }
            build() {
                let e = Be({
                        rules: this.rules
                    }),
                    t = e.props.handleTextInput,
                    n = e.props.handleDOMEvents?.compositionend;
                return e.props.handleTextInput = (n, r, i, a) => ce(n.state) ? !1 : t?.call(e, n, r, i, a) ?? !1, e.props.handleDOMEvents = {
                    ...e.props.handleDOMEvents,
                    compositionend: (t, r) => ce(t.state) ? !1 : n?.call(e, t, r) ?? !1
                }, e
            }
        }
    })),
    Sr, Cr = e((() => {
        w(), Ue(), je(), a(), Sr = class {
            constructor(e, t) {
                f(this, `keymap`, void 0), this.keymap = new Map;
                for (let n of e.syntaxExtensions()) this.addKeymap(n.proseMirrorKeymap(t));
                this.addKeymap(Ie)
            }
            build() {
                let e = {};
                return this.keymap.forEach((t, n) => {
                    e[n] = ze(...t)
                }), Ne(e)
            }
            addKeymap(e) {
                for (let t in e) this.keymap.get(t) || this.keymap.set(t, []), p(this.keymap.get(t)).push(e[t])
            }
        }
    })),
    wr, Tr = e((() => {
        vn(), a(), wr = class {
            constructor(e) {
                f(this, `nodeViews`, void 0), this.nodeViews = {};
                for (let t of e.nodeExtensions()) {
                    let e = t.proseMirrorNodeName(),
                        n = t.proseMirrorNodeView();
                    e !== gn.proseMirrorNodeName() && e != null && n != null && (this.nodeViews[e] = n)
                }
            }
            build() {
                return this.nodeViews
            }
        }
    })),
    Er, Dr = e((() => {
        r(), Fe(), a(), Er = class {
            constructor(e) {
                f(this, `nodes`, {}), f(this, `marks`, {});
                for (let t of e.nodeExtensions()) {
                    let e = t.proseMirrorNodeName(),
                        n = t.proseMirrorNodeSpec();
                    e != null && n != null && (e !== `text` && (n.attrs = {
                        ...n.attrs,
                        start: {
                            default: void 0
                        },
                        end: {
                            default: void 0
                        }
                    }), this.nodes[e] = n)
                }
                for (let t of e.markExtensions()) {
                    let e = t.proseMirrorMarkName(),
                        n = t.proseMirrorMarkSpec();
                    e != null && n != null && (this.marks[e] = n)
                }
            }
            build() {
                try {
                    return new He({
                        nodes: this.nodes,
                        marks: this.marks
                    })
                } catch (e) {
                    k.addError(e, {
                        nodes: this.nodes
                    })
                }
                return new He({
                    nodes: {
                        doc: {
                            content: `block+`
                        },
                        paragraph: {
                            content: `inline*`,
                            group: `block`,
                            parseDOM: [{
                                tag: `p`,
                                preserveWhitespace: `full`
                            }],
                            toDOM: () => [`p`, 0]
                        },
                        text: {
                            group: `inline`
                        }
                    },
                    marks: this.marks
                })
            }
        }
    })),
    Or, kr = e((() => {
        fe(), a(), Or = class {
            constructor(e) {
                f(this, `extensionManager`, void 0), this.extensionManager = e
            }
            build() {
                let e = I();
                for (let t of this.extensionManager.extensions()) e = t.unifiedInitializationHook(e);
                return e
            }
        }
    }));

function Ar(e) {
    return e instanceof Tt
}

function jr(e) {
    return e instanceof Et
}
var Mr, Nr = e((() => {
        Dt(), a(), Mr = class {
            constructor(e) {
                f(this, `markExtensionList`, void 0), f(this, `nodeExtensionList`, void 0), f(this, `otherExtensionList`, void 0), this.markExtensionList = new Map, this.nodeExtensionList = new Map, this.otherExtensionList = new Map;
                for (let t of e) this.add(t)
            }
            extensions() {
                return this.syntaxExtensions().concat(Array.from(this.otherExtensionList.values()))
            }
            markExtensions() {
                return Array.from(this.markExtensionList.values())
            }
            nodeExtensions() {
                return Array.from(this.nodeExtensionList.values())
            }
            syntaxExtensions() {
                return this.nodeExtensions().concat(this.markExtensions())
            }
            add(e) {
                for (let t of e.dependencies()) this.add(t);
                if (jr(e)) {
                    this.markExtensionList.set(e.constructor, e);
                    return
                }
                if (Ar(e)) {
                    this.nodeExtensionList.set(e.constructor, e);
                    return
                }
                this.otherExtensionList.set(e.constructor, e)
            }
        }
    })),
    Pr, Fr = e((() => {
        a(), Pr = class {
            constructor(e) {
                f(this, `extensionManager`, void 0), this.extensionManager = e
            }
            convert(e) {
                let t = this.convertNode(e);
                if (t.length !== 1) throw Error(`Couldn't find any way to convert the root ProseMirror node.`);
                return t[0]
            }
            convertNode(e) {
                let t = null,
                    n = [];
                for (let r of this.extensionManager.nodeExtensions()) {
                    if (!r.proseMirrorToUnistTest(e)) continue;
                    n.push(r);
                    let i = [];
                    for (let t = 0; t < e.childCount; ++t) i = i.concat(this.convertNode(e.child(t)));
                    t = r.proseMirrorNodeToUnistNodes(e, i)
                }
                return t == null ? (console.warn(`Couldn't find any way to convert ProseMirror node of type "` + e.type.name + `" to a unist node.`), []) : t.map(t => {
                    for (let r of e.marks) {
                        let {
                            type: {
                                name: e
                            }
                        } = r;
                        if (n.some(t => {
                                let n = t.proseMirrorNodeSpec()?.marks;
                                return n != null && !n.includes(e)
                            })) continue;
                        let i = !1;
                        for (let e of this.extensionManager.markExtensions()) r.type.name === e.proseMirrorMarkName() && (t = e.processConvertedUnistNode(t, r), i = !0);
                        i || console.warn(`Couldn't find any way to convert ProseMirror mark of type "` + e + `" to a unist node.`)
                    }
                    return t
                })
            }
        }
    })),
    Ir, Lr = e((() => {
        h(), de(), a(), Ir = class e {
            constructor(e, t) {
                f(this, `extensionManager`, void 0), f(this, `proseMirrorSchema`, void 0), this.extensionManager = e, this.proseMirrorSchema = t
            }
            static unistNodeIsParent(e) {
                return `children` in e
            }
            convert(e) {
                let t = {},
                    n = this.convertNode(e, t);
                for (let e of this.extensionManager.syntaxExtensions()) e.postUnistToProseMirrorHook(t);
                if (n.length !== 1) throw Error(`Couldn't find any way to convert the root unist node.`);
                return n[0]
            }
            convertNode(t, n) {
                let r = 0,
                    i = (t, n) => {
                        for (let a of this.extensionManager.syntaxExtensions()) {
                            if (!a.unistToProseMirrorTest(t) || me(t) && a.customDirectiveName() != null && a.customDirectiveName() !== t.name) continue;
                            let o = [];
                            e.unistNodeIsParent(t) && (o = t.children.flatMap(e => i(e, n)));
                            let {
                                position: s
                            } = t, c = s?.start.offset ?? r, l = s?.end.offset;
                            if (l == null && `value` in t && typeof t.value == `string`) {
                                let {
                                    value: e
                                } = t;
                                l = c + e.length
                            }
                            l ??= c, r = l;
                            let u = {
                                start: c,
                                end: l
                            };
                            return S(a.unistNodeToProseMirrorNodes({
                                node: t,
                                schema: this.proseMirrorSchema,
                                convertedChildren: o,
                                context: n,
                                attrs: u
                            })).filter(T)
                        }
                        return console.warn(`Couldn't find any way to convert unist node of type "` + t.type + `" to a ProseMirror node.`), []
                    };
                return i(t, n)
            }
        }
    })),
    Rr, zr, Br = e((() => {
        F(), w(), xr(), Cr(), Tr(), Dr(), kr(), Nr(), Fr(), Lr(), a(), Rr = 5, zr = class {
            constructor(e = []) {
                f(this, `builtSchema`, void 0), f(this, `inputRulesBuilder`, void 0), f(this, `keymapBuilder`, void 0), f(this, `nodeViewBuilder`, void 0), f(this, `unistToProseMirrorConverter`, void 0), f(this, `proseMirrorToUnistConverter`, void 0), f(this, `unified`, void 0), f(this, `memoizedProsemirrorDocs`, new Map);
                let t = new Mr(e);
                this.builtSchema = new Er(t).build(), this.inputRulesBuilder = new br(t, this.builtSchema), this.keymapBuilder = new Sr(t, this.builtSchema), this.nodeViewBuilder = new wr(t), this.unistToProseMirrorConverter = new Ir(t, this.builtSchema), this.proseMirrorToUnistConverter = new Pr(t), this.unified = new Or(t).build()
            }
            parse(e) {
                try {
                    if (this.memoizedProsemirrorDocs.has(e)) return p(this.memoizedProsemirrorDocs.get(e));
                    let t = this.unistToProseMirrorConverter.convert(this.parseUnist(e));
                    if (this.memoizedProsemirrorDocs.set(e, t), this.memoizedProsemirrorDocs.size > Rr) {
                        let e = this.memoizedProsemirrorDocs.keys().next().value;
                        e && this.memoizedProsemirrorDocs.delete(e)
                    }
                    return t
                } catch (e) {
                    P.logError(`Failed to parse document`, e)
                }
                return this.schema().text(` `)
            }
            parseUnist(e) {
                return this.unified.runSync(this.unified.parse(e))
            }
            schema() {
                return this.builtSchema
            }
            inputRulesPlugin() {
                return this.inputRulesBuilder.build()
            }
            keymapPlugin() {
                return this.keymapBuilder.build()
            }
            nodeViews() {
                return this.nodeViewBuilder.build()
            }
            serialize(e) {
                let t = this.proseMirrorToUnistConverter.convert(e);
                return this.unified.stringify(t)
            }
        }
    })),
    Vr, Hr = e((() => {
        Dt(), wn(), Vr = class extends Ot {
            unifiedInitializationHook(e) {
                return e.use(Cn)
            }
        }
    }));

function X(e = {}) {
    let t = JSON.stringify(e),
        n = Ur.get(t);
    return n ?? (n = new zr([new yn, ...e?.shouldStripDirectives ? [new Vr] : []]), Ur.set(t, n)), n
}
var Ur, Wr = e((() => {
        hn(), Br(), Hr(), Ur = new Map
    })),
    Gr, Kr, qr, Jr, Yr, Xr = e((() => {
        F(), Wr(), tn(), _e(), n(), E(), Gr = (e, t, n, r) => {
            let i = [];
            for (let r of t)
                for (let t of n) i.push({
                    from: r,
                    to: t,
                    parentNodeNamesAtStart: r.parentNodeTypeNameStack,
                    slice: e.slice(r.pmPos, t.pmPos)
                });
            return i.sort((e, t) => {
                let n = Math.abs(e.from.sourcePos - r.start) + Math.abs(e.to.sourcePos - r.end),
                    i = Math.abs(t.from.sourcePos - r.start) + Math.abs(t.to.sourcePos - r.end);
                return n === i ? t.slice.size - e.slice.size : n - i
            }), i
        }, Kr = (e, t) => _(e.parentNodeNamesAtStart, t.parentNodeTypeNameStack), qr = new WeakMap, Jr = ({
            diff: e
        }) => {
            let t = new he(be.GetDiffedDoc, {
                debug: !1
            });
            t.startBlock(`get_diffed_doc`);
            let n = X(),
                {
                    contentAfter: r,
                    contentBefore: i,
                    edits: a
                } = e,
                o = n.parse(r),
                s = n.parse(i),
                c = a.concat().sort((e, t) => e.positionBefore.start - t.positionBefore.start),
                l = [],
                u = [];
            t.startBlock(`init_position_transformers`);
            let {
                sourceRangeToPmRange: d
            } = Zt(s), {
                sourceRangeToPmRange: f
            } = Zt(o);
            t.endBlock(`init_position_transformers`);
            let p = s,
                h = 0,
                g = 0,
                _ = [],
                v = (e, t, n) => {
                    for (let [r, i] of n.entries()) try {
                        if (!Kr(t, i)) continue;
                        let {
                            pmPos: n
                        } = i, {
                            slice: a
                        } = t;
                        return p = p.replace(n, n, a), l.push({
                            editId: e,
                            start: n,
                            end: n + a.size
                        }), [r, i]
                    } catch (e) {
                        _.push(e)
                    }
                    return null
                };
            for (let e = 0; e < c.length; e++) {
                let {
                    id: n,
                    positionBefore: r,
                    positionAfter: i
                } = c[e];
                t.startBlock(`transform_positions`);
                let a = d(r),
                    y = f(i);
                t.endBlock(`transform_positions`);
                let {
                    start: b,
                    end: x
                } = a, {
                    start: S,
                    end: C
                } = y, w = i.start !== i.end, T = w ? Gr(o, S, C, i) : null;
                t.startBlock(`get_merged_doc_positions`);
                let {
                    positions: E
                } = Zt(p);
                t.endBlock(`get_merged_doc_positions`);
                let D = Math.max(...b.map(({
                        pmPos: e
                    }) => e)),
                    O = Math.min(...x.map(({
                        pmPos: e
                    }) => e)),
                    ee = [].concat(x, b),
                    k = r.start !== r.end && s.textBetween(D, O).length > 0,
                    A = !1;
                if (k && !w) u.push({
                    editId: n,
                    start: D + h,
                    end: O + h
                }), A = !0;
                else if (!k && !w) A = !0;
                else {
                    let e = ee.map(({
                        pmPos: e
                    }) => E[e + h]);
                    for (let t of T ?? []) {
                        let r = v(n, t, e);
                        if (r == null) continue;
                        let i = r[0],
                            a = t.slice.size,
                            o = i < x.length;
                        o || (h += a), k && u.push({
                            editId: n,
                            start: D + h,
                            end: O + h
                        }), o && (h += a), A = !0;
                        break
                    }
                }
                if (!A && T != null) {
                    let e = Math.min(...b.map(({
                        pmPos: e
                    }) => e)) + h - 1;
                    for (let t of T) try {
                        p = p.replace(e, e, t.slice), l.push({
                            editId: n,
                            start: e,
                            end: e + t.slice.size
                        }), h += t.slice.size, k && u.push({
                            editId: n,
                            start: D + h,
                            end: O + h
                        }), A = !0;
                        break
                    } catch (e) {
                        _.push(e)
                    }
                }
                A ? P.logEvent(`Canvas Diff Edit Success`) : (P.logEvent(`Canvas Diff Edit Fail`), P.logError(`Failed to insert edit for diffed doc`, m(_), {
                    errors: _.map(le),
                    replaceFromCandidates: b,
                    replaceToCandidates: x,
                    sliceFromCandidates: S,
                    sliceToCandidates: C
                }), g++)
            }
            return P.logDistribution(`Canvas Diff Edit Success Ratio`, (c.length - g) / c.length), P.logDistribution(`Canvas Diff Edit Fail Count`, g), P.logDistribution(`Canvas Diff Edit Success Count`, c.length - g), P.logDistribution(`Canvas Diff Edit Count`, c.length), t.endBlock(`get_diffed_doc`), {
                doc: p,
                addedRanges: l,
                deletedRanges: u
            }
        }, Yr = ({
            diff: e
        }) => {
            let t = qr.get(e);
            if (t != null) return t;
            let n = Jr({
                diff: e
            });
            return qr.set(e, n), n
        }
    })),
    Z, Zr, Qr = e((() => {
        _r(), L(), Z = new R(`focus`), Zr = (e, t) => new B({
            key: Z,
            state: {
                init: () => !1,
                apply(e, t) {
                    let n = e.getMeta(Z);
                    return typeof n == `boolean` ? n : t
                }
            },
            props: {
                handleDOMEvents: {
                    blur: (e, n) => {
                        let {
                            relatedTarget: r
                        } = n;
                        return r != null && Y.isInCodeBlockView(r) ? !1 : (t(n), e.dispatch(e.state.tr.setMeta(Z, !1)), !1)
                    },
                    focus: (t, n) => (e(n), t.dispatch(t.state.tr.setMeta(Z, !0)), !1)
                }
            }
        })
    })),
    $r, ei = e((() => {
        Tn(), L(), H(), $r = () => new B({
            key: new R(`katex`),
            props: {
                decorations(e) {
                    let t = [];
                    return e.doc.descendants((e, n) => {
                        if (e.type.name === `inline_math` || e.type.name === `math_block`) {
                            let r = typeof e.attrs.latex == `string` ? e.attrs.latex : ``,
                                i = e.type.name === `math_block`;
                            t.push(V.widget(n + 1, e => {
                                let t = e.dom.ownerDocument,
                                    n = t.createElement(`span`),
                                    a = En(r, i);
                                return n.setAttribute(`role`, `math`), n.setAttribute(`aria-label`, r), n.setAttribute(`data-math-source`, r), n.setAttribute(`data-client-katex-layout`, ``), i && (n.style.display = `block`, n.style.contentVisibility = `auto`, n.style.containIntrinsicSize = `auto 2lh`), a == null ? n.textContent = r : n.appendChild(Dn(a, t)), n
                            }, {
                                key: (i ? `display` : `inline`) + `\0` + r
                            }))
                        }
                    }), z.create(e.doc, t)
                }
            }
        })
    }));

function ti(e, t) {
    let n = t && e.dom?.querySelectorAll(`[data-edit-id="${t}"]`);
    return n ? Array.from(n) : []
}

function ni(e, t) {
    return ti(e, t).flatMap(e => Array.from(e.getClientRects()))
}

function ri(e, t, n) {
    return e >= n.left && e <= n.right && t >= n.top && t <= n.bottom
}

function ii(e) {
    return {
        left: Math.min(...e.map(e => e.left)),
        right: Math.max(...e.map(e => e.right)),
        top: Math.min(...e.map(e => e.top)),
        bottom: Math.max(...e.map(e => e.bottom))
    }
}

function ai(e, t, n) {
    return n.some(n => ri(e, t, n)) ? !0 : n.length < 2 ? !1 : n.some(n => e >= n.left && e <= n.right && t > n.bottom) && n.some(n => e >= n.left && e <= n.right && t < n.top)
}
var oi = e((() => {}));

function si() {
    let e = null,
        t = null,
        n = n => {
            if (e == null || t == null) return !1;
            let r = Array.from(t.getClientRects()),
                i = e.tooltipElement.getBoundingClientRect();
            if (r.length === 1) {
                let e = r[0];
                return !ri(n.clientX, n.clientY, ii([e, i]))
            } else return !ai(n.clientX, n.clientY, [i, ...r])
        },
        r = (r, a) => {
            e &&= (e.hide(), null);
            let o = r.getAttribute(`href`);
            if (!o) return;
            let s = Array.from(r.getClientRects()),
                c = s.find(e => ri(a.clientX, a.clientY, e)) ?? s[0],
                l = c.left + c.width / 2,
                u = c.top - li;
            e = new ui(e => {
                n(e) && i()
            }), e.show(l, u, o), t = r
        },
        i = () => {
            e &&= (e.hide(), null), t = null
        };
    return new B({
        key: ci,
        props: {
            handleDOMEvents: {
                mousemove(a, o) {
                    (() => {
                        let {
                            target: e
                        } = o;
                        if (!(e instanceof HTMLElement)) return !1;
                        let n = e.closest(`a[href]`);
                        return n != null && n !== t ? (r(n, o), !0) : !1
                    })() || e == null || !n(o) || i()
                }
            }
        },
        view: () => ({
            destroy: i
        })
    })
}
var ci, li, ui, di = e((() => {
    oi(), D(), L(), a(), ci = new R(`linkTooltip`), li = 36, ui = class {
        constructor(e) {
            f(this, `tooltipElement`, void 0), f(this, `button`, void 0), f(this, `onMouseLeave`, void 0), this.tooltipElement = document.createElement(`div`), this.tooltipElement.className = y(`absolute  py-1.5 px-2.5 bg-token-bg-primary border border-token-border-default rounded-lg text-xs z-50 items-center cursor-pointer shadow-md flex justify-center cursor-pointer`, `transform -translate-x-1/2`), this.button = document.createElement(`button`), this.button.textContent = `Open link`, this.button.className = y(`bg-none`, `border-none`, `text-token-text-primary `, `text-sm`), this.tooltipElement.appendChild(this.button), this.onMouseLeave = e, this.tooltipElement.addEventListener(`mouseleave`, e)
        }
        show(e, t, n) {
            document.body.appendChild(this.tooltipElement), this.tooltipElement.style.left = `${e}px`, this.tooltipElement.style.top = `${t}px`, this.button.addEventListener(`click`, () => {
                window.open(n, `_blank`), this.hide()
            }, {
                once: !0
            })
        }
        hide() {
            this.tooltipElement.parentNode && this.tooltipElement.parentNode.removeChild(this.tooltipElement)
        }
    }
}));

function fi(e) {
    return X().serialize(e).length
}
var pi, mi, hi = e((() => {
    F(), Wr(), xe(), L(), Me(), pi = new R(`maxLength`), mi = (e, t, n) => new B({
        key: pi,
        state: {
            init() {
                return n
            },
            apply: (e, t) => t
        },
        filterTransaction(r) {
            if (e == null || !r.steps.some(e => e instanceof Ke || e instanceof Oe ? e.slice.size > e.to - e.from : !1)) return !0;
            let i = fi(r.doc);
            return i <= n ? !0 : (t && ge(t, e), P.logEvent(`Canvas Prosemirror Max Length`, {
                maxLength: n,
                newLength: i
            }), !1)
        }
    })
}));

function gi(e, t) {
    let {
        state: n
    } = e, {
        selection: r
    } = n, i = r.content(), {
        schema: a
    } = n, o = _i(a.topNodeType.create(null, i.content), e), s = n.doc.textBetween(r.from, r.to, `
`);
    t.clipboardData?.setData(`application/x-prosemirror`, s), t.clipboardData?.setData(`text/plain`, o), t.preventDefault()
}

function _i(e, t) {
    let n = ``;

    function r(e) {
        if (e.type.name === `paragraph`) return e.content.forEach(e => {
            r(e)
        }), n += `
`, !1;
        if (e.type.name === `contentReference`) {
            let r = e.attrs.index,
                i = vi(r, t);
            return i && (n += `[${i}]`), !1
        } else e.isText && e.text !== void 0 && (n += e.text);
        return !0
    }
    return e.descendants(r), n.endsWith(`
`) && (n = n.slice(0, -1)), n
}

function vi(e, t) {
    let n = Ze.getState(t.state),
        r = parseInt(e);
    if (n == null || r == null) return null;
    let i = n?.displayedContentReferences?.[r];
    return i == null || i.type !== `grouped_webpages` ? null : i.items?.[0]?.url
}
var yi = e((() => {
        it()
    })),
    bi, xi, Si, Ci = e((() => {
        it(), On(), bi = t(re()), ae(), xi = j(), a(), Si = class {
            constructor(e, t, n, r) {
                f(this, `dom`, void 0), f(this, `node`, void 0), f(this, `view`, void 0), f(this, `getPos`, void 0), f(this, `key`, void 0), f(this, `collectReactElement`, void 0), this.node = e, this.getPos = n, this.view = t, this.dom = document.createElement(`span`), this.dom.className = `content-reference-node`;
                let i = () => `${oe()}`;
                this.key = `content-reference-node-${i()}`, this.collectReactElement = r, this.renderReactComponent()
            }
            renderReactComponent() {
                let {
                    index: e
                } = this.node.attrs, t = Ze.getState(this.view.state);
                if (e == null) return;
                let n = t?.displayedContentReferences?.[e];
                if (!n || n.type !== `grouped_webpages`) return;
                let r = (0, xi.jsx)(kn, {
                        message: this.node.attrs.message,
                        webpageRef: n,
                        trackContentReferenceEvent: () => {},
                        index: e
                    }),
                    i = bi.createPortal(r, this.dom);
                this.collectReactElement(this.key, i)
            }
            update(e) {
                return e.attrs !== this.node.attrs && (this.node = e, this.renderReactComponent()), !0
            }
            destroy() {
                this.collectReactElement(this.key, null)
            }
        }
    })),
    wi, Ti = e((() => {
        Nt(), jt(), a(), wi = class {
            constructor(e, t, n) {
                f(this, `dom`, void 0), f(this, `node`, void 0), f(this, `getPos`, void 0), f(this, `view`, void 0), this.getPos = n, this.view = t, this.node = e;
                let r = document.createElement(`span`);
                r.className = `hive-log-wrapper`, r.style.display = `inline-block`, r.style.userSelect = `none`;
                let i = document.createElement(`span`);
                i.className = `hive-log`, i.contentEditable = `false`, i.setAttribute(`data-type`, `hive-log`);
                let a = Number.parseInt(String(e.attrs.timestamp), 10);
                i.setAttribute(`data-timestamp`, String(e.attrs.timestamp ?? ``)), i.textContent = Number.isFinite(a) ? Pt(a) : ``;
                let o = e => {
                    e.preventDefault(), e.stopPropagation()
                };
                r.addEventListener(`mousedown`, o), i.addEventListener(`mousedown`, o), i.addEventListener(`click`, e => {
                    if (e.preventDefault(), !Number.isFinite(a)) return;
                    let {
                        openSidebar: t,
                        setCurrentTime: n
                    } = Mt.getState();
                    t(), n(a)
                }), r.appendChild(i), this.dom = r
            }
            stopEvent(e) {
                return e.type === `mousedown` ? (e.preventDefault(), !0) : !1
            }
            destroy() {}
        }
    }));

function Ei(e = {}) {
    return new B({
        view(t) {
            return new Di(t, e)
        }
    })
}
var Di, Oi = e((() => {
    L(), Me(), Di = class {
        constructor(e, t) {
            this.editorView = e, this.cursorPos = null, this.element = null, this.timeout = -1, this.width = t.width ?? 1, this.color = t.color === !1 ? void 0 : t.color || `black`, this.class = t.class, this.handlers = [`dragover`, `dragend`, `drop`, `dragleave`].map(t => {
                let n = e => {
                    this[t](e)
                };
                return e.dom.addEventListener(t, n), {
                    name: t,
                    handler: n
                }
            })
        }
        destroy() {
            this.handlers.forEach(({
                name: e,
                handler: t
            }) => this.editorView.dom.removeEventListener(e, t))
        }
        update(e, t) {
            this.cursorPos != null && t.doc != e.state.doc && (this.cursorPos > e.state.doc.content.size ? this.setCursor(null) : this.updateOverlay())
        }
        setCursor(e) {
            e != this.cursorPos && (this.cursorPos = e, e == null ? (this.element.parentNode.removeChild(this.element), this.element = null) : this.updateOverlay())
        }
        updateOverlay() {
            let e = this.editorView.state.doc.resolve(this.cursorPos),
                t = !e.parent.inlineContent,
                n;
            if (t) {
                let t = e.nodeBefore,
                    r = e.nodeAfter;
                if (t || r) {
                    let e = this.editorView.nodeDOM(this.cursorPos - (t ? t.nodeSize : 0));
                    if (e) {
                        let i = e.getBoundingClientRect(),
                            a = t ? i.bottom : i.top;
                        t && r && (a = (a + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2), n = {
                            left: i.left,
                            right: i.right,
                            top: a - this.width / 2,
                            bottom: a + this.width / 2
                        }
                    }
                }
            }
            if (!n) {
                let e = this.editorView.coordsAtPos(this.cursorPos);
                n = {
                    left: e.left - this.width / 2,
                    right: e.left + this.width / 2,
                    top: e.top,
                    bottom: e.bottom
                }
            }
            let r = this.editorView.dom.offsetParent;
            this.element || (this.element = r.appendChild(document.createElement(`div`)), this.class && (this.element.className = this.class), this.element.style.cssText = `position: absolute; z-index: 50; pointer-events: none;`, this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle(`prosemirror-dropcursor-block`, t), this.element.classList.toggle(`prosemirror-dropcursor-inline`, !t);
            let i, a;
            if (!r || r == document.body && getComputedStyle(r).position == `static`) i = -pageXOffset, a = -pageYOffset;
            else {
                let e = r.getBoundingClientRect();
                i = e.left - r.scrollLeft, a = e.top - r.scrollTop
            }
            this.element.style.left = n.left - i + `px`, this.element.style.top = n.top - a + `px`, this.element.style.width = n.right - n.left + `px`, this.element.style.height = n.bottom - n.top + `px`
        }
        scheduleRemoval(e) {
            clearTimeout(this.timeout), this.timeout = setTimeout(() => this.setCursor(null), e)
        }
        dragover(e) {
            if (!this.editorView.editable) return;
            let t = this.editorView.posAtCoords({
                    left: e.clientX,
                    top: e.clientY
                }),
                n = t && t.inside >= 0 && this.editorView.state.doc.nodeAt(t.inside),
                r = n && n.type.spec.disableDropCursor,
                i = typeof r == `function` ? r(this.editorView, t, e) : r;
            if (t && !i) {
                let e = t.pos;
                if (this.editorView.dragging && this.editorView.dragging.slice) {
                    let t = Ve(this.editorView.state.doc, e, this.editorView.dragging.slice);
                    t != null && (e = t)
                }
                this.setCursor(e), this.scheduleRemoval(5e3)
            }
        }
        dragend() {
            this.scheduleRemoval(20)
        }
        drop() {
            this.scheduleRemoval(20)
        }
        dragleave(e) {
            (e.target == this.editorView.dom || !this.editorView.dom.contains(e.relatedTarget)) && this.setCursor(null)
        }
    }
}));

function ki(e) {
    return (t, n, r) => {
        let {
            doc: i,
            selection: a
        } = t, {
            empty: o,
            $head: s
        } = a;
        if (o && r?.endOfTextblock(e)) {
            let r = e === `left` || e === `up` ? -1 : 1,
                a = we.near(i.resolve(r > 0 ? s.after() : s.before()), r);
            if (a.$head?.parent.type.name === `code_block`) return n?.(t.tr.setSelection(a)), !0
        }
        return !1
    }
}
var Ai, ji = e((() => {
    bn(), je(), L(), Ai = Ne({
        ArrowLeft: ki(`left`),
        ArrowRight: ki(`right`),
        ArrowUp: ki(`up`),
        ArrowDown: ki(`down`)
    })
}));

function Mi(e, t) {
    return e.setMeta(Fi, {
        modelCursor: t
    })
}

function Ni(e) {
    return e.getMeta(Fi) ?? null
}

function Pi(e = void 0, t = void 0) {
    return new B({
        key: Fi,
        state: {
            init: (n, r) => ({
                modelCursor: e,
                deco: Ii(r, e),
                isNewCursor: !1,
                isCursorActive: t?.isCursorActive ?? !1
            }),
            apply: (e, t, n, r) => {
                let i = Ni(e)?.modelCursor ?? t.modelCursor,
                    a = Ii(r, i),
                    o = !!((!t.isCursorActive || zi(i, t.modelCursor)) && a && a.find()[0]);
                return {
                    modelCursor: i,
                    deco: a,
                    isNewCursor: o,
                    isCursorActive: !!i && (o || t.isCursorActive)
                }
            }
        },
        props: {
            decorations(e) {
                return this.getState(e)?.deco
            }
        },
        view(e) {
            return {
                update(e) {
                    let {
                        deco: t,
                        isNewCursor: n
                    } = Fi.getState(e.state), r = t && t.find()[0];
                    r && n && Ri(e, r)
                }
            }
        }
    })
}
var Fi, Ii, Li, Ri, zi, Bi = e((() => {
    un(), bn(), Xt(), tn(), ot(), Bt(), L(), H(), Fi = new R(`modelCursor`), Ii = (e, t) => {
        let {
            doc: n
        } = e, r = [];
        if (!t) return z.empty;
        let {
            modelSelectionPositionRange: i,
            modelCursorPosition: a
        } = t, {
            sourceRangeToPmRange: o,
            sourceEndToPmPos: s
        } = Zt(n);
        if (a != null) {
            let e = en(a, s(a), `min`);
            if (e == null) return z.empty;
            if (e != null && Qt(n, e)) {
                let t = n.resolve(e);
                if (n.nodeAt(e)?.type.name === pn.proseMirrorNodeName() || t.nodeBefore?.type.name === pn.proseMirrorNodeName()) return z.empty
            }
            r.push(V.widget(e, () => {
                let e = document.createElement(`span`);
                return e.className = zt.modelCursor, e
            }, {
                ignoreSelection: !0,
                side: 1
            }))
        } else if (i != null) {
            let {
                start: e,
                end: t
            } = o(i), n = en(i.start, e, `max`), a = en(i.end, t, `min`);
            if (n == null || a == null) return z.empty;
            r.push(V.inline(n, a, {
                class: `${st} bg-[Highlight]!`
            }))
        }
        return r.length ? z.create(n, r) : z.empty
    }, Li = (e, t) => {
        let n = e.domAtPos(t)?.node;
        if (n === e.dom) return null;
        for (; n && !(n instanceof HTMLElement);) n = n.parentNode;
        return n
    }, Ri = (e, t) => {
        Li(e, t.to)?.scrollIntoView({
            behavior: `smooth`,
            block: `center`
        })
    }, zi = (e, t) => {
        if (e && !t) return !0;
        let n = e?.modelSelectionPositionRange?.start,
            r = t?.modelSelectionPositionRange?.start;
        return n !== void 0 && (r === void 0 || n !== r)
    }
}));

function Vi(e) {
    return e.setMeta(Wi, !0)
}

function Hi(e) {
    return e.getMeta(Wi) === !0
}

function Ui(e) {
    let t = e.content.size - (e.lastChild?.content.size ?? 0) - 1;
    if (Qt(e, t)) return U.create(e, t)
}
var Wi, Gi, Ki, qi, Ji, Yi, Xi = e((() => {
        _r(), F(), yr(), Xr(), cn(), Qr(), un(), bn(), sn(), it(), In(), Qe(), ei(), di(), hi(), Vn(), Zn(), bt(), cr(), ut(), xe(), Xe(), yi(), Ci(), te(), kt(), Ti(), Oi(), Se(), je(), Fe(), L(), H(), ji(), Wr(), Bi(), Wi = `ignoreDocChange`, Gi = ({
            intl: e,
            toaster: t,
            value: n,
            comments: r,
            diff: i,
            maxLength: a = ye,
            selection: o,
            onFocus: s,
            onBlur: c,
            onSave: l,
            safeUrls: u,
            modelCursor: d,
            isDisabled: f,
            prevState: p,
            contentReferences: m,
            shouldUseContentReferencePlugin: h
        }) => {
            let g = X(),
                _ = g.schema(),
                v = n;
            a != null && v.length > a && (v = v.slice(0, a), t != null && e != null && ge(t, e));
            let y, b = [],
                x = [];
            i && i.edits.length > 0 ? {
                doc: y,
                addedRanges: b,
                deletedRanges: x
            } = Yr({
                diff: i
            }) : y = g.parse(v);
            let S = o ? vr(y, o) : Ui(y),
                C = () => {
                    let e = p?.plugins.find(e => e.spec.key === tt().spec.key);
                    return e == null || p == null ? tt() : tt({}, e.getState(p))
                },
                w = e => {
                    let t = p?.plugins.find(e => e.spec.key === Pi().spec.key);
                    return Pi(e, p && t?.getState(p))
                };
            return Ce.create({
                doc: y,
                schema: _,
                selection: S,
                plugins: [...h ? [at(m)] : [], mi(e, t, a), g.inputRulesPlugin(), g.keymapPlugin(), Ne({
                    "Mod-s": () => (l(), !0),
                    "Mod-z": et,
                    "Mod-shift-z": $e,
                    "Mod-y": $e
                }), Ai, $r(), Ei(), Ge(), C(), Zr(s, c), ln(r ?? []), ...i ? [Xn(b, x)] : [], w(d), Pn(new Set(u ?? [])), zn(e, f), si(), ...sr()]
            })
        }, Ki = (e, t) => {
            let n = X(),
                r = n.schema(),
                i = n.parse(e);
            return Ce.create({
                doc: i,
                schema: r,
                plugins: [ln(t ?? [])]
            })
        }, qi = ({
            mount: e,
            value: t,
            comments: n,
            isDarkMode: r
        }) => new Ae({
            mount: e
        }, {
            editable: () => !1,
            state: Ki(t, n),
            nodeViews: {
                [dn]: (e, t, n) => new Y(e, t, n, r)
            }
        }), Ji = (e, {
            intl: t,
            toaster: n,
            comments: r,
            value: i,
            maxLength: a = ye,
            onBlur: o,
            onFocus: s,
            onChange: c,
            onUpdate: l,
            onSave: u,
            safeUrls: d,
            modelCursor: f,
            selection: p,
            isDisabled: m,
            diff: h,
            prevState: g,
            contentReferences: _,
            collectReactElement: v
        }, y = !1) => {
            let b = nt(),
                S = Gi({
                    intl: t,
                    toaster: n,
                    comments: r,
                    value: i,
                    maxLength: a,
                    onBlur: o,
                    onFocus: s,
                    onSave: u,
                    safeUrls: d,
                    modelCursor: f,
                    selection: p,
                    isDisabled: m,
                    diff: h,
                    prevState: g,
                    contentReferences: _,
                    collectReactElement: v,
                    shouldUseContentReferencePlugin: b
                });
            l(S);
            let C = e => {
                    let t = E.state.apply(e);
                    if (E.updateState(t), l(t), !e.docChanged || Hi(e)) return;
                    let n = ir(t);
                    if (!n) return;
                    let {
                        doc: r
                    } = t, {
                        changeset: i
                    } = n;
                    c?.({
                        transaction: e,
                        changeset: i,
                        doc: r,
                        getSerializedDocument: () => X().serialize(r),
                        getAdjustedComments: () => {
                            let e = an(rn, t);
                            if (e == null) return [];
                            let n = X(),
                                i = vt(n.parse(n.serialize(r)), e.positions);
                            return lt(e.comments, i)
                        }
                    })
                },
                w = X(),
                T = {
                    ...w.nodeViews(),
                    ...b ? {
                        [x]: (e, t, n) => new Si(e, t, n, v)
                    } : {},
                    [At]: (e, t, n) => new wi(e, t, n),
                    ...h == null ? {
                        [dn]: (e, t, n) => new Y(e, t, n, y)
                    } : {}
                },
                E = new Ae({
                    mount: e
                }, {
                    state: S,
                    editable: () => !m,
                    dispatchTransaction: C,
                    nodeViews: T,
                    ...b ? {
                        handleDOMEvents: {
                            copy: (e, t) => gi(e, t)
                        }
                    } : {},
                    handlePaste(e, r) {
                        let i;
                        if (b && (i = r.clipboardData?.getData(`application/x-prosemirror`)), i ||= r.clipboardData?.getData(`text/plain`), i == null) return !1;
                        P.logEvent(`Canvas Prosemirror Paste`, {
                            textLength: i.length
                        });
                        let o = fi(e.state.doc),
                            s = o + i.length,
                            c = a != null && s > a;
                        c && n != null && t != null && ge(n, t);
                        let l = r.clipboardData?.getData(`text/html`);
                        if (l) {
                            let t = Yi(l),
                                n = new window.DOMParser().parseFromString(t, `text/html`),
                                r = new Le(Pe.fromSchema(e.state.schema).parse(n.body).content, 1, 1);
                            return e.dispatch(e.state.tr.replaceSelection(r)), !0
                        }
                        let u = i;
                        if (c) {
                            let e = a - o - 50;
                            u = e > 0 ? i.slice(0, e) : ``
                        }
                        return rt(e, u, b), !0
                    }
                });
            return {
                view: E,
                pmu: w
            }
        }, Yi = e => e.replace(/<b(.*?)id="docs-internal-guid(.*?)">([\w\W]*?)<\/b>/gi, `$3`)
    })),
    Zi, Qi, $i = e((() => {
        Zi = `_9XkC5G_main`, Qi = {
            main: Zi
        }
    }));

function ea(e, t) {
    let n = t.target;
    if (n instanceof Element && [J.PROSEMIRROR_EDITOR_CONTAINER, J.PROSEMIRROR_CONTEXT_CHILDREN].some(e => n.closest(`#${e}`) != null)) return !1;
    e.focus();
    let r = fr(e.dom.getBoundingClientRect(), {
            x: t.clientX,
            y: t.clientY
        }),
        i = e.state.tr,
        a = e.posAtCoords({
            left: r.x,
            top: r.y
        });
    if (a != null) {
        let t = Math.min(a.pos, $t(e.state.doc) - 1);
        i.setSelection(new U(i.doc.resolve(t))), e.dispatch(i)
    }
    return !0
}
var Q, ta, $, na, ra, ia, aa = e((() => {
    A(), un(), In(), Vn(), Zn(), cr(), ur(), ot(), dr(), xe(), pr(), Xe(), C(), o(), g(), l(), b(), i(), D(), L(), Q = t(N()), M(), ta = t(wt()), Xi(), yt(), sn(), Bi(), $i(), $ = j(), na = ({
        editorRef: e,
        wrapperClassName: t,
        transparentBackground: n = !1,
        comments: r,
        commentingOn: i,
        diff: a,
        paddingBottom: o,
        hoveredCommentId: l,
        focusedCommentId: f,
        hoveredEditId: p,
        rejectedEdits: m,
        showChanges: h,
        isDisabled: g = !1,
        value: _,
        onBlur: b,
        onFocus: x,
        onChange: S,
        onMouseLeave: C,
        onSave: w,
        safeUrls: T,
        children: E,
        width: D,
        modelCursor: k,
        shouldResetSelection: A = !1,
        contentReferences: te
    }) => {
        let j = se(),
            re = ne(),
            ie = (0, Q.useRef)(null),
            M = (0, Q.useRef)(null),
            [N, ae] = (0, Q.useState)(null),
            oe = s(),
            ce = v(),
            [{
                width: le
            }, ue] = (0, ta.default)(),
            de = (0, Q.useRef)(b);
        de.current = b;
        let fe = (0, Q.useRef)(x);
        fe.current = x;
        let pe = u()?.planType ?? c.GUEST,
            P = ee(`1958014328`) ? 1e7 : ve(pe),
            F = (0, Q.useRef)(S);
        F.current = S;
        let me = (0, Q.useRef)(w);
        me.current = w;
        let I = nt(),
            [he, ge] = (0, Q.useState)(() => new Map),
            _e = (0, Q.useCallback)((e, t) => {
                ge(n => {
                    let r = new Map(n);
                    return t == null ? r.delete(e) : r.set(e, t), r
                })
            }, []),
            ye = (0, Q.useCallback)((e = _) => Gi({
                intl: j,
                toaster: re,
                comments: r,
                diff: a,
                value: e,
                selection: A ? void 0 : M.current?.state.selection,
                onBlur: e => de.current?.(e),
                onFocus: e => fe.current?.(e),
                onSave: () => me.current?.(),
                modelCursor: k,
                isDisabled: g,
                safeUrls: T,
                prevState: N,
                contentReferences: te,
                collectReactElement: _e,
                shouldUseContentReferencePlugin: I,
                maxLength: P
            }), [j, re, r, a, _, A, k, g, T, N, te, _e, I, P]),
            be = (0, Q.useCallback)(e => {
                let t = ye(e);
                M.current?.updateState(t), ae(t)
            }, [ye]);
        (0, Q.useImperativeHandle)(e, () => ({
            UNSAFE_setValue: be,
            revertChanges: () => {
                if (M.current == null) throw Error(`Tried to call revertChanges, but viewRef.current is null`);
                or(M.current)
            },
            flushChanges: () => {
                if (M.current == null) throw Error(`Tried to call flushChanges, but viewRef.current is null`);
                ar(M.current)
            },
            maybeFocusOnEditor: e => {
                if (M.current == null) throw Error(`Tried to call maybeFocus, but viewRef.current is null`);
                return ea(M.current, e)
            },
            viewRef: M
        })), d(() => {
            let {
                current: e
            } = ie;
            if (!e) return;
            let {
                view: t
            } = Ji(e, {
                intl: j,
                toaster: re,
                comments: r,
                diff: a,
                value: _,
                onBlur: e => de.current?.(e),
                onFocus: e => fe.current?.(e),
                onChange: e => F.current?.(e),
                onUpdate: ae,
                onSave: () => me.current?.(),
                isDisabled: g,
                safeUrls: T,
                prevState: N,
                contentReferences: te,
                collectReactElement: _e,
                shouldUseContentReferencePlugin: I,
                maxLength: P
            }, oe);
            return M.current = t, () => {
                t?.destroy()
            }
        }, [a, P]), (0, Q.useEffect)(() => {
            M.current?.setProps({
                editable: () => !g
            })
        }, [g]), q(e => Ln(e, g), M, [g]), q(e => {
            if (!ce) return;
            let {
                schema: t
            } = e.doc.type, n = t.nodes.code_block;
            return n ? (e.doc.descendants((t, r) => {
                if (t.type === n) {
                    let n = t.type.create({
                        ...t.attrs,
                        isDarkMode: oe
                    }, t.content, t.marks);
                    e.replaceWith(r, r + t.nodeSize, n)
                }
            }), Vi(e)) : e
        }, M, [ce, oe]), q(e => e.setMeta(rr, h), M, [h]), q(e => Mi(e, k), M, [k]), q(e => e.setMeta(rn, {
            comments: r,
            commentingOn: i,
            hoveredCommentId: l,
            focusedCommentId: f
        }), M, [r, l, f, i]), q(e => e.setMeta(Jn, {
            hoveredEditId: p,
            rejectedEdits: m ?? new Set
        }), M, [p, m]), q(e => Mn(e, new Set(T ?? [])), M, [T]);
        let xe = (0, Q.useCallback)(() => M.current, [M]),
            L = [],
            Se = [];
        return Q.Children.forEach(E, e => {
            if (!(0, Q.isValidElement)(e)) return;
            let {
                type: t
            } = e;
            if (t === ia) L.push(e);
            else if (t === ra) Se.push(e);
            else throw Error(`Invalid Prosemirror child: ` + JSON.stringify(t))
        }), (0, $.jsx)(xt.Provider, {
            value: xe,
            children: (0, $.jsx)(Ct.Provider, {
                value: N,
                children: (0, $.jsxs)(St.Provider, {
                    value: le,
                    children: [(0, $.jsx)(`div`, {
                        id: J.PROSEMIRROR_CONTEXT_CHILDREN,
                        children: L
                    }), (0, $.jsxs)(`div`, {
                        className: t,
                        onMouseLeave: C,
                        id: J.PROSEMIRROR_EDITOR_CONTAINER,
                        style: {
                            paddingBottom: o
                        },
                        children: [(0, $.jsx)(`div`, {
                            ref: O(ie, ue),
                            className: y(Qi.main, ct.composer, `markdown prose dark:prose-invert contain-inline-size focus:outline-hidden`, n ? `bg-transparent` : `bg-[var(--canvas-bg,var(--bg-primary))]`),
                            style: {
                                width: D
                            }
                        }), Se, I ? Array.from(he.values()) : null]
                    })]
                })
            })
        })
    }, ra = ({
        children: e
    }) => e, ia = ({
        children: e
    }) => e, na.EditorChildren = ra, na.ContextChildren = ia
}));
export {
    Ki as a, ii as c, oi as d, J as f, Qi as i, ti as l, aa as n, qi as o, dr as p, $i as r, Xi as s, na as t, ni as u
};
//# sourceMappingURL=ed61b531-iqpjc1dd0zasa976.js.map
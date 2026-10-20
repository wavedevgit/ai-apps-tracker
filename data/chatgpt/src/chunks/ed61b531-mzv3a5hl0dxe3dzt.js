import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B8 as n,
    BU as r,
    CN as i,
    Cot as a,
    Gnt as o,
    HU as s,
    Hot as c,
    K8 as l,
    LN as u,
    P1 as d,
    R1 as f,
    RN as p,
    S2 as m,
    SZ as h,
    Sot as g,
    Uot as _,
    V8 as v,
    X5 as y,
    Y5 as b,
    Znt as x,
    _Z as S,
    aE as C,
    aat as w,
    bN as T,
    hst as E,
    iE as D,
    n1 as ee,
    nct as te,
    sat as O,
    t1 as k,
    wN as ne,
    x2 as re
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as A,
    Kt as ie,
    Ln as ae,
    Rn as j,
    Vn as M,
    Zt as oe,
    rn as se,
    zn as ce
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    GRn as le,
    HVt as ue,
    UVt as de,
    _9 as N,
    _ct as fe,
    b9 as pe,
    cUn as P,
    hct as me,
    lUn as he,
    mct as ge,
    pWn as F,
    rCt as _e,
    sUn as I,
    tCt as ve,
    uWn as ye,
    v9 as be,
    y9 as xe
} from "./conversation-small-ikg0dwuw782klweb.js";
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
} from "./82782bc9-fcii2id0x6lspwtj.js";
import {
    AS as qe,
    JS as Je,
    KS as Ye,
    QC as Xe,
    _S as Ze,
    _w as Qe,
    aS as $e,
    gw as et,
    iw as tt,
    sS as nt,
    tw as rt,
    vS as it,
    vw as at
} from "./8b34dbc2-dtawqv9t1aqckqj4.js";
import {
    c as ot,
    r as st,
    s as ct
} from "./31cec8d8-ejzahhq8v425zkie.js";
import {
    c as lt,
    s as ut
} from "./dced7e81-b1h5myj7rhldv9ex.js";
import {
    E as dt,
    U as ft,
    f as pt,
    p as mt,
    r as ht,
    s as gt,
    w as _t
} from "./bcae0416-e78m846wlyhp5bln.js";
import {
    h as vt,
    i as yt,
    m as bt,
    n as xt,
    r as St,
    t as Ct
} from "./df59e297-bfvy5l9zkio71h8l.js";
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
} from "./6afb0137-oepx8zoj7ibyqgt8.js";
import {
    a as jt,
    o as Mt,
    r as Nt,
    t as Pt
} from "./e74608d1-ek1oed2698v1vnmf.js";
import {
    C as Ft,
    E as It,
    b as Lt,
    o as Rt
} from "./bcae0416-bwp8c2n76opgwvt1.js";
import {
    n as zt,
    t as Bt
} from "./21d5ff49-jb0dwvqzgbxncuvu.js";
import {
    n as Vt,
    r as Ht,
    s as Ut
} from "./bcae0416-grdo442dtzvpv7lv.js";
import {
    a as Wt,
    i as Gt,
    t as Kt
} from "./bcae0416-dpsv7blwgkgiujvr.js";
import {
    n as qt,
    r as Jt,
    t as Yt
} from "./6cb574fa-i008m956onexmon5.js";
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
} from "./e99f8e1a-fg59wq41vy28awkl.js";
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
} from "./e5d54aa7-knn5uryobogvpr34.js";
import {
    n as Cn,
    t as wn
} from "./1c4de3ec-fpp8xgrcwieg4sif.js";
import {
    n as Tn,
    r as En,
    t as Dn
} from "./60549c99-ljg58x2g4xar4kyp.js";
import {
    a as On,
    t as kn
} from "./dccfc4ad-fhcffnwn0q0duyvl.js";

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
        L(), H(), j(), W = new R(`placeholder`), Bn = ae({
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
    return b({
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
    return b(`bg-red-100 dark:bg-red-600`, Wn({
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
    return b(Hn[`override-strong-color`], `text-green-600 dark:text-green-200 bg-green-100 dark:bg-green-600`, Wn({
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
        Un(), y()
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
                g(this, `length`, void 0), g(this, `step`, void 0), this.length = e, this.step = t
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
        }, g(G, `none`, []), Qn = class {
            constructor(e, t, n, r, i, a) {
                g(this, `fromA`, void 0), g(this, `toA`, void 0), g(this, `fromB`, void 0), g(this, `toB`, void 0), g(this, `deleted`, void 0), g(this, `inserted`, void 0), this.fromA = e, this.toA = t, this.fromB = n, this.toB = r, this.deleted = i, this.inserted = a
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
                g(this, `doc`, void 0), g(this, `changes`, void 0), this.doc = e, this.changes = t
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
        lr = t(M()), q = (e, t, n) => {
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
        de()
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
                g(this, `pmView`, void 0), g(this, `getPos`, void 0), g(this, `node`, void 0), g(this, `updating`, !1), g(this, `cm`, void 0), g(this, `languageCompartment`, void 0), g(this, `themeCompartment`, void 0), g(this, `setLanguage`, async e => {
                    let t = await Yt(e);
                    t && this.cm.dispatch({
                        effects: this.languageCompartment.reconfigure(t)
                    })
                }), g(this, `setTheme`, e => {
                    let t = [gr(e), It(on(e))];
                    this.cm.dispatch({
                        effects: this.themeCompartment.reconfigure(t)
                    })
                }), g(this, `handleBackspace`, e => {
                    let {
                        selection: t
                    } = e.state;
                    if (!(t.main.empty && t.main.from === 0) || this.cm.state.doc.length > 0) return !1;
                    let n = Ye(this.pmView.state, this.pmView.dispatch);
                    return this.pmView.focus(), n
                }), g(this, `handleShiftEnter`, () => {
                    let e = Je(this.pmView.state, this.pmView.dispatch);
                    return this.pmView.focus(), e
                }), g(this, `dispatch`, e => {
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
                }), g(this, `update`, e => {
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
                }), g(this, `asProseMirrorSelection`, e => {
                    let t = (this.getPos() ?? 0) + 2,
                        {
                            anchor: n,
                            head: r
                        } = this.cm.state.selection.main;
                    return U.create(e, n + t, r + t)
                }), g(this, `forwardSelection`, () => {
                    if (!this.cm.hasFocus) return;
                    let {
                        state: e
                    } = this.pmView, t = this.asProseMirrorSelection(e.doc);
                    t.eq(e.selection) || this.pmView.dispatch(e.tr.setSelection(t))
                }), g(this, `maybeEscape`, (e, t) => n => {
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
                }), g(this, `setSelection`, (e, t) => {
                    this.focus(), this.updating = !0, this.cm.dispatch({
                        selection: {
                            anchor: e,
                            head: t
                        }
                    }), this.updating = !1
                }), g(this, `focus`, () => {
                    this.cm.focus(), this.forwardSelection()
                }), g(this, `selectNode`, () => {
                    this.focus()
                }), g(this, `stopEvent`, () => !0), g(this, `destroy`, () => {
                    this.cm.destroy()
                }), g(this, `_setIsCodeBlockView`, () => {
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
        }, g(Y, `_getIsCodeBlockView`, e => e.dataset.isCodeBlockView === `true`)
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
                g(this, `rules`, void 0);
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
                return e.props.handleTextInput = (n, r, i, a) => le(n.state) ? !1 : t?.call(e, n, r, i, a) ?? !1, e.props.handleDOMEvents = {
                    ...e.props.handleDOMEvents,
                    compositionend: (t, r) => le(t.state) ? !1 : n?.call(e, t, r) ?? !1
                }, e
            }
        }
    })),
    Sr, Cr = e((() => {
        c(), Ue(), je(), a(), Sr = class {
            constructor(e, t) {
                g(this, `keymap`, void 0), this.keymap = new Map;
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
                for (let t in e) this.keymap.get(t) || this.keymap.set(t, []), _(this.keymap.get(t)).push(e[t])
            }
        }
    })),
    wr, Tr = e((() => {
        vn(), a(), wr = class {
            constructor(e) {
                g(this, `nodeViews`, void 0), this.nodeViews = {};
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
        O(), Fe(), a(), Er = class {
            constructor(e) {
                g(this, `nodes`, {}), g(this, `marks`, {});
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
                    w.addError(e, {
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
        ye(), a(), Or = class {
            constructor(e) {
                g(this, `extensionManager`, void 0), this.extensionManager = e
            }
            build() {
                let e = F();
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
                g(this, `markExtensionList`, void 0), g(this, `nodeExtensionList`, void 0), g(this, `otherExtensionList`, void 0), this.markExtensionList = new Map, this.nodeExtensionList = new Map, this.otherExtensionList = new Map;
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
                g(this, `extensionManager`, void 0), this.extensionManager = e
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
        n(), ve(), a(), Ir = class e {
            constructor(e, t) {
                g(this, `extensionManager`, void 0), g(this, `proseMirrorSchema`, void 0), this.extensionManager = e, this.proseMirrorSchema = t
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
                            if (!a.unistToProseMirrorTest(t) || _e(t) && a.customDirectiveName() != null && a.customDirectiveName() !== t.name) continue;
                            let o = [];
                            e.unistNodeIsParent(t) && (o = t.children.flatMap(e => i(e, n)));
                            let {
                                position: s
                            } = t, c = s?.start.offset ?? r, u = s?.end.offset;
                            if (u == null && `value` in t && typeof t.value == `string`) {
                                let {
                                    value: e
                                } = t;
                                u = c + e.length
                            }
                            u ??= c, r = u;
                            let d = {
                                start: c,
                                end: u
                            };
                            return l(a.unistNodeToProseMirrorNodes({
                                node: t,
                                schema: this.proseMirrorSchema,
                                convertedChildren: o,
                                context: n,
                                attrs: d
                            })).filter(v)
                        }
                        return console.warn(`Couldn't find any way to convert unist node of type "` + t.type + `" to a ProseMirror node.`), []
                    };
                return i(t, n)
            }
        }
    })),
    Rr, zr, Br = e((() => {
        P(), c(), xr(), Cr(), Tr(), Dr(), kr(), Nr(), Fr(), Lr(), a(), Rr = 5, zr = class {
            constructor(e = []) {
                g(this, `builtSchema`, void 0), g(this, `inputRulesBuilder`, void 0), g(this, `keymapBuilder`, void 0), g(this, `nodeViewBuilder`, void 0), g(this, `unistToProseMirrorConverter`, void 0), g(this, `proseMirrorToUnistConverter`, void 0), g(this, `unified`, void 0), g(this, `memoizedProsemirrorDocs`, new Map);
                let t = new Mr(e);
                this.builtSchema = new Er(t).build(), this.inputRulesBuilder = new br(t, this.builtSchema), this.keymapBuilder = new Sr(t, this.builtSchema), this.nodeViewBuilder = new wr(t), this.unistToProseMirrorConverter = new Ir(t, this.builtSchema), this.proseMirrorToUnistConverter = new Pr(t), this.unified = new Or(t).build()
            }
            parse(e) {
                try {
                    if (this.memoizedProsemirrorDocs.has(e)) return _(this.memoizedProsemirrorDocs.get(e));
                    let t = this.unistToProseMirrorConverter.convert(this.parseUnist(e));
                    if (this.memoizedProsemirrorDocs.set(e, t), this.memoizedProsemirrorDocs.size > Rr) {
                        let e = this.memoizedProsemirrorDocs.keys().next().value;
                        e && this.memoizedProsemirrorDocs.delete(e)
                    }
                    return t
                } catch (e) {
                    I.logError(`Failed to parse document`, e)
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
        P(), Wr(), tn(), fe(), re(), k(), Gr = (e, t, n, r) => {
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
        }, Kr = (e, t) => m(e.parentNodeNamesAtStart, t.parentNodeTypeNameStack), qr = new WeakMap, Jr = ({
            diff: e
        }) => {
            let t = new ge(me.GetDiffedDoc, {
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
                m = 0,
                h = 0,
                g = [],
                _ = (e, t, n) => {
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
                        g.push(e)
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
                    v = f(i);
                t.endBlock(`transform_positions`);
                let {
                    start: y,
                    end: b
                } = a, {
                    start: x,
                    end: S
                } = v, C = i.start !== i.end, w = C ? Gr(o, x, S, i) : null;
                t.startBlock(`get_merged_doc_positions`);
                let {
                    positions: T
                } = Zt(p);
                t.endBlock(`get_merged_doc_positions`);
                let E = Math.max(...y.map(({
                        pmPos: e
                    }) => e)),
                    D = Math.min(...b.map(({
                        pmPos: e
                    }) => e)),
                    te = [].concat(b, y),
                    O = r.start !== r.end && s.textBetween(E, D).length > 0,
                    k = !1;
                if (O && !C) u.push({
                    editId: n,
                    start: E + m,
                    end: D + m
                }), k = !0;
                else if (!O && !C) k = !0;
                else {
                    let e = te.map(({
                        pmPos: e
                    }) => T[e + m]);
                    for (let t of w ?? []) {
                        let r = _(n, t, e);
                        if (r == null) continue;
                        let i = r[0],
                            a = t.slice.size,
                            o = i < b.length;
                        o || (m += a), O && u.push({
                            editId: n,
                            start: E + m,
                            end: D + m
                        }), o && (m += a), k = !0;
                        break
                    }
                }
                if (!k && w != null) {
                    let e = Math.min(...y.map(({
                        pmPos: e
                    }) => e)) + m - 1;
                    for (let t of w) try {
                        p = p.replace(e, e, t.slice), l.push({
                            editId: n,
                            start: e,
                            end: e + t.slice.size
                        }), m += t.slice.size, O && u.push({
                            editId: n,
                            start: E + m,
                            end: D + m
                        }), k = !0;
                        break
                    } catch (e) {
                        g.push(e)
                    }
                }
                k ? I.logEvent(`Canvas Diff Edit Success`) : (I.logEvent(`Canvas Diff Edit Fail`), I.logError(`Failed to insert edit for diffed doc`, ee(g), {
                    errors: g.map(he),
                    replaceFromCandidates: y,
                    replaceToCandidates: b,
                    sliceFromCandidates: x,
                    sliceToCandidates: S
                }), h++)
            }
            return I.logDistribution(`Canvas Diff Edit Success Ratio`, (c.length - h) / c.length), I.logDistribution(`Canvas Diff Edit Fail Count`, h), I.logDistribution(`Canvas Diff Edit Success Count`, c.length - h), I.logDistribution(`Canvas Diff Edit Count`, c.length), t.endBlock(`get_diffed_doc`), {
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
    Zr, Qr, $r = e((() => {
        _r(), L(), Zr = new R(`focus`), Qr = (e, t) => new B({
            key: Zr,
            state: {
                init: () => !1,
                apply(e, t) {
                    let n = e.getMeta(Zr);
                    return typeof n == `boolean` ? n : t
                }
            },
            props: {
                handleDOMEvents: {
                    blur: (e, n) => {
                        let {
                            relatedTarget: r
                        } = n;
                        return r != null && Y.isInCodeBlockView(r) ? !1 : (t(n), e.dispatch(e.state.tr.setMeta(Zr, !1)), !1)
                    },
                    focus: (t, n) => (e(n), t.dispatch(t.state.tr.setMeta(Zr, !0)), !1)
                }
            }
        })
    })),
    ei, ti = e((() => {
        Tn(), L(), H(), ei = () => new B({
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

function ni(e, t) {
    let n = t && e.dom?.querySelectorAll(`[data-edit-id="${t}"]`);
    return n ? Array.from(n) : []
}

function ri(e, t) {
    return ni(e, t).flatMap(e => Array.from(e.getClientRects()))
}

function ii(e, t, n) {
    return e >= n.left && e <= n.right && t >= n.top && t <= n.bottom
}

function ai(e) {
    return {
        left: Math.min(...e.map(e => e.left)),
        right: Math.max(...e.map(e => e.right)),
        top: Math.min(...e.map(e => e.top)),
        bottom: Math.max(...e.map(e => e.bottom))
    }
}

function oi(e, t, n) {
    return n.some(n => ii(e, t, n)) ? !0 : n.length < 2 ? !1 : n.some(n => e >= n.left && e <= n.right && t > n.bottom) && n.some(n => e >= n.left && e <= n.right && t < n.top)
}
var si = e((() => {}));

function ci() {
    let e = null,
        t = null,
        n = n => {
            if (e == null || t == null) return !1;
            let r = Array.from(t.getClientRects()),
                i = e.tooltipElement.getBoundingClientRect();
            if (r.length === 1) {
                let e = r[0];
                return !ii(n.clientX, n.clientY, ai([e, i]))
            } else return !oi(n.clientX, n.clientY, [i, ...r])
        },
        r = (r, a) => {
            e &&= (e.hide(), null);
            let o = r.getAttribute(`href`);
            if (!o) return;
            let s = Array.from(r.getClientRects()),
                c = s.find(e => ii(a.clientX, a.clientY, e)) ?? s[0],
                l = c.left + c.width / 2,
                u = c.top - ui;
            e = new di(e => {
                n(e) && i()
            }), e.show(l, u, o), t = r
        },
        i = () => {
            e &&= (e.hide(), null), t = null
        };
    return new B({
        key: li,
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
var li, ui, di, fi = e((() => {
    si(), y(), L(), a(), li = new R(`linkTooltip`), ui = 36, di = class {
        constructor(e) {
            g(this, `tooltipElement`, void 0), g(this, `button`, void 0), g(this, `onMouseLeave`, void 0), this.tooltipElement = document.createElement(`div`), this.tooltipElement.className = b(`absolute  py-1.5 px-2.5 bg-token-bg-primary border border-token-border-default rounded-lg text-xs z-50 items-center cursor-pointer shadow-md flex justify-center cursor-pointer`, `transform -translate-x-1/2`), this.button = document.createElement(`button`), this.button.textContent = `Open link`, this.button.className = b(`bg-none`, `border-none`, `text-token-text-primary `, `text-sm`), this.tooltipElement.appendChild(this.button), this.onMouseLeave = e, this.tooltipElement.addEventListener(`mouseleave`, e)
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

function pi(e) {
    return X().serialize(e).length
}
var mi, hi, gi = e((() => {
    P(), Wr(), be(), L(), Me(), mi = new R(`maxLength`), hi = (e, t, n) => new B({
        key: mi,
        state: {
            init() {
                return n
            },
            apply: (e, t) => t
        },
        filterTransaction(r) {
            if (e == null || !r.steps.some(e => e instanceof Ke || e instanceof Oe ? e.slice.size > e.to - e.from : !1)) return !0;
            let i = pi(r.doc);
            return i <= n ? !0 : (t && xe(t, e), I.logEvent(`Canvas Prosemirror Max Length`, {
                maxLength: n,
                newLength: i
            }), !1)
        }
    })
}));

function _i(e, t) {
    let {
        state: n
    } = e, {
        selection: r
    } = n, i = r.content(), {
        schema: a
    } = n, o = vi(a.topNodeType.create(null, i.content), e), s = n.doc.textBetween(r.from, r.to, `
`);
    t.clipboardData?.setData(`application/x-prosemirror`, s), t.clipboardData?.setData(`text/plain`, o), t.preventDefault()
}

function vi(e, t) {
    let n = ``;

    function r(e) {
        if (e.type.name === `paragraph`) return e.content.forEach(e => {
            r(e)
        }), n += `
`, !1;
        if (e.type.name === `contentReference`) {
            let r = e.attrs.index,
                i = yi(r, t);
            return i && (n += `[${i}]`), !1
        } else e.isText && e.text !== void 0 && (n += e.text);
        return !0
    }
    return e.descendants(r), n.endsWith(`
`) && (n = n.slice(0, -1)), n
}

function yi(e, t) {
    let n = Qe.getState(t.state),
        r = parseInt(e);
    if (n == null || r == null) return null;
    let i = n?.displayedContentReferences?.[r];
    return i == null || i.type !== `grouped_webpages` ? null : i.items?.[0]?.url
}
var bi = e((() => {
        at()
    })),
    xi, Si, Ci, wi = e((() => {
        at(), On(), xi = t(ie()), oe(), Si = A(), a(), Ci = class {
            constructor(e, t, n, r) {
                g(this, `dom`, void 0), g(this, `node`, void 0), g(this, `view`, void 0), g(this, `getPos`, void 0), g(this, `key`, void 0), g(this, `collectReactElement`, void 0), this.node = e, this.getPos = n, this.view = t, this.dom = document.createElement(`span`), this.dom.className = `content-reference-node`;
                let i = () => `${se()}`;
                this.key = `content-reference-node-${i()}`, this.collectReactElement = r, this.renderReactComponent()
            }
            renderReactComponent() {
                let {
                    index: e
                } = this.node.attrs, t = Qe.getState(this.view.state);
                if (e == null) return;
                let n = t?.displayedContentReferences?.[e];
                if (!n || n.type !== `grouped_webpages`) return;
                let r = (0, Si.jsx)(kn, {
                        message: this.node.attrs.message,
                        webpageRef: n,
                        trackContentReferenceEvent: () => {},
                        index: e
                    }),
                    i = xi.createPortal(r, this.dom);
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
    Ti, Ei = e((() => {
        Nt(), jt(), a(), Ti = class {
            constructor(e, t, n) {
                g(this, `dom`, void 0), g(this, `node`, void 0), g(this, `getPos`, void 0), g(this, `view`, void 0), this.getPos = n, this.view = t, this.node = e;
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

function Di(e = {}) {
    return new B({
        view(t) {
            return new Oi(t, e)
        }
    })
}
var Oi, ki = e((() => {
    L(), Me(), Oi = class {
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

function Ai(e) {
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
var ji, Mi = e((() => {
    bn(), je(), L(), ji = Ne({
        ArrowLeft: Ai(`left`),
        ArrowRight: Ai(`right`),
        ArrowUp: Ai(`up`),
        ArrowDown: Ai(`down`)
    })
}));

function Ni(e, t) {
    return e.setMeta(Z, {
        modelCursor: t
    })
}

function Pi(e) {
    return e.getMeta(Z) ?? null
}

function Fi(e = void 0, t = void 0) {
    return new B({
        key: Z,
        state: {
            init: (n, r) => ({
                modelCursor: e,
                deco: Ii(r, e),
                isNewCursor: !1,
                isCursorActive: t?.isCursorActive ?? !1
            }),
            apply: (e, t, n, r) => {
                let i = Pi(e)?.modelCursor ?? t.modelCursor,
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
                    } = Z.getState(e.state), r = t && t.find()[0];
                    r && n && Ri(e, r)
                }
            }
        }
    })
}
var Z, Ii, Li, Ri, zi, Bi = e((() => {
    un(), bn(), Xt(), tn(), ot(), Bt(), L(), H(), Z = new R(`modelCursor`), Ii = (e, t) => {
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
        _r(), P(), yr(), Xr(), cn(), $r(), un(), bn(), sn(), at(), In(), $e(), ti(), fi(), gi(), Vn(), Zn(), bt(), cr(), ut(), be(), Ze(), bi(), wi(), h(), kt(), Ei(), ki(), Se(), je(), Fe(), L(), H(), Mi(), Wr(), Bi(), Wi = `ignoreDocChange`, Gi = ({
            intl: e,
            toaster: t,
            value: n,
            comments: r,
            diff: i,
            maxLength: a = N,
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
            a != null && v.length > a && (v = v.slice(0, a), t != null && e != null && xe(t, e));
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
                    let e = p?.plugins.find(e => e.spec.key === Xe().spec.key);
                    return e == null || p == null ? Xe() : Xe({}, e.getState(p))
                },
                w = e => {
                    let t = p?.plugins.find(e => e.spec.key === Fi().spec.key);
                    return Fi(e, p && t?.getState(p))
                };
            return Ce.create({
                doc: y,
                schema: _,
                selection: S,
                plugins: [...h ? [et(m)] : [], hi(e, t, a), g.inputRulesPlugin(), g.keymapPlugin(), Ne({
                    "Mod-s": () => (l(), !0),
                    "Mod-z": tt,
                    "Mod-shift-z": rt,
                    "Mod-y": rt
                }), ji, ei(), Di(), Ge(), C(), Qr(s, c), ln(r ?? []), ...i ? [Xn(b, x)] : [], w(d), Pn(new Set(u ?? [])), zn(e, f), ci(), ...sr()]
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
            maxLength: a = N,
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
                x = Gi({
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
            l(x);
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
                        [S]: (e, t, n) => new Ci(e, t, n, v)
                    } : {},
                    [At]: (e, t, n) => new Ti(e, t, n),
                    ...h == null ? {
                        [dn]: (e, t, n) => new Y(e, t, n, y)
                    } : {}
                },
                E = new Ae({
                    mount: e
                }, {
                    state: x,
                    editable: () => !m,
                    dispatchTransaction: C,
                    nodeViews: T,
                    ...b ? {
                        handleDOMEvents: {
                            copy: (e, t) => _i(e, t)
                        }
                    } : {},
                    handlePaste(e, r) {
                        let i;
                        if (b && (i = r.clipboardData?.getData(`application/x-prosemirror`)), i ||= r.clipboardData?.getData(`text/plain`), i == null) return !1;
                        I.logEvent(`Canvas Prosemirror Paste`, {
                            textLength: i.length
                        });
                        let o = pi(e.state.doc),
                            s = o + i.length,
                            c = a != null && s > a;
                        c && n != null && t != null && xe(n, t);
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
                        return it(e, u, b), !0
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
    te(), un(), In(), Vn(), Zn(), cr(), ur(), ot(), dr(), be(), pr(), Ze(), f(), r(), x(), T(), D(), u(), y(), L(), Q = t(M()), j(), ta = t(wt()), Xi(), yt(), sn(), Bi(), $i(), $ = A(), na = ({
        editorRef: e,
        wrapperClassName: t,
        transparentBackground: n = !1,
        comments: r,
        commentingOn: a,
        diff: c,
        paddingBottom: l,
        hoveredCommentId: u,
        focusedCommentId: f,
        hoveredEditId: m,
        rejectedEdits: h,
        showChanges: g,
        isDisabled: _ = !1,
        value: v,
        onBlur: y,
        onFocus: x,
        onChange: S,
        onMouseLeave: w,
        onSave: T,
        safeUrls: D,
        children: ee,
        width: te,
        modelCursor: O,
        shouldResetSelection: k = !1,
        contentReferences: re
    }) => {
        let A = ce(),
            ie = s(),
            ae = (0, Q.useRef)(null),
            j = (0, Q.useRef)(null),
            [M, oe] = (0, Q.useState)(null),
            se = i(),
            le = ne(),
            [{
                width: ue
            }, de] = (0, ta.default)(),
            N = (0, Q.useRef)(y);
        N.current = y;
        let fe = (0, Q.useRef)(x);
        fe.current = x;
        let P = d()?.planType ?? E.GUEST,
            me = o(`1958014328`) ? 1e7 : pe(P),
            he = (0, Q.useRef)(S);
        he.current = S;
        let ge = (0, Q.useRef)(T);
        ge.current = T;
        let F = nt(),
            [_e, I] = (0, Q.useState)(() => new Map),
            ve = (0, Q.useCallback)((e, t) => {
                I(n => {
                    let r = new Map(n);
                    return t == null ? r.delete(e) : r.set(e, t), r
                })
            }, []),
            ye = (0, Q.useCallback)((e = v) => Gi({
                intl: A,
                toaster: ie,
                comments: r,
                diff: c,
                value: e,
                selection: k ? void 0 : j.current?.state.selection,
                onBlur: e => N.current?.(e),
                onFocus: e => fe.current?.(e),
                onSave: () => ge.current?.(),
                modelCursor: O,
                isDisabled: _,
                safeUrls: D,
                prevState: M,
                contentReferences: re,
                collectReactElement: ve,
                shouldUseContentReferencePlugin: F,
                maxLength: me
            }), [A, ie, r, c, v, k, O, _, D, M, re, ve, F, me]),
            be = (0, Q.useCallback)(e => {
                let t = ye(e);
                j.current?.updateState(t), oe(t)
            }, [ye]);
        (0, Q.useImperativeHandle)(e, () => ({
            UNSAFE_setValue: be,
            revertChanges: () => {
                if (j.current == null) throw Error(`Tried to call revertChanges, but viewRef.current is null`);
                or(j.current)
            },
            flushChanges: () => {
                if (j.current == null) throw Error(`Tried to call flushChanges, but viewRef.current is null`);
                ar(j.current)
            },
            maybeFocusOnEditor: e => {
                if (j.current == null) throw Error(`Tried to call maybeFocus, but viewRef.current is null`);
                return ea(j.current, e)
            },
            viewRef: j
        })), p(() => {
            let {
                current: e
            } = ae;
            if (!e) return;
            let {
                view: t
            } = Ji(e, {
                intl: A,
                toaster: ie,
                comments: r,
                diff: c,
                value: v,
                onBlur: e => N.current?.(e),
                onFocus: e => fe.current?.(e),
                onChange: e => he.current?.(e),
                onUpdate: oe,
                onSave: () => ge.current?.(),
                isDisabled: _,
                safeUrls: D,
                prevState: M,
                contentReferences: re,
                collectReactElement: ve,
                shouldUseContentReferencePlugin: F,
                maxLength: me
            }, se);
            return j.current = t, () => {
                t?.destroy()
            }
        }, [c, me]), (0, Q.useEffect)(() => {
            j.current?.setProps({
                editable: () => !_
            })
        }, [_]), q(e => Ln(e, _), j, [_]), q(e => {
            if (!le) return;
            let {
                schema: t
            } = e.doc.type, n = t.nodes.code_block;
            return n ? (e.doc.descendants((t, r) => {
                if (t.type === n) {
                    let n = t.type.create({
                        ...t.attrs,
                        isDarkMode: se
                    }, t.content, t.marks);
                    e.replaceWith(r, r + t.nodeSize, n)
                }
            }), Vi(e)) : e
        }, j, [le, se]), q(e => e.setMeta(rr, g), j, [g]), q(e => Ni(e, O), j, [O]), q(e => e.setMeta(rn, {
            comments: r,
            commentingOn: a,
            hoveredCommentId: u,
            focusedCommentId: f
        }), j, [r, u, f, a]), q(e => e.setMeta(Jn, {
            hoveredEditId: m,
            rejectedEdits: h ?? new Set
        }), j, [m, h]), q(e => Mn(e, new Set(D ?? [])), j, [D]);
        let xe = (0, Q.useCallback)(() => j.current, [j]),
            L = [],
            Se = [];
        return Q.Children.forEach(ee, e => {
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
                value: M,
                children: (0, $.jsxs)(St.Provider, {
                    value: ue,
                    children: [(0, $.jsx)(`div`, {
                        id: J.PROSEMIRROR_CONTEXT_CHILDREN,
                        children: L
                    }), (0, $.jsxs)(`div`, {
                        className: t,
                        onMouseLeave: w,
                        id: J.PROSEMIRROR_EDITOR_CONTAINER,
                        style: {
                            paddingBottom: l
                        },
                        children: [(0, $.jsx)(`div`, {
                            ref: C(ae, de),
                            className: b(Qi.main, ct.composer, `markdown prose dark:prose-invert contain-inline-size focus:outline-hidden`, n ? `bg-transparent` : `bg-[var(--canvas-bg,var(--bg-primary))]`),
                            style: {
                                width: te
                            }
                        }), Se, F ? Array.from(_e.values()) : null]
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
    Ki as a, ai as c, si as d, J as f, Qi as i, ni as l, aa as n, qi as o, dr as p, $i as r, Xi as s, na as t, ri as u
};
//# sourceMappingURL=ed61b531-mzv3a5hl0dxe3dzt.js.map
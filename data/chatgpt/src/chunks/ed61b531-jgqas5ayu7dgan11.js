import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $8 as n,
    A2 as r,
    Bot as i,
    Cat as a,
    HN as o,
    LU as s,
    Nst as c,
    ON as l,
    TN as u,
    Tat as d,
    U1 as ee,
    UN as f,
    Vot as p,
    a5 as m,
    bct as h,
    c7 as g,
    d1 as _,
    e5 as v,
    hrt as y,
    j2 as b,
    kN as x,
    l7 as S,
    lE as C,
    lrt as w,
    mZ as T,
    ost as E,
    q1 as D,
    sst as O,
    u1 as k,
    uE as A,
    yZ as te,
    zU as ne
} from "./4813494d-nxpmzchfjvwqts17.js";
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
    $St as ce,
    BVt as le,
    Dzn as ue,
    GUn as de,
    KWn as fe,
    UUn as P,
    WUn as F,
    YWn as pe,
    ZSt as me,
    cct as I,
    d9 as he,
    dct as ge,
    f9 as _e,
    l9 as L,
    lct as ve,
    u9 as ye,
    zVt as be
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    At as R,
    B as xe,
    Ct as Se,
    Dt as Ce,
    Et as z,
    Ft as we,
    H as B,
    It as Te,
    K as Ee,
    Rt as De,
    St as Oe,
    Tt as V,
    U as ke,
    V as H,
    W as U,
    X as Ae,
    Yt as je,
    Z as Me,
    Zt as Ne,
    an as Pe,
    at as Fe,
    in as Ie,
    jt as Le,
    kt as W,
    ot as Re,
    q as ze,
    qt as Be,
    rn as Ve,
    ut as He,
    wt as Ue,
    z as We,
    zt as Ge
} from "./82782bc9-ca5kcqz13rn6iprj.js";
import {
    JS as Ke,
    MS as qe,
    XS as Je,
    bS as Ye,
    bw as Xe,
    ew as Ze,
    lS as Qe,
    ow as $e,
    rw as et,
    sS as tt,
    vw as nt,
    yS as rt,
    yw as it
} from "./8b34dbc2-n194ohawifys3bko.js";
import {
    c as at,
    r as ot,
    s as st
} from "./31cec8d8-ejzahhq8v425zkie.js";
import {
    c as ct,
    s as lt
} from "./dced7e81-jvrrcxnvz22x23ei.js";
import {
    E as ut,
    U as dt,
    f as ft,
    p as pt,
    r as mt,
    s as ht,
    w as gt
} from "./bcae0416-ej08jn6ujjjsr5z8.js";
import {
    h as _t,
    i as vt,
    m as yt,
    n as bt,
    r as xt,
    t as St
} from "./df59e297-f1sm3fg7boxjg94x.js";
import {
    t as Ct
} from "./4c0f1f8e-o4zbuwgknf8ay6gx.js";
import {
    a as wt,
    i as Tt,
    o as Et,
    r as Dt
} from "./373ddd65-o5ueta5lk6m8a4cj.js";
import {
    i as Ot,
    t as kt
} from "./6afb0137-m4oxiulxi9lvnf7b.js";
import {
    a as At,
    o as jt,
    r as Mt,
    t as Nt
} from "./e74608d1-jih3a0juvbpl232y.js";
import {
    C as Pt,
    E as Ft,
    b as It,
    o as Lt
} from "./bcae0416-kcp5vopyblfeqi3l.js";
import {
    n as Rt,
    t as zt
} from "./21d5ff49-jb0dwvqzgbxncuvu.js";
import {
    n as Bt,
    r as Vt,
    s as Ht
} from "./bcae0416-i2nvyrnbebpg5vpy.js";
import {
    a as Ut,
    i as Wt,
    t as Gt
} from "./bcae0416-ngmlzvxn0juzl5wy.js";
import {
    n as Kt,
    r as qt,
    t as Jt
} from "./6cb574fa-fimvlg2ms6pfhsx8.js";
import {
    a as Yt,
    c as Xt,
    d as Zt,
    f as Qt,
    i as $t,
    l as en,
    m as tn,
    n as nn,
    o as rn,
    p as an,
    r as on,
    s as sn,
    t as cn,
    u as ln
} from "./e99f8e1a-nkyek9naacwysqgf.js";
import {
    c as un,
    h as dn,
    l as fn,
    m as pn,
    n as mn,
    o as hn,
    p as gn,
    s as _n,
    t as vn,
    u as yn,
    v as bn,
    y as xn
} from "./e5d54aa7-d60o4fgmopf45de4.js";
import {
    n as Sn,
    t as Cn
} from "./1c4de3ec-eqhfff8rgbdgeyp8.js";
import {
    n as wn,
    r as Tn,
    t as En
} from "./60549c99-ljg58x2g4xar4kyp.js";
import {
    a as Dn,
    t as On
} from "./dccfc4ad-fntqt1h201g38p3o.js";

function kn(e, t) {
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

function An(e, t, n) {
    let r = t.mark.type,
        i = {
            ...t.mark.attrs,
            disabled: n
        };
    return e.removeMark(t.from, t.to, r), e.addMark(t.from, t.to, r.create(i)), e
}

function jn(e, t) {
    return e.setMeta(Pn, {
        safeUrls: t
    })
}

function Mn(e) {
    return e.getMeta(Pn) ?? null
}

function Nn(e = new Set) {
    return new V({
        key: Pn,
        state: {
            init(t) {
                return {
                    safeUrls: e
                }
            },
            apply(e, t) {
                let n = Mn(e);
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
                a = n.schema.marks[bn.proseMirrorMarkName()],
                o = kn(n.doc, a),
                s = !1;
            return o.forEach(e => {
                let t = e.mark.attrs.href,
                    n = r.safeUrls.has(t);
                n === (e.mark.attrs.disabled === !0) && (An(i, e, !n), s = !0)
            }), s ? i : null
        }
    })
}
var Pn, Fn = e((() => {
    xn(), R(), Pn = new z(`disableUnsafeLinks`)
}));

function In(e, t) {
    return e.setMeta(G, {
        isDisabled: t
    })
}

function Ln(e) {
    return e.getMeta(G) ?? null
}

function Rn(e, t = !1) {
    return new V({
        key: G,
        state: {
            init() {
                return {
                    isDisabled: t
                }
            },
            apply(e, t) {
                let n = Ln(e);
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
                if (G.getState(t).isDisabled || !(r instanceof W && r.empty)) return null;
                let {
                    $cursor: i
                } = r;
                if (!i || !e) return null;
                let a = i.start();
                if (!((i.parent.isTextblock || i.parent.type.name === `doc`) && i.pos === a && i.node().content.size === 0)) return null;
                let o = H.widget(a, () => {
                    let t = document.createTextNode(e.formatMessage(zn.placeholder)),
                        n = document.createElement(`span`);
                    return n.className = `text-token-text-tertiary dark:text-gray-500 pointer-events-none select-none`, n.style.position = `absolute`, n.appendChild(t), n
                });
                return B.create(n, [o])
            }
        }
    })
}
var G, zn, Bn = e((() => {
        R(), U(), M(), G = new z(`placeholder`), zn = ie({
            placeholder: {
                id: `n2B51U`,
                defaultMessage: `Write something...`
            }
        })
    })),
    Vn, Hn = e((() => {
        Vn = {
            "override-strong-color": `_1bGYnG_override-strong-color`
        }
    }));

function Un({
    isHovered: e,
    isRejected: t,
    isTextAcive: n
}) {
    return g({
        "line-through": !n,
        "filter grayscale-[0.6]": t && !n,
        "opacity-60": t && !n,
        "bg-opacity-50 dark:bg-opacity-50": t && e,
        "bg-opacity-10 dark:bg-opacity-10": t && !e,
        "bg-opacity-60 dark:bg-opacity-60": !t && !e
    })
}

function Wn({
    isHovered: e,
    isRejected: t,
    isReplacement: n
}) {
    return g(`bg-red-100 dark:bg-red-600`, Un({
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

function Gn({
    isHovered: e,
    isRejected: t,
    isReplacement: n
}) {
    let r = !t;
    return g(Vn[`override-strong-color`], `text-green-600 dark:text-green-200 bg-green-100 dark:bg-green-600`, Un({
        isHovered: e,
        isRejected: t,
        isTextAcive: r
    }), {
        "dark:bg-green-800": t,
        "border border-green-500 rounded-e border-s-0": t && n,
        "border border-green-500 rounded-sm": t && !n
    })
}
var Kn = e((() => {
        Hn(), S()
    })),
    qn, Jn, Yn, Xn = e((() => {
        Kn(), R(), U(), qn = new z(`edit`), Jn = (e, t, n, r) => {
            let i = [];
            for (let {
                    start: e,
                    end: n,
                    editId: r
                }
                of t) i.push(H.inline(e, n, {
                class: Wn({
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
                of e) i.push(H.inline(t, n, {
                class: Gn({
                    isHovered: !1,
                    isRejected: !1,
                    isReplacement: !0
                }),
                "data-edit-id": r
            }));
            return i
        }, Yn = (e, t) => new V({
            key: qn,
            state: {
                init() {
                    let n = new Set;
                    return {
                        decorations: Jn(e, t, null, n),
                        hoveredEditId: null,
                        rejectedEdits: n
                    }
                },
                apply(n, r) {
                    let {
                        hoveredEditId: i,
                        rejectedEdits: a
                    } = n.getMeta(qn) ?? null ?? r;
                    return {
                        decorations: Jn(e, t, i, a),
                        hoveredEditId: i,
                        rejectedEdits: a
                    }
                }
            },
            props: {
                decorations(e) {
                    let t = this.getState(e);
                    return t ? B.create(e.doc, t.decorations.concat()) : B.empty
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
    K, Zn, Qn = e((() => {
        p(), K = class e {
            constructor(e, t) {
                i(this, `length`, void 0), i(this, `step`, void 0), this.length = e, this.step = t
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
        }, i(K, `none`, []), Zn = class {
            constructor(e, t, n, r, a, o) {
                i(this, `fromA`, void 0), i(this, `toA`, void 0), i(this, `fromB`, void 0), i(this, `toB`, void 0), i(this, `deleted`, void 0), i(this, `inserted`, void 0), this.fromA = e, this.toA = t, this.fromB = n, this.toB = r, this.deleted = a, this.inserted = o
            }
            get lenA() {
                return this.toA - this.fromA
            }
            get lenB() {
                return this.toB - this.fromB
            }
        }
    })),
    $n, er, tr = e((() => {
        je(), Qn(), p(), $n = (e, t, n, r, i) => new Zn(e, t, n, r, e === t ? K.none : [new K(t - e, i)], n === r ? K.none : [new K(r - n, i)]), er = class e {
            constructor(e, t) {
                i(this, `doc`, void 0), i(this, `changes`, void 0), this.doc = e, this.changes = t
            }
            static create(t) {
                return new e(t, [])
            }
            addSteps(t, n) {
                let r = [];
                for (let e of n) {
                    let t = 0;
                    if (e.getMap().forEach((n, i, a, o) => {
                            r.push($n(n + t, i + t, a, o, e)), t = o - a - (i - n)
                        }), e instanceof Le || e instanceof Te) {
                        let {
                            from: t,
                            to: n
                        } = e;
                        r.push($n(t, n, t, n, e))
                    }
                }
                if (r.length === 0) return this;
                let i = this.changes.concat(r);
                return new e(t, i)
            }
        }
    })),
    q, nr, rr, ir, ar, or, sr = e((() => {
        R(), je(), U(), tr(), q = new z(`changeset`), nr = new z(`highlightChanges`), rr = e => q.getState(e), ir = e => {
            let {
                state: t
            } = e, n = t.tr.setMeta(q, !0);
            e.updateState(t.apply(n))
        }, ar = e => {
            let {
                state: t
            } = e, n = rr(t);
            if (!n) return;
            let {
                maps: r,
                steps: i
            } = n, a = new we(r), o = t.tr;
            for (let e = i.length - 1; e >= 0; e--) {
                let t = i[e].map(a.slice(e + 1));
                t && o.maybeStep(t).doc && a.appendMap(t.getMap(), e)
            }
            let s = t.apply(o.setMeta(q, !0));
            e.updateState(s)
        }, or = () => {
            let e = e => ({
                    changeset: er.create(e),
                    maps: [],
                    steps: []
                }),
                t = new V({
                    key: q,
                    state: {
                        init: (t, {
                            doc: n
                        }) => e(n),
                        apply: (t, n, r, i) => {
                            let {
                                doc: a
                            } = i;
                            if (t.getMeta(q)) return e(a);
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
                                steps: ee
                            } = n, {
                                maps: f
                            } = s, p = c.map((e, t) => e.invert(l[t]));
                            return {
                                changeset: u.addSteps(a, c),
                                maps: d.concat(f),
                                steps: ee.concat(p)
                            }
                        }
                    }
                });
            return [t, new V({
                key: nr,
                state: {
                    init() {
                        return {
                            deco: B.empty,
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
                        }) => H.inline(e, t, {
                            class: `blame-marker`
                        })), u = e.getMeta(nr);
                        return {
                            deco: B.create(s, l),
                            show: u ?? n.show
                        }
                    }
                },
                props: {
                    decorations(e) {
                        let t = this.getState(e);
                        if (!t?.show) return B.empty;
                        let {
                            deco: n
                        } = t;
                        return n
                    }
                }
            })]
        }
    })),
    cr, J, lr = e((() => {
        cr = t(N()), J = (e, t, n) => {
            (0, cr.useEffect)(() => {
                let n = t.current;
                if (!n) return;
                let {
                    state: r
                } = n, i = e(r.tr);
                i && n.dispatch(i)
            }, n)
        }
    })),
    Y, ur = e((() => {
        Y = function(e) {
            return e.PROSEMIRROR_CONTEXT_CHILDREN = `prosemirror-context-children`, e.PROSEMIRROR_EDITOR_CONTAINER = `prosemirror-editor-container`, e
        }({})
    }));

function dr(e, t) {
    return {
        x: be(t.x, e.left, e.right),
        y: be(t.y, e.top, e.bottom)
    }
}
var fr = e((() => {
        le()
    })),
    pr, mr = e((() => {
        pr = (e, t) => {
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
    hr, X, gr = e((() => {
        qe(), Ht(), Ut(), Pt(), dt(), ft(), R(), mr(), tn(), qt(), p(), hr = e => mt.theme({
            "&": {
                backgroundColor: e ? `var(--main-surface-primary)` : `var(--gray-100)`
            }
        }), X = class {
            constructor(e, t, n, r) {
                i(this, `pmView`, void 0), i(this, `getPos`, void 0), i(this, `node`, void 0), i(this, `updating`, !1), i(this, `cm`, void 0), i(this, `languageCompartment`, void 0), i(this, `themeCompartment`, void 0), i(this, `setLanguage`, async e => {
                    let t = await Jt(e);
                    t && this.cm.dispatch({
                        effects: this.languageCompartment.reconfigure(t)
                    })
                }), i(this, `setTheme`, e => {
                    let t = [hr(e), Ft(an(e))];
                    this.cm.dispatch({
                        effects: this.themeCompartment.reconfigure(t)
                    })
                }), i(this, `handleBackspace`, e => {
                    let {
                        selection: t
                    } = e.state;
                    if (!(t.main.empty && t.main.from === 0) || this.cm.state.doc.length > 0) return !1;
                    let n = Ke(this.pmView.state, this.pmView.dispatch);
                    return this.pmView.focus(), n
                }), i(this, `handleShiftEnter`, () => {
                    let e = Je(this.pmView.state, this.pmView.dispatch);
                    return this.pmView.focus(), e
                }), i(this, `dispatch`, e => {
                    if (this.cm.update([e]), this.updating) return;
                    let t = (this.getPos() ?? 0) + 1,
                        n = e.state.doc.toString(),
                        r = pr(this.node.textContent, n);
                    if (r) {
                        let {
                            text: e,
                            from: n,
                            to: i
                        } = r, a = e ? this.pmSchema.text(e) : null, o = this.pmView.state.tr.replaceWith(n + t, i + t, a);
                        this.pmView.dispatch(o)
                    }
                    this.forwardSelection()
                }), i(this, `update`, e => {
                    if (e.type !== this.node.type) return !1;
                    e.attrs.lang !== this.node.attrs.lang && this.setLanguage(e.attrs.lang), e.attrs.isDarkMode != null && e.attrs.isDarkMode !== this.node.attrs.isDarkMode && this.setTheme(e.attrs.isDarkMode), this.node = e;
                    let t = pr(this.cm.state.doc.toString(), e.textContent);
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
                }), i(this, `asProseMirrorSelection`, e => {
                    let t = (this.getPos() ?? 0) + 2,
                        {
                            anchor: n,
                            head: r
                        } = this.cm.state.selection.main;
                    return W.create(e, n + t, r + t)
                }), i(this, `forwardSelection`, () => {
                    if (!this.cm.hasFocus) return;
                    let {
                        state: e
                    } = this.pmView, t = this.asProseMirrorSelection(e.doc);
                    t.eq(e.selection) || this.pmView.dispatch(e.tr.setSelection(t))
                }), i(this, `maybeEscape`, (e, t) => n => {
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
                        l = Ce.near(this.pmView.state.doc.resolve(c), t);
                    return this.pmView.dispatch(this.pmView.state.tr.setSelection(l).scrollIntoView()), this.pmView.focus(), !0
                }), i(this, `setSelection`, (e, t) => {
                    this.focus(), this.updating = !0, this.cm.dispatch({
                        selection: {
                            anchor: e,
                            head: t
                        }
                    }), this.updating = !1
                }), i(this, `focus`, () => {
                    this.cm.focus(), this.forwardSelection()
                }), i(this, `selectNode`, () => {
                    this.focus()
                }), i(this, `stopEvent`, () => !0), i(this, `destroy`, () => {
                    this.cm.destroy()
                }), i(this, `_setIsCodeBlockView`, () => {
                    this.cm.dom.dataset.isCodeBlockView = `true`
                }), this.pmView = t, this.getPos = n, this.node = e;
                let a = [{
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
                this.languageCompartment = new gt, this.themeCompartment = new gt;
                let o = Kt(e.attrs.lang),
                    s = ut.create({
                        doc: this.node.textContent,
                        extensions: [this.themeCompartment.of([hr(r), Ft(an(r))]), mt.theme({
                            "&": {
                                borderRadius: `4px`,
                                padding: `0.5rem`
                            },
                            "&.cm-focused": {
                                outline: `none`
                            }
                        }), pt.of([...a, ...Gt, ...Vt, Wt]), Lt(), Bt(), It(), ht(), this.languageCompartment.of(o == null ? [] : [o]), ut.changeFilter.of(e => (!e.docChanged && !this.updating && this.forwardSelection(), !0))]
                    });
                this.cm = new mt({
                    state: s,
                    dispatch: this.dispatch
                }), this.cm.dom.dir = `ltr`, o ?? this.setLanguage(e.attrs.lang)
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
        }, i(X, `_getIsCodeBlockView`, e => e.dataset.isCodeBlockView === `true`)
    }));

function _r(e, t, n) {
    try {
        return t instanceof W ? W.create(e, t.anchor, t.head) : t instanceof Ue ? W.create(e, t.from, t.to) : t instanceof Oe ? new Oe(e) : void 0
    } catch {
        return n ?? W.create(e, 0)
    }
}
var vr = e((() => {
        R()
    })),
    yr, br = e((() => {
        Ee(), dn(), pn(), p(), yr = class {
            constructor(e, t) {
                i(this, `rules`, void 0);
                let n = [].concat.apply([], e.syntaxExtensions().map(e => e.proseMirrorInputRules(t))),
                    r = n.filter(e => e instanceof gn);
                r.sort((e, t) => gn.priority(t) - gn.priority(e));
                let a = 0;
                this.rules = n.map(e => {
                    if (!(e instanceof gn)) return e;
                    let t = r[a];
                    return a += 1, t ?? e
                })
            }
            build() {
                let e = ze({
                        rules: this.rules
                    }),
                    t = e.props.handleTextInput,
                    n = e.props.handleDOMEvents?.compositionend;
                return e.props.handleTextInput = (n, r, i, a) => ue(n.state) ? !1 : t?.call(e, n, r, i, a) ?? !1, e.props.handleDOMEvents = {
                    ...e.props.handleDOMEvents,
                    compositionend: (t, r) => ue(t.state) ? !1 : n?.call(e, t, r) ?? !1
                }, e
            }
        }
    })),
    xr, Sr = e((() => {
        E(), He(), Ae(), p(), xr = class {
            constructor(e, t) {
                i(this, `keymap`, void 0), this.keymap = new Map;
                for (let n of e.syntaxExtensions()) this.addKeymap(n.proseMirrorKeymap(t));
                this.addKeymap(Fe)
            }
            build() {
                let e = {};
                return this.keymap.forEach((t, n) => {
                    e[n] = Re(...t)
                }), Me(e)
            }
            addKeymap(e) {
                for (let t in e) this.keymap.get(t) || this.keymap.set(t, []), O(this.keymap.get(t)).push(e[t])
            }
        }
    })),
    Cr, wr = e((() => {
        _n(), p(), Cr = class {
            constructor(e) {
                i(this, `nodeViews`, void 0), this.nodeViews = {};
                for (let t of e.nodeExtensions()) {
                    let e = t.proseMirrorNodeName(),
                        n = t.proseMirrorNodeView();
                    e !== hn.proseMirrorNodeName() && e != null && n != null && (this.nodeViews[e] = n)
                }
            }
            build() {
                return this.nodeViews
            }
        }
    })),
    Tr, Er = e((() => {
        d(), Pe(), p(), Tr = class {
            constructor(e) {
                i(this, `nodes`, {}), i(this, `marks`, {});
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
                    return new Ve({
                        nodes: this.nodes,
                        marks: this.marks
                    })
                } catch (e) {
                    a.addError(e, {
                        nodes: this.nodes
                    })
                }
                return new Ve({
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
    Dr, Or = e((() => {
        fe(), p(), Dr = class {
            constructor(e) {
                i(this, `extensionManager`, void 0), this.extensionManager = e
            }
            build() {
                let e = pe();
                for (let t of this.extensionManager.extensions()) e = t.unifiedInitializationHook(e);
                return e
            }
        }
    }));

function kr(e) {
    return e instanceof wt
}

function Ar(e) {
    return e instanceof Tt
}
var jr, Mr = e((() => {
        Et(), p(), jr = class {
            constructor(e) {
                i(this, `markExtensionList`, void 0), i(this, `nodeExtensionList`, void 0), i(this, `otherExtensionList`, void 0), this.markExtensionList = new Map, this.nodeExtensionList = new Map, this.otherExtensionList = new Map;
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
                if (Ar(e)) {
                    this.markExtensionList.set(e.constructor, e);
                    return
                }
                if (kr(e)) {
                    this.nodeExtensionList.set(e.constructor, e);
                    return
                }
                this.otherExtensionList.set(e.constructor, e)
            }
        }
    })),
    Nr, Pr = e((() => {
        p(), Nr = class {
            constructor(e) {
                i(this, `extensionManager`, void 0), this.extensionManager = e
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
    Fr, Ir = e((() => {
        n(), me(), p(), Fr = class e {
            constructor(e, t) {
                i(this, `extensionManager`, void 0), i(this, `proseMirrorSchema`, void 0), this.extensionManager = e, this.proseMirrorSchema = t
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
                            if (!a.unistToProseMirrorTest(t) || ce(t) && a.customDirectiveName() != null && a.customDirectiveName() !== t.name) continue;
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
                            return m(a.unistNodeToProseMirrorNodes({
                                node: t,
                                schema: this.proseMirrorSchema,
                                convertedChildren: o,
                                context: n,
                                attrs: u
                            })).filter(v)
                        }
                        return console.warn(`Couldn't find any way to convert unist node of type "` + t.type + `" to a ProseMirror node.`), []
                    };
                return i(t, n)
            }
        }
    })),
    Lr, Rr, zr = e((() => {
        F(), E(), br(), Sr(), wr(), Er(), Or(), Mr(), Pr(), Ir(), p(), Lr = 5, Rr = class {
            constructor(e = []) {
                i(this, `builtSchema`, void 0), i(this, `inputRulesBuilder`, void 0), i(this, `keymapBuilder`, void 0), i(this, `nodeViewBuilder`, void 0), i(this, `unistToProseMirrorConverter`, void 0), i(this, `proseMirrorToUnistConverter`, void 0), i(this, `unified`, void 0), i(this, `memoizedProsemirrorDocs`, new Map);
                let t = new jr(e);
                this.builtSchema = new Tr(t).build(), this.inputRulesBuilder = new yr(t, this.builtSchema), this.keymapBuilder = new xr(t, this.builtSchema), this.nodeViewBuilder = new Cr(t), this.unistToProseMirrorConverter = new Fr(t, this.builtSchema), this.proseMirrorToUnistConverter = new Nr(t), this.unified = new Dr(t).build()
            }
            parse(e) {
                try {
                    if (this.memoizedProsemirrorDocs.has(e)) return O(this.memoizedProsemirrorDocs.get(e));
                    let t = this.unistToProseMirrorConverter.convert(this.parseUnist(e));
                    if (this.memoizedProsemirrorDocs.set(e, t), this.memoizedProsemirrorDocs.size > Lr) {
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
    Br, Vr = e((() => {
        Et(), Cn(), Br = class extends Dt {
            unifiedInitializationHook(e) {
                return e.use(Sn)
            }
        }
    }));

function Z(e = {}) {
    let t = JSON.stringify(e),
        n = Hr.get(t);
    return n ?? (n = new Rr([new vn, ...e?.shouldStripDirectives ? [new Br] : []]), Hr.set(t, n)), n
}
var Hr, Ur = e((() => {
        mn(), zr(), Vr(), Hr = new Map
    })),
    Wr, Gr, Kr, qr, Jr, Yr = e((() => {
        F(), Ur(), en(), ge(), r(), k(), Wr = (e, t, n, r) => {
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
        }, Gr = (e, t) => b(e.parentNodeNamesAtStart, t.parentNodeTypeNameStack), Kr = new WeakMap, qr = ({
            diff: e
        }) => {
            let t = new I(ve.GetDiffedDoc, {
                debug: !1
            });
            t.startBlock(`get_diffed_doc`);
            let n = Z(),
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
            } = Xt(s), {
                sourceRangeToPmRange: ee
            } = Xt(o);
            t.endBlock(`init_position_transformers`);
            let f = s,
                p = 0,
                m = 0,
                h = [],
                g = (e, t, n) => {
                    for (let [r, i] of n.entries()) try {
                        if (!Gr(t, i)) continue;
                        let {
                            pmPos: n
                        } = i, {
                            slice: a
                        } = t;
                        return f = f.replace(n, n, a), l.push({
                            editId: e,
                            start: n,
                            end: n + a.size
                        }), [r, i]
                    } catch (e) {
                        h.push(e)
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
                    v = ee(i);
                t.endBlock(`transform_positions`);
                let {
                    start: y,
                    end: b
                } = a, {
                    start: x,
                    end: S
                } = v, C = i.start !== i.end, w = C ? Wr(o, x, S, i) : null;
                t.startBlock(`get_merged_doc_positions`);
                let {
                    positions: T
                } = Xt(f);
                t.endBlock(`get_merged_doc_positions`);
                let E = Math.max(...y.map(({
                        pmPos: e
                    }) => e)),
                    D = Math.min(...b.map(({
                        pmPos: e
                    }) => e)),
                    O = [].concat(b, y),
                    k = r.start !== r.end && s.textBetween(E, D).length > 0,
                    A = !1;
                if (k && !C) u.push({
                    editId: n,
                    start: E + p,
                    end: D + p
                }), A = !0;
                else if (!k && !C) A = !0;
                else {
                    let e = O.map(({
                        pmPos: e
                    }) => T[e + p]);
                    for (let t of w ?? []) {
                        let r = g(n, t, e);
                        if (r == null) continue;
                        let i = r[0],
                            a = t.slice.size,
                            o = i < b.length;
                        o || (p += a), k && u.push({
                            editId: n,
                            start: E + p,
                            end: D + p
                        }), o && (p += a), A = !0;
                        break
                    }
                }
                if (!A && w != null) {
                    let e = Math.min(...y.map(({
                        pmPos: e
                    }) => e)) + p - 1;
                    for (let t of w) try {
                        f = f.replace(e, e, t.slice), l.push({
                            editId: n,
                            start: e,
                            end: e + t.slice.size
                        }), p += t.slice.size, k && u.push({
                            editId: n,
                            start: E + p,
                            end: D + p
                        }), A = !0;
                        break
                    } catch (e) {
                        h.push(e)
                    }
                }
                A ? P.logEvent(`Canvas Diff Edit Success`) : (P.logEvent(`Canvas Diff Edit Fail`), P.logError(`Failed to insert edit for diffed doc`, _(h), {
                    errors: h.map(de),
                    replaceFromCandidates: y,
                    replaceToCandidates: b,
                    sliceFromCandidates: x,
                    sliceToCandidates: S
                }), m++)
            }
            return P.logDistribution(`Canvas Diff Edit Success Ratio`, (c.length - m) / c.length), P.logDistribution(`Canvas Diff Edit Fail Count`, m), P.logDistribution(`Canvas Diff Edit Success Count`, c.length - m), P.logDistribution(`Canvas Diff Edit Count`, c.length), t.endBlock(`get_diffed_doc`), {
                doc: f,
                addedRanges: l,
                deletedRanges: u
            }
        }, Jr = ({
            diff: e
        }) => {
            let t = Kr.get(e);
            if (t != null) return t;
            let n = qr({
                diff: e
            });
            return Kr.set(e, n), n
        }
    })),
    Xr, Zr, Qr = e((() => {
        gr(), R(), Xr = new z(`focus`), Zr = (e, t) => new V({
            key: Xr,
            state: {
                init: () => !1,
                apply(e, t) {
                    let n = e.getMeta(Xr);
                    return typeof n == `boolean` ? n : t
                }
            },
            props: {
                handleDOMEvents: {
                    blur: (e, n) => {
                        let {
                            relatedTarget: r
                        } = n;
                        return r != null && X.isInCodeBlockView(r) ? !1 : (t(n), e.dispatch(e.state.tr.setMeta(Xr, !1)), !1)
                    },
                    focus: (t, n) => (e(n), t.dispatch(t.state.tr.setMeta(Xr, !0)), !1)
                }
            }
        })
    })),
    $r, ei = e((() => {
        wn(), R(), U(), $r = () => new V({
            key: new z(`katex`),
            props: {
                decorations(e) {
                    let t = [];
                    return e.doc.descendants((e, n) => {
                        if (e.type.name === `inline_math` || e.type.name === `math_block`) {
                            let r = typeof e.attrs.latex == `string` ? e.attrs.latex : ``,
                                i = e.type.name === `math_block`;
                            t.push(H.widget(n + 1, e => {
                                let t = e.dom.ownerDocument,
                                    n = t.createElement(`span`),
                                    a = Tn(r, i);
                                return n.setAttribute(`role`, `math`), n.setAttribute(`aria-label`, r), n.setAttribute(`data-math-source`, r), n.setAttribute(`data-client-katex-layout`, ``), i && (n.style.display = `block`, n.style.contentVisibility = `auto`, n.style.containIntrinsicSize = `auto 2lh`), a == null ? n.textContent = r : n.appendChild(En(a, t)), n
                            }, {
                                key: (i ? `display` : `inline`) + `\0` + r
                            }))
                        }
                    }), B.create(e.doc, t)
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
    return new V({
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
    oi(), S(), R(), p(), ci = new z(`linkTooltip`), li = 36, ui = class {
        constructor(e) {
            i(this, `tooltipElement`, void 0), i(this, `button`, void 0), i(this, `onMouseLeave`, void 0), this.tooltipElement = document.createElement(`div`), this.tooltipElement.className = g(`absolute  py-1.5 px-2.5 bg-token-bg-primary border border-token-border-default rounded-lg text-xs z-50 items-center cursor-pointer shadow-md flex justify-center cursor-pointer`, `transform -translate-x-1/2`), this.button = document.createElement(`button`), this.button.textContent = `Open link`, this.button.className = g(`bg-none`, `border-none`, `text-token-text-primary `, `text-sm`), this.tooltipElement.appendChild(this.button), this.onMouseLeave = e, this.tooltipElement.addEventListener(`mouseleave`, e)
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
    return Z().serialize(e).length
}
var pi, mi, hi = e((() => {
    F(), Ur(), ye(), R(), je(), pi = new z(`maxLength`), mi = (e, t, n) => new V({
        key: pi,
        state: {
            init() {
                return n
            },
            apply: (e, t) => t
        },
        filterTransaction(r) {
            if (e == null || !r.steps.some(e => e instanceof Ge || e instanceof De ? e.slice.size > e.to - e.from : !1)) return !0;
            let i = fi(r.doc);
            return i <= n ? !0 : (t && he(t, e), P.logEvent(`Canvas Prosemirror Max Length`, {
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
    let n = it.getState(t.state),
        r = parseInt(e);
    if (n == null || r == null) return null;
    let i = n?.displayedContentReferences?.[r];
    return i == null || i.type !== `grouped_webpages` ? null : i.items?.[0]?.url
}
var yi = e((() => {
        Xe()
    })),
    bi, xi, Si, Ci = e((() => {
        Xe(), Dn(), bi = t(re()), ae(), xi = j(), p(), Si = class {
            constructor(e, t, n, r) {
                i(this, `dom`, void 0), i(this, `node`, void 0), i(this, `view`, void 0), i(this, `getPos`, void 0), i(this, `key`, void 0), i(this, `collectReactElement`, void 0), this.node = e, this.getPos = n, this.view = t, this.dom = document.createElement(`span`), this.dom.className = `content-reference-node`;
                let a = () => `${oe()}`;
                this.key = `content-reference-node-${a()}`, this.collectReactElement = r, this.renderReactComponent()
            }
            renderReactComponent() {
                let {
                    index: e
                } = this.node.attrs, t = it.getState(this.view.state);
                if (e == null) return;
                let n = t?.displayedContentReferences?.[e];
                if (!n || n.type !== `grouped_webpages`) return;
                let r = (0, xi.jsx)(On, {
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
        Mt(), At(), p(), wi = class {
            constructor(e, t, n) {
                i(this, `dom`, void 0), i(this, `node`, void 0), i(this, `getPos`, void 0), i(this, `view`, void 0), this.getPos = n, this.view = t, this.node = e;
                let r = document.createElement(`span`);
                r.className = `hive-log-wrapper`, r.style.display = `inline-block`, r.style.userSelect = `none`;
                let a = document.createElement(`span`);
                a.className = `hive-log`, a.contentEditable = `false`, a.setAttribute(`data-type`, `hive-log`);
                let o = Number.parseInt(String(e.attrs.timestamp), 10);
                a.setAttribute(`data-timestamp`, String(e.attrs.timestamp ?? ``)), a.textContent = Number.isFinite(o) ? Nt(o) : ``;
                let s = e => {
                    e.preventDefault(), e.stopPropagation()
                };
                r.addEventListener(`mousedown`, s), a.addEventListener(`mousedown`, s), a.addEventListener(`click`, e => {
                    if (e.preventDefault(), !Number.isFinite(o)) return;
                    let {
                        openSidebar: t,
                        setCurrentTime: n
                    } = jt.getState();
                    t(), n(o)
                }), r.appendChild(a), this.dom = r
            }
            stopEvent(e) {
                return e.type === `mousedown` ? (e.preventDefault(), !0) : !1
            }
            destroy() {}
        }
    }));

function Ei(e = {}) {
    return new V({
        view(t) {
            return new Di(t, e)
        }
    })
}
var Di, Oi = e((() => {
    R(), je(), Di = class {
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
                    let t = Be(this.editorView.state.doc, e, this.editorView.dragging.slice);
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
                a = Ce.near(i.resolve(r > 0 ? s.after() : s.before()), r);
            if (a.$head?.parent.type.name === `code_block`) return n?.(t.tr.setSelection(a)), !0
        }
        return !1
    }
}
var Ai, ji = e((() => {
    yn(), Ae(), R(), Ai = Me({
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
    return new V({
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
    ln(), yn(), Yt(), en(), at(), zt(), R(), U(), Fi = new z(`modelCursor`), Ii = (e, t) => {
        let {
            doc: n
        } = e, r = [];
        if (!t) return B.empty;
        let {
            modelSelectionPositionRange: i,
            modelCursorPosition: a
        } = t, {
            sourceRangeToPmRange: o,
            sourceEndToPmPos: s
        } = Xt(n);
        if (a != null) {
            let e = $t(a, s(a), `min`);
            if (e == null) return B.empty;
            if (e != null && Zt(n, e)) {
                let t = n.resolve(e);
                if (n.nodeAt(e)?.type.name === fn.proseMirrorNodeName() || t.nodeBefore?.type.name === fn.proseMirrorNodeName()) return B.empty
            }
            r.push(H.widget(e, () => {
                let e = document.createElement(`span`);
                return e.className = Rt.modelCursor, e
            }, {
                ignoreSelection: !0,
                side: 1
            }))
        } else if (i != null) {
            let {
                start: e,
                end: t
            } = o(i), n = $t(i.start, e, `max`), a = $t(i.end, t, `min`);
            if (n == null || a == null) return B.empty;
            r.push(H.inline(n, a, {
                class: `${ot} bg-[Highlight]!`
            }))
        }
        return r.length ? B.create(n, r) : B.empty
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
    if (Zt(e, t)) return W.create(e, t)
}
var Wi, Gi, Ki, qi, Ji, Yi, Xi = e((() => {
        gr(), F(), vr(), Yr(), sn(), Qr(), ln(), yn(), on(), Xe(), Fn(), tt(), ei(), di(), hi(), Bn(), Xn(), yt(), sr(), lt(), ye(), rt(), yi(), Ci(), te(), Ot(), Ti(), Oi(), xe(), Ae(), Pe(), R(), U(), ji(), Ur(), Bi(), Wi = `ignoreDocChange`, Gi = ({
            intl: e,
            toaster: t,
            value: n,
            comments: r,
            diff: i,
            maxLength: a = L,
            selection: o,
            onFocus: s,
            onBlur: c,
            onSave: l,
            safeUrls: u,
            modelCursor: d,
            isDisabled: ee,
            prevState: f,
            contentReferences: p,
            shouldUseContentReferencePlugin: m
        }) => {
            let h = Z(),
                g = h.schema(),
                _ = n;
            a != null && _.length > a && (_ = _.slice(0, a), t != null && e != null && he(t, e));
            let v, y = [],
                b = [];
            i && i.edits.length > 0 ? {
                doc: v,
                addedRanges: y,
                deletedRanges: b
            } = Jr({
                diff: i
            }) : v = h.parse(_);
            let x = o ? _r(v, o) : Ui(v),
                S = () => {
                    let e = f?.plugins.find(e => e.spec.key === Ze().spec.key);
                    return e == null || f == null ? Ze() : Ze({}, e.getState(f))
                },
                C = e => {
                    let t = f?.plugins.find(e => e.spec.key === Pi().spec.key);
                    return Pi(e, f && t?.getState(f))
                };
            return Se.create({
                doc: v,
                schema: g,
                selection: x,
                plugins: [...m ? [nt(p)] : [], mi(e, t, a), h.inputRulesPlugin(), h.keymapPlugin(), Me({
                    "Mod-s": () => (l(), !0),
                    "Mod-z": $e,
                    "Mod-shift-z": et,
                    "Mod-y": et
                }), Ai, $r(), Ei(), We(), S(), Zr(s, c), cn(r ?? []), ...i ? [Yn(y, b)] : [], C(d), Nn(new Set(u ?? [])), Rn(e, ee), si(), ...or()]
            })
        }, Ki = (e, t) => {
            let n = Z(),
                r = n.schema(),
                i = n.parse(e);
            return Se.create({
                doc: i,
                schema: r,
                plugins: [cn(t ?? [])]
            })
        }, qi = ({
            mount: e,
            value: t,
            comments: n,
            isDarkMode: r
        }) => new ke({
            mount: e
        }, {
            editable: () => !1,
            state: Ki(t, n),
            nodeViews: {
                [un]: (e, t, n) => new X(e, t, n, r)
            }
        }), Ji = (e, {
            intl: t,
            toaster: n,
            comments: r,
            value: i,
            maxLength: a = L,
            onBlur: o,
            onFocus: s,
            onChange: c,
            onUpdate: l,
            onSave: u,
            safeUrls: d,
            modelCursor: ee,
            selection: f,
            isDisabled: p,
            diff: m,
            prevState: h,
            contentReferences: g,
            collectReactElement: _
        }, v = !1) => {
            let y = Qe(),
                b = Gi({
                    intl: t,
                    toaster: n,
                    comments: r,
                    value: i,
                    maxLength: a,
                    onBlur: o,
                    onFocus: s,
                    onSave: u,
                    safeUrls: d,
                    modelCursor: ee,
                    selection: f,
                    isDisabled: p,
                    diff: m,
                    prevState: h,
                    contentReferences: g,
                    collectReactElement: _,
                    shouldUseContentReferencePlugin: y
                });
            l(b);
            let x = e => {
                    let t = w.state.apply(e);
                    if (w.updateState(t), l(t), !e.docChanged || Hi(e)) return;
                    let n = rr(t);
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
                        getSerializedDocument: () => Z().serialize(r),
                        getAdjustedComments: () => {
                            let e = rn(nn, t);
                            if (e == null) return [];
                            let n = Z(),
                                i = _t(n.parse(n.serialize(r)), e.positions);
                            return ct(e.comments, i)
                        }
                    })
                },
                S = Z(),
                C = {
                    ...S.nodeViews(),
                    ...y ? {
                        [T]: (e, t, n) => new Si(e, t, n, _)
                    } : {},
                    [kt]: (e, t, n) => new wi(e, t, n),
                    ...m == null ? {
                        [un]: (e, t, n) => new X(e, t, n, v)
                    } : {}
                },
                w = new ke({
                    mount: e
                }, {
                    state: b,
                    editable: () => !p,
                    dispatchTransaction: x,
                    nodeViews: C,
                    ...y ? {
                        handleDOMEvents: {
                            copy: (e, t) => gi(e, t)
                        }
                    } : {},
                    handlePaste(e, r) {
                        let i;
                        if (y && (i = r.clipboardData?.getData(`application/x-prosemirror`)), i ||= r.clipboardData?.getData(`text/plain`), i == null) return !1;
                        P.logEvent(`Canvas Prosemirror Paste`, {
                            textLength: i.length
                        });
                        let o = fi(e.state.doc),
                            s = o + i.length,
                            c = a != null && s > a;
                        c && n != null && t != null && he(n, t);
                        let l = r.clipboardData?.getData(`text/html`);
                        if (l) {
                            let t = Yi(l),
                                n = new window.DOMParser().parseFromString(t, `text/html`),
                                r = new Ie(Ne.fromSchema(e.state.schema).parse(n.body).content, 1, 1);
                            return e.dispatch(e.state.tr.replaceSelection(r)), !0
                        }
                        let u = i;
                        if (c) {
                            let e = a - o - 50;
                            u = e > 0 ? i.slice(0, e) : ``
                        }
                        return Ye(e, u, y), !0
                    }
                });
            return {
                view: w,
                pmu: S
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
    if (n instanceof Element && [Y.PROSEMIRROR_EDITOR_CONTAINER, Y.PROSEMIRROR_CONTEXT_CHILDREN].some(e => n.closest(`#${e}`) != null)) return !1;
    e.focus();
    let r = dr(e.dom.getBoundingClientRect(), {
            x: t.clientX,
            y: t.clientY
        }),
        i = e.state.tr,
        a = e.posAtCoords({
            left: r.x,
            top: r.y
        });
    if (a != null) {
        let t = Math.min(a.pos, Qt(e.state.doc) - 1);
        i.setSelection(new W(i.doc.resolve(t))), e.dispatch(i)
    }
    return !0
}
var Q, ta, $, na, ra, ia, aa = e((() => {
    h(), ln(), Fn(), Bn(), Xn(), sr(), lr(), at(), ur(), ye(), fr(), rt(), D(), s(), y(), u(), C(), o(), S(), R(), Q = t(N()), M(), ta = t(Ct()), Xi(), vt(), on(), Bi(), $i(), $ = j(), na = ({
        editorRef: e,
        wrapperClassName: t,
        transparentBackground: n = !1,
        comments: r,
        commentingOn: i,
        diff: a,
        paddingBottom: o,
        hoveredCommentId: s,
        focusedCommentId: u,
        hoveredEditId: d,
        rejectedEdits: p,
        showChanges: m,
        isDisabled: h = !1,
        value: _,
        onBlur: v,
        onFocus: y,
        onChange: b,
        onMouseLeave: S,
        onSave: C,
        safeUrls: T,
        children: E,
        width: D,
        modelCursor: O,
        shouldResetSelection: k = !1,
        contentReferences: te
    }) => {
        let j = se(),
            re = ne(),
            ie = (0, Q.useRef)(null),
            M = (0, Q.useRef)(null),
            [N, ae] = (0, Q.useState)(null),
            oe = l(),
            ce = x(),
            [{
                width: le
            }, ue] = (0, ta.default)(),
            de = (0, Q.useRef)(v);
        de.current = v;
        let fe = (0, Q.useRef)(y);
        fe.current = y;
        let P = ee()?.planType ?? c.GUEST,
            F = w(`1958014328`) ? 1e7 : _e(P),
            pe = (0, Q.useRef)(b);
        pe.current = b;
        let me = (0, Q.useRef)(C);
        me.current = C;
        let I = Qe(),
            [he, ge] = (0, Q.useState)(() => new Map),
            L = (0, Q.useCallback)((e, t) => {
                ge(n => {
                    let r = new Map(n);
                    return t == null ? r.delete(e) : r.set(e, t), r
                })
            }, []),
            ve = (0, Q.useCallback)((e = _) => Gi({
                intl: j,
                toaster: re,
                comments: r,
                diff: a,
                value: e,
                selection: k ? void 0 : M.current?.state.selection,
                onBlur: e => de.current?.(e),
                onFocus: e => fe.current?.(e),
                onSave: () => me.current?.(),
                modelCursor: O,
                isDisabled: h,
                safeUrls: T,
                prevState: N,
                contentReferences: te,
                collectReactElement: L,
                shouldUseContentReferencePlugin: I,
                maxLength: F
            }), [j, re, r, a, _, k, O, h, T, N, te, L, I, F]),
            ye = (0, Q.useCallback)(e => {
                let t = ve(e);
                M.current?.updateState(t), ae(t)
            }, [ve]);
        (0, Q.useImperativeHandle)(e, () => ({
            UNSAFE_setValue: ye,
            revertChanges: () => {
                if (M.current == null) throw Error(`Tried to call revertChanges, but viewRef.current is null`);
                ar(M.current)
            },
            flushChanges: () => {
                if (M.current == null) throw Error(`Tried to call flushChanges, but viewRef.current is null`);
                ir(M.current)
            },
            maybeFocusOnEditor: e => {
                if (M.current == null) throw Error(`Tried to call maybeFocus, but viewRef.current is null`);
                return ea(M.current, e)
            },
            viewRef: M
        })), f(() => {
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
                onChange: e => pe.current?.(e),
                onUpdate: ae,
                onSave: () => me.current?.(),
                isDisabled: h,
                safeUrls: T,
                prevState: N,
                contentReferences: te,
                collectReactElement: L,
                shouldUseContentReferencePlugin: I,
                maxLength: F
            }, oe);
            return M.current = t, () => {
                t?.destroy()
            }
        }, [a, F]), (0, Q.useEffect)(() => {
            M.current?.setProps({
                editable: () => !h
            })
        }, [h]), J(e => In(e, h), M, [h]), J(e => {
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
        }, M, [ce, oe]), J(e => e.setMeta(nr, m), M, [m]), J(e => Mi(e, O), M, [O]), J(e => e.setMeta(nn, {
            comments: r,
            commentingOn: i,
            hoveredCommentId: s,
            focusedCommentId: u
        }), M, [r, s, u, i]), J(e => e.setMeta(qn, {
            hoveredEditId: d,
            rejectedEdits: p ?? new Set
        }), M, [d, p]), J(e => jn(e, new Set(T ?? [])), M, [T]);
        let be = (0, Q.useCallback)(() => M.current, [M]),
            R = [],
            xe = [];
        return Q.Children.forEach(E, e => {
            if (!(0, Q.isValidElement)(e)) return;
            let {
                type: t
            } = e;
            if (t === ia) R.push(e);
            else if (t === ra) xe.push(e);
            else throw Error(`Invalid Prosemirror child: ` + JSON.stringify(t))
        }), (0, $.jsx)(bt.Provider, {
            value: be,
            children: (0, $.jsx)(St.Provider, {
                value: N,
                children: (0, $.jsxs)(xt.Provider, {
                    value: le,
                    children: [(0, $.jsx)(`div`, {
                        id: Y.PROSEMIRROR_CONTEXT_CHILDREN,
                        children: R
                    }), (0, $.jsxs)(`div`, {
                        className: t,
                        onMouseLeave: S,
                        id: Y.PROSEMIRROR_EDITOR_CONTAINER,
                        style: {
                            paddingBottom: o
                        },
                        children: [(0, $.jsx)(`div`, {
                            ref: A(ie, ue),
                            className: g(Qi.main, st.composer, `markdown prose dark:prose-invert contain-inline-size focus:outline-hidden`, n ? `bg-transparent` : `bg-[var(--canvas-bg,var(--bg-primary))]`),
                            style: {
                                width: D
                            }
                        }), xe, I ? Array.from(he.values()) : null]
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
    Ki as a, ii as c, oi as d, Y as f, Qi as i, ti as l, aa as n, qi as o, ur as p, $i as r, Xi as s, na as t, ni as u
};
//# sourceMappingURL=ed61b531-jgqas5ayu7dgan11.js.map
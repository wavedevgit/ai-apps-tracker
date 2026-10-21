import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B8 as n,
    BU as r,
    CN as i,
    Dot as a,
    Eot as o,
    HU as s,
    K8 as c,
    Kot as l,
    LN as u,
    P1 as d,
    R1 as f,
    RN as p,
    S2 as m,
    SZ as h,
    V8 as g,
    X5 as _,
    Y5 as v,
    Ynt as y,
    _Z as b,
    aE as x,
    bN as S,
    dat as C,
    iE as w,
    lat as T,
    n1 as E,
    oct as D,
    qot as O,
    t1 as k,
    trt as A,
    wN as j,
    x2 as ee,
    yst as te
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    Bn as M,
    Kt as ne,
    Ln as re,
    Rn as N,
    Vn as P,
    Zt as ie,
    rn as ae,
    zn as oe
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    HVt as se,
    KRn as ce,
    UVt as le,
    _9 as F,
    _ct as ue,
    b9 as de,
    cUn as I,
    dWn as L,
    hct as fe,
    lUn as R,
    mWn as z,
    mct as pe,
    rCt as me,
    tCt as he,
    uUn as ge,
    v9 as _e,
    y9 as ve
} from "./conversation-small-kzsalymynzuddxee.js";
import {
    At as B,
    B as ye,
    Ct as be,
    Dt as xe,
    Et as V,
    Ft as Se,
    H,
    It as Ce,
    K as we,
    Rt as Te,
    St as Ee,
    Tt as U,
    U as De,
    V as W,
    W as G,
    X as Oe,
    Yt as ke,
    Z as Ae,
    Zt as je,
    an as Me,
    at as Ne,
    in as Pe,
    jt as Fe,
    kt as K,
    ot as Ie,
    q as Le,
    qt as Re,
    rn as ze,
    ut as Be,
    wt as Ve,
    z as He,
    zt as Ue
} from "./82782bc9-idqd90kxtp4zogpp.js";
import {
    AS as We,
    JS as Ge,
    KS as Ke,
    QC as qe,
    _S as Je,
    _w as Ye,
    aS as Xe,
    gw as Ze,
    iw as Qe,
    sS as $e,
    tw as et,
    vS as tt,
    vw as nt
} from "./8b34dbc2-ba6wt3zxvh7jce7p.js";
import {
    c as rt,
    r as it,
    s as at
} from "./31cec8d8-ejzahhq8v425zkie.js";
import {
    c as ot,
    s as st
} from "./dced7e81-cp8j0ikyzhb32tdz.js";
import {
    E as ct,
    U as lt,
    f as ut,
    p as dt,
    r as ft,
    s as pt,
    w as mt
} from "./bcae0416-g2939xy1bqugv6v2.js";
import {
    h as ht,
    i as gt,
    m as _t,
    n as vt,
    r as yt,
    t as bt
} from "./df59e297-mwifg1b5yqvvfc6o.js";
import {
    t as xt
} from "./4c0f1f8e-o4zbuwgknf8ay6gx.js";
import {
    a as St,
    i as Ct,
    o as wt,
    r as Tt
} from "./373ddd65-o5ueta5lk6m8a4cj.js";
import {
    i as Et,
    t as Dt
} from "./6afb0137-exx7rtatqd31lebe.js";
import {
    a as Ot,
    o as kt,
    r as At,
    t as jt
} from "./e74608d1-lvc2vtxr0tjpdcl6.js";
import {
    C as Mt,
    E as Nt,
    b as Pt,
    o as Ft
} from "./bcae0416-bsgze497avw690kh.js";
import {
    n as It,
    t as Lt
} from "./21d5ff49-jb0dwvqzgbxncuvu.js";
import {
    n as Rt,
    r as zt,
    s as Bt
} from "./bcae0416-5if2l4pgcuo2pd9a.js";
import {
    a as Vt,
    i as Ht,
    t as Ut
} from "./bcae0416-m76a5wjnoa0mnj10.js";
import {
    n as Wt,
    r as Gt,
    t as Kt
} from "./6cb574fa-crcsvhxov9mtun0v.js";
import {
    a as qt,
    c as Jt,
    d as Yt,
    f as Xt,
    i as Zt,
    l as Qt,
    m as $t,
    n as en,
    o as tn,
    p as nn,
    r as rn,
    s as an,
    t as on,
    u as sn
} from "./e99f8e1a-mmerpbt0bftr6e0c.js";
import {
    c as cn,
    h as ln,
    l as un,
    m as dn,
    n as fn,
    o as pn,
    p as mn,
    s as hn,
    t as gn,
    u as _n,
    v as vn,
    y as yn
} from "./e5d54aa7-fzd1rs224acdxgsn.js";
import {
    n as bn,
    t as xn
} from "./1c4de3ec-jdft0f02dwwu5x53.js";
import {
    n as Sn,
    r as Cn,
    t as wn
} from "./60549c99-ljg58x2g4xar4kyp.js";
import {
    a as Tn,
    t as En
} from "./dccfc4ad-h9winkvfvnec9nya.js";

function Dn(e, t) {
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

function On(e, t, n) {
    let r = t.mark.type,
        i = {
            ...t.mark.attrs,
            disabled: n
        };
    return e.removeMark(t.from, t.to, r), e.addMark(t.from, t.to, r.create(i)), e
}

function kn(e, t) {
    return e.setMeta(Mn, {
        safeUrls: t
    })
}

function An(e) {
    return e.getMeta(Mn) ?? null
}

function jn(e = new Set) {
    return new U({
        key: Mn,
        state: {
            init(t) {
                return {
                    safeUrls: e
                }
            },
            apply(e, t) {
                let n = An(e);
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
                a = n.schema.marks[vn.proseMirrorMarkName()],
                o = Dn(n.doc, a),
                s = !1;
            return o.forEach(e => {
                let t = e.mark.attrs.href,
                    n = r.safeUrls.has(t);
                n === (e.mark.attrs.disabled === !0) && (On(i, e, !n), s = !0)
            }), s ? i : null
        }
    })
}
var Mn, Nn = e((() => {
    yn(), B(), Mn = new V(`disableUnsafeLinks`)
}));

function Pn(e, t) {
    return e.setMeta(Ln, {
        isDisabled: t
    })
}

function Fn(e) {
    return e.getMeta(Ln) ?? null
}

function In(e, t = !1) {
    return new U({
        key: Ln,
        state: {
            init() {
                return {
                    isDisabled: t
                }
            },
            apply(e, t) {
                let n = Fn(e);
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
                if (Ln.getState(t).isDisabled || !(r instanceof K && r.empty)) return null;
                let {
                    $cursor: i
                } = r;
                if (!i || !e) return null;
                let a = i.start();
                if (!((i.parent.isTextblock || i.parent.type.name === `doc`) && i.pos === a && i.node().content.size === 0)) return null;
                let o = W.widget(a, () => {
                    let t = document.createTextNode(e.formatMessage(Rn.placeholder)),
                        n = document.createElement(`span`);
                    return n.className = `text-token-text-tertiary dark:text-gray-500 pointer-events-none select-none`, n.style.position = `absolute`, n.appendChild(t), n
                });
                return H.create(n, [o])
            }
        }
    })
}
var Ln, Rn, zn = e((() => {
        B(), G(), N(), Ln = new V(`placeholder`), Rn = re({
            placeholder: {
                id: `n2B51U`,
                defaultMessage: `Write something...`
            }
        })
    })),
    Bn, Vn = e((() => {
        Bn = {
            "override-strong-color": `_1bGYnG_override-strong-color`
        }
    }));

function Hn({
    isHovered: e,
    isRejected: t,
    isTextAcive: n
}) {
    return v({
        "line-through": !n,
        "filter grayscale-[0.6]": t && !n,
        "opacity-60": t && !n,
        "bg-opacity-50 dark:bg-opacity-50": t && e,
        "bg-opacity-10 dark:bg-opacity-10": t && !e,
        "bg-opacity-60 dark:bg-opacity-60": !t && !e
    })
}

function Un({
    isHovered: e,
    isRejected: t,
    isReplacement: n
}) {
    return v(`bg-red-100 dark:bg-red-600`, Hn({
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

function Wn({
    isHovered: e,
    isRejected: t,
    isReplacement: n
}) {
    let r = !t;
    return v(Bn[`override-strong-color`], `text-green-600 dark:text-green-200 bg-green-100 dark:bg-green-600`, Hn({
        isHovered: e,
        isRejected: t,
        isTextAcive: r
    }), {
        "dark:bg-green-800": t,
        "border border-green-500 rounded-e border-s-0": t && n,
        "border border-green-500 rounded-sm": t && !n
    })
}
var Gn = e((() => {
        Vn(), _()
    })),
    Kn, qn, Jn, Yn = e((() => {
        Gn(), B(), G(), Kn = new V(`edit`), qn = (e, t, n, r) => {
            let i = [];
            for (let {
                    start: e,
                    end: n,
                    editId: r
                }
                of t) i.push(W.inline(e, n, {
                class: Un({
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
                of e) i.push(W.inline(t, n, {
                class: Wn({
                    isHovered: !1,
                    isRejected: !1,
                    isReplacement: !0
                }),
                "data-edit-id": r
            }));
            return i
        }, Jn = (e, t) => new U({
            key: Kn,
            state: {
                init() {
                    let n = new Set;
                    return {
                        decorations: qn(e, t, null, n),
                        hoveredEditId: null,
                        rejectedEdits: n
                    }
                },
                apply(n, r) {
                    let {
                        hoveredEditId: i,
                        rejectedEdits: a
                    } = n.getMeta(Kn) ?? null ?? r;
                    return {
                        decorations: qn(e, t, i, a),
                        hoveredEditId: i,
                        rejectedEdits: a
                    }
                }
            },
            props: {
                decorations(e) {
                    let t = this.getState(e);
                    return t ? H.create(e.doc, t.decorations.concat()) : H.empty
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
    q, Xn, Zn = e((() => {
        a(), q = class e {
            constructor(e, t) {
                o(this, `length`, void 0), o(this, `step`, void 0), this.length = e, this.step = t
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
        }, o(q, `none`, []), Xn = class {
            constructor(e, t, n, r, i, a) {
                o(this, `fromA`, void 0), o(this, `toA`, void 0), o(this, `fromB`, void 0), o(this, `toB`, void 0), o(this, `deleted`, void 0), o(this, `inserted`, void 0), this.fromA = e, this.toA = t, this.fromB = n, this.toB = r, this.deleted = i, this.inserted = a
            }
            get lenA() {
                return this.toA - this.fromA
            }
            get lenB() {
                return this.toB - this.fromB
            }
        }
    })),
    Qn, $n, er = e((() => {
        ke(), Zn(), a(), Qn = (e, t, n, r, i) => new Xn(e, t, n, r, e === t ? q.none : [new q(t - e, i)], n === r ? q.none : [new q(r - n, i)]), $n = class e {
            constructor(e, t) {
                o(this, `doc`, void 0), o(this, `changes`, void 0), this.doc = e, this.changes = t
            }
            static create(t) {
                return new e(t, [])
            }
            addSteps(t, n) {
                let r = [];
                for (let e of n) {
                    let t = 0;
                    if (e.getMap().forEach((n, i, a, o) => {
                            r.push(Qn(n + t, i + t, a, o, e)), t = o - a - (i - n)
                        }), e instanceof Fe || e instanceof Ce) {
                        let {
                            from: t,
                            to: n
                        } = e;
                        r.push(Qn(t, n, t, n, e))
                    }
                }
                if (r.length === 0) return this;
                let i = this.changes.concat(r);
                return new e(t, i)
            }
        }
    })),
    J, tr, nr, rr, ir, ar, or = e((() => {
        B(), ke(), G(), er(), J = new V(`changeset`), tr = new V(`highlightChanges`), nr = e => J.getState(e), rr = e => {
            let {
                state: t
            } = e, n = t.tr.setMeta(J, !0);
            e.updateState(t.apply(n))
        }, ir = e => {
            let {
                state: t
            } = e, n = nr(t);
            if (!n) return;
            let {
                maps: r,
                steps: i
            } = n, a = new Se(r), o = t.tr;
            for (let e = i.length - 1; e >= 0; e--) {
                let t = i[e].map(a.slice(e + 1));
                t && o.maybeStep(t).doc && a.appendMap(t.getMap(), e)
            }
            let s = t.apply(o.setMeta(J, !0));
            e.updateState(s)
        }, ar = () => {
            let e = e => ({
                    changeset: $n.create(e),
                    maps: [],
                    steps: []
                }),
                t = new U({
                    key: J,
                    state: {
                        init: (t, {
                            doc: n
                        }) => e(n),
                        apply: (t, n, r, i) => {
                            let {
                                doc: a
                            } = i;
                            if (t.getMeta(J)) return e(a);
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
            return [t, new U({
                key: tr,
                state: {
                    init() {
                        return {
                            deco: H.empty,
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
                        }) => W.inline(e, t, {
                            class: `blame-marker`
                        })), u = e.getMeta(tr);
                        return {
                            deco: H.create(s, l),
                            show: u ?? n.show
                        }
                    }
                },
                props: {
                    decorations(e) {
                        let t = this.getState(e);
                        if (!t?.show) return H.empty;
                        let {
                            deco: n
                        } = t;
                        return n
                    }
                }
            })]
        }
    })),
    sr, Y, cr = e((() => {
        sr = t(P()), Y = (e, t, n) => {
            (0, sr.useEffect)(() => {
                let n = t.current;
                if (!n) return;
                let {
                    state: r
                } = n, i = e(r.tr);
                i && n.dispatch(i)
            }, n)
        }
    })),
    X, lr = e((() => {
        X = function(e) {
            return e.PROSEMIRROR_CONTEXT_CHILDREN = `prosemirror-context-children`, e.PROSEMIRROR_EDITOR_CONTAINER = `prosemirror-editor-container`, e
        }({})
    }));

function ur(e, t) {
    return {
        x: se(t.x, e.left, e.right),
        y: se(t.y, e.top, e.bottom)
    }
}
var dr = e((() => {
        le()
    })),
    fr, pr = e((() => {
        fr = (e, t) => {
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
    mr, hr, gr = e((() => {
        We(), Bt(), Vt(), Mt(), lt(), ut(), B(), pr(), $t(), Gt(), a(), mr = e => ft.theme({
            "&": {
                backgroundColor: e ? `var(--main-surface-primary)` : `var(--gray-100)`
            }
        }), hr = class {
            constructor(e, t, n, r) {
                o(this, `pmView`, void 0), o(this, `getPos`, void 0), o(this, `node`, void 0), o(this, `updating`, !1), o(this, `cm`, void 0), o(this, `languageCompartment`, void 0), o(this, `themeCompartment`, void 0), o(this, `setLanguage`, async e => {
                    let t = await Kt(e);
                    t && this.cm.dispatch({
                        effects: this.languageCompartment.reconfigure(t)
                    })
                }), o(this, `setTheme`, e => {
                    let t = [mr(e), Nt(nn(e))];
                    this.cm.dispatch({
                        effects: this.themeCompartment.reconfigure(t)
                    })
                }), o(this, `handleBackspace`, e => {
                    let {
                        selection: t
                    } = e.state;
                    if (!(t.main.empty && t.main.from === 0) || this.cm.state.doc.length > 0) return !1;
                    let n = Ke(this.pmView.state, this.pmView.dispatch);
                    return this.pmView.focus(), n
                }), o(this, `handleShiftEnter`, () => {
                    let e = Ge(this.pmView.state, this.pmView.dispatch);
                    return this.pmView.focus(), e
                }), o(this, `dispatch`, e => {
                    if (this.cm.update([e]), this.updating) return;
                    let t = (this.getPos() ?? 0) + 1,
                        n = e.state.doc.toString(),
                        r = fr(this.node.textContent, n);
                    if (r) {
                        let {
                            text: e,
                            from: n,
                            to: i
                        } = r, a = e ? this.pmSchema.text(e) : null, o = this.pmView.state.tr.replaceWith(n + t, i + t, a);
                        this.pmView.dispatch(o)
                    }
                    this.forwardSelection()
                }), o(this, `update`, e => {
                    if (e.type !== this.node.type) return !1;
                    e.attrs.lang !== this.node.attrs.lang && this.setLanguage(e.attrs.lang), e.attrs.isDarkMode != null && e.attrs.isDarkMode !== this.node.attrs.isDarkMode && this.setTheme(e.attrs.isDarkMode), this.node = e;
                    let t = fr(this.cm.state.doc.toString(), e.textContent);
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
                }), o(this, `asProseMirrorSelection`, e => {
                    let t = (this.getPos() ?? 0) + 2,
                        {
                            anchor: n,
                            head: r
                        } = this.cm.state.selection.main;
                    return K.create(e, n + t, r + t)
                }), o(this, `forwardSelection`, () => {
                    if (!this.cm.hasFocus) return;
                    let {
                        state: e
                    } = this.pmView, t = this.asProseMirrorSelection(e.doc);
                    t.eq(e.selection) || this.pmView.dispatch(e.tr.setSelection(t))
                }), o(this, `maybeEscape`, (e, t) => n => {
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
                        l = xe.near(this.pmView.state.doc.resolve(c), t);
                    return this.pmView.dispatch(this.pmView.state.tr.setSelection(l).scrollIntoView()), this.pmView.focus(), !0
                }), o(this, `setSelection`, (e, t) => {
                    this.focus(), this.updating = !0, this.cm.dispatch({
                        selection: {
                            anchor: e,
                            head: t
                        }
                    }), this.updating = !1
                }), o(this, `focus`, () => {
                    this.cm.focus(), this.forwardSelection()
                }), o(this, `selectNode`, () => {
                    this.focus()
                }), o(this, `stopEvent`, () => !0), o(this, `destroy`, () => {
                    this.cm.destroy()
                }), o(this, `_setIsCodeBlockView`, () => {
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
                this.languageCompartment = new mt, this.themeCompartment = new mt;
                let a = Wt(e.attrs.lang),
                    s = ct.create({
                        doc: this.node.textContent,
                        extensions: [this.themeCompartment.of([mr(r), Nt(nn(r))]), ft.theme({
                            "&": {
                                borderRadius: `4px`,
                                padding: `0.5rem`
                            },
                            "&.cm-focused": {
                                outline: `none`
                            }
                        }), dt.of([...i, ...Ut, ...zt, Ht]), Ft(), Rt(), Pt(), pt(), this.languageCompartment.of(a == null ? [] : [a]), ct.changeFilter.of(e => (!e.docChanged && !this.updating && this.forwardSelection(), !0))]
                    });
                this.cm = new ft({
                    state: s,
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
        }, o(hr, `_getIsCodeBlockView`, e => e.dataset.isCodeBlockView === `true`)
    }));

function _r(e, t, n) {
    try {
        return t instanceof K ? K.create(e, t.anchor, t.head) : t instanceof Ve ? K.create(e, t.from, t.to) : t instanceof Ee ? new Ee(e) : void 0
    } catch {
        return n ?? K.create(e, 0)
    }
}
var vr = e((() => {
        B()
    })),
    yr, br = e((() => {
        we(), ln(), dn(), a(), yr = class {
            constructor(e, t) {
                o(this, `rules`, void 0);
                let n = [].concat.apply([], e.syntaxExtensions().map(e => e.proseMirrorInputRules(t))),
                    r = n.filter(e => e instanceof mn);
                r.sort((e, t) => mn.priority(t) - mn.priority(e));
                let i = 0;
                this.rules = n.map(e => {
                    if (!(e instanceof mn)) return e;
                    let t = r[i];
                    return i += 1, t ?? e
                })
            }
            build() {
                let e = Le({
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
    xr, Sr = e((() => {
        l(), Be(), Oe(), a(), xr = class {
            constructor(e, t) {
                o(this, `keymap`, void 0), this.keymap = new Map;
                for (let n of e.syntaxExtensions()) this.addKeymap(n.proseMirrorKeymap(t));
                this.addKeymap(Ne)
            }
            build() {
                let e = {};
                return this.keymap.forEach((t, n) => {
                    e[n] = Ie(...t)
                }), Ae(e)
            }
            addKeymap(e) {
                for (let t in e) this.keymap.get(t) || this.keymap.set(t, []), O(this.keymap.get(t)).push(e[t])
            }
        }
    })),
    Cr, wr = e((() => {
        hn(), a(), Cr = class {
            constructor(e) {
                o(this, `nodeViews`, void 0), this.nodeViews = {};
                for (let t of e.nodeExtensions()) {
                    let e = t.proseMirrorNodeName(),
                        n = t.proseMirrorNodeView();
                    e !== pn.proseMirrorNodeName() && e != null && n != null && (this.nodeViews[e] = n)
                }
            }
            build() {
                return this.nodeViews
            }
        }
    })),
    Tr, Er = e((() => {
        C(), Me(), a(), Tr = class {
            constructor(e) {
                o(this, `nodes`, {}), o(this, `marks`, {});
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
                    return new ze({
                        nodes: this.nodes,
                        marks: this.marks
                    })
                } catch (e) {
                    T.addError(e, {
                        nodes: this.nodes
                    })
                }
                return new ze({
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
        L(), a(), Dr = class {
            constructor(e) {
                o(this, `extensionManager`, void 0), this.extensionManager = e
            }
            build() {
                let e = z();
                for (let t of this.extensionManager.extensions()) e = t.unifiedInitializationHook(e);
                return e
            }
        }
    }));

function kr(e) {
    return e instanceof St
}

function Ar(e) {
    return e instanceof Ct
}
var jr, Mr = e((() => {
        wt(), a(), jr = class {
            constructor(e) {
                o(this, `markExtensionList`, void 0), o(this, `nodeExtensionList`, void 0), o(this, `otherExtensionList`, void 0), this.markExtensionList = new Map, this.nodeExtensionList = new Map, this.otherExtensionList = new Map;
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
        a(), Nr = class {
            constructor(e) {
                o(this, `extensionManager`, void 0), this.extensionManager = e
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
        n(), he(), a(), Fr = class e {
            constructor(e, t) {
                o(this, `extensionManager`, void 0), o(this, `proseMirrorSchema`, void 0), this.extensionManager = e, this.proseMirrorSchema = t
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
                            } = t, l = s?.start.offset ?? r, u = s?.end.offset;
                            if (u == null && `value` in t && typeof t.value == `string`) {
                                let {
                                    value: e
                                } = t;
                                u = l + e.length
                            }
                            u ??= l, r = u;
                            let d = {
                                start: l,
                                end: u
                            };
                            return c(a.unistNodeToProseMirrorNodes({
                                node: t,
                                schema: this.proseMirrorSchema,
                                convertedChildren: o,
                                context: n,
                                attrs: d
                            })).filter(g)
                        }
                        return console.warn(`Couldn't find any way to convert unist node of type "` + t.type + `" to a ProseMirror node.`), []
                    };
                return i(t, n)
            }
        }
    })),
    Lr, Rr, zr = e((() => {
        R(), l(), br(), Sr(), wr(), Er(), Or(), Mr(), Pr(), Ir(), a(), Lr = 5, Rr = class {
            constructor(e = []) {
                o(this, `builtSchema`, void 0), o(this, `inputRulesBuilder`, void 0), o(this, `keymapBuilder`, void 0), o(this, `nodeViewBuilder`, void 0), o(this, `unistToProseMirrorConverter`, void 0), o(this, `proseMirrorToUnistConverter`, void 0), o(this, `unified`, void 0), o(this, `memoizedProsemirrorDocs`, new Map);
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
    Br, Vr = e((() => {
        wt(), xn(), Br = class extends Tt {
            unifiedInitializationHook(e) {
                return e.use(bn)
            }
        }
    }));

function Z(e = {}) {
    let t = JSON.stringify(e),
        n = Hr.get(t);
    return n ?? (n = new Rr([new gn, ...e?.shouldStripDirectives ? [new Br] : []]), Hr.set(t, n)), n
}
var Hr, Ur = e((() => {
        fn(), zr(), Vr(), Hr = new Map
    })),
    Wr, Gr, Kr, qr, Jr, Yr = e((() => {
        R(), Ur(), Qt(), ue(), ee(), k(), Wr = (e, t, n, r) => {
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
        }, Gr = (e, t) => m(e.parentNodeNamesAtStart, t.parentNodeTypeNameStack), Kr = new WeakMap, qr = ({
            diff: e
        }) => {
            let t = new pe(fe.GetDiffedDoc, {
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
            } = Jt(s), {
                sourceRangeToPmRange: f
            } = Jt(o);
            t.endBlock(`init_position_transformers`);
            let p = s,
                m = 0,
                h = 0,
                g = [],
                _ = (e, t, n) => {
                    for (let [r, i] of n.entries()) try {
                        if (!Gr(t, i)) continue;
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
                } = v, C = i.start !== i.end, w = C ? Wr(o, x, S, i) : null;
                t.startBlock(`get_merged_doc_positions`);
                let {
                    positions: T
                } = Jt(p);
                t.endBlock(`get_merged_doc_positions`);
                let D = Math.max(...y.map(({
                        pmPos: e
                    }) => e)),
                    O = Math.min(...b.map(({
                        pmPos: e
                    }) => e)),
                    k = [].concat(b, y),
                    A = r.start !== r.end && s.textBetween(D, O).length > 0,
                    j = !1;
                if (A && !C) u.push({
                    editId: n,
                    start: D + m,
                    end: O + m
                }), j = !0;
                else if (!A && !C) j = !0;
                else {
                    let e = k.map(({
                        pmPos: e
                    }) => T[e + m]);
                    for (let t of w ?? []) {
                        let r = _(n, t, e);
                        if (r == null) continue;
                        let i = r[0],
                            a = t.slice.size,
                            o = i < b.length;
                        o || (m += a), A && u.push({
                            editId: n,
                            start: D + m,
                            end: O + m
                        }), o && (m += a), j = !0;
                        break
                    }
                }
                if (!j && w != null) {
                    let e = Math.min(...y.map(({
                        pmPos: e
                    }) => e)) + m - 1;
                    for (let t of w) try {
                        p = p.replace(e, e, t.slice), l.push({
                            editId: n,
                            start: e,
                            end: e + t.slice.size
                        }), m += t.slice.size, A && u.push({
                            editId: n,
                            start: D + m,
                            end: O + m
                        }), j = !0;
                        break
                    } catch (e) {
                        g.push(e)
                    }
                }
                j ? I.logEvent(`Canvas Diff Edit Success`) : (I.logEvent(`Canvas Diff Edit Fail`), I.logError(`Failed to insert edit for diffed doc`, E(g), {
                    errors: g.map(ge),
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
        gr(), B(), Xr = new V(`focus`), Zr = (e, t) => new U({
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
                        return r != null && hr.isInCodeBlockView(r) ? !1 : (t(n), e.dispatch(e.state.tr.setMeta(Xr, !1)), !1)
                    },
                    focus: (t, n) => (e(n), t.dispatch(t.state.tr.setMeta(Xr, !0)), !1)
                }
            }
        })
    })),
    $r, ei = e((() => {
        Sn(), B(), G(), $r = () => new U({
            key: new V(`katex`),
            props: {
                decorations(e) {
                    let t = [];
                    return e.doc.descendants((e, n) => {
                        if (e.type.name === `inline_math` || e.type.name === `math_block`) {
                            let r = typeof e.attrs.latex == `string` ? e.attrs.latex : ``,
                                i = e.type.name === `math_block`;
                            t.push(W.widget(n + 1, e => {
                                let t = e.dom.ownerDocument,
                                    n = t.createElement(`span`),
                                    a = Cn(r, i);
                                return n.setAttribute(`role`, `math`), n.setAttribute(`aria-label`, r), n.setAttribute(`data-math-source`, r), n.setAttribute(`data-client-katex-layout`, ``), i && (n.style.display = `block`, n.style.contentVisibility = `auto`, n.style.containIntrinsicSize = `auto 2lh`), a == null ? n.textContent = r : n.appendChild(wn(a, t)), n
                            }, {
                                key: (i ? `display` : `inline`) + `\0` + r
                            }))
                        }
                    }), H.create(e.doc, t)
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
    return new U({
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
    oi(), _(), B(), a(), ci = new V(`linkTooltip`), li = 36, ui = class {
        constructor(e) {
            o(this, `tooltipElement`, void 0), o(this, `button`, void 0), o(this, `onMouseLeave`, void 0), this.tooltipElement = document.createElement(`div`), this.tooltipElement.className = v(`absolute  py-1.5 px-2.5 bg-token-bg-primary border border-token-border-default rounded-lg text-xs z-50 items-center cursor-pointer shadow-md flex justify-center cursor-pointer`, `transform -translate-x-1/2`), this.button = document.createElement(`button`), this.button.textContent = `Open link`, this.button.className = v(`bg-none`, `border-none`, `text-token-text-primary `, `text-sm`), this.tooltipElement.appendChild(this.button), this.onMouseLeave = e, this.tooltipElement.addEventListener(`mouseleave`, e)
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
    R(), Ur(), _e(), B(), ke(), pi = new V(`maxLength`), mi = (e, t, n) => new U({
        key: pi,
        state: {
            init() {
                return n
            },
            apply: (e, t) => t
        },
        filterTransaction(r) {
            if (e == null || !r.steps.some(e => e instanceof Ue || e instanceof Te ? e.slice.size > e.to - e.from : !1)) return !0;
            let i = fi(r.doc);
            return i <= n ? !0 : (t && ve(t, e), I.logEvent(`Canvas Prosemirror Max Length`, {
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
    let n = Ye.getState(t.state),
        r = parseInt(e);
    if (n == null || r == null) return null;
    let i = n?.displayedContentReferences?.[r];
    return i == null || i.type !== `grouped_webpages` ? null : i.items?.[0]?.url
}
var yi = e((() => {
        nt()
    })),
    bi, xi, Si, Ci = e((() => {
        nt(), Tn(), bi = t(ne()), ie(), xi = M(), a(), Si = class {
            constructor(e, t, n, r) {
                o(this, `dom`, void 0), o(this, `node`, void 0), o(this, `view`, void 0), o(this, `getPos`, void 0), o(this, `key`, void 0), o(this, `collectReactElement`, void 0), this.node = e, this.getPos = n, this.view = t, this.dom = document.createElement(`span`), this.dom.className = `content-reference-node`;
                let i = () => `${ae()}`;
                this.key = `content-reference-node-${i()}`, this.collectReactElement = r, this.renderReactComponent()
            }
            renderReactComponent() {
                let {
                    index: e
                } = this.node.attrs, t = Ye.getState(this.view.state);
                if (e == null) return;
                let n = t?.displayedContentReferences?.[e];
                if (!n || n.type !== `grouped_webpages`) return;
                let r = (0, xi.jsx)(En, {
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
        At(), Ot(), a(), wi = class {
            constructor(e, t, n) {
                o(this, `dom`, void 0), o(this, `node`, void 0), o(this, `getPos`, void 0), o(this, `view`, void 0), this.getPos = n, this.view = t, this.node = e;
                let r = document.createElement(`span`);
                r.className = `hive-log-wrapper`, r.style.display = `inline-block`, r.style.userSelect = `none`;
                let i = document.createElement(`span`);
                i.className = `hive-log`, i.contentEditable = `false`, i.setAttribute(`data-type`, `hive-log`);
                let a = Number.parseInt(String(e.attrs.timestamp), 10);
                i.setAttribute(`data-timestamp`, String(e.attrs.timestamp ?? ``)), i.textContent = Number.isFinite(a) ? jt(a) : ``;
                let s = e => {
                    e.preventDefault(), e.stopPropagation()
                };
                r.addEventListener(`mousedown`, s), i.addEventListener(`mousedown`, s), i.addEventListener(`click`, e => {
                    if (e.preventDefault(), !Number.isFinite(a)) return;
                    let {
                        openSidebar: t,
                        setCurrentTime: n
                    } = kt.getState();
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
    return new U({
        view(t) {
            return new Di(t, e)
        }
    })
}
var Di, Oi = e((() => {
    B(), ke(), Di = class {
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
                    let t = Re(this.editorView.state.doc, e, this.editorView.dragging.slice);
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
                a = xe.near(i.resolve(r > 0 ? s.after() : s.before()), r);
            if (a.$head?.parent.type.name === `code_block`) return n?.(t.tr.setSelection(a)), !0
        }
        return !1
    }
}
var Ai, ji = e((() => {
    _n(), Oe(), B(), Ai = Ae({
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
    return new U({
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
    sn(), _n(), qt(), Qt(), rt(), Lt(), B(), G(), Fi = new V(`modelCursor`), Ii = (e, t) => {
        let {
            doc: n
        } = e, r = [];
        if (!t) return H.empty;
        let {
            modelSelectionPositionRange: i,
            modelCursorPosition: a
        } = t, {
            sourceRangeToPmRange: o,
            sourceEndToPmPos: s
        } = Jt(n);
        if (a != null) {
            let e = Zt(a, s(a), `min`);
            if (e == null) return H.empty;
            if (e != null && Yt(n, e)) {
                let t = n.resolve(e);
                if (n.nodeAt(e)?.type.name === un.proseMirrorNodeName() || t.nodeBefore?.type.name === un.proseMirrorNodeName()) return H.empty
            }
            r.push(W.widget(e, () => {
                let e = document.createElement(`span`);
                return e.className = It.modelCursor, e
            }, {
                ignoreSelection: !0,
                side: 1
            }))
        } else if (i != null) {
            let {
                start: e,
                end: t
            } = o(i), n = Zt(i.start, e, `max`), a = Zt(i.end, t, `min`);
            if (n == null || a == null) return H.empty;
            r.push(W.inline(n, a, {
                class: `${it} bg-[Highlight]!`
            }))
        }
        return r.length ? H.create(n, r) : H.empty
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
    if (Yt(e, t)) return K.create(e, t)
}
var Wi, Gi, Ki, qi, Ji, Yi, Xi = e((() => {
        gr(), R(), vr(), Yr(), an(), Qr(), sn(), _n(), rn(), nt(), Nn(), Xe(), ei(), di(), hi(), zn(), Yn(), _t(), or(), st(), _e(), Je(), yi(), Ci(), h(), Et(), Ti(), Oi(), ye(), Oe(), Me(), B(), G(), ji(), Ur(), Bi(), Wi = `ignoreDocChange`, Gi = ({
            intl: e,
            toaster: t,
            value: n,
            comments: r,
            diff: i,
            maxLength: a = F,
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
            let g = Z(),
                _ = g.schema(),
                v = n;
            a != null && v.length > a && (v = v.slice(0, a), t != null && e != null && ve(t, e));
            let y, b = [],
                x = [];
            i && i.edits.length > 0 ? {
                doc: y,
                addedRanges: b,
                deletedRanges: x
            } = Jr({
                diff: i
            }) : y = g.parse(v);
            let S = o ? _r(y, o) : Ui(y),
                C = () => {
                    let e = p?.plugins.find(e => e.spec.key === qe().spec.key);
                    return e == null || p == null ? qe() : qe({}, e.getState(p))
                },
                w = e => {
                    let t = p?.plugins.find(e => e.spec.key === Pi().spec.key);
                    return Pi(e, p && t?.getState(p))
                };
            return be.create({
                doc: y,
                schema: _,
                selection: S,
                plugins: [...h ? [Ze(m)] : [], mi(e, t, a), g.inputRulesPlugin(), g.keymapPlugin(), Ae({
                    "Mod-s": () => (l(), !0),
                    "Mod-z": Qe,
                    "Mod-shift-z": et,
                    "Mod-y": et
                }), Ai, $r(), Ei(), He(), C(), Zr(s, c), on(r ?? []), ...i ? [Jn(b, x)] : [], w(d), jn(new Set(u ?? [])), In(e, f), si(), ...ar()]
            })
        }, Ki = (e, t) => {
            let n = Z(),
                r = n.schema(),
                i = n.parse(e);
            return be.create({
                doc: i,
                schema: r,
                plugins: [on(t ?? [])]
            })
        }, qi = ({
            mount: e,
            value: t,
            comments: n,
            isDarkMode: r
        }) => new De({
            mount: e
        }, {
            editable: () => !1,
            state: Ki(t, n),
            nodeViews: {
                [cn]: (e, t, n) => new hr(e, t, n, r)
            }
        }), Ji = (e, {
            intl: t,
            toaster: n,
            comments: r,
            value: i,
            maxLength: a = F,
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
            let x = $e(),
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
                    shouldUseContentReferencePlugin: x
                });
            l(S);
            let C = e => {
                    let t = E.state.apply(e);
                    if (E.updateState(t), l(t), !e.docChanged || Hi(e)) return;
                    let n = nr(t);
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
                            let e = tn(en, t);
                            if (e == null) return [];
                            let n = Z(),
                                i = ht(n.parse(n.serialize(r)), e.positions);
                            return ot(e.comments, i)
                        }
                    })
                },
                w = Z(),
                T = {
                    ...w.nodeViews(),
                    ...x ? {
                        [b]: (e, t, n) => new Si(e, t, n, v)
                    } : {},
                    [Dt]: (e, t, n) => new wi(e, t, n),
                    ...h == null ? {
                        [cn]: (e, t, n) => new hr(e, t, n, y)
                    } : {}
                },
                E = new De({
                    mount: e
                }, {
                    state: S,
                    editable: () => !m,
                    dispatchTransaction: C,
                    nodeViews: T,
                    ...x ? {
                        handleDOMEvents: {
                            copy: (e, t) => gi(e, t)
                        }
                    } : {},
                    handlePaste(e, r) {
                        let i;
                        if (x && (i = r.clipboardData?.getData(`application/x-prosemirror`)), i ||= r.clipboardData?.getData(`text/plain`), i == null) return !1;
                        I.logEvent(`Canvas Prosemirror Paste`, {
                            textLength: i.length
                        });
                        let o = fi(e.state.doc),
                            s = o + i.length,
                            c = a != null && s > a;
                        c && n != null && t != null && ve(n, t);
                        let l = r.clipboardData?.getData(`text/html`);
                        if (l) {
                            let t = Yi(l),
                                n = new window.DOMParser().parseFromString(t, `text/html`),
                                r = new Pe(je.fromSchema(e.state.schema).parse(n.body).content, 1, 1);
                            return e.dispatch(e.state.tr.replaceSelection(r)), !0
                        }
                        let u = i;
                        if (c) {
                            let e = a - o - 50;
                            u = e > 0 ? i.slice(0, e) : ``
                        }
                        return tt(e, u, x), !0
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
    if (n instanceof Element && [X.PROSEMIRROR_EDITOR_CONTAINER, X.PROSEMIRROR_CONTEXT_CHILDREN].some(e => n.closest(`#${e}`) != null)) return !1;
    e.focus();
    let r = ur(e.dom.getBoundingClientRect(), {
            x: t.clientX,
            y: t.clientY
        }),
        i = e.state.tr,
        a = e.posAtCoords({
            left: r.x,
            top: r.y
        });
    if (a != null) {
        let t = Math.min(a.pos, Xt(e.state.doc) - 1);
        i.setSelection(new K(i.doc.resolve(t))), e.dispatch(i)
    }
    return !0
}
var Q, ta, $, na, ra, ia, aa = e((() => {
    D(), sn(), Nn(), zn(), Yn(), or(), cr(), rt(), lr(), _e(), dr(), Je(), f(), r(), A(), S(), w(), u(), _(), B(), Q = t(P()), N(), ta = t(xt()), Xi(), gt(), rn(), Bi(), $i(), $ = M(), na = ({
        editorRef: e,
        wrapperClassName: t,
        transparentBackground: n = !1,
        comments: r,
        commentingOn: a,
        diff: o,
        paddingBottom: c,
        hoveredCommentId: l,
        focusedCommentId: u,
        hoveredEditId: f,
        rejectedEdits: m,
        showChanges: h,
        isDisabled: g = !1,
        value: _,
        onBlur: b,
        onFocus: S,
        onChange: C,
        onMouseLeave: w,
        onSave: T,
        safeUrls: E,
        children: D,
        width: O,
        modelCursor: k,
        shouldResetSelection: A = !1,
        contentReferences: ee
    }) => {
        let M = oe(),
            ne = s(),
            re = (0, Q.useRef)(null),
            N = (0, Q.useRef)(null),
            [P, ie] = (0, Q.useState)(null),
            ae = i(),
            se = j(),
            [{
                width: ce
            }, le] = (0, ta.default)(),
            F = (0, Q.useRef)(b);
        F.current = b;
        let ue = (0, Q.useRef)(S);
        ue.current = S;
        let I = d()?.planType ?? te.GUEST,
            L = y(`1958014328`) ? 1e7 : de(I),
            fe = (0, Q.useRef)(C);
        fe.current = C;
        let R = (0, Q.useRef)(T);
        R.current = T;
        let z = $e(),
            [pe, me] = (0, Q.useState)(() => new Map),
            he = (0, Q.useCallback)((e, t) => {
                me(n => {
                    let r = new Map(n);
                    return t == null ? r.delete(e) : r.set(e, t), r
                })
            }, []),
            ge = (0, Q.useCallback)((e = _) => Gi({
                intl: M,
                toaster: ne,
                comments: r,
                diff: o,
                value: e,
                selection: A ? void 0 : N.current?.state.selection,
                onBlur: e => F.current?.(e),
                onFocus: e => ue.current?.(e),
                onSave: () => R.current?.(),
                modelCursor: k,
                isDisabled: g,
                safeUrls: E,
                prevState: P,
                contentReferences: ee,
                collectReactElement: he,
                shouldUseContentReferencePlugin: z,
                maxLength: L
            }), [M, ne, r, o, _, A, k, g, E, P, ee, he, z, L]),
            _e = (0, Q.useCallback)(e => {
                let t = ge(e);
                N.current?.updateState(t), ie(t)
            }, [ge]);
        (0, Q.useImperativeHandle)(e, () => ({
            UNSAFE_setValue: _e,
            revertChanges: () => {
                if (N.current == null) throw Error(`Tried to call revertChanges, but viewRef.current is null`);
                ir(N.current)
            },
            flushChanges: () => {
                if (N.current == null) throw Error(`Tried to call flushChanges, but viewRef.current is null`);
                rr(N.current)
            },
            maybeFocusOnEditor: e => {
                if (N.current == null) throw Error(`Tried to call maybeFocus, but viewRef.current is null`);
                return ea(N.current, e)
            },
            viewRef: N
        })), p(() => {
            let {
                current: e
            } = re;
            if (!e) return;
            let {
                view: t
            } = Ji(e, {
                intl: M,
                toaster: ne,
                comments: r,
                diff: o,
                value: _,
                onBlur: e => F.current?.(e),
                onFocus: e => ue.current?.(e),
                onChange: e => fe.current?.(e),
                onUpdate: ie,
                onSave: () => R.current?.(),
                isDisabled: g,
                safeUrls: E,
                prevState: P,
                contentReferences: ee,
                collectReactElement: he,
                shouldUseContentReferencePlugin: z,
                maxLength: L
            }, ae);
            return N.current = t, () => {
                t?.destroy()
            }
        }, [o, L]), (0, Q.useEffect)(() => {
            N.current?.setProps({
                editable: () => !g
            })
        }, [g]), Y(e => Pn(e, g), N, [g]), Y(e => {
            if (!se) return;
            let {
                schema: t
            } = e.doc.type, n = t.nodes.code_block;
            return n ? (e.doc.descendants((t, r) => {
                if (t.type === n) {
                    let n = t.type.create({
                        ...t.attrs,
                        isDarkMode: ae
                    }, t.content, t.marks);
                    e.replaceWith(r, r + t.nodeSize, n)
                }
            }), Vi(e)) : e
        }, N, [se, ae]), Y(e => e.setMeta(tr, h), N, [h]), Y(e => Mi(e, k), N, [k]), Y(e => e.setMeta(en, {
            comments: r,
            commentingOn: a,
            hoveredCommentId: l,
            focusedCommentId: u
        }), N, [r, l, u, a]), Y(e => e.setMeta(Kn, {
            hoveredEditId: f,
            rejectedEdits: m ?? new Set
        }), N, [f, m]), Y(e => kn(e, new Set(E ?? [])), N, [E]);
        let ve = (0, Q.useCallback)(() => N.current, [N]),
            B = [],
            ye = [];
        return Q.Children.forEach(D, e => {
            if (!(0, Q.isValidElement)(e)) return;
            let {
                type: t
            } = e;
            if (t === ia) B.push(e);
            else if (t === ra) ye.push(e);
            else throw Error(`Invalid Prosemirror child: ` + JSON.stringify(t))
        }), (0, $.jsx)(vt.Provider, {
            value: ve,
            children: (0, $.jsx)(bt.Provider, {
                value: P,
                children: (0, $.jsxs)(yt.Provider, {
                    value: ce,
                    children: [(0, $.jsx)(`div`, {
                        id: X.PROSEMIRROR_CONTEXT_CHILDREN,
                        children: B
                    }), (0, $.jsxs)(`div`, {
                        className: t,
                        onMouseLeave: w,
                        id: X.PROSEMIRROR_EDITOR_CONTAINER,
                        style: {
                            paddingBottom: c
                        },
                        children: [(0, $.jsx)(`div`, {
                            ref: x(re, le),
                            className: v(Qi.main, at.composer, `markdown prose dark:prose-invert contain-inline-size focus:outline-hidden`, n ? `bg-transparent` : `bg-[var(--canvas-bg,var(--bg-primary))]`),
                            style: {
                                width: O
                            }
                        }), ye, z ? Array.from(pe.values()) : null]
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
    Ki as a, ii as c, oi as d, X as f, Qi as i, ti as l, aa as n, qi as o, lr as p, $i as r, Xi as s, na as t, ni as u
};
//# sourceMappingURL=ed61b531-n8y1utra14enofg0.js.map
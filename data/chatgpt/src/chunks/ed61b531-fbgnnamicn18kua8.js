import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    BT as n,
    Dit as r,
    Gat as i,
    J0 as a,
    Lot as o,
    O$ as s,
    WX as c,
    Wat as l,
    YX as u,
    aN as d,
    b5 as f,
    d8 as p,
    dot as m,
    g8 as h,
    hU as g,
    iN as ee,
    k$ as _,
    kit as v,
    o1 as y,
    pU as b,
    pnt as x,
    q0 as S,
    tN as C,
    u1 as w,
    u8 as T,
    uot as E,
    vN as D,
    wst as O,
    y5 as k,
    yN as A,
    ynt as te,
    zT as ne
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as j,
    Kt as re,
    Ln as ie,
    Rn as M,
    Vn as N,
    Zt as ae,
    rn as oe,
    zn as se
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    ARn as ce,
    IVt as le,
    LVt as ue,
    QUn as de,
    XHn as P,
    YHn as F,
    YSt as I,
    ZHn as fe,
    cct as pe,
    f9 as L,
    h9 as me,
    m9 as he,
    p9 as ge,
    qSt as _e,
    sct as ve,
    tWn as ye,
    uct as be
} from "./conversation-small-fym1zmu9zimymmm1.js";
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
} from "./82782bc9-h658ejxn3ufkvr7a.js";
import {
    AS as Ke,
    JS as qe,
    KS as Je,
    QC as Ye,
    _S as Xe,
    _w as Ze,
    aS as Qe,
    gw as $e,
    iw as et,
    sS as tt,
    tw as nt,
    vS as rt,
    vw as it
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    c as at,
    r as ot,
    s as st
} from "./31cec8d8-ejzahhq8v425zkie.js";
import {
    c as ct,
    s as lt
} from "./dced7e81-jzt06wdzz118ufvf.js";
import {
    E as ut,
    U as dt,
    f as ft,
    p as pt,
    r as mt,
    s as ht,
    w as gt
} from "./bcae0416-byi4t2tc51t2kfdu.js";
import {
    h as _t,
    i as vt,
    m as yt,
    n as bt,
    r as xt,
    t as St
} from "./df59e297-cim8xjtcq0aw73x8.js";
import {
    t as Ct
} from "./4c0f1f8e-go23ccluwcn7b4ji.js";
import {
    a as wt,
    i as Tt,
    o as Et,
    r as Dt
} from "./373ddd65-o5ueta5lk6m8a4cj.js";
import {
    i as Ot,
    t as kt
} from "./6afb0137-o2ouy04t9aholizs.js";
import {
    a as At,
    o as jt,
    r as Mt,
    t as Nt
} from "./e74608d1-dt01dghzxq7a4jy8.js";
import {
    C as Pt,
    E as Ft,
    b as It,
    o as Lt
} from "./bcae0416-dl7awgppkbmf5xio.js";
import {
    n as Rt,
    t as zt
} from "./21d5ff49-jb0dwvqzgbxncuvu.js";
import {
    n as Bt,
    r as Vt,
    s as Ht
} from "./bcae0416-bihhppu35f7n70pb.js";
import {
    a as Ut,
    i as Wt,
    t as Gt
} from "./bcae0416-gz49ruxmmw6jg8xs.js";
import {
    n as Kt,
    r as qt,
    t as Jt
} from "./6cb574fa-mzjsdwlaqz7baeep.js";
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
} from "./e99f8e1a-jee6km72d5ubuexl.js";
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
} from "./e5d54aa7-g9zdukt6vyzc4epj.js";
import {
    n as Sn,
    t as Cn
} from "./1c4de3ec-n0c240y1whxcjkzx.js";
import {
    n as wn,
    r as Tn,
    t as En
} from "./60549c99-ljg58x2g4xar4kyp.js";
import {
    a as Dn,
    t as On
} from "./dccfc4ad-gfe9j6ogy0wsemhd.js";

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
    return k({
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
    return k(`bg-red-100 dark:bg-red-600`, Un({
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
    return k(Vn[`override-strong-color`], `text-green-600 dark:text-green-200 bg-green-100 dark:bg-green-600`, Un({
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
        Hn(), f()
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
        i(), K = class e {
            constructor(e, t) {
                l(this, `length`, void 0), l(this, `step`, void 0), this.length = e, this.step = t
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
        }, l(K, `none`, []), Zn = class {
            constructor(e, t, n, r, i, a) {
                l(this, `fromA`, void 0), l(this, `toA`, void 0), l(this, `fromB`, void 0), l(this, `toB`, void 0), l(this, `deleted`, void 0), l(this, `inserted`, void 0), this.fromA = e, this.toA = t, this.fromB = n, this.toB = r, this.deleted = i, this.inserted = a
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
        je(), Qn(), i(), $n = (e, t, n, r, i) => new Zn(e, t, n, r, e === t ? K.none : [new K(t - e, i)], n === r ? K.none : [new K(r - n, i)]), er = class e {
            constructor(e, t) {
                l(this, `doc`, void 0), l(this, `changes`, void 0), this.doc = e, this.changes = t
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
        x: le(t.x, e.left, e.right),
        y: le(t.y, e.top, e.bottom)
    }
}
var fr = e((() => {
        ue()
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
        Ke(), Ht(), Ut(), Pt(), dt(), ft(), R(), mr(), tn(), qt(), i(), hr = e => mt.theme({
            "&": {
                backgroundColor: e ? `var(--main-surface-primary)` : `var(--gray-100)`
            }
        }), X = class {
            constructor(e, t, n, r) {
                l(this, `pmView`, void 0), l(this, `getPos`, void 0), l(this, `node`, void 0), l(this, `updating`, !1), l(this, `cm`, void 0), l(this, `languageCompartment`, void 0), l(this, `themeCompartment`, void 0), l(this, `setLanguage`, async e => {
                    let t = await Jt(e);
                    t && this.cm.dispatch({
                        effects: this.languageCompartment.reconfigure(t)
                    })
                }), l(this, `setTheme`, e => {
                    let t = [hr(e), Ft(an(e))];
                    this.cm.dispatch({
                        effects: this.themeCompartment.reconfigure(t)
                    })
                }), l(this, `handleBackspace`, e => {
                    let {
                        selection: t
                    } = e.state;
                    if (!(t.main.empty && t.main.from === 0) || this.cm.state.doc.length > 0) return !1;
                    let n = Je(this.pmView.state, this.pmView.dispatch);
                    return this.pmView.focus(), n
                }), l(this, `handleShiftEnter`, () => {
                    let e = qe(this.pmView.state, this.pmView.dispatch);
                    return this.pmView.focus(), e
                }), l(this, `dispatch`, e => {
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
                }), l(this, `update`, e => {
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
                }), l(this, `asProseMirrorSelection`, e => {
                    let t = (this.getPos() ?? 0) + 2,
                        {
                            anchor: n,
                            head: r
                        } = this.cm.state.selection.main;
                    return W.create(e, n + t, r + t)
                }), l(this, `forwardSelection`, () => {
                    if (!this.cm.hasFocus) return;
                    let {
                        state: e
                    } = this.pmView, t = this.asProseMirrorSelection(e.doc);
                    t.eq(e.selection) || this.pmView.dispatch(e.tr.setSelection(t))
                }), l(this, `maybeEscape`, (e, t) => n => {
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
                }), l(this, `setSelection`, (e, t) => {
                    this.focus(), this.updating = !0, this.cm.dispatch({
                        selection: {
                            anchor: e,
                            head: t
                        }
                    }), this.updating = !1
                }), l(this, `focus`, () => {
                    this.cm.focus(), this.forwardSelection()
                }), l(this, `selectNode`, () => {
                    this.focus()
                }), l(this, `stopEvent`, () => !0), l(this, `destroy`, () => {
                    this.cm.destroy()
                }), l(this, `_setIsCodeBlockView`, () => {
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
                this.languageCompartment = new gt, this.themeCompartment = new gt;
                let a = Kt(e.attrs.lang),
                    o = ut.create({
                        doc: this.node.textContent,
                        extensions: [this.themeCompartment.of([hr(r), Ft(an(r))]), mt.theme({
                            "&": {
                                borderRadius: `4px`,
                                padding: `0.5rem`
                            },
                            "&.cm-focused": {
                                outline: `none`
                            }
                        }), pt.of([...i, ...Gt, ...Vt, Wt]), Lt(), Bt(), It(), ht(), this.languageCompartment.of(a == null ? [] : [a]), ut.changeFilter.of(e => (!e.docChanged && !this.updating && this.forwardSelection(), !0))]
                    });
                this.cm = new mt({
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
        }, l(X, `_getIsCodeBlockView`, e => e.dataset.isCodeBlockView === `true`)
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
        Ee(), dn(), pn(), i(), yr = class {
            constructor(e, t) {
                l(this, `rules`, void 0);
                let n = [].concat.apply([], e.syntaxExtensions().map(e => e.proseMirrorInputRules(t))),
                    r = n.filter(e => e instanceof gn);
                r.sort((e, t) => gn.priority(t) - gn.priority(e));
                let i = 0;
                this.rules = n.map(e => {
                    if (!(e instanceof gn)) return e;
                    let t = r[i];
                    return i += 1, t ?? e
                })
            }
            build() {
                let e = ze({
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
        E(), He(), Ae(), i(), xr = class {
            constructor(e, t) {
                l(this, `keymap`, void 0), this.keymap = new Map;
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
                for (let t in e) this.keymap.get(t) || this.keymap.set(t, []), m(this.keymap.get(t)).push(e[t])
            }
        }
    })),
    Cr, wr = e((() => {
        _n(), i(), Cr = class {
            constructor(e) {
                l(this, `nodeViews`, void 0), this.nodeViews = {};
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
        v(), Pe(), i(), Tr = class {
            constructor(e) {
                l(this, `nodes`, {}), l(this, `marks`, {});
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
                    r.addError(e, {
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
        de(), i(), Dr = class {
            constructor(e) {
                l(this, `extensionManager`, void 0), this.extensionManager = e
            }
            build() {
                let e = ye();
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
        Et(), i(), jr = class {
            constructor(e) {
                l(this, `markExtensionList`, void 0), l(this, `nodeExtensionList`, void 0), l(this, `otherExtensionList`, void 0), this.markExtensionList = new Map, this.nodeExtensionList = new Map, this.otherExtensionList = new Map;
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
        i(), Nr = class {
            constructor(e) {
                l(this, `extensionManager`, void 0), this.extensionManager = e
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
        T(), _e(), i(), Fr = class e {
            constructor(e, t) {
                l(this, `extensionManager`, void 0), l(this, `proseMirrorSchema`, void 0), this.extensionManager = e, this.proseMirrorSchema = t
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
                            if (!a.unistToProseMirrorTest(t) || I(t) && a.customDirectiveName() != null && a.customDirectiveName() !== t.name) continue;
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
                            return h(a.unistNodeToProseMirrorNodes({
                                node: t,
                                schema: this.proseMirrorSchema,
                                convertedChildren: o,
                                context: n,
                                attrs: u
                            })).filter(p)
                        }
                        return console.warn(`Couldn't find any way to convert unist node of type "` + t.type + `" to a ProseMirror node.`), []
                    };
                return i(t, n)
            }
        }
    })),
    Lr, Rr, zr = e((() => {
        P(), E(), br(), Sr(), wr(), Er(), Or(), Mr(), Pr(), Ir(), i(), Lr = 5, Rr = class {
            constructor(e = []) {
                l(this, `builtSchema`, void 0), l(this, `inputRulesBuilder`, void 0), l(this, `keymapBuilder`, void 0), l(this, `nodeViewBuilder`, void 0), l(this, `unistToProseMirrorConverter`, void 0), l(this, `proseMirrorToUnistConverter`, void 0), l(this, `unified`, void 0), l(this, `memoizedProsemirrorDocs`, new Map);
                let t = new jr(e);
                this.builtSchema = new Tr(t).build(), this.inputRulesBuilder = new yr(t, this.builtSchema), this.keymapBuilder = new xr(t, this.builtSchema), this.nodeViewBuilder = new Cr(t), this.unistToProseMirrorConverter = new Fr(t, this.builtSchema), this.proseMirrorToUnistConverter = new Nr(t), this.unified = new Dr(t).build()
            }
            parse(e) {
                try {
                    if (this.memoizedProsemirrorDocs.has(e)) return m(this.memoizedProsemirrorDocs.get(e));
                    let t = this.unistToProseMirrorConverter.convert(this.parseUnist(e));
                    if (this.memoizedProsemirrorDocs.set(e, t), this.memoizedProsemirrorDocs.size > Lr) {
                        let e = this.memoizedProsemirrorDocs.keys().next().value;
                        e && this.memoizedProsemirrorDocs.delete(e)
                    }
                    return t
                } catch (e) {
                    F.logError(`Failed to parse document`, e)
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
        P(), Ur(), en(), be(), S(), s(), Wr = (e, t, n, r) => {
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
        }, Gr = (e, t) => a(e.parentNodeNamesAtStart, t.parentNodeTypeNameStack), Kr = new WeakMap, qr = ({
            diff: e
        }) => {
            let t = new ve(pe.GetDiffedDoc, {
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
                sourceRangeToPmRange: f
            } = Xt(o);
            t.endBlock(`init_position_transformers`);
            let p = s,
                m = 0,
                h = 0,
                g = [],
                ee = (e, t, n) => {
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
                } = Xt(p);
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
                    start: E + m,
                    end: D + m
                }), A = !0;
                else if (!k && !C) A = !0;
                else {
                    let e = O.map(({
                        pmPos: e
                    }) => T[e + m]);
                    for (let t of w ?? []) {
                        let r = ee(n, t, e);
                        if (r == null) continue;
                        let i = r[0],
                            a = t.slice.size,
                            o = i < b.length;
                        o || (m += a), k && u.push({
                            editId: n,
                            start: E + m,
                            end: D + m
                        }), o && (m += a), A = !0;
                        break
                    }
                }
                if (!A && w != null) {
                    let e = Math.min(...y.map(({
                        pmPos: e
                    }) => e)) + m - 1;
                    for (let t of w) try {
                        p = p.replace(e, e, t.slice), l.push({
                            editId: n,
                            start: e,
                            end: e + t.slice.size
                        }), m += t.slice.size, k && u.push({
                            editId: n,
                            start: E + m,
                            end: D + m
                        }), A = !0;
                        break
                    } catch (e) {
                        g.push(e)
                    }
                }
                A ? F.logEvent(`Canvas Diff Edit Success`) : (F.logEvent(`Canvas Diff Edit Fail`), F.logError(`Failed to insert edit for diffed doc`, _(g), {
                    errors: g.map(fe),
                    replaceFromCandidates: y,
                    replaceToCandidates: b,
                    sliceFromCandidates: x,
                    sliceToCandidates: S
                }), h++)
            }
            return F.logDistribution(`Canvas Diff Edit Success Ratio`, (c.length - h) / c.length), F.logDistribution(`Canvas Diff Edit Fail Count`, h), F.logDistribution(`Canvas Diff Edit Success Count`, c.length - h), F.logDistribution(`Canvas Diff Edit Count`, c.length), t.endBlock(`get_diffed_doc`), {
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
    oi(), f(), R(), i(), ci = new z(`linkTooltip`), li = 36, ui = class {
        constructor(e) {
            l(this, `tooltipElement`, void 0), l(this, `button`, void 0), l(this, `onMouseLeave`, void 0), this.tooltipElement = document.createElement(`div`), this.tooltipElement.className = k(`absolute  py-1.5 px-2.5 bg-token-bg-primary border border-token-border-default rounded-lg text-xs z-50 items-center cursor-pointer shadow-md flex justify-center cursor-pointer`, `transform -translate-x-1/2`), this.button = document.createElement(`button`), this.button.textContent = `Open link`, this.button.className = k(`bg-none`, `border-none`, `text-token-text-primary `, `text-sm`), this.tooltipElement.appendChild(this.button), this.onMouseLeave = e, this.tooltipElement.addEventListener(`mouseleave`, e)
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
    P(), Ur(), ge(), R(), je(), pi = new z(`maxLength`), mi = (e, t, n) => new V({
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
            return i <= n ? !0 : (t && he(t, e), F.logEvent(`Canvas Prosemirror Max Length`, {
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
        it(), Dn(), bi = t(re()), ae(), xi = j(), i(), Si = class {
            constructor(e, t, n, r) {
                l(this, `dom`, void 0), l(this, `node`, void 0), l(this, `view`, void 0), l(this, `getPos`, void 0), l(this, `key`, void 0), l(this, `collectReactElement`, void 0), this.node = e, this.getPos = n, this.view = t, this.dom = document.createElement(`span`), this.dom.className = `content-reference-node`;
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
        Mt(), At(), i(), wi = class {
            constructor(e, t, n) {
                l(this, `dom`, void 0), l(this, `node`, void 0), l(this, `getPos`, void 0), l(this, `view`, void 0), this.getPos = n, this.view = t, this.node = e;
                let r = document.createElement(`span`);
                r.className = `hive-log-wrapper`, r.style.display = `inline-block`, r.style.userSelect = `none`;
                let i = document.createElement(`span`);
                i.className = `hive-log`, i.contentEditable = `false`, i.setAttribute(`data-type`, `hive-log`);
                let a = Number.parseInt(String(e.attrs.timestamp), 10);
                i.setAttribute(`data-timestamp`, String(e.attrs.timestamp ?? ``)), i.textContent = Number.isFinite(a) ? Nt(a) : ``;
                let o = e => {
                    e.preventDefault(), e.stopPropagation()
                };
                r.addEventListener(`mousedown`, o), i.addEventListener(`mousedown`, o), i.addEventListener(`click`, e => {
                    if (e.preventDefault(), !Number.isFinite(a)) return;
                    let {
                        openSidebar: t,
                        setCurrentTime: n
                    } = jt.getState();
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
        gr(), P(), vr(), Yr(), sn(), Qr(), ln(), yn(), on(), it(), Fn(), Qe(), ei(), di(), hi(), Bn(), Xn(), yt(), sr(), lt(), ge(), Xe(), yi(), Ci(), u(), Ot(), Ti(), Oi(), xe(), Ae(), Pe(), R(), U(), ji(), Ur(), Bi(), Wi = `ignoreDocChange`, Gi = ({
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
            isDisabled: f,
            prevState: p,
            contentReferences: m,
            shouldUseContentReferencePlugin: h
        }) => {
            let g = Z(),
                ee = g.schema(),
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
            }) : v = g.parse(_);
            let x = o ? _r(v, o) : Ui(v),
                S = () => {
                    let e = p?.plugins.find(e => e.spec.key === Ye().spec.key);
                    return e == null || p == null ? Ye() : Ye({}, e.getState(p))
                },
                C = e => {
                    let t = p?.plugins.find(e => e.spec.key === Pi().spec.key);
                    return Pi(e, p && t?.getState(p))
                };
            return Se.create({
                doc: v,
                schema: ee,
                selection: x,
                plugins: [...h ? [$e(m)] : [], mi(e, t, a), g.inputRulesPlugin(), g.keymapPlugin(), Me({
                    "Mod-s": () => (l(), !0),
                    "Mod-z": et,
                    "Mod-shift-z": nt,
                    "Mod-y": nt
                }), Ai, $r(), Ei(), We(), S(), Zr(s, c), cn(r ?? []), ...i ? [Yn(y, b)] : [], C(d), Nn(new Set(u ?? [])), Rn(e, f), si(), ...or()]
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
            onChange: l,
            onUpdate: u,
            onSave: d,
            safeUrls: f,
            modelCursor: p,
            selection: m,
            isDisabled: h,
            diff: g,
            prevState: ee,
            contentReferences: _,
            collectReactElement: v
        }, y = !1) => {
            let b = tt(),
                x = Gi({
                    intl: t,
                    toaster: n,
                    comments: r,
                    value: i,
                    maxLength: a,
                    onBlur: o,
                    onFocus: s,
                    onSave: d,
                    safeUrls: f,
                    modelCursor: p,
                    selection: m,
                    isDisabled: h,
                    diff: g,
                    prevState: ee,
                    contentReferences: _,
                    collectReactElement: v,
                    shouldUseContentReferencePlugin: b
                });
            u(x);
            let S = e => {
                    let t = T.state.apply(e);
                    if (T.updateState(t), u(t), !e.docChanged || Hi(e)) return;
                    let n = rr(t);
                    if (!n) return;
                    let {
                        doc: r
                    } = t, {
                        changeset: i
                    } = n;
                    l?.({
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
                C = Z(),
                w = {
                    ...C.nodeViews(),
                    ...b ? {
                        [c]: (e, t, n) => new Si(e, t, n, v)
                    } : {},
                    [kt]: (e, t, n) => new wi(e, t, n),
                    ...g == null ? {
                        [un]: (e, t, n) => new X(e, t, n, y)
                    } : {}
                },
                T = new ke({
                    mount: e
                }, {
                    state: x,
                    editable: () => !h,
                    dispatchTransaction: S,
                    nodeViews: w,
                    ...b ? {
                        handleDOMEvents: {
                            copy: (e, t) => gi(e, t)
                        }
                    } : {},
                    handlePaste(e, r) {
                        let i;
                        if (b && (i = r.clipboardData?.getData(`application/x-prosemirror`)), i ||= r.clipboardData?.getData(`text/plain`), i == null) return !1;
                        F.logEvent(`Canvas Prosemirror Paste`, {
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
                        return rt(e, u, b), !0
                    }
                });
            return {
                view: T,
                pmu: C
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
    O(), ln(), Fn(), Bn(), Xn(), sr(), lr(), at(), ur(), ge(), fr(), Xe(), w(), b(), te(), C(), ne(), D(), f(), R(), Q = t(N()), M(), ta = t(Ct()), Xi(), vt(), on(), Bi(), $i(), $ = j(), na = ({
        editorRef: e,
        wrapperClassName: t,
        transparentBackground: r = !1,
        comments: i,
        commentingOn: a,
        diff: s,
        paddingBottom: c,
        hoveredCommentId: l,
        focusedCommentId: u,
        hoveredEditId: f,
        rejectedEdits: p,
        showChanges: m,
        isDisabled: h = !1,
        value: _,
        onBlur: v,
        onFocus: b,
        onChange: S,
        onMouseLeave: C,
        onSave: w,
        safeUrls: T,
        children: E,
        width: D,
        modelCursor: O,
        shouldResetSelection: te = !1,
        contentReferences: ne
    }) => {
        let j = se(),
            re = g(),
            ie = (0, Q.useRef)(null),
            M = (0, Q.useRef)(null),
            [N, ae] = (0, Q.useState)(null),
            oe = ee(),
            ce = d(),
            [{
                width: le
            }, ue] = (0, ta.default)(),
            de = (0, Q.useRef)(v);
        de.current = v;
        let P = (0, Q.useRef)(b);
        P.current = b;
        let F = y()?.planType ?? o.GUEST,
            I = x(`1958014328`) ? 1e7 : me(F),
            fe = (0, Q.useRef)(S);
        fe.current = S;
        let pe = (0, Q.useRef)(w);
        pe.current = w;
        let L = tt(),
            [he, ge] = (0, Q.useState)(() => new Map),
            _e = (0, Q.useCallback)((e, t) => {
                ge(n => {
                    let r = new Map(n);
                    return t == null ? r.delete(e) : r.set(e, t), r
                })
            }, []),
            ve = (0, Q.useCallback)((e = _) => Gi({
                intl: j,
                toaster: re,
                comments: i,
                diff: s,
                value: e,
                selection: te ? void 0 : M.current?.state.selection,
                onBlur: e => de.current?.(e),
                onFocus: e => P.current?.(e),
                onSave: () => pe.current?.(),
                modelCursor: O,
                isDisabled: h,
                safeUrls: T,
                prevState: N,
                contentReferences: ne,
                collectReactElement: _e,
                shouldUseContentReferencePlugin: L,
                maxLength: I
            }), [j, re, i, s, _, te, O, h, T, N, ne, _e, L, I]),
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
        })), A(() => {
            let {
                current: e
            } = ie;
            if (!e) return;
            let {
                view: t
            } = Ji(e, {
                intl: j,
                toaster: re,
                comments: i,
                diff: s,
                value: _,
                onBlur: e => de.current?.(e),
                onFocus: e => P.current?.(e),
                onChange: e => fe.current?.(e),
                onUpdate: ae,
                onSave: () => pe.current?.(),
                isDisabled: h,
                safeUrls: T,
                prevState: N,
                contentReferences: ne,
                collectReactElement: _e,
                shouldUseContentReferencePlugin: L,
                maxLength: I
            }, oe);
            return M.current = t, () => {
                t?.destroy()
            }
        }, [s, I]), (0, Q.useEffect)(() => {
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
            comments: i,
            commentingOn: a,
            hoveredCommentId: l,
            focusedCommentId: u
        }), M, [i, l, u, a]), J(e => e.setMeta(qn, {
            hoveredEditId: f,
            rejectedEdits: p ?? new Set
        }), M, [f, p]), J(e => jn(e, new Set(T ?? [])), M, [T]);
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
                        onMouseLeave: C,
                        id: Y.PROSEMIRROR_EDITOR_CONTAINER,
                        style: {
                            paddingBottom: c
                        },
                        children: [(0, $.jsx)(`div`, {
                            ref: n(ie, ue),
                            className: k(Qi.main, st.composer, `markdown prose dark:prose-invert contain-inline-size focus:outline-hidden`, r ? `bg-transparent` : `bg-[var(--canvas-bg,var(--bg-primary))]`),
                            style: {
                                width: D
                            }
                        }), xe, L ? Array.from(he.values()) : null]
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
//# sourceMappingURL=ed61b531-fbgnnamicn18kua8.js.map
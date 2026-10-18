import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    O$ as t,
    XJ as n,
    ZJ as r,
    d8 as i,
    k$ as a,
    u8 as o
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    At as s,
    Et as c,
    H as l,
    Tt as u,
    V as d,
    W as f,
    Yt as p,
    zt as m
} from "./82782bc9-h658ejxn3ufkvr7a.js";
import {
    c as ee,
    i as te
} from "./31cec8d8-ejzahhq8v425zkie.js";
import {
    c as ne,
    d as h,
    f as g,
    i as _,
    l as v,
    n as y,
    s as b,
    t as x,
    u as S
} from "./dced7e81-jzt06wdzz118ufvf.js";
import {
    v as C,
    y as w
} from "./df59e297-cim8xjtcq0aw73x8.js";
import {
    C as T,
    j as E,
    k as re,
    t as D
} from "./bcae0416-dl7awgppkbmf5xio.js";
import {
    g as ie,
    h as O,
    n as ae,
    t as oe
} from "./4813494d-lhofof2pws9e8to7.js";
var k, A, j, M = e((() => {
    T(), re(), k = D.define([{
        tag: E.variableName,
        color: `white`
    }, {
        tag: E.comment,
        color: `rgb(255 255 255 / 50%)`
    }, {
        tag: E.meta,
        color: `rgb(255 255 255 / 60%)`
    }, {
        tag: [E.typeName],
        color: `#e9950c`
    }, {
        tag: [E.keyword, E.literal],
        color: `#2e95d3`
    }, {
        tag: [E.string, E.special(E.string), E.regexp],
        color: `#00a67d`
    }, {
        tag: [E.number, E.bool, E.atom],
        color: `#df3079`
    }, {
        tag: [E.propertyName, E.attributeName],
        color: `#df3079`
    }, {
        tag: [E.className, E.labelName],
        color: `#f22c3d`
    }, {
        tag: E.emphasis,
        fontStyle: `italic`
    }, {
        tag: E.strong,
        fontWeight: `bold`
    }, {
        tag: E.link,
        textDecoration: `underline`
    }]), A = D.define([{
        tag: [E.comment, E.quote],
        color: `#a0a1a7`,
        fontStyle: `italic`
    }, {
        tag: E.meta,
        color: `#a0a1a7`
    }, {
        tag: [E.typeName],
        color: `#c18401`
    }, {
        tag: [E.keyword, E.literal],
        color: `#a626a4`
    }, {
        tag: [E.string, E.special(E.string), E.regexp],
        color: `#50a14f`
    }, {
        tag: [E.number, E.bool, E.atom],
        color: `#986801`
    }, {
        tag: [E.propertyName, E.attributeName],
        color: `#986801`
    }, {
        tag: [E.variableName],
        color: `black`
    }, {
        tag: [E.labelName, E.className],
        color: `#4078f2`
    }, {
        tag: E.emphasis,
        fontStyle: `italic`
    }, {
        tag: E.strong,
        fontWeight: `bold`
    }, {
        tag: E.link,
        textDecoration: `underline`
    }]), j = e => e ? k : A
}));

function N(e) {
    return e.nodeSize - 2
}

function P(e, t) {
    return t >= 0 && t <= N(e)
}
var F = e((() => {})),
    I, L, R, z, B, V, H, U, W = e((() => {
        ae(), ie(), w(), t(), n(), I = (e, t) => {
            if (!t) return !1;
            let [n, r] = t;
            return e >= n && e < r
        }, L = (e, t) => e.pmPos - t.pmPos, R = (e, t) => {
            let n = t[t.length - 1].sourcePos;
            return Math.min(Math.max(e, 0), n)
        }, z = (e, t) => {
            let n = a(t)?.sourcePos ?? 0;
            return Math.min(Math.max(e, 0), n)
        }, B = ({
            positions: e,
            sourcePos: t,
            sourceEndPos: n
        }) => {
            let r = [];
            for (let i = 0; i < e.length; i++) {
                let a = e[i],
                    {
                        sourcePos: o,
                        leafSourceRange: s,
                        isClose: c = !1
                    } = a;
                if (n != null && o > n) break;
                let l = e[i + 1] ?? null,
                    u = n => {
                        let i = e[n];
                        if (i == null) return n;
                        let a = e[n + 1],
                            {
                                leafSourceRange: o
                            } = i;
                        for (; i.nodeTypeName !== O.proseMirrorNodeName() && !i.isClose && a != null && !I(t, o);) r.push(a), i = a, a = e[n + 2], o = i.leafSourceRange, n++;
                        return n
                    };
                if (o === t && !c || I(t, s)) r.push(a), i = u(i);
                else if (o <= t && (l?.sourcePos ?? 1 / 0) >= t) {
                    let n = i + 1,
                        s = [];
                    for (; e[n]?.isClose;) s.push(n), n++;
                    if (e[n]) {
                        let {
                            sourcePos: t
                        } = e[n];
                        do r.push(e[n]); while (e[++n].sourcePos === t);
                        n = u(n - 1)
                    } else {
                        (o === t || c) && r.push(a);
                        for (let t of s) r.push(e[t])
                    }
                    i = n
                }
            }
            return r.sort(L)
        }, V = ({
            positions: e,
            sourcePos: t
        }) => {
            let n = [],
                r = e => {
                    e && n.push(e)
                };
            for (let n = 0; n < e.length; n++) {
                let i = e[n],
                    {
                        sourcePos: a
                    } = i;
                if (t == null || a > t) break;
                let o = e[n - 1] ?? null,
                    s = e[n + 1] ?? null,
                    c = t > a && t < (s?.sourcePos ?? -1),
                    l = i.nodeTypeName === O.proseMirrorNodeName();
                if (a === t || c && !l) {
                    if (i.isClose && !o?.isClose && i.nodeTypeName === o?.nodeTypeName || !i.isClose && s.isClose && i.nodeTypeName === s.nodeTypeName || i.isClose && o?.isClose || !i.isClose && o != null && o?.nodeTypeName !== O.proseMirrorNodeName()) {
                        r(o);
                        let t = n - 2,
                            i = e[t];
                        for (; t >= 0 && i.isClose;) r(i), i = e[--t]
                    }
                    let a = n,
                        c = i,
                        l = c;
                    do r(c), l = c, c = e[++a]; while (c?.sourcePos === t || c?.depth < l?.depth);
                    break
                } else if (c && l) {
                    let t = n + 1,
                        i = e[t];
                    for (; i?.isClose;) r(i), i = e[++t];
                    break
                }
            }
            return n.sort(L)
        }, H = e => {
            let t = new Map;
            e.descendants((n, r) => {
                let i = C(n);
                if (!i) return;
                let {
                    start: a,
                    end: o
                } = i, s = n.type.name, {
                    depth: c
                } = e.resolve(r);
                if (t.set(r, {
                        pmPos: r,
                        sourcePos: a,
                        leafSourceRange: n.isBlock ? void 0 : [a, o],
                        depth: c,
                        nodeTypeName: s,
                        isClose: !1,
                        parentNodeTypeNameStack: []
                    }), n.isBlock) {
                    let i = r + n.nodeSize - 1;
                    t.set(i, {
                        pmPos: i,
                        sourcePos: o,
                        depth: e.resolve(i).depth,
                        nodeTypeName: s,
                        isClose: !0,
                        parentNodeTypeNameStack: []
                    })
                }
                if (n.isText)
                    for (let e = 0; e < (n.text?.length ?? 0); e++) {
                        let n = r + e;
                        t.set(n, {
                            pmPos: n,
                            sourcePos: a + e,
                            depth: c,
                            nodeTypeName: s,
                            isClose: !1,
                            parentNodeTypeNameStack: []
                        })
                    }
            }), t.set(e.content.size, {
                pmPos: e.content.size,
                nodeTypeName: e.type.name,
                depth: 0,
                isClose: !0,
                sourcePos: C(e)?.end ?? 0,
                parentNodeTypeNameStack: []
            });
            let n = Array.from(t.entries()).sort(([e], [t]) => e - t).map(([, e]) => e),
                r = [oe.proseMirrorNodeName()];
            for (let e of n) e.isClose ? (e.parentNodeTypeNameStack = r.concat(), r.pop()) : (e.parentNodeTypeNameStack = r.concat(), e.nodeTypeName !== O.proseMirrorNodeName() && a(r) !== e.nodeTypeName && r.push(e.nodeTypeName));
            return {
                positions: n,
                pmRangeToSourceRange: ({
                    start: e,
                    end: t
                }) => ({
                    start: n[Math.max(e, 0)].sourcePos,
                    end: n[Math.min(t, n.length - 1)].sourcePos
                }),
                sourceStartToPmPos: e => B({
                    sourcePos: R(e, n),
                    positions: n,
                    sourceEndPos: null
                }),
                sourceEndToPmPos: e => V({
                    sourcePos: z(e, n),
                    positions: n
                }),
                sourceRangeToPmRange: e => {
                    let {
                        start: t,
                        end: r
                    } = e, i = z(r, n);
                    return {
                        start: B({
                            sourcePos: R(t, n),
                            sourceEndPos: i,
                            positions: n
                        }),
                        end: V({
                            sourcePos: i,
                            positions: n
                        })
                    }
                }
            }
        }, U = r(H)
    }));

function G(e, t) {
    return t ? e.getState(t) ?? null : null
}
var K = e((() => {})),
    q, J = e((() => {
        q = (e, t, n) => {
            let r = n === `min` ? 0 : t.length - 1;
            for (let i = r; n === `min` ? i < t.length : i >= 0; n === `min` ? i++ : i--) {
                let {
                    sourcePos: r,
                    pmPos: a
                } = t[i];
                if (r === e) return a;
                if (n === `min` && r > e || n === `max` && r < e) return n === `min` ? t[i - 1]?.pmPos ?? a : a
            }
            return null
        }
    }));

function se(e, t) {
    let n = ue(e);
    if (n.length === 0) return t;
    let r = t;
    return n.forEach(e => {
        r = ce(e, r)
    }), r
}

function ce(e, t) {
    return h(t, {
        start: e.from,
        end: e.to
    }, le(e))
}

function le(e) {
    return e.slice.size - (e.to - e.from)
}

function ue(e) {
    return e.steps.filter(e => e instanceof m)
}
var Y = e((() => {
    g(), p()
}));

function X(e, t) {
    let {
        sourceRangeToPmRange: n
    } = U(e), r = t.map(({
        id: e,
        at: t
    }) => {
        let {
            start: r,
            end: i
        } = n(t), a = q(t.start, r, `max`), o = q(t.end, i, `min`);
        return o == null || a == null ? null : [e, {
            start: a,
            end: o
        }]
    }).filter(i);
    return new Map(r)
}

function de(e, t) {
    let {
        type: n
    } = t;
    if (n === x.SELECTION) {
        let {
            from: e,
            to: n
        } = t;
        return [e, n]
    }
    let {
        pos: r
    } = t;
    return [r, r + (e.nodeAt(r)?.nodeSize ?? 0)]
}
var Z, Q, $, fe = e((() => {
    o(), J(), W(), Y(), S(), b(), _(), ee(), s(), f(), Z = new c(`comments`), Q = (e, t, n = null, r = null) => {
        let i = [],
            a = Array.from(t.entries()).reverse(),
            o = new Map(e.map(e => [e.id, e]));
        for (let [e, t] of a) {
            let a = o.get(e),
                s = v({
                    isHovered: n === e,
                    isFocused: r === e,
                    isCode: !1,
                    diffStatus: a?.diffStatus
                });
            i.push(d.inline(t.start, t.end, {
                class: s,
                "data-comment-id": e,
                nodeName: `span`
            }))
        }
        return i
    }, $ = e => new u({
        key: Z,
        state: {
            init: (t, {
                doc: n
            }) => {
                let r = X(n, e);
                return {
                    comments: e,
                    commentingOn: null,
                    hoveredOnBlock: null,
                    hoveredCommentId: null,
                    focusedCommentId: null,
                    decorations: Q(e, r),
                    positions: r
                }
            },
            apply: (e, t) => {
                let n = e.getMeta(Z) ?? {},
                    r = n.comments,
                    i = r ?? t.comments,
                    a = r == null ? t.positions : X(e.doc, i),
                    o = n.commentingOn;
                o === void 0 && (o = t.commentingOn);
                let s = n.hoveredCommentId;
                s === void 0 && (s = t.hoveredCommentId);
                let c = n.focusedCommentId;
                c === void 0 && (c = t.focusedCommentId);
                let l = se(e, a),
                    u = ne(i, l);
                return {
                    comments: u,
                    commentingOn: o,
                    hoveredCommentId: s,
                    focusedCommentId: c,
                    decorations: Q(u, l, s, c),
                    positions: l
                }
            }
        },
        props: {
            handleClickOn: (e, t, n, r, i) => {
                let {
                    target: a
                } = i;
                if (a instanceof HTMLElement) {
                    let {
                        commentId: e
                    } = a.dataset;
                    if (!e) return;
                    y.focusComment(e)
                }
            },
            handleDOMEvents: {
                mouseover(e, t) {
                    let {
                        target: n
                    } = t;
                    if (n instanceof HTMLElement) {
                        let {
                            commentId: e
                        } = n.dataset;
                        e ? y.mouseEnterComment(e) : y.mouseLeaveComment()
                    }
                }
            },
            decorations(e) {
                let t = this.getState(e);
                if (!t) return l.empty;
                let {
                    commentingOn: n,
                    decorations: r
                } = t, {
                    doc: i
                } = e;
                if (n) {
                    let [e, t] = de(i, n);
                    e != null && t != null && r.push(d.inline(e, t, {
                        class: te.document
                    }, {
                        comment: {
                            pattern: n
                        }
                    }))
                }
                return l.create(i, r.concat())
            }
        }
    })
}));
export {
    J as a, U as c, P as d, N as f, q as i, W as l, M as m, Z as n, G as o, j as p, fe as r, K as s, $ as t, F as u
};
//# sourceMappingURL=e99f8e1a-jee6km72d5ubuexl.js.map
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ezn as t,
    Tzn as n
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    At as r,
    Et as i,
    Ft as a,
    Tt as o,
    Yt as s
} from "./82782bc9-mb60yg1xlggwvqri.js";

function c(e, t) {
    let n;
    return e.forEach((e, r) => {
        if (e.selection && t-- == 0) return n = r, !1
    }), e.slice(n)
}

function l(e, t, n, r) {
    let i = n.getMeta(w),
        a;
    if (i) return i.historyState;
    n.getMeta(T) && (e = new b(e.done, e.undone, null, 0, -1));
    let o = n.getMeta(`appendedTransaction`);
    if (n.steps.length == 0) return e;
    if (o && o.getMeta(w)) return o.getMeta(w).redo ? new b(e.done.addTransform(n, void 0, r, m(t)), e.undone, d(n.mapping.maps), e.prevTime, e.prevComposition) : new b(e.done, e.undone.addTransform(n, void 0, r, m(t)), null, e.prevTime, e.prevComposition);
    if (n.getMeta(`addToHistory`) !== !1 && !(o && o.getMeta(`addToHistory`) === !1)) {
        let i = n.getMeta(`composition`),
            a = e.prevTime == 0 || !o && e.prevComposition != i && (e.prevTime < (n.time || 0) - r.newGroupDelay || !u(n, e.prevRanges)),
            s = o ? f(e.prevRanges, n.mapping) : d(n.mapping.maps);
        return new b(e.done.addTransform(n, a ? t.selection.getBookmark() : void 0, r, m(t)), v.empty, s, n.time, i ?? e.prevComposition)
    } else if (a = n.getMeta(`rebased`)) return new b(e.done.rebased(n, a), e.undone.rebased(n, a), f(e.prevRanges, n.mapping), e.prevTime, e.prevComposition);
    else return new b(e.done.addMaps(n.mapping.maps), e.undone.addMaps(n.mapping.maps), f(e.prevRanges, n.mapping), e.prevTime, e.prevComposition)
}

function u(e, t) {
    if (!t) return !1;
    if (!e.docChanged) return !0;
    let n = !1;
    return e.mapping.maps[0].forEach((e, r) => {
        for (let i = 0; i < t.length; i += 2) e <= t[i + 1] && r >= t[i] && (n = !0)
    }), n
}

function d(e) {
    let t = [];
    for (let n = e.length - 1; n >= 0 && t.length == 0; n--) e[n].forEach((e, n, r, i) => t.push(r, i));
    return t
}

function f(e, t) {
    if (!e) return null;
    let n = [];
    for (let r = 0; r < e.length; r += 2) {
        let i = t.map(e[r], 1),
            a = t.map(e[r + 1], -1);
        i <= a && n.push(i, a)
    }
    return n
}

function p(e, t, n) {
    let r = m(t),
        i = w.get(t).spec.config,
        a = (n ? e.undone : e.done).popEvent(t, r);
    if (!a) return null;
    let o = a.selection.resolve(a.transform.doc),
        s = (n ? e.done : e.undone).addTransform(a.transform, t.selection.getBookmark(), i, r),
        c = new b(n ? s : a.remaining, n ? a.remaining : s, null, 0, -1);
    return a.transform.setSelection(o).setMeta(w, {
        redo: n,
        historyState: c
    })
}

function m(e) {
    let t = e.plugins;
    if (C != t) {
        S = !1, C = t;
        for (let e = 0; e < t.length; e++)
            if (t[e].spec.historyPreserveItems) {
                S = !0;
                break
            }
    }
    return S
}

function h(e = {}) {
    return e = {
        depth: e.depth || 100,
        newGroupDelay: e.newGroupDelay || 500
    }, new o({
        key: w,
        state: {
            init() {
                return new b(v.empty, v.empty, null, 0, -1)
            },
            apply(t, n, r) {
                return l(n, r, t, e)
            }
        },
        config: e,
        props: {
            handleDOMEvents: {
                beforeinput(e, t) {
                    let n = t.inputType,
                        r = n == `historyUndo` ? E : n == `historyRedo` ? D : null;
                    return r ? (t.preventDefault(), r(e.state, e.dispatch)) : !1
                }
            }
        }
    })
}

function g(e, t) {
    return (n, r) => {
        let i = w.getState(n);
        if (!i || (e ? i.undone : i.done).eventCount == 0) return !1;
        if (r) {
            let a = p(i, n, e);
            a && r(t ? a.scrollIntoView() : a)
        }
        return !0
    }
}
var _, v, y, b, x, S, C, w, T, E, D, O = e((() => {
    t(), s(), r(), _ = 500, v = class e {
        constructor(e, t) {
            this.items = e, this.eventCount = t
        }
        popEvent(t, n) {
            if (this.eventCount == 0) return null;
            let r = this.items.length;
            for (;; r--)
                if (this.items.get(r - 1).selection) {
                    --r;
                    break
                } let i, a;
            n && (i = this.remapping(r, this.items.length), a = i.maps.length);
            let o = t.tr,
                s, c, l = [],
                u = [];
            return this.items.forEach((t, n) => {
                if (!t.step) {
                    i || (i = this.remapping(r, n + 1), a = i.maps.length), a--, u.push(t);
                    return
                }
                if (i) {
                    u.push(new y(t.map));
                    let e = t.step.map(i.slice(a)),
                        n;
                    e && o.maybeStep(e).doc && (n = o.mapping.maps[o.mapping.maps.length - 1], l.push(new y(n, void 0, void 0, l.length + u.length))), a--, n && i.appendMap(n, a)
                } else o.maybeStep(t.step);
                if (t.selection) return s = i ? t.selection.map(i.slice(a)) : t.selection, c = new e(this.items.slice(0, r).append(u.reverse().concat(l)), this.eventCount - 1), !1
            }, this.items.length, 0), {
                remaining: c,
                transform: o,
                selection: s
            }
        }
        addTransform(t, n, r, i) {
            let a = [],
                o = this.eventCount,
                s = this.items,
                l = !i && s.length ? s.get(s.length - 1) : null;
            for (let e = 0; e < t.steps.length; e++) {
                let r = t.steps[e].invert(t.docs[e]),
                    c = new y(t.mapping.maps[e], r, n),
                    u;
                (u = l && l.merge(c)) && (c = u, e ? a.pop() : s = s.slice(0, s.length - 1)), a.push(c), n &&= (o++, void 0), i || (l = c)
            }
            let u = o - r.depth;
            return u > x && (s = c(s, u), o -= u), new e(s.append(a), o)
        }
        remapping(e, t) {
            let n = new a;
            return this.items.forEach((t, r) => {
                let i = t.mirrorOffset != null && r - t.mirrorOffset >= e ? n.maps.length - t.mirrorOffset : void 0;
                n.appendMap(t.map, i)
            }, e, t), n
        }
        addMaps(t) {
            return this.eventCount == 0 ? this : new e(this.items.append(t.map(e => new y(e))), this.eventCount)
        }
        rebased(t, n) {
            if (!this.eventCount) return this;
            let r = [],
                i = Math.max(0, this.items.length - n),
                a = t.mapping,
                o = t.steps.length,
                s = this.eventCount;
            this.items.forEach(e => {
                e.selection && s--
            }, i);
            let c = n;
            this.items.forEach(e => {
                let n = a.getMirror(--c);
                if (n == null) return;
                o = Math.min(o, n);
                let i = a.maps[n];
                if (e.step) {
                    let o = t.steps[n].invert(t.docs[n]),
                        l = e.selection && e.selection.map(a.slice(c + 1, n));
                    l && s++, r.push(new y(i, o, l))
                } else r.push(new y(i))
            }, i);
            let l = [];
            for (let e = n; e < o; e++) l.push(new y(a.maps[e]));
            let u = this.items.slice(0, i).append(l).append(r),
                d = new e(u, s);
            return d.emptyItemCount() > _ && (d = d.compress(this.items.length - r.length)), d
        }
        emptyItemCount() {
            let e = 0;
            return this.items.forEach(t => {
                t.step || e++
            }), e
        }
        compress(t = this.items.length) {
            let r = this.remapping(0, t),
                i = r.maps.length,
                a = [],
                o = 0;
            return this.items.forEach((e, n) => {
                if (n >= t) a.push(e), e.selection && o++;
                else if (e.step) {
                    let t = e.step.map(r.slice(i)),
                        n = t && t.getMap();
                    if (i--, n && r.appendMap(n, i), t) {
                        let s = e.selection && e.selection.map(r.slice(i));
                        s && o++;
                        let c = new y(n.invert(), t, s),
                            l, u = a.length - 1;
                        (l = a.length && a[u].merge(c)) ? a[u] = l: a.push(c)
                    }
                } else e.map && i--
            }, this.items.length, 0), new e(n.from(a.reverse()), o)
        }
    }, v.empty = new v(n.empty, 0), y = class e {
        constructor(e, t, n, r) {
            this.map = e, this.step = t, this.selection = n, this.mirrorOffset = r
        }
        merge(t) {
            if (this.step && t.step && !t.selection) {
                let n = t.step.merge(this.step);
                if (n) return new e(n.getMap().invert(), n, this.selection)
            }
        }
    }, b = class {
        constructor(e, t, n, r, i) {
            this.done = e, this.undone = t, this.prevRanges = n, this.prevTime = r, this.prevComposition = i
        }
    }, x = 20, S = !1, C = null, w = new i(`history`), T = new i(`closeHistory`), E = g(!1, !0), D = g(!0, !0)
}));
export {
    E as i, O as n, D as r, h as t
};
//# sourceMappingURL=bcae0416-gkzywzhfc8jtt8rd.js.map
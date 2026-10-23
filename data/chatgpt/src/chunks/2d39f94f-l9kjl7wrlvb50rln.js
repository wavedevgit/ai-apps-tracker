import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Jot as t,
    Yot as n
} from "./4813494d-mdvd4786a87166cc.js";
import {
    $t as r,
    At as i,
    Bt as a,
    Dt as o,
    Et as s,
    Ft as c,
    H as l,
    Ht as u,
    It as d,
    Lt as f,
    Mt as p,
    Nt as m,
    Pt as h,
    Rt as g,
    Tt as _,
    V as v,
    Vt as y,
    W as b,
    Yt as x,
    an as S,
    en as C,
    in as w,
    jt as T,
    kt as E,
    wt as D,
    zt as O
} from "./82782bc9-b4xbouzwkkyrfqq2.js";
import {
    NS as k,
    QS as A,
    aC as j,
    cw as M,
    rw as ee
} from "./8b34dbc2-lmwubajnld74ksfm.js";
import {
    a as N,
    r as P,
    s as te,
    t as F
} from "./ba2d71b9-ea8lty96qbke5feh.js";

function I(e, t, n) {
    let r = e instanceof c ? e.maps.slice(e.from, e.to) : e instanceof y ? [e] : null;
    if (r == null) return !1;
    let i = !1,
        a = !1;
    for (let o = 0; o < r.length; o++) {
        if (e instanceof c) {
            let r = e.getMirror(e.from + o);
            if (r != null && r > e.from + o && r < e.to) {
                let i = e.slice(e.from + o, r + 1).mapResult(t, n);
                if (i.deletedAcross) return !1;
                t = i.pos, o = r - e.from;
                continue
            }
        }
        let s = r[o],
            l = s.mapResult(t, n),
            u = !1,
            d = [];
        s.forEach((e, n) => {
            d.push({
                from: e,
                to: n
            }), e < n && t >= e && t <= n && (u = !0)
        });
        let f = d.some((e, n) => n > 0 && t >= d[n - 1].to && t <= e.from);
        if (u && !f && (i ||= l.deletedBefore, a ||= l.deletedAfter, l.deletedAcross || i && a)) return !1;
        t = l.pos
    }
    return !0
}
var L, R, z = e((() => {
        S(), x(), n(), L = class e extends a {
            constructor(e, n, r) {
                super(), t(this, `from`, void 0), t(this, `to`, void 0), t(this, `destination`, void 0), this.from = e, this.to = n, this.destination = r
            }
            apply(e) {
                if (![this.from, this.to, this.destination].every(Number.isInteger) || this.from < 0 || this.to > e.content.size || this.from >= this.to || this.destination < 0 || this.destination > e.content.size || this.destination >= this.from && this.destination <= this.to) return u.fail(`Invalid sibling move`);
                let t = e.resolve(this.from),
                    n = e.resolve(this.to),
                    r = e.resolve(this.destination);
                if (!t.sameParent(n) || !t.sameParent(r) || t.parent.inlineContent || t.textOffset !== 0 || n.textOffset !== 0 || r.textOffset !== 0) return u.fail(`Move requires complete siblings in one parent`);
                let i = e;
                for (let t of this.replacements(e)) {
                    let e = t.apply(i);
                    if (e.doc == null) return e;
                    i = e.doc
                }
                return u.ok(i)
            }
            getMap() {
                return new R(this.from, this.to, this.destination)
            }
            invert() {
                let t = this.to - this.from,
                    n = this.destination < this.from ? this.destination : this.destination - t;
                return new e(n, n + t, this.destination < this.from ? this.to : this.from)
            }
            map(t) {
                let n = t.mapResult(this.from, 1),
                    r = t.mapResult(this.to, -1),
                    i = t.mapResult(this.destination, this.destination < this.from ? 1 : -1);
                if (i.deletedAcross || n.pos >= r.pos || i.pos >= n.pos && i.pos <= r.pos) return null;
                if (n.deleted && r.deleted) {
                    let e = t.mapResult(this.from + 1, 1),
                        i = t.mapResult(this.to - 1, -1);
                    if (this.to - this.from < 2 || e.deletedAcross || i.deletedAcross || !I(t, this.from + 1, 1) || !I(t, this.to - 1, -1) || e.pos <= n.pos || e.pos >= r.pos || i.pos <= n.pos || i.pos >= r.pos) return null
                }
                return new e(n.pos, r.pos, i.pos)
            }
            replacements(e) {
                let t = this.destination < this.from ? this.destination : this.destination - (this.to - this.from);
                return [new O(this.from, this.to, w.empty), new O(t, t, e.slice(this.from, this.to))]
            }
            toJSON() {
                return {
                    stepType: `writingBlockMove`,
                    from: this.from,
                    to: this.to,
                    destination: this.destination
                }
            }
        }, R = class extends y {
            constructor(e, n, r) {
                super([Math.min(e, r), 0, 0]), t(this, `from`, void 0), t(this, `to`, void 0), t(this, `destination`, void 0), this.from = e, this.to = n, this.destination = r
            }
            map(e, t = 1) {
                let n = e;
                return this.forEach((r, i, a) => {
                    (e > r || e === r && t > 0) && (e < i || e === i && t < 0) && (n = a + e - r)
                }), n
            }
            mapResult(e, t = 1) {
                return y.empty.mapResult(this.map(e, t))
            }
            forEach(e) {
                let t = this.to - this.from;
                this.destination < this.from ? (e(this.destination, this.from, this.destination + t, this.to), e(this.from, this.to, this.destination, this.destination + t)) : (e(this.from, this.to, this.destination - t, this.destination), e(this.to, this.destination, this.from, this.destination - t))
            }
            invert() {
                return new L(this.from, this.to, this.destination).invert().getMap()
            }
        }
    })),
    B, V = e((() => {
        S(), x(), n(), B = class e extends a {
            constructor(e) {
                super(), t(this, `changes`, void 0), this.changes = e
            }
            apply(e) {
                let t = this.rowEdits(e);
                if (t == null) return u.fail(`Invalid table column replacement`);
                let n = t.table.content.content.slice();
                for (let {
                        index: e,
                        row: i,
                        from: a,
                        to: o,
                        change: s
                    }
                    of t.rows) {
                    let t = r.fromArray([...i.content.content.slice(0, a), ...s.slice.content.content, ...i.content.content.slice(o)]);
                    if (!i.type.validContent(t)) return u.fail(`Invalid table row content`);
                    n[e] = i.copy(t)
                }
                return u.fromReplace(e, t.position + 1, t.position + 1 + t.table.content.size, new w(r.fromArray(n), 0, 0))
            }
            getMap() {
                return new y(this.changes.flatMap(e => [e.from, e.to - e.from, e.slice.size]))
            }
            invert(t) {
                let n = this.rowEdits(t);
                if (n == null) throw RangeError(`Invalid table column inverse`);
                let i = 0;
                return new e(n.rows.map(({
                    row: e,
                    from: t,
                    to: n,
                    change: a
                }) => {
                    let o = a.from + i;
                    return i += a.slice.size - (a.to - a.from), new O(o, o + a.slice.size, new w(r.fromArray(e.content.content.slice(t, n)), 0, 0))
                }))
            }
            map(t) {
                let n = this.changes.flatMap(e => {
                    let n = e.map(t);
                    return n == null ? [] : [n]
                });
                return n.length === 0 ? null : new e(n)
            }
            toJSON() {
                return {
                    stepType: `writingBlockTableColumn`,
                    changes: this.changes.map(e => e.toJSON())
                }
            }
            rowEdits(e) {
                let t = this.changes[0];
                if (t == null || t.from < 0 || t.from > e.content.size) return null;
                let n = e.resolve(t.from),
                    r = n.depth - 1;
                if (n.parent.type.name !== `table_row` || r < 1) return null;
                let i = n.node(r);
                if (i.type.name !== `table`) return null;
                let a = n.before(r),
                    o = [],
                    s = 0;
                return i.forEach((e, t, n) => {
                    let r = this.changes[s],
                        i = a + t + 2,
                        c = i + e.content.size;
                    if (r == null || r.from < i || r.to > c || r.from > r.to || r.slice.openStart || r.slice.openEnd) return;
                    let l = r.from === c ? e.childCount : -1,
                        u = r.to === c ? e.childCount : -1;
                    e.forEach((e, t, n) => {
                        i + t === r.from && (l = n), i + t === r.to && (u = n)
                    }), !(l < 0 || u < 0) && (o.push({
                        index: n,
                        row: e,
                        from: l,
                        to: u,
                        change: r
                    }), s += 1)
                }), s === this.changes.length ? {
                    table: i,
                    position: a,
                    rows: o
                } : null
            }
        }
    })),
    H, ne, U, W, G, K, q, J, Y = e((() => {
        H = (e => (e.DOC = `doc`, e.PARAGRAPH = `paragraph`, e.HEADING = `heading`, e.BLOCKQUOTE = `blockquote`, e.LIST = `list`, e.BULLET_LIST = `bullet_list`, e.ORDERED_LIST = `ordered_list`, e.REGULAR_LIST_ITEM = `regular_list_item`, e.LIST_ITEM = `list_item`, e.TASK_LIST_ITEM = `task_list_item`, e.CODE_BLOCK = `code_block`, e.HORIZONTAL_RULE = `horizontal_rule`, e.HARD_BREAK = `hard_break`, e.WRITING_BLOCK_IMAGE = `writing_block_image`, e.TABLE = `table`, e.TABLE_ROW = `table_row`, e.TABLE_CELL = `table_cell`, e.TEXT = `text`, e))(H || {}), ne = (e => (e.STRONG = `strong`, e.BOLD = `bold`, e.EM = `em`, e.ITALIC = `italic`, e.CODE = `code`, e.STRIKETHROUGH = `strikethrough`, e.LINK = `link`, e))(ne || {}), U = (e => (e[e.BACKWARD = 0] = `BACKWARD`, e[e.FORWARD = 1] = `FORWARD`, e))(U || {}), W = (e => (e[e.TEXT = 0] = `TEXT`, e[e.SLICE = 1] = `SLICE`, e[e.PARAGRAPH_BREAK = 2] = `PARAGRAPH_BREAK`, e[e.LINE_BREAK = 3] = `LINE_BREAK`, e[e.EMPTY = 4] = `EMPTY`, e))(W || {}), G = (e => (e[e.REPLACE_RANGE = 0] = `REPLACE_RANGE`, e[e.SET_MARK = 1] = `SET_MARK`, e[e.SET_BLOCK_TYPE = 2] = `SET_BLOCK_TYPE`, e[e.SET_LIST = 3] = `SET_LIST`, e[e.INDENT = 4] = `INDENT`, e[e.SET_CHECKED = 5] = `SET_CHECKED`, e[e.SET_NODE_ATTRIBUTES = 6] = `SET_NODE_ATTRIBUTES`, e[e.INSERT_SLICE = 7] = `INSERT_SLICE`, e[e.REMOVE_NODE = 8] = `REMOVE_NODE`, e[e.REPLACE_AROUND = 9] = `REPLACE_AROUND`, e[e.PASTE = 10] = `PASTE`, e[e.INPUT = 11] = `INPUT`, e[e.SET_DOCUMENT_THEME = 12] = `SET_DOCUMENT_THEME`, e[e.UPSERT_LIVE_NOTE = 13] = `UPSERT_LIVE_NOTE`, e[e.REMOVE_LIVE_NOTE = 14] = `REMOVE_LIVE_NOTE`, e))(G || {}), K = (e => (e[e.APPLIED = 0] = `APPLIED`, e[e.NO_CHANGE = 1] = `NO_CHANGE`, e[e.REJECTED = 2] = `REJECTED`, e))(K || {}), q = (e => (e[e.EDITABLE = 0] = `EDITABLE`, e[e.UNSUPPORTED_SCHEMA = 1] = `UNSUPPORTED_SCHEMA`, e))(q || {}), J = (e => (e[e.LOCAL = 0] = `LOCAL`, e[e.REMOTE = 1] = `REMOTE`, e[e.HISTORY = 2] = `HISTORY`, e))(J || {})
    }));

function re(e) {
    let t = Object.fromEntries(Object.entries(e.attrs).filter(([e, t]) => t != null && !ue.has(e)));
    return e.type.name === H.ORDERED_LIST && (t.startingNumber ??= t.order, delete t.order), e.type.name === H.CODE_BLOCK && (t.lang ||= t.language, delete t.language), t
}

function ie(e) {
    let t = Object.values(ne).find(t => t === e.type.name);
    if (t == null) throw Error(`Unsupported collaborative document mark: ${e.type.name}`);
    let n = Object.fromEntries(Object.entries(e.attrs).filter(([, e]) => e != null));
    return {
        type: t,
        ...Object.keys(n).length === 0 ? {} : {
            attrs: n
        }
    }
}

function ae(e) {
    let t = Object.values(H).find(t => t === e.type.name);
    if (t == null) throw Error(`Unsupported collaborative document node: ${e.type.name}`);
    let n = re(e),
        r = [];
    e.forEach(e => {
        r.push(ae(e))
    });
    let i = e.type.name === `writing_block_image` ? [] : e.marks.filter(e => !X.has(e.type.name)).map(ie);
    if (!e.isText && i.length > 0) throw Error(`Collaborative document marks require text nodes`);
    return {
        type: t,
        ...Object.keys(n).length === 0 ? {} : {
            attrs: n
        },
        ...r.length === 0 ? {} : {
            content: r
        },
        ...i.length === 0 ? {} : {
            marks: i
        },
        ...e.isText ? {
            text: e.text ?? ``
        } : {}
    }
}

function oe(e) {
    let t = [];
    return e.content.forEach(e => {
        t.push(ae(e))
    }), {
        content: t,
        openStart: e.openStart,
        openEnd: e.openEnd
    }
}

function se(e, t) {
    return {
        anchor: {
            position: e,
            affinity: U.FORWARD
        },
        head: {
            position: t,
            affinity: U.FORWARD
        }
    }
}

function ce(e, t, n) {
    if (e instanceof L) return e.replacements(t).flatMap(e => ce(e, t, n));
    if (e instanceof B) return e.changes.toReversed().flatMap(e => ce(e, t, n));
    if (e instanceof O) return [{
        kind: G.REPLACE_RANGE,
        replaceRange: {
            range: se(e.from, e.to),
            replacement: {
                kind: W.SLICE,
                slice: oe(e.slice)
            },
            structure: e.toJSON().structure === !0
        }
    }];
    if (e instanceof g) return [{
        kind: G.REPLACE_AROUND,
        replaceAround: {
            range: se(e.from, e.to),
            gap: se(e.gapFrom, e.gapTo),
            slice: oe(e.slice),
            insert: e.insert,
            structure: e.toJSON().structure === !0
        }
    }];
    if (e instanceof T || e instanceof d) {
        if (X.has(e.mark.type.name)) return [];
        let n = ie(e.mark),
            r = [];
        return t.nodesBetween(e.from, e.to, (t, i, a) => {
            if (!t.isInline) return;
            let o = e instanceof d && e.mark.isInSet(t.marks),
                s = e instanceof T && t.isAtom && a?.type.allowsMarkType(e.mark.type) === !0 && !C.sameSet(t.marks, e.mark.addToSet(t.marks));
            if (!(!s && !o)) {
                if (!t.isText) {
                    if (t.type.name === `writing_block_image`) return;
                    throw Error(`Collaborative document marks require text nodes`)
                }
                r.push({
                    kind: G.SET_MARK,
                    setMark: {
                        range: se(Math.max(e.from, i), Math.min(e.to, i + t.nodeSize)),
                        mark: n,
                        enabled: s
                    }
                })
            }
        }), r
    }
    if (e instanceof m) {
        if (ue.has(e.attr)) return [];
        let t = n.nodeAt(e.pos);
        if (t == null || t.isText) throw Error(`Unsupported collaborative document attribute change`);
        return [{
            kind: G.SET_NODE_ATTRIBUTES,
            setNodeAttributes: {
                position: e.pos,
                attrs: re(t)
            }
        }]
    }
    if (e instanceof h && ue.has(e.attr) || (e instanceof p || e instanceof f) && X.has(e.mark.type.name)) return [];
    throw Error(`Unsupported collaborative document step`)
}

function le(e, t, n) {
    let r = e,
        i = [];
    for (let e of n) {
        let t = e.apply(r);
        if (t.doc == null) throw Error(`Collaborative document steps could not be replayed`);
        i.push(...ce(e, r, t.doc)), r = t.doc
    }
    if (!r.eq(t)) throw Error(`Collaborative document steps do not match the editor`);
    return t.descendants(e => {
        if (e.type.name === `writing_block_image` && e.marks.some(e => !X.has(e.type.name))) throw Error(`Collaborative document images cannot have marks`)
    }), i
}
var ue, X, de = e((() => {
    Y(), S(), x(), V(), z(), P(), ue = new Set([`start`, `end`, `isDarkMode`]), X = new Set([`startend`, `generate_suggestion`])
}));

function fe(e, t, n) {
    if (n.anchorPos !== n.caretPos || n.triggerPos !== n.caretPos || !e.state?.canEdit || !e.state.schemaCompatible) return null;
    let r = e.editor,
        i = e => t.state.schema.nodeFromJSON(ae(t.state.doc)).eq(e),
        a = r.snapshot();
    if (a.document == null || !i(t.state.schema.nodeFromJSON(a.document.ast))) return null;
    let {
        anchor: o,
        error: s
    } = r.createAnchor({
        baseRevision: a.revision,
        point: {
            position: n.caretPos,
            affinity: U.FORWARD
        }
    });
    if (s != null || o == null) return null;
    let c = () => {
            let e = r.snapshot(),
                n = r.resolveAnchor(o);
            if (n.error != null || n.point == null || n.revision.value !== e.revision.value || e.document == null) return null;
            let i = t.state.schema.nodeFromJSON(e.document.ast).resolve(n.point.position);
            return i.parent.isTextblock ? i : null
        },
        l = !1,
        u = e.subscribeToEditorChanges(() => {
            c() ?? (l = !0)
        });
    return {
        resolve() {
            if (l || t.isDestroyed || !t.editable || !e.state?.canEdit || !e.state.schemaCompatible || e.editor !== r) return null;
            let n = c();
            return n == null || !i(n.doc) ? null : {
                anchorPos: n.pos,
                caretPos: n.pos,
                triggerPos: n.pos,
                blockFrom: n.start(),
                blockTo: n.end()
            }
        },
        dispose() {
            l = !0, u()
        }
    }
}
var pe = e((() => {
    Y(), de()
}));

function me(e, t) {
    let n = new Map,
        r = () => e.state?.schemaCompatible === !0 && (e.state.canEdit || e.state.synchronized || e.state.optimistic),
        i = e => {
            let t = n.get(e);
            t != null && (t.timeout != null && clearTimeout(t.timeout), t.animation?.cancel(), n.delete(e))
        },
        a = (e, t) => {
            let n = e.label.isConnected ? getComputedStyle(e.label).opacity : null;
            e.animation?.cancel(), e.animation = null, e.isActive = t, e.label.setAttribute(`aria-hidden`, String(!t)), e.label.classList.toggle(ye, !t);
            let r = t ? `1` : `0`;
            if (n == null || n === r) return;
            let i = e.label.animate([{
                opacity: n
            }, {
                opacity: r
            }], {
                duration: 200,
                easing: `ease`
            });
            e.animation = i, i.onfinish = () => {
                e.animation === i && (e.animation = null)
            }
        },
        s = e => {
            e.isIdle || (e.timeout != null && clearTimeout(e.timeout), e.isActive || a(e, !0), e.timeout = setTimeout(() => {
                a(e, !1), e.timeout = null
            }, he))
        },
        c = (e, t) => {
            e.isIdle = t, e.element.style.opacity = t ? `0.5` : `1`
        },
        u = (e, t, r, i, o) => {
            let l = n.get(r);
            if (l != null) return l.element;
            let u = document.createElement(`span`);
            u.classList.add(`ProseMirror-yjs-cursor`), u.style.borderColor = t, u.style.transition = `opacity 200ms ease`;
            let d = document.createElement(`div`);
            d.setAttribute(`aria-hidden`, `false`), d.classList.add(ve), d.style.transition = `none`, d.style.backgroundColor = t, d.textContent = e.name, u.append(`⁠`, d, `⁠`);
            let f = {
                element: u,
                label: d,
                color: t,
                selectionKey: o,
                animation: null,
                isActive: !0,
                isIdle: i,
                timeout: null
            };
            return n.set(r, f), c(f, i), i && a(f, !1), s(f), u
        },
        d = a => {
            let d = e.participants;
            if (!r() || d == null) {
                if (e.state?.schemaCompatible === !1)
                    for (let e of n.keys()) i(e);
                return l.empty
            }
            let f = e.editor,
                p = f.presenceSnapshot(),
                m = [],
                h = new Map(d.map(e => [e.userId, e])),
                g = new Set;
            for (let {
                    clientId: e,
                    state: r
                }
                of p.clients) {
                let {
                    user: i,
                    cursor: l
                } = r;
                if (e.value === p.localClientId.value || i == null || l == null) continue;
                let d = i.userId == null ? null : h.get(i.userId);
                if (i.userId != null && d == null) continue;
                let _ = t?.(i) ?? i.color,
                    y = d?.isIdle ?? !1;
                if (d?.isSelf) {
                    let e = Date.now() - d.lastActivityAt * 1e3;
                    if (e >= _e) continue;
                    y = e >= ge
                }
                let b = f.resolveSelection(l).selection;
                if (b == null) continue;
                let {
                    anchor: x,
                    head: S
                } = b, C = a.doc.content.size, w = Math.min(x.position, S.position, C), T = Math.min(Math.max(x.position, S.position), C), E = Math.min(S.position, C), D = a.doc.resolve(E), O = E;
                D.parent.inlineContent || (O = o.findFrom(D, -1, !0)?.head ?? E), g.add(e.value);
                let k = `${l.anchor.bytes.join(`,`)}|${l.head.bytes.join(`,`)}`,
                    A = n.get(e.value);
                A != null && (c(A, y), A.label.textContent !== i.name && (A.label.textContent = i.name), A.color !== _ && (A.color = _, A.element.style.borderColor = _, A.label.style.backgroundColor = _), A.selectionKey !== k && (A.selectionKey = k, s(A))), m.push(v.widget(O, () => u(i, _, e.value, y, k), {
                    key: e.value,
                    side: 10
                })), w < T && m.push(v.inline(w, T, {
                    class: `ProseMirror-yjs-selection`,
                    style: `background-color: ${t==null?`${_}${y?`38`:`70`}`:`color-mix(in srgb, ${_} ${y?`22%`:`44%`}, transparent)`}`
                }, {
                    inclusiveEnd: !0,
                    inclusiveStart: !1
                }))
            }
            for (let e of n.keys()) g.has(e) || i(e);
            return l.create(a.doc, m)
        },
        f = t => {
            if (!r()) return;
            let n = e.editor,
                i = n.presenceSnapshot(),
                a = i.clients.find(({
                    clientId: e
                }) => e.value === i.localClientId.value)?.state;
            if (a?.user != null) {
                if (!t.hasFocus()) {
                    a.cursor != null && n.publishSelection({
                        baseRevision: n.snapshot().revision,
                        selection: void 0
                    });
                    return
                }
                n.publishSelection({
                    baseRevision: n.snapshot().revision,
                    selection: {
                        anchor: {
                            position: t.state.selection.anchor,
                            affinity: U.FORWARD
                        },
                        head: {
                            position: t.state.selection.head,
                            affinity: U.FORWARD
                        }
                    }
                })
            }
        };
    return [new _({
        key: Z,
        state: {
            init(e, t) {
                return d(t)
            },
            apply(e, t, n, r) {
                return e.getMeta(Z) ? d(r) : t.map(e.mapping, e.doc)
            }
        },
        props: {
            decorations(e) {
                return Z.getState(e)
            }
        },
        view(t) {
            let a = e.editor.snapshot().revision,
                o = !1,
                l = !1,
                u = () => {
                    for (let {
                            element: e,
                            label: r
                        }
                        of n.values()) {
                        if (!e.isConnected) continue;
                        let n = e.closest(`pre`);
                        if (n == null) {
                            r.style.left = ``, r.style.top = ``, r.style.visibility = ``;
                            continue
                        }
                        let i = e.getBoundingClientRect(),
                            a = t.dom.getBoundingClientRect(),
                            o = t.dom.offsetWidth ? a.width / t.dom.offsetWidth : 1,
                            s = t.dom.offsetHeight ? a.height / t.dom.offsetHeight : 1,
                            c = getComputedStyle(e).direction;
                        r.style.left = `${(c===`rtl`?(i.right-a.left)/o-r.offsetWidth+1:(i.left-a.left)/o-1)-t.dom.clientLeft}px`, r.style.top = `${(i.top-a.top)/s-t.dom.clientTop-r.offsetHeight-2}px`;
                        let l = n.getBoundingClientRect();
                        r.style.visibility = i.right > l.left && i.left < l.right && i.bottom > l.top && i.top < l.bottom ? `` : `hidden`
                    }
                },
                d = typeof ResizeObserver > `u` ? null : new ResizeObserver(u);
            d?.observe(t.dom);
            let p = () => {
                    o || l || (l = !0, queueMicrotask(() => {
                        l = !1, !o && !t.isDestroyed && f(t)
                    }))
                },
                m = () => {
                    t.isDestroyed || t.dispatch(t.state.tr.setMeta(Z, !0).setMeta(`addToHistory`, !1))
                },
                h = [e.subscribeState(m), e.subscribeToEditorPresence(e => {
                    let t = e.removed.some(({
                        value: e
                    }) => n.has(e));
                    for (let t of e.removed) i(t.value);
                    e.upserts.length === 0 && !t || m()
                }), e.subscribeToEditorPresenceActivity(e => {
                    let t = n.get(e);
                    t != null && (c(t, !1), s(t))
                }), e.subscribeToParticipants(m), e.subscribeToEditorChanges(e => {
                    a = e.revision, p(), m()
                })];
            return t.dom.addEventListener(`focusin`, p), t.dom.addEventListener(`focusout`, p), t.dom.addEventListener(`scroll`, u, !0), u(), {
                update() {
                    u(), p()
                },
                destroy() {
                    o = !0;
                    for (let e of h) e();
                    t.dom.removeEventListener(`focusin`, p), t.dom.removeEventListener(`focusout`, p), t.dom.removeEventListener(`scroll`, u, !0), d?.disconnect(), r() && e.editor.publishSelection({
                        baseRevision: a,
                        selection: void 0
                    });
                    for (let e of n.keys()) i(e)
                }
            }
        }
    })]
}
var he, ge, _e, ve, ye, Z, be = e((() => {
    Y(), i(), b(), he = 1e3, ge = 10 * 6e4, _e = 20 * 6e4, ve = `writing-block-collaborator-cursor-label`, ye = `writing-block-collaborator-cursor-inactive`, Z = new s(`writing-block-collaborative-cursors`)
}));

function xe(e, t) {
    return new w(r.fromArray(e.content.map(e => t.nodeFromJSON(e))), e.openStart, e.openEnd)
}

function Se(e) {
    let t = ke.get(e);
    return (t == null || t.editor !== e.editor) && (t = {
        editor: e.editor,
        undo: [],
        redo: [],
        pending: void 0
    }, ke.set(e, t)), t
}

function Ce(e, t) {
    let n = e.snapshot().revision,
        r = e.createAnchor({
            baseRevision: n,
            point: {
                position: t.selection.anchor,
                affinity: U.FORWARD
            }
        }).anchor,
        i = e.createAnchor({
            baseRevision: n,
            point: {
                position: t.selection.head,
                affinity: U.FORWARD
            }
        }).anchor;
    return r == null || i == null ? void 0 : {
        anchor: r,
        head: i
    }
}

function we(e, t) {
    let n = e.editor.snapshot().document;
    return n == null ? null : t.nodeFromJSON(n.ast)
}

function Te(e, t, n, r, i, {
    editId: a = `editor-edit:${++Ae}`,
    addToHistory: o = !0,
    onConversionError: s
} = {}) {
    let c;
    try {
        c = le(t.doc, n.doc, r)
    } catch (e) {
        return s?.(e instanceof Error ? e.name : typeof e), !1
    }
    if (c.length === 0) return !0;
    let l = e.editor,
        u = o ? Ce(l, t) : void 0,
        d = {
            baseRevision: l.snapshot().revision,
            editId: a,
            undoGroup: i,
            addToHistory: o,
            operations: c
        },
        f = l.applyLocalEdits(d);
    if (o && f.status === K.APPLIED) {
        let t = Ce(l, n),
            r = Se(e),
            a = r.undo.at(-1);
        a?.undoGroup === i ? a.after = t : r.undo.push({
            undoGroup: i,
            before: u,
            after: t
        }), r.redo.length = 0
    }
    return f.status !== K.REJECTED
}

function Ee(e, t) {
    let n = Se(e),
        r = t ? n.redo : n.undo,
        i = t ? n.undo : n.redo,
        a = r.at(-1);
    n.pending = t ? a?.after : a?.before;
    let o = {
            baseRevision: e.editor.snapshot().revision,
            editId: `web-${t?`redo`:`undo`}:${++Ae}`
        },
        s = t ? e.editor.redo(o) : e.editor.undo(o);
    return n.pending = void 0, s.status === K.APPLIED ? (a != null && (r.pop(), i.push(a)), !0) : !1
}

function De(e, t) {
    return (n, r) => r == null ? e.editor.snapshot().history[t ? `canRedo` : `canUndo`] : Ee(e, t)
}

function Oe(e, t) {
    return new _({
        key: Q,
        filterTransaction(t) {
            return !t.docChanged || t.getMeta(Q)?.isChangeOrigin === !0 || e.editor.snapshot().status === q.EDITABLE
        },
        view(n) {
            return {
                destroy: e.subscribeToEditorChanges(r => {
                    if (r.origin === J.LOCAL && r.editId?.startsWith(`${t}:`) || r.patches.length === 0 || n.isDestroyed) return;
                    let i = n.state.tr;
                    try {
                        for (let e of r.patches) i.replace(e.from, e.to, xe(e.slice, n.state.schema))
                    } catch {
                        let t = we(e, n.state.schema);
                        if (t == null) return;
                        i.replaceWith(0, i.doc.content.size, t.content)
                    }
                    if (i.docChanged) {
                        if (r.origin === J.HISTORY) {
                            let t = Se(e).pending;
                            if (t != null) {
                                let n = e.editor.resolveSelection(t).selection;
                                if (n != null) {
                                    let e = i.doc.content.size,
                                        t = Math.min(Math.max(n.anchor.position, 0), e),
                                        r = Math.min(Math.max(n.head.position, 0), e);
                                    i.setSelection(E.between(i.doc.resolve(t), i.doc.resolve(r), t <= r ? 1 : -1))
                                }
                            }
                        }
                        i.setMeta(`addToHistory`, !1), i.setMeta(Q, {
                            isChangeOrigin: !0,
                            isUndoRedoOperation: r.origin === J.HISTORY
                        }), n.dispatch(i)
                    }
                })
            }
        }
    })
}
var Q, ke, Ae, je = e((() => {
    Y(), S(), i(), de(), Q = new s(`writing-block-collaborative-sync`), ke = new WeakMap, Ae = 0
}));

function Me(e, {
    getParticipantColor: t,
    onConversionError: n
} = {}) {
    let r = crypto.randomUUID(),
        i = 0,
        a = 0,
        o = !0,
        s = De(e, !1),
        c = De(e, !0);
    return {
        plugins: [Ne(), Oe(e, r), ...me(e, t)],
        undo: s,
        redo: c,
        handleBeforeInput(e, t) {
            let n = `inputType` in t ? t.inputType : void 0;
            return !e.editable || n !== `historyUndo` && n !== `historyRedo` ? !1 : (t.preventDefault(), (n === `historyRedo` ? c : s)(e.state, e.dispatch), !0)
        },
        commitTransaction({
            view: t,
            previousState: s,
            nextState: c,
            transactions: l,
            baseState: u = s,
            steps: d = l.flatMap(e => e.steps),
            forceUndoBoundary: f = !1
        }) {
            if (!l.some(e => e.docChanged) || l[0]?.getMeta(Q)?.isChangeOrigin === !0) return !0;
            let p = f || l.some(e => e.getMeta(`closeHistory$`) === !0 || e.getMeta(`isolateHistory$`) === !0),
                m = l.some(e => e.docChanged && e.getMeta(`addToHistory`) !== !1);
            m && (o || p || M(u) !== M(c)) && (i += 1);
            let h = Te(e, u, c, d, `${r}:${i}`, {
                editId: `${r}:${++a}`,
                addToHistory: m,
                onConversionError: n
            });
            return m && (o = p), h || t.updateState(s), h
        }
    }
}

function Ne() {
    return new _({
        appendTransaction(e, t, n) {
            let r = n.schema.marks.startend;
            if (!e.some(e => e.docChanged)) return null;
            let i = n.tr;
            return n.doc.descendants((e, t) => {
                if (e.type.name === `writing_block_image` && e.marks.length > 0) {
                    i.removeMark(t, t + e.nodeSize);
                    return
                }
                e.isInline && r?.isInSet(e.marks) != null && i.removeMark(t, t + e.nodeSize, r)
            }), i.docChanged ? e.some(e => e.docChanged && e.getMeta(`addToHistory`) !== !1) ? i : i.setMeta(`addToHistory`, !1) : null
        }
    })
}
var Pe = e((() => {
    k(), i(), be(), je(), P()
}));

function Fe(e, t) {
    let n = e.resolve(t);
    if (n.textOffset === 0) return !0;
    let r = n.parent.child(n.index()).text ?? ``,
        i = r.charCodeAt(n.textOffset - 1),
        a = r.charCodeAt(n.textOffset);
    return !(i >= 55296 && i <= 56319 && a >= 56320 && a <= 57343)
}

function Ie(e, t) {
    let n = e.content.findDiffStart(t.content);
    if (n == null) return e.eq(t) ? null : new O(0, e.content.size, new w(t.content, 0, 0));
    let r = e.content.findDiffEnd(t.content),
        i = r?.a ?? e.content.size,
        a = r?.b ?? t.content.size;
    i < n && (a += n - i, i = n), a < n && (i += n - a, a = n), (!Fe(e, n) || !Fe(t, n)) && --n, Fe(e, i) || (i += 1), Fe(t, a) || (a += 1);
    try {
        let r = new O(n, i, t.slice(n, a));
        if (r.apply(e).doc?.eq(t) === !0) return r
    } catch {}
    return new O(0, e.content.size, new w(t.content, 0, 0))
}

function Le(e, t, n, r) {
    let i = Ie(e.doc, r.doc);
    if (i == null) return {
        state: t,
        steps: n
    };
    let a = n.flatMap(e => e instanceof B ? e.changes.toReversed() : [e]),
        o = new c;
    for (let e = a.length - 1; e >= 0; --e) o.appendMap(a[e].getMap().invert());
    o.appendMap(i.getMap());
    let s = r.tr;
    for (let e = 0; e < a.length; e += 1) {
        let t = a.length - e,
            n = a[e],
            r = o.slice(t),
            c = n.map(r);
        if (c == null && n instanceof O && n.from === n.to) {
            let e = r.map(n.from, 1);
            c = new O(e, e, n.slice)
        }
        if (c instanceof O && n instanceof O && n.from === n.to && n.slice.content.firstChild?.isInline === !0) {
            let e = s.doc.resolve(c.from);
            if (!e.parent.inlineContent) {
                let t = E.between(e, e, c.from === 0 ? 1 : -1);
                if (!t.$from.parent.inlineContent) return null;
                c = new O(t.from, t.from, c.slice)
            }
        }
        if (c instanceof O && i.from === i.to && i.slice.size > 0) {
            let e = s.mapping.map(i.from, -1),
                t = s.mapping.map(i.from + i.slice.size, 1);
            c.from < e && c.to > t && (c = new g(c.from, c.to, e, t, c.slice, c.slice.size))
        }
        if (c == null) return null;
        try {
            if (s.maybeStep(c).failed != null) return null
        } catch (e) {
            if (e instanceof RangeError) return null;
            throw e
        }
        o.appendMap(c.getMap(), t - 1)
    }
    s.setSelection(t.selection.map(s.doc, o));
    let l = r.applyTransaction(s);
    return {
        state: l.state,
        steps: l.transactions.flatMap(e => e.steps)
    }
}
var Re = e((() => {
    S(), i(), x(), V()
}));

function ze(e, t, n = !1) {
    let i = new Set;
    t.descendants(e => {
        if (e.isTextblock) return i.add(e), !1
    });
    let a = [],
        o = [];
    e.doc.descendants((t, r, s) => {
        if (i.has(t)) return !1;
        t.type.name === `writing_block_image` && s != null && !i.has(s) && (n && t.attrs.imageId == null && o.push(r), (e.doc.resolve(r).depth !== 1 || s.type.name !== `paragraph` || s.childCount !== 1) && a.push(r))
    });
    for (let t of o) e.setNodeAttribute(t, `imageId`, crypto.randomUUID());
    let s = e.selection instanceof D && e.selection.node.type.name === `writing_block_image` ? e.selection.node : null,
        c = e.doc.type.schema.nodes.paragraph;
    for (let t of a.reverse()) {
        let n = e.doc.resolve(t),
            i = n.nodeAfter;
        if (i == null) continue;
        let a = c.createChecked(null, i);
        if (n.depth === 1) e.replaceRange(t, t + i.nodeSize, new w(r.from(a), 0, 0));
        else {
            let r = n.after(1),
                o = e.mapping.maps.length;
            e.delete(t, t + i.nodeSize), e.insert(e.mapping.slice(o).map(r, -1), a)
        }
    }
    s != null && e.doc.descendants((t, n) => {
        t === s && e.setSelection(D.create(e.doc, n))
    })
}
var Be = e((() => {
    S(), i(), P()
}));

function Ve(e, t, n) {
    if (n.length === 0) return !1;
    if (t) {
        if (t.length > Ke) return !e?.trim();
        let n = document.createElement(`template`);
        if (n.innerHTML = t, Ue(n.content)) return !1;
        if (He(n.content)) return !0
    }
    let r = new Set(n.map(e => e.name));
    return !(e ?? ``).split(/\r?\n/).some(e => {
        let t = e.trim(),
            n = t.replace(/[\\/]+$/, ``).split(/[\\/]/).at(-1);
        return t !== `` && !r.has(n ?? ``)
    })
}

function He(e) {
    return Array.from(e.querySelectorAll(qe)).some(e => !We(e))
}

function Ue(e) {
    let t = document.createTreeWalker(e, window.NodeFilter.SHOW_TEXT);
    for (let e = t.nextNode(); e != null; e = t.nextNode())
        if ((e.textContent?.trim() ?? ``) !== `` && e.parentElement?.closest(qe) == null && !We(e.parentElement)) return !0;
    return !1
}

function We(e) {
    for (let t = e; t != null; t = t.parentElement)
        if (t.matches(Je) || t.hasAttribute(`hidden`) || t.getAttribute(`aria-hidden`) === `true` || Ge(t)) return !0;
    return !1
}

function Ge(e) {
    return (e instanceof window.HTMLElement || e instanceof window.SVGElement) && (e.style.display === `none` || e.style.visibility === `hidden`)
}
var Ke, qe, Je, Ye = e((() => {
        Ke = 1e5, qe = `img, svg, canvas, video`, Je = `head, script, style, template, noscript, title, meta, link`
    })),
    Xe, Ze, Qe, $e, et, tt, nt, rt, it, at, $, ot = e((() => {
        Xe = `MHQI0a_block`, Ze = `MHQI0a_container`, Qe = `MHQI0a_dragHandle`, $e = `MHQI0a_dragThumbnail`, et = `MHQI0a_dropIndicator`, tt = `MHQI0a_frame`, nt = `MHQI0a_preview`, rt = `MHQI0a_progress`, it = `MHQI0a_screenReaderStatus`, at = `MHQI0a_status`, $ = {
            block: Xe,
            container: Ze,
            dragHandle: Qe,
            dragThumbnail: $e,
            dropIndicator: et,
            frame: tt,
            "image-shimmer": `MHQI0a_image-shimmer`,
            "image-spin": `MHQI0a_image-spin`,
            preview: nt,
            progress: rt,
            screenReaderStatus: it,
            status: at
        }
    }));

function st(e, t) {
    let n = e.posAtCoords({
        left: t.clientX,
        top: t.clientY
    });
    if (n == null) return;
    let r = e.state.doc.resolve(n.pos);
    if (r.depth === 0) return r.pos;
    let i = e.nodeDOM(r.before(1)),
        a = e.dom.ownerDocument.defaultView;
    if (a == null || !(i instanceof a.HTMLElement)) return;
    let o = i.getBoundingClientRect();
    return t.clientY < (o.top + o.bottom) / 2 ? r.before(1) : r.after(1)
}

function ct(e) {
    let t = e.dom.ownerDocument,
        n = t.defaultView,
        r = null,
        i = null,
        a = () => {
            r?.remove(), r = null
        };
    return {
        start(r, a) {
            if (i?.remove(), i = null, n == null || !(r instanceof n.HTMLElement)) return;
            let o = r.querySelector(`img:not([hidden])`);
            if (!(o instanceof n.HTMLImageElement) || a == null) return;
            i = t.createElement(`span`), i.className = $.dragThumbnail, i.setAttribute(`aria-hidden`, `true`);
            let s = o.getBoundingClientRect(),
                c = Math.min(1, 96 / Math.max(s.width, s.height));
            i.style.width = `${s.width*c}px`, i.style.height = `${s.height*c}px`;
            let l = t.createElement(`img`);
            l.src = o.currentSrc || o.src, l.style.width = `100%`, l.style.height = `100%`, l.style.margin = `0`, i.append(l), e.dom.parentElement?.append(i), a.setDragImage(i, 12, 12)
        },
        show(i) {
            let o = st(e, i);
            if (o == null || n == null) {
                a();
                return
            }
            let s = e.state.doc.resolve(o),
                c = s.nodeBefore,
                l = c == null ? null : e.nodeDOM(o - c.nodeSize),
                u = s.nodeAfter == null ? null : e.nodeDOM(o),
                d = l instanceof n.HTMLElement ? l.getBoundingClientRect() : null,
                f = u instanceof n.HTMLElement ? u.getBoundingClientRect() : null,
                p = d != null && f != null ? (d.bottom + f.top) / 2 : d?.bottom ?? f?.top;
            if (p == null) return;
            r ?? (r = t.createElement(`div`), r.className = $.dropIndicator, r.setAttribute(`aria-hidden`, `true`), e.dom.parentElement?.append(r));
            let m = r.offsetParent,
                h = m?.getBoundingClientRect(),
                g = m instanceof n.HTMLElement ? m : null,
                _ = g != null && g.offsetWidth > 0 ? g.getBoundingClientRect().width / g.offsetWidth : 1,
                v = f ?? d;
            v != null && (r.style.left = `${(v.left-(h?.left??0))/_+(g?.scrollLeft??0)-(g?.clientLeft??0)}px`, r.style.top = `${(p-(h?.top??0))/_+(g?.scrollTop??0)-(g?.clientTop??0)-1}px`, r.style.width = `${v.width/_}px`)
        },
        hideIndicator: a,
        destroy() {
            a(), i?.remove(), i = null
        }
    }
}
var lt = e((() => {
    ot()
}));

function ut(e) {
    let t = e.type.toLowerCase();
    return e.size > 0 && (t.startsWith(`image/`) ? /^image\/(?:avif|gif|jpe?g|png|webp|x-png)$/u.test(t) : /\.(?:avif|gif|jpe?g|png|webp)$/iu.test(e.name))
}

function dt(e) {
    let t = e.type.toLowerCase();
    return t === `image/avif` || !t.startsWith(`image/`) && e.name.toLowerCase().endsWith(`.avif`)
}
async function ft(e, t, n) {
    n.throwIfAborted();
    let r = URL.createObjectURL(e),
        i = t.createElement(`img`),
        a = () => {},
        o = new Promise((e, t) => {
            a = () => t(n.reason)
        });
    n.addEventListener(`abort`, a, {
        once: !0
    });
    try {
        i.src = r, await Promise.race([i.decode(), o]), n.throwIfAborted();
        let {
            naturalWidth: a,
            naturalHeight: s
        } = i;
        if (a === 0 || s === 0) throw Error(`Image dimensions are unavailable`);
        let c = e;
        if (dt(e)) {
            let l = t.createElement(`canvas`);
            l.width = a, l.height = s;
            let u = l.getContext(`2d`);
            if (u == null) throw Error(`AVIF image conversion is unavailable`);
            u.drawImage(i, 0, 0);
            let d = await Promise.race([new Promise((e, t) => {
                l.toBlob(n => {
                    n == null ? t(Error(`AVIF image conversion failed`)) : e(n)
                }, `image/png`)
            }), o]);
            n.throwIfAborted(), c = new File([d], `${e.name.replace(/\.[^.]+$/,``)}.png`, {
                type: `image/png`,
                lastModified: e.lastModified
            }), URL.revokeObjectURL(r), r = URL.createObjectURL(c)
        }
        return {
            file: c,
            url: r,
            naturalWidth: a,
            naturalHeight: s
        }
    } catch (e) {
        throw URL.revokeObjectURL(r), n.throwIfAborted(), e
    } finally {
        n.removeEventListener(`abort`, a), i.removeAttribute(`src`)
    }
}
var pt = e((() => {}));

function mt(e, t, n, r, i) {
    let a = t.dom.ownerDocument,
        o = a.createElement(`span`);
    o.className = i.blockImages ? `${$.container} ${$.block}` : $.container, o.contentEditable = `false`, o.tabIndex = -1;
    let s = a.createElement(`span`);
    s.className = $.frame;
    let c = a.createElement(`img`);
    c.draggable = !1;
    let l = a.createElement(`span`);
    l.className = $.dragHandle, l.dataset.imageDragHandle = ``, l.setAttribute(`aria-hidden`, `true`);
    let u = a.createElement(`span`);
    u.className = $.status, u.setAttribute(`role`, `status`);
    let d = a.createElement(`button`);
    d.type = `button`, d.className = `cursor-pointer rounded-md border-0 px-3 py-1 text-sm [background:var(--oai-wb-surface-secondary)] [color:var(--oai-wb-text-primary)] hover:[background:var(--oai-wb-interactive-secondary-hover)] focus-visible:[outline:2px_solid_var(--oai-wb-focus)] focus-visible:[outline-offset:2px]`, d.dataset.imageRetry = ``;
    let f = a.createElement(`button`);
    f.type = `button`, f.className = $.preview, f.setAttribute(`aria-label`, n.labels.openPreview), f.setAttribute(`aria-haspopup`, `dialog`);
    let p = `http://www.w3.org/2000/svg`,
        m = a.createElementNS(p, `svg`);
    m.setAttribute(`width`, `16`), m.setAttribute(`height`, `16`), m.setAttribute(`viewBox`, `0 0 24 24`);
    for (let e of [9.5, 14.5])
        for (let t of [5.5, 12, 18.5]) {
            let n = a.createElementNS(p, `circle`);
            n.setAttribute(`cx`, String(e)), n.setAttribute(`cy`, String(t)), n.setAttribute(`r`, `1.5`), n.setAttribute(`fill`, `currentColor`), m.append(n)
        }
    l.append(m);
    let h = a.createElementNS(p, `svg`);
    h.setAttribute(`width`, `16`), h.setAttribute(`height`, `16`), h.setAttribute(`viewBox`, `0 0 16 16`), h.setAttribute(`fill`, `none`), h.setAttribute(`aria-hidden`, `true`);
    let g = a.createElementNS(p, `path`);
    g.setAttribute(`d`, `M9 3h4v4m0-4L9 7M7 13H3V9m0 4 4-4`), g.setAttribute(`stroke`, `currentColor`), g.setAttribute(`stroke-width`, `1.5`), g.setAttribute(`stroke-linecap`, `round`), g.setAttribute(`stroke-linejoin`, `round`), h.append(g), f.append(h);
    let _ = a.createElement(`span`);
    _.className = $.progress, _.setAttribute(`aria-hidden`, `true`), s.append(c, l, _, f), o.append(s, u, d);
    let v = e,
        y = null,
        b = null,
        x = null,
        S = null,
        C = ``,
        w = !1,
        T = null,
        E = null,
        O = null,
        k = null,
        A = !1,
        j = null,
        M = !1,
        N = !1,
        P = null,
        F = null,
        I = null,
        L = !1,
        R = null,
        z = !1,
        B = null,
        V = e => {
            M || b == null || e.preventDefault()
        },
        H = () => {
            let e = y?.();
            M || t.isDestroyed || e == null || (t.dispatch(t.state.tr.setSelection(D.create(t.state.doc, e))), t.editable ? t.focus() : o.focus({
                preventScroll: !0
            }))
        },
        ne = (e, n = w) => {
            let r = y?.();
            if (M || t.isDestroyed || !t.editable || r == null || t.state.doc.nodeAt(r) !== v) return !1;
            let i = n ? t.state.tr.setMeta(`addToHistory`, !1) : ee(t.state.tr);
            for (let [t, n] of Object.entries(e)) n !== v.attrs[t] && i.setNodeAttribute(r, t, n);
            if (!i.docChanged) return !0;
            t.dispatch(i);
            let a = t.state.doc.nodeAt(r);
            return a != null && a.hasMarkup(v.type, e)
        },
        U = () => {
            if (M) return;
            let e = b != null && n.warnBeforeUnload !== !1;
            L !== e && (L = e, e ? a.defaultView?.addEventListener(`beforeunload`, V) : a.defaultView?.removeEventListener(`beforeunload`, V));
            let r = v.attrs.src == null && b == null;
            r ? F ??= Date.now() : F = null;
            let p = F == null ? 0 : 2e4 - (Date.now() - F),
                m = r && j == null && p > 0;
            m && I == null ? I = setTimeout(() => {
                I = null, U()
            }, p) : !m && I != null && (clearTimeout(I), I = null);
            let h = m || E != null && b != null,
                g = E != null || m;
            c.alt = v.attrs.alt, c.title = v.attrs.title ?? ``;
            let y = x?.naturalWidth ?? (A ? c.naturalWidth : v.attrs.naturalWidth),
                S = x?.naturalHeight ?? (A ? c.naturalHeight : v.attrs.naturalHeight),
                C = !h && y != null && S != null,
                w = !A && C;
            s.style.width = C ? `${Math.min(y*(v.attrs.scale??1),1024,(i.maxImageHeight??1/0)*y/S)}px` : ``;
            let T = t.editable;
            o.toggleAttribute(`data-editable`, t.editable), o.toggleAttribute(`data-draggable`, i.blockImages === !0 && T), l.hidden = !i.blockImages || !T, s.style.height = w ? `auto` : ``, s.style.aspectRatio = w ? `${y} / ${S}` : ``, s.hidden = !A && !g && O == null, s.toggleAttribute(`data-placeholder`, !A), s.toggleAttribute(`data-uploading`, h), c.hidden = !A || h, _.hidden = !g || h, u.className = g ? $.screenReaderStatus : $.status, u.textContent = j ?? (g ? h ? n.labels.uploading : n.labels.loading : r ? n.labels.uploadIncomplete : ``), d.textContent = n.labels.retry, d.hidden = !t.editable || r || j == null || g, f.hidden = !A || g, o.setAttribute(`aria-busy`, String(g))
        },
        W = () => {
            R = null, B?.abort(), P?.(), P = null, k != null && URL.revokeObjectURL(k), k = null, A = !1, x = null, S = null, c.removeAttribute(`src`)
        },
        G = () => {
            O?.disconnect(), O = null, E?.abort(), E = null, B?.abort()
        },
        K = async () => {
            G(), W(), j = null;
            let e = v.attrs.src;
            if (e == null) {
                U();
                return
            }
            let t = new AbortController;
            E = t, U();
            try {
                let r = await n.loadImage(e, t.signal);
                if (t.signal.throwIfAborted(), r.size > 20971520) throw Error(`Image exceeds 20 MiB`);
                S = r, k = URL.createObjectURL(r), c.src = k, await c.decode(), t.signal.throwIfAborted(), A = !0
            } catch {
                t.signal.aborted || (j = n.labels.loadError)
            } finally {
                E === t && (E = null, U())
            }
        }, q = () => {
            G(), W(), j = null;
            let e = a.defaultView?.IntersectionObserver;
            if (v.attrs.src == null || e == null) {
                K();
                return
            }
            O = new e(e => {
                e.some(e => e.isIntersecting) && K()
            }, {
                rootMargin: `256px`
            }), O.observe(o), U()
        }, J = async () => {
            if (M || !t.editable || b == null || E != null) return;
            let e = new AbortController;
            E = e, j = null, U();
            try {
                if (typeof b == `string`) {
                    let t = b,
                        r = await n.loadImage(t, e.signal);
                    e.signal.throwIfAborted(), b = r
                }
                if (!ut(b) || b.size > 20971520) throw Error(`Images must be nonempty and at most 20 MiB`);
                if (x == null) {
                    let t = await ft(b, a, e.signal);
                    e.signal.aborted && URL.revokeObjectURL(t.url), e.signal.throwIfAborted(), x = t, k = t.url, c.src = k, A = !0, U()
                }
                if (x.file.size > 20971520) throw Error(`Image exceeds 20 MiB`);
                let r = T ?? await n.uploadImage(x.file, e.signal);
                if (e.signal.throwIfAborted(), te(r) == null) throw Error(`Invalid image upload reference`);
                if (T = r, !t.editable || v.attrs.src != null) return;
                N = !0;
                let o = !1;
                try {
                    o = ne({
                        ...v.attrs,
                        src: r + C,
                        naturalWidth: x.naturalWidth,
                        naturalHeight: x.naturalHeight
                    })
                } finally {
                    N = !1
                }
                if (!o) {
                    j = n.labels.saveError;
                    return
                }
                w && i.onUploadCompleted?.(v), b = null, T = null
            } catch {
                e.signal.aborted || (j = n.labels.uploadError)
            } finally {
                E === e && (E = null, U())
            }
        }, Y = (e, n = !1) => {
            !t.editable || M || v.attrs.src != null || (G(), W(), b = e, w = n, C = typeof e == `string` ? /#display=(?:minimal|full)$/u.exec(e)?.[0] ?? `` : ``, T = null, J())
        }, re = () => {
            let e = x?.file ?? S;
            if (!A || k == null || e == null || M) return !1;
            P?.(), B?.abort();
            let r = {};
            R = r, z = t.editable && v.attrs.src != null;
            let i = k,
                o = v.attrs.src,
                s = () => {
                    let e = y?.();
                    return R === r && o != null && !M && !t.isDestroyed && t.editable && e != null && t.state.doc.nodeAt(e) === v && v.attrs.src === o
                };
            return P = n.openPreview({
                src: i,
                file: e,
                alt: v.attrs.alt,
                title: v.attrs.title,
                naturalWidth: x?.naturalWidth ?? c.naturalWidth,
                naturalHeight: x?.naturalHeight ?? c.naturalHeight,
                onApply: z ? async (e, t) => {
                    if (t.throwIfAborted(), !s() || B != null) return !1;
                    if (!ut(e) || e.size > 20971520) throw Error(`Images must be nonempty and at most 20 MiB`);
                    let r = new AbortController;
                    B = r;
                    let i = () => r.abort(t.reason);
                    t.addEventListener(`abort`, i, {
                        once: !0
                    });
                    let l = null;
                    try {
                        if (l = await ft(e, a, r.signal), r.signal.throwIfAborted(), l.file.size > 20971520) throw Error(`Image exceeds 20 MiB`);
                        let t = await n.uploadImage(l.file, r.signal);
                        if (r.signal.throwIfAborted(), te(t) == null) throw Error(`Invalid image upload reference`);
                        if (!s()) return !1;
                        N = !0;
                        let i = !1;
                        try {
                            i = ne({
                                ...v.attrs,
                                src: t + (/#display=(?:minimal|full)$/u.exec(o ?? ``)?.[0] ?? ``),
                                naturalWidth: l.naturalWidth,
                                naturalHeight: l.naturalHeight
                            }, !1)
                        } finally {
                            N = !1
                        }
                        return i ? (W(), x = l, k = l.url, l = null, c.src = k, A = !0, U(), !0) : !1
                    } catch (e) {
                        if (r.signal.aborted && !t.aborted) return !1;
                        throw e
                    } finally {
                        l != null && URL.revokeObjectURL(l.url), t.removeEventListener(`abort`, i), B === r && (B = null)
                    }
                } : void 0,
                onClose() {
                    R === r && (R = null, B?.abort(), P = null, a.defaultView?.requestAnimationFrame(() => {
                        k === i && H()
                    }))
                }
            }), !0
        };
    f.onclick = re, d.onclick = () => {
        b == null ? K() : J()
    }, o.ondragover = e => {
        t.editable && v.attrs.src == null && e.dataTransfer?.types.includes(`Files`) && e.preventDefault()
    }, o.ondrop = e => {
        let i = y?.(),
            a = Array.from(e.dataTransfer?.files ?? []);
        if (!(!t.editable || v.attrs.src != null || i == null || a.length === 0 || !a.every(ut))) {
            if (e.preventDefault(), e.stopPropagation(), a.length > 20) {
                n.onInsertError(Error(`At most 20 images can be uploaded at once`));
                return
            }
            if (Y(a[0]), a.length > 1) {
                let e = t.state.doc.resolve(i);
                r(a.slice(1), e.parent.type.name === `paragraph` && e.parent.childCount === 1 ? e.after() : i + 1)
            }
        }
    }, c.onload = U, c.onerror = () => {
        G(), W(), j = b == null ? n.labels.loadError : n.labels.uploadError, U()
    };
    let ie = e => {
        if (e.type !== v.type || i.blockImages && v.attrs.imageId != null && e.attrs.imageId !== v.attrs.imageId) return !1;
        if (e !== v) {
            let e = !1;
            if (t.state.doc.descendants(t => {
                    e ||= t === v
                }), e) return !1
        }
        let n = te(e.attrs.src ?? ``) !== te(v.attrs.src ?? ``);
        return v = e, n && !N && (b = null, T = null, q()), U(), !0
    };
    return {
        nodeView: {
            dom: o,
            update: ie,
            selectNode: i.blockImages ? () => o.setAttribute(`data-selected`, ``) : void 0,
            deselectNode: i.blockImages ? () => o.removeAttribute(`data-selected`) : void 0,
            ignoreMutation: () => !0,
            stopEvent: e => e.target instanceof Element && e.target.closest(`button,input`) != null && !(e instanceof KeyboardEvent && (e.metaKey || e.ctrlKey))
        },
        node: () => v,
        position: () => y?.(),
        attach(e, t) {
            let n = y == null && k == null && E == null && O == null && b == null;
            y = e, n ? (v = t, q()) : ie(t)
        },
        detach(e) {
            y === e && (y = null)
        },
        upload: Y,
        openPreview: re,
        refresh() {
            let e = y?.(),
                r = e == null ? null : t.state.doc.nodeAt(e);
            r?.eq(v) && (v = r), !t.editable && b != null && E != null && (G(), j = n.labels.uploadError), !t.editable && z && (B?.abort(), R = null, P?.(), P = null, z = !1), U()
        },
        destroy() {
            M = !0, I != null && clearTimeout(I), a.defaultView?.removeEventListener(`beforeunload`, V), G(), W()
        }
    }
}
var ht = e((() => {
    k(), i(), pt(), N(), ot()
}));

function gt(e, t = {}) {
    let n = new Set,
        i = null,
        a = null,
        s = new Map,
        c = !1,
        l = !1,
        u = new Set,
        d = e => [...n].find(t => t.position() === e),
        f = (n, i, a, s = a) => {
            if (n.isDestroyed || !n.editable || i.length === 0) return !1;
            try {
                if (i.length > 20) throw Error(`At most 20 images can be uploaded at once`);
                if (!i.every(ut)) throw Error(`Unsupported image format`);
                let e = i.map(e => n.state.schema.nodes[F].createChecked({
                        src: null,
                        alt: e.name,
                        ...t.blockImages ? {
                            imageId: crypto.randomUUID()
                        } : {}
                    })),
                    c = n.state.schema.nodes.paragraph,
                    l = ee(n.state.tr).delete(a, s),
                    u = l.doc.resolve(a),
                    f = u.parent.type.name === `table_cell`;
                if (f) l.insert(a, r.fromArray(e));
                else {
                    let t = e.map(e => c.createChecked(null, e));
                    u.depth === 1 && u.parent.type === c && u.parent.content.size === 0 ? l.replaceWith(u.before(), u.after(), [...t, c.createChecked()]) : l.replaceRange(a, a, new w(r.fromArray(t), 0, 0))
                }
                t.blockImages && ze(l, n.state.doc);
                let p = [];
                if (l.doc.descendants((t, n) => {
                        e.includes(t) && p.push(n)
                    }), p.length !== e.length) throw Error(`Images could not be inserted at this position`);
                let m = p[p.length - 1],
                    h = f && !t.blockImages ? m + 1 : l.doc.resolve(m).after();
                h === l.doc.content.size && l.insert(h, c.createChecked()), l.setSelection(o.near(l.doc.resolve(h), 1)), n.dispatch(l.scrollIntoView());
                for (let [e, t] of p.entries()) {
                    let n = d(t);
                    if (n == null) throw Error(`The image insertion was not accepted`);
                    n.upload(i[e], !0)
                }
                return !0
            } catch (t) {
                return e.onInsertError(t), !1
            }
        },
        p = A({
            schemaFamily: `writing-blocks`,
            handlePaste(e, n, r) {
                if (!e.editable || r.kind === `standard` && r.plain) return !1;
                if (r.kind === `internal`) {
                    let n = new Set;
                    if (r.content.slice.content.descendants(e => {
                            e.type.name === `writing_block_image` && n.add(e)
                        }), n.size === 0) return !1;
                    let i = j(e.state.tr, r.content);
                    if (i == null) return !1;
                    t.blockImages && ze(i, e.state.doc);
                    let a = [];
                    i.doc.descendants((e, r) => {
                        n.has(e) && (t.blockImages && i.setNodeAttribute(r, `imageId`, crypto.randomUUID()), e.attrs.src != null && a.push({
                            position: r,
                            src: e.attrs.src
                        }))
                    });
                    for (let {
                            position: e
                        }
                        of a) i.setNodeAttribute(e, `src`, null);
                    e.dispatch(ee(i).scrollIntoView());
                    for (let {
                            position: e,
                            src: t
                        }
                        of a) d(e)?.upload(t, !0);
                    return !0
                }
                let i = _t(n.clipboardData);
                return n.defaultPrevented || !Ve(n.clipboardData?.getData(`text/plain`), n.clipboardData?.getData(`text/html`), i) ? !1 : (n.preventDefault(), n.stopPropagation(), f(e, i, e.state.selection.from, e.state.selection.to), !0)
            }
        }),
        m = e => d(e)?.openPreview() ?? !1,
        h = (e, t) => {
            e.state.doc.nodeAt(t)?.attrs.imageId ?? e.dispatch(e.state.tr.setNodeAttribute(t, `imageId`, crypto.randomUUID()).setMeta(`addToHistory`, !1).setMeta(vt, {
                identifyingImage: !0
            }))
        };
    return new _({
        key: vt,
        state: {
            init: () => ({
                insert: f
            }),
            apply: (e, t) => (c = e.getMeta(Q)?.isUndoRedoOperation === !0, t)
        },
        appendTransaction(e, n, r) {
            if (!t.blockImages || !e.some(e => e.docChanged) || e.some(e => e.getMeta(vt)?.identifyingImage === !0) || e.some(e => e.getMeta(Q)?.isChangeOrigin === !0)) return null;
            let i = r.tr;
            return ze(i, n.doc, !0), e.every(e => !e.docChanged || e.getMeta(`addToHistory`) === !1) && i.setMeta(`addToHistory`, !1), i.docChanged ? i : null
        },
        props: {
            ...p.props,
            handleClickOn(e, t, n, r, i, a) {
                return !a || n.type.name !== `writing_block_image` ? !1 : (e.dispatch(e.state.tr.setSelection(D.create(e.state.doc, r))), e.editable ? e.focus() : e.nodeDOM(r)?.focus({
                    preventScroll: !0
                }), !0)
            },
            handleDoubleClickOn(e, t, n, r, i, a) {
                return a && n.type.name === `writing_block_image` && m(r)
            },
            handleDOMEvents: {
                ...p.props.handleDOMEvents,
                dragstart(e, r) {
                    let a = e.dom.ownerDocument.defaultView,
                        o = r.target;
                    if (!t.blockImages || !e.editable || a == null || !(o instanceof a.Node)) return !1;
                    let s = [...n].find(e => e.nodeView.dom.contains(o)),
                        c = s?.position();
                    return c != null && (h(e, c), e.dispatch(e.state.tr.setSelection(D.create(e.state.doc, c))), i?.destroy(), i = ct(e), s != null && i.start(s.nodeView.dom, r.dataTransfer)), !1
                },
                dragover(e, n) {
                    let {
                        selection: r
                    } = e.state;
                    return t.blockImages && e.editable && (e.dragging != null && r instanceof D && r.node.type.name === `writing_block_image` || Array.from(n.dataTransfer?.items ?? []).some(e => e.kind === `file` && e.type.startsWith(`image/`))) ? (i ??= ct(e), i.show(n)) : i?.hideIndicator(), !1
                },
                dragleave(e, t) {
                    let n = e.dom.ownerDocument.defaultView;
                    return (n == null || !(t.relatedTarget instanceof n.Node) || !e.dom.contains(t.relatedTarget)) && i?.hideIndicator(), !1
                },
                dragend() {
                    return i?.destroy(), i = null, !1
                },
                drop(e, n) {
                    return i?.destroy(), i = null, a = t.blockImages && e.dragging != null ? n : null, !1
                },
                keydown(e, t) {
                    p.props.handleDOMEvents?.keydown?.call(p, e, t);
                    let {
                        selection: n
                    } = e.state;
                    if (t.key !== ` ` || t.altKey || t.ctrlKey || t.metaKey || t.shiftKey || t.isComposing || !(n instanceof D) || t.target !== e.dom && t.target !== e.nodeDOM(n.from)) return !1;
                    let r = m(n.from);
                    return r && t.preventDefault(), r
                }
            },
            handleDrop(e, n, i, o) {
                let s = a === n || e.dragging != null;
                a = null;
                let c = _t(n.dataTransfer),
                    l = t.blockImages ? st(e, n) : e.posAtCoords({
                        left: n.clientX,
                        top: n.clientY
                    })?.pos,
                    {
                        selection: u
                    } = e.state;
                if (t.blockImages && e.editable && !n.defaultPrevented && (o || s) && l != null && u instanceof D && u.node.type.name === `writing_block_image`) {
                    if (n.preventDefault(), n.stopPropagation(), o && l >= u.from && l <= u.to) return !0;
                    h(e, u.from);
                    let t = e.state.doc.nodeAt(u.from);
                    if (t == null) return !0;
                    let i = o ? t : t.type.create({
                            ...t.attrs,
                            imageId: crypto.randomUUID()
                        }, t.content, t.marks),
                        a = ee(e.state.tr),
                        {
                            $from: s
                        } = u;
                    o && (s.depth === 1 && s.parent.type.name === `paragraph` && s.parent.childCount === 1 ? a.delete(s.before(), s.after()) : a.deleteSelection());
                    let c = a.doc.resolve(a.mapping.map(l)),
                        d = c.depth > 1 ? c.after(1) : c.pos,
                        f = e.state.schema.nodes.paragraph.createChecked(null, i);
                    return a.replaceRange(d, d, new w(r.from(f), 0, 0)), a.doc.lastChild === f && a.insert(a.doc.content.size, e.state.schema.nodes.paragraph.createChecked()), a.doc.descendants((e, t) => {
                        e === i && a.setSelection(D.create(a.doc, t))
                    }), e.dispatch(a.setMeta(`uiEvent`, `drop`).scrollIntoView()), e.focus(), !0
                }
                return !e.editable || n.defaultPrevented || o || c.length === 0 || l == null ? !1 : (n.preventDefault(), n.stopPropagation(), f(e, c, l), !0)
            },
            nodeViews: {
                [F](r, i, a) {
                    let o = t.blockImages ? r.attrs.imageId : null,
                        c = e => o == null ? e === r : e.attrs.imageId === o,
                        l = 0;
                    i.state.doc.descendants(e => {
                        (c(e) || o == null && t.blockImages && r.attrs.src != null && e.eq(r)) && l++
                    });
                    let u = (l === 1 ? [...n].find(e => c(e.node())) : null) ?? mt(r, i, e, (e, t) => f(i, e, t), {
                        ...t,
                        onUploadCompleted(e) {
                            let {
                                imageId: n,
                                src: r,
                                naturalWidth: i,
                                naturalHeight: a
                            } = e.attrs;
                            t.blockImages && n != null && s.set(n, {
                                src: r,
                                naturalWidth: i,
                                naturalHeight: a
                            })
                        }
                    });
                    return u.attach(a, r), n.add(u), {
                        ...u.nodeView,
                        destroy() {
                            u.detach(a)
                        }
                    }
                }
            }
        },
        view() {
            return {
                update(e) {
                    e.editable || (i?.destroy(), i = null);
                    let t = c;
                    c = !1;
                    for (let e of n) e.position() == null ? (n.delete(e), e.destroy()) : e.refresh();
                    !t || !e.editable || s.size === 0 || (e.state.doc.descendants(e => {
                        e.type.name === `writing_block_image` && e.attrs.src == null && s.has(e.attrs.imageId) && u.add(e.attrs.imageId)
                    }), !(l || u.size === 0) && (l = !0, queueMicrotask(() => {
                        l = !1;
                        let t = new Set(u);
                        if (u.clear(), e.isDestroyed || !e.editable) return;
                        let n = e.state.tr.setMeta(`addToHistory`, !1),
                            r = new Map;
                        n.doc.descendants((e, n) => {
                            if (e.type.name !== `writing_block_image` || !t.has(e.attrs.imageId)) return;
                            let {
                                imageId: i
                            } = e.attrs;
                            r.set(i, r.has(i) ? null : n)
                        });
                        for (let [e, t] of r) {
                            if (t == null || n.doc.nodeAt(t)?.attrs.src != null) continue;
                            let r = s.get(e);
                            if (r != null)
                                for (let [e, i] of Object.entries(r)) n.setNodeAttribute(t, e, i)
                        }
                        n.docChanged && e.dispatch(n)
                    })))
                },
                destroy() {
                    i?.destroy();
                    for (let e of n) e.destroy();
                    n.clear()
                }
            }
        }
    })
}

function _t(e) {
    let t = Array.from(e?.files ?? []);
    if (t.length === 0)
        for (let n of Array.from(e?.items ?? [])) {
            let e = n.kind === `file` ? n.getAsFile() : null;
            e != null && t.push(e)
        }
    return t.every(ut) ? t : []
}
var vt, yt = e((() => {
        k(), S(), i(), Be(), Ye(), lt(), pt(), ht(), je(), P(), vt = new s(`multiplayer-images`)
    })),
    bt, xt = e((() => {
        n(), bt = class {
            constructor(e) {
                t(this, `options`, void 0), t(this, `connection`, null), t(this, `stopObservingAccount`, void 0), t(this, `unsubscribe`, null), t(this, `listeners`, new Set), t(this, `snapshot`, void 0), t(this, `getSnapshot`, () => this.snapshot), t(this, `subscribe`, e => (this.listeners.add(e), () => {
                    this.listeners.delete(e)
                })), t(this, `connect`, () => {
                    if (this.connection != null) return this.disconnect;
                    let e = new AbortController;
                    this.connection = e;
                    let t = t => {
                        this.connection === e && this.disconnect(t instanceof Error ? t : Error(`The document could not be opened.`))
                    };
                    try {
                        this.stopObservingAccount = this.options.onConnect?.(e.signal), this.publish(this.snapshotFor(this.options.retainedSession ?? null)), this.options.retainedSession == null ? this.options.open(e.signal).then(t => {
                            if (this.connection !== e) {
                                this.close(t);
                                return
                            }
                            this.adopt(t)
                        }).catch(t) : this.adopt(this.options.retainedSession)
                    } catch (e) {
                        t(e)
                    }
                    return this.disconnect
                }), t(this, `disconnect`, (e = null) => {
                    let t = this.snapshot.session,
                        n = this.connection;
                    this.connection = null, n?.abort(), this.stopObservingAccount?.(), this.stopObservingAccount = void 0, this.unsubscribe?.(), this.unsubscribe = null, t != null && t !== this.options.retainedSession && this.close(t), this.publish({
                        ...this.snapshotFor(null),
                        error: e
                    })
                }), t(this, `retry`, () => {
                    this.connection != null && this.snapshot.session != null ? this.snapshot.session.retry() : this.connect()
                }), t(this, `reportActivity`, e => {
                    !e.isTrusted || document.visibilityState === `hidden` || (this.snapshot.error ?? (this.connect(), this.snapshot.session?.reportActivity()))
                }), this.options = e, this.snapshot = this.snapshotFor(e.retainedSession ?? null)
            }
            adopt(e) {
                let t = this.connection,
                    n = () => {
                        this.connection === t && t != null && this.publish(this.snapshotFor(e))
                    },
                    r = e.subscribeState(n),
                    i = e.subscribeToParticipants(n);
                this.unsubscribe = () => {
                    r(), i()
                }, n(), this.connection != null && this.snapshot.session === e && e.connect(this.options.documentId)
            }
            snapshotFor(e) {
                return {
                    session: e,
                    state: e?.state ?? null,
                    initialized: e?.initialized ?? !1,
                    participants: e?.participants,
                    error: null,
                    retry: this.retry,
                    reportActivity: this.reportActivity
                }
            }
            publish(e) {
                this.snapshot = e;
                for (let e of this.listeners) e()
            }
            close(e) {
                e.destroy().catch(e => {
                    this.options.onCloseError?.(e)
                })
            }
        }
    })),
    St, Ct, wt, Tt = e((() => {
        (function(e) {
            e[e.IDLE = 0] = `IDLE`, e[e.CONNECTING = 1] = `CONNECTING`, e[e.SYNCHRONIZING = 2] = `SYNCHRONIZING`, e[e.READY = 3] = `READY`, e[e.RETRYING = 4] = `RETRYING`, e[e.INACTIVE = 5] = `INACTIVE`, e[e.SUSPENDED = 6] = `SUSPENDED`, e[e.FAILED = 7] = `FAILED`, e[e.CLOSED = 8] = `CLOSED`, e[e.FAILED_RETRYABLE = 9] = `FAILED_RETRYABLE`, e[e.FAILED_NON_RETRYABLE = 10] = `FAILED_NON_RETRYABLE`, e[e.SYNCHRONIZED = 11] = `SYNCHRONIZED`
        })(St ||= {}), (function(e) {
            e[e.CONNECTION = 0] = `CONNECTION`, e[e.PROTOCOL = 1] = `PROTOCOL`, e[e.DOCUMENT_UNAVAILABLE = 2] = `DOCUMENT_UNAVAILABLE`, e[e.EDITOR = 3] = `EDITOR`, e[e.PERSISTENCE = 4] = `PERSISTENCE`
        })(Ct ||= {}), (function(e) {
            e[e.UNKNOWN = 0] = `UNKNOWN`, e[e.NETWORK = 1] = `NETWORK`, e[e.SYNCHRONIZATION_TIMEOUT = 2] = `SYNCHRONIZATION_TIMEOUT`, e[e.GRANT_EXPIRED = 3] = `GRANT_EXPIRED`, e[e.ACCESS_DENIED = 4] = `ACCESS_DENIED`, e[e.INVALID_RESPONSE = 5] = `INVALID_RESPONSE`, e[e.HOST_REJECTED = 6] = `HOST_REJECTED`, e[e.DOCUMENT_UNAVAILABLE = 7] = `DOCUMENT_UNAVAILABLE`, e[e.UPDATE_REJECTED = 8] = `UPDATE_REJECTED`, e[e.SERVER_PERSISTENCE = 9] = `SERVER_PERSISTENCE`, e[e.CHECKPOINT = 10] = `CHECKPOINT`, e[e.LOCAL_PERSISTENCE = 11] = `LOCAL_PERSISTENCE`, e[e.EDITOR = 12] = `EDITOR`
        })(wt ||= {})
    })),
    Et, Dt = e((() => {
        (function(e) {
            e[e.UNKNOWN = 0] = `UNKNOWN`, e[e.RETRYABLE = 1] = `RETRYABLE`, e[e.GRANT_EXPIRED = 2] = `GRANT_EXPIRED`, e[e.ADMISSION_DENIED = 3] = `ADMISSION_DENIED`, e[e.INVALID_RESPONSE = 4] = `INVALID_RESPONSE`, e[e.HOST_REJECTED = 5] = `HOST_REJECTED`
        })(Et ||= {})
    }));

function Ot(e) {
    return e?.failure?.kind === Ct.CONNECTION && (e.failure.connectionReason === Et.UNKNOWN || e.failure.connectionReason === Et.RETRYABLE || e.failure.connectionReason === Et.GRANT_EXPIRED) ? `disconnected` : e?.error == null ? e?.synchronized ? `connected` : `connecting` : `error`
}

function kt(e, t) {
    if (e?.schemaCompatible === !1) return `unsupported`;
    let n = Ot(e) === `disconnected`;
    return e?.error != null && !n ? `view-only` : t ? e?.canEdit ? `editable` : n ? `disconnected` : `view-only` : n ? `disconnected` : `connecting`
}
var At = e((() => {
        Tt(), Dt()
    })),
    jt = e((() => {
        pe(), Pe(), de(), Re(), je(), yt(), pt(), N(), xt(), At()
    }));
export {
    L as A, Q as C, Y as D, G as E, B as O, je as S, pe as T, Me as _, Et as a, Te as b, Ct as c, bt as d, xt as f, Le as g, Re as h, At as i, z as j, V as k, wt as l, yt as m, Ot as n, Dt as o, gt as p, kt as r, St as s, jt as t, Tt as u, Pe as v, fe as w, we as x, Ee as y
};
//# sourceMappingURL=2d39f94f-l9kjl7wrlvb50rln.js.map
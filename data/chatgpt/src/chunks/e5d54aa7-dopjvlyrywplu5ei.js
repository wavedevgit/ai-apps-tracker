import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Cnt as n,
    Eat as r,
    Hot as i,
    Vot as a,
    cst as o,
    d1 as s,
    e5 as c,
    jnt as l,
    m5 as u,
    mZ as d,
    mnt as ee,
    sst as te,
    u1 as f,
    u5 as p,
    wat as m,
    yZ as ne
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    ARn as re,
    JSt as ie,
    ORn as ae,
    Tzn as oe,
    XSt as se,
    Yht as ce,
    _Gn as le,
    aVn as ue,
    agt as de,
    fGn as fe,
    fzn as pe,
    hGn as me,
    hzn as he,
    iGn as ge,
    iVn as h,
    igt as _e,
    mGn as ve,
    nGn as ye,
    qht as be
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    At as xe,
    G as Se,
    J as Ce,
    K as g,
    Ot as we,
    Q as Te,
    Y as _,
    bt as v,
    kt as Ee,
    lt as De,
    ot as Oe,
    rt as ke,
    ut as y,
    xt as Ae
} from "./82782bc9-loong612qtaq7sd9.js";
import {
    NS as je,
    bS as Me,
    cS as Ne,
    rw as b,
    uS as Pe
} from "./8b34dbc2-bgocf3s6t6l67twq.js";
import {
    n as Fe,
    t as Ie
} from "./fc5e7148-dmws1ihmy0jqoelw.js";
import {
    a as x,
    i as S,
    n as C,
    o as w,
    r as Le,
    t as T
} from "./373ddd65-o5ueta5lk6m8a4cj.js";
import {
    a as E,
    i as Re,
    n as ze,
    o as Be,
    t as D
} from "./6afb0137-bzxsac0gs9k0euza.js";
import {
    r as Ve,
    t as He
} from "./ac827dee-i5xcrxomxr1hvlf5.js";
import {
    _ as O,
    a as Ue,
    c as k,
    d as A,
    f as We,
    g as Ge,
    h as Ke,
    i as qe,
    l as Je,
    m as j,
    n as Ye,
    o as Xe,
    p as M,
    r as Ze,
    s as N,
    t as Qe,
    u as $e,
    v as P
} from "./4813494d-fds3pxghcnmm9q98.js";
import {
    i as et,
    n as tt,
    r as nt,
    t as rt
} from "./5ab42519-j98la4h3yh0pir32.js";

function F(e, t) {
    let n = [],
        r = [];
    for (let t of e.marks) {
        if (t.type.name === it) {
            n.push(t);
            continue
        }
        r.push(t)
    }
    return e.mark([...r, t, ...n])
}
var it, I = e((() => {
        C(), it = T.proseMirrorMarkName()
    })),
    L, at = e((() => {
        I(), w(), L = class extends S {
            unistNodeName() {
                return `link`
            }
            static proseMirrorMarkName() {
                return `link`
            }
            proseMirrorMarkSpec() {
                return {
                    attrs: {
                        href: {},
                        title: {
                            default: null
                        },
                        disabled: {
                            default: !0
                        }
                    },
                    inclusive: !1,
                    parseDOM: [{
                        tag: `a[href]`,
                        getAttrs(e) {
                            return {
                                href: e.getAttribute(`href`),
                                title: e.getAttribute(`title`)
                            }
                        }
                    }],
                    toDOM(e) {
                        return [`a`, {
                            ...e.attrs,
                            ...e.attrs.disabled ? {
                                href: void 0
                            } : {}
                        }]
                    }
                }
            }
            unistNodeToProseMirrorNodes({
                node: e,
                convertedChildren: t,
                schema: n
            }) {
                let {
                    url: r,
                    title: i
                } = e;
                return t.map(e => F(e, n.marks[this.proseMirrorMarkName()].create({
                    href: r,
                    title: i
                })))
            }
            processConvertedUnistNode(e, t) {
                return {
                    type: this.unistNodeName(),
                    url: t.attrs.href,
                    ...t.attrs.title != null && {
                        title: t.attrs.title
                    },
                    children: [e]
                }
            }
        }
    })),
    ot, st = e((() => {
        y(), g(), P(), w(), ot = class extends x {
            unistNodeName() {
                return `blockquote`
            }
            static proseMirrorNodeName() {
                return `blockquote`
            }
            proseMirrorNodeSpec() {
                return {
                    content: `block+`,
                    group: `block`,
                    parseDOM: [{
                        tag: `blockquote`
                    }],
                    toDOM() {
                        return [`blockquote`, 0]
                    }
                }
            }
            proseMirrorInputRules(e) {
                return [_(/^\s{0,3}>\s$/, e.nodes[this.proseMirrorNodeName()])]
            }
            proseMirrorKeymap(e) {
                return {
                    "Mod->": Ae(e.nodes[this.proseMirrorNodeName()])
                }
            }
            unistNodeToProseMirrorNodes({
                schema: e,
                convertedChildren: t,
                attrs: n
            }) {
                return O(this.proseMirrorNodeName(), e, t, n)
            }
            proseMirrorNodeToUnistNodes(e, t) {
                return [{
                    type: this.unistNodeName(),
                    children: t
                }]
            }
        }
    }));

function ct(e, t, n, r) {
    for (let i = 0; i < t.length; i++) {
        let {
            $from: a,
            $to: o
        } = t[i], s = a.depth === 0 && e.inlineContent && e.type.allowsMarkType(n);
        if (e.nodesBetween(a.pos, o.pos, (e, t) => {
                if (s || !r && e.isAtom && e.isInline && t >= a.pos && t + e.nodeSize <= o.pos) return !1;
                s = e.inlineContent && e.type.allowsMarkType(n)
            }), s) return !0
    }
    return !1
}
var lt = e((() => {}));

function ut(e) {
    return /^\s*/.exec(e)?.[0]?.length ?? 0
}

function dt(e) {
    return /\s*$/.exec(e)?.[0]?.length ?? 0
}

function ft(e, t, n) {
    for (; t > 0;) {
        let r = t - 1;
        if (!e.rangeHasMark(r, t, n)) break;
        t = r
    }
    return t
}

function pt(e, t, n) {
    for (; t < e.content.size && e.rangeHasMark(t, t + 1, n);) t += 1;
    return t
}

function mt(e, t, n, r = null) {
    let {
        selection: i
    } = e;
    if (!(i instanceof Ee)) return !1;
    let {
        empty: a,
        $cursor: o,
        ranges: s
    } = i;
    if (a && !o || !ct(e.doc, s, n, !0)) return !1;
    if (o) {
        let i = b(e.tr);
        n.isInSet(e.storedMarks || o.marks()) ? t(i.removeStoredMark(n)) : t(i.addStoredMark(n.create(r)))
    } else {
        let i = b(e.tr),
            a = !s.some(t => e.doc.rangeHasMark(t.$from.pos, t.$to.pos, n));
        for (let t = 0; t < s.length; t++) {
            let {
                $from: o,
                $to: c
            } = s[t], l = o.pos, u = c.pos, d = e.doc.textBetween(l, u, `
`);
            if (/^\s*$/.test(d)) continue;
            let ee = o.nodeBefore?.text ?? ``,
                te = o.nodeAfter?.text ?? ``,
                f = c.nodeBefore?.text ?? ``,
                p = c.nodeAfter?.text ?? ``;
            if (a) {
                let t = ut(te),
                    a = dt(f);
                l + t < u && (l += t, u -= a), l = ft(e.doc, l, n), u = pt(e.doc, u, n), i.removeMark(l, u, e.schema.marks[T.proseMirrorMarkName()]), i.addMark(l, u, n.create(r))
            } else {
                let e = dt(ee),
                    t = ut(p);
                l -= e, u += t, i.removeMark(l, u, n)
            }
        }
        t(i.scrollIntoView())
    }
    return !0
}

function ht(e, t = null) {
    return (n, r) => !r || mt(n, r, e, t)
}
var gt = e((() => {
        lt(), C(), Ne(), xe()
    })),
    _t = e((() => {
        je()
    })),
    R, z = e((() => {
        g(), xe(), _t(), i(), R = class e extends Se {
            constructor(e, t, n = {}) {
                super(e, (e, t, n, r) => this.markHandler(e, t, n, r)), a(this, `markType`, void 0), a(this, `matchStartOffset`, void 0), a(this, `textGroup`, void 0), a(this, `trailingTextGroup`, void 0), this.markType = t, this.matchStartOffset = n.matchStartOffset ?? (() => 0), this.textGroup = n.textGroup ?? 1, this.trailingTextGroup = n.trailingTextGroup ?? 2
            }
            static priority(t) {
                return +(t instanceof e && t.markType.name === `code`)
            }
            static markApplies(e, t, n) {
                for (let r of t) {
                    let {
                        $from: t,
                        $to: i
                    } = r, a = t.depth === 0 && e.type.allowsMarkType(n);
                    if (e.nodesBetween(t.pos, i.pos, e => a ? !1 : (a = e.inlineContent && e.type.allowsMarkType(n), !0)), a) return !0
                }
                return !1
            }
            markHandler(t, n, r, i) {
                if (!(t.selection instanceof Ee)) return null;
                let a = r + this.matchStartOffset(n),
                    o = n[this.textGroup];
                if (typeof o != `string`) return null;
                let s = t.schema.marks[oe];
                if (s != null && this.markType !== s && t.doc.rangeHasMark(a, i, s)) return null;
                let c = [new we(t.doc.resolve(a), t.doc.resolve(i))];
                if (!e.markApplies(t.doc, c, this.markType)) return null;
                let l = t.doc.nodeAt(a)?.marks.map(e => e.type) ?? [];
                l.push(this.markType);
                let u = t.tr.replaceWith(a, i, this.markType.schema.text(o));
                for (let e of l) u.addMark(u.mapping.map(a), u.mapping.map(i), e.create(null));
                for (let e of l) u.removeStoredMark(e);
                return u.insertText(n[this.trailingTextGroup] ?? ``)
            }
        }
    })),
    B, vt = e((() => {
        I(), gt(), w(), z(), B = class extends S {
            unistNodeName() {
                return `strong`
            }
            static proseMirrorMarkName() {
                return `strong`
            }
            proseMirrorMarkSpec() {
                return {
                    parseDOM: [{
                        tag: `b`
                    }, {
                        tag: `strong`
                    }, {
                        style: `font-weight`,
                        getAttrs: e => /^(bold(er)?|[5-9]\d{2,})$/.test(e) && null
                    }],
                    toDOM() {
                        return [`strong`]
                    }
                }
            }
            proseMirrorInputRules(e) {
                return [new R(/\*\*([^\s](?:.*[^\s])?)\*\*([\s\S])$/, e.marks[this.proseMirrorMarkName()]), new R(/__([^\s](?:.*[^\s])?)__([\s\S])$/, e.marks[this.proseMirrorMarkName()])]
            }
            proseMirrorKeymap(e) {
                let t = e.marks[this.proseMirrorMarkName()];
                return {
                    "Mod-b": ht(t),
                    "Mod-B": ht(t)
                }
            }
            unistNodeToProseMirrorNodes({
                schema: e,
                convertedChildren: t,
                attrs: n
            }) {
                return t.map(t => F(t, e.marks[this.proseMirrorMarkName()].create(n)))
            }
            processConvertedUnistNode(e) {
                return {
                    type: this.unistNodeName(),
                    children: [e]
                }
            }
        }
    }));

function yt(e, t, n) {
    function r(r) {
        return r == null || r === wt ? (e.exit(H), t(r)) : n(r)
    }
    return t => t === V ? (e.enter(H), e.consume(t), r) : n(t)
}

function bt() {
    return {
        text: {
            [V]: {
                name: H,
                tokenize: yt
            }
        }
    }
}

function xt() {
    let e = this.data();
    return e.micromarkExtensions ??= [], e.micromarkExtensions.push(bt()), e.fromMarkdownExtensions ??= [], e.fromMarkdownExtensions.push({
        enter: {
            [H](e) {
                this.enter({
                    type: `break`
                }, e), this.exit(e)
            }
        }
    }), e.toMarkdownExtensions ??= [], e.toMarkdownExtensions.push({
        handlers: {
            break: Tt
        }
    }), e => {
        ge(e, `tableCell`, e => {
            e.children = e.children.map(e => St(e) ? Ct(e) : e)
        })
    }
}

function St(e) {
    return e.type === `html` && /^<br\s*\/?\s*>$/i.test(e.value)
}

function Ct(e) {
    return {
        type: `break`,
        position: e.position
    }
}
var V, wt, H, Tt, Et, Dt = e((() => {
    C(), ee(), pe(), y(), ye(), P(), w(), V = 92, wt = 10, H = `backslashEscape`, Tt = (e, t, n, r) => n.stack.includes(`tableCell`) ? `<br>` : he.break(e, t, n, r), Et = class extends x {
        unistNodeName() {
            return `break`
        }
        static proseMirrorNodeName() {
            return `hard_break`
        }
        proseMirrorNodeSpec() {
            return {
                inline: !0,
                group: `inline`,
                selectable: !1,
                parseDOM: [{
                    tag: `br`
                }],
                marks: T.proseMirrorMarkName(),
                toDOM() {
                    return [`br`]
                }
            }
        }
        proseMirrorKeymap(e) {
            let t = Oe(De, (t, n) => (n && n(t.tr.replaceSelectionWith(e.nodes[this.proseMirrorNodeName()].create()).scrollIntoView()), !0));
            return {
                "Mod-Enter": t,
                "Shift-Enter": t,
                ...(l() || n()) && {
                    "Ctrl-Enter": t
                }
            }
        }
        unistNodeToProseMirrorNodes({
            schema: e,
            convertedChildren: t,
            attrs: n
        }) {
            return O(this.proseMirrorNodeName(), e, t, n)
        }
        proseMirrorNodeToUnistNodes() {
            return [{
                type: this.unistNodeName()
            }]
        }
        unifiedInitializationHook(e) {
            return e.use(xt)
        }
    }
}));

function Ot(e, t) {
    let {
        start: n,
        end: r
    } = e;
    return n == null || r == null ? null : {
        start: n + 4 + (t.lang ?? ``).length,
        end: r - 4
    }
}
var U, W, kt = e((() => {
        ue(), C(), g(), P(), w(), Ge(), U = `code_block`, W = class extends x {
            dependencies() {
                return [new Ke]
            }
            unistNodeName() {
                return `code`
            }
            static proseMirrorNodeName() {
                return U
            }
            proseMirrorNodeSpec() {
                return {
                    content: `text*`,
                    group: `block`,
                    code: !0,
                    defining: !0,
                    marks: [T.proseMirrorMarkName()].join(` `),
                    attrs: {
                        lang: {
                            default: null
                        },
                        isDarkMode: {
                            default: null
                        }
                    },
                    parseDOM: [{
                        tag: `pre`,
                        preserveWhitespace: `full`
                    }],
                    toDOM() {
                        return [`pre`, [`code`, 0]]
                    }
                }
            }
            proseMirrorInputRules(e) {
                return [Ce(/^\s{0,3}```$/, e.nodes[this.proseMirrorNodeName()])]
            }
            unistNodeToProseMirrorNodes({
                node: e,
                attrs: t,
                schema: n
            }) {
                let {
                    lang: r
                } = e;
                return O(this.proseMirrorNodeName(), n, h(e, n, {
                    ...t,
                    ...Ot(t, e) ?? {}
                }), {
                    lang: r,
                    ...t
                })
            }
            proseMirrorNodeToUnistNodes(e, t) {
                return [{
                    type: this.unistNodeName(),
                    value: t.map(e => e.type === `startend` ? e.children.map(e => e.value).join(``) : e.value).join(``),
                    lang: e.attrs.lang
                }]
            }
        }
    })),
    G, At = e((() => {
        ne(), ie(), r(), w(), G = class extends x {
            unistNodeName() {
                return `textDirective`
            }
            customDirectiveName() {
                return d
            }
            static proseMirrorNodeName() {
                return d
            }
            proseMirrorNodeSpec() {
                return {
                    group: `inline`,
                    inline: !0,
                    content: `inline*`,
                    atom: !0,
                    attrs: {
                        index: {
                            default: null
                        },
                        displayLayout: {
                            default: `inline`
                        }
                    },
                    toDOM: e => [`span`, {
                        "data-type": `content-reference`,
                        "data-content-reference-index": e.attrs.index,
                        "data-display-layout": e.attrs.displayLayout
                    }, `:contentReference[oaicite:${e.attrs.index}]{index="${e.attrs.index}" displayLayout="${e.attrs.displayLayout}"}`],
                    parseDOM: [{
                        tag: `span[data-type="content-reference"]`,
                        getAttrs(e) {
                            return {
                                index: e.getAttribute(`data-index`),
                                displayLayout: e.getAttribute(`data-display-layout`) || `inline`
                            }
                        }
                    }]
                }
            }
            unistNodeToProseMirrorNodes({
                node: e,
                schema: t,
                convertedChildren: n
            }) {
                if (!se(e) || e.name !== `contentReference` || e.type !== this.unistNodeName()) return m.addError(`ContentReferenceExtension: unistNodeToProseMirrorNodes: node is not a directive node or name is not contentReference`, e), null;
                let r = {
                    index: e.attributes?.index,
                    displayLayout: e.attributes?.displayLayout ?? `inline`
                };
                return t.nodes.contentReference.create(r, n)
            }
            proseMirrorNodeToUnistNodes(e, t) {
                if (t.length !== 1) return console.warn(`ContentReferenceExtension: proseMirrorNodeToUnistNodes: convertedChildren.length != 1`, t), [];
                let n = [{
                    type: `text`,
                    value: t[0].children[0].value
                }];
                return [{
                    type: `textDirective`,
                    name: d,
                    attributes: {
                        index: e.attrs.index,
                        displayLayout: e.attrs.displayLayout
                    },
                    children: n,
                    data: {
                        hName: d,
                        hProperties: {
                            displayLayout: e.attrs.displayLayout,
                            index: e.attrs.index
                        }
                    }
                }]
            }
        }
    })),
    jt, Mt = e((() => {
        g(), P(), w(), jt = class extends x {
            unistNodeName() {
                return `thematicBreak`
            }
            static proseMirrorNodeName() {
                return `horizontal_rule`
            }
            proseMirrorNodeSpec() {
                return {
                    group: `block`,
                    selectable: !1,
                    parseDOM: [{
                        tag: `hr`
                    }],
                    toDOM() {
                        return [`div`, [`hr`]]
                    }
                }
            }
            proseMirrorInputRules(e) {
                return [new Se(/^\s{0,3}(?:\*\*\*|---|___)\n$/, (t, n, r, i) => t.tr.replaceWith(r, i, O(this.proseMirrorNodeName(), e, []) ?? []))]
            }
            proseMirrorKeymap(e) {
                return {
                    "Mod-_": (t, n) => (n && n(t.tr.replaceSelectionWith(e.nodes[this.proseMirrorNodeName()].create()).scrollIntoView()), !0)
                }
            }
            unistNodeToProseMirrorNodes({
                schema: e,
                convertedChildren: t,
                attrs: n
            }) {
                return O(this.proseMirrorNodeName(), e, t, n)
            }
            proseMirrorNodeToUnistNodes() {
                return [{
                    type: this.unistNodeName()
                }]
            }
        }
    })),
    Nt, Pt = e((() => {
        ue(), me(), y(), w(), z(), Nt = class extends S {
            unistNodeName() {
                return `inlineCode`
            }
            static proseMirrorMarkName() {
                return `code`
            }
            proseMirrorMarkSpec() {
                return {
                    inclusive: !1,
                    parseDOM: [{
                        tag: `code`
                    }],
                    toDOM() {
                        return [`code`, {
                            dir: `ltr`
                        }]
                    }
                }
            }
            proseMirrorInputRules(e) {
                return [new R(/`([^\s](?:.*[^\s])?)`([\s\S])$/, e.marks[this.proseMirrorMarkName()])]
            }
            proseMirrorKeymap(e) {
                let t = e.marks[this.proseMirrorMarkName()];
                return {
                    "Ctrl-`": v(t)
                }
            }
            unistNodeToProseMirrorNodes({
                node: e,
                schema: t,
                attrs: n
            }) {
                if (e.type !== this.unistNodeName()) return [];
                let r = h(e, t, n, [t.marks[this.proseMirrorMarkName()].create(n)]);
                return r ? [r] : []
            }
            processConvertedUnistNode(e) {
                return `children` in e ? {
                    ...e,
                    children: e.children.map(e => this.processConvertedUnistNode(e))
                } : {
                    type: this.unistNodeName(),
                    value: le(e)
                }
            }
        }
    })),
    Ft, It = e((() => {
        P(), w(), Ft = class extends x {
            unistNodeName() {
                return `inlineMath`
            }
            static proseMirrorNodeName() {
                return `inline_math`
            }
            proseMirrorNodeSpec() {
                return {
                    group: `inline`,
                    inline: !0,
                    content: `text*`,
                    atom: !0,
                    attrs: {
                        latex: {
                            default: null
                        }
                    },
                    parseDOM: [{
                        tag: `span.inline-math`,
                        getAttrs(e) {
                            return {
                                latex: e.getAttribute(`latex`)
                            }
                        }
                    }],
                    toDOM() {
                        return [`span`, {
                            class: `inline-math`
                        }, 0]
                    }
                }
            }
            unistNodeToProseMirrorNodes({
                node: e,
                schema: t,
                convertedChildren: n,
                attrs: r
            }) {
                let {
                    value: i
                } = e;
                return O(this.proseMirrorNodeName(), t, n, {
                    ...r,
                    latex: i
                })
            }
            proseMirrorNodeToUnistNodes(e) {
                return [{
                    type: this.unistNodeName(),
                    value: e.attrs.latex
                }]
            }
        }
    })),
    K, Lt = e((() => {
        I(), y(), w(), z(), K = class extends S {
            unistNodeName() {
                return `emphasis`
            }
            static proseMirrorMarkName() {
                return `em`
            }
            proseMirrorMarkSpec() {
                return {
                    parseDOM: [{
                        tag: `i`
                    }, {
                        tag: `em`
                    }, {
                        style: `font-style`,
                        getAttrs: e => e === `italic` && null
                    }],
                    toDOM() {
                        return [`em`]
                    }
                }
            }
            proseMirrorInputRules(e) {
                return [new R(/(^|[^*])\*([^\s*](?:.*[^\s])?)\*([^*])$/, e.marks[this.proseMirrorMarkName()], {
                    matchStartOffset: e => e[1].length,
                    textGroup: 2,
                    trailingTextGroup: 3
                }), new R(/(^|[^_])_([^\s_](?:.*[^\s])?)_([^_])$/, e.marks[this.proseMirrorMarkName()], {
                    matchStartOffset: e => e[1].length,
                    textGroup: 2,
                    trailingTextGroup: 3
                })]
            }
            proseMirrorKeymap(e) {
                let t = e.marks[this.proseMirrorMarkName()];
                return {
                    "Mod-i": v(t),
                    "Mod-I": v(t)
                }
            }
            unistNodeToProseMirrorNodes({
                schema: e,
                convertedChildren: t,
                attrs: n
            }) {
                return t.map(t => F(t, e.marks[this.proseMirrorMarkName()].create(n)))
            }
            processConvertedUnistNode(e) {
                return {
                    type: this.unistNodeName(),
                    children: [e]
                }
            }
        }
    }));

function q(e) {
    return e.type === J
}

function Rt() {
    let e = this.data();
    e.fromMarkdownExtensions ??= [], e.fromMarkdownExtensions.push({
        enter: {
            lineEndingBlank(e) {
                this.enter({
                    type: J
                }, e)
            }
        },
        exit: {
            lineEndingBlank(e) {
                this.exit(e)
            }
        }
    });
    let t = (e, n = 0) => {
        if (!Be(e)) return;
        let {
            children: r
        } = e, i = 0, a = null, o = null, s = r.length;
        for (let c = 0; c < s; c++) {
            let l = r[c - i];
            t(l, n + 1);
            let {
                type: u
            } = l, d = c === s - 1 && u === J;
            if (u === J && a == null ? a = c : u !== J && a != null ? o = c : d && a != null && (o = c + 1), a != null && o != null) {
                let t = zt({
                    startIndex: a,
                    endIndex: o,
                    depth: n,
                    isLastChild: d,
                    parent: e
                });
                r.splice(a - i, t), a = null, o = null, i += t
            }
        }
    };
    return e => {
        t(e)
    }
}
var J, zt, Bt, Vt = e((() => {
        k(), P(), w(), E(), J = `lineEndingBlank`, zt = ({
            startIndex: e,
            endIndex: t,
            depth: n,
            isLastChild: r,
            parent: i = null
        }) => {
            let a = t - e;
            return n > 0 && i?.type !== `list` ? a : r || e === 0 ? a - Math.floor((a + 1) / 2) : a - Math.floor((a - 1) / 2)
        }, Bt = class extends x {
            unistNodeName() {
                return J
            }
            static proseMirrorNodeName() {
                return `paragraph`
            }
            proseMirrorNodeSpec() {
                return Ue
            }
            unistNodeToProseMirrorNodes({
                schema: e,
                convertedChildren: t,
                attrs: n
            }) {
                return O(this.proseMirrorNodeName(), e, t, n)
            }
            proseMirrorNodeToUnistNodes(e, t) {
                return [{
                    type: Xe,
                    children: t
                }]
            }
            unifiedInitializationHook(e) {
                return e.use(Rt)
            }
        }
    })),
    Ht, Ut = e((() => {
        P(), w(), Ht = class extends x {
            unistNodeName() {
                return `math`
            }
            static proseMirrorNodeName() {
                return `math_block`
            }
            proseMirrorNodeSpec() {
                return {
                    group: `block`,
                    content: `text*`,
                    atom: !0,
                    code: !0,
                    attrs: {
                        latex: {
                            default: null
                        }
                    },
                    parseDOM: [{
                        tag: `div.math-block`,
                        getAttrs(e) {
                            return {
                                latex: e.getAttribute(`latex`)
                            }
                        }
                    }],
                    toDOM() {
                        return [`div`, {
                            class: `math-block`
                        }, 0]
                    }
                }
            }
            unistNodeToProseMirrorNodes({
                node: e,
                schema: t,
                convertedChildren: n,
                attrs: r
            }) {
                let {
                    value: i
                } = e;
                return O(this.proseMirrorNodeName(), t, n, {
                    ...r,
                    latex: i
                })
            }
            proseMirrorNodeToUnistNodes(e) {
                return [{
                    type: this.unistNodeName(),
                    value: e.attrs.latex
                }]
            }
        }
    })),
    Y, Wt = e((() => {
        g(), Te(), P(), w(), j(), k(), $e(), Y = class e extends x {
            static unorderedListCommand(e) {
                return (t, n) => {
                    let r = e.nodes[this.proseMirrorNodeName()],
                        i = e.nodes.ordered_list,
                        a = e.nodes[M.proseMirrorNodeName()],
                        o = e.nodes[N.proseMirrorNodeName()];
                    if (!r) return !1;
                    let s = t,
                        c = () => s,
                        l = e => {
                            s = s.apply(e), n && n(e)
                        };
                    return We(c(), [r]) ? A(c, l, a, [i, r]) : !A(c, l, a, [i]) || !Je(c, l, o) ? !1 : ke(r)(c(), l)
                }
            }
            dependencies() {
                return [new M]
            }
            unistNodeName() {
                return `list`
            }
            unistToProseMirrorTest(e) {
                return e.type === this.unistNodeName() && e.ordered !== !0
            }
            static proseMirrorNodeName() {
                return `list`
            }
            proseMirrorNodeSpec() {
                return {
                    content: `list_item+`,
                    group: `block`,
                    attrs: {
                        spread: {
                            default: !1
                        }
                    },
                    parseDOM: [{
                        getAttrs(e) {
                            return {
                                spread: e.getAttribute(`data-spread`) === `true`
                            }
                        },
                        tag: `ul`
                    }],
                    toDOM(e) {
                        return [`ul`, {
                            "data-spread": e.attrs.spread
                        }, 0]
                    }
                }
            }
            proseMirrorInputRules(e) {
                return [_(/^\s{0,3}([-+*])\s$/, e.nodes[this.proseMirrorNodeName()])]
            }
            proseMirrorKeymap(t) {
                let n = e.unorderedListCommand(t);
                return {
                    "Shift-Mod-8": n,
                    "Alt-Mod-5": n
                }
            }
            unistNodeToProseMirrorNodes({
                node: e,
                schema: t,
                convertedChildren: n,
                attrs: r
            }) {
                let {
                    spread: i
                } = e;
                return O(this.proseMirrorNodeName(), t, n, {
                    ...r,
                    spread: i
                })
            }
            proseMirrorNodeToUnistNodes(e, t) {
                let n = e.attrs.spread;
                return [{
                    type: this.unistNodeName(),
                    ordered: !1,
                    spread: n,
                    children: t.map(e => (e.spread = n, e))
                }]
            }
        }
    })),
    Gt, Kt = e((() => {
        g(), Te(), P(), w(), j(), k(), $e(), Wt(), Gt = class e extends x {
            static orderedListCommand(e) {
                return (t, n) => {
                    let r = e.nodes[this.proseMirrorNodeName()],
                        i = e.nodes[Y.proseMirrorNodeName()],
                        a = e.nodes[M.proseMirrorNodeName()],
                        o = e.nodes[N.proseMirrorNodeName()];
                    if (!r) return !1;
                    let s = t,
                        c = () => s,
                        l = e => {
                            s = s.apply(e), n && n(e)
                        };
                    return We(c(), [r]) ? A(c, l, a, [r, i]) : !A(c, l, a, [i]) || !Je(c, l, o) ? !1 : ke(r)(c(), l)
                }
            }
            dependencies() {
                return [new M]
            }
            unistNodeName() {
                return `list`
            }
            unistToProseMirrorTest(e) {
                return e.type === this.unistNodeName() && e.ordered === !0
            }
            static proseMirrorNodeName() {
                return `ordered_list`
            }
            proseMirrorNodeSpec() {
                return {
                    content: `list_item+`,
                    group: `block`,
                    attrs: {
                        spread: {
                            default: !1
                        },
                        startingNumber: {
                            default: 1
                        }
                    },
                    parseDOM: [{
                        getAttrs(e) {
                            let t = e.getAttribute(`start`);
                            return {
                                spread: e.getAttribute(`data-spread`) === `true`,
                                startingNumber: t == null ? 1 : parseInt(t)
                            }
                        },
                        tag: `ol`
                    }],
                    toDOM(e) {
                        return [`ol`, {
                            "data-spread": e.attrs.spread,
                            start: e.attrs.startingNumber
                        }, 0]
                    }
                }
            }
            proseMirrorInputRules(e) {
                return [_(/^\s{0,3}(\d+)\.\s$/, e.nodes[this.proseMirrorNodeName()], e => ({
                    startingNumber: +e[1]
                }), (e, t) => t.childCount + t.attrs.startingNumber === +e[1])]
            }
            proseMirrorKeymap(t) {
                let n = e.orderedListCommand(t);
                return {
                    "Shift-Mod-9": n,
                    "Alt-Mod-4": n
                }
            }
            unistNodeToProseMirrorNodes({
                node: e,
                schema: t,
                convertedChildren: n,
                attrs: r
            }) {
                let {
                    spread: i,
                    start: a
                } = e;
                return O(this.proseMirrorNodeName(), t, n, {
                    ...r,
                    spread: i,
                    startingNumber: a ?? 1
                })
            }
            proseMirrorNodeToUnistNodes(e, t) {
                let n = e.attrs.spread;
                return [{
                    type: this.unistNodeName(),
                    ordered: !0,
                    spread: n,
                    start: e.attrs.startingNumber,
                    children: t.map(e => (e.spread = n, e))
                }]
            }
        }
    })),
    qt, Jt = e((() => {
        I(), w(), z(), qt = class extends S {
            unistNodeName() {
                return `delete`
            }
            static proseMirrorMarkName() {
                return `strikethrough`
            }
            proseMirrorMarkSpec() {
                return {
                    parseDOM: [{
                        tag: `s`
                    }, {
                        tag: `del`
                    }, {
                        style: `text-decoration`,
                        getAttrs: e => /(^|[\s])line-through([\s]|$)/.test(e) && null
                    }],
                    toDOM() {
                        return [`s`]
                    }
                }
            }
            proseMirrorInputRules(e) {
                return [new R(/~([^\s](?:.*[^\s~])?)~([^~])$/, e.marks[this.proseMirrorMarkName()]), new R(/~~([^\s](?:.*[^\s])?)~~([\s\S])$/, e.marks[this.proseMirrorMarkName()])]
            }
            unistNodeToProseMirrorNodes({
                schema: e,
                convertedChildren: t
            }) {
                return t.map(t => F(t, e.marks[this.proseMirrorMarkName()].create()))
            }
            processConvertedUnistNode(e) {
                return {
                    type: this.unistNodeName(),
                    children: [e]
                }
            }
        }
    }));

function Yt() {
    return e => {
        let t = -1;

        function n(e, n) {
            if (e.type === `tableRow` && t++, e.type === `tableCell`) {
                let r = e;
                r.data = {
                    ...r.data ?? {},
                    rowIndex: t,
                    columnIndex: n
                }
            }
        }

        function r(e) {
            if (Be(e))
                for (let t = 0; t < e.children.length; t++) {
                    let i = e.children[t];
                    n(i, t), r(i)
                }
        }
        r(e)
    }
}
var Xt = e((() => {
        E()
    })),
    X, Zt = e((() => {
        c(), P(), w(), X = class extends x {
            unistNodeName() {
                return `tableCell`
            }
            unistToProseMirrorTest(e) {
                return e.type === this.unistNodeName()
            }
            static proseMirrorNodeName() {
                return `table_cell`
            }
            proseMirrorNodeSpec() {
                return {
                    content: `inline*`,
                    attrs: {
                        rowIndex: {
                            default: null
                        },
                        columnIndex: {
                            default: null
                        },
                        colspan: {
                            default: 1
                        },
                        rowspan: {
                            default: 1
                        }
                    },
                    tableRole: `cell`,
                    isolating: !0,
                    parseDOM: [{
                        tag: `td`,
                        getAttrs(e) {
                            let t = e;
                            return {
                                colspan: p(t.getAttribute(`colspan`), 1),
                                rowspan: p(t.getAttribute(`rowspan`), 1)
                            }
                        }
                    }],
                    toDOM(e) {
                        let {
                            colspan: t,
                            rowspan: n
                        } = e.attrs, r = {
                            colspan: t === 1 ? void 0 : u(t, void 0),
                            rowspan: n === 1 ? void 0 : u(n, void 0)
                        };
                        return [e.attrs.rowIndex == null || e.attrs.rowIndex > 0 ? `td` : `th`, r, 0]
                    }
                }
            }
            proseMirrorInputRules(e) {
                return []
            }
            proseMirrorKeymap(e) {
                return {}
            }
            unistNodeToProseMirrorNodes({
                node: e,
                schema: t,
                convertedChildren: n,
                attrs: r
            }) {
                return O(this.proseMirrorNodeName(), t, n, {
                    ...r,
                    colspan: 1,
                    rowspan: 1,
                    rowIndex: e.data?.rowIndex,
                    columnIndex: e.data?.columnIndex
                })
            }
            proseMirrorNodeToUnistNodes(e, t) {
                return [{
                    type: this.unistNodeName(),
                    children: t,
                    data: {
                        rowIndex: e.attrs.rowIndex,
                        columnIndex: e.attrs.columnIndex
                    }
                }]
            }
        }
    })),
    Z, Qt = e((() => {
        P(), w(), Zt(), Z = class extends x {
            dependencies() {
                return [new X]
            }
            unistNodeName() {
                return `tableRow`
            }
            static proseMirrorNodeName() {
                return `table_row`
            }
            proseMirrorNodeSpec() {
                return {
                    content: `(table_cell+)`,
                    tableRole: `row`,
                    parseDOM: [{
                        tag: `tr`
                    }],
                    toDOM() {
                        return [`tr`, 0]
                    }
                }
            }
            proseMirrorInputRules(e) {
                return []
            }
            proseMirrorKeymap(e) {
                return {}
            }
            unistNodeToProseMirrorNodes({
                schema: e,
                convertedChildren: t,
                attrs: n
            }) {
                return O(this.proseMirrorNodeName(), e, t, n)
            }
            proseMirrorNodeToUnistNodes(e, t) {
                return [{
                    type: this.unistNodeName(),
                    children: t
                }]
            }
        }
    })),
    $t, en = e((() => {
        Xt(), P(), w(), Qt(), $t = class extends x {
            dependencies() {
                return [new Z]
            }
            unistNodeName() {
                return `table`
            }
            static proseMirrorNodeName() {
                return `table`
            }
            proseMirrorNodeSpec() {
                return {
                    content: `(table_row+)`,
                    tableRole: `table`,
                    isolating: !0,
                    group: `block`,
                    parseDOM: [{
                        tag: `table`
                    }],
                    toDOM() {
                        return [`table`, {
                                dir: `auto`
                            },
                            [`tbody`, 0]
                        ]
                    }
                }
            }
            proseMirrorInputRules(e) {
                return []
            }
            proseMirrorKeymap(e) {
                return {}
            }
            unistNodeToProseMirrorNodes({
                schema: e,
                convertedChildren: t,
                attrs: n
            }) {
                return O(this.proseMirrorNodeName(), e, t, n)
            }
            proseMirrorNodeToUnistNodes(e, t) {
                return [{
                    type: this.unistNodeName(),
                    align: [],
                    children: t
                }]
            }
            unifiedInitializationHook(e) {
                return e.use(Yt)
            }
        }
    }));

function tn(e, t) {
    if (!(e == null || t == null)) return {
        start: {
            ...e
        },
        end: {
            ...t
        }
    }
}
var nn, rn = e((() => {
        Vt(), te(), f(), ye(), nn = () => e => {
            ge(e, `list`, (e, t, n) => {
                if (n == null || t == null) return;
                let r = [],
                    i = [],
                    a = 0;
                for (; a < e.children.length;) {
                    let t = e.children[a];
                    if (q(t)) {
                        let t = [];
                        for (; a < e.children.length && q(e.children[a]);) {
                            let n = e.children[a];
                            if (!q(n)) break;
                            t.push(n), a++
                        }
                        if (i.length === 0) throw Error(`Unexpected state: currentListItems is empty after encountering blank lines.`);
                        let n = i[0],
                            c = o(s(i)),
                            l = tn(n.position?.start ?? e.position?.start, c.position?.end ?? e.position?.end),
                            u = {
                                type: `list`,
                                ordered: e.ordered,
                                start: e.start,
                                spread: e.spread,
                                children: i,
                                position: l
                            };
                        r.push(u), i = [], r.push(...t.map(e => ({
                            type: `lineEndingBlank`,
                            position: e.position
                        })))
                    } else i.push(t), a++
                }
                if (i.length > 0) {
                    let t = i[0],
                        n = i[i.length - 1],
                        a = tn(t.position?.start ?? e.position?.start, n.position?.end ?? e.position?.end),
                        o = {
                            type: `list`,
                            ordered: e.ordered,
                            start: e.start,
                            spread: e.spread,
                            children: i,
                            position: a
                        };
                    r.push(o)
                }
                n.children.splice(t, 1, ...r)
            })
        }
    })),
    an, on = e((() => {
        w(), ie(), r(), Re(), an = class extends x {
            unistNodeName() {
                return `textDirective`
            }
            customDirectiveName() {
                return D
            }
            static proseMirrorNodeName() {
                return D
            }
            proseMirrorNodeSpec() {
                return {
                    group: `inline`,
                    inline: !0,
                    atom: !0,
                    selectable: !1,
                    attrs: {
                        timestamp: {
                            default: null
                        }
                    },
                    toDOM: e => [`span`, {
                        "data-type": `hive-log`,
                        "data-timestamp": e.attrs.timestamp
                    }],
                    parseDOM: [{
                        tag: `span[data-type="hive-log"]`,
                        getAttrs(e) {
                            return {
                                timestamp: e.getAttribute(`data-timestamp`)
                            }
                        }
                    }]
                }
            }
            unistNodeToProseMirrorNodes({
                node: e,
                schema: t,
                convertedChildren: n
            }) {
                if (!se(e) || e.name !== `hiveTranscript` || e.type !== this.unistNodeName()) return m.addError(`HiveLogExtension: unistNodeToProseMirrorNodes: node is not a directive node or name is not HIVE_LOG_DIRECTIVE_NAME`, e), null;
                let r = {
                    timestamp: e.attributes?.timestamp ?? null
                };
                return t.nodes[D].create(r, n)
            }
            proseMirrorNodeToUnistNodes(e) {
                return [{
                    type: `textDirective`,
                    name: D,
                    attributes: {
                        timestamp: e.attrs.timestamp
                    },
                    children: [],
                    data: {
                        hName: D,
                        hProperties: {
                            timestamp: e.attrs.timestamp
                        }
                    }
                }]
            }
        }
    })),
    sn = t({
        CANVAS_REMARK_PLUGINS: () => Q,
        MarkdownExtension: () => $
    }),
    Q, $, cn = e((() => {
        st(), vt(), Dt(), kt(), At(), qe(), Mt(), Pt(), It(), Lt(), Vt(), at(), j(), Ut(), Kt(), k(), Ye(), C(), Jt(), en(), Zt(), Qt(), Ge(), Wt(), rn(), nt(), on(), Re(), Me(), _e(), be(), ae(), fe(), Ie(), w(), Ve(), rt(), Q = [ve, [re, {
                singleTilde: !1
            }],
            [tt, {
                singleDollarTextMath: !1
            }], ce, et, de, He, nn, Fe, ze
        ], $ = class extends Le {
            dependencies() {
                let e = Pe();
                return [new Bt, new N, new ot, new B, new Et, new W, new Ze, new jt, new Nt, new Ft, new Ht, new K, new L, new M, new Gt, new Qe, new Ke, new Y, new qt, new T, new $t, new Z, new X, ...e ? [new G] : [], new an]
            }
            unifiedInitializationHook(e) {
                return e.use(Q)
            }
        }
    }));
export {
    mt as _, Lt as a, U as c, B as d, vt as f, gt as g, _t as h, K as i, W as l, z as m, cn as n, G as o, R as p, sn as r, At as s, $ as t, kt as u, L as v, at as y
};
//# sourceMappingURL=e5d54aa7-dopjvlyrywplu5ei.js.map
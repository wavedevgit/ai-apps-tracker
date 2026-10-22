import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $8 as n,
    Cat as r,
    Ont as i,
    Rot as a,
    ast as o,
    bnt as s,
    d1 as c,
    dnt as l,
    ist as u,
    l5 as d,
    mZ as f,
    p5 as p,
    u1 as ee,
    xat as m,
    yZ as te,
    zot as ne
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    BBn as re,
    JSt as ie,
    LWn as ae,
    QWn as oe,
    XRn as se,
    XSt as h,
    XWn as ce,
    YWn as le,
    Yht as ue,
    Zht as de,
    dRn as fe,
    lRn as pe,
    ogt as me,
    ozn as he,
    qRn as ge,
    qWn as _e,
    sgt as ve,
    zBn as ye,
    zWn as be
} from "./conversation-small-ocicxxw6jegn4vux.js";
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
} from "./82782bc9-dyzlhaxotei12n1t.js";
import {
    AS as je,
    _S as Me,
    aS as Ne,
    ew as Pe,
    sS as Fe
} from "./8b34dbc2-egl8cz04n8nmlktg.js";
import {
    n as Ie,
    t as Le
} from "./fc5e7148-lqe2ufr19cak4t53.js";
import {
    a as b,
    i as x,
    n as S,
    o as C,
    r as Re,
    t as w
} from "./373ddd65-o5ueta5lk6m8a4cj.js";
import {
    a as ze,
    i as Be,
    n as Ve,
    o as He,
    t as T
} from "./6afb0137-ffu585cs7566810p.js";
import {
    r as Ue,
    t as We
} from "./ac827dee-kp6ytd0r5tciqn99.js";
import {
    _ as E,
    a as Ge,
    c as D,
    d as O,
    f as k,
    g as Ke,
    h as qe,
    i as Je,
    l as Ye,
    m as A,
    n as Xe,
    o as Ze,
    p as j,
    r as Qe,
    s as M,
    t as $e,
    u as et,
    v as N
} from "./4813494d-l5bis17d819rkyvc.js";
import {
    i as tt,
    n as nt,
    r as rt,
    t as it
} from "./5ab42519-io3ousjgby01gn0i.js";

function P(e, t) {
    let n = [],
        r = [];
    for (let t of e.marks) {
        if (t.type.name === at) {
            n.push(t);
            continue
        }
        r.push(t)
    }
    return e.mark([...r, t, ...n])
}
var at, F = e((() => {
        S(), at = w.proseMirrorMarkName()
    })),
    I, ot = e((() => {
        F(), C(), I = class extends x {
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
                return t.map(e => P(e, n.marks[this.proseMirrorMarkName()].create({
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
    st, ct = e((() => {
        y(), g(), N(), C(), st = class extends b {
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
                return E(this.proseMirrorNodeName(), e, t, n)
            }
            proseMirrorNodeToUnistNodes(e, t) {
                return [{
                    type: this.unistNodeName(),
                    children: t
                }]
            }
        }
    }));

function lt(e, t, n, r) {
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
var ut = e((() => {}));

function dt(e) {
    return /^\s*/.exec(e)?.[0]?.length ?? 0
}

function ft(e) {
    return /\s*$/.exec(e)?.[0]?.length ?? 0
}

function pt(e, t, n) {
    for (; t > 0;) {
        let r = t - 1;
        if (!e.rangeHasMark(r, t, n)) break;
        t = r
    }
    return t
}

function mt(e, t, n) {
    for (; t < e.content.size && e.rangeHasMark(t, t + 1, n);) t += 1;
    return t
}

function ht(e, t, n, r = null) {
    let {
        selection: i
    } = e;
    if (!(i instanceof Ee)) return !1;
    let {
        empty: a,
        $cursor: o,
        ranges: s
    } = i;
    if (a && !o || !lt(e.doc, s, n, !0)) return !1;
    if (o) {
        let i = Pe(e.tr);
        n.isInSet(e.storedMarks || o.marks()) ? t(i.removeStoredMark(n)) : t(i.addStoredMark(n.create(r)))
    } else {
        let i = Pe(e.tr),
            a = !s.some(t => e.doc.rangeHasMark(t.$from.pos, t.$to.pos, n));
        for (let t = 0; t < s.length; t++) {
            let {
                $from: o,
                $to: c
            } = s[t], l = o.pos, u = c.pos, d = e.doc.textBetween(l, u, `
`);
            if (/^\s*$/.test(d)) continue;
            let f = o.nodeBefore?.text ?? ``,
                p = o.nodeAfter?.text ?? ``,
                ee = c.nodeBefore?.text ?? ``,
                m = c.nodeAfter?.text ?? ``;
            if (a) {
                let t = dt(p),
                    a = ft(ee);
                l + t < u && (l += t, u -= a), l = pt(e.doc, l, n), u = mt(e.doc, u, n), i.removeMark(l, u, e.schema.marks[w.proseMirrorMarkName()]), i.addMark(l, u, n.create(r))
            } else {
                let e = ft(f),
                    t = dt(m);
                l -= e, u += t, i.removeMark(l, u, n)
            }
        }
        t(i.scrollIntoView())
    }
    return !0
}

function gt(e, t = null) {
    return (n, r) => !r || ht(n, r, e, t)
}
var _t = e((() => {
        ut(), S(), Ne(), xe()
    })),
    vt = e((() => {
        je()
    })),
    L, R = e((() => {
        g(), xe(), vt(), ne(), L = class e extends Se {
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
                let s = t.schema.marks[he];
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
    z, yt = e((() => {
        F(), _t(), C(), R(), z = class extends x {
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
                return [new L(/\*\*([^\s](?:.*[^\s])?)\*\*([\s\S])$/, e.marks[this.proseMirrorMarkName()]), new L(/__([^\s](?:.*[^\s])?)__([\s\S])$/, e.marks[this.proseMirrorMarkName()])]
            }
            proseMirrorKeymap(e) {
                let t = e.marks[this.proseMirrorMarkName()];
                return {
                    "Mod-b": gt(t),
                    "Mod-B": gt(t)
                }
            }
            unistNodeToProseMirrorNodes({
                schema: e,
                convertedChildren: t,
                attrs: n
            }) {
                return t.map(t => P(t, e.marks[this.proseMirrorMarkName()].create(n)))
            }
            processConvertedUnistNode(e) {
                return {
                    type: this.unistNodeName(),
                    children: [e]
                }
            }
        }
    }));

function bt(e, t, n) {
    function r(r) {
        return r == null || r === Tt ? (e.exit(V), t(r)) : n(r)
    }
    return t => t === B ? (e.enter(V), e.consume(t), r) : n(t)
}

function xt() {
    return {
        text: {
            [B]: {
                name: V,
                tokenize: bt
            }
        }
    }
}

function St() {
    let e = this.data();
    return e.micromarkExtensions ??= [], e.micromarkExtensions.push(xt()), e.fromMarkdownExtensions ??= [], e.fromMarkdownExtensions.push({
        enter: {
            [V](e) {
                this.enter({
                    type: `break`
                }, e), this.exit(e)
            }
        }
    }), e.toMarkdownExtensions ??= [], e.toMarkdownExtensions.push({
        handlers: {
            break: Et
        }
    }), e => {
        be(e, `tableCell`, e => {
            e.children = e.children.map(e => Ct(e) ? wt(e) : e)
        })
    }
}

function Ct(e) {
    return e.type === `html` && /^<br\s*\/?\s*>$/i.test(e.value)
}

function wt(e) {
    return {
        type: `break`,
        position: e.position
    }
}
var B, Tt, V, Et, Dt, Ot = e((() => {
    S(), l(), ge(), y(), ae(), N(), C(), B = 92, Tt = 10, V = `backslashEscape`, Et = (e, t, n, r) => n.stack.includes(`tableCell`) ? `<br>` : se.break(e, t, n, r), Dt = class extends b {
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
                marks: w.proseMirrorMarkName(),
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
                ...(i() || s()) && {
                    "Ctrl-Enter": t
                }
            }
        }
        unistNodeToProseMirrorNodes({
            schema: e,
            convertedChildren: t,
            attrs: n
        }) {
            return E(this.proseMirrorNodeName(), e, t, n)
        }
        proseMirrorNodeToUnistNodes() {
            return [{
                type: this.unistNodeName()
            }]
        }
        unifiedInitializationHook(e) {
            return e.use(St)
        }
    }
}));

function kt(e, t) {
    let {
        start: n,
        end: r
    } = e;
    return n == null || r == null ? null : {
        start: n + 4 + (t.lang ?? ``).length,
        end: r - 4
    }
}
var H, U, At = e((() => {
        re(), S(), g(), N(), C(), Ke(), H = `code_block`, U = class extends b {
            dependencies() {
                return [new qe]
            }
            unistNodeName() {
                return `code`
            }
            static proseMirrorNodeName() {
                return H
            }
            proseMirrorNodeSpec() {
                return {
                    content: `text*`,
                    group: `block`,
                    code: !0,
                    defining: !0,
                    marks: [w.proseMirrorMarkName()].join(` `),
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
                return E(this.proseMirrorNodeName(), n, ye(e, n, {
                    ...t,
                    ...kt(t, e) ?? {}
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
    W, jt = e((() => {
        te(), ie(), r(), C(), W = class extends b {
            unistNodeName() {
                return `textDirective`
            }
            customDirectiveName() {
                return f
            }
            static proseMirrorNodeName() {
                return f
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
                if (!h(e) || e.name !== `contentReference` || e.type !== this.unistNodeName()) return m.addError(`ContentReferenceExtension: unistNodeToProseMirrorNodes: node is not a directive node or name is not contentReference`, e), null;
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
                    name: f,
                    attributes: {
                        index: e.attrs.index,
                        displayLayout: e.attrs.displayLayout
                    },
                    children: n,
                    data: {
                        hName: f,
                        hProperties: {
                            displayLayout: e.attrs.displayLayout,
                            index: e.attrs.index
                        }
                    }
                }]
            }
        }
    })),
    Mt, Nt = e((() => {
        g(), N(), C(), Mt = class extends b {
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
                return [new Se(/^\s{0,3}(?:\*\*\*|---|___)\n$/, (t, n, r, i) => t.tr.replaceWith(r, i, E(this.proseMirrorNodeName(), e, []) ?? []))]
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
                return E(this.proseMirrorNodeName(), e, t, n)
            }
            proseMirrorNodeToUnistNodes() {
                return [{
                    type: this.unistNodeName()
                }]
            }
        }
    })),
    Pt, Ft = e((() => {
        re(), ce(), y(), C(), R(), Pt = class extends x {
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
                return [new L(/`([^\s](?:.*[^\s])?)`([\s\S])$/, e.marks[this.proseMirrorMarkName()])]
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
                let r = ye(e, t, n, [t.marks[this.proseMirrorMarkName()].create(n)]);
                return r ? [r] : []
            }
            processConvertedUnistNode(e) {
                return `children` in e ? {
                    ...e,
                    children: e.children.map(e => this.processConvertedUnistNode(e))
                } : {
                    type: this.unistNodeName(),
                    value: oe(e)
                }
            }
        }
    })),
    It, Lt = e((() => {
        N(), C(), It = class extends b {
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
                return E(this.proseMirrorNodeName(), t, n, {
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
    G, Rt = e((() => {
        F(), y(), C(), R(), G = class extends x {
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
                return [new L(/(^|[^*])\*([^\s*](?:.*[^\s])?)\*([^*])$/, e.marks[this.proseMirrorMarkName()], {
                    matchStartOffset: e => e[1].length,
                    textGroup: 2,
                    trailingTextGroup: 3
                }), new L(/(^|[^_])_([^\s_](?:.*[^\s])?)_([^_])$/, e.marks[this.proseMirrorMarkName()], {
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
                return t.map(t => P(t, e.marks[this.proseMirrorMarkName()].create(n)))
            }
            processConvertedUnistNode(e) {
                return {
                    type: this.unistNodeName(),
                    children: [e]
                }
            }
        }
    }));

function K(e) {
    return e.type === q
}

function zt() {
    let e = this.data();
    e.fromMarkdownExtensions ??= [], e.fromMarkdownExtensions.push({
        enter: {
            lineEndingBlank(e) {
                this.enter({
                    type: q
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
        if (!He(e)) return;
        let {
            children: r
        } = e, i = 0, a = null, o = null, s = r.length;
        for (let c = 0; c < s; c++) {
            let l = r[c - i];
            t(l, n + 1);
            let {
                type: u
            } = l, d = c === s - 1 && u === q;
            if (u === q && a == null ? a = c : u !== q && a != null ? o = c : d && a != null && (o = c + 1), a != null && o != null) {
                let t = Bt({
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
var q, Bt, Vt, Ht = e((() => {
        D(), N(), C(), ze(), q = `lineEndingBlank`, Bt = ({
            startIndex: e,
            endIndex: t,
            depth: n,
            isLastChild: r,
            parent: i = null
        }) => {
            let a = t - e;
            return n > 0 && i?.type !== `list` ? a : r || e === 0 ? a - Math.floor((a + 1) / 2) : a - Math.floor((a - 1) / 2)
        }, Vt = class extends b {
            unistNodeName() {
                return q
            }
            static proseMirrorNodeName() {
                return `paragraph`
            }
            proseMirrorNodeSpec() {
                return Ge
            }
            unistNodeToProseMirrorNodes({
                schema: e,
                convertedChildren: t,
                attrs: n
            }) {
                return E(this.proseMirrorNodeName(), e, t, n)
            }
            proseMirrorNodeToUnistNodes(e, t) {
                return [{
                    type: Ze,
                    children: t
                }]
            }
            unifiedInitializationHook(e) {
                return e.use(zt)
            }
        }
    })),
    Ut, Wt = e((() => {
        N(), C(), Ut = class extends b {
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
                return E(this.proseMirrorNodeName(), t, n, {
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
    J, Gt = e((() => {
        g(), Te(), N(), C(), A(), D(), et(), J = class e extends b {
            static unorderedListCommand(e) {
                return (t, n) => {
                    let r = e.nodes[this.proseMirrorNodeName()],
                        i = e.nodes.ordered_list,
                        a = e.nodes[j.proseMirrorNodeName()],
                        o = e.nodes[M.proseMirrorNodeName()];
                    if (!r) return !1;
                    let s = t,
                        c = () => s,
                        l = e => {
                            s = s.apply(e), n && n(e)
                        };
                    return k(c(), [r]) ? O(c, l, a, [i, r]) : !O(c, l, a, [i]) || !Ye(c, l, o) ? !1 : ke(r)(c(), l)
                }
            }
            dependencies() {
                return [new j]
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
                return E(this.proseMirrorNodeName(), t, n, {
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
    Y, Kt = e((() => {
        g(), Te(), N(), C(), A(), D(), et(), Gt(), Y = class e extends b {
            static orderedListCommand(e) {
                return (t, n) => {
                    let r = e.nodes[this.proseMirrorNodeName()],
                        i = e.nodes[J.proseMirrorNodeName()],
                        a = e.nodes[j.proseMirrorNodeName()],
                        o = e.nodes[M.proseMirrorNodeName()];
                    if (!r) return !1;
                    let s = t,
                        c = () => s,
                        l = e => {
                            s = s.apply(e), n && n(e)
                        };
                    return k(c(), [r]) ? O(c, l, a, [r, i]) : !O(c, l, a, [i]) || !Ye(c, l, o) ? !1 : ke(r)(c(), l)
                }
            }
            dependencies() {
                return [new j]
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
                return E(this.proseMirrorNodeName(), t, n, {
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
        F(), C(), R(), qt = class extends x {
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
                return [new L(/~([^\s](?:.*[^\s~])?)~([^~])$/, e.marks[this.proseMirrorMarkName()]), new L(/~~([^\s](?:.*[^\s])?)~~([\s\S])$/, e.marks[this.proseMirrorMarkName()])]
            }
            unistNodeToProseMirrorNodes({
                schema: e,
                convertedChildren: t
            }) {
                return t.map(t => P(t, e.marks[this.proseMirrorMarkName()].create()))
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
            if (He(e))
                for (let t = 0; t < e.children.length; t++) {
                    let i = e.children[t];
                    n(i, t), r(i)
                }
        }
        r(e)
    }
}
var Xt = e((() => {
        ze()
    })),
    X, Zt = e((() => {
        n(), N(), C(), X = class extends b {
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
                                colspan: d(t.getAttribute(`colspan`), 1),
                                rowspan: d(t.getAttribute(`rowspan`), 1)
                            }
                        }
                    }],
                    toDOM(e) {
                        let {
                            colspan: t,
                            rowspan: n
                        } = e.attrs, r = {
                            colspan: t === 1 ? void 0 : p(t, void 0),
                            rowspan: n === 1 ? void 0 : p(n, void 0)
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
                return E(this.proseMirrorNodeName(), t, n, {
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
        N(), C(), Zt(), Z = class extends b {
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
                return E(this.proseMirrorNodeName(), e, t, n)
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
        Xt(), N(), C(), Qt(), $t = class extends b {
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
                return E(this.proseMirrorNodeName(), e, t, n)
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
        Ht(), u(), ee(), ae(), nn = () => e => {
            be(e, `list`, (e, t, n) => {
                if (n == null || t == null) return;
                let r = [],
                    i = [],
                    a = 0;
                for (; a < e.children.length;) {
                    let t = e.children[a];
                    if (K(t)) {
                        let t = [];
                        for (; a < e.children.length && K(e.children[a]);) {
                            let n = e.children[a];
                            if (!K(n)) break;
                            t.push(n), a++
                        }
                        if (i.length === 0) throw Error(`Unexpected state: currentListItems is empty after encountering blank lines.`);
                        let n = i[0],
                            s = o(c(i)),
                            l = tn(n.position?.start ?? e.position?.start, s.position?.end ?? e.position?.end),
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
        C(), ie(), r(), Be(), an = class extends b {
            unistNodeName() {
                return `textDirective`
            }
            customDirectiveName() {
                return T
            }
            static proseMirrorNodeName() {
                return T
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
                if (!h(e) || e.name !== `hiveTranscript` || e.type !== this.unistNodeName()) return m.addError(`HiveLogExtension: unistNodeToProseMirrorNodes: node is not a directive node or name is not HIVE_LOG_DIRECTIVE_NAME`, e), null;
                let r = {
                    timestamp: e.attributes?.timestamp ?? null
                };
                return t.nodes[T].create(r, n)
            }
            proseMirrorNodeToUnistNodes(e) {
                return [{
                    type: `textDirective`,
                    name: T,
                    attributes: {
                        timestamp: e.attrs.timestamp
                    },
                    children: [],
                    data: {
                        hName: T,
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
        ct(), yt(), Ot(), At(), jt(), Je(), Nt(), Ft(), Lt(), Rt(), Ht(), ot(), A(), Wt(), Kt(), D(), Xe(), S(), Jt(), en(), Zt(), Qt(), Ke(), Gt(), rn(), rt(), on(), Be(), Me(), me(), ue(), pe(), _e(), Le(), C(), Ue(), it(), Q = [le, [fe, {
                singleTilde: !1
            }],
            [nt, {
                singleDollarTextMath: !1
            }], de, tt, ve, We, nn, Ie, Ve
        ], $ = class extends Re {
            dependencies() {
                let e = Fe();
                return [new Vt, new M, new st, new z, new Dt, new U, new Qe, new Mt, new Pt, new It, new Ut, new G, new I, new j, new Y, new $e, new qe, new J, new qt, new w, new $t, new Z, new X, ...e ? [new W] : [], new an]
            }
            unifiedInitializationHook(e) {
                return e.use(Q)
            }
        }
    }));
export {
    ht as _, Rt as a, H as c, z as d, yt as f, _t as g, vt as h, G as i, U as l, R as m, cn as n, W as o, L as p, sn as r, jt as s, $ as t, At as u, I as v, ot as y
};
//# sourceMappingURL=e5d54aa7-khwun0p2c8vzqdxj.js.map
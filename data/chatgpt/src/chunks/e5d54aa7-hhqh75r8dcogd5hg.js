import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $tt as n,
    B8 as r,
    Dot as i,
    Eot as a,
    Kot as o,
    SZ as s,
    X8 as c,
    _Z as l,
    cnt as u,
    dat as d,
    e5 as f,
    gnt as ee,
    lat as p,
    n1 as te,
    qot as ne,
    t1 as re
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    CBn as ie,
    CWn as m,
    IWn as ae,
    NWn as oe,
    PRn as se,
    PWn as ce,
    WRn as le,
    YLn as ue,
    igt as de,
    jRn as fe,
    jWn as pe,
    mgt as me,
    ngt as he,
    pgt as ge,
    qLn as _e,
    rCt as ve,
    tCt as ye,
    wBn as be,
    xWn as xe
} from "./conversation-small-nmt18uiom3b14vca.js";
import {
    At as Se,
    G as Ce,
    J as we,
    K as h,
    Ot as Te,
    Q as Ee,
    Y as g,
    bt as _,
    kt as De,
    lt as Oe,
    ot as ke,
    rt as Ae,
    ut as v,
    xt as je
} from "./82782bc9-g3liom11amtlr9kq.js";
import {
    AS as Me,
    _S as Ne,
    aS as Pe,
    ew as Fe,
    sS as Ie
} from "./8b34dbc2-ojcl97ddvu2212q0.js";
import {
    n as Le,
    t as Re
} from "./fc5e7148-m3dye35uiu4a9oao.js";
import {
    a as y,
    i as b,
    n as x,
    o as S,
    r as ze,
    t as C
} from "./373ddd65-o5ueta5lk6m8a4cj.js";
import {
    a as Be,
    i as Ve,
    n as He,
    o as Ue,
    t as w
} from "./6afb0137-f4tmu4wj9lzv18bl.js";
import {
    r as We,
    t as Ge
} from "./ac827dee-jlqho0agejgw25zy.js";
import {
    _ as T,
    a as Ke,
    c as E,
    d as D,
    f as O,
    g as k,
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
} from "./4813494d-bu98kjbdimdopvdg.js";
import {
    i as tt,
    n as nt,
    r as rt,
    t as it
} from "./5ab42519-jvvz3bhb3do9k8i5.js";

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
        x(), at = C.proseMirrorMarkName()
    })),
    I, ot = e((() => {
        F(), S(), I = class extends b {
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
        v(), h(), N(), S(), st = class extends y {
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
                return [g(/^\s{0,3}>\s$/, e.nodes[this.proseMirrorNodeName()])]
            }
            proseMirrorKeymap(e) {
                return {
                    "Mod->": je(e.nodes[this.proseMirrorNodeName()])
                }
            }
            unistNodeToProseMirrorNodes({
                schema: e,
                convertedChildren: t,
                attrs: n
            }) {
                return T(this.proseMirrorNodeName(), e, t, n)
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
    if (!(i instanceof De)) return !1;
    let {
        empty: a,
        $cursor: o,
        ranges: s
    } = i;
    if (a && !o || !lt(e.doc, s, n, !0)) return !1;
    if (o) {
        let i = Fe(e.tr);
        n.isInSet(e.storedMarks || o.marks()) ? t(i.removeStoredMark(n)) : t(i.addStoredMark(n.create(r)))
    } else {
        let i = Fe(e.tr),
            a = !s.some(t => e.doc.rangeHasMark(t.$from.pos, t.$to.pos, n));
        for (let t = 0; t < s.length; t++) {
            let {
                $from: o,
                $to: c
            } = s[t], l = o.pos, u = c.pos, d = e.doc.textBetween(l, u, `
`);
            if (/^\s*$/.test(d)) continue;
            let f = o.nodeBefore?.text ?? ``,
                ee = o.nodeAfter?.text ?? ``,
                p = c.nodeBefore?.text ?? ``,
                te = c.nodeAfter?.text ?? ``;
            if (a) {
                let t = dt(ee),
                    a = ft(p);
                l + t < u && (l += t, u -= a), l = pt(e.doc, l, n), u = mt(e.doc, u, n), i.removeMark(l, u, e.schema.marks[C.proseMirrorMarkName()]), i.addMark(l, u, n.create(r))
            } else {
                let e = ft(f),
                    t = dt(te);
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
        ut(), x(), Pe(), Se()
    })),
    vt = e((() => {
        Me()
    })),
    L, R = e((() => {
        h(), Se(), vt(), i(), L = class e extends Ce {
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
                if (!(t.selection instanceof De)) return null;
                let a = r + this.matchStartOffset(n),
                    o = n[this.textGroup];
                if (typeof o != `string`) return null;
                let s = t.schema.marks[le];
                if (s != null && this.markType !== s && t.doc.rangeHasMark(a, i, s)) return null;
                let c = [new Te(t.doc.resolve(a), t.doc.resolve(i))];
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
        F(), _t(), S(), R(), z = class extends b {
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
        m(e, `tableCell`, e => {
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
var B, Tt, V, Et, H, Dt = e((() => {
    x(), n(), fe(), v(), xe(), N(), S(), B = 92, Tt = 10, V = `backslashEscape`, Et = (e, t, n, r) => n.stack.includes(`tableCell`) ? `<br>` : se.break(e, t, n, r), H = class extends y {
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
                marks: C.proseMirrorMarkName(),
                toDOM() {
                    return [`br`]
                }
            }
        }
        proseMirrorKeymap(e) {
            let t = ke(Oe, (t, n) => (n && n(t.tr.replaceSelectionWith(e.nodes[this.proseMirrorNodeName()].create()).scrollIntoView()), !0));
            return {
                "Mod-Enter": t,
                "Shift-Enter": t,
                ...(ee() || u()) && {
                    "Ctrl-Enter": t
                }
            }
        }
        unistNodeToProseMirrorNodes({
            schema: e,
            convertedChildren: t,
            attrs: n
        }) {
            return T(this.proseMirrorNodeName(), e, t, n)
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
        be(), x(), h(), N(), S(), k(), U = `code_block`, W = class extends y {
            dependencies() {
                return [new qe]
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
                    marks: [C.proseMirrorMarkName()].join(` `),
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
                return [we(/^\s{0,3}```$/, e.nodes[this.proseMirrorNodeName()])]
            }
            unistNodeToProseMirrorNodes({
                node: e,
                attrs: t,
                schema: n
            }) {
                let {
                    lang: r
                } = e;
                return T(this.proseMirrorNodeName(), n, ie(e, n, {
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
        s(), ye(), d(), S(), G = class extends y {
            unistNodeName() {
                return `textDirective`
            }
            customDirectiveName() {
                return l
            }
            static proseMirrorNodeName() {
                return l
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
                if (!ve(e) || e.name !== `contentReference` || e.type !== this.unistNodeName()) return p.addError(`ContentReferenceExtension: unistNodeToProseMirrorNodes: node is not a directive node or name is not contentReference`, e), null;
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
                    name: l,
                    attributes: {
                        index: e.attrs.index,
                        displayLayout: e.attrs.displayLayout
                    },
                    children: n,
                    data: {
                        hName: l,
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
        h(), N(), S(), jt = class extends y {
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
                return [new Ce(/^\s{0,3}(?:\*\*\*|---|___)\n$/, (t, n, r, i) => t.tr.replaceWith(r, i, T(this.proseMirrorNodeName(), e, []) ?? []))]
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
                return T(this.proseMirrorNodeName(), e, t, n)
            }
            proseMirrorNodeToUnistNodes() {
                return [{
                    type: this.unistNodeName()
                }]
            }
        }
    })),
    Nt, Pt = e((() => {
        be(), ce(), v(), S(), R(), Nt = class extends b {
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
                    "Ctrl-`": _(t)
                }
            }
            unistNodeToProseMirrorNodes({
                node: e,
                schema: t,
                attrs: n
            }) {
                if (e.type !== this.unistNodeName()) return [];
                let r = ie(e, t, n, [t.marks[this.proseMirrorMarkName()].create(n)]);
                return r ? [r] : []
            }
            processConvertedUnistNode(e) {
                return `children` in e ? {
                    ...e,
                    children: e.children.map(e => this.processConvertedUnistNode(e))
                } : {
                    type: this.unistNodeName(),
                    value: ae(e)
                }
            }
        }
    })),
    Ft, It = e((() => {
        N(), S(), Ft = class extends y {
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
                return T(this.proseMirrorNodeName(), t, n, {
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
        F(), v(), S(), R(), K = class extends b {
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
                    "Mod-i": _(t),
                    "Mod-I": _(t)
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
        if (!Ue(e)) return;
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
        E(), N(), S(), Be(), J = `lineEndingBlank`, zt = ({
            startIndex: e,
            endIndex: t,
            depth: n,
            isLastChild: r,
            parent: i = null
        }) => {
            let a = t - e;
            return n > 0 && i?.type !== `list` ? a : r || e === 0 ? a - Math.floor((a + 1) / 2) : a - Math.floor((a - 1) / 2)
        }, Bt = class extends y {
            unistNodeName() {
                return J
            }
            static proseMirrorNodeName() {
                return `paragraph`
            }
            proseMirrorNodeSpec() {
                return Ke
            }
            unistNodeToProseMirrorNodes({
                schema: e,
                convertedChildren: t,
                attrs: n
            }) {
                return T(this.proseMirrorNodeName(), e, t, n)
            }
            proseMirrorNodeToUnistNodes(e, t) {
                return [{
                    type: Ze,
                    children: t
                }]
            }
            unifiedInitializationHook(e) {
                return e.use(Rt)
            }
        }
    })),
    Ht, Ut = e((() => {
        N(), S(), Ht = class extends y {
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
                return T(this.proseMirrorNodeName(), t, n, {
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
        h(), Ee(), N(), S(), A(), E(), et(), Y = class e extends y {
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
                    return O(c(), [r]) ? D(c, l, a, [i, r]) : !D(c, l, a, [i]) || !Ye(c, l, o) ? !1 : Ae(r)(c(), l)
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
                return [g(/^\s{0,3}([-+*])\s$/, e.nodes[this.proseMirrorNodeName()])]
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
                return T(this.proseMirrorNodeName(), t, n, {
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
        h(), Ee(), N(), S(), A(), E(), et(), Wt(), Gt = class e extends y {
            static orderedListCommand(e) {
                return (t, n) => {
                    let r = e.nodes[this.proseMirrorNodeName()],
                        i = e.nodes[Y.proseMirrorNodeName()],
                        a = e.nodes[j.proseMirrorNodeName()],
                        o = e.nodes[M.proseMirrorNodeName()];
                    if (!r) return !1;
                    let s = t,
                        c = () => s,
                        l = e => {
                            s = s.apply(e), n && n(e)
                        };
                    return O(c(), [r]) ? D(c, l, a, [r, i]) : !D(c, l, a, [i]) || !Ye(c, l, o) ? !1 : Ae(r)(c(), l)
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
                return [g(/^\s{0,3}(\d+)\.\s$/, e.nodes[this.proseMirrorNodeName()], e => ({
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
                return T(this.proseMirrorNodeName(), t, n, {
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
        F(), S(), R(), qt = class extends b {
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
            if (Ue(e))
                for (let t = 0; t < e.children.length; t++) {
                    let i = e.children[t];
                    n(i, t), r(i)
                }
        }
        r(e)
    }
}
var Xt = e((() => {
        Be()
    })),
    X, Zt = e((() => {
        r(), N(), S(), X = class extends y {
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
                                colspan: c(t.getAttribute(`colspan`), 1),
                                rowspan: c(t.getAttribute(`rowspan`), 1)
                            }
                        }
                    }],
                    toDOM(e) {
                        let {
                            colspan: t,
                            rowspan: n
                        } = e.attrs, r = {
                            colspan: t === 1 ? void 0 : f(t, void 0),
                            rowspan: n === 1 ? void 0 : f(n, void 0)
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
                return T(this.proseMirrorNodeName(), t, n, {
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
        N(), S(), Zt(), Z = class extends y {
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
                return T(this.proseMirrorNodeName(), e, t, n)
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
        Xt(), N(), S(), Qt(), $t = class extends y {
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
                return T(this.proseMirrorNodeName(), e, t, n)
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
        Vt(), o(), re(), xe(), nn = () => e => {
            m(e, `list`, (e, t, n) => {
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
                            o = ne(te(i)),
                            s = tn(n.position?.start ?? e.position?.start, o.position?.end ?? e.position?.end),
                            c = {
                                type: `list`,
                                ordered: e.ordered,
                                start: e.start,
                                spread: e.spread,
                                children: i,
                                position: s
                            };
                        r.push(c), i = [], r.push(...t.map(e => ({
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
        S(), ye(), d(), Ve(), an = class extends y {
            unistNodeName() {
                return `textDirective`
            }
            customDirectiveName() {
                return w
            }
            static proseMirrorNodeName() {
                return w
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
                if (!ve(e) || e.name !== `hiveTranscript` || e.type !== this.unistNodeName()) return p.addError(`HiveLogExtension: unistNodeToProseMirrorNodes: node is not a directive node or name is not HIVE_LOG_DIRECTIVE_NAME`, e), null;
                let r = {
                    timestamp: e.attributes?.timestamp ?? null
                };
                return t.nodes[w].create(r, n)
            }
            proseMirrorNodeToUnistNodes(e) {
                return [{
                    type: `textDirective`,
                    name: w,
                    attributes: {
                        timestamp: e.attrs.timestamp
                    },
                    children: [],
                    data: {
                        hName: w,
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
        ct(), yt(), Dt(), kt(), At(), Je(), Mt(), Pt(), It(), Lt(), Vt(), ot(), A(), Ut(), Kt(), E(), Xe(), x(), Jt(), en(), Zt(), Qt(), k(), Wt(), rn(), rt(), on(), Ve(), Ne(), ge(), he(), _e(), pe(), Re(), S(), We(), it(), Q = [oe, [ue, {
                singleTilde: !1
            }],
            [nt, {
                singleDollarTextMath: !1
            }], de, tt, me, Ge, nn, Le, He
        ], $ = class extends ze {
            dependencies() {
                let e = Ie();
                return [new Bt, new M, new st, new z, new H, new W, new Qe, new jt, new Nt, new Ft, new Ht, new K, new I, new j, new Gt, new $e, new qe, new Y, new qt, new C, new $t, new Z, new X, ...e ? [new G] : [], new an]
            }
            unifiedInitializationHook(e) {
                return e.use(Q)
            }
        }
    }));
export {
    ht as _, Lt as a, U as c, z as d, yt as f, _t as g, vt as h, K as i, W as l, R as m, cn as n, G as o, L as p, sn as r, At as s, $ as t, kt as u, I as v, ot as y
};
//# sourceMappingURL=e5d54aa7-hhqh75r8dcogd5hg.js.map
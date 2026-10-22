import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $8 as t,
    e5 as n
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    HBn as r,
    VBn as i
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    $ as a,
    J as o,
    K as s,
    Q as c,
    et as l,
    tt as u,
    ut as d,
    vt as f
} from "./82782bc9-o75a7wf6pmueiskp.js";
import {
    a as p,
    o as m
} from "./373ddd65-o5ueta5lk6m8a4cj.js";

function h(e, t, r, i = {}) {
    if (e == null) return null;
    let a = (Array.isArray(r) ? r : [r]).filter(n);
    return t.nodes[e].createAndFill(i, a) ?? null
}
var g = e((() => {
        t()
    })),
    _, v = e((() => {
        r(), m(), _ = class extends p {
            unistNodeName() {
                return `text`
            }
            static proseMirrorNodeName() {
                return `text`
            }
            proseMirrorNodeSpec() {
                return {
                    group: `inline`
                }
            }
            unistNodeToProseMirrorNodes({
                node: e,
                schema: t,
                attrs: n
            }) {
                return i(e, t, n)
            }
            proseMirrorNodeToUnistNodes(e) {
                return [{
                    type: this.unistNodeName(),
                    value: e.text ?? ``
                }]
            }
        }
    })),
    y, b = e((() => {
        c(), g(), m(), y = class extends p {
            unistNodeName() {
                return `listItem`
            }
            static proseMirrorNodeName() {
                return `regular_list_item`
            }
            proseMirrorNodeSpec() {
                return {
                    content: `paragraph block*`,
                    defining: !0,
                    group: `list_item`,
                    parseDOM: [{
                        tag: `li`
                    }],
                    toDOM() {
                        return [`li`, 0]
                    }
                }
            }
            unistToProseMirrorTest(e) {
                return e.type === this.unistNodeName() && (!(`checked` in e) || typeof e.checked != `boolean`)
            }
            proseMirrorKeymap(e) {
                let t = e.nodes[this.proseMirrorNodeName()];
                return {
                    Enter: u(t),
                    "Shift-Tab": a(t),
                    Tab: l(t)
                }
            }
            unistNodeToProseMirrorNodes({
                schema: e,
                convertedChildren: t,
                attrs: n
            }) {
                return h(this.proseMirrorNodeName(), e, t, n)
            }
            proseMirrorNodeToUnistNodes(e, t) {
                return [{
                    type: this.unistNodeName(),
                    children: t
                }]
            }
        }
    })),
    x, S, C, w, T = e((() => {
        d(), c(), x = (e, t) => {
            let n = t.filter(Boolean);
            if (n.length === 0) return !1;
            let {
                $from: r
            } = e.selection, i = new Set(n);
            for (let e = r.depth; e >= 0; e--)
                if (i.has(r.node(e).type)) return !0;
            return !1
        }, S = (e, t, n, r = []) => {
            if (!n) return !0;
            let i = w(r);
            if (i.length === 0) return !0;
            for (; x(e(), i);)
                if (!a(n)(e(), t)) return !1;
            return !0
        }, C = (e, t, n) => !n || x(e(), [n]) ? !0 : f(n)(e(), t), w = e => e.filter(Boolean)
    })),
    E, D, O, k = e((() => {
        d(), g(), m(), b(), T(), E = {
            content: `inline*`,
            group: `block`,
            parseDOM: [{
                tag: `p`
            }],
            toDOM() {
                return [`p`, {
                    dir: `auto`
                }, 0]
            }
        }, D = `paragraph`, O = class e extends p {
            static paragraphStyleCommand(t) {
                return (n, r) => {
                    let i = t.nodes[e.proseMirrorNodeName()],
                        a = t.nodes.ordered_list,
                        o = t.nodes.list,
                        s = t.nodes[y.proseMirrorNodeName()];
                    if (!i) return !1;
                    let c = n,
                        l = () => c,
                        u = e => {
                            c = c.apply(e), r && r(e)
                        };
                    return S(l, u, s, [a, o]) ? f(i)(l(), u) : !1
                }
            }
            unistNodeName() {
                return D
            }
            static proseMirrorNodeName() {
                return `paragraph`
            }
            proseMirrorNodeSpec() {
                return E
            }
            proseMirrorKeymap(t) {
                return {
                    "Alt-Mod-0": e.paragraphStyleCommand(t)
                }
            }
            unistNodeToProseMirrorNodes({
                schema: e,
                convertedChildren: t,
                attrs: n
            }) {
                return h(this.proseMirrorNodeName(), e, t, n)
            }
            proseMirrorNodeToUnistNodes(e, t) {
                return [{
                    type: this.unistNodeName(),
                    children: t
                }]
            }
        }
    })),
    A, j = e((() => {
        d(), s(), g(), m(), k(), v(), T(), A = class e extends p {
            static isAtStart(e, t) {
                return e.selection.empty ? t === void 0 ? e.selection.$anchor.parentOffset > 0 : t.endOfTextblock(`backward`, e) : !1
            }
            static headingLevelCommandBuilder(t, n, r) {
                return (i, a, o) => {
                    if (r && !e.isAtStart(i, o)) return !1;
                    let {
                        $anchor: s
                    } = i.selection, c = s.parent;
                    if (c.type.name !== `heading`) return !1;
                    let l = c.attrs.level + n;
                    if (l < 0 || l > 6) return !1;
                    if (a === void 0) return !0;
                    let u = s.before(s.depth);
                    return a(l > 0 ? i.tr.setNodeMarkup(u, void 0, {
                        level: l
                    }) : i.tr.setNodeMarkup(u, t.nodes.paragraph)), !0
                }
            }
            static headingStyleCommand(e, t) {
                return (n, r) => {
                    let i = e.nodes[this.proseMirrorNodeName()];
                    if (!i) return !1;
                    let a = e.nodes.ordered_list,
                        o = e.nodes.list,
                        s = e.nodes.regular_list_item,
                        c = n,
                        l = () => c,
                        u = e => {
                            c = c.apply(e), r && r(e)
                        };
                    return S(l, u, s, [a, o]) ? f(i, {
                        level: t
                    })(l(), u) : !1
                }
            }
            dependencies() {
                return [new O, new _]
            }
            unistNodeName() {
                return `heading`
            }
            static proseMirrorNodeName() {
                return `heading`
            }
            proseMirrorNodeSpec() {
                return {
                    attrs: {
                        level: {
                            default: 1
                        }
                    },
                    content: `text*`,
                    group: `block`,
                    defining: !0,
                    parseDOM: [{
                        tag: `h1`,
                        attrs: {
                            level: 1
                        }
                    }, {
                        tag: `h2`,
                        attrs: {
                            level: 2
                        }
                    }, {
                        tag: `h3`,
                        attrs: {
                            level: 3
                        }
                    }, {
                        tag: `h4`,
                        attrs: {
                            level: 4
                        }
                    }, {
                        tag: `h5`,
                        attrs: {
                            level: 5
                        }
                    }, {
                        tag: `h6`,
                        attrs: {
                            level: 6
                        }
                    }],
                    toDOM(e) {
                        return [`h` + e.attrs.level.toString(), {
                            dir: `auto`
                        }, 0]
                    }
                }
            }
            proseMirrorInputRules(e) {
                return [o(/^\s{0,3}(#{1,6})\s$/, e.nodes[this.proseMirrorNodeName()], e => ({
                    level: e[1].length
                }))]
            }
            proseMirrorKeymap(t) {
                let n = t.nodes[this.proseMirrorNodeName()],
                    r = {
                        Tab: e.headingLevelCommandBuilder(t, 1, !1),
                        "#": e.headingLevelCommandBuilder(t, 1, !0),
                        "Shift-Tab": e.headingLevelCommandBuilder(t, -1, !1),
                        "Shift-Mod-1": e.headingStyleCommand(t, 1),
                        "Shift-Mod-2": e.headingStyleCommand(t, 2),
                        "Shift-Mod-3": e.headingStyleCommand(t, 3),
                        "Alt-Mod-1": e.headingStyleCommand(t, 1),
                        "Alt-Mod-2": e.headingStyleCommand(t, 2),
                        "Alt-Mod-3": e.headingStyleCommand(t, 3)
                    };
                for (let e = 1; e <= 6; e++) r[`Shift-Mod-${e.toString()}`] = f(n, {
                    level: e
                });
                return r
            }
            unistNodeToProseMirrorNodes({
                node: e,
                schema: t,
                convertedChildren: n,
                attrs: r
            }) {
                let {
                    depth: i
                } = e;
                return h(this.proseMirrorNodeName(), t, n, {
                    ...r,
                    level: i
                })
            }
            proseMirrorNodeToUnistNodes(e, t) {
                return [{
                    type: this.unistNodeName(),
                    depth: e.attrs.level,
                    children: t
                }]
            }
        }
    })),
    M, N = e((() => {
        g(), m(), M = class extends p {
            unistNodeName() {
                return `root`
            }
            static proseMirrorNodeName() {
                return `doc`
            }
            proseMirrorNodeSpec() {
                return {
                    content: `block+`
                }
            }
            unistNodeToProseMirrorNodes({
                schema: e,
                convertedChildren: t,
                attrs: n
            }) {
                return h(this.proseMirrorNodeName(), e, t, n)
            }
            proseMirrorNodeToUnistNodes(e, t) {
                return [{
                    type: this.unistNodeName(),
                    children: t
                }]
            }
        }
    }));
export {
    h as _, E as a, k as c, S as d, x as f, v as g, _ as h, j as i, C as l, b as m, N as n, D as o, y as p, A as r, O as s, M as t, T as u, g as v
};
//# sourceMappingURL=4813494d-flff4vioa3te9jxd.js.map
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Gat as t,
    Wat as n
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    QUn as r,
    ZLn as i,
    lzn as a,
    tWn as o
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    AS as s
} from "./8b34dbc2-gf9wnwcahty27ylx.js";

function c(e) {
    return d.test(e)
}

function l(e) {
    let t = /^library-file:([^?#]+)(?:#display=(?:minimal|full))?$/u.exec(e);
    return t?.[1] != null && d.test(t[1]) ? t[1] : null
}

function u(e) {
    if (!d.test(e)) throw Error(`Invalid multiplayer image Library file ID`);
    return `library-file:${e}`
}
var d, f = e((() => {
    d = /^libfile[-_][A-Za-z0-9][A-Za-z0-9_-]{0,119}$/u
}));

function p(e) {
    return {
        type: `image`,
        url: e.attrs.src ?? ``,
        alt: e.attrs.alt,
        title: e.attrs.title
    }
}

function m(e) {
    return typeof e == `number` && Number.isSafeInteger(e) && e > 0
}

function h(e) {
    if (e !== null && !m(e)) throw RangeError(`Invalid multiplayer image dimension`)
}

function g(e) {
    let t = Number(e);
    return m(t) ? t : null
}

function _(e) {
    return typeof e == `number` && Number.isFinite(e) && e > 0
}

function v(e) {
    let t = Number(e);
    return _(t) ? t : null
}
var y, b, x, S, C = e((() => {
    s(), r(), f(), t(), y = `writing_block_image`, b = `data-writing-block-image-src`, x = o().use(i), S = class extends a {
        constructor(e = !1, t = !1) {
            super(), n(this, `multiplayer`, void 0), n(this, `imageIdentity`, void 0), this.multiplayer = e, this.imageIdentity = t
        }
        static proseMirrorNodeName() {
            return y
        }
        unistNodeName() {
            return `image`
        }
        unistToProseMirrorTest(e) {
            return this.multiplayer && super.unistToProseMirrorTest(e)
        }
        unistNodeToProseMirrorNodes({
            node: e,
            schema: t
        }) {
            return !this.multiplayer || e.url !== `` && l(e.url) == null ? null : t.nodes[y].createChecked({
                src: e.url || null,
                alt: e.alt ?? ``,
                title: e.title ?? null
            })
        }
        proseMirrorNodeSpec() {
            let e = this.multiplayer;
            return {
                group: `inline`,
                inline: !0,
                atom: !0,
                draggable: e,
                selectable: !0,
                ...e ? {
                    marks: ``,
                    leafText: e => x.stringify(p(e)).trimEnd()
                } : {},
                attrs: {
                    src: e ? {
                        default: null,
                        validate(e) {
                            if (e !== null && (typeof e != `string` || l(e) == null)) throw RangeError(`Invalid multiplayer image source`)
                        }
                    } : {},
                    alt: {
                        default: ``
                    },
                    ...e && this.imageIdentity ? {
                        imageId: {
                            default: null,
                            validate(e) {
                                if (e !== null && (typeof e != `string` || e.length === 0)) throw RangeError(`Invalid multiplayer image identity`)
                            }
                        }
                    } : {},
                    ...e ? {
                        title: {
                            default: null,
                            validate: `string|null`
                        },
                        naturalWidth: {
                            default: null,
                            validate: h
                        },
                        naturalHeight: {
                            default: null,
                            validate: h
                        },
                        scale: {
                            default: null,
                            validate(e) {
                                if (e !== null && !_(e)) throw RangeError(`Invalid multiplayer image scale`)
                            }
                        }
                    } : {}
                },
                parseDOM: e ? [{
                    tag: `span[${b}]`,
                    getAttrs(e) {
                        let t = e.getAttribute(b);
                        return t == null || t !== `` && l(t) == null ? !1 : {
                            src: t || null,
                            alt: e.getAttribute(`data-writing-block-image-alt`) ?? ``,
                            title: e.getAttribute(`title`),
                            naturalWidth: g(e.getAttribute(`data-writing-block-image-natural-width`)),
                            naturalHeight: g(e.getAttribute(`data-writing-block-image-natural-height`)),
                            scale: v(e.getAttribute(`data-writing-block-image-scale`))
                        }
                    }
                }] : [{
                    tag: `img[data-writing-block-image="true"][src^="blob:"]`,
                    getAttrs(e) {
                        let t = e.getAttribute(`src`);
                        return t?.startsWith(`blob:`) ? {
                            src: t,
                            alt: e.getAttribute(`alt`) ?? ``
                        } : !1
                    }
                }],
                toDOM(t) {
                    let {
                        src: n,
                        alt: r
                    } = t.attrs;
                    return e ? [`span`, {
                        [b]: n ?? ``,
                        "data-writing-block-image-alt": r,
                        "data-writing-block-image-natural-width": t.attrs.naturalWidth,
                        "data-writing-block-image-natural-height": t.attrs.naturalHeight,
                        "data-writing-block-image-scale": t.attrs.scale,
                        title: t.attrs.title
                    }, r] : [`img`, {
                        ...typeof n == `string` && n.startsWith(`blob:`) ? {
                            src: n
                        } : {},
                        alt: typeof r == `string` ? r : ``,
                        class: `writing-block-image`,
                        "data-writing-block-image": `true`
                    }]
                }
            }
        }
        proseMirrorNodeToUnistNodes(e) {
            return this.multiplayer ? [p(e)] : []
        }
    }
}));
export {
    f as a, u as i, S as n, c as o, C as r, l as s, y as t
};
//# sourceMappingURL=ba2d71b9-ld9w4z2r8c2j8p3y.js.map
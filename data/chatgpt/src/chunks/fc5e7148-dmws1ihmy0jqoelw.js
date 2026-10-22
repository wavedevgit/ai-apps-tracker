import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    fzn as t,
    mzn as n
} from "./conversation-small-dwpaie1hln28efxb.js";

function r() {
    let e = this;
    e.compiler = t;

    function t(t) {
        let r = e.data(`toMarkdownExtensions`) || [];
        return n(t, {
            ...e.data(`settings`),
            fences: !0,
            bullet: `-`,
            bulletOther: `*`,
            listItemIndent: `one`,
            resourceLink: !0,
            tightDefinitions: !0,
            rule: `-`,
            extensions: [{
                handlers: {
                    text: a,
                    startend: i,
                    inlineMath: o
                }
            }, ...r]
        })
    }
}
var i, a, o, s = e((() => {
    t(), i = (e, t, n, r) => e.children.map(e => n.handle(e, void 0, n, r)).join(``), a = (e, t, n, r) => n.safe(e.value, r).replaceAll(`\\[`, `[`).replaceAll(`\\&`, `&`), o = e => `\\(${e.value}\\)`
}));
export {
    r as n, s as t
};
//# sourceMappingURL=fc5e7148-dmws1ihmy0jqoelw.js.map
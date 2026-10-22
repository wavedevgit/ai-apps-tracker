import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A5 as t,
    A8 as n
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    Ln as r,
    Rn as i
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    CZ as a,
    F5 as o,
    FBn as s,
    I5 as c,
    L2 as l,
    R2 as u,
    SZ as d,
    TBn as f,
    z2 as p
} from "./conversation-small-fh0oqifngkf5rvl1.js";
import {
    At as m,
    kt as h
} from "./82782bc9-ivetrmhdn140ze7c.js";
import {
    B_ as g,
    C_ as _,
    H_ as v,
    dw as y,
    mw as b,
    v_ as x,
    w_ as S,
    x_ as C,
    y_ as w
} from "./8b34dbc2-peb5nzi8z3rrflnv.js";

function T({
    availableSystemHints: e,
    composerController: t,
    intl: n,
    kind: r,
    prompt: i
}) {
    if (D(t)) return !1;
    let a = E(e).get(r);
    return a != null && O({
        composerController: t,
        intl: n,
        prompt: i ?? M[r],
        systemHint: a
    })
}

function E(e) {
    let t = o(e).filter(e => a(e, `tpp`)),
        n = new Map;
    for (let e of j) {
        let r = p(t, e);
        r != null && n.set(e, r)
    }
    return n
}

function D(e) {
    return x(e).locked && !k(e)
}

function O({
    composerController: e,
    intl: n,
    prompt: r,
    systemHint: i
}) {
    let a = g(e),
        {
            doc: o,
            schema: s
        } = a.state,
        c = s.nodes.paragraph,
        l = s.nodes[y],
        d = i.name.trim();
    if (c == null || l == null || d.length === 0) return !1;
    let p = typeof r == `string` ? `${A} ${r}` : n.formatMessage(r, {
            artifact: A
        }),
        m = p.indexOf(A);
    if (m === -1) return !1;
    let v = p.slice(0, m),
        b = p.slice(m + 24),
        C = [...v.length > 0 ? [s.text(v)] : [], f(l, {
            id: i.systemHint,
            kind: `system-hint`,
            keyword: d,
            systemHintType: i.systemHint
        }), ...b.length > 0 ? [s.text(b)] : []],
        T = c.create(null, C),
        E = a.state.tr.replaceWith(0, o.content.size, T);
    E = E.setSelection(h.atEnd(E.doc)).scrollIntoView();
    let D = !1;
    return t(() => {
        let t = x(e);
        if (t.locked) {
            if (!k(e)) return;
            S(e, {
                ...t,
                locked: !1
            })
        }
        let {
            activeConnectorSystemHintTypes: n
        } = t;
        for (let t of n) t !== i.systemHint && u(t) && _(e, t);
        w(e, i.systemHint), a.dispatch(E), D = !0
    }), D && a.focus(), D
}

function k(e) {
    let t = x(e);
    return e.conversation == null && e.options?.lockSystemHints !== !0 && e.options?.initialSystemHint == null && t.locked && t.activeSystemHintType == null && t.activeConnectorSystemHintTypes.size === 0 && t.activeCustomAgentSystemHintType == null
}
var A, j, M, N = e((() => {
    v(), s(), b(), C(), n(), l(), d(), c(), m(), i(), A = `__TPP_ARTIFACT_MENTION__`, j = [`document`, `presentation`, `spreadsheet`, `site`], M = r({
        document: {
            id: `chatgpt.tpp.sidebar.outputs.create_output_menu.document.prompt`,
            defaultMessage: `Create a new document with {artifact}. Start by asking me what it should be about.`
        },
        presentation: {
            id: `chatgpt.tpp.sidebar.outputs.create_output_menu.presentation.prompt`,
            defaultMessage: `Create a new presentation with {artifact}. Start by asking me what it should be about.`
        },
        spreadsheet: {
            id: `chatgpt.tpp.sidebar.outputs.create_output_menu.spreadsheet.prompt`,
            defaultMessage: `Create a new spreadsheet with {artifact}. Start by asking me what it should be about.`
        },
        site: {
            id: `chatgpt.tpp.sidebar.outputs.create_output_menu.site.prompt`,
            defaultMessage: `Create a new site with {artifact}. Start by asking me what it should be about.`
        }
    })
}));
export {
    E as i, D as n, T as r, N as t
};
//# sourceMappingURL=77fb69cd-f7zn560xv2iczew3.js.map
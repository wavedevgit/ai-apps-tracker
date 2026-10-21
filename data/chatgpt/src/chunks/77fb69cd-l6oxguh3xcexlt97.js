import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    k5 as t,
    k8 as n
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    Ln as r,
    Rn as i
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    F5 as a,
    I2 as o,
    L2 as s,
    P5 as c,
    R2 as l,
    SZ as u,
    pBn as d,
    rBn as f,
    xZ as p
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    At as m,
    kt as h
} from "./82782bc9-dyzlhaxotei12n1t.js";
import {
    L_ as g,
    b_ as _,
    cw as v,
    dw as y,
    g_ as b,
    h_ as x,
    v_ as S,
    x_ as C,
    z_ as w
} from "./8b34dbc2-egl8cz04n8nmlktg.js";

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
    let t = c(e).filter(e => u(e, `tpp`)),
        n = new Map;
    for (let e of j) {
        let r = l(t, e);
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
            schema: c
        } = a.state,
        l = c.nodes.paragraph,
        u = c.nodes[v],
        d = i.name.trim();
    if (l == null || u == null || d.length === 0) return !1;
    let p = typeof r == `string` ? `${A} ${r}` : n.formatMessage(r, {
            artifact: A
        }),
        m = p.indexOf(A);
    if (m === -1) return !1;
    let y = p.slice(0, m),
        S = p.slice(m + 24),
        w = [...y.length > 0 ? [c.text(y)] : [], f(u, {
            id: i.systemHint,
            kind: `system-hint`,
            keyword: d,
            systemHintType: i.systemHint
        }), ...S.length > 0 ? [c.text(S)] : []],
        T = l.create(null, w),
        E = a.state.tr.replaceWith(0, o.content.size, T);
    E = E.setSelection(h.atEnd(E.doc)).scrollIntoView();
    let D = !1;
    return t(() => {
        let t = x(e);
        if (t.locked) {
            if (!k(e)) return;
            C(e, {
                ...t,
                locked: !1
            })
        }
        let {
            activeConnectorSystemHintTypes: n
        } = t;
        for (let t of n) t !== i.systemHint && s(t) && _(e, t);
        b(e, i.systemHint), a.dispatch(E), D = !0
    }), D && a.focus(), D
}

function k(e) {
    let t = x(e);
    return e.conversation == null && e.options?.lockSystemHints !== !0 && e.options?.initialSystemHint == null && t.locked && t.activeSystemHintType == null && t.activeConnectorSystemHintTypes.size === 0 && t.activeCustomAgentSystemHintType == null
}
var A, j, M, N = e((() => {
    w(), d(), y(), S(), n(), o(), p(), a(), m(), i(), A = `__TPP_ARTIFACT_MENTION__`, j = [`document`, `presentation`, `spreadsheet`, `site`], M = r({
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
//# sourceMappingURL=77fb69cd-l6oxguh3xcexlt97.js.map
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B6 as t,
    B8 as n
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Ln as r,
    Rn as i
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    A2 as a,
    Fzn as o,
    R5 as s,
    Tzn as c,
    _Z as l,
    j2 as u,
    k2 as d,
    vZ as f,
    z5 as p
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    At as m,
    kt as h
} from "./82782bc9-h658ejxn3ufkvr7a.js";
import {
    I_ as g,
    R_ as _,
    __ as v,
    b_ as y,
    cw as b,
    dw as x,
    h_ as S,
    m_ as C,
    y_ as w
} from "./8b34dbc2-gf9wnwcahty27ylx.js";

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
    let t = s(e).filter(e => f(e, `tpp`)),
        n = new Map;
    for (let e of j) {
        let r = u(t, e);
        r != null && n.set(e, r)
    }
    return n
}

function D(e) {
    return C(e).locked && !k(e)
}

function O({
    composerController: e,
    intl: t,
    prompt: r,
    systemHint: i
}) {
    let o = g(e),
        {
            doc: s,
            schema: l
        } = o.state,
        u = l.nodes.paragraph,
        d = l.nodes[b],
        f = i.name.trim();
    if (u == null || d == null || f.length === 0) return !1;
    let p = typeof r == `string` ? `${A} ${r}` : t.formatMessage(r, {
            artifact: A
        }),
        m = p.indexOf(A);
    if (m === -1) return !1;
    let _ = p.slice(0, m),
        v = p.slice(m + 24),
        x = [..._.length > 0 ? [l.text(_)] : [], c(d, {
            id: i.systemHint,
            kind: `system-hint`,
            keyword: f,
            systemHintType: i.systemHint
        }), ...v.length > 0 ? [l.text(v)] : []],
        T = u.create(null, x),
        E = o.state.tr.replaceWith(0, s.content.size, T);
    E = E.setSelection(h.atEnd(E.doc)).scrollIntoView();
    let D = !1;
    return n(() => {
        let t = C(e);
        if (t.locked) {
            if (!k(e)) return;
            y(e, {
                ...t,
                locked: !1
            })
        }
        let {
            activeConnectorSystemHintTypes: n
        } = t;
        for (let t of n) t !== i.systemHint && a(t) && w(e, t);
        S(e, i.systemHint), o.dispatch(E), D = !0
    }), D && o.focus(), D
}

function k(e) {
    let t = C(e);
    return e.conversation == null && e.options?.lockSystemHints !== !0 && e.options?.initialSystemHint == null && t.locked && t.activeSystemHintType == null && t.activeConnectorSystemHintTypes.size === 0 && t.activeCustomAgentSystemHintType == null
}
var A, j, M, N = e((() => {
    _(), o(), x(), v(), t(), d(), l(), p(), m(), i(), A = `__TPP_ARTIFACT_MENTION__`, j = [`document`, `presentation`, `spreadsheet`, `site`], M = r({
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
//# sourceMappingURL=77fb69cd-nhrpnovgkw7needf.js.map
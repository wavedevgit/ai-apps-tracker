import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Aq as n,
    hs as r,
    k5 as i,
    k8 as a,
    kq as o,
    ys as s
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    Ln as c,
    Rn as l
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    F5 as u,
    G2 as d,
    H2 as f,
    P5 as p,
    SZ as m,
    nG as h,
    pBn as g,
    rBn as _,
    rG as v,
    xZ as y
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    $t as b,
    At as x,
    an as S,
    kt as C
} from "./82782bc9-dyzlhaxotei12n1t.js";
import {
    B_ as w,
    L_ as T,
    cw as E,
    dw as D,
    g_ as O,
    h_ as k,
    ho as A,
    po as j,
    v_ as M,
    z_ as N
} from "./8b34dbc2-egl8cz04n8nmlktg.js";
var P = t({
    createArtifactTemplateCreatorConversationOptions: () => L,
    createArtifactTemplateSelectionConversationState: () => R,
    insertArtifactTemplateCreatorPrompt$: () => I,
    insertArtifactTemplatePrompt$: () => B,
    resolveArtifactTemplateCreatorSystemHint: () => F,
    selectArtifactTemplateSkill: () => z
});

function F(e, t = []) {
    let n = new Set([H]);
    for (let e of t)(e.name === U || e.canonical_app_id === H) && (n.add(e.id), e.canonical_app_id != null && n.add(e.canonical_app_id));
    return p(e).find(e => {
        let t = o(e.systemHint);
        return t != null && m(e, `tpp`) && n.has(t) && e.name.trim().length > 0
    }) ?? null
}

function I({
    composerController: e,
    intl: t,
    request: n,
    systemHint: r
}) {
    if (k(e).locked) return !1;
    let a = T(e),
        {
            doc: o,
            schema: s
        } = a.state,
        c = s.nodes[E],
        l = r.name.trim();
    if (c == null || l.length === 0) return !1;
    let u = V(t, n, W),
        d = u.indexOf(W);
    if (d === -1) return !1;
    let f = C.atEnd(o),
        p = f.$from.nodeBefore,
        m = u.slice(0, d),
        h = u.slice(d + 32),
        g = [];
    p != null && (!p.isText || !/\s$/.test(p.text ?? ``)) && g.push(s.text(` `)), m.length > 0 && g.push(s.text(m)), g.push(_(c, {
        id: r.systemHint,
        kind: `system-hint`,
        keyword: l,
        systemHintType: r.systemHint
    })), h.length > 0 && g.push(s.text(h));
    let v = a.state.tr.insert(f.from, b.fromArray(g)).scrollIntoView();
    return v.setSelection(C.atEnd(v.doc)), i(() => {
        O(e, r.systemHint, {
            skipComposerAutofocus: !0
        }), a.dispatch(v)
    }), a.focus(), !0
}

function L(e, t) {
    let n = h({
        composerPrefillText: V(e, t, K),
        composerPrefillInlineSelectionPills: [{
            kind: `system-hint`,
            id: q,
            keyword: K,
            systemHintType: q,
            textToReplace: K
        }]
    });
    if (n == null) throw Error(`Artifact template composer prompt must not be empty`);
    return {
        params: new URLSearchParams({
            [r]: q
        }),
        state: n
    }
}

function R(e) {
    let t = h({
        composerPrefillInlineSelectionPills: [{
            kind: `skill`,
            id: e.id,
            keyword: e.displayName
        }]
    });
    if (t == null) throw Error(`Artifact template skill selection must not be empty`);
    return t
}

function z(e, t, n, r) {
    return A(e, {
        id: t.id,
        keyword: t.displayName
    }, n, r)
}

function B({
    composerController: e,
    intl: t,
    template: n,
    useInlineSelectionPill: r
}) {
    let i = t.formatMessage(Y.useTemplate, {
            kind: n.kind.replaceAll(`-`, `_`),
            template: G
        }),
        a = i.indexOf(G);
    if (a === -1) return !1;
    let o = i.slice(0, a),
        s = i.slice(a + 33),
        c = T(e),
        l = C.atEnd(c.state.doc).$from.nodeBefore,
        u = l != null && (!l.isText || !/\s$/.test(l.text ?? ``));
    return o.length > 0 && w(e)(u ? ` ${o}` : o), z(e, n, r) ? (s.length > 0 && w(e)(s.trimStart()), !0) : !1
}

function V(e, t, n) {
    return t.type === `edit` ? e.formatMessage(Y.editTemplate, {
        templateName: t.templateName,
        templateCreator: n
    }) : e.formatMessage(J[t.templateKind == null ? `generic` : f(t.templateKind)], {
        templateCreator: n
    })
}
var H, U, W, G, K, q, J, Y, X = e((() => {
    v(), N(), g(), D(), j(), M(), a(), y(), u(), s(), n(), d(), S(), x(), l(), H = `connector_openai_template_creator`, U = `template-creator`, W = `__TPP_TEMPLATE_CREATOR_MENTION__`, G = `__TPP_ARTIFACT_TEMPLATE_MENTION__`, K = `Template Creator`, q = `connector:${H}`, J = c({
        generic: {
            id: `chatgpt.artifact_templates.create.prompt`,
            defaultMessage: `Create a new template using {templateCreator}. First, explain how templates work and how to use them. Then ask me to upload a reference file and if needed interview me on how and when to use the template.`
        },
        document: {
            id: `chatgpt.home_composer.artifact_templates.create.prompt.document`,
            defaultMessage: `Create a new document template using {templateCreator}. First, explain how templates work and how to use them. Then ask me to upload a reference file and if needed interview me on how and when to use the template.`
        },
        presentation: {
            id: `chatgpt.home_composer.artifact_templates.create.prompt.presentation`,
            defaultMessage: `Create a new presentation template using {templateCreator}. First, explain how templates work and how to use them. Then ask me to upload a reference file and if needed interview me on how and when to use the template.`
        },
        spreadsheet: {
            id: `chatgpt.home_composer.artifact_templates.create.prompt.spreadsheet`,
            defaultMessage: `Create a new spreadsheet template using {templateCreator}. First, explain how templates work and how to use them. Then ask me to upload a reference file and if needed interview me on how and when to use the template.`
        },
        site: {
            id: `chatgpt.home_composer.artifact_templates.create.prompt.site`,
            defaultMessage: `Create a new Site template using {templateCreator}. First, explain how templates work and how to use them. Then ask me which existing Site project to use as the reference and if needed interview me on how and when to use the template.`
        }
    }), Y = c({
        editTemplate: {
            id: `chatgpt.artifact_templates.edit.prompt`,
            defaultMessage: `Edit the {templateName} template using {templateCreator}.`
        },
        useTemplate: {
            id: `hazelnuts.skillZipPreviewMessage.templatePrompt.v4`,
            defaultMessage: `{kind, select, document {Create a document using this {template} about…} presentation {Create a presentation using the {template} template about…} spreadsheet {Create a spreadsheet using this {template} about…} site {Create a Site using this {template} about…} image {Create an image using this {template} of…} email {Draft an email using this {template} about…} slack {Draft a Slack message using this {template} about…} google_docs {Create a Google Doc using the {template} template about…} google_slides {Create a Google Slides presentation using the {template} template about…} google_sheets {Create a Google Sheet using the {template} template about…} other {Create an artifact using this {template} about…}}`
        }
    })
}));
export {
    B as a, P as c, I as i, R as n, F as o, X as r, z as s, L as t
};
//# sourceMappingURL=41426670-b1bpyjnzt54oj3jh.js.map
import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Mq as n,
    Nq as r,
    g5 as i,
    g8 as a,
    ms as o,
    vs as s
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    Ln as c,
    Rn as l
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    B2 as u,
    CZ as d,
    SZ as f,
    U2 as p,
    U5 as m,
    Vzn as h,
    W5 as g,
    Zzn as _,
    iG as v,
    rG as y
} from "./conversation-small-nmt18uiom3b14vca.js";
import {
    $t as b,
    At as x,
    an as S,
    kt as C
} from "./82782bc9-g3liom11amtlr9kq.js";
import {
    B_ as w,
    L_ as T,
    cw as E,
    dw as D,
    g_ as O,
    ga as k,
    h_ as A,
    v_ as j,
    va as M,
    z_ as N
} from "./8b34dbc2-ojcl97ddvu2212q0.js";
var P = t({
    createArtifactTemplateCreatorConversationOptions: () => L,
    createArtifactTemplateSelectionConversationState: () => R,
    insertArtifactTemplateCreatorPrompt$: () => I,
    insertArtifactTemplatePrompt$: () => B,
    resolveArtifactTemplateCreatorSystemHint: () => F,
    selectArtifactTemplateSkill: () => z
});

function F(e, t = []) {
    let r = new Set([H]);
    for (let e of t)(e.name === U || e.canonical_app_id === H) && (r.add(e.id), e.canonical_app_id != null && r.add(e.canonical_app_id));
    return m(e).find(e => {
        let t = n(e.systemHint);
        return t != null && d(e, `tpp`) && r.has(t) && e.name.trim().length > 0
    }) ?? null
}

function I({
    composerController: e,
    intl: t,
    request: n,
    systemHint: r
}) {
    if (A(e).locked) return !1;
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
        g = u.slice(d + 32),
        _ = [];
    p != null && (!p.isText || !/\s$/.test(p.text ?? ``)) && _.push(s.text(` `)), m.length > 0 && _.push(s.text(m)), _.push(h(c, {
        id: r.systemHint,
        kind: `system-hint`,
        keyword: l,
        systemHintType: r.systemHint
    })), g.length > 0 && _.push(s.text(g));
    let v = a.state.tr.insert(f.from, b.fromArray(_)).scrollIntoView();
    return v.setSelection(C.atEnd(v.doc)), i(() => {
        O(e, r.systemHint, {
            skipComposerAutofocus: !0
        }), a.dispatch(v)
    }), a.focus(), !0
}

function L(e, t) {
    let n = y({
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
            [o]: q
        }),
        state: n
    }
}

function R(e) {
    let t = y({
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
    return M(e, {
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
    }) : e.formatMessage(J[t.templateKind == null ? `generic` : u(t.templateKind)], {
        templateCreator: n
    })
}
var H, U, W, G, K, q, J, Y, X = e((() => {
    v(), N(), _(), D(), k(), j(), a(), f(), g(), s(), r(), p(), S(), x(), l(), H = `connector_openai_template_creator`, U = `template-creator`, W = `__TPP_TEMPLATE_CREATOR_MENTION__`, G = `__TPP_ARTIFACT_TEMPLATE_MENTION__`, K = `Template Creator`, q = `connector:${H}`, J = c({
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
//# sourceMappingURL=41426670-jx2oz51w0q601ja2.js.map
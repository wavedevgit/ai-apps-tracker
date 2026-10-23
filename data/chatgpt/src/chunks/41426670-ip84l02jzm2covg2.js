import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as n,
    Aq as r,
    hs as i,
    kq as a,
    p5 as o,
    ys as s
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Ln as c,
    Rn as l
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    CZ as u,
    F5 as d,
    FBn as f,
    GBn as p,
    I5 as m,
    K2 as h,
    SZ as g,
    U2 as _,
    iG as v,
    rG as y
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    $t as b,
    At as x,
    an as S,
    kt as C
} from "./82782bc9-b4xbouzwkkyrfqq2.js";
import {
    B_ as w,
    H_ as T,
    U_ as E,
    dw as D,
    go as O,
    mo as k,
    mw as A,
    v_ as j,
    x_ as M,
    y_ as N
} from "./8b34dbc2-lmwubajnld74ksfm.js";
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
    return d(e).find(e => {
        let t = a(e.systemHint);
        return t != null && u(e, `tpp`) && n.has(t) && e.name.trim().length > 0
    }) ?? null
}

function I({
    composerController: e,
    intl: t,
    request: n,
    systemHint: r
}) {
    if (j(e).locked) return !1;
    let i = w(e),
        {
            doc: a,
            schema: s
        } = i.state,
        c = s.nodes[D],
        l = r.name.trim();
    if (c == null || l.length === 0) return !1;
    let u = V(t, n, W),
        d = u.indexOf(W);
    if (d === -1) return !1;
    let p = C.atEnd(a),
        m = p.$from.nodeBefore,
        h = u.slice(0, d),
        g = u.slice(d + 32),
        _ = [];
    m != null && (!m.isText || !/\s$/.test(m.text ?? ``)) && _.push(s.text(` `)), h.length > 0 && _.push(s.text(h)), _.push(f(c, {
        id: r.systemHint,
        kind: `system-hint`,
        keyword: l,
        systemHintType: r.systemHint
    })), g.length > 0 && _.push(s.text(g));
    let v = i.state.tr.insert(p.from, b.fromArray(_)).scrollIntoView();
    return v.setSelection(C.atEnd(v.doc)), o(() => {
        N(e, r.systemHint, {
            skipComposerAutofocus: !0
        }), i.dispatch(v)
    }), i.focus(), !0
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
            [i]: q
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
    return O(e, {
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
        c = w(e),
        l = C.atEnd(c.state.doc).$from.nodeBefore,
        u = l != null && (!l.isText || !/\s$/.test(l.text ?? ``));
    return o.length > 0 && E(e)(u ? ` ${o}` : o), z(e, n, r) ? (s.length > 0 && E(e)(s.trimStart()), !0) : !1
}

function V(e, t, n) {
    return t.type === `edit` ? e.formatMessage(Y.editTemplate, {
        templateName: t.templateName,
        templateCreator: n
    }) : e.formatMessage(J[t.templateKind == null ? `generic` : _(t.templateKind)], {
        templateCreator: n
    })
}
var H, U, W, G, K, q, J, Y, X = e((() => {
    v(), T(), p(), A(), k(), M(), n(), g(), m(), s(), r(), h(), S(), x(), l(), H = `connector_openai_template_creator`, U = `template-creator`, W = `__TPP_TEMPLATE_CREATOR_MENTION__`, G = `__TPP_ARTIFACT_TEMPLATE_MENTION__`, K = `Template Creator`, q = `connector:${H}`, J = c({
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
//# sourceMappingURL=41426670-ip84l02jzm2covg2.js.map
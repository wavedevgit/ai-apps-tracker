import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    BU as t,
    GE as n,
    M1 as r,
    Nq as i,
    R1 as a,
    S5 as o,
    Uq as s,
    YE as c,
    g8 as l,
    qE as u,
    zU as d
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    Ln as f,
    Rn as p
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Ajn as m,
    FCn as h,
    PCn as g,
    fSn as _,
    iG as v,
    rG as y,
    vgn as b,
    ygn as x
} from "./conversation-small-kzsalymynzuddxee.js";
import {
    v_ as S,
    y_ as C
} from "./c2675c8c-ossqum2x3eut0sh8.js";
import {
    Au as w,
    Iu as T,
    Lu as E,
    Mu as D,
    Nu as O,
    cy as k,
    ju as A,
    ny as j,
    xy as M
} from "./8b34dbc2-ba6wt3zxvh7jce7p.js";
async function N({
    navigate: e,
    pluginToEdit: t,
    surface: n = `work`,
    ...r
}) {
    let {
        signal: i,
        intl: a
    } = r, c = () => {
        i.aborted || d().danger(a.formatMessage({
            id: `chatgpt.plugins.creator.setup_error`,
            defaultMessage: `Couldn’t set up Plugin Creator. Check your access and try again.`
        }))
    };
    try {
        let l = await P({
            ...r,
            requireCreatePermission: t == null
        });
        if (i.aborted || t == null && !o(S) || l.status === `cancelled` || l.status === `connection_required`) return !1;
        if (l.status !== `connected`) return c(), !1;
        let u = s(l.pluginId),
            d = `@${I}`,
            f = t && s(t.id),
            p = t && `@${t.title}`;
        return await x(e, {
            params: new URLSearchParams([
                [`surface`, n],
                [`hints`, u], ...f ? [
                    [`hints`, f]
                ] : []
            ]),
            state: y({
                composerPrefillText: t ? a.formatMessage(L.updatePluginPrompt, {
                    pluginCreator: d,
                    plugin: p
                }) : a.formatMessage({
                    id: `chatgpt.plugins.creator.create.prompt`,
                    defaultMessage: `{pluginCreator} help me create a plugin`
                }, {
                    pluginCreator: d
                }),
                composerPrefillInlineSelectionPills: [{
                    kind: `system-hint`,
                    id: u,
                    keyword: I,
                    systemHintType: u,
                    textToReplace: d
                }, ...t && f && p ? [{
                    kind: `system-hint`,
                    id: f,
                    keyword: t.title,
                    systemHintType: f,
                    textToReplace: p
                }] : []]
            })
        }), !0
    } catch {
        return c(), !1
    }
}
async function P({
    queryClient: e,
    requestContext: t,
    signal: i,
    intl: a,
    pathname: o,
    search: s,
    requireCreatePermission: c
}) {
    let l = r(),
        d = () => {
            let e = r();
            return !i.aborted && (!c || S()) && l != null && l.id === t.accountId && e?.id === l.id && e.authUserId === l.authUserId && e.normalizedAccountUserId === l.normalizedAccountUserId
        };
    if (!d()) return {
        status: `cancelled`
    };
    let f = await e.fetchQuery(j(F, t));
    if (!d()) return {
        status: `cancelled`
    };
    if (f == null) return {
        status: `unavailable`
    };
    let p = async () => {
        let r = await D({
                queryClient: e,
                pluginId: f,
                requestContext: t,
                forceRefresh: !0,
                requireActiveConnectorLinks: !0
            }),
            i = e.getQueryData(k(e, f, t).queryKey);
        if (r == null || i == null || !T({
                availability: i.availability,
                installedPlugin: i.availability.installed ? i.plugin : void 0,
                plugin: i.plugin
            }) || r.canonicalAppId == null || !n(r.canonicalAppId, F)) return null;
        let a = r.connectorApps.find(e => n(e.id, F)),
            o = a && u(r.appAvailabilitiesById, a.id);
        return a == null || o?.available !== !0 || h(o) || !r.connectedConnectorAppIds.has(a.id) && !o.canInstall ? null : r.pluginInstalled && r.pluginEnabled && r.connectedConnectorAppIds.has(a.id)
    }, g = await p();
    return d() ? g == null ? {
        status: `unavailable`
    } : g ? {
        status: `connected`,
        pluginId: f
    } : new Promise(n => {
        let r = e => {
                i.removeEventListener(`abort`, c);
                let t = d() ? e : `cancelled`;
                n(t === `connected` ? {
                    status: t,
                    pluginId: f
                } : {
                    status: t
                })
            },
            c = () => r(`cancelled`);
        i.addEventListener(`abort`, c, {
            once: !0
        }), A({
            queryClient: e,
            requestContext: t,
            signal: i,
            pluginId: f,
            installAccountId: l?.id,
            intl: a,
            pathname: o,
            search: s,
            searchParams: new URLSearchParams(s),
            closeOnCompletion: !0,
            requireActiveConnectorLinks: !0,
            autoConnectPluginCreator: !0,
            surface: m.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_DETAILS,
            onConnectionResult: e => {
                if (e !== `connected` || !d()) {
                    r(e);
                    return
                }
                p().then(e => r(e ? `connected` : `unavailable`)).catch(() => r(`retryable_error`))
            }
        }).catch(() => r(`retryable_error`))
    }) : {
        status: `cancelled`
    }
}
var F, I, L, R = e((() => {
    c(), v(), b(), C(), g(), E(), w(), O(), M(), _(), l(), a(), i(), t(), p(), F = `connector_openai_plugin_creator`, I = `Plugin Creator`, L = f({
        updatePluginPrompt: {
            id: `chatgpt.plugins.details.gpt_migration.edit.prompt.with_creator`,
            defaultMessage: `{pluginCreator} update {plugin} with the following changes:`
        }
    })
}));
export {
    N as n, R as t
};
//# sourceMappingURL=852051ee-fj1rswrl86raq5hi.js.map
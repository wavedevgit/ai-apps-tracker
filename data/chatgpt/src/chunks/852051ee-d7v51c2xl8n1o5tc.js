import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Hq as t,
    JE as n,
    KE as r,
    L1 as i,
    Mq as a,
    RU as o,
    WE as s,
    h8 as c,
    j1 as l,
    x5 as u,
    zU as d
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Ln as f,
    Rn as p
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Ejn as m,
    MCn as h,
    eG as g,
    ggn as _,
    hgn as v,
    jCn as y,
    lSn as b,
    tG as x
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    v_ as S,
    y_ as C
} from "./c2675c8c-9bs3zsr3vq259es7.js";
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
} from "./8b34dbc2-k1zgxrtsww83602u.js";
async function N({
    navigate: e,
    pluginToEdit: n,
    surface: r = `work`,
    ...i
}) {
    let {
        signal: a,
        intl: s
    } = i, c = () => {
        a.aborted || o().danger(s.formatMessage({
            id: `chatgpt.plugins.creator.setup_error`,
            defaultMessage: `Couldn’t set up Plugin Creator. Check your access and try again.`
        }))
    };
    try {
        let o = await P({
            ...i,
            requireCreatePermission: n == null
        });
        if (a.aborted || n == null && !u(S) || o.status === `cancelled` || o.status === `connection_required`) return !1;
        if (o.status !== `connected`) return c(), !1;
        let l = t(o.pluginId),
            d = `@${I}`,
            f = n && t(n.id),
            p = n && `@${n.title}`;
        return await _(e, {
            params: new URLSearchParams([
                [`surface`, r],
                [`hints`, l], ...f ? [
                    [`hints`, f]
                ] : []
            ]),
            state: g({
                composerPrefillText: n ? s.formatMessage(L.updatePluginPrompt, {
                    pluginCreator: d,
                    plugin: p
                }) : s.formatMessage({
                    id: `chatgpt.plugins.creator.create.prompt`,
                    defaultMessage: `{pluginCreator} help me create a plugin`
                }, {
                    pluginCreator: d
                }),
                composerPrefillInlineSelectionPills: [{
                    kind: `system-hint`,
                    id: l,
                    keyword: I,
                    systemHintType: l,
                    textToReplace: d
                }, ...n && f && p ? [{
                    kind: `system-hint`,
                    id: f,
                    keyword: n.title,
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
    signal: n,
    intl: i,
    pathname: a,
    search: o,
    requireCreatePermission: c
}) {
    let u = l(),
        d = () => {
            let e = l();
            return !n.aborted && (!c || S()) && u != null && u.id === t.accountId && e?.id === u.id && e.authUserId === u.authUserId && e.normalizedAccountUserId === u.normalizedAccountUserId
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
        let n = await D({
                queryClient: e,
                pluginId: f,
                requestContext: t,
                forceRefresh: !0,
                requireActiveConnectorLinks: !0
            }),
            i = e.getQueryData(k(e, f, t).queryKey);
        if (n == null || i == null || !T({
                availability: i.availability,
                installedPlugin: i.availability.installed ? i.plugin : void 0,
                plugin: i.plugin
            }) || n.canonicalAppId == null || !s(n.canonicalAppId, F)) return null;
        let a = n.connectorApps.find(e => s(e.id, F)),
            o = a && r(n.appAvailabilitiesById, a.id);
        return a == null || o?.available !== !0 || h(o) || !n.connectedConnectorAppIds.has(a.id) && !o.canInstall ? null : n.pluginInstalled && n.pluginEnabled && n.connectedConnectorAppIds.has(a.id)
    }, g = await p();
    return d() ? g == null ? {
        status: `unavailable`
    } : g ? {
        status: `connected`,
        pluginId: f
    } : new Promise(r => {
        let s = e => {
                n.removeEventListener(`abort`, c);
                let t = d() ? e : `cancelled`;
                r(t === `connected` ? {
                    status: t,
                    pluginId: f
                } : {
                    status: t
                })
            },
            c = () => s(`cancelled`);
        n.addEventListener(`abort`, c, {
            once: !0
        }), A({
            queryClient: e,
            requestContext: t,
            signal: n,
            pluginId: f,
            installAccountId: u?.id,
            intl: i,
            pathname: a,
            search: o,
            searchParams: new URLSearchParams(o),
            closeOnCompletion: !0,
            requireActiveConnectorLinks: !0,
            autoConnectPluginCreator: !0,
            surface: m.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_DETAILS,
            onConnectionResult: e => {
                if (e !== `connected` || !d()) {
                    s(e);
                    return
                }
                p().then(e => s(e ? `connected` : `unavailable`)).catch(() => s(`retryable_error`))
            }
        }).catch(() => s(`retryable_error`))
    }) : {
        status: `cancelled`
    }
}
var F, I, L, R = e((() => {
    n(), x(), v(), C(), y(), E(), w(), O(), M(), b(), c(), i(), a(), d(), p(), F = `connector_openai_plugin_creator`, I = `Plugin Creator`, L = f({
        updatePluginPrompt: {
            id: `chatgpt.plugins.details.gpt_migration.edit.prompt.with_creator`,
            defaultMessage: `{pluginCreator} update {plugin} with the following changes:`
        }
    })
}));
export {
    N as n, R as t
};
//# sourceMappingURL=852051ee-d7v51c2xl8n1o5tc.js.map
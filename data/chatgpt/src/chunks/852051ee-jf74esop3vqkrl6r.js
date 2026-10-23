import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    Aq as n,
    Bq as r,
    IU as i,
    LU as a,
    QE as o,
    V1 as s,
    XE as c,
    eD as l,
    q1 as u,
    y5 as d
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Ln as f,
    Rn as p
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    JSn as m,
    _wn as h,
    e_n as g,
    gwn as _,
    iG as v,
    rG as y,
    t_n as b,
    xMn as x
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    A_ as S,
    k_ as C
} from "./c2675c8c-oz03twoan08d72ud.js";
import {
    Bu as w,
    Fu as T,
    Iu as E,
    Nu as D,
    Pu as O,
    ay as k,
    dy as A,
    wy as j,
    zu as M
} from "./8b34dbc2-lmwubajnld74ksfm.js";
async function N({
    navigate: e,
    pluginToEdit: t,
    surface: n = `work`,
    ...a
}) {
    let {
        signal: o,
        intl: s
    } = a, c = () => {
        o.aborted || i().danger(s.formatMessage({
            id: `chatgpt.plugins.creator.setup_error`,
            defaultMessage: `Couldn’t set up Plugin Creator. Check your access and try again.`
        }))
    };
    try {
        let i = await P({
            ...a,
            requireCreatePermission: t == null
        });
        if (o.aborted || t == null && !d(C) || i.status === `cancelled` || i.status === `connection_required`) return !1;
        if (i.status !== `connected`) return c(), !1;
        let l = r(i.pluginId),
            u = `@${I}`,
            f = t && r(t.id),
            p = t && `@${t.title}`;
        return await b(e, {
            params: new URLSearchParams([
                [`surface`, n],
                [`hints`, l], ...f ? [
                    [`hints`, f]
                ] : []
            ]),
            state: y({
                composerPrefillText: t ? s.formatMessage(L.updatePluginPrompt, {
                    pluginCreator: u,
                    plugin: p
                }) : s.formatMessage({
                    id: `chatgpt.plugins.creator.create.prompt`,
                    defaultMessage: `{pluginCreator} help me create a plugin`
                }, {
                    pluginCreator: u
                }),
                composerPrefillInlineSelectionPills: [{
                    kind: `system-hint`,
                    id: l,
                    keyword: I,
                    systemHintType: l,
                    textToReplace: u
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
    signal: n,
    intl: r,
    pathname: i,
    search: a,
    requireCreatePermission: l
}) {
    let u = s(),
        d = () => {
            let e = s();
            return !n.aborted && (!l || C()) && u != null && u.id === t.accountId && e?.id === u.id && e.authUserId === u.authUserId && e.normalizedAccountUserId === u.normalizedAccountUserId
        };
    if (!d()) return {
        status: `cancelled`
    };
    let f = await e.fetchQuery(k(F, t));
    if (!d()) return {
        status: `cancelled`
    };
    if (f == null) return {
        status: `unavailable`
    };
    let p = async () => {
        let n = await T({
                queryClient: e,
                pluginId: f,
                requestContext: t,
                forceRefresh: !0,
                requireActiveConnectorLinks: !0
            }),
            r = e.getQueryData(A(e, f, t).queryKey);
        if (n == null || r == null || !M({
                availability: r.availability,
                installedPlugin: r.availability.installed ? r.plugin : void 0,
                plugin: r.plugin
            }) || n.canonicalAppId == null || !c(n.canonicalAppId, F)) return null;
        let i = n.connectorApps.find(e => c(e.id, F)),
            a = i && o(n.appAvailabilitiesById, i.id);
        return i == null || a?.available !== !0 || h(a) || !n.connectedConnectorAppIds.has(i.id) && !a.canInstall ? null : n.pluginInstalled && n.pluginEnabled && n.connectedConnectorAppIds.has(i.id)
    }, m = await p();
    return d() ? m == null ? {
        status: `unavailable`
    } : m ? {
        status: `connected`,
        pluginId: f
    } : new Promise(o => {
        let s = e => {
                n.removeEventListener(`abort`, c);
                let t = d() ? e : `cancelled`;
                o(t === `connected` ? {
                    status: t,
                    pluginId: f
                } : {
                    status: t
                })
            },
            c = () => s(`cancelled`);
        n.addEventListener(`abort`, c, {
            once: !0
        }), O({
            queryClient: e,
            requestContext: t,
            signal: n,
            pluginId: f,
            installAccountId: u?.id,
            intl: r,
            pathname: i,
            search: a,
            searchParams: new URLSearchParams(a),
            closeOnCompletion: !0,
            requireActiveConnectorLinks: !0,
            autoConnectPluginCreator: !0,
            surface: x.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_DETAILS,
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
    l(), v(), g(), S(), _(), w(), D(), E(), j(), m(), t(), u(), n(), a(), p(), F = `connector_openai_plugin_creator`, I = `Plugin Creator`, L = f({
        updatePluginPrompt: {
            id: `chatgpt.plugins.details.gpt_migration.edit.prompt.with_creator`,
            defaultMessage: `{pluginCreator} update {plugin} with the following changes:`
        }
    })
}));
export {
    N as n, R as t
};
//# sourceMappingURL=852051ee-jf74esop3vqkrl6r.js.map
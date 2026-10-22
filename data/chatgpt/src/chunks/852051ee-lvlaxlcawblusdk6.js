import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Aq as t,
    Bq as n,
    F5 as r,
    IU as i,
    LU as a,
    QE as o,
    V1 as s,
    XE as c,
    eD as l,
    k8 as u,
    q1 as d
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Ln as f,
    Rn as p
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    WSn as m,
    Xgn as h,
    Zgn as g,
    fwn as _,
    iG as v,
    pwn as y,
    rG as b,
    uMn as x
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    C_ as S,
    S_ as C
} from "./c2675c8c-otyjprdiowg2v8hl.js";
import {
    Cy as w,
    Fu as T,
    Mu as E,
    Nu as D,
    Pu as O,
    Ru as k,
    iy as A,
    uy as j,
    zu as M
} from "./8b34dbc2-n194ohawifys3bko.js";
async function N({
    navigate: e,
    pluginToEdit: t,
    surface: a = `work`,
    ...o
}) {
    let {
        signal: s,
        intl: c
    } = o, l = () => {
        s.aborted || i().danger(c.formatMessage({
            id: `chatgpt.plugins.creator.setup_error`,
            defaultMessage: `Couldn’t set up Plugin Creator. Check your access and try again.`
        }))
    };
    try {
        let i = await P({
            ...o,
            requireCreatePermission: t == null
        });
        if (s.aborted || t == null && !r(C) || i.status === `cancelled` || i.status === `connection_required`) return !1;
        if (i.status !== `connected`) return l(), !1;
        let u = n(i.pluginId),
            d = `@${I}`,
            f = t && n(t.id),
            p = t && `@${t.title}`;
        return await g(e, {
            params: new URLSearchParams([
                [`surface`, a],
                [`hints`, u], ...f ? [
                    [`hints`, f]
                ] : []
            ]),
            state: b({
                composerPrefillText: t ? c.formatMessage(L.updatePluginPrompt, {
                    pluginCreator: d,
                    plugin: p
                }) : c.formatMessage({
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
        return l(), !1
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
    let f = await e.fetchQuery(A(F, t));
    if (!d()) return {
        status: `cancelled`
    };
    if (f == null) return {
        status: `unavailable`
    };
    let p = async () => {
        let n = await O({
                queryClient: e,
                pluginId: f,
                requestContext: t,
                forceRefresh: !0,
                requireActiveConnectorLinks: !0
            }),
            r = e.getQueryData(j(e, f, t).queryKey);
        if (n == null || r == null || !k({
                availability: r.availability,
                installedPlugin: r.availability.installed ? r.plugin : void 0,
                plugin: r.plugin
            }) || n.canonicalAppId == null || !c(n.canonicalAppId, F)) return null;
        let i = n.connectorApps.find(e => c(e.id, F)),
            a = i && o(n.appAvailabilitiesById, i.id);
        return i == null || a?.available !== !0 || y(a) || !n.connectedConnectorAppIds.has(i.id) && !a.canInstall ? null : n.pluginInstalled && n.pluginEnabled && n.connectedConnectorAppIds.has(i.id)
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
        }), D({
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
    l(), v(), h(), S(), _(), M(), E(), T(), w(), m(), u(), d(), t(), a(), p(), F = `connector_openai_plugin_creator`, I = `Plugin Creator`, L = f({
        updatePluginPrompt: {
            id: `chatgpt.plugins.details.gpt_migration.edit.prompt.with_creator`,
            defaultMessage: `{pluginCreator} update {plugin} with the following changes:`
        }
    })
}));
export {
    N as n, R as t
};
//# sourceMappingURL=852051ee-lvlaxlcawblusdk6.js.map
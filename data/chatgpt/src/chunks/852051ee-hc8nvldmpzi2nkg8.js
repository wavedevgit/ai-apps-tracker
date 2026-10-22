import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    Aq as n,
    Bq as r,
    I5 as i,
    IU as a,
    LU as o,
    QE as s,
    V1 as c,
    XE as l,
    eD as u,
    q1 as d
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    Ln as f,
    Rn as p
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $gn as m,
    e_n as h,
    gwn as g,
    hwn as _,
    iG as v,
    pMn as y,
    qSn as b,
    rG as x
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    O_ as S,
    k_ as C
} from "./c2675c8c-f8x469cgefxzeo6l.js";
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
} from "./8b34dbc2-ik628tlti8ozm9vq.js";
async function N({
    navigate: e,
    pluginToEdit: t,
    surface: n = `work`,
    ...o
}) {
    let {
        signal: s,
        intl: c
    } = o, l = () => {
        s.aborted || a().danger(c.formatMessage({
            id: `chatgpt.plugins.creator.setup_error`,
            defaultMessage: `Couldn’t set up Plugin Creator. Check your access and try again.`
        }))
    };
    try {
        let a = await P({
            ...o,
            requireCreatePermission: t == null
        });
        if (s.aborted || t == null && !i(S) || a.status === `cancelled` || a.status === `connection_required`) return !1;
        if (a.status !== `connected`) return l(), !1;
        let u = r(a.pluginId),
            d = `@${I}`,
            f = t && r(t.id),
            p = t && `@${t.title}`;
        return await h(e, {
            params: new URLSearchParams([
                [`surface`, n],
                [`hints`, u], ...f ? [
                    [`hints`, f]
                ] : []
            ]),
            state: x({
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
    requireCreatePermission: o
}) {
    let u = c(),
        d = () => {
            let e = c();
            return !n.aborted && (!o || S()) && u != null && u.id === t.accountId && e?.id === u.id && e.authUserId === u.authUserId && e.normalizedAccountUserId === u.normalizedAccountUserId
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
            }) || n.canonicalAppId == null || !l(n.canonicalAppId, F)) return null;
        let i = n.connectorApps.find(e => l(e.id, F)),
            a = i && s(n.appAvailabilitiesById, i.id);
        return i == null || a?.available !== !0 || g(a) || !n.connectedConnectorAppIds.has(i.id) && !a.canInstall ? null : n.pluginInstalled && n.pluginEnabled && n.connectedConnectorAppIds.has(i.id)
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
            surface: y.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_DETAILS,
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
    u(), v(), m(), C(), _(), w(), D(), E(), j(), b(), t(), d(), n(), o(), p(), F = `connector_openai_plugin_creator`, I = `Plugin Creator`, L = f({
        updatePluginPrompt: {
            id: `chatgpt.plugins.details.gpt_migration.edit.prompt.with_creator`,
            defaultMessage: `{pluginCreator} update {plugin} with the following changes:`
        }
    })
}));
export {
    N as n, R as t
};
//# sourceMappingURL=852051ee-hc8nvldmpzi2nkg8.js.map
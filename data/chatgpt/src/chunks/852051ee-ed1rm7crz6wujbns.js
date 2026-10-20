import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as t,
    Hq as n,
    I1 as r,
    JE as i,
    KE as a,
    Mq as o,
    RU as s,
    WE as c,
    b5 as l,
    m8 as u,
    zU as d
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Rn as f,
    zn as p
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    ACn as m,
    Ajn as h,
    cSn as g,
    eG as _,
    hgn as v,
    jCn as y,
    mgn as b,
    tG as x
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    G_ as S,
    K_ as C
} from "./c2675c8c-nxl2ic2ofk2vw70s.js";
import {
    Au as w,
    Iu as T,
    Lu as E,
    Mu as D,
    Nu as O,
    by as k,
    ju as A,
    sy as j,
    ty as M
} from "./8b34dbc2-d4icgkio4i3wfm6q.js";
async function N({
    navigate: e,
    pluginToEdit: t,
    surface: r = `work`,
    ...i
}) {
    let {
        signal: a,
        intl: o
    } = i, c = () => {
        a.aborted || s().danger(o.formatMessage({
            id: `chatgpt.plugins.creator.setup_error`,
            defaultMessage: `Couldn’t set up Plugin Creator. Check your access and try again.`
        }))
    };
    try {
        let s = await P({
            ...i,
            requireCreatePermission: t == null
        });
        if (a.aborted || t == null && !l(S) || s.status === `cancelled` || s.status === `connection_required`) return !1;
        if (s.status !== `connected`) return c(), !1;
        let u = n(s.pluginId),
            d = `@${I}`,
            f = t && n(t.id),
            p = t && `@${t.title}`;
        return await v(e, {
            params: new URLSearchParams([
                [`surface`, r],
                [`hints`, u], ...f ? [
                    [`hints`, f]
                ] : []
            ]),
            state: _({
                composerPrefillText: t ? o.formatMessage(L.updatePluginPrompt, {
                    pluginCreator: d,
                    plugin: p
                }) : o.formatMessage({
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
    requestContext: n,
    signal: r,
    intl: i,
    pathname: o,
    search: s,
    requireCreatePermission: l
}) {
    let u = t(),
        d = () => {
            let e = t();
            return !r.aborted && (!l || S()) && u != null && u.id === n.accountId && e?.id === u.id && e.authUserId === u.authUserId && e.normalizedAccountUserId === u.normalizedAccountUserId
        };
    if (!d()) return {
        status: `cancelled`
    };
    let f = await e.fetchQuery(M(F, n));
    if (!d()) return {
        status: `cancelled`
    };
    if (f == null) return {
        status: `unavailable`
    };
    let p = async () => {
        let t = await D({
                queryClient: e,
                pluginId: f,
                requestContext: n,
                forceRefresh: !0,
                requireActiveConnectorLinks: !0
            }),
            r = e.getQueryData(j(e, f, n).queryKey);
        if (t == null || r == null || !T({
                availability: r.availability,
                installedPlugin: r.availability.installed ? r.plugin : void 0,
                plugin: r.plugin
            }) || t.canonicalAppId == null || !c(t.canonicalAppId, F)) return null;
        let i = t.connectorApps.find(e => c(e.id, F)),
            o = i && a(t.appAvailabilitiesById, i.id);
        return i == null || o?.available !== !0 || y(o) || !t.connectedConnectorAppIds.has(i.id) && !o.canInstall ? null : t.pluginInstalled && t.pluginEnabled && t.connectedConnectorAppIds.has(i.id)
    }, m = await p();
    return d() ? m == null ? {
        status: `unavailable`
    } : m ? {
        status: `connected`,
        pluginId: f
    } : new Promise(t => {
        let a = e => {
                r.removeEventListener(`abort`, c);
                let n = d() ? e : `cancelled`;
                t(n === `connected` ? {
                    status: n,
                    pluginId: f
                } : {
                    status: n
                })
            },
            c = () => a(`cancelled`);
        r.addEventListener(`abort`, c, {
            once: !0
        }), A({
            queryClient: e,
            requestContext: n,
            signal: r,
            pluginId: f,
            installAccountId: u?.id,
            intl: i,
            pathname: o,
            search: s,
            searchParams: new URLSearchParams(s),
            closeOnCompletion: !0,
            requireActiveConnectorLinks: !0,
            autoConnectPluginCreator: !0,
            surface: h.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_DETAILS,
            onConnectionResult: e => {
                if (e !== `connected` || !d()) {
                    a(e);
                    return
                }
                p().then(e => a(e ? `connected` : `unavailable`)).catch(() => a(`retryable_error`))
            }
        }).catch(() => a(`retryable_error`))
    }) : {
        status: `cancelled`
    }
}
var F, I, L, R = e((() => {
    i(), x(), b(), C(), m(), E(), w(), O(), k(), g(), u(), r(), o(), d(), p(), F = `connector_openai_plugin_creator`, I = `Plugin Creator`, L = f({
        updatePluginPrompt: {
            id: `chatgpt.plugins.details.gpt_migration.edit.prompt.with_creator`,
            defaultMessage: `{pluginCreator} update {plugin} with the following changes:`
        }
    })
}));
export {
    N as n, R as t
};
//# sourceMappingURL=852051ee-ed1rm7crz6wujbns.js.map
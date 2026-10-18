import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AE as t,
    B6 as n,
    EE as r,
    K8 as i,
    OE as a,
    fU as o,
    gq as s,
    i1 as c,
    oq as l,
    pU as u,
    u1 as d
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Ln as f,
    Rn as p
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $W as m,
    Jxn as h,
    QW as g,
    _Cn as _,
    egn as v,
    gCn as y,
    mjn as b,
    tgn as x
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    U_ as S,
    W_ as C
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
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
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
async function N({
    navigate: e,
    pluginToEdit: t,
    surface: n = `work`,
    ...r
}) {
    let {
        signal: a,
        intl: c
    } = r, l = () => {
        a.aborted || o().danger(c.formatMessage({
            id: `chatgpt.plugins.creator.setup_error`,
            defaultMessage: `Couldn’t set up Plugin Creator. Check your access and try again.`
        }))
    };
    try {
        let o = await P({
            ...r,
            requireCreatePermission: t == null
        });
        if (a.aborted || t == null && !i(S) || o.status === `cancelled` || o.status === `connection_required`) return !1;
        if (o.status !== `connected`) return l(), !1;
        let u = s(o.pluginId),
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
            state: g({
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
    intl: i,
    pathname: o,
    search: s,
    requireCreatePermission: l
}) {
    let u = c(),
        d = () => {
            let e = c();
            return !n.aborted && (!l || S()) && u != null && u.id === t.accountId && e?.id === u.id && e.authUserId === u.authUserId && e.normalizedAccountUserId === u.normalizedAccountUserId
        };
    if (!d()) return {
        status: `cancelled`
    };
    let f = await e.fetchQuery(M(F, t));
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
            i = e.getQueryData(j(e, f, t).queryKey);
        if (n == null || i == null || !T({
                availability: i.availability,
                installedPlugin: i.availability.installed ? i.plugin : void 0,
                plugin: i.plugin
            }) || n.canonicalAppId == null || !r(n.canonicalAppId, F)) return null;
        let o = n.connectorApps.find(e => r(e.id, F)),
            s = o && a(n.appAvailabilitiesById, o.id);
        return o == null || s?.available !== !0 || _(s) || !n.connectedConnectorAppIds.has(o.id) && !s.canInstall ? null : n.pluginInstalled && n.pluginEnabled && n.connectedConnectorAppIds.has(o.id)
    }, m = await p();
    return d() ? m == null ? {
        status: `unavailable`
    } : m ? {
        status: `connected`,
        pluginId: f
    } : new Promise(r => {
        let a = e => {
                n.removeEventListener(`abort`, c);
                let t = d() ? e : `cancelled`;
                r(t === `connected` ? {
                    status: t,
                    pluginId: f
                } : {
                    status: t
                })
            },
            c = () => a(`cancelled`);
        n.addEventListener(`abort`, c, {
            once: !0
        }), A({
            queryClient: e,
            requestContext: t,
            signal: n,
            pluginId: f,
            installAccountId: u?.id,
            intl: i,
            pathname: o,
            search: s,
            searchParams: new URLSearchParams(s),
            closeOnCompletion: !0,
            requireActiveConnectorLinks: !0,
            autoConnectPluginCreator: !0,
            surface: b.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_DETAILS,
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
    t(), m(), v(), C(), y(), E(), w(), O(), k(), h(), n(), d(), l(), u(), p(), F = `connector_openai_plugin_creator`, I = `Plugin Creator`, L = f({
        updatePluginPrompt: {
            id: `chatgpt.plugins.details.gpt_migration.edit.prompt.with_creator`,
            defaultMessage: `{pluginCreator} update {plugin} with the following changes:`
        }
    })
}));
export {
    N as n, R as t
};
//# sourceMappingURL=852051ee-oofqa62wbiwr728i.js.map
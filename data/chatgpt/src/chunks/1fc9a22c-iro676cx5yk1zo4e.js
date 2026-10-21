import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ln as t,
    Rn as n
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Qv as r
} from "./c2675c8c-ossqum2x3eut0sh8.js";
var i, a, o, s, c, l, u, d = e((() => {
    r(), n(), i = e => [e.primaryConnector, ...e.relatedConnectors].flatMap(e => [e.id, e.template_id].filter(e => e != null && e !== ``)), a = e => {
        if (e.requiredAppIdGroups != null) return e.requiredAppIdGroups;
        if (e.appManifest == null) return [...new Set(e.appIds)].map(e => [e]);
        let t = new Set,
            n = new Set;
        return Object.values(e.appManifest.apps).forEach(e => {
            e.required === !1 ? t.add(e.id) : n.add(e.id)
        }), [...new Set(e.appIds.filter(e => !t.has(e) || n.has(e)))].map(e => [e])
    }, o = e => e.some(e => e === !0) ? !0 : e.some(e => e == null) ? null : !1, s = e => e.some(e => e === !1) ? !1 : !e.some(e => e == null) || null, c = ({
        referencedPlugins: e,
        appEnabledById: t,
        targetAppIds: n,
        targetEnabled: r,
        selectedPluginId: i
    }) => {
        let c = new Map;
        e.forEach(e => {
            c.has(e.id) || c.set(e.id, e)
        });
        let l = [];
        for (let e of c.values()) {
            let i = a(e);
            if (i.length === 0) continue;
            let c = s(i.map(e => o(e.map(e => t.get(e))))),
                u = s(i.map(e => o(e.map(e => n.has(e) ? r : t.get(e)))));
            if (c == null || u == null) return {
                complete: !1,
                plugins: []
            };
            c !== u && u === r && l.push(e)
        }
        return l.sort((e, t) => e.id === i ? -1 : t.id === i ? 1 : e.displayName.localeCompare(t.displayName) || e.id.localeCompare(t.id)), {
            complete: !0,
            plugins: l.map(({
                id: e,
                displayName: t,
                interface: n
            }) => ({
                id: e,
                displayName: t,
                iconUrl: n.logoUrl ?? n.composerIconUrl ?? null
            }))
        }
    }, l = (e, t) => {
        let n = t.slice(0, 2),
            r = t.length - n.length,
            i = e.formatList(n, {
                type: r === 0 ? `conjunction` : `unit`,
                style: `long`
            });
        return r === 0 ? i : e.formatMessage(u.namesWithOverflow, {
            names: i,
            remainingCount: r
        })
    }, u = t({
        enableSingle: {
            id: `admin.plugins.app_management.plugin_impact.enable.summary.single`,
            defaultMessage: `Enables {pluginName} plugin`
        },
        namesWithOverflow: {
            id: `admin.plugins.app_management.plugin_impact.names_with_overflow`,
            defaultMessage: `{names}, and {remainingCount, plural, one {# more plugin} other {# more plugins}}`
        },
        enable: {
            id: `admin.plugins.app_management.plugin_impact.enable.summary`,
            defaultMessage: `Enables {pluginNames}.`
        },
        disable: {
            id: `admin.plugins.app_management.plugin_impact.disable.summary`,
            defaultMessage: `Disables {pluginNames}.`
        },
        empty: {
            id: `admin.plugins.app_management.plugin_impact.empty.summary`,
            defaultMessage: `No plugins will change status.`
        },
        loading: {
            id: `admin.plugins.app_management.plugin_impact.loading.aria_label`,
            defaultMessage: `Loading affected plugins`
        }
    })
}));
export {
    d as a, i, c as n, l as r, u as t
};
//# sourceMappingURL=1fc9a22c-iro676cx5yk1zo4e.js.map
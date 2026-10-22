import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    N as t,
    O as n,
    q as r,
    s as i,
    w as a,
    wn as o
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Lt as s,
    KLt as c
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
var l, u, d, f, p, m, h, g, _, v = e((() => {
    l = o(), s(), i(), u = e => {
        let t = [],
            n = new Set;
        for (let r of e) {
            let e = r.trim();
            e.length === 0 || n.has(e) || (n.add(e), t.push(e))
        }
        return t
    }, d = e => {
        if (typeof e != `string`) return null;
        let t = e.trim();
        return t.length > 0 ? t : null
    }, f = e => {
        let t = e?.supportedAuthTypes;
        return t != null && t.length > 0 && t.every(e => e === `NONE`)
    }, p = e => ({
        id: e.id,
        name: e.name,
        description: d(e.description),
        logo_url: d(e.logo_url),
        logo_url_dark: d(e.logo_url_dark),
        icon_assets: e.icon_assets ?? null,
        icon_dark_assets: e.icon_dark_assets ?? null,
        distribution_channel: e.distribution_channel ?? null,
        connector_type: e.connector_type ?? null,
        status: e.status ?? null,
        supportedAuthTypes: e.supported_auth_types ?? null
    }), m = async (e, t) => {
        let n = u(e);
        if (n.length === 0) return {
            appDisplays: [],
            missingAppIds: [],
            displayById: new Map
        };
        let r = await c({
                appIds: n,
                signal: t
            }),
            i = r.apps.map(p);
        return {
            appDisplays: i,
            missingAppIds: r.missing_app_ids,
            displayById: new Map(i.map(e => [e.id, e]))
        }
    }, h = (e, {
        enabled: t = !0
    } = {}) => {
        let n = u(e);
        return a({
            queryKey: [`hermes-app-display-metadata`, n],
            queryFn: ({
                signal: e
            }) => m(n, e),
            enabled: t && n.length > 0,
            placeholderData: r
        })
    }, g = (e, t) => {
        "use forget";
        let r = (0, l.c)(4),
            i, a;
        if (r[0] !== e || r[1] !== t) {
            let {
                enabled: o
            } = t === void 0 ? {} : t, s = o === void 0 || o;
            i = n, a = h(e, {
                enabled: s
            }), r[0] = e, r[1] = t, r[2] = i, r[3] = a
        } else i = r[2], a = r[3];
        return i(a)
    }, _ = () => {
        "use forget";
        let e = (0, l.c)(2),
            n = t(),
            r;
        return e[0] === n ? r = e[1] : (r = e => n.prefetchQuery(h(e)), e[0] = n, e[1] = r), r
    }
}));
export {
    g as a, u as i, v as n, _ as o, f as r, m as t
};
//# sourceMappingURL=cfc49363-i936msetgqthvrr8.js.map
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as t,
    Cst as n,
    Dat as r,
    Est as i,
    Y7 as a,
    gst as o,
    jat as s,
    wst as c,
    yst as l
} from "./4813494d-r54yv6lv29x4ew99.js";
var u, d, f, p, m, h = e((() => {
    l(), s(), t(), n(), u = (e, t) => {
        if (!e || !t) return !0;
        let n = Date.parse(e),
            r = Date.parse(t);
        return Number.isNaN(n) || Number.isNaN(r) ? !0 : n >= r
    }, d = {
        carts: [],
        status: `idle`,
        error: void 0,
        hasLoaded: !1,
        lastUpdated: void 0
    }, f = o(() => i((e, t) => ({
        ...d,
        setCarts: (t, n) => e(e => u(n, e.lastUpdated) ? {
            carts: [...t],
            status: `idle`,
            error: void 0,
            hasLoaded: !0,
            lastUpdated: n ?? e.lastUpdated
        } : e),
        refreshCarts: async () => {
            e({
                status: `loading`,
                error: void 0
            });
            try {
                let n = await a.safeGet(`/shopping/carts`, {
                    authOption: r.SendIfAvailable
                });
                if (!u(n.timestamp, t().lastUpdated)) return;
                e({
                    carts: n.carts,
                    status: `idle`,
                    error: void 0,
                    hasLoaded: !0,
                    lastUpdated: n.timestamp ?? t().lastUpdated
                })
            } catch (t) {
                e({
                    status: `error`,
                    error: t instanceof Error ? t.message : `Failed to load carts`,
                    hasLoaded: !0
                })
            }
        },
        addItem: async n => {
            e({
                status: `loading`,
                error: void 0
            });
            try {
                let i = await a.safePost(`/shopping/cart/add`, {
                    requestBody: {
                        item_payload: n
                    },
                    authOption: r.SendIfAvailable
                });
                return u(i.timestamp, t().lastUpdated) && e({
                    carts: i.carts,
                    status: `idle`,
                    error: void 0,
                    hasLoaded: !0,
                    lastUpdated: i.timestamp
                }), i
            } catch (t) {
                return e({
                    status: `error`,
                    error: t instanceof Error ? t.message : `Failed to add item`,
                    hasLoaded: !0
                }), null
            }
        },
        removeItem: async n => {
            e({
                status: `loading`,
                error: void 0
            });
            try {
                let i = await a.safePost(`/shopping/cart/remove`, {
                    requestBody: {
                        item: n
                    },
                    authOption: r.SendIfAvailable
                });
                return u(i.timestamp, t().lastUpdated) && e({
                    carts: i.carts,
                    status: `idle`,
                    error: void 0,
                    hasLoaded: !0,
                    lastUpdated: i.timestamp
                }), i
            } catch (t) {
                return e({
                    status: `error`,
                    error: t instanceof Error ? t.message : `Failed to remove item`,
                    hasLoaded: !0
                }), null
            }
        }
    }))), p = () => c(f()), m = e => e.reduce((e, t) => e + (t.items?.length ?? 0), 0)
}));
export {
    h as n, p as r, m as t
};
//# sourceMappingURL=e1d1ae28-kvd8n16a4g2gy1nz.js.map
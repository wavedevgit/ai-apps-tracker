import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ait as t,
    Dot as n,
    Eot as r,
    Pit as i,
    Sot as a,
    a7 as o,
    kot as s,
    l7 as c,
    yot as l
} from "./4813494d-cb22y2w19zwyshmt.js";
var u, d, f, p, m, h = e((() => {
    a(), i(), c(), r(), u = (e, t) => {
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
    }, f = l(() => s((e, n) => ({
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
                let r = await o.safeGet(`/shopping/carts`, {
                    authOption: t.SendIfAvailable
                });
                if (!u(r.timestamp, n().lastUpdated)) return;
                e({
                    carts: r.carts,
                    status: `idle`,
                    error: void 0,
                    hasLoaded: !0,
                    lastUpdated: r.timestamp ?? n().lastUpdated
                })
            } catch (t) {
                e({
                    status: `error`,
                    error: t instanceof Error ? t.message : `Failed to load carts`,
                    hasLoaded: !0
                })
            }
        },
        addItem: async r => {
            e({
                status: `loading`,
                error: void 0
            });
            try {
                let i = await o.safePost(`/shopping/cart/add`, {
                    requestBody: {
                        item_payload: r
                    },
                    authOption: t.SendIfAvailable
                });
                return u(i.timestamp, n().lastUpdated) && e({
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
        removeItem: async r => {
            e({
                status: `loading`,
                error: void 0
            });
            try {
                let i = await o.safePost(`/shopping/cart/remove`, {
                    requestBody: {
                        item: r
                    },
                    authOption: t.SendIfAvailable
                });
                return u(i.timestamp, n().lastUpdated) && e({
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
    }))), p = () => n(f()), m = e => e.reduce((e, t) => e + (t.items?.length ?? 0), 0)
}));
export {
    h as n, p as r, m as t
};
//# sourceMappingURL=e1d1ae28-n1sr9wfy5atsgeuv.js.map
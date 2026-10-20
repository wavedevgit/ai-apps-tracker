import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Jot as t,
    L7 as n,
    N7 as r,
    Zot as i,
    aat as a,
    ist as o,
    lat as s,
    nst as c,
    tst as l
} from "./4813494d-qsuygr73qjc6rh65.js";
var u, d, f, p, m, h = e((() => {
    i(), s(), n(), l(), u = (e, t) => {
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
    }, f = t(() => o((e, t) => ({
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
                let n = await r.safeGet(`/shopping/carts`, {
                    authOption: a.SendIfAvailable
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
                let i = await r.safePost(`/shopping/cart/add`, {
                    requestBody: {
                        item_payload: n
                    },
                    authOption: a.SendIfAvailable
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
                let i = await r.safePost(`/shopping/cart/remove`, {
                    requestBody: {
                        item: n
                    },
                    authOption: a.SendIfAvailable
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
//# sourceMappingURL=e1d1ae28-owy30khf9pzbeneu.js.map
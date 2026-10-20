import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    F7 as t,
    Zot as n,
    ast as r,
    cat as i,
    est as a,
    fat as o,
    ist as s,
    sst as c,
    z7 as l
} from "./4813494d-bo7e0c29ngt4zgx0.js";
var u, d, f, p, m, h = e((() => {
    a(), o(), l(), s(), u = (e, t) => {
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
    }, f = n(() => c((e, n) => ({
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
                let r = await t.safeGet(`/shopping/carts`, {
                    authOption: i.SendIfAvailable
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
                let a = await t.safePost(`/shopping/cart/add`, {
                    requestBody: {
                        item_payload: r
                    },
                    authOption: i.SendIfAvailable
                });
                return u(a.timestamp, n().lastUpdated) && e({
                    carts: a.carts,
                    status: `idle`,
                    error: void 0,
                    hasLoaded: !0,
                    lastUpdated: a.timestamp
                }), a
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
                let a = await t.safePost(`/shopping/cart/remove`, {
                    requestBody: {
                        item: r
                    },
                    authOption: i.SendIfAvailable
                });
                return u(a.timestamp, n().lastUpdated) && e({
                    carts: a.carts,
                    status: `idle`,
                    error: void 0,
                    hasLoaded: !0,
                    lastUpdated: a.timestamp
                }), a
            } catch (t) {
                return e({
                    status: `error`,
                    error: t instanceof Error ? t.message : `Failed to remove item`,
                    hasLoaded: !0
                }), null
            }
        }
    }))), p = () => r(f()), m = e => e.reduce((e, t) => e + (t.items?.length ?? 0), 0)
}));
export {
    h as n, p as r, m as t
};
//# sourceMappingURL=e1d1ae28-hvdn90qoyn2q136d.js.map
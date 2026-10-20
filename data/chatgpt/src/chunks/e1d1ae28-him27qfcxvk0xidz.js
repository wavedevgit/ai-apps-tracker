import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $ot as t,
    P7 as n,
    R7 as r,
    Xot as i,
    dat as a,
    ist as o,
    ost as s,
    rst as c,
    sat as l
} from "./4813494d-dfpv67hlp00pbohr.js";
var u, d, f, p, m, h = e((() => {
    t(), a(), r(), c(), u = (e, t) => {
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
    }, f = i(() => s((e, t) => ({
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
                let r = await n.safeGet(`/shopping/carts`, {
                    authOption: l.SendIfAvailable
                });
                if (!u(r.timestamp, t().lastUpdated)) return;
                e({
                    carts: r.carts,
                    status: `idle`,
                    error: void 0,
                    hasLoaded: !0,
                    lastUpdated: r.timestamp ?? t().lastUpdated
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
                let i = await n.safePost(`/shopping/cart/add`, {
                    requestBody: {
                        item_payload: r
                    },
                    authOption: l.SendIfAvailable
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
        removeItem: async r => {
            e({
                status: `loading`,
                error: void 0
            });
            try {
                let i = await n.safePost(`/shopping/cart/remove`, {
                    requestBody: {
                        item: r
                    },
                    authOption: l.SendIfAvailable
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
    }))), p = () => o(f()), m = e => e.reduce((e, t) => e + (t.items?.length ?? 0), 0)
}));
export {
    h as n, p as r, m as t
};
//# sourceMappingURL=e1d1ae28-him27qfcxvk0xidz.js.map
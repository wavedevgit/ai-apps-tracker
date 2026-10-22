import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Aat as t,
    Cst as n,
    Eat as r,
    J7 as i,
    Q7 as a,
    Sst as o,
    Tst as s,
    hst as c,
    vst as l
} from "./4813494d-nxpmzchfjvwqts17.js";
var u, d, f, p, m, h = e((() => {
    l(), t(), a(), o(), u = (e, t) => {
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
    }, f = c(() => s((e, t) => ({
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
                let n = await i.safeGet(`/shopping/carts`, {
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
                let a = await i.safePost(`/shopping/cart/add`, {
                    requestBody: {
                        item_payload: n
                    },
                    authOption: r.SendIfAvailable
                });
                return u(a.timestamp, t().lastUpdated) && e({
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
        removeItem: async n => {
            e({
                status: `loading`,
                error: void 0
            });
            try {
                let a = await i.safePost(`/shopping/cart/remove`, {
                    requestBody: {
                        item: n
                    },
                    authOption: r.SendIfAvailable
                });
                return u(a.timestamp, t().lastUpdated) && e({
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
    }))), p = () => n(f()), m = e => e.reduce((e, t) => e + (t.items?.length ?? 0), 0)
}));
export {
    h as n, p as r, m as t
};
//# sourceMappingURL=e1d1ae28-fhoeodc12ijk6pxv.js.map
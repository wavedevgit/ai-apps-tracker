import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ast as t,
    Cst as n,
    Est as r,
    I7 as i,
    M7 as a,
    Nst as o,
    Pat as s,
    Rat as c,
    jst as l
} from "./4813494d-mdvd4786a87166cc.js";
var u, d, f, p, m, h = e((() => {
    r(), c(), i(), t(), u = (e, t) => {
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
    }, f = n(() => o((e, t) => ({
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
                    authOption: s.SendIfAvailable
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
                let r = await a.safePost(`/shopping/cart/add`, {
                    requestBody: {
                        item_payload: n
                    },
                    authOption: s.SendIfAvailable
                });
                return u(r.timestamp, t().lastUpdated) && e({
                    carts: r.carts,
                    status: `idle`,
                    error: void 0,
                    hasLoaded: !0,
                    lastUpdated: r.timestamp
                }), r
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
                let r = await a.safePost(`/shopping/cart/remove`, {
                    requestBody: {
                        item: n
                    },
                    authOption: s.SendIfAvailable
                });
                return u(r.timestamp, t().lastUpdated) && e({
                    carts: r.carts,
                    status: `idle`,
                    error: void 0,
                    hasLoaded: !0,
                    lastUpdated: r.timestamp
                }), r
            } catch (t) {
                return e({
                    status: `error`,
                    error: t instanceof Error ? t.message : `Failed to remove item`,
                    hasLoaded: !0
                }), null
            }
        }
    }))), p = () => l(f()), m = e => e.reduce((e, t) => e + (t.items?.length ?? 0), 0)
}));
export {
    h as n, p as r, m as t
};
//# sourceMappingURL=e1d1ae28-yeq1vs9510a6294i.js.map
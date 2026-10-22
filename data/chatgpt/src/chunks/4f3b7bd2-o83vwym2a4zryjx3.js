import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as n,
    Aq as r,
    Fq as i,
    J5 as a,
    Lnt as o,
    Oq as s,
    al as c,
    tl as l,
    znt as u
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Vn as d,
    wn as f
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    USn as p,
    WSn as m,
    oMn as h,
    sMn as g,
    uMn as _
} from "./conversation-small-dwpaie1hln28efxb.js";

function v({
    pluginIds: e,
    pluginIdsToLog: t,
    productExperience: n,
    surface: r
}) {
    let i = [...new Set(e)];
    for (let e of new Set(t ?? i)) o.logStructuredEvent(`ChatgptPluginAction`, {
        action: g.CHATGPT_PLUGIN_ACTION_TYPE_IMPRESSION,
        pluginId: e,
        pluginIds: i,
        result: h.CHATGPT_PLUGIN_ACTION_RESULT_SUCCESS,
        ...n ? {
            productExperience: n
        } : {},
        surface: r
    })
}

function y({
    container: e,
    eligiblePluginIds: t,
    getAdditionalVisiblePluginIds: n,
    loggedPluginIds: r,
    onVisiblePluginIdsChange: i,
    pluginIds: a,
    productExperience: o,
    surface: s
}) {
    if (typeof IntersectionObserver > `u`) return () => {};
    let c = [...new Set(a)],
        l = new Set(c),
        u = new Set(t ?? c),
        d = new Set,
        f = new IntersectionObserver(e => {
            for (let t of e) {
                let e = t.target instanceof HTMLElement ? t.target.dataset.composerPluginImpressionId : void 0;
                !e || !l.has(e) || (t.isIntersecting && t.intersectionRatio >= .5 ? d.add(e) : d.delete(e))
            }
            let t = c.filter(e => d.has(e));
            i?.(t);
            let a = t.filter(e => u.has(e) && !r.has(e));
            if (a.length !== 0) {
                for (let e of a) r.add(e);
                v({
                    pluginIds: [...n?.() ?? [], ...t],
                    pluginIdsToLog: a,
                    productExperience: o,
                    surface: s
                })
            }
        }, {
            root: e,
            threshold: .5
        });
    for (let t of e.querySelectorAll(`[data-composer-plugin-impression-id]`)) l.has(t.dataset.composerPluginImpressionId ?? ``) && f.observe(t);
    return () => f.disconnect()
}

function b(e) {
    let t = e.meta?.systemHintType;
    return i(t) ? [s(t)] : []
}

function x(e) {
    let t = e.meta?.systemHintType;
    return i(t) && e.meta?.isConnected === !1 ? [s(t)] : []
}
var S, C, w, T = e((() => {
    S = f(), m(), l(), n(), r(), u(), C = t(d()), w = e => {
        "use forget";
        let t = (0, S.c)(8),
            {
                containerRef: n,
                conversation: r,
                suggestions: i
            } = e,
            o;
        t[0] === r ? o = t[1] : (o = () => r ? p(c(r) ? `work` : `chat`) : void 0, t[0] = r, t[1] = o);
        let s = a(o),
            l;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (l = new Set, t[2] = l) : l = t[2];
        let u = (0, C.useRef)(l),
            d, f;
        return t[3] !== n || t[4] !== s || t[5] !== i ? (d = () => {
            let e = n.current;
            if (!e) return;
            let t = i.flatMap(b),
                r = i.flatMap(x);
            if (t.length !== 0) return y({
                productExperience: s,
                container: e,
                eligiblePluginIds: r,
                loggedPluginIds: u.current,
                pluginIds: t,
                surface: _.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_COMPOSER_HINTS
            })
        }, f = [n, s, i], t[3] = n, t[4] = s, t[5] = i, t[6] = d, t[7] = f) : (d = t[6], f = t[7]), (0, C.useEffect)(d, f), null
    }
}));
export {
    T as n, y as r, w as t
};
//# sourceMappingURL=4f3b7bd2-o83vwym2a4zryjx3.js.map
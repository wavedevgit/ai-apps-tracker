import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Nq as n,
    P5 as r,
    Rq as i,
    Snt as a,
    el as o,
    g8 as s,
    il as c,
    jq as l,
    wnt as u
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    Vn as d,
    wn as f
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Ajn as p,
    Djn as m,
    Ejn as h,
    dSn as g,
    fSn as _
} from "./conversation-small-nmt18uiom3b14vca.js";

function v({
    pluginIds: e,
    pluginIdsToLog: t,
    productExperience: n,
    surface: r
}) {
    let i = [...new Set(e)];
    for (let e of new Set(t ?? i)) a.logStructuredEvent(`ChatgptPluginAction`, {
        action: m.CHATGPT_PLUGIN_ACTION_TYPE_IMPRESSION,
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
    return i(t) ? [l(t)] : []
}

function x(e) {
    let t = e.meta?.systemHintType;
    return i(t) && e.meta?.isConnected === !1 ? [l(t)] : []
}
var S, C, w, T = e((() => {
    S = f(), _(), o(), s(), n(), u(), C = t(d()), w = e => {
        "use forget";
        let t = (0, S.c)(8),
            {
                containerRef: n,
                conversation: i,
                suggestions: a
            } = e,
            o;
        t[0] === i ? o = t[1] : (o = () => i ? g(c(i) ? `work` : `chat`) : void 0, t[0] = i, t[1] = o);
        let s = r(o),
            l;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (l = new Set, t[2] = l) : l = t[2];
        let u = (0, C.useRef)(l),
            d, f;
        return t[3] !== n || t[4] !== s || t[5] !== a ? (d = () => {
            let e = n.current;
            if (!e) return;
            let t = a.flatMap(b),
                r = a.flatMap(x);
            if (t.length !== 0) return y({
                productExperience: s,
                container: e,
                eligiblePluginIds: r,
                loggedPluginIds: u.current,
                pluginIds: t,
                surface: p.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_COMPOSER_HINTS
            })
        }, f = [n, s, a], t[3] = n, t[4] = s, t[5] = a, t[6] = d, t[7] = f) : (d = t[6], f = t[7]), (0, C.useEffect)(d, f), null
    }
}));
export {
    T as n, y as r, w as t
};
//# sourceMappingURL=4f3b7bd2-n5i5z6xm9296kp8r.js.map
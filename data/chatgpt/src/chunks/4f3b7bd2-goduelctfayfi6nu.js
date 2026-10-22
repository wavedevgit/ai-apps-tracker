import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Aq as n,
    Fq as r,
    Int as i,
    Oq as a,
    Rnt as o,
    al as s,
    k8 as c,
    q5 as l,
    tl as u
} from "./4813494d-nxpmzchfjvwqts17.js";
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
} from "./conversation-small-m08q51xmfe7gjq3d.js";

function v({
    pluginIds: e,
    pluginIdsToLog: t,
    productExperience: n,
    surface: r
}) {
    let a = [...new Set(e)];
    for (let e of new Set(t ?? a)) i.logStructuredEvent(`ChatgptPluginAction`, {
        action: g.CHATGPT_PLUGIN_ACTION_TYPE_IMPRESSION,
        pluginId: e,
        pluginIds: a,
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
    return r(t) ? [a(t)] : []
}

function x(e) {
    let t = e.meta?.systemHintType;
    return r(t) && e.meta?.isConnected === !1 ? [a(t)] : []
}
var S, C, w, T = e((() => {
    S = f(), m(), u(), c(), n(), o(), C = t(d()), w = e => {
        "use forget";
        let t = (0, S.c)(8),
            {
                containerRef: n,
                conversation: r,
                suggestions: i
            } = e,
            a;
        t[0] === r ? a = t[1] : (a = () => r ? p(s(r) ? `work` : `chat`) : void 0, t[0] = r, t[1] = a);
        let o = l(a),
            c;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (c = new Set, t[2] = c) : c = t[2];
        let u = (0, C.useRef)(c),
            d, f;
        return t[3] !== n || t[4] !== o || t[5] !== i ? (d = () => {
            let e = n.current;
            if (!e) return;
            let t = i.flatMap(b),
                r = i.flatMap(x);
            if (t.length !== 0) return y({
                productExperience: o,
                container: e,
                eligiblePluginIds: r,
                loggedPluginIds: u.current,
                pluginIds: t,
                surface: _.CHATGPT_PLUGIN_MARKETPLACE_SURFACE_COMPOSER_HINTS
            })
        }, f = [n, o, i], t[3] = n, t[4] = o, t[5] = i, t[6] = d, t[7] = f) : (d = t[6], f = t[7]), (0, C.useEffect)(d, f), null
    }
}));
export {
    T as n, y as r, w as t
};
//# sourceMappingURL=4f3b7bd2-goduelctfayfi6nu.js.map
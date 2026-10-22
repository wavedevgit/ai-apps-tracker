import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $u as t,
    Ait as n,
    C1 as r,
    GJ as i,
    KX as a,
    L5 as o,
    P8 as s,
    R5 as c,
    WX as l,
    X8 as u,
    Z8 as d,
    dF as f,
    eY as p,
    hrt as m,
    id as h,
    k8 as g,
    kit as _,
    lrt as v,
    mrt as y,
    uF as b,
    vF as x,
    w1 as S
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    IIn as C,
    L3t as w,
    Lpt as T,
    Mpt as E,
    PIn as D,
    Qpt as O,
    V3t as k,
    VIn as A,
    Ypt as j,
    _B as M,
    hB as N,
    jpt as P,
    kpt as F
} from "./conversation-small-m08q51xmfe7gjq3d.js";

function I(e) {
    return typeof e == `object` && !!e && `id` in e && typeof e.id == `string` && `name` in e && typeof e.name == `string`
}

function L(e) {
    return typeof e == `object` && !!e && !Array.isArray(e)
}

function* R(e) {
    let t = L(e) ? e.opGenui : void 0;
    if (!L(t)) return;
    let n = L(t.componentResults) ? t.componentResults : {},
        r = L(t.componentData) ? t.componentData : {};
    for (let t of new Set([...Object.keys(n), ...Object.keys(r)])) {
        let i = N(e, `Entity`, t);
        if (n[t] === void 0) {
            let e;
            try {
                e = JSON.parse(t)
            } catch {
                continue
            }
            if (!Array.isArray(e) || e.length !== 2 || e[0] !== `Entity` || !L(r[t])) continue;
            i = r[t]
        }
        let a = i?.action_payload;
        L(a) && typeof a.category == `string` && O(a.category) && I(i?.entity_data) && (yield i.entity_data)
    }
}

function z(e, {
    entityId: t,
    extraParams: n
}) {
    let r = n?.entity_lookup_id,
        i = n?.entity_key,
        a = t ?? n?.business_id;
    for (let t of R(e)) {
        let e = `entity_lookup_id` in t ? t.entity_lookup_id : void 0,
            o = `entity_key` in t ? t.entity_key : void 0;
        if (typeof r == `string` && r.length > 0) {
            if (e === r || t.id === r) return t
        } else if (typeof i == `string` && i.length > 0) {
            if (o === i || t.id === i) return t
        } else if (typeof a == `string` && a.length > 0 && (t.id === a && (typeof n?.provider != `string` || t.provider === n.provider) || e === a || o === a)) return t
    }
    return null
}

function B(e, t, n) {
    return !I(e) || !O(t) ? !1 : v(`183193904`, n) || y(`4107938382`, n).get(`enable-instant-local-business-sidebar`, !1)
}

function V(e, t) {
    B(e, t, {
        disableExposureLog: !0
    }) && (w.prefetch(), n() && o().prefetchQuery(r()))
}

function H(e) {
    return O(e.category ?? `local_business`) && I(e.entity)
}

function U(e) {
    return R(a(e.metadata?.model_dil_v2)?.appData).next().done ? e.metadata?.content_references?.some((t, n) => t.type === `client_defined_widget` && E(t) ? F(e, t, n)?.entities.some(H) ?? !1 : t.type === `entity` ? t.status === `done` && O(t.category) && I(t.entity_data) : t.type === `map` && (t.entities.some(H) || t.raw_search_entities?.some(H) === !0)) ?? !1 : !0
}

function W(e, t) {
    let n;
    for (let r of t)
        if (U(r) && (n ??= J(e), n.get(r.id) !== r && (n.delete(r.id), n.set(r.id, r), n.size > q))) {
            let e = n.keys().next().value;
            e !== void 0 && n.delete(e)
        }
}

function G({
    message: e,
    contentReferenceStartIndex: t,
    entityId: n
}) {
    if (!e || t === void 0 || !n) return null;
    let r = e.metadata?.content_references?.find(e => e.start_idx === t);
    if (!r) return null;
    if (r.type === `entity`) {
        if (!O(r.category)) return null;
        let e = r.entity_data;
        return I(e) && e.id === n ? {
            business: e,
            type: `entity`
        } : null
    }
    let i = r.type === `client_defined_widget` && E(r) ? F(e, r, e.metadata?.content_references?.indexOf(r) ?? -1) : r;
    if (i?.type !== `map`) return null;
    let {
        businesses: a,
        additionalBusinesses: o
    } = T(i), s = [...a, ...o].find(e => e.entity_data.id === n && O(e.entity_category));
    return s ? {
        business: s.entity_data,
        type: `map`
    } : null
}

function K(e) {
    let t = A(e);
    if (!C(t, `entity`) || !O(t.category)) return null;
    let n = i.getMaybeMessage(h(e), t.messageId) ?? J(e).get(t.messageId);
    if (t.isGenui) {
        let e = z(a(n?.metadata?.model_dil_v2)?.appData, t);
        if (e) return {
            business: e,
            type: `entity`
        }
    }
    return G({
        message: n,
        contentReferenceStartIndex: t.contentReferenceStartIndex,
        entityId: t.entityId
    })
}
var q, J, Y, X, Z = e((() => {
    x(), t(), l(), M(), k(), j(), P(), S(), D(), g(), p(), _(), c(), u(), m(), q = 32, J = f(() => new Map), Y = b(e => s(() => K(e)?.business ?? null, {
        equals: d
    })), X = b(e => s(() => K(e)?.type ?? null))
}));
export {
    Z as a, W as c, R as i, X as n, B as o, z as r, V as s, Y as t
};
//# sourceMappingURL=0e629c03-egrdwmfs4pop9e7h.js.map
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $u as t,
    A8 as n,
    Ait as r,
    C1 as i,
    F8 as a,
    GJ as o,
    KX as s,
    Q8 as c,
    R5 as l,
    WX as u,
    Z8 as d,
    dF as f,
    eY as p,
    grt as m,
    hrt as h,
    id as g,
    jit as _,
    uF as v,
    urt as y,
    vF as b,
    w1 as x,
    z5 as S
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    LIn as C,
    Lpt as w,
    Mpt as T,
    Qpt as E,
    U3t as D,
    WIn as O,
    Ypt as k,
    _B as A,
    hB as j,
    jpt as M,
    kpt as N,
    z3t as P,
    zIn as F
} from "./conversation-small-fh0oqifngkf5rvl1.js";

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
        let i = j(e, `Entity`, t);
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
        L(a) && typeof a.category == `string` && E(a.category) && I(i?.entity_data) && (yield i.entity_data)
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
    return !I(e) || !E(t) ? !1 : y(`183193904`, n) || h(`4107938382`, n).get(`enable-instant-local-business-sidebar`, !1)
}

function V(e, t) {
    B(e, t, {
        disableExposureLog: !0
    }) && (P.prefetch(), _() && l().prefetchQuery(i()))
}

function H(e) {
    return E(e.category ?? `local_business`) && I(e.entity)
}

function U(e) {
    return R(s(e.metadata?.model_dil_v2)?.appData).next().done ? e.metadata?.content_references?.some((t, n) => t.type === `client_defined_widget` && T(t) ? N(e, t, n)?.entities.some(H) ?? !1 : t.type === `entity` ? t.status === `done` && E(t.category) && I(t.entity_data) : t.type === `map` && (t.entities.some(H) || t.raw_search_entities?.some(H) === !0)) ?? !1 : !0
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
        if (!E(r.category)) return null;
        let e = r.entity_data;
        return I(e) && e.id === n ? {
            business: e,
            type: `entity`
        } : null
    }
    let i = r.type === `client_defined_widget` && T(r) ? N(e, r, e.metadata?.content_references?.indexOf(r) ?? -1) : r;
    if (i?.type !== `map`) return null;
    let {
        businesses: a,
        additionalBusinesses: o
    } = w(i), s = [...a, ...o].find(e => e.entity_data.id === n && E(e.entity_category));
    return s ? {
        business: s.entity_data,
        type: `map`
    } : null
}

function K(e) {
    let t = O(e);
    if (!F(t, `entity`) || !E(t.category)) return null;
    let n = o.getMaybeMessage(g(e), t.messageId) ?? J(e).get(t.messageId);
    if (t.isGenui) {
        let e = z(s(n?.metadata?.model_dil_v2)?.appData, t);
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
    b(), t(), u(), A(), D(), k(), M(), x(), C(), n(), p(), r(), S(), d(), m(), q = 32, J = f(() => new Map), Y = v(e => a(() => K(e)?.business ?? null, {
        equals: c
    })), X = v(e => a(() => K(e)?.type ?? null))
}));
export {
    Z as a, W as c, R as i, X as n, B as o, z as r, V as s, Y as t
};
//# sourceMappingURL=0e629c03-nk3i6qivfgi5w3bs.js.map
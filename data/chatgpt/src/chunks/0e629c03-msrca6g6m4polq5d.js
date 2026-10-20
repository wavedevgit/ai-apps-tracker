import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    C5 as t,
    I8 as n,
    JX as r,
    KX as i,
    L8 as a,
    Qu as o,
    Wnt as s,
    Xnt as c,
    Ynt as l,
    aF as u,
    b8 as d,
    dit as f,
    fF as p,
    h8 as m,
    iF as h,
    m1 as g,
    nY as _,
    p1 as v,
    qJ as y,
    rd as b,
    uit as x,
    w5 as S
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    A3t as C,
    Bpt as w,
    Fpt as T,
    Mpt as E,
    P3t as D,
    Ppt as O,
    Qpt as k,
    YFn as A,
    ZFn as j,
    nIn as M,
    tmt as N,
    xN as P,
    yN as F
} from "./conversation-small-cy5f8pl0g26s86so.js";

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
        let i = F(e, `Entity`, t);
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
        L(a) && typeof a.category == `string` && N(a.category) && I(i?.entity_data) && (yield i.entity_data)
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
    return !I(e) || !N(t) ? !1 : s(`183193904`, n) || l(`4107938382`, n).get(`enable-instant-local-business-sidebar`, !1)
}

function V(e, n) {
    B(e, n, {
        disableExposureLog: !0
    }) && (C.prefetch(), f() && t().prefetchQuery(v()))
}

function H(e) {
    return N(e.category ?? `local_business`) && I(e.entity)
}

function U(e) {
    return R(r(e.metadata?.model_dil_v2)?.appData).next().done ? e.metadata?.content_references?.some((t, n) => t.type === `client_defined_widget` && T(t) ? E(e, t, n)?.entities.some(H) ?? !1 : t.type === `entity` ? t.status === `done` && N(t.category) && I(t.entity_data) : t.type === `map` && (t.entities.some(H) || t.raw_search_entities?.some(H) === !0)) ?? !1 : !0
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
        if (!N(r.category)) return null;
        let e = r.entity_data;
        return I(e) && e.id === n ? {
            business: e,
            type: `entity`
        } : null
    }
    let i = r.type === `client_defined_widget` && T(r) ? E(e, r, e.metadata?.content_references?.indexOf(r) ?? -1) : r;
    if (i?.type !== `map`) return null;
    let {
        businesses: a,
        additionalBusinesses: o
    } = w(i), s = [...a, ...o].find(e => e.entity_data.id === n && N(e.entity_category));
    return s ? {
        business: s.entity_data,
        type: `map`
    } : null
}

function K(e) {
    let t = M(e);
    if (!j(t, `entity`) || !N(t.category)) return null;
    let n = y.getMaybeMessage(b(e), t.messageId) ?? J(e).get(t.messageId);
    if (t.isGenui) {
        let e = z(r(n?.metadata?.model_dil_v2)?.appData, t);
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
    p(), o(), i(), P(), D(), k(), O(), g(), A(), m(), _(), x(), S(), n(), c(), q = 32, J = u(() => new Map), Y = h(e => d(() => K(e)?.business ?? null, {
        equals: a
    })), X = h(e => d(() => K(e)?.type ?? null))
}));
export {
    Z as a, W as c, R as i, X as n, B as o, z as r, V as s, Y as t
};
//# sourceMappingURL=0e629c03-msrca6g6m4polq5d.js.map
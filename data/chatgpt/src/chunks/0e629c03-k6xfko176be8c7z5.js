import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Gnt as t,
    JJ as n,
    L8 as r,
    Qu as i,
    R8 as a,
    T5 as o,
    Xnt as s,
    YX as c,
    Znt as l,
    aF as u,
    dit as d,
    fit as f,
    g8 as p,
    h1 as m,
    m1 as h,
    oF as g,
    pF as _,
    qX as v,
    rY as y,
    rd as b,
    w5 as x,
    x8 as S
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Fpt as C,
    L3t as w,
    Lpt as T,
    N3t as E,
    QFn as D,
    Rpt as O,
    SN as k,
    Upt as A,
    aIn as j,
    eIn as M,
    imt as N,
    tmt as P,
    wN as F
} from "./conversation-small-ikg0dwuw782klweb.js";

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
        let i = k(e, `Entity`, t);
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

function B(e, n, r) {
    return !I(e) || !N(n) ? !1 : t(`183193904`, r) || s(`4107938382`, r).get(`enable-instant-local-business-sidebar`, !1)
}

function V(e, t) {
    B(e, t, {
        disableExposureLog: !0
    }) && (E.prefetch(), f() && x().prefetchQuery(h()))
}

function H(e) {
    return N(e.category ?? `local_business`) && I(e.entity)
}

function U(e) {
    return R(c(e.metadata?.model_dil_v2)?.appData).next().done ? e.metadata?.content_references?.some((t, n) => t.type === `client_defined_widget` && O(t) ? C(e, t, n)?.entities.some(H) ?? !1 : t.type === `entity` ? t.status === `done` && N(t.category) && I(t.entity_data) : t.type === `map` && (t.entities.some(H) || t.raw_search_entities?.some(H) === !0)) ?? !1 : !0
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
    let i = r.type === `client_defined_widget` && O(r) ? C(e, r, e.metadata?.content_references?.indexOf(r) ?? -1) : r;
    if (i?.type !== `map`) return null;
    let {
        businesses: a,
        additionalBusinesses: o
    } = A(i), s = [...a, ...o].find(e => e.entity_data.id === n && N(e.entity_category));
    return s ? {
        business: s.entity_data,
        type: `map`
    } : null
}

function K(e) {
    let t = j(e);
    if (!M(t, `entity`) || !N(t.category)) return null;
    let r = n.getMaybeMessage(b(e), t.messageId) ?? J(e).get(t.messageId);
    if (t.isGenui) {
        let e = z(c(r?.metadata?.model_dil_v2)?.appData, t);
        if (e) return {
            business: e,
            type: `entity`
        }
    }
    return G({
        message: r,
        contentReferenceStartIndex: t.contentReferenceStartIndex,
        entityId: t.entityId
    })
}
var q, J, Y, X, Z = e((() => {
    _(), i(), v(), F(), w(), P(), T(), m(), D(), p(), y(), d(), o(), r(), l(), q = 32, J = g(() => new Map), Y = u(e => S(() => K(e)?.business ?? null, {
        equals: a
    })), X = u(e => S(() => K(e)?.type ?? null))
}));
export {
    Z as a, W as c, R as i, X as n, B as o, z as r, V as s, Y as t
};
//# sourceMappingURL=0e629c03-k6xfko176be8c7z5.js.map
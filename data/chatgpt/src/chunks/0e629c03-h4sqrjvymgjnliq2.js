import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $u as t,
    C1 as n,
    Dit as r,
    GJ as i,
    KX as a,
    L5 as o,
    Oit as s,
    P8 as c,
    R5 as l,
    WX as u,
    X8 as d,
    Z8 as f,
    dF as p,
    eY as m,
    frt as h,
    id as g,
    k8 as _,
    prt as v,
    srt as y,
    uF as b,
    vF as x,
    w1 as S
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    A3t as C,
    Apt as w,
    E3t as T,
    Ipt as E,
    Jpt as D,
    Opt as O,
    SIn as k,
    Zpt as A,
    _In as j,
    gB as M,
    hIn as N,
    jpt as P,
    mB as F
} from "./conversation-small-ocicxxw6jegn4vux.js";

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
        L(a) && typeof a.category == `string` && A(a.category) && I(i?.entity_data) && (yield i.entity_data)
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
    return !I(e) || !A(t) ? !1 : y(`183193904`, n) || h(`4107938382`, n).get(`enable-instant-local-business-sidebar`, !1)
}

function V(e, t) {
    B(e, t, {
        disableExposureLog: !0
    }) && (T.prefetch(), s() && o().prefetchQuery(n()))
}

function H(e) {
    return A(e.category ?? `local_business`) && I(e.entity)
}

function U(e) {
    return R(a(e.metadata?.model_dil_v2)?.appData).next().done ? e.metadata?.content_references?.some((t, n) => t.type === `client_defined_widget` && P(t) ? O(e, t, n)?.entities.some(H) ?? !1 : t.type === `entity` ? t.status === `done` && A(t.category) && I(t.entity_data) : t.type === `map` && (t.entities.some(H) || t.raw_search_entities?.some(H) === !0)) ?? !1 : !0
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
        if (!A(r.category)) return null;
        let e = r.entity_data;
        return I(e) && e.id === n ? {
            business: e,
            type: `entity`
        } : null
    }
    let i = r.type === `client_defined_widget` && P(r) ? O(e, r, e.metadata?.content_references?.indexOf(r) ?? -1) : r;
    if (i?.type !== `map`) return null;
    let {
        businesses: a,
        additionalBusinesses: o
    } = E(i), s = [...a, ...o].find(e => e.entity_data.id === n && A(e.entity_category));
    return s ? {
        business: s.entity_data,
        type: `map`
    } : null
}

function K(e) {
    let t = k(e);
    if (!j(t, `entity`) || !A(t.category)) return null;
    let n = i.getMaybeMessage(g(e), t.messageId) ?? J(e).get(t.messageId);
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
    x(), t(), u(), M(), C(), D(), w(), S(), N(), _(), m(), r(), l(), d(), v(), q = 32, J = p(() => new Map), Y = b(e => c(() => K(e)?.business ?? null, {
        equals: f
    })), X = b(e => c(() => K(e)?.type ?? null))
}));
export {
    Z as a, W as c, R as i, X as n, B as o, z as r, V as s, Y as t
};
//# sourceMappingURL=0e629c03-h4sqrjvymgjnliq2.js.map
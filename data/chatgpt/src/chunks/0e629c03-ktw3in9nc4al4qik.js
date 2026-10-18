import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AJ as t,
    B6 as n,
    BP as r,
    G6 as i,
    H$ as a,
    J8 as o,
    JP as s,
    Nrt as c,
    Nu as l,
    Prt as u,
    Ru as d,
    SX as f,
    V$ as p,
    VP as m,
    Y8 as h,
    bX as g,
    c8 as _,
    pnt as v,
    s8 as y,
    vnt as b,
    xJ as x,
    ynt as S
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Apt as C,
    Fpt as w,
    H3t as T,
    LFn as E,
    Opt as D,
    R3t as O,
    WFn as k,
    Xpt as A,
    _N as j,
    kpt as M,
    qpt as N,
    yN as P,
    zFn as F
} from "./conversation-small-fym1zmu9zimymmm1.js";

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
    return !I(e) || !A(t) ? !1 : v(`183193904`, n) || b(`4107938382`, n).get(`enable-instant-local-business-sidebar`, !1)
}

function V(e, t) {
    B(e, t, {
        disableExposureLog: !0
    }) && (O.prefetch(), u() && o().prefetchQuery(p()))
}

function H(e) {
    return A(e.category ?? `local_business`) && I(e.entity)
}

function U(e) {
    return R(f(e.metadata?.model_dil_v2)?.appData).next().done ? e.metadata?.content_references?.some((t, n) => t.type === `client_defined_widget` && C(t) ? D(e, t, n)?.entities.some(H) ?? !1 : t.type === `entity` ? t.status === `done` && A(t.category) && I(t.entity_data) : t.type === `map` && (t.entities.some(H) || t.raw_search_entities?.some(H) === !0)) ?? !1 : !0
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
    let i = r.type === `client_defined_widget` && C(r) ? D(e, r, e.metadata?.content_references?.indexOf(r) ?? -1) : r;
    if (i?.type !== `map`) return null;
    let {
        businesses: a,
        additionalBusinesses: o
    } = w(i), s = [...a, ...o].find(e => e.entity_data.id === n && A(e.entity_category));
    return s ? {
        business: s.entity_data,
        type: `map`
    } : null
}

function K(e) {
    let t = k(e);
    if (!F(t, `entity`) || !A(t.category)) return null;
    let n = x.getMaybeMessage(d(e), t.messageId) ?? J(e).get(t.messageId);
    if (t.isGenui) {
        let e = z(f(n?.metadata?.model_dil_v2)?.appData, t);
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
    s(), l(), g(), P(), T(), N(), M(), a(), E(), n(), t(), c(), h(), y(), S(), q = 32, J = m(() => new Map), Y = r(e => i(() => K(e)?.business ?? null, {
        equals: _
    })), X = r(e => i(() => K(e)?.type ?? null))
}));
export {
    Z as a, W as c, R as i, X as n, B as o, z as r, V as s, Y as t
};
//# sourceMappingURL=0e629c03-ktw3in9nc4al4qik.js.map
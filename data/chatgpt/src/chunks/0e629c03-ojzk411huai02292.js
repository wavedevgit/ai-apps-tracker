import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    JJ as t,
    L8 as n,
    Qu as r,
    R8 as i,
    T5 as a,
    YX as o,
    Ynt as s,
    aF as c,
    ert as l,
    g8 as u,
    git as d,
    h1 as f,
    hit as p,
    m1 as m,
    oF as h,
    pF as g,
    qX as _,
    rY as v,
    rd as y,
    trt as b,
    w5 as x,
    x8 as S
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    $Fn as C,
    Fpt as w,
    L3t as T,
    Lpt as E,
    N3t as D,
    Rpt as O,
    SN as k,
    Upt as A,
    imt as j,
    oIn as M,
    tIn as N,
    tmt as P,
    wN as F
} from "./conversation-small-nmt18uiom3b14vca.js";

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
        L(a) && typeof a.category == `string` && j(a.category) && I(i?.entity_data) && (yield i.entity_data)
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
    return !I(e) || !j(t) ? !1 : s(`183193904`, n) || l(`4107938382`, n).get(`enable-instant-local-business-sidebar`, !1)
}

function V(e, t) {
    B(e, t, {
        disableExposureLog: !0
    }) && (D.prefetch(), d() && x().prefetchQuery(m()))
}

function H(e) {
    return j(e.category ?? `local_business`) && I(e.entity)
}

function U(e) {
    return R(o(e.metadata?.model_dil_v2)?.appData).next().done ? e.metadata?.content_references?.some((t, n) => t.type === `client_defined_widget` && O(t) ? w(e, t, n)?.entities.some(H) ?? !1 : t.type === `entity` ? t.status === `done` && j(t.category) && I(t.entity_data) : t.type === `map` && (t.entities.some(H) || t.raw_search_entities?.some(H) === !0)) ?? !1 : !0
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
        if (!j(r.category)) return null;
        let e = r.entity_data;
        return I(e) && e.id === n ? {
            business: e,
            type: `entity`
        } : null
    }
    let i = r.type === `client_defined_widget` && O(r) ? w(e, r, e.metadata?.content_references?.indexOf(r) ?? -1) : r;
    if (i?.type !== `map`) return null;
    let {
        businesses: a,
        additionalBusinesses: o
    } = A(i), s = [...a, ...o].find(e => e.entity_data.id === n && j(e.entity_category));
    return s ? {
        business: s.entity_data,
        type: `map`
    } : null
}

function K(e) {
    let n = M(e);
    if (!N(n, `entity`) || !j(n.category)) return null;
    let r = t.getMaybeMessage(y(e), n.messageId) ?? J(e).get(n.messageId);
    if (n.isGenui) {
        let e = z(o(r?.metadata?.model_dil_v2)?.appData, n);
        if (e) return {
            business: e,
            type: `entity`
        }
    }
    return G({
        message: r,
        contentReferenceStartIndex: n.contentReferenceStartIndex,
        entityId: n.entityId
    })
}
var q, J, Y, X, Z = e((() => {
    g(), r(), _(), F(), T(), P(), E(), f(), C(), u(), v(), p(), a(), n(), b(), q = 32, J = h(() => new Map), Y = c(e => S(() => K(e)?.business ?? null, {
        equals: i
    })), X = c(e => S(() => K(e)?.type ?? null))
}));
export {
    Z as a, W as c, R as i, X as n, B as o, z as r, V as s, Y as t
};
//# sourceMappingURL=0e629c03-ojzk411huai02292.js.map
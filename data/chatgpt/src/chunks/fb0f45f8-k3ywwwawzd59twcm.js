import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Al as t,
    Cl as n,
    F7 as r,
    P5 as i,
    X5 as a,
    Y5 as o,
    Ynt as s,
    Znt as c,
    _8 as l,
    fat as u,
    g8 as d,
    gU as f,
    gat as p,
    git as m,
    hU as h,
    hit as g,
    jl as _,
    mU as v,
    pU as y,
    trt as b,
    z7 as x
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    Bn as S,
    Ln as C,
    Rn as w,
    wn as T
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Mut as E,
    Nut as D
} from "./conversation-small-kzsalymynzuddxee.js";

function O() {
    try {
        return s(`684824188`)
    } catch {
        return !1
    }
}

function k(e) {
    if (e?.aborted || !O()) throw new DOMException(`Product sharing is unavailable`, `AbortError`)
}
var A, j = e((() => {
    d(), b(), A = l(O, e => {
        try {
            let t = c();
            return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
        } catch {
            return () => {}
        }
    }, {
        name: `productEntitySharingEnabled`
    })
}));
async function M(e, i) {
    k(i);
    let a = m(),
        o = a ? void 0 : await t(N);
    if (k(i), !a && !o?.[n.Token]) throw Error(`Product sharing integrity token is unavailable`);
    let s = await r.safePost(`/shopping/entity-shares`, {
        authOption: u.SendIfAvailable,
        requestBody: e,
        signal: i,
        ...o ? {
            additionalHeaders: o
        } : {}
    });
    return k(i), s
}
var N, P = e((() => {
    g(), p(), x(), _(), j(), N = `chatgpt_product_entity_share`
}));

function F() {
    return A()
}
var I, L, R, z, B = e((() => {
    I = T(), D(), d(), a(), w(), h(), P(), j(), L = S(), R = C({
        share: {
            id: `chatgpt.shopping.entity_share.button.share.label`,
            defaultMessage: `Share product`
        },
        sharing: {
            id: `chatgpt.shopping.entity_share.button.sharing.label`,
            defaultMessage: `Creating link`
        },
        copied: {
            id: `chatgpt.shopping.entity_share.toast.copied`,
            defaultMessage: `Product link copied`
        },
        failed: {
            id: `chatgpt.shopping.entity_share.toast.failed`,
            defaultMessage: `Couldn't share this product. Try again.`
        }
    }), z = e => {
        "use forget";
        let t = (0, I.c)(13),
            {
                product: n,
                hydratedProduct: r,
                publicEntityShareId: a,
                className: s
            } = e;
        if (!i(F) && a == null) return null;
        let c;
        t[0] !== r || t[1] !== n ? (c = n ? y(n, r) : null, t[0] = r, t[1] = n, t[2] = c) : c = t[2];
        let l = c;
        if (a != null && !f(a) || a == null && l == null) return null;
        let u = a ?? n?.id,
            d;
        t[3] === s ? d = t[4] : (d = o(`interactive-button interactive-button-secondary interactive-outline-secondary flex h-9 w-9 items-center justify-center rounded-lg aria-disabled:cursor-wait`, s), t[3] = s, t[4] = d);
        let p = a != null,
            m;
        t[5] !== a || t[6] !== l ? (m = e => {
            if (a != null) return v(a, window.location.origin);
            if (l == null) throw Error(`Product sharing identity is unavailable`);
            return k(e), M(l, e).then(t => {
                if (k(e), !f(t.entity_share_id) || t.url !== v(t.entity_share_id)) throw Error(`Product sharing identity does not match`);
                return v(t.entity_share_id, window.location.origin)
            })
        }, t[5] = a, t[6] = l, t[7] = m) : m = t[7];
        let h;
        return t[8] !== u || t[9] !== d || t[10] !== p || t[11] !== m ? (h = (0, L.jsx)(E, {
            className: d,
            messages: R,
            entityKind: `product`,
            usedExistingLink: p,
            withTooltip: !0,
            getUrl: m
        }, u), t[8] = u, t[9] = d, t[10] = p, t[11] = m, t[12] = h) : h = t[12], h
    }
}));
export {
    B as n, z as t
};
//# sourceMappingURL=fb0f45f8-k3ywwwawzd59twcm.js.map
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Al as t,
    Cl as n,
    F7 as r,
    Gnt as i,
    P5 as a,
    X5 as o,
    Y5 as s,
    Znt as c,
    _8 as l,
    cat as u,
    dit as d,
    fat as f,
    fit as p,
    g8 as m,
    gU as h,
    hU as g,
    jl as _,
    mU as v,
    pU as y,
    qnt as b,
    z7 as x
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as S,
    Ln as C,
    Rn as w,
    wn as T
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Mut as E,
    Nut as D
} from "./conversation-small-ikg0dwuw782klweb.js";

function O() {
    try {
        return i(`684824188`)
    } catch {
        return !1
    }
}

function k(e) {
    if (e?.aborted || !O()) throw new DOMException(`Product sharing is unavailable`, `AbortError`)
}
var A, j = e((() => {
    m(), c(), A = l(O, e => {
        try {
            let t = b();
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
    let a = p(),
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
    d(), f(), x(), _(), j(), N = `chatgpt_product_entity_share`
}));

function F() {
    return A()
}
var I, L, R, z, B = e((() => {
    I = T(), D(), m(), o(), w(), g(), P(), j(), L = S(), R = C({
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
                publicEntityShareId: i,
                className: o
            } = e;
        if (!a(F) && i == null) return null;
        let c;
        t[0] !== r || t[1] !== n ? (c = n ? y(n, r) : null, t[0] = r, t[1] = n, t[2] = c) : c = t[2];
        let l = c;
        if (i != null && !h(i) || i == null && l == null) return null;
        let u = i ?? n?.id,
            d;
        t[3] === o ? d = t[4] : (d = s(`interactive-button interactive-button-secondary interactive-outline-secondary flex h-9 w-9 items-center justify-center rounded-lg aria-disabled:cursor-wait`, o), t[3] = o, t[4] = d);
        let f = i != null,
            p;
        t[5] !== i || t[6] !== l ? (p = e => {
            if (i != null) return v(i, window.location.origin);
            if (l == null) throw Error(`Product sharing identity is unavailable`);
            return k(e), M(l, e).then(t => {
                if (k(e), !h(t.entity_share_id) || t.url !== v(t.entity_share_id)) throw Error(`Product sharing identity does not match`);
                return v(t.entity_share_id, window.location.origin)
            })
        }, t[5] = i, t[6] = l, t[7] = p) : p = t[7];
        let m;
        return t[8] !== u || t[9] !== d || t[10] !== f || t[11] !== p ? (m = (0, L.jsx)(E, {
            className: d,
            messages: R,
            entityKind: `product`,
            usedExistingLink: f,
            withTooltip: !0,
            getUrl: p
        }, u), t[8] = u, t[9] = d, t[10] = f, t[11] = p, t[12] = m) : m = t[12], m
    }
}));
export {
    B as n, z as t
};
//# sourceMappingURL=fb0f45f8-dik0gidnni86862l.js.map
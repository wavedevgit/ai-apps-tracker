import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as t,
    A8 as n,
    Ait as r,
    Dat as i,
    J5 as a,
    Ml as o,
    Y7 as s,
    dU as c,
    fU as l,
    frt as u,
    grt as d,
    j8 as f,
    jat as p,
    jit as m,
    jl as h,
    l7 as g,
    pU as _,
    u7 as v,
    uU as y,
    urt as b,
    wl as x
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    Bn as S,
    Ln as C,
    Rn as w,
    wn as T
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Dut as E,
    Eut as D
} from "./conversation-small-fh0oqifngkf5rvl1.js";

function O() {
    try {
        return b(`684824188`)
    } catch {
        return !1
    }
}

function k(e) {
    if (e?.aborted || !O()) throw new DOMException(`Product sharing is unavailable`, `AbortError`)
}
var A, j = e((() => {
    n(), d(), A = f(O, e => {
        try {
            let t = u();
            return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
        } catch {
            return () => {}
        }
    }, {
        name: `productEntitySharingEnabled`
    })
}));
async function M(e, t) {
    k(t);
    let n = m(),
        r = n ? void 0 : await h(N);
    if (k(t), !n && !r?.[x.Token]) throw Error(`Product sharing integrity token is unavailable`);
    let a = await s.safePost(`/shopping/entity-shares`, {
        authOption: i.SendIfAvailable,
        requestBody: e,
        signal: t,
        ...r ? {
            additionalHeaders: r
        } : {}
    });
    return k(t), a
}
var N, P = e((() => {
    r(), p(), t(), o(), j(), N = `chatgpt_product_entity_share`
}));

function F() {
    return A()
}
var I, L, R, z, B = e((() => {
    I = T(), E(), n(), v(), w(), l(), P(), j(), L = S(), R = C({
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
        let s;
        t[0] !== r || t[1] !== n ? (s = n ? y(n, r) : null, t[0] = r, t[1] = n, t[2] = s) : s = t[2];
        let l = s;
        if (i != null && !_(i) || i == null && l == null) return null;
        let u = i ?? n?.id,
            d;
        t[3] === o ? d = t[4] : (d = g(`interactive-button interactive-button-secondary interactive-outline-secondary flex h-9 w-9 items-center justify-center rounded-lg aria-disabled:cursor-wait`, o), t[3] = o, t[4] = d);
        let f = i != null,
            p;
        t[5] !== i || t[6] !== l ? (p = e => {
            if (i != null) return c(i, window.location.origin);
            if (l == null) throw Error(`Product sharing identity is unavailable`);
            return k(e), M(l, e).then(t => {
                if (k(e), !_(t.entity_share_id) || t.url !== c(t.entity_share_id)) throw Error(`Product sharing identity does not match`);
                return c(t.entity_share_id, window.location.origin)
            })
        }, t[5] = i, t[6] = l, t[7] = p) : p = t[7];
        let m;
        return t[8] !== u || t[9] !== d || t[10] !== f || t[11] !== p ? (m = (0, L.jsx)(D, {
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
//# sourceMappingURL=fb0f45f8-nribhj5orhkkbodg.js.map
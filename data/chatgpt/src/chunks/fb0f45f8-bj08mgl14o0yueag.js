import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Al as t,
    Cl as n,
    J5 as r,
    Knt as i,
    N5 as a,
    P7 as o,
    R7 as s,
    Wnt as c,
    Xnt as l,
    Y5 as u,
    dat as d,
    dit as f,
    fU as p,
    g8 as m,
    h8 as h,
    hU as g,
    jl as _,
    mU as v,
    pU as y,
    sat as b,
    uit as x
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as S,
    Ln as C,
    Rn as w,
    wn as T
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Aut as E,
    kut as D
} from "./conversation-small-cy5f8pl0g26s86so.js";

function O() {
    try {
        return c(`684824188`)
    } catch {
        return !1
    }
}

function k(e) {
    if (e?.aborted || !O()) throw new DOMException(`Product sharing is unavailable`, `AbortError`)
}
var A, j = e((() => {
    h(), l(), A = m(O, e => {
        try {
            let t = i();
            return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
        } catch {
            return () => {}
        }
    }, {
        name: `productEntitySharingEnabled`
    })
}));
async function M(e, r) {
    k(r);
    let i = f(),
        a = i ? void 0 : await t(N);
    if (k(r), !i && !a?.[n.Token]) throw Error(`Product sharing integrity token is unavailable`);
    let s = await o.safePost(`/shopping/entity-shares`, {
        authOption: b.SendIfAvailable,
        requestBody: e,
        signal: r,
        ...a ? {
            additionalHeaders: a
        } : {}
    });
    return k(r), s
}
var N, P = e((() => {
    x(), d(), s(), _(), j(), N = `chatgpt_product_entity_share`
}));

function F() {
    return A()
}
var I, L, R, z, B = e((() => {
    I = T(), E(), h(), u(), w(), v(), P(), j(), L = S(), R = C({
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
                hydratedProduct: i,
                publicEntityShareId: o,
                className: s
            } = e;
        if (!a(F) && o == null) return null;
        let c;
        t[0] !== i || t[1] !== n ? (c = n ? p(n, i) : null, t[0] = i, t[1] = n, t[2] = c) : c = t[2];
        let l = c;
        if (o != null && !g(o) || o == null && l == null) return null;
        let u = o ?? n?.id,
            d;
        t[3] === s ? d = t[4] : (d = r(`interactive-button interactive-button-secondary interactive-outline-secondary flex h-9 w-9 items-center justify-center rounded-lg aria-disabled:cursor-wait`, s), t[3] = s, t[4] = d);
        let f = o != null,
            m;
        t[5] !== o || t[6] !== l ? (m = e => {
            if (o != null) return y(o, window.location.origin);
            if (l == null) throw Error(`Product sharing identity is unavailable`);
            return k(e), M(l, e).then(t => {
                if (k(e), !g(t.entity_share_id) || t.url !== y(t.entity_share_id)) throw Error(`Product sharing identity does not match`);
                return y(t.entity_share_id, window.location.origin)
            })
        }, t[5] = o, t[6] = l, t[7] = m) : m = t[7];
        let h;
        return t[8] !== u || t[9] !== d || t[10] !== f || t[11] !== m ? (h = (0, L.jsx)(D, {
            className: d,
            messages: R,
            entityKind: `product`,
            usedExistingLink: f,
            withTooltip: !0,
            getUrl: m
        }, u), t[8] = u, t[9] = d, t[10] = f, t[11] = m, t[12] = h) : h = t[12], h
    }
}));
export {
    B as n, z as t
};
//# sourceMappingURL=fb0f45f8-bj08mgl14o0yueag.js.map
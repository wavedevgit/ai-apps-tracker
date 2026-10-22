import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    Aat as n,
    Ait as r,
    Eat as i,
    J7 as a,
    Ml as o,
    Q7 as s,
    c7 as c,
    dU as l,
    drt as u,
    fU as d,
    hrt as f,
    jl as p,
    k8 as m,
    kit as h,
    l7 as g,
    lrt as _,
    pU as v,
    q5 as y,
    uU as b,
    wl as x
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bn as S,
    Ln as C,
    Rn as w,
    wn as T
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Dut as E,
    Eut as D
} from "./conversation-small-m08q51xmfe7gjq3d.js";

function O() {
    try {
        return _(`684824188`)
    } catch {
        return !1
    }
}

function k(e) {
    if (e?.aborted || !O()) throw new DOMException(`Product sharing is unavailable`, `AbortError`)
}
var A, j = e((() => {
    m(), f(), A = t(O, e => {
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
    let n = r(),
        o = n ? void 0 : await p(N);
    if (k(t), !n && !o?.[x.Token]) throw Error(`Product sharing integrity token is unavailable`);
    let s = await a.safePost(`/shopping/entity-shares`, {
        authOption: i.SendIfAvailable,
        requestBody: e,
        signal: t,
        ...o ? {
            additionalHeaders: o
        } : {}
    });
    return k(t), s
}
var N, P = e((() => {
    h(), n(), s(), o(), j(), N = `chatgpt_product_entity_share`
}));

function F() {
    return A()
}
var I, L, R, z, B = e((() => {
    I = T(), E(), m(), g(), w(), d(), P(), j(), L = S(), R = C({
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
                className: a
            } = e;
        if (!y(F) && i == null) return null;
        let o;
        t[0] !== r || t[1] !== n ? (o = n ? b(n, r) : null, t[0] = r, t[1] = n, t[2] = o) : o = t[2];
        let s = o;
        if (i != null && !v(i) || i == null && s == null) return null;
        let u = i ?? n?.id,
            d;
        t[3] === a ? d = t[4] : (d = c(`interactive-button interactive-button-secondary interactive-outline-secondary flex h-9 w-9 items-center justify-center rounded-lg aria-disabled:cursor-wait`, a), t[3] = a, t[4] = d);
        let f = i != null,
            p;
        t[5] !== i || t[6] !== s ? (p = e => {
            if (i != null) return l(i, window.location.origin);
            if (s == null) throw Error(`Product sharing identity is unavailable`);
            return k(e), M(s, e).then(t => {
                if (k(e), !v(t.entity_share_id) || t.url !== l(t.entity_share_id)) throw Error(`Product sharing identity does not match`);
                return l(t.entity_share_id, window.location.origin)
            })
        }, t[5] = i, t[6] = s, t[7] = p) : p = t[7];
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
//# sourceMappingURL=fb0f45f8-k7io6mh6des4aal9.js.map
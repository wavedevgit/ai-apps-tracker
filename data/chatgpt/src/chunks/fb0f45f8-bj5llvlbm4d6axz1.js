import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    Crt as n,
    I7 as r,
    K5 as i,
    Lit as a,
    M7 as o,
    Ml as s,
    Pat as c,
    Rat as l,
    Rit as u,
    _rt as d,
    dU as f,
    fU as p,
    j5 as m,
    j8 as h,
    jl as g,
    pU as _,
    q5 as v,
    uU as y,
    wl as b,
    yrt as x
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as S,
    Ln as C,
    Rn as w,
    wn as T
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Cut as E,
    wut as D
} from "./conversation-small-bcbq46iub1p0ca1t.js";

function O() {
    try {
        return d(`684824188`)
    } catch {
        return !1
    }
}

function k(e) {
    if (e?.aborted || !O()) throw new DOMException(`Product sharing is unavailable`, `AbortError`)
}
var A, j = e((() => {
    t(), n(), A = h(O, e => {
        try {
            let t = x();
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
    let n = u(),
        r = n ? void 0 : await g(N);
    if (k(t), !n && !r?.[b.Token]) throw Error(`Product sharing integrity token is unavailable`);
    let i = await o.safePost(`/shopping/entity-shares`, {
        authOption: c.SendIfAvailable,
        requestBody: e,
        signal: t,
        ...r ? {
            additionalHeaders: r
        } : {}
    });
    return k(t), i
}
var N, P = e((() => {
    a(), l(), r(), s(), j(), N = `chatgpt_product_entity_share`
}));

function F() {
    return A()
}
var I, L, R, z, B = e((() => {
    I = T(), D(), t(), v(), w(), p(), P(), j(), L = S(), R = C({
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
                className: o
            } = e;
        if (!m(F) && a == null) return null;
        let s;
        t[0] !== r || t[1] !== n ? (s = n ? y(n, r) : null, t[0] = r, t[1] = n, t[2] = s) : s = t[2];
        let c = s;
        if (a != null && !_(a) || a == null && c == null) return null;
        let l = a ?? n?.id,
            u;
        t[3] === o ? u = t[4] : (u = i(`interactive-button interactive-button-secondary interactive-outline-secondary flex h-9 w-9 items-center justify-center rounded-lg aria-disabled:cursor-wait`, o), t[3] = o, t[4] = u);
        let d = a != null,
            p;
        t[5] !== a || t[6] !== c ? (p = e => {
            if (a != null) return f(a, window.location.origin);
            if (c == null) throw Error(`Product sharing identity is unavailable`);
            return k(e), M(c, e).then(t => {
                if (k(e), !_(t.entity_share_id) || t.url !== f(t.entity_share_id)) throw Error(`Product sharing identity does not match`);
                return f(t.entity_share_id, window.location.origin)
            })
        }, t[5] = a, t[6] = c, t[7] = p) : p = t[7];
        let h;
        return t[8] !== l || t[9] !== u || t[10] !== d || t[11] !== p ? (h = (0, L.jsx)(E, {
            className: u,
            messages: R,
            entityKind: `product`,
            usedExistingLink: d,
            withTooltip: !0,
            getUrl: p
        }, l), t[8] = l, t[9] = u, t[10] = d, t[11] = p, t[12] = h) : h = t[12], h
    }
}));
export {
    B as n, z as t
};
//# sourceMappingURL=fb0f45f8-bj5llvlbm4d6axz1.js.map
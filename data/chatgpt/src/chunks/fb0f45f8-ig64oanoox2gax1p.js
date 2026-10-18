import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ait as t,
    B6 as n,
    BH as r,
    HH as i,
    Nrt as a,
    Pit as o,
    Prt as s,
    UH as c,
    V6 as l,
    VH as u,
    a7 as d,
    b5 as f,
    dl as p,
    fl as m,
    hnt as h,
    i5 as g,
    il as _,
    l7 as v,
    pnt as y,
    y5 as b,
    ynt as x
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as S,
    Ln as C,
    Rn as w,
    wn as T
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Eut as E,
    Tut as D
} from "./conversation-small-fym1zmu9zimymmm1.js";

function O() {
    try {
        return y(`684824188`)
    } catch {
        return !1
    }
}

function k(e) {
    if (e?.aborted || !O()) throw new DOMException(`Product sharing is unavailable`, `AbortError`)
}
var A, j = e((() => {
    n(), x(), A = l(O, e => {
        try {
            let t = h();
            return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
        } catch {
            return () => {}
        }
    }, {
        name: `productEntitySharingEnabled`
    })
}));
async function M(e, n) {
    k(n);
    let r = s(),
        i = r ? void 0 : await p(N);
    if (k(n), !r && !i?.[_.Token]) throw Error(`Product sharing integrity token is unavailable`);
    let a = await d.safePost(`/shopping/entity-shares`, {
        authOption: t.SendIfAvailable,
        requestBody: e,
        signal: n,
        ...i ? {
            additionalHeaders: i
        } : {}
    });
    return k(n), a
}
var N, P = e((() => {
    a(), o(), v(), m(), j(), N = `chatgpt_product_entity_share`
}));

function F() {
    return A()
}
var I, L, R, z, B = e((() => {
    I = T(), E(), n(), f(), w(), i(), P(), j(), L = S(), R = C({
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
                publicEntityShareId: a,
                className: o
            } = e;
        if (!g(F) && a == null) return null;
        let s;
        t[0] !== i || t[1] !== n ? (s = n ? r(n, i) : null, t[0] = i, t[1] = n, t[2] = s) : s = t[2];
        let l = s;
        if (a != null && !c(a) || a == null && l == null) return null;
        let d = a ?? n?.id,
            f;
        t[3] === o ? f = t[4] : (f = b(`interactive-button interactive-button-secondary interactive-outline-secondary flex h-9 w-9 items-center justify-center rounded-lg aria-disabled:cursor-wait`, o), t[3] = o, t[4] = f);
        let p = a != null,
            m;
        t[5] !== a || t[6] !== l ? (m = e => {
            if (a != null) return u(a, window.location.origin);
            if (l == null) throw Error(`Product sharing identity is unavailable`);
            return k(e), M(l, e).then(t => {
                if (k(e), !c(t.entity_share_id) || t.url !== u(t.entity_share_id)) throw Error(`Product sharing identity does not match`);
                return u(t.entity_share_id, window.location.origin)
            })
        }, t[5] = a, t[6] = l, t[7] = m) : m = t[7];
        let h;
        return t[8] !== d || t[9] !== f || t[10] !== p || t[11] !== m ? (h = (0, L.jsx)(D, {
            className: f,
            messages: R,
            entityKind: `product`,
            usedExistingLink: p,
            withTooltip: !0,
            getUrl: m
        }, d), t[8] = d, t[9] = f, t[10] = p, t[11] = m, t[12] = h) : h = t[12], h
    }
}));
export {
    B as n, z as t
};
//# sourceMappingURL=fb0f45f8-ig64oanoox2gax1p.js.map
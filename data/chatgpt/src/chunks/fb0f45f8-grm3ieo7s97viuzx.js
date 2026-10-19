import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A5 as t,
    Al as n,
    Bnt as r,
    F7 as i,
    G5 as a,
    Hnt as o,
    K5 as s,
    Knt as c,
    Sl as l,
    f8 as u,
    fU as d,
    hU as f,
    j7 as p,
    kl as m,
    mU as h,
    oit as g,
    p8 as _,
    pU as v,
    rat as y,
    sat as b,
    sit as x
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    Bn as S,
    Ln as C,
    Rn as w,
    wn as T
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Dut as E,
    Out as D
} from "./conversation-small-l6tnsr2xfn2d55kk.js";

function O() {
    try {
        return r(`684824188`)
    } catch {
        return !1
    }
}

function k(e) {
    if (e?.aborted || !O()) throw new DOMException(`Product sharing is unavailable`, `AbortError`)
}
var A, j = e((() => {
    u(), c(), A = _(O, e => {
        try {
            let t = o();
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
    let n = x(),
        r = n ? void 0 : await m(N);
    if (k(t), !n && !r?.[l.Token]) throw Error(`Product sharing integrity token is unavailable`);
    let i = await p.safePost(`/shopping/entity-shares`, {
        authOption: y.SendIfAvailable,
        requestBody: e,
        signal: t,
        ...r ? {
            additionalHeaders: r
        } : {}
    });
    return k(t), i
}
var N, P = e((() => {
    g(), b(), i(), n(), j(), N = `chatgpt_product_entity_share`
}));

function F() {
    return A()
}
var I, L, R, z, B = e((() => {
    I = T(), D(), u(), s(), w(), h(), P(), j(), L = S(), R = C({
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
        let n = (0, I.c)(13),
            {
                product: r,
                hydratedProduct: i,
                publicEntityShareId: o,
                className: s
            } = e;
        if (!t(F) && o == null) return null;
        let c;
        n[0] !== i || n[1] !== r ? (c = r ? d(r, i) : null, n[0] = i, n[1] = r, n[2] = c) : c = n[2];
        let l = c;
        if (o != null && !f(o) || o == null && l == null) return null;
        let u = o ?? r?.id,
            p;
        n[3] === s ? p = n[4] : (p = a(`interactive-button interactive-button-secondary interactive-outline-secondary flex h-9 w-9 items-center justify-center rounded-lg aria-disabled:cursor-wait`, s), n[3] = s, n[4] = p);
        let m = o != null,
            h;
        n[5] !== o || n[6] !== l ? (h = e => {
            if (o != null) return v(o, window.location.origin);
            if (l == null) throw Error(`Product sharing identity is unavailable`);
            return k(e), M(l, e).then(t => {
                if (k(e), !f(t.entity_share_id) || t.url !== v(t.entity_share_id)) throw Error(`Product sharing identity does not match`);
                return v(t.entity_share_id, window.location.origin)
            })
        }, n[5] = o, n[6] = l, n[7] = h) : h = n[7];
        let g;
        return n[8] !== u || n[9] !== p || n[10] !== m || n[11] !== h ? (g = (0, L.jsx)(E, {
            className: p,
            messages: R,
            entityKind: `product`,
            usedExistingLink: m,
            withTooltip: !0,
            getUrl: h
        }, u), n[8] = u, n[9] = p, n[10] = m, n[11] = h, n[12] = g) : g = n[12], g
    }
}));
export {
    B as n, z as t
};
//# sourceMappingURL=fb0f45f8-grm3ieo7s97viuzx.js.map
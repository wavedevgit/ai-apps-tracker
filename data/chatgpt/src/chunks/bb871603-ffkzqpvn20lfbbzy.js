const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/dd1b3c31-i1elg6dol81xgt2p.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-dfpv67hlp00pbohr.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-cy5f8pl0g26s86so.js", "assets/30901919-7dzdc1ou0jtwkwpt.js", "assets/c470f5ab-d4g7lc53n1e1ao7o.js", "assets/0e5afe53-o2mcfq1ky1uaktz5.js", "assets/conversation-small-j5v9ogf2.css", "assets/81c0f737-f5mih9pgb1jdv6fu.js", "assets/7339bb63-ocqwworztts2bvaz.js", "assets/fc6672ad-cterlq0p480pjbq5.js", "assets/b094db7c-iruu76n66xrq1gi4.js", "assets/dc83bb9e-g2woqeyjdt2tykgr.js", "assets/bdde876f-d8dpomqutad8sd94.js", "assets/c2675c8c-9bs3zsr3vq259es7.js", "assets/82782bc9-mb60yg1xlggwvqri.js", "assets/8b34dbc2-k1zgxrtsww83602u.js", "assets/global-modals-lv5n3ujm.css"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    C1 as n,
    Fot as r,
    Iot as i,
    JT as a,
    L1 as o,
    Lot as s,
    N5 as c,
    Pot as l,
    X0 as u,
    Y0 as d,
    drt as f,
    fF as p,
    h8 as m,
    lrt as h,
    mF as g,
    qT as _,
    urt as v
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as y,
    Nn as b,
    Rn as x,
    Vn as S,
    cn as C,
    ln as w,
    wn as T,
    zn as E
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Dhn as D,
    Ehn as O,
    co as k,
    io as ee,
    oFn as A,
    oo as te,
    ro as j,
    sFn as ne,
    so as re
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    ei as ie,
    ti as ae
} from "./30901919-7dzdc1ou0jtwkwpt.js";
import {
    c as oe,
    n as se
} from "./3ed411a3-ez8khl8qd0usjqrn.js";
import {
    n as ce,
    t as le
} from "./3ca39ed9-htm9liw2e5x0z1xq.js";
import {
    i as ue,
    n as M,
    r as N,
    t as de
} from "./764f2764-n24keuyl8f2poecv.js";
import {
    a as fe,
    i as pe,
    n as me
} from "./eed70aa1-bppomzgf74uz94gv.js";
import {
    n as he,
    t as ge
} from "./66f31be8-kfn26dcq4i1og2kv.js";
var P, _e = e((() => {
    u(), w(), P = d(() => C(() => import(`./dd1b3c31-i1elg6dol81xgt2p.js`).then(e => (e.r(), e.n)).then(e => e.BusinessProfileCanonicalClaim), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])))
}));

function F(e, t) {
    if (e != null) try {
        return t.safeParse(JSON.parse(e)).data
    } catch {
        return
    }
}
var I, L, R, z, ve = e((() => {
    I = T(), ue(), de(), x(), fe(), O(), L = y(), R = D({
        id: `business-profile-policy`,
        icons: {
            delivery: {
                normal: M,
                small: M
            },
            returns: {
                normal: N,
                small: N
            }
        }
    }), z = e => {
        "use forget";
        let t = (0, I.c)(15),
            {
                deliveryPolicy: n,
                returnsPolicy: r
            } = e,
            i = E(),
            a, o, s, c;
        if (t[0] !== n || t[1] !== i || t[2] !== r) {
            c = Symbol.for(`react.early_return_sentinel`);
            bb0: {
                let e = F(n, me),
                    l;
                if (t[7] === r ? l = t[8] : (l = F(r, pe), t[7] = r, t[8] = l), a = l, e == null && a == null) {
                    c = null;
                    break bb0
                }
                o = `divide-token-border-light mt-5 divide-y`,
                s = e == null ? null : (0, L.jsxs)(`div`, {
                    className: `flex min-h-12 items-center gap-4 py-3 text-sm`,
                    children: [(0, L.jsx)(R.Delivery, {
                        className: `icon size-6 shrink-0`
                    }), (0, L.jsx)(`span`, {
                        children: e.delivery === `none` ? (0, L.jsx)(b, {
                            id: `chatgpt.entity.businessProfile.noDelivery`,
                            defaultMessage: `Delivery unavailable`
                        }) : e.delivery === `paid` ? (0, L.jsx)(b, {
                            id: `chatgpt.entity.businessProfile.paidDelivery`,
                            defaultMessage: `Paid delivery`
                        }) : e.delivery === `free` && e.scope === `all_orders` ? (0, L.jsx)(b, {
                            id: `chatgpt.entity.businessProfile.freeDelivery`,
                            defaultMessage: `Free delivery on all orders`
                        }) : e.delivery === `free` && e.scope === `minimum_order` ? (0, L.jsx)(b, {
                            id: `chatgpt.entity.businessProfile.deliveryMinimum`,
                            defaultMessage: `Free delivery over {amount}`,
                            values: {
                                amount: i.formatNumber(Number(e.minimum_order_amount), {
                                    style: `currency`,
                                    currency: e.currency,
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 20
                                })
                            }
                        }) : null
                    })]
                })
            }
            t[0] = n, t[1] = i, t[2] = r, t[3] = a, t[4] = o, t[5] = s, t[6] = c
        } else a = t[3], o = t[4], s = t[5], c = t[6];
        if (c !== Symbol.for(`react.early_return_sentinel`)) return c;
        let l;
        t[9] === a ? l = t[10] : (l = a == null ? null : (0, L.jsxs)(`div`, {
            className: `flex min-h-12 items-center gap-4 py-3 text-sm`,
            children: [(0, L.jsx)(R.Returns, {
                className: `icon size-6 shrink-0`
            }), (0, L.jsx)(`span`, {
                children: a.returns === `none` ? (0, L.jsx)(b, {
                    id: `chatgpt.entity.businessProfile.noReturns`,
                    defaultMessage: `Returns not accepted`
                }) : (0, L.jsx)(b, {
                    id: `chatgpt.entity.businessProfile.returnWindow`,
                    defaultMessage: `{kind, select, free {Free returns within {days, plural, one {# day} other {# days}} of delivery} other {Returns within {days, plural, one {# day} other {# days}} of delivery, fees apply}}`,
                    values: {
                        kind: a.returns,
                        days: a.window_days
                    }
                })
            })]
        }), t[9] = a, t[10] = l);
        let u;
        return t[11] !== o || t[12] !== s || t[13] !== l ? (u = (0, L.jsxs)(`div`, {
            className: o,
            children: [s, l]
        }), t[11] = o, t[12] = s, t[13] = l, t[14] = u) : u = t[14], u
    }
}));

function ye() {
    return e => {
        let t = e.children.find(e => e.type === `element` && e.tagName === `h2`);
        t?.type === `element` && (t.properties.dataBusinessProfileHeading = !0)
    }
}
var B, V, H, U = e((() => {
    B = t(S()), V = (0, B.createContext)(null), H = (0, B.createContext)(void 0)
}));

function be(e) {
    "use forget";
    let t = (0, G.c)(41),
        {
            profile: n,
            category: r,
            children: a
        } = e,
        o = c(Ce),
        u = (0, K.useSyncExternalStore)(s, l, l),
        d = (0, K.useSyncExternalStore)(s, i, i),
        f = u?.user?.id,
        p = ee() && !d && o != null && f != null && [`business`, `brand`, `company`, `organization`].includes(r ?? ``),
        m = n?.canonical_id,
        h = n?.profile_id,
        [g, _] = (0, K.useState)(0),
        [v, y] = (0, K.useState)(null),
        [b, x] = (0, K.useState)(null),
        S = JSON.stringify([p, o, f, m, h]),
        [C, w] = (0, K.useState)(null);
    C != null && C.key !== S && w(null), v != null && v !== S && y(null);
    let T;
    t[0] !== o || t[1] !== m || t[2] !== p || t[3] !== S ? (T = () => {
        if (!p || o == null || m == null) return;
        let e = new AbortController;
        return te.safePost(`/chat/frontend/v1/business-profiles/resolve`, {
            additionalHeaders: {
                ...re,
                "ChatGPT-Account-ID": o
            },
            signal: e.signal,
            disableAutomaticRetry: !0,
            preserveAccountIdOnRetry: !0,
            requestBody: {
                provider: `canonical-business-profile`,
                provider_business_id: m
            }
        }).then(t => {
            e.signal.aborted || w({
                key: S,
                status: t
            })
        }).catch(Se), () => {
            e.abort()
        }
    }, t[0] = o, t[1] = m, t[2] = p, t[3] = S, t[4] = T) : T = t[4];
    let E;
    t[5] !== o || t[6] !== m || t[7] !== p || t[8] !== S || t[9] !== g ? (E = [p, o, m, S, g], t[5] = o, t[6] = m, t[7] = p, t[8] = S, t[9] = g, t[10] = E) : E = t[10], (0, K.useEffect)(T, E);
    let D;
    t[11] !== p || t[12] !== S || t[13] !== C || t[14] !== n ? (D = n == null ? null : {
        status: p && C?.key === S ? C.status : null,
        websiteUrl: n.website_url ?? null
    }, t[11] = p, t[12] = S, t[13] = C, t[14] = n, t[15] = D) : D = t[15];
    let O;
    t[16] !== p || t[17] !== S || t[18] !== C?.key || t[19] !== h || t[20] !== y || t[21] !== x ? (O = p && C?.key === S && h != null ? () => {
        x(document.activeElement instanceof HTMLElement ? document.activeElement : null), y(S)
    } : void 0, t[16] = p, t[17] = S, t[18] = C?.key, t[19] = h, t[20] = y, t[21] = x, t[22] = O) : O = t[22];
    let k;
    t[23] !== a || t[24] !== O ? (k = (0, q.jsx)(H.Provider, {
        value: O,
        children: a
    }), t[23] = a, t[24] = O, t[25] = k) : k = t[25];
    let A;
    t[26] !== o || t[27] !== v || t[28] !== p || t[29] !== S || t[30] !== h || t[31] !== u?.user?.email || t[32] !== y || t[33] !== _ || t[34] !== b || t[35] !== f ? (A = p && v === S && h != null && o != null && f != null && (0, q.jsx)(P, {
        profileId: h,
        showOnboarding: !0,
        accountId: o,
        userId: f,
        email: u?.user?.email ?? ``,
        onClose: () => {
            y(null), _(xe), requestAnimationFrame(() => {
                b?.isConnected && b.focus()
            })
        }
    }, S), t[26] = o, t[27] = v, t[28] = p, t[29] = S, t[30] = h, t[31] = u?.user?.email, t[32] = y, t[33] = _, t[34] = b, t[35] = f, t[36] = A) : A = t[36];
    let j;
    return t[37] !== D || t[38] !== k || t[39] !== A ? (j = (0, q.jsxs)(V.Provider, {
        value: D,
        children: [k, A]
    }), t[37] = D, t[38] = k, t[39] = A, t[40] = j) : j = t[40], j
}

function xe(e) {
    return e + 1
}

function Se() {}

function Ce() {
    return n()?.id
}

function we(e) {
    "use forget";
    let t = (0, G.c)(29),
        {
            children: n
        } = e,
        r = (0, K.useContext)(H),
        i = g(),
        a;
    t[0] === i ? a = t[1] : (a = () => i?.serverId$(), t[0] = i, t[1] = a);
    let o = c(a),
        s = (0, K.useContext)(V),
        l = s?.status,
        u;
    t[2] === s?.websiteUrl ? u = t[3] : (u = s?.websiteUrl?.trim(), t[2] = s?.websiteUrl, t[3] = u);
    let d = u,
        f = oe(o, d, !0, i?.id),
        p = E();
    if (s == null) return n;
    let m = l?.ownership?.available_action === `view_request` && l.ownership.current_request?.kind === `claim` ? l.ownership.current_request : null,
        h;
    t[4] !== m || t[5] !== l ? (h = l?.ownership_state_enabled && !l.profiles.some(W) && (l.ownership?.available_action === `claim` || m != null), t[4] = m, t[5] = l, t[6] = h) : h = t[6];
    let v = h,
        y;
    if (t[7] !== n || t[8] !== p || t[9] !== l?.is_verified) {
        let e;
        t[11] !== p || t[12] !== l?.is_verified ? (e = e => (0, K.isValidElement)(e) ? (0, K.cloneElement)(e, {}, e.props.children, l?.is_verified === !0 ? (0, q.jsx)(ge, {
            className: `text-token-text-accent ms-2`,
            showTooltip: !0,
            label: p.formatMessage({
                id: `chatgpt.business_profiles.sidebar.verified.label`,
                defaultMessage: `Verified business`
            }),
            children: (0, q.jsx)(ie, {
                "aria-hidden": !0,
                className: `icon`
            })
        }) : null) : e, t[11] = p, t[12] = l?.is_verified, t[13] = e) : e = t[13], y = K.Children.map(n, e), t[7] = n, t[8] = p, t[9] = l?.is_verified, t[10] = y
    } else y = t[10];
    let x;
    t[14] !== f || t[15] !== d ? (x = d && /^https?:\/\//i.test(d) ? (0, q.jsx)(`div`, {
        className: `my-3`,
        children: (0, q.jsx)(_, {
            as: `button`,
            type: `button`,
            color: `primary`,
            onClick: () => ne(d, f),
            children: (0, q.jsx)(b, {
                id: `chatgpt.entity.businessProfile.viewWebsite`,
                defaultMessage: `View website`
            })
        })
    }) : null, t[14] = f, t[15] = d, t[16] = x) : x = t[16];
    let S = l?.delivery_policy,
        C = l?.returns_policy,
        w;
    t[17] !== S || t[18] !== C ? (w = (0, q.jsx)(z, {
        deliveryPolicy: S,
        returnsPolicy: C
    }), t[17] = S, t[18] = C, t[19] = w) : w = t[19];
    let T;
    t[20] !== v || t[21] !== r || t[22] !== m ? (T = v && (0, q.jsx)(le, {
        state: m == null ? `claimable` : `pending_claim`,
        requestStatus: m?.status,
        onAction: r
    }), t[20] = v, t[21] = r, t[22] = m, t[23] = T) : T = t[23];
    let D;
    return t[24] !== y || t[25] !== x || t[26] !== w || t[27] !== T ? (D = (0, q.jsxs)(q.Fragment, {
        children: [y, x, w, T]
    }), t[24] = y, t[25] = x, t[26] = w, t[27] = T, t[28] = D) : D = t[28], D
}

function W(e) {
    return e.allowed_actions.includes(`manage`)
}

function Te(e) {
    "use forget";
    let t = (0, G.c)(3),
        {
            enabled: n,
            children: r
        } = e,
        i = (0, K.useContext)(V),
        a = n ? i : null,
        o;
    return t[0] !== r || t[1] !== a ? (o = (0, q.jsx)(V.Provider, {
        value: a,
        children: r
    }), t[0] = r, t[1] = a, t[2] = o) : o = t[2], o
}
var G, K, q, Ee = e((() => {
    G = T(), K = t(S()), x(), a(), k(), _e(), ce(), ve(), j(), he(), p(), ae(), A(), se(), m(), o(), r(), U(), q = y()
}));

function J(e) {
    return e === `hotel` || e === `local_business` || e === `restaurant`
}

function De(e) {
    let t = Y(e);
    return t == null ? `missing_citation` : t.type === `hidden` ? `hidden_citation` : t.type === `invalid` ? `invalid_citation` : t.type === `image_group` ? t.layout === `full_width` ? t.images.length === 0 ? `empty_cards` : t.images.some(e => e.image_result != null) ? `resolved` : `unresolved_cards` : `unexpected_layout` : `missing_citation`
}

function Oe(e) {
    let t = Y(e);
    if (t?.type !== `hidden`) return;
    let n = `hidden_reason` in t ? t.hidden_reason : void 0;
    return n === `age_gated` || n === `insufficient_images` ? n : n == null ? `unknown` : `other`
}

function ke(e) {
    let t = Y(e);
    if (t?.type !== `image_group` || t.layout !== `full_width`) return `0`;
    let n = t.images.filter(e => e.image_result != null).length;
    return n <= 0 ? `0` : n === 1 ? `1` : n === 2 ? `2` : n === 3 ? `3` : `4_plus`
}

function Ae({
    category: e,
    outcome: t,
    userCountry: n,
    hiddenReason: r
}) {
    J(e) && v.count(f.DEFAULT, X, {
        entity_category: e,
        outcome: t,
        user_country: n,
        ...r == null ? {} : {
            hidden_reason: r
        }
    })
}

function je({
    category: e
}) {
    J(e) && v.count(f.DEFAULT, Z, {
        entity_category: e
    })
}

function Me({
    category: e,
    imageCountBucket: t
}) {
    J(e) && v.count(f.DEFAULT, Q, {
        entity_category: e,
        image_count_bucket: t
    })
}

function Y(e) {
    return e[0]?.metadata?.content_references?.find(e => e.start_idx === 0 && (e.type === `image_group` || typeof e.matched_text == `string` && e.matched_text.startsWith($)))
}
var X, Z, Q, $, Ne = e((() => {
    h(), X = `sidebar.business_hero_image_group.outcome`, Z = `sidebar.business_hero_image_group.first_tile_loaded`, Q = `sidebar.business_hero_image_group.sent_image_count`, $ = `image_group`
}));
export {
    J as a, Me as c, be as d, Ee as f, ye as h, Ne as i, we as l, U as m, De as n, je as o, V as p, ke as r, Ae as s, Oe as t, Te as u
};
//# sourceMappingURL=bb871603-ffkzqpvn20lfbbzy.js.map
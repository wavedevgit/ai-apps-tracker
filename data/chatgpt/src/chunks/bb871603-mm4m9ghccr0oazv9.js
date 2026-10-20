const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/dd1b3c31-m4h0p0gpszorc7o1.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-bo7e0c29ngt4zgx0.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-ikg0dwuw782klweb.js", "assets/30901919-e8h11sw136qen6v0.js", "assets/c470f5ab-ab47eubabs8jspdc.js", "assets/0e5afe53-esm68l11os61djoy.js", "assets/conversation-small-oilgsqfa.css", "assets/81c0f737-ab8l1qdq9rz44i20.js", "assets/7339bb63-e6v366z97j1b7yjy.js", "assets/fc6672ad-cterlq0p480pjbq5.js", "assets/b094db7c-iruu76n66xrq1gi4.js", "assets/dc83bb9e-irocle2i28fq0b68.js", "assets/bdde876f-lyxqzvyqp7i3w3mo.js", "assets/c2675c8c-ejvs9hq3rwjwsbcv.js", "assets/82782bc9-fcii2id0x6lspwtj.js", "assets/8b34dbc2-dtawqv9t1aqckqj4.js", "assets/global-modals-lv5n3ujm.css"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Fot as n,
    Iot as r,
    JT as i,
    Lot as a,
    P5 as o,
    R1 as s,
    Rot as c,
    X0 as l,
    YT as u,
    Z0 as d,
    drt as f,
    frt as p,
    g8 as m,
    hF as h,
    pF as g,
    urt as _,
    w1 as v
} from "./4813494d-bo7e0c29ngt4zgx0.js";
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
    Ahn as D,
    Cpt as O,
    co as k,
    io as ee,
    khn as A,
    lFn as j,
    oo as te,
    ro as M,
    so as ne,
    uFn as re,
    wpt as ie
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    ei as ae,
    ti as oe
} from "./30901919-e8h11sw136qen6v0.js";
import {
    c as se,
    n as ce
} from "./3ed411a3-miau4a3jx6gjr5qn.js";
import {
    n as le,
    t as ue
} from "./3ca39ed9-dp11o5rco280y852.js";
import {
    i as de,
    n as N,
    r as P,
    t as fe
} from "./764f2764-gvwrrlnjqqlku3ko.js";
import {
    a as pe,
    i as me,
    n as he
} from "./eed70aa1-bdn0jav2yohopxre.js";
import {
    n as ge,
    t as _e
} from "./66f31be8-ce670jsv81ldt1sw.js";
var F, ve = e((() => {
    d(), w(), F = l(() => C(() => import(`./dd1b3c31-m4h0p0gpszorc7o1.js`).then(e => (e.r(), e.n)).then(e => e.BusinessProfileCanonicalClaim), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])))
}));

function I(e, t) {
    if (e != null) try {
        return t.safeParse(JSON.parse(e)).data
    } catch {
        return
    }
}
var L, R, z, B, ye = e((() => {
    L = T(), de(), fe(), x(), pe(), A(), R = y(), z = D({
        id: `business-profile-policy`,
        icons: {
            delivery: {
                normal: N,
                small: N
            },
            returns: {
                normal: P,
                small: P
            }
        }
    }), B = e => {
        "use forget";
        let t = (0, L.c)(15),
            {
                deliveryPolicy: n,
                returnsPolicy: r
            } = e,
            i = E(),
            a, o, s, c;
        if (t[0] !== n || t[1] !== i || t[2] !== r) {
            c = Symbol.for(`react.early_return_sentinel`);
            bb0: {
                let e = I(n, he),
                    l;
                if (t[7] === r ? l = t[8] : (l = I(r, me), t[7] = r, t[8] = l), a = l, e == null && a == null) {
                    c = null;
                    break bb0
                }
                o = `divide-token-border-light mt-5 divide-y`,
                s = e == null ? null : (0, R.jsxs)(`div`, {
                    className: `flex min-h-12 items-center gap-4 py-3 text-sm`,
                    children: [(0, R.jsx)(z.Delivery, {
                        className: `icon size-6 shrink-0`
                    }), (0, R.jsx)(`span`, {
                        children: e.delivery === `none` ? (0, R.jsx)(b, {
                            id: `chatgpt.entity.businessProfile.noDelivery`,
                            defaultMessage: `Delivery unavailable`
                        }) : e.delivery === `paid` ? (0, R.jsx)(b, {
                            id: `chatgpt.entity.businessProfile.paidDelivery`,
                            defaultMessage: `Paid delivery`
                        }) : e.delivery === `free` && e.scope === `all_orders` ? (0, R.jsx)(b, {
                            id: `chatgpt.entity.businessProfile.freeDelivery`,
                            defaultMessage: `Free delivery on all orders`
                        }) : e.delivery === `free` && e.scope === `minimum_order` ? (0, R.jsx)(b, {
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
        t[9] === a ? l = t[10] : (l = a == null ? null : (0, R.jsxs)(`div`, {
            className: `flex min-h-12 items-center gap-4 py-3 text-sm`,
            children: [(0, R.jsx)(z.Returns, {
                className: `icon size-6 shrink-0`
            }), (0, R.jsx)(`span`, {
                children: a.returns === `none` ? (0, R.jsx)(b, {
                    id: `chatgpt.entity.businessProfile.noReturns`,
                    defaultMessage: `Returns not accepted`
                }) : (0, R.jsx)(b, {
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
        return t[11] !== o || t[12] !== s || t[13] !== l ? (u = (0, R.jsxs)(`div`, {
            className: o,
            children: [s, l]
        }), t[11] = o, t[12] = s, t[13] = l, t[14] = u) : u = t[14], u
    }
}));

function be() {
    return e => {
        let t = e.children.find(e => e.type === `element` && e.tagName === `h2`);
        t?.type === `element` && (t.properties.dataBusinessProfileHeading = !0)
    }
}
var V, H, U, W = e((() => {
    V = t(S()), H = (0, V.createContext)(null), U = (0, V.createContext)(void 0)
}));

function xe(e) {
    "use forget";
    let t = (0, G.c)(44),
        {
            profile: r,
            category: i,
            children: s
        } = e,
        l = ie(),
        u = o(Te),
        d = (0, K.useSyncExternalStore)(c, n, n),
        f = (0, K.useSyncExternalStore)(c, a, a),
        p = d?.user?.id,
        m = ee() && !f && u != null && p != null && [`business`, `brand`, `company`, `organization`].includes(i ?? ``),
        h = r?.canonical_id,
        g = r?.profile_id,
        [_, v] = (0, K.useState)(0),
        [y, b] = (0, K.useState)(null),
        [x, S] = (0, K.useState)(null),
        C = JSON.stringify([m, u, p, h, g]),
        [w, T] = (0, K.useState)(null);
    w != null && w.key !== C && T(null), y != null && y !== C && b(null);
    let E;
    t[0] !== u || t[1] !== h || t[2] !== m || t[3] !== C ? (E = () => {
        if (!m || u == null || h == null) return;
        let e = new AbortController;
        return te.safePost(`/chat/frontend/v1/business-profiles/resolve`, {
            additionalHeaders: {
                ...ne,
                "ChatGPT-Account-ID": u
            },
            signal: e.signal,
            disableAutomaticRetry: !0,
            preserveAccountIdOnRetry: !0,
            requestBody: {
                provider: `canonical-business-profile`,
                provider_business_id: h
            }
        }).then(t => {
            e.signal.aborted || T({
                key: C,
                status: t
            })
        }).catch(we), () => {
            e.abort()
        }
    }, t[0] = u, t[1] = h, t[2] = m, t[3] = C, t[4] = E) : E = t[4];
    let D;
    t[5] !== u || t[6] !== h || t[7] !== m || t[8] !== C || t[9] !== _ ? (D = [m, u, h, C, _], t[5] = u, t[6] = h, t[7] = m, t[8] = C, t[9] = _, t[10] = D) : D = t[10], (0, K.useEffect)(E, D);
    let O;
    t[11] !== m || t[12] !== C || t[13] !== w || t[14] !== r ? (O = r == null ? null : {
        status: m && w?.key === C ? w.status : null,
        websiteUrl: r.website_url ?? null
    }, t[11] = m, t[12] = C, t[13] = w, t[14] = r, t[15] = O) : O = t[15];
    let k;
    t[16] !== m || t[17] !== C || t[18] !== w?.key || t[19] !== g || t[20] !== b || t[21] !== S ? (k = m && w?.key === C && g != null ? () => {
        S(document.activeElement instanceof HTMLElement ? document.activeElement : null), b(C)
    } : void 0, t[16] = m, t[17] = C, t[18] = w?.key, t[19] = g, t[20] = b, t[21] = S, t[22] = k) : k = t[22];
    let A;
    t[23] !== s || t[24] !== k ? (A = (0, q.jsx)(U.Provider, {
        value: k,
        children: s
    }), t[23] = s, t[24] = k, t[25] = A) : A = t[25];
    let j;
    t[26] !== u || t[27] !== y || t[28] !== m || t[29] !== C || t[30] !== w || t[31] !== r?.website_url || t[32] !== g || t[33] !== d?.user?.email || t[34] !== b || t[35] !== v || t[36] !== l || t[37] !== x || t[38] !== p ? (j = m && y === C && g != null && u != null && p != null && (0, q.jsx)(F, {
        profileId: g,
        showOnboarding: !0,
        initialBusiness: w?.key === C && w.status.ownership?.available_action === `claim` && w.status.ownership.current_request == null && !w.status.profiles.some(Ce) && l?.entityName ? {
            name: l.entityName,
            businessType: `ecommerce`,
            websiteUrl: r?.website_url ?? void 0,
            category: ``,
            price: ``,
            hours: null
        } : void 0,
        accountId: u,
        userId: p,
        email: d?.user?.email ?? ``,
        onClose: () => {
            b(null), v(Se), requestAnimationFrame(() => {
                x?.isConnected && x.focus()
            })
        }
    }, C), t[26] = u, t[27] = y, t[28] = m, t[29] = C, t[30] = w, t[31] = r?.website_url, t[32] = g, t[33] = d?.user?.email, t[34] = b, t[35] = v, t[36] = l, t[37] = x, t[38] = p, t[39] = j) : j = t[39];
    let M;
    return t[40] !== O || t[41] !== A || t[42] !== j ? (M = (0, q.jsxs)(H.Provider, {
        value: O,
        children: [A, j]
    }), t[40] = O, t[41] = A, t[42] = j, t[43] = M) : M = t[43], M
}

function Se(e) {
    return e + 1
}

function Ce(e) {
    return e.allowed_actions.includes(`manage`)
}

function we() {}

function Te() {
    return v()?.id
}

function Ee(e) {
    "use forget";
    let t = (0, G.c)(29),
        {
            children: n
        } = e,
        r = (0, K.useContext)(U),
        a = h(),
        s;
    t[0] === a ? s = t[1] : (s = () => a?.serverId$(), t[0] = a, t[1] = s);
    let c = o(s),
        l = (0, K.useContext)(H),
        u = l?.status,
        d;
    t[2] === l?.websiteUrl ? d = t[3] : (d = l?.websiteUrl?.trim(), t[2] = l?.websiteUrl, t[3] = d);
    let f = d,
        p = se(c, f, !0, a?.id),
        m = E();
    if (l == null) return n;
    let g = u?.ownership?.available_action === `view_request` && u.ownership.current_request?.kind === `claim` ? u.ownership.current_request : null,
        _;
    t[4] !== g || t[5] !== u ? (_ = u?.ownership_state_enabled && !u.profiles.some(De) && (u.ownership?.available_action === `claim` || g != null), t[4] = g, t[5] = u, t[6] = _) : _ = t[6];
    let v = _,
        y;
    if (t[7] !== n || t[8] !== m || t[9] !== u?.is_verified) {
        let e;
        t[11] !== m || t[12] !== u?.is_verified ? (e = e => (0, K.isValidElement)(e) ? (0, K.cloneElement)(e, {}, e.props.children, u?.is_verified === !0 ? (0, q.jsx)(_e, {
            className: `text-token-text-accent ms-2`,
            showTooltip: !0,
            label: m.formatMessage({
                id: `chatgpt.business_profiles.sidebar.verified.label`,
                defaultMessage: `Verified business`
            }),
            children: (0, q.jsx)(ae, {
                "aria-hidden": !0,
                className: `icon`
            })
        }) : null) : e, t[11] = m, t[12] = u?.is_verified, t[13] = e) : e = t[13], y = K.Children.map(n, e), t[7] = n, t[8] = m, t[9] = u?.is_verified, t[10] = y
    } else y = t[10];
    let x;
    t[14] !== p || t[15] !== f ? (x = f && /^https?:\/\//i.test(f) ? (0, q.jsx)(`div`, {
        className: `my-3`,
        children: (0, q.jsx)(i, {
            as: `button`,
            type: `button`,
            color: `primary`,
            onClick: () => re(f, p),
            children: (0, q.jsx)(b, {
                id: `chatgpt.entity.businessProfile.viewWebsite`,
                defaultMessage: `View website`
            })
        })
    }) : null, t[14] = p, t[15] = f, t[16] = x) : x = t[16];
    let S = u?.delivery_policy,
        C = u?.returns_policy,
        w;
    t[17] !== S || t[18] !== C ? (w = (0, q.jsx)(B, {
        deliveryPolicy: S,
        returnsPolicy: C
    }), t[17] = S, t[18] = C, t[19] = w) : w = t[19];
    let T;
    t[20] !== v || t[21] !== r || t[22] !== g ? (T = v && (0, q.jsx)(ue, {
        state: g == null ? `claimable` : `pending_claim`,
        requestStatus: g?.status,
        onAction: r
    }), t[20] = v, t[21] = r, t[22] = g, t[23] = T) : T = t[23];
    let D;
    return t[24] !== y || t[25] !== x || t[26] !== w || t[27] !== T ? (D = (0, q.jsxs)(q.Fragment, {
        children: [y, x, w, T]
    }), t[24] = y, t[25] = x, t[26] = w, t[27] = T, t[28] = D) : D = t[28], D
}

function De(e) {
    return e.allowed_actions.includes(`manage`)
}

function Oe(e) {
    "use forget";
    let t = (0, G.c)(3),
        {
            enabled: n,
            children: r
        } = e,
        i = (0, K.useContext)(H),
        a = n ? i : null,
        o;
    return t[0] !== r || t[1] !== a ? (o = (0, q.jsx)(H.Provider, {
        value: a,
        children: r
    }), t[0] = r, t[1] = a, t[2] = o) : o = t[2], o
}
var G, K, q, ke = e((() => {
    G = T(), K = t(S()), x(), u(), k(), ve(), le(), ye(), M(), ge(), g(), oe(), j(), ce(), m(), s(), r(), O(), W(), q = y()
}));

function J(e) {
    return e === `hotel` || e === `local_business` || e === `restaurant`
}

function Ae(e) {
    let t = Y(e);
    return t == null ? `missing_citation` : t.type === `hidden` ? `hidden_citation` : t.type === `invalid` ? `invalid_citation` : t.type === `image_group` ? t.layout === `full_width` ? t.images.length === 0 ? `empty_cards` : t.images.some(e => e.image_result != null) ? `resolved` : `unresolved_cards` : `unexpected_layout` : `missing_citation`
}

function je(e) {
    let t = Y(e);
    if (t?.type !== `hidden`) return;
    let n = `hidden_reason` in t ? t.hidden_reason : void 0;
    return n === `age_gated` || n === `insufficient_images` ? n : n == null ? `unknown` : `other`
}

function Me(e) {
    let t = Y(e);
    if (t?.type !== `image_group` || t.layout !== `full_width`) return `0`;
    let n = t.images.filter(e => e.image_result != null).length;
    return n <= 0 ? `0` : n === 1 ? `1` : n === 2 ? `2` : n === 3 ? `3` : `4_plus`
}

function Ne({
    category: e,
    outcome: t,
    userCountry: n,
    hiddenReason: r
}) {
    J(e) && f.count(p.DEFAULT, X, {
        entity_category: e,
        outcome: t,
        user_country: n,
        ...r == null ? {} : {
            hidden_reason: r
        }
    })
}

function Pe({
    category: e
}) {
    J(e) && f.count(p.DEFAULT, Z, {
        entity_category: e
    })
}

function Fe({
    category: e,
    imageCountBucket: t
}) {
    J(e) && f.count(p.DEFAULT, Q, {
        entity_category: e,
        image_count_bucket: t
    })
}

function Y(e) {
    return e[0]?.metadata?.content_references?.find(e => e.start_idx === 0 && (e.type === `image_group` || typeof e.matched_text == `string` && e.matched_text.startsWith($)))
}
var X, Z, Q, $, Ie = e((() => {
    _(), X = `sidebar.business_hero_image_group.outcome`, Z = `sidebar.business_hero_image_group.first_tile_loaded`, Q = `sidebar.business_hero_image_group.sent_image_count`, $ = `image_group`
}));
export {
    J as a, Fe as c, xe as d, ke as f, be as h, Ie as i, Ee as l, W as m, Ae as n, Pe as o, H as p, Me as r, Ne as s, je as t, Oe as u
};
//# sourceMappingURL=bb871603-mm4m9ghccr0oazv9.js.map
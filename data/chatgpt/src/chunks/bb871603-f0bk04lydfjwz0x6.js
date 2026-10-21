const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/dd1b3c31-ewv9l8qvza6ucr7d.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-lxa3wniynbx9ka2a.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-kzsalymynzuddxee.js", "assets/30901919-i8ip8r0znvgcym38.js", "assets/c470f5ab-poh7ivjvb3j2jlfz.js", "assets/0e5afe53-dz59mkfveu52getp.js", "assets/conversation-small-bwtqiuwj.css", "assets/81c0f737-byruvytjblafyucc.js", "assets/7339bb63-obbbp4oucj90wkzv.js", "assets/fc6672ad-cterlq0p480pjbq5.js", "assets/b094db7c-iruu76n66xrq1gi4.js", "assets/dc83bb9e-568olhq9r0h1qgjg.js", "assets/bdde876f-jtbfl89rrdbdwrmt.js", "assets/c2675c8c-ossqum2x3eut0sh8.js", "assets/82782bc9-idqd90kxtp4zogpp.js", "assets/8b34dbc2-ba6wt3zxvh7jce7p.js", "assets/global-modals-lv5n3ujm.css"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bot as n,
    Hot as r,
    JT as i,
    P5 as a,
    R1 as o,
    Vot as s,
    X0 as c,
    YT as l,
    Z0 as u,
    g8 as d,
    grt as f,
    hF as p,
    hrt as m,
    mrt as h,
    pF as g,
    w1 as _,
    zot as v
} from "./4813494d-lxa3wniynbx9ka2a.js";
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
    dFn as A,
    io as ee,
    khn as j,
    oo as te,
    ro as M,
    so as ne,
    uFn as re,
    wpt as ie
} from "./conversation-small-kzsalymynzuddxee.js";
import {
    ei as ae,
    ti as oe
} from "./30901919-i8ip8r0znvgcym38.js";
import {
    c as se,
    n as ce
} from "./3ed411a3-mjcm9ythe8lkqbvb.js";
import {
    n as le,
    t as ue
} from "./3ca39ed9-cp00zwxjn6h3dpip.js";
import {
    i as de,
    n as N,
    r as P,
    t as fe
} from "./764f2764-ix1aogpmm74fefjo.js";
import {
    a as pe,
    i as me,
    n as he
} from "./eed70aa1-1p6t15obv4r9f1k9.js";
import {
    n as ge,
    t as _e
} from "./66f31be8-h87cldif5dfs9ir3.js";
var F, ve = e((() => {
    u(), w(), F = c(() => C(() => import(`./dd1b3c31-ewv9l8qvza6ucr7d.js`).then(e => (e.r(), e.n)).then(e => e.BusinessProfileCanonicalClaim), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])))
}));

function I(e, t) {
    if (e != null) try {
        return t.safeParse(JSON.parse(e)).data
    } catch {
        return
    }
}
var L, R, z, B, ye = e((() => {
    L = T(), de(), fe(), x(), pe(), j(), R = y(), z = D({
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
            profile: n,
            category: i,
            children: o
        } = e,
        c = ie(),
        l = a(Te),
        u = (0, K.useSyncExternalStore)(r, v, v),
        d = (0, K.useSyncExternalStore)(r, s, s),
        f = u?.user?.id,
        p = ee() && !d && l != null && f != null && [`business`, `brand`, `company`, `organization`].includes(i ?? ``),
        m = n?.canonical_id,
        h = n?.profile_id,
        [g, _] = (0, K.useState)(0),
        [y, b] = (0, K.useState)(null),
        [x, S] = (0, K.useState)(null),
        C = JSON.stringify([p, l, f, m, h]),
        [w, T] = (0, K.useState)(null);
    w != null && w.key !== C && T(null), y != null && y !== C && b(null);
    let E;
    t[0] !== l || t[1] !== m || t[2] !== p || t[3] !== C ? (E = () => {
        if (!p || l == null || m == null) return;
        let e = new AbortController;
        return te.safePost(`/chat/frontend/v1/business-profiles/resolve`, {
            additionalHeaders: {
                ...ne,
                "ChatGPT-Account-ID": l
            },
            signal: e.signal,
            disableAutomaticRetry: !0,
            preserveAccountIdOnRetry: !0,
            requestBody: {
                provider: `canonical-business-profile`,
                provider_business_id: m
            }
        }).then(t => {
            e.signal.aborted || T({
                key: C,
                status: t
            })
        }).catch(we), () => {
            e.abort()
        }
    }, t[0] = l, t[1] = m, t[2] = p, t[3] = C, t[4] = E) : E = t[4];
    let D;
    t[5] !== l || t[6] !== m || t[7] !== p || t[8] !== C || t[9] !== g ? (D = [p, l, m, C, g], t[5] = l, t[6] = m, t[7] = p, t[8] = C, t[9] = g, t[10] = D) : D = t[10], (0, K.useEffect)(E, D);
    let O;
    t[11] !== p || t[12] !== C || t[13] !== w || t[14] !== n ? (O = n == null ? null : {
        status: p && w?.key === C ? w.status : null,
        websiteUrl: n.website_url ?? null
    }, t[11] = p, t[12] = C, t[13] = w, t[14] = n, t[15] = O) : O = t[15];
    let k;
    t[16] !== p || t[17] !== C || t[18] !== w?.key || t[19] !== h || t[20] !== b || t[21] !== S ? (k = p && w?.key === C && h != null ? () => {
        S(document.activeElement instanceof HTMLElement ? document.activeElement : null), b(C)
    } : void 0, t[16] = p, t[17] = C, t[18] = w?.key, t[19] = h, t[20] = b, t[21] = S, t[22] = k) : k = t[22];
    let A;
    t[23] !== o || t[24] !== k ? (A = (0, q.jsx)(U.Provider, {
        value: k,
        children: o
    }), t[23] = o, t[24] = k, t[25] = A) : A = t[25];
    let j;
    t[26] !== l || t[27] !== y || t[28] !== p || t[29] !== C || t[30] !== w || t[31] !== n?.website_url || t[32] !== h || t[33] !== u?.user?.email || t[34] !== b || t[35] !== _ || t[36] !== c || t[37] !== x || t[38] !== f ? (j = p && y === C && h != null && l != null && f != null && (0, q.jsx)(F, {
        profileId: h,
        showOnboarding: !0,
        initialBusiness: w?.key === C && w.status.ownership?.available_action === `claim` && w.status.ownership.current_request == null && !w.status.profiles.some(Ce) && c?.entityName ? {
            name: c.entityName,
            businessType: `ecommerce`,
            websiteUrl: n?.website_url ?? void 0,
            category: ``,
            price: ``,
            hours: null
        } : void 0,
        accountId: l,
        userId: f,
        email: u?.user?.email ?? ``,
        onClose: () => {
            b(null), _(Se), requestAnimationFrame(() => {
                x?.isConnected && x.focus()
            })
        }
    }, C), t[26] = l, t[27] = y, t[28] = p, t[29] = C, t[30] = w, t[31] = n?.website_url, t[32] = h, t[33] = u?.user?.email, t[34] = b, t[35] = _, t[36] = c, t[37] = x, t[38] = f, t[39] = j) : j = t[39];
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
    return _()?.id
}

function Ee(e) {
    "use forget";
    let t = (0, G.c)(29),
        {
            children: n
        } = e,
        r = (0, K.useContext)(U),
        o = p(),
        s;
    t[0] === o ? s = t[1] : (s = () => o?.serverId$(), t[0] = o, t[1] = s);
    let c = a(s),
        l = (0, K.useContext)(H),
        u = l?.status,
        d;
    t[2] === l?.websiteUrl ? d = t[3] : (d = l?.websiteUrl?.trim(), t[2] = l?.websiteUrl, t[3] = d);
    let f = d,
        m = se(c, f, !0, o?.id),
        h = E();
    if (l == null) return n;
    let g = u?.ownership?.available_action === `view_request` && u.ownership.current_request?.kind === `claim` ? u.ownership.current_request : null,
        _;
    t[4] !== g || t[5] !== u ? (_ = u?.ownership_state_enabled && !u.profiles.some(De) && (u.ownership?.available_action === `claim` || g != null), t[4] = g, t[5] = u, t[6] = _) : _ = t[6];
    let v = _,
        y;
    if (t[7] !== n || t[8] !== h || t[9] !== u?.is_verified) {
        let e;
        t[11] !== h || t[12] !== u?.is_verified ? (e = e => (0, K.isValidElement)(e) ? (0, K.cloneElement)(e, {}, e.props.children, u?.is_verified === !0 ? (0, q.jsx)(_e, {
            className: `text-token-text-accent ms-2`,
            showTooltip: !0,
            label: h.formatMessage({
                id: `chatgpt.business_profiles.sidebar.verified.label`,
                defaultMessage: `Verified business`
            }),
            children: (0, q.jsx)(ae, {
                "aria-hidden": !0,
                className: `icon`
            })
        }) : null) : e, t[11] = h, t[12] = u?.is_verified, t[13] = e) : e = t[13], y = K.Children.map(n, e), t[7] = n, t[8] = h, t[9] = u?.is_verified, t[10] = y
    } else y = t[10];
    let x;
    t[14] !== m || t[15] !== f ? (x = f && /^https?:\/\//i.test(f) ? (0, q.jsx)(`div`, {
        className: `my-3`,
        children: (0, q.jsx)(i, {
            as: `button`,
            type: `button`,
            color: `primary`,
            onClick: () => A(f, m),
            children: (0, q.jsx)(b, {
                id: `chatgpt.entity.businessProfile.viewWebsite`,
                defaultMessage: `View website`
            })
        })
    }) : null, t[14] = m, t[15] = f, t[16] = x) : x = t[16];
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
    G = T(), K = t(S()), x(), l(), k(), ve(), le(), ye(), M(), ge(), g(), oe(), re(), ce(), d(), o(), n(), O(), W(), q = y()
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
    J(e) && m.count(f.DEFAULT, X, {
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
    J(e) && m.count(f.DEFAULT, Z, {
        entity_category: e
    })
}

function Fe({
    category: e,
    imageCountBucket: t
}) {
    J(e) && m.count(f.DEFAULT, Q, {
        entity_category: e,
        image_count_bucket: t
    })
}

function Y(e) {
    return e[0]?.metadata?.content_references?.find(e => e.start_idx === 0 && (e.type === `image_group` || typeof e.matched_text == `string` && e.matched_text.startsWith($)))
}
var X, Z, Q, $, Ie = e((() => {
    h(), X = `sidebar.business_hero_image_group.outcome`, Z = `sidebar.business_hero_image_group.first_tile_loaded`, Q = `sidebar.business_hero_image_group.sent_image_count`, $ = `image_group`
}));
export {
    J as a, Fe as c, xe as d, ke as f, be as h, Ie as i, Ee as l, W as m, Ae as n, Pe as o, H as p, Me as r, Ne as s, je as t, Oe as u
};
//# sourceMappingURL=bb871603-f0bk04lydfjwz0x6.js.map
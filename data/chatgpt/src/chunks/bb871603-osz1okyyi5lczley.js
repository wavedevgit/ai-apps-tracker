const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/dd1b3c31-fx3y1z4cyv7w0g4a.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-mdvd4786a87166cc.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-bcbq46iub1p0ca1t.js", "assets/30901919-s8bko9nrkqwv6i4f.js", "assets/c470f5ab-jwd0o7jx9i9say9k.js", "assets/0e5afe53-hxm3yzzjqriayom4.js", "assets/conversation-small-ep6mlz5m.css", "assets/81c0f737-o9k034b3u2o8pyul.js", "assets/25a66342-i6jbqmgghh1uunpj.js", "assets/7339bb63-c49vf6b362brqtpx.js", "assets/fc6672ad-j8lr9trhcdrqso3l.js", "assets/b094db7c-eoo896vkhmmi619w.js", "assets/dc83bb9e-ft21q4atiuqv13ek.js", "assets/bdde876f-j40ghouazhv1kyb8.js", "assets/c2675c8c-oz03twoan08d72ud.js", "assets/82782bc9-b4xbouzwkkyrfqq2.js", "assets/8b34dbc2-lmwubajnld74ksfm.js", "assets/global-modals-dxg9ukpk.css"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    A8 as r,
    CN as i,
    Irt as a,
    Lrt as o,
    N1 as s,
    Rrt as c,
    a2 as l,
    bF as u,
    cst as d,
    eE as f,
    j5 as p,
    lst as m,
    o2 as h,
    q1 as g,
    sst as _,
    ust as v,
    vF as y,
    wN as b
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as x,
    Nn as S,
    Rn as C,
    Vn as w,
    cn as T,
    ln as E,
    wn as D,
    zn as O
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    aIn as k,
    co as A,
    dgn as j,
    fgn as M,
    hpt as ee,
    iIn as N,
    io as te,
    mpt as P,
    oo as ne,
    ro as F,
    so as re
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    $r as I,
    Qr as L
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    a as ie,
    i as R
} from "./09231af0-l43wiceu4nnwg27q.js";
import {
    c as z,
    n as B
} from "./3ed411a3-byuit4zmj8b452ow.js";
import {
    n as V,
    t as H
} from "./3ca39ed9-dt9oh2t8yirkuh3b.js";
import {
    i as ae,
    n as U,
    r as oe,
    t as se
} from "./764f2764-cv0yrd4tk5zct4q4.js";
import {
    a as ce,
    i as le,
    n as ue
} from "./eed70aa1-jbvq7slrp8nwqhnm.js";
import {
    n as de,
    r as fe
} from "./9aad1679-hplb1nd79ppn7q2q.js";
import {
    n as pe,
    t as me
} from "./66f31be8-0je3isqyoja7fizy.js";
var he, ge = e((() => {
    h(), E(), he = l(() => T(() => import(`./dd1b3c31-fx3y1z4cyv7w0g4a.js`).then(e => (e.r(), e.n)).then(e => e.BusinessProfileCanonicalClaim), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])))
}));

function _e(e, t) {
    if (e != null) try {
        return t.safeParse(JSON.parse(e)).data
    } catch {
        return
    }
}
var ve, W, G, ye, be = e((() => {
        ve = D(), ae(), se(), C(), ce(), j(), W = x(), G = M({
            id: `business-profile-policy`,
            icons: {
                delivery: {
                    normal: U,
                    small: U
                },
                returns: {
                    normal: oe,
                    small: oe
                }
            }
        }), ye = e => {
            "use forget";
            let t = (0, ve.c)(15),
                {
                    deliveryPolicy: n,
                    returnsPolicy: r
                } = e,
                i = O(),
                a, o, s, c;
            if (t[0] !== n || t[1] !== i || t[2] !== r) {
                c = Symbol.for(`react.early_return_sentinel`);
                bb0: {
                    let e = _e(n, ue),
                        l;
                    if (t[7] === r ? l = t[8] : (l = _e(r, le), t[7] = r, t[8] = l), a = l, e == null && a == null) {
                        c = null;
                        break bb0
                    }
                    o = `divide-token-border-light mt-5 divide-y`,
                    s = e == null ? null : (0, W.jsxs)(`div`, {
                        className: `flex min-h-12 items-center gap-4 py-3 text-sm`,
                        children: [(0, W.jsx)(G.Delivery, {
                            className: `icon size-6 shrink-0`
                        }), (0, W.jsx)(`span`, {
                            children: e.delivery === `none` ? (0, W.jsx)(S, {
                                id: `chatgpt.entity.businessProfile.noDelivery`,
                                defaultMessage: `Delivery unavailable`
                            }) : e.delivery === `paid` ? (0, W.jsx)(S, {
                                id: `chatgpt.entity.businessProfile.paidDelivery`,
                                defaultMessage: `Paid delivery`
                            }) : e.delivery === `free` && e.scope === `all_orders` ? (0, W.jsx)(S, {
                                id: `chatgpt.entity.businessProfile.freeDelivery`,
                                defaultMessage: `Free delivery on all orders`
                            }) : e.delivery === `free` && e.scope === `minimum_order` ? (0, W.jsx)(S, {
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
            t[9] === a ? l = t[10] : (l = a == null ? null : (0, W.jsxs)(`div`, {
                className: `flex min-h-12 items-center gap-4 py-3 text-sm`,
                children: [(0, W.jsx)(G.Returns, {
                    className: `icon size-6 shrink-0`
                }), (0, W.jsx)(`span`, {
                    children: a.returns === `none` ? (0, W.jsx)(S, {
                        id: `chatgpt.entity.businessProfile.noReturns`,
                        defaultMessage: `Returns not accepted`
                    }) : (0, W.jsx)(S, {
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
            return t[11] !== o || t[12] !== s || t[13] !== l ? (u = (0, W.jsxs)(`div`, {
                className: o,
                children: [s, l]
            }), t[11] = o, t[12] = s, t[13] = l, t[14] = u) : u = t[14], u
        }
    })),
    K, q, J, xe = e((() => {
        K = t(w()), q = (0, K.createContext)(null), J = (0, K.createContext)(void 0)
    }));

function Se(e) {
    "use forget";
    let t = (0, Y.c)(52),
        {
            profile: n,
            category: r,
            children: i
        } = e,
        a = ee(),
        o = (0, X.useContext)(de),
        s = p(De),
        c = (0, X.useSyncExternalStore)(v, _, _),
        l = (0, X.useSyncExternalStore)(v, m, m),
        u = c?.user?.id,
        d = te() && !l && s != null && u != null && (r === `business` || ie(r)),
        f = n?.canonical_id,
        h = n?.profile_id,
        [g, y] = (0, X.useState)(0),
        [x, S] = (0, X.useState)(null),
        [C, w] = (0, X.useState)(null),
        T = JSON.stringify([d, s, u, f, h]),
        [E, D] = (0, X.useState)(null);
    E != null && E.key !== T && D(null), x != null && x !== T && S(null);
    let O;
    t[0] !== d || t[1] !== T || t[2] !== E?.key || t[3] !== h || t[4] !== S || t[5] !== w ? (O = () => {
        !d || E?.key !== T || h == null || (w(document.activeElement instanceof HTMLElement ? document.activeElement : null), S(T))
    }, t[0] = d, t[1] = T, t[2] = E?.key, t[3] = h, t[4] = S, t[5] = w, t[6] = O) : O = t[6];
    let k = b(O),
        A = d && E?.key === T ? E.status : null,
        j;
    t[7] === A ? j = t[8] : (j = A?.ownership_state_enabled && A.is_verified === !0 && !A.profiles.some(Ee) && (A.ownership?.available_action === `dispute` || A.ownership?.available_action === `view_request` && A.ownership.current_request?.kind === `dispute`), t[7] = A, t[8] = j);
    let M = j,
        N = a?.entityName ?? ``,
        P, F;
    t[9] !== N || t[10] !== M || t[11] !== k || t[12] !== h || t[13] !== o ? (P = () => {
        if (!(!M || h == null)) return o?.({
            business: {
                id: h,
                name: N
            },
            onDispute: k
        }), () => o?.(null)
    }, F = [o, M, h, N, k], t[9] = N, t[10] = M, t[11] = k, t[12] = h, t[13] = o, t[14] = P, t[15] = F) : (P = t[14], F = t[15]), (0, X.useEffect)(P, F);
    let I;
    t[16] !== s || t[17] !== f || t[18] !== d || t[19] !== T ? (I = () => {
        if (!d || s == null || f == null) return;
        let e = new AbortController;
        return ne.safePost(`/chat/frontend/v1/business-profiles/resolve`, {
            additionalHeaders: {
                ...re,
                "ChatGPT-Account-ID": s
            },
            signal: e.signal,
            disableAutomaticRetry: !0,
            preserveAccountIdOnRetry: !0,
            requestBody: {
                provider: `canonical-business-profile`,
                provider_business_id: f
            }
        }).then(t => {
            e.signal.aborted || D({
                key: T,
                status: t
            })
        }).catch(Te), () => {
            e.abort()
        }
    }, t[16] = s, t[17] = f, t[18] = d, t[19] = T, t[20] = I) : I = t[20];
    let L;
    t[21] !== s || t[22] !== f || t[23] !== d || t[24] !== T || t[25] !== g ? (L = [d, s, f, T, g], t[21] = s, t[22] = f, t[23] = d, t[24] = T, t[25] = g, t[26] = L) : L = t[26], (0, X.useEffect)(I, L);
    let R;
    t[27] !== n || t[28] !== A ? (R = n == null ? null : {
        status: A,
        profile: n
    }, t[27] = n, t[28] = A, t[29] = R) : R = t[29];
    let z = d && E?.key === T && h != null ? k : void 0,
        B;
    t[30] !== i || t[31] !== z ? (B = (0, Z.jsx)(J.Provider, {
        value: z,
        children: i
    }), t[30] = i, t[31] = z, t[32] = B) : B = t[32];
    let V;
    t[33] !== s || t[34] !== x || t[35] !== d || t[36] !== T || t[37] !== E || t[38] !== n?.website_url || t[39] !== h || t[40] !== c?.user?.email || t[41] !== S || t[42] !== y || t[43] !== a || t[44] !== A?.ownership?.available_action || t[45] !== C || t[46] !== u ? (V = d && x === T && h != null && s != null && u != null && (0, Z.jsx)(he, {
        profileId: h,
        showOnboarding: !0,
        initialFlowType: A?.ownership?.available_action === `dispute` ? `dispute` : `claim`,
        initialBusiness: E?.key === T && (E.status.ownership?.available_action === `claim` || E.status.ownership?.available_action === `dispute`) && E.status.ownership.current_request == null && !E.status.profiles.some(we) && a?.entityName ? {
            name: a.entityName,
            businessType: `ecommerce`,
            websiteUrl: n?.website_url ?? void 0,
            category: ``,
            price: ``,
            hours: null
        } : void 0,
        accountId: s,
        userId: u,
        email: c?.user?.email ?? ``,
        onClose: () => {
            S(null), y(Ce), requestAnimationFrame(() => {
                C?.isConnected && C.focus()
            })
        }
    }, T), t[33] = s, t[34] = x, t[35] = d, t[36] = T, t[37] = E, t[38] = n?.website_url, t[39] = h, t[40] = c?.user?.email, t[41] = S, t[42] = y, t[43] = a, t[44] = A?.ownership?.available_action, t[45] = C, t[46] = u, t[47] = V) : V = t[47];
    let H;
    return t[48] !== V || t[49] !== R || t[50] !== B ? (H = (0, Z.jsxs)(q.Provider, {
        value: R,
        children: [B, V]
    }), t[48] = V, t[49] = R, t[50] = B, t[51] = H) : H = t[51], H
}

function Ce(e) {
    return e + 1
}

function we(e) {
    return e.allowed_actions.includes(`manage`)
}

function Te() {}

function Ee(e) {
    return e.allowed_actions.includes(`manage`)
}

function De() {
    return s()?.id
}

function Oe(e) {
    "use forget";
    let t = (0, Y.c)(28),
        {
            name: r
        } = e,
        i = (0, X.useContext)(J),
        a = u(),
        o;
    t[0] === a ? o = t[1] : (o = () => a?.serverId$(), t[0] = a, t[1] = o);
    let s = p(o),
        c = (0, X.useContext)(q),
        l = c?.profile,
        d = c?.status,
        f;
    t[2] === l?.website_url ? f = t[3] : (f = l?.website_url?.trim(), t[2] = l?.website_url, t[3] = f);
    let m = f,
        h = z(s, m, !0, a?.id),
        g = O();
    if (l == null) return null;
    let _ = d?.ownership?.available_action === `view_request` && d.ownership.current_request?.kind === `claim` ? d.ownership.current_request : null,
        v;
    t[4] !== _ || t[5] !== d ? (v = d?.ownership_state_enabled && !d.profiles.some(ke) && (d.ownership?.available_action === `claim` || _ != null), t[4] = _, t[5] = d, t[6] = v) : v = t[6];
    let y = v,
        b = l.display_name ?? r,
        x;
    t[7] !== g || t[8] !== d?.is_verified ? (x = d?.is_verified === !0 ? (0, Z.jsx)(me, {
        className: `text-token-text-accent ms-2`,
        showTooltip: !0,
        label: g.formatMessage({
            id: `chatgpt.business_profiles.sidebar.verified.label`,
            defaultMessage: `Verified business`
        }),
        children: (0, Z.jsx)(L, {
            "aria-hidden": !0,
            className: `icon`
        })
    }) : null, t[7] = g, t[8] = d?.is_verified, t[9] = x) : x = t[9];
    let C;
    t[10] !== b || t[11] !== x ? (C = (0, Z.jsxs)(`h2`, {
        className: `text-title-2-emphasized! mb-0!`,
        children: [b, x]
    }), t[10] = b, t[11] = x, t[12] = C) : C = t[12];
    let w;
    t[13] !== h || t[14] !== m ? (w = m && /^https?:\/\//i.test(m) ? (0, Z.jsx)(`div`, {
        className: `my-3`,
        children: (0, Z.jsx)(n, {
            as: `button`,
            type: `button`,
            color: `primary`,
            onClick: () => k(m, h),
            children: (0, Z.jsx)(S, {
                id: `chatgpt.entity.businessProfile.viewWebsite`,
                defaultMessage: `View website`
            })
        })
    }) : null, t[13] = h, t[14] = m, t[15] = w) : w = t[15];
    let T;
    t[16] !== l.delivery_policy || t[17] !== l.returns_policy ? (T = (0, Z.jsx)(ye, {
        deliveryPolicy: l.delivery_policy,
        returnsPolicy: l.returns_policy
    }), t[16] = l.delivery_policy, t[17] = l.returns_policy, t[18] = T) : T = t[18];
    let E;
    t[19] !== y || t[20] !== i || t[21] !== _ ? (E = y && (0, Z.jsx)(H, {
        state: _ == null ? `claimable` : `pending_claim`,
        requestStatus: _?.status,
        onAction: i
    }), t[19] = y, t[20] = i, t[21] = _, t[22] = E) : E = t[22];
    let D;
    return t[23] !== C || t[24] !== w || t[25] !== T || t[26] !== E ? (D = (0, Z.jsxs)(Z.Fragment, {
        children: [C, w, T, E]
    }), t[23] = C, t[24] = w, t[25] = T, t[26] = E, t[27] = D) : D = t[27], D
}

function ke(e) {
    return e.allowed_actions.includes(`manage`)
}
var Y, X, Z, Ae = e((() => {
    Y = D(), X = t(w()), C(), f(), A(), ge(), V(), be(), fe(), F(), pe(), y(), I(), N(), B(), r(), g(), i(), d(), R(), P(), xe(), Z = x()
}));

function Q(e) {
    return e === `hotel` || e === `local_business` || e === `restaurant`
}

function je(e) {
    let t = $(e);
    return t == null ? `missing_citation` : t.type === `hidden` ? `hidden_citation` : t.type === `invalid` ? `invalid_citation` : t.type === `image_group` ? t.layout === `full_width` ? t.images.length === 0 ? `empty_cards` : t.images.some(e => e.image_result != null) ? `resolved` : `unresolved_cards` : `unexpected_layout` : `missing_citation`
}

function Me(e) {
    let t = $(e);
    if (t?.type !== `hidden`) return;
    let n = `hidden_reason` in t ? t.hidden_reason : void 0;
    return n === `age_gated` || n === `insufficient_images` ? n : n == null ? `unknown` : `other`
}

function Ne(e) {
    let t = $(e);
    if (t?.type !== `image_group` || t.layout !== `full_width`) return `0`;
    let n = t.images.filter(e => e.image_result != null).length;
    return n <= 0 ? `0` : n === 1 ? `1` : n === 2 ? `2` : n === 3 ? `3` : `4_plus`
}

function Pe({
    category: e,
    outcome: t,
    userCountry: n,
    hiddenReason: r
}) {
    Q(e) && o.count(c.DEFAULT, Le, {
        entity_category: e,
        outcome: t,
        user_country: n,
        ...r == null ? {} : {
            hidden_reason: r
        }
    })
}

function Fe({
    category: e
}) {
    Q(e) && o.count(c.DEFAULT, Re, {
        entity_category: e
    })
}

function Ie({
    category: e,
    imageCountBucket: t
}) {
    Q(e) && o.count(c.DEFAULT, ze, {
        entity_category: e,
        image_count_bucket: t
    })
}

function $(e) {
    return e[0]?.metadata?.content_references?.find(e => e.start_idx === 0 && (e.type === `image_group` || typeof e.matched_text == `string` && e.matched_text.startsWith(Be)))
}
var Le, Re, ze, Be, Ve = e((() => {
    a(), Le = `sidebar.business_hero_image_group.outcome`, Re = `sidebar.business_hero_image_group.first_tile_loaded`, ze = `sidebar.business_hero_image_group.sent_image_count`, Be = `image_group`
}));
export {
    Q as a, Ie as c, Ae as d, Ve as i, Oe as l, je as n, Fe as o, Ne as r, Pe as s, Me as t, Se as u
};
//# sourceMappingURL=bb871603-osz1okyyi5lczley.js.map
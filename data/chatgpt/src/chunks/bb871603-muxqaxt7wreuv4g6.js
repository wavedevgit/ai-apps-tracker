const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/dd1b3c31-jhz428xytplajkbi.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-t80q9ew944ej0mgk.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-ocicxxw6jegn4vux.js", "assets/30901919-r9pahacmzqudnt4f.js", "assets/c470f5ab-py8gip6x11wq9s88.js", "assets/0e5afe53-bfccq9og5d2mon04.js", "assets/conversation-small-ht8gwtl7.css", "assets/81c0f737-cim8podzhix2ah2n.js", "assets/7339bb63-lxxuwzlw06qgwi4g.js", "assets/fc6672ad-j8lr9trhcdrqso3l.js", "assets/b094db7c-eoo896vkhmmi619w.js", "assets/dc83bb9e-lso08fexwed2jxig.js", "assets/bdde876f-m9fokg6690xenp1y.js", "assets/c2675c8c-p3x4d0bnf7e77o1n.js", "assets/82782bc9-dyzlhaxotei12n1t.js", "assets/8b34dbc2-egl8cz04n8nmlktg.js", "assets/global-modals-dxg9ukpk.css"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    $ot as r,
    CN as i,
    Drt as a,
    Ert as o,
    N1 as s,
    Ort as c,
    Qot as l,
    Zot as u,
    a2 as d,
    bF as f,
    eE as p,
    est as m,
    k8 as h,
    o2 as g,
    q1 as _,
    q5 as v,
    vF as y,
    wN as b
} from "./4813494d-t80q9ew944ej0mgk.js";
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
    DFn as k,
    EFn as A,
    Hhn as j,
    Uhn as M,
    _pt as ee,
    co as N,
    gpt as P,
    io as te,
    oo as ne,
    ro as F,
    so as re
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    ei as I,
    ti as L
} from "./30901919-r9pahacmzqudnt4f.js";
import {
    c as R,
    n as z
} from "./3ed411a3-oh55x7qvgy2qoxy6.js";
import {
    n as B,
    t as V
} from "./3ca39ed9-bpyyzudwp8p10o6d.js";
import {
    i as H,
    n as U,
    r as ie,
    t as ae
} from "./764f2764-k0ic8av6osd7i363.js";
import {
    a as oe,
    i as se,
    n as ce
} from "./eed70aa1-csu20tlnlsx3y54d.js";
import {
    n as le,
    r as ue
} from "./9aad1679-hplb1nd79ppn7q2q.js";
import {
    n as de,
    t as fe
} from "./66f31be8-o8pbi7ngob8a9siv.js";
var pe, me = e((() => {
    g(), E(), pe = d(() => T(() => import(`./dd1b3c31-jhz428xytplajkbi.js`).then(e => (e.r(), e.n)).then(e => e.BusinessProfileCanonicalClaim), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])))
}));

function he(e, t) {
    if (e != null) try {
        return t.safeParse(JSON.parse(e)).data
    } catch {
        return
    }
}
var ge, W, G, _e, ve = e((() => {
    ge = D(), H(), ae(), C(), oe(), j(), W = x(), G = M({
        id: `business-profile-policy`,
        icons: {
            delivery: {
                normal: U,
                small: U
            },
            returns: {
                normal: ie,
                small: ie
            }
        }
    }), _e = e => {
        "use forget";
        let t = (0, ge.c)(15),
            {
                deliveryPolicy: n,
                returnsPolicy: r
            } = e,
            i = O(),
            a, o, s, c;
        if (t[0] !== n || t[1] !== i || t[2] !== r) {
            c = Symbol.for(`react.early_return_sentinel`);
            bb0: {
                let e = he(n, ce),
                    l;
                if (t[7] === r ? l = t[8] : (l = he(r, se), t[7] = r, t[8] = l), a = l, e == null && a == null) {
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
}));

function ye() {
    return e => {
        let t = e.children.find(e => e.type === `element` && e.tagName === `h2`);
        t?.type === `element` && (t.properties.dataBusinessProfileHeading = !0)
    }
}
var K, q, J, be = e((() => {
    K = t(w()), q = (0, K.createContext)(null), J = (0, K.createContext)(void 0)
}));

function xe(e) {
    "use forget";
    let t = (0, Y.c)(52),
        {
            profile: n,
            category: i,
            children: a
        } = e,
        o = ee(),
        s = (0, X.useContext)(le),
        c = v(Ee),
        l = (0, X.useSyncExternalStore)(m, u, u),
        d = (0, X.useSyncExternalStore)(m, r, r),
        f = l?.user?.id,
        p = te() && !d && c != null && f != null && [`business`, `brand`, `company`, `organization`].includes(i ?? ``),
        h = n?.canonical_id,
        g = n?.profile_id,
        [_, y] = (0, X.useState)(0),
        [x, S] = (0, X.useState)(null),
        [C, w] = (0, X.useState)(null),
        T = JSON.stringify([p, c, f, h, g]),
        [E, D] = (0, X.useState)(null);
    E != null && E.key !== T && D(null), x != null && x !== T && S(null);
    let O;
    t[0] !== p || t[1] !== T || t[2] !== E?.key || t[3] !== g || t[4] !== S || t[5] !== w ? (O = () => {
        !p || E?.key !== T || g == null || (w(document.activeElement instanceof HTMLElement ? document.activeElement : null), S(T))
    }, t[0] = p, t[1] = T, t[2] = E?.key, t[3] = g, t[4] = S, t[5] = w, t[6] = O) : O = t[6];
    let k = b(O),
        A = p && E?.key === T ? E.status : null,
        j;
    t[7] === A ? j = t[8] : (j = A?.ownership_state_enabled && A.is_verified === !0 && !A.profiles.some(Te) && (A.ownership?.available_action === `dispute` || A.ownership?.available_action === `view_request` && A.ownership.current_request?.kind === `dispute`), t[7] = A, t[8] = j);
    let M = j,
        N = o?.entityName ?? ``,
        P, F;
    t[9] !== N || t[10] !== M || t[11] !== k || t[12] !== g || t[13] !== s ? (P = () => {
        if (!(!M || g == null)) return s?.({
            business: {
                id: g,
                name: N
            },
            onDispute: k
        }), () => s?.(null)
    }, F = [s, M, g, N, k], t[9] = N, t[10] = M, t[11] = k, t[12] = g, t[13] = s, t[14] = P, t[15] = F) : (P = t[14], F = t[15]), (0, X.useEffect)(P, F);
    let I;
    t[16] !== c || t[17] !== h || t[18] !== p || t[19] !== T ? (I = () => {
        if (!p || c == null || h == null) return;
        let e = new AbortController;
        return ne.safePost(`/chat/frontend/v1/business-profiles/resolve`, {
            additionalHeaders: {
                ...re,
                "ChatGPT-Account-ID": c
            },
            signal: e.signal,
            disableAutomaticRetry: !0,
            preserveAccountIdOnRetry: !0,
            requestBody: {
                provider: `canonical-business-profile`,
                provider_business_id: h
            }
        }).then(t => {
            e.signal.aborted || D({
                key: T,
                status: t
            })
        }).catch(we), () => {
            e.abort()
        }
    }, t[16] = c, t[17] = h, t[18] = p, t[19] = T, t[20] = I) : I = t[20];
    let L;
    t[21] !== c || t[22] !== h || t[23] !== p || t[24] !== T || t[25] !== _ ? (L = [p, c, h, T, _], t[21] = c, t[22] = h, t[23] = p, t[24] = T, t[25] = _, t[26] = L) : L = t[26], (0, X.useEffect)(I, L);
    let R;
    t[27] !== n || t[28] !== A ? (R = n == null ? null : {
        status: A,
        websiteUrl: n.website_url ?? null
    }, t[27] = n, t[28] = A, t[29] = R) : R = t[29];
    let z = p && E?.key === T && g != null ? k : void 0,
        B;
    t[30] !== a || t[31] !== z ? (B = (0, Z.jsx)(J.Provider, {
        value: z,
        children: a
    }), t[30] = a, t[31] = z, t[32] = B) : B = t[32];
    let V;
    t[33] !== c || t[34] !== x || t[35] !== p || t[36] !== T || t[37] !== E || t[38] !== n?.website_url || t[39] !== g || t[40] !== l?.user?.email || t[41] !== S || t[42] !== y || t[43] !== o || t[44] !== A?.ownership?.available_action || t[45] !== C || t[46] !== f ? (V = p && x === T && g != null && c != null && f != null && (0, Z.jsx)(pe, {
        profileId: g,
        showOnboarding: !0,
        initialFlowType: A?.ownership?.available_action === `dispute` ? `dispute` : `claim`,
        initialBusiness: E?.key === T && (E.status.ownership?.available_action === `claim` || E.status.ownership?.available_action === `dispute`) && E.status.ownership.current_request == null && !E.status.profiles.some(Ce) && o?.entityName ? {
            name: o.entityName,
            businessType: `ecommerce`,
            websiteUrl: n?.website_url ?? void 0,
            category: ``,
            price: ``,
            hours: null
        } : void 0,
        accountId: c,
        userId: f,
        email: l?.user?.email ?? ``,
        onClose: () => {
            S(null), y(Se), requestAnimationFrame(() => {
                C?.isConnected && C.focus()
            })
        }
    }, T), t[33] = c, t[34] = x, t[35] = p, t[36] = T, t[37] = E, t[38] = n?.website_url, t[39] = g, t[40] = l?.user?.email, t[41] = S, t[42] = y, t[43] = o, t[44] = A?.ownership?.available_action, t[45] = C, t[46] = f, t[47] = V) : V = t[47];
    let H;
    return t[48] !== V || t[49] !== R || t[50] !== B ? (H = (0, Z.jsxs)(q.Provider, {
        value: R,
        children: [B, V]
    }), t[48] = V, t[49] = R, t[50] = B, t[51] = H) : H = t[51], H
}

function Se(e) {
    return e + 1
}

function Ce(e) {
    return e.allowed_actions.includes(`manage`)
}

function we() {}

function Te(e) {
    return e.allowed_actions.includes(`manage`)
}

function Ee() {
    return s()?.id
}

function De(e) {
    "use forget";
    let t = (0, Y.c)(29),
        {
            children: r
        } = e,
        i = (0, X.useContext)(J),
        a = f(),
        o;
    t[0] === a ? o = t[1] : (o = () => a?.serverId$(), t[0] = a, t[1] = o);
    let s = v(o),
        c = (0, X.useContext)(q),
        l = c?.status,
        u;
    t[2] === c?.websiteUrl ? u = t[3] : (u = c?.websiteUrl?.trim(), t[2] = c?.websiteUrl, t[3] = u);
    let d = u,
        p = R(s, d, !0, a?.id),
        m = O();
    if (c == null) return r;
    let h = l?.ownership?.available_action === `view_request` && l.ownership.current_request?.kind === `claim` ? l.ownership.current_request : null,
        g;
    t[4] !== h || t[5] !== l ? (g = l?.ownership_state_enabled && !l.profiles.some(Oe) && (l.ownership?.available_action === `claim` || h != null), t[4] = h, t[5] = l, t[6] = g) : g = t[6];
    let _ = g,
        y;
    if (t[7] !== r || t[8] !== m || t[9] !== l?.is_verified) {
        let e;
        t[11] !== m || t[12] !== l?.is_verified ? (e = e => (0, X.isValidElement)(e) ? (0, X.cloneElement)(e, {}, e.props.children, l?.is_verified === !0 ? (0, Z.jsx)(fe, {
            className: `text-token-text-accent ms-2`,
            showTooltip: !0,
            label: m.formatMessage({
                id: `chatgpt.business_profiles.sidebar.verified.label`,
                defaultMessage: `Verified business`
            }),
            children: (0, Z.jsx)(I, {
                "aria-hidden": !0,
                className: `icon`
            })
        }) : null) : e, t[11] = m, t[12] = l?.is_verified, t[13] = e) : e = t[13], y = X.Children.map(r, e), t[7] = r, t[8] = m, t[9] = l?.is_verified, t[10] = y
    } else y = t[10];
    let b;
    t[14] !== p || t[15] !== d ? (b = d && /^https?:\/\//i.test(d) ? (0, Z.jsx)(`div`, {
        className: `my-3`,
        children: (0, Z.jsx)(n, {
            as: `button`,
            type: `button`,
            color: `primary`,
            onClick: () => k(d, p),
            children: (0, Z.jsx)(S, {
                id: `chatgpt.entity.businessProfile.viewWebsite`,
                defaultMessage: `View website`
            })
        })
    }) : null, t[14] = p, t[15] = d, t[16] = b) : b = t[16];
    let x = l?.delivery_policy,
        C = l?.returns_policy,
        w;
    t[17] !== x || t[18] !== C ? (w = (0, Z.jsx)(_e, {
        deliveryPolicy: x,
        returnsPolicy: C
    }), t[17] = x, t[18] = C, t[19] = w) : w = t[19];
    let T;
    t[20] !== _ || t[21] !== i || t[22] !== h ? (T = _ && (0, Z.jsx)(V, {
        state: h == null ? `claimable` : `pending_claim`,
        requestStatus: h?.status,
        onAction: i
    }), t[20] = _, t[21] = i, t[22] = h, t[23] = T) : T = t[23];
    let E;
    return t[24] !== y || t[25] !== b || t[26] !== w || t[27] !== T ? (E = (0, Z.jsxs)(Z.Fragment, {
        children: [y, b, w, T]
    }), t[24] = y, t[25] = b, t[26] = w, t[27] = T, t[28] = E) : E = t[28], E
}

function Oe(e) {
    return e.allowed_actions.includes(`manage`)
}

function ke(e) {
    "use forget";
    let t = (0, Y.c)(3),
        {
            enabled: n,
            children: r
        } = e,
        i = (0, X.useContext)(q),
        a = n ? i : null,
        o;
    return t[0] !== r || t[1] !== a ? (o = (0, Z.jsx)(q.Provider, {
        value: a,
        children: r
    }), t[0] = r, t[1] = a, t[2] = o) : o = t[2], o
}
var Y, X, Z, Ae = e((() => {
    Y = D(), X = t(w()), C(), p(), N(), me(), B(), ve(), ue(), F(), de(), y(), L(), A(), z(), h(), _(), i(), l(), P(), be(), Z = x()
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
    Q(e) && a.count(c.DEFAULT, Le, {
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
    Q(e) && a.count(c.DEFAULT, Re, {
        entity_category: e
    })
}

function Ie({
    category: e,
    imageCountBucket: t
}) {
    Q(e) && a.count(c.DEFAULT, ze, {
        entity_category: e,
        image_count_bucket: t
    })
}

function $(e) {
    return e[0]?.metadata?.content_references?.find(e => e.start_idx === 0 && (e.type === `image_group` || typeof e.matched_text == `string` && e.matched_text.startsWith(Be)))
}
var Le, Re, ze, Be, Ve = e((() => {
    o(), Le = `sidebar.business_hero_image_group.outcome`, Re = `sidebar.business_hero_image_group.first_tile_loaded`, ze = `sidebar.business_hero_image_group.sent_image_count`, Be = `image_group`
}));
export {
    Q as a, Ie as c, xe as d, Ae as f, ye as h, Ve as i, De as l, be as m, je as n, Fe as o, q as p, Ne as r, Pe as s, Me as t, ke as u
};
//# sourceMappingURL=bb871603-muxqaxt7wreuv4g6.js.map
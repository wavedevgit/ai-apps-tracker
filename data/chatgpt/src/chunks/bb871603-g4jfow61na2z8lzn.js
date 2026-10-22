const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/dd1b3c31-oe4lgra4gm61pwmy.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-qsuygr73qjc6rh65.js", "assets/2340486e-komxp8tzs51ny4jj.js", "assets/root-lelxp0l2.css", "assets/conversation-small-cawdu7il3ha6y70c.js", "assets/30901919-jory365vq6ym5crx.js", "assets/c470f5ab-in0lllrdrzeo67gs.js", "assets/0e5afe53-f9gmgfmgrr83ziw3.js", "assets/conversation-small-czggvj2v.css", "assets/81c0f737-o0s6bdsvyrncxo3u.js", "assets/7339bb63-0alvu0447h09qm0m.js", "assets/fc6672ad-lh2peyc0p9patqpk.js", "assets/b094db7c-h7qj4ie4hdy6km5r.js", "assets/dc83bb9e-dws00cp8ur7wlwuo.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Fot as n,
    I1 as r,
    J0 as i,
    JT as a,
    M5 as o,
    Mot as s,
    Not as c,
    Pot as l,
    S1 as u,
    Y0 as d,
    crt as f,
    fF as p,
    lrt as m,
    m8 as h,
    mF as g,
    qT as _,
    srt as v
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as y,
    Hn as b,
    Pn as x,
    Tn as S,
    Vn as C,
    ln as w,
    un as T,
    zn as E
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    Ehn as D,
    Thn as O,
    co as k,
    dFn as A,
    fFn as j,
    io as ee,
    oo as te,
    ro as M,
    so as ne
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    ei as N,
    ti as P
} from "./30901919-jory365vq6ym5crx.js";
import {
    c as re,
    n as ie
} from "./3ed411a3-e9fz4l2rt3pjugcf.js";
import {
    n as ae,
    t as oe
} from "./3ca39ed9-dgk9mofs9j6flw99.js";
import {
    i as se,
    n as F,
    r as I,
    t as ce
} from "./764f2764-myz0glqkpz10m7ww.js";
import {
    a as le,
    i as ue,
    n as de
} from "./eed70aa1-nkxaphfmj18mkn4i.js";
import {
    n as fe,
    t as pe
} from "./66f31be8-he1ql6x7t8udptq9.js";
var L, me = e((() => {
    d(), T(), L = i(() => w(() => import(`./dd1b3c31-oe4lgra4gm61pwmy.js`).then(e => (e.r(), e.n)).then(e => e.BusinessProfileCanonicalClaim), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14])))
}));

function R(e, t) {
    if (e != null) try {
        return t.safeParse(JSON.parse(e)).data
    } catch {
        return
    }
}
var z, B, V, H, he = e((() => {
    z = S(), se(), ce(), E(), le(), O(), B = C(), V = D({
        id: `business-profile-policy`,
        icons: {
            delivery: {
                normal: F,
                small: F
            },
            returns: {
                normal: I,
                small: I
            }
        }
    }), H = e => {
        "use forget";
        let t = (0, z.c)(15),
            {
                deliveryPolicy: n,
                returnsPolicy: r
            } = e,
            i = y(),
            a, o, s, c;
        if (t[0] !== n || t[1] !== i || t[2] !== r) {
            c = Symbol.for(`react.early_return_sentinel`);
            bb0: {
                let e = R(n, de),
                    l;
                if (t[7] === r ? l = t[8] : (l = R(r, ue), t[7] = r, t[8] = l), a = l, e == null && a == null) {
                    c = null;
                    break bb0
                }
                o = `divide-token-border-light mt-5 divide-y`,
                s = e == null ? null : (0, B.jsxs)(`div`, {
                    className: `flex min-h-12 items-center gap-4 py-3 text-sm`,
                    children: [(0, B.jsx)(V.Delivery, {
                        className: `icon size-6 shrink-0`
                    }), (0, B.jsx)(`span`, {
                        children: e.delivery === `none` ? (0, B.jsx)(x, {
                            id: `chatgpt.entity.businessProfile.noDelivery`,
                            defaultMessage: `Delivery unavailable`
                        }) : e.delivery === `paid` ? (0, B.jsx)(x, {
                            id: `chatgpt.entity.businessProfile.paidDelivery`,
                            defaultMessage: `Paid delivery`
                        }) : e.delivery === `free` && e.scope === `all_orders` ? (0, B.jsx)(x, {
                            id: `chatgpt.entity.businessProfile.freeDelivery`,
                            defaultMessage: `Free delivery on all orders`
                        }) : e.delivery === `free` && e.scope === `minimum_order` ? (0, B.jsx)(x, {
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
        t[9] === a ? l = t[10] : (l = a == null ? null : (0, B.jsxs)(`div`, {
            className: `flex min-h-12 items-center gap-4 py-3 text-sm`,
            children: [(0, B.jsx)(V.Returns, {
                className: `icon size-6 shrink-0`
            }), (0, B.jsx)(`span`, {
                children: a.returns === `none` ? (0, B.jsx)(x, {
                    id: `chatgpt.entity.businessProfile.noReturns`,
                    defaultMessage: `Returns not accepted`
                }) : (0, B.jsx)(x, {
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
        return t[11] !== o || t[12] !== s || t[13] !== l ? (u = (0, B.jsxs)(`div`, {
            className: o,
            children: [s, l]
        }), t[11] = o, t[12] = s, t[13] = l, t[14] = u) : u = t[14], u
    }
}));

function ge() {
    return e => {
        let t = e.children.find(e => e.type === `element` && e.tagName === `h2`);
        t?.type === `element` && (t.properties.dataBusinessProfileHeading = !0)
    }
}
var U, W, G, K = e((() => {
    U = t(b()), W = (0, U.createContext)(null), G = (0, U.createContext)(void 0)
}));

function _e(e) {
    "use forget";
    let t = (0, q.c)(48),
        {
            profile: r,
            category: i,
            children: a
        } = e,
        c = o(be),
        u = (0, J.useSyncExternalStore)(n, s, s),
        d = (0, J.useSyncExternalStore)(n, l, l),
        f = u?.user?.id,
        p = ee() && !d && c != null && f != null && [`business`, `brand`, `company`, `organization`].includes(i ?? ``),
        m = r?.canonical_id,
        h = r?.revision,
        g = r?.content_sha256,
        _ = r?.eligibility_expires_at,
        v = r?.profile_id,
        [y, b] = (0, J.useState)(0),
        [x, S] = (0, J.useState)(null),
        [C, w] = (0, J.useState)(null),
        T = JSON.stringify([p, c, f, m, h, g, _, v]),
        [E, D] = (0, J.useState)(null);
    E != null && E.key !== T && D(null), x != null && x !== T && S(null);
    let O;
    t[0] !== c || t[1] !== m || t[2] !== p || t[3] !== _ || t[4] !== g || t[5] !== T || t[6] !== h ? (O = () => {
        if (!p || c == null || m == null || h == null || g == null || _ == null || _ / 1e3 <= Date.now()) return;
        let e = new AbortController,
            t, n = () => {
                let r = _ / 1e3 - Date.now();
                r <= 0 ? (e.abort(), D(null)) : t = setTimeout(n, Math.min(r, 2147483647))
            };
        return n(), te.safePost(`/chat/frontend/v1/business-profiles/resolve`, {
            additionalHeaders: {
                ...ne,
                "ChatGPT-Account-ID": c
            },
            signal: e.signal,
            disableAutomaticRetry: !0,
            preserveAccountIdOnRetry: !0,
            requestBody: {
                provider: `canonical-business-profile`,
                provider_business_id: m,
                canonical_revision: h,
                canonical_content_sha256: g
            }
        }).then(t => {
            !e.signal.aborted && Date.now() < _ / 1e3 && D({
                key: T,
                status: t
            })
        }).catch(ye), () => {
            e.abort(), clearTimeout(t)
        }
    }, t[0] = c, t[1] = m, t[2] = p, t[3] = _, t[4] = g, t[5] = T, t[6] = h, t[7] = O) : O = t[7];
    let k;
    t[8] !== c || t[9] !== m || t[10] !== p || t[11] !== _ || t[12] !== g || t[13] !== T || t[14] !== y || t[15] !== h ? (k = [p, c, m, h, g, _, T, y], t[8] = c, t[9] = m, t[10] = p, t[11] = _, t[12] = g, t[13] = T, t[14] = y, t[15] = h, t[16] = k) : k = t[16], (0, J.useEffect)(O, k);
    let A;
    t[17] !== p || t[18] !== T || t[19] !== E || t[20] !== r ? (A = r == null ? null : {
        status: p && E?.key === T ? E.status : null,
        websiteUrl: r.website_url ?? null
    }, t[17] = p, t[18] = T, t[19] = E, t[20] = r, t[21] = A) : A = t[21];
    let j;
    t[22] !== p || t[23] !== _ || t[24] !== T || t[25] !== E?.key || t[26] !== v || t[27] !== S || t[28] !== w ? (j = p && E?.key === T && v != null ? () => {
        _ == null || _ / 1e3 <= Date.now() || (w(document.activeElement instanceof HTMLElement ? document.activeElement : null), S(T))
    } : void 0, t[22] = p, t[23] = _, t[24] = T, t[25] = E?.key, t[26] = v, t[27] = S, t[28] = w, t[29] = j) : j = t[29];
    let M;
    t[30] !== a || t[31] !== j ? (M = (0, Y.jsx)(G.Provider, {
        value: j,
        children: a
    }), t[30] = a, t[31] = j, t[32] = M) : M = t[32];
    let N;
    t[33] !== c || t[34] !== x || t[35] !== p || t[36] !== T || t[37] !== v || t[38] !== u?.user?.email || t[39] !== S || t[40] !== b || t[41] !== C || t[42] !== f ? (N = p && x === T && v != null && c != null && f != null && (0, Y.jsx)(L, {
        profileId: v,
        accountId: c,
        userId: f,
        email: u?.user?.email ?? ``,
        onClose: () => {
            S(null), b(ve), requestAnimationFrame(() => {
                C?.isConnected && C.focus()
            })
        }
    }, T), t[33] = c, t[34] = x, t[35] = p, t[36] = T, t[37] = v, t[38] = u?.user?.email, t[39] = S, t[40] = b, t[41] = C, t[42] = f, t[43] = N) : N = t[43];
    let P;
    return t[44] !== A || t[45] !== M || t[46] !== N ? (P = (0, Y.jsxs)(W.Provider, {
        value: A,
        children: [M, N]
    }), t[44] = A, t[45] = M, t[46] = N, t[47] = P) : P = t[47], P
}

function ve(e) {
    return e + 1
}

function ye() {}

function be() {
    return u()?.id
}

function xe(e) {
    "use forget";
    let t = (0, q.c)(29),
        {
            children: n
        } = e,
        r = (0, J.useContext)(G),
        i = g(),
        a;
    t[0] === i ? a = t[1] : (a = () => i?.serverId$(), t[0] = i, t[1] = a);
    let s = o(a),
        c = (0, J.useContext)(W),
        l = c?.status,
        u;
    t[2] === c?.websiteUrl ? u = t[3] : (u = c?.websiteUrl?.trim(), t[2] = c?.websiteUrl, t[3] = u);
    let d = u,
        f = re(s, d, !0, i?.id),
        p = y();
    if (c == null) return n;
    let m = l?.ownership?.available_action === `view_request` && l.ownership.current_request?.kind === `claim` ? l.ownership.current_request : null,
        h;
    t[4] !== m || t[5] !== l ? (h = l?.ownership_state_enabled && !l.profiles.some(Se) && (l.ownership?.available_action === `claim` || m != null), t[4] = m, t[5] = l, t[6] = h) : h = t[6];
    let v = h,
        b;
    if (t[7] !== n || t[8] !== p || t[9] !== l?.is_verified) {
        let e;
        t[11] !== p || t[12] !== l?.is_verified ? (e = e => (0, J.isValidElement)(e) ? (0, J.cloneElement)(e, {}, e.props.children, l?.is_verified === !0 ? (0, Y.jsx)(pe, {
            className: `text-token-text-accent ms-2`,
            showTooltip: !0,
            label: p.formatMessage({
                id: `chatgpt.business_profiles.sidebar.verified.label`,
                defaultMessage: `Verified business`
            }),
            children: (0, Y.jsx)(N, {
                "aria-hidden": !0,
                className: `icon`
            })
        }) : null) : e, t[11] = p, t[12] = l?.is_verified, t[13] = e) : e = t[13], b = J.Children.map(n, e), t[7] = n, t[8] = p, t[9] = l?.is_verified, t[10] = b
    } else b = t[10];
    let S;
    t[14] !== f || t[15] !== d ? (S = d && /^https?:\/\//i.test(d) ? (0, Y.jsx)(`div`, {
        className: `my-3`,
        children: (0, Y.jsx)(_, {
            as: `button`,
            type: `button`,
            color: `primary`,
            onClick: () => j(d, f),
            children: (0, Y.jsx)(x, {
                id: `chatgpt.entity.businessProfile.viewWebsite`,
                defaultMessage: `View website`
            })
        })
    }) : null, t[14] = f, t[15] = d, t[16] = S) : S = t[16];
    let C = l?.delivery_policy,
        w = l?.returns_policy,
        T;
    t[17] !== C || t[18] !== w ? (T = (0, Y.jsx)(H, {
        deliveryPolicy: C,
        returnsPolicy: w
    }), t[17] = C, t[18] = w, t[19] = T) : T = t[19];
    let E;
    t[20] !== v || t[21] !== r || t[22] !== m ? (E = v && (0, Y.jsx)(oe, {
        state: m == null ? `claimable` : `pending_claim`,
        requestStatus: m?.status,
        onAction: r
    }), t[20] = v, t[21] = r, t[22] = m, t[23] = E) : E = t[23];
    let D;
    return t[24] !== b || t[25] !== S || t[26] !== T || t[27] !== E ? (D = (0, Y.jsxs)(Y.Fragment, {
        children: [b, S, T, E]
    }), t[24] = b, t[25] = S, t[26] = T, t[27] = E, t[28] = D) : D = t[28], D
}

function Se(e) {
    return e.allowed_actions.includes(`manage`)
}

function Ce(e) {
    "use forget";
    let t = (0, q.c)(3),
        {
            enabled: n,
            children: r
        } = e,
        i = (0, J.useContext)(W),
        a = n ? i : null,
        o;
    return t[0] !== r || t[1] !== a ? (o = (0, Y.jsx)(W.Provider, {
        value: a,
        children: r
    }), t[0] = r, t[1] = a, t[2] = o) : o = t[2], o
}
var q, J, Y, we = e((() => {
    q = S(), J = t(b()), E(), a(), k(), me(), ae(), he(), M(), fe(), p(), P(), A(), ie(), h(), r(), c(), K(), Y = C()
}));

function X(e) {
    return e === `hotel` || e === `local_business` || e === `restaurant`
}

function Te(e) {
    let t = Z(e);
    return t == null ? `missing_citation` : t.type === `hidden` ? `hidden_citation` : t.type === `invalid` ? `invalid_citation` : t.type === `image_group` ? t.layout === `full_width` ? t.images.length === 0 ? `empty_cards` : t.images.some(e => e.image_result != null) ? `resolved` : `unresolved_cards` : `unexpected_layout` : `missing_citation`
}

function Ee(e) {
    let t = Z(e);
    if (t?.type !== `hidden`) return;
    let n = `hidden_reason` in t ? t.hidden_reason : void 0;
    return n === `age_gated` || n === `insufficient_images` ? n : n == null ? `unknown` : `other`
}

function De(e) {
    let t = Z(e);
    if (t?.type !== `image_group` || t.layout !== `full_width`) return `0`;
    let n = t.images.filter(e => e.image_result != null).length;
    return n <= 0 ? `0` : n === 1 ? `1` : n === 2 ? `2` : n === 3 ? `3` : `4_plus`
}

function Oe({
    category: e,
    outcome: t,
    userCountry: n,
    hiddenReason: r
}) {
    X(e) && f.count(m.DEFAULT, Q, {
        entity_category: e,
        outcome: t,
        user_country: n,
        ...r == null ? {} : {
            hidden_reason: r
        }
    })
}

function ke({
    category: e
}) {
    X(e) && f.count(m.DEFAULT, je, {
        entity_category: e
    })
}

function Ae({
    category: e,
    imageCountBucket: t
}) {
    X(e) && f.count(m.DEFAULT, Me, {
        entity_category: e,
        image_count_bucket: t
    })
}

function Z(e) {
    return e[0]?.metadata?.content_references?.find(e => e.start_idx === 0 && (e.type === `image_group` || typeof e.matched_text == `string` && e.matched_text.startsWith($)))
}
var Q, je, Me, $, Ne = e((() => {
    v(), Q = `sidebar.business_hero_image_group.outcome`, je = `sidebar.business_hero_image_group.first_tile_loaded`, Me = `sidebar.business_hero_image_group.sent_image_count`, $ = `image_group`
}));
export {
    X as a, Ae as c, _e as d, we as f, ge as h, Ne as i, xe as l, K as m, Te as n, ke as o, W as p, De as r, Oe as s, Ee as t, Ce as u
};
//# sourceMappingURL=bb871603-g4jfow61na2z8lzn.js.map
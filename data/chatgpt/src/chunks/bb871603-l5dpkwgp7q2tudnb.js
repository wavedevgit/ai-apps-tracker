import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B6 as n,
    Mnt as r,
    Nnt as i,
    Pnt as a,
    X$ as o,
    aot as s,
    i5 as c,
    iot as l,
    oot as u,
    rot as d,
    u1 as f
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as p,
    Rn as m,
    Vn as h,
    wn as g,
    zn as _
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    co as v,
    io as y,
    oo as b,
    ro as x,
    so as S
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    ei as C,
    ti as w
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    n as T,
    t as E
} from "./3ca39ed9-lh26mi6n79afmofs.js";
import {
    n as D,
    t as O
} from "./66f31be8-ltlvqo7d6ctolhup.js";

function k() {
    return e => {
        let t = e.children.find(e => e.type === `element` && e.tagName === `h2`);
        t?.type === `element` && (t.properties.dataBusinessProfileHeading = !0)
    }
}
var A, j, M = e((() => {
    A = t(h()), j = (0, A.createContext)(null)
}));

function N(e) {
    "use forget";
    let t = (0, R.c)(26),
        {
            profile: n,
            category: r,
            children: i
        } = e,
        a = c(F),
        o = (0, z.useSyncExternalStore)(u, d, d),
        l = (0, z.useSyncExternalStore)(u, s, s),
        f = o?.user?.id,
        p, m, h, g, _, v;
    t[0] !== a || t[1] !== r || t[2] !== n?.canonical_id || t[3] !== n?.content_sha256 || t[4] !== n?.eligibility_expires_at || t[5] !== n?.revision || t[6] !== l || t[7] !== f ? (m = y() && !l && a != null && f != null && [`business`, `brand`, `company`, `organization`].includes(r ?? ``), p = n?.canonical_id, _ = n?.revision, g = n?.content_sha256, h = n?.eligibility_expires_at, v = JSON.stringify([m, a, f, p, _, g, h]), t[0] = a, t[1] = r, t[2] = n?.canonical_id, t[3] = n?.content_sha256, t[4] = n?.eligibility_expires_at, t[5] = n?.revision, t[6] = l, t[7] = f, t[8] = p, t[9] = m, t[10] = h, t[11] = g, t[12] = _, t[13] = v) : (p = t[8], m = t[9], h = t[10], g = t[11], _ = t[12], v = t[13]);
    let x = v,
        [C, w] = (0, z.useState)(null);
    C != null && C.key !== x && w(null);
    let T, E;
    t[14] !== a || t[15] !== p || t[16] !== m || t[17] !== h || t[18] !== g || t[19] !== x || t[20] !== _ ? (T = () => {
        if (!m || a == null || p == null || _ == null || g == null || h == null || h / 1e3 <= Date.now()) return;
        let e = new AbortController,
            t, n = () => {
                let r = h / 1e3 - Date.now();
                r <= 0 ? (e.abort(), w(null)) : t = setTimeout(n, Math.min(r, 2147483647))
            };
        return n(), b.safePost(`/chat/frontend/v1/business-profiles/resolve`, {
            additionalHeaders: {
                ...S,
                "ChatGPT-Account-ID": a
            },
            signal: e.signal,
            disableAutomaticRetry: !0,
            preserveAccountIdOnRetry: !0,
            requestBody: {
                provider: `canonical-business-profile`,
                provider_business_id: p,
                canonical_revision: _,
                canonical_content_sha256: g
            }
        }).then(t => {
            !e.signal.aborted && Date.now() < h / 1e3 && w({
                key: x,
                status: t
            })
        }).catch(P), () => {
            e.abort(), clearTimeout(t)
        }
    }, E = [m, a, p, _, g, h, x], t[14] = a, t[15] = p, t[16] = m, t[17] = h, t[18] = g, t[19] = x, t[20] = _, t[21] = T, t[22] = E) : (T = t[21], E = t[22]), (0, z.useEffect)(T, E);
    let D = m && C?.key === x ? C.status : null,
        O;
    return t[23] !== i || t[24] !== D ? (O = (0, B.jsx)(j.Provider, {
        value: D,
        children: i
    }), t[23] = i, t[24] = D, t[25] = O) : O = t[25], O
}

function P() {}

function F() {
    return o()?.id
}

function I(e) {
    "use forget";
    let t = (0, R.c)(18),
        {
            children: n
        } = e,
        r = (0, z.useContext)(j),
        i = _();
    if (r == null) return n;
    let a = r.ownership?.available_action === `view_request` && r.ownership.current_request?.kind === `claim` ? r.ownership.current_request : null,
        o;
    t[0] !== a || t[1] !== r.ownership?.available_action || t[2] !== r.ownership_state_enabled || t[3] !== r.profiles ? (o = r.ownership_state_enabled && !r.profiles.some(L) && (r.ownership?.available_action === `claim` || a != null), t[0] = a, t[1] = r.ownership?.available_action, t[2] = r.ownership_state_enabled, t[3] = r.profiles, t[4] = o) : o = t[4];
    let s = o,
        c;
    if (t[5] !== n || t[6] !== i || t[7] !== r.is_verified) {
        let e;
        t[9] !== i || t[10] !== r.is_verified ? (e = e => (0, z.isValidElement)(e) ? (0, z.cloneElement)(e, {}, e.props.children, r.is_verified === !0 ? (0, B.jsx)(O, {
            className: `text-token-text-accent ms-2`,
            showTooltip: !0,
            label: i.formatMessage({
                id: `chatgpt.business_profiles.sidebar.verified.label`,
                defaultMessage: `Verified business`
            }),
            children: (0, B.jsx)(C, {
                "aria-hidden": !0,
                className: `icon`
            })
        }) : null) : e, t[9] = i, t[10] = r.is_verified, t[11] = e) : e = t[11], c = z.Children.map(n, e), t[5] = n, t[6] = i, t[7] = r.is_verified, t[8] = c
    } else c = t[8];
    let l;
    t[12] !== s || t[13] !== a ? (l = s && (0, B.jsx)(E, {
        state: a == null ? `claimable` : `pending_claim`,
        requestStatus: a?.status
    }), t[12] = s, t[13] = a, t[14] = l) : l = t[14];
    let u;
    return t[15] !== c || t[16] !== l ? (u = (0, B.jsxs)(B.Fragment, {
        children: [c, l]
    }), t[15] = c, t[16] = l, t[17] = u) : u = t[17], u
}

function L(e) {
    return e.allowed_actions.includes(`manage`)
}

function ee(e) {
    "use forget";
    let t = (0, R.c)(3),
        {
            enabled: n,
            children: r
        } = e,
        i = (0, z.useContext)(j),
        a = n ? i : null,
        o;
    return t[0] !== r || t[1] !== a ? (o = (0, B.jsx)(j.Provider, {
        value: a,
        children: r
    }), t[0] = r, t[1] = a, t[2] = o) : o = t[2], o
}
var R, z, B, V = e((() => {
    R = g(), z = t(h()), m(), v(), T(), x(), D(), w(), n(), f(), l(), M(), B = p()
}));

function H(e) {
    return e === `hotel` || e === `local_business` || e === `restaurant`
}

function U(e) {
    let t = Y(e);
    return t == null ? `missing_citation` : t.type === `hidden` ? `hidden_citation` : t.type === `invalid` ? `invalid_citation` : t.type === `image_group` ? t.layout === `full_width` ? t.images.length === 0 ? `empty_cards` : t.images.some(e => e.image_result != null) ? `resolved` : `unresolved_cards` : `unexpected_layout` : `missing_citation`
}

function W(e) {
    let t = Y(e);
    if (t?.type !== `hidden`) return;
    let n = `hidden_reason` in t ? t.hidden_reason : void 0;
    return n === `age_gated` || n === `insufficient_images` ? n : n == null ? `unknown` : `other`
}

function G(e) {
    let t = Y(e);
    if (t?.type !== `image_group` || t.layout !== `full_width`) return `0`;
    let n = t.images.filter(e => e.image_result != null).length;
    return n <= 0 ? `0` : n === 1 ? `1` : n === 2 ? `2` : n === 3 ? `3` : `4_plus`
}

function K({
    category: e,
    outcome: t,
    userCountry: n,
    hiddenReason: r
}) {
    H(e) && i.count(a.DEFAULT, X, {
        entity_category: e,
        outcome: t,
        user_country: n,
        ...r == null ? {} : {
            hidden_reason: r
        }
    })
}

function q({
    category: e
}) {
    H(e) && i.count(a.DEFAULT, Z, {
        entity_category: e
    })
}

function J({
    category: e,
    imageCountBucket: t
}) {
    H(e) && i.count(a.DEFAULT, Q, {
        entity_category: e,
        image_count_bucket: t
    })
}

function Y(e) {
    return e[0]?.metadata?.content_references?.find(e => e.start_idx === 0 && (e.type === `image_group` || typeof e.matched_text == `string` && e.matched_text.startsWith($)))
}
var X, Z, Q, $, te = e((() => {
    r(), X = `sidebar.business_hero_image_group.outcome`, Z = `sidebar.business_hero_image_group.first_tile_loaded`, Q = `sidebar.business_hero_image_group.sent_image_count`, $ = `image_group`
}));
export {
    H as a, J as c, N as d, V as f, k as h, te as i, I as l, M as m, U as n, q as o, j as p, G as r, K as s, W as t, ee as u
};
//# sourceMappingURL=bb871603-l5dpkwgp7q2tudnb.js.map
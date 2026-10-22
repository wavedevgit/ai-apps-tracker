import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    Ant as r,
    Oj as i,
    Sj as a,
    Snt as o,
    bj as s,
    bnt as c,
    c7 as l,
    eE as u,
    l7 as d,
    mj as f,
    pj as p,
    pnt as m
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bn as h,
    Ln as g,
    Rn as _,
    Vn as v,
    wn as y,
    zn as b
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Gn as x,
    QGn as S,
    XGn as C,
    YGn as w,
    ZGn as T,
    iKn as E
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    a as D,
    i as O,
    n as k,
    r as A,
    t as j
} from "./282bcbc3-eekiae0ev7zlnvgk.js";
import {
    AS as M,
    jS as N,
    lC as P,
    zC as F
} from "./c2675c8c-otyjprdiowg2v8hl.js";
import {
    i as I,
    n as L
} from "./9ac7a75a-chp6ksomhx4r867p.js";
import {
    a as ee,
    i as te,
    n as ne,
    r as R,
    t as re
} from "./9dade4c6-u0fdvd0b6ffceo87.js";

function z(e) {
    "use forget";
    let t = (0, B.c)(16),
        r, i, a, o;
    t[0] === e ? (r = t[1], i = t[2], a = t[3], o = t[4]) : ({
        className: r,
        onClick: i,
        size: o,
        ...a
    } = e, t[0] = e, t[1] = r, t[2] = i, t[3] = a, t[4] = o);
    let s = o === void 0 ? `large` : o,
        c;
    t[5] === r ? c = t[6] : (c = l(r, `-mkt`), t[5] = r, t[6] = c);
    let u;
    t[7] !== i || t[8] !== a.as || t[9] !== a.to ? (u = e => {
        if (i?.(e), a.as !== `link` && a.as !== `a` || a.to?.[0] !== `#`) return;
        let t = a.to.slice(1);
        if (!t) return;
        let n = document.getElementById(t);
        n && (n.scrollIntoView({
            behavior: `smooth`
        }), e.preventDefault())
    }, t[7] = i, t[8] = a.as, t[9] = a.to, t[10] = u) : u = t[10];
    let d;
    return t[11] !== a || t[12] !== s || t[13] !== c || t[14] !== u ? (d = (0, V.jsx)(n, {
        className: c,
        size: s,
        onClick: u,
        ...a
    }), t[11] = a, t[12] = s, t[13] = c, t[14] = u, t[15] = d) : d = t[15], d
}
var B, V, H = e((() => {
    B = y(), u(), d(), V = h()
}));

function U(e) {
    if (!e || typeof window > `u`) return null;
    try {
        return new URL(e, window.location.origin)
    } catch {
        return null
    }
}

function W({
    to: e
}) {
    return oe(e) ? G(`/contact-sales`) : ie(e)
}

function G(e) {
    switch (e) {
        case `/team-sign-up`:
            return [`chatgpt-team-get-started`, F.SELF_SERVE_BUSINESS_START];
        case `/codex`:
            return [`chatgpt-codex-get-started`, F.CODEX_START];
        case `/explore/codex_team`:
            return [F.CODEX_BUSINESS_START];
        case `/contact-sales`:
            return [F.ENTERPRISE_START]
    }
}

function ie(e) {
    let t = U(e);
    if (!t || !e) return [];
    let n = ae(A(e));
    return n.length > 0 ? n : se(t) ? [F.CHATGPT_WEB_APP_DOWNLOAD] : []
}

function ae(e) {
    return e ? ue(e) ? G(e) : de(e) ? [`chatgpt-explore-plan`, F.CHATGPT_SUBSCRIPTION_START] : [] : []
}

function oe(e) {
    return e != null && D(e) === j.CHATGPT_CONTACT_SALES
}

function se(e) {
    return le(window.location.pathname) && q.some(t => ce(e, t))
}

function ce(e, t) {
    return e.origin === t.origin && e.pathname === t.pathname && [...t.searchParams.entries()].every(([t, n]) => e.searchParams.get(t) === n)
}

function le(e) {
    return k(e) === C
}

function ue(e) {
    return K.has(e)
}

function de(e) {
    let t = (e.length > 1 ? e.replace(/\/+$/, ``) : e).toLowerCase().split(`/`).filter(Boolean),
        [n, r] = t.length === 3 ? t.slice(1) : t;
    return !n || !r || t.length > 3 ? !1 : n === J && Y.has(r)
}
var K, q, J, Y, fe = e((() => {
    P(), E(), O(), K = new Set([`/team-sign-up`, `/codex`, `/explore/codex_team`]), q = [T, `https://persistent.oaistatic.com/sidekick/public/ChatGPT.dmg`, `https://persistent.oaistatic.com/classic/public/ChatGPT_Classic.dmg`, x, `https://get.microsoft.com/installer/download/9NT1R1C2HH7J`, w, S].map(e => new URL(e)), J = `explore`, Y = new Set([`go`, `plus`, `pro`])
}));

function pe(e) {
    "use forget";
    let t = (0, X.c)(12),
        n, r, i;
    t[0] === e ? (n = t[1], r = t[2], i = t[3]) : ({
        onClick: n,
        primaryPixelTrackingKey: r,
        ...i
    } = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i);
    let a;
    t[4] === r ? a = t[5] : (a = {
        key: r,
        allowUnauthenticatedTracking: !0
    }, t[4] = r, t[5] = a);
    let {
        trackSelectedPixels: o
    } = N(a), s;
    t[6] !== n || t[7] !== o ? (s = e => {
        n?.(e), o()
    }, t[6] = n, t[7] = o, t[8] = s) : s = t[8];
    let c;
    return t[9] !== i || t[10] !== s ? (c = (0, Q.jsx)(z, {
        ...i,
        onClick: s
    }), t[9] = i, t[10] = s, t[11] = c) : c = t[11], c
}

function me(e) {
    "use forget";
    let t = (0, X.c)(16),
        n, r, i, a;
    t[0] === e ? (n = t[1], r = t[2], i = t[3], a = t[4]) : ({
        onClick: n,
        primaryPixelTrackingKey: r,
        secondaryPixelTrackingKey: a,
        ...i
    } = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a);
    let o;
    t[5] === r ? o = t[6] : (o = {
        key: r,
        allowUnauthenticatedTracking: !0
    }, t[5] = r, t[6] = o);
    let s = N(o),
        c;
    t[7] === a ? c = t[8] : (c = {
        key: a,
        allowUnauthenticatedTracking: !0
    }, t[7] = a, t[8] = c);
    let l = N(c),
        u;
    t[9] !== n || t[10] !== s || t[11] !== l ? (u = e => {
        n?.(e), s.trackSelectedPixels(), l.trackSelectedPixels()
    }, t[9] = n, t[10] = s, t[11] = l, t[12] = u) : u = t[12];
    let d;
    return t[13] !== i || t[14] !== u ? (d = (0, Q.jsx)(z, {
        ...i,
        onClick: u
    }), t[13] = i, t[14] = u, t[15] = d) : d = t[15], d
}

function he(e) {
    return (e ?? `primary`) === `primary` ? `secondary` : e
}

function ge(e) {
    "use forget";
    let t = (0, X.c)(75),
        {
            onClick: n,
            to: i,
            openNewTab: u,
            children: d
        } = e,
        p;
    t[0] === i ? p = t[1] : (p = te(i) && r() && !o() && !c(), t[0] = i, t[1] = p);
    let m = p,
        h;
    t[2] === i ? h = t[3] : (h = i === `https://persistent.oaistatic.com/codex-app-prod/ChatGPT.dmg` && r() && !o() && !c(), t[2] = i, t[3] = h);
    let g = h,
        [_, v] = (0, Z.useState)(null),
        [y, x] = (0, Z.useState)(null),
        S = m && y === `micro_installer`,
        C = b(),
        w;
    t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (w = {
        key: `chatgpt-codex-download`,
        allowUnauthenticatedTracking: !0
    }, t[4] = w) : w = t[4];
    let {
        trackSelectedPixels: T
    } = N(w), E;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (E = {
        key: F.CODEX_DOWNLOAD,
        allowUnauthenticatedTracking: !0
    }, t[5] = E) : E = t[5];
    let {
        trackSelectedPixels: D
    } = N(E), O, k;
    t[6] !== m || t[7] !== g ? (O = () => {
        let e = !1;
        return (async () => {
            let e = m ? ne() : `full_app`;
            return {
                mode: e,
                resolution: !g || e === `micro_installer` ? null : await I()
            }
        })().then(t => {
            let {
                mode: n,
                resolution: r
            } = t;
            e || (x(n), v(r))
        }), () => {
            e = !0
        }
    }, k = [g, m], t[6] = m, t[7] = g, t[8] = O, t[9] = k) : (O = t[8], k = t[9]), (0, Z.useEffect)(O, k);
    let A;
    t[10] !== D || t[11] !== T ? (A = () => {
        D(), T()
    }, t[10] = D, t[11] = T, t[12] = A) : A = t[12];
    let j = A,
        M;
    t[13] !== y || t[14] !== u || t[15] !== j ? (M = e => {
        let t = ee(e, `contentful_button`, y ?? `full_app`);
        if (f({
                downloadUrl: t,
                surface: `codex_landing`
            }), j(), !(typeof window > `u`)) {
            if (u) {
                window.open(t, `_blank`, `noopener,noreferrer`);
                return
            }
            window.location.assign(t)
        }
    }, t[13] = y, t[14] = u, t[15] = j, t[16] = M) : M = t[16];
    let P = M,
        L;
    t[17] !== y || t[18] !== _ || t[19] !== m || t[20] !== n || t[21] !== P || t[22] !== g || t[23] !== i || t[24] !== S ? (L = async (e, t) => {
        if (e.preventDefault(), m && y == null) return;
        if (n?.(e), t != null) {
            P(t);
            return
        }
        if (S || !g) {
            P(i);
            return
        }
        let r = _ ?? await I();
        if (r.type === `download_url`) {
            P(r.url);
            return
        }
        if (r.type === `mac_download_options`) {
            v(r);
            return
        }
        P(i)
    }, t[17] = y, t[18] = _, t[19] = m, t[20] = n, t[21] = P, t[22] = g, t[23] = i, t[24] = S, t[25] = L) : L = t[25];
    let R = L;
    if (!S && _?.type === `mac_download_options`) {
        let n, r, i;
        if (t[26] !== e) {
            let {
                as: a,
                to: o,
                openNewTab: s,
                rel: c,
                prefetch: l,
                state: u,
                replace: d,
                preventScrollReset: f,
                onClick: p,
                children: m,
                ref: h,
                color: g,
                className: _,
                ...v
            } = e;
            i = g, r = _, n = v, t[26] = e, t[27] = n, t[28] = r, t[29] = i
        } else n = t[27], r = t[28], i = t[29];
        let o = e.fullWidth && `w-full`,
            c;
        t[30] !== r || t[31] !== o ? (c = l(r, o), t[30] = r, t[31] = o, t[32] = c) : c = t[32];
        let u = c,
            d = !e.fullWidth,
            f;
        t[33] !== e.fullWidth || t[34] !== d ? (f = l(`flex gap-2`, {
            "w-full flex-col": e.fullWidth,
            "flex-wrap": d
        }), t[33] = e.fullWidth, t[34] = d, t[35] = f) : f = t[35];
        let p;
        t[36] === R ? p = t[37] : (p = e => void R(e, s), t[36] = R, t[37] = p);
        let m;
        t[38] === C ? m = t[39] : (m = C.formatMessage($.downloadAppleSilicon), t[38] = C, t[39] = m);
        let h;
        t[40] !== n || t[41] !== i || t[42] !== u || t[43] !== p || t[44] !== m ? (h = (0, Q.jsx)(z, {
            ...n,
            as: `button`,
            color: i,
            className: u,
            onClick: p,
            children: m
        }), t[40] = n, t[41] = i, t[42] = u, t[43] = p, t[44] = m, t[45] = h) : h = t[45];
        let g;
        t[46] === i ? g = t[47] : (g = he(i), t[46] = i, t[47] = g);
        let _;
        t[48] === R ? _ = t[49] : (_ = e => void R(e, a), t[48] = R, t[49] = _);
        let v;
        t[50] === C ? v = t[51] : (v = C.formatMessage($.downloadIntelMac), t[50] = C, t[51] = v);
        let y;
        t[52] !== n || t[53] !== u || t[54] !== g || t[55] !== _ || t[56] !== v ? (y = (0, Q.jsx)(z, {
            ...n,
            as: `button`,
            color: g,
            className: u,
            onClick: _,
            children: v
        }), t[52] = n, t[53] = u, t[54] = g, t[55] = _, t[56] = v, t[57] = y) : y = t[57];
        let b;
        return t[58] !== f || t[59] !== h || t[60] !== y ? (b = (0, Q.jsxs)(`div`, {
            className: f,
            children: [h, y]
        }), t[58] = f, t[59] = h, t[60] = y, t[61] = b) : b = t[61], b
    }
    let B;
    if (t[62] !== e) {
        let {
            as: n,
            to: r,
            openNewTab: i,
            rel: a,
            prefetch: o,
            state: s,
            replace: c,
            preventScrollReset: l,
            onClick: u,
            children: d,
            ref: f,
            ...p
        } = e;
        B = p, t[62] = e, t[63] = B
    } else B = t[63];
    let V = e.disabled || m && y == null,
        H;
    t[64] === R ? H = t[65] : (H = e => {
        R(e)
    }, t[64] = R, t[65] = H);
    let U;
    t[66] !== d || t[67] !== C || t[68] !== S ? (U = S ? C.formatMessage(re.downloadMac) : d, t[66] = d, t[67] = C, t[68] = S, t[69] = U) : U = t[69];
    let W;
    return t[70] !== B || t[71] !== H || t[72] !== U || t[73] !== V ? (W = (0, Q.jsx)(z, {
        ...B,
        as: `button`,
        disabled: V,
        onClick: H,
        children: U
    }), t[70] = B, t[71] = H, t[72] = U, t[73] = V, t[74] = W) : W = t[74], W
}

function _e(e) {
    "use forget";
    let t = (0, X.c)(13);
    if (e.as === `a` || e.as === `link`) {
        if (e.to != null && i(e.to)) {
            let n;
            return t[0] === e ? n = t[1] : (n = (0, Q.jsx)(ge, {
                ...e,
                to: e.to
            }), t[0] = e, t[1] = n), n
        }
        let n;
        t[2] === e.to ? n = t[3] : (n = W({
            to: e.to
        }), t[2] = e.to, t[3] = n);
        let [r, a] = n;
        if (r && a) {
            let n;
            return t[4] !== r || t[5] !== e || t[6] !== a ? (n = (0, Q.jsx)(me, {
                ...e,
                primaryPixelTrackingKey: r,
                secondaryPixelTrackingKey: a
            }), t[4] = r, t[5] = e, t[6] = a, t[7] = n) : n = t[7], n
        }
        if (r) {
            let n;
            return t[8] !== r || t[9] !== e ? (n = (0, Q.jsx)(pe, {
                ...e,
                primaryPixelTrackingKey: r
            }), t[8] = r, t[9] = e, t[10] = n) : n = t[10], n
        }
    }
    let n;
    return t[11] === e ? n = t[12] : (n = (0, Q.jsx)(z, {
        ...e
    }), t[11] = e, t[12] = n), n
}
var X, Z, Q, $, ve = e((() => {
    X = y(), M(), P(), L(), m(), p(), R(), d(), Z = t(v()), _(), fe(), H(), Q = h(), $ = g({
        downloadAppleSilicon: {
            id: `wham.codexAppAnnouncement.cta.downloadAppleSilicon`,
            defaultMessage: `Download for Apple Silicon`
        },
        downloadIntelMac: {
            id: `wham.codexAppAnnouncement.cta.downloadIntelMac`,
            defaultMessage: `Download for Intel Mac`
        }
    })
}));
export {
    H as i, ve as n, z as r, _e as t
};
//# sourceMappingURL=1fbff149-mztuifcg3lorq16x.js.map
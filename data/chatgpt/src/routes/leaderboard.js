import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bz as n,
    C1 as r,
    My as i,
    b5 as a,
    cU as o,
    dz as s,
    fz as c,
    gnt as l,
    hh as u,
    ih as d,
    jy as f,
    mh as p,
    nt as m,
    rU as h,
    th as g,
    tt as _,
    u1 as v,
    y5 as y,
    ynt as b,
    zz as x
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as S,
    Bn as C,
    Ht as ee,
    Ln as w,
    Nn as T,
    Rn as te,
    Ut as E,
    Vn as D,
    lt as ne,
    wn as O,
    zn as re
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $C as ie,
    DJ as ae,
    EJ as oe,
    Pln as k,
    Qb as se,
    THn as ce,
    Zb as le,
    _un as ue,
    ew as A,
    iCn as de,
    sCn as j,
    wHn as M
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    $r as fe,
    DC as pe,
    EC as N,
    Jr as me,
    Qr as P,
    Xr as F,
    Yr as he,
    Zr as ge
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    hw as _e,
    oC as ve,
    sC as I,
    zC as ye
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    Dh as be,
    Oh as L,
    wh as R
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    n as xe,
    t as Se
} from "./620167af-n2bpjvn118swd9k7.js";
import {
    i as Ce,
    l as we,
    o as z,
    u as Te
} from "./e19f3910-nriy7br1qc4gkn80.js";
import {
    r as B,
    t as V
} from "./f23f926c-o5a2k571o5op8vhp.js";
import {
    n as H,
    t as U
} from "./ab4d12c6-eqsi2pgmsdmjmkzu.js";
import {
    n as W,
    t as Ee
} from "./fab52ad7-c6tze5skxh7lv3b4.js";
import {
    a as G,
    i as K,
    n as De,
    t as q
} from "./98d333a6-lzfua24uolqtlrp0.js";

function Oe(e) {
    let t = Number.parseInt(e.get(`page`) ?? ``, 10);
    return Number.isFinite(t) ? Math.max(t - 1, 0) : 0
}

function ke({
    pageIndex: e,
    searchParams: t
}) {
    let n = new URLSearchParams(t);
    return n.set(J, String(e + 1)), n
}

function Ae({
    configLabel: e,
    fallbackLabel: t
}) {
    return e.trim() || t
}
var J, je = e((() => {
    J = `page`
}));

function Me(e) {
    "use forget";
    let t = (0, Y.c)(80),
        {
            isRestricted: n
        } = e,
        r = n !== void 0 && n,
        i;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = De(), t[0] = i) : i = t[0];
    let a = i,
        o = re(),
        [c, l] = ee(),
        d = Oe(c),
        [f, p] = (0, X.useState)(`30d`),
        [m, h] = (0, X.useState)(``),
        [g, _] = (0, X.useState)(``),
        v = f === `7d` ? 7 : 30,
        b = se(m, 250),
        x = d + 1,
        S = !r,
        C;
    t[1] !== g || t[2] !== x || t[3] !== S || t[4] !== v ? (C = {
        windowDays: v,
        page: x,
        pageSize: Q,
        clientFilter: `all`,
        sortBy: `text_tokens`,
        sortDirection: `desc`,
        searchQuery: g,
        enabled: S
    }, t[1] = g, t[2] = x, t[3] = S, t[4] = v, t[5] = C) : C = t[5];
    let w = ue(C),
        te;
    t[6] === l ? te = t[7] : (te = e => {
        l(t => ke({
            pageIndex: e,
            searchParams: t
        }), {
            replace: !0
        })
    }, t[6] = l, t[7] = te);
    let E = te,
        D;
    t[8] !== E || t[9] !== g ? (D = e => {
        let t = e.trim();
        t !== g && (E(0), _(t))
    }, t[8] = E, t[9] = g, t[10] = D) : D = t[10];
    let ne = D,
        O, ae;
    t[11] !== ne || t[12] !== b ? (O = () => {
        ne(b)
    }, ae = [ne, b], t[11] = ne, t[12] = b, t[13] = O, t[14] = ae) : (O = t[13], ae = t[14]), (0, X.useEffect)(O, ae);
    let oe = w.data?.response.total_users ?? 0,
        k = oe === 0 ? 0 : Math.ceil(oe / Q),
        ce = Math.max(k - 1, 0),
        le = w.isPlaceholderData ? (w.data?.page ?? d + 1) - 1 : d,
        A = Math.min(Math.max(le, 0), ce);
    w.data?.response.data;
    let de;
    t[15] === w.data?.response.data ? de = t[16] : (de = w.data?.response.data ?? [], t[15] = w.data?.response.data, t[16] = de);
    let j = de,
        M = w.isSuccess && !w.isPlaceholderData && d > 0 && j.length === 0 && oe === 0,
        fe = !r && M,
        pe;
    t[17] !== g || t[18] !== fe || t[19] !== v ? (pe = {
        windowDays: v,
        page: 1,
        pageSize: Q,
        clientFilter: `all`,
        sortBy: `text_tokens`,
        sortDirection: `desc`,
        searchQuery: g,
        enabled: fe
    }, t[17] = g, t[18] = fe, t[19] = v, t[20] = pe) : pe = t[20];
    let N = ue(pe),
        me = N.data?.response.total_users ?? 0,
        P = Math.max(Math.ceil(me / Q) - 1, 0),
        F = M && N.isSuccess && me > 0 && d > P,
        he = M && (N.isLoading || F),
        ge = w.isError || M && N.isError,
        _e = w.isPlaceholderData && d > 0 && j.length === 0,
        ve;
    if (t[21] !== j || t[22] !== A) {
        let e;
        t[24] === A ? e = t[25] : (e = (e, t) => ({
            rank: a ? e.rank ?? A * Q + t + 1 : A * Q + t + 1,
            userId: e.user_id,
            displayName: Ue(e),
            secondaryLabel: e.email ?? e.user_id,
            currentStreak: e.current_streak ?? null,
            textTokens: e.text_tokens ?? 0
        }), t[24] = A, t[25] = e), ve = j.map(e), t[21] = j, t[22] = A, t[23] = ve
    } else ve = t[23];
    let I = ve,
        ye, be;
    t[26] !== P || t[27] !== E || t[28] !== F ? (ye = () => {
        F && E(P)
    }, be = [P, E, F], t[26] = P, t[27] = E, t[28] = F, t[29] = ye, t[30] = be) : (ye = t[29], be = t[30]), (0, X.useEffect)(ye, be);
    let L = r && `pointer-events-none select-none blur-[3px]`,
        R;
    t[31] === L ? R = t[32] : (R = y(`bg-token-bg-primary text-token-text-primary min-h-screen`, L), t[31] = L, t[32] = R);
    let xe;
    t[33] === Symbol.for(`react.memo_cache_sentinel`) ? (xe = (0, Z.jsx)(`div`, {
        className: `fixed end-3 top-3 z-10`,
        children: (0, Z.jsx)(Ie, {})
    }), t[33] = xe) : xe = t[33];
    let Se;
    t[34] === Symbol.for(`react.memo_cache_sentinel`) ? (Se = (0, Z.jsx)(`h1`, {
        className: `text-4xl leading-tight font-semibold tracking-[-0.04em]`,
        children: (0, Z.jsx)(T, {
            ...$.title
        })
    }), t[34] = Se) : Se = t[34];
    let Ce;
    t[35] === Symbol.for(`react.memo_cache_sentinel`) ? (Ce = (0, Z.jsxs)(`div`, {
        className: `flex flex-col gap-1`,
        children: [Se, (0, Z.jsx)(`p`, {
            className: `text-token-text-tertiary text-sm leading-5`,
            children: (0, Z.jsx)(T, {
                ...$.subtitle
            })
        })]
    }), t[35] = Ce) : Ce = t[35];
    let we;
    t[36] === Symbol.for(`react.memo_cache_sentinel`) ? (we = (0, Z.jsx)(u, {
        className: `text-token-text-tertiary pointer-events-none absolute start-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2`
    }), t[36] = we) : we = t[36];
    let z;
    t[37] === o ? z = t[38] : (z = o.formatMessage($.searchInputAriaLabel), t[37] = o, t[38] = z);
    let Te;
    t[39] === Symbol.for(`react.memo_cache_sentinel`) ? (Te = e => {
        h(e.target.value)
    }, t[39] = Te) : Te = t[39];
    let B;
    t[40] === o ? B = t[41] : (B = o.formatMessage($.searchInputPlaceholder), t[40] = o, t[41] = B);
    let V;
    t[42] !== m || t[43] !== z || t[44] !== B ? (V = (0, Z.jsxs)(`label`, {
        htmlFor: `codex-token-usage-leaderboard-search`,
        className: `relative block w-36`,
        children: [we, (0, Z.jsx)(`input`, {
            id: `codex-token-usage-leaderboard-search`,
            "aria-label": z,
            className: `border-token-border-default bg-token-bg-primary text-token-text-primary caret-token-text-primary placeholder:text-token-text-tertiary focus:border-token-border-heavy h-9 w-full rounded-full border ps-9 pe-3 text-sm font-normal shadow-none ring-0 outline-hidden focus:ring-0`,
            name: `codex-token-usage-leaderboard-search`,
            onChange: Te,
            placeholder: B,
            role: `searchbox`,
            type: `text`,
            value: m
        })]
    }), t[42] = m, t[43] = z, t[44] = B, t[45] = V) : V = t[45];
    let H;
    t[46] === E ? H = t[47] : (H = e => {
        p(e), E(0)
    }, t[46] = E, t[47] = H);
    let U;
    t[48] !== H || t[49] !== f ? (U = (0, Z.jsx)(Re, {
        value: f,
        onChange: H
    }), t[48] = H, t[49] = f, t[50] = U) : U = t[50];
    let W;
    t[51] !== V || t[52] !== U ? (W = (0, Z.jsx)(`header`, {
        className: `border-token-border-light flex flex-col gap-4 border-b pb-5`,
        children: (0, Z.jsxs)(`div`, {
            className: `flex flex-col gap-4 md:flex-row md:items-end md:justify-between`,
            children: [Ce, (0, Z.jsxs)(`div`, {
                className: `flex flex-wrap items-center justify-end gap-3`,
                children: [V, U]
            })]
        })
    }), t[51] = V, t[52] = U, t[53] = W) : W = t[53];
    let Ee;
    t[54] === Symbol.for(`react.memo_cache_sentinel`) ? (Ee = (0, Z.jsx)(Pe, {}), t[54] = Ee) : Ee = t[54];
    let G;
    t[55] !== N || t[56] !== ge || t[57] !== he || t[58] !== r || t[59] !== _e || t[60] !== w || t[61] !== I || t[62] !== g ? (G = (0, Z.jsx)(`div`, {
        className: `pt-5`,
        children: r ? (0, Z.jsx)(Be, {
            rows: Ze
        }) : w.isLoading || he || _e ? (0, Z.jsx)(`div`, {
            className: `flex min-h-80 items-center justify-center`,
            children: (0, Z.jsx)(s, {
                className: `icon-lg text-token-text-tertiary`
            })
        }) : ge ? (0, Z.jsxs)(`div`, {
            className: `flex min-h-80 flex-col items-center justify-center gap-4 text-center`,
            children: [(0, Z.jsx)(`p`, {
                className: `text-token-text-secondary text-sm`,
                children: (0, Z.jsx)(T, {
                    ...$.errorMessage
                })
            }), (0, Z.jsx)(`button`, {
                type: `button`,
                className: `btn btn-secondary`,
                onClick: () => {
                    if (w.isError) {
                        w.refetch();
                        return
                    }
                    N.refetch()
                },
                children: (0, Z.jsx)(T, {
                    ...$.retryButton
                })
            })]
        }) : I.length === 0 ? (0, Z.jsx)(`div`, {
            className: `text-token-text-tertiary flex min-h-80 items-center justify-center text-center text-sm`,
            children: (0, Z.jsx)(T, {
                ...g ? $.emptySearchMessage : $.emptyMessage
            })
        }) : (0, Z.jsx)(Be, {
            rows: I
        })
    }), t[55] = N, t[56] = ge, t[57] = he, t[58] = r, t[59] = _e, t[60] = w, t[61] = I, t[62] = g, t[63] = G) : G = t[63];
    let K;
    t[64] !== d || t[65] !== r || t[66] !== k || t[67] !== E ? (K = !r && k > 1 ? (0, Z.jsxs)(`div`, {
        className: `mt-6 flex flex-col-reverse items-end justify-between gap-4 sm:flex-row sm:items-center`,
        children: [(0, Z.jsx)(Fe, {
            currentPage: d,
            pageCount: k,
            onChangePage: E
        }), (0, Z.jsx)(ie, {
            currentPage: d,
            length: k,
            onChangeIndex: E
        })]
    }) : null, t[64] = d, t[65] = r, t[66] = k, t[67] = E, t[68] = K) : K = t[68];
    let q;
    t[69] !== W || t[70] !== G || t[71] !== K ? (q = (0, Z.jsxs)(`div`, {
        className: `mx-auto flex w-full max-w-[800px] flex-col px-6 py-16 md:py-24`,
        children: [W, Ee, G, K]
    }), t[69] = W, t[70] = G, t[71] = K, t[72] = q) : q = t[72];
    let Ae;
    t[73] !== r || t[74] !== R || t[75] !== q ? (Ae = (0, Z.jsxs)(`main`, {
        "aria-hidden": r,
        className: R,
        inert: r,
        children: [xe, q]
    }), t[73] = r, t[74] = R, t[75] = q, t[76] = Ae) : Ae = t[76];
    let J = Ae;
    if (!r) return J;
    let je;
    t[77] === Symbol.for(`react.memo_cache_sentinel`) ? (je = (0, Z.jsx)(Ne, {}), t[77] = je) : je = t[77];
    let Me;
    return t[78] === J ? Me = t[79] : (Me = (0, Z.jsxs)(Z.Fragment, {
        children: [J, je]
    }), t[78] = J, t[79] = Me), Me
}

function Ne() {
    "use forget";
    let e = (0, Y.c)(1),
        t;
    return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Z.jsx)(`div`, {
        className: `fixed inset-0 z-20 flex items-center justify-center bg-black/75 px-6 py-12 backdrop-blur-[2px]`,
        children: (0, Z.jsx)(`section`, {
            role: `dialog`,
            "aria-modal": `true`,
            "aria-labelledby": `codex-leaderboard-restricted-title`,
            className: `border-token-border-default bg-token-bg-primary/95 text-token-text-primary flex min-h-52 w-full max-w-[640px] items-center justify-center rounded-[28px] border px-8 py-12 text-center shadow-2xl`,
            children: (0, Z.jsx)(`h2`, {
                id: `codex-leaderboard-restricted-title`,
                className: `max-w-[520px] text-[28px] leading-[1.35] font-normal tracking-[-0.02em]`,
                children: (0, Z.jsx)(T, {
                    ...$.restrictedMessage
                })
            })
        })
    }), e[0] = t) : t = e[0], t
}

function Pe() {
    "use forget";
    let e = (0, Y.c)(15),
        t = re(),
        n = Te(),
        r = H(),
        i = B(),
        {
            data: a,
            isLoading: s
        } = o(),
        c = a?.announcements,
        l = c != null && c[_.hasSeenCodexAppHomeBanner] == null,
        u;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (u = {
        key: `chatgpt-codex-download`,
        allowUnauthenticatedTracking: !0
    }, e[0] = u) : u = e[0];
    let {
        trackSelectedPixels: d
    } = I(u), f;
    e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (f = {
        key: _e.CODEX_DOWNLOAD,
        allowUnauthenticatedTracking: !0
    }, e[1] = f) : f = e[1];
    let {
        trackSelectedPixels: p
    } = I(f);
    if (!(n && r && l && !s && !i.isLoadingOs && i.canDownload)) return null;
    let m;
    e[2] === Symbol.for(`react.memo_cache_sentinel`) ? (m = (0, Z.jsx)(`div`, {
        "aria-hidden": !0,
        className: `pointer-events-none absolute inset-0 bg-cover bg-left-top bg-no-repeat`,
        style: {
            backgroundImage: `url(${Ye})`
        }
    }), e[2] = m) : m = e[2];
    let h;
    e[3] === Symbol.for(`react.memo_cache_sentinel`) ? (h = (0, Z.jsx)(`div`, {
        className: `flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/85 shadow-[0px_1px_1px_0px_rgba(0,0,0,0.08),0px_0px_1px_0px_rgba(0,0,0,0.25)]`,
        children: (0, Z.jsx)(Se, {
            className: `h-6 w-6`
        })
    }), e[3] = h) : h = e[3];
    let g;
    e[4] === Symbol.for(`react.memo_cache_sentinel`) ? (g = (0, Z.jsx)(`div`, {
        className: `text-[13px] leading-[18px] font-medium text-[#0D0D0D] dark:text-[#0D0D0D]`,
        children: (0, Z.jsx)(T, {
            ...$.downloadAppBannerTitle
        })
    }), e[4] = g) : g = e[4];
    let v;
    e[5] === Symbol.for(`react.memo_cache_sentinel`) ? (v = (0, Z.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-3`,
        children: [h, (0, Z.jsxs)(`div`, {
            className: `min-w-0 flex-1`,
            children: [g, (0, Z.jsx)(`div`, {
                className: `mt-0.5 text-[12px] leading-4 text-[#5D5D5D] dark:text-[#5D5D5D]`,
                children: (0, Z.jsx)(T, {
                    ...$.downloadAppBannerSubtitle
                })
            })]
        })]
    }), e[5] = v) : v = e[5];
    let y;
    e[6] === t ? y = e[7] : (y = t.formatMessage($.downloadAppBannerButtonLabel), e[6] = t, e[7] = y);
    let b;
    e[8] !== p || e[9] !== d ? (b = () => {
        oe.recordCodexAppSurfaceAction(`token_usage_leaderboard`, `download`), Ce({
            redirectToGetStarted: !1,
            trackSelectedPixels: () => {
                p(), d()
            }
        })
    }, e[8] = p, e[9] = d, e[10] = b) : b = e[10];
    let x;
    e[11] === Symbol.for(`react.memo_cache_sentinel`) ? (x = (0, Z.jsx)(T, {
        ...$.downloadAppBannerButton
    }), e[11] = x) : x = e[11];
    let S;
    return e[12] !== y || e[13] !== b ? (S = (0, Z.jsx)(`section`, {
        className: `mt-4 w-full px-0`,
        children: (0, Z.jsxs)(`div`, {
            className: `border-token-border-default relative overflow-hidden rounded-2xl border bg-white shadow-[0px_4px_16px_0px_rgba(0,0,0,0.05)] dark:border-[#424242] dark:bg-white`,
            children: [m, (0, Z.jsxs)(`div`, {
                className: `relative flex flex-col gap-2.5 px-3 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-4`,
                children: [v, (0, Z.jsx)(`button`, {
                    type: `button`,
                    className: `inline-flex h-8 w-full shrink-0 items-center justify-center rounded-full bg-gray-950 px-4 text-[13px] leading-none font-medium text-white hover:bg-gray-800 sm:w-auto dark:bg-gray-950! dark:text-white! dark:hover:bg-gray-800!`,
                    "aria-label": y,
                    onClick: b,
                    children: x
                })]
            })]
        })
    }), e[12] = y, e[13] = b, e[14] = S) : S = e[14], S
}

function Fe(e) {
    "use forget";
    let t = (0, Y.c)(28),
        {
            currentPage: n,
            pageCount: r,
            onChangePage: i
        } = e,
        a = re(),
        [o, s] = (0, X.useState)(String(n + 1)),
        c, l;
    t[0] === n ? (c = t[1], l = t[2]) : (c = () => {
        s(String(n + 1))
    }, l = [n], t[0] = n, t[1] = c, t[2] = l), (0, X.useEffect)(c, l);
    let u;
    t[3] !== n || t[4] !== o || t[5] !== i || t[6] !== r ? (u = () => {
        let e = Number.parseInt(o, 10);
        if (!Number.isFinite(e)) {
            s(String(n + 1));
            return
        }
        let t = Math.min(Math.max(e, 1), r);
        i(t - 1), s(String(t))
    }, t[3] = n, t[4] = o, t[5] = i, t[6] = r, t[7] = u) : u = t[7];
    let d = u,
        f;
    t[8] === d ? f = t[9] : (f = e => {
        e.preventDefault(), d()
    }, t[8] = d, t[9] = f);
    let p;
    t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (p = (0, Z.jsx)(T, {
        ...$.pageJumpLabel
    }), t[10] = p) : p = t[10];
    let m;
    t[11] === a ? m = t[12] : (m = a.formatMessage($.pageJumpInputLabel), t[11] = a, t[12] = m);
    let h;
    t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (h = e => s(e.target.value), t[13] = h) : h = t[13];
    let g;
    t[14] !== n || t[15] !== o || t[16] !== d ? (g = () => {
        if (o.trim() === ``) {
            s(String(n + 1));
            return
        }
        d()
    }, t[14] = n, t[15] = o, t[16] = d, t[17] = g) : g = t[17];
    let _;
    t[18] !== o || t[19] !== m || t[20] !== g ? (_ = (0, Z.jsx)(`input`, {
        "aria-label": m,
        className: `border-token-border-default bg-token-bg-primary text-token-text-primary focus:border-token-text-secondary h-8 w-16 rounded-full border px-3 text-center text-sm font-medium tabular-nums outline-hidden`,
        inputMode: `numeric`,
        pattern: `[0-9]*`,
        value: o,
        onChange: h,
        onBlur: g
    }), t[18] = o, t[19] = m, t[20] = g, t[21] = _) : _ = t[21];
    let v;
    t[22] === r ? v = t[23] : (v = (0, Z.jsx)(T, {
        ...$.pageJumpOf,
        values: {
            pageCount: r
        }
    }), t[22] = r, t[23] = v);
    let y;
    return t[24] !== v || t[25] !== f || t[26] !== _ ? (y = (0, Z.jsxs)(`form`, {
        className: `text-token-text-tertiary flex items-center gap-2 text-sm`,
        onSubmit: f,
        children: [p, _, v]
    }), t[24] = v, t[25] = f, t[26] = _, t[27] = y) : y = t[27], y
}

function Ie() {
    "use forget";
    let e = (0, Y.c)(8),
        t = re(),
        n;
    e[0] === t ? n = e[1] : (n = t.formatMessage($.profileMenuButtonLabel), e[0] = t, e[1] = n);
    let r;
    e[2] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, Z.jsx)(g, {
        showPlanTypeBadge: !0
    }), e[2] = r) : r = e[2];
    let i;
    e[3] === n ? i = e[4] : (i = (0, Z.jsx)(M.Trigger, {
        "aria-label": n,
        className: `keyboard-focused:focus-ring group hover:bg-token-interactive-bg-secondary-selected flex h-10 w-10 items-center justify-center rounded-full transition-colors`,
        "data-testid": `leaderboard-profile-button`,
        onFocus: L,
        onPointerEnter: L,
        children: r
    }), e[3] = n, e[4] = i);
    let a;
    e[5] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, Z.jsx)(M.Portal, {
        children: (0, Z.jsx)(M.Content, {
            align: `end`,
            sideOffset: 4,
            size: `auto`,
            className: `min-w-72`,
            children: (0, Z.jsx)(R, {})
        })
    }), e[5] = a) : a = e[5];
    let o;
    return e[6] === i ? o = e[7] : (o = (0, Z.jsxs)(M.Root, {
        onOpenChange: Le,
        children: [i, a]
    }), e[6] = i, e[7] = o), o
}

function Le(e) {
    e && L()
}

function Re(e) {
    "use forget";
    let t = (0, Y.c)(16),
        {
            value: n,
            onChange: r
        } = e,
        i;
    t[0] === n ? i = t[1] : (i = qe(n), t[0] = n, t[1] = i);
    let a;
    t[2] === i ? a = t[3] : (a = (0, Z.jsx)(T, {
        ...i
    }), t[2] = i, t[3] = a);
    let o;
    t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, Z.jsx)(N, {
        className: `h-4 w-4`
    }), t[4] = o) : o = t[4];
    let s;
    t[5] === a ? s = t[6] : (s = (0, Z.jsxs)(M.Trigger, {
        className: `text-token-text-secondary hover:text-token-text-primary flex items-center gap-2 text-sm font-medium transition-colors`,
        children: [a, o]
    }), t[5] = a, t[6] = s);
    let c;
    t[7] === r ? c = t[8] : (c = e => {
        Ke(e) && r(e)
    }, t[7] = r, t[8] = c);
    let l;
    t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (l = Xe.map(ze), t[9] = l) : l = t[9];
    let u;
    t[10] !== c || t[11] !== n ? (u = (0, Z.jsx)(M.Portal, {
        children: (0, Z.jsx)(M.Content, {
            align: `end`,
            sideOffset: 8,
            children: (0, Z.jsx)(M.RadioGroup, {
                value: n,
                onValueChange: c,
                children: l
            })
        })
    }), t[10] = c, t[11] = n, t[12] = u) : u = t[12];
    let d;
    return t[13] !== s || t[14] !== u ? (d = (0, Z.jsxs)(M.Root, {
        children: [s, u]
    }), t[13] = s, t[14] = u, t[15] = d) : d = t[15], d
}

function ze(e) {
    return (0, Z.jsx)(M.RadioItem, {
        value: e,
        label: (0, Z.jsx)(T, {
            ...qe(e)
        })
    }, e)
}

function Be(e) {
    "use forget";
    let t = (0, Y.c)(33),
        {
            rows: n
        } = e,
        r = re(),
        i;
    t[0] === r ? i = t[1] : (i = Je(r), t[0] = r, t[1] = i);
    let a = i,
        o;
    t[2] === r ? o = t[3] : (o = r.formatMessage($.currentStreakTooltip), t[2] = r, t[3] = o);
    let s = o,
        c;
    t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, Z.jsx)(`th`, {
        className: `w-16 pe-3 text-center`,
        children: (0, Z.jsx)(T, {
            ...$.rankColumn
        })
    }), t[4] = c) : c = t[4];
    let l;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (l = (0, Z.jsx)(`th`, {
        className: `pe-3 text-start`,
        children: (0, Z.jsx)(T, {
            ...$.userColumn
        })
    }), t[5] = l) : l = t[5];
    let u;
    t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, Z.jsx)(T, {
        ...$.currentStreakColumn
    }), t[6] = u) : u = t[6];
    let d;
    t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, Z.jsx)(x, {
        className: `icon-xs`,
        "aria-hidden": `true`
    }), t[7] = d) : d = t[7];
    let p;
    t[8] === s ? p = t[9] : (p = (0, Z.jsx)(`button`, {
        type: `button`,
        "aria-label": s,
        className: `text-token-text-tertiary hover:text-token-text-primary flex items-center rounded-sm transition-colors`,
        children: d
    }), t[8] = s, t[9] = p);
    let m;
    t[10] !== s || t[11] !== p ? (m = (0, Z.jsx)(`th`, {
        className: `w-28 pe-3 text-end`,
        children: (0, Z.jsxs)(`div`, {
            className: `flex items-center justify-end gap-1`,
            children: [u, (0, Z.jsx)(f, {
                triggerAs: null,
                label: s,
                side: `top`,
                children: p
            })]
        })
    }), t[10] = s, t[11] = p, t[12] = m) : m = t[12];
    let h;
    t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (h = (0, Z.jsx)(T, {
        ...$.tokensColumn
    }), t[13] = h) : h = t[13];
    let g;
    t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (g = (0, Z.jsx)(x, {
        className: `icon-xs`,
        "aria-hidden": `true`
    }), t[14] = g) : g = t[14];
    let _;
    t[15] === a ? _ = t[16] : (_ = (0, Z.jsx)(`button`, {
        type: `button`,
        "aria-label": a,
        className: `text-token-text-tertiary hover:text-token-text-primary flex items-center rounded-sm transition-colors`,
        children: g
    }), t[15] = a, t[16] = _);
    let v;
    t[17] !== _ || t[18] !== a ? (v = (0, Z.jsx)(`th`, {
        className: `w-36 text-end`,
        children: (0, Z.jsxs)(`div`, {
            className: `flex items-center justify-end gap-1`,
            children: [h, (0, Z.jsx)(f, {
                triggerAs: null,
                label: a,
                side: `top`,
                narrow: !0,
                children: _
            })]
        })
    }), t[17] = _, t[18] = a, t[19] = v) : v = t[19];
    let y;
    t[20] !== v || t[21] !== m ? (y = (0, Z.jsx)(`thead`, {
        children: (0, Z.jsxs)(`tr`, {
            className: `text-token-text-secondary h-10 text-xs font-semibold`,
            children: [c, l, m, v]
        })
    }), t[20] = v, t[21] = m, t[22] = y) : y = t[22];
    let b;
    if (t[23] !== r || t[24] !== n) {
        let e;
        t[26] === r ? e = t[27] : (e = e => (0, Z.jsxs)(`tr`, {
            className: `h-[58px]`,
            children: [(0, Z.jsx)(`td`, {
                className: `pe-3`,
                children: (0, Z.jsx)(Ve, {
                    rank: e.rank
                })
            }), (0, Z.jsxs)(`td`, {
                className: `min-w-0 pe-3`,
                children: [(0, Z.jsx)(`div`, {
                    className: `truncate text-sm leading-5 font-medium`,
                    children: e.displayName
                }), (0, Z.jsx)(`div`, {
                    className: `text-token-text-tertiary truncate text-sm leading-5`,
                    children: e.secondaryLabel
                })]
            }), (0, Z.jsx)(`td`, {
                className: `pe-3 text-end text-sm leading-5 font-medium tabular-nums`,
                children: Ge(r, e.currentStreak)
            }), (0, Z.jsx)(`td`, {
                className: `text-end text-sm leading-5 font-medium tabular-nums`,
                children: r.formatNumber(e.textTokens)
            })]
        }, `${e.rank}-${e.userId}`), t[26] = r, t[27] = e), b = n.map(e), t[23] = r, t[24] = n, t[25] = b
    } else b = t[25];
    let S;
    t[28] === b ? S = t[29] : (S = (0, Z.jsx)(`tbody`, {
        children: b
    }), t[28] = b, t[29] = S);
    let C;
    return t[30] !== y || t[31] !== S ? (C = (0, Z.jsxs)(`table`, {
        className: `w-full table-fixed border-collapse`,
        children: [y, S]
    }), t[30] = y, t[31] = S, t[32] = C) : C = t[32], C
}

function Ve(e) {
    "use forget";
    let t = (0, Y.c)(9),
        {
            rank: n
        } = e,
        r;
    t[0] === n ? r = t[1] : (r = He(n), t[0] = n, t[1] = r);
    let i = r;
    if (i) {
        let e;
        t[2] === i.Icon ? e = t[3] : (e = (0, Z.jsx)(i.Icon, {
            className: `h-6 w-6`
        }), t[2] = i.Icon, t[3] = e);
        let n;
        return t[4] !== e || t[5] !== i.className ? (n = (0, Z.jsx)(`div`, {
            className: i.className,
            children: e
        }), t[4] = e, t[5] = i.className, t[6] = n) : n = t[6], n
    }
    let a;
    return t[7] === n ? a = t[8] : (a = (0, Z.jsx)(`div`, {
        className: `border-token-border-default text-token-text-tertiary flex h-10 w-10 items-center justify-center rounded-full border text-sm tabular-nums`,
        children: n
    }), t[7] = n, t[8] = a), a
}

function He(e) {
    switch (e) {
        case 1:
            return {
                Icon: ge, className: `flex h-10 w-10 items-center justify-center rounded-full border border-[#FFC300]`
            };
        case 2:
            return {
                Icon: he, className: `flex h-10 w-10 items-center justify-center rounded-full border border-[#C7C7C7]`
            };
        case 3:
            return {
                Icon: fe, className: `flex h-10 w-10 items-center justify-center rounded-full border border-[#D19A7A]`
            };
        default:
            return
    }
}

function Ue(e) {
    return typeof e.name == `string` && e.name.trim() !== `` ? e.name : (e.email?.split(`@`)[0] ?? e.user_id).split(/[._-]+/u).map(e => e.trim()).filter(Boolean).map(We).join(` `) || e.user_id
}

function We(e) {
    return e.length === 0 ? e : `${e[0]?.toUpperCase()??``}${e.slice(1)}`
}

function Ge(e, t) {
    return t == null ? `-` : e.formatNumber(t)
}

function Ke(e) {
    return Xe.some(t => t === e)
}

function qe(e) {
    switch (e) {
        case `7d`:
            return $.lastSevenDays;
        default:
            return $.lastThirtyDays
    }
}

function Je(e) {
    let t = e.formatMessage($.tokensColumnTooltip);
    return Ae({
        configLabel: l(`3774971069`).get(`tooltip`, t),
        fallbackLabel: t
    })
}
var Y, X, Z, Q, Ye, Xe, Ze, $, Qe = e((() => {
    Y = O(), ve(), ye(), d(), ce(), pe(), n(), p(), P(), F(), me(), i(), be(), A(), h(), c(), m(), b(), z(), xe(), V(), U(), we(), ae(), je(), q(), le(), k(), X = t(D()), te(), S(), a(), Z = C(), Q = 100, Ye = `https://openaiassets.blob.core.windows.net/$web/codex/codex-invite-promo-bg.png`, Xe = [`7d`, `30d`], Ze = [{
        rank: 1,
        userId: `leaderboard-preview-user-1`,
        displayName: `Morgan Lee`,
        secondaryLabel: `morgan@example.com`,
        currentStreak: 6,
        textTokens: 260437860
    }, {
        rank: 2,
        userId: `leaderboard-preview-user-2`,
        displayName: `Priya Shah`,
        secondaryLabel: `priya@example.com`,
        currentStreak: 5,
        textTokens: 125685609
    }, {
        rank: 3,
        userId: `leaderboard-preview-user-3`,
        displayName: `Jordan Kim`,
        secondaryLabel: `jordan@example.com`,
        currentStreak: 6,
        textTokens: 74144553
    }, {
        rank: 4,
        userId: `leaderboard-preview-user-4`,
        displayName: `Taylor Reed`,
        secondaryLabel: `taylor@example.com`,
        currentStreak: 4,
        textTokens: 42702447
    }, {
        rank: 5,
        userId: `leaderboard-preview-user-5`,
        displayName: `Riley Chen`,
        secondaryLabel: `riley@example.com`,
        currentStreak: 2,
        textTokens: 32823987
    }, {
        rank: 6,
        userId: `leaderboard-preview-user-6`,
        displayName: `Avery Brooks`,
        secondaryLabel: `avery@example.com`,
        currentStreak: 0,
        textTokens: 17296270
    }, {
        rank: 7,
        userId: `leaderboard-preview-user-7`,
        displayName: `Casey Park`,
        secondaryLabel: `casey@example.com`,
        currentStreak: 3,
        textTokens: 15630325
    }, {
        rank: 8,
        userId: `leaderboard-preview-user-8`,
        displayName: `Jamie Ford`,
        secondaryLabel: `jamie@example.com`,
        currentStreak: 0,
        textTokens: 11102720
    }], $ = w({
        title: {
            id: `codex.tokenUsageLeaderboard.pageTitle.codex`,
            defaultMessage: `Codex Leaderboard`
        },
        subtitle: {
            id: `codex.tokenUsageLeaderboard.subtitle.workspaceTokenVolume`,
            defaultMessage: `Token volume in your workspace`
        },
        profileMenuButtonLabel: {
            id: `codex.tokenUsageLeaderboard.profileMenuButtonLabel`,
            defaultMessage: `Open profile menu`
        },
        rankColumn: {
            id: `codex.tokenUsageLeaderboard.rankColumn`,
            defaultMessage: `Rank`
        },
        userColumn: {
            id: `codex.tokenUsageLeaderboard.userColumn`,
            defaultMessage: `User`
        },
        tokensColumn: {
            id: `codex.tokenUsageLeaderboard.tokensColumn`,
            defaultMessage: `Tokens`
        },
        currentStreakColumn: {
            id: `codex.tokenUsageLeaderboard.currentStreakColumn`,
            defaultMessage: `Streak`
        },
        currentStreakTooltip: {
            id: `codex.tokenUsageLeaderboard.currentStreakColumn.tooltip`,
            defaultMessage: `Current Codex activity streak within the available data window`
        },
        tokensColumnTooltip: {
            id: `codex.tokenUsageLeaderboard.tokensColumn.tooltip`,
            defaultMessage: `Only includes tokens tracked after token-based pricing was enabled`
        },
        pageJumpLabel: {
            id: `codex.tokenUsageLeaderboard.pageJumpLabel`,
            defaultMessage: `Page`
        },
        pageJumpInputLabel: {
            id: `codex.tokenUsageLeaderboard.pageJumpInputLabel`,
            defaultMessage: `Page number`
        },
        pageJumpOf: {
            id: `codex.tokenUsageLeaderboard.pageJumpOf`,
            defaultMessage: `of {pageCount}`
        },
        lastSevenDays: {
            id: `codex.tokenUsageLeaderboard.lastSevenDays`,
            defaultMessage: `Last 7 days`
        },
        lastThirtyDays: {
            id: `codex.tokenUsageLeaderboard.lastThirtyDays`,
            defaultMessage: `Last 30 days`
        },
        errorMessage: {
            id: `codex.tokenUsageLeaderboard.error`,
            defaultMessage: `We couldn't load the leaderboard right now.`
        },
        retryButton: {
            id: `codex.tokenUsageLeaderboard.retry`,
            defaultMessage: `Retry`
        },
        emptyMessage: {
            id: `codex.tokenUsageLeaderboard.empty`,
            defaultMessage: `No token usage found for this time range.`
        },
        emptySearchMessage: {
            id: `codex.tokenUsageLeaderboard.emptySearch`,
            defaultMessage: `No users matched that search.`
        },
        searchInputAriaLabel: {
            id: `codex.tokenUsageLeaderboard.searchInputAriaLabel`,
            defaultMessage: `Search leaderboard by name or email`
        },
        searchInputPlaceholder: {
            id: `codex.tokenUsageLeaderboard.searchInputPlaceholder`,
            defaultMessage: `Search`
        },
        downloadAppBannerTitle: {
            id: `codex.tokenUsageLeaderboard.downloadAppBannerTitle`,
            defaultMessage: `Try Codex today`
        },
        downloadAppBannerButton: {
            id: `codex.tokenUsageLeaderboard.downloadAppBannerButton`,
            defaultMessage: `Download`
        },
        downloadAppBannerSubtitle: {
            id: `codex.tokenUsageLeaderboard.downloadAppBannerSubtitle`,
            defaultMessage: `A coding agent that helps you build and ship with AI.`
        },
        downloadAppBannerButtonLabel: {
            id: `codex.tokenUsageLeaderboard.downloadAppBannerButtonLabel`,
            defaultMessage: `Download Codex app`
        },
        restrictedMessage: {
            id: `codex.tokenUsageLeaderboard.restrictedMessage`,
            defaultMessage: `Leaderboards are now restricted to workspace admins. Reach out to your admin for more information.`
        }
    })
}));

function $e() {
    "use forget";
    let e = (0, et.c)(12),
        t = r(),
        {
            hasAccess: n,
            isLoading: i
        } = W(),
        a;
    e[0] === t ? a = e[1] : (a = t?.data.role != null && de(t.data.role), e[0] = t, e[1] = a);
    let o = a,
        s;
    e[2] === t ? s = e[3] : (s = K(t?.getWorkspaceId()), e[2] = t, e[3] = s);
    let c = s,
        l, u;
    if (e[4] !== c || e[5] !== n || e[6] !== o || e[7] !== i ? (l = () => {
            !n || !o || i || window.location.assign(c)
        }, u = [c, n, o, i], e[4] = c, e[5] = n, e[6] = o, e[7] = i, e[8] = l, e[9] = u) : (l = e[8], u = e[9]), (0, tt.useEffect)(l, u), i || n && o) return null;
    if (!n) {
        let t;
        return e[10] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, nt.jsx)(ne, {
            to: `/`,
            replace: !0
        }), e[10] = t) : t = e[10], t
    }
    let d;
    return e[11] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, nt.jsx)(Me, {
        isRestricted: !0
    }), e[11] = d) : d = e[11], d
}
var et, tt, nt, rt = e((() => {
        et = O(), j(), v(), Ee(), G(), Qe(), tt = t(D()), S(), nt = C()
    })),
    it, at, ot, st, ct = e((() => {
        S(), it = O(), rt(), at = C(), ot = () => [{
            title: `Codex Token Usage`
        }], st = E(function() {
            "use forget";
            let e = (0, it.c)(1),
                t;
            return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, at.jsx)($e, {}), e[0] = t) : t = e[0], t
        })
    }));
e((() => {
    ct()
}))();
export {
    st as
    default, ot as meta
};
//# sourceMappingURL=leaderboard-edlq4egk.js.map
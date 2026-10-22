import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    $z as r,
    Ait as i,
    Ant as a,
    Int as o,
    Jj as s,
    L5 as c,
    Lat as l,
    Mnt as u,
    Qz as d,
    R5 as f,
    Rat as p,
    Rnt as m,
    Snt as h,
    Yj as g,
    _L as _,
    b5 as ee,
    bnt as v,
    c7 as y,
    drt as b,
    eE as x,
    hL as S,
    hrt as C,
    hs as w,
    jnt as te,
    k8 as T,
    kit as E,
    l7 as D,
    n0 as ne,
    nL as O,
    o as k,
    pnt as A,
    q1 as j,
    s as M,
    tL as N,
    vG as re,
    vat as ie,
    xG as P,
    xat as ae,
    yat as F,
    ys as I,
    z1 as oe
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    At as se,
    Bn as L,
    Ht as R,
    Ln as z,
    Nn as B,
    Nt as ce,
    Q as V,
    Rn as H,
    Ut as U,
    Vn as W,
    Zt as le,
    an as ue,
    wn as G,
    zn as de
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Ilt as fe,
    MJ as pe,
    O8 as me,
    Plt as K,
    jJ as he,
    k8 as ge
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    Al as _e,
    bC as q,
    jl as ve,
    xC as ye
} from "./30901919-lgbmg5s09xld40kt.js";
import {
    AS as be,
    jS as xe,
    lC as Se,
    zC as Ce
} from "./c2675c8c-otyjprdiowg2v8hl.js";
import {
    t as we
} from "./9ac7a75a-chp6ksomhx4r867p.js";
import {
    n as Te,
    o as Ee
} from "./e19f3910-bvgbooeepbr0f3hn.js";
import {
    a as De,
    o as J,
    r as Oe
} from "./6313cbac-e5hl863fl4prr1xq.js";

function ke(e) {
    let t = e;
    try {
        let n = c().getQueryData(N.queryKey),
            i = b();
        if (a() && !h() && !v() && n != null && (n.consent_analytics ?? !n.is_consent_required) && !_() && i.loadingStatus === `Ready` && i.getContext().user.customIDs?.stableID) {
            let n = crypto.randomUUID(),
                i = new URL(e);
            i.searchParams.set(`entry_id`, n), t = i.toString();
            let a = new URL(i);
            a.search = ``, a.hash = ``, r(new URL(`https://chatgpt.com/codex/open-app`), a, {
                surface: `browser`,
                fromSurface: `browser`,
                toSurface: `native_app`,
                reason: `desktop_login`,
                attribution: {
                    source: `desktop_login`,
                    entryId: n
                }
            }), o.flushStructuredEvents(250).catch(() => {})
        }
    } catch {}
    J(t)
}
var Ae = e((() => {
    d(), O(), S(), m(), f(), C(), A(), De()
}));

function je() {}

function Me(e) {
    return e.preventDefault()
}

function Ne(e) {
    return e.preventDefault()
}
var Pe, Y, X, Fe = e((() => {
    Pe = G(), x(), ge(), ye(), ve(), fe(), D(), H(), Y = L(), X = e => {
        "use forget";
        let t = (0, Pe.c)(12),
            {
                appBrand: r,
                onOpen: i
            } = e,
            a;
        t[0] === r ? a = t[1] : (a = r === `chatgpt` ? (0, Y.jsx)(B, {
            id: `wham.codexOpenApp.loginSuccess.chatgptTitle`,
            defaultMessage: `Signed in to ChatGPT`
        }) : (0, Y.jsx)(B, {
            id: `wham.codexOpenApp.loginSuccess.title`,
            defaultMessage: `Signed in to Codex`
        }), t[0] = r, t[1] = a);
        let o;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, Y.jsx)(`div`, {
            className: `fixed start-5 top-[18px]`,
            children: (0, Y.jsx)(me, {
                className: `w-[81px]`
            })
        }), t[2] = o) : o = t[2];
        let s;
        t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, Y.jsx)(`p`, {
            className: `text-gray-solid-500 [font-feature-settings:'liga'_off,'clig'_off] text-sm leading-5 tracking-[-0.18px] dark:text-white/65`,
            children: (0, Y.jsx)(B, {
                id: `wham.codexOpenApp.loginSuccess.status`,
                defaultMessage: `You’re signed in and may close this tab`
            })
        }), t[3] = s) : s = t[3];
        let c;
        t[4] !== r || t[5] !== i ? (c = i && (0, Y.jsx)(n, {
            type: `button`,
            color: `custom`,
            className: y(`bg-gray-solid-0 text-gray-solid-1000 hover:border-gray-solid-150 hover:bg-gray-solid-50 dark:text-gray-solid-300 rounded-full border border-gray-100 text-sm leading-5 font-[510] tracking-[-0.154px] dark:border-white/[0.08] dark:bg-white/5 dark:hover:border-white/[0.16] dark:hover:bg-white/[0.08]`, r === `chatgpt` ? `px-6 py-[13px]` : `min-h-9 py-2 ps-3.5 pe-4`),
            contentWrapperClassName: `gap-2`,
            onClick: i,
            children: r === `chatgpt` ? (0, Y.jsxs)(Y.Fragment, {
                children: [(0, Y.jsx)(q, {
                    className: `icon`,
                    "aria-hidden": !0
                }), (0, Y.jsx)(B, {
                    id: `wham.codexOpenApp.loginSuccess.openChatgptButton`,
                    defaultMessage: `Open ChatGPT`
                })]
            }) : (0, Y.jsxs)(Y.Fragment, {
                children: [(0, Y.jsx)(_e, {
                    className: `icon`,
                    "aria-hidden": !0
                }), (0, Y.jsx)(B, {
                    id: `wham.codexOpenApp.loginSuccess.openButton`,
                    defaultMessage: `Open Codex`
                })]
            })
        }), t[4] = r, t[5] = i, t[6] = c) : c = t[6];
        let l;
        t[7] === c ? l = t[8] : (l = (0, Y.jsx)(K.Contents, {
            className: `overflow-hidden`,
            children: (0, Y.jsxs)(`div`, {
                className: `bg-gray-solid-0 text-gray-solid-1000 dark:bg-gray-solid-900 dark:text-gray-solid-0 h-full`,
                children: [o, (0, Y.jsx)(`main`, {
                    className: `flex h-full items-center justify-center px-6 py-14`,
                    children: (0, Y.jsxs)(`div`, {
                        className: `flex w-full max-w-[560px] flex-col items-center gap-8 text-center`,
                        children: [s, c]
                    })
                })]
            })
        }), t[7] = c, t[8] = l);
        let u;
        return t[9] !== a || t[10] !== l ? (u = (0, Y.jsx)(K, {
            open: !0,
            onOpenChange: je,
            onEscapeKeyDown: Me,
            onOpenAutoFocus: Ne,
            accessibleTitle: a,
            children: l
        }), t[9] = a, t[10] = l, t[11] = u) : u = t[11], u
    }
}));

function Ie(e) {
    let t = new URLSearchParams(e),
        n = t.get(`plugin_id`)?.trim();
    if (t.get(`target`) === `plugin` && n) return Oe(n);
    if (t.get(`target`) === `dots`) return Q;
    let r = t.get(`target`) === `launch`,
        i = Le(t, `codex_thread_id`),
        a = new URL(r ? He : Ve);
    if (!r && i != null) {
        a.pathname = `/${i}`;
        let e = t.get(`hostId`)?.trim();
        e && a.searchParams.set(`hostId`, e)
    }
    let o = t.get(`q`)?.trim(),
        s = p(t.get(`browserUrl`) ?? ``),
        c = t.getAll(`mode`),
        l = c.length === 1 && We.has(c[0]) ? c[0] : null;
    return c.length === 0 && t.get(`fallback`) === `work` && o != null && o.length > 0 && (l = `work`), !r && o != null && o.length > 0 && a.searchParams.set(`prompt`, o), !r && i == null && l != null && a.searchParams.set(`mode`, l), !r && (s?.protocol === `http:` || s?.protocol === `https:`) && s.username.length === 0 && s.password.length === 0 && a.searchParams.set(`browserUrl`, s.toString()), a.toString()
}

function Le(e, t) {
    let n = e.get(t)?.trim();
    return n != null && ue(n) ? n : null
}

function Re() {
    return g() && document.visibilityState === `visible`
}
var ze, Be, Z, Ve, He, Q, Ue, We, Ge, Ke, qe, Je, $, Ye, Xe = e((() => {
    V(), ze = G(), x(), be(), Se(), ye(), T(), j(), I(), P(), E(), F(), l(), f(), A(), s(), Ee(), De(), Ae(), Fe(), pe(), M(), Be = t(W()), H(), le(), Z = L(), Ve = `codex://threads/new`, He = `codex://launch`, Q = `codex://dots`, Ue = 1500, We = new Set([`chat`, `work`, `codex`]), Ge = `https://chatgpt.com/download`, Ke = {
        hasRouteMeta: !0,
        useScrollRestoration: !0
    }, qe = () => [], Je = R(function() {
        "use forget";
        let e = (0, ze.c)(52),
            t = de(),
            r = se(),
            a = new URLSearchParams(r.search),
            o = u() || a.get(`target`) === `plugin` && te(),
            s;
        e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (s = we(), e[0] = s) : s = e[0];
        let l = s,
            d = ce(),
            f;
        e[1] === r.search ? f = e[2] : (f = Ie(r.search), e[1] = r.search, e[2] = f);
        let p = f,
            m;
        e[3] === Symbol.for(`react.memo_cache_sentinel`) ? (m = {
            key: `chatgpt-codex-download`,
            allowUnauthenticatedTracking: !0
        }, e[3] = m) : m = e[3];
        let {
            trackSelectedPixels: h
        } = xe(m), g;
        e[4] === Symbol.for(`react.memo_cache_sentinel`) ? (g = {
            key: Ce.CODEX_DOWNLOAD,
            allowUnauthenticatedTracking: !0
        }, e[4] = g) : g = e[4];
        let {
            trackSelectedPixels: _
        } = xe(g), v;
        e[5] !== _ || e[6] !== h ? (v = () => {
            _(), h()
        }, e[5] = _, e[6] = h, e[7] = v) : v = e[7];
        let y = v,
            b = a.get(`source`),
            x = a.get(`app_brand`) === `chatgpt` ? `chatgpt` : `codex`,
            S = b === `login` || b === `cli-login`,
            C = b === `cli-login`,
            T = b === `login` && x === `chatgpt`,
            E = a.get(`fallback`) === `work` && a.get(`target`) !== `launch` && a.get(`target`) !== `dots` && a.get(`target`) !== `plugin`,
            D = E ? a.get(`q`)?.trim() : void 0,
            O = E ? Le(a, `chatgpt_conversation_id`) : null,
            k = a.get(`account_id`)?.trim(),
            A, j;
        e[8] !== O || e[9] !== D || e[10] !== p || e[11] !== k || e[12] !== T || e[13] !== C || e[14] !== o || e[15] !== r.pathname || e[16] !== r.search || e[17] !== d ? (A = () => {
            if (C) return;
            if (!D && O == null) {
                o || (T ? ke(p) : J(p));
                return
            }
            let e = new AbortController,
                t = async () => {
                    if (e.signal.aborted) return;
                    if (!i()) {
                        d(`/auth/login?next=${encodeURIComponent(`${r.pathname}${r.search}`)}`, {
                            replace: !0
                        });
                        return
                    }
                    if (k && ie.getCookie(ae.Workspace) !== k) {
                        let t = c();
                        if (await t.ensureQueryData(oe()), e.signal.aborted) return;
                        let {
                            updatedAccount: n
                        } = await ne(t, k);
                        if (!n) return
                    }
                    if (e.signal.aborted) return;
                    let t = new URLSearchParams(r.search),
                        n = new URLSearchParams({
                            surface: re.TPP
                        });
                    if (O != null) {
                        D && (n.set(`prompt`, D), n.set(`promptSource`, `codex-app`)), window.location.replace(`/c/${encodeURIComponent(O)}?${n}`);
                        return
                    }
                    let a = t.get(w);
                    if (a) {
                        n.set(w, a);
                        let e = t.get(`prompt`);
                        e && n.set(`prompt`, e)
                    } else D && (n.set(`prompt`, D), n.set(`promptSource`, `codex-app`));
                    window.location.replace(`/?${n}`)
                };
            if (o) return t(), () => e.abort();
            let n = !1,
                a = !1,
                s, l = () => {
                    window.clearTimeout(s), s = void 0
                },
                u = () => {
                    a = !0, l(), e.abort()
                },
                f = () => {
                    n && document.visibilityState === `hidden` && u()
                };
            window.addEventListener(`pagehide`, u, {
                once: !0
            }), document.addEventListener(`visibilitychange`, f);
            let m = ee(Re, e => {
                if (!e) {
                    l();
                    return
                }
                if (!(a || s !== void 0) && (s = window.setTimeout(t, Ue), !n)) {
                    n = !0;
                    try {
                        J(p)
                    } catch {
                        l(), t()
                    }
                }
            }, {
                fireImmediately: !0
            });
            return () => {
                e.abort(), l(), window.removeEventListener(`pagehide`, u), document.removeEventListener(`visibilitychange`, f), m()
            }
        }, j = [D, O, p, C, T, o, k, r.pathname, r.search, d], e[8] = O, e[9] = D, e[10] = p, e[11] = k, e[12] = T, e[13] = C, e[14] = o, e[15] = r.pathname, e[16] = r.search, e[17] = d, e[18] = A, e[19] = j) : (A = e[18], j = e[19]), (0, Be.useEffect)(A, j);
        let M;
        e[20] === t ? M = e[21] : (M = t.formatMessage({
            id: `wham.codexOpenApp.pageTitle`,
            defaultMessage: `Open ChatGPT Desktop`
        }), e[20] = t, e[21] = M);
        let N;
        e[22] === M ? N = e[23] : (N = (0, Z.jsx)(`title`, {
            children: M
        }), e[22] = M, e[23] = N);
        let P = N;
        if (S) {
            let t;
            e[24] !== x || e[25] !== p || e[26] !== T || e[27] !== C ? (t = C ? (0, Z.jsx)(X, {
                appBrand: x
            }) : (0, Z.jsx)(X, {
                appBrand: x,
                onOpen: () => {
                    T ? ke(p) : J(p)
                }
            }), e[24] = x, e[25] = p, e[26] = T, e[27] = C, e[28] = t) : t = e[28];
            let n;
            return e[29] !== P || e[30] !== t ? (n = (0, Z.jsxs)(Z.Fragment, {
                children: [P, t]
            }), e[29] = P, e[30] = t, e[31] = n) : n = e[31], n
        }
        let F = o ? $.chatgptMobileTitle : $.chatgptTitle,
            I;
        e[32] === Symbol.for(`react.memo_cache_sentinel`) ? (I = (0, Z.jsx)(`div`, {
            className: `mb-10 flex size-[88px] items-center justify-center`,
            "aria-hidden": !0,
            children: (0, Z.jsx)(q, {
                className: `size-16`
            })
        }), e[32] = I) : I = e[32];
        let L = o ? `mb-9 text-[34px] leading-10 font-semibold tracking-[-0.02em]` : `mb-4 text-[34px] leading-10 font-semibold tracking-[-0.02em]`,
            R;
        e[33] === F ? R = e[34] : (R = (0, Z.jsx)(B, {
            ...F
        }), e[33] = F, e[34] = R);
        let z;
        e[35] !== L || e[36] !== R ? (z = (0, Z.jsx)(`h1`, {
            className: L,
            children: R
        }), e[35] = L, e[36] = R, e[37] = z) : z = e[37];
        let V;
        e[38] === o ? V = e[39] : (V = !o && (0, Z.jsx)(`p`, {
            className: `text-token-text-secondary mb-9 max-w-[520px] text-[15px] leading-[22px]`,
            children: (0, Z.jsx)(B, {
                ...$.chatgptBody
            })
        }), e[38] = o, e[39] = V);
        let H;
        e[40] !== l || e[41] !== p || e[42] !== o || e[43] !== y ? (H = (0, Z.jsx)(`div`, {
            className: `flex flex-wrap items-center justify-center gap-3`,
            children: o ? (0, Z.jsx)(n, {
                as: `a`,
                to: Ge,
                color: `primary`,
                className: `h-[34px] min-w-[106px] rounded-full px-4 text-sm leading-[18px] font-medium`,
                children: (0, Z.jsx)(B, {
                    ...$.learnMoreButton
                })
            }) : (0, Z.jsxs)(Z.Fragment, {
                children: [(0, Z.jsx)(n, {
                    type: `button`,
                    color: `primary`,
                    className: `h-[34px] min-w-[106px] rounded-full px-4 text-sm leading-[18px] font-medium`,
                    onClick: () => {
                        J(p)
                    },
                    children: (0, Z.jsx)(B, {
                        ...$.chatgptOpenButton
                    })
                }), (0, Z.jsx)(Te, {
                    color: `secondary`,
                    className: `h-[34px] min-w-[106px] rounded-full px-4 text-sm leading-[18px] font-medium`,
                    signalSurface: `codex_open_app`,
                    size: `medium`,
                    onClick: () => {
                        l != null && (he.recordCodexAppSurfaceAction(`open_app`, `download`), y())
                    }
                })]
            })
        }), e[40] = l, e[41] = p, e[42] = o, e[43] = y, e[44] = H) : H = e[44];
        let U;
        e[45] !== z || e[46] !== V || e[47] !== H ? (U = (0, Z.jsxs)(`section`, {
            className: `flex w-full max-w-[520px] -translate-y-2 flex-col items-center text-center`,
            children: [I, z, V, H]
        }), e[45] = z, e[46] = V, e[47] = H, e[48] = U) : U = e[48];
        let W;
        return e[49] !== P || e[50] !== U ? (W = (0, Z.jsxs)(`main`, {
            className: `light bg-token-bg-primary text-token-text-primary flex min-h-screen flex-col items-center justify-center px-6 py-10`,
            children: [P, U]
        }), e[49] = P, e[50] = U, e[51] = W) : W = e[51], W
    }), $ = z({
        chatgptTitle: {
            id: `wham.codexOpenApp.chatgptTitle`,
            defaultMessage: `Opening ChatGPT`
        },
        chatgptBody: {
            id: `wham.codexOpenApp.chatgptBody`,
            defaultMessage: `We’re opening your ChatGPT app. If it doesn’t open, click the button below.`
        },
        chatgptMobileTitle: {
            id: `wham.codexOpenApp.chatgptMobileTitle`,
            defaultMessage: `Open the ChatGPT desktop app on your computer`
        },
        chatgptOpenButton: {
            id: `wham.codexOpenApp.chatgptOpenButton`,
            defaultMessage: `Open ChatGPT`
        },
        learnMoreButton: {
            id: `wham.codexOpenApp.learnMoreButton`,
            defaultMessage: `Learn more`
        }
    }), Ye = U(k)
}));
export {
    qe as a, Xe as i, Je as n, Ke as r, Ye as t
};
//# sourceMappingURL=bae3234b-50ngfdydb4j5gpsd.js.map
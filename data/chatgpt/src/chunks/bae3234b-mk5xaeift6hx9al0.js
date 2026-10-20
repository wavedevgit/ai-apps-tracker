import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as n,
    Gz as r,
    JT as i,
    Kz as a,
    R1 as o,
    T5 as s,
    Uj as c,
    Wj as l,
    X5 as u,
    XI as d,
    Y5 as f,
    YT as p,
    Ytt as m,
    ZI as h,
    Znt as g,
    bat as _,
    bnt as v,
    dit as y,
    eat as ee,
    fL as b,
    fit as te,
    fnt as x,
    g8 as S,
    int as C,
    mnt as ne,
    ms as w,
    nnt as T,
    o as E,
    pnt as re,
    q1 as ie,
    qnt as D,
    rat as ae,
    s as O,
    s5 as oe,
    tat as k,
    uL as A,
    vnt as j,
    vs as M,
    w5 as N,
    wG as P,
    xG as se,
    yat as F
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    At as ce,
    Bn as I,
    Ht as L,
    Ln as R,
    Nn as z,
    Nt as le,
    Q as B,
    Rn as V,
    Ut as H,
    Vn as U,
    Zt as ue,
    an as de,
    wn as W,
    zn as fe
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Blt as G,
    E8 as pe,
    Hlt as me,
    MJ as he,
    T8 as ge,
    jJ as _e
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    Al as ve,
    bC as K,
    jl as ye,
    xC as q
} from "./30901919-e8h11sw136qen6v0.js";
import {
    MS as be,
    NS as xe,
    VC as Se,
    dC as Ce
} from "./c2675c8c-ejvs9hq3rwjwsbcv.js";
import {
    t as we
} from "./9ac7a75a-wz31coczqbyok3qn.js";
import {
    n as Te,
    o as Ee
} from "./e19f3910-loev8shk5up3qwjb.js";
import {
    a as De,
    o as J,
    r as Oe
} from "./6313cbac-e5hl863fl4prr1xq.js";

function ke(e) {
    let t = e;
    try {
        let n = N().getQueryData(d.queryKey),
            r = D();
        if (x() && !C() && !T() && n != null && (n.consent_analytics ?? !n.is_consent_required) && !b() && r.loadingStatus === `Ready` && r.getContext().user.customIDs?.stableID) {
            let n = crypto.randomUUID(),
                r = new URL(e);
            r.searchParams.set(`entry_id`, n), t = r.toString();
            let i = new URL(r);
            i.search = ``, i.hash = ``, a(new URL(`https://chatgpt.com/codex/open-app`), i, {
                surface: `browser`,
                fromSurface: `browser`,
                toSurface: `native_app`,
                reason: `desktop_login`,
                attribution: {
                    source: `desktop_login`,
                    entryId: n
                }
            }), j.flushStructuredEvents(250).catch(() => {})
        }
    } catch {}
    J(t)
}
var Ae = e((() => {
    r(), h(), A(), v(), s(), g(), m(), De()
}));

function je() {}

function Me(e) {
    return e.preventDefault()
}

function Ne(e) {
    return e.preventDefault()
}
var Pe, Y, X, Fe = e((() => {
    Pe = W(), p(), pe(), q(), ye(), me(), u(), V(), Y = I(), X = e => {
        "use forget";
        let t = (0, Pe.c)(12),
            {
                appBrand: n,
                onOpen: r
            } = e,
            a;
        t[0] === n ? a = t[1] : (a = n === `chatgpt` ? (0, Y.jsx)(z, {
            id: `wham.codexOpenApp.loginSuccess.chatgptTitle`,
            defaultMessage: `Signed in to ChatGPT`
        }) : (0, Y.jsx)(z, {
            id: `wham.codexOpenApp.loginSuccess.title`,
            defaultMessage: `Signed in to Codex`
        }), t[0] = n, t[1] = a);
        let o;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, Y.jsx)(`div`, {
            className: `fixed start-5 top-[18px]`,
            children: (0, Y.jsx)(ge, {
                className: `w-[81px]`
            })
        }), t[2] = o) : o = t[2];
        let s;
        t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, Y.jsx)(`p`, {
            className: `text-gray-solid-500 [font-feature-settings:'liga'_off,'clig'_off] text-sm leading-5 tracking-[-0.18px] dark:text-white/65`,
            children: (0, Y.jsx)(z, {
                id: `wham.codexOpenApp.loginSuccess.status`,
                defaultMessage: `You’re signed in and may close this tab`
            })
        }), t[3] = s) : s = t[3];
        let c;
        t[4] !== n || t[5] !== r ? (c = r && (0, Y.jsx)(i, {
            type: `button`,
            color: `custom`,
            className: f(`bg-gray-solid-0 text-gray-solid-1000 hover:border-gray-solid-150 hover:bg-gray-solid-50 dark:text-gray-solid-300 rounded-full border border-gray-100 text-sm leading-5 font-[510] tracking-[-0.154px] dark:border-white/[0.08] dark:bg-white/5 dark:hover:border-white/[0.16] dark:hover:bg-white/[0.08]`, n === `chatgpt` ? `px-6 py-[13px]` : `min-h-9 py-2 ps-3.5 pe-4`),
            contentWrapperClassName: `gap-2`,
            onClick: r,
            children: n === `chatgpt` ? (0, Y.jsxs)(Y.Fragment, {
                children: [(0, Y.jsx)(K, {
                    className: `icon`,
                    "aria-hidden": !0
                }), (0, Y.jsx)(z, {
                    id: `wham.codexOpenApp.loginSuccess.openChatgptButton`,
                    defaultMessage: `Open ChatGPT`
                })]
            }) : (0, Y.jsxs)(Y.Fragment, {
                children: [(0, Y.jsx)(ve, {
                    className: `icon`,
                    "aria-hidden": !0
                }), (0, Y.jsx)(z, {
                    id: `wham.codexOpenApp.loginSuccess.openButton`,
                    defaultMessage: `Open Codex`
                })]
            })
        }), t[4] = n, t[5] = r, t[6] = c) : c = t[6];
        let l;
        t[7] === c ? l = t[8] : (l = (0, Y.jsx)(G.Contents, {
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
        return t[9] !== a || t[10] !== l ? (u = (0, Y.jsx)(G, {
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
        s = _(t.get(`browserUrl`) ?? ``),
        c = t.getAll(`mode`),
        l = c.length === 1 && We.has(c[0]) ? c[0] : null;
    return c.length === 0 && t.get(`fallback`) === `work` && o != null && o.length > 0 && (l = `work`), !r && o != null && o.length > 0 && a.searchParams.set(`prompt`, o), !r && i == null && l != null && a.searchParams.set(`mode`, l), !r && (s?.protocol === `http:` || s?.protocol === `https:`) && s.username.length === 0 && s.password.length === 0 && a.searchParams.set(`browserUrl`, s.toString()), a.toString()
}

function Le(e, t) {
    let n = e.get(t)?.trim();
    return n != null && de(n) ? n : null
}

function Re() {
    return l() && document.visibilityState === `visible`
}
var ze, Be, Z, Ve, He, Q, Ue, We, Ge, Ke, qe, Je, $, Ye, Xe = e((() => {
    B(), ze = W(), p(), be(), Ce(), q(), S(), o(), M(), P(), y(), k(), F(), s(), m(), c(), Ee(), De(), Ae(), Fe(), he(), O(), Be = t(U()), V(), ue(), Z = I(), Ve = `codex://threads/new`, He = `codex://launch`, Q = `codex://dots`, Ue = 1500, We = new Set([`chat`, `work`, `codex`]), Ge = `https://chatgpt.com/download`, Ke = {
        hasRouteMeta: !0,
        useScrollRestoration: !0
    }, qe = () => [], Je = L(function() {
        "use forget";
        let e = (0, ze.c)(52),
            t = fe(),
            r = ce(),
            a = new URLSearchParams(r.search),
            o = ne() || a.get(`target`) === `plugin` && re(),
            s;
        e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (s = we(), e[0] = s) : s = e[0];
        let c = s,
            l = le(),
            u;
        e[1] === r.search ? u = e[2] : (u = Ie(r.search), e[1] = r.search, e[2] = u);
        let d = u,
            f;
        e[3] === Symbol.for(`react.memo_cache_sentinel`) ? (f = {
            key: `chatgpt-codex-download`,
            allowUnauthenticatedTracking: !0
        }, e[3] = f) : f = e[3];
        let {
            trackSelectedPixels: p
        } = xe(f), m;
        e[4] === Symbol.for(`react.memo_cache_sentinel`) ? (m = {
            key: Se.CODEX_DOWNLOAD,
            allowUnauthenticatedTracking: !0
        }, e[4] = m) : m = e[4];
        let {
            trackSelectedPixels: h
        } = xe(m), g;
        e[5] !== h || e[6] !== p ? (g = () => {
            h(), p()
        }, e[5] = h, e[6] = p, e[7] = g) : g = e[7];
        let _ = g,
            v = a.get(`source`),
            y = a.get(`app_brand`) === `chatgpt` ? `chatgpt` : `codex`,
            b = v === `login` || v === `cli-login`,
            x = v === `cli-login`,
            S = v === `login` && y === `chatgpt`,
            C = a.get(`fallback`) === `work` && a.get(`target`) !== `launch` && a.get(`target`) !== `dots` && a.get(`target`) !== `plugin`,
            T = C ? a.get(`q`)?.trim() : void 0,
            E = C ? Le(a, `chatgpt_conversation_id`) : null,
            D = a.get(`account_id`)?.trim(),
            O, k;
        e[8] !== E || e[9] !== T || e[10] !== d || e[11] !== D || e[12] !== S || e[13] !== x || e[14] !== o || e[15] !== r.pathname || e[16] !== r.search || e[17] !== l ? (O = () => {
            if (x) return;
            if (!T && E == null) {
                o || (S ? ke(d) : J(d));
                return
            }
            let e = new AbortController,
                t = async () => {
                    if (e.signal.aborted) return;
                    if (!te()) {
                        l(`/auth/login?next=${encodeURIComponent(`${r.pathname}${r.search}`)}`, {
                            replace: !0
                        });
                        return
                    }
                    if (D && ee.getCookie(ae.Workspace) !== D) {
                        let t = N();
                        if (await t.ensureQueryData(n()), e.signal.aborted) return;
                        let {
                            updatedAccount: r
                        } = await ie(t, D);
                        if (!r) return
                    }
                    if (e.signal.aborted) return;
                    let t = new URLSearchParams(r.search),
                        i = new URLSearchParams({
                            surface: se.TPP
                        });
                    if (E != null) {
                        T && (i.set(`prompt`, T), i.set(`promptSource`, `codex-app`)), window.location.replace(`/c/${encodeURIComponent(E)}?${i}`);
                        return
                    }
                    let a = t.get(w);
                    if (a) {
                        i.set(w, a);
                        let e = t.get(`prompt`);
                        e && i.set(`prompt`, e)
                    } else T && (i.set(`prompt`, T), i.set(`promptSource`, `codex-app`));
                    window.location.replace(`/?${i}`)
                };
            if (o) return t(), () => e.abort();
            let i = !1,
                a = !1,
                s, c = () => {
                    window.clearTimeout(s), s = void 0
                },
                u = () => {
                    a = !0, c(), e.abort()
                },
                f = () => {
                    i && document.visibilityState === `hidden` && u()
                };
            window.addEventListener(`pagehide`, u, {
                once: !0
            }), document.addEventListener(`visibilitychange`, f);
            let p = oe(Re, e => {
                if (!e) {
                    c();
                    return
                }
                if (!(a || s !== void 0) && (s = window.setTimeout(t, Ue), !i)) {
                    i = !0;
                    try {
                        J(d)
                    } catch {
                        c(), t()
                    }
                }
            }, {
                fireImmediately: !0
            });
            return () => {
                e.abort(), c(), window.removeEventListener(`pagehide`, u), document.removeEventListener(`visibilitychange`, f), p()
            }
        }, k = [T, E, d, x, S, o, D, r.pathname, r.search, l], e[8] = E, e[9] = T, e[10] = d, e[11] = D, e[12] = S, e[13] = x, e[14] = o, e[15] = r.pathname, e[16] = r.search, e[17] = l, e[18] = O, e[19] = k) : (O = e[18], k = e[19]), (0, Be.useEffect)(O, k);
        let A;
        e[20] === t ? A = e[21] : (A = t.formatMessage({
            id: `wham.codexOpenApp.pageTitle`,
            defaultMessage: `Open ChatGPT Desktop`
        }), e[20] = t, e[21] = A);
        let j;
        e[22] === A ? j = e[23] : (j = (0, Z.jsx)(`title`, {
            children: A
        }), e[22] = A, e[23] = j);
        let M = j;
        if (b) {
            let t;
            e[24] !== y || e[25] !== d || e[26] !== S || e[27] !== x ? (t = x ? (0, Z.jsx)(X, {
                appBrand: y
            }) : (0, Z.jsx)(X, {
                appBrand: y,
                onOpen: () => {
                    S ? ke(d) : J(d)
                }
            }), e[24] = y, e[25] = d, e[26] = S, e[27] = x, e[28] = t) : t = e[28];
            let n;
            return e[29] !== M || e[30] !== t ? (n = (0, Z.jsxs)(Z.Fragment, {
                children: [M, t]
            }), e[29] = M, e[30] = t, e[31] = n) : n = e[31], n
        }
        let P = o ? $.chatgptMobileTitle : $.chatgptTitle,
            F;
        e[32] === Symbol.for(`react.memo_cache_sentinel`) ? (F = (0, Z.jsx)(`div`, {
            className: `mb-10 flex size-[88px] items-center justify-center`,
            "aria-hidden": !0,
            children: (0, Z.jsx)(K, {
                className: `size-16`
            })
        }), e[32] = F) : F = e[32];
        let I = o ? `mb-9 text-[34px] leading-10 font-semibold tracking-[-0.02em]` : `mb-4 text-[34px] leading-10 font-semibold tracking-[-0.02em]`,
            L;
        e[33] === P ? L = e[34] : (L = (0, Z.jsx)(z, {
            ...P
        }), e[33] = P, e[34] = L);
        let R;
        e[35] !== I || e[36] !== L ? (R = (0, Z.jsx)(`h1`, {
            className: I,
            children: L
        }), e[35] = I, e[36] = L, e[37] = R) : R = e[37];
        let B;
        e[38] === o ? B = e[39] : (B = !o && (0, Z.jsx)(`p`, {
            className: `text-token-text-secondary mb-9 max-w-[520px] text-[15px] leading-[22px]`,
            children: (0, Z.jsx)(z, {
                ...$.chatgptBody
            })
        }), e[38] = o, e[39] = B);
        let V;
        e[40] !== c || e[41] !== d || e[42] !== o || e[43] !== _ ? (V = (0, Z.jsx)(`div`, {
            className: `flex flex-wrap items-center justify-center gap-3`,
            children: o ? (0, Z.jsx)(i, {
                as: `a`,
                to: Ge,
                color: `primary`,
                className: `h-[34px] min-w-[106px] rounded-full px-4 text-sm leading-[18px] font-medium`,
                children: (0, Z.jsx)(z, {
                    ...$.learnMoreButton
                })
            }) : (0, Z.jsxs)(Z.Fragment, {
                children: [(0, Z.jsx)(i, {
                    type: `button`,
                    color: `primary`,
                    className: `h-[34px] min-w-[106px] rounded-full px-4 text-sm leading-[18px] font-medium`,
                    onClick: () => {
                        J(d)
                    },
                    children: (0, Z.jsx)(z, {
                        ...$.chatgptOpenButton
                    })
                }), (0, Z.jsx)(Te, {
                    color: `secondary`,
                    className: `h-[34px] min-w-[106px] rounded-full px-4 text-sm leading-[18px] font-medium`,
                    signalSurface: `codex_open_app`,
                    size: `medium`,
                    onClick: () => {
                        c != null && (_e.recordCodexAppSurfaceAction(`open_app`, `download`), _())
                    }
                })]
            })
        }), e[40] = c, e[41] = d, e[42] = o, e[43] = _, e[44] = V) : V = e[44];
        let H;
        e[45] !== R || e[46] !== B || e[47] !== V ? (H = (0, Z.jsxs)(`section`, {
            className: `flex w-full max-w-[520px] -translate-y-2 flex-col items-center text-center`,
            children: [F, R, B, V]
        }), e[45] = R, e[46] = B, e[47] = V, e[48] = H) : H = e[48];
        let U;
        return e[49] !== M || e[50] !== H ? (U = (0, Z.jsxs)(`main`, {
            className: `light bg-token-bg-primary text-token-text-primary flex min-h-screen flex-col items-center justify-center px-6 py-10`,
            children: [M, H]
        }), e[49] = M, e[50] = H, e[51] = U) : U = e[51], U
    }), $ = R({
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
    }), Ye = H(E)
}));
export {
    qe as a, Xe as i, Je as n, Ke as r, Ye as t
};
//# sourceMappingURL=bae3234b-mk5xaeift6hx9al0.js.map
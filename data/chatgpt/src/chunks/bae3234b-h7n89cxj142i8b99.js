import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    $z as r,
    A8 as i,
    Ant as a,
    Bnt as o,
    Crt as s,
    Dat as c,
    Eat as l,
    Gat as u,
    Jj as d,
    K5 as f,
    Kat as p,
    Knt as m,
    Lit as h,
    Ont as g,
    Qz as _,
    Rit as ee,
    Rnt as v,
    S5 as y,
    Wnt as b,
    Yj as x,
    _L as S,
    eE as C,
    hL as w,
    hs as T,
    i5 as te,
    kat as ne,
    n0 as re,
    nL as E,
    o as D,
    q1 as O,
    q5 as k,
    s as A,
    tL as j,
    vG as ie,
    x5 as ae,
    xG as M,
    xnt as N,
    yrt as P,
    ys as F,
    z1 as oe,
    znt as se
} from "./4813494d-mdvd4786a87166cc.js";
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
    MJ as pe,
    Nlt as me,
    O8 as he,
    jJ as ge,
    jlt as G,
    k8 as _e
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Ol as ve,
    kl as ye,
    vC as K,
    yC as be
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    KC as xe,
    LS as Se,
    RS as Ce,
    gC as we
} from "./c2675c8c-oz03twoan08d72ud.js";
import {
    t as Te
} from "./9ac7a75a-b2xe2u6rqme9vdc9.js";
import {
    n as Ee,
    o as De
} from "./e19f3910-nqncd9m6rjdlfk2l.js";
import {
    a as Oe,
    o as q,
    r as ke
} from "./6313cbac-e5hl863fl4prr1xq.js";

function Ae(e) {
    let t = e;
    try {
        let n = ae().getQueryData(j.queryKey),
            i = P();
        if (v() && !a() && !g() && n != null && (n.consent_analytics ?? !n.is_consent_required) && !S() && i.loadingStatus === `Ready` && i.getContext().user.customIDs?.stableID) {
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
            }), b.flushStructuredEvents(250).catch(() => {})
        }
    } catch {}
    q(t)
}
var je = e((() => {
    _(), E(), w(), m(), y(), s(), N(), Oe()
}));

function Me() {}

function Ne(e) {
    return e.preventDefault()
}

function Pe(e) {
    return e.preventDefault()
}
var Fe, J, Y, Ie = e((() => {
    Fe = W(), C(), _e(), be(), ye(), me(), k(), V(), J = I(), Y = e => {
        "use forget";
        let t = (0, Fe.c)(12),
            {
                appBrand: r,
                onOpen: i
            } = e,
            a;
        t[0] === r ? a = t[1] : (a = r === `chatgpt` ? (0, J.jsx)(z, {
            id: `wham.codexOpenApp.loginSuccess.chatgptTitle`,
            defaultMessage: `Signed in to ChatGPT`
        }) : (0, J.jsx)(z, {
            id: `wham.codexOpenApp.loginSuccess.title`,
            defaultMessage: `Signed in to Codex`
        }), t[0] = r, t[1] = a);
        let o;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, J.jsx)(`div`, {
            className: `fixed start-5 top-[18px]`,
            children: (0, J.jsx)(he, {
                className: `w-[81px]`
            })
        }), t[2] = o) : o = t[2];
        let s;
        t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, J.jsx)(`p`, {
            className: `text-gray-solid-500 [font-feature-settings:'liga'_off,'clig'_off] text-sm leading-5 tracking-[-0.18px] dark:text-white/65`,
            children: (0, J.jsx)(z, {
                id: `wham.codexOpenApp.loginSuccess.status`,
                defaultMessage: `You’re signed in and may close this tab`
            })
        }), t[3] = s) : s = t[3];
        let c;
        t[4] !== r || t[5] !== i ? (c = i && (0, J.jsx)(n, {
            type: `button`,
            color: `custom`,
            className: f(`bg-gray-solid-0 text-gray-solid-1000 hover:border-gray-solid-150 hover:bg-gray-solid-50 dark:text-gray-solid-300 rounded-full border border-gray-100 text-sm leading-5 font-[510] tracking-[-0.154px] dark:border-white/[0.08] dark:bg-white/5 dark:hover:border-white/[0.16] dark:hover:bg-white/[0.08]`, r === `chatgpt` ? `px-6 py-[13px]` : `min-h-9 py-2 ps-3.5 pe-4`),
            contentWrapperClassName: `gap-2`,
            onClick: i,
            children: r === `chatgpt` ? (0, J.jsxs)(J.Fragment, {
                children: [(0, J.jsx)(K, {
                    className: `icon`,
                    "aria-hidden": !0
                }), (0, J.jsx)(z, {
                    id: `wham.codexOpenApp.loginSuccess.openChatgptButton`,
                    defaultMessage: `Open ChatGPT`
                })]
            }) : (0, J.jsxs)(J.Fragment, {
                children: [(0, J.jsx)(ve, {
                    className: `icon`,
                    "aria-hidden": !0
                }), (0, J.jsx)(z, {
                    id: `wham.codexOpenApp.loginSuccess.openButton`,
                    defaultMessage: `Open Codex`
                })]
            })
        }), t[4] = r, t[5] = i, t[6] = c) : c = t[6];
        let l;
        t[7] === c ? l = t[8] : (l = (0, J.jsx)(G.Contents, {
            className: `overflow-hidden`,
            children: (0, J.jsxs)(`div`, {
                className: `bg-gray-solid-0 text-gray-solid-1000 dark:bg-gray-solid-900 dark:text-gray-solid-0 h-full`,
                children: [o, (0, J.jsx)(`main`, {
                    className: `flex h-full items-center justify-center px-6 py-14`,
                    children: (0, J.jsxs)(`div`, {
                        className: `flex w-full max-w-[560px] flex-col items-center gap-8 text-center`,
                        children: [s, c]
                    })
                })]
            })
        }), t[7] = c, t[8] = l);
        let u;
        return t[9] !== a || t[10] !== l ? (u = (0, J.jsx)(G, {
            open: !0,
            onOpenChange: Me,
            onEscapeKeyDown: Ne,
            onOpenAutoFocus: Pe,
            accessibleTitle: a,
            children: l
        }), t[9] = a, t[10] = l, t[11] = u) : u = t[11], u
    }
}));

function Le(e) {
    let t = new URLSearchParams(e),
        n = t.get(`plugin_id`)?.trim();
    if (t.get(`target`) === `plugin` && n) return ke(n);
    if (t.get(`target`) === `dots`) return Z;
    let r = t.get(`target`) === `launch`,
        i = Re(t, `codex_thread_id`),
        a = new URL(r ? Ue : He);
    if (!r && i != null) {
        a.pathname = `/${i}`;
        let e = t.get(`hostId`)?.trim();
        e && a.searchParams.set(`hostId`, e)
    }
    let o = t.get(`q`)?.trim(),
        s = p(t.get(`browserUrl`) ?? ``),
        c = t.getAll(`mode`),
        l = c.length === 1 && Ge.has(c[0]) ? c[0] : null;
    return c.length === 0 && t.get(`fallback`) === `work` && o != null && o.length > 0 && (l = `work`), !r && o != null && o.length > 0 && a.searchParams.set(`prompt`, o), !r && i == null && l != null && a.searchParams.set(`mode`, l), !r && (s?.protocol === `http:` || s?.protocol === `https:`) && s.username.length === 0 && s.password.length === 0 && a.searchParams.set(`browserUrl`, s.toString()), a.toString()
}

function Re(e, t) {
    let n = e.get(t)?.trim();
    return n != null && de(n) ? n : null
}

function ze() {
    return x() && document.visibilityState === `visible`
}
var Be, Ve, X, He, Ue, Z, We, Ge, Ke, qe, Je, Ye, Q, $, Xe = e((() => {
    B(), Be = W(), C(), Se(), we(), be(), i(), O(), F(), M(), h(), c(), u(), y(), N(), d(), De(), Oe(), je(), Ie(), pe(), A(), Ve = t(U()), V(), ue(), X = I(), He = `codex://threads/new`, Ue = `codex://launch`, Z = `codex://dots`, We = 1500, Ge = new Set([`chat`, `work`, `codex`]), Ke = `https://chatgpt.com/download`, qe = {
        hasRouteMeta: !0,
        useScrollRestoration: !0
    }, Je = () => [], Ye = L(function() {
        "use forget";
        let e = (0, Be.c)(52),
            t = fe(),
            r = ce(),
            i = new URLSearchParams(r.search),
            a = o() || i.get(`target`) === `plugin` && se(),
            s;
        e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (s = Te(), e[0] = s) : s = e[0];
        let c = s,
            u = le(),
            d;
        e[1] === r.search ? d = e[2] : (d = Le(r.search), e[1] = r.search, e[2] = d);
        let f = d,
            p;
        e[3] === Symbol.for(`react.memo_cache_sentinel`) ? (p = {
            key: `chatgpt-codex-download`,
            allowUnauthenticatedTracking: !0
        }, e[3] = p) : p = e[3];
        let {
            trackSelectedPixels: m
        } = Ce(p), h;
        e[4] === Symbol.for(`react.memo_cache_sentinel`) ? (h = {
            key: xe.CODEX_DOWNLOAD,
            allowUnauthenticatedTracking: !0
        }, e[4] = h) : h = e[4];
        let {
            trackSelectedPixels: g
        } = Ce(h), _;
        e[5] !== g || e[6] !== m ? (_ = () => {
            g(), m()
        }, e[5] = g, e[6] = m, e[7] = _) : _ = e[7];
        let v = _,
            y = i.get(`source`),
            b = i.get(`app_brand`) === `chatgpt` ? `chatgpt` : `codex`,
            x = y === `login` || y === `cli-login`,
            S = y === `cli-login`,
            C = y === `login` && b === `chatgpt`,
            w = i.get(`fallback`) === `work` && i.get(`target`) !== `launch` && i.get(`target`) !== `dots` && i.get(`target`) !== `plugin`,
            E = w ? i.get(`q`)?.trim() : void 0,
            D = w ? Re(i, `chatgpt_conversation_id`) : null,
            O = i.get(`account_id`)?.trim(),
            k, A;
        e[8] !== D || e[9] !== E || e[10] !== f || e[11] !== O || e[12] !== C || e[13] !== S || e[14] !== a || e[15] !== r.pathname || e[16] !== r.search || e[17] !== u ? (k = () => {
            if (S) return;
            if (!E && D == null) {
                a || (C ? Ae(f) : q(f));
                return
            }
            let e = new AbortController,
                t = async () => {
                    if (e.signal.aborted) return;
                    if (!ee()) {
                        u(`/auth/login?next=${encodeURIComponent(`${r.pathname}${r.search}`)}`, {
                            replace: !0
                        });
                        return
                    }
                    if (O && l.getCookie(ne.Workspace) !== O) {
                        let t = ae();
                        if (await t.ensureQueryData(oe()), e.signal.aborted) return;
                        let {
                            updatedAccount: n
                        } = await re(t, O);
                        if (!n) return
                    }
                    if (e.signal.aborted) return;
                    let t = new URLSearchParams(r.search),
                        n = new URLSearchParams({
                            surface: ie.TPP
                        });
                    if (D != null) {
                        E && (n.set(`prompt`, E), n.set(`promptSource`, `codex-app`)), window.location.replace(`/c/${encodeURIComponent(D)}?${n}`);
                        return
                    }
                    let i = t.get(T);
                    if (i) {
                        n.set(T, i);
                        let e = t.get(`prompt`);
                        e && n.set(`prompt`, e)
                    } else E && (n.set(`prompt`, E), n.set(`promptSource`, `codex-app`));
                    window.location.replace(`/?${n}`)
                };
            if (a) return t(), () => e.abort();
            let n = !1,
                i = !1,
                o, s = () => {
                    window.clearTimeout(o), o = void 0
                },
                c = () => {
                    i = !0, s(), e.abort()
                },
                d = () => {
                    n && document.visibilityState === `hidden` && c()
                };
            window.addEventListener(`pagehide`, c, {
                once: !0
            }), document.addEventListener(`visibilitychange`, d);
            let p = te(ze, e => {
                if (!e) {
                    s();
                    return
                }
                if (!(i || o !== void 0) && (o = window.setTimeout(t, We), !n)) {
                    n = !0;
                    try {
                        q(f)
                    } catch {
                        s(), t()
                    }
                }
            }, {
                fireImmediately: !0
            });
            return () => {
                e.abort(), s(), window.removeEventListener(`pagehide`, c), document.removeEventListener(`visibilitychange`, d), p()
            }
        }, A = [E, D, f, S, C, a, O, r.pathname, r.search, u], e[8] = D, e[9] = E, e[10] = f, e[11] = O, e[12] = C, e[13] = S, e[14] = a, e[15] = r.pathname, e[16] = r.search, e[17] = u, e[18] = k, e[19] = A) : (k = e[18], A = e[19]), (0, Ve.useEffect)(k, A);
        let j;
        e[20] === t ? j = e[21] : (j = t.formatMessage({
            id: `wham.codexOpenApp.pageTitle`,
            defaultMessage: `Open ChatGPT Desktop`
        }), e[20] = t, e[21] = j);
        let M;
        e[22] === j ? M = e[23] : (M = (0, X.jsx)(`title`, {
            children: j
        }), e[22] = j, e[23] = M);
        let N = M;
        if (x) {
            let t;
            e[24] !== b || e[25] !== f || e[26] !== C || e[27] !== S ? (t = S ? (0, X.jsx)(Y, {
                appBrand: b
            }) : (0, X.jsx)(Y, {
                appBrand: b,
                onOpen: () => {
                    C ? Ae(f) : q(f)
                }
            }), e[24] = b, e[25] = f, e[26] = C, e[27] = S, e[28] = t) : t = e[28];
            let n;
            return e[29] !== N || e[30] !== t ? (n = (0, X.jsxs)(X.Fragment, {
                children: [N, t]
            }), e[29] = N, e[30] = t, e[31] = n) : n = e[31], n
        }
        let P = a ? Q.chatgptMobileTitle : Q.chatgptTitle,
            F;
        e[32] === Symbol.for(`react.memo_cache_sentinel`) ? (F = (0, X.jsx)(`div`, {
            className: `mb-10 flex size-[88px] items-center justify-center`,
            "aria-hidden": !0,
            children: (0, X.jsx)(K, {
                className: `size-16`
            })
        }), e[32] = F) : F = e[32];
        let I = a ? `mb-9 text-[34px] leading-10 font-semibold tracking-[-0.02em]` : `mb-4 text-[34px] leading-10 font-semibold tracking-[-0.02em]`,
            L;
        e[33] === P ? L = e[34] : (L = (0, X.jsx)(z, {
            ...P
        }), e[33] = P, e[34] = L);
        let R;
        e[35] !== I || e[36] !== L ? (R = (0, X.jsx)(`h1`, {
            className: I,
            children: L
        }), e[35] = I, e[36] = L, e[37] = R) : R = e[37];
        let B;
        e[38] === a ? B = e[39] : (B = !a && (0, X.jsx)(`p`, {
            className: `text-token-text-secondary mb-9 max-w-[520px] text-[15px] leading-[22px]`,
            children: (0, X.jsx)(z, {
                ...Q.chatgptBody
            })
        }), e[38] = a, e[39] = B);
        let V;
        e[40] !== c || e[41] !== f || e[42] !== a || e[43] !== v ? (V = (0, X.jsx)(`div`, {
            className: `flex flex-wrap items-center justify-center gap-3`,
            children: a ? (0, X.jsx)(n, {
                as: `a`,
                to: Ke,
                color: `primary`,
                className: `h-[34px] min-w-[106px] rounded-full px-4 text-sm leading-[18px] font-medium`,
                children: (0, X.jsx)(z, {
                    ...Q.learnMoreButton
                })
            }) : (0, X.jsxs)(X.Fragment, {
                children: [(0, X.jsx)(n, {
                    type: `button`,
                    color: `primary`,
                    className: `h-[34px] min-w-[106px] rounded-full px-4 text-sm leading-[18px] font-medium`,
                    onClick: () => {
                        q(f)
                    },
                    children: (0, X.jsx)(z, {
                        ...Q.chatgptOpenButton
                    })
                }), (0, X.jsx)(Ee, {
                    color: `secondary`,
                    className: `h-[34px] min-w-[106px] rounded-full px-4 text-sm leading-[18px] font-medium`,
                    signalSurface: `codex_open_app`,
                    size: `medium`,
                    onClick: () => {
                        c != null && (ge.recordCodexAppSurfaceAction(`open_app`, `download`), v())
                    }
                })]
            })
        }), e[40] = c, e[41] = f, e[42] = a, e[43] = v, e[44] = V) : V = e[44];
        let H;
        e[45] !== R || e[46] !== B || e[47] !== V ? (H = (0, X.jsxs)(`section`, {
            className: `flex w-full max-w-[520px] -translate-y-2 flex-col items-center text-center`,
            children: [F, R, B, V]
        }), e[45] = R, e[46] = B, e[47] = V, e[48] = H) : H = e[48];
        let U;
        return e[49] !== N || e[50] !== H ? (U = (0, X.jsxs)(`main`, {
            className: `light bg-token-bg-primary text-token-text-primary flex min-h-screen flex-col items-center justify-center px-6 py-10`,
            children: [N, H]
        }), e[49] = N, e[50] = H, e[51] = U) : U = e[51], U
    }), Q = R({
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
    }), $ = H(D)
}));
export {
    Je as a, Xe as i, Ye as n, qe as r, $ as t
};
//# sourceMappingURL=bae3234b-h7n89cxj142i8b99.js.map
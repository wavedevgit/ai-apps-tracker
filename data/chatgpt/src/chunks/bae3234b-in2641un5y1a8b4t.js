import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AI as n,
    AT as r,
    B6 as i,
    Btt as a,
    Cit as o,
    Ett as s,
    Ez as c,
    Ftt as l,
    Hit as u,
    Htt as d,
    Itt as ee,
    J8 as te,
    JW as ne,
    KI as f,
    Nrt as p,
    Prt as re,
    Ptt as m,
    Sit as ie,
    Tit as ae,
    Tj as h,
    Tz as g,
    Vit as _,
    WI as v,
    Y8 as y,
    ZW as b,
    _s as x,
    _tt as S,
    b5 as C,
    hnt as w,
    j8 as oe,
    jI as T,
    kT as E,
    n1 as se,
    o as D,
    ps as ce,
    s as O,
    u1 as k,
    wj as A,
    wtt as j,
    y1 as le,
    y5 as M,
    ynt as N
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as P,
    Bn as F,
    Ln as I,
    Nn as L,
    Pt as ue,
    Rn as R,
    Ut as z,
    Vn as B,
    Wt as V,
    Zt as de,
    an as fe,
    jt as pe,
    wn as H,
    zn as me
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    DJ as he,
    EJ as ge,
    Flt as _e,
    Nlt as U,
    b8 as ve,
    x8 as ye
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Al as be,
    bC as W,
    jl as xe,
    xC as G
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    hw as Se,
    oC as Ce,
    sC as K,
    zC as we
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    t as Te
} from "./9ac7a75a-fqy7qnhwh7jd5rfv.js";
import {
    n as Ee,
    o as De
} from "./e19f3910-nriy7br1qc4gkn80.js";
import {
    a as Oe,
    o as q,
    r as ke
} from "./6313cbac-e5hl863fl4prr1xq.js";

function Ae(e) {
    let t = e;
    try {
        let r = te().getQueryData(n.queryKey),
            i = w();
        if (m() && !s() && !j() && r != null && (r.consent_analytics ?? !r.is_consent_required) && !f() && i.loadingStatus === `Ready` && i.getContext().user.customIDs?.stableID) {
            let n = crypto.randomUUID(),
                r = new URL(e);
            r.searchParams.set(`entry_id`, n), t = r.toString();
            let i = new URL(r);
            i.search = ``, i.hash = ``, c(new URL(`https://chatgpt.com/codex/open-app`), i, {
                surface: `browser`,
                fromSurface: `browser`,
                toSurface: `native_app`,
                reason: `desktop_login`,
                attribution: {
                    source: `desktop_login`,
                    entryId: n
                }
            }), a.flushStructuredEvents(250).catch(() => {})
        }
    } catch {}
    q(t)
}
var je = e((() => {
    g(), T(), v(), d(), y(), N(), S(), Oe()
}));

function Me() {}

function Ne(e) {
    return e.preventDefault()
}

function Pe(e) {
    return e.preventDefault()
}
var Fe, J, Y, Ie = e((() => {
    Fe = H(), r(), ye(), G(), xe(), _e(), C(), R(), J = F(), Y = e => {
        "use forget";
        let t = (0, Fe.c)(12),
            {
                appBrand: n,
                onOpen: r
            } = e,
            i;
        t[0] === n ? i = t[1] : (i = n === `chatgpt` ? (0, J.jsx)(L, {
            id: `wham.codexOpenApp.loginSuccess.chatgptTitle`,
            defaultMessage: `Signed in to ChatGPT`
        }) : (0, J.jsx)(L, {
            id: `wham.codexOpenApp.loginSuccess.title`,
            defaultMessage: `Signed in to Codex`
        }), t[0] = n, t[1] = i);
        let a;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, J.jsx)(`div`, {
            className: `fixed start-5 top-[18px]`,
            children: (0, J.jsx)(ve, {
                className: `w-[81px]`
            })
        }), t[2] = a) : a = t[2];
        let o;
        t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, J.jsx)(`p`, {
            className: `text-gray-solid-500 [font-feature-settings:'liga'_off,'clig'_off] text-sm leading-5 tracking-[-0.18px] dark:text-white/65`,
            children: (0, J.jsx)(L, {
                id: `wham.codexOpenApp.loginSuccess.status`,
                defaultMessage: `You’re signed in and may close this tab`
            })
        }), t[3] = o) : o = t[3];
        let s;
        t[4] !== n || t[5] !== r ? (s = r && (0, J.jsx)(E, {
            type: `button`,
            color: `custom`,
            className: M(`bg-gray-solid-0 text-gray-solid-1000 hover:border-gray-solid-150 hover:bg-gray-solid-50 dark:text-gray-solid-300 rounded-full border border-gray-100 text-sm leading-5 font-[510] tracking-[-0.154px] dark:border-white/[0.08] dark:bg-white/5 dark:hover:border-white/[0.16] dark:hover:bg-white/[0.08]`, n === `chatgpt` ? `px-6 py-[13px]` : `min-h-9 py-2 ps-3.5 pe-4`),
            contentWrapperClassName: `gap-2`,
            onClick: r,
            children: n === `chatgpt` ? (0, J.jsxs)(J.Fragment, {
                children: [(0, J.jsx)(W, {
                    className: `icon`,
                    "aria-hidden": !0
                }), (0, J.jsx)(L, {
                    id: `wham.codexOpenApp.loginSuccess.openChatgptButton`,
                    defaultMessage: `Open ChatGPT`
                })]
            }) : (0, J.jsxs)(J.Fragment, {
                children: [(0, J.jsx)(be, {
                    className: `icon`,
                    "aria-hidden": !0
                }), (0, J.jsx)(L, {
                    id: `wham.codexOpenApp.loginSuccess.openButton`,
                    defaultMessage: `Open Codex`
                })]
            })
        }), t[4] = n, t[5] = r, t[6] = s) : s = t[6];
        let c;
        t[7] === s ? c = t[8] : (c = (0, J.jsx)(U.Contents, {
            className: `overflow-hidden`,
            children: (0, J.jsxs)(`div`, {
                className: `bg-gray-solid-0 text-gray-solid-1000 dark:bg-gray-solid-900 dark:text-gray-solid-0 h-full`,
                children: [a, (0, J.jsx)(`main`, {
                    className: `flex h-full items-center justify-center px-6 py-14`,
                    children: (0, J.jsxs)(`div`, {
                        className: `flex w-full max-w-[560px] flex-col items-center gap-8 text-center`,
                        children: [o, s]
                    })
                })]
            })
        }), t[7] = s, t[8] = c);
        let l;
        return t[9] !== i || t[10] !== c ? (l = (0, J.jsx)(U, {
            open: !0,
            onOpenChange: Me,
            onEscapeKeyDown: Ne,
            onOpenAutoFocus: Pe,
            accessibleTitle: i,
            children: c
        }), t[9] = i, t[10] = c, t[11] = l) : l = t[11], l
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
        s = u(t.get(`browserUrl`) ?? ``),
        c = t.getAll(`mode`),
        l = c.length === 1 && Ge.has(c[0]) ? c[0] : null;
    return c.length === 0 && t.get(`fallback`) === `work` && o != null && o.length > 0 && (l = `work`), !r && o != null && o.length > 0 && a.searchParams.set(`prompt`, o), !r && i == null && l != null && a.searchParams.set(`mode`, l), !r && (s?.protocol === `http:` || s?.protocol === `https:`) && s.username.length === 0 && s.password.length === 0 && a.searchParams.set(`browserUrl`, s.toString()), a.toString()
}

function Re(e, t) {
    let n = e.get(t)?.trim();
    return n != null && fe(n) ? n : null
}

function ze() {
    return h() && document.visibilityState === `visible`
}
var Be, Ve, X, He, Ue, Z, We, Ge, Ke, qe, Je, Ye, Q, $, Xe = e((() => {
    P(), Be = H(), r(), Ce(), we(), G(), i(), k(), x(), b(), p(), o(), _(), y(), S(), A(), De(), Oe(), je(), Ie(), he(), O(), Ve = t(B()), R(), de(), X = F(), He = `codex://threads/new`, Ue = `codex://launch`, Z = `codex://dots`, We = 1500, Ge = new Set([`chat`, `work`, `codex`]), Ke = `https://chatgpt.com/download`, qe = {
        hasRouteMeta: !0,
        useScrollRestoration: !0
    }, Je = () => [], Ye = z(function() {
        "use forget";
        let e = (0, Be.c)(52),
            t = me(),
            n = pe(),
            r = new URLSearchParams(n.search),
            i = ee() || r.get(`target`) === `plugin` && l(),
            a;
        e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (a = Te(), e[0] = a) : a = e[0];
        let o = a,
            s = ue(),
            c;
        e[1] === n.search ? c = e[2] : (c = Le(n.search), e[1] = n.search, e[2] = c);
        let u = c,
            d;
        e[3] === Symbol.for(`react.memo_cache_sentinel`) ? (d = {
            key: `chatgpt-codex-download`,
            allowUnauthenticatedTracking: !0
        }, e[3] = d) : d = e[3];
        let {
            trackSelectedPixels: f
        } = K(d), p;
        e[4] === Symbol.for(`react.memo_cache_sentinel`) ? (p = {
            key: Se.CODEX_DOWNLOAD,
            allowUnauthenticatedTracking: !0
        }, e[4] = p) : p = e[4];
        let {
            trackSelectedPixels: m
        } = K(p), h;
        e[5] !== m || e[6] !== f ? (h = () => {
            m(), f()
        }, e[5] = m, e[6] = f, e[7] = h) : h = e[7];
        let g = h,
            _ = r.get(`source`),
            v = r.get(`app_brand`) === `chatgpt` ? `chatgpt` : `codex`,
            y = _ === `login` || _ === `cli-login`,
            b = _ === `cli-login`,
            x = _ === `login` && v === `chatgpt`,
            S = r.get(`fallback`) === `work` && r.get(`target`) !== `launch` && r.get(`target`) !== `dots` && r.get(`target`) !== `plugin`,
            C = S ? r.get(`q`)?.trim() : void 0,
            w = S ? Re(r, `chatgpt_conversation_id`) : null,
            T = r.get(`account_id`)?.trim(),
            D, O;
        e[8] !== w || e[9] !== C || e[10] !== u || e[11] !== T || e[12] !== x || e[13] !== b || e[14] !== i || e[15] !== n.pathname || e[16] !== n.search || e[17] !== s ? (D = () => {
            if (b) return;
            if (!C && w == null) {
                i || (x ? Ae(u) : q(u));
                return
            }
            let e = new AbortController,
                t = async () => {
                    if (e.signal.aborted) return;
                    if (!re()) {
                        s(`/auth/login?next=${encodeURIComponent(`${n.pathname}${n.search}`)}`, {
                            replace: !0
                        });
                        return
                    }
                    if (T && ie.getCookie(ae.Workspace) !== T) {
                        let t = te();
                        if (await t.ensureQueryData(se()), e.signal.aborted) return;
                        let {
                            updatedAccount: n
                        } = await le(t, T);
                        if (!n) return
                    }
                    if (e.signal.aborted) return;
                    let t = new URLSearchParams(n.search),
                        r = new URLSearchParams({
                            surface: ne.TPP
                        });
                    if (w != null) {
                        C && (r.set(`prompt`, C), r.set(`promptSource`, `codex-app`)), window.location.replace(`/c/${encodeURIComponent(w)}?${r}`);
                        return
                    }
                    let i = t.get(ce);
                    if (i) {
                        r.set(ce, i);
                        let e = t.get(`prompt`);
                        e && r.set(`prompt`, e)
                    } else C && (r.set(`prompt`, C), r.set(`promptSource`, `codex-app`));
                    window.location.replace(`/?${r}`)
                };
            if (i) return t(), () => e.abort();
            let r = !1,
                a = !1,
                o, c = () => {
                    window.clearTimeout(o), o = void 0
                },
                l = () => {
                    a = !0, c(), e.abort()
                },
                d = () => {
                    r && document.visibilityState === `hidden` && l()
                };
            window.addEventListener(`pagehide`, l, {
                once: !0
            }), document.addEventListener(`visibilitychange`, d);
            let ee = oe(ze, e => {
                if (!e) {
                    c();
                    return
                }
                if (!(a || o !== void 0) && (o = window.setTimeout(t, We), !r)) {
                    r = !0;
                    try {
                        q(u)
                    } catch {
                        c(), t()
                    }
                }
            }, {
                fireImmediately: !0
            });
            return () => {
                e.abort(), c(), window.removeEventListener(`pagehide`, l), document.removeEventListener(`visibilitychange`, d), ee()
            }
        }, O = [C, w, u, b, x, i, T, n.pathname, n.search, s], e[8] = w, e[9] = C, e[10] = u, e[11] = T, e[12] = x, e[13] = b, e[14] = i, e[15] = n.pathname, e[16] = n.search, e[17] = s, e[18] = D, e[19] = O) : (D = e[18], O = e[19]), (0, Ve.useEffect)(D, O);
        let k;
        e[20] === t ? k = e[21] : (k = t.formatMessage({
            id: `wham.codexOpenApp.pageTitle`,
            defaultMessage: `Open ChatGPT Desktop`
        }), e[20] = t, e[21] = k);
        let A;
        e[22] === k ? A = e[23] : (A = (0, X.jsx)(`title`, {
            children: k
        }), e[22] = k, e[23] = A);
        let j = A;
        if (y) {
            let t;
            e[24] !== v || e[25] !== u || e[26] !== x || e[27] !== b ? (t = b ? (0, X.jsx)(Y, {
                appBrand: v
            }) : (0, X.jsx)(Y, {
                appBrand: v,
                onOpen: () => {
                    x ? Ae(u) : q(u)
                }
            }), e[24] = v, e[25] = u, e[26] = x, e[27] = b, e[28] = t) : t = e[28];
            let n;
            return e[29] !== j || e[30] !== t ? (n = (0, X.jsxs)(X.Fragment, {
                children: [j, t]
            }), e[29] = j, e[30] = t, e[31] = n) : n = e[31], n
        }
        let M = i ? Q.chatgptMobileTitle : Q.chatgptTitle,
            N;
        e[32] === Symbol.for(`react.memo_cache_sentinel`) ? (N = (0, X.jsx)(`div`, {
            className: `mb-10 flex size-[88px] items-center justify-center`,
            "aria-hidden": !0,
            children: (0, X.jsx)(W, {
                className: `size-16`
            })
        }), e[32] = N) : N = e[32];
        let P = i ? `mb-9 text-[34px] leading-10 font-semibold tracking-[-0.02em]` : `mb-4 text-[34px] leading-10 font-semibold tracking-[-0.02em]`,
            F;
        e[33] === M ? F = e[34] : (F = (0, X.jsx)(L, {
            ...M
        }), e[33] = M, e[34] = F);
        let I;
        e[35] !== P || e[36] !== F ? (I = (0, X.jsx)(`h1`, {
            className: P,
            children: F
        }), e[35] = P, e[36] = F, e[37] = I) : I = e[37];
        let R;
        e[38] === i ? R = e[39] : (R = !i && (0, X.jsx)(`p`, {
            className: `text-token-text-secondary mb-9 max-w-[520px] text-[15px] leading-[22px]`,
            children: (0, X.jsx)(L, {
                ...Q.chatgptBody
            })
        }), e[38] = i, e[39] = R);
        let z;
        e[40] !== o || e[41] !== u || e[42] !== i || e[43] !== g ? (z = (0, X.jsx)(`div`, {
            className: `flex flex-wrap items-center justify-center gap-3`,
            children: i ? (0, X.jsx)(E, {
                as: `a`,
                to: Ke,
                color: `primary`,
                className: `h-[34px] min-w-[106px] rounded-full px-4 text-sm leading-[18px] font-medium`,
                children: (0, X.jsx)(L, {
                    ...Q.learnMoreButton
                })
            }) : (0, X.jsxs)(X.Fragment, {
                children: [(0, X.jsx)(E, {
                    type: `button`,
                    color: `primary`,
                    className: `h-[34px] min-w-[106px] rounded-full px-4 text-sm leading-[18px] font-medium`,
                    onClick: () => {
                        q(u)
                    },
                    children: (0, X.jsx)(L, {
                        ...Q.chatgptOpenButton
                    })
                }), (0, X.jsx)(Ee, {
                    color: `secondary`,
                    className: `h-[34px] min-w-[106px] rounded-full px-4 text-sm leading-[18px] font-medium`,
                    signalSurface: `codex_open_app`,
                    size: `medium`,
                    onClick: () => {
                        o != null && (ge.recordCodexAppSurfaceAction(`open_app`, `download`), g())
                    }
                })]
            })
        }), e[40] = o, e[41] = u, e[42] = i, e[43] = g, e[44] = z) : z = e[44];
        let B;
        e[45] !== I || e[46] !== R || e[47] !== z ? (B = (0, X.jsxs)(`section`, {
            className: `flex w-full max-w-[520px] -translate-y-2 flex-col items-center text-center`,
            children: [N, I, R, z]
        }), e[45] = I, e[46] = R, e[47] = z, e[48] = B) : B = e[48];
        let V;
        return e[49] !== j || e[50] !== B ? (V = (0, X.jsxs)(`main`, {
            className: `light bg-token-bg-primary text-token-text-primary flex min-h-screen flex-col items-center justify-center px-6 py-10`,
            children: [j, B]
        }), e[49] = j, e[50] = B, e[51] = V) : V = e[51], V
    }), Q = I({
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
    }), $ = V(D)
}));
export {
    Je as a, Xe as i, Ye as n, qe as r, $ as t
};
//# sourceMappingURL=bae3234b-in2641un5y1a8b4t.js.map
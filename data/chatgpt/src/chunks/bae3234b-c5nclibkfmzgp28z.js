import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $tt as n,
    C5 as r,
    CG as i,
    G1 as a,
    Gz as o,
    Hj as s,
    I1 as c,
    J5 as l,
    JT as u,
    Jnt as d,
    Ktt as f,
    O1 as ee,
    Qit as p,
    S5 as te,
    Uj as m,
    Wnt as h,
    Wz as g,
    XI as _,
    YI as v,
    Zit as ne,
    _at as y,
    _nt as b,
    _s as x,
    a5 as re,
    bG as ie,
    cit as S,
    dL as C,
    dnt as ae,
    eat as oe,
    gat as w,
    hnt as T,
    lL as E,
    lit as se,
    lnt as D,
    m8 as O,
    o as k,
    ps as A,
    q5 as j,
    qT as M,
    s as N,
    tnt as P,
    unt as ce
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    $ as F,
    Bn as le,
    Hn as I,
    Pn as L,
    Pt as ue,
    Qt as R,
    Rn as z,
    Tn as B,
    Ut as V,
    Vn as H,
    Wt as de,
    jt as fe,
    on as pe,
    zn as U
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    C8 as me,
    Flt as W,
    Llt as he,
    OJ as ge,
    S8 as _e,
    kJ as ve
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    Al as ye,
    bC as G,
    jl as be,
    xC as K
} from "./30901919-jory365vq6ym5crx.js";
import {
    KC as xe,
    Sw as Se,
    mC as Ce,
    pC as we
} from "./c2675c8c-nxl2ic2ofk2vw70s.js";
import {
    t as Te
} from "./9ac7a75a-o42ejieyzry8c3s2.js";
import {
    n as Ee,
    o as De
} from "./e19f3910-gqf6e2pgn5z6k0mv.js";
import {
    a as Oe,
    o as q,
    r as ke
} from "./6313cbac-e5hl863fl4prr1xq.js";

function Ae(e) {
    let t = e;
    try {
        let r = te().getQueryData(v.queryKey),
            i = h();
        if (D() && !P() && !n() && r != null && (r.consent_analytics ?? !r.is_consent_required) && !C() && i.loadingStatus === `Ready` && i.getContext().user.customIDs?.stableID) {
            let n = crypto.randomUUID(),
                r = new URL(e);
            r.searchParams.set(`entry_id`, n), t = r.toString();
            let i = new URL(r);
            i.search = ``, i.hash = ``, o(new URL(`https://chatgpt.com/codex/open-app`), i, {
                surface: `browser`,
                fromSurface: `browser`,
                toSurface: `native_app`,
                reason: `desktop_login`,
                attribution: {
                    source: `desktop_login`,
                    entryId: n
                }
            }), T.flushStructuredEvents(250).catch(() => {})
        }
    } catch {}
    q(t)
}
var je = e((() => {
    g(), _(), E(), b(), r(), d(), f(), Oe()
}));

function Me() {}

function Ne(e) {
    return e.preventDefault()
}

function Pe(e) {
    return e.preventDefault()
}
var Fe, J, Y, Ie = e((() => {
    Fe = B(), u(), me(), K(), be(), he(), l(), U(), J = H(), Y = e => {
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
            children: (0, J.jsx)(_e, {
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
        t[4] !== n || t[5] !== r ? (s = r && (0, J.jsx)(M, {
            type: `button`,
            color: `custom`,
            className: j(`bg-gray-solid-0 text-gray-solid-1000 hover:border-gray-solid-150 hover:bg-gray-solid-50 dark:text-gray-solid-300 rounded-full border border-gray-100 text-sm leading-5 font-[510] tracking-[-0.154px] dark:border-white/[0.08] dark:bg-white/5 dark:hover:border-white/[0.16] dark:hover:bg-white/[0.08]`, n === `chatgpt` ? `px-6 py-[13px]` : `min-h-9 py-2 ps-3.5 pe-4`),
            contentWrapperClassName: `gap-2`,
            onClick: r,
            children: n === `chatgpt` ? (0, J.jsxs)(J.Fragment, {
                children: [(0, J.jsx)(G, {
                    className: `icon`,
                    "aria-hidden": !0
                }), (0, J.jsx)(L, {
                    id: `wham.codexOpenApp.loginSuccess.openChatgptButton`,
                    defaultMessage: `Open ChatGPT`
                })]
            }) : (0, J.jsxs)(J.Fragment, {
                children: [(0, J.jsx)(ye, {
                    className: `icon`,
                    "aria-hidden": !0
                }), (0, J.jsx)(L, {
                    id: `wham.codexOpenApp.loginSuccess.openButton`,
                    defaultMessage: `Open Codex`
                })]
            })
        }), t[4] = n, t[5] = r, t[6] = s) : s = t[6];
        let c;
        t[7] === s ? c = t[8] : (c = (0, J.jsx)(W.Contents, {
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
        return t[9] !== i || t[10] !== c ? (l = (0, J.jsx)(W, {
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
        s = y(t.get(`browserUrl`) ?? ``),
        c = t.getAll(`mode`),
        l = c.length === 1 && Ge.has(c[0]) ? c[0] : null;
    return c.length === 0 && t.get(`fallback`) === `work` && o != null && o.length > 0 && (l = `work`), !r && o != null && o.length > 0 && a.searchParams.set(`prompt`, o), !r && i == null && l != null && a.searchParams.set(`mode`, l), !r && (s?.protocol === `http:` || s?.protocol === `https:`) && s.username.length === 0 && s.password.length === 0 && a.searchParams.set(`browserUrl`, s.toString()), a.toString()
}

function Re(e, t) {
    let n = e.get(t)?.trim();
    return n != null && pe(n) ? n : null
}

function ze() {
    return m() && document.visibilityState === `visible`
}
var Be, Ve, X, He, Ue, Z, We, Ge, Ke, qe, Je, Ye, Q, $, Xe = e((() => {
    F(), Be = B(), u(), we(), xe(), K(), O(), c(), x(), i(), S(), p(), w(), r(), f(), s(), De(), Oe(), je(), Ie(), ve(), N(), Ve = t(I()), U(), R(), X = H(), He = `codex://threads/new`, Ue = `codex://launch`, Z = `codex://dots`, We = 1500, Ge = new Set([`chat`, `work`, `codex`]), Ke = `https://chatgpt.com/download`, qe = {
        hasRouteMeta: !0,
        useScrollRestoration: !0
    }, Je = () => [], Ye = V(function() {
        "use forget";
        let e = (0, Be.c)(52),
            t = le(),
            n = fe(),
            r = new URLSearchParams(n.search),
            i = ae() || r.get(`target`) === `plugin` && ce(),
            o;
        e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (o = Te(), e[0] = o) : o = e[0];
        let s = o,
            c = ue(),
            l;
        e[1] === n.search ? l = e[2] : (l = Le(n.search), e[1] = n.search, e[2] = l);
        let u = l,
            d;
        e[3] === Symbol.for(`react.memo_cache_sentinel`) ? (d = {
            key: `chatgpt-codex-download`,
            allowUnauthenticatedTracking: !0
        }, e[3] = d) : d = e[3];
        let {
            trackSelectedPixels: f
        } = Ce(d), p;
        e[4] === Symbol.for(`react.memo_cache_sentinel`) ? (p = {
            key: Se.CODEX_DOWNLOAD,
            allowUnauthenticatedTracking: !0
        }, e[4] = p) : p = e[4];
        let {
            trackSelectedPixels: m
        } = Ce(p), h;
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
            E, D;
        e[8] !== w || e[9] !== C || e[10] !== u || e[11] !== T || e[12] !== x || e[13] !== b || e[14] !== i || e[15] !== n.pathname || e[16] !== n.search || e[17] !== c ? (E = () => {
            if (b) return;
            if (!C && w == null) {
                i || (x ? Ae(u) : q(u));
                return
            }
            let e = new AbortController,
                t = async () => {
                    if (e.signal.aborted) return;
                    if (!se()) {
                        c(`/auth/login?next=${encodeURIComponent(`${n.pathname}${n.search}`)}`, {
                            replace: !0
                        });
                        return
                    }
                    if (T && ne.getCookie(oe.Workspace) !== T) {
                        let t = te();
                        if (await t.ensureQueryData(ee()), e.signal.aborted) return;
                        let {
                            updatedAccount: n
                        } = await a(t, T);
                        if (!n) return
                    }
                    if (e.signal.aborted) return;
                    let t = new URLSearchParams(n.search),
                        r = new URLSearchParams({
                            surface: ie.TPP
                        });
                    if (w != null) {
                        C && (r.set(`prompt`, C), r.set(`promptSource`, `codex-app`)), window.location.replace(`/c/${encodeURIComponent(w)}?${r}`);
                        return
                    }
                    let i = t.get(A);
                    if (i) {
                        r.set(A, i);
                        let e = t.get(`prompt`);
                        e && r.set(`prompt`, e)
                    } else C && (r.set(`prompt`, C), r.set(`promptSource`, `codex-app`));
                    window.location.replace(`/?${r}`)
                };
            if (i) return t(), () => e.abort();
            let r = !1,
                o = !1,
                s, l = () => {
                    window.clearTimeout(s), s = void 0
                },
                d = () => {
                    o = !0, l(), e.abort()
                },
                f = () => {
                    r && document.visibilityState === `hidden` && d()
                };
            window.addEventListener(`pagehide`, d, {
                once: !0
            }), document.addEventListener(`visibilitychange`, f);
            let p = re(ze, e => {
                if (!e) {
                    l();
                    return
                }
                if (!(o || s !== void 0) && (s = window.setTimeout(t, We), !r)) {
                    r = !0;
                    try {
                        q(u)
                    } catch {
                        l(), t()
                    }
                }
            }, {
                fireImmediately: !0
            });
            return () => {
                e.abort(), l(), window.removeEventListener(`pagehide`, d), document.removeEventListener(`visibilitychange`, f), p()
            }
        }, D = [C, w, u, b, x, i, T, n.pathname, n.search, c], e[8] = w, e[9] = C, e[10] = u, e[11] = T, e[12] = x, e[13] = b, e[14] = i, e[15] = n.pathname, e[16] = n.search, e[17] = c, e[18] = E, e[19] = D) : (E = e[18], D = e[19]), (0, Ve.useEffect)(E, D);
        let O;
        e[20] === t ? O = e[21] : (O = t.formatMessage({
            id: `wham.codexOpenApp.pageTitle`,
            defaultMessage: `Open ChatGPT Desktop`
        }), e[20] = t, e[21] = O);
        let k;
        e[22] === O ? k = e[23] : (k = (0, X.jsx)(`title`, {
            children: O
        }), e[22] = O, e[23] = k);
        let j = k;
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
        let N = i ? Q.chatgptMobileTitle : Q.chatgptTitle,
            P;
        e[32] === Symbol.for(`react.memo_cache_sentinel`) ? (P = (0, X.jsx)(`div`, {
            className: `mb-10 flex size-[88px] items-center justify-center`,
            "aria-hidden": !0,
            children: (0, X.jsx)(G, {
                className: `size-16`
            })
        }), e[32] = P) : P = e[32];
        let F = i ? `mb-9 text-[34px] leading-10 font-semibold tracking-[-0.02em]` : `mb-4 text-[34px] leading-10 font-semibold tracking-[-0.02em]`,
            I;
        e[33] === N ? I = e[34] : (I = (0, X.jsx)(L, {
            ...N
        }), e[33] = N, e[34] = I);
        let R;
        e[35] !== F || e[36] !== I ? (R = (0, X.jsx)(`h1`, {
            className: F,
            children: I
        }), e[35] = F, e[36] = I, e[37] = R) : R = e[37];
        let z;
        e[38] === i ? z = e[39] : (z = !i && (0, X.jsx)(`p`, {
            className: `text-token-text-secondary mb-9 max-w-[520px] text-[15px] leading-[22px]`,
            children: (0, X.jsx)(L, {
                ...Q.chatgptBody
            })
        }), e[38] = i, e[39] = z);
        let B;
        e[40] !== s || e[41] !== u || e[42] !== i || e[43] !== g ? (B = (0, X.jsx)(`div`, {
            className: `flex flex-wrap items-center justify-center gap-3`,
            children: i ? (0, X.jsx)(M, {
                as: `a`,
                to: Ke,
                color: `primary`,
                className: `h-[34px] min-w-[106px] rounded-full px-4 text-sm leading-[18px] font-medium`,
                children: (0, X.jsx)(L, {
                    ...Q.learnMoreButton
                })
            }) : (0, X.jsxs)(X.Fragment, {
                children: [(0, X.jsx)(M, {
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
                        s != null && (ge.recordCodexAppSurfaceAction(`open_app`, `download`), g())
                    }
                })]
            })
        }), e[40] = s, e[41] = u, e[42] = i, e[43] = g, e[44] = B) : B = e[44];
        let V;
        e[45] !== R || e[46] !== z || e[47] !== B ? (V = (0, X.jsxs)(`section`, {
            className: `flex w-full max-w-[520px] -translate-y-2 flex-col items-center text-center`,
            children: [P, R, z, B]
        }), e[45] = R, e[46] = z, e[47] = B, e[48] = V) : V = e[48];
        let H;
        return e[49] !== j || e[50] !== V ? (H = (0, X.jsxs)(`main`, {
            className: `light bg-token-bg-primary text-token-text-primary flex min-h-screen flex-col items-center justify-center px-6 py-10`,
            children: [j, V]
        }), e[49] = j, e[50] = V, e[51] = H) : H = e[51], H
    }), Q = z({
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
    }), $ = de(k)
}));
export {
    Je as a, Xe as i, Ye as n, qe as r, $ as t
};
//# sourceMappingURL=bae3234b-c5nclibkfmzgp28z.js.map
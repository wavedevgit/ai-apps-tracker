import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $tt as n,
    CG as r,
    G1 as i,
    G5 as a,
    Gz as o,
    Hj as s,
    Hnt as c,
    I1 as l,
    JT as u,
    K5 as d,
    Knt as f,
    O1 as ee,
    Qit as te,
    Uj as p,
    Wtt as m,
    Wz as h,
    XI as g,
    Xit as _,
    YI as v,
    Yit as ne,
    Ztt as y,
    _s as b,
    b5 as re,
    bG as ie,
    cnt as ae,
    dL as x,
    f8 as S,
    hat as C,
    hnt as w,
    lL as T,
    lnt as oe,
    mat as E,
    o as D,
    oit as O,
    pnt as k,
    ps as A,
    qT as j,
    r5 as se,
    s as M,
    sit as ce,
    snt as N,
    x5 as P
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    $ as F,
    Bn as I,
    Ln as L,
    Nn as R,
    Pt as le,
    Rn as z,
    Ut as B,
    Vn as V,
    Wt as H,
    Zt as ue,
    an as de,
    jt as fe,
    wn as U,
    zn as pe
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    C8 as me,
    Flt as W,
    Llt as he,
    OJ as ge,
    S8 as _e,
    kJ as ve
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    Al as ye,
    bC as G,
    jl as be,
    xC as K
} from "./30901919-om7b3qf5hp4j9x4l.js";
import {
    WC as xe,
    bw as Se,
    dC as Ce,
    fC as we
} from "./c2675c8c-fpv9s4kvd412dyap.js";
import {
    t as Te
} from "./9ac7a75a-jtc585w9qerwt9l2.js";
import {
    n as Ee,
    o as De
} from "./e19f3910-e4e73fwjl8xw3qih.js";
import {
    a as Oe,
    o as q,
    r as ke
} from "./6313cbac-e5hl863fl4prr1xq.js";

function Ae(e) {
    let t = e;
    try {
        let r = re().getQueryData(v.queryKey),
            i = c();
        if (N() && !n() && !y() && r != null && (r.consent_analytics ?? !r.is_consent_required) && !x() && i.loadingStatus === `Ready` && i.getContext().user.customIDs?.stableID) {
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
            }), k.flushStructuredEvents(250).catch(() => {})
        }
    } catch {}
    q(t)
}
var je = e((() => {
    h(), g(), T(), w(), P(), f(), m(), Oe()
}));

function Me() {}

function Ne(e) {
    return e.preventDefault()
}

function Pe(e) {
    return e.preventDefault()
}
var Fe, J, Y, Ie = e((() => {
    Fe = U(), u(), me(), K(), be(), he(), d(), z(), J = I(), Y = e => {
        "use forget";
        let t = (0, Fe.c)(12),
            {
                appBrand: n,
                onOpen: r
            } = e,
            i;
        t[0] === n ? i = t[1] : (i = n === `chatgpt` ? (0, J.jsx)(R, {
            id: `wham.codexOpenApp.loginSuccess.chatgptTitle`,
            defaultMessage: `Signed in to ChatGPT`
        }) : (0, J.jsx)(R, {
            id: `wham.codexOpenApp.loginSuccess.title`,
            defaultMessage: `Signed in to Codex`
        }), t[0] = n, t[1] = i);
        let o;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, J.jsx)(`div`, {
            className: `fixed start-5 top-[18px]`,
            children: (0, J.jsx)(_e, {
                className: `w-[81px]`
            })
        }), t[2] = o) : o = t[2];
        let s;
        t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, J.jsx)(`p`, {
            className: `text-gray-solid-500 [font-feature-settings:'liga'_off,'clig'_off] text-sm leading-5 tracking-[-0.18px] dark:text-white/65`,
            children: (0, J.jsx)(R, {
                id: `wham.codexOpenApp.loginSuccess.status`,
                defaultMessage: `You’re signed in and may close this tab`
            })
        }), t[3] = s) : s = t[3];
        let c;
        t[4] !== n || t[5] !== r ? (c = r && (0, J.jsx)(j, {
            type: `button`,
            color: `custom`,
            className: a(`bg-gray-solid-0 text-gray-solid-1000 hover:border-gray-solid-150 hover:bg-gray-solid-50 dark:text-gray-solid-300 rounded-full border border-gray-100 text-sm leading-5 font-[510] tracking-[-0.154px] dark:border-white/[0.08] dark:bg-white/5 dark:hover:border-white/[0.16] dark:hover:bg-white/[0.08]`, n === `chatgpt` ? `px-6 py-[13px]` : `min-h-9 py-2 ps-3.5 pe-4`),
            contentWrapperClassName: `gap-2`,
            onClick: r,
            children: n === `chatgpt` ? (0, J.jsxs)(J.Fragment, {
                children: [(0, J.jsx)(G, {
                    className: `icon`,
                    "aria-hidden": !0
                }), (0, J.jsx)(R, {
                    id: `wham.codexOpenApp.loginSuccess.openChatgptButton`,
                    defaultMessage: `Open ChatGPT`
                })]
            }) : (0, J.jsxs)(J.Fragment, {
                children: [(0, J.jsx)(ye, {
                    className: `icon`,
                    "aria-hidden": !0
                }), (0, J.jsx)(R, {
                    id: `wham.codexOpenApp.loginSuccess.openButton`,
                    defaultMessage: `Open Codex`
                })]
            })
        }), t[4] = n, t[5] = r, t[6] = c) : c = t[6];
        let l;
        t[7] === c ? l = t[8] : (l = (0, J.jsx)(W.Contents, {
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
        return t[9] !== i || t[10] !== l ? (u = (0, J.jsx)(W, {
            open: !0,
            onOpenChange: Me,
            onEscapeKeyDown: Ne,
            onOpenAutoFocus: Pe,
            accessibleTitle: i,
            children: l
        }), t[9] = i, t[10] = l, t[11] = u) : u = t[11], u
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
        s = C(t.get(`browserUrl`) ?? ``),
        c = t.getAll(`mode`),
        l = c.length === 1 && Ge.has(c[0]) ? c[0] : null;
    return c.length === 0 && t.get(`fallback`) === `work` && o != null && o.length > 0 && (l = `work`), !r && o != null && o.length > 0 && a.searchParams.set(`prompt`, o), !r && i == null && l != null && a.searchParams.set(`mode`, l), !r && (s?.protocol === `http:` || s?.protocol === `https:`) && s.username.length === 0 && s.password.length === 0 && a.searchParams.set(`browserUrl`, s.toString()), a.toString()
}

function Re(e, t) {
    let n = e.get(t)?.trim();
    return n != null && de(n) ? n : null
}

function ze() {
    return p() && document.visibilityState === `visible`
}
var Be, Ve, X, He, Ue, Z, We, Ge, Ke, qe, Je, Ye, Q, $, Xe = e((() => {
    F(), Be = U(), u(), Ce(), xe(), K(), S(), l(), b(), r(), O(), _(), E(), P(), m(), s(), De(), Oe(), je(), Ie(), ve(), M(), Ve = t(V()), z(), ue(), X = I(), He = `codex://threads/new`, Ue = `codex://launch`, Z = `codex://dots`, We = 1500, Ge = new Set([`chat`, `work`, `codex`]), Ke = `https://chatgpt.com/download`, qe = {
        hasRouteMeta: !0,
        useScrollRestoration: !0
    }, Je = () => [], Ye = B(function() {
        "use forget";
        let e = (0, Be.c)(52),
            t = pe(),
            n = fe(),
            r = new URLSearchParams(n.search),
            a = oe() || r.get(`target`) === `plugin` && ae(),
            o;
        e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (o = Te(), e[0] = o) : o = e[0];
        let s = o,
            c = le(),
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
        } = we(d), p;
        e[4] === Symbol.for(`react.memo_cache_sentinel`) ? (p = {
            key: Se.CODEX_DOWNLOAD,
            allowUnauthenticatedTracking: !0
        }, e[4] = p) : p = e[4];
        let {
            trackSelectedPixels: m
        } = we(p), h;
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
        e[8] !== w || e[9] !== C || e[10] !== u || e[11] !== T || e[12] !== x || e[13] !== b || e[14] !== a || e[15] !== n.pathname || e[16] !== n.search || e[17] !== c ? (E = () => {
            if (b) return;
            if (!C && w == null) {
                a || (x ? Ae(u) : q(u));
                return
            }
            let e = new AbortController,
                t = async () => {
                    if (e.signal.aborted) return;
                    if (!ce()) {
                        c(`/auth/login?next=${encodeURIComponent(`${n.pathname}${n.search}`)}`, {
                            replace: !0
                        });
                        return
                    }
                    if (T && ne.getCookie(te.Workspace) !== T) {
                        let t = re();
                        if (await t.ensureQueryData(ee()), e.signal.aborted) return;
                        let {
                            updatedAccount: n
                        } = await i(t, T);
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
                    let a = t.get(A);
                    if (a) {
                        r.set(A, a);
                        let e = t.get(`prompt`);
                        e && r.set(`prompt`, e)
                    } else C && (r.set(`prompt`, C), r.set(`promptSource`, `codex-app`));
                    window.location.replace(`/?${r}`)
                };
            if (a) return t(), () => e.abort();
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
            let p = se(ze, e => {
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
        }, D = [C, w, u, b, x, a, T, n.pathname, n.search, c], e[8] = w, e[9] = C, e[10] = u, e[11] = T, e[12] = x, e[13] = b, e[14] = a, e[15] = n.pathname, e[16] = n.search, e[17] = c, e[18] = E, e[19] = D) : (E = e[18], D = e[19]), (0, Ve.useEffect)(E, D);
        let O;
        e[20] === t ? O = e[21] : (O = t.formatMessage({
            id: `wham.codexOpenApp.pageTitle`,
            defaultMessage: `Open ChatGPT Desktop`
        }), e[20] = t, e[21] = O);
        let k;
        e[22] === O ? k = e[23] : (k = (0, X.jsx)(`title`, {
            children: O
        }), e[22] = O, e[23] = k);
        let M = k;
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
            return e[29] !== M || e[30] !== t ? (n = (0, X.jsxs)(X.Fragment, {
                children: [M, t]
            }), e[29] = M, e[30] = t, e[31] = n) : n = e[31], n
        }
        let N = a ? Q.chatgptMobileTitle : Q.chatgptTitle,
            P;
        e[32] === Symbol.for(`react.memo_cache_sentinel`) ? (P = (0, X.jsx)(`div`, {
            className: `mb-10 flex size-[88px] items-center justify-center`,
            "aria-hidden": !0,
            children: (0, X.jsx)(G, {
                className: `size-16`
            })
        }), e[32] = P) : P = e[32];
        let F = a ? `mb-9 text-[34px] leading-10 font-semibold tracking-[-0.02em]` : `mb-4 text-[34px] leading-10 font-semibold tracking-[-0.02em]`,
            I;
        e[33] === N ? I = e[34] : (I = (0, X.jsx)(R, {
            ...N
        }), e[33] = N, e[34] = I);
        let L;
        e[35] !== F || e[36] !== I ? (L = (0, X.jsx)(`h1`, {
            className: F,
            children: I
        }), e[35] = F, e[36] = I, e[37] = L) : L = e[37];
        let z;
        e[38] === a ? z = e[39] : (z = !a && (0, X.jsx)(`p`, {
            className: `text-token-text-secondary mb-9 max-w-[520px] text-[15px] leading-[22px]`,
            children: (0, X.jsx)(R, {
                ...Q.chatgptBody
            })
        }), e[38] = a, e[39] = z);
        let B;
        e[40] !== s || e[41] !== u || e[42] !== a || e[43] !== g ? (B = (0, X.jsx)(`div`, {
            className: `flex flex-wrap items-center justify-center gap-3`,
            children: a ? (0, X.jsx)(j, {
                as: `a`,
                to: Ke,
                color: `primary`,
                className: `h-[34px] min-w-[106px] rounded-full px-4 text-sm leading-[18px] font-medium`,
                children: (0, X.jsx)(R, {
                    ...Q.learnMoreButton
                })
            }) : (0, X.jsxs)(X.Fragment, {
                children: [(0, X.jsx)(j, {
                    type: `button`,
                    color: `primary`,
                    className: `h-[34px] min-w-[106px] rounded-full px-4 text-sm leading-[18px] font-medium`,
                    onClick: () => {
                        q(u)
                    },
                    children: (0, X.jsx)(R, {
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
        }), e[40] = s, e[41] = u, e[42] = a, e[43] = g, e[44] = B) : B = e[44];
        let V;
        e[45] !== L || e[46] !== z || e[47] !== B ? (V = (0, X.jsxs)(`section`, {
            className: `flex w-full max-w-[520px] -translate-y-2 flex-col items-center text-center`,
            children: [P, L, z, B]
        }), e[45] = L, e[46] = z, e[47] = B, e[48] = V) : V = e[48];
        let H;
        return e[49] !== M || e[50] !== V ? (H = (0, X.jsxs)(`main`, {
            className: `light bg-token-bg-primary text-token-text-primary flex min-h-screen flex-col items-center justify-center px-6 py-10`,
            children: [M, V]
        }), e[49] = M, e[50] = V, e[51] = H) : H = e[51], H
    }), Q = L({
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
//# sourceMappingURL=bae3234b-mnszcqtnw6jgpoyn.js.map
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    $z as r,
    A8 as i,
    Ait as a,
    Cnt as o,
    Jj as s,
    Lnt as c,
    Mnt as l,
    Nnt as u,
    Qz as d,
    R5 as ee,
    Rat as f,
    Sat as te,
    Yj as p,
    _L as m,
    bat as h,
    eE as g,
    frt as _,
    grt as v,
    hL as y,
    hs as ne,
    jit as re,
    jnt as b,
    l7 as x,
    mnt as S,
    n0 as ie,
    nL as C,
    o as w,
    q1 as T,
    s as E,
    tL as D,
    u7 as O,
    vG as ae,
    x5 as oe,
    xG as k,
    xnt as A,
    yat as se,
    ys as j,
    z1 as ce,
    z5 as M,
    zat as N,
    znt as P
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    At as le,
    Bn as F,
    Ht as I,
    Ln as L,
    Nn as R,
    Nt as ue,
    Q as z,
    Rn as B,
    Ut as V,
    Vn as H,
    Zt as de,
    an as fe,
    wn as U,
    zn as pe
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Ilt as me,
    MJ as he,
    O8 as ge,
    Plt as W,
    jJ as _e,
    k8 as ve
} from "./conversation-small-fh0oqifngkf5rvl1.js";
import {
    Al as ye,
    bC as G,
    jl as be,
    xC as K
} from "./30901919-cmi3nh547dwrqkxv.js";
import {
    GC as xe,
    IS as Se,
    LS as Ce,
    hC as we
} from "./c2675c8c-4fpunyxk1uf8cfp1.js";
import {
    t as Te
} from "./9ac7a75a-cqecgvgjzu8zlxc7.js";
import {
    n as Ee,
    o as De
} from "./e19f3910-fer02b07rtz2ynxs.js";
import {
    a as Oe,
    o as q,
    r as ke
} from "./6313cbac-e5hl863fl4prr1xq.js";

function Ae(e) {
    let t = e;
    try {
        let n = ee().getQueryData(D.queryKey),
            i = _();
        if (b() && !o() && !A() && n != null && (n.consent_analytics ?? !n.is_consent_required) && !m() && i.loadingStatus === `Ready` && i.getContext().user.customIDs?.stableID) {
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
            }), c.flushStructuredEvents(250).catch(() => {})
        }
    } catch {}
    q(t)
}
var je = e((() => {
    d(), C(), y(), P(), M(), v(), S(), Oe()
}));

function Me() {}

function Ne(e) {
    return e.preventDefault()
}

function Pe(e) {
    return e.preventDefault()
}
var Fe, J, Y, Ie = e((() => {
    Fe = U(), g(), ve(), K(), be(), me(), O(), B(), J = F(), Y = e => {
        "use forget";
        let t = (0, Fe.c)(12),
            {
                appBrand: r,
                onOpen: i
            } = e,
            a;
        t[0] === r ? a = t[1] : (a = r === `chatgpt` ? (0, J.jsx)(R, {
            id: `wham.codexOpenApp.loginSuccess.chatgptTitle`,
            defaultMessage: `Signed in to ChatGPT`
        }) : (0, J.jsx)(R, {
            id: `wham.codexOpenApp.loginSuccess.title`,
            defaultMessage: `Signed in to Codex`
        }), t[0] = r, t[1] = a);
        let o;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, J.jsx)(`div`, {
            className: `fixed start-5 top-[18px]`,
            children: (0, J.jsx)(ge, {
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
        t[4] !== r || t[5] !== i ? (c = i && (0, J.jsx)(n, {
            type: `button`,
            color: `custom`,
            className: x(`bg-gray-solid-0 text-gray-solid-1000 hover:border-gray-solid-150 hover:bg-gray-solid-50 dark:text-gray-solid-300 rounded-full border border-gray-100 text-sm leading-5 font-[510] tracking-[-0.154px] dark:border-white/[0.08] dark:bg-white/5 dark:hover:border-white/[0.16] dark:hover:bg-white/[0.08]`, r === `chatgpt` ? `px-6 py-[13px]` : `min-h-9 py-2 ps-3.5 pe-4`),
            contentWrapperClassName: `gap-2`,
            onClick: i,
            children: r === `chatgpt` ? (0, J.jsxs)(J.Fragment, {
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
        }), t[4] = r, t[5] = i, t[6] = c) : c = t[6];
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
        return t[9] !== a || t[10] !== l ? (u = (0, J.jsx)(W, {
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
        s = N(t.get(`browserUrl`) ?? ``),
        c = t.getAll(`mode`),
        l = c.length === 1 && Ge.has(c[0]) ? c[0] : null;
    return c.length === 0 && t.get(`fallback`) === `work` && o != null && o.length > 0 && (l = `work`), !r && o != null && o.length > 0 && a.searchParams.set(`prompt`, o), !r && i == null && l != null && a.searchParams.set(`mode`, l), !r && (s?.protocol === `http:` || s?.protocol === `https:`) && s.username.length === 0 && s.password.length === 0 && a.searchParams.set(`browserUrl`, s.toString()), a.toString()
}

function Re(e, t) {
    let n = e.get(t)?.trim();
    return n != null && fe(n) ? n : null
}

function ze() {
    return p() && document.visibilityState === `visible`
}
var Be, Ve, X, He, Ue, Z, We, Ge, Ke, qe, Je, Ye, Q, $, Xe = e((() => {
    z(), Be = U(), g(), Se(), we(), K(), i(), T(), j(), k(), a(), h(), f(), M(), S(), s(), De(), Oe(), je(), Ie(), he(), E(), Ve = t(H()), B(), de(), X = F(), He = `codex://threads/new`, Ue = `codex://launch`, Z = `codex://dots`, We = 1500, Ge = new Set([`chat`, `work`, `codex`]), Ke = `https://chatgpt.com/download`, qe = {
        hasRouteMeta: !0,
        useScrollRestoration: !0
    }, Je = () => [], Ye = I(function() {
        "use forget";
        let e = (0, Be.c)(52),
            t = pe(),
            r = le(),
            i = new URLSearchParams(r.search),
            a = u() || i.get(`target`) === `plugin` && l(),
            o;
        e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (o = Te(), e[0] = o) : o = e[0];
        let s = o,
            c = ue(),
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
            T = w ? i.get(`q`)?.trim() : void 0,
            E = w ? Re(i, `chatgpt_conversation_id`) : null,
            D = i.get(`account_id`)?.trim(),
            O, k;
        e[8] !== E || e[9] !== T || e[10] !== f || e[11] !== D || e[12] !== C || e[13] !== S || e[14] !== a || e[15] !== r.pathname || e[16] !== r.search || e[17] !== c ? (O = () => {
            if (S) return;
            if (!T && E == null) {
                a || (C ? Ae(f) : q(f));
                return
            }
            let e = new AbortController,
                t = async () => {
                    if (e.signal.aborted) return;
                    if (!re()) {
                        c(`/auth/login?next=${encodeURIComponent(`${r.pathname}${r.search}`)}`, {
                            replace: !0
                        });
                        return
                    }
                    if (D && se.getCookie(te.Workspace) !== D) {
                        let t = ee();
                        if (await t.ensureQueryData(ce()), e.signal.aborted) return;
                        let {
                            updatedAccount: n
                        } = await ie(t, D);
                        if (!n) return
                    }
                    if (e.signal.aborted) return;
                    let t = new URLSearchParams(r.search),
                        n = new URLSearchParams({
                            surface: ae.TPP
                        });
                    if (E != null) {
                        T && (n.set(`prompt`, T), n.set(`promptSource`, `codex-app`)), window.location.replace(`/c/${encodeURIComponent(E)}?${n}`);
                        return
                    }
                    let i = t.get(ne);
                    if (i) {
                        n.set(ne, i);
                        let e = t.get(`prompt`);
                        e && n.set(`prompt`, e)
                    } else T && (n.set(`prompt`, T), n.set(`promptSource`, `codex-app`));
                    window.location.replace(`/?${n}`)
                };
            if (a) return t(), () => e.abort();
            let n = !1,
                i = !1,
                o, s = () => {
                    window.clearTimeout(o), o = void 0
                },
                l = () => {
                    i = !0, s(), e.abort()
                },
                u = () => {
                    n && document.visibilityState === `hidden` && l()
                };
            window.addEventListener(`pagehide`, l, {
                once: !0
            }), document.addEventListener(`visibilitychange`, u);
            let d = oe(ze, e => {
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
                e.abort(), s(), window.removeEventListener(`pagehide`, l), document.removeEventListener(`visibilitychange`, u), d()
            }
        }, k = [T, E, f, S, C, a, D, r.pathname, r.search, c], e[8] = E, e[9] = T, e[10] = f, e[11] = D, e[12] = C, e[13] = S, e[14] = a, e[15] = r.pathname, e[16] = r.search, e[17] = c, e[18] = O, e[19] = k) : (O = e[18], k = e[19]), (0, Ve.useEffect)(O, k);
        let A;
        e[20] === t ? A = e[21] : (A = t.formatMessage({
            id: `wham.codexOpenApp.pageTitle`,
            defaultMessage: `Open ChatGPT Desktop`
        }), e[20] = t, e[21] = A);
        let j;
        e[22] === A ? j = e[23] : (j = (0, X.jsx)(`title`, {
            children: A
        }), e[22] = A, e[23] = j);
        let M = j;
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
        e[40] !== s || e[41] !== f || e[42] !== a || e[43] !== v ? (B = (0, X.jsx)(`div`, {
            className: `flex flex-wrap items-center justify-center gap-3`,
            children: a ? (0, X.jsx)(n, {
                as: `a`,
                to: Ke,
                color: `primary`,
                className: `h-[34px] min-w-[106px] rounded-full px-4 text-sm leading-[18px] font-medium`,
                children: (0, X.jsx)(R, {
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
                    children: (0, X.jsx)(R, {
                        ...Q.chatgptOpenButton
                    })
                }), (0, X.jsx)(Ee, {
                    color: `secondary`,
                    className: `h-[34px] min-w-[106px] rounded-full px-4 text-sm leading-[18px] font-medium`,
                    signalSurface: `codex_open_app`,
                    size: `medium`,
                    onClick: () => {
                        s != null && (_e.recordCodexAppSurfaceAction(`open_app`, `download`), v())
                    }
                })]
            })
        }), e[40] = s, e[41] = f, e[42] = a, e[43] = v, e[44] = B) : B = e[44];
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
    }), $ = V(w)
}));
export {
    Je as a, Xe as i, Ye as n, qe as r, $ as t
};
//# sourceMappingURL=bae3234b-8ue3z3z4pjbcxqmd.js.map
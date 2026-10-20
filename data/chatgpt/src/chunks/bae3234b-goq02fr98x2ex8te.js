import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $it as n,
    C5 as r,
    CG as i,
    Gz as a,
    Hj as o,
    J5 as s,
    JT as c,
    Jtt as l,
    K1 as u,
    Knt as d,
    L1 as f,
    Uj as p,
    Wz as m,
    XI as h,
    Xnt as g,
    Y5 as _,
    YI as v,
    _nt as y,
    bG as ee,
    dL as b,
    dit as te,
    dnt as ne,
    eat as x,
    fnt as re,
    h8 as S,
    k1 as ie,
    lL as C,
    ms as ae,
    nat as oe,
    o as w,
    o5 as se,
    pnt as ce,
    qT as T,
    rnt as E,
    s as D,
    tnt as O,
    uit as k,
    vat as A,
    vs as j,
    w5 as M,
    yat as N,
    ynt as P
} from "./4813494d-dfpv67hlp00pbohr.js";
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
    C8 as me,
    Llt as W,
    OJ as he,
    S8 as ge,
    kJ as _e,
    zlt as ve
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Al as ye,
    bC as G,
    jl as be,
    xC as K
} from "./30901919-7dzdc1ou0jtwkwpt.js";
import {
    MS as xe,
    NS as Se,
    VC as Ce,
    dC as we
} from "./c2675c8c-9bs3zsr3vq259es7.js";
import {
    t as Te
} from "./9ac7a75a-n1ynto4h6ob9r4kj.js";
import {
    n as Ee,
    o as De
} from "./e19f3910-b7spt86odw5z3csr.js";
import {
    a as Oe,
    o as q,
    r as ke
} from "./6313cbac-e5hl863fl4prr1xq.js";

function Ae(e) {
    let t = e;
    try {
        let n = r().getQueryData(v.queryKey),
            i = d();
        if (ne() && !E() && !O() && n != null && (n.consent_analytics ?? !n.is_consent_required) && !b() && i.loadingStatus === `Ready` && i.getContext().user.customIDs?.stableID) {
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
            }), y.flushStructuredEvents(250).catch(() => {})
        }
    } catch {}
    q(t)
}
var je = e((() => {
    m(), h(), C(), P(), M(), g(), l(), Oe()
}));

function Me() {}

function Ne(e) {
    return e.preventDefault()
}

function Pe(e) {
    return e.preventDefault()
}
var Fe, J, Y, Ie = e((() => {
    Fe = U(), c(), me(), K(), be(), ve(), _(), B(), J = F(), Y = e => {
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
        let a;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, J.jsx)(`div`, {
            className: `fixed start-5 top-[18px]`,
            children: (0, J.jsx)(ge, {
                className: `w-[81px]`
            })
        }), t[2] = a) : a = t[2];
        let o;
        t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, J.jsx)(`p`, {
            className: `text-gray-solid-500 [font-feature-settings:'liga'_off,'clig'_off] text-sm leading-5 tracking-[-0.18px] dark:text-white/65`,
            children: (0, J.jsx)(R, {
                id: `wham.codexOpenApp.loginSuccess.status`,
                defaultMessage: `You’re signed in and may close this tab`
            })
        }), t[3] = o) : o = t[3];
        let c;
        t[4] !== n || t[5] !== r ? (c = r && (0, J.jsx)(T, {
            type: `button`,
            color: `custom`,
            className: s(`bg-gray-solid-0 text-gray-solid-1000 hover:border-gray-solid-150 hover:bg-gray-solid-50 dark:text-gray-solid-300 rounded-full border border-gray-100 text-sm leading-5 font-[510] tracking-[-0.154px] dark:border-white/[0.08] dark:bg-white/5 dark:hover:border-white/[0.16] dark:hover:bg-white/[0.08]`, n === `chatgpt` ? `px-6 py-[13px]` : `min-h-9 py-2 ps-3.5 pe-4`),
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
                children: [a, (0, J.jsx)(`main`, {
                    className: `flex h-full items-center justify-center px-6 py-14`,
                    children: (0, J.jsxs)(`div`, {
                        className: `flex w-full max-w-[560px] flex-col items-center gap-8 text-center`,
                        children: [o, c]
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
    z(), Be = U(), c(), xe(), we(), K(), S(), f(), j(), i(), k(), x(), A(), M(), l(), o(), De(), Oe(), je(), Ie(), _e(), D(), Ve = t(H()), B(), de(), X = F(), He = `codex://threads/new`, Ue = `codex://launch`, Z = `codex://dots`, We = 1500, Ge = new Set([`chat`, `work`, `codex`]), Ke = `https://chatgpt.com/download`, qe = {
        hasRouteMeta: !0,
        useScrollRestoration: !0
    }, Je = () => [], Ye = I(function() {
        "use forget";
        let e = (0, Be.c)(52),
            t = pe(),
            i = le(),
            a = new URLSearchParams(i.search),
            o = ce() || a.get(`target`) === `plugin` && re(),
            s;
        e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (s = Te(), e[0] = s) : s = e[0];
        let c = s,
            l = ue(),
            d;
        e[1] === i.search ? d = e[2] : (d = Le(i.search), e[1] = i.search, e[2] = d);
        let f = d,
            p;
        e[3] === Symbol.for(`react.memo_cache_sentinel`) ? (p = {
            key: `chatgpt-codex-download`,
            allowUnauthenticatedTracking: !0
        }, e[3] = p) : p = e[3];
        let {
            trackSelectedPixels: m
        } = Se(p), h;
        e[4] === Symbol.for(`react.memo_cache_sentinel`) ? (h = {
            key: Ce.CODEX_DOWNLOAD,
            allowUnauthenticatedTracking: !0
        }, e[4] = h) : h = e[4];
        let {
            trackSelectedPixels: g
        } = Se(h), _;
        e[5] !== g || e[6] !== m ? (_ = () => {
            g(), m()
        }, e[5] = g, e[6] = m, e[7] = _) : _ = e[7];
        let v = _,
            y = a.get(`source`),
            b = a.get(`app_brand`) === `chatgpt` ? `chatgpt` : `codex`,
            ne = y === `login` || y === `cli-login`,
            x = y === `cli-login`,
            S = y === `login` && b === `chatgpt`,
            C = a.get(`fallback`) === `work` && a.get(`target`) !== `launch` && a.get(`target`) !== `dots` && a.get(`target`) !== `plugin`,
            w = C ? a.get(`q`)?.trim() : void 0,
            E = C ? Re(a, `chatgpt_conversation_id`) : null,
            D = a.get(`account_id`)?.trim(),
            O, k;
        e[8] !== E || e[9] !== w || e[10] !== f || e[11] !== D || e[12] !== S || e[13] !== x || e[14] !== o || e[15] !== i.pathname || e[16] !== i.search || e[17] !== l ? (O = () => {
            if (x) return;
            if (!w && E == null) {
                o || (S ? Ae(f) : q(f));
                return
            }
            let e = new AbortController,
                t = async () => {
                    if (e.signal.aborted) return;
                    if (!te()) {
                        l(`/auth/login?next=${encodeURIComponent(`${i.pathname}${i.search}`)}`, {
                            replace: !0
                        });
                        return
                    }
                    if (D && n.getCookie(oe.Workspace) !== D) {
                        let t = r();
                        if (await t.ensureQueryData(ie()), e.signal.aborted) return;
                        let {
                            updatedAccount: n
                        } = await u(t, D);
                        if (!n) return
                    }
                    if (e.signal.aborted) return;
                    let t = new URLSearchParams(i.search),
                        a = new URLSearchParams({
                            surface: ee.TPP
                        });
                    if (E != null) {
                        w && (a.set(`prompt`, w), a.set(`promptSource`, `codex-app`)), window.location.replace(`/c/${encodeURIComponent(E)}?${a}`);
                        return
                    }
                    let o = t.get(ae);
                    if (o) {
                        a.set(ae, o);
                        let e = t.get(`prompt`);
                        e && a.set(`prompt`, e)
                    } else w && (a.set(`prompt`, w), a.set(`promptSource`, `codex-app`));
                    window.location.replace(`/?${a}`)
                };
            if (o) return t(), () => e.abort();
            let a = !1,
                s = !1,
                c, d = () => {
                    window.clearTimeout(c), c = void 0
                },
                p = () => {
                    s = !0, d(), e.abort()
                },
                m = () => {
                    a && document.visibilityState === `hidden` && p()
                };
            window.addEventListener(`pagehide`, p, {
                once: !0
            }), document.addEventListener(`visibilitychange`, m);
            let h = se(ze, e => {
                if (!e) {
                    d();
                    return
                }
                if (!(s || c !== void 0) && (c = window.setTimeout(t, We), !a)) {
                    a = !0;
                    try {
                        q(f)
                    } catch {
                        d(), t()
                    }
                }
            }, {
                fireImmediately: !0
            });
            return () => {
                e.abort(), d(), window.removeEventListener(`pagehide`, p), document.removeEventListener(`visibilitychange`, m), h()
            }
        }, k = [w, E, f, x, S, o, D, i.pathname, i.search, l], e[8] = E, e[9] = w, e[10] = f, e[11] = D, e[12] = S, e[13] = x, e[14] = o, e[15] = i.pathname, e[16] = i.search, e[17] = l, e[18] = O, e[19] = k) : (O = e[18], k = e[19]), (0, Ve.useEffect)(O, k);
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
        if (ne) {
            let t;
            e[24] !== b || e[25] !== f || e[26] !== S || e[27] !== x ? (t = x ? (0, X.jsx)(Y, {
                appBrand: b
            }) : (0, X.jsx)(Y, {
                appBrand: b,
                onOpen: () => {
                    S ? Ae(f) : q(f)
                }
            }), e[24] = b, e[25] = f, e[26] = S, e[27] = x, e[28] = t) : t = e[28];
            let n;
            return e[29] !== M || e[30] !== t ? (n = (0, X.jsxs)(X.Fragment, {
                children: [M, t]
            }), e[29] = M, e[30] = t, e[31] = n) : n = e[31], n
        }
        let N = o ? Q.chatgptMobileTitle : Q.chatgptTitle,
            P;
        e[32] === Symbol.for(`react.memo_cache_sentinel`) ? (P = (0, X.jsx)(`div`, {
            className: `mb-10 flex size-[88px] items-center justify-center`,
            "aria-hidden": !0,
            children: (0, X.jsx)(G, {
                className: `size-16`
            })
        }), e[32] = P) : P = e[32];
        let F = o ? `mb-9 text-[34px] leading-10 font-semibold tracking-[-0.02em]` : `mb-4 text-[34px] leading-10 font-semibold tracking-[-0.02em]`,
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
        e[38] === o ? z = e[39] : (z = !o && (0, X.jsx)(`p`, {
            className: `text-token-text-secondary mb-9 max-w-[520px] text-[15px] leading-[22px]`,
            children: (0, X.jsx)(R, {
                ...Q.chatgptBody
            })
        }), e[38] = o, e[39] = z);
        let B;
        e[40] !== c || e[41] !== f || e[42] !== o || e[43] !== v ? (B = (0, X.jsx)(`div`, {
            className: `flex flex-wrap items-center justify-center gap-3`,
            children: o ? (0, X.jsx)(T, {
                as: `a`,
                to: Ke,
                color: `primary`,
                className: `h-[34px] min-w-[106px] rounded-full px-4 text-sm leading-[18px] font-medium`,
                children: (0, X.jsx)(R, {
                    ...Q.learnMoreButton
                })
            }) : (0, X.jsxs)(X.Fragment, {
                children: [(0, X.jsx)(T, {
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
                        c != null && (he.recordCodexAppSurfaceAction(`open_app`, `download`), v())
                    }
                })]
            })
        }), e[40] = c, e[41] = f, e[42] = o, e[43] = v, e[44] = B) : B = e[44];
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
//# sourceMappingURL=bae3234b-goq02fr98x2ex8te.js.map
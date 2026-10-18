const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/ba0ab623-bzel41sb9cfad1vb.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/conversation-small-fym1zmu9zimymmm1.js", "assets/30901919-e33mbl5u1y88w5wu.js", "assets/c470f5ab-m68dth1hatzjj8yh.js", "assets/0e5afe53-dl0nq2u2siu8c8q5.js", "assets/conversation-small-iha453gv.css"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    At as n,
    B6 as r,
    Bit as i,
    Btt as a,
    C0 as o,
    Htt as s,
    Jt as c,
    KK as l,
    Lit as u,
    NK as d,
    O0 as f,
    PI as p,
    RV as m,
    S0 as h,
    T0 as g,
    VK as _,
    b5 as v,
    cn as y,
    cz as b,
    hn as x,
    i5 as S,
    iH as C,
    jI as w,
    lz as T,
    nH as E,
    n_ as D,
    o as O,
    oN as k,
    pn as A,
    rH as j,
    s as M,
    sN as N,
    t_ as P,
    y5 as F,
    zK as I,
    zV as L
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as ee,
    At as te,
    Bn as R,
    Ln as z,
    Nn as B,
    Rn as ne,
    Ut as V,
    Vn as H,
    Wt as re,
    cn as U,
    jt as ie,
    ln as W,
    wn as G
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $Wn as ae,
    JGn as oe,
    QWn as se,
    UUn as ce,
    WUn as le,
    XGn as ue,
    YGn as de
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Gy as fe,
    Ky as pe
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    r as me
} from "./1fbff149-o5xkp37eq144138g.js";
import {
    t as he
} from "./c3e2d78f-dfx6ipda8gc0kf2d.js";
import {
    n as ge,
    t as _e
} from "./bb47c0a1-d1hvam8myjas7ee8.js";
import {
    n as ve,
    t as ye
} from "./6c802ee8-m338uqk3ludua1zs.js";
import {
    n as be,
    t as xe
} from "./10f2d773-mq1igh1bot3isil9.js";
import {
    a as Se,
    n as Ce,
    o as we,
    t as Te
} from "./d9e5e62d-ccpk78u7skc1l0u0.js";
import {
    n as Ee,
    t as De
} from "./c677a4d7-gdf0xw4v7qe4r48c.js";
import {
    n as Oe,
    t as ke
} from "./74754c62-hbvmz3kssipzs7t5.js";

function Ae() {
    return Ie === !0 || !1
}

function je(e, t) {
    Ae() && console.log(`[XYZLogger]`, e, t ?? {})
}

function Me() {
    try {
        return document.referrer || null
    } catch {
        return null
    }
}

function Ne() {
    try {
        return i(window.location.href)
    } catch {
        return null
    }
}

function Pe() {
    try {
        let e = new URLSearchParams(window.location.search);
        return {
            utm_source: e.get(`utm_source`),
            utm_medium: e.get(`utm_medium`),
            utm_campaign: e.get(`utm_campaign`)
        }
    } catch {
        return {}
    }
}

function Fe() {
    try {
        return new URLSearchParams(window.location.search).get(`utm_medium`) === `qr`
    } catch {
        return !1
    }
}
var K, q, J, Ie, Le, Re = e((() => {
    s(), u(), K = {
        audience: ``,
        impressions: new Set
    }, q = null, J = !1, Ie = null, Le = {
        init({
            audience: e,
            debug: t = !1
        }) {
            if (typeof t == `boolean` && (Ie = t), q === e) return;
            q && q !== e && (J = !1, K.impressions.clear()), q = e, K.audience = e;
            let n = Me(),
                r = Ne(),
                i = Pe(),
                o = Fe();
            Ae() && J || (a.logPageView(), a.logEventWithStatsig(`ChatGPT for XYZ: Page Viewed`, `chatgpt_web_xyz_page_viewed`, {
                audience: e,
                referrer: n,
                landing_url: r,
                qr: o,
                ...i
            }), J = !0), je(`ChatGPT for XYZ: Page Viewed`, {
                audience: e,
                referrer: n,
                landing_url: r,
                qr: o,
                ...i
            })
        },
        logCategoryClick({
            category_name: e,
            category_slug: t
        }) {
            a.logEventWithStatsig(`ChatGPT for XYZ: Category Clicked`, `chatgpt_web_xyz_category_clicked`, {
                audience: K.audience,
                category_name: e,
                category_slug: t
            }), je(`ChatGPT for XYZ: Category Clicked`, {
                audience: K.audience,
                category_name: e,
                category_slug: t
            })
        },
        logPromptImpression({
            prompt_number: e,
            prompt_title: t,
            category_slug: n
        }) {
            let r = `${n}:${e}`;
            K.impressions.has(r) || (K.impressions.add(r), a.logEvent(`ChatGPT for XYZ: Prompt Impression`, {
                audience: K.audience,
                prompt_number: e,
                prompt_title: t,
                category_slug: n
            }), je(`ChatGPT for XYZ: Prompt Impression`, {
                audience: K.audience,
                prompt_number: e,
                prompt_title: t,
                category_slug: n
            }))
        },
        logPromptClick({
            prompt_number: e,
            prompt_title: t,
            category_slug: n
        }) {
            a.logEventWithStatsig(`ChatGPT for XYZ: Prompt Clicked`, `chatgpt_web_xyz_prompt_clicked`, {
                audience: K.audience,
                prompt_number: e,
                prompt_title: t,
                category_slug: n
            }), je(`ChatGPT for XYZ: Prompt Clicked`, {
                audience: K.audience,
                prompt_number: e,
                prompt_title: t,
                category_slug: n
            })
        },
        logShareClick() {
            a.logEventWithStatsig(`ChatGPT for XYZ: Share Clicked`, `chatgpt_web_xyz_share_clicked`, {
                audience: K.audience,
                url: Ne()
            }), je(`ChatGPT for XYZ: Share Clicked`, {
                audience: K.audience
            })
        },
        resetForDevStrictMode() {
            q = null, J = !1, K.audience = ``, K.impressions.clear()
        }
    }
}));

function ze(e) {
    "use forget";
    let t = (0, Be.c)(16),
        {
            categories: n,
            activeCategory: r,
            onSelect: i,
            className: a,
            disableDarkMode: o
        } = e,
        s = c(),
        l = !o,
        u;
    t[0] !== a || t[1] !== o || t[2] !== l ? (u = F(`z-10 mx-auto -mt-2 flex w-fit gap-2 overflow-x-auto rounded-full p-1`, {
        "bg-token-bg-primary": o,
        "bg-token-bg-tertiary": l
    }, a), t[0] = a, t[1] = o, t[2] = l, t[3] = u) : u = t[3];
    let d;
    if (t[4] !== r || t[5] !== n || t[6] !== i || t[7] !== s) {
        let e;
        t[9] !== r || t[10] !== i || t[11] !== s ? (e = e => (0, Y.jsxs)(`button`, {
            onClick: () => {
                Le.logCategoryClick({
                    category_name: e.name,
                    category_slug: e.slug
                }), i(e)
            },
            className: `relative rounded-full px-4 py-2 font-medium`,
            children: [r.name === e.name && (s ? (0, Y.jsx)(`span`, {
                className: `pointer-events-none absolute inset-0 rounded-full`,
                style: {
                    backgroundColor: e.color
                }
            }) : (0, Y.jsx)(y.span, {
                layoutId: `bubble`,
                className: `bg-token-bg-primary pointer-events-none absolute inset-0 rounded-full transition-colors`,
                style: {
                    backgroundColor: e.color
                },
                transition: {
                    layout: {
                        type: `spring`,
                        bounce: .2,
                        duration: .6
                    }
                }
            })), (0, Y.jsx)(`span`, {
                className: `relative z-10`,
                children: e.name
            })]
        }, e.name), t[9] = r, t[10] = i, t[11] = s, t[12] = e) : e = t[12], d = n.map(e), t[4] = r, t[5] = n, t[6] = i, t[7] = s, t[8] = d
    } else d = t[8];
    let f;
    return t[13] !== u || t[14] !== d ? (f = (0, Y.jsx)(`div`, {
        className: u,
        children: d
    }), t[13] = u, t[14] = d, t[15] = f) : f = t[15], f
}
var Be, Ve, Y, He, Ue = e((() => {
    Be = G(), r(), d(), se(), v(), P(), n(), Ve = t(H()), Re(), Y = R(), He = (0, Ve.memo)(function({
        categories: e,
        activeCategory: t,
        onSelect: n,
        disableDarkMode: r
    }) {
        let i = S(_),
            [a, o] = ae({
                threshold: 0
            }),
            [s, c] = ae({
                threshold: 0
            }),
            [l, u] = (0, Ve.useState)(!0);
        (0, Ve.useEffect)(() => {
            if (i) return;
            let e = D(() => {
                u(window.scrollY > document.body.scrollHeight - window.innerHeight - 200)
            }, 100);
            return window.addEventListener(`scroll`, e), () => window.removeEventListener(`scroll`, e)
        }, [i]);
        let d = i && !a,
            f = !s;
        return (0, Y.jsxs)(Y.Fragment, {
            children: [(0, Y.jsxs)(A, {
                id: `category-toggle`,
                children: [(0, Y.jsx)(`div`, {
                    ref: o
                }), (0, Y.jsx)(ze, {
                    categories: e,
                    activeCategory: t,
                    onSelect: n,
                    className: F({
                        "sticky top-22": i,
                        "shadow-lg": d && i
                    }),
                    disableDarkMode: r
                }), (0, Y.jsx)(`div`, {
                    ref: c
                })]
            }), (0, Y.jsx)(A, {
                id: `category-toggle-mobile`,
                children: (0, Y.jsx)(ze, {
                    categories: e,
                    activeCategory: t,
                    onSelect: n,
                    className: F(`fixed start-0 end-0 bottom-2 shadow-lg transition-[transform_opacity] duration-300`, {
                        "translate-y-0 opacity-100": !i && f && !l,
                        "translate-y-full opacity-0": !i && (!f || l),
                        hidden: i
                    }),
                    disableDarkMode: r
                })
            })]
        })
    })
}));

function We(e) {
    "use forget";
    let t = (0, qe.c)(5),
        {
            className: n
        } = e,
        r;
    t[0] === n ? r = t[1] : (r = F(`underline underline-offset-2`, n), t[0] = n, t[1] = r);
    let i;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, Je.jsx)(B, {
        ...Xe.cookies
    }), t[2] = i) : i = t[2];
    let a;
    return t[3] === r ? a = t[4] : (a = (0, Je.jsx)(ce, {
        className: r,
        onPointerOver: Ke,
        onClick: Ge,
        children: i
    }), t[3] = r, t[4] = a), a
}

function Ge() {
    if (p()) {
        ue();
        return
    }
    f(Ye)
}

function Ke() {
    return Ye.prefetch()
}
var qe, Je, Ye, Xe, Ze = e((() => {
    qe = G(), w(), de(), g(), le(), o(), v(), ne(), Je = R(), W(), Ye = h(() => U(() => import(`./ba0ab623-bzel41sb9cfad1vb.js`).then(e => e.ManageCookiesModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))), Xe = z({
        cookies: {
            id: `Footer.cookies`,
            defaultMessage: `Manage cookies`
        }
    })
}));

function Qe(e) {
    "use forget";
    let t = (0, $e.c)(22),
        {
            assets: n,
            footnote: r,
            prefooterTitle: i,
            prefooterCTALabel: a,
            prefooterCTALink: o,
            disableDarkMode: s
        } = e,
        c = S(l),
        u = (0, et.useContext)(k),
        [d, f] = (0, et.useState)(!1),
        p, m;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (p = () => {
        f(!0)
    }, m = [], t[0] = p, t[1] = m) : (p = t[0], m = t[1]), (0, et.useEffect)(p, m);
    let h = n[2],
        g = h && (d && u ? h.darkUrl ?? h.url : h.url),
        _;
    t[2] !== h || t[3] !== g || t[4] !== c ? (_ = h && (0, X.jsx)(y.img, {
        src: g,
        alt: h.alt,
        className: `mx-auto w-4/5 max-w-[600px] md:w-1/2`,
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        transition: {
            duration: c ? 0 : .5
        }
    }, g), t[2] = h, t[3] = g, t[4] = c, t[5] = _) : _ = t[5];
    let v;
    t[6] === _ ? v = t[7] : (v = (0, X.jsx)(`div`, {
        className: `relative mx-auto max-w-3xl px-4 text-center`,
        children: (0, X.jsx)(x, {
            children: _
        })
    }), t[6] = _, t[7] = v);
    let b;
    t[8] !== s || t[9] !== a || t[10] !== o || t[11] !== i ? (b = i && (0, X.jsxs)(`div`, {
        className: F(`my-4 flex w-full flex-col items-center justify-center gap-4 rounded-2xl p-6 py-10 text-center`, {
            "bg-token-bg-primary": s,
            "bg-token-bg-tertiary": !s
        }),
        children: [(0, X.jsx)(`h2`, {
            className: `text-mkt-h3 max-w-[600px] text-balance`,
            children: i
        }), (0, X.jsxs)(me, {
            color: `primary`,
            as: `a`,
            to: o,
            openNewTab: !0,
            children: [a, (0, X.jsx)(fe, {
                width: `16`,
                height: `16`,
                className: `ms-1`
            })]
        })]
    }), t[8] = s, t[9] = a, t[10] = o, t[11] = i, t[12] = b) : b = t[12];
    let C;
    t[13] === r ? C = t[14] : (C = r && (0, X.jsx)(`p`, {
        children: r
    }), t[13] = r, t[14] = C);
    let w;
    t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (w = (0, X.jsx)(We, {}), t[15] = w) : w = t[15];
    let T;
    t[16] !== b || t[17] !== C ? (T = (0, X.jsxs)(`div`, {
        className: `text-mkt-p2 mx-auto mt-4 flex max-w-screen-2xl flex-col items-center gap-5 px-4 pb-2 text-center whitespace-pre-line sm:px-8 sm:pb-4`,
        children: [b, C, w]
    }), t[16] = b, t[17] = C, t[18] = T) : T = t[18];
    let E;
    return t[19] !== v || t[20] !== T ? (E = (0, X.jsxs)(`footer`, {
        className: `py-4`,
        children: [v, T]
    }), t[19] = v, t[20] = T, t[21] = E) : E = t[21], E
}
var $e, et, X, tt = e((() => {
        $e = G(), he(), Ze(), pe(), r(), d(), N(), v(), n(), et = t(H()), X = R()
    })),
    nt, rt, it, at = e((() => {
        nt = G(), Ee(), Re(), rt = R(), it = e => {
            "use forget";
            let t = (0, nt.c)(17),
                {
                    prompt: n,
                    categorySlug: r,
                    disableDarkMode: i
                } = e,
                {
                    title: a,
                    prompt: o,
                    promptQuery: s,
                    attachments: c,
                    footnote: l,
                    number: u,
                    hint: d,
                    media: f,
                    promptMedia: p
                } = n,
                m, h;
            t[0] !== r || t[1] !== u || t[2] !== a ? (m = () => Le.logPromptImpression({
                prompt_number: u,
                prompt_title: a,
                category_slug: r
            }), h = () => Le.logPromptClick({
                prompt_number: u,
                prompt_title: a,
                category_slug: r
            }), t[0] = r, t[1] = u, t[2] = a, t[3] = m, t[4] = h) : (m = t[3], h = t[4]);
            let g;
            return t[5] !== c || t[6] !== i || t[7] !== l || t[8] !== d || t[9] !== f || t[10] !== p || t[11] !== s || t[12] !== o || t[13] !== m || t[14] !== h || t[15] !== a ? (g = (0, rt.jsx)(De, {
                title: a,
                prompt: o,
                promptQuery: s,
                attachments: c,
                footnote: l,
                hint: d,
                media: f,
                promptMedia: p,
                disableDarkMode: i,
                onImpression: m,
                onClick: h,
                clickAction: `send`
            }), t[5] = c, t[6] = i, t[7] = l, t[8] = d, t[9] = f, t[10] = p, t[11] = s, t[12] = o, t[13] = m, t[14] = h, t[15] = a, t[16] = g) : g = t[16], g
        }
    }));

function ot(e) {
    "use forget";
    let t = (0, dt.c)(18),
        {
            activeCategory: n,
            prompts: r,
            disableDarkMode: i
        } = e,
        a = c(),
        o = S(_),
        s = S(I),
        l;
    bb0: {
        if (!o) {
            let e;
            t[0] === r ? e = t[1] : (e = r.map(ut), t[0] = r, t[1] = e), l = e;
            break bb0
        }
        let e = s ? 3 : 2,
            n;
        if (t[2] !== e || t[3] !== r) {
            n = Array.from({
                length: e
            }, lt);
            let i = Array.from({
                    length: e
                }, ct),
                a = st,
                o = Math.floor(r.length / e) * e;
            for (let t = 0; t < o; t++) {
                let o = r[t],
                    s = a(o),
                    c = t % e;
                n[c].push(o), i[c] = i[c] + s
            }
            for (let e = o; e < r.length; e++) {
                let t = r[e],
                    o = a(t),
                    s = i.indexOf(Math.min(...i));
                n[s].push(t), i[s] = i[s] + o
            }
            t[2] = e, t[3] = r, t[4] = n
        } else n = t[4];l = n
    }
    let u = l,
        d;
    if (t[5] !== n || t[6] !== u || t[7] !== i || t[8] !== o || t[9] !== a) {
        let e;
        t[11] !== n || t[12] !== i || t[13] !== o || t[14] !== a ? (e = (e, t) => (0, Z.jsx)(`div`, {
            className: `flex flex-1 gap-4 sm:flex-col`,
            children: (0, Z.jsx)(x, {
                mode: `wait`,
                children: e.map((e, r) => (0, Z.jsx)(y.div, {
                    className: `w-full backdrop-blur-lg`,
                    initial: {
                        opacity: 0,
                        y: a ? 0 : 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        transition: {
                            duration: .2
                        }
                    },
                    transition: {
                        duration: o ? .4 : .2,
                        delay: o ? t * .05 + r * .05 : 0
                    },
                    children: (0, Z.jsx)(it, {
                        prompt: e,
                        disableDarkMode: i,
                        categorySlug: n.slug
                    })
                }, `${n.name}-${t}-${r}`))
            })
        }, t), t[11] = n, t[12] = i, t[13] = o, t[14] = a, t[15] = e) : e = t[15], d = u.map(e), t[5] = n, t[6] = u, t[7] = i, t[8] = o, t[9] = a, t[10] = d
    } else d = t[10];
    let f;
    return t[16] === d ? f = t[17] : (f = (0, Z.jsx)(`div`, {
        className: `can-hover:[&:has(.prompt-card:hover)_.prompt-card:not(:hover)]:opacity-70 can-hover:[&:has(.prompt-card:focus-within)_.prompt-card:not(:focus-within)]:opacity-70 mx-auto mt-5 flex max-w-screen-2xl flex-col gap-4 px-4 sm:mt-12 sm:flex-row sm:gap-4 sm:px-8`,
        children: d
    }), t[16] = d, t[17] = f), f
}

function st(e) {
    let t = Math.ceil(e.title.length / ht),
        n = Math.ceil(e.prompt.length / gt),
        r = Math.min(2, Math.ceil(e.attachments.length / _t)) * mt;
    return t * ft + n * pt + r
}

function ct() {
    return 0
}

function lt() {
    return []
}

function ut(e) {
    return [e]
}
var dt, Z, ft, pt, mt, ht, gt, _t, vt = e((() => {
    dt = G(), r(), d(), n(), at(), Z = R(), ft = 24, pt = 20, mt = 38, ht = 60, gt = 66, _t = 2
}));

function yt(e, t) {
    return t ? e.darkUrl ?? e.url : e.url
}

function bt(e) {
    "use forget";
    let t = (0, xt.c)(39),
        {
            title: n,
            description: r,
            assets: i,
            overrides: a,
            className: o
        } = e,
        s = S(l),
        c = (0, St.useContext)(k),
        [u, d] = (0, St.useState)(!1),
        f, p;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (f = () => {
        d(!0)
    }, p = [], t[0] = f, t[1] = p) : (f = t[0], p = t[1]), (0, St.useEffect)(f, p);
    let m = i[0],
        h = i[1],
        g;
    t[2] !== u || t[3] !== c || t[4] !== m ? (g = m && yt(m, u && c), t[2] = u, t[3] = c, t[4] = m, t[5] = g) : g = t[5];
    let _ = g,
        v;
    t[6] !== u || t[7] !== c || t[8] !== h ? (v = h && yt(h, u && c), t[6] = u, t[7] = c, t[8] = h, t[9] = v) : v = t[9];
    let b = v,
        C;
    t[10] !== m || t[11] !== _ || t[12] !== s || t[13] !== h || t[14] !== b ? (C = m && h && (0, Q.jsxs)(`div`, {
        className: `md:[h-200px] -my-6 flex h-[240px] justify-around sm:mt-5 sm:mb-0 sm:h-auto`,
        children: [(0, Q.jsx)(y.img, {
            src: _,
            alt: m.alt,
            className: `aspect-auto max-w-[320px] sm:absolute sm:start-10 sm:top-30 sm:w-1/4 md:top-20 lg:-top-24`,
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            transition: {
                duration: s ? 0 : .5
            }
        }, _), (0, Q.jsx)(y.img, {
            src: b,
            alt: h.alt,
            className: `aspect-auto max-w-[320px] sm:absolute sm:end-10 sm:top-30 sm:block sm:w-1/4 md:top-20 lg:-top-24`,
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            transition: {
                duration: s ? 0 : .5
            }
        }, b)]
    }), t[10] = m, t[11] = _, t[12] = s, t[13] = h, t[14] = b, t[15] = C) : C = t[15];
    let w;
    t[16] === C ? w = t[17] : (w = (0, Q.jsx)(x, {
        children: C
    }), t[16] = C, t[17] = w);
    let T = w,
        E;
    t[18] === o ? E = t[19] : (E = F(`relative pt-12 text-center sm:pt-20 sm:pb-28 md:pt-36`, o), t[18] = o, t[19] = E);
    let D;
    t[20] === T ? D = t[21] : (D = (0, Q.jsx)(`div`, {
        className: `hidden sm:block`,
        children: T
    }), t[20] = T, t[21] = D);
    let O = a?.titleMaxWidth,
        A;
    t[22] === O ? A = t[23] : (A = {
        maxWidth: O
    }, t[22] = O, t[23] = A);
    let j;
    t[24] !== A || t[25] !== n ? (j = (0, Q.jsx)(`h1`, {
        className: `text-mkt-h1 mx-auto mb-2 max-w-md text-balance whitespace-pre-line sm:mb-4 sm:max-w-lg`,
        style: A,
        children: n
    }), t[24] = A, t[25] = n, t[26] = j) : j = t[26];
    let M;
    t[27] === r ? M = t[28] : (M = (0, Q.jsx)(`p`, {
        className: `text-mkt-p2 sm:text-mkt-p1 mx-auto max-w-md text-balance whitespace-pre-line sm:max-w-lg`,
        children: r
    }), t[27] = r, t[28] = M);
    let N;
    t[29] === T ? N = t[30] : (N = (0, Q.jsx)(`div`, {
        className: `block sm:hidden`,
        children: T
    }), t[29] = T, t[30] = N);
    let P;
    t[31] !== j || t[32] !== M || t[33] !== N || t[34] !== D ? (P = (0, Q.jsxs)(`div`, {
        className: `relative mx-auto max-w-screen-2xl px-4`,
        children: [D, j, M, N]
    }), t[31] = j, t[32] = M, t[33] = N, t[34] = D, t[35] = P) : P = t[35];
    let I;
    return t[36] !== P || t[37] !== E ? (I = (0, Q.jsx)(`section`, {
        className: E,
        children: P
    }), t[36] = P, t[37] = E, t[38] = I) : I = t[38], I
}
var xt, St, Q, Ct = e((() => {
    xt = G(), r(), d(), N(), v(), n(), St = t(H()), Q = R()
}));

function wt(e) {
    "use forget";
    let t = (0, Ot.c)(56),
        {
            pageData: n,
            effectiveLocale: r,
            audience: i,
            headerNavData: a
        } = e,
        {
            title: o,
            description: s,
            prompts_with_categories: c,
            footnote: l,
            template: u,
            overrides: d,
            prefooterTitle: f,
            prefooterCTALabel: p,
            prefooterCTALink: m
        } = n,
        h = c.map(Dt),
        g;
    t[0] === c ? g = t[1] : (g = c.flatMap(Et).filter(Boolean), t[0] = c, t[1] = g);
    let _ = g,
        {
            hash: v
        } = ie(),
        y;
    t[2] === v ? y = t[3] : (y = e => e.slug === v.slice(1), t[2] = v, t[3] = y);
    let [x, S] = (0, kt.useState)(h.find(y) ?? h[0]), C = u === `colorful`, [w, T] = (0, kt.useState)(!1), E;
    t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (E = () => {
        T(Tt)
    }, t[4] = E) : E = t[4];
    let D = E,
        O = !!a?.secondaryCta,
        k;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (k = function(e) {
        S(e), window.history.replaceState({}, ``, `#${e.slug}`)
    }, t[5] = k) : k = t[5];
    let A = k,
        j, M;
    t[6] === i ? (j = t[7], M = t[8]) : (j = () => {
        Le.init({
            audience: i
        })
    }, M = [i], t[6] = i, t[7] = j, t[8] = M), (0, kt.useEffect)(j, M);
    let N;
    t[9] === C ? N = t[10] : (N = F(`font-oai min-h-screen transition-colors duration-500`, {
        "light text-token-text-primary": C
    }), t[9] = C, t[10] = N);
    let P;
    t[11] === x.color ? P = t[12] : (P = {
        backgroundColor: x.color
    }, t[11] = x.color, t[12] = P);
    let I = n.slug,
        L;
    t[13] !== x.color || t[14] !== C || t[15] !== a || t[16] !== O || t[17] !== w ? (L = a && (0, $.jsxs)(xe.Provider, {
        value: {
            isNavigationMobileOpen: w,
            toggleNavigationMobile: D
        },
        children: [(0, $.jsx)(Se, {
            hideBg: x.color != null && x.color !== ``,
            navData: a,
            disableDarkMode: C,
            style: {
                backgroundColor: x.color
            },
            isHeaderTooCrowdedForLg: O
        }), (0, $.jsx)(Te, {
            data: a,
            isHeaderTooCrowdedForLg: O,
            style: {
                backgroundColor: x.color
            }
        })]
    }), t[13] = x.color, t[14] = C, t[15] = a, t[16] = O, t[17] = w, t[18] = L) : L = t[18];
    let ee = x.assets,
        te = !!a,
        R;
    t[19] === te ? R = t[20] : (R = F({
        "pt-20": te
    }), t[19] = te, t[20] = R);
    let z;
    t[21] !== x.assets || t[22] !== s || t[23] !== d || t[24] !== R || t[25] !== o ? (z = (0, $.jsx)(bt, {
        title: o,
        description: s,
        assets: ee,
        overrides: d,
        className: R
    }), t[21] = x.assets, t[22] = s, t[23] = d, t[24] = R, t[25] = o, t[26] = z) : z = t[26];
    let B;
    t[27] !== h || t[28] !== x || t[29] !== C ? (B = h.length > 1 && (0, $.jsx)(He, {
        categories: h,
        activeCategory: x,
        onSelect: A,
        disableDarkMode: C
    }), t[27] = h, t[28] = x, t[29] = C, t[30] = B) : B = t[30];
    let ne = x.slug === `` ? _ : x.prompts,
        V;
    t[31] !== h || t[32] !== x || t[33] !== C || t[34] !== ne ? (V = (0, $.jsx)(ot, {
        activeCategory: x,
        prompts: ne,
        categories: h,
        disableDarkMode: C
    }), t[31] = h, t[32] = x, t[33] = C, t[34] = ne, t[35] = V) : V = t[35];
    let H;
    t[36] !== x.assets || t[37] !== C || t[38] !== l || t[39] !== p || t[40] !== m || t[41] !== f ? (H = (0, $.jsx)(Qe, {
        assets: x.assets,
        footnote: l,
        prefooterTitle: f,
        prefooterCTALabel: p,
        prefooterCTALink: m,
        disableDarkMode: C
    }), t[36] = x.assets, t[37] = C, t[38] = l, t[39] = p, t[40] = m, t[41] = f, t[42] = H) : H = t[42];
    let re;
    t[43] === Symbol.for(`react.memo_cache_sentinel`) ? (re = (0, $.jsx)(b, {
        children: (0, $.jsx)(oe, {})
    }), t[43] = re) : re = t[43];
    let U;
    t[44] !== r || t[45] !== n.slug || t[46] !== L || t[47] !== z || t[48] !== B || t[49] !== V || t[50] !== H ? (U = (0, $.jsxs)(_e, {
        effectiveLocale: r,
        slug: I,
        children: [L, z, B, V, H, re]
    }), t[44] = r, t[45] = n.slug, t[46] = L, t[47] = z, t[48] = B, t[49] = V, t[50] = H, t[51] = U) : U = t[51];
    let W;
    return t[52] !== U || t[53] !== N || t[54] !== P ? (W = (0, $.jsx)(`div`, {
        className: N,
        style: P,
        children: U
    }), t[52] = U, t[53] = N, t[54] = P, t[55] = W) : W = t[55], W
}

function Tt(e) {
    return !e
}

function Et(e) {
    return e.category.prompts
}

function Dt(e) {
    return e.category
}
var Ot, kt, $, At = e((() => {
        Ot = G(), v(), kt = t(H()), de(), ge(), we(), be(), Ce(), T(), ee(), Ue(), tt(), vt(), Ct(), Re(), $ = R()
    })),
    jt, Mt, Nt, Pt, Ft, It = e((() => {
        ee(), ve(), Oe(), At(), L(), C(), M(), jt = R(), Mt = {
            hasRouteMeta: !0,
            useScrollRestoration: !0
        }, Nt = ({
            data: e,
            params: t,
            location: n
        }) => {
            let r = e,
                i = t.slug;
            if (!i || !r) return [{
                title: `ChatGPT`
            }];
            if (r.variant === `legacy`) return [...j(r.pageData, n.pathname), ...m(`/use-cases/${i}/`, {
                pageLocalizationConfig: r.pageLocalizationConfig
            })];
            if (r.variant === `feature`) return [...E(r.pageData, n.pathname), ...m(`/use-cases/${i}/`, {
                pageLocalizationConfig: r.pageLocalizationConfig
            })];
            let a = r.pageData?.seoTitle ?? r.pageData?.title ?? `ChatGPT`,
                o = r.pageData?.seoDescription ?? r.pageData?.description ?? ``,
                s = `https://chatgpt.com/use-cases/${i}`,
                c = [{
                    title: a
                }, {
                    name: `description`,
                    content: o
                }, {
                    property: `og:site_name`,
                    content: `ChatGPT`
                }, {
                    property: `og:type`,
                    content: `website`
                }, {
                    property: `og:title`,
                    content: a
                }, {
                    property: `og:description`,
                    content: o
                }, {
                    property: `og:url`,
                    content: s
                }, {
                    property: `twitter:card`,
                    content: `summary_large_image`
                }],
                l = r.pageData?.seoImage?.url,
                u = r.pageData?.seoImageAlt ?? r.pageData?.seoImage?.alt;
            return l ? [...c, {
                property: `og:image`,
                content: l
            }, ...u ? [{
                property: `og:image:alt`,
                content: u
            }] : []] : [...c]
        }, Pt = V(function() {
            let e = te();
            return e.variant === `legacy` ? (0, jt.jsx)(ke, {
                page: e.pageData,
                footer: e.footerData,
                headerNav: e.headerNavData,
                locale: e.locale
            }) : e.variant === `feature` ? (0, jt.jsx)(ye, {
                page: e.pageData,
                footer: e.footerData,
                headerNav: e.headerNavData,
                locale: e.locale,
                contentType: `featurePage`
            }) : (0, jt.jsx)(wt, {
                pageData: e.pageData,
                effectiveLocale: e.locale,
                audience: e.audience,
                headerNavData: e.headerNavData
            })
        }), Ft = re(O)
    }));
e((() => {
    It()
}))();
export {
    Ft as ErrorBoundary, Pt as
    default, Mt as handle, Nt as meta
};
//# sourceMappingURL=(_lang).use-cases._slug-fmbla48d.js.map
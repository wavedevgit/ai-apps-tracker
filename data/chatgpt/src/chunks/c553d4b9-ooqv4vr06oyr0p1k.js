const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/78f263ec-orbywzelc8ywyxe3.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/f95c8da2-nufmskrv6g15liyr.js", "assets/3a6eb079-hjakmv42muhkqjzj.js", "assets/9225e854-duvmjkx79b210rzz.js", "assets/9e9d0eec-nkmykeb4giti97x1.js", "assets/ea7792a2-d9m2q4bht39qycrh.js", "assets/9e38ec96-duvmjkx79b210rzz.js", "assets/1dc5ae5b-m4zpgpi28ytp6g05.js", "assets/layout-dpob9t8h.css", "assets/c7a90257-h8bu5i1psxpuvu4f.js", "assets/interactions-hy4ve8ll.css", "assets/page-shell-o4ofibvl.css"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    b5 as n,
    n_ as r,
    t_ as i,
    y5 as a
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as o,
    Vn as s,
    cn as c,
    ln as l,
    wn as u
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    n as d,
    r as f,
    t as p
} from "./bb47c0a1-d1hvam8myjas7ee8.js";
import {
    n as m,
    t as h
} from "./10f2d773-mq1igh1bot3isil9.js";
import {
    a as g,
    i as _,
    n as v,
    o as y,
    r as b,
    t as x
} from "./d9e5e62d-ccpk78u7skc1l0u0.js";
import {
    n as S,
    t as C
} from "./f95c8da2-nufmskrv6g15liyr.js";
import {
    i as w
} from "./f75c6596-hd1clrgicwul3oz2.js";
import {
    n as T,
    r as E
} from "./caf26fba-jattp4grbw1rel05.js";
var D, O, k, A, j = e((() => {
        D = u(), O = t(s()), y(), S(), k = o(), A = e => {
            "use forget";
            let t = (0, D.c)(3),
                {
                    replaced: n
                } = (0, O.useContext)(C),
                r;
            return t[0] !== e || t[1] !== n ? (r = (0, k.jsx)(g, {
                ...e,
                replaced: n
            }), t[0] = e, t[1] = n, t[2] = r) : r = t[2], r
        }
    })),
    M, N, P, F, I = e((() => {
        M = u(), N = o(), P = `https://openaiassets.blob.core.windows.net/$web/pro-giveaway/c157388a-8388-4185-8168-f4ba44493007/flowers.png`, F = () => {
            "use forget";
            let e = (0, M.c)(1),
                t;
            return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, N.jsx)(`div`, {
                "aria-hidden": !0,
                className: `pointer-events-none fixed inset-0 overflow-hidden`,
                children: (0, N.jsx)(`div`, {
                    className: `absolute inset-[-24px]`,
                    style: {
                        background: `linear-gradient(178deg, #F9F8FF 31.58%, rgba(255, 255, 255, 0) 113.53%), url(${P}) lightgray center bottom / 100% 100% no-repeat`,
                        filter: `blur(10px)`
                    }
                })
            }), e[0] = t) : t = e[0], t
        }
    }));

function L(e) {
    return !e
}
var R, z, B, V, H, U, W = e((() => {
    R = u(), j(), n(), i(), z = t(s()), d(), w(), E(), I(), _(), y(), m(), v(), B = o(), l(), V = (0, z.lazy)(() => c(async () => {
        let {
            DotsPageShell: e
        } = await import(`./78f263ec-orbywzelc8ywyxe3.js`).then(e => (e.n(), e.r));
        return {
            DotsPageShell: e
        }
    }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])).then(({
        DotsPageShell: e
    }) => ({
        default: e
    }))), H = e => {
        "use forget";
        let t = (0, R.c)(29),
            {
                headerNav: n,
                footer: i,
                hideLanguageSwitcher: a,
                locale: o,
                layout: s,
                slug: c,
                headerCta: l,
                futuresModalDataBySlug: u,
                customBackground: d,
                customPageShell: f,
                children: m
            } = e,
            [g, _] = (0, z.useState)(!1),
            v;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (v = () => {
            _(L)
        }, t[0] = v) : v = t[0];
        let y = v,
            [b, x] = (0, z.useState)(!0),
            S, C;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (S = () => {
            x(window.scrollY <= 0);
            let e = r(() => {
                x(window.scrollY <= 0)
            }, 30);
            return window.addEventListener(`scroll`, e), () => {
                window.removeEventListener(`scroll`, e)
            }
        }, C = [], t[1] = S, t[2] = C) : (S = t[1], C = t[2]), z.useEffect(S, C);
        let w;
        t[3] === g ? w = t[4] : (w = {
            isNavigationMobileOpen: g,
            toggleNavigationMobile: y
        }, t[3] = g, t[4] = w);
        let T;
        t[5] !== m || t[6] !== i || t[7] !== u || t[8] !== l || t[9] !== n || t[10] !== a || t[11] !== b || t[12] !== s || t[13] !== o || t[14] !== c ? (T = (0, B.jsx)(U, {
            layout: s,
            locale: o,
            slug: c,
            headerNav: n,
            headerCta: l,
            isAtTop: b,
            footer: i,
            hideLanguageSwitcher: a,
            futuresModalDataBySlug: u,
            children: m
        }), t[5] = m, t[6] = i, t[7] = u, t[8] = l, t[9] = n, t[10] = a, t[11] = b, t[12] = s, t[13] = o, t[14] = c, t[15] = T) : T = t[15];
        let E;
        t[16] !== s || t[17] !== o || t[18] !== c || t[19] !== T ? (E = (0, B.jsx)(p, {
            effectiveLocale: o,
            slug: c,
            layout: s,
            children: T
        }), t[16] = s, t[17] = o, t[18] = c, t[19] = T, t[20] = E) : E = t[20];
        let D;
        t[21] !== w || t[22] !== E ? (D = (0, B.jsx)(h.Provider, {
            value: w,
            children: E
        }), t[21] = w, t[22] = E, t[23] = D) : D = t[23];
        let O = D,
            k = f ?? V,
            A;
        return t[24] !== k || t[25] !== O || t[26] !== d || t[27] !== s ? (A = s === `dotsPage` ? (0, B.jsx)(z.Suspense, {
            fallback: null,
            children: (0, B.jsx)(k, {
                background: d,
                children: O
            })
        }) : O, t[24] = k, t[25] = O, t[26] = d, t[27] = s, t[28] = A) : A = t[28], A
    }, U = ({
        layout: e,
        headerNav: t,
        headerCta: n,
        isAtTop: r,
        children: i,
        footer: o,
        hideLanguageSwitcher: s,
        futuresModalDataBySlug: c
    }) => {
        "use no forget";
        let {
            theme: l
        } = f(), u = e === `dotsPage`, d = ([`contactSales`, `imageGen`, `proGiveaway`, `codexPage`, `futuresPage`].includes(e ?? ``) || u) && r, p = [`proGiveaway`, `codexPage`, `futuresPage`].includes(e ?? ``) && r, m = e === `proGiveaway`, h = e === `futuresPage`, _ = u ? A : g, v = !!t?.secondaryCta;
        return (0, B.jsxs)(B.Fragment, {
            children: [e === `contactSales` && (0, B.jsx)(`div`, {
                className: `pointer-events-none absolute inset-0 bg-[url("https://cdn.openai.com/ctf-cdn/30bafe12-ad88-4ae0-8ed8-0045ffc1a17c/form-bg.jpg")] bg-cover bg-no-repeat [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_-300px,rgba(0,0,0,0)_300px)] [background-position-y:-40vw]`
            }), e === `proGiveaway` && (0, B.jsx)(F, {}), e === `futuresPage` && (0, B.jsx)(`div`, {
                className: `h-mkt-header-height pointer-events-none absolute inset-x-0 top-0 hidden md:block`,
                style: {
                    backgroundColor: `#DFC8FE`
                }
            }), (0, B.jsxs)(`div`, {
                className: a(`text-token-text-primary font-oai transition-colors duration-500`, {
                    "bg-token-bg-primary": e === `contactSales`,
                    "relative z-10": e === `proGiveaway`,
                    "light text-token-text-primary": m,
                    "bg-linear-to-b from-(--bg-secondary) to-(--bg-primary) to-25%": e === `imageGen` && l === 0,
                    "bg-linear-to-b from-[#F5FAFF] to-[#E5F3FF] to-100% dark:from-[#000D19] dark:to-[#001223]": e === `imageGen` && l === 1,
                    "bg-linear-to-b from-[#F9F5FE] to-[#F9F5FE] to-100% dark:from-[#100A19] dark:to-[#170C26]": e === `imageGen` && l === 2,
                    "bg-linear-to-b from-[#FFFBED] to-[#FFF6D9] to-100% dark:from-[#1A1400] dark:to-[#271D00]": e === `imageGen` && l === 3
                }),
                children: [(0, B.jsx)(_, {
                    navData: t,
                    hideBg: d,
                    headerCta: n,
                    disableDarkMode: p,
                    isHeaderTooCrowdedForLg: v
                }), (0, B.jsx)(x, {
                    data: t,
                    isHeaderTooCrowdedForLg: v
                }), e === `futuresPage` ? (0, B.jsx)(T, {
                    modalDataBySlug: c ?? {},
                    children: i
                }) : i, o && (0, B.jsx)(b, {
                    footer: o,
                    header: t,
                    hideLanguageSwitcher: s,
                    disableDarkMode: h,
                    customBackgroundColor: e === `futuresPage` ? `#DFC8FE` : u ? `var(--dots-surface)` : void 0
                })]
            })]
        })
    }
}));
export {
    W as n, H as t
};
//# sourceMappingURL=c553d4b9-ooqv4vr06oyr0p1k.js.map
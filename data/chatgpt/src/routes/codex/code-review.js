import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $9 as n,
    AT as r,
    At as i,
    Nrt as a,
    Prt as o,
    cn as s,
    dT as c,
    eet as l,
    kT as u,
    lT as d,
    q9 as f
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as p,
    Bn as m,
    Ln as h,
    Nn as g,
    Pt as _,
    Rn as v,
    Ut as y,
    Vn as b,
    lt as x,
    wn as S,
    zn as C
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    DJ as w,
    EJ as T,
    Jnn as E,
    Unn as D,
    _Pn as O,
    cdn as k,
    sdn as A,
    vPn as j
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Xv as M,
    Yv as N
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    a as P,
    i as F
} from "./45e797a6-isfgqckgp4686hhk.js";
var I, L, R, z, B = e((() => {
    I = t(b(), 1), c(), L = m(), R = `AspectRatio`, z = I.forwardRef((e, t) => {
        let {
            ratio: n = 1 / 1,
            style: r,
            ...i
        } = e;
        return (0, L.jsx)(`div`, {
            style: {
                position: `relative`,
                width: `100%`,
                paddingBottom: `${100/n}%`
            },
            "data-radix-aspect-ratio-wrapper": ``,
            children: (0, L.jsx)(d.div, {
                ...i,
                ref: t,
                style: {
                    ...r,
                    position: `absolute`,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            })
        })
    }), z.displayName = R
}));

function V(e) {
    "use forget";
    let t = (0, H.c)(52),
        {
            productName: n,
            subtitle: r,
            availabilityMessage: i,
            ctaHeading: a,
            learnMore: o,
            image: c,
            renderCTA: l,
            onShow: u
        } = e,
        d = C(),
        f, p;
    t[0] === u ? (f = t[1], p = t[2]) : (f = () => {
        u?.()
    }, p = [u], t[0] = u, t[1] = f, t[2] = p), (0, U.useEffect)(f, p);
    let m;
    t[3] === l ? m = t[4] : (m = l(), t[3] = l, t[4] = m);
    let h;
    t[5] === o.message ? h = t[6] : (h = (0, W.jsx)(g, {
        ...o.message
    }), t[5] = o.message, t[6] = h);
    let _;
    t[7] === o.icon ? _ = t[8] : (_ = o.icon ? (0, W.jsx)(o.icon, {
        className: `icon-sm`
    }) : null, t[7] = o.icon, t[8] = _);
    let v;
    t[9] !== o.onClick || t[10] !== o.url || t[11] !== h || t[12] !== _ ? (v = (0, W.jsxs)(`a`, {
        href: o.url,
        target: `_blank`,
        rel: `noreferrer`,
        className: `text-token-text-tertiary flex items-center gap-1 text-sm`,
        onClick: o.onClick,
        children: [h, _]
    }), t[9] = o.onClick, t[10] = o.url, t[11] = h, t[12] = _, t[13] = v) : v = t[13];
    let y;
    t[14] !== m || t[15] !== v ? (y = (0, W.jsxs)(`div`, {
        className: `flex flex-col items-center gap-4 sm:flex-row`,
        children: [m, v]
    }), t[14] = m, t[15] = v, t[16] = y) : y = t[16];
    let b = y,
        x, S, w;
    t[17] === Symbol.for(`react.memo_cache_sentinel`) ? (S = {
        opacity: 0
    }, w = {
        opacity: 1
    }, x = {
        duration: 1
    }, t[17] = x, t[18] = S, t[19] = w) : (x = t[17], S = t[18], w = t[19]);
    let T;
    t[20] === n ? T = t[21] : (T = (0, W.jsx)(`div`, {
        className: `text-center text-5xl font-semibold`,
        children: n
    }), t[20] = n, t[21] = T);
    let E;
    t[22] === r ? E = t[23] : (E = (0, W.jsx)(`p`, {
        className: `text-center text-lg`,
        children: (0, W.jsx)(g, {
            ...r
        })
    }), t[22] = r, t[23] = E);
    let D;
    t[24] === i ? D = t[25] : (D = (0, W.jsx)(`p`, {
        className: `text-token-text-tertiary text-center text-sm`,
        children: (0, W.jsx)(g, {
            ...i
        })
    }), t[24] = i, t[25] = D);
    let O;
    t[26] !== b || t[27] !== T || t[28] !== E || t[29] !== D ? (O = (0, W.jsxs)(`div`, {
        className: `flex max-w-xl flex-col items-center gap-4`,
        children: [T, E, b, D]
    }), t[26] = b, t[27] = T, t[28] = E, t[29] = D, t[30] = O) : O = t[30];
    let k, A, j;
    t[31] === Symbol.for(`react.memo_cache_sentinel`) ? (k = {
        opacity: 0,
        y: 12
    }, A = {
        opacity: 1,
        y: 0
    }, j = {
        duration: .5
    }, t[31] = k, t[32] = A, t[33] = j) : (k = t[31], A = t[32], j = t[33]);
    let M = c.ratio ?? 1.5,
        N = c.src,
        P;
    t[34] !== c.alt || t[35] !== d ? (P = d.formatMessage(c.alt), t[34] = c.alt, t[35] = d, t[36] = P) : P = t[36];
    let F;
    t[37] !== c.src || t[38] !== P ? (F = (0, W.jsx)(`img`, {
        className: `absolute w-full max-w-5xl rounded-xl`,
        src: N,
        alt: P
    }), t[37] = c.src, t[38] = P, t[39] = F) : F = t[39];
    let I;
    t[40] !== M || t[41] !== F ? (I = (0, W.jsx)(s.div, {
        initial: k,
        animate: A,
        transition: j,
        className: `flex w-full max-w-5xl items-center justify-center`,
        children: (0, W.jsx)(z, {
            className: `flex w-full items-center justify-center`,
            ratio: M,
            children: F
        })
    }), t[40] = M, t[41] = F, t[42] = I) : I = t[42];
    let L;
    t[43] === a ? L = t[44] : (L = (0, W.jsx)(`div`, {
        className: `text-xl font-medium sm:text-2xl`,
        children: (0, W.jsx)(g, {
            ...a
        })
    }), t[43] = a, t[44] = L);
    let R;
    t[45] !== b || t[46] !== L ? (R = (0, W.jsxs)(`div`, {
        className: `bg-token-bg-secondary flex w-full max-w-5xl flex-col items-center gap-8 rounded-xl px-4 py-12 sm:py-24`,
        children: [L, b]
    }), t[45] = b, t[46] = L, t[47] = R) : R = t[47];
    let B;
    return t[48] !== O || t[49] !== I || t[50] !== R ? (B = (0, W.jsxs)(s.div, {
        className: `bg-token-bg-primary flex min-h-screen w-full flex-col items-center justify-center gap-8 overflow-scroll px-8 py-20 sm:gap-12 sm:px-24 sm:py-28`,
        initial: S,
        animate: w,
        transition: x,
        children: [O, I, R]
    }), t[48] = O, t[49] = I, t[50] = R, t[51] = B) : B = t[51], B
}
var H, U, W, G = e((() => {
    H = S(), B(), i(), U = t(b()), v(), W = m()
}));

function K() {
    let e = O(),
        t = Z.availability;
    return e ? (0, J.jsx)(x, {
        to: `/codex/cloud?codex_onboarding=code_review`,
        replace: !0
    }) : (0, J.jsx)(V, {
        productName: `Code review with Codex`,
        subtitle: Z.subtitle,
        availabilityMessage: t,
        ctaHeading: Z.tryCodex,
        learnMore: {
            url: Y,
            message: Z.learnMore,
            icon: N,
            onClick: () => {
                T.recordLearnMoreLinkClicked()
            }
        },
        image: {
            src: `https://persistent.oaistatic.com/chatgpt/codex-code-review.png`,
            alt: Z.imageAltText
        },
        renderCTA: () => (0, J.jsx)(ee, {}),
        onShow: () => {
            T.recordCodexCodeReviewLandingPageShown()
        }
    })
}

function ee() {
    "use forget";
    let e = (0, q.c)(6),
        t;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = o(), e[0] = t) : t = e[0];
    let r = t,
        i = _(),
        a = Z.upgradeButton,
        s;
    e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (s = n({
        openModalLocation: X
    }), e[1] = s) : s = e[1];
    let c = s,
        l;
    e[2] === i ? l = e[3] : (l = r && c ? (0, J.jsx)(u, {
        size: `large`,
        onClick: () => {
            T.recordUpgradeToTryItButtonClicked(), E({
                navigate: i,
                checkoutOriginProvenance: {
                    checkoutOriginProductExperience: A.CODEX,
                    checkoutOriginDeliverySurface: `web`
                },
                openModalLocation: X
            })
        },
        children: (0, J.jsx)(g, {
            ...a
        })
    }) : r ? null : (0, J.jsx)(u, {
        size: `large`,
        onClick: () => {
            i(`/auth/login?next=/codex/cloud?codex_onboarding=code_review`), T.recordLogInButtonClicked(`code_review_landing`)
        },
        children: (0, J.jsx)(g, {
            id: `CodexCodeReviewLandingPage.logInToTryIt`,
            defaultMessage: `Log in to try Code review`
        })
    }), e[2] = i, e[3] = l);
    let d;
    return e[4] === l ? d = e[5] : (d = (0, J.jsx)(J.Fragment, {
        children: l
    }), e[4] = l, e[5] = d), d
}
var q, J, Y, X, Z, te = e((() => {
        q = S(), k(), r(), M(), f(), D(), a(), j(), G(), w(), v(), p(), J = m(), Y = `https://developers.openai.com/codex/cloud/code-review`, X = l.CodexCodeReviewLandingPage, Z = h({
            subtitle: {
                id: `CodexCodeReviewLandingPage.subtitle`,
                defaultMessage: `Codex automatically reviews new PRs and handles follow-ups, all directly in Github`
            },
            tryCodex: {
                id: `CodexCodeReviewLandingPage.tryCodeReview`,
                defaultMessage: `Try now`
            },
            learnMore: {
                id: `CodexCodeReviewLandingPage.learnMore`,
                defaultMessage: `Learn more`
            },
            imageAltText: {
                id: `CodexCodeReviewLandingPage.imageAltText`,
                defaultMessage: `Reviewing code changes with Code review`
            },
            availability: {
                id: `CodexCodeReviewLandingPage.availableToPlusProTeamEnterpriseAndEdu`,
                defaultMessage: `Code review is available on ChatGPT Plus, Pro, Business, Enterprise, and Edu plans`
            },
            upgradeButton: {
                id: `CodexCodeReviewLandingPage.upgradeToTryIt`,
                defaultMessage: `Upgrade to try`
            }
        })
    })),
    Q, $, ne = e((() => {
        p(), te(), Q = m(), F(), $ = y(function() {
            return (0, Q.jsx)(K, {})
        })
    }));
e((() => {
    ne()
}))();
export {
    $ as
    default, P as meta
};
//# sourceMappingURL=codex.code-review-ge1foydb.js.map
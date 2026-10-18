import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $V as n,
    B6 as r,
    BK as i,
    IK as a,
    JP as o,
    NK as s,
    NV as c,
    PV as l,
    RV as u,
    dot as d,
    i5 as f,
    iH as p,
    o as m,
    s as h,
    uot as g,
    zP as ee,
    zV as te
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as _,
    At as ne,
    Bn as v,
    Ln as y,
    Nn as b,
    Pt as re,
    Rn as ie,
    Ut as ae,
    Vn as x,
    Wt as oe,
    wn as S,
    zn as C
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    gyn as se,
    lFt as ce,
    lyn as le,
    uFt as ue
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    $c as de,
    Gh as fe,
    Gn as pe,
    Hh as w,
    Kn as T,
    Om as E,
    bl as D,
    g as O,
    h as k,
    km as A,
    qh as j,
    rl as M,
    xl as N,
    yl as P
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    n as F,
    t as I
} from "./9f7bb6d3-l9ls9y254izawjwa.js";
import {
    a as L,
    i as R,
    n as z,
    o as B,
    r as me,
    t as V
} from "./872491a3-ep4wkhq4nd7ax9bt.js";
import {
    f as he,
    v as ge
} from "./04ce686a-eiehd09sp7pp693h.js";

function _e(e, t = e => V[e].h1.defaultMessage, n = `en`) {
    return [...e].sort((e, r) => t(e).localeCompare(t(r), n, {
        sensitivity: `base`
    }) || e.localeCompare(r))
}

function ve() {
    "use forget";
    let e = (0, H.c)(3),
        t;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, W.jsx)(he, {
        className: `shrink-0`,
        size: `large`
    }), e[0] = t) : t = e[0];
    let n;
    e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, W.jsx)(`h1`, {
        className: `text-token-text-primary text-heading-app font-semibold`,
        children: (0, W.jsx)(b, {
            ...G.title
        })
    }), e[1] = n) : n = e[1];
    let r;
    return e[2] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, W.jsx)(`div`, {
        className: `mx-auto flex w-full max-w-3xl flex-col items-center`,
        children: (0, W.jsxs)(`section`, {
            className: `flex w-full flex-col items-center gap-4 text-center`,
            children: [t, (0, W.jsxs)(`div`, {
                className: `flex w-full flex-col gap-1`,
                children: [n, (0, W.jsx)(`p`, {
                    className: `text-token-interactive-label-tertiary-default text-body-regular mx-auto max-w-3xl`,
                    children: (0, W.jsx)(b, {
                        ...G.description
                    })
                })]
            })]
        })
    }), e[2] = r) : r = e[2], r
}

function ye(e) {
    "use forget";
    let t = (0, H.c)(6),
        {
            conversation: n
        } = e,
        r = j() ?? void 0,
        i;
    t[0] === n ? i = t[1] : (i = (0, W.jsx)(be, {
        conversation: n
    }), t[0] = n, t[1] = i);
    let a;
    return t[2] !== n || t[3] !== r || t[4] !== i ? (a = (0, W.jsx)(w, {
        conversation: n,
        skipChatAttachmentLimits: !0,
        store: r,
        children: i
    }), t[2] = n, t[3] = r, t[4] = i, t[5] = a) : a = t[5], a
}

function be(e) {
    "use forget";
    let t = (0, H.c)(20),
        {
            conversation: n
        } = e,
        r;
    t[0] === n ? r = t[1] : (r = () => le(n), t[0] = n, t[1] = r);
    let i = f(r),
        a = f(Se),
        o = f(xe),
        s = re(),
        c = a ? G.composerPlaceholderDesktop : G.composerPlaceholderMobile,
        l;
    t[2] !== n.id || t[3] !== s ? (l = () => {
        s(`/c/${n.id}`)
    }, t[2] = n.id, t[3] = s, t[4] = l) : l = t[4];
    let u = l,
        d, p;
    t[5] !== n || t[6] !== u ? (d = e => {
        A({
            callsiteId: `request_completion.writing_tools.landing_page_composer.1`,
            conversation: n,
            ...P(e)
        }), u()
    }, p = async e => {
        A({
            callsiteId: `request_completion.writing_tools.landing_page_composer.2`,
            conversation: n,
            ...await D(e)
        }), u()
    }, t[5] = n, t[6] = u, t[7] = d, t[8] = p) : (d = t[7], p = t[8]);
    let m;
    t[9] !== n || t[10] !== i.id || t[11] !== c || t[12] !== o || t[13] !== d || t[14] !== p ? (m = (0, W.jsx)(pe, {
        conversation: n,
        currentModelId: i.id,
        isNewThread: !0,
        isProjectThread: !1,
        entrySurface: `chat_composer`,
        disableDraftPersistence: !0,
        disableAdvancedVoiceMode: o,
        disableVoiceButton: o,
        hideHeader: !0,
        layoutMode: `center`,
        pinToVirtualKeyboard: !1,
        placeholder: c,
        onContinueGenerating: d,
        onRequestCompletion: p
    }), t[9] = n, t[10] = i.id, t[11] = c, t[12] = o, t[13] = d, t[14] = p, t[15] = m) : m = t[15];
    let h;
    return t[16] !== n || t[17] !== i || t[18] !== m ? (h = (0, W.jsx)(ce, {
        children: (0, W.jsx)(de, {
            className: `mx-auto w-full max-w-3xl`,
            conversation: n,
            currentModelConfig: i,
            isProjectThread: !1,
            noKeyboard: !0,
            children: m
        })
    }), t[16] = n, t[17] = i, t[18] = m, t[19] = h) : h = t[19], h
}

function xe() {
    return a()
}

function Se() {
    return i()
}

function Ce(e) {
    "use forget";
    let t = (0, H.c)(21),
        {
            enabledToolSlugs: n
        } = e,
        r = C(),
        i;
    t[0] === r ? i = t[1] : (i = e => r.formatMessage(V[e].h1), t[0] = r, t[1] = i);
    let a = i,
        o, s, c, u, d;
    if (t[2] !== n || t[3] !== a || t[4] !== r.locale) {
        let e = _e(n, a, r.locale);
        c = `writing-tools-heading`, u = `mx-auto flex w-full max-w-[624px] flex-col gap-4 pb-8`, t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, W.jsx)(`h2`, {
            id: `writing-tools-heading`,
            className: `text-token-text-primary text-lg leading-6 font-semibold tracking-[-0.45px]`,
            children: (0, W.jsx)(b, {
                ...G.toolsHeading
            })
        }), t[10] = d) : d = t[10], o = `grid w-full grid-cols-2 gap-2 md:grid-cols-4`;
        let i;
        t[11] === a ? i = t[12] : (i = e => {
            let t = V[e].icon,
                n = a(e);
            return (0, W.jsx)(`li`, {
                className: `min-w-0`,
                children: (0, W.jsxs)(`a`, {
                    className: `border-token-border-light bg-token-bg-elevated-primary hover:bg-token-bg-tertiary focus-visible:ring-token-text-primary flex h-[90px] min-w-0 flex-col justify-between overflow-clip rounded-[10px] border px-3 pt-3 pb-[7px] text-start transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent`,
                    href: l(`/writing/${e}/`),
                    children: [(0, W.jsx)(t, {
                        className: `shrink-0`,
                        size: `small`
                    }), (0, W.jsx)(`span`, {
                        className: `text-token-text-primary line-clamp-2 text-sm leading-5 tracking-[-0.18px]`,
                        children: n
                    })]
                })
            }, e)
        }, t[11] = a, t[12] = i), s = e.map(i), t[2] = n, t[3] = a, t[4] = r.locale, t[5] = o, t[6] = s, t[7] = c, t[8] = u, t[9] = d
    } else o = t[5], s = t[6], c = t[7], u = t[8], d = t[9];
    let f;
    t[13] !== o || t[14] !== s ? (f = (0, W.jsx)(`ul`, {
        className: o,
        children: s
    }), t[13] = o, t[14] = s, t[15] = f) : f = t[15];
    let p;
    return t[16] !== c || t[17] !== u || t[18] !== d || t[19] !== f ? (p = (0, W.jsxs)(`section`, {
        "aria-labelledby": c,
        className: u,
        children: [d, f]
    }), t[16] = c, t[17] = u, t[18] = d, t[19] = f, t[20] = p) : p = t[20], p
}

function we(e) {
    "use forget";
    let t = (0, H.c)(8),
        {
            conversation: n,
            enabledToolSlugs: r
        } = e,
        i;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, W.jsx)(ve, {}), t[0] = i) : i = t[0];
    let a;
    t[1] === n ? a = t[2] : (a = (0, W.jsx)(`div`, {
        className: `my-8`,
        children: (0, W.jsx)(ye, {
            conversation: n
        })
    }), t[1] = n, t[2] = a);
    let o;
    t[3] === r ? o = t[4] : (o = (0, W.jsx)(Ce, {
        enabledToolSlugs: r
    }), t[3] = r, t[4] = o);
    let s;
    return t[5] !== a || t[6] !== o ? (s = (0, W.jsxs)(W.Fragment, {
        children: [i, a, o]
    }), t[5] = a, t[6] = o, t[7] = s) : s = t[7], s
}

function Te(e) {
    "use forget";
    let t = (0, H.c)(2),
        {
            enabledToolSlugs: n
        } = e,
        r;
    return t[0] === n ? r = t[1] : (r = (0, W.jsx)(I, {
        children: (0, W.jsx)(Ee, {
            enabledToolSlugs: n
        })
    }), t[0] = n, t[1] = r), r
}

function Ee(e) {
    "use forget";
    let t = (0, H.c)(18),
        {
            enabledToolSlugs: n
        } = e,
        r = (0, U.use)(ee),
        i;
    t[0] === r ? i = t[1] : (i = d(r), t[0] = r, t[1] = i);
    let a = i;
    O(a);
    let o = C(),
        s;
    t[2] === o ? s = t[3] : (s = o.formatMessage(K.title), t[2] = o, t[3] = s);
    let c = s,
        l;
    t[4] === o ? l = t[5] : (l = o.formatMessage(K.description), t[4] = o, t[5] = l);
    let u = l,
        f;
    t[6] !== u || t[7] !== c ? (f = (0, W.jsx)(L, {
        title: c,
        description: u
    }), t[6] = u, t[7] = c, t[8] = f) : f = t[8];
    let p;
    t[9] !== a || t[10] !== n ? (p = (0, W.jsx)(`main`, {
        className: `@w-md/main:px-6 mx-auto flex w-full max-w-4xl flex-1 flex-col px-4 pt-12 pb-16 md:pt-16`,
        children: (0, W.jsx)(we, {
            conversation: a,
            enabledToolSlugs: n
        })
    }), t[9] = a, t[10] = n, t[11] = p) : p = t[11];
    let m;
    t[12] !== a || t[13] !== p ? (m = (0, W.jsx)(me, {
        conversation: a,
        children: p
    }), t[12] = a, t[13] = p, t[14] = m) : m = t[14];
    let h;
    return t[15] !== f || t[16] !== m ? (h = (0, W.jsxs)(W.Fragment, {
        children: [f, m]
    }), t[15] = f, t[16] = m, t[17] = h) : h = t[17], h
}
var H, U, W, G, K, De = e((() => {
        H = S(), F(), E(), o(), M(), fe(), se(), N(), ue(), T(), r(), s(), c(), g(), k(), B(), R(), ge(), z(), U = t(x()), ie(), _(), W = v(), G = y({
            title: {
                id: `writing-tools.landing-page.title`,
                defaultMessage: `Writing with ChatGPT`
            },
            description: {
                id: `writing-tools.landing-page.description`,
                defaultMessage: `Turn your rough draft into polished writing.`
            },
            toolsHeading: {
                id: `writing-tools.landing-page.tools-heading`,
                defaultMessage: `Explore writing tools`
            },
            composerPlaceholderDesktop: {
                id: `writing-tools.landing-page.composer-placeholder.desktop`,
                defaultMessage: `Start with a draft, notes, or assignment`
            },
            composerPlaceholderMobile: {
                id: `writing-tools.landing-page.composer-placeholder.mobile`,
                defaultMessage: `Write something`
            }
        }), K = y({
            title: {
                id: `writing-tools.landing-page.seo-title`,
                defaultMessage: `ChatGPT Writing Tools | Improve Your Writing with AI`
            },
            description: {
                id: `writing-tools.landing-page.seo-description`,
                defaultMessage: `Get help writing with ChatGPT. Rewrite text, check grammar, summarize notes, create citations, build resumes, and polish your work in one place.`
            }
        })
    })),
    q, J, Y, X, Z, Q, $, Oe = e((() => {
        _(), q = S(), De(), te(), p(), h(), J = v(), Y = `/writing/`, X = {
            hasRouteMeta: !0,
            useScrollRestoration: !0
        }, Z = ({
            location: e
        }) => [...u(Y, {
            useAllProductLocales: !0
        }), n(e.pathname)], Q = ae(function() {
            "use forget";
            let e = (0, q.c)(2),
                {
                    enabledToolSlugs: t
                } = ne(),
                n;
            return e[0] === t ? n = e[1] : (n = (0, J.jsx)(Te, {
                enabledToolSlugs: t
            }), e[0] = t, e[1] = n), n
        }), $ = oe(m)
    }));
e((() => {
    Oe()
}))();
export {
    $ as ErrorBoundary, Q as
    default, X as handle, Z as meta
};
//# sourceMappingURL=(_lang).writing._index-mw3x7cex.js.map
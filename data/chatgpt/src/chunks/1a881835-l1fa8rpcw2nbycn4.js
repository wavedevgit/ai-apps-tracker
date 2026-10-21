import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    JT as n,
    X5 as r,
    Y5 as i,
    YT as a,
    o,
    s
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    Bn as c,
    Ht as l,
    Ln as u,
    Nn as d,
    Q as f,
    Rn as p,
    Ut as m,
    Vn as h,
    Vt as g
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    MJ as _,
    jJ as v
} from "./conversation-small-kzsalymynzuddxee.js";
import {
    MS as y,
    NS as b,
    VC as x,
    dC as S
} from "./c2675c8c-ossqum2x3eut0sh8.js";
import {
    t as C
} from "./9ac7a75a-l9slh9v6x4adbsun.js";
import {
    i as w,
    o as T
} from "./e19f3910-lgeeqbhmp0xakbkl.js";
import {
    a as E,
    n as D,
    o as O,
    t as k
} from "./6313cbac-e5hl863fl4prr1xq.js";
import {
    n as A,
    r as j
} from "./eb7d3911-hmnspnwx8mncs41w.js";

function M(e) {
    if (e.get(`target`) === `team-join`) {
        let t = e.getAll(`team_id`),
            n = t.length === 1 ? t[0].trim() : null;
        return n ? `codex://teams/${encodeURIComponent(n)}/join` : null
    }
    let t = e.getAll(`url`);
    return t.length === 0 ? D({
        prompt: e.get(`prompt`),
        originUrl: e.get(`originUrl`),
        path: e.get(`path`)
    }) : t.length !== 1 || [`prompt`, `originUrl`, `path`].some(t => e.has(t)) ? null : k(t[0])
}
var N, P, F, I, L, R, z, B = e((() => {
    f(), a(), y(), S(), T(), E(), A(), _(), s(), r(), N = t(h()), p(), P = c(), F = {
        hasRouteMeta: !0,
        useScrollRestoration: !0
    }, I = () => [{
        title: `ChatGPT deeplink`
    }], L = l(function() {
        let e = j(),
            [t] = g(),
            r = M(t),
            a = C(),
            {
                trackSelectedPixels: o
            } = b({
                key: `chatgpt-codex-download`,
                allowUnauthenticatedTracking: !0
            }),
            {
                trackSelectedPixels: s
            } = b({
                key: x.CODEX_DOWNLOAD,
                allowUnauthenticatedTracking: !0
            }),
            c = () => {
                s(), o()
            };
        return (0, N.useEffect)(() => {
            r != null && O(r)
        }, [r]), (0, P.jsxs)(`main`, {
            className: `text-token-text-primary relative min-h-screen overflow-hidden bg-[#F6F8FB] dark:bg-[#080C1C] dark:text-white`,
            children: [(0, P.jsx)(`div`, {
                "aria-hidden": !0,
                className: `absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(140,187,255,0.24),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(66,99,235,0.18),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(246,248,251,0.96))] dark:bg-[radial-gradient(circle_at_top_left,rgba(142,181,255,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(100,124,255,0.22),transparent_30%),linear-gradient(180deg,rgba(8,12,28,0.98),rgba(11,16,36,0.96))]`
            }), (0, P.jsx)(`div`, {
                className: `relative mx-auto flex min-h-screen w-full max-w-6xl items-center px-4 py-10 md:px-6 lg:px-8`,
                children: (0, P.jsxs)(`div`, {
                    className: `grid w-full items-center gap-10 lg:grid-cols-[minmax(0,400px)_minmax(0,680px)] xl:gap-12`,
                    children: [(0, P.jsxs)(`section`, {
                        className: `order-2 flex flex-col items-start lg:order-1`,
                        children: [(0, P.jsx)(`h1`, {
                            className: `mt-5 max-w-md text-[36px] leading-[1.02] font-semibold tracking-[-0.04em] md:text-[52px]`,
                            children: (0, P.jsx)(d, {
                                ...R.title
                            })
                        }), (0, P.jsx)(`p`, {
                            className: `mt-4 max-w-md text-base leading-7 text-[#334064] md:text-lg md:leading-8 dark:text-white/78`,
                            children: (0, P.jsx)(d, {
                                ...R.body
                            })
                        }), r == null ? (0, P.jsx)(`p`, {
                            className: `mt-4 max-w-md text-sm leading-6 text-[#5C698C] dark:text-white/65`,
                            children: (0, P.jsx)(d, {
                                ...R.missingDetails
                            })
                        }) : null, (0, P.jsxs)(`div`, {
                            className: `mt-8 flex w-full max-w-sm flex-col gap-3`,
                            children: [a == null ? null : (0, P.jsx)(n, {
                                type: `button`,
                                color: `primary`,
                                onClick: () => {
                                    v.recordCodexAppSurfaceAction(`deeplink`, `download`), w({
                                        trackSelectedPixels: c,
                                        redirectToGetStarted: !1
                                    })
                                },
                                children: (0, P.jsx)(d, {
                                    ...R.downloadButton
                                })
                            }), (0, P.jsx)(n, {
                                type: `button`,
                                color: a == null ? `primary` : `secondary`,
                                disabled: r == null,
                                onClick: () => {
                                    r != null && O(r)
                                },
                                children: (0, P.jsx)(d, {
                                    ...R.openButton
                                })
                            })]
                        })]
                    }), (0, P.jsx)(`div`, {
                        className: `order-1 lg:order-2 lg:ms-auto lg:w-full lg:max-w-[680px]`,
                        children: (0, P.jsx)(`div`, {
                            className: `rounded-[28px] border border-black/8 bg-white/78 p-3 shadow-[0_24px_80px_rgba(19,31,74,0.12)] backdrop-blur md:rounded-[32px] md:p-4 dark:border-white/10 dark:bg-white/6 dark:shadow-[0_24px_80px_rgba(0,0,0,0.3)]`,
                            children: (0, P.jsx)(`div`, {
                                className: i(`overflow-hidden rounded-[22px] bg-[#EEF3FB] md:rounded-[26px]`, `dark:bg-[#0D1227]`),
                                children: (0, P.jsx)(`img`, {
                                    src: e.onboardingStartUrl,
                                    alt: R.previewAlt.defaultMessage,
                                    className: `block h-auto w-full object-cover`
                                })
                            })
                        })
                    })]
                })
            })]
        })
    }), R = u({
        title: {
            id: `wham.codexDeeplink.title`,
            defaultMessage: `Opening ChatGPT...`
        },
        body: {
            id: `wham.codexDeeplink.body`,
            defaultMessage: `We're trying to open ChatGPT automatically. If nothing happens, please download the app, get set up, and then open ChatGPT again to continue.`
        },
        missingDetails: {
            id: `wham.codexDeeplink.missingDetails`,
            defaultMessage: `This link is missing the task details ChatGPT needs to reopen your work.`
        },
        downloadButton: {
            id: `wham.codexDeeplink.downloadButton`,
            defaultMessage: `Download the app`
        },
        openButton: {
            id: `wham.codexDeeplink.openButton`,
            defaultMessage: `Open ChatGPT`
        },
        previewAlt: {
            id: `wham.codexDeeplink.previewAlt`,
            defaultMessage: `Preview of the ChatGPT desktop app`
        }
    }), z = m(o)
}));
export {
    I as a, B as i, L as n, F as r, z as t
};
//# sourceMappingURL=1a881835-l1fa8rpcw2nbycn4.js.map
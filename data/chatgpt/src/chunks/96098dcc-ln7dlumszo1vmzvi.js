const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/86bfab85-nm9o31htp9t2xc8x.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/0d45f5fd-mincl2mx6m8nd4oa.js", "assets/0d45f5fd-f5evotvdxlgj0ghq.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AU as n,
    BU as r,
    CY as i,
    HU as a,
    L0 as o,
    MU as s,
    P5 as ee,
    PU as c,
    TE as l,
    X5 as u,
    Xst as d,
    Y5 as f,
    g8 as p,
    grt as te,
    hF as ne,
    hrt as re,
    ix as m,
    j0 as h,
    mrt as g,
    oC as _,
    oct as v,
    pF as y,
    rY as b,
    rx as x,
    sC as S,
    tY as ie,
    wE as C,
    wY as w
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    Bn as T,
    Nn as E,
    Rn as D,
    Vn as O,
    cn as k,
    ln as A,
    zn as j
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    DEt as M,
    Hbt as N,
    SL as P,
    TEt as ae,
    Vbt as oe,
    l_ as se,
    o_ as F,
    xL as ce
} from "./conversation-small-kzsalymynzuddxee.js";
import {
    n as le,
    t as I
} from "./f6a81ab7-jebmnfxlj3tw7goy.js";
import {
    r as L,
    t as R
} from "./0fbccedd-dxfwh6t1iw5yo5zo.js";
import {
    n as z,
    t as B
} from "./c19d65aa-m63j5yal71riy79r.js";

function V({
    wrapperClassName: e,
    codeClassName: t,
    language: n,
    content: r,
    shouldWrapCode: i = !1,
    removeTopBorderRadius: s,
    showActionBar: c = !0,
    showStickyRightContent: l = !0,
    codeContainerClassName: u,
    title: d
}) {
    let p = ne(),
        m = (0, W.useRef)(null),
        h = a(),
        g = ee(o),
        v = (0, W.useContext)(ae)?.isActivelyStreaming ?? !1,
        [y, b] = (0, W.useState)(`code`),
        S = n?.toLowerCase() === `mermaid`,
        C = S && y === `diagram`,
        w = (0, W.useCallback)(e => {
            e.preventDefault(), e.stopPropagation();
            let t = window.getSelection()?.toString();
            t && _(t, void 0, e)
        }, []),
        T = (0, W.useCallback)(e => {
            let t = (e, t, n) => {
                    if (g || p?.id == null || t === void 0) return;
                    let r = ie(p.id);
                    r != null && P({
                        source: e,
                        type: `copy`,
                        messageId: t,
                        serverThreadId: r,
                        selectedText: n,
                        location: `code-snippet`,
                        contentType: `code`
                    })
                },
                n = J(e.target);
            _(r, h, e), t(`mouse`, n, r)
        }, [r, h, g, p]),
        D = j(),
        {
            isWithinDataAnalysisToolMessage: O
        } = (0, W.useContext)(B),
        [k, A] = (0, W.useState)(null);
    (0, W.useEffect)(() => {
        K().then(e => {
            if (e != null) try {
                A(e.highlightCode(r, n))
            } catch (e) {
                if (!(e instanceof Error && /Unknown language/i.test(e.message))) throw e
            }
        })
    }, [r, n]);
    let M = n === `svg` || (n === `xml` || n === `html`) && ue(r),
        N = (0, W.useMemo)(() => k?.html.split(/(<span[^>]*>.*?<\/span>)/g).filter(Boolean), [k?.html]),
        F = M ? (0, G.jsx)(I, {
            svgString: r,
            className: `max-h-96 w-full`
        }) : N && N.length > 0 ? (0, G.jsx)(`span`, {
            children: N.map((e, t) => (0, G.jsx)(q, {
                htmlSegment: e
            }, t))
        }) : k?.html ? (0, G.jsx)(`span`, {
            dangerouslySetInnerHTML: {
                __html: k.html
            }
        }) : (0, G.jsx)(`span`, {
            children: r
        });
    return (0, G.jsx)(U, {
        ref: m,
        title: d ?? k?.language ?? n,
        stickyTitleRightContent: l && (0, G.jsxs)(`div`, {
            className: `bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs`,
            children: [O && (0, G.jsx)(H, {}), S && (0, G.jsxs)(`label`, {
                className: f(`flex items-center gap-2 font-sans text-xs`, v ? `text-token-text-tertiary` : `text-token-text-secondary`),
                children: [(0, G.jsx)(E, {
                    id: `rFpifq`,
                    defaultMessage: `Diagram`
                }), (0, G.jsx)(x, {
                    withinLabel: !0,
                    size: `small`,
                    disabled: v,
                    checked: C,
                    onCheckedChange: e => {
                        re.count(te.DEFAULT, `chatgpt_code_block_view_toggled`, {
                            view: e ? `diagram` : `code`
                        }), b(e ? `diagram` : `code`)
                    }
                })]
            }), (0, G.jsx)(oe, {
                buttonText: D.formatMessage({
                    id: `zIa6ZQ`,
                    defaultMessage: `Copy code`
                }),
                onCopy: T,
                className: `py-1`,
                iconClassName: `icon-sm`
            })]
        }),
        codeContainerClassName: u,
        className: e,
        removeTopBorderRadius: s,
        showActionBar: c,
        children: C ? (0, G.jsx)($, {
            onCopy: w,
            children: (0, G.jsx)(R, {
                source: r,
                enableMermaidUiImprovements: se()
            })
        }) : (0, G.jsx)(Q, {
            $shouldWrap: i,
            className: t,
            onCopy: w,
            children: F
        })
    })
}

function H() {
    let e = s(!0),
        {
            data: t = !1
        } = c(d.ShowExpandedCodeView),
        n = j();
    return (0, G.jsxs)(`div`, {
        className: `border-token-border-medium flex items-center gap-1`,
        children: [(0, G.jsx)(`label`, {
            htmlFor: `ada-always-show`,
            children: (0, G.jsx)(E, {
                defaultMessage: `Always show details`,
                id: `message.tools.codeInterpreter.alwaysShowAnalysis`
            })
        }), (0, G.jsx)(x, {
            id: `ada-always-show`,
            size: `small`,
            onCheckedChange: t => {
                e.mutate({
                    setting: d.ShowExpandedCodeView,
                    value: t
                })
            },
            checked: t,
            "aria-label": t ? n.formatMessage({
                defaultMessage: `Toggle to always expand detail view for code analysis on`,
                id: `message.tools.codeInterpreter.alwaysShowAnalysis.enabled`
            }) : n.formatMessage({
                defaultMessage: `Toggle to always expand detail view for code analysis off`,
                id: `message.tools.codeInterpreter.alwaysShowAnalysis.disabled`
            })
        })]
    })
}

function U({
    children: e,
    title: t,
    stickyTitleRightContent: n,
    className: r,
    codeContainerClassName: i,
    ref: a,
    removeTopBorderRadius: o,
    showActionBar: s = !0
}) {
    return (0, G.jsxs)(Y, {
        className: r,
        children: [s && (0, G.jsxs)(G.Fragment, {
            children: [(0, G.jsx)(X, {
                $removeTopBorderRadius: o,
                children: t
            }), (0, G.jsx)(`div`, {
                className: `sticky top-[calc(var(--sticky-padding-top)+9*var(--spacing))]`,
                children: (0, G.jsx)(`div`, {
                    className: `absolute end-0 bottom-0 flex h-9 items-center pe-2`,
                    children: n
                })
            })]
        }), (0, G.jsx)(Z, {
            ref: a,
            className: i,
            children: e
        })]
    })
}

function ue(e) {
    return e.trim().startsWith(`<svg`)
}
var W, G, K, q, J, Y, X, Z, Q, $, de = e((() => {
    v(), le(), F(), L(), y(), N(), m(), h(), ce(), M(), z(), n(), p(), b(), r(), S(), g(), u(), i(), W = t(O()), D(), l(), G = T(), A(), K = w(() => k(() => import(`./86bfab85-nm9o31htp9t2xc8x.js`), __vite__mapDeps([0, 1, 2, 3]))), q = W.memo(function({
        htmlSegment: e
    }) {
        return (0, G.jsx)(`span`, {
            dangerouslySetInnerHTML: {
                __html: e
            }
        })
    }), J = e => {
        if (e instanceof Element) return e.closest(`[data-message-id]`)?.getAttribute(`data-message-id`) ?? void 0
    }, Y = C.div`contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-bg-secondary-surface`, X = C.div`flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-bg-secondary-surface select-none ${e=>e.$removeTopBorderRadius?``:`rounded-t-2xl corner-t-superellipse/1.1`}`, Z = function({
        children: e,
        className: t,
        ref: n
    }) {
        return (0, G.jsx)(`div`, {
            ref: n,
            className: f(`overflow-y-auto p-4`, t),
            dir: `ltr`,
            children: e
        })
    }, Q = C.code`${e=>e.$shouldWrap?`whitespace-pre-wrap!`:`whitespace-pre!`}`, $ = C.div`
  flex w-full items-start justify-center
`
}));
export {
    de as n, V as t
};
//# sourceMappingURL=96098dcc-ln7dlumszo1vmzvi.js.map
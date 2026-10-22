const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/86bfab85-nm9o31htp9t2xc8x.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/0d45f5fd-mincl2mx6m8nd4oa.js", "assets/0d45f5fd-f5evotvdxlgj0ghq.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as n,
    AE as r,
    Art as i,
    B0 as a,
    DU as o,
    J5 as s,
    K0 as ee,
    LU as c,
    QJ as te,
    ax as l,
    bF as ne,
    bY as u,
    dC as d,
    dct as f,
    eY as p,
    fC as m,
    ix as h,
    jU as g,
    jrt as _,
    kE as v,
    kU as y,
    krt as b,
    l7 as x,
    u7 as S,
    vF as C,
    xY as w,
    xct as T,
    zU as re
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    Bn as E,
    Nn as D,
    Rn as O,
    Vn as k,
    cn as A,
    ln as j,
    zn as M
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    CEt as N,
    Fbt as ie,
    Ibt as P,
    _L as F,
    l_ as ae,
    o_ as oe,
    vL as se,
    xEt as ce
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    n as le,
    t as ue
} from "./f6a81ab7-e24vfosfzzp4w8hz.js";
import {
    r as I,
    t as L
} from "./0fbccedd-kweiz1fo49epvn3n.js";
import {
    n as R,
    t as z
} from "./c19d65aa-m63j5yal71riy79r.js";

function B({
    wrapperClassName: e,
    codeClassName: t,
    language: n,
    content: r,
    shouldWrapCode: a = !1,
    removeTopBorderRadius: o,
    showActionBar: c = !0,
    showStickyRightContent: l = !0,
    codeContainerClassName: u,
    title: f
}) {
    let p = ne(),
        m = (0, W.useRef)(null),
        g = re(),
        v = s(ee),
        y = (0, W.useContext)(ce)?.isActivelyStreaming ?? !1,
        [b, S] = (0, W.useState)(`code`),
        C = n?.toLowerCase() === `mermaid`,
        w = C && b === `diagram`,
        T = (0, W.useCallback)(e => {
            e.preventDefault(), e.stopPropagation();
            let t = window.getSelection()?.toString();
            t && d(t, void 0, e)
        }, []),
        E = (0, W.useCallback)(e => {
            let t = (e, t, n) => {
                    if (v || p?.id == null || t === void 0) return;
                    let r = te(p.id);
                    r != null && se({
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
            d(r, g, e), t(`mouse`, n, r)
        }, [r, g, v, p]),
        O = M(),
        {
            isWithinDataAnalysisToolMessage: k
        } = (0, W.useContext)(z),
        [A, j] = (0, W.useState)(null);
    (0, W.useEffect)(() => {
        K().then(e => {
            if (e != null) try {
                j(e.highlightCode(r, n))
            } catch (e) {
                if (!(e instanceof Error && /Unknown language/i.test(e.message))) throw e
            }
        })
    }, [r, n]);
    let N = n === `svg` || (n === `xml` || n === `html`) && U(r),
        P = (0, W.useMemo)(() => A?.html.split(/(<span[^>]*>.*?<\/span>)/g).filter(Boolean), [A?.html]),
        F = N ? (0, G.jsx)(ue, {
            svgString: r,
            className: `max-h-96 w-full`
        }) : P && P.length > 0 ? (0, G.jsx)(`span`, {
            children: P.map((e, t) => (0, G.jsx)(q, {
                htmlSegment: e
            }, t))
        }) : A?.html ? (0, G.jsx)(`span`, {
            dangerouslySetInnerHTML: {
                __html: A.html
            }
        }) : (0, G.jsx)(`span`, {
            children: r
        });
    return (0, G.jsx)(H, {
        ref: m,
        title: f ?? A?.language ?? n,
        stickyTitleRightContent: l && (0, G.jsxs)(`div`, {
            className: `bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs`,
            children: [k && (0, G.jsx)(V, {}), C && (0, G.jsxs)(`label`, {
                className: x(`flex items-center gap-2 font-sans text-xs`, y ? `text-token-text-tertiary` : `text-token-text-secondary`),
                children: [(0, G.jsx)(D, {
                    id: `rFpifq`,
                    defaultMessage: `Diagram`
                }), (0, G.jsx)(h, {
                    withinLabel: !0,
                    size: `small`,
                    disabled: y,
                    checked: w,
                    onCheckedChange: e => {
                        i.count(_.DEFAULT, `chatgpt_code_block_view_toggled`, {
                            view: e ? `diagram` : `code`
                        }), S(e ? `diagram` : `code`)
                    }
                })]
            }), (0, G.jsx)(ie, {
                buttonText: O.formatMessage({
                    id: `zIa6ZQ`,
                    defaultMessage: `Copy code`
                }),
                onCopy: E,
                className: `py-1`,
                iconClassName: `icon-sm`
            })]
        }),
        codeContainerClassName: u,
        className: e,
        removeTopBorderRadius: o,
        showActionBar: c,
        children: w ? (0, G.jsx)($, {
            onCopy: T,
            children: (0, G.jsx)(L, {
                source: r,
                enableMermaidUiImprovements: ae()
            })
        }) : (0, G.jsx)(Q, {
            $shouldWrap: a,
            className: t,
            onCopy: T,
            children: F
        })
    })
}

function V() {
    let e = y(!0),
        {
            data: t = !1
        } = g(f.ShowExpandedCodeView),
        n = M();
    return (0, G.jsxs)(`div`, {
        className: `border-token-border-medium flex items-center gap-1`,
        children: [(0, G.jsx)(`label`, {
            htmlFor: `ada-always-show`,
            children: (0, G.jsx)(D, {
                defaultMessage: `Always show details`,
                id: `message.tools.codeInterpreter.alwaysShowAnalysis`
            })
        }), (0, G.jsx)(h, {
            id: `ada-always-show`,
            size: `small`,
            onCheckedChange: t => {
                e.mutate({
                    setting: f.ShowExpandedCodeView,
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

function H({
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

function U(e) {
    return e.trim().startsWith(`<svg`)
}
var W, G, K, q, J, Y, X, Z, Q, $, de = e((() => {
    T(), le(), oe(), I(), C(), P(), l(), a(), F(), N(), R(), o(), n(), p(), c(), m(), b(), S(), u(), W = t(k()), O(), r(), G = E(), j(), K = w(() => A(() => import(`./86bfab85-nm9o31htp9t2xc8x.js`), __vite__mapDeps([0, 1, 2, 3]))), q = W.memo(function({
        htmlSegment: e
    }) {
        return (0, G.jsx)(`span`, {
            dangerouslySetInnerHTML: {
                __html: e
            }
        })
    }), J = e => {
        if (e instanceof Element) return e.closest(`[data-message-id]`)?.getAttribute(`data-message-id`) ?? void 0
    }, Y = v.div`contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-bg-secondary-surface`, X = v.div`flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-bg-secondary-surface select-none ${e=>e.$removeTopBorderRadius?``:`rounded-t-2xl corner-t-superellipse/1.1`}`, Z = function({
        children: e,
        className: t,
        ref: n
    }) {
        return (0, G.jsx)(`div`, {
            ref: n,
            className: x(`overflow-y-auto p-4`, t),
            dir: `ltr`,
            children: e
        })
    }, Q = v.code`${e=>e.$shouldWrap?`whitespace-pre-wrap!`:`whitespace-pre!`}`, $ = v.div`
  flex w-full items-start justify-center
`
}));
export {
    de as n, B as t
};
//# sourceMappingURL=96098dcc-kkclyumyrhqma4l5.js.map
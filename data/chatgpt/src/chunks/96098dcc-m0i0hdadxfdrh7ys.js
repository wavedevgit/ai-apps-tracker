const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/86bfab85-nm9o31htp9t2xc8x.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/0d45f5fd-mincl2mx6m8nd4oa.js", "assets/0d45f5fd-f5evotvdxlgj0ghq.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AE as n,
    B0 as r,
    DU as i,
    Drt as a,
    Ert as o,
    K0 as s,
    LU as c,
    Ort as ee,
    QJ as te,
    ax as l,
    bF as ne,
    bY as u,
    c7 as d,
    cct as f,
    dC as p,
    eY as m,
    fC as h,
    ix as g,
    jU as _,
    k8 as v,
    kE as y,
    kU as b,
    l7 as x,
    q5 as re,
    vF as S,
    vct as C,
    xY as w,
    zU as ie
} from "./4813494d-itnrgnth03y1sm9d.js";
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
    Fbt as M,
    Pbt as ae,
    _L as oe,
    bEt as N,
    gL as P,
    l_ as se,
    o_ as ce,
    vEt as le
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    n as ue,
    t as F
} from "./f6a81ab7-oe5myvotamlj1kud.js";
import {
    r as I,
    t as L
} from "./0fbccedd-3pe7hyccy7syi9xx.js";
import {
    n as R,
    t as z
} from "./c19d65aa-m63j5yal71riy79r.js";

function B({
    wrapperClassName: e,
    codeClassName: t,
    language: n,
    content: r,
    shouldWrapCode: i = !1,
    removeTopBorderRadius: o,
    showActionBar: c = !0,
    showStickyRightContent: l = !0,
    codeContainerClassName: u,
    title: f
}) {
    let m = ne(),
        h = (0, W.useRef)(null),
        _ = ie(),
        v = re(s),
        y = (0, W.useContext)(le)?.isActivelyStreaming ?? !1,
        [b, x] = (0, W.useState)(`code`),
        S = n?.toLowerCase() === `mermaid`,
        C = S && b === `diagram`,
        w = (0, W.useCallback)(e => {
            e.preventDefault(), e.stopPropagation();
            let t = window.getSelection()?.toString();
            t && p(t, void 0, e)
        }, []),
        T = (0, W.useCallback)(e => {
            let t = (e, t, n) => {
                    if (v || m?.id == null || t === void 0) return;
                    let r = te(m.id);
                    r != null && oe({
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
            p(r, _, e), t(`mouse`, n, r)
        }, [r, _, v, m]),
        D = j(),
        {
            isWithinDataAnalysisToolMessage: O
        } = (0, W.useContext)(z),
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
    let M = n === `svg` || (n === `xml` || n === `html`) && U(r),
        N = (0, W.useMemo)(() => k?.html.split(/(<span[^>]*>.*?<\/span>)/g).filter(Boolean), [k?.html]),
        P = M ? (0, G.jsx)(F, {
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
    return (0, G.jsx)(H, {
        ref: h,
        title: f ?? k?.language ?? n,
        stickyTitleRightContent: l && (0, G.jsxs)(`div`, {
            className: `bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs`,
            children: [O && (0, G.jsx)(V, {}), S && (0, G.jsxs)(`label`, {
                className: d(`flex items-center gap-2 font-sans text-xs`, y ? `text-token-text-tertiary` : `text-token-text-secondary`),
                children: [(0, G.jsx)(E, {
                    id: `rFpifq`,
                    defaultMessage: `Diagram`
                }), (0, G.jsx)(g, {
                    withinLabel: !0,
                    size: `small`,
                    disabled: y,
                    checked: C,
                    onCheckedChange: e => {
                        a.count(ee.DEFAULT, `chatgpt_code_block_view_toggled`, {
                            view: e ? `diagram` : `code`
                        }), x(e ? `diagram` : `code`)
                    }
                })]
            }), (0, G.jsx)(ae, {
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
        removeTopBorderRadius: o,
        showActionBar: c,
        children: C ? (0, G.jsx)($, {
            onCopy: w,
            children: (0, G.jsx)(L, {
                source: r,
                enableMermaidUiImprovements: se()
            })
        }) : (0, G.jsx)(Q, {
            $shouldWrap: i,
            className: t,
            onCopy: w,
            children: P
        })
    })
}

function V() {
    let e = b(!0),
        {
            data: t = !1
        } = _(f.ShowExpandedCodeView),
        n = j();
    return (0, G.jsxs)(`div`, {
        className: `border-token-border-medium flex items-center gap-1`,
        children: [(0, G.jsx)(`label`, {
            htmlFor: `ada-always-show`,
            children: (0, G.jsx)(E, {
                defaultMessage: `Always show details`,
                id: `message.tools.codeInterpreter.alwaysShowAnalysis`
            })
        }), (0, G.jsx)(g, {
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
    C(), ue(), ce(), I(), S(), M(), l(), r(), P(), N(), R(), i(), v(), m(), c(), h(), o(), x(), u(), W = t(O()), D(), n(), G = T(), A(), K = w(() => k(() => import(`./86bfab85-nm9o31htp9t2xc8x.js`), __vite__mapDeps([0, 1, 2, 3]))), q = W.memo(function({
        htmlSegment: e
    }) {
        return (0, G.jsx)(`span`, {
            dangerouslySetInnerHTML: {
                __html: e
            }
        })
    }), J = e => {
        if (e instanceof Element) return e.closest(`[data-message-id]`)?.getAttribute(`data-message-id`) ?? void 0
    }, Y = y.div`contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-bg-secondary-surface`, X = y.div`flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-bg-secondary-surface select-none ${e=>e.$removeTopBorderRadius?``:`rounded-t-2xl corner-t-superellipse/1.1`}`, Z = function({
        children: e,
        className: t,
        ref: n
    }) {
        return (0, G.jsx)(`div`, {
            ref: n,
            className: d(`overflow-y-auto p-4`, t),
            dir: `ltr`,
            children: e
        })
    }, Q = y.code`${e=>e.$shouldWrap?`whitespace-pre-wrap!`:`whitespace-pre!`}`, $ = y.div`
  flex w-full items-start justify-center
`
}));
export {
    de as n, B as t
};
//# sourceMappingURL=96098dcc-m0i0hdadxfdrh7ys.js.map
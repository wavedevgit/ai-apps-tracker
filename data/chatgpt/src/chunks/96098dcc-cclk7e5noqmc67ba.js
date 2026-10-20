const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/86bfab85-nm9o31htp9t2xc8x.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/0d45f5fd-mincl2mx6m8nd4oa.js", "assets/0d45f5fd-f5evotvdxlgj0ghq.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $st as n,
    CE as r,
    CY as i,
    F0 as a,
    J5 as o,
    M5 as s,
    NU as c,
    SY as l,
    Ust as u,
    VU as ee,
    aC as d,
    crt as te,
    eY as ne,
    fF as f,
    jU as p,
    k0 as m,
    kU as h,
    lrt as re,
    m8 as g,
    mF as ie,
    nY as _,
    nx as v,
    oC as y,
    q5 as b,
    rx as x,
    srt as S,
    wE as C,
    zU as w
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as T,
    Hn as E,
    Pn as D,
    Vn as O,
    ln as k,
    un as A,
    zn as j
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    Fbt as ae,
    Ibt as M,
    a_ as N,
    c_ as oe,
    vL as P,
    xEt as se,
    yEt as ce,
    yL as le
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    n as ue,
    t as F
} from "./f6a81ab7-htw4wmdx583c7vy2.js";
import {
    r as I,
    t as L
} from "./0fbccedd-g5j5mxt9uk7x2vx2.js";
import {
    n as R,
    t as z
} from "./c19d65aa-fylzt6zu5ov04jbp.js";

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
    let p = ie(),
        m = (0, W.useRef)(null),
        h = ee(),
        g = s(a),
        _ = (0, W.useContext)(ce)?.isActivelyStreaming ?? !1,
        [y, x] = (0, W.useState)(`code`),
        S = n?.toLowerCase() === `mermaid`,
        C = S && y === `diagram`,
        w = (0, W.useCallback)(e => {
            e.preventDefault(), e.stopPropagation();
            let t = window.getSelection()?.toString();
            t && d(t, void 0, e)
        }, []),
        E = (0, W.useCallback)(e => {
            let t = (e, t, n) => {
                    if (g || p?.id == null || t === void 0) return;
                    let r = ne(p.id);
                    r != null && le({
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
            d(r, h, e), t(`mouse`, n, r)
        }, [r, h, g, p]),
        O = T(),
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
    let M = n === `svg` || (n === `xml` || n === `html`) && U(r),
        N = (0, W.useMemo)(() => A?.html.split(/(<span[^>]*>.*?<\/span>)/g).filter(Boolean), [A?.html]),
        P = M ? (0, G.jsx)(F, {
            svgString: r,
            className: `max-h-96 w-full`
        }) : N && N.length > 0 ? (0, G.jsx)(`span`, {
            children: N.map((e, t) => (0, G.jsx)(q, {
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
            children: [k && (0, G.jsx)(V, {}), S && (0, G.jsxs)(`label`, {
                className: b(`flex items-center gap-2 font-sans text-xs`, _ ? `text-token-text-tertiary` : `text-token-text-secondary`),
                children: [(0, G.jsx)(D, {
                    id: `rFpifq`,
                    defaultMessage: `Diagram`
                }), (0, G.jsx)(v, {
                    withinLabel: !0,
                    size: `small`,
                    disabled: _,
                    checked: C,
                    onCheckedChange: e => {
                        te.count(re.DEFAULT, `chatgpt_code_block_view_toggled`, {
                            view: e ? `diagram` : `code`
                        }), x(e ? `diagram` : `code`)
                    }
                })]
            }), (0, G.jsx)(ae, {
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
        children: C ? (0, G.jsx)($, {
            onCopy: w,
            children: (0, G.jsx)(L, {
                source: r,
                enableMermaidUiImprovements: oe()
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
    let e = p(!0),
        {
            data: t = !1
        } = c(u.ShowExpandedCodeView),
        n = T();
    return (0, G.jsxs)(`div`, {
        className: `border-token-border-medium flex items-center gap-1`,
        children: [(0, G.jsx)(`label`, {
            htmlFor: `ada-always-show`,
            children: (0, G.jsx)(D, {
                defaultMessage: `Always show details`,
                id: `message.tools.codeInterpreter.alwaysShowAnalysis`
            })
        }), (0, G.jsx)(v, {
            id: `ada-always-show`,
            size: `small`,
            onCheckedChange: t => {
                e.mutate({
                    setting: u.ShowExpandedCodeView,
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
    n(), ue(), N(), I(), f(), M(), x(), m(), P(), se(), R(), h(), g(), _(), w(), y(), S(), o(), l(), W = t(E()), j(), C(), G = O(), A(), K = i(() => k(() => import(`./86bfab85-nm9o31htp9t2xc8x.js`), __vite__mapDeps([0, 1, 2, 3]))), q = W.memo(function({
        htmlSegment: e
    }) {
        return (0, G.jsx)(`span`, {
            dangerouslySetInnerHTML: {
                __html: e
            }
        })
    }), J = e => {
        if (e instanceof Element) return e.closest(`[data-message-id]`)?.getAttribute(`data-message-id`) ?? void 0
    }, Y = r.div`contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-bg-secondary-surface`, X = r.div`flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-bg-secondary-surface select-none ${e=>e.$removeTopBorderRadius?``:`rounded-t-2xl corner-t-superellipse/1.1`}`, Z = function({
        children: e,
        className: t,
        ref: n
    }) {
        return (0, G.jsx)(`div`, {
            ref: n,
            className: b(`overflow-y-auto p-4`, t),
            dir: `ltr`,
            children: e
        })
    }, Q = r.code`${e=>e.$shouldWrap?`whitespace-pre-wrap!`:`whitespace-pre!`}`, $ = r.div`
  flex w-full items-start justify-center
`
}));
export {
    de as n, B as t
};
//# sourceMappingURL=96098dcc-cclk7e5noqmc67ba.js.map
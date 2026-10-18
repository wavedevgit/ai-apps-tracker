const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/86bfab85-nm9o31htp9t2xc8x.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/0d45f5fd-mincl2mx6m8nd4oa.js", "assets/0d45f5fd-f5evotvdxlgj0ghq.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AJ as n,
    B6 as r,
    HS as i,
    JP as a,
    Mnt as o,
    Nnt as s,
    OJ as ee,
    Pnt as c,
    Rb as l,
    VS as u,
    XJ as d,
    XP as te,
    ZJ as f,
    aE as p,
    aU as m,
    b5 as h,
    hU as ne,
    i5 as re,
    l0 as ie,
    mst as g,
    oE as _,
    pU as v,
    r0 as y,
    rU as b,
    sU as x,
    wst as S,
    y5 as C,
    zb as w
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as T,
    Nn as E,
    Rn as D,
    Vn as O,
    cn as k,
    ln as A,
    zn as j
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Nbt as ae,
    Pbt as M,
    _Et as oe,
    _L as N,
    gL as P,
    o_ as se,
    r_ as F,
    yEt as ce
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    n as le,
    t as I
} from "./f6a81ab7-bcfec1lqpyytivj6.js";
import {
    r as L,
    t as R
} from "./0fbccedd-2h01u79eytmuta2p.js";
import {
    n as z,
    t as B
} from "./c19d65aa-oumany0b1r8rzc3c.js";

function V({
    wrapperClassName: e,
    codeClassName: t,
    language: n,
    content: r,
    shouldWrapCode: i = !1,
    removeTopBorderRadius: a,
    showActionBar: o = !0,
    showStickyRightContent: d = !0,
    codeContainerClassName: f,
    title: p
}) {
    let m = te(),
        h = (0, W.useRef)(null),
        g = ne(),
        _ = re(ie),
        v = (0, W.useContext)(oe)?.isActivelyStreaming ?? !1,
        [y, b] = (0, W.useState)(`code`),
        x = n?.toLowerCase() === `mermaid`,
        S = x && y === `diagram`,
        w = (0, W.useCallback)(e => {
            e.preventDefault(), e.stopPropagation();
            let t = window.getSelection()?.toString();
            t && u(t, void 0, e)
        }, []),
        T = (0, W.useCallback)(e => {
            let t = (e, t, n) => {
                    if (_ || m?.id == null || t === void 0) return;
                    let r = ee(m.id);
                    r != null && N({
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
            u(r, g, e), t(`mouse`, n, r)
        }, [r, g, _, m]),
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
        P = (0, W.useMemo)(() => k?.html.split(/(<span[^>]*>.*?<\/span>)/g).filter(Boolean), [k?.html]),
        F = M ? (0, G.jsx)(I, {
            svgString: r,
            className: `max-h-96 w-full`
        }) : P && P.length > 0 ? (0, G.jsx)(`span`, {
            children: P.map((e, t) => (0, G.jsx)(q, {
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
        ref: h,
        title: p ?? k?.language ?? n,
        stickyTitleRightContent: d && (0, G.jsxs)(`div`, {
            className: `bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs`,
            children: [O && (0, G.jsx)(H, {}), x && (0, G.jsxs)(`label`, {
                className: C(`flex items-center gap-2 font-sans text-xs`, v ? `text-token-text-tertiary` : `text-token-text-secondary`),
                children: [(0, G.jsx)(E, {
                    id: `rFpifq`,
                    defaultMessage: `Diagram`
                }), (0, G.jsx)(l, {
                    withinLabel: !0,
                    size: `small`,
                    disabled: v,
                    checked: S,
                    onCheckedChange: e => {
                        s.count(c.DEFAULT, `chatgpt_code_block_view_toggled`, {
                            view: e ? `diagram` : `code`
                        }), b(e ? `diagram` : `code`)
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
        codeContainerClassName: f,
        className: e,
        removeTopBorderRadius: a,
        showActionBar: o,
        children: S ? (0, G.jsx)($, {
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
    let e = m(!0),
        {
            data: t = !1
        } = x(g.ShowExpandedCodeView),
        n = j();
    return (0, G.jsxs)(`div`, {
        className: `border-token-border-medium flex items-center gap-1`,
        children: [(0, G.jsx)(`label`, {
            htmlFor: `ada-always-show`,
            children: (0, G.jsx)(E, {
                defaultMessage: `Always show details`,
                id: `message.tools.codeInterpreter.alwaysShowAnalysis`
            })
        }), (0, G.jsx)(l, {
            id: `ada-always-show`,
            size: `small`,
            onCheckedChange: t => {
                e.mutate({
                    setting: g.ShowExpandedCodeView,
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
    S(), le(), F(), L(), a(), M(), w(), y(), P(), ce(), z(), b(), r(), n(), v(), i(), o(), h(), d(), W = t(O()), D(), _(), G = T(), A(), K = f(() => k(() => import(`./86bfab85-nm9o31htp9t2xc8x.js`), __vite__mapDeps([0, 1, 2, 3]))), q = W.memo(function({
        htmlSegment: e
    }) {
        return (0, G.jsx)(`span`, {
            dangerouslySetInnerHTML: {
                __html: e
            }
        })
    }), J = e => {
        if (e instanceof Element) return e.closest(`[data-message-id]`)?.getAttribute(`data-message-id`) ?? void 0
    }, Y = p.div`contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-bg-secondary-surface`, X = p.div`flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between h-9 bg-token-bg-secondary-surface select-none ${e=>e.$removeTopBorderRadius?``:`rounded-t-2xl corner-t-superellipse/1.1`}`, Z = function({
        children: e,
        className: t,
        ref: n
    }) {
        return (0, G.jsx)(`div`, {
            ref: n,
            className: C(`overflow-y-auto p-4`, t),
            dir: `ltr`,
            children: e
        })
    }, Q = p.code`${e=>e.$shouldWrap?`whitespace-pre-wrap!`:`whitespace-pre!`}`, $ = p.div`
  flex w-full items-start justify-center
`
}));
export {
    de as n, V as t
};
//# sourceMappingURL=96098dcc-nrgla4t1v4ql97vx.js.map
const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/c5df50f9-mfmrh3dbggzujdgg.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-bo7e0c29ngt4zgx0.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/4571d27d-dt2y6vi9a2e7e6ew.js", "assets/d8c9beb7-da0d9u648pjr8t8f.js"]))) => i.map(i => d[i]);
import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    At as r,
    BU as i,
    Dw as a,
    Ew as o,
    P5 as s,
    X5 as c,
    Xy as l,
    Y5 as u,
    Zy as d,
    aB as f,
    bW as p,
    cn as m,
    dF as h,
    en as g,
    g8 as _,
    nn as v,
    oB as y,
    pF as b,
    xW as x,
    zU as ee
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as S,
    Nn as C,
    On as te,
    Rn as w,
    Vn as T,
    cn as ne,
    ln as re,
    p as ie,
    s as E,
    wn as D,
    zn as ae
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    DCn as O,
    DPn as oe,
    ECn as se,
    HVt as ce,
    ITt as le,
    Ijt as ue,
    Jwn as de,
    KQ as fe,
    L3t as pe,
    LYt as me,
    Ljt as he,
    P3t as ge,
    QHn as k,
    RQ as _e,
    RTt as ve,
    RYt as ye,
    UVt as be,
    Wwn as xe,
    ZHn as A,
    cit as Se,
    eWn as Ce,
    eit as we,
    hUn as j,
    mUn as Te,
    nWn as M,
    oyn as Ee,
    ryn as De,
    wPn as N
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    DC as P,
    EC as F,
    Kx as I,
    Mx as Oe,
    eb as ke,
    jx as L,
    qx as Ae,
    tb as R
} from "./30901919-e8h11sw136qen6v0.js";
import {
    _x as je,
    bx as Me,
    vx as z,
    yx as B
} from "./c2675c8c-ejvs9hq3rwjwsbcv.js";
import {
    n as Ne,
    t as V
} from "./c8f38d6c-bm2d04v2p1q5tqgy.js";
import {
    a as Pe,
    c as Fe,
    i as H,
    n as Ie,
    o as Le,
    r as Re,
    s as ze,
    t as Be
} from "./58ab20f4-biykopb0oakhy1ha.js";
var Ve, U, He, Ue = e((() => {
        Ve = D(), r(), U = S(), He = e => {
            "use forget";
            let t = (0, Ve.c)(17),
                {
                    onDrag: n,
                    onDragEnd: r,
                    onDoubleClick: i,
                    onDragStart: a,
                    onPointerUp: o
                } = e,
                s, c, l, u;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (s = {
                opacity: 1
            }, c = {
                opacity: 1
            }, l = {
                type: `tween`,
                duration: .1
            }, u = {
                x: 0,
                y: 0,
                transform: `translateY(0px)`
            }, t[0] = s, t[1] = c, t[2] = l, t[3] = u) : (s = t[0], c = t[1], l = t[2], u = t[3]);
            let d;
            t[4] === a ? d = t[5] : (d = () => {
                a?.()
            }, t[4] = a, t[5] = d);
            let f;
            t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (f = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, t[6] = f) : f = t[6];
            let p;
            t[7] === n ? p = t[8] : (p = (e, t) => {
                n?.(t)
            }, t[7] = n, t[8] = p);
            let h;
            t[9] === r ? h = t[10] : (h = (e, t) => r?.(t), t[9] = r, t[10] = h);
            let g;
            return t[11] !== i || t[12] !== o || t[13] !== d || t[14] !== p || t[15] !== h ? (g = (0, U.jsx)(m.div, {
                drag: `x`,
                tabIndex: -1,
                className: `bg-token-border-default pointer-events-auto absolute top-0 bottom-0 z-20 w-[2px] cursor-ew-resize rounded-full opacity-0 after:absolute after:inset-y-0 after:start-1/2 after:top-[-18px] after:h-[calc(100%+36px)] after:w-[16px] after:-translate-x-1/2 after:transform after:bg-transparent after:content-['']`,
                whileHover: s,
                whileDrag: c,
                transition: l,
                style: u,
                onPointerDown: d,
                dragMomentum: !1,
                dragSnapToOrigin: !1,
                dragElastic: !1,
                dragConstraints: f,
                onDrag: p,
                onPointerUp: o,
                onDragEnd: h,
                onDoubleClick: i
            }), t[11] = i, t[12] = o, t[13] = d, t[14] = p, t[15] = h, t[16] = g) : g = t[16], g
        }
    })),
    W, G, K, q, J, We = e((() => {
        W = D(), c(), G = n(T()), w(), K = S(), re(), q = e => {
            "use forget";
            let t = (0, W.c)(11),
                {
                    className: n,
                    content: r,
                    tiktokenImport: i,
                    o200kBaseImport: a
                } = e,
                {
                    Tiktoken: o
                } = (0, G.use)(i),
                {
                    default: s
                } = (0, G.use)(a),
                c;
            t[0] !== o || t[1] !== r || t[2] !== s ? (c = new o(s).encode(r), t[0] = o, t[1] = r, t[2] = s, t[3] = c) : c = t[3];
            let l = c.length,
                d;
            t[4] === n ? d = t[5] : (d = u(`text-token-text-secondary min-w-0 truncate font-mono text-xs`, n), t[4] = n, t[5] = d);
            let f;
            t[6] === l ? f = t[7] : (f = (0, K.jsx)(C, {
                id: `NUKG65`,
                defaultMessage: `{tokenCount} tokens`,
                values: {
                    tokenCount: (0, K.jsx)(te, {
                        value: l
                    })
                }
            }), t[6] = l, t[7] = f);
            let p;
            return t[8] !== d || t[9] !== f ? (p = (0, K.jsx)(`div`, {
                className: d,
                children: f
            }), t[8] = d, t[9] = f, t[10] = p) : p = t[10], p
        }, J = ({
            className: e,
            content: t
        }) => {
            "use no forget";
            let n = (0, G.useMemo)(() => ne(() => import(`./c5df50f9-mfmrh3dbggzujdgg.js`).then(e => (e.t(), e.n)), __vite__mapDeps([0, 1, 2, 3, 4, 5])), []),
                r = (0, G.useMemo)(() => ne(() => import(`./d8c9beb7-da0d9u648pjr8t8f.js`).then(e => (e.t(), e.r)), __vite__mapDeps([6, 1])), []);
            return t ? (0, K.jsx)(G.Suspense, {
                name: `dev-mode-token-count`,
                fallback: (0, K.jsx)(`div`, {
                    className: `loading-results-shimmer h-5 w-10 rounded-lg`
                }),
                children: (0, K.jsx)(q, {
                    className: e,
                    content: t,
                    tiktokenImport: n,
                    o200kBaseImport: r
                })
            }) : null
        }
    }));

function Ge(e) {
    return !e
}
var Y, X, Z, Ke, qe, Je, Ye, Xe, Q, Ze = e((() => {
        Y = D(), d(), P(), pe(), k(), c(), X = n(T()), Z = S(), Ke = (0, X.createContext)(null), qe = () => {
            let e = (0, X.useContext)(Ke);
            if (!e) throw Error(`Section components must be used within a Section.Root`);
            return e
        }, Je = e => {
            "use forget";
            let t = (0, Y.c)(10),
                {
                    children: n,
                    defaultExpanded: r
                } = e,
                [i, a] = (0, X.useState)(r === void 0 || r),
                o = (0, X.useId)(),
                s = (0, X.useId)(),
                c;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (c = () => a(Ge), t[0] = c) : c = t[0];
            let l;
            t[1] !== s || t[2] !== o || t[3] !== i ? (l = {
                isExpanded: i,
                toggle: c,
                headerId: o,
                contentId: s
            }, t[1] = s, t[2] = o, t[3] = i, t[4] = l) : l = t[4];
            let u;
            t[5] === n ? u = t[6] : (u = (0, Z.jsx)(`div`, {
                className: `relative z-0 border-b`,
                children: n
            }), t[5] = n, t[6] = u);
            let d;
            return t[7] !== l || t[8] !== u ? (d = (0, Z.jsx)(Ke.Provider, {
                value: l,
                children: u
            }), t[7] = l, t[8] = u, t[9] = d) : d = t[9], d
        }, Ye = e => {
            "use forget";
            let t = (0, Y.c)(8),
                {
                    children: n
                } = e,
                {
                    isExpanded: r,
                    contentId: i,
                    headerId: a
                } = qe(),
                o = !r,
                s = r && `pb-3`,
                c;
            t[0] === s ? c = t[1] : (c = u(`z-0 px-3`, s), t[0] = s, t[1] = c);
            let l;
            return t[2] !== n || t[3] !== i || t[4] !== a || t[5] !== o || t[6] !== c ? (l = (0, Z.jsx)(`div`, {
                id: i,
                role: `region`,
                "aria-labelledby": a,
                hidden: o,
                className: c,
                children: n
            }), t[2] = n, t[3] = i, t[4] = a, t[5] = o, t[6] = c, t[7] = l) : l = t[7], l
        }, Xe = e => {
            "use forget";
            let t = (0, Y.c)(25),
                {
                    children: n,
                    tooltip: r,
                    accessory: i
                } = e,
                {
                    isExpanded: a,
                    toggle: o,
                    headerId: s,
                    contentId: c
                } = qe(),
                [d, f] = (0, X.useState)(!1),
                p = d ? `border-token-border-default` : `border-transparent`,
                m;
            t[0] === p ? m = t[1] : (m = u(`bg-token-bg-elevated-secondary sticky top-0 z-20 flex w-full min-w-0 items-center border-b`, p), t[0] = p, t[1] = m);
            let h = !a && `-rotate-90`,
                g;
            t[2] === h ? g = t[3] : (g = u(`icon-sm shrink-0 transition-transform`, h), t[2] = h, t[3] = g);
            let _;
            t[4] === g ? _ = t[5] : (_ = (0, Z.jsx)(F, {
                className: g
            }), t[4] = g, t[5] = _);
            let v;
            t[6] === n ? v = t[7] : (v = (0, Z.jsx)(`span`, {
                className: `flex min-w-0 flex-1 items-center gap-2`,
                children: n
            }), t[6] = n, t[7] = v);
            let y;
            t[8] !== c || t[9] !== s || t[10] !== a || t[11] !== _ || t[12] !== v || t[13] !== o ? (y = (0, Z.jsxs)(`button`, {
                type: `button`,
                id: s,
                "aria-controls": c,
                "aria-expanded": a,
                onClick: o,
                className: `text-token-text-secondary focus-visible:ring-token-border-strong flex min-w-0 flex-1 items-center gap-2 rounded-sm px-3 py-3 text-start text-sm focus-visible:ring-1 focus-visible:outline-none`,
                children: [_, v]
            }), t[8] = c, t[9] = s, t[10] = a, t[11] = _, t[12] = v, t[13] = o, t[14] = y) : y = t[14];
            let b;
            t[15] === i ? b = t[16] : (b = i && (0, Z.jsx)(`div`, {
                className: `ms-auto py-1 ps-2 pe-3`,
                children: i
            }), t[15] = i, t[16] = b);
            let x;
            t[17] !== m || t[18] !== y || t[19] !== b ? (x = (0, Z.jsxs)(`div`, {
                className: m,
                children: [y, b]
            }), t[17] = m, t[18] = y, t[19] = b, t[20] = x) : x = t[20];
            let ee = x,
                S;
            t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (S = (0, Z.jsx)(`span`, {
                "aria-hidden": `true`,
                className: `pointer-events-none absolute block h-[1px] bg-transparent`,
                ref: A({
                    options: {
                        threshold: 0
                    },
                    onChange(e, t) {
                        f(t.intersectionRatio === 0)
                    }
                })
            }), t[21] = S) : S = t[21];
            let C;
            return t[22] !== ee || t[23] !== r ? (C = (0, Z.jsxs)(Z.Fragment, {
                children: [S, r ? (0, Z.jsx)(l, {
                    side: `left`,
                    triggerAs: null,
                    labelTextAlign: `left`,
                    label: (0, Z.jsx)(ge, {
                        size: `small`,
                        className: `text-sm leading-5 font-normal`,
                        forceDarkMode: !0,
                        children: r
                    }),
                    children: ee
                }) : ee]
            }), t[22] = ee, t[23] = r, t[24] = C) : C = t[24], C
        }, Q = {
            Content: Ye,
            Header: Xe,
            Root: Je
        }
    })),
    Qe = t({
        DevModeSidebar: () => mt
    });

function $e(e) {
    if (!e) return null;
    let t = e.metadata?.jit_plugin_data?.from_server;
    return t && `body` in t ? t.body : null
}

function et(e) {
    if (!e) return null;
    let t = $e(e);
    if (!t || typeof t != `object`) return null;
    let n = t,
        r = [n.connector_link_id, n.params?.connector_link_id, n.params?.connector_service_link_id, n.params?.link_id, n.params?.linkId];
    for (let e of r)
        if (typeof e == `string` && e.length > 0) return e;
    return null
}

function tt(e) {
    if (!e) return null;
    let t = e.metadata?.chatgpt_sdk?.attribution_id;
    if (typeof t == `string` && t.length > 0) return t;
    let n = $e(e);
    if (!n || typeof n != `object`) return null;
    let r = n;
    return typeof r.connector_id == `string` && r.connector_id.length ? r.connector_id : typeof r.params?.connector_id == `string` && r.params.connector_id.length ? r.params.connector_id : null
}

function nt(e, t) {
    let n = e.functionName == null ? void 0 : t.find(t => t.name === e.functionName),
        r = $e(e.toolCallMessage),
        i = n ?? r;
    return i ? z(i) : []
}

function rt(e) {
    return e.functionName ?? e.toolCallMessage.recipient?.split(`.`).pop() ?? e.toolCallMessage.recipient ?? `<unknown>`
}

function it(e, t, n) {
    let r = e.functionName == null ? void 0 : t.find(t => t.name === e.functionName);
    return {
        connector: n,
        name: rt(e),
        badges: nt(e, t),
        toolDescription: r?.description ?? null,
        widget: {
            template: r?.templates?.[0]?.meta ?? null,
            state: e.widgetState ?? null,
            responseMetadata: e.toolResponseMetadata ?? null,
            externalCallTimeMs: e.externalCallTimeMs ?? null
        },
        toolInput: e.toolInput ?? {},
        toolOutput: e.toolOutput ?? null,
        toolResponseMetadata: e.toolResponseMetadata ?? null
    }
}

function at(e) {
    let t = [],
        n = e => e.author.role === `assistant` && !!e.recipient?.startsWith?.(`api_tool`);
    for (let r = 0; r < e.length; r++) {
        let i = e[r];
        if (!n(i)) continue;
        let a = ze(i) ?? null,
            o = null,
            s = null;
        for (let t = r + 1; t < e.length; t++) {
            let r = e[t];
            if (n(r)) break;
            Le(r, i) && (o = r, H(r) != null && (s = r))
        }
        o = s ?? o;
        let c = o == null ? null : H(o),
            l = a?.args ?? null;
        if (!l && o) {
            let e = o.metadata?.jit_plugin_data?.from_server,
                t = e && `body` in e ? e.body : void 0;
            if (t && typeof t == `object`) {
                let e = t;
                e.params !== void 0 && (l = e.params)
            }
            if (!l && c && typeof c == `object`) {
                let e = c;
                e.toolInput != null && (l = e.toolInput)
            }
        }
        let u = a?.path ?? null,
            d = u ? u.split(`/`).filter(Boolean) : [],
            f = d.length >= 2 ? d[1] : et(o) ?? et(i),
            p = tt(o) ?? tt(i),
            m = d.length > 0 ? d[d.length - 1] : null,
            h = o == null ? null : Fe(o) ?? null,
            g = o?.metadata?.chatgpt_sdk == null ? null : me(o.metadata.chatgpt_sdk),
            _ = o?.metadata?.chatgpt_sdk?.external_call_time_ms ?? null;
        t.push({
            toolCallMessage: i,
            toolResponseMessage: o,
            path: u,
            linkId: f,
            connectorId: p,
            functionName: m,
            toolInput: l,
            toolOutput: c,
            toolResponseMetadata: h,
            widgetState: g,
            externalCallTimeMs: _
        })
    }
    return t
}

function ot(e) {
    let [t, n] = e;
    return ce(t - n, 200, 800)
}

function st(e) {
    return !!e.linkId
}

function ct(e) {
    return !!e.connectorId
}

function lt(e) {
    ee().danger({
        id: `j+WGY0`,
        defaultMessage: `Error refreshing tools.`,
        description: `Error toast shown in app settings or the app developer sidebar when refreshing the app’s available tools fails. Terminology update: 'tool(s)' replaces 'action(s)' for callable app capabilities. Preserve the existing translation where appropriate, changing the term and any required grammar; meaning and placeholders are unchanged.`
    }, {
        error: e
    })
}
var ut, dt, $, ft, pt, mt, ht = e((() => {
    ut = D(), de(), B(), we(), Ne(), b(), a(), R(), y(), I(), L(), he(), Ue(), Ie(), We(), Pe(), ye(), M(), j(), N(), _e(), Ee(), _(), i(), O(), x(), le(), E(), c(), be(), r(), dt = n(T()), w(), Ze(), $ = S(), ft = ({
        call: e,
        index: t,
        totalCount: n,
        actions: r,
        intl: i,
        logLineClassName: a,
        isDescriptionExpanded: o,
        setIsDescriptionExpanded: s,
        showHeader: c = !0
    }) => {
        "use no forget";
        let l = rt(e),
            d = e.functionName == null ? void 0 : r.find(t => t.name === e.functionName),
            p = Me({
                badgeKeys: nt(e, r),
                labels: je,
                className: `flex-wrap gap-1`
            }),
            m = !!d?.description,
            h = d?.templates?.[0],
            g = h != null || e.widgetState != null || e.toolResponseMetadata != null || e.externalCallTimeMs != null,
            _ = e.toolInput == null ? `{}` : JSON.stringify(e.toolInput),
            v = e.toolOutput == null ? `{}` : JSON.stringify(e.toolOutput);
        return (0, $.jsxs)(Q.Root, {
            defaultExpanded: t === n - 1,
            children: [c && (0, $.jsx)(Q.Header, {
                accessory: (0, $.jsx)(J, {
                    content: v
                }),
                children: (0, $.jsxs)(`div`, {
                    className: `flex min-w-0 flex-col gap-1`,
                    children: [(0, $.jsx)(`span`, {
                        className: `truncate font-mono text-sm`,
                        children: (0, $.jsx)(C, {
                            id: `LCSWJ4`,
                            defaultMessage: `Tool call {index}: {functionName}`,
                            values: {
                                index: t + 1,
                                functionName: l
                            }
                        })
                    }), p]
                })
            }), (0, $.jsxs)(Q.Content, {
                children: [m && (0, $.jsxs)(Q.Root, {
                    defaultExpanded: !1,
                    children: [(0, $.jsx)(Q.Header, {
                        accessory: d?.description ? (0, $.jsx)(`div`, {
                            className: `flex items-center gap-2`,
                            children: d?.description && (0, $.jsx)(J, {
                                content: d.description
                            })
                        }) : void 0,
                        children: (0, $.jsx)(`span`, {
                            className: `truncate font-mono text-sm`,
                            children: (0, $.jsx)(C, {
                                id: `cBVjg7`,
                                defaultMessage: `Tool description`
                            })
                        })
                    }), (0, $.jsx)(Q.Content, {
                        children: (0, $.jsx)(`div`, {
                            className: `ps-6`,
                            children: d?.description ? (0, $.jsxs)($.Fragment, {
                                children: [(0, $.jsx)(`span`, {
                                    className: u(`text-token-text-primary block text-sm whitespace-pre-wrap`, o ? `line-clamp-none` : `line-clamp-4`),
                                    children: d.description
                                }), (0, $.jsx)(`button`, {
                                    className: `text-token-text-secondary mt-1 flex justify-start text-sm hover:underline`,
                                    onClick: () => s(!o),
                                    children: o ? (0, $.jsx)(C, {
                                        id: `Mggt6n`,
                                        defaultMessage: `See less`
                                    }) : (0, $.jsx)(C, {
                                        id: `yhD38v`,
                                        defaultMessage: `See all`
                                    })
                                })]
                            }) : (0, $.jsx)(`span`, {
                                className: `text-token-text-secondary text-sm`,
                                children: (0, $.jsx)(C, {
                                    id: `RyyTsY`,
                                    defaultMessage: `No description provided.`
                                })
                            })
                        })
                    })]
                }), g && (0, $.jsxs)(Q.Root, {
                    children: [(0, $.jsx)(Q.Header, {
                        accessory: (0, $.jsx)(Ce, {
                            href: `https://developers.openai.com/apps-sdk`,
                            children: (0, $.jsx)(f, {
                                className: `icon-sm opacity-60`
                            })
                        }),
                        children: (0, $.jsx)(`span`, {
                            className: `font-mono text-sm`,
                            children: (0, $.jsx)(C, {
                                id: `j5ZJHT`,
                                defaultMessage: `Widget`
                            })
                        })
                    }), (0, $.jsx)(Q.Content, {
                        children: (0, $.jsx)(V, {
                            isInitialLevelExpanded: !0,
                            unwrap: !0,
                            className: a,
                            value: {
                                template: h?.meta ?? null,
                                state: e.widgetState ?? null,
                                responseMetadata: e.toolResponseMetadata ?? null,
                                externalCallTimeMs: e.externalCallTimeMs ?? null
                            }
                        })
                    })]
                }), (0, $.jsxs)(Q.Root, {
                    children: [(0, $.jsx)(Q.Header, {
                        tooltip: i.formatMessage({
                            id: `Jf3mMy`,
                            defaultMessage: `Tool input is the model-written input to the tool call.`
                        }),
                        accessory: (0, $.jsx)(J, {
                            content: _
                        }),
                        children: (0, $.jsx)(`span`, {
                            className: `font-mono text-sm`,
                            children: (0, $.jsx)(C, {
                                id: `o6IX3y`,
                                defaultMessage: `Tool input`
                            })
                        })
                    }), (0, $.jsx)(Q.Content, {
                        children: (0, $.jsx)(V, {
                            className: a,
                            isInitialLevelExpanded: !0,
                            unwrap: !0,
                            value: e.toolInput ?? {}
                        })
                    })]
                }), (0, $.jsxs)(Q.Root, {
                    children: [(0, $.jsx)(Q.Header, {
                        tooltip: i.formatMessage({
                            id: `xa77YH`,
                            defaultMessage: `Tool output is the structured tool output returned by the tool.`
                        }),
                        accessory: (0, $.jsxs)(`div`, {
                            className: `flex items-end gap-1`,
                            children: [e.externalCallTimeMs != null && (0, $.jsx)(`span`, {
                                className: `text-token-text-secondary font-mono text-xs`,
                                children: i.formatMessage({
                                    id: `D5wi0Z`,
                                    defaultMessage: `Timing: {ms}ms /`
                                }, {
                                    ms: e.externalCallTimeMs
                                })
                            }), (0, $.jsx)(J, {
                                content: v
                            })]
                        }),
                        children: (0, $.jsx)(`span`, {
                            className: `font-mono text-sm`,
                            children: (0, $.jsx)(C, {
                                id: `2IVEZx`,
                                defaultMessage: `Tool output`
                            })
                        })
                    }), (0, $.jsx)(Q.Content, {
                        children: e.toolOutput == null ? (0, $.jsx)(`span`, {
                            className: `text-token-text-secondary text-sm`,
                            children: (0, $.jsx)(C, {
                                id: `lpg5UJ`,
                                defaultMessage: `No tool response`
                            })
                        }) : (0, $.jsx)(V, {
                            className: a,
                            isInitialLevelExpanded: !0,
                            unwrap: !0,
                            value: e.toolOutput
                        })
                    })]
                }), e.toolResponseMetadata != null && (0, $.jsxs)(Q.Root, {
                    children: [(0, $.jsx)(Q.Header, {
                        tooltip: i.formatMessage({
                            id: `MAlg9H`,
                            defaultMessage: "The tool response metadata is the `_meta` field of the tool response."
                        }),
                        children: (0, $.jsx)(`span`, {
                            className: `font-mono text-sm`,
                            children: (0, $.jsx)(C, {
                                id: `4CjZ4d`,
                                defaultMessage: `Tool response metadata`
                            })
                        })
                    }), (0, $.jsx)(Q.Content, {
                        children: (0, $.jsx)(V, {
                            className: a,
                            isInitialLevelExpanded: !0,
                            unwrap: !0,
                            value: e.toolResponseMetadata
                        })
                    })]
                })]
            })]
        })
    }, pt = e => {
        "use forget";
        let t = (0, ut.c)(111),
            {
                focusedMessages: n,
                conversation: r
            } = e,
            i = ae(),
            a = v(0),
            [c, l] = (0, dt.useState)(!1),
            [d, f] = (0, dt.useState)(!1),
            p = v(400),
            h;
        t[0] !== a || t[1] !== p ? (h = [p, a], t[0] = a, t[1] = p, t[2] = h) : h = t[2];
        let _ = g(h, ot),
            {
                connectorLinks: y,
                refetch: b
            } = oe(),
            x;
        t[3] === n ? x = t[4] : (x = at(n), t[3] = n, t[4] = x);
        let S = x,
            te;
        t[5] !== y || t[6] !== S ? (te = () => De(S.map(e => e.linkId ? Re(y, e.linkId)?.connector_id ?? e.connectorId : e.connectorId)), t[5] = y, t[6] = S, t[7] = te) : te = t[7];
        let w = s(te),
            T = S.length === 1 ? S[0] : null,
            ne;
        t[8] === T ? ne = t[9] : (ne = T && rt(T), t[8] = T, t[9] = ne);
        let re = ne,
            E, D;
        if (t[10] !== y || t[11] !== w || t[12] !== S) {
            E = [...S].reverse().find(st)?.linkId ?? ``;
            let e = [...S].reverse().find(ct)?.connectorId ?? ``,
                n = Re(y, E);
            D = n?.connector_id == null ? e ? w?.get(e) : null : w?.get(n.connector_id), t[10] = y, t[11] = w, t[12] = S, t[13] = E, t[14] = D
        } else E = t[13], D = t[14];
        let O = D,
            ce = O?.logo_url ?? null,
            le = O?.logo_url_dark ?? null,
            de = !!(O?.logo_url || O?.logo_url_dark),
            pe;
        t[15] !== ce || t[16] !== le || t[17] !== de ? (pe = {
            lightLogoUrl: ce,
            darkLogoUrl: le,
            enabled: de
        }, t[15] = ce, t[16] = le, t[17] = de, t[18] = pe) : pe = t[18];
        let {
            data: me
        } = ve(pe), {
            actions: he
        } = fe(O), ge;
        t[19] !== he || t[20] !== O?.id || t[21] !== y || t[22] !== w ? (ge = e => {
            let t = (e.linkId == null ? null : Re(y, e.linkId))?.connector_id ?? e.connectorId,
                n = t == null ? null : w?.get(t);
            return {
                connector: n,
                actions: n != null && n.id === O?.id ? he : []
            }
        }, t[19] = he, t[20] = O?.id, t[21] = y, t[22] = w, t[23] = ge) : ge = t[23];
        let k = ge,
            _e;
        t[24] !== k || t[25] !== T ? (_e = T == null ? null : Me({
            badgeKeys: nt(T, k(T).actions),
            labels: je,
            className: `flex-wrap gap-1 mt-1`
        }), t[24] = k, t[25] = T, t[26] = _e) : _e = t[26];
        let ye = _e,
            be;
        t[27] === i ? be = t[28] : (be = i.formatMessage({
            id: `chatgpt.dev_mode.sidebar.download_tool_call_data.button.label`,
            defaultMessage: `Download tool call data`
        }), t[27] = i, t[28] = be);
        let A = be,
            Ce;
        t[29] !== k || t[30] !== S ? (Ce = () => {
            se(new Blob([JSON.stringify({
                toolCalls: S.map(e => {
                    let t = k(e);
                    return it(e, t.actions, t.connector?.name ?? null)
                })
            }, null, 2) + `
`], {
                type: `application/json`
            }), `tool-call-data.json`)
        }, t[29] = k, t[30] = S, t[31] = Ce) : Ce = t[31];
        let we = Ce,
            j;
        t[32] !== y || t[33] !== b ? (j = async e => {
            await Se(e);
            let t = Re(y, e)?.connector_id;
            await Promise.all([b(), t && xe.refetch({
                connectorId: t,
                applyEligibilityFilter: !0,
                allowUnavailable: !0
            })])
        }, t[32] = y, t[33] = b, t[34] = j) : j = t[34];
        let M;
        t[35] === i ? M = t[36] : (M = () => {
            ee().success(i.formatMessage({
                id: `n9Ee37`,
                defaultMessage: `Tool updated`
            }))
        }, t[35] = i, t[36] = M);
        let Ee;
        t[37] !== j || t[38] !== M ? (Ee = {
            mutationFn: j,
            onError: lt,
            onSuccess: M
        }, t[37] = j, t[38] = M, t[39] = Ee) : Ee = t[39];
        let N = ie(Ee),
            P;
        t[40] === c ? P = t[41] : (P = c && (0, $.jsx)(`div`, {
            className: `fixed inset-0 z-0 bg-transparent`
        }), t[40] = c, t[41] = P);
        let F;
        t[42] === a ? F = t[43] : (F = () => {
            l(!0), a.set(0)
        }, t[42] = a, t[43] = F);
        let I;
        t[44] !== _ || t[45] !== a || t[46] !== p ? (I = () => {
            l(!1), a.set(0), p.set(_.get())
        }, t[44] = _, t[45] = a, t[46] = p, t[47] = I) : I = t[47];
        let L;
        t[48] === a ? L = t[49] : (L = e => a.set(a.get() + e.delta.x), t[48] = a, t[49] = L);
        let R;
        t[50] !== F || t[51] !== I || t[52] !== L ? (R = (0, $.jsx)(He, {
            onDragStart: F,
            onDragEnd: I,
            onDrag: L
        }), t[50] = F, t[51] = I, t[52] = L, t[53] = R) : R = t[53];
        let z;
        t[54] === _ ? z = t[55] : (z = {
            width: _
        }, t[54] = _, t[55] = z);
        let B;
        t[56] !== O?.name || t[57] !== me ? (B = me?.url && (0, $.jsx)(`img`, {
            className: `h-4 w-4 shrink-0 rounded-md`,
            src: me.url,
            alt: O?.name ?? ``
        }), t[56] = O?.name, t[57] = me, t[58] = B) : B = t[58];
        let Ne;
        t[59] === O?.name ? Ne = t[60] : (Ne = O?.name ?? (0, $.jsx)(C, {
            id: `lDDPYo`,
            defaultMessage: `Unknown Connector`
        }), t[59] = O?.name, t[60] = Ne);
        let V;
        t[61] === Ne ? V = t[62] : (V = (0, $.jsx)(`span`, {
            className: `text-token-text-primary truncate text-lg`,
            children: Ne
        }), t[61] = Ne, t[62] = V);
        let Pe;
        t[63] !== B || t[64] !== V ? (Pe = (0, $.jsxs)(`div`, {
            className: `flex min-w-0 flex-1 items-center gap-2`,
            children: [B, V]
        }), t[63] = B, t[64] = V, t[65] = Pe) : Pe = t[65];
        let Fe;
        t[66] !== A || t[67] !== we ? (Fe = e => (0, $.jsx)(Te, {
            ...e,
            "aria-label": A,
            color: `secondary`,
            icon: ke,
            onClick: we
        }), t[66] = A, t[67] = we, t[68] = Fe) : Fe = t[68];
        let H;
        t[69] !== A || t[70] !== Fe ? (H = (0, $.jsx)(ue, {
            content: A,
            side: `bottom-center`,
            children: Fe
        }), t[69] = A, t[70] = Fe, t[71] = H) : H = t[71];
        let Ie;
        t[72] !== E || t[73] !== N ? (Ie = () => {
            E && N.mutate(E)
        }, t[72] = E, t[73] = N, t[74] = Ie) : Ie = t[74];
        let Le = N.isPending || !E,
            ze = N.isPending ? Oe : Ae,
            Ve = N.isPending && `motion-safe:animate-spin`,
            U;
        t[75] === Ve ? U = t[76] : (U = u(`icon`, Ve), t[75] = Ve, t[76] = U);
        let Ue;
        t[77] !== Ie || t[78] !== Le || t[79] !== ze || t[80] !== U ? (Ue = (0, $.jsx)(Te, {
            onClick: Ie,
            disabled: Le,
            icon: ze,
            iconClassName: U
        }), t[77] = Ie, t[78] = Le, t[79] = ze, t[80] = U, t[81] = Ue) : Ue = t[81];
        let W;
        t[82] === r ? W = t[83] : (W = (0, $.jsx)(o, {
            onClick: () => Be(r).blur()
        }), t[82] = r, t[83] = W);
        let G;
        t[84] !== Pe || t[85] !== H || t[86] !== Ue || t[87] !== W ? (G = (0, $.jsxs)(`div`, {
            className: `flex h-(--header-height) items-center gap-1 ps-3 pe-2`,
            children: [Pe, H, Ue, W]
        }), t[84] = Pe, t[85] = H, t[86] = Ue, t[87] = W, t[88] = G) : G = t[88];
        let K;
        t[89] !== ye || t[90] !== re || t[91] !== S.length ? (K = S.length === 0 ? null : S.length === 1 ? (0, $.jsx)(`div`, {
            className: `border-b px-3 py-3`,
            children: (0, $.jsxs)(`div`, {
                className: `flex flex-col gap-1`,
                children: [(0, $.jsx)(`span`, {
                    className: `text-token-text-secondary font-mono text-sm`,
                    children: re
                }), ye]
            })
        }) : (0, $.jsx)(`div`, {
            className: `border-b px-3 py-3`,
            children: (0, $.jsx)(`span`, {
                className: `text-token-text-secondary font-mono text-sm`,
                children: (0, $.jsx)(C, {
                    id: `5zemKr`,
                    defaultMessage: `Tool call list`
                })
            })
        }), t[89] = ye, t[90] = re, t[91] = S.length, t[92] = K) : K = t[92];
        let q;
        t[93] !== k || t[94] !== i || t[95] !== d || t[96] !== S ? (q = S.length === 0 ? (0, $.jsx)(`div`, {
            className: `text-token-text-secondary px-3 py-3 text-sm`,
            children: (0, $.jsx)(C, {
                id: `UGPm+j`,
                defaultMessage: `No tool calls found.`
            })
        }) : S.map((e, t) => (0, $.jsx)(ft, {
            call: e,
            index: t,
            totalCount: S.length,
            actions: k(e).actions,
            intl: i,
            logLineClassName: `!text-xs !leading-5`,
            isDescriptionExpanded: d,
            setIsDescriptionExpanded: f,
            showHeader: S.length > 1
        }, `${e.toolCallMessage.id??`tool`}-${t}`)), t[93] = k, t[94] = i, t[95] = d, t[96] = S, t[97] = q) : q = t[97];
        let J;
        t[98] !== K || t[99] !== q ? (J = (0, $.jsxs)(`div`, {
            className: `flex h-full flex-col overflow-x-hidden overflow-y-auto`,
            children: [K, q]
        }), t[98] = K, t[99] = q, t[100] = J) : J = t[100];
        let We;
        t[101] !== z || t[102] !== G || t[103] !== J ? (We = (0, $.jsxs)(m.div, {
            className: `relative flex h-full flex-col`,
            style: z,
            children: [G, J]
        }), t[101] = z, t[102] = G, t[103] = J, t[104] = We) : We = t[104];
        let Ge;
        t[105] !== R || t[106] !== We ? (Ge = (0, $.jsxs)(`div`, {
            className: `border-token-border-default bg-token-bg-elevated-secondary z-10 h-full border-s`,
            children: [R, We]
        }), t[105] = R, t[106] = We, t[107] = Ge) : Ge = t[107];
        let Y;
        return t[108] !== P || t[109] !== Ge ? (Y = (0, $.jsxs)($.Fragment, {
            children: [P, Ge]
        }), t[108] = P, t[109] = Ge, t[110] = Y) : Y = t[110], Y
    }, mt = e => {
        "use forget";
        let t = (0, ut.c)(9),
            {
                clientThreadId: n
            } = e,
            r, i;
        t[0] === n ? (r = t[1], i = t[2]) : (r = h(n), i = Be(r), t[0] = n, t[1] = r, t[2] = i);
        let a = i,
            o;
        t[3] === a ? o = t[4] : (o = () => a.focusedMessages$(), t[3] = a, t[4] = o);
        let c = s(o),
            l;
        return t[5] !== r || t[6] !== a || t[7] !== c ? (l = c.length > 0 && (0, $.jsx)(p, {
            name: `DevModeSidebar`,
            onError: () => a.blur(),
            children: (0, $.jsx)(pt, {
                focusedMessages: c,
                conversation: r
            }, c[c.length - 1]?.id ?? `dev-mode-sidebar`)
        }), t[5] = r, t[6] = a, t[7] = c, t[8] = l) : l = t[8], l
    }
}));
export {
    Qe as n, ht as r, mt as t
};
//# sourceMappingURL=5be378a2-cxi23e3g2yb1xvbt.js.map
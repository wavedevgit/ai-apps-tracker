const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/c5df50f9-b16s3c5vla5umhf4.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-itnrgnth03y1sm9d.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/4571d27d-dt2y6vi9a2e7e6ew.js", "assets/d8c9beb7-da0d9u648pjr8t8f.js"]))) => i.map(i => d[i]);
import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    At as r,
    IU as i,
    LU as a,
    Mw as o,
    Qy as s,
    Zy as c,
    _W as l,
    c7 as u,
    cn as d,
    en as f,
    fB as p,
    gF as m,
    jw as h,
    k8 as g,
    l7 as _,
    nn as v,
    pB as y,
    q5 as b,
    vF as x,
    vW as S
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Bn as C,
    Nn as w,
    On as ee,
    Rn as T,
    Vn as E,
    cn as te,
    ln as ne,
    p as re,
    s as D,
    wn as O,
    zn as ie
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    A3t as k,
    AYt as ae,
    Ajt as oe,
    D3t as se,
    FVt as ce,
    GQ as le,
    HCn as ue,
    IVt as de,
    KPn as fe,
    LQ as pe,
    NUn as me,
    PUn as A,
    UPn as he,
    VCn as ge,
    _Un as _e,
    cTn as ve,
    gUn as j,
    iTn as ye,
    jTt as be,
    jYt as xe,
    kTt as Se,
    kjt as Ce,
    qrt as M,
    tit as we,
    vyn as Te,
    xWn as N,
    xyn as Ee,
    yWn as P
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    DC as F,
    EC as I,
    Kx as L,
    Mx as De,
    eb as Oe,
    jx as R,
    qx as ke,
    tb as z
} from "./30901919-ikyi1r55w2i02fom.js";
import {
    _x as Ae,
    gx as B,
    hx as je,
    mx as Me
} from "./c2675c8c-d62p1sdq1sy52umm.js";
import {
    n as Ne,
    t as V
} from "./c8f38d6c-grgq2ak2d83is6qc.js";
import {
    a as Pe,
    c as Fe,
    i as H,
    n as Ie,
    o as Le,
    r as Re,
    s as ze,
    t as Be
} from "./58ab20f4-bajp4tnbqnreufh0.js";
var Ve, U, He, Ue = e((() => {
        Ve = O(), r(), U = C(), He = e => {
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
            let f;
            t[4] === a ? f = t[5] : (f = () => {
                a?.()
            }, t[4] = a, t[5] = f);
            let p;
            t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (p = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, t[6] = p) : p = t[6];
            let m;
            t[7] === n ? m = t[8] : (m = (e, t) => {
                n?.(t)
            }, t[7] = n, t[8] = m);
            let h;
            t[9] === r ? h = t[10] : (h = (e, t) => r?.(t), t[9] = r, t[10] = h);
            let g;
            return t[11] !== i || t[12] !== o || t[13] !== f || t[14] !== m || t[15] !== h ? (g = (0, U.jsx)(d.div, {
                drag: `x`,
                tabIndex: -1,
                className: `bg-token-border-default pointer-events-auto absolute top-0 bottom-0 z-20 w-[2px] cursor-ew-resize rounded-full opacity-0 after:absolute after:inset-y-0 after:start-1/2 after:top-[-18px] after:h-[calc(100%+36px)] after:w-[16px] after:-translate-x-1/2 after:transform after:bg-transparent after:content-['']`,
                whileHover: s,
                whileDrag: c,
                transition: l,
                style: u,
                onPointerDown: f,
                dragMomentum: !1,
                dragSnapToOrigin: !1,
                dragElastic: !1,
                dragConstraints: p,
                onDrag: m,
                onPointerUp: o,
                onDragEnd: h,
                onDoubleClick: i
            }), t[11] = i, t[12] = o, t[13] = f, t[14] = m, t[15] = h, t[16] = g) : g = t[16], g
        }
    })),
    W, G, K, q, J, We = e((() => {
        W = O(), _(), G = n(E()), T(), K = C(), ne(), q = e => {
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
            t[6] === l ? f = t[7] : (f = (0, K.jsx)(w, {
                id: `NUKG65`,
                defaultMessage: `{tokenCount} tokens`,
                values: {
                    tokenCount: (0, K.jsx)(ee, {
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
            let n = (0, G.useMemo)(() => te(() => import(`./c5df50f9-b16s3c5vla5umhf4.js`).then(e => (e.t(), e.n)), __vite__mapDeps([0, 1, 2, 3, 4, 5])), []),
                r = (0, G.useMemo)(() => te(() => import(`./d8c9beb7-da0d9u648pjr8t8f.js`).then(e => (e.t(), e.r)), __vite__mapDeps([6, 1])), []);
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
        Y = O(), s(), F(), k(), _e(), _(), X = n(E()), Z = C(), Ke = (0, X.createContext)(null), qe = () => {
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
                    contentId: l
                } = qe(),
                [d, f] = (0, X.useState)(!1),
                p = d ? `border-token-border-default` : `border-transparent`,
                m;
            t[0] === p ? m = t[1] : (m = u(`bg-token-bg-elevated-secondary sticky top-0 z-20 flex w-full min-w-0 items-center border-b`, p), t[0] = p, t[1] = m);
            let h = !a && `-rotate-90`,
                g;
            t[2] === h ? g = t[3] : (g = u(`icon-sm shrink-0 transition-transform`, h), t[2] = h, t[3] = g);
            let _;
            t[4] === g ? _ = t[5] : (_ = (0, Z.jsx)(I, {
                className: g
            }), t[4] = g, t[5] = _);
            let v;
            t[6] === n ? v = t[7] : (v = (0, Z.jsx)(`span`, {
                className: `flex min-w-0 flex-1 items-center gap-2`,
                children: n
            }), t[6] = n, t[7] = v);
            let y;
            t[8] !== l || t[9] !== s || t[10] !== a || t[11] !== _ || t[12] !== v || t[13] !== o ? (y = (0, Z.jsxs)(`button`, {
                type: `button`,
                id: s,
                "aria-controls": l,
                "aria-expanded": a,
                onClick: o,
                className: `text-token-text-secondary focus-visible:ring-token-border-strong flex min-w-0 flex-1 items-center gap-2 rounded-sm px-3 py-3 text-start text-sm focus-visible:ring-1 focus-visible:outline-none`,
                children: [_, v]
            }), t[8] = l, t[9] = s, t[10] = a, t[11] = _, t[12] = v, t[13] = o, t[14] = y) : y = t[14];
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
            let S = x,
                C;
            t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (C = (0, Z.jsx)(`span`, {
                "aria-hidden": `true`,
                className: `pointer-events-none absolute block h-[1px] bg-transparent`,
                ref: j({
                    options: {
                        threshold: 0
                    },
                    onChange(e, t) {
                        f(t.intersectionRatio === 0)
                    }
                })
            }), t[21] = C) : C = t[21];
            let w;
            return t[22] !== S || t[23] !== r ? (w = (0, Z.jsxs)(Z.Fragment, {
                children: [C, r ? (0, Z.jsx)(c, {
                    side: `left`,
                    triggerAs: null,
                    labelTextAlign: `left`,
                    label: (0, Z.jsx)(se, {
                        size: `small`,
                        className: `text-sm leading-5 font-normal`,
                        forceDarkMode: !0,
                        children: r
                    }),
                    children: S
                }) : S]
            }), t[22] = S, t[23] = r, t[24] = w) : w = t[24], w
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
    return i ? je(i) : []
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
            g = o?.metadata?.chatgpt_sdk == null ? null : ae(o.metadata.chatgpt_sdk),
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
    i().danger({
        id: `j+WGY0`,
        defaultMessage: `Error refreshing tools.`,
        description: `Error toast shown in app settings or the app developer sidebar when refreshing the app’s available tools fails. Terminology update: 'tool(s)' replaces 'action(s)' for callable app capabilities. Preserve the existing translation where appropriate, changing the term and any required grammar; meaning and placeholders are unchanged.`
    }, {
        error: e
    })
}
var ut, dt, $, ft, pt, mt, ht = e((() => {
    ut = O(), ve(), B(), M(), Ne(), x(), o(), z(), y(), L(), R(), oe(), Ue(), Ie(), We(), Pe(), xe(), N(), A(), he(), pe(), Ee(), g(), a(), ue(), S(), Se(), D(), _(), de(), r(), dt = n(E()), T(), Ze(), $ = C(), ft = ({
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
            f = Ae({
                badgeKeys: nt(e, r),
                labels: Me,
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
                        children: (0, $.jsx)(w, {
                            id: `LCSWJ4`,
                            defaultMessage: `Tool call {index}: {functionName}`,
                            values: {
                                index: t + 1,
                                functionName: l
                            }
                        })
                    }), f]
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
                            children: (0, $.jsx)(w, {
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
                                    children: o ? (0, $.jsx)(w, {
                                        id: `Mggt6n`,
                                        defaultMessage: `See less`
                                    }) : (0, $.jsx)(w, {
                                        id: `yhD38v`,
                                        defaultMessage: `See all`
                                    })
                                })]
                            }) : (0, $.jsx)(`span`, {
                                className: `text-token-text-secondary text-sm`,
                                children: (0, $.jsx)(w, {
                                    id: `RyyTsY`,
                                    defaultMessage: `No description provided.`
                                })
                            })
                        })
                    })]
                }), g && (0, $.jsxs)(Q.Root, {
                    children: [(0, $.jsx)(Q.Header, {
                        accessory: (0, $.jsx)(P, {
                            href: `https://developers.openai.com/apps-sdk`,
                            children: (0, $.jsx)(p, {
                                className: `icon-sm opacity-60`
                            })
                        }),
                        children: (0, $.jsx)(`span`, {
                            className: `font-mono text-sm`,
                            children: (0, $.jsx)(w, {
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
                            children: (0, $.jsx)(w, {
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
                            children: (0, $.jsx)(w, {
                                id: `2IVEZx`,
                                defaultMessage: `Tool output`
                            })
                        })
                    }), (0, $.jsx)(Q.Content, {
                        children: e.toolOutput == null ? (0, $.jsx)(`span`, {
                            className: `text-token-text-secondary text-sm`,
                            children: (0, $.jsx)(w, {
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
                            children: (0, $.jsx)(w, {
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
            a = ie(),
            o = v(0),
            [s, c] = (0, dt.useState)(!1),
            [l, p] = (0, dt.useState)(!1),
            m = v(400),
            g;
        t[0] !== o || t[1] !== m ? (g = [m, o], t[0] = o, t[1] = m, t[2] = g) : g = t[2];
        let _ = f(g, ot),
            {
                connectorLinks: y,
                refetch: x
            } = fe(),
            S;
        t[3] === n ? S = t[4] : (S = at(n), t[3] = n, t[4] = S);
        let C = S,
            ee;
        t[5] !== y || t[6] !== C ? (ee = () => Te(C.map(e => e.linkId ? Re(y, e.linkId)?.connector_id ?? e.connectorId : e.connectorId)), t[5] = y, t[6] = C, t[7] = ee) : ee = t[7];
        let T = b(ee),
            E = C.length === 1 ? C[0] : null,
            te;
        t[8] === E ? te = t[9] : (te = E && rt(E), t[8] = E, t[9] = te);
        let ne = te,
            D, O;
        if (t[10] !== y || t[11] !== T || t[12] !== C) {
            D = [...C].reverse().find(st)?.linkId ?? ``;
            let e = [...C].reverse().find(ct)?.connectorId ?? ``,
                n = Re(y, D);
            O = n?.connector_id == null ? e ? T?.get(e) : null : T?.get(n.connector_id), t[10] = y, t[11] = T, t[12] = C, t[13] = D, t[14] = O
        } else D = t[13], O = t[14];
        let k = O,
            ae = k?.logo_url ?? null,
            oe = k?.logo_url_dark ?? null,
            se = !!(k?.logo_url || k?.logo_url_dark),
            ce;
        t[15] !== ae || t[16] !== oe || t[17] !== se ? (ce = {
            lightLogoUrl: ae,
            darkLogoUrl: oe,
            enabled: se
        }, t[15] = ae, t[16] = oe, t[17] = se, t[18] = ce) : ce = t[18];
        let {
            data: ue
        } = be(ce), {
            actions: de
        } = le(k), pe;
        t[19] !== de || t[20] !== k?.id || t[21] !== y || t[22] !== T ? (pe = e => {
            let t = (e.linkId == null ? null : Re(y, e.linkId))?.connector_id ?? e.connectorId,
                n = t == null ? null : T?.get(t);
            return {
                connector: n,
                actions: n != null && n.id === k?.id ? de : []
            }
        }, t[19] = de, t[20] = k?.id, t[21] = y, t[22] = T, t[23] = pe) : pe = t[23];
        let A = pe,
            he;
        t[24] !== A || t[25] !== E ? (he = E == null ? null : Ae({
            badgeKeys: nt(E, A(E).actions),
            labels: Me,
            className: `flex-wrap gap-1 mt-1`
        }), t[24] = A, t[25] = E, t[26] = he) : he = t[26];
        let _e = he,
            ve;
        t[27] === a ? ve = t[28] : (ve = a.formatMessage({
            id: `chatgpt.dev_mode.sidebar.download_tool_call_data.button.label`,
            defaultMessage: `Download tool call data`
        }), t[27] = a, t[28] = ve);
        let j = ve,
            xe;
        t[29] !== A || t[30] !== C ? (xe = () => {
            ge(new Blob([JSON.stringify({
                toolCalls: C.map(e => {
                    let t = A(e);
                    return it(e, t.actions, t.connector?.name ?? null)
                })
            }, null, 2) + `
`], {
                type: `application/json`
            }), `tool-call-data.json`)
        }, t[29] = A, t[30] = C, t[31] = xe) : xe = t[31];
        let Se = xe,
            M;
        t[32] !== y || t[33] !== x ? (M = async e => {
            await we(e);
            let t = Re(y, e)?.connector_id;
            await Promise.all([x(), t && ye.refetch({
                connectorId: t,
                applyEligibilityFilter: !0,
                allowUnavailable: !0
            })])
        }, t[32] = y, t[33] = x, t[34] = M) : M = t[34];
        let N;
        t[35] === a ? N = t[36] : (N = () => {
            i().success(a.formatMessage({
                id: `n9Ee37`,
                defaultMessage: `Tool updated`
            }))
        }, t[35] = a, t[36] = N);
        let Ee;
        t[37] !== M || t[38] !== N ? (Ee = {
            mutationFn: M,
            onError: lt,
            onSuccess: N
        }, t[37] = M, t[38] = N, t[39] = Ee) : Ee = t[39];
        let P = re(Ee),
            F;
        t[40] === s ? F = t[41] : (F = s && (0, $.jsx)(`div`, {
            className: `fixed inset-0 z-0 bg-transparent`
        }), t[40] = s, t[41] = F);
        let I;
        t[42] === o ? I = t[43] : (I = () => {
            c(!0), o.set(0)
        }, t[42] = o, t[43] = I);
        let L;
        t[44] !== _ || t[45] !== o || t[46] !== m ? (L = () => {
            c(!1), o.set(0), m.set(_.get())
        }, t[44] = _, t[45] = o, t[46] = m, t[47] = L) : L = t[47];
        let R;
        t[48] === o ? R = t[49] : (R = e => o.set(o.get() + e.delta.x), t[48] = o, t[49] = R);
        let z;
        t[50] !== I || t[51] !== L || t[52] !== R ? (z = (0, $.jsx)(He, {
            onDragStart: I,
            onDragEnd: L,
            onDrag: R
        }), t[50] = I, t[51] = L, t[52] = R, t[53] = z) : z = t[53];
        let B;
        t[54] === _ ? B = t[55] : (B = {
            width: _
        }, t[54] = _, t[55] = B);
        let je;
        t[56] !== k?.name || t[57] !== ue ? (je = ue?.url && (0, $.jsx)(`img`, {
            className: `h-4 w-4 shrink-0 rounded-md`,
            src: ue.url,
            alt: k?.name ?? ``
        }), t[56] = k?.name, t[57] = ue, t[58] = je) : je = t[58];
        let Ne;
        t[59] === k?.name ? Ne = t[60] : (Ne = k?.name ?? (0, $.jsx)(w, {
            id: `lDDPYo`,
            defaultMessage: `Unknown Connector`
        }), t[59] = k?.name, t[60] = Ne);
        let V;
        t[61] === Ne ? V = t[62] : (V = (0, $.jsx)(`span`, {
            className: `text-token-text-primary truncate text-lg`,
            children: Ne
        }), t[61] = Ne, t[62] = V);
        let Pe;
        t[63] !== je || t[64] !== V ? (Pe = (0, $.jsxs)(`div`, {
            className: `flex min-w-0 flex-1 items-center gap-2`,
            children: [je, V]
        }), t[63] = je, t[64] = V, t[65] = Pe) : Pe = t[65];
        let Fe;
        t[66] !== j || t[67] !== Se ? (Fe = e => (0, $.jsx)(me, {
            ...e,
            "aria-label": j,
            color: `secondary`,
            icon: Oe,
            onClick: Se
        }), t[66] = j, t[67] = Se, t[68] = Fe) : Fe = t[68];
        let H;
        t[69] !== j || t[70] !== Fe ? (H = (0, $.jsx)(Ce, {
            content: j,
            side: `bottom-center`,
            children: Fe
        }), t[69] = j, t[70] = Fe, t[71] = H) : H = t[71];
        let Ie;
        t[72] !== D || t[73] !== P ? (Ie = () => {
            D && P.mutate(D)
        }, t[72] = D, t[73] = P, t[74] = Ie) : Ie = t[74];
        let Le = P.isPending || !D,
            ze = P.isPending ? De : ke,
            Ve = P.isPending && `motion-safe:animate-spin`,
            U;
        t[75] === Ve ? U = t[76] : (U = u(`icon`, Ve), t[75] = Ve, t[76] = U);
        let Ue;
        t[77] !== Ie || t[78] !== Le || t[79] !== ze || t[80] !== U ? (Ue = (0, $.jsx)(me, {
            onClick: Ie,
            disabled: Le,
            icon: ze,
            iconClassName: U
        }), t[77] = Ie, t[78] = Le, t[79] = ze, t[80] = U, t[81] = Ue) : Ue = t[81];
        let W;
        t[82] === r ? W = t[83] : (W = (0, $.jsx)(h, {
            onClick: () => Be(r).blur()
        }), t[82] = r, t[83] = W);
        let G;
        t[84] !== Pe || t[85] !== H || t[86] !== Ue || t[87] !== W ? (G = (0, $.jsxs)(`div`, {
            className: `flex h-(--header-height) items-center gap-1 ps-3 pe-2`,
            children: [Pe, H, Ue, W]
        }), t[84] = Pe, t[85] = H, t[86] = Ue, t[87] = W, t[88] = G) : G = t[88];
        let K;
        t[89] !== _e || t[90] !== ne || t[91] !== C.length ? (K = C.length === 0 ? null : C.length === 1 ? (0, $.jsx)(`div`, {
            className: `border-b px-3 py-3`,
            children: (0, $.jsxs)(`div`, {
                className: `flex flex-col gap-1`,
                children: [(0, $.jsx)(`span`, {
                    className: `text-token-text-secondary font-mono text-sm`,
                    children: ne
                }), _e]
            })
        }) : (0, $.jsx)(`div`, {
            className: `border-b px-3 py-3`,
            children: (0, $.jsx)(`span`, {
                className: `text-token-text-secondary font-mono text-sm`,
                children: (0, $.jsx)(w, {
                    id: `5zemKr`,
                    defaultMessage: `Tool call list`
                })
            })
        }), t[89] = _e, t[90] = ne, t[91] = C.length, t[92] = K) : K = t[92];
        let q;
        t[93] !== A || t[94] !== a || t[95] !== l || t[96] !== C ? (q = C.length === 0 ? (0, $.jsx)(`div`, {
            className: `text-token-text-secondary px-3 py-3 text-sm`,
            children: (0, $.jsx)(w, {
                id: `UGPm+j`,
                defaultMessage: `No tool calls found.`
            })
        }) : C.map((e, t) => (0, $.jsx)(ft, {
            call: e,
            index: t,
            totalCount: C.length,
            actions: A(e).actions,
            intl: a,
            logLineClassName: `!text-xs !leading-5`,
            isDescriptionExpanded: l,
            setIsDescriptionExpanded: p,
            showHeader: C.length > 1
        }, `${e.toolCallMessage.id??`tool`}-${t}`)), t[93] = A, t[94] = a, t[95] = l, t[96] = C, t[97] = q) : q = t[97];
        let J;
        t[98] !== K || t[99] !== q ? (J = (0, $.jsxs)(`div`, {
            className: `flex h-full flex-col overflow-x-hidden overflow-y-auto`,
            children: [K, q]
        }), t[98] = K, t[99] = q, t[100] = J) : J = t[100];
        let We;
        t[101] !== B || t[102] !== G || t[103] !== J ? (We = (0, $.jsxs)(d.div, {
            className: `relative flex h-full flex-col`,
            style: B,
            children: [G, J]
        }), t[101] = B, t[102] = G, t[103] = J, t[104] = We) : We = t[104];
        let Ge;
        t[105] !== z || t[106] !== We ? (Ge = (0, $.jsxs)(`div`, {
            className: `border-token-border-default bg-token-bg-elevated-secondary z-10 h-full border-s`,
            children: [z, We]
        }), t[105] = z, t[106] = We, t[107] = Ge) : Ge = t[107];
        let Y;
        return t[108] !== F || t[109] !== Ge ? (Y = (0, $.jsxs)($.Fragment, {
            children: [F, Ge]
        }), t[108] = F, t[109] = Ge, t[110] = Y) : Y = t[110], Y
    }, mt = e => {
        "use forget";
        let t = (0, ut.c)(9),
            {
                clientThreadId: n
            } = e,
            r, i;
        t[0] === n ? (r = t[1], i = t[2]) : (r = m(n), i = Be(r), t[0] = n, t[1] = r, t[2] = i);
        let a = i,
            o;
        t[3] === a ? o = t[4] : (o = () => a.focusedMessages$(), t[3] = a, t[4] = o);
        let s = b(o),
            c;
        return t[5] !== r || t[6] !== a || t[7] !== s ? (c = s.length > 0 && (0, $.jsx)(l, {
            name: `DevModeSidebar`,
            onError: () => a.blur(),
            children: (0, $.jsx)(pt, {
                focusedMessages: s,
                conversation: r
            }, s[s.length - 1]?.id ?? `dev-mode-sidebar`)
        }), t[5] = r, t[6] = a, t[7] = s, t[8] = c) : c = t[8], c
    }
}));
export {
    Qe as n, ht as r, mt as t
};
//# sourceMappingURL=5be378a2-ijc4ox6i02xluv72.js.map
const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/c5df50f9-el980cgusjwznzo3.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-i89nb6zlze66idsz.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/4571d27d-dt2y6vi9a2e7e6ew.js", "assets/d8c9beb7-da0d9u648pjr8t8f.js"]))) => i.map(i => d[i]);
import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as r,
    At as i,
    IU as a,
    J5 as o,
    LU as s,
    Mw as c,
    Qy as l,
    Zy as u,
    _W as d,
    cn as f,
    en as p,
    fB as m,
    gF as h,
    jw as g,
    l7 as ee,
    nn as _,
    pB as v,
    u7 as y,
    vF as b,
    vW as x
} from "./4813494d-i89nb6zlze66idsz.js";
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
    $Un as oe,
    B3t as O,
    BVt as se,
    HYt as ce,
    IUn as le,
    Jrt as ue,
    KQ as de,
    LUn as fe,
    MTt as pe,
    Mjt as me,
    Njt as he,
    OTn as k,
    PTt as ge,
    RQ as _e,
    Ryn as ve,
    U3t as ye,
    VWn as be,
    VYt as A,
    Vyn as xe,
    cwn as Se,
    eWn as j,
    fFn as Ce,
    lFn as M,
    nit as we,
    swn as Te,
    wTn as Ee,
    zVt as De,
    zWn as N
} from "./conversation-small-fh0oqifngkf5rvl1.js";
import {
    DC as P,
    EC as F,
    Kx as I,
    Mx as Oe,
    eb as ke,
    jx as L,
    qx as Ae,
    tb as R
} from "./30901919-cmi3nh547dwrqkxv.js";
import {
    Cx as z,
    Sx as B,
    wx as je,
    xx as Me
} from "./c2675c8c-4fpunyxk1uf8cfp1.js";
import {
    n as V,
    t as H
} from "./c8f38d6c-jfndo11oilwcsk68.js";
import {
    a as Ne,
    c as Pe,
    i as U,
    n as Fe,
    o as Ie,
    r as Le,
    s as Re,
    t as ze
} from "./58ab20f4-jk84kexajl8gsjii.js";
var Be, W, Ve, He = e((() => {
        Be = D(), i(), W = S(), Ve = e => {
            "use forget";
            let t = (0, Be.c)(17),
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
            return t[11] !== i || t[12] !== o || t[13] !== d || t[14] !== m || t[15] !== h ? (g = (0, W.jsx)(f.div, {
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
                dragConstraints: p,
                onDrag: m,
                onPointerUp: o,
                onDragEnd: h,
                onDoubleClick: i
            }), t[11] = i, t[12] = o, t[13] = d, t[14] = m, t[15] = h, t[16] = g) : g = t[16], g
        }
    })),
    G, K, q, J, Y, Ue = e((() => {
        G = D(), y(), K = n(T()), w(), q = S(), re(), J = e => {
            "use forget";
            let t = (0, G.c)(11),
                {
                    className: n,
                    content: r,
                    tiktokenImport: i,
                    o200kBaseImport: a
                } = e,
                {
                    Tiktoken: o
                } = (0, K.use)(i),
                {
                    default: s
                } = (0, K.use)(a),
                c;
            t[0] !== o || t[1] !== r || t[2] !== s ? (c = new o(s).encode(r), t[0] = o, t[1] = r, t[2] = s, t[3] = c) : c = t[3];
            let l = c.length,
                u;
            t[4] === n ? u = t[5] : (u = ee(`text-token-text-secondary min-w-0 truncate font-mono text-xs`, n), t[4] = n, t[5] = u);
            let d;
            t[6] === l ? d = t[7] : (d = (0, q.jsx)(C, {
                id: `NUKG65`,
                defaultMessage: `{tokenCount} tokens`,
                values: {
                    tokenCount: (0, q.jsx)(te, {
                        value: l
                    })
                }
            }), t[6] = l, t[7] = d);
            let f;
            return t[8] !== u || t[9] !== d ? (f = (0, q.jsx)(`div`, {
                className: u,
                children: d
            }), t[8] = u, t[9] = d, t[10] = f) : f = t[10], f
        }, Y = ({
            className: e,
            content: t
        }) => {
            "use no forget";
            let n = (0, K.useMemo)(() => ne(() => import(`./c5df50f9-el980cgusjwznzo3.js`).then(e => (e.t(), e.n)), __vite__mapDeps([0, 1, 2, 3, 4, 5])), []),
                r = (0, K.useMemo)(() => ne(() => import(`./d8c9beb7-da0d9u648pjr8t8f.js`).then(e => (e.t(), e.r)), __vite__mapDeps([6, 1])), []);
            return t ? (0, q.jsx)(K.Suspense, {
                name: `dev-mode-token-count`,
                fallback: (0, q.jsx)(`div`, {
                    className: `loading-results-shimmer h-5 w-10 rounded-lg`
                }),
                children: (0, q.jsx)(J, {
                    className: e,
                    content: t,
                    tiktokenImport: n,
                    o200kBaseImport: r
                })
            }) : null
        }
    }));

function We(e) {
    return !e
}
var X, Ge, Z, Ke, qe, Je, Ye, Xe, Q, Ze = e((() => {
        X = D(), l(), P(), ye(), fe(), y(), Ge = n(T()), Z = S(), Ke = (0, Ge.createContext)(null), qe = () => {
            let e = (0, Ge.useContext)(Ke);
            if (!e) throw Error(`Section components must be used within a Section.Root`);
            return e
        }, Je = e => {
            "use forget";
            let t = (0, X.c)(10),
                {
                    children: n,
                    defaultExpanded: r
                } = e,
                [i, a] = (0, Ge.useState)(r === void 0 || r),
                o = (0, Ge.useId)(),
                s = (0, Ge.useId)(),
                c;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (c = () => a(We), t[0] = c) : c = t[0];
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
            let t = (0, X.c)(8),
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
            t[0] === s ? c = t[1] : (c = ee(`z-0 px-3`, s), t[0] = s, t[1] = c);
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
            let t = (0, X.c)(25),
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
                [l, d] = (0, Ge.useState)(!1),
                f = l ? `border-token-border-default` : `border-transparent`,
                p;
            t[0] === f ? p = t[1] : (p = ee(`bg-token-bg-elevated-secondary sticky top-0 z-20 flex w-full min-w-0 items-center border-b`, f), t[0] = f, t[1] = p);
            let m = !a && `-rotate-90`,
                h;
            t[2] === m ? h = t[3] : (h = ee(`icon-sm shrink-0 transition-transform`, m), t[2] = m, t[3] = h);
            let g;
            t[4] === h ? g = t[5] : (g = (0, Z.jsx)(F, {
                className: h
            }), t[4] = h, t[5] = g);
            let _;
            t[6] === n ? _ = t[7] : (_ = (0, Z.jsx)(`span`, {
                className: `flex min-w-0 flex-1 items-center gap-2`,
                children: n
            }), t[6] = n, t[7] = _);
            let v;
            t[8] !== c || t[9] !== s || t[10] !== a || t[11] !== g || t[12] !== _ || t[13] !== o ? (v = (0, Z.jsxs)(`button`, {
                type: `button`,
                id: s,
                "aria-controls": c,
                "aria-expanded": a,
                onClick: o,
                className: `text-token-text-secondary focus-visible:ring-token-border-strong flex min-w-0 flex-1 items-center gap-2 rounded-sm px-3 py-3 text-start text-sm focus-visible:ring-1 focus-visible:outline-none`,
                children: [g, _]
            }), t[8] = c, t[9] = s, t[10] = a, t[11] = g, t[12] = _, t[13] = o, t[14] = v) : v = t[14];
            let y;
            t[15] === i ? y = t[16] : (y = i && (0, Z.jsx)(`div`, {
                className: `ms-auto py-1 ps-2 pe-3`,
                children: i
            }), t[15] = i, t[16] = y);
            let b;
            t[17] !== p || t[18] !== v || t[19] !== y ? (b = (0, Z.jsxs)(`div`, {
                className: p,
                children: [v, y]
            }), t[17] = p, t[18] = v, t[19] = y, t[20] = b) : b = t[20];
            let x = b,
                S;
            t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (S = (0, Z.jsx)(`span`, {
                "aria-hidden": `true`,
                className: `pointer-events-none absolute block h-[1px] bg-transparent`,
                ref: le({
                    options: {
                        threshold: 0
                    },
                    onChange(e, t) {
                        d(t.intersectionRatio === 0)
                    }
                })
            }), t[21] = S) : S = t[21];
            let C;
            return t[22] !== x || t[23] !== r ? (C = (0, Z.jsxs)(Z.Fragment, {
                children: [S, r ? (0, Z.jsx)(u, {
                    side: `left`,
                    triggerAs: null,
                    labelTextAlign: `left`,
                    label: (0, Z.jsx)(O, {
                        size: `small`,
                        className: `text-sm leading-5 font-normal`,
                        forceDarkMode: !0,
                        children: r
                    }),
                    children: x
                }) : x]
            }), t[22] = x, t[23] = r, t[24] = C) : C = t[24], C
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
    return i ? B(i) : []
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
        let a = Re(i) ?? null,
            o = null,
            s = null;
        for (let t = r + 1; t < e.length; t++) {
            let r = e[t];
            if (n(r)) break;
            Ie(r, i) && (o = r, U(r) != null && (s = r))
        }
        o = s ?? o;
        let c = o == null ? null : U(o),
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
            h = o == null ? null : Pe(o) ?? null,
            g = o?.metadata?.chatgpt_sdk == null ? null : A(o.metadata.chatgpt_sdk),
            ee = o?.metadata?.chatgpt_sdk?.external_call_time_ms ?? null;
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
            externalCallTimeMs: ee
        })
    }
    return t
}

function ot(e) {
    let [t, n] = e;
    return De(t - n, 200, 800)
}

function st(e) {
    return !!e.linkId
}

function ct(e) {
    return !!e.connectorId
}

function lt(e) {
    a().danger({
        id: `j+WGY0`,
        defaultMessage: `Error refreshing tools.`,
        description: `Error toast shown in app settings or the app developer sidebar when refreshing the app’s available tools fails. Terminology update: 'tool(s)' replaces 'action(s)' for callable app capabilities. Preserve the existing translation where appropriate, changing the term and any required grammar; meaning and placeholders are unchanged.`
    }, {
        error: e
    })
}
var ut, dt, $, ft, pt, mt, ht = e((() => {
    ut = D(), k(), z(), ue(), V(), b(), c(), R(), v(), I(), L(), he(), He(), Fe(), Ue(), Ne(), ce(), be(), j(), M(), _e(), xe(), r(), s(), Se(), x(), pe(), E(), y(), se(), i(), dt = n(T()), w(), Ze(), $ = S(), ft = ({
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
            u = e.functionName == null ? void 0 : r.find(t => t.name === e.functionName),
            d = je({
                badgeKeys: nt(e, r),
                labels: Me,
                className: `flex-wrap gap-1`
            }),
            f = !!u?.description,
            p = u?.templates?.[0],
            h = p != null || e.widgetState != null || e.toolResponseMetadata != null || e.externalCallTimeMs != null,
            g = e.toolInput == null ? `{}` : JSON.stringify(e.toolInput),
            _ = e.toolOutput == null ? `{}` : JSON.stringify(e.toolOutput);
        return (0, $.jsxs)(Q.Root, {
            defaultExpanded: t === n - 1,
            children: [c && (0, $.jsx)(Q.Header, {
                accessory: (0, $.jsx)(Y, {
                    content: _
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
                    }), d]
                })
            }), (0, $.jsxs)(Q.Content, {
                children: [f && (0, $.jsxs)(Q.Root, {
                    defaultExpanded: !1,
                    children: [(0, $.jsx)(Q.Header, {
                        accessory: u?.description ? (0, $.jsx)(`div`, {
                            className: `flex items-center gap-2`,
                            children: u?.description && (0, $.jsx)(Y, {
                                content: u.description
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
                            children: u?.description ? (0, $.jsxs)($.Fragment, {
                                children: [(0, $.jsx)(`span`, {
                                    className: ee(`text-token-text-primary block text-sm whitespace-pre-wrap`, o ? `line-clamp-none` : `line-clamp-4`),
                                    children: u.description
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
                }), h && (0, $.jsxs)(Q.Root, {
                    children: [(0, $.jsx)(Q.Header, {
                        accessory: (0, $.jsx)(N, {
                            href: `https://developers.openai.com/apps-sdk`,
                            children: (0, $.jsx)(m, {
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
                        children: (0, $.jsx)(H, {
                            isInitialLevelExpanded: !0,
                            unwrap: !0,
                            className: a,
                            value: {
                                template: p?.meta ?? null,
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
                        accessory: (0, $.jsx)(Y, {
                            content: g
                        }),
                        children: (0, $.jsx)(`span`, {
                            className: `font-mono text-sm`,
                            children: (0, $.jsx)(C, {
                                id: `o6IX3y`,
                                defaultMessage: `Tool input`
                            })
                        })
                    }), (0, $.jsx)(Q.Content, {
                        children: (0, $.jsx)(H, {
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
                            }), (0, $.jsx)(Y, {
                                content: _
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
                        }) : (0, $.jsx)(H, {
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
                        children: (0, $.jsx)(H, {
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
            s = _(0),
            [c, l] = (0, dt.useState)(!1),
            [u, d] = (0, dt.useState)(!1),
            m = _(400),
            h;
        t[0] !== s || t[1] !== m ? (h = [m, s], t[0] = s, t[1] = m, t[2] = h) : h = t[2];
        let v = p(h, ot),
            {
                connectorLinks: y,
                refetch: b
            } = Ce(),
            x;
        t[3] === n ? x = t[4] : (x = at(n), t[3] = n, t[4] = x);
        let S = x,
            te;
        t[5] !== y || t[6] !== S ? (te = () => ve(S.map(e => e.linkId ? Le(y, e.linkId)?.connector_id ?? e.connectorId : e.connectorId)), t[5] = y, t[6] = S, t[7] = te) : te = t[7];
        let w = o(te),
            T = S.length === 1 ? S[0] : null,
            ne;
        t[8] === T ? ne = t[9] : (ne = T && rt(T), t[8] = T, t[9] = ne);
        let re = ne,
            E, D;
        if (t[10] !== y || t[11] !== w || t[12] !== S) {
            E = [...S].reverse().find(st)?.linkId ?? ``;
            let e = [...S].reverse().find(ct)?.connectorId ?? ``,
                n = Le(y, E);
            D = n?.connector_id == null ? e ? w?.get(e) : null : w?.get(n.connector_id), t[10] = y, t[11] = w, t[12] = S, t[13] = E, t[14] = D
        } else E = t[13], D = t[14];
        let O = D,
            se = O?.logo_url ?? null,
            ce = O?.logo_url_dark ?? null,
            le = !!(O?.logo_url || O?.logo_url_dark),
            ue;
        t[15] !== se || t[16] !== ce || t[17] !== le ? (ue = {
            lightLogoUrl: se,
            darkLogoUrl: ce,
            enabled: le
        }, t[15] = se, t[16] = ce, t[17] = le, t[18] = ue) : ue = t[18];
        let {
            data: fe
        } = ge(ue), {
            actions: pe
        } = de(O), he;
        t[19] !== pe || t[20] !== O?.id || t[21] !== y || t[22] !== w ? (he = e => {
            let t = (e.linkId == null ? null : Le(y, e.linkId))?.connector_id ?? e.connectorId,
                n = t == null ? null : w?.get(t);
            return {
                connector: n,
                actions: n != null && n.id === O?.id ? pe : []
            }
        }, t[19] = pe, t[20] = O?.id, t[21] = y, t[22] = w, t[23] = he) : he = t[23];
        let k = he,
            _e;
        t[24] !== k || t[25] !== T ? (_e = T == null ? null : je({
            badgeKeys: nt(T, k(T).actions),
            labels: Me,
            className: `flex-wrap gap-1 mt-1`
        }), t[24] = k, t[25] = T, t[26] = _e) : _e = t[26];
        let ye = _e,
            be;
        t[27] === i ? be = t[28] : (be = i.formatMessage({
            id: `chatgpt.dev_mode.sidebar.download_tool_call_data.button.label`,
            defaultMessage: `Download tool call data`
        }), t[27] = i, t[28] = be);
        let A = be,
            xe;
        t[29] !== k || t[30] !== S ? (xe = () => {
            Te(new Blob([JSON.stringify({
                toolCalls: S.map(e => {
                    let t = k(e);
                    return it(e, t.actions, t.connector?.name ?? null)
                })
            }, null, 2) + `
`], {
                type: `application/json`
            }), `tool-call-data.json`)
        }, t[29] = k, t[30] = S, t[31] = xe) : xe = t[31];
        let Se = xe,
            j;
        t[32] !== y || t[33] !== b ? (j = async e => {
            await we(e);
            let t = Le(y, e)?.connector_id;
            await Promise.all([b(), t && Ee.refetch({
                connectorId: t,
                applyEligibilityFilter: !0,
                allowUnavailable: !0
            })])
        }, t[32] = y, t[33] = b, t[34] = j) : j = t[34];
        let M;
        t[35] === i ? M = t[36] : (M = () => {
            a().success(i.formatMessage({
                id: `n9Ee37`,
                defaultMessage: `Tool updated`
            }))
        }, t[35] = i, t[36] = M);
        let De;
        t[37] !== j || t[38] !== M ? (De = {
            mutationFn: j,
            onError: lt,
            onSuccess: M
        }, t[37] = j, t[38] = M, t[39] = De) : De = t[39];
        let N = ie(De),
            P;
        t[40] === c ? P = t[41] : (P = c && (0, $.jsx)(`div`, {
            className: `fixed inset-0 z-0 bg-transparent`
        }), t[40] = c, t[41] = P);
        let F;
        t[42] === s ? F = t[43] : (F = () => {
            l(!0), s.set(0)
        }, t[42] = s, t[43] = F);
        let I;
        t[44] !== v || t[45] !== s || t[46] !== m ? (I = () => {
            l(!1), s.set(0), m.set(v.get())
        }, t[44] = v, t[45] = s, t[46] = m, t[47] = I) : I = t[47];
        let L;
        t[48] === s ? L = t[49] : (L = e => s.set(s.get() + e.delta.x), t[48] = s, t[49] = L);
        let R;
        t[50] !== F || t[51] !== I || t[52] !== L ? (R = (0, $.jsx)(Ve, {
            onDragStart: F,
            onDragEnd: I,
            onDrag: L
        }), t[50] = F, t[51] = I, t[52] = L, t[53] = R) : R = t[53];
        let z;
        t[54] === v ? z = t[55] : (z = {
            width: v
        }, t[54] = v, t[55] = z);
        let B;
        t[56] !== O?.name || t[57] !== fe ? (B = fe?.url && (0, $.jsx)(`img`, {
            className: `h-4 w-4 shrink-0 rounded-md`,
            src: fe.url,
            alt: O?.name ?? ``
        }), t[56] = O?.name, t[57] = fe, t[58] = B) : B = t[58];
        let V;
        t[59] === O?.name ? V = t[60] : (V = O?.name ?? (0, $.jsx)(C, {
            id: `lDDPYo`,
            defaultMessage: `Unknown Connector`
        }), t[59] = O?.name, t[60] = V);
        let H;
        t[61] === V ? H = t[62] : (H = (0, $.jsx)(`span`, {
            className: `text-token-text-primary truncate text-lg`,
            children: V
        }), t[61] = V, t[62] = H);
        let Ne;
        t[63] !== B || t[64] !== H ? (Ne = (0, $.jsxs)(`div`, {
            className: `flex min-w-0 flex-1 items-center gap-2`,
            children: [B, H]
        }), t[63] = B, t[64] = H, t[65] = Ne) : Ne = t[65];
        let Pe;
        t[66] !== A || t[67] !== Se ? (Pe = e => (0, $.jsx)(oe, {
            ...e,
            "aria-label": A,
            color: `secondary`,
            icon: ke,
            onClick: Se
        }), t[66] = A, t[67] = Se, t[68] = Pe) : Pe = t[68];
        let U;
        t[69] !== A || t[70] !== Pe ? (U = (0, $.jsx)(me, {
            content: A,
            side: `bottom-center`,
            children: Pe
        }), t[69] = A, t[70] = Pe, t[71] = U) : U = t[71];
        let Fe;
        t[72] !== E || t[73] !== N ? (Fe = () => {
            E && N.mutate(E)
        }, t[72] = E, t[73] = N, t[74] = Fe) : Fe = t[74];
        let Ie = N.isPending || !E,
            Re = N.isPending ? Oe : Ae,
            Be = N.isPending && `motion-safe:animate-spin`,
            W;
        t[75] === Be ? W = t[76] : (W = ee(`icon`, Be), t[75] = Be, t[76] = W);
        let He;
        t[77] !== Fe || t[78] !== Ie || t[79] !== Re || t[80] !== W ? (He = (0, $.jsx)(oe, {
            onClick: Fe,
            disabled: Ie,
            icon: Re,
            iconClassName: W
        }), t[77] = Fe, t[78] = Ie, t[79] = Re, t[80] = W, t[81] = He) : He = t[81];
        let G;
        t[82] === r ? G = t[83] : (G = (0, $.jsx)(g, {
            onClick: () => ze(r).blur()
        }), t[82] = r, t[83] = G);
        let K;
        t[84] !== Ne || t[85] !== U || t[86] !== He || t[87] !== G ? (K = (0, $.jsxs)(`div`, {
            className: `flex h-(--header-height) items-center gap-1 ps-3 pe-2`,
            children: [Ne, U, He, G]
        }), t[84] = Ne, t[85] = U, t[86] = He, t[87] = G, t[88] = K) : K = t[88];
        let q;
        t[89] !== ye || t[90] !== re || t[91] !== S.length ? (q = S.length === 0 ? null : S.length === 1 ? (0, $.jsx)(`div`, {
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
        }), t[89] = ye, t[90] = re, t[91] = S.length, t[92] = q) : q = t[92];
        let J;
        t[93] !== k || t[94] !== i || t[95] !== u || t[96] !== S ? (J = S.length === 0 ? (0, $.jsx)(`div`, {
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
            isDescriptionExpanded: u,
            setIsDescriptionExpanded: d,
            showHeader: S.length > 1
        }, `${e.toolCallMessage.id??`tool`}-${t}`)), t[93] = k, t[94] = i, t[95] = u, t[96] = S, t[97] = J) : J = t[97];
        let Y;
        t[98] !== q || t[99] !== J ? (Y = (0, $.jsxs)(`div`, {
            className: `flex h-full flex-col overflow-x-hidden overflow-y-auto`,
            children: [q, J]
        }), t[98] = q, t[99] = J, t[100] = Y) : Y = t[100];
        let Ue;
        t[101] !== z || t[102] !== K || t[103] !== Y ? (Ue = (0, $.jsxs)(f.div, {
            className: `relative flex h-full flex-col`,
            style: z,
            children: [K, Y]
        }), t[101] = z, t[102] = K, t[103] = Y, t[104] = Ue) : Ue = t[104];
        let We;
        t[105] !== R || t[106] !== Ue ? (We = (0, $.jsxs)(`div`, {
            className: `border-token-border-default bg-token-bg-elevated-secondary z-10 h-full border-s`,
            children: [R, Ue]
        }), t[105] = R, t[106] = Ue, t[107] = We) : We = t[107];
        let X;
        return t[108] !== P || t[109] !== We ? (X = (0, $.jsxs)($.Fragment, {
            children: [P, We]
        }), t[108] = P, t[109] = We, t[110] = X) : X = t[110], X
    }, mt = e => {
        "use forget";
        let t = (0, ut.c)(9),
            {
                clientThreadId: n
            } = e,
            r, i;
        t[0] === n ? (r = t[1], i = t[2]) : (r = h(n), i = ze(r), t[0] = n, t[1] = r, t[2] = i);
        let a = i,
            s;
        t[3] === a ? s = t[4] : (s = () => a.focusedMessages$(), t[3] = a, t[4] = s);
        let c = o(s),
            l;
        return t[5] !== r || t[6] !== a || t[7] !== c ? (l = c.length > 0 && (0, $.jsx)(d, {
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
//# sourceMappingURL=5be378a2-lg33tqjyvxz2jm59.js.map
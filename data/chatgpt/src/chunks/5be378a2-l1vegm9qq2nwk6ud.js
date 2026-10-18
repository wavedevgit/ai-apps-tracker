const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/c5df50f9-jl8zhv2tghgvf4hd.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/4571d27d-dt2y6vi9a2e7e6ew.js", "assets/d8c9beb7-da0d9u648pjr8t8f.js"]))) => i.map(i => d[i]);
import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    At as r,
    B6 as i,
    Bz as a,
    JP as o,
    JU as s,
    KP as c,
    My as l,
    b5 as u,
    cn as d,
    cw as f,
    en as p,
    fU as m,
    i5 as h,
    jy as g,
    nn as _,
    pU as v,
    qU as y,
    sw as ee,
    y5 as te,
    zz as b
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as x,
    Nn as S,
    On as ne,
    Rn as C,
    Vn as w,
    cn as re,
    ln as ie,
    p as ae,
    s as T,
    wn as E,
    zn as oe
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    ATt as se,
    BHn as D,
    Fwn as ce,
    H3t as le,
    HUn as ue,
    Hvn as de,
    IVt as fe,
    LVt as pe,
    NQ as me,
    OTt as O,
    OYt as he,
    Ojt as ge,
    VQ as _e,
    WUn as ve,
    cCn as ye,
    cPn as be,
    dPn as xe,
    jwn as Se,
    kYt as k,
    kjt as Ce,
    lCn as we,
    nUn as Te,
    qrt as A,
    rUn as j,
    tit as Ee,
    z3t as De,
    zHn as M,
    zvn as Oe
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    DC as N,
    EC as P,
    Kx as F,
    Mx as ke,
    ib as I,
    jx as L,
    qx as Ae,
    rb as je
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    Gx as Me,
    Jx as Ne,
    Kx as R,
    qx as z
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    n as B,
    t as V
} from "./c8f38d6c-bvzrbm7q7ua6zic8.js";
import {
    a as H,
    c as Pe,
    i as U,
    n as Fe,
    o as Ie,
    r as Le,
    s as Re,
    t as ze
} from "./58ab20f4-de6265zaz3czw86d.js";
var Be, W, Ve, He = e((() => {
        Be = E(), r(), W = x(), Ve = e => {
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
            return t[11] !== i || t[12] !== o || t[13] !== f || t[14] !== m || t[15] !== h ? (g = (0, W.jsx)(d.div, {
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
    G, K, q, J, Y, Ue = e((() => {
        G = E(), u(), K = n(w()), C(), q = x(), ie(), J = e => {
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
            t[4] === n ? u = t[5] : (u = te(`text-token-text-secondary min-w-0 truncate font-mono text-xs`, n), t[4] = n, t[5] = u);
            let d;
            t[6] === l ? d = t[7] : (d = (0, q.jsx)(S, {
                id: `NUKG65`,
                defaultMessage: `{tokenCount} tokens`,
                values: {
                    tokenCount: (0, q.jsx)(ne, {
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
            let n = (0, K.useMemo)(() => re(() => import(`./c5df50f9-jl8zhv2tghgvf4hd.js`).then(e => (e.t(), e.n)), __vite__mapDeps([0, 1, 2, 3, 4, 5])), []),
                r = (0, K.useMemo)(() => re(() => import(`./d8c9beb7-da0d9u648pjr8t8f.js`).then(e => (e.t(), e.r)), __vite__mapDeps([6, 1])), []);
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
        X = E(), l(), N(), le(), D(), u(), Ge = n(w()), Z = x(), Ke = (0, Ge.createContext)(null), qe = () => {
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
            t[0] === s ? c = t[1] : (c = te(`z-0 px-3`, s), t[0] = s, t[1] = c);
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
                [l, u] = (0, Ge.useState)(!1),
                d = l ? `border-token-border-default` : `border-transparent`,
                f;
            t[0] === d ? f = t[1] : (f = te(`bg-token-bg-elevated-secondary sticky top-0 z-20 flex w-full min-w-0 items-center border-b`, d), t[0] = d, t[1] = f);
            let p = !a && `-rotate-90`,
                m;
            t[2] === p ? m = t[3] : (m = te(`icon-sm shrink-0 transition-transform`, p), t[2] = p, t[3] = m);
            let h;
            t[4] === m ? h = t[5] : (h = (0, Z.jsx)(P, {
                className: m
            }), t[4] = m, t[5] = h);
            let _;
            t[6] === n ? _ = t[7] : (_ = (0, Z.jsx)(`span`, {
                className: `flex min-w-0 flex-1 items-center gap-2`,
                children: n
            }), t[6] = n, t[7] = _);
            let v;
            t[8] !== c || t[9] !== s || t[10] !== a || t[11] !== h || t[12] !== _ || t[13] !== o ? (v = (0, Z.jsxs)(`button`, {
                type: `button`,
                id: s,
                "aria-controls": c,
                "aria-expanded": a,
                onClick: o,
                className: `text-token-text-secondary focus-visible:ring-token-border-strong flex min-w-0 flex-1 items-center gap-2 rounded-sm px-3 py-3 text-start text-sm focus-visible:ring-1 focus-visible:outline-none`,
                children: [h, _]
            }), t[8] = c, t[9] = s, t[10] = a, t[11] = h, t[12] = _, t[13] = o, t[14] = v) : v = t[14];
            let y;
            t[15] === i ? y = t[16] : (y = i && (0, Z.jsx)(`div`, {
                className: `ms-auto py-1 ps-2 pe-3`,
                children: i
            }), t[15] = i, t[16] = y);
            let ee;
            t[17] !== f || t[18] !== v || t[19] !== y ? (ee = (0, Z.jsxs)(`div`, {
                className: f,
                children: [v, y]
            }), t[17] = f, t[18] = v, t[19] = y, t[20] = ee) : ee = t[20];
            let b = ee,
                x;
            t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (x = (0, Z.jsx)(`span`, {
                "aria-hidden": `true`,
                className: `pointer-events-none absolute block h-[1px] bg-transparent`,
                ref: M({
                    options: {
                        threshold: 0
                    },
                    onChange(e, t) {
                        u(t.intersectionRatio === 0)
                    }
                })
            }), t[21] = x) : x = t[21];
            let S;
            return t[22] !== b || t[23] !== r ? (S = (0, Z.jsxs)(Z.Fragment, {
                children: [x, r ? (0, Z.jsx)(g, {
                    side: `left`,
                    triggerAs: null,
                    labelTextAlign: `left`,
                    label: (0, Z.jsx)(De, {
                        size: `small`,
                        className: `text-sm leading-5 font-normal`,
                        forceDarkMode: !0,
                        children: r
                    }),
                    children: b
                }) : b]
            }), t[22] = b, t[23] = r, t[24] = S) : S = t[24], S
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
    return i ? R(i) : []
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
            g = o?.metadata?.chatgpt_sdk == null ? null : he(o.metadata.chatgpt_sdk),
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
    return fe(t - n, 200, 800)
}

function st(e) {
    return !!e.linkId
}

function ct(e) {
    return !!e.connectorId
}

function lt(e) {
    m().danger({
        id: `j+WGY0`,
        defaultMessage: `Error refreshing tools.`,
        description: `Error toast shown in app settings or the app developer sidebar when refreshing the app’s available tools fails. Terminology update: 'tool(s)' replaces 'action(s)' for callable app capabilities. Preserve the existing translation where appropriate, changing the term and any required grammar; meaning and placeholders are unchanged.`
    }, {
        error: e
    })
}
var ut, dt, $, ft, pt, mt, ht = e((() => {
    ut = E(), ce(), z(), A(), B(), o(), f(), I(), a(), F(), L(), Ce(), He(), Fe(), Ue(), H(), k(), ve(), j(), be(), me(), de(), i(), v(), we(), s(), O(), T(), u(), pe(), r(), dt = n(w()), C(), Ze(), $ = x(), ft = ({
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
            d = Ne({
                badgeKeys: nt(e, r),
                labels: Me,
                className: `flex-wrap gap-1`
            }),
            f = !!u?.description,
            p = u?.templates?.[0],
            m = p != null || e.widgetState != null || e.toolResponseMetadata != null || e.externalCallTimeMs != null,
            h = e.toolInput == null ? `{}` : JSON.stringify(e.toolInput),
            g = e.toolOutput == null ? `{}` : JSON.stringify(e.toolOutput);
        return (0, $.jsxs)(Q.Root, {
            defaultExpanded: t === n - 1,
            children: [c && (0, $.jsx)(Q.Header, {
                accessory: (0, $.jsx)(Y, {
                    content: g
                }),
                children: (0, $.jsxs)(`div`, {
                    className: `flex min-w-0 flex-col gap-1`,
                    children: [(0, $.jsx)(`span`, {
                        className: `truncate font-mono text-sm`,
                        children: (0, $.jsx)(S, {
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
                            children: (0, $.jsx)(S, {
                                id: `cBVjg7`,
                                defaultMessage: `Tool description`
                            })
                        })
                    }), (0, $.jsx)(Q.Content, {
                        children: (0, $.jsx)(`div`, {
                            className: `ps-6`,
                            children: u?.description ? (0, $.jsxs)($.Fragment, {
                                children: [(0, $.jsx)(`span`, {
                                    className: te(`text-token-text-primary block text-sm whitespace-pre-wrap`, o ? `line-clamp-none` : `line-clamp-4`),
                                    children: u.description
                                }), (0, $.jsx)(`button`, {
                                    className: `text-token-text-secondary mt-1 flex justify-start text-sm hover:underline`,
                                    onClick: () => s(!o),
                                    children: o ? (0, $.jsx)(S, {
                                        id: `Mggt6n`,
                                        defaultMessage: `See less`
                                    }) : (0, $.jsx)(S, {
                                        id: `yhD38v`,
                                        defaultMessage: `See all`
                                    })
                                })]
                            }) : (0, $.jsx)(`span`, {
                                className: `text-token-text-secondary text-sm`,
                                children: (0, $.jsx)(S, {
                                    id: `RyyTsY`,
                                    defaultMessage: `No description provided.`
                                })
                            })
                        })
                    })]
                }), m && (0, $.jsxs)(Q.Root, {
                    children: [(0, $.jsx)(Q.Header, {
                        accessory: (0, $.jsx)(ue, {
                            href: `https://developers.openai.com/apps-sdk`,
                            children: (0, $.jsx)(b, {
                                className: `icon-sm opacity-60`
                            })
                        }),
                        children: (0, $.jsx)(`span`, {
                            className: `font-mono text-sm`,
                            children: (0, $.jsx)(S, {
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
                            content: h
                        }),
                        children: (0, $.jsx)(`span`, {
                            className: `font-mono text-sm`,
                            children: (0, $.jsx)(S, {
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
                            }), (0, $.jsx)(Y, {
                                content: g
                            })]
                        }),
                        children: (0, $.jsx)(`span`, {
                            className: `font-mono text-sm`,
                            children: (0, $.jsx)(S, {
                                id: `2IVEZx`,
                                defaultMessage: `Tool output`
                            })
                        })
                    }), (0, $.jsx)(Q.Content, {
                        children: e.toolOutput == null ? (0, $.jsx)(`span`, {
                            className: `text-token-text-secondary text-sm`,
                            children: (0, $.jsx)(S, {
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
                            children: (0, $.jsx)(S, {
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
            i = oe(),
            a = _(0),
            [o, s] = (0, dt.useState)(!1),
            [c, l] = (0, dt.useState)(!1),
            u = _(400),
            f;
        t[0] !== a || t[1] !== u ? (f = [u, a], t[0] = a, t[1] = u, t[2] = f) : f = t[2];
        let g = p(f, ot),
            {
                connectorLinks: v,
                refetch: y
            } = xe(),
            b;
        t[3] === n ? b = t[4] : (b = at(n), t[3] = n, t[4] = b);
        let x = b,
            ne;
        t[5] !== v || t[6] !== x ? (ne = () => Oe(x.map(e => e.linkId ? Le(v, e.linkId)?.connector_id ?? e.connectorId : e.connectorId)), t[5] = v, t[6] = x, t[7] = ne) : ne = t[7];
        let C = h(ne),
            w = x.length === 1 ? x[0] : null,
            re;
        t[8] === w ? re = t[9] : (re = w && rt(w), t[8] = w, t[9] = re);
        let ie = re,
            T, E;
        if (t[10] !== v || t[11] !== C || t[12] !== x) {
            T = [...x].reverse().find(st)?.linkId ?? ``;
            let e = [...x].reverse().find(ct)?.connectorId ?? ``,
                n = Le(v, T);
            E = n?.connector_id == null ? e ? C?.get(e) : null : C?.get(n.connector_id), t[10] = v, t[11] = C, t[12] = x, t[13] = T, t[14] = E
        } else T = t[13], E = t[14];
        let D = E,
            ce = D?.logo_url ?? null,
            le = D?.logo_url_dark ?? null,
            ue = !!(D?.logo_url || D?.logo_url_dark),
            de;
        t[15] !== ce || t[16] !== le || t[17] !== ue ? (de = {
            lightLogoUrl: ce,
            darkLogoUrl: le,
            enabled: ue
        }, t[15] = ce, t[16] = le, t[17] = ue, t[18] = de) : de = t[18];
        let {
            data: fe
        } = se(de), {
            actions: pe
        } = _e(D), me;
        t[19] !== pe || t[20] !== D?.id || t[21] !== v || t[22] !== C ? (me = e => {
            let t = (e.linkId == null ? null : Le(v, e.linkId))?.connector_id ?? e.connectorId,
                n = t == null ? null : C?.get(t);
            return {
                connector: n,
                actions: n != null && n.id === D?.id ? pe : []
            }
        }, t[19] = pe, t[20] = D?.id, t[21] = v, t[22] = C, t[23] = me) : me = t[23];
        let O = me,
            he;
        t[24] !== O || t[25] !== w ? (he = w == null ? null : Ne({
            badgeKeys: nt(w, O(w).actions),
            labels: Me,
            className: `flex-wrap gap-1 mt-1`
        }), t[24] = O, t[25] = w, t[26] = he) : he = t[26];
        let ve = he,
            be;
        t[27] === i ? be = t[28] : (be = i.formatMessage({
            id: `chatgpt.dev_mode.sidebar.download_tool_call_data.button.label`,
            defaultMessage: `Download tool call data`
        }), t[27] = i, t[28] = be);
        let k = be,
            Ce;
        t[29] !== O || t[30] !== x ? (Ce = () => {
            ye(new Blob([JSON.stringify({
                toolCalls: x.map(e => {
                    let t = O(e);
                    return it(e, t.actions, t.connector?.name ?? null)
                })
            }, null, 2) + `
`], {
                type: `application/json`
            }), `tool-call-data.json`)
        }, t[29] = O, t[30] = x, t[31] = Ce) : Ce = t[31];
        let we = Ce,
            A;
        t[32] !== v || t[33] !== y ? (A = async e => {
            await Ee(e);
            let t = Le(v, e)?.connector_id;
            await Promise.all([y(), t && Se.refetch({
                connectorId: t,
                applyEligibilityFilter: !0,
                allowUnavailable: !0
            })])
        }, t[32] = v, t[33] = y, t[34] = A) : A = t[34];
        let j;
        t[35] === i ? j = t[36] : (j = () => {
            m().success(i.formatMessage({
                id: `n9Ee37`,
                defaultMessage: `Tool updated`
            }))
        }, t[35] = i, t[36] = j);
        let De;
        t[37] !== A || t[38] !== j ? (De = {
            mutationFn: A,
            onError: lt,
            onSuccess: j
        }, t[37] = A, t[38] = j, t[39] = De) : De = t[39];
        let M = ae(De),
            N;
        t[40] === o ? N = t[41] : (N = o && (0, $.jsx)(`div`, {
            className: `fixed inset-0 z-0 bg-transparent`
        }), t[40] = o, t[41] = N);
        let P;
        t[42] === a ? P = t[43] : (P = () => {
            s(!0), a.set(0)
        }, t[42] = a, t[43] = P);
        let F;
        t[44] !== g || t[45] !== a || t[46] !== u ? (F = () => {
            s(!1), a.set(0), u.set(g.get())
        }, t[44] = g, t[45] = a, t[46] = u, t[47] = F) : F = t[47];
        let I;
        t[48] === a ? I = t[49] : (I = e => a.set(a.get() + e.delta.x), t[48] = a, t[49] = I);
        let L;
        t[50] !== P || t[51] !== F || t[52] !== I ? (L = (0, $.jsx)(Ve, {
            onDragStart: P,
            onDragEnd: F,
            onDrag: I
        }), t[50] = P, t[51] = F, t[52] = I, t[53] = L) : L = t[53];
        let R;
        t[54] === g ? R = t[55] : (R = {
            width: g
        }, t[54] = g, t[55] = R);
        let z;
        t[56] !== D?.name || t[57] !== fe ? (z = fe?.url && (0, $.jsx)(`img`, {
            className: `h-4 w-4 shrink-0 rounded-md`,
            src: fe.url,
            alt: D?.name ?? ``
        }), t[56] = D?.name, t[57] = fe, t[58] = z) : z = t[58];
        let B;
        t[59] === D?.name ? B = t[60] : (B = D?.name ?? (0, $.jsx)(S, {
            id: `lDDPYo`,
            defaultMessage: `Unknown Connector`
        }), t[59] = D?.name, t[60] = B);
        let V;
        t[61] === B ? V = t[62] : (V = (0, $.jsx)(`span`, {
            className: `text-token-text-primary truncate text-lg`,
            children: B
        }), t[61] = B, t[62] = V);
        let H;
        t[63] !== z || t[64] !== V ? (H = (0, $.jsxs)(`div`, {
            className: `flex min-w-0 flex-1 items-center gap-2`,
            children: [z, V]
        }), t[63] = z, t[64] = V, t[65] = H) : H = t[65];
        let Pe;
        t[66] !== k || t[67] !== we ? (Pe = e => (0, $.jsx)(Te, {
            ...e,
            "aria-label": k,
            color: `secondary`,
            icon: je,
            onClick: we
        }), t[66] = k, t[67] = we, t[68] = Pe) : Pe = t[68];
        let U;
        t[69] !== k || t[70] !== Pe ? (U = (0, $.jsx)(ge, {
            content: k,
            side: `bottom-center`,
            children: Pe
        }), t[69] = k, t[70] = Pe, t[71] = U) : U = t[71];
        let Fe;
        t[72] !== T || t[73] !== M ? (Fe = () => {
            T && M.mutate(T)
        }, t[72] = T, t[73] = M, t[74] = Fe) : Fe = t[74];
        let Ie = M.isPending || !T,
            Re = M.isPending ? ke : Ae,
            Be = M.isPending && `motion-safe:animate-spin`,
            W;
        t[75] === Be ? W = t[76] : (W = te(`icon`, Be), t[75] = Be, t[76] = W);
        let He;
        t[77] !== Fe || t[78] !== Ie || t[79] !== Re || t[80] !== W ? (He = (0, $.jsx)(Te, {
            onClick: Fe,
            disabled: Ie,
            icon: Re,
            iconClassName: W
        }), t[77] = Fe, t[78] = Ie, t[79] = Re, t[80] = W, t[81] = He) : He = t[81];
        let G;
        t[82] === r ? G = t[83] : (G = (0, $.jsx)(ee, {
            onClick: () => ze(r).blur()
        }), t[82] = r, t[83] = G);
        let K;
        t[84] !== H || t[85] !== U || t[86] !== He || t[87] !== G ? (K = (0, $.jsxs)(`div`, {
            className: `flex h-(--header-height) items-center gap-1 ps-3 pe-2`,
            children: [H, U, He, G]
        }), t[84] = H, t[85] = U, t[86] = He, t[87] = G, t[88] = K) : K = t[88];
        let q;
        t[89] !== ve || t[90] !== ie || t[91] !== x.length ? (q = x.length === 0 ? null : x.length === 1 ? (0, $.jsx)(`div`, {
            className: `border-b px-3 py-3`,
            children: (0, $.jsxs)(`div`, {
                className: `flex flex-col gap-1`,
                children: [(0, $.jsx)(`span`, {
                    className: `text-token-text-secondary font-mono text-sm`,
                    children: ie
                }), ve]
            })
        }) : (0, $.jsx)(`div`, {
            className: `border-b px-3 py-3`,
            children: (0, $.jsx)(`span`, {
                className: `text-token-text-secondary font-mono text-sm`,
                children: (0, $.jsx)(S, {
                    id: `5zemKr`,
                    defaultMessage: `Tool call list`
                })
            })
        }), t[89] = ve, t[90] = ie, t[91] = x.length, t[92] = q) : q = t[92];
        let J;
        t[93] !== O || t[94] !== i || t[95] !== c || t[96] !== x ? (J = x.length === 0 ? (0, $.jsx)(`div`, {
            className: `text-token-text-secondary px-3 py-3 text-sm`,
            children: (0, $.jsx)(S, {
                id: `UGPm+j`,
                defaultMessage: `No tool calls found.`
            })
        }) : x.map((e, t) => (0, $.jsx)(ft, {
            call: e,
            index: t,
            totalCount: x.length,
            actions: O(e).actions,
            intl: i,
            logLineClassName: `!text-xs !leading-5`,
            isDescriptionExpanded: c,
            setIsDescriptionExpanded: l,
            showHeader: x.length > 1
        }, `${e.toolCallMessage.id??`tool`}-${t}`)), t[93] = O, t[94] = i, t[95] = c, t[96] = x, t[97] = J) : J = t[97];
        let Y;
        t[98] !== q || t[99] !== J ? (Y = (0, $.jsxs)(`div`, {
            className: `flex h-full flex-col overflow-x-hidden overflow-y-auto`,
            children: [q, J]
        }), t[98] = q, t[99] = J, t[100] = Y) : Y = t[100];
        let Ue;
        t[101] !== R || t[102] !== K || t[103] !== Y ? (Ue = (0, $.jsxs)(d.div, {
            className: `relative flex h-full flex-col`,
            style: R,
            children: [K, Y]
        }), t[101] = R, t[102] = K, t[103] = Y, t[104] = Ue) : Ue = t[104];
        let We;
        t[105] !== L || t[106] !== Ue ? (We = (0, $.jsxs)(`div`, {
            className: `border-token-border-default bg-token-bg-elevated-secondary z-10 h-full border-s`,
            children: [L, Ue]
        }), t[105] = L, t[106] = Ue, t[107] = We) : We = t[107];
        let X;
        return t[108] !== N || t[109] !== We ? (X = (0, $.jsxs)($.Fragment, {
            children: [N, We]
        }), t[108] = N, t[109] = We, t[110] = X) : X = t[110], X
    }, mt = e => {
        "use forget";
        let t = (0, ut.c)(9),
            {
                clientThreadId: n
            } = e,
            r, i;
        t[0] === n ? (r = t[1], i = t[2]) : (r = c(n), i = ze(r), t[0] = n, t[1] = r, t[2] = i);
        let a = i,
            o;
        t[3] === a ? o = t[4] : (o = () => a.focusedMessages$(), t[3] = a, t[4] = o);
        let s = h(o),
            l;
        return t[5] !== r || t[6] !== a || t[7] !== s ? (l = s.length > 0 && (0, $.jsx)(y, {
            name: `DevModeSidebar`,
            onError: () => a.blur(),
            children: (0, $.jsx)(pt, {
                focusedMessages: s,
                conversation: r
            }, s[s.length - 1]?.id ?? `dev-mode-sidebar`)
        }), t[5] = r, t[6] = a, t[7] = s, t[8] = l) : l = t[8], l
    }
}));
export {
    Qe as n, ht as r, mt as t
};
//# sourceMappingURL=5be378a2-l1vegm9qq2nwk6ud.js.map
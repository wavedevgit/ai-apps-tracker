const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/e75991f6-dktlei8obvwjl7zt.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-d7xm9wsvhdfbag9a.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-m7dgsxtvvivh3e6t.js", "assets/30901919-lc79rizhhepnsl3q.js", "assets/c470f5ab-lnsrbaizit3lulwq.js", "assets/0e5afe53-lar0ol3v36kqq3ou.js", "assets/conversation-small-ertg9659.css", "assets/8b34dbc2-ik628tlti8ozm9vq.js", "assets/82782bc9-cyj0qqxyrvk6mamy.js", "assets/1cfd0849-f9m778ea3rc7yhk7.js", "assets/44fdb285-eqbs32ros2tfuy2h.js", "assets/540191af-bsnwm8m7nrxh45sh.js", "assets/85557f11-mqqr1coukt2floak.js", "assets/e4fe0dae-l4vxeim4wpwl76rs.js", "assets/b9e74381-h0z6cp6y2ptcf91m.js", "assets/62331d8d-cbw7gx73w3n122mh.js", "assets/971592ec-egmz1cprqjn8rdyf.js", "assets/4c0f1f8e-o4zbuwgknf8ay6gx.js", "assets/86793a97-ecm0toyzml2n4l97.js", "assets/183f19de-b4keljrxqzf9e2ih.js", "assets/656cec6a-eb28tqxd47ia52hc.js", "assets/cb56d84a-l5xbecmayz0u2zwt.js", "assets/image-viewer-b098kzr0.css", "assets/d93502a4-h3zgrrwgbwnm2fgj.js", "assets/a35b0b5c-gpo0rmtc887pjzf6.js", "assets/57388dad-e81wflzbqvsjr6g7.js", "assets/5ff32e89-cmdwwdrqltato3ab.js", "assets/43119cb7-jyrrt9pyqusidjeq.js", "assets/b8c3b71b-e3taz4pa3fghyyfw.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as n,
    Hh as r,
    I5 as i,
    J5 as a,
    Lnt as o,
    ON as s,
    Rz as c,
    TN as l,
    Uh as u,
    a2 as d,
    c2 as f,
    d2 as p,
    es as m,
    gF as h,
    l7 as g,
    o2 as _,
    os as v,
    rq as y,
    u7 as b,
    uq as x,
    vF as S,
    znt as C,
    zz as w
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    Bn as T,
    Ln as E,
    Nn as D,
    Rn as O,
    Vn as k,
    cn as A,
    ln as j,
    wn as M,
    zn as N
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    DMn as P,
    Gfn as F,
    Jfn as ee,
    Kfn as te,
    TMn as ne,
    Yfn as re,
    d as ie,
    hbn as ae,
    qfn as oe,
    sbn as se
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    Km as ce,
    Xy as le,
    Zy as ue,
    bS as de,
    qm as fe,
    yS as pe
} from "./30901919-lc79rizhhepnsl3q.js";
import {
    Hl as me,
    Vl as he,
    Yg as I,
    ca as ge,
    ma as _e,
    t_ as ve
} from "./8b34dbc2-ik628tlti8ozm9vq.js";
import {
    n as ye,
    t as be
} from "./9d67bd7d-e9ykppy6uguwaxsx.js";
import {
    a as xe,
    i as Se,
    n as Ce,
    r as we,
    t as Te
} from "./ecab41d6-bx4xx3euplmge7zm.js";
var L, R, z, Ee = e((() => {
        L = M(), we(), l(), R = T(), z = () => {
            "use forget";
            let e = (0, L.c)(2),
                t = `url(${s()?Te:Ce})`,
                n;
            return e[0] === t ? n = e[1] : (n = (0, R.jsx)(`div`, {
                className: `absolute inset-0 z-0 w-full overflow-hidden opacity-0 group-hover:opacity-100 group-focus:opacity-100`,
                children: (0, R.jsx)(`div`, {
                    className: `absolute inset-0 bg-auto bg-repeat`,
                    style: {
                        backgroundImage: t
                    }
                })
            }), e[0] = t, e[1] = n), n
        }
    })),
    B, V, H, U, W, G, K, De = e((() => {
        B = M(), fe(), Ee(), b(), V = t(k()), O(), H = T(), U = E({
            generatedImageAlt: {
                id: `imageCard.generatedImageAlt`,
                defaultMessage: `ChatGPT generated image.`
            },
            openImage: {
                id: `imageCard.openImage`,
                defaultMessage: `Open image: {imageTitle}`
            }
        }), W = e => {
            "use forget";
            let t = (0, B.c)(27),
                {
                    src: n,
                    thumbnail: r,
                    alt: i,
                    height: a,
                    width: o,
                    isLoaded: s,
                    onLoad: c,
                    onError: l
                } = e,
                [u, d] = (0, V.useState)(!1),
                f = !s && `opacity-0`,
                p;
            t[0] === f ? p = t[1] : (p = g(`absolute inset-0 z-0 aspect-square object-cover transition-opacity delay-100 duration-300 ease-[cubic-bezier(.24,.1,.42,.91)]`, f), t[0] = f, t[1] = p);
            let m = i ?? void 0,
                h;
            t[2] !== l || t[3] !== c ? (h = () => {
                l(), c()
            }, t[2] = l, t[3] = c, t[4] = h) : h = t[4];
            let _;
            t[5] !== a || t[6] !== c || t[7] !== n || t[8] !== p || t[9] !== m || t[10] !== h || t[11] !== o ? (_ = (0, H.jsx)(`img`, {
                loading: `lazy`,
                decoding: `async`,
                className: p,
                alt: m,
                src: n,
                width: o,
                height: a,
                onLoad: c,
                onError: h
            }), t[5] = a, t[6] = c, t[7] = n, t[8] = p, t[9] = m, t[10] = h, t[11] = o, t[12] = _) : _ = t[12];
            let v;
            t[13] !== i || t[14] !== a || t[15] !== s || t[16] !== u || t[17] !== n || t[18] !== r || t[19] !== o ? (v = r && r !== n && (0, H.jsx)(`img`, {
                loading: `lazy`,
                decoding: `async`,
                alt: i ?? void 0,
                src: r,
                className: g(`absolute inset-0 z-1 h-full w-full object-cover blur-sm transition-opacity delay-100 duration-300 ease-[cubic-bezier(.24,.1,.42,.91)]`, u && !s ? `opacity-100` : `opacity-0`),
                width: o,
                height: a,
                onLoad: () => d(!0)
            }), t[13] = i, t[14] = a, t[15] = s, t[16] = u, t[17] = n, t[18] = r, t[19] = o, t[20] = v) : v = t[20];
            let y;
            t[21] === s ? y = t[22] : (y = s && (0, H.jsx)(z, {}), t[21] = s, t[22] = y);
            let b;
            return t[23] !== _ || t[24] !== v || t[25] !== y ? (b = (0, H.jsxs)(H.Fragment, {
                children: [_, v, y]
            }), t[23] = _, t[24] = v, t[25] = y, t[26] = b) : b = t[26], b
        }, G = e => !(`isPlaceholder` in e) || !e.isPlaceholder, K = e => {
            "use forget";
            let t = (0, B.c)(27),
                [n, r] = (0, V.useState)(!1),
                [i, a] = (0, V.useState)(!1),
                o = N(),
                {
                    index: s,
                    onClick: c
                } = e,
                l;
            t[0] === e ? l = t[1] : (l = G(e), t[0] = e, t[1] = l);
            let u = !l,
                d, f, p, m;
            t[2] !== s || t[3] !== o || t[4] !== c || t[5] !== u || t[6] !== e.alt ? (d = u ? null : e.alt ?? o.formatMessage(U.generatedImageAlt), t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (f = g(`group/imagegen-image bg-token-bg-tertiary relative z-0 flex aspect-square items-center justify-center overflow-clip text-xs`), t[11] = f) : f = t[11], p = u ? !0 : void 0, m = !u && c != null && d != null && (0, H.jsx)(`button`, {
                type: `button`,
                className: `absolute inset-0 z-1 rounded focus:outline-none focus-visible:shadow-[inset_0_0_0_4px_rgba(0,0,0,0.35)] focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-inset`,
                "aria-label": o.formatMessage(U.openImage, {
                    imageTitle: d
                }),
                onClick: () => c(s)
            }), t[2] = s, t[3] = o, t[4] = c, t[5] = u, t[6] = e.alt, t[7] = d, t[8] = f, t[9] = p, t[10] = m) : (d = t[7], f = t[8], p = t[9], m = t[10]);
            let h;
            t[12] !== d || t[13] !== n || t[14] !== u || t[15] !== e ? (h = u ? (0, H.jsx)(`div`, {
                className: `absolute inset-0 flex h-full w-full items-center justify-center`,
                children: (0, H.jsx)(`div`, {
                    className: `bg-token-bg-tertiary h-full w-full animate-pulse`
                })
            }) : (0, H.jsxs)(H.Fragment, {
                children: [!n && (0, H.jsx)(`div`, {
                    className: `bg-token-bg-tertiary absolute inset-0 z-0 motion-safe:animate-pulse`
                }), (0, H.jsx)(W, {
                    ...e,
                    alt: d,
                    isLoaded: n,
                    onLoad: () => r(!0),
                    onError: () => a(!0)
                })]
            }), t[12] = d, t[13] = n, t[14] = u, t[15] = e, t[16] = h) : h = t[16];
            let _;
            t[17] !== i || t[18] !== u ? (_ = i && !u && (0, H.jsx)(ce, {
                className: `text-token-text-tertiary absolute z-0 h-12 w-12 text-red-500`
            }), t[17] = i, t[18] = u, t[19] = _) : _ = t[19];
            let v;
            return t[20] !== e.children || t[21] !== f || t[22] !== p || t[23] !== m || t[24] !== h || t[25] !== _ ? (v = (0, H.jsxs)(`div`, {
                className: f,
                "aria-hidden": p,
                children: [m, h, _, e.children]
            }), t[20] = e.children, t[21] = f, t[22] = p, t[23] = m, t[24] = h, t[25] = _, t[26] = v) : v = t[26], v
        }
    }));

function Oe(e) {
    "use forget";
    let t = (0, Y.c)(5),
        {
            requestKey: n
        } = e,
        r;
    t[0] === n ? r = t[1] : (r = () => he(n)?.state$(), t[0] = n, t[1] = r);
    let i = a(r);
    if (i == null) {
        let e;
        return t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Z.jsx)(K, {
            index: 0,
            isPlaceholder: !0,
            children: (0, Z.jsx)(D, {
                id: `EmcVXU`,
                defaultMessage: `Loading`
            })
        }), t[2] = e) : e = t[2], e
    }
    let o;
    return t[3] === i ? o = t[4] : (o = (0, Z.jsx)(K, {
        index: 0,
        isPlaceholder: !0,
        children: (0, Z.jsx)(ke, {
            state: i
        })
    }), t[3] = i, t[4] = o), o
}

function ke(e) {
    "use forget";
    let t = (0, Y.c)(7),
        {
            state: n
        } = e,
        r;
    bb0: {
        switch (n.status) {
            case `created`: {
                let e;
                t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Z.jsx)(D, {
                    id: `R7m5jN`,
                    defaultMessage: `Created`
                }), t[0] = e) : e = t[0], r = e;
                break bb0
            }
            case `waiting-on-files`: {
                let e;
                t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Z.jsx)(D, {
                    id: `rXf1Xk`,
                    defaultMessage: `Waiting on files`
                }), t[1] = e) : e = t[1], r = e;
                break bb0
            }
            case `generating`: {
                let e;
                t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Z.jsx)(D, {
                    id: `iPuM49`,
                    defaultMessage: `Generating`
                }), t[2] = e) : e = t[2], r = e;
                break bb0
            }
            case `failed`: {
                let e;
                t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Z.jsx)(D, {
                    id: `xdzLSJ`,
                    defaultMessage: `Failed`
                }), t[3] = e) : e = t[3], r = e;
                break bb0
            }
            case `succeeded`: {
                let e;
                t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Z.jsx)(D, {
                    id: `L8uvew`,
                    defaultMessage: `Succeeded`
                }), t[4] = e) : e = t[4], r = e;
                break bb0
            }
        }
        r = void 0
    }
    let i = r,
        a;
    return t[5] === i ? a = t[6] : (a = (0, Z.jsx)(`div`, {
        className: `text-token-text-secondary flex h-full items-center justify-center text-sm font-medium`,
        children: i
    }), t[5] = i, t[6] = a), a
}

function Ae(e) {
    "use forget";
    let t = (0, Y.c)(33),
        {
            image: n,
            index: r,
            onClick: i,
            onUnhide: o,
            isHidden: s,
            onlyUseThumbnail: c
        } = e,
        {
            asset_pointer: l,
            conversation_id: u,
            message_id: d,
            url: f,
            width: p,
            height: g,
            prompt: _,
            title: v
        } = n,
        y;
    t[0] !== n || t[1] !== f ? (y = F(n) ?? f, t[0] = n, t[1] = f, t[2] = y) : y = t[2];
    let b = y,
        x = c && b ? b : n.encodings?.md?.path ?? f,
        S;
    t[3] === u ? S = t[4] : (S = u == null ? void 0 : h(u), t[3] = u, t[4] = S);
    let C = S,
        w;
    t[5] === C ? w = t[6] : (w = () => C?.serverId$(), t[5] = C, t[6] = w);
    let T = a(w),
        E;
    t[7] !== n || t[8] !== i ? (E = () => i?.(n), t[7] = n, t[8] = i, t[9] = E) : E = t[9];
    let D = _ ?? v ?? ``,
        O;
    t[10] !== l || t[11] !== C || t[12] !== n || t[13] !== s || t[14] !== d || t[15] !== i || t[16] !== T || t[17] !== f ? (O = !s && C != null && d != null && (0, Z.jsx)(Se, {
        imageAssetPointer: l ?? void 0,
        imageUrl: f,
        canPublishPromptShare: n.generation_type === `image_gen`,
        conversation: C,
        messageId: d,
        alwaysVisible: !1,
        onEditClick: () => i?.(n),
        shareFlowSource: m.CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIBRARY_GRID,
        editButtonAnalytics: {
            surface: ne.CHATGPT_CONVERSATION_IMAGE_EDIT_BUTTON_TAP_SURFACE_IMAGE_LIBRARY_THUMBNAIL,
            conversationId: T,
            messageId: d,
            generationId: n.generation_id
        }
    }), t[10] = l, t[11] = C, t[12] = n, t[13] = s, t[14] = d, t[15] = i, t[16] = T, t[17] = f, t[18] = O) : O = t[18];
    let k;
    t[19] !== n || t[20] !== s || t[21] !== o ? (k = s && (0, Z.jsx)(J, {
        onClick: () => o?.(n)
    }), t[19] = n, t[20] = s, t[21] = o, t[22] = k) : k = t[22];
    let A;
    return t[23] !== g || t[24] !== x || t[25] !== r || t[26] !== E || t[27] !== D || t[28] !== O || t[29] !== k || t[30] !== b || t[31] !== p ? (A = (0, Z.jsxs)(K, {
        index: r,
        src: x,
        onClick: E,
        thumbnail: b,
        width: p,
        height: g,
        alt: D,
        children: [O, k]
    }), t[23] = g, t[24] = x, t[25] = r, t[26] = E, t[27] = D, t[28] = O, t[29] = k, t[30] = b, t[31] = p, t[32] = A) : A = t[32], A
}

function je(e) {
    "use forget";
    let t = (0, Y.c)(28),
        {
            video: n,
            onClick: r,
            onUnhide: i,
            isHidden: a,
            onlyUseThumbnail: o
        } = e,
        s;
    t[0] === n ? s = t[1] : (s = F(n), t[0] = n, t[1] = s);
    let c = s,
        l = N(),
        u, d, f;
    t[2] !== l || t[3] !== r || t[4] !== n ? (f = n.prompt ?? n.title ?? l.formatMessage(Q.generatedVideoAlt), u = `group/imagegen-image bg-tertiary relative z-0 flex aspect-square items-center justify-center overflow-clip text-xs`, d = r != null && (0, Z.jsx)(`button`, {
        type: `button`,
        className: `absolute inset-0 z-1 rounded focus:outline-none focus-visible:shadow-[inset_0_0_0_4px_rgba(0,0,0,0.35)] focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-inset`,
        "aria-label": l.formatMessage(Q.openVideo, {
            videoTitle: f
        }),
        onClick: () => r(n)
    }), t[2] = l, t[3] = r, t[4] = n, t[5] = u, t[6] = d, t[7] = f) : (u = t[5], d = t[6], f = t[7]);
    let p;
    t[8] !== o || t[9] !== c || t[10] !== n || t[11] !== f ? (p = o && c ? (0, Z.jsx)(`img`, {
        src: c,
        alt: f,
        className: `absolute inset-0 h-full w-full object-cover`,
        loading: `lazy`,
        decoding: `async`
    }) : (0, Z.jsx)(`video`, {
        className: `absolute inset-0 h-full w-full object-cover`,
        src: te(n),
        poster: c ?? void 0,
        width: n.width,
        height: n.height,
        muted: !0,
        loop: !o,
        autoPlay: !o,
        playsInline: !0,
        preload: o ? `metadata` : `auto`,
        "aria-label": f
    }), t[8] = o, t[9] = c, t[10] = n, t[11] = f, t[12] = p) : p = t[12];
    let m;
    t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (m = (0, Z.jsx)(`div`, {
        className: `pointer-events-none absolute inset-0 z-10 bg-black/20`
    }), t[13] = m) : m = t[13];
    let g;
    t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (g = (0, Z.jsx)(`div`, {
        className: `pointer-events-none absolute end-3 top-3 z-20 opacity-0 transition-opacity duration-75 ease-out group-focus-within/imagegen-image:opacity-100 group-hover/imagegen-image:opacity-100`,
        children: (0, Z.jsx)(`div`, {
            className: `flex h-10 w-10 items-center justify-center text-white`,
            children: (0, Z.jsx)(q, {
                children: (0, Z.jsx)(ue, {
                    style: {
                        filter: `drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15))`
                    },
                    className: `icon fill-current`
                })
            })
        })
    }), t[14] = g) : g = t[14];
    let _;
    t[15] !== a || t[16] !== n ? (_ = !a && n.conversation_id != null && (0, Z.jsx)(Me, {
        video: n,
        conversation: h(n.conversation_id)
    }), t[15] = a, t[16] = n, t[17] = _) : _ = t[17];
    let v;
    t[18] !== a || t[19] !== i || t[20] !== n ? (v = a && (0, Z.jsx)(J, {
        onClick: () => i?.(n)
    }), t[18] = a, t[19] = i, t[20] = n, t[21] = v) : v = t[21];
    let y;
    return t[22] !== u || t[23] !== d || t[24] !== p || t[25] !== _ || t[26] !== v ? (y = (0, Z.jsxs)(`div`, {
        className: u,
        children: [d, p, m, g, _, v]
    }), t[22] = u, t[23] = d, t[24] = p, t[25] = _, t[26] = v, t[27] = y) : y = t[27], y
}

function Me(e) {
    "use forget";
    let t = (0, Y.c)(20),
        {
            video: n,
            conversation: r
        } = e,
        i = N(),
        [a, o] = (0, X.useState)(!1),
        s = n.message_id ?? n.id,
        l;
    t[0] === s ? l = t[1] : (l = [s], t[0] = s, t[1] = l);
    let u = n.generation_id,
        d;
    t[2] === n ? d = t[3] : (d = oe(n), t[2] = n, t[3] = d);
    let f;
    t[4] !== r || t[5] !== l || t[6] !== d || t[7] !== n.generation_id ? (f = {
        conversation: r,
        messageSliceIds: l,
        soraGenerationId: u,
        soraPreviewUrl: d,
        shareFlowSource: m.CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIBRARY_GRID
    }, t[4] = r, t[5] = l, t[6] = d, t[7] = n.generation_id, t[8] = f) : f = t[8];
    let p = _e(f),
        h;
    t[9] === p ? h = t[10] : (h = function(e) {
        e.stopPropagation(), o(!0), p().finally(() => {
            o(!1)
        })
    }, t[9] = p, t[10] = h);
    let g = h,
        _;
    t[11] === i ? _ = t[12] : (_ = i.formatMessage(Q.shareVideo), t[11] = i, t[12] = _);
    let v;
    t[13] === a ? v = t[14] : (v = (0, Z.jsx)(q, {
        className: `group-hover:bg-black/30 group-focus:bg-black/30`,
        children: a ? (0, Z.jsx)(c, {}) : (0, Z.jsx)(de, {
            style: {
                filter: `drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15))`
            },
            className: `icon fill-current`
        })
    }), t[13] = a, t[14] = v);
    let y;
    return t[15] !== g || t[16] !== a || t[17] !== _ || t[18] !== v ? (y = (0, Z.jsx)(`div`, {
        className: `pointer-events-none absolute inset-x-0 bottom-0 z-20 flex items-end justify-end p-3`,
        children: (0, Z.jsx)(`button`, {
            className: `group pointer-events-auto z-11 flex h-10 w-10 items-center justify-center text-sm font-medium text-white`,
            onClick: g,
            "aria-label": _,
            disabled: a,
            type: `button`,
            children: v
        })
    }), t[15] = g, t[16] = a, t[17] = _, t[18] = v, t[19] = y) : y = t[19], y
}

function q(e) {
    "use forget";
    let t = (0, Y.c)(5),
        {
            children: n,
            className: r
        } = e,
        i;
    t[0] === r ? i = t[1] : (i = g(`flex h-9 w-9 items-center justify-center rounded-full bg-black/15 backdrop-blur-md`, r), t[0] = r, t[1] = i);
    let a;
    return t[2] !== n || t[3] !== i ? (a = (0, Z.jsx)(`span`, {
        className: i,
        children: n
    }), t[2] = n, t[3] = i, t[4] = a) : a = t[4], a
}

function J(e) {
    "use forget";
    let t = (0, Y.c)(8),
        {
            onClick: n
        } = e,
        i = N(),
        a;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, Z.jsx)(`div`, {
        className: `pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity group-hover/imagegen-image:opacity-100`,
        children: (0, Z.jsx)(`div`, {
            className: `absolute inset-x-0 bottom-0 h-20 bg-linear-to-b from-transparent to-black/30`
        })
    }), t[0] = a) : a = t[0];
    let o;
    t[1] === i ? o = t[2] : (o = i.formatMessage({
        id: `G+OPvx`,
        defaultMessage: `Unhide media`
    }), t[1] = i, t[2] = o);
    let s;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, Z.jsx)(r, {
        className: `h-4 w-4`
    }), t[3] = s) : s = t[3];
    let c;
    t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, Z.jsx)(`span`, {
        className: `max-md:hidden`,
        children: (0, Z.jsx)(D, {
            id: `mSvNO/`,
            defaultMessage: `Unhide`
        })
    }), t[4] = c) : c = t[4];
    let l;
    return t[5] !== n || t[6] !== o ? (l = (0, Z.jsxs)(Z.Fragment, {
        children: [a, (0, Z.jsx)(`div`, {
            className: `absolute end-1 bottom-1 z-20 opacity-0 transition-opacity group-hover/imagegen-image:opacity-100`,
            children: (0, Z.jsxs)(`button`, {
                className: `z-11 flex h-10 items-center gap-1 rounded-xl px-2 text-sm font-medium text-white hover:bg-white/15 hover:backdrop-blur-md focus:bg-white/15 focus:backdrop-blur-md`,
                onClick: n,
                "aria-label": o,
                type: `button`,
                children: [s, c]
            })
        })]
    }), t[5] = n, t[6] = o, t[7] = l) : l = t[7], l
}

function Ne(e) {
    return (0, Z.jsx)(Oe, {
        requestKey: e
    }, e)
}
var Y, X, Z, Pe, Q, $, Fe = e((() => {
    Y = M(), S(), u(), le(), pe(), f(), ye(), me(), ve(), xe(), ae(), ge(), v(), n(), w(), De(), C(), y(), P(), _(), b(), X = t(k()), O(), ee(), ie(), Z = T(), j(), Pe = d(() => A(() => import(`./e75991f6-dktlei8obvwjl7zt.js`).then(e => e.ImageGenLibraryLightboxNew), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]))), Q = E({
        generatedVideoAlt: {
            id: `imageGrid.generatedVideoAlt`,
            defaultMessage: `ChatGPT generated video.`
        },
        openVideo: {
            id: `imageGrid.openVideo`,
            defaultMessage: `Open video: {videoTitle}`
        },
        shareVideo: {
            id: `imageGrid.shareVideo`,
            defaultMessage: `Share this video`
        }
    }), $ = e => {
        "use forget";
        let t = (0, Y.c)(43),
            {
                conversation: n,
                className: r,
                hasMoreImages: s,
                generationRequestKeys: l,
                count: u,
                images: d,
                includeArchived: f,
                isHiddenView: m,
                onUnhide: h,
                onOpenLightbox: _,
                onlyUseThumbnail: v,
                isFetchingMore: y,
                onScrollToEnd: b
            } = e,
            S = m !== void 0 && m,
            C = a(x) ? 25 : 10,
            w = u != null && u > d.length ? u - d.length : null,
            T = y || s && !d.length ? Math.min(w ?? C, C) : 0,
            E;
        t[0] !== n || t[1] !== f || t[2] !== S ? (E = e => {
            o.logEventWithStatsig(`chatgpt_web_image_library_lightbox_opened`, `chatgpt_web_image_library_lightbox_opened`);
            let t = i(() => se(n).id);
            p(Pe, {
                initialIndex: e,
                includeArchived: f,
                visibilityFilter: S ? `archived` : `unarchived`,
                conversation: n,
                currentModelId: t
            })
        }, t[0] = n, t[1] = f, t[2] = S, t[3] = E) : E = t[3];
        let D = E,
            O;
        t[4] === r ? O = t[5] : (O = g(`w-full`, r), t[4] = r, t[5] = O);
        let k;
        t[6] === l ? k = t[7] : (k = l?.map(Ne), t[6] = l, t[7] = k);
        let A;
        if (t[8] !== s || t[9] !== d || t[10] !== y || t[11] !== S || t[12] !== _ || t[13] !== b || t[14] !== h || t[15] !== v || t[16] !== D || t[17] !== T) {
            let e;
            t[19] !== S || t[20] !== _ || t[21] !== h || t[22] !== v || t[23] !== D ? (e = (e, t) => (0, Z.jsx)(X.Fragment, {
                children: re(e) ? (0, Z.jsx)(je, {
                    video: e,
                    onlyUseThumbnail: v,
                    onClick: () => {
                        _ && I() ? _(e, t) : D(t)
                    },
                    onUnhide: e => h?.(e.id),
                    isHidden: S
                }) : (0, Z.jsx)(Ae, {
                    image: e,
                    index: t,
                    onlyUseThumbnail: v,
                    onClick: () => {
                        _ && I() ? _(e, t) : D(t)
                    },
                    onUnhide: e => h?.(e.id),
                    isHidden: S
                })
            }, e.id), t[19] = S, t[20] = _, t[21] = h, t[22] = v, t[23] = D, t[24] = e) : e = t[24];
            let n;
            t[25] === d.length ? n = t[26] : (n = (e, t) => {
                let n = d.length + t;
                return (0, Z.jsx)(K, {
                    index: n,
                    isPlaceholder: !0
                }, n)
            }, t[25] = d.length, t[26] = n);
            let r;
            t[27] !== s || t[28] !== y || t[29] !== b ? (r = (0, Z.jsx)(be, {
                enabled: s,
                isFetching: y,
                onScrollToEnd: b
            }, `scroll-to-end-after-placeholders`), t[27] = s, t[28] = y, t[29] = b, t[30] = r) : r = t[30], A = d.map(e).concat(Array(T).fill(null).map(n)).concat([r]), t[8] = s, t[9] = d, t[10] = y, t[11] = S, t[12] = _, t[13] = b, t[14] = h, t[15] = v, t[16] = D, t[17] = T, t[18] = A
        } else A = t[18];
        let j;
        t[31] !== k || t[32] !== A ? (j = (0, Z.jsxs)(`div`, {
            className: `grid min-h-60 w-full grid-cols-2 gap-1 max-md:gap-0.5 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6`,
            children: [k, A]
        }), t[31] = k, t[32] = A, t[33] = j) : j = t[33];
        let M;
        t[34] !== s || t[35] !== y ? (M = s && y && (0, Z.jsx)(c, {}), t[34] = s, t[35] = y, t[36] = M) : M = t[36];
        let N;
        t[37] === M ? N = t[38] : (N = (0, Z.jsx)(`div`, {
            className: `flex h-8 items-center justify-center`,
            children: M
        }), t[37] = M, t[38] = N);
        let P;
        return t[39] !== O || t[40] !== j || t[41] !== N ? (P = (0, Z.jsxs)(`div`, {
            className: O,
            children: [j, N]
        }), t[39] = O, t[40] = j, t[41] = N, t[42] = P) : P = t[42], P
    }
}));
export {
    Fe as n, $ as t
};
//# sourceMappingURL=7bd2b610-ktqvauk3ktd8s335.js.map
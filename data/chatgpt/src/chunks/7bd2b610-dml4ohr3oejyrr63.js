const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/e75991f6-k7bp6nlfwcp2wqc2.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-t80q9ew944ej0mgk.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-ocicxxw6jegn4vux.js", "assets/30901919-r9pahacmzqudnt4f.js", "assets/c470f5ab-py8gip6x11wq9s88.js", "assets/0e5afe53-bfccq9og5d2mon04.js", "assets/conversation-small-ht8gwtl7.css", "assets/8b34dbc2-egl8cz04n8nmlktg.js", "assets/82782bc9-dyzlhaxotei12n1t.js", "assets/1cfd0849-hp82r8pa7w8ppuka.js", "assets/44fdb285-iyu02ecen3bw1zpy.js", "assets/540191af-bsnwm8m7nrxh45sh.js", "assets/85557f11-mqqr1coukt2floak.js", "assets/e4fe0dae-l4vxeim4wpwl76rs.js", "assets/b9e74381-h0z6cp6y2ptcf91m.js", "assets/62331d8d-op7af6kioku3qd78.js", "assets/971592ec-cbz4bhi9hvih7asj.js", "assets/4c0f1f8e-o4zbuwgknf8ay6gx.js", "assets/86793a97-mhmgt8p0zs846y21.js", "assets/183f19de-b4keljrxqzf9e2ih.js", "assets/656cec6a-conqb3u9zelbbsup.js", "assets/cb56d84a-l5xbecmayz0u2zwt.js", "assets/image-viewer-b098kzr0.css", "assets/d93502a4-e7gxbim36cwetzdr.js", "assets/a35b0b5c-jfbj2154rn1opof8.js", "assets/57388dad-dq9pjn26ipj3moh2.js", "assets/5ff32e89-cwtldajh80hsak4t.js", "assets/43119cb7-o3vgxi4u9f10tptp.js", "assets/b8c3b71b-bkwu8j05u5hsf0sd.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    F5 as n,
    Hh as r,
    Int as i,
    ON as a,
    Pnt as o,
    Rz as s,
    TN as c,
    Uh as l,
    a2 as u,
    c2 as d,
    c7 as f,
    d2 as p,
    es as m,
    gF as h,
    k8 as g,
    l7 as _,
    o2 as v,
    os as y,
    q5 as b,
    rq as x,
    uq as S,
    vF as C,
    zz as w
} from "./4813494d-t80q9ew944ej0mgk.js";
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
    Dfn as P,
    Efn as ee,
    Ofn as te,
    Tfn as F,
    d as ne,
    iMn as re,
    kfn as ie,
    oMn as ae,
    qyn as oe,
    zyn as se
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    Km as ce,
    Xy as le,
    Zy as ue,
    bS as de,
    qm as fe,
    yS as pe
} from "./30901919-r9pahacmzqudnt4f.js";
import {
    Kg as I,
    Qg as me,
    Rl as he,
    ca as ge,
    ma as _e,
    zl as ve
} from "./8b34dbc2-egl8cz04n8nmlktg.js";
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
} from "./ecab41d6-da2jb3kdcqr49oen.js";
var L, R, z, Ee = e((() => {
        L = M(), we(), c(), R = T(), z = () => {
            "use forget";
            let e = (0, L.c)(2),
                t = `url(${a()?Te:Ce})`,
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
        B = M(), fe(), Ee(), _(), V = t(k()), O(), H = T(), U = E({
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
                p = !s && `opacity-0`,
                m;
            t[0] === p ? m = t[1] : (m = f(`absolute inset-0 z-0 aspect-square object-cover transition-opacity delay-100 duration-300 ease-[cubic-bezier(.24,.1,.42,.91)]`, p), t[0] = p, t[1] = m);
            let h = i ?? void 0,
                g;
            t[2] !== l || t[3] !== c ? (g = () => {
                l(), c()
            }, t[2] = l, t[3] = c, t[4] = g) : g = t[4];
            let _;
            t[5] !== a || t[6] !== c || t[7] !== n || t[8] !== m || t[9] !== h || t[10] !== g || t[11] !== o ? (_ = (0, H.jsx)(`img`, {
                loading: `lazy`,
                decoding: `async`,
                className: m,
                alt: h,
                src: n,
                width: o,
                height: a,
                onLoad: c,
                onError: g
            }), t[5] = a, t[6] = c, t[7] = n, t[8] = m, t[9] = h, t[10] = g, t[11] = o, t[12] = _) : _ = t[12];
            let v;
            t[13] !== i || t[14] !== a || t[15] !== s || t[16] !== u || t[17] !== n || t[18] !== r || t[19] !== o ? (v = r && r !== n && (0, H.jsx)(`img`, {
                loading: `lazy`,
                decoding: `async`,
                alt: i ?? void 0,
                src: r,
                className: f(`absolute inset-0 z-1 h-full w-full object-cover blur-sm transition-opacity delay-100 duration-300 ease-[cubic-bezier(.24,.1,.42,.91)]`, u && !s ? `opacity-100` : `opacity-0`),
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
                d, p, m, h;
            t[2] !== s || t[3] !== o || t[4] !== c || t[5] !== u || t[6] !== e.alt ? (d = u ? null : e.alt ?? o.formatMessage(U.generatedImageAlt), t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (p = f(`group/imagegen-image bg-token-bg-tertiary relative z-0 flex aspect-square items-center justify-center overflow-clip text-xs`), t[11] = p) : p = t[11], m = u ? !0 : void 0, h = !u && c != null && d != null && (0, H.jsx)(`button`, {
                type: `button`,
                className: `absolute inset-0 z-1 rounded focus:outline-none focus-visible:shadow-[inset_0_0_0_4px_rgba(0,0,0,0.35)] focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-inset`,
                "aria-label": o.formatMessage(U.openImage, {
                    imageTitle: d
                }),
                onClick: () => c(s)
            }), t[2] = s, t[3] = o, t[4] = c, t[5] = u, t[6] = e.alt, t[7] = d, t[8] = p, t[9] = m, t[10] = h) : (d = t[7], p = t[8], m = t[9], h = t[10]);
            let g;
            t[12] !== d || t[13] !== n || t[14] !== u || t[15] !== e ? (g = u ? (0, H.jsx)(`div`, {
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
            }), t[12] = d, t[13] = n, t[14] = u, t[15] = e, t[16] = g) : g = t[16];
            let _;
            t[17] !== i || t[18] !== u ? (_ = i && !u && (0, H.jsx)(ce, {
                className: `text-token-text-tertiary absolute z-0 h-12 w-12 text-red-500`
            }), t[17] = i, t[18] = u, t[19] = _) : _ = t[19];
            let v;
            return t[20] !== e.children || t[21] !== p || t[22] !== m || t[23] !== h || t[24] !== g || t[25] !== _ ? (v = (0, H.jsxs)(`div`, {
                className: p,
                "aria-hidden": m,
                children: [h, g, _, e.children]
            }), t[20] = e.children, t[21] = p, t[22] = m, t[23] = h, t[24] = g, t[25] = _, t[26] = v) : v = t[26], v
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
    let i = b(r);
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
    let a;
    return t[3] === i ? a = t[4] : (a = (0, Z.jsx)(K, {
        index: 0,
        isPlaceholder: !0,
        children: (0, Z.jsx)(ke, {
            state: i
        })
    }), t[3] = i, t[4] = a), a
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
            onUnhide: a,
            isHidden: o,
            onlyUseThumbnail: s
        } = e,
        {
            asset_pointer: c,
            conversation_id: l,
            message_id: u,
            url: d,
            width: f,
            height: p,
            prompt: g,
            title: _
        } = n,
        v;
    t[0] !== n || t[1] !== d ? (v = F(n) ?? d, t[0] = n, t[1] = d, t[2] = v) : v = t[2];
    let y = v,
        x = s && y ? y : n.encodings?.md?.path ?? d,
        S;
    t[3] === l ? S = t[4] : (S = l == null ? void 0 : h(l), t[3] = l, t[4] = S);
    let C = S,
        w;
    t[5] === C ? w = t[6] : (w = () => C?.serverId$(), t[5] = C, t[6] = w);
    let T = b(w),
        E;
    t[7] !== n || t[8] !== i ? (E = () => i?.(n), t[7] = n, t[8] = i, t[9] = E) : E = t[9];
    let D = g ?? _ ?? ``,
        O;
    t[10] !== c || t[11] !== C || t[12] !== n || t[13] !== o || t[14] !== u || t[15] !== i || t[16] !== T || t[17] !== d ? (O = !o && C != null && u != null && (0, Z.jsx)(Se, {
        imageAssetPointer: c ?? void 0,
        imageUrl: d,
        canPublishPromptShare: n.generation_type === `image_gen`,
        conversation: C,
        messageId: u,
        alwaysVisible: !1,
        onEditClick: () => i?.(n),
        shareFlowSource: m.CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIBRARY_GRID,
        editButtonAnalytics: {
            surface: re.CHATGPT_CONVERSATION_IMAGE_EDIT_BUTTON_TAP_SURFACE_IMAGE_LIBRARY_THUMBNAIL,
            conversationId: T,
            messageId: u,
            generationId: n.generation_id
        }
    }), t[10] = c, t[11] = C, t[12] = n, t[13] = o, t[14] = u, t[15] = i, t[16] = T, t[17] = d, t[18] = O) : O = t[18];
    let k;
    t[19] !== n || t[20] !== o || t[21] !== a ? (k = o && (0, Z.jsx)(J, {
        onClick: () => a?.(n)
    }), t[19] = n, t[20] = o, t[21] = a, t[22] = k) : k = t[22];
    let A;
    return t[23] !== p || t[24] !== x || t[25] !== r || t[26] !== E || t[27] !== D || t[28] !== O || t[29] !== k || t[30] !== y || t[31] !== f ? (A = (0, Z.jsxs)(K, {
        index: r,
        src: x,
        onClick: E,
        thumbnail: y,
        width: f,
        height: p,
        alt: D,
        children: [O, k]
    }), t[23] = p, t[24] = x, t[25] = r, t[26] = E, t[27] = D, t[28] = O, t[29] = k, t[30] = y, t[31] = f, t[32] = A) : A = t[32], A
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
        src: ee(n),
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
        c = n.message_id ?? n.id,
        l;
    t[0] === c ? l = t[1] : (l = [c], t[0] = c, t[1] = l);
    let u = n.generation_id,
        d;
    t[2] === n ? d = t[3] : (d = P(n), t[2] = n, t[3] = d);
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
        children: a ? (0, Z.jsx)(s, {}) : (0, Z.jsx)(de, {
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
    t[0] === r ? i = t[1] : (i = f(`flex h-9 w-9 items-center justify-center rounded-full bg-black/15 backdrop-blur-md`, r), t[0] = r, t[1] = i);
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
    Y = M(), C(), l(), le(), pe(), d(), ye(), ve(), me(), xe(), oe(), ge(), y(), g(), w(), De(), i(), x(), ae(), v(), _(), X = t(k()), O(), te(), ne(), Z = T(), j(), Pe = u(() => A(() => import(`./e75991f6-k7bp6nlfwcp2wqc2.js`).then(e => e.ImageGenLibraryLightboxNew), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]))), Q = E({
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
                conversation: r,
                className: i,
                hasMoreImages: a,
                generationRequestKeys: c,
                count: l,
                images: u,
                includeArchived: d,
                isHiddenView: m,
                onUnhide: h,
                onOpenLightbox: g,
                onlyUseThumbnail: _,
                isFetchingMore: v,
                onScrollToEnd: y
            } = e,
            x = m !== void 0 && m,
            C = b(S) ? 25 : 10,
            w = l != null && l > u.length ? l - u.length : null,
            T = v || a && !u.length ? Math.min(w ?? C, C) : 0,
            E;
        t[0] !== r || t[1] !== d || t[2] !== x ? (E = e => {
            o.logEventWithStatsig(`chatgpt_web_image_library_lightbox_opened`, `chatgpt_web_image_library_lightbox_opened`);
            let t = n(() => se(r).id);
            p(Pe, {
                initialIndex: e,
                includeArchived: d,
                visibilityFilter: x ? `archived` : `unarchived`,
                conversation: r,
                currentModelId: t
            })
        }, t[0] = r, t[1] = d, t[2] = x, t[3] = E) : E = t[3];
        let D = E,
            O;
        t[4] === i ? O = t[5] : (O = f(`w-full`, i), t[4] = i, t[5] = O);
        let k;
        t[6] === c ? k = t[7] : (k = c?.map(Ne), t[6] = c, t[7] = k);
        let A;
        if (t[8] !== a || t[9] !== u || t[10] !== v || t[11] !== x || t[12] !== g || t[13] !== y || t[14] !== h || t[15] !== _ || t[16] !== D || t[17] !== T) {
            let e;
            t[19] !== x || t[20] !== g || t[21] !== h || t[22] !== _ || t[23] !== D ? (e = (e, t) => (0, Z.jsx)(X.Fragment, {
                children: ie(e) ? (0, Z.jsx)(je, {
                    video: e,
                    onlyUseThumbnail: _,
                    onClick: () => {
                        g && I() ? g(e, t) : D(t)
                    },
                    onUnhide: e => h?.(e.id),
                    isHidden: x
                }) : (0, Z.jsx)(Ae, {
                    image: e,
                    index: t,
                    onlyUseThumbnail: _,
                    onClick: () => {
                        g && I() ? g(e, t) : D(t)
                    },
                    onUnhide: e => h?.(e.id),
                    isHidden: x
                })
            }, e.id), t[19] = x, t[20] = g, t[21] = h, t[22] = _, t[23] = D, t[24] = e) : e = t[24];
            let n;
            t[25] === u.length ? n = t[26] : (n = (e, t) => {
                let n = u.length + t;
                return (0, Z.jsx)(K, {
                    index: n,
                    isPlaceholder: !0
                }, n)
            }, t[25] = u.length, t[26] = n);
            let r;
            t[27] !== a || t[28] !== v || t[29] !== y ? (r = (0, Z.jsx)(be, {
                enabled: a,
                isFetching: v,
                onScrollToEnd: y
            }, `scroll-to-end-after-placeholders`), t[27] = a, t[28] = v, t[29] = y, t[30] = r) : r = t[30], A = u.map(e).concat(Array(T).fill(null).map(n)).concat([r]), t[8] = a, t[9] = u, t[10] = v, t[11] = x, t[12] = g, t[13] = y, t[14] = h, t[15] = _, t[16] = D, t[17] = T, t[18] = A
        } else A = t[18];
        let j;
        t[31] !== k || t[32] !== A ? (j = (0, Z.jsxs)(`div`, {
            className: `grid min-h-60 w-full grid-cols-2 gap-1 max-md:gap-0.5 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6`,
            children: [k, A]
        }), t[31] = k, t[32] = A, t[33] = j) : j = t[33];
        let M;
        t[34] !== a || t[35] !== v ? (M = a && v && (0, Z.jsx)(s, {}), t[34] = a, t[35] = v, t[36] = M) : M = t[36];
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
//# sourceMappingURL=7bd2b610-dml4ohr3oejyrr63.js.map
const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/e75991f6-dqtm3imw7r6vefyn.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-ed29bs6yiwucn7st.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/conversation-small-l6tnsr2xfn2d55kk.js", "assets/30901919-om7b3qf5hp4j9x4l.js", "assets/c470f5ab-d0jxi6yggehv1yt2.js", "assets/0e5afe53-goyw8fd3qndq8rq5.js", "assets/conversation-small-ixfdle4i.css", "assets/8b34dbc2-j8rcexxiltkm8ucr.js", "assets/82782bc9-cz4jkhg31tycbqqf.js", "assets/1cfd0849-imc3cbc63gs1fvh6.js", "assets/53bdf712-j6jjhs4hsamejcpy.js", "assets/44fdb285-cjs33duakpponlqt.js", "assets/540191af-f40s3di33ebqlcih.js", "assets/85557f11-eczxyuulepmtlpfg.js", "assets/e4fe0dae-l4vxeim4wpwl76rs.js", "assets/b9e74381-h0z6cp6y2ptcf91m.js", "assets/62331d8d-m20spqz3ds3ykkn3.js", "assets/971592ec-i8b874oeyva8p46w.js", "assets/4c0f1f8e-go23ccluwcn7b4ji.js", "assets/86793a97-duz229ix011a4fia.js", "assets/183f19de-dn7ogozfmvugr5dv.js", "assets/656cec6a-mzq21kwm5531v1ft.js", "assets/cb56d84a-bbf5qsjbaq20a4nb.js", "assets/image-viewer-b098kzr0.css", "assets/d93502a4-oukzgru4pbce4nmf.js", "assets/a35b0b5c-e5k9d91x5pheb1za.js", "assets/57388dad-pca2dveepb4nieg8.js", "assets/5ff32e89-g8rc7vbw3djww539.js", "assets/43119cb7-t8mq5g5gp7y600uy.js", "assets/b8c3b71b-e1o192flt89ww85p.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A5 as n,
    Az as r,
    Bh as i,
    G5 as a,
    J0 as o,
    K5 as s,
    Qo as c,
    SN as l,
    Vh as u,
    Y0 as d,
    Z0 as f,
    aq as p,
    e2 as m,
    f8 as h,
    fF as g,
    fq as _,
    hnt as v,
    is as y,
    jz as b,
    pnt as x,
    uF as S,
    v5 as C,
    yN as w
} from "./4813494d-ed29bs6yiwucn7st.js";
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
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Hjn as P,
    Wjn as ee,
    d as te,
    kyn as ne,
    xyn as re
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    Km as ie,
    Xy as ae,
    Zy as oe,
    bS as se,
    qm as ce,
    yS as le
} from "./30901919-om7b3qf5hp4j9x4l.js";
import {
    Gg as ue,
    Rl as de,
    Zg as fe,
    ca as pe,
    ma as me,
    zl as he
} from "./8b34dbc2-j8rcexxiltkm8ucr.js";
import {
    n as ge,
    t as _e
} from "./9d67bd7d-lu5u3azq0g06vdug.js";
import {
    a as ve,
    i as ye,
    n as be,
    r as xe,
    t as Se
} from "./ecab41d6-nn0mux71vu84cyi7.js";
import {
    a as Ce,
    i as we,
    n as Te,
    r as Ee,
    t as F
} from "./53bdf712-j6jjhs4hsamejcpy.js";
var I, L, R, De = e((() => {
        I = M(), xe(), w(), L = T(), R = () => {
            "use forget";
            let e = (0, I.c)(2),
                t = `url(${l()?Se:be})`,
                n;
            return e[0] === t ? n = e[1] : (n = (0, L.jsx)(`div`, {
                className: `absolute inset-0 z-0 w-full overflow-hidden opacity-0 group-hover:opacity-100 group-focus:opacity-100`,
                children: (0, L.jsx)(`div`, {
                    className: `absolute inset-0 bg-auto bg-repeat`,
                    style: {
                        backgroundImage: t
                    }
                })
            }), e[0] = t, e[1] = n), n
        }
    })),
    z, B, V, H, U, W, G, Oe = e((() => {
        z = M(), ce(), De(), s(), B = t(k()), O(), V = T(), H = E({
            generatedImageAlt: {
                id: `imageCard.generatedImageAlt`,
                defaultMessage: `ChatGPT generated image.`
            },
            openImage: {
                id: `imageCard.openImage`,
                defaultMessage: `Open image: {imageTitle}`
            }
        }), U = e => {
            "use forget";
            let t = (0, z.c)(27),
                {
                    src: n,
                    thumbnail: r,
                    alt: i,
                    height: o,
                    width: s,
                    isLoaded: c,
                    onLoad: l,
                    onError: u
                } = e,
                [d, f] = (0, B.useState)(!1),
                p = !c && `opacity-0`,
                m;
            t[0] === p ? m = t[1] : (m = a(`absolute inset-0 z-0 aspect-square object-cover transition-opacity delay-100 duration-300 ease-[cubic-bezier(.24,.1,.42,.91)]`, p), t[0] = p, t[1] = m);
            let h = i ?? void 0,
                g;
            t[2] !== u || t[3] !== l ? (g = () => {
                u(), l()
            }, t[2] = u, t[3] = l, t[4] = g) : g = t[4];
            let _;
            t[5] !== o || t[6] !== l || t[7] !== n || t[8] !== m || t[9] !== h || t[10] !== g || t[11] !== s ? (_ = (0, V.jsx)(`img`, {
                loading: `lazy`,
                decoding: `async`,
                className: m,
                alt: h,
                src: n,
                width: s,
                height: o,
                onLoad: l,
                onError: g
            }), t[5] = o, t[6] = l, t[7] = n, t[8] = m, t[9] = h, t[10] = g, t[11] = s, t[12] = _) : _ = t[12];
            let v;
            t[13] !== i || t[14] !== o || t[15] !== c || t[16] !== d || t[17] !== n || t[18] !== r || t[19] !== s ? (v = r && r !== n && (0, V.jsx)(`img`, {
                loading: `lazy`,
                decoding: `async`,
                alt: i ?? void 0,
                src: r,
                className: a(`absolute inset-0 z-1 h-full w-full object-cover blur-sm transition-opacity delay-100 duration-300 ease-[cubic-bezier(.24,.1,.42,.91)]`, d && !c ? `opacity-100` : `opacity-0`),
                width: s,
                height: o,
                onLoad: () => f(!0)
            }), t[13] = i, t[14] = o, t[15] = c, t[16] = d, t[17] = n, t[18] = r, t[19] = s, t[20] = v) : v = t[20];
            let y;
            t[21] === c ? y = t[22] : (y = c && (0, V.jsx)(R, {}), t[21] = c, t[22] = y);
            let b;
            return t[23] !== _ || t[24] !== v || t[25] !== y ? (b = (0, V.jsxs)(V.Fragment, {
                children: [_, v, y]
            }), t[23] = _, t[24] = v, t[25] = y, t[26] = b) : b = t[26], b
        }, W = e => !(`isPlaceholder` in e) || !e.isPlaceholder, G = e => {
            "use forget";
            let t = (0, z.c)(27),
                [n, r] = (0, B.useState)(!1),
                [i, o] = (0, B.useState)(!1),
                s = N(),
                {
                    index: c,
                    onClick: l
                } = e,
                u;
            t[0] === e ? u = t[1] : (u = W(e), t[0] = e, t[1] = u);
            let d = !u,
                f, p, m, h;
            t[2] !== c || t[3] !== s || t[4] !== l || t[5] !== d || t[6] !== e.alt ? (f = d ? null : e.alt ?? s.formatMessage(H.generatedImageAlt), t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (p = a(`group/imagegen-image bg-token-bg-tertiary relative z-0 flex aspect-square items-center justify-center overflow-clip text-xs`), t[11] = p) : p = t[11], m = d ? !0 : void 0, h = !d && l != null && f != null && (0, V.jsx)(`button`, {
                type: `button`,
                className: `absolute inset-0 z-1 rounded focus:outline-none focus-visible:shadow-[inset_0_0_0_4px_rgba(0,0,0,0.35)] focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-inset`,
                "aria-label": s.formatMessage(H.openImage, {
                    imageTitle: f
                }),
                onClick: () => l(c)
            }), t[2] = c, t[3] = s, t[4] = l, t[5] = d, t[6] = e.alt, t[7] = f, t[8] = p, t[9] = m, t[10] = h) : (f = t[7], p = t[8], m = t[9], h = t[10]);
            let g;
            t[12] !== f || t[13] !== n || t[14] !== d || t[15] !== e ? (g = d ? (0, V.jsx)(`div`, {
                className: `absolute inset-0 flex h-full w-full items-center justify-center`,
                children: (0, V.jsx)(`div`, {
                    className: `bg-token-bg-tertiary h-full w-full animate-pulse`
                })
            }) : (0, V.jsxs)(V.Fragment, {
                children: [!n && (0, V.jsx)(`div`, {
                    className: `bg-token-bg-tertiary absolute inset-0 z-0 motion-safe:animate-pulse`
                }), (0, V.jsx)(U, {
                    ...e,
                    alt: f,
                    isLoaded: n,
                    onLoad: () => r(!0),
                    onError: () => o(!0)
                })]
            }), t[12] = f, t[13] = n, t[14] = d, t[15] = e, t[16] = g) : g = t[16];
            let _;
            t[17] !== i || t[18] !== d ? (_ = i && !d && (0, V.jsx)(ie, {
                className: `text-token-text-tertiary absolute z-0 h-12 w-12 text-red-500`
            }), t[17] = i, t[18] = d, t[19] = _) : _ = t[19];
            let v;
            return t[20] !== e.children || t[21] !== p || t[22] !== m || t[23] !== h || t[24] !== g || t[25] !== _ ? (v = (0, V.jsxs)(`div`, {
                className: p,
                "aria-hidden": m,
                children: [h, g, _, e.children]
            }), t[20] = e.children, t[21] = p, t[22] = m, t[23] = h, t[24] = g, t[25] = _, t[26] = v) : v = t[26], v
        }
    }));

function ke(e) {
    "use forget";
    let t = (0, J.c)(5),
        {
            requestKey: r
        } = e,
        i;
    t[0] === r ? i = t[1] : (i = () => de(r)?.state$(), t[0] = r, t[1] = i);
    let a = n(i);
    if (a == null) {
        let e;
        return t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, X.jsx)(G, {
            index: 0,
            isPlaceholder: !0,
            children: (0, X.jsx)(D, {
                id: `EmcVXU`,
                defaultMessage: `Loading`
            })
        }), t[2] = e) : e = t[2], e
    }
    let o;
    return t[3] === a ? o = t[4] : (o = (0, X.jsx)(G, {
        index: 0,
        isPlaceholder: !0,
        children: (0, X.jsx)(Ae, {
            state: a
        })
    }), t[3] = a, t[4] = o), o
}

function Ae(e) {
    "use forget";
    let t = (0, J.c)(7),
        {
            state: n
        } = e,
        r;
    bb0: {
        switch (n.status) {
            case `created`: {
                let e;
                t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, X.jsx)(D, {
                    id: `R7m5jN`,
                    defaultMessage: `Created`
                }), t[0] = e) : e = t[0], r = e;
                break bb0
            }
            case `waiting-on-files`: {
                let e;
                t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, X.jsx)(D, {
                    id: `rXf1Xk`,
                    defaultMessage: `Waiting on files`
                }), t[1] = e) : e = t[1], r = e;
                break bb0
            }
            case `generating`: {
                let e;
                t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, X.jsx)(D, {
                    id: `iPuM49`,
                    defaultMessage: `Generating`
                }), t[2] = e) : e = t[2], r = e;
                break bb0
            }
            case `failed`: {
                let e;
                t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, X.jsx)(D, {
                    id: `xdzLSJ`,
                    defaultMessage: `Failed`
                }), t[3] = e) : e = t[3], r = e;
                break bb0
            }
            case `succeeded`: {
                let e;
                t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, X.jsx)(D, {
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
    return t[5] === i ? a = t[6] : (a = (0, X.jsx)(`div`, {
        className: `text-token-text-secondary flex h-full items-center justify-center text-sm font-medium`,
        children: i
    }), t[5] = i, t[6] = a), a
}

function je(e) {
    "use forget";
    let t = (0, J.c)(33),
        {
            image: r,
            index: i,
            onClick: a,
            onUnhide: o,
            isHidden: s,
            onlyUseThumbnail: l
        } = e,
        {
            asset_pointer: u,
            conversation_id: d,
            message_id: f,
            url: p,
            width: m,
            height: h,
            prompt: g,
            title: _
        } = r,
        v;
    t[0] !== r || t[1] !== p ? (v = F(r) ?? p, t[0] = r, t[1] = p, t[2] = v) : v = t[2];
    let y = v,
        b = l && y ? y : r.encodings?.md?.path ?? p,
        x;
    t[3] === d ? x = t[4] : (x = d == null ? void 0 : S(d), t[3] = d, t[4] = x);
    let C = x,
        w;
    t[5] === C ? w = t[6] : (w = () => C?.serverId$(), t[5] = C, t[6] = w);
    let T = n(w),
        E;
    t[7] !== r || t[8] !== a ? (E = () => a?.(r), t[7] = r, t[8] = a, t[9] = E) : E = t[9];
    let D = g ?? _ ?? ``,
        O;
    t[10] !== u || t[11] !== C || t[12] !== r || t[13] !== s || t[14] !== f || t[15] !== a || t[16] !== T || t[17] !== p ? (O = !s && C != null && f != null && (0, X.jsx)(ye, {
        imageAssetPointer: u ?? void 0,
        imageUrl: p,
        canPublishPromptShare: r.generation_type === `image_gen`,
        conversation: C,
        messageId: f,
        alwaysVisible: !1,
        onEditClick: () => a?.(r),
        shareFlowSource: c.CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIBRARY_GRID,
        editButtonAnalytics: {
            surface: P.CHATGPT_CONVERSATION_IMAGE_EDIT_BUTTON_TAP_SURFACE_IMAGE_LIBRARY_THUMBNAIL,
            conversationId: T,
            messageId: f,
            generationId: r.generation_id
        }
    }), t[10] = u, t[11] = C, t[12] = r, t[13] = s, t[14] = f, t[15] = a, t[16] = T, t[17] = p, t[18] = O) : O = t[18];
    let k;
    t[19] !== r || t[20] !== s || t[21] !== o ? (k = s && (0, X.jsx)(q, {
        onClick: () => o?.(r)
    }), t[19] = r, t[20] = s, t[21] = o, t[22] = k) : k = t[22];
    let A;
    return t[23] !== h || t[24] !== b || t[25] !== i || t[26] !== E || t[27] !== D || t[28] !== O || t[29] !== k || t[30] !== y || t[31] !== m ? (A = (0, X.jsxs)(G, {
        index: i,
        src: b,
        onClick: E,
        thumbnail: y,
        width: m,
        height: h,
        alt: D,
        children: [O, k]
    }), t[23] = h, t[24] = b, t[25] = i, t[26] = E, t[27] = D, t[28] = O, t[29] = k, t[30] = y, t[31] = m, t[32] = A) : A = t[32], A
}

function Me(e) {
    "use forget";
    let t = (0, J.c)(28),
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
    t[2] !== l || t[3] !== r || t[4] !== n ? (f = n.prompt ?? n.title ?? l.formatMessage(Q.generatedVideoAlt), u = `group/imagegen-image bg-tertiary relative z-0 flex aspect-square items-center justify-center overflow-clip text-xs`, d = r != null && (0, X.jsx)(`button`, {
        type: `button`,
        className: `absolute inset-0 z-1 rounded focus:outline-none focus-visible:shadow-[inset_0_0_0_4px_rgba(0,0,0,0.35)] focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-inset`,
        "aria-label": l.formatMessage(Q.openVideo, {
            videoTitle: f
        }),
        onClick: () => r(n)
    }), t[2] = l, t[3] = r, t[4] = n, t[5] = u, t[6] = d, t[7] = f) : (u = t[5], d = t[6], f = t[7]);
    let p;
    t[8] !== o || t[9] !== c || t[10] !== n || t[11] !== f ? (p = o && c ? (0, X.jsx)(`img`, {
        src: c,
        alt: f,
        className: `absolute inset-0 h-full w-full object-cover`,
        loading: `lazy`,
        decoding: `async`
    }) : (0, X.jsx)(`video`, {
        className: `absolute inset-0 h-full w-full object-cover`,
        src: Te(n),
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
    t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (m = (0, X.jsx)(`div`, {
        className: `pointer-events-none absolute inset-0 z-10 bg-black/20`
    }), t[13] = m) : m = t[13];
    let h;
    t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (h = (0, X.jsx)(`div`, {
        className: `pointer-events-none absolute end-3 top-3 z-20 opacity-0 transition-opacity duration-75 ease-out group-focus-within/imagegen-image:opacity-100 group-hover/imagegen-image:opacity-100`,
        children: (0, X.jsx)(`div`, {
            className: `flex h-10 w-10 items-center justify-center text-white`,
            children: (0, X.jsx)(K, {
                children: (0, X.jsx)(oe, {
                    style: {
                        filter: `drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15))`
                    },
                    className: `icon fill-current`
                })
            })
        })
    }), t[14] = h) : h = t[14];
    let g;
    t[15] !== a || t[16] !== n ? (g = !a && n.conversation_id != null && (0, X.jsx)(Ne, {
        video: n,
        conversation: S(n.conversation_id)
    }), t[15] = a, t[16] = n, t[17] = g) : g = t[17];
    let _;
    t[18] !== a || t[19] !== i || t[20] !== n ? (_ = a && (0, X.jsx)(q, {
        onClick: () => i?.(n)
    }), t[18] = a, t[19] = i, t[20] = n, t[21] = _) : _ = t[21];
    let v;
    return t[22] !== u || t[23] !== d || t[24] !== p || t[25] !== g || t[26] !== _ ? (v = (0, X.jsxs)(`div`, {
        className: u,
        children: [d, p, m, h, g, _]
    }), t[22] = u, t[23] = d, t[24] = p, t[25] = g, t[26] = _, t[27] = v) : v = t[27], v
}

function Ne(e) {
    "use forget";
    let t = (0, J.c)(20),
        {
            video: n,
            conversation: i
        } = e,
        a = N(),
        [o, s] = (0, Y.useState)(!1),
        l = n.message_id ?? n.id,
        u;
    t[0] === l ? u = t[1] : (u = [l], t[0] = l, t[1] = u);
    let d = n.generation_id,
        f;
    t[2] === n ? f = t[3] : (f = Ee(n), t[2] = n, t[3] = f);
    let p;
    t[4] !== i || t[5] !== u || t[6] !== f || t[7] !== n.generation_id ? (p = {
        conversation: i,
        messageSliceIds: u,
        soraGenerationId: d,
        soraPreviewUrl: f,
        shareFlowSource: c.CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIBRARY_GRID
    }, t[4] = i, t[5] = u, t[6] = f, t[7] = n.generation_id, t[8] = p) : p = t[8];
    let m = me(p),
        h;
    t[9] === m ? h = t[10] : (h = function(e) {
        e.stopPropagation(), s(!0), m().finally(() => {
            s(!1)
        })
    }, t[9] = m, t[10] = h);
    let g = h,
        _;
    t[11] === a ? _ = t[12] : (_ = a.formatMessage(Q.shareVideo), t[11] = a, t[12] = _);
    let v;
    t[13] === o ? v = t[14] : (v = (0, X.jsx)(K, {
        className: `group-hover:bg-black/30 group-focus:bg-black/30`,
        children: o ? (0, X.jsx)(r, {}) : (0, X.jsx)(se, {
            style: {
                filter: `drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15))`
            },
            className: `icon fill-current`
        })
    }), t[13] = o, t[14] = v);
    let y;
    return t[15] !== g || t[16] !== o || t[17] !== _ || t[18] !== v ? (y = (0, X.jsx)(`div`, {
        className: `pointer-events-none absolute inset-x-0 bottom-0 z-20 flex items-end justify-end p-3`,
        children: (0, X.jsx)(`button`, {
            className: `group pointer-events-auto z-11 flex h-10 w-10 items-center justify-center text-sm font-medium text-white`,
            onClick: g,
            "aria-label": _,
            disabled: o,
            type: `button`,
            children: v
        })
    }), t[15] = g, t[16] = o, t[17] = _, t[18] = v, t[19] = y) : y = t[19], y
}

function K(e) {
    "use forget";
    let t = (0, J.c)(5),
        {
            children: n,
            className: r
        } = e,
        i;
    t[0] === r ? i = t[1] : (i = a(`flex h-9 w-9 items-center justify-center rounded-full bg-black/15 backdrop-blur-md`, r), t[0] = r, t[1] = i);
    let o;
    return t[2] !== n || t[3] !== i ? (o = (0, X.jsx)(`span`, {
        className: i,
        children: n
    }), t[2] = n, t[3] = i, t[4] = o) : o = t[4], o
}

function q(e) {
    "use forget";
    let t = (0, J.c)(8),
        {
            onClick: n
        } = e,
        r = N(),
        a;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, X.jsx)(`div`, {
        className: `pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity group-hover/imagegen-image:opacity-100`,
        children: (0, X.jsx)(`div`, {
            className: `absolute inset-x-0 bottom-0 h-20 bg-linear-to-b from-transparent to-black/30`
        })
    }), t[0] = a) : a = t[0];
    let o;
    t[1] === r ? o = t[2] : (o = r.formatMessage({
        id: `G+OPvx`,
        defaultMessage: `Unhide media`
    }), t[1] = r, t[2] = o);
    let s;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, X.jsx)(i, {
        className: `h-4 w-4`
    }), t[3] = s) : s = t[3];
    let c;
    t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, X.jsx)(`span`, {
        className: `max-md:hidden`,
        children: (0, X.jsx)(D, {
            id: `mSvNO/`,
            defaultMessage: `Unhide`
        })
    }), t[4] = c) : c = t[4];
    let l;
    return t[5] !== n || t[6] !== o ? (l = (0, X.jsxs)(X.Fragment, {
        children: [a, (0, X.jsx)(`div`, {
            className: `absolute end-1 bottom-1 z-20 opacity-0 transition-opacity group-hover/imagegen-image:opacity-100`,
            children: (0, X.jsxs)(`button`, {
                className: `z-11 flex h-10 items-center gap-1 rounded-xl px-2 text-sm font-medium text-white hover:bg-white/15 hover:backdrop-blur-md focus:bg-white/15 focus:backdrop-blur-md`,
                onClick: n,
                "aria-label": o,
                type: `button`,
                children: [s, c]
            })
        })]
    }), t[5] = n, t[6] = o, t[7] = l) : l = t[7], l
}

function Pe(e) {
    return (0, X.jsx)(ke, {
        requestKey: e
    }, e)
}
var J, Y, X, Z, Q, $, Fe = e((() => {
    J = M(), g(), u(), ae(), le(), f(), ge(), he(), fe(), ve(), ne(), pe(), y(), h(), b(), Oe(), v(), p(), ee(), d(), s(), Y = t(k()), O(), we(), te(), X = T(), j(), Z = o(() => A(() => import(`./e75991f6-dqtm3imw7r6vefyn.js`).then(e => e.ImageGenLibraryLightboxNew), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]))), Q = E({
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
        let t = (0, J.c)(43),
            {
                conversation: i,
                className: o,
                hasMoreImages: s,
                generationRequestKeys: c,
                count: l,
                images: u,
                includeArchived: d,
                isHiddenView: f,
                onUnhide: p,
                onOpenLightbox: h,
                onlyUseThumbnail: g,
                isFetchingMore: v,
                onScrollToEnd: y
            } = e,
            b = f !== void 0 && f,
            S = n(_) ? 25 : 10,
            w = l != null && l > u.length ? l - u.length : null,
            T = v || s && !u.length ? Math.min(w ?? S, S) : 0,
            E;
        t[0] !== i || t[1] !== d || t[2] !== b ? (E = e => {
            x.logEventWithStatsig(`chatgpt_web_image_library_lightbox_opened`, `chatgpt_web_image_library_lightbox_opened`);
            let t = C(() => re(i).id);
            m(Z, {
                initialIndex: e,
                includeArchived: d,
                visibilityFilter: b ? `archived` : `unarchived`,
                conversation: i,
                currentModelId: t
            })
        }, t[0] = i, t[1] = d, t[2] = b, t[3] = E) : E = t[3];
        let D = E,
            O;
        t[4] === o ? O = t[5] : (O = a(`w-full`, o), t[4] = o, t[5] = O);
        let k;
        t[6] === c ? k = t[7] : (k = c?.map(Pe), t[6] = c, t[7] = k);
        let A;
        if (t[8] !== s || t[9] !== u || t[10] !== v || t[11] !== b || t[12] !== h || t[13] !== y || t[14] !== p || t[15] !== g || t[16] !== D || t[17] !== T) {
            let e;
            t[19] !== b || t[20] !== h || t[21] !== p || t[22] !== g || t[23] !== D ? (e = (e, t) => (0, X.jsx)(Y.Fragment, {
                children: Ce(e) ? (0, X.jsx)(Me, {
                    video: e,
                    onlyUseThumbnail: g,
                    onClick: () => {
                        h && ue() ? h(e, t) : D(t)
                    },
                    onUnhide: e => p?.(e.id),
                    isHidden: b
                }) : (0, X.jsx)(je, {
                    image: e,
                    index: t,
                    onlyUseThumbnail: g,
                    onClick: () => {
                        h && ue() ? h(e, t) : D(t)
                    },
                    onUnhide: e => p?.(e.id),
                    isHidden: b
                })
            }, e.id), t[19] = b, t[20] = h, t[21] = p, t[22] = g, t[23] = D, t[24] = e) : e = t[24];
            let n;
            t[25] === u.length ? n = t[26] : (n = (e, t) => {
                let n = u.length + t;
                return (0, X.jsx)(G, {
                    index: n,
                    isPlaceholder: !0
                }, n)
            }, t[25] = u.length, t[26] = n);
            let r;
            t[27] !== s || t[28] !== v || t[29] !== y ? (r = (0, X.jsx)(_e, {
                enabled: s,
                isFetching: v,
                onScrollToEnd: y
            }, `scroll-to-end-after-placeholders`), t[27] = s, t[28] = v, t[29] = y, t[30] = r) : r = t[30], A = u.map(e).concat(Array(T).fill(null).map(n)).concat([r]), t[8] = s, t[9] = u, t[10] = v, t[11] = b, t[12] = h, t[13] = y, t[14] = p, t[15] = g, t[16] = D, t[17] = T, t[18] = A
        } else A = t[18];
        let j;
        t[31] !== k || t[32] !== A ? (j = (0, X.jsxs)(`div`, {
            className: `grid min-h-60 w-full grid-cols-2 gap-1 max-md:gap-0.5 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6`,
            children: [k, A]
        }), t[31] = k, t[32] = A, t[33] = j) : j = t[33];
        let M;
        t[34] !== s || t[35] !== v ? (M = s && v && (0, X.jsx)(r, {}), t[34] = s, t[35] = v, t[36] = M) : M = t[36];
        let N;
        t[37] === M ? N = t[38] : (N = (0, X.jsx)(`div`, {
            className: `flex h-8 items-center justify-center`,
            children: M
        }), t[37] = M, t[38] = N);
        let P;
        return t[39] !== O || t[40] !== j || t[41] !== N ? (P = (0, X.jsxs)(`div`, {
            className: O,
            children: [j, N]
        }), t[39] = O, t[40] = j, t[41] = N, t[42] = P) : P = t[42], P
    }
}));
export {
    Fe as n, $ as t
};
//# sourceMappingURL=7bd2b610-nigr4jyftrr8nwo8.js.map
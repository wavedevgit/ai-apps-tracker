const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/e75991f6-fsil96ka2ukhv4gh.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-qsuygr73qjc6rh65.js", "assets/2340486e-komxp8tzs51ny4jj.js", "assets/root-lelxp0l2.css", "assets/conversation-small-cawdu7il3ha6y70c.js", "assets/30901919-jory365vq6ym5crx.js", "assets/c470f5ab-in0lllrdrzeo67gs.js", "assets/0e5afe53-f9gmgfmgrr83ziw3.js", "assets/conversation-small-czggvj2v.css", "assets/8b34dbc2-d4icgkio4i3wfm6q.js", "assets/82782bc9-jj605vonxg0iyc7p.js", "assets/1cfd0849-l5b6w0kzzesseaor.js", "assets/53bdf712-j6jjhs4hsamejcpy.js", "assets/44fdb285-hlhiqenmwucozsu1.js", "assets/540191af-c6naemi04dm8qpta.js", "assets/85557f11-dnt6ja33f52urano.js", "assets/e4fe0dae-l4vxeim4wpwl76rs.js", "assets/b9e74381-h0z6cp6y2ptcf91m.js", "assets/62331d8d-jc6iggd99g5rh20z.js", "assets/971592ec-ksgvmkhcivdm3kvx.js", "assets/4c0f1f8e-lcllh9m5rwe6l2ew.js", "assets/86793a97-l54v6wfhgq5jzt0p.js", "assets/183f19de-m5vq8wwory73ezg8.js", "assets/656cec6a-cm0b8tz5w3da1g3f.js", "assets/cb56d84a-ks4edokquh2w32m0.js", "assets/image-viewer-b098kzr0.css", "assets/d93502a4-kj1x7kp7gcf3zcfp.js", "assets/a35b0b5c-efi930yqi8pb74u5.js", "assets/57388dad-k3hgu8nn43udhwrz.js", "assets/5ff32e89-jxcmm58d3ew9evkn.js", "assets/43119cb7-cdfoc529n4h7i86q.js", "assets/b8c3b71b-mc7f8lmnab3ze16f.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Az as n,
    Bh as r,
    J0 as i,
    J5 as a,
    M5 as o,
    Qo as s,
    SN as c,
    Vh as l,
    Y0 as u,
    Z0 as d,
    _nt as f,
    aq as p,
    b5 as m,
    e2 as h,
    fF as g,
    fq as _,
    hnt as v,
    is as y,
    jz as b,
    m8 as x,
    q5 as S,
    uF as C,
    yN as w
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as T,
    Hn as E,
    Pn as D,
    Rn as O,
    Tn as k,
    Vn as A,
    ln as j,
    un as M,
    zn as N
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    Ayn as P,
    Gjn as ee,
    Syn as te,
    Ujn as ne,
    d as re
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    Km as ie,
    Xy as ae,
    Zy as oe,
    bS as se,
    qm as ce,
    yS as le
} from "./30901919-jory365vq6ym5crx.js";
import {
    Gg as ue,
    Rl as de,
    Zg as fe,
    ca as pe,
    ma as me,
    zl as he
} from "./8b34dbc2-d4icgkio4i3wfm6q.js";
import {
    n as ge,
    t as _e
} from "./9d67bd7d-g35lcwfg8qzaghr0.js";
import {
    a as ve,
    i as ye,
    n as be,
    r as xe,
    t as Se
} from "./ecab41d6-dyipgdljgtodecqk.js";
import {
    a as Ce,
    i as we,
    n as Te,
    r as Ee,
    t as F
} from "./53bdf712-j6jjhs4hsamejcpy.js";
var I, L, R, De = e((() => {
        I = k(), xe(), w(), L = A(), R = () => {
            "use forget";
            let e = (0, I.c)(2),
                t = `url(${c()?Se:be})`,
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
        z = k(), ce(), De(), a(), B = t(E()), N(), V = A(), H = O({
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
                    height: a,
                    width: o,
                    isLoaded: s,
                    onLoad: c,
                    onError: l
                } = e,
                [u, d] = (0, B.useState)(!1),
                f = !s && `opacity-0`,
                p;
            t[0] === f ? p = t[1] : (p = S(`absolute inset-0 z-0 aspect-square object-cover transition-opacity delay-100 duration-300 ease-[cubic-bezier(.24,.1,.42,.91)]`, f), t[0] = f, t[1] = p);
            let m = i ?? void 0,
                h;
            t[2] !== l || t[3] !== c ? (h = () => {
                l(), c()
            }, t[2] = l, t[3] = c, t[4] = h) : h = t[4];
            let g;
            t[5] !== a || t[6] !== c || t[7] !== n || t[8] !== p || t[9] !== m || t[10] !== h || t[11] !== o ? (g = (0, V.jsx)(`img`, {
                loading: `lazy`,
                decoding: `async`,
                className: p,
                alt: m,
                src: n,
                width: o,
                height: a,
                onLoad: c,
                onError: h
            }), t[5] = a, t[6] = c, t[7] = n, t[8] = p, t[9] = m, t[10] = h, t[11] = o, t[12] = g) : g = t[12];
            let _;
            t[13] !== i || t[14] !== a || t[15] !== s || t[16] !== u || t[17] !== n || t[18] !== r || t[19] !== o ? (_ = r && r !== n && (0, V.jsx)(`img`, {
                loading: `lazy`,
                decoding: `async`,
                alt: i ?? void 0,
                src: r,
                className: S(`absolute inset-0 z-1 h-full w-full object-cover blur-sm transition-opacity delay-100 duration-300 ease-[cubic-bezier(.24,.1,.42,.91)]`, u && !s ? `opacity-100` : `opacity-0`),
                width: o,
                height: a,
                onLoad: () => d(!0)
            }), t[13] = i, t[14] = a, t[15] = s, t[16] = u, t[17] = n, t[18] = r, t[19] = o, t[20] = _) : _ = t[20];
            let v;
            t[21] === s ? v = t[22] : (v = s && (0, V.jsx)(R, {}), t[21] = s, t[22] = v);
            let y;
            return t[23] !== g || t[24] !== _ || t[25] !== v ? (y = (0, V.jsxs)(V.Fragment, {
                children: [g, _, v]
            }), t[23] = g, t[24] = _, t[25] = v, t[26] = y) : y = t[26], y
        }, W = e => !(`isPlaceholder` in e) || !e.isPlaceholder, G = e => {
            "use forget";
            let t = (0, z.c)(27),
                [n, r] = (0, B.useState)(!1),
                [i, a] = (0, B.useState)(!1),
                o = T(),
                {
                    index: s,
                    onClick: c
                } = e,
                l;
            t[0] === e ? l = t[1] : (l = W(e), t[0] = e, t[1] = l);
            let u = !l,
                d, f, p, m;
            t[2] !== s || t[3] !== o || t[4] !== c || t[5] !== u || t[6] !== e.alt ? (d = u ? null : e.alt ?? o.formatMessage(H.generatedImageAlt), t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (f = S(`group/imagegen-image bg-token-bg-tertiary relative z-0 flex aspect-square items-center justify-center overflow-clip text-xs`), t[11] = f) : f = t[11], p = u ? !0 : void 0, m = !u && c != null && d != null && (0, V.jsx)(`button`, {
                type: `button`,
                className: `absolute inset-0 z-1 rounded focus:outline-none focus-visible:shadow-[inset_0_0_0_4px_rgba(0,0,0,0.35)] focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-inset`,
                "aria-label": o.formatMessage(H.openImage, {
                    imageTitle: d
                }),
                onClick: () => c(s)
            }), t[2] = s, t[3] = o, t[4] = c, t[5] = u, t[6] = e.alt, t[7] = d, t[8] = f, t[9] = p, t[10] = m) : (d = t[7], f = t[8], p = t[9], m = t[10]);
            let h;
            t[12] !== d || t[13] !== n || t[14] !== u || t[15] !== e ? (h = u ? (0, V.jsx)(`div`, {
                className: `absolute inset-0 flex h-full w-full items-center justify-center`,
                children: (0, V.jsx)(`div`, {
                    className: `bg-token-bg-tertiary h-full w-full animate-pulse`
                })
            }) : (0, V.jsxs)(V.Fragment, {
                children: [!n && (0, V.jsx)(`div`, {
                    className: `bg-token-bg-tertiary absolute inset-0 z-0 motion-safe:animate-pulse`
                }), (0, V.jsx)(U, {
                    ...e,
                    alt: d,
                    isLoaded: n,
                    onLoad: () => r(!0),
                    onError: () => a(!0)
                })]
            }), t[12] = d, t[13] = n, t[14] = u, t[15] = e, t[16] = h) : h = t[16];
            let g;
            t[17] !== i || t[18] !== u ? (g = i && !u && (0, V.jsx)(ie, {
                className: `text-token-text-tertiary absolute z-0 h-12 w-12 text-red-500`
            }), t[17] = i, t[18] = u, t[19] = g) : g = t[19];
            let _;
            return t[20] !== e.children || t[21] !== f || t[22] !== p || t[23] !== m || t[24] !== h || t[25] !== g ? (_ = (0, V.jsxs)(`div`, {
                className: f,
                "aria-hidden": p,
                children: [m, h, g, e.children]
            }), t[20] = e.children, t[21] = f, t[22] = p, t[23] = m, t[24] = h, t[25] = g, t[26] = _) : _ = t[26], _
        }
    }));

function ke(e) {
    "use forget";
    let t = (0, J.c)(5),
        {
            requestKey: n
        } = e,
        r;
    t[0] === n ? r = t[1] : (r = () => de(n)?.state$(), t[0] = n, t[1] = r);
    let i = o(r);
    if (i == null) {
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
    let a;
    return t[3] === i ? a = t[4] : (a = (0, X.jsx)(G, {
        index: 0,
        isPlaceholder: !0,
        children: (0, X.jsx)(Ae, {
            state: i
        })
    }), t[3] = i, t[4] = a), a
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
            image: n,
            index: r,
            onClick: i,
            onUnhide: a,
            isHidden: c,
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
        } = n,
        v;
    t[0] !== n || t[1] !== p ? (v = F(n) ?? p, t[0] = n, t[1] = p, t[2] = v) : v = t[2];
    let y = v,
        b = l && y ? y : n.encodings?.md?.path ?? p,
        x;
    t[3] === d ? x = t[4] : (x = d == null ? void 0 : C(d), t[3] = d, t[4] = x);
    let S = x,
        w;
    t[5] === S ? w = t[6] : (w = () => S?.serverId$(), t[5] = S, t[6] = w);
    let T = o(w),
        E;
    t[7] !== n || t[8] !== i ? (E = () => i?.(n), t[7] = n, t[8] = i, t[9] = E) : E = t[9];
    let D = g ?? _ ?? ``,
        O;
    t[10] !== u || t[11] !== S || t[12] !== n || t[13] !== c || t[14] !== f || t[15] !== i || t[16] !== T || t[17] !== p ? (O = !c && S != null && f != null && (0, X.jsx)(ye, {
        imageAssetPointer: u ?? void 0,
        imageUrl: p,
        canPublishPromptShare: n.generation_type === `image_gen`,
        conversation: S,
        messageId: f,
        alwaysVisible: !1,
        onEditClick: () => i?.(n),
        shareFlowSource: s.CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIBRARY_GRID,
        editButtonAnalytics: {
            surface: ne.CHATGPT_CONVERSATION_IMAGE_EDIT_BUTTON_TAP_SURFACE_IMAGE_LIBRARY_THUMBNAIL,
            conversationId: T,
            messageId: f,
            generationId: n.generation_id
        }
    }), t[10] = u, t[11] = S, t[12] = n, t[13] = c, t[14] = f, t[15] = i, t[16] = T, t[17] = p, t[18] = O) : O = t[18];
    let k;
    t[19] !== n || t[20] !== c || t[21] !== a ? (k = c && (0, X.jsx)(q, {
        onClick: () => a?.(n)
    }), t[19] = n, t[20] = c, t[21] = a, t[22] = k) : k = t[22];
    let A;
    return t[23] !== h || t[24] !== b || t[25] !== r || t[26] !== E || t[27] !== D || t[28] !== O || t[29] !== k || t[30] !== y || t[31] !== m ? (A = (0, X.jsxs)(G, {
        index: r,
        src: b,
        onClick: E,
        thumbnail: y,
        width: m,
        height: h,
        alt: D,
        children: [O, k]
    }), t[23] = h, t[24] = b, t[25] = r, t[26] = E, t[27] = D, t[28] = O, t[29] = k, t[30] = y, t[31] = m, t[32] = A) : A = t[32], A
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
        l = T(),
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
        conversation: C(n.conversation_id)
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
            video: r,
            conversation: i
        } = e,
        a = T(),
        [o, c] = (0, Y.useState)(!1),
        l = r.message_id ?? r.id,
        u;
    t[0] === l ? u = t[1] : (u = [l], t[0] = l, t[1] = u);
    let d = r.generation_id,
        f;
    t[2] === r ? f = t[3] : (f = Ee(r), t[2] = r, t[3] = f);
    let p;
    t[4] !== i || t[5] !== u || t[6] !== f || t[7] !== r.generation_id ? (p = {
        conversation: i,
        messageSliceIds: u,
        soraGenerationId: d,
        soraPreviewUrl: f,
        shareFlowSource: s.CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIBRARY_GRID
    }, t[4] = i, t[5] = u, t[6] = f, t[7] = r.generation_id, t[8] = p) : p = t[8];
    let m = me(p),
        h;
    t[9] === m ? h = t[10] : (h = function(e) {
        e.stopPropagation(), c(!0), m().finally(() => {
            c(!1)
        })
    }, t[9] = m, t[10] = h);
    let g = h,
        _;
    t[11] === a ? _ = t[12] : (_ = a.formatMessage(Q.shareVideo), t[11] = a, t[12] = _);
    let v;
    t[13] === o ? v = t[14] : (v = (0, X.jsx)(K, {
        className: `group-hover:bg-black/30 group-focus:bg-black/30`,
        children: o ? (0, X.jsx)(n, {}) : (0, X.jsx)(se, {
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
    t[0] === r ? i = t[1] : (i = S(`flex h-9 w-9 items-center justify-center rounded-full bg-black/15 backdrop-blur-md`, r), t[0] = r, t[1] = i);
    let a;
    return t[2] !== n || t[3] !== i ? (a = (0, X.jsx)(`span`, {
        className: i,
        children: n
    }), t[2] = n, t[3] = i, t[4] = a) : a = t[4], a
}

function q(e) {
    "use forget";
    let t = (0, J.c)(8),
        {
            onClick: n
        } = e,
        i = T(),
        a;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, X.jsx)(`div`, {
        className: `pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity group-hover/imagegen-image:opacity-100`,
        children: (0, X.jsx)(`div`, {
            className: `absolute inset-x-0 bottom-0 h-20 bg-linear-to-b from-transparent to-black/30`
        })
    }), t[0] = a) : a = t[0];
    let o;
    t[1] === i ? o = t[2] : (o = i.formatMessage({
        id: `G+OPvx`,
        defaultMessage: `Unhide media`
    }), t[1] = i, t[2] = o);
    let s;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, X.jsx)(r, {
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
    J = k(), g(), l(), ae(), le(), d(), ge(), he(), fe(), ve(), P(), pe(), y(), x(), b(), Oe(), f(), p(), ee(), u(), a(), Y = t(E()), N(), we(), re(), X = A(), M(), Z = i(() => j(() => import(`./e75991f6-fsil96ka2ukhv4gh.js`).then(e => e.ImageGenLibraryLightboxNew), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]))), Q = O({
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
                conversation: r,
                className: i,
                hasMoreImages: a,
                generationRequestKeys: s,
                count: c,
                images: l,
                includeArchived: u,
                isHiddenView: d,
                onUnhide: f,
                onOpenLightbox: p,
                onlyUseThumbnail: g,
                isFetchingMore: y,
                onScrollToEnd: b
            } = e,
            x = d !== void 0 && d,
            C = o(_) ? 25 : 10,
            w = c != null && c > l.length ? c - l.length : null,
            T = y || a && !l.length ? Math.min(w ?? C, C) : 0,
            E;
        t[0] !== r || t[1] !== u || t[2] !== x ? (E = e => {
            v.logEventWithStatsig(`chatgpt_web_image_library_lightbox_opened`, `chatgpt_web_image_library_lightbox_opened`);
            let t = m(() => te(r).id);
            h(Z, {
                initialIndex: e,
                includeArchived: u,
                visibilityFilter: x ? `archived` : `unarchived`,
                conversation: r,
                currentModelId: t
            })
        }, t[0] = r, t[1] = u, t[2] = x, t[3] = E) : E = t[3];
        let D = E,
            O;
        t[4] === i ? O = t[5] : (O = S(`w-full`, i), t[4] = i, t[5] = O);
        let k;
        t[6] === s ? k = t[7] : (k = s?.map(Pe), t[6] = s, t[7] = k);
        let A;
        if (t[8] !== a || t[9] !== l || t[10] !== y || t[11] !== x || t[12] !== p || t[13] !== b || t[14] !== f || t[15] !== g || t[16] !== D || t[17] !== T) {
            let e;
            t[19] !== x || t[20] !== p || t[21] !== f || t[22] !== g || t[23] !== D ? (e = (e, t) => (0, X.jsx)(Y.Fragment, {
                children: Ce(e) ? (0, X.jsx)(Me, {
                    video: e,
                    onlyUseThumbnail: g,
                    onClick: () => {
                        p && ue() ? p(e, t) : D(t)
                    },
                    onUnhide: e => f?.(e.id),
                    isHidden: x
                }) : (0, X.jsx)(je, {
                    image: e,
                    index: t,
                    onlyUseThumbnail: g,
                    onClick: () => {
                        p && ue() ? p(e, t) : D(t)
                    },
                    onUnhide: e => f?.(e.id),
                    isHidden: x
                })
            }, e.id), t[19] = x, t[20] = p, t[21] = f, t[22] = g, t[23] = D, t[24] = e) : e = t[24];
            let n;
            t[25] === l.length ? n = t[26] : (n = (e, t) => {
                let n = l.length + t;
                return (0, X.jsx)(G, {
                    index: n,
                    isPlaceholder: !0
                }, n)
            }, t[25] = l.length, t[26] = n);
            let r;
            t[27] !== a || t[28] !== y || t[29] !== b ? (r = (0, X.jsx)(_e, {
                enabled: a,
                isFetching: y,
                onScrollToEnd: b
            }, `scroll-to-end-after-placeholders`), t[27] = a, t[28] = y, t[29] = b, t[30] = r) : r = t[30], A = l.map(e).concat(Array(T).fill(null).map(n)).concat([r]), t[8] = a, t[9] = l, t[10] = y, t[11] = x, t[12] = p, t[13] = b, t[14] = f, t[15] = g, t[16] = D, t[17] = T, t[18] = A
        } else A = t[18];
        let j;
        t[31] !== k || t[32] !== A ? (j = (0, X.jsxs)(`div`, {
            className: `grid min-h-60 w-full grid-cols-2 gap-1 max-md:gap-0.5 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6`,
            children: [k, A]
        }), t[31] = k, t[32] = A, t[33] = j) : j = t[33];
        let M;
        t[34] !== a || t[35] !== y ? (M = a && y && (0, X.jsx)(n, {}), t[34] = a, t[35] = y, t[36] = M) : M = t[36];
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
//# sourceMappingURL=7bd2b610-zmwy9azcp0em3nlm.js.map
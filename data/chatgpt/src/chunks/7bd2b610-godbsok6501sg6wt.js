const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/e75991f6-kqggcjmv5xzcwib4.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/conversation-small-fym1zmu9zimymmm1.js", "assets/30901919-e33mbl5u1y88w5wu.js", "assets/c470f5ab-m68dth1hatzjj8yh.js", "assets/0e5afe53-dl0nq2u2siu8c8q5.js", "assets/conversation-small-iha453gv.css", "assets/8b34dbc2-gf9wnwcahty27ylx.js", "assets/82782bc9-h658ejxn3ufkvr7a.js", "assets/1cfd0849-modcf4gb5s2fz5n2.js", "assets/53bdf712-j6jjhs4hsamejcpy.js", "assets/44fdb285-hjixo0qvwgxbjjpi.js", "assets/540191af-f40s3di33ebqlcih.js", "assets/85557f11-eczxyuulepmtlpfg.js", "assets/e4fe0dae-l4vxeim4wpwl76rs.js", "assets/b9e74381-h0z6cp6y2ptcf91m.js", "assets/62331d8d-mmp7396w8h746zsd.js", "assets/971592ec-k0jsw7ymdor65uui.js", "assets/4c0f1f8e-go23ccluwcn7b4ji.js", "assets/86793a97-utezu8rmpo3ihkct.js", "assets/183f19de-dn7ogozfmvugr5dv.js", "assets/656cec6a-mawg1s41ubxbow3a.js", "assets/cb56d84a-bbf5qsjbaq20a4nb.js", "assets/image-viewer-b098kzr0.css", "assets/d93502a4-gha6511x7qaxjns8.js", "assets/a35b0b5c-nqrr9b00irse80lc.js", "assets/57388dad-lj9yqc82z97630ch.js", "assets/5ff32e89-j4wrv6sqlsel9tkj.js", "assets/43119cb7-ni1s5oewncckug2c.js", "assets/b8c3b71b-nk3xdwv5ys4deefm.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B6 as n,
    BK as r,
    Btt as i,
    C0 as a,
    Ch as o,
    Htt as s,
    JP as c,
    K8 as l,
    KP as u,
    NK as d,
    O0 as f,
    Qo as p,
    S0 as m,
    Sh as h,
    T0 as g,
    b5 as _,
    dz as v,
    fz as y,
    i5 as b,
    iN as x,
    is as S,
    tN as C,
    y5 as w
} from "./4813494d-cb22y2w19zwyshmt.js";
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
    Djn as P,
    cyn as ee,
    d as te,
    gyn as ne,
    kjn as re
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    $y as ie,
    Km as ae,
    bS as oe,
    eb as se,
    qm as ce,
    yS as le
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    Gg as ue,
    Rl as de,
    Zg as fe,
    ca as pe,
    ma as me,
    zl as he
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
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
} from "./ecab41d6-dux2c0m17k9umhng.js";
import {
    a as Ce,
    i as we,
    n as Te,
    r as Ee,
    t as F
} from "./53bdf712-j6jjhs4hsamejcpy.js";
var I, L, R, De = e((() => {
        I = M(), xe(), C(), L = T(), R = () => {
            "use forget";
            let e = (0, I.c)(2),
                t = `url(${x()?Se:be})`,
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
        z = M(), ce(), De(), _(), B = t(k()), O(), V = T(), H = E({
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
            t[0] === f ? p = t[1] : (p = w(`absolute inset-0 z-0 aspect-square object-cover transition-opacity delay-100 duration-300 ease-[cubic-bezier(.24,.1,.42,.91)]`, f), t[0] = f, t[1] = p);
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
                className: w(`absolute inset-0 z-1 h-full w-full object-cover blur-sm transition-opacity delay-100 duration-300 ease-[cubic-bezier(.24,.1,.42,.91)]`, u && !s ? `opacity-100` : `opacity-0`),
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
                o = N(),
                {
                    index: s,
                    onClick: c
                } = e,
                l;
            t[0] === e ? l = t[1] : (l = W(e), t[0] = e, t[1] = l);
            let u = !l,
                d, f, p, m;
            t[2] !== s || t[3] !== o || t[4] !== c || t[5] !== u || t[6] !== e.alt ? (d = u ? null : e.alt ?? o.formatMessage(H.generatedImageAlt), t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (f = w(`group/imagegen-image bg-token-bg-tertiary relative z-0 flex aspect-square items-center justify-center overflow-clip text-xs`), t[11] = f) : f = t[11], p = u ? !0 : void 0, m = !u && c != null && d != null && (0, V.jsx)(`button`, {
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
            t[17] !== i || t[18] !== u ? (g = i && !u && (0, V.jsx)(ae, {
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
    let i = b(r);
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
            isHidden: o,
            onlyUseThumbnail: s
        } = e,
        {
            asset_pointer: c,
            conversation_id: l,
            message_id: d,
            url: f,
            width: m,
            height: h,
            prompt: g,
            title: _
        } = n,
        v;
    t[0] !== n || t[1] !== f ? (v = F(n) ?? f, t[0] = n, t[1] = f, t[2] = v) : v = t[2];
    let y = v,
        x = s && y ? y : n.encodings?.md?.path ?? f,
        S;
    t[3] === l ? S = t[4] : (S = l == null ? void 0 : u(l), t[3] = l, t[4] = S);
    let C = S,
        w;
    t[5] === C ? w = t[6] : (w = () => C?.serverId$(), t[5] = C, t[6] = w);
    let T = b(w),
        E;
    t[7] !== n || t[8] !== i ? (E = () => i?.(n), t[7] = n, t[8] = i, t[9] = E) : E = t[9];
    let D = g ?? _ ?? ``,
        O;
    t[10] !== c || t[11] !== C || t[12] !== n || t[13] !== o || t[14] !== d || t[15] !== i || t[16] !== T || t[17] !== f ? (O = !o && C != null && d != null && (0, X.jsx)(ye, {
        imageAssetPointer: c ?? void 0,
        imageUrl: f,
        canPublishPromptShare: n.generation_type === `image_gen`,
        conversation: C,
        messageId: d,
        alwaysVisible: !1,
        onEditClick: () => i?.(n),
        shareFlowSource: p.CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIBRARY_GRID,
        editButtonAnalytics: {
            surface: P.CHATGPT_CONVERSATION_IMAGE_EDIT_BUTTON_TAP_SURFACE_IMAGE_LIBRARY_THUMBNAIL,
            conversationId: T,
            messageId: d,
            generationId: n.generation_id
        }
    }), t[10] = c, t[11] = C, t[12] = n, t[13] = o, t[14] = d, t[15] = i, t[16] = T, t[17] = f, t[18] = O) : O = t[18];
    let k;
    t[19] !== n || t[20] !== o || t[21] !== a ? (k = o && (0, X.jsx)(q, {
        onClick: () => a?.(n)
    }), t[19] = n, t[20] = o, t[21] = a, t[22] = k) : k = t[22];
    let A;
    return t[23] !== h || t[24] !== x || t[25] !== r || t[26] !== E || t[27] !== D || t[28] !== O || t[29] !== k || t[30] !== y || t[31] !== m ? (A = (0, X.jsxs)(G, {
        index: r,
        src: x,
        onClick: E,
        thumbnail: y,
        width: m,
        height: h,
        alt: D,
        children: [O, k]
    }), t[23] = h, t[24] = x, t[25] = r, t[26] = E, t[27] = D, t[28] = O, t[29] = k, t[30] = y, t[31] = m, t[32] = A) : A = t[32], A
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
        d, f, p;
    t[2] !== l || t[3] !== r || t[4] !== n ? (p = n.prompt ?? n.title ?? l.formatMessage(Q.generatedVideoAlt), d = `group/imagegen-image bg-tertiary relative z-0 flex aspect-square items-center justify-center overflow-clip text-xs`, f = r != null && (0, X.jsx)(`button`, {
        type: `button`,
        className: `absolute inset-0 z-1 rounded focus:outline-none focus-visible:shadow-[inset_0_0_0_4px_rgba(0,0,0,0.35)] focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-inset`,
        "aria-label": l.formatMessage(Q.openVideo, {
            videoTitle: p
        }),
        onClick: () => r(n)
    }), t[2] = l, t[3] = r, t[4] = n, t[5] = d, t[6] = f, t[7] = p) : (d = t[5], f = t[6], p = t[7]);
    let m;
    t[8] !== o || t[9] !== c || t[10] !== n || t[11] !== p ? (m = o && c ? (0, X.jsx)(`img`, {
        src: c,
        alt: p,
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
        "aria-label": p
    }), t[8] = o, t[9] = c, t[10] = n, t[11] = p, t[12] = m) : m = t[12];
    let h;
    t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (h = (0, X.jsx)(`div`, {
        className: `pointer-events-none absolute inset-0 z-10 bg-black/20`
    }), t[13] = h) : h = t[13];
    let g;
    t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (g = (0, X.jsx)(`div`, {
        className: `pointer-events-none absolute end-3 top-3 z-20 opacity-0 transition-opacity duration-75 ease-out group-focus-within/imagegen-image:opacity-100 group-hover/imagegen-image:opacity-100`,
        children: (0, X.jsx)(`div`, {
            className: `flex h-10 w-10 items-center justify-center text-white`,
            children: (0, X.jsx)(K, {
                children: (0, X.jsx)(se, {
                    style: {
                        filter: `drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15))`
                    },
                    className: `icon fill-current`
                })
            })
        })
    }), t[14] = g) : g = t[14];
    let _;
    t[15] !== a || t[16] !== n ? (_ = !a && n.conversation_id != null && (0, X.jsx)(Ne, {
        video: n,
        conversation: u(n.conversation_id)
    }), t[15] = a, t[16] = n, t[17] = _) : _ = t[17];
    let v;
    t[18] !== a || t[19] !== i || t[20] !== n ? (v = a && (0, X.jsx)(q, {
        onClick: () => i?.(n)
    }), t[18] = a, t[19] = i, t[20] = n, t[21] = v) : v = t[21];
    let y;
    return t[22] !== d || t[23] !== f || t[24] !== m || t[25] !== _ || t[26] !== v ? (y = (0, X.jsxs)(`div`, {
        className: d,
        children: [f, m, h, g, _, v]
    }), t[22] = d, t[23] = f, t[24] = m, t[25] = _, t[26] = v, t[27] = y) : y = t[27], y
}

function Ne(e) {
    "use forget";
    let t = (0, J.c)(20),
        {
            video: n,
            conversation: r
        } = e,
        i = N(),
        [a, o] = (0, Y.useState)(!1),
        s = n.message_id ?? n.id,
        c;
    t[0] === s ? c = t[1] : (c = [s], t[0] = s, t[1] = c);
    let l = n.generation_id,
        u;
    t[2] === n ? u = t[3] : (u = Ee(n), t[2] = n, t[3] = u);
    let d;
    t[4] !== r || t[5] !== c || t[6] !== u || t[7] !== n.generation_id ? (d = {
        conversation: r,
        messageSliceIds: c,
        soraGenerationId: l,
        soraPreviewUrl: u,
        shareFlowSource: p.CHATGPT_SHARE_FLOW_SOURCE_IMAGE_LIBRARY_GRID
    }, t[4] = r, t[5] = c, t[6] = u, t[7] = n.generation_id, t[8] = d) : d = t[8];
    let f = me(d),
        m;
    t[9] === f ? m = t[10] : (m = function(e) {
        e.stopPropagation(), o(!0), f().finally(() => {
            o(!1)
        })
    }, t[9] = f, t[10] = m);
    let h = m,
        g;
    t[11] === i ? g = t[12] : (g = i.formatMessage(Q.shareVideo), t[11] = i, t[12] = g);
    let _;
    t[13] === a ? _ = t[14] : (_ = (0, X.jsx)(K, {
        className: `group-hover:bg-black/30 group-focus:bg-black/30`,
        children: a ? (0, X.jsx)(v, {}) : (0, X.jsx)(oe, {
            style: {
                filter: `drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15))`
            },
            className: `icon fill-current`
        })
    }), t[13] = a, t[14] = _);
    let y;
    return t[15] !== h || t[16] !== a || t[17] !== g || t[18] !== _ ? (y = (0, X.jsx)(`div`, {
        className: `pointer-events-none absolute inset-x-0 bottom-0 z-20 flex items-end justify-end p-3`,
        children: (0, X.jsx)(`button`, {
            className: `group pointer-events-auto z-11 flex h-10 w-10 items-center justify-center text-sm font-medium text-white`,
            onClick: h,
            "aria-label": g,
            disabled: a,
            type: `button`,
            children: _
        })
    }), t[15] = h, t[16] = a, t[17] = g, t[18] = _, t[19] = y) : y = t[19], y
}

function K(e) {
    "use forget";
    let t = (0, J.c)(5),
        {
            children: n,
            className: r
        } = e,
        i;
    t[0] === r ? i = t[1] : (i = w(`flex h-9 w-9 items-center justify-center rounded-full bg-black/15 backdrop-blur-md`, r), t[0] = r, t[1] = i);
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
        r = N(),
        i;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, X.jsx)(`div`, {
        className: `pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity group-hover/imagegen-image:opacity-100`,
        children: (0, X.jsx)(`div`, {
            className: `absolute inset-x-0 bottom-0 h-20 bg-linear-to-b from-transparent to-black/30`
        })
    }), t[0] = i) : i = t[0];
    let a;
    t[1] === r ? a = t[2] : (a = r.formatMessage({
        id: `G+OPvx`,
        defaultMessage: `Unhide media`
    }), t[1] = r, t[2] = a);
    let o;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, X.jsx)(h, {
        className: `h-4 w-4`
    }), t[3] = o) : o = t[3];
    let s;
    t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, X.jsx)(`span`, {
        className: `max-md:hidden`,
        children: (0, X.jsx)(D, {
            id: `mSvNO/`,
            defaultMessage: `Unhide`
        })
    }), t[4] = s) : s = t[4];
    let c;
    return t[5] !== n || t[6] !== a ? (c = (0, X.jsxs)(X.Fragment, {
        children: [i, (0, X.jsx)(`div`, {
            className: `absolute end-1 bottom-1 z-20 opacity-0 transition-opacity group-hover/imagegen-image:opacity-100`,
            children: (0, X.jsxs)(`button`, {
                className: `z-11 flex h-10 items-center gap-1 rounded-xl px-2 text-sm font-medium text-white hover:bg-white/15 hover:backdrop-blur-md focus:bg-white/15 focus:backdrop-blur-md`,
                onClick: n,
                "aria-label": a,
                type: `button`,
                children: [o, s]
            })
        })]
    }), t[5] = n, t[6] = a, t[7] = c) : c = t[7], c
}

function Pe(e) {
    return (0, X.jsx)(ke, {
        requestKey: e
    }, e)
}
var J, Y, X, Z, Q, $, Fe = e((() => {
    J = M(), c(), o(), ie(), le(), g(), ge(), he(), fe(), ve(), ne(), pe(), S(), n(), y(), Oe(), s(), d(), re(), a(), _(), Y = t(k()), O(), we(), te(), X = T(), j(), Z = m(() => A(() => import(`./e75991f6-kqggcjmv5xzcwib4.js`).then(e => e.ImageGenLibraryLightboxNew), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]))), Q = E({
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
                conversation: n,
                className: a,
                hasMoreImages: o,
                generationRequestKeys: s,
                count: c,
                images: u,
                includeArchived: d,
                isHiddenView: p,
                onUnhide: m,
                onOpenLightbox: h,
                onlyUseThumbnail: g,
                isFetchingMore: _,
                onScrollToEnd: y
            } = e,
            x = p !== void 0 && p,
            S = b(r) ? 25 : 10,
            C = c != null && c > u.length ? c - u.length : null,
            T = _ || o && !u.length ? Math.min(C ?? S, S) : 0,
            E;
        t[0] !== n || t[1] !== d || t[2] !== x ? (E = e => {
            i.logEventWithStatsig(`chatgpt_web_image_library_lightbox_opened`, `chatgpt_web_image_library_lightbox_opened`);
            let t = l(() => ee(n).id);
            f(Z, {
                initialIndex: e,
                includeArchived: d,
                visibilityFilter: x ? `archived` : `unarchived`,
                conversation: n,
                currentModelId: t
            })
        }, t[0] = n, t[1] = d, t[2] = x, t[3] = E) : E = t[3];
        let D = E,
            O;
        t[4] === a ? O = t[5] : (O = w(`w-full`, a), t[4] = a, t[5] = O);
        let k;
        t[6] === s ? k = t[7] : (k = s?.map(Pe), t[6] = s, t[7] = k);
        let A;
        if (t[8] !== o || t[9] !== u || t[10] !== _ || t[11] !== x || t[12] !== h || t[13] !== y || t[14] !== m || t[15] !== g || t[16] !== D || t[17] !== T) {
            let e;
            t[19] !== x || t[20] !== h || t[21] !== m || t[22] !== g || t[23] !== D ? (e = (e, t) => (0, X.jsx)(Y.Fragment, {
                children: Ce(e) ? (0, X.jsx)(Me, {
                    video: e,
                    onlyUseThumbnail: g,
                    onClick: () => {
                        h && ue() ? h(e, t) : D(t)
                    },
                    onUnhide: e => m?.(e.id),
                    isHidden: x
                }) : (0, X.jsx)(je, {
                    image: e,
                    index: t,
                    onlyUseThumbnail: g,
                    onClick: () => {
                        h && ue() ? h(e, t) : D(t)
                    },
                    onUnhide: e => m?.(e.id),
                    isHidden: x
                })
            }, e.id), t[19] = x, t[20] = h, t[21] = m, t[22] = g, t[23] = D, t[24] = e) : e = t[24];
            let n;
            t[25] === u.length ? n = t[26] : (n = (e, t) => {
                let n = u.length + t;
                return (0, X.jsx)(G, {
                    index: n,
                    isPlaceholder: !0
                }, n)
            }, t[25] = u.length, t[26] = n);
            let r;
            t[27] !== o || t[28] !== _ || t[29] !== y ? (r = (0, X.jsx)(_e, {
                enabled: o,
                isFetching: _,
                onScrollToEnd: y
            }, `scroll-to-end-after-placeholders`), t[27] = o, t[28] = _, t[29] = y, t[30] = r) : r = t[30], A = u.map(e).concat(Array(T).fill(null).map(n)).concat([r]), t[8] = o, t[9] = u, t[10] = _, t[11] = x, t[12] = h, t[13] = y, t[14] = m, t[15] = g, t[16] = D, t[17] = T, t[18] = A
        } else A = t[18];
        let j;
        t[31] !== k || t[32] !== A ? (j = (0, X.jsxs)(`div`, {
            className: `grid min-h-60 w-full grid-cols-2 gap-1 max-md:gap-0.5 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6`,
            children: [k, A]
        }), t[31] = k, t[32] = A, t[33] = j) : j = t[33];
        let M;
        t[34] !== o || t[35] !== _ ? (M = o && _ && (0, X.jsx)(v, {}), t[34] = o, t[35] = _, t[36] = M) : M = t[36];
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
//# sourceMappingURL=7bd2b610-godbsok6501sg6wt.js.map
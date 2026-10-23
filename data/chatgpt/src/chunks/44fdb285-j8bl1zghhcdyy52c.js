const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/885bfdd1-omxkapahv0slp5dh.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-mdvd4786a87166cc.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/36be5545-er3706fg7fv2dwyj.js", "assets/conversation-small-bcbq46iub1p0ca1t.js", "assets/30901919-s8bko9nrkqwv6i4f.js", "assets/c470f5ab-jwd0o7jx9i9say9k.js", "assets/0e5afe53-hxm3yzzjqriayom4.js", "assets/conversation-small-ep6mlz5m.css", "assets/drawing-canvas-mhqahk78.css"]))) => i.map(i => d[i]);
import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as r,
    At as i,
    CR as a,
    DR as o,
    Jt as s,
    K5 as c,
    Kit as l,
    Knt as u,
    Nw as d,
    Pw as f,
    U1 as p,
    V1 as m,
    Vw as h,
    Wnt as g,
    XJ as _,
    a2 as v,
    eY as y,
    gF as b,
    j5 as x,
    o2 as S,
    q1 as C,
    q5 as w,
    qit as T,
    rq as E,
    uq as ee,
    vF as D,
    y5 as O,
    zw as k
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as A,
    Kt as te,
    Ln as ne,
    Rn as re,
    Vn as ie,
    cn as ae,
    ln as oe,
    wn as se,
    zn as ce
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    AUn as le,
    D5 as j,
    E5 as M,
    MUn as ue,
    Nlt as de,
    O5 as fe,
    S5 as pe,
    T5 as me,
    TWn as he,
    ajn as ge,
    akt as N,
    b5 as _e,
    cpn as ve,
    epn as ye,
    ipn as be,
    jUn as P,
    jlt as xe,
    lWn as Se,
    okt as Ce,
    rjn as F,
    spn as we,
    tpn as Te,
    uWn as Ee,
    w5 as De,
    wWn as Oe,
    x5 as I,
    y5 as ke
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Jy as Ae,
    TC as L,
    Xy as je,
    Yy as Me,
    Zy as Ne,
    wC as Pe
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    n as Fe,
    t as Ie
} from "./540191af-bsnwm8m7nrxh45sh.js";
import {
    c as Le,
    r as Re
} from "./85557f11-mqqr1coukt2floak.js";
import {
    n as ze,
    t as R
} from "./b9e74381-h0z6cp6y2ptcf91m.js";
import {
    n as Be,
    t as Ve
} from "./62331d8d-n4q80nmfpw16p4gg.js";
import {
    a as He,
    i as Ue,
    n as We,
    o as Ge,
    r as Ke
} from "./971592ec-zo6t42d5gpl2qkey.js";
import {
    i as qe,
    r as Je
} from "./86793a97-dd7xdf77gkbmt582.js";
import {
    n as Ye,
    t as Xe
} from "./183f19de-b4keljrxqzf9e2ih.js";
import {
    n as z,
    t as Ze
} from "./656cec6a-dq46rtojrt6vh3ko.js";
import {
    i as Qe,
    n as $e,
    o as et,
    r as tt,
    t as nt
} from "./cb56d84a-l5xbecmayz0u2zwt.js";
import {
    a as rt,
    c as it,
    n as at,
    t as ot
} from "./d93502a4-h6a2mias0vrtgnju.js";
import {
    i as B,
    n as st
} from "./a35b0b5c-g66fkye7zwwe4c92.js";

function ct({
    image: e,
    drawingState: t,
    drawingCanvasRef: n
}) {
    return (0, lt.jsx)(`div`, {
        className: `pointer-events-none absolute inset-0 z-[60] overflow-visible`,
        children: (0, lt.jsx)(`div`, {
            className: `pointer-events-auto absolute inset-0`,
            children: (0, lt.jsx)(ut, {
                drawingCanvasRef: n,
                color: `rgba(0, 122, 255, 0.5)`,
                dashedOutlineColor: `rgba(255, 255, 255, 0.65)`,
                cursorWidth: dt,
                canvasWidth: e.width,
                canvasHeight: e.height,
                drawingState: t
            })
        })
    })
}
var lt, ut, dt, ft = e((() => {
    S(), lt = A(), oe(), ut = v(() => ae(() => import(`./885bfdd1-omxkapahv0slp5dh.js`).then(e => e.DynamicDrawingCanvas), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]))), dt = 136
}));

function V(e) {
    "use forget";
    let t = (0, H.c)(11),
        {
            image: n,
            drawingState: r,
            drawingCanvasRef: i,
            imageClassName: a
        } = e,
        o = n.title ?? ``,
        s;
    t[0] !== n.url || t[1] !== a || t[2] !== o ? (s = (0, U.jsx)(`img`, {
        src: n.url,
        alt: o,
        className: a,
        fetchPriority: `high`,
        loading: `eager`,
        decoding: `async`
    }), t[0] = n.url, t[1] = a, t[2] = o, t[3] = s) : s = t[3];
    let c;
    t[4] !== i || t[5] !== r || t[6] !== n ? (c = (0, U.jsx)(ct, {
        image: n,
        drawingState: r,
        drawingCanvasRef: i
    }), t[4] = i, t[5] = r, t[6] = n, t[7] = c) : c = t[7];
    let l;
    return t[8] !== s || t[9] !== c ? (l = (0, U.jsxs)(U.Fragment, {
        children: [s, c]
    }), t[8] = s, t[9] = c, t[10] = l) : l = t[10], l
}

function pt(e) {
    "use forget";
    let t = (0, H.c)(12),
        {
            image: n,
            drawingState: r,
            drawingCanvasRef: i
        } = e,
        a = (0, mt.useRef)(null),
        [o, s] = (0, mt.useState)(null),
        c, l;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (c = () => {
        let e = a.current;
        if (!e) return;
        let t = () => {
            let {
                width: t,
                height: n
            } = e.getBoundingClientRect();
            s(e => e?.width === t && e?.height === n ? e : {
                width: t,
                height: n
            })
        };
        if (t(), typeof ResizeObserver > `u`) return;
        let n = new ResizeObserver(() => {
            t()
        });
        return n.observe(e), () => {
            n.disconnect()
        }
    }, l = [], t[0] = c, t[1] = l) : (c = t[0], l = t[1]), (0, mt.useEffect)(c, l);
    let u;
    t[2] !== o || t[3] !== n ? (u = o == null ? void 0 : R({
        mediaWidth: n.width,
        mediaHeight: n.height,
        containerWidth: o.width,
        containerHeight: o.height
    }), t[2] = o, t[3] = n, t[4] = u) : u = t[4];
    let d = u,
        f;
    t[5] !== i || t[6] !== r || t[7] !== d || t[8] !== n ? (f = d && (0, U.jsx)(`div`, {
        "data-testid": `contained-inpaint-surface`,
        className: `border-token-border-light shadow-elevation-03 absolute overflow-hidden rounded-none border bg-neutral-100`,
        style: d,
        children: (0, U.jsx)(V, {
            image: n,
            drawingState: r,
            drawingCanvasRef: i,
            imageClassName: `block h-full w-full object-contain`
        })
    }), t[5] = i, t[6] = r, t[7] = d, t[8] = n, t[9] = f) : f = t[9];
    let p;
    return t[10] === f ? p = t[11] : (p = (0, U.jsx)(`div`, {
        ref: a,
        className: `relative h-full w-full`,
        children: f
    }), t[10] = f, t[11] = p), p
}
var H, mt, U, ht = e((() => {
    H = se(), ze(), ft(), mt = n(ie()), U = A()
}));

function gt({
    element: e,
    conversationId: t,
    messageId: n,
    attribution: r,
    isCurrentImage: i
}) {
    if (r == null) return () => {};
    let a = e.ownerDocument,
        s = !1,
        c = () => {
            if (s || a.visibilityState !== `visible` || !e.complete || e.naturalWidth === 0 || !i()) return;
            s = !0, l();
            let c = O(o)?.id,
                u = m()?.id;
            !c || !u || Be(b(_(t)), {
                viewerId: c,
                conversationId: t,
                messageId: n,
                isDelayed: r.is_delayed,
                asyncCompletionId: r.async_completion_id ?? void 0
            })
        };

    function l() {
        e.removeEventListener(`load`, c), a.removeEventListener(`visibilitychange`, c)
    }
    return e.addEventListener(`load`, c), a.addEventListener(`visibilitychange`, c), c(), l
}
var _t = e((() => {
        D(), r(), C(), y(), a(), Ve()
    })),
    vt, yt = e((() => {
        re(), vt = ne({
            brushSize: {
                id: `imageGenLightbox.removeBrushSize`,
                defaultMessage: `Brush size`
            },
            zoomHelpText: {
                id: `imageGenLightbox.remove.zoom.helpText`,
                defaultMessage: `Pinch to zoom. To pan, scroll or hold Space and drag.`
            }
        })
    })),
    bt, xt, W, G, St, Ct, wt, Tt = e((() => {
        bt = se(), z(), S(), xt = n(ie()), re(), yt(), W = A(), oe(), G = v(() => ae(() => import(`./885bfdd1-omxkapahv0slp5dh.js`).then(e => e.DynamicDrawingCanvas), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]))), St = 32, Ct = 512, wt = e => {
            "use forget";
            let t = (0, bt.c)(29),
                {
                    image: n,
                    drawingState: r,
                    drawingCanvasRef: i,
                    brushSize: a,
                    onBrushSizeChange: o,
                    onBrushSizeCommit: s,
                    viewport: c
                } = e,
                l = ce(),
                [u, d] = (0, xt.useState)(!1),
                f = a * c.fitImageRect.width / n.width,
                p = c.imageRect.width > 0 ? a * c.fitImageRect.width / c.imageRect.width : a,
                m;
            t[0] !== p || t[1] !== i || t[2] !== r || t[3] !== n.height || t[4] !== n.width || t[5] !== c.isInteracting || t[6] !== c.isPanReady ? (m = (0, W.jsx)(G, {
                drawingCanvasRef: i,
                color: `rgba(0, 122, 255, 0.5)`,
                dashedOutlineColor: `rgba(255, 255, 255, 0.65)`,
                cursorWidth: p,
                canvasWidth: n.width,
                canvasHeight: n.height,
                drawingState: r,
                paintOnStart: !0,
                readOnly: c.isInteracting,
                hideCursor: c.isPanReady
            }), t[0] = p, t[1] = i, t[2] = r, t[3] = n.height, t[4] = n.width, t[5] = c.isInteracting, t[6] = c.isPanReady, t[7] = m) : m = t[7];
            let h;
            t[8] !== m || t[9] !== c.imageRect ? (h = (0, W.jsx)(`div`, {
                "data-testid": `contained-remove-surface`,
                className: `absolute overflow-hidden`,
                style: c.imageRect,
                children: m
            }), t[8] = m, t[9] = c.imageRect, t[10] = h) : h = t[10];
            let g;
            t[11] !== u || t[12] !== f ? (g = u && f > 0 ? (0, W.jsx)(`div`, {
                "aria-hidden": `true`,
                className: `pointer-events-none absolute inset-0 z-[70] flex items-center justify-center`,
                children: (0, W.jsx)(`div`, {
                    className: `rounded-full border-2 border-dashed border-white/90`,
                    style: {
                        backgroundColor: `rgba(0, 122, 255, 0.12)`,
                        boxShadow: `0 0 0 1px rgba(0, 122, 255, 0.8)`,
                        height: f,
                        width: f
                    }
                })
            }) : null, t[11] = u, t[12] = f, t[13] = g) : g = t[13];
            let _;
            t[14] !== h || t[15] !== g ? (_ = (0, W.jsxs)(`div`, {
                className: `absolute inset-0 overflow-hidden`,
                children: [h, g]
            }), t[14] = h, t[15] = g, t[16] = _) : _ = t[16];
            let v;
            t[17] === l ? v = t[18] : (v = l.formatMessage(vt.brushSize), t[17] = l, t[18] = v);
            let y, b;
            t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (y = () => d(!0), b = () => d(!1), t[19] = y, t[20] = b) : (y = t[19], b = t[20]);
            let x;
            t[21] !== a || t[22] !== o || t[23] !== s || t[24] !== v ? (x = (0, W.jsx)(`div`, {
                className: `pointer-events-none absolute start-4 top-1/2 z-40 h-44 max-h-[50%] -translate-y-1/2`,
                children: (0, W.jsx)(`div`, {
                    "data-annotation-control": !0,
                    className: `pointer-events-auto h-full`,
                    children: (0, W.jsx)(Ze, {
                        "aria-label": v,
                        className: `bg-token-bg-elevated-primary border-token-border-default h-full w-12 rounded-full border shadow-sm`,
                        max: Ct,
                        min: St,
                        name: `image-remove-brush-size`,
                        value: a,
                        onInteractionStart: y,
                        onInteractionEnd: b,
                        onValueChange: o,
                        onValueCommit: s
                    })
                })
            }), t[21] = a, t[22] = o, t[23] = s, t[24] = v, t[25] = x) : x = t[25];
            let S;
            return t[26] !== _ || t[27] !== x ? (S = (0, W.jsxs)(`div`, {
                className: `relative h-full w-full`,
                children: [_, x]
            }), t[26] = _, t[27] = x, t[28] = S) : S = t[28], S
        }
    }));

function Et(e) {
    "use forget";
    let t = (0, kt.c)(75),
        {
            media: n,
            presentation: r,
            isActiveSlide: i
        } = e,
        a = i !== void 0 && i,
        o = ce(),
        s = (0, At.useId)(),
        l = (0, At.useRef)(null),
        [u, d] = (0, At.useState)(!1),
        [f, p] = (0, At.useState)(!1),
        m = B(),
        [h, g] = (0, At.useState)(!0),
        _ = m?.isMuted ?? h,
        v = n.width > 0 ? n.width : Mt,
        y = n.height > 0 ? n.height : q,
        b = v / y,
        x;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (x = e => {
        l.current = e, e && e.readyState >= HTMLMediaElement.HAVE_METADATA && p(!0)
    }, t[0] = x) : x = t[0];
    let S = x,
        C;
    t[1] === m ? C = t[2] : (C = e => {
        if (m) {
            m.setMuted(e);
            return
        }
        g(e)
    }, t[1] = m, t[2] = C);
    let w = C,
        T;
    t[3] !== a || t[4] !== _ || t[5] !== s || t[6] !== w ? (T = {
        ownerId: s,
        isMuted: _,
        canOwnAudio: a,
        onMutedChange: w
    }, t[3] = a, t[4] = _, t[5] = s, t[6] = w, t[7] = T) : T = t[7];
    let {
        shouldMute: E,
        toggleMuted: ee
    } = it(T), D = Dt, O;
    t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (O = e => {
        if (e) try {
            e.play().catch(() => {
                d(!1)
            })
        } catch {
            d(!1)
        }
    }, t[8] = O) : O = t[8];
    let k = O,
        A;
    t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (A = () => {
        let e = l.current;
        if (e) {
            if (e.paused) {
                k(e);
                return
            }
            e.pause()
        }
    }, t[9] = A) : A = t[9];
    let te = A,
        ne;
    t[10] === a ? ne = t[11] : (ne = () => {
        let e = l.current;
        if (!e) return;
        if (!a) {
            D(e);
            return
        }
        e.networkState === HTMLMediaElement.NETWORK_EMPTY && e.load(), k(e);
        let t = () => {
            k(e)
        };
        return e.addEventListener(`canplay`, t, {
            once: !0
        }), e.addEventListener(`loadeddata`, t, {
            once: !0
        }), () => {
            e.removeEventListener(`canplay`, t), e.removeEventListener(`loadeddata`, t)
        }
    }, t[10] = a, t[11] = ne);
    let re;
    t[12] !== a || t[13] !== n.url ? (re = [D, a, n.url, k], t[12] = a, t[13] = n.url, t[14] = re) : re = t[14], (0, At.useEffect)(ne, re);
    let ie, ae;
    t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (ae = () => {
        let e = l.current;
        return () => {
            D(e)
        }
    }, ie = [D], t[15] = ie, t[16] = ae) : (ie = t[15], ae = t[16]), (0, At.useEffect)(ae, ie);
    let oe;
    t[17] !== r || t[18] !== b || t[19] !== y || t[20] !== v ? (oe = r === `desktop` ? {
        aspectRatio: `${v} / ${y}`,
        height: `min(100%, calc((100vw - ${jt}px) / ${b}))`,
        maxHeight: `100%`
    } : {
        aspectRatio: `${v} / ${y}`
    }, t[17] = r, t[18] = b, t[19] = y, t[20] = v, t[21] = oe) : oe = t[21];
    let se = oe,
        le = a ? n.url : void 0,
        j = n.thumbnail ?? void 0,
        M = n.title ?? ``,
        ue = !f && `opacity-0`,
        de;
    t[22] === ue ? de = t[23] : (de = c(`block h-full w-full object-contain shadow-none`, ue), t[22] = ue, t[23] = de);
    let fe = r === `desktop` || a ? `auto` : `metadata`,
        pe, me, he, ge, N, _e;
    t[24] === Symbol.for(`react.memo_cache_sentinel`) ? (pe = () => p(!0), me = () => p(!0), he = () => p(!0), ge = () => p(!0), N = () => {
        p(!0), d(!0)
    }, _e = () => d(!1), t[24] = pe, t[25] = me, t[26] = he, t[27] = ge, t[28] = N, t[29] = _e) : (pe = t[24], me = t[25], he = t[26], ge = t[27], N = t[28], _e = t[29]);
    let ve;
    t[30] !== a || t[31] !== E || t[32] !== le || t[33] !== j || t[34] !== M || t[35] !== de || t[36] !== fe || t[37] !== y || t[38] !== v ? (ve = (0, K.jsx)(`video`, {
        ref: S,
        src: le,
        poster: j,
        width: v,
        height: y,
        autoPlay: a,
        muted: E,
        loop: !0,
        playsInline: !0,
        "aria-label": M,
        className: de,
        onClick: te,
        preload: fe,
        onLoadedMetadata: pe,
        onLoadedData: me,
        onCanPlay: he,
        onError: ge,
        onPlay: N,
        onPause: _e
    }), t[30] = a, t[31] = E, t[32] = le, t[33] = j, t[34] = M, t[35] = de, t[36] = fe, t[37] = y, t[38] = v, t[39] = ve) : ve = t[39];
    let ye = r === `desktop` ? `opacity-0 group-hover:opacity-100 focus-within:opacity-100` : `opacity-100`,
        be;
    t[40] === ye ? be = t[41] : (be = c(`pointer-events-none absolute end-3 top-3 z-10`, ye), t[40] = ye, t[41] = be);
    let P;
    t[42] !== o || t[43] !== _ ? (P = o.formatMessage(_ ? Y.unmuteVideo : Y.muteVideo), t[42] = o, t[43] = _, t[44] = P) : P = t[44];
    let xe;
    t[45] === ee ? xe = t[46] : (xe = e => {
        e.preventDefault(), e.stopPropagation(), ee()
    }, t[45] = ee, t[46] = xe);
    let Se;
    t[47] === _ ? Se = t[48] : (Se = (0, K.jsx)(ot, {
        muted: _,
        className: `icon text-white`
    }), t[47] = _, t[48] = Se);
    let Ce;
    t[49] !== P || t[50] !== xe || t[51] !== Se ? (Ce = (0, K.jsx)(`button`, {
        type: `button`,
        "aria-label": P,
        className: J,
        onClick: xe,
        children: Se
    }), t[49] = P, t[50] = xe, t[51] = Se, t[52] = Ce) : Ce = t[52];
    let F;
    t[53] !== be || t[54] !== Ce ? (F = (0, K.jsx)(`div`, {
        className: be,
        children: Ce
    }), t[53] = be, t[54] = Ce, t[55] = F) : F = t[55];
    let we = r === `desktop` ? `opacity-0 group-hover:opacity-100 focus-within:opacity-100` : `opacity-100`,
        Te;
    t[56] === we ? Te = t[57] : (Te = c(`pointer-events-none absolute start-3 bottom-3 z-10`, we), t[56] = we, t[57] = Te);
    let Ee;
    t[58] !== o || t[59] !== u ? (Ee = o.formatMessage(u ? Y.pauseVideo : Y.playVideo), t[58] = o, t[59] = u, t[60] = Ee) : Ee = t[60];
    let De;
    t[61] === Symbol.for(`react.memo_cache_sentinel`) ? (De = e => {
        e.preventDefault(), e.stopPropagation(), te()
    }, t[61] = De) : De = t[61];
    let Oe;
    t[62] === u ? Oe = t[63] : (Oe = u ? (0, K.jsx)(Ne, {
        className: `icon text-white`
    }) : (0, K.jsx)(Me, {
        className: `icon text-white`
    }), t[62] = u, t[63] = Oe);
    let I;
    t[64] !== Ee || t[65] !== Oe ? (I = (0, K.jsx)(`button`, {
        type: `button`,
        "aria-label": Ee,
        className: J,
        onClick: De,
        children: Oe
    }), t[64] = Ee, t[65] = Oe, t[66] = I) : I = t[66];
    let ke;
    t[67] !== Te || t[68] !== I ? (ke = (0, K.jsx)(`div`, {
        className: Te,
        children: I
    }), t[67] = Te, t[68] = I, t[69] = ke) : ke = t[69];
    let Ae;
    return t[70] !== se || t[71] !== ve || t[72] !== F || t[73] !== ke ? (Ae = (0, K.jsxs)(`div`, {
        "data-testid": `lightbox-video-frame`,
        className: `group relative max-h-full max-w-full overflow-hidden rounded`,
        style: se,
        children: [ve, F, ke]
    }), t[70] = se, t[71] = ve, t[72] = F, t[73] = ke, t[74] = Ae) : Ae = t[74], Ae
}

function Dt(e) {
    e && (e.pause(), e.removeAttribute(`src`), e.load())
}

function Ot(e) {
    "use forget";
    let t = (0, kt.c)(2),
        n;
    return t[0] === e ? n = t[1] : (n = (0, K.jsx)(Et, {
        ...e
    }), t[0] = e, t[1] = n), n
}
var kt, At, K, jt, Mt, q, J, Y, Nt = e((() => {
        kt = se(), je(), Ae(), rt(), w(), At = n(ie()), re(), st(), at(), K = A(), jt = 240, Mt = 16, q = 9, J = `pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-black/15 text-white backdrop-blur-md hover:bg-black/30 focus:bg-black/30`, Y = ne({
            muteVideo: {
                id: `6ZKYXm`,
                defaultMessage: `Mute video`
            },
            unmuteVideo: {
                id: `CXaK+s`,
                defaultMessage: `Unmute video`
            },
            playVideo: {
                id: `j3xGIG`,
                defaultMessage: `Play video`
            },
            pauseVideo: {
                id: `3bApjQ`,
                defaultMessage: `Pause video`
            }
        })
    })),
    X = t({
        Footer: () => en,
        Header: () => $t,
        LightboxHeaderActions: () => nn,
        LightboxNew: () => dn,
        Root: () => Lt
    });

function Pt(e) {
    "use forget";
    let t = (0, an.c)(58),
        {
            zoomPercent: n,
            fitZoomPercent: r,
            minZoomPercent: i,
            maxZoomPercent: a,
            onZoomPercentChange: o,
            onResetZoom: s,
            helpText: c
        } = e,
        l = ce(),
        u, d, f, p, m, h, g, _, v, y, b, x, S;
    if (t[0] !== r || t[1] !== c || t[2] !== l || t[3] !== a || t[4] !== i || t[5] !== s || t[6] !== o || t[7] !== n) {
        let e = Math.round(n),
            C = l.formatMessage($.zoomPercentLabel, {
                zoomPercent: e
            }),
            w = Math.abs(n - r) < 1,
            T;
        t[21] !== a || t[22] !== i ? (T = e => e >= Math.ceil(i) && e <= Math.floor(a), t[21] = a, t[22] = i, t[23] = T) : T = t[23];
        let E = cn.filter(T),
            ee = w ? `fit` : String(e);
        m = `pointer-events-auto absolute end-3 top-2`, d = le, v = `bottom`, y = 8, b = `end`, x = `small`, S = ln;
        let D = l.formatMessage($.zoomLevelLabel, {
                zoomPercent: e
            }),
            O;
        t[24] === C ? O = t[25] : (O = (0, Q.jsx)(`span`, {
            children: C
        }), t[24] = C, t[25] = O);
        let k;
        t[26] === Symbol.for(`react.memo_cache_sentinel`) ? (k = (0, Q.jsx)(Pe, {
            className: `icon-sm shrink-0`
        }), t[26] = k) : k = t[26], t[27] !== c || t[28] !== D || t[29] !== O ? (p = (0, Q.jsxs)(`button`, {
            type: `button`,
            title: c,
            "aria-label": D,
            className: `border-token-border-default bg-token-bg-elevated-primary text-token-text-primary hover:bg-token-bg-secondary focus-visible:ring-token-focus flex h-11 w-[73px] items-center justify-center gap-0.5 rounded-full border text-sm font-medium shadow-sm focus-visible:ring-2 focus-visible:outline-none`,
            children: [O, k]
        }), t[27] = c, t[28] = D, t[29] = O, t[30] = p) : p = t[30], u = P.RadioGroup, f = ee, t[31] !== s || t[32] !== o ? (h = e => {
            if (e === `fit`) {
                s();
                return
            }
            o(Number(e))
        }, t[31] = s, t[32] = o, t[33] = h) : h = t[33];
        let A;
        t[34] === l ? A = t[35] : (A = l.formatMessage($.fitZoomLabel), t[34] = l, t[35] = A), t[36] === A ? g = t[37] : (g = (0, Q.jsx)(P.RadioItem, {
            value: `fit`,
            children: A
        }), t[36] = A, t[37] = g);
        let te;
        t[38] === l ? te = t[39] : (te = e => (0, Q.jsx)(P.RadioItem, {
            value: String(e),
            children: l.formatMessage($.zoomPercentLabel, {
                zoomPercent: e
            })
        }, e), t[38] = l, t[39] = te), _ = E.map(te), t[0] = r, t[1] = c, t[2] = l, t[3] = a, t[4] = i, t[5] = s, t[6] = o, t[7] = n, t[8] = u, t[9] = d, t[10] = f, t[11] = p, t[12] = m, t[13] = h, t[14] = g, t[15] = _, t[16] = v, t[17] = y, t[18] = b, t[19] = x, t[20] = S
    } else u = t[8], d = t[9], f = t[10], p = t[11], m = t[12], h = t[13], g = t[14], _ = t[15], v = t[16], y = t[17], b = t[18], x = t[19], S = t[20];
    let C;
    t[40] !== u || t[41] !== f || t[42] !== h || t[43] !== g || t[44] !== _ ? (C = (0, Q.jsxs)(u, {
        value: f,
        onValueChange: h,
        children: [g, _]
    }), t[40] = u, t[41] = f, t[42] = h, t[43] = g, t[44] = _, t[45] = C) : C = t[45];
    let w;
    t[46] !== d || t[47] !== p || t[48] !== C || t[49] !== v || t[50] !== y || t[51] !== b || t[52] !== x || t[53] !== S ? (w = (0, Q.jsx)(d, {
        side: v,
        sideOffset: y,
        contentAlign: b,
        size: x,
        contentClassName: S,
        triggerButton: p,
        children: C
    }), t[46] = d, t[47] = p, t[48] = C, t[49] = v, t[50] = y, t[51] = b, t[52] = x, t[53] = S, t[54] = w) : w = t[54];
    let T;
    return t[55] !== m || t[56] !== w ? (T = (0, Q.jsx)(`div`, {
        className: m,
        children: w
    }), t[55] = m, t[56] = w, t[57] = T) : T = t[57], T
}

function Ft(e, t) {
    return `${Te(e)}-${t}`
}

function It(e) {
    "use forget";
    let t = (0, an.c)(30),
        {
            media: n,
            presentation: r,
            isActiveSlide: i,
            imageRef: a
        } = e,
        o = i !== void 0 && i,
        s = p(),
        [l, u] = (0, Z.useState)(null);
    if (fe(n)) {
        let e;
        return t[0] !== o || t[1] !== n || t[2] !== r ? (e = (0, Q.jsx)(Ot, {
            media: n,
            presentation: r,
            isActiveSlide: o
        }), t[0] = o, t[1] = n, t[2] = r, t[3] = e) : e = t[3], e
    }
    let d = ye,
        f = !s?.hasPaidSubscription(),
        m;
    t[4] !== n || t[5] !== d || t[6] !== f ? (m = d(n, f), t[4] = n, t[5] = d, t[6] = f, t[7] = m) : m = t[7];
    let h = m,
        g = n.width > 0 && n.height > 0 ? n.width / n.height : 1,
        _ = l?.src === h ? l.aspectRatio : g,
        v = n.title ?? ``,
        y;
    t[8] !== _ || t[9] !== n.isAnimated ? (y = n.isAnimated ? {
        height: `min(400px, 100cqh, ${100/_}cqw)`
    } : void 0, t[8] = _, t[9] = n.isAnimated, t[10] = y) : y = t[10];
    let b;
    t[11] !== n.isAnimated || t[12] !== u || t[13] !== h ? (b = n.isAnimated ? e => {
        let {
            currentTarget: t
        } = e;
        t.naturalWidth > 0 && t.naturalHeight > 0 && u({
            src: h,
            aspectRatio: t.naturalWidth / t.naturalHeight
        })
    } : void 0, t[11] = n.isAnimated, t[12] = u, t[13] = h, t[14] = b) : b = t[14];
    let x = n.isAnimated && `w-auto`,
        S = r === `desktop` ? `border-token-border-light shadow-elevation-03 block max-h-full max-w-full rounded-none border object-contain` : `border-token-border-light shadow-elevation-03 max-h-full max-w-full rounded-none border object-contain`,
        C;
    t[15] !== x || t[16] !== S ? (C = c(x, S), t[15] = x, t[16] = S, t[17] = C) : C = t[17];
    let w = r === `desktop` || o ? `high` : `auto`,
        T = r === `desktop` || o ? `eager` : `lazy`,
        E;
    t[18] !== a || t[19] !== h || t[20] !== C || t[21] !== w || t[22] !== T || t[23] !== v || t[24] !== y || t[25] !== b ? (E = (0, Q.jsx)(`img`, {
        ref: a,
        src: h,
        alt: v,
        style: y,
        onLoad: b,
        className: C,
        fetchPriority: w,
        loading: T,
        decoding: `async`
    }), t[18] = a, t[19] = h, t[20] = C, t[21] = w, t[22] = T, t[23] = v, t[24] = y, t[25] = b, t[26] = E) : E = t[26];
    let ee = E,
        D;
    return t[27] !== ee || t[28] !== n.isAnimated ? (D = n.isAnimated ? (0, Q.jsx)(`div`, {
        className: `[container-type:size] flex size-full items-center justify-center`,
        children: ee
    }) : ee, t[27] = ee, t[28] = n.isAnimated, t[29] = D) : D = t[29], D
}

function Lt(e) {
    "use forget";
    let t = (0, an.c)(152),
        {
            media: n,
            initialIndex: r,
            onClose: i,
            onIndexChange: a,
            disableRailNavigation: o,
            preserveDesktopRailSpace: u,
            children: f,
            inpaintingProps: m,
            removeProps: h,
            annotationProps: _,
            editingOverlay: v,
            renderMediaControls: y,
            renderMediaOverlay: b,
            fullscreenShellEnabled: S,
            useArtifactPreviewBackground: C,
            allowFloatingToolbar: w,
            sharedImageViewerEnabled: T,
            canvasViewEnabled: E,
            fullscreenHeaderTitleContent: D,
            headerTitleTrailingContent: O,
            renderShell: A,
            shouldIgnoreClickOutside: te,
            translucentBackground: ne,
            closeOnPointerDownInside: re,
            balanceDesktopRailSafeArea: ie,
            onOpenAutoFocus: ae,
            source: oe,
            trackImageGenResultViews: se
        } = e,
        le = r === void 0 ? 0 : r,
        M = o !== void 0 && o,
        ue = u === void 0 || u,
        de = S !== void 0 && S,
        me = C !== void 0 && C,
        ge = w !== void 0 && w,
        N = T !== void 0 && T,
        ve = E !== void 0 && E,
        be = te !== void 0 && te,
        P = ne !== void 0 && ne,
        Ee = re !== void 0 && re,
        Oe = ie !== void 0 && ie,
        I = oe === void 0 ? F.CHATGPT_IMAGE_LIGHTBOX_SOURCE_TYPE_UNSPECIFIED : oe,
        Ae = se !== void 0 && se,
        [L, je] = (0, Z.useState)(le),
        [Me, Ne] = (0, Z.useState)(Qt),
        [Pe, Fe] = (0, Z.useState)(`focused`),
        [Le, Re] = (0, Z.useState)(null),
        ze = (0, Z.useRef)(null),
        [R, Be] = (0, Z.useState)(null),
        [Ve, Ue] = (0, Z.useState)(null),
        We = (0, Z.useRef)(null),
        Ge = (0, Z.useRef)(null),
        Je = s(),
        Xe = (0, Z.useRef)(null),
        z = n[L],
        Ze = j(z) ? z : void 0,
        nt;
    t[0] === Ze ? nt = t[1] : (nt = we(Ze), t[0] = Ze, t[1] = nt);
    let rt = nt,
        it = rt.canEdit ? m : void 0,
        at = rt.canEdit ? h : void 0,
        ot = rt.canEdit ? _ : void 0,
        B = rt.canEdit ? v : void 0,
        st = he(He, Zt),
        ct = he(He, Xt),
        lt = he(He, Yt),
        ut = he(He, Jt),
        dt, ft;
    t[2] !== L || t[3] !== a ? (dt = () => {
        a?.(L)
    }, ft = [L, a], t[2] = L, t[3] = a, t[4] = dt, t[5] = ft) : (dt = t[4], ft = t[5]), (0, Z.useEffect)(dt, ft);
    let V = ce(),
        H = !x(ee),
        mt = (0, Z.useRef)(null),
        {
            footerSlot: U,
            headerActionsSlot: ht,
            children: _t
        } = Ie(f, {
            footerSlot: en,
            headerActionsSlot: nn
        }),
        yt = (0, Z.useRef)(null),
        bt = (0, Z.useRef)(null),
        xt = (0, Z.useRef)(null),
        W = n.length > 1,
        G = de,
        St = G ? `revamp` : `legacy`,
        Ct;
    t[6] === i ? Ct = t[7] : (Ct = e => {
        e.key === `Escape` && !e.defaultPrevented && (i(), e.preventDefault())
    }, t[6] = i, t[7] = Ct);
    let Tt = Ct,
        Et;
    t[8] !== z || t[9] !== I ? (Et = () => {
        z && g.logStructuredEvent(`ChatgptImageLightboxImpression`, {
            metadata: {
                sessionId: l(),
                generationId: j(z) ? z.transformationId ?? void 0 : z.generationId,
                fileId: j(z) ? z.assetPointer ?? z.id ?? void 0 : z.id,
                conversationId: z.conversationId ?? void 0,
                messageId: j(z) ? z.messageId ?? void 0 : z.sourceMessageId
            },
            source: I
        })
    }, t[8] = z, t[9] = I, t[10] = Et) : Et = t[10], Ce(Et);
    let Dt, Ot;
    t[11] !== Tt || t[12] !== G || t[13] !== A ? (Dt = () => {
        if (!(G && A == null)) return document.addEventListener(`keydown`, Tt), () => {
            document.removeEventListener(`keydown`, Tt)
        }
    }, Ot = [G, Tt, A], t[11] = Tt, t[12] = G, t[13] = A, t[14] = Dt, t[15] = Ot) : (Dt = t[14], Ot = t[15]), (0, Z.useEffect)(Dt, Ot);
    let kt;
    t[16] !== le || t[17] !== H ? (kt = e => {
        mt.current = e, !(!H || !e || le <= 0) && requestAnimationFrame(() => {
            if (mt.current !== e || e.clientWidth === 0) return;
            let t = e.clientWidth * le,
                n = e.style.scrollBehavior;
            e.style.scrollBehavior = `auto`, e.scrollLeft = t, n ? e.style.scrollBehavior = n : e.style.removeProperty(`scroll-behavior`)
        })
    }, t[16] = le, t[17] = H, t[18] = kt) : kt = t[18];
    let At = kt,
        K, jt;
    t[19] !== M || t[20] !== H || t[21] !== n.length ? (K = () => {
        if (!H || !mt.current || M) return;
        let e = mt.current,
            t = () => {
                if (e.clientWidth === 0) return;
                let t = Math.round(e.scrollLeft / e.clientWidth);
                if (!(t < 0 || t >= n.length)) {
                    if (Xe.current != null) {
                        let n = Xe.current;
                        if (!pe({
                                currentOffset: e.scrollLeft,
                                itemSize: e.clientWidth,
                                nextIndex: t,
                                targetIndex: n
                            })) return;
                        Xe.current = null
                    }
                    je(e => e === t ? e : t)
                }
            };
        return e.addEventListener(`scroll`, t, {
            passive: !0
        }), () => {
            e.removeEventListener(`scroll`, t)
        }
    }, jt = [M, H, n.length], t[19] = M, t[20] = H, t[21] = n.length, t[22] = K, t[23] = jt) : (K = t[22], jt = t[23]), (0, Z.useEffect)(K, jt);
    let Mt = it?.mode === `inpaint`,
        q = at != null,
        J = it?.mode === `annotate` && ot != null,
        Y = q || B != null || J || b != null,
        Nt = J && st === `comment`,
        X = Mt || Y,
        Lt = J && (ot?.shouldReserveFooterSpace ?? (ot?.annotations.length ?? 0) > 0) ? ot?.reserveFooterHeightClassName ?? `h-[104px]` : `h-14`,
        tn = V.formatMessage({
            id: `Xs2Rno`,
            defaultMessage: `Edit selection`
        }),
        rn = V.formatMessage({
            id: `imageGenLightbox.erase`,
            defaultMessage: `Erase`
        }),
        cn = V.formatMessage({
            id: `imageGenLightbox.addAnnotationsTitle`,
            defaultMessage: `Add comments`
        }),
        ln = H && Me < sn,
        dn = W && !X && !ln && !M,
        fn = (!X || B != null || q) && !ln,
        pn = N ? z?.title ?? null : q ? rn : Mt ? tn : J ? cn : B?.title ?? z?.title ?? null,
        mn = ge && N && (q || J) && !H,
        hn = pn ?? V.formatMessage({
            id: `QvVWgJ`,
            defaultMessage: `Media viewer`
        }),
        gn;
    t[24] === O ? gn = t[25] : (gn = e => O == null ? e : (0, Q.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-2`,
        children: [e, O]
    }), t[24] = O, t[25] = gn);
    let _n = gn,
        vn;
    t[26] !== Y || t[27] !== N ? (vn = N || Y ? (0, Q.jsx)(`div`, {
        ref: Re,
        className: `pointer-events-none absolute inset-x-0 top-full z-10`,
        "data-testid": `lightbox-zoom-controls-portal-host`
    }) : null, t[26] = Y, t[27] = N, t[28] = vn) : vn = t[28];
    let yn = vn,
        bn = I === F.CHATGPT_IMAGE_LIGHTBOX_SOURCE_TYPE_IMAGE_LIBRARY && `border-b-0!`,
        xn = N && `md:h-12!`,
        Sn;
    t[29] !== bn || t[30] !== xn ? (Sn = c(`ps-2 pe-4 md:ps-2 md:pe-4`, bn, xn), t[29] = bn, t[30] = xn, t[31] = Sn) : Sn = t[31];
    let Cn = B?.closeLabel,
        wn;
    t[32] === Cn ? wn = t[33] : (wn = (0, Q.jsx)(xe.CloseButton, {
        "aria-label": Cn
    }), t[32] = Cn, t[33] = wn);
    let Tn = D ?? (pn != null && (0, Q.jsx)(`div`, {
            "aria-label": pn,
            className: c(`text-token-text-primary min-w-0 truncate font-normal`, N ? `text-sm leading-[18px]` : `text-base`),
            title: pn,
            children: pn
        })),
        En;
    t[34] !== _n || t[35] !== Tn ? (En = _n(Tn), t[34] = _n, t[35] = Tn, t[36] = En) : En = t[36];
    let Dn;
    t[37] === En ? Dn = t[38] : (Dn = (0, Q.jsx)(`div`, {
        className: `min-w-0 flex-1`,
        children: En
    }), t[37] = En, t[38] = Dn);
    let On = ht == null ? null : (0, Q.jsx)(`div`, {
            className: `flex shrink-0 items-center gap-2`,
            "data-testid": `fullscreen-shell-header-content`,
            children: ht
        }),
        kn;
    t[39] !== Sn || t[40] !== wn || t[41] !== Dn || t[42] !== On || t[43] !== yn ? (kn = (0, Q.jsxs)(xe.Header, {
        className: Sn,
        children: [wn, Dn, On, yn]
    }), t[39] = Sn, t[40] = wn, t[41] = Dn, t[42] = On, t[43] = yn, t[44] = kn) : kn = t[44];
    let An = kn,
        jn;
    t[45] !== X || t[46] !== H || t[47] !== i ? (jn = e => {
        X || e.button !== 0 || H || i()
    }, t[45] = X, t[46] = H, t[47] = i, t[48] = jn) : jn = t[48];
    let Mn = jn,
        Nn, Pn;
    t[49] === Symbol.for(`react.memo_cache_sentinel`) ? (Nn = () => {
        if (typeof window > `u`) return;
        let e = () => {
            Ne(window.innerHeight)
        };
        return window.addEventListener(`resize`, e), () => {
            window.removeEventListener(`resize`, e)
        }
    }, Pn = [], t[49] = Nn, t[50] = Pn) : (Nn = t[49], Pn = t[50]), (0, Z.useEffect)(Nn, Pn);
    let Fn = !X && W && !M,
        In = Fn || ue,
        Ln;
    t[51] !== z || t[52] !== Mt || t[53] !== G || t[54] !== H || t[55] !== n || t[56] !== N ? (Ln = N && G && !H && !Mt && j(z) && n.every(j), t[51] = z, t[52] = Mt, t[53] = G, t[54] = H, t[55] = n, t[56] = N, t[57] = Ln) : Ln = t[57];
    let Rn = Ln,
        zn = ve && rt.canSelect && Rn && W && !M && I === F.CHATGPT_IMAGE_LIGHTBOX_SOURCE_TYPE_CONVERSATION,
        Bn = X && !Nt || !zn ? `focused` : Pe,
        Vn = Rn && Bn === `focused` && (!X || Y) && (I === F.CHATGPT_IMAGE_LIGHTBOX_SOURCE_TYPE_CONVERSATION || I === F.CHATGPT_IMAGE_LIGHTBOX_SOURCE_TYPE_IMAGE_LIBRARY),
        Hn;
    t[58] !== Y || t[59] !== Rn ? (Hn = (Rn || Y) && !p()?.hasPaidSubscription(), t[58] = Y, t[59] = Rn, t[60] = Hn) : Hn = t[60];
    let Un = Hn,
        Wn;
    if (t[61] !== zn || t[62] !== n) {
        bb0: {
            let e = new Map;
            if (!zn) {
                Wn = e;
                break bb0
            }
            n.forEach((t, n) => {
                e.set(Ft(t, n), {
                    media: t,
                    index: n
                })
            }),
            Wn = e
        }
        t[61] = zn,
        t[62] = n,
        t[63] = Wn
    }
    else Wn = t[63];
    let Gn = Wn,
        Kn;
    t[64] !== z || t[65] !== zn || t[66] !== Y || t[67] !== L || t[68] !== V || t[69] !== Rn || t[70] !== Un ? (Kn = (Rn || Y) && j(z) ? {
        id: zn ? Ft(z, L) : Te(z),
        src: ye(z, Un),
        alt: z.title?.trim() || V.formatMessage($.untitledCanvasImageLabel, {
            number: L + 1
        })
    } : null, t[64] = z, t[65] = zn, t[66] = Y, t[67] = L, t[68] = V, t[69] = Rn, t[70] = Un, t[71] = Kn) : Kn = t[71];
    let qn = Kn,
        Jn;
    bb1: {
        if (!zn) {
            let e;
            t[72] === Symbol.for(`react.memo_cache_sentinel`) ? (e = [], t[72] = e) : e = t[72], Jn = e;
            break bb1
        }
        let e;t[73] === n ? e = t[74] : (e = De(n), t[73] = n, t[74] = e);
        let r = e,
            i;
        if (t[75] !== r || t[76] !== V || t[77] !== n || t[78] !== Un) {
            let e;
            t[80] !== r || t[81] !== V || t[82] !== Un ? (e = (e, t, n) => {
                if (!j(t)) return e;
                let i = {
                    id: Ft(t, n),
                    src: ye(t, Un),
                    width: t.width > 0 ? t.width : void 0,
                    height: t.height > 0 ? t.height : void 0,
                    alt: t.title?.trim() || V.formatMessage($.untitledCanvasImageLabel, {
                        number: n + 1
                    })
                };
                return e.length === 0 || r[n] ? e.push({
                    id: i.id,
                    images: [i],
                    label: t.title?.trim() || (t.createdAt ? V.formatDate(t.createdAt, {
                        dateStyle: `medium`,
                        timeStyle: `short`
                    }) : i.alt)
                }) : e[e.length - 1].images.push(i), e
            }, t[80] = r, t[81] = V, t[82] = Un, t[83] = e) : e = t[83], i = n.reduce(e, []), t[75] = r, t[76] = V, t[77] = n, t[78] = Un, t[79] = i
        } else i = t[79];Jn = i
    }
    let Yn = Jn,
        Xn;
    bb2: {
        if (st == null || st === `navigate`) {
            Xn = void 0;
            break bb2
        }
        let e;
        if (t[84] !== ct || t[85] !== n) {
            let r;
            t[87] === ct ? r = t[88] : (r = (e, t) => j(e) && ct?.has(e.assetPointer ?? e.id) ? [Ft(e, t)] : [], t[87] = ct, t[88] = r), e = n.flatMap(r), t[84] = ct, t[85] = n, t[86] = e
        } else e = t[86];Xn = e
    }
    let Zn = Xn,
        Qn;
    t[89] !== st || t[90] !== ct || t[91] !== Gn || t[92] !== lt ? (Qn = e => {
        let t = Gn.get(e.id);
        if (t == null) return;
        let {
            media: n,
            index: r
        } = t;
        if (st === `select` && ct != null && lt != null && j(n)) {
            let e = ct.has(n.assetPointer ?? n.id);
            e || je(r), lt(n, e);
            return
        }
        je(r)
    }, t[89] = st, t[90] = ct, t[91] = Gn, t[92] = lt, t[93] = Qn) : Qn = t[93];
    let $n = Qn,
        er = qt,
        tr;
    t[94] === Gn ? tr = t[95] : (tr = e => {
        let t = Gn.get(e.id);
        return t == null ? null : er(t.media, e.alt)
    }, t[94] = Gn, t[95] = tr);
    let nr = tr,
        rr;
    t[96] !== ut || t[97] !== Pe || t[98] !== Je ? (rr = e => {
        if (e === Pe) return;
        let t = Ge.current;
        t != null && (Ge.current = null, t.oncancel = null, t.onfinish = null, t.cancel());
        let n = ze.current?.getBoundingClientRect();
        (0, on.flushSync)(() => {
            Fe(e)
        }), ut?.(e);
        let r = ze.current;
        e === `canvas` && r != null && et(r);
        let i = r?.getBoundingClientRect();
        if (Je || n == null || n.width <= 0 || n.height <= 0 || i == null || i.width <= 0 || i.height <= 0 || r == null || typeof r.animate != `function`) return;
        let a = n.left - i.left,
            o = n.top - i.top,
            s = n.width / i.width,
            c = n.height / i.height,
            l = r.animate([{
                transform: `translate(${a}px, ${o}px) scale(${s}, ${c})`,
                transformOrigin: `top left`
            }, {
                transform: `none`,
                transformOrigin: `top left`
            }], {
                duration: 450,
                easing: `cubic-bezier(0.22, 1, 0.36, 1)`,
                fill: `both`
            });
        Ge.current = l;
        let u = () => {
            Ge.current === l && (Ge.current = null, l.oncancel = null, l.onfinish = null, l.cancel())
        };
        l.oncancel = u, l.onfinish = u
    }, t[96] = ut, t[97] = Pe, t[98] = Je, t[99] = rr) : rr = t[99];
    let ir = rr,
        ar;
    t[100] === Symbol.for(`react.memo_cache_sentinel`) ? (ar = e => {
        ze.current = e, Be(e)
    }, t[100] = ar) : ar = t[100];
    let or = ar,
        sr = Ae && j(z) ? z : void 0,
        cr;
    t[101] === sr ? cr = t[102] : (cr = sr ?? {}, t[101] = sr, t[102] = cr);
    let {
        conversationId: lr,
        messageId: ur,
        assetPointer: dr
    } = cr, fr = sr?.imageGenAttribution?.is_delayed, pr = sr?.imageGenAttribution?.async_completion_id, mr;
    t[103] === sr ? mr = t[104] : (mr = sr ? ye(sr, !p()?.hasPaidSubscription()) : void 0, t[103] = sr, t[104] = mr);
    let hr = mr,
        gr, _r;
    t[105] !== R || t[106] !== dr || t[107] !== pr || t[108] !== lr || t[109] !== fr || t[110] !== ur || t[111] !== hr ? (gr = () => {
        if (!(R instanceof HTMLImageElement) || !lr || !ur || !dr || fr == null || !hr || hr.startsWith(`data:`)) return;
        let e = R,
            t = e.src;
        return gt({
            element: e,
            conversationId: lr,
            messageId: ur,
            attribution: {
                is_delayed: fr,
                async_completion_id: pr
            },
            isCurrentImage: () => ze.current === e && e.src === t
        })
    }, _r = [R, lr, ur, dr, hr, fr, pr], t[105] = R, t[106] = dr, t[107] = pr, t[108] = lr, t[109] = fr, t[110] = ur, t[111] = hr, t[112] = gr, t[113] = _r) : (gr = t[112], _r = t[113]), (0, Z.useEffect)(gr, _r);
    let vr;
    t[114] !== J || t[115] !== B || t[116] !== Y || t[117] !== V || t[118] !== q || t[119] !== Le ? (vr = e => {
        let t = (0, Q.jsx)(Pt, {
            ...e,
            helpText: q ? V.formatMessage(vt.zoomHelpText) : B == null ? J ? V.formatMessage(qe.zoomHelpText) : void 0 : V.formatMessage(Ye.zoomHelpText)
        });
        return Le == null ? Y ? t : null : (0, on.createPortal)(t, Le)
    }, t[114] = J, t[115] = B, t[116] = Y, t[117] = V, t[118] = q, t[119] = Le, t[120] = vr) : vr = t[120];
    let yr = vr,
        br = (e, t) => j(z) ? (0, Q.jsx)($e.ZoomableStage, {
            imageRef: or,
            unpadded: t,
            overflowViewportRef: Vn ? xt : void 0,
            zoomedImageLabel: qn?.alt ?? z.title ?? ``,
            onViewportInteractionStart: at == null ? B?.onViewportInteractionStart ?? (() => We.current?.()) : () => at.drawingCanvasRef.current?.cancelDrawing(),
            shouldPanOnPointerDown: B?.shouldPanOnPointerDown,
            panOnDrag: J && !q && B == null,
            renderOverlay: at == null ? B == null ? J && ot != null ? e => (0, Q.jsx)(Ke, {
                image: z,
                viewport: e,
                cancelInteractionRef: We,
                ...ot
            }) : b : t => B.renderStage({
                image: z,
                isMobile: e,
                viewport: t
            }) : e => (0, Q.jsx)(wt, {
                image: z,
                ...at,
                viewport: e
            }),
            renderZoomControls: yr
        }) : null,
        xr;
    t[121] !== L || t[122] !== n || t[123] !== ue || t[124] !== Fn ? (xr = Fn ? (0, Q.jsx)(`div`, {
        onPointerDown: Kt,
        children: (0, Q.jsx)(_e, {
            media: n,
            index: L,
            setIndex: je,
            wheelHostRef: bt
        })
    }) : ue ? (0, Q.jsx)(`div`, {
        className: `h-full w-24`
    }) : null, t[121] = L, t[122] = n, t[123] = ue, t[124] = Fn, t[125] = xr) : xr = t[125];
    let Sr = xr,
        Cr = Y && `relative isolate`,
        wr = G && (me ? `bg-(--main-surface-primary)` : `bg-token-bg-primary`),
        Tr;
    t[126] !== Cr || t[127] !== wr ? (Tr = c(`relative h-full min-h-0`, Cr, wr), t[126] = Cr, t[127] = wr, t[128] = Tr) : Tr = t[128];
    let Er = B?.onKeyDown,
        Dr = G && Ee ? Mn : void 0,
        Or;
    t[129] !== R || t[130] !== y ? (Or = y?.(R), t[129] = R, t[130] = y, t[131] = Or) : Or = t[131];
    let kr;
    t[132] !== B || t[133] !== H ? (kr = B == null ? null : (0, Q.jsx)(`div`, {
        className: c(`pointer-events-none absolute inset-x-0 top-16 z-50 flex justify-center px-4`, !H && `md:top-2`),
        children: (0, Q.jsx)(`div`, {
            className: `pointer-events-auto max-w-full min-w-0`,
            onPointerDown: Gt,
            children: B.toolbar
        })
    }), t[132] = B, t[133] = H, t[134] = kr) : kr = t[134];
    let Ar = H ? (0, Q.jsxs)(`div`, {
            className: `grid h-full min-h-0 w-full grid-rows-[minmax(0,1fr)_auto] overflow-hidden`,
            children: [(0, Q.jsx)(`ol`, {
                ref: At,
                "data-testid": `lightbox-mobile-carousel`,
                className: c(`no-scrollbar flex h-full snap-x snap-mandatory scroll-smooth`, Y && `invisible col-start-1 row-start-1`, X || M ? `overflow-hidden` : `overflow-x-auto`),
                children: n.map((e, t) => {
                    let n = `${Te(e)}-${t}`,
                        r = Mt && it != null && j(e) && t === L ? {
                            image: e,
                            drawingState: it.drawingState,
                            drawingCanvasRef: it.drawingCanvasRef
                        } : null;
                    return (0, Q.jsx)(`li`, {
                        "data-position": t,
                        className: c(`flex h-full w-full flex-shrink-0 snap-start snap-always items-center justify-center px-4`, y != null && `pb-24`, fn && `pt-4`),
                        children: r ? (0, Q.jsx)(pt, {
                            image: r.image,
                            drawingState: r.drawingState,
                            drawingCanvasRef: r.drawingCanvasRef
                        }) : (0, Q.jsx)(It, {
                            media: e,
                            presentation: `mobile`,
                            isActiveSlide: t === L,
                            imageRef: t === L && !Y ? or : void 0
                        })
                    }, n)
                })
            }), Y && qn != null ? (0, Q.jsx)(`div`, {
                className: c(`relative col-start-1 row-start-1 h-full min-h-0 min-w-0 px-4`, y != null && `pb-24`, fn && `pt-4`),
                children: (0, Q.jsx)($e, {
                    image: qn,
                    children: br(!0, !0)
                })
            }) : null, (0, Q.jsxs)(`div`, {
                className: c(`no-scrollbar flex flex-col gap-2`, !q && `py-4`, J || R != null ? `overflow-visible` : `overflow-hidden`),
                children: [(0, Q.jsx)(`div`, {
                    ref: Ue,
                    className: `empty:hidden`
                }), dn && (0, Q.jsx)(ke, {
                    media: n,
                    index: L,
                    setIndex: je,
                    carouselRef: mt,
                    externalSyncTargetIndexRef: Xe
                }), q ? (0, Q.jsx)(`div`, {
                    className: `hidden`,
                    children: U
                }) : (0, Q.jsx)(`div`, {
                    className: c(`px-4`, J && `flex items-end overflow-visible transition-[height] duration-200 ease-out motion-reduce:transition-none`, J && Lt),
                    children: U
                })]
            })]
        }) : Rn && qn != null ? (0, Q.jsxs)(`div`, {
            ref: xt,
            className: c(`relative grid h-full min-h-0 w-full grid-rows-[minmax(0,1fr)_auto] justify-items-center overflow-y-auto overscroll-contain px-4 pb-9`, Vn && `has-[[data-zoomed=true]]:overflow-hidden`),
            "data-artifact-preview-scroll-root": !0,
            children: [zn && !X ? (0, Q.jsxs)(`div`, {
                role: `group`,
                "aria-label": V.formatMessage($.imageViewToggleLabel),
                className: `bg-token-bg-elevated-primary border-token-border-default absolute start-2 top-2 z-40 inline-flex -translate-y-px items-center gap-0.5 rounded-full border p-1 shadow-sm`,
                onPointerDown: Wt,
                children: [(0, Q.jsx)(`button`, {
                    type: `button`,
                    "aria-label": V.formatMessage($.focusedViewLabel),
                    "aria-pressed": Bn === `focused`,
                    className: c(`interactive-button focus-visible:ring-token-focus flex size-8 items-center justify-center rounded-full focus-visible:ring-2 focus-visible:outline-none`, Bn === `focused` ? `bg-token-text-primary/5 text-token-text-primary hover:bg-token-text-primary/10` : `text-token-text-tertiary hover:bg-token-bg-secondary`),
                    onClick: () => ir(`focused`),
                    children: (0, Q.jsx)(Qe, {
                        className: `icon-sm`,
                        "aria-hidden": `true`
                    })
                }), (0, Q.jsx)(`button`, {
                    type: `button`,
                    "aria-label": V.formatMessage($.canvasViewLabel),
                    "aria-pressed": Bn === `canvas`,
                    className: c(`interactive-button focus-visible:ring-token-focus flex size-8 items-center justify-center rounded-full focus-visible:ring-2 focus-visible:outline-none`, Bn === `canvas` ? `bg-token-text-primary/5 text-token-text-primary hover:bg-token-text-primary/10` : `text-token-text-tertiary hover:bg-token-bg-secondary`),
                    onClick: () => ir(`canvas`),
                    children: (0, Q.jsx)(tt, {
                        className: `icon-sm`,
                        "aria-hidden": `true`
                    })
                })]
            }) : null, (0, Q.jsx)(`div`, {
                ref: bt,
                className: c(`h-full min-h-0 w-full pt-10`, y == null ? `pb-6` : `pb-32`, Vn && `[&_[data-zoomed=true]]:overflow-visible!`, `[--color-border-subtle:var(--border-light)] [--shadow-300:var(--shadow-lg)]`, `[--image-viewer-canvas-selection-shadow:0_0_0_2px_var(--bg-primary),0_0_0_4px_var(--border-heavy)]`),
                onPointerDown: Ut,
                children: (0, Q.jsxs)($e, {
                    image: qn,
                    children: [Fn && Bn === `focused` ? (0, Q.jsx)(`div`, {
                        className: `absolute inset-y-0 -start-6 z-10 flex items-center`,
                        children: Sr
                    }) : null, Bn === `canvas` ? (0, Q.jsx)($e.Canvas, {
                        groups: Yn,
                        activeImageId: qn.id,
                        activeImageRef: or,
                        onSelectImage: $n,
                        selectedImageIds: Zn,
                        renderImage: Nt ? nr : void 0
                    }) : Vn || Y ? br(!1, !1) : (0, Q.jsx)($e.Stage, {
                        imageRef: or
                    })]
                })
            }), (0, Q.jsx)(`div`, {
                className: c(`flex w-full items-end justify-center`, Vn && `pointer-events-none relative z-10`, U != null && `min-h-16`),
                onPointerDown: Ht,
                children: U
            })]
        }) : (0, Q.jsxs)(`div`, {
            ref: bt,
            className: c(`grid h-full w-full items-center overflow-y-auto overscroll-contain`, Oe ? `grid-cols-[auto_minmax(0,1fr)_auto]` : G && In ? `grid-cols-[auto_1fr]` : G ? `grid-cols-[1fr]` : `grid-cols-[1fr_auto]`),
            "data-artifact-preview-scroll-root": !0,
            children: [!G && Oe ? (0, Q.jsx)(`div`, {
                className: `h-full w-24`
            }) : null, G && In ? Sr : null, (0, Q.jsxs)(`div`, {
                className: `grid h-full min-h-0 w-full grid-rows-[minmax(0,1fr)_auto] justify-items-center px-4 pb-9`,
                children: [z && (0, Q.jsx)(`div`, {
                    onPointerDown: Vt,
                    className: c(`h-full min-h-0 w-full pt-9`, y == null ? `pb-9` : `pb-32`),
                    children: Y && qn != null ? (0, Q.jsx)($e, {
                        image: qn,
                        children: br(!1, !0)
                    }) : Mt && j(z) ? (0, Q.jsx)(pt, {
                        image: z,
                        drawingState: it.drawingState,
                        drawingCanvasRef: it.drawingCanvasRef
                    }) : (0, Q.jsx)(`div`, {
                        className: c(`relative flex h-full items-center justify-center`, B == null && (G ? me ? `bg-(--main-surface-primary) rounded` : `bg-token-bg-primary rounded` : `rounded bg-neutral-100`)),
                        children: (0, Q.jsx)(It, {
                            media: z,
                            presentation: `desktop`,
                            isActiveSlide: !0,
                            imageRef: or
                        })
                    })
                }, Te(z)), (0, Q.jsx)(`div`, {
                    className: c(`flex w-full justify-center`, J && `items-end overflow-visible transition-[height] duration-200 ease-out motion-reduce:transition-none`, J && Lt),
                    onPointerDown: Bt,
                    children: U
                })]
            }), G && Oe ? (0, Q.jsx)(`div`, {
                className: `h-full w-24`
            }) : null, G ? null : Sr]
        }),
        jr;
    t[135] !== Tr || t[136] !== Er || t[137] !== Dr || t[138] !== Or || t[139] !== kr || t[140] !== Ar ? (jr = (0, Q.jsxs)(`div`, {
        className: Tr,
        "data-testid": `lightbox-new-body-surface`,
        role: `presentation`,
        onKeyDown: Er,
        onPointerDown: Dr,
        children: [Or, kr, Ar]
    }), t[135] = Tr, t[136] = Er, t[137] = Dr, t[138] = Or, t[139] = kr, t[140] = Ar, t[141] = jr) : jr = t[141];
    let Mr = jr,
        Nr = un,
        Pr = Bn === `focused` ? R : null,
        Fr;
    t[142] !== z || t[143] !== St || t[144] !== L || t[145] !== Ve || t[146] !== Pr ? (Fr = {
        activeMedia: z,
        activeImage: Pr,
        mobileImageActionsHost: Ve,
        index: L,
        headerVariant: St
    }, t[142] = z, t[143] = St, t[144] = L, t[145] = Ve, t[146] = Pr, t[147] = Fr) : Fr = t[147];
    let Ir = A == null ? G ? (0, Q.jsxs)(xe, {
            open: !0,
            onOpenChange: e => {
                e || i()
            },
            accessibleTitle: hn,
            contentRef: yt,
            onOpenAutoFocus: ae,
            onEscapeKeyDown: B?.onEscapeKeyDown,
            children: [An, (0, Q.jsxs)(xe.Contents, {
                className: `overflow-hidden`,
                children: [Mr, _t]
            })]
        }) : (0, Q.jsx)(k.Root, {
            isOpen: !0,
            onClose: i,
            testId: `modal-lightbox-new`,
            shouldIgnoreClickOutside: X || be,
            children: (0, Q.jsx)(k.Overlay, {
                children: (0, Q.jsxs)(k.Content, {
                    size: `fullscreen`,
                    removePopoverStyling: !0,
                    removeBackground: P,
                    className: c(`grid min-h-0 grid-rows-[auto_minmax(0,1fr)] overflow-hidden`, P && `bg-token-bg-primary/50 dark:bg-token-bg-primary/75 starting:backdrop-blur-0 backdrop-blur-lg ease-out motion-safe:transition-[filter,background-color] starting:opacity-0`),
                    onPointerDownInside: Ee ? Mn : void 0,
                    onPointerDownOutside: X || be ? zt : void 0,
                    children: [(0, Q.jsx)(k.Header, {
                        title: hn,
                        visuallyHiddenHeader: !0
                    }), (0, Q.jsx)(`div`, {
                        onPointerDown: Rt,
                        children: (0, Q.jsxs)($t, {
                            children: [(0, Q.jsxs)(`div`, {
                                className: `grid w-full grid-cols-[auto_1fr] items-start justify-between gap-1 md:gap-2`,
                                children: [(0, Q.jsx)(Se, {
                                    icon: d,
                                    onClick: i,
                                    "aria-label": B?.closeLabel ?? V.formatMessage({
                                        id: `EYLKSm`,
                                        defaultMessage: `Close`
                                    })
                                }), _n(pn && (0, Q.jsx)(`h2`, {
                                    className: c(`line-clamp-1 self-center text-base font-medium`, !fe(z) && `md:line-clamp-none`),
                                    children: pn
                                }))]
                            }), ht]
                        })
                    }), Mr, _t]
                })
            })
        }) : A({
            accessibleTitle: hn,
            body: (0, Q.jsxs)(Q.Fragment, {
                children: [Mr, _t]
            }),
            floatingToolbar: mn ? ht : null,
            headerActions: mn ? null : ht,
            headerTitleContent: D,
            renderHeaderTitle: _n,
            hideCloseButton: !1,
            onClose: i,
            title: pn,
            zoomControlsPortalHost: yn
        }),
        Lr;
    return t[148] !== Nr.Provider || t[149] !== Fr || t[150] !== Ir ? (Lr = (0, Q.jsx)(Nr.Provider, {
        value: Fr,
        children: Ir
    }), t[148] = Nr.Provider, t[149] = Fr, t[150] = Ir, t[151] = Lr) : Lr = t[151], Lr
}

function Rt(e) {
    return e.stopPropagation()
}

function zt(e) {
    return e.preventDefault()
}

function Bt(e) {
    return e.stopPropagation()
}

function Vt(e) {
    return e.stopPropagation()
}

function Ht(e) {
    return e.stopPropagation()
}

function Ut(e) {
    return e.stopPropagation()
}

function Wt(e) {
    return e.stopPropagation()
}

function Gt(e) {
    return e.stopPropagation()
}

function Kt(e) {
    return e.stopPropagation()
}

function qt(e, t) {
    return j(e) ? (0, Q.jsx)(We, {
        image: e,
        imageLabel: t
    }) : null
}

function Jt(e) {
    return e?.onViewChange
}

function Yt(e) {
    return e?.onImageActivate
}

function Xt(e) {
    return e?.activeTool == null ? void 0 : e.attachmentIds
}

function Zt(e) {
    return e?.activeTool
}

function Qt() {
    return typeof window > `u` ? 640 : window.innerHeight
}

function $t(e) {
    "use forget";
    let t = (0, an.c)(2),
        {
            children: n
        } = e,
        r;
    return t[0] === n ? r = t[1] : (r = (0, Q.jsx)(`header`, {
        className: `grid w-full grid-cols-[auto_1fr] gap-1 p-2`,
        children: n
    }), t[0] = n, t[1] = r), r
}

function en(e) {
    "use forget";
    let t = (0, an.c)(9),
        {
            children: n,
            inert: r
        } = e,
        {
            activeMedia: i
        } = (0, Z.useContext)(un),
        a;
    t[0] !== i || t[1] !== n ? (a = typeof n == `function` ? n({
        activeMedia: i
    }) : n, t[0] = i, t[1] = n, t[2] = a) : a = t[2];
    let o = a,
        s = r ? `pointer-events-none` : `pointer-events-auto`,
        l;
    t[3] === s ? l = t[4] : (l = c(`w-full max-w-3xl`, s), t[3] = s, t[4] = l);
    let u = r || void 0,
        d;
    return t[5] !== o || t[6] !== l || t[7] !== u ? (d = (0, Q.jsx)(`footer`, {
        className: l,
        inert: u,
        children: o
    }), t[5] = o, t[6] = l, t[7] = u, t[8] = d) : d = t[8], d
}

function tn(e) {
    "use forget";
    let t = (0, an.c)(12),
        {
            children: n,
            inert: r
        } = e,
        {
            activeImage: i,
            mobileImageActionsHost: a
        } = (0, Z.useContext)(un),
        [o, s] = (0, Z.useState)(null),
        c = (0, Z.useRef)(null),
        l, u;
    t[0] !== i || t[1] !== o ? (l = () => {
        let e = c.current;
        if (i == null || o == null || e == null) return;
        let t = Le(i, o, () => {
            let t = i.getBoundingClientRect().bottom,
                n = o.getBoundingClientRect().top;
            e.style.transform = `translateY(${t-n}px)`
        }, {
            animationFrame: !0
        });
        return () => {
            t(), e.style.transform = ``
        }
    }, u = [i, o], t[0] = i, t[1] = o, t[2] = l, t[3] = u) : (l = t[2], u = t[3]), (0, Z.useEffect)(l, u);
    let d = r || void 0,
        f;
    t[4] === n ? f = t[5] : (f = (0, Q.jsx)(`div`, {
        ref: c,
        className: `flex justify-center pt-4`,
        children: n
    }), t[4] = n, t[5] = f);
    let p;
    t[6] !== d || t[7] !== f ? (p = (0, Q.jsx)(`div`, {
        ref: s,
        className: `w-full`,
        inert: d,
        children: f
    }), t[6] = d, t[7] = f, t[8] = p) : p = t[8];
    let m = p,
        h;
    return t[9] !== m || t[10] !== a ? (h = a == null ? m : (0, on.createPortal)(m, a), t[9] = m, t[10] = a, t[11] = h) : h = t[11], h
}

function nn(e) {
    "use forget";
    let t = (0, an.c)(12),
        {
            children: n,
            inert: r
        } = e,
        {
            activeMedia: i,
            headerVariant: a
        } = (0, Z.useContext)(un),
        o;
    if (t[0] !== i || t[1] !== n || t[2] !== a) {
        let e = typeof n == `function` ? n({
            activeMedia: i,
            headerVariant: a
        }) : n;
        o = [], Z.Children.forEach(e, e => {
            (0, Z.isValidElement)(e) && o.push(e)
        }), t[0] = i, t[1] = n, t[2] = a, t[3] = o
    } else o = t[3];
    let s = r && `pointer-events-none`,
        l;
    t[4] === s ? l = t[5] : (l = c(`ms-auto flex items-baseline justify-end gap-2`, s), t[4] = s, t[5] = l);
    let u = r || void 0,
        d;
    t[6] === o ? d = t[7] : (d = o.map(rn), t[6] = o, t[7] = d);
    let f;
    return t[8] !== l || t[9] !== u || t[10] !== d ? (f = (0, Q.jsx)(`div`, {
        className: l,
        inert: u,
        children: d
    }), t[8] = l, t[9] = u, t[10] = d, t[11] = f) : f = t[11], f
}

function rn(e, t) {
    return (0, Q.jsx)(Z.Fragment, {
        children: e
    }, t)
}
var an, Z, on, Q, $, sn, cn, ln, un, dn, fn = e((() => {
    an = se(), ve(), ue(), L(), f(), h(), Fe(), de(), ht(), _t(), Ge(), Je(), Ue(), Xe(), yt(), Tt(), Ee(), r(), C(), u(), T(), E(), N(), Re(), ge(), nt(), w(), i(), Z = n(ie()), on = n(te()), re(), Oe(), be(), Nt(), I(), me(), M(), Q = A(), $ = ne({
        imageViewToggleLabel: {
            id: `imageGenLightbox.imageViewToggleLabel`,
            defaultMessage: `Image view`
        },
        focusedViewLabel: {
            id: `imageGenLightbox.focusedViewLabel`,
            defaultMessage: `Focused view`
        },
        canvasViewLabel: {
            id: `imageGenLightbox.canvasViewLabel`,
            defaultMessage: `Canvas view`
        },
        zoomLevelLabel: {
            id: `imageGenLightbox.zoomLevelLabel`,
            defaultMessage: `Zoom level, {zoomPercent, number}%`
        },
        zoomPercentLabel: {
            id: `imageGenLightbox.zoomPercentLabel`,
            defaultMessage: `{zoomPercent, number}%`
        },
        fitZoomLabel: {
            id: `imageGenLightbox.fitZoomLabel`,
            defaultMessage: `Fit`
        },
        untitledCanvasImageLabel: {
            id: `imageGenLightbox.untitledCanvasImageLabel`,
            defaultMessage: `Image {number, number}`
        }
    }), sn = 400, cn = [25, 50, 75, 100, 125, 150, 200, 300, 400, 500], ln = `z-[130]`, un = (0, Z.createContext)({
        activeMedia: void 0,
        index: 0,
        headerVariant: `legacy`
    }), dn = {
        Root: Lt,
        Header: $t,
        Footer: en,
        ImageActions: tn,
        LightboxHeaderActions: nn,
        Context: un
    }
}));
export {
    fn as n, X as r, dn as t
};
//# sourceMappingURL=44fdb285-j8bl1zghhcdyy52c.js.map
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    A0 as r,
    A5 as i,
    A8 as a,
    Ait as o,
    E0 as s,
    IR as c,
    J5 as l,
    JR as u,
    RR as d,
    Ua as f,
    Wa as p,
    XR as m,
    YR as ee,
    cst as te,
    eE as ne,
    f0 as re,
    jit as ie,
    lF as ae,
    p0 as oe,
    rit as se,
    rz as ce,
    sit as h,
    sst as g,
    vF as _,
    w0 as v
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    Bn as le,
    Lt as ue,
    Nn as y,
    Q as de,
    Rn as fe,
    Vn as b,
    it as pe,
    wn as me,
    zn as he
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    C7 as ge,
    Ffn as _e,
    GMn as ve,
    Ifn as ye,
    Rfn as be,
    S7 as xe,
    SZ as x,
    T7 as Se,
    WMn as Ce,
    b7 as we,
    dY as S,
    dpn as Te,
    fY as Ee,
    fpn as De,
    ppn as C,
    vZ as Oe,
    x7 as ke,
    y7 as w
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    TC as T,
    wC as E
} from "./30901919-lc79rizhhepnsl3q.js";
import {
    Bl as Ae,
    Il as je,
    Jl as D,
    Ks as Me,
    Ll as O,
    O_ as k,
    On as Ne,
    Pl as Pe,
    Rl as Fe,
    Xh as Ie,
    Xl as Le,
    Yh as Re,
    i_ as ze,
    k_ as Be,
    kn as A,
    qs as j,
    t_ as M
} from "./8b34dbc2-ik628tlti8ozm9vq.js";
import {
    a as Ve,
    c as N,
    i as P,
    l as He,
    n as F,
    o as I,
    r as Ue,
    s as We,
    t as Ge,
    u as Ke
} from "./cbffa3f1-k3sx0qcgth44m4c4.js";

function qe(e) {
    return e.description ?? e.title
}

function Je(e) {
    return {
        id: B,
        title: qe(e),
        kind: `prompt_collection`,
        presentation: `image_card`,
        action: e.action ?? nt,
        items: [e],
        capabilities: []
    }
}

function Ye({
    suggestedPromptGroups: e,
    promptItemId: t
}) {
    let n = !1,
        r = e.flatMap(e => {
            if (e.kind !== `prompt_collection` || e.items == null) return [e];
            let r = e.items.filter(e => e.id !== t);
            return r.length === e.items.length ? [e] : (n = !0, r.length > 0 ? [{
                ...e,
                items: r
            }] : [])
        });
    return n ? r : e
}

function Xe() {
    r(), d({
        authSessionLoggingId: v(),
        actionType: u.ACCESS_FLOW_ENTRY_ACTION_TYPE_LOGIN_OR_SIGNUP,
        entryPoint: ee.ACCESS_FLOW_ENTRY_POINT_LOGIN_MODAL,
        entryTrigger: m.ACCESS_FLOW_ENTRY_TRIGGER_AUTOMATIC,
        cta: V
    })
}

function L(e) {
    let t = e ? h(e) : null;
    return t ? `/${t}/images` : `/images`
}

function Ze(e) {
    "use forget";
    let t = (0, et.c)(16),
        {
            trendTitle: n
        } = e,
        r = he(),
        {
            lang: i
        } = ue(),
        a;
    t[0] === i ? a = t[1] : (a = L(i), t[0] = i, t[1] = a);
    let o = a,
        s;
    t[2] === r ? s = t[3] : (s = r.formatMessage({
        id: `image-gen.images-app.trending.breadcrumb.aria_label`,
        defaultMessage: `Images breadcrumb`
    }), t[2] = r, t[3] = s);
    let c;
    t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, z.jsx)(y, {
        ...He
    }), t[4] = c) : c = t[4];
    let l;
    t[5] === o ? l = t[6] : (l = (0, z.jsx)(`li`, {
        className: `min-w-0 shrink-0`,
        children: (0, z.jsx)(pe, {
            className: `text-token-text-primary hover:bg-token-bg-secondary focus-visible:bg-token-bg-secondary inline-flex items-center rounded-full px-3 py-1 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current`,
            to: o,
            children: c
        })
    }), t[5] = o, t[6] = l);
    let u;
    t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, z.jsx)(`li`, {
        "aria-hidden": `true`,
        className: `flex shrink-0 items-center`,
        children: (0, z.jsx)(E, {
            className: `size-3`
        })
    }), t[7] = u) : u = t[7];
    let d;
    t[8] === n ? d = t[9] : (d = (0, z.jsx)(`li`, {
        "aria-current": `page`,
        className: `min-w-0 truncate px-2`,
        children: n
    }), t[8] = n, t[9] = d);
    let f;
    t[10] !== l || t[11] !== d ? (f = (0, z.jsxs)(`ol`, {
        className: `text-token-text-tertiary flex max-w-[min(420px,calc(100vw-32px))] min-w-0 items-center text-base leading-5`,
        children: [l, u, d]
    }), t[10] = l, t[11] = d, t[12] = f) : f = t[12];
    let p;
    return t[13] !== s || t[14] !== f ? (p = (0, z.jsx)(`nav`, {
        "aria-label": s,
        className: `absolute start-4 top-4 z-10 max-md:hidden`,
        children: f
    }), t[13] = s, t[14] = f, t[15] = p) : p = t[15], p
}

function Qe() {
    return _e()
}

function $e() {
    return ye()
}
var et, R, z, tt, B, V, nt, H, U, rt = e((() => {
    et = me(), ne(), c(), k(), _(), p(), T(), Re(), O(), M(), ge(), C(), be(), s(), w(), D(), a(), S(), j(), re(), x(), N(), I(), P(), A(), Ke(), F(), o(), se(), g(), ce(), ve(), R = t(b()), fe(), de(), z = le(), tt = [], B = `images_trending_template`, V = `images_trending_page_try_it`, nt = {
        input_requirements: {
            source: `camera_or_gallery`
        },
        strategy: `auto_send`
    }, H = e => {
        "use forget";
        let t = (0, et.c)(11),
            n = (0, R.use)(ae),
            r;
        t[0] === n ? r = t[1] : (r = te(n), t[0] = n, t[1] = r);
        let i = r,
            a;
        t[2] !== i || t[3] !== e ? (a = () => {
            (e.promptItem.action ?? nt).strategy === `auto_send` && Le(i), e.onTryIt?.()
        }, t[2] = i, t[3] = e, t[4] = a) : a = t[4];
        let o = a,
            s;
        t[5] !== o || t[6] !== e ? (s = (0, z.jsx)(U, {
            ...e,
            onFilesSelected: o
        }, e.promptItem.id), t[5] = o, t[6] = e, t[7] = s) : s = t[7];
        let c;
        return t[8] !== o || t[9] !== s ? (c = (0, z.jsx)(Ge, {
            onFilesSelected: o,
            children: s
        }), t[8] = o, t[9] = s, t[10] = c) : c = t[10], c
    }, U = e => {
        "use forget";
        let t = (0, et.c)(108),
            {
                promptItem: r,
                showAllPromptItems: a,
                showPromptVariationDisclosure: o,
                isPromptAltered: s,
                showPromptTextPreview: c,
                onTryItSelected: u,
                onTryIt: d,
                onFilesSelected: p
            } = e,
            m = a !== void 0 && a,
            ee = o !== void 0 && o,
            ne = s !== void 0 && s,
            re = c !== void 0 && c,
            se = (0, R.use)(f),
            ce = (0, R.use)(ae),
            h;
        t[0] === ce ? h = t[1] : (h = te(ce), t[0] = ce, t[1] = h);
        let g = h,
            _ = Be(),
            v = Ie(),
            le = (0, R.useRef)(0),
            ue;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (ue = () => () => {
            le.current += 1
        }, t[2] = ue) : ue = t[2];
        let de;
        t[3] !== _ || t[4] !== g ? (de = [_, g], t[3] = _, t[4] = g, t[5] = de) : de = t[5], (0, R.useEffect)(ue, de);
        let fe;
        t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (fe = ie(), t[6] = fe) : fe = t[6];
        let b = fe,
            pe = l(we),
            me = l(Qe),
            he = l($e),
            ge = he.groups ?? tt,
            _e;
        t[7] !== r.id || t[8] !== ge ? (_e = Ye({
            suggestedPromptGroups: ge,
            promptItemId: r.id
        }), t[7] = r.id, t[8] = ge, t[9] = _e) : _e = t[9];
        let ve = _e,
            ye;
        t[10] === r ? ye = t[11] : (ye = De(r), t[10] = r, t[11] = ye);
        let be = ye,
            x;
        t[12] === r ? x = t[13] : (x = qe(r), t[12] = r, t[13] = x);
        let S = x,
            C = r.action ?? nt,
            w = C.input_requirements?.source ?? `prompt_only`,
            T = w === `sketch` && d == null,
            E;
        t[14] !== _ || t[15] !== g || t[16] !== T ? (E = () => T && Oe(g)?.some(Ee) === !0 && Me(_).controller$()?.canOpenSketch === !0, t[14] = _, t[15] = g, t[16] = T, t[17] = E) : E = t[17];
        let D = l(E),
            O;
        t[18] !== _ || t[19] !== v || t[20] !== T ? (O = () => {
            if (!T) return !1;
            let e = Me(_).controller$();
            return v.files$().some(t => e?.isSketchUploadInFlight(t.tempId) === !0)
        }, t[18] = _, t[19] = v, t[20] = T, t[21] = O) : O = t[21];
        let k = l(O),
            Re = w !== `prompt_only` && w !== `styles` && w !== `sketch`,
            A = d != null && C.strategy === `auto_send` && Re && (C.input_requirements?.min_count ?? 0) === 0,
            j = d != null && (C.input_requirements?.min_count ?? 0) > 0,
            M = b && C.strategy === `auto_send` && Re,
            N;
        t[22] !== g || t[23] !== r ? (N = () => {
            let e = Je(r),
                t = xe(e.items, r.id),
                n = Ce.CHATGPT_IMAGE_PROMPT_SENT_SURFACE_TYPE_IMAGES;
            return Se({
                item: r,
                group: e,
                position: t,
                surface: n
            }), Fe(g, r), {
                promptItem: r,
                group: e,
                surface: n,
                position: t
            }
        }, t[22] = g, t[23] = r, t[24] = N) : N = t[24];
        let P = N,
            He;
        t[25] !== A || t[26] !== D || t[27] !== _ || t[28] !== g || t[29] !== v || t[30] !== w || t[31] !== T || t[32] !== d || t[33] !== u || t[34] !== se || t[35] !== r || t[36] !== P ? (He = e => {
            let t = e !== void 0 && e;
            if (u?.(), !b) {
                Xe(), oe({
                    fallbackScreenHint: `login_or_signup`,
                    skipLoginModal: !1,
                    loginModalSubtitleVariant: `create-image-trending`,
                    callbackUrl: window.location.href
                });
                return
            }
            let n = P(),
                {
                    group: a,
                    position: o,
                    surface: s
                } = n;
            if (T) {
                if (!D) return;
                let e = le.current + 1,
                    t = () => le.current === e;
                Me(_).controller$()?.openNewSketch({
                    isRequestCurrent: t,
                    onUploadComplete: e => {
                        !t() || !ie() || (ze.set(g, n), je({
                            conversation: g,
                            tempIds: [e],
                            filePickerStore: v
                        }))
                    }
                }) && (le.current = e);
                return
            }
            if (d != null && a.action.strategy === `prefill_composer`) {
                d();
                return
            }
            if (w === `prompt_only` || w === `styles` || A && !t) {
                Le(g), d?.(), Pe({
                    conversation: g,
                    group: a,
                    promptItem: r,
                    surface: s,
                    position: o
                });
                return
            }
            ke({
                openDialog: se,
                openPicker: () => {
                    i(() => {
                        ze.set(g, n), Ae({
                            source: w === `camera` ? `camera` : `photos`
                        })
                    })
                }
            })
        }, t[25] = A, t[26] = D, t[27] = _, t[28] = g, t[29] = v, t[30] = w, t[31] = T, t[32] = d, t[33] = u, t[34] = se, t[35] = r, t[36] = P, t[37] = He) : He = t[37];
        let F = He,
            I;
        t[38] === r.title ? I = t[39] : (I = b && (0, z.jsx)(Ze, {
            trendTitle: r.title
        }), t[38] = r.title, t[39] = I);
        let Ge;
        t[40] === Symbol.for(`react.memo_cache_sentinel`) ? (Ge = (0, z.jsx)(We, {}), t[40] = Ge) : Ge = t[40];
        let Ke = T || d != null && !M,
            L;
        t[41] !== M || t[42] !== g || t[43] !== d || t[44] !== u || t[45] !== r.id || t[46] !== P ? (L = () => {
            d == null || !M || ze(g)?.promptItem?.id === r.id || (u?.(), ze.set(g, P()))
        }, t[41] = M, t[42] = g, t[43] = d, t[44] = u, t[45] = r.id, t[46] = P, t[47] = L) : L = t[47];
        let B;
        t[48] !== M || t[49] !== p || t[50] !== d ? (B = e => {
            d != null && M && e.length > 0 && p()
        }, t[48] = M, t[49] = p, t[50] = d, t[51] = B) : B = t[51];
        let V;
        t[52] !== be || t[53] !== r ? (V = be && (0, z.jsx)(`div`, {
            className: `bg-token-bg-secondary mb-7 w-full max-w-90 overflow-hidden rounded-3xl shadow-xs md:max-w-128`,
            children: (0, z.jsx)(`img`, {
                alt: Te(r),
                className: `aspect-[5/4] w-full object-cover md:aspect-[4/3]`,
                fetchPriority: `high`,
                src: be
            })
        }), t[52] = be, t[53] = r, t[54] = V) : V = t[54];
        let H;
        t[55] === S ? H = t[56] : (H = (0, z.jsx)(`h1`, {
            className: `text-token-text-primary max-w-[720px] text-3xl leading-tight font-semibold text-balance max-md:text-2xl`,
            children: S
        }), t[55] = S, t[56] = H);
        let U;
        t[57] !== S || t[58] !== r.prompt_text || t[59] !== re ? (U = re && r.prompt_text?.trim() && (0, z.jsx)(`div`, {
            className: `border-token-border-light focus-within:border-token-border-heavy mt-4 w-full max-w-128 rounded-xl border px-3 py-2`,
            children: (0, z.jsx)(`textarea`, {
                "aria-label": S,
                className: `text-token-text-secondary field-sizing-content max-h-[3lh] min-h-[2lh] w-full resize-none overflow-y-auto border-0 bg-transparent p-0 text-start text-sm leading-5 focus:ring-0 focus:outline-none`,
                readOnly: !0,
                rows: 2,
                spellCheck: !1,
                value: r.prompt_text
            })
        }), t[57] = S, t[58] = r.prompt_text, t[59] = re, t[60] = U) : U = t[60];
        let rt = k || b && T && !D || pe && b && Re && C.strategy === `auto_send` && !A,
            W;
        t[61] === F ? W = t[62] : (W = () => F(), t[61] = F, t[62] = W);
        let G;
        t[63] !== C.strategy || t[64] !== d || t[65] !== j ? (G = b && j && C.strategy === `auto_send` ? (0, z.jsx)(y, {
            id: `image-gen.images-app.trending.cta.add_image`,
            defaultMessage: `Try it with an image`
        }) : b && j ? (0, z.jsx)(y, {
            id: `image-gen.images-app.trending.cta.edit_and_add_image`,
            defaultMessage: `Edit prompt and add an image`
        }) : b && d != null ? (0, z.jsx)(y, {
            id: `image-gen.images-app.trending.cta.prompt_share`,
            defaultMessage: `Try this prompt`
        }) : b ? (0, z.jsx)(y, {
            id: `image-gen.images-app.trending.cta.try`,
            defaultMessage: `Try it`
        }) : (0, z.jsx)(y, {
            id: `image-gen.images-app.trending.cta.login`,
            defaultMessage: `Log in to try it`
        }), t[63] = C.strategy, t[64] = d, t[65] = j, t[66] = G) : G = t[66];
        let K;
        t[67] !== k || t[68] !== rt || t[69] !== W || t[70] !== G ? (K = (0, z.jsx)(n, {
            className: `min-w-44 rounded-full px-8`,
            color: `primary`,
            disabled: rt,
            loading: k,
            onClick: W,
            size: `large`,
            type: `button`,
            children: G
        }), t[67] = k, t[68] = rt, t[69] = W, t[70] = G, t[71] = K) : K = t[71];
        let q;
        t[72] !== A || t[73] !== pe || t[74] !== F ? (q = b && A && (0, z.jsx)(n, {
            className: `min-w-44 rounded-full px-8`,
            color: `secondary`,
            disabled: pe,
            onClick: () => F(!0),
            size: `large`,
            type: `button`,
            children: (0, z.jsx)(y, {
                id: `image-gen.images-app.trending.cta.try_with_image`,
                defaultMessage: `Try with an image`
            })
        }), t[72] = A, t[73] = pe, t[74] = F, t[75] = q) : q = t[75];
        let J;
        t[76] !== K || t[77] !== q ? (J = (0, z.jsxs)(`div`, {
            className: `mt-6 flex flex-wrap justify-center gap-3`,
            children: [K, q]
        }), t[76] = K, t[77] = q, t[78] = J) : J = t[78];
        let Y;
        t[79] !== ne || t[80] !== ee ? (Y = ee && (0, z.jsx)(`p`, {
            className: `text-token-text-tertiary mt-2 text-center text-[13px] leading-[18px] tracking-[-0.08px]`,
            children: ne ? (0, z.jsx)(y, {
                id: `image-gen.images-app.trending.prompt_variation.description.altered`,
                defaultMessage: `The same prompt may produce different images. This prompt was altered before sharing.`
            }) : (0, z.jsx)(y, {
                id: `image-gen.images-app.trending.prompt_variation.description`,
                defaultMessage: `The same prompt may produce different images.`
            })
        }), t[79] = ne, t[80] = ee, t[81] = Y) : Y = t[81];
        let X;
        t[82] !== V || t[83] !== H || t[84] !== U || t[85] !== J || t[86] !== Y ? (X = (0, z.jsxs)(`section`, {
            className: `max-w-app-content mx-auto flex w-full flex-col items-center px-(--images-app-padding) text-center md:mt-12`,
            children: [V, H, U, J, Y]
        }), t[82] = V, t[83] = H, t[84] = U, t[85] = J, t[86] = Y, t[87] = X) : X = t[87];
        let it;
        t[88] === Symbol.for(`react.memo_cache_sentinel`) ? (it = (0, z.jsx)(y, {
            id: `image-gen.images-app.trending.explore_ideas`,
            defaultMessage: `Explore ideas`
        }), t[88] = it) : it = t[88];
        let at = ve.length === 0 && he.isPending,
            Z;
        t[89] !== me || t[90] !== m || t[91] !== ve || t[92] !== at ? (Z = (0, z.jsx)(Ue, {
            imageVariants: me,
            suggestedPromptGroups: ve,
            suggestedPromptGroupTitleOverride: it,
            skeleton: at,
            showAllPromptItems: m,
            showPromptTabs: m,
            hideImagesAppList: !0,
            enablePromptClickRevamp: !1
        }), t[89] = me, t[90] = m, t[91] = ve, t[92] = at, t[93] = Z) : Z = t[93];
        let Q;
        t[94] === T ? Q = t[95] : (Q = b && T && (0, z.jsx)(Ve, {
            hideComposerSurface: !0,
            disableAutoFocus: !0,
            disableDraftPersistence: !0,
            draftRestorationMode: `disabled`,
            promptOverride: ``
        }), t[94] = T, t[95] = Q);
        let $;
        t[96] !== g || t[97] !== k || t[98] !== Ke || t[99] !== L || t[100] !== B || t[101] !== X || t[102] !== Z || t[103] !== Q ? ($ = (0, z.jsxs)(Ne, {
            conversation: g,
            inert: k,
            disabled: Ke,
            className: `flex flex-col gap-(--image-page-spacing) pb-24 max-md:pt-17 md:pt-10`,
            onBeforeDropAccepted: L,
            onDropAccepted: B,
            children: [X, Z, Q]
        }), t[96] = g, t[97] = k, t[98] = Ke, t[99] = L, t[100] = B, t[101] = X, t[102] = Z, t[103] = Q, t[104] = $) : $ = t[104];
        let ot;
        return t[105] !== I || t[106] !== $ ? (ot = (0, z.jsxs)(z.Fragment, {
            children: [I, Ge, $]
        }), t[105] = I, t[106] = $, t[107] = ot) : ot = t[107], ot
    }
}));
export {
    rt as n, H as t
};
//# sourceMappingURL=3f84cbf0-dvnee4tyg7a6s2jd.js.map
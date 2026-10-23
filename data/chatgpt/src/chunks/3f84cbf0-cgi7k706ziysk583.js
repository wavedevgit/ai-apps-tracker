import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    A0 as r,
    A8 as i,
    E0 as a,
    IR as o,
    JR as s,
    Lit as c,
    RR as l,
    Rit as u,
    Ua as d,
    Wa as f,
    XR as p,
    YR as ee,
    eE as te,
    f0 as ne,
    hst as re,
    j5 as m,
    lF as ie,
    mit as ae,
    mst as oe,
    p0 as se,
    p5 as ce,
    rz as h,
    uit as g,
    vF as _,
    w0 as v
} from "./4813494d-mdvd4786a87166cc.js";
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
    $Mn as ge,
    C7 as _e,
    Ifn as ve,
    Lfn as ye,
    S7 as be,
    SZ as xe,
    T7 as Se,
    b7 as Ce,
    dY as we,
    eNn as Te,
    fY as Ee,
    fpn as De,
    mpn as x,
    ppn as Oe,
    vZ as ke,
    x7 as Ae,
    y7 as S,
    zfn as C
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    CC as w,
    SC as T
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    Bl as je,
    Il as Me,
    Jl as E,
    Ks as Ne,
    Ll as D,
    O_ as O,
    On as Pe,
    Pl as Fe,
    Rl as Ie,
    Xh as Le,
    Xl as Re,
    Yh as ze,
    i_ as Be,
    k_ as Ve,
    kn as k,
    qs as A,
    t_ as j
} from "./8b34dbc2-lmwubajnld74ksfm.js";
import {
    a as He,
    c as M,
    i as N,
    l as P,
    n as F,
    o as I,
    r as Ue,
    s as We,
    t as Ge,
    u as Ke
} from "./cbffa3f1-lopyn9ucpqr6ncym.js";

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
    r(), l({
        authSessionLoggingId: v(),
        actionType: s.ACCESS_FLOW_ENTRY_ACTION_TYPE_LOGIN_OR_SIGNUP,
        entryPoint: ee.ACCESS_FLOW_ENTRY_POINT_LOGIN_MODAL,
        entryTrigger: p.ACCESS_FLOW_ENTRY_TRIGGER_AUTOMATIC,
        cta: V
    })
}

function L(e) {
    let t = e ? ae(e) : null;
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
        ...P
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
        children: (0, z.jsx)(T, {
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
    return ve()
}

function $e() {
    return ye()
}
var et, R, z, tt, B, V, nt, H, U, rt = e((() => {
    et = me(), te(), o(), O(), _(), f(), w(), ze(), D(), j(), _e(), x(), C(), a(), S(), E(), i(), we(), A(), ne(), xe(), M(), I(), N(), k(), Ke(), F(), c(), g(), oe(), h(), Te(), R = t(b()), fe(), de(), z = le(), tt = [], B = `images_trending_template`, V = `images_trending_page_try_it`, nt = {
        input_requirements: {
            source: `camera_or_gallery`
        },
        strategy: `auto_send`
    }, H = e => {
        "use forget";
        let t = (0, et.c)(11),
            n = (0, R.use)(ie),
            r;
        t[0] === n ? r = t[1] : (r = re(n), t[0] = n, t[1] = r);
        let i = r,
            a;
        t[2] !== i || t[3] !== e ? (a = () => {
            (e.promptItem.action ?? nt).strategy === `auto_send` && Re(i), e.onTryIt?.()
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
                showAllPromptItems: i,
                showPromptVariationDisclosure: a,
                isPromptAltered: o,
                showPromptTextPreview: s,
                onTryItSelected: c,
                onTryIt: l,
                onFilesSelected: f
            } = e,
            p = i !== void 0 && i,
            ee = a !== void 0 && a,
            te = o !== void 0 && o,
            ne = s !== void 0 && s,
            ae = (0, R.use)(d),
            oe = (0, R.use)(ie),
            h;
        t[0] === oe ? h = t[1] : (h = re(oe), t[0] = oe, t[1] = h);
        let g = h,
            _ = Ve(),
            v = Le(),
            le = (0, R.useRef)(0),
            ue;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (ue = () => () => {
            le.current += 1
        }, t[2] = ue) : ue = t[2];
        let de;
        t[3] !== _ || t[4] !== g ? (de = [_, g], t[3] = _, t[4] = g, t[5] = de) : de = t[5], (0, R.useEffect)(ue, de);
        let fe;
        t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (fe = u(), t[6] = fe) : fe = t[6];
        let b = fe,
            pe = m(Ce),
            me = m(Qe),
            he = m($e),
            _e = he.groups ?? tt,
            ve;
        t[7] !== r.id || t[8] !== _e ? (ve = Ye({
            suggestedPromptGroups: _e,
            promptItemId: r.id
        }), t[7] = r.id, t[8] = _e, t[9] = ve) : ve = t[9];
        let ye = ve,
            xe;
        t[10] === r ? xe = t[11] : (xe = Oe(r), t[10] = r, t[11] = xe);
        let we = xe,
            Te;
        t[12] === r ? Te = t[13] : (Te = qe(r), t[12] = r, t[13] = Te);
        let x = Te,
            S = r.action ?? nt,
            C = S.input_requirements?.source ?? `prompt_only`,
            w = C === `sketch` && l == null,
            T;
        t[14] !== _ || t[15] !== g || t[16] !== w ? (T = () => w && ke(g)?.some(Ee) === !0 && Ne(_).controller$()?.canOpenSketch === !0, t[14] = _, t[15] = g, t[16] = w, t[17] = T) : T = t[17];
        let E = m(T),
            D;
        t[18] !== _ || t[19] !== v || t[20] !== w ? (D = () => {
            if (!w) return !1;
            let e = Ne(_).controller$();
            return v.files$().some(t => e?.isSketchUploadInFlight(t.tempId) === !0)
        }, t[18] = _, t[19] = v, t[20] = w, t[21] = D) : D = t[21];
        let O = m(D),
            ze = C !== `prompt_only` && C !== `styles` && C !== `sketch`,
            k = l != null && S.strategy === `auto_send` && ze && (S.input_requirements?.min_count ?? 0) === 0,
            A = l != null && (S.input_requirements?.min_count ?? 0) > 0,
            j = b && S.strategy === `auto_send` && ze,
            M;
        t[22] !== g || t[23] !== r ? (M = () => {
            let e = Je(r),
                t = be(e.items, r.id),
                n = ge.CHATGPT_IMAGE_PROMPT_SENT_SURFACE_TYPE_IMAGES;
            return Se({
                item: r,
                group: e,
                position: t,
                surface: n
            }), Ie(g, r), {
                promptItem: r,
                group: e,
                surface: n,
                position: t
            }
        }, t[22] = g, t[23] = r, t[24] = M) : M = t[24];
        let N = M,
            P;
        t[25] !== k || t[26] !== E || t[27] !== _ || t[28] !== g || t[29] !== v || t[30] !== C || t[31] !== w || t[32] !== l || t[33] !== c || t[34] !== ae || t[35] !== r || t[36] !== N ? (P = e => {
            let t = e !== void 0 && e;
            if (c?.(), !b) {
                Xe(), se({
                    fallbackScreenHint: `login_or_signup`,
                    skipLoginModal: !1,
                    loginModalSubtitleVariant: `create-image-trending`,
                    callbackUrl: window.location.href
                });
                return
            }
            let n = N(),
                {
                    group: i,
                    position: a,
                    surface: o
                } = n;
            if (w) {
                if (!E) return;
                let e = le.current + 1,
                    t = () => le.current === e;
                Ne(_).controller$()?.openNewSketch({
                    isRequestCurrent: t,
                    onUploadComplete: e => {
                        !t() || !u() || (Be.set(g, n), Me({
                            conversation: g,
                            tempIds: [e],
                            filePickerStore: v
                        }))
                    }
                }) && (le.current = e);
                return
            }
            if (l != null && i.action.strategy === `prefill_composer`) {
                l();
                return
            }
            if (C === `prompt_only` || C === `styles` || k && !t) {
                Re(g), l?.(), Fe({
                    conversation: g,
                    group: i,
                    promptItem: r,
                    surface: o,
                    position: a
                });
                return
            }
            Ae({
                openDialog: ae,
                openPicker: () => {
                    ce(() => {
                        Be.set(g, n), je({
                            source: C === `camera` ? `camera` : `photos`
                        })
                    })
                }
            })
        }, t[25] = k, t[26] = E, t[27] = _, t[28] = g, t[29] = v, t[30] = C, t[31] = w, t[32] = l, t[33] = c, t[34] = ae, t[35] = r, t[36] = N, t[37] = P) : P = t[37];
        let F = P,
            I;
        t[38] === r.title ? I = t[39] : (I = b && (0, z.jsx)(Ze, {
            trendTitle: r.title
        }), t[38] = r.title, t[39] = I);
        let Ge;
        t[40] === Symbol.for(`react.memo_cache_sentinel`) ? (Ge = (0, z.jsx)(We, {}), t[40] = Ge) : Ge = t[40];
        let Ke = w || l != null && !j,
            L;
        t[41] !== j || t[42] !== g || t[43] !== l || t[44] !== c || t[45] !== r.id || t[46] !== N ? (L = () => {
            l == null || !j || Be(g)?.promptItem?.id === r.id || (c?.(), Be.set(g, N()))
        }, t[41] = j, t[42] = g, t[43] = l, t[44] = c, t[45] = r.id, t[46] = N, t[47] = L) : L = t[47];
        let B;
        t[48] !== j || t[49] !== f || t[50] !== l ? (B = e => {
            l != null && j && e.length > 0 && f()
        }, t[48] = j, t[49] = f, t[50] = l, t[51] = B) : B = t[51];
        let V;
        t[52] !== we || t[53] !== r ? (V = we && (0, z.jsx)(`div`, {
            className: `bg-token-bg-secondary mb-7 w-full max-w-90 overflow-hidden rounded-3xl shadow-xs md:max-w-128`,
            children: (0, z.jsx)(`img`, {
                alt: De(r),
                className: `aspect-[5/4] w-full object-cover md:aspect-[4/3]`,
                fetchPriority: `high`,
                src: we
            })
        }), t[52] = we, t[53] = r, t[54] = V) : V = t[54];
        let H;
        t[55] === x ? H = t[56] : (H = (0, z.jsx)(`h1`, {
            className: `text-token-text-primary max-w-[720px] text-3xl leading-tight font-semibold text-balance max-md:text-2xl`,
            children: x
        }), t[55] = x, t[56] = H);
        let U;
        t[57] !== x || t[58] !== r.prompt_text || t[59] !== ne ? (U = ne && r.prompt_text?.trim() && (0, z.jsx)(`div`, {
            className: `border-token-border-light focus-within:border-token-border-heavy mt-4 w-full max-w-128 rounded-xl border px-3 py-2`,
            children: (0, z.jsx)(`textarea`, {
                "aria-label": x,
                className: `text-token-text-secondary field-sizing-content max-h-[3lh] min-h-[2lh] w-full resize-none overflow-y-auto border-0 bg-transparent p-0 text-start text-sm leading-5 focus:ring-0 focus:outline-none`,
                readOnly: !0,
                rows: 2,
                spellCheck: !1,
                value: r.prompt_text
            })
        }), t[57] = x, t[58] = r.prompt_text, t[59] = ne, t[60] = U) : U = t[60];
        let rt = O || b && w && !E || pe && b && ze && S.strategy === `auto_send` && !k,
            W;
        t[61] === F ? W = t[62] : (W = () => F(), t[61] = F, t[62] = W);
        let G;
        t[63] !== S.strategy || t[64] !== l || t[65] !== A ? (G = b && A && S.strategy === `auto_send` ? (0, z.jsx)(y, {
            id: `image-gen.images-app.trending.cta.add_image`,
            defaultMessage: `Try it with an image`
        }) : b && A ? (0, z.jsx)(y, {
            id: `image-gen.images-app.trending.cta.edit_and_add_image`,
            defaultMessage: `Edit prompt and add an image`
        }) : b && l != null ? (0, z.jsx)(y, {
            id: `image-gen.images-app.trending.cta.prompt_share`,
            defaultMessage: `Try this prompt`
        }) : b ? (0, z.jsx)(y, {
            id: `image-gen.images-app.trending.cta.try`,
            defaultMessage: `Try it`
        }) : (0, z.jsx)(y, {
            id: `image-gen.images-app.trending.cta.login`,
            defaultMessage: `Log in to try it`
        }), t[63] = S.strategy, t[64] = l, t[65] = A, t[66] = G) : G = t[66];
        let K;
        t[67] !== O || t[68] !== rt || t[69] !== W || t[70] !== G ? (K = (0, z.jsx)(n, {
            className: `min-w-44 rounded-full px-8`,
            color: `primary`,
            disabled: rt,
            loading: O,
            onClick: W,
            size: `large`,
            type: `button`,
            children: G
        }), t[67] = O, t[68] = rt, t[69] = W, t[70] = G, t[71] = K) : K = t[71];
        let q;
        t[72] !== k || t[73] !== pe || t[74] !== F ? (q = b && k && (0, z.jsx)(n, {
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
        }), t[72] = k, t[73] = pe, t[74] = F, t[75] = q) : q = t[75];
        let J;
        t[76] !== K || t[77] !== q ? (J = (0, z.jsxs)(`div`, {
            className: `mt-6 flex flex-wrap justify-center gap-3`,
            children: [K, q]
        }), t[76] = K, t[77] = q, t[78] = J) : J = t[78];
        let Y;
        t[79] !== te || t[80] !== ee ? (Y = ee && (0, z.jsx)(`p`, {
            className: `text-token-text-tertiary mt-2 text-center text-[13px] leading-[18px] tracking-[-0.08px]`,
            children: te ? (0, z.jsx)(y, {
                id: `image-gen.images-app.trending.prompt_variation.description.altered`,
                defaultMessage: `The same prompt may produce different images. This prompt was altered before sharing.`
            }) : (0, z.jsx)(y, {
                id: `image-gen.images-app.trending.prompt_variation.description`,
                defaultMessage: `The same prompt may produce different images.`
            })
        }), t[79] = te, t[80] = ee, t[81] = Y) : Y = t[81];
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
        let at = ye.length === 0 && he.isPending,
            Z;
        t[89] !== me || t[90] !== p || t[91] !== ye || t[92] !== at ? (Z = (0, z.jsx)(Ue, {
            imageVariants: me,
            suggestedPromptGroups: ye,
            suggestedPromptGroupTitleOverride: it,
            skeleton: at,
            showAllPromptItems: p,
            showPromptTabs: p,
            hideImagesAppList: !0,
            enablePromptClickRevamp: !1
        }), t[89] = me, t[90] = p, t[91] = ye, t[92] = at, t[93] = Z) : Z = t[93];
        let Q;
        t[94] === w ? Q = t[95] : (Q = b && w && (0, z.jsx)(He, {
            hideComposerSurface: !0,
            disableAutoFocus: !0,
            disableDraftPersistence: !0,
            draftRestorationMode: `disabled`,
            promptOverride: ``
        }), t[94] = w, t[95] = Q);
        let $;
        t[96] !== g || t[97] !== O || t[98] !== Ke || t[99] !== L || t[100] !== B || t[101] !== X || t[102] !== Z || t[103] !== Q ? ($ = (0, z.jsxs)(Pe, {
            conversation: g,
            inert: O,
            disabled: Ke,
            className: `flex flex-col gap-(--image-page-spacing) pb-24 max-md:pt-17 md:pt-10`,
            onBeforeDropAccepted: L,
            onDropAccepted: B,
            children: [X, Z, Q]
        }), t[96] = g, t[97] = O, t[98] = Ke, t[99] = L, t[100] = B, t[101] = X, t[102] = Z, t[103] = Q, t[104] = $) : $ = t[104];
        let ot;
        return t[105] !== I || t[106] !== $ ? (ot = (0, z.jsxs)(z.Fragment, {
            children: [I, Ge, $]
        }), t[105] = I, t[106] = $, t[107] = ot) : ot = t[107], ot
    }
}));
export {
    rt as n, H as t
};
//# sourceMappingURL=3f84cbf0-cgi7k706ziysk583.js.map
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AR as n,
    BR as r,
    HR as i,
    Ha as a,
    Hot as o,
    JT as s,
    Lrt as c,
    MR as l,
    N5 as u,
    Ua as d,
    VR as f,
    Vot as p,
    Vrt as ee,
    YR as te,
    b0 as ne,
    dit as re,
    fF as ie,
    g0 as ae,
    h5 as oe,
    h8 as m,
    m0 as h,
    n0 as g,
    qT as se,
    r0 as ce,
    rF as le,
    uit as _
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as ue,
    Lt as de,
    Nn as v,
    Q as fe,
    Rn as pe,
    Vn as y,
    it as me,
    wn as he,
    zn as ge
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    A7 as _e,
    Afn as ve,
    D7 as ye,
    E7 as be,
    O7 as xe,
    T7 as Se,
    _fn as Ce,
    aMn as we,
    cY as Te,
    gfn as Ee,
    hZ as De,
    iMn as Oe,
    jfn as b,
    kfn as ke,
    lY as Ae,
    w7 as x,
    yZ as S,
    yfn as C
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    TC as w,
    wC as T
} from "./30901919-7dzdc1ou0jtwkwpt.js";
import {
    E_ as je,
    Fl as Me,
    Gl as E,
    Gs as Ne,
    Kh as D,
    Ks as O,
    Ll as Pe,
    Nl as Fe,
    On as Ie,
    Pl as Le,
    Qg as k,
    T_ as A,
    jl as Re,
    kn as j,
    qh as ze,
    ql as Be,
    t_ as Ve
} from "./8b34dbc2-k1zgxrtsww83602u.js";
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
} from "./cbffa3f1-bd9ww61kxhnhc8fo.js";

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
    ne(), l({
        authSessionLoggingId: h(),
        actionType: r.ACCESS_FLOW_ENTRY_ACTION_TYPE_LOGIN_OR_SIGNUP,
        entryPoint: f.ACCESS_FLOW_ENTRY_POINT_LOGIN_MODAL,
        entryTrigger: i.ACCESS_FLOW_ENTRY_TRIGGER_AUTOMATIC,
        cta: V
    })
}

function L(e) {
    let t = e ? ee(e) : null;
    return t ? `/${t}/images` : `/images`
}

function Ze(e) {
    "use forget";
    let t = (0, et.c)(16),
        {
            trendTitle: n
        } = e,
        r = ge(),
        {
            lang: i
        } = de(),
        a;
    t[0] === i ? a = t[1] : (a = L(i), t[0] = i, t[1] = a);
    let o = a,
        s;
    t[2] === r ? s = t[3] : (s = r.formatMessage({
        id: `image-gen.images-app.trending.breadcrumb.aria_label`,
        defaultMessage: `Images breadcrumb`
    }), t[2] = r, t[3] = s);
    let c;
    t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, z.jsx)(v, {
        ...P
    }), t[4] = c) : c = t[4];
    let l;
    t[5] === o ? l = t[6] : (l = (0, z.jsx)(`li`, {
        className: `min-w-0 shrink-0`,
        children: (0, z.jsx)(me, {
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
    return Ee()
}

function $e() {
    return Ce()
}
var et, R, z, tt, B, V, nt, H, U, rt = e((() => {
    et = he(), s(), n(), A(), ie(), d(), w(), D(), Le(), k(), xe(), b(), C(), ae(), x(), E(), m(), Te(), O(), g(), S(), M(), I(), N(), j(), Ke(), F(), _(), c(), p(), te(), we(), R = t(y()), pe(), fe(), z = ue(), tt = [], B = `images_trending_template`, V = `images_trending_page_try_it`, nt = {
        input_requirements: {
            source: `camera_or_gallery`
        },
        strategy: `auto_send`
    }, H = e => {
        "use forget";
        let t = (0, et.c)(11),
            n = (0, R.use)(le),
            r;
        t[0] === n ? r = t[1] : (r = o(n), t[0] = n, t[1] = r);
        let i = r,
            a;
        t[2] !== i || t[3] !== e ? (a = () => {
            (e.promptItem.action ?? nt).strategy === `auto_send` && Be(i), e.onTryIt?.()
        }, t[2] = i, t[3] = e, t[4] = a) : a = t[4];
        let s = a,
            c;
        t[5] !== s || t[6] !== e ? (c = (0, z.jsx)(U, {
            ...e,
            onFilesSelected: s
        }, e.promptItem.id), t[5] = s, t[6] = e, t[7] = c) : c = t[7];
        let l;
        return t[8] !== s || t[9] !== c ? (l = (0, z.jsx)(Ge, {
            onFilesSelected: s,
            children: c
        }), t[8] = s, t[9] = c, t[10] = l) : l = t[10], l
    }, U = e => {
        "use forget";
        let t = (0, et.c)(108),
            {
                promptItem: n,
                showAllPromptItems: r,
                showPromptVariationDisclosure: i,
                isPromptAltered: s,
                showPromptTextPreview: c,
                onTryItSelected: l,
                onTryIt: d,
                onFilesSelected: f
            } = e,
            p = r !== void 0 && r,
            ee = i !== void 0 && i,
            te = s !== void 0 && s,
            ne = c !== void 0 && c,
            ie = (0, R.use)(a),
            ae = (0, R.use)(le),
            m;
        t[0] === ae ? m = t[1] : (m = o(ae), t[0] = ae, t[1] = m);
        let h = m,
            g = je(),
            _ = ze(),
            ue = (0, R.useRef)(0),
            de;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (de = () => () => {
            ue.current += 1
        }, t[2] = de) : de = t[2];
        let fe;
        t[3] !== g || t[4] !== h ? (fe = [g, h], t[3] = g, t[4] = h, t[5] = fe) : fe = t[5], (0, R.useEffect)(de, fe);
        let pe;
        t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (pe = re(), t[6] = pe) : pe = t[6];
        let y = pe,
            me = u(Se),
            he = u(Qe),
            ge = u($e),
            xe = ge.groups ?? tt,
            Ce;
        t[7] !== n.id || t[8] !== xe ? (Ce = Ye({
            suggestedPromptGroups: xe,
            promptItemId: n.id
        }), t[7] = n.id, t[8] = xe, t[9] = Ce) : Ce = t[9];
        let we = Ce,
            Te;
        t[10] === n ? Te = t[11] : (Te = ve(n), t[10] = n, t[11] = Te);
        let Ee = Te,
            b;
        t[12] === n ? b = t[13] : (b = qe(n), t[12] = n, t[13] = b);
        let x = b,
            S = n.action ?? nt,
            C = S.input_requirements?.source ?? `prompt_only`,
            w = C === `sketch` && d == null,
            T;
        t[14] !== g || t[15] !== h || t[16] !== w ? (T = () => w && De(h)?.some(Ae) === !0 && Ne(g).controller$()?.canOpenSketch === !0, t[14] = g, t[15] = h, t[16] = w, t[17] = T) : T = t[17];
        let E = u(T),
            D;
        t[18] !== g || t[19] !== _ || t[20] !== w ? (D = () => {
            if (!w) return !1;
            let e = Ne(g).controller$();
            return _.files$().some(t => e?.isSketchUploadInFlight(t.tempId) === !0)
        }, t[18] = g, t[19] = _, t[20] = w, t[21] = D) : D = t[21];
        let O = u(D),
            Le = C !== `prompt_only` && C !== `styles` && C !== `sketch`,
            k = d != null && S.strategy === `auto_send` && Le && (S.input_requirements?.min_count ?? 0) === 0,
            A = d != null && (S.input_requirements?.min_count ?? 0) > 0,
            j = y && S.strategy === `auto_send` && Le,
            M;
        t[22] !== h || t[23] !== n ? (M = () => {
            let e = Je(n),
                t = ye(e.items, n.id),
                r = Oe.CHATGPT_IMAGE_PROMPT_SENT_SURFACE_TYPE_IMAGES;
            return _e({
                item: n,
                group: e,
                position: t,
                surface: r
            }), Me(h, n), {
                promptItem: n,
                group: e,
                surface: r,
                position: t
            }
        }, t[22] = h, t[23] = n, t[24] = M) : M = t[24];
        let N = M,
            P;
        t[25] !== k || t[26] !== E || t[27] !== g || t[28] !== h || t[29] !== _ || t[30] !== C || t[31] !== w || t[32] !== d || t[33] !== l || t[34] !== ie || t[35] !== n || t[36] !== N ? (P = e => {
            let t = e !== void 0 && e;
            if (l?.(), !y) {
                Xe(), ce({
                    fallbackScreenHint: `login_or_signup`,
                    skipLoginModal: !1,
                    loginModalSubtitleVariant: `create-image-trending`,
                    callbackUrl: window.location.href
                });
                return
            }
            let r = N(),
                {
                    group: i,
                    position: a,
                    surface: o
                } = r;
            if (w) {
                if (!E) return;
                let e = ue.current + 1,
                    t = () => ue.current === e;
                Ne(g).controller$()?.openNewSketch({
                    isRequestCurrent: t,
                    onUploadComplete: e => {
                        !t() || !re() || (Ve.set(h, r), Fe({
                            conversation: h,
                            tempIds: [e],
                            filePickerStore: _
                        }))
                    }
                }) && (ue.current = e);
                return
            }
            if (d != null && i.action.strategy === `prefill_composer`) {
                d();
                return
            }
            if (C === `prompt_only` || C === `styles` || k && !t) {
                Be(h), d?.(), Re({
                    conversation: h,
                    group: i,
                    promptItem: n,
                    surface: o,
                    position: a
                });
                return
            }
            be({
                openDialog: ie,
                openPicker: () => {
                    oe(() => {
                        Ve.set(h, r), Pe({
                            source: C === `camera` ? `camera` : `photos`
                        })
                    })
                }
            })
        }, t[25] = k, t[26] = E, t[27] = g, t[28] = h, t[29] = _, t[30] = C, t[31] = w, t[32] = d, t[33] = l, t[34] = ie, t[35] = n, t[36] = N, t[37] = P) : P = t[37];
        let F = P,
            I;
        t[38] === n.title ? I = t[39] : (I = y && (0, z.jsx)(Ze, {
            trendTitle: n.title
        }), t[38] = n.title, t[39] = I);
        let Ge;
        t[40] === Symbol.for(`react.memo_cache_sentinel`) ? (Ge = (0, z.jsx)(We, {}), t[40] = Ge) : Ge = t[40];
        let Ke = w || d != null && !j,
            L;
        t[41] !== j || t[42] !== h || t[43] !== d || t[44] !== l || t[45] !== n.id || t[46] !== N ? (L = () => {
            d == null || !j || Ve(h)?.promptItem?.id === n.id || (l?.(), Ve.set(h, N()))
        }, t[41] = j, t[42] = h, t[43] = d, t[44] = l, t[45] = n.id, t[46] = N, t[47] = L) : L = t[47];
        let B;
        t[48] !== j || t[49] !== f || t[50] !== d ? (B = e => {
            d != null && j && e.length > 0 && f()
        }, t[48] = j, t[49] = f, t[50] = d, t[51] = B) : B = t[51];
        let V;
        t[52] !== Ee || t[53] !== n ? (V = Ee && (0, z.jsx)(`div`, {
            className: `bg-token-bg-secondary mb-7 w-full max-w-90 overflow-hidden rounded-3xl shadow-xs md:max-w-128`,
            children: (0, z.jsx)(`img`, {
                alt: ke(n),
                className: `aspect-[5/4] w-full object-cover md:aspect-[4/3]`,
                fetchPriority: `high`,
                src: Ee
            })
        }), t[52] = Ee, t[53] = n, t[54] = V) : V = t[54];
        let H;
        t[55] === x ? H = t[56] : (H = (0, z.jsx)(`h1`, {
            className: `text-token-text-primary max-w-[720px] text-3xl leading-tight font-semibold text-balance max-md:text-2xl`,
            children: x
        }), t[55] = x, t[56] = H);
        let U;
        t[57] !== x || t[58] !== n.prompt_text || t[59] !== ne ? (U = ne && n.prompt_text?.trim() && (0, z.jsx)(`div`, {
            className: `border-token-border-light focus-within:border-token-border-heavy mt-4 w-full max-w-128 rounded-xl border px-3 py-2`,
            children: (0, z.jsx)(`textarea`, {
                "aria-label": x,
                className: `text-token-text-secondary field-sizing-content max-h-[3lh] min-h-[2lh] w-full resize-none overflow-y-auto border-0 bg-transparent p-0 text-start text-sm leading-5 focus:ring-0 focus:outline-none`,
                readOnly: !0,
                rows: 2,
                spellCheck: !1,
                value: n.prompt_text
            })
        }), t[57] = x, t[58] = n.prompt_text, t[59] = ne, t[60] = U) : U = t[60];
        let rt = O || y && w && !E || me && y && Le && S.strategy === `auto_send` && !k,
            W;
        t[61] === F ? W = t[62] : (W = () => F(), t[61] = F, t[62] = W);
        let G;
        t[63] !== S.strategy || t[64] !== d || t[65] !== A ? (G = y && A && S.strategy === `auto_send` ? (0, z.jsx)(v, {
            id: `image-gen.images-app.trending.cta.add_image`,
            defaultMessage: `Try it with an image`
        }) : y && A ? (0, z.jsx)(v, {
            id: `image-gen.images-app.trending.cta.edit_and_add_image`,
            defaultMessage: `Edit prompt and add an image`
        }) : y && d != null ? (0, z.jsx)(v, {
            id: `image-gen.images-app.trending.cta.prompt_share`,
            defaultMessage: `Try this prompt`
        }) : y ? (0, z.jsx)(v, {
            id: `image-gen.images-app.trending.cta.try`,
            defaultMessage: `Try it`
        }) : (0, z.jsx)(v, {
            id: `image-gen.images-app.trending.cta.login`,
            defaultMessage: `Log in to try it`
        }), t[63] = S.strategy, t[64] = d, t[65] = A, t[66] = G) : G = t[66];
        let K;
        t[67] !== O || t[68] !== rt || t[69] !== W || t[70] !== G ? (K = (0, z.jsx)(se, {
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
        t[72] !== k || t[73] !== me || t[74] !== F ? (q = y && k && (0, z.jsx)(se, {
            className: `min-w-44 rounded-full px-8`,
            color: `secondary`,
            disabled: me,
            onClick: () => F(!0),
            size: `large`,
            type: `button`,
            children: (0, z.jsx)(v, {
                id: `image-gen.images-app.trending.cta.try_with_image`,
                defaultMessage: `Try with an image`
            })
        }), t[72] = k, t[73] = me, t[74] = F, t[75] = q) : q = t[75];
        let J;
        t[76] !== K || t[77] !== q ? (J = (0, z.jsxs)(`div`, {
            className: `mt-6 flex flex-wrap justify-center gap-3`,
            children: [K, q]
        }), t[76] = K, t[77] = q, t[78] = J) : J = t[78];
        let Y;
        t[79] !== te || t[80] !== ee ? (Y = ee && (0, z.jsx)(`p`, {
            className: `text-token-text-tertiary mt-2 text-center text-[13px] leading-[18px] tracking-[-0.08px]`,
            children: te ? (0, z.jsx)(v, {
                id: `image-gen.images-app.trending.prompt_variation.description.altered`,
                defaultMessage: `The same prompt may produce different images. This prompt was altered before sharing.`
            }) : (0, z.jsx)(v, {
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
        t[88] === Symbol.for(`react.memo_cache_sentinel`) ? (it = (0, z.jsx)(v, {
            id: `image-gen.images-app.trending.explore_ideas`,
            defaultMessage: `Explore ideas`
        }), t[88] = it) : it = t[88];
        let at = we.length === 0 && ge.isPending,
            Z;
        t[89] !== he || t[90] !== p || t[91] !== we || t[92] !== at ? (Z = (0, z.jsx)(Ue, {
            imageVariants: he,
            suggestedPromptGroups: we,
            suggestedPromptGroupTitleOverride: it,
            skeleton: at,
            showAllPromptItems: p,
            showPromptTabs: p,
            hideImagesAppList: !0,
            enablePromptClickRevamp: !1
        }), t[89] = he, t[90] = p, t[91] = we, t[92] = at, t[93] = Z) : Z = t[93];
        let Q;
        t[94] === w ? Q = t[95] : (Q = y && w && (0, z.jsx)(He, {
            hideComposerSurface: !0,
            disableAutoFocus: !0,
            disableDraftPersistence: !0,
            draftRestorationMode: `disabled`,
            promptOverride: ``
        }), t[94] = w, t[95] = Q);
        let $;
        t[96] !== h || t[97] !== O || t[98] !== Ke || t[99] !== L || t[100] !== B || t[101] !== X || t[102] !== Z || t[103] !== Q ? ($ = (0, z.jsxs)(Ie, {
            conversation: h,
            inert: O,
            disabled: Ke,
            className: `flex flex-col gap-(--image-page-spacing) pb-24 max-md:pt-17 md:pt-10`,
            onBeforeDropAccepted: L,
            onDropAccepted: B,
            children: [X, Z, Q]
        }), t[96] = h, t[97] = O, t[98] = Ke, t[99] = L, t[100] = B, t[101] = X, t[102] = Z, t[103] = Q, t[104] = $) : $ = t[104];
        let ot;
        return t[105] !== I || t[106] !== $ ? (ot = (0, z.jsxs)(z.Fragment, {
            children: [I, Ge, $]
        }), t[105] = I, t[106] = $, t[107] = ot) : ot = t[107], ot
    }
}));
export {
    rt as n, H as t
};
//# sourceMappingURL=3f84cbf0-ekzsiu6f30jv39fg.js.map
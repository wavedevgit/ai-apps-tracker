import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    A0 as r,
    Ait as i,
    E0 as a,
    IR as o,
    JR as s,
    RR as c,
    Ua as l,
    Wa as u,
    XR as d,
    YR as f,
    eE as p,
    f0 as ee,
    k5 as te,
    k8 as ne,
    kit as re,
    lF as ie,
    nit as ae,
    oit as oe,
    ost as m,
    p0 as se,
    q5 as h,
    rz as g,
    sst as ce,
    vF as _,
    w0 as v
} from "./4813494d-nxpmzchfjvwqts17.js";
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
    HMn as ve,
    Mfn as x,
    Nfn as ye,
    S7 as be,
    SZ as S,
    T7 as xe,
    VMn as Se,
    b7 as Ce,
    cpn as we,
    dY as C,
    fY as Te,
    lpn as Ee,
    upn as w,
    vZ as De,
    x7 as Oe,
    y7 as T
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    TC as E,
    wC as D
} from "./30901919-lgbmg5s09xld40kt.js";
import {
    D_ as O,
    Fl as ke,
    Gs as Ae,
    Il as k,
    Jh as A,
    Ks as je,
    Ll as Me,
    Nl as Ne,
    O_ as Pe,
    On as Fe,
    Yh as Ie,
    Yl as Le,
    e_ as j,
    kn as M,
    ql as N,
    r_ as Re,
    zl as ze
} from "./8b34dbc2-n194ohawifys3bko.js";
import {
    a as Be,
    c as Ve,
    i as P,
    l as He,
    n as F,
    o as I,
    r as Ue,
    s as We,
    t as Ge,
    u as Ke
} from "./cbffa3f1-nhec2cuy07ip7zod.js";

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
    r(), c({
        authSessionLoggingId: v(),
        actionType: s.ACCESS_FLOW_ENTRY_ACTION_TYPE_LOGIN_OR_SIGNUP,
        entryPoint: f.ACCESS_FLOW_ENTRY_POINT_LOGIN_MODAL,
        entryTrigger: d.ACCESS_FLOW_ENTRY_TRIGGER_AUTOMATIC,
        cta: V
    })
}

function L(e) {
    let t = e ? oe(e) : null;
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
        children: (0, z.jsx)(D, {
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
    return x()
}

function $e() {
    return ye()
}
var et, R, z, tt, B, V, nt, H, U, rt = e((() => {
    et = me(), p(), o(), O(), _(), u(), E(), A(), k(), j(), ge(), w(), _e(), a(), T(), N(), ne(), C(), je(), ee(), S(), Ve(), I(), P(), M(), Ke(), F(), re(), ae(), m(), g(), ve(), R = t(b()), fe(), de(), z = le(), tt = [], B = `images_trending_template`, V = `images_trending_page_try_it`, nt = {
        input_requirements: {
            source: `camera_or_gallery`
        },
        strategy: `auto_send`
    }, H = e => {
        "use forget";
        let t = (0, et.c)(11),
            n = (0, R.use)(ie),
            r;
        t[0] === n ? r = t[1] : (r = ce(n), t[0] = n, t[1] = r);
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
                onFilesSelected: f
            } = e,
            p = a !== void 0 && a,
            ee = o !== void 0 && o,
            ne = s !== void 0 && s,
            re = c !== void 0 && c,
            ae = (0, R.use)(l),
            oe = (0, R.use)(ie),
            m;
        t[0] === oe ? m = t[1] : (m = ce(oe), t[0] = oe, t[1] = m);
        let g = m,
            _ = Pe(),
            v = Ie(),
            le = (0, R.useRef)(0),
            ue;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (ue = () => () => {
            le.current += 1
        }, t[2] = ue) : ue = t[2];
        let de;
        t[3] !== _ || t[4] !== g ? (de = [_, g], t[3] = _, t[4] = g, t[5] = de) : de = t[5], (0, R.useEffect)(ue, de);
        let fe;
        t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (fe = i(), t[6] = fe) : fe = t[6];
        let b = fe,
            pe = h(Ce),
            me = h(Qe),
            he = h($e),
            ge = he.groups ?? tt,
            _e;
        t[7] !== r.id || t[8] !== ge ? (_e = Ye({
            suggestedPromptGroups: ge,
            promptItemId: r.id
        }), t[7] = r.id, t[8] = ge, t[9] = _e) : _e = t[9];
        let ve = _e,
            x;
        t[10] === r ? x = t[11] : (x = Ee(r), t[10] = r, t[11] = x);
        let ye = x,
            S;
        t[12] === r ? S = t[13] : (S = qe(r), t[12] = r, t[13] = S);
        let C = S,
            w = r.action ?? nt,
            T = w.input_requirements?.source ?? `prompt_only`,
            E = T === `sketch` && d == null,
            D;
        t[14] !== _ || t[15] !== g || t[16] !== E ? (D = () => E && De(g)?.some(Te) === !0 && Ae(_).controller$()?.canOpenSketch === !0, t[14] = _, t[15] = g, t[16] = E, t[17] = D) : D = t[17];
        let O = h(D),
            k;
        t[18] !== _ || t[19] !== v || t[20] !== E ? (k = () => {
            if (!E) return !1;
            let e = Ae(_).controller$();
            return v.files$().some(t => e?.isSketchUploadInFlight(t.tempId) === !0)
        }, t[18] = _, t[19] = v, t[20] = E, t[21] = k) : k = t[21];
        let A = h(k),
            je = T !== `prompt_only` && T !== `styles` && T !== `sketch`,
            j = d != null && w.strategy === `auto_send` && je && (w.input_requirements?.min_count ?? 0) === 0,
            M = d != null && (w.input_requirements?.min_count ?? 0) > 0,
            N = b && w.strategy === `auto_send` && je,
            Ve;
        t[22] !== g || t[23] !== r ? (Ve = () => {
            let e = Je(r),
                t = be(e.items, r.id),
                n = Se.CHATGPT_IMAGE_PROMPT_SENT_SURFACE_TYPE_IMAGES;
            return xe({
                item: r,
                group: e,
                position: t,
                surface: n
            }), Me(g, r), {
                promptItem: r,
                group: e,
                surface: n,
                position: t
            }
        }, t[22] = g, t[23] = r, t[24] = Ve) : Ve = t[24];
        let P = Ve,
            He;
        t[25] !== j || t[26] !== O || t[27] !== _ || t[28] !== g || t[29] !== v || t[30] !== T || t[31] !== E || t[32] !== d || t[33] !== u || t[34] !== ae || t[35] !== r || t[36] !== P ? (He = e => {
            let t = e !== void 0 && e;
            if (u?.(), !b) {
                Xe(), se({
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
            if (E) {
                if (!O) return;
                let e = le.current + 1,
                    t = () => le.current === e;
                Ae(_).controller$()?.openNewSketch({
                    isRequestCurrent: t,
                    onUploadComplete: e => {
                        !t() || !i() || (Re.set(g, n), ke({
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
            if (T === `prompt_only` || T === `styles` || j && !t) {
                Le(g), d?.(), Ne({
                    conversation: g,
                    group: a,
                    promptItem: r,
                    surface: s,
                    position: o
                });
                return
            }
            Oe({
                openDialog: ae,
                openPicker: () => {
                    te(() => {
                        Re.set(g, n), ze({
                            source: T === `camera` ? `camera` : `photos`
                        })
                    })
                }
            })
        }, t[25] = j, t[26] = O, t[27] = _, t[28] = g, t[29] = v, t[30] = T, t[31] = E, t[32] = d, t[33] = u, t[34] = ae, t[35] = r, t[36] = P, t[37] = He) : He = t[37];
        let F = He,
            I;
        t[38] === r.title ? I = t[39] : (I = b && (0, z.jsx)(Ze, {
            trendTitle: r.title
        }), t[38] = r.title, t[39] = I);
        let Ge;
        t[40] === Symbol.for(`react.memo_cache_sentinel`) ? (Ge = (0, z.jsx)(We, {}), t[40] = Ge) : Ge = t[40];
        let Ke = E || d != null && !N,
            L;
        t[41] !== N || t[42] !== g || t[43] !== d || t[44] !== u || t[45] !== r.id || t[46] !== P ? (L = () => {
            d == null || !N || Re(g)?.promptItem?.id === r.id || (u?.(), Re.set(g, P()))
        }, t[41] = N, t[42] = g, t[43] = d, t[44] = u, t[45] = r.id, t[46] = P, t[47] = L) : L = t[47];
        let B;
        t[48] !== N || t[49] !== f || t[50] !== d ? (B = e => {
            d != null && N && e.length > 0 && f()
        }, t[48] = N, t[49] = f, t[50] = d, t[51] = B) : B = t[51];
        let V;
        t[52] !== ye || t[53] !== r ? (V = ye && (0, z.jsx)(`div`, {
            className: `bg-token-bg-secondary mb-7 w-full max-w-90 overflow-hidden rounded-3xl shadow-xs md:max-w-128`,
            children: (0, z.jsx)(`img`, {
                alt: we(r),
                className: `aspect-[5/4] w-full object-cover md:aspect-[4/3]`,
                fetchPriority: `high`,
                src: ye
            })
        }), t[52] = ye, t[53] = r, t[54] = V) : V = t[54];
        let H;
        t[55] === C ? H = t[56] : (H = (0, z.jsx)(`h1`, {
            className: `text-token-text-primary max-w-[720px] text-3xl leading-tight font-semibold text-balance max-md:text-2xl`,
            children: C
        }), t[55] = C, t[56] = H);
        let U;
        t[57] !== C || t[58] !== r.prompt_text || t[59] !== re ? (U = re && r.prompt_text?.trim() && (0, z.jsx)(`div`, {
            className: `border-token-border-light focus-within:border-token-border-heavy mt-4 w-full max-w-128 rounded-xl border px-3 py-2`,
            children: (0, z.jsx)(`textarea`, {
                "aria-label": C,
                className: `text-token-text-secondary field-sizing-content max-h-[3lh] min-h-[2lh] w-full resize-none overflow-y-auto border-0 bg-transparent p-0 text-start text-sm leading-5 focus:ring-0 focus:outline-none`,
                readOnly: !0,
                rows: 2,
                spellCheck: !1,
                value: r.prompt_text
            })
        }), t[57] = C, t[58] = r.prompt_text, t[59] = re, t[60] = U) : U = t[60];
        let rt = A || b && E && !O || pe && b && je && w.strategy === `auto_send` && !j,
            W;
        t[61] === F ? W = t[62] : (W = () => F(), t[61] = F, t[62] = W);
        let G;
        t[63] !== w.strategy || t[64] !== d || t[65] !== M ? (G = b && M && w.strategy === `auto_send` ? (0, z.jsx)(y, {
            id: `image-gen.images-app.trending.cta.add_image`,
            defaultMessage: `Try it with an image`
        }) : b && M ? (0, z.jsx)(y, {
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
        }), t[63] = w.strategy, t[64] = d, t[65] = M, t[66] = G) : G = t[66];
        let K;
        t[67] !== A || t[68] !== rt || t[69] !== W || t[70] !== G ? (K = (0, z.jsx)(n, {
            className: `min-w-44 rounded-full px-8`,
            color: `primary`,
            disabled: rt,
            loading: A,
            onClick: W,
            size: `large`,
            type: `button`,
            children: G
        }), t[67] = A, t[68] = rt, t[69] = W, t[70] = G, t[71] = K) : K = t[71];
        let q;
        t[72] !== j || t[73] !== pe || t[74] !== F ? (q = b && j && (0, z.jsx)(n, {
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
        }), t[72] = j, t[73] = pe, t[74] = F, t[75] = q) : q = t[75];
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
        t[89] !== me || t[90] !== p || t[91] !== ve || t[92] !== at ? (Z = (0, z.jsx)(Ue, {
            imageVariants: me,
            suggestedPromptGroups: ve,
            suggestedPromptGroupTitleOverride: it,
            skeleton: at,
            showAllPromptItems: p,
            showPromptTabs: p,
            hideImagesAppList: !0,
            enablePromptClickRevamp: !1
        }), t[89] = me, t[90] = p, t[91] = ve, t[92] = at, t[93] = Z) : Z = t[93];
        let Q;
        t[94] === E ? Q = t[95] : (Q = b && E && (0, z.jsx)(Be, {
            hideComposerSurface: !0,
            disableAutoFocus: !0,
            disableDraftPersistence: !0,
            draftRestorationMode: `disabled`,
            promptOverride: ``
        }), t[94] = E, t[95] = Q);
        let $;
        t[96] !== g || t[97] !== A || t[98] !== Ke || t[99] !== L || t[100] !== B || t[101] !== X || t[102] !== Z || t[103] !== Q ? ($ = (0, z.jsxs)(Fe, {
            conversation: g,
            inert: A,
            disabled: Ke,
            className: `flex flex-col gap-(--image-page-spacing) pb-24 max-md:pt-17 md:pt-10`,
            onBeforeDropAccepted: L,
            onDropAccepted: B,
            children: [X, Z, Q]
        }), t[96] = g, t[97] = A, t[98] = Ke, t[99] = L, t[100] = B, t[101] = X, t[102] = Z, t[103] = Q, t[104] = $) : $ = t[104];
        let ot;
        return t[105] !== I || t[106] !== $ ? (ot = (0, z.jsxs)(z.Fragment, {
            children: [I, Ge, $]
        }), t[105] = I, t[106] = $, t[107] = ot) : ot = t[107], ot
    }
}));
export {
    rt as n, H as t
};
//# sourceMappingURL=3f84cbf0-gknk02vhqkik4n8a.js.map
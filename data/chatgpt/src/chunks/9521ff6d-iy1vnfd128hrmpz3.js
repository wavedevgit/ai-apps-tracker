import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $9 as r,
    B6 as i,
    CP as a,
    FU as o,
    Itt as s,
    K8 as c,
    KK as l,
    NK as u,
    NU as d,
    _tt as f,
    b5 as p,
    bP as ee,
    eet as m,
    eq as h,
    jet as g,
    nP as te,
    oq as _,
    q9 as v,
    y5 as y,
    zet as b
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as x,
    Bn as S,
    Nn as ne,
    Pt as C,
    Rn as w,
    Vn as T,
    wn as E,
    zn as D
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Jnn as O,
    Unn as k,
    cdn as A,
    ih as j,
    nh as re,
    sdn as ie
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Gh as ae,
    Kh as oe
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    Ac as M,
    Oc as N,
    kc as se
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    n as P,
    t as ce
} from "./4775c8e0-pydxquor6rm5zu0t.js";

function le(e) {
    "use forget";
    let t = (0, F.c)(5),
        {
            children: n
        } = e,
        r = C(),
        i;
    t[0] === r ? i = t[1] : (i = () => {
        O({
            navigate: r,
            checkoutOriginProvenance: {
                checkoutOriginProductExperience: ie.CHAT,
                checkoutOriginDeliverySurface: `web`
            },
            openModalLocation: L
        })
    }, t[0] = r, t[1] = i);
    let a;
    return t[2] !== n || t[3] !== i ? (a = (0, I.jsx)(`button`, {
        type: `button`,
        className: `text-blue-400`,
        onClick: i,
        children: n
    }), t[2] = n, t[3] = i, t[4] = a) : a = t[4], a
}

function ue(e) {
    return e.feature_name === g.IMAGE_GEN
}
var F, I, L, de, R = e((() => {
    F = E(), b(), A(), p(), w(), x(), v(), k(), te(), _(), N(), I = S(), L = m.ImageGenPromptItemCardRow, de = e => {
        "use forget";
        let t = (0, F.c)(9),
            {
                className: n
            } = e,
            {
                isBlocked: i
            } = M(h.PictureV2),
            o = a(),
            s;
        t[0] === o ? s = t[1] : (s = se(o) ? o : null, t[0] = o, t[1] = s);
        let c = s,
            l = ee(ue),
            u = D(),
            d;
        if (t[2] === Symbol.for(`react.memo_cache_sentinel`)) {
            let e = r({
                openModalLocation: L
            });
            d = t => e ? (0, I.jsx)(le, {
                children: t
            }) : (0, I.jsx)(I.Fragment, {
                children: t
            }), t[2] = d
        } else d = t[2];
        let f = d,
            p;
        return t[3] !== n || t[4] !== l || t[5] !== u || t[6] !== i || t[7] !== c ? (p = c ? (0, I.jsx)(`div`, {
            className: y(`text-token-text-secondary text-sm`, n),
            children: (0, I.jsx)(ne, {
                id: `chatgpt.imagegen.prompt_item_card_row.mini_model_dependency.description`,
                defaultMessage: `Image creation isn’t available with this model. Try again when Instant usage resets at {resetTime}, or <upgradeLink>upgrade to continue</upgradeLink>.`,
                values: {
                    resetTime: new Date(c.resets_after).toLocaleTimeString(u.locale, {
                        hour: `numeric`,
                        minute: `2-digit`
                    }),
                    upgradeLink: f
                }
            })
        }) : i && l ? (0, I.jsx)(`div`, {
            className: y(`text-token-text-secondary text-sm`, n),
            children: (0, I.jsx)(ne, {
                id: `imagegen.promptItemCardRow.rateLimitedUpgradeMessage`,
                defaultMessage: `{remaining} images left. Wait for your usage to reset at {resetTime}, or <upgradeLink>upgrade for more.</upgradeLink>`,
                values: {
                    remaining: l.remaining,
                    resetTime: new Date(l.reset_after).toLocaleTimeString(u.locale, {
                        hour: `numeric`,
                        minute: `2-digit`
                    }),
                    upgradeLink: f
                }
            })
        }) : null, t[3] = n, t[4] = l, t[5] = u, t[6] = i, t[7] = c, t[8] = p) : p = t[8], p
    }
}));

function fe(e) {
    "use forget";
    let t = (0, pe.c)(5),
        {
            children: n,
            className: r
        } = e,
        i;
    t[0] === r ? i = t[1] : (i = y(`flex flex-col gap-3`, r), t[0] = r, t[1] = i);
    let a;
    return t[2] !== n || t[3] !== i ? (a = (0, z.jsx)(`section`, {
        className: i,
        children: n
    }), t[2] = n, t[3] = i, t[4] = a) : a = t[4], a
}
var pe, z, B = e((() => {
        pe = E(), p(), z = S()
    })),
    V = t({
        ImageGenPromptItemCardRow: () => q
    });

function H(e) {
    return Array.from(e.querySelectorAll(`button`)).filter(e => e.getClientRects().length > 0)
}

function me(e, t) {
    return t.reduce((n, r, i) => Math.abs(r - e) < Math.abs(t[n] - e) ? i : n, 0)
}

function he(e) {
    let t = H(e),
        n = Math.max(e.scrollWidth - e.clientWidth, 0);
    if (t.length === 0 || t.length === 1) return {
        itemsPerPage: 1,
        pagePositions: [0]
    };
    let r = e.getBoundingClientRect().left,
        i = t[0].getBoundingClientRect(),
        a = t[1].getBoundingClientRect(),
        o = i.left - r + e.scrollLeft,
        s = a.left - r + e.scrollLeft,
        c = o,
        l = i.width,
        u = Math.max(s - o - l, 0),
        d = l + u;
    if (d <= 0) return {
        itemsPerPage: 1,
        pagePositions: [0]
    };
    let f = Math.max(Math.floor((e.clientWidth + u) / d), 1),
        p = [];
    for (let i = 0; i < t.length; i += f) {
        let a = t[i].getBoundingClientRect().left - r + e.scrollLeft,
            o = Math.max(a - c, 0),
            s = Math.min(o, n);
        p.at(-1) !== s && p.push(s)
    }
    return {
        itemsPerPage: f,
        pagePositions: p.length > 0 ? p : [0]
    }
}

function ge(e) {
    "use forget";
    let t = (0, ye.c)(24),
        {
            hideControls: n,
            itemsLength: r,
            skeleton: i
        } = e,
        a = (0, U.useRef)(null),
        o;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (o = [0], t[0] = o) : o = t[0];
    let l = (0, U.useRef)(o),
        [u, f] = (0, U.useState)(0),
        [p, ee] = (0, U.useState)(1),
        [m, h] = (0, U.useState)(1),
        g;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (g = c(_e), t[1] = g) : g = t[1];
    let te = g,
        _;
    t[2] !== r || t[3] !== i ? (_ = () => i ?? r === 0, t[2] = r, t[3] = i, t[4] = _) : _ = t[4];
    let [v, y] = (0, U.useState)(_), b;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (b = () => {
        let e = a.current;
        if (!e) return;
        let {
            itemsPerPage: t,
            pagePositions: n
        } = he(e);
        l.current = n;
        let r = me(e.scrollLeft, n);
        (0, U.startTransition)(() => {
            h(t), ee(n.length), f(r)
        })
    }, t[5] = b) : b = t[5];
    let x = b,
        S;
    t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (S = () => {
        let e = a.current;
        if (!e) return;
        let t = me(e.scrollLeft, l.current);
        (0, U.startTransition)(() => {
            f(t)
        })
    }, t[6] = S) : S = t[6];
    let ne = S,
        C;
    t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (C = e => {
        let t = a.current;
        if (!t) return;
        let n = l.current,
            r = Math.max(n.length - 1, 0),
            i = Math.max(0, Math.min(e, r));
        (0, U.startTransition)(() => {
            f(i)
        }), t.scrollTo({
            left: n[i] ?? 0,
            behavior: te ? `auto` : `smooth`
        })
    }, t[7] = C) : C = t[7];
    let w = C,
        T, E;
    t[8] !== r || t[9] !== i ? (T = () => {
        (0, U.startTransition)(() => {
            y(i ?? r === 0)
        })
    }, E = [r, i], t[8] = r, t[9] = i, t[10] = T, t[11] = E) : (T = t[10], E = t[11]), (0, U.useEffect)(T, E);
    let D, O;
    t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (O = () => {
        if (s()) return;
        let e = a.current;
        if (!(!e || typeof ResizeObserver > `u`)) return d({
            axis: `width`,
            onChange: () => {
                x()
            },
            target: e
        })
    }, D = [x], t[12] = D, t[13] = O) : (D = t[12], O = t[13]), (0, U.useEffect)(O, D);
    let k;
    t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (k = () => {
        s() || x()
    }, t[14] = k) : k = t[14];
    let A;
    t[15] !== n || t[16] !== v || t[17] !== r ? (A = [n, v, r, x], t[15] = n, t[16] = v, t[17] = r, t[18] = A) : A = t[18], (0, U.useEffect)(k, A);
    let j;
    return t[19] !== v || t[20] !== m || t[21] !== p || t[22] !== u ? (j = {
        isSkeleton: v,
        pageCount: p,
        pageIndex: u,
        itemsPerPage: m,
        scrollContainerRef: a,
        scrollToPage: w,
        updatePageIndexFromScroll: ne
    }, t[19] = v, t[20] = m, t[21] = p, t[22] = u, t[23] = j) : j = t[23], j
}

function _e() {
    return l()
}

function ve(e) {
    "use forget";
    let t = (0, ye.c)(8),
        {
            hideControls: n,
            itemClassName: r,
            itemFrameClassName: i,
            labelPosition: a,
            showAllItems: o
        } = e,
        s = o && n ? G : n ? 10 : 11,
        c = o && n ? K : void 0,
        l;
    t[0] === s ? l = t[1] : (l = Array.from({
        length: s
    }), t[0] = s, t[1] = l);
    let u;
    return t[2] !== r || t[3] !== i || t[4] !== a || t[5] !== c || t[6] !== l ? (u = l.map((e, t) => (0, W.jsx)(re, {
        className: y(r, c != null && t >= c && `max-md:hidden`),
        frameClassName: i,
        skeleton: !0,
        label: (0, W.jsx)(ne, {
            id: `imagegen.actions.add_yourself.label`,
            defaultMessage: `Add yourself`
        }),
        content: (0, W.jsx)(`img`, {
            src: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/w8AAn8B9FY6SFwAAAAASUVORK5CYII=`,
            alt: ``,
            width: 1024,
            height: 1024,
            className: `invisible h-full w-full object-cover`
        }),
        labelPosition: a,
        type: `apply-style`
    }, t)), t[2] = r, t[3] = i, t[4] = a, t[5] = c, t[6] = l, t[7] = u) : u = t[7], u
}
var ye, U, W, be, G, K, q, J = e((() => {
    ye = E(), p(), U = n(T()), w(), ae(), R(), B(), i(), o(), u(), f(), j(), P(), W = S(), be = `-my-1.5 flex w-full gap-3 overflow-clip overflow-x-auto overscroll-x-contain py-1.5 contain-layout contain-paint contain-style [overflow-clip-margin:calc(var(--spacing)*1.5)] [scrollbar-width:none]`, G = 12, K = 6, q = e => {
        "use forget";
        let t = (0, ye.c)(92),
            {
                className: n,
                headerClassName: r,
                rateLimitMessageClassName: i,
                scrollContainerWrapperClassName: a,
                scrollContainerClassName: o,
                header: c,
                headerAction: l,
                showAllItems: u,
                hideControls: d,
                hideRateLimitMessage: f,
                items: p,
                isUploadDisabled: ee,
                onEditPhoto: m,
                renderItem: h,
                skeleton: g,
                showDismissButton: te
            } = e,
            _ = u !== void 0 && u,
            v = f !== void 0 && f,
            b = te !== void 0 && te,
            x = _ ? `w-full min-w-0 md:flex-none md:shrink-0 md:basis-[calc((100%-(var(--spacing)*6))/4)]` : `shrink-0 basis-24 md:flex-none md:basis-[calc((100%-(var(--spacing)*12))/5)]`,
            S;
        t[0] === x ? S = t[1] : (S = y(`transition-discrete motion-safe:transition-opacity starting:opacity-0`, x), t[0] = x, t[1] = S);
        let C = S,
            w = _ ? `max-md:w-full` : void 0,
            T;
        t[2] !== d || t[3] !== p.length || t[4] !== g ? (T = {
            hideControls: d,
            itemsLength: p.length,
            skeleton: g
        }, t[2] = d, t[3] = p.length, t[4] = g, t[5] = T) : T = t[5];
        let {
            isSkeleton: E,
            pageCount: D,
            pageIndex: O,
            itemsPerPage: k,
            scrollContainerRef: A,
            scrollToPage: j,
            updatePageIndexFromScroll: ie
        } = ge(T), ae = p.length + +!d, M = Math.min(O * k, Math.max(ae - k, 0)), N = Math.min(M + k - 1, ae - 1), se;
        t[6] !== E || t[7] !== D || t[8] !== _ ? (se = !_ && !s() && !E && D > 1, t[6] = E, t[7] = D, t[8] = _, t[9] = se) : se = t[9];
        let P = se,
            le = _ && `w-full`,
            ue = E && `group skeleton`,
            F;
        t[10] !== n || t[11] !== le || t[12] !== ue ? (F = y(`gap-4`, `my-1.5`, le, ue, n), t[10] = n, t[11] = le, t[12] = ue, t[13] = F) : F = t[13];
        let I;
        t[14] === r ? I = t[15] : (I = y(`flex min-h-9 items-center justify-between gap-4`, r), t[14] = r, t[15] = I);
        let L;
        t[16] !== v || t[17] !== i ? (L = !v && (0, W.jsx)(de, {
            className: i
        }), t[16] = v, t[17] = i, t[18] = L) : L = t[18];
        let R;
        t[19] !== c || t[20] !== L ? (R = (0, W.jsxs)(`div`, {
            children: [c, L]
        }), t[19] = c, t[20] = L, t[21] = R) : R = t[21];
        let pe = E ? null : l,
            z;
        t[22] !== D || t[23] !== O || t[24] !== j || t[25] !== _ || t[26] !== b ? (z = !_ && (0, W.jsx)(ce, {
            pageIndex: O,
            pageCount: D,
            onPreviousPage: () => j(O - 1),
            onNextPage: () => j(O + 1),
            showDismissButton: b
        }), t[22] = D, t[23] = O, t[24] = j, t[25] = _, t[26] = b, t[27] = z) : z = t[27];
        let B;
        t[28] !== pe || t[29] !== z ? (B = (0, W.jsxs)(`div`, {
            className: `ms-auto flex items-center gap-3`,
            children: [pe, z]
        }), t[28] = pe, t[29] = z, t[30] = B) : B = t[30];
        let V;
        t[31] !== I || t[32] !== R || t[33] !== B ? (V = (0, W.jsxs)(`div`, {
            className: I,
            children: [R, B]
        }), t[31] = I, t[32] = R, t[33] = B, t[34] = V) : V = t[34];
        let H;
        t[35] === a ? H = t[36] : (H = y(a), t[35] = a, t[36] = H);
        let me = _ ? void 0 : ie,
            he = E && `group skeleton`,
            _e = _ ? `grid w-full grid-cols-2 gap-2 md:flex md:flex-wrap` : be,
            G;
        t[37] !== o || t[38] !== he || t[39] !== _e ? (G = y(he, _e, o), t[37] = o, t[38] = he, t[39] = _e, t[40] = G) : G = t[40];
        let K = E ? `visible` : `hidden`,
            q;
        t[41] !== d || t[42] !== C || t[43] !== w || t[44] !== _ ? (q = (0, W.jsx)(ve, {
            hideControls: d,
            itemClassName: C,
            itemFrameClassName: w,
            labelPosition: `overlay`,
            showAllItems: _
        }), t[41] = d, t[42] = C, t[43] = w, t[44] = _, t[45] = q) : q = t[45];
        let J;
        t[46] !== K || t[47] !== q ? (J = (0, W.jsx)(U.Activity, {
            mode: K,
            children: q
        }), t[46] = K, t[47] = q, t[48] = J) : J = t[48];
        let xe = E ? `hidden` : `visible`,
            Y;
        t[49] !== M || t[50] !== d || t[51] !== ee || t[52] !== C || t[53] !== w || t[54] !== N || t[55] !== m || t[56] !== P ? (Y = !d && (0, W.jsx)(re, {
            ariaHidden: P && !(0 >= M && 0 <= N),
            className: C,
            disabled: ee,
            frameClassName: w,
            label: (0, W.jsx)(ne, {
                id: `imagegen.actions.upload_photo.label`,
                defaultMessage: `Upload a photo`
            }),
            onClick: m,
            content: (0, W.jsx)(`div`, {
                className: `flex h-full w-full items-center justify-center`,
                children: (0, W.jsx)(oe, {
                    className: `icon size-6`
                })
            }),
            labelPosition: `overlay`,
            type: `add-photo`
        }), t[49] = M, t[50] = d, t[51] = ee, t[52] = C, t[53] = w, t[54] = N, t[55] = m, t[56] = P, t[57] = Y) : Y = t[57];
        let X;
        if (t[58] !== M || t[59] !== d || t[60] !== C || t[61] !== w || t[62] !== p || t[63] !== N || t[64] !== h || t[65] !== P) {
            let e;
            t[67] !== M || t[68] !== d || t[69] !== C || t[70] !== w || t[71] !== N || t[72] !== h || t[73] !== P ? (e = (e, t) => (0, W.jsx)(`div`, {
                className: C,
                children: h({
                    item: e,
                    index: t,
                    itemClassName: C,
                    itemFrameClassName: w,
                    ariaHidden: P && !((d ? t : t + 1) >= M && (d ? t : t + 1) <= N)
                })
            }, e.id), t[67] = M, t[68] = d, t[69] = C, t[70] = w, t[71] = N, t[72] = h, t[73] = P, t[74] = e) : e = t[74], X = p.map(e), t[58] = M, t[59] = d, t[60] = C, t[61] = w, t[62] = p, t[63] = N, t[64] = h, t[65] = P, t[66] = X
        } else X = t[66];
        let Z;
        t[75] !== xe || t[76] !== Y || t[77] !== X ? (Z = (0, W.jsxs)(U.Activity, {
            mode: xe,
            children: [Y, X]
        }), t[75] = xe, t[76] = Y, t[77] = X, t[78] = Z) : Z = t[78];
        let Q;
        t[79] !== A || t[80] !== me || t[81] !== G || t[82] !== J || t[83] !== Z ? (Q = (0, W.jsxs)(`div`, {
            ref: A,
            onScroll: me,
            className: G,
            children: [J, Z]
        }), t[79] = A, t[80] = me, t[81] = G, t[82] = J, t[83] = Z, t[84] = Q) : Q = t[84];
        let $;
        t[85] !== H || t[86] !== Q ? ($ = (0, W.jsx)(`div`, {
            className: H,
            children: Q
        }), t[85] = H, t[86] = Q, t[87] = $) : $ = t[87];
        let Se;
        return t[88] !== F || t[89] !== V || t[90] !== $ ? (Se = (0, W.jsxs)(fe, {
            className: F,
            children: [V, $]
        }), t[88] = F, t[89] = V, t[90] = $, t[91] = Se) : Se = t[91], Se
    }
}));
export {
    B as a, fe as i, V as n, de as o, J as r, R as s, q as t
};
//# sourceMappingURL=9521ff6d-iy1vnfd128hrmpz3.js.map
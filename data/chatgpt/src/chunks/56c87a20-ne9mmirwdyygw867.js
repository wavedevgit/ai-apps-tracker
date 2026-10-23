import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as t,
    At as n,
    Jt as r,
    K5 as i,
    cn as a,
    eE as o,
    o0 as s,
    q1 as c,
    q5 as l
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as u,
    Ln as d,
    Nn as f,
    O as p,
    Rn as m,
    s as h,
    wn as g,
    zn as _
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    K2 as v,
    MUn as y,
    Qvt as b,
    Tmt as x,
    U2 as S,
    Wvt as C,
    Yvt as w,
    cKn as T,
    jUn as E,
    lKn as D,
    v$ as O,
    wmt as k,
    y$ as A
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Dx as j,
    Nx as M,
    Ox as N,
    Px as P,
    _S as F,
    ni as I,
    ri as L,
    vS as R
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    n as ee,
    r as z
} from "./467c4cbf-bxvv4v3l6r5ylkq3.js";
var B, V, H = e((() => {
        B = `_qmM7a_tag`, V = {
            tag: B
        }
    })),
    U, W, G = e((() => {
        U = `dV_K5q_card`, W = {
            card: U
        }
    }));

function K({
    isDocument: e,
    isSpreadsheet: t
}) {
    return i(`absolute rounded-[8px] shadow-[0_4px_12px_rgb(0_0_0/0.12)]`, e ? `start-1/2 top-[16%] h-auto w-[58%] -translate-x-1/2 scale-110 object-contain object-top` : i(`start-1/2 top-1/2 h-auto max-h-[76%] w-[84%] -translate-x-1/2 -translate-y-1/2`, t ? `aspect-video object-cover` : `object-contain`))
}
var q, J, Y, X, Z, Q, $, te, ne, re = e((() => {
    q = g(), o(), y(), N(), I(), M(), F(), b(), c(), z(), v(), T(), k(), h(), l(), n(), m(), H(), G(), J = u(), Y = [0, 0, .28, 1], X = d({
        templateActions: {
            id: `chatgpt.library.artifact_template_gallery.modal.card.menu.aria_label`,
            defaultMessage: `More actions for {title}`
        },
        applyTemplate: {
            id: `chatgpt.library.artifact_template_gallery.modal.card.menu.use.label`,
            defaultMessage: `Use template`
        },
        editTemplate: {
            id: `chatgpt.library.artifact_template_gallery.modal.card.menu.edit.label`,
            defaultMessage: `Edit`
        },
        shareTemplate: {
            id: `chatgpt.library.artifact_template_gallery.modal.card.menu.share.label`,
            defaultMessage: `Share`
        },
        uninstallTemplate: {
            id: `chatgpt.library.artifact_template_gallery.modal.card.menu.uninstall.label`,
            defaultMessage: `Uninstall`
        },
        createGridKind: {
            id: `chatgpt.create.page.templates.artifact.kind.label`,
            defaultMessage: `{kind, select, document {@Doc} presentation {@Presentation} spreadsheet {@Sheet} site {@Site} other {@Template}}`
        }
    }), Z = ({
        index: e,
        isVisible: t,
        prefersReducedMotion: n,
        shouldAnimateLayout: r
    }) => ({
        layout: r && !n,
        initial: !1,
        animate: t == null ? void 0 : {
            opacity: +!!t,
            y: !t && !n ? 4 : 0
        },
        transition: {
            duration: n ? 0 : r ? .09 : .08,
            delay: n || !t ? 0 : Math.min(e, 3) * .01,
            ease: r ? Y : `easeOut`
        }
    }), Q = e => {
        "use forget";
        let t = (0, q.c)(64),
            {
                actions: n,
                ariaLabel: o,
                createGridBackgroundColor: s,
                displayMode: c,
                disabled: l,
                density: u,
                index: d,
                isSelected: p,
                isVisible: m,
                onCreateGridKindSelect: h,
                onSelect: g,
                preview: _,
                shouldAnimateLayout: v,
                template: y
            } = e,
            b = u === void 0 ? `default` : u,
            x = v !== void 0 && v,
            C = r(),
            w;
        t[0] === y.kind ? w = t[1] : (w = y.kind == null ? void 0 : S(y.kind), t[0] = y.kind, t[1] = w);
        let T = w,
            E = T === `document`,
            D = T === `spreadsheet`,
            O = c === `create-grid`,
            k;
        t[2] !== O || t[3] !== E ? (k = i(`relative w-full`, O ? `overflow-hidden rounded-[20px] bg-[#f5f5f5] aspect-[5/4]` : i(`border-token-border-light bg-token-bg-primary overflow-hidden rounded-xl border`, E ? `aspect-[179/204]` : `aspect-video`)), t[2] = O, t[3] = E, t[4] = k) : k = t[4];
        let A;
        t[5] !== s || t[6] !== O ? (A = O && s != null ? {
            backgroundColor: s
        } : void 0, t[5] = s, t[6] = O, t[7] = A) : A = t[7];
        let j;
        t[8] !== d || t[9] !== O || t[10] !== E || t[11] !== D || t[12] !== _ || t[13] !== y ? (j = _ == null ? (0, J.jsx)(`img`, {
            alt: ``,
            className: i(O ? K({
                isDocument: E,
                isSpreadsheet: D
            }) : `h-full w-full object-cover object-top`),
            loading: d < 3 ? `eager` : `lazy`,
            src: y.previewUrl
        }) : (0, J.jsx)(ne, {
            index: d,
            isDocument: E,
            isCreateGrid: O,
            isSpreadsheet: D,
            preview: _,
            template: y
        }), t[8] = d, t[9] = O, t[10] = E, t[11] = D, t[12] = _, t[13] = y, t[14] = j) : j = t[14];
        let M;
        t[15] === O ? M = t[16] : (M = O ? (0, J.jsx)(`span`, {
            "aria-hidden": `true`,
            className: `pointer-events-none absolute inset-0 bg-gradient-to-b from-black/[0.09] to-black/[0.18] opacity-0 transition-opacity duration-150 group-focus-within:opacity-100 group-hover:opacity-100`
        }) : null, t[15] = O, t[16] = M);
        let N;
        t[17] !== T || t[18] !== l || t[19] !== O || t[20] !== h ? (N = O ? (0, J.jsx)(`button`, {
            className: i(`absolute end-3 bottom-3 z-[1] rounded-full bg-transparent px-3 py-1.5 text-sm leading-5 font-medium text-white opacity-0 group-focus-within:opacity-100 group-hover:opacity-100`, V.tag, h == null || l ? `pointer-events-none` : `pointer-events-none cursor-pointer group-focus-within:pointer-events-auto group-hover:pointer-events-auto`),
            disabled: h == null || l,
            onClick: e => {
                h == null || l || (e.currentTarget.blur(), h())
            },
            type: `button`,
            children: (0, J.jsx)(f, {
                ...X.createGridKind,
                values: {
                    kind: T ?? `other`
                }
            })
        }) : null, t[17] = T, t[18] = l, t[19] = O, t[20] = h, t[21] = N) : N = t[21];
        let P;
        t[22] !== O || t[23] !== y.kind ? (P = y.kind != null && !O && (0, J.jsxs)(`span`, {
            "aria-hidden": `true`,
            className: `pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-1.5 bg-gradient-to-t from-black/80 to-transparent px-2 pt-6 pb-2 text-xs text-white opacity-0 transition-opacity group-focus-within:opacity-100 group-hover:opacity-100 [@media(hover:none)]:opacity-100`,
            children: [y.kind !== `site` && (0, J.jsx)(ee, {
                "aria-hidden": `true`,
                className: `size-4 shrink-0`,
                kind: y.kind
            }), (0, J.jsx)(f, {
                id: `chatgpt.home_composer.artifact_templates.card.kind.label`,
                defaultMessage: `{kind, select, document {Word} presentation {PowerPoint} spreadsheet {Excel} google_docs {Google Docs} google_slides {Google Slides} google_sheets {Google Sheets} site {Sites} other {Template}}`,
                values: {
                    kind: y.kind.replaceAll(`-`, `_`)
                }
            })]
        }), t[22] = O, t[23] = y.kind, t[24] = P) : P = t[24];
        let F;
        t[25] !== k || t[26] !== A || t[27] !== j || t[28] !== M || t[29] !== N || t[30] !== P ? (F = (0, J.jsxs)(`div`, {
            className: k,
            style: A,
            children: [j, M, N, P]
        }), t[25] = k, t[26] = A, t[27] = j, t[28] = M, t[29] = N, t[30] = P, t[31] = F) : F = t[31];
        let I;
        t[32] !== b || t[33] !== O ? (I = i(`max-w-full min-w-0`, O ? `text-token-text-secondary group-focus-within:text-token-text-primary group-hover:text-token-text-primary mt-3 line-clamp-2 ps-[6px] text-sm leading-5 font-normal transition-colors duration-150 wrap-break-word [text-box-trim:trim-both]` : i(`truncate px-2 leading-5`, b === `compact` ? `text-token-text-secondary text-xs` : `text-token-text-tertiary text-sm`)), t[32] = b, t[33] = O, t[34] = I) : I = t[34];
        let L;
        t[35] !== I || t[36] !== y.displayName ? (L = (0, J.jsx)(`span`, {
            className: I,
            children: y.displayName
        }), t[35] = I, t[36] = y.displayName, t[37] = L) : L = t[37];
        let R;
        t[38] !== F || t[39] !== L ? (R = (0, J.jsxs)(J.Fragment, {
            children: [F, L]
        }), t[38] = F, t[39] = L, t[40] = R) : R = t[40];
        let z = R,
            B;
        t[41] !== d || t[42] !== m || t[43] !== C || t[44] !== x ? (B = Z({
            index: d,
            isVisible: m,
            prefersReducedMotion: C,
            shouldAnimateLayout: x
        }), t[41] = d, t[42] = m, t[43] = C, t[44] = x, t[45] = B) : B = t[45];
        let H;
        t[46] === Symbol.for(`react.memo_cache_sentinel`) ? (H = i(`group relative isolate min-w-0 shrink-0`, W.card), t[46] = H) : H = t[46];
        let U;
        t[47] !== o || t[48] !== z || t[49] !== b || t[50] !== l || t[51] !== O || t[52] !== p || t[53] !== g ? (U = O ? (0, J.jsxs)(J.Fragment, {
            children: [(0, J.jsx)(`button`, {
                "aria-label": o,
                "aria-pressed": p,
                className: `interactive-button interactive-outline-secondary absolute inset-0 z-0 w-full`,
                "data-artifact-template-card": !0,
                disabled: l,
                onClick: g,
                type: `button`
            }), (0, J.jsx)(`div`, {
                className: i(`pointer-events-none relative z-[1] flex w-full min-w-0 flex-col text-start`, p && `bg-token-bg-secondary`, l && `opacity-50`),
                children: z
            })]
        }) : (0, J.jsx)(`button`, {
            "aria-label": o,
            "aria-pressed": p,
            className: i(`interactive-button interactive-outline-secondary flex w-full min-w-0 flex-col text-start`, `rounded-xl border-0 pb-2`, b === `compact` ? `gap-2` : `gap-3`, p && `bg-token-bg-secondary`),
            "data-artifact-template-card": !0,
            disabled: l,
            onClick: g,
            type: `button`,
            children: z
        }), t[47] = o, t[48] = z, t[49] = b, t[50] = l, t[51] = O, t[52] = p, t[53] = g, t[54] = U) : U = t[54];
        let G;
        t[55] !== n || t[56] !== O ? (G = n != null && (0, J.jsx)(`div`, {
            className: i(`pointer-events-none absolute z-10 -translate-y-1 opacity-0 transition-[opacity,transform] duration-150 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 has-data-[state=open]:pointer-events-auto has-data-[state=open]:translate-y-0 has-data-[state=open]:opacity-100 [@media(hover:none)]:pointer-events-auto [@media(hover:none)]:translate-y-0 [@media(hover:none)]:opacity-100`, O ? `end-4 top-4` : `end-2 top-2`),
            children: n
        }), t[55] = n, t[56] = O, t[57] = G) : G = t[57];
        let Y;
        return t[58] !== T || t[59] !== c || t[60] !== B || t[61] !== U || t[62] !== G ? (Y = (0, J.jsxs)(a.div, {
            ...B,
            "data-display-mode": c,
            "data-template-kind": T,
            className: H,
            children: [U, G]
        }), t[58] = T, t[59] = c, t[60] = B, t[61] = U, t[62] = G, t[63] = Y) : Y = t[63], Y
    }, $ = e => {
        "use forget";
        let n = (0, q.c)(23),
            {
                isUninstallPending: r,
                onEdit: i,
                onShare: a,
                onUninstall: o,
                onUse: s,
                title: c
            } = e,
            l = _(),
            u;
        n[0] !== l || n[1] !== c ? (u = l.formatMessage(X.templateActions, {
            title: c
        }), n[0] = l, n[1] = c, n[2] = u) : u = n[2];
        let d;
        n[3] === u ? d = n[4] : (d = (0, J.jsx)(E.BasicTrigger, {
            asChild: !0,
            children: (0, J.jsx)(t, {
                className: `border-token-border-light bg-token-bg-elevated-primary text-token-icon-primary hover:bg-token-bg-elevated-primary/80! size-5 min-h-0 rounded-md border p-0 shadow-none transition-colors`,
                color: `ghost`,
                icon: j,
                iconClassName: `text-token-icon-primary size-4`,
                label: u,
                size: `small`,
                type: `button`
            })
        }), n[3] = u, n[4] = d);
        let p;
        n[5] === Symbol.for(`react.memo_cache_sentinel`) ? (p = (0, J.jsx)(f, {
            ...X.applyTemplate
        }), n[5] = p) : p = n[5];
        let m;
        n[6] === s ? m = n[7] : (m = (0, J.jsx)(E.Item, {
            onClick: s,
            children: p
        }), n[6] = s, n[7] = m);
        let h;
        n[8] === i ? h = n[9] : (h = i == null ? null : (0, J.jsx)(E.Item, {
            icon: P,
            onClick: i,
            children: (0, J.jsx)(f, {
                ...X.editTemplate
            })
        }), n[8] = i, n[9] = h);
        let g;
        n[10] === a ? g = n[11] : (g = a == null ? null : (0, J.jsx)(E.Item, {
            icon: R,
            onClick: a,
            children: (0, J.jsx)(f, {
                ...X.shareTemplate
            })
        }), n[10] = a, n[11] = g);
        let v;
        n[12] !== r || n[13] !== o ? (v = o == null ? null : (0, J.jsx)(E.Item, {
            color: `danger`,
            disabled: r,
            icon: L,
            onClick: o,
            children: (0, J.jsx)(f, {
                ...X.uninstallTemplate
            })
        }), n[12] = r, n[13] = o, n[14] = v) : v = n[14];
        let y;
        n[15] !== m || n[16] !== h || n[17] !== g || n[18] !== v ? (y = (0, J.jsx)(E.Portal, {
            children: (0, J.jsxs)(E.Content, {
                align: `end`,
                hideWhenDetached: !0,
                size: `medium`,
                children: [m, h, g, v]
            })
        }), n[15] = m, n[16] = h, n[17] = g, n[18] = v, n[19] = y) : y = n[19];
        let b;
        return n[20] !== d || n[21] !== y ? (b = (0, J.jsxs)(E.Root, {
            modal: !1,
            children: [d, y]
        }), n[20] = d, n[21] = y, n[22] = b) : b = n[22], b
    }, te = e => {
        "use forget";
        let t = (0, q.c)(16),
            {
                displayMode: n,
                kind: r
            } = e,
            a;
        t[0] === r ? a = t[1] : (a = S(r), t[0] = r, t[1] = a);
        let o = a,
            s = o === `document`,
            c = n === `create-grid`,
            l = c ? `gap-1.5` : `pb-2`,
            u;
        t[2] === l ? u = t[3] : (u = i(`skeleton group flex min-w-0 shrink-0 flex-col gap-3 [--skeleton-opacity:0.75]`, l, W.card), t[2] = l, t[3] = u);
        let d = c ? `rounded-[20px] aspect-[5/4]` : s ? `aspect-[179/204] rounded-[20px]` : `aspect-video rounded-[20px]`,
            f;
        t[4] === d ? f = t[5] : (f = i(`skeleton-child w-full`, d), t[4] = d, t[5] = f);
        let p;
        t[6] === f ? p = t[7] : (p = (0, J.jsx)(`div`, {
            "data-testid": `artifact-template-card-preview-skeleton`,
            className: f
        }), t[6] = f, t[7] = p);
        let m;
        t[8] === c ? m = t[9] : (m = c ? (0, J.jsx)(`div`, {
            className: `skeleton-child ms-[6px] h-4 w-2/3 rounded-sm`
        }) : (0, J.jsx)(`div`, {
            className: `h-5 shrink-0`
        }), t[8] = c, t[9] = m);
        let h;
        return t[10] !== o || t[11] !== n || t[12] !== u || t[13] !== p || t[14] !== m ? (h = (0, J.jsxs)(`div`, {
            "aria-hidden": `true`,
            "data-display-mode": n,
            "data-template-kind": o,
            "data-testid": `artifact-template-card-skeleton`,
            className: u,
            children: [p, m]
        }), t[10] = o, t[11] = n, t[12] = u, t[13] = p, t[14] = m, t[15] = h) : h = t[15], h
    }, ne = e => {
        "use forget";
        let t = (0, q.c)(30),
            {
                index: n,
                isDocument: r,
                isCreateGrid: a,
                isSpreadsheet: o,
                preview: c,
                template: l
            } = e,
            u = s(),
            d;
        t[0] === u ? d = t[1] : (d = w(u), t[0] = u, t[1] = d);
        let f = d,
            m = typeof IntersectionObserver < `u`,
            h;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (h = {
            onlyOnce: !0,
            threshold: .1
        }, t[2] = h) : h = t[2];
        let [g, _] = D(h), v = n < 3 || !m || g, y;
        t[3] !== c.hazelnutId || t[4] !== c.range.length || t[5] !== c.range.start || t[6] !== c.sedimentId || t[7] !== c.version || t[8] !== f.accountUserId || t[9] !== f.workspaceId ? (y = [`hazelnut-artifact-template-preview`, `identity`, f.accountUserId, f.workspaceId, c.hazelnutId, c.sedimentId, c.version, c.range.start, c.range.length], t[3] = c.hazelnutId, t[4] = c.range.length, t[5] = c.range.start, t[6] = c.sedimentId, t[7] = c.version, t[8] = f.accountUserId, t[9] = f.workspaceId, t[10] = y) : y = t[10];
        let b;
        t[11] !== c.hazelnutId || t[12] !== c.range || t[13] !== c.sedimentId ? (b = e => {
            let {
                signal: t
            } = e;
            return C({
                hazelnutId: c.hazelnutId,
                path: `assets/preview.png`,
                range: c.range,
                sedimentId: c.sedimentId,
                signal: t
            })
        }, t[11] = c.hazelnutId, t[12] = c.range, t[13] = c.sedimentId, t[14] = b) : b = t[14];
        let S;
        t[15] !== v || t[16] !== y || t[17] !== b ? (S = {
            queryKey: y,
            enabled: v,
            staleTime: 3e5,
            retry: !1,
            queryFn: b
        }, t[15] = v, t[16] = y, t[17] = b, t[18] = S) : S = t[18];
        let T = p(S),
            E;
        t[19] === T.data ? E = t[20] : (E = T.data == null ? void 0 : new Blob([T.data], {
            type: `image/png`
        }), t[19] = T.data, t[20] = E);
        let O = E,
            k = x(O),
            A = n >= 3 && m ? _ : void 0,
            j;
        t[21] !== a || t[22] !== r || t[23] !== o ? (j = i(a ? K({
            isDocument: r,
            isSpreadsheet: o
        }) : `h-full w-full object-cover object-top`), t[21] = a, t[22] = r, t[23] = o, t[24] = j) : j = t[24];
        let M = n < 3 ? `eager` : `lazy`,
            N = O != null && k != null ? k : l.previewUrl,
            P;
        return t[25] !== M || t[26] !== N || t[27] !== A || t[28] !== j ? (P = (0, J.jsx)(`img`, {
            ref: A,
            alt: ``,
            className: j,
            loading: M,
            src: N
        }), t[25] = M, t[26] = N, t[27] = A, t[28] = j, t[29] = P) : P = t[29], P
    }
}));

function ie(e, t) {
    let n = new Set(e.filter(e => e.id === e.pluginId).map(e => e.id)),
        r = new Map;
    for (let e of t) {
        let t = e.files[`assets/preview.png`];
        !e.enabled || !n.has(e.id) || O(e) != null || !e.sediment_id || t == null || !Number.isSafeInteger(t.start) || t.start < 0 || !Number.isSafeInteger(t.length) || t.length <= 0 || !Number.isSafeInteger(t.start + t.length - 1) || r.set(e.id, {
            hazelnutId: e.id,
            range: t,
            sedimentId: e.sediment_id,
            version: e.last_updated_at
        })
    }
    return r
}
var ae = e((() => {
    A()
}));
export {
    te as a, W as c, $ as i, V as l, ae as n, re as o, Q as r, G as s, ie as t, H as u
};
//# sourceMappingURL=56c87a20-ne9mmirwdyygw867.js.map
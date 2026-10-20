import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    At as t,
    G5 as n,
    I1 as r,
    JT as i,
    Jt as a,
    K5 as o,
    Y1 as s,
    cn as c,
    qT as l
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    Bn as u,
    Ln as d,
    Nn as f,
    O as p,
    Rn as m,
    s as h,
    wn as g,
    zn as _
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    B2 as v,
    Dmt as y,
    L2 as b,
    LHn as x,
    Omt as S,
    RHn as C,
    Yvt as w,
    dGn as T,
    eyt as E,
    fGn as D,
    g$ as O,
    h$ as k,
    ryt as A
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    Ax as j,
    Fx as M,
    Ix as N,
    ai as P,
    bS as F,
    ii as I,
    kx as L,
    yS as R
} from "./30901919-om7b3qf5hp4j9x4l.js";
import {
    n as ee,
    r as z
} from "./467c4cbf-ibfalb56a9iizxpd.js";
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
    return n(`absolute rounded-[8px] shadow-[0_4px_12px_rgb(0_0_0/0.12)]`, e ? `start-1/2 top-[16%] h-auto w-[58%] -translate-x-1/2 scale-110 object-contain object-top` : n(`start-1/2 top-1/2 h-auto max-h-[76%] w-[84%] -translate-x-1/2 -translate-y-1/2`, t ? `aspect-video object-cover` : `object-contain`))
}
var q, J, Y, X, Z, Q, $, te, ne, re = e((() => {
    q = g(), i(), C(), j(), I(), M(), R(), A(), r(), z(), v(), T(), y(), h(), o(), t(), m(), H(), G(), J = u(), Y = [0, 0, .28, 1], X = d({
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
                actions: r,
                ariaLabel: i,
                createGridBackgroundColor: o,
                displayMode: s,
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
            x = u === void 0 ? `default` : u,
            S = v !== void 0 && v,
            C = a(),
            w;
        t[0] === y.kind ? w = t[1] : (w = y.kind == null ? void 0 : b(y.kind), t[0] = y.kind, t[1] = w);
        let T = w,
            E = T === `document`,
            D = T === `spreadsheet`,
            O = s === `create-grid`,
            k;
        t[2] !== O || t[3] !== E ? (k = n(`relative w-full`, O ? `overflow-hidden rounded-[20px] bg-[#f5f5f5] aspect-[5/4]` : n(`border-token-border-light bg-token-bg-primary overflow-hidden rounded-xl border`, E ? `aspect-[179/204]` : `aspect-video`)), t[2] = O, t[3] = E, t[4] = k) : k = t[4];
        let A;
        t[5] !== o || t[6] !== O ? (A = O && o != null ? {
            backgroundColor: o
        } : void 0, t[5] = o, t[6] = O, t[7] = A) : A = t[7];
        let j;
        t[8] !== d || t[9] !== O || t[10] !== E || t[11] !== D || t[12] !== _ || t[13] !== y ? (j = _ == null ? (0, J.jsx)(`img`, {
            alt: ``,
            className: n(O ? K({
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
            className: n(`absolute end-3 bottom-3 z-[1] rounded-full bg-transparent px-3 py-1.5 text-sm leading-5 font-medium text-white opacity-0 group-focus-within:opacity-100 group-hover:opacity-100`, V.tag, h == null || l ? `pointer-events-none` : `pointer-events-none cursor-pointer group-focus-within:pointer-events-auto group-hover:pointer-events-auto`),
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
        t[32] !== x || t[33] !== O ? (I = n(`max-w-full min-w-0`, O ? `text-token-text-secondary group-focus-within:text-token-text-primary group-hover:text-token-text-primary mt-3 line-clamp-2 ps-[6px] text-sm leading-5 font-normal transition-colors duration-150 wrap-break-word [text-box-trim:trim-both]` : n(`truncate px-2 leading-5`, x === `compact` ? `text-token-text-secondary text-xs` : `text-token-text-tertiary text-sm`)), t[32] = x, t[33] = O, t[34] = I) : I = t[34];
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
        t[41] !== d || t[42] !== m || t[43] !== C || t[44] !== S ? (B = Z({
            index: d,
            isVisible: m,
            prefersReducedMotion: C,
            shouldAnimateLayout: S
        }), t[41] = d, t[42] = m, t[43] = C, t[44] = S, t[45] = B) : B = t[45];
        let H;
        t[46] === Symbol.for(`react.memo_cache_sentinel`) ? (H = n(`group relative isolate min-w-0 shrink-0`, W.card), t[46] = H) : H = t[46];
        let U;
        t[47] !== i || t[48] !== z || t[49] !== x || t[50] !== l || t[51] !== O || t[52] !== p || t[53] !== g ? (U = O ? (0, J.jsxs)(J.Fragment, {
            children: [(0, J.jsx)(`button`, {
                "aria-label": i,
                "aria-pressed": p,
                className: `interactive-button interactive-outline-secondary absolute inset-0 z-0 w-full`,
                "data-artifact-template-card": !0,
                disabled: l,
                onClick: g,
                type: `button`
            }), (0, J.jsx)(`div`, {
                className: n(`pointer-events-none relative z-[1] flex w-full min-w-0 flex-col text-start`, p && `bg-token-bg-secondary`, l && `opacity-50`),
                children: z
            })]
        }) : (0, J.jsx)(`button`, {
            "aria-label": i,
            "aria-pressed": p,
            className: n(`interactive-button interactive-outline-secondary flex w-full min-w-0 flex-col text-start`, `rounded-xl border-0 pb-2`, x === `compact` ? `gap-2` : `gap-3`, p && `bg-token-bg-secondary`),
            "data-artifact-template-card": !0,
            disabled: l,
            onClick: g,
            type: `button`,
            children: z
        }), t[47] = i, t[48] = z, t[49] = x, t[50] = l, t[51] = O, t[52] = p, t[53] = g, t[54] = U) : U = t[54];
        let G;
        t[55] !== r || t[56] !== O ? (G = r != null && (0, J.jsx)(`div`, {
            className: n(`pointer-events-none absolute z-10 -translate-y-1 opacity-0 transition-[opacity,transform] duration-150 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 has-data-[state=open]:pointer-events-auto has-data-[state=open]:translate-y-0 has-data-[state=open]:opacity-100 [@media(hover:none)]:pointer-events-auto [@media(hover:none)]:translate-y-0 [@media(hover:none)]:opacity-100`, O ? `end-4 top-4` : `end-2 top-2`),
            children: r
        }), t[55] = r, t[56] = O, t[57] = G) : G = t[57];
        let Y;
        return t[58] !== T || t[59] !== s || t[60] !== B || t[61] !== U || t[62] !== G ? (Y = (0, J.jsxs)(c.div, {
            ...B,
            "data-display-mode": s,
            "data-template-kind": T,
            className: H,
            children: [U, G]
        }), t[58] = T, t[59] = s, t[60] = B, t[61] = U, t[62] = G, t[63] = Y) : Y = t[63], Y
    }, $ = e => {
        "use forget";
        let t = (0, q.c)(23),
            {
                isUninstallPending: n,
                onEdit: r,
                onShare: i,
                onUninstall: a,
                onUse: o,
                title: s
            } = e,
            c = _(),
            u;
        t[0] !== c || t[1] !== s ? (u = c.formatMessage(X.templateActions, {
            title: s
        }), t[0] = c, t[1] = s, t[2] = u) : u = t[2];
        let d;
        t[3] === u ? d = t[4] : (d = (0, J.jsx)(x.BasicTrigger, {
            asChild: !0,
            children: (0, J.jsx)(l, {
                className: `border-token-border-light bg-token-bg-elevated-primary text-token-icon-primary hover:bg-token-bg-elevated-primary/80! size-5 min-h-0 rounded-md border p-0 shadow-none transition-colors`,
                color: `ghost`,
                icon: L,
                iconClassName: `text-token-icon-primary size-4`,
                label: u,
                size: `small`,
                type: `button`
            })
        }), t[3] = u, t[4] = d);
        let p;
        t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (p = (0, J.jsx)(f, {
            ...X.applyTemplate
        }), t[5] = p) : p = t[5];
        let m;
        t[6] === o ? m = t[7] : (m = (0, J.jsx)(x.Item, {
            onClick: o,
            children: p
        }), t[6] = o, t[7] = m);
        let h;
        t[8] === r ? h = t[9] : (h = r == null ? null : (0, J.jsx)(x.Item, {
            icon: N,
            onClick: r,
            children: (0, J.jsx)(f, {
                ...X.editTemplate
            })
        }), t[8] = r, t[9] = h);
        let g;
        t[10] === i ? g = t[11] : (g = i == null ? null : (0, J.jsx)(x.Item, {
            icon: F,
            onClick: i,
            children: (0, J.jsx)(f, {
                ...X.shareTemplate
            })
        }), t[10] = i, t[11] = g);
        let v;
        t[12] !== n || t[13] !== a ? (v = a == null ? null : (0, J.jsx)(x.Item, {
            color: `danger`,
            disabled: n,
            icon: P,
            onClick: a,
            children: (0, J.jsx)(f, {
                ...X.uninstallTemplate
            })
        }), t[12] = n, t[13] = a, t[14] = v) : v = t[14];
        let y;
        t[15] !== m || t[16] !== h || t[17] !== g || t[18] !== v ? (y = (0, J.jsx)(x.Portal, {
            children: (0, J.jsxs)(x.Content, {
                align: `end`,
                hideWhenDetached: !0,
                size: `medium`,
                children: [m, h, g, v]
            })
        }), t[15] = m, t[16] = h, t[17] = g, t[18] = v, t[19] = y) : y = t[19];
        let b;
        return t[20] !== d || t[21] !== y ? (b = (0, J.jsxs)(x.Root, {
            modal: !1,
            children: [d, y]
        }), t[20] = d, t[21] = y, t[22] = b) : b = t[22], b
    }, te = e => {
        "use forget";
        let t = (0, q.c)(16),
            {
                displayMode: r,
                kind: i
            } = e,
            a;
        t[0] === i ? a = t[1] : (a = b(i), t[0] = i, t[1] = a);
        let o = a,
            s = o === `document`,
            c = r === `create-grid`,
            l = c ? `gap-1.5` : `pb-2`,
            u;
        t[2] === l ? u = t[3] : (u = n(`skeleton group flex min-w-0 shrink-0 flex-col gap-3 [--skeleton-opacity:0.75]`, l, W.card), t[2] = l, t[3] = u);
        let d = c ? `rounded-[20px] aspect-[5/4]` : s ? `aspect-[179/204] rounded-[20px]` : `aspect-video rounded-[20px]`,
            f;
        t[4] === d ? f = t[5] : (f = n(`skeleton-child w-full`, d), t[4] = d, t[5] = f);
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
        return t[10] !== o || t[11] !== r || t[12] !== u || t[13] !== p || t[14] !== m ? (h = (0, J.jsxs)(`div`, {
            "aria-hidden": `true`,
            "data-display-mode": r,
            "data-template-kind": o,
            "data-testid": `artifact-template-card-skeleton`,
            className: u,
            children: [p, m]
        }), t[10] = o, t[11] = r, t[12] = u, t[13] = p, t[14] = m, t[15] = h) : h = t[15], h
    }, ne = e => {
        "use forget";
        let t = (0, q.c)(30),
            {
                index: r,
                isDocument: i,
                isCreateGrid: a,
                isSpreadsheet: o,
                preview: c,
                template: l
            } = e,
            u = s(),
            d;
        t[0] === u ? d = t[1] : (d = E(u), t[0] = u, t[1] = d);
        let f = d,
            m = typeof IntersectionObserver < `u`,
            h;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (h = {
            onlyOnce: !0,
            threshold: .1
        }, t[2] = h) : h = t[2];
        let [g, _] = D(h), v = r < 3 || !m || g, y;
        t[3] !== c.hazelnutId || t[4] !== c.range.length || t[5] !== c.range.start || t[6] !== c.sedimentId || t[7] !== c.version || t[8] !== f.accountUserId || t[9] !== f.workspaceId ? (y = [`hazelnut-artifact-template-preview`, `identity`, f.accountUserId, f.workspaceId, c.hazelnutId, c.sedimentId, c.version, c.range.start, c.range.length], t[3] = c.hazelnutId, t[4] = c.range.length, t[5] = c.range.start, t[6] = c.sedimentId, t[7] = c.version, t[8] = f.accountUserId, t[9] = f.workspaceId, t[10] = y) : y = t[10];
        let b;
        t[11] !== c.hazelnutId || t[12] !== c.range || t[13] !== c.sedimentId ? (b = e => {
            let {
                signal: t
            } = e;
            return w({
                hazelnutId: c.hazelnutId,
                path: `assets/preview.png`,
                range: c.range,
                sedimentId: c.sedimentId,
                signal: t
            })
        }, t[11] = c.hazelnutId, t[12] = c.range, t[13] = c.sedimentId, t[14] = b) : b = t[14];
        let x;
        t[15] !== v || t[16] !== y || t[17] !== b ? (x = {
            queryKey: y,
            enabled: v,
            staleTime: 3e5,
            retry: !1,
            queryFn: b
        }, t[15] = v, t[16] = y, t[17] = b, t[18] = x) : x = t[18];
        let C = p(x),
            T;
        t[19] === C.data ? T = t[20] : (T = C.data == null ? void 0 : new Blob([C.data], {
            type: `image/png`
        }), t[19] = C.data, t[20] = T);
        let O = T,
            k = S(O),
            A = r >= 3 && m ? _ : void 0,
            j;
        t[21] !== a || t[22] !== i || t[23] !== o ? (j = n(a ? K({
            isDocument: i,
            isSpreadsheet: o
        }) : `h-full w-full object-cover object-top`), t[21] = a, t[22] = i, t[23] = o, t[24] = j) : j = t[24];
        let M = r < 3 ? `eager` : `lazy`,
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
        !e.enabled || !n.has(e.id) || k(e) != null || !e.sediment_id || t == null || !Number.isSafeInteger(t.start) || t.start < 0 || !Number.isSafeInteger(t.length) || t.length <= 0 || !Number.isSafeInteger(t.start + t.length - 1) || r.set(e.id, {
            hazelnutId: e.id,
            range: t,
            sedimentId: e.sediment_id,
            version: e.last_updated_at
        })
    }
    return r
}
var ae = e((() => {
    O()
}));
export {
    te as a, W as c, $ as i, V as l, ae as n, re as o, Q as r, G as s, ie as t, H as u
};
//# sourceMappingURL=56c87a20-oio1cxh6wna69557.js.map
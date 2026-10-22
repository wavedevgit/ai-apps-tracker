import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bm as n,
    Int as r,
    Jnt as i,
    Lp as a,
    N1 as o,
    N8 as s,
    P8 as c,
    Pnt as l,
    Rz as u,
    U1 as d,
    Up as f,
    c7 as p,
    jst as ee,
    k8 as te,
    l7 as ne,
    prt as re,
    q1 as ie,
    qnt as ae,
    srt as oe,
    vct as se,
    zz as ce
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Bn as le,
    Ln as ue,
    Nn as de,
    O as fe,
    Rn as pe,
    Vn as m,
    s as h,
    wn as g,
    zn as me
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $At as he,
    CPt as ge,
    DPt as _e,
    EPt as ve,
    FPt as ye,
    GIn as be,
    H9t as _,
    I9t as xe,
    IPt as v,
    JIn as Se,
    JOt as Ce,
    KPt as y,
    M9t as we,
    OPt as b,
    Q9t as Te,
    SX as Ee,
    TPt as x,
    U9t as De,
    XPt as S,
    XTt as Oe,
    ZPt as ke,
    ZTt as Ae,
    eEt as je,
    eGt as Me,
    een as Ne,
    fpt as C,
    iPt as Pe,
    njt as w,
    qOt as T,
    rGt as Fe,
    rPt as E,
    tEt as Ie,
    upt as Le,
    wPt as Re,
    xX as D,
    z9t as ze
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    Ap as Be,
    Cx as Ve,
    Sx as He,
    dS as Ue,
    jp as O,
    uS as We
} from "./30901919-ikyi1r55w2i02fom.js";
import {
    Bd as Ge,
    dp as Ke,
    lp as qe,
    zd as Je
} from "./8b34dbc2-m4883pai3e8fx8q6.js";
import {
    d as k,
    u as A
} from "./9e958008-ethw0c5owg6i9vnq.js";
import {
    r as j,
    t as M
} from "./84bcef95-h5nr2lk6wr8pjvu3.js";
import {
    n as Ye,
    t as N
} from "./3b813a7d-hmrd9qtqimunl5qj.js";
import {
    a as Xe,
    o as Ze
} from "./8c1c50db-je61ockg3o4ou36a.js";
var P, F = e((() => {
    ne(), A(), P = {
        headerWrapper: p(k.wideCompactWidth, k.wideCompactHeader),
        toolbarInner: k.wideCompactWidth,
        contentWrapper: p(k.wideCompactWidth, k.wideCompactContent),
        contentInner: k.wideCompactContentInner
    }
}));

function Qe(e) {
    return e ? tt : R
}

function $e(e, t) {
    return {
        stickyHeader: e,
        classNames: {
            ...e ? B : t ? nt : M,
            toolbarShell: p(N.toolbarShell, e && N.refreshedStickyToolbarShell)
        }
    }
}
var et, I, L, R, tt, z, nt, B, rt, it = e((() => {
        j(), F(), ne(), Ye(), et = new Set, I = `directory_id`, L = `search`, R = `grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3`, tt = N.refreshedGridSection, z = N.refreshedMasonryGridSection, nt = {
            ...M,
            headerWrapper: `max-w-app-content px-4! pt-4 md:mt-[calc(2.5rem-var(--header-height))] md:pt-0`
        }, B = {
            ...P,
            headerWrapper: N.refreshedHeaderWrapper,
            stickyHeaderContent: N.refreshedStickyHeaderContent,
            toolbarInner: N.refreshedToolbarInner,
            contentWrapper: N.refreshedContentWrapper
        }, rt = ({
            showSharedBy: e = !1,
            showSizeColumn: t = !0,
            compact: n = !0
        } = {}) => p(n ? N.compactListColumns : t ? N.fullListColumnsWithSize : N.fullListColumnsWithoutSize, e ? N.desktopListColumnsWithSharedBy : t ? N.desktopListColumnsWithSize : N.desktopListColumnsWithoutSize)
    })),
    at, V, H, U = e((() => {
        at = g(), V = le(), H = e => {
            "use forget";
            let t = (0, at.c)(8),
                {
                    title: n,
                    metadata: r,
                    metadataDescriptionId: i
                } = e,
                a;
            t[0] === n ? a = t[1] : (a = (0, V.jsx)(`div`, {
                className: `text-token-text-primary text-body-small-medium truncate`,
                dir: `auto`,
                title: n,
                children: n
            }), t[0] = n, t[1] = a);
            let o;
            t[2] !== r || t[3] !== i ? (o = (0, V.jsx)(`div`, {
                id: i,
                className: `text-token-text-secondary text-footnote min-h-5`,
                children: r
            }), t[2] = r, t[3] = i, t[4] = o) : o = t[4];
            let s;
            return t[5] !== a || t[6] !== o ? (s = (0, V.jsxs)(`div`, {
                className: `min-w-0`,
                children: [a, o]
            }), t[5] = a, t[6] = o, t[7] = s) : s = t[7], s
        }
    })),
    W, G, ot, st, K = e((() => {
        W = g(), O(), U(), pe(), G = le(), ot = `•`, st = e => {
            "use forget";
            let t = (0, W.c)(16),
                {
                    title: n,
                    url: r,
                    price: i
                } = e,
                a = me(),
                o;
            t[0] === i ? o = t[1] : (o = i?.trim() ? (0, G.jsxs)(G.Fragment, {
                children: [(0, G.jsx)(`span`, {
                    children: i
                }), (0, G.jsx)(`span`, {
                    "aria-hidden": `true`,
                    children: ot
                })]
            }) : null, t[0] = i, t[1] = o);
            let s;
            t[2] !== a || t[3] !== n ? (s = a.formatMessage({
                id: `chatgpt.shopping.virtual_try_on.result.product.buy_link_accessible_with_product`,
                defaultMessage: `Buy it here: {productName}`
            }, {
                productName: n
            }), t[2] = a, t[3] = n, t[4] = s) : s = t[4];
            let c, l;
            t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, G.jsx)(de, {
                id: `chatgpt.shopping.virtual_try_on.result.product.buy_link`,
                defaultMessage: `Buy it here`
            }), l = (0, G.jsx)(Be, {
                className: `icon-sm shrink-0`,
                "aria-hidden": `true`
            }), t[5] = c, t[6] = l) : (c = t[5], l = t[6]);
            let u;
            t[7] !== s || t[8] !== r ? (u = (0, G.jsxs)(`a`, {
                href: r,
                target: `_blank`,
                rel: `noopener noreferrer`,
                "aria-label": s,
                className: `hover:text-token-text-primary inline-flex w-fit items-center gap-1 underline underline-offset-4 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2`,
                children: [c, l]
            }), t[7] = s, t[8] = r, t[9] = u) : u = t[9];
            let d;
            t[10] !== o || t[11] !== u ? (d = (0, G.jsxs)(`div`, {
                className: `flex flex-wrap items-center gap-x-1`,
                children: [o, u]
            }), t[10] = o, t[11] = u, t[12] = d) : d = t[12];
            let f;
            return t[13] !== d || t[14] !== n ? (f = (0, G.jsx)(H, {
                title: n,
                metadata: d
            }), t[13] = d, t[14] = n, t[15] = f) : f = t[15], f
        }
    }));

function ct(e, t) {
    return e <= 0 || t <= 0 || !Number.isFinite(e) || !Number.isFinite(t) ? 1 : Math.min(_t, Math.max(gt, e / t))
}

function q(e) {
    let t = 0;
    for (let n = 1; n < e.length; n++)(e[n] ?? 1 / 0) < (e[t] ?? 1 / 0) && (t = n);
    return t
}

function lt(e, t) {
    return e == null ? 1 : Math.max(0, (e.width - e.columnGap * (t - 1)) / t)
}

function ut(e, t, n = e.estimatedColumnHeights, r = 1, i = 0, a = !1) {
    let o = [...n],
        s = Array.from({
            length: e.columnCount
        }, () => 0);
    e.columnIndexesByItemId.forEach(e => {
        s[e] = (s[e] ?? 0) + 1
    });
    let c = new Map(e.columnIndexesByItemId);
    return t.forEach(e => {
        let t = q(o),
            n = (s[t] ?? 0) > 0 ? i : 0;
        c.set(e.id, t), o[t] = (o[t] ?? 0) + J(e, r, a) + n, s[t] = (s[t] ?? 0) + 1
    }), {
        columnCount: e.columnCount,
        itemIds: [...e.itemIds, ...t.map(e => e.id)],
        columnIndexesByItemId: c,
        estimatedColumnHeights: o
    }
}

function J(e, t, n) {
    let r = t / e.aspectRatio;
    return n ? Math.max(r, e.minimumHeight ?? 0) : r
}

function dt(e, t) {
    return ut({
        columnCount: t,
        itemIds: [],
        columnIndexesByItemId: new Map,
        estimatedColumnHeights: Array.from({
            length: t
        }, () => 0)
    }, e)
}

function ft(e, t) {
    return e.length <= t.length && e.every((e, n) => e === t[n])
}

function pt(e, t, n, r) {
    let i = lt(r, t.columnCount),
        a = r?.rowGap ?? 0,
        o = Array.from({
            length: t.columnCount
        }, () => 0),
        s = Array.from({
            length: t.columnCount
        }, () => 0);
    return e.forEach(e => {
        let c = t.columnIndexesByItemId.get(e.id);
        c != null && ((s[c] ?? 0) > 0 && (o[c] = (o[c] ?? 0) + a), o[c] = (o[c] ?? 0) + (n.get(e.id) ?? J(e, i, r != null)), s[c] = (s[c] ?? 0) + 1)
    }), o
}

function mt(e, t, n, r, i) {
    let a = t.map(e => e.id);
    if (e.columnCount === n && a.length === e.itemIds.length && ft(e.itemIds, a)) return e;
    if (e.columnCount === n && ft(e.itemIds, a)) {
        let a = t.slice(0, e.itemIds.length);
        return ut(e, t.slice(e.itemIds.length), pt(a, e, r, i), lt(i, n), i?.rowGap, i != null)
    }
    if (e.columnCount === n && ft(a, e.itemIds)) {
        let t = new Set(a);
        return {
            ...e,
            itemIds: a,
            columnIndexesByItemId: new Map([...e.columnIndexesByItemId].filter(([e]) => t.has(e)))
        }
    }
    return dt(t, n)
}

function ht(e, t, n, r) {
    if (r == null) return {
        gridHeight: void 0,
        placementsByItemId: new Map
    };
    let i = lt(r, t.columnCount),
        a = Array.from({
            length: t.columnCount
        }, () => 0),
        o = Array.from({
            length: t.columnCount
        }, () => 0),
        s = new Map;
    return e.forEach(e => {
        let c = t.columnIndexesByItemId.get(e.id);
        c != null && ((o[c] ?? 0) > 0 && (a[c] = (a[c] ?? 0) + r.rowGap), s.set(e.id, {
            columnIndex: c,
            top: a[c] ?? 0
        }), a[c] = (a[c] ?? 0) + (n.get(e.id) ?? J(e, i, !0)), o[c] = (o[c] ?? 0) + 1)
    }), {
        gridHeight: Math.max(0, ...a),
        placementsByItemId: s
    }
}
var gt, _t, vt = e((() => {
        gt = 1 / 2, _t = 20 / 13
    })),
    yt, bt, xt, Y, St, X = e((() => {
        yt = `Hj6GLq_imagePlaceholder`, bt = `Hj6GLq_legacySourceBadge`, xt = `Hj6GLq_masonryHoverOverlay`, Y = `Hj6GLq_thumbnailGrid`, St = {
            imagePlaceholder: yt,
            legacySourceBadge: bt,
            masonryHoverOverlay: xt,
            thumbnailGrid: Y
        }
    }));

function Ct(e) {
    return {
        "--library-masonry-aspect-ratio": e,
        "--library-masonry-fallback-min-height": `160px`
    }
}

function wt({
    masonry: e,
    masonryStyle: t,
    selectionControlWithinThumbnail: n,
    square: r
}) {
    return n ? {
        containerClassName: p(`pointer-events-none absolute inset-x-0 top-0 z-10`, e ? `aspect-[var(--library-masonry-aspect-ratio)]` : r ? `aspect-square` : `h-[249px]`),
        controlClassName: p(`pointer-events-auto absolute flex h-5 w-5 items-center justify-center`, e ? `end-4.5 bottom-4.5` : `end-4 bottom-4`),
        style: e ? t : void 0
    } : {
        containerClassName: p(`absolute z-10`, e ? `end-4.5 bottom-4.5` : `end-4 bottom-4`),
        controlClassName: `relative flex h-5 w-5 items-center justify-center`,
        style: void 0
    }
}

function Tt(e, t) {
    let n = t.trim();
    if (n.length === 0 || ke(e)) return n;
    let r = y(Re(e));
    if (!r) return n;
    let i = `.${r}`;
    return n.toLowerCase().endsWith(i) ? n.slice(0, n.length - i.length) : n
}

function Et(e, t, n = {}) {
    return e.map(e => {
        let r = typeof n.showThumbnail == `function` ? n.showThumbnail(e) : n.showThumbnail !== !1,
            i = n.getSharedLibraryFileId?.(e),
            a = i !== void 0 && e.source?.type === `chat_upload` && !E(e),
            o = a ? i : void 0,
            s = Ce(o) && Ee(),
            c = x(e),
            l = we(e),
            u = c.isImageLike || e.classifiers.library_file_category === `image`;
        return {
            id: e.id,
            title: n.getDisplayTitle?.(e) ?? Tt(e, _e(ve(e), e.classifiers.library_artifact_type, n.intl)),
            fileTypeLabel: c.label,
            iconKey: c.iconKey,
            isImageLike: u,
            isDeepResearchReport: ke(e),
            isSavedChatMessage: C(e),
            isSavedEntity: e.source?.type === `saved_entity`,
            isSavedPlace: e.source?.type === `saved_entity` && Je(e.savedEntity?.saved_target.sidebar_params.category) === `place`,
            isSavedProduct: e.classifiers.library_artifact_subtype === `product`,
            virtualTryOnProduct: e.virtualTryOnProduct,
            sizeBytes: e.sizeBytes,
            fileId: s ? o : !r || a ? void 0 : n.getThumbnailFileId?.(e) ?? ge(e) ?? void 0,
            libraryFileId: e.libraryFileId,
            sharedLibraryFileId: s ? o : void 0,
            thumbnailUrl: r && !a ? e.thumbnailUrl : void 0,
            width: r && !a ? e.width : void 0,
            height: r && !a ? e.height : void 0,
            fileName: Re(e),
            mimeType: e.mimeType,
            gizmoId: a ? void 0 : e.gizmoId,
            source: l?.provider,
            mountedLibraryFileId: l?.itemId,
            libraryArtifactType: e.classifiers.library_artifact_type,
            isShared: e.isShared === !0 && (e.source?.type === `google_drive` || e.source?.type === `chat_upload` && Ne()),
            onOpen: () => t(e)
        }
    })
}
var Dt, Ot, Z, kt, At, jt, Q, $, Mt, Nt, Pt, Ft, It, Lt, Rt, zt, Bt = e((() => {
    Dt = g(), D(), Ve(), Ue(), Ie(), Ae(), v(), Ke(), f(), Pe(), ze(), T(), Te(), Ge(), K(), ce(), r(), w(), re(), h(), ne(), Ot = t(m()), pe(), b(), Le(), S(), _(), Ze(), vt(), Fe(), X(), Ye(), Z = le(), kt = `absolute inset-x-0 top-0 flex h-[91px] items-start px-5 py-[14px]`, At = `w-full text-[14px] leading-5 font-medium`, jt = `line-clamp-2 min-w-0 break-words [overflow-wrap:anywhere]`, Q = `absolute inset-x-0 bottom-0 flex h-[68px] items-end px-5 py-[14px]`, $ = `w-full truncate text-[12px] leading-[16px]`, Mt = `rounded-[26px]`, Nt = `rounded-[26px]!`, Pt = `focus-visible:rounded-[26px]`, Ft = `rounded-2xl`, It = `focus-visible:rounded-2xl`, Lt = e => {
        "use forget";
        let t = (0, Dt.c)(11),
            {
                item: n,
                label: r,
                className: i,
                reserveTrailingSpace: a
            } = e,
            o = `artifact-card-meta-container-${n.id}`,
            s = a && `pe-8`,
            c;
        t[0] !== i || t[1] !== s ? (c = p($, `flex items-center gap-1`, i, s), t[0] = i, t[1] = s, t[2] = c) : c = t[2];
        let l;
        t[3] === r ? l = t[4] : (l = (0, Z.jsx)(`span`, {
            className: `min-w-0 truncate`,
            children: r
        }), t[3] = r, t[4] = l);
        let u;
        t[5] !== c || t[6] !== l ? (u = (0, Z.jsx)(`div`, {
            className: c,
            children: l
        }), t[5] = c, t[6] = l, t[7] = u) : u = t[7];
        let d;
        return t[8] !== o || t[9] !== u ? (d = (0, Z.jsx)(`div`, {
            "data-testid": o,
            className: Q,
            children: u
        }), t[8] = o, t[9] = u, t[10] = d) : d = t[10], d
    }, Rt = ue({
        metaTypeOnly: {
            id: `artifacts.surface.recommended.meta.type_only`,
            defaultMessage: `{type}`
        },
        savedMessageMeta: {
            id: `artifacts.surface.saved_chat_message.meta`,
            defaultMessage: `Saved message`
        },
        selectCard: {
            id: `artifacts.surface.recommended.select_card`,
            defaultMessage: `Select {name}`
        },
        cardWithModifiedDate: {
            id: `artifacts.surface.recommended.card_with_modified_date`,
            defaultMessage: `{name}, modified {date}`
        },
        cardWithOpenedDate: {
            id: `artifacts.surface.recommended.card_with_opened_date`,
            defaultMessage: `{name}, opened {date}`
        },
        cardWithSharedDate: {
            id: `artifacts.surface.recommended.card_with_shared_date`,
            defaultMessage: `{name}, shared {date}`
        }
    }), zt = e => {
        "use forget";
        let t = (0, Dt.c)(197),
            {
                item: r,
                className: i,
                selected: o,
                onToggleSelect: s,
                onOpenPreview: c,
                alwaysShowSelectionControl: d,
                openDisabled: f,
                loading: ee,
                loadingLabel: te,
                dateKind: ne,
                showSuggestedActivity: re,
                lastModifiedDate: ie,
                square: ae,
                selectionControlWithinThumbnail: se,
                openButtonContent: ce,
                masonry: le,
                openButtonDescriptionId: ue,
                renderOpenButton: pe
            } = e,
            m = o !== void 0 && o,
            h = d !== void 0 && d,
            g = f !== void 0 && f,
            ge = ee !== void 0 && ee,
            _e = ne === void 0 ? `modified` : ne,
            ve = re !== void 0 && re,
            be = ae !== void 0 && ae,
            _ = se !== void 0 && se,
            v = le !== void 0 && le,
            Se = (0, Ot.useId)(),
            [y, we] = (0, Ot.useState)(null),
            b = me(),
            Te = he(b, ie, ``).trim() || void 0,
            x = r.isImageLike || r.isSavedEntity === !0,
            S = r.isImageLike && r.virtualTryOnProduct != null && oe(`533800488`) ? r.virtualTryOnProduct : null,
            ke = be || r.isSavedPlace === !0,
            Ae = r.thumbnailUrl ? `${r.id}:icon:${r.thumbnailUrl}` : null,
            Ne = !x && Ae != null && Ae !== y,
            C = r.fileId ?? ``,
            Pe = r.fileName ?? r.title,
            w, T, Fe, E, Ie;
        if (t[0] !== y || t[1] !== x || t[2] !== r.gizmoId || t[3] !== r.id || t[4] !== r.isSavedEntity || t[5] !== r.libraryFileId || t[6] !== r.mimeType || t[7] !== r.sharedLibraryFileId || t[8] !== r.source || t[9] !== r.thumbnailUrl || t[10] !== C || t[11] !== Pe) {
            let e = Pe.trim(),
                i = r.mimeType ?? n(e),
                o;
            t[17] !== x || t[18] !== r.id || t[19] !== r.libraryFileId || t[20] !== r.source || t[21] !== r.thumbnailUrl ? (o = x && r.source === `google_drive` && r.thumbnailUrl?.trim() ? a(r.libraryFileId ?? r.id, 512) : void 0, t[17] = x, t[18] = r.id, t[19] = r.libraryFileId, t[20] = r.source, t[21] = r.thumbnailUrl, t[22] = o) : o = t[22], w = o;
            let s = w ? `${r.id}:${C}:${w}` : null;
            Fe = s != null && s !== y;
            let c = !r.isSavedEntity && r.source == null && Ce(r.sharedLibraryFileId) ? r.sharedLibraryFileId : void 0;
            T = !r.isSavedEntity && x && !Fe && C.length > 0 && e.length > 0 && (r.sharedLibraryFileId == null || c != null && Ee()), Ie = fe, E = qe({
                fileId: C,
                fileName: e,
                gizmoId: r.sharedLibraryFileId == null ? r.gizmoId : void 0,
                sharedLibraryFileId: c,
                contentType: i
            }), t[0] = y, t[1] = x, t[2] = r.gizmoId, t[3] = r.id, t[4] = r.isSavedEntity, t[5] = r.libraryFileId, t[6] = r.mimeType, t[7] = r.sharedLibraryFileId, t[8] = r.source, t[9] = r.thumbnailUrl, t[10] = C, t[11] = Pe, t[12] = w, t[13] = T, t[14] = Fe, t[15] = E, t[16] = Ie
        } else w = t[12], T = t[13], Fe = t[14], E = t[15], Ie = t[16];
        let Le;
        t[23] !== T || t[24] !== E ? (Le = {
            ...E,
            enabled: T,
            retry: !1
        }, t[23] = T, t[24] = E, t[25] = Le) : Le = t[25];
        let {
            data: Re,
            error: D,
            isPending: ze
        } = Ie(Le), Be, Ve;
        t[26] !== D || t[27] !== C ? (Be = () => {
            if (!D) return;
            let e = l.logStructuredEvent(`ChatgptRecallThumbnailLoadFailed`, {
                legacyStatsigEventName: `chatgpt_web_recall_files_image_download_error`,
                fileId: C ?? void 0
            });
            l.logValueEventWithStatsig({
                segmentEventName: `web_recall_files_image_download_error`,
                statsigEventName: `chatgpt_web_recall_files_image_download_error`,
                data: {
                    fileId: C
                },
                eventId: e
            })
        }, Ve = [D, C], t[26] = D, t[27] = C, t[28] = Be, t[29] = Ve) : (Be = t[28], Ve = t[29]), (0, Ot.useEffect)(Be, Ve);
        let Ue = r.isSavedEntity ? r.thumbnailUrl : Fe ? w : Re,
            O = Ue ? `${r.id}:${C}:${Ue}` : null,
            [Ge, Ke] = (0, Ot.useState)(null),
            [Je, k] = (0, Ot.useState)(null),
            A = x && O != null && O !== y,
            j = A && O === Ge,
            M = (ve && Te != null ? b.formatMessage(_e === `opened` ? De.suggestedOpenedAt : De.suggestedModifiedAt, {
                relativeTime: Te
            }) : Te) ?? (r.isSavedChatMessage ? b.formatMessage(Rt.savedMessageMeta) : b.formatMessage(Rt.metaTypeOnly, {
                type: r.fileTypeLabel
            })),
            Ye;
        t[30] !== r || t[31] !== c ? (Ye = e => {
            if (c) {
                c(e);
                return
            }
            r.onOpen()
        }, t[30] = r, t[31] = c, t[32] = Ye) : Ye = t[32];
        let Ze = Ye,
            P = r.source,
            F = P == null ? void 0 : b.formatMessage(xe(P).label),
            Qe = F ? b.formatMessage(De.itemWithSource, {
                name: r.title,
                source: F
            }) : r.title,
            $e = Te ? b.formatMessage(_e === `shared` ? Rt.cardWithSharedDate : _e === `opened` ? Rt.cardWithOpenedDate : Rt.cardWithModifiedDate, {
                name: Qe,
                date: Te
            }) : Qe,
            et = b.formatMessage(Rt.selectCard, {
                name: $e
            }),
            I, L, R, tt;
        if (t[33] !== O || t[34] !== y || t[35] !== D || t[36] !== x || t[37] !== ze || t[38] !== r.height || t[39] !== r.isSavedEntity || t[40] !== r.isSavedPlace || t[41] !== r.width || t[42] !== v || t[43] !== Je || t[44] !== _ || t[45] !== A || t[46] !== T || t[47] !== j || t[48] !== ke || t[49] !== S) {
            let e = x ? ct(r.width ?? 0, r.height ?? 0) : 1,
                n = D != null || r.isSavedEntity && O == null || O != null && O === y;
            I = x && !n && !j && (T && ze || A);
            let i = r.isSavedPlace || n ? 1 : x && O != null && Je?.previewKey === O ? Je.aspectRatio : e;
            L = v ? Ct(i) : void 0, R = _ || S != null, tt = wt({
                masonry: v,
                masonryStyle: L,
                selectionControlWithinThumbnail: R,
                square: ke
            }), t[33] = O, t[34] = y, t[35] = D, t[36] = x, t[37] = ze, t[38] = r.height, t[39] = r.isSavedEntity, t[40] = r.isSavedPlace, t[41] = r.width, t[42] = v, t[43] = Je, t[44] = _, t[45] = A, t[46] = T, t[47] = j, t[48] = ke, t[49] = S, t[50] = I, t[51] = L, t[52] = R, t[53] = tt
        } else I = t[50], L = t[51], R = t[52], tt = t[53];
        let z = tt,
            nt;
        t[54] !== O || t[55] !== r.isSavedPlace || t[56] !== v || t[57] !== Ke || t[58] !== k ? (nt = e => {
            O != null && (v && !r.isSavedPlace && k({
                previewKey: O,
                aspectRatio: ct(e.naturalWidth, e.naturalHeight)
            }), Ke(O))
        }, t[54] = O, t[55] = r.isSavedPlace, t[56] = v, t[57] = Ke, t[58] = k, t[59] = nt) : nt = t[59];
        let B = nt,
            rt;
        t[60] === O ? rt = t[61] : (rt = () => {
            O != null && we(O)
        }, t[60] = O, t[61] = rt);
        let it = rt,
            at = `artifact-card-title-container-${r.id}`,
            V;
        t[62] === Symbol.for(`react.memo_cache_sentinel`) ? (V = p(At, `text-token-text-primary flex items-start gap-1`), t[62] = V) : V = t[62];
        let H;
        t[63] === r.title ? H = t[64] : (H = (0, Z.jsx)(`span`, {
            className: jt,
            children: r.title
        }), t[63] = r.title, t[64] = H);
        let U;
        t[65] !== r.id || t[66] !== r.isShared ? (U = r.isShared ? (0, Z.jsx)(`span`, {
            className: `text-token-text-secondary flex h-5 shrink-0 items-center`,
            children: (0, Z.jsx)(Xe, {
                fileId: r.id
            })
        }) : null, t[65] = r.id, t[66] = r.isShared, t[67] = U) : U = t[67];
        let W;
        t[68] !== H || t[69] !== U ? (W = (0, Z.jsxs)(`div`, {
            className: V,
            children: [H, U]
        }), t[68] = H, t[69] = U, t[70] = W) : W = t[70];
        let G;
        t[71] !== at || t[72] !== W ? (G = (0, Z.jsx)(`div`, {
            "data-testid": at,
            className: kt,
            children: W
        }), t[71] = at, t[72] = W, t[73] = G) : G = t[73];
        let ot;
        t[74] === Symbol.for(`react.memo_cache_sentinel`) ? (ot = p(`absolute start-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center`), t[74] = ot) : ot = t[74];
        let K;
        t[75] !== Ae || t[76] !== r.fileName || t[77] !== r.icon || t[78] !== r.iconKey || t[79] !== r.id || t[80] !== r.isSavedChatMessage || t[81] !== r.libraryArtifactType || t[82] !== r.mimeType || t[83] !== r.mountedLibraryFileId || t[84] !== r.thumbnailUrl || t[85] !== Ne || t[86] !== P ? (K = r.icon == null ? r.isSavedChatMessage ? (0, Z.jsx)(We, {
            "aria-hidden": !0,
            className: `icon h-10 w-10`
        }) : Ne ? (0, Z.jsx)(`img`, {
            src: r.thumbnailUrl,
            alt: ``,
            "aria-hidden": `true`,
            className: p(`h-10 w-10 object-contain`, r.thumbnailUrl?.startsWith(`data:image/svg+xml`) && `dark:invert`),
            onError: () => we(Ae)
        }) : P != null && (r.fileName != null || r.mimeType != null) && ye(r.libraryArtifactType) == null ? (0, Z.jsx)(Oe, {
            fileName: r.fileName,
            mimeType: r.mimeType,
            mountedLibraryFileId: r.mountedLibraryFileId ?? r.id,
            libraryProvider: P,
            "aria-hidden": !0,
            className: `icon h-10 w-10`
        }) : (0, Z.jsx)(je, {
            iconKey: r.iconKey,
            "aria-hidden": !0,
            className: `icon h-10 w-10`
        }) : r.icon, t[75] = Ae, t[76] = r.fileName, t[77] = r.icon, t[78] = r.iconKey, t[79] = r.id, t[80] = r.isSavedChatMessage, t[81] = r.libraryArtifactType, t[82] = r.mimeType, t[83] = r.mountedLibraryFileId, t[84] = r.thumbnailUrl, t[85] = Ne, t[86] = P, t[87] = K) : K = t[87];
        let q;
        t[88] === K ? q = t[89] : (q = (0, Z.jsx)(`div`, {
            className: ot,
            children: K
        }), t[88] = K, t[89] = q);
        let lt;
        t[90] === Symbol.for(`react.memo_cache_sentinel`) ? (lt = (0, Z.jsx)(`div`, {
            className: `pointer-events-none absolute inset-x-0 bottom-0 h-[68px]`,
            children: (0, Z.jsx)(`div`, {
                className: `via-token-bg-primary/85 dark:via-token-bg-secondary/85 to-token-bg-primary dark:to-token-bg-secondary absolute inset-x-0 h-[68px] bg-linear-to-b from-transparent`
            })
        }), t[90] = lt) : lt = t[90];
        let ut = F != null || s != null,
            J;
        t[91] !== r || t[92] !== M || t[93] !== ut ? (J = (0, Z.jsx)(Lt, {
            className: `text-token-text-secondary/70`,
            item: r,
            label: M,
            reserveTrailingSpace: ut
        }), t[91] = r, t[92] = M, t[93] = ut, t[94] = J) : J = t[94];
        let dt;
        t[95] !== G || t[96] !== q || t[97] !== J ? (dt = (0, Z.jsxs)(Z.Fragment, {
            children: [G, q, lt, J]
        }), t[95] = G, t[96] = q, t[97] = J, t[98] = dt) : dt = t[98];
        let ft = dt,
            pt = `artifact-card-tile-${r.id}`,
            mt = v && r.isSavedProduct && N.masonryProductThumbnail,
            ht = v && `aspect-[var(--library-masonry-aspect-ratio)]`,
            gt = v && !j && `sm:min-h-[var(--library-masonry-fallback-min-height)]`,
            _t = !v && (ke ? `aspect-square` : `h-[249px]`),
            vt = v ? Ft : Mt,
            yt = !v && `motion-safe:group-hover:shadow-elevation-03 motion-safe:group-focus-within:shadow-elevation-03`,
            bt = !v && `group-hover:bg-token-bg-tertiary/60`,
            xt = m && `border-black ring-2 ring-black dark:border-white dark:ring-white`,
            Y;
        t[99] !== mt || t[100] !== ht || t[101] !== gt || t[102] !== _t || t[103] !== vt || t[104] !== yt || t[105] !== bt || t[106] !== xt ? (Y = p(`border-token-border-light`, `bg-token-bg-primary dark:bg-token-bg-secondary relative w-full overflow-hidden border p-4`, mt, ht, gt, _t, vt, `shadow-elevation-01`, `transition-[background-color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]`, yt, `motion-reduce:transition-[background-color,box-shadow]`, bt, xt), t[99] = mt, t[100] = ht, t[101] = gt, t[102] = _t, t[103] = vt, t[104] = yt, t[105] = bt, t[106] = xt, t[107] = Y) : Y = t[107];
        let X;
        t[108] !== ft || t[109] !== it || t[110] !== B || t[111] !== Ue || t[112] !== x || t[113] !== I || t[114] !== r || t[115] !== v || t[116] !== M || t[117] !== s || t[118] !== A || t[119] !== j || t[120] !== F ? (X = x ? (0, Z.jsxs)(Z.Fragment, {
            children: [A && (0, Z.jsxs)(`div`, {
                "aria-hidden": !j,
                className: p(`absolute inset-0 motion-safe:transition-opacity motion-safe:duration-200`, j ? `opacity-100` : `opacity-0`),
                children: [(0, Z.jsx)(`img`, {
                    "data-testid": `artifact-card-image-${r.id}`,
                    src: Ue,
                    alt: ``,
                    "aria-hidden": `true`,
                    className: p(`absolute inset-0 h-full w-full motion-safe:transition-opacity motion-safe:duration-200`, r.isSavedProduct ? `object-contain` : `object-cover`, j ? `opacity-100` : `opacity-0`),
                    onLoad: e => B(e.currentTarget),
                    onError: it
                }), v ? (0, Z.jsx)(`div`, {
                    "data-testid": `artifact-card-preview-overlay-${r.id}`,
                    className: St.masonryHoverOverlay,
                    children: r.isShared ? (0, Z.jsx)(Xe, {
                        className: `absolute start-[18px] bottom-[18px] text-white drop-shadow-sm`,
                        fileId: r.id
                    }) : null
                }) : (0, Z.jsxs)(`div`, {
                    "data-testid": `artifact-card-preview-overlay-${r.id}`,
                    className: p(`pointer-events-none absolute inset-0 opacity-0`, `motion-safe:transition-opacity motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]`, `group-focus-within:opacity-100 group-hover:opacity-100`),
                    children: [(0, Z.jsx)(`div`, {
                        className: `absolute inset-x-0 top-0 h-[91px]`,
                        children: (0, Z.jsx)(`div`, {
                            className: `absolute inset-x-0 h-[63px] bg-[linear-gradient(180deg,rgba(0,0,0,0.30)_0%,rgba(0,0,0,0)_100%)]`
                        })
                    }), (0, Z.jsx)(`div`, {
                        "data-testid": `artifact-card-title-container-${r.id}`,
                        className: kt,
                        children: (0, Z.jsxs)(`div`, {
                            className: p(At, `flex items-start gap-1 text-white`),
                            children: [(0, Z.jsx)(`span`, {
                                className: jt,
                                children: r.title
                            }), r.isShared ? (0, Z.jsx)(`span`, {
                                className: `flex h-5 shrink-0 items-center`,
                                children: (0, Z.jsx)(Xe, {
                                    className: `text-white`,
                                    fileId: r.id
                                })
                            }) : null]
                        })
                    }), (0, Z.jsx)(`div`, {
                        className: `absolute inset-x-0 bottom-0 h-[68px]`,
                        children: (0, Z.jsx)(`div`, {
                            className: `b-0 absolute inset-x-0 h-[68px] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.30)_100%)]`
                        })
                    }), (0, Z.jsx)(Lt, {
                        className: `text-white/90`,
                        item: r,
                        label: M,
                        reserveTrailingSpace: F != null || s != null
                    })]
                })]
            }), (0, Z.jsx)(`div`, {
                "aria-hidden": j,
                className: p(`absolute inset-0 motion-safe:transition-opacity motion-safe:duration-200`, j ? `opacity-0` : `opacity-100`),
                children: I || j ? (0, Z.jsx)(`div`, {
                    className: St.imagePlaceholder
                }) : ft
            })]
        }) : ft, t[108] = ft, t[109] = it, t[110] = B, t[111] = Ue, t[112] = x, t[113] = I, t[114] = r, t[115] = v, t[116] = M, t[117] = s, t[118] = A, t[119] = j, t[120] = F, t[121] = X) : X = t[121];
        let Tt;
        t[122] !== x || t[123] !== v || t[124] !== j ? (Tt = v && (!x || !j) ? (0, Z.jsx)(`div`, {
            className: N.gridHoverOverlay
        }) : null, t[122] = x, t[123] = v, t[124] = j, t[125] = Tt) : Tt = t[125];
        let Et;
        t[126] === m ? Et = t[127] : (Et = m && (0, Z.jsx)(`div`, {
            "aria-hidden": !0,
            className: `bg-token-text-primary/5 pointer-events-none absolute inset-0`
        }), t[126] = m, t[127] = Et);
        let Q;
        t[128] !== h || t[129] !== r.id || t[130] !== v || t[131] !== s || t[132] !== g || t[133] !== m || t[134] !== F || t[135] !== P ? (Q = P != null && F ? (0, Z.jsx)(Me, {
            ariaLabel: g ? F : void 0,
            className: p(N.gridSourceBadge, !v && St.legacySourceBadge, s && (m || h ? `opacity-0` : `group-focus-within:opacity-0 group-hover:opacity-0`)),
            itemId: r.id,
            provider: P
        }) : null, t[128] = h, t[129] = r.id, t[130] = v, t[131] = s, t[132] = g, t[133] = m, t[134] = F, t[135] = P, t[136] = Q) : Q = t[136];
        let $;
        t[137] !== ge || t[138] !== te ? ($ = ge ? (0, Z.jsx)(`div`, {
            role: `status`,
            className: `bg-token-bg-primary/70 dark:bg-token-bg-secondary/70 absolute inset-0 z-10 flex items-center justify-center backdrop-blur-[1px]`,
            children: (0, Z.jsxs)(`span`, {
                className: `shadow-elevation-01 bg-token-bg-primary text-token-text-secondary dark:bg-token-bg-secondary flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium`,
                children: [(0, Z.jsx)(u, {
                    className: `icon`
                }), te]
            })
        }) : null, t[137] = ge, t[138] = te, t[139] = $) : $ = t[139];
        let Nt;
        t[140] !== L || t[141] !== pt || t[142] !== Y || t[143] !== X || t[144] !== Tt || t[145] !== Et || t[146] !== Q || t[147] !== $ ? (Nt = (0, Z.jsxs)(`div`, {
            "data-library-grid-tile": !0,
            "data-testid": pt,
            style: L,
            className: Y,
            children: [X, Tt, Et, Q, $]
        }), t[140] = L, t[141] = pt, t[142] = Y, t[143] = X, t[144] = Tt, t[145] = Et, t[146] = Q, t[147] = $, t[148] = Nt) : Nt = t[148];
        let zt = Nt,
            Bt;
        t[149] !== r.isShared || t[150] !== ue || t[151] !== Se ? (Bt = [r.isShared ? Se : void 0, ue].filter(Boolean).join(` `) || void 0, t[149] = r.isShared, t[150] = ue, t[151] = Se, t[152] = Bt) : Bt = t[152];
        let Vt;
        t[153] === Ze ? Vt = t[154] : (Vt = e => {
            Ze({
                shiftKey: e.shiftKey
            })
        }, t[153] = Ze, t[154] = Vt);
        let Ht;
        t[155] !== B || t[156] !== v || t[157] !== ce || t[158] !== _ ? (Ht = v && _ && ce != null ? e => {
            e.target instanceof HTMLImageElement && B(e.target)
        } : void 0, t[155] = B, t[156] = v, t[157] = ce, t[158] = _, t[159] = Ht) : Ht = t[159];
        let Ut = v && _ && ce != null ? it : void 0,
            Wt = v ? It : Pt,
            Gt;
        t[160] === Wt ? Gt = t[161] : (Gt = p(`focus-visible:ring-token-ring focus-visible:ring-offset-token-bg-primary w-full text-start focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none`, Wt), t[160] = Wt, t[161] = Gt);
        let Kt = ce ?? zt,
            qt;
        t[162] !== $e || t[163] !== Bt || t[164] !== Vt || t[165] !== Ht || t[166] !== Ut || t[167] !== Gt || t[168] !== Kt ? (qt = (0, Z.jsx)(`button`, {
            type: `button`,
            "aria-label": $e,
            "aria-describedby": Bt,
            onClick: Vt,
            onLoadCapture: Ht,
            onErrorCapture: Ut,
            className: Gt,
            children: Kt
        }), t[162] = $e, t[163] = Bt, t[164] = Vt, t[165] = Ht, t[166] = Ut, t[167] = Gt, t[168] = Kt, t[169] = qt) : qt = t[169];
        let Jt = qt,
            Yt;
        t[170] !== i || t[171] !== v || t[172] !== R ? (Yt = p(`group relative flex w-full min-w-0 flex-col gap-2.5 text-start`, !v && !R && [`before:pointer-events-none before:absolute before:inset-x-8 before:bottom-2 before:h-3 before:rounded-full`, `before:bg-black/20 before:opacity-0 before:blur-md before:content-[''] dark:before:bg-black/45`, `motion-safe:before:transition-opacity motion-safe:before:duration-300 motion-safe:before:ease-[cubic-bezier(0.22,1,0.36,1)]`, `motion-safe:group-hover:before:opacity-35`, `motion-safe:group-focus-within:before:opacity-35`], i), t[170] = i, t[171] = v, t[172] = R, t[173] = Yt) : Yt = t[173];
        let Xt;
        t[174] !== zt || t[175] !== Jt || t[176] !== g || t[177] !== pe ? (Xt = g ? (0, Z.jsx)(`div`, {
            className: `w-full text-start`,
            children: zt
        }) : pe?.(Jt) ?? Jt, t[174] = zt, t[175] = Jt, t[176] = g, t[177] = pe, t[178] = Xt) : Xt = t[178];
        let Zt;
        t[179] === S ? Zt = t[180] : (Zt = S != null && (0, Z.jsx)(st, {
            ...S
        }), t[179] = S, t[180] = Zt);
        let Qt;
        t[181] !== r.isShared || t[182] !== Se ? (Qt = r.isShared ? (0, Z.jsx)(`span`, {
            id: Se,
            className: `sr-only`,
            children: (0, Z.jsx)(de, {
                ...De.sharedFile
            })
        }) : null, t[181] = r.isShared, t[182] = Se, t[183] = Qt) : Qt = t[183];
        let $t;
        t[184] !== h || t[185] !== r.id || t[186] !== s || t[187] !== et || t[188] !== m || t[189] !== z ? ($t = s && (0, Z.jsx)(`div`, {
            style: z.style,
            className: z.containerClassName,
            children: (0, Z.jsxs)(`div`, {
                className: z.controlClassName,
                children: [(0, Z.jsx)(`input`, {
                    type: `checkbox`,
                    checked: m,
                    readOnly: !0,
                    onClick: e => s(e.currentTarget.checked, {
                        shiftKey: e.shiftKey
                    }),
                    "aria-label": et,
                    className: p(`bg-token-bg-primary/80 dark:bg-token-bg-secondary/80 peer border-token-border-heavy absolute inset-0 m-0 size-5 cursor-pointer appearance-none rounded-full border transition-[opacity,background-color,border-color,box-shadow] duration-200 ease-out dark:border-white/20`, `focus-visible:ring-token-ring focus-visible:ring-offset-token-bg-primary focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none`, m ? `border-black bg-white opacity-100 dark:border-white dark:bg-white` : h ? `opacity-100` : `opacity-0 group-focus-within:opacity-100 group-hover:opacity-100`)
                }), (0, Z.jsx)(He, {
                    "data-testid": `artifact-card-select-icon-${r.id}`,
                    className: `pointer-events-none absolute h-3.5 w-3.5 text-black opacity-0 transition-opacity peer-checked:opacity-100 dark:text-black`,
                    "aria-hidden": `true`
                })]
            })
        }), t[184] = h, t[185] = r.id, t[186] = s, t[187] = et, t[188] = m, t[189] = z, t[190] = $t) : $t = t[190];
        let en;
        return t[191] !== Yt || t[192] !== Xt || t[193] !== Zt || t[194] !== Qt || t[195] !== $t ? (en = (0, Z.jsxs)(`div`, {
            className: Yt,
            children: [Xt, Zt, Qt, $t]
        }), t[191] = Yt, t[192] = Xt, t[193] = Zt, t[194] = Qt, t[195] = $t, t[196] = en) : en = t[196], en
    }
}));

function Vt(e) {
    return e === `list` || e === `grid` ? e : null
}

function Ht({
    disableExposureLog: e = !0
} = {}) {
    if (!Se({
            disableExposureLog: e
        })) return Wt();
    let t = Ut();
    if (t != null) return t;
    let n = o() ?? d();
    return n == null || n.planType !== ee.FREE && n.planType !== ee.GO && n.planType !== ee.PLUS ? `list` : `grid`
}
var Ut, Wt, Gt = e((() => {
    se(), be(), te(), ie(), i(), Ut = s(ae.RecallArtifactsViewMode, () => null, {
        coerceStoredValue: Vt
    }), Wt = Object.assign(c(() => Ut() ?? `list`), {
        set: (...e) => Ut.set(...e)
    })
}));
export {
    rt as C, Qe as S, it as T, et as _, zt as a, z as b, St as c, ct as d, ht as f, U as g, H as h, Nt as i, X as l, vt as m, Ht as n, Et as o, mt as p, Gt as r, Bt as s, Wt as t, dt as u, R as v, $e as w, L as x, I as y
};
//# sourceMappingURL=ad8b328d-evwhs2ri32ahv2gh.js.map
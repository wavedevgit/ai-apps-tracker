import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as n,
    Bm as r,
    Crt as i,
    F8 as a,
    K5 as o,
    Knt as s,
    Lp as c,
    N1 as l,
    Oct as u,
    P8 as d,
    Rz as f,
    U1 as ee,
    Up as te,
    Vst as ne,
    Wnt as re,
    _rt as ie,
    irt as ae,
    q1 as oe,
    q5 as se,
    rrt as ce,
    zz as le
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as ue,
    Ln as de,
    Nn as fe,
    O as pe,
    Rn as me,
    Vn as p,
    s as m,
    wn as h,
    zn as he
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $At as ge,
    $Tt as _e,
    CPt as ve,
    CX as ye,
    G9t as be,
    GOt as g,
    JPt as _,
    JTt as xe,
    KOt as Se,
    MPt as Ce,
    NPt as v,
    Q9t as y,
    QTt as we,
    SPt as Te,
    SX as b,
    TPt as Ee,
    UPt as x,
    XAt as De,
    Y9t as Oe,
    YTt as S,
    ZWt as ke,
    bPt as Ae,
    cpt as je,
    den as Me,
    eGt as C,
    ePt as Ne,
    nen as Pe,
    pen as w,
    qPt as T,
    tPt as Fe,
    ten as Ie,
    upt as Le,
    wLn as Re,
    wPt as ze,
    xLn as E,
    xPt as Be
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Op as Ve,
    bx as He,
    cS as Ue,
    kp as We,
    lS as Ge,
    xx as D
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    Bd as Ke,
    Vd as qe,
    fp as Je,
    up as Ye
} from "./8b34dbc2-lmwubajnld74ksfm.js";
import {
    d as O,
    u as k
} from "./9e958008-ndpbrndjul1nhax6.js";
import {
    r as A,
    t as j
} from "./84bcef95-lr373n3sujvwwqn0.js";
import {
    n as Xe,
    t as M
} from "./3b813a7d-hmrd9qtqimunl5qj.js";
import {
    a as Ze,
    o as Qe
} from "./8c1c50db-cbuurzbip2pl2c7i.js";
var N, P = e((() => {
    se(), k(), N = {
        headerWrapper: o(O.wideCompactWidth, O.wideCompactHeader),
        toolbarInner: O.wideCompactWidth,
        contentWrapper: o(O.wideCompactWidth, O.wideCompactContent),
        contentInner: O.wideCompactContentInner
    }
}));

function $e(e) {
    return e ? nt : L
}

function et(e, t) {
    return {
        stickyHeader: e,
        classNames: {
            ...e ? z : t ? rt : j,
            toolbarShell: o(M.toolbarShell, e && M.refreshedStickyToolbarShell)
        }
    }
}
var tt, F, I, L, nt, R, rt, z, it, at = e((() => {
        A(), P(), se(), Xe(), tt = new Set, F = `directory_id`, I = `search`, L = `grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3`, nt = M.refreshedGridSection, R = M.refreshedMasonryGridSection, rt = {
            ...j,
            headerWrapper: `max-w-app-content px-4! pt-4 md:mt-[calc(2.5rem-var(--header-height))] md:pt-0`
        }, z = {
            ...N,
            headerWrapper: M.refreshedHeaderWrapper,
            stickyHeaderContent: M.refreshedStickyHeaderContent,
            toolbarInner: M.refreshedToolbarInner,
            contentWrapper: M.refreshedContentWrapper
        }, it = ({
            showSharedBy: e = !1,
            showSizeColumn: t = !0,
            compact: n = !0
        } = {}) => o(n ? M.compactListColumns : t ? M.fullListColumnsWithSize : M.fullListColumnsWithoutSize, e ? M.desktopListColumnsWithSharedBy : t ? M.desktopListColumnsWithSize : M.desktopListColumnsWithoutSize)
    })),
    ot, B, V, H = e((() => {
        ot = h(), B = ue(), V = e => {
            "use forget";
            let t = (0, ot.c)(8),
                {
                    title: n,
                    metadata: r,
                    metadataDescriptionId: i
                } = e,
                a;
            t[0] === n ? a = t[1] : (a = (0, B.jsx)(`div`, {
                className: `text-token-text-primary text-body-small-medium truncate`,
                dir: `auto`,
                title: n,
                children: n
            }), t[0] = n, t[1] = a);
            let o;
            t[2] !== r || t[3] !== i ? (o = (0, B.jsx)(`div`, {
                id: i,
                className: `text-token-text-secondary text-footnote min-h-5`,
                children: r
            }), t[2] = r, t[3] = i, t[4] = o) : o = t[4];
            let s;
            return t[5] !== a || t[6] !== o ? (s = (0, B.jsxs)(`div`, {
                className: `min-w-0`,
                children: [a, o]
            }), t[5] = a, t[6] = o, t[7] = s) : s = t[7], s
        }
    })),
    U, W, st, ct, G = e((() => {
        U = h(), We(), H(), me(), W = ue(), st = `•`, ct = e => {
            "use forget";
            let t = (0, U.c)(16),
                {
                    title: n,
                    url: r,
                    price: i
                } = e,
                a = he(),
                o;
            t[0] === i ? o = t[1] : (o = i?.trim() ? (0, W.jsxs)(W.Fragment, {
                children: [(0, W.jsx)(`span`, {
                    children: i
                }), (0, W.jsx)(`span`, {
                    "aria-hidden": `true`,
                    children: st
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
            t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, W.jsx)(fe, {
                id: `chatgpt.shopping.virtual_try_on.result.product.buy_link`,
                defaultMessage: `Buy it here`
            }), l = (0, W.jsx)(Ve, {
                className: `icon-sm shrink-0`,
                "aria-hidden": `true`
            }), t[5] = c, t[6] = l) : (c = t[5], l = t[6]);
            let u;
            t[7] !== s || t[8] !== r ? (u = (0, W.jsxs)(`a`, {
                href: r,
                target: `_blank`,
                rel: `noopener noreferrer`,
                "aria-label": s,
                className: `hover:text-token-text-primary inline-flex w-fit items-center gap-1 underline underline-offset-4 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2`,
                children: [c, l]
            }), t[7] = s, t[8] = r, t[9] = u) : u = t[9];
            let d;
            t[10] !== o || t[11] !== u ? (d = (0, W.jsxs)(`div`, {
                className: `flex flex-wrap items-center gap-x-1`,
                children: [o, u]
            }), t[10] = o, t[11] = u, t[12] = d) : d = t[12];
            let f;
            return t[13] !== d || t[14] !== n ? (f = (0, W.jsx)(V, {
                title: n,
                metadata: d
            }), t[13] = d, t[14] = n, t[15] = f) : f = t[15], f
        }
    }));

function lt(e, t) {
    return e <= 0 || t <= 0 || !Number.isFinite(e) || !Number.isFinite(t) ? 1 : Math.min(_t, Math.max(gt, e / t))
}

function K(e) {
    let t = 0;
    for (let n = 1; n < e.length; n++)(e[n] ?? 1 / 0) < (e[t] ?? 1 / 0) && (t = n);
    return t
}

function q(e, t) {
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
        let t = K(o),
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
    let i = q(r, t.columnCount),
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
        return ut(e, t.slice(e.itemIds.length), pt(a, e, r, i), q(i, n), i?.rowGap, i != null)
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
    let i = q(r, t.columnCount),
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
        containerClassName: o(`pointer-events-none absolute inset-x-0 top-0 z-10`, e ? `aspect-[var(--library-masonry-aspect-ratio)]` : r ? `aspect-square` : `h-[249px]`),
        controlClassName: o(`pointer-events-auto absolute flex h-5 w-5 items-center justify-center`, e ? `end-4.5 bottom-4.5` : `end-4 bottom-4`),
        style: e ? t : void 0
    } : {
        containerClassName: o(`absolute z-10`, e ? `end-4.5 bottom-4.5` : `end-4 bottom-4`),
        controlClassName: `relative flex h-5 w-5 items-center justify-center`,
        style: void 0
    }
}

function Tt(e, t) {
    let n = t.trim();
    if (n.length === 0 || _(e)) return n;
    let r = x(Be(e));
    if (!r) return n;
    let i = `.${r}`;
    return n.toLowerCase().endsWith(i) ? n.slice(0, n.length - i.length) : n
}

function Et(e, t, n = {}) {
    return e.map(e => {
        let r = typeof n.showThumbnail == `function` ? n.showThumbnail(e) : n.showThumbnail !== !1,
            i = n.getSharedLibraryFileId?.(e),
            a = i !== void 0 && e.source?.type === `chat_upload` && !Ne(e),
            o = a ? i : void 0,
            s = Se(o) && ye(),
            c = Te(e),
            l = be(e),
            u = c.isImageLike || e.classifiers.library_file_category === `image`;
        return {
            id: e.id,
            title: n.getDisplayTitle?.(e) ?? Tt(e, ze(ve(e), e.classifiers.library_artifact_type, n.intl)),
            fileTypeLabel: c.label,
            iconKey: c.iconKey,
            isImageLike: u,
            isDeepResearchReport: _(e),
            isSavedChatMessage: Le(e),
            isSavedEntity: e.source?.type === `saved_entity`,
            isSavedPlace: e.source?.type === `saved_entity` && Ke(e.savedEntity?.saved_target.sidebar_params.category) === `place`,
            isSavedProduct: e.classifiers.library_artifact_subtype === `product`,
            virtualTryOnProduct: e.virtualTryOnProduct,
            sizeBytes: e.sizeBytes,
            fileId: s ? o : !r || a ? void 0 : n.getThumbnailFileId?.(e) ?? Ae(e) ?? void 0,
            libraryFileId: e.libraryFileId,
            sharedLibraryFileId: s ? o : void 0,
            thumbnailUrl: r && !a ? e.thumbnailUrl : void 0,
            width: r && !a ? e.width : void 0,
            height: r && !a ? e.height : void 0,
            fileName: Be(e),
            mimeType: e.mimeType,
            gizmoId: a ? void 0 : e.gizmoId,
            source: l?.provider,
            mountedLibraryFileId: l?.itemId,
            libraryArtifactType: e.classifiers.library_artifact_type,
            isShared: e.isShared === !0 && (e.source?.type === `google_drive` || e.source?.type === `chat_upload` && w()),
            onOpen: () => t(e)
        }
    })
}
var Dt, Ot, Z, kt, At, jt, Q, $, Mt, Nt, Pt, Ft, It, Lt, Rt, zt, Bt = e((() => {
    Dt = h(), b(), D(), Ge(), _e(), S(), v(), Je(), te(), Fe(), y(), g(), Me(), qe(), G(), le(), s(), ge(), i(), m(), se(), Ot = t(p()), me(), Ee(), je(), T(), Ie(), Qe(), vt(), C(), X(), Xe(), Z = ue(), kt = `absolute inset-x-0 top-0 flex h-[91px] items-start px-5 py-[14px]`, At = `w-full text-[14px] leading-5 font-medium`, jt = `line-clamp-2 min-w-0 break-words [overflow-wrap:anywhere]`, Q = `absolute inset-x-0 bottom-0 flex h-[68px] items-end px-5 py-[14px]`, $ = `w-full truncate text-[12px] leading-[16px]`, Mt = `rounded-[26px]`, Nt = `rounded-[26px]!`, Pt = `focus-visible:rounded-[26px]`, Ft = `rounded-2xl`, It = `focus-visible:rounded-2xl`, Lt = e => {
        "use forget";
        let t = (0, Dt.c)(11),
            {
                item: n,
                label: r,
                className: i,
                reserveTrailingSpace: a
            } = e,
            s = `artifact-card-meta-container-${n.id}`,
            c = a && `pe-8`,
            l;
        t[0] !== i || t[1] !== c ? (l = o($, `flex items-center gap-1`, i, c), t[0] = i, t[1] = c, t[2] = l) : l = t[2];
        let u;
        t[3] === r ? u = t[4] : (u = (0, Z.jsx)(`span`, {
            className: `min-w-0 truncate`,
            children: r
        }), t[3] = r, t[4] = u);
        let d;
        t[5] !== l || t[6] !== u ? (d = (0, Z.jsx)(`div`, {
            className: l,
            children: u
        }), t[5] = l, t[6] = u, t[7] = d) : d = t[7];
        let f;
        return t[8] !== s || t[9] !== d ? (f = (0, Z.jsx)(`div`, {
            "data-testid": s,
            className: Q,
            children: d
        }), t[8] = s, t[9] = d, t[10] = f) : f = t[10], f
    }, Rt = de({
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
                item: n,
                className: i,
                selected: a,
                onToggleSelect: s,
                onOpenPreview: l,
                alwaysShowSelectionControl: u,
                openDisabled: d,
                loading: ee,
                loadingLabel: te,
                dateKind: ne,
                showSuggestedActivity: ae,
                lastModifiedDate: oe,
                square: se,
                selectionControlWithinThumbnail: ce,
                openButtonContent: le,
                masonry: ue,
                openButtonDescriptionId: de,
                renderOpenButton: me
            } = e,
            p = a !== void 0 && a,
            m = u !== void 0 && u,
            h = d !== void 0 && d,
            ge = ee !== void 0 && ee,
            _e = ne === void 0 ? `modified` : ne,
            ve = ae !== void 0 && ae,
            be = se !== void 0 && se,
            g = ce !== void 0 && ce,
            _ = ue !== void 0 && ue,
            v = (0, Ot.useId)(),
            [y, Te] = (0, Ot.useState)(null),
            b = he(),
            Ee = De(b, oe, ``).trim() || void 0,
            x = n.isImageLike || n.isSavedEntity === !0,
            S = n.isImageLike && n.virtualTryOnProduct != null && ie(`533800488`) ? n.virtualTryOnProduct : null,
            Ae = be || n.isSavedPlace === !0,
            je = n.thumbnailUrl ? `${n.id}:icon:${n.thumbnailUrl}` : null,
            Me = !x && je != null && je !== y,
            C = n.fileId ?? ``,
            Ne = n.fileName ?? n.title,
            w, T, Fe, Ie, Le;
        if (t[0] !== y || t[1] !== x || t[2] !== n.gizmoId || t[3] !== n.id || t[4] !== n.isSavedEntity || t[5] !== n.libraryFileId || t[6] !== n.mimeType || t[7] !== n.sharedLibraryFileId || t[8] !== n.source || t[9] !== n.thumbnailUrl || t[10] !== C || t[11] !== Ne) {
            let e = Ne.trim(),
                i = n.mimeType ?? r(e),
                a;
            t[17] !== x || t[18] !== n.id || t[19] !== n.libraryFileId || t[20] !== n.source || t[21] !== n.thumbnailUrl ? (a = x && n.source === `google_drive` && n.thumbnailUrl?.trim() ? c(n.libraryFileId ?? n.id, 512) : void 0, t[17] = x, t[18] = n.id, t[19] = n.libraryFileId, t[20] = n.source, t[21] = n.thumbnailUrl, t[22] = a) : a = t[22], w = a;
            let o = w ? `${n.id}:${C}:${w}` : null;
            Fe = o != null && o !== y;
            let s = !n.isSavedEntity && n.source == null && Se(n.sharedLibraryFileId) ? n.sharedLibraryFileId : void 0;
            T = !n.isSavedEntity && x && !Fe && C.length > 0 && e.length > 0 && (n.sharedLibraryFileId == null || s != null && ye()), Le = pe, Ie = Ye({
                fileId: C,
                fileName: e,
                gizmoId: n.sharedLibraryFileId == null ? n.gizmoId : void 0,
                sharedLibraryFileId: s,
                contentType: i
            }), t[0] = y, t[1] = x, t[2] = n.gizmoId, t[3] = n.id, t[4] = n.isSavedEntity, t[5] = n.libraryFileId, t[6] = n.mimeType, t[7] = n.sharedLibraryFileId, t[8] = n.source, t[9] = n.thumbnailUrl, t[10] = C, t[11] = Ne, t[12] = w, t[13] = T, t[14] = Fe, t[15] = Ie, t[16] = Le
        } else w = t[12], T = t[13], Fe = t[14], Ie = t[15], Le = t[16];
        let Re;
        t[23] !== T || t[24] !== Ie ? (Re = {
            ...Ie,
            enabled: T,
            retry: !1
        }, t[23] = T, t[24] = Ie, t[25] = Re) : Re = t[25];
        let {
            data: ze,
            error: E,
            isPending: Be
        } = Le(Re), Ve, We;
        t[26] !== E || t[27] !== C ? (Ve = () => {
            if (!E) return;
            let e = re.logStructuredEvent(`ChatgptRecallThumbnailLoadFailed`, {
                legacyStatsigEventName: `chatgpt_web_recall_files_image_download_error`,
                fileId: C ?? void 0
            });
            re.logValueEventWithStatsig({
                segmentEventName: `web_recall_files_image_download_error`,
                statsigEventName: `chatgpt_web_recall_files_image_download_error`,
                data: {
                    fileId: C
                },
                eventId: e
            })
        }, We = [E, C], t[26] = E, t[27] = C, t[28] = Ve, t[29] = We) : (Ve = t[28], We = t[29]), (0, Ot.useEffect)(Ve, We);
        let Ge = n.isSavedEntity ? n.thumbnailUrl : Fe ? w : ze,
            D = Ge ? `${n.id}:${C}:${Ge}` : null,
            [Ke, qe] = (0, Ot.useState)(null),
            [Je, O] = (0, Ot.useState)(null),
            k = x && D != null && D !== y,
            A = k && D === Ke,
            j = (ve && Ee != null ? b.formatMessage(_e === `opened` ? Pe.suggestedOpenedAt : Pe.suggestedModifiedAt, {
                relativeTime: Ee
            }) : Ee) ?? (n.isSavedChatMessage ? b.formatMessage(Rt.savedMessageMeta) : b.formatMessage(Rt.metaTypeOnly, {
                type: n.fileTypeLabel
            })),
            Xe;
        t[30] !== n || t[31] !== l ? (Xe = e => {
            if (l) {
                l(e);
                return
            }
            n.onOpen()
        }, t[30] = n, t[31] = l, t[32] = Xe) : Xe = t[32];
        let Qe = Xe,
            N = n.source,
            P = N == null ? void 0 : b.formatMessage(Oe(N).label),
            $e = P ? b.formatMessage(Pe.itemWithSource, {
                name: n.title,
                source: P
            }) : n.title,
            et = Ee ? b.formatMessage(_e === `shared` ? Rt.cardWithSharedDate : _e === `opened` ? Rt.cardWithOpenedDate : Rt.cardWithModifiedDate, {
                name: $e,
                date: Ee
            }) : $e,
            tt = b.formatMessage(Rt.selectCard, {
                name: et
            }),
            F, I, L, nt;
        if (t[33] !== D || t[34] !== y || t[35] !== E || t[36] !== x || t[37] !== Be || t[38] !== n.height || t[39] !== n.isSavedEntity || t[40] !== n.isSavedPlace || t[41] !== n.width || t[42] !== _ || t[43] !== Je || t[44] !== g || t[45] !== k || t[46] !== T || t[47] !== A || t[48] !== Ae || t[49] !== S) {
            let e = x ? lt(n.width ?? 0, n.height ?? 0) : 1,
                r = E != null || n.isSavedEntity && D == null || D != null && D === y;
            F = x && !r && !A && (T && Be || k);
            let i = n.isSavedPlace || r ? 1 : x && D != null && Je?.previewKey === D ? Je.aspectRatio : e;
            I = _ ? Ct(i) : void 0, L = g || S != null, nt = wt({
                masonry: _,
                masonryStyle: I,
                selectionControlWithinThumbnail: L,
                square: Ae
            }), t[33] = D, t[34] = y, t[35] = E, t[36] = x, t[37] = Be, t[38] = n.height, t[39] = n.isSavedEntity, t[40] = n.isSavedPlace, t[41] = n.width, t[42] = _, t[43] = Je, t[44] = g, t[45] = k, t[46] = T, t[47] = A, t[48] = Ae, t[49] = S, t[50] = F, t[51] = I, t[52] = L, t[53] = nt
        } else F = t[50], I = t[51], L = t[52], nt = t[53];
        let R = nt,
            rt;
        t[54] !== D || t[55] !== n.isSavedPlace || t[56] !== _ || t[57] !== qe || t[58] !== O ? (rt = e => {
            D != null && (_ && !n.isSavedPlace && O({
                previewKey: D,
                aspectRatio: lt(e.naturalWidth, e.naturalHeight)
            }), qe(D))
        }, t[54] = D, t[55] = n.isSavedPlace, t[56] = _, t[57] = qe, t[58] = O, t[59] = rt) : rt = t[59];
        let z = rt,
            it;
        t[60] === D ? it = t[61] : (it = () => {
            D != null && Te(D)
        }, t[60] = D, t[61] = it);
        let at = it,
            ot = `artifact-card-title-container-${n.id}`,
            B;
        t[62] === Symbol.for(`react.memo_cache_sentinel`) ? (B = o(At, `text-token-text-primary flex items-start gap-1`), t[62] = B) : B = t[62];
        let V;
        t[63] === n.title ? V = t[64] : (V = (0, Z.jsx)(`span`, {
            className: jt,
            children: n.title
        }), t[63] = n.title, t[64] = V);
        let H;
        t[65] !== n.id || t[66] !== n.isShared ? (H = n.isShared ? (0, Z.jsx)(`span`, {
            className: `text-token-text-secondary flex h-5 shrink-0 items-center`,
            children: (0, Z.jsx)(Ze, {
                fileId: n.id
            })
        }) : null, t[65] = n.id, t[66] = n.isShared, t[67] = H) : H = t[67];
        let U;
        t[68] !== V || t[69] !== H ? (U = (0, Z.jsxs)(`div`, {
            className: B,
            children: [V, H]
        }), t[68] = V, t[69] = H, t[70] = U) : U = t[70];
        let W;
        t[71] !== ot || t[72] !== U ? (W = (0, Z.jsx)(`div`, {
            "data-testid": ot,
            className: kt,
            children: U
        }), t[71] = ot, t[72] = U, t[73] = W) : W = t[73];
        let st;
        t[74] === Symbol.for(`react.memo_cache_sentinel`) ? (st = o(`absolute start-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center`), t[74] = st) : st = t[74];
        let G;
        t[75] !== je || t[76] !== n.fileName || t[77] !== n.icon || t[78] !== n.iconKey || t[79] !== n.id || t[80] !== n.isSavedChatMessage || t[81] !== n.libraryArtifactType || t[82] !== n.mimeType || t[83] !== n.mountedLibraryFileId || t[84] !== n.thumbnailUrl || t[85] !== Me || t[86] !== N ? (G = n.icon == null ? n.isSavedChatMessage ? (0, Z.jsx)(Ue, {
            "aria-hidden": !0,
            className: `icon h-10 w-10`
        }) : Me ? (0, Z.jsx)(`img`, {
            src: n.thumbnailUrl,
            alt: ``,
            "aria-hidden": `true`,
            className: o(`h-10 w-10 object-contain`, n.thumbnailUrl?.startsWith(`data:image/svg+xml`) && `dark:invert`),
            onError: () => Te(je)
        }) : N != null && (n.fileName != null || n.mimeType != null) && Ce(n.libraryArtifactType) == null ? (0, Z.jsx)(xe, {
            fileName: n.fileName,
            mimeType: n.mimeType,
            mountedLibraryFileId: n.mountedLibraryFileId ?? n.id,
            libraryProvider: N,
            "aria-hidden": !0,
            className: `icon h-10 w-10`
        }) : (0, Z.jsx)(we, {
            iconKey: n.iconKey,
            "aria-hidden": !0,
            className: `icon h-10 w-10`
        }) : n.icon, t[75] = je, t[76] = n.fileName, t[77] = n.icon, t[78] = n.iconKey, t[79] = n.id, t[80] = n.isSavedChatMessage, t[81] = n.libraryArtifactType, t[82] = n.mimeType, t[83] = n.mountedLibraryFileId, t[84] = n.thumbnailUrl, t[85] = Me, t[86] = N, t[87] = G) : G = t[87];
        let K;
        t[88] === G ? K = t[89] : (K = (0, Z.jsx)(`div`, {
            className: st,
            children: G
        }), t[88] = G, t[89] = K);
        let q;
        t[90] === Symbol.for(`react.memo_cache_sentinel`) ? (q = (0, Z.jsx)(`div`, {
            className: `pointer-events-none absolute inset-x-0 bottom-0 h-[68px]`,
            children: (0, Z.jsx)(`div`, {
                className: `via-token-bg-primary/85 dark:via-token-bg-secondary/85 to-token-bg-primary dark:to-token-bg-secondary absolute inset-x-0 h-[68px] bg-linear-to-b from-transparent`
            })
        }), t[90] = q) : q = t[90];
        let ut = P != null || s != null,
            J;
        t[91] !== n || t[92] !== j || t[93] !== ut ? (J = (0, Z.jsx)(Lt, {
            className: `text-token-text-secondary/70`,
            item: n,
            label: j,
            reserveTrailingSpace: ut
        }), t[91] = n, t[92] = j, t[93] = ut, t[94] = J) : J = t[94];
        let dt;
        t[95] !== W || t[96] !== K || t[97] !== J ? (dt = (0, Z.jsxs)(Z.Fragment, {
            children: [W, K, q, J]
        }), t[95] = W, t[96] = K, t[97] = J, t[98] = dt) : dt = t[98];
        let ft = dt,
            pt = `artifact-card-tile-${n.id}`,
            mt = _ && n.isSavedProduct && M.masonryProductThumbnail,
            ht = _ && `aspect-[var(--library-masonry-aspect-ratio)]`,
            gt = _ && !A && `sm:min-h-[var(--library-masonry-fallback-min-height)]`,
            _t = !_ && (Ae ? `aspect-square` : `h-[249px]`),
            vt = _ ? Ft : Mt,
            yt = !_ && `motion-safe:group-hover:shadow-elevation-03 motion-safe:group-focus-within:shadow-elevation-03`,
            bt = !_ && `group-hover:bg-token-bg-tertiary/60`,
            xt = p && `border-black ring-2 ring-black dark:border-white dark:ring-white`,
            Y;
        t[99] !== mt || t[100] !== ht || t[101] !== gt || t[102] !== _t || t[103] !== vt || t[104] !== yt || t[105] !== bt || t[106] !== xt ? (Y = o(`border-token-border-light`, `bg-token-bg-primary dark:bg-token-bg-secondary relative w-full overflow-hidden border p-4`, mt, ht, gt, _t, vt, `shadow-elevation-01`, `transition-[background-color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]`, yt, `motion-reduce:transition-[background-color,box-shadow]`, bt, xt), t[99] = mt, t[100] = ht, t[101] = gt, t[102] = _t, t[103] = vt, t[104] = yt, t[105] = bt, t[106] = xt, t[107] = Y) : Y = t[107];
        let X;
        t[108] !== ft || t[109] !== at || t[110] !== z || t[111] !== Ge || t[112] !== x || t[113] !== F || t[114] !== n || t[115] !== _ || t[116] !== j || t[117] !== s || t[118] !== k || t[119] !== A || t[120] !== P ? (X = x ? (0, Z.jsxs)(Z.Fragment, {
            children: [k && (0, Z.jsxs)(`div`, {
                "aria-hidden": !A,
                className: o(`absolute inset-0 motion-safe:transition-opacity motion-safe:duration-200`, A ? `opacity-100` : `opacity-0`),
                children: [(0, Z.jsx)(`img`, {
                    "data-testid": `artifact-card-image-${n.id}`,
                    src: Ge,
                    alt: ``,
                    "aria-hidden": `true`,
                    className: o(`absolute inset-0 h-full w-full motion-safe:transition-opacity motion-safe:duration-200`, n.isSavedProduct ? `object-contain` : `object-cover`, A ? `opacity-100` : `opacity-0`),
                    onLoad: e => z(e.currentTarget),
                    onError: at
                }), _ ? (0, Z.jsx)(`div`, {
                    "data-testid": `artifact-card-preview-overlay-${n.id}`,
                    className: St.masonryHoverOverlay,
                    children: n.isShared ? (0, Z.jsx)(Ze, {
                        className: `absolute start-[18px] bottom-[18px] text-white drop-shadow-sm`,
                        fileId: n.id
                    }) : null
                }) : (0, Z.jsxs)(`div`, {
                    "data-testid": `artifact-card-preview-overlay-${n.id}`,
                    className: o(`pointer-events-none absolute inset-0 opacity-0`, `motion-safe:transition-opacity motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]`, `group-focus-within:opacity-100 group-hover:opacity-100`),
                    children: [(0, Z.jsx)(`div`, {
                        className: `absolute inset-x-0 top-0 h-[91px]`,
                        children: (0, Z.jsx)(`div`, {
                            className: `absolute inset-x-0 h-[63px] bg-[linear-gradient(180deg,rgba(0,0,0,0.30)_0%,rgba(0,0,0,0)_100%)]`
                        })
                    }), (0, Z.jsx)(`div`, {
                        "data-testid": `artifact-card-title-container-${n.id}`,
                        className: kt,
                        children: (0, Z.jsxs)(`div`, {
                            className: o(At, `flex items-start gap-1 text-white`),
                            children: [(0, Z.jsx)(`span`, {
                                className: jt,
                                children: n.title
                            }), n.isShared ? (0, Z.jsx)(`span`, {
                                className: `flex h-5 shrink-0 items-center`,
                                children: (0, Z.jsx)(Ze, {
                                    className: `text-white`,
                                    fileId: n.id
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
                        item: n,
                        label: j,
                        reserveTrailingSpace: P != null || s != null
                    })]
                })]
            }), (0, Z.jsx)(`div`, {
                "aria-hidden": A,
                className: o(`absolute inset-0 motion-safe:transition-opacity motion-safe:duration-200`, A ? `opacity-0` : `opacity-100`),
                children: F || A ? (0, Z.jsx)(`div`, {
                    className: St.imagePlaceholder
                }) : ft
            })]
        }) : ft, t[108] = ft, t[109] = at, t[110] = z, t[111] = Ge, t[112] = x, t[113] = F, t[114] = n, t[115] = _, t[116] = j, t[117] = s, t[118] = k, t[119] = A, t[120] = P, t[121] = X) : X = t[121];
        let Tt;
        t[122] !== x || t[123] !== _ || t[124] !== A ? (Tt = _ && (!x || !A) ? (0, Z.jsx)(`div`, {
            className: M.gridHoverOverlay
        }) : null, t[122] = x, t[123] = _, t[124] = A, t[125] = Tt) : Tt = t[125];
        let Et;
        t[126] === p ? Et = t[127] : (Et = p && (0, Z.jsx)(`div`, {
            "aria-hidden": !0,
            className: `bg-token-text-primary/5 pointer-events-none absolute inset-0`
        }), t[126] = p, t[127] = Et);
        let Q;
        t[128] !== m || t[129] !== n.id || t[130] !== _ || t[131] !== s || t[132] !== h || t[133] !== p || t[134] !== P || t[135] !== N ? (Q = N != null && P ? (0, Z.jsx)(ke, {
            ariaLabel: h ? P : void 0,
            className: o(M.gridSourceBadge, !_ && St.legacySourceBadge, s && (p || m ? `opacity-0` : `group-focus-within:opacity-0 group-hover:opacity-0`)),
            itemId: n.id,
            provider: N
        }) : null, t[128] = m, t[129] = n.id, t[130] = _, t[131] = s, t[132] = h, t[133] = p, t[134] = P, t[135] = N, t[136] = Q) : Q = t[136];
        let $;
        t[137] !== ge || t[138] !== te ? ($ = ge ? (0, Z.jsx)(`div`, {
            role: `status`,
            className: `bg-token-bg-primary/70 dark:bg-token-bg-secondary/70 absolute inset-0 z-10 flex items-center justify-center backdrop-blur-[1px]`,
            children: (0, Z.jsxs)(`span`, {
                className: `shadow-elevation-01 bg-token-bg-primary text-token-text-secondary dark:bg-token-bg-secondary flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium`,
                children: [(0, Z.jsx)(f, {
                    className: `icon`
                }), te]
            })
        }) : null, t[137] = ge, t[138] = te, t[139] = $) : $ = t[139];
        let Nt;
        t[140] !== I || t[141] !== pt || t[142] !== Y || t[143] !== X || t[144] !== Tt || t[145] !== Et || t[146] !== Q || t[147] !== $ ? (Nt = (0, Z.jsxs)(`div`, {
            "data-library-grid-tile": !0,
            "data-testid": pt,
            style: I,
            className: Y,
            children: [X, Tt, Et, Q, $]
        }), t[140] = I, t[141] = pt, t[142] = Y, t[143] = X, t[144] = Tt, t[145] = Et, t[146] = Q, t[147] = $, t[148] = Nt) : Nt = t[148];
        let zt = Nt,
            Bt;
        t[149] !== n.isShared || t[150] !== de || t[151] !== v ? (Bt = [n.isShared ? v : void 0, de].filter(Boolean).join(` `) || void 0, t[149] = n.isShared, t[150] = de, t[151] = v, t[152] = Bt) : Bt = t[152];
        let Vt;
        t[153] === Qe ? Vt = t[154] : (Vt = e => {
            Qe({
                shiftKey: e.shiftKey
            })
        }, t[153] = Qe, t[154] = Vt);
        let Ht;
        t[155] !== z || t[156] !== _ || t[157] !== le || t[158] !== g ? (Ht = _ && g && le != null ? e => {
            e.target instanceof HTMLImageElement && z(e.target)
        } : void 0, t[155] = z, t[156] = _, t[157] = le, t[158] = g, t[159] = Ht) : Ht = t[159];
        let Ut = _ && g && le != null ? at : void 0,
            Wt = _ ? It : Pt,
            Gt;
        t[160] === Wt ? Gt = t[161] : (Gt = o(`focus-visible:ring-token-ring focus-visible:ring-offset-token-bg-primary w-full text-start focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none`, Wt), t[160] = Wt, t[161] = Gt);
        let Kt = le ?? zt,
            qt;
        t[162] !== et || t[163] !== Bt || t[164] !== Vt || t[165] !== Ht || t[166] !== Ut || t[167] !== Gt || t[168] !== Kt ? (qt = (0, Z.jsx)(`button`, {
            type: `button`,
            "aria-label": et,
            "aria-describedby": Bt,
            onClick: Vt,
            onLoadCapture: Ht,
            onErrorCapture: Ut,
            className: Gt,
            children: Kt
        }), t[162] = et, t[163] = Bt, t[164] = Vt, t[165] = Ht, t[166] = Ut, t[167] = Gt, t[168] = Kt, t[169] = qt) : qt = t[169];
        let Jt = qt,
            Yt;
        t[170] !== i || t[171] !== _ || t[172] !== L ? (Yt = o(`group relative flex w-full min-w-0 flex-col gap-2.5 text-start`, !_ && !L && [`before:pointer-events-none before:absolute before:inset-x-8 before:bottom-2 before:h-3 before:rounded-full`, `before:bg-black/20 before:opacity-0 before:blur-md before:content-[''] dark:before:bg-black/45`, `motion-safe:before:transition-opacity motion-safe:before:duration-300 motion-safe:before:ease-[cubic-bezier(0.22,1,0.36,1)]`, `motion-safe:group-hover:before:opacity-35`, `motion-safe:group-focus-within:before:opacity-35`], i), t[170] = i, t[171] = _, t[172] = L, t[173] = Yt) : Yt = t[173];
        let Xt;
        t[174] !== zt || t[175] !== Jt || t[176] !== h || t[177] !== me ? (Xt = h ? (0, Z.jsx)(`div`, {
            className: `w-full text-start`,
            children: zt
        }) : me?.(Jt) ?? Jt, t[174] = zt, t[175] = Jt, t[176] = h, t[177] = me, t[178] = Xt) : Xt = t[178];
        let Zt;
        t[179] === S ? Zt = t[180] : (Zt = S != null && (0, Z.jsx)(ct, {
            ...S
        }), t[179] = S, t[180] = Zt);
        let Qt;
        t[181] !== n.isShared || t[182] !== v ? (Qt = n.isShared ? (0, Z.jsx)(`span`, {
            id: v,
            className: `sr-only`,
            children: (0, Z.jsx)(fe, {
                ...Pe.sharedFile
            })
        }) : null, t[181] = n.isShared, t[182] = v, t[183] = Qt) : Qt = t[183];
        let $t;
        t[184] !== m || t[185] !== n.id || t[186] !== s || t[187] !== tt || t[188] !== p || t[189] !== R ? ($t = s && (0, Z.jsx)(`div`, {
            style: R.style,
            className: R.containerClassName,
            children: (0, Z.jsxs)(`div`, {
                className: R.controlClassName,
                children: [(0, Z.jsx)(`input`, {
                    type: `checkbox`,
                    checked: p,
                    readOnly: !0,
                    onClick: e => s(e.currentTarget.checked, {
                        shiftKey: e.shiftKey
                    }),
                    "aria-label": tt,
                    className: o(`bg-token-bg-primary/80 dark:bg-token-bg-secondary/80 peer border-token-border-heavy absolute inset-0 m-0 size-5 cursor-pointer appearance-none rounded-full border transition-[opacity,background-color,border-color,box-shadow] duration-200 ease-out dark:border-white/20`, `focus-visible:ring-token-ring focus-visible:ring-offset-token-bg-primary focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none`, p ? `border-black bg-white opacity-100 dark:border-white dark:bg-white` : m ? `opacity-100` : `opacity-0 group-focus-within:opacity-100 group-hover:opacity-100`)
                }), (0, Z.jsx)(He, {
                    "data-testid": `artifact-card-select-icon-${n.id}`,
                    className: `pointer-events-none absolute h-3.5 w-3.5 text-black opacity-0 transition-opacity peer-checked:opacity-100 dark:text-black`,
                    "aria-hidden": `true`
                })]
            })
        }), t[184] = m, t[185] = n.id, t[186] = s, t[187] = tt, t[188] = p, t[189] = R, t[190] = $t) : $t = t[190];
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
    if (!Re({
            disableExposureLog: e
        })) return Wt();
    let t = Ut();
    if (t != null) return t;
    let n = l() ?? ee();
    return n == null || n.planType !== ne.FREE && n.planType !== ne.GO && n.planType !== ne.PLUS ? `list` : `grid`
}
var Ut, Wt, Gt = e((() => {
    u(), E(), n(), oe(), ae(), Ut = d(ce.RecallArtifactsViewMode, () => null, {
        coerceStoredValue: Vt
    }), Wt = Object.assign(a(() => Ut() ?? `list`), {
        set: (...e) => Ut.set(...e)
    })
}));
export {
    it as C, $e as S, at as T, tt as _, zt as a, R as b, St as c, lt as d, ht as f, H as g, V as h, Nt as i, X as l, vt as m, Ht as n, Et as o, mt as p, Gt as r, Bt as s, Wt as t, dt as u, L as v, et as w, I as x, F as y
};
//# sourceMappingURL=ad8b328d-mpwuhnzbnryi5bgp.js.map
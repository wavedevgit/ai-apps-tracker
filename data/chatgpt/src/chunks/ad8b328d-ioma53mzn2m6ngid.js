import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $st as n,
    Az as r,
    Fp as i,
    Hnt as a,
    I1 as o,
    J5 as s,
    Jnt as c,
    M1 as l,
    Ont as u,
    Rm as d,
    S1 as f,
    Vp as ee,
    _nt as te,
    fst as ne,
    hnt as re,
    jz as ie,
    knt as ae,
    m8 as oe,
    q5 as p,
    v8 as se,
    y8 as ce
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as le,
    Hn as ue,
    O as de,
    Pn as fe,
    Rn as pe,
    Tn as me,
    Vn as m,
    s as h,
    zn as g
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    DPt as he,
    EPt as ge,
    F9t as _e,
    G9t as ve,
    H9t as _,
    IPt as ye,
    JOt as v,
    K9t as be,
    LPt as y,
    OIn as b,
    OPt as xe,
    QPt as x,
    QTt as Se,
    TPt as S,
    YOt as Ce,
    ZPt as C,
    ZTt as we,
    aPt as Te,
    bX as Ee,
    ejt as De,
    fpt as Oe,
    iGt as ke,
    iPt as w,
    jIn as Ae,
    kPt as T,
    mpt as E,
    nEt as je,
    qPt as D,
    ren as Me,
    rjt as Ne,
    tEt as Pe,
    tGt as Fe,
    ten as Ie,
    wPt as O,
    yX as Le,
    z9t as Re
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    Ap as ze,
    Cx as Be,
    Sx as Ve,
    dS as He,
    jp as k,
    uS as Ue
} from "./30901919-jory365vq6ym5crx.js";
import {
    Id as We,
    Ld as Ge,
    cp as Ke,
    op as qe
} from "./8b34dbc2-d4icgkio4i3wfm6q.js";
import {
    d as A,
    u as j
} from "./9e958008-iss9kinwq1ejfaw3.js";
import {
    r as M,
    t as N
} from "./84bcef95-lpybdv0srnmz1deq.js";
import {
    n as Je,
    t as P
} from "./3b813a7d-hmrd9qtqimunl5qj.js";
import {
    a as Ye,
    o as Xe
} from "./8c1c50db-oypx60x4alrhnv6k.js";
var F, I = e((() => {
    s(), j(), F = {
        headerWrapper: p(A.wideCompactWidth, A.wideCompactHeader),
        toolbarInner: A.wideCompactWidth,
        contentWrapper: p(A.wideCompactWidth, A.wideCompactContent),
        contentInner: A.wideCompactContentInner
    }
}));

function Ze(e) {
    return e ? et : z
}

function Qe(e, t) {
    return {
        stickyHeader: e,
        classNames: {
            ...e ? V : t ? tt : N,
            toolbarShell: p(P.toolbarShell, e && P.refreshedStickyToolbarShell)
        }
    }
}
var $e, L, R, z, et, B, tt, V, nt, rt = e((() => {
        M(), I(), s(), Je(), $e = new Set, L = `directory_id`, R = `search`, z = `grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3`, et = P.refreshedGridSection, B = P.refreshedMasonryGridSection, tt = {
            ...N,
            headerWrapper: `max-w-app-content px-4! pt-4 md:mt-[calc(2.5rem-var(--header-height))] md:pt-0`
        }, V = {
            ...F,
            headerWrapper: P.refreshedHeaderWrapper,
            stickyHeaderContent: P.refreshedStickyHeaderContent,
            toolbarInner: P.refreshedToolbarInner,
            contentWrapper: P.refreshedContentWrapper
        }, nt = ({
            showSharedBy: e = !1,
            showSizeColumn: t = !0,
            compact: n = !0
        } = {}) => p(n ? P.compactListColumns : t ? P.fullListColumnsWithSize : P.fullListColumnsWithoutSize, e ? P.desktopListColumnsWithSharedBy : t ? P.desktopListColumnsWithSize : P.desktopListColumnsWithoutSize)
    })),
    it, H, U, W = e((() => {
        it = me(), H = m(), U = e => {
            "use forget";
            let t = (0, it.c)(8),
                {
                    title: n,
                    metadata: r,
                    metadataDescriptionId: i
                } = e,
                a;
            t[0] === n ? a = t[1] : (a = (0, H.jsx)(`div`, {
                className: `text-token-text-primary text-body-small-medium truncate`,
                dir: `auto`,
                title: n,
                children: n
            }), t[0] = n, t[1] = a);
            let o;
            t[2] !== r || t[3] !== i ? (o = (0, H.jsx)(`div`, {
                id: i,
                className: `text-token-text-secondary text-footnote min-h-5`,
                children: r
            }), t[2] = r, t[3] = i, t[4] = o) : o = t[4];
            let s;
            return t[5] !== a || t[6] !== o ? (s = (0, H.jsxs)(`div`, {
                className: `min-w-0`,
                children: [a, o]
            }), t[5] = a, t[6] = o, t[7] = s) : s = t[7], s
        }
    })),
    G, K, at, ot, q = e((() => {
        G = me(), k(), W(), g(), K = m(), at = `•`, ot = e => {
            "use forget";
            let t = (0, G.c)(16),
                {
                    title: n,
                    url: r,
                    price: i
                } = e,
                a = le(),
                o;
            t[0] === i ? o = t[1] : (o = i?.trim() ? (0, K.jsxs)(K.Fragment, {
                children: [(0, K.jsx)(`span`, {
                    children: i
                }), (0, K.jsx)(`span`, {
                    "aria-hidden": `true`,
                    children: at
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
            t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, K.jsx)(fe, {
                id: `chatgpt.shopping.virtual_try_on.result.product.buy_link`,
                defaultMessage: `Buy it here`
            }), l = (0, K.jsx)(ze, {
                className: `icon-sm shrink-0`,
                "aria-hidden": `true`
            }), t[5] = c, t[6] = l) : (c = t[5], l = t[6]);
            let u;
            t[7] !== s || t[8] !== r ? (u = (0, K.jsxs)(`a`, {
                href: r,
                target: `_blank`,
                rel: `noopener noreferrer`,
                "aria-label": s,
                className: `hover:text-token-text-primary inline-flex w-fit items-center gap-1 underline underline-offset-4 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2`,
                children: [c, l]
            }), t[7] = s, t[8] = r, t[9] = u) : u = t[9];
            let d;
            t[10] !== o || t[11] !== u ? (d = (0, K.jsxs)(`div`, {
                className: `flex flex-wrap items-center gap-x-1`,
                children: [o, u]
            }), t[10] = o, t[11] = u, t[12] = d) : d = t[12];
            let f;
            return t[13] !== d || t[14] !== n ? (f = (0, K.jsx)(U, {
                title: n,
                metadata: d
            }), t[13] = d, t[14] = n, t[15] = f) : f = t[15], f
        }
    }));

function st(e, t) {
    return e <= 0 || t <= 0 || !Number.isFinite(e) || !Number.isFinite(t) ? 1 : Math.min(_t, Math.max(gt, e / t))
}

function ct(e) {
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
        let t = ct(o),
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
    if (n.length === 0 || x(e)) return n;
    let r = D(S(e));
    if (!r) return n;
    let i = `.${r}`;
    return n.toLowerCase().endsWith(i) ? n.slice(0, n.length - i.length) : n
}

function Et(e, t, n = {}) {
    return e.map(e => {
        let r = typeof n.showThumbnail == `function` ? n.showThumbnail(e) : n.showThumbnail !== !1,
            i = n.getSharedLibraryFileId?.(e),
            a = i !== void 0 && e.source?.type === `chat_upload` && !w(e),
            o = a ? i : void 0,
            s = Ce(o) && Ee(),
            c = ge(e),
            l = _e(e),
            u = c.isImageLike || e.classifiers.library_file_category === `image`;
        return {
            id: e.id,
            title: n.getDisplayTitle?.(e) ?? Tt(e, xe(he(e), e.classifiers.library_artifact_type, n.intl)),
            fileTypeLabel: c.label,
            iconKey: c.iconKey,
            isImageLike: u,
            isDeepResearchReport: x(e),
            isSavedChatMessage: E(e),
            isSavedEntity: e.source?.type === `saved_entity`,
            isSavedPlace: e.source?.type === `saved_entity` && We(e.savedEntity?.saved_target.sidebar_params.category) === `place`,
            isSavedProduct: e.classifiers.library_artifact_subtype === `product`,
            virtualTryOnProduct: e.virtualTryOnProduct,
            sizeBytes: e.sizeBytes,
            fileId: s ? o : !r || a ? void 0 : n.getThumbnailFileId?.(e) ?? O(e) ?? void 0,
            libraryFileId: e.libraryFileId,
            sharedLibraryFileId: s ? o : void 0,
            thumbnailUrl: r && !a ? e.thumbnailUrl : void 0,
            width: r && !a ? e.width : void 0,
            height: r && !a ? e.height : void 0,
            fileName: S(e),
            mimeType: e.mimeType,
            gizmoId: a ? void 0 : e.gizmoId,
            source: l?.provider,
            mountedLibraryFileId: l?.itemId,
            libraryArtifactType: e.classifiers.library_artifact_type,
            isShared: e.isShared === !0 && (e.source?.type === `google_drive` || e.source?.type === `chat_upload` && Me()),
            onOpen: () => t(e)
        }
    })
}
var Dt, Ot, Z, kt, At, jt, Q, $, Mt, Nt, Pt, Ft, It, Lt, Rt, zt, Bt = e((() => {
    Dt = me(), Le(), Be(), He(), je(), Se(), y(), Ke(), ee(), Te(), _(), v(), Ie(), Ge(), q(), ie(), te(), Ne(), c(), h(), s(), Ot = t(ue()), g(), T(), Oe(), C(), ve(), Xe(), vt(), ke(), X(), Je(), Z = m(), kt = `absolute inset-x-0 top-0 flex h-[91px] items-start px-5 py-[14px]`, At = `w-full text-[14px] leading-5 font-medium`, jt = `line-clamp-2 min-w-0 break-words [overflow-wrap:anywhere]`, Q = `absolute inset-x-0 bottom-0 flex h-[68px] items-end px-5 py-[14px]`, $ = `w-full truncate text-[12px] leading-[16px]`, Mt = `rounded-[26px]`, Nt = `rounded-[26px]!`, Pt = `focus-visible:rounded-[26px]`, Ft = `rounded-2xl`, It = `focus-visible:rounded-2xl`, Lt = e => {
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
    }, Rt = pe({
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
                className: o,
                selected: s,
                onToggleSelect: c,
                onOpenPreview: l,
                alwaysShowSelectionControl: u,
                openDisabled: f,
                loading: ee,
                loadingLabel: te,
                dateKind: ne,
                showSuggestedActivity: ie,
                lastModifiedDate: ae,
                square: oe,
                selectionControlWithinThumbnail: se,
                openButtonContent: ce,
                masonry: ue,
                openButtonDescriptionId: pe,
                renderOpenButton: me
            } = e,
            m = s !== void 0 && s,
            h = u !== void 0 && u,
            g = f !== void 0 && f,
            he = ee !== void 0 && ee,
            ge = ne === void 0 ? `modified` : ne,
            _e = ie !== void 0 && ie,
            ve = oe !== void 0 && oe,
            _ = se !== void 0 && se,
            v = ue !== void 0 && ue,
            y = (0, Ot.useId)(),
            [b, xe] = (0, Ot.useState)(null),
            x = le(),
            Se = De(x, ae, ``).trim() || void 0,
            S = n.isImageLike || n.isSavedEntity === !0,
            C = n.isImageLike && n.virtualTryOnProduct != null && a(`533800488`) ? n.virtualTryOnProduct : null,
            Te = ve || n.isSavedPlace === !0,
            Oe = n.thumbnailUrl ? `${n.id}:icon:${n.thumbnailUrl}` : null,
            ke = !S && Oe != null && Oe !== b,
            w = n.fileId ?? ``,
            Ae = n.fileName ?? n.title,
            T, E, je, D, Me;
        if (t[0] !== b || t[1] !== S || t[2] !== n.gizmoId || t[3] !== n.id || t[4] !== n.isSavedEntity || t[5] !== n.libraryFileId || t[6] !== n.mimeType || t[7] !== n.sharedLibraryFileId || t[8] !== n.source || t[9] !== n.thumbnailUrl || t[10] !== w || t[11] !== Ae) {
            let e = Ae.trim(),
                r = n.mimeType ?? d(e),
                a;
            t[17] !== S || t[18] !== n.id || t[19] !== n.libraryFileId || t[20] !== n.source || t[21] !== n.thumbnailUrl ? (a = S && n.source === `google_drive` && n.thumbnailUrl?.trim() ? i(n.libraryFileId ?? n.id, 512) : void 0, t[17] = S, t[18] = n.id, t[19] = n.libraryFileId, t[20] = n.source, t[21] = n.thumbnailUrl, t[22] = a) : a = t[22], T = a;
            let o = T ? `${n.id}:${w}:${T}` : null;
            je = o != null && o !== b;
            let s = !n.isSavedEntity && n.source == null && Ce(n.sharedLibraryFileId) ? n.sharedLibraryFileId : void 0;
            E = !n.isSavedEntity && S && !je && w.length > 0 && e.length > 0 && (n.sharedLibraryFileId == null || s != null && Ee()), Me = de, D = qe({
                fileId: w,
                fileName: e,
                gizmoId: n.sharedLibraryFileId == null ? n.gizmoId : void 0,
                sharedLibraryFileId: s,
                contentType: r
            }), t[0] = b, t[1] = S, t[2] = n.gizmoId, t[3] = n.id, t[4] = n.isSavedEntity, t[5] = n.libraryFileId, t[6] = n.mimeType, t[7] = n.sharedLibraryFileId, t[8] = n.source, t[9] = n.thumbnailUrl, t[10] = w, t[11] = Ae, t[12] = T, t[13] = E, t[14] = je, t[15] = D, t[16] = Me
        } else T = t[12], E = t[13], je = t[14], D = t[15], Me = t[16];
        let Ne;
        t[23] !== E || t[24] !== D ? (Ne = {
            ...D,
            enabled: E,
            retry: !1
        }, t[23] = E, t[24] = D, t[25] = Ne) : Ne = t[25];
        let {
            data: Ie,
            error: O,
            isPending: Le
        } = Me(Ne), ze, Be;
        t[26] !== O || t[27] !== w ? (ze = () => {
            if (!O) return;
            let e = re.logStructuredEvent(`ChatgptRecallThumbnailLoadFailed`, {
                legacyStatsigEventName: `chatgpt_web_recall_files_image_download_error`,
                fileId: w ?? void 0
            });
            re.logValueEventWithStatsig({
                segmentEventName: `web_recall_files_image_download_error`,
                statsigEventName: `chatgpt_web_recall_files_image_download_error`,
                data: {
                    fileId: w
                },
                eventId: e
            })
        }, Be = [O, w], t[26] = O, t[27] = w, t[28] = ze, t[29] = Be) : (ze = t[28], Be = t[29]), (0, Ot.useEffect)(ze, Be);
        let He = n.isSavedEntity ? n.thumbnailUrl : je ? T : Ie,
            k = He ? `${n.id}:${w}:${He}` : null,
            [We, Ge] = (0, Ot.useState)(null),
            [Ke, A] = (0, Ot.useState)(null),
            j = S && k != null && k !== b,
            M = j && k === We,
            N = (_e && Se != null ? x.formatMessage(ge === `opened` ? be.suggestedOpenedAt : be.suggestedModifiedAt, {
                relativeTime: Se
            }) : Se) ?? (n.isSavedChatMessage ? x.formatMessage(Rt.savedMessageMeta) : x.formatMessage(Rt.metaTypeOnly, {
                type: n.fileTypeLabel
            })),
            Je;
        t[30] !== n || t[31] !== l ? (Je = e => {
            if (l) {
                l(e);
                return
            }
            n.onOpen()
        }, t[30] = n, t[31] = l, t[32] = Je) : Je = t[32];
        let Xe = Je,
            F = n.source,
            I = F == null ? void 0 : x.formatMessage(Re(F).label),
            Ze = I ? x.formatMessage(be.itemWithSource, {
                name: n.title,
                source: I
            }) : n.title,
            Qe = Se ? x.formatMessage(ge === `shared` ? Rt.cardWithSharedDate : ge === `opened` ? Rt.cardWithOpenedDate : Rt.cardWithModifiedDate, {
                name: Ze,
                date: Se
            }) : Ze,
            $e = x.formatMessage(Rt.selectCard, {
                name: Qe
            }),
            L, R, z, et;
        if (t[33] !== k || t[34] !== b || t[35] !== O || t[36] !== S || t[37] !== Le || t[38] !== n.height || t[39] !== n.isSavedEntity || t[40] !== n.isSavedPlace || t[41] !== n.width || t[42] !== v || t[43] !== Ke || t[44] !== _ || t[45] !== j || t[46] !== E || t[47] !== M || t[48] !== Te || t[49] !== C) {
            let e = S ? st(n.width ?? 0, n.height ?? 0) : 1,
                r = O != null || n.isSavedEntity && k == null || k != null && k === b;
            L = S && !r && !M && (E && Le || j);
            let i = n.isSavedPlace || r ? 1 : S && k != null && Ke?.previewKey === k ? Ke.aspectRatio : e;
            R = v ? Ct(i) : void 0, z = _ || C != null, et = wt({
                masonry: v,
                masonryStyle: R,
                selectionControlWithinThumbnail: z,
                square: Te
            }), t[33] = k, t[34] = b, t[35] = O, t[36] = S, t[37] = Le, t[38] = n.height, t[39] = n.isSavedEntity, t[40] = n.isSavedPlace, t[41] = n.width, t[42] = v, t[43] = Ke, t[44] = _, t[45] = j, t[46] = E, t[47] = M, t[48] = Te, t[49] = C, t[50] = L, t[51] = R, t[52] = z, t[53] = et
        } else L = t[50], R = t[51], z = t[52], et = t[53];
        let B = et,
            tt;
        t[54] !== k || t[55] !== n.isSavedPlace || t[56] !== v || t[57] !== Ge || t[58] !== A ? (tt = e => {
            k != null && (v && !n.isSavedPlace && A({
                previewKey: k,
                aspectRatio: st(e.naturalWidth, e.naturalHeight)
            }), Ge(k))
        }, t[54] = k, t[55] = n.isSavedPlace, t[56] = v, t[57] = Ge, t[58] = A, t[59] = tt) : tt = t[59];
        let V = tt,
            nt;
        t[60] === k ? nt = t[61] : (nt = () => {
            k != null && xe(k)
        }, t[60] = k, t[61] = nt);
        let rt = nt,
            it = `artifact-card-title-container-${n.id}`,
            H;
        t[62] === Symbol.for(`react.memo_cache_sentinel`) ? (H = p(At, `text-token-text-primary flex items-start gap-1`), t[62] = H) : H = t[62];
        let U;
        t[63] === n.title ? U = t[64] : (U = (0, Z.jsx)(`span`, {
            className: jt,
            children: n.title
        }), t[63] = n.title, t[64] = U);
        let W;
        t[65] !== n.id || t[66] !== n.isShared ? (W = n.isShared ? (0, Z.jsx)(`span`, {
            className: `text-token-text-secondary flex h-5 shrink-0 items-center`,
            children: (0, Z.jsx)(Ye, {
                fileId: n.id
            })
        }) : null, t[65] = n.id, t[66] = n.isShared, t[67] = W) : W = t[67];
        let G;
        t[68] !== U || t[69] !== W ? (G = (0, Z.jsxs)(`div`, {
            className: H,
            children: [U, W]
        }), t[68] = U, t[69] = W, t[70] = G) : G = t[70];
        let K;
        t[71] !== it || t[72] !== G ? (K = (0, Z.jsx)(`div`, {
            "data-testid": it,
            className: kt,
            children: G
        }), t[71] = it, t[72] = G, t[73] = K) : K = t[73];
        let at;
        t[74] === Symbol.for(`react.memo_cache_sentinel`) ? (at = p(`absolute start-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center`), t[74] = at) : at = t[74];
        let q;
        t[75] !== Oe || t[76] !== n.fileName || t[77] !== n.icon || t[78] !== n.iconKey || t[79] !== n.id || t[80] !== n.isSavedChatMessage || t[81] !== n.libraryArtifactType || t[82] !== n.mimeType || t[83] !== n.mountedLibraryFileId || t[84] !== n.thumbnailUrl || t[85] !== ke || t[86] !== F ? (q = n.icon == null ? n.isSavedChatMessage ? (0, Z.jsx)(Ue, {
            "aria-hidden": !0,
            className: `icon h-10 w-10`
        }) : ke ? (0, Z.jsx)(`img`, {
            src: n.thumbnailUrl,
            alt: ``,
            "aria-hidden": `true`,
            className: p(`h-10 w-10 object-contain`, n.thumbnailUrl?.startsWith(`data:image/svg+xml`) && `dark:invert`),
            onError: () => xe(Oe)
        }) : F != null && (n.fileName != null || n.mimeType != null) && ye(n.libraryArtifactType) == null ? (0, Z.jsx)(we, {
            fileName: n.fileName,
            mimeType: n.mimeType,
            mountedLibraryFileId: n.mountedLibraryFileId ?? n.id,
            libraryProvider: F,
            "aria-hidden": !0,
            className: `icon h-10 w-10`
        }) : (0, Z.jsx)(Pe, {
            iconKey: n.iconKey,
            "aria-hidden": !0,
            className: `icon h-10 w-10`
        }) : n.icon, t[75] = Oe, t[76] = n.fileName, t[77] = n.icon, t[78] = n.iconKey, t[79] = n.id, t[80] = n.isSavedChatMessage, t[81] = n.libraryArtifactType, t[82] = n.mimeType, t[83] = n.mountedLibraryFileId, t[84] = n.thumbnailUrl, t[85] = ke, t[86] = F, t[87] = q) : q = t[87];
        let ct;
        t[88] === q ? ct = t[89] : (ct = (0, Z.jsx)(`div`, {
            className: at,
            children: q
        }), t[88] = q, t[89] = ct);
        let lt;
        t[90] === Symbol.for(`react.memo_cache_sentinel`) ? (lt = (0, Z.jsx)(`div`, {
            className: `pointer-events-none absolute inset-x-0 bottom-0 h-[68px]`,
            children: (0, Z.jsx)(`div`, {
                className: `via-token-bg-primary/85 dark:via-token-bg-secondary/85 to-token-bg-primary dark:to-token-bg-secondary absolute inset-x-0 h-[68px] bg-linear-to-b from-transparent`
            })
        }), t[90] = lt) : lt = t[90];
        let ut = I != null || c != null,
            J;
        t[91] !== n || t[92] !== N || t[93] !== ut ? (J = (0, Z.jsx)(Lt, {
            className: `text-token-text-secondary/70`,
            item: n,
            label: N,
            reserveTrailingSpace: ut
        }), t[91] = n, t[92] = N, t[93] = ut, t[94] = J) : J = t[94];
        let dt;
        t[95] !== K || t[96] !== ct || t[97] !== J ? (dt = (0, Z.jsxs)(Z.Fragment, {
            children: [K, ct, lt, J]
        }), t[95] = K, t[96] = ct, t[97] = J, t[98] = dt) : dt = t[98];
        let ft = dt,
            pt = `artifact-card-tile-${n.id}`,
            mt = v && n.isSavedProduct && P.masonryProductThumbnail,
            ht = v && `aspect-[var(--library-masonry-aspect-ratio)]`,
            gt = v && !M && `sm:min-h-[var(--library-masonry-fallback-min-height)]`,
            _t = !v && (Te ? `aspect-square` : `h-[249px]`),
            vt = v ? Ft : Mt,
            yt = !v && `motion-safe:group-hover:shadow-elevation-03 motion-safe:group-focus-within:shadow-elevation-03`,
            bt = !v && `group-hover:bg-token-bg-tertiary/60`,
            xt = m && `border-black ring-2 ring-black dark:border-white dark:ring-white`,
            Y;
        t[99] !== mt || t[100] !== ht || t[101] !== gt || t[102] !== _t || t[103] !== vt || t[104] !== yt || t[105] !== bt || t[106] !== xt ? (Y = p(`border-token-border-light`, `bg-token-bg-primary dark:bg-token-bg-secondary relative w-full overflow-hidden border p-4`, mt, ht, gt, _t, vt, `shadow-elevation-01`, `transition-[background-color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]`, yt, `motion-reduce:transition-[background-color,box-shadow]`, bt, xt), t[99] = mt, t[100] = ht, t[101] = gt, t[102] = _t, t[103] = vt, t[104] = yt, t[105] = bt, t[106] = xt, t[107] = Y) : Y = t[107];
        let X;
        t[108] !== ft || t[109] !== rt || t[110] !== V || t[111] !== He || t[112] !== S || t[113] !== L || t[114] !== n || t[115] !== v || t[116] !== N || t[117] !== c || t[118] !== j || t[119] !== M || t[120] !== I ? (X = S ? (0, Z.jsxs)(Z.Fragment, {
            children: [j && (0, Z.jsxs)(`div`, {
                "aria-hidden": !M,
                className: p(`absolute inset-0 motion-safe:transition-opacity motion-safe:duration-200`, M ? `opacity-100` : `opacity-0`),
                children: [(0, Z.jsx)(`img`, {
                    "data-testid": `artifact-card-image-${n.id}`,
                    src: He,
                    alt: ``,
                    "aria-hidden": `true`,
                    className: p(`absolute inset-0 h-full w-full motion-safe:transition-opacity motion-safe:duration-200`, n.isSavedProduct ? `object-contain` : `object-cover`, M ? `opacity-100` : `opacity-0`),
                    onLoad: e => V(e.currentTarget),
                    onError: rt
                }), v ? (0, Z.jsx)(`div`, {
                    "data-testid": `artifact-card-preview-overlay-${n.id}`,
                    className: St.masonryHoverOverlay,
                    children: n.isShared ? (0, Z.jsx)(Ye, {
                        className: `absolute start-[18px] bottom-[18px] text-white drop-shadow-sm`,
                        fileId: n.id
                    }) : null
                }) : (0, Z.jsxs)(`div`, {
                    "data-testid": `artifact-card-preview-overlay-${n.id}`,
                    className: p(`pointer-events-none absolute inset-0 opacity-0`, `motion-safe:transition-opacity motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]`, `group-focus-within:opacity-100 group-hover:opacity-100`),
                    children: [(0, Z.jsx)(`div`, {
                        className: `absolute inset-x-0 top-0 h-[91px]`,
                        children: (0, Z.jsx)(`div`, {
                            className: `absolute inset-x-0 h-[63px] bg-[linear-gradient(180deg,rgba(0,0,0,0.30)_0%,rgba(0,0,0,0)_100%)]`
                        })
                    }), (0, Z.jsx)(`div`, {
                        "data-testid": `artifact-card-title-container-${n.id}`,
                        className: kt,
                        children: (0, Z.jsxs)(`div`, {
                            className: p(At, `flex items-start gap-1 text-white`),
                            children: [(0, Z.jsx)(`span`, {
                                className: jt,
                                children: n.title
                            }), n.isShared ? (0, Z.jsx)(`span`, {
                                className: `flex h-5 shrink-0 items-center`,
                                children: (0, Z.jsx)(Ye, {
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
                        label: N,
                        reserveTrailingSpace: I != null || c != null
                    })]
                })]
            }), (0, Z.jsx)(`div`, {
                "aria-hidden": M,
                className: p(`absolute inset-0 motion-safe:transition-opacity motion-safe:duration-200`, M ? `opacity-0` : `opacity-100`),
                children: L || M ? (0, Z.jsx)(`div`, {
                    className: St.imagePlaceholder
                }) : ft
            })]
        }) : ft, t[108] = ft, t[109] = rt, t[110] = V, t[111] = He, t[112] = S, t[113] = L, t[114] = n, t[115] = v, t[116] = N, t[117] = c, t[118] = j, t[119] = M, t[120] = I, t[121] = X) : X = t[121];
        let Tt;
        t[122] !== S || t[123] !== v || t[124] !== M ? (Tt = v && (!S || !M) ? (0, Z.jsx)(`div`, {
            className: P.gridHoverOverlay
        }) : null, t[122] = S, t[123] = v, t[124] = M, t[125] = Tt) : Tt = t[125];
        let Et;
        t[126] === m ? Et = t[127] : (Et = m && (0, Z.jsx)(`div`, {
            "aria-hidden": !0,
            className: `bg-token-text-primary/5 pointer-events-none absolute inset-0`
        }), t[126] = m, t[127] = Et);
        let Q;
        t[128] !== h || t[129] !== n.id || t[130] !== v || t[131] !== c || t[132] !== g || t[133] !== m || t[134] !== I || t[135] !== F ? (Q = F != null && I ? (0, Z.jsx)(Fe, {
            ariaLabel: g ? I : void 0,
            className: p(P.gridSourceBadge, !v && St.legacySourceBadge, c && (m || h ? `opacity-0` : `group-focus-within:opacity-0 group-hover:opacity-0`)),
            itemId: n.id,
            provider: F
        }) : null, t[128] = h, t[129] = n.id, t[130] = v, t[131] = c, t[132] = g, t[133] = m, t[134] = I, t[135] = F, t[136] = Q) : Q = t[136];
        let $;
        t[137] !== he || t[138] !== te ? ($ = he ? (0, Z.jsx)(`div`, {
            role: `status`,
            className: `bg-token-bg-primary/70 dark:bg-token-bg-secondary/70 absolute inset-0 z-10 flex items-center justify-center backdrop-blur-[1px]`,
            children: (0, Z.jsxs)(`span`, {
                className: `shadow-elevation-01 bg-token-bg-primary text-token-text-secondary dark:bg-token-bg-secondary flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium`,
                children: [(0, Z.jsx)(r, {
                    className: `icon`
                }), te]
            })
        }) : null, t[137] = he, t[138] = te, t[139] = $) : $ = t[139];
        let Nt;
        t[140] !== R || t[141] !== pt || t[142] !== Y || t[143] !== X || t[144] !== Tt || t[145] !== Et || t[146] !== Q || t[147] !== $ ? (Nt = (0, Z.jsxs)(`div`, {
            "data-library-grid-tile": !0,
            "data-testid": pt,
            style: R,
            className: Y,
            children: [X, Tt, Et, Q, $]
        }), t[140] = R, t[141] = pt, t[142] = Y, t[143] = X, t[144] = Tt, t[145] = Et, t[146] = Q, t[147] = $, t[148] = Nt) : Nt = t[148];
        let zt = Nt,
            Bt;
        t[149] !== n.isShared || t[150] !== pe || t[151] !== y ? (Bt = [n.isShared ? y : void 0, pe].filter(Boolean).join(` `) || void 0, t[149] = n.isShared, t[150] = pe, t[151] = y, t[152] = Bt) : Bt = t[152];
        let Vt;
        t[153] === Xe ? Vt = t[154] : (Vt = e => {
            Xe({
                shiftKey: e.shiftKey
            })
        }, t[153] = Xe, t[154] = Vt);
        let Ht;
        t[155] !== V || t[156] !== v || t[157] !== ce || t[158] !== _ ? (Ht = v && _ && ce != null ? e => {
            e.target instanceof HTMLImageElement && V(e.target)
        } : void 0, t[155] = V, t[156] = v, t[157] = ce, t[158] = _, t[159] = Ht) : Ht = t[159];
        let Ut = v && _ && ce != null ? rt : void 0,
            Wt = v ? It : Pt,
            Gt;
        t[160] === Wt ? Gt = t[161] : (Gt = p(`focus-visible:ring-token-ring focus-visible:ring-offset-token-bg-primary w-full text-start focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none`, Wt), t[160] = Wt, t[161] = Gt);
        let Kt = ce ?? zt,
            qt;
        t[162] !== Qe || t[163] !== Bt || t[164] !== Vt || t[165] !== Ht || t[166] !== Ut || t[167] !== Gt || t[168] !== Kt ? (qt = (0, Z.jsx)(`button`, {
            type: `button`,
            "aria-label": Qe,
            "aria-describedby": Bt,
            onClick: Vt,
            onLoadCapture: Ht,
            onErrorCapture: Ut,
            className: Gt,
            children: Kt
        }), t[162] = Qe, t[163] = Bt, t[164] = Vt, t[165] = Ht, t[166] = Ut, t[167] = Gt, t[168] = Kt, t[169] = qt) : qt = t[169];
        let Jt = qt,
            Yt;
        t[170] !== o || t[171] !== v || t[172] !== z ? (Yt = p(`group relative flex w-full min-w-0 flex-col gap-2.5 text-start`, !v && !z && [`before:pointer-events-none before:absolute before:inset-x-8 before:bottom-2 before:h-3 before:rounded-full`, `before:bg-black/20 before:opacity-0 before:blur-md before:content-[''] dark:before:bg-black/45`, `motion-safe:before:transition-opacity motion-safe:before:duration-300 motion-safe:before:ease-[cubic-bezier(0.22,1,0.36,1)]`, `motion-safe:group-hover:before:opacity-35`, `motion-safe:group-focus-within:before:opacity-35`], o), t[170] = o, t[171] = v, t[172] = z, t[173] = Yt) : Yt = t[173];
        let Xt;
        t[174] !== zt || t[175] !== Jt || t[176] !== g || t[177] !== me ? (Xt = g ? (0, Z.jsx)(`div`, {
            className: `w-full text-start`,
            children: zt
        }) : me?.(Jt) ?? Jt, t[174] = zt, t[175] = Jt, t[176] = g, t[177] = me, t[178] = Xt) : Xt = t[178];
        let Zt;
        t[179] === C ? Zt = t[180] : (Zt = C != null && (0, Z.jsx)(ot, {
            ...C
        }), t[179] = C, t[180] = Zt);
        let Qt;
        t[181] !== n.isShared || t[182] !== y ? (Qt = n.isShared ? (0, Z.jsx)(`span`, {
            id: y,
            className: `sr-only`,
            children: (0, Z.jsx)(fe, {
                ...be.sharedFile
            })
        }) : null, t[181] = n.isShared, t[182] = y, t[183] = Qt) : Qt = t[183];
        let $t;
        t[184] !== h || t[185] !== n.id || t[186] !== c || t[187] !== $e || t[188] !== m || t[189] !== B ? ($t = c && (0, Z.jsx)(`div`, {
            style: B.style,
            className: B.containerClassName,
            children: (0, Z.jsxs)(`div`, {
                className: B.controlClassName,
                children: [(0, Z.jsx)(`input`, {
                    type: `checkbox`,
                    checked: m,
                    readOnly: !0,
                    onClick: e => c(e.currentTarget.checked, {
                        shiftKey: e.shiftKey
                    }),
                    "aria-label": $e,
                    className: p(`bg-token-bg-primary/80 dark:bg-token-bg-secondary/80 peer border-token-border-heavy absolute inset-0 m-0 size-5 cursor-pointer appearance-none rounded-full border transition-[opacity,background-color,border-color,box-shadow] duration-200 ease-out dark:border-white/20`, `focus-visible:ring-token-ring focus-visible:ring-offset-token-bg-primary focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none`, m ? `border-black bg-white opacity-100 dark:border-white dark:bg-white` : h ? `opacity-100` : `opacity-0 group-focus-within:opacity-100 group-hover:opacity-100`)
                }), (0, Z.jsx)(Ve, {
                    "data-testid": `artifact-card-select-icon-${n.id}`,
                    className: `pointer-events-none absolute h-3.5 w-3.5 text-black opacity-0 transition-opacity peer-checked:opacity-100 dark:text-black`,
                    "aria-hidden": `true`
                })]
            })
        }), t[184] = h, t[185] = n.id, t[186] = c, t[187] = $e, t[188] = m, t[189] = B, t[190] = $t) : $t = t[190];
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
    if (!Ae({
            disableExposureLog: e
        })) return Wt();
    let t = Ut();
    if (t != null) return t;
    let n = f() ?? l();
    return n == null || n.planType !== ne.FREE && n.planType !== ne.GO && n.planType !== ne.PLUS ? `list` : `grid`
}
var Ut, Wt, Gt = e((() => {
    n(), b(), oe(), o(), ae(), Ut = se(u.RecallArtifactsViewMode, () => null, {
        coerceStoredValue: Vt
    }), Wt = Object.assign(ce(() => Ut() ?? `list`), {
        set: (...e) => Ut.set(...e)
    })
}));
export {
    nt as C, Ze as S, rt as T, $e as _, zt as a, B as b, St as c, st as d, ht as f, W as g, U as h, Nt as i, X as l, vt as m, Ht as n, Et as o, mt as p, Gt as r, Bt as s, Wt as t, dt as u, z as v, Qe as w, R as x, L as y
};
//# sourceMappingURL=ad8b328d-ioma53mzn2m6ngid.js.map
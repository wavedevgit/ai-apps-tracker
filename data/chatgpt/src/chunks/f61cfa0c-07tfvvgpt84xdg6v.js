import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    BU as n,
    Crt as r,
    LU as i,
    _rt as a,
    c2 as o,
    d2 as s,
    fB as c,
    irt as l,
    jet as u,
    nrt as d,
    pB as f,
    rrt as p,
    wet as m,
    y5 as h
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as g,
    Ln as _,
    N as ee,
    Nt as te,
    O as ne,
    Q as v,
    Rn as y,
    s as b,
    wn as x
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Mtn as re,
    Ntn as ie,
    YPn as S,
    cFn as C,
    dFn as w,
    fFn as ae,
    g0 as oe,
    h0 as se,
    m0 as T,
    mFn as E,
    qPn as D,
    uFn as O
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Gy as k,
    Wy as A,
    Yy as j,
    bb as M,
    ub as N,
    xb as P
} from "./8b34dbc2-lmwubajnld74ksfm.js";
import {
    n as F,
    t as I
} from "./12a8bcb0-gddivdnbzjapmltn.js";

function L() {
    let e = d.getItem(p.LibraryStorageLimitModalDismissedAt);
    return typeof e == `number` && Number.isFinite(e) && e > 0 ? e : null
}

function R(e = Date.now()) {
    d.setItem(p.LibraryStorageLimitModalDismissedAt, e)
}

function z({
    dismissedAtMs: e,
    nowMs: t = Date.now()
}) {
    return e != null && t < e + 6048e5
}

function B({
    dismissedAtMs: e,
    nowMs: t
} = {}) {
    return z({
        dismissedAtMs: e ?? L(),
        nowMs: t
    })
}

function V(e) {
    return e.formatMessage(Q.modalTitle)
}

function H(e) {
    return e.formatMessage(Q.modalDescription)
}

function U(e) {
    return e.formatMessage(Q.manageFiles)
}

function W(e) {
    return e.formatMessage(Q.dragOverlayTitle)
}

function G(e) {
    return e.formatMessage(Q.dragOverlayDescription)
}

function K(e) {
    return e instanceof n ? h(() => e.toasts$()) : []
}

function ce({
    onUpgrade: e,
    intl: t,
    toaster: n,
    usage: r
}) {
    if (K(n).some(e => String(e.id).startsWith(Y) && e.isShown)) return;
    let i = {
            current: void 0
        },
        a = () => {
            e != null && (P({
                surface: j,
                source: k,
                usage: r,
                cta: D.CHATGPT_FILE_LIBRARY_STORAGE_CTA_UPGRADE,
                openModalLocation: Z
            }), i.current?.close(), e())
        };
    n.info(``, {
        ...re,
        alertClassName: X,
        description: (0, J.jsx)(`span`, {
            children: e ? t.formatMessage(Q.toastMessage, {
                upgradeButton: e => (0, J.jsx)(`button`, {
                    type: `button`,
                    className: `inline cursor-pointer underline underline-offset-2 hover:no-underline focus-visible:no-underline focus-visible:outline-none`,
                    onClick: a,
                    children: e
                })
            }) : t.formatMessage(Q.toastWithoutUpgradeAction)
        }),
        duration: 5,
        icon: c,
        iconClassName: `icon`,
        iconWrapperClassName: `shrink-0 grow-0 self-center`,
        id: Y
    });
    let o = K(n).find(e => String(e.id).startsWith(Y) && e.isShown);
    return i.current = o, o != null && M({
        surface: j,
        source: k,
        usage: r,
        noticeType: S.CHATGPT_FILE_LIBRARY_STORAGE_NOTICE_TYPE_TOAST,
        entrypoint: `library_dropzone`
    }), o
}

function le(e) {
    "use forget";
    let t = (0, q.c)(17),
        {
            intl: n,
            toaster: r
        } = e,
        i = te(),
        o = ee(),
        c;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (c = a(`2767344663`) && a(`4231797315`), t[0] = c) : c = t[0];
    let l = c,
        u;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (u = {
        queryKey: C,
        queryFn: w,
        enabled: l,
        staleTime: 0,
        refetchOnMount: `always`
    }, t[1] = u) : u = t[1];
    let d = ne(u),
        f;
    t[2] === d.data ? f = t[3] : (f = l && d.data != null && E(d.data), t[2] = d.data, t[3] = f);
    let p = f,
        m;
    t[4] !== o || t[5] !== d.data ? (m = async () => {
        if (!l) return !1;
        let e = d.data;
        try {
            e = await o.fetchQuery({
                queryKey: C,
                queryFn: w,
                staleTime: 0
            })
        } catch {}
        return e != null && E(e)
    }, t[4] = o, t[5] = d.data, t[6] = m) : m = t[6];
    let h = m,
        g;
    t[7] !== n || t[8] !== i || t[9] !== o || t[10] !== r || t[11] !== d.data ? (g = () => {
        if (!l) return;
        let e = o.getQueryData(C) ?? d.data,
            t = O(e) && oe(Z);
        if (B()) {
            ce({
                intl: n,
                onUpgrade: t ? () => {
                    T({
                        navigate: i,
                        openModalLocation: Z,
                        primaryAction: void 0
                    })
                } : void 0,
                toaster: r,
                usage: e
            });
            return
        }
        M({
            surface: j,
            source: A,
            usage: e,
            noticeType: S.CHATGPT_FILE_LIBRARY_STORAGE_NOTICE_TYPE_MODAL,
            entrypoint: `library_dropzone`
        }), s(I, {
            usage: e
        })
    }, t[7] = n, t[8] = i, t[9] = o, t[10] = r, t[11] = d.data, t[12] = g) : g = t[12];
    let _ = g,
        v;
    return t[13] !== p || t[14] !== h || t[15] !== _ ? (v = {
        isLibraryStorageLimitFull: p,
        isLibraryStorageLimitUploadBlocked: h,
        showLibraryStorageLimitBlockedUploadNotice: _
    }, t[13] = p, t[14] = h, t[15] = _, t[16] = v) : v = t[16], v
}
var q, J, Y, X, Z, Q, $ = e((() => {
    q = x(), f(), o(), ie(), se(), F(), ae(), N(), t(), i(), l(), r(), b(), y(), v(), m(), J = g(), Y = `library-storage-limit-dropzone`, X = `!border-black !bg-black !text-white dark:!border-black dark:!bg-black dark:!text-white`, Z = u.LibraryStorageLimitToast, Q = _({
        toastMessage: {
            id: `libraryStorageLimitDropzone.toastWithUpgradeAction`,
            defaultMessage: `Storage full. <upgradeButton>Upgrade</upgradeButton> for more storage space.`
        },
        toastWithoutUpgradeAction: {
            id: `libraryStorageLimitDropzone.toastWithoutUpgradeAction`,
            defaultMessage: `Storage full. Free up space to add more files.`
        },
        modalTitle: {
            id: `libraryStorageLimitModal.title`,
            defaultMessage: `Upgrade to keep adding files`
        },
        modalDescription: {
            id: `libraryStorageLimitModal.description`,
            defaultMessage: `Your Library storage is full. Manage your files or upgrade for more storage.`
        },
        manageFiles: {
            id: `libraryStorageLimitModal.manageFiles`,
            defaultMessage: `Manage files`
        },
        dragOverlayTitle: {
            id: `libraryStorageLimitDropzone.dragOverlay.title`,
            defaultMessage: `Your library is full`
        },
        dragOverlayDescription: {
            id: `libraryStorageLimitDropzone.dragOverlay.description`,
            defaultMessage: `Free up space to add new files`
        }
    })
}));
export {
    V as a, le as c, U as i, W as n, $ as o, H as r, R as s, G as t
};
//# sourceMappingURL=f61cfa0c-07tfvvgpt84xdg6v.js.map
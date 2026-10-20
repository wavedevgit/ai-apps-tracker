import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ant as t,
    HU as n,
    Q0 as r,
    Wnt as i,
    Xnt as a,
    aB as o,
    h8 as s,
    iB as c,
    jet as l,
    jnt as u,
    knt as d,
    t2 as f,
    wet as p,
    x5 as m,
    zU as h
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as g,
    Ln as _,
    N as ee,
    Nt as te,
    O as v,
    Q as y,
    Rn as b,
    s as x,
    wn as S
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    YNn as ne,
    ZNn as C,
    btn as re,
    c0 as ie,
    fPn as ae,
    gPn as w,
    l0 as oe,
    mPn as se,
    pPn as T,
    u0 as E,
    uPn as D,
    xtn as O
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Hy as k,
    Ky as A,
    Vy as j,
    _b as M,
    sb as N,
    vb as P
} from "./8b34dbc2-k1zgxrtsww83602u.js";
import {
    n as F,
    t as I
} from "./12a8bcb0-c9hpjc2ty9d378md.js";

function L() {
    let e = d.getItem(t.LibraryStorageLimitModalDismissedAt);
    return typeof e == `number` && Number.isFinite(e) && e > 0 ? e : null
}

function R(e = Date.now()) {
    d.setItem(t.LibraryStorageLimitModalDismissedAt, e)
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
    return e instanceof n ? m(() => e.toasts$()) : []
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
                surface: A,
                source: k,
                usage: r,
                cta: ne.CHATGPT_FILE_LIBRARY_STORAGE_CTA_UPGRADE,
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
        surface: A,
        source: k,
        usage: r,
        noticeType: C.CHATGPT_FILE_LIBRARY_STORAGE_NOTICE_TYPE_TOAST,
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
        a = te(),
        o = ee(),
        s;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (s = i(`2767344663`) && i(`4231797315`), t[0] = s) : s = t[0];
    let c = s,
        l;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (l = {
        queryKey: D,
        queryFn: T,
        enabled: c,
        staleTime: 0,
        refetchOnMount: `always`
    }, t[1] = l) : l = t[1];
    let u = v(l),
        d;
    t[2] === u.data ? d = t[3] : (d = c && u.data != null && w(u.data), t[2] = u.data, t[3] = d);
    let p = d,
        m;
    t[4] !== o || t[5] !== u.data ? (m = async () => {
        if (!c) return !1;
        let e = u.data;
        try {
            e = await o.fetchQuery({
                queryKey: D,
                queryFn: T,
                staleTime: 0
            })
        } catch {}
        return e != null && w(e)
    }, t[4] = o, t[5] = u.data, t[6] = m) : m = t[6];
    let h = m,
        g;
    t[7] !== n || t[8] !== a || t[9] !== o || t[10] !== r || t[11] !== u.data ? (g = () => {
        if (!c) return;
        let e = o.getQueryData(D) ?? u.data,
            t = ae(e) && E(Z);
        if (B()) {
            ce({
                intl: n,
                onUpgrade: t ? () => {
                    ie({
                        navigate: a,
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
            surface: A,
            source: j,
            usage: e,
            noticeType: C.CHATGPT_FILE_LIBRARY_STORAGE_NOTICE_TYPE_MODAL,
            entrypoint: `library_dropzone`
        }), f(I, {
            usage: e
        })
    }, t[7] = n, t[8] = a, t[9] = o, t[10] = r, t[11] = u.data, t[12] = g) : g = t[12];
    let _ = g,
        y;
    return t[13] !== p || t[14] !== h || t[15] !== _ ? (y = {
        isLibraryStorageLimitFull: p,
        isLibraryStorageLimitUploadBlocked: h,
        showLibraryStorageLimitBlockedUploadNotice: _
    }, t[13] = p, t[14] = h, t[15] = _, t[16] = y) : y = t[16], y
}
var q, J, Y, X, Z, Q, $ = e((() => {
    q = S(), o(), r(), O(), oe(), F(), se(), N(), s(), h(), u(), a(), x(), b(), y(), p(), J = g(), Y = `library-storage-limit-dropzone`, X = `!border-black !bg-black !text-white dark:!border-black dark:!bg-black dark:!text-white`, Z = l.LibraryStorageLimitToast, Q = _({
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
//# sourceMappingURL=f61cfa0c-jko845a48x4khfpi.js.map
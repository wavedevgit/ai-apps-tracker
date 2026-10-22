import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    BU as t,
    F5 as n,
    Jnt as r,
    Ket as i,
    LU as a,
    Xnt as o,
    Ynt as s,
    c2 as c,
    d2 as ee,
    fB as l,
    hrt as u,
    k8 as d,
    lrt as f,
    pB as p,
    zet as m
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bn as h,
    Ln as g,
    N as _,
    Nt as v,
    O as te,
    Q as y,
    Rn as ne,
    s as re,
    wn as b
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Pn as x,
    Atn as S,
    IPn as C,
    PPn as w,
    QPn as T,
    YPn as E,
    ZPn as ie,
    g0 as ae,
    h0 as oe,
    jtn as D,
    m0 as O,
    tFn as k
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    Jy as A,
    Uy as j,
    Wy as M,
    bb as N,
    lb as P,
    yb as F
} from "./8b34dbc2-n194ohawifys3bko.js";
import {
    n as I,
    t as L
} from "./12a8bcb0-j0rfn147nrc8gxxs.js";

function R() {
    let e = r.getItem(s.LibraryStorageLimitModalDismissedAt);
    return typeof e == `number` && Number.isFinite(e) && e > 0 ? e : null
}

function z(e = Date.now()) {
    r.setItem(s.LibraryStorageLimitModalDismissedAt, e)
}

function B({
    dismissedAtMs: e,
    nowMs: t = Date.now()
}) {
    return e != null && t < e + 6048e5
}

function V({
    dismissedAtMs: e,
    nowMs: t
} = {}) {
    return B({
        dismissedAtMs: e ?? R(),
        nowMs: t
    })
}

function H(e) {
    return e.formatMessage($.modalTitle)
}

function U(e) {
    return e.formatMessage($.modalDescription)
}

function W(e) {
    return e.formatMessage($.manageFiles)
}

function G(e) {
    return e.formatMessage($.dragOverlayTitle)
}

function K(e) {
    return e.formatMessage($.dragOverlayDescription)
}

function q(e) {
    return e instanceof t ? n(() => e.toasts$()) : []
}

function se({
    onUpgrade: e,
    intl: t,
    toaster: n,
    usage: r
}) {
    if (q(n).some(e => String(e.id).startsWith(X) && e.isShown)) return;
    let i = {
            current: void 0
        },
        a = () => {
            e != null && (N({
                surface: A,
                source: M,
                usage: r,
                cta: w.CHATGPT_FILE_LIBRARY_STORAGE_CTA_UPGRADE,
                openModalLocation: Q
            }), i.current?.close(), e())
        };
    n.info(``, {
        ...S,
        alertClassName: Z,
        description: (0, Y.jsx)(`span`, {
            children: e ? t.formatMessage($.toastMessage, {
                upgradeButton: e => (0, Y.jsx)(`button`, {
                    type: `button`,
                    className: `inline cursor-pointer underline underline-offset-2 hover:no-underline focus-visible:no-underline focus-visible:outline-none`,
                    onClick: a,
                    children: e
                })
            }) : t.formatMessage($.toastWithoutUpgradeAction)
        }),
        duration: 5,
        icon: l,
        iconClassName: `icon`,
        iconWrapperClassName: `shrink-0 grow-0 self-center`,
        id: X
    });
    let o = q(n).find(e => String(e.id).startsWith(X) && e.isShown);
    return i.current = o, o != null && F({
        surface: A,
        source: M,
        usage: r,
        noticeType: C.CHATGPT_FILE_LIBRARY_STORAGE_NOTICE_TYPE_TOAST,
        entrypoint: `library_dropzone`
    }), o
}

function ce(e) {
    "use forget";
    let t = (0, J.c)(17),
        {
            intl: n,
            toaster: r
        } = e,
        i = v(),
        a = _(),
        o;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (o = f(`2767344663`) && f(`4231797315`), t[0] = o) : o = t[0];
    let s = o,
        c;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (c = {
        queryKey: E,
        queryFn: T,
        enabled: s,
        staleTime: 0,
        refetchOnMount: `always`
    }, t[1] = c) : c = t[1];
    let l = te(c),
        u;
    t[2] === l.data ? u = t[3] : (u = s && l.data != null && k(l.data), t[2] = l.data, t[3] = u);
    let d = u,
        p;
    t[4] !== a || t[5] !== l.data ? (p = async () => {
        if (!s) return !1;
        let e = l.data;
        try {
            e = await a.fetchQuery({
                queryKey: E,
                queryFn: T,
                staleTime: 0
            })
        } catch {}
        return e != null && k(e)
    }, t[4] = a, t[5] = l.data, t[6] = p) : p = t[6];
    let m = p,
        h;
    t[7] !== n || t[8] !== i || t[9] !== a || t[10] !== r || t[11] !== l.data ? (h = () => {
        if (!s) return;
        let e = a.getQueryData(E) ?? l.data,
            t = ie(e) && ae(Q);
        if (V()) {
            se({
                intl: n,
                onUpgrade: t ? () => {
                    O({
                        navigate: i,
                        openModalLocation: Q,
                        primaryAction: void 0
                    })
                } : void 0,
                toaster: r,
                usage: e
            });
            return
        }
        F({
            surface: A,
            source: j,
            usage: e,
            noticeType: C.CHATGPT_FILE_LIBRARY_STORAGE_NOTICE_TYPE_MODAL,
            entrypoint: `library_dropzone`
        }), ee(L, {
            usage: e
        })
    }, t[7] = n, t[8] = i, t[9] = a, t[10] = r, t[11] = l.data, t[12] = h) : h = t[12];
    let g = h,
        y;
    return t[13] !== d || t[14] !== m || t[15] !== g ? (y = {
        isLibraryStorageLimitFull: d,
        isLibraryStorageLimitUploadBlocked: m,
        showLibraryStorageLimitBlockedUploadNotice: g
    }, t[13] = d, t[14] = m, t[15] = g, t[16] = y) : y = t[16], y
}
var J, Y, X, Z, Q, $, le = e((() => {
    J = b(), p(), c(), D(), oe(), I(), x(), P(), d(), a(), o(), u(), re(), ne(), y(), m(), Y = h(), X = `library-storage-limit-dropzone`, Z = `!border-black !bg-black !text-white dark:!border-black dark:!bg-black dark:!text-white`, Q = i.LibraryStorageLimitToast, $ = g({
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
    H as a, ce as c, W as i, G as n, le as o, U as r, z as s, K as t
};
//# sourceMappingURL=f61cfa0c-jh34x957ob8ujk3u.js.map
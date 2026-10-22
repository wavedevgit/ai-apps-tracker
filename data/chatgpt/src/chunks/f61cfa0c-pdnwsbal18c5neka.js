import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    BU as t,
    F5 as n,
    Jnt as r,
    Knt as i,
    LU as a,
    Let as o,
    Wet as s,
    c2 as c,
    d2 as l,
    fB as u,
    k8 as d,
    pB as f,
    prt as p,
    qnt as m,
    srt as h
} from "./4813494d-itnrgnth03y1sm9d.js";
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
    FPn as S,
    IPn as re,
    MPn as C,
    PPn as ie,
    RPn as w,
    _Pn as ae,
    btn as oe,
    h0 as se,
    m0 as T,
    p0 as E,
    yPn as D,
    ytn as O
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    Jy as k,
    Uy as A,
    Wy as j,
    bb as M,
    lb as N,
    yb as P
} from "./8b34dbc2-m4883pai3e8fx8q6.js";
import {
    n as F,
    t as I
} from "./12a8bcb0-mci3h3jpf1jx9izh.js";

function L() {
    let e = i.getItem(m.LibraryStorageLimitModalDismissedAt);
    return typeof e == `number` && Number.isFinite(e) && e > 0 ? e : null
}

function R(e = Date.now()) {
    i.setItem(m.LibraryStorageLimitModalDismissedAt, e)
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
    return e instanceof t ? n(() => e.toasts$()) : []
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
            e != null && (M({
                surface: k,
                source: j,
                usage: r,
                cta: ae.CHATGPT_FILE_LIBRARY_STORAGE_CTA_UPGRADE,
                openModalLocation: Z
            }), i.current?.close(), e())
        };
    n.info(``, {
        ...O,
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
        icon: u,
        iconClassName: `icon`,
        iconWrapperClassName: `shrink-0 grow-0 self-center`,
        id: Y
    });
    let o = K(n).find(e => String(e.id).startsWith(Y) && e.isShown);
    return i.current = o, o != null && P({
        surface: k,
        source: j,
        usage: r,
        noticeType: D.CHATGPT_FILE_LIBRARY_STORAGE_NOTICE_TYPE_TOAST,
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
        a = ee(),
        o;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (o = h(`2767344663`) && h(`4231797315`), t[0] = o) : o = t[0];
    let s = o,
        c;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (c = {
        queryKey: C,
        queryFn: S,
        enabled: s,
        staleTime: 0,
        refetchOnMount: `always`
    }, t[1] = c) : c = t[1];
    let u = ne(c),
        d;
    t[2] === u.data ? d = t[3] : (d = s && u.data != null && w(u.data), t[2] = u.data, t[3] = d);
    let f = d,
        p;
    t[4] !== a || t[5] !== u.data ? (p = async () => {
        if (!s) return !1;
        let e = u.data;
        try {
            e = await a.fetchQuery({
                queryKey: C,
                queryFn: S,
                staleTime: 0
            })
        } catch {}
        return e != null && w(e)
    }, t[4] = a, t[5] = u.data, t[6] = p) : p = t[6];
    let m = p,
        g;
    t[7] !== n || t[8] !== i || t[9] !== a || t[10] !== r || t[11] !== u.data ? (g = () => {
        if (!s) return;
        let e = a.getQueryData(C) ?? u.data,
            t = ie(e) && se(Z);
        if (B()) {
            ce({
                intl: n,
                onUpgrade: t ? () => {
                    E({
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
        P({
            surface: k,
            source: A,
            usage: e,
            noticeType: D.CHATGPT_FILE_LIBRARY_STORAGE_NOTICE_TYPE_MODAL,
            entrypoint: `library_dropzone`
        }), l(I, {
            usage: e
        })
    }, t[7] = n, t[8] = i, t[9] = a, t[10] = r, t[11] = u.data, t[12] = g) : g = t[12];
    let _ = g,
        v;
    return t[13] !== f || t[14] !== m || t[15] !== _ ? (v = {
        isLibraryStorageLimitFull: f,
        isLibraryStorageLimitUploadBlocked: m,
        showLibraryStorageLimitBlockedUploadNotice: _
    }, t[13] = f, t[14] = m, t[15] = _, t[16] = v) : v = t[16], v
}
var q, J, Y, X, Z, Q, $ = e((() => {
    q = x(), f(), c(), oe(), T(), F(), re(), N(), d(), a(), r(), p(), b(), y(), v(), o(), J = g(), Y = `library-storage-limit-dropzone`, X = `!border-black !bg-black !text-white dark:!border-black dark:!bg-black dark:!text-white`, Z = s.LibraryStorageLimitToast, Q = _({
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
//# sourceMappingURL=f61cfa0c-pdnwsbal18c5neka.js.map
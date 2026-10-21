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
    d2 as ee,
    fB as l,
    k8 as u,
    pB as d,
    prt as f,
    qnt as p,
    srt as m
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    Bn as h,
    Ln as g,
    N as te,
    Nt as ne,
    O as re,
    Q as _,
    Rn as v,
    s as y,
    wn as b
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    APn as x,
    IPn as S,
    MPn as ie,
    NPn as C,
    PPn as ae,
    _Pn as w,
    btn as oe,
    h0 as se,
    hPn as T,
    m0 as E,
    p0 as D,
    ytn as O
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    Hy as k,
    Ky as A,
    Vy as j,
    _b as M,
    sb as N,
    vb as P
} from "./8b34dbc2-egl8cz04n8nmlktg.js";
import {
    n as F,
    t as I
} from "./12a8bcb0-hqtk16vpoht3gr6v.js";

function L() {
    let e = i.getItem(p.LibraryStorageLimitModalDismissedAt);
    return typeof e == `number` && Number.isFinite(e) && e > 0 ? e : null
}

function R(e = Date.now()) {
    i.setItem(p.LibraryStorageLimitModalDismissedAt, e)
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
            e != null && (P({
                surface: A,
                source: k,
                usage: r,
                cta: T.CHATGPT_FILE_LIBRARY_STORAGE_CTA_UPGRADE,
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
        icon: l,
        iconClassName: `icon`,
        iconWrapperClassName: `shrink-0 grow-0 self-center`,
        id: Y
    });
    let o = K(n).find(e => String(e.id).startsWith(Y) && e.isShown);
    return i.current = o, o != null && M({
        surface: A,
        source: k,
        usage: r,
        noticeType: w.CHATGPT_FILE_LIBRARY_STORAGE_NOTICE_TYPE_TOAST,
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
        i = ne(),
        a = te(),
        o;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (o = m(`2767344663`) && m(`4231797315`), t[0] = o) : o = t[0];
    let s = o,
        c;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (c = {
        queryKey: x,
        queryFn: C,
        enabled: s,
        staleTime: 0,
        refetchOnMount: `always`
    }, t[1] = c) : c = t[1];
    let l = re(c),
        u;
    t[2] === l.data ? u = t[3] : (u = s && l.data != null && S(l.data), t[2] = l.data, t[3] = u);
    let d = u,
        f;
    t[4] !== a || t[5] !== l.data ? (f = async () => {
        if (!s) return !1;
        let e = l.data;
        try {
            e = await a.fetchQuery({
                queryKey: x,
                queryFn: C,
                staleTime: 0
            })
        } catch {}
        return e != null && S(e)
    }, t[4] = a, t[5] = l.data, t[6] = f) : f = t[6];
    let p = f,
        h;
    t[7] !== n || t[8] !== i || t[9] !== a || t[10] !== r || t[11] !== l.data ? (h = () => {
        if (!s) return;
        let e = a.getQueryData(x) ?? l.data,
            t = ie(e) && se(Z);
        if (B()) {
            ce({
                intl: n,
                onUpgrade: t ? () => {
                    D({
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
            surface: A,
            source: j,
            usage: e,
            noticeType: w.CHATGPT_FILE_LIBRARY_STORAGE_NOTICE_TYPE_MODAL,
            entrypoint: `library_dropzone`
        }), ee(I, {
            usage: e
        })
    }, t[7] = n, t[8] = i, t[9] = a, t[10] = r, t[11] = l.data, t[12] = h) : h = t[12];
    let g = h,
        _;
    return t[13] !== d || t[14] !== p || t[15] !== g ? (_ = {
        isLibraryStorageLimitFull: d,
        isLibraryStorageLimitUploadBlocked: p,
        showLibraryStorageLimitBlockedUploadNotice: g
    }, t[13] = d, t[14] = p, t[15] = g, t[16] = _) : _ = t[16], _
}
var q, J, Y, X, Z, Q, $ = e((() => {
    q = b(), d(), c(), oe(), E(), F(), ae(), N(), u(), a(), r(), f(), y(), v(), _(), o(), J = h(), Y = `library-storage-limit-dropzone`, X = `!border-black !bg-black !text-white dark:!border-black dark:!bg-black dark:!text-white`, Z = s.LibraryStorageLimitToast, Q = g({
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
//# sourceMappingURL=f61cfa0c-kl158t8735y83fpo.js.map
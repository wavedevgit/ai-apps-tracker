import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bnt as t,
    Det as n,
    Dnt as r,
    Ent as i,
    HU as a,
    Knt as o,
    Tnt as s,
    Z0 as c,
    aB as l,
    bet as u,
    e2 as ee,
    f8 as d,
    iB as f,
    v5 as p,
    zU as m
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    $ as h,
    Bn as g,
    Ln as _,
    N as te,
    O as ne,
    Pt as v,
    Rn as y,
    s as b,
    wn as x
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    QNn as re,
    _Pn as ie,
    c0 as ae,
    ePn as S,
    gPn as C,
    hPn as oe,
    l0 as se,
    pPn as w,
    u0 as T,
    vtn as E,
    yPn as D,
    ytn as O
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    Hy as k,
    Ky as A,
    Vy as j,
    _b as M,
    sb as N,
    vb as P
} from "./8b34dbc2-j8rcexxiltkm8ucr.js";
import {
    n as F,
    t as I
} from "./12a8bcb0-ixxlu90rdre49oup.js";

function L() {
    let e = s.getItem(i.LibraryStorageLimitModalDismissedAt);
    return typeof e == `number` && Number.isFinite(e) && e > 0 ? e : null
}

function R(e = Date.now()) {
    s.setItem(i.LibraryStorageLimitModalDismissedAt, e)
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
    return e instanceof a ? p(() => e.toasts$()) : []
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
                cta: re.CHATGPT_FILE_LIBRARY_STORAGE_CTA_UPGRADE,
                openModalLocation: Z
            }), i.current?.close(), e())
        };
    n.info(``, {
        ...E,
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
        icon: f,
        iconClassName: `icon`,
        iconWrapperClassName: `shrink-0 grow-0 self-center`,
        id: Y
    });
    let o = K(n).find(e => String(e.id).startsWith(Y) && e.isShown);
    return i.current = o, o != null && M({
        surface: A,
        source: k,
        usage: r,
        noticeType: S.CHATGPT_FILE_LIBRARY_STORAGE_NOTICE_TYPE_TOAST,
        entrypoint: `library_dropzone`
    }), o
}

function le(e) {
    "use forget";
    let n = (0, q.c)(17),
        {
            intl: r,
            toaster: i
        } = e,
        a = v(),
        o = te(),
        s;
    n[0] === Symbol.for(`react.memo_cache_sentinel`) ? (s = t(`2767344663`) && t(`4231797315`), n[0] = s) : s = n[0];
    let c = s,
        l;
    n[1] === Symbol.for(`react.memo_cache_sentinel`) ? (l = {
        queryKey: w,
        queryFn: C,
        enabled: c,
        staleTime: 0,
        refetchOnMount: `always`
    }, n[1] = l) : l = n[1];
    let u = ne(l),
        d;
    n[2] === u.data ? d = n[3] : (d = c && u.data != null && D(u.data), n[2] = u.data, n[3] = d);
    let f = d,
        p;
    n[4] !== o || n[5] !== u.data ? (p = async () => {
        if (!c) return !1;
        let e = u.data;
        try {
            e = await o.fetchQuery({
                queryKey: w,
                queryFn: C,
                staleTime: 0
            })
        } catch {}
        return e != null && D(e)
    }, n[4] = o, n[5] = u.data, n[6] = p) : p = n[6];
    let m = p,
        h;
    n[7] !== r || n[8] !== a || n[9] !== o || n[10] !== i || n[11] !== u.data ? (h = () => {
        if (!c) return;
        let e = o.getQueryData(w) ?? u.data,
            t = oe(e) && T(Z);
        if (B()) {
            ce({
                intl: r,
                onUpgrade: t ? () => {
                    ae({
                        navigate: a,
                        openModalLocation: Z,
                        primaryAction: void 0
                    })
                } : void 0,
                toaster: i,
                usage: e
            });
            return
        }
        M({
            surface: A,
            source: j,
            usage: e,
            noticeType: S.CHATGPT_FILE_LIBRARY_STORAGE_NOTICE_TYPE_MODAL,
            entrypoint: `library_dropzone`
        }), ee(I, {
            usage: e
        })
    }, n[7] = r, n[8] = a, n[9] = o, n[10] = i, n[11] = u.data, n[12] = h) : h = n[12];
    let g = h,
        _;
    return n[13] !== f || n[14] !== m || n[15] !== g ? (_ = {
        isLibraryStorageLimitFull: f,
        isLibraryStorageLimitUploadBlocked: m,
        showLibraryStorageLimitBlockedUploadNotice: g
    }, n[13] = f, n[14] = m, n[15] = g, n[16] = _) : _ = n[16], _
}
var q, J, Y, X, Z, Q, $ = e((() => {
    q = x(), l(), c(), O(), se(), F(), ie(), N(), d(), m(), r(), o(), b(), y(), h(), u(), J = g(), Y = `library-storage-limit-dropzone`, X = `!border-black !bg-black !text-white dark:!border-black dark:!bg-black dark:!text-white`, Z = n.LibraryStorageLimitToast, Q = _({
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
//# sourceMappingURL=f61cfa0c-jnhef3370fzwkm7h.js.map
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $tt as t,
    B6 as n,
    Bz as r,
    K8 as i,
    O0 as a,
    Qtt as o,
    T0 as s,
    eet as c,
    ent as l,
    gU as u,
    pU as d,
    pnt as f,
    q9 as p,
    ynt as m,
    zz as h
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as g,
    Bn as _,
    Ln as v,
    N as ee,
    O as te,
    Pt as ne,
    Rn as re,
    s as y,
    wn as b
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $Nn as x,
    INn as ie,
    RNn as S,
    ZNn as C,
    c0 as ae,
    ePn as w,
    o0 as oe,
    otn as se,
    rPn as T,
    s0 as E,
    stn as D,
    tPn as O
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Hy as k,
    Ky as A,
    Vy as j,
    _b as M,
    sb as N,
    vb as P
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    n as F,
    t as I
} from "./12a8bcb0-lrrhi5jkefdc7hj9.js";

function L() {
    let e = o.getItem(t.LibraryStorageLimitModalDismissedAt);
    return typeof e == `number` && Number.isFinite(e) && e > 0 ? e : null
}

function R(e = Date.now()) {
    o.setItem(t.LibraryStorageLimitModalDismissedAt, e)
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
    return e instanceof u ? i(() => e.toasts$()) : []
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
                cta: ie.CHATGPT_FILE_LIBRARY_STORAGE_CTA_UPGRADE,
                openModalLocation: Z
            }), i.current?.close(), e())
        };
    n.info(``, {
        ...se,
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
        icon: h,
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
    let t = (0, q.c)(17),
        {
            intl: n,
            toaster: r
        } = e,
        i = ne(),
        o = ee(),
        s;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (s = f(`2767344663`) && f(`4231797315`), t[0] = s) : s = t[0];
    let c = s,
        l;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (l = {
        queryKey: C,
        queryFn: w,
        enabled: c,
        staleTime: 0,
        refetchOnMount: `always`
    }, t[1] = l) : l = t[1];
    let u = te(l),
        d;
    t[2] === u.data ? d = t[3] : (d = c && u.data != null && T(u.data), t[2] = u.data, t[3] = d);
    let p = d,
        m;
    t[4] !== o || t[5] !== u.data ? (m = async () => {
        if (!c) return !1;
        let e = u.data;
        try {
            e = await o.fetchQuery({
                queryKey: C,
                queryFn: w,
                staleTime: 0
            })
        } catch {}
        return e != null && T(e)
    }, t[4] = o, t[5] = u.data, t[6] = m) : m = t[6];
    let h = m,
        g;
    t[7] !== n || t[8] !== i || t[9] !== o || t[10] !== r || t[11] !== u.data ? (g = () => {
        if (!c) return;
        let e = o.getQueryData(C) ?? u.data,
            t = x(e) && ae(Z);
        if (B()) {
            ce({
                intl: n,
                onUpgrade: t ? () => {
                    oe({
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
            noticeType: S.CHATGPT_FILE_LIBRARY_STORAGE_NOTICE_TYPE_MODAL,
            entrypoint: `library_dropzone`
        }), a(I, {
            usage: e
        })
    }, t[7] = n, t[8] = i, t[9] = o, t[10] = r, t[11] = u.data, t[12] = g) : g = t[12];
    let _ = g,
        v;
    return t[13] !== p || t[14] !== h || t[15] !== _ ? (v = {
        isLibraryStorageLimitFull: p,
        isLibraryStorageLimitUploadBlocked: h,
        showLibraryStorageLimitBlockedUploadNotice: _
    }, t[13] = p, t[14] = h, t[15] = _, t[16] = v) : v = t[16], v
}
var q, J, Y, X, Z, Q, $ = e((() => {
    q = b(), r(), s(), D(), E(), F(), O(), N(), n(), d(), l(), m(), y(), re(), g(), p(), J = _(), Y = `library-storage-limit-dropzone`, X = `!border-black !bg-black !text-white dark:!border-black dark:!bg-black dark:!text-white`, Z = c.LibraryStorageLimitToast, Q = v({
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
//# sourceMappingURL=f61cfa0c-hsmc4jjgofm8s8qb.js.map
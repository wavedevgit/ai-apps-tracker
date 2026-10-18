import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AG as n,
    AT as r,
    B6 as i,
    C1 as a,
    Cp as o,
    D1 as s,
    DG as c,
    Ip as l,
    Jot as u,
    Mp as d,
    My as f,
    QL as p,
    Rb as m,
    S3 as h,
    Up as g,
    Xot as _,
    a7 as ee,
    ap as v,
    b5 as y,
    bst as b,
    dz as x,
    fU as S,
    fj as C,
    fz as w,
    gnt as T,
    hU as E,
    jy as D,
    kT as te,
    l7 as O,
    lw as ne,
    o1 as re,
    pU as k,
    pnt as ie,
    pp as ae,
    tR as A,
    u1 as j,
    uw as oe,
    wst as M,
    x1 as N,
    y3 as P,
    y5 as F,
    ynt as I,
    zb as se,
    zp as L
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as R,
    Bn as z,
    Ln as B,
    N as V,
    Nn as H,
    Rn as U,
    Ut as W,
    Vn as G,
    jt as ce,
    p as K,
    s as q,
    wn as J,
    zn as le
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Bst as Y,
    G1 as ue,
    Oxn as de,
    UUn as fe,
    W1 as pe,
    WUn as me,
    aCn as he,
    agn as ge,
    atn as _e,
    jxn as ve,
    ogn as ye,
    rCn as be,
    sCn as xe,
    stn as Se,
    zst as Ce
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Hm as we,
    Um as Te,
    bh as Ee,
    xh as De
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    Bo as Oe,
    Go as ke,
    Ho as Ae,
    Ko as je,
    Qo as Me,
    Tl as Ne,
    Uo as Pe,
    Vo as Fe,
    Wo as Ie,
    Yo as Le,
    Zo as Re,
    is as ze,
    qo as Be,
    ts as Ve,
    wl as He
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    S as Ue,
    x as We
} from "./82782bc9-h658ejxn3ufkvr7a.js";
import {
    $h as Ge,
    f_ as Ke,
    rg as qe,
    tg as Je,
    u_ as Ye
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    n as Xe,
    t as Ze
} from "./9f2e6d33-favh86igrrldl3up.js";
import {
    n as Qe,
    t as $e
} from "./2e14c65d-cyu9xm7hpu855tdb.js";
import {
    n as et,
    t as tt
} from "./8c6976e5-ibz7fcap50r267b6.js";
import {
    o as nt,
    s as rt
} from "./b90db9d2-nqn5x1xpx8jm45ix.js";
import {
    a as it,
    t as at
} from "./191ef300-omyhxkslvlmq58bo.js";
import {
    n as ot,
    t as st
} from "./6fd89734-ukvy961mk0pbfe49.js";
import {
    a as ct,
    d as lt,
    i as ut,
    l as dt,
    m as ft,
    n as pt,
    o as mt,
    p as ht,
    r as gt,
    s as _t,
    t as vt
} from "./e0031da9-jrutx15n1x34w6rg.js";
import {
    a as yt,
    i as bt,
    n as xt,
    o as St,
    r as Ct,
    s as wt,
    t as Tt
} from "./c3ec7e19-19bae9g8eptohu9s.js";

function Et(e) {
    "use forget";
    let t = (0, Dt.c)(13),
        {
            workspaceId: n,
            workspaceSettings: r,
            isLoadingWorkspace: i
        } = e,
        a = le(),
        o;
    t[0] === n ? o = t[1] : (o = {
        workspaceId: n
    }, t[0] = n, t[1] = o);
    let {
        mutate: s,
        isPending: c
    } = it(o), l = r.beta_settings[b.ENABLE_MESSAGE_FEEDBACK] ?? !0, u;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, Ot.jsx)(`div`, {
        className: `text-md`,
        children: (0, Ot.jsx)(H, {
            ...kt.messageFeedbackLabel
        })
    }), t[2] = u) : u = t[2];
    let d;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, Ot.jsxs)(`div`, {
        children: [u, (0, Ot.jsx)(`div`, {
            className: `text-token-text-tertiary text-xs`,
            children: (0, Ot.jsx)(H, {
                ...kt.messageFeedbackDescription
            })
        })]
    }), t[3] = d) : d = t[3];
    let f;
    t[4] === a ? f = t[5] : (f = a.formatMessage(kt.messageFeedbackLabel), t[4] = a, t[5] = f);
    let p = i || c,
        h;
    t[6] === s ? h = t[7] : (h = e => s({
        feature: b.ENABLE_MESSAGE_FEEDBACK,
        enabled: e
    }), t[6] = s, t[7] = h);
    let g;
    return t[8] !== l || t[9] !== f || t[10] !== p || t[11] !== h ? (g = (0, Ot.jsxs)(Be, {
        children: [d, (0, Ot.jsx)(m, {
            size: `normal`,
            "aria-label": f,
            checked: l,
            disabled: p,
            onCheckedChange: h
        })]
    }), t[8] = l, t[9] = f, t[10] = p, t[11] = h, t[12] = g) : g = t[12], g
}
var Dt, Ot, kt, At = e((() => {
    Dt = J(), M(), at(), Re(), se(), U(), Ot = z(), kt = B({
        messageFeedbackLabel: {
            id: `workspaceSettings.general.messageFeedback.label`,
            defaultMessage: `Allow response feedback`
        },
        messageFeedbackDescription: {
            id: `workspaceSettings.general.messageFeedback.description`,
            defaultMessage: `Allow workspace members to give thumbs-up or thumbs-down feedback on responses.`
        }
    })
}));

function jt(e) {
    return It.some(t => t === e)
}

function Mt(e) {
    "use forget";
    let t = (0, Nt.c)(48),
        {
            workspaceId: n,
            workspaceSettings: r
        } = e,
        i = le(),
        a = V(),
        o = (0, Pt.useId)(),
        s = r.desktop_app_beta_policy ?? `blocked`,
        c;
    t[0] === n ? c = t[1] : (c = e => ee.safePost(`/accounts/{account_id}/beta_features`, {
        parameters: {
            path: {
                account_id: n
            }
        },
        requestBody: {
            feature: `desktop_app_beta_policy`,
            value: e
        }
    }), t[0] = n, t[1] = c);
    let l;
    t[2] !== i || t[3] !== a || t[4] !== n ? (l = async () => {
        await a.invalidateQueries({
            queryKey: [`workspace-settings`, n]
        }), S().success(i.formatMessage(X.saved))
    }, t[2] = i, t[3] = a, t[4] = n, t[5] = l) : l = t[5];
    let u;
    t[6] === i ? u = t[7] : (u = () => {
        S().danger(i.formatMessage(X.saveFailed))
    }, t[6] = i, t[7] = u);
    let d;
    t[8] !== c || t[9] !== l || t[10] !== u ? (d = {
        mutationFn: c,
        onSuccess: l,
        onError: u
    }, t[8] = c, t[9] = l, t[10] = u, t[11] = d) : d = t[11];
    let f = K(d),
        p;
    t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (p = (0, Ft.jsx)(H, {
        ...X.policyLabel
    }), t[12] = p) : p = t[12];
    let m;
    t[13] === o ? m = t[14] : (m = (0, Ft.jsx)(`h3`, {
        id: o,
        className: `text-sm font-medium`,
        children: p
    }), t[13] = o, t[14] = m);
    let h = f.isPending,
        g;
    t[15] === i ? g = t[16] : (g = i.formatMessage(X.blocked), t[15] = i, t[16] = g);
    let _;
    t[17] === g ? _ = t[18] : (_ = {
        value: `blocked`,
        label: g
    }, t[17] = g, t[18] = _);
    let v;
    t[19] === i ? v = t[20] : (v = i.formatMessage(X.optionalDefaultOff), t[19] = i, t[20] = v);
    let y;
    t[21] === v ? y = t[22] : (y = {
        value: `optional_default_off`,
        label: v
    }, t[21] = v, t[22] = y);
    let b;
    t[23] === i ? b = t[24] : (b = i.formatMessage(X.optionalDefaultOn), t[23] = i, t[24] = b);
    let x;
    t[25] === b ? x = t[26] : (x = {
        value: `optional_default_on`,
        label: b
    }, t[25] = b, t[26] = x);
    let C;
    t[27] === i ? C = t[28] : (C = i.formatMessage(X.required), t[27] = i, t[28] = C);
    let w;
    t[29] === C ? w = t[30] : (w = {
        value: `required`,
        label: C
    }, t[29] = C, t[30] = w);
    let T;
    t[31] !== y || t[32] !== x || t[33] !== w || t[34] !== _ ? (T = [_, y, x, w], t[31] = y, t[32] = x, t[33] = w, t[34] = _, t[35] = T) : T = t[35];
    let E;
    t[36] === f ? E = t[37] : (E = e => {
        jt(e) && f.mutate(e)
    }, t[36] = f, t[37] = E);
    let D;
    t[38] !== o || t[39] !== f.isPending || t[40] !== s || t[41] !== T || t[42] !== E ? (D = (0, Ft.jsx)(Ye, {
        ariaLabelledBy: o,
        disabled: h,
        options: T,
        value: s,
        onValueChange: E
    }), t[38] = o, t[39] = f.isPending, t[40] = s, t[41] = T, t[42] = E, t[43] = D) : D = t[43];
    let te;
    return t[44] !== o || t[45] !== D || t[46] !== m ? (te = (0, Ft.jsx)(Oe, {
        title: X.sectionTitle,
        description: X.sectionDescription,
        children: (0, Ft.jsx)(je, {
            children: (0, Ft.jsx)(Be, {
                className: `items-center`,
                children: (0, Ft.jsxs)(`section`, {
                    "aria-labelledby": o,
                    className: `flex w-full items-center justify-between`,
                    children: [m, D]
                })
            })
        })
    }), t[44] = o, t[45] = D, t[46] = m, t[47] = te) : te = t[47], te
}
var Nt, Pt, Ft, It, X, Lt = e((() => {
        Nt = J(), Re(), Ae(), Ke(), k(), O(), q(), Pt = t(G()), U(), Ft = z(), It = [`blocked`, `optional_default_off`, `optional_default_on`, `required`], X = B({
            sectionTitle: {
                id: `workspaceSettings.desktopAppBeta.section.title`,
                defaultMessage: `Desktop app beta features`
            },
            sectionDescription: {
                id: `workspaceSettings.desktopAppBeta.section.description`,
                defaultMessage: `Control whether eligible workspace members can use beta desktop features and receive prerelease app updates.`
            },
            policyLabel: {
                id: `workspaceSettings.desktopAppBeta.policy.label`,
                defaultMessage: `Beta participation`
            },
            blocked: {
                id: `workspaceSettings.desktopAppBeta.policy.blocked`,
                defaultMessage: `Blocked`
            },
            optionalDefaultOff: {
                id: `workspaceSettings.desktopAppBeta.policy.optionalDefaultOff`,
                defaultMessage: `Optional, off by default`
            },
            optionalDefaultOn: {
                id: `workspaceSettings.desktopAppBeta.policy.optionalDefaultOn`,
                defaultMessage: `Optional, on by default`
            },
            required: {
                id: `workspaceSettings.desktopAppBeta.policy.required`,
                defaultMessage: `Required`
            },
            saved: {
                id: `workspaceSettings.desktopAppBeta.policy.saved`,
                defaultMessage: `Desktop app beta policy updated`
            },
            saveFailed: {
                id: `workspaceSettings.desktopAppBeta.policy.saveFailed`,
                defaultMessage: `Could not update desktop app beta policy`
            }
        })
    })),
    Rt, zt, Bt, Vt, Ht = e((() => {
        Rt = J(), M(), rt(), st(), Ae(), ut(), j(), ve(), zt = z(), Bt = {
            title: nt,
            gaOptOut: {
                feature: b.M3M_GA_OPT_OUT,
                featureName: nt
            },
            entries: []
        }, Vt = e => {
            "use forget";
            let t = (0, Rt.c)(4),
                {
                    workspaceId: n,
                    workspaceSettings: r
                } = e,
                i = N(n),
                a = i ?? re(),
                o = s(),
                c = ot(n);
            if (!ct({
                    isM3mEnabled: de(),
                    isEnterprisey: a?.isEnterprisey() === !0,
                    isHipaaCompliantWorkspace: o || i?.isHipaaCompliantWorkspace === !0,
                    isFedrampCompliantWorkspace: a?.isFedrampCompliantWorkspace === !0
                })) return null;
            let l;
            return t[0] !== c.isRbacEnabled || t[1] !== n || t[2] !== r ? (l = (0, zt.jsx)(Oe, {
                title: nt,
                children: (0, zt.jsx)(gt, {
                    workspaceId: n,
                    section: Bt,
                    workspaceSettings: r,
                    showControl: !0,
                    isRbacEnabled: c.isRbacEnabled,
                    disabled: !1
                })
            }), t[0] = c.isRbacEnabled, t[1] = n, t[2] = r, t[3] = l) : l = t[3], l
        }
    }));

function Ut({
    onFileChange: e,
    className: t,
    message: n,
    mimeTypes: r
}) {
    let i = le(),
        a = n ?? i.formatMessage(Gt.helpText),
        {
            open: o,
            getRootProps: s,
            getInputProps: c,
            isDragActive: u
        } = Ue({
            disabled: !1,
            noClick: !0,
            onDropAccepted: (t, n) => {
                if (t.length > 0) {
                    let i = t[0];
                    r && r.includes(i.type) && e(i, ue(n))
                }
            },
            onDropRejected: () => null,
            multiple: !1,
            maxSize: _e,
            ...l(r)
        });
    return (0, Wt.jsxs)(`div`, {
        className: F(`flex flex-col content-center justify-center gap-3 rounded-xl border border-dashed px-6 py-16 text-center`, u ? `border-green-600 bg-green-600/10` : `border-token-border-medium`, t),
        ...s(),
        children: [(0, Wt.jsx)(`input`, {
            ...c()
        }), (0, Wt.jsx)(`div`, {
            className: `text-center dark:text-white`,
            children: (0, Wt.jsx)(`div`, {
                className: `inline-block`,
                children: (0, Wt.jsx)(Te, {})
            })
        }), (0, Wt.jsx)(`div`, {
            className: `text-center text-sm`,
            children: a
        }), (0, Wt.jsx)(`div`, {
            className: `cursor-pointer text-center text-sm font-bold text-green-600`,
            onClick: () => {
                o()
            },
            children: i.formatMessage(Gt.openFilePicker)
        })]
    })
}
var Wt, Gt, Kt = e((() => {
    we(), Se(), pe(), o(), y(), G(), We(), U(), Wt = z(), Gt = B({
        helpText: {
            id: `FileUploadBox.helpText`,
            defaultMessage: `Drop file here to upload`
        },
        openFilePicker: {
            id: `FileUploadBox.openFilePicker`,
            defaultMessage: `Browse files`
        }
    })
}));

function qt(e, t) {
    "use forget";
    let n = (0, Xt.c)(5),
        [r, i] = (0, Zt.useState)(e),
        a;
    n[0] === t ? a = n[1] : (a = e => {
        t(!0), i(e)
    }, n[0] = t, n[1] = a);
    let o = a,
        s;
    return n[2] !== o || n[3] !== r ? (s = [r, o], n[2] = o, n[3] = r, n[4] = s) : s = n[4], s
}

function Jt(e) {
    "use forget";
    let t = (0, Xt.c)(66),
        {
            workspaceId: n,
            defaultName: r,
            defaultAvatarId: i,
            defaultAvatarUrl: a,
            title: o,
            workspaceContrastSettingRow: s
        } = e,
        c = r === void 0 ? `` : r,
        l = le(),
        f = E(),
        [p, m] = (0, Zt.useState)(!1),
        [h, g] = qt(c, m),
        [ee, y] = qt(i, m),
        [b, x] = qt(a, m),
        [S, C] = qt(void 0, m),
        [w, T] = qt(null, m),
        O, ne;
    t[0] !== S || t[1] !== T || t[2] !== w ? (O = () => {
        if (S !== `initial` && S !== void 0 && w == null) {
            let e = new FileReader;
            e.addEventListener(`load`, () => {
                let t = e.result;
                typeof t == `string` && T(t)
            }), e.readAsDataURL(S.file)
        }
    }, ne = [S, T, w], t[0] = S, t[1] = T, t[2] = w, t[3] = O, t[4] = ne) : (O = t[3], ne = t[4]), (0, Zt.useEffect)(O, ne);
    let re = async (e, t) => {
        if (A.isPending) return;
        let n = await d(e, Qt),
            r = Ge(n);
        C({
            tempId: r,
            file: n,
            status: L.Uploading,
            progress: 1,
            fileId: null,
            cdnUrl: null
        }), qe(r, n, l, f, _.ProfilePicture, {
            onFileCreated(e, t, n) {
                C(r => r !== `initial` && r?.tempId === e && r.status === L.Uploading ? {
                    ...r,
                    progress: 10,
                    fileId: t,
                    cdnUrl: n
                } : r)
            },
            onFileUploadProgress(e, t) {
                C(n => n !== `initial` && n?.tempId === e && n.status === L.Uploading ? {
                    ...n,
                    progress: t
                } : n)
            },
            onFileUploaded(e, t, n) {
                C(t => t !== `initial` && t && t.cdnUrl && t.tempId === e && t.fileId ? (ae(t.fileId, {
                    downloadIntent: !1
                }).then(e => {
                    e.status === u.Success && (y(t.fileId), x(e.download_url))
                }), {
                    ...t,
                    status: L.Ready,
                    progress: 100,
                    fileSpec: {
                        name: t.file.name,
                        id: t.fileId ?? ``,
                        size: t.file.size,
                        mimeType: t.file.type,
                        ...n ?? {
                            width: 0,
                            height: 0
                        }
                    }
                }) : t)
            },
            onError(e) {
                C(t => {
                    if (t !== `initial` && t?.tempId === e) {
                        y(void 0), x(void 0), T(null);
                        return
                    }
                    return t
                })
            }
        }, {
            selectionMethod: t
        })
    }, k;
    t[5] !== y || t[6] !== x || t[7] !== C || t[8] !== T ? (k = () => {
        y(null), x(null), C(void 0), T(null)
    }, t[5] = y, t[6] = x, t[7] = C, t[8] = T, t[9] = k) : k = t[9];
    let ie = k,
        A = Qe(n),
        j;
    t[10] === h ? j = t[11] : (j = h.trim(), t[10] = h, t[11] = j);
    let oe = j,
        M = S !== `initial` && S !== void 0 && (S.status !== L.Ready || !b) || A.isPending || oe.length === 0 || !p,
        N;
    t[12] !== M || t[13] !== l || t[14] !== oe || t[15] !== ee || t[16] !== b || t[17] !== A || t[18] !== f ? (N = () => {
        M || A.mutate({
            name: oe,
            profilePictureId: ee,
            profilePictureUrl: b
        }, {
            onSuccess: () => {
                f.success(l.formatMessage($t.saveSuccessToast)), m(!1)
            }
        })
    }, t[12] = M, t[13] = l, t[14] = oe, t[15] = ee, t[16] = b, t[17] = A, t[18] = f, t[19] = N) : N = t[19];
    let P = N,
        F = A.isPending,
        I = F ? `pointer-events-none opacity-50` : void 0,
        se = o ?? $t.modalTitle,
        R;
    t[20] === Symbol.for(`react.memo_cache_sentinel`) ? (R = (0, Z.jsx)(`div`, {
        className: `flex flex-col justify-center gap-1`,
        children: (0, Z.jsx)(`p`, {
            className: `text-token-text-primary`,
            children: (0, Z.jsx)(H, {
                ...$t.workspaceName
            })
        })
    }), t[20] = R) : R = t[20];
    let z;
    t[21] === g ? z = t[22] : (z = e => g(e.target.value), t[21] = g, t[22] = z);
    let B;
    t[23] !== F || t[24] !== h || t[25] !== z ? (B = (0, Z.jsxs)(Be, {
        className: `gap-2`,
        children: [R, (0, Z.jsx)(Ce, {
            ariaLabel: !1,
            type: `text`,
            name: `workspace-name`,
            value: h,
            onChange: z,
            maxLength: 64,
            disabled: F,
            className: `min-w-80`
        })]
    }), t[23] = F, t[24] = h, t[25] = z, t[26] = B) : B = t[26];
    let V;
    t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (V = (0, Z.jsx)(`p`, {
        className: `text-token-text-primary`,
        children: (0, Z.jsx)(H, {
            ...$t.workspaceAvatar
        })
    }), t[27] = V) : V = t[27];
    let U;
    t[28] === l ? U = t[29] : (U = l.formatMessage($t.workspaceAvatarDescription, {
        size: Qt
    }), t[28] = l, t[29] = U);
    let W;
    t[30] === Symbol.for(`react.memo_cache_sentinel`) ? (W = (0, Z.jsx)(Ee, {
        className: `text-sm`
    }), t[30] = W) : W = t[30];
    let G;
    t[31] === U ? G = t[32] : (G = (0, Z.jsxs)(`div`, {
        className: `flex gap-1`,
        children: [V, (0, Z.jsx)(D, {
            side: `top`,
            label: U,
            children: W
        })]
    }), t[31] = U, t[32] = G);
    let ce;
    t[33] !== ie || t[34] !== F || t[35] !== re || t[36] !== b || t[37] !== S || t[38] !== w || t[39] !== I ? (ce = (0, Z.jsx)(`div`, {
        className: `flex min-w-80 flex-col items-start gap-3`,
        children: b ? (0, Z.jsxs)(`div`, {
            className: `relative inline-flex`,
            children: [(0, Z.jsx)(`img`, {
                src: b,
                alt: ``,
                referrerPolicy: `no-referrer`,
                className: `block h-24 w-24 rounded-full object-cover object-center`
            }), (0, Z.jsx)(`div`, {
                className: `absolute -end-1 -top-1`,
                children: (0, Z.jsx)(Yt, {
                    onClick: F ? void 0 : ie
                })
            })]
        }) : S != null && S !== `initial` && w ? (0, Z.jsx)(`div`, {
            className: `flex flex-col items-center text-center`,
            children: (0, Z.jsxs)(`div`, {
                className: `relative mb-3`,
                children: [(0, Z.jsx)(`img`, {
                    src: URL.createObjectURL(S.file),
                    alt: ``,
                    referrerPolicy: `no-referrer`,
                    className: `block h-24 w-24 rounded-full object-cover object-center`
                }), (0, Z.jsx)(`div`, {
                    className: `absolute inset-0 flex items-center justify-center text-white`,
                    children: (0, Z.jsx)(ge, {
                        percentage: S.progress,
                        className: `h-6 w-6`
                    })
                })]
            })
        }) : (0, Z.jsx)(`div`, {
            className: I,
            children: (0, Z.jsx)(Ut, {
                onFileChange: re,
                mimeTypes: v
            })
        })
    }), t[33] = ie, t[34] = F, t[35] = re, t[36] = b, t[37] = S, t[38] = w, t[39] = I, t[40] = ce) : ce = t[40];
    let K;
    t[41] !== G || t[42] !== ce ? (K = (0, Z.jsxs)(Be, {
        className: `gap-3`,
        children: [G, ce]
    }), t[41] = G, t[42] = ce, t[43] = K) : K = t[43];
    let q;
    t[44] !== i || t[45] !== a || t[46] !== c || t[47] !== M || t[48] !== F || t[49] !== P || t[50] !== p || t[51] !== A.isPending || t[52] !== y || t[53] !== x || t[54] !== g || t[55] !== C || t[56] !== T ? (q = p && (0, Z.jsxs)(Be, {
        className: `justify-end gap-2`,
        children: [(0, Z.jsx)(te, {
            size: `small`,
            color: `secondary`,
            onClick: () => {
                F || (g(c), y(i), x(a), C(void 0), T(null), m(!1))
            },
            disabled: F || !p,
            children: (0, Z.jsx)(H, {
                ...$t.modalReset
            })
        }), (0, Z.jsx)(te, {
            size: `small`,
            color: `primary`,
            onClick: P,
            disabled: M,
            loading: A.isPending,
            children: (0, Z.jsx)(H, {
                ...$t.modalSubmit
            })
        })]
    }), t[44] = i, t[45] = a, t[46] = c, t[47] = M, t[48] = F, t[49] = P, t[50] = p, t[51] = A.isPending, t[52] = y, t[53] = x, t[54] = g, t[55] = C, t[56] = T, t[57] = q) : q = t[57];
    let J;
    t[58] !== B || t[59] !== K || t[60] !== q || t[61] !== s ? (J = (0, Z.jsxs)(je, {
        children: [B, K, s, q]
    }), t[58] = B, t[59] = K, t[60] = q, t[61] = s, t[62] = J) : J = t[62];
    let Y;
    return t[63] !== J || t[64] !== se ? (Y = (0, Z.jsx)(Oe, {
        title: se,
        children: J
    }), t[63] = J, t[64] = se, t[65] = Y) : Y = t[65], Y
}

function Yt(e) {
    "use forget";
    let t = (0, Xt.c)(3),
        {
            onClick: n
        } = e,
        r;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, Z.jsx)(ne, {
        className: `h-3 w-3`
    }), t[0] = r) : r = t[0];
    let i;
    return t[1] === n ? i = t[2] : (i = (0, Z.jsx)(`div`, {
        className: `flex h-6 w-6 cursor-pointer flex-row flex-wrap content-center justify-center rounded-full border-2 border-white bg-black text-white`,
        onClick: n,
        children: r
    }), t[1] = n, t[2] = i), i
}
var Xt, Zt, Z, Qt, $t, en = e((() => {
        Xt = J(), M(), r(), Y(), Kt(), Ae(), Re(), ye(), oe(), De(), g(), Je(), o(), k(), Zt = t(G()), U(), $e(), f(), Z = z(), Qt = 192, $t = B({
            modalTitle: {
                id: `5YXskQ`,
                defaultMessage: `Appearance`
            },
            workspaceName: {
                id: `GqMYq4`,
                defaultMessage: `Workspace name`
            },
            workspaceAvatar: {
                id: `out1Ek`,
                defaultMessage: `Logo`
            },
            workspaceAvatarDescription: {
                id: `OY7Lnp`,
                defaultMessage: `Upload a JPEG or PNG workspace logo for your team. (Minimum {size}×{size}px recommended.)`
            },
            saveSuccessToast: {
                id: `crqLbt`,
                defaultMessage: `Workspace appearance updated`
            },
            modalSubmit: {
                id: `G0MNSo`,
                defaultMessage: `Save`
            },
            modalReset: {
                id: `rxaWUV`,
                defaultMessage: `Reset`
            }
        })
    })),
    tn = e((() => {
        J(), Re(), C(), Ke(), i(), k(), G(), U(), z(), B({
            contrastMode: {
                id: `workspaceSettings.contrastMode`,
                defaultMessage: `Contrast`
            },
            medium: {
                id: `workspaceSettings.contrastMode.medium`,
                defaultMessage: `Medium`
            },
            high: {
                id: `workspaceSettings.contrastMode.high`,
                defaultMessage: `Increased`
            }
        })
    }));

function nn() {
    return ie(rn)
}
var rn, an = e((() => {
    I(), rn = `2121254253`
}));

function on() {
    "use forget";
    let e = (0, un.c)(12),
        t = le(),
        n;
    e[0] === t ? n = e[1] : (n = t.formatMessage($.businessPilotProgramTitle, {
        programName: pn
    }), e[0] = t, e[1] = n);
    let r = n,
        i;
    e[2] === r ? i = e[3] : (i = (0, Q.jsx)(ke, {
        children: r
    }), e[2] = r, e[3] = i);
    let a;
    e[4] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, Q.jsx)(Le, {
        className: `text-token-text-secondary`,
        children: (0, Q.jsx)(H, {
            ...$.businessPilotProgramDescription,
            values: {
                programName: pn,
                link: sn
            }
        })
    }), e[4] = a) : a = e[4];
    let o;
    e[5] === i ? o = e[6] : (o = (0, Q.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        "data-testid": `business-pilot-program-copy`,
        children: [i, a]
    }), e[5] = i, e[6] = o);
    let s;
    e[7] === r ? s = e[8] : (s = (0, Q.jsx)(m, {
        size: `normal`,
        "aria-label": r,
        checked: !0,
        disabled: !0
    }), e[7] = r, e[8] = s);
    let c;
    return e[9] !== o || e[10] !== s ? (c = (0, Q.jsx)(Ie, {
        children: (0, Q.jsxs)(`div`, {
            className: `flex items-start justify-between gap-4 py-2`,
            "data-testid": `business-pilot-program-section-row`,
            children: [o, s]
        })
    }), e[9] = o, e[10] = s, e[11] = c) : c = e[11], c
}

function sn(e) {
    return (0, Q.jsx)(fe, {
        href: fn,
        openNewTab: !0,
        className: `hover:text-token-text-primary/80 text-token-text-primary underline-offset-2`,
        children: e
    })
}

function cn(e) {
    "use forget";
    let t = (0, un.c)(64),
        {
            currentWorkspaceId: r
        } = e,
        i = r,
        o = le(),
        s = a(),
        c = re(),
        l = c?.isEnterprisey(),
        u = !l,
        {
            data: d,
            isLoading: f,
            refetch: p
        } = n(i),
        m = A(ln),
        {
            role: g,
            profilePicUrl: _,
            workspaceName: ee,
            profilePicId: v
        } = Ne(),
        y;
    t[0] !== g || t[1] !== m ? (y = g == null ? m == null ? void 0 : he(m.role) : he(g), t[0] = g, t[1] = m, t[2] = y) : y = t[2];
    let S = y,
        C;
    t[3] !== g || t[4] !== m ? (C = g == null ? m == null ? void 0 : be(m.role) : be(g), t[3] = g, t[4] = m, t[5] = C) : C = t[5];
    let w = C,
        E, D;
    if (t[6] === Symbol.for(`react.memo_cache_sentinel`)) {
        let e = T(`3528236309`);
        E = e.get(`show_classification_tab`, !1), D = e.get(`show_impact_tab`, !1), t[6] = E, t[7] = D
    } else E = t[6], D = t[7];
    let te = D,
        O;
    t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (O = wt(), t[8] = O) : O = t[8];
    let ne = O,
        k;
    t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (k = St(), t[9] = k) : k = t[9];
    let ae = k,
        j = nn() && h(c?.planType),
        oe = E || te || ne,
        M = ce().hash === `#workspace-usage-analytics` && d != null && S === !0 && oe,
        N, P;
    t[10] === M ? (N = t[11], P = t[12]) : (N = () => {
        M && document.getElementById(Tt)?.scrollIntoView({
            behavior: `smooth`,
            block: `start`
        })
    }, P = [M], t[10] = M, t[11] = N, t[12] = P), (0, dn.useEffect)(N, P);
    let I;
    t[13] !== S || t[14] !== f || t[15] !== i || t[16] !== d ? (I = void 0, t[13] = S, t[14] = f, t[15] = i, t[16] = d, t[17] = I) : I = t[17];
    let se = I,
        L;
    t[18] !== S || t[19] !== f || t[20] !== ae || t[21] !== j || t[22] !== i || t[23] !== d ? (L = S && d ? {
        memory_access: (0, Q.jsx)(Be, {
            children: (0, Q.jsxs)(`div`, {
                className: `flex w-full items-center justify-between gap-4`,
                children: [(0, Q.jsxs)(`div`, {
                    children: [(0, Q.jsx)(`div`, {
                        className: `text-md flex gap-2`,
                        children: (0, Q.jsx)(H, {
                            ...$.chatRetentionPolicyTitle
                        })
                    }), (0, Q.jsx)(`span`, {
                        className: `text-token-text-tertiary text-xs`,
                        children: (0, Q.jsx)(H, {
                            ...$.chatRetentionPolicyDescription
                        })
                    })]
                }), (0, Q.jsx)(ht, {
                    data: d
                })]
            })
        }),
        plugins: (0, Q.jsxs)(Q.Fragment, {
            children: [ae && (0, Q.jsx)(Ct, {
                workspaceId: i,
                workspaceSettings: d,
                isLoadingWorkspace: f
            }), j && (0, Q.jsx)(xt, {
                workspaceId: i,
                workspaceSettings: d,
                isLoadingWorkspace: f
            }), (0, Q.jsx)(Et, {
                workspaceId: i,
                workspaceSettings: d,
                isLoadingWorkspace: f
            })]
        })
    } : void 0, t[18] = S, t[19] = f, t[20] = ae, t[21] = j, t[22] = i, t[23] = d, t[24] = L) : L = t[24];
    let R = L,
        z;
    t[25] !== s?.data || t[26] !== s?.name || t[27] !== v || t[28] !== _ || t[29] !== ee || t[30] !== w || t[31] !== S || t[32] !== l || t[33] !== f || t[34] !== c?.isFedrampCompliantWorkspace || t[35] !== p || t[36] !== se || t[37] !== i || t[38] !== R || t[39] !== d ? (z = d && (0, Q.jsxs)(Q.Fragment, {
        children: [S && (0, Q.jsx)(Jt, {
            workspaceId: i,
            defaultName: ee ?? s?.name ?? ``,
            defaultAvatarId: v ?? s?.data.profilePictureId ?? void 0,
            defaultAvatarUrl: _ ?? s?.data.profilePictureUrl ?? void 0,
            title: $.brandingTitle,
            workspaceContrastSettingRow: se
        }), w && (0, Q.jsx)(dt, {
            workspaceId: i,
            title: $.detailsTitle
        }), w && (0, Q.jsx)(_t, {
            workspaceId: i,
            upsellEnterprise: u,
            data: d,
            title: $.policyTitle
        }, i), w && l && ie(`3957595485`) && !c?.isFedrampCompliantWorkspace && (0, Q.jsx)(Mt, {
            workspaceId: i,
            workspaceSettings: d
        }), w && (0, Q.jsx)(lt, {
            workspaceId: i,
            upsellEnterprise: u,
            data: d,
            refetch: p
        }), S && oe && (0, Q.jsx)(bt, {
            workspaceId: i,
            workspaceSettings: d,
            isLoadingWorkspace: f,
            title: $.analyticsTitle
        }), S && (0, Q.jsx)(vt, {
            workspaceId: i,
            mode: `workspace-only`,
            workspaceOnlyRowsBeforeSettingName: R,
            workspaceOnlySectionTitle: $.workspacePoliciesTitle
        }), w && !S && (0, Q.jsx)(Vt, {
            workspaceId: i,
            workspaceSettings: d
        }), d.beta_settings[b.TRAINING_ALLOWED] && (0, Q.jsx)(on, {})]
    }), t[25] = s?.data, t[26] = s?.name, t[27] = v, t[28] = _, t[29] = ee, t[30] = w, t[31] = S, t[32] = l, t[33] = f, t[34] = c?.isFedrampCompliantWorkspace, t[35] = p, t[36] = se, t[37] = i, t[38] = R, t[39] = d, t[40] = z) : z = t[40];
    let B = z,
        V;
    t[41] === o ? V = t[42] : (V = o.formatMessage($.title), t[41] = o, t[42] = V);
    let U;
    t[43] === V ? U = t[44] : (U = (0, Q.jsx)(Ze, {
        children: (0, Q.jsx)(`title`, {
            children: V
        })
    }), t[43] = V, t[44] = U);
    let W;
    t[45] === o ? W = t[46] : (W = o.formatMessage($.title), t[45] = o, t[46] = W);
    let G;
    t[47] === o ? G = t[48] : (G = o.formatMessage($.subtitle), t[47] = o, t[48] = G);
    let K;
    t[49] !== W || t[50] !== G ? (K = (0, Q.jsx)(Ve, {
        title: W,
        subtitle: G,
        showBottomBorder: !1
    }), t[49] = W, t[50] = G, t[51] = K) : K = t[51];
    let q;
    t[52] === Symbol.for(`react.memo_cache_sentinel`) ? (q = F(`mt-4 flex flex-col gap-7 pb-[60px]`, Pe), t[52] = q) : q = t[52];
    let J;
    t[53] === f ? J = t[54] : (J = f && (0, Q.jsx)(x, {}), t[53] = f, t[54] = J);
    let Y;
    t[55] === B ? Y = t[56] : (Y = (0, Q.jsx)(Fe, {
        variant: `card`,
        children: B
    }), t[55] = B, t[56] = Y);
    let ue;
    t[57] !== J || t[58] !== Y ? (ue = (0, Q.jsx)(Me, {
        children: (0, Q.jsxs)(`div`, {
            "data-testid": `workspace-general-redesign-sections`,
            className: q,
            children: [J, Y]
        })
    }), t[57] = J, t[58] = Y, t[59] = ue) : ue = t[59];
    let de;
    return t[60] !== U || t[61] !== K || t[62] !== ue ? (de = (0, Q.jsxs)(Q.Fragment, {
        children: [U, K, ue]
    }), t[60] = U, t[61] = K, t[62] = ue, t[63] = de) : de = t[63], de
}

function ln(e) {
    return e.currentWorkspace
}
var un, dn, Q, fn, pn, $, mn = e((() => {
        un = J(), Xe(), dn = t(G()), U(), M(), He(), Re(), mt(), ft(), At(), Lt(), pt(), Ae(), Ht(), xe(), en(), tn(), se(), me(), c(), w(), j(), p(), P(), I(), y(), R(), ze(), yt(), an(), Q = z(), fn = `https://help.openai.com/articles/20001419`, pn = `Business Pilot Program`, $ = B({
            title: {
                id: `LW8JgL`,
                defaultMessage: `General`
            },
            subtitle: {
                id: `workspaceSettings.general.subtitle`,
                defaultMessage: `Customize your workspace.`
            },
            brandingTitle: {
                id: `workspaceSettings.general.brandingTitle`,
                defaultMessage: `Branding`
            },
            detailsTitle: {
                id: `workspaceSettings.general.workspaceIdsTitle`,
                defaultMessage: `Workspace IDs`
            },
            policyTitle: {
                id: `cbA42d`,
                defaultMessage: `Policy`
            },
            analyticsTitle: {
                id: `workspaceSettings.general.analyticsAndReportingTitle`,
                defaultMessage: `Analytics and reporting`
            },
            workspacePoliciesTitle: {
                id: `workspaceSettings.general.workspacePoliciesTitle`,
                defaultMessage: `Workspace policies`
            },
            chatRetentionPolicyTitle: {
                id: `VbkaOU`,
                defaultMessage: `Chat retention policy`
            },
            chatRetentionPolicyDescription: {
                id: `jk6qrt`,
                defaultMessage: `Contact your support to change this setting`
            },
            businessPilotProgramTitle: {
                id: `workspaceSettings.general.businessPilotProgram.title`,
                defaultMessage: `{programName} Enrolled`
            },
            businessPilotProgramDescription: {
                id: `workspaceSettings.general.businessPilotProgram.description`,
                defaultMessage: `This workspace is enrolled in the {programName}, which allows OpenAI to use workspace data to improve models. To opt out, follow the instructions in the Help Center. <link>Learn more</link>`
            }
        })
    })),
    hn, gn, _n, vn = e((() => {
        R(), hn = J(), He(), mn(), xe(), tt(), gn = z(), _n = W(function() {
            "use forget";
            let e = (0, hn.c)(6),
                t = et(),
                {
                    adminConsoleRedirects: n,
                    role: r
                } = Ne(),
                i;
            e[0] !== n?.general || e[1] !== r ? (i = n?.general !== !0 && r != null && be(r), e[0] = n?.general, e[1] = r, e[2] = i) : i = e[2];
            let a = i,
                o;
            return e[3] !== a || e[4] !== t ? (o = a ? (0, gn.jsx)(cn, {
                ...t
            }) : null, e[3] = a, e[4] = t, e[5] = o) : o = e[5], o
        })
    }));
e((() => {
    vn()
}))();
export {
    _n as
    default
};
//# sourceMappingURL=admin._index-bot8eftv.js.map
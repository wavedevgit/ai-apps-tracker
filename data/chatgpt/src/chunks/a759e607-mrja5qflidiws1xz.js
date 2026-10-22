const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/01fbf2d8-exxkcm044pilnsh0.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-dfpv67hlp00pbohr.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/8b34dbc2-k1zgxrtsww83602u.js", "assets/conversation-small-cy5f8pl0g26s86so.js", "assets/30901919-7dzdc1ou0jtwkwpt.js", "assets/c470f5ab-d4g7lc53n1e1ao7o.js", "assets/0e5afe53-o2mcfq1ky1uaktz5.js", "assets/conversation-small-j5v9ogf2.css", "assets/82782bc9-mb60yg1xlggwvqri.js", "assets/d84f4c09-n2ni7ooq40at69sv.js", "assets/92b4bb27-ohbsri0cnf4sf7zo.js", "assets/83dae604-ouqjqme8ut81e5su.js", "assets/3d705e5d-is2nynkj0c3lzm98.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    At as n,
    Az as r,
    BV as i,
    C1 as a,
    CE as o,
    Ch as s,
    DD as c,
    DS as l,
    ED as u,
    Ew as d,
    FO as f,
    Fat as p,
    HO as m,
    J5 as h,
    JD as g,
    JT as _,
    Ji as v,
    KD as y,
    KO as b,
    KV as x,
    L1 as S,
    Mw as C,
    N1 as w,
    N5 as T,
    PO as E,
    PS as D,
    Q0 as O,
    RD as k,
    RV as ee,
    Sh as A,
    Sw as j,
    Tw as te,
    UD as M,
    VO as N,
    WO as P,
    Wnt as F,
    Wst as I,
    X0 as L,
    Xi as R,
    Xnt as z,
    Xy as B,
    Y0 as ne,
    Y5 as V,
    YB as re,
    Yet as H,
    Z1 as ie,
    Zy as U,
    _2 as W,
    cn as ae,
    dD as oe,
    gN as se,
    gtt as G,
    h8 as K,
    hN as q,
    hn as J,
    it as ce,
    jw as le,
    jz as ue,
    kat as de,
    nt as fe,
    ot as pe,
    qD as me,
    qT as he,
    t2 as ge,
    tV as _e,
    tct as ve,
    tt as ye,
    v1 as be,
    vD as xe,
    wE as Se,
    ww as Ce,
    xh as we,
    y2 as Te
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as Y,
    Ln as Ee,
    Nn as X,
    Nt as De,
    O as Oe,
    Q as ke,
    Rn as Ae,
    Tn as je,
    Vn as Me,
    cn as Ne,
    ln as Pe,
    s as Fe,
    wn as Ie,
    zn as Le
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Kyn as Re,
    Qhn as ze,
    Vyn as Be,
    Xhn as Ve,
    ai as He,
    cMt as Ue,
    cb as We,
    lb as Ge,
    ni as Ke,
    sMt as qe,
    ti as Je
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Bc as Ye,
    Gy as Xe,
    Nx as Ze,
    Px as Qe,
    Rc as $e,
    Vc as et,
    Wy as tt,
    zc as nt
} from "./30901919-7dzdc1ou0jtwkwpt.js";
import {
    ep as rt,
    gm as it,
    hm as at,
    tp as ot
} from "./8b34dbc2-k1zgxrtsww83602u.js";
import {
    c as st
} from "./31cec8d8-ejzahhq8v425zkie.js";
import {
    a as ct,
    i as lt,
    n as ut,
    o as dt,
    r as ft,
    t as pt
} from "./b7bb170e-jjmeygcsvnv5xzbt.js";

function mt() {
    return (0, gt.jsx)(`div`, {
        className: `border-token-border-medium text-token-text-tertiary ms-2 flex h-3.5 w-3.5 cursor-default items-center justify-center rounded-full border text-[0.5rem] leading-none font-semibold`,
        children: `?`
    })
}

function ht({
    description: e
}) {
    return (0, gt.jsx)(B, {
        wide: !0,
        label: e,
        children: (0, gt.jsx)(mt, {})
    })
}
var gt, _t = e((() => {
    U(), gt = Y()
}));

function vt(e) {
    "use forget";
    let t = (0, Et.c)(32),
        {
            label: n,
            toolType: r,
            enabledTools: i,
            onEnabledToolsChange: a,
            disabled: o,
            readOnly: s,
            disabledTooltip: c,
            isChanged: l
        } = e,
        u = s !== void 0 && s,
        d;
    t[0] === i ? d = t[1] : (d = e => i.some(t => t.type === e), t[0] = i, t[1] = d);
    let f = d,
        p = yt,
        m;
    t[2] !== o || t[3] !== f || t[4] !== u || t[5] !== r ? (m = (u || !o) && f(r), t[2] = o, t[3] = f, t[4] = u, t[5] = r, t[6] = m) : m = t[6];
    let g = m,
        _ = l && `bg-blue-400/10 p-1 -ms-1 rounded-lg`,
        v;
    t[7] === _ ? v = t[8] : (v = h(_), t[7] = _, t[8] = v);
    let y = !u && `cursor-pointer`,
        b = l && !g && `text-token-text-secondary opacity-50`,
        x;
    t[9] !== y || t[10] !== b ? (x = h(`w-full`, y, b), t[9] = y, t[10] = b, t[11] = x) : x = t[11];
    let S = u || o,
        C = l && `border-gray-200 bg-blue-400/15 checked:border-blue-400! checked:bg-blue-400!`,
        w;
    t[12] === C ? w = t[13] : (w = h(C), t[12] = C, t[13] = w);
    let T;
    t[14] !== i || t[15] !== f || t[16] !== a || t[17] !== u || t[18] !== r ? (T = () => {
        u || (f(r) ? a(i.filter(e => e.type !== r)) : a([...i, p(r)]))
    }, t[14] = i, t[15] = f, t[16] = a, t[17] = u, t[18] = r, t[19] = T) : T = t[19];
    let E;
    t[20] !== g || t[21] !== n || t[22] !== w || t[23] !== T || t[24] !== v || t[25] !== x || t[26] !== S || t[27] !== r ? (E = (0, Z.jsx)(Ke, {
        containerClassName: v,
        labelClassName: x,
        id: r,
        label: n,
        checked: g,
        disabled: S,
        className: w,
        onChange: T
    }), t[20] = g, t[21] = n, t[22] = w, t[23] = T, t[24] = v, t[25] = x, t[26] = S, t[27] = r, t[28] = E) : E = t[28];
    let D = E;
    if (c != null) {
        let e;
        return t[29] !== D || t[30] !== c ? (e = (0, Z.jsx)(`div`, {
            className: `opacity-70`,
            children: (0, Z.jsx)(B, {
                side: `top`,
                label: c,
                children: D
            })
        }), t[29] = D, t[30] = c, t[31] = e) : e = t[31], e
    }
    return D
}

function yt(e) {
    return e === I.CONNECTOR ? {
        type: e,
        settings: {
            action_ids: []
        }
    } : {
        type: e
    }
}

function bt(e) {
    return e.type !== I.DALLE && e.type !== I.IMAGE_GEN
}

function xt(e) {
    "use forget";
    let t = (0, Et.c)(85),
        {
            enabledTools: n,
            canvasAvailable: i,
            diffedEnabledTools: a,
            onEnabledToolsChange: o,
            noConnectorsAvailable: s,
            isConnectorsLoading: c,
            readOnly: l
        } = e,
        u = l !== void 0 && l,
        d = ze(W.BrowsingAvailable),
        f = T(St),
        p = Le(),
        m = ie(),
        h;
    t[0] !== n || t[1] !== f ? (h = f ? n.filter(bt) : n, t[0] = n, t[1] = f, t[2] = h) : h = t[2];
    let g = h,
        _;
    t[3] === m ? _ = t[4] : (_ = m?.includes(W.SearchTool) && !m?.includes(W.SearchToolHoldout), t[3] = m, t[4] = _);
    let v = _,
        y;
    t[5] !== i || t[6] !== m ? (y = i && m?.includes(W.GizmoCanvasToggle), t[5] = i, t[6] = m, t[7] = y) : y = t[7];
    let b = y,
        x = ze(W.WorkspaceGPTApps),
        S, C;
    t[8] !== n || t[9] !== f || t[10] !== o || t[11] !== u ? (S = () => {
        if (u || !f) return;
        let e = n.filter(bt);
        e.length !== n.length && o(e)
    }, C = [n, f, o, u], t[8] = n, t[9] = f, t[10] = o, t[11] = u, t[12] = S, t[13] = C) : (S = t[12], C = t[13]), Dt.useEffect(S, C);
    let w;
    t[14] !== c || t[15] !== s || t[16] !== x || t[17] !== g ? (w = Tt(g, s, c, x), t[14] = c, t[15] = s, t[16] = x, t[17] = g, t[18] = w) : w = t[18];
    let {
        showConnectors: E,
        connectorsDisabled: D,
        connectorsDisabledReason: O
    } = w, k;
    t[19] === v ? k = t[20] : (k = v ? (0, Z.jsx)(X, {
        id: `gs7/Pw`,
        defaultMessage: `Web Search`
    }) : (0, Z.jsx)(X, {
        id: `tNlef1`,
        defaultMessage: `Web Browsing`
    }), t[19] = v, t[20] = k);
    let ee = k,
        A;
    t[21] !== d || t[22] !== v ? (A = d ? void 0 : (0, Z.jsx)(X, {
        ...v ? kt.disabledSearchToolTip : kt.disabledBrowsingToolTip
    }), t[21] = d, t[22] = v, t[23] = A) : A = t[23];
    let j = A,
        te;
    t[24] !== a || t[25] !== g ? (te = Ot(I.BROWSER, g, a), t[24] = a, t[25] = g, t[26] = te) : te = t[26];
    let M = te,
        N;
    t[27] !== a || t[28] !== g ? (N = Ot(I.CANVAS, g, a), t[27] = a, t[28] = g, t[29] = N) : N = t[29];
    let P = N,
        F;
    t[30] !== a || t[31] !== g ? (F = Ot(I.CONNECTOR, g, a), t[30] = a, t[31] = g, t[32] = F) : F = t[32];
    let L = F,
        R;
    t[33] !== a || t[34] !== g ? (R = Ot(I.PYTHON, g, a), t[33] = a, t[34] = g, t[35] = R) : R = t[35];
    let z = R,
        B;
    t[36] !== a || t[37] !== g ? (B = Ot(I.IMAGE_GEN, g, a), t[36] = a, t[37] = g, t[38] = B) : B = t[38];
    let ne = B,
        V = !d,
        re = u ? void 0 : j,
        H;
    t[39] !== M || t[40] !== ee || t[41] !== o || t[42] !== u || t[43] !== V || t[44] !== re || t[45] !== g ? (H = (0, Z.jsx)(vt, {
        label: ee,
        toolType: I.BROWSER,
        enabledTools: g,
        onEnabledToolsChange: o,
        disabled: V,
        readOnly: u,
        disabledTooltip: re,
        isChanged: M
    }), t[39] = M, t[40] = ee, t[41] = o, t[42] = u, t[43] = V, t[44] = re, t[45] = g, t[46] = H) : H = t[46];
    let U;
    t[47] !== D || t[48] !== O || t[49] !== L || t[50] !== c || t[51] !== o || t[52] !== u || t[53] !== E || t[54] !== g ? (U = E && (0, Z.jsx)(Ct, {
        show: !u && !D && !c,
        children: (0, Z.jsx)(vt, {
            label: (0, Z.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [(0, Z.jsx)(X, {
                    id: `dfk5FX`,
                    defaultMessage: `Apps`
                }), (0, Z.jsx)(We, {}), c && (0, Z.jsx)(r, {
                    className: `text-token-text-tertiary h-4 w-4`
                })]
            }),
            toolType: I.CONNECTOR,
            enabledTools: g,
            onEnabledToolsChange: o,
            isChanged: L,
            disabled: D,
            readOnly: u,
            disabledTooltip: u ? void 0 : O
        })
    }), t[47] = D, t[48] = O, t[49] = L, t[50] = c, t[51] = o, t[52] = u, t[53] = E, t[54] = g, t[55] = U) : U = t[55];
    let ae;
    t[56] !== b || t[57] !== P || t[58] !== o || t[59] !== u || t[60] !== g ? (ae = b && (0, Z.jsx)(vt, {
        label: (0, Z.jsx)(X, {
            id: `kilwxz`,
            defaultMessage: `Canvas`
        }),
        toolType: I.CANVAS,
        enabledTools: g,
        onEnabledToolsChange: o,
        disabled: !b,
        readOnly: u,
        isChanged: P
    }), t[56] = b, t[57] = P, t[58] = o, t[59] = u, t[60] = g, t[61] = ae) : ae = t[61];
    let oe;
    t[62] !== f || t[63] !== ne || t[64] !== o || t[65] !== u || t[66] !== g ? (oe = !f && (0, Z.jsx)(vt, {
        label: (0, Z.jsx)(X, {
            id: `QgCyev`,
            defaultMessage: `Image Generation`
        }),
        toolType: I.IMAGE_GEN,
        enabledTools: g,
        onEnabledToolsChange: o,
        isChanged: ne,
        readOnly: u
    }), t[62] = f, t[63] = ne, t[64] = o, t[65] = u, t[66] = g, t[67] = oe) : oe = t[67];
    let se;
    t[68] === Symbol.for(`react.memo_cache_sentinel`) ? (se = (0, Z.jsx)(X, {
        id: `8Lv1lK`,
        defaultMessage: `Code Interpreter & Data Analysis`
    }), t[68] = se) : se = t[68];
    let G;
    t[69] === p ? G = t[70] : (G = p.formatMessage(kt.codeInterpreterTooltip), t[69] = p, t[70] = G);
    let K;
    t[71] === G ? K = t[72] : (K = (0, Z.jsxs)(`div`, {
        className: `flex items-center`,
        children: [se, (0, Z.jsx)(ht, {
            description: G
        })]
    }), t[71] = G, t[72] = K);
    let q;
    t[73] !== z || t[74] !== o || t[75] !== u || t[76] !== K || t[77] !== g ? (q = (0, Z.jsx)(vt, {
        label: K,
        toolType: I.PYTHON,
        enabledTools: g,
        onEnabledToolsChange: o,
        isChanged: z,
        readOnly: u
    }), t[73] = z, t[74] = o, t[75] = u, t[76] = K, t[77] = g, t[78] = q) : q = t[78];
    let J;
    return t[79] !== H || t[80] !== U || t[81] !== ae || t[82] !== oe || t[83] !== q ? (J = (0, Z.jsxs)(`div`, {
        className: `flex flex-col items-start gap-2`,
        children: [H, U, ae, oe, q]
    }), t[79] = H, t[80] = U, t[81] = ae, t[82] = oe, t[83] = q, t[84] = J) : J = t[84], J
}

function St() {
    return be()
}

function Ct(e) {
    "use forget";
    let t = (0, Et.c)(6),
        {
            children: n,
            show: r
        } = e,
        i = pe(ye.hasSeenGptAppsCapabilityTooltip);
    if (!(r && !i.isLoading && i.eligible)) {
        let e;
        return t[0] === n ? e = t[1] : (e = (0, Z.jsx)(Z.Fragment, {
            children: n
        }), t[0] = n, t[1] = e), e
    }
    let a, o;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, Z.jsx)(X, {
        id: `ZkWeQ+`,
        defaultMessage: `Add apps to your GPT`
    }), o = (0, Z.jsx)(X, {
        id: `rqzyFo`,
        defaultMessage: `Connect your GPT to external tools to pull in data and take actions.`
    }), t[2] = a, t[3] = o) : (a = t[2], o = t[3]);
    let s;
    return t[4] === n ? s = t[5] : (s = (0, Z.jsx)(at, {
        announcementKey: ye.hasSeenGptAppsCapabilityTooltip,
        show: !0,
        theme: `bright`,
        side: `right`,
        badge: `new`,
        dismissOnOutsideClick: !0,
        title: a,
        description: o,
        onDismiss: wt,
        sideOffset: 0,
        children: n
    }), t[4] = n, t[5] = s), s
}

function wt() {
    return ce(ye.hasSeenGptAppsCapabilityTooltip)
}

function Tt(e, t, n, r) {
    return F(`2218609681`) ? r === !1 ? {
        showConnectors: !0,
        connectorsDisabled: !0,
        connectorsDisabledReason: (0, Z.jsx)(X, {
            id: `OteBV0`,
            defaultMessage: `Apps are disabled for your workspace. Contact your admin to enable them.`
        })
    } : n ? {
        showConnectors: !0,
        connectorsDisabled: !0,
        connectorsDisabledReason: (0, Z.jsx)(X, {
            id: `0S1oFf`,
            defaultMessage: `Loading apps...`
        })
    } : typeof t == `boolean` ? t ? {
        showConnectors: !0,
        connectorsDisabled: !0,
        connectorsDisabledReason: (0, Z.jsx)(X, {
            id: `ynVR5D`,
            defaultMessage: `Your workspace administrator has disabled the use of Apps.`
        })
    } : e.some(e => e.type === I.JIT_PLUGIN) ? {
        showConnectors: !0,
        connectorsDisabled: !0,
        connectorsDisabledReason: (0, Z.jsx)(X, {
            id: `7XDyuz`,
            defaultMessage: `Apps are not compatible with Actions. Please remove all Actions to use Apps.`
        })
    } : {
        showConnectors: !0,
        connectorsDisabled: !1
    } : {
        showConnectors: !1,
        connectorsDisabled: !0
    } : {
        showConnectors: !1,
        connectorsDisabled: !0
    }
}
var Et, Dt, Z, Ot, kt, At = e((() => {
        Et = Ie(), ve(), Ge(), Ve(), U(), He(), it(), K(), ue(), S(), Te(), fe(), z(), V(), Dt = t(Me()), Ae(), _t(), Z = Y(), Ot = (e, t, n) => n ? t?.some(t => t.type === e) !== n?.some(t => t.type === e) : !1, kt = Ee({
            disabledBrowsingToolTip: {
                defaultMessage: `Web browsing is disabled for your workspace. Contact your admin to enable it.`,
                id: `GizmoEditorModelPicker.disabledBrowsingToolTip`
            },
            disabledSearchToolTip: {
                defaultMessage: `Web search is disabled for your workspace. Contact your admin to enable it.`,
                id: `GizmoEditorModelPicker.disabledSearchToolTip`
            },
            codeInterpreterTooltip: {
                id: `GizmoEditorModelPicker.codeInterpreterTooltip`,
                defaultMessage: `Allow this GPT to run code. When enabled, this GPT can analyze data, work with your uploaded files, generate downloadable files, perform math, and more.`
            }
        })
    })),
    jt, Mt = e((() => {
        L(), Pe(), jt = ne(() => Ne(() => import(`./01fbf2d8-exxkcm044pilnsh0.js`).then(e => e.GizmoSharingReadOnlyModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]))), ne(() => Ne(() => import(`./01fbf2d8-exxkcm044pilnsh0.js`).then(e => e.GizmoSharingReadOnlyModalView), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])))
    }));

function Nt({
    onSelectVersion: e,
    selectedVersion: t,
    currentVersion: n,
    gizmoVersions: r
}) {
    let i = r?.items.reduce((e, t) => {
        let n = new Date(t.updated_at),
            r = `${n.getFullYear()}-${n.getMonth()+1}-${n.getDate()}`;
        return e[r] || (e[r] = []), e[r].push(t), e
    }, {});
    return i ? (0, Q.jsx)(Lt, {
        children: Object.keys(i).map((r, a) => (0, Q.jsx)(Ut, {
            date: r,
            entries: i[r],
            selectedVersion: t,
            onSelectVersion: e,
            currentVersion: n
        }, a))
    }) : null
}

function Pt(e, t) {
    let n = new Date(t),
        r = new Date,
        i = new Date(r);
    i.setDate(r.getDate() - 1);
    let a = e.locale || `en-US`;
    return n.toDateString() === r.toDateString() ? `Today` : n.toDateString() === i.toDateString() ? `Yesterday` : new Intl.DateTimeFormat(a, {
        dateStyle: `medium`
    }).format(n)
}
var Ft, Q, It, Lt, Rt, zt, Bt, Vt, Ht, Ut, Wt, Gt = e((() => {
    s(), U(), V(), n(), Ft = t(Me()), Ae(), Se(), Q = Y(), It = (0, Ft.memo)(function({
        onSelectVersion: e,
        selectedVersion: t,
        currentVersion: n,
        gizmoVersions: r
    }) {
        return (0, Q.jsx)(Nt, {
            selectedVersion: t,
            onSelectVersion: e,
            currentVersion: n,
            gizmoVersions: r
        })
    }), Lt = o.div`flex h-full w-full max-w-3xs flex-col overflow-y-scroll bg-token-sidebar-surface-primary px-2 py-6`, Rt = ({
        name: e,
        userId: t,
        showName: n = !1
    }) => (0, Q.jsxs)(`div`, {
        className: `flex items-center gap-1.5`,
        children: [n && (0, Q.jsx)(B, {
            delayDuration: 2e3,
            label: e,
            className: `text-token-text-secondary max-w-[100px] truncate text-xs`,
            children: e
        }), (0, Q.jsx)(`div`, {
            className: h(`icon flex items-center justify-center rounded-full text-[8px] text-white`, we(t)),
            children: A(e)
        })]
    }), zt = o.div`flex w-full flex-col rounded-lg px-3 py-2 text-base hover:cursor-pointer hover:bg-token-sidebar-surface-tertiary`, Bt = o.div`px-3 text-xs font-medium text-token-text-secondary`, Vt = o.div`flex flex-col space-y-1`, Ht = o.div`mb-8 flex flex-col space-y-2`, Ut = ({
        date: e,
        entries: t,
        onSelectVersion: n,
        selectedVersion: r,
        currentVersion: i
    }) => {
        let a = Le(),
            o = e => e === i;
        return (0, Q.jsxs)(Ht, {
            children: [(0, Q.jsx)(Bt, {
                children: Pt(a, e)
            }), (0, Q.jsx)(Vt, {
                children: t.map((e, t) => (0, Q.jsx)(Wt, {
                    item: e,
                    isCurrentVersion: o,
                    selectedVersion: r,
                    onSelectVersion: n
                }, t))
            })]
        })
    }, Wt = ({
        item: e,
        isCurrentVersion: t,
        selectedVersion: n,
        onSelectVersion: r
    }) => {
        let [i, a] = (0, Ft.useState)(!1), {
            version: o,
            updated_at: s,
            author: c
        } = e;
        return (0, Q.jsx)(zt, {
            className: h(n === o && `bg-token-sidebar-surface-tertiary`),
            onMouseEnter: () => a(!0),
            onMouseLeave: () => a(!1),
            onClick: () => r(o),
            children: (0, Q.jsxs)(`div`, {
                className: `flex w-full items-center justify-between`,
                children: [(0, Q.jsx)(`div`, {
                    className: `text-base`,
                    children: t(o) ? (0, Q.jsx)(X, {
                        id: `gizmo.version.current`,
                        defaultMessage: `Current version`
                    }) : (0, Q.jsx)(je, {
                        value: s,
                        timeStyle: `short`
                    })
                }), (0, Q.jsx)(J, {
                    children: !t(o) && c && (0, Q.jsx)(Rt, {
                        showName: n === o || i,
                        name: c.user_name ?? ``,
                        userId: c.user_id
                    })
                })]
            })
        })
    }
}));

function Kt({
    gizmoId: e
}) {
    let t = T(b),
        n = T(a),
        r = c(e),
        {
            hasEditPermission: i,
            hasWorkspacePermission: o,
            isLoading: s
        } = M(r.data),
        l = t && n != null && !s && !g(r.data?.gizmo.migrated_plugin_id) && (i || o && r.data == null && r.error instanceof de && r.error.status === 404),
        u = c(l ? e : void 0, !0),
        {
            data: d,
            isLoading: f,
            refetch: p
        } = l ? u : r,
        m = d?.gizmo?.current_user_permission,
        h = !t && (m?.can_write ?? !1) && !g(d?.gizmo.migrated_plugin_id),
        _ = m?.can_view_config ?? !1;
    return !d || f ? null : h ? (0, $.jsx)(fn, {
        gizmoResource: d,
        refetchGizmo: p
    }) : _ ? (0, $.jsx)(dn, {
        gizmoResource: d
    }) : null
}

function qt({
    gizmoResource: e,
    currentVersion: t,
    gizmoVersions: n
}) {
    let i = De(),
        a = e.gizmo.id,
        [o, s] = (0, nn.useState)(t),
        [c, l] = (0, nn.useState)(!1),
        [u, d] = (0, nn.useState)(!1),
        f = () => {
            i(o ? an(a, o) : re(a))
        },
        p = () => {
            if (o !== t && e.tools.find(e => x(e) && e.metadata.auth?.type !== H.None)) {
                d(!0);
                return
            }
            i(an(a, o))
        },
        m = () => {
            o === t && t > 1 && s(t - 1), c && s(t), l(!c)
        },
        g = t > 1;
    (0, nn.useEffect)(() => {
        o === t && l(!1)
    }, [o, t]);
    let {
        data: _,
        isLoading: v
    } = rn({
        gizmoId: a,
        version: o
    });
    return (0, $.jsxs)(on, {
        children: [(0, $.jsxs)(ln, {
            children: [(0, $.jsx)(un, {
                children: (0, $.jsx)(X, {
                    id: `gizmoReadOnly.versionHistoryTitle`,
                    defaultMessage: `Version History`
                })
            }), (0, $.jsxs)(`div`, {
                className: `me-4 flex gap-2`,
                children: [g && (0, $.jsx)(B, {
                    label: (0, $.jsx)(X, {
                        id: `gizmo.readonly.compareTooltip`,
                        defaultMessage: `Compare to the previous version`
                    }),
                    disabled: !g || c,
                    triggerAs: null,
                    children: (0, $.jsx)(Je, {
                        color: c ? `primary` : `secondary`,
                        className: h(`btn rounded-full border transition-colors`, c ? h(`text-token-text-primary disabled:text-token-text-tertiary bg-token-main-surface-secondary-selected hover:bg-token-surface-hover focus-visible:bg-token-surface-hover disabled:opacity-40`, `border-transparent`) : `border-token-border-default hover:bg-token-surface-hover bg-transparent`),
                        onClick: m,
                        icon: c ? Ye : $e,
                        children: c ? (0, $.jsx)(X, {
                            id: `gizmo.readonly.comparing`,
                            defaultMessage: `Comparing changes`
                        }) : (0, $.jsx)(X, {
                            id: `gizmo.readonly.compare`,
                            defaultMessage: `Compare changes`
                        })
                    })
                }), (0, $.jsx)(B, {
                    label: (0, $.jsx)(X, {
                        id: `gizmo.readonly.restoreVersionTooltip`,
                        defaultMessage: `You will be able to edit before publishing`
                    }),
                    disabled: o === t,
                    triggerAs: null,
                    children: (0, $.jsx)(Je, {
                        color: `secondary`,
                        disabled: o === t,
                        icon: tt,
                        onClick: p,
                        children: (0, $.jsx)(X, {
                            id: `gizmo.readonly.restoreVersion`,
                            defaultMessage: `Restore this version`
                        })
                    })
                })]
            })]
        }), (0, $.jsxs)(sn, {
            children: [(0, $.jsx)(It, {
                selectedVersion: o,
                currentVersion: t,
                onSelectVersion: s,
                gizmoVersions: n
            }), v && (0, $.jsx)(`div`, {
                className: `flex h-full w-full grow flex-col items-center justify-center`,
                children: (0, $.jsx)(r, {})
            }), _ && (0, $.jsxs)(cn, {
                children: [(0, $.jsx)(Jt, {
                    displayGizmo: _,
                    isComparing: c,
                    gizmoVersions: n
                }), c && (0, $.jsx)(Jt, {
                    displayGizmo: e,
                    compareToGizmo: _,
                    setIsComparing: l,
                    isComparing: !0,
                    gizmoVersions: n
                })]
            })]
        }), u && (0, $.jsx)(en, {
            onClose: () => d(!1),
            onContinue: f
        })]
    })
}

function Jt(e) {
    "use forget";
    let t = (0, tn.c)(151),
        {
            isComparing: n,
            displayGizmo: r,
            compareToGizmo: i,
            setIsComparing: a,
            gizmoVersions: o
        } = e,
        s = Le(),
        c = (0, nn.useId)(),
        u = T($t),
        d;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (d = w()?.hasPaidFeatures(), t[0] = d) : d = t[0];
    let f = d,
        p = r.gizmo.default_model !== i?.gizmo.default_model,
        m = r.gizmo.display.name !== i?.gizmo.display.name,
        g = r.gizmo.display.description !== i?.gizmo.display.description,
        _ = r.gizmo.instructions !== i?.gizmo.instructions,
        v = n && !!i,
        y, b, x, S, C, E, D, O, k, A, j, M, N, P, F, I, L;
    if (t[1] !== i || t[2] !== r || t[3] !== c || t[4] !== o?.items || t[5] !== s || t[6] !== n || t[7] !== p || t[8] !== g || t[9] !== v || t[10] !== m || t[11] !== _ || t[12] !== u || t[13] !== a) {
        let e;
        t[31] === i?.gizmo ? e = t[32] : (e = e => !i?.gizmo.display.prompt_starters?.includes(e), t[31] = i?.gizmo, t[32] = e);
        let d = pn(v, r.gizmo.display.prompt_starters ?? [], i?.gizmo.display.prompt_starters ?? [], e),
            w = r.tools?.flatMap(Qt) ?? [],
            T = i?.tools?.flatMap(Zt) ?? [],
            R;
        t[33] === i?.files ? R = t[34] : (R = e => !i?.files?.find(t => t.id === e.id), t[33] = i?.files, t[34] = R);
        let z = pn(v, r.files ?? [], i?.files ?? [], R),
            B = pn(v, w, T, e => !T.find(t => t.metadata.action_id === e.metadata.action_id)),
            ne = r.gizmo.display.profile_picture_url !== i?.gizmo.display.profile_picture_url,
            V;
        t[35] !== r.gizmo.version || t[36] !== o?.items ? (V = o?.items.find(e => e.version === r.gizmo.version)?.author, t[35] = r.gizmo.version, t[36] = o?.items, t[37] = V) : V = t[37];
        let re = V;
        y = ae.div, t[38] === Symbol.for(`react.memo_cache_sentinel`) ? (C = {
            opacity: 0,
            x: 10
        }, E = {
            opacity: 1,
            x: 0
        }, D = {
            opacity: 0,
            x: 10
        }, O = {
            duration: .2
        }, t[38] = C, t[39] = E, t[40] = D, t[41] = O) : (C = t[38], E = t[39], D = t[40], O = t[41]);
        let H = v && `border-s`;
        t[42] === H ? k = t[43] : (k = h(`relative flex min-w-0 flex-1 grow justify-center overflow-auto`, H), t[42] = H, t[43] = k), A = `flex w-full max-w-2xl flex-col px-4 py-8 text-sm`;
        let ie;
        t[44] === Symbol.for(`react.memo_cache_sentinel`) ? (ie = {
            opacity: 0
        }, t[44] = ie) : ie = t[44];
        let U = +!!n,
            W;
        t[45] === U ? W = t[46] : (W = {
            opacity: U
        }, t[45] = U, t[46] = W);
        let oe = n ? .2 : 0,
            G;
        t[47] === oe ? G = t[48] : (G = {
            duration: oe
        }, t[47] = oe, t[48] = G);
        let K;
        t[49] === i ? K = t[50] : (K = (0, $.jsx)(`div`, {
            className: `text-token-text-tertiary text-base`,
            children: i ? (0, $.jsx)(X, {
                id: `gizmo.readonly.currentVersion`,
                defaultMessage: `Current`
            }) : (0, $.jsx)(X, {
                id: `gizmo.readonly.previous`,
                defaultMessage: `Previous`
            })
        }), t[49] = i, t[50] = K);
        let q;
        t[51] !== r.gizmo.version_updated_at || t[52] !== s ? (q = r.gizmo.version_updated_at && (0, $.jsx)(`div`, {
            className: `text-token-text-tertiary text-xs`,
            children: (0, $.jsx)(X, {
                id: `gizmo.readonly.updatedAt`,
                defaultMessage: `{date} at {time}`,
                values: {
                    date: Pt(s, r.gizmo.version_updated_at),
                    time: (0, $.jsx)(je, {
                        value: new Date(r.gizmo.version_updated_at),
                        hour: `numeric`,
                        minute: `numeric`
                    })
                }
            })
        }), t[51] = r.gizmo.version_updated_at, t[52] = s, t[53] = q) : q = t[53];
        let J;
        t[54] === re ? J = t[55] : (J = re && (0, $.jsx)(Rt, {
            name: re.user_name ?? ``,
            userId: re.user_id
        }), t[54] = re, t[55] = J);
        let ce;
        t[56] !== i || t[57] !== a ? (ce = i && a && (0, $.jsx)(te, {
            onClick: () => a(!1)
        }), t[56] = i, t[57] = a, t[58] = ce) : ce = t[58];
        let le;
        t[59] !== q || t[60] !== J || t[61] !== ce ? (le = (0, $.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [q, J, ce]
        }), t[59] = q, t[60] = J, t[61] = ce, t[62] = le) : le = t[62], t[63] !== W || t[64] !== G || t[65] !== K || t[66] !== le ? (j = (0, $.jsxs)(ae.div, {
            initial: ie,
            animate: W,
            transition: G,
            className: `mb-4 flex w-full items-center justify-between`,
            children: [K, le]
        }), t[63] = W, t[64] = G, t[65] = K, t[66] = le, t[67] = j) : j = t[67];
        let ue = r.gizmo.display.profile_picture_url,
            de = ne && i && `border-opacity-10 rounded-full border-4 border-blue-400`,
            fe;
        t[68] === de ? fe = t[69] : (fe = h(`h-20 w-20`, de), t[68] = de, t[69] = fe), t[70] !== r.gizmo.display.profile_picture_url || t[71] !== fe ? (M = (0, $.jsx)(ft, {
            className: `self-center`,
            children: (0, $.jsx)(qe, {
                src: ue,
                isFirstParty: !1,
                className: fe,
                showLoading: !0
            })
        }), t[70] = r.gizmo.display.profile_picture_url, t[71] = fe, t[72] = M) : M = t[72];
        let pe;
        t[73] === Symbol.for(`react.memo_cache_sentinel`) ? (pe = (0, $.jsx)(X, {
            id: `gizmo.readonly.nameLabel`,
            defaultMessage: `Name`
        }), t[73] = pe) : pe = t[73];
        let me = `${c}-name`,
            he;
        t[74] === me ? he = t[75] : (he = (0, $.jsx)(ut, {
            label: pe,
            htmlFor: me
        }), t[74] = me, t[75] = he);
        let ge = `${c}-name`,
            _e = r.gizmo.display.name ?? ``,
            ve;
        t[76] !== v || t[77] !== m ? (ve = mn(v, m), t[76] = v, t[77] = m, t[78] = ve) : ve = t[78];
        let ye;
        t[79] !== ge || t[80] !== _e || t[81] !== ve ? (ye = (0, $.jsx)(pt, {
            id: ge,
            name: `name`,
            type: `text`,
            value: _e,
            readOnly: !0,
            className: ve
        }), t[79] = ge, t[80] = _e, t[81] = ve, t[82] = ye) : ye = t[82], t[83] !== he || t[84] !== ye ? (N = (0, $.jsxs)(ft, {
            children: [he, ye]
        }), t[83] = he, t[84] = ye, t[85] = N) : N = t[85];
        let be;
        t[86] === Symbol.for(`react.memo_cache_sentinel`) ? (be = (0, $.jsx)(X, {
            id: `gizmo.readonly.descriptionLabel`,
            defaultMessage: `Description`
        }), t[86] = be) : be = t[86];
        let xe = `${c}-description`,
            Se;
        t[87] === xe ? Se = t[88] : (Se = (0, $.jsx)(ut, {
            label: be,
            htmlFor: xe
        }), t[87] = xe, t[88] = Se);
        let Ce = `${c}-description`,
            we = r.gizmo.display.description ?? ``,
            Te;
        t[89] !== g || t[90] !== v ? (Te = mn(v, g), t[89] = g, t[90] = v, t[91] = Te) : Te = t[91];
        let Y;
        t[92] !== Ce || t[93] !== we || t[94] !== Te ? (Y = (0, $.jsx)(pt, {
            id: Ce,
            name: `description`,
            type: `text`,
            value: we,
            readOnly: !0,
            className: Te
        }), t[92] = Ce, t[93] = we, t[94] = Te, t[95] = Y) : Y = t[95], t[96] !== Se || t[97] !== Y ? (P = (0, $.jsxs)(ft, {
            children: [Se, Y]
        }), t[96] = Se, t[97] = Y, t[98] = P) : P = t[98];
        let Ee;
        t[99] === Symbol.for(`react.memo_cache_sentinel`) ? (Ee = (0, $.jsx)(X, {
            id: `gizmo.readonly.instructionsLabel`,
            defaultMessage: `Instructions`
        }), t[99] = Ee) : Ee = t[99];
        let De = `${c}-instructions`,
            Oe;
        t[100] === De ? Oe = t[101] : (Oe = (0, $.jsx)(ut, {
            label: Ee,
            htmlFor: De
        }), t[100] = De, t[101] = Oe);
        let ke = `${c}-instructions`,
            Ae = r.gizmo.instructions ?? ``,
            Me;
        t[102] !== v || t[103] !== _ ? (Me = h(`resize-none`, mn(v, _)), t[102] = v, t[103] = _, t[104] = Me) : Me = t[104];
        let Ne;
        t[105] !== ke || t[106] !== Ae || t[107] !== Me ? (Ne = (0, $.jsx)(lt, {
            id: ke,
            name: `instructions`,
            rows: 8,
            value: Ae,
            readOnly: !0,
            className: Me
        }), t[105] = ke, t[106] = Ae, t[107] = Me, t[108] = Ne) : Ne = t[108], t[109] !== Oe || t[110] !== Ne ? (F = (0, $.jsxs)(ft, {
            children: [Oe, Ne]
        }), t[109] = Oe, t[110] = Ne, t[111] = F) : F = t[111], I = d.length > 0 && (0, $.jsxs)(ft, {
            children: [(0, $.jsx)(ut, {
                label: (0, $.jsx)(`span`, {
                    id: `${c}-prompt-starters-label`,
                    children: (0, $.jsx)(X, {
                        id: `gizmo.readonly.conversationStartersLabel`,
                        defaultMessage: `Conversation starters`
                    })
                })
            }), d.map((e, t) => {
                let n = !i?.gizmo.display.prompt_starters?.includes(e),
                    a = !r.gizmo.display.prompt_starters?.includes(e);
                return (0, $.jsx)(pt, {
                    name: `prompt-starter`,
                    "aria-labelledby": `${c}-prompt-starters-label`,
                    type: `text`,
                    value: e,
                    readOnly: !0,
                    className: h(`bg-token-main-surface-secondary mb-2 resize-none`, _n(v, n, a))
                }, t)
            })]
        }), L = z.length > 0 && (0, $.jsxs)(ft, {
            children: [(0, $.jsx)(ut, {
                label: (0, $.jsx)(X, {
                    id: `gizmo.readonly.knowledgeLabel`,
                    defaultMessage: `Knowledge`
                })
            }), (0, $.jsx)(`div`, {
                className: `flex flex-wrap gap-1`,
                children: z.map((e, t) => {
                    let n = !i?.files?.find(t => t.id === e.id),
                        a = !r.files?.find(t => t.id === e.id);
                    return (0, $.jsx)(rt, {
                        file: ee(e),
                        fileId: e.file_id ?? void 0,
                        gizmoId: r.gizmo.id,
                        className: _n(v, n, a)
                    }, t)
                })
            })]
        });
        let Pe;
        t[112] === Symbol.for(`react.memo_cache_sentinel`) ? (Pe = (0, $.jsx)(ut, {
            label: (0, $.jsx)(X, {
                id: `gizmo.readonly.capabilitiesLabel`,
                defaultMessage: `Capabilities`
            })
        }), t[112] = Pe) : Pe = t[112];
        let Fe;
        t[113] === r.tools ? Fe = t[114] : (Fe = l(r.tools), t[113] = r.tools, t[114] = Fe);
        let Ie;
        t[115] !== i?.tools || t[116] !== r.tools ? (Ie = r.tools.some(Xt) || (i?.tools.some(Yt) ?? !1), t[115] = i?.tools, t[116] = r.tools, t[117] = Ie) : Ie = t[117];
        let Le;
        t[118] === i ? Le = t[119] : (Le = i == null ? void 0 : l(i.tools), t[118] = i, t[119] = Le), t[120] !== Fe || t[121] !== Ie || t[122] !== Le ? (b = (0, $.jsxs)(ft, {
            children: [Pe, (0, $.jsx)(xt, {
                enabledTools: Fe,
                canvasAvailable: Ie,
                diffedEnabledTools: Le,
                onEnabledToolsChange: se,
                noConnectorsAvailable: !1,
                isConnectorsLoading: !1,
                readOnly: !0
            })]
        }), t[120] = Fe, t[121] = Ie, t[122] = Le, t[123] = b) : b = t[123], t[124] !== r.gizmo.default_model || t[125] !== c || t[126] !== s || t[127] !== p || t[128] !== v || t[129] !== u ? (x = f && (0, $.jsxs)(ft, {
            children: [(0, $.jsx)(ut, {
                label: (0, $.jsx)(X, {
                    id: `gizmo.readonly.recommendedModelLabel`,
                    defaultMessage: `Recommended Model`
                }),
                htmlFor: `${c}-model`
            }), (0, $.jsx)(pt, {
                id: `${c}-model`,
                name: `recommended-model`,
                type: `text`,
                value: r.gizmo.default_model ? u.models.get(r.gizmo.default_model)?.title ?? r.gizmo.default_model : s.formatMessage({
                    id: `gizmoEditor.noneOption`,
                    defaultMessage: `No Recommended Model - Users will use any model they prefer`
                }),
                readOnly: !0,
                className: mn(v, p)
            })]
        }), t[124] = r.gizmo.default_model, t[125] = c, t[126] = s, t[127] = p, t[128] = v, t[129] = u, t[130] = x) : x = t[130], S = !!B.length && (0, $.jsxs)(ft, {
            children: [(0, $.jsx)(ut, {
                label: (0, $.jsx)(X, {
                    id: `gizmo.readonly.actionsLabel`,
                    defaultMessage: `Actions`
                })
            }), (0, $.jsx)(`div`, {
                className: `flex flex-col gap-1`,
                children: B.map((e, t) => (0, $.jsx)(gn, {
                    tool: e,
                    isDiffed: v,
                    compareToGizmo: i,
                    displayGizmo: r
                }, t))
            })]
        }), t[1] = i, t[2] = r, t[3] = c, t[4] = o?.items, t[5] = s, t[6] = n, t[7] = p, t[8] = g, t[9] = v, t[10] = m, t[11] = _, t[12] = u, t[13] = a, t[14] = y, t[15] = b, t[16] = x, t[17] = S, t[18] = C, t[19] = E, t[20] = D, t[21] = O, t[22] = k, t[23] = A, t[24] = j, t[25] = M, t[26] = N, t[27] = P, t[28] = F, t[29] = I, t[30] = L
    } else y = t[14], b = t[15], x = t[16], S = t[17], C = t[18], E = t[19], D = t[20], O = t[21], k = t[22], A = t[23], j = t[24], M = t[25], N = t[26], P = t[27], F = t[28], I = t[29], L = t[30];
    let R;
    t[131] !== b || t[132] !== x || t[133] !== S || t[134] !== A || t[135] !== j || t[136] !== M || t[137] !== N || t[138] !== P || t[139] !== F || t[140] !== I || t[141] !== L ? (R = (0, $.jsxs)(`div`, {
        className: A,
        children: [j, M, N, P, F, I, L, b, x, S]
    }), t[131] = b, t[132] = x, t[133] = S, t[134] = A, t[135] = j, t[136] = M, t[137] = N, t[138] = P, t[139] = F, t[140] = I, t[141] = L, t[142] = R) : R = t[142];
    let z;
    return t[143] !== y || t[144] !== C || t[145] !== E || t[146] !== D || t[147] !== O || t[148] !== k || t[149] !== R ? (z = (0, $.jsx)(y, {
        initial: C,
        animate: E,
        exit: D,
        transition: O,
        className: k,
        children: R
    }), t[143] = y, t[144] = C, t[145] = E, t[146] = D, t[147] = O, t[148] = k, t[149] = R, t[150] = z) : z = t[150], z
}

function Yt(e) {
    return e.type === I.CANVAS
}

function Xt(e) {
    return e.type === I.CANVAS
}

function Zt(e) {
    return x(e) ? [e] : []
}

function Qt(e) {
    return x(e) ? [e] : []
}

function $t() {
    return Be({
        isGizmo: !0
    })
}

function en({
    onClose: e,
    onContinue: t
}) {
    let [n, r] = (0, nn.useState)(!1);
    return (0, $.jsx)(j, {
        testId: `modal-gizmo-auth-restore`,
        isOpen: !0,
        onClose: e,
        type: `warning`,
        showCloseButton: !0,
        title: (0, $.jsx)(X, {
            id: `gizmoReadOnly.authModalWarningTitle`,
            defaultMessage: `Reset Authentication for Custom Actions`
        }),
        primaryButton: (0, $.jsx)(he, {
            onClick: () => {
                r(!0), t()
            },
            loading: n,
            color: `secondary`,
            children: (0, $.jsx)(X, {
                id: `gizmoReadOnly.authModalContinueButton`,
                defaultMessage: `Continue`
            })
        }),
        secondaryButton: (0, $.jsx)(he, {
            onClick: e,
            color: `secondary`,
            children: (0, $.jsx)(X, {
                id: `gizmoReadOnly.authModalCancelButton`,
                defaultMessage: `Cancel`
            })
        }),
        size: `normal`,
        children: (0, $.jsx)(X, {
            id: `gizmoReadOnly.authModalWarningBody`,
            defaultMessage: `Restoring this version will reset authentication of your custom actions. You may need to reconfigure each custom action afterwards.`
        })
    })
}
var tn, nn, $, rn, an, on, sn, cn, ln, un, dn, fn, pn, mn, hn, gn, _n, vn = e((() => {
    tn = Ie(), ve(), G(), _(), st(), R(), d(), Xe(), C(), et(), nt(), Ze(), Ce(), O(), U(), ot(), Ue(), oe(), At(), f(), k(), He(), i(), me(), Mt(), Gt(), D(), Re(), K(), m(), ue(), S(), p(), _e(), Fe(), V(), q(), n(), nn = t(Me()), Ae(), ke(), Se(), dt(), $ = Y(), rn = ({
        gizmoId: e,
        version: t,
        skip: n = !1
    }) => Oe({
        queryFn: async () => E.getVersion({
            gizmoId: e,
            version: t
        }),
        queryKey: [`gizmo`, `version`, {
            gizmoId: e,
            version: t
        }],
        enabled: !n
    }), an = (e, t) => `/gpts/editor/${e}?version=${t}`, on = o.div`flex h-screen w-full flex-col items-center bg-token-bg-primary dark:bg-token-bg-secondary-surface text-token-text-primary`, sn = o.div`flex w-full grow overflow-hidden`, cn = o.div`flex h-full grow flex-wrap items-start justify-between gap-4 overflow-auto`, ln = o.div`sticky top-0 flex h-16 w-full items-center justify-between gap-2 border-b border-token-border-medium bg-token-bg-primary dark:bg-token-bg-secondary-surface px-3 py-3`, un = e => {
        "use forget";
        let t = (0, tn.c)(9),
            {
                children: n,
                to: r
            } = e,
            i = De(),
            a;
        t[0] !== i || t[1] !== r ? (a = () => i(r ?? -1), t[0] = i, t[1] = r, t[2] = a) : a = t[2];
        let o;
        t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, $.jsx)(le, {
            className: `icon`
        }), t[3] = o) : o = t[3];
        let s;
        t[4] === n ? s = t[5] : (s = (0, $.jsx)(`span`, {
            children: n
        }), t[4] = n, t[5] = s);
        let c;
        return t[6] !== a || t[7] !== s ? (c = (0, $.jsxs)(`button`, {
            type: `button`,
            className: `interactive-button flex items-center gap-1.5`,
            onClick: a,
            children: [o, s]
        }), t[6] = a, t[7] = s, t[8] = c) : c = t[8], c
    }, dn = e => {
        "use forget";
        let t = (0, tn.c)(37),
            {
                gizmoResource: n
            } = e,
            r = De(),
            i = T(P),
            o = T(b),
            {
                hasEditPermission: s,
                hasWorkspacePermission: c
            } = M(n),
            l = n.gizmo.migrated_plugin_id,
            u;
        t[0] === l ? u = t[1] : (u = g(l), t[0] = l, t[1] = u);
        let d = u,
            f;
        t[2] !== n.gizmo.author || t[3] !== n.gizmo.workspace_id || t[4] !== c || t[5] !== d ? (f = () => {
            let e = a(),
                t = e?.normalizedAccountUserId;
            return d && c && e != null && t != null && n.gizmo.author.user_id === t && (n.gizmo.workspace_id ?? null) === (e.isWorkspaceAccount() ? e.id : null) ? {
                accountId: e.id,
                userId: t
            } : null
        }, t[2] = n.gizmo.author, t[3] = n.gizmo.workspace_id, t[4] = c, t[5] = d, t[6] = f) : f = t[6];
        let p = T(f),
            m = d ? y.notice : o && s ? N.readOnlyNotice : null,
            h = xe(),
            _ = n.gizmo.id,
            x;
        t[7] !== h || t[8] !== _ || t[9] !== r ? (x = async () => {
            let e = await h.mutateAsync({
                gizmoId: _
            });
            e.gizmo.id && r(`/gpts/editor/${e.gizmo.id}`)
        }, t[7] = h, t[8] = _, t[9] = r, t[10] = x) : x = t[10];
        let S = x,
            C = d ? `/gpts/mine` : void 0,
            w;
        t[11] === d ? w = t[12] : (w = d ? (0, $.jsx)(X, {
            id: `gizmoReadOnly.backToMyGpts`,
            defaultMessage: `My GPTs`
        }) : (0, $.jsx)(X, {
            id: `gizmoReadOnly.configurationTitle`,
            defaultMessage: `Configuration`
        }), t[11] = d, t[12] = w);
        let E;
        t[13] !== C || t[14] !== w ? (E = (0, $.jsx)(un, {
            to: C,
            children: w
        }), t[13] = C, t[14] = w, t[15] = E) : E = t[15];
        let D;
        t[16] !== h.isPending || t[17] !== i || t[18] !== S || t[19] !== d ? (D = !d && !i && (0, $.jsx)(`div`, {
            className: `me-4 flex gap-2`,
            children: (0, $.jsx)(Je, {
                color: `secondary`,
                loading: h.isPending,
                onClick: S,
                children: (0, $.jsx)(X, {
                    id: `gizmo.readonly.duplicate`,
                    defaultMessage: `Duplicate`
                })
            })
        }), t[16] = h.isPending, t[17] = i, t[18] = S, t[19] = d, t[20] = D) : D = t[20];
        let O;
        t[21] !== n.gizmo.id || t[22] !== p || t[23] !== l ? (O = p != null && l != null && (0, $.jsx)(`div`, {
            className: `me-4 flex gap-2`,
            children: (0, $.jsx)(Je, {
                color: `secondary`,
                icon: Qe,
                onClick: () => {
                    ge(jt, {
                        pluginId: l,
                        gizmoId: n.gizmo.id,
                        accountId: p.accountId,
                        userId: p.userId
                    })
                },
                children: (0, $.jsx)(X, {
                    id: `gizmoReadOnly.viewSharing`,
                    defaultMessage: `View GPT Sharing`
                })
            })
        }), t[21] = n.gizmo.id, t[22] = p, t[23] = l, t[24] = O) : O = t[24];
        let k;
        t[25] !== E || t[26] !== D || t[27] !== O ? (k = (0, $.jsxs)(ln, {
            children: [E, D, O]
        }), t[25] = E, t[26] = D, t[27] = O, t[28] = k) : k = t[28];
        let ee;
        t[29] === m ? ee = t[30] : (ee = m && (0, $.jsx)(`div`, {
            className: `w-full max-w-3xl shrink-0 px-4 pt-4`,
            children: (0, $.jsx)(v, {
                type: `info`,
                isElevated: !1,
                content: (0, $.jsx)(`span`, {
                    role: `status`,
                    children: (0, $.jsx)(X, {
                        ...m
                    })
                })
            })
        }), t[29] = m, t[30] = ee);
        let A;
        t[31] === n ? A = t[32] : (A = (0, $.jsx)(sn, {
            children: (0, $.jsx)(cn, {
                children: (0, $.jsx)(Jt, {
                    displayGizmo: n
                })
            })
        }), t[31] = n, t[32] = A);
        let j;
        return t[33] !== ee || t[34] !== A || t[35] !== k ? (j = (0, $.jsxs)(on, {
            children: [k, ee, A]
        }), t[33] = ee, t[34] = A, t[35] = k, t[36] = j) : j = t[36], j
    }, fn = ({
        gizmoResource: e,
        refetchGizmo: t
    }) => {
        let n = e.gizmo.id,
            {
                data: r,
                refetch: i
            } = u({
                gizmoId: n
            });
        (0, nn.useEffect)(() => {
            t(), i()
        }, [t, i]);
        let a = e?.gizmo.live_version;
        return a == null || !r ? null : (0, $.jsx)(qt, {
            gizmoResource: e,
            currentVersion: a,
            gizmoVersions: r
        })
    }, pn = (e, t = [], n = [], r) => e ? [...n, ...t.filter(r)] : t, mn = (e, t) => h(e && t ? `bg-blue-400/10` : `bg-token-main-surface-secondary`), hn = o.textarea`mb-8 rounded-lg block h-96 w-full border-token-main-surface-tertiary bg-transparent p-2 font-mono text-xs text-token-text-primary`, gn = ({
        tool: e,
        compareToGizmo: t,
        displayGizmo: n,
        isDiffed: r
    }) => {
        let i = e,
            [a, o] = (0, nn.useState)(!1),
            s = !t?.tools?.find(e => x(e) && e.metadata.action_id === i.metadata.action_id),
            c = !n.tools.find(e => x(e) && e.metadata.action_id === i.metadata.action_id);
        return (0, $.jsxs)($.Fragment, {
            children: [(0, $.jsx)(ct, {
                isDisabled: !1,
                actionTool: i,
                className: _n(r, s, c),
                onShowActionsEditor: () => o(e => !e)
            }), a && (0, $.jsx)(hn, {
                readOnly: !0,
                value: i.metadata.raw_spec ?? ``
            })]
        })
    }, _n = (e, t, n) => h(e && t && `bg-blue-400/10!`, e && n && `bg-blue-400/10! text-token-text-secondary line-through opacity-50`)
}));
export {
    ht as a, At as i, vn as n, _t as o, xt as r, Kt as t
};
//# sourceMappingURL=a759e607-mrja5qflidiws1xz.js.map
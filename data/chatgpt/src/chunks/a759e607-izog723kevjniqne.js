const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/01fbf2d8-d0qwujbaaum045xv.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/8b34dbc2-gf9wnwcahty27ylx.js", "assets/conversation-small-fym1zmu9zimymmm1.js", "assets/30901919-e33mbl5u1y88w5wu.js", "assets/c470f5ab-m68dth1hatzjj8yh.js", "assets/0e5afe53-dl0nq2u2siu8c8q5.js", "assets/conversation-small-iha453gv.css", "assets/82782bc9-h658ejxn3ufkvr7a.js", "assets/d84f4c09-i2p8165ro5mhtomc.js", "assets/92b4bb27-kqzu96b4wlp8vsgl.js", "assets/83dae604-exf5hv8enx5fcto5.js", "assets/3d705e5d-is2nynkj0c3lzm98.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AB as n,
    AD as r,
    AT as i,
    At as a,
    B6 as o,
    C0 as s,
    CO as c,
    DV as l,
    EO as u,
    IB as d,
    Ji as f,
    K$ as p,
    K0 as m,
    My as h,
    O0 as g,
    OD as _,
    OO as v,
    QM as y,
    Qit as b,
    S0 as x,
    T0 as S,
    TD as C,
    W0 as w,
    X$ as T,
    Xi as E,
    ZM as D,
    _O as O,
    aE as k,
    b5 as A,
    bD as j,
    cD as M,
    cn as N,
    cw as P,
    dz as F,
    eD as I,
    fz as L,
    gO as ee,
    gS as te,
    hn as ne,
    i5 as re,
    iat as R,
    ih as z,
    it as ie,
    iw as ae,
    jy as B,
    kD as V,
    kT as H,
    lD as U,
    lS as oe,
    mw as W,
    nh as G,
    nt as K,
    o1 as q,
    oE as se,
    ot as ce,
    ow as le,
    pnt as ue,
    pst as J,
    pw as de,
    qE as fe,
    rh as pe,
    sw as me,
    tt as he,
    u1 as ge,
    vet as _e,
    w1 as ve,
    wO as ye,
    wst as be,
    xV as xe,
    y5 as Y,
    yV as Se,
    ynt as Ce,
    zet as we
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as Te,
    Bn as Ee,
    Ln as De,
    Nn as X,
    O as Oe,
    Pt as ke,
    Rn as Ae,
    Tn as je,
    Vn as Me,
    cn as Ne,
    ln as Pe,
    s as Fe,
    wn as Ie,
    zn as Le
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Eyn as Re,
    Fhn as ze,
    Lhn as Be,
    ai as Ve,
    jyn as He,
    nMt as Ue,
    ni as We,
    ob as Ge,
    rMt as Ke,
    sb as qe,
    ti as Je
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Bc as Ye,
    Jy as Xe,
    Nx as Ze,
    Px as Qe,
    Rc as $e,
    Vc as et,
    qy as tt,
    zc as nt
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    $f as rt,
    ep as it,
    hm as at,
    mm as ot
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
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
} from "./b7bb170e-osrrnv0d3hlakzay.js";

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
    h(), gt = Ee()
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
    let h = m,
        g = l && `bg-blue-400/10 p-1 -ms-1 rounded-lg`,
        _;
    t[7] === g ? _ = t[8] : (_ = Y(g), t[7] = g, t[8] = _);
    let v = !u && `cursor-pointer`,
        y = l && !h && `text-token-text-secondary opacity-50`,
        b;
    t[9] !== v || t[10] !== y ? (b = Y(`w-full`, v, y), t[9] = v, t[10] = y, t[11] = b) : b = t[11];
    let x = u || o,
        S = l && `border-gray-200 bg-blue-400/15 checked:border-blue-400! checked:bg-blue-400!`,
        C;
    t[12] === S ? C = t[13] : (C = Y(S), t[12] = S, t[13] = C);
    let w;
    t[14] !== i || t[15] !== f || t[16] !== a || t[17] !== u || t[18] !== r ? (w = () => {
        u || (f(r) ? a(i.filter(e => e.type !== r)) : a([...i, p(r)]))
    }, t[14] = i, t[15] = f, t[16] = a, t[17] = u, t[18] = r, t[19] = w) : w = t[19];
    let T;
    t[20] !== h || t[21] !== n || t[22] !== C || t[23] !== w || t[24] !== _ || t[25] !== b || t[26] !== x || t[27] !== r ? (T = (0, Z.jsx)(We, {
        containerClassName: _,
        labelClassName: b,
        id: r,
        label: n,
        checked: h,
        disabled: x,
        className: C,
        onChange: w
    }), t[20] = h, t[21] = n, t[22] = C, t[23] = w, t[24] = _, t[25] = b, t[26] = x, t[27] = r, t[28] = T) : T = t[28];
    let E = T;
    if (c != null) {
        let e;
        return t[29] !== E || t[30] !== c ? (e = (0, Z.jsx)(`div`, {
            className: `opacity-70`,
            children: (0, Z.jsx)(B, {
                side: `top`,
                label: c,
                children: E
            })
        }), t[29] = E, t[30] = c, t[31] = e) : e = t[31], e
    }
    return E
}

function yt(e) {
    return e === J.CONNECTOR ? {
        type: e,
        settings: {
            action_ids: []
        }
    } : {
        type: e
    }
}

function bt(e) {
    return e.type !== J.DALLE && e.type !== J.IMAGE_GEN
}

function xt(e) {
    "use forget";
    let t = (0, Et.c)(85),
        {
            enabledTools: n,
            canvasAvailable: r,
            diffedEnabledTools: i,
            onEnabledToolsChange: a,
            noConnectorsAvailable: o,
            isConnectorsLoading: s,
            readOnly: c
        } = e,
        l = c !== void 0 && c,
        u = Be(w.BrowsingAvailable),
        d = re(St),
        f = Le(),
        p = ve(),
        m;
    t[0] !== n || t[1] !== d ? (m = d ? n.filter(bt) : n, t[0] = n, t[1] = d, t[2] = m) : m = t[2];
    let h = m,
        g;
    t[3] === p ? g = t[4] : (g = p?.includes(w.SearchTool) && !p?.includes(w.SearchToolHoldout), t[3] = p, t[4] = g);
    let _ = g,
        v;
    t[5] !== r || t[6] !== p ? (v = r && p?.includes(w.GizmoCanvasToggle), t[5] = r, t[6] = p, t[7] = v) : v = t[7];
    let y = v,
        b = Be(w.WorkspaceGPTApps),
        x, S;
    t[8] !== n || t[9] !== d || t[10] !== a || t[11] !== l ? (x = () => {
        if (l || !d) return;
        let e = n.filter(bt);
        e.length !== n.length && a(e)
    }, S = [n, d, a, l], t[8] = n, t[9] = d, t[10] = a, t[11] = l, t[12] = x, t[13] = S) : (x = t[12], S = t[13]), Dt.useEffect(x, S);
    let C;
    t[14] !== s || t[15] !== o || t[16] !== b || t[17] !== h ? (C = Tt(h, o, s, b), t[14] = s, t[15] = o, t[16] = b, t[17] = h, t[18] = C) : C = t[18];
    let {
        showConnectors: T,
        connectorsDisabled: E,
        connectorsDisabledReason: D
    } = C, O;
    t[19] === _ ? O = t[20] : (O = _ ? (0, Z.jsx)(X, {
        id: `gs7/Pw`,
        defaultMessage: `Web Search`
    }) : (0, Z.jsx)(X, {
        id: `tNlef1`,
        defaultMessage: `Web Browsing`
    }), t[19] = _, t[20] = O);
    let k = O,
        A;
    t[21] !== u || t[22] !== _ ? (A = u ? void 0 : (0, Z.jsx)(X, {
        ..._ ? kt.disabledSearchToolTip : kt.disabledBrowsingToolTip
    }), t[21] = u, t[22] = _, t[23] = A) : A = t[23];
    let j = A,
        M;
    t[24] !== i || t[25] !== h ? (M = Ot(J.BROWSER, h, i), t[24] = i, t[25] = h, t[26] = M) : M = t[26];
    let N = M,
        P;
    t[27] !== i || t[28] !== h ? (P = Ot(J.CANVAS, h, i), t[27] = i, t[28] = h, t[29] = P) : P = t[29];
    let I = P,
        L;
    t[30] !== i || t[31] !== h ? (L = Ot(J.CONNECTOR, h, i), t[30] = i, t[31] = h, t[32] = L) : L = t[32];
    let ee = L,
        te;
    t[33] !== i || t[34] !== h ? (te = Ot(J.PYTHON, h, i), t[33] = i, t[34] = h, t[35] = te) : te = t[35];
    let ne = te,
        R;
    t[36] !== i || t[37] !== h ? (R = Ot(J.IMAGE_GEN, h, i), t[36] = i, t[37] = h, t[38] = R) : R = t[38];
    let z = R,
        ie = !u,
        ae = l ? void 0 : j,
        B;
    t[39] !== N || t[40] !== k || t[41] !== a || t[42] !== l || t[43] !== ie || t[44] !== ae || t[45] !== h ? (B = (0, Z.jsx)(vt, {
        label: k,
        toolType: J.BROWSER,
        enabledTools: h,
        onEnabledToolsChange: a,
        disabled: ie,
        readOnly: l,
        disabledTooltip: ae,
        isChanged: N
    }), t[39] = N, t[40] = k, t[41] = a, t[42] = l, t[43] = ie, t[44] = ae, t[45] = h, t[46] = B) : B = t[46];
    let V;
    t[47] !== E || t[48] !== D || t[49] !== ee || t[50] !== s || t[51] !== a || t[52] !== l || t[53] !== T || t[54] !== h ? (V = T && (0, Z.jsx)(Ct, {
        show: !l && !E && !s,
        children: (0, Z.jsx)(vt, {
            label: (0, Z.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [(0, Z.jsx)(X, {
                    id: `dfk5FX`,
                    defaultMessage: `Apps`
                }), (0, Z.jsx)(Ge, {}), s && (0, Z.jsx)(F, {
                    className: `text-token-text-tertiary h-4 w-4`
                })]
            }),
            toolType: J.CONNECTOR,
            enabledTools: h,
            onEnabledToolsChange: a,
            isChanged: ee,
            disabled: E,
            readOnly: l,
            disabledTooltip: l ? void 0 : D
        })
    }), t[47] = E, t[48] = D, t[49] = ee, t[50] = s, t[51] = a, t[52] = l, t[53] = T, t[54] = h, t[55] = V) : V = t[55];
    let H;
    t[56] !== y || t[57] !== I || t[58] !== a || t[59] !== l || t[60] !== h ? (H = y && (0, Z.jsx)(vt, {
        label: (0, Z.jsx)(X, {
            id: `kilwxz`,
            defaultMessage: `Canvas`
        }),
        toolType: J.CANVAS,
        enabledTools: h,
        onEnabledToolsChange: a,
        disabled: !y,
        readOnly: l,
        isChanged: I
    }), t[56] = y, t[57] = I, t[58] = a, t[59] = l, t[60] = h, t[61] = H) : H = t[61];
    let U;
    t[62] !== d || t[63] !== z || t[64] !== a || t[65] !== l || t[66] !== h ? (U = !d && (0, Z.jsx)(vt, {
        label: (0, Z.jsx)(X, {
            id: `QgCyev`,
            defaultMessage: `Image Generation`
        }),
        toolType: J.IMAGE_GEN,
        enabledTools: h,
        onEnabledToolsChange: a,
        isChanged: z,
        readOnly: l
    }), t[62] = d, t[63] = z, t[64] = a, t[65] = l, t[66] = h, t[67] = U) : U = t[67];
    let oe;
    t[68] === Symbol.for(`react.memo_cache_sentinel`) ? (oe = (0, Z.jsx)(X, {
        id: `8Lv1lK`,
        defaultMessage: `Code Interpreter & Data Analysis`
    }), t[68] = oe) : oe = t[68];
    let W;
    t[69] === f ? W = t[70] : (W = f.formatMessage(kt.codeInterpreterTooltip), t[69] = f, t[70] = W);
    let G;
    t[71] === W ? G = t[72] : (G = (0, Z.jsxs)(`div`, {
        className: `flex items-center`,
        children: [oe, (0, Z.jsx)(ht, {
            description: W
        })]
    }), t[71] = W, t[72] = G);
    let K;
    t[73] !== ne || t[74] !== a || t[75] !== l || t[76] !== G || t[77] !== h ? (K = (0, Z.jsx)(vt, {
        label: G,
        toolType: J.PYTHON,
        enabledTools: h,
        onEnabledToolsChange: a,
        isChanged: ne,
        readOnly: l
    }), t[73] = ne, t[74] = a, t[75] = l, t[76] = G, t[77] = h, t[78] = K) : K = t[78];
    let q;
    return t[79] !== B || t[80] !== V || t[81] !== H || t[82] !== U || t[83] !== K ? (q = (0, Z.jsxs)(`div`, {
        className: `flex flex-col items-start gap-2`,
        children: [B, V, H, U, K]
    }), t[79] = B, t[80] = V, t[81] = H, t[82] = U, t[83] = K, t[84] = q) : q = t[84], q
}

function St() {
    return p()
}

function Ct(e) {
    "use forget";
    let t = (0, Et.c)(6),
        {
            children: n,
            show: r
        } = e,
        i = ce(he.hasSeenGptAppsCapabilityTooltip);
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
    return t[4] === n ? s = t[5] : (s = (0, Z.jsx)(ot, {
        announcementKey: he.hasSeenGptAppsCapabilityTooltip,
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
    return ie(he.hasSeenGptAppsCapabilityTooltip)
}

function Tt(e, t, n, r) {
    return ue(`2218609681`) ? r === !1 ? {
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
    } : e.some(e => e.type === J.JIT_PLUGIN) ? {
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
        Et = Ie(), be(), qe(), ze(), h(), Ve(), at(), o(), L(), ge(), m(), K(), Ce(), A(), Dt = t(Me()), Ae(), _t(), Z = Ee(), Ot = (e, t, n) => n ? t?.some(t => t.type === e) !== n?.some(t => t.type === e) : !1, kt = De({
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
        s(), Pe(), jt = x(() => Ne(() => import(`./01fbf2d8-d0qwujbaaum045xv.js`).then(e => e.GizmoSharingReadOnlyModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]))), x(() => Ne(() => import(`./01fbf2d8-d0qwujbaaum045xv.js`).then(e => e.GizmoSharingReadOnlyModalView), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])))
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
    z(), h(), A(), a(), Ft = t(Me()), Ae(), se(), Q = Ee(), It = (0, Ft.memo)(function({
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
    }), Lt = k.div`flex h-full w-full max-w-3xs flex-col overflow-y-scroll bg-token-sidebar-surface-primary px-2 py-6`, Rt = ({
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
            className: Y(`icon flex items-center justify-center rounded-full text-[8px] text-white`, G(t)),
            children: pe(e)
        })]
    }), zt = k.div`flex w-full flex-col rounded-lg px-3 py-2 text-base hover:cursor-pointer hover:bg-token-sidebar-surface-tertiary`, Bt = k.div`px-3 text-xs font-medium text-token-text-secondary`, Vt = k.div`flex flex-col space-y-1`, Ht = k.div`mb-8 flex flex-col space-y-2`, Ut = ({
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
            className: Y(n === o && `bg-token-sidebar-surface-tertiary`),
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
                }), (0, Q.jsx)(ne, {
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
    let t = re(v),
        n = re(T),
        i = U(e),
        {
            hasEditPermission: a,
            hasWorkspacePermission: o,
            isLoading: s
        } = C(i.data),
        c = t && n != null && !s && !r(i.data?.gizmo.migrated_plugin_id) && (a || o && i.data == null && i.error instanceof b && i.error.status === 404),
        l = U(c ? e : void 0, !0),
        {
            data: u,
            isLoading: d,
            refetch: f
        } = c ? l : i,
        p = u?.gizmo?.current_user_permission,
        m = !t && (p?.can_write ?? !1) && !r(u?.gizmo.migrated_plugin_id),
        h = p?.can_view_config ?? !1;
    return !u || d ? null : m ? (0, $.jsx)(fn, {
        gizmoResource: u,
        refetchGizmo: f
    }) : h ? (0, $.jsx)(dn, {
        gizmoResource: u
    }) : null
}

function qt({
    gizmoResource: e,
    currentVersion: t,
    gizmoVersions: r
}) {
    let i = ke(),
        a = e.gizmo.id,
        [o, s] = (0, nn.useState)(t),
        [c, u] = (0, nn.useState)(!1),
        [d, f] = (0, nn.useState)(!1),
        p = () => {
            i(o ? an(a, o) : n(a))
        },
        m = () => {
            if (o !== t && e.tools.find(e => l(e) && e.metadata.auth?.type !== _e.None)) {
                f(!0);
                return
            }
            i(an(a, o))
        },
        h = () => {
            o === t && t > 1 && s(t - 1), c && s(t), u(!c)
        },
        g = t > 1;
    (0, nn.useEffect)(() => {
        o === t && u(!1)
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
                        className: Y(`btn rounded-full border transition-colors`, c ? Y(`text-token-text-primary disabled:text-token-text-tertiary bg-token-main-surface-secondary-selected hover:bg-token-surface-hover focus-visible:bg-token-surface-hover disabled:opacity-40`, `border-transparent`) : `border-token-border-default hover:bg-token-surface-hover bg-transparent`),
                        onClick: h,
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
                        onClick: m,
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
                gizmoVersions: r
            }), v && (0, $.jsx)(`div`, {
                className: `flex h-full w-full grow flex-col items-center justify-center`,
                children: (0, $.jsx)(F, {})
            }), _ && (0, $.jsxs)(cn, {
                children: [(0, $.jsx)(Jt, {
                    displayGizmo: _,
                    isComparing: c,
                    gizmoVersions: r
                }), c && (0, $.jsx)(Jt, {
                    displayGizmo: e,
                    compareToGizmo: _,
                    setIsComparing: u,
                    isComparing: !0,
                    gizmoVersions: r
                })]
            })]
        }), d && (0, $.jsx)(en, {
            onClose: () => f(!1),
            onContinue: p
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
        l = re($t),
        u;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (u = q()?.hasPaidFeatures(), t[0] = u) : u = t[0];
    let d = u,
        f = r.gizmo.default_model !== i?.gizmo.default_model,
        p = r.gizmo.display.name !== i?.gizmo.display.name,
        m = r.gizmo.display.description !== i?.gizmo.display.description,
        h = r.gizmo.instructions !== i?.gizmo.instructions,
        g = n && !!i,
        _, v, b, x, S, C, w, T, E, D, O, k, A, j, M, P, F;
    if (t[1] !== i || t[2] !== r || t[3] !== c || t[4] !== o?.items || t[5] !== s || t[6] !== n || t[7] !== f || t[8] !== m || t[9] !== g || t[10] !== p || t[11] !== h || t[12] !== l || t[13] !== a) {
        let e;
        t[31] === i?.gizmo ? e = t[32] : (e = e => !i?.gizmo.display.prompt_starters?.includes(e), t[31] = i?.gizmo, t[32] = e);
        let u = pn(g, r.gizmo.display.prompt_starters ?? [], i?.gizmo.display.prompt_starters ?? [], e),
            I = r.tools?.flatMap(Qt) ?? [],
            L = i?.tools?.flatMap(Zt) ?? [],
            ee;
        t[33] === i?.files ? ee = t[34] : (ee = e => !i?.files?.find(t => t.id === e.id), t[33] = i?.files, t[34] = ee);
        let te = pn(g, r.files ?? [], i?.files ?? [], ee),
            ne = pn(g, I, L, e => !L.find(t => t.metadata.action_id === e.metadata.action_id)),
            re = r.gizmo.display.profile_picture_url !== i?.gizmo.display.profile_picture_url,
            R;
        t[35] !== r.gizmo.version || t[36] !== o?.items ? (R = o?.items.find(e => e.version === r.gizmo.version)?.author, t[35] = r.gizmo.version, t[36] = o?.items, t[37] = R) : R = t[37];
        let z = R;
        _ = N.div, t[38] === Symbol.for(`react.memo_cache_sentinel`) ? (S = {
            opacity: 0,
            x: 10
        }, C = {
            opacity: 1,
            x: 0
        }, w = {
            opacity: 0,
            x: 10
        }, T = {
            duration: .2
        }, t[38] = S, t[39] = C, t[40] = w, t[41] = T) : (S = t[38], C = t[39], w = t[40], T = t[41]);
        let ie = g && `border-s`;
        t[42] === ie ? E = t[43] : (E = Y(`relative flex min-w-0 flex-1 grow justify-center overflow-auto`, ie), t[42] = ie, t[43] = E), D = `flex w-full max-w-2xl flex-col px-4 py-8 text-sm`;
        let ae;
        t[44] === Symbol.for(`react.memo_cache_sentinel`) ? (ae = {
            opacity: 0
        }, t[44] = ae) : ae = t[44];
        let B = +!!n,
            V;
        t[45] === B ? V = t[46] : (V = {
            opacity: B
        }, t[45] = B, t[46] = V);
        let H = n ? .2 : 0,
            U;
        t[47] === H ? U = t[48] : (U = {
            duration: H
        }, t[47] = H, t[48] = U);
        let W;
        t[49] === i ? W = t[50] : (W = (0, $.jsx)(`div`, {
            className: `text-token-text-tertiary text-base`,
            children: i ? (0, $.jsx)(X, {
                id: `gizmo.readonly.currentVersion`,
                defaultMessage: `Current`
            }) : (0, $.jsx)(X, {
                id: `gizmo.readonly.previous`,
                defaultMessage: `Previous`
            })
        }), t[49] = i, t[50] = W);
        let G;
        t[51] !== r.gizmo.version_updated_at || t[52] !== s ? (G = r.gizmo.version_updated_at && (0, $.jsx)(`div`, {
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
        }), t[51] = r.gizmo.version_updated_at, t[52] = s, t[53] = G) : G = t[53];
        let K;
        t[54] === z ? K = t[55] : (K = z && (0, $.jsx)(Rt, {
            name: z.user_name ?? ``,
            userId: z.user_id
        }), t[54] = z, t[55] = K);
        let q;
        t[56] !== i || t[57] !== a ? (q = i && a && (0, $.jsx)(me, {
            onClick: () => a(!1)
        }), t[56] = i, t[57] = a, t[58] = q) : q = t[58];
        let se;
        t[59] !== G || t[60] !== K || t[61] !== q ? (se = (0, $.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [G, K, q]
        }), t[59] = G, t[60] = K, t[61] = q, t[62] = se) : se = t[62], t[63] !== V || t[64] !== U || t[65] !== W || t[66] !== se ? (O = (0, $.jsxs)(N.div, {
            initial: ae,
            animate: V,
            transition: U,
            className: `mb-4 flex w-full items-center justify-between`,
            children: [W, se]
        }), t[63] = V, t[64] = U, t[65] = W, t[66] = se, t[67] = O) : O = t[67];
        let ce = r.gizmo.display.profile_picture_url,
            le = re && i && `border-opacity-10 rounded-full border-4 border-blue-400`,
            ue;
        t[68] === le ? ue = t[69] : (ue = Y(`h-20 w-20`, le), t[68] = le, t[69] = ue), t[70] !== r.gizmo.display.profile_picture_url || t[71] !== ue ? (k = (0, $.jsx)(ft, {
            className: `self-center`,
            children: (0, $.jsx)(Ue, {
                src: ce,
                isFirstParty: !1,
                className: ue,
                showLoading: !0
            })
        }), t[70] = r.gizmo.display.profile_picture_url, t[71] = ue, t[72] = k) : k = t[72];
        let J;
        t[73] === Symbol.for(`react.memo_cache_sentinel`) ? (J = (0, $.jsx)(X, {
            id: `gizmo.readonly.nameLabel`,
            defaultMessage: `Name`
        }), t[73] = J) : J = t[73];
        let de = `${c}-name`,
            fe;
        t[74] === de ? fe = t[75] : (fe = (0, $.jsx)(ut, {
            label: J,
            htmlFor: de
        }), t[74] = de, t[75] = fe);
        let pe = `${c}-name`,
            he = r.gizmo.display.name ?? ``,
            ge;
        t[76] !== g || t[77] !== p ? (ge = mn(g, p), t[76] = g, t[77] = p, t[78] = ge) : ge = t[78];
        let _e;
        t[79] !== pe || t[80] !== he || t[81] !== ge ? (_e = (0, $.jsx)(pt, {
            id: pe,
            name: `name`,
            type: `text`,
            value: he,
            readOnly: !0,
            className: ge
        }), t[79] = pe, t[80] = he, t[81] = ge, t[82] = _e) : _e = t[82], t[83] !== fe || t[84] !== _e ? (A = (0, $.jsxs)(ft, {
            children: [fe, _e]
        }), t[83] = fe, t[84] = _e, t[85] = A) : A = t[85];
        let ve;
        t[86] === Symbol.for(`react.memo_cache_sentinel`) ? (ve = (0, $.jsx)(X, {
            id: `gizmo.readonly.descriptionLabel`,
            defaultMessage: `Description`
        }), t[86] = ve) : ve = t[86];
        let ye = `${c}-description`,
            be;
        t[87] === ye ? be = t[88] : (be = (0, $.jsx)(ut, {
            label: ve,
            htmlFor: ye
        }), t[87] = ye, t[88] = be);
        let xe = `${c}-description`,
            Ce = r.gizmo.display.description ?? ``,
            we;
        t[89] !== m || t[90] !== g ? (we = mn(g, m), t[89] = m, t[90] = g, t[91] = we) : we = t[91];
        let Te;
        t[92] !== xe || t[93] !== Ce || t[94] !== we ? (Te = (0, $.jsx)(pt, {
            id: xe,
            name: `description`,
            type: `text`,
            value: Ce,
            readOnly: !0,
            className: we
        }), t[92] = xe, t[93] = Ce, t[94] = we, t[95] = Te) : Te = t[95], t[96] !== be || t[97] !== Te ? (j = (0, $.jsxs)(ft, {
            children: [be, Te]
        }), t[96] = be, t[97] = Te, t[98] = j) : j = t[98];
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
        t[102] !== g || t[103] !== h ? (Me = Y(`resize-none`, mn(g, h)), t[102] = g, t[103] = h, t[104] = Me) : Me = t[104];
        let Ne;
        t[105] !== ke || t[106] !== Ae || t[107] !== Me ? (Ne = (0, $.jsx)(lt, {
            id: ke,
            name: `instructions`,
            rows: 8,
            value: Ae,
            readOnly: !0,
            className: Me
        }), t[105] = ke, t[106] = Ae, t[107] = Me, t[108] = Ne) : Ne = t[108], t[109] !== Oe || t[110] !== Ne ? (M = (0, $.jsxs)(ft, {
            children: [Oe, Ne]
        }), t[109] = Oe, t[110] = Ne, t[111] = M) : M = t[111], P = u.length > 0 && (0, $.jsxs)(ft, {
            children: [(0, $.jsx)(ut, {
                label: (0, $.jsx)(`span`, {
                    id: `${c}-prompt-starters-label`,
                    children: (0, $.jsx)(X, {
                        id: `gizmo.readonly.conversationStartersLabel`,
                        defaultMessage: `Conversation starters`
                    })
                })
            }), u.map((e, t) => {
                let n = !i?.gizmo.display.prompt_starters?.includes(e),
                    a = !r.gizmo.display.prompt_starters?.includes(e);
                return (0, $.jsx)(pt, {
                    name: `prompt-starter`,
                    "aria-labelledby": `${c}-prompt-starters-label`,
                    type: `text`,
                    value: e,
                    readOnly: !0,
                    className: Y(`bg-token-main-surface-secondary mb-2 resize-none`, _n(g, n, a))
                }, t)
            })]
        }), F = te.length > 0 && (0, $.jsxs)(ft, {
            children: [(0, $.jsx)(ut, {
                label: (0, $.jsx)(X, {
                    id: `gizmo.readonly.knowledgeLabel`,
                    defaultMessage: `Knowledge`
                })
            }), (0, $.jsx)(`div`, {
                className: `flex flex-wrap gap-1`,
                children: te.map((e, t) => {
                    let n = !i?.files?.find(t => t.id === e.id),
                        a = !r.files?.find(t => t.id === e.id);
                    return (0, $.jsx)(rt, {
                        file: Se(e),
                        fileId: e.file_id ?? void 0,
                        gizmoId: r.gizmo.id,
                        className: _n(g, n, a)
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
        t[113] === r.tools ? Fe = t[114] : (Fe = oe(r.tools), t[113] = r.tools, t[114] = Fe);
        let Ie;
        t[115] !== i?.tools || t[116] !== r.tools ? (Ie = r.tools.some(Xt) || (i?.tools.some(Yt) ?? !1), t[115] = i?.tools, t[116] = r.tools, t[117] = Ie) : Ie = t[117];
        let Le;
        t[118] === i ? Le = t[119] : (Le = i == null ? void 0 : oe(i.tools), t[118] = i, t[119] = Le), t[120] !== Fe || t[121] !== Ie || t[122] !== Le ? (v = (0, $.jsxs)(ft, {
            children: [Pe, (0, $.jsx)(xt, {
                enabledTools: Fe,
                canvasAvailable: Ie,
                diffedEnabledTools: Le,
                onEnabledToolsChange: y,
                noConnectorsAvailable: !1,
                isConnectorsLoading: !1,
                readOnly: !0
            })]
        }), t[120] = Fe, t[121] = Ie, t[122] = Le, t[123] = v) : v = t[123], t[124] !== r.gizmo.default_model || t[125] !== c || t[126] !== s || t[127] !== f || t[128] !== g || t[129] !== l ? (b = d && (0, $.jsxs)(ft, {
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
                value: r.gizmo.default_model ? l.models.get(r.gizmo.default_model)?.title ?? r.gizmo.default_model : s.formatMessage({
                    id: `gizmoEditor.noneOption`,
                    defaultMessage: `No Recommended Model - Users will use any model they prefer`
                }),
                readOnly: !0,
                className: mn(g, f)
            })]
        }), t[124] = r.gizmo.default_model, t[125] = c, t[126] = s, t[127] = f, t[128] = g, t[129] = l, t[130] = b) : b = t[130], x = !!ne.length && (0, $.jsxs)(ft, {
            children: [(0, $.jsx)(ut, {
                label: (0, $.jsx)(X, {
                    id: `gizmo.readonly.actionsLabel`,
                    defaultMessage: `Actions`
                })
            }), (0, $.jsx)(`div`, {
                className: `flex flex-col gap-1`,
                children: ne.map((e, t) => (0, $.jsx)(gn, {
                    tool: e,
                    isDiffed: g,
                    compareToGizmo: i,
                    displayGizmo: r
                }, t))
            })]
        }), t[1] = i, t[2] = r, t[3] = c, t[4] = o?.items, t[5] = s, t[6] = n, t[7] = f, t[8] = m, t[9] = g, t[10] = p, t[11] = h, t[12] = l, t[13] = a, t[14] = _, t[15] = v, t[16] = b, t[17] = x, t[18] = S, t[19] = C, t[20] = w, t[21] = T, t[22] = E, t[23] = D, t[24] = O, t[25] = k, t[26] = A, t[27] = j, t[28] = M, t[29] = P, t[30] = F
    } else _ = t[14], v = t[15], b = t[16], x = t[17], S = t[18], C = t[19], w = t[20], T = t[21], E = t[22], D = t[23], O = t[24], k = t[25], A = t[26], j = t[27], M = t[28], P = t[29], F = t[30];
    let I;
    t[131] !== v || t[132] !== b || t[133] !== x || t[134] !== D || t[135] !== O || t[136] !== k || t[137] !== A || t[138] !== j || t[139] !== M || t[140] !== P || t[141] !== F ? (I = (0, $.jsxs)(`div`, {
        className: D,
        children: [O, k, A, j, M, P, F, v, b, x]
    }), t[131] = v, t[132] = b, t[133] = x, t[134] = D, t[135] = O, t[136] = k, t[137] = A, t[138] = j, t[139] = M, t[140] = P, t[141] = F, t[142] = I) : I = t[142];
    let L;
    return t[143] !== _ || t[144] !== S || t[145] !== C || t[146] !== w || t[147] !== T || t[148] !== E || t[149] !== I ? (L = (0, $.jsx)(_, {
        initial: S,
        animate: C,
        exit: w,
        transition: T,
        className: E,
        children: I
    }), t[143] = _, t[144] = S, t[145] = C, t[146] = w, t[147] = T, t[148] = E, t[149] = I, t[150] = L) : L = t[150], L
}

function Yt(e) {
    return e.type === J.CANVAS
}

function Xt(e) {
    return e.type === J.CANVAS
}

function Zt(e) {
    return l(e) ? [e] : []
}

function Qt(e) {
    return l(e) ? [e] : []
}

function $t() {
    return Re({
        isGizmo: !0
    })
}

function en({
    onClose: e,
    onContinue: t
}) {
    let [n, r] = (0, nn.useState)(!1);
    return (0, $.jsx)(ae, {
        testId: `modal-gizmo-auth-restore`,
        isOpen: !0,
        onClose: e,
        type: `warning`,
        showCloseButton: !0,
        title: (0, $.jsx)(X, {
            id: `gizmoReadOnly.authModalWarningTitle`,
            defaultMessage: `Reset Authentication for Custom Actions`
        }),
        primaryButton: (0, $.jsx)(H, {
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
        secondaryButton: (0, $.jsx)(H, {
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
    tn = Ie(), be(), we(), i(), st(), E(), P(), Xe(), W(), et(), nt(), Ze(), le(), S(), h(), it(), Ke(), fe(), At(), O(), j(), Ve(), xe(), V(), Mt(), Gt(), te(), He(), o(), ye(), L(), ge(), R(), d(), Fe(), A(), D(), a(), nn = t(Me()), Ae(), Te(), se(), dt(), $ = Ee(), rn = ({
        gizmoId: e,
        version: t,
        skip: n = !1
    }) => Oe({
        queryFn: async () => ee.getVersion({
            gizmoId: e,
            version: t
        }),
        queryKey: [`gizmo`, `version`, {
            gizmoId: e,
            version: t
        }],
        enabled: !n
    }), an = (e, t) => `/gpts/editor/${e}?version=${t}`, on = k.div`flex h-screen w-full flex-col items-center bg-token-bg-primary dark:bg-token-bg-secondary-surface text-token-text-primary`, sn = k.div`flex w-full grow overflow-hidden`, cn = k.div`flex h-full grow flex-wrap items-start justify-between gap-4 overflow-auto`, ln = k.div`sticky top-0 flex h-16 w-full items-center justify-between gap-2 border-b border-token-border-medium bg-token-bg-primary dark:bg-token-bg-secondary-surface px-3 py-3`, un = e => {
        "use forget";
        let t = (0, tn.c)(9),
            {
                children: n,
                to: r
            } = e,
            i = ke(),
            a;
        t[0] !== i || t[1] !== r ? (a = () => i(r ?? -1), t[0] = i, t[1] = r, t[2] = a) : a = t[2];
        let o;
        t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, $.jsx)(de, {
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
            i = ke(),
            a = re(u),
            o = re(v),
            {
                hasEditPermission: s,
                hasWorkspacePermission: l
            } = C(n),
            d = n.gizmo.migrated_plugin_id,
            p;
        t[0] === d ? p = t[1] : (p = r(d), t[0] = d, t[1] = p);
        let m = p,
            h;
        t[2] !== n.gizmo.author || t[3] !== n.gizmo.workspace_id || t[4] !== l || t[5] !== m ? (h = () => {
            let e = T(),
                t = e?.normalizedAccountUserId;
            return m && l && e != null && t != null && n.gizmo.author.user_id === t && (n.gizmo.workspace_id ?? null) === (e.isWorkspaceAccount() ? e.id : null) ? {
                accountId: e.id,
                userId: t
            } : null
        }, t[2] = n.gizmo.author, t[3] = n.gizmo.workspace_id, t[4] = l, t[5] = m, t[6] = h) : h = t[6];
        let y = re(h),
            b = m ? _.notice : o && s ? c.readOnlyNotice : null,
            x = I(),
            S = n.gizmo.id,
            w;
        t[7] !== x || t[8] !== S || t[9] !== i ? (w = async () => {
            let e = await x.mutateAsync({
                gizmoId: S
            });
            e.gizmo.id && i(`/gpts/editor/${e.gizmo.id}`)
        }, t[7] = x, t[8] = S, t[9] = i, t[10] = w) : w = t[10];
        let E = w,
            D = m ? `/gpts/mine` : void 0,
            O;
        t[11] === m ? O = t[12] : (O = m ? (0, $.jsx)(X, {
            id: `gizmoReadOnly.backToMyGpts`,
            defaultMessage: `My GPTs`
        }) : (0, $.jsx)(X, {
            id: `gizmoReadOnly.configurationTitle`,
            defaultMessage: `Configuration`
        }), t[11] = m, t[12] = O);
        let k;
        t[13] !== D || t[14] !== O ? (k = (0, $.jsx)(un, {
            to: D,
            children: O
        }), t[13] = D, t[14] = O, t[15] = k) : k = t[15];
        let A;
        t[16] !== x.isPending || t[17] !== a || t[18] !== E || t[19] !== m ? (A = !m && !a && (0, $.jsx)(`div`, {
            className: `me-4 flex gap-2`,
            children: (0, $.jsx)(Je, {
                color: `secondary`,
                loading: x.isPending,
                onClick: E,
                children: (0, $.jsx)(X, {
                    id: `gizmo.readonly.duplicate`,
                    defaultMessage: `Duplicate`
                })
            })
        }), t[16] = x.isPending, t[17] = a, t[18] = E, t[19] = m, t[20] = A) : A = t[20];
        let j;
        t[21] !== n.gizmo.id || t[22] !== y || t[23] !== d ? (j = y != null && d != null && (0, $.jsx)(`div`, {
            className: `me-4 flex gap-2`,
            children: (0, $.jsx)(Je, {
                color: `secondary`,
                icon: Qe,
                onClick: () => {
                    g(jt, {
                        pluginId: d,
                        gizmoId: n.gizmo.id,
                        accountId: y.accountId,
                        userId: y.userId
                    })
                },
                children: (0, $.jsx)(X, {
                    id: `gizmoReadOnly.viewSharing`,
                    defaultMessage: `View GPT Sharing`
                })
            })
        }), t[21] = n.gizmo.id, t[22] = y, t[23] = d, t[24] = j) : j = t[24];
        let M;
        t[25] !== k || t[26] !== A || t[27] !== j ? (M = (0, $.jsxs)(ln, {
            children: [k, A, j]
        }), t[25] = k, t[26] = A, t[27] = j, t[28] = M) : M = t[28];
        let N;
        t[29] === b ? N = t[30] : (N = b && (0, $.jsx)(`div`, {
            className: `w-full max-w-3xl shrink-0 px-4 pt-4`,
            children: (0, $.jsx)(f, {
                type: `info`,
                isElevated: !1,
                content: (0, $.jsx)(`span`, {
                    role: `status`,
                    children: (0, $.jsx)(X, {
                        ...b
                    })
                })
            })
        }), t[29] = b, t[30] = N);
        let P;
        t[31] === n ? P = t[32] : (P = (0, $.jsx)(sn, {
            children: (0, $.jsx)(cn, {
                children: (0, $.jsx)(Jt, {
                    displayGizmo: n
                })
            })
        }), t[31] = n, t[32] = P);
        let F;
        return t[33] !== N || t[34] !== P || t[35] !== M ? (F = (0, $.jsxs)(on, {
            children: [M, N, P]
        }), t[33] = N, t[34] = P, t[35] = M, t[36] = F) : F = t[36], F
    }, fn = ({
        gizmoResource: e,
        refetchGizmo: t
    }) => {
        let n = e.gizmo.id,
            {
                data: r,
                refetch: i
            } = M({
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
    }, pn = (e, t = [], n = [], r) => e ? [...n, ...t.filter(r)] : t, mn = (e, t) => Y(e && t ? `bg-blue-400/10` : `bg-token-main-surface-secondary`), hn = k.textarea`mb-8 rounded-lg block h-96 w-full border-token-main-surface-tertiary bg-transparent p-2 font-mono text-xs text-token-text-primary`, gn = ({
        tool: e,
        compareToGizmo: t,
        displayGizmo: n,
        isDiffed: r
    }) => {
        let i = e,
            [a, o] = (0, nn.useState)(!1),
            s = !t?.tools?.find(e => l(e) && e.metadata.action_id === i.metadata.action_id),
            c = !n.tools.find(e => l(e) && e.metadata.action_id === i.metadata.action_id);
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
    }, _n = (e, t, n) => Y(e && t && `bg-blue-400/10!`, e && n && `bg-blue-400/10! text-token-text-secondary line-through opacity-50`)
}));
export {
    ht as a, At as i, vn as n, _t as o, xt as r, Kt as t
};
//# sourceMappingURL=a759e607-izog723kevjniqne.js.map
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as n,
    Dit as r,
    Mh as i,
    b5 as a,
    dz as o,
    fU as s,
    fz as c,
    hh as l,
    iw as u,
    jh as d,
    kT as f,
    kit as p,
    mh as m,
    o1 as h,
    ow as g,
    pU as _,
    u1 as v,
    y5 as y
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as b,
    Bn as x,
    Ln as S,
    N as ee,
    Nn as C,
    O as te,
    Rn as w,
    Ut as T,
    Vn as E,
    p as D,
    q as ne,
    s as O,
    wn as k,
    zn as re
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $C as A,
    $vt as j,
    Bmn as M,
    Bst as N,
    CHn as P,
    Fst as ie,
    Gvt as F,
    J8t as I,
    Kvt as L,
    Lmn as R,
    Lst as z,
    Rmn as B,
    T6t as V,
    THn as H,
    Xvt as U,
    Y8t as W,
    Yvt as G,
    Zvt as ae,
    a$ as oe,
    ahn as se,
    bi as ce,
    chn as K,
    d$ as le,
    dhn as ue,
    ew as q,
    fhn as de,
    i$ as fe,
    ihn as pe,
    j6t as me,
    lhn as he,
    m$ as ge,
    nyt as _e,
    ohn as ve,
    p$ as ye,
    rhn as be,
    ryt as xe,
    shn as Se,
    tyt as Ce,
    u$ as we,
    uhn as Te,
    vi as Ee,
    wHn as J,
    zmn as De,
    zst as Oe
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Cr as ke,
    DC as Ae,
    EC as je,
    Gh as Me,
    Kc as Ne,
    Kh as Pe,
    Qv as Fe,
    Zv as Ie,
    af as Le,
    if as Re,
    of as ze,
    qc as Be,
    rf as Ve,
    wr as He
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    Qo as Ue,
    is as We
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    Fc as Ge,
    Ic as Ke,
    Lc as qe
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    i as Je,
    r as Ye
} from "./daf50f1d-3jb74ywop5yrlbqs.js";
import {
    n as Xe,
    t as Ze
} from "./46158937-pbog3nne63shqdhv.js";
import {
    n as Qe,
    t as $e
} from "./d646af3b-dr542i1ky1qkem4p.js";
import {
    r as et,
    t as tt
} from "./8c6976e5-ibz7fcap50r267b6.js";
var nt, rt, it, at, ot = e((() => {
    ue(), Te(), K(), ve(), pe(), De(), R(), nt = de({
        id: `admin-skill-overflow`,
        icons: {
            download: {
                normal: Se,
                small: he
            },
            share: {
                normal: be,
                small: se
            },
            trash: {
                normal: B,
                small: M
            }
        }
    }), rt = nt.Download, it = nt.Share, at = nt.Trash
}));

function st(e) {
    "use forget";
    let t = (0, ct.c)(29),
        {
            canDownload: n,
            disabled: r,
            onDownload: a,
            onChangeAccess: o,
            onChangeOwner: s,
            onDelete: c
        } = e,
        l = re(),
        u;
    t[0] === l ? u = t[1] : (u = l.formatMessage(ut.downloadSkill), t[0] = l, t[1] = u);
    let d = r || !n,
        f;
    t[2] !== a || t[3] !== u || t[4] !== d ? (f = (0, lt.jsx)(J.Item, {
        icon: rt,
        label: u,
        onClick: a,
        disabled: d
    }), t[2] = a, t[3] = u, t[4] = d, t[5] = f) : f = t[5];
    let p;
    t[6] === l ? p = t[7] : (p = l.formatMessage(ut.changeAccess), t[6] = l, t[7] = p);
    let m;
    t[8] !== r || t[9] !== o || t[10] !== p ? (m = (0, lt.jsx)(J.Item, {
        icon: it,
        label: p,
        onClick: o,
        disabled: r
    }), t[8] = r, t[9] = o, t[10] = p, t[11] = m) : m = t[11];
    let h;
    t[12] === l ? h = t[13] : (h = l.formatMessage(ut.changeOwner), t[12] = l, t[13] = h);
    let g;
    t[14] !== r || t[15] !== s || t[16] !== h ? (g = (0, lt.jsx)(J.Item, {
        icon: i,
        label: h,
        onClick: s,
        disabled: r
    }), t[14] = r, t[15] = s, t[16] = h, t[17] = g) : g = t[17];
    let _;
    t[18] === l ? _ = t[19] : (_ = l.formatMessage(ut.deleteSkill), t[18] = l, t[19] = _);
    let v;
    t[20] !== r || t[21] !== c || t[22] !== _ ? (v = (0, lt.jsx)(J.Item, {
        icon: at,
        color: `danger`,
        label: _,
        onClick: c,
        disabled: r
    }), t[20] = r, t[21] = c, t[22] = _, t[23] = v) : v = t[23];
    let y;
    return t[24] !== f || t[25] !== m || t[26] !== g || t[27] !== v ? (y = (0, lt.jsxs)(lt.Fragment, {
        children: [f, m, g, v]
    }), t[24] = f, t[25] = m, t[26] = g, t[27] = v, t[28] = y) : y = t[28], y
}
var ct, lt, ut, dt = e((() => {
    ct = k(), H(), d(), ot(), w(), lt = x(), ut = S({
        downloadSkill: {
            id: `admin.skills.downloadSkill`,
            defaultMessage: `Download`
        },
        changeAccess: {
            id: `admin.skills.changeAccess`,
            defaultMessage: `Change who has access`
        },
        changeOwner: {
            id: `admin.skills.changeOwner`,
            defaultMessage: `Change owner`
        },
        deleteSkill: {
            id: `admin.skills.deleteSkill`,
            defaultMessage: `Delete skill`
        }
    })
}));

function ft(e) {
    let t = e.queryKey,
        n = U(),
        r = t[n.length];
    return t.length === n.length + 1 && n.every((e, n) => t[n] === e) && typeof r == `object` && !!r && !Array.isArray(r)
}

function pt(e) {
    return e === `asc` ? `desc` : `asc`
}

function mt(e) {
    let {
        skill: t
    } = e;
    return L(t.id)
}

function ht(e) {
    let {
        skill: t,
        ownerAccountUserId: n
    } = e;
    return F(t.id, n)
}

function gt() {}

function _t(e, t) {
    return (0, Z.jsx)(Gt, {}, t)
}

function vt(e) {
    e.stopPropagation()
}

function yt(e) {
    e.stopPropagation()
}

function bt(e) {
    return e.kind === `user`
}

function xt(e) {
    return e.kind === `user`
}

function St() {
    return `h-auto! min-h-[40px]! max-h-[120px] items-start overflow-y-auto p-1! cursor-text!`
}

function Ct() {
    return `z-[80]`
}

function wt() {
    return `bg-token-bg-primary`
}
var Y, X, Z, Tt, Et, Dt, Ot, kt, At, jt, Mt, Nt, Pt, Ft, It, Lt, Rt, zt, Bt, Vt, Ht, Ut, Wt, Gt, Q, Kt, qt, Jt, Yt, Xt, Zt, Qt, $t, en, $, tn = e((() => {
        Y = k(), n(), We(), V(), H(), Ae(), Be(), Fe(), He(), Me(), Le(), m(), Ve(), ce(), g(), ge(), dt(), Qe(), Xe(), Ke(), oe(), Ce(), N(), q(), c(), v(), Je(), _(), p(), O(), a(), X = t(E()), w(), z(), W(), Z = x(), Tt = 25, Et = [null], Dt = `updated_at`, Ot = `desc`, kt = 8, At = `grid grid-cols-[minmax(280px,1fr)_160px_120px_120px_120px_120px_120px_38px] items-center gap-x-4`, jt = `text-token-text-secondary border-token-border-medium h-[58px] border-b-[0.5px] text-[13px] font-medium`, Mt = `h-[72px]`, Nt = `bg-token-bg-tertiary/30 absolute inset-x-0 top-0 bottom-0 opacity-0 transition-opacity`, Pt = `mx-auto w-full max-w-[1290px] px-2 md:px-6 lg:px-10`, Ft = e => e.workspace_access_state === `restricted` ? `invite_only` : `workspace`, It = e => {
            if (e === `invite_only`) return [`restricted`];
            if (e === `workspace`) return [`discoverable`, `enabled`]
        }, Lt = (e, t) => e.creator_active && e.creator_name?.trim() || t.formatMessage($.unassignedCreator), Rt = (e, t) => {
            let n = new Date(e);
            return Number.isNaN(n.getTime()) ? t.formatMessage($.emptyValue) : t.formatDate(n, {
                year: `numeric`,
                month: `short`,
                day: `numeric`
            })
        }, zt = (e, t) => Ft(e) === `invite_only` ? t.formatMessage($.inviteOnlyAccess) : t.formatMessage($.workspaceAccess), Bt = (e, t) => Ft(e) === `workspace` ? t.formatMessage($.allWorkspaceUsers) : e.direct_user_count == null ? t.formatMessage($.emptyValue) : t.formatMessage($.directUserCount, {
            count: e.direct_user_count
        }), Vt = (e, t) => e.invocation_count == null ? t.formatMessage($.emptyValue) : t.formatNumber(e.invocation_count), Ht = () => {
            "use forget";
            let e = (0, Y.c)(176),
                t = re(),
                n;
            e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (n = s(), e[0] = n) : n = e[0];
            let i = n,
                a = ee(),
                [c, u] = (0, X.useState)(`all`),
                [d, p] = (0, X.useState)(``),
                [m, h] = (0, X.useState)(Dt),
                [g, _] = (0, X.useState)(Ot),
                [v, b] = (0, X.useState)(null),
                [x, S] = (0, X.useState)(null),
                [w, T] = (0, X.useState)(null),
                [E, O] = (0, X.useState)(!1),
                [k, M] = (0, X.useState)(0),
                N;
            e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (N = [...Et], e[1] = N) : N = e[1];
            let [P, ie] = (0, X.useState)(N), F;
            e[2] === Symbol.for(`react.memo_cache_sentinel`) ? (F = new Set, e[2] = F) : F = e[2];
            let I = (0, X.useRef)(F),
                L = P[k] ?? null,
                R;
            e[3] === c ? R = e[4] : (R = It(c), e[3] = c, e[4] = R);
            let z = R,
                B;
            e[5] === d ? B = e[6] : (B = d.trim(), e[5] = d, e[6] = B);
            let V = B,
                H = c === `all` ? 0 : 1,
                W;
            e[7] === Symbol.for(`react.memo_cache_sentinel`) ? (W = () => {
                M(0), ie([...Et])
            }, e[7] = W) : W = e[7];
            let oe = W,
                se;
            e[8] === Symbol.for(`react.memo_cache_sentinel`) ? (se = e => {
                p(e), oe()
            }, e[8] = se) : se = e[8];
            let ce = se,
                K;
            e[9] === m ? K = e[10] : (K = e => {
                if (oe(), m === e) {
                    _(pt);
                    return
                }
                h(e), _(e === `name` ? `asc` : Ot)
            }, e[9] = m, e[10] = K);
            let le = K,
                ue;
            if (e[11] !== L || e[12] !== V || e[13] !== m || e[14] !== g || e[15] !== z) {
                let t = V || void 0,
                    n;
                e[17] !== L || e[18] !== m || e[19] !== g || e[20] !== t || e[21] !== z ? (n = {
                    cursor: L,
                    limit: Tt,
                    query: t,
                    sort_by: m,
                    sort_order: g,
                    workspace_access_states: z
                }, e[17] = L, e[18] = m, e[19] = g, e[20] = t, e[21] = z, e[22] = n) : n = e[22], ue = {
                    queryKey: [...U(), n],
                    queryFn: async () => {
                        let e = await G({
                            cursor: L,
                            limit: Tt,
                            ...V ? {
                                query: V
                            } : {},
                            sort_by: m,
                            sort_order: g,
                            workspace_access_states: z
                        });
                        if (I.current.size === 0) return e;
                        let t = e.hazelnuts.filter(e => !I.current.has(e.id));
                        return t.length === e.hazelnuts.length ? e : {
                            ...e,
                            hazelnuts: t,
                            total_count: Math.max(e.total_count - (e.hazelnuts.length - t.length), 0)
                        }
                    },
                    placeholderData: ne
                }, e[11] = L, e[12] = V, e[13] = m, e[14] = g, e[15] = z, e[16] = ue
            } else ue = e[16];
            let q = te(ue),
                de;
            e[23] === a ? de = e[24] : (de = async () => {
                await xe(a), _e(a)
            }, e[23] = a, e[24] = de);
            let fe = de,
                pe;
            e[25] === a ? pe = e[26] : (pe = e => {
                a.setQueriesData({
                    predicate: ft
                }, t => {
                    if (t == null) return t;
                    let n = t.hazelnuts.filter(t => t.id !== e);
                    return n.length === t.hazelnuts.length ? t : {
                        ...t,
                        hazelnuts: n,
                        total_count: Math.max(t.total_count - 1, 0)
                    }
                })
            }, e[25] = a, e[26] = pe);
            let me = pe,
                he;
            e[27] !== q.data?.cursor || e[28] !== q.data?.has_more || e[29] !== q.isPlaceholderData || e[30] !== k ? (he = () => {
                let e = q.data?.cursor;
                q.isPlaceholderData || q.data?.has_more !== !0 || e == null || ie(t => t[k + 1] === e ? t : [...t.slice(0, k + 1), e])
            }, e[27] = q.data?.cursor, e[28] = q.data?.has_more, e[29] = q.isPlaceholderData, e[30] = k, e[31] = he) : he = e[31];
            let ge = q.data?.cursor,
                ve = q.data?.has_more,
                ye;
            e[32] !== q.isPlaceholderData || e[33] !== k || e[34] !== ge || e[35] !== ve ? (ye = [ge, ve, q.isPlaceholderData, k], e[32] = q.isPlaceholderData, e[33] = k, e[34] = ge, e[35] = ve, e[36] = ye) : ye = e[36], (0, X.useEffect)(he, ye), q.data?.hazelnuts;
            let be;
            if (e[37] !== q.data?.hazelnuts) {
                let t = new Set;
                be = (q.data?.hazelnuts ?? []).filter(e => t.has(e.id) ? !1 : (t.add(e.id), !0)), e[37] = q.data?.hazelnuts, e[38] = be
            } else be = e[38];
            let Se = be,
                Ce;
            e[39] !== t || e[40] !== a || e[41] !== fe || e[42] !== me ? (Ce = async (e, n) => {
                let {
                    skill: r,
                    closeDetailsModalOnSuccess: o
                } = n;
                I.current.add(r.id), me(r.id), await fe(), a.removeQueries({
                    queryKey: j(r.id)
                }), T(null), o && Ge(), i.success(t.formatMessage($.deleteSuccess, {
                    name: r.name
                }))
            }, e[39] = t, e[40] = a, e[41] = fe, e[42] = me, e[43] = Ce) : Ce = e[43];
            let we;
            e[44] === t ? we = e[45] : (we = () => {
                i.danger(t.formatMessage($.deleteFailed))
            }, e[44] = t, e[45] = we);
            let Te;
            e[46] !== Ce || e[47] !== we ? (Te = {
                mutationFn: mt,
                onSuccess: Ce,
                onError: we
            }, e[46] = Ce, e[47] = we, e[48] = Te) : Te = e[48];
            let J = D(Te),
                De;
            e[49] !== t || e[50] !== a || e[51] !== fe ? (De = async (e, n) => {
                await fe(), a.invalidateQueries({
                    queryKey: j(n.skill.id)
                }), S(null), i.success(t.formatMessage($.changeOwnerSuccess, {
                    name: n.skill.name
                }))
            }, e[49] = t, e[50] = a, e[51] = fe, e[52] = De) : De = e[52];
            let ke;
            e[53] === t ? ke = e[54] : (ke = () => {
                i.danger(t.formatMessage($.changeOwnerFailed))
            }, e[53] = t, e[54] = ke);
            let Ae;
            e[55] !== De || e[56] !== ke ? (Ae = {
                mutationFn: ht,
                onSuccess: De,
                onError: ke
            }, e[55] = De, e[56] = ke, e[57] = Ae) : Ae = e[57];
            let je = D(Ae),
                Me, Ne;
            e[58] === t ? (Me = e[59], Ne = e[60]) : (Ne = e => {
                qe({
                    ...e,
                    creator_name: Lt(e, t),
                    isReadOnly: !0
                }, gt, void 0, {
                    showLibraryAction: !1,
                    overflowActions: t => {
                        let {
                            closeMenu: n,
                            disabled: r
                        } = t;
                        return (0, Z.jsx)(st, {
                            canDownload: !!e.sediment_id,
                            disabled: r,
                            onDownload: () => {
                                n(), Me(e)
                            },
                            onChangeAccess: () => {
                                n(), b(e)
                            },
                            onChangeOwner: () => {
                                n(), S(e)
                            },
                            onDelete: () => {
                                n(), T({
                                    skill: e,
                                    closeDetailsModalOnSuccess: !0
                                })
                            }
                        })
                    }
                })
            }, Me = async e => {
                if (!e.id || !e.sediment_id) return;
                let n = e.base_sediment_id ?? e.sediment_id;
                try {
                    let a = (await ae(e.id, n)).download_url;
                    if (!a) {
                        r.addError(Error(`Missing download URL`)), i.danger(t.formatMessage($.downloadFailed));
                        return
                    }
                    window.open(a, `_blank`), i.success(t.formatMessage($.downloadSuccess))
                } catch (e) {
                    let n = e;
                    r.addError(n), i.danger(t.formatMessage($.downloadFailed))
                }
            }, e[58] = t, e[59] = Me, e[60] = Ne);
            let Pe = q.isPending && q.data == null,
                Fe = V !== ``,
                Ie = !Pe && Se.length === 0 && c === `all` && !Fe,
                Le = !Pe && Se.length === 0 && !Ie,
                Re = Math.ceil((q.data?.total_count ?? 0) / Tt),
                ze = Re > 1,
                Be = q.isPlaceholderData,
                Ve, He;
            e[61] !== q.isPlaceholderData || e[62] !== k || e[63] !== Re ? (Ve = () => {
                if (q.isPlaceholderData) return;
                let e = Math.max(Re - 1, 0);
                k <= e || (M(e), ie(t => t.slice(0, e + 1)))
            }, He = [q.isPlaceholderData, k, Re], e[61] = q.isPlaceholderData, e[62] = k, e[63] = Re, e[64] = Ve, e[65] = He) : (Ve = e[64], He = e[65]), (0, X.useEffect)(Ve, He);
            let We;
            e[66] === Symbol.for(`react.memo_cache_sentinel`) ? (We = (0, Z.jsx)(`h1`, {
                className: `text-token-text-primary text-2xl font-semibold`,
                children: (0, Z.jsx)(C, {
                    ...$.pageTitle
                })
            }), e[66] = We) : We = e[66];
            let Ke;
            e[67] === Symbol.for(`react.memo_cache_sentinel`) ? (Ke = (0, Z.jsxs)(`div`, {
                className: `min-w-0`,
                children: [We, (0, Z.jsx)(`p`, {
                    className: `text-token-text-secondary mt-1 max-w-[620px] text-sm leading-5`,
                    children: (0, Z.jsx)(C, {
                        ...$.pageDescription
                    })
                })]
            }), e[67] = Ke) : Ke = e[67];
            let Je;
            e[68] === t ? Je = e[69] : (Je = t.formatMessage($.searchPlaceholder), e[68] = t, e[69] = Je);
            let Ye;
            e[70] === t ? Ye = e[71] : (Ye = t.formatMessage($.searchPlaceholder), e[70] = t, e[71] = Ye);
            let Xe, Qe;
            e[72] === Symbol.for(`react.memo_cache_sentinel`) ? (Xe = e => ce(e.target.value), Qe = () => ce(``), e[72] = Xe, e[73] = Qe) : (Xe = e[72], Qe = e[73]);
            let et;
            e[74] !== d || e[75] !== Je || e[76] !== Ye ? (et = (0, Z.jsx)(Oe, {
                className: `border-token-border-heavy! w-full rounded-full! md:w-[200px]`,
                name: `search-admin-skills`,
                type: `text`,
                role: `searchbox`,
                ariaLabel: Je,
                placeholder: Ye,
                icon: l,
                iconPosition: `left`,
                iconClassName: `text-token-icon-tertiary`,
                value: d,
                onChange: Xe,
                onClear: Qe
            }), e[74] = d, e[75] = Je, e[76] = Ye, e[77] = et) : et = e[77];
            let tt;
            e[78] === Symbol.for(`react.memo_cache_sentinel`) ? (tt = e => {
                u(e), oe()
            }, e[78] = tt) : tt = e[78];
            let nt;
            e[79] !== c || e[80] !== H ? (nt = (0, Z.jsx)(Yt, {
                value: c,
                activeFilterCount: H,
                onChange: tt
            }), e[79] = c, e[80] = H, e[81] = nt) : nt = e[81];
            let rt;
            e[82] === t ? rt = e[83] : (rt = t.formatMessage($.addSkill), e[82] = t, e[83] = rt);
            let it;
            e[84] === Symbol.for(`react.memo_cache_sentinel`) ? (it = () => O(!0), e[84] = it) : it = e[84];
            let at;
            e[85] === rt ? at = e[86] : (at = (0, Z.jsx)(Wt, {
                "aria-label": rt,
                onClick: it
            }), e[85] = rt, e[86] = at);
            let ot;
            e[87] !== et || e[88] !== nt || e[89] !== at ? (ot = (0, Z.jsx)(`div`, {
                className: Pt,
                children: (0, Z.jsxs)(`header`, {
                    className: `flex flex-col gap-4 md:flex-row md:items-center md:justify-between`,
                    children: [Ke, (0, Z.jsxs)(`div`, {
                        className: `flex w-full items-center gap-3 md:ms-auto md:w-auto`,
                        children: [et, nt, at]
                    })]
                })
            }), e[87] = et, e[88] = nt, e[89] = at, e[90] = ot) : ot = e[90];
            let ct;
            e[91] === t ? ct = e[92] : (ct = t.formatMessage($.tableAriaLabel), e[91] = t, e[92] = ct);
            let lt = Pe || Be ? !0 : void 0,
                ut;
            e[93] === Symbol.for(`react.memo_cache_sentinel`) ? (ut = y(jt, `w-full`), e[93] = ut) : ut = e[93];
            let dt;
            e[94] === Symbol.for(`react.memo_cache_sentinel`) ? (dt = y(Pt, At, `h-full`), e[94] = dt) : dt = e[94];
            let vt;
            e[95] === t ? vt = e[96] : (vt = t.formatMessage($.columnSkill), e[95] = t, e[96] = vt);
            let yt;
            e[97] !== le || e[98] !== m || e[99] !== g || e[100] !== vt ? (yt = (0, Z.jsx)(Jt, {
                label: vt,
                sortBy: m,
                sortOrder: g,
                sortField: `name`,
                onSort: le
            }), e[97] = le, e[98] = m, e[99] = g, e[100] = vt, e[101] = yt) : yt = e[101];
            let bt;
            e[102] === Symbol.for(`react.memo_cache_sentinel`) ? (bt = (0, Z.jsx)(`div`, {
                role: `columnheader`,
                className: `min-w-0`,
                children: (0, Z.jsx)(C, {
                    ...$.columnOwner
                })
            }), e[102] = bt) : bt = e[102];
            let xt;
            e[103] === Symbol.for(`react.memo_cache_sentinel`) ? (xt = (0, Z.jsx)(`div`, {
                role: `columnheader`,
                className: `min-w-0`,
                children: (0, Z.jsx)(C, {
                    ...$.columnAccess
                })
            }), e[103] = xt) : xt = e[103];
            let St;
            e[104] === Symbol.for(`react.memo_cache_sentinel`) ? (St = (0, Z.jsx)(`div`, {
                role: `columnheader`,
                className: `min-w-0`,
                children: (0, Z.jsx)(C, {
                    ...$.columnUsers
                })
            }), e[104] = St) : St = e[104];
            let Ct;
            e[105] === Symbol.for(`react.memo_cache_sentinel`) ? (Ct = (0, Z.jsx)(`div`, {
                role: `columnheader`,
                className: `min-w-0`,
                children: (0, Z.jsx)(C, {
                    ...$.columnInvocations
                })
            }), e[105] = Ct) : Ct = e[105];
            let wt;
            e[106] === t ? wt = e[107] : (wt = t.formatMessage($.columnCreated), e[106] = t, e[107] = wt);
            let Mt;
            e[108] !== le || e[109] !== m || e[110] !== g || e[111] !== wt ? (Mt = (0, Z.jsx)(Jt, {
                label: wt,
                sortBy: m,
                sortOrder: g,
                sortField: `created_at`,
                onSort: le
            }), e[108] = le, e[109] = m, e[110] = g, e[111] = wt, e[112] = Mt) : Mt = e[112];
            let Nt;
            e[113] === t ? Nt = e[114] : (Nt = t.formatMessage($.columnUpdated), e[113] = t, e[114] = Nt);
            let Ft;
            e[115] !== le || e[116] !== m || e[117] !== g || e[118] !== Nt ? (Ft = (0, Z.jsx)(Jt, {
                label: Nt,
                sortBy: m,
                sortOrder: g,
                sortField: `updated_at`,
                onSort: le
            }), e[115] = le, e[116] = m, e[117] = g, e[118] = Nt, e[119] = Ft) : Ft = e[119];
            let Rt;
            e[120] === Symbol.for(`react.memo_cache_sentinel`) ? (Rt = (0, Z.jsx)(`div`, {
                role: `columnheader`,
                className: `justify-self-end`,
                children: (0, Z.jsx)(`span`, {
                    className: `sr-only`,
                    children: (0, Z.jsx)(C, {
                        ...$.columnActions
                    })
                })
            }), e[120] = Rt) : Rt = e[120];
            let zt;
            e[121] !== yt || e[122] !== Mt || e[123] !== Ft ? (zt = (0, Z.jsx)(`div`, {
                role: `rowgroup`,
                children: (0, Z.jsx)(`div`, {
                    className: ut,
                    children: (0, Z.jsxs)(`div`, {
                        role: `row`,
                        className: dt,
                        children: [yt, bt, xt, St, Ct, Mt, Ft, Rt]
                    })
                })
            }), e[121] = yt, e[122] = Mt, e[123] = Ft, e[124] = zt) : zt = e[124];
            let Bt = Pe && `group skeleton [--skeleton-opacity:0.75]`,
                Vt;
            e[125] === Bt ? Vt = e[126] : (Vt = y(`w-full space-y-1 py-1`, Bt), e[125] = Bt, e[126] = Vt);
            let Ht;
            e[127] !== q || e[128] !== Me || e[129] !== Ne || e[130] !== Ie || e[131] !== Pe || e[132] !== Le || e[133] !== Be || e[134] !== Se ? (Ht = Pe ? Array.from({
                length: 8
            }, _t) : q.isError ? (0, Z.jsx)(Kt, {
                children: (0, Z.jsxs)(`div`, {
                    className: `flex flex-col items-center justify-center gap-3 text-center`,
                    children: [(0, Z.jsxs)(`div`, {
                        className: `space-y-1`,
                        children: [(0, Z.jsx)(`p`, {
                            className: `text-token-text-secondary text-sm`,
                            children: (0, Z.jsx)(C, {
                                ...$.loadFailed
                            })
                        }), (0, Z.jsx)(`p`, {
                            className: `text-token-text-tertiary text-sm`,
                            children: (0, Z.jsx)(C, {
                                ...$.loadFailedHint
                            })
                        })]
                    }), (0, Z.jsx)(f, {
                        type: `button`,
                        color: `secondary`,
                        onClick: () => void q.refetch(),
                        children: (0, Z.jsx)(C, {
                            ...$.retry
                        })
                    })]
                })
            }) : Ie ? (0, Z.jsx)(Kt, {
                children: (0, Z.jsx)($t, {
                    kind: `default`
                })
            }) : Le ? (0, Z.jsx)(Kt, {
                children: (0, Z.jsx)($t, {
                    kind: `results`
                })
            }) : Se.map(e => (0, Z.jsx)(Ut, {
                skill: e,
                onOpenDetails: Ne,
                onDownload: Me,
                onChangeAccess: b,
                onChangeOwner: S,
                onDelete: e => T({
                    skill: e,
                    closeDetailsModalOnSuccess: !1
                }),
                isInteractionDisabled: Be
            }, e.id)), e[127] = q, e[128] = Me, e[129] = Ne, e[130] = Ie, e[131] = Pe, e[132] = Le, e[133] = Be, e[134] = Se, e[135] = Ht) : Ht = e[135];
            let Gt;
            e[136] !== Vt || e[137] !== Ht ? (Gt = (0, Z.jsx)(`div`, {
                role: `rowgroup`,
                className: Vt,
                children: Ht
            }), e[136] = Vt, e[137] = Ht, e[138] = Gt) : Gt = e[138];
            let Q;
            e[139] === Be ? Q = e[140] : (Q = Be ? (0, Z.jsx)(`div`, {
                "aria-hidden": !0,
                "data-testid": `admin-skills-results-loading-overlay`,
                className: `bg-token-bg-primary/60 absolute inset-0 z-[3] flex items-center justify-center`,
                children: (0, Z.jsx)(o, {
                    className: `h-5 w-5`
                })
            }) : null, e[139] = Be, e[140] = Q);
            let qt;
            e[141] !== lt || e[142] !== zt || e[143] !== Gt || e[144] !== Q ? (qt = (0, Z.jsxs)(`div`, {
                className: `relative w-full min-w-[1290px]`,
                "aria-busy": lt,
                children: [zt, Gt, Q]
            }), e[141] = lt, e[142] = zt, e[143] = Gt, e[144] = Q, e[145] = qt) : qt = e[145];
            let Xt;
            e[146] !== ct || e[147] !== qt ? (Xt = (0, Z.jsx)(`section`, {
                role: `table`,
                "aria-colcount": kt,
                "aria-label": ct,
                className: `overflow-x-auto`,
                children: qt
            }), e[146] = ct, e[147] = qt, e[148] = Xt) : Xt = e[148];
            let Zt;
            e[149] !== P.length || e[150] !== k || e[151] !== ze || e[152] !== Re ? (Zt = ze && (0, Z.jsx)(`div`, {
                className: Pt,
                children: (0, Z.jsx)(`div`, {
                    className: `flex min-h-[58px] items-center justify-center gap-3`,
                    children: (0, Z.jsx)(A, {
                        currentPage: k,
                        length: Re,
                        maxNavigablePageIndex: P.length - 1,
                        onChangeIndex: M
                    })
                })
            }), e[149] = P.length, e[150] = k, e[151] = ze, e[152] = Re, e[153] = Zt) : Zt = e[153];
            let Qt;
            e[154] !== ot || e[155] !== Xt || e[156] !== Zt ? (Qt = (0, Z.jsx)(Ue, {
                contentWidth: `wide`,
                className: `max-w-none! px-0!`,
                children: (0, Z.jsxs)(`main`, {
                    className: `space-y-6 py-4 md:pt-12`,
                    children: [ot, Xt, Zt]
                })
            }), e[154] = ot, e[155] = Xt, e[156] = Zt, e[157] = Qt) : Qt = e[157];
            let tn;
            e[158] !== fe || e[159] !== v ? (tn = v != null && (0, Z.jsx)(Ze, {
                adminMode: !0,
                skill: v,
                hazelnutId: v.id,
                creatorId: v.creator_id,
                isOpen: !0,
                onClose: () => {
                    b(null), fe()
                }
            }), e[158] = fe, e[159] = v, e[160] = tn) : tn = e[160];
            let nn;
            e[161] === E ? nn = e[162] : (nn = E ? (0, Z.jsx)($e, {
                admin: !0,
                onClose: () => O(!1)
            }) : null, e[161] = E, e[162] = nn);
            let rn;
            e[163] !== je || e[164] !== x ? (rn = x != null && (0, Z.jsx)(en, {
                skill: x,
                isSubmitting: je.isPending,
                onClose: () => S(null),
                onSubmit: e => je.mutateAsync({
                    skill: x,
                    ownerAccountUserId: e
                })
            }), e[163] = je, e[164] = x, e[165] = rn) : rn = e[165];
            let an;
            e[166] !== J || e[167] !== w || e[168] !== t ? (an = w != null && (0, Z.jsx)(Ee, {
                isOpen: !0,
                title: t.formatMessage($.deleteTitle),
                description: t.formatMessage($.deleteDescription, {
                    name: w.skill.name
                }),
                confirmText: t.formatMessage($.deleteConfirm),
                cancelText: t.formatMessage($.cancel),
                primaryButtonColor: `danger`,
                loading: J.isPending,
                onClose: () => T(null),
                onConfirm: () => J.mutate(w)
            }), e[166] = J, e[167] = w, e[168] = t, e[169] = an) : an = e[169];
            let on;
            return e[170] !== Qt || e[171] !== tn || e[172] !== nn || e[173] !== rn || e[174] !== an ? (on = (0, Z.jsxs)(Z.Fragment, {
                children: [Qt, tn, nn, rn, an]
            }), e[170] = Qt, e[171] = tn, e[172] = nn, e[173] = rn, e[174] = an, e[175] = on) : on = e[175], on
        }, Ut = e => {
            "use forget";
            let t = (0, Y.c)(104),
                {
                    skill: n,
                    onOpenDetails: r,
                    onDownload: i,
                    onChangeAccess: a,
                    onChangeOwner: o,
                    onDelete: s,
                    isInteractionDisabled: c
                } = e,
                l = re(),
                u;
            t[0] === n.iconography ? u = t[1] : (u = fe(n.iconography), t[0] = n.iconography, t[1] = u);
            let d = u,
                f;
            t[2] === n ? f = t[3] : (f = ye(n), t[2] = n, t[3] = f);
            let p = f,
                m;
            t[4] === n ? m = t[5] : (m = le(n), t[4] = n, t[5] = m);
            let h = m,
                g;
            t[6] !== l || t[7] !== n ? (g = Lt(n, l), t[6] = l, t[7] = n, t[8] = g) : g = t[8];
            let _ = g,
                v;
            t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (v = y(Mt, `group relative w-full`), t[9] = v) : v = t[9];
            let b;
            t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (b = (0, Z.jsx)(`div`, {
                "aria-hidden": !0,
                className: y(Nt, `group-focus-within:opacity-100 group-hover:opacity-100`)
            }), t[10] = b) : b = t[10];
            let x;
            t[11] !== l || t[12] !== n.name ? (x = l.formatMessage($.openDetails, {
                name: n.name
            }), t[11] = l, t[12] = n.name, t[13] = x) : x = t[13];
            let S;
            t[14] !== r || t[15] !== n ? (S = () => r(n), t[14] = r, t[15] = n, t[16] = S) : S = t[16];
            let ee;
            t[17] !== c || t[18] !== x || t[19] !== S ? (ee = (0, Z.jsx)(`button`, {
                type: `button`,
                disabled: c,
                "aria-label": x,
                className: `keyboard-focused:focus-ring absolute inset-0 z-[1] cursor-pointer outline-none`,
                onClick: S
            }), t[17] = c, t[18] = x, t[19] = S, t[20] = ee) : ee = t[20];
            let C;
            t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (C = y(Pt, `pointer-events-none relative z-[2] h-full`), t[21] = C) : C = t[21];
            let te;
            t[22] === Symbol.for(`react.memo_cache_sentinel`) ? (te = y(At, `pointer-events-none h-full w-full text-sm`), t[22] = te) : te = t[22];
            let w;
            t[23] !== p || t[24] !== n ? (w = p == null ? void 0 : we(n), t[23] = p, t[24] = n, t[25] = w) : w = t[25];
            let T;
            t[26] !== d || t[27] !== p ? (T = p == null ? (0, Z.jsx)(d, {
                className: `icon text-token-text-primary`
            }) : (0, Z.jsx)(`img`, {
                src: p,
                alt: ``,
                className: `h-full w-full object-cover`
            }), t[26] = d, t[27] = p, t[28] = T) : T = t[28];
            let E;
            t[29] !== w || t[30] !== T ? (E = (0, Z.jsx)(`span`, {
                className: `border-token-border-light flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border`,
                style: w,
                children: T
            }), t[29] = w, t[30] = T, t[31] = E) : E = t[31];
            let D;
            t[32] === n.name ? D = t[33] : (D = (0, Z.jsx)(`span`, {
                className: `text-token-text-primary block truncate font-medium`,
                title: n.name,
                children: n.name
            }), t[32] = n.name, t[33] = D);
            let ne = h ?? n.id,
                O = h ?? n.id,
                k;
            t[34] !== ne || t[35] !== O ? (k = (0, Z.jsx)(`span`, {
                className: `text-token-text-tertiary mt-0.5 line-clamp-2 text-xs leading-4`,
                title: ne,
                children: O
            }), t[34] = ne, t[35] = O, t[36] = k) : k = t[36];
            let A;
            t[37] !== D || t[38] !== k ? (A = (0, Z.jsxs)(`span`, {
                className: `min-w-0 flex-1`,
                children: [D, k]
            }), t[37] = D, t[38] = k, t[39] = A) : A = t[39];
            let j;
            t[40] !== E || t[41] !== A ? (j = (0, Z.jsxs)(`div`, {
                role: `cell`,
                className: `flex min-w-0 items-center gap-3`,
                children: [E, A]
            }), t[40] = E, t[41] = A, t[42] = j) : j = t[42];
            let M = n.creator_active ? `text-token-text-primary` : `text-token-text-secondary`,
                N;
            t[43] === M ? N = t[44] : (N = y(`truncate`, M), t[43] = M, t[44] = N);
            let P;
            t[45] !== _ || t[46] !== N ? (P = (0, Z.jsx)(`div`, {
                role: `cell`,
                className: `flex min-w-0 flex-col`,
                children: (0, Z.jsx)(`span`, {
                    className: N,
                    children: _
                })
            }), t[45] = _, t[46] = N, t[47] = P) : P = t[47];
            let ie;
            t[48] !== l || t[49] !== n ? (ie = zt(n, l), t[48] = l, t[49] = n, t[50] = ie) : ie = t[50];
            let F;
            t[51] === ie ? F = t[52] : (F = (0, Z.jsx)(`div`, {
                role: `cell`,
                className: `min-w-0`,
                children: (0, Z.jsx)(`span`, {
                    className: `bg-token-bg-tertiary text-token-text-secondary inline-flex rounded-full px-2.5 py-1 text-xs font-medium`,
                    children: ie
                })
            }), t[51] = ie, t[52] = F);
            let I;
            t[53] !== l || t[54] !== n ? (I = Bt(n, l), t[53] = l, t[54] = n, t[55] = I) : I = t[55];
            let L;
            t[56] === I ? L = t[57] : (L = (0, Z.jsx)(`div`, {
                role: `cell`,
                className: `text-token-text-tertiary min-w-0 truncate whitespace-nowrap`,
                children: I
            }), t[56] = I, t[57] = L);
            let R;
            t[58] !== l || t[59] !== n ? (R = Vt(n, l), t[58] = l, t[59] = n, t[60] = R) : R = t[60];
            let z;
            t[61] === R ? z = t[62] : (z = (0, Z.jsx)(`div`, {
                role: `cell`,
                className: `text-token-text-tertiary min-w-0 truncate whitespace-nowrap`,
                children: R
            }), t[61] = R, t[62] = z);
            let B;
            t[63] !== l || t[64] !== n.created_at ? (B = Rt(n.created_at, l), t[63] = l, t[64] = n.created_at, t[65] = B) : B = t[65];
            let V;
            t[66] === B ? V = t[67] : (V = (0, Z.jsx)(`div`, {
                role: `cell`,
                className: `text-token-text-tertiary min-w-0 truncate whitespace-nowrap`,
                children: B
            }), t[66] = B, t[67] = V);
            let H;
            t[68] !== l || t[69] !== n.updated_at ? (H = Rt(n.updated_at, l), t[68] = l, t[69] = n.updated_at, t[70] = H) : H = t[70];
            let U;
            t[71] === H ? U = t[72] : (U = (0, Z.jsx)(`div`, {
                role: `cell`,
                className: `text-token-text-tertiary min-w-0 truncate whitespace-nowrap`,
                children: H
            }), t[71] = H, t[72] = U);
            let W = !!n.sediment_id,
                G;
            t[73] !== i || t[74] !== n ? (G = () => void i(n), t[73] = i, t[74] = n, t[75] = G) : G = t[75];
            let ae;
            t[76] !== a || t[77] !== n ? (ae = () => a(n), t[76] = a, t[77] = n, t[78] = ae) : ae = t[78];
            let oe;
            t[79] !== o || t[80] !== n ? (oe = () => o(n), t[79] = o, t[80] = n, t[81] = oe) : oe = t[81];
            let se;
            t[82] !== s || t[83] !== n ? (se = () => s(n), t[82] = s, t[83] = n, t[84] = se) : se = t[84];
            let ce;
            t[85] !== c || t[86] !== W || t[87] !== G || t[88] !== ae || t[89] !== oe || t[90] !== se ? (ce = (0, Z.jsx)(`div`, {
                role: `cell`,
                className: `pointer-events-auto justify-self-end`,
                children: (0, Z.jsx)(qt, {
                    canDownload: W,
                    onDownload: G,
                    onChangeAccess: ae,
                    onChangeOwner: oe,
                    onDelete: se,
                    disabled: c
                })
            }), t[85] = c, t[86] = W, t[87] = G, t[88] = ae, t[89] = oe, t[90] = se, t[91] = ce) : ce = t[91];
            let K;
            t[92] !== j || t[93] !== P || t[94] !== F || t[95] !== L || t[96] !== z || t[97] !== V || t[98] !== U || t[99] !== ce ? (K = (0, Z.jsx)(`div`, {
                className: C,
                children: (0, Z.jsxs)(`div`, {
                    role: `row`,
                    className: te,
                    children: [j, P, F, L, z, V, U, ce]
                })
            }), t[92] = j, t[93] = P, t[94] = F, t[95] = L, t[96] = z, t[97] = V, t[98] = U, t[99] = ce, t[100] = K) : K = t[100];
            let ue;
            return t[101] !== K || t[102] !== ee ? (ue = (0, Z.jsxs)(`div`, {
                className: v,
                children: [b, ee, K]
            }), t[101] = K, t[102] = ee, t[103] = ue) : ue = t[103], ue
        }, Wt = e => {
            "use forget";
            let t = (0, Y.c)(3),
                n;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, Z.jsx)(Pe, {
                className: `icon shrink-0`
            }), t[0] = n) : n = t[0];
            let r;
            return t[1] === e ? r = t[2] : (r = (0, Z.jsx)(`button`, {
                type: `button`,
                className: `hover:bg-token-interactive-bg-secondary-hover active:bg-token-interactive-bg-secondary-press text-token-text-primary inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-transparent transition-colors`,
                ...e,
                children: n
            }), t[1] = e, t[2] = r), r
        }, Gt = () => {
            "use forget";
            let e = (0, Y.c)(3),
                t;
            e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = y(At, `min-h-[72px] w-full`), e[0] = t) : t = e[0];
            let n;
            e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, Z.jsx)(`div`, {
                className: `skeleton-child size-9 shrink-0 rounded-full`
            }), e[1] = n) : n = e[1];
            let r;
            return e[2] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, Z.jsx)(`div`, {
                className: `relative min-h-[72px] w-full`,
                "aria-hidden": !0,
                children: (0, Z.jsx)(`div`, {
                    className: Pt,
                    children: (0, Z.jsxs)(`div`, {
                        role: `row`,
                        className: t,
                        children: [(0, Z.jsxs)(`div`, {
                            role: `cell`,
                            className: `flex min-w-0 items-center gap-3`,
                            children: [n, (0, Z.jsxs)(`div`, {
                                className: `min-w-0 flex-1 space-y-2`,
                                children: [(0, Z.jsx)(`div`, {
                                    className: `skeleton-child h-4 w-40 max-w-[75%] rounded-md`
                                }), (0, Z.jsx)(`div`, {
                                    className: `skeleton-child h-3 w-52 max-w-[90%] rounded-md`
                                })]
                            })]
                        }), (0, Z.jsx)(Q, {
                            className: `w-24`
                        }), (0, Z.jsx)(Q, {
                            className: `w-20`
                        }), (0, Z.jsx)(Q, {
                            className: `w-16`
                        }), (0, Z.jsx)(Q, {
                            className: `w-16`
                        }), (0, Z.jsx)(Q, {
                            className: `w-20`
                        }), (0, Z.jsx)(Q, {
                            className: `w-20`
                        }), (0, Z.jsx)(`div`, {
                            role: `cell`,
                            "aria-hidden": !0
                        })]
                    })
                })
            }), e[2] = r) : r = e[2], r
        }, Q = e => {
            "use forget";
            let t = (0, Y.c)(4),
                {
                    className: n
                } = e,
                r;
            t[0] === n ? r = t[1] : (r = y(`skeleton-child h-4 rounded-md`, n), t[0] = n, t[1] = r);
            let i;
            return t[2] === r ? i = t[3] : (i = (0, Z.jsx)(`div`, {
                role: `cell`,
                className: r,
                "aria-hidden": !0
            }), t[2] = r, t[3] = i), i
        }, Kt = e => {
            "use forget";
            let t = (0, Y.c)(2),
                {
                    children: n
                } = e,
                r;
            return t[0] === n ? r = t[1] : (r = (0, Z.jsx)(`div`, {
                role: `row`,
                className: `w-full`,
                children: (0, Z.jsx)(`div`, {
                    role: `cell`,
                    "aria-colspan": kt,
                    className: Pt,
                    children: n
                })
            }), t[0] = n, t[1] = r), r
        }, qt = e => {
            "use forget";
            let t = (0, Y.c)(19),
                {
                    canDownload: n,
                    onDownload: r,
                    onChangeAccess: i,
                    onChangeOwner: a,
                    onDelete: o,
                    disabled: s
                } = e,
                c = re(),
                [l, u] = (0, X.useState)(!1),
                d;
            t[0] === c ? d = t[1] : (d = c.formatMessage($.openActions), t[0] = c, t[1] = d);
            let f = !l && `can-hover:pointer-events-none can-hover:opacity-0`,
                p = l && `pointer-events-auto opacity-100`,
                m;
            t[2] !== f || t[3] !== p ? (m = y(`bg-primary h-[38px] w-[38px] rounded-full! transition-opacity`, f, `can-hover:group-hover:pointer-events-auto can-hover:group-hover:opacity-100`, `can-hover:group-focus-within:pointer-events-auto can-hover:group-focus-within:opacity-100`, `cant-hover:pointer-events-auto cant-hover:opacity-100`, `focus-visible:pointer-events-auto focus-visible:opacity-100`, p), t[2] = f, t[3] = p, t[4] = m) : m = t[4];
            let h;
            t[5] !== s || t[6] !== d || t[7] !== m ? (h = (0, Z.jsx)(I, {
                "aria-label": d,
                disabled: s,
                className: m,
                type: `button`,
                onClick: vt,
                onKeyDown: yt
            }), t[5] = s, t[6] = d, t[7] = m, t[8] = h) : h = t[8];
            let g;
            t[9] !== n || t[10] !== s || t[11] !== i || t[12] !== a || t[13] !== o || t[14] !== r ? (g = (0, Z.jsx)(st, {
                canDownload: n,
                disabled: s,
                onDownload: r,
                onChangeAccess: i,
                onChangeOwner: a,
                onDelete: o
            }), t[9] = n, t[10] = s, t[11] = i, t[12] = a, t[13] = o, t[14] = r, t[15] = g) : g = t[15];
            let _;
            return t[16] !== h || t[17] !== g ? (_ = (0, Z.jsx)(P, {
                size: `auto`,
                sideOffset: 8,
                contentAlign: `end`,
                onOpenChange: u,
                triggerButton: h,
                children: g
            }), t[16] = h, t[17] = g, t[18] = _) : _ = t[18], _
        }, Jt = e => {
            "use forget";
            let t = (0, Y.c)(17),
                {
                    className: n,
                    label: r,
                    onSort: i,
                    sortBy: a,
                    sortField: o,
                    sortOrder: s
                } = e,
                c = a === o,
                l = s === `asc` ? Ie : je,
                u;
            t[0] === n ? u = t[1] : (u = y(`min-w-0`, n), t[0] = n, t[1] = u);
            let d;
            t[2] !== i || t[3] !== o ? (d = () => i(o), t[2] = i, t[3] = o, t[4] = d) : d = t[4];
            let f;
            t[5] === r ? f = t[6] : (f = (0, Z.jsx)(`span`, {
                children: r
            }), t[5] = r, t[6] = f);
            let p;
            t[7] !== l || t[8] !== c ? (p = (0, Z.jsx)(`span`, {
                className: `inline-flex items-center rounded p-0.5`,
                children: c ? (0, Z.jsx)(l, {
                    "data-testid": `admin-skills-active-sort-icon`,
                    className: `text-token-text-tertiary h-3 w-3`
                }) : (0, Z.jsx)(Ne, {
                    "data-testid": `admin-skills-inactive-sort-icon`,
                    className: `text-token-text-tertiary h-3 w-3 opacity-0 transition-opacity group-focus-within:opacity-100 group-hover:opacity-100`
                })
            }), t[7] = l, t[8] = c, t[9] = p) : p = t[9];
            let m;
            t[10] !== d || t[11] !== f || t[12] !== p ? (m = (0, Z.jsxs)(`button`, {
                type: `button`,
                className: `group inline-flex items-center gap-1 text-start`,
                onClick: d,
                children: [f, p]
            }), t[10] = d, t[11] = f, t[12] = p, t[13] = m) : m = t[13];
            let h;
            return t[14] !== u || t[15] !== m ? (h = (0, Z.jsx)(`div`, {
                role: `columnheader`,
                className: u,
                children: m
            }), t[14] = u, t[15] = m, t[16] = h) : h = t[16], h
        }, Yt = e => {
            "use forget";
            let t = (0, Y.c)(22),
                {
                    value: n,
                    activeFilterCount: r,
                    onChange: i
                } = e,
                a = re(),
                o;
            t[0] === a ? o = t[1] : (o = a.formatMessage($.openFilters), t[0] = a, t[1] = o);
            let s = r > 0,
                c;
            t[2] !== r || t[3] !== o || t[4] !== s ? (c = (0, Z.jsx)(Qt, {
                "aria-label": o,
                isActive: s,
                filterCount: r
            }), t[2] = r, t[3] = o, t[4] = s, t[5] = c) : c = t[5];
            let l;
            t[6] === i ? l = t[7] : (l = e => {
                (e === `all` || e === `invite_only` || e === `workspace`) && i(e)
            }, t[6] = i, t[7] = l);
            let u;
            t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, Z.jsx)(Xt, {
                value: `all`,
                children: (0, Z.jsx)(C, {
                    ...$.allAccess
                })
            }), t[8] = u) : u = t[8];
            let d;
            t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, Z.jsx)(Xt, {
                value: `invite_only`,
                children: (0, Z.jsx)(C, {
                    ...$.inviteOnlyAccess
                })
            }), t[9] = d) : d = t[9];
            let f;
            t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (f = (0, Z.jsx)(Xt, {
                value: `workspace`,
                children: (0, Z.jsx)(C, {
                    ...$.workspaceAccess
                })
            }), t[10] = f) : f = t[10];
            let p;
            t[11] !== l || t[12] !== n ? (p = (0, Z.jsxs)(J.RadioGroup, {
                value: n,
                onValueChange: l,
                children: [u, d, f]
            }), t[11] = l, t[12] = n, t[13] = p) : p = t[13];
            let m;
            t[14] !== r || t[15] !== a || t[16] !== i ? (m = r > 0 ? (0, Z.jsx)(J.Group, {
                separator: !0,
                children: (0, Z.jsx)(J.Item, {
                    label: a.formatMessage($.clearAllFilters),
                    className: `text-token-interactive-label-accent-default hover:text-token-interactive-label-accent-hover`,
                    onClick: () => i(`all`)
                })
            }) : null, t[14] = r, t[15] = a, t[16] = i, t[17] = m) : m = t[17];
            let h;
            return t[18] !== c || t[19] !== p || t[20] !== m ? (h = (0, Z.jsxs)(P, {
                size: `auto`,
                sideOffset: 8,
                contentAlign: `end`,
                triggerButton: c,
                children: [p, m]
            }), t[18] = c, t[19] = p, t[20] = m, t[21] = h) : h = t[21], h
        }, Xt = e => {
            "use forget";
            let t = (0, Y.c)(4),
                {
                    value: n,
                    children: r
                } = e,
                i;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, Z.jsx)(Zt, {}), t[0] = i) : i = t[0];
            let a;
            return t[1] !== r || t[2] !== n ? (a = (0, Z.jsx)(J.RadioItem, {
                value: n,
                trailing: i,
                trailingStyle: `default`,
                children: r
            }), t[1] = r, t[2] = n, t[3] = a) : a = t[3], a
        }, Zt = () => {
            "use forget";
            let e = (0, Y.c)(1),
                t;
            return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Z.jsxs)(Z.Fragment, {
                children: [(0, Z.jsx)(ze, {
                    className: `icon-sm text-token-text-primary group-radix-state-checked:block hidden`
                }), (0, Z.jsx)(Re, {
                    className: `icon-sm text-token-text-tertiary group-radix-state-checked:hidden`
                })]
            }), e[0] = t) : t = e[0], t
        }, Qt = e => {
            "use forget";
            let t = (0, Y.c)(15),
                n, r, i;
            t[0] === e ? (n = t[1], r = t[2], i = t[3]) : ({
                isActive: i,
                filterCount: r,
                ...n
            } = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i);
            let a = re(),
                o = i ? `bg-token-interactive-bg-accent-default text-token-interactive-label-accent-default hover:bg-token-interactive-bg-accent-muted-hover active:bg-token-interactive-bg-accent-muted-press gap-2 px-3` : `hover:bg-token-interactive-bg-secondary-hover active:bg-token-interactive-bg-secondary-press text-token-text-primary w-8 bg-transparent`,
                s;
            t[4] === o ? s = t[5] : (s = y(`inline-flex h-8 shrink-0 items-center justify-center rounded-full transition-colors`, o), t[4] = o, t[5] = s);
            let c;
            t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, Z.jsx)(ke, {
                className: `icon shrink-0`
            }), t[6] = c) : c = t[6];
            let l;
            t[7] !== r || t[8] !== a || t[9] !== i ? (l = i ? (0, Z.jsx)(`span`, {
                className: `text-sm font-medium whitespace-nowrap`,
                children: a.formatMessage($.filtersApplied, {
                    count: r
                })
            }) : null, t[7] = r, t[8] = a, t[9] = i, t[10] = l) : l = t[10];
            let u;
            return t[11] !== n || t[12] !== s || t[13] !== l ? (u = (0, Z.jsxs)(`button`, {
                type: `button`,
                className: s,
                ...n,
                children: [c, l]
            }), t[11] = n, t[12] = s, t[13] = l, t[14] = u) : u = t[14], u
        }, $t = e => {
            "use forget";
            let t = (0, Y.c)(7),
                {
                    kind: n
                } = e,
                r;
            t[0] === n ? r = t[1] : (r = (0, Z.jsx)(`p`, {
                className: `text-token-text-primary text-sm font-medium`,
                children: n === `results` ? (0, Z.jsx)(C, {
                    ...$.emptyResultsTitle
                }) : (0, Z.jsx)(C, {
                    ...$.emptyTitle
                })
            }), t[0] = n, t[1] = r);
            let i;
            t[2] === n ? i = t[3] : (i = (0, Z.jsx)(`p`, {
                className: `text-token-text-secondary max-w-md text-sm`,
                children: n === `results` ? (0, Z.jsx)(C, {
                    ...$.emptyResultsBody
                }) : (0, Z.jsx)(C, {
                    ...$.emptyBody
                })
            }), t[2] = n, t[3] = i);
            let a;
            return t[4] !== r || t[5] !== i ? (a = (0, Z.jsxs)(`div`, {
                className: `flex min-h-[240px] flex-col items-center justify-center gap-2 p-8 text-center`,
                children: [r, i]
            }), t[4] = r, t[5] = i, t[6] = a) : a = t[6], a
        }, en = e => {
            "use forget";
            let t = (0, Y.c)(63),
                {
                    skill: n,
                    isSubmitting: r,
                    onClose: i,
                    onSubmit: a
                } = e,
                s = re(),
                c;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (c = h()?.getWorkspaceId(), t[0] = c) : c = t[0];
            let l = c,
                [d, p] = (0, X.useState)(``),
                [m] = ie(d, 150),
                g;
            t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (g = [], t[1] = g) : g = t[1];
            let [_, v] = (0, X.useState)(g), y = me(l, 0, m, 10), b;
            t[2] === _ ? b = t[3] : (b = _.find(bt), t[2] = _, t[3] = b);
            let x = b,
                S = x?.id === n.creator_id,
                ee = x != null && !S && !r,
                te;
            t[4] !== s || t[5] !== x?.id || t[6] !== y.data?.items ? (te = y.data?.items?.map(e => ({
                kind: `user`,
                id: e.account_user_id,
                label: e.name ?? e.email ?? s.formatMessage($.unknownUser),
                sublabel: e.email ?? ``
            })).filter(e => e.id !== x?.id) ?? [], t[4] = s, t[5] = x?.id, t[6] = y.data?.items, t[7] = te) : te = t[7];
            let w = te,
                T;
            t[8] === s ? T = t[9] : (T = s.formatMessage($.changeOwnerTitle), t[8] = s, t[9] = T);
            let E;
            t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (E = (0, Z.jsx)(C, {
                ...$.cancel
            }), t[10] = E) : E = t[10];
            let D;
            t[11] !== r || t[12] !== i ? (D = (0, Z.jsx)(f, {
                type: `button`,
                color: `secondary`,
                disabled: r,
                onClick: i,
                children: E
            }), t[11] = r, t[12] = i, t[13] = D) : D = t[13];
            let ne = !ee,
                O;
            t[14] !== a || t[15] !== x ? (O = () => {
                x != null && a(x.id)
            }, t[14] = a, t[15] = x, t[16] = O) : O = t[16];
            let k;
            t[17] === Symbol.for(`react.memo_cache_sentinel`) ? (k = (0, Z.jsx)(C, {
                ...$.changeOwnerConfirm
            }), t[17] = k) : k = t[17];
            let A;
            t[18] !== r || t[19] !== ne || t[20] !== O ? (A = (0, Z.jsx)(f, {
                type: `button`,
                color: `primary`,
                disabled: ne,
                loading: r,
                onClick: O,
                children: k
            }), t[18] = r, t[19] = ne, t[20] = O, t[21] = A) : A = t[21];
            let j;
            t[22] !== A || t[23] !== D ? (j = (0, Z.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [D, A]
            }), t[22] = A, t[23] = D, t[24] = j) : j = t[24];
            let M;
            t[25] === n.name ? M = t[26] : (M = (0, Z.jsx)(`p`, {
                className: `text-token-text-secondary text-sm`,
                children: (0, Z.jsx)(C, {
                    ...$.changeOwnerDescription,
                    values: {
                        name: n.name
                    }
                })
            }), t[25] = n.name, t[26] = M);
            let N;
            t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (N = (0, Z.jsx)(`div`, {
                className: `text-token-text-secondary mb-2 block text-sm font-medium`,
                children: (0, Z.jsx)(C, {
                    ...$.newOwnerLabel
                })
            }), t[27] = N) : N = t[27];
            let P, F;
            t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (P = e => {
                v(e.filter(xt).slice(-1)), p(``)
            }, F = e => p(e), t[28] = P, t[29] = F) : (P = t[28], F = t[29]);
            let I;
            t[30] === s ? I = t[31] : (I = s.formatMessage($.newOwnerPlaceholder), t[30] = s, t[31] = I);
            let L;
            t[32] === d ? L = t[33] : (L = d.trim(), t[32] = d, t[33] = L);
            let R = L !== ``,
                z;
            t[34] !== d || t[35] !== y.isFetching ? (z = d.trim() !== `` && y.isFetching, t[34] = d, t[35] = y.isFetching, t[36] = z) : z = t[36];
            let B;
            t[37] !== d || t[38] !== y.isFetching ? (B = d.trim() !== `` && y.isFetching ? (0, Z.jsx)(o, {
                className: `icon-sm text-token-text-tertiary me-1`
            }) : void 0, t[37] = d, t[38] = y.isFetching, t[39] = B) : B = t[39];
            let V;
            t[40] === Symbol.for(`react.memo_cache_sentinel`) ? (V = {
                control: St,
                menu: Ct,
                menuList: wt
            }, t[40] = V) : V = t[40];
            let H;
            t[41] !== r || t[42] !== d || t[43] !== _ || t[44] !== I || t[45] !== R || t[46] !== z || t[47] !== B || t[48] !== w ? (H = (0, Z.jsx)(Ye, {
                value: _,
                disabled: r,
                inputValue: d,
                onChange: P,
                onSearch: F,
                options: w,
                placeholder: I,
                menuIsOpen: R,
                menuPlacement: `auto`,
                isLoading: z,
                trailingComponent: B,
                classNames: V
            }), t[41] = r, t[42] = d, t[43] = _, t[44] = I, t[45] = R, t[46] = z, t[47] = B, t[48] = w, t[49] = H) : H = t[49];
            let U;
            t[50] === S ? U = t[51] : (U = S && (0, Z.jsx)(`p`, {
                className: `text-token-text-tertiary mt-2 text-xs`,
                children: (0, Z.jsx)(C, {
                    ...$.sameOwnerHelp
                })
            }), t[50] = S, t[51] = U);
            let W;
            t[52] !== H || t[53] !== U ? (W = (0, Z.jsxs)(`div`, {
                children: [N, H, U]
            }), t[52] = H, t[53] = U, t[54] = W) : W = t[54];
            let G;
            t[55] !== M || t[56] !== W ? (G = (0, Z.jsxs)(`div`, {
                className: `flex flex-col gap-4`,
                children: [M, W]
            }), t[55] = M, t[56] = W, t[57] = G) : G = t[57];
            let ae;
            return t[58] !== i || t[59] !== j || t[60] !== G || t[61] !== T ? (ae = (0, Z.jsx)(u, {
                isOpen: !0,
                onClose: i,
                title: T,
                testId: `modal-admin-skill-change-owner`,
                className: `max-w-[520px]`,
                footerContent: j,
                footerClassName: `mt-5`,
                showCloseButton: !0,
                size: `custom`,
                allowVerticalContentToOverflow: !0,
                children: G
            }), t[58] = i, t[59] = j, t[60] = G, t[61] = T, t[62] = ae) : ae = t[62], ae
        }, $ = S({
            pageTitle: {
                id: `admin.skills.pageTitle`,
                defaultMessage: `Skills`
            },
            pageDescription: {
                id: `admin.skills.pageDescription`,
                defaultMessage: `Review workspace skills, update access, transfer ownership, and delete skills that should no longer be available.`
            },
            tableAriaLabel: {
                id: `admin.skills.tableAriaLabel`,
                defaultMessage: `Workspace skills`
            },
            openFilters: {
                id: `admin.skills.openFilters`,
                defaultMessage: `Open filters`
            },
            addSkill: {
                id: `admin.skills.addSkill`,
                defaultMessage: `Add skill`
            },
            filtersApplied: {
                id: `admin.skills.filtersApplied`,
                defaultMessage: `{count, plural, one {# filter applied} other {# filters applied}}`
            },
            clearAllFilters: {
                id: `admin.skills.clearAllFilters`,
                defaultMessage: `Clear all filters`
            },
            allAccess: {
                id: `admin.skills.allAccess`,
                defaultMessage: `All`
            },
            inviteOnlyAccess: {
                id: `admin.skills.inviteOnlyAccess`,
                defaultMessage: `Invite only`
            },
            workspaceAccess: {
                id: `admin.skills.workspaceAccess`,
                defaultMessage: `Workspace`
            },
            searchPlaceholder: {
                id: `admin.skills.searchPlaceholder`,
                defaultMessage: `Search skills`
            },
            columnSkill: {
                id: `admin.skills.columnSkill`,
                defaultMessage: `Skill`
            },
            columnOwner: {
                id: `admin.skills.columnOwner`,
                defaultMessage: `Owner`
            },
            columnAccess: {
                id: `admin.skills.columnAccess`,
                defaultMessage: `Access`
            },
            columnUsers: {
                id: `admin.skills.columnUsers`,
                defaultMessage: `Users`
            },
            columnInvocations: {
                id: `admin.skills.columnInvocations30d`,
                defaultMessage: `Invocations (30d)`
            },
            columnCreated: {
                id: `admin.skills.columnCreated`,
                defaultMessage: `Created`
            },
            columnUpdated: {
                id: `admin.skills.columnUpdated`,
                defaultMessage: `Updated`
            },
            columnActions: {
                id: `admin.skills.columnActions`,
                defaultMessage: `Actions`
            },
            openActions: {
                id: `admin.skills.openActions`,
                defaultMessage: `Open skill actions`
            },
            openDetails: {
                id: `admin.skills.openDetails`,
                defaultMessage: `View details for {name}`
            },
            allWorkspaceUsers: {
                id: `admin.skills.allWorkspaceUsers`,
                defaultMessage: `All`
            },
            directUserCount: {
                id: `admin.skills.directUserCount`,
                defaultMessage: `{count, plural, one {# user} other {# users}}`
            },
            emptyValue: {
                id: `admin.skills.emptyValue`,
                defaultMessage: `-`
            },
            unassignedCreator: {
                id: `admin.skills.unassignedCreator`,
                defaultMessage: `Unassigned`
            },
            loadFailed: {
                id: `admin.skills.loadFailed`,
                defaultMessage: `Failed to load skills.`
            },
            loadFailedHint: {
                id: `admin.skills.loadFailedHint`,
                defaultMessage: `If Skills are disabled for this workspace, enable them in workspace settings and try again.`
            },
            retry: {
                id: `admin.skills.retry`,
                defaultMessage: `Retry`
            },
            emptyTitle: {
                id: `admin.skills.emptyTitle`,
                defaultMessage: `No skills yet`
            },
            emptyBody: {
                id: `admin.skills.emptyBody`,
                defaultMessage: `Skills created in this workspace will appear here once they exist.`
            },
            emptyResultsTitle: {
                id: `admin.skills.emptyResultsTitle`,
                defaultMessage: `No skills match your current view`
            },
            emptyResultsBody: {
                id: `admin.skills.emptyResultsBody`,
                defaultMessage: `Try adjusting your search or filters.`
            },
            deleteTitle: {
                id: `admin.skills.deleteTitle`,
                defaultMessage: `Delete skill?`
            },
            deleteDescription: {
                id: `admin.skills.deleteDescription`,
                defaultMessage: `This will permanently delete "{name}" from the workspace. People who currently have access will no longer be able to use it.`
            },
            deleteConfirm: {
                id: `admin.skills.deleteConfirm`,
                defaultMessage: `Delete`
            },
            cancel: {
                id: `admin.skills.cancel`,
                defaultMessage: `Cancel`
            },
            deleteSuccess: {
                id: `admin.skills.deleteSuccess`,
                defaultMessage: `Deleted {name}`
            },
            deleteFailed: {
                id: `admin.skills.deleteFailed`,
                defaultMessage: `Failed to delete skill.`
            },
            changeOwnerTitle: {
                id: `admin.skills.changeOwnerTitle`,
                defaultMessage: `Change owner`
            },
            changeOwnerDescription: {
                id: `admin.skills.changeOwnerDescription`,
                defaultMessage: `Choose a new owner for "{name}". The current owner will keep access after the transfer.`
            },
            newOwnerLabel: {
                id: `admin.skills.newOwnerLabel`,
                defaultMessage: `New owner`
            },
            newOwnerPlaceholder: {
                id: `admin.skills.newOwnerPlaceholder`,
                defaultMessage: `Search workspace users`
            },
            changeOwnerConfirm: {
                id: `admin.skills.changeOwnerConfirm`,
                defaultMessage: `Change owner`
            },
            changeOwnerSuccess: {
                id: `admin.skills.changeOwnerSuccess`,
                defaultMessage: `Changed owner for {name}`
            },
            changeOwnerFailed: {
                id: `admin.skills.changeOwnerFailed`,
                defaultMessage: `Failed to change owner.`
            },
            downloadSuccess: {
                id: `admin.skills.downloadSuccess`,
                defaultMessage: `Download started`
            },
            downloadFailed: {
                id: `admin.skills.downloadFailed`,
                defaultMessage: `Unable to download the skill. Please try again.`
            },
            sameOwnerHelp: {
                id: `admin.skills.sameOwnerHelp`,
                defaultMessage: `This user is already the owner.`
            },
            unknownUser: {
                id: `admin.skills.unknownUser`,
                defaultMessage: `Unknown user`
            }
        })
    })),
    nn, rn, an, on = e((() => {
        b(), nn = k(), tn(), tt(), rn = x(), an = T(function() {
            "use forget";
            let e = (0, nn.c)(1);
            et();
            let t;
            return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, rn.jsx)(Ht, {}), e[0] = t) : t = e[0], t
        })
    }));
e((() => {
    on()
}))();
export {
    an as
    default
};
//# sourceMappingURL=admin.skills-unl7hyn2.js.map
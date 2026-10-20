import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A5 as r,
    Az as i,
    G5 as a,
    I1 as o,
    K5 as s,
    OO as c,
    RU as l,
    S1 as u,
    f8 as d,
    jz as f,
    vO as ee,
    zU as p
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    A as m,
    Bn as h,
    N as g,
    Nn as _,
    O as v,
    Rn as y,
    Vn as te,
    p as ne,
    s as b,
    wn as x,
    zn as re
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $v as ie,
    Px as ae,
    ey as oe,
    jx as S,
    ty as se
} from "./c2675c8c-fpv9s4kvd412dyap.js";
import {
    Kn as ce,
    Xn as le
} from "./1c919af1-abbe8u4rjagje3yr.js";
import {
    t as ue
} from "./a35abcd6-o5uzbzp1jprs3y1b.js";
import {
    D as de,
    O as fe,
    b as pe,
    c as me,
    f as he,
    h as ge,
    m as _e,
    o as ve,
    s as ye,
    v as be,
    w as xe,
    y as Se
} from "./b26e60ff-j8fjcjasbqqgifgd.js";
import {
    s as Ce,
    t as we
} from "./46464433-ladl1n0axikr8gyx.js";
import {
    n as Te,
    t as Ee
} from "./5afd4cd2-pa70m24axusvn0hx.js";
import {
    c as De,
    f as Oe,
    n as ke,
    r as C,
    u as Ae
} from "./eec17ee5-fdfjyfmbzzdpknv9.js";
import {
    a as je,
    n as w,
    r as Me
} from "./63f6a4cc-gfqyw4iaes3dr1nm.js";
import {
    i as Ne,
    l as T,
    n as Pe,
    r as E
} from "./bb6515d2-ega2epfujxx49sd4.js";
import {
    a as D,
    c as Fe,
    d as Ie,
    l as Le,
    n as O,
    p as k,
    r as Re,
    t as ze
} from "./5a69c9a5-fqt0pz7jkoobeec9.js";
import {
    n as Be,
    r as Ve,
    s as He
} from "./26265142-fy0icchhqbogaek5.js";
import {
    a as Ue,
    i as We,
    o as Ge,
    s as A
} from "./122af5aa-ltlkro6lgoihtipj.js";
import {
    n as Ke,
    t as j
} from "./52e36ea1-d9qqtypjpxbx1jrf.js";
import {
    n as M,
    t as qe
} from "./824cfc3b-ok1f8qlf2vqlt9bq.js";
var Je, N, Ye, P, Xe = e((() => {
        Je = x(), f(), s(), N = h(), Ye = e => {
            "use forget";
            let t = (0, Je.c)(25),
                {
                    labelledBy: n,
                    installed: r,
                    disabled: a,
                    loading: o,
                    loadingLabel: s,
                    availableLabel: c,
                    installedLabel: l,
                    onInstalledChange: u
                } = e,
                d = o !== void 0 && o,
                f;
            t[0] !== d || t[1] !== s ? (f = d ? (0, N.jsx)(`span`, {
                role: `status`,
                "aria-label": s,
                children: (0, N.jsx)(i, {
                    className: `text-token-text-secondary size-4`
                })
            }) : null, t[0] = d, t[1] = s, t[2] = f) : f = t[2];
            let ee = !r,
                p;
            t[3] === u ? p = t[4] : (p = () => u(!1), t[3] = u, t[4] = p);
            let m;
            t[5] !== c || t[6] !== a || t[7] !== ee || t[8] !== p ? (m = (0, N.jsx)(P, {
                selected: ee,
                disabled: a,
                onClick: p,
                children: c
            }), t[5] = c, t[6] = a, t[7] = ee, t[8] = p, t[9] = m) : m = t[9];
            let h;
            t[10] === u ? h = t[11] : (h = () => u(!0), t[10] = u, t[11] = h);
            let g;
            t[12] !== a || t[13] !== r || t[14] !== l || t[15] !== h ? (g = (0, N.jsx)(P, {
                selected: r,
                disabled: a,
                onClick: h,
                children: l
            }), t[12] = a, t[13] = r, t[14] = l, t[15] = h, t[16] = g) : g = t[16];
            let _;
            t[17] !== n || t[18] !== d || t[19] !== m || t[20] !== g ? (_ = (0, N.jsxs)(`div`, {
                role: `radiogroup`,
                "aria-labelledby": n,
                "aria-busy": d,
                className: `bg-token-bg-secondary flex overflow-hidden rounded-full p-0.5`,
                children: [m, g]
            }), t[17] = n, t[18] = d, t[19] = m, t[20] = g, t[21] = _) : _ = t[21];
            let v;
            return t[22] !== f || t[23] !== _ ? (v = (0, N.jsxs)(`div`, {
                className: `flex shrink-0 items-center gap-2`,
                children: [f, _]
            }), t[22] = f, t[23] = _, t[24] = v) : v = t[24], v
        }, P = e => {
            "use forget";
            let t = (0, Je.c)(9),
                {
                    selected: n,
                    disabled: r,
                    onClick: i,
                    children: o
                } = e,
                s = n ? `bg-token-bg-primary text-token-text-primary shadow-xs` : `text-token-text-primary hover:bg-token-bg-primary/60`,
                c = r && `cursor-not-allowed opacity-60`,
                l;
            t[0] !== s || t[1] !== c ? (l = a(`rounded-full px-3 py-1 text-sm leading-5 transition-colors`, s, c), t[0] = s, t[1] = c, t[2] = l) : l = t[2];
            let u;
            return t[3] !== o || t[4] !== r || t[5] !== i || t[6] !== n || t[7] !== l ? (u = (0, N.jsx)(`button`, {
                type: `button`,
                role: `radio`,
                "aria-checked": n,
                disabled: r,
                onClick: i,
                className: l,
                children: o
            }), t[3] = o, t[4] = r, t[5] = i, t[6] = n, t[7] = l, t[8] = u) : u = t[8], u
        }
    })),
    F = t({
        AdminPluginAvailabilitySection: () => st
    });

function Ze(e) {
    return e.data == null ? [] : [e.data.primaryConnector.id]
}

function Qe(e) {
    return e.isError
}

function $e(e) {
    return e.isError
}

function et(e) {
    return e.isSuccess
}

function tt(e) {
    return e.isSuccess
}

function nt(e) {
    let {
        role: t
    } = e;
    return t.id
}

function rt(e) {
    return ve(e.data?.roles_with_permissions).map(nt)
}

function it(e) {
    return e.id
}

function at(e) {
    return !ae(e)
}
var ot, I, L, st, ct = e((() => {
    ot = x(), j(), Oe(), A(), D(), k(), d(), Ce(), T(), c(), S(), me(), Xe(), fe(), Se(), o(), p(), ue(), b(), I = n(te()), y(), w(), C(), E(), Te(), O(), se(), M(), He(), L = h(), st = e => {
        "use forget";
        let t = (0, ot.c)(134),
            {
                pluginReference: n,
                workspaceId: i,
                disabled: a,
                staged: o,
                controlOnly: s
            } = e,
            c = re(),
            d;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (d = l(), t[0] = d) : d = t[0];
        let f = d,
            p = g(),
            h = (0, I.useId)(),
            [y, te] = (0, I.useState)(!1),
            {
                transport: b,
                includeDependencies: x
            } = r(De),
            S = r(u)?.normalizedAccountUserId,
            se = r(_e),
            ue = r(he),
            fe;
        t[1] !== b || t[2] !== x || t[3] !== n || t[4] !== i ? (fe = {
            pluginId: n,
            workspaceId: i,
            transport: b,
            includeDependencies: x
        }, t[1] = b, t[2] = x, t[3] = n, t[4] = i, t[5] = fe) : fe = t[5];
        let me = (0, I.useRef)(fe),
            ve, Se;
        t[6] !== b || t[7] !== x || t[8] !== n || t[9] !== p || t[10] !== i ? (ve = () => {
            let e = me.current,
                t = {
                    pluginId: n,
                    workspaceId: i,
                    transport: b,
                    includeDependencies: x
                };
            me.current = t, Ke({
                queryClient: p,
                previous: e,
                next: t
            })
        }, Se = [n, i, b, x, p], t[6] = b, t[7] = x, t[8] = n, t[9] = p, t[10] = i, t[11] = ve, t[12] = Se) : (ve = t[11], Se = t[12]), (0, I.useEffect)(ve, Se);
        let Ce;
        t[13] !== b || t[14] !== n || t[15] !== i ? (Ce = () => {
            Ae(b, i, n)
        }, t[13] = b, t[14] = n, t[15] = i, t[16] = Ce) : Ce = t[16];
        let Te;
        t[17] !== S || t[18] !== b || t[19] !== x || t[20] !== n || t[21] !== i ? (Te = [n, i, b, x, S], t[17] = S, t[18] = b, t[19] = x, t[20] = n, t[21] = i, t[22] = Te) : Te = t[22], (0, I.useEffect)(Ce, Te);
        let Oe;
        t[23] !== S || t[24] !== b || t[25] !== x || t[26] !== n || t[27] !== i ? (Oe = ke(n, i, b, x, S), t[23] = S, t[24] = b, t[25] = x, t[26] = n, t[27] = i, t[28] = Oe) : Oe = t[28];
        let C = Oe,
            w = v(C).data,
            T = w?.id ?? n,
            E = w?.workspace_settings ?? o?.fallbackSettings ?? null,
            D = o?.draft == null || E == null ? E : {
                ...E,
                installation_policy: o.draft.installation_policy ?? E.installation_policy,
                installed_by_default_role_ids: o.draft.installed_by_default_role_ids ?? E.installed_by_default_role_ids
            },
            O = ee(),
            k = O && w != null,
            He = qe(i),
            A = v({
                ...He,
                enabled: He.enabled && k
            }),
            j = (A.data?.data ?? []).toSorted(de),
            M = Be(w),
            Je = [...new Set(w?.release.required_app_id_groups?.flat() ?? M)],
            N = Je.length > 0,
            P = r(Le),
            Xe = r(Re),
            F = i,
            nt;
        t[29] !== P || t[30] !== F || t[31] !== S ? (nt = {
            workspaceId: F,
            transport: P,
            workspaceUserId: S
        }, t[29] = P, t[30] = F, t[31] = S, t[32] = nt) : nt = t[32];
        let st = (0, I.useRef)(nt),
            ct, lt;
        t[33] !== P || t[34] !== F || t[35] !== S || t[36] !== p ? (lt = () => {
            let e = {
                workspaceId: F,
                transport: P,
                workspaceUserId: S
            };
            Fe({
                queryClient: p,
                previous: st.current,
                next: e
            }), st.current = e
        }, ct = [F, P, S, p], t[33] = P, t[34] = F, t[35] = S, t[36] = p, t[37] = ct, t[38] = lt) : (ct = t[37], lt = t[38]), (0, I.useEffect)(lt, ct);
        let ut = i !== `` && k && N;
        (0, I.useEffect)(() => {
            Ie(P, F, ut)
        }, [P, F, S, ut, JSON.stringify([...new Set(M)].sort())]);
        let dt = ze({
                transport: P,
                nativeAppDetailsRecoveryEnabled: Xe,
                workspaceUserId: S,
                appIds: M,
                workspaceId: i
            }),
            ft = v({
                ...dt,
                enabled: dt.enabled && k && N
            }),
            pt = new Set(M),
            mt = [...new Map(Je.flatMap(e => {
                let t = Ve(ft.data, e, pt);
                return t == null ? [] : [
                    [t.id, t]
                ]
            })).values()],
            ht = r(we),
            gt = r(Ne),
            _t = k && N ? mt.map(e => Pe({
                transport: ht,
                ckTransport: gt,
                appId: e.id,
                directoryApp: e,
                workspaceId: i
            })) : [],
            vt;
        t[39] === _t ? vt = t[40] : (vt = {
            queries: _t
        }, t[39] = _t, t[40] = vt);
        let R = m(vt),
            z, yt, bt;
        t[41] !== R || t[42] !== k || t[43] !== i ? (z = [...new Set(R.flatMap(Ze))], yt = m, bt = {
            queries: k ? z.map(e => Ee({
                connectorId: e,
                workspaceId: i
            })) : []
        }, t[41] = R, t[42] = k, t[43] = i, t[44] = z, t[45] = yt, t[46] = bt) : (z = t[44], yt = t[45], bt = t[46]);
        let B = yt(bt),
            xt;
        t[47] !== ft || t[48] !== N || t[49] !== R || t[50] !== B ? (xt = N && (ft.isError || R.some(Qe) || B.some($e)), t[47] = ft, t[48] = N, t[49] = R, t[50] = B, t[51] = xt) : xt = t[51];
        let St = xt,
            Ct = !N || ft.isSuccess && mt.length > 0 && R.every(et) && B.length === z.length && z.length > 0 && B.every(tt),
            V = A.isSuccess && Ct ? N ? new Set(B.flatMap(rt)) : new Set(j.map(it)) : null,
            H = Ue(D) && V != null ? new Set(ye({
                settings: D,
                eligibleRoleIds: V
            })) : new Set,
            U = j.find(ae),
            wt = U == null ? D?.installation_policy === `INSTALLED_BY_DEFAULT` && D.installed_by_default_role_ids.length === 0 : H.has(U.id),
            Tt = j.filter(at),
            Et = Tt.filter(e => V?.has(e.id) && H.has(e.id) !== wt),
            W = y ? Tt : Et,
            G = k && (A.isLoading || !Ct && !St),
            Dt = A.isError || St,
            Ot = !G && !Dt && Tt.length > Et.length,
            kt;
        t[52] !== T || t[53] !== i || t[54] !== se ? (kt = be(i, T, se), t[52] = T, t[53] = i, t[54] = se, t[55] = kt) : kt = t[55];
        let K = kt,
            At;
        t[56] !== ue || t[57] !== S || t[58] !== E || t[59] !== w || t[60] !== T || t[61] !== o || t[62] !== i ? (At = async e => {
            let {
                settings: t
            } = e, n = u();
            if (E != null && !Ge(E) || w == null || !We(w) || n?.getWorkspaceId() !== i || n.normalizedAccountUserId !== S || !n.isAdminOfAccount() && !n.isOwnerOfAccount() || o != null && !o.canUpdate()) throw Error(`Workspace administrator authorization changed.`);
            return await xe({
                workspaceId: i,
                workspaceUserId: S,
                pluginId: T,
                settings: t,
                transport: ue
            })
        }, t[56] = ue, t[57] = S, t[58] = E, t[59] = w, t[60] = T, t[61] = o, t[62] = i, t[63] = At) : At = t[63];
        let jt = At,
            q;
        t[64] !== T || t[65] !== i ? (q = ie(i, T), t[64] = T, t[65] = i, t[66] = q) : q = t[66];
        let J;
        t[67] !== b || t[68] !== x || t[69] !== T || t[70] !== C || t[71] !== K || t[72] !== p || t[73] !== i ? (J = async e => {
            let {
                settings: t
            } = e, n = {
                workspaceId: i,
                pluginId: T,
                detailReadTransport: b,
                includeDependencies: x,
                detailQueryKey: C.queryKey,
                settingsQueryKey: K
            };
            await p.cancelQueries({
                queryKey: n.detailQueryKey,
                exact: !0
            }), await p.cancelQueries({
                queryKey: n.settingsQueryKey,
                exact: !0
            });
            let r = p.getQueryData(n.detailQueryKey),
                a = p.getQueryData(n.settingsQueryKey);
            return a == null ? r?.workspace_settings != null && p.setQueryData(n.detailQueryKey, {
                ...r,
                workspace_settings: {
                    ...r.workspace_settings,
                    installation_policy: t.installation_policy ?? r.workspace_settings.installation_policy,
                    installed_by_default_role_ids: t.installed_by_default_role_ids ?? r.workspace_settings.installed_by_default_role_ids
                }
            }) : je({
                queryClient: p,
                ...n,
                settings: {
                    ...a,
                    installation_policy: t.installation_policy ?? a.installation_policy,
                    installed_by_default_role_ids: t.installed_by_default_role_ids ?? a.installed_by_default_role_ids
                }
            }), {
                ...n,
                previousPlugin: r,
                previousSettings: a
            }
        }, t[67] = b, t[68] = x, t[69] = T, t[70] = C, t[71] = K, t[72] = p, t[73] = i, t[74] = J) : J = t[74];
        let Y;
        t[75] !== c || t[76] !== T || t[77] !== C || t[78] !== K || t[79] !== p || t[80] !== o || t[81] !== i ? (Y = async (e, t, n) => {
            if (je({
                    queryClient: p,
                    workspaceId: n?.workspaceId ?? i,
                    pluginId: n?.pluginId ?? T,
                    settings: e
                }), o != null && !o.canUpdate()) {
                await Promise.all([p.invalidateQueries({
                    queryKey: n?.detailQueryKey ?? C.queryKey,
                    refetchType: `none`
                }), p.invalidateQueries({
                    queryKey: n?.settingsQueryKey ?? K,
                    refetchType: `none`
                }), p.invalidateQueries({
                    queryKey: oe(`list`, n?.workspaceId ?? i),
                    refetchType: `none`
                })]);
                return
            }
            await Me({
                queryClient: p,
                workspaceId: n?.workspaceId ?? i,
                pluginId: n?.pluginId ?? T
            }), !(o != null && !o.canUpdate()) && (f.success(c.formatMessage({
                id: `admin.plugins.v2.detail.availability.toast.success`,
                defaultMessage: `Workspace availability updated.`
            })), o?.onSaveSuccess())
        }, t[75] = c, t[76] = T, t[77] = C, t[78] = K, t[79] = p, t[80] = o, t[81] = i, t[82] = Y) : Y = t[82];
        let X;
        t[83] !== c || t[84] !== p || t[85] !== o ? (X = (e, t, n) => {
            n?.previousSettings == null ? n?.previousPlugin != null && p.setQueryData(n.detailQueryKey, n.previousPlugin) : je({
                queryClient: p,
                workspaceId: n.workspaceId,
                pluginId: n.pluginId,
                settingsQueryKey: n.settingsQueryKey,
                detailReadTransport: n.detailReadTransport,
                includeDependencies: n.includeDependencies,
                settings: n.previousSettings
            }), !(o != null && !o.canUpdate()) && f.danger(c.formatMessage({
                id: `admin.plugins.v2.detail.availability.toast.failure`,
                defaultMessage: `Could not update workspace availability.`
            }))
        }, t[83] = c, t[84] = p, t[85] = o, t[86] = X) : X = t[86];
        let Mt;
        t[87] !== q || t[88] !== J || t[89] !== Y || t[90] !== X || t[91] !== jt ? (Mt = {
            mutationKey: q,
            mutationFn: jt,
            onMutate: J,
            onSuccess: Y,
            onError: X
        }, t[87] = q, t[88] = J, t[89] = Y, t[90] = X, t[91] = jt, t[92] = Mt) : Mt = t[92];
        let Z = ne(Mt),
            Nt;
        t[93] !== Z.isPending || t[94] !== a || t[95] !== E || t[96] !== w ? (Nt = a || Z.isPending || E != null && !Ge(E) || w == null || !We(w), t[93] = Z.isPending, t[94] = a, t[95] = E, t[96] = w, t[97] = Nt) : Nt = t[97];
        let Q = Nt,
            Pt;
        t[98] !== Q || t[99] !== w || t[100] !== o || t[101] !== i ? (Pt = () => w != null && i !== `` && u()?.getWorkspaceId() === i && (o == null || o.canUpdate()) && !Q, t[98] = Q, t[99] = w, t[100] = o, t[101] = i, t[102] = Pt) : Pt = t[102];
        let $ = Pt,
            Ft = e => {
                if (o == null || !Ge(E)) return;
                let t = e.installation_policy ?? E.installation_policy,
                    n = e.installed_by_default_role_ids ?? E.installed_by_default_role_ids,
                    r = O && V != null ? !pe(new Set(ye({
                        settings: E,
                        eligibleRoleIds: V
                    })), new Set(ye({
                        settings: {
                            installation_policy: t,
                            installed_by_default_role_ids: n
                        },
                        eligibleRoleIds: V
                    }))) : t !== E.installation_policy;
                o.onDraftChange(r ? e : null)
            },
            It = e => {
                if (!$() || e === wt) return;
                if (O) {
                    if (U == null || V == null || !V.has(U.id)) return;
                    Lt(U, e);
                    return
                }
                let t = ge({
                    mode: e ? `installed_by_default` : `available`
                });
                if (o != null) {
                    Ft(t);
                    return
                }
                Z.mutate({
                    settings: t,
                    savingRoleId: null
                })
            },
            Lt = (e, t) => {
                if (!$() || V == null || !V.has(e.id) || H.has(e.id) === t) return;
                let n = new Set(H);
                t ? n.add(e.id) : n.delete(e.id);
                let r = ge({
                    mode: n.size === 0 ? `available` : n.size === V.size ? `installed_by_default` : `custom_by_group`,
                    installedByDefaultRoleIds: n,
                    eligibleRoleIds: V
                });
                if (o != null) {
                    Ft(r);
                    return
                }
                Z.mutate({
                    settings: r,
                    savingRoleId: e.id
                })
            },
            Rt;
        t[103] === c ? Rt = t[104] : (Rt = c.formatMessage({
            id: `admin.plugins.v2.detail.availability.available.label`,
            defaultMessage: `Available`
        }), t[103] = c, t[104] = Rt);
        let zt = Rt,
            Bt;
        t[105] === c ? Bt = t[106] : (Bt = c.formatMessage({
            id: `admin.plugins.v2.detail.availability.installed.label`,
            defaultMessage: `Installed`
        }), t[105] = c, t[106] = Bt);
        let Vt = Bt,
            Ht;
        t[107] === c ? Ht = t[108] : (Ht = c.formatMessage({
            id: `admin.plugins.v2.detail.availability.saving.label`,
            defaultMessage: `Saving workspace availability`
        }), t[107] = c, t[108] = Ht);
        let Ut = Ht;
        if (s != null) {
            let e = s.roleId == null ? U : j.find(e => e.id === s.roleId);
            return (0, L.jsx)(Ye, {
                labelledBy: s.labelledBy,
                installed: s.roleId == null ? wt : e != null && H.has(e.id),
                disabled: Q || G || Dt || s.roleId != null && !O || O && (e == null || !V?.has(e.id)),
                loading: Z.isPending || G,
                loadingLabel: Ut,
                availableLabel: zt,
                installedLabel: Vt,
                onInstalledChange: t => {
                    s.roleId == null ? It(t) : e != null && Lt(e, t)
                }
            })
        }
        let Wt;
        t[109] === Symbol.for(`react.memo_cache_sentinel`) ? (Wt = (0, L.jsx)(`div`, {
            id: `admin-plugin-v2-workspace-availability-label`,
            className: `text-token-text-primary text-sm font-medium`,
            children: (0, L.jsx)(_, {
                id: `admin.plugins.v2.detail.availability.workspace.label`,
                defaultMessage: `Workspace default`
            })
        }), t[109] = Wt) : Wt = t[109];
        let Gt;
        t[110] === O ? Gt = t[111] : (Gt = (0, L.jsxs)(`div`, {
            className: `min-w-0`,
            children: [Wt, (0, L.jsx)(`p`, {
                className: `text-token-text-secondary mt-0.5 text-xs`,
                children: O ? (0, L.jsx)(_, {
                    id: `admin.plugins.v2.detail.availability.workspace.role.description`,
                    defaultMessage: `The default for users who are not assigned a role`
                }) : (0, L.jsx)(_, {
                    id: `admin.plugins.v2.detail.availability.workspace.description`,
                    defaultMessage: `Applies to everyone in this workspace`
                })
            })]
        }), t[110] = O, t[111] = Gt);
        let Kt;
        t[112] !== c || t[113] !== O || t[114] !== G || t[115] !== W ? (Kt = O && G ? (0, L.jsx)(`div`, {
            "aria-busy": `true`,
            "aria-label": c.formatMessage({
                id: `admin.plugins.v2.detail.availability.roles.loading`,
                defaultMessage: `Loading role availability`
            }),
            role: `status`,
            className: `group skeleton [--skeleton-opacity:0.75]`,
            children: [0, 1].map(e => (0, L.jsxs)(`div`, {
                "aria-hidden": !0,
                className: `border-token-border-light relative ms-8 flex min-h-[64px] flex-col gap-3 border-b py-4 sm:flex-row sm:items-center sm:justify-between`,
                children: [e === 0 && W.length === 0 ? (0, L.jsx)(ce, {
                    "aria-hidden": !0,
                    className: `text-token-text-secondary icon-sm absolute -start-8 top-4 shrink-0 sm:top-1/2 sm:-translate-y-1/2 rtl:-scale-x-100`
                }) : null, (0, L.jsxs)(`span`, {
                    className: `flex min-w-0 items-center gap-2`,
                    children: [(0, L.jsx)(`span`, {
                        className: `skeleton-child size-5 shrink-0 rounded-md`
                    }), (0, L.jsx)(`span`, {
                        className: `skeleton-child h-4 w-32 max-w-full rounded-md`
                    })]
                }), (0, L.jsxs)(`span`, {
                    className: `bg-token-bg-secondary flex w-fit shrink-0 gap-1 rounded-full p-0.5`,
                    children: [(0, L.jsx)(`span`, {
                        className: `skeleton-child h-7 w-20 rounded-full`
                    }), (0, L.jsx)(`span`, {
                        className: `skeleton-child h-7 w-16 rounded-full`
                    })]
                })]
            }, e))
        }) : null, t[112] = c, t[113] = O, t[114] = G, t[115] = W, t[116] = Kt) : Kt = t[116];
        let qt;
        t[117] !== O || t[118] !== Dt || t[119] !== G ? (qt = O && !G && Dt ? (0, L.jsx)(`p`, {
            role: `alert`,
            className: `border-token-border-light text-token-text-secondary border-b py-4 text-sm`,
            children: (0, L.jsx)(_, {
                id: `admin.plugins.v2.detail.availability.roles.error`,
                defaultMessage: `Unable to load role overrides.`
            })
        }) : null, t[117] = O, t[118] = Dt, t[119] = G, t[120] = qt) : qt = t[120];
        let Jt;
        t[121] !== Ot || t[122] !== Q || t[123] !== O || t[124] !== Et || t[125] !== y || t[126] !== W ? (Jt = O && Ot ? (0, L.jsxs)(`button`, {
            type: `button`,
            "aria-expanded": y,
            disabled: Q,
            onClick: () => te(!y),
            className: `text-token-text-secondary hover:text-token-text-primary relative ms-8 flex min-h-12 items-center text-sm disabled:cursor-not-allowed disabled:opacity-60`,
            children: [W.length === 0 ? (0, L.jsx)(ce, {
                "aria-hidden": !0,
                className: `icon-sm absolute -start-8 top-1/2 shrink-0 -translate-y-1/2 rtl:-scale-x-100`
            }) : null, y ? (0, L.jsx)(_, {
                id: `admin.plugins.v2.detail.availability.roles.hide`,
                defaultMessage: `Hide roles`
            }) : Et.length > 0 ? (0, L.jsx)(_, {
                id: `admin.plugins.v2.detail.availability.roles.show_all`,
                defaultMessage: `See all roles`
            }) : (0, L.jsx)(_, {
                id: `admin.plugins.v2.detail.availability.roles.add`,
                defaultMessage: `Customize per role`
            })]
        }) : null, t[121] = Ot, t[122] = Q, t[123] = O, t[124] = Et, t[125] = y, t[126] = W, t[127] = Jt) : Jt = t[127];
        let Yt = (0, L.jsxs)(`div`, {
            children: [(0, L.jsxs)(`div`, {
                className: `border-token-border-light flex min-h-[72px] flex-col gap-3 border-b py-4 sm:flex-row sm:items-center sm:justify-between`,
                children: [Gt, (0, L.jsx)(Ye, {
                    labelledBy: `admin-plugin-v2-workspace-availability-label`,
                    installed: wt,
                    disabled: Q || O && (V == null || U == null || !V.has(U.id)),
                    loading: Z.isPending && (Z.variables.savingRoleId == null || Z.variables.savingRoleId === U?.id),
                    loadingLabel: Ut,
                    availableLabel: zt,
                    installedLabel: Vt,
                    onInstalledChange: It
                })]
            }), O ? W.map((e, t) => {
                let n = `${h}-${e.id}`;
                return (0, L.jsxs)(`div`, {
                    className: `border-token-border-light relative ms-8 flex min-h-[64px] flex-col gap-3 border-b py-4 sm:flex-row sm:items-center sm:justify-between`,
                    children: [t === 0 ? (0, L.jsx)(ce, {
                        "aria-hidden": !0,
                        className: `text-token-text-secondary icon-sm absolute -start-8 top-4 shrink-0 sm:top-1/2 sm:-translate-y-1/2 rtl:-scale-x-100`
                    }) : null, (0, L.jsxs)(`div`, {
                        className: `flex min-w-0 items-center gap-2`,
                        children: [(0, L.jsx)(le, {
                            "aria-hidden": !0,
                            className: `text-token-text-secondary icon-sm shrink-0`
                        }), (0, L.jsx)(`span`, {
                            id: n,
                            className: `text-token-text-primary truncate text-sm`,
                            children: e.name
                        })]
                    }), (0, L.jsx)(Ye, {
                        labelledBy: n,
                        installed: H.has(e.id),
                        disabled: Q || !V?.has(e.id),
                        loading: Z.isPending && Z.variables.savingRoleId === e.id,
                        loadingLabel: Ut,
                        availableLabel: zt,
                        installedLabel: Vt,
                        onInstalledChange: t => Lt(e, t)
                    })]
                }, e.id)
            }) : null, Kt, qt, Jt]
        });
        if (o == null) return Yt;
        let Xt;
        return t[128] !== Z || t[129] !== $ || t[130] !== V || t[131] !== O || t[132] !== o.draft ? (Xt = e => {
            e.preventDefault(), !(o.draft == null || !$() || O && (V == null || o.draft.installed_by_default_role_ids?.some(e => !V.has(e)))) && Z.mutate({
                settings: o.draft,
                savingRoleId: null
            })
        }, t[128] = Z, t[129] = $, t[130] = V, t[131] = O, t[132] = o.draft, t[133] = Xt) : Xt = t[133], (0, L.jsx)(`form`, {
            id: o.formId,
            onSubmit: Xt,
            children: Yt
        })
    }
}));
export {
    F as n, ct as r, st as t
};
//# sourceMappingURL=6e0b8cd0-6jl063xyn4nhzdfw.js.map
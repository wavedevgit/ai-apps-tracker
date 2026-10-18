import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B6 as r,
    X$ as i,
    b5 as a,
    dz as o,
    eO as s,
    fU as c,
    fz as l,
    i5 as u,
    pU as d,
    u1 as f,
    uO as p,
    y5 as m
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    A as h,
    Bn as g,
    N as _,
    Nn as v,
    O as y,
    Rn as b,
    Vn as ee,
    p as te,
    s as x,
    wn as S,
    zn as ne
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $v as re,
    cy as C,
    dy as ie,
    ey as ae,
    ty as oe
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    Kn as se,
    Xn as ce
} from "./1c919af1-abbe8u4rjagje3yr.js";
import {
    t as le
} from "./a35abcd6-o5uzbzp1jprs3y1b.js";
import {
    D as ue,
    O as de,
    b as fe,
    c as pe,
    f as me,
    h as he,
    m as ge,
    o as _e,
    s as ve,
    v as ye,
    w as be,
    y as xe
} from "./b26e60ff-md253wx0ie8rb93v.js";
import {
    s as Se,
    t as Ce
} from "./46464433-i8k628j3n5wwc6bl.js";
import {
    n as we,
    t as Te
} from "./5afd4cd2-ho4qltbdt92gbm9u.js";
import {
    c as Ee,
    f as w,
    n as De,
    r as T,
    u as Oe
} from "./eec17ee5-lm6v8wlbrzui7fe1.js";
import {
    a as ke,
    n as E,
    r as Ae
} from "./63f6a4cc-m1zithitonrh3vsl.js";
import {
    i as je,
    l as D,
    n as Me,
    r as O
} from "./bb6515d2-kwgbk3krkzbqnh7d.js";
import {
    a as k,
    c as Ne,
    d as Pe,
    l as Fe,
    n as A,
    p as j,
    r as Ie,
    t as Le
} from "./5a69c9a5-c4hl3v9hehncfzqi.js";
import {
    n as Re,
    r as ze,
    s as Be
} from "./26265142-nyi2z6lhzlikrnes.js";
import {
    a as Ve,
    i as He,
    o as Ue,
    s as M
} from "./122af5aa-ltlkro6lgoihtipj.js";
import {
    n as We,
    t as N
} from "./52e36ea1-pc0xjti7rspn0yeb.js";
import {
    n as Ge,
    t as Ke
} from "./824cfc3b-e7nolb7c0q20nhgq.js";
var qe, P, Je, F, Ye = e((() => {
        qe = S(), l(), a(), P = g(), Je = e => {
            "use forget";
            let t = (0, qe.c)(25),
                {
                    labelledBy: n,
                    installed: r,
                    disabled: i,
                    loading: a,
                    loadingLabel: s,
                    availableLabel: c,
                    installedLabel: l,
                    onInstalledChange: u
                } = e,
                d = a !== void 0 && a,
                f;
            t[0] !== d || t[1] !== s ? (f = d ? (0, P.jsx)(`span`, {
                role: `status`,
                "aria-label": s,
                children: (0, P.jsx)(o, {
                    className: `text-token-text-secondary size-4`
                })
            }) : null, t[0] = d, t[1] = s, t[2] = f) : f = t[2];
            let p = !r,
                m;
            t[3] === u ? m = t[4] : (m = () => u(!1), t[3] = u, t[4] = m);
            let h;
            t[5] !== c || t[6] !== i || t[7] !== p || t[8] !== m ? (h = (0, P.jsx)(F, {
                selected: p,
                disabled: i,
                onClick: m,
                children: c
            }), t[5] = c, t[6] = i, t[7] = p, t[8] = m, t[9] = h) : h = t[9];
            let g;
            t[10] === u ? g = t[11] : (g = () => u(!0), t[10] = u, t[11] = g);
            let _;
            t[12] !== i || t[13] !== r || t[14] !== l || t[15] !== g ? (_ = (0, P.jsx)(F, {
                selected: r,
                disabled: i,
                onClick: g,
                children: l
            }), t[12] = i, t[13] = r, t[14] = l, t[15] = g, t[16] = _) : _ = t[16];
            let v;
            t[17] !== n || t[18] !== d || t[19] !== h || t[20] !== _ ? (v = (0, P.jsxs)(`div`, {
                role: `radiogroup`,
                "aria-labelledby": n,
                "aria-busy": d,
                className: `bg-token-bg-secondary flex overflow-hidden rounded-full p-0.5`,
                children: [h, _]
            }), t[17] = n, t[18] = d, t[19] = h, t[20] = _, t[21] = v) : v = t[21];
            let y;
            return t[22] !== f || t[23] !== v ? (y = (0, P.jsxs)(`div`, {
                className: `flex shrink-0 items-center gap-2`,
                children: [f, v]
            }), t[22] = f, t[23] = v, t[24] = y) : y = t[24], y
        }, F = e => {
            "use forget";
            let t = (0, qe.c)(9),
                {
                    selected: n,
                    disabled: r,
                    onClick: i,
                    children: a
                } = e,
                o = n ? `bg-token-bg-primary text-token-text-primary shadow-xs` : `text-token-text-primary hover:bg-token-bg-primary/60`,
                s = r && `cursor-not-allowed opacity-60`,
                c;
            t[0] !== o || t[1] !== s ? (c = m(`rounded-full px-3 py-1 text-sm leading-5 transition-colors`, o, s), t[0] = o, t[1] = s, t[2] = c) : c = t[2];
            let l;
            return t[3] !== a || t[4] !== r || t[5] !== i || t[6] !== n || t[7] !== c ? (l = (0, P.jsx)(`button`, {
                type: `button`,
                role: `radio`,
                "aria-checked": n,
                disabled: r,
                onClick: i,
                className: c,
                children: a
            }), t[3] = a, t[4] = r, t[5] = i, t[6] = n, t[7] = c, t[8] = l) : l = t[8], l
        }
    })),
    I = t({
        AdminPluginAvailabilitySection: () => ot
    });

function Xe(e) {
    return e.data == null ? [] : [e.data.primaryConnector.id]
}

function Ze(e) {
    return e.isError
}

function Qe(e) {
    return e.isError
}

function $e(e) {
    return e.isSuccess
}

function et(e) {
    return e.isSuccess
}

function tt(e) {
    let {
        role: t
    } = e;
    return t.id
}

function nt(e) {
    return _e(e.data?.roles_with_permissions).map(tt)
}

function rt(e) {
    return e.id
}

function it(e) {
    return !ie(e)
}
var at, L, R, ot, st = e((() => {
    at = S(), N(), w(), M(), k(), j(), r(), Se(), D(), p(), C(), pe(), Ye(), de(), xe(), f(), d(), le(), x(), L = n(ee()), b(), E(), T(), O(), we(), A(), oe(), Ge(), Be(), R = g(), ot = e => {
        "use forget";
        let t = (0, at.c)(134),
            {
                pluginReference: n,
                workspaceId: r,
                disabled: a,
                staged: o,
                controlOnly: l
            } = e,
            d = ne(),
            f;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (f = c(), t[0] = f) : f = t[0];
        let p = f,
            m = _(),
            g = (0, L.useId)(),
            [b, ee] = (0, L.useState)(!1),
            {
                transport: x,
                includeDependencies: S
            } = u(Ee),
            C = u(i)?.normalizedAccountUserId,
            oe = u(ge),
            le = u(me),
            de;
        t[1] !== x || t[2] !== S || t[3] !== n || t[4] !== r ? (de = {
            pluginId: n,
            workspaceId: r,
            transport: x,
            includeDependencies: S
        }, t[1] = x, t[2] = S, t[3] = n, t[4] = r, t[5] = de) : de = t[5];
        let pe = (0, L.useRef)(de),
            _e, xe;
        t[6] !== x || t[7] !== S || t[8] !== n || t[9] !== m || t[10] !== r ? (_e = () => {
            let e = pe.current,
                t = {
                    pluginId: n,
                    workspaceId: r,
                    transport: x,
                    includeDependencies: S
                };
            pe.current = t, We({
                queryClient: m,
                previous: e,
                next: t
            })
        }, xe = [n, r, x, S, m], t[6] = x, t[7] = S, t[8] = n, t[9] = m, t[10] = r, t[11] = _e, t[12] = xe) : (_e = t[11], xe = t[12]), (0, L.useEffect)(_e, xe);
        let Se;
        t[13] !== x || t[14] !== n || t[15] !== r ? (Se = () => {
            Oe(x, r, n)
        }, t[13] = x, t[14] = n, t[15] = r, t[16] = Se) : Se = t[16];
        let we;
        t[17] !== C || t[18] !== x || t[19] !== S || t[20] !== n || t[21] !== r ? (we = [n, r, x, S, C], t[17] = C, t[18] = x, t[19] = S, t[20] = n, t[21] = r, t[22] = we) : we = t[22], (0, L.useEffect)(Se, we);
        let w;
        t[23] !== C || t[24] !== x || t[25] !== S || t[26] !== n || t[27] !== r ? (w = De(n, r, x, S, C), t[23] = C, t[24] = x, t[25] = S, t[26] = n, t[27] = r, t[28] = w) : w = t[28];
        let T = w,
            E = y(T).data,
            D = E?.id ?? n,
            O = E?.workspace_settings ?? o?.fallbackSettings ?? null,
            k = o?.draft == null || O == null ? O : {
                ...O,
                installation_policy: o.draft.installation_policy ?? O.installation_policy,
                installed_by_default_role_ids: o.draft.installed_by_default_role_ids ?? O.installed_by_default_role_ids
            },
            A = s(),
            j = A && E != null,
            Be = Ke(r),
            M = y({
                ...Be,
                enabled: Be.enabled && j
            }),
            N = (M.data?.data ?? []).toSorted(ue),
            Ge = Re(E),
            qe = [...new Set(E?.release.required_app_id_groups?.flat() ?? Ge)],
            P = qe.length > 0,
            F = u(Fe),
            Ye = u(Ie),
            I = r,
            tt;
        t[29] !== F || t[30] !== I || t[31] !== C ? (tt = {
            workspaceId: I,
            transport: F,
            workspaceUserId: C
        }, t[29] = F, t[30] = I, t[31] = C, t[32] = tt) : tt = t[32];
        let ot = (0, L.useRef)(tt),
            st, ct;
        t[33] !== F || t[34] !== I || t[35] !== C || t[36] !== m ? (ct = () => {
            let e = {
                workspaceId: I,
                transport: F,
                workspaceUserId: C
            };
            Ne({
                queryClient: m,
                previous: ot.current,
                next: e
            }), ot.current = e
        }, st = [I, F, C, m], t[33] = F, t[34] = I, t[35] = C, t[36] = m, t[37] = st, t[38] = ct) : (st = t[37], ct = t[38]), (0, L.useEffect)(ct, st);
        let lt = r !== `` && j && P;
        (0, L.useEffect)(() => {
            Pe(F, I, lt)
        }, [F, I, C, lt, JSON.stringify([...new Set(Ge)].sort())]);
        let ut = Le({
                transport: F,
                nativeAppDetailsRecoveryEnabled: Ye,
                workspaceUserId: C,
                appIds: Ge,
                workspaceId: r
            }),
            dt = y({
                ...ut,
                enabled: ut.enabled && j && P
            }),
            ft = new Set(Ge),
            pt = [...new Map(qe.flatMap(e => {
                let t = ze(dt.data, e, ft);
                return t == null ? [] : [
                    [t.id, t]
                ]
            })).values()],
            mt = u(Ce),
            ht = u(je),
            gt = j && P ? pt.map(e => Me({
                transport: mt,
                ckTransport: ht,
                appId: e.id,
                directoryApp: e,
                workspaceId: r
            })) : [],
            _t;
        t[39] === gt ? _t = t[40] : (_t = {
            queries: gt
        }, t[39] = gt, t[40] = _t);
        let z = h(_t),
            B, vt, yt;
        t[41] !== z || t[42] !== j || t[43] !== r ? (B = [...new Set(z.flatMap(Xe))], vt = h, yt = {
            queries: j ? B.map(e => Te({
                connectorId: e,
                workspaceId: r
            })) : []
        }, t[41] = z, t[42] = j, t[43] = r, t[44] = B, t[45] = vt, t[46] = yt) : (B = t[44], vt = t[45], yt = t[46]);
        let V = vt(yt),
            bt;
        t[47] !== dt || t[48] !== P || t[49] !== z || t[50] !== V ? (bt = P && (dt.isError || z.some(Ze) || V.some(Qe)), t[47] = dt, t[48] = P, t[49] = z, t[50] = V, t[51] = bt) : bt = t[51];
        let xt = bt,
            St = !P || dt.isSuccess && pt.length > 0 && z.every($e) && V.length === B.length && B.length > 0 && V.every(et),
            H = M.isSuccess && St ? P ? new Set(V.flatMap(nt)) : new Set(N.map(rt)) : null,
            U = Ve(k) && H != null ? new Set(ve({
                settings: k,
                eligibleRoleIds: H
            })) : new Set,
            W = N.find(ie),
            Ct = W == null ? k?.installation_policy === `INSTALLED_BY_DEFAULT` && k.installed_by_default_role_ids.length === 0 : U.has(W.id),
            wt = N.filter(it),
            Tt = wt.filter(e => H?.has(e.id) && U.has(e.id) !== Ct),
            G = b ? wt : Tt,
            K = j && (M.isLoading || !St && !xt),
            Et = M.isError || xt,
            Dt = !K && !Et && wt.length > Tt.length,
            Ot;
        t[52] !== D || t[53] !== r || t[54] !== oe ? (Ot = ye(r, D, oe), t[52] = D, t[53] = r, t[54] = oe, t[55] = Ot) : Ot = t[55];
        let q = Ot,
            kt;
        t[56] !== le || t[57] !== C || t[58] !== O || t[59] !== E || t[60] !== D || t[61] !== o || t[62] !== r ? (kt = async e => {
            let {
                settings: t
            } = e, n = i();
            if (O != null && !Ue(O) || E == null || !He(E) || n?.getWorkspaceId() !== r || n.normalizedAccountUserId !== C || !n.isAdminOfAccount() && !n.isOwnerOfAccount() || o != null && !o.canUpdate()) throw Error(`Workspace administrator authorization changed.`);
            return await be({
                workspaceId: r,
                workspaceUserId: C,
                pluginId: D,
                settings: t,
                transport: le
            })
        }, t[56] = le, t[57] = C, t[58] = O, t[59] = E, t[60] = D, t[61] = o, t[62] = r, t[63] = kt) : kt = t[63];
        let At = kt,
            J;
        t[64] !== D || t[65] !== r ? (J = re(r, D), t[64] = D, t[65] = r, t[66] = J) : J = t[66];
        let Y;
        t[67] !== x || t[68] !== S || t[69] !== D || t[70] !== T || t[71] !== q || t[72] !== m || t[73] !== r ? (Y = async e => {
            let {
                settings: t
            } = e, n = {
                workspaceId: r,
                pluginId: D,
                detailReadTransport: x,
                includeDependencies: S,
                detailQueryKey: T.queryKey,
                settingsQueryKey: q
            };
            await m.cancelQueries({
                queryKey: n.detailQueryKey,
                exact: !0
            }), await m.cancelQueries({
                queryKey: n.settingsQueryKey,
                exact: !0
            });
            let i = m.getQueryData(n.detailQueryKey),
                a = m.getQueryData(n.settingsQueryKey);
            return a == null ? i?.workspace_settings != null && m.setQueryData(n.detailQueryKey, {
                ...i,
                workspace_settings: {
                    ...i.workspace_settings,
                    installation_policy: t.installation_policy ?? i.workspace_settings.installation_policy,
                    installed_by_default_role_ids: t.installed_by_default_role_ids ?? i.workspace_settings.installed_by_default_role_ids
                }
            }) : ke({
                queryClient: m,
                ...n,
                settings: {
                    ...a,
                    installation_policy: t.installation_policy ?? a.installation_policy,
                    installed_by_default_role_ids: t.installed_by_default_role_ids ?? a.installed_by_default_role_ids
                }
            }), {
                ...n,
                previousPlugin: i,
                previousSettings: a
            }
        }, t[67] = x, t[68] = S, t[69] = D, t[70] = T, t[71] = q, t[72] = m, t[73] = r, t[74] = Y) : Y = t[74];
        let X;
        t[75] !== d || t[76] !== D || t[77] !== T || t[78] !== q || t[79] !== m || t[80] !== o || t[81] !== r ? (X = async (e, t, n) => {
            if (ke({
                    queryClient: m,
                    workspaceId: n?.workspaceId ?? r,
                    pluginId: n?.pluginId ?? D,
                    settings: e
                }), o != null && !o.canUpdate()) {
                await Promise.all([m.invalidateQueries({
                    queryKey: n?.detailQueryKey ?? T.queryKey,
                    refetchType: `none`
                }), m.invalidateQueries({
                    queryKey: n?.settingsQueryKey ?? q,
                    refetchType: `none`
                }), m.invalidateQueries({
                    queryKey: ae(`list`, n?.workspaceId ?? r),
                    refetchType: `none`
                })]);
                return
            }
            await Ae({
                queryClient: m,
                workspaceId: n?.workspaceId ?? r,
                pluginId: n?.pluginId ?? D
            }), !(o != null && !o.canUpdate()) && (p.success(d.formatMessage({
                id: `admin.plugins.v2.detail.availability.toast.success`,
                defaultMessage: `Workspace availability updated.`
            })), o?.onSaveSuccess())
        }, t[75] = d, t[76] = D, t[77] = T, t[78] = q, t[79] = m, t[80] = o, t[81] = r, t[82] = X) : X = t[82];
        let Z;
        t[83] !== d || t[84] !== m || t[85] !== o ? (Z = (e, t, n) => {
            n?.previousSettings == null ? n?.previousPlugin != null && m.setQueryData(n.detailQueryKey, n.previousPlugin) : ke({
                queryClient: m,
                workspaceId: n.workspaceId,
                pluginId: n.pluginId,
                settingsQueryKey: n.settingsQueryKey,
                detailReadTransport: n.detailReadTransport,
                includeDependencies: n.includeDependencies,
                settings: n.previousSettings
            }), !(o != null && !o.canUpdate()) && p.danger(d.formatMessage({
                id: `admin.plugins.v2.detail.availability.toast.failure`,
                defaultMessage: `Could not update workspace availability.`
            }))
        }, t[83] = d, t[84] = m, t[85] = o, t[86] = Z) : Z = t[86];
        let jt;
        t[87] !== J || t[88] !== Y || t[89] !== X || t[90] !== Z || t[91] !== At ? (jt = {
            mutationKey: J,
            mutationFn: At,
            onMutate: Y,
            onSuccess: X,
            onError: Z
        }, t[87] = J, t[88] = Y, t[89] = X, t[90] = Z, t[91] = At, t[92] = jt) : jt = t[92];
        let Q = te(jt),
            Mt;
        t[93] !== Q.isPending || t[94] !== a || t[95] !== O || t[96] !== E ? (Mt = a || Q.isPending || O != null && !Ue(O) || E == null || !He(E), t[93] = Q.isPending, t[94] = a, t[95] = O, t[96] = E, t[97] = Mt) : Mt = t[97];
        let $ = Mt,
            Nt;
        t[98] !== $ || t[99] !== E || t[100] !== o || t[101] !== r ? (Nt = () => E != null && r !== `` && i()?.getWorkspaceId() === r && (o == null || o.canUpdate()) && !$, t[98] = $, t[99] = E, t[100] = o, t[101] = r, t[102] = Nt) : Nt = t[102];
        let Pt = Nt,
            Ft = e => {
                if (o == null || !Ue(O)) return;
                let t = e.installation_policy ?? O.installation_policy,
                    n = e.installed_by_default_role_ids ?? O.installed_by_default_role_ids,
                    r = A && H != null ? !fe(new Set(ve({
                        settings: O,
                        eligibleRoleIds: H
                    })), new Set(ve({
                        settings: {
                            installation_policy: t,
                            installed_by_default_role_ids: n
                        },
                        eligibleRoleIds: H
                    }))) : t !== O.installation_policy;
                o.onDraftChange(r ? e : null)
            },
            It = e => {
                if (!Pt() || e === Ct) return;
                if (A) {
                    if (W == null || H == null || !H.has(W.id)) return;
                    Lt(W, e);
                    return
                }
                let t = he({
                    mode: e ? `installed_by_default` : `available`
                });
                if (o != null) {
                    Ft(t);
                    return
                }
                Q.mutate({
                    settings: t,
                    savingRoleId: null
                })
            },
            Lt = (e, t) => {
                if (!Pt() || H == null || !H.has(e.id) || U.has(e.id) === t) return;
                let n = new Set(U);
                t ? n.add(e.id) : n.delete(e.id);
                let r = he({
                    mode: n.size === 0 ? `available` : n.size === H.size ? `installed_by_default` : `custom_by_group`,
                    installedByDefaultRoleIds: n,
                    eligibleRoleIds: H
                });
                if (o != null) {
                    Ft(r);
                    return
                }
                Q.mutate({
                    settings: r,
                    savingRoleId: e.id
                })
            },
            Rt;
        t[103] === d ? Rt = t[104] : (Rt = d.formatMessage({
            id: `admin.plugins.v2.detail.availability.available.label`,
            defaultMessage: `Available`
        }), t[103] = d, t[104] = Rt);
        let zt = Rt,
            Bt;
        t[105] === d ? Bt = t[106] : (Bt = d.formatMessage({
            id: `admin.plugins.v2.detail.availability.installed.label`,
            defaultMessage: `Installed`
        }), t[105] = d, t[106] = Bt);
        let Vt = Bt,
            Ht;
        t[107] === d ? Ht = t[108] : (Ht = d.formatMessage({
            id: `admin.plugins.v2.detail.availability.saving.label`,
            defaultMessage: `Saving workspace availability`
        }), t[107] = d, t[108] = Ht);
        let Ut = Ht;
        if (l != null) {
            let e = l.roleId == null ? W : N.find(e => e.id === l.roleId);
            return (0, R.jsx)(Je, {
                labelledBy: l.labelledBy,
                installed: l.roleId == null ? Ct : e != null && U.has(e.id),
                disabled: $ || K || Et || l.roleId != null && !A || A && (e == null || !H?.has(e.id)),
                loading: Q.isPending || K,
                loadingLabel: Ut,
                availableLabel: zt,
                installedLabel: Vt,
                onInstalledChange: t => {
                    l.roleId == null ? It(t) : e != null && Lt(e, t)
                }
            })
        }
        let Wt;
        t[109] === Symbol.for(`react.memo_cache_sentinel`) ? (Wt = (0, R.jsx)(`div`, {
            id: `admin-plugin-v2-workspace-availability-label`,
            className: `text-token-text-primary text-sm font-medium`,
            children: (0, R.jsx)(v, {
                id: `admin.plugins.v2.detail.availability.workspace.label`,
                defaultMessage: `Workspace default`
            })
        }), t[109] = Wt) : Wt = t[109];
        let Gt;
        t[110] === A ? Gt = t[111] : (Gt = (0, R.jsxs)(`div`, {
            className: `min-w-0`,
            children: [Wt, (0, R.jsx)(`p`, {
                className: `text-token-text-secondary mt-0.5 text-xs`,
                children: A ? (0, R.jsx)(v, {
                    id: `admin.plugins.v2.detail.availability.workspace.role.description`,
                    defaultMessage: `The default for users who are not assigned a role`
                }) : (0, R.jsx)(v, {
                    id: `admin.plugins.v2.detail.availability.workspace.description`,
                    defaultMessage: `Applies to everyone in this workspace`
                })
            })]
        }), t[110] = A, t[111] = Gt);
        let Kt;
        t[112] !== d || t[113] !== A || t[114] !== K || t[115] !== G ? (Kt = A && K ? (0, R.jsx)(`div`, {
            "aria-busy": `true`,
            "aria-label": d.formatMessage({
                id: `admin.plugins.v2.detail.availability.roles.loading`,
                defaultMessage: `Loading role availability`
            }),
            role: `status`,
            className: `group skeleton [--skeleton-opacity:0.75]`,
            children: [0, 1].map(e => (0, R.jsxs)(`div`, {
                "aria-hidden": !0,
                className: `border-token-border-light relative ms-8 flex min-h-[64px] flex-col gap-3 border-b py-4 sm:flex-row sm:items-center sm:justify-between`,
                children: [e === 0 && G.length === 0 ? (0, R.jsx)(se, {
                    "aria-hidden": !0,
                    className: `text-token-text-secondary icon-sm absolute -start-8 top-4 shrink-0 sm:top-1/2 sm:-translate-y-1/2 rtl:-scale-x-100`
                }) : null, (0, R.jsxs)(`span`, {
                    className: `flex min-w-0 items-center gap-2`,
                    children: [(0, R.jsx)(`span`, {
                        className: `skeleton-child size-5 shrink-0 rounded-md`
                    }), (0, R.jsx)(`span`, {
                        className: `skeleton-child h-4 w-32 max-w-full rounded-md`
                    })]
                }), (0, R.jsxs)(`span`, {
                    className: `bg-token-bg-secondary flex w-fit shrink-0 gap-1 rounded-full p-0.5`,
                    children: [(0, R.jsx)(`span`, {
                        className: `skeleton-child h-7 w-20 rounded-full`
                    }), (0, R.jsx)(`span`, {
                        className: `skeleton-child h-7 w-16 rounded-full`
                    })]
                })]
            }, e))
        }) : null, t[112] = d, t[113] = A, t[114] = K, t[115] = G, t[116] = Kt) : Kt = t[116];
        let qt;
        t[117] !== A || t[118] !== Et || t[119] !== K ? (qt = A && !K && Et ? (0, R.jsx)(`p`, {
            role: `alert`,
            className: `border-token-border-light text-token-text-secondary border-b py-4 text-sm`,
            children: (0, R.jsx)(v, {
                id: `admin.plugins.v2.detail.availability.roles.error`,
                defaultMessage: `Unable to load role overrides.`
            })
        }) : null, t[117] = A, t[118] = Et, t[119] = K, t[120] = qt) : qt = t[120];
        let Jt;
        t[121] !== Dt || t[122] !== $ || t[123] !== A || t[124] !== Tt || t[125] !== b || t[126] !== G ? (Jt = A && Dt ? (0, R.jsxs)(`button`, {
            type: `button`,
            "aria-expanded": b,
            disabled: $,
            onClick: () => ee(!b),
            className: `text-token-text-secondary hover:text-token-text-primary relative ms-8 flex min-h-12 items-center text-sm disabled:cursor-not-allowed disabled:opacity-60`,
            children: [G.length === 0 ? (0, R.jsx)(se, {
                "aria-hidden": !0,
                className: `icon-sm absolute -start-8 top-1/2 shrink-0 -translate-y-1/2 rtl:-scale-x-100`
            }) : null, b ? (0, R.jsx)(v, {
                id: `admin.plugins.v2.detail.availability.roles.hide`,
                defaultMessage: `Hide roles`
            }) : Tt.length > 0 ? (0, R.jsx)(v, {
                id: `admin.plugins.v2.detail.availability.roles.show_all`,
                defaultMessage: `See all roles`
            }) : (0, R.jsx)(v, {
                id: `admin.plugins.v2.detail.availability.roles.add`,
                defaultMessage: `Customize per role`
            })]
        }) : null, t[121] = Dt, t[122] = $, t[123] = A, t[124] = Tt, t[125] = b, t[126] = G, t[127] = Jt) : Jt = t[127];
        let Yt = (0, R.jsxs)(`div`, {
            children: [(0, R.jsxs)(`div`, {
                className: `border-token-border-light flex min-h-[72px] flex-col gap-3 border-b py-4 sm:flex-row sm:items-center sm:justify-between`,
                children: [Gt, (0, R.jsx)(Je, {
                    labelledBy: `admin-plugin-v2-workspace-availability-label`,
                    installed: Ct,
                    disabled: $ || A && (H == null || W == null || !H.has(W.id)),
                    loading: Q.isPending && (Q.variables.savingRoleId == null || Q.variables.savingRoleId === W?.id),
                    loadingLabel: Ut,
                    availableLabel: zt,
                    installedLabel: Vt,
                    onInstalledChange: It
                })]
            }), A ? G.map((e, t) => {
                let n = `${g}-${e.id}`;
                return (0, R.jsxs)(`div`, {
                    className: `border-token-border-light relative ms-8 flex min-h-[64px] flex-col gap-3 border-b py-4 sm:flex-row sm:items-center sm:justify-between`,
                    children: [t === 0 ? (0, R.jsx)(se, {
                        "aria-hidden": !0,
                        className: `text-token-text-secondary icon-sm absolute -start-8 top-4 shrink-0 sm:top-1/2 sm:-translate-y-1/2 rtl:-scale-x-100`
                    }) : null, (0, R.jsxs)(`div`, {
                        className: `flex min-w-0 items-center gap-2`,
                        children: [(0, R.jsx)(ce, {
                            "aria-hidden": !0,
                            className: `text-token-text-secondary icon-sm shrink-0`
                        }), (0, R.jsx)(`span`, {
                            id: n,
                            className: `text-token-text-primary truncate text-sm`,
                            children: e.name
                        })]
                    }), (0, R.jsx)(Je, {
                        labelledBy: n,
                        installed: U.has(e.id),
                        disabled: $ || !H?.has(e.id),
                        loading: Q.isPending && Q.variables.savingRoleId === e.id,
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
        return t[128] !== Q || t[129] !== Pt || t[130] !== H || t[131] !== A || t[132] !== o.draft ? (Xt = e => {
            e.preventDefault(), !(o.draft == null || !Pt() || A && (H == null || o.draft.installed_by_default_role_ids?.some(e => !H.has(e)))) && Q.mutate({
                settings: o.draft,
                savingRoleId: null
            })
        }, t[128] = Q, t[129] = Pt, t[130] = H, t[131] = A, t[132] = o.draft, t[133] = Xt) : Xt = t[133], (0, R.jsx)(`form`, {
            id: o.formId,
            onSubmit: Xt,
            children: Yt
        })
    }
}));
export {
    I as n, st as r, ot as t
};
//# sourceMappingURL=6e0b8cd0-gfna50fv3afizun7.js.map
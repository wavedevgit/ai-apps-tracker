const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/5abfaa10-m16monxf9emg70q1.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-ed29bs6yiwucn7st.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/conversation-small-l6tnsr2xfn2d55kk.js", "assets/30901919-om7b3qf5hp4j9x4l.js", "assets/c470f5ab-d0jxi6yggehv1yt2.js", "assets/0e5afe53-goyw8fd3qndq8rq5.js", "assets/conversation-small-ixfdle4i.css", "assets/c2675c8c-fpv9s4kvd412dyap.js", "assets/82782bc9-cz4jkhg31tycbqqf.js", "assets/8b34dbc2-j8rcexxiltkm8ucr.js", "assets/global-modals-lv5n3ujm.css", "assets/1c919af1-abbe8u4rjagje3yr.js", "assets/e981ddae-m7civn9ndz8nfodx.js", "assets/707eab0c-co82iasy3ghgw11m.js", "assets/9d60841e-bx3dwc8nyvp30a4s.js", "assets/bcae0416-hw074mfyxypgqrid.js", "assets/d4c740a3-grm4mqv12ru1q0ee.js", "assets/Button-ijivgymd.css", "assets/a35abcd6-o5uzbzp1jprs3y1b.js", "assets/74a883a0-hvxle82pkyqdut0n.js", "assets/4b68ab38-e2jtqfi6qknkay6v.js", "assets/cb84f617-e4ca0kd9iysszy1q.js", "assets/36ecb4f8-isjf0qo9jn05gfs9.js", "assets/Input-cmdkk215.css", "assets/99af6606-jb7os3jxqi8a1e1k.js", "assets/d2cf4d37-gxba24340175abl7.js", "assets/Menu-crbasfev.css"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as n,
    I1 as r,
    J0 as i,
    RU as a,
    Y0 as o,
    nx as s,
    rx as c,
    zU as l
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    Bn as u,
    In as ee,
    N as te,
    Nn as d,
    O as f,
    Rn as p,
    Vn as m,
    cn as h,
    ln as g,
    p as ne,
    s as _,
    wn as v,
    zn as re
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    K0t as ie,
    q0t as y,
    rWn as b,
    tWn as ae
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    Ki as oe,
    Ss as se,
    _s as ce,
    bs as le,
    ds as ue,
    ey as x,
    fs as S,
    gs as de,
    hs as fe,
    ms as pe,
    ps as C,
    qi as me,
    ty as he,
    vs as ge,
    xs as _e,
    ys as ve
} from "./c2675c8c-fpv9s4kvd412dyap.js";
import {
    F as ye,
    b as be,
    wt as xe
} from "./1c919af1-abbe8u4rjagje3yr.js";
import {
    t as Se
} from "./e981ddae-m7civn9ndz8nfodx.js";
import {
    d as w,
    t as Ce
} from "./707eab0c-co82iasy3ghgw11m.js";
import {
    t as T
} from "./a35abcd6-o5uzbzp1jprs3y1b.js";
import {
    n as E,
    t as D
} from "./18093cad-1r2aht2ovv6lr6vs.js";
import {
    n as O,
    t as we
} from "./9db786f2-c7b55wineze2x8h4.js";
var k, A, Te, j = e((() => {
        k = v(), p(), O(), A = u(), Te = e => {
            "use forget";
            let t = (0, k.c)(4),
                {
                    marketplacesUrl: n,
                    repository: r
                } = e,
                i;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, A.jsx)(d, {
                id: `admin.plugins.v2.marketplaces.details.breadcrumb.label`,
                defaultMessage: `Marketplaces`
            }), t[0] = i) : i = t[0];
            let a;
            return t[1] !== n || t[2] !== r ? (a = (0, A.jsx)(`header`, {
                className: `border-token-border-light flex h-[52px] shrink-0 items-center gap-4 border-b px-5`,
                children: (0, A.jsx)(we, {
                    pluginsUrl: n,
                    pluginName: r,
                    listLabel: i
                })
            }), t[1] = n, t[2] = r, t[3] = a) : a = t[3], a
        }
    })),
    Ee, De = e((() => {
        o(), g(), Ee = i(() => h(() => import(`./5abfaa10-m16monxf9emg70q1.js`).then(e => e.AdminPluginMarketplaceDetailsContent), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29])))
    }));

function Oe(e) {
    let {
        status: t
    } = e;
    return t === `WAITING` || t === `SYNCING`
}

function ke() {}

function Ae() {
    Ee.prefetch()
}

function je() {
    Ee.prefetch()
}
var Me, M, N, Ne, Pe, Fe, P, F = e((() => {
    Me = v(), S(), me(), c(), b(), r(), l(), y(), Ce(), T(), D(), _(), M = t(m()), p(), j(), le(), he(), De(), N = u(), Ne = ee({
        id: `admin.plugins.v2.marketplaces.help_link.label`,
        defaultMessage: `Learn about marketplace sync`
    }), Pe = (e, t, n) => e?.sourceId === t && (n == null || n.status === `WAITING` || n.status === `SYNCING` || n.status === e.status && (n.last_checked_at ?? null) === e.lastCheckedAt && (n.last_reconciled_at ?? null) === e.lastReconciledAt), Fe = e => {
        "use forget";
        let t = (0, Me.c)(17),
            {
                status: n,
                failedCount: r,
                compact: i
            } = e,
            a = r === void 0 ? 0 : r,
            o = i !== void 0 && i,
            s = n === `UP_TO_DATE`,
            c;
        t[0] !== a || t[1] !== n ? (c = C({
            status: n,
            failedCount: a
        }), t[0] = a, t[1] = n, t[2] = c) : c = t[2];
        let l = c,
            u;
        t[3] !== s || t[4] !== l || t[5] !== a || t[6] !== n ? (u = s ? (0, N.jsx)(d, {
            id: `admin.plugins.v2.marketplaces.status.completed`,
            defaultMessage: `{count, plural, =0 {Completed} one {Completed — # error} other {Completed — # errors}}`,
            values: {
                count: a
            }
        }) : n === `RECONNECT_GITHUB` ? (0, N.jsx)(d, {
            id: `admin.plugins.v2.marketplaces.status.reconnect_github`,
            defaultMessage: `Reconnect GitHub`
        }) : l ? (0, N.jsx)(d, {
            id: `admin.plugins.v2.marketplaces.status.needs_attention`,
            defaultMessage: `Needs attention`
        }) : (0, N.jsx)(d, {
            id: `admin.plugins.v2.marketplaces.status.syncing`,
            defaultMessage: `Syncing…`
        }), t[3] = s, t[4] = l, t[5] = a, t[6] = n, t[7] = u) : u = t[7];
        let ee = u,
            te = o && !s && !l ? `status` : void 0,
            f = l ? `text-token-interactive-label-warning-secondary inline-flex items-center gap-2` : `text-token-text-secondary inline-flex items-center gap-2`,
            p;
        t[8] !== o || t[9] !== s || t[10] !== l ? (p = o && l ? (0, N.jsx)(Se, {
            "aria-hidden": !0,
            className: `size-4 shrink-0`
        }) : o && !s ? (0, N.jsx)(be, {
            "aria-hidden": !0,
            className: `size-4 shrink-0 motion-safe:animate-spin`
        }) : (0, N.jsx)(`span`, {
            "aria-hidden": !0,
            className: l ? `bg-token-interactive-label-warning-secondary size-1.5 rounded-full` : s ? `bg-token-text-status-success size-1.5 rounded-full` : `bg-token-text-tertiary size-1.5 rounded-full`
        }), t[8] = o, t[9] = s, t[10] = l, t[11] = p) : p = t[11];
        let m;
        return t[12] !== ee || t[13] !== te || t[14] !== f || t[15] !== p ? (m = (0, N.jsxs)(`span`, {
            role: te,
            className: f,
            children: [p, ee]
        }), t[12] = ee, t[13] = te, t[14] = f, t[15] = p, t[16] = m) : m = t[16], m
    }, P = e => {
        "use forget";
        let t = (0, Me.c)(123),
            {
                workspaceId: r,
                searchTerm: i,
                pendingImports: o,
                selectedMarketplaceSourceId: c,
                onSelectMarketplace: l,
                onMarketplaceDeleted: u,
                onViewPlugin: ee,
                marketplacesUrl: p
            } = e,
            m = re(),
            h = te(),
            [g, _] = (0, M.useState)(null),
            [v, y] = (0, M.useState)(!1),
            [b, le] = (0, M.useState)(null),
            S;
        t[0] === r ? S = t[1] : (S = ve(r), t[0] = r, t[1] = S);
        let C;
        t[2] === o ? C = t[3] : (C = e => {
            let {
                state: t
            } = e;
            return t.status === `error` ? !1 : o.some(e => e.import_status === `pending` || [`completed`, `already_imported`, `completed_with_issues`].includes(e.import_status) && e.marketplace_source_id != null && !(t.data?.items ?? []).some(n => pe(n, e, t.data?.items ?? []))) || (t.data?.items ?? []).some(Oe) ? 5e3 : !1
        }, t[2] = o, t[3] = C);
        let me;
        t[4] !== S || t[5] !== C ? (me = {
            ...S,
            refetchInterval: C
        }, t[4] = S, t[5] = C, t[6] = me) : me = t[6];
        let he = f(me),
            Se = he.data?.items ?? [],
            Ce = ue(Se, o),
            T = c ?? g,
            D;
        t[7] !== T || t[8] !== r ? (D = de(r, T), t[7] = T, t[8] = r, t[9] = D) : D = t[9];
        let O;
        t[10] !== T || t[11] !== b ? (O = e => {
            let {
                state: t
            } = e;
            return t.status === `error` ? !1 : Pe(b, T, t.data) || t.data?.status === `WAITING` || t.data?.status === `SYNCING` ? 1500 : !1
        }, t[10] = T, t[11] = b, t[12] = O) : O = t[12];
        let we;
        t[13] !== D || t[14] !== O ? (we = {
            ...D,
            refetchInterval: O
        }, t[13] = D, t[14] = O, t[15] = we) : we = t[15];
        let k = f(we),
            A;
        t[16] !== c || t[17] !== r ? (A = ce(r, c), t[16] = c, t[17] = r, t[18] = A) : A = t[18];
        let j;
        t[19] !== k.data || t[20] !== k.isError || t[21] !== b || t[22] !== c ? (j = e => {
            let {
                state: t
            } = e;
            return t.status === `error` || k.isError ? !1 : Pe(b, c, k.data) || k.data?.status === `WAITING` || k.data?.status === `SYNCING` ? 1500 : !1
        }, t[19] = k.data, t[20] = k.isError, t[21] = b, t[22] = c, t[23] = j) : j = t[23];
        let De;
        t[24] !== A || t[25] !== j ? (De = {
            ...A,
            refetchInterval: j
        }, t[24] = A, t[25] = j, t[26] = De) : De = t[26];
        let P = f(De),
            F = k.data,
            Ie = c != null,
            Le;
        t[27] !== Ie || t[28] !== r ? (Le = ge(r, Ie), t[27] = Ie, t[28] = r, t[29] = Le) : Le = t[29];
        let Re = f(Le),
            ze = P.data?.report ?? null,
            I = F?.status,
            Be = F?.last_checked_at,
            Ve = F?.last_reconciled_at,
            He;
        t[30] !== h || t[31] !== c || t[32] !== I || t[33] !== r ? (He = () => {
            if (c == null || I == null || I === `WAITING` || I === `SYNCING`) return;
            let e = {
                queryKey: ce(r, c).queryKey,
                exact: !0
            };
            Promise.all([h.cancelQueries(e).then(() => h.invalidateQueries(e)), h.invalidateQueries({
                queryKey: x(`marketplace-plugins`, r)
            })])
        }, t[30] = h, t[31] = c, t[32] = I, t[33] = r, t[34] = He) : He = t[34];
        let Ue;
        t[35] !== h || t[36] !== c || t[37] !== Be || t[38] !== Ve || t[39] !== I || t[40] !== r ? (Ue = [h, r, c, I, Be, Ve], t[35] = h, t[36] = c, t[37] = Be, t[38] = Ve, t[39] = I, t[40] = r, t[41] = Ue) : Ue = t[41], (0, M.useEffect)(He, Ue);
        let We;
        t[42] !== h || t[43] !== r ? (We = e => n()?.getWorkspaceId() === r ? Promise.all([h.invalidateQueries({
            queryKey: x(`marketplaces`, r)
        }), h.invalidateQueries({
            queryKey: x(`marketplace-source-options`, r)
        }), h.invalidateQueries({
            queryKey: x(`marketplace-details`, r, e)
        }), h.invalidateQueries({
            queryKey: x(`marketplace-import-report`, r, e)
        }), h.invalidateQueries({
            queryKey: x(`list`, r)
        }), h.invalidateQueries({
            queryKey: x(`marketplace-plugins`, r)
        })]).then(ke) : Promise.resolve(), t[42] = h, t[43] = r, t[44] = We) : We = t[44];
        let L = We,
            Ge;
        t[45] === r ? Ge = t[46] : (Ge = e => fe(r, e), t[45] = r, t[46] = Ge);
        let Ke;
        t[47] !== m || t[48] !== L || t[49] !== r ? (Ke = (e, t) => {
            n()?.getWorkspaceId() === r && (y(!1), a().danger(e instanceof Error && e.message ? e.message : m.formatMessage({
                id: `admin.plugins.v2.marketplaces.delete.error`,
                defaultMessage: `Unable to delete marketplace`
            })), L(t))
        }, t[47] = m, t[48] = L, t[49] = r, t[50] = Ke) : Ke = t[50];
        let R = ne({
                mutationFn: Ge,
                onSuccess: (e, t) => {
                    if (n()?.getWorkspaceId() !== r) return;
                    h.removeQueries({
                        queryKey: x(`marketplace-details`, r, t)
                    }), h.removeQueries({
                        queryKey: x(`marketplace-import-report`, r, t)
                    }), y(!1), _(null);
                    let i = Se.find(e => e.marketplace_source_id === t);
                    u(t, i == null ? [] : o.filter(e => pe(i, e, Se))), c === t && l(null), L(t), a().success(m.formatMessage({
                        id: `admin.plugins.v2.marketplaces.delete.success`,
                        defaultMessage: `Marketplace deleted`
                    }))
                },
                onError: Ke
            }),
            z;
        t[51] === r ? z = t[52] : (z = e => se(r, e.marketplace_source_id), t[51] = r, t[52] = z);
        let B;
        t[53] !== m || t[54] !== L || t[55] !== r ? (B = (e, t) => {
            n()?.getWorkspaceId() === r && (le({
                sourceId: t.marketplace_source_id,
                status: t.status,
                lastCheckedAt: t.last_checked_at ?? null,
                lastReconciledAt: t.last_reconciled_at ?? null
            }), a().success(m.formatMessage({
                id: `admin.plugins.v2.marketplaces.sync.started`,
                defaultMessage: `Marketplace sync started`
            })), L(t.marketplace_source_id))
        }, t[53] = m, t[54] = L, t[55] = r, t[56] = B) : B = t[56];
        let V;
        t[57] !== m || t[58] !== r ? (V = () => {
            n()?.getWorkspaceId() === r && a().danger(m.formatMessage({
                id: `admin.plugins.v2.marketplaces.sync.error`,
                defaultMessage: `Unable to sync marketplace`
            }))
        }, t[57] = m, t[58] = r, t[59] = V) : V = t[59];
        let qe;
        t[60] !== z || t[61] !== B || t[62] !== V ? (qe = {
            mutationFn: z,
            onSuccess: B,
            onError: V
        }, t[60] = z, t[61] = B, t[62] = V, t[63] = qe) : qe = t[63];
        let H = ne(qe),
            U;
        t[64] === r ? U = t[65] : (U = e => {
            let {
                marketplace: t,
                continuousSync: n
            } = e;
            return _e({
                workspaceId: r,
                marketplace: t,
                continuousSync: n
            })
        }, t[64] = r, t[65] = U);
        let W;
        t[66] !== m || t[67] !== h || t[68] !== L || t[69] !== r ? (W = (e, t) => {
            let {
                marketplace: i
            } = t;
            if (n()?.getWorkspaceId() === r) return h.setQueryData(de(r, i.marketplace_source_id).queryKey, t => t == null ? t : {
                ...t,
                continuous_sync: e.continuous_sync
            }), a().success(m.formatMessage(e.continuous_sync ? {
                id: `admin.plugins.v2.marketplaces.auto_sync.enabled`,
                defaultMessage: `Automatic sync enabled`,
                description: `Success toast shown after a workspace administrator enables automatic daily synchronization for a connected GitHub plugin marketplace.`
            } : {
                id: `admin.plugins.v2.marketplaces.auto_sync.disabled`,
                defaultMessage: `Automatic sync paused`,
                description: `Success toast shown after a workspace administrator pauses automatic daily synchronization for a connected GitHub plugin marketplace.`
            })), L(i.marketplace_source_id)
        }, t[66] = m, t[67] = h, t[68] = L, t[69] = r, t[70] = W) : W = t[70];
        let G;
        t[71] !== m || t[72] !== r ? (G = e => {
            n()?.getWorkspaceId() === r && a().danger(e instanceof Error && e.message ? e.message : m.formatMessage({
                id: `admin.plugins.v2.marketplaces.auto_sync.error`,
                defaultMessage: `Unable to update automatic sync`
            }))
        }, t[71] = m, t[72] = r, t[73] = G) : G = t[73];
        let Je;
        t[74] !== U || t[75] !== W || t[76] !== G ? (Je = {
            mutationFn: U,
            onSuccess: W,
            onError: G
        }, t[74] = U, t[75] = W, t[76] = G, t[77] = Je) : Je = t[77];
        let Ye = ne(Je),
            Xe = i.trim().toLocaleLowerCase(),
            Ze = Xe ? Ce.filter(e => {
                let {
                    repository: t,
                    sourceUrl: n,
                    ref: r
                } = e;
                return [t, n, r, `github`].some(e => e?.toLocaleLowerCase().includes(Xe))
            }) : Ce,
            K = Ce.find(e => {
                let {
                    id: t
                } = e;
                return t === g
            }) ?? (F?.marketplace_source_id === g ? ue([F], [])[0] : void 0),
            Qe = K ? `https://github.com/${K.repository}` : null,
            $e;
        t[78] !== T || t[79] !== H.isPending || t[80] !== H.variables?.marketplace_source_id || t[81] !== F || t[82] !== b || t[83] !== I ? ($e = H.isPending && H.variables?.marketplace_source_id === T || I === `WAITING` || I === `SYNCING` || Pe(b, T, F), t[78] = T, t[79] = H.isPending, t[80] = H.variables?.marketplace_source_id, t[81] = F, t[82] = b, t[83] = I, t[84] = $e) : $e = t[84];
        let q = $e,
            et = F == null || Ye.isPending,
            J;
        t[85] !== H || t[86] !== F ? (J = () => {
            F != null && H.mutate(F)
        }, t[85] = H, t[86] = F, t[87] = J) : J = t[87];
        let tt;
        t[88] === Symbol.for(`react.memo_cache_sentinel`) ? (tt = (0, N.jsx)(d, {
            id: `admin.plugins.v2.marketplaces.sync.button`,
            defaultMessage: `Sync now`
        }), t[88] = tt) : tt = t[88];
        let nt;
        t[89] !== q || t[90] !== et || t[91] !== J ? (nt = (0, N.jsx)(w, {
            type: `button`,
            color: `secondary`,
            variant: `outline`,
            pill: !0,
            loading: q,
            disabled: et,
            onClick: J,
            children: tt
        }), t[89] = q, t[90] = et, t[91] = J, t[92] = nt) : nt = t[92];
        let rt = nt,
            Y;
        t[93] === m ? Y = t[94] : (Y = m.formatMessage({
            id: `admin.plugins.v2.marketplaces.edit.auto_sync`,
            defaultMessage: `Automatically sync marketplace`
        }), t[93] = m, t[94] = Y);
        let it = F?.continuous_sync ?? !0,
            at = F?.continuous_sync == null || q || Ye.isPending,
            X;
        t[95] !== Ye || t[96] !== F ? (X = e => {
            F != null && Ye.mutate({
                marketplace: F,
                continuousSync: e
            })
        }, t[95] = Ye, t[96] = F, t[97] = X) : X = t[97];
        let ot;
        t[98] !== Y || t[99] !== it || t[100] !== at || t[101] !== X ? (ot = (0, N.jsx)(s, {
            "aria-label": Y,
            checked: it,
            disabled: at,
            onCheckedChange: X
        }), t[98] = Y, t[99] = it, t[100] = at, t[101] = X, t[102] = ot) : ot = t[102];
        let st = ot,
            Z;
        t[103] === m ? Z = t[104] : (Z = m.formatMessage({
            id: `admin.plugins.v2.marketplaces.section.label`,
            defaultMessage: `Marketplaces`
        }), t[103] = m, t[104] = Z);
        let Q;
        t[105] !== F?.repository || t[106] !== p || t[107] !== c ? (Q = c == null ? null : (0, N.jsx)(Te, {
            marketplacesUrl: p,
            repository: F?.repository
        }), t[105] = F?.repository, t[106] = p, t[107] = c, t[108] = Q) : Q = t[108];
        let ct = c == null ? (0, N.jsx)(`div`, {
                className: `keyboard-focused:focus-ring overflow-x-auto`,
                role: `region`,
                "aria-label": m.formatMessage({
                    id: `admin.plugins.v2.marketplaces.table.scroll_region.label`,
                    defaultMessage: `Marketplace table`
                }),
                tabIndex: 0,
                children: (0, N.jsxs)(`table`, {
                    className: `w-full min-w-[640px] table-fixed border-collapse text-start`,
                    children: [(0, N.jsx)(`thead`, {
                        className: `border-token-border-light border-b`,
                        children: (0, N.jsxs)(`tr`, {
                            className: `text-token-text-secondary h-[54px] text-sm`,
                            children: [(0, N.jsx)(`th`, {
                                scope: `col`,
                                className: `ps-0 pe-6 text-start font-medium`,
                                children: (0, N.jsx)(d, {
                                    id: `admin.plugins.v2.marketplaces.columns.marketplace`,
                                    defaultMessage: `Marketplace`
                                })
                            }), (0, N.jsx)(`th`, {
                                scope: `col`,
                                className: `w-[136px] px-3 text-start font-medium`,
                                children: (0, N.jsx)(d, {
                                    id: `admin.plugins.v2.marketplaces.columns.plugins`,
                                    defaultMessage: `Plugins`
                                })
                            }), (0, N.jsx)(`th`, {
                                scope: `col`,
                                className: `w-[220px] px-3 text-start font-medium`,
                                children: (0, N.jsx)(d, {
                                    id: `admin.plugins.v2.marketplaces.columns.last_synced`,
                                    defaultMessage: `Last synced`
                                })
                            }), (0, N.jsx)(`th`, {
                                scope: `col`,
                                className: `w-12 ps-3 pe-0`,
                                children: (0, N.jsx)(`span`, {
                                    className: `sr-only`,
                                    children: (0, N.jsx)(d, {
                                        id: `admin.plugins.v2.marketplaces.columns.actions`,
                                        defaultMessage: `Actions`
                                    })
                                })
                            })]
                        })
                    }), (0, N.jsx)(`tbody`, {
                        children: he.isLoading && Ze.length === 0 ? (0, N.jsx)(`tr`, {
                            children: (0, N.jsx)(`td`, {
                                colSpan: 4,
                                className: `text-token-text-secondary px-5 py-12 text-center`,
                                children: (0, N.jsx)(d, {
                                    id: `admin.plugins.v2.marketplaces.loading`,
                                    defaultMessage: `Loading marketplaces`
                                })
                            })
                        }) : he.isError ? (0, N.jsx)(`tr`, {
                            children: (0, N.jsx)(`td`, {
                                colSpan: 4,
                                className: `px-5 py-12 text-center`,
                                children: (0, N.jsxs)(`div`, {
                                    className: `text-token-text-secondary flex flex-col items-center gap-3`,
                                    children: [(0, N.jsx)(d, {
                                        id: `admin.plugins.v2.marketplaces.error`,
                                        defaultMessage: `Unable to load marketplaces`
                                    }), (0, N.jsx)(w, {
                                        color: `secondary`,
                                        variant: `outline`,
                                        onClick: () => void he.refetch(),
                                        children: (0, N.jsx)(d, {
                                            id: `admin.plugins.v2.marketplaces.error.retry`,
                                            defaultMessage: `Try again`
                                        })
                                    })]
                                })
                            })
                        }) : Ze.length === 0 ? (0, N.jsx)(`tr`, {
                            children: (0, N.jsx)(`td`, {
                                colSpan: 4,
                                className: `text-token-text-secondary px-5 py-12 text-center`,
                                children: (0, N.jsx)(d, {
                                    id: `admin.plugins.v2.marketplaces.empty`,
                                    defaultMessage: `No marketplace found`
                                })
                            })
                        }) : Ze.map(e => (0, N.jsxs)(`tr`, {
                            className: `hover:bg-token-bg-secondary-surface focus-within:bg-token-bg-secondary-surface border-token-border-light relative isolate h-16 border-b [&>td]:py-3`,
                            children: [(0, N.jsxs)(`td`, {
                                className: `ps-0 pe-6`,
                                children: [(0, N.jsxs)(`div`, {
                                    className: `flex min-w-0 items-center gap-3`,
                                    children: [(0, N.jsx)(`span`, {
                                        className: `border-token-border-light bg-token-bg-secondary flex size-8 shrink-0 items-center justify-center rounded-lg border`,
                                        children: (0, N.jsx)(xe, {
                                            "aria-hidden": !0,
                                            className: `size-4`
                                        })
                                    }), (0, N.jsxs)(`div`, {
                                        className: `min-w-0`,
                                        children: [e.isPersisted ? (0, N.jsx)(`button`, {
                                            type: `button`,
                                            title: e.repository,
                                            className: `text-token-text-primary keyboard-focused:focus-ring block max-w-full cursor-pointer truncate text-start font-medium after:absolute after:inset-0 after:z-10 after:content-['']`,
                                            "aria-label": m.formatMessage({
                                                id: `admin.plugins.v2.marketplaces.view.accessible_label`,
                                                defaultMessage: `View {repository} marketplace`
                                            }, {
                                                repository: e.repository
                                            }),
                                            onMouseEnter: Ae,
                                            onFocus: je,
                                            onClick: () => {
                                                Ee.prefetch(), l(e.id)
                                            },
                                            children: e.repository
                                        }) : (0, N.jsx)(`span`, {
                                            className: `text-token-text-primary block truncate font-medium`,
                                            title: e.repository,
                                            children: e.repository
                                        }), e.ref ? (0, N.jsx)(`span`, {
                                            className: `text-token-text-tertiary block truncate text-xs`,
                                            title: e.ref,
                                            children: e.ref
                                        }) : null]
                                    })]
                                }), !e.isPersisted && e.message ? (0, N.jsx)(`p`, {
                                    role: `alert`,
                                    className: `text-token-interactive-label-warning-secondary text-xs`,
                                    children: e.message
                                }) : null]
                            }), (0, N.jsx)(`td`, {
                                className: `text-token-text-secondary px-3 tabular-nums`,
                                children: e.pluginCount == null ? m.formatMessage({
                                    id: `admin.plugins.v2.marketplaces.value.unavailable`,
                                    defaultMessage: `—`
                                }) : m.formatNumber(e.pluginCount)
                            }), (0, N.jsx)(`td`, {
                                className: `text-token-text-secondary px-3`,
                                children: (0, N.jsxs)(`div`, {
                                    className: `flex flex-wrap items-center gap-x-2 gap-y-1`,
                                    children: [e.lastReconciledAt ? (0, N.jsx)(`time`, {
                                        dateTime: e.lastReconciledAt,
                                        children: (0, N.jsx)(oe, {
                                            dateString: e.lastReconciledAt,
                                            capitalizeJustNow: !1
                                        })
                                    }) : m.formatMessage({
                                        id: `admin.plugins.v2.marketplaces.value.unavailable`,
                                        defaultMessage: `—`
                                    }), (0, N.jsx)(Fe, {
                                        status: e.status,
                                        failedCount: e.failedCount,
                                        compact: !0
                                    })]
                                })
                            }), (0, N.jsx)(`td`, {
                                className: `ps-3 pe-0 text-end`,
                                children: e.isPersisted ? (0, N.jsx)(w, {
                                    color: `secondary`,
                                    variant: `ghost`,
                                    size: `md`,
                                    uniform: !0,
                                    pill: !0,
                                    className: `relative z-20`,
                                    "aria-label": m.formatMessage({
                                        id: `admin.plugins.v2.marketplaces.edit.accessible_label`,
                                        defaultMessage: `Edit {repository} marketplace`
                                    }, {
                                        repository: e.repository
                                    }),
                                    onClick: () => _(e.id),
                                    children: (0, N.jsx)(ye, {
                                        "aria-hidden": !0
                                    })
                                }) : null
                            })]
                        }, e.id))
                    })]
                })
            }) : k.isLoading ? (0, N.jsxs)(`div`, {
                className: `text-token-text-secondary flex min-h-[180px] items-center justify-center gap-2 px-4 text-sm`,
                role: `status`,
                children: [(0, N.jsx)(be, {
                    "aria-hidden": !0,
                    className: `size-4 motion-safe:animate-spin`
                }), (0, N.jsx)(d, {
                    id: `admin.plugins.v2.marketplaces.details.loading`,
                    defaultMessage: `Loading marketplace details`
                })]
            }) : k.isError || F == null ? (0, N.jsxs)(`div`, {
                className: `flex min-h-[180px] flex-col items-center justify-center gap-3 px-4 text-sm`,
                role: `alert`,
                children: [(0, N.jsx)(d, {
                    id: `admin.plugins.v2.marketplaces.details.error`,
                    defaultMessage: `Unable to load marketplace details`
                }), (0, N.jsx)(w, {
                    type: `button`,
                    color: `secondary`,
                    variant: `outline`,
                    onClick: () => void k.refetch(),
                    children: (0, N.jsx)(d, {
                        id: `admin.plugins.v2.marketplaces.error.retry`,
                        defaultMessage: `Try again`
                    })
                })]
            }) : (0, N.jsx)(`div`, {
                className: `mx-auto w-full max-w-6xl px-4 py-10 md:px-8 md:py-[60px]`,
                children: (0, N.jsx)(Ee, {
                    marketplace: F,
                    importReport: ze,
                    adminPlugins: Re.data ?? [],
                    searchTerm: i,
                    status: (0, N.jsxs)(N.Fragment, {
                        children: [(0, N.jsx)(Fe, {
                            status: q ? `SYNCING` : F.status,
                            failedCount: F.failed_count
                        }), (0, N.jsx)(ae, {
                            href: ie,
                            className: `text-token-interactive-label-accent-accessible text-sm underline`,
                            children: (0, N.jsx)(d, {
                                ...Ne
                            })
                        })]
                    }),
                    syncControl: rt,
                    autoSyncControl: st,
                    isSyncInProgress: q,
                    isReportLoading: P.isLoading,
                    isReportFetching: P.isFetching,
                    isReportError: P.isError,
                    onSettings: () => _(F.marketplace_source_id),
                    onViewPlugin: ee,
                    onRetry: () => void k.refetch(),
                    onRetryReport: () => void P.refetch()
                }, F.marketplace_source_id)
            }),
            $;
        t[109] !== st || t[110] !== v || t[111] !== R || t[112] !== K || t[113] !== g || t[114] !== Qe || t[115] !== F || t[116] !== rt ? ($ = g != null && K != null ? (0, N.jsx)(E, {
            open: !0,
            onOpenChange: e => {
                !e && !R.isPending && (y(!1), _(null))
            },
            children: (0, N.jsxs)(E.Content, {
                maxWidth: 528,
                children: [(0, N.jsxs)(E.Body, {
                    children: [(0, N.jsx)(E.Title, {
                        children: v ? (0, N.jsx)(d, {
                            id: `admin.plugins.v2.marketplaces.delete.title`,
                            defaultMessage: `Delete marketplace?`
                        }) : (0, N.jsx)(d, {
                            id: `admin.plugins.v2.marketplaces.edit.title`,
                            defaultMessage: `Marketplace settings`
                        })
                    }), v ? (0, N.jsx)(E.Description, {
                        children: (0, N.jsx)(d, {
                            id: `admin.plugins.v2.marketplaces.delete.description`,
                            defaultMessage: `Delete {repository} and all plugins imported from this marketplace?`,
                            values: {
                                repository: K.repository
                            }
                        })
                    }) : (0, N.jsxs)(`div`, {
                        className: `mt-5 flex flex-col gap-4`,
                        children: [(0, N.jsxs)(`div`, {
                            className: `flex flex-col gap-1`,
                            children: [(0, N.jsx)(`span`, {
                                className: `text-token-text-secondary text-xs`,
                                children: (0, N.jsx)(d, {
                                    id: `admin.plugins.v2.marketplaces.edit.source`,
                                    defaultMessage: `Source`
                                })
                            }), (0, N.jsx)(`span`, {
                                className: `break-all`,
                                children: Qe
                            })]
                        }), (0, N.jsxs)(`div`, {
                            className: `flex flex-col gap-1`,
                            children: [(0, N.jsx)(`span`, {
                                className: `text-token-text-secondary text-xs`,
                                children: (0, N.jsx)(d, {
                                    id: `admin.plugins.v2.marketplaces.edit.path`,
                                    defaultMessage: `Path`
                                })
                            }), (0, N.jsx)(`span`, {
                                className: `break-all`,
                                children: F == null ? (0, N.jsx)(d, {
                                    id: `admin.plugins.v2.marketplaces.value.unavailable`,
                                    defaultMessage: `—`
                                }) : F.source_subpath ? F.source_subpath : (0, N.jsx)(d, {
                                    id: `admin.plugins.v2.marketplaces.edit.path.repository_root`,
                                    defaultMessage: `Repository root`
                                })
                            })]
                        }), K.ref ? (0, N.jsxs)(`div`, {
                            className: `flex flex-col gap-1`,
                            children: [(0, N.jsx)(`span`, {
                                className: `text-token-text-secondary text-xs`,
                                children: (0, N.jsx)(d, {
                                    id: `admin.plugins.v2.marketplaces.edit.revision`,
                                    defaultMessage: `Branch, tag, or commit`
                                })
                            }), (0, N.jsx)(`span`, {
                                children: K.ref
                            })]
                        }) : null, K.message || F?.failure_code ? (0, N.jsx)(`p`, {
                            className: `text-token-interactive-label-warning-secondary`,
                            role: `alert`,
                            children: F?.failure_code ?? K.message
                        }) : null, (0, N.jsxs)(`div`, {
                            className: `flex items-center justify-between gap-4`,
                            children: [(0, N.jsxs)(`span`, {
                                id: `marketplace-auto-sync-${g}`,
                                className: `flex flex-col gap-1`,
                                children: [(0, N.jsx)(d, {
                                    id: `admin.plugins.v2.marketplaces.edit.auto_sync`,
                                    defaultMessage: `Automatically sync marketplace`
                                }), (0, N.jsx)(`span`, {
                                    className: `text-token-text-secondary text-xs`,
                                    children: (0, N.jsx)(d, {
                                        id: `admin.plugins.v2.marketplaces.edit.auto_sync.description`,
                                        defaultMessage: `Marketplace will automatically be synced daily.`
                                    })
                                })]
                            }), st]
                        }), (0, N.jsx)(ae, {
                            href: ie,
                            className: `text-token-interactive-label-accent-accessible text-sm underline`,
                            children: (0, N.jsx)(d, {
                                ...Ne
                            })
                        })]
                    })]
                }), (0, N.jsx)(E.Footer, {
                    children: v ? (0, N.jsxs)(N.Fragment, {
                        children: [(0, N.jsx)(w, {
                            color: `secondary`,
                            variant: `outline`,
                            disabled: R.isPending,
                            onClick: () => y(!1),
                            children: (0, N.jsx)(d, {
                                id: `admin.plugins.v2.marketplaces.delete.cancel`,
                                defaultMessage: `Cancel`
                            })
                        }), (0, N.jsx)(w, {
                            color: `danger`,
                            loading: R.isPending,
                            onClick: () => R.mutate(g),
                            children: (0, N.jsx)(d, {
                                id: `admin.plugins.v2.marketplaces.delete.confirm`,
                                defaultMessage: `Delete marketplace`
                            })
                        })]
                    }) : (0, N.jsxs)(N.Fragment, {
                        children: [(0, N.jsx)(w, {
                            color: `danger`,
                            variant: `ghost`,
                            onClick: () => y(!0),
                            children: (0, N.jsx)(d, {
                                id: `admin.plugins.v2.marketplaces.delete.confirm`,
                                defaultMessage: `Delete marketplace`
                            })
                        }), rt]
                    })
                })]
            })
        }) : null, t[109] = st, t[110] = v, t[111] = R, t[112] = K, t[113] = g, t[114] = Qe, t[115] = F, t[116] = rt, t[117] = $) : $ = t[117];
        let lt;
        return t[118] !== Z || t[119] !== Q || t[120] !== ct || t[121] !== $ ? (lt = (0, N.jsxs)(`section`, {
            "aria-label": Z,
            className: `w-full`,
            children: [Q, ct, $]
        }), t[118] = Z, t[119] = Q, t[120] = ct, t[121] = $, t[122] = lt) : lt = t[122], lt
    }
}));
export {
    j as i, F as n, Te as r, P as t
};
//# sourceMappingURL=5d75c14c-ojqlu6eihob4at3t.js.map
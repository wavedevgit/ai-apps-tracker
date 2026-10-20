const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/5abfaa10-ekm2kj30dl475dd8.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-qsuygr73qjc6rh65.js", "assets/2340486e-komxp8tzs51ny4jj.js", "assets/root-lelxp0l2.css", "assets/conversation-small-cawdu7il3ha6y70c.js", "assets/30901919-jory365vq6ym5crx.js", "assets/c470f5ab-in0lllrdrzeo67gs.js", "assets/0e5afe53-f9gmgfmgrr83ziw3.js", "assets/conversation-small-czggvj2v.css", "assets/c2675c8c-nxl2ic2ofk2vw70s.js", "assets/82782bc9-jj605vonxg0iyc7p.js", "assets/8b34dbc2-d4icgkio4i3wfm6q.js", "assets/global-modals-lv5n3ujm.css", "assets/1c919af1-md3slc2ht6it8c1k.js", "assets/e981ddae-luylzpqk7blubktl.js", "assets/707eab0c-hquix1of0ixypvkq.js", "assets/9d60841e-iq8jqsevylx8yfuv.js", "assets/bcae0416-id11cwjb6ybczrya.js", "assets/d4c740a3-ejmx8mw37mgqphty.js", "assets/Button-ijivgymd.css", "assets/a35abcd6-kcua9d3wne9fesqf.js", "assets/74a883a0-b8v1pxw5uk7r9z12.js", "assets/4b68ab38-jbucsll0fq82l60z.js", "assets/cb84f617-ehu83a3kxi4rlfir.js", "assets/36ecb4f8-bkwzzk2piicn5d88.js", "assets/Input-cmdkk215.css", "assets/99af6606-ome24evlktehl958.js", "assets/d2cf4d37-gxba24340175abl7.js", "assets/Menu-crbasfev.css"]))) => i.map(i => d[i]);
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
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as ee,
    Hn as u,
    Ln as te,
    N as ne,
    O as d,
    Pn as f,
    Tn as p,
    Vn as m,
    ln as h,
    p as re,
    s as g,
    un as ie,
    zn as _
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    K0t as ae,
    iWn as v,
    nWn as oe,
    q0t as y
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    Cs as se,
    Ji as ce,
    Ss as le,
    Yi as b,
    _s as ue,
    bs as de,
    gs as fe,
    hs as x,
    ms as pe,
    ny as S,
    ps as me,
    ry as he,
    vs as ge,
    ws as _e,
    xs as ve,
    ys as ye
} from "./c2675c8c-nxl2ic2ofk2vw70s.js";
import {
    F as be,
    b as xe,
    wt as Se
} from "./1c919af1-md3slc2ht6it8c1k.js";
import {
    t as Ce
} from "./e981ddae-luylzpqk7blubktl.js";
import {
    d as C,
    t as we
} from "./707eab0c-hquix1of0ixypvkq.js";
import {
    t as w
} from "./a35abcd6-kcua9d3wne9fesqf.js";
import {
    n as T,
    t as E
} from "./18093cad-igeb9lr500drqnxt.js";
import {
    n as D,
    t as Te
} from "./9db786f2-gqzef2p5eta2prza.js";
var O, k, Ee, A = e((() => {
        O = p(), _(), D(), k = m(), Ee = e => {
            "use forget";
            let t = (0, O.c)(4),
                {
                    marketplacesUrl: n,
                    repository: r
                } = e,
                i;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, k.jsx)(f, {
                id: `admin.plugins.v2.marketplaces.details.breadcrumb.label`,
                defaultMessage: `Marketplaces`
            }), t[0] = i) : i = t[0];
            let a;
            return t[1] !== n || t[2] !== r ? (a = (0, k.jsx)(`header`, {
                className: `border-token-border-light flex h-[52px] shrink-0 items-center gap-4 border-b px-5`,
                children: (0, k.jsx)(Te, {
                    pluginsUrl: n,
                    pluginName: r,
                    listLabel: i
                })
            }), t[1] = n, t[2] = r, t[3] = a) : a = t[3], a
        }
    })),
    j, De = e((() => {
        o(), ie(), j = i(() => h(() => import(`./5abfaa10-ekm2kj30dl475dd8.js`).then(e => e.AdminPluginMarketplaceDetailsContent), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29])))
    }));

function Oe(e) {
    let {
        status: t
    } = e;
    return t === `WAITING` || t === `SYNCING`
}

function ke() {}

function Ae() {
    j.prefetch()
}

function je() {
    j.prefetch()
}
var Me, Ne, M, Pe, Fe, Ie, N, P = e((() => {
    Me = p(), pe(), b(), c(), v(), r(), l(), y(), we(), w(), E(), g(), Ne = t(u()), _(), A(), le(), he(), De(), M = m(), Pe = te({
        id: `admin.plugins.v2.marketplaces.help_link.label`,
        defaultMessage: `Learn about marketplace sync`
    }), Fe = (e, t, n) => e?.sourceId === t && (n == null || n.status === `WAITING` || n.status === `SYNCING` || n.status === e.status && (n.last_checked_at ?? null) === e.lastCheckedAt && (n.last_reconciled_at ?? null) === e.lastReconciledAt), Ie = e => {
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
        t[0] !== a || t[1] !== n ? (c = x({
            status: n,
            failedCount: a
        }), t[0] = a, t[1] = n, t[2] = c) : c = t[2];
        let l = c,
            ee;
        t[3] !== s || t[4] !== l || t[5] !== a || t[6] !== n ? (ee = s ? (0, M.jsx)(f, {
            id: `admin.plugins.v2.marketplaces.status.completed`,
            defaultMessage: `{count, plural, =0 {Completed} one {Completed — # error} other {Completed — # errors}}`,
            values: {
                count: a
            }
        }) : n === `RECONNECT_GITHUB` ? (0, M.jsx)(f, {
            id: `admin.plugins.v2.marketplaces.status.reconnect_github`,
            defaultMessage: `Reconnect GitHub`
        }) : l ? (0, M.jsx)(f, {
            id: `admin.plugins.v2.marketplaces.status.needs_attention`,
            defaultMessage: `Needs attention`
        }) : (0, M.jsx)(f, {
            id: `admin.plugins.v2.marketplaces.status.syncing`,
            defaultMessage: `Syncing…`
        }), t[3] = s, t[4] = l, t[5] = a, t[6] = n, t[7] = ee) : ee = t[7];
        let u = ee,
            te = o && !s && !l ? `status` : void 0,
            ne = l ? `text-token-interactive-label-warning-secondary inline-flex items-center gap-2` : `text-token-text-secondary inline-flex items-center gap-2`,
            d;
        t[8] !== o || t[9] !== s || t[10] !== l ? (d = o && l ? (0, M.jsx)(Ce, {
            "aria-hidden": !0,
            className: `size-4 shrink-0`
        }) : o && !s ? (0, M.jsx)(xe, {
            "aria-hidden": !0,
            className: `size-4 shrink-0 motion-safe:animate-spin`
        }) : (0, M.jsx)(`span`, {
            "aria-hidden": !0,
            className: l ? `bg-token-interactive-label-warning-secondary size-1.5 rounded-full` : s ? `bg-token-text-status-success size-1.5 rounded-full` : `bg-token-text-tertiary size-1.5 rounded-full`
        }), t[8] = o, t[9] = s, t[10] = l, t[11] = d) : d = t[11];
        let p;
        return t[12] !== u || t[13] !== te || t[14] !== ne || t[15] !== d ? (p = (0, M.jsxs)(`span`, {
            role: te,
            className: ne,
            children: [d, u]
        }), t[12] = u, t[13] = te, t[14] = ne, t[15] = d, t[16] = p) : p = t[16], p
    }, N = e => {
        "use forget";
        let t = (0, Me.c)(123),
            {
                workspaceId: r,
                searchTerm: i,
                pendingImports: o,
                selectedMarketplaceSourceId: c,
                onSelectMarketplace: l,
                onMarketplaceDeleted: u,
                onViewPlugin: te,
                marketplacesUrl: p
            } = e,
            m = ee(),
            h = ne(),
            [g, ie] = (0, Ne.useState)(null),
            [_, v] = (0, Ne.useState)(!1),
            [y, le] = (0, Ne.useState)(null),
            b;
        t[0] === r ? b = t[1] : (b = ve(r), t[0] = r, t[1] = b);
        let x;
        t[2] === o ? x = t[3] : (x = e => {
            let {
                state: t
            } = e;
            return t.status === `error` ? !1 : o.some(e => e.import_status === `pending` || [`completed`, `already_imported`, `completed_with_issues`].includes(e.import_status) && e.marketplace_source_id != null && !(t.data?.items ?? []).some(n => fe(n, e, t.data?.items ?? []))) || (t.data?.items ?? []).some(Oe) ? 5e3 : !1
        }, t[2] = o, t[3] = x);
        let pe;
        t[4] !== b || t[5] !== x ? (pe = {
            ...b,
            refetchInterval: x
        }, t[4] = b, t[5] = x, t[6] = pe) : pe = t[6];
        let he = d(pe),
            Ce = he.data?.items ?? [],
            we = me(Ce, o),
            w = c ?? g,
            E;
        t[7] !== w || t[8] !== r ? (E = ge(r, w), t[7] = w, t[8] = r, t[9] = E) : E = t[9];
        let D;
        t[10] !== w || t[11] !== y ? (D = e => {
            let {
                state: t
            } = e;
            return t.status === `error` ? !1 : Fe(y, w, t.data) || t.data?.status === `WAITING` || t.data?.status === `SYNCING` ? 1500 : !1
        }, t[10] = w, t[11] = y, t[12] = D) : D = t[12];
        let Te;
        t[13] !== E || t[14] !== D ? (Te = {
            ...E,
            refetchInterval: D
        }, t[13] = E, t[14] = D, t[15] = Te) : Te = t[15];
        let O = d(Te),
            k;
        t[16] !== c || t[17] !== r ? (k = ye(r, c), t[16] = c, t[17] = r, t[18] = k) : k = t[18];
        let A;
        t[19] !== O.data || t[20] !== O.isError || t[21] !== y || t[22] !== c ? (A = e => {
            let {
                state: t
            } = e;
            return t.status === `error` || O.isError ? !1 : Fe(y, c, O.data) || O.data?.status === `WAITING` || O.data?.status === `SYNCING` ? 1500 : !1
        }, t[19] = O.data, t[20] = O.isError, t[21] = y, t[22] = c, t[23] = A) : A = t[23];
        let De;
        t[24] !== k || t[25] !== A ? (De = {
            ...k,
            refetchInterval: A
        }, t[24] = k, t[25] = A, t[26] = De) : De = t[26];
        let N = d(De),
            P = O.data,
            Le = c != null,
            Re;
        t[27] !== Le || t[28] !== r ? (Re = de(r, Le), t[27] = Le, t[28] = r, t[29] = Re) : Re = t[29];
        let ze = d(Re),
            Be = N.data?.report ?? null,
            F = P?.status,
            Ve = P?.last_checked_at,
            He = P?.last_reconciled_at,
            Ue;
        t[30] !== h || t[31] !== c || t[32] !== F || t[33] !== r ? (Ue = () => {
            if (c == null || F == null || F === `WAITING` || F === `SYNCING`) return;
            let e = {
                queryKey: ye(r, c).queryKey,
                exact: !0
            };
            Promise.all([h.cancelQueries(e).then(() => h.invalidateQueries(e)), h.invalidateQueries({
                queryKey: S(`marketplace-plugins`, r)
            })])
        }, t[30] = h, t[31] = c, t[32] = F, t[33] = r, t[34] = Ue) : Ue = t[34];
        let We;
        t[35] !== h || t[36] !== c || t[37] !== Ve || t[38] !== He || t[39] !== F || t[40] !== r ? (We = [h, r, c, F, Ve, He], t[35] = h, t[36] = c, t[37] = Ve, t[38] = He, t[39] = F, t[40] = r, t[41] = We) : We = t[41], (0, Ne.useEffect)(Ue, We);
        let Ge;
        t[42] !== h || t[43] !== r ? (Ge = e => n()?.getWorkspaceId() === r ? Promise.all([h.invalidateQueries({
            queryKey: S(`marketplaces`, r)
        }), h.invalidateQueries({
            queryKey: S(`marketplace-source-options`, r)
        }), h.invalidateQueries({
            queryKey: S(`marketplace-details`, r, e)
        }), h.invalidateQueries({
            queryKey: S(`marketplace-import-report`, r, e)
        }), h.invalidateQueries({
            queryKey: S(`list`, r)
        }), h.invalidateQueries({
            queryKey: S(`marketplace-plugins`, r)
        })]).then(ke) : Promise.resolve(), t[42] = h, t[43] = r, t[44] = Ge) : Ge = t[44];
        let I = Ge,
            Ke;
        t[45] === r ? Ke = t[46] : (Ke = e => ue(r, e), t[45] = r, t[46] = Ke);
        let qe;
        t[47] !== m || t[48] !== I || t[49] !== r ? (qe = (e, t) => {
            n()?.getWorkspaceId() === r && (v(!1), a().danger(e instanceof Error && e.message ? e.message : m.formatMessage({
                id: `admin.plugins.v2.marketplaces.delete.error`,
                defaultMessage: `Unable to delete marketplace`
            })), I(t))
        }, t[47] = m, t[48] = I, t[49] = r, t[50] = qe) : qe = t[50];
        let L = re({
                mutationFn: Ke,
                onSuccess: (e, t) => {
                    if (n()?.getWorkspaceId() !== r) return;
                    h.removeQueries({
                        queryKey: S(`marketplace-details`, r, t)
                    }), h.removeQueries({
                        queryKey: S(`marketplace-import-report`, r, t)
                    }), v(!1), ie(null);
                    let i = Ce.find(e => e.marketplace_source_id === t);
                    u(t, i == null ? [] : o.filter(e => fe(i, e, Ce))), c === t && l(null), I(t), a().success(m.formatMessage({
                        id: `admin.plugins.v2.marketplaces.delete.success`,
                        defaultMessage: `Marketplace deleted`
                    }))
                },
                onError: qe
            }),
            R;
        t[51] === r ? R = t[52] : (R = e => _e(r, e.marketplace_source_id), t[51] = r, t[52] = R);
        let z;
        t[53] !== m || t[54] !== I || t[55] !== r ? (z = (e, t) => {
            n()?.getWorkspaceId() === r && (le({
                sourceId: t.marketplace_source_id,
                status: t.status,
                lastCheckedAt: t.last_checked_at ?? null,
                lastReconciledAt: t.last_reconciled_at ?? null
            }), a().success(m.formatMessage({
                id: `admin.plugins.v2.marketplaces.sync.started`,
                defaultMessage: `Marketplace sync started`
            })), I(t.marketplace_source_id))
        }, t[53] = m, t[54] = I, t[55] = r, t[56] = z) : z = t[56];
        let B;
        t[57] !== m || t[58] !== r ? (B = () => {
            n()?.getWorkspaceId() === r && a().danger(m.formatMessage({
                id: `admin.plugins.v2.marketplaces.sync.error`,
                defaultMessage: `Unable to sync marketplace`
            }))
        }, t[57] = m, t[58] = r, t[59] = B) : B = t[59];
        let Je;
        t[60] !== R || t[61] !== z || t[62] !== B ? (Je = {
            mutationFn: R,
            onSuccess: z,
            onError: B
        }, t[60] = R, t[61] = z, t[62] = B, t[63] = Je) : Je = t[63];
        let V = re(Je),
            H;
        t[64] === r ? H = t[65] : (H = e => {
            let {
                marketplace: t,
                continuousSync: n
            } = e;
            return se({
                workspaceId: r,
                marketplace: t,
                continuousSync: n
            })
        }, t[64] = r, t[65] = H);
        let U;
        t[66] !== m || t[67] !== h || t[68] !== I || t[69] !== r ? (U = (e, t) => {
            let {
                marketplace: i
            } = t;
            if (n()?.getWorkspaceId() === r) return h.setQueryData(ge(r, i.marketplace_source_id).queryKey, t => t == null ? t : {
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
            })), I(i.marketplace_source_id)
        }, t[66] = m, t[67] = h, t[68] = I, t[69] = r, t[70] = U) : U = t[70];
        let W;
        t[71] !== m || t[72] !== r ? (W = e => {
            n()?.getWorkspaceId() === r && a().danger(e instanceof Error && e.message ? e.message : m.formatMessage({
                id: `admin.plugins.v2.marketplaces.auto_sync.error`,
                defaultMessage: `Unable to update automatic sync`
            }))
        }, t[71] = m, t[72] = r, t[73] = W) : W = t[73];
        let Ye;
        t[74] !== H || t[75] !== U || t[76] !== W ? (Ye = {
            mutationFn: H,
            onSuccess: U,
            onError: W
        }, t[74] = H, t[75] = U, t[76] = W, t[77] = Ye) : Ye = t[77];
        let G = re(Ye),
            Xe = i.trim().toLocaleLowerCase(),
            Ze = Xe ? we.filter(e => {
                let {
                    repository: t,
                    sourceUrl: n,
                    ref: r
                } = e;
                return [t, n, r, `github`].some(e => e?.toLocaleLowerCase().includes(Xe))
            }) : we,
            K = we.find(e => {
                let {
                    id: t
                } = e;
                return t === g
            }) ?? (P?.marketplace_source_id === g ? me([P], [])[0] : void 0),
            Qe = K ? `https://github.com/${K.repository}` : null,
            $e;
        t[78] !== w || t[79] !== V.isPending || t[80] !== V.variables?.marketplace_source_id || t[81] !== P || t[82] !== y || t[83] !== F ? ($e = V.isPending && V.variables?.marketplace_source_id === w || F === `WAITING` || F === `SYNCING` || Fe(y, w, P), t[78] = w, t[79] = V.isPending, t[80] = V.variables?.marketplace_source_id, t[81] = P, t[82] = y, t[83] = F, t[84] = $e) : $e = t[84];
        let q = $e,
            et = P == null || G.isPending,
            J;
        t[85] !== V || t[86] !== P ? (J = () => {
            P != null && V.mutate(P)
        }, t[85] = V, t[86] = P, t[87] = J) : J = t[87];
        let tt;
        t[88] === Symbol.for(`react.memo_cache_sentinel`) ? (tt = (0, M.jsx)(f, {
            id: `admin.plugins.v2.marketplaces.sync.button`,
            defaultMessage: `Sync now`
        }), t[88] = tt) : tt = t[88];
        let nt;
        t[89] !== q || t[90] !== et || t[91] !== J ? (nt = (0, M.jsx)(C, {
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
        let it = P?.continuous_sync ?? !0,
            at = P?.continuous_sync == null || q || G.isPending,
            X;
        t[95] !== G || t[96] !== P ? (X = e => {
            P != null && G.mutate({
                marketplace: P,
                continuousSync: e
            })
        }, t[95] = G, t[96] = P, t[97] = X) : X = t[97];
        let ot;
        t[98] !== Y || t[99] !== it || t[100] !== at || t[101] !== X ? (ot = (0, M.jsx)(s, {
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
        t[105] !== P?.repository || t[106] !== p || t[107] !== c ? (Q = c == null ? null : (0, M.jsx)(Ee, {
            marketplacesUrl: p,
            repository: P?.repository
        }), t[105] = P?.repository, t[106] = p, t[107] = c, t[108] = Q) : Q = t[108];
        let ct = c == null ? (0, M.jsx)(`div`, {
                className: `keyboard-focused:focus-ring overflow-x-auto`,
                role: `region`,
                "aria-label": m.formatMessage({
                    id: `admin.plugins.v2.marketplaces.table.scroll_region.label`,
                    defaultMessage: `Marketplace table`
                }),
                tabIndex: 0,
                children: (0, M.jsxs)(`table`, {
                    className: `w-full min-w-[640px] table-fixed border-collapse text-start`,
                    children: [(0, M.jsx)(`thead`, {
                        className: `border-token-border-light border-b`,
                        children: (0, M.jsxs)(`tr`, {
                            className: `text-token-text-secondary h-[54px] text-sm`,
                            children: [(0, M.jsx)(`th`, {
                                scope: `col`,
                                className: `ps-0 pe-6 text-start font-medium`,
                                children: (0, M.jsx)(f, {
                                    id: `admin.plugins.v2.marketplaces.columns.marketplace`,
                                    defaultMessage: `Marketplace`
                                })
                            }), (0, M.jsx)(`th`, {
                                scope: `col`,
                                className: `w-[136px] px-3 text-start font-medium`,
                                children: (0, M.jsx)(f, {
                                    id: `admin.plugins.v2.marketplaces.columns.plugins`,
                                    defaultMessage: `Plugins`
                                })
                            }), (0, M.jsx)(`th`, {
                                scope: `col`,
                                className: `w-[220px] px-3 text-start font-medium`,
                                children: (0, M.jsx)(f, {
                                    id: `admin.plugins.v2.marketplaces.columns.last_synced`,
                                    defaultMessage: `Last synced`
                                })
                            }), (0, M.jsx)(`th`, {
                                scope: `col`,
                                className: `w-12 ps-3 pe-0`,
                                children: (0, M.jsx)(`span`, {
                                    className: `sr-only`,
                                    children: (0, M.jsx)(f, {
                                        id: `admin.plugins.v2.marketplaces.columns.actions`,
                                        defaultMessage: `Actions`
                                    })
                                })
                            })]
                        })
                    }), (0, M.jsx)(`tbody`, {
                        children: he.isLoading && Ze.length === 0 ? (0, M.jsx)(`tr`, {
                            children: (0, M.jsx)(`td`, {
                                colSpan: 4,
                                className: `text-token-text-secondary px-5 py-12 text-center`,
                                children: (0, M.jsx)(f, {
                                    id: `admin.plugins.v2.marketplaces.loading`,
                                    defaultMessage: `Loading marketplaces`
                                })
                            })
                        }) : he.isError ? (0, M.jsx)(`tr`, {
                            children: (0, M.jsx)(`td`, {
                                colSpan: 4,
                                className: `px-5 py-12 text-center`,
                                children: (0, M.jsxs)(`div`, {
                                    className: `text-token-text-secondary flex flex-col items-center gap-3`,
                                    children: [(0, M.jsx)(f, {
                                        id: `admin.plugins.v2.marketplaces.error`,
                                        defaultMessage: `Unable to load marketplaces`
                                    }), (0, M.jsx)(C, {
                                        color: `secondary`,
                                        variant: `outline`,
                                        onClick: () => void he.refetch(),
                                        children: (0, M.jsx)(f, {
                                            id: `admin.plugins.v2.marketplaces.error.retry`,
                                            defaultMessage: `Try again`
                                        })
                                    })]
                                })
                            })
                        }) : Ze.length === 0 ? (0, M.jsx)(`tr`, {
                            children: (0, M.jsx)(`td`, {
                                colSpan: 4,
                                className: `text-token-text-secondary px-5 py-12 text-center`,
                                children: (0, M.jsx)(f, {
                                    id: `admin.plugins.v2.marketplaces.empty`,
                                    defaultMessage: `No marketplace found`
                                })
                            })
                        }) : Ze.map(e => (0, M.jsxs)(`tr`, {
                            className: `hover:bg-token-bg-secondary-surface focus-within:bg-token-bg-secondary-surface border-token-border-light relative isolate h-16 border-b [&>td]:py-3`,
                            children: [(0, M.jsxs)(`td`, {
                                className: `ps-0 pe-6`,
                                children: [(0, M.jsxs)(`div`, {
                                    className: `flex min-w-0 items-center gap-3`,
                                    children: [(0, M.jsx)(`span`, {
                                        className: `border-token-border-light bg-token-bg-secondary flex size-8 shrink-0 items-center justify-center rounded-lg border`,
                                        children: (0, M.jsx)(Se, {
                                            "aria-hidden": !0,
                                            className: `size-4`
                                        })
                                    }), (0, M.jsxs)(`div`, {
                                        className: `min-w-0`,
                                        children: [e.isPersisted ? (0, M.jsx)(`button`, {
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
                                                j.prefetch(), l(e.id)
                                            },
                                            children: e.repository
                                        }) : (0, M.jsx)(`span`, {
                                            className: `text-token-text-primary block truncate font-medium`,
                                            title: e.repository,
                                            children: e.repository
                                        }), e.ref ? (0, M.jsx)(`span`, {
                                            className: `text-token-text-tertiary block truncate text-xs`,
                                            title: e.ref,
                                            children: e.ref
                                        }) : null]
                                    })]
                                }), !e.isPersisted && e.message ? (0, M.jsx)(`p`, {
                                    role: `alert`,
                                    className: `text-token-interactive-label-warning-secondary text-xs`,
                                    children: e.message
                                }) : null]
                            }), (0, M.jsx)(`td`, {
                                className: `text-token-text-secondary px-3 tabular-nums`,
                                children: e.pluginCount == null ? m.formatMessage({
                                    id: `admin.plugins.v2.marketplaces.value.unavailable`,
                                    defaultMessage: `—`
                                }) : m.formatNumber(e.pluginCount)
                            }), (0, M.jsx)(`td`, {
                                className: `text-token-text-secondary px-3`,
                                children: (0, M.jsxs)(`div`, {
                                    className: `flex flex-wrap items-center gap-x-2 gap-y-1`,
                                    children: [e.lastReconciledAt ? (0, M.jsx)(`time`, {
                                        dateTime: e.lastReconciledAt,
                                        children: (0, M.jsx)(ce, {
                                            dateString: e.lastReconciledAt,
                                            capitalizeJustNow: !1
                                        })
                                    }) : m.formatMessage({
                                        id: `admin.plugins.v2.marketplaces.value.unavailable`,
                                        defaultMessage: `—`
                                    }), (0, M.jsx)(Ie, {
                                        status: e.status,
                                        failedCount: e.failedCount,
                                        compact: !0
                                    })]
                                })
                            }), (0, M.jsx)(`td`, {
                                className: `ps-3 pe-0 text-end`,
                                children: e.isPersisted ? (0, M.jsx)(C, {
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
                                    onClick: () => ie(e.id),
                                    children: (0, M.jsx)(be, {
                                        "aria-hidden": !0
                                    })
                                }) : null
                            })]
                        }, e.id))
                    })]
                })
            }) : O.isLoading ? (0, M.jsxs)(`div`, {
                className: `text-token-text-secondary flex min-h-[180px] items-center justify-center gap-2 px-4 text-sm`,
                role: `status`,
                children: [(0, M.jsx)(xe, {
                    "aria-hidden": !0,
                    className: `size-4 motion-safe:animate-spin`
                }), (0, M.jsx)(f, {
                    id: `admin.plugins.v2.marketplaces.details.loading`,
                    defaultMessage: `Loading marketplace details`
                })]
            }) : O.isError || P == null ? (0, M.jsxs)(`div`, {
                className: `flex min-h-[180px] flex-col items-center justify-center gap-3 px-4 text-sm`,
                role: `alert`,
                children: [(0, M.jsx)(f, {
                    id: `admin.plugins.v2.marketplaces.details.error`,
                    defaultMessage: `Unable to load marketplace details`
                }), (0, M.jsx)(C, {
                    type: `button`,
                    color: `secondary`,
                    variant: `outline`,
                    onClick: () => void O.refetch(),
                    children: (0, M.jsx)(f, {
                        id: `admin.plugins.v2.marketplaces.error.retry`,
                        defaultMessage: `Try again`
                    })
                })]
            }) : (0, M.jsx)(`div`, {
                className: `mx-auto w-full max-w-6xl px-4 py-10 md:px-8 md:py-[60px]`,
                children: (0, M.jsx)(j, {
                    marketplace: P,
                    importReport: Be,
                    adminPlugins: ze.data ?? [],
                    searchTerm: i,
                    status: (0, M.jsxs)(M.Fragment, {
                        children: [(0, M.jsx)(Ie, {
                            status: q ? `SYNCING` : P.status,
                            failedCount: P.failed_count
                        }), (0, M.jsx)(oe, {
                            href: ae,
                            className: `text-token-interactive-label-accent-accessible text-sm underline`,
                            children: (0, M.jsx)(f, {
                                ...Pe
                            })
                        })]
                    }),
                    syncControl: rt,
                    autoSyncControl: st,
                    isSyncInProgress: q,
                    isReportLoading: N.isLoading,
                    isReportFetching: N.isFetching,
                    isReportError: N.isError,
                    onSettings: () => ie(P.marketplace_source_id),
                    onViewPlugin: te,
                    onRetry: () => void O.refetch(),
                    onRetryReport: () => void N.refetch()
                }, P.marketplace_source_id)
            }),
            $;
        t[109] !== st || t[110] !== _ || t[111] !== L || t[112] !== K || t[113] !== g || t[114] !== Qe || t[115] !== P || t[116] !== rt ? ($ = g != null && K != null ? (0, M.jsx)(T, {
            open: !0,
            onOpenChange: e => {
                !e && !L.isPending && (v(!1), ie(null))
            },
            children: (0, M.jsxs)(T.Content, {
                maxWidth: 528,
                children: [(0, M.jsxs)(T.Body, {
                    children: [(0, M.jsx)(T.Title, {
                        children: _ ? (0, M.jsx)(f, {
                            id: `admin.plugins.v2.marketplaces.delete.title`,
                            defaultMessage: `Delete marketplace?`
                        }) : (0, M.jsx)(f, {
                            id: `admin.plugins.v2.marketplaces.edit.title`,
                            defaultMessage: `Marketplace settings`
                        })
                    }), _ ? (0, M.jsx)(T.Description, {
                        children: (0, M.jsx)(f, {
                            id: `admin.plugins.v2.marketplaces.delete.description`,
                            defaultMessage: `Delete {repository} and all plugins imported from this marketplace?`,
                            values: {
                                repository: K.repository
                            }
                        })
                    }) : (0, M.jsxs)(`div`, {
                        className: `mt-5 flex flex-col gap-4`,
                        children: [(0, M.jsxs)(`div`, {
                            className: `flex flex-col gap-1`,
                            children: [(0, M.jsx)(`span`, {
                                className: `text-token-text-secondary text-xs`,
                                children: (0, M.jsx)(f, {
                                    id: `admin.plugins.v2.marketplaces.edit.source`,
                                    defaultMessage: `Source`
                                })
                            }), (0, M.jsx)(`span`, {
                                className: `break-all`,
                                children: Qe
                            })]
                        }), (0, M.jsxs)(`div`, {
                            className: `flex flex-col gap-1`,
                            children: [(0, M.jsx)(`span`, {
                                className: `text-token-text-secondary text-xs`,
                                children: (0, M.jsx)(f, {
                                    id: `admin.plugins.v2.marketplaces.edit.path`,
                                    defaultMessage: `Path`
                                })
                            }), (0, M.jsx)(`span`, {
                                className: `break-all`,
                                children: P == null ? (0, M.jsx)(f, {
                                    id: `admin.plugins.v2.marketplaces.value.unavailable`,
                                    defaultMessage: `—`
                                }) : P.source_subpath ? P.source_subpath : (0, M.jsx)(f, {
                                    id: `admin.plugins.v2.marketplaces.edit.path.repository_root`,
                                    defaultMessage: `Repository root`
                                })
                            })]
                        }), K.ref ? (0, M.jsxs)(`div`, {
                            className: `flex flex-col gap-1`,
                            children: [(0, M.jsx)(`span`, {
                                className: `text-token-text-secondary text-xs`,
                                children: (0, M.jsx)(f, {
                                    id: `admin.plugins.v2.marketplaces.edit.revision`,
                                    defaultMessage: `Branch, tag, or commit`
                                })
                            }), (0, M.jsx)(`span`, {
                                children: K.ref
                            })]
                        }) : null, K.message || P?.failure_code ? (0, M.jsx)(`p`, {
                            className: `text-token-interactive-label-warning-secondary`,
                            role: `alert`,
                            children: P?.failure_code ?? K.message
                        }) : null, (0, M.jsxs)(`div`, {
                            className: `flex items-center justify-between gap-4`,
                            children: [(0, M.jsxs)(`span`, {
                                id: `marketplace-auto-sync-${g}`,
                                className: `flex flex-col gap-1`,
                                children: [(0, M.jsx)(f, {
                                    id: `admin.plugins.v2.marketplaces.edit.auto_sync`,
                                    defaultMessage: `Automatically sync marketplace`
                                }), (0, M.jsx)(`span`, {
                                    className: `text-token-text-secondary text-xs`,
                                    children: (0, M.jsx)(f, {
                                        id: `admin.plugins.v2.marketplaces.edit.auto_sync.description`,
                                        defaultMessage: `Marketplace will automatically be synced daily.`
                                    })
                                })]
                            }), st]
                        }), (0, M.jsx)(oe, {
                            href: ae,
                            className: `text-token-interactive-label-accent-accessible text-sm underline`,
                            children: (0, M.jsx)(f, {
                                ...Pe
                            })
                        })]
                    })]
                }), (0, M.jsx)(T.Footer, {
                    children: _ ? (0, M.jsxs)(M.Fragment, {
                        children: [(0, M.jsx)(C, {
                            color: `secondary`,
                            variant: `outline`,
                            disabled: L.isPending,
                            onClick: () => v(!1),
                            children: (0, M.jsx)(f, {
                                id: `admin.plugins.v2.marketplaces.delete.cancel`,
                                defaultMessage: `Cancel`
                            })
                        }), (0, M.jsx)(C, {
                            color: `danger`,
                            loading: L.isPending,
                            onClick: () => L.mutate(g),
                            children: (0, M.jsx)(f, {
                                id: `admin.plugins.v2.marketplaces.delete.confirm`,
                                defaultMessage: `Delete marketplace`
                            })
                        })]
                    }) : (0, M.jsxs)(M.Fragment, {
                        children: [(0, M.jsx)(C, {
                            color: `danger`,
                            variant: `ghost`,
                            onClick: () => v(!0),
                            children: (0, M.jsx)(f, {
                                id: `admin.plugins.v2.marketplaces.delete.confirm`,
                                defaultMessage: `Delete marketplace`
                            })
                        }), rt]
                    })
                })]
            })
        }) : null, t[109] = st, t[110] = _, t[111] = L, t[112] = K, t[113] = g, t[114] = Qe, t[115] = P, t[116] = rt, t[117] = $) : $ = t[117];
        let lt;
        return t[118] !== Z || t[119] !== Q || t[120] !== ct || t[121] !== $ ? (lt = (0, M.jsxs)(`section`, {
            "aria-label": Z,
            className: `w-full`,
            children: [Q, ct, $]
        }), t[118] = Z, t[119] = Q, t[120] = ct, t[121] = $, t[122] = lt) : lt = t[122], lt
    }
}));
export {
    A as i, P as n, Ee as r, N as t
};
//# sourceMappingURL=5d75c14c-hdkzein3cctb6fup.js.map
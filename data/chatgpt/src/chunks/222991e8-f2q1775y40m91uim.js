import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as n,
    BW as r,
    Bz as i,
    C1 as a,
    E1 as o,
    H0 as s,
    IG as c,
    K0 as l,
    LG as u,
    My as d,
    Rb as ee,
    V0 as f,
    _w as p,
    a7 as m,
    b5 as h,
    bst as g,
    dz as te,
    fz as _,
    hU as v,
    hw as y,
    iw as b,
    jy as x,
    kT as S,
    l7 as C,
    ow as ne,
    pU as w,
    pnt as re,
    qW as ie,
    u1 as ae,
    wst as oe,
    x1 as se,
    y5 as ce,
    ynt as T,
    zb as le,
    zz as E
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as D,
    In as O,
    Ln as k,
    N as ue,
    Nn as A,
    Rn as j,
    Vn as M,
    p as N,
    s as P,
    wn as F,
    zn as de
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Frt as fe,
    Irt as I,
    Ojt as L,
    THn as R,
    kjt as z,
    wHn as B
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Gg as V,
    Mv as H,
    Nv as pe,
    Pv as U,
    Uy as me,
    Wy as W,
    jv as he,
    qg as G
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    Bo as ge,
    Gb as _e,
    Ho as K,
    Ib as ve,
    Ko as ye,
    Uo as be,
    Wb as xe,
    Wo as Se,
    Zo as Ce,
    cy as we,
    iy as q,
    oy as Te,
    qo as Ee,
    sy as De
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    d as Oe,
    r as ke
} from "./b411f8ca-gxdzxq28yv3oaqos.js";
import {
    a as Ae,
    i as je
} from "./a99a60c9-lucg5s4vqdrfp7or.js";
import {
    d as Me,
    f as Ne,
    l as Pe
} from "./b90db9d2-nqn5x1xpx8jm45ix.js";
import {
    n as Fe,
    t as Ie
} from "./e17f5811-bce9qh9uyqfu9f7n.js";
var Le, Re, ze = e((() => {
    j(), Le = O({
        id: `admin.cloudConsoleM3RolePermissionReadOnlyTooltip`,
        defaultMessage: `These permissions can be configured in Cloud Console.`
    }), Re = ({
        isReadOnly: e,
        disabledReason: t
    }) => e ? Le : t
}));

function Be(e) {
    "use forget";
    let t = (0, He.c)(63),
        {
            workspaceId: n,
            feature: r,
            featureName: i,
            storedValue: a,
            isRbacEnabled: o,
            disabled: s,
            onChange: c,
            statusDescription: l,
            confirmationDescription: u
        } = e,
        d = s !== void 0 && s,
        ee = de(),
        f = ue(),
        [p, h] = (0, Ue.useState)(!1),
        g = a === !0,
        te = o ? g ? Y.enterpriseReleaseOptedOutDescription : Y.enterpriseReleaseOptedInDescription : g ? Y.enterpriseReleaseNonRbacOptedOutDescription : Y.enterpriseReleaseNonRbacOptedInDescription,
        _ = o ? Y.enterpriseReleaseOptOutDescription : Y.enterpriseReleaseNonRbacOptOutDescription,
        v;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (v = (e, t) => {
        t && h(!1)
    }, t[0] = v) : v = t[0];
    let x;
    t[1] === f ? x = t[2] : (x = () => f.invalidateQueries({
        queryKey: [`workspace-settings`]
    }), t[1] = f, t[2] = x);
    let C;
    t[3] !== r || t[4] !== n ? (C = e => m.safePost(`/accounts/{account_id}/beta_features`, {
        parameters: {
            path: {
                account_id: n
            }
        },
        requestBody: {
            feature: r,
            value: e
        }
    }), t[3] = r, t[4] = n, t[5] = C) : C = t[5];
    let ne;
    t[6] !== x || t[7] !== C ? (ne = {
        onSuccess: v,
        onSettled: x,
        mutationFn: C
    }, t[6] = x, t[7] = C, t[8] = ne) : ne = t[8];
    let w = N(ne),
        re;
    t[9] === w.isPending ? re = t[10] : (re = () => {
        w.isPending || h(!1)
    }, t[9] = w.isPending, t[10] = re);
    let ie = re,
        ae;
    t[11] !== r || t[12] !== w || t[13] !== c ? (ae = e => {
        c ? (c(r, e), h(!1)) : w.mutate(e)
    }, t[11] = r, t[12] = w, t[13] = c, t[14] = ae) : ae = t[14];
    let oe = ae,
        se;
    t[15] !== l || t[16] !== te ? (se = l ?? (0, J.jsx)(A, {
        ...te,
        values: {
            strong: Ve
        }
    }), t[15] = l, t[16] = te, t[17] = se) : se = t[17];
    let ce;
    t[18] === se ? ce = t[19] : (ce = (0, J.jsx)(`span`, {
        className: `min-w-0 text-sm text-token-text-tertiary`,
        children: se
    }), t[18] = se, t[19] = ce);
    let T = g ? `secondary` : `primary`,
        le = d || w.isPending,
        E;
    t[20] !== ee || t[21] !== g ? (E = ee.formatMessage(g ? Y.enterpriseReleaseOptInButton : Y.enterpriseReleaseOptOutButton), t[20] = ee, t[21] = g, t[22] = E) : E = t[22];
    let D;
    t[23] !== oe || t[24] !== g ? (D = () => {
        g ? oe(!1) : h(!0)
    }, t[23] = oe, t[24] = g, t[25] = D) : D = t[25];
    let O = g ? Y.enterpriseReleaseOptInButton : Y.enterpriseReleaseOptOutButton,
        k;
    t[26] === O ? k = t[27] : (k = (0, J.jsx)(A, {
        ...O
    }), t[26] = O, t[27] = k);
    let j;
    t[28] !== T || t[29] !== le || t[30] !== E || t[31] !== D || t[32] !== k ? (j = (0, J.jsx)(S, {
        color: T,
        size: `small`,
        disabled: le,
        loading: !1,
        label: E,
        onClick: D,
        children: k
    }), t[28] = T, t[29] = le, t[30] = E, t[31] = D, t[32] = k, t[33] = j) : j = t[33];
    let M;
    t[34] !== j || t[35] !== ce ? (M = (0, J.jsxs)(`div`, {
        className: `flex items-center justify-between gap-6 py-2`,
        children: [ce, j]
    }), t[34] = j, t[35] = ce, t[36] = M) : M = t[36];
    let P;
    t[37] === i ? P = t[38] : (P = (0, J.jsx)(A, {
        ...Y.enterpriseReleaseOptOutModalTitle,
        values: {
            name: i
        }
    }), t[37] = i, t[38] = P);
    let F;
    t[39] !== u || t[40] !== i || t[41] !== _ ? (F = u ?? (0, J.jsx)(A, {
        ..._,
        values: {
            name: i
        }
    }), t[39] = u, t[40] = i, t[41] = _, t[42] = F) : F = t[42];
    let fe;
    t[43] === oe ? fe = t[44] : (fe = () => oe(!0), t[43] = oe, t[44] = fe);
    let I;
    t[45] === Symbol.for(`react.memo_cache_sentinel`) ? (I = (0, J.jsx)(A, {
        ...Y.enterpriseReleaseOptOutConfirm
    }), t[45] = I) : I = t[45];
    let L;
    t[46] !== w.isPending || t[47] !== fe ? (L = (0, J.jsx)(y.Button, {
        as: `button`,
        color: `primary`,
        disabled: w.isPending,
        loading: w.isPending,
        onClick: fe,
        children: I
    }), t[46] = w.isPending, t[47] = fe, t[48] = L) : L = t[48];
    let R;
    t[49] === Symbol.for(`react.memo_cache_sentinel`) ? (R = (0, J.jsx)(A, {
        ...Y.enterpriseReleaseOptOutCancel
    }), t[49] = R) : R = t[49];
    let z;
    t[50] !== ie || t[51] !== w.isPending ? (z = (0, J.jsx)(y.Button, {
        as: `button`,
        color: `ghost`,
        disabled: w.isPending,
        onClick: ie,
        children: R
    }), t[50] = ie, t[51] = w.isPending, t[52] = z) : z = t[52];
    let B;
    t[53] !== ie || t[54] !== p || t[55] !== P || t[56] !== F || t[57] !== L || t[58] !== z ? (B = (0, J.jsx)(b, {
        isOpen: p,
        onClose: ie,
        title: P,
        description: F,
        testId: `modal-enterprise-release-opt-out`,
        primaryButton: L,
        secondaryButton: z
    }), t[53] = ie, t[54] = p, t[55] = P, t[56] = F, t[57] = L, t[58] = z, t[59] = B) : B = t[59];
    let V;
    return t[60] !== M || t[61] !== B ? (V = (0, J.jsxs)(J.Fragment, {
        children: [M, B]
    }), t[60] = M, t[61] = B, t[62] = V) : V = t[62], V
}

function Ve(e) {
    return (0, J.jsx)(`strong`, {
        children: e
    })
}
var He, Ue, J, Y, We = e((() => {
        He = F(), n(), p(), ne(), C(), P(), Ue = t(M()), j(), J = D(), Y = k({
            enterpriseReleaseOptOutButton: {
                id: `workspaceSettings.enterpriseReleaseOptOutButton`,
                defaultMessage: `Opt out`
            },
            enterpriseReleaseOptInButton: {
                id: `workspaceSettings.enterpriseReleaseOptInButton`,
                defaultMessage: `Opt in`
            },
            enterpriseReleaseOptOutModalTitle: {
                id: `workspaceSettings.enterpriseReleaseOptOutModalTitle`,
                defaultMessage: `Opt out of {name}`
            },
            enterpriseReleaseOptedInDescription: {
                id: `workspaceSettings.enterpriseReleaseOptedInDescription`,
                defaultMessage: `<strong>You’re opted in.</strong> When early access ends, this feature will turn on automatically for the default role unless you opt out. Custom roles are unaffected.`
            },
            enterpriseReleaseOptedOutDescription: {
                id: `workspaceSettings.enterpriseReleaseOptedOutDescription`,
                defaultMessage: `<strong>You’re opted out.</strong> When early access ends, this feature won’t turn on automatically for the default role. Custom roles are unaffected.`
            },
            enterpriseReleaseNonRbacOptedInDescription: {
                id: `workspaceSettings.enterpriseReleaseNonRbacOptedInDescription`,
                defaultMessage: `<strong>You’re opted in.</strong> When early access ends, this feature will turn on automatically unless you opt out.`
            },
            enterpriseReleaseNonRbacOptedOutDescription: {
                id: `workspaceSettings.enterpriseReleaseNonRbacOptedOutDescription`,
                defaultMessage: `<strong>You’re opted out.</strong> When early access ends, this feature won’t turn on automatically.`
            },
            enterpriseReleaseOptOutDescription: {
                id: `workspaceSettings.enterpriseReleaseOptOutDescription`,
                defaultMessage: `{name} will not turn on automatically for the default role after the early access period. Custom roles are unaffected. You can opt in again at any time.`
            },
            enterpriseReleaseNonRbacOptOutDescription: {
                id: `workspaceSettings.enterpriseReleaseNonRbacOptOutDescription`,
                defaultMessage: `{name} will not turn on automatically after the early access period. You can opt in again at any time.`
            },
            enterpriseReleaseOptOutConfirm: {
                id: `workspaceSettings.enterpriseReleaseOptOutConfirm`,
                defaultMessage: `Opt out`
            },
            enterpriseReleaseOptOutCancel: {
                id: `workspaceSettings.enterpriseReleaseOptOutCancel`,
                defaultMessage: `Cancel`
            }
        })
    })),
    Ge, Ke, qe, Je, Ye = e((() => {
        Ge = F(), We(), j(), Ke = D(), qe = e => {
            "use forget";
            let t = (0, Ge.c)(2),
                {
                    enabled: n,
                    controlMode: r
                } = e;
            if ((r === void 0 ? `legacy` : r) !== `legacy`) return null;
            let i;
            return t[0] === n ? i = t[1] : (i = (0, Ke.jsx)(`p`, {
                className: `text-token-text-tertiary text-xs`,
                children: n ? (0, Ke.jsx)(A, {
                    id: `chatgpt.workspace.permissions.library_sharing.policy.status.enabled`,
                    defaultMessage: `Library sharing is enabled for this workspace.`
                }) : (0, Ke.jsx)(A, {
                    id: `chatgpt.workspace.permissions.library_sharing.policy.status.disabled`,
                    defaultMessage: `Sharing management is disabled for this workspace. Your role settings will apply when sharing is re-enabled.`
                })
            }), t[0] = n, t[1] = i), i
        }, Je = e => {
            "use forget";
            let t = (0, Ge.c)(10),
                n, r;
            if (t[0] === e ? (n = t[1], r = t[2]) : ({
                    betaSettingsDict: n,
                    ...r
                } = e, t[0] = e, t[1] = n, t[2] = r), Object.hasOwn(n ?? {}, `library_sharing_admin_configuration`)) {
                let e;
                return t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Ke.jsx)(`p`, {
                    className: `text-token-text-tertiary py-2 text-sm`,
                    children: (0, Ke.jsx)(A, {
                        id: `chatgpt.workspace.permissions.library_sharing.release.description.configured`,
                        defaultMessage: `Your configuration will be preserved after Early Release.`
                    })
                }), t[3] = e) : e = t[3], e
            }
            let i;
            t[4] === r.storedValue ? i = t[5] : (i = r.storedValue === !0 ? (0, Ke.jsx)(A, {
                id: `chatgpt.workspace.permissions.library_sharing.release.description.opted_out`,
                defaultMessage: `Automatic enablement after Early Release is opted out. Current sharing and role settings are unchanged.`
            }) : (0, Ke.jsx)(A, {
                id: `chatgpt.workspace.permissions.library_sharing.release.description.unconfigured`,
                defaultMessage: `You can configure Library sharing and role permissions during Early Release.`
            }), t[4] = r.storedValue, t[5] = i);
            let a;
            t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, Ke.jsx)(A, {
                id: `chatgpt.workspace.permissions.library_sharing.release.opt_out.confirmation`,
                defaultMessage: `Opt out of automatically enabling Library sharing after Early Release? This keeps your current sharing configuration and role permissions unchanged.`
            }), t[6] = a) : a = t[6];
            let o;
            return t[7] !== r || t[8] !== i ? (o = (0, Ke.jsx)(Be, {
                ...r,
                statusDescription: i,
                confirmationDescription: a
            }), t[7] = r, t[8] = i, t[9] = o) : o = t[9], o
        }
    }));

function Xe({
    workspaceId: e,
    roleId: t,
    usageLimitDisplay: n = rt,
    searchQuery: r = ``,
    renderHighlightedText: i,
    showSharedUsageLimit: a = !1,
    disabled: c = !1,
    hideBottomBorder: l = !1,
    metadataDraft: u,
    onStageMetadata: d,
    onUnappliedChangesChange: ee
}) {
    "use no forget";
    let p = de(),
        m = v(),
        h = o(f),
        g = o(s),
        _ = !h && re(`1261424157`),
        y = _ && a && re(`2634861725`),
        b = !!t,
        {
            data: x,
            isLoading: S,
            isFetching: C,
            isError: ne
        } = _e({
            workspaceId: e,
            roleId: t ?? ``,
            enabled: _ && b
        }),
        {
            data: w,
            isLoading: ie
        } = xe({
            workspaceId: e,
            roleId: t ?? ``,
            enabled: _ && b
        }),
        {
            upsertRoleMetadata: ae,
            isPending: oe
        } = Oe({
            workspaceId: e,
            roleId: t ?? ``
        }),
        [se, ce] = (0, X.useState)(`none`),
        [T, le] = (0, X.useState)(``),
        [E, D] = (0, X.useState)(!1),
        [O, k] = (0, X.useState)(``),
        [ue, j] = (0, X.useState)(`none`),
        [M, N] = (0, X.useState)(``),
        [P, F] = (0, X.useState)(!1),
        [fe, I] = (0, X.useState)(null),
        [L, R] = (0, X.useState)(!1),
        [z, V] = (0, X.useState)(null),
        [H, pe] = (0, X.useState)(null),
        U = (0, X.useMemo)(() => w ? {
            low: w.low_credit_limit,
            medium: w.medium_credit_limit,
            high: w.high_credit_limit
        } : n, [w, n]),
        W = (0, X.useCallback)(e => p.formatMessage(Q.creditsPerWeek, {
            value: e
        }), [p]),
        he = (0, X.useCallback)(e => p.formatMessage(Q.creditsPerCalendarMonth, {
            value: e
        }), [p]),
        G = (0, X.useMemo)(() => ({
            low: W(U.low),
            medium: W(U.medium),
            high: W(U.high)
        }), [W, U.high, U.low, U.medium]),
        ge = x != null,
        K = u ? {
            ...x?.metadata,
            ...u
        } : x?.metadata ?? null,
        ve = K?.soft_alert_credit_limit ?? null,
        be = K?.hard_cap_credit_limit ?? null,
        Ce = K?.hard_cap_shared_credit_limit ?? null,
        we = ve ?? be ?? null,
        q = Ce?.limit ?? null;
    (0, X.useEffect)(() => {
        if (!x) return;
        if (!we) {
            ce(`none`), le(``), D(!1), k(``);
            return
        }
        let e = ve?.limit ?? null,
            t = be?.limit ?? null,
            n = t === 0,
            r = t != null,
            i = e ?? t ?? null;
        if (le(e == null ? t != null && !n ? String(t) : `` : String(e)), D(r), k(r && t != null ? String(t) : ``), !r && i != null && i === U.low) {
            ce(`low`);
            return
        }
        if (!r && i != null && i === U.medium) {
            ce(`medium`);
            return
        }
        if (!r && i != null && i === U.high) {
            ce(`high`);
            return
        }
        ce(i == null ? `none` : `custom`)
    }, [x, we, ve, be, U.high, U.low, U.medium]);
    let Te = {
        low: String(U.low),
        medium: String(U.medium),
        high: String(U.high)
    };
    (0, X.useEffect)(() => {
        if (x) {
            if (q == null) {
                j(`none`), N(``), I(null);
                return
            }
            N(String(q)), I(null), j(`custom`)
        }
    }, [x, q]);
    let De = (() => {
            switch (se) {
                case `low`:
                    return Te.low;
                case `medium`:
                    return Te.medium;
                case `high`:
                    return Te.high;
                case `custom`:
                    return T;
                default:
                    return ``
            }
        })().trim(),
        ke = (0, X.useMemo)(() => [{
            key: `none`,
            label: p.formatMessage(Q.enforcementDropdownNoneLabel)
        }, {
            key: `low`,
            label: p.formatMessage(Q.enforcementDropdownLowUsageLabel),
            limitLabel: G.low
        }, {
            key: `medium`,
            label: p.formatMessage(Q.enforcementDropdownMediumUsageLabel),
            limitLabel: G.medium
        }, {
            key: `high`,
            label: p.formatMessage(Q.enforcementDropdownHighLabel),
            limitLabel: G.high
        }, {
            key: `custom`,
            label: p.formatMessage(Q.enforcementDropdownCustomLabel)
        }], [p, G.high, G.low, G.medium]),
        Ae = (0, X.useMemo)(() => ke.filter(e => e.key === `none` || e.key === `custom`), [ke]),
        je = p.formatMessage(Q.enforcementDropdownPlaceholder),
        Me = ke.find(e => e.key === se) ?? null,
        Ne = Me?.label ?? je,
        Pe = Me?.limitLabel,
        Fe = se === `custom` ? E && O.trim() ? W(O.trim()) : T.trim() ? W(T.trim()) : Ne : (Me && Pe ? Pe : Ne) ?? je,
        Ie = !Me || Me.key === `none`,
        Le = _ && b && (S && !x || ie && !w),
        Re = oe || H != null,
        ze = d == null && ne && !ge,
        Be = c || d != null && g || Re || C || !ge && !ze,
        Ve = c || d != null && g || Re || C || !ge && !ze,
        He = H === `usage`,
        Ue = H === `shared`,
        J = async ({
            selectionKey: e,
            alertLimitOverride: n,
            hardCapEnabledOverride: r,
            hardCapLimitOverride: i
        }) => {
            if (!t || c) return;
            let a = ((e === `custom` ? n ?? T : e === `low` || e === `medium` || e === `high` ? Te[e] ?? `` : ``) ?? ``).trim(),
                o = a === `` ? NaN : Number(a),
                s = e === `custom` && (r ?? E) ? (i ?? O ?? ``).trim() : ``,
                l = s === `` ? NaN : Number(s),
                u = e === `custom` && s !== ``,
                ee = u && Number.isFinite(l) && l === 0;
            if (e !== `none` && e !== `none` && (e !== `custom` || u && !ee) && (a === `` || !Number.isFinite(o) || o <= 0)) {
                V(a === `` ? p.formatMessage(Q.alertRequiredForHardCap) : p.formatMessage(Q.invalidLimit));
                return
            }
            if (u && (s === `` || !Number.isFinite(l) || l < 0)) {
                V(p.formatMessage(Q.invalidLimit));
                return
            }
            V(null);
            let f = ct({
                selectionKey: e,
                trimmedSelectionAlert: a,
                parsedSelectionAlert: o,
                hasCustomHardCap: u,
                parsedSelectionHardCap: l,
                isHardCapZero: ee
            });
            if (d) {
                if (x == null) throw Error(`Role metadata must load before editing usage limits`);
                d(f, x);
                return
            }
            try {
                pe(`usage`), await ae(f), m.success(p.formatMessage(Q.submitSuccess))
            } catch {
                m.danger(p.formatMessage(Q.submitError))
            } finally {
                pe(null)
            }
        }, Y = async ({
            selectionKey: e,
            limitOverride: n
        }) => {
            if (!t || c) return;
            let r = (e === `custom` ? n ?? M : ``).trim(),
                i = r === `` ? NaN : Number(r);
            if (e !== `none` && (r === `` || !Number.isFinite(i) || i < 0)) {
                I(p.formatMessage(Q.sharedUsageInvalidLimit));
                return
            }
            I(null);
            let a = lt({
                sharedUsageLimit: e === `none` ? null : i
            });
            if (d) {
                if (x == null) throw Error(`Role metadata must load before editing usage limits`);
                d(a, x);
                return
            }
            try {
                pe(`shared`), await ae(a), m.success(p.formatMessage(Q.submitSuccess))
            } catch {
                m.danger(p.formatMessage(Q.submitError))
            } finally {
                pe(null)
            }
        }, We = e => {
            if (!Be) {
                if (e.key === `custom`) {
                    R(!0);
                    return
                }
                ce(e.key), J({
                    selectionKey: e.key
                })
            }
        }, Ge = e => {
            if (!Ve) {
                if (e.key === `custom`) {
                    F(!0);
                    return
                }
                j(e.key), Y({
                    selectionKey: e.key
                })
            }
        }, Ke = ({
            alertLimit: e,
            hardCapEnabled: t,
            hardCapLimit: n
        }) => {
            le(e), D(t), k(t ? n : ``), ce(`custom`), R(!1), J({
                selectionKey: `custom`,
                alertLimitOverride: e,
                hardCapEnabledOverride: t,
                hardCapLimitOverride: t ? n : ``
            })
        }, qe = e => {
            N(e), j(`custom`), F(!1), Y({
                selectionKey: `custom`,
                limitOverride: e
            })
        }, Je = T === `` ? De : T, Ye = E, Xe = O, Qe = Ae.find(e => e.key === ue) ?? null, et = Qe?.label ?? je, tt = ue === `custom` && M.trim() ? he(M.trim()) : et, it = !Qe || Qe.key === `none`;
    return !_ || !b || !ot({
        searchQuery: r,
        intl: p,
        includeSharedUsageLimit: y
    }) ? null : (0, Z.jsxs)(Z.Fragment, {
        children: [(0, Z.jsx)($e, {
            isOpen: !c && L,
            alertLimit: Je,
            hardCapEnabled: Ye,
            hardCapLimit: Xe,
            onClose: () => R(!1),
            onSave: Ke,
            isStaging: d != null,
            onUnappliedChangesChange: ee
        }), y && (0, Z.jsx)(Ze, {
            isOpen: !c && P,
            limit: M,
            onClose: () => F(!1),
            onSave: qe,
            isStaging: d != null,
            onUnappliedChangesChange: ee
        }), (0, Z.jsx)(Se, {
            children: Le ? (0, Z.jsx)(`div`, {
                className: `flex h-24 items-center justify-center`,
                children: (0, Z.jsx)(te, {
                    className: `text-token-text-tertiary h-6 w-6`
                })
            }) : (0, Z.jsxs)(ye, {
                className: l ? `border-b-0` : ``,
                children: [(0, Z.jsx)(Ee, {
                    children: (0, Z.jsxs)(`div`, {
                        className: `flex w-full items-start justify-between gap-4`,
                        children: [(0, Z.jsxs)(`div`, {
                            className: `flex flex-col gap-1`,
                            children: [(0, Z.jsx)(`div`, {
                                className: `text-md font-semibold`,
                                children: i?.(p.formatMessage(Q.creditLimitLabel)) ?? p.formatMessage(Q.creditLimitLabel)
                            }), (0, Z.jsx)(`div`, {
                                className: `text-token-text-secondary text-sm`,
                                children: i?.(p.formatMessage(Q.creditLimitDescription)) ?? p.formatMessage(Q.creditLimitDescription)
                            })]
                        }), (0, Z.jsxs)(`div`, {
                            className: `flex items-center gap-2`,
                            children: [He && (0, Z.jsx)(te, {
                                className: `text-token-text-tertiary h-4 w-4`
                            }), (0, Z.jsxs)(B.Root, {
                                children: [(0, Z.jsxs)(B.Trigger, {
                                    className: `bg-token-bg-primary text-token-text-primary border-token-border-heavy inline-flex min-w-[130px] items-center gap-2 rounded-md border px-2.5 py-1.5 text-start text-sm`,
                                    disabled: Be,
                                    children: [(0, Z.jsx)(`div`, {
                                        className: `flex min-w-0 flex-1 items-center justify-between gap-2`,
                                        children: (0, Z.jsx)(`span`, {
                                            className: `truncate ${Ie?`text-token-text-tertiary`:``}`,
                                            children: Fe
                                        })
                                    }), (0, Z.jsx)(me, {
                                        className: `text-token-text-tertiary h-3.5 w-3.5 shrink-0`
                                    })]
                                }), (0, Z.jsx)(B.Portal, {
                                    children: (0, Z.jsxs)(B.Content, {
                                        role: `dialog`,
                                        "aria-modal": `false`,
                                        "aria-label": p.formatMessage(Q.creditLimitLabel),
                                        side: `bottom`,
                                        align: `start`,
                                        className: `bg-token-bg-primary text-token-text-primary border-token-border-heavy w-64 rounded-lg border p-4 shadow-lg`,
                                        children: [(0, Z.jsxs)(`div`, {
                                            className: `flex flex-col gap-1`,
                                            children: [(0, Z.jsx)(`div`, {
                                                className: `text-sm`,
                                                children: p.formatMessage(Q.setCreditLimitLabel)
                                            }), (0, Z.jsx)(`div`, {
                                                className: `text-token-text-tertiary text-xs`,
                                                children: (0, Z.jsx)(A, {
                                                    ...Q.setCreditLimitDescription,
                                                    values: {
                                                        learnMoreLink: e => (0, Z.jsx)(`a`, {
                                                            href: ut,
                                                            target: `_blank`,
                                                            rel: `noreferrer`,
                                                            className: nt,
                                                            children: e
                                                        })
                                                    }
                                                })
                                            })]
                                        }), (0, Z.jsx)(`hr`, {
                                            className: `border-token-border-heavy my-3`
                                        }), (0, Z.jsx)(`div`, {
                                            className: `mt-3 flex flex-col gap-1`,
                                            children: ke.map(e => (0, Z.jsxs)(B.Item, {
                                                className: `flex items-center justify-between gap-2`,
                                                onClick: () => We(e),
                                                children: [(0, Z.jsx)(`span`, {
                                                    children: e.label
                                                }), e.limitLabel ? (0, Z.jsx)(`span`, {
                                                    className: `text-token-text-tertiary text-xs`,
                                                    children: e.limitLabel
                                                }) : null]
                                            }, e.key))
                                        })]
                                    })
                                })]
                            })]
                        })]
                    })
                }), y && (0, Z.jsx)(Ee, {
                    children: (0, Z.jsxs)(`div`, {
                        className: `flex w-full items-start justify-between gap-4`,
                        children: [(0, Z.jsxs)(`div`, {
                            className: `flex flex-col gap-1`,
                            children: [(0, Z.jsx)(`div`, {
                                className: `text-md font-semibold`,
                                children: i?.(p.formatMessage(Q.sharedUsageLimitLabel)) ?? p.formatMessage(Q.sharedUsageLimitLabel)
                            }), (0, Z.jsx)(`div`, {
                                className: `text-token-text-secondary text-sm`,
                                children: i?.(p.formatMessage(Q.sharedUsageLimitDescription)) ?? p.formatMessage(Q.sharedUsageLimitDescription)
                            })]
                        }), (0, Z.jsxs)(`div`, {
                            className: `flex flex-col items-end gap-2`,
                            children: [(0, Z.jsxs)(`div`, {
                                className: `flex items-center gap-2`,
                                children: [Ue && (0, Z.jsx)(te, {
                                    className: `text-token-text-tertiary h-4 w-4`
                                }), (0, Z.jsxs)(B.Root, {
                                    children: [(0, Z.jsxs)(B.Trigger, {
                                        className: `bg-token-bg-primary text-token-text-primary border-token-border-heavy inline-flex min-w-[130px] items-center gap-2 rounded-md border px-2.5 py-1.5 text-start text-sm`,
                                        disabled: Ve,
                                        children: [(0, Z.jsx)(`div`, {
                                            className: `flex min-w-0 flex-1 items-center justify-between gap-2`,
                                            children: (0, Z.jsx)(`span`, {
                                                className: `truncate ${it?`text-token-text-tertiary`:``}`,
                                                children: tt
                                            })
                                        }), (0, Z.jsx)(me, {
                                            className: `text-token-text-tertiary h-3.5 w-3.5 shrink-0`
                                        })]
                                    }), (0, Z.jsx)(B.Portal, {
                                        children: (0, Z.jsxs)(B.Content, {
                                            role: `dialog`,
                                            "aria-modal": `false`,
                                            "aria-label": p.formatMessage(Q.sharedUsageLimitLabel),
                                            side: `bottom`,
                                            align: `start`,
                                            className: `bg-token-bg-primary text-token-text-primary border-token-border-heavy w-64 rounded-lg border p-4 shadow-lg`,
                                            children: [(0, Z.jsxs)(`div`, {
                                                className: `flex flex-col gap-1`,
                                                children: [(0, Z.jsx)(`div`, {
                                                    className: `text-sm`,
                                                    children: p.formatMessage(Q.setSharedUsageLimitLabel)
                                                }), (0, Z.jsx)(`div`, {
                                                    className: `text-token-text-tertiary text-xs`,
                                                    children: p.formatMessage(Q.setSharedUsageLimitDescription)
                                                })]
                                            }), (0, Z.jsx)(`hr`, {
                                                className: `border-token-border-heavy my-3`
                                            }), (0, Z.jsx)(`div`, {
                                                className: `mt-3 flex flex-col gap-1`,
                                                children: Ae.map(e => (0, Z.jsx)(B.Item, {
                                                    className: `flex items-center justify-between gap-2`,
                                                    onClick: () => Ge(e),
                                                    children: (0, Z.jsx)(`span`, {
                                                        children: e.label
                                                    })
                                                }, e.key))
                                            })]
                                        })
                                    })]
                                })]
                            }), fe && (0, Z.jsx)(`div`, {
                                className: `text-interactive-label-warning-secondary text-xs`,
                                children: fe
                            })]
                        })]
                    })
                })]
            })
        })]
    })
}

function Ze(e) {
    "use forget";
    let t = (0, tt.c)(95),
        {
            isOpen: n,
            limit: r,
            onClose: i,
            onSave: a,
            isStaging: o,
            onUnappliedChangesChange: s
        } = e,
        c = o !== void 0 && o,
        l = de(),
        [u, d] = (0, X.useState)(r),
        [ee, f] = (0, X.useState)(!1),
        p;
    t[0] !== n || t[1] !== c || t[2] !== r || t[3] !== u ? (p = c && n && u.trim() !== r.trim(), t[0] = n, t[1] = c, t[2] = r, t[3] = u, t[4] = p) : p = t[4];
    let m = p,
        h, g;
    t[5] !== m || t[6] !== s ? (h = () => {
        if (m) return s?.(!0), () => s?.(!1)
    }, g = [m, s], t[5] = m, t[6] = s, t[7] = h, t[8] = g) : (h = t[7], g = t[8]), (0, X.useEffect)(h, g);
    let te, _;
    t[9] !== n || t[10] !== r ? (te = () => {
        n && (d(r), f(!1))
    }, _ = [n, r], t[9] = n, t[10] = r, t[11] = te, t[12] = _) : (te = t[11], _ = t[12]), (0, X.useEffect)(te, _);
    let v;
    t[13] === ee ? v = t[14] : (v = e => {
        let t = e.replace(/\s+/g, ``);
        /^\d*$/.test(t) && (d(t), ee && f(!1))
    }, t[13] = ee, t[14] = v);
    let b = v,
        x;
    t[15] === u ? x = t[16] : (x = u.trim(), t[15] = u, t[16] = x);
    let S = x,
        C = S === `` ? NaN : Number(S),
        ne;
    t[17] !== C || t[18] !== S ? (ne = S !== `` && Number.isFinite(C) && C >= 0, t[17] = C, t[18] = S, t[19] = ne) : ne = t[19];
    let w = ne,
        re;
    t[20] !== l || t[21] !== w ? (re = w ? `` : l.formatMessage(Q.sharedUsageInvalidLimit), t[20] = l, t[21] = w, t[22] = re) : re = t[22];
    let ie = re,
        ae = ee && !!ie,
        oe = ae ? ie : void 0,
        se = `pe-36${oe?` text-interactive-label-warning-secondary placeholder:text-interactive-label-warning-secondary`:``}`,
        ce = oe ? `border-token-border-error focus-within:border-token-border-error focus-within:ring-token-border-error` : void 0,
        T;
    t[23] === l ? T = t[24] : (T = l.formatMessage(Q.sharedUsageLimitCreditsSuffix), t[23] = l, t[24] = T);
    let le = T,
        E;
    t[25] === i ? E = t[26] : (E = e => {
        e || i()
    }, t[25] = i, t[26] = E);
    let D;
    t[27] === l ? D = t[28] : (D = l.formatMessage(Q.customSharedUsageLimitTitle), t[27] = l, t[28] = D);
    let O;
    t[29] === D ? O = t[30] : (O = (0, Z.jsx)(`div`, {
        className: `text-lg font-semibold`,
        children: D
    }), t[29] = D, t[30] = O);
    let k;
    t[31] === l ? k = t[32] : (k = l.formatMessage(Q.customModalCancelLabel), t[31] = l, t[32] = k);
    let ue;
    t[33] === Symbol.for(`react.memo_cache_sentinel`) ? (ue = (0, Z.jsx)(pe, {
        className: `h-4 w-4`
    }), t[33] = ue) : ue = t[33];
    let A;
    t[34] !== i || t[35] !== k ? (A = (0, Z.jsx)(`button`, {
        type: `button`,
        className: `text-token-text-tertiary hover:text-token-text-primary rounded-full p-1`,
        onClick: i,
        "aria-label": k,
        children: ue
    }), t[34] = i, t[35] = k, t[36] = A) : A = t[36];
    let j;
    t[37] !== O || t[38] !== A ? (j = (0, Z.jsx)(y.Header, {
        className: `px-6 ps-6 pt-6 pb-0`,
        title: O,
        closeButton: A
    }), t[37] = O, t[38] = A, t[39] = j) : j = t[39];
    let M;
    t[40] === l ? M = t[41] : (M = l.formatMessage(Q.customSharedUsageLimitDescription), t[40] = l, t[41] = M);
    let N;
    t[42] === M ? N = t[43] : (N = (0, Z.jsx)(`p`, {
        className: `text-token-text-tertiary text-xs leading-relaxed`,
        children: M
    }), t[42] = M, t[43] = N);
    let P;
    t[44] === l ? P = t[45] : (P = l.formatMessage(Q.customSharedUsageLimitAriaLabel), t[44] = l, t[45] = P);
    let F;
    t[46] === b ? F = t[47] : (F = e => b(e.target.value), t[46] = b, t[47] = F);
    let I;
    t[48] === le ? I = t[49] : (I = (0, Z.jsx)(`span`, {
        className: `text-token-text-primary pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 text-xs`,
        children: le
    }), t[48] = le, t[49] = I);
    let L;
    t[50] !== ce || t[51] !== se || t[52] !== oe || t[53] !== P || t[54] !== F || t[55] !== I || t[56] !== u ? (L = (0, Z.jsx)(fe, {
        name: `custom-shared-usage-limit`,
        ariaLabel: P,
        inputMode: `numeric`,
        value: u,
        onChange: F,
        className: ce,
        insideContainerChildren: I,
        inputClassName: se,
        showErrorIcon: !1,
        showInlineErrorMessage: !1,
        error: oe
    }), t[50] = ce, t[51] = se, t[52] = oe, t[53] = P, t[54] = F, t[55] = I, t[56] = u, t[57] = L) : L = t[57];
    let R;
    t[58] !== N || t[59] !== L ? (R = (0, Z.jsxs)(`div`, {
        className: `flex flex-col gap-3 px-6 text-sm`,
        children: [N, L]
    }), t[58] = N, t[59] = L, t[60] = R) : R = t[60];
    let z;
    t[61] !== ie || t[62] !== ae ? (z = ae && (0, Z.jsxs)(`div`, {
        className: `text-interactive-label-warning-secondary mb-3 flex items-center gap-2 text-xs`,
        children: [(0, Z.jsx)(he, {
            className: `h-4 w-4`,
            "aria-hidden": `true`
        }), (0, Z.jsx)(`span`, {
            children: ie
        })]
    }), t[61] = ie, t[62] = ae, t[63] = z) : z = t[63];
    let B;
    t[64] !== l || t[65] !== c ? (B = l.formatMessage(c ? Q.customModalApplyLabel : Q.customModalSaveLabel), t[64] = l, t[65] = c, t[66] = B) : B = t[66];
    let V = !w,
        H = !w,
        U;
    t[67] !== w || t[68] !== a || t[69] !== S ? (U = () => {
        f(!0), w && a(S)
    }, t[67] = w, t[68] = a, t[69] = S, t[70] = U) : U = t[70];
    let me;
    t[71] !== B || t[72] !== V || t[73] !== H || t[74] !== U ? (me = (0, Z.jsx)(y.Button, {
        color: `primary`,
        title: B,
        visuallyDisabled: V,
        "aria-disabled": H,
        onClick: U
    }), t[71] = B, t[72] = V, t[73] = H, t[74] = U, t[75] = me) : me = t[75];
    let W;
    t[76] === l ? W = t[77] : (W = l.formatMessage(Q.customModalCancelLabel), t[76] = l, t[77] = W);
    let G;
    t[78] !== i || t[79] !== W ? (G = (0, Z.jsx)(y.Button, {
        title: W,
        onClick: i
    }), t[78] = i, t[79] = W, t[80] = G) : G = t[80];
    let ge;
    t[81] !== me || t[82] !== G ? (ge = (0, Z.jsx)(y.Actions, {
        primaryButton: me,
        secondaryButton: G
    }), t[81] = me, t[82] = G, t[83] = ge) : ge = t[83];
    let _e;
    t[84] !== z || t[85] !== ge ? (_e = (0, Z.jsxs)(`div`, {
        className: `px-6 pb-4`,
        children: [z, ge]
    }), t[84] = z, t[85] = ge, t[86] = _e) : _e = t[86];
    let K;
    t[87] !== j || t[88] !== R || t[89] !== _e ? (K = (0, Z.jsx)(y.Overlay, {
        children: (0, Z.jsx)(y.Content, {
            position: `center`,
            className: `start-auto col-start-1 row-start-1 w-full max-w-sm ltr:translate-x-0 rtl:translate-x-0`,
            containerClassName: `grid grid-cols-1 grid-rows-1 place-items-center`,
            children: (0, Z.jsxs)(`div`, {
                className: `flex flex-col gap-4`,
                children: [j, R, _e]
            })
        })
    }), t[87] = j, t[88] = R, t[89] = _e, t[90] = K) : K = t[90];
    let ve;
    return t[91] !== n || t[92] !== E || t[93] !== K ? (ve = (0, Z.jsx)(y.Root, {
        isOpen: n,
        onClose: E,
        testId: `modal-custom-shared-usage-limit`,
        children: K
    }), t[91] = n, t[92] = E, t[93] = K, t[94] = ve) : ve = t[94], ve
}

function Qe({
    alertValue: e,
    hardCapValue: t,
    isHardCapEnabled: n,
    intl: r
}) {
    let i = e.trim(),
        a = t.trim(),
        o = i !== ``,
        s = a !== ``,
        c = n && s,
        l = Number(a),
        u = n && s && Number.isFinite(l) && l === 0,
        d = n && !u,
        ee = Number(i),
        f = u ? !0 : o && Number.isFinite(ee) && ee > 0 || !d && !o,
        p = !n || s && Number.isFinite(l) && l >= 0,
        m = c && o && !u && Number(a) <= Number(i),
        h = f ? `` : d && !o ? r.formatMessage(Q.alertRequiredForHardCap) : r.formatMessage(Q.invalidLimit),
        g = ``;
    return n && (s ? m ? g = r.formatMessage(Q.customModalHardCapConflictError) : d && !o ? g = r.formatMessage(Q.alertRequiredForHardCap) : (!f || !p) && (g = r.formatMessage(Q.invalidLimit)) : g = r.formatMessage(Q.customModalHardCapRequired)), {
        alertTrimmed: i,
        hardCapTrimmed: a,
        hasAlertValue: o,
        hasHardCapInput: s,
        hasHardCapValue: c,
        isHardCapZero: u,
        requiresAlert: d,
        isAlertValid: f,
        isHardCapValid: p,
        hasHardCapConflict: m,
        alertErrorMessage: h,
        hardCapErrorMessage: g
    }
}

function $e(e) {
    "use forget";
    let t = (0, tt.c)(195),
        {
            isOpen: n,
            alertLimit: r,
            hardCapEnabled: i,
            hardCapLimit: a,
            onClose: o,
            onSave: s,
            isStaging: c,
            onUnappliedChangesChange: l
        } = e,
        u = c !== void 0 && c,
        d = de(),
        [f, p] = (0, X.useState)(r),
        [m, h] = (0, X.useState)(i),
        [g, te] = (0, X.useState)(a),
        [_, v] = (0, X.useState)(!1),
        b;
    t[0] !== r || t[1] !== f || t[2] !== i || t[3] !== a || t[4] !== g || t[5] !== m || t[6] !== n || t[7] !== u ? (b = u && n && (f.trim() !== r.trim() || m !== i || m && g.trim() !== a.trim()), t[0] = r, t[1] = f, t[2] = i, t[3] = a, t[4] = g, t[5] = m, t[6] = n, t[7] = u, t[8] = b) : b = t[8];
    let x = b,
        S, C;
    t[9] !== x || t[10] !== l ? (S = () => {
        if (x) return l?.(!0), () => l?.(!1)
    }, C = [x, l], t[9] = x, t[10] = l, t[11] = S, t[12] = C) : (S = t[11], C = t[12]), (0, X.useEffect)(S, C);
    let ne, w;
    t[13] !== r || t[14] !== i || t[15] !== a || t[16] !== n ? (ne = () => {
        n && (p(r), h(i), te(a), v(!1))
    }, w = [r, i, a, n], t[13] = r, t[14] = i, t[15] = a, t[16] = n, t[17] = ne, t[18] = w) : (ne = t[17], w = t[18]), (0, X.useEffect)(ne, w);
    let re, ie;
    t[19] === m ? (re = t[20], ie = t[21]) : (re = () => {
        m || v(!1)
    }, ie = [m], t[19] = m, t[20] = re, t[21] = ie), (0, X.useEffect)(re, ie);
    let ae, oe;
    t[22] !== f || t[23] !== g || t[24] !== m ? (oe = () => {
        m && g.trim() === `0` && f !== `` && p(``)
    }, ae = [f, g, m], t[22] = f, t[23] = g, t[24] = m, t[25] = ae, t[26] = oe) : (ae = t[25], oe = t[26]), (0, X.useEffect)(oe, ae);
    let se;
    t[27] === _ ? se = t[28] : (se = () => {
        _ && v(!1)
    }, t[27] = _, t[28] = se);
    let T = se,
        le, E;
    if (t[29] !== T) {
        le = t => {
            e(p, t), T()
        }, E = t => {
            e(te, t), T()
        };
        let e = et;
        t[29] = T, t[30] = le, t[31] = E
    } else le = t[30], E = t[31];
    let D, O, k, ue, A, j, M, N, P, F, I, L, R, z, B, V, H, U, me, W, G, ge, _e, K;
    if (t[32] !== f || t[33] !== g || t[34] !== _ || t[35] !== d || t[36] !== m || t[37] !== n || t[38] !== o) {
        let {
            alertTrimmed: e,
            hardCapTrimmed: r,
            hasAlertValue: i,
            hasHardCapValue: a,
            isHardCapZero: s,
            isAlertValid: c,
            isHardCapValid: l,
            hasHardCapConflict: u,
            alertErrorMessage: ee,
            hardCapErrorMessage: p
        } = Qe({
            alertValue: f,
            hardCapValue: g,
            isHardCapEnabled: m,
            intl: d
        });
        A = e, P = r, I = s, F = I, L = !i && !a || !c || !l || u;
        let h = _ && (!!ee || !!p);
        R = h ? p || ee : ``, ue = h && ee ? ee : void 0, N = h && p ? p : void 0, j = N ? `border-token-border-error focus-within:border-token-border-error focus-within:ring-token-border-error` : void 0, M = `pe-24${N?` text-interactive-label-warning-secondary placeholder:text-interactive-label-warning-secondary`:``}`;
        let te;
        t[63] === d ? te = t[64] : (te = d.formatMessage(Q.customModalCreditsSuffix), t[63] = d, t[64] = te), z = te, k = y.Root, ge = n, t[65] === o ? _e = t[66] : (_e = e => {
            e || o()
        }, t[65] = o, t[66] = _e), K = `modal-custom-usage-limit`, O = y.Overlay, D = y.Content, me = `center`, W = `start-auto col-start-1 row-start-1 w-full max-w-sm ltr:translate-x-0 rtl:translate-x-0`, G = `grid grid-cols-1 grid-rows-1 place-items-center`, H = `flex flex-col gap-4`;
        let v;
        t[67] === d ? v = t[68] : (v = d.formatMessage(Q.customModalTitle), t[67] = d, t[68] = v);
        let b;
        t[69] === v ? b = t[70] : (b = (0, Z.jsx)(`div`, {
            className: `text-lg font-semibold`,
            children: v
        }), t[69] = v, t[70] = b);
        let x;
        t[71] === d ? x = t[72] : (x = d.formatMessage(Q.customModalCancelLabel), t[71] = d, t[72] = x);
        let S;
        t[73] === Symbol.for(`react.memo_cache_sentinel`) ? (S = (0, Z.jsx)(pe, {
            className: `h-4 w-4`
        }), t[73] = S) : S = t[73];
        let C;
        t[74] !== o || t[75] !== x ? (C = (0, Z.jsx)(`button`, {
            type: `button`,
            className: `text-token-text-tertiary hover:text-token-text-primary rounded-full p-1`,
            onClick: o,
            "aria-label": x,
            children: S
        }), t[74] = o, t[75] = x, t[76] = C) : C = t[76], t[77] !== b || t[78] !== C ? (U = (0, Z.jsx)(y.Header, {
            className: `px-6 ps-6 pt-6 pb-0`,
            title: b,
            closeButton: C
        }), t[77] = b, t[78] = C, t[79] = U) : U = t[79], V = `flex flex-col gap-6 px-6 text-sm`, B = ce(`flex flex-col gap-3`, F && `opacity-50`), t[32] = f, t[33] = g, t[34] = _, t[35] = d, t[36] = m, t[37] = n, t[38] = o, t[39] = D, t[40] = O, t[41] = k, t[42] = ue, t[43] = A, t[44] = j, t[45] = M, t[46] = N, t[47] = P, t[48] = F, t[49] = I, t[50] = L, t[51] = R, t[52] = z, t[53] = B, t[54] = V, t[55] = H, t[56] = U, t[57] = me, t[58] = W, t[59] = G, t[60] = ge, t[61] = _e, t[62] = K
    } else D = t[39], O = t[40], k = t[41], ue = t[42], A = t[43], j = t[44], M = t[45], N = t[46], P = t[47], F = t[48], I = t[49], L = t[50], R = t[51], z = t[52], B = t[53], V = t[54], H = t[55], U = t[56], me = t[57], W = t[58], G = t[59], ge = t[60], _e = t[61], K = t[62];
    let ve;
    t[80] === d ? ve = t[81] : (ve = d.formatMessage(Q.customModalSetAlertLabel), t[80] = d, t[81] = ve);
    let ye;
    t[82] === ve ? ye = t[83] : (ye = (0, Z.jsx)(`div`, {
        className: `text-token-text-primary font-medium`,
        children: ve
    }), t[82] = ve, t[83] = ye);
    let be;
    t[84] === d ? be = t[85] : (be = d.formatMessage(Q.customModalSetAlertDescription), t[84] = d, t[85] = be);
    let xe;
    t[86] === be ? xe = t[87] : (xe = (0, Z.jsx)(`p`, {
        className: `text-token-text-tertiary mt-1 text-xs leading-relaxed`,
        children: be
    }), t[86] = be, t[87] = xe);
    let Se;
    t[88] !== ye || t[89] !== xe ? (Se = (0, Z.jsxs)(`div`, {
        children: [ye, xe]
    }), t[88] = ye, t[89] = xe, t[90] = Se) : Se = t[90];
    let Ce;
    t[91] === d ? Ce = t[92] : (Ce = d.formatMessage(Q.customModalSetAlertLabel), t[91] = d, t[92] = Ce);
    let we;
    t[93] === le ? we = t[94] : (we = e => le(e.target.value), t[93] = le, t[94] = we);
    let q;
    t[95] === z ? q = t[96] : (q = (0, Z.jsx)(`span`, {
        className: `text-token-text-primary pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 text-xs`,
        children: z
    }), t[95] = z, t[96] = q);
    let Te;
    t[97] !== ue || t[98] !== f || t[99] !== F || t[100] !== Ce || t[101] !== we || t[102] !== q ? (Te = (0, Z.jsx)(fe, {
        name: `custom-alert-limit`,
        ariaLabel: Ce,
        inputMode: `numeric`,
        value: f,
        onChange: we,
        disabled: F,
        insideContainerChildren: q,
        inputClassName: `pe-24`,
        showErrorIcon: !1,
        showInlineErrorMessage: !1,
        error: ue
    }), t[97] = ue, t[98] = f, t[99] = F, t[100] = Ce, t[101] = we, t[102] = q, t[103] = Te) : Te = t[103];
    let Ee;
    t[104] !== d || t[105] !== F ? (Ee = F && (0, Z.jsx)(`div`, {
        className: `text-token-text-warning text-xs`,
        children: d.formatMessage(Q.customModalAlertDisabledNote)
    }), t[104] = d, t[105] = F, t[106] = Ee) : Ee = t[106];
    let De;
    t[107] !== B || t[108] !== Se || t[109] !== Te || t[110] !== Ee ? (De = (0, Z.jsxs)(`div`, {
        className: B,
        children: [Se, Te, Ee]
    }), t[107] = B, t[108] = Se, t[109] = Te, t[110] = Ee, t[111] = De) : De = t[111];
    let Oe;
    t[112] === d ? Oe = t[113] : (Oe = d.formatMessage(Q.customModalSetHardCapLabel), t[112] = d, t[113] = Oe);
    let ke;
    t[114] === Oe ? ke = t[115] : (ke = (0, Z.jsx)(`div`, {
        className: `flex items-center gap-1.5`,
        children: (0, Z.jsx)(`div`, {
            className: `text-token-text-primary font-medium`,
            children: Oe
        })
    }), t[114] = Oe, t[115] = ke);
    let Ae;
    t[116] === d ? Ae = t[117] : (Ae = d.formatMessage(Q.customModalToggleAriaLabel), t[116] = d, t[117] = Ae);
    let je;
    t[118] === T ? je = t[119] : (je = e => {
        h(!!e), T()
    }, t[118] = T, t[119] = je);
    let Me;
    t[120] !== m || t[121] !== Ae || t[122] !== je ? (Me = (0, Z.jsx)(ee, {
        "aria-label": Ae,
        checked: m,
        onCheckedChange: je
    }), t[120] = m, t[121] = Ae, t[122] = je, t[123] = Me) : Me = t[123];
    let Ne;
    t[124] !== ke || t[125] !== Me ? (Ne = (0, Z.jsxs)(`div`, {
        className: `flex items-center justify-between gap-2`,
        children: [ke, Me]
    }), t[124] = ke, t[125] = Me, t[126] = Ne) : Ne = t[126];
    let Pe;
    t[127] === d ? Pe = t[128] : (Pe = d.formatMessage(Q.customModalSetHardCapDescription), t[127] = d, t[128] = Pe);
    let Fe;
    t[129] === Pe ? Fe = t[130] : (Fe = (0, Z.jsx)(`p`, {
        className: `text-token-text-tertiary text-xs leading-relaxed`,
        children: Pe
    }), t[129] = Pe, t[130] = Fe);
    let Ie;
    t[131] !== E || t[132] !== j || t[133] !== M || t[134] !== N || t[135] !== g || t[136] !== d || t[137] !== m || t[138] !== z ? (Ie = m && (0, Z.jsx)(Z.Fragment, {
        children: (0, Z.jsx)(fe, {
            name: `custom-hard-cap-limit`,
            ariaLabel: d.formatMessage(Q.customModalSetHardCapLabel),
            inputMode: `numeric`,
            value: g,
            onChange: e => E(e.target.value),
            className: j,
            insideContainerChildren: (0, Z.jsx)(`span`, {
                className: `text-token-text-primary pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 text-xs`,
                children: z
            }),
            inputClassName: M,
            showErrorIcon: !1,
            showInlineErrorMessage: !1,
            error: N
        })
    }), t[131] = E, t[132] = j, t[133] = M, t[134] = N, t[135] = g, t[136] = d, t[137] = m, t[138] = z, t[139] = Ie) : Ie = t[139];
    let Le;
    t[140] !== Ne || t[141] !== Fe || t[142] !== Ie ? (Le = (0, Z.jsxs)(`div`, {
        className: `flex flex-col gap-3`,
        children: [Ne, Fe, Ie]
    }), t[140] = Ne, t[141] = Fe, t[142] = Ie, t[143] = Le) : Le = t[143];
    let Re;
    t[144] !== V || t[145] !== De || t[146] !== Le ? (Re = (0, Z.jsxs)(`div`, {
        className: V,
        children: [De, Le]
    }), t[144] = V, t[145] = De, t[146] = Le, t[147] = Re) : Re = t[147];
    let ze;
    t[148] === R ? ze = t[149] : (ze = R && (0, Z.jsxs)(`div`, {
        className: `text-interactive-label-warning-secondary mb-3 flex items-center gap-2 text-xs`,
        children: [(0, Z.jsx)(he, {
            className: `h-4 w-4`,
            "aria-hidden": `true`
        }), (0, Z.jsx)(`span`, {
            children: R
        })]
    }), t[148] = R, t[149] = ze);
    let Be;
    t[150] !== d || t[151] !== u ? (Be = d.formatMessage(u ? Q.customModalApplyLabel : Q.customModalSaveLabel), t[150] = d, t[151] = u, t[152] = Be) : Be = t[152];
    let Ve;
    t[153] !== A || t[154] !== P || t[155] !== m || t[156] !== I || t[157] !== L || t[158] !== s ? (Ve = () => {
        v(!0), !L && s({
            alertLimit: I ? `` : A,
            hardCapEnabled: m,
            hardCapLimit: m ? P : ``
        })
    }, t[153] = A, t[154] = P, t[155] = m, t[156] = I, t[157] = L, t[158] = s, t[159] = Ve) : Ve = t[159];
    let He;
    t[160] !== L || t[161] !== Be || t[162] !== Ve ? (He = (0, Z.jsx)(y.Button, {
        color: `primary`,
        title: Be,
        visuallyDisabled: L,
        "aria-disabled": L,
        onClick: Ve
    }), t[160] = L, t[161] = Be, t[162] = Ve, t[163] = He) : He = t[163];
    let Ue;
    t[164] === d ? Ue = t[165] : (Ue = d.formatMessage(Q.customModalCancelLabel), t[164] = d, t[165] = Ue);
    let J;
    t[166] !== o || t[167] !== Ue ? (J = (0, Z.jsx)(y.Button, {
        title: Ue,
        onClick: o
    }), t[166] = o, t[167] = Ue, t[168] = J) : J = t[168];
    let Y;
    t[169] !== He || t[170] !== J ? (Y = (0, Z.jsx)(y.Actions, {
        primaryButton: He,
        secondaryButton: J
    }), t[169] = He, t[170] = J, t[171] = Y) : Y = t[171];
    let We;
    t[172] !== ze || t[173] !== Y ? (We = (0, Z.jsxs)(`div`, {
        className: `px-6 pb-4`,
        children: [ze, Y]
    }), t[172] = ze, t[173] = Y, t[174] = We) : We = t[174];
    let Ge;
    t[175] !== H || t[176] !== U || t[177] !== Re || t[178] !== We ? (Ge = (0, Z.jsxs)(`div`, {
        className: H,
        children: [U, Re, We]
    }), t[175] = H, t[176] = U, t[177] = Re, t[178] = We, t[179] = Ge) : Ge = t[179];
    let Ke;
    t[180] !== D || t[181] !== me || t[182] !== W || t[183] !== G || t[184] !== Ge ? (Ke = (0, Z.jsx)(D, {
        position: me,
        className: W,
        containerClassName: G,
        children: Ge
    }), t[180] = D, t[181] = me, t[182] = W, t[183] = G, t[184] = Ge, t[185] = Ke) : Ke = t[185];
    let qe;
    t[186] !== O || t[187] !== Ke ? (qe = (0, Z.jsx)(O, {
        children: Ke
    }), t[186] = O, t[187] = Ke, t[188] = qe) : qe = t[188];
    let Je;
    return t[189] !== k || t[190] !== ge || t[191] !== _e || t[192] !== K || t[193] !== qe ? (Je = (0, Z.jsx)(k, {
        isOpen: ge,
        onClose: _e,
        testId: K,
        children: qe
    }), t[189] = k, t[190] = ge, t[191] = _e, t[192] = K, t[193] = qe, t[194] = Je) : Je = t[194], Je
}

function et(e, t) {
    let n = t.replace(/\s+/g, ``);
    /^\d*$/.test(n) && e(n)
}
var tt, X, Z, nt, rt, Q, it, at, ot, st, ct, lt, ut, dt = e((() => {
        tt = F(), ke(), ve(), Ce(), R(), W(), U(), H(), p(), le(), I(), _(), ae(), l(), w(), T(), h(), X = t(M()), j(), Z = D(), nt = `text-token-link hover:text-token-link-hover underline`, rt = {
            low: 300,
            medium: 400,
            high: 550
        }, Q = k({
            creditLimitLabel: {
                id: `workspaceSettings.roles.creditLimit.label`,
                defaultMessage: `Weekly usage limit`
            },
            creditLimitDescription: {
                id: `workspaceSettings.roles.creditLimit.description`,
                defaultMessage: `Set a weekly credit usage alert or hard limit for each member in the role.`
            },
            sharedUsageLimitLabel: {
                id: `workspaceSettings.roles.sharedUsageLimit.label`,
                defaultMessage: `Monthly shared budget`
            },
            sharedUsageLimitDescription: {
                id: `workspaceSettings.roles.sharedUsageLimit.description`,
                defaultMessage: `Set a calendar-month credit budget shared by everyone in the role.`
            },
            setSharedUsageLimitLabel: {
                id: `workspaceSettings.roles.sharedUsageLimit.dropdown.label`,
                defaultMessage: `Set monthly shared budget`
            },
            setSharedUsageLimitDescription: {
                id: `workspaceSettings.roles.sharedUsageLimit.dropdown.description`,
                defaultMessage: `Choose the calendar-month credit budget for this role. When the role reaches this shared cap, everyone in the role is blocked until the limit resets.`
            },
            customSharedUsageLimitTitle: {
                id: `workspaceSettings.roles.sharedUsageLimit.customModal.title`,
                defaultMessage: `Set custom monthly shared budget`
            },
            customSharedUsageLimitDescription: {
                id: `workspaceSettings.roles.sharedUsageLimit.customModal.description`,
                defaultMessage: `Enter the calendar-month credit budget for this role.`
            },
            customSharedUsageLimitAriaLabel: {
                id: `workspaceSettings.roles.sharedUsageLimit.customModal.input.label`,
                defaultMessage: `Monthly shared budget`
            },
            sharedUsageInvalidLimit: {
                id: `workspaceSettings.roles.sharedUsageLimit.customModal.input.error.invalid`,
                defaultMessage: `Enter a whole number of 0 or more credits.`
            },
            setCreditLimitLabel: {
                id: `workspaceSettings.roles.creditLimit.dropdown.label`,
                defaultMessage: `Set weekly usage alert`
            },
            setCreditLimitDescription: {
                id: `ErR7ID`,
                defaultMessage: `Admins will receive an alert when users reach this threshold. <learnMoreLink>Learn more</learnMoreLink>`
            },
            enforcementDropdownPlaceholder: {
                id: `vKYpfA`,
                defaultMessage: `Select enforcement`
            },
            enforcementDropdownNoneLabel: {
                id: `wdtOUz`,
                defaultMessage: `None`
            },
            enforcementDropdownLowUsageLabel: {
                id: `Eog4Bt`,
                defaultMessage: `Low`
            },
            enforcementDropdownMediumUsageLabel: {
                id: `+8zdmU`,
                defaultMessage: `Standard`
            },
            enforcementDropdownHighLabel: {
                id: `O8LSe9`,
                defaultMessage: `High`
            },
            enforcementDropdownCustomLabel: {
                id: `Vg9jm9`,
                defaultMessage: `Custom...`
            },
            customModalTitle: {
                id: `ncPgjp`,
                defaultMessage: `Set custom usage limit`
            },
            customModalSetAlertLabel: {
                id: `SGk6Kk`,
                defaultMessage: `Set alert`
            },
            customModalSetAlertDescription: {
                id: `D6tq1u`,
                defaultMessage: `Notify admins when users are nearing their weekly limit to help monitor usage without blocking access.`
            },
            customModalAlertDisabledNote: {
                id: `Woh6NB`,
                defaultMessage: `Alerts are disabled when the hard cap is 0.`
            },
            customModalSetHardCapLabel: {
                id: `ssDuR/`,
                defaultMessage: `Set hard cap`
            },
            customModalSetHardCapDescription: {
                id: `RL7iVH`,
                defaultMessage: `Notify users when they've reached this limit and automatically block additional usage.`
            },
            customModalHardCapConflictError: {
                id: `+HBuVz`,
                defaultMessage: `Hard cap must be greater than the alert limit.`
            },
            customModalHardCapRequired: {
                id: `GTp/gp`,
                defaultMessage: `Specify a hard cap limit when the toggle is on`
            },
            customModalCancelLabel: {
                id: `PeVgjT`,
                defaultMessage: `Cancel`
            },
            customModalSaveLabel: {
                id: `uUF8/I`,
                defaultMessage: `Save usage limit`
            },
            customModalApplyLabel: {
                id: `workspaceSettings.roles.creditLimit.modal.button.apply`,
                defaultMessage: `Apply`
            },
            customModalCreditsSuffix: {
                id: `3kb1OW`,
                defaultMessage: `credits/week`
            },
            sharedUsageLimitCreditsSuffix: {
                id: `workspaceSettings.roles.sharedUsageLimit.input.suffix`,
                defaultMessage: `credits/calendar month`
            },
            creditsPerWeek: {
                id: `OMPl9I`,
                defaultMessage: `{value} credits/week`
            },
            creditsPerCalendarMonth: {
                id: `workspaceSettings.roles.sharedUsageLimit.creditsPerCalendarMonth`,
                defaultMessage: `{value} credits/calendar month`
            },
            customModalToggleAriaLabel: {
                id: `VHampB`,
                defaultMessage: `Toggle hard cap limit`
            },
            invalidLimit: {
                id: `v0QaLa`,
                defaultMessage: `Enter a positive number as the credit limit`
            },
            alertRequiredForHardCap: {
                id: `NpeaWe`,
                defaultMessage: `Set an alert limit when a hard cap is enabled`
            },
            submitSuccess: {
                id: `G7A/Zh`,
                defaultMessage: `Credit limit updated`
            },
            submitError: {
                id: `brHKHK`,
                defaultMessage: `We couldn’t update the credit limit. Try again.`
            }
        }), it = e => e.trim().toLowerCase(), at = (e, ...t) => !e || t.join(` `).toLowerCase().includes(e), ot = ({
            searchQuery: e,
            intl: t,
            includeSharedUsageLimit: n = !0
        }) => {
            let r = it(e);
            if (!r) return !0;
            let i = [t.formatMessage(Q.creditLimitLabel), t.formatMessage(Q.creditLimitDescription), t.formatMessage(Q.setCreditLimitLabel)];
            return n && i.push(t.formatMessage(Q.sharedUsageLimitLabel), t.formatMessage(Q.sharedUsageLimitDescription), t.formatMessage(Q.setSharedUsageLimitLabel), t.formatMessage(Q.setSharedUsageLimitDescription)), at(r, ...i)
        }, st = (e, t) => ({
            limit: e,
            enforcement_mode: t
        }), ct = ({
            selectionKey: e,
            trimmedSelectionAlert: t,
            parsedSelectionAlert: n,
            hasCustomHardCap: r,
            parsedSelectionHardCap: i,
            isHardCapZero: a
        }) => {
            let o = {
                soft_alert_credit_limit: null,
                hard_cap_credit_limit: null
            };
            return e !== `none` && t !== `` && !a && (o.soft_alert_credit_limit = st(n, `ALERT`)), e === `custom` && (o.hard_cap_credit_limit = r ? st(i, `HARD_CAP`) : null), o
        }, lt = ({
            sharedUsageLimit: e
        }) => ({
            hard_cap_shared_credit_limit: e == null ? null : st(e, `HARD_CAP`)
        }), ut = `https://help.openai.com/en/articles/20001001`
    })),
    ft, pt, mt, ht, gt, _t = e((() => {
        we(), ft = e => e.trim().toLowerCase(), pt = (e, t, n) => e == null ? `` : typeof e == `string` ? e : String(t.formatMessage(e, n)), mt = (e, ...t) => !e || t.join(` `).toLowerCase().includes(e), ht = ({
            intl: e,
            preReleases: t,
            searchQuery: n,
            getEntryPresentation: r,
            preservePermissionFamilies: i = !1,
            visibleTextOnly: a = !1
        }) => {
            let o = ft(n);
            return o ? t.flatMap(t => {
                let n = pt(t.description, e),
                    s = new Set(t.newReleaseEntries.flatMap(e => e.rbac ? [e.permissionName] : []));
                if (mt(o, t.name, n)) return [t];
                let c = t.newReleaseEntries.filter(t => {
                    let n = pt(t.title, e),
                        i = pt(t.description, e, t.descriptionValues),
                        c = pt(t.additionalDescription, e, t.additionalDescriptionValues),
                        l = r?.(t, s)?.title;
                    return a ? mt(o, l ?? n, i, c) : mt(o, n, i, c, t.rbac ? t.permissionName : t.settingName, l ?? ``)
                });
                return c.length === 0 ? [] : [i ? t : {
                    ...t,
                    newReleaseEntries: c
                }]
            }) : t
        }, gt = ({
            intl: e,
            preReleases: t,
            searchQuery: n,
            getEntryPresentation: r,
            layout: i = `card`,
            effectiveRolePermissions: a
        }) => {
            let o = q(t.flatMap(e => e.newReleaseEntries)),
                s = ht({
                    intl: e,
                    preReleases: t,
                    searchQuery: n,
                    getEntryPresentation: r,
                    preservePermissionFamilies: i === `section`,
                    visibleTextOnly: i === `section`
                });
            return a == null ? s : s.map(e => ({
                ...e,
                newReleaseEntries: e.newReleaseEntries.filter(e => De({
                    currentPermissionNames: a,
                    entry: e,
                    permissionDependencyByName: o
                }))
            }))
        }
    }));

function vt(e) {
    return e.newReleaseEntries.length > 0
}

function yt(e) {
    return e.adminPreviewFeature != null
}

function bt(e) {
    return e.newReleaseOptOutFlag === g.LIBRARY_SHARING_GA_OPT_OUT
}

function xt(e) {
    return e.rbac ? [e.permissionName] : []
}
var St, Ct, $, wt, Tt, Et, Dt, Ot, kt, At = e((() => {
        St = F(), oe(), ze(), u(), Fe(), Ae(), Ne(), r(), we(), K(), We(), Ye(), p(), G(), i(), z(), ne(), le(), d(), _(), ae(), h(), Ct = t(M()), j(), _t(), $ = D(), wt = `text-token-link hover:text-token-link-hover underline`, Tt = e => {
            "use forget";
            let t = (0, St.c)(9),
                {
                    entry: n
                } = e;
            if (!n.description && !n.additionalDescription) return null;
            let r;
            t[0] !== n.description || t[1] !== n.descriptionValues ? (r = n.description && (0, $.jsx)(`div`, {
                children: (0, $.jsx)(A, {
                    ...n.description,
                    values: n.descriptionValues
                })
            }), t[0] = n.description, t[1] = n.descriptionValues, t[2] = r) : r = t[2];
            let i;
            t[3] !== n.additionalDescription || t[4] !== n.additionalDescriptionValues ? (i = n.additionalDescription && (0, $.jsx)(`div`, {
                children: (0, $.jsx)(A, {
                    ...n.additionalDescription,
                    values: n.additionalDescriptionValues
                })
            }), t[3] = n.additionalDescription, t[4] = n.additionalDescriptionValues, t[5] = i) : i = t[5];
            let a;
            return t[6] !== r || t[7] !== i ? (a = (0, $.jsxs)(`div`, {
                className: `text-token-text-tertiary text-xs`,
                children: [r, i]
            }), t[6] = r, t[7] = i, t[8] = a) : a = t[8], a
        }, Et = e => e.reduce((e, t) => e + t.newReleaseEntries.length, 0), Dt = () => {
            "use forget";
            let e = (0, St.c)(3),
                t;
            e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, $.jsx)(V, {
                "aria-hidden": `true`,
                className: `icon text-token-interactive-icon-tertiary-default`
            }), e[0] = t) : t = e[0];
            let n;
            e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, $.jsx)(`p`, {
                className: `text-token-text-primary text-sm font-semibold`,
                children: (0, $.jsx)(A, {
                    ...kt.enterpriseBetaFeatureJuly30EmptyTitle
                })
            }), e[1] = n) : n = e[1];
            let r;
            return e[2] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, $.jsxs)(`div`, {
                className: `bg-token-bg-secondary-surface flex min-h-[148px] w-full flex-col items-center justify-center gap-2 rounded-lg text-center`,
                children: [t, (0, $.jsxs)(`div`, {
                    className: `flex flex-col gap-1 pb-1`,
                    children: [n, (0, $.jsx)(`p`, {
                        className: `text-token-text-secondary text-sm`,
                        children: (0, $.jsx)(A, {
                            ...kt.enterpriseBetaFeatureJuly30EmptyDescription
                        })
                    })]
                })]
            }), e[2] = r) : r = e[2], r
        }, Ot = e => {
            "use forget";
            let t = (0, St.c)(96),
                {
                    workspaceId: n,
                    data: r,
                    preReleases: i,
                    handleSaveRole: o,
                    role: s,
                    showOptOutControls: l,
                    isRbacEnabled: u,
                    layout: d,
                    disableAllToggles: f,
                    disableRolePermissionWrites: p,
                    searchQuery: m,
                    sectionExpanded: h,
                    forceSectionExpanded: _,
                    onSectionExpandedChange: v,
                    renderHighlightedText: S,
                    renderSettingEntryControl: C,
                    getEntryPresentation: ne,
                    renderRbacEntryControl: w,
                    useSitesPermissionSelect: re,
                    effectiveRolePermissions: ae,
                    onOptOutChange: oe,
                    loadingAdminPreviewFeature: T,
                    onSetAdminPreviewAccess: le
                } = e,
                D = d === void 0 ? `card` : d,
                O = f !== void 0 && f,
                k = p !== void 0 && p,
                ue = m === void 0 ? `` : m,
                j = _ !== void 0 && _,
                M = re === void 0 || re,
                N = de(),
                P = (0, Ct.useId)(),
                F = se(n),
                fe = a(),
                I = F ?? fe,
                [R, z] = (0, Ct.useState)(null),
                B, V, H, pe, U, me, W, he, G, _e, K, ve, ye, xe, Se, Ce;
            if (t[0] !== I?.isHipaaCompliantWorkspace || t[1] !== r || t[2] !== O || t[3] !== k || t[4] !== ae || t[5] !== j || t[6] !== ne || t[7] !== o || t[8] !== N || t[9] !== u || t[10] !== D || t[11] !== T || t[12] !== oe || t[13] !== v || t[14] !== le || t[15] !== R?.enableConfirmation || t[16] !== i || t[17] !== S || t[18] !== w || t[19] !== C || t[20] !== s || t[21] !== ue || t[22] !== P || t[23] !== h || t[24] !== l || t[25] !== M || t[26] !== n) {
                ye = Symbol.for(`react.early_return_sentinel`);
                bb0: {
                    let e = gt({
                            intl: N,
                            preReleases: i,
                            searchQuery: ue,
                            getEntryPresentation: ne,
                            layout: D,
                            effectiveRolePermissions: ae,
                            rolePermissions: s.permissions
                        }),
                        a = e.some(vt);
                    if (ft(ue) && (D === `section` ? !a : e.length === 0)) {
                        ye = null;
                        break bb0
                    }
                    let d = D === `section` && !a,
                        f = d ? [] : e,
                        p = d || f.some(yt),
                        m = p ? kt.adminPreviewSection : kt.enterpriseBetaFeatureSection,
                        _ = I?.isHipaaCompliantWorkspace ?? !1,
                        y = p ? kt.adminPreviewSectionDescription : f.some(bt) ? kt.enterpriseBetaFeaturePerFeatureReleaseDescription : D === `section` ? kt.enterpriseBetaFeatureJuly30SectionDescription : kt.enterpriseBetaFeatureSectionDescription,
                        b;t[43] !== y || t[44] !== N || t[45] !== S ? (b = S?.(N.formatMessage(y)), t[43] = y, t[44] = N, t[45] = S, t[46] = b) : b = t[46];
                    let re = b,
                        se = D !== `section` && e.length === 0 ? kt.enterpriseBetaFeatureEmptySectionDescription : _ && a && !p ? (0, $.jsxs)(`div`, {
                            className: `flex flex-col gap-2`,
                            children: [(0, $.jsx)(`p`, {
                                children: re ?? (0, $.jsx)(A, {
                                    ...y
                                })
                            }), (0, $.jsx)(`p`, {
                                className: `text-token-text-status-warning`,
                                children: (0, $.jsx)(A, {
                                    ...kt.enterpriseBetaFeatureSectionHipaaDescription
                                })
                            })]
                        }) : re ?? y,
                        F;t[47] === N ? F = t[48] : (F = e => typeof e.title == `string` ? e.title : N.formatMessage(e.title), t[47] = N, t[48] = F),
                    V = F;
                    let de;t[49] === s.permissions ? de = t[50] : (de = (e, t) => {
                        let n = e.additionalPermissionNames ?? [];
                        return Te({
                            add: t,
                            currentPermissionNames: s.permissions,
                            permissionName: e.permissionName,
                            additionalPermissionNames: t ? n : [...n, ...e.permissionNamesToRemoveWhenDisabled ?? []]
                        })
                    }, t[49] = s.permissions, t[50] = de);
                    let fe = de,
                        we;t[51] !== k || t[52] !== o ? (we = e => k ? Promise.resolve() : o(e), t[51] = k, t[52] = o, t[53] = we) : we = t[53];
                    let q = we,
                        Ee;t[54] !== fe || t[55] !== s || t[56] !== q ? (Ee = (e, t) => q({
                        ...s,
                        permissions: fe(e, t)
                    }), t[54] = fe, t[55] = s, t[56] = q, t[57] = Ee) : Ee = t[57],
                    pe = Ee,
                    H = R?.enableConfirmation;
                    let De = D === `section` && h != null && v != null,
                        Oe = !De || j || h,
                        ke, Ae;t[58] !== N || t[59] !== S || t[60] !== m ? (ke = N.formatMessage(m), Ae = S?.(ke), t[58] = N, t[59] = S, t[60] = m, t[61] = ke, t[62] = Ae) : (ke = t[61], Ae = t[62]);
                    let Ne = Ae;B = ge,
                    W = ce(D === `section` ? ce(`border-token-border-default gap-4 border-b pb-8 last:border-b-0`, Oe && `md:grid md:grid-cols-[minmax(0,240px)_minmax(0,1fr)] md:gap-x-[30px]`) : ce(`border-token-border-default rounded-2xl border`, p ? `p-8!` : `p-6`), be),
                    he = m,
                    t[63] !== Oe || t[64] !== j || t[65] !== Ne || t[66] !== De || t[67] !== v || t[68] !== S || t[69] !== P || t[70] !== ke || t[71] !== m ? (G = De ? (0, $.jsxs)(`span`, {
                        className: `flex items-center gap-3`,
                        children: [(0, $.jsx)(Ie, {
                            sectionTitle: ke,
                            expanded: Oe,
                            controlsId: P,
                            disabled: j,
                            onExpandedChange: v
                        }), (0, $.jsx)(`span`, {
                            children: Ne ?? (0, $.jsx)(A, {
                                ...m
                            })
                        })]
                    }) : S ? (0, $.jsx)(`span`, {
                        children: Ne
                    }) : void 0, t[63] = Oe, t[64] = j, t[65] = Ne, t[66] = De, t[67] = v, t[68] = S, t[69] = P, t[70] = ke, t[71] = m, t[72] = G) : G = t[72],
                    _e = D === `section` ? void 0 : p ? `text-base! leading-6! font-medium!` : `text-[18px]! leading-[26px]!`,
                    K = se,
                    ve = De ? `ps-11` : D === `card` && p ? `text-xs! leading-[18px]!` : void 0,
                    xe = De ? P : void 0,
                    Se = De && !Oe,
                    Ce = Oe ? `flex flex-col gap-4` : `hidden`,
                    t[73] === d ? U = t[74] : (U = d && (0, $.jsx)(Dt, {}), t[73] = d, t[74] = U),
                    me = f.map(e => {
                        let t = new Set(e.newReleaseEntries.flatMap(xt)),
                            i = e.hideEarlyAccessBadge ? null : (0, $.jsx)(`span`, {
                                className: `inline-flex h-[18px] shrink-0 items-center justify-center rounded-[6px] bg-[var(--green-a50)] px-[5px] text-xs font-medium text-[light-dark(var(--green-600),var(--green-400))]`,
                                children: (0, $.jsx)(A, {
                                    ...kt.enterpriseBetaFeatureBadge
                                })
                            }),
                            a = e.newReleaseEntries.map((n, i) => {
                                let a = n.rbac ? n.permissionName : n.settingName,
                                    o = n.rbac ? n.additionalPermissionNames ?? [] : [],
                                    l = e.adminPreviewFeature == null ? ne?.(n, t, e.newReleaseEntries[i + 1]) : void 0,
                                    u = l?.title ?? V(n),
                                    d = n.rbac && n.dependsOnPermissionName != null && !(ae ?? s.permissions).includes(n.dependsOnPermissionName),
                                    f = n.rbac && k,
                                    p = Re({
                                        isReadOnly: f,
                                        disabledReason: n.disabledReason
                                    }),
                                    m = O || f || n.disabled || d || e.adminPreviewFeature === `admin_preview_library_sharing` && r.admin_preview_launch_settings?.admin_preview_library_sharing == null,
                                    h = n.rbac && (n.dependsOnPermissionName != null || n.permissionNamesToRemoveWhenDisabled != null || n.enableConfirmation != null),
                                    g = n.rbac ? w?.(n, m, p, u) : null,
                                    _;
                                if (!n.rbac) _ = C?.(n, m) ?? null;
                                else if (g != null) _ = n.permissionName === c.SitesAccess ? (0, $.jsx)(Pe, {
                                    children: g
                                }) : g;
                                else if (n.permissionName === c.SitesAccess) _ = M && ie() ? (0, $.jsx)(Pe, {
                                    children: (0, $.jsx)(Me, {
                                        ariaLabel: u,
                                        role: s,
                                        handleSaveRole: q,
                                        disabled: m,
                                        disabledReason: p
                                    })
                                }) : (0, $.jsx)(Pe, {
                                    children: (0, $.jsx)(je, {
                                        ariaLabel: u,
                                        role: s,
                                        permissionName: n.permissionName,
                                        additionalPermissionNames: n.additionalPermissionNames,
                                        permissionNamesToRemoveWhenDisabled: n.permissionNamesToRemoveWhenDisabled,
                                        enableConfirmation: n.enableConfirmation,
                                        handleSaveRole: q,
                                        disabled: m,
                                        disabledReason: p,
                                        renderDisabledToggleAsOff: n.renderDisabledToggleAsOff
                                    })
                                });
                                else if (!h) _ = (0, $.jsx)(je, {
                                    ariaLabel: u,
                                    role: s,
                                    permissionName: n.permissionName,
                                    handleSaveRole: q,
                                    disabled: m,
                                    disabledReason: p,
                                    renderDisabledToggleAsOff: n.renderDisabledToggleAsOff
                                });
                                else {
                                    let e = [n.permissionName, ...o],
                                        t = (0, $.jsx)(ee, {
                                            size: `normal`,
                                            "aria-label": u,
                                            checked: !(m && n.renderDisabledToggleAsOff) && e.every(e => s.permissions.includes(e)),
                                            onCheckedChange: e => {
                                                if (e && n.enableConfirmation) {
                                                    z(n);
                                                    return
                                                }
                                                pe(n, e)
                                            },
                                            disabled: m
                                        });
                                    _ = m && p ? (0, $.jsx)(x, {
                                        label: N.formatMessage(p),
                                        children: t
                                    }) : t
                                }
                                return _ == null ? null : (0, $.jsx)(`div`, {
                                    className: ce(`flex justify-between gap-4 py-3`, D === `section` && e.adminPreviewFeature != null && `px-4`, l?.className),
                                    children: (0, $.jsxs)(`div`, {
                                        className: `flex w-full items-center justify-between gap-4`,
                                        children: [(0, $.jsxs)(`div`, {
                                            children: [(0, $.jsxs)(`div`, {
                                                className: `text-md flex items-center gap-2`,
                                                children: [l?.label ?? (S ? (0, $.jsx)(`span`, {
                                                    children: S(u)
                                                }) : N.formatMessage({
                                                    id: `workspaceSettings.templateTitle.enterpriseReleaseTitle`,
                                                    defaultMessage: `{name}`
                                                }, {
                                                    name: u
                                                })), e.adminPreviewFeature != null && (0, $.jsx)(L, {
                                                    contentLayout: `multi-line`,
                                                    content: typeof e.description == `string` ? e.description : N.formatMessage(e.description),
                                                    side: `top-center`,
                                                    children: e => (0, $.jsx)(`button`, {
                                                        ...e,
                                                        type: `button`,
                                                        "aria-label": N.formatMessage(kt.featureInfo, {
                                                            feature: u
                                                        }),
                                                        className: `interactive-button interactive-label-tertiary inline-flex items-center rounded-sm`,
                                                        children: (0, $.jsx)(E, {
                                                            className: `icon-sm`,
                                                            "aria-hidden": `true`
                                                        })
                                                    })
                                                })]
                                            }), (0, $.jsx)(Tt, {
                                                entry: n
                                            }), n.rbac && n.permissionName === c.LibrarySharingManagementAccess && (0, $.jsx)(qe, {
                                                controlMode: r.library_sharing_control_mode,
                                                enabled: r.beta_settings.library_sharing_enabled ?? !1
                                            }), e.adminPreviewFeature != null && n.rbac && (0, $.jsxs)(`button`, {
                                                type: `button`,
                                                className: `interactive-button text-token-interactive-label-accent-accessible relative mt-1 text-xs`,
                                                "aria-busy": T === e.adminPreviewFeature,
                                                disabled: O || k || n.disabled || le == null,
                                                onClick: () => le?.(e, n),
                                                children: [(0, $.jsx)(A, {
                                                    ...r.admin_preview_launch_settings?.[e.adminPreviewFeature] == null ? kt.setAccess : kt.editAccess
                                                }), T === e.adminPreviewFeature && (0, $.jsx)(`span`, {
                                                    "aria-hidden": `true`,
                                                    className: `absolute start-full top-1/2 ms-1 -translate-y-1/2`,
                                                    children: (0, $.jsx)(te, {
                                                        className: `icon-sm`
                                                    })
                                                })]
                                            })]
                                        }), (0, $.jsx)(`div`, {
                                            className: `flex items-center justify-between gap-6`,
                                            children: (0, $.jsx)(`div`, {
                                                className: `flex min-w-0 items-center gap-3`,
                                                children: (0, $.jsx)(`div`, {
                                                    className: `shrink-0`,
                                                    children: _
                                                })
                                            })
                                        })]
                                    })
                                }, a)
                            });
                        if (e.adminPreviewFeature != null) return (0, $.jsxs)(`div`, {
                            id: e.anchorId,
                            role: `group`,
                            "aria-label": e.name,
                            className: `w-full py-2`,
                            children: [_ && e.newReleaseEntries.length > 0 && (0, $.jsx)(`p`, {
                                className: `text-token-text-status-warning text-sm`,
                                children: (0, $.jsx)(A, {
                                    ...kt.enterpriseBetaFeatureSectionHipaaDescription
                                })
                            }), a]
                        }, e.adminPreviewFeature);
                        let o = e.description;
                        typeof o != `string` && (o = N.formatMessage(o));
                        let d = e.infoTooltip;
                        return (0, $.jsxs)(`div`, {
                            className: `m-auto flex w-full flex-col`,
                            id: e.anchorId,
                            children: [(0, $.jsxs)(`div`, {
                                className: `flex flex-col gap-2 py-2`,
                                children: [(0, $.jsxs)(`div`, {
                                    children: [(0, $.jsxs)(`div`, {
                                        className: `flex items-center gap-2 text-base font-semibold`,
                                        children: [S ? (0, $.jsx)(`span`, {
                                            children: S(e.name)
                                        }) : N.formatMessage({
                                            id: `workspaceSettings.templateTitle.enterpriseReleaseTitle`,
                                            defaultMessage: `{name}`
                                        }, {
                                            name: e.name
                                        }), i, d && (0, $.jsx)(x, {
                                            interactive: !0,
                                            label: (0, $.jsx)(A, {
                                                ...d.message,
                                                values: {
                                                    link: e => (0, $.jsx)(`a`, {
                                                        href: d.linkHref,
                                                        className: wt,
                                                        children: e
                                                    })
                                                }
                                            }),
                                            side: `top`,
                                            children: (0, $.jsx)(`button`, {
                                                type: `button`,
                                                "aria-label": N.formatMessage(d.ariaLabel),
                                                className: `text-token-text-tertiary hover:text-token-text-secondary focus-visible:outline-token-border-heavy inline-flex size-4 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2`,
                                                children: (0, $.jsx)(E, {
                                                    "aria-hidden": `true`,
                                                    className: `size-3.5`
                                                })
                                            })
                                        })]
                                    }), (0, $.jsx)(`span`, {
                                        className: `text-token-text-secondary text-sm`,
                                        children: e.helpCenterLink ? (0, $.jsx)(A, {
                                            id: `workspaceSettings.templateTitle.enterpriseReleaseDescription`,
                                            defaultMessage: `{name} <learnMore>Learn more</learnMore>`,
                                            values: {
                                                name: S?.(o) ?? o,
                                                learnMore: t => (0, $.jsx)(`a`, {
                                                    href: e.helpCenterLink,
                                                    target: e.helpLinkOpenNewTab === !1 ? void 0 : `_blank`,
                                                    className: wt,
                                                    rel: e.helpLinkOpenNewTab === !1 ? void 0 : `noopener noreferrer`,
                                                    children: e.helpLinkLabel ? N.formatMessage(e.helpLinkLabel) : t
                                                })
                                            }
                                        }) : S?.(o) ?? o
                                    })]
                                }), _ && p && e.newReleaseEntries.length > 0 && (0, $.jsx)(`p`, {
                                    className: `text-token-text-status-warning text-sm`,
                                    children: (0, $.jsx)(A, {
                                        ...kt.enterpriseBetaFeatureSectionHipaaDescription
                                    })
                                }), (0, $.jsx)(`div`, {
                                    role: D === `section` ? `group` : void 0,
                                    "aria-label": D === `section` ? e.name : void 0,
                                    className: ce(`flex flex-col`, D !== `section` && `divide-y divide-token-border-default border-y border-token-border-default`),
                                    children: a
                                })]
                            }), !(e.shouldHideOptOutButton ?? !1) && l && e.newReleaseOptOutFlag && (e.newReleaseOptOutFlag === g.LIBRARY_SHARING_GA_OPT_OUT ? (0, $.jsx)(Je, {
                                betaSettingsDict: r.beta_settings_dict,
                                workspaceId: n,
                                feature: e.newReleaseOptOutFlag,
                                featureName: e.optOutFeatureName ?? e.name,
                                storedValue: r.beta_settings[e.newReleaseOptOutFlag],
                                isRbacEnabled: u,
                                disabled: O,
                                onChange: oe
                            }) : (0, $.jsx)(Be, {
                                workspaceId: n,
                                feature: e.newReleaseOptOutFlag,
                                featureName: e.optOutFeatureName ?? e.name,
                                storedValue: r.beta_settings[e.newReleaseOptOutFlag],
                                isRbacEnabled: u,
                                disabled: O,
                                onChange: oe
                            }))]
                        }, e.name)
                    })
                }
                t[0] = I?.isHipaaCompliantWorkspace, t[1] = r, t[2] = O, t[3] = k, t[4] = ae, t[5] = j, t[6] = ne, t[7] = o, t[8] = N, t[9] = u, t[10] = D, t[11] = T, t[12] = oe, t[13] = v, t[14] = le, t[15] = R?.enableConfirmation, t[16] = i, t[17] = S, t[18] = w, t[19] = C, t[20] = s, t[21] = ue, t[22] = P, t[23] = h, t[24] = l, t[25] = M, t[26] = n, t[27] = B, t[28] = V, t[29] = H, t[30] = pe, t[31] = U, t[32] = me, t[33] = W, t[34] = he, t[35] = G, t[36] = _e, t[37] = K, t[38] = ve, t[39] = ye, t[40] = xe, t[41] = Se, t[42] = Ce
            } else B = t[27], V = t[28], H = t[29], pe = t[30], U = t[31], me = t[32], W = t[33], he = t[34], G = t[35], _e = t[36], K = t[37], ve = t[38], ye = t[39], xe = t[40], Se = t[41], Ce = t[42];
            if (ye !== Symbol.for(`react.early_return_sentinel`)) return ye;
            let we;
            t[75] !== U || t[76] !== me || t[77] !== xe || t[78] !== Se || t[79] !== Ce ? (we = (0, $.jsxs)(`div`, {
                id: xe,
                hidden: Se,
                className: Ce,
                children: [U, me]
            }), t[75] = U, t[76] = me, t[77] = xe, t[78] = Se, t[79] = Ce, t[80] = we) : we = t[80];
            let q;
            t[81] !== V || t[82] !== H || t[83] !== R || t[84] !== pe ? (q = R && H && (0, $.jsx)(b, {
                isOpen: !0,
                onClose: () => z(null),
                title: V(R),
                testId: `modal-enterprise-permission-enable-confirmation`,
                primaryButton: (0, $.jsx)(y.Button, {
                    as: `button`,
                    color: `primary`,
                    loading: !1,
                    onClick: async () => {
                        await pe(R, !0), z(null)
                    },
                    children: (0, $.jsx)(A, {
                        ...kt.enterprisePermissionEnable
                    })
                }),
                secondaryButton: (0, $.jsx)(y.Button, {
                    as: `button`,
                    color: `ghost`,
                    onClick: () => z(null),
                    children: (0, $.jsx)(A, {
                        ...kt.enterprisePermissionEnableCancel
                    })
                }),
                children: (0, $.jsxs)(`div`, {
                    className: `text-token-text-secondary flex flex-col gap-3 text-sm`,
                    children: [(0, $.jsx)(`p`, {
                        children: (0, $.jsx)(A, {
                            ...H.body
                        })
                    }), H.details && (0, $.jsx)(`p`, {
                        children: (0, $.jsx)(A, {
                            ...H.details,
                            values: {
                                learnMoreLink: e => H.learnMoreUrl ? (0, $.jsx)(`a`, {
                                    href: H.learnMoreUrl,
                                    target: `_blank`,
                                    className: wt,
                                    rel: `noopener noreferrer`,
                                    children: e
                                }) : e
                            }
                        })
                    })]
                })
            }), t[81] = V, t[82] = H, t[83] = R, t[84] = pe, t[85] = q) : q = t[85];
            let Ee;
            return t[86] !== B || t[87] !== W || t[88] !== he || t[89] !== G || t[90] !== _e || t[91] !== K || t[92] !== ve || t[93] !== we || t[94] !== q ? (Ee = (0, $.jsxs)(B, {
                className: W,
                title: he,
                titleContent: G,
                titleClassName: _e,
                description: K,
                descriptionClassName: ve,
                children: [we, q]
            }), t[86] = B, t[87] = W, t[88] = he, t[89] = G, t[90] = _e, t[91] = K, t[92] = ve, t[93] = we, t[94] = q, t[95] = Ee) : Ee = t[95], Ee
        }, kt = k({
            featureInfo: {
                id: `chatgpt.workspace.permissions.admin_preview.feature_info`,
                defaultMessage: `About {feature}`
            },
            setAccess: {
                id: `chatgpt.workspace.permissions.admin_preview.set_access`,
                defaultMessage: `Set access`
            },
            editAccess: {
                id: `chatgpt.workspace.permissions.admin_preview.edit_access`,
                defaultMessage: `Edit access`
            },
            enterpriseBetaFeatureEmptySectionDescription: {
                id: `workspaceSettings.enterpriseBetaFeatureEmptySectionDescription`,
                defaultMessage: `New enterprise features are generally available, but we provide a multi-week change-management window before they turn on by default. Currently there are no features in the change-management window.`
            },
            enterpriseBetaFeatureSectionDescription: {
                id: `workspaceSettings.enterpriseBetaFeatureSectionDescriptionRedesign`,
                defaultMessage: `Features are off by default during early access. Admins can turn them on for the workspace or for specific roles via Role-Based Access Controls (RBAC). When early access ends, the features will auto-enable for Workspace / Default unless an admin opts out. Custom roles are unaffected.`
            },
            enterpriseBetaFeatureJuly30SectionDescription: {
                id: `chatgpt.workspace.permissions.july30_redesign.role.early_access.description`,
                defaultMessage: `Early access features are off by default. You can turn them on for everyone or for specific roles. When early access ends, they turn on automatically unless you opt out.`
            },
            enterpriseBetaFeaturePerFeatureReleaseDescription: {
                id: `chatgpt.workspace.permissions.early_access.per_feature_release.description`,
                defaultMessage: `Early access features are off by default. Configure access for your workspace or specific roles, and review each feature’s release policy below.`
            },
            adminPreviewSectionDescription: {
                id: `chatgpt.workspace.permissions.admin_preview.review_description`,
                defaultMessage: `Set access for features in admin preview and after launch. Review the Preview and Launch choices for each feature before saving.`
            },
            enterpriseBetaFeatureJuly30EmptyTitle: {
                id: `chatgpt.workspace.permissions.july30_redesign.role.early_access.empty.title`,
                defaultMessage: `No features in admin preview`
            },
            enterpriseBetaFeatureJuly30EmptyDescription: {
                id: `chatgpt.workspace.permissions.july30_redesign.role.early_access.empty.description`,
                defaultMessage: `There’s nothing to manage right now.`
            },
            enterpriseBetaFeatureSectionHipaaDescription: {
                id: `workspaceSettings.enterpriseBetaFeatureSectionHipaaDescription`,
                defaultMessage: `Early access features have not yet been evaluated for supporting HIPAA compliance and are not included in the included functionality covered by the BAA. These features should not be used with PHI.`
            },
            enterpriseBetaFeatureSection: {
                id: `workspaceSettings.enterpriseBetaDescriptionRedesign`,
                defaultMessage: `Early access`
            },
            adminPreviewSection: {
                id: `chatgpt.workspace.permissions.admin_preview.title`,
                defaultMessage: `Admin preview`
            },
            enterpriseBetaFeatureBadge: {
                id: `workspaceSettings.enterpriseBetaFeatureBadge`,
                defaultMessage: `Early access`
            },
            enterprisePermissionEnable: {
                id: `workspaceSettings.enterprisePermissionEnable`,
                defaultMessage: `Enable`
            },
            enterprisePermissionEnableCancel: {
                id: `workspaceSettings.enterprisePermissionEnableCancel`,
                defaultMessage: `Cancel`
            }
        })
    })),
    jt, Mt, Nt, Pt, Ft, It = e((() => {
        jt = F(), j(), Mt = D(), Nt = `https://learn.chatgpt.com/docs/hipaa-configuration`, Pt = e => {
            "use forget";
            let t = (0, jt.c)(1),
                {
                    show: n
                } = e;
            if (!n) return null;
            let r;
            return t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, Mt.jsx)(`div`, {
                className: `mt-1 text-sm`,
                children: (0, Mt.jsx)(`a`, {
                    className: `text-token-text-status-warning underline`,
                    href: Nt,
                    target: `_blank`,
                    rel: `noopener noreferrer`,
                    children: (0, Mt.jsx)(A, {
                        ...Ft.link
                    })
                })
            }), t[0] = r) : r = t[0], r
        }, Ft = k({
            link: {
                id: `chatgpt.workspace.permissions.codex_and_work_local.section.hipaa_configuration_guide.link`,
                defaultMessage: `Read the HIPAA configuration guide before enabling the features below.`
            }
        })
    }));
export {
    ze as _, At as a, Xe as c, ot as d, qe as f, Re as g, We as h, Et as i, rt as l, Be as m, It as n, gt as o, Ye as p, Ot as r, _t as s, Pt as t, dt as u
};
//# sourceMappingURL=222991e8-f2q1775y40m91uim.js.map
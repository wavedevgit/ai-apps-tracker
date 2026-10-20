import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $1 as n,
    Az as r,
    Fw as i,
    J1 as a,
    J5 as o,
    JT as s,
    L1 as c,
    Nw as l,
    P7 as u,
    R7 as d,
    Sw as ee,
    VU as f,
    Wnt as p,
    X1 as m,
    Xnt as h,
    Xy as te,
    Y5 as g,
    Zst as _,
    Zy as v,
    aB as y,
    cK as b,
    fG as x,
    h2 as S,
    iB as ne,
    ix as C,
    jz as w,
    lK as re,
    m2 as ie,
    qT as ae,
    rx as oe,
    tct as se,
    ww as T,
    y2 as E,
    yG as ce,
    zU as D
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as O,
    In as k,
    Ln as A,
    N as le,
    Nn as j,
    Rn as M,
    Vn as N,
    p as P,
    s as F,
    wn as I,
    zn as ue
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Brt as L,
    NHn as R,
    Njt as z,
    PHn as B,
    Pjt as V,
    zrt as de
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Av as fe,
    By as H,
    Gg as pe,
    Ov as me,
    Vy as U,
    jv as W,
    kv as he,
    qg as G
} from "./30901919-7dzdc1ou0jtwkwpt.js";
import {
    $o as K,
    Go as ge,
    Ho as _e,
    Jb as ve,
    Jo as ye,
    Ko as be,
    Qb as xe,
    Wo as Se,
    Xb as Ce,
    Yo as we,
    Zb as q,
    nb as Te,
    qy as Ee,
    tb as De
} from "./c2675c8c-9bs3zsr3vq259es7.js";
import {
    d as Oe,
    r as ke
} from "./b411f8ca-ofapfme3zu76fq12.js";
import {
    a as Ae,
    i as je
} from "./a99a60c9-mu5w9cyl67em19hh.js";
import {
    d as Me,
    f as Ne,
    l as Pe
} from "./b90db9d2-gg8cij0iwol0uu3s.js";
import {
    n as Fe,
    t as Ie
} from "./e17f5811-jq8tv7erposlp7p1.js";
var Le, Re, ze = e((() => {
    M(), Le = k({
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
            statusDescription: d,
            confirmationDescription: f
        } = e,
        p = s !== void 0 && s,
        m = ue(),
        h = le(),
        [te, g] = (0, Ue.useState)(!1),
        _ = a === !0,
        v = o ? _ ? Y.enterpriseReleaseOptedOutDescription : Y.enterpriseReleaseOptedInDescription : _ ? Y.enterpriseReleaseNonRbacOptedOutDescription : Y.enterpriseReleaseNonRbacOptedInDescription,
        y = o ? Y.enterpriseReleaseOptOutDescription : Y.enterpriseReleaseNonRbacOptOutDescription,
        b;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (b = (e, t) => {
        t && g(!1)
    }, t[0] = b) : b = t[0];
    let x;
    t[1] === h ? x = t[2] : (x = () => h.invalidateQueries({
        queryKey: [`workspace-settings`]
    }), t[1] = h, t[2] = x);
    let S;
    t[3] !== r || t[4] !== n ? (S = e => u.safePost(`/accounts/{account_id}/beta_features`, {
        parameters: {
            path: {
                account_id: n
            }
        },
        requestBody: {
            feature: r,
            value: e
        }
    }), t[3] = r, t[4] = n, t[5] = S) : S = t[5];
    let ne;
    t[6] !== x || t[7] !== S ? (ne = {
        onSuccess: b,
        onSettled: x,
        mutationFn: S
    }, t[6] = x, t[7] = S, t[8] = ne) : ne = t[8];
    let C = P(ne),
        w;
    t[9] === C.isPending ? w = t[10] : (w = () => {
        C.isPending || g(!1)
    }, t[9] = C.isPending, t[10] = w);
    let re = w,
        ie;
    t[11] !== r || t[12] !== C || t[13] !== c ? (ie = e => {
        c ? (c(r, e), g(!1)) : C.mutate(e)
    }, t[11] = r, t[12] = C, t[13] = c, t[14] = ie) : ie = t[14];
    let oe = ie,
        se;
    t[15] !== d || t[16] !== v ? (se = d ?? (0, J.jsx)(j, {
        ...v,
        values: {
            strong: Ve
        }
    }), t[15] = d, t[16] = v, t[17] = se) : se = t[17];
    let T;
    t[18] === se ? T = t[19] : (T = (0, J.jsx)(`span`, {
        className: `min-w-0 text-sm text-token-text-tertiary`,
        children: se
    }), t[18] = se, t[19] = T);
    let E = _ ? `secondary` : `primary`,
        ce = p || C.isPending,
        D;
    t[20] !== m || t[21] !== _ ? (D = m.formatMessage(_ ? Y.enterpriseReleaseOptInButton : Y.enterpriseReleaseOptOutButton), t[20] = m, t[21] = _, t[22] = D) : D = t[22];
    let O;
    t[23] !== oe || t[24] !== _ ? (O = () => {
        _ ? oe(!1) : g(!0)
    }, t[23] = oe, t[24] = _, t[25] = O) : O = t[25];
    let k = _ ? Y.enterpriseReleaseOptInButton : Y.enterpriseReleaseOptOutButton,
        A;
    t[26] === k ? A = t[27] : (A = (0, J.jsx)(j, {
        ...k
    }), t[26] = k, t[27] = A);
    let M;
    t[28] !== E || t[29] !== ce || t[30] !== D || t[31] !== O || t[32] !== A ? (M = (0, J.jsx)(ae, {
        color: E,
        size: `small`,
        disabled: ce,
        loading: !1,
        label: D,
        onClick: O,
        children: A
    }), t[28] = E, t[29] = ce, t[30] = D, t[31] = O, t[32] = A, t[33] = M) : M = t[33];
    let N;
    t[34] !== M || t[35] !== T ? (N = (0, J.jsxs)(`div`, {
        className: `flex items-center justify-between gap-6 py-2`,
        children: [T, M]
    }), t[34] = M, t[35] = T, t[36] = N) : N = t[36];
    let F;
    t[37] === i ? F = t[38] : (F = (0, J.jsx)(j, {
        ...Y.enterpriseReleaseOptOutModalTitle,
        values: {
            name: i
        }
    }), t[37] = i, t[38] = F);
    let I;
    t[39] !== f || t[40] !== i || t[41] !== y ? (I = f ?? (0, J.jsx)(j, {
        ...y,
        values: {
            name: i
        }
    }), t[39] = f, t[40] = i, t[41] = y, t[42] = I) : I = t[42];
    let L;
    t[43] === oe ? L = t[44] : (L = () => oe(!0), t[43] = oe, t[44] = L);
    let R;
    t[45] === Symbol.for(`react.memo_cache_sentinel`) ? (R = (0, J.jsx)(j, {
        ...Y.enterpriseReleaseOptOutConfirm
    }), t[45] = R) : R = t[45];
    let z;
    t[46] !== C.isPending || t[47] !== L ? (z = (0, J.jsx)(l.Button, {
        as: `button`,
        color: `primary`,
        disabled: C.isPending,
        loading: C.isPending,
        onClick: L,
        children: R
    }), t[46] = C.isPending, t[47] = L, t[48] = z) : z = t[48];
    let B;
    t[49] === Symbol.for(`react.memo_cache_sentinel`) ? (B = (0, J.jsx)(j, {
        ...Y.enterpriseReleaseOptOutCancel
    }), t[49] = B) : B = t[49];
    let V;
    t[50] !== re || t[51] !== C.isPending ? (V = (0, J.jsx)(l.Button, {
        as: `button`,
        color: `ghost`,
        disabled: C.isPending,
        onClick: re,
        children: B
    }), t[50] = re, t[51] = C.isPending, t[52] = V) : V = t[52];
    let de;
    t[53] !== re || t[54] !== te || t[55] !== F || t[56] !== I || t[57] !== z || t[58] !== V ? (de = (0, J.jsx)(ee, {
        isOpen: te,
        onClose: re,
        title: F,
        description: I,
        testId: `modal-enterprise-release-opt-out`,
        primaryButton: z,
        secondaryButton: V
    }), t[53] = re, t[54] = te, t[55] = F, t[56] = I, t[57] = z, t[58] = V, t[59] = de) : de = t[59];
    let fe;
    return t[60] !== N || t[61] !== de ? (fe = (0, J.jsxs)(J.Fragment, {
        children: [N, de]
    }), t[60] = N, t[61] = de, t[62] = fe) : fe = t[62], fe
}

function Ve(e) {
    return (0, J.jsx)(`strong`, {
        children: e
    })
}
var He, Ue, J, Y, We = e((() => {
        He = I(), s(), i(), T(), d(), F(), Ue = t(N()), M(), J = O(), Y = A({
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
        Ge = I(), We(), M(), Ke = O(), qe = e => {
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
                children: n ? (0, Ke.jsx)(j, {
                    id: `chatgpt.workspace.permissions.library_sharing.policy.status.enabled`,
                    defaultMessage: `Library sharing is enabled for this workspace.`
                }) : (0, Ke.jsx)(j, {
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
                    children: (0, Ke.jsx)(j, {
                        id: `chatgpt.workspace.permissions.library_sharing.release.description.configured`,
                        defaultMessage: `Your configuration will be preserved after Early Release.`
                    })
                }), t[3] = e) : e = t[3], e
            }
            let i;
            t[4] === r.storedValue ? i = t[5] : (i = r.storedValue === !0 ? (0, Ke.jsx)(j, {
                id: `chatgpt.workspace.permissions.library_sharing.release.description.opted_out`,
                defaultMessage: `Automatic enablement after Early Release is opted out. Current sharing and role settings are unchanged.`
            }) : (0, Ke.jsx)(j, {
                id: `chatgpt.workspace.permissions.library_sharing.release.description.unconfigured`,
                defaultMessage: `You can configure Library sharing and role permissions during Early Release.`
            }), t[4] = r.storedValue, t[5] = i);
            let a;
            t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, Ke.jsx)(j, {
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
    usageLimitDisplay: i = rt,
    searchQuery: a = ``,
    renderHighlightedText: o,
    showSharedUsageLimit: s = !1,
    disabled: c = !1,
    hideBottomBorder: l = !1,
    metadataDraft: u,
    onStageMetadata: d,
    onUnappliedChangesChange: ee
}) {
    "use no forget";
    let m = ue(),
        h = f(),
        te = n(ie),
        g = n(S),
        _ = !te && p(`1261424157`),
        v = _ && s && p(`2634861725`),
        y = !!t,
        {
            data: b,
            isLoading: x,
            isFetching: ne,
            isError: C
        } = Te({
            workspaceId: e,
            roleId: t ?? ``,
            enabled: _ && y
        }),
        {
            data: w,
            isLoading: re
        } = De({
            workspaceId: e,
            roleId: t ?? ``,
            enabled: _ && y
        }),
        {
            upsertRoleMetadata: ae,
            isPending: oe
        } = Oe({
            workspaceId: e,
            roleId: t ?? ``
        }),
        [se, T] = (0, X.useState)(`none`),
        [E, ce] = (0, X.useState)(``),
        [D, O] = (0, X.useState)(!1),
        [k, A] = (0, X.useState)(``),
        [le, M] = (0, X.useState)(`none`),
        [N, P] = (0, X.useState)(``),
        [F, I] = (0, X.useState)(!1),
        [L, z] = (0, X.useState)(null),
        [B, V] = (0, X.useState)(!1),
        [de, fe] = (0, X.useState)(null),
        [pe, me] = (0, X.useState)(null),
        U = (0, X.useMemo)(() => w ? {
            low: w.low_credit_limit,
            medium: w.medium_credit_limit,
            high: w.high_credit_limit
        } : i, [w, i]),
        W = (0, X.useCallback)(e => m.formatMessage(Q.creditsPerWeek, {
            value: e
        }), [m]),
        he = (0, X.useCallback)(e => m.formatMessage(Q.creditsPerCalendarMonth, {
            value: e
        }), [m]),
        G = (0, X.useMemo)(() => ({
            low: W(U.low),
            medium: W(U.medium),
            high: W(U.high)
        }), [W, U.high, U.low, U.medium]),
        K = b != null,
        ge = u ? {
            ...b?.metadata,
            ...u
        } : b?.metadata ?? null,
        _e = ge?.soft_alert_credit_limit ?? null,
        ve = ge?.hard_cap_credit_limit ?? null,
        xe = ge?.hard_cap_shared_credit_limit ?? null,
        Se = _e ?? ve ?? null,
        Ce = xe?.limit ?? null;
    (0, X.useEffect)(() => {
        if (!b) return;
        if (!Se) {
            T(`none`), ce(``), O(!1), A(``);
            return
        }
        let e = _e?.limit ?? null,
            t = ve?.limit ?? null,
            n = t === 0,
            r = t != null,
            i = e ?? t ?? null;
        if (ce(e == null ? t != null && !n ? String(t) : `` : String(e)), O(r), A(r && t != null ? String(t) : ``), !r && i != null && i === U.low) {
            T(`low`);
            return
        }
        if (!r && i != null && i === U.medium) {
            T(`medium`);
            return
        }
        if (!r && i != null && i === U.high) {
            T(`high`);
            return
        }
        T(i == null ? `none` : `custom`)
    }, [b, Se, _e, ve, U.high, U.low, U.medium]);
    let q = {
        low: String(U.low),
        medium: String(U.medium),
        high: String(U.high)
    };
    (0, X.useEffect)(() => {
        if (b) {
            if (Ce == null) {
                M(`none`), P(``), z(null);
                return
            }
            P(String(Ce)), z(null), M(`custom`)
        }
    }, [b, Ce]);
    let Ee = (() => {
            switch (se) {
                case `low`:
                    return q.low;
                case `medium`:
                    return q.medium;
                case `high`:
                    return q.high;
                case `custom`:
                    return E;
                default:
                    return ``
            }
        })().trim(),
        ke = (0, X.useMemo)(() => [{
            key: `none`,
            label: m.formatMessage(Q.enforcementDropdownNoneLabel)
        }, {
            key: `low`,
            label: m.formatMessage(Q.enforcementDropdownLowUsageLabel),
            limitLabel: G.low
        }, {
            key: `medium`,
            label: m.formatMessage(Q.enforcementDropdownMediumUsageLabel),
            limitLabel: G.medium
        }, {
            key: `high`,
            label: m.formatMessage(Q.enforcementDropdownHighLabel),
            limitLabel: G.high
        }, {
            key: `custom`,
            label: m.formatMessage(Q.enforcementDropdownCustomLabel)
        }], [m, G.high, G.low, G.medium]),
        Ae = (0, X.useMemo)(() => ke.filter(e => e.key === `none` || e.key === `custom`), [ke]),
        je = m.formatMessage(Q.enforcementDropdownPlaceholder),
        Me = ke.find(e => e.key === se) ?? null,
        Ne = Me?.label ?? je,
        Pe = Me?.limitLabel,
        Fe = se === `custom` ? D && k.trim() ? W(k.trim()) : E.trim() ? W(E.trim()) : Ne : (Me && Pe ? Pe : Ne) ?? je,
        Ie = !Me || Me.key === `none`,
        Le = _ && y && (x && !b || re && !w),
        Re = oe || pe != null,
        ze = d == null && C && !K,
        Be = c || d != null && g || Re || ne || !K && !ze,
        Ve = c || d != null && g || Re || ne || !K && !ze,
        He = pe === `usage`,
        Ue = pe === `shared`,
        J = async ({
            selectionKey: e,
            alertLimitOverride: n,
            hardCapEnabledOverride: r,
            hardCapLimitOverride: i
        }) => {
            if (!t || c) return;
            let a = ((e === `custom` ? n ?? E : e === `low` || e === `medium` || e === `high` ? q[e] ?? `` : ``) ?? ``).trim(),
                o = a === `` ? NaN : Number(a),
                s = e === `custom` && (r ?? D) ? (i ?? k ?? ``).trim() : ``,
                l = s === `` ? NaN : Number(s),
                u = e === `custom` && s !== ``,
                ee = u && Number.isFinite(l) && l === 0;
            if (e !== `none` && e !== `none` && (e !== `custom` || u && !ee) && (a === `` || !Number.isFinite(o) || o <= 0)) {
                fe(a === `` ? m.formatMessage(Q.alertRequiredForHardCap) : m.formatMessage(Q.invalidLimit));
                return
            }
            if (u && (s === `` || !Number.isFinite(l) || l < 0)) {
                fe(m.formatMessage(Q.invalidLimit));
                return
            }
            fe(null);
            let f = ct({
                selectionKey: e,
                trimmedSelectionAlert: a,
                parsedSelectionAlert: o,
                hasCustomHardCap: u,
                parsedSelectionHardCap: l,
                isHardCapZero: ee
            });
            if (d) {
                if (b == null) throw Error(`Role metadata must load before editing usage limits`);
                d(f, b);
                return
            }
            try {
                me(`usage`), await ae(f), h.success(m.formatMessage(Q.submitSuccess))
            } catch {
                h.danger(m.formatMessage(Q.submitError))
            } finally {
                me(null)
            }
        }, Y = async ({
            selectionKey: e,
            limitOverride: n
        }) => {
            if (!t || c) return;
            let r = (e === `custom` ? n ?? N : ``).trim(),
                i = r === `` ? NaN : Number(r);
            if (e !== `none` && (r === `` || !Number.isFinite(i) || i < 0)) {
                z(m.formatMessage(Q.sharedUsageInvalidLimit));
                return
            }
            z(null);
            let a = lt({
                sharedUsageLimit: e === `none` ? null : i
            });
            if (d) {
                if (b == null) throw Error(`Role metadata must load before editing usage limits`);
                d(a, b);
                return
            }
            try {
                me(`shared`), await ae(a), h.success(m.formatMessage(Q.submitSuccess))
            } catch {
                h.danger(m.formatMessage(Q.submitError))
            } finally {
                me(null)
            }
        }, We = e => {
            if (!Be) {
                if (e.key === `custom`) {
                    V(!0);
                    return
                }
                T(e.key), J({
                    selectionKey: e.key
                })
            }
        }, Ge = e => {
            if (!Ve) {
                if (e.key === `custom`) {
                    I(!0);
                    return
                }
                M(e.key), Y({
                    selectionKey: e.key
                })
            }
        }, Ke = ({
            alertLimit: e,
            hardCapEnabled: t,
            hardCapLimit: n
        }) => {
            ce(e), O(t), A(t ? n : ``), T(`custom`), V(!1), J({
                selectionKey: `custom`,
                alertLimitOverride: e,
                hardCapEnabledOverride: t,
                hardCapLimitOverride: t ? n : ``
            })
        }, qe = e => {
            P(e), M(`custom`), I(!1), Y({
                selectionKey: `custom`,
                limitOverride: e
            })
        }, Je = E === `` ? Ee : E, Ye = D, Xe = k, Qe = Ae.find(e => e.key === le) ?? null, et = Qe?.label ?? je, tt = le === `custom` && N.trim() ? he(N.trim()) : et, it = !Qe || Qe.key === `none`;
    return !_ || !y || !ot({
        searchQuery: a,
        intl: m,
        includeSharedUsageLimit: v
    }) ? null : (0, Z.jsxs)(Z.Fragment, {
        children: [(0, Z.jsx)($e, {
            isOpen: !c && B,
            alertLimit: Je,
            hardCapEnabled: Ye,
            hardCapLimit: Xe,
            onClose: () => V(!1),
            onSave: Ke,
            isStaging: d != null,
            onUnappliedChangesChange: ee
        }), v && (0, Z.jsx)(Ze, {
            isOpen: !c && F,
            limit: N,
            onClose: () => I(!1),
            onSave: qe,
            isStaging: d != null,
            onUnappliedChangesChange: ee
        }), (0, Z.jsx)(be, {
            children: Le ? (0, Z.jsx)(`div`, {
                className: `flex h-24 items-center justify-center`,
                children: (0, Z.jsx)(r, {
                    className: `text-token-text-tertiary h-6 w-6`
                })
            }) : (0, Z.jsxs)(ye, {
                className: l ? `border-b-0` : ``,
                children: [(0, Z.jsx)(we, {
                    children: (0, Z.jsxs)(`div`, {
                        className: `flex w-full items-start justify-between gap-4`,
                        children: [(0, Z.jsxs)(`div`, {
                            className: `flex flex-col gap-1`,
                            children: [(0, Z.jsx)(`div`, {
                                className: `text-md font-semibold`,
                                children: o?.(m.formatMessage(Q.creditLimitLabel)) ?? m.formatMessage(Q.creditLimitLabel)
                            }), (0, Z.jsx)(`div`, {
                                className: `text-token-text-secondary text-sm`,
                                children: o?.(m.formatMessage(Q.creditLimitDescription)) ?? m.formatMessage(Q.creditLimitDescription)
                            })]
                        }), (0, Z.jsxs)(`div`, {
                            className: `flex items-center gap-2`,
                            children: [He && (0, Z.jsx)(r, {
                                className: `text-token-text-tertiary h-4 w-4`
                            }), (0, Z.jsxs)(R.Root, {
                                children: [(0, Z.jsxs)(R.Trigger, {
                                    className: `bg-token-bg-primary text-token-text-primary border-token-border-heavy inline-flex min-w-[130px] items-center gap-2 rounded-md border px-2.5 py-1.5 text-start text-sm`,
                                    disabled: Be,
                                    children: [(0, Z.jsx)(`div`, {
                                        className: `flex min-w-0 flex-1 items-center justify-between gap-2`,
                                        children: (0, Z.jsx)(`span`, {
                                            className: `truncate ${Ie?`text-token-text-tertiary`:``}`,
                                            children: Fe
                                        })
                                    }), (0, Z.jsx)(H, {
                                        className: `text-token-text-tertiary h-3.5 w-3.5 shrink-0`
                                    })]
                                }), (0, Z.jsx)(R.Portal, {
                                    children: (0, Z.jsxs)(R.Content, {
                                        role: `dialog`,
                                        "aria-modal": `false`,
                                        "aria-label": m.formatMessage(Q.creditLimitLabel),
                                        side: `bottom`,
                                        align: `start`,
                                        className: `bg-token-bg-primary text-token-text-primary border-token-border-heavy w-64 rounded-lg border p-4 shadow-lg`,
                                        children: [(0, Z.jsxs)(`div`, {
                                            className: `flex flex-col gap-1`,
                                            children: [(0, Z.jsx)(`div`, {
                                                className: `text-sm`,
                                                children: m.formatMessage(Q.setCreditLimitLabel)
                                            }), (0, Z.jsx)(`div`, {
                                                className: `text-token-text-tertiary text-xs`,
                                                children: (0, Z.jsx)(j, {
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
                                            children: ke.map(e => (0, Z.jsxs)(R.Item, {
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
                }), v && (0, Z.jsx)(we, {
                    children: (0, Z.jsxs)(`div`, {
                        className: `flex w-full items-start justify-between gap-4`,
                        children: [(0, Z.jsxs)(`div`, {
                            className: `flex flex-col gap-1`,
                            children: [(0, Z.jsx)(`div`, {
                                className: `text-md font-semibold`,
                                children: o?.(m.formatMessage(Q.sharedUsageLimitLabel)) ?? m.formatMessage(Q.sharedUsageLimitLabel)
                            }), (0, Z.jsx)(`div`, {
                                className: `text-token-text-secondary text-sm`,
                                children: o?.(m.formatMessage(Q.sharedUsageLimitDescription)) ?? m.formatMessage(Q.sharedUsageLimitDescription)
                            })]
                        }), (0, Z.jsxs)(`div`, {
                            className: `flex flex-col items-end gap-2`,
                            children: [(0, Z.jsxs)(`div`, {
                                className: `flex items-center gap-2`,
                                children: [Ue && (0, Z.jsx)(r, {
                                    className: `text-token-text-tertiary h-4 w-4`
                                }), (0, Z.jsxs)(R.Root, {
                                    children: [(0, Z.jsxs)(R.Trigger, {
                                        className: `bg-token-bg-primary text-token-text-primary border-token-border-heavy inline-flex min-w-[130px] items-center gap-2 rounded-md border px-2.5 py-1.5 text-start text-sm`,
                                        disabled: Ve,
                                        children: [(0, Z.jsx)(`div`, {
                                            className: `flex min-w-0 flex-1 items-center justify-between gap-2`,
                                            children: (0, Z.jsx)(`span`, {
                                                className: `truncate ${it?`text-token-text-tertiary`:``}`,
                                                children: tt
                                            })
                                        }), (0, Z.jsx)(H, {
                                            className: `text-token-text-tertiary h-3.5 w-3.5 shrink-0`
                                        })]
                                    }), (0, Z.jsx)(R.Portal, {
                                        children: (0, Z.jsxs)(R.Content, {
                                            role: `dialog`,
                                            "aria-modal": `false`,
                                            "aria-label": m.formatMessage(Q.sharedUsageLimitLabel),
                                            side: `bottom`,
                                            align: `start`,
                                            className: `bg-token-bg-primary text-token-text-primary border-token-border-heavy w-64 rounded-lg border p-4 shadow-lg`,
                                            children: [(0, Z.jsxs)(`div`, {
                                                className: `flex flex-col gap-1`,
                                                children: [(0, Z.jsx)(`div`, {
                                                    className: `text-sm`,
                                                    children: m.formatMessage(Q.setSharedUsageLimitLabel)
                                                }), (0, Z.jsx)(`div`, {
                                                    className: `text-token-text-tertiary text-xs`,
                                                    children: m.formatMessage(Q.setSharedUsageLimitDescription)
                                                })]
                                            }), (0, Z.jsx)(`hr`, {
                                                className: `border-token-border-heavy my-3`
                                            }), (0, Z.jsx)(`div`, {
                                                className: `mt-3 flex flex-col gap-1`,
                                                children: Ae.map(e => (0, Z.jsx)(R.Item, {
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
                            }), L && (0, Z.jsx)(`div`, {
                                className: `text-interactive-label-warning-secondary text-xs`,
                                children: L
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
        u = ue(),
        [d, ee] = (0, X.useState)(r),
        [f, p] = (0, X.useState)(!1),
        m;
    t[0] !== n || t[1] !== c || t[2] !== r || t[3] !== d ? (m = c && n && d.trim() !== r.trim(), t[0] = n, t[1] = c, t[2] = r, t[3] = d, t[4] = m) : m = t[4];
    let h = m,
        te, g;
    t[5] !== h || t[6] !== s ? (te = () => {
        if (h) return s?.(!0), () => s?.(!1)
    }, g = [h, s], t[5] = h, t[6] = s, t[7] = te, t[8] = g) : (te = t[7], g = t[8]), (0, X.useEffect)(te, g);
    let _, v;
    t[9] !== n || t[10] !== r ? (_ = () => {
        n && (ee(r), p(!1))
    }, v = [n, r], t[9] = n, t[10] = r, t[11] = _, t[12] = v) : (_ = t[11], v = t[12]), (0, X.useEffect)(_, v);
    let y;
    t[13] === f ? y = t[14] : (y = e => {
        let t = e.replace(/\s+/g, ``);
        /^\d*$/.test(t) && (ee(t), f && p(!1))
    }, t[13] = f, t[14] = y);
    let b = y,
        x;
    t[15] === d ? x = t[16] : (x = d.trim(), t[15] = d, t[16] = x);
    let S = x,
        ne = S === `` ? NaN : Number(S),
        C;
    t[17] !== ne || t[18] !== S ? (C = S !== `` && Number.isFinite(ne) && ne >= 0, t[17] = ne, t[18] = S, t[19] = C) : C = t[19];
    let w = C,
        re;
    t[20] !== u || t[21] !== w ? (re = w ? `` : u.formatMessage(Q.sharedUsageInvalidLimit), t[20] = u, t[21] = w, t[22] = re) : re = t[22];
    let ie = re,
        ae = f && !!ie,
        oe = ae ? ie : void 0,
        se = `pe-36${oe?` text-interactive-label-warning-secondary placeholder:text-interactive-label-warning-secondary`:``}`,
        T = oe ? `border-token-border-error focus-within:border-token-border-error focus-within:ring-token-border-error` : void 0,
        E;
    t[23] === u ? E = t[24] : (E = u.formatMessage(Q.sharedUsageLimitCreditsSuffix), t[23] = u, t[24] = E);
    let ce = E,
        D;
    t[25] === i ? D = t[26] : (D = e => {
        e || i()
    }, t[25] = i, t[26] = D);
    let O;
    t[27] === u ? O = t[28] : (O = u.formatMessage(Q.customSharedUsageLimitTitle), t[27] = u, t[28] = O);
    let k;
    t[29] === O ? k = t[30] : (k = (0, Z.jsx)(`div`, {
        className: `text-lg font-semibold`,
        children: O
    }), t[29] = O, t[30] = k);
    let A;
    t[31] === u ? A = t[32] : (A = u.formatMessage(Q.customModalCancelLabel), t[31] = u, t[32] = A);
    let le;
    t[33] === Symbol.for(`react.memo_cache_sentinel`) ? (le = (0, Z.jsx)(fe, {
        className: `h-4 w-4`
    }), t[33] = le) : le = t[33];
    let j;
    t[34] !== i || t[35] !== A ? (j = (0, Z.jsx)(`button`, {
        type: `button`,
        className: `text-token-text-tertiary hover:text-token-text-primary rounded-full p-1`,
        onClick: i,
        "aria-label": A,
        children: le
    }), t[34] = i, t[35] = A, t[36] = j) : j = t[36];
    let M;
    t[37] !== k || t[38] !== j ? (M = (0, Z.jsx)(l.Header, {
        className: `px-6 ps-6 pt-6 pb-0`,
        title: k,
        closeButton: j
    }), t[37] = k, t[38] = j, t[39] = M) : M = t[39];
    let N;
    t[40] === u ? N = t[41] : (N = u.formatMessage(Q.customSharedUsageLimitDescription), t[40] = u, t[41] = N);
    let P;
    t[42] === N ? P = t[43] : (P = (0, Z.jsx)(`p`, {
        className: `text-token-text-tertiary text-xs leading-relaxed`,
        children: N
    }), t[42] = N, t[43] = P);
    let F;
    t[44] === u ? F = t[45] : (F = u.formatMessage(Q.customSharedUsageLimitAriaLabel), t[44] = u, t[45] = F);
    let I;
    t[46] === b ? I = t[47] : (I = e => b(e.target.value), t[46] = b, t[47] = I);
    let L;
    t[48] === ce ? L = t[49] : (L = (0, Z.jsx)(`span`, {
        className: `text-token-text-primary pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 text-xs`,
        children: ce
    }), t[48] = ce, t[49] = L);
    let R;
    t[50] !== T || t[51] !== se || t[52] !== oe || t[53] !== F || t[54] !== I || t[55] !== L || t[56] !== d ? (R = (0, Z.jsx)(de, {
        name: `custom-shared-usage-limit`,
        ariaLabel: F,
        inputMode: `numeric`,
        value: d,
        onChange: I,
        className: T,
        insideContainerChildren: L,
        inputClassName: se,
        showErrorIcon: !1,
        showInlineErrorMessage: !1,
        error: oe
    }), t[50] = T, t[51] = se, t[52] = oe, t[53] = F, t[54] = I, t[55] = L, t[56] = d, t[57] = R) : R = t[57];
    let z;
    t[58] !== P || t[59] !== R ? (z = (0, Z.jsxs)(`div`, {
        className: `flex flex-col gap-3 px-6 text-sm`,
        children: [P, R]
    }), t[58] = P, t[59] = R, t[60] = z) : z = t[60];
    let B;
    t[61] !== ie || t[62] !== ae ? (B = ae && (0, Z.jsxs)(`div`, {
        className: `text-interactive-label-warning-secondary mb-3 flex items-center gap-2 text-xs`,
        children: [(0, Z.jsx)(me, {
            className: `h-4 w-4`,
            "aria-hidden": `true`
        }), (0, Z.jsx)(`span`, {
            children: ie
        })]
    }), t[61] = ie, t[62] = ae, t[63] = B) : B = t[63];
    let V;
    t[64] !== u || t[65] !== c ? (V = u.formatMessage(c ? Q.customModalApplyLabel : Q.customModalSaveLabel), t[64] = u, t[65] = c, t[66] = V) : V = t[66];
    let H = !w,
        pe = !w,
        U;
    t[67] !== w || t[68] !== a || t[69] !== S ? (U = () => {
        p(!0), w && a(S)
    }, t[67] = w, t[68] = a, t[69] = S, t[70] = U) : U = t[70];
    let W;
    t[71] !== V || t[72] !== H || t[73] !== pe || t[74] !== U ? (W = (0, Z.jsx)(l.Button, {
        color: `primary`,
        title: V,
        visuallyDisabled: H,
        "aria-disabled": pe,
        onClick: U
    }), t[71] = V, t[72] = H, t[73] = pe, t[74] = U, t[75] = W) : W = t[75];
    let he;
    t[76] === u ? he = t[77] : (he = u.formatMessage(Q.customModalCancelLabel), t[76] = u, t[77] = he);
    let G;
    t[78] !== i || t[79] !== he ? (G = (0, Z.jsx)(l.Button, {
        title: he,
        onClick: i
    }), t[78] = i, t[79] = he, t[80] = G) : G = t[80];
    let K;
    t[81] !== W || t[82] !== G ? (K = (0, Z.jsx)(l.Actions, {
        primaryButton: W,
        secondaryButton: G
    }), t[81] = W, t[82] = G, t[83] = K) : K = t[83];
    let ge;
    t[84] !== B || t[85] !== K ? (ge = (0, Z.jsxs)(`div`, {
        className: `px-6 pb-4`,
        children: [B, K]
    }), t[84] = B, t[85] = K, t[86] = ge) : ge = t[86];
    let _e;
    t[87] !== M || t[88] !== z || t[89] !== ge ? (_e = (0, Z.jsx)(l.Overlay, {
        children: (0, Z.jsx)(l.Content, {
            position: `center`,
            className: `start-auto col-start-1 row-start-1 w-full max-w-sm ltr:translate-x-0 rtl:translate-x-0`,
            containerClassName: `grid grid-cols-1 grid-rows-1 place-items-center`,
            children: (0, Z.jsxs)(`div`, {
                className: `flex flex-col gap-4`,
                children: [M, z, ge]
            })
        })
    }), t[87] = M, t[88] = z, t[89] = ge, t[90] = _e) : _e = t[90];
    let ve;
    return t[91] !== n || t[92] !== D || t[93] !== _e ? (ve = (0, Z.jsx)(l.Root, {
        isOpen: n,
        onClose: D,
        testId: `modal-custom-shared-usage-limit`,
        children: _e
    }), t[91] = n, t[92] = D, t[93] = _e, t[94] = ve) : ve = t[94], ve
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
        te = ``;
    return n && (s ? m ? te = r.formatMessage(Q.customModalHardCapConflictError) : d && !o ? te = r.formatMessage(Q.alertRequiredForHardCap) : (!f || !p) && (te = r.formatMessage(Q.invalidLimit)) : te = r.formatMessage(Q.customModalHardCapRequired)), {
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
        hardCapErrorMessage: te
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
            onClose: s,
            onSave: c,
            isStaging: u,
            onUnappliedChangesChange: d
        } = e,
        ee = u !== void 0 && u,
        f = ue(),
        [p, m] = (0, X.useState)(r),
        [h, te] = (0, X.useState)(i),
        [g, _] = (0, X.useState)(a),
        [v, y] = (0, X.useState)(!1),
        b;
    t[0] !== r || t[1] !== p || t[2] !== i || t[3] !== a || t[4] !== g || t[5] !== h || t[6] !== n || t[7] !== ee ? (b = ee && n && (p.trim() !== r.trim() || h !== i || h && g.trim() !== a.trim()), t[0] = r, t[1] = p, t[2] = i, t[3] = a, t[4] = g, t[5] = h, t[6] = n, t[7] = ee, t[8] = b) : b = t[8];
    let x = b,
        S, ne;
    t[9] !== x || t[10] !== d ? (S = () => {
        if (x) return d?.(!0), () => d?.(!1)
    }, ne = [x, d], t[9] = x, t[10] = d, t[11] = S, t[12] = ne) : (S = t[11], ne = t[12]), (0, X.useEffect)(S, ne);
    let C, w;
    t[13] !== r || t[14] !== i || t[15] !== a || t[16] !== n ? (C = () => {
        n && (m(r), te(i), _(a), y(!1))
    }, w = [r, i, a, n], t[13] = r, t[14] = i, t[15] = a, t[16] = n, t[17] = C, t[18] = w) : (C = t[17], w = t[18]), (0, X.useEffect)(C, w);
    let re, ie;
    t[19] === h ? (re = t[20], ie = t[21]) : (re = () => {
        h || y(!1)
    }, ie = [h], t[19] = h, t[20] = re, t[21] = ie), (0, X.useEffect)(re, ie);
    let ae, se;
    t[22] !== p || t[23] !== g || t[24] !== h ? (se = () => {
        h && g.trim() === `0` && p !== `` && m(``)
    }, ae = [p, g, h], t[22] = p, t[23] = g, t[24] = h, t[25] = ae, t[26] = se) : (ae = t[25], se = t[26]), (0, X.useEffect)(se, ae);
    let T;
    t[27] === v ? T = t[28] : (T = () => {
        v && y(!1)
    }, t[27] = v, t[28] = T);
    let E = T,
        ce, D;
    if (t[29] !== E) {
        ce = t => {
            e(m, t), E()
        }, D = t => {
            e(_, t), E()
        };
        let e = et;
        t[29] = E, t[30] = ce, t[31] = D
    } else ce = t[30], D = t[31];
    let O, k, A, le, j, M, N, P, F, I, L, R, z, B, V, H, pe, U, W, he, G, K, ge, _e;
    if (t[32] !== p || t[33] !== g || t[34] !== v || t[35] !== f || t[36] !== h || t[37] !== n || t[38] !== s) {
        let {
            alertTrimmed: e,
            hardCapTrimmed: r,
            hasAlertValue: i,
            hasHardCapValue: a,
            isHardCapZero: c,
            isAlertValid: u,
            isHardCapValid: d,
            hasHardCapConflict: ee,
            alertErrorMessage: m,
            hardCapErrorMessage: te
        } = Qe({
            alertValue: p,
            hardCapValue: g,
            isHardCapEnabled: h,
            intl: f
        });
        j = e, F = r, L = c, I = L, R = !i && !a || !u || !d || ee;
        let _ = v && (!!m || !!te);
        z = _ ? te || m : ``, le = _ && m ? m : void 0, P = _ && te ? te : void 0, M = P ? `border-token-border-error focus-within:border-token-border-error focus-within:ring-token-border-error` : void 0, N = `pe-24${P?` text-interactive-label-warning-secondary placeholder:text-interactive-label-warning-secondary`:``}`;
        let y;
        t[63] === f ? y = t[64] : (y = f.formatMessage(Q.customModalCreditsSuffix), t[63] = f, t[64] = y), B = y, A = l.Root, K = n, t[65] === s ? ge = t[66] : (ge = e => {
            e || s()
        }, t[65] = s, t[66] = ge), _e = `modal-custom-usage-limit`, k = l.Overlay, O = l.Content, W = `center`, he = `start-auto col-start-1 row-start-1 w-full max-w-sm ltr:translate-x-0 rtl:translate-x-0`, G = `grid grid-cols-1 grid-rows-1 place-items-center`, pe = `flex flex-col gap-4`;
        let b;
        t[67] === f ? b = t[68] : (b = f.formatMessage(Q.customModalTitle), t[67] = f, t[68] = b);
        let x;
        t[69] === b ? x = t[70] : (x = (0, Z.jsx)(`div`, {
            className: `text-lg font-semibold`,
            children: b
        }), t[69] = b, t[70] = x);
        let S;
        t[71] === f ? S = t[72] : (S = f.formatMessage(Q.customModalCancelLabel), t[71] = f, t[72] = S);
        let ne;
        t[73] === Symbol.for(`react.memo_cache_sentinel`) ? (ne = (0, Z.jsx)(fe, {
            className: `h-4 w-4`
        }), t[73] = ne) : ne = t[73];
        let C;
        t[74] !== s || t[75] !== S ? (C = (0, Z.jsx)(`button`, {
            type: `button`,
            className: `text-token-text-tertiary hover:text-token-text-primary rounded-full p-1`,
            onClick: s,
            "aria-label": S,
            children: ne
        }), t[74] = s, t[75] = S, t[76] = C) : C = t[76], t[77] !== x || t[78] !== C ? (U = (0, Z.jsx)(l.Header, {
            className: `px-6 ps-6 pt-6 pb-0`,
            title: x,
            closeButton: C
        }), t[77] = x, t[78] = C, t[79] = U) : U = t[79], H = `flex flex-col gap-6 px-6 text-sm`, V = o(`flex flex-col gap-3`, I && `opacity-50`), t[32] = p, t[33] = g, t[34] = v, t[35] = f, t[36] = h, t[37] = n, t[38] = s, t[39] = O, t[40] = k, t[41] = A, t[42] = le, t[43] = j, t[44] = M, t[45] = N, t[46] = P, t[47] = F, t[48] = I, t[49] = L, t[50] = R, t[51] = z, t[52] = B, t[53] = V, t[54] = H, t[55] = pe, t[56] = U, t[57] = W, t[58] = he, t[59] = G, t[60] = K, t[61] = ge, t[62] = _e
    } else O = t[39], k = t[40], A = t[41], le = t[42], j = t[43], M = t[44], N = t[45], P = t[46], F = t[47], I = t[48], L = t[49], R = t[50], z = t[51], B = t[52], V = t[53], H = t[54], pe = t[55], U = t[56], W = t[57], he = t[58], G = t[59], K = t[60], ge = t[61], _e = t[62];
    let ve;
    t[80] === f ? ve = t[81] : (ve = f.formatMessage(Q.customModalSetAlertLabel), t[80] = f, t[81] = ve);
    let ye;
    t[82] === ve ? ye = t[83] : (ye = (0, Z.jsx)(`div`, {
        className: `text-token-text-primary font-medium`,
        children: ve
    }), t[82] = ve, t[83] = ye);
    let be;
    t[84] === f ? be = t[85] : (be = f.formatMessage(Q.customModalSetAlertDescription), t[84] = f, t[85] = be);
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
    t[91] === f ? Ce = t[92] : (Ce = f.formatMessage(Q.customModalSetAlertLabel), t[91] = f, t[92] = Ce);
    let we;
    t[93] === ce ? we = t[94] : (we = e => ce(e.target.value), t[93] = ce, t[94] = we);
    let q;
    t[95] === B ? q = t[96] : (q = (0, Z.jsx)(`span`, {
        className: `text-token-text-primary pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 text-xs`,
        children: B
    }), t[95] = B, t[96] = q);
    let Te;
    t[97] !== le || t[98] !== p || t[99] !== I || t[100] !== Ce || t[101] !== we || t[102] !== q ? (Te = (0, Z.jsx)(de, {
        name: `custom-alert-limit`,
        ariaLabel: Ce,
        inputMode: `numeric`,
        value: p,
        onChange: we,
        disabled: I,
        insideContainerChildren: q,
        inputClassName: `pe-24`,
        showErrorIcon: !1,
        showInlineErrorMessage: !1,
        error: le
    }), t[97] = le, t[98] = p, t[99] = I, t[100] = Ce, t[101] = we, t[102] = q, t[103] = Te) : Te = t[103];
    let Ee;
    t[104] !== f || t[105] !== I ? (Ee = I && (0, Z.jsx)(`div`, {
        className: `text-token-text-warning text-xs`,
        children: f.formatMessage(Q.customModalAlertDisabledNote)
    }), t[104] = f, t[105] = I, t[106] = Ee) : Ee = t[106];
    let De;
    t[107] !== V || t[108] !== Se || t[109] !== Te || t[110] !== Ee ? (De = (0, Z.jsxs)(`div`, {
        className: V,
        children: [Se, Te, Ee]
    }), t[107] = V, t[108] = Se, t[109] = Te, t[110] = Ee, t[111] = De) : De = t[111];
    let Oe;
    t[112] === f ? Oe = t[113] : (Oe = f.formatMessage(Q.customModalSetHardCapLabel), t[112] = f, t[113] = Oe);
    let ke;
    t[114] === Oe ? ke = t[115] : (ke = (0, Z.jsx)(`div`, {
        className: `flex items-center gap-1.5`,
        children: (0, Z.jsx)(`div`, {
            className: `text-token-text-primary font-medium`,
            children: Oe
        })
    }), t[114] = Oe, t[115] = ke);
    let Ae;
    t[116] === f ? Ae = t[117] : (Ae = f.formatMessage(Q.customModalToggleAriaLabel), t[116] = f, t[117] = Ae);
    let je;
    t[118] === E ? je = t[119] : (je = e => {
        te(!!e), E()
    }, t[118] = E, t[119] = je);
    let Me;
    t[120] !== h || t[121] !== Ae || t[122] !== je ? (Me = (0, Z.jsx)(oe, {
        "aria-label": Ae,
        checked: h,
        onCheckedChange: je
    }), t[120] = h, t[121] = Ae, t[122] = je, t[123] = Me) : Me = t[123];
    let Ne;
    t[124] !== ke || t[125] !== Me ? (Ne = (0, Z.jsxs)(`div`, {
        className: `flex items-center justify-between gap-2`,
        children: [ke, Me]
    }), t[124] = ke, t[125] = Me, t[126] = Ne) : Ne = t[126];
    let Pe;
    t[127] === f ? Pe = t[128] : (Pe = f.formatMessage(Q.customModalSetHardCapDescription), t[127] = f, t[128] = Pe);
    let Fe;
    t[129] === Pe ? Fe = t[130] : (Fe = (0, Z.jsx)(`p`, {
        className: `text-token-text-tertiary text-xs leading-relaxed`,
        children: Pe
    }), t[129] = Pe, t[130] = Fe);
    let Ie;
    t[131] !== D || t[132] !== M || t[133] !== N || t[134] !== P || t[135] !== g || t[136] !== f || t[137] !== h || t[138] !== B ? (Ie = h && (0, Z.jsx)(Z.Fragment, {
        children: (0, Z.jsx)(de, {
            name: `custom-hard-cap-limit`,
            ariaLabel: f.formatMessage(Q.customModalSetHardCapLabel),
            inputMode: `numeric`,
            value: g,
            onChange: e => D(e.target.value),
            className: M,
            insideContainerChildren: (0, Z.jsx)(`span`, {
                className: `text-token-text-primary pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 text-xs`,
                children: B
            }),
            inputClassName: N,
            showErrorIcon: !1,
            showInlineErrorMessage: !1,
            error: P
        })
    }), t[131] = D, t[132] = M, t[133] = N, t[134] = P, t[135] = g, t[136] = f, t[137] = h, t[138] = B, t[139] = Ie) : Ie = t[139];
    let Le;
    t[140] !== Ne || t[141] !== Fe || t[142] !== Ie ? (Le = (0, Z.jsxs)(`div`, {
        className: `flex flex-col gap-3`,
        children: [Ne, Fe, Ie]
    }), t[140] = Ne, t[141] = Fe, t[142] = Ie, t[143] = Le) : Le = t[143];
    let Re;
    t[144] !== H || t[145] !== De || t[146] !== Le ? (Re = (0, Z.jsxs)(`div`, {
        className: H,
        children: [De, Le]
    }), t[144] = H, t[145] = De, t[146] = Le, t[147] = Re) : Re = t[147];
    let ze;
    t[148] === z ? ze = t[149] : (ze = z && (0, Z.jsxs)(`div`, {
        className: `text-interactive-label-warning-secondary mb-3 flex items-center gap-2 text-xs`,
        children: [(0, Z.jsx)(me, {
            className: `h-4 w-4`,
            "aria-hidden": `true`
        }), (0, Z.jsx)(`span`, {
            children: z
        })]
    }), t[148] = z, t[149] = ze);
    let Be;
    t[150] !== f || t[151] !== ee ? (Be = f.formatMessage(ee ? Q.customModalApplyLabel : Q.customModalSaveLabel), t[150] = f, t[151] = ee, t[152] = Be) : Be = t[152];
    let Ve;
    t[153] !== j || t[154] !== F || t[155] !== h || t[156] !== L || t[157] !== R || t[158] !== c ? (Ve = () => {
        y(!0), !R && c({
            alertLimit: L ? `` : j,
            hardCapEnabled: h,
            hardCapLimit: h ? F : ``
        })
    }, t[153] = j, t[154] = F, t[155] = h, t[156] = L, t[157] = R, t[158] = c, t[159] = Ve) : Ve = t[159];
    let He;
    t[160] !== R || t[161] !== Be || t[162] !== Ve ? (He = (0, Z.jsx)(l.Button, {
        color: `primary`,
        title: Be,
        visuallyDisabled: R,
        "aria-disabled": R,
        onClick: Ve
    }), t[160] = R, t[161] = Be, t[162] = Ve, t[163] = He) : He = t[163];
    let Ue;
    t[164] === f ? Ue = t[165] : (Ue = f.formatMessage(Q.customModalCancelLabel), t[164] = f, t[165] = Ue);
    let J;
    t[166] !== s || t[167] !== Ue ? (J = (0, Z.jsx)(l.Button, {
        title: Ue,
        onClick: s
    }), t[166] = s, t[167] = Ue, t[168] = J) : J = t[168];
    let Y;
    t[169] !== He || t[170] !== J ? (Y = (0, Z.jsx)(l.Actions, {
        primaryButton: He,
        secondaryButton: J
    }), t[169] = He, t[170] = J, t[171] = Y) : Y = t[171];
    let We;
    t[172] !== ze || t[173] !== Y ? (We = (0, Z.jsxs)(`div`, {
        className: `px-6 pb-4`,
        children: [ze, Y]
    }), t[172] = ze, t[173] = Y, t[174] = We) : We = t[174];
    let Ge;
    t[175] !== pe || t[176] !== U || t[177] !== Re || t[178] !== We ? (Ge = (0, Z.jsxs)(`div`, {
        className: pe,
        children: [U, Re, We]
    }), t[175] = pe, t[176] = U, t[177] = Re, t[178] = We, t[179] = Ge) : Ge = t[179];
    let Ke;
    t[180] !== O || t[181] !== W || t[182] !== he || t[183] !== G || t[184] !== Ge ? (Ke = (0, Z.jsx)(O, {
        position: W,
        className: he,
        containerClassName: G,
        children: Ge
    }), t[180] = O, t[181] = W, t[182] = he, t[183] = G, t[184] = Ge, t[185] = Ke) : Ke = t[185];
    let qe;
    t[186] !== k || t[187] !== Ke ? (qe = (0, Z.jsx)(k, {
        children: Ke
    }), t[186] = k, t[187] = Ke, t[188] = qe) : qe = t[188];
    let Je;
    return t[189] !== A || t[190] !== K || t[191] !== ge || t[192] !== _e || t[193] !== qe ? (Je = (0, Z.jsx)(A, {
        isOpen: K,
        onClose: ge,
        testId: _e,
        children: qe
    }), t[189] = A, t[190] = K, t[191] = ge, t[192] = _e, t[193] = qe, t[194] = Je) : Je = t[194], Je
}

function et(e, t) {
    let n = t.replace(/\s+/g, ``);
    /^\d*$/.test(n) && e(n)
}
var tt, X, Z, nt, rt, Q, it, at, ot, st, ct, lt, ut, dt = e((() => {
        tt = I(), ke(), Ee(), K(), B(), U(), W(), he(), i(), C(), L(), w(), c(), E(), D(), h(), g(), X = t(N()), M(), Z = O(), nt = `text-token-link hover:text-token-link-hover underline`, rt = {
            low: 300,
            medium: 400,
            high: 550
        }, Q = A({
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
        xe(), ft = e => e.trim().toLowerCase(), pt = (e, t, n) => e == null ? `` : typeof e == `string` ? e : String(t.formatMessage(e, n)), mt = (e, ...t) => !e || t.join(` `).toLowerCase().includes(e), ht = ({
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
            let o = ve(t.flatMap(e => e.newReleaseEntries)),
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
                newReleaseEntries: e.newReleaseEntries.filter(e => q({
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
    return e.newReleaseOptOutFlag === _.LIBRARY_SHARING_GA_OPT_OUT
}

function xt(e) {
    return e.rbac ? [e.permissionName] : []
}
var St, Ct, $, wt, Tt, Et, Dt, Ot, kt, At = e((() => {
        St = I(), se(), ze(), re(), Fe(), Ae(), Ne(), x(), xe(), Se(), We(), Ye(), i(), G(), y(), V(), T(), C(), v(), w(), c(), g(), Ct = t(N()), M(), _t(), $ = O(), wt = `text-token-link hover:text-token-link-hover underline`, Tt = e => {
            "use forget";
            let t = (0, St.c)(9),
                {
                    entry: n
                } = e;
            if (!n.description && !n.additionalDescription) return null;
            let r;
            t[0] !== n.description || t[1] !== n.descriptionValues ? (r = n.description && (0, $.jsx)(`div`, {
                children: (0, $.jsx)(j, {
                    ...n.description,
                    values: n.descriptionValues
                })
            }), t[0] = n.description, t[1] = n.descriptionValues, t[2] = r) : r = t[2];
            let i;
            t[3] !== n.additionalDescription || t[4] !== n.additionalDescriptionValues ? (i = n.additionalDescription && (0, $.jsx)(`div`, {
                children: (0, $.jsx)(j, {
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
            e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, $.jsx)(pe, {
                "aria-hidden": `true`,
                className: `icon text-token-interactive-icon-tertiary-default`
            }), e[0] = t) : t = e[0];
            let n;
            e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, $.jsx)(`p`, {
                className: `text-token-text-primary text-sm font-semibold`,
                children: (0, $.jsx)(j, {
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
                        children: (0, $.jsx)(j, {
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
                    data: i,
                    preReleases: s,
                    handleSaveRole: c,
                    role: u,
                    showOptOutControls: d,
                    isRbacEnabled: f,
                    layout: p,
                    disableAllToggles: h,
                    disableRolePermissionWrites: g,
                    searchQuery: v,
                    sectionExpanded: y,
                    forceSectionExpanded: x,
                    onSectionExpandedChange: S,
                    renderHighlightedText: C,
                    renderSettingEntryControl: w,
                    getEntryPresentation: re,
                    renderRbacEntryControl: ie,
                    useSitesPermissionSelect: ae,
                    effectiveRolePermissions: se,
                    onOptOutChange: T,
                    loadingAdminPreviewFeature: E,
                    onSetAdminPreviewAccess: D
                } = e,
                O = p === void 0 ? `card` : p,
                k = h !== void 0 && h,
                A = g !== void 0 && g,
                le = v === void 0 ? `` : v,
                M = x !== void 0 && x,
                N = ae === void 0 || ae,
                P = ue(),
                F = (0, Ct.useId)(),
                I = a(n),
                L = m(),
                R = I ?? L,
                [B, V] = (0, Ct.useState)(null),
                de, fe, H, pe, me, U, W, he, G, K, ve, ye, be, xe, Se, we;
            if (t[0] !== R?.isHipaaCompliantWorkspace || t[1] !== i || t[2] !== k || t[3] !== A || t[4] !== se || t[5] !== M || t[6] !== re || t[7] !== c || t[8] !== P || t[9] !== f || t[10] !== O || t[11] !== E || t[12] !== T || t[13] !== S || t[14] !== D || t[15] !== B?.enableConfirmation || t[16] !== s || t[17] !== C || t[18] !== ie || t[19] !== w || t[20] !== u || t[21] !== le || t[22] !== F || t[23] !== y || t[24] !== d || t[25] !== N || t[26] !== n) {
                be = Symbol.for(`react.early_return_sentinel`);
                bb0: {
                    let e = gt({
                            intl: P,
                            preReleases: s,
                            searchQuery: le,
                            getEntryPresentation: re,
                            layout: O,
                            effectiveRolePermissions: se,
                            rolePermissions: u.permissions
                        }),
                        a = e.some(vt);
                    if (ft(le) && (O === `section` ? !a : e.length === 0)) {
                        be = null;
                        break bb0
                    }
                    let l = O === `section` && !a,
                        ee = l ? [] : e,
                        p = l || ee.some(yt),
                        m = p ? kt.adminPreviewSection : kt.enterpriseBetaFeatureSection,
                        h = R?.isHipaaCompliantWorkspace ?? !1,
                        g = p ? kt.adminPreviewSectionDescription : ee.some(bt) ? kt.enterpriseBetaFeaturePerFeatureReleaseDescription : O === `section` ? kt.enterpriseBetaFeatureJuly30SectionDescription : kt.enterpriseBetaFeatureSectionDescription,
                        v;t[43] !== g || t[44] !== P || t[45] !== C ? (v = C?.(P.formatMessage(g)), t[43] = g, t[44] = P, t[45] = C, t[46] = v) : v = t[46];
                    let x = v,
                        ae = O !== `section` && e.length === 0 ? kt.enterpriseBetaFeatureEmptySectionDescription : h && a && !p ? (0, $.jsxs)(`div`, {
                            className: `flex flex-col gap-2`,
                            children: [(0, $.jsx)(`p`, {
                                children: x ?? (0, $.jsx)(j, {
                                    ...g
                                })
                            }), (0, $.jsx)(`p`, {
                                className: `text-token-text-status-warning`,
                                children: (0, $.jsx)(j, {
                                    ...kt.enterpriseBetaFeatureSectionHipaaDescription
                                })
                            })]
                        }) : x ?? g,
                        I;t[47] === P ? I = t[48] : (I = e => typeof e.title == `string` ? e.title : P.formatMessage(e.title), t[47] = P, t[48] = I),
                    fe = I;
                    let ue;t[49] === u.permissions ? ue = t[50] : (ue = (e, t) => {
                        let n = e.additionalPermissionNames ?? [];
                        return Ce({
                            add: t,
                            currentPermissionNames: u.permissions,
                            permissionName: e.permissionName,
                            additionalPermissionNames: t ? n : [...n, ...e.permissionNamesToRemoveWhenDisabled ?? []]
                        })
                    }, t[49] = u.permissions, t[50] = ue);
                    let L = ue,
                        q;t[51] !== A || t[52] !== c ? (q = e => A ? Promise.resolve() : c(e), t[51] = A, t[52] = c, t[53] = q) : q = t[53];
                    let Te = q,
                        Ee;t[54] !== L || t[55] !== u || t[56] !== Te ? (Ee = (e, t) => Te({
                        ...u,
                        permissions: L(e, t)
                    }), t[54] = L, t[55] = u, t[56] = Te, t[57] = Ee) : Ee = t[57],
                    pe = Ee,
                    H = B?.enableConfirmation;
                    let De = O === `section` && y != null && S != null,
                        Oe = !De || M || y,
                        ke, Ae;t[58] !== P || t[59] !== C || t[60] !== m ? (ke = P.formatMessage(m), Ae = C?.(ke), t[58] = P, t[59] = C, t[60] = m, t[61] = ke, t[62] = Ae) : (ke = t[61], Ae = t[62]);
                    let Ne = Ae;de = _e,
                    W = o(O === `section` ? o(`border-token-border-default gap-4 border-b pb-8 last:border-b-0`, Oe && `md:grid md:grid-cols-[minmax(0,240px)_minmax(0,1fr)] md:gap-x-[30px]`) : o(`border-token-border-default rounded-2xl border`, p ? `p-8!` : `p-6`), ge),
                    he = m,
                    t[63] !== Oe || t[64] !== M || t[65] !== Ne || t[66] !== De || t[67] !== S || t[68] !== C || t[69] !== F || t[70] !== ke || t[71] !== m ? (G = De ? (0, $.jsxs)(`span`, {
                        className: `flex items-center gap-3`,
                        children: [(0, $.jsx)(Ie, {
                            sectionTitle: ke,
                            expanded: Oe,
                            controlsId: F,
                            disabled: M,
                            onExpandedChange: S
                        }), (0, $.jsx)(`span`, {
                            children: Ne ?? (0, $.jsx)(j, {
                                ...m
                            })
                        })]
                    }) : C ? (0, $.jsx)(`span`, {
                        children: Ne
                    }) : void 0, t[63] = Oe, t[64] = M, t[65] = Ne, t[66] = De, t[67] = S, t[68] = C, t[69] = F, t[70] = ke, t[71] = m, t[72] = G) : G = t[72],
                    K = O === `section` ? void 0 : p ? `text-base! leading-6! font-medium!` : `text-[18px]! leading-[26px]!`,
                    ve = ae,
                    ye = De ? `ps-11` : O === `card` && p ? `text-xs! leading-[18px]!` : void 0,
                    xe = De ? F : void 0,
                    Se = De && !Oe,
                    we = Oe ? `flex flex-col gap-4` : `hidden`,
                    t[73] === l ? me = t[74] : (me = l && (0, $.jsx)(Dt, {}), t[73] = l, t[74] = me),
                    U = ee.map(e => {
                        let t = new Set(e.newReleaseEntries.flatMap(xt)),
                            a = e.hideEarlyAccessBadge ? null : (0, $.jsx)(`span`, {
                                className: `inline-flex h-[18px] shrink-0 items-center justify-center rounded-[6px] bg-[var(--green-a50)] px-[5px] text-xs font-medium text-[light-dark(var(--green-600),var(--green-400))]`,
                                children: (0, $.jsx)(j, {
                                    ...kt.enterpriseBetaFeatureBadge
                                })
                            }),
                            s = e.newReleaseEntries.map((n, a) => {
                                let s = n.rbac ? n.permissionName : n.settingName,
                                    c = n.rbac ? n.additionalPermissionNames ?? [] : [],
                                    l = e.adminPreviewFeature == null ? re?.(n, t, e.newReleaseEntries[a + 1]) : void 0,
                                    d = l?.title ?? fe(n),
                                    ee = n.rbac && n.dependsOnPermissionName != null && !(se ?? u.permissions).includes(n.dependsOnPermissionName),
                                    f = n.rbac && A,
                                    p = Re({
                                        isReadOnly: f,
                                        disabledReason: n.disabledReason
                                    }),
                                    m = k || f || n.disabled || ee || e.adminPreviewFeature === `admin_preview_library_sharing` && i.admin_preview_launch_settings?.admin_preview_library_sharing == null,
                                    h = n.rbac && (n.dependsOnPermissionName != null || n.permissionNamesToRemoveWhenDisabled != null || n.enableConfirmation != null),
                                    g = n.rbac ? ie?.(n, m, p, d) : null,
                                    _;
                                if (!n.rbac) _ = w?.(n, m) ?? null;
                                else if (g != null) _ = n.permissionName === b.SitesAccess ? (0, $.jsx)(Pe, {
                                    children: g
                                }) : g;
                                else if (n.permissionName === b.SitesAccess) _ = N && ce() ? (0, $.jsx)(Pe, {
                                    children: (0, $.jsx)(Me, {
                                        ariaLabel: d,
                                        role: u,
                                        handleSaveRole: Te,
                                        disabled: m,
                                        disabledReason: p
                                    })
                                }) : (0, $.jsx)(Pe, {
                                    children: (0, $.jsx)(je, {
                                        ariaLabel: d,
                                        role: u,
                                        permissionName: n.permissionName,
                                        additionalPermissionNames: n.additionalPermissionNames,
                                        permissionNamesToRemoveWhenDisabled: n.permissionNamesToRemoveWhenDisabled,
                                        enableConfirmation: n.enableConfirmation,
                                        handleSaveRole: Te,
                                        disabled: m,
                                        disabledReason: p,
                                        renderDisabledToggleAsOff: n.renderDisabledToggleAsOff
                                    })
                                });
                                else if (!h) _ = (0, $.jsx)(je, {
                                    ariaLabel: d,
                                    role: u,
                                    permissionName: n.permissionName,
                                    handleSaveRole: Te,
                                    disabled: m,
                                    disabledReason: p,
                                    renderDisabledToggleAsOff: n.renderDisabledToggleAsOff
                                });
                                else {
                                    let e = [n.permissionName, ...c],
                                        t = (0, $.jsx)(oe, {
                                            size: `normal`,
                                            "aria-label": d,
                                            checked: !(m && n.renderDisabledToggleAsOff) && e.every(e => u.permissions.includes(e)),
                                            onCheckedChange: e => {
                                                if (e && n.enableConfirmation) {
                                                    V(n);
                                                    return
                                                }
                                                pe(n, e)
                                            },
                                            disabled: m
                                        });
                                    _ = m && p ? (0, $.jsx)(te, {
                                        label: P.formatMessage(p),
                                        children: t
                                    }) : t
                                }
                                return _ == null ? null : (0, $.jsx)(`div`, {
                                    className: o(`flex justify-between gap-4 py-3`, O === `section` && e.adminPreviewFeature != null && `px-4`, l?.className),
                                    children: (0, $.jsxs)(`div`, {
                                        className: `flex w-full items-center justify-between gap-4`,
                                        children: [(0, $.jsxs)(`div`, {
                                            children: [(0, $.jsxs)(`div`, {
                                                className: `text-md flex items-center gap-2`,
                                                children: [l?.label ?? (C ? (0, $.jsx)(`span`, {
                                                    children: C(d)
                                                }) : P.formatMessage({
                                                    id: `workspaceSettings.templateTitle.enterpriseReleaseTitle`,
                                                    defaultMessage: `{name}`
                                                }, {
                                                    name: d
                                                })), e.adminPreviewFeature != null && (0, $.jsx)(z, {
                                                    contentLayout: `multi-line`,
                                                    content: typeof e.description == `string` ? e.description : P.formatMessage(e.description),
                                                    side: `top-center`,
                                                    children: e => (0, $.jsx)(`button`, {
                                                        ...e,
                                                        type: `button`,
                                                        "aria-label": P.formatMessage(kt.featureInfo, {
                                                            feature: d
                                                        }),
                                                        className: `interactive-button interactive-label-tertiary inline-flex items-center rounded-sm`,
                                                        children: (0, $.jsx)(ne, {
                                                            className: `icon-sm`,
                                                            "aria-hidden": `true`
                                                        })
                                                    })
                                                })]
                                            }), (0, $.jsx)(Tt, {
                                                entry: n
                                            }), n.rbac && n.permissionName === b.LibrarySharingManagementAccess && (0, $.jsx)(qe, {
                                                controlMode: i.library_sharing_control_mode,
                                                enabled: i.beta_settings.library_sharing_enabled ?? !1
                                            }), e.adminPreviewFeature != null && n.rbac && (0, $.jsxs)(`button`, {
                                                type: `button`,
                                                className: `interactive-button text-token-interactive-label-accent-accessible relative mt-1 text-xs`,
                                                "aria-busy": E === e.adminPreviewFeature,
                                                disabled: k || A || n.disabled || D == null,
                                                onClick: () => D?.(e, n),
                                                children: [(0, $.jsx)(j, {
                                                    ...i.admin_preview_launch_settings?.[e.adminPreviewFeature] == null ? kt.setAccess : kt.editAccess
                                                }), E === e.adminPreviewFeature && (0, $.jsx)(`span`, {
                                                    "aria-hidden": `true`,
                                                    className: `absolute start-full top-1/2 ms-1 -translate-y-1/2`,
                                                    children: (0, $.jsx)(r, {
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
                                }, s)
                            });
                        if (e.adminPreviewFeature != null) return (0, $.jsxs)(`div`, {
                            id: e.anchorId,
                            role: `group`,
                            "aria-label": e.name,
                            className: `w-full py-2`,
                            children: [h && e.newReleaseEntries.length > 0 && (0, $.jsx)(`p`, {
                                className: `text-token-text-status-warning text-sm`,
                                children: (0, $.jsx)(j, {
                                    ...kt.enterpriseBetaFeatureSectionHipaaDescription
                                })
                            }), s]
                        }, e.adminPreviewFeature);
                        let c = e.description;
                        typeof c != `string` && (c = P.formatMessage(c));
                        let l = e.infoTooltip;
                        return (0, $.jsxs)(`div`, {
                            className: `m-auto flex w-full flex-col`,
                            id: e.anchorId,
                            children: [(0, $.jsxs)(`div`, {
                                className: `flex flex-col gap-2 py-2`,
                                children: [(0, $.jsxs)(`div`, {
                                    children: [(0, $.jsxs)(`div`, {
                                        className: `flex items-center gap-2 text-base font-semibold`,
                                        children: [C ? (0, $.jsx)(`span`, {
                                            children: C(e.name)
                                        }) : P.formatMessage({
                                            id: `workspaceSettings.templateTitle.enterpriseReleaseTitle`,
                                            defaultMessage: `{name}`
                                        }, {
                                            name: e.name
                                        }), a, l && (0, $.jsx)(te, {
                                            interactive: !0,
                                            label: (0, $.jsx)(j, {
                                                ...l.message,
                                                values: {
                                                    link: e => (0, $.jsx)(`a`, {
                                                        href: l.linkHref,
                                                        className: wt,
                                                        children: e
                                                    })
                                                }
                                            }),
                                            side: `top`,
                                            children: (0, $.jsx)(`button`, {
                                                type: `button`,
                                                "aria-label": P.formatMessage(l.ariaLabel),
                                                className: `text-token-text-tertiary hover:text-token-text-secondary focus-visible:outline-token-border-heavy inline-flex size-4 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2`,
                                                children: (0, $.jsx)(ne, {
                                                    "aria-hidden": `true`,
                                                    className: `size-3.5`
                                                })
                                            })
                                        })]
                                    }), (0, $.jsx)(`span`, {
                                        className: `text-token-text-secondary text-sm`,
                                        children: e.helpCenterLink ? (0, $.jsx)(j, {
                                            id: `workspaceSettings.templateTitle.enterpriseReleaseDescription`,
                                            defaultMessage: `{name} <learnMore>Learn more</learnMore>`,
                                            values: {
                                                name: C?.(c) ?? c,
                                                learnMore: t => (0, $.jsx)(`a`, {
                                                    href: e.helpCenterLink,
                                                    target: e.helpLinkOpenNewTab === !1 ? void 0 : `_blank`,
                                                    className: wt,
                                                    rel: e.helpLinkOpenNewTab === !1 ? void 0 : `noopener noreferrer`,
                                                    children: e.helpLinkLabel ? P.formatMessage(e.helpLinkLabel) : t
                                                })
                                            }
                                        }) : C?.(c) ?? c
                                    })]
                                }), h && p && e.newReleaseEntries.length > 0 && (0, $.jsx)(`p`, {
                                    className: `text-token-text-status-warning text-sm`,
                                    children: (0, $.jsx)(j, {
                                        ...kt.enterpriseBetaFeatureSectionHipaaDescription
                                    })
                                }), (0, $.jsx)(`div`, {
                                    role: O === `section` ? `group` : void 0,
                                    "aria-label": O === `section` ? e.name : void 0,
                                    className: o(`flex flex-col`, O !== `section` && `divide-y divide-token-border-default border-y border-token-border-default`),
                                    children: s
                                })]
                            }), !(e.shouldHideOptOutButton ?? !1) && d && e.newReleaseOptOutFlag && (e.newReleaseOptOutFlag === _.LIBRARY_SHARING_GA_OPT_OUT ? (0, $.jsx)(Je, {
                                betaSettingsDict: i.beta_settings_dict,
                                workspaceId: n,
                                feature: e.newReleaseOptOutFlag,
                                featureName: e.optOutFeatureName ?? e.name,
                                storedValue: i.beta_settings[e.newReleaseOptOutFlag],
                                isRbacEnabled: f,
                                disabled: k,
                                onChange: T
                            }) : (0, $.jsx)(Be, {
                                workspaceId: n,
                                feature: e.newReleaseOptOutFlag,
                                featureName: e.optOutFeatureName ?? e.name,
                                storedValue: i.beta_settings[e.newReleaseOptOutFlag],
                                isRbacEnabled: f,
                                disabled: k,
                                onChange: T
                            }))]
                        }, e.name)
                    })
                }
                t[0] = R?.isHipaaCompliantWorkspace, t[1] = i, t[2] = k, t[3] = A, t[4] = se, t[5] = M, t[6] = re, t[7] = c, t[8] = P, t[9] = f, t[10] = O, t[11] = E, t[12] = T, t[13] = S, t[14] = D, t[15] = B?.enableConfirmation, t[16] = s, t[17] = C, t[18] = ie, t[19] = w, t[20] = u, t[21] = le, t[22] = F, t[23] = y, t[24] = d, t[25] = N, t[26] = n, t[27] = de, t[28] = fe, t[29] = H, t[30] = pe, t[31] = me, t[32] = U, t[33] = W, t[34] = he, t[35] = G, t[36] = K, t[37] = ve, t[38] = ye, t[39] = be, t[40] = xe, t[41] = Se, t[42] = we
            } else de = t[27], fe = t[28], H = t[29], pe = t[30], me = t[31], U = t[32], W = t[33], he = t[34], G = t[35], K = t[36], ve = t[37], ye = t[38], be = t[39], xe = t[40], Se = t[41], we = t[42];
            if (be !== Symbol.for(`react.early_return_sentinel`)) return be;
            let q;
            t[75] !== me || t[76] !== U || t[77] !== xe || t[78] !== Se || t[79] !== we ? (q = (0, $.jsxs)(`div`, {
                id: xe,
                hidden: Se,
                className: we,
                children: [me, U]
            }), t[75] = me, t[76] = U, t[77] = xe, t[78] = Se, t[79] = we, t[80] = q) : q = t[80];
            let Te;
            t[81] !== fe || t[82] !== H || t[83] !== B || t[84] !== pe ? (Te = B && H && (0, $.jsx)(ee, {
                isOpen: !0,
                onClose: () => V(null),
                title: fe(B),
                testId: `modal-enterprise-permission-enable-confirmation`,
                primaryButton: (0, $.jsx)(l.Button, {
                    as: `button`,
                    color: `primary`,
                    loading: !1,
                    onClick: async () => {
                        await pe(B, !0), V(null)
                    },
                    children: (0, $.jsx)(j, {
                        ...kt.enterprisePermissionEnable
                    })
                }),
                secondaryButton: (0, $.jsx)(l.Button, {
                    as: `button`,
                    color: `ghost`,
                    onClick: () => V(null),
                    children: (0, $.jsx)(j, {
                        ...kt.enterprisePermissionEnableCancel
                    })
                }),
                children: (0, $.jsxs)(`div`, {
                    className: `text-token-text-secondary flex flex-col gap-3 text-sm`,
                    children: [(0, $.jsx)(`p`, {
                        children: (0, $.jsx)(j, {
                            ...H.body
                        })
                    }), H.details && (0, $.jsx)(`p`, {
                        children: (0, $.jsx)(j, {
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
            }), t[81] = fe, t[82] = H, t[83] = B, t[84] = pe, t[85] = Te) : Te = t[85];
            let Ee;
            return t[86] !== de || t[87] !== W || t[88] !== he || t[89] !== G || t[90] !== K || t[91] !== ve || t[92] !== ye || t[93] !== q || t[94] !== Te ? (Ee = (0, $.jsxs)(de, {
                className: W,
                title: he,
                titleContent: G,
                titleClassName: K,
                description: ve,
                descriptionClassName: ye,
                children: [q, Te]
            }), t[86] = de, t[87] = W, t[88] = he, t[89] = G, t[90] = K, t[91] = ve, t[92] = ye, t[93] = q, t[94] = Te, t[95] = Ee) : Ee = t[95], Ee
        }, kt = A({
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
        jt = I(), M(), Mt = O(), Nt = `https://learn.chatgpt.com/docs/hipaa-configuration`, Pt = e => {
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
                    children: (0, Mt.jsx)(j, {
                        ...Ft.link
                    })
                })
            }), t[0] = r) : r = t[0], r
        }, Ft = A({
            link: {
                id: `chatgpt.workspace.permissions.codex_and_work_local.section.hipaa_configuration_guide.link`,
                defaultMessage: `Read the HIPAA configuration guide before enabling the features below.`
            }
        })
    }));
export {
    ze as _, At as a, Xe as c, ot as d, qe as f, Re as g, We as h, Et as i, rt as l, Be as m, It as n, gt as o, Ye as p, Ot as r, _t as s, Pt as t, dt as u
};
//# sourceMappingURL=222991e8-bcyykisivdx4rl7r.js.map
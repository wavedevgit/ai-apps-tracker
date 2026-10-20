import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Az as n,
    Bnt as r,
    F7 as i,
    Fw as a,
    G5 as o,
    I1 as s,
    JT as c,
    K5 as l,
    Knt as u,
    Nw as d,
    Q1 as f,
    Sw as p,
    VU as m,
    Xy as h,
    Y1 as g,
    Yy as _,
    Zst as v,
    aB as y,
    cK as ee,
    fG as b,
    iB as x,
    j7 as S,
    jz as C,
    lK as te,
    m2 as w,
    nx as ne,
    p2 as re,
    q1 as ie,
    qT as ae,
    qst as oe,
    rx as se,
    v2 as T,
    ww as E,
    yG as ce,
    zU as D
} from "./4813494d-ed29bs6yiwucn7st.js";
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
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Ajt as L,
    LHn as R,
    Lrt as de,
    RHn as z,
    Rrt as B,
    jjt as V
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    Av as fe,
    By as H,
    Gg as pe,
    Ov as me,
    Vy as U,
    jv as W,
    kv as he,
    qg as G
} from "./30901919-om7b3qf5hp4j9x4l.js";
import {
    Ax as K,
    Bo as ge,
    Dx as q,
    Ho as _e,
    Ko as ve,
    Nb as ye,
    Pb as be,
    Tb as xe,
    Uo as Se,
    Wo as Ce,
    Zo as J,
    jx as we,
    kx as Te,
    qo as Ee
} from "./c2675c8c-fpv9s4kvd412dyap.js";
import {
    d as De,
    r as Oe
} from "./b411f8ca-jg2v06kvyhxwn1b7.js";
import {
    a as ke,
    i as Ae
} from "./a99a60c9-m6gvz7h8nqgjqd00.js";
import {
    d as je,
    f as Me,
    l as Ne
} from "./b90db9d2-c99sxwtq7uy6033i.js";
import {
    n as Pe,
    t as Fe
} from "./e17f5811-eeipdpm07q5alwsr.js";
var Ie, Le, Re = e((() => {
    M(), Ie = k({
        id: `admin.cloudConsoleM3RolePermissionReadOnlyTooltip`,
        defaultMessage: `These permissions can be configured in Cloud Console.`
    }), Le = ({
        isReadOnly: e,
        disabledReason: t
    }) => e ? Ie : t
}));

function ze(e) {
    "use forget";
    let t = (0, Ve.c)(63),
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
        f = s !== void 0 && s,
        m = ue(),
        h = le(),
        [g, _] = (0, He.useState)(!1),
        v = a === !0,
        y = o ? v ? Ue.enterpriseReleaseOptedOutDescription : Ue.enterpriseReleaseOptedInDescription : v ? Ue.enterpriseReleaseNonRbacOptedOutDescription : Ue.enterpriseReleaseNonRbacOptedInDescription,
        ee = o ? Ue.enterpriseReleaseOptOutDescription : Ue.enterpriseReleaseNonRbacOptOutDescription,
        b;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (b = (e, t) => {
        t && _(!1)
    }, t[0] = b) : b = t[0];
    let x;
    t[1] === h ? x = t[2] : (x = () => h.invalidateQueries({
        queryKey: [`workspace-settings`]
    }), t[1] = h, t[2] = x);
    let C;
    t[3] !== r || t[4] !== n ? (C = e => S.safePost(`/accounts/{account_id}/beta_features`, {
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
    let te;
    t[6] !== x || t[7] !== C ? (te = {
        onSuccess: b,
        onSettled: x,
        mutationFn: C
    }, t[6] = x, t[7] = C, t[8] = te) : te = t[8];
    let w = P(te),
        ne;
    t[9] === w.isPending ? ne = t[10] : (ne = () => {
        w.isPending || _(!1)
    }, t[9] = w.isPending, t[10] = ne);
    let re = ne,
        ie;
    t[11] !== r || t[12] !== w || t[13] !== c ? (ie = e => {
        c ? (c(r, e), _(!1)) : w.mutate(e)
    }, t[11] = r, t[12] = w, t[13] = c, t[14] = ie) : ie = t[14];
    let oe = ie,
        se;
    t[15] !== l || t[16] !== y ? (se = l ?? (0, Y.jsx)(j, {
        ...y,
        values: {
            strong: Be
        }
    }), t[15] = l, t[16] = y, t[17] = se) : se = t[17];
    let T;
    t[18] === se ? T = t[19] : (T = (0, Y.jsx)(`span`, {
        className: `min-w-0 text-sm text-token-text-tertiary`,
        children: se
    }), t[18] = se, t[19] = T);
    let E = v ? `secondary` : `primary`,
        ce = f || w.isPending,
        D;
    t[20] !== m || t[21] !== v ? (D = m.formatMessage(v ? Ue.enterpriseReleaseOptInButton : Ue.enterpriseReleaseOptOutButton), t[20] = m, t[21] = v, t[22] = D) : D = t[22];
    let O;
    t[23] !== oe || t[24] !== v ? (O = () => {
        v ? oe(!1) : _(!0)
    }, t[23] = oe, t[24] = v, t[25] = O) : O = t[25];
    let k = v ? Ue.enterpriseReleaseOptInButton : Ue.enterpriseReleaseOptOutButton,
        A;
    t[26] === k ? A = t[27] : (A = (0, Y.jsx)(j, {
        ...k
    }), t[26] = k, t[27] = A);
    let M;
    t[28] !== E || t[29] !== ce || t[30] !== D || t[31] !== O || t[32] !== A ? (M = (0, Y.jsx)(ae, {
        color: E,
        size: `small`,
        disabled: ce,
        loading: !1,
        label: D,
        onClick: O,
        children: A
    }), t[28] = E, t[29] = ce, t[30] = D, t[31] = O, t[32] = A, t[33] = M) : M = t[33];
    let N;
    t[34] !== M || t[35] !== T ? (N = (0, Y.jsxs)(`div`, {
        className: `flex items-center justify-between gap-6 py-2`,
        children: [T, M]
    }), t[34] = M, t[35] = T, t[36] = N) : N = t[36];
    let F;
    t[37] === i ? F = t[38] : (F = (0, Y.jsx)(j, {
        ...Ue.enterpriseReleaseOptOutModalTitle,
        values: {
            name: i
        }
    }), t[37] = i, t[38] = F);
    let I;
    t[39] !== u || t[40] !== i || t[41] !== ee ? (I = u ?? (0, Y.jsx)(j, {
        ...ee,
        values: {
            name: i
        }
    }), t[39] = u, t[40] = i, t[41] = ee, t[42] = I) : I = t[42];
    let L;
    t[43] === oe ? L = t[44] : (L = () => oe(!0), t[43] = oe, t[44] = L);
    let R;
    t[45] === Symbol.for(`react.memo_cache_sentinel`) ? (R = (0, Y.jsx)(j, {
        ...Ue.enterpriseReleaseOptOutConfirm
    }), t[45] = R) : R = t[45];
    let de;
    t[46] !== w.isPending || t[47] !== L ? (de = (0, Y.jsx)(d.Button, {
        as: `button`,
        color: `primary`,
        disabled: w.isPending,
        loading: w.isPending,
        onClick: L,
        children: R
    }), t[46] = w.isPending, t[47] = L, t[48] = de) : de = t[48];
    let z;
    t[49] === Symbol.for(`react.memo_cache_sentinel`) ? (z = (0, Y.jsx)(j, {
        ...Ue.enterpriseReleaseOptOutCancel
    }), t[49] = z) : z = t[49];
    let B;
    t[50] !== re || t[51] !== w.isPending ? (B = (0, Y.jsx)(d.Button, {
        as: `button`,
        color: `ghost`,
        disabled: w.isPending,
        onClick: re,
        children: z
    }), t[50] = re, t[51] = w.isPending, t[52] = B) : B = t[52];
    let V;
    t[53] !== re || t[54] !== g || t[55] !== F || t[56] !== I || t[57] !== de || t[58] !== B ? (V = (0, Y.jsx)(p, {
        isOpen: g,
        onClose: re,
        title: F,
        description: I,
        testId: `modal-enterprise-release-opt-out`,
        primaryButton: de,
        secondaryButton: B
    }), t[53] = re, t[54] = g, t[55] = F, t[56] = I, t[57] = de, t[58] = B, t[59] = V) : V = t[59];
    let fe;
    return t[60] !== N || t[61] !== V ? (fe = (0, Y.jsxs)(Y.Fragment, {
        children: [N, V]
    }), t[60] = N, t[61] = V, t[62] = fe) : fe = t[62], fe
}

function Be(e) {
    return (0, Y.jsx)(`strong`, {
        children: e
    })
}
var Ve, He, Y, Ue, We = e((() => {
        Ve = I(), c(), a(), E(), i(), F(), He = t(N()), M(), Y = O(), Ue = A({
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
            return t[7] !== r || t[8] !== i ? (o = (0, Ke.jsx)(ze, {
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
    onUnappliedChangesChange: p
}) {
    "use no forget";
    let h = ue(),
        g = m(),
        _ = f(re),
        v = f(w),
        y = !_ && r(`1261424157`),
        ee = y && s && r(`2634861725`),
        b = !!t,
        {
            data: x,
            isLoading: S,
            isFetching: C,
            isError: te
        } = be({
            workspaceId: e,
            roleId: t ?? ``,
            enabled: y && b
        }),
        {
            data: ne,
            isLoading: ie
        } = ye({
            workspaceId: e,
            roleId: t ?? ``,
            enabled: y && b
        }),
        {
            upsertRoleMetadata: ae,
            isPending: oe
        } = De({
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
        [L, de] = (0, X.useState)(null),
        [z, B] = (0, X.useState)(!1),
        [V, fe] = (0, X.useState)(null),
        [pe, me] = (0, X.useState)(null),
        U = (0, X.useMemo)(() => ne ? {
            low: ne.low_credit_limit,
            medium: ne.medium_credit_limit,
            high: ne.high_credit_limit
        } : i, [ne, i]),
        W = (0, X.useCallback)(e => h.formatMessage(Q.creditsPerWeek, {
            value: e
        }), [h]),
        he = (0, X.useCallback)(e => h.formatMessage(Q.creditsPerCalendarMonth, {
            value: e
        }), [h]),
        G = (0, X.useMemo)(() => ({
            low: W(U.low),
            medium: W(U.medium),
            high: W(U.high)
        }), [W, U.high, U.low, U.medium]),
        K = x != null,
        ge = u ? {
            ...x?.metadata,
            ...u
        } : x?.metadata ?? null,
        q = ge?.soft_alert_credit_limit ?? null,
        _e = ge?.hard_cap_credit_limit ?? null,
        xe = ge?.hard_cap_shared_credit_limit ?? null,
        Se = q ?? _e ?? null,
        J = xe?.limit ?? null;
    (0, X.useEffect)(() => {
        if (!x) return;
        if (!Se) {
            T(`none`), ce(``), O(!1), A(``);
            return
        }
        let e = q?.limit ?? null,
            t = _e?.limit ?? null,
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
    }, [x, Se, q, _e, U.high, U.low, U.medium]);
    let we = {
        low: String(U.low),
        medium: String(U.medium),
        high: String(U.high)
    };
    (0, X.useEffect)(() => {
        if (x) {
            if (J == null) {
                M(`none`), P(``), de(null);
                return
            }
            P(String(J)), de(null), M(`custom`)
        }
    }, [x, J]);
    let Te = (() => {
            switch (se) {
                case `low`:
                    return we.low;
                case `medium`:
                    return we.medium;
                case `high`:
                    return we.high;
                case `custom`:
                    return E;
                default:
                    return ``
            }
        })().trim(),
        Oe = (0, X.useMemo)(() => [{
            key: `none`,
            label: h.formatMessage(Q.enforcementDropdownNoneLabel)
        }, {
            key: `low`,
            label: h.formatMessage(Q.enforcementDropdownLowUsageLabel),
            limitLabel: G.low
        }, {
            key: `medium`,
            label: h.formatMessage(Q.enforcementDropdownMediumUsageLabel),
            limitLabel: G.medium
        }, {
            key: `high`,
            label: h.formatMessage(Q.enforcementDropdownHighLabel),
            limitLabel: G.high
        }, {
            key: `custom`,
            label: h.formatMessage(Q.enforcementDropdownCustomLabel)
        }], [h, G.high, G.low, G.medium]),
        ke = (0, X.useMemo)(() => Oe.filter(e => e.key === `none` || e.key === `custom`), [Oe]),
        Ae = h.formatMessage(Q.enforcementDropdownPlaceholder),
        je = Oe.find(e => e.key === se) ?? null,
        Me = je?.label ?? Ae,
        Ne = je?.limitLabel,
        Pe = se === `custom` ? D && k.trim() ? W(k.trim()) : E.trim() ? W(E.trim()) : Me : (je && Ne ? Ne : Me) ?? Ae,
        Fe = !je || je.key === `none`,
        Ie = y && b && (S && !x || ie && !ne),
        Le = oe || pe != null,
        Re = d == null && te && !K,
        ze = c || d != null && v || Le || C || !K && !Re,
        Be = c || d != null && v || Le || C || !K && !Re,
        Ve = pe === `usage`,
        He = pe === `shared`,
        Y = async ({
            selectionKey: e,
            alertLimitOverride: n,
            hardCapEnabledOverride: r,
            hardCapLimitOverride: i
        }) => {
            if (!t || c) return;
            let a = ((e === `custom` ? n ?? E : e === `low` || e === `medium` || e === `high` ? we[e] ?? `` : ``) ?? ``).trim(),
                o = a === `` ? NaN : Number(a),
                s = e === `custom` && (r ?? D) ? (i ?? k ?? ``).trim() : ``,
                l = s === `` ? NaN : Number(s),
                u = e === `custom` && s !== ``,
                f = u && Number.isFinite(l) && l === 0;
            if (e !== `none` && e !== `none` && (e !== `custom` || u && !f) && (a === `` || !Number.isFinite(o) || o <= 0)) {
                fe(a === `` ? h.formatMessage(Q.alertRequiredForHardCap) : h.formatMessage(Q.invalidLimit));
                return
            }
            if (u && (s === `` || !Number.isFinite(l) || l < 0)) {
                fe(h.formatMessage(Q.invalidLimit));
                return
            }
            fe(null);
            let p = ct({
                selectionKey: e,
                trimmedSelectionAlert: a,
                parsedSelectionAlert: o,
                hasCustomHardCap: u,
                parsedSelectionHardCap: l,
                isHardCapZero: f
            });
            if (d) {
                if (x == null) throw Error(`Role metadata must load before editing usage limits`);
                d(p, x);
                return
            }
            try {
                me(`usage`), await ae(p), g.success(h.formatMessage(Q.submitSuccess))
            } catch {
                g.danger(h.formatMessage(Q.submitError))
            } finally {
                me(null)
            }
        }, Ue = async ({
            selectionKey: e,
            limitOverride: n
        }) => {
            if (!t || c) return;
            let r = (e === `custom` ? n ?? N : ``).trim(),
                i = r === `` ? NaN : Number(r);
            if (e !== `none` && (r === `` || !Number.isFinite(i) || i < 0)) {
                de(h.formatMessage(Q.sharedUsageInvalidLimit));
                return
            }
            de(null);
            let a = lt({
                sharedUsageLimit: e === `none` ? null : i
            });
            if (d) {
                if (x == null) throw Error(`Role metadata must load before editing usage limits`);
                d(a, x);
                return
            }
            try {
                me(`shared`), await ae(a), g.success(h.formatMessage(Q.submitSuccess))
            } catch {
                g.danger(h.formatMessage(Q.submitError))
            } finally {
                me(null)
            }
        }, We = e => {
            if (!ze) {
                if (e.key === `custom`) {
                    B(!0);
                    return
                }
                T(e.key), Y({
                    selectionKey: e.key
                })
            }
        }, Ge = e => {
            if (!Be) {
                if (e.key === `custom`) {
                    I(!0);
                    return
                }
                M(e.key), Ue({
                    selectionKey: e.key
                })
            }
        }, Ke = ({
            alertLimit: e,
            hardCapEnabled: t,
            hardCapLimit: n
        }) => {
            ce(e), O(t), A(t ? n : ``), T(`custom`), B(!1), Y({
                selectionKey: `custom`,
                alertLimitOverride: e,
                hardCapEnabledOverride: t,
                hardCapLimitOverride: t ? n : ``
            })
        }, qe = e => {
            P(e), M(`custom`), I(!1), Ue({
                selectionKey: `custom`,
                limitOverride: e
            })
        }, Je = E === `` ? Te : E, Ye = D, Xe = k, Qe = ke.find(e => e.key === le) ?? null, et = Qe?.label ?? Ae, tt = le === `custom` && N.trim() ? he(N.trim()) : et, it = !Qe || Qe.key === `none`;
    return !y || !b || !ot({
        searchQuery: a,
        intl: h,
        includeSharedUsageLimit: ee
    }) ? null : (0, Z.jsxs)(Z.Fragment, {
        children: [(0, Z.jsx)($e, {
            isOpen: !c && z,
            alertLimit: Je,
            hardCapEnabled: Ye,
            hardCapLimit: Xe,
            onClose: () => B(!1),
            onSave: Ke,
            isStaging: d != null,
            onUnappliedChangesChange: p
        }), ee && (0, Z.jsx)(Ze, {
            isOpen: !c && F,
            limit: N,
            onClose: () => I(!1),
            onSave: qe,
            isStaging: d != null,
            onUnappliedChangesChange: p
        }), (0, Z.jsx)(Ce, {
            children: Ie ? (0, Z.jsx)(`div`, {
                className: `flex h-24 items-center justify-center`,
                children: (0, Z.jsx)(n, {
                    className: `text-token-text-tertiary h-6 w-6`
                })
            }) : (0, Z.jsxs)(ve, {
                className: l ? `border-b-0` : ``,
                children: [(0, Z.jsx)(Ee, {
                    children: (0, Z.jsxs)(`div`, {
                        className: `flex w-full items-start justify-between gap-4`,
                        children: [(0, Z.jsxs)(`div`, {
                            className: `flex flex-col gap-1`,
                            children: [(0, Z.jsx)(`div`, {
                                className: `text-md font-semibold`,
                                children: o?.(h.formatMessage(Q.creditLimitLabel)) ?? h.formatMessage(Q.creditLimitLabel)
                            }), (0, Z.jsx)(`div`, {
                                className: `text-token-text-secondary text-sm`,
                                children: o?.(h.formatMessage(Q.creditLimitDescription)) ?? h.formatMessage(Q.creditLimitDescription)
                            })]
                        }), (0, Z.jsxs)(`div`, {
                            className: `flex items-center gap-2`,
                            children: [Ve && (0, Z.jsx)(n, {
                                className: `text-token-text-tertiary h-4 w-4`
                            }), (0, Z.jsxs)(R.Root, {
                                children: [(0, Z.jsxs)(R.Trigger, {
                                    className: `bg-token-bg-primary text-token-text-primary border-token-border-heavy inline-flex min-w-[130px] items-center gap-2 rounded-md border px-2.5 py-1.5 text-start text-sm`,
                                    disabled: ze,
                                    children: [(0, Z.jsx)(`div`, {
                                        className: `flex min-w-0 flex-1 items-center justify-between gap-2`,
                                        children: (0, Z.jsx)(`span`, {
                                            className: `truncate ${Fe?`text-token-text-tertiary`:``}`,
                                            children: Pe
                                        })
                                    }), (0, Z.jsx)(H, {
                                        className: `text-token-text-tertiary h-3.5 w-3.5 shrink-0`
                                    })]
                                }), (0, Z.jsx)(R.Portal, {
                                    children: (0, Z.jsxs)(R.Content, {
                                        role: `dialog`,
                                        "aria-modal": `false`,
                                        "aria-label": h.formatMessage(Q.creditLimitLabel),
                                        side: `bottom`,
                                        align: `start`,
                                        className: `bg-token-bg-primary text-token-text-primary border-token-border-heavy w-64 rounded-lg border p-4 shadow-lg`,
                                        children: [(0, Z.jsxs)(`div`, {
                                            className: `flex flex-col gap-1`,
                                            children: [(0, Z.jsx)(`div`, {
                                                className: `text-sm`,
                                                children: h.formatMessage(Q.setCreditLimitLabel)
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
                                            children: Oe.map(e => (0, Z.jsxs)(R.Item, {
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
                }), ee && (0, Z.jsx)(Ee, {
                    children: (0, Z.jsxs)(`div`, {
                        className: `flex w-full items-start justify-between gap-4`,
                        children: [(0, Z.jsxs)(`div`, {
                            className: `flex flex-col gap-1`,
                            children: [(0, Z.jsx)(`div`, {
                                className: `text-md font-semibold`,
                                children: o?.(h.formatMessage(Q.sharedUsageLimitLabel)) ?? h.formatMessage(Q.sharedUsageLimitLabel)
                            }), (0, Z.jsx)(`div`, {
                                className: `text-token-text-secondary text-sm`,
                                children: o?.(h.formatMessage(Q.sharedUsageLimitDescription)) ?? h.formatMessage(Q.sharedUsageLimitDescription)
                            })]
                        }), (0, Z.jsxs)(`div`, {
                            className: `flex flex-col items-end gap-2`,
                            children: [(0, Z.jsxs)(`div`, {
                                className: `flex items-center gap-2`,
                                children: [He && (0, Z.jsx)(n, {
                                    className: `text-token-text-tertiary h-4 w-4`
                                }), (0, Z.jsxs)(R.Root, {
                                    children: [(0, Z.jsxs)(R.Trigger, {
                                        className: `bg-token-bg-primary text-token-text-primary border-token-border-heavy inline-flex min-w-[130px] items-center gap-2 rounded-md border px-2.5 py-1.5 text-start text-sm`,
                                        disabled: Be,
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
                                            "aria-label": h.formatMessage(Q.sharedUsageLimitLabel),
                                            side: `bottom`,
                                            align: `start`,
                                            className: `bg-token-bg-primary text-token-text-primary border-token-border-heavy w-64 rounded-lg border p-4 shadow-lg`,
                                            children: [(0, Z.jsxs)(`div`, {
                                                className: `flex flex-col gap-1`,
                                                children: [(0, Z.jsx)(`div`, {
                                                    className: `text-sm`,
                                                    children: h.formatMessage(Q.setSharedUsageLimitLabel)
                                                }), (0, Z.jsx)(`div`, {
                                                    className: `text-token-text-tertiary text-xs`,
                                                    children: h.formatMessage(Q.setSharedUsageLimitDescription)
                                                })]
                                            }), (0, Z.jsx)(`hr`, {
                                                className: `border-token-border-heavy my-3`
                                            }), (0, Z.jsx)(`div`, {
                                                className: `mt-3 flex flex-col gap-1`,
                                                children: ke.map(e => (0, Z.jsx)(R.Item, {
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
        l = ue(),
        [u, f] = (0, X.useState)(r),
        [p, m] = (0, X.useState)(!1),
        h;
    t[0] !== n || t[1] !== c || t[2] !== r || t[3] !== u ? (h = c && n && u.trim() !== r.trim(), t[0] = n, t[1] = c, t[2] = r, t[3] = u, t[4] = h) : h = t[4];
    let g = h,
        _, v;
    t[5] !== g || t[6] !== s ? (_ = () => {
        if (g) return s?.(!0), () => s?.(!1)
    }, v = [g, s], t[5] = g, t[6] = s, t[7] = _, t[8] = v) : (_ = t[7], v = t[8]), (0, X.useEffect)(_, v);
    let y, ee;
    t[9] !== n || t[10] !== r ? (y = () => {
        n && (f(r), m(!1))
    }, ee = [n, r], t[9] = n, t[10] = r, t[11] = y, t[12] = ee) : (y = t[11], ee = t[12]), (0, X.useEffect)(y, ee);
    let b;
    t[13] === p ? b = t[14] : (b = e => {
        let t = e.replace(/\s+/g, ``);
        /^\d*$/.test(t) && (f(t), p && m(!1))
    }, t[13] = p, t[14] = b);
    let x = b,
        S;
    t[15] === u ? S = t[16] : (S = u.trim(), t[15] = u, t[16] = S);
    let C = S,
        te = C === `` ? NaN : Number(C),
        w;
    t[17] !== te || t[18] !== C ? (w = C !== `` && Number.isFinite(te) && te >= 0, t[17] = te, t[18] = C, t[19] = w) : w = t[19];
    let ne = w,
        re;
    t[20] !== l || t[21] !== ne ? (re = ne ? `` : l.formatMessage(Q.sharedUsageInvalidLimit), t[20] = l, t[21] = ne, t[22] = re) : re = t[22];
    let ie = re,
        ae = p && !!ie,
        oe = ae ? ie : void 0,
        se = `pe-36${oe?` text-interactive-label-warning-secondary placeholder:text-interactive-label-warning-secondary`:``}`,
        T = oe ? `border-token-border-error focus-within:border-token-border-error focus-within:ring-token-border-error` : void 0,
        E;
    t[23] === l ? E = t[24] : (E = l.formatMessage(Q.sharedUsageLimitCreditsSuffix), t[23] = l, t[24] = E);
    let ce = E,
        D;
    t[25] === i ? D = t[26] : (D = e => {
        e || i()
    }, t[25] = i, t[26] = D);
    let O;
    t[27] === l ? O = t[28] : (O = l.formatMessage(Q.customSharedUsageLimitTitle), t[27] = l, t[28] = O);
    let k;
    t[29] === O ? k = t[30] : (k = (0, Z.jsx)(`div`, {
        className: `text-lg font-semibold`,
        children: O
    }), t[29] = O, t[30] = k);
    let A;
    t[31] === l ? A = t[32] : (A = l.formatMessage(Q.customModalCancelLabel), t[31] = l, t[32] = A);
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
    t[37] !== k || t[38] !== j ? (M = (0, Z.jsx)(d.Header, {
        className: `px-6 ps-6 pt-6 pb-0`,
        title: k,
        closeButton: j
    }), t[37] = k, t[38] = j, t[39] = M) : M = t[39];
    let N;
    t[40] === l ? N = t[41] : (N = l.formatMessage(Q.customSharedUsageLimitDescription), t[40] = l, t[41] = N);
    let P;
    t[42] === N ? P = t[43] : (P = (0, Z.jsx)(`p`, {
        className: `text-token-text-tertiary text-xs leading-relaxed`,
        children: N
    }), t[42] = N, t[43] = P);
    let F;
    t[44] === l ? F = t[45] : (F = l.formatMessage(Q.customSharedUsageLimitAriaLabel), t[44] = l, t[45] = F);
    let I;
    t[46] === x ? I = t[47] : (I = e => x(e.target.value), t[46] = x, t[47] = I);
    let L;
    t[48] === ce ? L = t[49] : (L = (0, Z.jsx)(`span`, {
        className: `text-token-text-primary pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 text-xs`,
        children: ce
    }), t[48] = ce, t[49] = L);
    let R;
    t[50] !== T || t[51] !== se || t[52] !== oe || t[53] !== F || t[54] !== I || t[55] !== L || t[56] !== u ? (R = (0, Z.jsx)(de, {
        name: `custom-shared-usage-limit`,
        ariaLabel: F,
        inputMode: `numeric`,
        value: u,
        onChange: I,
        className: T,
        insideContainerChildren: L,
        inputClassName: se,
        showErrorIcon: !1,
        showInlineErrorMessage: !1,
        error: oe
    }), t[50] = T, t[51] = se, t[52] = oe, t[53] = F, t[54] = I, t[55] = L, t[56] = u, t[57] = R) : R = t[57];
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
    t[64] !== l || t[65] !== c ? (V = l.formatMessage(c ? Q.customModalApplyLabel : Q.customModalSaveLabel), t[64] = l, t[65] = c, t[66] = V) : V = t[66];
    let H = !ne,
        pe = !ne,
        U;
    t[67] !== ne || t[68] !== a || t[69] !== C ? (U = () => {
        m(!0), ne && a(C)
    }, t[67] = ne, t[68] = a, t[69] = C, t[70] = U) : U = t[70];
    let W;
    t[71] !== V || t[72] !== H || t[73] !== pe || t[74] !== U ? (W = (0, Z.jsx)(d.Button, {
        color: `primary`,
        title: V,
        visuallyDisabled: H,
        "aria-disabled": pe,
        onClick: U
    }), t[71] = V, t[72] = H, t[73] = pe, t[74] = U, t[75] = W) : W = t[75];
    let he;
    t[76] === l ? he = t[77] : (he = l.formatMessage(Q.customModalCancelLabel), t[76] = l, t[77] = he);
    let G;
    t[78] !== i || t[79] !== he ? (G = (0, Z.jsx)(d.Button, {
        title: he,
        onClick: i
    }), t[78] = i, t[79] = he, t[80] = G) : G = t[80];
    let K;
    t[81] !== W || t[82] !== G ? (K = (0, Z.jsx)(d.Actions, {
        primaryButton: W,
        secondaryButton: G
    }), t[81] = W, t[82] = G, t[83] = K) : K = t[83];
    let ge;
    t[84] !== B || t[85] !== K ? (ge = (0, Z.jsxs)(`div`, {
        className: `px-6 pb-4`,
        children: [B, K]
    }), t[84] = B, t[85] = K, t[86] = ge) : ge = t[86];
    let q;
    t[87] !== M || t[88] !== z || t[89] !== ge ? (q = (0, Z.jsx)(d.Overlay, {
        children: (0, Z.jsx)(d.Content, {
            position: `center`,
            className: `start-auto col-start-1 row-start-1 w-full max-w-sm ltr:translate-x-0 rtl:translate-x-0`,
            containerClassName: `grid grid-cols-1 grid-rows-1 place-items-center`,
            children: (0, Z.jsxs)(`div`, {
                className: `flex flex-col gap-4`,
                children: [M, z, ge]
            })
        })
    }), t[87] = M, t[88] = z, t[89] = ge, t[90] = q) : q = t[90];
    let _e;
    return t[91] !== n || t[92] !== D || t[93] !== q ? (_e = (0, Z.jsx)(d.Root, {
        isOpen: n,
        onClose: D,
        testId: `modal-custom-shared-usage-limit`,
        children: q
    }), t[91] = n, t[92] = D, t[93] = q, t[94] = _e) : _e = t[94], _e
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
        f = Number(i),
        p = u ? !0 : o && Number.isFinite(f) && f > 0 || !d && !o,
        m = !n || s && Number.isFinite(l) && l >= 0,
        h = c && o && !u && Number(a) <= Number(i),
        g = p ? `` : d && !o ? r.formatMessage(Q.alertRequiredForHardCap) : r.formatMessage(Q.invalidLimit),
        _ = ``;
    return n && (s ? h ? _ = r.formatMessage(Q.customModalHardCapConflictError) : d && !o ? _ = r.formatMessage(Q.alertRequiredForHardCap) : (!p || !m) && (_ = r.formatMessage(Q.invalidLimit)) : _ = r.formatMessage(Q.customModalHardCapRequired)), {
        alertTrimmed: i,
        hardCapTrimmed: a,
        hasAlertValue: o,
        hasHardCapInput: s,
        hasHardCapValue: c,
        isHardCapZero: u,
        requiresAlert: d,
        isAlertValid: p,
        isHardCapValid: m,
        hasHardCapConflict: h,
        alertErrorMessage: g,
        hardCapErrorMessage: _
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
            isStaging: l,
            onUnappliedChangesChange: u
        } = e,
        f = l !== void 0 && l,
        p = ue(),
        [m, h] = (0, X.useState)(r),
        [g, _] = (0, X.useState)(i),
        [v, y] = (0, X.useState)(a),
        [ee, b] = (0, X.useState)(!1),
        x;
    t[0] !== r || t[1] !== m || t[2] !== i || t[3] !== a || t[4] !== v || t[5] !== g || t[6] !== n || t[7] !== f ? (x = f && n && (m.trim() !== r.trim() || g !== i || g && v.trim() !== a.trim()), t[0] = r, t[1] = m, t[2] = i, t[3] = a, t[4] = v, t[5] = g, t[6] = n, t[7] = f, t[8] = x) : x = t[8];
    let S = x,
        C, te;
    t[9] !== S || t[10] !== u ? (C = () => {
        if (S) return u?.(!0), () => u?.(!1)
    }, te = [S, u], t[9] = S, t[10] = u, t[11] = C, t[12] = te) : (C = t[11], te = t[12]), (0, X.useEffect)(C, te);
    let w, re;
    t[13] !== r || t[14] !== i || t[15] !== a || t[16] !== n ? (w = () => {
        n && (h(r), _(i), y(a), b(!1))
    }, re = [r, i, a, n], t[13] = r, t[14] = i, t[15] = a, t[16] = n, t[17] = w, t[18] = re) : (w = t[17], re = t[18]), (0, X.useEffect)(w, re);
    let ie, ae;
    t[19] === g ? (ie = t[20], ae = t[21]) : (ie = () => {
        g || b(!1)
    }, ae = [g], t[19] = g, t[20] = ie, t[21] = ae), (0, X.useEffect)(ie, ae);
    let oe, se;
    t[22] !== m || t[23] !== v || t[24] !== g ? (se = () => {
        g && v.trim() === `0` && m !== `` && h(``)
    }, oe = [m, v, g], t[22] = m, t[23] = v, t[24] = g, t[25] = oe, t[26] = se) : (oe = t[25], se = t[26]), (0, X.useEffect)(se, oe);
    let T;
    t[27] === ee ? T = t[28] : (T = () => {
        ee && b(!1)
    }, t[27] = ee, t[28] = T);
    let E = T,
        ce, D;
    if (t[29] !== E) {
        ce = t => {
            e(h, t), E()
        }, D = t => {
            e(y, t), E()
        };
        let e = et;
        t[29] = E, t[30] = ce, t[31] = D
    } else ce = t[30], D = t[31];
    let O, k, A, le, j, M, N, P, F, I, L, R, z, B, V, H, pe, U, W, he, G, K, ge, q;
    if (t[32] !== m || t[33] !== v || t[34] !== ee || t[35] !== p || t[36] !== g || t[37] !== n || t[38] !== s) {
        let {
            alertTrimmed: e,
            hardCapTrimmed: r,
            hasAlertValue: i,
            hasHardCapValue: a,
            isHardCapZero: c,
            isAlertValid: l,
            isHardCapValid: u,
            hasHardCapConflict: f,
            alertErrorMessage: h,
            hardCapErrorMessage: _
        } = Qe({
            alertValue: m,
            hardCapValue: v,
            isHardCapEnabled: g,
            intl: p
        });
        j = e, F = r, L = c, I = L, R = !i && !a || !l || !u || f;
        let y = ee && (!!h || !!_);
        z = y ? _ || h : ``, le = y && h ? h : void 0, P = y && _ ? _ : void 0, M = P ? `border-token-border-error focus-within:border-token-border-error focus-within:ring-token-border-error` : void 0, N = `pe-24${P?` text-interactive-label-warning-secondary placeholder:text-interactive-label-warning-secondary`:``}`;
        let b;
        t[63] === p ? b = t[64] : (b = p.formatMessage(Q.customModalCreditsSuffix), t[63] = p, t[64] = b), B = b, A = d.Root, K = n, t[65] === s ? ge = t[66] : (ge = e => {
            e || s()
        }, t[65] = s, t[66] = ge), q = `modal-custom-usage-limit`, k = d.Overlay, O = d.Content, W = `center`, he = `start-auto col-start-1 row-start-1 w-full max-w-sm ltr:translate-x-0 rtl:translate-x-0`, G = `grid grid-cols-1 grid-rows-1 place-items-center`, pe = `flex flex-col gap-4`;
        let x;
        t[67] === p ? x = t[68] : (x = p.formatMessage(Q.customModalTitle), t[67] = p, t[68] = x);
        let S;
        t[69] === x ? S = t[70] : (S = (0, Z.jsx)(`div`, {
            className: `text-lg font-semibold`,
            children: x
        }), t[69] = x, t[70] = S);
        let C;
        t[71] === p ? C = t[72] : (C = p.formatMessage(Q.customModalCancelLabel), t[71] = p, t[72] = C);
        let te;
        t[73] === Symbol.for(`react.memo_cache_sentinel`) ? (te = (0, Z.jsx)(fe, {
            className: `h-4 w-4`
        }), t[73] = te) : te = t[73];
        let w;
        t[74] !== s || t[75] !== C ? (w = (0, Z.jsx)(`button`, {
            type: `button`,
            className: `text-token-text-tertiary hover:text-token-text-primary rounded-full p-1`,
            onClick: s,
            "aria-label": C,
            children: te
        }), t[74] = s, t[75] = C, t[76] = w) : w = t[76], t[77] !== S || t[78] !== w ? (U = (0, Z.jsx)(d.Header, {
            className: `px-6 ps-6 pt-6 pb-0`,
            title: S,
            closeButton: w
        }), t[77] = S, t[78] = w, t[79] = U) : U = t[79], H = `flex flex-col gap-6 px-6 text-sm`, V = o(`flex flex-col gap-3`, I && `opacity-50`), t[32] = m, t[33] = v, t[34] = ee, t[35] = p, t[36] = g, t[37] = n, t[38] = s, t[39] = O, t[40] = k, t[41] = A, t[42] = le, t[43] = j, t[44] = M, t[45] = N, t[46] = P, t[47] = F, t[48] = I, t[49] = L, t[50] = R, t[51] = z, t[52] = B, t[53] = V, t[54] = H, t[55] = pe, t[56] = U, t[57] = W, t[58] = he, t[59] = G, t[60] = K, t[61] = ge, t[62] = q
    } else O = t[39], k = t[40], A = t[41], le = t[42], j = t[43], M = t[44], N = t[45], P = t[46], F = t[47], I = t[48], L = t[49], R = t[50], z = t[51], B = t[52], V = t[53], H = t[54], pe = t[55], U = t[56], W = t[57], he = t[58], G = t[59], K = t[60], ge = t[61], q = t[62];
    let _e;
    t[80] === p ? _e = t[81] : (_e = p.formatMessage(Q.customModalSetAlertLabel), t[80] = p, t[81] = _e);
    let ve;
    t[82] === _e ? ve = t[83] : (ve = (0, Z.jsx)(`div`, {
        className: `text-token-text-primary font-medium`,
        children: _e
    }), t[82] = _e, t[83] = ve);
    let ye;
    t[84] === p ? ye = t[85] : (ye = p.formatMessage(Q.customModalSetAlertDescription), t[84] = p, t[85] = ye);
    let be;
    t[86] === ye ? be = t[87] : (be = (0, Z.jsx)(`p`, {
        className: `text-token-text-tertiary mt-1 text-xs leading-relaxed`,
        children: ye
    }), t[86] = ye, t[87] = be);
    let xe;
    t[88] !== ve || t[89] !== be ? (xe = (0, Z.jsxs)(`div`, {
        children: [ve, be]
    }), t[88] = ve, t[89] = be, t[90] = xe) : xe = t[90];
    let Se;
    t[91] === p ? Se = t[92] : (Se = p.formatMessage(Q.customModalSetAlertLabel), t[91] = p, t[92] = Se);
    let Ce;
    t[93] === ce ? Ce = t[94] : (Ce = e => ce(e.target.value), t[93] = ce, t[94] = Ce);
    let J;
    t[95] === B ? J = t[96] : (J = (0, Z.jsx)(`span`, {
        className: `text-token-text-primary pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 text-xs`,
        children: B
    }), t[95] = B, t[96] = J);
    let we;
    t[97] !== le || t[98] !== m || t[99] !== I || t[100] !== Se || t[101] !== Ce || t[102] !== J ? (we = (0, Z.jsx)(de, {
        name: `custom-alert-limit`,
        ariaLabel: Se,
        inputMode: `numeric`,
        value: m,
        onChange: Ce,
        disabled: I,
        insideContainerChildren: J,
        inputClassName: `pe-24`,
        showErrorIcon: !1,
        showInlineErrorMessage: !1,
        error: le
    }), t[97] = le, t[98] = m, t[99] = I, t[100] = Se, t[101] = Ce, t[102] = J, t[103] = we) : we = t[103];
    let Te;
    t[104] !== p || t[105] !== I ? (Te = I && (0, Z.jsx)(`div`, {
        className: `text-token-text-warning text-xs`,
        children: p.formatMessage(Q.customModalAlertDisabledNote)
    }), t[104] = p, t[105] = I, t[106] = Te) : Te = t[106];
    let Ee;
    t[107] !== V || t[108] !== xe || t[109] !== we || t[110] !== Te ? (Ee = (0, Z.jsxs)(`div`, {
        className: V,
        children: [xe, we, Te]
    }), t[107] = V, t[108] = xe, t[109] = we, t[110] = Te, t[111] = Ee) : Ee = t[111];
    let De;
    t[112] === p ? De = t[113] : (De = p.formatMessage(Q.customModalSetHardCapLabel), t[112] = p, t[113] = De);
    let Oe;
    t[114] === De ? Oe = t[115] : (Oe = (0, Z.jsx)(`div`, {
        className: `flex items-center gap-1.5`,
        children: (0, Z.jsx)(`div`, {
            className: `text-token-text-primary font-medium`,
            children: De
        })
    }), t[114] = De, t[115] = Oe);
    let ke;
    t[116] === p ? ke = t[117] : (ke = p.formatMessage(Q.customModalToggleAriaLabel), t[116] = p, t[117] = ke);
    let Ae;
    t[118] === E ? Ae = t[119] : (Ae = e => {
        _(!!e), E()
    }, t[118] = E, t[119] = Ae);
    let je;
    t[120] !== g || t[121] !== ke || t[122] !== Ae ? (je = (0, Z.jsx)(ne, {
        "aria-label": ke,
        checked: g,
        onCheckedChange: Ae
    }), t[120] = g, t[121] = ke, t[122] = Ae, t[123] = je) : je = t[123];
    let Me;
    t[124] !== Oe || t[125] !== je ? (Me = (0, Z.jsxs)(`div`, {
        className: `flex items-center justify-between gap-2`,
        children: [Oe, je]
    }), t[124] = Oe, t[125] = je, t[126] = Me) : Me = t[126];
    let Ne;
    t[127] === p ? Ne = t[128] : (Ne = p.formatMessage(Q.customModalSetHardCapDescription), t[127] = p, t[128] = Ne);
    let Pe;
    t[129] === Ne ? Pe = t[130] : (Pe = (0, Z.jsx)(`p`, {
        className: `text-token-text-tertiary text-xs leading-relaxed`,
        children: Ne
    }), t[129] = Ne, t[130] = Pe);
    let Fe;
    t[131] !== D || t[132] !== M || t[133] !== N || t[134] !== P || t[135] !== v || t[136] !== p || t[137] !== g || t[138] !== B ? (Fe = g && (0, Z.jsx)(Z.Fragment, {
        children: (0, Z.jsx)(de, {
            name: `custom-hard-cap-limit`,
            ariaLabel: p.formatMessage(Q.customModalSetHardCapLabel),
            inputMode: `numeric`,
            value: v,
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
    }), t[131] = D, t[132] = M, t[133] = N, t[134] = P, t[135] = v, t[136] = p, t[137] = g, t[138] = B, t[139] = Fe) : Fe = t[139];
    let Ie;
    t[140] !== Me || t[141] !== Pe || t[142] !== Fe ? (Ie = (0, Z.jsxs)(`div`, {
        className: `flex flex-col gap-3`,
        children: [Me, Pe, Fe]
    }), t[140] = Me, t[141] = Pe, t[142] = Fe, t[143] = Ie) : Ie = t[143];
    let Le;
    t[144] !== H || t[145] !== Ee || t[146] !== Ie ? (Le = (0, Z.jsxs)(`div`, {
        className: H,
        children: [Ee, Ie]
    }), t[144] = H, t[145] = Ee, t[146] = Ie, t[147] = Le) : Le = t[147];
    let Re;
    t[148] === z ? Re = t[149] : (Re = z && (0, Z.jsxs)(`div`, {
        className: `text-interactive-label-warning-secondary mb-3 flex items-center gap-2 text-xs`,
        children: [(0, Z.jsx)(me, {
            className: `h-4 w-4`,
            "aria-hidden": `true`
        }), (0, Z.jsx)(`span`, {
            children: z
        })]
    }), t[148] = z, t[149] = Re);
    let ze;
    t[150] !== p || t[151] !== f ? (ze = p.formatMessage(f ? Q.customModalApplyLabel : Q.customModalSaveLabel), t[150] = p, t[151] = f, t[152] = ze) : ze = t[152];
    let Be;
    t[153] !== j || t[154] !== F || t[155] !== g || t[156] !== L || t[157] !== R || t[158] !== c ? (Be = () => {
        b(!0), !R && c({
            alertLimit: L ? `` : j,
            hardCapEnabled: g,
            hardCapLimit: g ? F : ``
        })
    }, t[153] = j, t[154] = F, t[155] = g, t[156] = L, t[157] = R, t[158] = c, t[159] = Be) : Be = t[159];
    let Ve;
    t[160] !== R || t[161] !== ze || t[162] !== Be ? (Ve = (0, Z.jsx)(d.Button, {
        color: `primary`,
        title: ze,
        visuallyDisabled: R,
        "aria-disabled": R,
        onClick: Be
    }), t[160] = R, t[161] = ze, t[162] = Be, t[163] = Ve) : Ve = t[163];
    let He;
    t[164] === p ? He = t[165] : (He = p.formatMessage(Q.customModalCancelLabel), t[164] = p, t[165] = He);
    let Y;
    t[166] !== s || t[167] !== He ? (Y = (0, Z.jsx)(d.Button, {
        title: He,
        onClick: s
    }), t[166] = s, t[167] = He, t[168] = Y) : Y = t[168];
    let Ue;
    t[169] !== Ve || t[170] !== Y ? (Ue = (0, Z.jsx)(d.Actions, {
        primaryButton: Ve,
        secondaryButton: Y
    }), t[169] = Ve, t[170] = Y, t[171] = Ue) : Ue = t[171];
    let We;
    t[172] !== Re || t[173] !== Ue ? (We = (0, Z.jsxs)(`div`, {
        className: `px-6 pb-4`,
        children: [Re, Ue]
    }), t[172] = Re, t[173] = Ue, t[174] = We) : We = t[174];
    let Ge;
    t[175] !== pe || t[176] !== U || t[177] !== Le || t[178] !== We ? (Ge = (0, Z.jsxs)(`div`, {
        className: pe,
        children: [U, Le, We]
    }), t[175] = pe, t[176] = U, t[177] = Le, t[178] = We, t[179] = Ge) : Ge = t[179];
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
    return t[189] !== A || t[190] !== K || t[191] !== ge || t[192] !== q || t[193] !== qe ? (Je = (0, Z.jsx)(A, {
        isOpen: K,
        onClose: ge,
        testId: q,
        children: qe
    }), t[189] = A, t[190] = K, t[191] = ge, t[192] = q, t[193] = qe, t[194] = Je) : Je = t[194], Je
}

function et(e, t) {
    let n = t.replace(/\s+/g, ``);
    /^\d*$/.test(n) && e(n)
}
var tt, X, Z, nt, rt, Q, it, at, ot, st, ct, lt, ut, dt = e((() => {
        tt = I(), Oe(), xe(), J(), z(), U(), W(), he(), a(), se(), B(), C(), s(), T(), D(), u(), l(), X = t(N()), M(), Z = O(), nt = `text-token-link hover:text-token-link-hover underline`, rt = {
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
                newReleaseEntries: e.newReleaseEntries.filter(e => K({
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
    return e.newReleaseOptOutFlag === oe.LIBRARY_SHARING_GA_OPT_OUT
}

function xt(e) {
    return e.rbac ? [e.permissionName] : []
}
var St, Ct, $, wt, Tt, Et, Dt, Ot, kt, At = e((() => {
        St = I(), v(), Re(), te(), Pe(), ke(), Me(), b(), we(), _e(), We(), Ye(), a(), G(), y(), V(), E(), se(), h(), C(), s(), l(), Ct = t(N()), M(), _t(), $ = O(), wt = `text-token-link hover:text-token-link-hover underline`, Tt = e => {
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
                    workspaceId: r,
                    data: i,
                    preReleases: a,
                    handleSaveRole: s,
                    role: c,
                    showOptOutControls: l,
                    isRbacEnabled: u,
                    layout: f,
                    disableAllToggles: m,
                    disableRolePermissionWrites: h,
                    searchQuery: v,
                    sectionExpanded: y,
                    forceSectionExpanded: b,
                    onSectionExpandedChange: S,
                    renderHighlightedText: C,
                    renderSettingEntryControl: te,
                    getEntryPresentation: w,
                    renderRbacEntryControl: re,
                    useSitesPermissionSelect: ae,
                    effectiveRolePermissions: se,
                    onOptOutChange: T,
                    loadingAdminPreviewFeature: E,
                    onSetAdminPreviewAccess: D
                } = e,
                O = f === void 0 ? `card` : f,
                k = m !== void 0 && m,
                A = h !== void 0 && h,
                le = v === void 0 ? `` : v,
                M = b !== void 0 && b,
                N = ae === void 0 || ae,
                P = ue(),
                F = (0, Ct.useId)(),
                I = ie(r),
                R = g(),
                de = I ?? R,
                [z, B] = (0, Ct.useState)(null),
                V, fe, H, pe, me, U, W, he, G, K, q, _e, ve, ye, be, xe;
            if (t[0] !== de?.isHipaaCompliantWorkspace || t[1] !== i || t[2] !== k || t[3] !== A || t[4] !== se || t[5] !== M || t[6] !== w || t[7] !== s || t[8] !== P || t[9] !== u || t[10] !== O || t[11] !== E || t[12] !== T || t[13] !== S || t[14] !== D || t[15] !== z?.enableConfirmation || t[16] !== a || t[17] !== C || t[18] !== re || t[19] !== te || t[20] !== c || t[21] !== le || t[22] !== F || t[23] !== y || t[24] !== l || t[25] !== N || t[26] !== r) {
                ve = Symbol.for(`react.early_return_sentinel`);
                bb0: {
                    let e = gt({
                            intl: P,
                            preReleases: a,
                            searchQuery: le,
                            getEntryPresentation: w,
                            layout: O,
                            effectiveRolePermissions: se,
                            rolePermissions: c.permissions
                        }),
                        d = e.some(vt);
                    if (ft(le) && (O === `section` ? !d : e.length === 0)) {
                        ve = null;
                        break bb0
                    }
                    let f = O === `section` && !d,
                        p = f ? [] : e,
                        m = f || p.some(yt),
                        h = m ? kt.adminPreviewSection : kt.enterpriseBetaFeatureSection,
                        g = de?.isHipaaCompliantWorkspace ?? !1,
                        v = m ? kt.adminPreviewSectionDescription : p.some(bt) ? kt.enterpriseBetaFeaturePerFeatureReleaseDescription : O === `section` ? kt.enterpriseBetaFeatureJuly30SectionDescription : kt.enterpriseBetaFeatureSectionDescription,
                        b;t[43] !== v || t[44] !== P || t[45] !== C ? (b = C?.(P.formatMessage(v)), t[43] = v, t[44] = P, t[45] = C, t[46] = b) : b = t[46];
                    let ie = b,
                        ae = O !== `section` && e.length === 0 ? kt.enterpriseBetaFeatureEmptySectionDescription : g && d && !m ? (0, $.jsxs)(`div`, {
                            className: `flex flex-col gap-2`,
                            children: [(0, $.jsx)(`p`, {
                                children: ie ?? (0, $.jsx)(j, {
                                    ...v
                                })
                            }), (0, $.jsx)(`p`, {
                                className: `text-token-text-status-warning`,
                                children: (0, $.jsx)(j, {
                                    ...kt.enterpriseBetaFeatureSectionHipaaDescription
                                })
                            })]
                        }) : ie ?? v,
                        I;t[47] === P ? I = t[48] : (I = e => typeof e.title == `string` ? e.title : P.formatMessage(e.title), t[47] = P, t[48] = I),
                    fe = I;
                    let ue;t[49] === c.permissions ? ue = t[50] : (ue = (e, t) => {
                        let n = e.additionalPermissionNames ?? [];
                        return Te({
                            add: t,
                            currentPermissionNames: c.permissions,
                            permissionName: e.permissionName,
                            additionalPermissionNames: t ? n : [...n, ...e.permissionNamesToRemoveWhenDisabled ?? []]
                        })
                    }, t[49] = c.permissions, t[50] = ue);
                    let R = ue,
                        Ce;t[51] !== A || t[52] !== s ? (Ce = e => A ? Promise.resolve() : s(e), t[51] = A, t[52] = s, t[53] = Ce) : Ce = t[53];
                    let J = Ce,
                        we;t[54] !== R || t[55] !== c || t[56] !== J ? (we = (e, t) => J({
                        ...c,
                        permissions: R(e, t)
                    }), t[54] = R, t[55] = c, t[56] = J, t[57] = we) : we = t[57],
                    pe = we,
                    H = z?.enableConfirmation;
                    let Ee = O === `section` && y != null && S != null,
                        De = !Ee || M || y,
                        Oe, ke;t[58] !== P || t[59] !== C || t[60] !== h ? (Oe = P.formatMessage(h), ke = C?.(Oe), t[58] = P, t[59] = C, t[60] = h, t[61] = Oe, t[62] = ke) : (Oe = t[61], ke = t[62]);
                    let Me = ke;V = ge,
                    W = o(O === `section` ? o(`border-token-border-default gap-4 border-b pb-8 last:border-b-0`, De && `md:grid md:grid-cols-[minmax(0,240px)_minmax(0,1fr)] md:gap-x-[30px]`) : o(`border-token-border-default rounded-2xl border`, m ? `p-8!` : `p-6`), Se),
                    he = h,
                    t[63] !== De || t[64] !== M || t[65] !== Me || t[66] !== Ee || t[67] !== S || t[68] !== C || t[69] !== F || t[70] !== Oe || t[71] !== h ? (G = Ee ? (0, $.jsxs)(`span`, {
                        className: `flex items-center gap-3`,
                        children: [(0, $.jsx)(Fe, {
                            sectionTitle: Oe,
                            expanded: De,
                            controlsId: F,
                            disabled: M,
                            onExpandedChange: S
                        }), (0, $.jsx)(`span`, {
                            children: Me ?? (0, $.jsx)(j, {
                                ...h
                            })
                        })]
                    }) : C ? (0, $.jsx)(`span`, {
                        children: Me
                    }) : void 0, t[63] = De, t[64] = M, t[65] = Me, t[66] = Ee, t[67] = S, t[68] = C, t[69] = F, t[70] = Oe, t[71] = h, t[72] = G) : G = t[72],
                    K = O === `section` ? void 0 : m ? `text-base! leading-6! font-medium!` : `text-[18px]! leading-[26px]!`,
                    q = ae,
                    _e = Ee ? `ps-11` : O === `card` && m ? `text-xs! leading-[18px]!` : void 0,
                    ye = Ee ? F : void 0,
                    be = Ee && !De,
                    xe = De ? `flex flex-col gap-4` : `hidden`,
                    t[73] === f ? me = t[74] : (me = f && (0, $.jsx)(Dt, {}), t[73] = f, t[74] = me),
                    U = p.map(e => {
                        let t = new Set(e.newReleaseEntries.flatMap(xt)),
                            a = e.hideEarlyAccessBadge ? null : (0, $.jsx)(`span`, {
                                className: `inline-flex h-[18px] shrink-0 items-center justify-center rounded-[6px] bg-[var(--green-a50)] px-[5px] text-xs font-medium text-[light-dark(var(--green-600),var(--green-400))]`,
                                children: (0, $.jsx)(j, {
                                    ...kt.enterpriseBetaFeatureBadge
                                })
                            }),
                            s = e.newReleaseEntries.map((r, a) => {
                                let s = r.rbac ? r.permissionName : r.settingName,
                                    l = r.rbac ? r.additionalPermissionNames ?? [] : [],
                                    u = e.adminPreviewFeature == null ? w?.(r, t, e.newReleaseEntries[a + 1]) : void 0,
                                    d = u?.title ?? fe(r),
                                    f = r.rbac && r.dependsOnPermissionName != null && !(se ?? c.permissions).includes(r.dependsOnPermissionName),
                                    p = r.rbac && A,
                                    m = Le({
                                        isReadOnly: p,
                                        disabledReason: r.disabledReason
                                    }),
                                    h = k || p || r.disabled || f || e.adminPreviewFeature === `admin_preview_library_sharing` && i.admin_preview_launch_settings?.admin_preview_library_sharing == null,
                                    g = r.rbac && (r.dependsOnPermissionName != null || r.permissionNamesToRemoveWhenDisabled != null || r.enableConfirmation != null),
                                    v = r.rbac ? re?.(r, h, m, d) : null,
                                    y;
                                if (!r.rbac) y = te?.(r, h) ?? null;
                                else if (v != null) y = r.permissionName === ee.SitesAccess ? (0, $.jsx)(Ne, {
                                    children: v
                                }) : v;
                                else if (r.permissionName === ee.SitesAccess) y = N && ce() ? (0, $.jsx)(Ne, {
                                    children: (0, $.jsx)(je, {
                                        ariaLabel: d,
                                        role: c,
                                        handleSaveRole: J,
                                        disabled: h,
                                        disabledReason: m
                                    })
                                }) : (0, $.jsx)(Ne, {
                                    children: (0, $.jsx)(Ae, {
                                        ariaLabel: d,
                                        role: c,
                                        permissionName: r.permissionName,
                                        additionalPermissionNames: r.additionalPermissionNames,
                                        permissionNamesToRemoveWhenDisabled: r.permissionNamesToRemoveWhenDisabled,
                                        enableConfirmation: r.enableConfirmation,
                                        handleSaveRole: J,
                                        disabled: h,
                                        disabledReason: m,
                                        renderDisabledToggleAsOff: r.renderDisabledToggleAsOff
                                    })
                                });
                                else if (!g) y = (0, $.jsx)(Ae, {
                                    ariaLabel: d,
                                    role: c,
                                    permissionName: r.permissionName,
                                    handleSaveRole: J,
                                    disabled: h,
                                    disabledReason: m,
                                    renderDisabledToggleAsOff: r.renderDisabledToggleAsOff
                                });
                                else {
                                    let e = [r.permissionName, ...l],
                                        t = (0, $.jsx)(ne, {
                                            size: `normal`,
                                            "aria-label": d,
                                            checked: !(h && r.renderDisabledToggleAsOff) && e.every(e => c.permissions.includes(e)),
                                            onCheckedChange: e => {
                                                if (e && r.enableConfirmation) {
                                                    B(r);
                                                    return
                                                }
                                                pe(r, e)
                                            },
                                            disabled: h
                                        });
                                    y = h && m ? (0, $.jsx)(_, {
                                        label: P.formatMessage(m),
                                        children: t
                                    }) : t
                                }
                                return y == null ? null : (0, $.jsx)(`div`, {
                                    className: o(`flex justify-between gap-4 py-3`, O === `section` && e.adminPreviewFeature != null && `px-4`, u?.className),
                                    children: (0, $.jsxs)(`div`, {
                                        className: `flex w-full items-center justify-between gap-4`,
                                        children: [(0, $.jsxs)(`div`, {
                                            children: [(0, $.jsxs)(`div`, {
                                                className: `text-md flex items-center gap-2`,
                                                children: [u?.label ?? (C ? (0, $.jsx)(`span`, {
                                                    children: C(d)
                                                }) : P.formatMessage({
                                                    id: `workspaceSettings.templateTitle.enterpriseReleaseTitle`,
                                                    defaultMessage: `{name}`
                                                }, {
                                                    name: d
                                                })), e.adminPreviewFeature != null && (0, $.jsx)(L, {
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
                                                        children: (0, $.jsx)(x, {
                                                            className: `icon-sm`,
                                                            "aria-hidden": `true`
                                                        })
                                                    })
                                                })]
                                            }), (0, $.jsx)(Tt, {
                                                entry: r
                                            }), r.rbac && r.permissionName === ee.LibrarySharingManagementAccess && (0, $.jsx)(qe, {
                                                controlMode: i.library_sharing_control_mode,
                                                enabled: i.beta_settings.library_sharing_enabled ?? !1
                                            }), e.adminPreviewFeature != null && r.rbac && (0, $.jsxs)(`button`, {
                                                type: `button`,
                                                className: `interactive-button text-token-interactive-label-accent-accessible relative mt-1 text-xs`,
                                                "aria-busy": E === e.adminPreviewFeature,
                                                disabled: k || A || r.disabled || D == null,
                                                onClick: () => D?.(e, r),
                                                children: [(0, $.jsx)(j, {
                                                    ...i.admin_preview_launch_settings?.[e.adminPreviewFeature] == null ? kt.setAccess : kt.editAccess
                                                }), E === e.adminPreviewFeature && (0, $.jsx)(`span`, {
                                                    "aria-hidden": `true`,
                                                    className: `absolute start-full top-1/2 ms-1 -translate-y-1/2`,
                                                    children: (0, $.jsx)(n, {
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
                                                    children: y
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
                            children: [g && e.newReleaseEntries.length > 0 && (0, $.jsx)(`p`, {
                                className: `text-token-text-status-warning text-sm`,
                                children: (0, $.jsx)(j, {
                                    ...kt.enterpriseBetaFeatureSectionHipaaDescription
                                })
                            }), s]
                        }, e.adminPreviewFeature);
                        let d = e.description;
                        typeof d != `string` && (d = P.formatMessage(d));
                        let f = e.infoTooltip;
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
                                        }), a, f && (0, $.jsx)(_, {
                                            interactive: !0,
                                            label: (0, $.jsx)(j, {
                                                ...f.message,
                                                values: {
                                                    link: e => (0, $.jsx)(`a`, {
                                                        href: f.linkHref,
                                                        className: wt,
                                                        children: e
                                                    })
                                                }
                                            }),
                                            side: `top`,
                                            children: (0, $.jsx)(`button`, {
                                                type: `button`,
                                                "aria-label": P.formatMessage(f.ariaLabel),
                                                className: `text-token-text-tertiary hover:text-token-text-secondary focus-visible:outline-token-border-heavy inline-flex size-4 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2`,
                                                children: (0, $.jsx)(x, {
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
                                                name: C?.(d) ?? d,
                                                learnMore: t => (0, $.jsx)(`a`, {
                                                    href: e.helpCenterLink,
                                                    target: e.helpLinkOpenNewTab === !1 ? void 0 : `_blank`,
                                                    className: wt,
                                                    rel: e.helpLinkOpenNewTab === !1 ? void 0 : `noopener noreferrer`,
                                                    children: e.helpLinkLabel ? P.formatMessage(e.helpLinkLabel) : t
                                                })
                                            }
                                        }) : C?.(d) ?? d
                                    })]
                                }), g && m && e.newReleaseEntries.length > 0 && (0, $.jsx)(`p`, {
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
                            }), !(e.shouldHideOptOutButton ?? !1) && l && e.newReleaseOptOutFlag && (e.newReleaseOptOutFlag === oe.LIBRARY_SHARING_GA_OPT_OUT ? (0, $.jsx)(Je, {
                                betaSettingsDict: i.beta_settings_dict,
                                workspaceId: r,
                                feature: e.newReleaseOptOutFlag,
                                featureName: e.optOutFeatureName ?? e.name,
                                storedValue: i.beta_settings[e.newReleaseOptOutFlag],
                                isRbacEnabled: u,
                                disabled: k,
                                onChange: T
                            }) : (0, $.jsx)(ze, {
                                workspaceId: r,
                                feature: e.newReleaseOptOutFlag,
                                featureName: e.optOutFeatureName ?? e.name,
                                storedValue: i.beta_settings[e.newReleaseOptOutFlag],
                                isRbacEnabled: u,
                                disabled: k,
                                onChange: T
                            }))]
                        }, e.name)
                    })
                }
                t[0] = de?.isHipaaCompliantWorkspace, t[1] = i, t[2] = k, t[3] = A, t[4] = se, t[5] = M, t[6] = w, t[7] = s, t[8] = P, t[9] = u, t[10] = O, t[11] = E, t[12] = T, t[13] = S, t[14] = D, t[15] = z?.enableConfirmation, t[16] = a, t[17] = C, t[18] = re, t[19] = te, t[20] = c, t[21] = le, t[22] = F, t[23] = y, t[24] = l, t[25] = N, t[26] = r, t[27] = V, t[28] = fe, t[29] = H, t[30] = pe, t[31] = me, t[32] = U, t[33] = W, t[34] = he, t[35] = G, t[36] = K, t[37] = q, t[38] = _e, t[39] = ve, t[40] = ye, t[41] = be, t[42] = xe
            } else V = t[27], fe = t[28], H = t[29], pe = t[30], me = t[31], U = t[32], W = t[33], he = t[34], G = t[35], K = t[36], q = t[37], _e = t[38], ve = t[39], ye = t[40], be = t[41], xe = t[42];
            if (ve !== Symbol.for(`react.early_return_sentinel`)) return ve;
            let Ce;
            t[75] !== me || t[76] !== U || t[77] !== ye || t[78] !== be || t[79] !== xe ? (Ce = (0, $.jsxs)(`div`, {
                id: ye,
                hidden: be,
                className: xe,
                children: [me, U]
            }), t[75] = me, t[76] = U, t[77] = ye, t[78] = be, t[79] = xe, t[80] = Ce) : Ce = t[80];
            let J;
            t[81] !== fe || t[82] !== H || t[83] !== z || t[84] !== pe ? (J = z && H && (0, $.jsx)(p, {
                isOpen: !0,
                onClose: () => B(null),
                title: fe(z),
                testId: `modal-enterprise-permission-enable-confirmation`,
                primaryButton: (0, $.jsx)(d.Button, {
                    as: `button`,
                    color: `primary`,
                    loading: !1,
                    onClick: async () => {
                        await pe(z, !0), B(null)
                    },
                    children: (0, $.jsx)(j, {
                        ...kt.enterprisePermissionEnable
                    })
                }),
                secondaryButton: (0, $.jsx)(d.Button, {
                    as: `button`,
                    color: `ghost`,
                    onClick: () => B(null),
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
            }), t[81] = fe, t[82] = H, t[83] = z, t[84] = pe, t[85] = J) : J = t[85];
            let we;
            return t[86] !== V || t[87] !== W || t[88] !== he || t[89] !== G || t[90] !== K || t[91] !== q || t[92] !== _e || t[93] !== Ce || t[94] !== J ? (we = (0, $.jsxs)(V, {
                className: W,
                title: he,
                titleContent: G,
                titleClassName: K,
                description: q,
                descriptionClassName: _e,
                children: [Ce, J]
            }), t[86] = V, t[87] = W, t[88] = he, t[89] = G, t[90] = K, t[91] = q, t[92] = _e, t[93] = Ce, t[94] = J, t[95] = we) : we = t[95], we
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
    Re as _, At as a, Xe as c, ot as d, qe as f, Le as g, We as h, Et as i, rt as l, ze as m, It as n, gt as o, Ye as p, Ot as r, _t as s, Pt as t, dt as u
};
//# sourceMappingURL=222991e8-fggjb8xkrfpl2xrm.js.map
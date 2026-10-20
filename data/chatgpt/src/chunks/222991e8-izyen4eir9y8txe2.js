import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    BU as n,
    Cw as r,
    F7 as i,
    Gnt as a,
    HU as o,
    Iw as s,
    JT as c,
    Mz as l,
    Pw as u,
    Qst as d,
    R1 as f,
    Tw as p,
    X5 as m,
    Xy as h,
    Y1 as g,
    Y5 as _,
    YT as v,
    Z1 as y,
    Znt as b,
    Zy as x,
    aB as ee,
    b2 as S,
    bG as C,
    e0 as w,
    g2 as T,
    h2 as E,
    ix as te,
    jz as ne,
    lK as re,
    nct as ie,
    oB as ae,
    pG as D,
    rx as oe,
    uK as se,
    z7 as O
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as k,
    In as A,
    Ln as j,
    N as ce,
    Nn as M,
    Rn as N,
    Vn as P,
    p as F,
    s as I,
    wn as L,
    zn as le
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Hrt as ue,
    IHn as R,
    Ijt as z,
    LHn as B,
    Ljt as V,
    Urt as H
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    Av as de,
    By as U,
    Gg as fe,
    Ov as pe,
    Vy as W,
    jv as G,
    kv as me,
    qg as K
} from "./30901919-e8h11sw136qen6v0.js";
import {
    $o as q,
    Go as he,
    Ho as ge,
    Jb as _e,
    Jo as ve,
    Ko as ye,
    Qb as be,
    Wo as xe,
    Xb as Se,
    Yo as Ce,
    Zb as we,
    nb as Te,
    qy as Ee,
    tb as De
} from "./c2675c8c-ejvs9hq3rwjwsbcv.js";
import {
    d as Oe,
    r as ke
} from "./b411f8ca-ecsy1tzi0s10da2f.js";
import {
    a as Ae,
    i as je
} from "./a99a60c9-ghjrcm9qwz7p7unk.js";
import {
    d as Me,
    f as Ne,
    l as Pe
} from "./b90db9d2-m8if536i19ugk3ci.js";
import {
    n as Fe,
    t as Ie
} from "./e17f5811-j5lwk12d54wr78ja.js";
var Le, Re, ze = e((() => {
    N(), Le = A({
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
            feature: a,
            featureName: o,
            storedValue: s,
            isRbacEnabled: l,
            disabled: d,
            onChange: f,
            statusDescription: p,
            confirmationDescription: m
        } = e,
        h = d !== void 0 && d,
        g = le(),
        _ = ce(),
        [v, y] = (0, Ue.useState)(!1),
        b = s === !0,
        x = l ? b ? Y.enterpriseReleaseOptedOutDescription : Y.enterpriseReleaseOptedInDescription : b ? Y.enterpriseReleaseNonRbacOptedOutDescription : Y.enterpriseReleaseNonRbacOptedInDescription,
        ee = l ? Y.enterpriseReleaseOptOutDescription : Y.enterpriseReleaseNonRbacOptOutDescription,
        S;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (S = (e, t) => {
        t && y(!1)
    }, t[0] = S) : S = t[0];
    let C;
    t[1] === _ ? C = t[2] : (C = () => _.invalidateQueries({
        queryKey: [`workspace-settings`]
    }), t[1] = _, t[2] = C);
    let w;
    t[3] !== a || t[4] !== n ? (w = e => i.safePost(`/accounts/{account_id}/beta_features`, {
        parameters: {
            path: {
                account_id: n
            }
        },
        requestBody: {
            feature: a,
            value: e
        }
    }), t[3] = a, t[4] = n, t[5] = w) : w = t[5];
    let T;
    t[6] !== C || t[7] !== w ? (T = {
        onSuccess: S,
        onSettled: C,
        mutationFn: w
    }, t[6] = C, t[7] = w, t[8] = T) : T = t[8];
    let E = F(T),
        te;
    t[9] === E.isPending ? te = t[10] : (te = () => {
        E.isPending || y(!1)
    }, t[9] = E.isPending, t[10] = te);
    let ne = te,
        re;
    t[11] !== a || t[12] !== E || t[13] !== f ? (re = e => {
        f ? (f(a, e), y(!1)) : E.mutate(e)
    }, t[11] = a, t[12] = E, t[13] = f, t[14] = re) : re = t[14];
    let ie = re,
        ae;
    t[15] !== p || t[16] !== x ? (ae = p ?? (0, J.jsx)(M, {
        ...x,
        values: {
            strong: Ve
        }
    }), t[15] = p, t[16] = x, t[17] = ae) : ae = t[17];
    let D;
    t[18] === ae ? D = t[19] : (D = (0, J.jsx)(`span`, {
        className: `min-w-0 text-sm text-token-text-tertiary`,
        children: ae
    }), t[18] = ae, t[19] = D);
    let oe = b ? `secondary` : `primary`,
        se = h || E.isPending,
        O;
    t[20] !== g || t[21] !== b ? (O = g.formatMessage(b ? Y.enterpriseReleaseOptInButton : Y.enterpriseReleaseOptOutButton), t[20] = g, t[21] = b, t[22] = O) : O = t[22];
    let k;
    t[23] !== ie || t[24] !== b ? (k = () => {
        b ? ie(!1) : y(!0)
    }, t[23] = ie, t[24] = b, t[25] = k) : k = t[25];
    let A = b ? Y.enterpriseReleaseOptInButton : Y.enterpriseReleaseOptOutButton,
        j;
    t[26] === A ? j = t[27] : (j = (0, J.jsx)(M, {
        ...A
    }), t[26] = A, t[27] = j);
    let N;
    t[28] !== oe || t[29] !== se || t[30] !== O || t[31] !== k || t[32] !== j ? (N = (0, J.jsx)(c, {
        color: oe,
        size: `small`,
        disabled: se,
        loading: !1,
        label: O,
        onClick: k,
        children: j
    }), t[28] = oe, t[29] = se, t[30] = O, t[31] = k, t[32] = j, t[33] = N) : N = t[33];
    let P;
    t[34] !== N || t[35] !== D ? (P = (0, J.jsxs)(`div`, {
        className: `flex items-center justify-between gap-6 py-2`,
        children: [D, N]
    }), t[34] = N, t[35] = D, t[36] = P) : P = t[36];
    let I;
    t[37] === o ? I = t[38] : (I = (0, J.jsx)(M, {
        ...Y.enterpriseReleaseOptOutModalTitle,
        values: {
            name: o
        }
    }), t[37] = o, t[38] = I);
    let L;
    t[39] !== m || t[40] !== o || t[41] !== ee ? (L = m ?? (0, J.jsx)(M, {
        ...ee,
        values: {
            name: o
        }
    }), t[39] = m, t[40] = o, t[41] = ee, t[42] = L) : L = t[42];
    let ue;
    t[43] === ie ? ue = t[44] : (ue = () => ie(!0), t[43] = ie, t[44] = ue);
    let R;
    t[45] === Symbol.for(`react.memo_cache_sentinel`) ? (R = (0, J.jsx)(M, {
        ...Y.enterpriseReleaseOptOutConfirm
    }), t[45] = R) : R = t[45];
    let z;
    t[46] !== E.isPending || t[47] !== ue ? (z = (0, J.jsx)(u.Button, {
        as: `button`,
        color: `primary`,
        disabled: E.isPending,
        loading: E.isPending,
        onClick: ue,
        children: R
    }), t[46] = E.isPending, t[47] = ue, t[48] = z) : z = t[48];
    let B;
    t[49] === Symbol.for(`react.memo_cache_sentinel`) ? (B = (0, J.jsx)(M, {
        ...Y.enterpriseReleaseOptOutCancel
    }), t[49] = B) : B = t[49];
    let V;
    t[50] !== ne || t[51] !== E.isPending ? (V = (0, J.jsx)(u.Button, {
        as: `button`,
        color: `ghost`,
        disabled: E.isPending,
        onClick: ne,
        children: B
    }), t[50] = ne, t[51] = E.isPending, t[52] = V) : V = t[52];
    let H;
    t[53] !== ne || t[54] !== v || t[55] !== I || t[56] !== L || t[57] !== z || t[58] !== V ? (H = (0, J.jsx)(r, {
        isOpen: v,
        onClose: ne,
        title: I,
        description: L,
        testId: `modal-enterprise-release-opt-out`,
        primaryButton: z,
        secondaryButton: V
    }), t[53] = ne, t[54] = v, t[55] = I, t[56] = L, t[57] = z, t[58] = V, t[59] = H) : H = t[59];
    let de;
    return t[60] !== P || t[61] !== H ? (de = (0, J.jsxs)(J.Fragment, {
        children: [P, H]
    }), t[60] = P, t[61] = H, t[62] = de) : de = t[62], de
}

function Ve(e) {
    return (0, J.jsx)(`strong`, {
        children: e
    })
}
var He, Ue, J, Y, We = e((() => {
        He = L(), v(), s(), p(), O(), I(), Ue = t(P()), N(), J = k(), Y = j({
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
        Ge = L(), We(), N(), Ke = k(), qe = e => {
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
                children: n ? (0, Ke.jsx)(M, {
                    id: `chatgpt.workspace.permissions.library_sharing.policy.status.enabled`,
                    defaultMessage: `Library sharing is enabled for this workspace.`
                }) : (0, Ke.jsx)(M, {
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
                    children: (0, Ke.jsx)(M, {
                        id: `chatgpt.workspace.permissions.library_sharing.release.description.configured`,
                        defaultMessage: `Your configuration will be preserved after Early Release.`
                    })
                }), t[3] = e) : e = t[3], e
            }
            let i;
            t[4] === r.storedValue ? i = t[5] : (i = r.storedValue === !0 ? (0, Ke.jsx)(M, {
                id: `chatgpt.workspace.permissions.library_sharing.release.description.opted_out`,
                defaultMessage: `Automatic enablement after Early Release is opted out. Current sharing and role settings are unchanged.`
            }) : (0, Ke.jsx)(M, {
                id: `chatgpt.workspace.permissions.library_sharing.release.description.unconfigured`,
                defaultMessage: `You can configure Library sharing and role permissions during Early Release.`
            }), t[4] = r.storedValue, t[5] = i);
            let a;
            t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, Ke.jsx)(M, {
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
    showSharedUsageLimit: s = !1,
    disabled: c = !1,
    hideBottomBorder: l = !1,
    metadataDraft: u,
    onStageMetadata: d,
    onUnappliedChangesChange: f
}) {
    "use no forget";
    let p = le(),
        m = o(),
        h = w(E),
        g = w(T),
        _ = !h && a(`1261424157`),
        v = _ && s && a(`2634861725`),
        y = !!t,
        {
            data: b,
            isLoading: x,
            isFetching: ee,
            isError: S
        } = Te({
            workspaceId: e,
            roleId: t ?? ``,
            enabled: _ && y
        }),
        {
            data: C,
            isLoading: te
        } = De({
            workspaceId: e,
            roleId: t ?? ``,
            enabled: _ && y
        }),
        {
            upsertRoleMetadata: re,
            isPending: ie
        } = Oe({
            workspaceId: e,
            roleId: t ?? ``
        }),
        [ae, D] = (0, X.useState)(`none`),
        [oe, se] = (0, X.useState)(``),
        [O, k] = (0, X.useState)(!1),
        [A, j] = (0, X.useState)(``),
        [ce, N] = (0, X.useState)(`none`),
        [P, F] = (0, X.useState)(``),
        [I, L] = (0, X.useState)(!1),
        [ue, z] = (0, X.useState)(null),
        [B, V] = (0, X.useState)(!1),
        [H, de] = (0, X.useState)(null),
        [fe, pe] = (0, X.useState)(null),
        W = (0, X.useMemo)(() => C ? {
            low: C.low_credit_limit,
            medium: C.medium_credit_limit,
            high: C.high_credit_limit
        } : n, [C, n]),
        G = (0, X.useCallback)(e => p.formatMessage(Q.creditsPerWeek, {
            value: e
        }), [p]),
        me = (0, X.useCallback)(e => p.formatMessage(Q.creditsPerCalendarMonth, {
            value: e
        }), [p]),
        K = (0, X.useMemo)(() => ({
            low: G(W.low),
            medium: G(W.medium),
            high: G(W.high)
        }), [G, W.high, W.low, W.medium]),
        q = b != null,
        he = u ? {
            ...b?.metadata,
            ...u
        } : b?.metadata ?? null,
        ge = he?.soft_alert_credit_limit ?? null,
        _e = he?.hard_cap_credit_limit ?? null,
        be = he?.hard_cap_shared_credit_limit ?? null,
        xe = ge ?? _e ?? null,
        Se = be?.limit ?? null;
    (0, X.useEffect)(() => {
        if (!b) return;
        if (!xe) {
            D(`none`), se(``), k(!1), j(``);
            return
        }
        let e = ge?.limit ?? null,
            t = _e?.limit ?? null,
            n = t === 0,
            r = t != null,
            i = e ?? t ?? null;
        if (se(e == null ? t != null && !n ? String(t) : `` : String(e)), k(r), j(r && t != null ? String(t) : ``), !r && i != null && i === W.low) {
            D(`low`);
            return
        }
        if (!r && i != null && i === W.medium) {
            D(`medium`);
            return
        }
        if (!r && i != null && i === W.high) {
            D(`high`);
            return
        }
        D(i == null ? `none` : `custom`)
    }, [b, xe, ge, _e, W.high, W.low, W.medium]);
    let we = {
        low: String(W.low),
        medium: String(W.medium),
        high: String(W.high)
    };
    (0, X.useEffect)(() => {
        if (b) {
            if (Se == null) {
                N(`none`), F(``), z(null);
                return
            }
            F(String(Se)), z(null), N(`custom`)
        }
    }, [b, Se]);
    let Ee = (() => {
            switch (ae) {
                case `low`:
                    return we.low;
                case `medium`:
                    return we.medium;
                case `high`:
                    return we.high;
                case `custom`:
                    return oe;
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
            limitLabel: K.low
        }, {
            key: `medium`,
            label: p.formatMessage(Q.enforcementDropdownMediumUsageLabel),
            limitLabel: K.medium
        }, {
            key: `high`,
            label: p.formatMessage(Q.enforcementDropdownHighLabel),
            limitLabel: K.high
        }, {
            key: `custom`,
            label: p.formatMessage(Q.enforcementDropdownCustomLabel)
        }], [p, K.high, K.low, K.medium]),
        Ae = (0, X.useMemo)(() => ke.filter(e => e.key === `none` || e.key === `custom`), [ke]),
        je = p.formatMessage(Q.enforcementDropdownPlaceholder),
        Me = ke.find(e => e.key === ae) ?? null,
        Ne = Me?.label ?? je,
        Pe = Me?.limitLabel,
        Fe = ae === `custom` ? O && A.trim() ? G(A.trim()) : oe.trim() ? G(oe.trim()) : Ne : (Me && Pe ? Pe : Ne) ?? je,
        Ie = !Me || Me.key === `none`,
        Le = _ && y && (x && !b || te && !C),
        Re = ie || fe != null,
        ze = d == null && S && !q,
        Be = c || d != null && g || Re || ee || !q && !ze,
        Ve = c || d != null && g || Re || ee || !q && !ze,
        He = fe === `usage`,
        Ue = fe === `shared`,
        J = async ({
            selectionKey: e,
            alertLimitOverride: n,
            hardCapEnabledOverride: r,
            hardCapLimitOverride: i
        }) => {
            if (!t || c) return;
            let a = ((e === `custom` ? n ?? oe : e === `low` || e === `medium` || e === `high` ? we[e] ?? `` : ``) ?? ``).trim(),
                o = a === `` ? NaN : Number(a),
                s = e === `custom` && (r ?? O) ? (i ?? A ?? ``).trim() : ``,
                l = s === `` ? NaN : Number(s),
                u = e === `custom` && s !== ``,
                f = u && Number.isFinite(l) && l === 0;
            if (e !== `none` && e !== `none` && (e !== `custom` || u && !f) && (a === `` || !Number.isFinite(o) || o <= 0)) {
                de(a === `` ? p.formatMessage(Q.alertRequiredForHardCap) : p.formatMessage(Q.invalidLimit));
                return
            }
            if (u && (s === `` || !Number.isFinite(l) || l < 0)) {
                de(p.formatMessage(Q.invalidLimit));
                return
            }
            de(null);
            let h = ct({
                selectionKey: e,
                trimmedSelectionAlert: a,
                parsedSelectionAlert: o,
                hasCustomHardCap: u,
                parsedSelectionHardCap: l,
                isHardCapZero: f
            });
            if (d) {
                if (b == null) throw Error(`Role metadata must load before editing usage limits`);
                d(h, b);
                return
            }
            try {
                pe(`usage`), await re(h), m.success(p.formatMessage(Q.submitSuccess))
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
            let r = (e === `custom` ? n ?? P : ``).trim(),
                i = r === `` ? NaN : Number(r);
            if (e !== `none` && (r === `` || !Number.isFinite(i) || i < 0)) {
                z(p.formatMessage(Q.sharedUsageInvalidLimit));
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
                pe(`shared`), await re(a), m.success(p.formatMessage(Q.submitSuccess))
            } catch {
                m.danger(p.formatMessage(Q.submitError))
            } finally {
                pe(null)
            }
        }, We = e => {
            if (!Be) {
                if (e.key === `custom`) {
                    V(!0);
                    return
                }
                D(e.key), J({
                    selectionKey: e.key
                })
            }
        }, Ge = e => {
            if (!Ve) {
                if (e.key === `custom`) {
                    L(!0);
                    return
                }
                N(e.key), Y({
                    selectionKey: e.key
                })
            }
        }, Ke = ({
            alertLimit: e,
            hardCapEnabled: t,
            hardCapLimit: n
        }) => {
            se(e), k(t), j(t ? n : ``), D(`custom`), V(!1), J({
                selectionKey: `custom`,
                alertLimitOverride: e,
                hardCapEnabledOverride: t,
                hardCapLimitOverride: t ? n : ``
            })
        }, qe = e => {
            F(e), N(`custom`), L(!1), Y({
                selectionKey: `custom`,
                limitOverride: e
            })
        }, Je = oe === `` ? Ee : oe, Ye = O, Xe = A, Qe = Ae.find(e => e.key === ce) ?? null, et = Qe?.label ?? je, tt = ce === `custom` && P.trim() ? me(P.trim()) : et, it = !Qe || Qe.key === `none`;
    return !_ || !y || !ot({
        searchQuery: r,
        intl: p,
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
            onUnappliedChangesChange: f
        }), v && (0, Z.jsx)(Ze, {
            isOpen: !c && I,
            limit: P,
            onClose: () => L(!1),
            onSave: qe,
            isStaging: d != null,
            onUnappliedChangesChange: f
        }), (0, Z.jsx)(ye, {
            children: Le ? (0, Z.jsx)(`div`, {
                className: `flex h-24 items-center justify-center`,
                children: (0, Z.jsx)(ne, {
                    className: `text-token-text-tertiary h-6 w-6`
                })
            }) : (0, Z.jsxs)(ve, {
                className: l ? `border-b-0` : ``,
                children: [(0, Z.jsx)(Ce, {
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
                            children: [He && (0, Z.jsx)(ne, {
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
                                    }), (0, Z.jsx)(U, {
                                        className: `text-token-text-tertiary h-3.5 w-3.5 shrink-0`
                                    })]
                                }), (0, Z.jsx)(R.Portal, {
                                    children: (0, Z.jsxs)(R.Content, {
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
                                                children: (0, Z.jsx)(M, {
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
                }), v && (0, Z.jsx)(Ce, {
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
                                children: [Ue && (0, Z.jsx)(ne, {
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
                                        }), (0, Z.jsx)(U, {
                                            className: `text-token-text-tertiary h-3.5 w-3.5 shrink-0`
                                        })]
                                    }), (0, Z.jsx)(R.Portal, {
                                        children: (0, Z.jsxs)(R.Content, {
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
                            }), ue && (0, Z.jsx)(`div`, {
                                className: `text-interactive-label-warning-secondary text-xs`,
                                children: ue
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
        l = le(),
        [d, f] = (0, X.useState)(r),
        [p, m] = (0, X.useState)(!1),
        h;
    t[0] !== n || t[1] !== c || t[2] !== r || t[3] !== d ? (h = c && n && d.trim() !== r.trim(), t[0] = n, t[1] = c, t[2] = r, t[3] = d, t[4] = h) : h = t[4];
    let g = h,
        _, v;
    t[5] !== g || t[6] !== s ? (_ = () => {
        if (g) return s?.(!0), () => s?.(!1)
    }, v = [g, s], t[5] = g, t[6] = s, t[7] = _, t[8] = v) : (_ = t[7], v = t[8]), (0, X.useEffect)(_, v);
    let y, b;
    t[9] !== n || t[10] !== r ? (y = () => {
        n && (f(r), m(!1))
    }, b = [n, r], t[9] = n, t[10] = r, t[11] = y, t[12] = b) : (y = t[11], b = t[12]), (0, X.useEffect)(y, b);
    let x;
    t[13] === p ? x = t[14] : (x = e => {
        let t = e.replace(/\s+/g, ``);
        /^\d*$/.test(t) && (f(t), p && m(!1))
    }, t[13] = p, t[14] = x);
    let ee = x,
        S;
    t[15] === d ? S = t[16] : (S = d.trim(), t[15] = d, t[16] = S);
    let C = S,
        w = C === `` ? NaN : Number(C),
        T;
    t[17] !== w || t[18] !== C ? (T = C !== `` && Number.isFinite(w) && w >= 0, t[17] = w, t[18] = C, t[19] = T) : T = t[19];
    let E = T,
        te;
    t[20] !== l || t[21] !== E ? (te = E ? `` : l.formatMessage(Q.sharedUsageInvalidLimit), t[20] = l, t[21] = E, t[22] = te) : te = t[22];
    let ne = te,
        re = p && !!ne,
        ie = re ? ne : void 0,
        ae = `pe-36${ie?` text-interactive-label-warning-secondary placeholder:text-interactive-label-warning-secondary`:``}`,
        D = ie ? `border-token-border-error focus-within:border-token-border-error focus-within:ring-token-border-error` : void 0,
        oe;
    t[23] === l ? oe = t[24] : (oe = l.formatMessage(Q.sharedUsageLimitCreditsSuffix), t[23] = l, t[24] = oe);
    let se = oe,
        O;
    t[25] === i ? O = t[26] : (O = e => {
        e || i()
    }, t[25] = i, t[26] = O);
    let k;
    t[27] === l ? k = t[28] : (k = l.formatMessage(Q.customSharedUsageLimitTitle), t[27] = l, t[28] = k);
    let A;
    t[29] === k ? A = t[30] : (A = (0, Z.jsx)(`div`, {
        className: `text-lg font-semibold`,
        children: k
    }), t[29] = k, t[30] = A);
    let j;
    t[31] === l ? j = t[32] : (j = l.formatMessage(Q.customModalCancelLabel), t[31] = l, t[32] = j);
    let ce;
    t[33] === Symbol.for(`react.memo_cache_sentinel`) ? (ce = (0, Z.jsx)(de, {
        className: `h-4 w-4`
    }), t[33] = ce) : ce = t[33];
    let M;
    t[34] !== i || t[35] !== j ? (M = (0, Z.jsx)(`button`, {
        type: `button`,
        className: `text-token-text-tertiary hover:text-token-text-primary rounded-full p-1`,
        onClick: i,
        "aria-label": j,
        children: ce
    }), t[34] = i, t[35] = j, t[36] = M) : M = t[36];
    let N;
    t[37] !== A || t[38] !== M ? (N = (0, Z.jsx)(u.Header, {
        className: `px-6 ps-6 pt-6 pb-0`,
        title: A,
        closeButton: M
    }), t[37] = A, t[38] = M, t[39] = N) : N = t[39];
    let P;
    t[40] === l ? P = t[41] : (P = l.formatMessage(Q.customSharedUsageLimitDescription), t[40] = l, t[41] = P);
    let F;
    t[42] === P ? F = t[43] : (F = (0, Z.jsx)(`p`, {
        className: `text-token-text-tertiary text-xs leading-relaxed`,
        children: P
    }), t[42] = P, t[43] = F);
    let I;
    t[44] === l ? I = t[45] : (I = l.formatMessage(Q.customSharedUsageLimitAriaLabel), t[44] = l, t[45] = I);
    let L;
    t[46] === ee ? L = t[47] : (L = e => ee(e.target.value), t[46] = ee, t[47] = L);
    let R;
    t[48] === se ? R = t[49] : (R = (0, Z.jsx)(`span`, {
        className: `text-token-text-primary pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 text-xs`,
        children: se
    }), t[48] = se, t[49] = R);
    let z;
    t[50] !== D || t[51] !== ae || t[52] !== ie || t[53] !== I || t[54] !== L || t[55] !== R || t[56] !== d ? (z = (0, Z.jsx)(ue, {
        name: `custom-shared-usage-limit`,
        ariaLabel: I,
        inputMode: `numeric`,
        value: d,
        onChange: L,
        className: D,
        insideContainerChildren: R,
        inputClassName: ae,
        showErrorIcon: !1,
        showInlineErrorMessage: !1,
        error: ie
    }), t[50] = D, t[51] = ae, t[52] = ie, t[53] = I, t[54] = L, t[55] = R, t[56] = d, t[57] = z) : z = t[57];
    let B;
    t[58] !== F || t[59] !== z ? (B = (0, Z.jsxs)(`div`, {
        className: `flex flex-col gap-3 px-6 text-sm`,
        children: [F, z]
    }), t[58] = F, t[59] = z, t[60] = B) : B = t[60];
    let V;
    t[61] !== ne || t[62] !== re ? (V = re && (0, Z.jsxs)(`div`, {
        className: `text-interactive-label-warning-secondary mb-3 flex items-center gap-2 text-xs`,
        children: [(0, Z.jsx)(pe, {
            className: `h-4 w-4`,
            "aria-hidden": `true`
        }), (0, Z.jsx)(`span`, {
            children: ne
        })]
    }), t[61] = ne, t[62] = re, t[63] = V) : V = t[63];
    let H;
    t[64] !== l || t[65] !== c ? (H = l.formatMessage(c ? Q.customModalApplyLabel : Q.customModalSaveLabel), t[64] = l, t[65] = c, t[66] = H) : H = t[66];
    let U = !E,
        fe = !E,
        W;
    t[67] !== E || t[68] !== a || t[69] !== C ? (W = () => {
        m(!0), E && a(C)
    }, t[67] = E, t[68] = a, t[69] = C, t[70] = W) : W = t[70];
    let G;
    t[71] !== H || t[72] !== U || t[73] !== fe || t[74] !== W ? (G = (0, Z.jsx)(u.Button, {
        color: `primary`,
        title: H,
        visuallyDisabled: U,
        "aria-disabled": fe,
        onClick: W
    }), t[71] = H, t[72] = U, t[73] = fe, t[74] = W, t[75] = G) : G = t[75];
    let me;
    t[76] === l ? me = t[77] : (me = l.formatMessage(Q.customModalCancelLabel), t[76] = l, t[77] = me);
    let K;
    t[78] !== i || t[79] !== me ? (K = (0, Z.jsx)(u.Button, {
        title: me,
        onClick: i
    }), t[78] = i, t[79] = me, t[80] = K) : K = t[80];
    let q;
    t[81] !== G || t[82] !== K ? (q = (0, Z.jsx)(u.Actions, {
        primaryButton: G,
        secondaryButton: K
    }), t[81] = G, t[82] = K, t[83] = q) : q = t[83];
    let he;
    t[84] !== V || t[85] !== q ? (he = (0, Z.jsxs)(`div`, {
        className: `px-6 pb-4`,
        children: [V, q]
    }), t[84] = V, t[85] = q, t[86] = he) : he = t[86];
    let ge;
    t[87] !== N || t[88] !== B || t[89] !== he ? (ge = (0, Z.jsx)(u.Overlay, {
        children: (0, Z.jsx)(u.Content, {
            position: `center`,
            className: `start-auto col-start-1 row-start-1 w-full max-w-sm ltr:translate-x-0 rtl:translate-x-0`,
            containerClassName: `grid grid-cols-1 grid-rows-1 place-items-center`,
            children: (0, Z.jsxs)(`div`, {
                className: `flex flex-col gap-4`,
                children: [N, B, he]
            })
        })
    }), t[87] = N, t[88] = B, t[89] = he, t[90] = ge) : ge = t[90];
    let _e;
    return t[91] !== n || t[92] !== O || t[93] !== ge ? (_e = (0, Z.jsx)(u.Root, {
        isOpen: n,
        onClose: O,
        testId: `modal-custom-shared-usage-limit`,
        children: ge
    }), t[91] = n, t[92] = O, t[93] = ge, t[94] = _e) : _e = t[94], _e
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
            onClose: o,
            onSave: s,
            isStaging: c,
            onUnappliedChangesChange: l
        } = e,
        d = c !== void 0 && c,
        f = le(),
        [p, m] = (0, X.useState)(r),
        [h, g] = (0, X.useState)(i),
        [v, y] = (0, X.useState)(a),
        [b, x] = (0, X.useState)(!1),
        ee;
    t[0] !== r || t[1] !== p || t[2] !== i || t[3] !== a || t[4] !== v || t[5] !== h || t[6] !== n || t[7] !== d ? (ee = d && n && (p.trim() !== r.trim() || h !== i || h && v.trim() !== a.trim()), t[0] = r, t[1] = p, t[2] = i, t[3] = a, t[4] = v, t[5] = h, t[6] = n, t[7] = d, t[8] = ee) : ee = t[8];
    let S = ee,
        C, w;
    t[9] !== S || t[10] !== l ? (C = () => {
        if (S) return l?.(!0), () => l?.(!1)
    }, w = [S, l], t[9] = S, t[10] = l, t[11] = C, t[12] = w) : (C = t[11], w = t[12]), (0, X.useEffect)(C, w);
    let T, E;
    t[13] !== r || t[14] !== i || t[15] !== a || t[16] !== n ? (T = () => {
        n && (m(r), g(i), y(a), x(!1))
    }, E = [r, i, a, n], t[13] = r, t[14] = i, t[15] = a, t[16] = n, t[17] = T, t[18] = E) : (T = t[17], E = t[18]), (0, X.useEffect)(T, E);
    let te, ne;
    t[19] === h ? (te = t[20], ne = t[21]) : (te = () => {
        h || x(!1)
    }, ne = [h], t[19] = h, t[20] = te, t[21] = ne), (0, X.useEffect)(te, ne);
    let re, ie;
    t[22] !== p || t[23] !== v || t[24] !== h ? (ie = () => {
        h && v.trim() === `0` && p !== `` && m(``)
    }, re = [p, v, h], t[22] = p, t[23] = v, t[24] = h, t[25] = re, t[26] = ie) : (re = t[25], ie = t[26]), (0, X.useEffect)(ie, re);
    let ae;
    t[27] === b ? ae = t[28] : (ae = () => {
        b && x(!1)
    }, t[27] = b, t[28] = ae);
    let D = ae,
        se, O;
    if (t[29] !== D) {
        se = t => {
            e(m, t), D()
        }, O = t => {
            e(y, t), D()
        };
        let e = et;
        t[29] = D, t[30] = se, t[31] = O
    } else se = t[30], O = t[31];
    let k, A, j, ce, M, N, P, F, I, L, R, z, B, V, H, U, fe, W, G, me, K, q, he, ge;
    if (t[32] !== p || t[33] !== v || t[34] !== b || t[35] !== f || t[36] !== h || t[37] !== n || t[38] !== o) {
        let {
            alertTrimmed: e,
            hardCapTrimmed: r,
            hasAlertValue: i,
            hasHardCapValue: a,
            isHardCapZero: s,
            isAlertValid: c,
            isHardCapValid: l,
            hasHardCapConflict: d,
            alertErrorMessage: m,
            hardCapErrorMessage: g
        } = Qe({
            alertValue: p,
            hardCapValue: v,
            isHardCapEnabled: h,
            intl: f
        });
        M = e, I = r, R = s, L = R, z = !i && !a || !c || !l || d;
        let y = b && (!!m || !!g);
        B = y ? g || m : ``, ce = y && m ? m : void 0, F = y && g ? g : void 0, N = F ? `border-token-border-error focus-within:border-token-border-error focus-within:ring-token-border-error` : void 0, P = `pe-24${F?` text-interactive-label-warning-secondary placeholder:text-interactive-label-warning-secondary`:``}`;
        let x;
        t[63] === f ? x = t[64] : (x = f.formatMessage(Q.customModalCreditsSuffix), t[63] = f, t[64] = x), V = x, j = u.Root, q = n, t[65] === o ? he = t[66] : (he = e => {
            e || o()
        }, t[65] = o, t[66] = he), ge = `modal-custom-usage-limit`, A = u.Overlay, k = u.Content, G = `center`, me = `start-auto col-start-1 row-start-1 w-full max-w-sm ltr:translate-x-0 rtl:translate-x-0`, K = `grid grid-cols-1 grid-rows-1 place-items-center`, fe = `flex flex-col gap-4`;
        let ee;
        t[67] === f ? ee = t[68] : (ee = f.formatMessage(Q.customModalTitle), t[67] = f, t[68] = ee);
        let S;
        t[69] === ee ? S = t[70] : (S = (0, Z.jsx)(`div`, {
            className: `text-lg font-semibold`,
            children: ee
        }), t[69] = ee, t[70] = S);
        let C;
        t[71] === f ? C = t[72] : (C = f.formatMessage(Q.customModalCancelLabel), t[71] = f, t[72] = C);
        let w;
        t[73] === Symbol.for(`react.memo_cache_sentinel`) ? (w = (0, Z.jsx)(de, {
            className: `h-4 w-4`
        }), t[73] = w) : w = t[73];
        let T;
        t[74] !== o || t[75] !== C ? (T = (0, Z.jsx)(`button`, {
            type: `button`,
            className: `text-token-text-tertiary hover:text-token-text-primary rounded-full p-1`,
            onClick: o,
            "aria-label": C,
            children: w
        }), t[74] = o, t[75] = C, t[76] = T) : T = t[76], t[77] !== S || t[78] !== T ? (W = (0, Z.jsx)(u.Header, {
            className: `px-6 ps-6 pt-6 pb-0`,
            title: S,
            closeButton: T
        }), t[77] = S, t[78] = T, t[79] = W) : W = t[79], U = `flex flex-col gap-6 px-6 text-sm`, H = _(`flex flex-col gap-3`, L && `opacity-50`), t[32] = p, t[33] = v, t[34] = b, t[35] = f, t[36] = h, t[37] = n, t[38] = o, t[39] = k, t[40] = A, t[41] = j, t[42] = ce, t[43] = M, t[44] = N, t[45] = P, t[46] = F, t[47] = I, t[48] = L, t[49] = R, t[50] = z, t[51] = B, t[52] = V, t[53] = H, t[54] = U, t[55] = fe, t[56] = W, t[57] = G, t[58] = me, t[59] = K, t[60] = q, t[61] = he, t[62] = ge
    } else k = t[39], A = t[40], j = t[41], ce = t[42], M = t[43], N = t[44], P = t[45], F = t[46], I = t[47], L = t[48], R = t[49], z = t[50], B = t[51], V = t[52], H = t[53], U = t[54], fe = t[55], W = t[56], G = t[57], me = t[58], K = t[59], q = t[60], he = t[61], ge = t[62];
    let _e;
    t[80] === f ? _e = t[81] : (_e = f.formatMessage(Q.customModalSetAlertLabel), t[80] = f, t[81] = _e);
    let ve;
    t[82] === _e ? ve = t[83] : (ve = (0, Z.jsx)(`div`, {
        className: `text-token-text-primary font-medium`,
        children: _e
    }), t[82] = _e, t[83] = ve);
    let ye;
    t[84] === f ? ye = t[85] : (ye = f.formatMessage(Q.customModalSetAlertDescription), t[84] = f, t[85] = ye);
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
    t[91] === f ? Se = t[92] : (Se = f.formatMessage(Q.customModalSetAlertLabel), t[91] = f, t[92] = Se);
    let Ce;
    t[93] === se ? Ce = t[94] : (Ce = e => se(e.target.value), t[93] = se, t[94] = Ce);
    let we;
    t[95] === V ? we = t[96] : (we = (0, Z.jsx)(`span`, {
        className: `text-token-text-primary pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 text-xs`,
        children: V
    }), t[95] = V, t[96] = we);
    let Te;
    t[97] !== ce || t[98] !== p || t[99] !== L || t[100] !== Se || t[101] !== Ce || t[102] !== we ? (Te = (0, Z.jsx)(ue, {
        name: `custom-alert-limit`,
        ariaLabel: Se,
        inputMode: `numeric`,
        value: p,
        onChange: Ce,
        disabled: L,
        insideContainerChildren: we,
        inputClassName: `pe-24`,
        showErrorIcon: !1,
        showInlineErrorMessage: !1,
        error: ce
    }), t[97] = ce, t[98] = p, t[99] = L, t[100] = Se, t[101] = Ce, t[102] = we, t[103] = Te) : Te = t[103];
    let Ee;
    t[104] !== f || t[105] !== L ? (Ee = L && (0, Z.jsx)(`div`, {
        className: `text-token-text-warning text-xs`,
        children: f.formatMessage(Q.customModalAlertDisabledNote)
    }), t[104] = f, t[105] = L, t[106] = Ee) : Ee = t[106];
    let De;
    t[107] !== H || t[108] !== xe || t[109] !== Te || t[110] !== Ee ? (De = (0, Z.jsxs)(`div`, {
        className: H,
        children: [xe, Te, Ee]
    }), t[107] = H, t[108] = xe, t[109] = Te, t[110] = Ee, t[111] = De) : De = t[111];
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
    t[118] === D ? je = t[119] : (je = e => {
        g(!!e), D()
    }, t[118] = D, t[119] = je);
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
    t[131] !== O || t[132] !== N || t[133] !== P || t[134] !== F || t[135] !== v || t[136] !== f || t[137] !== h || t[138] !== V ? (Ie = h && (0, Z.jsx)(Z.Fragment, {
        children: (0, Z.jsx)(ue, {
            name: `custom-hard-cap-limit`,
            ariaLabel: f.formatMessage(Q.customModalSetHardCapLabel),
            inputMode: `numeric`,
            value: v,
            onChange: e => O(e.target.value),
            className: N,
            insideContainerChildren: (0, Z.jsx)(`span`, {
                className: `text-token-text-primary pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 text-xs`,
                children: V
            }),
            inputClassName: P,
            showErrorIcon: !1,
            showInlineErrorMessage: !1,
            error: F
        })
    }), t[131] = O, t[132] = N, t[133] = P, t[134] = F, t[135] = v, t[136] = f, t[137] = h, t[138] = V, t[139] = Ie) : Ie = t[139];
    let Le;
    t[140] !== Ne || t[141] !== Fe || t[142] !== Ie ? (Le = (0, Z.jsxs)(`div`, {
        className: `flex flex-col gap-3`,
        children: [Ne, Fe, Ie]
    }), t[140] = Ne, t[141] = Fe, t[142] = Ie, t[143] = Le) : Le = t[143];
    let Re;
    t[144] !== U || t[145] !== De || t[146] !== Le ? (Re = (0, Z.jsxs)(`div`, {
        className: U,
        children: [De, Le]
    }), t[144] = U, t[145] = De, t[146] = Le, t[147] = Re) : Re = t[147];
    let ze;
    t[148] === B ? ze = t[149] : (ze = B && (0, Z.jsxs)(`div`, {
        className: `text-interactive-label-warning-secondary mb-3 flex items-center gap-2 text-xs`,
        children: [(0, Z.jsx)(pe, {
            className: `h-4 w-4`,
            "aria-hidden": `true`
        }), (0, Z.jsx)(`span`, {
            children: B
        })]
    }), t[148] = B, t[149] = ze);
    let Be;
    t[150] !== f || t[151] !== d ? (Be = f.formatMessage(d ? Q.customModalApplyLabel : Q.customModalSaveLabel), t[150] = f, t[151] = d, t[152] = Be) : Be = t[152];
    let Ve;
    t[153] !== M || t[154] !== I || t[155] !== h || t[156] !== R || t[157] !== z || t[158] !== s ? (Ve = () => {
        x(!0), !z && s({
            alertLimit: R ? `` : M,
            hardCapEnabled: h,
            hardCapLimit: h ? I : ``
        })
    }, t[153] = M, t[154] = I, t[155] = h, t[156] = R, t[157] = z, t[158] = s, t[159] = Ve) : Ve = t[159];
    let He;
    t[160] !== z || t[161] !== Be || t[162] !== Ve ? (He = (0, Z.jsx)(u.Button, {
        color: `primary`,
        title: Be,
        visuallyDisabled: z,
        "aria-disabled": z,
        onClick: Ve
    }), t[160] = z, t[161] = Be, t[162] = Ve, t[163] = He) : He = t[163];
    let Ue;
    t[164] === f ? Ue = t[165] : (Ue = f.formatMessage(Q.customModalCancelLabel), t[164] = f, t[165] = Ue);
    let J;
    t[166] !== o || t[167] !== Ue ? (J = (0, Z.jsx)(u.Button, {
        title: Ue,
        onClick: o
    }), t[166] = o, t[167] = Ue, t[168] = J) : J = t[168];
    let Y;
    t[169] !== He || t[170] !== J ? (Y = (0, Z.jsx)(u.Actions, {
        primaryButton: He,
        secondaryButton: J
    }), t[169] = He, t[170] = J, t[171] = Y) : Y = t[171];
    let We;
    t[172] !== ze || t[173] !== Y ? (We = (0, Z.jsxs)(`div`, {
        className: `px-6 pb-4`,
        children: [ze, Y]
    }), t[172] = ze, t[173] = Y, t[174] = We) : We = t[174];
    let Ge;
    t[175] !== fe || t[176] !== W || t[177] !== Re || t[178] !== We ? (Ge = (0, Z.jsxs)(`div`, {
        className: fe,
        children: [W, Re, We]
    }), t[175] = fe, t[176] = W, t[177] = Re, t[178] = We, t[179] = Ge) : Ge = t[179];
    let Ke;
    t[180] !== k || t[181] !== G || t[182] !== me || t[183] !== K || t[184] !== Ge ? (Ke = (0, Z.jsx)(k, {
        position: G,
        className: me,
        containerClassName: K,
        children: Ge
    }), t[180] = k, t[181] = G, t[182] = me, t[183] = K, t[184] = Ge, t[185] = Ke) : Ke = t[185];
    let qe;
    t[186] !== A || t[187] !== Ke ? (qe = (0, Z.jsx)(A, {
        children: Ke
    }), t[186] = A, t[187] = Ke, t[188] = qe) : qe = t[188];
    let Je;
    return t[189] !== j || t[190] !== q || t[191] !== he || t[192] !== ge || t[193] !== qe ? (Je = (0, Z.jsx)(j, {
        isOpen: q,
        onClose: he,
        testId: ge,
        children: qe
    }), t[189] = j, t[190] = q, t[191] = he, t[192] = ge, t[193] = qe, t[194] = Je) : Je = t[194], Je
}

function et(e, t) {
    let n = t.replace(/\s+/g, ``);
    /^\d*$/.test(n) && e(n)
}
var tt, X, Z, nt, rt, Q, it, at, ot, st, ct, lt, ut, dt = e((() => {
        tt = L(), ke(), Ee(), q(), B(), W(), G(), me(), s(), te(), H(), l(), f(), S(), n(), b(), m(), X = t(P()), N(), Z = k(), nt = `text-token-link hover:text-token-link-hover underline`, rt = {
            low: 300,
            medium: 400,
            high: 550
        }, Q = j({
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
        be(), ft = e => e.trim().toLowerCase(), pt = (e, t, n) => e == null ? `` : typeof e == `string` ? e : String(t.formatMessage(e, n)), mt = (e, ...t) => !e || t.join(` `).toLowerCase().includes(e), ht = ({
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
            let o = _e(t.flatMap(e => e.newReleaseEntries)),
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
                newReleaseEntries: e.newReleaseEntries.filter(e => we({
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
    return e.newReleaseOptOutFlag === d.LIBRARY_SHARING_GA_OPT_OUT
}

function xt(e) {
    return e.rbac ? [e.permissionName] : []
}
var St, Ct, $, wt, Tt, Et, Dt, Ot, kt, At = e((() => {
        St = L(), ie(), ze(), se(), Fe(), Ae(), Ne(), D(), be(), xe(), We(), Ye(), s(), K(), ae(), V(), p(), te(), x(), l(), f(), m(), Ct = t(P()), N(), _t(), $ = k(), wt = `text-token-link hover:text-token-link-hover underline`, Tt = e => {
            "use forget";
            let t = (0, St.c)(9),
                {
                    entry: n
                } = e;
            if (!n.description && !n.additionalDescription) return null;
            let r;
            t[0] !== n.description || t[1] !== n.descriptionValues ? (r = n.description && (0, $.jsx)(`div`, {
                children: (0, $.jsx)(M, {
                    ...n.description,
                    values: n.descriptionValues
                })
            }), t[0] = n.description, t[1] = n.descriptionValues, t[2] = r) : r = t[2];
            let i;
            t[3] !== n.additionalDescription || t[4] !== n.additionalDescriptionValues ? (i = n.additionalDescription && (0, $.jsx)(`div`, {
                children: (0, $.jsx)(M, {
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
            e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, $.jsx)(fe, {
                "aria-hidden": `true`,
                className: `icon text-token-interactive-icon-tertiary-default`
            }), e[0] = t) : t = e[0];
            let n;
            e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, $.jsx)(`p`, {
                className: `text-token-text-primary text-sm font-semibold`,
                children: (0, $.jsx)(M, {
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
                        children: (0, $.jsx)(M, {
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
                    preReleases: a,
                    handleSaveRole: o,
                    role: s,
                    showOptOutControls: c,
                    isRbacEnabled: l,
                    layout: f,
                    disableAllToggles: p,
                    disableRolePermissionWrites: m,
                    searchQuery: v,
                    sectionExpanded: b,
                    forceSectionExpanded: x,
                    onSectionExpandedChange: S,
                    renderHighlightedText: w,
                    renderSettingEntryControl: T,
                    getEntryPresentation: E,
                    renderRbacEntryControl: te,
                    useSitesPermissionSelect: ie,
                    effectiveRolePermissions: ae,
                    onOptOutChange: D,
                    loadingAdminPreviewFeature: se,
                    onSetAdminPreviewAccess: O
                } = e,
                k = f === void 0 ? `card` : f,
                A = p !== void 0 && p,
                j = m !== void 0 && m,
                ce = v === void 0 ? `` : v,
                N = x !== void 0 && x,
                P = ie === void 0 || ie,
                F = le(),
                I = (0, Ct.useId)(),
                L = g(n),
                ue = y(),
                R = L ?? ue,
                [B, V] = (0, Ct.useState)(null),
                H, de, U, fe, pe, W, G, me, K, q, _e, ve, ye, be, xe, Ce;
            if (t[0] !== R?.isHipaaCompliantWorkspace || t[1] !== i || t[2] !== A || t[3] !== j || t[4] !== ae || t[5] !== N || t[6] !== E || t[7] !== o || t[8] !== F || t[9] !== l || t[10] !== k || t[11] !== se || t[12] !== D || t[13] !== S || t[14] !== O || t[15] !== B?.enableConfirmation || t[16] !== a || t[17] !== w || t[18] !== te || t[19] !== T || t[20] !== s || t[21] !== ce || t[22] !== I || t[23] !== b || t[24] !== c || t[25] !== P || t[26] !== n) {
                ye = Symbol.for(`react.early_return_sentinel`);
                bb0: {
                    let e = gt({
                            intl: F,
                            preReleases: a,
                            searchQuery: ce,
                            getEntryPresentation: E,
                            layout: k,
                            effectiveRolePermissions: ae,
                            rolePermissions: s.permissions
                        }),
                        r = e.some(vt);
                    if (ft(ce) && (k === `section` ? !r : e.length === 0)) {
                        ye = null;
                        break bb0
                    }
                    let u = k === `section` && !r,
                        f = u ? [] : e,
                        p = u || f.some(yt),
                        m = p ? kt.adminPreviewSection : kt.enterpriseBetaFeatureSection,
                        g = R?.isHipaaCompliantWorkspace ?? !1,
                        v = p ? kt.adminPreviewSectionDescription : f.some(bt) ? kt.enterpriseBetaFeaturePerFeatureReleaseDescription : k === `section` ? kt.enterpriseBetaFeatureJuly30SectionDescription : kt.enterpriseBetaFeatureSectionDescription,
                        y;t[43] !== v || t[44] !== F || t[45] !== w ? (y = w?.(F.formatMessage(v)), t[43] = v, t[44] = F, t[45] = w, t[46] = y) : y = t[46];
                    let x = y,
                        ie = k !== `section` && e.length === 0 ? kt.enterpriseBetaFeatureEmptySectionDescription : g && r && !p ? (0, $.jsxs)(`div`, {
                            className: `flex flex-col gap-2`,
                            children: [(0, $.jsx)(`p`, {
                                children: x ?? (0, $.jsx)(M, {
                                    ...v
                                })
                            }), (0, $.jsx)(`p`, {
                                className: `text-token-text-status-warning`,
                                children: (0, $.jsx)(M, {
                                    ...kt.enterpriseBetaFeatureSectionHipaaDescription
                                })
                            })]
                        }) : x ?? v,
                        L;t[47] === F ? L = t[48] : (L = e => typeof e.title == `string` ? e.title : F.formatMessage(e.title), t[47] = F, t[48] = L),
                    de = L;
                    let le;t[49] === s.permissions ? le = t[50] : (le = (e, t) => {
                        let n = e.additionalPermissionNames ?? [];
                        return Se({
                            add: t,
                            currentPermissionNames: s.permissions,
                            permissionName: e.permissionName,
                            additionalPermissionNames: t ? n : [...n, ...e.permissionNamesToRemoveWhenDisabled ?? []]
                        })
                    }, t[49] = s.permissions, t[50] = le);
                    let ue = le,
                        we;t[51] !== j || t[52] !== o ? (we = e => j ? Promise.resolve() : o(e), t[51] = j, t[52] = o, t[53] = we) : we = t[53];
                    let Te = we,
                        Ee;t[54] !== ue || t[55] !== s || t[56] !== Te ? (Ee = (e, t) => Te({
                        ...s,
                        permissions: ue(e, t)
                    }), t[54] = ue, t[55] = s, t[56] = Te, t[57] = Ee) : Ee = t[57],
                    fe = Ee,
                    U = B?.enableConfirmation;
                    let De = k === `section` && b != null && S != null,
                        Oe = !De || N || b,
                        ke, Ae;t[58] !== F || t[59] !== w || t[60] !== m ? (ke = F.formatMessage(m), Ae = w?.(ke), t[58] = F, t[59] = w, t[60] = m, t[61] = ke, t[62] = Ae) : (ke = t[61], Ae = t[62]);
                    let Ne = Ae;H = ge,
                    G = _(k === `section` ? _(`border-token-border-default gap-4 border-b pb-8 last:border-b-0`, Oe && `md:grid md:grid-cols-[minmax(0,240px)_minmax(0,1fr)] md:gap-x-[30px]`) : _(`border-token-border-default rounded-2xl border`, p ? `p-8!` : `p-6`), he),
                    me = m,
                    t[63] !== Oe || t[64] !== N || t[65] !== Ne || t[66] !== De || t[67] !== S || t[68] !== w || t[69] !== I || t[70] !== ke || t[71] !== m ? (K = De ? (0, $.jsxs)(`span`, {
                        className: `flex items-center gap-3`,
                        children: [(0, $.jsx)(Ie, {
                            sectionTitle: ke,
                            expanded: Oe,
                            controlsId: I,
                            disabled: N,
                            onExpandedChange: S
                        }), (0, $.jsx)(`span`, {
                            children: Ne ?? (0, $.jsx)(M, {
                                ...m
                            })
                        })]
                    }) : w ? (0, $.jsx)(`span`, {
                        children: Ne
                    }) : void 0, t[63] = Oe, t[64] = N, t[65] = Ne, t[66] = De, t[67] = S, t[68] = w, t[69] = I, t[70] = ke, t[71] = m, t[72] = K) : K = t[72],
                    q = k === `section` ? void 0 : p ? `text-base! leading-6! font-medium!` : `text-[18px]! leading-[26px]!`,
                    _e = ie,
                    ve = De ? `ps-11` : k === `card` && p ? `text-xs! leading-[18px]!` : void 0,
                    be = De ? I : void 0,
                    xe = De && !Oe,
                    Ce = Oe ? `flex flex-col gap-4` : `hidden`,
                    t[73] === u ? pe = t[74] : (pe = u && (0, $.jsx)(Dt, {}), t[73] = u, t[74] = pe),
                    W = f.map(e => {
                        let t = new Set(e.newReleaseEntries.flatMap(xt)),
                            r = e.hideEarlyAccessBadge ? null : (0, $.jsx)(`span`, {
                                className: `inline-flex h-[18px] shrink-0 items-center justify-center rounded-[6px] bg-[var(--green-a50)] px-[5px] text-xs font-medium text-[light-dark(var(--green-600),var(--green-400))]`,
                                children: (0, $.jsx)(M, {
                                    ...kt.enterpriseBetaFeatureBadge
                                })
                            }),
                            a = e.newReleaseEntries.map((n, r) => {
                                let a = n.rbac ? n.permissionName : n.settingName,
                                    o = n.rbac ? n.additionalPermissionNames ?? [] : [],
                                    c = e.adminPreviewFeature == null ? E?.(n, t, e.newReleaseEntries[r + 1]) : void 0,
                                    l = c?.title ?? de(n),
                                    u = n.rbac && n.dependsOnPermissionName != null && !(ae ?? s.permissions).includes(n.dependsOnPermissionName),
                                    d = n.rbac && j,
                                    f = Re({
                                        isReadOnly: d,
                                        disabledReason: n.disabledReason
                                    }),
                                    p = A || d || n.disabled || u || e.adminPreviewFeature === `admin_preview_library_sharing` && i.admin_preview_launch_settings?.admin_preview_library_sharing == null,
                                    m = n.rbac && (n.dependsOnPermissionName != null || n.permissionNamesToRemoveWhenDisabled != null || n.enableConfirmation != null),
                                    g = n.rbac ? te?.(n, p, f, l) : null,
                                    v;
                                if (!n.rbac) v = T?.(n, p) ?? null;
                                else if (g != null) v = n.permissionName === re.SitesAccess ? (0, $.jsx)(Pe, {
                                    children: g
                                }) : g;
                                else if (n.permissionName === re.SitesAccess) v = P && C() ? (0, $.jsx)(Pe, {
                                    children: (0, $.jsx)(Me, {
                                        ariaLabel: l,
                                        role: s,
                                        handleSaveRole: Te,
                                        disabled: p,
                                        disabledReason: f
                                    })
                                }) : (0, $.jsx)(Pe, {
                                    children: (0, $.jsx)(je, {
                                        ariaLabel: l,
                                        role: s,
                                        permissionName: n.permissionName,
                                        additionalPermissionNames: n.additionalPermissionNames,
                                        permissionNamesToRemoveWhenDisabled: n.permissionNamesToRemoveWhenDisabled,
                                        enableConfirmation: n.enableConfirmation,
                                        handleSaveRole: Te,
                                        disabled: p,
                                        disabledReason: f,
                                        renderDisabledToggleAsOff: n.renderDisabledToggleAsOff
                                    })
                                });
                                else if (!m) v = (0, $.jsx)(je, {
                                    ariaLabel: l,
                                    role: s,
                                    permissionName: n.permissionName,
                                    handleSaveRole: Te,
                                    disabled: p,
                                    disabledReason: f,
                                    renderDisabledToggleAsOff: n.renderDisabledToggleAsOff
                                });
                                else {
                                    let e = [n.permissionName, ...o],
                                        t = (0, $.jsx)(oe, {
                                            size: `normal`,
                                            "aria-label": l,
                                            checked: !(p && n.renderDisabledToggleAsOff) && e.every(e => s.permissions.includes(e)),
                                            onCheckedChange: e => {
                                                if (e && n.enableConfirmation) {
                                                    V(n);
                                                    return
                                                }
                                                fe(n, e)
                                            },
                                            disabled: p
                                        });
                                    v = p && f ? (0, $.jsx)(h, {
                                        label: F.formatMessage(f),
                                        children: t
                                    }) : t
                                }
                                return v == null ? null : (0, $.jsx)(`div`, {
                                    className: _(`flex justify-between gap-4 py-3`, k === `section` && e.adminPreviewFeature != null && `px-4`, c?.className),
                                    children: (0, $.jsxs)(`div`, {
                                        className: `flex w-full items-center justify-between gap-4`,
                                        children: [(0, $.jsxs)(`div`, {
                                            children: [(0, $.jsxs)(`div`, {
                                                className: `text-md flex items-center gap-2`,
                                                children: [c?.label ?? (w ? (0, $.jsx)(`span`, {
                                                    children: w(l)
                                                }) : F.formatMessage({
                                                    id: `workspaceSettings.templateTitle.enterpriseReleaseTitle`,
                                                    defaultMessage: `{name}`
                                                }, {
                                                    name: l
                                                })), e.adminPreviewFeature != null && (0, $.jsx)(z, {
                                                    contentLayout: `multi-line`,
                                                    content: typeof e.description == `string` ? e.description : F.formatMessage(e.description),
                                                    side: `top-center`,
                                                    children: e => (0, $.jsx)(`button`, {
                                                        ...e,
                                                        type: `button`,
                                                        "aria-label": F.formatMessage(kt.featureInfo, {
                                                            feature: l
                                                        }),
                                                        className: `interactive-button interactive-label-tertiary inline-flex items-center rounded-sm`,
                                                        children: (0, $.jsx)(ee, {
                                                            className: `icon-sm`,
                                                            "aria-hidden": `true`
                                                        })
                                                    })
                                                })]
                                            }), (0, $.jsx)(Tt, {
                                                entry: n
                                            }), n.rbac && n.permissionName === re.LibrarySharingManagementAccess && (0, $.jsx)(qe, {
                                                controlMode: i.library_sharing_control_mode,
                                                enabled: i.beta_settings.library_sharing_enabled ?? !1
                                            }), e.adminPreviewFeature != null && n.rbac && (0, $.jsxs)(`button`, {
                                                type: `button`,
                                                className: `interactive-button text-token-interactive-label-accent-accessible relative mt-1 text-xs`,
                                                "aria-busy": se === e.adminPreviewFeature,
                                                disabled: A || j || n.disabled || O == null,
                                                onClick: () => O?.(e, n),
                                                children: [(0, $.jsx)(M, {
                                                    ...i.admin_preview_launch_settings?.[e.adminPreviewFeature] == null ? kt.setAccess : kt.editAccess
                                                }), se === e.adminPreviewFeature && (0, $.jsx)(`span`, {
                                                    "aria-hidden": `true`,
                                                    className: `absolute start-full top-1/2 ms-1 -translate-y-1/2`,
                                                    children: (0, $.jsx)(ne, {
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
                                                    children: v
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
                            children: [g && e.newReleaseEntries.length > 0 && (0, $.jsx)(`p`, {
                                className: `text-token-text-status-warning text-sm`,
                                children: (0, $.jsx)(M, {
                                    ...kt.enterpriseBetaFeatureSectionHipaaDescription
                                })
                            }), a]
                        }, e.adminPreviewFeature);
                        let o = e.description;
                        typeof o != `string` && (o = F.formatMessage(o));
                        let u = e.infoTooltip;
                        return (0, $.jsxs)(`div`, {
                            className: `m-auto flex w-full flex-col`,
                            id: e.anchorId,
                            children: [(0, $.jsxs)(`div`, {
                                className: `flex flex-col gap-2 py-2`,
                                children: [(0, $.jsxs)(`div`, {
                                    children: [(0, $.jsxs)(`div`, {
                                        className: `flex items-center gap-2 text-base font-semibold`,
                                        children: [w ? (0, $.jsx)(`span`, {
                                            children: w(e.name)
                                        }) : F.formatMessage({
                                            id: `workspaceSettings.templateTitle.enterpriseReleaseTitle`,
                                            defaultMessage: `{name}`
                                        }, {
                                            name: e.name
                                        }), r, u && (0, $.jsx)(h, {
                                            interactive: !0,
                                            label: (0, $.jsx)(M, {
                                                ...u.message,
                                                values: {
                                                    link: e => (0, $.jsx)(`a`, {
                                                        href: u.linkHref,
                                                        className: wt,
                                                        children: e
                                                    })
                                                }
                                            }),
                                            side: `top`,
                                            children: (0, $.jsx)(`button`, {
                                                type: `button`,
                                                "aria-label": F.formatMessage(u.ariaLabel),
                                                className: `text-token-text-tertiary hover:text-token-text-secondary focus-visible:outline-token-border-heavy inline-flex size-4 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2`,
                                                children: (0, $.jsx)(ee, {
                                                    "aria-hidden": `true`,
                                                    className: `size-3.5`
                                                })
                                            })
                                        })]
                                    }), (0, $.jsx)(`span`, {
                                        className: `text-token-text-secondary text-sm`,
                                        children: e.helpCenterLink ? (0, $.jsx)(M, {
                                            id: `workspaceSettings.templateTitle.enterpriseReleaseDescription`,
                                            defaultMessage: `{name} <learnMore>Learn more</learnMore>`,
                                            values: {
                                                name: w?.(o) ?? o,
                                                learnMore: t => (0, $.jsx)(`a`, {
                                                    href: e.helpCenterLink,
                                                    target: e.helpLinkOpenNewTab === !1 ? void 0 : `_blank`,
                                                    className: wt,
                                                    rel: e.helpLinkOpenNewTab === !1 ? void 0 : `noopener noreferrer`,
                                                    children: e.helpLinkLabel ? F.formatMessage(e.helpLinkLabel) : t
                                                })
                                            }
                                        }) : w?.(o) ?? o
                                    })]
                                }), g && p && e.newReleaseEntries.length > 0 && (0, $.jsx)(`p`, {
                                    className: `text-token-text-status-warning text-sm`,
                                    children: (0, $.jsx)(M, {
                                        ...kt.enterpriseBetaFeatureSectionHipaaDescription
                                    })
                                }), (0, $.jsx)(`div`, {
                                    role: k === `section` ? `group` : void 0,
                                    "aria-label": k === `section` ? e.name : void 0,
                                    className: _(`flex flex-col`, k !== `section` && `divide-y divide-token-border-default border-y border-token-border-default`),
                                    children: a
                                })]
                            }), !(e.shouldHideOptOutButton ?? !1) && c && e.newReleaseOptOutFlag && (e.newReleaseOptOutFlag === d.LIBRARY_SHARING_GA_OPT_OUT ? (0, $.jsx)(Je, {
                                betaSettingsDict: i.beta_settings_dict,
                                workspaceId: n,
                                feature: e.newReleaseOptOutFlag,
                                featureName: e.optOutFeatureName ?? e.name,
                                storedValue: i.beta_settings[e.newReleaseOptOutFlag],
                                isRbacEnabled: l,
                                disabled: A,
                                onChange: D
                            }) : (0, $.jsx)(Be, {
                                workspaceId: n,
                                feature: e.newReleaseOptOutFlag,
                                featureName: e.optOutFeatureName ?? e.name,
                                storedValue: i.beta_settings[e.newReleaseOptOutFlag],
                                isRbacEnabled: l,
                                disabled: A,
                                onChange: D
                            }))]
                        }, e.name)
                    })
                }
                t[0] = R?.isHipaaCompliantWorkspace, t[1] = i, t[2] = A, t[3] = j, t[4] = ae, t[5] = N, t[6] = E, t[7] = o, t[8] = F, t[9] = l, t[10] = k, t[11] = se, t[12] = D, t[13] = S, t[14] = O, t[15] = B?.enableConfirmation, t[16] = a, t[17] = w, t[18] = te, t[19] = T, t[20] = s, t[21] = ce, t[22] = I, t[23] = b, t[24] = c, t[25] = P, t[26] = n, t[27] = H, t[28] = de, t[29] = U, t[30] = fe, t[31] = pe, t[32] = W, t[33] = G, t[34] = me, t[35] = K, t[36] = q, t[37] = _e, t[38] = ve, t[39] = ye, t[40] = be, t[41] = xe, t[42] = Ce
            } else H = t[27], de = t[28], U = t[29], fe = t[30], pe = t[31], W = t[32], G = t[33], me = t[34], K = t[35], q = t[36], _e = t[37], ve = t[38], ye = t[39], be = t[40], xe = t[41], Ce = t[42];
            if (ye !== Symbol.for(`react.early_return_sentinel`)) return ye;
            let we;
            t[75] !== pe || t[76] !== W || t[77] !== be || t[78] !== xe || t[79] !== Ce ? (we = (0, $.jsxs)(`div`, {
                id: be,
                hidden: xe,
                className: Ce,
                children: [pe, W]
            }), t[75] = pe, t[76] = W, t[77] = be, t[78] = xe, t[79] = Ce, t[80] = we) : we = t[80];
            let Te;
            t[81] !== de || t[82] !== U || t[83] !== B || t[84] !== fe ? (Te = B && U && (0, $.jsx)(r, {
                isOpen: !0,
                onClose: () => V(null),
                title: de(B),
                testId: `modal-enterprise-permission-enable-confirmation`,
                primaryButton: (0, $.jsx)(u.Button, {
                    as: `button`,
                    color: `primary`,
                    loading: !1,
                    onClick: async () => {
                        await fe(B, !0), V(null)
                    },
                    children: (0, $.jsx)(M, {
                        ...kt.enterprisePermissionEnable
                    })
                }),
                secondaryButton: (0, $.jsx)(u.Button, {
                    as: `button`,
                    color: `ghost`,
                    onClick: () => V(null),
                    children: (0, $.jsx)(M, {
                        ...kt.enterprisePermissionEnableCancel
                    })
                }),
                children: (0, $.jsxs)(`div`, {
                    className: `text-token-text-secondary flex flex-col gap-3 text-sm`,
                    children: [(0, $.jsx)(`p`, {
                        children: (0, $.jsx)(M, {
                            ...U.body
                        })
                    }), U.details && (0, $.jsx)(`p`, {
                        children: (0, $.jsx)(M, {
                            ...U.details,
                            values: {
                                learnMoreLink: e => U.learnMoreUrl ? (0, $.jsx)(`a`, {
                                    href: U.learnMoreUrl,
                                    target: `_blank`,
                                    className: wt,
                                    rel: `noopener noreferrer`,
                                    children: e
                                }) : e
                            }
                        })
                    })]
                })
            }), t[81] = de, t[82] = U, t[83] = B, t[84] = fe, t[85] = Te) : Te = t[85];
            let Ee;
            return t[86] !== H || t[87] !== G || t[88] !== me || t[89] !== K || t[90] !== q || t[91] !== _e || t[92] !== ve || t[93] !== we || t[94] !== Te ? (Ee = (0, $.jsxs)(H, {
                className: G,
                title: me,
                titleContent: K,
                titleClassName: q,
                description: _e,
                descriptionClassName: ve,
                children: [we, Te]
            }), t[86] = H, t[87] = G, t[88] = me, t[89] = K, t[90] = q, t[91] = _e, t[92] = ve, t[93] = we, t[94] = Te, t[95] = Ee) : Ee = t[95], Ee
        }, kt = j({
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
        jt = L(), N(), Mt = k(), Nt = `https://learn.chatgpt.com/docs/hipaa-configuration`, Pt = e => {
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
                    children: (0, Mt.jsx)(M, {
                        ...Ft.link
                    })
                })
            }), t[0] = r) : r = t[0], r
        }, Ft = j({
            link: {
                id: `chatgpt.workspace.permissions.codex_and_work_local.section.hipaa_configuration_guide.link`,
                defaultMessage: `Read the HIPAA configuration guide before enabling the features below.`
            }
        })
    }));
export {
    ze as _, At as a, Xe as c, ot as d, qe as f, Re as g, We as h, Et as i, rt as l, Be as m, It as n, gt as o, Ye as p, Ot as r, _t as s, Pt as t, dt as u
};
//# sourceMappingURL=222991e8-izyen4eir9y8txe2.js.map
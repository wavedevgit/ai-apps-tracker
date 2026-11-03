import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as n,
    $T as r,
    Aw as i,
    LU as a,
    Ow as o,
    Qy as s,
    Rz as c,
    T2 as l,
    Vw as u,
    Y7 as d,
    Zy as f,
    _G as p,
    _ct as m,
    ax as h,
    eE as g,
    fB as _,
    grt as v,
    i0 as y,
    ix as b,
    k2 as x,
    l0 as S,
    l7 as ee,
    o0 as C,
    oK as w,
    pB as T,
    q1 as E,
    sK as te,
    u7 as ne,
    uG as D,
    urt as re,
    w2 as ie,
    xct as O,
    zU as ae,
    zw as oe,
    zz as k
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Bn as A,
    In as j,
    Ln as M,
    N as se,
    Nn as N,
    Rn as P,
    Vn as F,
    p as I,
    s as L,
    wn as R,
    zn as ce
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Ajt as z,
    Irt as le,
    Lrt as B,
    kjt as ue,
    vUn as V,
    yUn as H
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    Dv as U,
    Ev as de,
    Gg as fe,
    Ov as W,
    Ry as G,
    Ug as K,
    kv as pe,
    zy as q
} from "./30901919-k5uqyx4vyplt9toa.js";
import {
    Jo as me,
    Ko as J,
    Wo as he,
    Xo as ge,
    Zo as _e,
    db as ve,
    fb as ye,
    qo as be,
    rb as xe,
    ts as Se
} from "./c2675c8c-jg3tpj8mw86wdc0g.js";
import {
    a as Ce,
    o as we,
    r as Te,
    s as Ee
} from "./6fd89734-l8h178glfzpxynlr.js";
import {
    d as De,
    r as Oe
} from "./b411f8ca-nj888p5bhlk0iw9d.js";
import {
    a as ke,
    i as Ae
} from "./a99a60c9-ijqmurcikikezb0h.js";
import {
    d as je,
    f as Me,
    l as Ne
} from "./b90db9d2-gie05lkujq4o0hfk.js";
import {
    n as Pe,
    t as Fe
} from "./e17f5811-n5a2mgh51enxy1ve.js";
var Ie, Le, Re = e((() => {
    P(), Ie = j({
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
            feature: i,
            featureName: a,
            storedValue: s,
            isRbacEnabled: c,
            disabled: l,
            onChange: u,
            statusDescription: f,
            confirmationDescription: p
        } = e,
        m = l !== void 0 && l,
        h = ce(),
        g = se(),
        [_, v] = (0, He.useState)(!1),
        y = s === !0,
        b = c ? y ? Ue.enterpriseReleaseOptedOutDescription : Ue.enterpriseReleaseOptedInDescription : y ? Ue.enterpriseReleaseNonRbacOptedOutDescription : Ue.enterpriseReleaseNonRbacOptedInDescription,
        x = c ? Ue.enterpriseReleaseOptOutDescription : Ue.enterpriseReleaseNonRbacOptOutDescription,
        S;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (S = (e, t) => {
        t && v(!1)
    }, t[0] = S) : S = t[0];
    let ee;
    t[1] === g ? ee = t[2] : (ee = () => g.invalidateQueries({
        queryKey: [`workspace-settings`]
    }), t[1] = g, t[2] = ee);
    let C;
    t[3] !== i || t[4] !== n ? (C = e => d.safePost(`/accounts/{account_id}/beta_features`, {
        parameters: {
            path: {
                account_id: n
            }
        },
        requestBody: {
            feature: i,
            value: e
        }
    }), t[3] = i, t[4] = n, t[5] = C) : C = t[5];
    let w;
    t[6] !== ee || t[7] !== C ? (w = {
        onSuccess: S,
        onSettled: ee,
        mutationFn: C
    }, t[6] = ee, t[7] = C, t[8] = w) : w = t[8];
    let T = I(w),
        E;
    t[9] === T.isPending ? E = t[10] : (E = () => {
        T.isPending || v(!1)
    }, t[9] = T.isPending, t[10] = E);
    let te = E,
        ne;
    t[11] !== i || t[12] !== T || t[13] !== u ? (ne = e => {
        u ? (u(i, e), v(!1)) : T.mutate(e)
    }, t[11] = i, t[12] = T, t[13] = u, t[14] = ne) : ne = t[14];
    let D = ne,
        re;
    t[15] !== f || t[16] !== b ? (re = f ?? (0, Y.jsx)(N, {
        ...b,
        values: {
            strong: Be
        }
    }), t[15] = f, t[16] = b, t[17] = re) : re = t[17];
    let ie;
    t[18] === re ? ie = t[19] : (ie = (0, Y.jsx)(`span`, {
        className: `min-w-0 text-sm text-token-text-tertiary`,
        children: re
    }), t[18] = re, t[19] = ie);
    let O = y ? `secondary` : `primary`,
        ae = m || T.isPending,
        k;
    t[20] !== h || t[21] !== y ? (k = h.formatMessage(y ? Ue.enterpriseReleaseOptInButton : Ue.enterpriseReleaseOptOutButton), t[20] = h, t[21] = y, t[22] = k) : k = t[22];
    let A;
    t[23] !== D || t[24] !== y ? (A = () => {
        y ? D(!1) : v(!0)
    }, t[23] = D, t[24] = y, t[25] = A) : A = t[25];
    let j = y ? Ue.enterpriseReleaseOptInButton : Ue.enterpriseReleaseOptOutButton,
        M;
    t[26] === j ? M = t[27] : (M = (0, Y.jsx)(N, {
        ...j
    }), t[26] = j, t[27] = M);
    let P;
    t[28] !== O || t[29] !== ae || t[30] !== k || t[31] !== A || t[32] !== M ? (P = (0, Y.jsx)(r, {
        color: O,
        size: `small`,
        disabled: ae,
        loading: !1,
        label: k,
        onClick: A,
        children: M
    }), t[28] = O, t[29] = ae, t[30] = k, t[31] = A, t[32] = M, t[33] = P) : P = t[33];
    let F;
    t[34] !== P || t[35] !== ie ? (F = (0, Y.jsxs)(`div`, {
        className: `flex items-center justify-between gap-6 py-2`,
        children: [ie, P]
    }), t[34] = P, t[35] = ie, t[36] = F) : F = t[36];
    let L;
    t[37] === a ? L = t[38] : (L = (0, Y.jsx)(N, {
        ...Ue.enterpriseReleaseOptOutModalTitle,
        values: {
            name: a
        }
    }), t[37] = a, t[38] = L);
    let R;
    t[39] !== p || t[40] !== a || t[41] !== x ? (R = p ?? (0, Y.jsx)(N, {
        ...x,
        values: {
            name: a
        }
    }), t[39] = p, t[40] = a, t[41] = x, t[42] = R) : R = t[42];
    let z;
    t[43] === D ? z = t[44] : (z = () => D(!0), t[43] = D, t[44] = z);
    let le;
    t[45] === Symbol.for(`react.memo_cache_sentinel`) ? (le = (0, Y.jsx)(N, {
        ...Ue.enterpriseReleaseOptOutConfirm
    }), t[45] = le) : le = t[45];
    let B;
    t[46] !== T.isPending || t[47] !== z ? (B = (0, Y.jsx)(oe.Button, {
        as: `button`,
        color: `primary`,
        disabled: T.isPending,
        loading: T.isPending,
        onClick: z,
        children: le
    }), t[46] = T.isPending, t[47] = z, t[48] = B) : B = t[48];
    let ue;
    t[49] === Symbol.for(`react.memo_cache_sentinel`) ? (ue = (0, Y.jsx)(N, {
        ...Ue.enterpriseReleaseOptOutCancel
    }), t[49] = ue) : ue = t[49];
    let V;
    t[50] !== te || t[51] !== T.isPending ? (V = (0, Y.jsx)(oe.Button, {
        as: `button`,
        color: `ghost`,
        disabled: T.isPending,
        onClick: te,
        children: ue
    }), t[50] = te, t[51] = T.isPending, t[52] = V) : V = t[52];
    let H;
    t[53] !== te || t[54] !== _ || t[55] !== L || t[56] !== R || t[57] !== B || t[58] !== V ? (H = (0, Y.jsx)(o, {
        isOpen: _,
        onClose: te,
        title: L,
        description: R,
        testId: `modal-enterprise-release-opt-out`,
        primaryButton: B,
        secondaryButton: V
    }), t[53] = te, t[54] = _, t[55] = L, t[56] = R, t[57] = B, t[58] = V, t[59] = H) : H = t[59];
    let U;
    return t[60] !== F || t[61] !== H ? (U = (0, Y.jsxs)(Y.Fragment, {
        children: [F, H]
    }), t[60] = F, t[61] = H, t[62] = U) : U = t[62], U
}

function Be(e) {
    return (0, Y.jsx)(`strong`, {
        children: e
    })
}
var Ve, He, Y, Ue, We = e((() => {
        Ve = R(), g(), u(), i(), n(), L(), He = t(F()), P(), Y = A(), Ue = M({
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
        Ge = R(), We(), P(), Ke = A(), qe = e => {
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
                children: n ? (0, Ke.jsx)(N, {
                    id: `chatgpt.workspace.permissions.library_sharing.policy.status.enabled`,
                    defaultMessage: `Library sharing is enabled for this workspace.`
                }) : (0, Ke.jsx)(N, {
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
                    children: (0, Ke.jsx)(N, {
                        id: `chatgpt.workspace.permissions.library_sharing.release.description.configured`,
                        defaultMessage: `Your configuration will be preserved after Early Release.`
                    })
                }), t[3] = e) : e = t[3], e
            }
            let i;
            t[4] === r.storedValue ? i = t[5] : (i = r.storedValue === !0 ? (0, Ke.jsx)(N, {
                id: `chatgpt.workspace.permissions.library_sharing.release.description.opted_out`,
                defaultMessage: `Automatic enablement after Early Release is opted out. Current sharing and role settings are unchanged.`
            }) : (0, Ke.jsx)(N, {
                id: `chatgpt.workspace.permissions.library_sharing.release.description.unconfigured`,
                defaultMessage: `You can configure Library sharing and role permissions during Early Release.`
            }), t[4] = r.storedValue, t[5] = i);
            let a;
            t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, Ke.jsx)(N, {
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
    usageLimitDisplay: n = rt,
    searchQuery: r = ``,
    renderHighlightedText: i,
    showSharedUsageLimit: a = !1,
    disabled: o = !1,
    hideBottomBorder: s = !1,
    metadataDraft: u,
    onStageMetadata: d,
    onUnappliedChangesChange: f
}) {
    "use no forget";
    let p = ce(),
        m = ae(),
        h = S(ie),
        g = S(l),
        _ = !h && re(`1261424157`),
        v = _ && a && re(`2634861725`),
        y = !!t,
        {
            data: b,
            isLoading: x,
            isFetching: ee,
            isError: C
        } = ye({
            workspaceId: e,
            roleId: t ?? ``,
            enabled: _ && y
        }),
        {
            data: w,
            isLoading: T
        } = ve({
            workspaceId: e,
            roleId: t ?? ``,
            enabled: _ && y
        }),
        {
            upsertRoleMetadata: E,
            isPending: te
        } = De({
            workspaceId: e,
            roleId: t ?? ``
        }),
        [ne, D] = (0, X.useState)(`none`),
        [O, oe] = (0, X.useState)(``),
        [k, A] = (0, X.useState)(!1),
        [j, M] = (0, X.useState)(``),
        [se, P] = (0, X.useState)(`none`),
        [F, I] = (0, X.useState)(``),
        [L, R] = (0, X.useState)(!1),
        [z, le] = (0, X.useState)(null),
        [B, ue] = (0, X.useState)(!1),
        [H, U] = (0, X.useState)(null),
        [de, fe] = (0, X.useState)(null),
        W = (0, X.useMemo)(() => w ? {
            low: w.low_credit_limit,
            medium: w.medium_credit_limit,
            high: w.high_credit_limit
        } : n, [w, n]),
        K = (0, X.useCallback)(e => p.formatMessage(Q.creditsPerWeek, {
            value: e
        }), [p]),
        pe = (0, X.useCallback)(e => p.formatMessage(Q.creditsPerCalendarMonth, {
            value: e
        }), [p]),
        q = (0, X.useMemo)(() => ({
            low: K(W.low),
            medium: K(W.medium),
            high: K(W.high)
        }), [K, W.high, W.low, W.medium]),
        J = b != null,
        he = u ? {
            ...b?.metadata,
            ...u
        } : b?.metadata ?? null,
        be = he?.soft_alert_credit_limit ?? null,
        xe = he?.hard_cap_credit_limit ?? null,
        Se = he?.hard_cap_shared_credit_limit ?? null,
        Ce = be ?? xe ?? null,
        we = Se?.limit ?? null;
    (0, X.useEffect)(() => {
        if (!b) return;
        if (!Ce) {
            D(`none`), oe(``), A(!1), M(``);
            return
        }
        let e = be?.limit ?? null,
            t = xe?.limit ?? null,
            n = t === 0,
            r = t != null,
            i = e ?? t ?? null;
        if (oe(e == null ? t != null && !n ? String(t) : `` : String(e)), A(r), M(r && t != null ? String(t) : ``), !r && i != null && i === W.low) {
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
    }, [b, Ce, be, xe, W.high, W.low, W.medium]);
    let Te = {
        low: String(W.low),
        medium: String(W.medium),
        high: String(W.high)
    };
    (0, X.useEffect)(() => {
        if (b) {
            if (we == null) {
                P(`none`), I(``), le(null);
                return
            }
            I(String(we)), le(null), P(`custom`)
        }
    }, [b, we]);
    let Ee = (() => {
            switch (ne) {
                case `low`:
                    return Te.low;
                case `medium`:
                    return Te.medium;
                case `high`:
                    return Te.high;
                case `custom`:
                    return O;
                default:
                    return ``
            }
        })().trim(),
        Oe = (0, X.useMemo)(() => [{
            key: `none`,
            label: p.formatMessage(Q.enforcementDropdownNoneLabel)
        }, {
            key: `low`,
            label: p.formatMessage(Q.enforcementDropdownLowUsageLabel),
            limitLabel: q.low
        }, {
            key: `medium`,
            label: p.formatMessage(Q.enforcementDropdownMediumUsageLabel),
            limitLabel: q.medium
        }, {
            key: `high`,
            label: p.formatMessage(Q.enforcementDropdownHighLabel),
            limitLabel: q.high
        }, {
            key: `custom`,
            label: p.formatMessage(Q.enforcementDropdownCustomLabel)
        }], [p, q.high, q.low, q.medium]),
        ke = (0, X.useMemo)(() => Oe.filter(e => e.key === `none` || e.key === `custom`), [Oe]),
        Ae = p.formatMessage(Q.enforcementDropdownPlaceholder),
        je = Oe.find(e => e.key === ne) ?? null,
        Me = je?.label ?? Ae,
        Ne = je?.limitLabel,
        Pe = ne === `custom` ? k && j.trim() ? K(j.trim()) : O.trim() ? K(O.trim()) : Me : (je && Ne ? Ne : Me) ?? Ae,
        Fe = !je || je.key === `none`,
        Ie = _ && y && (x && !b || T && !w),
        Le = te || de != null,
        Re = d == null && C && !J,
        ze = o || d != null && g || Le || ee || !J && !Re,
        Be = o || d != null && g || Le || ee || !J && !Re,
        Ve = de === `usage`,
        He = de === `shared`,
        Y = async ({
            selectionKey: e,
            alertLimitOverride: n,
            hardCapEnabledOverride: r,
            hardCapLimitOverride: i
        }) => {
            if (!t || o) return;
            let a = ((e === `custom` ? n ?? O : e === `low` || e === `medium` || e === `high` ? Te[e] ?? `` : ``) ?? ``).trim(),
                s = a === `` ? NaN : Number(a),
                c = e === `custom` && (r ?? k) ? (i ?? j ?? ``).trim() : ``,
                l = c === `` ? NaN : Number(c),
                u = e === `custom` && c !== ``,
                f = u && Number.isFinite(l) && l === 0;
            if (e !== `none` && e !== `none` && (e !== `custom` || u && !f) && (a === `` || !Number.isFinite(s) || s <= 0)) {
                U(a === `` ? p.formatMessage(Q.alertRequiredForHardCap) : p.formatMessage(Q.invalidLimit));
                return
            }
            if (u && (c === `` || !Number.isFinite(l) || l < 0)) {
                U(p.formatMessage(Q.invalidLimit));
                return
            }
            U(null);
            let h = ct({
                selectionKey: e,
                trimmedSelectionAlert: a,
                parsedSelectionAlert: s,
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
                fe(`usage`), await E(h), m.success(p.formatMessage(Q.submitSuccess))
            } catch {
                m.danger(p.formatMessage(Q.submitError))
            } finally {
                fe(null)
            }
        }, Ue = async ({
            selectionKey: e,
            limitOverride: n
        }) => {
            if (!t || o) return;
            let r = (e === `custom` ? n ?? F : ``).trim(),
                i = r === `` ? NaN : Number(r);
            if (e !== `none` && (r === `` || !Number.isFinite(i) || i < 0)) {
                le(p.formatMessage(Q.sharedUsageInvalidLimit));
                return
            }
            le(null);
            let a = lt({
                sharedUsageLimit: e === `none` ? null : i
            });
            if (d) {
                if (b == null) throw Error(`Role metadata must load before editing usage limits`);
                d(a, b);
                return
            }
            try {
                fe(`shared`), await E(a), m.success(p.formatMessage(Q.submitSuccess))
            } catch {
                m.danger(p.formatMessage(Q.submitError))
            } finally {
                fe(null)
            }
        }, We = e => {
            if (!ze) {
                if (e.key === `custom`) {
                    ue(!0);
                    return
                }
                D(e.key), Y({
                    selectionKey: e.key
                })
            }
        }, Ge = e => {
            if (!Be) {
                if (e.key === `custom`) {
                    R(!0);
                    return
                }
                P(e.key), Ue({
                    selectionKey: e.key
                })
            }
        }, Ke = ({
            alertLimit: e,
            hardCapEnabled: t,
            hardCapLimit: n
        }) => {
            oe(e), A(t), M(t ? n : ``), D(`custom`), ue(!1), Y({
                selectionKey: `custom`,
                alertLimitOverride: e,
                hardCapEnabledOverride: t,
                hardCapLimitOverride: t ? n : ``
            })
        }, qe = e => {
            I(e), P(`custom`), R(!1), Ue({
                selectionKey: `custom`,
                limitOverride: e
            })
        }, Je = O === `` ? Ee : O, Ye = k, Xe = j, Qe = ke.find(e => e.key === se) ?? null, et = Qe?.label ?? Ae, tt = se === `custom` && F.trim() ? pe(F.trim()) : et, it = !Qe || Qe.key === `none`;
    return !_ || !y || !ot({
        searchQuery: r,
        intl: p,
        includeSharedUsageLimit: v
    }) ? null : (0, Z.jsxs)(Z.Fragment, {
        children: [(0, Z.jsx)($e, {
            isOpen: !o && B,
            alertLimit: Je,
            hardCapEnabled: Ye,
            hardCapLimit: Xe,
            onClose: () => ue(!1),
            onSave: Ke,
            isStaging: d != null,
            onUnappliedChangesChange: f
        }), v && (0, Z.jsx)(Ze, {
            isOpen: !o && L,
            limit: F,
            onClose: () => R(!1),
            onSave: qe,
            isStaging: d != null,
            onUnappliedChangesChange: f
        }), (0, Z.jsx)(me, {
            children: Ie ? (0, Z.jsx)(`div`, {
                className: `flex h-24 items-center justify-center`,
                children: (0, Z.jsx)(c, {
                    className: `text-token-text-tertiary h-6 w-6`
                })
            }) : (0, Z.jsxs)(ge, {
                className: s ? `border-b-0` : ``,
                children: [(0, Z.jsx)(_e, {
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
                            children: [Ve && (0, Z.jsx)(c, {
                                className: `text-token-text-tertiary h-4 w-4`
                            }), (0, Z.jsxs)(V.Root, {
                                children: [(0, Z.jsxs)(V.Trigger, {
                                    className: `bg-token-bg-primary text-token-text-primary border-token-border-heavy inline-flex min-w-[130px] items-center gap-2 rounded-md border px-2.5 py-1.5 text-start text-sm`,
                                    disabled: ze,
                                    children: [(0, Z.jsx)(`div`, {
                                        className: `flex min-w-0 flex-1 items-center justify-between gap-2`,
                                        children: (0, Z.jsx)(`span`, {
                                            className: `truncate ${Fe?`text-token-text-tertiary`:``}`,
                                            children: Pe
                                        })
                                    }), (0, Z.jsx)(G, {
                                        className: `text-token-text-tertiary h-3.5 w-3.5 shrink-0`
                                    })]
                                }), (0, Z.jsx)(V.Portal, {
                                    children: (0, Z.jsxs)(V.Content, {
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
                                                children: (0, Z.jsx)(N, {
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
                                            children: Oe.map(e => (0, Z.jsxs)(V.Item, {
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
                }), v && (0, Z.jsx)(_e, {
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
                                children: [He && (0, Z.jsx)(c, {
                                    className: `text-token-text-tertiary h-4 w-4`
                                }), (0, Z.jsxs)(V.Root, {
                                    children: [(0, Z.jsxs)(V.Trigger, {
                                        className: `bg-token-bg-primary text-token-text-primary border-token-border-heavy inline-flex min-w-[130px] items-center gap-2 rounded-md border px-2.5 py-1.5 text-start text-sm`,
                                        disabled: Be,
                                        children: [(0, Z.jsx)(`div`, {
                                            className: `flex min-w-0 flex-1 items-center justify-between gap-2`,
                                            children: (0, Z.jsx)(`span`, {
                                                className: `truncate ${it?`text-token-text-tertiary`:``}`,
                                                children: tt
                                            })
                                        }), (0, Z.jsx)(G, {
                                            className: `text-token-text-tertiary h-3.5 w-3.5 shrink-0`
                                        })]
                                    }), (0, Z.jsx)(V.Portal, {
                                        children: (0, Z.jsxs)(V.Content, {
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
                                                children: ke.map(e => (0, Z.jsx)(V.Item, {
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
                            }), z && (0, Z.jsx)(`div`, {
                                className: `text-interactive-label-warning-secondary text-xs`,
                                children: z
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
        l = ce(),
        [u, d] = (0, X.useState)(r),
        [f, p] = (0, X.useState)(!1),
        m;
    t[0] !== n || t[1] !== c || t[2] !== r || t[3] !== u ? (m = c && n && u.trim() !== r.trim(), t[0] = n, t[1] = c, t[2] = r, t[3] = u, t[4] = m) : m = t[4];
    let h = m,
        g, _;
    t[5] !== h || t[6] !== s ? (g = () => {
        if (h) return s?.(!0), () => s?.(!1)
    }, _ = [h, s], t[5] = h, t[6] = s, t[7] = g, t[8] = _) : (g = t[7], _ = t[8]), (0, X.useEffect)(g, _);
    let v, y;
    t[9] !== n || t[10] !== r ? (v = () => {
        n && (d(r), p(!1))
    }, y = [n, r], t[9] = n, t[10] = r, t[11] = v, t[12] = y) : (v = t[11], y = t[12]), (0, X.useEffect)(v, y);
    let b;
    t[13] === f ? b = t[14] : (b = e => {
        let t = e.replace(/\s+/g, ``);
        /^\d*$/.test(t) && (d(t), f && p(!1))
    }, t[13] = f, t[14] = b);
    let x = b,
        S;
    t[15] === u ? S = t[16] : (S = u.trim(), t[15] = u, t[16] = S);
    let ee = S,
        C = ee === `` ? NaN : Number(ee),
        w;
    t[17] !== C || t[18] !== ee ? (w = ee !== `` && Number.isFinite(C) && C >= 0, t[17] = C, t[18] = ee, t[19] = w) : w = t[19];
    let T = w,
        E;
    t[20] !== l || t[21] !== T ? (E = T ? `` : l.formatMessage(Q.sharedUsageInvalidLimit), t[20] = l, t[21] = T, t[22] = E) : E = t[22];
    let te = E,
        ne = f && !!te,
        D = ne ? te : void 0,
        re = `pe-36${D?` text-interactive-label-warning-secondary placeholder:text-interactive-label-warning-secondary`:``}`,
        ie = D ? `border-token-border-error focus-within:border-token-border-error focus-within:ring-token-border-error` : void 0,
        O;
    t[23] === l ? O = t[24] : (O = l.formatMessage(Q.sharedUsageLimitCreditsSuffix), t[23] = l, t[24] = O);
    let ae = O,
        k;
    t[25] === i ? k = t[26] : (k = e => {
        e || i()
    }, t[25] = i, t[26] = k);
    let A;
    t[27] === l ? A = t[28] : (A = l.formatMessage(Q.customSharedUsageLimitTitle), t[27] = l, t[28] = A);
    let j;
    t[29] === A ? j = t[30] : (j = (0, Z.jsx)(`div`, {
        className: `text-lg font-semibold`,
        children: A
    }), t[29] = A, t[30] = j);
    let M;
    t[31] === l ? M = t[32] : (M = l.formatMessage(Q.customModalCancelLabel), t[31] = l, t[32] = M);
    let se;
    t[33] === Symbol.for(`react.memo_cache_sentinel`) ? (se = (0, Z.jsx)(W, {
        className: `h-4 w-4`
    }), t[33] = se) : se = t[33];
    let N;
    t[34] !== i || t[35] !== M ? (N = (0, Z.jsx)(`button`, {
        type: `button`,
        className: `text-token-text-tertiary hover:text-token-text-primary rounded-full p-1`,
        onClick: i,
        "aria-label": M,
        children: se
    }), t[34] = i, t[35] = M, t[36] = N) : N = t[36];
    let P;
    t[37] !== j || t[38] !== N ? (P = (0, Z.jsx)(oe.Header, {
        className: `px-6 ps-6 pt-6 pb-0`,
        title: j,
        closeButton: N
    }), t[37] = j, t[38] = N, t[39] = P) : P = t[39];
    let F;
    t[40] === l ? F = t[41] : (F = l.formatMessage(Q.customSharedUsageLimitDescription), t[40] = l, t[41] = F);
    let I;
    t[42] === F ? I = t[43] : (I = (0, Z.jsx)(`p`, {
        className: `text-token-text-tertiary text-xs leading-relaxed`,
        children: F
    }), t[42] = F, t[43] = I);
    let L;
    t[44] === l ? L = t[45] : (L = l.formatMessage(Q.customSharedUsageLimitAriaLabel), t[44] = l, t[45] = L);
    let R;
    t[46] === x ? R = t[47] : (R = e => x(e.target.value), t[46] = x, t[47] = R);
    let z;
    t[48] === ae ? z = t[49] : (z = (0, Z.jsx)(`span`, {
        className: `text-token-text-primary pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 text-xs`,
        children: ae
    }), t[48] = ae, t[49] = z);
    let B;
    t[50] !== ie || t[51] !== re || t[52] !== D || t[53] !== L || t[54] !== R || t[55] !== z || t[56] !== u ? (B = (0, Z.jsx)(le, {
        name: `custom-shared-usage-limit`,
        ariaLabel: L,
        inputMode: `numeric`,
        value: u,
        onChange: R,
        className: ie,
        insideContainerChildren: z,
        inputClassName: re,
        showErrorIcon: !1,
        showInlineErrorMessage: !1,
        error: D
    }), t[50] = ie, t[51] = re, t[52] = D, t[53] = L, t[54] = R, t[55] = z, t[56] = u, t[57] = B) : B = t[57];
    let ue;
    t[58] !== I || t[59] !== B ? (ue = (0, Z.jsxs)(`div`, {
        className: `flex flex-col gap-3 px-6 text-sm`,
        children: [I, B]
    }), t[58] = I, t[59] = B, t[60] = ue) : ue = t[60];
    let V;
    t[61] !== te || t[62] !== ne ? (V = ne && (0, Z.jsxs)(`div`, {
        className: `text-interactive-label-warning-secondary mb-3 flex items-center gap-2 text-xs`,
        children: [(0, Z.jsx)(de, {
            className: `h-4 w-4`,
            "aria-hidden": `true`
        }), (0, Z.jsx)(`span`, {
            children: te
        })]
    }), t[61] = te, t[62] = ne, t[63] = V) : V = t[63];
    let H;
    t[64] !== l || t[65] !== c ? (H = l.formatMessage(c ? Q.customModalApplyLabel : Q.customModalSaveLabel), t[64] = l, t[65] = c, t[66] = H) : H = t[66];
    let U = !T,
        fe = !T,
        G;
    t[67] !== T || t[68] !== a || t[69] !== ee ? (G = () => {
        p(!0), T && a(ee)
    }, t[67] = T, t[68] = a, t[69] = ee, t[70] = G) : G = t[70];
    let K;
    t[71] !== H || t[72] !== U || t[73] !== fe || t[74] !== G ? (K = (0, Z.jsx)(oe.Button, {
        color: `primary`,
        title: H,
        visuallyDisabled: U,
        "aria-disabled": fe,
        onClick: G
    }), t[71] = H, t[72] = U, t[73] = fe, t[74] = G, t[75] = K) : K = t[75];
    let pe;
    t[76] === l ? pe = t[77] : (pe = l.formatMessage(Q.customModalCancelLabel), t[76] = l, t[77] = pe);
    let q;
    t[78] !== i || t[79] !== pe ? (q = (0, Z.jsx)(oe.Button, {
        title: pe,
        onClick: i
    }), t[78] = i, t[79] = pe, t[80] = q) : q = t[80];
    let me;
    t[81] !== K || t[82] !== q ? (me = (0, Z.jsx)(oe.Actions, {
        primaryButton: K,
        secondaryButton: q
    }), t[81] = K, t[82] = q, t[83] = me) : me = t[83];
    let J;
    t[84] !== V || t[85] !== me ? (J = (0, Z.jsxs)(`div`, {
        className: `px-6 pb-4`,
        children: [V, me]
    }), t[84] = V, t[85] = me, t[86] = J) : J = t[86];
    let he;
    t[87] !== P || t[88] !== ue || t[89] !== J ? (he = (0, Z.jsx)(oe.Overlay, {
        children: (0, Z.jsx)(oe.Content, {
            position: `center`,
            className: `start-auto col-start-1 row-start-1 w-full max-w-sm ltr:translate-x-0 rtl:translate-x-0`,
            containerClassName: `grid grid-cols-1 grid-rows-1 place-items-center`,
            children: (0, Z.jsxs)(`div`, {
                className: `flex flex-col gap-4`,
                children: [P, ue, J]
            })
        })
    }), t[87] = P, t[88] = ue, t[89] = J, t[90] = he) : he = t[90];
    let ge;
    return t[91] !== n || t[92] !== k || t[93] !== he ? (ge = (0, Z.jsx)(oe.Root, {
        isOpen: n,
        onClose: k,
        testId: `modal-custom-shared-usage-limit`,
        children: he
    }), t[91] = n, t[92] = k, t[93] = he, t[94] = ge) : ge = t[94], ge
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
        u = c !== void 0 && c,
        d = ce(),
        [f, p] = (0, X.useState)(r),
        [m, h] = (0, X.useState)(i),
        [g, _] = (0, X.useState)(a),
        [v, y] = (0, X.useState)(!1),
        x;
    t[0] !== r || t[1] !== f || t[2] !== i || t[3] !== a || t[4] !== g || t[5] !== m || t[6] !== n || t[7] !== u ? (x = u && n && (f.trim() !== r.trim() || m !== i || m && g.trim() !== a.trim()), t[0] = r, t[1] = f, t[2] = i, t[3] = a, t[4] = g, t[5] = m, t[6] = n, t[7] = u, t[8] = x) : x = t[8];
    let S = x,
        C, w;
    t[9] !== S || t[10] !== l ? (C = () => {
        if (S) return l?.(!0), () => l?.(!1)
    }, w = [S, l], t[9] = S, t[10] = l, t[11] = C, t[12] = w) : (C = t[11], w = t[12]), (0, X.useEffect)(C, w);
    let T, E;
    t[13] !== r || t[14] !== i || t[15] !== a || t[16] !== n ? (T = () => {
        n && (p(r), h(i), _(a), y(!1))
    }, E = [r, i, a, n], t[13] = r, t[14] = i, t[15] = a, t[16] = n, t[17] = T, t[18] = E) : (T = t[17], E = t[18]), (0, X.useEffect)(T, E);
    let te, ne;
    t[19] === m ? (te = t[20], ne = t[21]) : (te = () => {
        m || y(!1)
    }, ne = [m], t[19] = m, t[20] = te, t[21] = ne), (0, X.useEffect)(te, ne);
    let D, re;
    t[22] !== f || t[23] !== g || t[24] !== m ? (re = () => {
        m && g.trim() === `0` && f !== `` && p(``)
    }, D = [f, g, m], t[22] = f, t[23] = g, t[24] = m, t[25] = D, t[26] = re) : (D = t[25], re = t[26]), (0, X.useEffect)(re, D);
    let ie;
    t[27] === v ? ie = t[28] : (ie = () => {
        v && y(!1)
    }, t[27] = v, t[28] = ie);
    let O = ie,
        ae, k;
    if (t[29] !== O) {
        ae = t => {
            e(p, t), O()
        }, k = t => {
            e(_, t), O()
        };
        let e = et;
        t[29] = O, t[30] = ae, t[31] = k
    } else ae = t[30], k = t[31];
    let A, j, M, se, N, P, F, I, L, R, z, B, ue, V, H, U, fe, G, K, pe, q, me, J, he;
    if (t[32] !== f || t[33] !== g || t[34] !== v || t[35] !== d || t[36] !== m || t[37] !== n || t[38] !== o) {
        let {
            alertTrimmed: e,
            hardCapTrimmed: r,
            hasAlertValue: i,
            hasHardCapValue: a,
            isHardCapZero: s,
            isAlertValid: c,
            isHardCapValid: l,
            hasHardCapConflict: u,
            alertErrorMessage: p,
            hardCapErrorMessage: h
        } = Qe({
            alertValue: f,
            hardCapValue: g,
            isHardCapEnabled: m,
            intl: d
        });
        N = e, L = r, z = s, R = z, B = !i && !a || !c || !l || u;
        let _ = v && (!!p || !!h);
        ue = _ ? h || p : ``, se = _ && p ? p : void 0, I = _ && h ? h : void 0, P = I ? `border-token-border-error focus-within:border-token-border-error focus-within:ring-token-border-error` : void 0, F = `pe-24${I?` text-interactive-label-warning-secondary placeholder:text-interactive-label-warning-secondary`:``}`;
        let y;
        t[63] === d ? y = t[64] : (y = d.formatMessage(Q.customModalCreditsSuffix), t[63] = d, t[64] = y), V = y, M = oe.Root, me = n, t[65] === o ? J = t[66] : (J = e => {
            e || o()
        }, t[65] = o, t[66] = J), he = `modal-custom-usage-limit`, j = oe.Overlay, A = oe.Content, K = `center`, pe = `start-auto col-start-1 row-start-1 w-full max-w-sm ltr:translate-x-0 rtl:translate-x-0`, q = `grid grid-cols-1 grid-rows-1 place-items-center`, fe = `flex flex-col gap-4`;
        let b;
        t[67] === d ? b = t[68] : (b = d.formatMessage(Q.customModalTitle), t[67] = d, t[68] = b);
        let x;
        t[69] === b ? x = t[70] : (x = (0, Z.jsx)(`div`, {
            className: `text-lg font-semibold`,
            children: b
        }), t[69] = b, t[70] = x);
        let S;
        t[71] === d ? S = t[72] : (S = d.formatMessage(Q.customModalCancelLabel), t[71] = d, t[72] = S);
        let C;
        t[73] === Symbol.for(`react.memo_cache_sentinel`) ? (C = (0, Z.jsx)(W, {
            className: `h-4 w-4`
        }), t[73] = C) : C = t[73];
        let w;
        t[74] !== o || t[75] !== S ? (w = (0, Z.jsx)(`button`, {
            type: `button`,
            className: `text-token-text-tertiary hover:text-token-text-primary rounded-full p-1`,
            onClick: o,
            "aria-label": S,
            children: C
        }), t[74] = o, t[75] = S, t[76] = w) : w = t[76], t[77] !== x || t[78] !== w ? (G = (0, Z.jsx)(oe.Header, {
            className: `px-6 ps-6 pt-6 pb-0`,
            title: x,
            closeButton: w
        }), t[77] = x, t[78] = w, t[79] = G) : G = t[79], U = `flex flex-col gap-6 px-6 text-sm`, H = ee(`flex flex-col gap-3`, R && `opacity-50`), t[32] = f, t[33] = g, t[34] = v, t[35] = d, t[36] = m, t[37] = n, t[38] = o, t[39] = A, t[40] = j, t[41] = M, t[42] = se, t[43] = N, t[44] = P, t[45] = F, t[46] = I, t[47] = L, t[48] = R, t[49] = z, t[50] = B, t[51] = ue, t[52] = V, t[53] = H, t[54] = U, t[55] = fe, t[56] = G, t[57] = K, t[58] = pe, t[59] = q, t[60] = me, t[61] = J, t[62] = he
    } else A = t[39], j = t[40], M = t[41], se = t[42], N = t[43], P = t[44], F = t[45], I = t[46], L = t[47], R = t[48], z = t[49], B = t[50], ue = t[51], V = t[52], H = t[53], U = t[54], fe = t[55], G = t[56], K = t[57], pe = t[58], q = t[59], me = t[60], J = t[61], he = t[62];
    let ge;
    t[80] === d ? ge = t[81] : (ge = d.formatMessage(Q.customModalSetAlertLabel), t[80] = d, t[81] = ge);
    let _e;
    t[82] === ge ? _e = t[83] : (_e = (0, Z.jsx)(`div`, {
        className: `text-token-text-primary font-medium`,
        children: ge
    }), t[82] = ge, t[83] = _e);
    let ve;
    t[84] === d ? ve = t[85] : (ve = d.formatMessage(Q.customModalSetAlertDescription), t[84] = d, t[85] = ve);
    let ye;
    t[86] === ve ? ye = t[87] : (ye = (0, Z.jsx)(`p`, {
        className: `text-token-text-tertiary mt-1 text-xs leading-relaxed`,
        children: ve
    }), t[86] = ve, t[87] = ye);
    let be;
    t[88] !== _e || t[89] !== ye ? (be = (0, Z.jsxs)(`div`, {
        children: [_e, ye]
    }), t[88] = _e, t[89] = ye, t[90] = be) : be = t[90];
    let xe;
    t[91] === d ? xe = t[92] : (xe = d.formatMessage(Q.customModalSetAlertLabel), t[91] = d, t[92] = xe);
    let Se;
    t[93] === ae ? Se = t[94] : (Se = e => ae(e.target.value), t[93] = ae, t[94] = Se);
    let Ce;
    t[95] === V ? Ce = t[96] : (Ce = (0, Z.jsx)(`span`, {
        className: `text-token-text-primary pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 text-xs`,
        children: V
    }), t[95] = V, t[96] = Ce);
    let we;
    t[97] !== se || t[98] !== f || t[99] !== R || t[100] !== xe || t[101] !== Se || t[102] !== Ce ? (we = (0, Z.jsx)(le, {
        name: `custom-alert-limit`,
        ariaLabel: xe,
        inputMode: `numeric`,
        value: f,
        onChange: Se,
        disabled: R,
        insideContainerChildren: Ce,
        inputClassName: `pe-24`,
        showErrorIcon: !1,
        showInlineErrorMessage: !1,
        error: se
    }), t[97] = se, t[98] = f, t[99] = R, t[100] = xe, t[101] = Se, t[102] = Ce, t[103] = we) : we = t[103];
    let Te;
    t[104] !== d || t[105] !== R ? (Te = R && (0, Z.jsx)(`div`, {
        className: `text-token-text-warning text-xs`,
        children: d.formatMessage(Q.customModalAlertDisabledNote)
    }), t[104] = d, t[105] = R, t[106] = Te) : Te = t[106];
    let Ee;
    t[107] !== H || t[108] !== be || t[109] !== we || t[110] !== Te ? (Ee = (0, Z.jsxs)(`div`, {
        className: H,
        children: [be, we, Te]
    }), t[107] = H, t[108] = be, t[109] = we, t[110] = Te, t[111] = Ee) : Ee = t[111];
    let De;
    t[112] === d ? De = t[113] : (De = d.formatMessage(Q.customModalSetHardCapLabel), t[112] = d, t[113] = De);
    let Oe;
    t[114] === De ? Oe = t[115] : (Oe = (0, Z.jsx)(`div`, {
        className: `flex items-center gap-1.5`,
        children: (0, Z.jsx)(`div`, {
            className: `text-token-text-primary font-medium`,
            children: De
        })
    }), t[114] = De, t[115] = Oe);
    let ke;
    t[116] === d ? ke = t[117] : (ke = d.formatMessage(Q.customModalToggleAriaLabel), t[116] = d, t[117] = ke);
    let Ae;
    t[118] === O ? Ae = t[119] : (Ae = e => {
        h(!!e), O()
    }, t[118] = O, t[119] = Ae);
    let je;
    t[120] !== m || t[121] !== ke || t[122] !== Ae ? (je = (0, Z.jsx)(b, {
        "aria-label": ke,
        checked: m,
        onCheckedChange: Ae
    }), t[120] = m, t[121] = ke, t[122] = Ae, t[123] = je) : je = t[123];
    let Me;
    t[124] !== Oe || t[125] !== je ? (Me = (0, Z.jsxs)(`div`, {
        className: `flex items-center justify-between gap-2`,
        children: [Oe, je]
    }), t[124] = Oe, t[125] = je, t[126] = Me) : Me = t[126];
    let Ne;
    t[127] === d ? Ne = t[128] : (Ne = d.formatMessage(Q.customModalSetHardCapDescription), t[127] = d, t[128] = Ne);
    let Pe;
    t[129] === Ne ? Pe = t[130] : (Pe = (0, Z.jsx)(`p`, {
        className: `text-token-text-tertiary text-xs leading-relaxed`,
        children: Ne
    }), t[129] = Ne, t[130] = Pe);
    let Fe;
    t[131] !== k || t[132] !== P || t[133] !== F || t[134] !== I || t[135] !== g || t[136] !== d || t[137] !== m || t[138] !== V ? (Fe = m && (0, Z.jsx)(Z.Fragment, {
        children: (0, Z.jsx)(le, {
            name: `custom-hard-cap-limit`,
            ariaLabel: d.formatMessage(Q.customModalSetHardCapLabel),
            inputMode: `numeric`,
            value: g,
            onChange: e => k(e.target.value),
            className: P,
            insideContainerChildren: (0, Z.jsx)(`span`, {
                className: `text-token-text-primary pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 text-xs`,
                children: V
            }),
            inputClassName: F,
            showErrorIcon: !1,
            showInlineErrorMessage: !1,
            error: I
        })
    }), t[131] = k, t[132] = P, t[133] = F, t[134] = I, t[135] = g, t[136] = d, t[137] = m, t[138] = V, t[139] = Fe) : Fe = t[139];
    let Ie;
    t[140] !== Me || t[141] !== Pe || t[142] !== Fe ? (Ie = (0, Z.jsxs)(`div`, {
        className: `flex flex-col gap-3`,
        children: [Me, Pe, Fe]
    }), t[140] = Me, t[141] = Pe, t[142] = Fe, t[143] = Ie) : Ie = t[143];
    let Le;
    t[144] !== U || t[145] !== Ee || t[146] !== Ie ? (Le = (0, Z.jsxs)(`div`, {
        className: U,
        children: [Ee, Ie]
    }), t[144] = U, t[145] = Ee, t[146] = Ie, t[147] = Le) : Le = t[147];
    let Re;
    t[148] === ue ? Re = t[149] : (Re = ue && (0, Z.jsxs)(`div`, {
        className: `text-interactive-label-warning-secondary mb-3 flex items-center gap-2 text-xs`,
        children: [(0, Z.jsx)(de, {
            className: `h-4 w-4`,
            "aria-hidden": `true`
        }), (0, Z.jsx)(`span`, {
            children: ue
        })]
    }), t[148] = ue, t[149] = Re);
    let ze;
    t[150] !== d || t[151] !== u ? (ze = d.formatMessage(u ? Q.customModalApplyLabel : Q.customModalSaveLabel), t[150] = d, t[151] = u, t[152] = ze) : ze = t[152];
    let Be;
    t[153] !== N || t[154] !== L || t[155] !== m || t[156] !== z || t[157] !== B || t[158] !== s ? (Be = () => {
        y(!0), !B && s({
            alertLimit: z ? `` : N,
            hardCapEnabled: m,
            hardCapLimit: m ? L : ``
        })
    }, t[153] = N, t[154] = L, t[155] = m, t[156] = z, t[157] = B, t[158] = s, t[159] = Be) : Be = t[159];
    let Ve;
    t[160] !== B || t[161] !== ze || t[162] !== Be ? (Ve = (0, Z.jsx)(oe.Button, {
        color: `primary`,
        title: ze,
        visuallyDisabled: B,
        "aria-disabled": B,
        onClick: Be
    }), t[160] = B, t[161] = ze, t[162] = Be, t[163] = Ve) : Ve = t[163];
    let He;
    t[164] === d ? He = t[165] : (He = d.formatMessage(Q.customModalCancelLabel), t[164] = d, t[165] = He);
    let Y;
    t[166] !== o || t[167] !== He ? (Y = (0, Z.jsx)(oe.Button, {
        title: He,
        onClick: o
    }), t[166] = o, t[167] = He, t[168] = Y) : Y = t[168];
    let Ue;
    t[169] !== Ve || t[170] !== Y ? (Ue = (0, Z.jsx)(oe.Actions, {
        primaryButton: Ve,
        secondaryButton: Y
    }), t[169] = Ve, t[170] = Y, t[171] = Ue) : Ue = t[171];
    let We;
    t[172] !== Re || t[173] !== Ue ? (We = (0, Z.jsxs)(`div`, {
        className: `px-6 pb-4`,
        children: [Re, Ue]
    }), t[172] = Re, t[173] = Ue, t[174] = We) : We = t[174];
    let Ge;
    t[175] !== fe || t[176] !== G || t[177] !== Le || t[178] !== We ? (Ge = (0, Z.jsxs)(`div`, {
        className: fe,
        children: [G, Le, We]
    }), t[175] = fe, t[176] = G, t[177] = Le, t[178] = We, t[179] = Ge) : Ge = t[179];
    let Ke;
    t[180] !== A || t[181] !== K || t[182] !== pe || t[183] !== q || t[184] !== Ge ? (Ke = (0, Z.jsx)(A, {
        position: K,
        className: pe,
        containerClassName: q,
        children: Ge
    }), t[180] = A, t[181] = K, t[182] = pe, t[183] = q, t[184] = Ge, t[185] = Ke) : Ke = t[185];
    let qe;
    t[186] !== j || t[187] !== Ke ? (qe = (0, Z.jsx)(j, {
        children: Ke
    }), t[186] = j, t[187] = Ke, t[188] = qe) : qe = t[188];
    let Je;
    return t[189] !== M || t[190] !== me || t[191] !== J || t[192] !== he || t[193] !== qe ? (Je = (0, Z.jsx)(M, {
        isOpen: me,
        onClose: J,
        testId: he,
        children: qe
    }), t[189] = M, t[190] = me, t[191] = J, t[192] = he, t[193] = qe, t[194] = Je) : Je = t[194], Je
}

function et(e, t) {
    let n = t.replace(/\s+/g, ``);
    /^\d*$/.test(n) && e(n)
}
var tt, X, Z, nt, rt, Q, it, at, ot, st, ct, lt, ut, dt = e((() => {
        tt = R(), Oe(), xe(), Se(), H(), q(), pe(), U(), u(), h(), B(), k(), E(), x(), a(), v(), ne(), X = t(F()), P(), Z = A(), nt = `text-token-link hover:text-token-link-hover underline`, rt = {
            low: 300,
            medium: 400,
            high: 550
        }, Q = M({
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
        Ee(), ft = e => e.trim().toLowerCase(), pt = (e, t, n) => e == null ? `` : typeof e == `string` ? e : String(t.formatMessage(e, n)), mt = (e, ...t) => !e || t.join(` `).toLowerCase().includes(e), ht = ({
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
            let o = Te(t.flatMap(e => e.newReleaseEntries)),
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
    return e.newReleaseOptOutFlag === m.LIBRARY_SHARING_GA_OPT_OUT
}

function xt(e) {
    return e.rbac ? [e.permissionName] : []
}
var St, Ct, $, wt, Tt, Et, Dt, Ot, kt, At = e((() => {
        St = R(), O(), Re(), te(), Pe(), ke(), Me(), D(), Ee(), J(), We(), Ye(), u(), fe(), T(), z(), i(), h(), s(), k(), E(), ne(), Ct = t(F()), P(), _t(), $ = A(), wt = `text-token-link hover:text-token-link-hover underline`, Tt = e => {
            "use forget";
            let t = (0, St.c)(9),
                {
                    entry: n
                } = e;
            if (!n.description && !n.additionalDescription) return null;
            let r;
            t[0] !== n.description || t[1] !== n.descriptionValues ? (r = n.description && (0, $.jsx)(`div`, {
                children: (0, $.jsx)(N, {
                    ...n.description,
                    values: n.descriptionValues
                })
            }), t[0] = n.description, t[1] = n.descriptionValues, t[2] = r) : r = t[2];
            let i;
            t[3] !== n.additionalDescription || t[4] !== n.additionalDescriptionValues ? (i = n.additionalDescription && (0, $.jsx)(`div`, {
                children: (0, $.jsx)(N, {
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
            e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, $.jsx)(K, {
                "aria-hidden": `true`,
                className: `icon text-token-interactive-icon-tertiary-default`
            }), e[0] = t) : t = e[0];
            let n;
            e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, $.jsx)(`p`, {
                className: `text-token-text-primary text-sm font-semibold`,
                children: (0, $.jsx)(N, {
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
                        children: (0, $.jsx)(N, {
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
                    handleSaveRole: a,
                    role: s,
                    showOptOutControls: l,
                    isRbacEnabled: u,
                    layout: d,
                    disableAllToggles: h,
                    disableRolePermissionWrites: g,
                    searchQuery: v,
                    sectionExpanded: x,
                    forceSectionExpanded: S,
                    onSectionExpandedChange: T,
                    renderHighlightedText: E,
                    renderSettingEntryControl: te,
                    getEntryPresentation: ne,
                    renderRbacEntryControl: D,
                    useSitesPermissionSelect: re,
                    effectiveRolePermissions: ie,
                    onOptOutChange: O,
                    loadingAdminPreviewFeature: ae,
                    onSetAdminPreviewAccess: k
                } = e,
                A = d === void 0 ? `card` : d,
                j = h !== void 0 && h,
                M = g !== void 0 && g,
                se = v === void 0 ? `` : v,
                P = S !== void 0 && S,
                F = re === void 0 || re,
                I = ce(),
                L = (0, Ct.useId)(),
                R = y(n),
                z = C(),
                le = R ?? z,
                [B, V] = (0, Ct.useState)(null),
                H, U, de, fe, W, G, K, pe, q, me, J, ge, _e, ve, ye, xe;
            if (t[0] !== le?.isHipaaCompliantWorkspace || t[1] !== r || t[2] !== j || t[3] !== M || t[4] !== ie || t[5] !== P || t[6] !== ne || t[7] !== a || t[8] !== I || t[9] !== u || t[10] !== A || t[11] !== ae || t[12] !== O || t[13] !== T || t[14] !== k || t[15] !== B?.enableConfirmation || t[16] !== i || t[17] !== E || t[18] !== D || t[19] !== te || t[20] !== s || t[21] !== se || t[22] !== L || t[23] !== x || t[24] !== l || t[25] !== F || t[26] !== n) {
                _e = Symbol.for(`react.early_return_sentinel`);
                bb0: {
                    let e = gt({
                            intl: I,
                            preReleases: i,
                            searchQuery: se,
                            getEntryPresentation: ne,
                            layout: A,
                            effectiveRolePermissions: ie,
                            rolePermissions: s.permissions
                        }),
                        o = e.some(vt);
                    if (ft(se) && (A === `section` ? !o : e.length === 0)) {
                        _e = null;
                        break bb0
                    }
                    let d = A === `section` && !o,
                        h = d ? [] : e,
                        g = d || h.some(yt),
                        v = g ? kt.adminPreviewSection : kt.enterpriseBetaFeatureSection,
                        y = le?.isHipaaCompliantWorkspace ?? !1,
                        S = g ? kt.adminPreviewSectionDescription : h.some(bt) ? kt.enterpriseBetaFeaturePerFeatureReleaseDescription : A === `section` ? kt.enterpriseBetaFeatureJuly30SectionDescription : kt.enterpriseBetaFeatureSectionDescription,
                        C;t[43] !== S || t[44] !== I || t[45] !== E ? (C = E?.(I.formatMessage(S)), t[43] = S, t[44] = I, t[45] = E, t[46] = C) : C = t[46];
                    let re = C,
                        oe = A !== `section` && e.length === 0 ? kt.enterpriseBetaFeatureEmptySectionDescription : y && o && !g ? (0, $.jsxs)(`div`, {
                            className: `flex flex-col gap-2`,
                            children: [(0, $.jsx)(`p`, {
                                children: re ?? (0, $.jsx)(N, {
                                    ...S
                                })
                            }), (0, $.jsx)(`p`, {
                                className: `text-token-text-status-warning`,
                                children: (0, $.jsx)(N, {
                                    ...kt.enterpriseBetaFeatureSectionHipaaDescription
                                })
                            })]
                        }) : re ?? S,
                        R;t[47] === I ? R = t[48] : (R = e => typeof e.title == `string` ? e.title : I.formatMessage(e.title), t[47] = I, t[48] = R),
                    U = R;
                    let ce;t[49] === s.permissions ? ce = t[50] : (ce = (e, t) => {
                        let n = e.additionalPermissionNames ?? [];
                        return Ce({
                            add: t,
                            currentPermissionNames: s.permissions,
                            permissionName: e.permissionName,
                            additionalPermissionNames: t ? n : [...n, ...e.permissionNamesToRemoveWhenDisabled ?? []]
                        })
                    }, t[49] = s.permissions, t[50] = ce);
                    let z = ce,
                        Se;t[51] !== M || t[52] !== a ? (Se = e => M ? Promise.resolve() : a(e), t[51] = M, t[52] = a, t[53] = Se) : Se = t[53];
                    let we = Se,
                        Te;t[54] !== z || t[55] !== s || t[56] !== we ? (Te = (e, t) => we({
                        ...s,
                        permissions: z(e, t)
                    }), t[54] = z, t[55] = s, t[56] = we, t[57] = Te) : Te = t[57],
                    fe = Te,
                    de = B?.enableConfirmation;
                    let Ee = A === `section` && x != null && T != null,
                        De = !Ee || P || x,
                        Oe, ke;t[58] !== I || t[59] !== E || t[60] !== v ? (Oe = I.formatMessage(v), ke = E?.(Oe), t[58] = I, t[59] = E, t[60] = v, t[61] = Oe, t[62] = ke) : (Oe = t[61], ke = t[62]);
                    let Me = ke;H = he,
                    K = ee(A === `section` ? ee(`border-token-border-default gap-4 border-b pb-8 last:border-b-0`, De && `md:grid md:grid-cols-[minmax(0,240px)_minmax(0,1fr)] md:gap-x-[30px]`) : ee(`border-token-border-default rounded-2xl border`, g ? `p-8!` : `p-6`), be),
                    pe = v,
                    t[63] !== De || t[64] !== P || t[65] !== Me || t[66] !== Ee || t[67] !== T || t[68] !== E || t[69] !== L || t[70] !== Oe || t[71] !== v ? (q = Ee ? (0, $.jsxs)(`span`, {
                        className: `flex items-center gap-3`,
                        children: [(0, $.jsx)(Fe, {
                            sectionTitle: Oe,
                            expanded: De,
                            controlsId: L,
                            disabled: P,
                            onExpandedChange: T
                        }), (0, $.jsx)(`span`, {
                            children: Me ?? (0, $.jsx)(N, {
                                ...v
                            })
                        })]
                    }) : E ? (0, $.jsx)(`span`, {
                        children: Me
                    }) : void 0, t[63] = De, t[64] = P, t[65] = Me, t[66] = Ee, t[67] = T, t[68] = E, t[69] = L, t[70] = Oe, t[71] = v, t[72] = q) : q = t[72],
                    me = A === `section` ? void 0 : g ? `text-base! leading-6! font-medium!` : `text-[18px]! leading-[26px]!`,
                    J = oe,
                    ge = Ee ? `ps-11` : A === `card` && g ? `text-xs! leading-[18px]!` : void 0,
                    ve = Ee ? L : void 0,
                    ye = Ee && !De,
                    xe = De ? `flex flex-col gap-4` : `hidden`,
                    t[73] === d ? W = t[74] : (W = d && (0, $.jsx)(Dt, {}), t[73] = d, t[74] = W),
                    G = h.map(e => {
                        let t = new Set(e.newReleaseEntries.flatMap(xt)),
                            i = e.hideEarlyAccessBadge ? null : (0, $.jsx)(`span`, {
                                className: `inline-flex h-[18px] shrink-0 items-center justify-center rounded-[6px] bg-[var(--green-a50)] px-[5px] text-xs font-medium text-[light-dark(var(--green-600),var(--green-400))]`,
                                children: (0, $.jsx)(N, {
                                    ...kt.enterpriseBetaFeatureBadge
                                })
                            }),
                            a = e.newReleaseEntries.map((n, i) => {
                                let a = n.rbac ? n.permissionName : n.settingName,
                                    o = n.rbac ? n.additionalPermissionNames ?? [] : [],
                                    l = e.adminPreviewFeature == null ? ne?.(n, t, e.newReleaseEntries[i + 1]) : void 0,
                                    u = l?.title ?? U(n),
                                    d = n.rbac && n.dependsOnPermissionName != null && !(ie ?? s.permissions).includes(n.dependsOnPermissionName),
                                    m = n.rbac && M,
                                    h = Le({
                                        isReadOnly: m,
                                        disabledReason: n.disabledReason
                                    }),
                                    g = j || m || n.disabled || d || e.adminPreviewFeature === `admin_preview_library_sharing` && r.admin_preview_launch_settings?.admin_preview_library_sharing == null,
                                    v = n.rbac && (n.dependsOnPermissionName != null || n.permissionNamesToRemoveWhenDisabled != null || n.enableConfirmation != null),
                                    y = n.rbac ? D?.(n, g, h, u) : null,
                                    x;
                                if (!n.rbac) x = te?.(n, g) ?? null;
                                else if (y != null) x = n.permissionName === w.SitesAccess ? (0, $.jsx)(Ne, {
                                    children: y
                                }) : y;
                                else if (n.permissionName === w.SitesAccess) x = F && p() ? (0, $.jsx)(Ne, {
                                    children: (0, $.jsx)(je, {
                                        ariaLabel: u,
                                        role: s,
                                        handleSaveRole: we,
                                        disabled: g,
                                        disabledReason: h
                                    })
                                }) : (0, $.jsx)(Ne, {
                                    children: (0, $.jsx)(Ae, {
                                        ariaLabel: u,
                                        role: s,
                                        permissionName: n.permissionName,
                                        additionalPermissionNames: n.additionalPermissionNames,
                                        permissionNamesToRemoveWhenDisabled: n.permissionNamesToRemoveWhenDisabled,
                                        enableConfirmation: n.enableConfirmation,
                                        handleSaveRole: we,
                                        disabled: g,
                                        disabledReason: h,
                                        renderDisabledToggleAsOff: n.renderDisabledToggleAsOff
                                    })
                                });
                                else if (!v) x = (0, $.jsx)(Ae, {
                                    ariaLabel: u,
                                    role: s,
                                    permissionName: n.permissionName,
                                    handleSaveRole: we,
                                    disabled: g,
                                    disabledReason: h,
                                    renderDisabledToggleAsOff: n.renderDisabledToggleAsOff
                                });
                                else {
                                    let e = [n.permissionName, ...o],
                                        t = (0, $.jsx)(b, {
                                            size: `normal`,
                                            "aria-label": u,
                                            checked: !(g && n.renderDisabledToggleAsOff) && e.every(e => s.permissions.includes(e)),
                                            onCheckedChange: e => {
                                                if (e && n.enableConfirmation) {
                                                    V(n);
                                                    return
                                                }
                                                fe(n, e)
                                            },
                                            disabled: g
                                        });
                                    x = g && h ? (0, $.jsx)(f, {
                                        label: I.formatMessage(h),
                                        children: t
                                    }) : t
                                }
                                return x == null ? null : (0, $.jsx)(`div`, {
                                    className: ee(`flex justify-between gap-4 py-3`, A === `section` && e.adminPreviewFeature != null && `px-4`, l?.className),
                                    children: (0, $.jsxs)(`div`, {
                                        className: `flex w-full items-center justify-between gap-4`,
                                        children: [(0, $.jsxs)(`div`, {
                                            children: [(0, $.jsxs)(`div`, {
                                                className: `text-md flex items-center gap-2`,
                                                children: [l?.label ?? (E ? (0, $.jsx)(`span`, {
                                                    children: E(u)
                                                }) : I.formatMessage({
                                                    id: `workspaceSettings.templateTitle.enterpriseReleaseTitle`,
                                                    defaultMessage: `{name}`
                                                }, {
                                                    name: u
                                                })), e.adminPreviewFeature != null && (0, $.jsx)(ue, {
                                                    contentLayout: `multi-line`,
                                                    content: typeof e.description == `string` ? e.description : I.formatMessage(e.description),
                                                    side: `top-center`,
                                                    children: e => (0, $.jsx)(`button`, {
                                                        ...e,
                                                        type: `button`,
                                                        "aria-label": I.formatMessage(kt.featureInfo, {
                                                            feature: u
                                                        }),
                                                        className: `interactive-button interactive-label-tertiary inline-flex items-center rounded-sm`,
                                                        children: (0, $.jsx)(_, {
                                                            className: `icon-sm`,
                                                            "aria-hidden": `true`
                                                        })
                                                    })
                                                })]
                                            }), (0, $.jsx)(Tt, {
                                                entry: n
                                            }), n.rbac && n.permissionName === w.LibrarySharingManagementAccess && (0, $.jsx)(qe, {
                                                controlMode: r.library_sharing_control_mode,
                                                enabled: r.beta_settings.library_sharing_enabled ?? !1
                                            }), e.adminPreviewFeature != null && n.rbac && (0, $.jsxs)(`button`, {
                                                type: `button`,
                                                className: `interactive-button text-token-interactive-label-accent-accessible relative mt-1 text-xs`,
                                                "aria-busy": ae === e.adminPreviewFeature,
                                                disabled: j || M || n.disabled || k == null,
                                                onClick: () => k?.(e, n),
                                                children: [(0, $.jsx)(N, {
                                                    ...r.admin_preview_launch_settings?.[e.adminPreviewFeature] == null ? kt.setAccess : kt.editAccess
                                                }), ae === e.adminPreviewFeature && (0, $.jsx)(`span`, {
                                                    "aria-hidden": `true`,
                                                    className: `absolute start-full top-1/2 ms-1 -translate-y-1/2`,
                                                    children: (0, $.jsx)(c, {
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
                                                    children: x
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
                            children: [y && e.newReleaseEntries.length > 0 && (0, $.jsx)(`p`, {
                                className: `text-token-text-status-warning text-sm`,
                                children: (0, $.jsx)(N, {
                                    ...kt.enterpriseBetaFeatureSectionHipaaDescription
                                })
                            }), a]
                        }, e.adminPreviewFeature);
                        let o = e.description;
                        typeof o != `string` && (o = I.formatMessage(o));
                        let d = e.infoTooltip;
                        return (0, $.jsxs)(`div`, {
                            className: `m-auto flex w-full flex-col`,
                            id: e.anchorId,
                            children: [(0, $.jsxs)(`div`, {
                                className: `flex flex-col gap-2 py-2`,
                                children: [(0, $.jsxs)(`div`, {
                                    children: [(0, $.jsxs)(`div`, {
                                        className: `flex items-center gap-2 text-base font-semibold`,
                                        children: [E ? (0, $.jsx)(`span`, {
                                            children: E(e.name)
                                        }) : I.formatMessage({
                                            id: `workspaceSettings.templateTitle.enterpriseReleaseTitle`,
                                            defaultMessage: `{name}`
                                        }, {
                                            name: e.name
                                        }), i, d && (0, $.jsx)(f, {
                                            interactive: !0,
                                            label: (0, $.jsx)(N, {
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
                                                "aria-label": I.formatMessage(d.ariaLabel),
                                                className: `text-token-text-tertiary hover:text-token-text-secondary focus-visible:outline-token-border-heavy inline-flex size-4 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2`,
                                                children: (0, $.jsx)(_, {
                                                    "aria-hidden": `true`,
                                                    className: `size-3.5`
                                                })
                                            })
                                        })]
                                    }), (0, $.jsx)(`span`, {
                                        className: `text-token-text-secondary text-sm`,
                                        children: e.helpCenterLink ? (0, $.jsx)(N, {
                                            id: `workspaceSettings.templateTitle.enterpriseReleaseDescription`,
                                            defaultMessage: `{name} <learnMore>Learn more</learnMore>`,
                                            values: {
                                                name: E?.(o) ?? o,
                                                learnMore: t => (0, $.jsx)(`a`, {
                                                    href: e.helpCenterLink,
                                                    target: e.helpLinkOpenNewTab === !1 ? void 0 : `_blank`,
                                                    className: wt,
                                                    rel: e.helpLinkOpenNewTab === !1 ? void 0 : `noopener noreferrer`,
                                                    children: e.helpLinkLabel ? I.formatMessage(e.helpLinkLabel) : t
                                                })
                                            }
                                        }) : E?.(o) ?? o
                                    })]
                                }), y && g && e.newReleaseEntries.length > 0 && (0, $.jsx)(`p`, {
                                    className: `text-token-text-status-warning text-sm`,
                                    children: (0, $.jsx)(N, {
                                        ...kt.enterpriseBetaFeatureSectionHipaaDescription
                                    })
                                }), (0, $.jsx)(`div`, {
                                    role: A === `section` ? `group` : void 0,
                                    "aria-label": A === `section` ? e.name : void 0,
                                    className: ee(`flex flex-col`, A !== `section` && `divide-y divide-token-border-default border-y border-token-border-default`),
                                    children: a
                                })]
                            }), !(e.shouldHideOptOutButton ?? !1) && l && e.newReleaseOptOutFlag && (e.newReleaseOptOutFlag === m.LIBRARY_SHARING_GA_OPT_OUT ? (0, $.jsx)(Je, {
                                betaSettingsDict: r.beta_settings_dict,
                                workspaceId: n,
                                feature: e.newReleaseOptOutFlag,
                                featureName: e.optOutFeatureName ?? e.name,
                                storedValue: r.beta_settings[e.newReleaseOptOutFlag],
                                isRbacEnabled: u,
                                disabled: j,
                                onChange: O
                            }) : (0, $.jsx)(ze, {
                                workspaceId: n,
                                feature: e.newReleaseOptOutFlag,
                                featureName: e.optOutFeatureName ?? e.name,
                                storedValue: r.beta_settings[e.newReleaseOptOutFlag],
                                isRbacEnabled: u,
                                disabled: j,
                                onChange: O
                            }))]
                        }, e.name)
                    })
                }
                t[0] = le?.isHipaaCompliantWorkspace, t[1] = r, t[2] = j, t[3] = M, t[4] = ie, t[5] = P, t[6] = ne, t[7] = a, t[8] = I, t[9] = u, t[10] = A, t[11] = ae, t[12] = O, t[13] = T, t[14] = k, t[15] = B?.enableConfirmation, t[16] = i, t[17] = E, t[18] = D, t[19] = te, t[20] = s, t[21] = se, t[22] = L, t[23] = x, t[24] = l, t[25] = F, t[26] = n, t[27] = H, t[28] = U, t[29] = de, t[30] = fe, t[31] = W, t[32] = G, t[33] = K, t[34] = pe, t[35] = q, t[36] = me, t[37] = J, t[38] = ge, t[39] = _e, t[40] = ve, t[41] = ye, t[42] = xe
            } else H = t[27], U = t[28], de = t[29], fe = t[30], W = t[31], G = t[32], K = t[33], pe = t[34], q = t[35], me = t[36], J = t[37], ge = t[38], _e = t[39], ve = t[40], ye = t[41], xe = t[42];
            if (_e !== Symbol.for(`react.early_return_sentinel`)) return _e;
            let Se;
            t[75] !== W || t[76] !== G || t[77] !== ve || t[78] !== ye || t[79] !== xe ? (Se = (0, $.jsxs)(`div`, {
                id: ve,
                hidden: ye,
                className: xe,
                children: [W, G]
            }), t[75] = W, t[76] = G, t[77] = ve, t[78] = ye, t[79] = xe, t[80] = Se) : Se = t[80];
            let we;
            t[81] !== U || t[82] !== de || t[83] !== B || t[84] !== fe ? (we = B && de && (0, $.jsx)(o, {
                isOpen: !0,
                onClose: () => V(null),
                title: U(B),
                testId: `modal-enterprise-permission-enable-confirmation`,
                primaryButton: (0, $.jsx)(oe.Button, {
                    as: `button`,
                    color: `primary`,
                    loading: !1,
                    onClick: async () => {
                        await fe(B, !0), V(null)
                    },
                    children: (0, $.jsx)(N, {
                        ...kt.enterprisePermissionEnable
                    })
                }),
                secondaryButton: (0, $.jsx)(oe.Button, {
                    as: `button`,
                    color: `ghost`,
                    onClick: () => V(null),
                    children: (0, $.jsx)(N, {
                        ...kt.enterprisePermissionEnableCancel
                    })
                }),
                children: (0, $.jsxs)(`div`, {
                    className: `text-token-text-secondary flex flex-col gap-3 text-sm`,
                    children: [(0, $.jsx)(`p`, {
                        children: (0, $.jsx)(N, {
                            ...de.body
                        })
                    }), de.details && (0, $.jsx)(`p`, {
                        children: (0, $.jsx)(N, {
                            ...de.details,
                            values: {
                                learnMoreLink: e => de.learnMoreUrl ? (0, $.jsx)(`a`, {
                                    href: de.learnMoreUrl,
                                    target: `_blank`,
                                    className: wt,
                                    rel: `noopener noreferrer`,
                                    children: e
                                }) : e
                            }
                        })
                    })]
                })
            }), t[81] = U, t[82] = de, t[83] = B, t[84] = fe, t[85] = we) : we = t[85];
            let Te;
            return t[86] !== H || t[87] !== K || t[88] !== pe || t[89] !== q || t[90] !== me || t[91] !== J || t[92] !== ge || t[93] !== Se || t[94] !== we ? (Te = (0, $.jsxs)(H, {
                className: K,
                title: pe,
                titleContent: q,
                titleClassName: me,
                description: J,
                descriptionClassName: ge,
                children: [Se, we]
            }), t[86] = H, t[87] = K, t[88] = pe, t[89] = q, t[90] = me, t[91] = J, t[92] = ge, t[93] = Se, t[94] = we, t[95] = Te) : Te = t[95], Te
        }, kt = M({
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
        jt = R(), P(), Mt = A(), Nt = `https://learn.chatgpt.com/docs/hipaa-configuration`, Pt = e => {
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
                    children: (0, Mt.jsx)(N, {
                        ...Ft.link
                    })
                })
            }), t[0] = r) : r = t[0], r
        }, Ft = M({
            link: {
                id: `chatgpt.workspace.permissions.codex_and_work_local.section.hipaa_configuration_guide.link`,
                defaultMessage: `Read the HIPAA configuration guide before enabling the features below.`
            }
        })
    }));
export {
    Re as _, At as a, Xe as c, ot as d, qe as f, Le as g, We as h, Et as i, rt as l, ze as m, It as n, gt as o, Ye as p, Ot as r, _t as s, Pt as t, dt as u
};
//# sourceMappingURL=222991e8-kg2sw449iqwfwyei.js.map
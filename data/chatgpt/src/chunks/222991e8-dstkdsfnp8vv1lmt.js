import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    Aw as r,
    J7 as i,
    LU as a,
    Ow as o,
    Q7 as s,
    Qy as c,
    Rz as l,
    T2 as u,
    Vw as d,
    Zy as f,
    _G as p,
    ax as m,
    c7 as ee,
    eE as h,
    fB as g,
    i0 as _,
    ix as v,
    k2 as y,
    l0 as b,
    l7 as x,
    mct as S,
    o0 as C,
    oK as w,
    pB as T,
    prt as E,
    q1 as te,
    sK as ne,
    srt as re,
    uG as D,
    vct as O,
    w2 as ie,
    zU as ae,
    zw as k,
    zz as A
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Bn as j,
    In as M,
    Ln as N,
    N as oe,
    Nn as P,
    Rn as F,
    Vn as I,
    p as L,
    s as R,
    wn as z,
    zn as se
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Ajt as B,
    Frt as ce,
    Irt as V,
    kjt as le,
    nUn as H,
    tUn as U
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    Av as ue,
    By as W,
    Gg as de,
    Ov as fe,
    Vy as G,
    jv as K,
    kv as pe,
    qg as q
} from "./30901919-ikyi1r55w2i02fom.js";
import {
    $o as J,
    Go as me,
    Ho as he,
    Jo as ge,
    Ko as _e,
    Wo as ve,
    Yo as ye,
    Zy as be,
    ab as xe,
    ob as Se
} from "./c2675c8c-d62p1sdq1sy52umm.js";
import {
    a as Ce,
    o as we,
    r as Te,
    s as Ee
} from "./6fd89734-l8h178glfzpxynlr.js";
import {
    d as De,
    r as Oe
} from "./b411f8ca-etyixtlhhe9zenvx.js";
import {
    a as ke,
    i as Ae
} from "./a99a60c9-d8h8loah4q120wsx.js";
import {
    d as je,
    f as Me,
    l as Ne
} from "./b90db9d2-i7oumdosc3q3hqd0.js";
import {
    n as Pe,
    t as Fe
} from "./e17f5811-bjdofltzig180y3e.js";
var Ie, Le, Re = e((() => {
    F(), Ie = M({
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
            workspaceId: r,
            feature: a,
            featureName: s,
            storedValue: c,
            isRbacEnabled: l,
            disabled: u,
            onChange: d,
            statusDescription: f,
            confirmationDescription: p
        } = e,
        m = u !== void 0 && u,
        ee = se(),
        h = oe(),
        [g, _] = (0, He.useState)(!1),
        v = c === !0,
        y = l ? v ? Ue.enterpriseReleaseOptedOutDescription : Ue.enterpriseReleaseOptedInDescription : v ? Ue.enterpriseReleaseNonRbacOptedOutDescription : Ue.enterpriseReleaseNonRbacOptedInDescription,
        b = l ? Ue.enterpriseReleaseOptOutDescription : Ue.enterpriseReleaseNonRbacOptOutDescription,
        x;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (x = (e, t) => {
        t && _(!1)
    }, t[0] = x) : x = t[0];
    let S;
    t[1] === h ? S = t[2] : (S = () => h.invalidateQueries({
        queryKey: [`workspace-settings`]
    }), t[1] = h, t[2] = S);
    let C;
    t[3] !== a || t[4] !== r ? (C = e => i.safePost(`/accounts/{account_id}/beta_features`, {
        parameters: {
            path: {
                account_id: r
            }
        },
        requestBody: {
            feature: a,
            value: e
        }
    }), t[3] = a, t[4] = r, t[5] = C) : C = t[5];
    let w;
    t[6] !== S || t[7] !== C ? (w = {
        onSuccess: x,
        onSettled: S,
        mutationFn: C
    }, t[6] = S, t[7] = C, t[8] = w) : w = t[8];
    let T = L(w),
        E;
    t[9] === T.isPending ? E = t[10] : (E = () => {
        T.isPending || _(!1)
    }, t[9] = T.isPending, t[10] = E);
    let te = E,
        ne;
    t[11] !== a || t[12] !== T || t[13] !== d ? (ne = e => {
        d ? (d(a, e), _(!1)) : T.mutate(e)
    }, t[11] = a, t[12] = T, t[13] = d, t[14] = ne) : ne = t[14];
    let re = ne,
        D;
    t[15] !== f || t[16] !== y ? (D = f ?? (0, Y.jsx)(P, {
        ...y,
        values: {
            strong: Be
        }
    }), t[15] = f, t[16] = y, t[17] = D) : D = t[17];
    let O;
    t[18] === D ? O = t[19] : (O = (0, Y.jsx)(`span`, {
        className: `min-w-0 text-sm text-token-text-tertiary`,
        children: D
    }), t[18] = D, t[19] = O);
    let ie = v ? `secondary` : `primary`,
        ae = m || T.isPending,
        A;
    t[20] !== ee || t[21] !== v ? (A = ee.formatMessage(v ? Ue.enterpriseReleaseOptInButton : Ue.enterpriseReleaseOptOutButton), t[20] = ee, t[21] = v, t[22] = A) : A = t[22];
    let j;
    t[23] !== re || t[24] !== v ? (j = () => {
        v ? re(!1) : _(!0)
    }, t[23] = re, t[24] = v, t[25] = j) : j = t[25];
    let M = v ? Ue.enterpriseReleaseOptInButton : Ue.enterpriseReleaseOptOutButton,
        N;
    t[26] === M ? N = t[27] : (N = (0, Y.jsx)(P, {
        ...M
    }), t[26] = M, t[27] = N);
    let F;
    t[28] !== ie || t[29] !== ae || t[30] !== A || t[31] !== j || t[32] !== N ? (F = (0, Y.jsx)(n, {
        color: ie,
        size: `small`,
        disabled: ae,
        loading: !1,
        label: A,
        onClick: j,
        children: N
    }), t[28] = ie, t[29] = ae, t[30] = A, t[31] = j, t[32] = N, t[33] = F) : F = t[33];
    let I;
    t[34] !== F || t[35] !== O ? (I = (0, Y.jsxs)(`div`, {
        className: `flex items-center justify-between gap-6 py-2`,
        children: [O, F]
    }), t[34] = F, t[35] = O, t[36] = I) : I = t[36];
    let R;
    t[37] === s ? R = t[38] : (R = (0, Y.jsx)(P, {
        ...Ue.enterpriseReleaseOptOutModalTitle,
        values: {
            name: s
        }
    }), t[37] = s, t[38] = R);
    let z;
    t[39] !== p || t[40] !== s || t[41] !== b ? (z = p ?? (0, Y.jsx)(P, {
        ...b,
        values: {
            name: s
        }
    }), t[39] = p, t[40] = s, t[41] = b, t[42] = z) : z = t[42];
    let B;
    t[43] === re ? B = t[44] : (B = () => re(!0), t[43] = re, t[44] = B);
    let ce;
    t[45] === Symbol.for(`react.memo_cache_sentinel`) ? (ce = (0, Y.jsx)(P, {
        ...Ue.enterpriseReleaseOptOutConfirm
    }), t[45] = ce) : ce = t[45];
    let V;
    t[46] !== T.isPending || t[47] !== B ? (V = (0, Y.jsx)(k.Button, {
        as: `button`,
        color: `primary`,
        disabled: T.isPending,
        loading: T.isPending,
        onClick: B,
        children: ce
    }), t[46] = T.isPending, t[47] = B, t[48] = V) : V = t[48];
    let le;
    t[49] === Symbol.for(`react.memo_cache_sentinel`) ? (le = (0, Y.jsx)(P, {
        ...Ue.enterpriseReleaseOptOutCancel
    }), t[49] = le) : le = t[49];
    let H;
    t[50] !== te || t[51] !== T.isPending ? (H = (0, Y.jsx)(k.Button, {
        as: `button`,
        color: `ghost`,
        disabled: T.isPending,
        onClick: te,
        children: le
    }), t[50] = te, t[51] = T.isPending, t[52] = H) : H = t[52];
    let U;
    t[53] !== te || t[54] !== g || t[55] !== R || t[56] !== z || t[57] !== V || t[58] !== H ? (U = (0, Y.jsx)(o, {
        isOpen: g,
        onClose: te,
        title: R,
        description: z,
        testId: `modal-enterprise-release-opt-out`,
        primaryButton: V,
        secondaryButton: H
    }), t[53] = te, t[54] = g, t[55] = R, t[56] = z, t[57] = V, t[58] = H, t[59] = U) : U = t[59];
    let ue;
    return t[60] !== I || t[61] !== U ? (ue = (0, Y.jsxs)(Y.Fragment, {
        children: [I, U]
    }), t[60] = I, t[61] = U, t[62] = ue) : ue = t[62], ue
}

function Be(e) {
    return (0, Y.jsx)(`strong`, {
        children: e
    })
}
var Ve, He, Y, Ue, We = e((() => {
        Ve = z(), h(), d(), r(), s(), R(), He = t(I()), F(), Y = j(), Ue = N({
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
        Ge = z(), We(), F(), Ke = j(), qe = e => {
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
                children: n ? (0, Ke.jsx)(P, {
                    id: `chatgpt.workspace.permissions.library_sharing.policy.status.enabled`,
                    defaultMessage: `Library sharing is enabled for this workspace.`
                }) : (0, Ke.jsx)(P, {
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
                    children: (0, Ke.jsx)(P, {
                        id: `chatgpt.workspace.permissions.library_sharing.release.description.configured`,
                        defaultMessage: `Your configuration will be preserved after Early Release.`
                    })
                }), t[3] = e) : e = t[3], e
            }
            let i;
            t[4] === r.storedValue ? i = t[5] : (i = r.storedValue === !0 ? (0, Ke.jsx)(P, {
                id: `chatgpt.workspace.permissions.library_sharing.release.description.opted_out`,
                defaultMessage: `Automatic enablement after Early Release is opted out. Current sharing and role settings are unchanged.`
            }) : (0, Ke.jsx)(P, {
                id: `chatgpt.workspace.permissions.library_sharing.release.description.unconfigured`,
                defaultMessage: `You can configure Library sharing and role permissions during Early Release.`
            }), t[4] = r.storedValue, t[5] = i);
            let a;
            t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, Ke.jsx)(P, {
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
    metadataDraft: c,
    onStageMetadata: d,
    onUnappliedChangesChange: f
}) {
    "use no forget";
    let p = se(),
        m = ae(),
        ee = b(ie),
        h = b(u),
        g = !ee && re(`1261424157`),
        _ = g && a && re(`2634861725`),
        v = !!t,
        {
            data: y,
            isLoading: x,
            isFetching: S,
            isError: C
        } = Se({
            workspaceId: e,
            roleId: t ?? ``,
            enabled: g && v
        }),
        {
            data: w,
            isLoading: T
        } = xe({
            workspaceId: e,
            roleId: t ?? ``,
            enabled: g && v
        }),
        {
            upsertRoleMetadata: E,
            isPending: te
        } = De({
            workspaceId: e,
            roleId: t ?? ``
        }),
        [ne, D] = (0, X.useState)(`none`),
        [O, k] = (0, X.useState)(``),
        [A, j] = (0, X.useState)(!1),
        [M, N] = (0, X.useState)(``),
        [oe, F] = (0, X.useState)(`none`),
        [I, L] = (0, X.useState)(``),
        [R, z] = (0, X.useState)(!1),
        [B, ce] = (0, X.useState)(null),
        [V, le] = (0, X.useState)(!1),
        [H, ue] = (0, X.useState)(null),
        [de, fe] = (0, X.useState)(null),
        G = (0, X.useMemo)(() => w ? {
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
            low: K(G.low),
            medium: K(G.medium),
            high: K(G.high)
        }), [K, G.high, G.low, G.medium]),
        J = y != null,
        me = c ? {
            ...y?.metadata,
            ...c
        } : y?.metadata ?? null,
        he = me?.soft_alert_credit_limit ?? null,
        ve = me?.hard_cap_credit_limit ?? null,
        be = me?.hard_cap_shared_credit_limit ?? null,
        Ce = he ?? ve ?? null,
        we = be?.limit ?? null;
    (0, X.useEffect)(() => {
        if (!y) return;
        if (!Ce) {
            D(`none`), k(``), j(!1), N(``);
            return
        }
        let e = he?.limit ?? null,
            t = ve?.limit ?? null,
            n = t === 0,
            r = t != null,
            i = e ?? t ?? null;
        if (k(e == null ? t != null && !n ? String(t) : `` : String(e)), j(r), N(r && t != null ? String(t) : ``), !r && i != null && i === G.low) {
            D(`low`);
            return
        }
        if (!r && i != null && i === G.medium) {
            D(`medium`);
            return
        }
        if (!r && i != null && i === G.high) {
            D(`high`);
            return
        }
        D(i == null ? `none` : `custom`)
    }, [y, Ce, he, ve, G.high, G.low, G.medium]);
    let Te = {
        low: String(G.low),
        medium: String(G.medium),
        high: String(G.high)
    };
    (0, X.useEffect)(() => {
        if (y) {
            if (we == null) {
                F(`none`), L(``), ce(null);
                return
            }
            L(String(we)), ce(null), F(`custom`)
        }
    }, [y, we]);
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
        Pe = ne === `custom` ? A && M.trim() ? K(M.trim()) : O.trim() ? K(O.trim()) : Me : (je && Ne ? Ne : Me) ?? Ae,
        Fe = !je || je.key === `none`,
        Ie = g && v && (x && !y || T && !w),
        Le = te || de != null,
        Re = d == null && C && !J,
        ze = o || d != null && h || Le || S || !J && !Re,
        Be = o || d != null && h || Le || S || !J && !Re,
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
                c = e === `custom` && (r ?? A) ? (i ?? M ?? ``).trim() : ``,
                l = c === `` ? NaN : Number(c),
                u = e === `custom` && c !== ``,
                f = u && Number.isFinite(l) && l === 0;
            if (e !== `none` && e !== `none` && (e !== `custom` || u && !f) && (a === `` || !Number.isFinite(s) || s <= 0)) {
                ue(a === `` ? p.formatMessage(Q.alertRequiredForHardCap) : p.formatMessage(Q.invalidLimit));
                return
            }
            if (u && (c === `` || !Number.isFinite(l) || l < 0)) {
                ue(p.formatMessage(Q.invalidLimit));
                return
            }
            ue(null);
            let ee = ct({
                selectionKey: e,
                trimmedSelectionAlert: a,
                parsedSelectionAlert: s,
                hasCustomHardCap: u,
                parsedSelectionHardCap: l,
                isHardCapZero: f
            });
            if (d) {
                if (y == null) throw Error(`Role metadata must load before editing usage limits`);
                d(ee, y);
                return
            }
            try {
                fe(`usage`), await E(ee), m.success(p.formatMessage(Q.submitSuccess))
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
            let r = (e === `custom` ? n ?? I : ``).trim(),
                i = r === `` ? NaN : Number(r);
            if (e !== `none` && (r === `` || !Number.isFinite(i) || i < 0)) {
                ce(p.formatMessage(Q.sharedUsageInvalidLimit));
                return
            }
            ce(null);
            let a = lt({
                sharedUsageLimit: e === `none` ? null : i
            });
            if (d) {
                if (y == null) throw Error(`Role metadata must load before editing usage limits`);
                d(a, y);
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
                    le(!0);
                    return
                }
                D(e.key), Y({
                    selectionKey: e.key
                })
            }
        }, Ge = e => {
            if (!Be) {
                if (e.key === `custom`) {
                    z(!0);
                    return
                }
                F(e.key), Ue({
                    selectionKey: e.key
                })
            }
        }, Ke = ({
            alertLimit: e,
            hardCapEnabled: t,
            hardCapLimit: n
        }) => {
            k(e), j(t), N(t ? n : ``), D(`custom`), le(!1), Y({
                selectionKey: `custom`,
                alertLimitOverride: e,
                hardCapEnabledOverride: t,
                hardCapLimitOverride: t ? n : ``
            })
        }, qe = e => {
            L(e), F(`custom`), z(!1), Ue({
                selectionKey: `custom`,
                limitOverride: e
            })
        }, Je = O === `` ? Ee : O, Ye = A, Xe = M, Qe = ke.find(e => e.key === oe) ?? null, et = Qe?.label ?? Ae, tt = oe === `custom` && I.trim() ? pe(I.trim()) : et, it = !Qe || Qe.key === `none`;
    return !g || !v || !ot({
        searchQuery: r,
        intl: p,
        includeSharedUsageLimit: _
    }) ? null : (0, Z.jsxs)(Z.Fragment, {
        children: [(0, Z.jsx)($e, {
            isOpen: !o && V,
            alertLimit: Je,
            hardCapEnabled: Ye,
            hardCapLimit: Xe,
            onClose: () => le(!1),
            onSave: Ke,
            isStaging: d != null,
            onUnappliedChangesChange: f
        }), _ && (0, Z.jsx)(Ze, {
            isOpen: !o && R,
            limit: I,
            onClose: () => z(!1),
            onSave: qe,
            isStaging: d != null,
            onUnappliedChangesChange: f
        }), (0, Z.jsx)(_e, {
            children: Ie ? (0, Z.jsx)(`div`, {
                className: `flex h-24 items-center justify-center`,
                children: (0, Z.jsx)(l, {
                    className: `text-token-text-tertiary h-6 w-6`
                })
            }) : (0, Z.jsxs)(ge, {
                className: s ? `border-b-0` : ``,
                children: [(0, Z.jsx)(ye, {
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
                            children: [Ve && (0, Z.jsx)(l, {
                                className: `text-token-text-tertiary h-4 w-4`
                            }), (0, Z.jsxs)(U.Root, {
                                children: [(0, Z.jsxs)(U.Trigger, {
                                    className: `bg-token-bg-primary text-token-text-primary border-token-border-heavy inline-flex min-w-[130px] items-center gap-2 rounded-md border px-2.5 py-1.5 text-start text-sm`,
                                    disabled: ze,
                                    children: [(0, Z.jsx)(`div`, {
                                        className: `flex min-w-0 flex-1 items-center justify-between gap-2`,
                                        children: (0, Z.jsx)(`span`, {
                                            className: `truncate ${Fe?`text-token-text-tertiary`:``}`,
                                            children: Pe
                                        })
                                    }), (0, Z.jsx)(W, {
                                        className: `text-token-text-tertiary h-3.5 w-3.5 shrink-0`
                                    })]
                                }), (0, Z.jsx)(U.Portal, {
                                    children: (0, Z.jsxs)(U.Content, {
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
                                                children: (0, Z.jsx)(P, {
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
                                            children: Oe.map(e => (0, Z.jsxs)(U.Item, {
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
                }), _ && (0, Z.jsx)(ye, {
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
                                children: [He && (0, Z.jsx)(l, {
                                    className: `text-token-text-tertiary h-4 w-4`
                                }), (0, Z.jsxs)(U.Root, {
                                    children: [(0, Z.jsxs)(U.Trigger, {
                                        className: `bg-token-bg-primary text-token-text-primary border-token-border-heavy inline-flex min-w-[130px] items-center gap-2 rounded-md border px-2.5 py-1.5 text-start text-sm`,
                                        disabled: Be,
                                        children: [(0, Z.jsx)(`div`, {
                                            className: `flex min-w-0 flex-1 items-center justify-between gap-2`,
                                            children: (0, Z.jsx)(`span`, {
                                                className: `truncate ${it?`text-token-text-tertiary`:``}`,
                                                children: tt
                                            })
                                        }), (0, Z.jsx)(W, {
                                            className: `text-token-text-tertiary h-3.5 w-3.5 shrink-0`
                                        })]
                                    }), (0, Z.jsx)(U.Portal, {
                                        children: (0, Z.jsxs)(U.Content, {
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
                                                children: ke.map(e => (0, Z.jsx)(U.Item, {
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
                            }), B && (0, Z.jsx)(`div`, {
                                className: `text-interactive-label-warning-secondary text-xs`,
                                children: B
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
        l = se(),
        [u, d] = (0, X.useState)(r),
        [f, p] = (0, X.useState)(!1),
        m;
    t[0] !== n || t[1] !== c || t[2] !== r || t[3] !== u ? (m = c && n && u.trim() !== r.trim(), t[0] = n, t[1] = c, t[2] = r, t[3] = u, t[4] = m) : m = t[4];
    let ee = m,
        h, g;
    t[5] !== ee || t[6] !== s ? (h = () => {
        if (ee) return s?.(!0), () => s?.(!1)
    }, g = [ee, s], t[5] = ee, t[6] = s, t[7] = h, t[8] = g) : (h = t[7], g = t[8]), (0, X.useEffect)(h, g);
    let _, v;
    t[9] !== n || t[10] !== r ? (_ = () => {
        n && (d(r), p(!1))
    }, v = [n, r], t[9] = n, t[10] = r, t[11] = _, t[12] = v) : (_ = t[11], v = t[12]), (0, X.useEffect)(_, v);
    let y;
    t[13] === f ? y = t[14] : (y = e => {
        let t = e.replace(/\s+/g, ``);
        /^\d*$/.test(t) && (d(t), f && p(!1))
    }, t[13] = f, t[14] = y);
    let b = y,
        x;
    t[15] === u ? x = t[16] : (x = u.trim(), t[15] = u, t[16] = x);
    let S = x,
        C = S === `` ? NaN : Number(S),
        w;
    t[17] !== C || t[18] !== S ? (w = S !== `` && Number.isFinite(C) && C >= 0, t[17] = C, t[18] = S, t[19] = w) : w = t[19];
    let T = w,
        E;
    t[20] !== l || t[21] !== T ? (E = T ? `` : l.formatMessage(Q.sharedUsageInvalidLimit), t[20] = l, t[21] = T, t[22] = E) : E = t[22];
    let te = E,
        ne = f && !!te,
        re = ne ? te : void 0,
        D = `pe-36${re?` text-interactive-label-warning-secondary placeholder:text-interactive-label-warning-secondary`:``}`,
        O = re ? `border-token-border-error focus-within:border-token-border-error focus-within:ring-token-border-error` : void 0,
        ie;
    t[23] === l ? ie = t[24] : (ie = l.formatMessage(Q.sharedUsageLimitCreditsSuffix), t[23] = l, t[24] = ie);
    let ae = ie,
        A;
    t[25] === i ? A = t[26] : (A = e => {
        e || i()
    }, t[25] = i, t[26] = A);
    let j;
    t[27] === l ? j = t[28] : (j = l.formatMessage(Q.customSharedUsageLimitTitle), t[27] = l, t[28] = j);
    let M;
    t[29] === j ? M = t[30] : (M = (0, Z.jsx)(`div`, {
        className: `text-lg font-semibold`,
        children: j
    }), t[29] = j, t[30] = M);
    let N;
    t[31] === l ? N = t[32] : (N = l.formatMessage(Q.customModalCancelLabel), t[31] = l, t[32] = N);
    let oe;
    t[33] === Symbol.for(`react.memo_cache_sentinel`) ? (oe = (0, Z.jsx)(ue, {
        className: `h-4 w-4`
    }), t[33] = oe) : oe = t[33];
    let P;
    t[34] !== i || t[35] !== N ? (P = (0, Z.jsx)(`button`, {
        type: `button`,
        className: `text-token-text-tertiary hover:text-token-text-primary rounded-full p-1`,
        onClick: i,
        "aria-label": N,
        children: oe
    }), t[34] = i, t[35] = N, t[36] = P) : P = t[36];
    let F;
    t[37] !== M || t[38] !== P ? (F = (0, Z.jsx)(k.Header, {
        className: `px-6 ps-6 pt-6 pb-0`,
        title: M,
        closeButton: P
    }), t[37] = M, t[38] = P, t[39] = F) : F = t[39];
    let I;
    t[40] === l ? I = t[41] : (I = l.formatMessage(Q.customSharedUsageLimitDescription), t[40] = l, t[41] = I);
    let L;
    t[42] === I ? L = t[43] : (L = (0, Z.jsx)(`p`, {
        className: `text-token-text-tertiary text-xs leading-relaxed`,
        children: I
    }), t[42] = I, t[43] = L);
    let R;
    t[44] === l ? R = t[45] : (R = l.formatMessage(Q.customSharedUsageLimitAriaLabel), t[44] = l, t[45] = R);
    let z;
    t[46] === b ? z = t[47] : (z = e => b(e.target.value), t[46] = b, t[47] = z);
    let B;
    t[48] === ae ? B = t[49] : (B = (0, Z.jsx)(`span`, {
        className: `text-token-text-primary pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 text-xs`,
        children: ae
    }), t[48] = ae, t[49] = B);
    let V;
    t[50] !== O || t[51] !== D || t[52] !== re || t[53] !== R || t[54] !== z || t[55] !== B || t[56] !== u ? (V = (0, Z.jsx)(ce, {
        name: `custom-shared-usage-limit`,
        ariaLabel: R,
        inputMode: `numeric`,
        value: u,
        onChange: z,
        className: O,
        insideContainerChildren: B,
        inputClassName: D,
        showErrorIcon: !1,
        showInlineErrorMessage: !1,
        error: re
    }), t[50] = O, t[51] = D, t[52] = re, t[53] = R, t[54] = z, t[55] = B, t[56] = u, t[57] = V) : V = t[57];
    let le;
    t[58] !== L || t[59] !== V ? (le = (0, Z.jsxs)(`div`, {
        className: `flex flex-col gap-3 px-6 text-sm`,
        children: [L, V]
    }), t[58] = L, t[59] = V, t[60] = le) : le = t[60];
    let H;
    t[61] !== te || t[62] !== ne ? (H = ne && (0, Z.jsxs)(`div`, {
        className: `text-interactive-label-warning-secondary mb-3 flex items-center gap-2 text-xs`,
        children: [(0, Z.jsx)(fe, {
            className: `h-4 w-4`,
            "aria-hidden": `true`
        }), (0, Z.jsx)(`span`, {
            children: te
        })]
    }), t[61] = te, t[62] = ne, t[63] = H) : H = t[63];
    let U;
    t[64] !== l || t[65] !== c ? (U = l.formatMessage(c ? Q.customModalApplyLabel : Q.customModalSaveLabel), t[64] = l, t[65] = c, t[66] = U) : U = t[66];
    let W = !T,
        de = !T,
        G;
    t[67] !== T || t[68] !== a || t[69] !== S ? (G = () => {
        p(!0), T && a(S)
    }, t[67] = T, t[68] = a, t[69] = S, t[70] = G) : G = t[70];
    let K;
    t[71] !== U || t[72] !== W || t[73] !== de || t[74] !== G ? (K = (0, Z.jsx)(k.Button, {
        color: `primary`,
        title: U,
        visuallyDisabled: W,
        "aria-disabled": de,
        onClick: G
    }), t[71] = U, t[72] = W, t[73] = de, t[74] = G, t[75] = K) : K = t[75];
    let pe;
    t[76] === l ? pe = t[77] : (pe = l.formatMessage(Q.customModalCancelLabel), t[76] = l, t[77] = pe);
    let q;
    t[78] !== i || t[79] !== pe ? (q = (0, Z.jsx)(k.Button, {
        title: pe,
        onClick: i
    }), t[78] = i, t[79] = pe, t[80] = q) : q = t[80];
    let J;
    t[81] !== K || t[82] !== q ? (J = (0, Z.jsx)(k.Actions, {
        primaryButton: K,
        secondaryButton: q
    }), t[81] = K, t[82] = q, t[83] = J) : J = t[83];
    let me;
    t[84] !== H || t[85] !== J ? (me = (0, Z.jsxs)(`div`, {
        className: `px-6 pb-4`,
        children: [H, J]
    }), t[84] = H, t[85] = J, t[86] = me) : me = t[86];
    let he;
    t[87] !== F || t[88] !== le || t[89] !== me ? (he = (0, Z.jsx)(k.Overlay, {
        children: (0, Z.jsx)(k.Content, {
            position: `center`,
            className: `start-auto col-start-1 row-start-1 w-full max-w-sm ltr:translate-x-0 rtl:translate-x-0`,
            containerClassName: `grid grid-cols-1 grid-rows-1 place-items-center`,
            children: (0, Z.jsxs)(`div`, {
                className: `flex flex-col gap-4`,
                children: [F, le, me]
            })
        })
    }), t[87] = F, t[88] = le, t[89] = me, t[90] = he) : he = t[90];
    let ge;
    return t[91] !== n || t[92] !== A || t[93] !== he ? (ge = (0, Z.jsx)(k.Root, {
        isOpen: n,
        onClose: A,
        testId: `modal-custom-shared-usage-limit`,
        children: he
    }), t[91] = n, t[92] = A, t[93] = he, t[94] = ge) : ge = t[94], ge
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
        ee = c && o && !u && Number(a) <= Number(i),
        h = p ? `` : d && !o ? r.formatMessage(Q.alertRequiredForHardCap) : r.formatMessage(Q.invalidLimit),
        g = ``;
    return n && (s ? ee ? g = r.formatMessage(Q.customModalHardCapConflictError) : d && !o ? g = r.formatMessage(Q.alertRequiredForHardCap) : (!p || !m) && (g = r.formatMessage(Q.invalidLimit)) : g = r.formatMessage(Q.customModalHardCapRequired)), {
        alertTrimmed: i,
        hardCapTrimmed: a,
        hasAlertValue: o,
        hasHardCapInput: s,
        hasHardCapValue: c,
        isHardCapZero: u,
        requiresAlert: d,
        isAlertValid: p,
        isHardCapValid: m,
        hasHardCapConflict: ee,
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
        d = se(),
        [f, p] = (0, X.useState)(r),
        [m, h] = (0, X.useState)(i),
        [g, _] = (0, X.useState)(a),
        [y, b] = (0, X.useState)(!1),
        x;
    t[0] !== r || t[1] !== f || t[2] !== i || t[3] !== a || t[4] !== g || t[5] !== m || t[6] !== n || t[7] !== u ? (x = u && n && (f.trim() !== r.trim() || m !== i || m && g.trim() !== a.trim()), t[0] = r, t[1] = f, t[2] = i, t[3] = a, t[4] = g, t[5] = m, t[6] = n, t[7] = u, t[8] = x) : x = t[8];
    let S = x,
        C, w;
    t[9] !== S || t[10] !== l ? (C = () => {
        if (S) return l?.(!0), () => l?.(!1)
    }, w = [S, l], t[9] = S, t[10] = l, t[11] = C, t[12] = w) : (C = t[11], w = t[12]), (0, X.useEffect)(C, w);
    let T, E;
    t[13] !== r || t[14] !== i || t[15] !== a || t[16] !== n ? (T = () => {
        n && (p(r), h(i), _(a), b(!1))
    }, E = [r, i, a, n], t[13] = r, t[14] = i, t[15] = a, t[16] = n, t[17] = T, t[18] = E) : (T = t[17], E = t[18]), (0, X.useEffect)(T, E);
    let te, ne;
    t[19] === m ? (te = t[20], ne = t[21]) : (te = () => {
        m || b(!1)
    }, ne = [m], t[19] = m, t[20] = te, t[21] = ne), (0, X.useEffect)(te, ne);
    let re, D;
    t[22] !== f || t[23] !== g || t[24] !== m ? (D = () => {
        m && g.trim() === `0` && f !== `` && p(``)
    }, re = [f, g, m], t[22] = f, t[23] = g, t[24] = m, t[25] = re, t[26] = D) : (re = t[25], D = t[26]), (0, X.useEffect)(D, re);
    let O;
    t[27] === y ? O = t[28] : (O = () => {
        y && b(!1)
    }, t[27] = y, t[28] = O);
    let ie = O,
        ae, A;
    if (t[29] !== ie) {
        ae = t => {
            e(p, t), ie()
        }, A = t => {
            e(_, t), ie()
        };
        let e = et;
        t[29] = ie, t[30] = ae, t[31] = A
    } else ae = t[30], A = t[31];
    let j, M, N, oe, P, F, I, L, R, z, B, V, le, H, U, W, de, G, K, pe, q, J, me, he;
    if (t[32] !== f || t[33] !== g || t[34] !== y || t[35] !== d || t[36] !== m || t[37] !== n || t[38] !== o) {
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
        P = e, R = r, B = s, z = B, V = !i && !a || !c || !l || u;
        let _ = y && (!!p || !!h);
        le = _ ? h || p : ``, oe = _ && p ? p : void 0, L = _ && h ? h : void 0, F = L ? `border-token-border-error focus-within:border-token-border-error focus-within:ring-token-border-error` : void 0, I = `pe-24${L?` text-interactive-label-warning-secondary placeholder:text-interactive-label-warning-secondary`:``}`;
        let v;
        t[63] === d ? v = t[64] : (v = d.formatMessage(Q.customModalCreditsSuffix), t[63] = d, t[64] = v), H = v, N = k.Root, J = n, t[65] === o ? me = t[66] : (me = e => {
            e || o()
        }, t[65] = o, t[66] = me), he = `modal-custom-usage-limit`, M = k.Overlay, j = k.Content, K = `center`, pe = `start-auto col-start-1 row-start-1 w-full max-w-sm ltr:translate-x-0 rtl:translate-x-0`, q = `grid grid-cols-1 grid-rows-1 place-items-center`, de = `flex flex-col gap-4`;
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
        t[73] === Symbol.for(`react.memo_cache_sentinel`) ? (C = (0, Z.jsx)(ue, {
            className: `h-4 w-4`
        }), t[73] = C) : C = t[73];
        let w;
        t[74] !== o || t[75] !== S ? (w = (0, Z.jsx)(`button`, {
            type: `button`,
            className: `text-token-text-tertiary hover:text-token-text-primary rounded-full p-1`,
            onClick: o,
            "aria-label": S,
            children: C
        }), t[74] = o, t[75] = S, t[76] = w) : w = t[76], t[77] !== x || t[78] !== w ? (G = (0, Z.jsx)(k.Header, {
            className: `px-6 ps-6 pt-6 pb-0`,
            title: x,
            closeButton: w
        }), t[77] = x, t[78] = w, t[79] = G) : G = t[79], W = `flex flex-col gap-6 px-6 text-sm`, U = ee(`flex flex-col gap-3`, z && `opacity-50`), t[32] = f, t[33] = g, t[34] = y, t[35] = d, t[36] = m, t[37] = n, t[38] = o, t[39] = j, t[40] = M, t[41] = N, t[42] = oe, t[43] = P, t[44] = F, t[45] = I, t[46] = L, t[47] = R, t[48] = z, t[49] = B, t[50] = V, t[51] = le, t[52] = H, t[53] = U, t[54] = W, t[55] = de, t[56] = G, t[57] = K, t[58] = pe, t[59] = q, t[60] = J, t[61] = me, t[62] = he
    } else j = t[39], M = t[40], N = t[41], oe = t[42], P = t[43], F = t[44], I = t[45], L = t[46], R = t[47], z = t[48], B = t[49], V = t[50], le = t[51], H = t[52], U = t[53], W = t[54], de = t[55], G = t[56], K = t[57], pe = t[58], q = t[59], J = t[60], me = t[61], he = t[62];
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
    t[95] === H ? Ce = t[96] : (Ce = (0, Z.jsx)(`span`, {
        className: `text-token-text-primary pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 text-xs`,
        children: H
    }), t[95] = H, t[96] = Ce);
    let we;
    t[97] !== oe || t[98] !== f || t[99] !== z || t[100] !== xe || t[101] !== Se || t[102] !== Ce ? (we = (0, Z.jsx)(ce, {
        name: `custom-alert-limit`,
        ariaLabel: xe,
        inputMode: `numeric`,
        value: f,
        onChange: Se,
        disabled: z,
        insideContainerChildren: Ce,
        inputClassName: `pe-24`,
        showErrorIcon: !1,
        showInlineErrorMessage: !1,
        error: oe
    }), t[97] = oe, t[98] = f, t[99] = z, t[100] = xe, t[101] = Se, t[102] = Ce, t[103] = we) : we = t[103];
    let Te;
    t[104] !== d || t[105] !== z ? (Te = z && (0, Z.jsx)(`div`, {
        className: `text-token-text-warning text-xs`,
        children: d.formatMessage(Q.customModalAlertDisabledNote)
    }), t[104] = d, t[105] = z, t[106] = Te) : Te = t[106];
    let Ee;
    t[107] !== U || t[108] !== be || t[109] !== we || t[110] !== Te ? (Ee = (0, Z.jsxs)(`div`, {
        className: U,
        children: [be, we, Te]
    }), t[107] = U, t[108] = be, t[109] = we, t[110] = Te, t[111] = Ee) : Ee = t[111];
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
    t[118] === ie ? Ae = t[119] : (Ae = e => {
        h(!!e), ie()
    }, t[118] = ie, t[119] = Ae);
    let je;
    t[120] !== m || t[121] !== ke || t[122] !== Ae ? (je = (0, Z.jsx)(v, {
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
    t[131] !== A || t[132] !== F || t[133] !== I || t[134] !== L || t[135] !== g || t[136] !== d || t[137] !== m || t[138] !== H ? (Fe = m && (0, Z.jsx)(Z.Fragment, {
        children: (0, Z.jsx)(ce, {
            name: `custom-hard-cap-limit`,
            ariaLabel: d.formatMessage(Q.customModalSetHardCapLabel),
            inputMode: `numeric`,
            value: g,
            onChange: e => A(e.target.value),
            className: F,
            insideContainerChildren: (0, Z.jsx)(`span`, {
                className: `text-token-text-primary pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 text-xs`,
                children: H
            }),
            inputClassName: I,
            showErrorIcon: !1,
            showInlineErrorMessage: !1,
            error: L
        })
    }), t[131] = A, t[132] = F, t[133] = I, t[134] = L, t[135] = g, t[136] = d, t[137] = m, t[138] = H, t[139] = Fe) : Fe = t[139];
    let Ie;
    t[140] !== Me || t[141] !== Pe || t[142] !== Fe ? (Ie = (0, Z.jsxs)(`div`, {
        className: `flex flex-col gap-3`,
        children: [Me, Pe, Fe]
    }), t[140] = Me, t[141] = Pe, t[142] = Fe, t[143] = Ie) : Ie = t[143];
    let Le;
    t[144] !== W || t[145] !== Ee || t[146] !== Ie ? (Le = (0, Z.jsxs)(`div`, {
        className: W,
        children: [Ee, Ie]
    }), t[144] = W, t[145] = Ee, t[146] = Ie, t[147] = Le) : Le = t[147];
    let Re;
    t[148] === le ? Re = t[149] : (Re = le && (0, Z.jsxs)(`div`, {
        className: `text-interactive-label-warning-secondary mb-3 flex items-center gap-2 text-xs`,
        children: [(0, Z.jsx)(fe, {
            className: `h-4 w-4`,
            "aria-hidden": `true`
        }), (0, Z.jsx)(`span`, {
            children: le
        })]
    }), t[148] = le, t[149] = Re);
    let ze;
    t[150] !== d || t[151] !== u ? (ze = d.formatMessage(u ? Q.customModalApplyLabel : Q.customModalSaveLabel), t[150] = d, t[151] = u, t[152] = ze) : ze = t[152];
    let Be;
    t[153] !== P || t[154] !== R || t[155] !== m || t[156] !== B || t[157] !== V || t[158] !== s ? (Be = () => {
        b(!0), !V && s({
            alertLimit: B ? `` : P,
            hardCapEnabled: m,
            hardCapLimit: m ? R : ``
        })
    }, t[153] = P, t[154] = R, t[155] = m, t[156] = B, t[157] = V, t[158] = s, t[159] = Be) : Be = t[159];
    let Ve;
    t[160] !== V || t[161] !== ze || t[162] !== Be ? (Ve = (0, Z.jsx)(k.Button, {
        color: `primary`,
        title: ze,
        visuallyDisabled: V,
        "aria-disabled": V,
        onClick: Be
    }), t[160] = V, t[161] = ze, t[162] = Be, t[163] = Ve) : Ve = t[163];
    let He;
    t[164] === d ? He = t[165] : (He = d.formatMessage(Q.customModalCancelLabel), t[164] = d, t[165] = He);
    let Y;
    t[166] !== o || t[167] !== He ? (Y = (0, Z.jsx)(k.Button, {
        title: He,
        onClick: o
    }), t[166] = o, t[167] = He, t[168] = Y) : Y = t[168];
    let Ue;
    t[169] !== Ve || t[170] !== Y ? (Ue = (0, Z.jsx)(k.Actions, {
        primaryButton: Ve,
        secondaryButton: Y
    }), t[169] = Ve, t[170] = Y, t[171] = Ue) : Ue = t[171];
    let We;
    t[172] !== Re || t[173] !== Ue ? (We = (0, Z.jsxs)(`div`, {
        className: `px-6 pb-4`,
        children: [Re, Ue]
    }), t[172] = Re, t[173] = Ue, t[174] = We) : We = t[174];
    let Ge;
    t[175] !== de || t[176] !== G || t[177] !== Le || t[178] !== We ? (Ge = (0, Z.jsxs)(`div`, {
        className: de,
        children: [G, Le, We]
    }), t[175] = de, t[176] = G, t[177] = Le, t[178] = We, t[179] = Ge) : Ge = t[179];
    let Ke;
    t[180] !== j || t[181] !== K || t[182] !== pe || t[183] !== q || t[184] !== Ge ? (Ke = (0, Z.jsx)(j, {
        position: K,
        className: pe,
        containerClassName: q,
        children: Ge
    }), t[180] = j, t[181] = K, t[182] = pe, t[183] = q, t[184] = Ge, t[185] = Ke) : Ke = t[185];
    let qe;
    t[186] !== M || t[187] !== Ke ? (qe = (0, Z.jsx)(M, {
        children: Ke
    }), t[186] = M, t[187] = Ke, t[188] = qe) : qe = t[188];
    let Je;
    return t[189] !== N || t[190] !== J || t[191] !== me || t[192] !== he || t[193] !== qe ? (Je = (0, Z.jsx)(N, {
        isOpen: J,
        onClose: me,
        testId: he,
        children: qe
    }), t[189] = N, t[190] = J, t[191] = me, t[192] = he, t[193] = qe, t[194] = Je) : Je = t[194], Je
}

function et(e, t) {
    let n = t.replace(/\s+/g, ``);
    /^\d*$/.test(n) && e(n)
}
var tt, X, Z, nt, rt, Q, it, at, ot, st, ct, lt, ut, dt = e((() => {
        tt = z(), Oe(), be(), J(), H(), G(), K(), pe(), d(), m(), V(), A(), te(), y(), a(), E(), x(), X = t(I()), F(), Z = j(), nt = `text-token-link hover:text-token-link-hover underline`, rt = {
            low: 300,
            medium: 400,
            high: 550
        }, Q = N({
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
    return e.newReleaseOptOutFlag === S.LIBRARY_SHARING_GA_OPT_OUT
}

function xt(e) {
    return e.rbac ? [e.permissionName] : []
}
var St, Ct, $, wt, Tt, Et, Dt, Ot, kt, At = e((() => {
        St = z(), O(), Re(), ne(), Pe(), ke(), Me(), D(), Ee(), ve(), We(), Ye(), d(), q(), T(), B(), r(), m(), c(), A(), te(), x(), Ct = t(I()), F(), _t(), $ = j(), wt = `text-token-link hover:text-token-link-hover underline`, Tt = e => {
            "use forget";
            let t = (0, St.c)(9),
                {
                    entry: n
                } = e;
            if (!n.description && !n.additionalDescription) return null;
            let r;
            t[0] !== n.description || t[1] !== n.descriptionValues ? (r = n.description && (0, $.jsx)(`div`, {
                children: (0, $.jsx)(P, {
                    ...n.description,
                    values: n.descriptionValues
                })
            }), t[0] = n.description, t[1] = n.descriptionValues, t[2] = r) : r = t[2];
            let i;
            t[3] !== n.additionalDescription || t[4] !== n.additionalDescriptionValues ? (i = n.additionalDescription && (0, $.jsx)(`div`, {
                children: (0, $.jsx)(P, {
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
            e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, $.jsx)(de, {
                "aria-hidden": `true`,
                className: `icon text-token-interactive-icon-tertiary-default`
            }), e[0] = t) : t = e[0];
            let n;
            e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, $.jsx)(`p`, {
                className: `text-token-text-primary text-sm font-semibold`,
                children: (0, $.jsx)(P, {
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
                        children: (0, $.jsx)(P, {
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
                    showOptOutControls: c,
                    isRbacEnabled: u,
                    layout: d,
                    disableAllToggles: m,
                    disableRolePermissionWrites: h,
                    searchQuery: y,
                    sectionExpanded: b,
                    forceSectionExpanded: x,
                    onSectionExpandedChange: T,
                    renderHighlightedText: E,
                    renderSettingEntryControl: te,
                    getEntryPresentation: ne,
                    renderRbacEntryControl: re,
                    useSitesPermissionSelect: D,
                    effectiveRolePermissions: O,
                    onOptOutChange: ie,
                    loadingAdminPreviewFeature: ae,
                    onSetAdminPreviewAccess: A
                } = e,
                j = d === void 0 ? `card` : d,
                M = m !== void 0 && m,
                N = h !== void 0 && h,
                oe = y === void 0 ? `` : y,
                F = x !== void 0 && x,
                I = D === void 0 || D,
                L = se(),
                R = (0, Ct.useId)(),
                z = _(n),
                B = C(),
                ce = z ?? B,
                [V, H] = (0, Ct.useState)(null),
                U, ue, W, de, fe, G, K, pe, q, J, ge, _e, ve, ye, be, xe;
            if (t[0] !== ce?.isHipaaCompliantWorkspace || t[1] !== r || t[2] !== M || t[3] !== N || t[4] !== O || t[5] !== F || t[6] !== ne || t[7] !== a || t[8] !== L || t[9] !== u || t[10] !== j || t[11] !== ae || t[12] !== ie || t[13] !== T || t[14] !== A || t[15] !== V?.enableConfirmation || t[16] !== i || t[17] !== E || t[18] !== re || t[19] !== te || t[20] !== s || t[21] !== oe || t[22] !== R || t[23] !== b || t[24] !== c || t[25] !== I || t[26] !== n) {
                ve = Symbol.for(`react.early_return_sentinel`);
                bb0: {
                    let e = gt({
                            intl: L,
                            preReleases: i,
                            searchQuery: oe,
                            getEntryPresentation: ne,
                            layout: j,
                            effectiveRolePermissions: O,
                            rolePermissions: s.permissions
                        }),
                        o = e.some(vt);
                    if (ft(oe) && (j === `section` ? !o : e.length === 0)) {
                        ve = null;
                        break bb0
                    }
                    let d = j === `section` && !o,
                        m = d ? [] : e,
                        h = d || m.some(yt),
                        _ = h ? kt.adminPreviewSection : kt.enterpriseBetaFeatureSection,
                        y = ce?.isHipaaCompliantWorkspace ?? !1,
                        x = h ? kt.adminPreviewSectionDescription : m.some(bt) ? kt.enterpriseBetaFeaturePerFeatureReleaseDescription : j === `section` ? kt.enterpriseBetaFeatureJuly30SectionDescription : kt.enterpriseBetaFeatureSectionDescription,
                        C;t[43] !== x || t[44] !== L || t[45] !== E ? (C = E?.(L.formatMessage(x)), t[43] = x, t[44] = L, t[45] = E, t[46] = C) : C = t[46];
                    let D = C,
                        k = j !== `section` && e.length === 0 ? kt.enterpriseBetaFeatureEmptySectionDescription : y && o && !h ? (0, $.jsxs)(`div`, {
                            className: `flex flex-col gap-2`,
                            children: [(0, $.jsx)(`p`, {
                                children: D ?? (0, $.jsx)(P, {
                                    ...x
                                })
                            }), (0, $.jsx)(`p`, {
                                className: `text-token-text-status-warning`,
                                children: (0, $.jsx)(P, {
                                    ...kt.enterpriseBetaFeatureSectionHipaaDescription
                                })
                            })]
                        }) : D ?? x,
                        z;t[47] === L ? z = t[48] : (z = e => typeof e.title == `string` ? e.title : L.formatMessage(e.title), t[47] = L, t[48] = z),
                    ue = z;
                    let se;t[49] === s.permissions ? se = t[50] : (se = (e, t) => {
                        let n = e.additionalPermissionNames ?? [];
                        return Ce({
                            add: t,
                            currentPermissionNames: s.permissions,
                            permissionName: e.permissionName,
                            additionalPermissionNames: t ? n : [...n, ...e.permissionNamesToRemoveWhenDisabled ?? []]
                        })
                    }, t[49] = s.permissions, t[50] = se);
                    let B = se,
                        Se;t[51] !== N || t[52] !== a ? (Se = e => N ? Promise.resolve() : a(e), t[51] = N, t[52] = a, t[53] = Se) : Se = t[53];
                    let we = Se,
                        Te;t[54] !== B || t[55] !== s || t[56] !== we ? (Te = (e, t) => we({
                        ...s,
                        permissions: B(e, t)
                    }), t[54] = B, t[55] = s, t[56] = we, t[57] = Te) : Te = t[57],
                    de = Te,
                    W = V?.enableConfirmation;
                    let Ee = j === `section` && b != null && T != null,
                        De = !Ee || F || b,
                        Oe, ke;t[58] !== L || t[59] !== E || t[60] !== _ ? (Oe = L.formatMessage(_), ke = E?.(Oe), t[58] = L, t[59] = E, t[60] = _, t[61] = Oe, t[62] = ke) : (Oe = t[61], ke = t[62]);
                    let Me = ke;U = he,
                    K = ee(j === `section` ? ee(`border-token-border-default gap-4 border-b pb-8 last:border-b-0`, De && `md:grid md:grid-cols-[minmax(0,240px)_minmax(0,1fr)] md:gap-x-[30px]`) : ee(`border-token-border-default rounded-2xl border`, h ? `p-8!` : `p-6`), me),
                    pe = _,
                    t[63] !== De || t[64] !== F || t[65] !== Me || t[66] !== Ee || t[67] !== T || t[68] !== E || t[69] !== R || t[70] !== Oe || t[71] !== _ ? (q = Ee ? (0, $.jsxs)(`span`, {
                        className: `flex items-center gap-3`,
                        children: [(0, $.jsx)(Fe, {
                            sectionTitle: Oe,
                            expanded: De,
                            controlsId: R,
                            disabled: F,
                            onExpandedChange: T
                        }), (0, $.jsx)(`span`, {
                            children: Me ?? (0, $.jsx)(P, {
                                ..._
                            })
                        })]
                    }) : E ? (0, $.jsx)(`span`, {
                        children: Me
                    }) : void 0, t[63] = De, t[64] = F, t[65] = Me, t[66] = Ee, t[67] = T, t[68] = E, t[69] = R, t[70] = Oe, t[71] = _, t[72] = q) : q = t[72],
                    J = j === `section` ? void 0 : h ? `text-base! leading-6! font-medium!` : `text-[18px]! leading-[26px]!`,
                    ge = k,
                    _e = Ee ? `ps-11` : j === `card` && h ? `text-xs! leading-[18px]!` : void 0,
                    ye = Ee ? R : void 0,
                    be = Ee && !De,
                    xe = De ? `flex flex-col gap-4` : `hidden`,
                    t[73] === d ? fe = t[74] : (fe = d && (0, $.jsx)(Dt, {}), t[73] = d, t[74] = fe),
                    G = m.map(e => {
                        let t = new Set(e.newReleaseEntries.flatMap(xt)),
                            i = e.hideEarlyAccessBadge ? null : (0, $.jsx)(`span`, {
                                className: `inline-flex h-[18px] shrink-0 items-center justify-center rounded-[6px] bg-[var(--green-a50)] px-[5px] text-xs font-medium text-[light-dark(var(--green-600),var(--green-400))]`,
                                children: (0, $.jsx)(P, {
                                    ...kt.enterpriseBetaFeatureBadge
                                })
                            }),
                            a = e.newReleaseEntries.map((n, i) => {
                                let a = n.rbac ? n.permissionName : n.settingName,
                                    o = n.rbac ? n.additionalPermissionNames ?? [] : [],
                                    c = e.adminPreviewFeature == null ? ne?.(n, t, e.newReleaseEntries[i + 1]) : void 0,
                                    u = c?.title ?? ue(n),
                                    d = n.rbac && n.dependsOnPermissionName != null && !(O ?? s.permissions).includes(n.dependsOnPermissionName),
                                    m = n.rbac && N,
                                    h = Le({
                                        isReadOnly: m,
                                        disabledReason: n.disabledReason
                                    }),
                                    _ = M || m || n.disabled || d || e.adminPreviewFeature === `admin_preview_library_sharing` && r.admin_preview_launch_settings?.admin_preview_library_sharing == null,
                                    y = n.rbac && (n.dependsOnPermissionName != null || n.permissionNamesToRemoveWhenDisabled != null || n.enableConfirmation != null),
                                    b = n.rbac ? re?.(n, _, h, u) : null,
                                    x;
                                if (!n.rbac) x = te?.(n, _) ?? null;
                                else if (b != null) x = n.permissionName === w.SitesAccess ? (0, $.jsx)(Ne, {
                                    children: b
                                }) : b;
                                else if (n.permissionName === w.SitesAccess) x = I && p() ? (0, $.jsx)(Ne, {
                                    children: (0, $.jsx)(je, {
                                        ariaLabel: u,
                                        role: s,
                                        handleSaveRole: we,
                                        disabled: _,
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
                                        disabled: _,
                                        disabledReason: h,
                                        renderDisabledToggleAsOff: n.renderDisabledToggleAsOff
                                    })
                                });
                                else if (!y) x = (0, $.jsx)(Ae, {
                                    ariaLabel: u,
                                    role: s,
                                    permissionName: n.permissionName,
                                    handleSaveRole: we,
                                    disabled: _,
                                    disabledReason: h,
                                    renderDisabledToggleAsOff: n.renderDisabledToggleAsOff
                                });
                                else {
                                    let e = [n.permissionName, ...o],
                                        t = (0, $.jsx)(v, {
                                            size: `normal`,
                                            "aria-label": u,
                                            checked: !(_ && n.renderDisabledToggleAsOff) && e.every(e => s.permissions.includes(e)),
                                            onCheckedChange: e => {
                                                if (e && n.enableConfirmation) {
                                                    H(n);
                                                    return
                                                }
                                                de(n, e)
                                            },
                                            disabled: _
                                        });
                                    x = _ && h ? (0, $.jsx)(f, {
                                        label: L.formatMessage(h),
                                        children: t
                                    }) : t
                                }
                                return x == null ? null : (0, $.jsx)(`div`, {
                                    className: ee(`flex justify-between gap-4 py-3`, j === `section` && e.adminPreviewFeature != null && `px-4`, c?.className),
                                    children: (0, $.jsxs)(`div`, {
                                        className: `flex w-full items-center justify-between gap-4`,
                                        children: [(0, $.jsxs)(`div`, {
                                            children: [(0, $.jsxs)(`div`, {
                                                className: `text-md flex items-center gap-2`,
                                                children: [c?.label ?? (E ? (0, $.jsx)(`span`, {
                                                    children: E(u)
                                                }) : L.formatMessage({
                                                    id: `workspaceSettings.templateTitle.enterpriseReleaseTitle`,
                                                    defaultMessage: `{name}`
                                                }, {
                                                    name: u
                                                })), e.adminPreviewFeature != null && (0, $.jsx)(le, {
                                                    contentLayout: `multi-line`,
                                                    content: typeof e.description == `string` ? e.description : L.formatMessage(e.description),
                                                    side: `top-center`,
                                                    children: e => (0, $.jsx)(`button`, {
                                                        ...e,
                                                        type: `button`,
                                                        "aria-label": L.formatMessage(kt.featureInfo, {
                                                            feature: u
                                                        }),
                                                        className: `interactive-button interactive-label-tertiary inline-flex items-center rounded-sm`,
                                                        children: (0, $.jsx)(g, {
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
                                                disabled: M || N || n.disabled || A == null,
                                                onClick: () => A?.(e, n),
                                                children: [(0, $.jsx)(P, {
                                                    ...r.admin_preview_launch_settings?.[e.adminPreviewFeature] == null ? kt.setAccess : kt.editAccess
                                                }), ae === e.adminPreviewFeature && (0, $.jsx)(`span`, {
                                                    "aria-hidden": `true`,
                                                    className: `absolute start-full top-1/2 ms-1 -translate-y-1/2`,
                                                    children: (0, $.jsx)(l, {
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
                                children: (0, $.jsx)(P, {
                                    ...kt.enterpriseBetaFeatureSectionHipaaDescription
                                })
                            }), a]
                        }, e.adminPreviewFeature);
                        let o = e.description;
                        typeof o != `string` && (o = L.formatMessage(o));
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
                                        }) : L.formatMessage({
                                            id: `workspaceSettings.templateTitle.enterpriseReleaseTitle`,
                                            defaultMessage: `{name}`
                                        }, {
                                            name: e.name
                                        }), i, d && (0, $.jsx)(f, {
                                            interactive: !0,
                                            label: (0, $.jsx)(P, {
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
                                                "aria-label": L.formatMessage(d.ariaLabel),
                                                className: `text-token-text-tertiary hover:text-token-text-secondary focus-visible:outline-token-border-heavy inline-flex size-4 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2`,
                                                children: (0, $.jsx)(g, {
                                                    "aria-hidden": `true`,
                                                    className: `size-3.5`
                                                })
                                            })
                                        })]
                                    }), (0, $.jsx)(`span`, {
                                        className: `text-token-text-secondary text-sm`,
                                        children: e.helpCenterLink ? (0, $.jsx)(P, {
                                            id: `workspaceSettings.templateTitle.enterpriseReleaseDescription`,
                                            defaultMessage: `{name} <learnMore>Learn more</learnMore>`,
                                            values: {
                                                name: E?.(o) ?? o,
                                                learnMore: t => (0, $.jsx)(`a`, {
                                                    href: e.helpCenterLink,
                                                    target: e.helpLinkOpenNewTab === !1 ? void 0 : `_blank`,
                                                    className: wt,
                                                    rel: e.helpLinkOpenNewTab === !1 ? void 0 : `noopener noreferrer`,
                                                    children: e.helpLinkLabel ? L.formatMessage(e.helpLinkLabel) : t
                                                })
                                            }
                                        }) : E?.(o) ?? o
                                    })]
                                }), y && h && e.newReleaseEntries.length > 0 && (0, $.jsx)(`p`, {
                                    className: `text-token-text-status-warning text-sm`,
                                    children: (0, $.jsx)(P, {
                                        ...kt.enterpriseBetaFeatureSectionHipaaDescription
                                    })
                                }), (0, $.jsx)(`div`, {
                                    role: j === `section` ? `group` : void 0,
                                    "aria-label": j === `section` ? e.name : void 0,
                                    className: ee(`flex flex-col`, j !== `section` && `divide-y divide-token-border-default border-y border-token-border-default`),
                                    children: a
                                })]
                            }), !(e.shouldHideOptOutButton ?? !1) && c && e.newReleaseOptOutFlag && (e.newReleaseOptOutFlag === S.LIBRARY_SHARING_GA_OPT_OUT ? (0, $.jsx)(Je, {
                                betaSettingsDict: r.beta_settings_dict,
                                workspaceId: n,
                                feature: e.newReleaseOptOutFlag,
                                featureName: e.optOutFeatureName ?? e.name,
                                storedValue: r.beta_settings[e.newReleaseOptOutFlag],
                                isRbacEnabled: u,
                                disabled: M,
                                onChange: ie
                            }) : (0, $.jsx)(ze, {
                                workspaceId: n,
                                feature: e.newReleaseOptOutFlag,
                                featureName: e.optOutFeatureName ?? e.name,
                                storedValue: r.beta_settings[e.newReleaseOptOutFlag],
                                isRbacEnabled: u,
                                disabled: M,
                                onChange: ie
                            }))]
                        }, e.name)
                    })
                }
                t[0] = ce?.isHipaaCompliantWorkspace, t[1] = r, t[2] = M, t[3] = N, t[4] = O, t[5] = F, t[6] = ne, t[7] = a, t[8] = L, t[9] = u, t[10] = j, t[11] = ae, t[12] = ie, t[13] = T, t[14] = A, t[15] = V?.enableConfirmation, t[16] = i, t[17] = E, t[18] = re, t[19] = te, t[20] = s, t[21] = oe, t[22] = R, t[23] = b, t[24] = c, t[25] = I, t[26] = n, t[27] = U, t[28] = ue, t[29] = W, t[30] = de, t[31] = fe, t[32] = G, t[33] = K, t[34] = pe, t[35] = q, t[36] = J, t[37] = ge, t[38] = _e, t[39] = ve, t[40] = ye, t[41] = be, t[42] = xe
            } else U = t[27], ue = t[28], W = t[29], de = t[30], fe = t[31], G = t[32], K = t[33], pe = t[34], q = t[35], J = t[36], ge = t[37], _e = t[38], ve = t[39], ye = t[40], be = t[41], xe = t[42];
            if (ve !== Symbol.for(`react.early_return_sentinel`)) return ve;
            let Se;
            t[75] !== fe || t[76] !== G || t[77] !== ye || t[78] !== be || t[79] !== xe ? (Se = (0, $.jsxs)(`div`, {
                id: ye,
                hidden: be,
                className: xe,
                children: [fe, G]
            }), t[75] = fe, t[76] = G, t[77] = ye, t[78] = be, t[79] = xe, t[80] = Se) : Se = t[80];
            let we;
            t[81] !== ue || t[82] !== W || t[83] !== V || t[84] !== de ? (we = V && W && (0, $.jsx)(o, {
                isOpen: !0,
                onClose: () => H(null),
                title: ue(V),
                testId: `modal-enterprise-permission-enable-confirmation`,
                primaryButton: (0, $.jsx)(k.Button, {
                    as: `button`,
                    color: `primary`,
                    loading: !1,
                    onClick: async () => {
                        await de(V, !0), H(null)
                    },
                    children: (0, $.jsx)(P, {
                        ...kt.enterprisePermissionEnable
                    })
                }),
                secondaryButton: (0, $.jsx)(k.Button, {
                    as: `button`,
                    color: `ghost`,
                    onClick: () => H(null),
                    children: (0, $.jsx)(P, {
                        ...kt.enterprisePermissionEnableCancel
                    })
                }),
                children: (0, $.jsxs)(`div`, {
                    className: `text-token-text-secondary flex flex-col gap-3 text-sm`,
                    children: [(0, $.jsx)(`p`, {
                        children: (0, $.jsx)(P, {
                            ...W.body
                        })
                    }), W.details && (0, $.jsx)(`p`, {
                        children: (0, $.jsx)(P, {
                            ...W.details,
                            values: {
                                learnMoreLink: e => W.learnMoreUrl ? (0, $.jsx)(`a`, {
                                    href: W.learnMoreUrl,
                                    target: `_blank`,
                                    className: wt,
                                    rel: `noopener noreferrer`,
                                    children: e
                                }) : e
                            }
                        })
                    })]
                })
            }), t[81] = ue, t[82] = W, t[83] = V, t[84] = de, t[85] = we) : we = t[85];
            let Te;
            return t[86] !== U || t[87] !== K || t[88] !== pe || t[89] !== q || t[90] !== J || t[91] !== ge || t[92] !== _e || t[93] !== Se || t[94] !== we ? (Te = (0, $.jsxs)(U, {
                className: K,
                title: pe,
                titleContent: q,
                titleClassName: J,
                description: ge,
                descriptionClassName: _e,
                children: [Se, we]
            }), t[86] = U, t[87] = K, t[88] = pe, t[89] = q, t[90] = J, t[91] = ge, t[92] = _e, t[93] = Se, t[94] = we, t[95] = Te) : Te = t[95], Te
        }, kt = N({
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
        jt = z(), F(), Mt = j(), Nt = `https://learn.chatgpt.com/docs/hipaa-configuration`, Pt = e => {
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
                    children: (0, Mt.jsx)(P, {
                        ...Ft.link
                    })
                })
            }), t[0] = r) : r = t[0], r
        }, Ft = N({
            link: {
                id: `chatgpt.workspace.permissions.codex_and_work_local.section.hipaa_configuration_guide.link`,
                defaultMessage: `Read the HIPAA configuration guide before enabling the features below.`
            }
        })
    }));
export {
    Re as _, At as a, Xe as c, ot as d, qe as f, Le as g, We as h, Et as i, rt as l, ze as m, It as n, gt as o, Ye as p, Ot as r, _t as s, Pt as t, dt as u
};
//# sourceMappingURL=222991e8-dstkdsfnp8vv1lmt.js.map
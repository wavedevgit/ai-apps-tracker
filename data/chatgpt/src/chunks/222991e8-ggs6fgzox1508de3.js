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
    bct as h,
    c7 as ee,
    eE as g,
    fB as te,
    gct as _,
    hrt as v,
    i0 as y,
    ix as ne,
    k2 as b,
    l0 as x,
    l7 as S,
    lrt as C,
    o0 as re,
    oK as ie,
    pB as ae,
    q1 as w,
    sK as T,
    uG as E,
    w2 as oe,
    zU as se,
    zw as D,
    zz as O
} from "./4813494d-nxpmzchfjvwqts17.js";
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
    Irt as ue,
    Lrt as R,
    Mjt as z,
    Njt as B,
    vUn as V,
    yUn as H
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    Av as de,
    By as U,
    Gg as fe,
    Ov as pe,
    Vy as W,
    jv as G,
    kv as me,
    qg as K
} from "./30901919-lgbmg5s09xld40kt.js";
import {
    $o as q,
    Go as he,
    Ho as ge,
    Jo as _e,
    Ko as ve,
    Wo as ye,
    Yo as be,
    Zy as xe,
    ab as Se,
    ob as Ce
} from "./c2675c8c-otyjprdiowg2v8hl.js";
import {
    a as we,
    o as J,
    r as Te,
    s as Ee
} from "./6fd89734-l8h178glfzpxynlr.js";
import {
    d as De,
    r as Oe
} from "./b411f8ca-lqjgcidqs8y1f1yf.js";
import {
    a as ke,
    i as Ae
} from "./a99a60c9-eaiujxazj6ovgefc.js";
import {
    d as je,
    f as Me,
    l as Ne
} from "./b90db9d2-gck0pbjlezuqpx87.js";
import {
    n as Pe,
    t as Fe
} from "./e17f5811-d2d8452ayqv6ujhn.js";
var Ie, Le, Re = e((() => {
    N(), Ie = A({
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
        h = le(),
        ee = ce(),
        [g, te] = (0, He.useState)(!1),
        _ = c === !0,
        v = l ? _ ? Ue.enterpriseReleaseOptedOutDescription : Ue.enterpriseReleaseOptedInDescription : _ ? Ue.enterpriseReleaseNonRbacOptedOutDescription : Ue.enterpriseReleaseNonRbacOptedInDescription,
        y = l ? Ue.enterpriseReleaseOptOutDescription : Ue.enterpriseReleaseNonRbacOptOutDescription,
        ne;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (ne = (e, t) => {
        t && te(!1)
    }, t[0] = ne) : ne = t[0];
    let b;
    t[1] === ee ? b = t[2] : (b = () => ee.invalidateQueries({
        queryKey: [`workspace-settings`]
    }), t[1] = ee, t[2] = b);
    let x;
    t[3] !== a || t[4] !== r ? (x = e => i.safePost(`/accounts/{account_id}/beta_features`, {
        parameters: {
            path: {
                account_id: r
            }
        },
        requestBody: {
            feature: a,
            value: e
        }
    }), t[3] = a, t[4] = r, t[5] = x) : x = t[5];
    let S;
    t[6] !== b || t[7] !== x ? (S = {
        onSuccess: ne,
        onSettled: b,
        mutationFn: x
    }, t[6] = b, t[7] = x, t[8] = S) : S = t[8];
    let C = F(S),
        re;
    t[9] === C.isPending ? re = t[10] : (re = () => {
        C.isPending || te(!1)
    }, t[9] = C.isPending, t[10] = re);
    let ie = re,
        ae;
    t[11] !== a || t[12] !== C || t[13] !== d ? (ae = e => {
        d ? (d(a, e), te(!1)) : C.mutate(e)
    }, t[11] = a, t[12] = C, t[13] = d, t[14] = ae) : ae = t[14];
    let w = ae,
        T;
    t[15] !== f || t[16] !== v ? (T = f ?? (0, Y.jsx)(M, {
        ...v,
        values: {
            strong: Be
        }
    }), t[15] = f, t[16] = v, t[17] = T) : T = t[17];
    let E;
    t[18] === T ? E = t[19] : (E = (0, Y.jsx)(`span`, {
        className: `min-w-0 text-sm text-token-text-tertiary`,
        children: T
    }), t[18] = T, t[19] = E);
    let oe = _ ? `secondary` : `primary`,
        se = m || C.isPending,
        O;
    t[20] !== h || t[21] !== _ ? (O = h.formatMessage(_ ? Ue.enterpriseReleaseOptInButton : Ue.enterpriseReleaseOptOutButton), t[20] = h, t[21] = _, t[22] = O) : O = t[22];
    let k;
    t[23] !== w || t[24] !== _ ? (k = () => {
        _ ? w(!1) : te(!0)
    }, t[23] = w, t[24] = _, t[25] = k) : k = t[25];
    let A = _ ? Ue.enterpriseReleaseOptInButton : Ue.enterpriseReleaseOptOutButton,
        j;
    t[26] === A ? j = t[27] : (j = (0, Y.jsx)(M, {
        ...A
    }), t[26] = A, t[27] = j);
    let N;
    t[28] !== oe || t[29] !== se || t[30] !== O || t[31] !== k || t[32] !== j ? (N = (0, Y.jsx)(n, {
        color: oe,
        size: `small`,
        disabled: se,
        loading: !1,
        label: O,
        onClick: k,
        children: j
    }), t[28] = oe, t[29] = se, t[30] = O, t[31] = k, t[32] = j, t[33] = N) : N = t[33];
    let P;
    t[34] !== N || t[35] !== E ? (P = (0, Y.jsxs)(`div`, {
        className: `flex items-center justify-between gap-6 py-2`,
        children: [E, N]
    }), t[34] = N, t[35] = E, t[36] = P) : P = t[36];
    let I;
    t[37] === s ? I = t[38] : (I = (0, Y.jsx)(M, {
        ...Ue.enterpriseReleaseOptOutModalTitle,
        values: {
            name: s
        }
    }), t[37] = s, t[38] = I);
    let L;
    t[39] !== p || t[40] !== s || t[41] !== y ? (L = p ?? (0, Y.jsx)(M, {
        ...y,
        values: {
            name: s
        }
    }), t[39] = p, t[40] = s, t[41] = y, t[42] = L) : L = t[42];
    let ue;
    t[43] === w ? ue = t[44] : (ue = () => w(!0), t[43] = w, t[44] = ue);
    let R;
    t[45] === Symbol.for(`react.memo_cache_sentinel`) ? (R = (0, Y.jsx)(M, {
        ...Ue.enterpriseReleaseOptOutConfirm
    }), t[45] = R) : R = t[45];
    let z;
    t[46] !== C.isPending || t[47] !== ue ? (z = (0, Y.jsx)(D.Button, {
        as: `button`,
        color: `primary`,
        disabled: C.isPending,
        loading: C.isPending,
        onClick: ue,
        children: R
    }), t[46] = C.isPending, t[47] = ue, t[48] = z) : z = t[48];
    let B;
    t[49] === Symbol.for(`react.memo_cache_sentinel`) ? (B = (0, Y.jsx)(M, {
        ...Ue.enterpriseReleaseOptOutCancel
    }), t[49] = B) : B = t[49];
    let V;
    t[50] !== ie || t[51] !== C.isPending ? (V = (0, Y.jsx)(D.Button, {
        as: `button`,
        color: `ghost`,
        disabled: C.isPending,
        onClick: ie,
        children: B
    }), t[50] = ie, t[51] = C.isPending, t[52] = V) : V = t[52];
    let H;
    t[53] !== ie || t[54] !== g || t[55] !== I || t[56] !== L || t[57] !== z || t[58] !== V ? (H = (0, Y.jsx)(o, {
        isOpen: g,
        onClose: ie,
        title: I,
        description: L,
        testId: `modal-enterprise-release-opt-out`,
        primaryButton: z,
        secondaryButton: V
    }), t[53] = ie, t[54] = g, t[55] = I, t[56] = L, t[57] = z, t[58] = V, t[59] = H) : H = t[59];
    let de;
    return t[60] !== P || t[61] !== H ? (de = (0, Y.jsxs)(Y.Fragment, {
        children: [P, H]
    }), t[60] = P, t[61] = H, t[62] = de) : de = t[62], de
}

function Be(e) {
    return (0, Y.jsx)(`strong`, {
        children: e
    })
}
var Ve, He, Y, Ue, We = e((() => {
        Ve = L(), g(), d(), r(), s(), I(), He = t(P()), N(), Y = k(), Ue = j({
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
    let p = le(),
        m = se(),
        h = x(oe),
        ee = x(u),
        g = !h && C(`1261424157`),
        te = g && a && C(`2634861725`),
        _ = !!t,
        {
            data: v,
            isLoading: y,
            isFetching: ne,
            isError: b
        } = Ce({
            workspaceId: e,
            roleId: t ?? ``,
            enabled: g && _
        }),
        {
            data: S,
            isLoading: re
        } = Se({
            workspaceId: e,
            roleId: t ?? ``,
            enabled: g && _
        }),
        {
            upsertRoleMetadata: ie,
            isPending: ae
        } = De({
            workspaceId: e,
            roleId: t ?? ``
        }),
        [w, T] = (0, X.useState)(`none`),
        [E, D] = (0, X.useState)(``),
        [O, k] = (0, X.useState)(!1),
        [A, j] = (0, X.useState)(``),
        [ce, N] = (0, X.useState)(`none`),
        [P, F] = (0, X.useState)(``),
        [I, L] = (0, X.useState)(!1),
        [ue, R] = (0, X.useState)(null),
        [z, B] = (0, X.useState)(!1),
        [H, de] = (0, X.useState)(null),
        [fe, pe] = (0, X.useState)(null),
        W = (0, X.useMemo)(() => S ? {
            low: S.low_credit_limit,
            medium: S.medium_credit_limit,
            high: S.high_credit_limit
        } : n, [S, n]),
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
        q = v != null,
        he = c ? {
            ...v?.metadata,
            ...c
        } : v?.metadata ?? null,
        ge = he?.soft_alert_credit_limit ?? null,
        ye = he?.hard_cap_credit_limit ?? null,
        xe = he?.hard_cap_shared_credit_limit ?? null,
        we = ge ?? ye ?? null,
        J = xe?.limit ?? null;
    (0, X.useEffect)(() => {
        if (!v) return;
        if (!we) {
            T(`none`), D(``), k(!1), j(``);
            return
        }
        let e = ge?.limit ?? null,
            t = ye?.limit ?? null,
            n = t === 0,
            r = t != null,
            i = e ?? t ?? null;
        if (D(e == null ? t != null && !n ? String(t) : `` : String(e)), k(r), j(r && t != null ? String(t) : ``), !r && i != null && i === W.low) {
            T(`low`);
            return
        }
        if (!r && i != null && i === W.medium) {
            T(`medium`);
            return
        }
        if (!r && i != null && i === W.high) {
            T(`high`);
            return
        }
        T(i == null ? `none` : `custom`)
    }, [v, we, ge, ye, W.high, W.low, W.medium]);
    let Te = {
        low: String(W.low),
        medium: String(W.medium),
        high: String(W.high)
    };
    (0, X.useEffect)(() => {
        if (v) {
            if (J == null) {
                N(`none`), F(``), R(null);
                return
            }
            F(String(J)), R(null), N(`custom`)
        }
    }, [v, J]);
    let Ee = (() => {
            switch (w) {
                case `low`:
                    return Te.low;
                case `medium`:
                    return Te.medium;
                case `high`:
                    return Te.high;
                case `custom`:
                    return E;
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
        ke = (0, X.useMemo)(() => Oe.filter(e => e.key === `none` || e.key === `custom`), [Oe]),
        Ae = p.formatMessage(Q.enforcementDropdownPlaceholder),
        je = Oe.find(e => e.key === w) ?? null,
        Me = je?.label ?? Ae,
        Ne = je?.limitLabel,
        Pe = w === `custom` ? O && A.trim() ? G(A.trim()) : E.trim() ? G(E.trim()) : Me : (je && Ne ? Ne : Me) ?? Ae,
        Fe = !je || je.key === `none`,
        Ie = g && _ && (y && !v || re && !S),
        Le = ae || fe != null,
        Re = d == null && b && !q,
        ze = o || d != null && ee || Le || ne || !q && !Re,
        Be = o || d != null && ee || Le || ne || !q && !Re,
        Ve = fe === `usage`,
        He = fe === `shared`,
        Y = async ({
            selectionKey: e,
            alertLimitOverride: n,
            hardCapEnabledOverride: r,
            hardCapLimitOverride: i
        }) => {
            if (!t || o) return;
            let a = ((e === `custom` ? n ?? E : e === `low` || e === `medium` || e === `high` ? Te[e] ?? `` : ``) ?? ``).trim(),
                s = a === `` ? NaN : Number(a),
                c = e === `custom` && (r ?? O) ? (i ?? A ?? ``).trim() : ``,
                l = c === `` ? NaN : Number(c),
                u = e === `custom` && c !== ``,
                f = u && Number.isFinite(l) && l === 0;
            if (e !== `none` && e !== `none` && (e !== `custom` || u && !f) && (a === `` || !Number.isFinite(s) || s <= 0)) {
                de(a === `` ? p.formatMessage(Q.alertRequiredForHardCap) : p.formatMessage(Q.invalidLimit));
                return
            }
            if (u && (c === `` || !Number.isFinite(l) || l < 0)) {
                de(p.formatMessage(Q.invalidLimit));
                return
            }
            de(null);
            let h = ct({
                selectionKey: e,
                trimmedSelectionAlert: a,
                parsedSelectionAlert: s,
                hasCustomHardCap: u,
                parsedSelectionHardCap: l,
                isHardCapZero: f
            });
            if (d) {
                if (v == null) throw Error(`Role metadata must load before editing usage limits`);
                d(h, v);
                return
            }
            try {
                pe(`usage`), await ie(h), m.success(p.formatMessage(Q.submitSuccess))
            } catch {
                m.danger(p.formatMessage(Q.submitError))
            } finally {
                pe(null)
            }
        }, Ue = async ({
            selectionKey: e,
            limitOverride: n
        }) => {
            if (!t || o) return;
            let r = (e === `custom` ? n ?? P : ``).trim(),
                i = r === `` ? NaN : Number(r);
            if (e !== `none` && (r === `` || !Number.isFinite(i) || i < 0)) {
                R(p.formatMessage(Q.sharedUsageInvalidLimit));
                return
            }
            R(null);
            let a = lt({
                sharedUsageLimit: e === `none` ? null : i
            });
            if (d) {
                if (v == null) throw Error(`Role metadata must load before editing usage limits`);
                d(a, v);
                return
            }
            try {
                pe(`shared`), await ie(a), m.success(p.formatMessage(Q.submitSuccess))
            } catch {
                m.danger(p.formatMessage(Q.submitError))
            } finally {
                pe(null)
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
                    L(!0);
                    return
                }
                N(e.key), Ue({
                    selectionKey: e.key
                })
            }
        }, Ke = ({
            alertLimit: e,
            hardCapEnabled: t,
            hardCapLimit: n
        }) => {
            D(e), k(t), j(t ? n : ``), T(`custom`), B(!1), Y({
                selectionKey: `custom`,
                alertLimitOverride: e,
                hardCapEnabledOverride: t,
                hardCapLimitOverride: t ? n : ``
            })
        }, qe = e => {
            F(e), N(`custom`), L(!1), Ue({
                selectionKey: `custom`,
                limitOverride: e
            })
        }, Je = E === `` ? Ee : E, Ye = O, Xe = A, Qe = ke.find(e => e.key === ce) ?? null, et = Qe?.label ?? Ae, tt = ce === `custom` && P.trim() ? me(P.trim()) : et, it = !Qe || Qe.key === `none`;
    return !g || !_ || !ot({
        searchQuery: r,
        intl: p,
        includeSharedUsageLimit: te
    }) ? null : (0, Z.jsxs)(Z.Fragment, {
        children: [(0, Z.jsx)($e, {
            isOpen: !o && z,
            alertLimit: Je,
            hardCapEnabled: Ye,
            hardCapLimit: Xe,
            onClose: () => B(!1),
            onSave: Ke,
            isStaging: d != null,
            onUnappliedChangesChange: f
        }), te && (0, Z.jsx)(Ze, {
            isOpen: !o && I,
            limit: P,
            onClose: () => L(!1),
            onSave: qe,
            isStaging: d != null,
            onUnappliedChangesChange: f
        }), (0, Z.jsx)(ve, {
            children: Ie ? (0, Z.jsx)(`div`, {
                className: `flex h-24 items-center justify-center`,
                children: (0, Z.jsx)(l, {
                    className: `text-token-text-tertiary h-6 w-6`
                })
            }) : (0, Z.jsxs)(_e, {
                className: s ? `border-b-0` : ``,
                children: [(0, Z.jsx)(be, {
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
                                    }), (0, Z.jsx)(U, {
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
                }), te && (0, Z.jsx)(be, {
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
                                        }), (0, Z.jsx)(U, {
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
        [u, d] = (0, X.useState)(r),
        [f, p] = (0, X.useState)(!1),
        m;
    t[0] !== n || t[1] !== c || t[2] !== r || t[3] !== u ? (m = c && n && u.trim() !== r.trim(), t[0] = n, t[1] = c, t[2] = r, t[3] = u, t[4] = m) : m = t[4];
    let h = m,
        ee, g;
    t[5] !== h || t[6] !== s ? (ee = () => {
        if (h) return s?.(!0), () => s?.(!1)
    }, g = [h, s], t[5] = h, t[6] = s, t[7] = ee, t[8] = g) : (ee = t[7], g = t[8]), (0, X.useEffect)(ee, g);
    let te, _;
    t[9] !== n || t[10] !== r ? (te = () => {
        n && (d(r), p(!1))
    }, _ = [n, r], t[9] = n, t[10] = r, t[11] = te, t[12] = _) : (te = t[11], _ = t[12]), (0, X.useEffect)(te, _);
    let v;
    t[13] === f ? v = t[14] : (v = e => {
        let t = e.replace(/\s+/g, ``);
        /^\d*$/.test(t) && (d(t), f && p(!1))
    }, t[13] = f, t[14] = v);
    let y = v,
        ne;
    t[15] === u ? ne = t[16] : (ne = u.trim(), t[15] = u, t[16] = ne);
    let b = ne,
        x = b === `` ? NaN : Number(b),
        S;
    t[17] !== x || t[18] !== b ? (S = b !== `` && Number.isFinite(x) && x >= 0, t[17] = x, t[18] = b, t[19] = S) : S = t[19];
    let C = S,
        re;
    t[20] !== l || t[21] !== C ? (re = C ? `` : l.formatMessage(Q.sharedUsageInvalidLimit), t[20] = l, t[21] = C, t[22] = re) : re = t[22];
    let ie = re,
        ae = f && !!ie,
        w = ae ? ie : void 0,
        T = `pe-36${w?` text-interactive-label-warning-secondary placeholder:text-interactive-label-warning-secondary`:``}`,
        E = w ? `border-token-border-error focus-within:border-token-border-error focus-within:ring-token-border-error` : void 0,
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
    t[37] !== A || t[38] !== M ? (N = (0, Z.jsx)(D.Header, {
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
    t[46] === y ? L = t[47] : (L = e => y(e.target.value), t[46] = y, t[47] = L);
    let R;
    t[48] === se ? R = t[49] : (R = (0, Z.jsx)(`span`, {
        className: `text-token-text-primary pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 text-xs`,
        children: se
    }), t[48] = se, t[49] = R);
    let z;
    t[50] !== E || t[51] !== T || t[52] !== w || t[53] !== I || t[54] !== L || t[55] !== R || t[56] !== u ? (z = (0, Z.jsx)(ue, {
        name: `custom-shared-usage-limit`,
        ariaLabel: I,
        inputMode: `numeric`,
        value: u,
        onChange: L,
        className: E,
        insideContainerChildren: R,
        inputClassName: T,
        showErrorIcon: !1,
        showInlineErrorMessage: !1,
        error: w
    }), t[50] = E, t[51] = T, t[52] = w, t[53] = I, t[54] = L, t[55] = R, t[56] = u, t[57] = z) : z = t[57];
    let B;
    t[58] !== F || t[59] !== z ? (B = (0, Z.jsxs)(`div`, {
        className: `flex flex-col gap-3 px-6 text-sm`,
        children: [F, z]
    }), t[58] = F, t[59] = z, t[60] = B) : B = t[60];
    let V;
    t[61] !== ie || t[62] !== ae ? (V = ae && (0, Z.jsxs)(`div`, {
        className: `text-interactive-label-warning-secondary mb-3 flex items-center gap-2 text-xs`,
        children: [(0, Z.jsx)(pe, {
            className: `h-4 w-4`,
            "aria-hidden": `true`
        }), (0, Z.jsx)(`span`, {
            children: ie
        })]
    }), t[61] = ie, t[62] = ae, t[63] = V) : V = t[63];
    let H;
    t[64] !== l || t[65] !== c ? (H = l.formatMessage(c ? Q.customModalApplyLabel : Q.customModalSaveLabel), t[64] = l, t[65] = c, t[66] = H) : H = t[66];
    let U = !C,
        fe = !C,
        W;
    t[67] !== C || t[68] !== a || t[69] !== b ? (W = () => {
        p(!0), C && a(b)
    }, t[67] = C, t[68] = a, t[69] = b, t[70] = W) : W = t[70];
    let G;
    t[71] !== H || t[72] !== U || t[73] !== fe || t[74] !== W ? (G = (0, Z.jsx)(D.Button, {
        color: `primary`,
        title: H,
        visuallyDisabled: U,
        "aria-disabled": fe,
        onClick: W
    }), t[71] = H, t[72] = U, t[73] = fe, t[74] = W, t[75] = G) : G = t[75];
    let me;
    t[76] === l ? me = t[77] : (me = l.formatMessage(Q.customModalCancelLabel), t[76] = l, t[77] = me);
    let K;
    t[78] !== i || t[79] !== me ? (K = (0, Z.jsx)(D.Button, {
        title: me,
        onClick: i
    }), t[78] = i, t[79] = me, t[80] = K) : K = t[80];
    let q;
    t[81] !== G || t[82] !== K ? (q = (0, Z.jsx)(D.Actions, {
        primaryButton: G,
        secondaryButton: K
    }), t[81] = G, t[82] = K, t[83] = q) : q = t[83];
    let he;
    t[84] !== V || t[85] !== q ? (he = (0, Z.jsxs)(`div`, {
        className: `px-6 pb-4`,
        children: [V, q]
    }), t[84] = V, t[85] = q, t[86] = he) : he = t[86];
    let ge;
    t[87] !== N || t[88] !== B || t[89] !== he ? (ge = (0, Z.jsx)(D.Overlay, {
        children: (0, Z.jsx)(D.Content, {
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
    return t[91] !== n || t[92] !== O || t[93] !== ge ? (_e = (0, Z.jsx)(D.Root, {
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
        ee = p ? `` : d && !o ? r.formatMessage(Q.alertRequiredForHardCap) : r.formatMessage(Q.invalidLimit),
        g = ``;
    return n && (s ? h ? g = r.formatMessage(Q.customModalHardCapConflictError) : d && !o ? g = r.formatMessage(Q.alertRequiredForHardCap) : (!p || !m) && (g = r.formatMessage(Q.invalidLimit)) : g = r.formatMessage(Q.customModalHardCapRequired)), {
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
        alertErrorMessage: ee,
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
        d = le(),
        [f, p] = (0, X.useState)(r),
        [m, h] = (0, X.useState)(i),
        [g, te] = (0, X.useState)(a),
        [_, v] = (0, X.useState)(!1),
        y;
    t[0] !== r || t[1] !== f || t[2] !== i || t[3] !== a || t[4] !== g || t[5] !== m || t[6] !== n || t[7] !== u ? (y = u && n && (f.trim() !== r.trim() || m !== i || m && g.trim() !== a.trim()), t[0] = r, t[1] = f, t[2] = i, t[3] = a, t[4] = g, t[5] = m, t[6] = n, t[7] = u, t[8] = y) : y = t[8];
    let b = y,
        x, S;
    t[9] !== b || t[10] !== l ? (x = () => {
        if (b) return l?.(!0), () => l?.(!1)
    }, S = [b, l], t[9] = b, t[10] = l, t[11] = x, t[12] = S) : (x = t[11], S = t[12]), (0, X.useEffect)(x, S);
    let C, re;
    t[13] !== r || t[14] !== i || t[15] !== a || t[16] !== n ? (C = () => {
        n && (p(r), h(i), te(a), v(!1))
    }, re = [r, i, a, n], t[13] = r, t[14] = i, t[15] = a, t[16] = n, t[17] = C, t[18] = re) : (C = t[17], re = t[18]), (0, X.useEffect)(C, re);
    let ie, ae;
    t[19] === m ? (ie = t[20], ae = t[21]) : (ie = () => {
        m || v(!1)
    }, ae = [m], t[19] = m, t[20] = ie, t[21] = ae), (0, X.useEffect)(ie, ae);
    let w, T;
    t[22] !== f || t[23] !== g || t[24] !== m ? (T = () => {
        m && g.trim() === `0` && f !== `` && p(``)
    }, w = [f, g, m], t[22] = f, t[23] = g, t[24] = m, t[25] = w, t[26] = T) : (w = t[25], T = t[26]), (0, X.useEffect)(T, w);
    let E;
    t[27] === _ ? E = t[28] : (E = () => {
        _ && v(!1)
    }, t[27] = _, t[28] = E);
    let oe = E,
        se, O;
    if (t[29] !== oe) {
        se = t => {
            e(p, t), oe()
        }, O = t => {
            e(te, t), oe()
        };
        let e = et;
        t[29] = oe, t[30] = se, t[31] = O
    } else se = t[30], O = t[31];
    let k, A, j, ce, M, N, P, F, I, L, R, z, B, V, H, U, fe, W, G, me, K, q, he, ge;
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
            alertErrorMessage: p,
            hardCapErrorMessage: h
        } = Qe({
            alertValue: f,
            hardCapValue: g,
            isHardCapEnabled: m,
            intl: d
        });
        M = e, I = r, R = s, L = R, z = !i && !a || !c || !l || u;
        let te = _ && (!!p || !!h);
        B = te ? h || p : ``, ce = te && p ? p : void 0, F = te && h ? h : void 0, N = F ? `border-token-border-error focus-within:border-token-border-error focus-within:ring-token-border-error` : void 0, P = `pe-24${F?` text-interactive-label-warning-secondary placeholder:text-interactive-label-warning-secondary`:``}`;
        let v;
        t[63] === d ? v = t[64] : (v = d.formatMessage(Q.customModalCreditsSuffix), t[63] = d, t[64] = v), V = v, j = D.Root, q = n, t[65] === o ? he = t[66] : (he = e => {
            e || o()
        }, t[65] = o, t[66] = he), ge = `modal-custom-usage-limit`, A = D.Overlay, k = D.Content, G = `center`, me = `start-auto col-start-1 row-start-1 w-full max-w-sm ltr:translate-x-0 rtl:translate-x-0`, K = `grid grid-cols-1 grid-rows-1 place-items-center`, fe = `flex flex-col gap-4`;
        let y;
        t[67] === d ? y = t[68] : (y = d.formatMessage(Q.customModalTitle), t[67] = d, t[68] = y);
        let ne;
        t[69] === y ? ne = t[70] : (ne = (0, Z.jsx)(`div`, {
            className: `text-lg font-semibold`,
            children: y
        }), t[69] = y, t[70] = ne);
        let b;
        t[71] === d ? b = t[72] : (b = d.formatMessage(Q.customModalCancelLabel), t[71] = d, t[72] = b);
        let x;
        t[73] === Symbol.for(`react.memo_cache_sentinel`) ? (x = (0, Z.jsx)(de, {
            className: `h-4 w-4`
        }), t[73] = x) : x = t[73];
        let S;
        t[74] !== o || t[75] !== b ? (S = (0, Z.jsx)(`button`, {
            type: `button`,
            className: `text-token-text-tertiary hover:text-token-text-primary rounded-full p-1`,
            onClick: o,
            "aria-label": b,
            children: x
        }), t[74] = o, t[75] = b, t[76] = S) : S = t[76], t[77] !== ne || t[78] !== S ? (W = (0, Z.jsx)(D.Header, {
            className: `px-6 ps-6 pt-6 pb-0`,
            title: ne,
            closeButton: S
        }), t[77] = ne, t[78] = S, t[79] = W) : W = t[79], U = `flex flex-col gap-6 px-6 text-sm`, H = ee(`flex flex-col gap-3`, L && `opacity-50`), t[32] = f, t[33] = g, t[34] = _, t[35] = d, t[36] = m, t[37] = n, t[38] = o, t[39] = k, t[40] = A, t[41] = j, t[42] = ce, t[43] = M, t[44] = N, t[45] = P, t[46] = F, t[47] = I, t[48] = L, t[49] = R, t[50] = z, t[51] = B, t[52] = V, t[53] = H, t[54] = U, t[55] = fe, t[56] = W, t[57] = G, t[58] = me, t[59] = K, t[60] = q, t[61] = he, t[62] = ge
    } else k = t[39], A = t[40], j = t[41], ce = t[42], M = t[43], N = t[44], P = t[45], F = t[46], I = t[47], L = t[48], R = t[49], z = t[50], B = t[51], V = t[52], H = t[53], U = t[54], fe = t[55], W = t[56], G = t[57], me = t[58], K = t[59], q = t[60], he = t[61], ge = t[62];
    let _e;
    t[80] === d ? _e = t[81] : (_e = d.formatMessage(Q.customModalSetAlertLabel), t[80] = d, t[81] = _e);
    let ve;
    t[82] === _e ? ve = t[83] : (ve = (0, Z.jsx)(`div`, {
        className: `text-token-text-primary font-medium`,
        children: _e
    }), t[82] = _e, t[83] = ve);
    let ye;
    t[84] === d ? ye = t[85] : (ye = d.formatMessage(Q.customModalSetAlertDescription), t[84] = d, t[85] = ye);
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
    t[91] === d ? Se = t[92] : (Se = d.formatMessage(Q.customModalSetAlertLabel), t[91] = d, t[92] = Se);
    let Ce;
    t[93] === se ? Ce = t[94] : (Ce = e => se(e.target.value), t[93] = se, t[94] = Ce);
    let we;
    t[95] === V ? we = t[96] : (we = (0, Z.jsx)(`span`, {
        className: `text-token-text-primary pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 text-xs`,
        children: V
    }), t[95] = V, t[96] = we);
    let J;
    t[97] !== ce || t[98] !== f || t[99] !== L || t[100] !== Se || t[101] !== Ce || t[102] !== we ? (J = (0, Z.jsx)(ue, {
        name: `custom-alert-limit`,
        ariaLabel: Se,
        inputMode: `numeric`,
        value: f,
        onChange: Ce,
        disabled: L,
        insideContainerChildren: we,
        inputClassName: `pe-24`,
        showErrorIcon: !1,
        showInlineErrorMessage: !1,
        error: ce
    }), t[97] = ce, t[98] = f, t[99] = L, t[100] = Se, t[101] = Ce, t[102] = we, t[103] = J) : J = t[103];
    let Te;
    t[104] !== d || t[105] !== L ? (Te = L && (0, Z.jsx)(`div`, {
        className: `text-token-text-warning text-xs`,
        children: d.formatMessage(Q.customModalAlertDisabledNote)
    }), t[104] = d, t[105] = L, t[106] = Te) : Te = t[106];
    let Ee;
    t[107] !== H || t[108] !== xe || t[109] !== J || t[110] !== Te ? (Ee = (0, Z.jsxs)(`div`, {
        className: H,
        children: [xe, J, Te]
    }), t[107] = H, t[108] = xe, t[109] = J, t[110] = Te, t[111] = Ee) : Ee = t[111];
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
    t[118] === oe ? Ae = t[119] : (Ae = e => {
        h(!!e), oe()
    }, t[118] = oe, t[119] = Ae);
    let je;
    t[120] !== m || t[121] !== ke || t[122] !== Ae ? (je = (0, Z.jsx)(ne, {
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
    t[131] !== O || t[132] !== N || t[133] !== P || t[134] !== F || t[135] !== g || t[136] !== d || t[137] !== m || t[138] !== V ? (Fe = m && (0, Z.jsx)(Z.Fragment, {
        children: (0, Z.jsx)(ue, {
            name: `custom-hard-cap-limit`,
            ariaLabel: d.formatMessage(Q.customModalSetHardCapLabel),
            inputMode: `numeric`,
            value: g,
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
    }), t[131] = O, t[132] = N, t[133] = P, t[134] = F, t[135] = g, t[136] = d, t[137] = m, t[138] = V, t[139] = Fe) : Fe = t[139];
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
    t[148] === B ? Re = t[149] : (Re = B && (0, Z.jsxs)(`div`, {
        className: `text-interactive-label-warning-secondary mb-3 flex items-center gap-2 text-xs`,
        children: [(0, Z.jsx)(pe, {
            className: `h-4 w-4`,
            "aria-hidden": `true`
        }), (0, Z.jsx)(`span`, {
            children: B
        })]
    }), t[148] = B, t[149] = Re);
    let ze;
    t[150] !== d || t[151] !== u ? (ze = d.formatMessage(u ? Q.customModalApplyLabel : Q.customModalSaveLabel), t[150] = d, t[151] = u, t[152] = ze) : ze = t[152];
    let Be;
    t[153] !== M || t[154] !== I || t[155] !== m || t[156] !== R || t[157] !== z || t[158] !== s ? (Be = () => {
        v(!0), !z && s({
            alertLimit: R ? `` : M,
            hardCapEnabled: m,
            hardCapLimit: m ? I : ``
        })
    }, t[153] = M, t[154] = I, t[155] = m, t[156] = R, t[157] = z, t[158] = s, t[159] = Be) : Be = t[159];
    let Ve;
    t[160] !== z || t[161] !== ze || t[162] !== Be ? (Ve = (0, Z.jsx)(D.Button, {
        color: `primary`,
        title: ze,
        visuallyDisabled: z,
        "aria-disabled": z,
        onClick: Be
    }), t[160] = z, t[161] = ze, t[162] = Be, t[163] = Ve) : Ve = t[163];
    let He;
    t[164] === d ? He = t[165] : (He = d.formatMessage(Q.customModalCancelLabel), t[164] = d, t[165] = He);
    let Y;
    t[166] !== o || t[167] !== He ? (Y = (0, Z.jsx)(D.Button, {
        title: He,
        onClick: o
    }), t[166] = o, t[167] = He, t[168] = Y) : Y = t[168];
    let Ue;
    t[169] !== Ve || t[170] !== Y ? (Ue = (0, Z.jsx)(D.Actions, {
        primaryButton: Ve,
        secondaryButton: Y
    }), t[169] = Ve, t[170] = Y, t[171] = Ue) : Ue = t[171];
    let We;
    t[172] !== Re || t[173] !== Ue ? (We = (0, Z.jsxs)(`div`, {
        className: `px-6 pb-4`,
        children: [Re, Ue]
    }), t[172] = Re, t[173] = Ue, t[174] = We) : We = t[174];
    let Ge;
    t[175] !== fe || t[176] !== W || t[177] !== Le || t[178] !== We ? (Ge = (0, Z.jsxs)(`div`, {
        className: fe,
        children: [W, Le, We]
    }), t[175] = fe, t[176] = W, t[177] = Le, t[178] = We, t[179] = Ge) : Ge = t[179];
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
        tt = L(), Oe(), xe(), q(), H(), W(), G(), me(), d(), m(), R(), O(), w(), b(), a(), v(), S(), X = t(P()), N(), Z = k(), nt = `text-token-link hover:text-token-link-hover underline`, rt = {
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
                newReleaseEntries: e.newReleaseEntries.filter(e => J({
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
        St = L(), h(), Re(), T(), Pe(), ke(), Me(), E(), Ee(), ye(), We(), Ye(), d(), K(), ae(), B(), r(), m(), c(), O(), w(), S(), Ct = t(P()), N(), _t(), $ = k(), wt = `text-token-link hover:text-token-link-hover underline`, Tt = e => {
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
                    data: r,
                    preReleases: i,
                    handleSaveRole: a,
                    role: s,
                    showOptOutControls: c,
                    isRbacEnabled: u,
                    layout: d,
                    disableAllToggles: m,
                    disableRolePermissionWrites: h,
                    searchQuery: g,
                    sectionExpanded: v,
                    forceSectionExpanded: b,
                    onSectionExpandedChange: x,
                    renderHighlightedText: S,
                    renderSettingEntryControl: C,
                    getEntryPresentation: ae,
                    renderRbacEntryControl: w,
                    useSitesPermissionSelect: T,
                    effectiveRolePermissions: E,
                    onOptOutChange: oe,
                    loadingAdminPreviewFeature: se,
                    onSetAdminPreviewAccess: O
                } = e,
                k = d === void 0 ? `card` : d,
                A = m !== void 0 && m,
                j = h !== void 0 && h,
                ce = g === void 0 ? `` : g,
                N = b !== void 0 && b,
                P = T === void 0 || T,
                F = le(),
                I = (0, Ct.useId)(),
                L = y(n),
                ue = re(),
                R = L ?? ue,
                [B, V] = (0, Ct.useState)(null),
                H, de, U, fe, pe, W, G, me, K, q, _e, ve, ye, be, xe, Se;
            if (t[0] !== R?.isHipaaCompliantWorkspace || t[1] !== r || t[2] !== A || t[3] !== j || t[4] !== E || t[5] !== N || t[6] !== ae || t[7] !== a || t[8] !== F || t[9] !== u || t[10] !== k || t[11] !== se || t[12] !== oe || t[13] !== x || t[14] !== O || t[15] !== B?.enableConfirmation || t[16] !== i || t[17] !== S || t[18] !== w || t[19] !== C || t[20] !== s || t[21] !== ce || t[22] !== I || t[23] !== v || t[24] !== c || t[25] !== P || t[26] !== n) {
                ye = Symbol.for(`react.early_return_sentinel`);
                bb0: {
                    let e = gt({
                            intl: F,
                            preReleases: i,
                            searchQuery: ce,
                            getEntryPresentation: ae,
                            layout: k,
                            effectiveRolePermissions: E,
                            rolePermissions: s.permissions
                        }),
                        o = e.some(vt);
                    if (ft(ce) && (k === `section` ? !o : e.length === 0)) {
                        ye = null;
                        break bb0
                    }
                    let d = k === `section` && !o,
                        m = d ? [] : e,
                        h = d || m.some(yt),
                        g = h ? kt.adminPreviewSection : kt.enterpriseBetaFeatureSection,
                        y = R?.isHipaaCompliantWorkspace ?? !1,
                        b = h ? kt.adminPreviewSectionDescription : m.some(bt) ? kt.enterpriseBetaFeaturePerFeatureReleaseDescription : k === `section` ? kt.enterpriseBetaFeatureJuly30SectionDescription : kt.enterpriseBetaFeatureSectionDescription,
                        re;t[43] !== b || t[44] !== F || t[45] !== S ? (re = S?.(F.formatMessage(b)), t[43] = b, t[44] = F, t[45] = S, t[46] = re) : re = t[46];
                    let T = re,
                        D = k !== `section` && e.length === 0 ? kt.enterpriseBetaFeatureEmptySectionDescription : y && o && !h ? (0, $.jsxs)(`div`, {
                            className: `flex flex-col gap-2`,
                            children: [(0, $.jsx)(`p`, {
                                children: T ?? (0, $.jsx)(M, {
                                    ...b
                                })
                            }), (0, $.jsx)(`p`, {
                                className: `text-token-text-status-warning`,
                                children: (0, $.jsx)(M, {
                                    ...kt.enterpriseBetaFeatureSectionHipaaDescription
                                })
                            })]
                        }) : T ?? b,
                        L;t[47] === F ? L = t[48] : (L = e => typeof e.title == `string` ? e.title : F.formatMessage(e.title), t[47] = F, t[48] = L),
                    de = L;
                    let le;t[49] === s.permissions ? le = t[50] : (le = (e, t) => {
                        let n = e.additionalPermissionNames ?? [];
                        return we({
                            add: t,
                            currentPermissionNames: s.permissions,
                            permissionName: e.permissionName,
                            additionalPermissionNames: t ? n : [...n, ...e.permissionNamesToRemoveWhenDisabled ?? []]
                        })
                    }, t[49] = s.permissions, t[50] = le);
                    let ue = le,
                        Ce;t[51] !== j || t[52] !== a ? (Ce = e => j ? Promise.resolve() : a(e), t[51] = j, t[52] = a, t[53] = Ce) : Ce = t[53];
                    let J = Ce,
                        Te;t[54] !== ue || t[55] !== s || t[56] !== J ? (Te = (e, t) => J({
                        ...s,
                        permissions: ue(e, t)
                    }), t[54] = ue, t[55] = s, t[56] = J, t[57] = Te) : Te = t[57],
                    fe = Te,
                    U = B?.enableConfirmation;
                    let Ee = k === `section` && v != null && x != null,
                        De = !Ee || N || v,
                        Oe, ke;t[58] !== F || t[59] !== S || t[60] !== g ? (Oe = F.formatMessage(g), ke = S?.(Oe), t[58] = F, t[59] = S, t[60] = g, t[61] = Oe, t[62] = ke) : (Oe = t[61], ke = t[62]);
                    let Me = ke;H = ge,
                    G = ee(k === `section` ? ee(`border-token-border-default gap-4 border-b pb-8 last:border-b-0`, De && `md:grid md:grid-cols-[minmax(0,240px)_minmax(0,1fr)] md:gap-x-[30px]`) : ee(`border-token-border-default rounded-2xl border`, h ? `p-8!` : `p-6`), he),
                    me = g,
                    t[63] !== De || t[64] !== N || t[65] !== Me || t[66] !== Ee || t[67] !== x || t[68] !== S || t[69] !== I || t[70] !== Oe || t[71] !== g ? (K = Ee ? (0, $.jsxs)(`span`, {
                        className: `flex items-center gap-3`,
                        children: [(0, $.jsx)(Fe, {
                            sectionTitle: Oe,
                            expanded: De,
                            controlsId: I,
                            disabled: N,
                            onExpandedChange: x
                        }), (0, $.jsx)(`span`, {
                            children: Me ?? (0, $.jsx)(M, {
                                ...g
                            })
                        })]
                    }) : S ? (0, $.jsx)(`span`, {
                        children: Me
                    }) : void 0, t[63] = De, t[64] = N, t[65] = Me, t[66] = Ee, t[67] = x, t[68] = S, t[69] = I, t[70] = Oe, t[71] = g, t[72] = K) : K = t[72],
                    q = k === `section` ? void 0 : h ? `text-base! leading-6! font-medium!` : `text-[18px]! leading-[26px]!`,
                    _e = D,
                    ve = Ee ? `ps-11` : k === `card` && h ? `text-xs! leading-[18px]!` : void 0,
                    be = Ee ? I : void 0,
                    xe = Ee && !De,
                    Se = De ? `flex flex-col gap-4` : `hidden`,
                    t[73] === d ? pe = t[74] : (pe = d && (0, $.jsx)(Dt, {}), t[73] = d, t[74] = pe),
                    W = m.map(e => {
                        let t = new Set(e.newReleaseEntries.flatMap(xt)),
                            i = e.hideEarlyAccessBadge ? null : (0, $.jsx)(`span`, {
                                className: `inline-flex h-[18px] shrink-0 items-center justify-center rounded-[6px] bg-[var(--green-a50)] px-[5px] text-xs font-medium text-[light-dark(var(--green-600),var(--green-400))]`,
                                children: (0, $.jsx)(M, {
                                    ...kt.enterpriseBetaFeatureBadge
                                })
                            }),
                            a = e.newReleaseEntries.map((n, i) => {
                                let a = n.rbac ? n.permissionName : n.settingName,
                                    o = n.rbac ? n.additionalPermissionNames ?? [] : [],
                                    c = e.adminPreviewFeature == null ? ae?.(n, t, e.newReleaseEntries[i + 1]) : void 0,
                                    u = c?.title ?? de(n),
                                    d = n.rbac && n.dependsOnPermissionName != null && !(E ?? s.permissions).includes(n.dependsOnPermissionName),
                                    m = n.rbac && j,
                                    h = Le({
                                        isReadOnly: m,
                                        disabledReason: n.disabledReason
                                    }),
                                    g = A || m || n.disabled || d || e.adminPreviewFeature === `admin_preview_library_sharing` && r.admin_preview_launch_settings?.admin_preview_library_sharing == null,
                                    _ = n.rbac && (n.dependsOnPermissionName != null || n.permissionNamesToRemoveWhenDisabled != null || n.enableConfirmation != null),
                                    v = n.rbac ? w?.(n, g, h, u) : null,
                                    y;
                                if (!n.rbac) y = C?.(n, g) ?? null;
                                else if (v != null) y = n.permissionName === ie.SitesAccess ? (0, $.jsx)(Ne, {
                                    children: v
                                }) : v;
                                else if (n.permissionName === ie.SitesAccess) y = P && p() ? (0, $.jsx)(Ne, {
                                    children: (0, $.jsx)(je, {
                                        ariaLabel: u,
                                        role: s,
                                        handleSaveRole: J,
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
                                        handleSaveRole: J,
                                        disabled: g,
                                        disabledReason: h,
                                        renderDisabledToggleAsOff: n.renderDisabledToggleAsOff
                                    })
                                });
                                else if (!_) y = (0, $.jsx)(Ae, {
                                    ariaLabel: u,
                                    role: s,
                                    permissionName: n.permissionName,
                                    handleSaveRole: J,
                                    disabled: g,
                                    disabledReason: h,
                                    renderDisabledToggleAsOff: n.renderDisabledToggleAsOff
                                });
                                else {
                                    let e = [n.permissionName, ...o],
                                        t = (0, $.jsx)(ne, {
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
                                    y = g && h ? (0, $.jsx)(f, {
                                        label: F.formatMessage(h),
                                        children: t
                                    }) : t
                                }
                                return y == null ? null : (0, $.jsx)(`div`, {
                                    className: ee(`flex justify-between gap-4 py-3`, k === `section` && e.adminPreviewFeature != null && `px-4`, c?.className),
                                    children: (0, $.jsxs)(`div`, {
                                        className: `flex w-full items-center justify-between gap-4`,
                                        children: [(0, $.jsxs)(`div`, {
                                            children: [(0, $.jsxs)(`div`, {
                                                className: `text-md flex items-center gap-2`,
                                                children: [c?.label ?? (S ? (0, $.jsx)(`span`, {
                                                    children: S(u)
                                                }) : F.formatMessage({
                                                    id: `workspaceSettings.templateTitle.enterpriseReleaseTitle`,
                                                    defaultMessage: `{name}`
                                                }, {
                                                    name: u
                                                })), e.adminPreviewFeature != null && (0, $.jsx)(z, {
                                                    contentLayout: `multi-line`,
                                                    content: typeof e.description == `string` ? e.description : F.formatMessage(e.description),
                                                    side: `top-center`,
                                                    children: e => (0, $.jsx)(`button`, {
                                                        ...e,
                                                        type: `button`,
                                                        "aria-label": F.formatMessage(kt.featureInfo, {
                                                            feature: u
                                                        }),
                                                        className: `interactive-button interactive-label-tertiary inline-flex items-center rounded-sm`,
                                                        children: (0, $.jsx)(te, {
                                                            className: `icon-sm`,
                                                            "aria-hidden": `true`
                                                        })
                                                    })
                                                })]
                                            }), (0, $.jsx)(Tt, {
                                                entry: n
                                            }), n.rbac && n.permissionName === ie.LibrarySharingManagementAccess && (0, $.jsx)(qe, {
                                                controlMode: r.library_sharing_control_mode,
                                                enabled: r.beta_settings.library_sharing_enabled ?? !1
                                            }), e.adminPreviewFeature != null && n.rbac && (0, $.jsxs)(`button`, {
                                                type: `button`,
                                                className: `interactive-button text-token-interactive-label-accent-accessible relative mt-1 text-xs`,
                                                "aria-busy": se === e.adminPreviewFeature,
                                                disabled: A || j || n.disabled || O == null,
                                                onClick: () => O?.(e, n),
                                                children: [(0, $.jsx)(M, {
                                                    ...r.admin_preview_launch_settings?.[e.adminPreviewFeature] == null ? kt.setAccess : kt.editAccess
                                                }), se === e.adminPreviewFeature && (0, $.jsx)(`span`, {
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
                                                    children: y
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
                                children: (0, $.jsx)(M, {
                                    ...kt.enterpriseBetaFeatureSectionHipaaDescription
                                })
                            }), a]
                        }, e.adminPreviewFeature);
                        let o = e.description;
                        typeof o != `string` && (o = F.formatMessage(o));
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
                                        }) : F.formatMessage({
                                            id: `workspaceSettings.templateTitle.enterpriseReleaseTitle`,
                                            defaultMessage: `{name}`
                                        }, {
                                            name: e.name
                                        }), i, d && (0, $.jsx)(f, {
                                            interactive: !0,
                                            label: (0, $.jsx)(M, {
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
                                                "aria-label": F.formatMessage(d.ariaLabel),
                                                className: `text-token-text-tertiary hover:text-token-text-secondary focus-visible:outline-token-border-heavy inline-flex size-4 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2`,
                                                children: (0, $.jsx)(te, {
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
                                                name: S?.(o) ?? o,
                                                learnMore: t => (0, $.jsx)(`a`, {
                                                    href: e.helpCenterLink,
                                                    target: e.helpLinkOpenNewTab === !1 ? void 0 : `_blank`,
                                                    className: wt,
                                                    rel: e.helpLinkOpenNewTab === !1 ? void 0 : `noopener noreferrer`,
                                                    children: e.helpLinkLabel ? F.formatMessage(e.helpLinkLabel) : t
                                                })
                                            }
                                        }) : S?.(o) ?? o
                                    })]
                                }), y && h && e.newReleaseEntries.length > 0 && (0, $.jsx)(`p`, {
                                    className: `text-token-text-status-warning text-sm`,
                                    children: (0, $.jsx)(M, {
                                        ...kt.enterpriseBetaFeatureSectionHipaaDescription
                                    })
                                }), (0, $.jsx)(`div`, {
                                    role: k === `section` ? `group` : void 0,
                                    "aria-label": k === `section` ? e.name : void 0,
                                    className: ee(`flex flex-col`, k !== `section` && `divide-y divide-token-border-default border-y border-token-border-default`),
                                    children: a
                                })]
                            }), !(e.shouldHideOptOutButton ?? !1) && c && e.newReleaseOptOutFlag && (e.newReleaseOptOutFlag === _.LIBRARY_SHARING_GA_OPT_OUT ? (0, $.jsx)(Je, {
                                betaSettingsDict: r.beta_settings_dict,
                                workspaceId: n,
                                feature: e.newReleaseOptOutFlag,
                                featureName: e.optOutFeatureName ?? e.name,
                                storedValue: r.beta_settings[e.newReleaseOptOutFlag],
                                isRbacEnabled: u,
                                disabled: A,
                                onChange: oe
                            }) : (0, $.jsx)(ze, {
                                workspaceId: n,
                                feature: e.newReleaseOptOutFlag,
                                featureName: e.optOutFeatureName ?? e.name,
                                storedValue: r.beta_settings[e.newReleaseOptOutFlag],
                                isRbacEnabled: u,
                                disabled: A,
                                onChange: oe
                            }))]
                        }, e.name)
                    })
                }
                t[0] = R?.isHipaaCompliantWorkspace, t[1] = r, t[2] = A, t[3] = j, t[4] = E, t[5] = N, t[6] = ae, t[7] = a, t[8] = F, t[9] = u, t[10] = k, t[11] = se, t[12] = oe, t[13] = x, t[14] = O, t[15] = B?.enableConfirmation, t[16] = i, t[17] = S, t[18] = w, t[19] = C, t[20] = s, t[21] = ce, t[22] = I, t[23] = v, t[24] = c, t[25] = P, t[26] = n, t[27] = H, t[28] = de, t[29] = U, t[30] = fe, t[31] = pe, t[32] = W, t[33] = G, t[34] = me, t[35] = K, t[36] = q, t[37] = _e, t[38] = ve, t[39] = ye, t[40] = be, t[41] = xe, t[42] = Se
            } else H = t[27], de = t[28], U = t[29], fe = t[30], pe = t[31], W = t[32], G = t[33], me = t[34], K = t[35], q = t[36], _e = t[37], ve = t[38], ye = t[39], be = t[40], xe = t[41], Se = t[42];
            if (ye !== Symbol.for(`react.early_return_sentinel`)) return ye;
            let Ce;
            t[75] !== pe || t[76] !== W || t[77] !== be || t[78] !== xe || t[79] !== Se ? (Ce = (0, $.jsxs)(`div`, {
                id: be,
                hidden: xe,
                className: Se,
                children: [pe, W]
            }), t[75] = pe, t[76] = W, t[77] = be, t[78] = xe, t[79] = Se, t[80] = Ce) : Ce = t[80];
            let J;
            t[81] !== de || t[82] !== U || t[83] !== B || t[84] !== fe ? (J = B && U && (0, $.jsx)(o, {
                isOpen: !0,
                onClose: () => V(null),
                title: de(B),
                testId: `modal-enterprise-permission-enable-confirmation`,
                primaryButton: (0, $.jsx)(D.Button, {
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
                secondaryButton: (0, $.jsx)(D.Button, {
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
            }), t[81] = de, t[82] = U, t[83] = B, t[84] = fe, t[85] = J) : J = t[85];
            let Te;
            return t[86] !== H || t[87] !== G || t[88] !== me || t[89] !== K || t[90] !== q || t[91] !== _e || t[92] !== ve || t[93] !== Ce || t[94] !== J ? (Te = (0, $.jsxs)(H, {
                className: G,
                title: me,
                titleContent: K,
                titleClassName: q,
                description: _e,
                descriptionClassName: ve,
                children: [Ce, J]
            }), t[86] = H, t[87] = G, t[88] = me, t[89] = K, t[90] = q, t[91] = _e, t[92] = ve, t[93] = Ce, t[94] = J, t[95] = Te) : Te = t[95], Te
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
    Re as _, At as a, Xe as c, ot as d, qe as f, Le as g, We as h, Et as i, rt as l, ze as m, It as n, gt as o, Ye as p, Ot as r, _t as s, Pt as t, dt as u
};
//# sourceMappingURL=222991e8-ggs6fgzox1508de3.js.map
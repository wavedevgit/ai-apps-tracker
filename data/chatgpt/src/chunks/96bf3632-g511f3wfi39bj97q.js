import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $G as n,
    $st as r,
    Az as i,
    Drt as a,
    Fat as o,
    Hn as s,
    J5 as c,
    JT as l,
    Knt as u,
    L1 as d,
    Lnt as f,
    P7 as p,
    Pnt as m,
    QD as h,
    R7 as g,
    RU as _,
    Un as v,
    X1 as y,
    XD as b,
    Xnt as x,
    Xy as ee,
    Y5 as S,
    Znt as C,
    Zy as w,
    _nt as T,
    cW as E,
    d6 as te,
    drt as ne,
    j1 as re,
    jz as ie,
    kat as ae,
    lW as D,
    lrt as O,
    nK as oe,
    p6 as se,
    qT as k,
    qnt as ce,
    rO as A,
    tct as le,
    urt as ue,
    ynt as de,
    zU as j
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    At as fe,
    Bn as M,
    Ln as pe,
    N as me,
    Nn as N,
    Q as P,
    Rn as he,
    Vn as ge,
    Zt as F,
    p as _e,
    rn as ve,
    s as ye,
    wn as be,
    zn as xe
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    C6t as Se,
    E6t as Ce,
    J6t as we,
    N6t as Te,
    Ust as Ee,
    Wst as De,
    X0t as Oe,
    X6t as ke,
    Y0t as Ae,
    Z0t as je,
    _6t as Me,
    a8t as Ne,
    aDn as Pe,
    ag as Fe,
    eg as I,
    frn as Ie,
    iDn as Le,
    ig as Re,
    lGn as L,
    ng as ze,
    prn as Be,
    urn as Ve
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Gh as He,
    Hm as Ue,
    Kh as We,
    Um as Ge,
    vv as Ke,
    yv as qe
} from "./30901919-7dzdc1ou0jtwkwpt.js";
import {
    $c as Je,
    $s as Ye,
    Am as Xe,
    Cc as Ze,
    Cd as Qe,
    Ec as $e,
    Ev as et,
    Fc as tt,
    Mc as nt,
    Nc as rt,
    Qs as it,
    Sd as R,
    Tc as at,
    Tv as z,
    bc as ot,
    bf as st,
    cc as ct,
    dc as lt,
    fc as ut,
    jc as dt,
    km as ft,
    lc as pt,
    mc as mt,
    mf as ht,
    pc as gt,
    qc as _t,
    uc as vt,
    wc as yt,
    xc as bt
} from "./c2675c8c-9bs3zsr3vq259es7.js";
import {
    f_ as B,
    p_ as xt
} from "./8b34dbc2-k1zgxrtsww83602u.js";
import {
    r as St,
    t as Ct
} from "./53a75fa3-cc2462tcudco37mp.js";
import {
    n as wt,
    t as Tt
} from "./0453f9ca-r1abifo8xfwxxsuy.js";
import {
    n as Et,
    t as Dt
} from "./dc59de7a-mgz1gzd9k6ej7nk9.js";
import {
    i as V,
    r as H,
    t as Ot
} from "./cedb005c-ovi68mtj4o6qb8so.js";
import {
    i as U,
    r as kt,
    t as At
} from "./730b64e6-ioj7rj6o4592q8x7.js";
import {
    n as jt,
    t as Mt
} from "./37b207d4-dfe5crlmchngnww6.js";
import {
    c as Nt,
    o as Pt,
    r as Ft,
    s as It,
    t as Lt
} from "./1212b029-gjj0kczde80zuowk.js";

function Rt({
    context: e,
    emit: t
}) {
    let n = e,
        r = !1,
        i = !1,
        a = 0,
        o = !1,
        s = !1,
        c = () => {
            r && !i && a === 0 && !o && !s && n.isPaidBusiness && n.canInvite && ((n.availableDefaultSeatCount ?? 0) > 0 || (n.availableProliteSeatCount ?? 0) > 0) && (i = !0, t(n))
        };
    return {
        updateContext(e) {
            r || (n = e)
        },
        startAction() {
            a += 1;
            let e = !1;
            return (t = !0) => {
                e || (e = !0, --a, s ||= !t, c())
            }
        },
        recordResult(e, t) {
            o ||= e > 0, s ||= !t, c()
        },
        exit() {
            r = !0, c()
        }
    }
}
var zt = e((() => {}));

function W({
    affectedTargetCount: e,
    successfulTargetCount: t,
    alreadyMemberCount: n = 0
}) {
    let r = {
        failedTargetCount: Math.max(0, e - t - n),
        successfulTargetCount: t
    };
    return t + n > 0 ? {
        ...r,
        step: `action_succeeded`
    } : {
        ...r,
        actionFailureType: `mutation_failed`,
        step: `action_failed`
    }
}

function Bt(e) {
    let t = 0,
        n = 0;
    return e.forEach(({
        seatType: e
    }) => {
        if (e !== `usage_based`) {
            t += 1;
            return
        }
        n += 1
    }), {
        numSubmittedInvites: e.length,
        defaultSeatInvites: t,
        usageBasedSeatInvites: n
    }
}

function Vt(e) {
    T.logStructuredEvent(`ChatgptWorkspaceInviteFlowDroppedOff`, {
        dropoffType: e
    })
}

function Ht(e) {
    let t = {
        default: 0,
        prolite: 0,
        usage_based: 0
    };
    for (let {
            seatType: n
        }
        of e) t[n] += 1;
    return t
}

function Ut(e) {
    return e.isOwnerOfAccount() ? `workspace_owner` : e.isAdminOfAccount() ? `workspace_admin` : e.data.role === r.ANALYTICS_VIEWER ? `workspace_analytics_viewer` : `workspace_member`
}

function Wt(e, t) {
    let n = e => t == null ? void 0 : ct(t, e) ?? void 0;
    return {
        isPaidBusiness: e.isSelfServeBusiness() && e.hasPaidSubscription() && e.data.subscriptionStatus.trial?.isTrialing !== !0,
        canInvite: e.canInviteMembers(),
        availableDefaultSeatCount: n(`default`),
        availableProliteSeatCount: n(`prolite`)
    }
}

function Gt(e) {
    let t = {
        workspace_owner: `CHATGPT_WORKSPACE_INVITE_FLOW_ACTOR_ROLE_WORKSPACE_OWNER`,
        workspace_admin: `CHATGPT_WORKSPACE_INVITE_FLOW_ACTOR_ROLE_WORKSPACE_ADMIN`,
        workspace_member: `CHATGPT_WORKSPACE_INVITE_FLOW_ACTOR_ROLE_WORKSPACE_MEMBER`,
        workspace_analytics_viewer: `CHATGPT_WORKSPACE_INVITE_FLOW_ACTOR_ROLE_WORKSPACE_ANALYTICS_VIEWER`
    };
    return Rt({
        context: Wt(e),
        emit(n) {
            re()?.id !== e.id || u().getContext().user.customIDs?.workspace_id !== e.id || T.logStructuredEvent(`ChatgptWorkspaceInviteAbandonedWithPaidSeat`, {
                actorRole: t[Ut(e)],
                availableDefaultSeatCount: f(n.availableDefaultSeatCount),
                availableProliteSeatCount: f(n.availableProliteSeatCount)
            })
        }
    })
}
var Kt = e((() => {
    le(), mt(), d(), x(), m(), zt(), de()
}));

function qt(e) {
    return e.trim().toLowerCase()
}

function Jt(e, t) {
    if (t == null) return e;
    let n = new Set,
        r = [];
    for (let i of e) {
        if (r.length >= t) break;
        let e = qt(i.email);
        n.has(e) || (n.add(e), r.push(i))
    }
    return r
}

function Yt(e) {
    let t = new Set;
    return e.filter(({
        value: e
    }) => {
        let n = qt(e);
        return t.has(n) ? !1 : (t.add(n), !0)
    })
}

function Xt(e) {
    let t = e.trim();
    if (!v.test(t)) return null;
    let [, n = ``] = t.split(`@`);
    return n.toLowerCase() || null
}

function Zt({
    email: e,
    index: t,
    emailInputList: n,
    inviteDomain: r,
    shouldCheckDomainMismatch: i
}) {
    let a = e.trim(),
        o = a.length > 0 && !v.test(a),
        s = r?.toLowerCase() ?? null,
        c = Xt(a),
        l = a.length > 0 && !o && i && s != null && c != null && c !== s,
        u = qt(a);
    return {
        hasMismatchedDomain: l,
        isDuplicate: u.length > 0 && !o && !l && n.some((e, n) => n < t && qt(e) === u),
        isInvalid: o
    }
}
var Qt = e((() => {
    s()
}));

function $t({
    subscription: e,
    workspaceSeatTypeCounts: t,
    paidStandardSeatCapacity: n,
    paidPremiumSeatCapacity: r
}) {
    return {
        availableStandardSeats: Math.max(0, e == null ? 0 : ct(e, `default`) ?? n - (t?.seat_type_counts?.default ?? 0)),
        availablePremiumSeats: Math.max(0, e == null ? 0 : ct(e, `prolite`) ?? r - (t?.seat_type_counts?.prolite ?? 0))
    }
}

function en({
    defaultInviteSeatTypeOverride: e,
    workspaceDefaultSeatType: t,
    isUsageBasedSeatEnabled: n,
    isPremiumSeatEnabled: r = !1,
    availablePaidSeatCounts: i
}) {
    let a = !n && !r && i == null ? Lt : It(e ?? t, {
        includeUsageBased: n,
        includeProlite: r,
        preserveProlite: i != null
    });
    if (i == null) return a;
    let o = a === `prolite` ? `prolite` : `default`,
        s = o === "default" ? `prolite` : `default`;
    return i[o] > 0 || i[s] <= 0 ? o : s
}

function tn({
    rows: e,
    defaultInviteSeatType: t,
    availablePaidSeatCounts: n
}) {
    if (n == null) return [...e];
    let r = t === `prolite` ? `prolite` : `default`,
        i = [r, r === "default" ? `prolite` : `default`],
        a = {
            default: 0,
            prolite: 0
        };
    return e.map(e => {
        let t = e.seatType === "default" || e.seatType === `prolite` ? e.seatType : null,
            r = t != null && a[t] < n[t] ? t : i.find(e => a[e] < n[e]);
        return r == null ? e : (a[r] += 1, e.seatType === r ? e : {
            ...e,
            seatType: r
        })
    })
}

function nn({
    rows: e,
    currentSeatType: t,
    availablePaidSeatCounts: n
}) {
    if (n == null) return [];
    let r = e.reduce((e, t) => ((t.seatType === "default" || t.seatType === `prolite`) && (e[t.seatType] += 1), e), {
        default: 0,
        prolite: 0
    });
    return [`default`, `prolite`].filter(e => r[e] - +(e === t) >= n[e])
}

function rn({
    paidInviteEmails: e,
    availableSeats: t,
    existingActivePaidMemberEmails: n,
    existingPendingPaidInviteEmails: r
}) {
    let i = new Set([...n, ...r].map(e => e.trim().toLowerCase())),
        a = e.filter(e => !i.has(e)).length;
    return a === 0 ? 0 : Math.max(0, a - t)
}

function an({
    rows: e,
    showSeatTypeColumn: t,
    includeUsageBasedSeatType: n,
    includePremiumSeatType: r,
    defaultInviteSeatType: i,
    seatTypeToCount: a,
    maxInvites: o
}) {
    let s = new Set;
    return e.slice(0, o ?? 1 / 0).forEach(e => {
        let o = e.email.trim().toLowerCase();
        (t ? It(e.seatType, {
            includeUsageBased: n,
            includeProlite: r
        }) : i) !== a || o.length === 0 || s.add(o)
    }), [...s]
}

function on({
    rows: e,
    showSeatTypeColumn: t,
    includeUsageBasedSeatType: n,
    includePremiumSeatType: r,
    defaultInviteSeatType: i,
    maxInvites: a,
    subscription: o,
    workspaceSeatTypeCounts: s,
    hasPremiumSeats: c,
    hasActiveBusinessFreeTrial: l,
    isImmediateInvoiceRolloutEnabled: u,
    isBusinessPremiumSeatPurchaseReviewEnabled: d,
    existingActiveStandardMemberEmails: f,
    existingPendingStandardInviteEmails: p,
    existingActivePremiumMemberEmails: m,
    existingPendingPremiumInviteEmails: h
}) {
    let g = o != null && d ? lt(o, `default`, c ? 0 : o.seats_entitled) : o?.seats_entitled ?? 0,
        _ = o != null && d ? lt(o, `prolite`) : 0,
        v = !l && o != null && s != null,
        {
            availableStandardSeats: y,
            availablePremiumSeats: b
        } = $t({
            subscription: o,
            workspaceSeatTypeCounts: s,
            paidStandardSeatCapacity: g,
            paidPremiumSeatCapacity: _
        }),
        x = u && v ? rn({
            paidInviteEmails: an({
                rows: e,
                showSeatTypeColumn: t,
                includeUsageBasedSeatType: n,
                includePremiumSeatType: r,
                defaultInviteSeatType: i,
                seatTypeToCount: `default`,
                maxInvites: a
            }),
            availableSeats: y,
            existingActivePaidMemberEmails: f,
            existingPendingPaidInviteEmails: p
        }) : 0,
        ee = u && d && v ? rn({
            paidInviteEmails: an({
                rows: e,
                showSeatTypeColumn: t,
                includeUsageBasedSeatType: n,
                includePremiumSeatType: r,
                defaultInviteSeatType: i,
                seatTypeToCount: `prolite`,
                maxInvites: a
            }),
            availableSeats: b,
            existingActivePaidMemberEmails: m,
            existingPendingPaidInviteEmails: h
        }) : 0;
    return {
        paidStandardSeatCapacity: g,
        paidPremiumSeatCapacity: _,
        standardSeatCapacityShortfall: x,
        premiumSeatCapacityShortfall: ee,
        totalSeatCapacityShortfall: x + ee
    }
}

function sn({
    subscription: e,
    capacityShortfallSeatCounts: t
}) {
    if (e == null) return null;
    let n = ut(e),
        r = n.removals.standard,
        i = n.removals.premium,
        a = Math.min(r, t.standard),
        o = Math.min(i, t.premium),
        s = t.premium - o,
        c = n.downgrades.reduce((e, t) => t.fromSeatType === `premium` && t.toSeatType === `standard` ? e + t.quantity : e, 0),
        l = Math.min(c, s);
    return a + o === 0 && l === 0 ? null : {
        scheduledDowngradeCount: l,
        scheduledRemovalSeatCounts: {
            standard: a,
            premium: o
        }
    }
}
var cn = e((() => {
    mt(), Pt()
}));

function ln({
    rows: e,
    defaultInviteRole: t,
    defaultInviteSeatType: n,
    includePremiumSeatType: r,
    includeUsageBasedSeatType: i,
    maxInvites: a,
    showRoleColumn: o,
    showSeatTypeColumn: s,
    availablePaidSeatCounts: c
}) {
    return e.map(e => ({
        email: e.email.trim(),
        role: o ? e.role : t,
        seatType: s || c != null ? It(e.seatType, {
            includeUsageBased: i,
            includeProlite: r,
            preserveProlite: c != null
        }) : n
    })).filter(e => e.email.length > 0).slice(0, a ?? 1 / 0)
}

function un({
    rows: e,
    workspace: t
}) {
    let n = Ht(e);
    return Ot({
        action: `send_invitations`,
        actorRole: t.isOwnerOfAccount() ? `workspace_owner` : `workspace_admin`,
        surface: `admin_invite_modal`,
        affectedTargetCount: e.length,
        targetScope: e.length === 1 ? `individual` : `bulk`,
        requestedSeatCounts: n
    })
}

function dn(e, t) {
    return t == null ? e : e.slice(0, t)
}

function fn(e) {
    return e.trim().toLowerCase()
}

function pn(e, t, {
    availablePaidSeatCounts: n,
    defaultRole: r,
    defaultSeatType: i
}) {
    let a = new Map(t.map(e => [fn(e.email), e]));
    return tn({
        rows: e.map(e => {
            let t = a.get(fn(e.value));
            return kn({
                email: e.value,
                role: t?.role ?? r,
                seatType: t?.seatType ?? i
            })
        }),
        defaultInviteSeatType: i,
        availablePaidSeatCounts: n
    })
}

function mn(e) {
    return e.filter(e => e.email.trim().length > 0).length
}

function hn(e) {
    return e.email.trim().length > 0
}

function gn(e) {
    let t = new Set,
        n = [];
    return e.forEach(e => {
        if (!hn(e)) return;
        let r = e.email.trim().toLowerCase();
        !r || t.has(r) || (t.add(r), n.push(r))
    }), n
}

function _n({
    rows: e,
    seatsInUse: t,
    seatsEntitled: n,
    existingActiveMemberEmails: r = Z,
    existingPendingInviteEmails: i,
    hasActiveBusinessFreeTrial: a
}) {
    if (!a || t == null || n == null || n > X) return {
        isOverFreeTrialInviteLimit: !1,
        projectedTrialSeats: Math.max(0, t ?? 0)
    };
    let o = new Set(i.map(e => e.trim().toLowerCase())),
        s = new Set(r.map(e => e.trim().toLowerCase())),
        c = gn(e).filter(e => !o.has(e) && !s.has(e)).length,
        l = Math.max(0, t) + Math.max(0, i.length) + c;
    return {
        isOverFreeTrialInviteLimit: l > X,
        projectedTrialSeats: l
    }
}

function vn(e) {
    let t = e.isOwnerOfAccount();
    return {
        showRoleColumn: !e.isFreeWorkspace() && t,
        showSeatTypeColumn: t && (jt(e.data) || Xe(e.id))
    }
}

function yn(e) {
    "use forget";
    let t = (0, En.c)(2),
        n;
    return t[0] === e ? n = t[1] : (n = (0, Y.jsx)(bn, {
        ...e
    }, e.workspace.id), t[0] = e, t[1] = n), n
}

function bn({
    workspace: e,
    onCancel: t,
    cancelButtonText: n,
    onSuccess: r,
    fullWidthButtons: a = !1,
    showCancelButton: o = !0,
    csvButtonAlignedWithPrimary: s = !1,
    contentClassName: l,
    initialEmails: u,
    defaultInviteSeatType: d,
    showRoleColumn: f,
    showSeatTypeColumn: p,
    inviteLayout: m = `table`,
    initialEmptyRowCount: h = 1,
    maxInvites: g = null,
    availablePaidSeatCounts: _,
    emptyStatePrimaryButtonText: v,
    onEmptySubmit: y,
    enableImmediateInvoiceSeatPurchase: b = !1,
    onImmediateInvoiceStepChange: x,
    onImmediateInvoiceUpdatingChange: ee
}) {
    "use no forget";
    let [S] = (0, J.useState)(() => Gt(e)), C = (0, J.useRef)(!1);
    (0, J.useEffect)(() => {
        C.current = !0;
        let e = e => {
            e.persisted || S.exit()
        };
        return window.addEventListener(`pagehide`, e), () => {
            C.current = !1, window.removeEventListener(`pagehide`, e), queueMicrotask(() => {
                C.current || S.exit()
            })
        }
    }, [S]);
    let w = An(u),
        {
            showRoleColumn: T,
            showSeatTypeColumn: E
        } = vn(e),
        te = f ?? T,
        ne = p ?? E,
        re = jt(e.data),
        ie = Xe(e.id),
        {
            data: ae,
            isLoading: D
        } = oe(e.id),
        O = e.isK12(),
        se = Fe(e.id, O),
        ce = en({
            defaultInviteSeatTypeOverride: d,
            workspaceDefaultSeatType: ae?.default_seat_type,
            isUsageBasedSeatEnabled: re,
            isPremiumSeatEnabled: ie,
            availablePaidSeatCounts: _
        }),
        A = O ? se : void 0,
        le = e.isFreeWorkspace() || O && !!se,
        ue = (0, J.useCallback)(() => {
            Vt(Le.CHATGPT_WORKSPACE_INVITE_FLOW_DROPOFF_TYPE_CANCEL), t()
        }, [t]);
    return D ? (0, Y.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [(0, Y.jsx)(`div`, {
            className: c(`flex min-h-48 items-center justify-center`, l),
            children: (0, Y.jsx)(i, {
                className: `icon-lg text-token-text-tertiary`
            })
        }), o ? (0, Y.jsx)(`div`, {
            className: c(`flex w-full flex-shrink-0 flex-col gap-2`, s ? `mt-0` : `mt-8`),
            children: (0, Y.jsx)(k, {
                color: `ghost`,
                size: a ? `large` : `medium`,
                onClick: ue,
                children: n
            })
        }) : null]
    }) : (0, Y.jsx)(xn, {
        inviteFlowAnalytics: S,
        onCancel: ue,
        cancelButtonText: n,
        fullWidthButtons: a,
        showCancelButton: o,
        csvButtonAlignedWithPrimary: s,
        contentClassName: l,
        workspace: e,
        onSuccess: r,
        initialEmails: w,
        k12InviteDomain: se,
        maxInvites: g,
        availablePaidSeatCounts: _,
        showRoleColumn: te,
        showSeatTypeColumn: ne,
        includeUsageBasedSeatType: re && _ == null,
        includePremiumSeatType: ie,
        defaultInviteSeatType: ce,
        shouldCheckDomainMismatch: le,
        allowedDomain: A,
        inviteLayout: m,
        initialEmptyRowCount: h,
        emptyStatePrimaryButtonText: v,
        onEmptySubmit: y,
        enableImmediateInvoiceSeatPurchase: b,
        onImmediateInvoiceStepChange: x,
        onImmediateInvoiceUpdatingChange: ee
    })
}

function xn({
    inviteFlowAnalytics: e,
    onCancel: t,
    cancelButtonText: n,
    fullWidthButtons: r,
    showCancelButton: i,
    csvButtonAlignedWithPrimary: o,
    contentClassName: s,
    workspace: l,
    onSuccess: u,
    initialEmails: d,
    k12InviteDomain: f,
    maxInvites: p,
    availablePaidSeatCounts: m,
    showRoleColumn: h,
    showSeatTypeColumn: g,
    includeUsageBasedSeatType: y,
    includePremiumSeatType: b,
    defaultInviteSeatType: x,
    shouldCheckDomainMismatch: S,
    allowedDomain: C,
    inviteLayout: w,
    initialEmptyRowCount: T,
    emptyStatePrimaryButtonText: E,
    onEmptySubmit: te,
    enableImmediateInvoiceSeatPurchase: ie,
    onImmediateInvoiceStepChange: ae,
    onImmediateInvoiceUpdatingChange: O
}) {
    "use no forget";
    let {
        search: oe
    } = fe(), ce = jn({
        workspace: l,
        inviteFlowAnalytics: e,
        onSuccess: u,
        k12InviteDomain: f,
        initialEmails: d,
        maxInvites: p,
        availablePaidSeatCounts: m,
        showRoleColumn: h,
        showSeatTypeColumn: g,
        includeUsageBasedSeatType: y,
        includePremiumSeatType: b,
        defaultInviteSeatType: x
    }), A = xe(), le = _(), [de, j] = (0, J.useState)(!1), [M, pe] = (0, J.useState)(null), P = (0, J.useRef)(null), he = (0, J.useCallback)((e = !0) => {
        P.current?.(e), P.current = null
    }, []);
    (0, J.useEffect)(() => () => {
        he(!1)
    }, [he]);
    let {
        clearState: ge,
        emailTableRows: F,
        emailTextAreaValue: _e,
        emailsOutsideOfDomain: ve,
        fileInputRef: ye,
        handleClickImportCSV: be,
        handleDeleteRow: Ce,
        handleInputChange: Ee,
        handleSubmit: De,
        handleUploadCSV: Oe,
        hasUploadedCsv: ke,
        isInviting: Ae,
        setEmailTableRows: je,
        setEmailTextAreaValue: Me,
        trackNavigationClick: Pe,
        defaultInviteRole: Fe,
        INVITE_ROLES: I
    } = ce, Le = me(), Re = mn(F), L = ie && l.isOwnerOfAccount() && l.isSelfServeBusiness() && l.hasPaidSubscription() && l.data.subscriptionStatus.trial?.isTrialing !== !0 && nt(l.id), ze = L && Xe(l.id), {
        billingPageConfigsQuery: Ve,
        planManagementConfig: He,
        isError: Ue,
        isLoading: Ke
    } = Ne({
        activeWorkspaceId: l.id,
        enabled: L
    }), Ze = we(He)?.can_change_paid_seat_quantity === !0, et = Ve.data?.invite_prepurchase, tt = et?.workspace_id === l.id && et.skip_invite_prepurchase, it = L && !tt && Ze, {
        data: R,
        isLoading: at
    } = Te(), st = Ye(R), {
        country: ct
    } = Be(), {
        billingDetails: ut,
        status: dt
    } = Ie({
        country: ct,
        currentAccount: l,
        enabled: it,
        location: `AdminInviteFlow.immediateInvoice`,
        pricingPlanIsTypeBusiness: !0
    }), ft = st == null ? ct : st.countryCode, mt = st?.billingCurrency ?? ut?.currency, _t = se({
        countryCode: ft,
        currency: mt,
        enabled: L && Ze && ut != null
    }), {
        data: xt,
        isError: St,
        isLoading: Ct
    } = _t, wt = st == null || xt == null ? null : rt(xt, st);
    (0, J.useEffect)(() => {
        wt != null && ue.count(ne.TEAMS, `business_manage_seats_checkout_pricing_identity_match`, {
            entry_point: `admin_invite`,
            matches_subscription_pricing_identity: String(wt)
        })
    }, [wt]);
    let Et = xt,
        Dt = [`checkout-pricing-config`, ft ?? null, mt ?? null],
        {
            data: H,
            isLoading: Ot
        } = yt(l.isSelfServeBusiness() ? l.id : void 0),
        U = bt(H),
        jt = H != null && ot(H) >= U,
        Mt = R != null && (lt(R, `prolite`) > 0 || (H?.seat_type_counts?.prolite ?? 0) > 0),
        {
            data: Pt,
            isLoading: Rt
        } = Je(l.id, 0, ``),
        {
            data: zt
        } = Qe(l.isSelfServeBusiness() ? At : ``),
        W = L && (!Mt || ze) ? pt({
            accountId: l.id,
            checkoutPricingConfig: Et,
            isSciAccount: !1,
            isSeatTypeCountsLoading: Ot,
            seatTypeCounts: H,
            showPremiumSeats: ze,
            subscription: R
        }) : null,
        Bt = L && (Ct || St || W == null),
        Vt = l.isSelfServeBusiness() && kt(zt),
        {
            data: Ht,
            isLoading: Ut
        } = Se(Vt || L ? l.id : void 0, 0, ``, 100),
        Gt = (Pt?.items ?? []).map(e => e.email_address).filter(e => !!e),
        Kt = (Ht?.items ?? []).map(e => e.email).filter(e => !!e),
        qt = (Ht?.items ?? []).filter(e => It(e.seat_type, {
            includeProlite: !0
        }) === Lt).map(e => e.email).filter(e => !!e),
        Jt = (Pt?.items ?? []).filter(e => It(e.seat_type, {
            includeProlite: !0
        }) === Lt).map(e => e.email_address).filter(e => !!e),
        Xt = (Ht?.items ?? []).filter(e => It(e.seat_type, {
            includeProlite: !0
        }) === `prolite`).map(e => e.email).filter(e => !!e),
        Zt = (Pt?.items ?? []).filter(e => It(e.seat_type, {
            includeProlite: !0
        }) === `prolite`).map(e => e.email_address).filter(e => !!e),
        Qt = F.slice(0, p ?? 1 / 0).some(e => {
            let t = e.email.trim();
            return t.length > 0 && !v.test(t)
        }),
        {
            isOverFreeTrialInviteLimit: en
        } = _n({
            rows: F,
            seatsInUse: R?.seats_in_use,
            seatsEntitled: R?.seats_entitled,
            existingActiveMemberEmails: Kt,
            existingPendingInviteEmails: Gt,
            hasActiveBusinessFreeTrial: Vt
        }),
        {
            paidStandardSeatCapacity: rn,
            paidPremiumSeatCapacity: an,
            standardSeatCapacityShortfall: cn,
            premiumSeatCapacityShortfall: fn,
            totalSeatCapacityShortfall: hn
        } = on({
            rows: F,
            showSeatTypeColumn: g || m != null,
            includeUsageBasedSeatType: y,
            includePremiumSeatType: b || m != null,
            defaultInviteSeatType: x,
            maxInvites: p,
            subscription: R,
            workspaceSeatTypeCounts: H,
            hasPremiumSeats: Mt,
            hasActiveBusinessFreeTrial: Vt,
            isImmediateInvoiceRolloutEnabled: L,
            isBusinessPremiumSeatPurchaseReviewEnabled: ze,
            existingActiveStandardMemberEmails: qt,
            existingPendingStandardInviteEmails: Jt,
            existingActivePremiumMemberEmails: Xt,
            existingPendingPremiumInviteEmails: Zt
        }),
        {
            availableStandardSeats: gn,
            availablePremiumSeats: vn
        } = $t({
            subscription: R,
            workspaceSeatTypeCounts: H,
            paidStandardSeatCapacity: rn,
            paidPremiumSeatCapacity: an
        });
    (0, J.useEffect)(() => {
        re()?.id === l.id && e.updateContext(Wt(l, R))
    }, [e, R, l]);
    let yn = R == null ? null : gt(R, `default`, rn) + gt(R, `prolite`, an),
        bn = H != null && yn != null && yn >= U,
        xn = at || Ot || Ut || Rt || R == null || H == null || Ht == null || Pt == null,
        Cn = L && !tt && !Vt && (Ze || He == null && (Ke || Ue)),
        G = {
            standard: cn,
            premium: fn
        },
        wn = W == null ? null : {
            standard: rn,
            premium: an
        },
        Tn = W == null || R == null ? null : {
            standard: gt(R, `default`, rn),
            premium: gt(R, `prolite`, an)
        },
        K = Tn == null || R == null ? null : vt({
            capacityShortfallSeatCounts: G,
            initialRenewalSeatCounts: Tn,
            subscription: R
        }),
        q = sn({
            subscription: R,
            capacityShortfallSeatCounts: G
        }),
        En = q?.scheduledRemovalSeatCounts.standard ?? 0,
        Dn = q?.scheduledRemovalSeatCounts.premium ?? 0,
        On = q?.scheduledDowngradeCount ?? 0,
        X = En + Dn,
        Z = X + On,
        An = En === G.standard && Dn + On === G.premium,
        Nn = On === 0 || Tn != null && K != null && K.standard + On === Tn.standard + G.standard,
        Pn = Cn && hn > 0,
        Fn = Pn && (Ue || dt === `error` || St),
        In = K == null ? null : K.standard + K.premium,
        Ln = In != null && In >= U,
        Rn = In != null && In > U,
        zn = l.isAdminOfAccount() || l.isOwnerOfAccount(),
        Bn = Pn,
        Vn = Bn && Ln,
        Hn = q != null && An && Nn && !Rn && !Fn,
        Un = Bn ? (0, Y.jsxs)(`div`, {
            className: `border-token-border-status-warning bg-token-bg-status-warning text-token-text-status-warning flex w-full items-center gap-5 rounded-[20px] border px-6 py-4 shadow-[0_1px_6px_rgba(0,0,0,0.06)]`,
            children: [(0, Y.jsx)(D, {
                className: `size-6 shrink-0`
            }), (0, Y.jsxs)(`div`, {
                className: `flex min-w-0 flex-1 flex-col gap-0.5`,
                children: [(0, Y.jsx)(`div`, {
                    className: `text-sm leading-5 font-semibold`,
                    children: Hn ? X > 0 && q.scheduledDowngradeCount > 0 ? (0, Y.jsx)(N, {
                        ...Q.scheduledSeatChangesCanceledWarningTitle,
                        values: {
                            scheduledSeatChangeCount: Z
                        }
                    }) : X > 0 ? (0, Y.jsx)(N, {
                        ...Q.scheduledSeatRemovalCanceledWarningTitle,
                        values: {
                            scheduledRemovalCount: X
                        }
                    }) : (0, Y.jsx)(N, {
                        ...Q.scheduledSeatDowngradeCanceledWarningTitle,
                        values: {
                            scheduledDowngradeCount: q.scheduledDowngradeCount
                        }
                    }) : (0, Y.jsx)(N, {
                        ...Q.additionalPaidSeatsNeededWarningTitle,
                        values: {
                            count: hn
                        }
                    })
                }), (0, Y.jsxs)(`div`, {
                    className: `text-sm leading-5`,
                    children: [Rn ? (0, Y.jsx)(N, {
                        ...Q.additionalPaidSeatsExceedMaximumWarningBody,
                        values: {
                            maxSeats: U
                        }
                    }) : Fn ? (0, Y.jsx)(N, {
                        ...Q.additionalPaidSeatsBillingUnavailableWarningBody
                    }) : Hn ? X > 0 && q.scheduledDowngradeCount > 0 ? (0, Y.jsx)(N, {
                        ...Q.scheduledSeatChangesCanceledWarningBody,
                        values: {
                            scheduledDowngradeCount: q.scheduledDowngradeCount,
                            scheduledRemovalCount: X
                        }
                    }) : En > 0 && Dn > 0 ? (0, Y.jsx)(N, {
                        ...Q.scheduledMultiTierSeatRemovalCanceledWarningBody,
                        values: {
                            scheduledRemovalCount: X
                        }
                    }) : En > 0 ? (0, Y.jsx)(N, {
                        ...Q.scheduledStandardSeatRemovalCanceledWarningBody,
                        values: {
                            scheduledRemovalCount: X
                        }
                    }) : Dn > 0 ? (0, Y.jsx)(N, {
                        ...Q.scheduledPremiumSeatRemovalCanceledWarningBody,
                        values: {
                            scheduledRemovalCount: X
                        }
                    }) : (0, Y.jsx)(N, {
                        ...Q.scheduledSeatDowngradeCanceledWarningBody,
                        values: {
                            scheduledDowngradeCount: q.scheduledDowngradeCount
                        }
                    }) : (0, Y.jsx)(N, {
                        ...Re === 1 ? Q.additionalPaidSeatsNeededForSingleInviteWarningBody : Q.additionalPaidSeatsNeededWarningBody,
                        values: {
                            count: hn
                        }
                    }), Ln && (0, Y.jsx)(ht, {
                        className: `mt-1`,
                        maximumSeats: U,
                        seatCount: In ?? 0,
                        variant: `inline`
                    })]
                })]
            }), Fn && !Rn && (0, Y.jsx)(k, {
                color: `secondary`,
                loading: Ve.isFetching || _t.isFetching || Le.isFetching({
                    queryKey: Dt
                }) > 0,
                size: `small`,
                type: `button`,
                onClick: () => {
                    Ue && Ve.refetch(), dt === `error` && Le.invalidateQueries({
                        queryKey: Dt
                    }), St && _t.refetch()
                },
                children: (0, Y.jsx)(N, {
                    ...Q.retrySeatPurchaseBillingButton
                })
            })]
        }) : null,
        Wn = (jt || bn) && !Vn ? (0, Y.jsx)(ht, {
            maximumSeats: U,
            seatCount: Math.max(ot(H), yn ?? 0)
        }) : null,
        Gn = en ? (0, Y.jsxs)(`div`, {
            className: `border-token-border-light bg-token-main-surface-primary flex w-full items-center gap-5 rounded-[20px] border px-6 py-4 shadow-[0_1px_6px_rgba(0,0,0,0.06)]`,
            children: [(0, Y.jsx)(D, {
                className: `text-token-text-secondary size-6 shrink-0`
            }), (0, Y.jsxs)(`div`, {
                className: `flex min-w-0 flex-1 flex-col gap-0.5`,
                children: [(0, Y.jsx)(`div`, {
                    className: `text-token-text-primary text-sm leading-5 font-semibold`,
                    children: (0, Y.jsx)(N, {
                        ...Q.freeTrialInviteLimitWarningTitle
                    })
                }), (0, Y.jsx)(`div`, {
                    className: c(`text-token-text-secondary text-sm leading-5`, !zn && `max-w-[500px]`),
                    children: zn ? (0, Y.jsx)(N, {
                        ...Q.freeTrialInviteLimitWarning
                    }) : (0, Y.jsx)(N, {
                        ...Q.freeTrialInviteLimitWarningAskAdmin
                    })
                })]
            }), zn && (0, Y.jsx)(`a`, {
                href: a(`/admin/billing`, oe),
                className: `bg-token-text-primary text-token-main-surface-primary inline-flex h-9 shrink-0 items-center justify-center rounded-full px-4 text-sm font-semibold hover:opacity-90`,
                children: (0, Y.jsx)(N, {
                    ...Q.upgradeButton
                })
            })]
        }) : null,
        Kn = te != null && Re === 0,
        $ = w === `stacked`,
        qn = !h && !g ? `w-[calc(100%-3rem)]` : h === g ? `w-[56%]` : `w-[68%]`;
    (0, J.useEffect)(() => {
        de || F.length > 0 || je(tn({
            rows: Array.from({
                length: p == null ? T : Math.min(T, p)
            }, () => kn({
                role: Fe,
                seatType: x
            })),
            defaultInviteSeatType: x,
            availablePaidSeatCounts: m
        }))
    }, [m, Fe, x, F.length, T, de, p, je]);
    let Jn = (0, Y.jsx)(ee, {
            label: A.formatMessage(Q.importCSVTooltip),
            contentClassName: `w-[280px]`,
            side: `top`,
            delayDuration: 200,
            children: (0, Y.jsx)(k, {
                color: o ? `ghost` : `secondary`,
                className: c($ && `h-11 rounded-full border-0 bg-transparent! px-5 text-[14px] font-normal text-[#5D5D5D] shadow-none hover:bg-[#F7F7F7]! dark:bg-transparent! dark:text-white/70 dark:hover:bg-white/6!`),
                icon: Ge,
                iconClassName: c($ && `text-[#5D5D5D] dark:text-white/70`),
                onClick: be,
                children: (0, Y.jsx)(N, {
                    ...ke ? Q.reimportCSVButton : Q.importCSVButton
                })
            })
        }),
        Yn = e => {
            let t = p == null ? e.filter((e, t, n) => n.findIndex(t => t.value === e.value) === t) : Yt(e);
            p != null && t.length > p && le.warning(A.formatMessage(Q.inviteLimitWarning, {
                maxInvites: p
            }), {
                duration: 5,
                id: `admin_invite_limit`
            });
            let n = dn(t, p);
            Me(n), je(e => pn(n, e, {
                availablePaidSeatCounts: m,
                defaultRole: Fe,
                defaultSeatType: x
            }))
        },
        Xn = () => i ? (0, Y.jsx)(k, {
            color: `ghost`,
            size: r ? `large` : `medium`,
            onClick: () => {
                ge(), t(), Pe({
                    buttonType: `Skip`
                })
            },
            children: n
        }) : null,
        Zn = () => {
            if (!R || R.active_until == null || ut == null || Bt || W == null || wn == null || Tn == null || K == null) return;
            let e = un({
                    rows: ln({
                        availablePaidSeatCounts: m,
                        rows: F,
                        defaultInviteRole: Fe,
                        defaultInviteSeatType: x,
                        includePremiumSeatType: b,
                        includeUsageBasedSeatType: y,
                        maxInvites: p,
                        showRoleColumn: h,
                        showSeatTypeColumn: g
                    }),
                    workspace: l
                }),
                t = {
                    default: Math.max(0, K.standard - wn.standard),
                    prolite: Math.max(0, K.premium - wn.premium)
                };
            V(e, {
                step: `action_initiated`
            }), V(e, {
                step: `capacity_evaluated`,
                capacityResult: t.default+t.prolite > 0 ? `purchase_required` : `capacity_change_required`,
                availablePaidSeatCounts: {
                    default: gn,
                    prolite: vn
                },
                additionalPaidSeatCounts: t,
                billingInterval: W.billingPeriod
            }), pe({
                analyticsFlow: e,
                currentPaidSeatCounts: wn,
                initialRenewalSeatCounts: Tn,
                updatedSeatCounts: K
            }), ae?.(!0, !0)
        },
        Qn = e => (0, Y.jsx)(k, {
            className: c(e, r && !$ && `w-full`, $ && `mx-auto w-full max-w-[400px]`),
            color: `primary`,
            size: r ? `large` : `medium`,
            loading: Ae,
            disabled: Ae || !Kn && Re === 0 || ve.length > 0 || en || Cn && xn || Pn && (Ke || Ue || Qt || ut == null || R?.active_until == null || Rn || Bt),
            onClick: () => {
                if (Kn) {
                    te?.(), Pe({
                        buttonType: `Send`
                    });
                    return
                }
                if (!$e({
                        accountId: l.id,
                        currentAccount: l,
                        subscription: R,
                        wouldChangePaidCapacity: L && !tt && !xn && hn > 0
                    })) {
                    if (Pn) Zn();
                    else {
                        let e = un({
                            rows: ln({
                                availablePaidSeatCounts: m,
                                rows: F,
                                defaultInviteRole: Fe,
                                defaultInviteSeatType: x,
                                includePremiumSeatType: b,
                                includeUsageBasedSeatType: y,
                                maxInvites: p,
                                showRoleColumn: h,
                                showSeatTypeColumn: g
                            }),
                            workspace: l
                        });
                        V(e, {
                            step: `action_initiated`
                        }), Cn && V(e, {
                            step: `capacity_evaluated`,
                            capacityResult: `seat_available`,
                            availablePaidSeatCounts: {
                                default: gn,
                                prolite: vn
                            },
                            paymentRequired: !1
                        }), De(e, Cn)
                    }
                    Pe({
                        buttonType: `Send`
                    })
                }
            },
            children: Kn ? E ?? A.formatMessage(Q.inviteMemberInviteSubmitButton) : A.formatMessage(Ae ? Q.inviteMemberInviteSubmitButtonLoading : Pn ? Q.inviteMemberContinueButton : Q.inviteMemberInviteSubmitButton)
        });
    if (M != null && R != null && R.active_until != null && ut != null) return W == null ? null : (0, Y.jsx)(Tt, {
        embedded: !0,
        accountId: l.id,
        analyticsFlow: M.analyticsFlow,
        billingPeriod: W.billingPeriod,
        confirmChangesButtonMessage: Q.inviteMemberUpdateSeatsAndSendInvitesButton,
        confirmPurchaseButtonMessage: Q.inviteMemberPurchaseSeatsAndSendInvitesButton,
        currency: W.currency,
        currentPaidSeatCounts: M.currentPaidSeatCounts,
        initialRenewalSeatCounts: M.initialRenewalSeatCounts,
        initialSeatCounts: M.currentPaidSeatCounts,
        maxSeats: U,
        nextBillingDate: W.nextBillingDate,
        onBack: () => {},
        onBeforeInitialSubmit: () => {
            P.current ??= e.startAction()
        },
        onClose: () => {
            he(), pe(null), ae?.(!1)
        },
        onComplete: async e => {
            e && await De(M.analyticsFlow, !0, !0), he()
        },
        onUpdatingChange: O,
        premiumSeatMonthlyPrice: W.premiumSeatMonthlyPrice,
        showPremiumSeats: ze,
        standardSeatMonthlyPrice: W.standardSeatMonthlyPrice,
        updatedSeatCounts: M.updatedSeatCounts
    });
    if (de) return (0, Y.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [(0, Y.jsxs)(`div`, {
            className: c(`flex flex-col gap-4`, s),
            children: [(0, Y.jsx)(`input`, {
                ref: ye,
                type: `file`,
                accept: `.csv,text/csv`,
                id: `upload-csv`,
                className: `hidden`,
                onChange: e => {
                    (async () => {
                        await Oe(e) && j(!0)
                    })()
                }
            }), ve.length > 0 && (0, Y.jsx)(`div`, {
                className: `flex w-full items-center bg-red-100 p-4`,
                children: (0, Y.jsxs)(`div`, {
                    className: `grow text-red-700`,
                    children: [(0, Y.jsx)(N, {
                        ...Q.prohibitedExternalEmailDescription
                    }), (0, Y.jsx)(`pre`, {
                        className: `my-1`,
                        children: ve.join(`, `)
                    }), (0, Y.jsx)(N, {
                        ...Q.prohibitedExternalEmailResolution
                    })]
                })
            }), Gn, Un, Wn, (0, Y.jsx)(`label`, {
                htmlFor: `add-member-emails`,
                id: `add-emails-label`,
                className: `sr-only`,
                children: (0, Y.jsx)(N, {
                    ...Q.addEmailsFieldName
                })
            }), !o && (0, Y.jsx)(`div`, {
                className: `flex w-full items-center justify-end`,
                children: Jn
            }), (0, Y.jsx)(Sn, {
                value: _e,
                onChange: Yn
            })]
        }), (0, Y.jsx)(`div`, {
            className: c(`flex w-full flex-shrink-0 flex-col gap-2`, o ? `mt-0` : `mt-8`),
            children: o ? (0, Y.jsxs)(Y.Fragment, {
                children: [(0, Y.jsxs)(`div`, {
                    className: c(`flex w-full gap-2`, r ? `flex-col` : `items-center justify-between`),
                    children: [(0, Y.jsx)(`div`, {
                        className: c(r ? `w-full` : `flex-shrink-0`),
                        children: Jn
                    }), (0, Y.jsx)(`div`, {
                        className: c(r ? `w-full` : `flex-shrink-0`),
                        children: Qn()
                    })]
                }), Xn()]
            }) : (0, Y.jsxs)(Y.Fragment, {
                children: [Qn(), Xn()]
            })
        })]
    });
    let $n = (0, Y.jsx)(`div`, {
        className: `mx-auto flex w-full max-w-[400px] flex-col gap-3.5`,
        children: F.map((e, t) => (0, Y.jsx)(Mn, {
            email: e.email,
            index: t,
            emailInputList: F.map(({
                email: e
            }) => e),
            onEmailChange: e => Ee(t, `email`, e),
            shouldCheckDomainMismatch: S,
            allowedDomain: C,
            layout: `stacked`
        }, t))
    });
    return (0, Y.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [(0, Y.jsxs)(`div`, {
            className: c(`flex flex-col gap-4`, s),
            children: [(0, Y.jsx)(`input`, {
                ref: ye,
                type: `file`,
                accept: `.csv,text/csv`,
                id: `upload-csv`,
                className: `hidden`,
                onChange: e => {
                    (async () => {
                        await Oe(e) && j(!0)
                    })()
                }
            }), ve.length > 0 && (0, Y.jsx)(`div`, {
                className: `flex w-full items-center bg-red-100 p-4`,
                children: (0, Y.jsxs)(`div`, {
                    className: `grow text-red-700`,
                    children: [(0, Y.jsx)(N, {
                        ...Q.prohibitedExternalEmailDescription
                    }), (0, Y.jsx)(`pre`, {
                        className: `my-1`,
                        children: ve.join(`, `)
                    }), (0, Y.jsx)(N, {
                        ...Q.prohibitedExternalEmailResolution
                    })]
                })
            }), Gn, Un, Wn, w === `stacked` ? $n : (0, Y.jsxs)(z.Root, {
                size: `normal`,
                fixed: !0,
                children: [(0, Y.jsxs)(`colgroup`, {
                    children: [(0, Y.jsx)(`col`, {
                        className: qn
                    }), h && (0, Y.jsx)(`col`, {
                        className: g ? `w-[20%]` : `w-[28%]`
                    }), g && (0, Y.jsx)(`col`, {
                        className: h ? `w-[20%]` : `w-[28%]`
                    }), (0, Y.jsx)(`col`, {
                        className: `w-12`
                    })]
                }), (0, Y.jsxs)(z.Header, {
                    children: [(0, Y.jsx)(z.HeaderCell, {
                        className: `dark:bg-transparent`,
                        children: (0, Y.jsx)(N, {
                            ...Q.inviteTableHeaderEmail
                        })
                    }), h && (0, Y.jsx)(z.HeaderCell, {
                        className: `w-32 ps-3 dark:bg-transparent`,
                        children: (0, Y.jsx)(N, {
                            ...Q.inviteTableHeaderRole
                        })
                    }), g && (0, Y.jsx)(z.HeaderCell, {
                        className: `w-36 ps-3 dark:bg-transparent`,
                        children: (0, Y.jsx)(N, {
                            ...Nt.seatType
                        })
                    }), (0, Y.jsx)(z.HeaderCell, {
                        className: `dark:bg-transparent`
                    })]
                }), (0, Y.jsx)(z.Body, {
                    children: F.map((e, t) => (0, Y.jsxs)(z.Row, {
                        children: [(0, Y.jsx)(z.Cell, {
                            verticalAlign: `middle`,
                            children: (0, Y.jsx)(Mn, {
                                email: e.email,
                                index: t,
                                emailInputList: F.map(({
                                    email: e
                                }) => e),
                                onEmailChange: e => Ee(t, `email`, e),
                                shouldCheckDomainMismatch: S,
                                allowedDomain: C,
                                ariaLabel: A.formatMessage(Q.inviteTableHeaderEmail),
                                layout: `table`
                            })
                        }), h && (0, Y.jsx)(z.Cell, {
                            verticalAlign: `middle`,
                            divClassName: `min-h-14 items-center`,
                            children: (0, Y.jsxs)(B.Root, {
                                value: e.role,
                                onValueChange: e => Ee(t, `role`, e),
                                children: [(0, Y.jsxs)(B.Trigger, {
                                    className: `w-32 justify-between`,
                                    children: [(0, Y.jsx)(B.Value, {}), (0, Y.jsx)(B.Icon, {})]
                                }), (0, Y.jsx)(B.Portal, {
                                    children: (0, Y.jsxs)(B.Content, {
                                        className: `border-token-main-surface-secondary border`,
                                        children: [(0, Y.jsx)(B.Item, {
                                            value: I.member,
                                            children: (0, Y.jsx)(N, {
                                                ...Q.inviteRoleMember
                                            })
                                        }), I.analytics_viewer && (0, Y.jsx)(B.Item, {
                                            value: I.analytics_viewer,
                                            children: (0, Y.jsx)(N, {
                                                ...Q.inviteRoleAnalyticsViewer
                                            })
                                        }), I.admin && (0, Y.jsx)(B.Item, {
                                            value: I.admin,
                                            children: (0, Y.jsx)(N, {
                                                ...Q.inviteRoleAdmin
                                            })
                                        }), I.owner && (0, Y.jsx)(B.Item, {
                                            value: I.owner,
                                            children: (0, Y.jsx)(N, {
                                                ...Q.inviteRoleOwner
                                            })
                                        })]
                                    })
                                })]
                            })
                        }), g && (0, Y.jsx)(z.Cell, {
                            verticalAlign: `middle`,
                            divClassName: `min-h-14 items-center`,
                            children: (0, Y.jsx)(Ft, {
                                workspaceId: l.id,
                                currentSeatType: e.seatType,
                                includeUsageBased: y,
                                includeProlite: b,
                                preserveProlite: m != null,
                                disabledSeatTypes: nn({
                                    rows: F,
                                    currentSeatType: e.seatType,
                                    availablePaidSeatCounts: m
                                }),
                                onUpdateSeatType: e => {
                                    Ee(t, `seatType`, e)
                                },
                                triggerClassName: `w-36 justify-between`,
                                contentClassName: `border-token-border-default border`
                            })
                        }), (0, Y.jsx)(z.Cell, {
                            textAlign: `right`,
                            verticalAlign: `middle`,
                            divClassName: `min-h-14 items-center justify-end`,
                            children: (0, Y.jsx)(qe, {
                                onClick: () => Ce(t),
                                className: `icon-sm text-token-text-secondary me-2 cursor-pointer`
                            })
                        })]
                    }, t))
                })]
            }), (0, Y.jsxs)(`div`, {
                className: c(`align-center mb-4 flex`, $ ? `mx-auto w-full max-w-[400px] items-center justify-between` : `justify-between`),
                children: [p == null || F.length < p ? (0, Y.jsx)(k, {
                    color: `secondary`,
                    className: c($ && `h-11 rounded-full border border-black/10 bg-white px-5 text-[14px] font-normal text-[#5D5D5D] shadow-none hover:bg-[#F7F7F7] dark:border-white/12 dark:bg-transparent dark:text-white/70 dark:hover:bg-white/6`),
                    iconClassName: c($ && `text-[#5D5D5D] dark:text-white/70`),
                    onClick: () => {
                        je(e => tn({
                            rows: [...e, kn({
                                role: Fe,
                                seatType: x
                            })],
                            defaultInviteSeatType: x,
                            availablePaidSeatCounts: m
                        }))
                    },
                    icon: We,
                    children: (0, Y.jsx)(N, {
                        ...Q.addEmailButton
                    })
                }) : null, !o && Jn]
            })]
        }), (0, Y.jsx)(`div`, {
            className: c(`flex w-full flex-shrink-0 flex-col gap-2`, o ? `mt-0` : $ ? `mt-4` : `mt-8`),
            children: o ? (0, Y.jsxs)(Y.Fragment, {
                children: [(0, Y.jsxs)(`div`, {
                    className: c(`flex w-full gap-2`, r ? `flex-col` : `items-center justify-between`),
                    children: [(0, Y.jsx)(`div`, {
                        className: c(r ? `w-full` : `flex-shrink-0`),
                        children: Jn
                    }), (0, Y.jsx)(`div`, {
                        className: c(r ? `w-full` : `flex-shrink-0`),
                        children: Qn()
                    })]
                }), Xn()]
            }) : (0, Y.jsxs)(Y.Fragment, {
                children: [Qn(), Xn()]
            })
        })]
    })
}

function Sn(e) {
    "use no forget";
    let t = y(),
        n = (0, J.useMemo)(() => t?.subscriptionAnalyticsParams, [t]);
    return (0, Y.jsx)(Ct, {
        trackEmailsAdded: (0, J.useCallback)(e => {
            T.logEvent(`Account Pay: Collaborator Emails Added`, {
                ...n,
                ...e
            })
        }, [n]),
        trackEmailRemoved: (0, J.useCallback)(e => {
            T.logEvent(`Account Pay: Collaborator Email Removed`, {
                ...n,
                ...e
            })
        }, [n]),
        ...e
    })
}

function Cn(e) {
    "use no forget";
    let t = xe(),
        n = _(),
        {
            search: r
        } = fe();
    return _e({
        mutationFn: async ({
            emails: i,
            role: o,
            seatType: s,
            analyticsFlowId: c,
            submissionId: l
        }) => {
            let u = [],
                d = Math.max(5, Math.round(i.length / 10));
            for (let e = 0; e < i.length; e += d) u.push(i.slice(e, e + d));
            let f = async i => {
                try {
                    let r = await p.safePost(`/accounts/{account_id}/invites`, {
                        parameters: {
                            path: {
                                account_id: e.id
                            }
                        },
                        requestBody: {
                            email_addresses: i,
                            flow_id: c,
                            role: o,
                            seat_type: s,
                            resend_emails: !0,
                            submission_id: l
                        }
                    });
                    return r.errored_emails.length > 0 && n.danger(t.formatMessage(Q.inviteMessageFailure, {
                        emailsStr: r.errored_emails.map(({
                            email_address: e,
                            error: t
                        }) => `${e}: ${t}`).join(`, `)
                    }), {
                        loggingTitle: `Failed to invite members`,
                        toastId: `admin_invite`,
                        loggingDescription: Q.inviteMessageFailure.defaultMessage
                    }), {
                        firstError: void 0,
                        paymentRequired: !1,
                        successfulInviteCount: r.account_invites.length,
                        alreadyMemberCount: r.already_member_emails?.length ?? 0
                    }
                } catch (i) {
                    let o = i instanceof ae && i.status === 401 && (i.code === `workspace_subscription_delinquent` || i.code == null && i.message === `Team has a delinquent subscription`),
                        s = o ? e.isOwnerOfAccount() ? t.formatMessage({
                            id: `admin-invite.paymentRequired.owner`,
                            defaultMessage: `Invitations couldn't be sent because your workspace has an unpaid subscription. Update your payment details, then try sending the invitations again.`
                        }) : t.formatMessage({
                            id: `admin-invite.paymentRequired.member`,
                            defaultMessage: `Invitations couldn't be sent because your workspace has an unpaid subscription. Ask a workspace owner to update the payment details, then try again.`
                        }) : i instanceof Error ? i.message : `Failed to invite members`;
                    return n.danger(s, {
                        toastId: `admin_invite`,
                        loggingTitle: `Failed to invite members`,
                        loggingDescription: s,
                        action: o && e.isOwnerOfAccount() ? (0, Y.jsx)(k, {
                            as: `a`,
                            to: a(`/admin/billing`, r),
                            openNewTab: !0,
                            color: `primary`,
                            size: `small`,
                            children: (0, Y.jsx)(N, {
                                id: `admin-invite.paymentRequired.updatePayment`,
                                defaultMessage: `Update payment`
                            })
                        }) : void 0
                    }), {
                        firstError: i,
                        paymentRequired: o ? !0 : void 0,
                        successfulInviteCount: 0,
                        alreadyMemberCount: 0
                    }
                }
            }, m = await Promise.all(u.map(e => f(e)));
            return {
                firstError: m.find(({
                    firstError: e
                }) => e != null)?.firstError,
                paymentRequired: m.some(e => e.paymentRequired) ? !0 : !m.every(e => e.paymentRequired === !1) && void 0,
                successfulInviteCount: m.reduce((e, t) => e + t.successfulInviteCount, 0),
                alreadyMemberCount: m.reduce((e, t) => e + t.alreadyMemberCount, 0)
            }
        }
    })
}

function G(e) {
    let t = e?.trim() ?? ``;
    return t.startsWith(`"`) && t.endsWith(`"`) || t.startsWith(`'`) && t.endsWith(`'`) ? t.slice(1, -1).trim() : t
}

function wn(e, t, n) {
    let r = G(e).toLowerCase().replaceAll(`-`, `_`).replaceAll(` `, `_`);
    return t.has(r) ? r : n
}

function Tn(e, t) {
    switch (G(e).toLowerCase().replaceAll(`-`, `_`).replaceAll(` `, `_`)) {
        case `chatgpt`:
        case `default`:
        case `standard`:
            return `default`;
        case `codex`:
        case `usage_based`:
            return `usage_based`;
        case `premium`:
        case `prolite`:
            return `prolite`;
        default:
            return t
    }
}

function K(e, {
    allowedRoles: t,
    defaultRole: n,
    defaultSeatType: r
}) {
    let i = e.split(/\r?\n/),
        a = new Set;
    return i.reduce((e, i) => {
        let [o = ``, s = ``, c = ``] = i.split(`,`), l = G(o);
        return v.test(l) && !a.has(l) && e.push(kn({
            email: l,
            role: wn(s, t, n),
            seatType: Tn(c, r)
        })), a.add(l), e
    }, [])
}

function q(e, t, n, r) {
    return new Promise(i => {
        if (e.size / (1024 * 1024) > Dn) i({
            status: `error`,
            reason: `file_too_large`
        });
        else if (e.type !== `text/csv`) i({
            status: `error`,
            reason: `invalid_file_type`
        });
        else {
            let a = new FileReader;
            a.readAsText(e), a.onload = function(e) {
                let a = e.target?.result;
                i({
                    status: `success`,
                    newRows: K(a, {
                        allowedRoles: t,
                        defaultRole: n,
                        defaultSeatType: r
                    })
                })
            }
        }
    })
}
var En, J, Y, Dn, On, X, Z, kn, An, jn, Mn, Nn, Q, Pn = e((() => {
    En = be(), l(), He(), Ke(), Ue(), E(), et(), w(), St(), De(), j(), le(), ke(), dt(), tt(), wt(), ft(), mt(), Et(), H(), U(), _t(), Pt(), Ce(), Me(), at(), L(), xt(), it(), st(), R(), Ze(), Ve(), n(), ie(), d(), de(), o(), Oe(), s(), g(), te(), O(), x(), Mt(), ye(), S(), J = t(ge()), he(), P(), F(), Pe(), I(), h(), Kt(), Qt(), cn(), Y = M(), Dn = 25, On = 3, X = 10, Z = [], kn = ({
        email: e = ``,
        role: t,
        seatType: n
    }) => ({
        email: e,
        role: t,
        seatType: n
    }), An = e => {
        if (!e?.length) return Z;
        let t = new Set,
            n = [];
        return e.slice(0, On).forEach(e => {
            let r = e.trim();
            if (!r) return;
            let i = r.toLowerCase();
            t.has(i) || (t.add(i), n.push(r))
        }), n
    }, jn = ({
        workspace: e,
        inviteFlowAnalytics: t,
        onSuccess: n,
        k12InviteDomain: i,
        initialEmails: a,
        maxInvites: o,
        showRoleColumn: s,
        showSeatTypeColumn: c,
        includeUsageBasedSeatType: l,
        includePremiumSeatType: u,
        defaultInviteSeatType: d,
        availablePaidSeatCounts: f
    }) => {
        "use no forget";
        let p = xe(),
            m = me(),
            h = _(),
            g = ce(`3528236309`).get(`can_see_analytics_viewer_role`, !1),
            x = y(),
            ee = e.isOwnerOfAccount(),
            S = (0, J.useRef)(null),
            w = Nn(ee, g),
            E = (0, J.useMemo)(() => {
                let t = e.isFreeWorkspace() ? `owner` : `member`;
                return w[t] ?? w.member
            }, [w, e]),
            te = tn({
                rows: (a ?? Z).map(e => kn({
                    email: e,
                    role: E,
                    seatType: d
                })),
                defaultInviteSeatType: d,
                availablePaidSeatCounts: f
            }),
            [ne, re] = (0, J.useState)(!1),
            [ie, ae] = (0, J.useState)(!1),
            [D, O] = (0, J.useState)(te),
            [oe, se] = (0, J.useState)([]),
            {
                mutateAsync: k
            } = Cn(e),
            A = Re(),
            le = ze() ?? !0,
            [ue, de] = (0, J.useState)(Z),
            j = (0, J.useMemo)(() => x?.subscriptionAnalyticsParams, [x]);
        (0, J.useEffect)(() => {
            let t = D.filter(({
                email: e
            }) => e.trim().length > 0);
            if (!t.length) {
                de(Z);
                return
            }
            let n = new Set;
            if (e.isK12() && i) {
                let e = i.toLowerCase();
                t.forEach(({
                    email: t
                }) => {
                    let r = t.trim(),
                        i = r.toLowerCase();
                    !i.endsWith(`@${e}`) && i.includes(`@`) && n.add(r)
                })
            }
            if (!le && A?.length) {
                let e = A.map(e => `@` + e.hostname.toLowerCase());
                t.map(({
                    email: e
                }) => e.trim()).filter(t => !e.some(e => t.toLowerCase().endsWith(e))).forEach(e => n.add(e))
            }
            let r = Array.from(n);
            de(r.length ? r : Z)
        }, [A, le, D, i, e]);
        let fe = (0, J.useCallback)(e => {
                let t = {
                    numEmailsAdded: e,
                    uploadType: `Bulk`
                };
                T.logEvent(`Account Pay: Collaborator Emails Added`, {
                    ...j,
                    ...t
                })
            }, [j]),
            M = (0, J.useCallback)(async e => {
                let t = e.target.files?.[0];
                if (!t) return !1;
                let n = await q(t, new Set(Object.values(w)), E, d);
                if (n.status === `success`) {
                    let t = tn({
                        rows: Jt(n.newRows, o),
                        defaultInviteSeatType: d,
                        availablePaidSeatCounts: f
                    });
                    return o != null && gn(n.newRows).length > o && h.warning(p.formatMessage(Q.inviteLimitWarning, {
                        maxInvites: o
                    }), {
                        duration: 5,
                        id: `admin_invite_limit`
                    }), re(!0), O(t), se(t.map(e => ({
                        label: e.email,
                        value: e.email,
                        isValid: v.test(e.email)
                    }))), fe(t.length), e.target.files = null, !0
                }
                return n.reason === `file_too_large` ? h.danger(p.formatMessage(Q.fileTooLargeWarning, {
                    maxSize: `${Dn}MB`
                }), {
                    duration: 5,
                    loggingTitle: `CSV Upload: File too large`,
                    toastId: `csv_upload_too_large`,
                    loggingDescription: Q.fileTooLargeWarning.defaultMessage
                }) : n.reason === `invalid_file_type` && h.danger(p.formatMessage(Q.fileIncorrectTypeWarning), {
                    duration: 5,
                    loggingTitle: `CSV Upload: File incorrect type`,
                    toastId: `csv_upload`,
                    loggingDescription: Q.fileIncorrectTypeWarning.defaultMessage
                }), !1
            }, [w, f, E, d, p, o, h, fe]),
            pe = (e, t, n) => {
                let r = [...D];
                r[e] = {
                    ...r[e],
                    [t]: n
                }, O(r)
            },
            N = (0, J.useCallback)(e => {
                T.logEvent(`Account Pay: Add Collaborators Modal Clicked`, {
                    ...j,
                    ...e
                })
            }, [j]),
            P = (0, J.useCallback)(() => {
                T.logEvent(`Account Pay: Add Collaborators Upload Clicked`, j)
            }, [j]),
            he = (0, J.useCallback)(() => {
                T.logEvent(`Account Pay: Collaborator Email Removed`, j)
            }, [j]),
            ge = (0, J.useCallback)(e => {
                let t = je(e);
                return T.logEvent(`Account Pay: Invite Collaborators Submitted`, {
                    ...j,
                    ...e
                }, t ? {
                    eventId: t
                } : void 0), t
            }, [j]),
            F = e => {
                let t = [...D.slice(0, e), ...D.slice(e + 1)];
                O(t), he()
            },
            _e = (0, J.useCallback)(() => {
                O([]), ae(!1), se([]), re(!1)
            }, []),
            ye = (0, J.useCallback)(async (i, a, o = !1) => {
                ae(!0);
                let s = !1;
                try {
                    let c = ve();
                    i.length > 5 && h.info(p.formatMessage(Q.inviteMessageLoading, {
                        numRows: i.length
                    }), {
                        hasCloseButton: !0
                    });
                    let l = [
                            [`admin`, r.ADMIN],
                            [`owner`, r.OWNER],
                            [`member`, r.STANDARD],
                            [`analytics_viewer`, r.ANALYTICS_VIEWER]
                        ],
                        u = Array.from(i.reduce((e, t) => {
                            let n = l.find(([e]) => e === t.role)?.[1];
                            if (!n) return e;
                            let r = t.seatType,
                                i = `${n}:${r}`,
                                a = e.get(i);
                            return a ? (a.emails.push(t.email), e) : (e.set(i, {
                                emails: [t.email],
                                role: n,
                                seatType: r
                            }), e)
                        }, new Map).values()),
                        d = await Promise.allSettled(u.map(({
                            emails: e,
                            role: t,
                            seatType: n
                        }) => k({
                            emails: e,
                            analyticsFlowId: a.flowId,
                            role: t,
                            seatType: n,
                            submissionId: c
                        }))),
                        f = d.reduce((e, t) => e + (t.status === `fulfilled` ? t.value.successfulInviteCount : 0), 0),
                        g = d.reduce((e, t) => e + (t.status === `fulfilled` ? t.value.alreadyMemberCount : 0), 0),
                        _;
                    for (let e of d) {
                        if (e.status === `rejected`) {
                            _ = e.reason;
                            break
                        }
                        if (e.value.firstError != null) {
                            _ = e.value.firstError;
                            break
                        }
                    }
                    t.recordResult(f + g, _ == null), V(a, {
                        ..._ != null && o ? {
                            actionFailureType: `mutation_failed`,
                            failedTargetCount: Math.max(0, i.length - f - g),
                            step: `action_attempt_failed`,
                            successfulTargetCount: f
                        } : W({
                            affectedTargetCount: i.length,
                            successfulTargetCount: f,
                            alreadyMemberCount: g
                        }),
                        paymentRequired: d.some(e => e.status === `fulfilled` && e.value.paymentRequired) ? !0 : !d.every(e => e.status === `fulfilled` && e.value.paymentRequired === !1) && void 0
                    }), s = !0;
                    let v = ge({
                        ...Bt(i),
                        numSuccessfulInvites: f
                    });
                    if (f > 0 && (setTimeout(() => {
                            m.invalidateQueries({
                                queryKey: [`workspace`, e.id, `invites`, 0, ``],
                                exact: !0
                            })
                        }, 1e3), h.success(p.formatMessage(Q.inviteSuccessToast, {
                            numRows: f,
                            userStr: f === 1 ? `user` : `users`,
                            workspaceName: b(p, e)
                        }))), g > 0 && h.info(p.formatMessage({
                            id: `admin-invite.toast.already_member`,
                            defaultMessage: `{count, plural, one {Already a member — no invitation sent} other {# people are already members — no invitations sent}}`
                        }, {
                            count: g
                        })), C(Ae, i.length, {
                            action: `SubmitEmails`,
                            location: `modal-submit-button`,
                            text: `Submit`,
                            step: `AdminModal-CollectEmails-Submit`,
                            numSuccessfulInvites: f.toString(),
                            ...v ? {
                                unique_event_id: v
                            } : {}
                        }), _ != null) throw _;
                    n?.(), _e()
                } catch (e) {
                    throw t.recordResult(0, !1), s || V(a, {
                        step: o ? `action_attempt_failed` : `action_failed`,
                        actionFailureType: `mutation_failed`
                    }), e
                } finally {
                    ae(!1)
                }
            }, [_e, k, t, p, n, m, h, ge, e]),
            be = (0, J.useCallback)(async (n, r = !1, i = !1) => {
                let a = ln({
                        rows: D,
                        defaultInviteRole: E,
                        defaultInviteSeatType: d,
                        includePremiumSeatType: u,
                        includeUsageBasedSeatType: l,
                        maxInvites: o,
                        showRoleColumn: s,
                        showSeatTypeColumn: c,
                        availablePaidSeatCounts: f
                    }),
                    p = a.filter(e => e.seatType === Lt).length,
                    m = n ?? un({
                        rows: a,
                        workspace: e
                    });
                n ?? V(m, {
                    step: `action_initiated`
                });
                let h = t.startAction();
                try {
                    if (r) {
                        await ye(a, m, i);
                        return
                    }
                    if (p > 0) {
                        await Dt({
                            analyticsFlow: m,
                            workspace: e,
                            introducedDefaultSeatCount: p,
                            entrypoint: `workspace_onboarding_admin_invite`,
                            onContinue: async () => {
                                await ye(a, m)
                            }
                        });
                        return
                    }
                    V(m, {
                        step: `capacity_evaluated`,
                        capacityResult: `not_required`,
                        paymentRequired: !1
                    }), await ye(a, m)
                } finally {
                    h()
                }
            }, [f, E, d, D, u, l, t, s, c, ye, e, o]);
        return {
            INVITE_ROLES: w,
            defaultInviteRole: E,
            clearState: _e,
            emailTableRows: D,
            emailTextAreaValue: oe,
            emailsOutsideOfDomain: ue,
            fileInputRef: S,
            handleClickImportCSV: (0, J.useCallback)(() => {
                S.current?.value && (S.current.value = ``), S.current?.click(), typeof document < `u` && document.activeElement && setTimeout(() => {
                    document.activeElement?.blur?.()
                }, 0), P()
            }, [S, P]),
            handleDeleteRow: F,
            handleInputChange: pe,
            handleSubmit: be,
            handleUploadCSV: M,
            hasUploadedCsv: ne,
            isInviting: ie,
            setEmailTableRows: O,
            setEmailTextAreaValue: se,
            trackNavigationClick: N,
            trackUploadClick: P
        }
    }, Mn = ({
        email: e,
        index: t,
        emailInputList: n,
        onEmailChange: r,
        shouldCheckDomainMismatch: i,
        allowedDomain: a,
        ariaLabel: o,
        layout: s = `table`
    }) => {
        "use no forget";
        let l = xe(),
            [u, d] = (0, J.useState)(!1),
            f = A(),
            p = (0, J.useMemo)(() => f ? Xt(f) : null, [f]),
            m = a ?? p,
            {
                hasMismatchedDomain: h,
                isDuplicate: g,
                isInvalid: _
            } = (0, J.useMemo)(() => Zt({
                email: e,
                index: t,
                emailInputList: n,
                inviteDomain: m,
                shouldCheckDomainMismatch: i
            }), [e, n, t, m, i]),
            v = u && _,
            y = u && h,
            b = g && !v && !y,
            x = v || y || b,
            ee = l.formatMessage(Q.emailInputPlaceholder);
        return (0, Y.jsxs)(`div`, {
            className: `flex w-full flex-col gap-1`,
            children: [(0, Y.jsx)(Ee, {
                ariaLabel: o ?? ee,
                name: `email`,
                type: `email`,
                value: e,
                placeholder: ee,
                onBlur: () => {
                    d(!0), h && C(`chatgpt_business_workspace_invite_domain_mismatch`)
                },
                onChange: e => {
                    r(e.target.value)
                },
                color: `tertiary`,
                className: c(s === `stacked` ? `min-h-[48px] w-full overflow-hidden rounded-full! border border-black/6 bg-[#F7F7F7] px-5 py-3 shadow-none dark:border-white/10 dark:bg-[#1F1F1F]` : `ms-px w-[90%] rounded-[20px] px-4 py-2`, x && `border-token-text-error focus:border-token-text-error`),
                containerInputClassName: `w-full`,
                inputClassName: c(`placeholder:text-token-text-tertiary dark:bg-transparent`, s === `stacked` && `bg-transparent text-[16px] leading-6 text-[#1F1F1F] placeholder:text-[16px] placeholder:leading-6 placeholder:text-[#9B9B9B] dark:text-white/92 dark:placeholder:text-white/40`),
                displayNameLabelClassName: `hidden`
            }), v && (0, Y.jsx)(`div`, {
                className: `text-token-text-error ms-1 flex text-xs`,
                children: (0, Y.jsx)(N, {
                    ...Q.invalidEmailWarning
                })
            }), y && (0, Y.jsx)(`div`, {
                className: `text-token-text-error ms-1 flex text-xs`,
                children: (0, Y.jsx)(N, {
                    ...Q.mismatchedDomainWarning,
                    values: {
                        domain: m ?? ``
                    }
                })
            }), b && (0, Y.jsx)(`div`, {
                className: `text-token-text-error ms-1 flex text-xs`,
                children: (0, Y.jsx)(N, {
                    ...Q.duplicateEmailWarning
                })
            })]
        })
    }, Nn = (e, t) => {
        let n = {
            member: `member`
        };
        return e && (n.admin = `admin`, n.owner = `owner`, t && (n.analytics_viewer = `analytics_viewer`)), n
    }, Q = pe({
        addEmailsFieldName: {
            id: `admin-invite.addEmailsFieldName.0`,
            defaultMessage: `Emails`
        },
        prohibitedExternalEmailDescription: {
            id: `admin-invite.prohibitedExternalEmailDescription`,
            defaultMessage: `The following emails are not a part of your organization's verified domains:`
        },
        prohibitedExternalEmailResolution: {
            id: `admin-invite.prohibitedExternalEmailResolution`,
            defaultMessage: `Either remove these emails, enable "Allow External Domain Invites" from your workspace settings, or verify these email domains.`
        },
        inviteTableHeaderEmail: {
            id: `admin-invite.inviteTableHeaderEmail`,
            defaultMessage: `Email`
        },
        inviteTableHeaderRole: {
            id: `admin-invite.inviteTableHeaderRole`,
            defaultMessage: `Role`
        },
        inviteRoleMember: {
            id: `admin-invite.inviteRoleMember`,
            defaultMessage: `Member`
        },
        inviteRoleAnalyticsViewer: {
            id: `admin-invite.inviteRoleAnalyticsViewer`,
            defaultMessage: `Analytics viewer`
        },
        inviteRoleAdmin: {
            id: `admin-invite.inviteRoleAdmin`,
            defaultMessage: `Admin`
        },
        inviteRoleOwner: {
            id: `admin-invite.inviteRoleOwner`,
            defaultMessage: `Owner`
        },
        fileTooLargeWarning: {
            id: `admin-invite.fileTooLargeWarning`,
            defaultMessage: `File is too large. Please upload a CSV file smaller than {maxSize}.`
        },
        fileIncorrectTypeWarning: {
            id: `admin-invite.fileIncorrectTypeWarning`,
            defaultMessage: `Please upload a CSV file.`
        },
        inviteMessageLoading: {
            id: `admin-invite.inviteMessageLoading`,
            defaultMessage: `Sending out {numRows} invites, this may take a minute...`
        },
        inviteSuccessToast: {
            id: `admin-invite.inviteSuccessToast`,
            defaultMessage: `Invited {numRows} {userStr} to {workspaceName}`
        },
        inviteMemberInviteSubmitButton: {
            id: `admin-invite.inviteMemberInviteSubmitButton`,
            defaultMessage: `Send invites`
        },
        inviteMemberInviteSubmitButtonLoading: {
            id: `admin-invite.inviteMemberInviteSubmitButtonLoading`,
            defaultMessage: `Sending invites...`
        },
        inviteMemberContinueButton: {
            id: `admin-invite.immediate_invoice.button.continue`,
            defaultMessage: `Continue`
        },
        inviteMemberUpdateSeatsAndSendInvitesButton: {
            id: `admin-invite.immediate_invoice.button.update_seats_and_send_invites`,
            defaultMessage: `Update seats and send invites`
        },
        inviteMemberPurchaseSeatsAndSendInvitesButton: {
            id: `admin-invite.immediate_invoice.button.purchase_seats_and_send_invites`,
            defaultMessage: `Purchase seats and send invites`
        },
        inviteLimitWarning: {
            id: `admin-invite.inviteLimitWarning`,
            defaultMessage: `You can invite up to {maxInvites} people at a time. Extra emails were not added.`
        },
        inviteMessageFailure: {
            id: `admin-invite.inviteMessageFailure`,
            defaultMessage: `Unable to invite {emailsStr}`
        },
        freeTrialInviteLimitWarning: {
            id: `admin-invite.freeTrialInviteLimitWarning`,
            defaultMessage: `You can only invite 10 users while on an active free trial. Upgrade now to invite more.`
        },
        freeTrialInviteLimitWarningAskAdmin: {
            id: `admin-invite.freeTrialInviteLimitWarningAskAdmin`,
            defaultMessage: `You can only invite 10 users while on an active free trial. Ask your workspace admin to upgrade for more.`
        },
        freeTrialInviteLimitWarningTitle: {
            id: `admin-invite.freeTrialInviteLimitWarningTitle`,
            defaultMessage: `Trial invite limit reached`
        },
        additionalPaidSeatsNeededWarningTitle: {
            id: `admin-invite.immediate_invoice.warning.additional_seats_needed.title`,
            defaultMessage: `{count, plural, one {# additional seat needed} other {# additional seats needed}}`
        },
        additionalPaidSeatsNeededWarningBody: {
            id: `admin-invite.immediate_invoice.warning.additional_seats_needed.body.capacity_update`,
            defaultMessage: `{count, plural, one {Add # additional seat to send these invites.} other {Add # additional seats to send these invites.}}`
        },
        additionalPaidSeatsNeededForSingleInviteWarningBody: {
            id: `admin-invite.immediate_invoice.warning.additional_seats_needed.body.capacity_update.single_invite`,
            defaultMessage: `{count, plural, one {Add # additional seat to send this invite.} other {Add # additional seats to send this invite.}}`
        },
        scheduledSeatRemovalCanceledWarningTitle: {
            id: `admin-invite.immediate_invoice.warning.scheduled_change_cancellation.title.removal.exact_count`,
            defaultMessage: `{scheduledRemovalCount, plural, one {One scheduled removal will be canceled} other {# scheduled removals will be canceled}}`
        },
        scheduledSeatDowngradeCanceledWarningTitle: {
            id: `admin-invite.immediate_invoice.warning.scheduled_change_cancellation.title.downgrade.exact_count`,
            defaultMessage: `{scheduledDowngradeCount, plural, one {One scheduled downgrade will be canceled} other {# scheduled downgrades will be canceled}}`
        },
        scheduledSeatChangesCanceledWarningTitle: {
            id: `admin-invite.immediate_invoice.warning.scheduled_change_cancellation.title.mixed.exact_count`,
            defaultMessage: `{scheduledSeatChangeCount, plural, one {One scheduled seat change will be canceled} other {# scheduled seat changes will be canceled}}`
        },
        scheduledStandardSeatRemovalCanceledWarningBody: {
            id: `admin-invite.immediate_invoice.warning.scheduled_change_cancellation.body.removal.standard.exact_count`,
            defaultMessage: `{scheduledRemovalCount, plural, one {By inviting a new team member to a Standard seat, one scheduled Standard seat removal will be canceled.} other {By inviting new team members to Standard seats, # scheduled Standard seat removals will be canceled.}}`
        },
        scheduledPremiumSeatRemovalCanceledWarningBody: {
            id: `admin-invite.immediate_invoice.warning.scheduled_change_cancellation.body.removal.premium.exact_count`,
            defaultMessage: `{scheduledRemovalCount, plural, one {By inviting a new team member to a Premium seat, one scheduled Premium seat removal will be canceled.} other {By inviting new team members to Premium seats, # scheduled Premium seat removals will be canceled.}}`
        },
        scheduledMultiTierSeatRemovalCanceledWarningBody: {
            id: `admin-invite.immediate_invoice.warning.scheduled_change_cancellation.body.removal.multiple_tiers.exact_count`,
            defaultMessage: `By inviting new team members to Standard and Premium seats, {scheduledRemovalCount, plural, one {# scheduled seat removal} other {# scheduled seat removals}} will be canceled.`
        },
        scheduledSeatDowngradeCanceledWarningBody: {
            id: `admin-invite.immediate_invoice.warning.scheduled_change_cancellation.body.downgrade.exact_count`,
            defaultMessage: `{scheduledDowngradeCount, plural, one {By inviting a new team member to a Premium seat, one scheduled Premium-to-Standard downgrade will be canceled.} other {By inviting new team members to Premium seats, # scheduled Premium-to-Standard downgrades will be canceled.}}`
        },
        scheduledSeatChangesCanceledWarningBody: {
            id: `admin-invite.immediate_invoice.warning.scheduled_change_cancellation.body.mixed.counts_by_type.exact_count`,
            defaultMessage: `By inviting new team members, {scheduledRemovalCount, plural, one {# scheduled seat removal} other {# scheduled seat removals}} and {scheduledDowngradeCount, plural, one {# scheduled seat downgrade} other {# scheduled seat downgrades}} will be canceled.`
        },
        additionalPaidSeatsBillingUnavailableWarningBody: {
            id: `admin-invite.immediate_invoice.warning.billing_unavailable.body`,
            defaultMessage: `Seat purchase details are temporarily unavailable. Please try again.`
        },
        additionalPaidSeatsExceedMaximumWarningBody: {
            id: `admin-invite.immediate_invoice.warning.maximum_seats_exceeded.body`,
            defaultMessage: `This workspace cannot have more than {maxSeats, number} paid seats.`
        },
        retrySeatPurchaseBillingButton: {
            id: `admin-invite.immediate_invoice.button.retry_billing`,
            defaultMessage: `Retry`
        },
        upgradeButton: {
            id: `admin-invite.upgradeButton`,
            defaultMessage: `Upgrade`
        },
        importCSVButton: {
            id: `admin-invite.importCSVButton`,
            defaultMessage: `Upload CSV`
        },
        reimportCSVButton: {
            id: `admin-invite.reimportCSVButton`,
            defaultMessage: `Re-upload CSV`
        },
        importCSVTooltip: {
            id: `admin-invite.importCSVTooltip`,
            defaultMessage: `Upload a CSV file. Your file must include an email on each line.`
        },
        emailInputPlaceholder: {
            id: `admin-invite.emailInputPlaceholder`,
            defaultMessage: `Email`
        },
        addEmailButton: {
            id: `admin-invite.addEmailButton`,
            defaultMessage: `Add more`
        },
        duplicateEmailWarning: {
            id: `admin-invite.duplicateEmailWarning`,
            defaultMessage: `This email is a duplicate.`
        },
        invalidEmailWarning: {
            id: `admin-invite.invalidEmailWarning`,
            defaultMessage: `Please enter a valid email address.`
        },
        mismatchedDomainWarning: {
            id: `admin-invite.mismatchedDomainWarning`,
            defaultMessage: `Enter an email address with the {domain} domain.`
        }
    })
}));
export {
    Vt as a, Kt as i, vn as n, Pn as r, yn as t
};
//# sourceMappingURL=96bf3632-g511f3wfi39bj97q.js.map
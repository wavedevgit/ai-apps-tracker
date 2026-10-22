import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as n,
    $T as r,
    Art as i,
    E6 as a,
    Hn as o,
    IU as s,
    LU as c,
    Lnt as l,
    O6 as u,
    Pst as d,
    Qy as f,
    Rz as p,
    Un as m,
    V1 as h,
    Y7 as g,
    Yat as _,
    ZG as v,
    Zy as ee,
    _rt as y,
    eE as b,
    eK as x,
    ert as S,
    frt as C,
    grt as w,
    iO as te,
    jrt as ne,
    krt as re,
    l7 as T,
    lO as E,
    nO as ie,
    o0 as ae,
    oW as D,
    prt as oe,
    q1 as O,
    qrt as se,
    rrt as k,
    sW as ce,
    tot as le,
    u7 as A,
    xct as ue,
    yct as j,
    znt as de,
    zz as M
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    At as fe,
    Bn as pe,
    Ln as me,
    N as he,
    Nn as N,
    Q as P,
    Rn as ge,
    Vn as F,
    Zt as _e,
    p as I,
    rn as ve,
    s as ye,
    wn as be,
    zn as xe
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Bst as Se,
    E6t as Ce,
    F6t as we,
    GDn as Te,
    H6t as Ee,
    M6t as De,
    Srn as Oe,
    Trn as ke,
    Vst as Ae,
    WDn as je,
    ZGn as Me,
    a2t as Ne,
    a8t as L,
    ag as Pe,
    i2t as Fe,
    m8t as Ie,
    o2t as R,
    og as Le,
    r8t as Re,
    rg as ze,
    tg as Be,
    wrn as Ve
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    Gh as He,
    Hm as Ue,
    Kh as We,
    Um as Ge,
    vv as Ke,
    yv as qe
} from "./30901919-lc79rizhhepnsl3q.js";
import {
    Cc as Je,
    Cd as Ye,
    Dc as Xe,
    Ec as Ze,
    Fc as Qe,
    Fm as $e,
    Fv as z,
    Im as et,
    Iv as B,
    Lc as tt,
    Nc as nt,
    Oc as rt,
    Pc as it,
    Sc as at,
    Tc as ot,
    Yc as st,
    dc as ct,
    ec as lt,
    fc as ut,
    gc as dt,
    hc as ft,
    hf as pt,
    mc as mt,
    pc as ht,
    tc as gt,
    tl as _t,
    uc as vt,
    wd as yt,
    xf as bt
} from "./c2675c8c-f8x469cgefxzeo6l.js";
import {
    g_ as xt,
    h_ as V
} from "./8b34dbc2-ik628tlti8ozm9vq.js";
import {
    r as St,
    t as Ct
} from "./53a75fa3-h29116foch230vv0.js";
import {
    n as wt,
    t as Tt
} from "./0453f9ca-jwpv9laq6jy5cvzp.js";
import {
    n as Et,
    t as H
} from "./dc59de7a-h3puux0i71t25c7o.js";
import {
    i as U,
    r as Dt,
    t as W
} from "./cedb005c-ex0gzr2xcqvmfcm1.js";
import {
    i as Ot,
    r as kt,
    t as At
} from "./730b64e6-m4de6rnt9za7nfhy.js";
import {
    n as jt,
    t as Mt
} from "./37b207d4-n5mid9cmeyzinyps.js";
import {
    c as Nt,
    o as Pt,
    r as Ft,
    s as It,
    t as Lt
} from "./1212b029-myzn49n30sx802sg.js";

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
var G = e((() => {}));

function zt({
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
    l.logStructuredEvent(`ChatgptWorkspaceInviteFlowDroppedOff`, {
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
    return e.isOwnerOfAccount() ? `workspace_owner` : e.isAdminOfAccount() ? `workspace_admin` : e.data.role === j.ANALYTICS_VIEWER ? `workspace_analytics_viewer` : `workspace_member`
}

function Wt(e, t) {
    let n = e => t == null ? void 0 : vt(t, e) ?? void 0;
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
            h()?.id !== e.id || C().getContext().user.customIDs?.workspace_id !== e.id || l.logStructuredEvent(`ChatgptWorkspaceInviteAbandonedWithPaidSeat`, {
                actorRole: t[Ut(e)],
                availableDefaultSeatCount: k(n.availableDefaultSeatCount),
                availableProliteSeatCount: k(n.availableProliteSeatCount)
            })
        }
    })
}
var Kt = e((() => {
    ue(), dt(), O(), w(), S(), G(), de()
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
    if (!m.test(t)) return null;
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
        o = a.length > 0 && !m.test(a),
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
    o()
}));

function $t({
    subscription: e,
    workspaceSeatTypeCounts: t,
    paidStandardSeatCapacity: n,
    paidPremiumSeatCapacity: r
}) {
    return {
        availableStandardSeats: Math.max(0, e == null ? 0 : vt(e, `default`) ?? n - (t?.seat_type_counts?.default ?? 0)),
        availablePremiumSeats: Math.max(0, e == null ? 0 : vt(e, `prolite`) ?? r - (t?.seat_type_counts?.prolite ?? 0))
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
    let g = o != null && d ? ht(o, `default`, c ? 0 : o.seats_entitled) : o?.seats_entitled ?? 0,
        _ = o != null && d ? ht(o, `prolite`) : 0,
        v = !l && o != null && s != null,
        {
            availableStandardSeats: ee,
            availablePremiumSeats: y
        } = $t({
            subscription: o,
            workspaceSeatTypeCounts: s,
            paidStandardSeatCapacity: g,
            paidPremiumSeatCapacity: _
        }),
        b = u && v ? rn({
            paidInviteEmails: an({
                rows: e,
                showSeatTypeColumn: t,
                includeUsageBasedSeatType: n,
                includePremiumSeatType: r,
                defaultInviteSeatType: i,
                seatTypeToCount: `default`,
                maxInvites: a
            }),
            availableSeats: ee,
            existingActivePaidMemberEmails: f,
            existingPendingPaidInviteEmails: p
        }) : 0,
        x = u && d && v ? rn({
            paidInviteEmails: an({
                rows: e,
                showSeatTypeColumn: t,
                includeUsageBasedSeatType: n,
                includePremiumSeatType: r,
                defaultInviteSeatType: i,
                seatTypeToCount: `prolite`,
                maxInvites: a
            }),
            availableSeats: y,
            existingActivePaidMemberEmails: m,
            existingPendingPaidInviteEmails: h
        }) : 0;
    return {
        paidStandardSeatCapacity: g,
        paidPremiumSeatCapacity: _,
        standardSeatCapacityShortfall: b,
        premiumSeatCapacityShortfall: x,
        totalSeatCapacityShortfall: b + x
    }
}

function sn({
    subscription: e,
    capacityShortfallSeatCounts: t
}) {
    if (e == null) return null;
    let n = mt(e),
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
    dt(), Pt()
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
    return W({
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
            return An({
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
    if (!a || t == null || n == null || n > kn) return {
        isOverFreeTrialInviteLimit: !1,
        projectedTrialSeats: Math.max(0, t ?? 0)
    };
    let o = new Set(i.map(e => e.trim().toLowerCase())),
        s = new Set(r.map(e => e.trim().toLowerCase())),
        c = gn(e).filter(e => !o.has(e) && !s.has(e)).length,
        l = Math.max(0, t) + Math.max(0, i.length) + c;
    return {
        isOverFreeTrialInviteLimit: l > kn,
        projectedTrialSeats: l
    }
}

function vn(e) {
    let t = e.isOwnerOfAccount();
    return {
        showRoleColumn: !e.isFreeWorkspace() && t,
        showSeatTypeColumn: t && (jt(e.data) || et(e.id))
    }
}

function yn(e) {
    "use forget";
    let t = (0, Dn.c)(2),
        n;
    return t[0] === e ? n = t[1] : (n = (0, Y.jsx)(bn, {
        ...e
    }, e.workspace.id), t[0] = e, t[1] = n), n
}

function bn({
    workspace: e,
    onCancel: t,
    cancelButtonText: n,
    onSuccess: i,
    fullWidthButtons: a = !1,
    showCancelButton: o = !0,
    csvButtonAlignedWithPrimary: s = !1,
    contentClassName: c,
    initialEmails: l,
    defaultInviteSeatType: u,
    showRoleColumn: d,
    showSeatTypeColumn: f,
    inviteLayout: m = `table`,
    initialEmptyRowCount: h = 1,
    maxInvites: g = null,
    availablePaidSeatCounts: _,
    emptyStatePrimaryButtonText: v,
    onEmptySubmit: ee,
    enableImmediateInvoiceSeatPurchase: y = !1,
    onImmediateInvoiceStepChange: b,
    onImmediateInvoiceUpdatingChange: S
}) {
    "use no forget";
    let [C] = (0, J.useState)(() => Gt(e)), w = (0, J.useRef)(!1);
    (0, J.useEffect)(() => {
        w.current = !0;
        let e = e => {
            e.persisted || C.exit()
        };
        return window.addEventListener(`pagehide`, e), () => {
            w.current = !1, window.removeEventListener(`pagehide`, e), queueMicrotask(() => {
                w.current || C.exit()
            })
        }
    }, [C]);
    let te = jn(l),
        {
            showRoleColumn: ne,
            showSeatTypeColumn: re
        } = vn(e),
        E = d ?? ne,
        ie = f ?? re,
        ae = jt(e.data),
        D = et(e.id),
        {
            data: oe,
            isLoading: O
        } = x(e.id),
        se = e.isK12(),
        k = Le(e.id, se),
        ce = en({
            defaultInviteSeatTypeOverride: u,
            workspaceDefaultSeatType: oe?.default_seat_type,
            isUsageBasedSeatEnabled: ae,
            isPremiumSeatEnabled: D,
            availablePaidSeatCounts: _
        }),
        le = se ? k : void 0,
        A = e.isFreeWorkspace() || se && !!k,
        ue = (0, J.useCallback)(() => {
            Vt(je.CHATGPT_WORKSPACE_INVITE_FLOW_DROPOFF_TYPE_CANCEL), t()
        }, [t]);
    return O ? (0, Y.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [(0, Y.jsx)(`div`, {
            className: T(`flex min-h-48 items-center justify-center`, c),
            children: (0, Y.jsx)(p, {
                className: `icon-lg text-token-text-tertiary`
            })
        }), o ? (0, Y.jsx)(`div`, {
            className: T(`flex w-full flex-shrink-0 flex-col gap-2`, s ? `mt-0` : `mt-8`),
            children: (0, Y.jsx)(r, {
                color: `ghost`,
                size: a ? `large` : `medium`,
                onClick: ue,
                children: n
            })
        }) : null]
    }) : (0, Y.jsx)(xn, {
        inviteFlowAnalytics: C,
        onCancel: ue,
        cancelButtonText: n,
        fullWidthButtons: a,
        showCancelButton: o,
        csvButtonAlignedWithPrimary: s,
        contentClassName: c,
        workspace: e,
        onSuccess: i,
        initialEmails: te,
        k12InviteDomain: k,
        maxInvites: g,
        availablePaidSeatCounts: _,
        showRoleColumn: E,
        showSeatTypeColumn: ie,
        includeUsageBasedSeatType: ae && _ == null,
        includePremiumSeatType: D,
        defaultInviteSeatType: ce,
        shouldCheckDomainMismatch: A,
        allowedDomain: le,
        inviteLayout: m,
        initialEmptyRowCount: h,
        emptyStatePrimaryButtonText: v,
        onEmptySubmit: ee,
        enableImmediateInvoiceSeatPurchase: y,
        onImmediateInvoiceStepChange: b,
        onImmediateInvoiceUpdatingChange: S
    })
}

function xn({
    inviteFlowAnalytics: e,
    onCancel: t,
    cancelButtonText: n,
    fullWidthButtons: a,
    showCancelButton: o,
    csvButtonAlignedWithPrimary: c,
    contentClassName: l,
    workspace: d,
    onSuccess: f,
    initialEmails: p,
    k12InviteDomain: g,
    maxInvites: _,
    availablePaidSeatCounts: v,
    showRoleColumn: y,
    showSeatTypeColumn: b,
    includeUsageBasedSeatType: x,
    includePremiumSeatType: S,
    defaultInviteSeatType: C,
    shouldCheckDomainMismatch: w,
    allowedDomain: te,
    inviteLayout: re,
    initialEmptyRowCount: E,
    emptyStatePrimaryButtonText: ie,
    onEmptySubmit: ae,
    enableImmediateInvoiceSeatPurchase: D,
    onImmediateInvoiceStepChange: oe,
    onImmediateInvoiceUpdatingChange: O
}) {
    "use no forget";
    let {
        search: k
    } = fe(), le = Mn({
        workspace: d,
        inviteFlowAnalytics: e,
        onSuccess: f,
        k12InviteDomain: g,
        initialEmails: p,
        maxInvites: _,
        availablePaidSeatCounts: v,
        showRoleColumn: y,
        showSeatTypeColumn: b,
        includeUsageBasedSeatType: x,
        includePremiumSeatType: S,
        defaultInviteSeatType: C
    }), A = xe(), ue = s(), [j, de] = (0, J.useState)(!1), [M, pe] = (0, J.useState)(null), me = (0, J.useRef)(null), P = (0, J.useCallback)((e = !0) => {
        me.current?.(e), me.current = null
    }, []);
    (0, J.useEffect)(() => () => {
        P(!1)
    }, [P]);
    let {
        clearState: ge,
        emailTableRows: F,
        emailTextAreaValue: _e,
        emailsOutsideOfDomain: I,
        fileInputRef: ve,
        handleClickImportCSV: ye,
        handleDeleteRow: be,
        handleInputChange: Se,
        handleSubmit: Ce,
        handleUploadCSV: we,
        hasUploadedCsv: Te,
        isInviting: Oe,
        setEmailTableRows: Ae,
        setEmailTextAreaValue: je,
        trackNavigationClick: Me,
        defaultInviteRole: Ne,
        INVITE_ROLES: L
    } = le, Pe = he(), Fe = mn(F), R = D && d.isOwnerOfAccount() && d.isSelfServeBusiness() && d.hasPaidSubscription() && d.data.subscriptionStatus.trial?.isTrialing !== !0 && it(d.id), Le = R && et(d.id), {
        billingPageConfigsQuery: ze,
        planManagementConfig: Be,
        isError: He,
        isLoading: Ue
    } = Ie({
        activeWorkspaceId: d.id,
        enabled: R
    }), Ke = Re(Be)?.can_change_paid_seat_quantity === !0, Ye = ze.data?.invite_prepurchase, Xe = Ye?.workspace_id === d.id && Ye.skip_invite_prepurchase, $e = R && !Xe && Ke, {
        data: B,
        isLoading: tt
    } = Ee(), nt = gt(B), {
        country: ot
    } = ke(), {
        billingDetails: st,
        status: lt
    } = Ve({
        country: ot,
        currentAccount: d,
        enabled: $e,
        location: `AdminInviteFlow.immediateInvoice`,
        pricingPlanIsTypeBusiness: !0
    }), dt = nt == null ? ot : nt.countryCode, mt = nt?.billingCurrency ?? st?.currency, vt = u({
        countryCode: dt,
        currency: mt,
        enabled: R && Ke && st != null
    }), {
        data: bt,
        isError: xt,
        isLoading: St
    } = vt, Ct = nt == null || bt == null ? null : Qe(bt, nt);
    (0, J.useEffect)(() => {
        Ct != null && i.count(ne.TEAMS, `business_manage_seats_checkout_pricing_identity_match`, {
            entry_point: `admin_invite`,
            matches_subscription_pricing_identity: String(Ct)
        })
    }, [Ct]);
    let wt = bt,
        Et = [`checkout-pricing-config`, dt ?? null, mt ?? null],
        {
            data: H,
            isLoading: Dt
        } = Ze(d.isSelfServeBusiness() ? d.id : void 0),
        W = Je(H),
        Ot = H != null && at(H) >= W,
        jt = B != null && (ht(B, `prolite`) > 0 || (H?.seat_type_counts?.prolite ?? 0) > 0),
        {
            data: Mt,
            isLoading: Pt
        } = _t(d.id, 0, ``),
        {
            data: Rt
        } = yt(d.isSelfServeBusiness() ? At : ``),
        G = R && (!jt || Le) ? ct({
            accountId: d.id,
            checkoutPricingConfig: wt,
            isSciAccount: !1,
            isSeatTypeCountsLoading: Dt,
            seatTypeCounts: H,
            showPremiumSeats: Le,
            subscription: B
        }) : null,
        zt = R && (St || xt || G == null),
        Bt = d.isSelfServeBusiness() && kt(Rt),
        {
            data: Vt,
            isLoading: Ht
        } = De(Bt || R ? d.id : void 0, 0, ``, 100),
        Ut = (Mt?.items ?? []).map(e => e.email_address).filter(e => !!e),
        Gt = (Vt?.items ?? []).map(e => e.email).filter(e => !!e),
        Kt = (Vt?.items ?? []).filter(e => It(e.seat_type, {
            includeProlite: !0
        }) === Lt).map(e => e.email).filter(e => !!e),
        qt = (Mt?.items ?? []).filter(e => It(e.seat_type, {
            includeProlite: !0
        }) === Lt).map(e => e.email_address).filter(e => !!e),
        Jt = (Vt?.items ?? []).filter(e => It(e.seat_type, {
            includeProlite: !0
        }) === `prolite`).map(e => e.email).filter(e => !!e),
        Xt = (Mt?.items ?? []).filter(e => It(e.seat_type, {
            includeProlite: !0
        }) === `prolite`).map(e => e.email_address).filter(e => !!e),
        Zt = F.slice(0, _ ?? 1 / 0).some(e => {
            let t = e.email.trim();
            return t.length > 0 && !m.test(t)
        }),
        {
            isOverFreeTrialInviteLimit: Qt
        } = _n({
            rows: F,
            seatsInUse: B?.seats_in_use,
            seatsEntitled: B?.seats_entitled,
            existingActiveMemberEmails: Gt,
            existingPendingInviteEmails: Ut,
            hasActiveBusinessFreeTrial: Bt
        }),
        {
            paidStandardSeatCapacity: en,
            paidPremiumSeatCapacity: rn,
            standardSeatCapacityShortfall: an,
            premiumSeatCapacityShortfall: cn,
            totalSeatCapacityShortfall: fn
        } = on({
            rows: F,
            showSeatTypeColumn: b || v != null,
            includeUsageBasedSeatType: x,
            includePremiumSeatType: S || v != null,
            defaultInviteSeatType: C,
            maxInvites: _,
            subscription: B,
            workspaceSeatTypeCounts: H,
            hasPremiumSeats: jt,
            hasActiveBusinessFreeTrial: Bt,
            isImmediateInvoiceRolloutEnabled: R,
            isBusinessPremiumSeatPurchaseReviewEnabled: Le,
            existingActiveStandardMemberEmails: Kt,
            existingPendingStandardInviteEmails: qt,
            existingActivePremiumMemberEmails: Jt,
            existingPendingPremiumInviteEmails: Xt
        }),
        {
            availableStandardSeats: hn,
            availablePremiumSeats: gn
        } = $t({
            subscription: B,
            workspaceSeatTypeCounts: H,
            paidStandardSeatCapacity: en,
            paidPremiumSeatCapacity: rn
        });
    (0, J.useEffect)(() => {
        h()?.id === d.id && e.updateContext(Wt(d, B))
    }, [e, B, d]);
    let vn = B == null ? null : ft(B, `default`, en) + ft(B, `prolite`, rn),
        yn = H != null && vn != null && vn >= W,
        bn = tt || Dt || Ht || Pt || B == null || H == null || Vt == null || Mt == null,
        xn = R && !Xe && !Bt && (Ke || Be == null && (Ue || He)),
        Cn = {
            standard: an,
            premium: cn
        },
        wn = G == null ? null : {
            standard: en,
            premium: rn
        },
        Tn = G == null || B == null ? null : {
            standard: ft(B, `default`, en),
            premium: ft(B, `prolite`, rn)
        },
        K = Tn == null || B == null ? null : ut({
            capacityShortfallSeatCounts: Cn,
            initialRenewalSeatCounts: Tn,
            subscription: B
        }),
        q = sn({
            subscription: B,
            capacityShortfallSeatCounts: Cn
        }),
        En = q?.scheduledRemovalSeatCounts.standard ?? 0,
        Dn = q?.scheduledRemovalSeatCounts.premium ?? 0,
        On = q?.scheduledDowngradeCount ?? 0,
        X = En + Dn,
        kn = X + On,
        Z = En === Cn.standard && Dn + On === Cn.premium,
        jn = On === 0 || Tn != null && K != null && K.standard + On === Tn.standard + Cn.standard,
        Pn = xn && fn > 0,
        Fn = Pn && (He || lt === `error` || xt),
        In = K == null ? null : K.standard + K.premium,
        Ln = In != null && In >= W,
        Rn = In != null && In > W,
        zn = d.isAdminOfAccount() || d.isOwnerOfAccount(),
        Bn = Pn,
        Vn = Bn && Ln,
        Hn = q != null && Z && jn && !Rn && !Fn,
        Un = Bn ? (0, Y.jsxs)(`div`, {
            className: `border-token-border-status-warning bg-token-bg-status-warning text-token-text-status-warning flex w-full items-center gap-5 rounded-[20px] border px-6 py-4 shadow-[0_1px_6px_rgba(0,0,0,0.06)]`,
            children: [(0, Y.jsx)(ce, {
                className: `size-6 shrink-0`
            }), (0, Y.jsxs)(`div`, {
                className: `flex min-w-0 flex-1 flex-col gap-0.5`,
                children: [(0, Y.jsx)(`div`, {
                    className: `text-sm leading-5 font-semibold`,
                    children: Hn ? X > 0 && q.scheduledDowngradeCount > 0 ? (0, Y.jsx)(N, {
                        ...Q.scheduledSeatChangesCanceledWarningTitle,
                        values: {
                            scheduledSeatChangeCount: kn
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
                            count: fn
                        }
                    })
                }), (0, Y.jsxs)(`div`, {
                    className: `text-sm leading-5`,
                    children: [Rn ? (0, Y.jsx)(N, {
                        ...Q.additionalPaidSeatsExceedMaximumWarningBody,
                        values: {
                            maxSeats: W
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
                        ...Fe === 1 ? Q.additionalPaidSeatsNeededForSingleInviteWarningBody : Q.additionalPaidSeatsNeededWarningBody,
                        values: {
                            count: fn
                        }
                    }), Ln && (0, Y.jsx)(pt, {
                        className: `mt-1`,
                        maximumSeats: W,
                        seatCount: In ?? 0,
                        variant: `inline`
                    })]
                })]
            }), Fn && !Rn && (0, Y.jsx)(r, {
                color: `secondary`,
                loading: ze.isFetching || vt.isFetching || Pe.isFetching({
                    queryKey: Et
                }) > 0,
                size: `small`,
                type: `button`,
                onClick: () => {
                    He && ze.refetch(), lt === `error` && Pe.invalidateQueries({
                        queryKey: Et
                    }), xt && vt.refetch()
                },
                children: (0, Y.jsx)(N, {
                    ...Q.retrySeatPurchaseBillingButton
                })
            })]
        }) : null,
        Wn = (Ot || yn) && !Vn ? (0, Y.jsx)(pt, {
            maximumSeats: W,
            seatCount: Math.max(at(H), vn ?? 0)
        }) : null,
        Gn = Qt ? (0, Y.jsxs)(`div`, {
            className: `border-token-border-light bg-token-main-surface-primary flex w-full items-center gap-5 rounded-[20px] border px-6 py-4 shadow-[0_1px_6px_rgba(0,0,0,0.06)]`,
            children: [(0, Y.jsx)(ce, {
                className: `text-token-text-secondary size-6 shrink-0`
            }), (0, Y.jsxs)(`div`, {
                className: `flex min-w-0 flex-1 flex-col gap-0.5`,
                children: [(0, Y.jsx)(`div`, {
                    className: `text-token-text-primary text-sm leading-5 font-semibold`,
                    children: (0, Y.jsx)(N, {
                        ...Q.freeTrialInviteLimitWarningTitle
                    })
                }), (0, Y.jsx)(`div`, {
                    className: T(`text-token-text-secondary text-sm leading-5`, !zn && `max-w-[500px]`),
                    children: zn ? (0, Y.jsx)(N, {
                        ...Q.freeTrialInviteLimitWarning
                    }) : (0, Y.jsx)(N, {
                        ...Q.freeTrialInviteLimitWarningAskAdmin
                    })
                })]
            }), zn && (0, Y.jsx)(`a`, {
                href: se(`/admin/billing`, k),
                className: `bg-token-text-primary text-token-main-surface-primary inline-flex h-9 shrink-0 items-center justify-center rounded-full px-4 text-sm font-semibold hover:opacity-90`,
                children: (0, Y.jsx)(N, {
                    ...Q.upgradeButton
                })
            })]
        }) : null,
        Kn = ae != null && Fe === 0,
        $ = re === `stacked`,
        qn = !y && !b ? `w-[calc(100%-3rem)]` : y === b ? `w-[56%]` : `w-[68%]`;
    (0, J.useEffect)(() => {
        j || F.length > 0 || Ae(tn({
            rows: Array.from({
                length: _ == null ? E : Math.min(E, _)
            }, () => An({
                role: Ne,
                seatType: C
            })),
            defaultInviteSeatType: C,
            availablePaidSeatCounts: v
        }))
    }, [v, Ne, C, F.length, E, j, _, Ae]);
    let Jn = (0, Y.jsx)(ee, {
            label: A.formatMessage(Q.importCSVTooltip),
            contentClassName: `w-[280px]`,
            side: `top`,
            delayDuration: 200,
            children: (0, Y.jsx)(r, {
                color: c ? `ghost` : `secondary`,
                className: T($ && `h-11 rounded-full border-0 bg-transparent! px-5 text-[14px] font-normal text-[#5D5D5D] shadow-none hover:bg-[#F7F7F7]! dark:bg-transparent! dark:text-white/70 dark:hover:bg-white/6!`),
                icon: Ge,
                iconClassName: T($ && `text-[#5D5D5D] dark:text-white/70`),
                onClick: ye,
                children: (0, Y.jsx)(N, {
                    ...Te ? Q.reimportCSVButton : Q.importCSVButton
                })
            })
        }),
        Yn = e => {
            let t = _ == null ? e.filter((e, t, n) => n.findIndex(t => t.value === e.value) === t) : Yt(e);
            _ != null && t.length > _ && ue.warning(A.formatMessage(Q.inviteLimitWarning, {
                maxInvites: _
            }), {
                duration: 5,
                id: `admin_invite_limit`
            });
            let n = dn(t, _);
            je(n), Ae(e => pn(n, e, {
                availablePaidSeatCounts: v,
                defaultRole: Ne,
                defaultSeatType: C
            }))
        },
        Xn = () => o ? (0, Y.jsx)(r, {
            color: `ghost`,
            size: a ? `large` : `medium`,
            onClick: () => {
                ge(), t(), Me({
                    buttonType: `Skip`
                })
            },
            children: n
        }) : null,
        Zn = () => {
            if (!B || B.active_until == null || st == null || zt || G == null || wn == null || Tn == null || K == null) return;
            let e = un({
                    rows: ln({
                        availablePaidSeatCounts: v,
                        rows: F,
                        defaultInviteRole: Ne,
                        defaultInviteSeatType: C,
                        includePremiumSeatType: S,
                        includeUsageBasedSeatType: x,
                        maxInvites: _,
                        showRoleColumn: y,
                        showSeatTypeColumn: b
                    }),
                    workspace: d
                }),
                t = {
                    default: Math.max(0, K.standard - wn.standard),
                    prolite: Math.max(0, K.premium - wn.premium)
                };
            U(e, {
                step: `action_initiated`
            }), U(e, {
                step: `capacity_evaluated`,
                capacityResult: t.default+t.prolite > 0 ? `purchase_required` : `capacity_change_required`,
                availablePaidSeatCounts: {
                    default: hn,
                    prolite: gn
                },
                additionalPaidSeatCounts: t,
                billingInterval: G.billingPeriod
            }), pe({
                analyticsFlow: e,
                currentPaidSeatCounts: wn,
                initialRenewalSeatCounts: Tn,
                updatedSeatCounts: K
            }), oe?.(!0, !0)
        },
        Qn = e => (0, Y.jsx)(r, {
            className: T(e, a && !$ && `w-full`, $ && `mx-auto w-full max-w-[400px]`),
            color: `primary`,
            size: a ? `large` : `medium`,
            loading: Oe,
            disabled: Oe || !Kn && Fe === 0 || I.length > 0 || Qt || xn && bn || Pn && (Ue || He || Zt || st == null || B?.active_until == null || Rn || zt),
            onClick: () => {
                if (Kn) {
                    ae?.(), Me({
                        buttonType: `Send`
                    });
                    return
                }
                if (!rt({
                        accountId: d.id,
                        currentAccount: d,
                        subscription: B,
                        wouldChangePaidCapacity: R && !Xe && !bn && fn > 0
                    })) {
                    if (Pn) Zn();
                    else {
                        let e = un({
                            rows: ln({
                                availablePaidSeatCounts: v,
                                rows: F,
                                defaultInviteRole: Ne,
                                defaultInviteSeatType: C,
                                includePremiumSeatType: S,
                                includeUsageBasedSeatType: x,
                                maxInvites: _,
                                showRoleColumn: y,
                                showSeatTypeColumn: b
                            }),
                            workspace: d
                        });
                        U(e, {
                            step: `action_initiated`
                        }), xn && U(e, {
                            step: `capacity_evaluated`,
                            capacityResult: `seat_available`,
                            availablePaidSeatCounts: {
                                default: hn,
                                prolite: gn
                            },
                            paymentRequired: !1
                        }), Ce(e, xn)
                    }
                    Me({
                        buttonType: `Send`
                    })
                }
            },
            children: Kn ? ie ?? A.formatMessage(Q.inviteMemberInviteSubmitButton) : A.formatMessage(Oe ? Q.inviteMemberInviteSubmitButtonLoading : Pn ? Q.inviteMemberContinueButton : Q.inviteMemberInviteSubmitButton)
        });
    if (M != null && B != null && B.active_until != null && st != null) return G == null ? null : (0, Y.jsx)(Tt, {
        embedded: !0,
        accountId: d.id,
        analyticsFlow: M.analyticsFlow,
        billingPeriod: G.billingPeriod,
        confirmChangesButtonMessage: Q.inviteMemberUpdateSeatsAndSendInvitesButton,
        confirmPurchaseButtonMessage: Q.inviteMemberPurchaseSeatsAndSendInvitesButton,
        currency: G.currency,
        currentPaidSeatCounts: M.currentPaidSeatCounts,
        initialRenewalSeatCounts: M.initialRenewalSeatCounts,
        initialSeatCounts: M.currentPaidSeatCounts,
        maxSeats: W,
        nextBillingDate: G.nextBillingDate,
        onBack: () => {},
        onBeforeInitialSubmit: () => {
            me.current ??= e.startAction()
        },
        onClose: () => {
            P(), pe(null), oe?.(!1)
        },
        onComplete: async e => {
            e && await Ce(M.analyticsFlow, !0, !0), P()
        },
        onUpdatingChange: O,
        premiumSeatMonthlyPrice: G.premiumSeatMonthlyPrice,
        showPremiumSeats: Le,
        standardSeatMonthlyPrice: G.standardSeatMonthlyPrice,
        updatedSeatCounts: M.updatedSeatCounts
    });
    if (j) return (0, Y.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [(0, Y.jsxs)(`div`, {
            className: T(`flex flex-col gap-4`, l),
            children: [(0, Y.jsx)(`input`, {
                ref: ve,
                type: `file`,
                accept: `.csv,text/csv`,
                id: `upload-csv`,
                className: `hidden`,
                onChange: e => {
                    (async () => {
                        await we(e) && de(!0)
                    })()
                }
            }), I.length > 0 && (0, Y.jsx)(`div`, {
                className: `flex w-full items-center bg-red-100 p-4`,
                children: (0, Y.jsxs)(`div`, {
                    className: `grow text-red-700`,
                    children: [(0, Y.jsx)(N, {
                        ...Q.prohibitedExternalEmailDescription
                    }), (0, Y.jsx)(`pre`, {
                        className: `my-1`,
                        children: I.join(`, `)
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
            }), !c && (0, Y.jsx)(`div`, {
                className: `flex w-full items-center justify-end`,
                children: Jn
            }), (0, Y.jsx)(Sn, {
                value: _e,
                onChange: Yn
            })]
        }), (0, Y.jsx)(`div`, {
            className: T(`flex w-full flex-shrink-0 flex-col gap-2`, c ? `mt-0` : `mt-8`),
            children: c ? (0, Y.jsxs)(Y.Fragment, {
                children: [(0, Y.jsxs)(`div`, {
                    className: T(`flex w-full gap-2`, a ? `flex-col` : `items-center justify-between`),
                    children: [(0, Y.jsx)(`div`, {
                        className: T(a ? `w-full` : `flex-shrink-0`),
                        children: Jn
                    }), (0, Y.jsx)(`div`, {
                        className: T(a ? `w-full` : `flex-shrink-0`),
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
        children: F.map((e, t) => (0, Y.jsx)(Nn, {
            email: e.email,
            index: t,
            emailInputList: F.map(({
                email: e
            }) => e),
            onEmailChange: e => Se(t, `email`, e),
            shouldCheckDomainMismatch: w,
            allowedDomain: te,
            layout: `stacked`
        }, t))
    });
    return (0, Y.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [(0, Y.jsxs)(`div`, {
            className: T(`flex flex-col gap-4`, l),
            children: [(0, Y.jsx)(`input`, {
                ref: ve,
                type: `file`,
                accept: `.csv,text/csv`,
                id: `upload-csv`,
                className: `hidden`,
                onChange: e => {
                    (async () => {
                        await we(e) && de(!0)
                    })()
                }
            }), I.length > 0 && (0, Y.jsx)(`div`, {
                className: `flex w-full items-center bg-red-100 p-4`,
                children: (0, Y.jsxs)(`div`, {
                    className: `grow text-red-700`,
                    children: [(0, Y.jsx)(N, {
                        ...Q.prohibitedExternalEmailDescription
                    }), (0, Y.jsx)(`pre`, {
                        className: `my-1`,
                        children: I.join(`, `)
                    }), (0, Y.jsx)(N, {
                        ...Q.prohibitedExternalEmailResolution
                    })]
                })
            }), Gn, Un, Wn, re === `stacked` ? $n : (0, Y.jsxs)(z.Root, {
                size: `normal`,
                fixed: !0,
                children: [(0, Y.jsxs)(`colgroup`, {
                    children: [(0, Y.jsx)(`col`, {
                        className: qn
                    }), y && (0, Y.jsx)(`col`, {
                        className: b ? `w-[20%]` : `w-[28%]`
                    }), b && (0, Y.jsx)(`col`, {
                        className: y ? `w-[20%]` : `w-[28%]`
                    }), (0, Y.jsx)(`col`, {
                        className: `w-12`
                    })]
                }), (0, Y.jsxs)(z.Header, {
                    children: [(0, Y.jsx)(z.HeaderCell, {
                        className: `dark:bg-transparent`,
                        children: (0, Y.jsx)(N, {
                            ...Q.inviteTableHeaderEmail
                        })
                    }), y && (0, Y.jsx)(z.HeaderCell, {
                        className: `w-32 ps-3 dark:bg-transparent`,
                        children: (0, Y.jsx)(N, {
                            ...Q.inviteTableHeaderRole
                        })
                    }), b && (0, Y.jsx)(z.HeaderCell, {
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
                            children: (0, Y.jsx)(Nn, {
                                email: e.email,
                                index: t,
                                emailInputList: F.map(({
                                    email: e
                                }) => e),
                                onEmailChange: e => Se(t, `email`, e),
                                shouldCheckDomainMismatch: w,
                                allowedDomain: te,
                                ariaLabel: A.formatMessage(Q.inviteTableHeaderEmail),
                                layout: `table`
                            })
                        }), y && (0, Y.jsx)(z.Cell, {
                            verticalAlign: `middle`,
                            divClassName: `min-h-14 items-center`,
                            children: (0, Y.jsxs)(V.Root, {
                                value: e.role,
                                onValueChange: e => Se(t, `role`, e),
                                children: [(0, Y.jsxs)(V.Trigger, {
                                    className: `w-32 justify-between`,
                                    children: [(0, Y.jsx)(V.Value, {}), (0, Y.jsx)(V.Icon, {})]
                                }), (0, Y.jsx)(V.Portal, {
                                    children: (0, Y.jsxs)(V.Content, {
                                        className: `border-token-main-surface-secondary border`,
                                        children: [(0, Y.jsx)(V.Item, {
                                            value: L.member,
                                            children: (0, Y.jsx)(N, {
                                                ...Q.inviteRoleMember
                                            })
                                        }), L.analytics_viewer && (0, Y.jsx)(V.Item, {
                                            value: L.analytics_viewer,
                                            children: (0, Y.jsx)(N, {
                                                ...Q.inviteRoleAnalyticsViewer
                                            })
                                        }), L.admin && (0, Y.jsx)(V.Item, {
                                            value: L.admin,
                                            children: (0, Y.jsx)(N, {
                                                ...Q.inviteRoleAdmin
                                            })
                                        }), L.owner && (0, Y.jsx)(V.Item, {
                                            value: L.owner,
                                            children: (0, Y.jsx)(N, {
                                                ...Q.inviteRoleOwner
                                            })
                                        })]
                                    })
                                })]
                            })
                        }), b && (0, Y.jsx)(z.Cell, {
                            verticalAlign: `middle`,
                            divClassName: `min-h-14 items-center`,
                            children: (0, Y.jsx)(Ft, {
                                workspaceId: d.id,
                                currentSeatType: e.seatType,
                                includeUsageBased: x,
                                includeProlite: S,
                                preserveProlite: v != null,
                                disabledSeatTypes: nn({
                                    rows: F,
                                    currentSeatType: e.seatType,
                                    availablePaidSeatCounts: v
                                }),
                                onUpdateSeatType: e => {
                                    Se(t, `seatType`, e)
                                },
                                triggerClassName: `w-36 justify-between`,
                                contentClassName: `border-token-border-default border`
                            })
                        }), (0, Y.jsx)(z.Cell, {
                            textAlign: `right`,
                            verticalAlign: `middle`,
                            divClassName: `min-h-14 items-center justify-end`,
                            children: (0, Y.jsx)(qe, {
                                onClick: () => be(t),
                                className: `icon-sm text-token-text-secondary me-2 cursor-pointer`
                            })
                        })]
                    }, t))
                })]
            }), (0, Y.jsxs)(`div`, {
                className: T(`align-center mb-4 flex`, $ ? `mx-auto w-full max-w-[400px] items-center justify-between` : `justify-between`),
                children: [_ == null || F.length < _ ? (0, Y.jsx)(r, {
                    color: `secondary`,
                    className: T($ && `h-11 rounded-full border border-black/10 bg-white px-5 text-[14px] font-normal text-[#5D5D5D] shadow-none hover:bg-[#F7F7F7] dark:border-white/12 dark:bg-transparent dark:text-white/70 dark:hover:bg-white/6`),
                    iconClassName: T($ && `text-[#5D5D5D] dark:text-white/70`),
                    onClick: () => {
                        Ae(e => tn({
                            rows: [...e, An({
                                role: Ne,
                                seatType: C
                            })],
                            defaultInviteSeatType: C,
                            availablePaidSeatCounts: v
                        }))
                    },
                    icon: We,
                    children: (0, Y.jsx)(N, {
                        ...Q.addEmailButton
                    })
                }) : null, !c && Jn]
            })]
        }), (0, Y.jsx)(`div`, {
            className: T(`flex w-full flex-shrink-0 flex-col gap-2`, c ? `mt-0` : $ ? `mt-4` : `mt-8`),
            children: c ? (0, Y.jsxs)(Y.Fragment, {
                children: [(0, Y.jsxs)(`div`, {
                    className: T(`flex w-full gap-2`, a ? `flex-col` : `items-center justify-between`),
                    children: [(0, Y.jsx)(`div`, {
                        className: T(a ? `w-full` : `flex-shrink-0`),
                        children: Jn
                    }), (0, Y.jsx)(`div`, {
                        className: T(a ? `w-full` : `flex-shrink-0`),
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
    let t = ae(),
        n = (0, J.useMemo)(() => t?.subscriptionAnalyticsParams, [t]);
    return (0, Y.jsx)(Ct, {
        trackEmailsAdded: (0, J.useCallback)(e => {
            l.logEvent(`Account Pay: Collaborator Emails Added`, {
                ...n,
                ...e
            })
        }, [n]),
        trackEmailRemoved: (0, J.useCallback)(e => {
            l.logEvent(`Account Pay: Collaborator Email Removed`, {
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
        n = s(),
        {
            search: i
        } = fe();
    return I({
        mutationFn: async ({
            emails: a,
            role: o,
            seatType: s,
            analyticsFlowId: c,
            submissionId: l
        }) => {
            let u = [],
                d = Math.max(5, Math.round(a.length / 10));
            for (let e = 0; e < a.length; e += d) u.push(a.slice(e, e + d));
            let f = async a => {
                try {
                    let r = await g.safePost(`/accounts/{account_id}/invites`, {
                        parameters: {
                            path: {
                                account_id: e.id
                            }
                        },
                        requestBody: {
                            email_addresses: a,
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
                } catch (a) {
                    let o = a instanceof _ && a.status === 401 && (a.code === `workspace_subscription_delinquent` || a.code == null && a.message === `Team has a delinquent subscription`),
                        s = o ? e.isOwnerOfAccount() ? t.formatMessage({
                            id: `admin-invite.paymentRequired.owner`,
                            defaultMessage: `Invitations couldn't be sent because your workspace has an unpaid subscription. Update your payment details, then try sending the invitations again.`
                        }) : t.formatMessage({
                            id: `admin-invite.paymentRequired.member`,
                            defaultMessage: `Invitations couldn't be sent because your workspace has an unpaid subscription. Ask a workspace owner to update the payment details, then try again.`
                        }) : a instanceof Error ? a.message : `Failed to invite members`;
                    return n.danger(s, {
                        toastId: `admin_invite`,
                        loggingTitle: `Failed to invite members`,
                        loggingDescription: s,
                        action: o && e.isOwnerOfAccount() ? (0, Y.jsx)(r, {
                            as: `a`,
                            to: se(`/admin/billing`, i),
                            openNewTab: !0,
                            color: `primary`,
                            size: `small`,
                            children: (0, Y.jsx)(N, {
                                id: `admin-invite.paymentRequired.updatePayment`,
                                defaultMessage: `Update payment`
                            })
                        }) : void 0
                    }), {
                        firstError: a,
                        paymentRequired: o ? !0 : void 0,
                        successfulInviteCount: 0,
                        alreadyMemberCount: 0
                    }
                }
            }, p = await Promise.all(u.map(e => f(e)));
            return {
                firstError: p.find(({
                    firstError: e
                }) => e != null)?.firstError,
                paymentRequired: p.some(e => e.paymentRequired) ? !0 : !p.every(e => e.paymentRequired === !1) && void 0,
                successfulInviteCount: p.reduce((e, t) => e + t.successfulInviteCount, 0),
                alreadyMemberCount: p.reduce((e, t) => e + t.alreadyMemberCount, 0)
            }
        }
    })
}

function wn(e) {
    let t = e?.trim() ?? ``;
    return t.startsWith(`"`) && t.endsWith(`"`) || t.startsWith(`'`) && t.endsWith(`'`) ? t.slice(1, -1).trim() : t
}

function Tn(e, t, n) {
    let r = wn(e).toLowerCase().replaceAll(`-`, `_`).replaceAll(` `, `_`);
    return t.has(r) ? r : n
}

function K(e, t) {
    switch (wn(e).toLowerCase().replaceAll(`-`, `_`).replaceAll(` `, `_`)) {
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

function q(e, {
    allowedRoles: t,
    defaultRole: n,
    defaultSeatType: r
}) {
    let i = e.split(/\r?\n/),
        a = new Set;
    return i.reduce((e, i) => {
        let [o = ``, s = ``, c = ``] = i.split(`,`), l = wn(o);
        return m.test(l) && !a.has(l) && e.push(An({
            email: l,
            role: Tn(s, t, n),
            seatType: K(c, r)
        })), a.add(l), e
    }, [])
}

function En(e, t, n, r) {
    return new Promise(i => {
        if (e.size / (1024 * 1024) > On) i({
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
                    newRows: q(a, {
                        allowedRoles: t,
                        defaultRole: n,
                        defaultSeatType: r
                    })
                })
            }
        }
    })
}
var Dn, J, Y, On, X, kn, Z, An, jn, Mn, Nn, Pn, Q, Fn = e((() => {
    Dn = be(), b(), He(), Ke(), Ue(), D(), B(), f(), St(), Ae(), c(), ue(), L(), nt(), tt(), wt(), $e(), dt(), Et(), Dt(), Ot(), st(), Pt(), we(), Ce(), Xe(), Me(), xt(), lt(), bt(), Ye(), ot(), Oe(), v(), M(), O(), de(), le(), Ne(), o(), n(), a(), re(), w(), Mt(), ye(), A(), J = t(F()), ge(), P(), _e(), Te(), Be(), te(), Kt(), Qt(), cn(), Y = pe(), On = 25, X = 3, kn = 10, Z = [], An = ({
        email: e = ``,
        role: t,
        seatType: n
    }) => ({
        email: e,
        role: t,
        seatType: n
    }), jn = e => {
        if (!e?.length) return Z;
        let t = new Set,
            n = [];
        return e.slice(0, X).forEach(e => {
            let r = e.trim();
            if (!r) return;
            let i = r.toLowerCase();
            t.has(i) || (t.add(i), n.push(r))
        }), n
    }, Mn = ({
        workspace: e,
        inviteFlowAnalytics: t,
        onSuccess: n,
        k12InviteDomain: r,
        initialEmails: i,
        maxInvites: a,
        showRoleColumn: o,
        showSeatTypeColumn: c,
        includeUsageBasedSeatType: u,
        includePremiumSeatType: f,
        defaultInviteSeatType: p,
        availablePaidSeatCounts: h
    }) => {
        "use no forget";
        let g = xe(),
            _ = he(),
            v = s(),
            ee = oe(`3528236309`).get(`can_see_analytics_viewer_role`, !1),
            b = ae(),
            x = e.isOwnerOfAccount(),
            S = (0, J.useRef)(null),
            C = Pn(x, ee, e.planType === d.ROSALIND_ACADEMIC),
            w = (0, J.useMemo)(() => {
                let t = e.isFreeWorkspace() ? `owner` : `member`;
                return C[t] ?? C.member
            }, [C, e]),
            te = tn({
                rows: (i ?? Z).map(e => An({
                    email: e,
                    role: w,
                    seatType: p
                })),
                defaultInviteSeatType: p,
                availablePaidSeatCounts: h
            }),
            [ne, re] = (0, J.useState)(!1),
            [T, E] = (0, J.useState)(!1),
            [D, O] = (0, J.useState)(te),
            [se, k] = (0, J.useState)([]),
            {
                mutateAsync: ce
            } = Cn(e),
            le = Pe(),
            A = ze() ?? !0,
            [ue, de] = (0, J.useState)(Z),
            M = (0, J.useMemo)(() => b?.subscriptionAnalyticsParams, [b]);
        (0, J.useEffect)(() => {
            let t = D.filter(({
                email: e
            }) => e.trim().length > 0);
            if (!t.length) {
                de(Z);
                return
            }
            let n = new Set;
            if (e.isK12() && r) {
                let e = r.toLowerCase();
                t.forEach(({
                    email: t
                }) => {
                    let r = t.trim(),
                        i = r.toLowerCase();
                    !i.endsWith(`@${e}`) && i.includes(`@`) && n.add(r)
                })
            }
            if (!A && le?.length) {
                let e = le.map(e => `@` + e.hostname.toLowerCase());
                t.map(({
                    email: e
                }) => e.trim()).filter(t => !e.some(e => t.toLowerCase().endsWith(e))).forEach(e => n.add(e))
            }
            let i = Array.from(n);
            de(i.length ? i : Z)
        }, [le, A, D, r, e]);
        let fe = (0, J.useCallback)(e => {
                let t = {
                    numEmailsAdded: e,
                    uploadType: `Bulk`
                };
                l.logEvent(`Account Pay: Collaborator Emails Added`, {
                    ...M,
                    ...t
                })
            }, [M]),
            pe = (0, J.useCallback)(async e => {
                let t = e.target.files?.[0];
                if (!t) return !1;
                let n = await En(t, new Set(Object.values(C)), w, p);
                if (n.status === `success`) {
                    let t = tn({
                        rows: Jt(n.newRows, a),
                        defaultInviteSeatType: p,
                        availablePaidSeatCounts: h
                    });
                    return a != null && gn(n.newRows).length > a && v.warning(g.formatMessage(Q.inviteLimitWarning, {
                        maxInvites: a
                    }), {
                        duration: 5,
                        id: `admin_invite_limit`
                    }), re(!0), O(t), k(t.map(e => ({
                        label: e.email,
                        value: e.email,
                        isValid: m.test(e.email)
                    }))), fe(t.length), e.target.files = null, !0
                }
                return n.reason === `file_too_large` ? v.danger(g.formatMessage(Q.fileTooLargeWarning, {
                    maxSize: `${On}MB`
                }), {
                    duration: 5,
                    loggingTitle: `CSV Upload: File too large`,
                    toastId: `csv_upload_too_large`,
                    loggingDescription: Q.fileTooLargeWarning.defaultMessage
                }) : n.reason === `invalid_file_type` && v.danger(g.formatMessage(Q.fileIncorrectTypeWarning), {
                    duration: 5,
                    loggingTitle: `CSV Upload: File incorrect type`,
                    toastId: `csv_upload`,
                    loggingDescription: Q.fileIncorrectTypeWarning.defaultMessage
                }), !1
            }, [C, h, w, p, g, a, v, fe]),
            me = (e, t, n) => {
                let r = [...D];
                r[e] = {
                    ...r[e],
                    [t]: n
                }, O(r)
            },
            N = (0, J.useCallback)(e => {
                l.logEvent(`Account Pay: Add Collaborators Modal Clicked`, {
                    ...M,
                    ...e
                })
            }, [M]),
            P = (0, J.useCallback)(() => {
                l.logEvent(`Account Pay: Add Collaborators Upload Clicked`, M)
            }, [M]),
            ge = (0, J.useCallback)(() => {
                l.logEvent(`Account Pay: Collaborator Email Removed`, M)
            }, [M]),
            F = (0, J.useCallback)(e => {
                let t = R(e);
                return l.logEvent(`Account Pay: Invite Collaborators Submitted`, {
                    ...M,
                    ...e
                }, t ? {
                    eventId: t
                } : void 0), t
            }, [M]),
            _e = e => {
                let t = [...D.slice(0, e), ...D.slice(e + 1)];
                O(t), ge()
            },
            I = (0, J.useCallback)(() => {
                O([]), E(!1), k([]), re(!1)
            }, []),
            ye = (0, J.useCallback)(async (r, i, a = !1) => {
                E(!0);
                let o = !1;
                try {
                    let s = ve();
                    r.length > 5 && v.info(g.formatMessage(Q.inviteMessageLoading, {
                        numRows: r.length
                    }), {
                        hasCloseButton: !0
                    });
                    let c = [
                            [`admin`, j.ADMIN],
                            [`owner`, j.OWNER],
                            [`member`, j.STANDARD],
                            [`analytics_viewer`, j.ANALYTICS_VIEWER]
                        ],
                        l = Array.from(r.reduce((e, t) => {
                            let n = c.find(([e]) => e === t.role)?.[1];
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
                        u = await Promise.allSettled(l.map(({
                            emails: e,
                            role: t,
                            seatType: n
                        }) => ce({
                            emails: e,
                            analyticsFlowId: i.flowId,
                            role: t,
                            seatType: n,
                            submissionId: s
                        }))),
                        d = u.reduce((e, t) => e + (t.status === `fulfilled` ? t.value.successfulInviteCount : 0), 0),
                        f = u.reduce((e, t) => e + (t.status === `fulfilled` ? t.value.alreadyMemberCount : 0), 0),
                        p;
                    for (let e of u) {
                        if (e.status === `rejected`) {
                            p = e.reason;
                            break
                        }
                        if (e.value.firstError != null) {
                            p = e.value.firstError;
                            break
                        }
                    }
                    t.recordResult(d + f, p == null), U(i, {
                        ...p != null && a ? {
                            actionFailureType: `mutation_failed`,
                            failedTargetCount: Math.max(0, r.length - d - f),
                            step: `action_attempt_failed`,
                            successfulTargetCount: d
                        } : zt({
                            affectedTargetCount: r.length,
                            successfulTargetCount: d,
                            alreadyMemberCount: f
                        }),
                        paymentRequired: u.some(e => e.status === `fulfilled` && e.value.paymentRequired) ? !0 : !u.every(e => e.status === `fulfilled` && e.value.paymentRequired === !1) && void 0
                    }), o = !0;
                    let m = F({
                        ...Bt(r),
                        numSuccessfulInvites: d
                    });
                    if (d > 0 && (setTimeout(() => {
                            _.invalidateQueries({
                                queryKey: [`workspace`, e.id, `invites`, 0, ``],
                                exact: !0
                            })
                        }, 1e3), v.success(g.formatMessage(Q.inviteSuccessToast, {
                            numRows: d,
                            userStr: d === 1 ? `user` : `users`,
                            workspaceName: ie(g, e)
                        }))), f > 0 && v.info(g.formatMessage({
                            id: `admin-invite.toast.already_member`,
                            defaultMessage: `{count, plural, one {Already a member — no invitation sent} other {# people are already members — no invitations sent}}`
                        }, {
                            count: f
                        })), y(Fe, r.length, {
                            action: `SubmitEmails`,
                            location: `modal-submit-button`,
                            text: `Submit`,
                            step: `AdminModal-CollectEmails-Submit`,
                            numSuccessfulInvites: d.toString(),
                            ...m ? {
                                unique_event_id: m
                            } : {}
                        }), p != null) throw p;
                    n?.(), I()
                } catch (e) {
                    throw t.recordResult(0, !1), o || U(i, {
                        step: a ? `action_attempt_failed` : `action_failed`,
                        actionFailureType: `mutation_failed`
                    }), e
                } finally {
                    E(!1)
                }
            }, [I, ce, t, g, n, _, v, F, e]),
            be = (0, J.useCallback)(async (n, r = !1, i = !1) => {
                let s = ln({
                        rows: D,
                        defaultInviteRole: w,
                        defaultInviteSeatType: p,
                        includePremiumSeatType: f,
                        includeUsageBasedSeatType: u,
                        maxInvites: a,
                        showRoleColumn: o,
                        showSeatTypeColumn: c,
                        availablePaidSeatCounts: h
                    }),
                    l = s.filter(e => e.seatType === Lt).length,
                    d = n ?? un({
                        rows: s,
                        workspace: e
                    });
                n ?? U(d, {
                    step: `action_initiated`
                });
                let m = t.startAction();
                try {
                    if (r) {
                        await ye(s, d, i);
                        return
                    }
                    if (l > 0) {
                        await H({
                            analyticsFlow: d,
                            workspace: e,
                            introducedDefaultSeatCount: l,
                            entrypoint: `workspace_onboarding_admin_invite`,
                            onContinue: async () => {
                                await ye(s, d)
                            }
                        });
                        return
                    }
                    U(d, {
                        step: `capacity_evaluated`,
                        capacityResult: `not_required`,
                        paymentRequired: !1
                    }), await ye(s, d)
                } finally {
                    m()
                }
            }, [h, w, p, D, f, u, t, o, c, ye, e, a]);
        return {
            INVITE_ROLES: C,
            defaultInviteRole: w,
            clearState: I,
            emailTableRows: D,
            emailTextAreaValue: se,
            emailsOutsideOfDomain: ue,
            fileInputRef: S,
            handleClickImportCSV: (0, J.useCallback)(() => {
                S.current?.value && (S.current.value = ``), S.current?.click(), typeof document < `u` && document.activeElement && setTimeout(() => {
                    document.activeElement?.blur?.()
                }, 0), P()
            }, [S, P]),
            handleDeleteRow: _e,
            handleInputChange: me,
            handleSubmit: be,
            handleUploadCSV: pe,
            hasUploadedCsv: ne,
            isInviting: T,
            setEmailTableRows: O,
            setEmailTextAreaValue: k,
            trackNavigationClick: N,
            trackUploadClick: P
        }
    }, Nn = ({
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
        let c = xe(),
            [l, u] = (0, J.useState)(!1),
            d = E(),
            f = (0, J.useMemo)(() => d ? Xt(d) : null, [d]),
            p = a ?? f,
            {
                hasMismatchedDomain: m,
                isDuplicate: h,
                isInvalid: g
            } = (0, J.useMemo)(() => Zt({
                email: e,
                index: t,
                emailInputList: n,
                inviteDomain: p,
                shouldCheckDomainMismatch: i
            }), [e, n, t, p, i]),
            _ = l && g,
            v = l && m,
            ee = h && !_ && !v,
            b = _ || v || ee,
            x = c.formatMessage(Q.emailInputPlaceholder);
        return (0, Y.jsxs)(`div`, {
            className: `flex w-full flex-col gap-1`,
            children: [(0, Y.jsx)(Se, {
                ariaLabel: o ?? x,
                name: `email`,
                type: `email`,
                value: e,
                placeholder: x,
                onBlur: () => {
                    u(!0), m && y(`chatgpt_business_workspace_invite_domain_mismatch`)
                },
                onChange: e => {
                    r(e.target.value)
                },
                color: `tertiary`,
                className: T(s === `stacked` ? `min-h-[48px] w-full overflow-hidden rounded-full! border border-black/6 bg-[#F7F7F7] px-5 py-3 shadow-none dark:border-white/10 dark:bg-[#1F1F1F]` : `ms-px w-[90%] rounded-[20px] px-4 py-2`, b && `border-token-text-error focus:border-token-text-error`),
                containerInputClassName: `w-full`,
                inputClassName: T(`placeholder:text-token-text-tertiary dark:bg-transparent`, s === `stacked` && `bg-transparent text-[16px] leading-6 text-[#1F1F1F] placeholder:text-[16px] placeholder:leading-6 placeholder:text-[#9B9B9B] dark:text-white/92 dark:placeholder:text-white/40`),
                displayNameLabelClassName: `hidden`
            }), _ && (0, Y.jsx)(`div`, {
                className: `text-token-text-error ms-1 flex text-xs`,
                children: (0, Y.jsx)(N, {
                    ...Q.invalidEmailWarning
                })
            }), v && (0, Y.jsx)(`div`, {
                className: `text-token-text-error ms-1 flex text-xs`,
                children: (0, Y.jsx)(N, {
                    ...Q.mismatchedDomainWarning,
                    values: {
                        domain: p ?? ``
                    }
                })
            }), ee && (0, Y.jsx)(`div`, {
                className: `text-token-text-error ms-1 flex text-xs`,
                children: (0, Y.jsx)(N, {
                    ...Q.duplicateEmailWarning
                })
            })]
        })
    }, Pn = (e, t, n) => {
        let r = {
            member: `member`
        };
        return e && !n && (r.admin = `admin`, r.owner = `owner`), e && t && (r.analytics_viewer = `analytics_viewer`), r
    }, Q = me({
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
    Vt as a, Kt as i, vn as n, Fn as r, yn as t
};
//# sourceMappingURL=96bf3632-om9i23okwpbgdzfh.js.map
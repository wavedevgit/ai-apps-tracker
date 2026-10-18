import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AG as n,
    AT as r,
    Btt as i,
    C1 as a,
    DG as o,
    Hn as s,
    Htt as c,
    IU as l,
    L3 as u,
    LU as d,
    MD as f,
    Mnt as p,
    My as m,
    Nnt as h,
    PD as g,
    Pnt as _,
    Qit as v,
    Sst as y,
    Un as b,
    Xnt as x,
    a7 as S,
    b5 as C,
    bnt as ee,
    dz as w,
    fU as te,
    fz as T,
    gnt as ne,
    hnt as re,
    i1 as ie,
    iat as ae,
    jy as oe,
    kT as E,
    l7 as D,
    ont as O,
    pU as se,
    rnt as ce,
    u1 as k,
    wst as le,
    y5 as A,
    ynt as j,
    z3 as ue,
    zD as M
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as N,
    Bn as de,
    Ln as fe,
    N as pe,
    Nn as P,
    Rn as F,
    Vn as me,
    Zt as I,
    jt as he,
    p as ge,
    rn as _e,
    s as ve,
    wn as ye,
    zn as be
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $nn as xe,
    Bst as Se,
    JEn as Ce,
    P6t as we,
    Qnn as Te,
    T6t as Ee,
    V6t as De,
    Xnn as Oe,
    YEn as ke,
    ag as Ae,
    eGn as je,
    eg as Me,
    i8t as Ne,
    ig as L,
    j6t as Pe,
    n2t as Fe,
    n8t as Ie,
    ng as Le,
    p8t as Re,
    r2t as R,
    t2t as ze,
    zst as Be
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Gh as Ve,
    Hm as He,
    Kh as Ue,
    Sv as We,
    Um as Ge,
    xv as Ke
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    $d as qe,
    Bc as Je,
    Cc as Ye,
    Dc as Xe,
    Ec as Ze,
    Fc as Qe,
    Gc as $e,
    Kc as et,
    Lc as tt,
    Oc as z,
    Pc as nt,
    Rc as rt,
    Sc as it,
    Tc as at,
    Uf as ot,
    Xv as B,
    Yc as st,
    Yf as ct,
    Zv as lt,
    ef as ut,
    eh as dt,
    fc as ft,
    pc as pt,
    pl as mt,
    qc as ht,
    sl as gt,
    th as _t,
    wc as vt,
    zc as yt
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    d_ as V,
    f_ as bt
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    r as xt,
    t as St
} from "./53a75fa3-blqh58huh8q1u867.js";
import {
    n as Ct,
    t as wt
} from "./0453f9ca-hg4z0dgc7com0h9b.js";
import {
    n as Tt,
    t as Et
} from "./dc59de7a-nk7egxw6p890u8ee.js";
import {
    i as H,
    r as U,
    t as Dt
} from "./cedb005c-ol0an49ccokglkmo.js";
import {
    i as W,
    r as Ot,
    t as kt
} from "./730b64e6-ohmzqvf6uss5vlhg.js";
import {
    n as At,
    t as jt
} from "./37b207d4-drt35swkrbdu95qj.js";
import {
    c as Mt,
    o as Nt,
    r as Pt,
    s as Ft,
    t as It
} from "./1212b029-kgcj3fakl8vwct7x.js";

function Lt({
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
var Rt = e((() => {}));

function G({
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

function zt(e) {
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

function Bt(e) {
    i.logStructuredEvent(`ChatgptWorkspaceInviteFlowDroppedOff`, {
        dropoffType: e
    })
}

function Vt(e) {
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

function Ht(e) {
    return e.isOwnerOfAccount() ? `workspace_owner` : e.isAdminOfAccount() ? `workspace_admin` : e.data.role === y.ANALYTICS_VIEWER ? `workspace_analytics_viewer` : `workspace_member`
}

function Ut(e, t) {
    let n = e => t == null ? void 0 : it(t, e) ?? void 0;
    return {
        isPaidBusiness: e.isSelfServeBusiness() && e.hasPaidSubscription() && e.data.subscriptionStatus.trial?.isTrialing !== !0,
        canInvite: e.canInviteMembers(),
        availableDefaultSeatCount: n(`default`),
        availableProliteSeatCount: n(`prolite`)
    }
}

function Wt(e) {
    let t = {
        workspace_owner: `CHATGPT_WORKSPACE_INVITE_FLOW_ACTOR_ROLE_WORKSPACE_OWNER`,
        workspace_admin: `CHATGPT_WORKSPACE_INVITE_FLOW_ACTOR_ROLE_WORKSPACE_ADMIN`,
        workspace_member: `CHATGPT_WORKSPACE_INVITE_FLOW_ACTOR_ROLE_WORKSPACE_MEMBER`,
        workspace_analytics_viewer: `CHATGPT_WORKSPACE_INVITE_FLOW_ACTOR_ROLE_WORKSPACE_ANALYTICS_VIEWER`
    };
    return Lt({
        context: Ut(e),
        emit(n) {
            ie()?.id !== e.id || re().getContext().user.customIDs?.workspace_id !== e.id || i.logStructuredEvent(`ChatgptWorkspaceInviteAbandonedWithPaidSeat`, {
                actorRole: t[Ht(e)],
                availableDefaultSeatCount: O(n.availableDefaultSeatCount),
                availableProliteSeatCount: O(n.availableProliteSeatCount)
            })
        }
    })
}
var Gt = e((() => {
    le(), z(), k(), j(), ce(), Rt(), c()
}));

function Kt(e) {
    return e.trim().toLowerCase()
}

function qt(e, t) {
    if (t == null) return e;
    let n = new Set,
        r = [];
    for (let i of e) {
        if (r.length >= t) break;
        let e = Kt(i.email);
        n.has(e) || (n.add(e), r.push(i))
    }
    return r
}

function Jt(e) {
    let t = new Set;
    return e.filter(({
        value: e
    }) => {
        let n = Kt(e);
        return t.has(n) ? !1 : (t.add(n), !0)
    })
}

function Yt(e) {
    let t = e.trim();
    if (!b.test(t)) return null;
    let [, n = ``] = t.split(`@`);
    return n.toLowerCase() || null
}

function Xt({
    email: e,
    index: t,
    emailInputList: n,
    inviteDomain: r,
    shouldCheckDomainMismatch: i
}) {
    let a = e.trim(),
        o = a.length > 0 && !b.test(a),
        s = r?.toLowerCase() ?? null,
        c = Yt(a),
        l = a.length > 0 && !o && i && s != null && c != null && c !== s,
        u = Kt(a);
    return {
        hasMismatchedDomain: l,
        isDuplicate: u.length > 0 && !o && !l && n.some((e, n) => n < t && Kt(e) === u),
        isInvalid: o
    }
}
var Zt = e((() => {
    s()
}));

function Qt({
    subscription: e,
    workspaceSeatTypeCounts: t,
    paidStandardSeatCapacity: n,
    paidPremiumSeatCapacity: r
}) {
    return {
        availableStandardSeats: Math.max(0, e == null ? 0 : it(e, `default`) ?? n - (t?.seat_type_counts?.default ?? 0)),
        availablePremiumSeats: Math.max(0, e == null ? 0 : it(e, `prolite`) ?? r - (t?.seat_type_counts?.prolite ?? 0))
    }
}

function $t({
    defaultInviteSeatTypeOverride: e,
    workspaceDefaultSeatType: t,
    isUsageBasedSeatEnabled: n,
    isPremiumSeatEnabled: r = !1,
    availablePaidSeatCounts: i
}) {
    let a = !n && !r && i == null ? It : Ft(e ?? t, {
        includeUsageBased: n,
        includeProlite: r,
        preserveProlite: i != null
    });
    if (i == null) return a;
    let o = a === `prolite` ? `prolite` : `default`,
        s = o === "default" ? `prolite` : `default`;
    return i[o] > 0 || i[s] <= 0 ? o : s
}

function en({
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

function tn({
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

function nn({
    paidInviteEmails: e,
    availableSeats: t,
    existingActivePaidMemberEmails: n,
    existingPendingPaidInviteEmails: r
}) {
    let i = new Set([...n, ...r].map(e => e.trim().toLowerCase())),
        a = e.filter(e => !i.has(e)).length;
    return a === 0 ? 0 : Math.max(0, a - t)
}

function rn({
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
        (t ? Ft(e.seatType, {
            includeUsageBased: n,
            includeProlite: r
        }) : i) !== a || o.length === 0 || s.add(o)
    }), [...s]
}

function an({
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
    let g = o != null && d ? at(o, `default`, c ? 0 : o.seats_entitled) : o?.seats_entitled ?? 0,
        _ = o != null && d ? at(o, `prolite`) : 0,
        v = !l && o != null && s != null,
        {
            availableStandardSeats: y,
            availablePremiumSeats: b
        } = Qt({
            subscription: o,
            workspaceSeatTypeCounts: s,
            paidStandardSeatCapacity: g,
            paidPremiumSeatCapacity: _
        }),
        x = u && v ? nn({
            paidInviteEmails: rn({
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
        S = u && d && v ? nn({
            paidInviteEmails: rn({
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
        premiumSeatCapacityShortfall: S,
        totalSeatCapacityShortfall: x + S
    }
}

function on({
    subscription: e,
    capacityShortfallSeatCounts: t
}) {
    if (e == null) return null;
    let n = Ze(e),
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
var sn = e((() => {
    z(), Nt()
}));

function cn({
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
        seatType: s || c != null ? Ft(e.seatType, {
            includeUsageBased: i,
            includeProlite: r,
            preserveProlite: c != null
        }) : n
    })).filter(e => e.email.length > 0).slice(0, a ?? 1 / 0)
}

function ln({
    rows: e,
    workspace: t
}) {
    let n = Vt(e);
    return Dt({
        action: `send_invitations`,
        actorRole: t.isOwnerOfAccount() ? `workspace_owner` : `workspace_admin`,
        surface: `admin_invite_modal`,
        affectedTargetCount: e.length,
        targetScope: e.length === 1 ? `individual` : `bulk`,
        requestedSeatCounts: n
    })
}

function un(e, t) {
    return t == null ? e : e.slice(0, t)
}

function dn(e) {
    return e.trim().toLowerCase()
}

function fn(e, t, {
    availablePaidSeatCounts: n,
    defaultRole: r,
    defaultSeatType: i
}) {
    let a = new Map(t.map(e => [dn(e.email), e]));
    return en({
        rows: e.map(e => {
            let t = a.get(dn(e.value));
            return On({
                email: e.value,
                role: t?.role ?? r,
                seatType: t?.seatType ?? i
            })
        }),
        defaultInviteSeatType: i,
        availablePaidSeatCounts: n
    })
}

function pn(e) {
    return e.filter(e => e.email.trim().length > 0).length
}

function mn(e) {
    return e.email.trim().length > 0
}

function hn(e) {
    let t = new Set,
        n = [];
    return e.forEach(e => {
        if (!mn(e)) return;
        let r = e.email.trim().toLowerCase();
        !r || t.has(r) || (t.add(r), n.push(r))
    }), n
}

function gn({
    rows: e,
    seatsInUse: t,
    seatsEntitled: n,
    existingActiveMemberEmails: r = Q,
    existingPendingInviteEmails: i,
    hasActiveBusinessFreeTrial: a
}) {
    if (!a || t == null || n == null || n > Z) return {
        isOverFreeTrialInviteLimit: !1,
        projectedTrialSeats: Math.max(0, t ?? 0)
    };
    let o = new Set(i.map(e => e.trim().toLowerCase())),
        s = new Set(r.map(e => e.trim().toLowerCase())),
        c = hn(e).filter(e => !o.has(e) && !s.has(e)).length,
        l = Math.max(0, t) + Math.max(0, i.length) + c;
    return {
        isOverFreeTrialInviteLimit: l > Z,
        projectedTrialSeats: l
    }
}

function _n(e) {
    let t = e.isOwnerOfAccount();
    return {
        showRoleColumn: !e.isFreeWorkspace() && t,
        showSeatTypeColumn: t && (At(e.data) || _t(e.id))
    }
}

function vn(e) {
    "use forget";
    let t = (0, Tn.c)(2),
        n;
    return t[0] === e ? n = t[1] : (n = (0, X.jsx)(yn, {
        ...e
    }, e.workspace.id), t[0] = e, t[1] = n), n
}

function yn({
    workspace: e,
    onCancel: t,
    cancelButtonText: r,
    onSuccess: i,
    fullWidthButtons: a = !1,
    showCancelButton: o = !0,
    csvButtonAlignedWithPrimary: s = !1,
    contentClassName: c,
    initialEmails: l,
    defaultInviteSeatType: u,
    showRoleColumn: d,
    showSeatTypeColumn: f,
    inviteLayout: p = `table`,
    initialEmptyRowCount: m = 1,
    maxInvites: h = null,
    availablePaidSeatCounts: g,
    emptyStatePrimaryButtonText: _,
    onEmptySubmit: v,
    enableImmediateInvoiceSeatPurchase: y = !1,
    onImmediateInvoiceStepChange: b,
    onImmediateInvoiceUpdatingChange: x
}) {
    "use no forget";
    let [S] = (0, Y.useState)(() => Wt(e)), C = (0, Y.useRef)(!1);
    (0, Y.useEffect)(() => {
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
    let ee = kn(l),
        {
            showRoleColumn: te,
            showSeatTypeColumn: T
        } = _n(e),
        ne = d ?? te,
        re = f ?? T,
        ie = At(e.data),
        ae = _t(e.id),
        {
            data: oe,
            isLoading: D
        } = n(e.id),
        O = e.isK12(),
        se = Ae(e.id, O),
        ce = $t({
            defaultInviteSeatTypeOverride: u,
            workspaceDefaultSeatType: oe?.default_seat_type,
            isUsageBasedSeatEnabled: ie,
            isPremiumSeatEnabled: ae,
            availablePaidSeatCounts: g
        }),
        k = O ? se : void 0,
        le = e.isFreeWorkspace() || O && !!se,
        j = (0, Y.useCallback)(() => {
            Bt(Ce.CHATGPT_WORKSPACE_INVITE_FLOW_DROPOFF_TYPE_CANCEL), t()
        }, [t]);
    return D ? (0, X.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [(0, X.jsx)(`div`, {
            className: A(`flex min-h-48 items-center justify-center`, c),
            children: (0, X.jsx)(w, {
                className: `icon-lg text-token-text-tertiary`
            })
        }), o ? (0, X.jsx)(`div`, {
            className: A(`flex w-full flex-shrink-0 flex-col gap-2`, s ? `mt-0` : `mt-8`),
            children: (0, X.jsx)(E, {
                color: `ghost`,
                size: a ? `large` : `medium`,
                onClick: j,
                children: r
            })
        }) : null]
    }) : (0, X.jsx)(bn, {
        inviteFlowAnalytics: S,
        onCancel: j,
        cancelButtonText: r,
        fullWidthButtons: a,
        showCancelButton: o,
        csvButtonAlignedWithPrimary: s,
        contentClassName: c,
        workspace: e,
        onSuccess: i,
        initialEmails: ee,
        k12InviteDomain: se,
        maxInvites: h,
        availablePaidSeatCounts: g,
        showRoleColumn: ne,
        showSeatTypeColumn: re,
        includeUsageBasedSeatType: ie && g == null,
        includePremiumSeatType: ae,
        defaultInviteSeatType: ce,
        shouldCheckDomainMismatch: le,
        allowedDomain: k,
        inviteLayout: p,
        initialEmptyRowCount: m,
        emptyStatePrimaryButtonText: _,
        onEmptySubmit: v,
        enableImmediateInvoiceSeatPurchase: y,
        onImmediateInvoiceStepChange: b,
        onImmediateInvoiceUpdatingChange: x
    })
}

function bn({
    inviteFlowAnalytics: e,
    onCancel: t,
    cancelButtonText: n,
    fullWidthButtons: r,
    showCancelButton: i,
    csvButtonAlignedWithPrimary: a,
    contentClassName: o,
    workspace: s,
    onSuccess: c,
    initialEmails: l,
    k12InviteDomain: u,
    maxInvites: f,
    availablePaidSeatCounts: p,
    showRoleColumn: m,
    showSeatTypeColumn: g,
    includeUsageBasedSeatType: v,
    includePremiumSeatType: y,
    defaultInviteSeatType: S,
    shouldCheckDomainMismatch: C,
    allowedDomain: ee,
    inviteLayout: w,
    initialEmptyRowCount: T,
    emptyStatePrimaryButtonText: ne,
    onEmptySubmit: re,
    enableImmediateInvoiceSeatPurchase: ae,
    onImmediateInvoiceStepChange: D,
    onImmediateInvoiceUpdatingChange: O
}) {
    "use no forget";
    let {
        search: se
    } = he(), ce = An({
        workspace: s,
        inviteFlowAnalytics: e,
        onSuccess: c,
        k12InviteDomain: u,
        initialEmails: l,
        maxInvites: f,
        availablePaidSeatCounts: p,
        showRoleColumn: m,
        showSeatTypeColumn: g,
        includeUsageBasedSeatType: v,
        includePremiumSeatType: y,
        defaultInviteSeatType: S
    }), k = be(), le = te(), [j, M] = (0, Y.useState)(!1), [N, de] = (0, Y.useState)(null), fe = (0, Y.useRef)(null), F = (0, Y.useCallback)((e = !0) => {
        fe.current?.(e), fe.current = null
    }, []);
    (0, Y.useEffect)(() => () => {
        F(!1)
    }, [F]);
    let {
        clearState: me,
        emailTableRows: I,
        emailTextAreaValue: ge,
        emailsOutsideOfDomain: _e,
        fileInputRef: ve,
        handleClickImportCSV: ye,
        handleDeleteRow: Se,
        handleInputChange: Ce,
        handleSubmit: we,
        handleUploadCSV: Ee,
        hasUploadedCsv: Oe,
        isInviting: ke,
        setEmailTableRows: Ae,
        setEmailTextAreaValue: je,
        trackNavigationClick: Me,
        defaultInviteRole: Ne,
        INVITE_ROLES: L
    } = ce, Fe = pe(), Le = pn(I), R = ae && s.isOwnerOfAccount() && s.isSelfServeBusiness() && s.hasPaidSubscription() && s.data.subscriptionStatus.trial?.isTrialing !== !0 && et(s.id), ze = R && _t(s.id), {
        billingPageConfigsQuery: Be,
        planManagementConfig: Ve,
        isError: He,
        isLoading: Ke
    } = Re({
        activeWorkspaceId: s.id,
        enabled: R
    }), qe = Ie(Ve)?.can_change_paid_seat_quantity === !0, Ze = Be.data?.invite_prepurchase, $e = Ze?.workspace_id === s.id && Ze.skip_invite_prepurchase, tt = R && !$e && qe, {
        data: z,
        isLoading: it
    } = De(), st = pt(z), {
        country: ct
    } = xe(), {
        billingDetails: lt,
        status: dt
    } = Te({
        country: ct,
        currentAccount: s,
        enabled: tt,
        location: `AdminInviteFlow.immediateInvoice`,
        pricingPlanIsTypeBusiness: !0
    }), ft = st == null ? ct : st.countryCode, gt = st?.billingCurrency ?? lt?.currency, yt = ue({
        countryCode: ft,
        currency: gt,
        enabled: R && qe && lt != null
    }), {
        data: bt,
        isError: xt,
        isLoading: St
    } = yt, Ct = st == null || bt == null ? null : ht(bt, st);
    (0, Y.useEffect)(() => {
        Ct != null && h.count(_.TEAMS, `business_manage_seats_checkout_pricing_identity_match`, {
            entry_point: `admin_invite`,
            matches_subscription_pricing_identity: String(Ct)
        })
    }, [Ct]);
    let Tt = bt,
        Et = [`checkout-pricing-config`, ft ?? null, gt ?? null],
        {
            data: U,
            isLoading: Dt
        } = rt(s.isSelfServeBusiness() ? s.id : void 0),
        W = Qe(U),
        At = U != null && nt(U) >= W,
        jt = z != null && (at(z, `prolite`) > 0 || (U?.seat_type_counts?.prolite ?? 0) > 0),
        {
            data: Nt,
            isLoading: Lt
        } = mt(s.id, 0, ``),
        {
            data: Rt
        } = ut(s.isSelfServeBusiness() ? kt : ``),
        G = R && (!jt || ze) ? Ye({
            accountId: s.id,
            checkoutPricingConfig: Tt,
            isSciAccount: !1,
            isSeatTypeCountsLoading: Dt,
            seatTypeCounts: U,
            showPremiumSeats: ze,
            subscription: z
        }) : null,
        zt = R && (St || xt || G == null),
        Bt = s.isSelfServeBusiness() && Ot(Rt),
        {
            data: Vt,
            isLoading: Ht
        } = Pe(Bt || R ? s.id : void 0, 0, ``, 100),
        Wt = (Nt?.items ?? []).map(e => e.email_address).filter(e => !!e),
        Gt = (Vt?.items ?? []).map(e => e.email).filter(e => !!e),
        Kt = (Vt?.items ?? []).filter(e => Ft(e.seat_type, {
            includeProlite: !0
        }) === It).map(e => e.email).filter(e => !!e),
        qt = (Nt?.items ?? []).filter(e => Ft(e.seat_type, {
            includeProlite: !0
        }) === It).map(e => e.email_address).filter(e => !!e),
        Yt = (Vt?.items ?? []).filter(e => Ft(e.seat_type, {
            includeProlite: !0
        }) === `prolite`).map(e => e.email).filter(e => !!e),
        Xt = (Nt?.items ?? []).filter(e => Ft(e.seat_type, {
            includeProlite: !0
        }) === `prolite`).map(e => e.email_address).filter(e => !!e),
        Zt = I.slice(0, f ?? 1 / 0).some(e => {
            let t = e.email.trim();
            return t.length > 0 && !b.test(t)
        }),
        {
            isOverFreeTrialInviteLimit: $t
        } = gn({
            rows: I,
            seatsInUse: z?.seats_in_use,
            seatsEntitled: z?.seats_entitled,
            existingActiveMemberEmails: Gt,
            existingPendingInviteEmails: Wt,
            hasActiveBusinessFreeTrial: Bt
        }),
        {
            paidStandardSeatCapacity: nn,
            paidPremiumSeatCapacity: rn,
            standardSeatCapacityShortfall: sn,
            premiumSeatCapacityShortfall: dn,
            totalSeatCapacityShortfall: mn
        } = an({
            rows: I,
            showSeatTypeColumn: g || p != null,
            includeUsageBasedSeatType: v,
            includePremiumSeatType: y || p != null,
            defaultInviteSeatType: S,
            maxInvites: f,
            subscription: z,
            workspaceSeatTypeCounts: U,
            hasPremiumSeats: jt,
            hasActiveBusinessFreeTrial: Bt,
            isImmediateInvoiceRolloutEnabled: R,
            isBusinessPremiumSeatPurchaseReviewEnabled: ze,
            existingActiveStandardMemberEmails: Kt,
            existingPendingStandardInviteEmails: qt,
            existingActivePremiumMemberEmails: Yt,
            existingPendingPremiumInviteEmails: Xt
        }),
        {
            availableStandardSeats: hn,
            availablePremiumSeats: _n
        } = Qt({
            subscription: z,
            workspaceSeatTypeCounts: U,
            paidStandardSeatCapacity: nn,
            paidPremiumSeatCapacity: rn
        });
    (0, Y.useEffect)(() => {
        ie()?.id === s.id && e.updateContext(Ut(s, z))
    }, [e, z, s]);
    let vn = z == null ? null : Xe(z, `default`, nn) + Xe(z, `prolite`, rn),
        yn = U != null && vn != null && vn >= W,
        bn = it || Dt || Ht || Lt || z == null || U == null || Vt == null || Nt == null,
        Sn = R && !$e && !Bt && (qe || Ve == null && (Ke || He)),
        K = {
            standard: sn,
            premium: dn
        },
        Cn = G == null ? null : {
            standard: nn,
            premium: rn
        },
        wn = G == null || z == null ? null : {
            standard: Xe(z, `default`, nn),
            premium: Xe(z, `prolite`, rn)
        },
        q = wn == null || z == null ? null : vt({
            capacityShortfallSeatCounts: K,
            initialRenewalSeatCounts: wn,
            subscription: z
        }),
        J = on({
            subscription: z,
            capacityShortfallSeatCounts: K
        }),
        Tn = J?.scheduledRemovalSeatCounts.standard ?? 0,
        En = J?.scheduledRemovalSeatCounts.premium ?? 0,
        Dn = J?.scheduledDowngradeCount ?? 0,
        Z = Tn + En,
        Q = Z + Dn,
        kn = Tn === K.standard && En + Dn === K.premium,
        Mn = Dn === 0 || wn != null && q != null && q.standard + Dn === wn.standard + K.standard,
        Nn = Sn && mn > 0,
        Pn = Nn && (He || dt === `error` || xt),
        Fn = q == null ? null : q.standard + q.premium,
        In = Fn != null && Fn >= W,
        Ln = Fn != null && Fn > W,
        Rn = s.isAdminOfAccount() || s.isOwnerOfAccount(),
        zn = Nn,
        Bn = zn && In,
        Vn = J != null && kn && Mn && !Ln && !Pn,
        Hn = zn ? (0, X.jsxs)(`div`, {
            className: `border-token-border-status-warning bg-token-bg-status-warning text-token-text-status-warning flex w-full items-center gap-5 rounded-[20px] border px-6 py-4 shadow-[0_1px_6px_rgba(0,0,0,0.06)]`,
            children: [(0, X.jsx)(d, {
                className: `size-6 shrink-0`
            }), (0, X.jsxs)(`div`, {
                className: `flex min-w-0 flex-1 flex-col gap-0.5`,
                children: [(0, X.jsx)(`div`, {
                    className: `text-sm leading-5 font-semibold`,
                    children: Vn ? Z > 0 && J.scheduledDowngradeCount > 0 ? (0, X.jsx)(P, {
                        ...$.scheduledSeatChangesCanceledWarningTitle,
                        values: {
                            scheduledSeatChangeCount: Q
                        }
                    }) : Z > 0 ? (0, X.jsx)(P, {
                        ...$.scheduledSeatRemovalCanceledWarningTitle,
                        values: {
                            scheduledRemovalCount: Z
                        }
                    }) : (0, X.jsx)(P, {
                        ...$.scheduledSeatDowngradeCanceledWarningTitle,
                        values: {
                            scheduledDowngradeCount: J.scheduledDowngradeCount
                        }
                    }) : (0, X.jsx)(P, {
                        ...$.additionalPaidSeatsNeededWarningTitle,
                        values: {
                            count: mn
                        }
                    })
                }), (0, X.jsxs)(`div`, {
                    className: `text-sm leading-5`,
                    children: [Ln ? (0, X.jsx)(P, {
                        ...$.additionalPaidSeatsExceedMaximumWarningBody,
                        values: {
                            maxSeats: W
                        }
                    }) : Pn ? (0, X.jsx)(P, {
                        ...$.additionalPaidSeatsBillingUnavailableWarningBody
                    }) : Vn ? Z > 0 && J.scheduledDowngradeCount > 0 ? (0, X.jsx)(P, {
                        ...$.scheduledSeatChangesCanceledWarningBody,
                        values: {
                            scheduledDowngradeCount: J.scheduledDowngradeCount,
                            scheduledRemovalCount: Z
                        }
                    }) : Tn > 0 && En > 0 ? (0, X.jsx)(P, {
                        ...$.scheduledMultiTierSeatRemovalCanceledWarningBody,
                        values: {
                            scheduledRemovalCount: Z
                        }
                    }) : Tn > 0 ? (0, X.jsx)(P, {
                        ...$.scheduledStandardSeatRemovalCanceledWarningBody,
                        values: {
                            scheduledRemovalCount: Z
                        }
                    }) : En > 0 ? (0, X.jsx)(P, {
                        ...$.scheduledPremiumSeatRemovalCanceledWarningBody,
                        values: {
                            scheduledRemovalCount: Z
                        }
                    }) : (0, X.jsx)(P, {
                        ...$.scheduledSeatDowngradeCanceledWarningBody,
                        values: {
                            scheduledDowngradeCount: J.scheduledDowngradeCount
                        }
                    }) : (0, X.jsx)(P, {
                        ...Le === 1 ? $.additionalPaidSeatsNeededForSingleInviteWarningBody : $.additionalPaidSeatsNeededWarningBody,
                        values: {
                            count: mn
                        }
                    }), In && (0, X.jsx)(ot, {
                        className: `mt-1`,
                        maximumSeats: W,
                        seatCount: Fn ?? 0,
                        variant: `inline`
                    })]
                })]
            }), Pn && !Ln && (0, X.jsx)(E, {
                color: `secondary`,
                loading: Be.isFetching || yt.isFetching || Fe.isFetching({
                    queryKey: Et
                }) > 0,
                size: `small`,
                type: `button`,
                onClick: () => {
                    He && Be.refetch(), dt === `error` && Fe.invalidateQueries({
                        queryKey: Et
                    }), xt && yt.refetch()
                },
                children: (0, X.jsx)(P, {
                    ...$.retrySeatPurchaseBillingButton
                })
            })]
        }) : null,
        Un = (At || yn) && !Bn ? (0, X.jsx)(ot, {
            maximumSeats: W,
            seatCount: Math.max(nt(U), vn ?? 0)
        }) : null,
        Wn = $t ? (0, X.jsxs)(`div`, {
            className: `border-token-border-light bg-token-main-surface-primary flex w-full items-center gap-5 rounded-[20px] border px-6 py-4 shadow-[0_1px_6px_rgba(0,0,0,0.06)]`,
            children: [(0, X.jsx)(d, {
                className: `text-token-text-secondary size-6 shrink-0`
            }), (0, X.jsxs)(`div`, {
                className: `flex min-w-0 flex-1 flex-col gap-0.5`,
                children: [(0, X.jsx)(`div`, {
                    className: `text-token-text-primary text-sm leading-5 font-semibold`,
                    children: (0, X.jsx)(P, {
                        ...$.freeTrialInviteLimitWarningTitle
                    })
                }), (0, X.jsx)(`div`, {
                    className: A(`text-token-text-secondary text-sm leading-5`, !Rn && `max-w-[500px]`),
                    children: Rn ? (0, X.jsx)(P, {
                        ...$.freeTrialInviteLimitWarning
                    }) : (0, X.jsx)(P, {
                        ...$.freeTrialInviteLimitWarningAskAdmin
                    })
                })]
            }), Rn && (0, X.jsx)(`a`, {
                href: x(`/admin/billing`, se),
                className: `bg-token-text-primary text-token-main-surface-primary inline-flex h-9 shrink-0 items-center justify-center rounded-full px-4 text-sm font-semibold hover:opacity-90`,
                children: (0, X.jsx)(P, {
                    ...$.upgradeButton
                })
            })]
        }) : null,
        Gn = re != null && Le === 0,
        Kn = w === `stacked`,
        qn = !m && !g ? `w-[calc(100%-3rem)]` : m === g ? `w-[56%]` : `w-[68%]`;
    (0, Y.useEffect)(() => {
        j || I.length > 0 || Ae(en({
            rows: Array.from({
                length: f == null ? T : Math.min(T, f)
            }, () => On({
                role: Ne,
                seatType: S
            })),
            defaultInviteSeatType: S,
            availablePaidSeatCounts: p
        }))
    }, [p, Ne, S, I.length, T, j, f, Ae]);
    let Jn = (0, X.jsx)(oe, {
            label: k.formatMessage($.importCSVTooltip),
            contentClassName: `w-[280px]`,
            side: `top`,
            delayDuration: 200,
            children: (0, X.jsx)(E, {
                color: a ? `ghost` : `secondary`,
                className: A(Kn && `h-11 rounded-full border-0 bg-transparent! px-5 text-[14px] font-normal text-[#5D5D5D] shadow-none hover:bg-[#F7F7F7]! dark:bg-transparent! dark:text-white/70 dark:hover:bg-white/6!`),
                icon: Ge,
                iconClassName: A(Kn && `text-[#5D5D5D] dark:text-white/70`),
                onClick: ye,
                children: (0, X.jsx)(P, {
                    ...Oe ? $.reimportCSVButton : $.importCSVButton
                })
            })
        }),
        Yn = e => {
            let t = f == null ? e.filter((e, t, n) => n.findIndex(t => t.value === e.value) === t) : Jt(e);
            f != null && t.length > f && le.warning(k.formatMessage($.inviteLimitWarning, {
                maxInvites: f
            }), {
                duration: 5,
                id: `admin_invite_limit`
            });
            let n = un(t, f);
            je(n), Ae(e => fn(n, e, {
                availablePaidSeatCounts: p,
                defaultRole: Ne,
                defaultSeatType: S
            }))
        },
        Xn = () => i ? (0, X.jsx)(E, {
            color: `ghost`,
            size: r ? `large` : `medium`,
            onClick: () => {
                me(), t(), Me({
                    buttonType: `Skip`
                })
            },
            children: n
        }) : null,
        Zn = () => {
            if (!z || z.active_until == null || lt == null || zt || G == null || Cn == null || wn == null || q == null) return;
            let e = ln({
                    rows: cn({
                        availablePaidSeatCounts: p,
                        rows: I,
                        defaultInviteRole: Ne,
                        defaultInviteSeatType: S,
                        includePremiumSeatType: y,
                        includeUsageBasedSeatType: v,
                        maxInvites: f,
                        showRoleColumn: m,
                        showSeatTypeColumn: g
                    }),
                    workspace: s
                }),
                t = {
                    default: Math.max(0, q.standard - Cn.standard),
                    prolite: Math.max(0, q.premium - Cn.premium)
                };
            H(e, {
                step: `action_initiated`
            }), H(e, {
                step: `capacity_evaluated`,
                capacityResult: t.default+t.prolite > 0 ? `purchase_required` : `capacity_change_required`,
                availablePaidSeatCounts: {
                    default: hn,
                    prolite: _n
                },
                additionalPaidSeatCounts: t,
                billingInterval: G.billingPeriod
            }), de({
                analyticsFlow: e,
                currentPaidSeatCounts: Cn,
                initialRenewalSeatCounts: wn,
                updatedSeatCounts: q
            }), D?.(!0, !0)
        },
        Qn = e => (0, X.jsx)(E, {
            className: A(e, r && !Kn && `w-full`, Kn && `mx-auto w-full max-w-[400px]`),
            color: `primary`,
            size: r ? `large` : `medium`,
            loading: ke,
            disabled: ke || !Gn && Le === 0 || _e.length > 0 || $t || Sn && bn || Nn && (Ke || He || Zt || lt == null || z?.active_until == null || Ln || zt),
            onClick: () => {
                if (Gn) {
                    re?.(), Me({
                        buttonType: `Send`
                    });
                    return
                }
                if (!Je({
                        accountId: s.id,
                        currentAccount: s,
                        subscription: z,
                        wouldChangePaidCapacity: R && !$e && !bn && mn > 0
                    })) {
                    if (Nn) Zn();
                    else {
                        let e = ln({
                            rows: cn({
                                availablePaidSeatCounts: p,
                                rows: I,
                                defaultInviteRole: Ne,
                                defaultInviteSeatType: S,
                                includePremiumSeatType: y,
                                includeUsageBasedSeatType: v,
                                maxInvites: f,
                                showRoleColumn: m,
                                showSeatTypeColumn: g
                            }),
                            workspace: s
                        });
                        H(e, {
                            step: `action_initiated`
                        }), Sn && H(e, {
                            step: `capacity_evaluated`,
                            capacityResult: `seat_available`,
                            availablePaidSeatCounts: {
                                default: hn,
                                prolite: _n
                            },
                            paymentRequired: !1
                        }), we(e, Sn)
                    }
                    Me({
                        buttonType: `Send`
                    })
                }
            },
            children: Gn ? ne ?? k.formatMessage($.inviteMemberInviteSubmitButton) : k.formatMessage(ke ? $.inviteMemberInviteSubmitButtonLoading : Nn ? $.inviteMemberContinueButton : $.inviteMemberInviteSubmitButton)
        });
    if (N != null && z != null && z.active_until != null && lt != null) return G == null ? null : (0, X.jsx)(wt, {
        embedded: !0,
        accountId: s.id,
        analyticsFlow: N.analyticsFlow,
        billingPeriod: G.billingPeriod,
        confirmChangesButtonMessage: $.inviteMemberUpdateSeatsAndSendInvitesButton,
        confirmPurchaseButtonMessage: $.inviteMemberPurchaseSeatsAndSendInvitesButton,
        currency: G.currency,
        currentPaidSeatCounts: N.currentPaidSeatCounts,
        initialRenewalSeatCounts: N.initialRenewalSeatCounts,
        initialSeatCounts: N.currentPaidSeatCounts,
        maxSeats: W,
        nextBillingDate: G.nextBillingDate,
        onBack: () => {},
        onBeforeInitialSubmit: () => {
            fe.current ??= e.startAction()
        },
        onClose: () => {
            F(), de(null), D?.(!1)
        },
        onComplete: async e => {
            e && await we(N.analyticsFlow, !0, !0), F()
        },
        onUpdatingChange: O,
        premiumSeatMonthlyPrice: G.premiumSeatMonthlyPrice,
        showPremiumSeats: ze,
        standardSeatMonthlyPrice: G.standardSeatMonthlyPrice,
        updatedSeatCounts: N.updatedSeatCounts
    });
    if (j) return (0, X.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [(0, X.jsxs)(`div`, {
            className: A(`flex flex-col gap-4`, o),
            children: [(0, X.jsx)(`input`, {
                ref: ve,
                type: `file`,
                accept: `.csv,text/csv`,
                id: `upload-csv`,
                className: `hidden`,
                onChange: e => {
                    (async () => {
                        await Ee(e) && M(!0)
                    })()
                }
            }), _e.length > 0 && (0, X.jsx)(`div`, {
                className: `flex w-full items-center bg-red-100 p-4`,
                children: (0, X.jsxs)(`div`, {
                    className: `grow text-red-700`,
                    children: [(0, X.jsx)(P, {
                        ...$.prohibitedExternalEmailDescription
                    }), (0, X.jsx)(`pre`, {
                        className: `my-1`,
                        children: _e.join(`, `)
                    }), (0, X.jsx)(P, {
                        ...$.prohibitedExternalEmailResolution
                    })]
                })
            }), Wn, Hn, Un, (0, X.jsx)(`label`, {
                htmlFor: `add-member-emails`,
                id: `add-emails-label`,
                className: `sr-only`,
                children: (0, X.jsx)(P, {
                    ...$.addEmailsFieldName
                })
            }), !a && (0, X.jsx)(`div`, {
                className: `flex w-full items-center justify-end`,
                children: Jn
            }), (0, X.jsx)(xn, {
                value: ge,
                onChange: Yn
            })]
        }), (0, X.jsx)(`div`, {
            className: A(`flex w-full flex-shrink-0 flex-col gap-2`, a ? `mt-0` : `mt-8`),
            children: a ? (0, X.jsxs)(X.Fragment, {
                children: [(0, X.jsxs)(`div`, {
                    className: A(`flex w-full gap-2`, r ? `flex-col` : `items-center justify-between`),
                    children: [(0, X.jsx)(`div`, {
                        className: A(r ? `w-full` : `flex-shrink-0`),
                        children: Jn
                    }), (0, X.jsx)(`div`, {
                        className: A(r ? `w-full` : `flex-shrink-0`),
                        children: Qn()
                    })]
                }), Xn()]
            }) : (0, X.jsxs)(X.Fragment, {
                children: [Qn(), Xn()]
            })
        })]
    });
    let $n = (0, X.jsx)(`div`, {
        className: `mx-auto flex w-full max-w-[400px] flex-col gap-3.5`,
        children: I.map((e, t) => (0, X.jsx)(jn, {
            email: e.email,
            index: t,
            emailInputList: I.map(({
                email: e
            }) => e),
            onEmailChange: e => Ce(t, `email`, e),
            shouldCheckDomainMismatch: C,
            allowedDomain: ee,
            layout: `stacked`
        }, t))
    });
    return (0, X.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [(0, X.jsxs)(`div`, {
            className: A(`flex flex-col gap-4`, o),
            children: [(0, X.jsx)(`input`, {
                ref: ve,
                type: `file`,
                accept: `.csv,text/csv`,
                id: `upload-csv`,
                className: `hidden`,
                onChange: e => {
                    (async () => {
                        await Ee(e) && M(!0)
                    })()
                }
            }), _e.length > 0 && (0, X.jsx)(`div`, {
                className: `flex w-full items-center bg-red-100 p-4`,
                children: (0, X.jsxs)(`div`, {
                    className: `grow text-red-700`,
                    children: [(0, X.jsx)(P, {
                        ...$.prohibitedExternalEmailDescription
                    }), (0, X.jsx)(`pre`, {
                        className: `my-1`,
                        children: _e.join(`, `)
                    }), (0, X.jsx)(P, {
                        ...$.prohibitedExternalEmailResolution
                    })]
                })
            }), Wn, Hn, Un, w === `stacked` ? $n : (0, X.jsxs)(B.Root, {
                size: `normal`,
                fixed: !0,
                children: [(0, X.jsxs)(`colgroup`, {
                    children: [(0, X.jsx)(`col`, {
                        className: qn
                    }), m && (0, X.jsx)(`col`, {
                        className: g ? `w-[20%]` : `w-[28%]`
                    }), g && (0, X.jsx)(`col`, {
                        className: m ? `w-[20%]` : `w-[28%]`
                    }), (0, X.jsx)(`col`, {
                        className: `w-12`
                    })]
                }), (0, X.jsxs)(B.Header, {
                    children: [(0, X.jsx)(B.HeaderCell, {
                        className: `dark:bg-transparent`,
                        children: (0, X.jsx)(P, {
                            ...$.inviteTableHeaderEmail
                        })
                    }), m && (0, X.jsx)(B.HeaderCell, {
                        className: `w-32 ps-3 dark:bg-transparent`,
                        children: (0, X.jsx)(P, {
                            ...$.inviteTableHeaderRole
                        })
                    }), g && (0, X.jsx)(B.HeaderCell, {
                        className: `w-36 ps-3 dark:bg-transparent`,
                        children: (0, X.jsx)(P, {
                            ...Mt.seatType
                        })
                    }), (0, X.jsx)(B.HeaderCell, {
                        className: `dark:bg-transparent`
                    })]
                }), (0, X.jsx)(B.Body, {
                    children: I.map((e, t) => (0, X.jsxs)(B.Row, {
                        children: [(0, X.jsx)(B.Cell, {
                            verticalAlign: `middle`,
                            children: (0, X.jsx)(jn, {
                                email: e.email,
                                index: t,
                                emailInputList: I.map(({
                                    email: e
                                }) => e),
                                onEmailChange: e => Ce(t, `email`, e),
                                shouldCheckDomainMismatch: C,
                                allowedDomain: ee,
                                ariaLabel: k.formatMessage($.inviteTableHeaderEmail),
                                layout: `table`
                            })
                        }), m && (0, X.jsx)(B.Cell, {
                            verticalAlign: `middle`,
                            divClassName: `min-h-14 items-center`,
                            children: (0, X.jsxs)(V.Root, {
                                value: e.role,
                                onValueChange: e => Ce(t, `role`, e),
                                children: [(0, X.jsxs)(V.Trigger, {
                                    className: `w-32 justify-between`,
                                    children: [(0, X.jsx)(V.Value, {}), (0, X.jsx)(V.Icon, {})]
                                }), (0, X.jsx)(V.Portal, {
                                    children: (0, X.jsxs)(V.Content, {
                                        className: `border-token-main-surface-secondary border`,
                                        children: [(0, X.jsx)(V.Item, {
                                            value: L.member,
                                            children: (0, X.jsx)(P, {
                                                ...$.inviteRoleMember
                                            })
                                        }), L.analytics_viewer && (0, X.jsx)(V.Item, {
                                            value: L.analytics_viewer,
                                            children: (0, X.jsx)(P, {
                                                ...$.inviteRoleAnalyticsViewer
                                            })
                                        }), L.admin && (0, X.jsx)(V.Item, {
                                            value: L.admin,
                                            children: (0, X.jsx)(P, {
                                                ...$.inviteRoleAdmin
                                            })
                                        }), L.owner && (0, X.jsx)(V.Item, {
                                            value: L.owner,
                                            children: (0, X.jsx)(P, {
                                                ...$.inviteRoleOwner
                                            })
                                        })]
                                    })
                                })]
                            })
                        }), g && (0, X.jsx)(B.Cell, {
                            verticalAlign: `middle`,
                            divClassName: `min-h-14 items-center`,
                            children: (0, X.jsx)(Pt, {
                                workspaceId: s.id,
                                currentSeatType: e.seatType,
                                includeUsageBased: v,
                                includeProlite: y,
                                preserveProlite: p != null,
                                disabledSeatTypes: tn({
                                    rows: I,
                                    currentSeatType: e.seatType,
                                    availablePaidSeatCounts: p
                                }),
                                onUpdateSeatType: e => {
                                    Ce(t, `seatType`, e)
                                },
                                triggerClassName: `w-36 justify-between`,
                                contentClassName: `border-token-border-default border`
                            })
                        }), (0, X.jsx)(B.Cell, {
                            textAlign: `right`,
                            verticalAlign: `middle`,
                            divClassName: `min-h-14 items-center justify-end`,
                            children: (0, X.jsx)(We, {
                                onClick: () => Se(t),
                                className: `icon-sm text-token-text-secondary me-2 cursor-pointer`
                            })
                        })]
                    }, t))
                })]
            }), (0, X.jsxs)(`div`, {
                className: A(`align-center mb-4 flex`, Kn ? `mx-auto w-full max-w-[400px] items-center justify-between` : `justify-between`),
                children: [f == null || I.length < f ? (0, X.jsx)(E, {
                    color: `secondary`,
                    className: A(Kn && `h-11 rounded-full border border-black/10 bg-white px-5 text-[14px] font-normal text-[#5D5D5D] shadow-none hover:bg-[#F7F7F7] dark:border-white/12 dark:bg-transparent dark:text-white/70 dark:hover:bg-white/6`),
                    iconClassName: A(Kn && `text-[#5D5D5D] dark:text-white/70`),
                    onClick: () => {
                        Ae(e => en({
                            rows: [...e, On({
                                role: Ne,
                                seatType: S
                            })],
                            defaultInviteSeatType: S,
                            availablePaidSeatCounts: p
                        }))
                    },
                    icon: Ue,
                    children: (0, X.jsx)(P, {
                        ...$.addEmailButton
                    })
                }) : null, !a && Jn]
            })]
        }), (0, X.jsx)(`div`, {
            className: A(`flex w-full flex-shrink-0 flex-col gap-2`, a ? `mt-0` : Kn ? `mt-4` : `mt-8`),
            children: a ? (0, X.jsxs)(X.Fragment, {
                children: [(0, X.jsxs)(`div`, {
                    className: A(`flex w-full gap-2`, r ? `flex-col` : `items-center justify-between`),
                    children: [(0, X.jsx)(`div`, {
                        className: A(r ? `w-full` : `flex-shrink-0`),
                        children: Jn
                    }), (0, X.jsx)(`div`, {
                        className: A(r ? `w-full` : `flex-shrink-0`),
                        children: Qn()
                    })]
                }), Xn()]
            }) : (0, X.jsxs)(X.Fragment, {
                children: [Qn(), Xn()]
            })
        })]
    })
}

function xn(e) {
    "use no forget";
    let t = a(),
        n = (0, Y.useMemo)(() => t?.subscriptionAnalyticsParams, [t]);
    return (0, X.jsx)(St, {
        trackEmailsAdded: (0, Y.useCallback)(e => {
            i.logEvent(`Account Pay: Collaborator Emails Added`, {
                ...n,
                ...e
            })
        }, [n]),
        trackEmailRemoved: (0, Y.useCallback)(e => {
            i.logEvent(`Account Pay: Collaborator Email Removed`, {
                ...n,
                ...e
            })
        }, [n]),
        ...e
    })
}

function Sn(e) {
    "use no forget";
    let t = be(),
        n = te(),
        {
            search: r
        } = he();
    return ge({
        mutationFn: async ({
            emails: i,
            role: a,
            seatType: o,
            analyticsFlowId: s,
            submissionId: c
        }) => {
            let l = [],
                u = Math.max(5, Math.round(i.length / 10));
            for (let e = 0; e < i.length; e += u) l.push(i.slice(e, e + u));
            let d = async i => {
                try {
                    let r = await S.safePost(`/accounts/{account_id}/invites`, {
                        parameters: {
                            path: {
                                account_id: e.id
                            }
                        },
                        requestBody: {
                            email_addresses: i,
                            flow_id: s,
                            role: a,
                            seat_type: o,
                            resend_emails: !0,
                            submission_id: c
                        }
                    });
                    return r.errored_emails.length > 0 && n.danger(t.formatMessage($.inviteMessageFailure, {
                        emailsStr: r.errored_emails.map(({
                            email_address: e,
                            error: t
                        }) => `${e}: ${t}`).join(`, `)
                    }), {
                        loggingTitle: `Failed to invite members`,
                        toastId: `admin_invite`,
                        loggingDescription: $.inviteMessageFailure.defaultMessage
                    }), {
                        firstError: void 0,
                        paymentRequired: !1,
                        successfulInviteCount: r.account_invites.length,
                        alreadyMemberCount: r.already_member_emails?.length ?? 0
                    }
                } catch (i) {
                    let a = i instanceof v && i.status === 401 && (i.code === `workspace_subscription_delinquent` || i.code == null && i.message === `Team has a delinquent subscription`),
                        o = a ? e.isOwnerOfAccount() ? t.formatMessage({
                            id: `admin-invite.paymentRequired.owner`,
                            defaultMessage: `Invitations couldn't be sent because your workspace has an unpaid subscription. Update your payment details, then try sending the invitations again.`
                        }) : t.formatMessage({
                            id: `admin-invite.paymentRequired.member`,
                            defaultMessage: `Invitations couldn't be sent because your workspace has an unpaid subscription. Ask a workspace owner to update the payment details, then try again.`
                        }) : i instanceof Error ? i.message : `Failed to invite members`;
                    return n.danger(o, {
                        toastId: `admin_invite`,
                        loggingTitle: `Failed to invite members`,
                        loggingDescription: o,
                        action: a && e.isOwnerOfAccount() ? (0, X.jsx)(E, {
                            as: `a`,
                            to: x(`/admin/billing`, r),
                            openNewTab: !0,
                            color: `primary`,
                            size: `small`,
                            children: (0, X.jsx)(P, {
                                id: `admin-invite.paymentRequired.updatePayment`,
                                defaultMessage: `Update payment`
                            })
                        }) : void 0
                    }), {
                        firstError: i,
                        paymentRequired: a ? !0 : void 0,
                        successfulInviteCount: 0,
                        alreadyMemberCount: 0
                    }
                }
            }, f = await Promise.all(l.map(e => d(e)));
            return {
                firstError: f.find(({
                    firstError: e
                }) => e != null)?.firstError,
                paymentRequired: f.some(e => e.paymentRequired) ? !0 : !f.every(e => e.paymentRequired === !1) && void 0,
                successfulInviteCount: f.reduce((e, t) => e + t.successfulInviteCount, 0),
                alreadyMemberCount: f.reduce((e, t) => e + t.alreadyMemberCount, 0)
            }
        }
    })
}

function K(e) {
    let t = e?.trim() ?? ``;
    return t.startsWith(`"`) && t.endsWith(`"`) || t.startsWith(`'`) && t.endsWith(`'`) ? t.slice(1, -1).trim() : t
}

function Cn(e, t, n) {
    let r = K(e).toLowerCase().replaceAll(`-`, `_`).replaceAll(` `, `_`);
    return t.has(r) ? r : n
}

function wn(e, t) {
    switch (K(e).toLowerCase().replaceAll(`-`, `_`).replaceAll(` `, `_`)) {
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
        let [o = ``, s = ``, c = ``] = i.split(`,`), l = K(o);
        return b.test(l) && !a.has(l) && e.push(On({
            email: l,
            role: Cn(s, t, n),
            seatType: wn(c, r)
        })), a.add(l), e
    }, [])
}

function J(e, t, n, r) {
    return new Promise(i => {
        if (e.size / (1024 * 1024) > En) i({
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
var Tn, Y, X, En, Dn, Z, Q, On, kn, An, jn, Mn, $, Nn = e((() => {
    Tn = ye(), r(), Ve(), Ke(), He(), l(), lt(), m(), xt(), Se(), se(), le(), Ne(), $e(), st(), Ct(), dt(), z(), Tt(), U(), W(), gt(), Nt(), we(), Ee(), yt(), je(), bt(), ft(), ct(), qe(), tt(), Oe(), o(), T(), k(), c(), ae(), Fe(), s(), D(), u(), p(), j(), jt(), ve(), C(), Y = t(me()), F(), N(), I(), ke(), Me(), g(), Gt(), Zt(), sn(), X = de(), En = 25, Dn = 3, Z = 10, Q = [], On = ({
        email: e = ``,
        role: t,
        seatType: n
    }) => ({
        email: e,
        role: t,
        seatType: n
    }), kn = e => {
        if (!e?.length) return Q;
        let t = new Set,
            n = [];
        return e.slice(0, Dn).forEach(e => {
            let r = e.trim();
            if (!r) return;
            let i = r.toLowerCase();
            t.has(i) || (t.add(i), n.push(r))
        }), n
    }, An = ({
        workspace: e,
        inviteFlowAnalytics: t,
        onSuccess: n,
        k12InviteDomain: r,
        initialEmails: o,
        maxInvites: s,
        showRoleColumn: c,
        showSeatTypeColumn: l,
        includeUsageBasedSeatType: u,
        includePremiumSeatType: d,
        defaultInviteSeatType: p,
        availablePaidSeatCounts: m
    }) => {
        "use no forget";
        let h = be(),
            g = pe(),
            _ = te(),
            v = ne(`3528236309`).get(`can_see_analytics_viewer_role`, !1),
            x = a(),
            S = e.isOwnerOfAccount(),
            C = (0, Y.useRef)(null),
            w = Mn(S, v),
            T = (0, Y.useMemo)(() => {
                let t = e.isFreeWorkspace() ? `owner` : `member`;
                return w[t] ?? w.member
            }, [w, e]),
            re = en({
                rows: (o ?? Q).map(e => On({
                    email: e,
                    role: T,
                    seatType: p
                })),
                defaultInviteSeatType: p,
                availablePaidSeatCounts: m
            }),
            [ie, ae] = (0, Y.useState)(!1),
            [oe, E] = (0, Y.useState)(!1),
            [D, O] = (0, Y.useState)(re),
            [se, ce] = (0, Y.useState)([]),
            {
                mutateAsync: k
            } = Sn(e),
            le = L(),
            A = Le() ?? !0,
            [j, ue] = (0, Y.useState)(Q),
            M = (0, Y.useMemo)(() => x?.subscriptionAnalyticsParams, [x]);
        (0, Y.useEffect)(() => {
            let t = D.filter(({
                email: e
            }) => e.trim().length > 0);
            if (!t.length) {
                ue(Q);
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
            ue(i.length ? i : Q)
        }, [le, A, D, r, e]);
        let N = (0, Y.useCallback)(e => {
                let t = {
                    numEmailsAdded: e,
                    uploadType: `Bulk`
                };
                i.logEvent(`Account Pay: Collaborator Emails Added`, {
                    ...M,
                    ...t
                })
            }, [M]),
            de = (0, Y.useCallback)(async e => {
                let t = e.target.files?.[0];
                if (!t) return !1;
                let n = await J(t, new Set(Object.values(w)), T, p);
                if (n.status === `success`) {
                    let t = en({
                        rows: qt(n.newRows, s),
                        defaultInviteSeatType: p,
                        availablePaidSeatCounts: m
                    });
                    return s != null && hn(n.newRows).length > s && _.warning(h.formatMessage($.inviteLimitWarning, {
                        maxInvites: s
                    }), {
                        duration: 5,
                        id: `admin_invite_limit`
                    }), ae(!0), O(t), ce(t.map(e => ({
                        label: e.email,
                        value: e.email,
                        isValid: b.test(e.email)
                    }))), N(t.length), e.target.files = null, !0
                }
                return n.reason === `file_too_large` ? _.danger(h.formatMessage($.fileTooLargeWarning, {
                    maxSize: `${En}MB`
                }), {
                    duration: 5,
                    loggingTitle: `CSV Upload: File too large`,
                    toastId: `csv_upload_too_large`,
                    loggingDescription: $.fileTooLargeWarning.defaultMessage
                }) : n.reason === `invalid_file_type` && _.danger(h.formatMessage($.fileIncorrectTypeWarning), {
                    duration: 5,
                    loggingTitle: `CSV Upload: File incorrect type`,
                    toastId: `csv_upload`,
                    loggingDescription: $.fileIncorrectTypeWarning.defaultMessage
                }), !1
            }, [w, m, T, p, h, s, _, N]),
            fe = (e, t, n) => {
                let r = [...D];
                r[e] = {
                    ...r[e],
                    [t]: n
                }, O(r)
            },
            P = (0, Y.useCallback)(e => {
                i.logEvent(`Account Pay: Add Collaborators Modal Clicked`, {
                    ...M,
                    ...e
                })
            }, [M]),
            F = (0, Y.useCallback)(() => {
                i.logEvent(`Account Pay: Add Collaborators Upload Clicked`, M)
            }, [M]),
            me = (0, Y.useCallback)(() => {
                i.logEvent(`Account Pay: Collaborator Email Removed`, M)
            }, [M]),
            I = (0, Y.useCallback)(e => {
                let t = R(e);
                return i.logEvent(`Account Pay: Invite Collaborators Submitted`, {
                    ...M,
                    ...e
                }, t ? {
                    eventId: t
                } : void 0), t
            }, [M]),
            he = e => {
                let t = [...D.slice(0, e), ...D.slice(e + 1)];
                O(t), me()
            },
            ge = (0, Y.useCallback)(() => {
                O([]), E(!1), ce([]), ae(!1)
            }, []),
            ve = (0, Y.useCallback)(async (r, i, a = !1) => {
                E(!0);
                let o = !1;
                try {
                    let s = _e();
                    r.length > 5 && _.info(h.formatMessage($.inviteMessageLoading, {
                        numRows: r.length
                    }), {
                        hasCloseButton: !0
                    });
                    let c = [
                            [`admin`, y.ADMIN],
                            [`owner`, y.OWNER],
                            [`member`, y.STANDARD],
                            [`analytics_viewer`, y.ANALYTICS_VIEWER]
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
                        }) => k({
                            emails: e,
                            analyticsFlowId: i.flowId,
                            role: t,
                            seatType: n,
                            submissionId: s
                        }))),
                        d = u.reduce((e, t) => e + (t.status === `fulfilled` ? t.value.successfulInviteCount : 0), 0),
                        p = u.reduce((e, t) => e + (t.status === `fulfilled` ? t.value.alreadyMemberCount : 0), 0),
                        m;
                    for (let e of u) {
                        if (e.status === `rejected`) {
                            m = e.reason;
                            break
                        }
                        if (e.value.firstError != null) {
                            m = e.value.firstError;
                            break
                        }
                    }
                    t.recordResult(d + p, m == null), H(i, {
                        ...m != null && a ? {
                            actionFailureType: `mutation_failed`,
                            failedTargetCount: Math.max(0, r.length - d - p),
                            step: `action_attempt_failed`,
                            successfulTargetCount: d
                        } : G({
                            affectedTargetCount: r.length,
                            successfulTargetCount: d,
                            alreadyMemberCount: p
                        }),
                        paymentRequired: u.some(e => e.status === `fulfilled` && e.value.paymentRequired) ? !0 : !u.every(e => e.status === `fulfilled` && e.value.paymentRequired === !1) && void 0
                    }), o = !0;
                    let v = I({
                        ...zt(r),
                        numSuccessfulInvites: d
                    });
                    if (d > 0 && (setTimeout(() => {
                            g.invalidateQueries({
                                queryKey: [`workspace`, e.id, `invites`, 0, ``],
                                exact: !0
                            })
                        }, 1e3), _.success(h.formatMessage($.inviteSuccessToast, {
                            numRows: d,
                            userStr: d === 1 ? `user` : `users`,
                            workspaceName: f(h, e)
                        }))), p > 0 && _.info(h.formatMessage({
                            id: `admin-invite.toast.already_member`,
                            defaultMessage: `{count, plural, one {Already a member — no invitation sent} other {# people are already members — no invitations sent}}`
                        }, {
                            count: p
                        })), ee(ze, r.length, {
                            action: `SubmitEmails`,
                            location: `modal-submit-button`,
                            text: `Submit`,
                            step: `AdminModal-CollectEmails-Submit`,
                            numSuccessfulInvites: d.toString(),
                            ...v ? {
                                unique_event_id: v
                            } : {}
                        }), m != null) throw m;
                    n?.(), ge()
                } catch (e) {
                    throw t.recordResult(0, !1), o || H(i, {
                        step: a ? `action_attempt_failed` : `action_failed`,
                        actionFailureType: `mutation_failed`
                    }), e
                } finally {
                    E(!1)
                }
            }, [ge, k, t, h, n, g, _, I, e]),
            ye = (0, Y.useCallback)(async (n, r = !1, i = !1) => {
                let a = cn({
                        rows: D,
                        defaultInviteRole: T,
                        defaultInviteSeatType: p,
                        includePremiumSeatType: d,
                        includeUsageBasedSeatType: u,
                        maxInvites: s,
                        showRoleColumn: c,
                        showSeatTypeColumn: l,
                        availablePaidSeatCounts: m
                    }),
                    o = a.filter(e => e.seatType === It).length,
                    f = n ?? ln({
                        rows: a,
                        workspace: e
                    });
                n ?? H(f, {
                    step: `action_initiated`
                });
                let h = t.startAction();
                try {
                    if (r) {
                        await ve(a, f, i);
                        return
                    }
                    if (o > 0) {
                        await Et({
                            analyticsFlow: f,
                            workspace: e,
                            introducedDefaultSeatCount: o,
                            entrypoint: `workspace_onboarding_admin_invite`,
                            onContinue: async () => {
                                await ve(a, f)
                            }
                        });
                        return
                    }
                    H(f, {
                        step: `capacity_evaluated`,
                        capacityResult: `not_required`,
                        paymentRequired: !1
                    }), await ve(a, f)
                } finally {
                    h()
                }
            }, [m, T, p, D, d, u, t, c, l, ve, e, s]);
        return {
            INVITE_ROLES: w,
            defaultInviteRole: T,
            clearState: ge,
            emailTableRows: D,
            emailTextAreaValue: se,
            emailsOutsideOfDomain: j,
            fileInputRef: C,
            handleClickImportCSV: (0, Y.useCallback)(() => {
                C.current?.value && (C.current.value = ``), C.current?.click(), typeof document < `u` && document.activeElement && setTimeout(() => {
                    document.activeElement?.blur?.()
                }, 0), F()
            }, [C, F]),
            handleDeleteRow: he,
            handleInputChange: fe,
            handleSubmit: ye,
            handleUploadCSV: de,
            hasUploadedCsv: ie,
            isInviting: oe,
            setEmailTableRows: O,
            setEmailTextAreaValue: ce,
            trackNavigationClick: P,
            trackUploadClick: F
        }
    }, jn = ({
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
        let c = be(),
            [l, u] = (0, Y.useState)(!1),
            d = M(),
            f = (0, Y.useMemo)(() => d ? Yt(d) : null, [d]),
            p = a ?? f,
            {
                hasMismatchedDomain: m,
                isDuplicate: h,
                isInvalid: g
            } = (0, Y.useMemo)(() => Xt({
                email: e,
                index: t,
                emailInputList: n,
                inviteDomain: p,
                shouldCheckDomainMismatch: i
            }), [e, n, t, p, i]),
            _ = l && g,
            v = l && m,
            y = h && !_ && !v,
            b = _ || v || y,
            x = c.formatMessage($.emailInputPlaceholder);
        return (0, X.jsxs)(`div`, {
            className: `flex w-full flex-col gap-1`,
            children: [(0, X.jsx)(Be, {
                ariaLabel: o ?? x,
                name: `email`,
                type: `email`,
                value: e,
                placeholder: x,
                onBlur: () => {
                    u(!0), m && ee(`chatgpt_business_workspace_invite_domain_mismatch`)
                },
                onChange: e => {
                    r(e.target.value)
                },
                color: `tertiary`,
                className: A(s === `stacked` ? `min-h-[48px] w-full overflow-hidden rounded-full! border border-black/6 bg-[#F7F7F7] px-5 py-3 shadow-none dark:border-white/10 dark:bg-[#1F1F1F]` : `ms-px w-[90%] rounded-[20px] px-4 py-2`, b && `border-token-text-error focus:border-token-text-error`),
                containerInputClassName: `w-full`,
                inputClassName: A(`placeholder:text-token-text-tertiary dark:bg-transparent`, s === `stacked` && `bg-transparent text-[16px] leading-6 text-[#1F1F1F] placeholder:text-[16px] placeholder:leading-6 placeholder:text-[#9B9B9B] dark:text-white/92 dark:placeholder:text-white/40`),
                displayNameLabelClassName: `hidden`
            }), _ && (0, X.jsx)(`div`, {
                className: `text-token-text-error ms-1 flex text-xs`,
                children: (0, X.jsx)(P, {
                    ...$.invalidEmailWarning
                })
            }), v && (0, X.jsx)(`div`, {
                className: `text-token-text-error ms-1 flex text-xs`,
                children: (0, X.jsx)(P, {
                    ...$.mismatchedDomainWarning,
                    values: {
                        domain: p ?? ``
                    }
                })
            }), y && (0, X.jsx)(`div`, {
                className: `text-token-text-error ms-1 flex text-xs`,
                children: (0, X.jsx)(P, {
                    ...$.duplicateEmailWarning
                })
            })]
        })
    }, Mn = (e, t) => {
        let n = {
            member: `member`
        };
        return e && (n.admin = `admin`, n.owner = `owner`, t && (n.analytics_viewer = `analytics_viewer`)), n
    }, $ = fe({
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
    Bt as a, Gt as i, _n as n, Nn as r, vn as t
};
//# sourceMappingURL=96bf3632-itm4jhz9snarp29m.js.map
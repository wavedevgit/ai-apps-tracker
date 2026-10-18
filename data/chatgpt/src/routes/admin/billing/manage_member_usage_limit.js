import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as n,
    C1 as r,
    a7 as i,
    dz as ee,
    fz as a,
    hU as o,
    i_ as s,
    kT as te,
    l7 as c,
    pU as l,
    r_ as u,
    u1 as d
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as f,
    Bn as p,
    Ht as ne,
    Ln as m,
    N as re,
    Nn as h,
    Rn as g,
    Ut as _,
    Vn as v,
    p as ie,
    s as y,
    wn as b,
    zn as ae
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $C as oe,
    T6t as x,
    dH as S,
    ew as C,
    i8t as w,
    idn as T,
    j6t as E,
    lH as se,
    m8t as D,
    r8t as O,
    rdn as k,
    uH as A
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Qo as ce,
    Xv as j,
    Zv as le,
    is as ue,
    rs as de,
    ts as fe
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    n as pe,
    t as me
} from "./18a8b3b4-j1w1kjk6hbuut0sf.js";
import {
    n as he,
    t as ge
} from "./9f2e6d33-favh86igrrldl3up.js";
import {
    n as _e,
    t as ve
} from "./37b207d4-drt35swkrbdu95qj.js";
import {
    i as ye,
    o as be
} from "./1212b029-kgcj3fakl8vwct7x.js";
import {
    r as xe,
    t as Se
} from "./8c6976e5-ibz7fcap50r267b6.js";
import {
    a as Ce,
    i as we,
    n as Te,
    o as Ee,
    r as De,
    t as Oe
} from "./af584902-dhjh1ima5dfjhkva.js";
import {
    r as ke,
    t as Ae
} from "./ef852af5-mn34i76nr8q8ltpw.js";
import {
    n as M,
    t as je
} from "./96984d0a-s4jl6zhhn8xuxfj6.js";

function N() {
    "use forget";
    let e = (0, Pe.c)(81),
        t = ae(),
        n = o(),
        a = re(),
        s = r(),
        [te] = ne(),
        c;
    e[0] === te ? c = e[1] : (c = te.get(`search`) ?? ``, e[0] = te, e[1] = c);
    let l = c,
        [d, f] = (0, P.useState)(0),
        [p, m] = (0, P.useState)(l),
        [g, _] = (0, P.useState)(l),
        [v, y] = (0, P.useState)(null),
        b = s?.id,
        oe = s?.data,
        x;
    e[2] === oe ? x = e[3] : (x = _e(oe), e[2] = oe, e[3] = x);
    let C = x,
        w = b != null,
        T;
    e[4] !== w || e[5] !== b ? (T = {
        activeWorkspaceId: b,
        enabled: w
    }, e[4] = w, e[5] = b, e[6] = T) : T = e[6];
    let {
        isLoading: A,
        usageLimitsConfig: j
    } = D(T), le = j, ue;
    e[7] === le ? ue = e[8] : (ue = O(le), e[7] = le, e[8] = ue);
    let pe = ue,
        me = pe?.can_access_member_overrides_route === !0,
        he = me && pe?.can_view_member_overrides,
        ve = me && pe?.can_manage_member_overrides,
        ye;
    e[9] === Symbol.for(`react.memo_cache_sentinel`) ? (ye = u(e => {
        f(0), _(e)
    }, 300, {
        leading: !1,
        trailing: !0
    }), e[9] = ye) : ye = e[9];
    let be = ye,
        xe, Se;
    e[10] === Symbol.for(`react.memo_cache_sentinel`) ? (xe = () => () => be.cancel(), Se = [be], e[10] = xe, e[11] = Se) : (xe = e[10], Se = e[11]), (0, P.useEffect)(xe, Se);
    let De, ke;
    e[12] === l ? (De = e[13], ke = e[14]) : (ke = () => {
        f(0), m(l), _(l)
    }, De = [l], e[12] = l, e[13] = De, e[14] = ke), (0, P.useEffect)(ke, De);
    let M = E(me && he ? b : void 0, d * 25, g, 25, void 0, void 0, !0),
        je;
    e[15] === M.data ? je = e[16] : (je = M.data == null ? void 0 : {
        ...M.data,
        items: M.data.items.map(Me)
    }, e[15] = M.data, e[16] = je);
    let N = je,
        L;
    e[17] === b ? L = e[18] : (L = async e => {
        let {
            userId: t,
            limit: n
        } = e;
        if (!b) throw Error(`Workspace id is required`);
        return await i.safePatch(`/accounts/{account_id}/users/{user_id}`, {
            parameters: {
                path: {
                    account_id: b,
                    user_id: t
                }
            },
            requestBody: {
                credit_limits: S(n)
            }
        })
    }, e[17] = b, e[18] = L);
    let R;
    e[19] !== a || e[20] !== b ? (R = async e => {
        if (!b) return {
            previousCacheEntries: []
        };
        await Oe({
            queryClient: a,
            workspaceId: b
        });
        let t = Te({
            queryClient: a,
            workspaceId: b
        });
        return Ee({
            queryClient: a,
            workspaceId: b,
            userId: e.userId,
            creditLimits: S(e.limit)
        }), {
            previousCacheEntries: t
        }
    }, e[19] = a, e[20] = b, e[21] = R) : R = e[21];
    let z;
    e[22] === a ? z = e[23] : (z = (e, t, n) => {
        n != null && Ce({
            queryClient: a,
            snapshot: n.previousCacheEntries
        })
    }, e[22] = a, e[23] = z);
    let B;
    e[24] !== a || e[25] !== b ? (B = (e, t) => {
        b && we({
            queryClient: a,
            workspaceId: b,
            refetchType: `none`
        })
    }, e[24] = a, e[25] = b, e[26] = B) : B = e[26];
    let Fe;
    e[27] !== L || e[28] !== R || e[29] !== z || e[30] !== B ? (Fe = {
        mutationFn: L,
        onMutate: R,
        onError: z,
        onSuccess: B
    }, e[27] = L, e[28] = R, e[29] = z, e[30] = B, e[31] = Fe) : Fe = e[31];
    let Ie = ie(Fe),
        Le;
    e[32] !== v || e[33] !== t || e[34] !== n || e[35] !== Ie ? (Le = async e => {
        if (v != null) try {
            await Ie.mutateAsync({
                userId: v.id,
                limit: e
            }), n.success(t.formatMessage(I.saveSuccess), {
                hasCloseButton: !0
            }), y(null)
        } catch {
            n.warning(t.formatMessage(I.saveError), {
                hasCloseButton: !0
            })
        }
    }, e[32] = v, e[33] = t, e[34] = n, e[35] = Ie, e[36] = Le) : Le = e[36];
    let Re = Le,
        ze = A || M.isLoading || M.isFetching,
        Be = l !== `` && !M.isFetched || N == null && ze || N?.items.length === 0 && M.isFetching;
    if (!A && (!me || !he)) return null;
    let V;
    e[37] === t ? V = e[38] : (V = t.formatMessage(I.browserTitle), e[37] = t, e[38] = V);
    let H;
    e[39] === V ? H = e[40] : (H = (0, F.jsx)(ge, {
        children: (0, F.jsx)(`title`, {
            children: V
        })
    }), e[39] = V, e[40] = H);
    let U;
    e[41] === t ? U = e[42] : (U = t.formatMessage(I.billingBreadcrumb), e[41] = t, e[42] = U);
    let W;
    e[43] === U ? W = e[44] : (W = {
        label: U,
        href: `/admin/billing`
    }, e[43] = U, e[44] = W);
    let G;
    e[45] === t ? G = e[46] : (G = t.formatMessage(I.pageTitle), e[45] = t, e[46] = G);
    let K;
    e[47] === G ? K = e[48] : (K = {
        label: G
    }, e[47] = G, e[48] = K);
    let q;
    e[49] !== W || e[50] !== K ? (q = (0, F.jsx)(de, {
        items: [W, K]
    }), e[49] = W, e[50] = K, e[51] = q) : q = e[51];
    let J;
    e[52] === t ? J = e[53] : (J = t.formatMessage(I.pageTitle), e[52] = t, e[53] = J);
    let Ve;
    e[54] === Symbol.for(`react.memo_cache_sentinel`) ? (Ve = (0, F.jsx)(h, {
        ...I.pageSubtitle
    }), e[54] = Ve) : Ve = e[54];
    let Y;
    e[55] !== q || e[56] !== J ? (Y = (0, F.jsx)(fe, {
        contentWidth: `medium`,
        navigation: q,
        title: J,
        subtitle: Ve
    }), e[55] = q, e[56] = J, e[57] = Y) : Y = e[57];
    let He;
    e[58] === Symbol.for(`react.memo_cache_sentinel`) ? (He = e => {
        m(e.target.value), be(e.target.value)
    }, e[58] = He) : He = e[58];
    let X;
    e[59] === t ? X = e[60] : (X = t.formatMessage(I.searchMembersPlaceholder), e[59] = t, e[60] = X);
    let Z;
    e[61] !== p || e[62] !== X ? (Z = (0, F.jsx)(`div`, {
        className: `mb-4.5 flex items-center justify-between`,
        children: (0, F.jsx)(k, {
            value: p,
            onChange: He,
            placeholder: X,
            inputClassName: `rounded-full! text-sm`
        })
    }), e[61] = p, e[62] = X, e[63] = Z) : Z = e[63];
    let Q;
    e[64] !== ve || e[65] !== Be || e[66] !== d || e[67] !== C || e[68] !== N ? (Q = Be ? (0, F.jsx)(`div`, {
        className: `flex min-h-[40vh] items-center justify-center`,
        children: (0, F.jsx)(ee, {})
    }) : (0, F.jsx)(Ne, {
        canManageMemberOverrides: ve,
        currentPage: d,
        data: N,
        onChangePage: f,
        onEditUser: y,
        showSeatTypeColumn: C
    }), e[64] = ve, e[65] = Be, e[66] = d, e[67] = C, e[68] = N, e[69] = Q) : Q = e[69];
    let Ue;
    e[70] !== Z || e[71] !== Q ? (Ue = (0, F.jsx)(ce, {
        contentWidth: `medium`,
        showSpinner: !1,
        className: `pb-10`,
        children: (0, F.jsxs)(`div`, {
            className: `mt-6`,
            children: [Z, Q]
        })
    }), e[70] = Z, e[71] = Q, e[72] = Ue) : Ue = e[72];
    let $;
    e[73] !== v || e[74] !== Re ? ($ = v == null ? null : (0, F.jsx)(Ae, {
        allowUnlimited: !0,
        currentLimit: se(v.credit_limits),
        getValidationResult: void 0,
        placeholder: `0`,
        onClose: () => y(null),
        onSave: Re
    }), e[73] = v, e[74] = Re, e[75] = $) : $ = e[75];
    let We;
    return e[76] !== H || e[77] !== Y || e[78] !== Ue || e[79] !== $ ? (We = (0, F.jsxs)(F.Fragment, {
        children: [H, Y, Ue, $]
    }), e[76] = H, e[77] = Y, e[78] = Ue, e[79] = $, e[80] = We) : We = e[80], We
}

function Me(e) {
    return {
        ...e,
        last_month_usage: `last_month_usage` in e && typeof e.last_month_usage == `number` ? e.last_month_usage : null
    }
}

function Ne(e) {
    "use forget";
    let t = (0, Pe.c)(53),
        {
            canManageMemberOverrides: n,
            currentPage: r,
            data: i,
            onChangePage: ee,
            onEditUser: a,
            showSeatTypeColumn: o
        } = e,
        s = ae(),
        c;
    t[0] === i?.items ? c = t[1] : (c = i?.items ?? [], t[0] = i?.items, t[1] = c);
    let l = c,
        u = Math.ceil((i?.total ?? 0) / 25);
    r >= u && u !== 0 && ee(Math.max(u - 1, 0));
    let d = o ? `w-[40%]` : `w-[50%]`,
        f;
    t[2] === d ? f = t[3] : (f = (0, F.jsx)(`col`, {
        className: d
    }), t[2] = d, t[3] = f);
    let p;
    t[4] === o ? p = t[5] : (p = o && (0, F.jsx)(`col`, {
        className: `w-[18%]`
    }), t[4] = o, t[5] = p);
    let ne = o ? `w-[14%]` : `w-[18%]`,
        m;
    t[6] === ne ? m = t[7] : (m = (0, F.jsx)(`col`, {
        className: ne
    }), t[6] = ne, t[7] = m);
    let re = o ? `w-[16%]` : `w-[20%]`,
        g;
    t[8] === re ? g = t[9] : (g = (0, F.jsx)(`col`, {
        className: re
    }), t[8] = re, t[9] = g);
    let _;
    t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = (0, F.jsx)(`col`, {
        className: `w-[12%]`
    }), t[10] = _) : _ = t[10];
    let v;
    t[11] !== f || t[12] !== p || t[13] !== m || t[14] !== g ? (v = (0, F.jsxs)(`colgroup`, {
        children: [f, p, m, g, _]
    }), t[11] = f, t[12] = p, t[13] = m, t[14] = g, t[15] = v) : v = t[15];
    let ie;
    t[16] === Symbol.for(`react.memo_cache_sentinel`) ? (ie = (0, F.jsx)(j.HeaderCell, {
        children: (0, F.jsx)(h, {
            ...I.nameColumn
        })
    }), t[16] = ie) : ie = t[16];
    let y;
    t[17] === o ? y = t[18] : (y = o && (0, F.jsx)(j.HeaderCell, {
        children: (0, F.jsx)(h, {
            ...I.seatTypeColumn
        })
    }), t[17] = o, t[18] = y);
    let b;
    t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (b = (0, F.jsx)(j.HeaderCell, {
        children: (0, F.jsx)(h, {
            ...I.creditsUsageColumn
        })
    }), t[19] = b) : b = t[19];
    let x;
    t[20] === Symbol.for(`react.memo_cache_sentinel`) ? (x = (0, F.jsx)(j.HeaderCell, {
        children: (0, F.jsx)(h, {
            ...I.monthlyLimitColumn
        })
    }), t[20] = x) : x = t[20];
    let S;
    t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (S = (0, F.jsx)(j.HeaderCell, {
        children: (0, F.jsx)(h, {
            ...I.actionsColumn
        })
    }), t[21] = S) : S = t[21];
    let C;
    t[22] === y ? C = t[23] : (C = (0, F.jsxs)(j.Header, {
        children: [ie, y, b, x, S]
    }), t[22] = y, t[23] = C);
    let w;
    if (t[24] !== n || t[25] !== s || t[26] !== l || t[27] !== a || t[28] !== o) {
        let e;
        t[30] !== n || t[31] !== s || t[32] !== a || t[33] !== o ? (e = e => {
            let t = se(e.credit_limits),
                r = e.name || e.email || e.id,
                i = e.email || s.formatMessage(I.noEmail);
            return (0, F.jsxs)(j.Row, {
                className: `[&>td]:py-2`,
                children: [(0, F.jsxs)(j.Cell, {
                    divClassName: `min-h-[40px] min-w-0 items-center`,
                    children: [(0, F.jsx)(`div`, {
                        className: `relative shrink-0 pe-3`,
                        children: (0, F.jsx)(me, {
                            userName: r,
                            isScimManaged: e.is_scim_managed
                        })
                    }), (0, F.jsxs)(`div`, {
                        className: `min-w-0`,
                        children: [(0, F.jsx)(`div`, {
                            className: `flex min-w-0 items-center gap-1`,
                            children: (0, F.jsx)(`span`, {
                                className: `min-w-0 truncate`,
                                title: r,
                                children: r
                            })
                        }), (0, F.jsx)(`div`, {
                            className: `text-body-small-regular text-token-text-secondary truncate`,
                            title: i,
                            children: i
                        })]
                    })]
                }), o && (0, F.jsx)(j.Cell, {
                    children: (0, F.jsx)(ye, {
                        seatType: e.seat_type
                    })
                }), (0, F.jsx)(j.Cell, {
                    children: s.formatNumber(e.last_month_usage ?? 0, {
                        maximumFractionDigits: 1
                    })
                }), (0, F.jsx)(j.Cell, {
                    children: (0, F.jsx)(`div`, {
                        className: `min-w-0 text-sm`,
                        children: t === `unlimited_platform_max` ? (0, F.jsx)(h, {
                            ...I.unlimitedMonthlyLimit
                        }) : t == null ? (0, F.jsx)(`span`, {
                            className: `text-token-text-secondary`,
                            children: (0, F.jsx)(h, {
                                ...I.noMonthlyLimit
                            })
                        }) : (0, F.jsx)(h, {
                            ...I.monthlyLimitValue,
                            values: {
                                limit: s.formatNumber(t)
                            }
                        })
                    })
                }), (0, F.jsx)(j.Cell, {
                    children: (0, F.jsx)(`div`, {
                        className: `flex justify-end`,
                        children: (0, F.jsx)(je, {
                            disabled: !n,
                            testId: `${e.id}-usage-limit-owner-disabled-tooltip-trigger`,
                            children: (0, F.jsx)(te, {
                                color: `secondary`,
                                disabled: !n,
                                onClick: () => a(e),
                                children: (0, F.jsx)(h, {
                                    ...t == null ? I.addButton : I.editButton
                                })
                            })
                        })
                    })
                })]
            }, e.id)
        }, t[30] = n, t[31] = s, t[32] = a, t[33] = o, t[34] = e) : e = t[34], w = l.map(e), t[24] = n, t[25] = s, t[26] = l, t[27] = a, t[28] = o, t[29] = w
    } else w = t[29];
    let T;
    t[35] === l.length ? T = t[36] : (T = l.length === 0 && (0, F.jsx)(j.Row, {
        className: `[&>td]:py-2`,
        children: (0, F.jsx)(j.Cell, {
            children: (0, F.jsx)(`div`, {
                className: `text-token-text-tertiary`,
                children: (0, F.jsx)(h, {
                    ...I.noResults
                })
            })
        })
    }), t[35] = l.length, t[36] = T);
    let E;
    t[37] !== w || t[38] !== T ? (E = (0, F.jsxs)(j.Body, {
        children: [w, T]
    }), t[37] = w, t[38] = T, t[39] = E) : E = t[39];
    let D;
    t[40] !== v || t[41] !== C || t[42] !== E ? (D = (0, F.jsxs)(j.Root, {
        fixed: !0,
        size: `normal`,
        children: [v, C, E]
    }), t[40] = v, t[41] = C, t[42] = E, t[43] = D) : D = t[43];
    let O;
    t[44] !== r || t[45] !== u || t[46] !== ee ? (O = u > 1 && (0, F.jsx)(`div`, {
        className: `absolute start-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 justify-center`,
        children: (0, F.jsx)(oe, {
            currentPage: r,
            onChangeIndex: ee,
            length: u
        })
    }), t[44] = r, t[45] = u, t[46] = ee, t[47] = O) : O = t[47];
    let k;
    t[48] === O ? k = t[49] : (k = (0, F.jsx)(`div`, {
        className: `relative mt-4 mb-8 min-h-[20px]`,
        children: O
    }), t[48] = O, t[49] = k);
    let A;
    return t[50] !== D || t[51] !== k ? (A = (0, F.jsxs)(F.Fragment, {
        children: [D, k]
    }), t[50] = D, t[51] = k, t[52] = A) : A = t[52], A
}
var Pe, P, F, I, L = e((() => {
        Pe = b(), ue(), w(), pe(), be(), x(), De(), A(), n(), le(), C(), T(), a(), d(), l(), c(), ve(), he(), y(), s(), P = t(v()), g(), f(), M(), ke(), F = p(), I = m({
            actionsColumn: {
                id: `organizationBillingInfo.userLevelOverride.actionsColumn`,
                defaultMessage: `Actions`
            },
            addButton: {
                id: `organizationBillingInfo.userLevelOverride.addButton`,
                defaultMessage: `Add`
            },
            billingBreadcrumb: {
                id: `organizationBillingInfo.userLevelOverride.billingBreadcrumb`,
                defaultMessage: `Billing`
            },
            browserTitle: {
                id: `organizationBillingInfo.userLevelOverride.browserTitle`,
                defaultMessage: `ChatGPT - Admin | Per user override`
            },
            creditsUsageColumn: {
                id: `organizationBillingInfo.userLevelOverride.creditsUsageColumn`,
                defaultMessage: `Last month’s usage`
            },
            editButton: {
                id: `organizationBillingInfo.userLevelOverride.editButton`,
                defaultMessage: `Edit`
            },
            monthlyLimitColumn: {
                id: `organizationBillingInfo.userLevelOverride.monthlyLimitColumn`,
                defaultMessage: `Monthly limit override`
            },
            monthlyLimitValue: {
                id: `organizationBillingInfo.userLevelOverride.monthlyLimitValue`,
                defaultMessage: `{limit} credits / month`
            },
            nameColumn: {
                id: `organizationBillingInfo.userLevelOverride.nameColumn`,
                defaultMessage: `Name`
            },
            noEmail: {
                id: `organizationBillingInfo.userLevelOverride.noEmail`,
                defaultMessage: `No email`
            },
            noMonthlyLimit: {
                id: `organizationBillingInfo.userLevelOverride.noMonthlyLimit`,
                defaultMessage: `Not set`
            },
            unlimitedMonthlyLimit: {
                id: `organizationBillingInfo.userLevelOverride.unlimitedMonthlyLimit`,
                defaultMessage: `Unlimited`
            },
            noResults: {
                id: `organizationBillingInfo.userLevelOverride.noResults`,
                defaultMessage: `No matching users found`
            },
            pageSubtitle: {
                id: `organizationBillingInfo.userLevelOverride.pageSubtitle`,
                defaultMessage: `Override the default monthly usage limits for individual members.`
            },
            pageTitle: {
                id: `organizationBillingInfo.userLevelOverride.pageTitle`,
                defaultMessage: `Per user override`
            },
            saveError: {
                id: `organizationBillingInfo.userLevelOverride.saveError`,
                defaultMessage: `Unable to update the usage limit override`
            },
            saveSuccess: {
                id: `organizationBillingInfo.userLevelOverride.saveSuccess`,
                defaultMessage: `Usage limit override updated`
            },
            searchMembersPlaceholder: {
                id: `organizationBillingInfo.userLevelOverride.searchMembersPlaceholder`,
                defaultMessage: `Filter by name`
            },
            seatTypeColumn: {
                id: `organizationBillingInfo.userLevelOverride.seatTypeColumn`,
                defaultMessage: `Seat type`
            }
        })
    })),
    R, z, B, Fe = e((() => {
        f(), R = b(), L(), Se(), z = p(), B = _(function() {
            "use forget";
            let e = (0, R.c)(1);
            xe();
            let t;
            return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, z.jsx)(N, {}), e[0] = t) : t = e[0], t
        })
    }));
e((() => {
    Fe()
}))();
export {
    B as
    default
};
//# sourceMappingURL=admin.billing.manage_member_usage_limit-jsrasp5y.js.map
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as n,
    C1 as r,
    Jc as i,
    Kc as a,
    My as o,
    Qit as s,
    Rb as ee,
    S1 as c,
    Yc as l,
    dz as te,
    fU as ne,
    fz as u,
    hh as d,
    iat as f,
    jy as p,
    kT as m,
    mh as h,
    pU as g,
    pnt as _,
    qc as v,
    u1 as y,
    ynt as b,
    zb as x
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as S,
    Bn as C,
    N as re,
    Nn as w,
    Rn as ie,
    Ut as T,
    Vn as E,
    l as ae,
    lt as oe,
    p as se,
    s as D,
    wn as ce,
    zn as le
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Bst as O,
    Qb as ue,
    Zb as k,
    cX as de,
    lX as A,
    zst as fe
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    r as j,
    t as pe
} from "./3e72bb91-l4ijhasz7arxe6nl.js";
import {
    i as me,
    n as he,
    r as ge
} from "./ab92372e-glzrgn0c7jblr8e0.js";
import {
    n as M,
    t as _e
} from "./82d09521-e4s1atz8rfooze7z.js";
import {
    i as N,
    n as ve,
    r as ye,
    t as be
} from "./d6dc6b5e-cabcd7qi6gdh7h4a.js";
import {
    n as P,
    t as xe
} from "./66a75a18-fvntj6g93ffxtpuo.js";
import {
    n as Se,
    r as Ce,
    t as we
} from "./139cb2d0-igzjge95hvas5us3.js";

function Te(e) {
    return e.next_cursor ?? null
}

function Ee(e) {
    return e.groups
}

function De(e) {
    return e.groups
}

function Oe(e) {
    return [e.id, e]
}
var F, ke, I, Ae, je, Me, Ne, Pe, Fe, L, R = e((() => {
        F = ce(), n(), h(), A(), x(), o(), O(), u(), y(), g(), f(), b(), ge(), j(), N(), P(), Ce(), k(), M(), l(), D(), ke = t(E()), ie(), S(), I = C(), Ae = `/codex/cloud/settings/environments?provider=gitlab`, je = 25, Me = 300, Ne = 256, Pe = e => {
            "use forget";
            let t = (0, F.c)(34),
                {
                    group: n,
                    coveringGroup: r,
                    isUpdating: i,
                    isMutationPending: a,
                    onToggle: o
                } = e,
                s = le(),
                c = r != null || n.covered_by_group_id != null && n.covered_by_group_id !== n.id,
                l;
            t[0] !== r || t[1] !== s || t[2] !== c ? (l = r ? s.formatMessage({
                id: `wham.environments.gitlab_activity.groups.row.tooltip.covered_by_group`,
                defaultMessage: `Code reviews are enabled through {group}.`
            }, {
                group: r.full_path
            }) : c ? s.formatMessage({
                id: `wham.environments.gitlab_activity.groups.row.tooltip.covered_by_unknown_group`,
                defaultMessage: `Code reviews are enabled through an ancestor group.`
            }) : void 0, t[0] = r, t[1] = s, t[2] = c, t[3] = l) : l = t[3];
            let ne = l,
                u;
            t[4] !== n.full_path || t[5] !== s ? (u = s.formatMessage({
                id: `wham.environments.gitlab_activity.groups.row.toggle.aria_label`,
                defaultMessage: `Enable GitLab activity for {group}`
            }, {
                group: n.full_path
            }), t[4] = n.full_path, t[5] = s, t[6] = u) : u = t[6];
            let d = u,
                f = c || a,
                m;
            t[7] === n.full_path ? m = t[8] : (m = (0, I.jsx)(`div`, {
                className: `flex min-w-0 flex-1 flex-col gap-1`,
                children: (0, I.jsx)(`span`, {
                    className: `truncate text-sm`,
                    children: n.full_path
                })
            }), t[7] = n.full_path, t[8] = m);
            let h = ne ?? d,
                g = n.webhook_enabled || c,
                _;
            t[9] === i ? _ = t[10] : (_ = i ? (0, I.jsx)(te, {
                className: `text-token-text-secondary h-2.5 w-2.5`
            }) : void 0, t[9] = i, t[10] = _);
            let v;
            t[11] !== f || t[12] !== o ? (v = e => {
                f || o(e)
            }, t[11] = f, t[12] = o, t[13] = v) : v = t[13];
            let y;
            t[14] !== f || t[15] !== i || t[16] !== g || t[17] !== _ || t[18] !== v || t[19] !== d ? (y = (0, I.jsx)(ee, {
                "aria-label": d,
                "aria-disabled": f,
                "aria-busy": i,
                className: `aria-disabled:opacity-50`,
                checked: g,
                icon: _,
                onCheckedChange: v
            }), t[14] = f, t[15] = i, t[16] = g, t[17] = _, t[18] = v, t[19] = d, t[20] = y) : y = t[20];
            let b;
            t[21] !== h || t[22] !== y ? (b = (0, I.jsx)(p, {
                label: h,
                side: `top`,
                children: y
            }), t[21] = h, t[22] = y, t[23] = b) : b = t[23];
            let x;
            t[24] !== n.full_path || t[25] !== s || t[26] !== i ? (x = i && (0, I.jsx)(`span`, {
                className: `sr-only`,
                role: `status`,
                "aria-label": s.formatMessage({
                    id: `wham.environments.gitlab_activity.groups.row.loading.aria_label`,
                    defaultMessage: `Updating code reviews for {group}`
                }, {
                    group: n.full_path
                })
            }), t[24] = n.full_path, t[25] = s, t[26] = i, t[27] = x) : x = t[27];
            let S;
            t[28] !== x || t[29] !== b ? (S = (0, I.jsxs)(`div`, {
                className: `flex shrink-0 items-center ps-4`,
                children: [b, x]
            }), t[28] = x, t[29] = b, t[30] = S) : S = t[30];
            let C;
            return t[31] !== S || t[32] !== m ? (C = (0, I.jsxs)(`li`, {
                className: `border-token-border-medium flex min-h-[40px] items-center justify-between gap-4 border-b-[0.5px] px-3 py-2 last:border-b-0`,
                children: [m, S]
            }), t[31] = S, t[32] = m, t[33] = C) : C = t[33], C
        }, Fe = () => {
            "use forget";
            let e = (0, F.c)(55),
                t = le(),
                n = ne(),
                o = re(),
                {
                    isLoading: ee
                } = c(),
                l = r(),
                u = l?.getWorkspaceId(),
                f = ee && l == null,
                p;
            e[0] === l ? p = e[1] : (p = l?.isAdminOfAccount() || l?.isOwnerOfAccount(), e[0] = l, e[1] = p);
            let h = !!p,
                g;
            e[2] === Symbol.for(`react.memo_cache_sentinel`) ? (g = {
                redirectAfter: we
            }, e[2] = g) : g = e[2];
            let {
                connectorId: _,
                isConnected: y,
                isLoading: b,
                platformConnector: x
            } = me(g), S = x?.template_id === he, [C, ie] = (0, ke.useState)(``), T;
            e[3] === C ? T = e[4] : (T = C.trim(), e[3] = C, e[4] = T);
            let E = ue(T, Me),
                D = Se(u, _),
                ce = E ? [...D, E] : D,
                O;
            e[5] === t ? O = e[6] : (O = t.formatMessage({
                id: `wham.environments.gitlab_activity.groups.search.placeholder`,
                defaultMessage: `Search groups`
            }), e[5] = t, e[6] = O);
            let k = O,
                A;
            e[7] !== _ || e[8] !== E ? (A = e => {
                let {
                    pageParam: t,
                    signal: n
                } = e;
                return i.getGitLabGroups(_, {
                    cursor: t,
                    limit: je,
                    search: E || void 0,
                    signal: n
                })
            }, e[7] = _, e[8] = E, e[9] = A) : A = e[9];
            let j = ae({
                    queryKey: ce,
                    initialPageParam: null,
                    queryFn: A,
                    getNextPageParam: Te,
                    enabled: !!(u && _ && y && S && h),
                    refetchOnMount: !0,
                    staleTime: 6e4
                }),
                ge = (e, t, n) => {
                    let r = new Map;
                    for (let [, e] of o.getQueriesData({
                            queryKey: D
                        }))
                        for (let t of e?.pages ?? [])
                            for (let e of t.groups) r.set(e.full_path, e);
                    let i = t => {
                            let n = t,
                                i = !1;
                            for (; n.includes(`/`);) {
                                n = n.slice(0, n.lastIndexOf(`/`));
                                let t = r.get(n);
                                if (t == null) {
                                    i = !0;
                                    continue
                                }
                                if (t.id !== e) {
                                    if (t.webhook_enabled) return {
                                        groupId: t.id,
                                        requiresRefresh: !1
                                    };
                                    if (t.covered_by_group_id != null) {
                                        if (t.covered_by_group_id === e) continue;
                                        return {
                                            groupId: t.covered_by_group_id,
                                            requiresRefresh: !1
                                        }
                                    }
                                }
                            }
                            return {
                                groupId: null,
                                requiresRefresh: i
                            }
                        },
                        a = !1;
                    return o.setQueriesData({
                        queryKey: D
                    }, r => r == null ? r : {
                        ...r,
                        pages: r.pages.map(r => ({
                            ...r,
                            groups: r.groups.map(r => {
                                if (r.id === e) {
                                    let e = n ? {
                                        groupId: null,
                                        requiresRefresh: !1
                                    } : i(r.full_path);
                                    return a ||= e.requiresRefresh, {
                                        ...r,
                                        webhook_enabled: n,
                                        covered_by_group_id: e.groupId
                                    }
                                }
                                if (r.webhook_enabled || !r.full_path.startsWith(`${t}/`)) return r;
                                if (n && r.covered_by_group_id == null) return {
                                    ...r,
                                    covered_by_group_id: e
                                };
                                if (!n && r.covered_by_group_id === e) {
                                    let e = i(r.full_path);
                                    return a ||= e.requiresRefresh, {
                                        ...r,
                                        covered_by_group_id: e.groupId
                                    }
                                }
                                return r
                            })
                        }))
                    }), a
                },
                M;
            e[10] === _ ? M = e[11] : (M = e => {
                let {
                    groupId: t,
                    enabled: n
                } = e;
                return i.updateGitLabGroupWebhook({
                    connectorId: _,
                    groupId: t,
                    enabled: n
                })
            }, e[10] = _, e[11] = M);
            let N = se({
                    mutationFn: M,
                    onSuccess: async (e, r) => {
                        let {
                            groupPath: i
                        } = r, a = ge(e.group_id, i, e.enabled) ? `active` : `none`;
                        try {
                            await o.invalidateQueries({
                                queryKey: D,
                                refetchType: a
                            }, {
                                throwOnError: !0
                            })
                        } catch {
                            n.warning(t.formatMessage({
                                id: `wham.environments.gitlab_activity.groups.toast.refresh_error`,
                                defaultMessage: `Code review settings were updated, but the group list couldn’t be refreshed. Try again.`
                            }));
                            return
                        }
                        n.success(e.enabled ? t.formatMessage({
                            id: `wham.environments.gitlab_activity.groups.toast.enable_success`,
                            defaultMessage: `Code reviews enabled for {group}.`
                        }, {
                            group: i
                        }) : t.formatMessage({
                            id: `wham.environments.gitlab_activity.groups.toast.settings_updated`,
                            defaultMessage: `Code review settings updated for {group}.`
                        }, {
                            group: i
                        }))
                    },
                    onError: e => {
                        n.danger(e instanceof a && e.type === v.GITLAB_WEBHOOK_SIGNING_UNSUPPORTED ? _e : e instanceof s && e.status === 403 ? t.formatMessage({
                            id: `wham.environments.gitlab_activity.groups.toast.permission_error`,
                            defaultMessage: `A workspace administrator with GitLab group Owner access must update group activity.`
                        }) : t.formatMessage({
                            id: `wham.environments.gitlab_activity.groups.toast.update_error`,
                            defaultMessage: `Couldn’t update GitLab group activity. Try again.`
                        }))
                    }
                }),
                P = j.data?.pages.flatMap(Ee) ?? [],
                Ce = [...E ? o.getQueryData(D)?.pages.flatMap(De) ?? [] : [], ...P],
                Fe = new Map(Ce.map(Oe));
            if (!f && !h || !b && x && !S) {
                let t;
                return e[12] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, I.jsx)(oe, {
                    to: Ae,
                    replace: !0
                }), e[12] = t) : t = e[12], t
            }
            let L = pe,
                R;
            e[13] === Symbol.for(`react.memo_cache_sentinel`) ? (R = (0, I.jsx)(xe, {
                redirectAfter: we
            }), e[13] = R) : R = e[13];
            let z;
            e[14] === t ? z = e[15] : (z = t.formatMessage({
                id: `wham.environments.gitlab_activity.groups.breadcrumb.environments`,
                defaultMessage: `Environments`
            }), e[14] = t, e[15] = z);
            let B;
            e[16] === z ? B = e[17] : (B = (0, I.jsx)(be, {
                label: z,
                url: Ae
            }), e[16] = z, e[17] = B);
            let V;
            e[18] === Symbol.for(`react.memo_cache_sentinel`) ? (V = (0, I.jsx)(ye, {}), e[18] = V) : V = e[18];
            let H;
            e[19] === t ? H = e[20] : (H = t.formatMessage({
                id: `wham.environments.gitlab_activity.groups.breadcrumb.groups`,
                defaultMessage: `GitLab groups`
            }), e[19] = t, e[20] = H);
            let U;
            e[21] === H ? U = e[22] : (U = (0, I.jsx)(be, {
                label: H,
                className: `font-medium`
            }), e[21] = H, e[22] = U);
            let W;
            e[23] !== B || e[24] !== U ? (W = (0, I.jsxs)(ve, {
                children: [B, V, U]
            }), e[23] = B, e[24] = U, e[25] = W) : W = e[25];
            let Ie;
            e[26] === Symbol.for(`react.memo_cache_sentinel`) ? (Ie = (0, I.jsx)(`h1`, {
                className: `text-xl font-semibold`,
                children: (0, I.jsx)(w, {
                    id: `wham.environments.gitlab_activity.groups.page.title`,
                    defaultMessage: `GitLab group activity`
                })
            }), e[26] = Ie) : Ie = e[26];
            let G;
            e[27] === Symbol.for(`react.memo_cache_sentinel`) ? (G = (0, I.jsxs)(`section`, {
                className: `flex flex-col gap-3`,
                children: [Ie, (0, I.jsx)(`p`, {
                    className: `text-token-text-secondary text-sm`,
                    children: (0, I.jsx)(w, {
                        id: `wham.environments.gitlab_activity.groups.page.code_review_description`,
                        defaultMessage: `Enable code reviews across projects in your GitLab groups and subgroups.`
                    })
                })]
            }), e[27] = G) : G = e[27];
            let K;
            e[28] === Symbol.for(`react.memo_cache_sentinel`) ? (K = (0, I.jsx)(`h2`, {
                className: `text-base leading-6 font-semibold`,
                children: (0, I.jsx)(w, {
                    id: `wham.environments.gitlab_activity.groups.table.title`,
                    defaultMessage: `Groups`
                })
            }), e[28] = K) : K = e[28];
            let q;
            e[29] === Symbol.for(`react.memo_cache_sentinel`) ? (q = (0, I.jsx)(`p`, {
                className: `text-token-text-secondary text-sm`,
                children: (0, I.jsx)(w, {
                    id: `wham.environments.gitlab_activity.groups.table.manageable_groups_description`,
                    defaultMessage: `Only groups your connected GitLab account can manage are shown.`
                })
            }), e[29] = q) : q = e[29];
            let Le = !y || b,
                Re;
            e[30] === Symbol.for(`react.memo_cache_sentinel`) ? (Re = e => ie(e.target.value), e[30] = Re) : Re = e[30];
            let J;
            e[31] !== k || e[32] !== C || e[33] !== Le ? (J = (0, I.jsx)(fe, {
                color: `search`,
                iconPosition: `left`,
                icon: d,
                className: `text-token-text-tertiary flex h-8 w-full items-center rounded-md!`,
                inputClassName: `text-token-text-primary w-full text-sm`,
                containerInputClassName: `w-full`,
                name: `gitlab-group-search`,
                type: `text`,
                value: C,
                maxLength: Ne,
                disabled: Le,
                onChange: Re,
                placeholder: k,
                ariaLabel: k
            }), e[31] = k, e[32] = C, e[33] = Le, e[34] = J) : J = e[34];
            let Y;
            e[35] !== E || e[36] !== j.isFetching || e[37] !== j.isFetchingNextPage ? (Y = j.isFetching && !j.isFetchingNextPage && E.length > 0 && (0, I.jsx)(te, {
                className: `text-token-text-tertiary absolute end-2 top-1/2 h-4 w-4 -translate-y-1/2`
            }), e[35] = E, e[36] = j.isFetching, e[37] = j.isFetchingNextPage, e[38] = Y) : Y = e[38];
            let X;
            e[39] !== J || e[40] !== Y ? (X = (0, I.jsx)(`div`, {
                className: `flex flex-wrap items-center justify-between gap-3`,
                children: (0, I.jsxs)(`div`, {
                    className: `relative w-full max-w-[320px]`,
                    children: [J, Y]
                })
            }), e[39] = J, e[40] = Y, e[41] = X) : X = e[41];
            let ze = f || b || j.isLoading ? (0, I.jsx)(`div`, {
                    className: `flex items-center justify-center py-12`,
                    children: (0, I.jsx)(te, {})
                }) : j.isError && P.length === 0 && !j.isFetchNextPageError ? (0, I.jsxs)(`div`, {
                    className: `flex flex-col items-center gap-3 py-12`,
                    children: [(0, I.jsx)(`p`, {
                        className: `text-token-text-secondary text-sm`,
                        children: (0, I.jsx)(w, {
                            id: `wham.environments.gitlab_activity.groups.table.error`,
                            defaultMessage: `Couldn’t load GitLab groups.`
                        })
                    }), (0, I.jsx)(m, {
                        type: `button`,
                        color: `secondary`,
                        size: `small`,
                        onClick: () => j.refetch(),
                        children: (0, I.jsx)(w, {
                            id: `wham.environments.gitlab_activity.groups.button.retry`,
                            defaultMessage: `Retry`
                        })
                    })]
                }) : y ? P.length === 0 && !j.hasNextPage ? (0, I.jsx)(`p`, {
                    className: `text-token-text-secondary py-8 text-sm`,
                    children: E ? (0, I.jsx)(w, {
                        id: `wham.environments.gitlab_activity.groups.search.empty`,
                        defaultMessage: `No groups match your search.`
                    }) : (0, I.jsx)(w, {
                        id: `wham.environments.gitlab_activity.groups.table.empty`,
                        defaultMessage: `No manageable GitLab groups found.`
                    })
                }) : (0, I.jsxs)(I.Fragment, {
                    children: [P.length > 0 && (0, I.jsxs)(`div`, {
                        className: `border-token-border-heavy bg-primary text-token-text-primary overflow-hidden rounded-lg border text-sm`,
                        children: [(0, I.jsxs)(`div`, {
                            className: `text-token border-token-border-medium bg-token-main-surface-primary flex items-center justify-between gap-4 border-b-[0.5px] px-3 py-2 font-semibold`,
                            children: [(0, I.jsx)(w, {
                                id: `wham.environments.gitlab_activity.groups.table.header.group`,
                                defaultMessage: `Group`
                            }), (0, I.jsx)(`span`, {
                                className: `shrink-0 ps-4`,
                                children: (0, I.jsx)(w, {
                                    id: `wham.environments.gitlab_activity.groups.table.header.code_review`,
                                    defaultMessage: `Code review`
                                })
                            })]
                        }), (0, I.jsx)(`ul`, {
                            children: P.map(e => {
                                let t = e.covered_by_group_id ? Fe.get(e.covered_by_group_id) : void 0;
                                return (0, I.jsx)(Pe, {
                                    group: e,
                                    coveringGroup: t,
                                    isUpdating: N.isPending && N.variables?.groupId === e.id,
                                    isMutationPending: N.isPending,
                                    onToggle: t => N.mutate({
                                        groupId: e.id,
                                        groupPath: e.full_path,
                                        enabled: t
                                    })
                                }, e.id)
                            })
                        })]
                    }), j.isFetchNextPageError ? (0, I.jsxs)(`div`, {
                        className: `flex items-center justify-center gap-3 py-2`,
                        children: [(0, I.jsx)(`p`, {
                            className: `text-token-text-secondary text-sm`,
                            children: (0, I.jsx)(w, {
                                id: `wham.environments.gitlab_activity.groups.pagination.error`,
                                defaultMessage: `Couldn’t load more GitLab groups.`
                            })
                        }), (0, I.jsx)(m, {
                            type: `button`,
                            color: `secondary`,
                            size: `small`,
                            onClick: () => j.fetchNextPage(),
                            children: (0, I.jsx)(w, {
                                id: `wham.environments.gitlab_activity.groups.pagination.retry`,
                                defaultMessage: `Retry`
                            })
                        })]
                    }) : (0, I.jsx)(de, {
                        isFetchingNextPage: j.isFetchingNextPage,
                        hasNextPage: j.hasNextPage,
                        fetchNextPage: j.fetchNextPage,
                        bgColor: `bg-transparent`
                    })]
                }) : (0, I.jsx)(`p`, {
                    className: `text-token-text-secondary py-8 text-sm`,
                    children: (0, I.jsx)(w, {
                        id: `wham.environments.gitlab_activity.groups.table.disconnected`,
                        defaultMessage: `Connect your GitLab account to manage group activity.`
                    })
                }),
                Z;
            e[42] !== K || e[43] !== q || e[44] !== X || e[45] !== ze ? (Z = (0, I.jsxs)(`section`, {
                className: `flex w-full max-w-3xl flex-col gap-4`,
                children: [K, q, X, ze]
            }), e[42] = K, e[43] = q, e[44] = X, e[45] = ze, e[46] = Z) : Z = e[46];
            let Q;
            e[47] !== W || e[48] !== G || e[49] !== Z ? (Q = (0, I.jsxs)(`div`, {
                className: `mx-auto flex h-full max-w-screen-xl flex-1 flex-col gap-8 ps-4 pe-4 md:pe-12`,
                children: [W, G, Z]
            }), e[47] = W, e[48] = G, e[49] = Z, e[50] = Q) : Q = e[50];
            let $;
            return e[51] !== L || e[52] !== Q || e[53] !== R ? ($ = (0, I.jsx)(L, {
                topPadding: !0,
                connectionAlert: R,
                children: Q
            }), e[51] = L, e[52] = Q, e[53] = R, e[54] = $) : $ = e[54], $
        }, L = () => {
            "use forget";
            let e = (0, F.c)(3),
                t = r()?.getWorkspaceId();
            if (!_(`1437685011`) || !_(`2587295706`)) {
                let t;
                return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, I.jsx)(oe, {
                    to: Ae,
                    replace: !0
                }), e[0] = t) : t = e[0], t
            }
            let n = t ?? `pending`,
                i;
            return e[1] === n ? i = e[2] : (i = (0, I.jsx)(Fe, {}, n), e[1] = n, e[2] = i), i
        }
    })),
    z, B, V, H, U = e((() => {
        S(), z = ce(), R(), B = C(), V = () => [{
            title: `Codex`
        }], H = T(function() {
            "use forget";
            let e = (0, z.c)(1),
                t;
            return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, B.jsx)(L, {}), e[0] = t) : t = e[0], t
        })
    }));
e((() => {
    U()
}))();
export {
    H as
    default, V as meta
};
//# sourceMappingURL=codex.cloud.settings.environments_.gitlab.groups-f7wc3huu.js.map
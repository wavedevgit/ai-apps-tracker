import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $_ as n,
    AT as r,
    C1 as i,
    G_ as a,
    H_ as o,
    Jc as s,
    My as c,
    P_ as l,
    Q_ as u,
    Qit as d,
    U_ as f,
    W_ as p,
    X_ as m,
    Yc as h,
    Z_ as g,
    _w as _,
    b5 as v,
    cv as y,
    dv as b,
    dz as ee,
    fz as x,
    gv as S,
    hU as C,
    hh as w,
    hw as te,
    iat as T,
    ist as E,
    iw as D,
    jy as O,
    kT as k,
    mh as A,
    ow as j,
    pU as M,
    pnt as N,
    u1 as P,
    wst as F,
    y5 as ne,
    ynt as re
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as I,
    Bn as L,
    Ht as ie,
    Ln as ae,
    N as oe,
    Nn as R,
    O as se,
    Pt as ce,
    Rn as z,
    Ut as B,
    Vn as le,
    jt as ue,
    l as de,
    p as fe,
    s as pe,
    wn as me,
    zn as he
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    AWt as ge,
    BQ as _e,
    Bst as ve,
    CWt as ye,
    Dit as be,
    EWt as xe,
    Fvn as V,
    Gwn as H,
    NQ as U,
    NWt as W,
    Pln as G,
    Pvn as Se,
    Qb as Ce,
    TWt as we,
    Wwn as Te,
    Zb as Ee,
    aWt as De,
    cX as Oe,
    dWt as ke,
    kWt as Ae,
    lX as je,
    lun as Me,
    qrt as Ne,
    uWt as Pe,
    wWt as Fe,
    zst as Ie
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Fv as Le,
    Iv as Re,
    TC as ze,
    Uy as Be,
    Wy as Ve,
    ix as He,
    rx as Ue,
    wC as We
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    Bt as Ge,
    Dt as Ke,
    Ht as qe,
    Ot as Je,
    Vt as Ye,
    mt as K,
    pt as Xe,
    zt as Ze
} from "./c470f5ab-m68dth1hatzjj8yh.js";
import {
    i as Qe,
    n as $e,
    t as et
} from "./5f4d7fa0-h884rob3aq4wlepb.js";
import {
    c as tt,
    s as nt
} from "./3e72bb91-l4ijhasz7arxe6nl.js";
import {
    i as rt,
    n as it,
    r as at
} from "./ab92372e-glzrgn0c7jblr8e0.js";
import {
    n as ot,
    t as st
} from "./f3d06460-czysucqg3wqdx4qs.js";
import {
    n as ct,
    t as lt
} from "./84ae5536-k47w7ps4m6grzri2.js";
import {
    a as ut,
    o as dt,
    r as ft,
    t as pt
} from "./9c8fc5a3-dzgmul5a3zn71rtg.js";
import {
    r as mt,
    t as ht
} from "./57943189-dnp8ippr1ak5yv94.js";

function gt() {
    "use forget";
    let e = (0, yt.c)(22),
        t = he(),
        n;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (n = b(`installations/select_target`), e[0] = n) : n = e[0];
    let r = n,
        [i, a] = (0, bt.useState)(),
        {
            mutate: o
        } = ct(),
        s;
    e[1] === i ? s = e[2] : (s = {
        connectorId: i,
        redirectAfter: `/codex/cloud/settings/connectors`
    }, e[1] = i, e[2] = s);
    let {
        isConnected: c,
        isLoading: l,
        error: u,
        openGithubModal: d,
        refetch: f,
        handleDisconnect: p,
        connectorId: m,
        githubConnectorCandidates: h
    } = Qe(s), {
        data: g,
        isLoading: _
    } = Me(m), v = g?.github_handle, y = m === et, x;
    e[3] === Symbol.for(`react.memo_cache_sentinel`) ? (x = (0, q.jsx)(`p`, {
        className: `text-token-text-primary text-md font-medium`,
        children: (0, q.jsx)(R, {
            id: `wham.githubConnectionsRow.githubConnector`,
            defaultMessage: `GitHub`
        })
    }), e[3] = x) : x = e[3];
    let S;
    e[4] !== m || e[5] !== h || e[6] !== o ? (S = h.length > 1 && (0, q.jsxs)(`label`, {
        className: `flex max-w-sm flex-col gap-1 text-xs`,
        children: [(0, q.jsx)(`span`, {
            className: `text-token-text-secondary`,
            children: (0, q.jsx)(R, {
                id: `wham.githubConnectionsRow.connectorSelectorLabel`,
                defaultMessage: `GitHub connector`
            })
        }), (0, q.jsx)(`select`, {
            className: `border-token-border-default bg-token-bg-primary text-token-text-primary rounded-lg border px-3 py-2 text-sm`,
            value: m,
            onChange: e => {
                let t = e.target.value;
                a(t), o({
                    preferredGitHubConnectorId: t
                })
            },
            children: h.map(vt)
        })]
    }), e[4] = m, e[5] = h, e[6] = o, e[7] = S) : S = e[7];
    let C;
    e[8] !== u || e[9] !== v || e[10] !== p || e[11] !== t || e[12] !== l || e[13] !== c || e[14] !== _ || e[15] !== d || e[16] !== f || e[17] !== y ? (C = u ? (0, q.jsx)(st, {
        refetchConnectorData: f
    }) : _ || l ? (0, q.jsx)(`div`, {
        className: `flex w-full items-center justify-center gap-2`,
        children: (0, q.jsx)(ee, {
            className: `h-6 w-6`
        })
    }) : c ? (0, q.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [(0, q.jsx)(`span`, {
            className: `text-token-text-primary flex items-center gap-2 text-sm`,
            children: (0, q.jsx)(R, {
                id: `wham.githubConnectionsRow.title`,
                defaultMessage: `Connected to <b>{githubLogin}</b>`,
                values: {
                    b: _t,
                    githubLogin: v
                }
            })
        }), (0, q.jsxs)(`div`, {
            className: `flex flex-row gap-2`,
            children: [(0, q.jsx)(k, {
                color: `danger-outline`,
                className: `w-fit`,
                loading: l,
                onClick: () => p(),
                "aria-label": t.formatMessage({
                    id: `wham.githubConnectionRow.disconnectAriaLabel`,
                    defaultMessage: `Button to disconnect GitHub connection`
                }),
                children: (0, q.jsx)(R, {
                    id: `wham.githubConnectionRow.disconnect`,
                    defaultMessage: `Disconnect`
                })
            }), y && (0, q.jsx)(k, {
                color: `secondary`,
                className: `w-fit`,
                onClick: () => ut(r),
                "aria-label": t.formatMessage({
                    id: `wham.githubConnectionRow.settingsAriaLabel`,
                    defaultMessage: `Button to go to GitHub installations settings page`
                }),
                children: (0, q.jsx)(R, {
                    id: `wham.githubConnectionRow.settings`,
                    defaultMessage: `Settings`
                })
            })]
        })]
    }) : (0, q.jsxs)(`div`, {
        className: `text-token-text-secondary flex flex-col gap-2 text-sm`,
        children: [(0, q.jsx)(`p`, {
            className: `pb-2 text-xs`,
            children: (0, q.jsx)(R, {
                id: `wham.githubConnectionsRow.githubConnection`,
                defaultMessage: `Connect to your GitHub repositories to use in Codex`
            })
        }), (0, q.jsx)(k, {
            icon: c ? void 0 : Ye,
            color: `primary`,
            className: `w-fit`,
            loading: l,
            onClick: d,
            children: (0, q.jsx)(R, {
                id: `wham.codexOnboardingConnections.connectGithub`,
                defaultMessage: `Connect to GitHub`
            })
        })]
    }), e[8] = u, e[9] = v, e[10] = p, e[11] = t, e[12] = l, e[13] = c, e[14] = _, e[15] = d, e[16] = f, e[17] = y, e[18] = C) : C = e[18];
    let w;
    return e[19] !== S || e[20] !== C ? (w = (0, q.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [x, S, C]
    }), e[19] = S, e[20] = C, e[21] = w) : w = e[21], w
}

function _t(e) {
    return (0, q.jsx)(`b`, {
        children: e
    })
}

function vt(e) {
    return (0, q.jsx)(`option`, {
        value: e.id,
        children: e.name
    }, e.id)
}
var yt, bt, q, xt = e((() => {
    yt = me(), r(), qe(), S(), x(), $e(), ot(), dt(), lt(), G(), bt = t(le()), z(), q = L()
}));

function St(e) {
    if (!(e instanceof d) || e.status !== 400) return X.saveRetryableError;
    switch (e.code) {
        case `gitlab_pat_invalid_token`:
            return X.saveInvalidTokenError;
        case `gitlab_pat_account_inactive`:
            return X.saveAccountInactiveError;
        case `gitlab_pat_token_inactive`:
            return X.saveTokenInactiveError;
        case `gitlab_pat_missing_api_scope`:
            return X.saveMissingApiScopeError;
        case `gitlab_pat_token_expired`:
            return X.saveExpiredTokenError;
        case `gitlab_pat_expiration_too_soon`:
            return X.saveExpirationTooSoonError;
        default:
            return X.saveError
    }
}

function Ct(e, t, n) {
    if (!(e instanceof d)) return t;
    switch (e.code) {
        case `gitlab_service_account_connection_required`:
            return X.connectGitLabError;
        case `gitlab_service_account_api_scope_required`:
            return X.reconnectGitLabApiScopeError;
        case `gitlab_service_account_admin_required`:
            return n ?? t;
        default:
            return t
    }
}

function wt(e, t) {
    if (e instanceof d) {
        if (e.code === `gitlab_service_account_credential_unavailable`) return X.projectCredentialUnavailableError;
        if (e.code === `gitlab_service_account_credential_changed`) return X.projectCredentialChangedError
    }
    return Ct(e, t === `selected_groups` ? X.groupUpdateFailedWarning : X.updateProjectsError)
}

function Tt(e, t) {
    return [`codex`, `gitlab-service-account-credential`, e, t]
}

function Et(e, t) {
    return e.size === t.length && t.every(t => e.has(t))
}

function Dt(e, t) {
    let n = 0,
        r = 0;
    for (let r of e) t.has(r) || (n += 1);
    for (let n of t) e.has(n) || (r += 1);
    return {
        additions: n,
        removals: r
    }
}

function Ot(e) {
    "use forget";
    let t = (0, Bt.c)(13),
        {
            onChange: n,
            disabled: r,
            showGroups: i,
            showLegacyAllAccessible: a
        } = e,
        o = a !== void 0 && a,
        s;
    t[0] === i ? s = t[1] : (s = i ? [{
        value: `selected_groups`,
        label: X.selectedGroupsOnly,
        description: X.selectedGroupsOnlyDescription
    }] : [], t[0] = i, t[1] = s);
    let c;
    t[2] !== i || t[3] !== o ? (c = !i || o ? [{
        value: `all_accessible`,
        label: X.allAccessibleProjects,
        description: X.allAccessibleProjectsDescription
    }] : [], t[2] = i, t[3] = o, t[4] = c) : c = t[4];
    let l;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (l = {
        value: `selected`,
        label: X.selectedProjectsOnly,
        description: X.selectedProjectsOnlyDescription
    }, t[5] = l) : l = t[5];
    let u;
    t[6] !== s || t[7] !== c ? (u = [...s, ...c, l], t[6] = s, t[7] = c, t[8] = u) : u = t[8];
    let d = u,
        f;
    return t[9] !== r || t[10] !== d || t[11] !== n ? (f = (0, Y.jsx)(`div`, {
        className: `flex flex-col gap-2`,
        children: d.map(e => (0, Y.jsxs)(`button`, {
            type: `button`,
            className: `interactive-button interactive-button-secondary interactive-outline-secondary border-token-border-default flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-start`,
            disabled: r,
            onClick: () => n(e.value),
            children: [(0, Y.jsxs)(`span`, {
                className: `flex flex-col gap-0.5`,
                children: [(0, Y.jsx)(`span`, {
                    className: `text-token-text-primary text-sm font-medium`,
                    children: (0, Y.jsx)(R, {
                        ...e.label
                    })
                }), (0, Y.jsx)(`span`, {
                    className: `text-token-text-secondary text-xs font-normal`,
                    children: (0, Y.jsx)(R, {
                        ...e.description
                    })
                })]
            }), (0, Y.jsx)(We, {
                "aria-hidden": !0,
                className: `icon icon-sm shrink-0`
            })]
        }, e.value))
    }), t[9] = r, t[10] = d, t[11] = n, t[12] = f) : f = t[12], f
}

function kt(e) {
    "use forget";
    let t = (0, Bt.c)(9),
        {
            value: n,
            onChange: r,
            disabled: i
        } = e,
        a = n === `selected_groups` ? X.selectedGroupsOnly : n === `all_accessible` ? X.allAccessibleProjects : X.selectedProjectsOnly,
        o;
    t[0] === a ? o = t[1] : (o = (0, Y.jsx)(`p`, {
        className: `text-token-text-primary text-sm font-medium`,
        children: (0, Y.jsx)(R, {
            ...a
        })
    }), t[0] = a, t[1] = o);
    let s;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, Y.jsx)(R, {
        ...X.changeAccessMode
    }), t[2] = s) : s = t[2];
    let c;
    t[3] !== i || t[4] !== r ? (c = (0, Y.jsx)(k, {
        type: `button`,
        color: `secondary`,
        size: `small`,
        disabled: i,
        onClick: r,
        children: s
    }), t[3] = i, t[4] = r, t[5] = c) : c = t[5];
    let l;
    return t[6] !== o || t[7] !== c ? (l = (0, Y.jsxs)(`div`, {
        className: `flex items-center justify-between gap-3`,
        children: [o, c]
    }), t[6] = o, t[7] = c, t[8] = l) : l = t[8], l
}

function At(e) {
    "use forget";
    let t = (0, Bt.c)(28),
        {
            connectorId: n,
            selectedGroupIds: r,
            persistedGroupIds: i,
            onChange: a,
            disabled: o
        } = e,
        c = he(),
        [l, u] = (0, J.useState)(``),
        d;
    t[0] === l ? d = t[1] : (d = l.trim(), t[0] = l, t[1] = d);
    let f = Ce(d, Kt),
        p = f.replace(/\/+$/, ``),
        m = p.includes(`/`),
        h = p.split(`/`).pop() || f,
        g;
    t[2] !== n || t[3] !== f ? (g = [`codex`, `gitlab-service-account-groups`, n, f], t[2] = n, t[3] = f, t[4] = g) : g = t[4];
    let {
        data: _,
        isPending: v,
        isFetching: y,
        isError: b,
        fetchNextPage: x,
        hasNextPage: S,
        isFetchingNextPage: C
    } = de({
        queryKey: g,
        initialPageParam: 1,
        queryFn: e => {
            let {
                pageParam: t
            } = e;
            return s.getGitLabServiceAccountGroups({
                connectorId: n,
                page: t,
                pageSize: Vt,
                ...h ? {
                    search: h
                } : {}
            })
        },
        getNextPageParam: Mt
    }), te = _?.pages.flatMap(jt) ?? [], T = m ? te.filter(e => e.full_path.toLowerCase() === p.toLowerCase()) : te, E = m && !!(S || C), D = y && !C && f.length > 0, O;
    t[5] !== i || t[6] !== r ? (O = Dt(r, i), t[5] = i, t[6] = r, t[7] = O) : O = t[7];
    let k = O,
        A;
    t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (A = e => u(e.target.value), t[8] = A) : A = t[8];
    let j;
    t[9] === c ? j = t[10] : (j = c.formatMessage(X.searchGroups), t[9] = c, t[10] = j);
    let M;
    t[11] === c ? M = t[12] : (M = c.formatMessage(X.searchGroups), t[11] = c, t[12] = M);
    let N;
    t[13] !== o || t[14] !== l || t[15] !== j || t[16] !== M ? (N = (0, Y.jsx)(Ie, {
        color: `search`,
        iconPosition: `left`,
        icon: w,
        className: `text-token-text-tertiary flex h-8 w-full items-center rounded-md!`,
        inputClassName: `text-token-text-primary w-full`,
        containerInputClassName: `w-full`,
        name: `gitlab-service-account-group-search`,
        type: `text`,
        value: l,
        disabled: o,
        onChange: A,
        placeholder: j,
        ariaLabel: M
    }), t[13] = o, t[14] = l, t[15] = j, t[16] = M, t[17] = N) : N = t[17];
    let P;
    t[18] === D ? P = t[19] : (P = D && (0, Y.jsx)(ee, {
        className: `text-token-text-tertiary absolute end-2 top-1/2 h-4 w-4 -translate-y-1/2`
    }), t[18] = D, t[19] = P);
    let F;
    t[20] !== P || t[21] !== N ? (F = (0, Y.jsxs)(`div`, {
        className: `relative w-full`,
        children: [N, P]
    }), t[20] = P, t[21] = N, t[22] = F) : F = t[22];
    let re = v && T.length === 0 ? (0, Y.jsx)(`div`, {
            className: `flex h-24 items-center justify-center`,
            children: (0, Y.jsx)(ee, {
                className: `h-4 w-4`
            })
        }) : b && T.length === 0 ? (0, Y.jsx)(`p`, {
            className: `text-token-interactive-label-warning-secondary flex h-24 items-center justify-center text-sm`,
            children: (0, Y.jsx)(R, {
                ...X.groupLoadError
            })
        }) : T.length === 0 && !E ? (0, Y.jsx)(`p`, {
            className: `text-token-text-secondary flex h-24 items-center justify-center text-sm`,
            children: (0, Y.jsx)(R, {
                ...X.noGroups
            })
        }) : (0, Y.jsxs)(Y.Fragment, {
            children: [T.map(e => {
                let t = r.has(e.id),
                    n = i.has(e.id),
                    s = !t && !n && k.additions >= Ut || t && n && k.removals >= Wt,
                    c = !t && r.size >= Ht,
                    l = o || s || c;
                return (0, Y.jsxs)(`div`, {
                    children: [(0, Y.jsxs)(`button`, {
                        type: `button`,
                        "data-testid": `gitlab-service-account-group-${e.id}`,
                        "aria-pressed": t,
                        className: ne(`group flex w-full items-center justify-between gap-2 rounded-md p-3 text-start`, l ? `cursor-not-allowed` : `hover:bg-token-bg-tertiary cursor-pointer`),
                        disabled: l,
                        onClick: () => {
                            let n = new Set(r);
                            t ? n.delete(e.id) : n.add(e.id), a(n)
                        },
                        children: [(0, Y.jsxs)(`span`, {
                            className: `min-w-0`,
                            children: [(0, Y.jsx)(`span`, {
                                className: `text-token-text-primary block truncate text-sm`,
                                children: e.name
                            }), e.full_path !== e.name && (0, Y.jsx)(`span`, {
                                className: `text-token-text-secondary block truncate text-xs`,
                                children: e.full_path
                            })]
                        }), (0, Y.jsx)(`span`, {
                            className: `flex shrink-0 items-center pe-0.5`,
                            children: t ? (0, Y.jsx)(Le, {
                                "aria-hidden": !0,
                                className: `icon-lg`
                            }) : (0, Y.jsx)(`span`, {
                                className: `border-token-border-heavy h-5 w-5 rounded-full border`
                            })
                        })]
                    }), (0, Y.jsx)(`div`, {
                        className: `border-token-border-light border-t`
                    })]
                }, e.id)
            }), (S || C) && (T.length > 0 || m) && (0, Y.jsx)(Oe, {
                isFetchingNextPage: !!C,
                hasNextPage: !!S,
                fetchNextPage: () => x()
            })]
        }),
        I;
    t[23] === re ? I = t[24] : (I = (0, Y.jsx)(`div`, {
        className: `border-token-border-heavy bg-token-bg-primary flex flex-col gap-2 rounded-lg border p-3`,
        children: (0, Y.jsx)(`div`, {
            className: `flex max-h-56 flex-col overflow-y-auto`,
            children: re
        })
    }), t[23] = re, t[24] = I);
    let L;
    return t[25] !== F || t[26] !== I ? (L = (0, Y.jsxs)(`div`, {
        className: `flex flex-col gap-4`,
        children: [F, I]
    }), t[25] = F, t[26] = I, t[27] = L) : L = t[27], L
}

function jt(e) {
    return e.groups
}

function Mt(e) {
    return e.next_page ?? void 0
}

function Nt(e) {
    "use forget";
    let t = (0, Bt.c)(54),
        {
            connectorId: n,
            selectedProjectIds: r,
            onChange: i,
            disabled: a
        } = e,
        o = he(),
        [c, l] = (0, J.useState)(``),
        u;
    t[0] === c ? u = t[1] : (u = c.trim(), t[0] = c, t[1] = u);
    let d = Ce(u, Kt),
        f = It,
        p;
    t[2] !== n || t[3] !== d ? (p = [`codex`, `gitlab-service-account-projects`, n, d], t[2] = n, t[3] = d, t[4] = p) : p = t[4];
    let m;
    t[5] !== n || t[6] !== d ? (m = async e => {
        let {
            pageParam: t
        } = e, r = await s.searchGitLabRepositories({
            query: d,
            limit: Gt,
            page: t,
            connectorId: n
        });
        return {
            repositories: f((r.repositories ?? []).slice(0, Gt)),
            hasMore: (r.repositories?.length ?? 0) >= Gt
        }
    }, t[5] = n, t[6] = d, t[7] = m) : m = t[7];
    let h;
    t[8] !== p || t[9] !== m ? (h = {
        queryKey: p,
        initialPageParam: 1,
        queryFn: m,
        getNextPageParam: Ft
    }, t[8] = p, t[9] = m, t[10] = h) : h = t[10];
    let {
        data: g,
        isPending: _,
        isFetching: v,
        isError: y,
        fetchNextPage: b,
        hasNextPage: x,
        isFetchingNextPage: S
    } = de(h), C, te, T, E, D;
    if (t[11] !== g?.pages || t[12] !== d || t[13] !== a || t[14] !== b || t[15] !== x || t[16] !== o || t[17] !== y || t[18] !== v || t[19] !== S || t[20] !== _ || t[21] !== i || t[22] !== c || t[23] !== r) {
        let e = g?.pages.flatMap(Pt) ?? [],
            n = v && !S && d.length > 0;
        E = `flex flex-col gap-4`;
        let s;
        t[29] === Symbol.for(`react.memo_cache_sentinel`) ? (s = e => l(e.target.value), t[29] = s) : s = t[29];
        let u;
        t[30] === o ? u = t[31] : (u = o.formatMessage(X.searchProjects), t[30] = o, t[31] = u);
        let f;
        t[32] === o ? f = t[33] : (f = o.formatMessage(X.searchProjects), t[32] = o, t[33] = f);
        let p;
        t[34] !== a || t[35] !== c || t[36] !== u || t[37] !== f ? (p = (0, Y.jsx)(Ie, {
            color: `search`,
            iconPosition: `left`,
            icon: w,
            className: `text-token-text-tertiary flex h-8 w-full items-center rounded-md!`,
            inputClassName: `text-token-text-primary w-full`,
            containerInputClassName: `w-full`,
            name: `gitlab-service-account-project-search`,
            type: `text`,
            value: c,
            disabled: a,
            onChange: s,
            placeholder: u,
            ariaLabel: f
        }), t[34] = a, t[35] = c, t[36] = u, t[37] = f, t[38] = p) : p = t[38];
        let m;
        t[39] === n ? m = t[40] : (m = n && (0, Y.jsx)(ee, {
            className: `text-token-text-tertiary absolute end-2 top-1/2 h-4 w-4 -translate-y-1/2`
        }), t[39] = n, t[40] = m), t[41] !== p || t[42] !== m ? (D = (0, Y.jsxs)(`div`, {
            className: `relative w-full`,
            children: [p, m]
        }), t[41] = p, t[42] = m, t[43] = D) : D = t[43], T = `border-token-border-heavy bg-token-bg-primary flex flex-col gap-2 rounded-lg border p-3`, C = `flex max-h-56 flex-col overflow-y-auto`, te = _ && e.length === 0 ? (0, Y.jsx)(`div`, {
            className: `flex h-24 items-center justify-center`,
            children: (0, Y.jsx)(ee, {
                className: `h-4 w-4`
            })
        }) : y && e.length === 0 ? (0, Y.jsx)(`p`, {
            className: `text-token-interactive-label-warning-secondary flex h-24 items-center justify-center text-sm`,
            children: (0, Y.jsx)(R, {
                ...X.projectLoadError
            })
        }) : e.length === 0 ? (0, Y.jsx)(`p`, {
            className: `text-token-text-secondary flex h-24 items-center justify-center text-sm`,
            children: (0, Y.jsx)(R, {
                ...X.noProjects
            })
        }) : (0, Y.jsxs)(Y.Fragment, {
            children: [e.map(e => {
                let t = e.id,
                    n = r.has(t),
                    o = a;
                return (0, Y.jsxs)(`div`, {
                    children: [(0, Y.jsxs)(`button`, {
                        type: `button`,
                        "data-testid": `gitlab-service-account-project-${t}`,
                        "aria-pressed": n,
                        className: ne(`group flex w-full items-center justify-between gap-2 rounded-md p-3 text-start`, o ? `cursor-not-allowed` : `hover:bg-token-bg-tertiary cursor-pointer`),
                        disabled: o,
                        onClick: () => {
                            let e = new Set(r);
                            n ? e.delete(t) : e.add(t), i(e)
                        },
                        children: [(0, Y.jsx)(pt, {
                            repository: e,
                            provider: `gitlab`,
                            isSelected: !1,
                            isDisabled: o,
                            className: `w-full`
                        }), (0, Y.jsx)(`div`, {
                            className: `flex shrink-0 items-center pe-0.5`,
                            children: n ? (0, Y.jsx)(Le, {
                                "aria-hidden": !0,
                                className: `icon-lg`
                            }) : (0, Y.jsx)(`div`, {
                                className: `border-token-border-heavy h-5 w-5 rounded-full border`
                            })
                        })]
                    }), (0, Y.jsx)(`div`, {
                        className: `border-token-border-light border-t`
                    })]
                }, t)
            }), (x || S) && e.length > 0 && (0, Y.jsx)(Oe, {
                isFetchingNextPage: !!S,
                hasNextPage: !!x,
                fetchNextPage: () => b()
            })]
        }), t[11] = g?.pages, t[12] = d, t[13] = a, t[14] = b, t[15] = x, t[16] = o, t[17] = y, t[18] = v, t[19] = S, t[20] = _, t[21] = i, t[22] = c, t[23] = r, t[24] = C, t[25] = te, t[26] = T, t[27] = E, t[28] = D
    } else C = t[24], te = t[25], T = t[26], E = t[27], D = t[28];
    let O;
    t[44] !== C || t[45] !== te ? (O = (0, Y.jsx)(`div`, {
        className: C,
        children: te
    }), t[44] = C, t[45] = te, t[46] = O) : O = t[46];
    let k;
    t[47] !== O || t[48] !== T ? (k = (0, Y.jsx)(`div`, {
        className: T,
        children: O
    }), t[47] = O, t[48] = T, t[49] = k) : k = t[49];
    let A;
    return t[50] !== k || t[51] !== E || t[52] !== D ? (A = (0, Y.jsxs)(`div`, {
        className: E,
        children: [D, k]
    }), t[50] = k, t[51] = E, t[52] = D, t[53] = A) : A = t[53], A
}

function Pt(e) {
    return e.repositories
}

function Ft(e, t) {
    return e.hasMore ? t.length + 1 : void 0
}

function It(e) {
    return [...e].sort(Lt)
}

function Lt(e, t) {
    return e.repository_full_name.localeCompare(t.repository_full_name, void 0, {
        sensitivity: `base`
    })
}

function Rt(e) {
    "use forget";
    let t = (0, Bt.c)(14),
        {
            connectorId: n,
            isSettingsOpen: r,
            onOpenSettings: a,
            onBusyChange: o,
            onTitleChange: s
        } = e,
        c = r === void 0 || r,
        l = i(),
        u;
    t[0] === l ? u = t[1] : (u = l?.getWorkspaceId(), t[0] = l, t[1] = u);
    let d = u,
        f;
    t[2] === l ? f = t[3] : (f = l?.isAdminOfAccount() || l?.isOwnerOfAccount(), t[2] = l, t[3] = f);
    let p = !!f;
    if (!d || !n) return null;
    if (!p && c) {
        let e;
        return t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Y.jsx)(`p`, {
            className: `text-token-text-secondary text-xs`,
            children: (0, Y.jsx)(R, {
                ...X.memberNotice
            })
        }), t[4] = e) : e = t[4], e
    }
    let m = `${d}:${n}`,
        h;
    return t[5] !== n || t[6] !== p || t[7] !== c || t[8] !== o || t[9] !== a || t[10] !== s || t[11] !== m || t[12] !== d ? (h = (0, Y.jsx)(zt, {
        workspaceId: d,
        connectorId: n,
        isSettingsOpen: c,
        canManageServiceAccountCredential: p,
        onOpenSettings: a,
        onBusyChange: o,
        onTitleChange: s
    }, m), t[5] = n, t[6] = p, t[7] = c, t[8] = o, t[9] = a, t[10] = s, t[11] = m, t[12] = d, t[13] = h) : h = t[13], h
}

function zt(e) {
    "use forget";
    let t = (0, Bt.c)(113),
        {
            workspaceId: n,
            connectorId: r,
            isSettingsOpen: i,
            canManageServiceAccountCredential: a,
            onOpenSettings: o,
            onBusyChange: c,
            onTitleChange: l
        } = e,
        u;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (u = N(`2587295706`), t[0] = u) : u = t[0];
    let d = u,
        f = he(),
        p = C(),
        m = oe(),
        h = (0, J.useId)(),
        g = (0, J.useId)(),
        _ = (0, J.useId)(),
        v = (0, J.useRef)(``),
        y = (0, J.useRef)(null),
        [b, x] = (0, J.useState)(``),
        [S, w] = (0, J.useState)(null),
        [T, E] = (0, J.useState)(null),
        [O, A] = (0, J.useState)(null),
        [j, M] = (0, J.useState)(null),
        [P, F] = (0, J.useState)(null),
        [re, I] = (0, J.useState)(!1),
        [L, ie] = (0, J.useState)(!1),
        ae = Tt(n, r),
        ce;
    t[1] === r ? ce = t[2] : (ce = () => s.getGitLabServiceAccountCredential(r), t[1] = r, t[2] = ce);
    let z = se({
            queryKey: ae,
            queryFn: ce,
            refetchOnMount: `always`,
            retryOnMount: !0
        }),
        B = z.data,
        le = B?.configured === !0,
        ue = B?.created_by_codex === !0,
        de = ue ? X.revokeButton : X.removeButton,
        pe = ue ? X.tokenRevokedSuccess : X.tokenRemovedSuccess,
        me = ue ? X.revokeError : X.removeError,
        ge = ue ? X.revokeConfirmationTitle : X.removeConfirmationTitle,
        _e = ue ? X.revokeConfirmationBody : X.removeConfirmationBody,
        ve = ue ? X.revokeConfirmationConsequence : X.removeConfirmationConsequence,
        ye = B?.identity,
        be = B?.identity_url,
        xe = B?.credential_revision ?? 0,
        V = le || ue || !!ye || !!B?.expires_at,
        H = T ?? new Set(B?.created_by_codex ? B.managed_project_ids ?? [] : []),
        U = O ?? new Set(B?.created_by_codex ? B.managed_group_ids ?? [] : []),
        W = B?.created_by_codex ? B.project_access_mode ?? `selected` : d ? `selected_groups` : `selected`,
        G = j ?? W,
        Se = ue && (d || W !== `selected_groups`),
        Ce = P ?? !V,
        we;
    t[3] !== B || t[4] !== xe || t[5] !== F || t[6] !== M || t[7] !== A || t[8] !== E ? (we = () => {
        if (B === void 0) return;
        let e = y.current;
        e !== null && e !== xe && (E(null), A(null), M(null), F(null)), y.current = xe
    }, t[3] = B, t[4] = xe, t[5] = F, t[6] = M, t[7] = A, t[8] = E, t[9] = we) : we = t[9];
    let Te;
    t[10] !== B || t[11] !== xe ? (Te = [B, xe], t[10] = B, t[11] = xe, t[12] = Te) : Te = t[12], (0, J.useEffect)(we, Te);
    let Ee = async e => {
        await m.cancelQueries({
            queryKey: ae
        }), m.setQueryData(ae, e)
    }, De;
    t[13] !== f || t[14] !== p ? (De = (e, t) => {
        let n = (e ?? 0) > 0 || (t ?? 0) > 0;
        return n && p.warning(f.formatMessage((t ?? 0) > 0 ? X.partialGroupWarning : X.partialProjectWarning)), n
    }, t[13] = f, t[14] = p, t[15] = De) : De = t[15];
    let Oe = De,
        ke = fe({
            mutationFn: () => {
                let e = v.current.trim();
                return v.current = ``, s.putGitLabServiceAccountCredential({
                    connectorId: r,
                    personalAccessToken: e
                })
            },
            onSuccess: async e => {
                await Ee(e), x(``), I(!1), w(null), E(null), A(null), M(null), F(null), p.success(f.formatMessage(X.tokenSavedSuccess), {
                    duration: 2
                })
            },
            onError: e => {
                p.danger(f.formatMessage(St(e))), m.invalidateQueries({
                    queryKey: ae
                })
            }
        }),
        Ae = fe({
            mutationFn: () => s.createGitLabServiceAccountCredential({
                connectorId: r,
                projectAccessMode: G,
                projectIds: G === `selected` ? [...H] : [],
                groupIds: G === `selected_groups` ? [...U] : []
            }),
            onSuccess: async e => {
                let t = (e.failed_project_count ?? 0) > 0 || (e.failed_group_count ?? 0) > 0;
                await Ee(e), w(null), E(null), A(null), M(null), F(null), p.success(f.formatMessage(X.serviceAccountCreatedSuccess), {
                    duration: 2
                }), t && Oe(e.failed_project_count, e.failed_group_count)
            },
            onError: e => {
                p.danger(f.formatMessage(Ct(e, X.createError, X.createGitLabAdminRequiredError))), m.invalidateQueries({
                    queryKey: ae
                })
            }
        }),
        je;
    t[16] === r ? je = t[17] : (je = () => s.generateGitLabServiceAccountToken(r), t[16] = r, t[17] = je);
    let Me = fe({
            mutationFn: je,
            onSuccess: async e => {
                await Ee(e), I(!1), E(null), A(null), M(null), F(null), p.success(f.formatMessage(X.tokenGeneratedSuccess), {
                    duration: 2
                })
            },
            onError: e => {
                p.danger(f.formatMessage(Ct(e, X.generateTokenError, X.generateTokenGitLabAdminRequiredError))), m.invalidateQueries({
                    queryKey: ae
                })
            }
        }),
        Ne = fe({
            mutationFn: () => s.updateGitLabServiceAccountProjects({
                connectorId: r,
                credentialRevision: xe,
                projectAccessMode: G,
                projectIds: G === `selected` ? [...H] : [],
                groupIds: G === `selected_groups` ? [...U] : []
            }),
            onSuccess: async e => {
                let t = G === `all_accessible` && W === `all_accessible`,
                    n = (e.failed_project_count ?? 0) > 0 || (e.failed_group_count ?? 0) > 0,
                    r = e.project_access_mode !== W || !Et(new Set(e.managed_project_ids ?? []), We) || !Et(new Set(e.managed_group_ids ?? []), Ge);
                await Ee(e), E(null), A(null), M(null), F(null), n ? p.warning(f.formatMessage((e.failed_group_count ?? 0) > 0 ? r ? X.partialGroupUpdateWarning : X.groupUpdateFailedWarning : r ? X.partialProjectUpdateWarning : X.projectUpdateFailedWarning)) : p.success(f.formatMessage(t ? X.projectAccessSyncedSuccess : G === `selected_groups` ? X.groupAccessUpdatedSuccess : X.projectAccessUpdatedSuccess), {
                    duration: 2
                })
            },
            onError: e => {
                E(null), A(null), M(null), F(null), p.warning(f.formatMessage(wt(e, G))), m.invalidateQueries({
                    queryKey: ae
                })
            }
        }),
        Pe;
    t[18] === r ? Pe = t[19] : (Pe = () => s.deleteGitLabServiceAccountCredential(r), t[18] = r, t[19] = Pe);
    let Fe = fe({
            mutationFn: Pe,
            onSuccess: async e => {
                await Ee(e), x(``), w(null), I(!1), E(null), A(null), M(null), F(null), ie(!1), p.success(f.formatMessage(pe), {
                    duration: 2
                })
            },
            onError: () => {
                p.danger(f.formatMessage(me)), m.invalidateQueries({
                    queryKey: ae
                })
            }
        }),
        Le = ke.isPending || Ae.isPending || Me.isPending || Ne.isPending || Fe.isPending,
        Re, ze;
    t[20] !== Le || t[21] !== c ? (Re = () => (c?.(Le), () => c?.(!1)), ze = [Le, c], t[20] = Le, t[21] = c, t[22] = Re, t[23] = ze) : (Re = t[22], ze = t[23]), (0, J.useEffect)(Re, ze);
    let Ve, Ue;
    if (t[24] !== z.isLoading || t[25] !== f || t[26] !== i || t[27] !== l || t[28] !== V ? (Ve = () => {
            !i || z.isLoading || l?.(f.formatMessage(V ? X.manageTitle : X.configureTitle))
        }, Ue = [z.isLoading, f, i, l, V], t[24] = z.isLoading, t[25] = f, t[26] = i, t[27] = l, t[28] = V, t[29] = Ve, t[30] = Ue) : (Ve = t[29], Ue = t[30]), (0, J.useEffect)(Ve, Ue), z.isLoading) {
        let e;
        t[31] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Y.jsx)(ee, {
            className: `h-5 w-5`
        }), t[31] = e) : e = t[31];
        let n;
        return t[32] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, Y.jsxs)(`div`, {
            "aria-atomic": `true`,
            "aria-live": `polite`,
            role: `status`,
            children: [e, (0, Y.jsx)(`span`, {
                className: `sr-only`,
                children: (0, Y.jsx)(R, {
                    ...X.loadingStatus
                })
            })]
        }), t[32] = n) : n = t[32], n
    }
    if (z.isError && z.data === void 0) {
        let e;
        t[33] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Y.jsx)(`p`, {
            className: `text-token-interactive-label-warning-secondary text-xs`,
            role: `alert`,
            children: (0, Y.jsx)(R, {
                ...X.loadError
            })
        }), t[33] = e) : e = t[33];
        let n;
        t[34] === z ? n = t[35] : (n = () => void z.refetch(), t[34] = z, t[35] = n);
        let r;
        t[36] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, Y.jsx)(R, {
            ...X.retryButton
        }), t[36] = r) : r = t[36];
        let i;
        return t[37] !== z.isFetching || t[38] !== n ? (i = (0, Y.jsxs)(`div`, {
            className: `flex flex-col items-start gap-2`,
            children: [e, (0, Y.jsx)(k, {
                type: `button`,
                color: `secondary`,
                size: `small`,
                loading: z.isFetching,
                onClick: n,
                children: r
            })]
        }), t[37] = z.isFetching, t[38] = n, t[39] = i) : i = t[39], i
    }
    if (!a) {
        let e = le ? X.tokenConfigured : V ? X.tokenUnavailable : X.memberNotConfigured,
            n;
        return t[40] === e ? n = t[41] : (n = (0, Y.jsx)(`p`, {
            "aria-atomic": `true`,
            "aria-live": `polite`,
            className: `text-token-text-secondary text-xs`,
            role: `status`,
            children: (0, Y.jsx)(R, {
                ...e
            })
        }), t[40] = e, t[41] = n), n
    }
    let We = B?.managed_project_ids ?? [],
        Ge = B?.managed_group_ids ?? [],
        Ke = new Set(Ge),
        qe = Dt(G === `selected_groups` ? U : new Set, Ke),
        Je = qe.additions > Ut || qe.removals > Wt,
        Ye = G === `selected_groups` && U.size > Ht,
        K = z.isFetching || Le,
        Xe = G !== W || G === `selected` && !Et(H, We) || G === `selected_groups` && !Et(U, Ge),
        Ze = G !== W && (G === `selected` && H.size === 0 || G === `selected_groups` && U.size === 0),
        Qe = G === `all_accessible` && W === `all_accessible`,
        $e;
    t[42] !== W || t[43] !== F || t[44] !== M ? ($e = e => {
        M(e === W ? null : e), F(!1)
    }, t[42] = W, t[43] = F, t[44] = M, t[45] = $e) : $e = t[45];
    let et = $e;
    if (!i) {
        let e = V ? `secondary` : `primary`,
            n = V ? X.manageButton : X.setupButton,
            r;
        t[46] === n ? r = t[47] : (r = (0, Y.jsx)(R, {
            ...n
        }), t[46] = n, t[47] = r);
        let i;
        t[48] !== o || t[49] !== e || t[50] !== r ? (i = (0, Y.jsx)(k, {
            type: `button`,
            color: e,
            onClick: o,
            children: r
        }), t[48] = o, t[49] = e, t[50] = r, t[51] = i) : i = t[51];
        let a;
        t[52] !== f || t[53] !== o || t[54] !== V ? (a = !V && (0, Y.jsx)(`p`, {
            className: `basis-full`,
            role: `status`,
            children: (0, Y.jsxs)(`button`, {
                type: `button`,
                onClick: o,
                className: `text-token-interactive-label-warning-secondary inline-flex items-center gap-1 text-start text-xs`,
                children: [(0, Y.jsx)(R, {
                    ...X.setupNeededSummary,
                    values: {
                        actionNeeded: f.formatMessage(X.actionNeeded)
                    }
                }), (0, Y.jsx)(He, {
                    "aria-hidden": !0,
                    className: `icon-xs shrink-0`
                })]
            })
        }), t[52] = f, t[53] = o, t[54] = V, t[55] = a) : a = t[55];
        let s;
        t[56] !== f || t[57] !== le || t[58] !== Ge || t[59] !== We || t[60] !== o || t[61] !== G || t[62] !== V || t[63] !== Se ? (s = V && (le ? (0, Y.jsxs)(`p`, {
            className: `text-token-text-secondary flex basis-full flex-wrap items-center gap-x-2 gap-y-1 text-xs`,
            children: [(0, Y.jsx)(`span`, {
                children: (0, Y.jsx)(R, {
                    ...X.configured
                })
            }), Se && (0, Y.jsx)(`span`, {
                "aria-hidden": `true`,
                children: (0, Y.jsx)(R, {
                    ...X.summarySeparator
                })
            }), Se && (0, Y.jsx)(`span`, {
                children: G === `all_accessible` ? (0, Y.jsx)(R, {
                    ...X.allAccessibleSummary
                }) : G === `selected_groups` ? (0, Y.jsx)(R, {
                    ...X.groupsEnabled,
                    values: {
                        count: Ge.length
                    }
                }) : (0, Y.jsx)(R, {
                    ...X.projectsEnabled,
                    values: {
                        count: We.length
                    }
                })
            })]
        }) : (0, Y.jsx)(`p`, {
            className: `basis-full`,
            role: `status`,
            children: (0, Y.jsxs)(`button`, {
                type: `button`,
                onClick: o,
                className: `text-token-interactive-label-warning-secondary inline-flex items-center gap-1 text-start text-xs`,
                children: [(0, Y.jsx)(R, {
                    ...X.unavailableSummary,
                    values: {
                        actionNeeded: f.formatMessage(X.actionNeeded),
                        tokenUnavailable: f.formatMessage(X.tokenUnavailable)
                    }
                }), (0, Y.jsx)(He, {
                    "aria-hidden": !0,
                    className: `icon-xs shrink-0`
                })]
            })
        })), t[56] = f, t[57] = le, t[58] = Ge, t[59] = We, t[60] = o, t[61] = G, t[62] = V, t[63] = Se, t[64] = s) : s = t[64];
        let c;
        return t[65] !== i || t[66] !== a || t[67] !== s ? (c = (0, Y.jsxs)(Y.Fragment, {
            children: [i, a, s]
        }), t[65] = i, t[66] = a, t[67] = s, t[68] = c) : c = t[68], c
    }
    let tt;
    t[69] !== K || t[70] !== ke || t[71] !== b || t[72] !== v ? (tt = () => {
        !b.trim() || K || (v.current = b.trim(), ke.mutate())
    }, t[69] = K, t[70] = ke, t[71] = b, t[72] = v, t[73] = tt) : tt = t[73];
    let nt = tt,
        rt = e => {
            let {
                showCancel: t,
                showInstructions: n,
                showReplacementInstructions: r
            } = e === void 0 ? {} : e, i = t !== void 0 && t, a = n !== void 0 && n, o = r !== void 0 && r;
            return (0, Y.jsxs)(`div`, {
                className: `flex flex-col gap-3`,
                children: [a && (0, Y.jsxs)(`div`, {
                    className: `flex flex-col gap-1`,
                    children: [(0, Y.jsx)(`h3`, {
                        className: `text-token-text-primary text-sm font-medium`,
                        children: (0, Y.jsx)(R, {
                            ...X.tokenTitle
                        })
                    }), (0, Y.jsx)(`p`, {
                        className: `text-token-text-secondary text-xs`,
                        children: (0, Y.jsx)(R, {
                            ...X.tokenDescription
                        })
                    }), (0, Y.jsx)(`p`, {
                        id: h,
                        className: `text-token-text-secondary text-xs`,
                        children: (0, Y.jsx)(R, {
                            ...X.helpText
                        })
                    })]
                }), o && (0, Y.jsx)(`p`, {
                    id: h,
                    className: `text-token-text-secondary text-xs`,
                    children: (0, Y.jsx)(R, {
                        ...X.replacementInstructions
                    })
                }), (0, Y.jsx)(Ie, {
                    name: `personal_access_token`,
                    type: `password`,
                    color: `tertiary`,
                    className: `w-full`,
                    inputClassName: `text-token-text-primary w-full`,
                    displayName: f.formatMessage(X.inputLabel),
                    autoComplete: `new-password`,
                    spellCheck: !1,
                    value: b,
                    disabled: K,
                    "aria-describedby": a || o ? h : void 0,
                    placeholder: f.formatMessage(X.inputPlaceholder),
                    onChange: e => {
                        v.current = e.target.value, x(e.target.value)
                    }
                }), (0, Y.jsxs)(`div`, {
                    className: `flex gap-2`,
                    children: [(0, Y.jsx)(k, {
                        type: `button`,
                        color: `primary`,
                        size: `small`,
                        disabled: !b.trim() || K,
                        loading: ke.isPending,
                        onClick: nt,
                        children: (0, Y.jsx)(R, {
                            ...X.saveButton
                        })
                    }), i && (0, Y.jsx)(k, {
                        type: `button`,
                        color: `secondary`,
                        size: `small`,
                        disabled: K,
                        onClick: () => {
                            v.current = ``, x(``), I(!1)
                        },
                        children: (0, Y.jsx)(R, {
                            ...X.cancelButton
                        })
                    })]
                })]
            })
        },
        it = `flex flex-col gap-6`,
        at = V ? (0, Y.jsxs)(Y.Fragment, {
            children: [!l && (0, Y.jsx)(`h2`, {
                className: `text-token-text-primary text-base font-medium`,
                children: (0, Y.jsx)(R, {
                    ...X.manageTitle
                })
            }), (0, Y.jsxs)(`div`, {
                className: `flex flex-col gap-1`,
                children: [(0, Y.jsx)(`p`, {
                    className: `text-token-text-secondary text-xs font-medium`,
                    children: (0, Y.jsx)(R, {
                        ...X.identityLabel
                    })
                }), ye && be ? (0, Y.jsxs)(`a`, {
                    href: be,
                    target: `_blank`,
                    rel: `noopener noreferrer`,
                    "aria-label": f.formatMessage(X.identityLinkLabel, {
                        identity: ye
                    }),
                    className: `text-token-text-primary inline-flex max-w-full items-center gap-1 text-sm underline-offset-2 hover:underline focus-visible:underline`,
                    children: [(0, Y.jsx)(`span`, {
                        className: `min-w-0 break-all`,
                        children: ye
                    }), (0, Y.jsx)(He, {
                        "aria-hidden": !0,
                        className: `icon-xs shrink-0`
                    })]
                }) : (0, Y.jsx)(`p`, {
                    className: `text-token-text-primary text-sm`,
                    children: ye ?? f.formatMessage(X.identityUnavailable)
                })]
            }), (0, Y.jsxs)(`div`, {
                className: `flex flex-col gap-2`,
                children: [(0, Y.jsx)(`p`, {
                    className: `text-token-text-secondary text-xs font-medium`,
                    children: (0, Y.jsx)(R, {
                        ...X.patLabel
                    })
                }), le ? (0, Y.jsxs)(Y.Fragment, {
                    children: [(0, Y.jsx)(`p`, {
                        className: `text-token-text-primary text-sm font-medium`,
                        children: (0, Y.jsx)(R, {
                            ...X.tokenConfigured
                        })
                    }), ue || !re ? (0, Y.jsxs)(`div`, {
                        className: `flex gap-2`,
                        children: [!ue && (0, Y.jsx)(k, {
                            type: `button`,
                            color: `secondary`,
                            size: `small`,
                            disabled: K,
                            onClick: () => I(!0),
                            children: (0, Y.jsx)(R, {
                                ...X.replaceButton
                            })
                        }), (0, Y.jsx)(k, {
                            type: `button`,
                            color: `danger-outline`,
                            size: `small`,
                            disabled: K,
                            onClick: () => ie(!0),
                            children: (0, Y.jsx)(R, {
                                ...de
                            })
                        })]
                    }) : rt({
                        showCancel: !0,
                        showReplacementInstructions: !0
                    })]
                }) : (0, Y.jsxs)(Y.Fragment, {
                    children: [(0, Y.jsx)(`p`, {
                        className: `text-token-interactive-label-warning-secondary text-sm font-medium`,
                        children: (0, Y.jsx)(R, {
                            ...X.actionNeeded
                        })
                    }), (0, Y.jsx)(`p`, {
                        className: `text-token-text-secondary text-sm`,
                        children: (0, Y.jsx)(R, {
                            ...X.tokenUnavailable
                        })
                    }), ue ? (0, Y.jsx)(`div`, {
                        children: (0, Y.jsx)(k, {
                            type: `button`,
                            color: `primary`,
                            size: `small`,
                            disabled: K,
                            loading: Me.isPending,
                            onClick: () => Me.mutate(),
                            children: (0, Y.jsx)(R, {
                                ...X.generateTokenButton
                            })
                        })
                    }) : re ? rt({
                        showCancel: !0,
                        showReplacementInstructions: !0
                    }) : (0, Y.jsx)(`div`, {
                        children: (0, Y.jsx)(k, {
                            type: `button`,
                            color: `primary`,
                            size: `small`,
                            disabled: K,
                            onClick: () => I(!0),
                            children: (0, Y.jsx)(R, {
                                ...X.replacePatButton
                            })
                        })
                    })]
                })]
            }), Se && (0, Y.jsxs)(`div`, {
                className: `border-token-border-default mt-1 flex flex-col gap-3 border-t pt-6`,
                children: [(0, Y.jsx)(`h3`, {
                    className: `text-token-text-primary text-sm font-medium`,
                    children: (0, Y.jsx)(R, {
                        ...X.projectAccess
                    })
                }), (0, Y.jsx)(`p`, {
                    className: `text-token-text-secondary text-xs`,
                    children: (0, Y.jsx)(R, {
                        ...G === `selected_groups` ? X.groupAccessDescription : X.projectAccessDescription
                    })
                }), Ce ? (0, Y.jsx)(Ot, {
                    onChange: et,
                    disabled: K,
                    showGroups: d,
                    showLegacyAllAccessible: W === `all_accessible`
                }) : (0, Y.jsxs)(Y.Fragment, {
                    children: [(0, Y.jsx)(kt, {
                        value: G,
                        onChange: () => F(!0),
                        disabled: K
                    }), Qe && (0, Y.jsx)(`p`, {
                        className: `text-token-text-secondary text-xs`,
                        children: (0, Y.jsx)(R, {
                            ...X.allAccessibleProjectsSyncDescription
                        })
                    }), G === `selected_groups` && (0, Y.jsxs)(Y.Fragment, {
                        children: [(0, Y.jsx)(At, {
                            connectorId: r,
                            selectedGroupIds: U,
                            persistedGroupIds: Ke,
                            onChange: A,
                            disabled: K
                        }), (0, Y.jsx)(`p`, {
                            className: `text-token-text-secondary text-xs`,
                            children: (0, Y.jsx)(R, {
                                ...X.selectedGroups,
                                values: {
                                    count: U.size
                                }
                            })
                        })]
                    }), G === `selected` && (0, Y.jsxs)(Y.Fragment, {
                        children: [(0, Y.jsx)(Nt, {
                            connectorId: r,
                            selectedProjectIds: H,
                            onChange: E,
                            disabled: K
                        }), (0, Y.jsx)(`p`, {
                            className: `text-token-text-secondary text-xs`,
                            children: (0, Y.jsx)(R, {
                                ...X.selectedProjects,
                                values: {
                                    count: H.size
                                }
                            })
                        }), Je && W === `selected_groups` && (0, Y.jsx)(`p`, {
                            className: `text-token-interactive-label-warning-secondary text-xs`,
                            role: `alert`,
                            children: (0, Y.jsx)(R, {
                                ...X.groupModeChangeLimit,
                                values: {
                                    removalLimit: Wt
                                }
                            })
                        })]
                    }), (0, Y.jsx)(`div`, {
                        children: (0, Y.jsx)(k, {
                            type: `button`,
                            color: Qe ? `secondary` : `primary`,
                            size: `small`,
                            disabled: K || Ze || Je || Ye || !Xe && !Qe,
                            loading: Ne.isPending,
                            onClick: () => Ne.mutate(),
                            children: (0, Y.jsx)(R, {
                                ...Qe ? X.syncProjectAccess : G === `selected_groups` ? X.saveGroupChanges : X.saveProjectChanges
                            })
                        })
                    })]
                })]
            })]
        }) : (0, Y.jsxs)(Y.Fragment, {
            children: [(0, Y.jsxs)(`div`, {
                className: `flex flex-col gap-1`,
                children: [!l && (0, Y.jsx)(`h2`, {
                    className: `text-token-text-primary text-base font-medium`,
                    children: (0, Y.jsx)(R, {
                        ...X.configureTitle
                    })
                }), (0, Y.jsx)(`p`, {
                    className: `text-token-text-secondary text-sm`,
                    children: (0, Y.jsx)(R, {
                        ...X.configureDescription
                    })
                })]
            }), (0, Y.jsxs)(`div`, {
                className: `flex flex-col gap-2`,
                children: [(0, Y.jsxs)(`div`, {
                    className: `border-token-border-default rounded-xl border`,
                    children: [(0, Y.jsxs)(`button`, {
                        type: `button`,
                        className: `text-token-text-primary hover:bg-token-bg-tertiary focus-visible:ring-token-border-xheavy flex w-full items-center justify-between rounded-xl px-4 py-3 text-start text-sm font-medium focus-visible:ring-1 focus-visible:outline-hidden`,
                        "aria-expanded": S === `existing`,
                        "aria-controls": g,
                        onClick: () => w(S === `existing` ? null : `existing`),
                        children: [(0, Y.jsx)(R, {
                            ...X.existingOption
                        }), (0, Y.jsx)(Be, {
                            "aria-hidden": `true`,
                            className: ne(`icon-sm text-token-text-secondary transition-transform`, S === `existing` && `rotate-180`)
                        })]
                    }), S === `existing` && (0, Y.jsx)(`div`, {
                        id: g,
                        className: `border-token-border-default border-t p-4`,
                        children: rt({
                            showInstructions: !0
                        })
                    })]
                }), (0, Y.jsxs)(`div`, {
                    className: `border-token-border-default rounded-xl border`,
                    children: [(0, Y.jsxs)(`button`, {
                        type: `button`,
                        className: `text-token-text-primary hover:bg-token-bg-tertiary focus-visible:ring-token-border-xheavy flex w-full items-center justify-between rounded-xl px-4 py-3 text-start text-sm font-medium focus-visible:ring-1 focus-visible:outline-hidden`,
                        "aria-expanded": S === `create`,
                        "aria-controls": _,
                        onClick: () => w(S === `create` ? null : `create`),
                        children: [(0, Y.jsx)(R, {
                            ...X.createOption
                        }), (0, Y.jsx)(Be, {
                            "aria-hidden": `true`,
                            className: ne(`icon-sm text-token-text-secondary transition-transform`, S === `create` && `rotate-180`)
                        })]
                    }), S === `create` && (0, Y.jsxs)(`div`, {
                        id: _,
                        className: `border-token-border-default flex flex-col gap-3 border-t p-4`,
                        children: [(0, Y.jsx)(`p`, {
                            className: `text-token-text-secondary text-sm`,
                            children: (0, Y.jsx)(R, {
                                ...G === `selected_groups` ? X.groupAccessDescription : X.projectAccessDescription
                            })
                        }), Ce ? (0, Y.jsx)(Ot, {
                            onChange: et,
                            disabled: K,
                            showGroups: d
                        }) : (0, Y.jsxs)(Y.Fragment, {
                            children: [(0, Y.jsx)(kt, {
                                value: G,
                                onChange: () => F(!0),
                                disabled: K
                            }), G === `selected_groups` && (0, Y.jsxs)(Y.Fragment, {
                                children: [(0, Y.jsx)(At, {
                                    connectorId: r,
                                    selectedGroupIds: U,
                                    persistedGroupIds: Ke,
                                    onChange: A,
                                    disabled: K
                                }), (0, Y.jsx)(`p`, {
                                    className: `text-token-text-secondary text-xs`,
                                    children: (0, Y.jsx)(R, {
                                        ...X.selectedGroups,
                                        values: {
                                            count: U.size
                                        }
                                    })
                                })]
                            }), G === `selected` && (0, Y.jsxs)(Y.Fragment, {
                                children: [(0, Y.jsx)(Nt, {
                                    connectorId: r,
                                    selectedProjectIds: H,
                                    onChange: E,
                                    disabled: K
                                }), (0, Y.jsx)(`p`, {
                                    className: `text-token-text-secondary text-xs`,
                                    children: (0, Y.jsx)(R, {
                                        ...X.selectedProjects,
                                        values: {
                                            count: H.size
                                        }
                                    })
                                })]
                            }), (0, Y.jsx)(`p`, {
                                className: `text-token-text-secondary text-xs`,
                                children: (0, Y.jsx)(R, {
                                    ...G === `all_accessible` ? X.createAllAccessibleSummary : G === `selected_groups` ? X.createGroupsSummary : X.createSummary
                                })
                            }), (0, Y.jsx)(`div`, {
                                children: (0, Y.jsx)(k, {
                                    type: `button`,
                                    color: `primary`,
                                    size: `small`,
                                    disabled: G === `selected` && H.size === 0 || G === `selected_groups` && U.size === 0 || Je || Ye || K,
                                    loading: Ae.isPending,
                                    onClick: () => Ae.mutate(),
                                    children: G === `all_accessible` ? (0, Y.jsx)(R, {
                                        ...X.createAllAccessibleButton
                                    }) : G === `selected_groups` ? (0, Y.jsx)(R, {
                                        ...X.createGroupsButton,
                                        values: {
                                            count: U.size
                                        }
                                    }) : (0, Y.jsx)(R, {
                                        ...X.createButton,
                                        values: {
                                            count: H.size
                                        }
                                    })
                                })
                            })]
                        })]
                    })]
                })]
            })]
        }),
        ot;
    t[74] === ge ? ot = t[75] : (ot = (0, Y.jsx)(R, {
        ...ge
    }), t[74] = ge, t[75] = ot);
    let st;
    t[76] === ie ? st = t[77] : (st = () => ie(!1), t[76] = ie, t[77] = st);
    let ct;
    t[78] !== f || t[79] !== de ? (ct = f.formatMessage(de), t[78] = f, t[79] = de, t[80] = ct) : ct = t[80];
    let lt;
    t[81] === Fe ? lt = t[82] : (lt = () => Fe.mutate(), t[81] = Fe, t[82] = lt);
    let ut;
    t[83] !== Fe.isPending || t[84] !== ct || t[85] !== lt ? (ut = (0, Y.jsx)(te.Button, {
        title: ct,
        color: `danger`,
        loading: Fe.isPending,
        onClick: lt
    }), t[83] = Fe.isPending, t[84] = ct, t[85] = lt, t[86] = ut) : ut = t[86];
    let dt;
    t[87] === f ? dt = t[88] : (dt = f.formatMessage(X.cancelButton), t[87] = f, t[88] = dt);
    let ft;
    t[89] === ie ? ft = t[90] : (ft = () => ie(!1), t[89] = ie, t[90] = ft);
    let pt;
    t[91] !== Fe.isPending || t[92] !== dt || t[93] !== ft ? (pt = (0, Y.jsx)(te.Button, {
        title: dt,
        color: `secondary`,
        disabled: Fe.isPending,
        onClick: ft
    }), t[91] = Fe.isPending, t[92] = dt, t[93] = ft, t[94] = pt) : pt = t[94];
    let mt;
    t[95] === _e ? mt = t[96] : (mt = (0, Y.jsx)(`p`, {
        children: (0, Y.jsx)(R, {
            ..._e
        })
    }), t[95] = _e, t[96] = mt);
    let ht;
    t[97] === ve ? ht = t[98] : (ht = (0, Y.jsx)(`p`, {
        children: (0, Y.jsx)(R, {
            ...ve
        })
    }), t[97] = ve, t[98] = ht);
    let gt;
    t[99] !== mt || t[100] !== ht ? (gt = (0, Y.jsxs)(`div`, {
        className: `flex flex-col gap-3 text-sm`,
        children: [mt, ht]
    }), t[99] = mt, t[100] = ht, t[101] = gt) : gt = t[101];
    let _t;
    t[102] !== L || t[103] !== ot || t[104] !== st || t[105] !== ut || t[106] !== pt || t[107] !== gt ? (_t = (0, Y.jsx)(D, {
        testId: `modal-gitlab-service-account-token-remove`,
        isOpen: L,
        type: `danger`,
        title: ot,
        onClose: st,
        primaryButton: ut,
        secondaryButton: pt,
        children: gt
    }), t[102] = L, t[103] = ot, t[104] = st, t[105] = ut, t[106] = pt, t[107] = gt, t[108] = _t) : _t = t[108];
    let vt;
    return t[109] !== it || t[110] !== at || t[111] !== _t ? (vt = (0, Y.jsxs)(`section`, {
        className: it,
        children: [at, _t]
    }), t[109] = it, t[110] = at, t[111] = _t, t[112] = vt) : vt = t[112], vt
}
var Bt, J, Y, X, Vt, Ht, Ut, Wt, Gt, Kt, qt = e((() => {
    Bt = me(), r(), ve(), Re(), Ve(), ze(), Ue(), A(), je(), _(), j(), x(), P(), M(), T(), re(), ft(), Ee(), h(), pe(), v(), J = t(le()), z(), Y = L(), X = ae({
        configured: {
            id: `wham.settings.gitlab_service_account_credential.status.configured`,
            defaultMessage: `Service account configured`
        },
        memberNotConfigured: {
            id: `wham.settings.gitlab_service_account_credential.status.not_configured_member_plain`,
            defaultMessage: `No service account token configured. Ask your workspace administrator to configure it.`
        },
        memberNotice: {
            id: `wham.settings.gitlab_service_account_credential.member_notice_plain`,
            defaultMessage: `Your workspace administrator manages the GitLab service account token.`
        },
        actionNeeded: {
            id: `wham.settings.gitlab_service_account_credential.status.action_needed`,
            defaultMessage: `Action needed`
        },
        tokenUnavailable: {
            id: `wham.settings.gitlab_service_account_credential.status.token_unavailable`,
            defaultMessage: `The configured PAT is expired or unavailable.`
        },
        unavailableSummary: {
            id: `wham.settings.gitlab_service_account_credential.status.unavailable_summary`,
            defaultMessage: `{actionNeeded}: {tokenUnavailable}`
        },
        setupNeededSummary: {
            id: `wham.settings.gitlab_service_account_credential.status.setup_needed_summary`,
            defaultMessage: `{actionNeeded}: Set up a service account so Codex can respond to GitLab activity.`
        },
        projectsEnabled: {
            id: `wham.settings.gitlab_service_account_credential.summary.projects_enabled`,
            defaultMessage: `{count, plural, one {# project enabled} other {# projects enabled}}`
        },
        groupsEnabled: {
            id: `wham.settings.gitlab_service_account_credential.summary.groups_enabled`,
            defaultMessage: `{count, plural, one {# group enabled} other {# groups enabled}}`
        },
        summarySeparator: {
            id: `wham.settings.gitlab_service_account_credential.summary.separator`,
            defaultMessage: `·`
        },
        setupButton: {
            id: `wham.settings.gitlab_service_account_credential.button.setup`,
            defaultMessage: `Set up service account`
        },
        manageButton: {
            id: `wham.settings.gitlab_service_account_credential.button.manage`,
            defaultMessage: `Manage service account`
        },
        configureTitle: {
            id: `wham.settings.gitlab_service_account_credential.configure.title`,
            defaultMessage: `Configure GitLab access for Codex`
        },
        configureDescription: {
            id: `wham.settings.gitlab_service_account_credential.configure.description`,
            defaultMessage: `Give Codex access to GitLab projects. Choose an existing service account or let Codex create one for you.`
        },
        existingOption: {
            id: `wham.settings.gitlab_service_account_credential.option.existing`,
            defaultMessage: `Use an existing service account`
        },
        createOption: {
            id: `wham.settings.gitlab_service_account_credential.option.create`,
            defaultMessage: `Create a service account`
        },
        tokenTitle: {
            id: `wham.settings.gitlab_service_account_credential.token.title`,
            defaultMessage: `Service account token`
        },
        tokenDescription: {
            id: `wham.settings.gitlab_service_account_credential.token.description`,
            defaultMessage: `Create a GitLab service account and give it the Developer role only in projects where Codex should comment and react. Then paste a personal access token with the api scope that expires at least 30 days from today.`
        },
        helpText: {
            id: `wham.settings.gitlab_service_account_credential.input.help_text`,
            defaultMessage: `The token is encrypted when saved and is never shown again.`
        },
        replacementInstructions: {
            id: `wham.settings.gitlab_service_account_credential.input.replacement_instructions`,
            defaultMessage: `Create a new PAT for this service account in GitLab with the api scope and at least 30 days remaining, then paste it here.`
        },
        inputLabel: {
            id: `wham.settings.gitlab_service_account_credential.input.label`,
            defaultMessage: `Personal access token`
        },
        inputPlaceholder: {
            id: `wham.settings.gitlab_service_account_credential.input.placeholder`,
            defaultMessage: `Paste a GitLab personal access token`
        },
        saveButton: {
            id: `wham.settings.gitlab_service_account_credential.button.save`,
            defaultMessage: `Save token`
        },
        replaceButton: {
            id: `wham.settings.gitlab_service_account_credential.button.replace`,
            defaultMessage: `Replace token`
        },
        replacePatButton: {
            id: `wham.settings.gitlab_service_account_credential.button.replace_pat`,
            defaultMessage: `Replace PAT`
        },
        generateTokenButton: {
            id: `wham.settings.gitlab_service_account_credential.button.generate_token`,
            defaultMessage: `Generate new token`
        },
        removeButton: {
            id: `wham.settings.gitlab_service_account_credential.button.remove`,
            defaultMessage: `Remove token`
        },
        revokeButton: {
            id: `wham.settings.gitlab_service_account_credential.button.revoke`,
            defaultMessage: `Revoke token`
        },
        cancelButton: {
            id: `wham.settings.gitlab_service_account_credential.button.cancel`,
            defaultMessage: `Cancel`
        },
        projectAccessDescription: {
            id: `wham.settings.gitlab_service_account_credential.projects.description`,
            defaultMessage: `Choose where Codex can interact with GitLab. Codex can comment and react only in projects allowed here.`
        },
        groupAccessDescription: {
            id: `wham.settings.gitlab_service_account_credential.groups.description`,
            defaultMessage: `Choose where Codex can interact with GitLab. Codex can comment and react only in groups allowed here.`
        },
        changeAccessMode: {
            id: `wham.settings.gitlab_service_account_credential.button.change_access_mode`,
            defaultMessage: `Change`
        },
        allAccessibleProjects: {
            id: `wham.settings.gitlab_service_account_credential.projects.all_accessible`,
            defaultMessage: `All accessible projects`
        },
        allAccessibleProjectsDescription: {
            id: `wham.settings.gitlab_service_account_credential.projects.all_accessible.description`,
            defaultMessage: `Add the service account to every GitLab project your connected account can manage.`
        },
        allAccessibleProjectsSyncDescription: {
            id: `wham.settings.gitlab_service_account_credential.projects.all_accessible.sync_description`,
            defaultMessage: `Sync to add newly accessible projects and retry failed changes.`
        },
        selectedGroupsOnly: {
            id: `wham.settings.gitlab_service_account_credential.groups.selected_only`,
            defaultMessage: `Selected groups`
        },
        selectedGroupsOnlyDescription: {
            id: `wham.settings.gitlab_service_account_credential.groups.selected_only.description`,
            defaultMessage: `Includes all projects and subgroups.`
        },
        selectedProjectsOnly: {
            id: `wham.settings.gitlab_service_account_credential.projects.selected_only`,
            defaultMessage: `Selected projects only`
        },
        selectedProjectsOnlyDescription: {
            id: `wham.settings.gitlab_service_account_credential.projects.selected_only.description`,
            defaultMessage: `Add the service account only to the projects selected below.`
        },
        searchProjects: {
            id: `wham.settings.gitlab_service_account_credential.projects.search`,
            defaultMessage: `Search`
        },
        searchGroups: {
            id: `wham.settings.gitlab_service_account_credential.groups.search`,
            defaultMessage: `Search groups`
        },
        selectedGroups: {
            id: `wham.settings.gitlab_service_account_credential.groups.selected`,
            defaultMessage: `{count, plural, one {# group selected} other {# groups selected}}`
        },
        groupModeChangeLimit: {
            id: `wham.settings.gitlab_service_account_credential.groups.mode_change_limit`,
            defaultMessage: `Remove groups in batches of {removalLimit, number} before switching to project access.`
        },
        selectedProjects: {
            id: `wham.settings.gitlab_service_account_credential.projects.selected`,
            defaultMessage: `{count, plural, one {# project selected} other {# projects selected}}`
        },
        createSummary: {
            id: `wham.settings.gitlab_service_account_credential.create.summary`,
            defaultMessage: `Codex will create the service account and add it to the selected projects with the Developer role.`
        },
        createGroupsSummary: {
            id: `wham.settings.gitlab_service_account_credential.create.groups.summary`,
            defaultMessage: `Codex will create the service account and add it to the selected groups with the Developer role.`
        },
        createAllAccessibleSummary: {
            id: `wham.settings.gitlab_service_account_credential.create.all_accessible.summary`,
            defaultMessage: `Codex will create the service account and add it to every project your connected account can manage with the Developer role.`
        },
        createButton: {
            id: `wham.settings.gitlab_service_account_credential.button.create`,
            defaultMessage: `Create account and enable {count, plural, one {# project} other {# projects}}`
        },
        createGroupsButton: {
            id: `wham.settings.gitlab_service_account_credential.button.create_groups`,
            defaultMessage: `Create account and enable {count, plural, one {# group} other {# groups}}`
        },
        createAllAccessibleButton: {
            id: `wham.settings.gitlab_service_account_credential.button.create_all_accessible`,
            defaultMessage: `Create and enable all accessible projects`
        },
        noProjects: {
            id: `wham.settings.gitlab_service_account_credential.projects.empty`,
            defaultMessage: `No projects found.`
        },
        noGroups: {
            id: `wham.settings.gitlab_service_account_credential.groups.empty`,
            defaultMessage: `No groups found.`
        },
        projectLoadError: {
            id: `wham.settings.gitlab_service_account_credential.projects.error`,
            defaultMessage: `Couldn’t load GitLab projects. Check your GitLab connection and try again.`
        },
        groupLoadError: {
            id: `wham.settings.gitlab_service_account_credential.groups.error`,
            defaultMessage: `Couldn’t load GitLab groups. Check your GitLab connection and try again.`
        },
        manageTitle: {
            id: `wham.settings.gitlab_service_account_credential.manage.title`,
            defaultMessage: `Manage GitLab service account`
        },
        identityLabel: {
            id: `wham.settings.gitlab_service_account_credential.manage.identity`,
            defaultMessage: `Service account identity`
        },
        identityUnavailable: {
            id: `wham.settings.gitlab_service_account_credential.manage.identity_unavailable`,
            defaultMessage: `Unavailable`
        },
        identityLinkLabel: {
            id: `wham.settings.gitlab_service_account_credential.manage.identity_link`,
            defaultMessage: `Open {identity} in GitLab`
        },
        patLabel: {
            id: `wham.settings.gitlab_service_account_credential.manage.pat`,
            defaultMessage: `Personal access token`
        },
        tokenConfigured: {
            id: `wham.settings.gitlab_service_account_credential.manage.token_configured`,
            defaultMessage: `Service account token configured`
        },
        projectAccess: {
            id: `wham.settings.gitlab_service_account_credential.manage.project_access`,
            defaultMessage: `Project access`
        },
        allAccessibleSummary: {
            id: `wham.settings.gitlab_service_account_credential.summary.all_accessible`,
            defaultMessage: `All accessible projects enabled`
        },
        saveProjectChanges: {
            id: `wham.settings.gitlab_service_account_credential.button.save_projects`,
            defaultMessage: `Save project changes`
        },
        saveGroupChanges: {
            id: `wham.settings.gitlab_service_account_credential.button.save_groups`,
            defaultMessage: `Save group changes`
        },
        syncProjectAccess: {
            id: `wham.settings.gitlab_service_account_credential.button.sync_projects`,
            defaultMessage: `Sync accessible projects`
        },
        partialProjectWarning: {
            id: `wham.settings.gitlab_service_account_credential.projects.partial_warning`,
            defaultMessage: `Some project access changes couldn’t be completed. Check your GitLab project permissions and try again.`
        },
        partialGroupWarning: {
            id: `wham.settings.gitlab_service_account_credential.groups.partial_warning`,
            defaultMessage: `Some group access changes couldn’t be completed. Check your GitLab group permissions and try again.`
        },
        partialProjectUpdateWarning: {
            id: `wham.settings.gitlab_service_account_credential.projects.partial_update_warning`,
            defaultMessage: `Some project access changes were updated, but not all. Check your GitLab project permissions and try again.`
        },
        partialGroupUpdateWarning: {
            id: `wham.settings.gitlab_service_account_credential.groups.partial_update_warning`,
            defaultMessage: `Some group access changes were updated, but not all. Check your GitLab group permissions and try again.`
        },
        projectUpdateFailedWarning: {
            id: `wham.settings.gitlab_service_account_credential.projects.update_failed_warning`,
            defaultMessage: `Project access couldn’t be updated. Check your GitLab project permissions and try again.`
        },
        groupUpdateFailedWarning: {
            id: `wham.settings.gitlab_service_account_credential.groups.update_failed_warning`,
            defaultMessage: `Group access couldn’t be updated. Check your GitLab group permissions and try again.`
        },
        tokenSavedSuccess: {
            id: `wham.settings.gitlab_service_account_credential.success.token_saved`,
            defaultMessage: `Service account token saved`
        },
        tokenGeneratedSuccess: {
            id: `wham.settings.gitlab_service_account_credential.success.token_generated`,
            defaultMessage: `New token generated`
        },
        serviceAccountCreatedSuccess: {
            id: `wham.settings.gitlab_service_account_credential.success.account_created`,
            defaultMessage: `Service account created`
        },
        projectAccessUpdatedSuccess: {
            id: `wham.settings.gitlab_service_account_credential.success.projects_updated`,
            defaultMessage: `Project access updated`
        },
        groupAccessUpdatedSuccess: {
            id: `wham.settings.gitlab_service_account_credential.success.groups_updated`,
            defaultMessage: `Group access updated`
        },
        projectAccessSyncedSuccess: {
            id: `wham.settings.gitlab_service_account_credential.success.projects_synced`,
            defaultMessage: `Project access synced`
        },
        tokenRemovedSuccess: {
            id: `wham.settings.gitlab_service_account_credential.success.token_removed`,
            defaultMessage: `Service account token removed`
        },
        tokenRevokedSuccess: {
            id: `wham.settings.gitlab_service_account_credential.success.token_revoked`,
            defaultMessage: `Service account token revoked`
        },
        loadingStatus: {
            id: `wham.settings.gitlab_service_account_credential.status.loading`,
            defaultMessage: `Loading service account token status`
        },
        loadError: {
            id: `wham.settings.gitlab_service_account_credential.error.load`,
            defaultMessage: `Couldn’t load the service account token status.`
        },
        retryButton: {
            id: `wham.settings.gitlab_service_account_credential.button.retry`,
            defaultMessage: `Retry`
        },
        saveError: {
            id: `wham.settings.gitlab_service_account_credential.error.save.min_lifetime`,
            defaultMessage: `Couldn’t save the token. Verify that it is active, has the api scope, and has at least 30 days remaining.`
        },
        saveInvalidTokenError: {
            id: `wham.settings.gitlab_service_account_credential.error.save.invalid_token`,
            defaultMessage: `GitLab rejected this token. Check that you copied the full token and try again.`
        },
        saveAccountInactiveError: {
            id: `wham.settings.gitlab_service_account_credential.error.save.account_inactive`,
            defaultMessage: `The GitLab account for this token is not active.`
        },
        saveTokenInactiveError: {
            id: `wham.settings.gitlab_service_account_credential.error.save.token_inactive`,
            defaultMessage: `This token is inactive or revoked. Create a new token and try again.`
        },
        saveMissingApiScopeError: {
            id: `wham.settings.gitlab_service_account_credential.error.save.missing_api_scope`,
            defaultMessage: `This token is missing the api scope. Create a token with the api scope and try again.`
        },
        saveExpiredTokenError: {
            id: `wham.settings.gitlab_service_account_credential.error.save.token_expired`,
            defaultMessage: `This token has expired. Create a new token and try again.`
        },
        saveExpirationTooSoonError: {
            id: `wham.settings.gitlab_service_account_credential.error.save.expiration_too_soon`,
            defaultMessage: `This token must expire at least 30 days from today.`
        },
        saveRetryableError: {
            id: `wham.settings.gitlab_service_account_credential.error.save_retryable`,
            defaultMessage: `Couldn’t save the token right now. Try again later.`
        },
        generateTokenError: {
            id: `wham.settings.gitlab_service_account_credential.error.generate_token`,
            defaultMessage: `Couldn’t generate a new token. Try again later.`
        },
        reconnectGitLabApiScopeError: {
            id: `wham.settings.gitlab_service_account_credential.error.reconnect_api_scope`,
            defaultMessage: `Reconnect to GitLab with the api scope, then try again.`
        },
        connectGitLabError: {
            id: `wham.settings.gitlab_service_account_credential.error.connect_gitlab`,
            defaultMessage: `Connect to GitLab, then try again.`
        },
        createGitLabAdminRequiredError: {
            id: `wham.settings.gitlab_service_account_credential.error.create.gitlab_admin_required`,
            defaultMessage: `GitLab administrator access is required to create a service account. Ask a GitLab administrator to create it, or use an existing service account.`
        },
        generateTokenGitLabAdminRequiredError: {
            id: `wham.settings.gitlab_service_account_credential.error.generate_token.gitlab_admin_required`,
            defaultMessage: `GitLab administrator access is required to generate a new token. Ask a GitLab administrator to generate one.`
        },
        createError: {
            id: `wham.settings.gitlab_service_account_credential.error.create`,
            defaultMessage: `Couldn’t create the GitLab service account. Check your GitLab connection and permission to create instance service accounts, then try again.`
        },
        updateProjectsError: {
            id: `wham.settings.gitlab_service_account_credential.error.update_projects`,
            defaultMessage: `Couldn’t update GitLab project access. Check your GitLab project permissions and try again.`
        },
        projectCredentialChangedError: {
            id: `wham.settings.gitlab_service_account_credential.error.update_projects.credential_changed`,
            defaultMessage: `The service account token changed. Review project access and try again.`
        },
        projectCredentialUnavailableError: {
            id: `wham.settings.gitlab_service_account_credential.error.update_projects.credential_unavailable`,
            defaultMessage: `The service account token is unavailable. Generate a new token before updating project access.`
        },
        removeError: {
            id: `wham.settings.gitlab_service_account_credential.error.remove`,
            defaultMessage: `Couldn’t remove the service account token.`
        },
        revokeError: {
            id: `wham.settings.gitlab_service_account_credential.error.revoke`,
            defaultMessage: `Couldn’t revoke the service account token.`
        },
        removeConfirmationTitle: {
            id: `wham.settings.gitlab_service_account_credential.dialog.remove.title`,
            defaultMessage: `Remove token?`
        },
        removeConfirmationBody: {
            id: `wham.settings.gitlab_service_account_credential.dialog.remove.description`,
            defaultMessage: `Codex will delete its copy of this token. This won’t revoke the token or delete the service account in GitLab.`
        },
        removeConfirmationConsequence: {
            id: `wham.settings.gitlab_service_account_credential.dialog.remove.consequence`,
            defaultMessage: `Codex can’t respond to GitLab activity until a new token is generated or saved.`
        },
        revokeConfirmationTitle: {
            id: `wham.settings.gitlab_service_account_credential.dialog.revoke.title`,
            defaultMessage: `Revoke token?`
        },
        revokeConfirmationBody: {
            id: `wham.settings.gitlab_service_account_credential.dialog.revoke.description`,
            defaultMessage: `Codex will revoke this token in GitLab and delete its stored copy. This won’t delete the service account or remove its project access.`
        },
        revokeConfirmationConsequence: {
            id: `wham.settings.gitlab_service_account_credential.dialog.revoke.consequence`,
            defaultMessage: `Codex can’t respond to GitLab activity until a new token is generated.`
        }
    }), Vt = 50, Ht = 1e3, Ut = 100, Wt = 1e3, Gt = 20, Kt = 300
}));

function Jt(e) {
    "use forget";
    let t = (0, Qt.c)(8),
        {
            refetchConnectorData: n
        } = e,
        r = he(),
        i;
    t[0] === r ? i = t[1] : (i = r.formatMessage(en.retryTooltip), t[0] = r, t[1] = i);
    let a;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, Z.jsxs)(`div`, {
        className: `flex items-center gap-1.5`,
        children: [(0, Z.jsx)(Ze, {
            "aria-hidden": !0,
            className: `icon-sm`
        }), (0, Z.jsx)(R, {
            ...en.retryGitLab
        })]
    }), t[2] = a) : a = t[2];
    let o;
    t[3] === n ? o = t[4] : (o = (0, Z.jsx)(k, {
        color: `secondary`,
        size: `small`,
        type: `button`,
        className: `border-token-border-default flex w-fit items-center gap-1.5 rounded-full! border`,
        onClick: n,
        children: a
    }), t[3] = n, t[4] = o);
    let s;
    return t[5] !== i || t[6] !== o ? (s = (0, Z.jsx)(O, {
        label: i,
        children: o
    }), t[5] = i, t[6] = o, t[7] = s) : s = t[7], s
}

function Yt() {
    "use forget";
    let e = (0, Qt.c)(52),
        t = he(),
        [n, r] = (0, $t.useState)(),
        [a, o] = (0, $t.useState)(!1),
        [s, c] = (0, $t.useState)(!1),
        [l, u] = (0, $t.useState)(null),
        d = i(),
        {
            mutate: f
        } = ct(),
        p;
    e[0] === n ? p = e[1] : (p = {
        connectorId: n,
        redirectAfter: `/codex/cloud/settings/connectors`
    }, e[0] = n, e[1] = p);
    let {
        isConnected: m,
        isLoading: h,
        error: g,
        openConnectorModal: _,
        refetch: v,
        handleDisconnect: y,
        link: b,
        connectorId: x,
        gitlabConnectorCandidates: S
    } = rt(p), C;
    e[2] === t ? C = e[3] : (C = e => e?.owner_profile?.nickname ?? e?.owner_profile?.name ?? e?.name ?? t.formatMessage(en.defaultAccountName), e[2] = t, e[3] = C);
    let w = C,
        te = S.length > 0,
        T;
    if (e[4] !== x || e[5] !== S) {
        let t;
        e[7] === x ? t = e[8] : (t = e => e.id === x, e[7] = x, e[8] = t), T = S.find(t), e[4] = x, e[5] = S, e[6] = T
    } else T = e[6];
    let E = T?.template_id === it,
        O;
    e[9] === d ? O = e[10] : (O = d?.isAdminOfAccount() || d?.isOwnerOfAccount(), e[9] = d, e[10] = O);
    let A = !!O,
        j;
    e[11] === Symbol.for(`react.memo_cache_sentinel`) ? (j = (0, Z.jsx)(`p`, {
        className: `text-md text-token-text-primary font-medium`,
        children: (0, Z.jsx)(R, {
            ...en.gitlabConnectorTitle
        })
    }), e[11] = j) : j = e[11];
    let M;
    e[12] !== x || e[13] !== S || e[14] !== s || e[15] !== f ? (M = S.length > 1 && (0, Z.jsxs)(`label`, {
        className: `flex max-w-sm flex-col gap-1 text-xs`,
        children: [(0, Z.jsx)(`span`, {
            className: `text-token-text-secondary`,
            children: (0, Z.jsx)(R, {
                ...en.connectorSelectorLabel
            })
        }), (0, Z.jsx)(`select`, {
            className: `border-token-border-default bg-token-bg-primary text-token-text-primary rounded-lg border px-3 py-2 text-sm`,
            value: x,
            disabled: s,
            onChange: e => {
                if (s) return;
                let t = e.target.value;
                r(t), o(!1), f({
                    preferredGitLabConnectorId: t
                })
            },
            children: S.map(Zt)
        })]
    }), e[12] = x, e[13] = S, e[14] = s, e[15] = f, e[16] = M) : M = e[16];
    let N;
    e[17] !== A || e[18] !== g || e[19] !== x || e[20] !== w || e[21] !== y || e[22] !== te || e[23] !== t || e[24] !== h || e[25] !== m || e[26] !== s || e[27] !== b || e[28] !== _ || e[29] !== v || e[30] !== E ? (N = g ? (0, Z.jsx)(Jt, {
        refetchConnectorData: v
    }) : h ? (0, Z.jsx)(`div`, {
        className: `flex w-full items-center justify-center gap-2`,
        children: (0, Z.jsx)(ee, {
            className: `h-6 w-6`
        })
    }) : m ? (0, Z.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [(0, Z.jsx)(`span`, {
            className: `text-token-text-primary flex items-center gap-2 text-sm`,
            children: (0, Z.jsx)(R, {
                ...en.connected,
                values: {
                    b: Xt,
                    gitlabLogin: w(b)
                }
            })
        }), (0, Z.jsxs)(`div`, {
            className: `flex flex-row flex-wrap gap-2`,
            children: [(0, Z.jsx)(k, {
                color: `danger-outline`,
                className: `w-fit`,
                disabled: s,
                loading: h,
                onClick: () => {
                    s || y()
                },
                "aria-label": t.formatMessage(en.disconnectAriaLabel),
                children: (0, Z.jsx)(R, {
                    ...en.disconnect
                })
            }), E && A && (0, Z.jsx)(Rt, {
                connectorId: x,
                isSettingsOpen: !1,
                onOpenSettings: () => {
                    u(null), o(!0)
                }
            })]
        })]
    }) : (0, Z.jsxs)(`div`, {
        className: `text-token-text-secondary flex flex-col gap-2 text-sm`,
        children: [(0, Z.jsx)(`p`, {
            className: `pb-2 text-xs`,
            children: (0, Z.jsx)(R, {
                ...en.gitlabConnectionDescription
            })
        }), (0, Z.jsx)(`div`, {
            className: `flex flex-row gap-2`,
            children: (0, Z.jsx)(k, {
                icon: Ze,
                color: `primary`,
                className: `w-fit`,
                disabled: !te,
                loading: h,
                onClick: _,
                children: (0, Z.jsx)(R, {
                    ...en.connectGitLab
                })
            })
        })]
    }), e[17] = A, e[18] = g, e[19] = x, e[20] = w, e[21] = y, e[22] = te, e[23] = t, e[24] = h, e[25] = m, e[26] = s, e[27] = b, e[28] = _, e[29] = v, e[30] = E, e[31] = N) : N = e[31];
    let P;
    e[32] !== A || e[33] !== x || e[34] !== m || e[35] !== E ? (P = E && m && !A && (0, Z.jsx)(Rt, {
        connectorId: x,
        isSettingsOpen: !1
    }), e[32] = A, e[33] = x, e[34] = m, e[35] = E, e[36] = P) : P = e[36];
    let F;
    e[37] === Symbol.for(`react.memo_cache_sentinel`) ? (F = (0, Z.jsx)(`a`, {
        href: `https://learn.chatgpt.com/docs/third-party/gitlab`,
        target: `_blank`,
        rel: `noreferrer`,
        className: `text-token-text-accent hover:text-token-text-accent/80 w-fit text-xs font-medium underline`,
        children: (0, Z.jsx)(R, {
            ...en.gitlabLearnMore
        })
    }), e[37] = F) : F = e[37];
    let ne;
    e[38] !== A || e[39] !== x || e[40] !== t || e[41] !== m || e[42] !== s || e[43] !== a || e[44] !== l || e[45] !== E ? (ne = E && A && m && a && (0, Z.jsx)(D, {
        testId: `modal-gitlab-service-account-settings`,
        isOpen: !0,
        headerClassName: `p-6 ps-6 pb-3`,
        contentClassName: `p-6 pt-3`,
        onClose: () => {
            s || o(!1)
        },
        showCloseButton: !s,
        title: l ?? t.formatMessage(en.settingsModalTitle),
        children: (0, Z.jsx)(Rt, {
            connectorId: x,
            onBusyChange: c,
            onTitleChange: u
        })
    }), e[38] = A, e[39] = x, e[40] = t, e[41] = m, e[42] = s, e[43] = a, e[44] = l, e[45] = E, e[46] = ne) : ne = e[46];
    let re;
    return e[47] !== M || e[48] !== N || e[49] !== P || e[50] !== ne ? (re = (0, Z.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [j, M, N, P, F, ne]
    }), e[47] = M, e[48] = N, e[49] = P, e[50] = ne, e[51] = re) : re = e[51], re
}

function Xt(e) {
    return (0, Z.jsx)(`b`, {
        children: e
    })
}

function Zt(e) {
    return (0, Z.jsx)(`option`, {
        value: e.id,
        children: e.name
    }, e.id)
}
var Qt, $t, Z, en, tn = e((() => {
    Qt = me(), r(), Ge(), j(), c(), x(), P(), at(), qt(), lt(), $t = t(le()), z(), Z = L(), en = ae({
        gitlabConnectorTitle: {
            id: `wham.gitlabConnectionsRow.gitlabConnector.beta`,
            defaultMessage: `GitLab (Beta)`
        },
        gitlabLearnMore: {
            id: `wham.gitlabConnectionsRow.gitlabLearnMore`,
            defaultMessage: `Learn more`
        },
        connectorSelectorLabel: {
            id: `wham.gitlabConnectionsRow.connectorSelectorLabel`,
            defaultMessage: `GitLab connector`
        },
        retryTooltip: {
            id: `wham.gitlabConnectionsRow.retryTooltip`,
            defaultMessage: `Click to retry`
        },
        retryGitLab: {
            id: `wham.gitlabConnectionsRow.retry`,
            defaultMessage: `Failed to load GitLab connection`
        },
        connected: {
            id: `wham.gitlabConnectionsRow.title`,
            defaultMessage: `Connected to <b>{gitlabLogin}</b>`
        },
        disconnect: {
            id: `wham.gitlabConnectionRow.disconnect`,
            defaultMessage: `Disconnect`
        },
        disconnectAriaLabel: {
            id: `wham.gitlabConnectionRow.disconnectAriaLabel`,
            defaultMessage: `Button to disconnect GitLab connection`
        },
        settingsModalTitle: {
            id: `wham.gitlabConnectionRow.settingsModalTitle`,
            defaultMessage: `GitLab service account`
        },
        gitlabConnectionDescription: {
            id: `wham.gitlabConnectionsRow.gitlabConnection`,
            defaultMessage: `Connect to your GitLab projects to use in Codex`
        },
        connectGitLab: {
            id: `wham.codexOnboardingConnections.connectGitLab.beta`,
            defaultMessage: `Connect to GitLab (Beta)`
        },
        defaultAccountName: {
            id: `wham.gitlabConnectionsRow.defaultAccountName`,
            defaultMessage: `GitLab account`
        }
    })
}));

function nn({
    refetchConnectorData: e
}) {
    return (0, Q.jsx)(O, {
        label: he().formatMessage(cn.retryTooltip),
        children: (0, Q.jsx)(k, {
            color: `secondary`,
            size: `small`,
            type: `button`,
            className: `border-token-border-default flex w-fit items-center gap-1.5 rounded-full! border`,
            onClick: e,
            children: (0, Q.jsxs)(`div`, {
                className: `flex items-center gap-1.5`,
                children: [(0, Q.jsx)(Ke, {
                    "aria-hidden": !0,
                    className: `icon-sm`
                }), (0, Q.jsx)(R, {
                    ...cn.retryLinear
                })]
            })
        })
    })
}

function rn() {
    let e = he(),
        t = C(),
        n = Se(),
        r = (0, an.useCallback)(() => {
            y({
                redirectUri: l(f),
                connectorPlatformParams: {
                    connectorId: f,
                    name: `Linear`,
                    actionNames: o,
                    oauthClientId: p,
                    oauthClientScopes: a
                },
                redirectTo: `/codex/cloud/settings/connectors`,
                intl: e,
                toaster: t,
                productSku: Te.CODEX,
                openPopup: n
            })
        }, [e, t, n]),
        {
            isConnected: i,
            isLoading: s,
            error: c,
            openConnectorModal: u,
            refetch: d,
            platformConnector: m
        } = _e(E.LINEAR_CODEX_BOT_CONNECTOR, `linear`, `/codex/cloud/settings/connectors`, Te.CODEX, r, r),
        h = m?.status === `DISABLED_BY_ADMIN` ? (0, Q.jsx)(`div`, {
            className: `text-token-text-primary text-sm font-medium`,
            children: (0, Q.jsx)(R, {
                ...cn.linearDisabledByAdmin,
                values: {
                    a: e => (0, Q.jsx)(`a`, {
                        href: sn,
                        target: `_blank`,
                        rel: `noreferrer`,
                        className: `text-token-text-accent hover:text-token-text-accent/80 font-medium underline`,
                        children: e
                    })
                }
            })
        }) : (0, Q.jsx)(k, {
            icon: Ke,
            color: `primary`,
            className: `w-fit`,
            loading: s,
            onClick: u,
            children: (0, Q.jsx)(R, {
                ...i ? cn.connectLinearMore : cn.connectLinear
            })
        });
    return (0, Q.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [(0, Q.jsx)(`p`, {
            className: `text-token-text-primary text-md font-medium`,
            children: (0, Q.jsx)(R, {
                ...cn.linearConnectorTitle
            })
        }), (0, Q.jsx)(`p`, {
            className: `text-token-text-secondary text-xs`,
            children: (0, Q.jsx)(R, {
                ...cn.linearConnectorDescription,
                values: {
                    a: e => (0, Q.jsx)(`a`, {
                        href: on,
                        target: `_blank`,
                        rel: `noreferrer`,
                        className: `text-token-text-accent hover:text-token-text-accent/80 font-medium underline`,
                        children: e
                    })
                }
            })
        }), c ? (0, Q.jsx)(nn, {
            refetchConnectorData: d
        }) : s ? (0, Q.jsx)(`div`, {
            className: `flex w-full items-center justify-center gap-2`,
            children: (0, Q.jsx)(ee, {
                className: `h-6 w-6`
            })
        }) : m ? (0, Q.jsx)(`div`, {
            className: `flex flex-col gap-3`,
            children: (0, Q.jsx)(`div`, {
                className: `flex flex-row flex-wrap gap-2 text-sm`,
                children: h
            })
        }) : (0, Q.jsx)(`div`, {
            className: `text-token-text-primary text-sm font-medium`,
            children: (0, Q.jsx)(R, {
                ...cn.linearUnavailable,
                values: {
                    a: e => (0, Q.jsx)(`a`, {
                        href: on,
                        target: `_blank`,
                        rel: `noreferrer`,
                        className: `text-token-text-accent hover:text-token-text-accent/80 font-medium underline`,
                        children: e
                    })
                }
            })
        })]
    })
}
var an, Q, on, sn, cn, ln = e((() => {
    F(), an = t(le()), z(), r(), Je(), c(), S(), V(), U(), H(), x(), M(), Q = L(), on = `https://developers.openai.com/codex/integrations/linear`, sn = `https://www.chatgpt.com/admin/apps`, cn = ae({
        linearConnectorTitle: {
            id: `wham.linearConnectionsRow.linearConnector`,
            defaultMessage: `Linear`
        },
        linearConnectorDescription: {
            id: `wham.linearConnectionsRow.linearConnection`,
            defaultMessage: `To assign issues to Codex or @mention it in comment threads, install Codex in Linear then link your account. <a>Learn more</a>`
        },
        connectLinear: {
            id: `wham.linearConnectionsRow.connectLinear`,
            defaultMessage: `Install Codex in Linear`
        },
        connectLinearMore: {
            id: `wham.linearConnectionsRow.connectMore`,
            defaultMessage: `Manage Codex in Linear`
        },
        linearDisabledByAdmin: {
            id: `wham.linearConnectionsRow.disabledByAdmin`,
            defaultMessage: `Linear is disabled for your workspace. Ask your workspace administrator to enable it in <a>Admin settings</a> or update your custom role to allow access.`
        },
        retryLinear: {
            id: `wham.linearConnectionsRow.retry`,
            defaultMessage: `Failed to load Linear connection`
        },
        retryTooltip: {
            id: `wham.linearConnectionsRow.retryTooltip`,
            defaultMessage: `Click to retry`
        },
        linearUnavailable: {
            id: `wham.linearConnectionsRow.unavailable`,
            defaultMessage: `This feature is not available in your our plan type / region. <a>Learn more</a>`
        }
    })
}));

function un({
    refetchConnectorData: e
}) {
    return (0, $.jsx)(O, {
        label: he().formatMessage(mn.retryTooltip),
        children: (0, $.jsx)(k, {
            color: `secondary`,
            size: `small`,
            type: `button`,
            className: `border-token-border-default flex w-fit items-center gap-1.5 rounded-full! border`,
            onClick: e,
            children: (0, $.jsxs)(`div`, {
                className: `flex items-center gap-1.5`,
                children: [(0, $.jsx)(Xe, {
                    "aria-hidden": !0,
                    className: `icon-sm`
                }), (0, $.jsx)(R, {
                    ...mn.retrySlack
                })]
            })
        })
    })
}

function dn() {
    let e = he(),
        t = C(),
        r = Se(),
        i = be(),
        a = (0, fn.useCallback)(() => {
            y({
                redirectUri: l(g),
                connectorPlatformParams: {
                    connectorId: g,
                    name: `Slack`,
                    actionNames: m,
                    oauthClientId: u,
                    oauthClientScopes: n,
                    slackTeamId: i ?? void 0
                },
                redirectTo: `/codex/cloud/settings/connectors`,
                intl: e,
                toaster: t,
                productSku: Te.CODEX,
                openPopup: r
            })
        }, [e, t, r, i]),
        {
            isConnected: o,
            isLoading: s,
            error: c,
            openConnectorModal: d,
            refetch: f,
            handleDisconnect: p,
            links: h,
            platformConnector: _
        } = _e(E.SLACK_CODEX_CONNECTOR, `slack`, `/codex/cloud/settings/connectors`, Te.CODEX, a, a),
        v = _?.status === `DISABLED_BY_ADMIN`,
        b = t => t?.owner_profile?.nickname ?? t?.owner_profile?.name ?? t?.name ?? e.formatMessage(mn.defaultWorkspaceName),
        x = v ? (0, $.jsx)(`div`, {
            className: `text-token-text-primary text-sm font-medium`,
            children: (0, $.jsx)(R, {
                ...mn.slackDisabledByAdmin,
                values: {
                    a: e => (0, $.jsx)(`a`, {
                        href: pn,
                        target: `_blank`,
                        rel: `noreferrer`,
                        className: `text-token-text-accent hover:text-token-text-accent/80 font-medium underline`,
                        children: e
                    })
                }
            })
        }) : (0, $.jsx)(k, {
            icon: Xe,
            color: `primary`,
            className: `w-fit`,
            loading: s,
            onClick: d,
            children: (0, $.jsx)(R, {
                ...o ? mn.connectSlackMore : mn.connectSlack
            })
        });
    return (0, $.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [(0, $.jsx)(`p`, {
            className: `text-token-text-primary text-md font-medium`,
            children: (0, $.jsx)(R, {
                ...mn.slackConnectorTitle
            })
        }), (0, $.jsx)(`p`, {
            className: `text-token-text-secondary text-xs`,
            children: (0, $.jsx)(R, {
                ...mn.slackConnectorDescription,
                values: {
                    a: e => (0, $.jsx)(`a`, {
                        href: `https://developers.openai.com/codex/integrations/slack`,
                        target: `_blank`,
                        rel: `noreferrer`,
                        className: `text-token-text-accent hover:text-token-text-accent/80 font-medium underline`,
                        children: e
                    })
                }
            })
        }), c ? (0, $.jsx)(un, {
            refetchConnectorData: f
        }) : s ? (0, $.jsx)(`div`, {
            className: `flex w-full items-center justify-center gap-2`,
            children: (0, $.jsx)(ee, {
                className: `h-6 w-6`
            })
        }) : o ? (0, $.jsxs)(`div`, {
            className: `flex flex-col gap-3`,
            children: [(0, $.jsx)(`div`, {
                className: `flex flex-row flex-wrap gap-2`,
                children: x
            }), (0, $.jsx)(`div`, {
                className: `flex flex-col gap-2`,
                children: h.map(e => (0, $.jsxs)(`div`, {
                    className: `border-token-border-default flex flex-wrap items-center justify-between gap-3 rounded-md border px-3 py-2`,
                    children: [(0, $.jsx)(`span`, {
                        className: `text-token-text-primary text-sm font-medium`,
                        children: b(e)
                    }), (0, $.jsx)(k, {
                        color: `danger-outline`,
                        className: `w-fit`,
                        loading: s,
                        onClick: () => p(e.id),
                        children: (0, $.jsx)(R, {
                            ...mn.disconnectSlack
                        })
                    })]
                }, e.id))
            })]
        }) : (0, $.jsx)(`div`, {
            className: `text-token-text-secondary flex flex-col gap-3 text-sm`,
            children: x
        })]
    })
}
var fn, $, pn, mn, hn = e((() => {
    F(), Ne(), r(), K(), c(), S(), V(), U(), H(), x(), M(), fn = t(le()), z(), $ = L(), pn = `https://www.chatgpt.com/admin/apps`, mn = ae({
        slackConnectorTitle: {
            id: `wham.slackConnectionsRow.slackConnector`,
            defaultMessage: `Slack`
        },
        slackConnectorDescription: {
            id: `wham.slackConnectionsRow.slackConnection`,
            defaultMessage: `Connect to Slack so you can ask @codex to answer questions or draft PRs right from Slack. <a>Learn more</a>`
        },
        connectSlack: {
            id: `wham.slackConnectionsRow.connectSlack`,
            defaultMessage: `Connect to Slack`
        },
        connectSlackMore: {
            id: `wham.slackConnectionsRow.connectMore`,
            defaultMessage: `Connect more`
        },
        slackDisabledByAdmin: {
            id: `wham.slackConnectionsRow.disabledByAdmin`,
            defaultMessage: `Slack is disabled for your workspace. Ask your workspace administrator to enable it in <a>Admin settings</a> or update your custom role to allow access.`
        },
        disconnectSlack: {
            id: `wham.slackConnectionsRow.disconnect`,
            defaultMessage: `Disconnect`
        },
        retrySlack: {
            id: `wham.slackConnectionsRow.retry`,
            defaultMessage: `Failed to load Slack connection`
        },
        retryTooltip: {
            id: `wham.slackConnectionsRow.retryTooltip`,
            defaultMessage: `Click to retry`
        },
        defaultWorkspaceName: {
            id: `wham.slackConnectionsRow.defaultWorkspaceName`,
            defaultMessage: `Slack workspace`
        }
    })
}));

function gn() {
    "use forget";
    let e = (0, _n.c)(5),
        t;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = N(`1437685011`), e[0] = t) : t = e[0];
    let n = t,
        r, i;
    e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, vn.jsx)(`div`, {
        className: `flex pt-4`,
        children: (0, vn.jsx)(gt, {})
    }), i = n && (0, vn.jsx)(`div`, {
        className: `flex pt-4`,
        children: (0, vn.jsx)(Yt, {})
    }), e[1] = r, e[2] = i) : (r = e[1], i = e[2]);
    let a;
    e[3] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, vn.jsx)(`div`, {
        className: `flex pt-4`,
        children: (0, vn.jsx)(dn, {})
    }), e[3] = a) : a = e[3];
    let o;
    return e[4] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, vn.jsxs)(vn.Fragment, {
        children: [r, i, a, (0, vn.jsx)(`div`, {
            className: `flex pt-4`,
            children: (0, vn.jsx)(rn, {})
        })]
    }), e[4] = o) : o = e[4], o
}
var _n, vn, yn = e((() => {
    _n = me(), xt(), tn(), ln(), hn(), re(), vn = L()
}));

function bn() {
    return (0, Cn.jsx)(`div`, {
        className: `border-token-border-heavy flex items-center border-b`,
        children: (0, Cn.jsx)(`div`, {
            className: `py-2 text-xl leading-7 font-medium`,
            children: (0, Cn.jsx)(R, {
                id: `wham.connectorControlsHeader.title`,
                defaultMessage: `Connectors`
            })
        })
    })
}

function xn() {
    let [e] = ie(), t = ue(), n = ce(), r = (0, Sn.useMemo)(() => e.get(wn), [e]), i = (0, Sn.useMemo)(() => e.get(Ae), [e]);
    return (0, Sn.useEffect)(() => {
        if (!r && !i) return;
        let e = new URLSearchParams;
        e.set(De, `true`), e.set(Pe, g), e.set(ye, Te.CODEX), e.set(Fe, `/codex/cloud/settings/connectors`), r && e.set(ge, r), i && e.set(Ae, i), e.set(we, xe.Codex), n({
            pathname: t.pathname,
            hash: `${ke}?${e.toString()}`,
            search: ``
        }, {
            replace: !0
        })
    }, [t.pathname, n, i, r]), (0, Cn.jsx)(ht, {
        header: (0, Cn.jsx)(bn, {}),
        connectionAlert: (0, Cn.jsx)(nt, {}),
        children: (0, Cn.jsx)(gn, {})
    })
}
var Sn, Cn, wn, Tn = e((() => {
        Sn = t(le()), z(), I(), W(), S(), H(), tt(), yn(), mt(), Cn = L(), wn = ge
    })),
    En, Dn, On, kn, An = e((() => {
        I(), En = me(), Tn(), Dn = L(), On = () => [{
            title: `Codex`
        }], kn = B(function() {
            "use forget";
            let e = (0, En.c)(1),
                t;
            return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Dn.jsx)(xn, {}), e[0] = t) : t = e[0], t
        })
    }));
e((() => {
    An()
}))();
export {
    kn as
    default, On as meta
};
//# sourceMappingURL=codex.cloud.settings.connectors-hh0ownj2.js.map
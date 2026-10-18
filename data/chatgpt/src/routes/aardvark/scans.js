import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as n,
    B6 as r,
    Btt as i,
    Ch as a,
    Htt as o,
    Jc as s,
    Qit as c,
    Rb as l,
    Sh as u,
    Yc as d,
    b5 as f,
    cot as p,
    dz as m,
    fz as h,
    hU as ee,
    hh as g,
    i5 as _,
    iat as v,
    ist as y,
    kT as b,
    lot as x,
    mU as S,
    mh as C,
    mz as w,
    o1 as te,
    pU as T,
    pz as ne,
    u1 as E,
    wst as D,
    y5 as O,
    zb as k
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as A,
    Bn as j,
    Nn as M,
    O as N,
    Rn as P,
    Ut as re,
    Vn as F,
    jt as I,
    l as ie,
    lt as ae,
    s as L,
    wn as oe,
    zn as R
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    BQ as se,
    Bst as z,
    Gwn as B,
    NQ as V,
    PQ as ce,
    Pln as le,
    Wwn as ue,
    bBt as de,
    cun as fe,
    yBt as pe,
    zst as me
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    FS as H,
    IS as he
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    Xv as U,
    Zv as ge
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    d_ as _e,
    f_ as ve
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    n as ye,
    t as be
} from "./673c0d9b-mgw9cf750vpkh02r.js";
import {
    d as xe,
    o as Se,
    r as Ce,
    u as we
} from "./e9df0b0e-d1weo5rhf9ifr6qg.js";
import {
    n as Te,
    t as Ee
} from "./45dc6298-oy58y4qax8jw299y.js";
import {
    a as De,
    l as Oe
} from "./5b59f3e4-f9v1k69a0tdaqzc0.js";
import {
    d as W,
    t as ke
} from "./4e7cf3cf-bytq9jsazycjc5xj.js";
import {
    n as Ae,
    t as je
} from "./d8ff9f68-cug2a8v0cvbaskq3.js";
import {
    n as Me,
    t as Ne
} from "./6ab34ef3-bk9py1koawgm2ukb.js";
import {
    n as Pe,
    t as Fe
} from "./28ea772c-do7622k8o3yoq9ds.js";

function Ie(e) {
    "use forget";
    let t = (0, Ue.c)(54),
        {
            scanConfigurations: n,
            intl: r,
            currentUserId: i
        } = e,
        [a, o] = (0, G.useState)(1),
        [s, c] = (0, G.useState)(``),
        {
            hasAdminAccess: l
        } = ye(),
        u;
    if (t[0] !== n || t[1] !== s) {
        let e = s.trim().toLowerCase();
        u = de(n.filter(t => {
            let n = t.repo_url.replace(`https://github.com/`, ``),
                r = n.split(`/`),
                i = r.pop() ?? n,
                a = r[0] ?? ``;
            return !e || i.toLowerCase().includes(e) || a.toLowerCase().includes(e)
        }), [He, Ve, Be], [`asc`, `asc`, `asc`]), t[0] = n, t[1] = s, t[2] = u
    } else u = t[2];
    let d = u,
        f = Math.max(1, Math.ceil(d.length / 10)),
        p = Math.min(a, f),
        m = (p - 1) * 10,
        h = Math.min(m + 10, d.length),
        ee = d.slice(m, h),
        _;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = () => {
        o(1)
    }, t[3] = _) : _ = t[3];
    let v;
    t[4] !== n.length || t[5] !== s ? (v = [n.length, s], t[4] = n.length, t[5] = s, t[6] = v) : v = t[6], (0, G.useEffect)(_, v);
    let y;
    t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (y = e => c(e.target.value), t[7] = y) : y = t[7];
    let x;
    t[8] === r ? x = t[9] : (x = r.formatMessage({
        id: `aardvark.whamRepos.searchPlaceholder`,
        defaultMessage: `Search repositories`
    }), t[8] = r, t[9] = x);
    let S;
    t[10] === r ? S = t[11] : (S = r.formatMessage({
        id: `aardvark.whamRepos.searchAria`,
        defaultMessage: `Search repositories`
    }), t[10] = r, t[11] = S);
    let C;
    t[12] !== s || t[13] !== x || t[14] !== S ? (C = (0, K.jsx)(`div`, {
        className: `mb-3 flex justify-end`,
        children: (0, K.jsx)(`div`, {
            className: `w-64`,
            children: (0, K.jsx)(me, {
                color: `search`,
                iconPosition: `left`,
                icon: g,
                className: `text-token-text-tertiary flex h-9 w-full items-center rounded-md!`,
                inputClassName: `text-token-text-primary w-full`,
                containerInputClassName: `w-full`,
                name: `search-configured-repos`,
                type: `text`,
                value: s,
                onChange: y,
                placeholder: x,
                ariaLabel: S
            })
        })
    }), t[12] = s, t[13] = x, t[14] = S, t[15] = C) : C = t[15];
    let w = U,
        te;
    t[16] === Symbol.for(`react.memo_cache_sentinel`) ? (te = (0, K.jsx)(U.HeaderCell, {
        className: `ps-2 text-sm`,
        children: (0, K.jsx)(M, {
            id: `aardvark.whamRepos.organizationHeader`,
            defaultMessage: `Organization`
        })
    }), t[16] = te) : te = t[16];
    let T;
    t[17] === Symbol.for(`react.memo_cache_sentinel`) ? (T = (0, K.jsx)(U.HeaderCell, {
        className: `ps-2 text-sm`,
        children: (0, K.jsx)(M, {
            id: `aardvark.whamRepos.repository`,
            defaultMessage: `Repository`
        })
    }), t[17] = T) : T = t[17];
    let E;
    t[18] === Symbol.for(`react.memo_cache_sentinel`) ? (E = (0, K.jsx)(U.HeaderCell, {
        className: `ps-2 text-sm`,
        children: (0, K.jsx)(M, {
            id: `aardvark.whamRepos.scanning`,
            defaultMessage: `Scanning`
        })
    }), t[18] = E) : E = t[18];
    let D;
    t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (D = (0, K.jsx)(U.HeaderCell, {
        className: `ps-2 text-sm`,
        children: (0, K.jsx)(M, {
            id: `aardvark.whamRepos.ownerHeader`,
            defaultMessage: `Owner`
        })
    }), t[19] = D) : D = t[19];
    let O;
    t[20] === Symbol.for(`react.memo_cache_sentinel`) ? (O = (0, K.jsxs)(U.Header, {
        children: [te, T, E, D, (0, K.jsx)(U.HeaderCell, {
            className: `ps-2 text-sm`,
            children: (0, K.jsx)(M, {
                id: `aardvark.whamRepos.settingsHeader`,
                defaultMessage: `Settings`
            })
        })]
    }), t[20] = O) : O = t[20];
    let k = U,
        A;
    t[21] !== i || t[22] !== l || t[23] !== r ? (A = e => {
        let t = e.repo_url.replace(`https://github.com/`, ``),
            n = t,
            a = t.split(`/`).pop() ?? t,
            o = t.split(`/`)[0] ?? t,
            s = e.owner_email ?? r.formatMessage({
                id: `aardvark.placeholder.missing`,
                defaultMessage: `—`
            }),
            c = e.state === `enabled`,
            u = e.repo_id,
            d = e.owner_id === i,
            f = l || !e.owner_id || d || e.can_write;
        return (0, K.jsxs)(U.Row, {
            className: `h-14 px-2 text-sm`,
            children: [(0, K.jsx)(U.Cell, {
                divClassName: `flex h-14 items-center ps-2`,
                children: o
            }), (0, K.jsxs)(U.Cell, {
                divClassName: `flex h-14 items-center ps-2`,
                children: [(0, K.jsx)(`button`, {
                    className: `text-start underline-offset-2 hover:underline`,
                    onClick: () => window.open(e.repo_url, `_blank`),
                    children: a
                }), (0, K.jsx)(`a`, {
                    href: e.repo_url,
                    target: `_blank`,
                    rel: `noopener noreferrer`,
                    className: `ms-2`,
                    onClick: ze,
                    children: (0, K.jsx)(ne.ArrowTopRightSm, {
                        className: `icon-sm`
                    })
                })]
            }), (0, K.jsx)(U.Cell, {
                divClassName: `flex h-14 items-center ps-2`,
                children: (0, K.jsx)(`span`, {
                    className: `rounded-md px-2 py-0.5 text-xs ${c?`bg-green-500/10 text-green-600`:`bg-token-text-status-error/15 text-token-text-status-error`}`,
                    children: c ? (0, K.jsx)(M, {
                        id: `aardvark.repos.status.enabled`,
                        defaultMessage: `Enabled`
                    }) : (0, K.jsx)(M, {
                        id: `aardvark.repos.status.disabled`,
                        defaultMessage: `Disabled`
                    })
                })
            }), (0, K.jsx)(U.Cell, {
                divClassName: `flex h-14 items-center ps-2`,
                children: s
            }), (0, K.jsx)(U.Cell, {
                divClassName: `flex h-14 items-center ps-2`,
                children: (0, K.jsx)(Fe, {
                    repoId: u,
                    repoFullName: n,
                    canEdit: f
                })
            })]
        }, `other-${u}`)
    }, t[21] = i, t[22] = l, t[23] = r, t[24] = A) : A = t[24];
    let j = ee.map(A),
        N;
    t[25] !== k.Body || t[26] !== j ? (N = (0, K.jsx)(k.Body, {
        children: j
    }), t[25] = k.Body, t[26] = j, t[27] = N) : N = t[27];
    let P;
    t[28] !== O || t[29] !== N || t[30] !== w.Root ? (P = (0, K.jsxs)(w.Root, {
        className: `overflow-x-auto overflow-y-clip`,
        disableScroll: !0,
        children: [O, N]
    }), t[28] = O, t[29] = N, t[30] = w.Root, t[31] = P) : P = t[31];
    let re = d.length === 0 ? 0 : m + 1,
        F;
    t[32] !== h || t[33] !== d.length || t[34] !== re ? (F = (0, K.jsx)(`div`, {
        className: `text-token-text-tertiary text-xs`,
        children: (0, K.jsx)(M, {
            id: `aardvark.whamRepos.configuredRange`,
            defaultMessage: `{from}-{to} of {total} repositories`,
            values: {
                from: re,
                to: h,
                total: d.length
            }
        })
    }), t[32] = h, t[33] = d.length, t[34] = re, t[35] = F) : F = t[35];
    let I = p <= 1,
        ie, ae;
    t[36] === Symbol.for(`react.memo_cache_sentinel`) ? (ie = () => o(Re), ae = (0, K.jsx)(M, {
        id: `aardvark.pagination.prev`,
        defaultMessage: `Previous`
    }), t[36] = ie, t[37] = ae) : (ie = t[36], ae = t[37]);
    let L;
    t[38] === I ? L = t[39] : (L = (0, K.jsx)(b, {
        as: `button`,
        size: `small`,
        color: `secondary`,
        disabled: I,
        onClick: ie,
        children: ae
    }), t[38] = I, t[39] = L);
    let oe = p >= f,
        R, se;
    t[40] === Symbol.for(`react.memo_cache_sentinel`) ? (R = () => o(Le), se = (0, K.jsx)(M, {
        id: `aardvark.pagination.next`,
        defaultMessage: `Next`
    }), t[40] = R, t[41] = se) : (R = t[40], se = t[41]);
    let z;
    t[42] === oe ? z = t[43] : (z = (0, K.jsx)(b, {
        as: `button`,
        size: `small`,
        color: `secondary`,
        disabled: oe,
        onClick: R,
        children: se
    }), t[42] = oe, t[43] = z);
    let B;
    t[44] !== L || t[45] !== z ? (B = (0, K.jsxs)(`div`, {
        className: `flex items-center gap-2`,
        children: [L, z]
    }), t[44] = L, t[45] = z, t[46] = B) : B = t[46];
    let V;
    t[47] !== F || t[48] !== B ? (V = (0, K.jsxs)(`div`, {
        className: `border-token-border-light bg-token-bg-primary mt-2 flex items-center justify-between border-t px-3 py-2`,
        children: [F, B]
    }), t[47] = F, t[48] = B, t[49] = V) : V = t[49];
    let ce;
    return t[50] !== P || t[51] !== V || t[52] !== C ? (ce = (0, K.jsxs)(K.Fragment, {
        children: [C, P, V]
    }), t[50] = P, t[51] = V, t[52] = C, t[53] = ce) : ce = t[53], ce
}

function Le(e) {
    return e + 1
}

function Re(e) {
    return Math.max(1, e - 1)
}

function ze(e) {
    return e.stopPropagation()
}

function Be(e) {
    let t = e.repo_url.replace(`https://github.com/`, ``);
    return (t.split(`/`).pop() ?? t).toLowerCase()
}

function Ve(e) {
    return (e.repo_url.replace(`https://github.com/`, ``).split(`/`)[0] ?? ``).toLowerCase()
}

function He(e) {
    return e.state === `enabled` ? 0 : 1
}
var Ue, G, K, We = e((() => {
    Ue = oe(), Pe(), be(), n(), C(), w(), ge(), z(), pe(), G = t(F()), P(), K = j()
}));

function Ge() {
    let e = R();
    return (0, q.jsxs)(`div`, {
        className: `mt-5`,
        children: [(0, q.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [(0, q.jsx)(`h2`, {
                id: `configured-repos`,
                className: `text-token-text-primary text-lg leading-6 font-semibold`,
                children: (0, q.jsx)(M, {
                    id: `aardvark.whamRepos.configuredSectionTitle`,
                    defaultMessage: `All configured repositories`
                })
            }), (0, q.jsx)(`a`, {
                href: `#configured-repos`,
                className: `text-token-text-tertiary opacity-60 hover:opacity-100`,
                "aria-label": e.formatMessage({
                    id: `aardvark.whamRepos.configuredLinkAria`,
                    defaultMessage: `Deep link to configured repositories`
                }),
                children: (0, q.jsx)(he, {
                    className: `icon-sm`
                })
            })]
        }), (0, q.jsx)(`p`, {
            className: `text-token-text-secondary mt-2 mb-6 text-sm leading-6`,
            children: (0, q.jsx)(M, {
                id: `aardvark.whamRepos.configuredSectionDescription`,
                defaultMessage: `This is the full list of repositories in the workspace with scan configurations, created by you or other workspace members. You may not see findings for repos you haven’t connected.`
            })
        })]
    })
}
var q, Ke = e((() => {
    H(), P(), q = j()
}));

function qe({
    scanConfigurations: e,
    isLoading: t = !1,
    errorMessage: n,
    currentUserId: r
}) {
    let i = R();
    return (0, J.jsxs)(J.Fragment, {
        children: [(0, J.jsx)(Ge, {}), (0, J.jsx)(Je, {
            scanConfigurations: e,
            isLoading: t,
            errorMessage: n,
            intl: i,
            currentUserId: r
        })]
    })
}

function Je({
    scanConfigurations: e,
    isLoading: t,
    errorMessage: n,
    intl: r,
    currentUserId: i
}) {
    return n ? (0, J.jsx)(`div`, {
        className: `flex justify-center`,
        children: (0, J.jsx)(`div`, {
            className: `border-token-border-light bg-token-main-surface-secondary/50 inline-flex items-center gap-2 rounded-lg border px-3 py-2.5 text-sm shadow-sm`,
            children: (0, J.jsx)(`div`, {
                className: `text-token-text-secondary leading-6`,
                children: n
            })
        })
    }) : t ? (0, J.jsx)(`div`, {
        className: `flex h-24 items-center justify-center`,
        children: (0, J.jsx)(m, {
            className: `text-token-text-tertiary h-6 w-6`
        })
    }) : e.length === 0 ? (0, J.jsx)(`div`, {
        className: `flex justify-center`,
        children: (0, J.jsx)(`div`, {
            className: `border-token-border-light bg-token-main-surface-secondary/50 inline-flex items-center gap-2 rounded-lg border px-3 py-2.5 text-sm shadow-sm`,
            children: (0, J.jsx)(`div`, {
                className: `text-token-text-secondary leading-6`,
                children: (0, J.jsx)(M, {
                    id: `aardvark.whamRepos.configuredEmpty`,
                    defaultMessage: `No configured repositories yet.`
                })
            })
        })
    }) : (0, J.jsx)(Ie, {
        scanConfigurations: e,
        intl: r,
        currentUserId: i
    })
}
var J, Ye = e((() => {
    We(), Ke(), h(), P(), J = j()
}));

function Xe({
    className: e
}) {
    return (0, Ze.jsxs)(`div`, {
        className: O(`border-token-border-light/70 bg-token-main-surface-secondary/50 inline-flex items-center gap-2 rounded-lg border px-3 py-2.5 shadow-sm`, e),
        role: `note`,
        children: [(0, Ze.jsx)(u, {
            className: `icon-sm text-token-icon-tertiary min-w-[16px]`,
            "aria-hidden": !0
        }), (0, Ze.jsx)(`div`, {
            className: `text-token-text-secondary text-sm leading-6`,
            children: (0, Ze.jsx)(M, {
                id: `aardvark.home.configureScans.disclaimer`,
                defaultMessage: `Workspace visibility: Scan configurations are visible to all workspace members. However, findings are only visible to workspace members with access to the repository.`
            })
        })]
    })
}
var Ze, Qe = e((() => {
    a(), f(), P(), Ze = j()
}));

function $e(e) {
    "use forget";
    let t = (0, st.c)(134),
        {
            connectorLoading: n,
            scanMap: r,
            currentUserId: i,
            intl: a,
            isConnected: o
        } = e,
        c = ee(),
        {
            hasAdminAccess: u
        } = ye(),
        {
            data: d,
            isLoading: f,
            error: p
        } = fe(),
        m;
    t[0] === d?.memberships ? m = t[1] : (m = d?.memberships ?? [], t[0] = d?.memberships, t[1] = m);
    let h;
    t[2] === d?.other ? h = t[3] : (h = d?.other ?? [], t[2] = d?.other, t[3] = h);
    let _;
    t[4] !== m || t[5] !== h ? (_ = [...m, ...h], t[4] = m, t[5] = h, t[6] = _) : _ = t[6];
    let v = _,
        [y, x] = (0, Y.useState)(null),
        S, C;
    t[7] !== v || t[8] !== y ? (S = () => {
        if (v.length === 0) {
            x(null);
            return
        }(y == null || !v.some(e => e.id === y)) && x(v[0].id)
    }, C = [v, y], t[7] = v, t[8] = y, t[9] = S, t[10] = C) : (S = t[9], C = t[10]), (0, Y.useEffect)(S, C);
    let w;
    t[11] === y ? w = t[12] : (w = [`aardvark`, `wham`, `repositories`, y], t[11] = y, t[12] = w);
    let te = o && !!y,
        T;
    t[13] === y ? T = t[14] : (T = e => {
        let {
            pageParam: t
        } = e;
        return s.getRepositoriesByInstallationId(y ?? 0, t, ct)
    }, t[13] = y, t[14] = T);
    let E;
    t[15] !== w || t[16] !== te || t[17] !== T ? (E = {
        queryKey: w,
        enabled: te,
        initialPageParam: 1,
        queryFn: T,
        getNextPageParam: ot,
        refetchOnWindowFocus: !1
    }, t[15] = w, t[16] = te, t[17] = T, t[18] = E) : E = t[18];
    let {
        data: D,
        isLoading: O,
        fetchNextPage: k,
        hasNextPage: A,
        isFetchNextPageError: j,
        isFetchingNextPage: N,
        error: P
    } = ie(E), re;
    t[19] === D?.pages ? re = t[20] : (re = D?.pages.flatMap(at) ?? [], t[19] = D?.pages, t[20] = re);
    let F = re,
        [I, ae] = (0, Y.useState)(``),
        [L, oe] = (0, Y.useState)(!1),
        [R, se] = (0, Y.useState)(1),
        z;
    if (t[21] !== F || t[22] !== I) {
        let e;
        t[24] === I ? e = t[25] : (e = e => e.name.toLowerCase().includes(I.trim().toLowerCase()), t[24] = I, t[25] = e), z = F.filter(e), t[21] = F, t[22] = I, t[23] = z
    } else z = t[23];
    let B = z,
        V = D?.pages.length ?? 0,
        ce, le;
    t[26] !== k || t[27] !== A || t[28] !== o || t[29] !== j || t[30] !== N || t[31] !== V || t[32] !== y ? (ce = () => {
        !y || !o || V >= lt || !A || N || j || k()
    }, le = [y, o, V, A, j, N, k], t[26] = k, t[27] = A, t[28] = o, t[29] = j, t[30] = N, t[31] = V, t[32] = y, t[33] = ce, t[34] = le) : (ce = t[33], le = t[34]), (0, Y.useEffect)(ce, le);
    let ue;
    bb0: {
        if (!L) {
            ue = B;
            break bb0
        }
        let e;
        if (t[35] !== B || t[36] !== r) {
            let n;
            t[38] === r ? n = t[39] : (n = e => r.get(e.id)?.state === `enabled`, t[38] = r, t[39] = n), e = B.filter(n), t[35] = B, t[36] = r, t[37] = e
        } else e = t[37];ue = e
    }
    let de = ue,
        pe;
    if (t[40] !== de || t[41] !== r) {
        pe = [...de];
        let e;
        t[43] === r ? e = t[44] : (e = (e, t) => {
            let n = r.get(e.id)?.state === `enabled`;
            return n === (r.get(t.id)?.state === `enabled`) ? e.name.localeCompare(t.name) : n ? -1 : 1
        }, t[43] = r, t[44] = e), pe.sort(e), t[40] = de, t[41] = r, t[42] = pe
    } else pe = t[42];
    let H = pe,
        he = Math.max(1, Math.ceil(H.length / 10)),
        ge = Math.min(R, he),
        ve = (ge - 1) * 10,
        be = Math.min(ve + 10, H.length),
        xe = H.slice(ve, be),
        Se;
    t[45] === Symbol.for(`react.memo_cache_sentinel`) ? (Se = () => {
        se(1)
    }, t[45] = Se) : Se = t[45];
    let Ce;
    t[46] !== I || t[47] !== y || t[48] !== L ? (Ce = [I, y, L], t[46] = I, t[47] = y, t[48] = L, t[49] = Ce) : Ce = t[49], (0, Y.useEffect)(Se, Ce);
    let we, Te;
    t[50] !== p || t[51] !== a || t[52] !== c ? (we = () => {
        if (!p) return;
        let e = Ne(p),
            t = a.formatMessage(De.githubInstallationsLoad, {
                details: e
            });
        c.danger(t, {
            hasCloseButton: !0
        })
    }, Te = [p, a, c], t[50] = p, t[51] = a, t[52] = c, t[53] = we, t[54] = Te) : (we = t[53], Te = t[54]), (0, Y.useEffect)(we, Te);
    let Ee, Oe;
    t[55] !== a || t[56] !== P || t[57] !== c ? (Ee = () => {
        if (!P) return;
        let e = Ne(P),
            t = a.formatMessage(De.githubRepositoriesLoad, {
                details: e
            });
        c.danger(t, {
            hasCloseButton: !0
        })
    }, Oe = [a, P, c], t[55] = a, t[56] = P, t[57] = c, t[58] = Ee, t[59] = Oe) : (Ee = t[58], Oe = t[59]), (0, Y.useEffect)(Ee, Oe);
    let W = n || f || O,
        ke = v.length > 0,
        Ae;
    t[60] === ke ? Ae = t[61] : (Ae = ke ? (0, X.jsx)(Xe, {}) : null, t[60] = ke, t[61] = Ae);
    let je;
    t[62] === Symbol.for(`react.memo_cache_sentinel`) ? (je = (0, X.jsx)(`p`, {
        className: `text-token-text-primary text-sm leading-6 font-medium`,
        children: (0, X.jsx)(M, {
            id: `aardvark.whamRepos.githubOrg`,
            defaultMessage: `GitHub organization`
        })
    }), t[62] = je) : je = t[62];
    let Me;
    t[63] === y ? Me = t[64] : (Me = y?.toString() ?? ``, t[63] = y, t[64] = Me);
    let Pe;
    t[65] === Symbol.for(`react.memo_cache_sentinel`) ? (Pe = e => x(parseInt(e)), t[65] = Pe) : Pe = t[65];
    let Ie = !ke,
        Le;
    t[66] === a ? Le = t[67] : (Le = a.formatMessage({
        id: `aardvark.whamRepos.selectOrg`,
        defaultMessage: `Select organization`
    }), t[66] = a, t[67] = Le);
    let Re;
    t[68] === Le ? Re = t[69] : (Re = (0, X.jsx)(`div`, {
        className: `truncate`,
        children: (0, X.jsx)(_e.Value, {
            placeholder: Le
        })
    }), t[68] = Le, t[69] = Re);
    let ze;
    t[70] === Symbol.for(`react.memo_cache_sentinel`) ? (ze = (0, X.jsx)(_e.Icon, {}), t[70] = ze) : ze = t[70];
    let Be;
    t[71] === Re ? Be = t[72] : (Be = (0, X.jsx)(_e.Trigger, {
        className: `border-token-border-heavy bg-token-bg-primary w-60 rounded-md border`,
        children: (0, X.jsxs)(`div`, {
            className: `flex w-full items-center justify-between`,
            children: [Re, ze]
        })
    }), t[71] = Re, t[72] = Be);
    let Ve;
    t[73] === v ? Ve = t[74] : (Ve = (0, X.jsx)(_e.Portal, {
        children: (0, X.jsx)(_e.Content, {
            align: `start`,
            className: `rounded-lg`,
            children: v.map(it)
        })
    }), t[73] = v, t[74] = Ve);
    let He;
    t[75] !== Me || t[76] !== Ie || t[77] !== Be || t[78] !== Ve ? (He = (0, X.jsxs)(`div`, {
        className: `flex w-60 flex-col gap-2`,
        children: [je, (0, X.jsxs)(_e.Root, {
            value: Me,
            onValueChange: Pe,
            disabled: Ie,
            children: [Be, Ve]
        })]
    }), t[75] = Me, t[76] = Ie, t[77] = Be, t[78] = Ve, t[79] = He) : He = t[79];
    let Ue;
    t[80] === Symbol.for(`react.memo_cache_sentinel`) ? (Ue = e => ae(e.target.value), t[80] = Ue) : Ue = t[80];
    let G;
    t[81] === a ? G = t[82] : (G = a.formatMessage({
        id: `aardvark.whamRepos.searchPlaceholder`,
        defaultMessage: `Search repositories`
    }), t[81] = a, t[82] = G);
    let K;
    t[83] === a ? K = t[84] : (K = a.formatMessage({
        id: `aardvark.whamRepos.searchAria`,
        defaultMessage: `Search repositories`
    }), t[83] = a, t[84] = K);
    let We;
    t[85] !== I || t[86] !== G || t[87] !== K ? (We = (0, X.jsx)(`div`, {
        className: `flex-1`,
        children: (0, X.jsx)(me, {
            color: `search`,
            iconPosition: `left`,
            icon: g,
            className: `text-token-text-tertiary flex h-9 w-full items-center rounded-md!`,
            inputClassName: `text-token-text-primary w-full`,
            containerInputClassName: `w-full`,
            name: `search-repos`,
            type: `text`,
            value: I,
            onChange: Ue,
            placeholder: G,
            ariaLabel: K
        })
    }), t[85] = I, t[86] = G, t[87] = K, t[88] = We) : We = t[88];
    let Ge;
    t[89] === Symbol.for(`react.memo_cache_sentinel`) ? (Ge = e => oe(e), t[89] = Ge) : Ge = t[89];
    let q;
    t[90] === a ? q = t[91] : (q = a.formatMessage({
        id: `aardvark.whamRepos.toggleShowEnabled`,
        defaultMessage: `Enabled only`
    }), t[90] = a, t[91] = q);
    let Ke;
    t[92] !== L || t[93] !== q ? (Ke = (0, X.jsx)(l, {
        checked: L,
        onCheckedChange: Ge,
        "aria-label": q
    }), t[92] = L, t[93] = q, t[94] = Ke) : Ke = t[94];
    let qe;
    t[95] === Symbol.for(`react.memo_cache_sentinel`) ? (qe = (0, X.jsx)(`span`, {
        className: `text-xs`,
        children: (0, X.jsx)(M, {
            id: `aardvark.whamRepos.showEnabled`,
            defaultMessage: `Enabled only`
        })
    }), t[95] = qe) : qe = t[95];
    let Je;
    t[96] === Ke ? Je = t[97] : (Je = (0, X.jsxs)(`div`, {
        className: `flex h-9 items-center gap-2 self-end whitespace-nowrap`,
        children: [Ke, qe]
    }), t[96] = Ke, t[97] = Je);
    let J;
    t[98] !== He || t[99] !== We || t[100] !== Je ? (J = (0, X.jsxs)(`div`, {
        className: `flex flex-row items-end gap-2`,
        children: [He, We, Je]
    }), t[98] = He, t[99] = We, t[100] = Je, t[101] = J) : J = t[101];
    let Ye = U,
        Ze;
    t[102] === Symbol.for(`react.memo_cache_sentinel`) ? (Ze = (0, X.jsx)(U.HeaderCell, {
        className: `ps-2 text-sm`,
        children: (0, X.jsx)(M, {
            id: `aardvark.whamRepos.repository`,
            defaultMessage: `Repository`
        })
    }), t[102] = Ze) : Ze = t[102];
    let Qe;
    t[103] === Symbol.for(`react.memo_cache_sentinel`) ? (Qe = (0, X.jsx)(U.HeaderCell, {
        className: `ps-2 text-sm`,
        children: (0, X.jsx)(M, {
            id: `aardvark.whamRepos.scanning`,
            defaultMessage: `Scanning`
        })
    }), t[103] = Qe) : Qe = t[103];
    let $e;
    t[104] === Symbol.for(`react.memo_cache_sentinel`) ? ($e = (0, X.jsx)(U.HeaderCell, {
        className: `ps-2 text-sm`,
        children: (0, X.jsx)(M, {
            id: `aardvark.whamRepos.ownerHeader`,
            defaultMessage: `Owner`
        })
    }), t[104] = $e) : $e = t[104];
    let ut;
    t[105] === Symbol.for(`react.memo_cache_sentinel`) ? (ut = (0, X.jsxs)(U.Header, {
        children: [Ze, Qe, $e, (0, X.jsx)(U.HeaderCell, {
            className: `ps-2 text-sm`,
            children: (0, X.jsx)(M, {
                id: `aardvark.whamRepos.settingsHeader`,
                defaultMessage: `Settings`
            })
        })]
    }), t[105] = ut) : ut = t[105];
    let dt = U,
        ft;
    t[106] === W ? ft = t[107] : (ft = W && (0, X.jsx)(X.Fragment, {
        children: Array.from({
            length: 5
        }).map(rt)
    }), t[106] = W, t[107] = ft);
    let Z;
    t[108] !== H.length || t[109] !== W ? (Z = H.length === 0 && !W && (0, X.jsx)(U.Row, {
        children: (0, X.jsx)(U.Cell, {
            colSpan: 4,
            divClassName: `flex h-14 items-center`,
            children: (0, X.jsx)(M, {
                id: `aardvark.whamRepos.empty`,
                defaultMessage: `No repositories`
            })
        })
    }), t[108] = H.length, t[109] = W, t[110] = Z) : Z = t[110];
    let pt = xe.map(e => {
            let t = r.get(e.id),
                n = t?.state === `enabled`,
                o = t?.owner_email || a.formatMessage({
                    id: `aardvark.placeholder.missing`,
                    defaultMessage: `—`
                }),
                s = !!t,
                c = !!t?.owner_id && t.owner_id === i,
                l = u || !t?.owner_id || c || !!t?.can_write,
                d = `https://github.com/` + e.repository_full_name;
            return (0, X.jsxs)(U.Row, {
                className: `group/row hover:bg-token-bg-tertiary h-14 px-2 text-sm`,
                children: [(0, X.jsxs)(U.Cell, {
                    divClassName: `flex h-14 items-center group-hover/row:underline ps-2`,
                    children: [(0, X.jsx)(`button`, {
                        className: `text-start underline-offset-2 hover:underline`,
                        onClick: () => window.open(d, `_blank`),
                        children: e.name
                    }), (0, X.jsx)(`a`, {
                        href: d,
                        target: `_blank`,
                        rel: `noopener noreferrer`,
                        className: `ms-2 opacity-0 group-hover/row:opacity-100`,
                        onClick: nt,
                        children: (0, X.jsx)(ne.ArrowTopRightSm, {
                            className: `icon-sm`
                        })
                    })]
                }), (0, X.jsx)(U.Cell, {
                    divClassName: `flex h-14 items-center justify-start gap-3 ps-2`,
                    children: (0, X.jsx)(`span`, {
                        className: `rounded-md px-2 py-0.5 text-xs ${s&&n?`bg-green-500/10 text-green-600`:s&&!n?`bg-token-text-status-error/15 text-token-text-status-error`:`bg-token-bg-tertiary text-token-text-tertiary`}`,
                        children: s ? n ? (0, X.jsx)(M, {
                            id: `aardvark.repos.status.enabled`,
                            defaultMessage: `Enabled`
                        }) : (0, X.jsx)(M, {
                            id: `aardvark.status.disabled`,
                            defaultMessage: `Disabled`
                        }) : (0, X.jsx)(M, {
                            id: `aardvark.status.unconfigured`,
                            defaultMessage: `Unconfigured`
                        })
                    })
                }), (0, X.jsx)(U.Cell, {
                    divClassName: `flex h-14 items-center ps-2`,
                    children: o
                }), (0, X.jsx)(U.Cell, {
                    divClassName: `flex h-14 items-center ps-2`,
                    children: (0, X.jsx)(Fe, {
                        repoId: e.id,
                        repoFullName: e.repository_full_name,
                        canEdit: l
                    })
                })]
            }, e.id)
        }),
        mt;
    t[111] !== dt.Body || t[112] !== ft || t[113] !== Z || t[114] !== pt ? (mt = (0, X.jsxs)(dt.Body, {
        children: [ft, Z, pt]
    }), t[111] = dt.Body, t[112] = ft, t[113] = Z, t[114] = pt, t[115] = mt) : mt = t[115];
    let Q;
    t[116] !== Ye.Root || t[117] !== ut || t[118] !== mt ? (Q = (0, X.jsxs)(Ye.Root, {
        className: `overflow-x-auto overflow-y-clip`,
        disableScroll: !0,
        children: [ut, mt]
    }), t[116] = Ye.Root, t[117] = ut, t[118] = mt, t[119] = Q) : Q = t[119];
    let ht;
    t[120] !== be || t[121] !== H.length || t[122] !== A || t[123] !== he || t[124] !== ge || t[125] !== L || t[126] !== ve || t[127] !== W ? (ht = H.length > 0 ? (0, X.jsxs)(`div`, {
        className: `border-token-border-light bg-token-bg-primary flex items-center justify-between border-t px-3 py-2 ${W?`animate-pulse blur-[1px]`:``}`,
        children: [(0, X.jsxs)(`div`, {
            className: `text-token-text-tertiary text-xs`,
            children: [(0, X.jsx)(M, {
                id: `aardvark.whamRepos.range`,
                defaultMessage: `{from}-{to} of {total} repositories`,
                values: {
                    from: H.length === 0 ? 0 : ve + 1,
                    to: be,
                    total: H.length
                }
            }), L && (0, X.jsx)(`span`, {
                className: `text-token-text-secondary ms-2`,
                children: (0, X.jsx)(M, {
                    id: `aardvark.whamRepos.filteredEnabled`,
                    defaultMessage: `Showing enabled only`
                })
            })]
        }), (0, X.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [(0, X.jsx)(b, {
                as: `button`,
                size: `small`,
                color: `secondary`,
                disabled: W || ge <= 1,
                onClick: () => se(tt),
                children: (0, X.jsx)(M, {
                    id: `aardvark.pagination.prev`,
                    defaultMessage: `Previous`
                })
            }), (0, X.jsx)(b, {
                as: `button`,
                size: `small`,
                color: `secondary`,
                disabled: W || ge >= he && !A,
                onClick: () => se(et),
                children: (0, X.jsx)(M, {
                    id: `aardvark.pagination.next`,
                    defaultMessage: `Next`
                })
            })]
        })]
    }) : null, t[120] = be, t[121] = H.length, t[122] = A, t[123] = he, t[124] = ge, t[125] = L, t[126] = ve, t[127] = W, t[128] = ht) : ht = t[128];
    let gt;
    return t[129] !== Ae || t[130] !== J || t[131] !== Q || t[132] !== ht ? (gt = (0, X.jsxs)(X.Fragment, {
        children: [Ae, J, Q, ht]
    }), t[129] = Ae, t[130] = J, t[131] = Q, t[132] = ht, t[133] = gt) : gt = t[133], gt
}

function et(e) {
    return e + 1
}

function tt(e) {
    return Math.max(1, e - 1)
}

function nt(e) {
    return e.stopPropagation()
}

function rt(e, t) {
    return (0, X.jsx)(U.Row, {
        children: (0, X.jsx)(U.Cell, {
            colSpan: 4,
            divClassName: `p-2`,
            children: (0, X.jsx)(`div`, {
                className: `bg-token-bg-primary border-token-border-light h-6 w-full animate-pulse rounded-md border blur-[1px]`
            })
        })
    }, `skeleton-${t}`)
}

function it(e) {
    return (0, X.jsx)(_e.Item, {
        value: e.id.toString(),
        children: e.account_login
    }, e.id)
}

function at(e) {
    return e.repositories ?? []
}

function ot(e, t) {
    if (!((e?.repositories ?? []).length < ct)) return t.length + 1
}
var st, Y, X, ct, lt, ut = e((() => {
    st = oe(), Pe(), Qe(), Oe(), Me(), be(), n(), C(), w(), ve(), ge(), k(), z(), T(), le(), d(), L(), Y = t(F()), P(), X = j(), ct = 100, lt = 500
}));

function dt({
    error: e = !1,
    isEnabledByWorkspaceAdmin: t,
    handleOpenGithubModal: n
} = {}) {
    let r = (0, ft.useMemo)(() => () => {
            i.logStructuredEvent(`AardvarkConnectGithubClicked`, {
                entryPoint: `connect_github_card`,
                isEnabledByWorkspaceAdmin: !!t
            }), n?.()
        }, [t, n]),
        a = (0, ft.useMemo)(() => e ? (0, Z.jsx)(`div`, {
            className: `bg-token-danger-muted text-token-text-secondary mt-4 rounded-md px-3 py-2 text-sm`,
            role: `alert`,
            children: (0, Z.jsx)(M, {
                ...De.githubConnectionInline
            })
        }) : t ? (0, Z.jsx)(Z.Fragment, {
            children: (0, Z.jsx)(`div`, {
                className: `mt-4 flex items-center justify-center`,
                children: (0, Z.jsx)(b, {
                    as: `button`,
                    size: `small`,
                    color: `secondary`,
                    onClick: r,
                    children: (0, Z.jsx)(M, {
                        id: `aardvark.whamRepos.connectGithub`,
                        defaultMessage: `Connect GitHub`
                    })
                })
            })
        }) : (0, Z.jsx)(`div`, {
            className: `bg-token-danger-muted text-token-text-secondary mt-4 rounded-md px-3 py-2 text-sm`,
            role: `alert`,
            children: (0, Z.jsx)(M, {
                ...De.githubConnectionNotEnabled
            })
        }), [e, r, t]);
    return (0, Z.jsxs)(`div`, {
        className: `border-token-border-light/60 bg-token-main-surface-secondary/50 mx-auto w-full max-w-[640px] rounded-lg border px-5 py-6 text-center shadow-sm backdrop-blur-[2px]`,
        children: [(0, Z.jsx)(`p`, {
            className: `text-token-text-primary text-lg leading-6 font-semibold`,
            children: (0, Z.jsx)(M, {
                id: `aardvark.home.connectGithub.title`,
                defaultMessage: `Connect GitHub to start scanning and view findings with Codex Security.`
            })
        }), a]
    })
}
var ft, Z, pt = e((() => {
    Oe(), n(), o(), ft = t(F()), P(), Z = j()
}));

function mt({
    hasGithubConnection: e,
    openGithubModal: t
}) {
    let n = R();
    return (0, Q.jsxs)(`div`, {
        children: [(0, Q.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [(0, Q.jsx)(`h2`, {
                id: `connected-repos`,
                className: `text-token-text-primary text-lg leading-6 font-semibold`,
                children: (0, Q.jsx)(M, {
                    id: `aardvark.whamRepos.connectedSectionTitle`,
                    defaultMessage: `Your connected repositories`
                })
            }), (0, Q.jsx)(`a`, {
                href: `#connected-repos`,
                className: `text-token-text-tertiary opacity-60 hover:opacity-100`,
                "aria-label": n.formatMessage({
                    id: `aardvark.whamRepos.connectedLinkAria`,
                    defaultMessage: `Deep link to connected repositories`
                }),
                children: (0, Q.jsx)(he, {
                    className: `icon-sm`
                })
            })]
        }), (0, Q.jsx)(`p`, {
            className: `text-token-text-secondary mt-2 mb-2 text-sm leading-6`,
            children: (0, Q.jsx)(M, {
                id: `aardvark.whamRepos.connectedSectionDescription`,
                defaultMessage: `These are repositories from your GitHub organizations that you’ve connected. You can configure scans for them here. Missing a repo? {link}`,
                values: {
                    link: (0, Q.jsx)(`a`, {
                        href: `#connected-repos`,
                        className: `underline underline-offset-2`,
                        onClick: n => {
                            n.preventDefault(), e ? window.open(`https://github.com/apps/chatgpt-codex-connector/installations/select_target`, `_blank`) : t()
                        },
                        children: (0, Q.jsx)(M, {
                            id: `aardvark.whamRepos.configureAccess`,
                            defaultMessage: `Configure repository access.`
                        })
                    })
                }
            })
        })]
    })
}
var Q, ht = e((() => {
    H(), P(), Q = j()
}));

function gt(e) {
    "use forget";
    let t = (0, xt.c)(32),
        {
            scanMap: n,
            scanConfigurationsLoading: r,
            scanConfigurationErrorMessage: i
        } = e,
        a = r !== void 0 && r,
        o = R(),
        {
            openGithubModal: s,
            error: c,
            isConnected: l,
            isLoading: u
        } = se(y.GITHUB_CONNECTOR, `github`, `/aardvark/scans?refresh_repos=true`, ue.CODEX),
        d = _(_t),
        f = !u && !l,
        p = l,
        m;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (m = te(), t[0] = m) : m = t[0];
    let h = m?.authUserId ?? ``,
        ee = W(),
        g = I(),
        v;
    t[1] === g.search ? v = t[2] : (v = new URLSearchParams(g.search).get(`refresh_repos`), t[1] = g.search, t[2] = v);
    let b = v === `true`,
        x, C;
    t[3] !== c || t[4] !== o ? (x = () => {
        if (!c) return;
        let e = Ne(c),
            t = o.formatMessage(De.githubConnection, {
                details: e
            });
        S.danger(t, {
            hasCloseButton: !0
        })
    }, C = [c, o], t[3] = c, t[4] = o, t[5] = x, t[6] = C) : (x = t[5], C = t[6]), (0, St.useEffect)(x, C);
    let w, T;
    t[7] !== l || t[8] !== g.hash || t[9] !== g.pathname || t[10] !== g.search || t[11] !== ee || t[12] !== b ? (w = () => {
        if (!l || !b) return;
        ee(!0);
        let e = new URLSearchParams(g.search);
        e.delete(`refresh_repos`);
        let t = e.toString(),
            n = `${g.pathname}${t?`?${t}`:``}${g.hash}`;
        window.history.replaceState({}, ``, n)
    }, T = [l, ee, b, g.pathname, g.search, g.hash], t[7] = l, t[8] = g.hash, t[9] = g.pathname, t[10] = g.search, t[11] = ee, t[12] = b, t[13] = w, t[14] = T) : (w = t[13], T = t[14]), (0, St.useEffect)(w, T);
    let ne = !!c,
        E = u || a,
        D;
    t[15] !== u || t[16] !== o || t[17] !== l || t[18] !== n ? (D = (0, $.jsx)($e, {
        connectorLoading: u,
        scanMap: n,
        currentUserId: h,
        intl: o,
        isConnected: l
    }), t[15] = u, t[16] = o, t[17] = l, t[18] = n, t[19] = D) : D = t[19];
    let O;
    t[20] !== d || t[21] !== s || t[22] !== i || t[23] !== f || t[24] !== D || t[25] !== ne || t[26] !== E ? (O = (0, $.jsx)(yt, {
        scanConfigurationErrorMessage: i,
        showConnectCard: f,
        hasGithubError: ne,
        openGithubModal: s,
        isLoading: E,
        isEnabledByWorkspaceAdmin: d,
        children: D
    }), t[20] = d, t[21] = s, t[22] = i, t[23] = f, t[24] = D, t[25] = ne, t[26] = E, t[27] = O) : O = t[27];
    let k;
    return t[28] !== p || t[29] !== s || t[30] !== O ? (k = (0, $.jsx)(vt, {
        hasGithubConnection: p,
        openGithubModal: s,
        children: O
    }), t[28] = p, t[29] = s, t[30] = O, t[31] = k) : k = t[31], k
}

function _t() {
    return ce(y.GITHUB_CONNECTOR, {
        productSku: ue.CODEX
    })
}

function vt({
    hasGithubConnection: e,
    openGithubModal: t,
    children: n
}) {
    return (0, $.jsxs)(`div`, {
        className: `flex flex-col gap-5`,
        children: [(0, $.jsx)(`div`, {
            className: `flex flex-col gap-1`,
            children: (0, $.jsx)(mt, {
                hasGithubConnection: e,
                openGithubModal: t
            })
        }), n]
    })
}

function yt({
    scanConfigurationErrorMessage: e,
    showConnectCard: t,
    hasGithubError: n,
    openGithubModal: r,
    isLoading: i,
    isEnabledByWorkspaceAdmin: a,
    children: o
}) {
    return e ? (0, $.jsx)(bt, {
        message: e
    }) : t ? (0, $.jsx)(dt, {
        error: n,
        handleOpenGithubModal: r,
        isEnabledByWorkspaceAdmin: a
    }) : i ? (0, $.jsx)(`div`, {
        className: `flex h-24 items-center justify-center`,
        children: (0, $.jsx)(m, {
            className: `text-token-text-tertiary h-6 w-6`
        })
    }) : (0, $.jsx)($.Fragment, {
        children: o
    })
}

function bt({
    message: e
}) {
    return (0, $.jsx)(`div`, {
        className: `flex justify-center`,
        children: (0, $.jsx)(`div`, {
            className: `border-token-border-light bg-token-main-surface-secondary/50 inline-flex items-center gap-2 rounded-lg border px-3 py-2.5 text-sm shadow-sm`,
            children: (0, $.jsx)(`div`, {
                className: `text-token-text-secondary leading-6`,
                children: e
            })
        })
    })
}
var xt, St, $, Ct = e((() => {
    xt = oe(), D(), ut(), pt(), ht(), Oe(), ke(), Me(), V(), B(), r(), h(), E(), T(), St = t(F()), P(), A(), $ = j()
}));

function wt() {
    let e = I();
    return (0, Et.useEffect)(() => {
        let t = (e.hash || ``).replace(/^#/, ``).toLowerCase(),
            n = ``;
        if (t === `connected-repos`) n = `connected-repos`;
        else if (t === `configured-repos`) n = `configured-repos`;
        else return;
        try {
            let e = 0,
                t = () => {
                    let r = document.getElementById(n);
                    r ? r.scrollIntoView({
                        behavior: `smooth`,
                        block: `start`
                    }) : e < 10 && (e += 1, setTimeout(t, 50))
                };
            requestAnimationFrame(t)
        } catch {}
    }, [e.hash]), (0, Dt.jsx)(`section`, {
        id: `configure-scans`,
        className: `mt-8`,
        children: (0, Dt.jsx)(Tt, {})
    })
}

function Tt() {
    let e = te(),
        t = e?.getWorkspaceId(),
        {
            scanMap: n,
            hasNextPage: r,
            isFetchingNextPage: i,
            isFetchNextPageError: a,
            fetchNextPage: o,
            isLoading: s,
            error: l
        } = xe(t),
        {
            data: u,
            isLoading: d,
            error: f
        } = N({
            queryKey: we(t),
            queryFn: Ce,
            retry: (e, t) => !(t instanceof c && t.status === 404) && e < 3
        }),
        p = f instanceof c && f.status === 404;
    (0, Et.useEffect)(() => {
        p && r && !i && !a && o()
    }, [p, r, i, a, o]);
    let m = (0, Et.useMemo)(() => p ? Array.from(n.values(), e => {
            let t = e.scan_input;
            return {
                repo_id: t.repo_id,
                repo_url: t.repo_url,
                state: `state` in t ? t.state ?? null : null,
                owner_id: e.owner_id,
                owner_email: e.owner?.email ?? null,
                can_write: e.permissions?.can_write ?? !1
            }
        }) : u?.items ?? [], [n, p, u]),
        h = (0, Et.useMemo)(() => new Map(m.map(e => [e.repo_id, e])), [m]),
        g = p ? l : f ?? l,
        _ = d || p && (s || r || i),
        v = R(),
        y = ee(),
        b = (0, Et.useMemo)(() => g ? v.formatMessage(De.scanConfigLoad, {
            details: Ne(g)
        }) : null, [v, g]);
    return (0, Et.useEffect)(() => {
        b && y.danger(b, {
            hasCloseButton: !0
        })
    }, [v, b, y]), (0, Dt.jsxs)(`div`, {
        className: `display-flex flex-col gap-6`,
        children: [(0, Dt.jsx)(gt, {
            scanMap: h,
            scanConfigurationsLoading: _,
            ...b ? {
                scanConfigurationErrorMessage: b
            } : {}
        }), (0, Dt.jsx)(qe, {
            scanConfigurations: m,
            isLoading: _,
            currentUserId: e?.authUserId ?? ``,
            ...b ? {
                errorMessage: b
            } : {}
        })]
    })
}
var Et, Dt, Ot = e((() => {
    Ye(), Ct(), Oe(), ke(), Me(), Se(), E(), T(), v(), L(), Et = t(F()), P(), A(), Dt = j()
}));

function kt() {
    "use forget";
    let e = (0, jt.c)(5),
        {
            hasAccess: t,
            isLoading: n,
            isError: r,
            refetch: i
        } = ye(),
        a;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (a = p(), e[0] = a) : a = e[0];
    let o = a;
    if (n) return null;
    if (r) {
        let t;
        return e[1] === i ? t = e[2] : (t = (0, Mt.jsx)(Ee, {
            onRetry: () => void i()
        }), e[1] = i, e[2] = t), t
    }
    if (!t) {
        let t;
        return e[3] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Mt.jsx)(ae, {
            to: `/`,
            replace: !0
        }), e[3] = t) : t = e[3], t
    }
    let s;
    return e[4] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, Mt.jsx)(At, {
        ...o
    }), e[4] = s) : s = e[4], s
}

function At(e) {
    "use forget";
    let t = (0, jt.c)(1),
        n;
    return t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, Mt.jsx)(je, {
        children: (0, Mt.jsx)(wt, {})
    }), t[0] = n) : n = t[0], n
}
var jt, Mt, Nt = e((() => {
        jt = oe(), Te(), Ot(), Ae(), be(), x(), A(), Mt = j()
    })),
    Pt, Ft, It, Lt = e((() => {
        A(), Pt = oe(), Te(), Nt(), be(), h(), Ft = j(), It = re(function() {
            "use forget";
            let e = (0, Pt.c)(6),
                {
                    isLoading: t,
                    isError: n,
                    refetch: r,
                    hasAccess: i,
                    hasNewUiAccess: a
                } = ye(),
                o = I();
            if (t) {
                let t;
                return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Ft.jsx)(`div`, {
                    className: `flex min-h-[40vh] items-center justify-center`,
                    children: (0, Ft.jsx)(m, {
                        className: `text-token-text-tertiary h-5 w-5`
                    })
                }), e[0] = t) : t = e[0], t
            }
            if (n) {
                let t;
                return e[1] === r ? t = e[2] : (t = (0, Ft.jsx)(Ee, {
                    onRetry: () => void r()
                }), e[1] = r, e[2] = t), t
            }
            if (i && a) {
                let t;
                return e[3] === o.search ? t = e[4] : (t = (0, Ft.jsx)(ae, {
                    to: {
                        pathname: `/codex/cloud/security/scans`,
                        search: o.search
                    },
                    replace: !0
                }), e[3] = o.search, e[4] = t), t
            }
            let s;
            return e[5] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, Ft.jsx)(kt, {}), e[5] = s) : s = e[5], s
        })
    }));
e((() => {
    Lt()
}))();
export {
    It as
    default
};
//# sourceMappingURL=aardvark.scans-lcr4oqwb.js.map
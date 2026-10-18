import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AG as n,
    AT as r,
    Bz as i,
    DG as a,
    Ji as o,
    My as s,
    QL as c,
    Qit as l,
    Xi as u,
    cw as d,
    dz as f,
    eR as p,
    fz as m,
    hU as h,
    i_ as g,
    iat as _,
    jy as v,
    kT as y,
    o1 as b,
    pU as x,
    pnt as S,
    r_ as C,
    sw as w,
    u1 as T,
    ynt as E,
    zz as D
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as O,
    At as k,
    Bn as A,
    Ht as j,
    Ln as M,
    N as ee,
    Nn as N,
    O as te,
    Pt as ne,
    Rn as P,
    Ut as F,
    Vn as re,
    p as ie,
    q as ae,
    s as I,
    wn as L,
    zn as oe
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $C as se,
    Hbt as R,
    THn as ce,
    Ubt as le,
    ew as ue,
    idn as de,
    rCn as z,
    rdn as fe,
    sCn as pe,
    wHn as B
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Ax as me,
    Gh as he,
    Kh as ge,
    Sv as _e,
    _m as ve,
    gm as ye,
    kx as be,
    xv as xe
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    Hx as Se,
    Lx as Ce,
    Qo as we,
    Rx as Te,
    Vx as Ee,
    Wx as De,
    Xv as V,
    Zv as Oe,
    da as ke,
    is as Ae,
    ma as je,
    ts as Me
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    n as Ne,
    t as H
} from "./9f2e6d33-favh86igrrldl3up.js";
import {
    n as Pe,
    t as Fe
} from "./ef50f9ea-loe7pej9qqjhd9kr.js";
import {
    n as Ie,
    t as U
} from "./d329f11d-f3jqyhwii9qke9xg.js";
import {
    n as Le,
    t as Re
} from "./7f7d91ee-irfqd9bybrmc3ogb.js";
import {
    n as ze,
    t as Be
} from "./8c6976e5-ibz7fcap50r267b6.js";
import {
    c as Ve,
    d as He,
    f as Ue,
    i as We,
    l as Ge,
    m as Ke,
    n as qe,
    p as Je,
    r as Ye,
    s as Xe,
    u as Ze
} from "./145c7c03-nyra12le765on1b5.js";
import {
    n as Qe,
    t as $e
} from "./106c26e7-ojne9wb4j1af1gmx.js";

function et(e) {
    "use forget";
    let t = (0, q.c)(44),
        {
            emptyMessage: n,
            identities: r,
            onRevokeIdentity: i,
            revokingIdentityId: a,
            showCreatedByColumn: o
        } = e,
        s = oe(),
        [c, l] = (0, gt.useState)(),
        u;
    t[0] === i ? u = t[1] : (u = e => {
        i(e), l(t => t != null && ht(t) === ht(e) ? void 0 : t)
    }, t[0] = i, t[1] = u);
    let d = u,
        f = o ? 6 : 5,
        p = o ? `w-[28%]` : `w-[44%]`,
        m;
    t[2] === p ? m = t[3] : (m = (0, J.jsx)(`col`, {
        className: p
    }), t[2] = p, t[3] = m);
    let h;
    t[4] === o ? h = t[5] : (h = o && (0, J.jsx)(`col`, {
        className: `w-[20%]`
    }), t[4] = o, t[5] = h);
    let g, _, v, y;
    t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (g = (0, J.jsx)(`col`, {
        className: `w-[16%]`
    }), _ = (0, J.jsx)(`col`, {
        className: `w-[20%]`
    }), v = (0, J.jsx)(`col`, {
        className: `w-[10%]`
    }), y = (0, J.jsx)(`col`, {
        className: `w-16`
    }), t[6] = g, t[7] = _, t[8] = v, t[9] = y) : (g = t[6], _ = t[7], v = t[8], y = t[9]);
    let b;
    t[10] !== m || t[11] !== h ? (b = (0, J.jsxs)(`colgroup`, {
        children: [m, h, g, _, v, y]
    }), t[10] = m, t[11] = h, t[12] = b) : b = t[12];
    let x;
    t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (x = (0, J.jsx)(V.HeaderCell, {
        children: (0, J.jsx)(N, {
            ...Y.nameColumn
        })
    }), t[13] = x) : x = t[13];
    let S;
    t[14] === o ? S = t[15] : (S = o && (0, J.jsx)(V.HeaderCell, {
        children: (0, J.jsx)(N, {
            ...Y.createdByColumn
        })
    }), t[14] = o, t[15] = S);
    let C;
    t[16] === Symbol.for(`react.memo_cache_sentinel`) ? (C = (0, J.jsx)(V.HeaderCell, {
        children: (0, J.jsx)(N, {
            ...Y.dateAddedColumn
        })
    }), t[16] = C) : C = t[16];
    let w;
    t[17] === s ? w = t[18] : (w = (0, J.jsx)(V.HeaderCell, {
        children: (0, J.jsx)(W, {
            intl: s
        })
    }), t[17] = s, t[18] = w);
    let T, E;
    t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (T = (0, J.jsx)(V.HeaderCell, {
        children: (0, J.jsx)(N, {
            ...Y.statusColumn
        })
    }), E = (0, J.jsx)(V.HeaderCell, {
        className: `w-16`
    }), t[19] = T, t[20] = E) : (T = t[19], E = t[20]);
    let D;
    t[21] !== S || t[22] !== w ? (D = (0, J.jsxs)(V.Header, {
        children: [x, S, C, w, T, E]
    }), t[21] = S, t[22] = w, t[23] = D) : D = t[23];
    let O;
    t[24] !== f || t[25] !== n || t[26] !== d || t[27] !== r || t[28] !== s || t[29] !== a || t[30] !== o ? (O = r.length === 0 ? (0, J.jsx)(V.Row, {
        className: `[&>td]:py-2`,
        children: (0, J.jsx)(V.Cell, {
            colSpan: f,
            children: (0, J.jsx)(`div`, {
                className: `text-token-text-tertiary`,
                children: n ?? (0, J.jsx)(N, {
                    ...Qe.noResults
                })
            })
        })
    }) : r.map(e => (0, J.jsxs)(V.Row, {
        className: `[&>td]:py-2`,
        onClick: () => l(e),
        children: [(0, J.jsxs)(V.Cell, {
            divClassName: `min-h-[40px] min-w-0 items-center`,
            children: [(0, J.jsx)(`div`, {
                className: `bg-token-bg-tertiary text-token-text-secondary me-3 flex size-8 shrink-0 items-center justify-center rounded-full`,
                children: (0, J.jsx)(ye, {
                    className: `icon-sm`
                })
            }), (0, J.jsx)(`div`, {
                className: `min-w-0`,
                children: (0, J.jsxs)(`div`, {
                    className: `flex min-w-0 flex-wrap items-center gap-1`,
                    children: [(0, J.jsx)(`span`, {
                        className: `min-w-0 truncate`,
                        title: e.name,
                        children: e.name
                    }), e.tokenUseCases.map(tt)]
                })
            })]
        }), o && (0, J.jsx)(V.Cell, {
            children: (0, J.jsx)(Fe, {
                name: e.createdBy,
                email: e.createdByEmail,
                fallback: (0, J.jsx)(N, {
                    ...Y.notAvailable
                }),
                secondaryClassName: `text-token-text-tertiary text-xs`
            })
        }), (0, J.jsx)(V.Cell, {
            children: K(e.createdAt, s)
        }), (0, J.jsx)(V.Cell, {
            children: ut(e, s)
        }), (0, J.jsx)(V.Cell, {
            children: mt(e.status, s)
        }), (0, J.jsx)(V.Cell, {
            children: (0, J.jsx)(nt, {
                identity: e,
                isRevoking: a === ht(e),
                onRevokeIdentity: d
            })
        })]
    }, ht(e))), t[24] = f, t[25] = n, t[26] = d, t[27] = r, t[28] = s, t[29] = a, t[30] = o, t[31] = O) : O = t[31];
    let k;
    t[32] === O ? k = t[33] : (k = (0, J.jsx)(V.Body, {
        children: O
    }), t[32] = O, t[33] = k);
    let A;
    t[34] !== D || t[35] !== k || t[36] !== b ? (A = (0, J.jsx)(`div`, {
        className: `-mx-2 overflow-x-auto overflow-y-hidden px-2 pb-2 md:mx-0 md:px-0`,
        children: (0, J.jsxs)(V.Root, {
            fixed: !0,
            size: `normal`,
            className: `min-w-[52rem]`,
            children: [b, D, k]
        })
    }), t[34] = D, t[35] = k, t[36] = b, t[37] = A) : A = t[37];
    let j;
    t[38] !== c || t[39] !== o ? (j = c && (0, J.jsx)(ot, {
        identity: c,
        onClose: () => l(void 0),
        showCreatorDetails: o
    }), t[38] = c, t[39] = o, t[40] = j) : j = t[40];
    let M;
    return t[41] !== A || t[42] !== j ? (M = (0, J.jsxs)(J.Fragment, {
        children: [A, j]
    }), t[41] = A, t[42] = j, t[43] = M) : M = t[43], M
}

function tt(e) {
    return (0, J.jsx)(at, {
        tokenUseCase: e
    }, e)
}

function nt(e) {
    "use forget";
    let t = (0, q.c)(18),
        {
            identity: n,
            isRevoking: r,
            onRevokeIdentity: i
        } = e,
        a = oe(),
        o;
    t[0] !== n.name || t[1] !== a ? (o = a.formatMessage(Y.actionsButtonLabel, {
        name: n.name
    }), t[0] = n.name, t[1] = a, t[2] = o) : o = t[2];
    let s;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, J.jsx)(be, {
        className: `icon-sm`
    }), t[3] = s) : s = t[3];
    let c;
    t[4] === o ? c = t[5] : (c = (0, J.jsx)(B.Trigger, {
        "aria-label": o,
        className: `-my-2`,
        onClick: it,
        onPointerDown: rt,
        children: s
    }), t[4] = o, t[5] = c);
    let l = n.status === `revoked` || r,
        u;
    t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, J.jsx)(_e, {}), t[6] = u) : u = t[6];
    let d;
    t[7] !== n || t[8] !== r || t[9] !== i ? (d = e => {
        e.stopPropagation(), !(n.status === `revoked` || r) && i(n)
    }, t[7] = n, t[8] = r, t[9] = i, t[10] = d) : d = t[10];
    let f;
    t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (f = (0, J.jsx)(N, {
        ...Y.revokeAction
    }), t[11] = f) : f = t[11];
    let p;
    t[12] !== l || t[13] !== d ? (p = (0, J.jsx)(B.Portal, {
        children: (0, J.jsx)(B.Content, {
            size: `small`,
            children: (0, J.jsx)(B.Item, {
                color: `danger`,
                disabled: l,
                icon: u,
                onClick: d,
                children: f
            })
        })
    }), t[12] = l, t[13] = d, t[14] = p) : p = t[14];
    let m;
    return t[15] !== c || t[16] !== p ? (m = (0, J.jsxs)(B.Root, {
        children: [c, p]
    }), t[15] = c, t[16] = p, t[17] = m) : m = t[17], m
}

function rt(e) {
    return e.stopPropagation()
}

function it(e) {
    return e.stopPropagation()
}

function at(e) {
    "use forget";
    let t = (0, q.c)(2),
        {
            tokenUseCase: n
        } = e,
        r = n === `workspace_agents` ? Y.workspaceAgentsUseCase : n === `codex_security` ? Y.codexSecurityUseCase : Y.codexUseCase,
        i;
    return t[0] === r ? i = t[1] : (i = (0, J.jsx)(`span`, {
        className: `bg-token-bg-tertiary text-token-text-secondary shrink-0 rounded-full px-2 py-0.5 text-xs font-medium`,
        children: (0, J.jsx)(N, {
            ...r
        })
    }), t[0] = r, t[1] = i), i
}

function W(e) {
    "use forget";
    let t = (0, q.c)(11),
        {
            intl: n
        } = e,
        r;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, J.jsx)(N, {
        ...Y.lastUsedColumn
    }), t[0] = r) : r = t[0];
    let i;
    t[1] === n ? i = t[2] : (i = dt(n), t[1] = n, t[2] = i);
    let a;
    t[3] === n ? a = t[4] : (a = n.formatMessage(Y.lastUsedWindowInfoLabel), t[3] = n, t[4] = a);
    let o;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, J.jsx)(D, {
        "aria-hidden": `true`,
        className: `size-3.5`
    }), t[5] = o) : o = t[5];
    let s;
    t[6] === a ? s = t[7] : (s = (0, J.jsx)(`button`, {
        type: `button`,
        "aria-label": a,
        className: `text-token-text-tertiary hover:text-token-text-secondary focus-visible:outline-token-border-heavy inline-flex size-4 cursor-pointer items-center justify-center rounded-full p-0 focus-visible:outline-2 focus-visible:outline-offset-2`,
        children: o
    }), t[6] = a, t[7] = s);
    let c;
    return t[8] !== i || t[9] !== s ? (c = (0, J.jsxs)(`div`, {
        className: `inline-flex items-center gap-1`,
        children: [r, (0, J.jsx)(v, {
            label: i,
            side: `top`,
            triggerAs: null,
            children: s
        })]
    }), t[8] = i, t[9] = s, t[10] = c) : c = t[10], c
}

function ot(e) {
    "use forget";
    let t = (0, q.c)(66),
        {
            identity: n,
            onClose: r,
            showCreatorDetails: i
        } = e,
        a = oe(),
        o;
    t[0] === r ? o = t[1] : (o = e => {
        e || r()
    }, t[0] = r, t[1] = o);
    let s;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, J.jsx)(U.Backdrop, {}), t[2] = s) : s = t[2];
    let c;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (c = {
        maxWidth: 500
    }, t[3] = c) : c = t[3];
    let l;
    t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (l = (0, J.jsx)(`div`, {}), t[4] = l) : l = t[4];
    let u;
    t[5] === r ? u = t[6] : (u = (0, J.jsxs)(`h1`, {
        className: `flex items-center justify-between p-4`,
        children: [l, (0, J.jsx)(w, {
            onClick: r,
            iconSize: `lg`
        })]
    }), t[5] = r, t[6] = u);
    let d;
    t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, J.jsx)(`div`, {
        className: `bg-token-bg-tertiary text-token-text-secondary flex size-12 items-center justify-center rounded-full`,
        children: (0, J.jsx)(ye, {
            className: `icon-lg`
        })
    }), t[7] = d) : d = t[7];
    let f;
    t[8] === n.name ? f = t[9] : (f = (0, J.jsxs)(`div`, {
        className: `flex flex-col items-center gap-3 text-center`,
        children: [d, (0, J.jsx)(`div`, {
            className: `w-full max-w-full min-w-0`,
            children: (0, J.jsx)(`h3`, {
                className: `text-heading-3 [overflow-wrap:anywhere]`,
                children: n.name
            })
        })]
    }), t[8] = n.name, t[9] = f);
    let p;
    t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (p = (0, J.jsx)(`hr`, {
        className: `my-2.5`
    }), t[10] = p) : p = t[10];
    let m;
    t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (m = (0, J.jsx)(N, {
        ...Y.accessTokenIdLabel
    }), t[11] = m) : m = t[11];
    let h;
    t[12] === n.id ? h = t[13] : (h = (0, J.jsx)(G, {
        label: m,
        value: n.id
    }), t[12] = n.id, t[13] = h);
    let g;
    t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (g = (0, J.jsx)(N, {
        ...Y.tokenUseCaseLabel
    }), t[14] = g) : g = t[14];
    let _;
    t[15] === n.tokenUseCases ? _ = t[16] : (_ = n.tokenUseCases.map(st), t[15] = n.tokenUseCases, t[16] = _);
    let v;
    t[17] === _ ? v = t[18] : (v = (0, J.jsx)(G, {
        label: g,
        value: (0, J.jsx)(`div`, {
            className: `flex flex-wrap justify-end gap-1`,
            children: _
        })
    }), t[17] = _, t[18] = v);
    let y;
    t[19] !== n.createdBy || t[20] !== n.createdByEmail || t[21] !== i ? (y = i ? (0, J.jsx)(G, {
        label: (0, J.jsx)(N, {
            ...Y.createdByColumn
        }),
        value: (0, J.jsx)(Fe, {
            align: `end`,
            name: n.createdBy,
            email: n.createdByEmail,
            fallback: (0, J.jsx)(N, {
                ...Y.notAvailable
            }),
            secondaryClassName: `text-token-text-tertiary text-xs`
        })
    }) : null, t[19] = n.createdBy, t[20] = n.createdByEmail, t[21] = i, t[22] = y) : y = t[22];
    let b;
    t[23] === Symbol.for(`react.memo_cache_sentinel`) ? (b = (0, J.jsx)(N, {
        ...Y.dateAddedColumn
    }), t[23] = b) : b = t[23];
    let x;
    t[24] !== n.createdAt || t[25] !== a ? (x = K(n.createdAt, a), t[24] = n.createdAt, t[25] = a, t[26] = x) : x = t[26];
    let S;
    t[27] === x ? S = t[28] : (S = (0, J.jsx)(G, {
        label: b,
        value: x
    }), t[27] = x, t[28] = S);
    let C;
    t[29] === a ? C = t[30] : (C = (0, J.jsx)(W, {
        intl: a
    }), t[29] = a, t[30] = C);
    let T;
    t[31] !== n || t[32] !== a ? (T = ut(n, a), t[31] = n, t[32] = a, t[33] = T) : T = t[33];
    let E;
    t[34] !== C || t[35] !== T ? (E = (0, J.jsx)(G, {
        label: C,
        value: T
    }), t[34] = C, t[35] = T, t[36] = E) : E = t[36];
    let D;
    t[37] === Symbol.for(`react.memo_cache_sentinel`) ? (D = (0, J.jsx)(N, {
        ...Y.expiresColumn
    }), t[37] = D) : D = t[37];
    let O;
    t[38] !== n.expiresAt || t[39] !== a ? (O = lt(n.expiresAt, a), t[38] = n.expiresAt, t[39] = a, t[40] = O) : O = t[40];
    let k;
    t[41] === O ? k = t[42] : (k = (0, J.jsx)(G, {
        label: D,
        value: O
    }), t[41] = O, t[42] = k);
    let A;
    t[43] === Symbol.for(`react.memo_cache_sentinel`) ? (A = (0, J.jsx)(N, {
        ...Y.statusColumn
    }), t[43] = A) : A = t[43];
    let j;
    t[44] !== n.status || t[45] !== a ? (j = mt(n.status, a), t[44] = n.status, t[45] = a, t[46] = j) : j = t[46];
    let M;
    t[47] === j ? M = t[48] : (M = (0, J.jsx)(G, {
        label: A,
        value: j
    }), t[47] = j, t[48] = M);
    let ee;
    t[49] !== h || t[50] !== v || t[51] !== y || t[52] !== S || t[53] !== E || t[54] !== k || t[55] !== M ? (ee = (0, J.jsxs)(`dl`, {
        className: `flex flex-col gap-3`,
        children: [h, v, y, S, E, k, M]
    }), t[49] = h, t[50] = v, t[51] = y, t[52] = S, t[53] = E, t[54] = k, t[55] = M, t[56] = ee) : ee = t[56];
    let te;
    t[57] !== ee || t[58] !== f ? (te = (0, J.jsxs)(`div`, {
        className: `flex flex-col gap-3 px-10 pt-4`,
        children: [f, p, ee]
    }), t[57] = ee, t[58] = f, t[59] = te) : te = t[59];
    let ne;
    t[60] !== te || t[61] !== u ? (ne = (0, J.jsx)(U.Portal, {
        children: (0, J.jsxs)(U.View, {
            contentPlacement: `right`,
            children: [s, (0, J.jsxs)(U.Content, {
                style: c,
                children: [u, te]
            })]
        })
    }), t[60] = te, t[61] = u, t[62] = ne) : ne = t[62];
    let P;
    return t[63] !== o || t[64] !== ne ? (P = (0, J.jsx)(U.Root, {
        presented: !0,
        defaultPresented: !0,
        onPresentedChange: o,
        children: ne
    }), t[63] = o, t[64] = ne, t[65] = P) : P = t[65], P
}

function st(e) {
    return (0, J.jsx)(at, {
        tokenUseCase: e
    }, e)
}

function G(e) {
    "use forget";
    let t = (0, q.c)(7),
        {
            label: n,
            value: r
        } = e,
        i;
    t[0] === n ? i = t[1] : (i = (0, J.jsx)(`dt`, {
        className: `text-token-text-tertiary`,
        children: n
    }), t[0] = n, t[1] = i);
    let a;
    t[2] === r ? a = t[3] : (a = (0, J.jsx)(`dd`, {
        className: `text-token-text-primary min-w-0 flex-1 text-end [overflow-wrap:anywhere]`,
        children: r
    }), t[2] = r, t[3] = a);
    let o;
    return t[4] !== i || t[5] !== a ? (o = (0, J.jsxs)(`div`, {
        className: `flex items-start justify-between gap-4 text-sm`,
        children: [i, a]
    }), t[4] = i, t[5] = a, t[6] = o) : o = t[6], o
}

function K(e, t) {
    let n = new Date(e);
    return Number.isNaN(n.getTime()) ? e : t.formatDate(n, {
        month: `short`,
        day: `numeric`,
        year: `numeric`
    })
}

function ct(e, t) {
    let n = new Date(e);
    return Number.isNaN(n.getTime()) ? e : t.formatDate(n, {
        month: `short`,
        day: `numeric`,
        year: `numeric`,
        hour: `numeric`,
        minute: `2-digit`,
        timeZoneName: `short`
    })
}

function lt(e, t) {
    return e == null ? t.formatMessage(Y.noExpiration) : ct(e, t)
}

function ut(e, t) {
    return e.lastUsedAt === void 0 ? t.formatMessage(Y.notAvailable) : e.lastUsedAt == null ? t.formatMessage(Y.noRecentUsage) : K(e.lastUsedAt, t)
}

function dt(e) {
    return e.formatMessage(Y.lastUsedWindowTooltip, {
        start: pt(ft(), e)
    })
}

function ft() {
    let e = new Date,
        t = new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate() + 1)),
        n = new Date(t);
    return n.setUTCDate(t.getUTCDate() - _t), n
}

function pt(e, t) {
    return t.formatDate(e, {
        month: `short`,
        day: `numeric`,
        year: `numeric`
    })
}

function mt(e, t) {
    switch (e) {
        case `revoked`:
            return t.formatMessage(Y.revokedStatus);
        case `expired`:
            return t.formatMessage(Y.expiredStatus);
        case `active`:
            return t.formatMessage(Y.activeStatus)
    }
}

function ht(e) {
    return `${e.tokenVersion}:${e.id}`
}
var q, gt, J, _t, Y, vt = e((() => {
    q = L(), $e(), Pe(), Ie(), d(), ce(), ve(), me(), i(), xe(), Oe(), s(), gt = t(re()), P(), J = A(), _t = 7, Y = M({
        nameColumn: {
            id: `chatgpt.access_tokens.table.column.name`,
            defaultMessage: `Name`
        },
        createdByColumn: {
            id: `chatgpt.access_tokens.table.column.created_by`,
            defaultMessage: `Created by`
        },
        dateAddedColumn: {
            id: `chatgpt.access_tokens.table.column.date_added`,
            defaultMessage: `Date added`
        },
        accessTokenIdLabel: {
            id: `chatgpt.access_tokens.details.id.label`,
            defaultMessage: `Access token ID`
        },
        tokenUseCaseLabel: {
            id: `chatgpt.access_tokens.details.use_case.label`,
            defaultMessage: `Use with`
        },
        workspaceAgentsUseCase: {
            id: `chatgpt.access_tokens.use_case.workspace_agents.label`,
            defaultMessage: `Workspace Agents`
        },
        codexUseCase: {
            id: `chatgpt.access_tokens.use_case.codex.label`,
            defaultMessage: `Codex`
        },
        codexSecurityUseCase: {
            id: `chatgpt.access_tokens.use_case.codex_security.label`,
            defaultMessage: `Codex Security`
        },
        lastUsedColumn: {
            id: `chatgpt.access_tokens.table.column.last_used.short_label`,
            defaultMessage: `Last used`
        },
        expiresColumn: {
            id: `chatgpt.access_tokens.details.expires.label`,
            defaultMessage: `Expires at`
        },
        statusColumn: {
            id: `chatgpt.access_tokens.table.column.status`,
            defaultMessage: `Status`
        },
        actionsButtonLabel: {
            id: `chatgpt.access_tokens.table.row_actions.aria_label`,
            defaultMessage: `Actions for {name}`
        },
        revokeAction: {
            id: `chatgpt.access_tokens.table.action.revoke`,
            defaultMessage: `Revoke`
        },
        notAvailable: {
            id: `chatgpt.access_tokens.details.not_available`,
            defaultMessage: `Not available`
        },
        noExpiration: {
            id: `chatgpt.access_tokens.details.no_expiration`,
            defaultMessage: `No expiration`
        },
        noRecentUsage: {
            id: `chatgpt.access_tokens.table.no_recent_usage`,
            defaultMessage: `No usage`
        },
        lastUsedWindowInfoLabel: {
            id: `chatgpt.access_tokens.table.last_used_window.info_label`,
            defaultMessage: `Last used time window`
        },
        lastUsedWindowTooltip: {
            id: `chatgpt.access_tokens.table.last_used_window.codex_usage.tooltip`,
            defaultMessage: `Includes Codex usage from {start} to now.`
        },
        activeStatus: {
            id: `chatgpt.access_tokens.status.active`,
            defaultMessage: `Active`
        },
        expiredStatus: {
            id: `chatgpt.access_tokens.status.expired`,
            defaultMessage: `Expired`
        },
        revokedStatus: {
            id: `chatgpt.access_tokens.status.revoked`,
            defaultMessage: `Revoked`
        }
    })
}));

function yt(e) {
    "use forget";
    let t = (0, Mt.c)(143),
        {
            canCreateAccessTokens: r,
            listScope: i,
            showChatGptUseCaseSelector: a
        } = e,
        o = r === void 0 || r,
        s = a !== void 0 && a,
        c = oe(),
        u = ne(),
        d = ee(),
        m = h(),
        g = p(),
        {
            signInForReauth: _
        } = le(),
        [v] = j(),
        [x, w] = (0, X.useState)(``),
        [T, E] = (0, X.useState)(``),
        [D, O] = (0, X.useState)(0),
        k;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (k = [null], t[0] = k) : k = t[0];
    let [A, M] = (0, X.useState)(k), [N, P] = (0, X.useState)(!1), F, re, I;
    if (t[1] !== s) {
        let e = b();
        I = e?.getWorkspaceId(), F = s && S(`440220680`), re = De(e?.planType), t[1] = s, t[2] = F, t[3] = re, t[4] = I
    } else F = t[2], re = t[3], I = t[4];
    let L = o && (s || re),
        R = We(i),
        ce = n(I, St),
        ue;
    t[5] === I ? ue = t[6] : (ue = [`auth-credential-available-scopes`, I], t[5] = I, t[6] = ue);
    let de;
    t[7] !== L || t[8] !== ue ? (de = {
        queryKey: ue,
        queryFn: xt,
        enabled: L
    }, t[7] = L, t[8] = ue, t[9] = de) : de = t[9];
    let z = te(de),
        pe, B, me;
    if (t[10] !== z.data?.scopes || t[11] !== v || t[12] !== s) {
        pe = z.data?.scopes ?? [], B = s ? qe(pe) : [`codex`];
        let e = v.getAll(Ft).filter(Ct);
        me = s ? B.filter(t => e.includes(t)) : [`codex`], t[10] = z.data?.scopes, t[11] = v, t[12] = s, t[13] = pe, t[14] = B, t[15] = me
    } else pe = t[13], B = t[14], me = t[15];
    let he = me,
        _e = I != null && (ce.isPending || ce.isError || ce.data === void 0 || !s && !ce.data.codexLocalAccessEnabled),
        ve;
    t[16] !== pe || t[17] !== z.isError || t[18] !== z.isPending || t[19] !== B || t[20] !== L || t[21] !== s ? (ve = L && (z.isPending || z.isError || (s ? B.length === 0 : !pe.includes(`chatgpt.workspace.feature.allow-codex-local-access.access`))), t[16] = pe, t[17] = z.isError, t[18] = z.isPending, t[19] = B, t[20] = L, t[21] = s, t[22] = ve) : ve = t[22];
    let ye = !o || _e || ve,
        be;
    t[23] === T ? be = t[24] : (be = T.trim(), t[23] = T, t[24] = be);
    let xe = be,
        Se = A[D] ?? null,
        Ce;
    t[25] === Se ? Ce = t[26] : (Ce = Et(Se), t[25] = Se, t[26] = Ce);
    let we = Ce,
        Te;
    t[27] !== Se || t[28] !== xe || t[29] !== s ? (Te = {
        cursor: Se,
        limit: It,
        query: xe,
        showChatGptUseCaseSelector: s
    }, t[27] = Se, t[28] = xe, t[29] = s, t[30] = Te) : Te = t[30];
    let Ee;
    t[31] !== we || t[32] !== i || t[33] !== xe || t[34] !== s ? (Ee = e => {
        let {
            signal: t
        } = e;
        return Tt({
            cursor: we,
            listScope: i,
            query: xe,
            showChatGptUseCaseSelector: s,
            signal: t
        })
    }, t[31] = we, t[32] = i, t[33] = xe, t[34] = s, t[35] = Ee) : Ee = t[35];
    let V = te({
            queryKey: [...R, Te],
            queryFn: Ee,
            placeholderData: ae
        }),
        Oe;
    t[36] !== d || t[37] !== R ? (Oe = {
        mutationFn: Ye,
        onSuccess: () => {
            d.invalidateQueries({
                queryKey: R
            })
        }
    }, t[36] = d, t[37] = R, t[38] = Oe) : Oe = t[38];
    let Ae = ie(Oe),
        je;
    t[39] !== c || t[40] !== d || t[41] !== R || t[42] !== m ? (je = () => {
        m.success(c.formatMessage(Lt.revokeSuccess), {
            duration: 3
        }), d.invalidateQueries({
            queryKey: R
        })
    }, t[39] = c, t[40] = d, t[41] = R, t[42] = m, t[43] = je) : je = t[43];
    let Me;
    t[44] !== c || t[45] !== m ? (Me = () => {
        m.danger(c.formatMessage(Lt.revokeError), {
            duration: 3
        })
    }, t[44] = c, t[45] = m, t[46] = Me) : Me = t[46];
    let Ne;
    t[47] !== je || t[48] !== Me ? (Ne = {
        mutationFn: bt,
        onSuccess: je,
        onError: Me
    }, t[47] = je, t[48] = Me, t[49] = Ne) : Ne = t[49];
    let H = ie(Ne);
    V.data?.authCredentials, V.data?.codexIdentities;
    let Pe;
    if (t[50] !== V.data?.authCredentials || t[51] !== V.data?.codexIdentities) {
        let e = (V.data?.codexIdentities ?? []).map(At),
            n = (V.data?.authCredentials ?? []).map(jt);
        Pe = [...e, ...n].sort(kt), t[50] = V.data?.authCredentials, t[51] = V.data?.codexIdentities, t[52] = Pe
    } else Pe = t[52];
    let Fe = Pe,
        Ie;
    t[53] === v ? Ie = t[54] : (Ie = v.get(Nt), t[53] = v, t[54] = Ie);
    let U = Ie === Pt,
        Le;
    t[55] === Symbol.for(`react.memo_cache_sentinel`) ? (Le = C(e => {
        E(e), O(0), M([null])
    }, 300, {
        leading: !1,
        trailing: !0
    }), t[55] = Le) : Le = t[55];
    let ze = Le,
        Be, Ve;
    t[56] === Symbol.for(`react.memo_cache_sentinel`) ? (Be = () => () => ze.cancel(), Ve = [ze], t[56] = Be, t[57] = Ve) : (Be = t[56], Ve = t[57]), (0, X.useEffect)(Be, Ve);
    let Ge;
    t[58] === Symbol.for(`react.memo_cache_sentinel`) ? (Ge = () => {
        O(0), M([null])
    }, t[58] = Ge) : Ge = t[58];
    let Ke;
    t[59] !== i || t[60] !== s ? (Ke = [i, s], t[59] = i, t[60] = s, t[61] = Ke) : Ke = t[61], (0, X.useEffect)(Ge, Ke);
    let Je;
    t[62] !== V.data?.cursor || t[63] !== V.isPlaceholderData || t[64] !== D ? (Je = () => {
        let e = V.data?.cursor;
        V.isPlaceholderData || e == null || M(t => t[D + 1] == null ? [...t, e] : t)
    }, t[62] = V.data?.cursor, t[63] = V.isPlaceholderData, t[64] = D, t[65] = Je) : Je = t[65];
    let Xe = V.data?.cursor,
        Ze;
    t[66] !== V.isPlaceholderData || t[67] !== D || t[68] !== Xe ? (Ze = [Xe, V.isPlaceholderData, D], t[66] = V.isPlaceholderData, t[67] = D, t[68] = Xe, t[69] = Ze) : Ze = t[69], (0, X.useEffect)(Je, Ze);
    let Qe;
    t[70] !== v || t[71] !== _ || t[72] !== g?.email || t[73] !== g?.phone_number ? (Qe = async e => {
        let t = new URLSearchParams(v);
        t.set(Nt, Pt), t.delete(Ft);
        for (let n of new Set(e)) t.append(Ft, n);
        let n = new URL(window.location.href);
        n.search = t.toString(), await _({
            callbackUrl: n.toString(),
            authorizationParams: ke(g?.email ?? g?.phone_number)
        })
    }, t[70] = v, t[71] = _, t[72] = g?.email, t[73] = g?.phone_number, t[74] = Qe) : Qe = t[74];
    let $e = Qe,
        tt;
    t[75] !== c || t[76] !== u || t[77] !== v || t[78] !== s || t[79] !== $e || t[80] !== m ? (tt = async () => {
        let e = new URLSearchParams(v);
        if (e.set(Nt, Pt), !s) {
            P(!0);
            try {
                await He()
            } catch (e) {
                let t = e;
                if (P(!1), t instanceof l && t.code === `phone_verification_required`) {
                    await $e([`codex`]);
                    return
                }
                m.danger(c.formatMessage(Lt.createError), {
                    duration: 3
                });
                return
            }
            P(!1)
        }
        u({
            pathname: window.location.pathname,
            search: e.toString()
        })
    }, t[75] = c, t[76] = u, t[77] = v, t[78] = s, t[79] = $e, t[80] = m, t[81] = tt) : tt = t[81];
    let nt = tt,
        rt;
    t[82] !== u || t[83] !== v ? (rt = () => {
        let e = new URLSearchParams(v);
        e.delete(Nt), e.delete(Ft), u({
            pathname: window.location.pathname,
            search: e.toString()
        }, {
            replace: !0
        })
    }, t[82] = u, t[83] = v, t[84] = rt) : rt = t[84];
    let it = rt,
        at;
    t[85] === Symbol.for(`react.memo_cache_sentinel`) ? (at = e => {
        w(e.target.value), ze(e.target.value)
    }, t[85] = at) : at = t[85];
    let W;
    t[86] === c ? W = t[87] : (W = c.formatMessage(Lt.searchPlaceholder), t[86] = c, t[87] = W);
    let ot;
    t[88] !== x || t[89] !== W ? (ot = (0, Z.jsx)(fe, {
        value: x,
        onChange: at,
        placeholder: W,
        inputClassName: `rounded-full! text-sm`
    }), t[88] = x, t[89] = W, t[90] = ot) : ot = t[90];
    let st = ye || N,
        G;
    t[91] === c ? G = t[92] : (G = c.formatMessage(Lt.createButton), t[91] = c, t[92] = G);
    let K;
    t[93] !== nt || t[94] !== st || t[95] !== G ? (K = (0, Z.jsx)(y, {
        color: `primary`,
        icon: ge,
        onClick: nt,
        disabled: st,
        className: `shrink-0`,
        children: G
    }), t[93] = nt, t[94] = st, t[95] = G, t[96] = K) : K = t[96];
    let ct;
    t[97] !== ot || t[98] !== K ? (ct = (0, Z.jsxs)(`div`, {
        className: `mb-4.5 flex items-center justify-between gap-3`,
        children: [ot, K]
    }), t[97] = ot, t[98] = K, t[99] = ct) : ct = t[99];
    let lt;
    t[100] !== V.isError || t[101] !== V.isPending || t[102] !== c ? (lt = V.isError ? c.formatMessage(Lt.loadError) : V.isPending ? c.formatMessage(Lt.loading) : void 0, t[100] = V.isError, t[101] = V.isPending, t[102] = c, t[103] = lt) : lt = t[103];
    let ut;
    t[104] === H ? ut = t[105] : (ut = e => H.mutate(e), t[104] = H, t[105] = ut);
    let dt;
    t[106] !== H.isPending || t[107] !== H.variables ? (dt = H.isPending ? H.variables == null ? void 0 : ht(H.variables) : void 0, t[106] = H.isPending, t[107] = H.variables, t[108] = dt) : dt = t[108];
    let ft = i === `workspace`,
        pt;
    t[109] !== Fe || t[110] !== lt || t[111] !== ut || t[112] !== dt || t[113] !== ft ? (pt = (0, Z.jsx)(et, {
        identities: Fe,
        emptyMessage: lt,
        onRevokeIdentity: ut,
        revokingIdentityId: dt,
        showCreatedByColumn: ft
    }), t[109] = Fe, t[110] = lt, t[111] = ut, t[112] = dt, t[113] = ft, t[114] = pt) : pt = t[114];
    let mt;
    t[115] === V.isPlaceholderData ? mt = t[116] : (mt = V.isPlaceholderData && (0, Z.jsx)(`div`, {
        className: `bg-primary/50 absolute inset-0 z-20 flex items-center justify-center`,
        children: (0, Z.jsx)(f, {})
    }), t[115] = V.isPlaceholderData, t[116] = mt);
    let q;
    t[117] !== pt || t[118] !== mt ? (q = (0, Z.jsxs)(`div`, {
        className: `relative`,
        children: [pt, mt]
    }), t[117] = pt, t[118] = mt, t[119] = q) : q = t[119];
    let gt;
    t[120] !== A || t[121] !== D ? (gt = wt({
        pageCursors: A,
        pageIndex: D
    }) > 1 && (0, Z.jsx)(`div`, {
        className: `relative mt-4 mb-8 min-h-[20px]`,
        children: (0, Z.jsx)(`div`, {
            className: `absolute start-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 justify-center`,
            children: (0, Z.jsx)(se, {
                currentPage: D,
                onChangeIndex: O,
                length: wt({
                    pageCursors: A,
                    pageIndex: D
                })
            })
        })
    }), t[120] = A, t[121] = D, t[122] = gt) : gt = t[122];
    let J;
    t[123] !== B || t[124] !== it || t[125] !== Ae || t[126] !== he || t[127] !== U || t[128] !== ye || t[129] !== d || t[130] !== R || t[131] !== F || t[132] !== s || t[133] !== $e || t[134] !== g?.id || t[135] !== I || t[136] !== ce ? (J = !ye && (0, Z.jsx)(Re, {
        isOpen: U,
        onClose: it,
        onCreate: Ae.mutateAsync,
        onPrepare: F ? Ue : void 0,
        onPhoneVerificationRequired: $e,
        availableUseCases: B,
        initialUseCases: he,
        version: s ? `v2` : `v1`,
        maxTtlSeconds: ce.data?.maxTtlSeconds ?? null,
        onCreated: () => {
            d.invalidateQueries({
                queryKey: R
            })
        }
    }, `${g?.id}:${I}:${F}`), t[123] = B, t[124] = it, t[125] = Ae, t[126] = he, t[127] = U, t[128] = ye, t[129] = d, t[130] = R, t[131] = F, t[132] = s, t[133] = $e, t[134] = g?.id, t[135] = I, t[136] = ce, t[137] = J) : J = t[137];
    let _t;
    return t[138] !== ct || t[139] !== q || t[140] !== gt || t[141] !== J ? (_t = (0, Z.jsxs)(`div`, {
        className: `mt-6`,
        children: [ct, q, gt, J]
    }), t[138] = ct, t[139] = q, t[140] = gt, t[141] = J, t[142] = _t) : _t = t[142], _t
}
async function bt(e) {
    if (e.tokenVersion === `v2`) {
        await Ke(e.id);
        return
    }
    await Je(e.id)
}

function xt(e) {
    let {
        signal: t
    } = e;
    return Ze({
        signal: t
    })
}

function St(e) {
    return {
        codexLocalAccessEnabled: e.permissions?.includes(`chatgpt.workspace.feature.allow-codex-local-access.access`) ?? e.beta_settings.wham_local_access ?? !0,
        maxTtlSeconds: e.access_token_max_ttl ?? null
    }
}

function Ct(e) {
    return e === `codex` || e === `codex_security` || e === `workspace_agents`
}

function wt({
    pageCursors: e,
    pageIndex: t
}) {
    return Math.max(e.length, t + 1)
}
async function Tt({
    cursor: e,
    listScope: t,
    query: n,
    showChatGptUseCaseSelector: r,
    signal: i
}) {
    let [a, o] = await Promise.all([e.codex === void 0 ? Promise.resolve({
        items: [],
        cursor: null
    }) : Ve({
        cursor: e.codex,
        limit: It,
        query: n,
        scope: t,
        signal: i
    }).catch(e => {
        if (r && e instanceof l && e.status === 403) return {
            items: [],
            cursor: null
        };
        throw e
    }), !r || e.chatgpt === void 0 ? Promise.resolve({
        items: [],
        cursor: null
    }) : Ge({
        cursor: e.chatgpt,
        limit: It,
        query: n,
        scope: t,
        signal: i
    })]);
    return {
        authCredentials: o.items,
        codexIdentities: a.items,
        cursor: Dt(Ot({
            authCredentialsCursor: o.cursor,
            codexCursor: a.cursor,
            currentPageCursor: e,
            showChatGptUseCaseSelector: r
        }))
    }
}

function Et(e) {
    return e == null ? {
        chatgpt: null,
        codex: null
    } : JSON.parse(e)
}

function Dt(e) {
    return e == null ? null : JSON.stringify(e)
}

function Ot({
    authCredentialsCursor: e,
    codexCursor: t,
    currentPageCursor: n,
    showChatGptUseCaseSelector: r
}) {
    let i = {
        chatgpt: r && n.chatgpt !== void 0 && e != null ? e : void 0,
        codex: n.codex !== void 0 && t != null ? t : void 0
    };
    return i.chatgpt === void 0 && i.codex === void 0 ? null : i
}

function kt(e, t) {
    return t.createdAt.localeCompare(e.createdAt)
}

function At(e) {
    return {
        id: e.agent_runtime_id,
        tokenUseCases: [`codex`],
        tokenVersion: `v1`,
        name: e.name,
        createdAt: new Date(e.created_at * 1e3).toISOString(),
        createdBy: e.creator_user_display_name,
        createdByEmail: e.creator_user_email,
        expiresAt: e.expires_at == null ? null : new Date(e.expires_at * 1e3).toISOString(),
        lastUsedAt: e.last_used_at ?? null,
        status: e.revoked ? `revoked` : e.expired ? `expired` : `active`
    }
}

function jt(e) {
    let t = qe(e.scopes);
    return {
        id: e.credential_id,
        tokenUseCases: t,
        tokenVersion: `v2`,
        name: e.name,
        createdAt: new Date(e.created_at * 1e3).toISOString(),
        createdBy: e.creator_user_display_name,
        createdByEmail: e.creator_user_email,
        expiresAt: e.expires_at == null ? null : new Date(e.expires_at * 1e3).toISOString(),
        lastUsedAt: t.includes(`codex`) ? e.last_used_at : void 0,
        serviceAccountId: e.owner_user_id,
        status: e.revoked ? `revoked` : e.expired ? `expired` : `active`
    }
}
var Mt, X, Z, Nt, Pt, Ft, It, Lt, Rt = e((() => {
    Mt = L(), r(), R(), he(), ue(), a(), de(), je(), T(), c(), m(), x(), _(), E(), I(), g(), X = t(re()), P(), O(), Xe(), vt(), Le(), Ee(), Z = A(), Nt = `modal`, Pt = `create`, Ft = `token_use_case`, It = 25, Lt = M({
        searchPlaceholder: {
            id: `chatgpt.access_tokens.table.search.placeholder`,
            defaultMessage: `Filter by name`
        },
        createButton: {
            id: `chatgpt.access_tokens.create.button.open`,
            defaultMessage: `Create`
        },
        createError: {
            id: `chatgpt.access_tokens.create.toast.prepare_error`,
            defaultMessage: `Couldn't prepare access token creation`
        },
        loading: {
            id: `chatgpt.access_tokens.table.loading`,
            defaultMessage: `Loading access tokens`
        },
        loadError: {
            id: `chatgpt.access_tokens.table.load_error`,
            defaultMessage: `Couldn't load access tokens`
        },
        revokeSuccess: {
            id: `chatgpt.access_tokens.revoke.toast.success`,
            defaultMessage: `Access token revoked`
        },
        revokeError: {
            id: `chatgpt.access_tokens.revoke.toast.error`,
            defaultMessage: `Couldn't revoke access token`
        }
    })
}));

function zt(e) {
    "use forget";
    let t = (0, Bt.c)(34),
        {
            permissions: n,
            role: r
        } = e,
        i = oe(),
        a, s, c, l;
    if (t[0] !== n || t[1] !== r) {
        c = r != null && z(r);
        let e;
        t[6] === n ? e = t[7] : (e = Te(n, b()?.planType), t[6] = n, t[7] = e), a = e, s = c || a, l = Ce({
            permissions: n,
            hasWorkspaceAdminRole: c
        }) ? `workspace` : `user`, t[0] = n, t[1] = r, t[2] = a, t[3] = s, t[4] = c, t[5] = l
    } else a = t[2], s = t[3], c = t[4], l = t[5];
    let u = l,
        d;
    t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (d = Se(), t[8] = d) : d = t[8];
    let f = d,
        p = f ? $.chatgptAndCodexSubtitle : $.subtitle,
        m;
    t[9] === i ? m = t[10] : (m = i.formatMessage($.title), t[9] = i, t[10] = m);
    let h;
    t[11] === m ? h = t[12] : (h = (0, Q.jsx)(H, {
        children: (0, Q.jsx)(`title`, {
            children: m
        })
    }), t[11] = m, t[12] = h);
    let g;
    t[13] === i ? g = t[14] : (g = i.formatMessage($.title), t[13] = i, t[14] = g);
    let _;
    t[15] === i ? _ = t[16] : (_ = i.formatMessage(p), t[15] = i, t[16] = _);
    let v;
    t[17] !== g || t[18] !== _ ? (v = (0, Q.jsx)(Me, {
        contentWidth: `medium`,
        title: g,
        subtitle: _
    }), t[17] = g, t[18] = _, t[19] = v) : v = t[19];
    let x;
    t[20] !== a || t[21] !== c ? (x = !a && (0, Q.jsx)(o, {
        className: `mt-6`,
        type: `info`,
        title: (0, Q.jsx)(N, {
            ...$.disabledTitle
        }),
        content: (0, Q.jsx)(N, {
            ...c ? $.adminDisabledBody : $.memberDisabledBody
        }),
        customCtas: c ? (0, Q.jsx)(y, {
            as: `link`,
            to: `/admin/permissions`,
            size: `small`,
            children: (0, Q.jsx)(N, {
                ...$.permissionsCta
            })
        }) : void 0
    }), t[20] = a, t[21] = c, t[22] = x) : x = t[22];
    let S;
    t[23] !== a || t[24] !== s || t[25] !== u ? (S = s && (0, Q.jsx)(yt, {
        canCreateAccessTokens: a,
        listScope: u,
        showChatGptUseCaseSelector: f
    }), t[23] = a, t[24] = s, t[25] = u, t[26] = S) : S = t[26];
    let C;
    t[27] !== x || t[28] !== S ? (C = (0, Q.jsxs)(we, {
        contentWidth: `medium`,
        children: [x, S]
    }), t[27] = x, t[28] = S, t[29] = C) : C = t[29];
    let w;
    return t[30] !== C || t[31] !== h || t[32] !== v ? (w = (0, Q.jsxs)(Q.Fragment, {
        children: [h, v, C]
    }), t[30] = C, t[31] = h, t[32] = v, t[33] = w) : w = t[33], w
}
var Bt, Q, $, Vt = e((() => {
        Bt = L(), Ae(), pe(), r(), u(), T(), Ne(), P(), Rt(), Ee(), Q = A(), $ = M({
            title: {
                id: `chatgpt.access_tokens.page.title`,
                defaultMessage: `Access tokens`
            },
            subtitle: {
                id: `chatgpt.access_tokens.page.subtitle`,
                defaultMessage: `Create and manage access tokens for Codex programmatic use cases.`
            },
            chatgptAndCodexSubtitle: {
                id: `chatgpt.access_tokens.page.subtitle.chatgpt_and_codex`,
                defaultMessage: `Create and manage access tokens for ChatGPT and Codex programmatic use cases.`
            },
            disabledTitle: {
                id: `chatgpt.access_tokens.page.disabled.title`,
                defaultMessage: `Access token creation is disabled`
            },
            adminDisabledBody: {
                id: `chatgpt.access_tokens.page.disabled.admin_body`,
                defaultMessage: `Enable "Allow users to create personal access tokens" in ChatGPT > Admin > Permissions & roles > Access tokens to let workspace members create access tokens.`
            },
            memberDisabledBody: {
                id: `chatgpt.access_tokens.page.disabled.member_body`,
                defaultMessage: `Ask your admin to enable "Allow users to create personal access tokens" in ChatGPT > Admin > Permissions & roles > Access tokens.`
            },
            permissionsCta: {
                id: `chatgpt.access_tokens.page.disabled.permissions_cta`,
                defaultMessage: `Go to Permissions & roles`
            }
        })
    })),
    Ht, Ut, Wt, Gt = e((() => {
        O(), Ht = L(), Vt(), Be(), Ut = A(), Wt = F(function() {
            "use forget";
            let e = (0, Ht.c)(3),
                {
                    role: t
                } = ze(),
                {
                    permissions: n
                } = k(),
                r;
            return e[0] !== n || e[1] !== t ? (r = (0, Ut.jsx)(zt, {
                permissions: n,
                role: t
            }), e[0] = n, e[1] = t, e[2] = r) : r = e[2], r
        })
    }));
e((() => {
    Gt()
}))();
export {
    Wt as
    default
};
//# sourceMappingURL=admin.access-tokens-fsv4e1yy.js.map
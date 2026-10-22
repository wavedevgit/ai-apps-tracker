import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    A8 as r,
    B_ as i,
    J5 as a,
    L_ as o,
    Lnt as s,
    U1 as c,
    Yi as l,
    Zf as u,
    Zi as d,
    _E as f,
    dY as p,
    eE as m,
    eY as h,
    ep as g,
    g5 as _,
    l7 as v,
    lV as y,
    m_ as b,
    q1 as x,
    r_ as S,
    tV as C,
    tp as w,
    u7 as T,
    v5 as E,
    yE as D,
    znt as O
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Bn as k,
    Nn as A,
    Q as j,
    Rn as M,
    Vn as N,
    it as P,
    wn as F,
    zn as I
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    IAt as ee,
    KGn as L,
    LAt as te,
    ijt as ne,
    qGn as re,
    rjt as ie
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    Eh as ae,
    Th as oe
} from "./30901919-k5uqyx4vyplt9toa.js";
import {
    Hg as se,
    Kp as R,
    qp as ce,
    zg as le
} from "./8b34dbc2-bgocf3s6t6l67twq.js";

function ue({
    children: e,
    className: t
}) {
    return (0, B.jsx)(`li`, {
        className: v(V, t),
        children: e
    })
}

function de({
    leading: e,
    title: t,
    subtitle: n,
    skeleton: r,
    className: i,
    wrapTitle: a = !0,
    titleFontWeight: o = `medium`
}) {
    let s = t != null || r === !0,
        c = n != null || !!r,
        l = a ? (0, B.jsx)(`div`, {
            className: v(`text-sm`, o === `normal` ? `font-normal` : o === `semibold` ? `font-semibold` : `font-medium`, r === !0 && `skeleton-child h-6 w-fit min-w-[50%]`),
            children: t
        }) : t;
    return (0, B.jsxs)(`div`, {
        className: v(`flex w-full items-center gap-4`, r && `group skeleton`, i),
        children: [e, (0, B.jsxs)(`div`, {
            className: `grow overflow-hidden`,
            children: [s && l, c && (0, B.jsx)(`div`, {
                className: v(`text-token-text-secondary min-h-0 truncate text-sm`, r && v(`skeleton-child mt-2 h-6`, r === `snippet` ? `w-2/5` : `w-fit`)),
                children: n
            })]
        })]
    })
}

function z({
    children: e,
    className: t
}) {
    return (0, B.jsx)(`div`, {
        className: v(`text-token-text-tertiary relative flex min-h-10 min-w-10 shrink-0 items-center justify-end gap-2 text-sm`, t),
        children: e
    })
}
var B, V, H = e((() => {
        T(), B = k(), V = `group/project-item hover:bg-token-interactive-bg-secondary-hover active:bg-token-interactive-bg-secondary-press flex min-h-16 cursor-pointer items-center p-3 text-sm select-none`
    })),
    U, W, G, K, fe = e((() => {
        U = F(), ce(), H(), D(), O(), T(), W = t(N()), M(), G = k(), K = e => {
            "use forget";
            let t = (0, U.c)(27),
                {
                    conversation: n,
                    conversationTitle: r,
                    isNewProjectPage: i
                } = e,
                a = i !== void 0 && i,
                [o, c] = (0, W.useState)(!1),
                l = I(),
                u;
            if (t[0] !== n.title || t[1] !== r || t[2] !== l) {
                let e = r?.trim() || n.title?.trim();
                u = e ? l.formatMessage(f.projectConversationActionsMenuLabel, {
                    title: e
                }) : void 0, t[0] = n.title, t[1] = r, t[2] = l, t[3] = u
            } else u = t[3];
            let d = u,
                p;
            t[4] !== n.update_time || t[5] !== l ? (p = n.update_time && Intl.DateTimeFormat(l.locale, {
                month: `short`,
                day: `numeric`
            }).format(new Date(n.update_time)), t[4] = n.update_time, t[5] = l, t[6] = p) : p = t[6];
            let m = p,
                h;
            t[7] !== m || t[8] !== o || t[9] !== a ? (h = !!m && (0, G.jsx)(`span`, {
                "aria-hidden": `true`,
                className: v(`whitespace-nowrap`, !a && `transition-opacity duration-100 ease-out`, o ? `opacity-0` : `can-hover:group-hover/project-item:opacity-0 can-hover:group-focus-within/project-item:opacity-0 opacity-100`),
                "data-testid": `project-conversation-overflow-date`,
                children: m
            }), t[7] = m, t[8] = o, t[9] = a, t[10] = h) : h = t[10];
            let g = !a && `transition-opacity duration-100 ease-out`,
                _ = !o && `can-hover:opacity-0 can-hover:pointer-events-none`,
                y = o && `pointer-events-auto opacity-100`,
                b;
            t[11] !== g || t[12] !== _ || t[13] !== y ? (b = v(`flex items-center gap-1.5`, g, `can-hover:absolute can-hover:inset-y-0 can-hover:end-0`, _, `can-hover:group-hover/project-item:opacity-100`, `can-hover:group-hover/project-item:pointer-events-auto`, `can-hover:group-focus-within/project-item:opacity-100`, `can-hover:group-focus-within/project-item:pointer-events-auto`, `cant-hover:opacity-100 cant-hover:pointer-events-auto`, y), t[11] = g, t[12] = _, t[13] = y, t[14] = b) : b = t[14];
            let x;
            t[15] === n.id ? x = t[16] : (x = e => {
                c(e), e && s.logEvent(`Conversation History Item Open Menu`, {
                    conversationId: n.id
                })
            }, t[15] = n.id, t[16] = x);
            let S;
            t[17] !== d || t[18] !== n || t[19] !== x ? (S = (0, G.jsx)(R, {
                conversation: n,
                ariaLabel: d,
                onOpenChange: x,
                inMainScreen: !0,
                isActiveConversation: !1
            }), t[17] = d, t[18] = n, t[19] = x, t[20] = S) : S = t[20];
            let C;
            t[21] !== S || t[22] !== b ? (C = (0, G.jsx)(`div`, {
                className: b,
                "data-prevent-default": !0,
                "data-testid": `project-conversation-overflow-menu`,
                children: S
            }), t[21] = S, t[22] = b, t[23] = C) : C = t[23];
            let w;
            return t[24] !== C || t[25] !== h ? (w = (0, G.jsxs)(z, {
                children: [h, C]
            }), t[24] = C, t[25] = h, t[26] = w) : w = t[26], w
        }
    }));

function pe(e) {
    "use forget";
    let t = (0, Y.c)(11),
        {
            project: n,
            onNavigateToConversation: r
        } = e;
    b(n.id);
    let i;
    t[0] === n ? i = t[1] : (i = () => n.conversations$().all$(), t[0] = n, t[1] = i);
    let o = a(i),
        s;
    t[2] === n ? s = t[3] : (s = () => n.conversations$().canShowConversations$(), t[2] = n, t[3] = s);
    let c = a(s),
        l;
    t[4] !== c || t[5] !== o || t[6] !== r || t[7] !== n ? (l = c && (0, Z.jsx)(me, {
        items: o,
        project: n,
        onNavigateToConversation: r
    }), t[4] = c, t[5] = o, t[6] = r, t[7] = n, t[8] = l) : l = t[8];
    let u;
    return t[9] === l ? u = t[10] : (u = (0, Z.jsx)(`section`, {
        children: l
    }), t[9] = l, t[10] = u), u
}

function me(e) {
    "use forget";
    let t = (0, Y.c)(45),
        {
            project: r,
            items: i,
            onNavigateToConversation: o
        } = e,
        s;
    t[0] === r ? s = t[1] : (s = () => r.conversations$().canFetchMore$(), t[0] = r, t[1] = s);
    let c = a(s),
        u;
    t[2] === r ? u = t[3] : (u = () => r.gizmo$(), t[2] = r, t[3] = u);
    let d = a(u),
        f;
    t[4] === r ? f = t[5] : (f = () => r.conversations$().awaitingManualRetry$(), t[4] = r, t[5] = f);
    let p = a(f),
        m;
    t[6] === r ? m = t[7] : (m = () => r.conversations$().fetchMore$, t[6] = r, t[7] = m);
    let h = a(m),
        g;
    t[8] === r ? g = t[9] : (g = () => r.conversations$().cursor$(), t[8] = r, t[9] = g);
    let _ = a(g),
        y;
    t[10] === r ? y = t[11] : (y = () => r.conversations$().isLoading$(), t[10] = r, t[11] = y);
    let b = a(y),
        x;
    t[12] === r ? x = t[13] : (x = () => r.isShared$(), t[12] = r, t[13] = x);
    let S = a(x),
        C = b,
        w;
    t[14] !== i || t[15] !== d?.gizmo?.author ? (w = i?.some(e => `owner` in e && e.owner?.user_id !== d?.gizmo?.author.user_id), t[14] = i, t[15] = d?.gizmo?.author, t[16] = w) : w = t[16];
    let T = S === !0 || w === !0,
        E = C && `skeleton`,
        D;
    t[17] === E ? D = t[18] : (D = v(`divide-token-bg-tertiary group divide-y`, E), t[17] = E, t[18] = D);
    let O;
    t[19] !== i || t[20] !== o || t[21] !== d || t[22] !== T ? (O = d && i && i.map(e => (0, Z.jsx)(ue, {
        children: (0, Z.jsx)($, {
            conversation: e,
            project: d,
            showAvatar: T ?? !1,
            onNavigateToConversation: o
        })
    }, e.id)), t[19] = i, t[20] = o, t[21] = d, t[22] = T, t[23] = O) : O = t[23];
    let k;
    t[24] !== c || t[25] !== h || t[26] !== b ? (k = !b && c && (0, Z.jsx)(n, {
        type: `button`,
        onClick: h,
        className: `keyboard-not-focused:sr-only`,
        children: (0, Z.jsx)(A, {
            id: `project.conversation-list.load-more`,
            defaultMessage: `Load more conversations`
        })
    }), t[24] = c, t[25] = h, t[26] = b, t[27] = k) : k = t[27];
    let j;
    t[28] !== p || t[29] !== r ? (j = p && (0, Z.jsx)(l, {
        type: `normal`,
        className: `mt-2`,
        dangerCtaText: `Try again`,
        onDangerCtaClick: () => {
            r.conversations$().awaitingManualRetry$.set(!1)
        },
        content: (0, Z.jsx)(A, {
            id: `project.conversation-list.awaiting-manual-retry`,
            defaultMessage: `Loading more conversations failed. Please try again.`
        }),
        icon: (0, Z.jsx)(oe, {
            className: `icon`
        })
    }), t[28] = p, t[29] = r, t[30] = j) : j = t[30];
    let M;
    t[31] === C ? M = t[32] : (M = C && (0, Z.jsx)(q, {}), t[31] = C, t[32] = M);
    let N;
    t[33] !== c || t[34] !== _ || t[35] !== h ? (N = (0, Z.jsx)(he, {
        canFetchMore: c,
        fetchMore: h
    }, _), t[33] = c, t[34] = _, t[35] = h, t[36] = N) : N = t[36];
    let P;
    return t[37] !== b || t[38] !== D || t[39] !== O || t[40] !== k || t[41] !== j || t[42] !== M || t[43] !== N ? (P = (0, Z.jsxs)(`ol`, {
        className: D,
        "aria-busy": b,
        children: [O, k, j, M, N]
    }), t[37] = b, t[38] = D, t[39] = O, t[40] = k, t[41] = j, t[42] = M, t[43] = N, t[44] = P) : P = t[44], P
}

function q(e) {
    "use forget";
    let t = (0, Y.c)(13),
        {
            count: n,
            showAvatar: r
        } = e,
        i = n === void 0 ? 2 : n,
        a = r === void 0 || r,
        o = I(),
        s;
    t[0] === o ? s = t[1] : (s = o.formatMessage(Q.title), t[0] = o, t[1] = s);
    let c = s,
        l;
    t[2] === o ? l = t[3] : (l = o.formatMessage(Q.snippet), t[2] = o, t[3] = l);
    let u = l,
        d;
    if (t[4] !== i || t[5] !== u || t[6] !== c || t[7] !== a) {
        let e;
        t[9] !== u || t[10] !== c || t[11] !== a ? (e = (e, t) => (0, Z.jsx)(`li`, {
            className: `mt-1 flex min-h-15 items-center p-3 text-sm`,
            inert: !0,
            "aria-hidden": !0,
            children: (0, Z.jsx)(J, {
                conversationTitle: c,
                showAvatar: a,
                monogram: null,
                snippet: u,
                skeleton: !0
            })
        }, t), t[9] = u, t[10] = c, t[11] = a, t[12] = e) : e = t[12], d = (0, Z.jsx)(Z.Fragment, {
            children: Array.from({
                length: i
            }, e)
        }), t[4] = i, t[5] = u, t[6] = c, t[7] = a, t[8] = d
    } else d = t[8];
    return d
}

function he(e) {
    "use forget";
    let t = (0, Y.c)(8),
        {
            canFetchMore: n,
            fetchMore: r
        } = e,
        i;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = {
        threshold: 0,
        rootMargin: `200px 0px`
    }, t[0] = i) : i = t[0];
    let [a, o] = re(i), s, c;
    if (t[1] !== n || t[2] !== r || t[3] !== a ? (s = () => {
            n && a && r()
        }, c = [n, r, a], t[1] = n, t[2] = r, t[3] = a, t[4] = s, t[5] = c) : (s = t[4], c = t[5]), (0, X.useEffect)(s, c), !n) return null;
    let l;
    return t[6] === o ? l = t[7] : (l = (0, Z.jsx)(`div`, {
        className: `h-px w-full`,
        inert: !0,
        ref: o
    }), t[6] = o, t[7] = l), l
}

function J(e) {
    "use forget";
    let t = (0, Y.c)(10),
        {
            showAvatar: n,
            monogram: r,
            editor: i,
            conversationTitle: a,
            skeleton: o,
            snippet: s
        } = e,
        c;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (c = !1, t[0] = c) : c = t[0];
    let l;
    t[1] !== r || t[2] !== n ? (l = n && (0, Z.jsx)(u, {
        monogram: r,
        showTooltip: !0
    }), t[1] = r, t[2] = n, t[3] = l) : l = t[3];
    let d = i ?? a,
        f = !i,
        p;
    return t[4] !== o || t[5] !== s || t[6] !== l || t[7] !== d || t[8] !== f ? (p = (0, Z.jsx)(de, {
        leading: l,
        title: d,
        wrapTitle: f,
        subtitle: s,
        skeleton: o
    }), t[4] = o, t[5] = s, t[6] = l, t[7] = d, t[8] = f, t[9] = p) : p = t[9], p
}

function ge(e) {
    return e?.title
}
var Y, X, Z, Q, $, _e = e((() => {
    Y = F(), m(), d(), ae(), te(), H(), fe(), g(), w(), S(), D(), o(), r(), x(), h(), E(), se(), ie(), y(), L(), T(), X = t(N()), M(), j(), Z = k(), Q = {
        title: {
            id: `project.conversation-list.loading-title`,
            description: `Loading conversation list skeleton message`,
            defaultMessage: `Loading conversation title...`
        },
        snippet: {
            id: `project.conversation-list.loading-snippet`,
            description: `Loading conversation list skeleton snippet`,
            defaultMessage: `Loading conversation snippet...`
        }
    }, $ = e => {
        "use forget";
        let t = (0, Y.c)(60),
            {
                conversation: n,
                project: r,
                showAvatar: a,
                onNavigateToConversation: o
            } = e,
            s = I(),
            l = p(n.id, ge) ?? n.title,
            [u, d] = (0, X.useState)(!1),
            m, h;
        t[0] === n.id ? (m = t[1], h = t[2]) : (m = () => _(le, {
            editTitleInMainScreen: e => {
                let {
                    serverThreadId: t
                } = e;
                t === n.id && d(!0)
            }
        }), h = [n.id], t[0] = n.id, t[1] = m, t[2] = h), (0, X.useEffect)(m, h);
        let {
            snippet: g
        } = n, v, y, b, x, S;
        if (t[3] !== n || t[4] !== r.gizmo) {
            let e = c()?.normalizedAccountUserId;
            v = `owner` in n ? n.owner : null, x = v?.user_id, y = v?.name, b = v?.user_email, S = C(n.id, {
                project: r.gizmo,
                ownerUserId: x,
                accountUserId: e
            }), t[3] = n, t[4] = r.gizmo, t[5] = v, t[6] = y, t[7] = b, t[8] = x, t[9] = S
        } else v = t[5], y = t[6], b = t[7], x = t[8], S = t[9];
        let w = S,
            T, E, D, O, k, A, j;
        if (t[10] !== n || t[11] !== l || t[12] !== w || t[13] !== s || t[14] !== u || t[15] !== v || t[16] !== y || t[17] !== b || t[18] !== x || t[19] !== a || t[20] !== g) {
            j = Symbol.for(`react.early_return_sentinel`);
            bb0: {
                let e = n.update_time && Intl.DateTimeFormat(s.locale, {
                        month: `short`,
                        day: `numeric`
                    }).format(new Date(n.update_time)),
                    r;t[28] !== n || t[29] !== u ? (r = u ? (0, Z.jsx)(ee, {
                    conversationId: n.id,
                    historyConversationResponse: n,
                    onClose: () => {
                        d(!1)
                    }
                }) : null, t[28] = n, t[29] = u, t[30] = r) : r = t[30];
                let i = !g && `snippet`,
                    o;t[31] !== v || t[32] !== y || t[33] !== b || t[34] !== x ? (o = v && y && x ? {
                    label: y,
                    id: x,
                    sublabel: b
                } : null, t[31] = v, t[32] = y, t[33] = b, t[34] = x, t[35] = o) : o = t[35];
                let c;
                if (t[36] !== l || t[37] !== a || t[38] !== g || t[39] !== i || t[40] !== o || t[41] !== r ? (c = (0, Z.jsx)(J, {
                        conversationTitle: l,
                        editor: r,
                        snippet: g,
                        skeleton: i,
                        showAvatar: a,
                        monogram: o
                    }), t[36] = l, t[37] = a, t[38] = g, t[39] = i, t[40] = o, t[41] = r, t[42] = c) : c = t[42], E = c, u) {
                    j = E;
                    break bb0
                }
                A = `flex w-full min-w-0 items-center gap-4`,
                T = P,
                D = w,
                O = !1,
                k = e ? s.formatMessage(f.projectConversationLastUpdatedDescription, {
                    date: e
                }) : void 0
            }
            t[10] = n, t[11] = l, t[12] = w, t[13] = s, t[14] = u, t[15] = v, t[16] = y, t[17] = b, t[18] = x, t[19] = a, t[20] = g, t[21] = T, t[22] = E, t[23] = D, t[24] = O, t[25] = k, t[26] = A, t[27] = j
        } else T = t[21], E = t[22], D = t[23], O = t[24], k = t[25], A = t[26], j = t[27];
        if (j !== Symbol.for(`react.early_return_sentinel`)) return j;
        let M;
        t[43] !== n.id || t[44] !== o ? (M = e => {
            ne(e) && i(`project_chat_navigation`, {
                targetKey: n.id
            }), o?.()
        }, t[43] = n.id, t[44] = o, t[45] = M) : M = t[45];
        let N;
        t[46] !== T || t[47] !== E || t[48] !== D || t[49] !== O || t[50] !== k || t[51] !== M ? (N = (0, Z.jsx)(T, {
            to: D,
            draggable: O,
            "aria-description": k,
            className: `block min-w-0 grow`,
            onClick: M,
            children: E
        }), t[46] = T, t[47] = E, t[48] = D, t[49] = O, t[50] = k, t[51] = M, t[52] = N) : N = t[52];
        let F;
        t[53] !== n || t[54] !== l ? (F = (0, Z.jsx)(K, {
            conversation: n,
            conversationTitle: l,
            isNewProjectPage: !0
        }), t[53] = n, t[54] = l, t[55] = F) : F = t[55];
        let L;
        return t[56] !== N || t[57] !== F || t[58] !== A ? (L = (0, Z.jsxs)(`div`, {
            className: A,
            children: [N, F]
        }), t[56] = N, t[57] = F, t[58] = A, t[59] = L) : L = t[59], L
    }
}));
export {
    H as a, z as i, pe as n, _e as r, q as t
};
//# sourceMappingURL=f8646d57-omt9xlpg1eq7n42o.js.map
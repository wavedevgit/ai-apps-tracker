import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $f as n,
    I_ as r,
    J5 as i,
    JT as a,
    Ji as o,
    L1 as s,
    N1 as c,
    N5 as l,
    Xf as u,
    Xi as d,
    Y5 as f,
    _nt as p,
    dE as m,
    ep as h,
    h8 as g,
    nY as _,
    n_ as v,
    pE as y,
    pY as b,
    p_ as x,
    qB as S,
    qT as C,
    r5 as w,
    t5 as T,
    tV as E,
    ynt as D,
    z_ as O
} from "./4813494d-dfpv67hlp00pbohr.js";
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
    BAt as ee,
    VAt as L,
    cGn as te,
    cjt as ne,
    sGn as re,
    sjt as ie
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Dh as ae,
    Oh as oe
} from "./30901919-7dzdc1ou0jtwkwpt.js";
import {
    Ig as se,
    Up as R,
    Wp as ce,
    zg as le
} from "./8b34dbc2-k1zgxrtsww83602u.js";

function ue({
    children: e,
    className: t
}) {
    return (0, B.jsx)(`li`, {
        className: i(V, t),
        children: e
    })
}

function de({
    leading: e,
    title: t,
    subtitle: n,
    skeleton: r,
    className: a,
    wrapTitle: o = !0,
    titleFontWeight: s = `medium`
}) {
    let c = t != null || r === !0,
        l = n != null || !!r,
        u = o ? (0, B.jsx)(`div`, {
            className: i(`text-sm`, s === `normal` ? `font-normal` : s === `semibold` ? `font-semibold` : `font-medium`, r === !0 && `skeleton-child h-6 w-fit min-w-[50%]`),
            children: t
        }) : t;
    return (0, B.jsxs)(`div`, {
        className: i(`flex w-full items-center gap-4`, r && `group skeleton`, a),
        children: [e, (0, B.jsxs)(`div`, {
            className: `grow overflow-hidden`,
            children: [c && u, l && (0, B.jsx)(`div`, {
                className: i(`text-token-text-secondary min-h-0 truncate text-sm`, r && i(`skeleton-child mt-2 h-6`, r === `snippet` ? `w-2/5` : `w-fit`)),
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
        className: i(`text-token-text-tertiary relative flex min-h-10 min-w-10 shrink-0 items-center justify-end gap-2 text-sm`, t),
        children: e
    })
}
var B, V, H = e((() => {
        f(), B = k(), V = `group/project-item hover:bg-token-interactive-bg-secondary-hover active:bg-token-interactive-bg-secondary-press flex min-h-16 cursor-pointer items-center p-3 text-sm select-none`
    })),
    U, W, G, K, fe = e((() => {
        U = F(), ce(), H(), y(), D(), f(), W = t(N()), M(), G = k(), K = e => {
            "use forget";
            let t = (0, U.c)(27),
                {
                    conversation: n,
                    conversationTitle: r,
                    isNewProjectPage: a
                } = e,
                o = a !== void 0 && a,
                [s, c] = (0, W.useState)(!1),
                l = I(),
                u;
            if (t[0] !== n.title || t[1] !== r || t[2] !== l) {
                let e = r?.trim() || n.title?.trim();
                u = e ? l.formatMessage(m.projectConversationActionsMenuLabel, {
                    title: e
                }) : void 0, t[0] = n.title, t[1] = r, t[2] = l, t[3] = u
            } else u = t[3];
            let d = u,
                f;
            t[4] !== n.update_time || t[5] !== l ? (f = n.update_time && Intl.DateTimeFormat(l.locale, {
                month: `short`,
                day: `numeric`
            }).format(new Date(n.update_time)), t[4] = n.update_time, t[5] = l, t[6] = f) : f = t[6];
            let h = f,
                g;
            t[7] !== h || t[8] !== s || t[9] !== o ? (g = !!h && (0, G.jsx)(`span`, {
                "aria-hidden": `true`,
                className: i(`whitespace-nowrap`, !o && `transition-opacity duration-100 ease-out`, s ? `opacity-0` : `can-hover:group-hover/project-item:opacity-0 can-hover:group-focus-within/project-item:opacity-0 opacity-100`),
                "data-testid": `project-conversation-overflow-date`,
                children: h
            }), t[7] = h, t[8] = s, t[9] = o, t[10] = g) : g = t[10];
            let _ = !o && `transition-opacity duration-100 ease-out`,
                v = !s && `can-hover:opacity-0 can-hover:pointer-events-none`,
                y = s && `pointer-events-auto opacity-100`,
                b;
            t[11] !== _ || t[12] !== v || t[13] !== y ? (b = i(`flex items-center gap-1.5`, _, `can-hover:absolute can-hover:inset-y-0 can-hover:end-0`, v, `can-hover:group-hover/project-item:opacity-100`, `can-hover:group-hover/project-item:pointer-events-auto`, `can-hover:group-focus-within/project-item:opacity-100`, `can-hover:group-focus-within/project-item:pointer-events-auto`, `cant-hover:opacity-100 cant-hover:pointer-events-auto`, y), t[11] = _, t[12] = v, t[13] = y, t[14] = b) : b = t[14];
            let x;
            t[15] === n.id ? x = t[16] : (x = e => {
                c(e), e && p.logEvent(`Conversation History Item Open Menu`, {
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
            return t[24] !== C || t[25] !== g ? (w = (0, G.jsxs)(z, {
                children: [g, C]
            }), t[24] = C, t[25] = g, t[26] = w) : w = t[26], w
        }
    }));

function pe(e) {
    "use forget";
    let t = (0, Y.c)(11),
        {
            project: n,
            onNavigateToConversation: r
        } = e;
    x(n.id);
    let i;
    t[0] === n ? i = t[1] : (i = () => n.conversations$().all$(), t[0] = n, t[1] = i);
    let a = l(i),
        o;
    t[2] === n ? o = t[3] : (o = () => n.conversations$().canShowConversations$(), t[2] = n, t[3] = o);
    let s = l(o),
        c;
    t[4] !== s || t[5] !== a || t[6] !== r || t[7] !== n ? (c = s && (0, Z.jsx)(me, {
        items: a,
        project: n,
        onNavigateToConversation: r
    }), t[4] = s, t[5] = a, t[6] = r, t[7] = n, t[8] = c) : c = t[8];
    let u;
    return t[9] === c ? u = t[10] : (u = (0, Z.jsx)(`section`, {
        children: c
    }), t[9] = c, t[10] = u), u
}

function me(e) {
    "use forget";
    let t = (0, Y.c)(45),
        {
            project: n,
            items: r,
            onNavigateToConversation: a
        } = e,
        s;
    t[0] === n ? s = t[1] : (s = () => n.conversations$().canFetchMore$(), t[0] = n, t[1] = s);
    let c = l(s),
        u;
    t[2] === n ? u = t[3] : (u = () => n.gizmo$(), t[2] = n, t[3] = u);
    let d = l(u),
        f;
    t[4] === n ? f = t[5] : (f = () => n.conversations$().awaitingManualRetry$(), t[4] = n, t[5] = f);
    let p = l(f),
        m;
    t[6] === n ? m = t[7] : (m = () => n.conversations$().fetchMore$, t[6] = n, t[7] = m);
    let h = l(m),
        g;
    t[8] === n ? g = t[9] : (g = () => n.conversations$().cursor$(), t[8] = n, t[9] = g);
    let _ = l(g),
        v;
    t[10] === n ? v = t[11] : (v = () => n.conversations$().isLoading$(), t[10] = n, t[11] = v);
    let y = l(v),
        b;
    t[12] === n ? b = t[13] : (b = () => n.isShared$(), t[12] = n, t[13] = b);
    let x = l(b),
        S = y,
        w;
    t[14] !== r || t[15] !== d?.gizmo?.author ? (w = r?.some(e => `owner` in e && e.owner?.user_id !== d?.gizmo?.author.user_id), t[14] = r, t[15] = d?.gizmo?.author, t[16] = w) : w = t[16];
    let T = x === !0 || w === !0,
        E = S && `skeleton`,
        D;
    t[17] === E ? D = t[18] : (D = i(`divide-token-bg-tertiary group divide-y`, E), t[17] = E, t[18] = D);
    let O;
    t[19] !== r || t[20] !== a || t[21] !== d || t[22] !== T ? (O = d && r && r.map(e => (0, Z.jsx)(ue, {
        children: (0, Z.jsx)($, {
            conversation: e,
            project: d,
            showAvatar: T ?? !1,
            onNavigateToConversation: a
        })
    }, e.id)), t[19] = r, t[20] = a, t[21] = d, t[22] = T, t[23] = O) : O = t[23];
    let k;
    t[24] !== c || t[25] !== h || t[26] !== y ? (k = !y && c && (0, Z.jsx)(C, {
        type: `button`,
        onClick: h,
        className: `keyboard-not-focused:sr-only`,
        children: (0, Z.jsx)(A, {
            id: `project.conversation-list.load-more`,
            defaultMessage: `Load more conversations`
        })
    }), t[24] = c, t[25] = h, t[26] = y, t[27] = k) : k = t[27];
    let j;
    t[28] !== p || t[29] !== n ? (j = p && (0, Z.jsx)(o, {
        type: `normal`,
        className: `mt-2`,
        dangerCtaText: `Try again`,
        onDangerCtaClick: () => {
            n.conversations$().awaitingManualRetry$.set(!1)
        },
        content: (0, Z.jsx)(A, {
            id: `project.conversation-list.awaiting-manual-retry`,
            defaultMessage: `Loading more conversations failed. Please try again.`
        }),
        icon: (0, Z.jsx)(ae, {
            className: `icon`
        })
    }), t[28] = p, t[29] = n, t[30] = j) : j = t[30];
    let M;
    t[31] === S ? M = t[32] : (M = S && (0, Z.jsx)(q, {}), t[31] = S, t[32] = M);
    let N;
    t[33] !== c || t[34] !== _ || t[35] !== h ? (N = (0, Z.jsx)(he, {
        canFetchMore: c,
        fetchMore: h
    }, _), t[33] = c, t[34] = _, t[35] = h, t[36] = N) : N = t[36];
    let P;
    return t[37] !== y || t[38] !== D || t[39] !== O || t[40] !== k || t[41] !== j || t[42] !== M || t[43] !== N ? (P = (0, Z.jsxs)(`ol`, {
        className: D,
        "aria-busy": y,
        children: [O, k, j, M, N]
    }), t[37] = y, t[38] = D, t[39] = O, t[40] = k, t[41] = j, t[42] = M, t[43] = N, t[44] = P) : P = t[44], P
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
    let [a, o] = te(i), s, c;
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
    Y = F(), a(), d(), oe(), L(), H(), fe(), n(), h(), v(), y(), r(), g(), s(), _(), w(), le(), ie(), E(), re(), f(), X = t(N()), M(), j(), Z = k(), Q = {
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
                showAvatar: i,
                onNavigateToConversation: a
            } = e,
            o = I(),
            s = b(n.id, ge) ?? n.title,
            [l, u] = (0, X.useState)(!1),
            d, f;
        t[0] === n.id ? (d = t[1], f = t[2]) : (d = () => T(se, {
            editTitleInMainScreen: e => {
                let {
                    serverThreadId: t
                } = e;
                t === n.id && u(!0)
            }
        }), f = [n.id], t[0] = n.id, t[1] = d, t[2] = f), (0, X.useEffect)(d, f);
        let {
            snippet: p
        } = n, h, g, _, v, y;
        if (t[3] !== n || t[4] !== r.gizmo) {
            let e = c()?.normalizedAccountUserId;
            h = `owner` in n ? n.owner : null, v = h?.user_id, g = h?.name, _ = h?.user_email, y = S(n.id, {
                project: r.gizmo,
                ownerUserId: v,
                accountUserId: e
            }), t[3] = n, t[4] = r.gizmo, t[5] = h, t[6] = g, t[7] = _, t[8] = v, t[9] = y
        } else h = t[5], g = t[6], _ = t[7], v = t[8], y = t[9];
        let x = y,
            C, w, E, D, k, A, j;
        if (t[10] !== n || t[11] !== s || t[12] !== x || t[13] !== o || t[14] !== l || t[15] !== h || t[16] !== g || t[17] !== _ || t[18] !== v || t[19] !== i || t[20] !== p) {
            j = Symbol.for(`react.early_return_sentinel`);
            bb0: {
                let e = n.update_time && Intl.DateTimeFormat(o.locale, {
                        month: `short`,
                        day: `numeric`
                    }).format(new Date(n.update_time)),
                    r;t[28] !== n || t[29] !== l ? (r = l ? (0, Z.jsx)(ee, {
                    conversationId: n.id,
                    historyConversationResponse: n,
                    onClose: () => {
                        u(!1)
                    }
                }) : null, t[28] = n, t[29] = l, t[30] = r) : r = t[30];
                let a = !p && `snippet`,
                    c;t[31] !== h || t[32] !== g || t[33] !== _ || t[34] !== v ? (c = h && g && v ? {
                    label: g,
                    id: v,
                    sublabel: _
                } : null, t[31] = h, t[32] = g, t[33] = _, t[34] = v, t[35] = c) : c = t[35];
                let d;
                if (t[36] !== s || t[37] !== i || t[38] !== p || t[39] !== a || t[40] !== c || t[41] !== r ? (d = (0, Z.jsx)(J, {
                        conversationTitle: s,
                        editor: r,
                        snippet: p,
                        skeleton: a,
                        showAvatar: i,
                        monogram: c
                    }), t[36] = s, t[37] = i, t[38] = p, t[39] = a, t[40] = c, t[41] = r, t[42] = d) : d = t[42], w = d, l) {
                    j = w;
                    break bb0
                }
                A = `flex w-full min-w-0 items-center gap-4`,
                C = P,
                E = x,
                D = !1,
                k = e ? o.formatMessage(m.projectConversationLastUpdatedDescription, {
                    date: e
                }) : void 0
            }
            t[10] = n, t[11] = s, t[12] = x, t[13] = o, t[14] = l, t[15] = h, t[16] = g, t[17] = _, t[18] = v, t[19] = i, t[20] = p, t[21] = C, t[22] = w, t[23] = E, t[24] = D, t[25] = k, t[26] = A, t[27] = j
        } else C = t[21], w = t[22], E = t[23], D = t[24], k = t[25], A = t[26], j = t[27];
        if (j !== Symbol.for(`react.early_return_sentinel`)) return j;
        let M;
        t[43] !== n.id || t[44] !== a ? (M = e => {
            ne(e) && O(`project_chat_navigation`, {
                targetKey: n.id
            }), a?.()
        }, t[43] = n.id, t[44] = a, t[45] = M) : M = t[45];
        let N;
        t[46] !== C || t[47] !== w || t[48] !== E || t[49] !== D || t[50] !== k || t[51] !== M ? (N = (0, Z.jsx)(C, {
            to: E,
            draggable: D,
            "aria-description": k,
            className: `block min-w-0 grow`,
            onClick: M,
            children: w
        }), t[46] = C, t[47] = w, t[48] = E, t[49] = D, t[50] = k, t[51] = M, t[52] = N) : N = t[52];
        let F;
        t[53] !== n || t[54] !== s ? (F = (0, Z.jsx)(K, {
            conversation: n,
            conversationTitle: s,
            isNewProjectPage: !0
        }), t[53] = n, t[54] = s, t[55] = F) : F = t[55];
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
//# sourceMappingURL=f8646d57-jjgt2u0sp2ahoql8.js.map
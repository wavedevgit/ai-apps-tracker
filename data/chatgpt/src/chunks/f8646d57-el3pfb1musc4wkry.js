import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $8 as n,
    $T as r,
    A8 as i,
    B_ as a,
    K5 as o,
    Knt as s,
    L_ as c,
    U1 as l,
    Wnt as u,
    Yi as d,
    Zf as f,
    Zi as p,
    _E as m,
    dY as h,
    eE as g,
    eY as _,
    ep as v,
    j5 as y,
    lV as b,
    m_ as x,
    q1 as S,
    q5 as C,
    r_ as w,
    t5 as T,
    tV as E,
    tp as D,
    yE as O
} from "./4813494d-mdvd4786a87166cc.js";
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
    NAt as ee,
    PAt as L,
    cKn as te,
    ejt as ne,
    lKn as re,
    tjt as ie
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Eh as ae,
    Th as oe
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    Hg as se,
    Kp as R,
    qp as ce,
    zg as le
} from "./8b34dbc2-lmwubajnld74ksfm.js";

function ue({
    children: e,
    className: t
}) {
    return (0, B.jsx)(`li`, {
        className: o(V, t),
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
    titleFontWeight: s = `medium`
}) {
    let c = t != null || r === !0,
        l = n != null || !!r,
        u = a ? (0, B.jsx)(`div`, {
            className: o(`text-sm`, s === `normal` ? `font-normal` : s === `semibold` ? `font-semibold` : `font-medium`, r === !0 && `skeleton-child h-6 w-fit min-w-[50%]`),
            children: t
        }) : t;
    return (0, B.jsxs)(`div`, {
        className: o(`flex w-full items-center gap-4`, r && `group skeleton`, i),
        children: [e, (0, B.jsxs)(`div`, {
            className: `grow overflow-hidden`,
            children: [c && u, l && (0, B.jsx)(`div`, {
                className: o(`text-token-text-secondary min-h-0 truncate text-sm`, r && o(`skeleton-child mt-2 h-6`, r === `snippet` ? `w-2/5` : `w-fit`)),
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
        className: o(`text-token-text-tertiary relative flex min-h-10 min-w-10 shrink-0 items-center justify-end gap-2 text-sm`, t),
        children: e
    })
}
var B, V, H = e((() => {
        C(), B = k(), V = `group/project-item hover:bg-token-interactive-bg-secondary-hover active:bg-token-interactive-bg-secondary-press flex min-h-16 cursor-pointer items-center p-3 text-sm select-none`
    })),
    U, W, G, K, fe = e((() => {
        U = F(), ce(), H(), O(), s(), C(), W = t(N()), M(), G = k(), K = e => {
            "use forget";
            let t = (0, U.c)(27),
                {
                    conversation: n,
                    conversationTitle: r,
                    isNewProjectPage: i
                } = e,
                a = i !== void 0 && i,
                [s, c] = (0, W.useState)(!1),
                l = I(),
                d;
            if (t[0] !== n.title || t[1] !== r || t[2] !== l) {
                let e = r?.trim() || n.title?.trim();
                d = e ? l.formatMessage(m.projectConversationActionsMenuLabel, {
                    title: e
                }) : void 0, t[0] = n.title, t[1] = r, t[2] = l, t[3] = d
            } else d = t[3];
            let f = d,
                p;
            t[4] !== n.update_time || t[5] !== l ? (p = n.update_time && Intl.DateTimeFormat(l.locale, {
                month: `short`,
                day: `numeric`
            }).format(new Date(n.update_time)), t[4] = n.update_time, t[5] = l, t[6] = p) : p = t[6];
            let h = p,
                g;
            t[7] !== h || t[8] !== s || t[9] !== a ? (g = !!h && (0, G.jsx)(`span`, {
                "aria-hidden": `true`,
                className: o(`whitespace-nowrap`, !a && `transition-opacity duration-100 ease-out`, s ? `opacity-0` : `can-hover:group-hover/project-item:opacity-0 can-hover:group-focus-within/project-item:opacity-0 opacity-100`),
                "data-testid": `project-conversation-overflow-date`,
                children: h
            }), t[7] = h, t[8] = s, t[9] = a, t[10] = g) : g = t[10];
            let _ = !a && `transition-opacity duration-100 ease-out`,
                v = !s && `can-hover:opacity-0 can-hover:pointer-events-none`,
                y = s && `pointer-events-auto opacity-100`,
                b;
            t[11] !== _ || t[12] !== v || t[13] !== y ? (b = o(`flex items-center gap-1.5`, _, `can-hover:absolute can-hover:inset-y-0 can-hover:end-0`, v, `can-hover:group-hover/project-item:opacity-100`, `can-hover:group-hover/project-item:pointer-events-auto`, `can-hover:group-focus-within/project-item:opacity-100`, `can-hover:group-focus-within/project-item:pointer-events-auto`, `cant-hover:opacity-100 cant-hover:pointer-events-auto`, y), t[11] = _, t[12] = v, t[13] = y, t[14] = b) : b = t[14];
            let x;
            t[15] === n.id ? x = t[16] : (x = e => {
                c(e), e && u.logEvent(`Conversation History Item Open Menu`, {
                    conversationId: n.id
                })
            }, t[15] = n.id, t[16] = x);
            let S;
            t[17] !== f || t[18] !== n || t[19] !== x ? (S = (0, G.jsx)(R, {
                conversation: n,
                ariaLabel: f,
                onOpenChange: x,
                inMainScreen: !0,
                isActiveConversation: !1
            }), t[17] = f, t[18] = n, t[19] = x, t[20] = S) : S = t[20];
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
    let a = y(i),
        o;
    t[2] === n ? o = t[3] : (o = () => n.conversations$().canShowConversations$(), t[2] = n, t[3] = o);
    let s = y(o),
        c;
    t[4] !== s || t[5] !== a || t[6] !== r || t[7] !== n ? (c = s && (0, Z.jsx)(me, {
        items: a,
        project: n,
        onNavigateToConversation: r
    }), t[4] = s, t[5] = a, t[6] = r, t[7] = n, t[8] = c) : c = t[8];
    let l;
    return t[9] === c ? l = t[10] : (l = (0, Z.jsx)(`section`, {
        children: c
    }), t[9] = c, t[10] = l), l
}

function me(e) {
    "use forget";
    let t = (0, Y.c)(45),
        {
            project: n,
            items: i,
            onNavigateToConversation: a
        } = e,
        s;
    t[0] === n ? s = t[1] : (s = () => n.conversations$().canFetchMore$(), t[0] = n, t[1] = s);
    let c = y(s),
        l;
    t[2] === n ? l = t[3] : (l = () => n.gizmo$(), t[2] = n, t[3] = l);
    let u = y(l),
        f;
    t[4] === n ? f = t[5] : (f = () => n.conversations$().awaitingManualRetry$(), t[4] = n, t[5] = f);
    let p = y(f),
        m;
    t[6] === n ? m = t[7] : (m = () => n.conversations$().fetchMore$, t[6] = n, t[7] = m);
    let h = y(m),
        g;
    t[8] === n ? g = t[9] : (g = () => n.conversations$().cursor$(), t[8] = n, t[9] = g);
    let _ = y(g),
        v;
    t[10] === n ? v = t[11] : (v = () => n.conversations$().isLoading$(), t[10] = n, t[11] = v);
    let b = y(v),
        x;
    t[12] === n ? x = t[13] : (x = () => n.isShared$(), t[12] = n, t[13] = x);
    let S = y(x),
        C = b,
        w;
    t[14] !== i || t[15] !== u?.gizmo?.author ? (w = i?.some(e => `owner` in e && e.owner?.user_id !== u?.gizmo?.author.user_id), t[14] = i, t[15] = u?.gizmo?.author, t[16] = w) : w = t[16];
    let T = S === !0 || w === !0,
        E = C && `skeleton`,
        D;
    t[17] === E ? D = t[18] : (D = o(`divide-token-bg-tertiary group divide-y`, E), t[17] = E, t[18] = D);
    let O;
    t[19] !== i || t[20] !== a || t[21] !== u || t[22] !== T ? (O = u && i && i.map(e => (0, Z.jsx)(ue, {
        children: (0, Z.jsx)($, {
            conversation: e,
            project: u,
            showAvatar: T ?? !1,
            onNavigateToConversation: a
        })
    }, e.id)), t[19] = i, t[20] = a, t[21] = u, t[22] = T, t[23] = O) : O = t[23];
    let k;
    t[24] !== c || t[25] !== h || t[26] !== b ? (k = !b && c && (0, Z.jsx)(r, {
        type: `button`,
        onClick: h,
        className: `keyboard-not-focused:sr-only`,
        children: (0, Z.jsx)(A, {
            id: `project.conversation-list.load-more`,
            defaultMessage: `Load more conversations`
        })
    }), t[24] = c, t[25] = h, t[26] = b, t[27] = k) : k = t[27];
    let j;
    t[28] !== p || t[29] !== n ? (j = p && (0, Z.jsx)(d, {
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
        icon: (0, Z.jsx)(oe, {
            className: `icon`
        })
    }), t[28] = p, t[29] = n, t[30] = j) : j = t[30];
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
    t[1] !== r || t[2] !== n ? (l = n && (0, Z.jsx)(f, {
        monogram: r,
        showTooltip: !0
    }), t[1] = r, t[2] = n, t[3] = l) : l = t[3];
    let u = i ?? a,
        d = !i,
        p;
    return t[4] !== o || t[5] !== s || t[6] !== l || t[7] !== u || t[8] !== d ? (p = (0, Z.jsx)(de, {
        leading: l,
        title: u,
        wrapTitle: d,
        subtitle: s,
        skeleton: o
    }), t[4] = o, t[5] = s, t[6] = l, t[7] = u, t[8] = d, t[9] = p) : p = t[9], p
}

function ge(e) {
    return e?.title
}
var Y, X, Z, Q, $, _e = e((() => {
    Y = F(), g(), p(), ae(), L(), H(), fe(), v(), D(), w(), O(), c(), i(), S(), _(), T(), se(), ne(), b(), te(), C(), X = t(N()), M(), j(), Z = k(), Q = {
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
                conversation: r,
                project: i,
                showAvatar: o,
                onNavigateToConversation: s
            } = e,
            c = I(),
            u = h(r.id, ge) ?? r.title,
            [d, f] = (0, X.useState)(!1),
            p, g;
        t[0] === r.id ? (p = t[1], g = t[2]) : (p = () => n(le, {
            editTitleInMainScreen: e => {
                let {
                    serverThreadId: t
                } = e;
                t === r.id && f(!0)
            }
        }), g = [r.id], t[0] = r.id, t[1] = p, t[2] = g), (0, X.useEffect)(p, g);
        let {
            snippet: _
        } = r, v, y, b, x, S;
        if (t[3] !== r || t[4] !== i.gizmo) {
            let e = l()?.normalizedAccountUserId;
            v = `owner` in r ? r.owner : null, x = v?.user_id, y = v?.name, b = v?.user_email, S = E(r.id, {
                project: i.gizmo,
                ownerUserId: x,
                accountUserId: e
            }), t[3] = r, t[4] = i.gizmo, t[5] = v, t[6] = y, t[7] = b, t[8] = x, t[9] = S
        } else v = t[5], y = t[6], b = t[7], x = t[8], S = t[9];
        let C = S,
            w, T, D, O, k, A, j;
        if (t[10] !== r || t[11] !== u || t[12] !== C || t[13] !== c || t[14] !== d || t[15] !== v || t[16] !== y || t[17] !== b || t[18] !== x || t[19] !== o || t[20] !== _) {
            j = Symbol.for(`react.early_return_sentinel`);
            bb0: {
                let e = r.update_time && Intl.DateTimeFormat(c.locale, {
                        month: `short`,
                        day: `numeric`
                    }).format(new Date(r.update_time)),
                    n;t[28] !== r || t[29] !== d ? (n = d ? (0, Z.jsx)(ee, {
                    conversationId: r.id,
                    historyConversationResponse: r,
                    onClose: () => {
                        f(!1)
                    }
                }) : null, t[28] = r, t[29] = d, t[30] = n) : n = t[30];
                let i = !_ && `snippet`,
                    a;t[31] !== v || t[32] !== y || t[33] !== b || t[34] !== x ? (a = v && y && x ? {
                    label: y,
                    id: x,
                    sublabel: b
                } : null, t[31] = v, t[32] = y, t[33] = b, t[34] = x, t[35] = a) : a = t[35];
                let s;
                if (t[36] !== u || t[37] !== o || t[38] !== _ || t[39] !== i || t[40] !== a || t[41] !== n ? (s = (0, Z.jsx)(J, {
                        conversationTitle: u,
                        editor: n,
                        snippet: _,
                        skeleton: i,
                        showAvatar: o,
                        monogram: a
                    }), t[36] = u, t[37] = o, t[38] = _, t[39] = i, t[40] = a, t[41] = n, t[42] = s) : s = t[42], T = s, d) {
                    j = T;
                    break bb0
                }
                A = `flex w-full min-w-0 items-center gap-4`,
                w = P,
                D = C,
                O = !1,
                k = e ? c.formatMessage(m.projectConversationLastUpdatedDescription, {
                    date: e
                }) : void 0
            }
            t[10] = r, t[11] = u, t[12] = C, t[13] = c, t[14] = d, t[15] = v, t[16] = y, t[17] = b, t[18] = x, t[19] = o, t[20] = _, t[21] = w, t[22] = T, t[23] = D, t[24] = O, t[25] = k, t[26] = A, t[27] = j
        } else w = t[21], T = t[22], D = t[23], O = t[24], k = t[25], A = t[26], j = t[27];
        if (j !== Symbol.for(`react.early_return_sentinel`)) return j;
        let M;
        t[43] !== r.id || t[44] !== s ? (M = e => {
            ie(e) && a(`project_chat_navigation`, {
                targetKey: r.id
            }), s?.()
        }, t[43] = r.id, t[44] = s, t[45] = M) : M = t[45];
        let N;
        t[46] !== w || t[47] !== T || t[48] !== D || t[49] !== O || t[50] !== k || t[51] !== M ? (N = (0, Z.jsx)(w, {
            to: D,
            draggable: O,
            "aria-description": k,
            className: `block min-w-0 grow`,
            onClick: M,
            children: T
        }), t[46] = w, t[47] = T, t[48] = D, t[49] = O, t[50] = k, t[51] = M, t[52] = N) : N = t[52];
        let F;
        t[53] !== r || t[54] !== u ? (F = (0, Z.jsx)(K, {
            conversation: r,
            conversationTitle: u,
            isNewProjectPage: !0
        }), t[53] = r, t[54] = u, t[55] = F) : F = t[55];
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
//# sourceMappingURL=f8646d57-el3pfb1musc4wkry.js.map
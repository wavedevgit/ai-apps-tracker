import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    B_ as r,
    Int as i,
    L_ as a,
    Rnt as o,
    U1 as s,
    Yi as c,
    Zf as l,
    Zi as u,
    _5 as d,
    _E as f,
    c7 as p,
    dY as m,
    eE as h,
    eY as g,
    ep as _,
    h5 as v,
    k8 as y,
    l7 as b,
    lV as x,
    m_ as S,
    q1 as C,
    q5 as w,
    r_ as T,
    tV as E,
    tp as D,
    yE as O
} from "./4813494d-nxpmzchfjvwqts17.js";
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
    BAt as L,
    KGn as ee,
    ojt as te,
    qGn as ne,
    sjt as re,
    zAt as ie
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    Dh as ae,
    Oh as oe
} from "./30901919-lgbmg5s09xld40kt.js";
import {
    Gp as se,
    Kp as R,
    Rg as ce,
    Vg as le
} from "./8b34dbc2-n194ohawifys3bko.js";

function ue({
    children: e,
    className: t
}) {
    return (0, B.jsx)(`li`, {
        className: p(V, t),
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
            className: p(`text-sm`, o === `normal` ? `font-normal` : o === `semibold` ? `font-semibold` : `font-medium`, r === !0 && `skeleton-child h-6 w-fit min-w-[50%]`),
            children: t
        }) : t;
    return (0, B.jsxs)(`div`, {
        className: p(`flex w-full items-center gap-4`, r && `group skeleton`, i),
        children: [e, (0, B.jsxs)(`div`, {
            className: `grow overflow-hidden`,
            children: [s && l, c && (0, B.jsx)(`div`, {
                className: p(`text-token-text-secondary min-h-0 truncate text-sm`, r && p(`skeleton-child mt-2 h-6`, r === `snippet` ? `w-2/5` : `w-fit`)),
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
        className: p(`text-token-text-tertiary relative flex min-h-10 min-w-10 shrink-0 items-center justify-end gap-2 text-sm`, t),
        children: e
    })
}
var B, V, H = e((() => {
        b(), B = k(), V = `group/project-item hover:bg-token-interactive-bg-secondary-hover active:bg-token-interactive-bg-secondary-press flex min-h-16 cursor-pointer items-center p-3 text-sm select-none`
    })),
    U, W, G, K, fe = e((() => {
        U = F(), R(), H(), O(), o(), b(), W = t(N()), M(), G = k(), K = e => {
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
                u = e ? l.formatMessage(f.projectConversationActionsMenuLabel, {
                    title: e
                }) : void 0, t[0] = n.title, t[1] = r, t[2] = l, t[3] = u
            } else u = t[3];
            let d = u,
                m;
            t[4] !== n.update_time || t[5] !== l ? (m = n.update_time && Intl.DateTimeFormat(l.locale, {
                month: `short`,
                day: `numeric`
            }).format(new Date(n.update_time)), t[4] = n.update_time, t[5] = l, t[6] = m) : m = t[6];
            let h = m,
                g;
            t[7] !== h || t[8] !== s || t[9] !== o ? (g = !!h && (0, G.jsx)(`span`, {
                "aria-hidden": `true`,
                className: p(`whitespace-nowrap`, !o && `transition-opacity duration-100 ease-out`, s ? `opacity-0` : `can-hover:group-hover/project-item:opacity-0 can-hover:group-focus-within/project-item:opacity-0 opacity-100`),
                "data-testid": `project-conversation-overflow-date`,
                children: h
            }), t[7] = h, t[8] = s, t[9] = o, t[10] = g) : g = t[10];
            let _ = !o && `transition-opacity duration-100 ease-out`,
                v = !s && `can-hover:opacity-0 can-hover:pointer-events-none`,
                y = s && `pointer-events-auto opacity-100`,
                b;
            t[11] !== _ || t[12] !== v || t[13] !== y ? (b = p(`flex items-center gap-1.5`, _, `can-hover:absolute can-hover:inset-y-0 can-hover:end-0`, v, `can-hover:group-hover/project-item:opacity-100`, `can-hover:group-hover/project-item:pointer-events-auto`, `can-hover:group-focus-within/project-item:opacity-100`, `can-hover:group-focus-within/project-item:pointer-events-auto`, `cant-hover:opacity-100 cant-hover:pointer-events-auto`, y), t[11] = _, t[12] = v, t[13] = y, t[14] = b) : b = t[14];
            let x;
            t[15] === n.id ? x = t[16] : (x = e => {
                c(e), e && i.logEvent(`Conversation History Item Open Menu`, {
                    conversationId: n.id
                })
            }, t[15] = n.id, t[16] = x);
            let S;
            t[17] !== d || t[18] !== n || t[19] !== x ? (S = (0, G.jsx)(se, {
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
    S(n.id);
    let i;
    t[0] === n ? i = t[1] : (i = () => n.conversations$().all$(), t[0] = n, t[1] = i);
    let a = w(i),
        o;
    t[2] === n ? o = t[3] : (o = () => n.conversations$().canShowConversations$(), t[2] = n, t[3] = o);
    let s = w(o),
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
            project: r,
            items: i,
            onNavigateToConversation: a
        } = e,
        o;
    t[0] === r ? o = t[1] : (o = () => r.conversations$().canFetchMore$(), t[0] = r, t[1] = o);
    let s = w(o),
        l;
    t[2] === r ? l = t[3] : (l = () => r.gizmo$(), t[2] = r, t[3] = l);
    let u = w(l),
        d;
    t[4] === r ? d = t[5] : (d = () => r.conversations$().awaitingManualRetry$(), t[4] = r, t[5] = d);
    let f = w(d),
        m;
    t[6] === r ? m = t[7] : (m = () => r.conversations$().fetchMore$, t[6] = r, t[7] = m);
    let h = w(m),
        g;
    t[8] === r ? g = t[9] : (g = () => r.conversations$().cursor$(), t[8] = r, t[9] = g);
    let _ = w(g),
        v;
    t[10] === r ? v = t[11] : (v = () => r.conversations$().isLoading$(), t[10] = r, t[11] = v);
    let y = w(v),
        b;
    t[12] === r ? b = t[13] : (b = () => r.isShared$(), t[12] = r, t[13] = b);
    let x = w(b),
        S = y,
        C;
    t[14] !== i || t[15] !== u?.gizmo?.author ? (C = i?.some(e => `owner` in e && e.owner?.user_id !== u?.gizmo?.author.user_id), t[14] = i, t[15] = u?.gizmo?.author, t[16] = C) : C = t[16];
    let T = x === !0 || C === !0,
        E = S && `skeleton`,
        D;
    t[17] === E ? D = t[18] : (D = p(`divide-token-bg-tertiary group divide-y`, E), t[17] = E, t[18] = D);
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
    t[24] !== s || t[25] !== h || t[26] !== y ? (k = !y && s && (0, Z.jsx)(n, {
        type: `button`,
        onClick: h,
        className: `keyboard-not-focused:sr-only`,
        children: (0, Z.jsx)(A, {
            id: `project.conversation-list.load-more`,
            defaultMessage: `Load more conversations`
        })
    }), t[24] = s, t[25] = h, t[26] = y, t[27] = k) : k = t[27];
    let j;
    t[28] !== f || t[29] !== r ? (j = f && (0, Z.jsx)(c, {
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
        icon: (0, Z.jsx)(ae, {
            className: `icon`
        })
    }), t[28] = f, t[29] = r, t[30] = j) : j = t[30];
    let M;
    t[31] === S ? M = t[32] : (M = S && (0, Z.jsx)(q, {}), t[31] = S, t[32] = M);
    let N;
    t[33] !== s || t[34] !== _ || t[35] !== h ? (N = (0, Z.jsx)(he, {
        canFetchMore: s,
        fetchMore: h
    }, _), t[33] = s, t[34] = _, t[35] = h, t[36] = N) : N = t[36];
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
    let [a, o] = ne(i), s, c;
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
    let u;
    t[1] !== r || t[2] !== n ? (u = n && (0, Z.jsx)(l, {
        monogram: r,
        showTooltip: !0
    }), t[1] = r, t[2] = n, t[3] = u) : u = t[3];
    let d = i ?? a,
        f = !i,
        p;
    return t[4] !== o || t[5] !== s || t[6] !== u || t[7] !== d || t[8] !== f ? (p = (0, Z.jsx)(de, {
        leading: u,
        title: d,
        wrapTitle: f,
        subtitle: s,
        skeleton: o
    }), t[4] = o, t[5] = s, t[6] = u, t[7] = d, t[8] = f, t[9] = p) : p = t[9], p
}

function ge(e) {
    return e?.title
}
var Y, X, Z, Q, $, _e = e((() => {
    Y = F(), h(), u(), oe(), L(), H(), fe(), _(), D(), T(), O(), a(), y(), C(), g(), d(), le(), te(), x(), ee(), b(), X = t(N()), M(), j(), Z = k(), Q = {
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
                project: i,
                showAvatar: a,
                onNavigateToConversation: o
            } = e,
            c = I(),
            l = m(n.id, ge) ?? n.title,
            [u, d] = (0, X.useState)(!1),
            p, h;
        t[0] === n.id ? (p = t[1], h = t[2]) : (p = () => v(ce, {
            editTitleInMainScreen: e => {
                let {
                    serverThreadId: t
                } = e;
                t === n.id && d(!0)
            }
        }), h = [n.id], t[0] = n.id, t[1] = p, t[2] = h), (0, X.useEffect)(p, h);
        let {
            snippet: g
        } = n, _, y, b, x, S;
        if (t[3] !== n || t[4] !== i.gizmo) {
            let e = s()?.normalizedAccountUserId;
            _ = `owner` in n ? n.owner : null, x = _?.user_id, y = _?.name, b = _?.user_email, S = E(n.id, {
                project: i.gizmo,
                ownerUserId: x,
                accountUserId: e
            }), t[3] = n, t[4] = i.gizmo, t[5] = _, t[6] = y, t[7] = b, t[8] = x, t[9] = S
        } else _ = t[5], y = t[6], b = t[7], x = t[8], S = t[9];
        let C = S,
            w, T, D, O, k, A, j;
        if (t[10] !== n || t[11] !== l || t[12] !== C || t[13] !== c || t[14] !== u || t[15] !== _ || t[16] !== y || t[17] !== b || t[18] !== x || t[19] !== a || t[20] !== g) {
            j = Symbol.for(`react.early_return_sentinel`);
            bb0: {
                let e = n.update_time && Intl.DateTimeFormat(c.locale, {
                        month: `short`,
                        day: `numeric`
                    }).format(new Date(n.update_time)),
                    r;t[28] !== n || t[29] !== u ? (r = u ? (0, Z.jsx)(ie, {
                    conversationId: n.id,
                    historyConversationResponse: n,
                    onClose: () => {
                        d(!1)
                    }
                }) : null, t[28] = n, t[29] = u, t[30] = r) : r = t[30];
                let i = !g && `snippet`,
                    o;t[31] !== _ || t[32] !== y || t[33] !== b || t[34] !== x ? (o = _ && y && x ? {
                    label: y,
                    id: x,
                    sublabel: b
                } : null, t[31] = _, t[32] = y, t[33] = b, t[34] = x, t[35] = o) : o = t[35];
                let s;
                if (t[36] !== l || t[37] !== a || t[38] !== g || t[39] !== i || t[40] !== o || t[41] !== r ? (s = (0, Z.jsx)(J, {
                        conversationTitle: l,
                        editor: r,
                        snippet: g,
                        skeleton: i,
                        showAvatar: a,
                        monogram: o
                    }), t[36] = l, t[37] = a, t[38] = g, t[39] = i, t[40] = o, t[41] = r, t[42] = s) : s = t[42], T = s, u) {
                    j = T;
                    break bb0
                }
                A = `flex w-full min-w-0 items-center gap-4`,
                w = P,
                D = C,
                O = !1,
                k = e ? c.formatMessage(f.projectConversationLastUpdatedDescription, {
                    date: e
                }) : void 0
            }
            t[10] = n, t[11] = l, t[12] = C, t[13] = c, t[14] = u, t[15] = _, t[16] = y, t[17] = b, t[18] = x, t[19] = a, t[20] = g, t[21] = w, t[22] = T, t[23] = D, t[24] = O, t[25] = k, t[26] = A, t[27] = j
        } else w = t[21], T = t[22], D = t[23], O = t[24], k = t[25], A = t[26], j = t[27];
        if (j !== Symbol.for(`react.early_return_sentinel`)) return j;
        let M;
        t[43] !== n.id || t[44] !== o ? (M = e => {
            re(e) && r(`project_chat_navigation`, {
                targetKey: n.id
            }), o?.()
        }, t[43] = n.id, t[44] = o, t[45] = M) : M = t[45];
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
//# sourceMappingURL=f8646d57-m208h22lgwfrncqs.js.map
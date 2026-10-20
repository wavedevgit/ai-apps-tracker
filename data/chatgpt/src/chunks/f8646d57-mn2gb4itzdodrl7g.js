import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $f as n,
    I_ as r,
    JB as i,
    JT as a,
    Ji as o,
    P1 as s,
    P5 as c,
    R1 as l,
    X5 as u,
    Xf as d,
    Xi as f,
    Y5 as p,
    YT as m,
    bnt as h,
    ep as g,
    fE as _,
    g8 as v,
    i5 as y,
    mE as b,
    mY as x,
    n5 as S,
    nV as C,
    n_ as w,
    p_ as T,
    rY as E,
    vnt as D,
    z_ as O
} from "./4813494d-bo7e0c29ngt4zgx0.js";
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
    UAt as ee,
    WAt as L,
    dGn as te,
    djt as ne,
    uGn as re,
    ujt as ie
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    Dh as ae,
    Oh as oe
} from "./30901919-e8h11sw136qen6v0.js";
import {
    Ig as se,
    Up as R,
    Wp as ce,
    zg as le
} from "./8b34dbc2-dtawqv9t1aqckqj4.js";

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
        u(), B = k(), V = `group/project-item hover:bg-token-interactive-bg-secondary-hover active:bg-token-interactive-bg-secondary-press flex min-h-16 cursor-pointer items-center p-3 text-sm select-none`
    })),
    U, W, G, K, fe = e((() => {
        U = F(), ce(), H(), b(), h(), u(), W = t(N()), M(), G = k(), K = e => {
            "use forget";
            let t = (0, U.c)(27),
                {
                    conversation: n,
                    conversationTitle: r,
                    isNewProjectPage: i
                } = e,
                a = i !== void 0 && i,
                [o, s] = (0, W.useState)(!1),
                c = I(),
                l;
            if (t[0] !== n.title || t[1] !== r || t[2] !== c) {
                let e = r?.trim() || n.title?.trim();
                l = e ? c.formatMessage(_.projectConversationActionsMenuLabel, {
                    title: e
                }) : void 0, t[0] = n.title, t[1] = r, t[2] = c, t[3] = l
            } else l = t[3];
            let u = l,
                d;
            t[4] !== n.update_time || t[5] !== c ? (d = n.update_time && Intl.DateTimeFormat(c.locale, {
                month: `short`,
                day: `numeric`
            }).format(new Date(n.update_time)), t[4] = n.update_time, t[5] = c, t[6] = d) : d = t[6];
            let f = d,
                m;
            t[7] !== f || t[8] !== o || t[9] !== a ? (m = !!f && (0, G.jsx)(`span`, {
                "aria-hidden": `true`,
                className: p(`whitespace-nowrap`, !a && `transition-opacity duration-100 ease-out`, o ? `opacity-0` : `can-hover:group-hover/project-item:opacity-0 can-hover:group-focus-within/project-item:opacity-0 opacity-100`),
                "data-testid": `project-conversation-overflow-date`,
                children: f
            }), t[7] = f, t[8] = o, t[9] = a, t[10] = m) : m = t[10];
            let h = !a && `transition-opacity duration-100 ease-out`,
                g = !o && `can-hover:opacity-0 can-hover:pointer-events-none`,
                v = o && `pointer-events-auto opacity-100`,
                y;
            t[11] !== h || t[12] !== g || t[13] !== v ? (y = p(`flex items-center gap-1.5`, h, `can-hover:absolute can-hover:inset-y-0 can-hover:end-0`, g, `can-hover:group-hover/project-item:opacity-100`, `can-hover:group-hover/project-item:pointer-events-auto`, `can-hover:group-focus-within/project-item:opacity-100`, `can-hover:group-focus-within/project-item:pointer-events-auto`, `cant-hover:opacity-100 cant-hover:pointer-events-auto`, v), t[11] = h, t[12] = g, t[13] = v, t[14] = y) : y = t[14];
            let b;
            t[15] === n.id ? b = t[16] : (b = e => {
                s(e), e && D.logEvent(`Conversation History Item Open Menu`, {
                    conversationId: n.id
                })
            }, t[15] = n.id, t[16] = b);
            let x;
            t[17] !== u || t[18] !== n || t[19] !== b ? (x = (0, G.jsx)(R, {
                conversation: n,
                ariaLabel: u,
                onOpenChange: b,
                inMainScreen: !0,
                isActiveConversation: !1
            }), t[17] = u, t[18] = n, t[19] = b, t[20] = x) : x = t[20];
            let S;
            t[21] !== x || t[22] !== y ? (S = (0, G.jsx)(`div`, {
                className: y,
                "data-prevent-default": !0,
                "data-testid": `project-conversation-overflow-menu`,
                children: x
            }), t[21] = x, t[22] = y, t[23] = S) : S = t[23];
            let C;
            return t[24] !== S || t[25] !== m ? (C = (0, G.jsxs)(z, {
                children: [m, S]
            }), t[24] = S, t[25] = m, t[26] = C) : C = t[26], C
        }
    }));

function pe(e) {
    "use forget";
    let t = (0, Y.c)(11),
        {
            project: n,
            onNavigateToConversation: r
        } = e;
    T(n.id);
    let i;
    t[0] === n ? i = t[1] : (i = () => n.conversations$().all$(), t[0] = n, t[1] = i);
    let a = c(i),
        o;
    t[2] === n ? o = t[3] : (o = () => n.conversations$().canShowConversations$(), t[2] = n, t[3] = o);
    let s = c(o),
        l;
    t[4] !== s || t[5] !== a || t[6] !== r || t[7] !== n ? (l = s && (0, Z.jsx)(me, {
        items: a,
        project: n,
        onNavigateToConversation: r
    }), t[4] = s, t[5] = a, t[6] = r, t[7] = n, t[8] = l) : l = t[8];
    let u;
    return t[9] === l ? u = t[10] : (u = (0, Z.jsx)(`section`, {
        children: l
    }), t[9] = l, t[10] = u), u
}

function me(e) {
    "use forget";
    let t = (0, Y.c)(45),
        {
            project: n,
            items: r,
            onNavigateToConversation: i
        } = e,
        s;
    t[0] === n ? s = t[1] : (s = () => n.conversations$().canFetchMore$(), t[0] = n, t[1] = s);
    let l = c(s),
        u;
    t[2] === n ? u = t[3] : (u = () => n.gizmo$(), t[2] = n, t[3] = u);
    let d = c(u),
        f;
    t[4] === n ? f = t[5] : (f = () => n.conversations$().awaitingManualRetry$(), t[4] = n, t[5] = f);
    let m = c(f),
        h;
    t[6] === n ? h = t[7] : (h = () => n.conversations$().fetchMore$, t[6] = n, t[7] = h);
    let g = c(h),
        _;
    t[8] === n ? _ = t[9] : (_ = () => n.conversations$().cursor$(), t[8] = n, t[9] = _);
    let v = c(_),
        y;
    t[10] === n ? y = t[11] : (y = () => n.conversations$().isLoading$(), t[10] = n, t[11] = y);
    let b = c(y),
        x;
    t[12] === n ? x = t[13] : (x = () => n.isShared$(), t[12] = n, t[13] = x);
    let S = c(x),
        C = b,
        w;
    t[14] !== r || t[15] !== d?.gizmo?.author ? (w = r?.some(e => `owner` in e && e.owner?.user_id !== d?.gizmo?.author.user_id), t[14] = r, t[15] = d?.gizmo?.author, t[16] = w) : w = t[16];
    let T = S === !0 || w === !0,
        E = C && `skeleton`,
        D;
    t[17] === E ? D = t[18] : (D = p(`divide-token-bg-tertiary group divide-y`, E), t[17] = E, t[18] = D);
    let O;
    t[19] !== r || t[20] !== i || t[21] !== d || t[22] !== T ? (O = d && r && r.map(e => (0, Z.jsx)(ue, {
        children: (0, Z.jsx)($, {
            conversation: e,
            project: d,
            showAvatar: T ?? !1,
            onNavigateToConversation: i
        })
    }, e.id)), t[19] = r, t[20] = i, t[21] = d, t[22] = T, t[23] = O) : O = t[23];
    let k;
    t[24] !== l || t[25] !== g || t[26] !== b ? (k = !b && l && (0, Z.jsx)(a, {
        type: `button`,
        onClick: g,
        className: `keyboard-not-focused:sr-only`,
        children: (0, Z.jsx)(A, {
            id: `project.conversation-list.load-more`,
            defaultMessage: `Load more conversations`
        })
    }), t[24] = l, t[25] = g, t[26] = b, t[27] = k) : k = t[27];
    let j;
    t[28] !== m || t[29] !== n ? (j = m && (0, Z.jsx)(o, {
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
    }), t[28] = m, t[29] = n, t[30] = j) : j = t[30];
    let M;
    t[31] === C ? M = t[32] : (M = C && (0, Z.jsx)(q, {}), t[31] = C, t[32] = M);
    let N;
    t[33] !== l || t[34] !== v || t[35] !== g ? (N = (0, Z.jsx)(he, {
        canFetchMore: l,
        fetchMore: g
    }, v), t[33] = l, t[34] = v, t[35] = g, t[36] = N) : N = t[36];
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
    t[1] !== r || t[2] !== n ? (l = n && (0, Z.jsx)(d, {
        monogram: r,
        showTooltip: !0
    }), t[1] = r, t[2] = n, t[3] = l) : l = t[3];
    let u = i ?? a,
        f = !i,
        p;
    return t[4] !== o || t[5] !== s || t[6] !== l || t[7] !== u || t[8] !== f ? (p = (0, Z.jsx)(de, {
        leading: l,
        title: u,
        wrapTitle: f,
        subtitle: s,
        skeleton: o
    }), t[4] = o, t[5] = s, t[6] = l, t[7] = u, t[8] = f, t[9] = p) : p = t[9], p
}

function ge(e) {
    return e?.title
}
var Y, X, Z, Q, $, _e = e((() => {
    Y = F(), m(), f(), oe(), L(), H(), fe(), n(), g(), w(), b(), r(), v(), l(), E(), y(), le(), ie(), C(), re(), u(), X = t(N()), M(), j(), Z = k(), Q = {
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
            c = I(),
            l = x(n.id, ge) ?? n.title,
            [u, d] = (0, X.useState)(!1),
            f, p;
        t[0] === n.id ? (f = t[1], p = t[2]) : (f = () => S(se, {
            editTitleInMainScreen: e => {
                let {
                    serverThreadId: t
                } = e;
                t === n.id && d(!0)
            }
        }), p = [n.id], t[0] = n.id, t[1] = f, t[2] = p), (0, X.useEffect)(f, p);
        let {
            snippet: m
        } = n, h, g, v, y, b;
        if (t[3] !== n || t[4] !== r.gizmo) {
            let e = s()?.normalizedAccountUserId;
            h = `owner` in n ? n.owner : null, y = h?.user_id, g = h?.name, v = h?.user_email, b = i(n.id, {
                project: r.gizmo,
                ownerUserId: y,
                accountUserId: e
            }), t[3] = n, t[4] = r.gizmo, t[5] = h, t[6] = g, t[7] = v, t[8] = y, t[9] = b
        } else h = t[5], g = t[6], v = t[7], y = t[8], b = t[9];
        let C = b,
            w, T, E, D, k, A, j;
        if (t[10] !== n || t[11] !== l || t[12] !== C || t[13] !== c || t[14] !== u || t[15] !== h || t[16] !== g || t[17] !== v || t[18] !== y || t[19] !== a || t[20] !== m) {
            j = Symbol.for(`react.early_return_sentinel`);
            bb0: {
                let e = n.update_time && Intl.DateTimeFormat(c.locale, {
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
                let i = !m && `snippet`,
                    o;t[31] !== h || t[32] !== g || t[33] !== v || t[34] !== y ? (o = h && g && y ? {
                    label: g,
                    id: y,
                    sublabel: v
                } : null, t[31] = h, t[32] = g, t[33] = v, t[34] = y, t[35] = o) : o = t[35];
                let s;
                if (t[36] !== l || t[37] !== a || t[38] !== m || t[39] !== i || t[40] !== o || t[41] !== r ? (s = (0, Z.jsx)(J, {
                        conversationTitle: l,
                        editor: r,
                        snippet: m,
                        skeleton: i,
                        showAvatar: a,
                        monogram: o
                    }), t[36] = l, t[37] = a, t[38] = m, t[39] = i, t[40] = o, t[41] = r, t[42] = s) : s = t[42], T = s, u) {
                    j = T;
                    break bb0
                }
                A = `flex w-full min-w-0 items-center gap-4`,
                w = P,
                E = C,
                D = !1,
                k = e ? c.formatMessage(_.projectConversationLastUpdatedDescription, {
                    date: e
                }) : void 0
            }
            t[10] = n, t[11] = l, t[12] = C, t[13] = c, t[14] = u, t[15] = h, t[16] = g, t[17] = v, t[18] = y, t[19] = a, t[20] = m, t[21] = w, t[22] = T, t[23] = E, t[24] = D, t[25] = k, t[26] = A, t[27] = j
        } else w = t[21], T = t[22], E = t[23], D = t[24], k = t[25], A = t[26], j = t[27];
        if (j !== Symbol.for(`react.early_return_sentinel`)) return j;
        let M;
        t[43] !== n.id || t[44] !== o ? (M = e => {
            ne(e) && O(`project_chat_navigation`, {
                targetKey: n.id
            }), o?.()
        }, t[43] = n.id, t[44] = o, t[45] = M) : M = t[45];
        let N;
        t[46] !== w || t[47] !== T || t[48] !== E || t[49] !== D || t[50] !== k || t[51] !== M ? (N = (0, Z.jsx)(w, {
            to: E,
            draggable: D,
            "aria-description": k,
            className: `block min-w-0 grow`,
            onClick: M,
            children: T
        }), t[46] = w, t[47] = T, t[48] = E, t[49] = D, t[50] = k, t[51] = M, t[52] = N) : N = t[52];
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
//# sourceMappingURL=f8646d57-mn2gb4itzdodrl7g.js.map
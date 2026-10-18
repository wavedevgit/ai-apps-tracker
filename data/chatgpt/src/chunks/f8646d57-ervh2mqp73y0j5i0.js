import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AJ as n,
    AT as r,
    B6 as i,
    Btt as a,
    E8 as o,
    Ff as s,
    Htt as c,
    IB as l,
    Jg as u,
    Ji as d,
    Lg as f,
    O8 as p,
    OB as m,
    Pf as h,
    VJ as g,
    Xi as _,
    YT as v,
    __ as y,
    b5 as b,
    b_ as x,
    i5 as S,
    jf as C,
    kT as w,
    o1 as T,
    qT as E,
    u1 as D,
    y5 as O
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as k,
    Bn as A,
    Nn as j,
    Rn as M,
    Vn as N,
    at as P,
    wn as F,
    zn as I
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $Wn as L,
    FAt as ee,
    IAt as te,
    QWn as ne,
    njt as re,
    rjt as ie
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Dh as ae,
    Oh as oe
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    Fg as se,
    Hp as R,
    Rg as ce,
    Up as le
} from "./8b34dbc2-gf9wnwcahty27ylx.js";

function ue({
    children: e,
    className: t
}) {
    return (0, B.jsx)(`li`, {
        className: O(V, t),
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
            className: O(`text-sm`, o === `normal` ? `font-normal` : o === `semibold` ? `font-semibold` : `font-medium`, r === !0 && `skeleton-child h-6 w-fit min-w-[50%]`),
            children: t
        }) : t;
    return (0, B.jsxs)(`div`, {
        className: O(`flex w-full items-center gap-4`, r && `group skeleton`, i),
        children: [e, (0, B.jsxs)(`div`, {
            className: `grow overflow-hidden`,
            children: [s && l, c && (0, B.jsx)(`div`, {
                className: O(`text-token-text-secondary min-h-0 truncate text-sm`, r && O(`skeleton-child mt-2 h-6`, r === `snippet` ? `w-2/5` : `w-fit`)),
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
        className: O(`text-token-text-tertiary relative flex min-h-10 min-w-10 shrink-0 items-center justify-end gap-2 text-sm`, t),
        children: e
    })
}
var B, V, H = e((() => {
        b(), B = A(), V = `group/project-item hover:bg-token-interactive-bg-secondary-hover active:bg-token-interactive-bg-secondary-press flex min-h-16 cursor-pointer items-center p-3 text-sm select-none`
    })),
    U, W, G, K, fe = e((() => {
        U = F(), le(), H(), v(), c(), b(), W = t(N()), M(), G = A(), K = e => {
            "use forget";
            let t = (0, U.c)(27),
                {
                    conversation: n,
                    conversationTitle: r,
                    isNewProjectPage: i
                } = e,
                o = i !== void 0 && i,
                [s, c] = (0, W.useState)(!1),
                l = I(),
                u;
            if (t[0] !== n.title || t[1] !== r || t[2] !== l) {
                let e = r?.trim() || n.title?.trim();
                u = e ? l.formatMessage(E.projectConversationActionsMenuLabel, {
                    title: e
                }) : void 0, t[0] = n.title, t[1] = r, t[2] = l, t[3] = u
            } else u = t[3];
            let d = u,
                f;
            t[4] !== n.update_time || t[5] !== l ? (f = n.update_time && Intl.DateTimeFormat(l.locale, {
                month: `short`,
                day: `numeric`
            }).format(new Date(n.update_time)), t[4] = n.update_time, t[5] = l, t[6] = f) : f = t[6];
            let p = f,
                m;
            t[7] !== p || t[8] !== s || t[9] !== o ? (m = !!p && (0, G.jsx)(`span`, {
                "aria-hidden": `true`,
                className: O(`whitespace-nowrap`, !o && `transition-opacity duration-100 ease-out`, s ? `opacity-0` : `can-hover:group-hover/project-item:opacity-0 can-hover:group-focus-within/project-item:opacity-0 opacity-100`),
                "data-testid": `project-conversation-overflow-date`,
                children: p
            }), t[7] = p, t[8] = s, t[9] = o, t[10] = m) : m = t[10];
            let h = !o && `transition-opacity duration-100 ease-out`,
                g = !s && `can-hover:opacity-0 can-hover:pointer-events-none`,
                _ = s && `pointer-events-auto opacity-100`,
                v;
            t[11] !== h || t[12] !== g || t[13] !== _ ? (v = O(`flex items-center gap-1.5`, h, `can-hover:absolute can-hover:inset-y-0 can-hover:end-0`, g, `can-hover:group-hover/project-item:opacity-100`, `can-hover:group-hover/project-item:pointer-events-auto`, `can-hover:group-focus-within/project-item:opacity-100`, `can-hover:group-focus-within/project-item:pointer-events-auto`, `cant-hover:opacity-100 cant-hover:pointer-events-auto`, _), t[11] = h, t[12] = g, t[13] = _, t[14] = v) : v = t[14];
            let y;
            t[15] === n.id ? y = t[16] : (y = e => {
                c(e), e && a.logEvent(`Conversation History Item Open Menu`, {
                    conversationId: n.id
                })
            }, t[15] = n.id, t[16] = y);
            let b;
            t[17] !== d || t[18] !== n || t[19] !== y ? (b = (0, G.jsx)(R, {
                conversation: n,
                ariaLabel: d,
                onOpenChange: y,
                inMainScreen: !0,
                isActiveConversation: !1
            }), t[17] = d, t[18] = n, t[19] = y, t[20] = b) : b = t[20];
            let x;
            t[21] !== b || t[22] !== v ? (x = (0, G.jsx)(`div`, {
                className: v,
                "data-prevent-default": !0,
                "data-testid": `project-conversation-overflow-menu`,
                children: b
            }), t[21] = b, t[22] = v, t[23] = x) : x = t[23];
            let S;
            return t[24] !== x || t[25] !== m ? (S = (0, G.jsxs)(z, {
                children: [m, x]
            }), t[24] = x, t[25] = m, t[26] = S) : S = t[26], S
        }
    }));

function pe(e) {
    "use forget";
    let t = (0, Y.c)(11),
        {
            project: n,
            onNavigateToConversation: r
        } = e;
    u(n.id);
    let i;
    t[0] === n ? i = t[1] : (i = () => n.conversations$().all$(), t[0] = n, t[1] = i);
    let a = S(i),
        o;
    t[2] === n ? o = t[3] : (o = () => n.conversations$().canShowConversations$(), t[2] = n, t[3] = o);
    let s = S(o),
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
            items: r,
            onNavigateToConversation: i
        } = e,
        a;
    t[0] === n ? a = t[1] : (a = () => n.conversations$().canFetchMore$(), t[0] = n, t[1] = a);
    let o = S(a),
        s;
    t[2] === n ? s = t[3] : (s = () => n.gizmo$(), t[2] = n, t[3] = s);
    let c = S(s),
        l;
    t[4] === n ? l = t[5] : (l = () => n.conversations$().awaitingManualRetry$(), t[4] = n, t[5] = l);
    let u = S(l),
        f;
    t[6] === n ? f = t[7] : (f = () => n.conversations$().fetchMore$, t[6] = n, t[7] = f);
    let p = S(f),
        m;
    t[8] === n ? m = t[9] : (m = () => n.conversations$().cursor$(), t[8] = n, t[9] = m);
    let h = S(m),
        g;
    t[10] === n ? g = t[11] : (g = () => n.conversations$().isLoading$(), t[10] = n, t[11] = g);
    let _ = S(g),
        v;
    t[12] === n ? v = t[13] : (v = () => n.isShared$(), t[12] = n, t[13] = v);
    let y = S(v),
        b = _,
        x;
    t[14] !== r || t[15] !== c?.gizmo?.author ? (x = r?.some(e => `owner` in e && e.owner?.user_id !== c?.gizmo?.author.user_id), t[14] = r, t[15] = c?.gizmo?.author, t[16] = x) : x = t[16];
    let C = y === !0 || x === !0,
        T = b && `skeleton`,
        E;
    t[17] === T ? E = t[18] : (E = O(`divide-token-bg-tertiary group divide-y`, T), t[17] = T, t[18] = E);
    let D;
    t[19] !== r || t[20] !== i || t[21] !== c || t[22] !== C ? (D = c && r && r.map(e => (0, Z.jsx)(ue, {
        children: (0, Z.jsx)($, {
            conversation: e,
            project: c,
            showAvatar: C ?? !1,
            onNavigateToConversation: i
        })
    }, e.id)), t[19] = r, t[20] = i, t[21] = c, t[22] = C, t[23] = D) : D = t[23];
    let k;
    t[24] !== o || t[25] !== p || t[26] !== _ ? (k = !_ && o && (0, Z.jsx)(w, {
        type: `button`,
        onClick: p,
        className: `keyboard-not-focused:sr-only`,
        children: (0, Z.jsx)(j, {
            id: `project.conversation-list.load-more`,
            defaultMessage: `Load more conversations`
        })
    }), t[24] = o, t[25] = p, t[26] = _, t[27] = k) : k = t[27];
    let A;
    t[28] !== u || t[29] !== n ? (A = u && (0, Z.jsx)(d, {
        type: `normal`,
        className: `mt-2`,
        dangerCtaText: `Try again`,
        onDangerCtaClick: () => {
            n.conversations$().awaitingManualRetry$.set(!1)
        },
        content: (0, Z.jsx)(j, {
            id: `project.conversation-list.awaiting-manual-retry`,
            defaultMessage: `Loading more conversations failed. Please try again.`
        }),
        icon: (0, Z.jsx)(ae, {
            className: `icon`
        })
    }), t[28] = u, t[29] = n, t[30] = A) : A = t[30];
    let M;
    t[31] === b ? M = t[32] : (M = b && (0, Z.jsx)(q, {}), t[31] = b, t[32] = M);
    let N;
    t[33] !== o || t[34] !== h || t[35] !== p ? (N = (0, Z.jsx)(he, {
        canFetchMore: o,
        fetchMore: p
    }, h), t[33] = o, t[34] = h, t[35] = p, t[36] = N) : N = t[36];
    let P;
    return t[37] !== _ || t[38] !== E || t[39] !== D || t[40] !== k || t[41] !== A || t[42] !== M || t[43] !== N ? (P = (0, Z.jsxs)(`ol`, {
        className: E,
        "aria-busy": _,
        children: [D, k, A, M, N]
    }), t[37] = _, t[38] = E, t[39] = D, t[40] = k, t[41] = A, t[42] = M, t[43] = N, t[44] = P) : P = t[44], P
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
    let [a, o] = L(i), s, c;
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
    t[1] !== r || t[2] !== n ? (l = n && (0, Z.jsx)(C, {
        monogram: r,
        showTooltip: !0
    }), t[1] = r, t[2] = n, t[3] = l) : l = t[3];
    let u = i ?? a,
        d = !i,
        f;
    return t[4] !== o || t[5] !== s || t[6] !== l || t[7] !== u || t[8] !== d ? (f = (0, Z.jsx)(de, {
        leading: l,
        title: u,
        wrapTitle: d,
        subtitle: s,
        skeleton: o
    }), t[4] = o, t[5] = s, t[6] = l, t[7] = u, t[8] = d, t[9] = f) : f = t[9], f
}

function ge(e) {
    return e?.title
}
var Y, X, Z, Q, $, _e = e((() => {
    Y = F(), r(), _(), oe(), te(), H(), fe(), h(), s(), f(), v(), y(), i(), D(), n(), p(), ce(), re(), l(), ne(), b(), X = t(N()), M(), k(), Z = A(), Q = {
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
            s = I(),
            c = g(n.id, ge) ?? n.title,
            [l, u] = (0, X.useState)(!1),
            d, f;
        t[0] === n.id ? (d = t[1], f = t[2]) : (d = () => o(se, {
            editTitleInMainScreen: e => {
                let {
                    serverThreadId: t
                } = e;
                t === n.id && u(!0)
            }
        }), f = [n.id], t[0] = n.id, t[1] = d, t[2] = f), (0, X.useEffect)(d, f);
        let {
            snippet: p
        } = n, h, _, v, y, b;
        if (t[3] !== n || t[4] !== r.gizmo) {
            let e = T()?.normalizedAccountUserId;
            h = `owner` in n ? n.owner : null, y = h?.user_id, _ = h?.name, v = h?.user_email, b = m(n.id, {
                project: r.gizmo,
                ownerUserId: y,
                accountUserId: e
            }), t[3] = n, t[4] = r.gizmo, t[5] = h, t[6] = _, t[7] = v, t[8] = y, t[9] = b
        } else h = t[5], _ = t[6], v = t[7], y = t[8], b = t[9];
        let S = b,
            C, w, D, O, k, A, j;
        if (t[10] !== n || t[11] !== c || t[12] !== S || t[13] !== s || t[14] !== l || t[15] !== h || t[16] !== _ || t[17] !== v || t[18] !== y || t[19] !== i || t[20] !== p) {
            j = Symbol.for(`react.early_return_sentinel`);
            bb0: {
                let e = n.update_time && Intl.DateTimeFormat(s.locale, {
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
                    o;t[31] !== h || t[32] !== _ || t[33] !== v || t[34] !== y ? (o = h && _ && y ? {
                    label: _,
                    id: y,
                    sublabel: v
                } : null, t[31] = h, t[32] = _, t[33] = v, t[34] = y, t[35] = o) : o = t[35];
                let d;
                if (t[36] !== c || t[37] !== i || t[38] !== p || t[39] !== a || t[40] !== o || t[41] !== r ? (d = (0, Z.jsx)(J, {
                        conversationTitle: c,
                        editor: r,
                        snippet: p,
                        skeleton: a,
                        showAvatar: i,
                        monogram: o
                    }), t[36] = c, t[37] = i, t[38] = p, t[39] = a, t[40] = o, t[41] = r, t[42] = d) : d = t[42], w = d, l) {
                    j = w;
                    break bb0
                }
                A = `flex w-full min-w-0 items-center gap-4`,
                C = P,
                D = S,
                O = !1,
                k = e ? s.formatMessage(E.projectConversationLastUpdatedDescription, {
                    date: e
                }) : void 0
            }
            t[10] = n, t[11] = c, t[12] = S, t[13] = s, t[14] = l, t[15] = h, t[16] = _, t[17] = v, t[18] = y, t[19] = i, t[20] = p, t[21] = C, t[22] = w, t[23] = D, t[24] = O, t[25] = k, t[26] = A, t[27] = j
        } else C = t[21], w = t[22], D = t[23], O = t[24], k = t[25], A = t[26], j = t[27];
        if (j !== Symbol.for(`react.early_return_sentinel`)) return j;
        let M;
        t[43] !== n.id || t[44] !== a ? (M = e => {
            ie(e) && x(`project_chat_navigation`, {
                targetKey: n.id
            }), a?.()
        }, t[43] = n.id, t[44] = a, t[45] = M) : M = t[45];
        let N;
        t[46] !== C || t[47] !== w || t[48] !== D || t[49] !== O || t[50] !== k || t[51] !== M ? (N = (0, Z.jsx)(C, {
            to: D,
            draggable: O,
            "aria-description": k,
            className: `block min-w-0 grow`,
            onClick: M,
            children: w
        }), t[46] = C, t[47] = w, t[48] = D, t[49] = O, t[50] = k, t[51] = M, t[52] = N) : N = t[52];
        let F;
        t[53] !== n || t[54] !== c ? (F = (0, Z.jsx)(K, {
            conversation: n,
            conversationTitle: c,
            isNewProjectPage: !0
        }), t[53] = n, t[54] = c, t[55] = F) : F = t[55];
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
//# sourceMappingURL=f8646d57-ervh2mqp73y0j5i0.js.map
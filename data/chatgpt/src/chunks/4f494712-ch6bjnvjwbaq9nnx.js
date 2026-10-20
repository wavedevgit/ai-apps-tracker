import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    DG as n,
    Hot as r,
    JT as i,
    Krt as a,
    Mw as o,
    Nw as s,
    Uot as c,
    X5 as l,
    Y5 as u,
    YT as d,
    eit as f,
    fc as p,
    hF as m,
    pF as h,
    vc as g,
    wG as _,
    xG as v
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as y,
    Ln as b,
    Nn as x,
    Rn as S,
    Vn as C,
    wn as w,
    zn as T
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    G6 as E,
    Ijt as ee,
    Ljt as te,
    Qm as ne,
    W6 as re,
    Ym as ie,
    nM as ae,
    tM as oe
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    Fx as D,
    Ix as O,
    Kv as k,
    NS as A,
    PS as j,
    qv as M
} from "./30901919-e8h11sw136qen6v0.js";
import {
    Mx as N,
    kx as P
} from "./c2675c8c-ejvs9hq3rwjwsbcv.js";
import {
    n as F,
    r as I
} from "./84bcef95-eofodj28dphxiknm.js";
import {
    r as L,
    t as R
} from "./7cdccdf3-ktok05c7a57d2uuy.js";
import {
    n as z,
    t as se
} from "./b5855e1f-m7vbsutcpb96t05c.js";
var B, V, H, U, W, ce = e((() => {
        B = w(), d(), f(), h(), M(), D(), te(), p(), _(), ae(), L(), re(), r(), S(), V = y(), H = e => {
            "use forget";
            let t = (0, B.c)(11),
                {
                    onEdit: n,
                    onVisit: r,
                    site: a
                } = e,
                o = T(),
                s = a.live_url;
            if (s == null) return null;
            let c;
            t[0] !== o || t[1] !== s || t[2] !== r || t[3] !== a.status ? (c = a.status === `active` ? (0, V.jsx)(i, {
                as: `a`,
                className: `text-sm!`,
                color: `secondary`,
                icon: k,
                label: o.formatMessage(W.visit),
                openNewTab: !0,
                rel: `noopener noreferrer`,
                to: s,
                onClick: () => r?.(),
                children: (0, V.jsx)(x, {
                    ...W.visit
                })
            }) : null, t[0] = o, t[1] = s, t[2] = r, t[3] = a.status, t[4] = c) : c = t[4];
            let l;
            t[5] !== n || t[6] !== a ? (l = (0, V.jsx)(U, {
                site: a,
                onEdit: n
            }), t[5] = n, t[6] = a, t[7] = l) : l = t[7];
            let u;
            return t[8] !== c || t[9] !== l ? (u = (0, V.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [c, l]
            }), t[8] = c, t[9] = l, t[10] = u) : u = t[10], u
        }, U = e => {
            "use forget";
            let t = (0, B.c)(21),
                {
                    onEdit: r,
                    site: o
                } = e,
                s = T(),
                l = m(),
                u;
            t[0] === l ? u = t[1] : (u = c(l), t[0] = l, t[1] = u);
            let d = u,
                f = o.live_url,
                p = o.status === `suspended`;
            if (f == null) return null;
            let h;
            t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (h = (0, V.jsx)(x, {
                ...W.editDisabledReason
            }), t[2] = h) : h = t[2];
            let _ = !p,
                y;
            t[3] !== d || t[4] !== s || t[5] !== p || t[6] !== f || t[7] !== r || t[8] !== o.id || t[9] !== o.sharing || t[10] !== o.slug || t[11] !== o.title ? (y = e => (0, V.jsx)(i, {
                ...e,
                "aria-disabled": p || void 0,
                className: `text-sm!`,
                color: `secondary`,
                icon: O,
                label: s.formatMessage(W.edit),
                type: `button`,
                visuallyDisabled: p,
                onClick: e => {
                    if (p) {
                        e.preventDefault();
                        return
                    }
                    r?.(), n(v.TPP), g(d.id, a.TPP), E(d.id, {
                        accessMode: o.sharing.access_mode,
                        privacyStatus: oe(o.sharing.access_mode, o.sharing.counts_available !== !1 && o.sharing.user_count === 0 && o.sharing.group_count === 0),
                        projectId: o.id,
                        slug: o.slug,
                        title: o.title,
                        url: f
                    }, e.currentTarget)
                },
                onKeyDown: e => {
                    p && (e.key === `Enter` || e.key === ` `) && e.preventDefault()
                },
                children: (0, V.jsx)(x, {
                    ...W.edit
                })
            }), t[3] = d, t[4] = s, t[5] = p, t[6] = f, t[7] = r, t[8] = o.id, t[9] = o.sharing, t[10] = o.slug, t[11] = o.title, t[12] = y) : y = t[12];
            let b;
            t[13] !== _ || t[14] !== y ? (b = (0, V.jsx)(ee, {
                content: h,
                disabled: _,
                side: `bottom-center`,
                children: y
            }), t[13] = _, t[14] = y, t[15] = b) : b = t[15];
            let S;
            t[16] === d ? S = t[17] : (S = (0, V.jsx)(R, {
                conversation: d
            }), t[16] = d, t[17] = S);
            let C;
            return t[18] !== b || t[19] !== S ? (C = (0, V.jsxs)(V.Fragment, {
                children: [b, S]
            }), t[18] = b, t[19] = S, t[20] = C) : C = t[20], C
        }, W = b({
            visit: {
                id: `sites.detail.header.visit.link.label`,
                defaultMessage: `Visit`
            },
            edit: {
                id: `sites.detail.header.edit.button.label`,
                defaultMessage: `Edit`
            },
            editDisabledReason: {
                id: `sites.detail.header.edit.button.disabled_reason`,
                defaultMessage: `Editing isn’t available while this site is disabled.`
            }
        })
    })),
    G, K, q, J, Y, X, Z, Q, $, le = e((() => {
        G = w(), d(), s(), A(), N(), ne(), I(), l(), K = t(C()), S(), z(), q = y(), J = e => {
            "use forget";
            let t = (0, G.c)(29),
                {
                    analyticsEnabled: n,
                    analyticsTo: r,
                    backTo: i,
                    children: a,
                    headerAction: o,
                    isLoading: s,
                    selectedTab: c,
                    settingsTo: l,
                    site: d,
                    titleSuffix: f
                } = e,
                p = T(),
                m = s || d != null,
                h = n || c === `analytics`,
                g;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (g = {
                contentWrapper: `max-w-app-content px-4! pb-8 md:pb-8`,
                contentInner: `mt-0!`,
                headerWrapper: `max-w-none! px-4! pt-1 pb-0! md:px-4! md:pt-1 md:pb-0!`
            }, t[0] = g) : g = t[0];
            let _;
            t[1] !== i || t[2] !== s ? (_ = (0, q.jsx)(Y, {
                backTo: i,
                isLoading: s
            }), t[1] = i, t[2] = s, t[3] = _) : _ = t[3];
            let v = s && `group skeleton [--skeleton-opacity:0.75]`,
                y;
            t[4] === v ? y = t[5] : (y = u(`flex min-w-0 flex-col pt-4`, v), t[4] = v, t[5] = y);
            let b;
            t[6] !== o || t[7] !== s || t[8] !== d || t[9] !== f ? (b = s ? (0, q.jsx)(Z, {
                headerAction: o
            }) : d == null ? null : (0, q.jsx)(X, {
                headerAction: o,
                site: d,
                titleSuffix: f
            }), t[6] = o, t[7] = s, t[8] = d, t[9] = f, t[10] = b) : b = t[10];
            let S;
            t[11] !== r || t[12] !== m || t[13] !== p || t[14] !== c || t[15] !== l || t[16] !== h ? (S = m ? (0, q.jsx)(`div`, {
                className: `py-[9px]`,
                children: (0, q.jsxs)(`nav`, {
                    "aria-label": p.formatMessage({
                        id: `sites.detail.navigation.tabs.label`,
                        defaultMessage: `Site details`
                    }),
                    className: `no-scrollbar flex min-w-0 items-center gap-0 overflow-x-auto`,
                    children: [(0, q.jsx)($, {
                        active: c === `settings`,
                        to: l,
                        children: (0, q.jsx)(x, {
                            id: `sites.detail.navigation.settings.tab.label`,
                            defaultMessage: `Settings`
                        })
                    }), h ? (0, q.jsx)($, {
                        active: c === `analytics`,
                        to: r,
                        children: (0, q.jsx)(x, {
                            id: `sites.detail.navigation.analytics.tab.label`,
                            defaultMessage: `Analytics`
                        })
                    }) : null]
                })
            }) : null, t[11] = r, t[12] = m, t[13] = p, t[14] = c, t[15] = l, t[16] = h, t[17] = S) : S = t[17];
            let C;
            t[18] !== a || t[19] !== m ? (C = m ? (0, q.jsx)(`div`, {
                className: `mt-8`,
                children: a
            }) : a, t[18] = a, t[19] = m, t[20] = C) : C = t[20];
            let w;
            t[21] !== y || t[22] !== b || t[23] !== S || t[24] !== C ? (w = (0, q.jsxs)(`div`, {
                className: y,
                children: [b, S, C]
            }), t[21] = y, t[22] = b, t[23] = S, t[24] = C, t[25] = w) : w = t[25];
            let E;
            return t[26] !== _ || t[27] !== w ? (E = (0, q.jsx)(`div`, {
                className: `bg-token-bg-primary block min-h-full w-full`,
                children: (0, q.jsx)(F, {
                    classNames: g,
                    header: _,
                    children: w
                })
            }), t[26] = _, t[27] = w, t[28] = E) : E = t[28], E
        }, Y = e => {
            "use forget";
            let t = (0, G.c)(14),
                {
                    backTo: n,
                    isLoading: r
                } = e,
                a = T(),
                s = r && `group skeleton [--skeleton-opacity:0.75]`,
                c;
            t[0] === s ? c = t[1] : (c = u(`flex min-w-0 items-center`, s), t[0] = s, t[1] = c);
            let l;
            t[2] === a ? l = t[3] : (l = a.formatMessage({
                id: `sites.detail.navigation.breadcrumb.label`,
                defaultMessage: `Site breadcrumb`
            }), t[2] = a, t[3] = l);
            let d, f;
            t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, q.jsx)(o, {
                "aria-hidden": `true`,
                className: `icon icon-md`
            }), f = (0, q.jsx)(x, {
                id: `sites.detail.navigation.back_to_sites.link.label`,
                defaultMessage: `Sites`
            }), t[4] = d, t[5] = f) : (d = t[4], f = t[5]);
            let p;
            t[6] === n ? p = t[7] : (p = (0, q.jsxs)(i, {
                as: `link`,
                className: `shrink-0 rounded-lg ps-0.5 pe-1.5 font-normal!`,
                color: `ghost`,
                contentWrapperClassName: `gap-[6px]`,
                size: `medium`,
                to: n,
                children: [d, f]
            }), t[6] = n, t[7] = p);
            let m;
            t[8] !== l || t[9] !== p ? (m = (0, q.jsx)(`nav`, {
                "aria-label": l,
                className: `flex min-w-0 items-center`,
                children: p
            }), t[8] = l, t[9] = p, t[10] = m) : m = t[10];
            let h;
            return t[11] !== c || t[12] !== m ? (h = (0, q.jsx)(`div`, {
                className: c,
                children: m
            }), t[11] = c, t[12] = m, t[13] = h) : h = t[13], h
        }, X = e => {
            "use forget";
            let t = (0, G.c)(16),
                {
                    headerAction: n,
                    site: r,
                    titleSuffix: i
                } = e,
                a;
            t[0] !== r.displayUrl || t[1] !== r.slug ? (a = r.displayUrl?.trim() || r.slug?.trim() || null, t[0] = r.displayUrl, t[1] = r.slug, t[2] = a) : a = t[2];
            let o = a,
                s;
            t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (s = {
                controls: `ms-auto! w-auto!`,
                headerActions: `flex shrink-0`,
                subtitle: `text-token-text-tertiary mt-0.5! min-w-0 text-sm! leading-5! [overflow-wrap:anywhere]`,
                title: `box-trim-0.5 text-[28px]! leading-[34px]! font-normal! [overflow-wrap:anywhere]`,
                titlePrefix: `me-2`,
                titleRow: `max-sm:flex-wrap max-sm:gap-y-0`,
                titleSuffix: `max-sm:basis-full`
            }, t[3] = s) : s = t[3];
            let c = r.screenshotUrl ?? `fallback`,
                l;
            t[4] !== r.screenshotUrl || t[5] !== c ? (l = (0, q.jsx)(Q, {
                screenshotUrl: r.screenshotUrl
            }, c), t[4] = r.screenshotUrl, t[5] = c, t[6] = l) : l = t[6];
            let u;
            t[7] !== o || t[8] !== n || t[9] !== r.title || t[10] !== l || t[11] !== i ? (u = (0, q.jsx)(P, {
                alignTop: !0,
                className: `mt-0! min-h-0! gap-x-4! gap-y-0! pb-4 md:mt-0! md:min-h-0!`,
                classNames: s,
                headerActions: n,
                subtitle: o,
                title: r.title,
                titleSuffix: i,
                titlePrefix: l
            }), t[7] = o, t[8] = n, t[9] = r.title, t[10] = l, t[11] = i, t[12] = u) : u = t[12];
            let d;
            return t[13] !== r.title || t[14] !== u ? (d = (0, q.jsx)(`section`, {
                "aria-label": r.title,
                className: `min-w-0`,
                children: u
            }), t[13] = r.title, t[14] = u, t[15] = d) : d = t[15], d
        }, Z = e => {
            "use forget";
            let t = (0, G.c)(6),
                {
                    headerAction: n
                } = e,
                r;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, q.jsx)(`div`, {
                className: `skeleton-child h-[35px] w-14 shrink-0 rounded-lg sm:h-[51px] sm:w-[88px]`
            }), t[0] = r) : r = t[0];
            let i;
            t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, q.jsxs)(`div`, {
                className: `min-w-0 flex-1`,
                children: [(0, q.jsx)(`div`, {
                    className: `flex min-w-0 items-center gap-4`,
                    children: (0, q.jsx)(`div`, {
                        className: `skeleton-child h-7 w-48 max-w-[55vw] rounded-md`,
                        "data-testid": `sites-detail-title-skeleton`
                    })
                }), (0, q.jsx)(`div`, {
                    className: `skeleton-child mt-2 h-3.5 w-56 max-w-[60vw] rounded-md`
                })]
            }), t[1] = i) : i = t[1];
            let a;
            t[2] === n ? a = t[3] : (a = n == null ? null : (0, q.jsx)(`div`, {
                className: `ms-auto shrink-0`,
                children: n
            }), t[2] = n, t[3] = a);
            let o;
            return t[4] === a ? o = t[5] : (o = (0, q.jsxs)(`div`, {
                "aria-hidden": `true`,
                className: `flex min-w-0 items-center gap-4 pb-4`,
                "data-testid": `sites-detail-identity-skeleton`,
                children: [r, i, a]
            }), t[4] = a, t[5] = o), o
        }, Q = e => {
            "use forget";
            let t = (0, G.c)(7),
                {
                    screenshotUrl: n
                } = e,
                [r, i] = (0, K.useState)(!1),
                a;
            t[0] === n ? a = t[1] : (a = se(n), t[0] = n, t[1] = a);
            let o = a,
                s = o == null || r,
                c;
            t[2] !== o || t[3] !== s ? (c = s ? (0, q.jsx)(j, {
                "aria-hidden": `true`,
                className: `icon-lg text-token-text-tertiary`
            }) : o == null ? null : (0, q.jsx)(`img`, {
                alt: ``,
                className: `size-full! object-cover`,
                decoding: `async`,
                fetchPriority: `high`,
                loading: `eager`,
                src: o,
                onError: () => i(!0)
            }), t[2] = o, t[3] = s, t[4] = c) : c = t[4];
            let l;
            return t[5] === c ? l = t[6] : (l = (0, q.jsx)(`div`, {
                className: `bg-token-bg-secondary relative flex h-[35px] w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg sm:h-[51px] sm:w-[88px]`,
                children: c
            }), t[5] = c, t[6] = l), l
        }, $ = e => {
            "use forget";
            let t = (0, G.c)(4),
                {
                    active: n,
                    children: r,
                    to: i
                } = e,
                a;
            return t[0] !== n || t[1] !== r || t[2] !== i ? (a = (0, q.jsx)(ie, {
                as: `link`,
                active: n,
                to: i,
                children: r
            }), t[0] = n, t[1] = r, t[2] = i, t[3] = a) : a = t[3], a
        }
    }));
export {
    ce as i, le as n, H as r, J as t
};
//# sourceMappingURL=4f494712-ch6bjnvjwbaq9nnx.js.map
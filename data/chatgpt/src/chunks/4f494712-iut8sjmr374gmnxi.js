import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $rt as n,
    CG as r,
    EG as i,
    Grt as a,
    Hot as o,
    J5 as s,
    JT as c,
    Mw as l,
    Vot as u,
    Y5 as d,
    bG as f,
    fF as p,
    fc as m,
    jw as h,
    mF as g,
    qT as _,
    vc as v
} from "./4813494d-dfpv67hlp00pbohr.js";
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
    $j as E,
    H6 as ee,
    Jm as te,
    Njt as ne,
    Pjt as re,
    Qj as ie,
    V6 as ae,
    Zm as oe
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Fx as D,
    Ix as O,
    Kv as k,
    NS as A,
    PS as j,
    qv as M
} from "./30901919-7dzdc1ou0jtwkwpt.js";
import {
    Mx as N,
    kx as P
} from "./c2675c8c-9bs3zsr3vq259es7.js";
import {
    n as F,
    r as I
} from "./84bcef95-h2qt13aeeb6gcsss.js";
import {
    r as L,
    t as R
} from "./7cdccdf3-kzdxne1ovwujpfrt.js";
import {
    n as z,
    t as se
} from "./b5855e1f-ctr2g9sydvit7orw.js";
var B, V, H, U, W, ce = e((() => {
        B = w(), c(), n(), p(), M(), D(), re(), m(), r(), E(), L(), ae(), u(), S(), V = y(), H = e => {
            "use forget";
            let t = (0, B.c)(11),
                {
                    onEdit: n,
                    onVisit: r,
                    site: i
                } = e,
                a = T(),
                o = i.live_url;
            if (o == null) return null;
            let s;
            t[0] !== a || t[1] !== o || t[2] !== r || t[3] !== i.status ? (s = i.status === `active` ? (0, V.jsx)(_, {
                as: `a`,
                className: `text-sm!`,
                color: `secondary`,
                icon: k,
                label: a.formatMessage(W.visit),
                openNewTab: !0,
                rel: `noopener noreferrer`,
                to: o,
                onClick: () => r?.(),
                children: (0, V.jsx)(x, {
                    ...W.visit
                })
            }) : null, t[0] = a, t[1] = o, t[2] = r, t[3] = i.status, t[4] = s) : s = t[4];
            let c;
            t[5] !== n || t[6] !== i ? (c = (0, V.jsx)(U, {
                site: i,
                onEdit: n
            }), t[5] = n, t[6] = i, t[7] = c) : c = t[7];
            let l;
            return t[8] !== s || t[9] !== c ? (l = (0, V.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [s, c]
            }), t[8] = s, t[9] = c, t[10] = l) : l = t[10], l
        }, U = e => {
            "use forget";
            let t = (0, B.c)(21),
                {
                    onEdit: n,
                    site: r
                } = e,
                s = T(),
                c = g(),
                l;
            t[0] === c ? l = t[1] : (l = o(c), t[0] = c, t[1] = l);
            let u = l,
                d = r.live_url,
                p = r.status === `suspended`;
            if (d == null) return null;
            let m;
            t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (m = (0, V.jsx)(x, {
                ...W.editDisabledReason
            }), t[2] = m) : m = t[2];
            let h = !p,
                y;
            t[3] !== u || t[4] !== s || t[5] !== p || t[6] !== d || t[7] !== n || t[8] !== r.id || t[9] !== r.sharing || t[10] !== r.slug || t[11] !== r.title ? (y = e => (0, V.jsx)(_, {
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
                    n?.(), i(f.TPP), v(u.id, a.TPP), ee(u.id, {
                        accessMode: r.sharing.access_mode,
                        privacyStatus: ie(r.sharing.access_mode, r.sharing.counts_available !== !1 && r.sharing.user_count === 0 && r.sharing.group_count === 0),
                        projectId: r.id,
                        slug: r.slug,
                        title: r.title,
                        url: d
                    }, e.currentTarget)
                },
                onKeyDown: e => {
                    p && (e.key === `Enter` || e.key === ` `) && e.preventDefault()
                },
                children: (0, V.jsx)(x, {
                    ...W.edit
                })
            }), t[3] = u, t[4] = s, t[5] = p, t[6] = d, t[7] = n, t[8] = r.id, t[9] = r.sharing, t[10] = r.slug, t[11] = r.title, t[12] = y) : y = t[12];
            let b;
            t[13] !== h || t[14] !== y ? (b = (0, V.jsx)(ne, {
                content: m,
                disabled: h,
                side: `bottom-center`,
                children: y
            }), t[13] = h, t[14] = y, t[15] = b) : b = t[15];
            let S;
            t[16] === u ? S = t[17] : (S = (0, V.jsx)(R, {
                conversation: u
            }), t[16] = u, t[17] = S);
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
        G = w(), c(), l(), A(), N(), oe(), I(), d(), K = t(C()), S(), z(), q = y(), J = e => {
            "use forget";
            let t = (0, G.c)(29),
                {
                    analyticsEnabled: n,
                    analyticsTo: r,
                    backTo: i,
                    children: a,
                    headerAction: o,
                    isLoading: c,
                    selectedTab: l,
                    settingsTo: u,
                    site: d,
                    titleSuffix: f
                } = e,
                p = T(),
                m = c || d != null,
                h = n || l === `analytics`,
                g;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (g = {
                contentWrapper: `max-w-app-content px-4! pb-8 md:pb-8`,
                contentInner: `mt-0!`,
                headerWrapper: `max-w-none! px-4! pt-1 pb-0! md:px-4! md:pt-1 md:pb-0!`
            }, t[0] = g) : g = t[0];
            let _;
            t[1] !== i || t[2] !== c ? (_ = (0, q.jsx)(Y, {
                backTo: i,
                isLoading: c
            }), t[1] = i, t[2] = c, t[3] = _) : _ = t[3];
            let v = c && `group skeleton [--skeleton-opacity:0.75]`,
                y;
            t[4] === v ? y = t[5] : (y = s(`flex min-w-0 flex-col pt-4`, v), t[4] = v, t[5] = y);
            let b;
            t[6] !== o || t[7] !== c || t[8] !== d || t[9] !== f ? (b = c ? (0, q.jsx)(Z, {
                headerAction: o
            }) : d == null ? null : (0, q.jsx)(X, {
                headerAction: o,
                site: d,
                titleSuffix: f
            }), t[6] = o, t[7] = c, t[8] = d, t[9] = f, t[10] = b) : b = t[10];
            let S;
            t[11] !== r || t[12] !== m || t[13] !== p || t[14] !== l || t[15] !== u || t[16] !== h ? (S = m ? (0, q.jsx)(`div`, {
                className: `py-[9px]`,
                children: (0, q.jsxs)(`nav`, {
                    "aria-label": p.formatMessage({
                        id: `sites.detail.navigation.tabs.label`,
                        defaultMessage: `Site details`
                    }),
                    className: `no-scrollbar flex min-w-0 items-center gap-0 overflow-x-auto`,
                    children: [(0, q.jsx)($, {
                        active: l === `settings`,
                        to: u,
                        children: (0, q.jsx)(x, {
                            id: `sites.detail.navigation.settings.tab.label`,
                            defaultMessage: `Settings`
                        })
                    }), h ? (0, q.jsx)($, {
                        active: l === `analytics`,
                        to: r,
                        children: (0, q.jsx)(x, {
                            id: `sites.detail.navigation.analytics.tab.label`,
                            defaultMessage: `Analytics`
                        })
                    }) : null]
                })
            }) : null, t[11] = r, t[12] = m, t[13] = p, t[14] = l, t[15] = u, t[16] = h, t[17] = S) : S = t[17];
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
                i = T(),
                a = r && `group skeleton [--skeleton-opacity:0.75]`,
                o;
            t[0] === a ? o = t[1] : (o = s(`flex min-w-0 items-center`, a), t[0] = a, t[1] = o);
            let c;
            t[2] === i ? c = t[3] : (c = i.formatMessage({
                id: `sites.detail.navigation.breadcrumb.label`,
                defaultMessage: `Site breadcrumb`
            }), t[2] = i, t[3] = c);
            let l, u;
            t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (l = (0, q.jsx)(h, {
                "aria-hidden": `true`,
                className: `icon icon-md`
            }), u = (0, q.jsx)(x, {
                id: `sites.detail.navigation.back_to_sites.link.label`,
                defaultMessage: `Sites`
            }), t[4] = l, t[5] = u) : (l = t[4], u = t[5]);
            let d;
            t[6] === n ? d = t[7] : (d = (0, q.jsxs)(_, {
                as: `link`,
                className: `shrink-0 rounded-lg ps-0.5 pe-1.5 font-normal!`,
                color: `ghost`,
                contentWrapperClassName: `gap-[6px]`,
                size: `medium`,
                to: n,
                children: [l, u]
            }), t[6] = n, t[7] = d);
            let f;
            t[8] !== c || t[9] !== d ? (f = (0, q.jsx)(`nav`, {
                "aria-label": c,
                className: `flex min-w-0 items-center`,
                children: d
            }), t[8] = c, t[9] = d, t[10] = f) : f = t[10];
            let p;
            return t[11] !== o || t[12] !== f ? (p = (0, q.jsx)(`div`, {
                className: o,
                children: f
            }), t[11] = o, t[12] = f, t[13] = p) : p = t[13], p
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
            return t[0] !== n || t[1] !== r || t[2] !== i ? (a = (0, q.jsx)(te, {
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
//# sourceMappingURL=4f494712-iut8sjmr374gmnxi.js.map
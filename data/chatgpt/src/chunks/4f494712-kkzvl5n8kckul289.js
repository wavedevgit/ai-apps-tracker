import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bot as n,
    CG as r,
    EG as i,
    J5 as a,
    JT as o,
    Mw as s,
    Urt as c,
    Zrt as l,
    _c as u,
    bG as d,
    dc as f,
    fF as p,
    jw as m,
    mF as h,
    q5 as g,
    qT as _,
    zot as v
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as y,
    Hn as b,
    Pn as x,
    Rn as S,
    Tn as C,
    Vn as w,
    zn as T
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    $j as E,
    Ajt as ee,
    H6 as te,
    Jm as ne,
    Qj as re,
    V6 as ie,
    Zm as ae,
    jjt as oe
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    Fx as D,
    Ix as O,
    Kv as k,
    NS as A,
    PS as j,
    qv as M
} from "./30901919-jory365vq6ym5crx.js";
import {
    pS as N,
    uS as P
} from "./c2675c8c-nxl2ic2ofk2vw70s.js";
import {
    n as F,
    r as I
} from "./84bcef95-lpybdv0srnmz1deq.js";
import {
    r as L,
    t as R
} from "./7cdccdf3-iitbsuv31qgrcins.js";
import {
    n as z,
    t as se
} from "./b5855e1f-p7i5aex86qh206qb.js";
var B, V, H, U, W, ce = e((() => {
        B = C(), o(), l(), p(), M(), D(), oe(), f(), r(), E(), L(), ie(), v(), T(), V = w(), H = e => {
            "use forget";
            let t = (0, B.c)(11),
                {
                    onEdit: n,
                    onVisit: r,
                    site: i
                } = e,
                a = y(),
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
                    onEdit: r,
                    site: a
                } = e,
                o = y(),
                s = h(),
                l;
            t[0] === s ? l = t[1] : (l = n(s), t[0] = s, t[1] = l);
            let f = l,
                p = a.live_url,
                m = a.status === `suspended`;
            if (p == null) return null;
            let g;
            t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (g = (0, V.jsx)(x, {
                ...W.editDisabledReason
            }), t[2] = g) : g = t[2];
            let v = !m,
                b;
            t[3] !== f || t[4] !== o || t[5] !== m || t[6] !== p || t[7] !== r || t[8] !== a.id || t[9] !== a.sharing || t[10] !== a.slug || t[11] !== a.title ? (b = e => (0, V.jsx)(_, {
                ...e,
                "aria-disabled": m || void 0,
                className: `text-sm!`,
                color: `secondary`,
                icon: O,
                label: o.formatMessage(W.edit),
                type: `button`,
                visuallyDisabled: m,
                onClick: e => {
                    if (m) {
                        e.preventDefault();
                        return
                    }
                    r?.(), i(d.TPP), u(f.id, c.TPP), te(f.id, {
                        accessMode: a.sharing.access_mode,
                        privacyStatus: re(a.sharing.access_mode, a.sharing.counts_available !== !1 && a.sharing.user_count === 0 && a.sharing.group_count === 0),
                        projectId: a.id,
                        slug: a.slug,
                        title: a.title,
                        url: p
                    }, e.currentTarget)
                },
                onKeyDown: e => {
                    m && (e.key === `Enter` || e.key === ` `) && e.preventDefault()
                },
                children: (0, V.jsx)(x, {
                    ...W.edit
                })
            }), t[3] = f, t[4] = o, t[5] = m, t[6] = p, t[7] = r, t[8] = a.id, t[9] = a.sharing, t[10] = a.slug, t[11] = a.title, t[12] = b) : b = t[12];
            let S;
            t[13] !== v || t[14] !== b ? (S = (0, V.jsx)(ee, {
                content: g,
                disabled: v,
                side: `bottom-center`,
                children: b
            }), t[13] = v, t[14] = b, t[15] = S) : S = t[15];
            let C;
            t[16] === f ? C = t[17] : (C = (0, V.jsx)(R, {
                conversation: f
            }), t[16] = f, t[17] = C);
            let w;
            return t[18] !== S || t[19] !== C ? (w = (0, V.jsxs)(V.Fragment, {
                children: [S, C]
            }), t[18] = S, t[19] = C, t[20] = w) : w = t[20], w
        }, W = S({
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
        G = C(), o(), s(), A(), N(), ae(), I(), a(), K = t(b()), T(), z(), q = w(), J = e => {
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
                    site: u,
                    titleSuffix: d
                } = e,
                f = y(),
                p = s || u != null,
                m = n || c === `analytics`,
                h;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (h = {
                contentWrapper: `max-w-app-content px-4! pb-8 md:pb-8`,
                contentInner: `mt-0!`,
                headerWrapper: `max-w-none! px-4! pt-1 pb-0! md:px-4! md:pt-1 md:pb-0!`
            }, t[0] = h) : h = t[0];
            let _;
            t[1] !== i || t[2] !== s ? (_ = (0, q.jsx)(Y, {
                backTo: i,
                isLoading: s
            }), t[1] = i, t[2] = s, t[3] = _) : _ = t[3];
            let v = s && `group skeleton [--skeleton-opacity:0.75]`,
                b;
            t[4] === v ? b = t[5] : (b = g(`flex min-w-0 flex-col pt-4`, v), t[4] = v, t[5] = b);
            let S;
            t[6] !== o || t[7] !== s || t[8] !== u || t[9] !== d ? (S = s ? (0, q.jsx)(Z, {
                headerAction: o
            }) : u == null ? null : (0, q.jsx)(X, {
                headerAction: o,
                site: u,
                titleSuffix: d
            }), t[6] = o, t[7] = s, t[8] = u, t[9] = d, t[10] = S) : S = t[10];
            let C;
            t[11] !== r || t[12] !== p || t[13] !== f || t[14] !== c || t[15] !== l || t[16] !== m ? (C = p ? (0, q.jsx)(`div`, {
                className: `py-[9px]`,
                children: (0, q.jsxs)(`nav`, {
                    "aria-label": f.formatMessage({
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
                    }), m ? (0, q.jsx)($, {
                        active: c === `analytics`,
                        to: r,
                        children: (0, q.jsx)(x, {
                            id: `sites.detail.navigation.analytics.tab.label`,
                            defaultMessage: `Analytics`
                        })
                    }) : null]
                })
            }) : null, t[11] = r, t[12] = p, t[13] = f, t[14] = c, t[15] = l, t[16] = m, t[17] = C) : C = t[17];
            let w;
            t[18] !== a || t[19] !== p ? (w = p ? (0, q.jsx)(`div`, {
                className: `mt-8`,
                children: a
            }) : a, t[18] = a, t[19] = p, t[20] = w) : w = t[20];
            let T;
            t[21] !== b || t[22] !== S || t[23] !== C || t[24] !== w ? (T = (0, q.jsxs)(`div`, {
                className: b,
                children: [S, C, w]
            }), t[21] = b, t[22] = S, t[23] = C, t[24] = w, t[25] = T) : T = t[25];
            let E;
            return t[26] !== _ || t[27] !== T ? (E = (0, q.jsx)(`div`, {
                className: `bg-token-bg-primary block min-h-full w-full`,
                children: (0, q.jsx)(F, {
                    classNames: h,
                    header: _,
                    children: T
                })
            }), t[26] = _, t[27] = T, t[28] = E) : E = t[28], E
        }, Y = e => {
            "use forget";
            let t = (0, G.c)(14),
                {
                    backTo: n,
                    isLoading: r
                } = e,
                i = y(),
                a = r && `group skeleton [--skeleton-opacity:0.75]`,
                o;
            t[0] === a ? o = t[1] : (o = g(`flex min-w-0 items-center`, a), t[0] = a, t[1] = o);
            let s;
            t[2] === i ? s = t[3] : (s = i.formatMessage({
                id: `sites.detail.navigation.breadcrumb.label`,
                defaultMessage: `Site breadcrumb`
            }), t[2] = i, t[3] = s);
            let c, l;
            t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, q.jsx)(m, {
                "aria-hidden": `true`,
                className: `icon icon-md`
            }), l = (0, q.jsx)(x, {
                id: `sites.detail.navigation.back_to_sites.link.label`,
                defaultMessage: `Sites`
            }), t[4] = c, t[5] = l) : (c = t[4], l = t[5]);
            let u;
            t[6] === n ? u = t[7] : (u = (0, q.jsxs)(_, {
                as: `link`,
                className: `shrink-0 rounded-lg ps-0.5 pe-1.5 font-normal!`,
                color: `ghost`,
                contentWrapperClassName: `gap-[6px]`,
                size: `medium`,
                to: n,
                children: [c, l]
            }), t[6] = n, t[7] = u);
            let d;
            t[8] !== s || t[9] !== u ? (d = (0, q.jsx)(`nav`, {
                "aria-label": s,
                className: `flex min-w-0 items-center`,
                children: u
            }), t[8] = s, t[9] = u, t[10] = d) : d = t[10];
            let f;
            return t[11] !== o || t[12] !== d ? (f = (0, q.jsx)(`div`, {
                className: o,
                children: d
            }), t[11] = o, t[12] = d, t[13] = f) : f = t[13], f
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
            return t[0] !== n || t[1] !== r || t[2] !== i ? (a = (0, q.jsx)(ne, {
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
//# sourceMappingURL=4f494712-kkzvl5n8kckul289.js.map
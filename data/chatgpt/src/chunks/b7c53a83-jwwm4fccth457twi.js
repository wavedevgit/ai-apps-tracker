const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/2bb03506-lvadl95o2jg02xmn.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-mdvd4786a87166cc.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-bcbq46iub1p0ca1t.js", "assets/30901919-s8bko9nrkqwv6i4f.js", "assets/c470f5ab-jwd0o7jx9i9say9k.js", "assets/0e5afe53-hxm3yzzjqriayom4.js", "assets/conversation-small-ep6mlz5m.css", "assets/c2675c8c-oz03twoan08d72ud.js", "assets/82782bc9-b4xbouzwkkyrfqq2.js", "assets/8b34dbc2-lmwubajnld74ksfm.js", "assets/global-modals-dxg9ukpk.css", "assets/b00adf98-era7vi6h3xbjovoi.js", "assets/76b5a357-benxdh69028dkycz.js", "assets/e1258b01-h30gw9gshi5r8pfl.js", "assets/f4ec23bf-b9of8rfqpvbzz6no.js", "assets/482982b0-nhwa9zx0rolqy30i.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    Aw as r,
    Crt as i,
    K5 as a,
    Ow as o,
    Rz as s,
    a2 as c,
    brt as l,
    eE as u,
    fB as d,
    o2 as f,
    pB as p,
    q5 as m,
    zz as h
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as g,
    Ln as _,
    Nn as v,
    Rn as y,
    Vn as b,
    cn as x,
    ln as S,
    wn as C,
    zn as w
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    CTt as T,
    ETt as E,
    XWn as D,
    ZWn as O,
    cSt as k,
    cqn as A,
    sSt as j,
    sqn as M
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Iy as N,
    Ly as P,
    bC as ee,
    xC as F
} from "./30901919-s8bko9nrkqwv6i4f.js";
var I, L, R, z = e((() => {
    I = C(), E(), m(), L = g(), R = e => {
        "use forget";
        let t = (0, I.c)(6),
            {
                app: n,
                size: r,
                className: i
            } = e,
            o = r === void 0 ? `medium` : r,
            s = n.primaryConnector,
            c;
        t[0] === i ? c = t[1] : (c = a(`bg-token-bg-primary h-fit flex-shrink-0 rounded-xl border-[0.5px] p-2 shadow-sm`, i), t[0] = i, t[1] = c);
        let l;
        return t[2] !== n.primaryConnector || t[3] !== o || t[4] !== c ? (l = (0, L.jsx)(T, {
            connector: s,
            size: o,
            className: c
        }), t[2] = n.primaryConnector, t[3] = o, t[4] = c, t[5] = l) : l = t[5], l
    }
}));

function B({
    onClose: e,
    onBack: t,
    initialSelectedAction: n,
    showBackButton: r = !1,
    showOverlayBackground: i = !0,
    className: a
}) {
    "use no forget";
    let c = w();
    return (0, V.jsx)(o, {
        isOpen: !0,
        onClose: e,
        onBack: t,
        showCloseButton: !0,
        showBackButton: r || n != null,
        showOverlayBackground: i,
        size: `xlarge`,
        className: a ?? `max-h-[600px]`,
        title: c.formatMessage({
            id: `connector_settings.action_details.loading.title`,
            defaultMessage: `Loading tool details…`
        }),
        children: (0, V.jsx)(`div`, {
            role: `status`,
            "aria-busy": `true`,
            className: `flex justify-center p-8`,
            children: (0, V.jsx)(s, {})
        })
    })
}
var V, H, te = e((() => {
    r(), h(), f(), y(), V = g(), S(), H = c(() => x(() => import(`./2bb03506-lvadl95o2jg02xmn.js`).then(e => e.ConnectorActionDetailsModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18])), {
        loading: B
    })
}));

function ne(e) {
    return ie[e] ?? ae
}

function re({
    connectorId: e,
    adminConfigurableActionNames: t,
    initialEnabledActionNames: n,
    nextEnabledActionNames: r
}) {
    let i = new Set(t),
        a = new Set(n),
        o = new Set(r);
    return ne(e).filter(e => i.has(e) && a.has(e) && !o.has(e))
}
var ie, ae, oe = e((() => {
    ie = {
        connector_5f3c8c41a1e54ad7a76272c89e2554fa: [`list_folder`, `search`, `recent_documents`, `get_file_metadata`, `fetch`],
        asdk_app_69b31dc2110c8191b8b47dc98fe5a052: [`list_folder`, `search`, `get_file_metadata`, `download_link`, `fetch`, `get_shared_link_metadata`, `file_preview`],
        asdk_app_695bfc98071c8191bac7bc479aa27de7: [`list_folder_content_by_folder_id`, `get_folder_details`, `get_file_details`, `search_files_keyword`, `search_folders_by_name`]
    }, ae = []
}));

function se(e) {
    "use forget";
    let t = (0, ce.c)(9),
        {
            appName: r,
            onUndo: i
        } = e,
        a;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, U.jsx)(v, {
        id: `chatgpt.contextual_answers.admin.app_actions.library_warning.revert`,
        defaultMessage: `Revert`
    }), t[0] = a) : a = t[0];
    let o;
    t[1] === i ? o = t[2] : (o = (0, U.jsx)(n, {
        type: `button`,
        onClick: i,
        children: a
    }), t[1] = i, t[2] = o);
    let s;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, U.jsx)(`p`, {
        className: `font-semibold`,
        children: (0, U.jsx)(v, {
            id: `chatgpt.contextual_answers.admin.app_actions.library_warning.title`,
            defaultMessage: `This setting is required for certain library features.`
        })
    }), t[3] = s) : s = t[3];
    let c;
    t[4] === r ? c = t[5] : (c = (0, U.jsxs)(`div`, {
        className: `space-y-1`,
        children: [s, (0, U.jsx)(`p`, {
            children: (0, U.jsx)(v, {
                id: `chatgpt.contextual_answers.admin.app_actions.library_warning.body`,
                defaultMessage: `Continuing will disable the following features for your organization: mentioning, searching, viewing, and editing {appName} files. Accessing {appName} files from your library.`,
                values: {
                    appName: r
                }
            })
        })]
    }), t[4] = r, t[5] = c);
    let l;
    return t[6] !== o || t[7] !== c ? (l = (0, U.jsx)(`div`, {
        "data-testid": `mounted-library-action-warning`,
        role: `alert`,
        children: (0, U.jsx)(j, {
            type: `danger`,
            customIcon: d,
            primaryAction: o,
            children: c
        })
    }), t[6] = o, t[7] = c, t[8] = l) : l = t[8], l
}
var ce, U, le = e((() => {
    ce = C(), u(), p(), k(), y(), U = g()
}));

function ue(e) {
    return (0, K.jsx)(D, {
        href: fe,
        openNewTab: !0,
        className: `inline`,
        children: e
    }, `custom-connector-banner-link`)
}

function de(e, t) {
    return (0, K.jsx)(`p`, {
        children: (0, K.jsx)(v, {
            ...e
        })
    }, t)
}
var W, G, K, fe, q, pe, me, he, J, ge = e((() => {
    W = C(), A(), F(), O(), m(), G = t(b()), y(), K = g(), fe = `http://platform.openai.com/docs/mcp#risks-and-safety`, q = (0, G.createContext)({
        openedItem: null,
        onOpenItemChange: () => {}
    }), pe = e => {
        "use forget";
        let t = (0, W.c)(62),
            {
                title: n,
                id: r,
                checklistItems: i,
                children: o,
                checkedIds: s,
                onToggleCheckbox: c
            } = e,
            l = (0, G.useContext)(q),
            u = l.openedItem === r,
            d = i.every((e, t) => s.has(`${r}-${t}`)),
            f = d ? J.safetyDrawerReviewedSubtitle : J.safetyDrawerNotReviewedSubtitle,
            p;
        t[0] !== l || t[1] !== r || t[2] !== u ? (p = () => l.onOpenItemChange(u ? null : r), t[0] = l, t[1] = r, t[2] = u, t[3] = p) : p = t[3];
        let m = d ? `border-token-border-secondary` : `bg-token-bg-status-warning text-token-text-status-warning border-orange-50 dark:border-orange-800`,
            h;
        t[4] === m ? h = t[5] : (h = a(`group -mb-[1px] w-full border-b p-2 text-start text-balance transition-colors focus:outline-none`, m), t[4] = m, t[5] = h);
        let g = d ? `group-hover:bg-token-bg-tertiary` : `group-hover:border-orange-50 dark:group-hover:border-orange-800`,
            _;
        t[6] === g ? _ = t[7] : (_ = a(`flex w-full items-center justify-between gap-3 rounded-xl p-2`, g), t[6] = g, t[7] = _);
        let y;
        t[8] === n ? y = t[9] : (y = (0, K.jsx)(`p`, {
            className: `text-sm font-medium`,
            children: (0, K.jsx)(v, {
                ...n
            })
        }), t[8] = n, t[9] = y);
        let b = d ? `text-token-text-secondary` : `text-token-text-status-warning`,
            x;
        t[10] === b ? x = t[11] : (x = a(`text-xs transition-colors`, b), t[10] = b, t[11] = x);
        let S;
        t[12] === f ? S = t[13] : (S = (0, K.jsx)(v, {
            ...f
        }), t[12] = f, t[13] = S);
        let C;
        t[14] !== x || t[15] !== S ? (C = (0, K.jsx)(`p`, {
            className: x,
            children: S
        }), t[14] = x, t[15] = S, t[16] = C) : C = t[16];
        let w;
        t[17] !== C || t[18] !== y ? (w = (0, K.jsxs)(`div`, {
            className: `flex-1 space-y-0.5`,
            children: [y, C]
        }), t[17] = C, t[18] = y, t[19] = w) : w = t[19];
        let T = u && `rotate-90`,
            E = d ? `text-token-text-secondary` : `text-token-icon-status-warning`,
            D;
        t[20] !== T || t[21] !== E ? (D = a(`h-5 w-5 flex-shrink-0 transition-all`, T, E), t[20] = T, t[21] = E, t[22] = D) : D = t[22];
        let O;
        t[23] === D ? O = t[24] : (O = (0, K.jsx)(ee, {
            className: D
        }), t[23] = D, t[24] = O);
        let k;
        t[25] !== w || t[26] !== O || t[27] !== _ ? (k = (0, K.jsxs)(`div`, {
            className: _,
            children: [w, O]
        }), t[25] = w, t[26] = O, t[27] = _, t[28] = k) : k = t[28];
        let A;
        t[29] !== p || t[30] !== k || t[31] !== h ? (A = (0, K.jsx)(`button`, {
            type: `button`,
            onClick: p,
            className: h,
            children: k
        }), t[29] = p, t[30] = k, t[31] = h, t[32] = A) : A = t[32];
        let j = u && `grid-rows-[1fr]`,
            N;
        t[33] === j ? N = t[34] : (N = a(`grid grid-rows-[0fr] transition-all duration-200`, j), t[33] = j, t[34] = N);
        let P = u ? `` : `invisible`,
            F;
        t[35] === P ? F = t[36] : (F = a(`overflow-hidden transition-all duration-200`, P), t[35] = P, t[36] = F);
        let I;
        t[37] === o ? I = t[38] : (I = o ? (0, K.jsx)(`div`, {
            className: `mb-4`,
            children: o
        }) : null, t[37] = o, t[38] = I);
        let L;
        if (t[39] !== s || t[40] !== i || t[41] !== r || t[42] !== c) {
            let e;
            t[44] !== s || t[45] !== r || t[46] !== c ? (e = (e, t) => (0, K.jsxs)(`label`, {
                htmlFor: `${r}-${t}`,
                className: `flex cursor-pointer items-start gap-3 select-none`,
                children: [(0, K.jsx)(M, {
                    id: `${r}-${t}`,
                    checked: s.has(`${r}-${t}`),
                    className: `my-0.5`,
                    onChange: e => c?.(`${r}-${t}`, e.target.checked)
                }), (0, K.jsx)(`div`, {
                    className: `text-sm font-medium`,
                    children: (0, K.jsx)(v, {
                        ...e
                    })
                })]
            }, `${r}-${t}`), t[44] = s, t[45] = r, t[46] = c, t[47] = e) : e = t[47], L = i.map(e), t[39] = s, t[40] = i, t[41] = r, t[42] = c, t[43] = L
        } else L = t[43];
        let R;
        t[48] === L ? R = t[49] : (R = (0, K.jsx)(`div`, {
            className: `space-y-3`,
            children: L
        }), t[48] = L, t[49] = R);
        let z;
        t[50] !== I || t[51] !== R ? (z = (0, K.jsxs)(`div`, {
            className: `mx-4 my-3`,
            children: [I, R]
        }), t[50] = I, t[51] = R, t[52] = z) : z = t[52];
        let B;
        t[53] !== F || t[54] !== z ? (B = (0, K.jsx)(`div`, {
            className: F,
            children: z
        }), t[53] = F, t[54] = z, t[55] = B) : B = t[55];
        let V;
        t[56] !== N || t[57] !== B ? (V = (0, K.jsx)(`div`, {
            className: N,
            children: B
        }), t[56] = N, t[57] = B, t[58] = V) : V = t[58];
        let H;
        return t[59] !== A || t[60] !== V ? (H = (0, K.jsxs)(`li`, {
            className: `has-[button:focus-visible]:ring-token-border-selected relative overflow-hidden border-x border-t border-orange-50 first-of-type:rounded-t-2xl last-of-type:rounded-b-2xl last-of-type:border-b has-[button:focus-visible]:z-10 has-[button:focus-visible]:ring-2 dark:border-orange-800`,
            children: [A, V]
        }), t[59] = A, t[60] = V, t[61] = H) : H = t[61], H
    }, me = e => {
        "use forget";
        let t = (0, W.c)(7),
            {
                details: n,
                actions: r
            } = e;
        if (!n && !r) return null;
        let i;
        t[0] === n ? i = t[1] : (i = n ? (0, K.jsx)(`section`, {
            children: (0, K.jsx)(`p`, {
                className: `text-token-text-secondary mt-1 text-sm text-pretty`,
                children: (0, K.jsx)(v, {
                    ...n,
                    values: {
                        link: ue
                    }
                })
            })
        }) : null, t[0] = n, t[1] = i);
        let a;
        t[2] === r ? a = t[3] : (a = r ? (0, K.jsxs)(`section`, {
            children: [(0, K.jsx)(`p`, {
                className: `text-sm font-semibold`,
                children: (0, K.jsx)(v, {
                    ...J.safetyDrawerActionsTitle
                })
            }), (0, K.jsx)(`div`, {
                className: `text-token-text-secondary mt-1 space-y-1 text-sm text-pretty`,
                children: r.map(de)
            })]
        }) : null, t[2] = r, t[3] = a);
        let o;
        return t[4] !== i || t[5] !== a ? (o = (0, K.jsxs)(`div`, {
            className: `space-y-4`,
            children: [i, a]
        }), t[4] = i, t[5] = a, t[6] = o) : o = t[6], o
    }, he = e => {
        "use forget";
        let t = (0, W.c)(7),
            {
                children: n
            } = e,
            [r, i] = (0, G.useState)(null),
            a;
        t[0] === r ? a = t[1] : (a = {
            openedItem: r,
            onOpenItemChange: i
        }, t[0] = r, t[1] = a);
        let o;
        t[2] === n ? o = t[3] : (o = (0, K.jsx)(`ul`, {
            children: n
        }), t[2] = n, t[3] = o);
        let s;
        return t[4] !== a || t[5] !== o ? (s = (0, K.jsx)(q.Provider, {
            value: a,
            children: o
        }), t[4] = a, t[5] = o, t[6] = s) : s = t[6], s
    }, J = _({
        safetyDrawerReviewedSubtitle: {
            id: `7SnbTn`,
            defaultMessage: `Reviewed`
        },
        safetyDrawerNotReviewedSubtitle: {
            id: `L70LNQ`,
            defaultMessage: `Not reviewed`
        },
        safetyDrawerActionsTitle: {
            id: `oxykCH`,
            defaultMessage: `What you can do about it`
        }
    })
}));

function _e(e) {
    let t = [],
        n = 0;
    return e.replace(ye, (r, i, a, o, s) => {
        s > n && t.push(e.slice(n, s));
        let c = a ?? o;
        if (c == null) return r;
        let l = i ?? c;
        return t.push((0, ve.jsx)(D, {
            href: c,
            openNewTab: !0,
            className: `underline`,
            children: l
        }, `connector-instructions-link-${s}`)), n = s + r.length, r
    }), n < e.length && t.push(e.slice(n)), t.length === 0 ? e : t
}
var ve, ye, be = e((() => {
        O(), ve = g(), ye = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|(https?:\/\/[^\s)]+)/g
    })),
    Y, X, xe, Z, Q, Se, Ce, we, Te, Ee, De, Oe, ke, $, Ae = e((() => {
        Y = C(), ge(), be(), A(), P(), F(), O(), i(), m(), y(), X = g(), xe = e => {
            let t = l(`4232437627`).get(e, null);
            return typeof t == `string` && t.length > 0 ? t : null
        }, Z = () => [{
            id: `unauthorized-data-access`,
            accordionId: `risk-0`,
            title: $.unauthorizedDataAccessTitle,
            details: $.unauthorizedDataAccessDetails,
            actions: [$.unauthorizedDataAccessMitigation],
            checklist: [$.unauthorizedDataAccessAcknowledge]
        }, {
            id: `malicious-app`,
            accordionId: `risk-1`,
            title: $.maliciousAppTitle,
            details: $.maliciousAppDetails,
            actions: [$.maliciousAppTrustMitigation, $.maliciousAppParametersMitigation],
            checklist: [$.maliciousAppTrustAcknowledge, $.maliciousAppParametersAcknowledge]
        }], Q = (e, t) => e.checklist.every((n, r) => t.has(`${e.accordionId}-${r}`)), Se = (e, t, n) => {
            let r = new Set(e);
            return n ? r.add(t) : r.delete(t), r
        }, Ce = (e, t) => t == null ? Z().every(t => Q(t, e)) : Z().some(n => n.id === t && Q(n, e)), we = e => {
            "use forget";
            let t = (0, Y.c)(8),
                {
                    checkedIds: n,
                    onCheckedIdsChange: r
                } = e,
                i;
            t[0] !== n || t[1] !== r ? (i = (e, t) => {
                r(Se(n, e, t))
            }, t[0] = n, t[1] = r, t[2] = i) : i = t[2];
            let a = i,
                o;
            t[3] !== n || t[4] !== a ? (o = Z().map(e => (0, X.jsx)(pe, {
                id: e.accordionId,
                title: e.title,
                checklistItems: e.checklist,
                checkedIds: n,
                onToggleCheckbox: a,
                children: (0, X.jsx)(me, {
                    details: e.details,
                    actions: e.actions
                })
            }, e.id)), t[3] = n, t[4] = a, t[5] = o) : o = t[5];
            let s;
            return t[6] === o ? s = t[7] : (s = (0, X.jsx)(he, {
                children: o
            }), t[6] = o, t[7] = s), s
        }, Te = e => {
            "use forget";
            let t = (0, Y.c)(28),
                {
                    title: n,
                    reviewed: r,
                    onSelect: i,
                    dividerClassName: o
                } = e,
                s = r ? `hover:bg-token-bg-tertiary` : `bg-token-bg-status-warning`,
                c;
            t[0] !== o || t[1] !== s ? (c = a(`focus-visible:ring-token-border-selected flex w-full items-center gap-4 px-4 py-4 text-start focus-visible:ring-2 focus-visible:outline-none`, s, o), t[0] = o, t[1] = s, t[2] = c) : c = t[2];
            let l = r ? `text-token-text-primary` : `text-token-text-status-warning`,
                u;
            t[3] === l ? u = t[4] : (u = a(`block text-base leading-[26px] font-normal tracking-[-0.32px]`, l), t[3] = l, t[4] = u);
            let d;
            t[5] !== u || t[6] !== n ? (d = (0, X.jsx)(`span`, {
                className: u,
                children: n
            }), t[5] = u, t[6] = n, t[7] = d) : d = t[7];
            let f = r ? `text-token-text-secondary` : `text-token-text-status-warning`,
                p;
            t[8] === f ? p = t[9] : (p = a(`mt-0.5 block text-sm leading-5 tracking-[-0.15px]`, f), t[8] = f, t[9] = p);
            let m = r ? $.reviewed : $.notReviewed,
                h;
            t[10] === m ? h = t[11] : (h = (0, X.jsx)(v, {
                ...m
            }), t[10] = m, t[11] = h);
            let g;
            t[12] !== p || t[13] !== h ? (g = (0, X.jsx)(`span`, {
                className: p,
                children: h
            }), t[12] = p, t[13] = h, t[14] = g) : g = t[14];
            let _;
            t[15] !== g || t[16] !== d ? (_ = (0, X.jsxs)(`span`, {
                className: `min-w-0 flex-1`,
                children: [d, g]
            }), t[15] = g, t[16] = d, t[17] = _) : _ = t[17];
            let y = r ? `text-token-text-primary` : `text-token-icon-status-warning`,
                b;
            t[18] === y ? b = t[19] : (b = a(`flex size-9 shrink-0 items-center justify-center`, y), t[18] = y, t[19] = b);
            let x;
            t[20] === Symbol.for(`react.memo_cache_sentinel`) ? (x = (0, X.jsx)(ee, {
                "aria-hidden": !0,
                className: `size-[18px]`
            }), t[20] = x) : x = t[20];
            let S;
            t[21] === b ? S = t[22] : (S = (0, X.jsx)(`span`, {
                className: b,
                children: x
            }), t[21] = b, t[22] = S);
            let C;
            return t[23] !== i || t[24] !== _ || t[25] !== S || t[26] !== c ? (C = (0, X.jsxs)(`button`, {
                type: `button`,
                className: c,
                onClick: i,
                children: [_, S]
            }), t[23] = i, t[24] = _, t[25] = S, t[26] = c, t[27] = C) : C = t[27], C
        }, Ee = e => {
            "use forget";
            let t = (0, Y.c)(14),
                {
                    checkedIds: n,
                    onSelectRisk: r
                } = e,
                i;
            t[0] === n ? i = t[1] : (i = Ce(n), t[0] = n, t[1] = i);
            let o = i,
                s = o ? `border-token-border-default` : `border-orange-50 dark:border-orange-800`,
                c;
            t[2] === s ? c = t[3] : (c = a(`overflow-hidden rounded-xl border`, s), t[2] = s, t[3] = c);
            let l;
            t[4] !== o || t[5] !== n || t[6] !== r ? (l = Z().map((e, t) => {
                let i = Q(e, n);
                return (0, X.jsx)(Te, {
                    title: (0, X.jsx)(v, {
                        ...e.title
                    }),
                    reviewed: i,
                    onSelect: () => r(e.id),
                    dividerClassName: t > 0 ? o ? `border-token-border-default border-t` : `border-t border-orange-50 dark:border-orange-800` : void 0
                }, e.id)
            }), t[4] = o, t[5] = n, t[6] = r, t[7] = l) : l = t[7];
            let u;
            t[8] !== c || t[9] !== l ? (u = (0, X.jsx)(`div`, {
                "data-testid": `publish-safety-review-summary`,
                className: c,
                children: l
            }), t[8] = c, t[9] = l, t[10] = u) : u = t[10];
            let d;
            t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, X.jsxs)(D, {
                href: `https://developers.openai.com/apps-sdk/`,
                openNewTab: !0,
                className: `text-token-text-tertiary hover:text-token-text-secondary mt-3 flex w-fit items-center text-sm`,
                children: [(0, X.jsx)(N, {
                    className: `me-1.5 inline h-4.5 w-4.5`
                }), (0, X.jsx)(v, {
                    ...$.readDocs
                })]
            }), t[11] = d) : d = t[11];
            let f;
            return t[12] === u ? f = t[13] : (f = (0, X.jsxs)(`div`, {
                children: [u, d]
            }), t[12] = u, t[13] = f), f
        }, De = e => {
            "use forget";
            let t = (0, Y.c)(23),
                {
                    riskId: n,
                    checkedIds: r,
                    onCheckedIdsChange: i
                } = e,
                a, o, s, c, l, u, d;
            if (t[0] !== r || t[1] !== i || t[2] !== n) {
                d = Symbol.for(`react.early_return_sentinel`);
                bb0: {
                    let e;t[10] === n ? e = t[11] : (e = e => {
                        let {
                            id: t
                        } = e;
                        return t === n
                    }, t[10] = n, t[11] = e);
                    let f = Z().find(e);
                    if (f == null) {
                        d = null;
                        break bb0
                    }
                    l = `bg-token-bg-primary min-h-0 flex-1 overflow-y-auto p-6`,
                    u = (0, X.jsx)(`h2`, {
                        className: `text-token-text-primary text-xl leading-[25px] font-medium tracking-[-0.45px]`,
                        children: (0, X.jsx)(v, {
                            ...f.title
                        })
                    }),
                    s = `mt-6`,
                    c = (0, X.jsx)(me, {
                        details: f.details,
                        actions: f.actions
                    }),
                    a = `mt-6 space-y-3`,
                    o = f.checklist.map((e, t) => {
                        let n = `${f.accordionId}-${t}`;
                        return (0, X.jsxs)(`label`, {
                            htmlFor: n,
                            className: `flex cursor-pointer items-start gap-3 select-none`,
                            children: [(0, X.jsx)(M, {
                                id: n,
                                checked: r.has(n),
                                className: `my-0.5`,
                                onChange: e => i(Se(r, n, e.target.checked))
                            }), (0, X.jsx)(`span`, {
                                className: `text-sm font-medium`,
                                children: (0, X.jsx)(v, {
                                    ...e
                                })
                            })]
                        }, n)
                    })
                }
                t[0] = r, t[1] = i, t[2] = n, t[3] = a, t[4] = o, t[5] = s, t[6] = c, t[7] = l, t[8] = u, t[9] = d
            } else a = t[3], o = t[4], s = t[5], c = t[6], l = t[7], u = t[8], d = t[9];
            if (d !== Symbol.for(`react.early_return_sentinel`)) return d;
            let f;
            t[12] !== a || t[13] !== o ? (f = (0, X.jsx)(`div`, {
                className: a,
                children: o
            }), t[12] = a, t[13] = o, t[14] = f) : f = t[14];
            let p;
            t[15] !== s || t[16] !== c || t[17] !== f ? (p = (0, X.jsxs)(`div`, {
                className: s,
                children: [c, f]
            }), t[15] = s, t[16] = c, t[17] = f, t[18] = p) : p = t[18];
            let m;
            return t[19] !== l || t[20] !== u || t[21] !== p ? (m = (0, X.jsxs)(`div`, {
                className: l,
                children: [u, p]
            }), t[19] = l, t[20] = u, t[21] = p, t[22] = m) : m = t[22], m
        }, Oe = e => {
            "use forget";
            let t = (0, Y.c)(9),
                {
                    acknowledged: n,
                    onSelect: r
                } = e,
                i = n ? `border-token-border-default` : `border-orange-50 dark:border-orange-800`,
                o;
            t[0] === i ? o = t[1] : (o = a(`overflow-hidden rounded-xl border`, i), t[0] = i, t[1] = o);
            let s;
            t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, X.jsx)(v, {
                ...$.publishInstructionsTitle
            }), t[2] = s) : s = t[2];
            let c;
            t[3] !== n || t[4] !== r ? (c = (0, X.jsx)(Te, {
                title: s,
                reviewed: n,
                onSelect: r
            }), t[3] = n, t[4] = r, t[5] = c) : c = t[5];
            let l;
            return t[6] !== o || t[7] !== c ? (l = (0, X.jsx)(`div`, {
                className: o,
                children: c
            }), t[6] = o, t[7] = c, t[8] = l) : l = t[8], l
        }, ke = e => {
            "use forget";
            let t = (0, Y.c)(16),
                {
                    instructions: n,
                    acknowledged: r,
                    onAcknowledgedChange: i
                } = e,
                a;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, X.jsx)(`h2`, {
                className: `text-token-text-primary text-xl leading-[25px] font-medium tracking-[-0.45px]`,
                children: (0, X.jsx)(v, {
                    ...$.publishInstructionsTitle
                })
            }), t[0] = a) : a = t[0];
            let o;
            t[1] === n ? o = t[2] : (o = _e(n), t[1] = n, t[2] = o);
            let s;
            t[3] === o ? s = t[4] : (s = (0, X.jsx)(`div`, {
                className: `text-token-text-secondary text-sm leading-5 text-pretty`,
                children: o
            }), t[3] = o, t[4] = s);
            let c;
            t[5] === i ? c = t[6] : (c = e => i(e.target.checked), t[5] = i, t[6] = c);
            let l;
            t[7] !== r || t[8] !== c ? (l = (0, X.jsx)(M, {
                id: `publish-app-instructions-ack`,
                checked: r,
                className: `my-0.5`,
                onChange: c
            }), t[7] = r, t[8] = c, t[9] = l) : l = t[9];
            let u;
            t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, X.jsx)(`span`, {
                className: `text-sm font-medium`,
                children: (0, X.jsx)(v, {
                    ...$.publishInstructionsAcknowledge
                })
            }), t[10] = u) : u = t[10];
            let d;
            t[11] === l ? d = t[12] : (d = (0, X.jsxs)(`label`, {
                htmlFor: `publish-app-instructions-ack`,
                className: `flex cursor-pointer items-start gap-3 select-none`,
                children: [l, u]
            }), t[11] = l, t[12] = d);
            let f;
            return t[13] !== s || t[14] !== d ? (f = (0, X.jsxs)(`div`, {
                className: `bg-token-bg-primary min-h-0 flex-1 overflow-y-auto p-6`,
                children: [a, (0, X.jsxs)(`div`, {
                    className: `mt-6 space-y-6`,
                    children: [s, d]
                })]
            }), t[13] = s, t[14] = d, t[15] = f) : f = t[15], f
        }, $ = _({
            unauthorizedDataAccessTitle: {
                id: `admin.apps.publish_safety.unauthorized_data_access.title`,
                defaultMessage: `Review potential risk: Unauthorized data access`
            },
            unauthorizedDataAccessDetails: {
                id: `admin.apps.publish_safety.unauthorized_data_access.details`,
                defaultMessage: `Attackers may use prompt injections to affect conversations your enterprise users have, to trick ChatGPT into fetching sensitive data from this app and sending it to the attacker. <link>Learn more</link>`
            },
            unauthorizedDataAccessMitigation: {
                id: `admin.apps.publish_safety.unauthorized_data_access.mitigation`,
                defaultMessage: `Configure access to minimize how many people have access. If possible, audit usage of this app for security issues.`
            },
            unauthorizedDataAccessAcknowledge: {
                id: `admin.apps.publish_safety.unauthorized_data_access.acknowledge`,
                defaultMessage: `I understand`
            },
            maliciousAppTitle: {
                id: `admin.apps.publish_safety.malicious_app.title`,
                defaultMessage: `Review potential risk: Malicious app`
            },
            maliciousAppDetails: {
                id: `admin.apps.publish_safety.malicious_app.details`,
                defaultMessage: `OpenAI hasn't reviewed this app. If it is malicious, it may attempt to use attacks like prompt injections to access and obtain sensitive data from your enterprise's users. <link>Learn more</link>`
            },
            maliciousAppTrustMitigation: {
                id: `admin.apps.publish_safety.malicious_app.trust_mitigation`,
                defaultMessage: `Only use apps from companies that you trust.`
            },
            maliciousAppParametersMitigation: {
                id: `admin.apps.publish_safety.malicious_app.parameters_mitigation`,
                defaultMessage: `Review the parameters being sent as input to each tool carefully, and ensure that they are not requesting sensitive data that they shouldn't.`
            },
            maliciousAppTrustAcknowledge: {
                id: `admin.apps.publish_safety.malicious_app.trust_acknowledge`,
                defaultMessage: `I trust this app`
            },
            maliciousAppParametersAcknowledge: {
                id: `admin.apps.publish_safety.malicious_app.parameters_acknowledge`,
                defaultMessage: `I have reviewed the parameters being sent to each tool and they do not request sensitive data that they shouldn't.`
            },
            readDocs: {
                id: `admin.apps.publish_safety.read_docs`,
                defaultMessage: `Read the docs`
            },
            reviewed: {
                id: `admin.apps.publish_safety.reviewed`,
                defaultMessage: `Reviewed`
            },
            notReviewed: {
                id: `admin.apps.publish_safety.not_reviewed`,
                defaultMessage: `Not reviewed`
            },
            publishInstructionsTitle: {
                id: `admin.apps.publish_instructions.title`,
                defaultMessage: `Review publishing instructions`
            },
            publishInstructionsAcknowledge: {
                id: `admin.apps.publish_instructions.acknowledge`,
                defaultMessage: `I understand the publishing instructions`
            }
        })
    }));
export {
    R as _, Ee as a, Ce as c, se as d, le as f, te as g, H as h, De as i, be as l, oe as m, Oe as n, xe as o, re as p, we as r, Ae as s, ke as t, _e as u, z as v
};
//# sourceMappingURL=b7c53a83-jwwm4fccth457twi.js.map
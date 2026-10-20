const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/2bb03506-hpexgvos8nrj5ck5.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-dfpv67hlp00pbohr.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-cy5f8pl0g26s86so.js", "assets/30901919-7dzdc1ou0jtwkwpt.js", "assets/c470f5ab-d4g7lc53n1e1ao7o.js", "assets/0e5afe53-o2mcfq1ky1uaktz5.js", "assets/conversation-small-j5v9ogf2.css", "assets/c2675c8c-9bs3zsr3vq259es7.js", "assets/82782bc9-mb60yg1xlggwvqri.js", "assets/8b34dbc2-k1zgxrtsww83602u.js", "assets/global-modals-lv5n3ujm.css", "assets/b00adf98-my1gjul6yvyuxofk.js", "assets/76b5a357-benxdh69028dkycz.js", "assets/e1258b01-e4w4cezsgms4ti7w.js", "assets/f4ec23bf-b9of8rfqpvbzz6no.js", "assets/482982b0-nhwa9zx0rolqy30i.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Az as n,
    J5 as r,
    JT as i,
    Sw as a,
    X0 as o,
    Xnt as s,
    Y0 as c,
    Y5 as l,
    aB as u,
    iB as d,
    jz as f,
    qT as p,
    qnt as m,
    ww as h
} from "./4813494d-dfpv67hlp00pbohr.js";
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
    $Un as T,
    MTt as E,
    QUn as D,
    gSt as O,
    hSt as k,
    kTt as A,
    oKn as j,
    sKn as M
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    CC as N,
    Ry as P,
    SC as ee,
    zy as F
} from "./30901919-7dzdc1ou0jtwkwpt.js";
var I, L, R, z = e((() => {
    I = C(), E(), l(), L = g(), R = e => {
        "use forget";
        let t = (0, I.c)(6),
            {
                app: n,
                size: i,
                className: a
            } = e,
            o = i === void 0 ? `medium` : i,
            s = n.primaryConnector,
            c;
        t[0] === a ? c = t[1] : (c = r(`bg-token-bg-primary h-fit flex-shrink-0 rounded-xl border-[0.5px] p-2 shadow-sm`, a), t[0] = a, t[1] = c);
        let l;
        return t[2] !== n.primaryConnector || t[3] !== o || t[4] !== c ? (l = (0, L.jsx)(A, {
            connector: s,
            size: o,
            className: c
        }), t[2] = n.primaryConnector, t[3] = o, t[4] = c, t[5] = l) : l = t[5], l
    }
}));

function B({
    onClose: e,
    onBack: t,
    initialSelectedAction: r,
    showBackButton: i = !1,
    showOverlayBackground: o = !0,
    className: s
}) {
    "use no forget";
    let c = w();
    return (0, V.jsx)(a, {
        isOpen: !0,
        onClose: e,
        onBack: t,
        showCloseButton: !0,
        showBackButton: i || r != null,
        showOverlayBackground: o,
        size: `xlarge`,
        className: s ?? `max-h-[600px]`,
        title: c.formatMessage({
            id: `connector_settings.action_details.loading.title`,
            defaultMessage: `Loading tool details…`
        }),
        children: (0, V.jsx)(`div`, {
            role: `status`,
            "aria-busy": `true`,
            className: `flex justify-center p-8`,
            children: (0, V.jsx)(n, {})
        })
    })
}
var V, H, te = e((() => {
    h(), f(), o(), y(), V = g(), S(), H = c(() => x(() => import(`./2bb03506-hpexgvos8nrj5ck5.js`).then(e => e.ConnectorActionDetailsModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18])), {
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
            appName: n,
            onUndo: r
        } = e,
        i;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, U.jsx)(v, {
        id: `chatgpt.contextual_answers.admin.app_actions.library_warning.revert`,
        defaultMessage: `Revert`
    }), t[0] = i) : i = t[0];
    let a;
    t[1] === r ? a = t[2] : (a = (0, U.jsx)(p, {
        type: `button`,
        onClick: r,
        children: i
    }), t[1] = r, t[2] = a);
    let o;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, U.jsx)(`p`, {
        className: `font-semibold`,
        children: (0, U.jsx)(v, {
            id: `chatgpt.contextual_answers.admin.app_actions.library_warning.title`,
            defaultMessage: `This setting is required for certain library features.`
        })
    }), t[3] = o) : o = t[3];
    let s;
    t[4] === n ? s = t[5] : (s = (0, U.jsxs)(`div`, {
        className: `space-y-1`,
        children: [o, (0, U.jsx)(`p`, {
            children: (0, U.jsx)(v, {
                id: `chatgpt.contextual_answers.admin.app_actions.library_warning.body`,
                defaultMessage: `Continuing will disable the following features for your organization: mentioning, searching, viewing, and editing {appName} files. Accessing {appName} files from your library.`,
                values: {
                    appName: n
                }
            })
        })]
    }), t[4] = n, t[5] = s);
    let c;
    return t[6] !== a || t[7] !== s ? (c = (0, U.jsx)(`div`, {
        "data-testid": `mounted-library-action-warning`,
        role: `alert`,
        children: (0, U.jsx)(k, {
            type: `danger`,
            customIcon: d,
            primaryAction: a,
            children: s
        })
    }), t[6] = a, t[7] = s, t[8] = c) : c = t[8], c
}
var ce, U, le = e((() => {
    ce = C(), i(), u(), O(), y(), U = g()
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
var W, G, K, fe, pe, me, he, ge, q, _e = e((() => {
    W = C(), M(), N(), T(), l(), G = t(b()), y(), K = g(), fe = `http://platform.openai.com/docs/mcp#risks-and-safety`, pe = (0, G.createContext)({
        openedItem: null,
        onOpenItemChange: () => {}
    }), me = e => {
        "use forget";
        let t = (0, W.c)(62),
            {
                title: n,
                id: i,
                checklistItems: a,
                children: o,
                checkedIds: s,
                onToggleCheckbox: c
            } = e,
            l = (0, G.useContext)(pe),
            u = l.openedItem === i,
            d = a.every((e, t) => s.has(`${i}-${t}`)),
            f = d ? q.safetyDrawerReviewedSubtitle : q.safetyDrawerNotReviewedSubtitle,
            p;
        t[0] !== l || t[1] !== i || t[2] !== u ? (p = () => l.onOpenItemChange(u ? null : i), t[0] = l, t[1] = i, t[2] = u, t[3] = p) : p = t[3];
        let m = d ? `border-token-border-secondary` : `bg-token-bg-status-warning text-token-text-status-warning border-orange-50 dark:border-orange-800`,
            h;
        t[4] === m ? h = t[5] : (h = r(`group -mb-[1px] w-full border-b p-2 text-start text-balance transition-colors focus:outline-none`, m), t[4] = m, t[5] = h);
        let g = d ? `group-hover:bg-token-bg-tertiary` : `group-hover:border-orange-50 dark:group-hover:border-orange-800`,
            _;
        t[6] === g ? _ = t[7] : (_ = r(`flex w-full items-center justify-between gap-3 rounded-xl p-2`, g), t[6] = g, t[7] = _);
        let y;
        t[8] === n ? y = t[9] : (y = (0, K.jsx)(`p`, {
            className: `text-sm font-medium`,
            children: (0, K.jsx)(v, {
                ...n
            })
        }), t[8] = n, t[9] = y);
        let b = d ? `text-token-text-secondary` : `text-token-text-status-warning`,
            x;
        t[10] === b ? x = t[11] : (x = r(`text-xs transition-colors`, b), t[10] = b, t[11] = x);
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
        t[20] !== T || t[21] !== E ? (D = r(`h-5 w-5 flex-shrink-0 transition-all`, T, E), t[20] = T, t[21] = E, t[22] = D) : D = t[22];
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
        let M = u && `grid-rows-[1fr]`,
            N;
        t[33] === M ? N = t[34] : (N = r(`grid grid-rows-[0fr] transition-all duration-200`, M), t[33] = M, t[34] = N);
        let P = u ? `` : `invisible`,
            F;
        t[35] === P ? F = t[36] : (F = r(`overflow-hidden transition-all duration-200`, P), t[35] = P, t[36] = F);
        let I;
        t[37] === o ? I = t[38] : (I = o ? (0, K.jsx)(`div`, {
            className: `mb-4`,
            children: o
        }) : null, t[37] = o, t[38] = I);
        let L;
        if (t[39] !== s || t[40] !== a || t[41] !== i || t[42] !== c) {
            let e;
            t[44] !== s || t[45] !== i || t[46] !== c ? (e = (e, t) => (0, K.jsxs)(`label`, {
                htmlFor: `${i}-${t}`,
                className: `flex cursor-pointer items-start gap-3 select-none`,
                children: [(0, K.jsx)(j, {
                    id: `${i}-${t}`,
                    checked: s.has(`${i}-${t}`),
                    className: `my-0.5`,
                    onChange: e => c?.(`${i}-${t}`, e.target.checked)
                }), (0, K.jsx)(`div`, {
                    className: `text-sm font-medium`,
                    children: (0, K.jsx)(v, {
                        ...e
                    })
                })]
            }, `${i}-${t}`), t[44] = s, t[45] = i, t[46] = c, t[47] = e) : e = t[47], L = a.map(e), t[39] = s, t[40] = a, t[41] = i, t[42] = c, t[43] = L
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
    }, he = e => {
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
                    ...q.safetyDrawerActionsTitle
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
    }, ge = e => {
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
        return t[4] !== a || t[5] !== o ? (s = (0, K.jsx)(pe.Provider, {
            value: a,
            children: o
        }), t[4] = a, t[5] = o, t[6] = s) : s = t[6], s
    }, q = _({
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

function ve(e) {
    let t = [],
        n = 0;
    return e.replace(be, (r, i, a, o, s) => {
        s > n && t.push(e.slice(n, s));
        let c = a ?? o;
        if (c == null) return r;
        let l = i ?? c;
        return t.push((0, ye.jsx)(D, {
            href: c,
            openNewTab: !0,
            className: `underline`,
            children: l
        }, `connector-instructions-link-${s}`)), n = s + r.length, r
    }), n < e.length && t.push(e.slice(n)), t.length === 0 ? e : t
}
var ye, be, xe = e((() => {
        T(), ye = g(), be = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|(https?:\/\/[^\s)]+)/g
    })),
    J, Y, Se, X, Z, Ce, we, Te, Q, Ee, De, Oe, ke, $, Ae = e((() => {
        J = C(), _e(), xe(), M(), F(), N(), T(), s(), l(), y(), Y = g(), Se = e => {
            let t = m(`4232437627`).get(e, null);
            return typeof t == `string` && t.length > 0 ? t : null
        }, X = () => [{
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
        }], Z = (e, t) => e.checklist.every((n, r) => t.has(`${e.accordionId}-${r}`)), Ce = (e, t, n) => {
            let r = new Set(e);
            return n ? r.add(t) : r.delete(t), r
        }, we = (e, t) => t == null ? X().every(t => Z(t, e)) : X().some(n => n.id === t && Z(n, e)), Te = e => {
            "use forget";
            let t = (0, J.c)(8),
                {
                    checkedIds: n,
                    onCheckedIdsChange: r
                } = e,
                i;
            t[0] !== n || t[1] !== r ? (i = (e, t) => {
                r(Ce(n, e, t))
            }, t[0] = n, t[1] = r, t[2] = i) : i = t[2];
            let a = i,
                o;
            t[3] !== n || t[4] !== a ? (o = X().map(e => (0, Y.jsx)(me, {
                id: e.accordionId,
                title: e.title,
                checklistItems: e.checklist,
                checkedIds: n,
                onToggleCheckbox: a,
                children: (0, Y.jsx)(he, {
                    details: e.details,
                    actions: e.actions
                })
            }, e.id)), t[3] = n, t[4] = a, t[5] = o) : o = t[5];
            let s;
            return t[6] === o ? s = t[7] : (s = (0, Y.jsx)(ge, {
                children: o
            }), t[6] = o, t[7] = s), s
        }, Q = e => {
            "use forget";
            let t = (0, J.c)(28),
                {
                    title: n,
                    reviewed: i,
                    onSelect: a,
                    dividerClassName: o
                } = e,
                s = i ? `hover:bg-token-bg-tertiary` : `bg-token-bg-status-warning`,
                c;
            t[0] !== o || t[1] !== s ? (c = r(`focus-visible:ring-token-border-selected flex w-full items-center gap-4 px-4 py-4 text-start focus-visible:ring-2 focus-visible:outline-none`, s, o), t[0] = o, t[1] = s, t[2] = c) : c = t[2];
            let l = i ? `text-token-text-primary` : `text-token-text-status-warning`,
                u;
            t[3] === l ? u = t[4] : (u = r(`block text-base leading-[26px] font-normal tracking-[-0.32px]`, l), t[3] = l, t[4] = u);
            let d;
            t[5] !== u || t[6] !== n ? (d = (0, Y.jsx)(`span`, {
                className: u,
                children: n
            }), t[5] = u, t[6] = n, t[7] = d) : d = t[7];
            let f = i ? `text-token-text-secondary` : `text-token-text-status-warning`,
                p;
            t[8] === f ? p = t[9] : (p = r(`mt-0.5 block text-sm leading-5 tracking-[-0.15px]`, f), t[8] = f, t[9] = p);
            let m = i ? $.reviewed : $.notReviewed,
                h;
            t[10] === m ? h = t[11] : (h = (0, Y.jsx)(v, {
                ...m
            }), t[10] = m, t[11] = h);
            let g;
            t[12] !== p || t[13] !== h ? (g = (0, Y.jsx)(`span`, {
                className: p,
                children: h
            }), t[12] = p, t[13] = h, t[14] = g) : g = t[14];
            let _;
            t[15] !== g || t[16] !== d ? (_ = (0, Y.jsxs)(`span`, {
                className: `min-w-0 flex-1`,
                children: [d, g]
            }), t[15] = g, t[16] = d, t[17] = _) : _ = t[17];
            let y = i ? `text-token-text-primary` : `text-token-icon-status-warning`,
                b;
            t[18] === y ? b = t[19] : (b = r(`flex size-9 shrink-0 items-center justify-center`, y), t[18] = y, t[19] = b);
            let x;
            t[20] === Symbol.for(`react.memo_cache_sentinel`) ? (x = (0, Y.jsx)(ee, {
                "aria-hidden": !0,
                className: `size-[18px]`
            }), t[20] = x) : x = t[20];
            let S;
            t[21] === b ? S = t[22] : (S = (0, Y.jsx)(`span`, {
                className: b,
                children: x
            }), t[21] = b, t[22] = S);
            let C;
            return t[23] !== a || t[24] !== _ || t[25] !== S || t[26] !== c ? (C = (0, Y.jsxs)(`button`, {
                type: `button`,
                className: c,
                onClick: a,
                children: [_, S]
            }), t[23] = a, t[24] = _, t[25] = S, t[26] = c, t[27] = C) : C = t[27], C
        }, Ee = e => {
            "use forget";
            let t = (0, J.c)(14),
                {
                    checkedIds: n,
                    onSelectRisk: i
                } = e,
                a;
            t[0] === n ? a = t[1] : (a = we(n), t[0] = n, t[1] = a);
            let o = a,
                s = o ? `border-token-border-default` : `border-orange-50 dark:border-orange-800`,
                c;
            t[2] === s ? c = t[3] : (c = r(`overflow-hidden rounded-xl border`, s), t[2] = s, t[3] = c);
            let l;
            t[4] !== o || t[5] !== n || t[6] !== i ? (l = X().map((e, t) => {
                let r = Z(e, n);
                return (0, Y.jsx)(Q, {
                    title: (0, Y.jsx)(v, {
                        ...e.title
                    }),
                    reviewed: r,
                    onSelect: () => i(e.id),
                    dividerClassName: t > 0 ? o ? `border-token-border-default border-t` : `border-t border-orange-50 dark:border-orange-800` : void 0
                }, e.id)
            }), t[4] = o, t[5] = n, t[6] = i, t[7] = l) : l = t[7];
            let u;
            t[8] !== c || t[9] !== l ? (u = (0, Y.jsx)(`div`, {
                "data-testid": `publish-safety-review-summary`,
                className: c,
                children: l
            }), t[8] = c, t[9] = l, t[10] = u) : u = t[10];
            let d;
            t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, Y.jsxs)(D, {
                href: `https://developers.openai.com/apps-sdk/`,
                openNewTab: !0,
                className: `text-token-text-tertiary hover:text-token-text-secondary mt-3 flex w-fit items-center text-sm`,
                children: [(0, Y.jsx)(P, {
                    className: `me-1.5 inline h-4.5 w-4.5`
                }), (0, Y.jsx)(v, {
                    ...$.readDocs
                })]
            }), t[11] = d) : d = t[11];
            let f;
            return t[12] === u ? f = t[13] : (f = (0, Y.jsxs)(`div`, {
                children: [u, d]
            }), t[12] = u, t[13] = f), f
        }, De = e => {
            "use forget";
            let t = (0, J.c)(23),
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
                    let f = X().find(e);
                    if (f == null) {
                        d = null;
                        break bb0
                    }
                    l = `bg-token-bg-primary min-h-0 flex-1 overflow-y-auto p-6`,
                    u = (0, Y.jsx)(`h2`, {
                        className: `text-token-text-primary text-xl leading-[25px] font-medium tracking-[-0.45px]`,
                        children: (0, Y.jsx)(v, {
                            ...f.title
                        })
                    }),
                    s = `mt-6`,
                    c = (0, Y.jsx)(he, {
                        details: f.details,
                        actions: f.actions
                    }),
                    a = `mt-6 space-y-3`,
                    o = f.checklist.map((e, t) => {
                        let n = `${f.accordionId}-${t}`;
                        return (0, Y.jsxs)(`label`, {
                            htmlFor: n,
                            className: `flex cursor-pointer items-start gap-3 select-none`,
                            children: [(0, Y.jsx)(j, {
                                id: n,
                                checked: r.has(n),
                                className: `my-0.5`,
                                onChange: e => i(Ce(r, n, e.target.checked))
                            }), (0, Y.jsx)(`span`, {
                                className: `text-sm font-medium`,
                                children: (0, Y.jsx)(v, {
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
            t[12] !== a || t[13] !== o ? (f = (0, Y.jsx)(`div`, {
                className: a,
                children: o
            }), t[12] = a, t[13] = o, t[14] = f) : f = t[14];
            let p;
            t[15] !== s || t[16] !== c || t[17] !== f ? (p = (0, Y.jsxs)(`div`, {
                className: s,
                children: [c, f]
            }), t[15] = s, t[16] = c, t[17] = f, t[18] = p) : p = t[18];
            let m;
            return t[19] !== l || t[20] !== u || t[21] !== p ? (m = (0, Y.jsxs)(`div`, {
                className: l,
                children: [u, p]
            }), t[19] = l, t[20] = u, t[21] = p, t[22] = m) : m = t[22], m
        }, Oe = e => {
            "use forget";
            let t = (0, J.c)(9),
                {
                    acknowledged: n,
                    onSelect: i
                } = e,
                a = n ? `border-token-border-default` : `border-orange-50 dark:border-orange-800`,
                o;
            t[0] === a ? o = t[1] : (o = r(`overflow-hidden rounded-xl border`, a), t[0] = a, t[1] = o);
            let s;
            t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, Y.jsx)(v, {
                ...$.publishInstructionsTitle
            }), t[2] = s) : s = t[2];
            let c;
            t[3] !== n || t[4] !== i ? (c = (0, Y.jsx)(Q, {
                title: s,
                reviewed: n,
                onSelect: i
            }), t[3] = n, t[4] = i, t[5] = c) : c = t[5];
            let l;
            return t[6] !== o || t[7] !== c ? (l = (0, Y.jsx)(`div`, {
                className: o,
                children: c
            }), t[6] = o, t[7] = c, t[8] = l) : l = t[8], l
        }, ke = e => {
            "use forget";
            let t = (0, J.c)(16),
                {
                    instructions: n,
                    acknowledged: r,
                    onAcknowledgedChange: i
                } = e,
                a;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, Y.jsx)(`h2`, {
                className: `text-token-text-primary text-xl leading-[25px] font-medium tracking-[-0.45px]`,
                children: (0, Y.jsx)(v, {
                    ...$.publishInstructionsTitle
                })
            }), t[0] = a) : a = t[0];
            let o;
            t[1] === n ? o = t[2] : (o = ve(n), t[1] = n, t[2] = o);
            let s;
            t[3] === o ? s = t[4] : (s = (0, Y.jsx)(`div`, {
                className: `text-token-text-secondary text-sm leading-5 text-pretty`,
                children: o
            }), t[3] = o, t[4] = s);
            let c;
            t[5] === i ? c = t[6] : (c = e => i(e.target.checked), t[5] = i, t[6] = c);
            let l;
            t[7] !== r || t[8] !== c ? (l = (0, Y.jsx)(j, {
                id: `publish-app-instructions-ack`,
                checked: r,
                className: `my-0.5`,
                onChange: c
            }), t[7] = r, t[8] = c, t[9] = l) : l = t[9];
            let u;
            t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, Y.jsx)(`span`, {
                className: `text-sm font-medium`,
                children: (0, Y.jsx)(v, {
                    ...$.publishInstructionsAcknowledge
                })
            }), t[10] = u) : u = t[10];
            let d;
            t[11] === l ? d = t[12] : (d = (0, Y.jsxs)(`label`, {
                htmlFor: `publish-app-instructions-ack`,
                className: `flex cursor-pointer items-start gap-3 select-none`,
                children: [l, u]
            }), t[11] = l, t[12] = d);
            let f;
            return t[13] !== s || t[14] !== d ? (f = (0, Y.jsxs)(`div`, {
                className: `bg-token-bg-primary min-h-0 flex-1 overflow-y-auto p-6`,
                children: [a, (0, Y.jsxs)(`div`, {
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
    R as _, Ee as a, we as c, se as d, le as f, te as g, H as h, De as i, xe as l, oe as m, Oe as n, Se as o, re as p, Te as r, Ae as s, ke as t, ve as u, z as v
};
//# sourceMappingURL=b7c53a83-f9g9gvgk4j59c3c0.js.map
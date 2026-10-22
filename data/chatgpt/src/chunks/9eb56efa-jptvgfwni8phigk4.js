const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/66fa1d78-lwimygph3cqglh4o.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/8b34dbc2-n194ohawifys3bko.js", "assets/4813494d-nxpmzchfjvwqts17.js", "assets/root-lelxp0l2.css", "assets/conversation-small-m08q51xmfe7gjq3d.js", "assets/30901919-lgbmg5s09xld40kt.js", "assets/c470f5ab-hgik953cu5ujlhdm.js", "assets/0e5afe53-i4tqvmyg38miikw0.js", "assets/conversation-small-dtc7tvsx.css", "assets/82782bc9-ca5kcqz13rn6iprj.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Jo as n,
    a2 as r,
    c7 as i,
    fs as a,
    k8 as o,
    l7 as s,
    ns as c,
    o2 as l,
    os as u,
    q5 as d,
    us as f
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bn as p,
    Rn as m,
    Vn as h,
    cn as g,
    ln as _,
    wn as v,
    zn as y
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    MZt as b,
    Mjt as x,
    NZt as S,
    Njt as C,
    UVn as w,
    WVn as T,
    bC as E,
    yC as D
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    bS as O,
    yS as k
} from "./30901919-lgbmg5s09xld40kt.js";
import {
    a as A,
    o as j
} from "./40748e50-dewrdvmn8yj7cao0.js";
import {
    n as M,
    t as N
} from "./72bb039a-e6b65wz2ss8z63ab.js";
var P, F = e((() => {
    l(), _(), P = r(() => g(() => import(`./66fa1d78-lwimygph3cqglh4o.js`).then(e => e.WidgetShareModalLauncher), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])))
}));

function I(e, t) {
    return JSON.stringify([e, t.messageId, t.nativeWidgetResolutionId == null ? t.contentReferenceIndex : [`native_widget_resolution_id`, t.nativeWidgetResolutionId], t.widgetType ?? null, t.widgetName ?? null, t.shareOptions ?? null])
}

function L(e) {
    let t = !1;
    return {
        identity: e,
        invalidate: () => {
            t = !0
        },
        isValid: n => !t && n === e
    }
}
var R, z, B, V, H, U = e((() => {
        R = v(), w(), b(), u(), M(), D(), F(), o(), z = t(h()), m(), B = p(), V = e => ({
            isVisible: !1,
            label: e,
            onSelect: () => void 0
        }), H = e => {
            "use forget";
            let t = (0, R.c)(12),
                {
                    category: r,
                    conversation: i,
                    isCategoryEnabled: o,
                    isReady: s,
                    onEntryPointSelected: l,
                    shareFlowSource: u,
                    target: p
                } = e,
                m = s === void 0 || s,
                h = y(),
                g = (0, z.useContext)(N),
                _ = h.formatMessage(S.shareWidgetAction),
                v = {
                    ...p,
                    widgetType: p.widgetType ?? r
                },
                b = v.messageId.length > 0 && (v.nativeWidgetResolutionId == null ? Number.isInteger(v.contentReferenceIndex) && v.contentReferenceIndex >= 0 : v.nativeWidgetResolutionId.length > 0 && v.contentReferenceIndex == null),
                x;
            t[0] === i ? x = t[1] : (x = () => i.serverId$(), t[0] = i, t[1] = x);
            let C = d(x),
                w;
            t[2] === i ? w = t[3] : (w = () => T(i), t[2] = i, t[3] = w);
            let D = d(w),
                O = C != null && !D && m && !g && b && (o ?? E(r)),
                [k, A] = (0, z.useState)(null),
                j = C != null && b ? I(C, v) : null,
                M = O ? j : null;
            (0, z.useEffect)(() => {
                k && !k.selectionValidity.isValid(M) && k.selectionValidity.invalidate()
            }, [k, M]);
            let F = M != null && C ? {
                    isVisible: !0,
                    label: _,
                    onSelect: () => {
                        let e = c({
                            shareType: `widget`,
                            source: u,
                            widgetMetadata: a({
                                widgetName: v.widgetName,
                                widgetType: v.widgetType
                            })
                        });
                        f(e, n.CHATGPT_SHARE_FLOW_ACTION_ENTRY_POINT_SELECTED), A(t => ({
                            onModalOpened: l,
                            id: (t?.id ?? 0) + 1,
                            selectionValidity: L(M),
                            serverThreadId: C,
                            shareFlowContext: e,
                            target: v
                        }))
                    }
                } : V(_),
                H;
            t[4] !== i || t[5] !== k || t[6] !== M ? (H = k ? (0, B.jsx)(P, {
                conversation: i,
                isSelectionValid: () => k.selectionValidity.isValid(M),
                onModalOpened: k.onModalOpened,
                requestId: k.id,
                serverThreadId: k.serverThreadId,
                shareFlowContext: k.shareFlowContext,
                target: k.target
            }) : null, t[4] = i, t[5] = k, t[6] = M, t[7] = H) : H = t[7];
            let U = H,
                W;
            return t[8] !== F || t[9] !== U || t[10] !== j ? (W = {
                action: F,
                launcher: U,
                targetIdentity: j
            }, t[8] = F, t[9] = U, t[10] = j, t[11] = W) : W = t[11], W
        }
    })),
    W, G, K, q = e((() => {
        W = v(), U(), G = p(), K = e => {
            "use forget";
            let t = (0, W.c)(9),
                n, r;
            t[0] === e ? (n = t[1], r = t[2]) : ({
                children: n,
                ...r
            } = e, t[0] = e, t[1] = n, t[2] = r);
            let {
                action: i,
                launcher: a
            } = H(r), o;
            t[3] !== i || t[4] !== n ? (o = n(i), t[3] = i, t[4] = n, t[5] = o) : o = t[5];
            let s;
            return t[6] !== a || t[7] !== o ? (s = (0, G.jsxs)(G.Fragment, {
                children: [o, a]
            }), t[6] = a, t[7] = o, t[8] = s) : s = t[8], s
        }
    })),
    J, Y, X, Z = e((() => {
        J = v(), k(), C(), s(), A(), Y = p(), X = e => {
            "use forget";
            let t = (0, J.c)(8),
                {
                    action: n
                } = e,
                r;
            t[0] === n.label ? r = t[1] : (r = (0, Y.jsx)(`span`, {
                className: `font-sans`,
                children: n.label
            }), t[0] = n.label, t[1] = r);
            let a;
            t[2] !== n.label || t[3] !== n.onSelect ? (a = e => (0, Y.jsxs)(`button`, {
                ...e,
                type: `button`,
                "aria-label": n.label,
                className: i(j.toolbarButton, `text-token-text-secondary interactive-button-secondary flex size-9 items-center justify-center overflow-hidden rounded-full p-0 transition-[background-color,opacity]`, `can-hover:pointer-events-none can-hover:opacity-0`, `can-hover:group-hover/app-widget:bg-[var(--default-theme-user-msg-bg)] can-hover:group-hover/app-widget:pointer-events-auto can-hover:group-hover/app-widget:opacity-100`, `can-hover:group-hover/keyboard-or-hover:bg-[var(--default-theme-user-msg-bg)] can-hover:group-hover/keyboard-or-hover:pointer-events-auto can-hover:group-hover/keyboard-or-hover:opacity-100`, `can-hover:group-focus-within/keyboard-or-hover:bg-[var(--default-theme-user-msg-bg)] can-hover:group-focus-within/keyboard-or-hover:pointer-events-auto can-hover:group-focus-within/keyboard-or-hover:opacity-100`, `cant-hover:bg-primary cant-hover:pointer-events-auto cant-hover:opacity-100`, `focus-visible:pointer-events-auto focus-visible:bg-[var(--default-theme-user-msg-bg)] focus-visible:opacity-100`),
                "data-app-widget-download-exclude": !0,
                onClick: n.onSelect,
                children: [(0, Y.jsx)(O, {
                    "aria-hidden": !0,
                    className: `icon-sm`
                }), (0, Y.jsx)(`span`, {
                    className: `sr-only`,
                    children: n.label
                })]
            }), t[2] = n.label, t[3] = n.onSelect, t[4] = a) : a = t[4];
            let o;
            return t[5] !== r || t[6] !== a ? (o = (0, Y.jsx)(x, {
                className: `font-sans`,
                content: r,
                side: `bottom-center`,
                children: a
            }), t[5] = r, t[6] = a, t[7] = o) : o = t[7], o
        }
    }));
export {
    U as a, q as i, Z as n, H as o, K as r, X as t
};
//# sourceMappingURL=9eb56efa-jptvgfwni8phigk4.js.map
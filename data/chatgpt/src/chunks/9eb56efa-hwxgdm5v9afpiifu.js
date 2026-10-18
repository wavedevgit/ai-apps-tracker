const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/66fa1d78-jixhp63vejrl0ly1.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/8b34dbc2-gf9wnwcahty27ylx.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/root-lelxp0l2.css", "assets/conversation-small-fym1zmu9zimymmm1.js", "assets/30901919-e33mbl5u1y88w5wu.js", "assets/c470f5ab-m68dth1hatzjj8yh.js", "assets/0e5afe53-dl0nq2u2siu8c8q5.js", "assets/conversation-small-iha453gv.css", "assets/82782bc9-h658ejxn3ufkvr7a.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B6 as n,
    C0 as r,
    Ko as i,
    S0 as a,
    b5 as o,
    cs as s,
    es as c,
    i5 as l,
    is as u,
    us as d,
    y5 as f
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as p,
    Rn as m,
    Vn as h,
    cn as g,
    ln as _,
    wn as v,
    zn as y
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    KBn as b,
    Ojt as x,
    _C as S,
    bZt as C,
    gC as w,
    kjt as T,
    qBn as E,
    yZt as D
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    bS as O,
    yS as k
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    a as A,
    o as j
} from "./40748e50-lxm698x47537teze.js";
import {
    n as M,
    t as N
} from "./72bb039a-iheh04wb74j962wn.js";
var P, F = e((() => {
    r(), _(), P = a(() => g(() => import(`./66fa1d78-jixhp63vejrl0ly1.js`).then(e => e.WidgetShareModalLauncher), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])))
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
        R = v(), b(), D(), u(), M(), w(), F(), n(), z = t(h()), m(), B = p(), V = e => ({
            isVisible: !1,
            label: e,
            onSelect: () => void 0
        }), H = e => {
            "use forget";
            let t = (0, R.c)(12),
                {
                    category: n,
                    conversation: r,
                    isCategoryEnabled: a,
                    isReady: o,
                    onEntryPointSelected: u,
                    shareFlowSource: f,
                    target: p
                } = e,
                m = o === void 0 || o,
                h = y(),
                g = (0, z.useContext)(N),
                _ = h.formatMessage(C.shareWidgetAction),
                v = {
                    ...p,
                    widgetType: p.widgetType ?? n
                },
                b = v.messageId.length > 0 && (v.nativeWidgetResolutionId == null ? Number.isInteger(v.contentReferenceIndex) && v.contentReferenceIndex >= 0 : v.nativeWidgetResolutionId.length > 0 && v.contentReferenceIndex == null),
                x;
            t[0] === r ? x = t[1] : (x = () => r.serverId$(), t[0] = r, t[1] = x);
            let w = l(x),
                T;
            t[2] === r ? T = t[3] : (T = () => E(r), t[2] = r, t[3] = T);
            let D = l(T),
                O = w != null && !D && m && !g && b && (a ?? S(n)),
                [k, A] = (0, z.useState)(null),
                j = w != null && b ? I(w, v) : null,
                M = O ? j : null;
            (0, z.useEffect)(() => {
                k && !k.selectionValidity.isValid(M) && k.selectionValidity.invalidate()
            }, [k, M]);
            let F = M != null && w ? {
                    isVisible: !0,
                    label: _,
                    onSelect: () => {
                        let e = c({
                            shareType: `widget`,
                            source: f,
                            widgetMetadata: d({
                                widgetName: v.widgetName,
                                widgetType: v.widgetType
                            })
                        });
                        s(e, i.CHATGPT_SHARE_FLOW_ACTION_ENTRY_POINT_SELECTED), A(t => ({
                            onModalOpened: u,
                            id: (t?.id ?? 0) + 1,
                            selectionValidity: L(M),
                            serverThreadId: w,
                            shareFlowContext: e,
                            target: v
                        }))
                    }
                } : V(_),
                H;
            t[4] !== r || t[5] !== k || t[6] !== M ? (H = k ? (0, B.jsx)(P, {
                conversation: r,
                isSelectionValid: () => k.selectionValidity.isValid(M),
                onModalOpened: k.onModalOpened,
                requestId: k.id,
                serverThreadId: k.serverThreadId,
                shareFlowContext: k.shareFlowContext,
                target: k.target
            }) : null, t[4] = r, t[5] = k, t[6] = M, t[7] = H) : H = t[7];
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
        J = v(), k(), T(), o(), A(), Y = p(), X = e => {
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
            let i;
            t[2] !== n.label || t[3] !== n.onSelect ? (i = e => (0, Y.jsxs)(`button`, {
                ...e,
                type: `button`,
                "aria-label": n.label,
                className: f(j.toolbarButton, `text-token-text-secondary interactive-button-secondary flex size-9 items-center justify-center overflow-hidden rounded-full p-0 transition-[background-color,opacity]`, `can-hover:pointer-events-none can-hover:opacity-0`, `can-hover:group-hover/app-widget:bg-[var(--default-theme-user-msg-bg)] can-hover:group-hover/app-widget:pointer-events-auto can-hover:group-hover/app-widget:opacity-100`, `can-hover:group-hover/keyboard-or-hover:bg-[var(--default-theme-user-msg-bg)] can-hover:group-hover/keyboard-or-hover:pointer-events-auto can-hover:group-hover/keyboard-or-hover:opacity-100`, `can-hover:group-focus-within/keyboard-or-hover:bg-[var(--default-theme-user-msg-bg)] can-hover:group-focus-within/keyboard-or-hover:pointer-events-auto can-hover:group-focus-within/keyboard-or-hover:opacity-100`, `cant-hover:bg-primary cant-hover:pointer-events-auto cant-hover:opacity-100`, `focus-visible:pointer-events-auto focus-visible:bg-[var(--default-theme-user-msg-bg)] focus-visible:opacity-100`),
                "data-app-widget-download-exclude": !0,
                onClick: n.onSelect,
                children: [(0, Y.jsx)(O, {
                    "aria-hidden": !0,
                    className: `icon-sm`
                }), (0, Y.jsx)(`span`, {
                    className: `sr-only`,
                    children: n.label
                })]
            }), t[2] = n.label, t[3] = n.onSelect, t[4] = i) : i = t[4];
            let a;
            return t[5] !== r || t[6] !== i ? (a = (0, Y.jsx)(x, {
                className: `font-sans`,
                content: r,
                side: `bottom-center`,
                children: i
            }), t[5] = r, t[6] = i, t[7] = a) : a = t[7], a
        }
    }));
export {
    U as a, q as i, Z as n, H as o, K as r, X as t
};
//# sourceMappingURL=9eb56efa-hwxgdm5v9afpiifu.js.map
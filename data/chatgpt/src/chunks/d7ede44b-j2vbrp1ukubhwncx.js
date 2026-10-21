import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    N5 as t,
    aq as n,
    dq as r,
    h8 as i
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as a,
    wn as o
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    N_t as s,
    S_t as c
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    t as l
} from "./4b68ab38-hqs0yc0b0yhvv7p6.js";
import {
    d as u,
    t as d
} from "./707eab0c-iziu4upusihd9xbv.js";
import {
    t as f
} from "./a35abcd6-fl6iafxr1mqknzi0.js";
import {
    n as p,
    t as m
} from "./5b203e1c-bjhroneye8avde15.js";
import {
    n as h,
    t as g
} from "./cd7c6193-khlq9a3e7sesp7bj.js";
import {
    n as _,
    t as v
} from "./18093cad-gxacttrmb37lcogg.js";
var y, b, x, S, C, w = e((() => {
    y = `qjVA-W_SidebarBody`, b = `qjVA-W_SidebarContainer`, x = `qjVA-W_SidebarContent`, S = `qjVA-W_SidebarHeader`, C = {
        SidebarBody: y,
        SidebarContainer: b,
        SidebarContent: x,
        SidebarHeader: S
    }
}));

function T() {
    return r()
}

function E() {}

function D() {}

function O() {}

function k() {}
var A, j, M, N, P = e((() => {
    A = o(), p(), h(), i(), n(), d(), f(), v(), c(), w(), j = a(), M = 375, N = e => {
        "use forget";
        let n = (0, A.c)(35),
            {
                conversation: r
            } = e,
            i = t(T),
            a;
        n[0] === r ? a = n[1] : (a = () => g(r), n[0] = r, n[1] = a);
        let o = t(a),
            c = o?.chatSDK != null,
            d;
        n[2] === r ? d = n[3] : (d = () => {
            g.set(r, null)
        }, n[2] = r, n[3] = d);
        let f = d;
        if (!i) {
            let e;
            n[4] === f ? e = n[5] : (e = e => {
                e || f()
            }, n[4] = f, n[5] = e);
            let t = o?.focusedObject.title,
                i;
            n[6] === t ? i = n[7] : (i = (0, j.jsx)(_.Title, {
                children: t
            }), n[6] = t, n[7] = i);
            let a;
            n[8] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, j.jsx)(_.Close, {
                children: (0, j.jsx)(u, {
                    color: `secondary`,
                    variant: `ghost`,
                    uniform: !0,
                    size: `md`,
                    iconSize: `lg`,
                    className: `-mx-2`,
                    children: (0, j.jsx)(l, {})
                })
            }), n[8] = a) : a = n[8];
            let s;
            n[9] === i ? s = n[10] : (s = (0, j.jsxs)(_.Header, {
                children: [i, a]
            }), n[9] = i, n[10] = s);
            let d;
            n[11] !== f || n[12] !== r || n[13] !== c || n[14] !== o ? (d = c && (0, j.jsx)(m, {
                conversation: r,
                focusedObject: o.focusedObject,
                chatSDK: o.chatSDK,
                displayMode: `modal`,
                headerHeight: null,
                onReady: E,
                onClose: f,
                onCanGoBack: D,
                forceFullWidth: !0
            }), n[11] = f, n[12] = r, n[13] = c, n[14] = o, n[15] = d) : d = n[15];
            let p;
            n[16] === d ? p = n[17] : (p = (0, j.jsx)(_.Body, {
                className: `p-0`,
                children: d
            }), n[16] = d, n[17] = p);
            let h;
            n[18] !== s || n[19] !== p ? (h = (0, j.jsxs)(_.Content, {
                children: [s, p]
            }), n[18] = s, n[19] = p, n[20] = h) : h = n[20];
            let g;
            return n[21] !== c || n[22] !== h || n[23] !== e ? (g = (0, j.jsx)(_, {
                open: c,
                onOpenChange: e,
                children: h
            }), n[21] = c, n[22] = h, n[23] = e, n[24] = g) : g = n[24], g
        }
        let p, h;
        n[25] === Symbol.for(`react.memo_cache_sentinel`) ? (p = {
            x: M,
            opacity: 1
        }, h = {
            x: M,
            opacity: 1
        }, n[25] = p, n[26] = h) : (p = n[25], h = n[26]);
        let v;
        n[27] !== f || n[28] !== r || n[29] !== c || n[30] !== o ? (v = c && (0, j.jsxs)(`div`, {
            className: C.SidebarContent,
            children: [(0, j.jsxs)(`div`, {
                className: C.SidebarHeader,
                children: [(0, j.jsx)(`span`, {
                    children: o.focusedObject.title
                }), (0, j.jsx)(u, {
                    color: `secondary`,
                    variant: `ghost`,
                    uniform: !0,
                    size: `md`,
                    iconSize: `lg`,
                    onClick: f,
                    children: (0, j.jsx)(l, {})
                })]
            }), (0, j.jsx)(`div`, {
                className: C.SidebarBody,
                children: (0, j.jsx)(m, {
                    conversation: r,
                    focusedObject: o.focusedObject,
                    chatSDK: o.chatSDK,
                    displayMode: `sidebar`,
                    headerHeight: null,
                    onReady: O,
                    onClose: f,
                    onCanGoBack: k,
                    forceFullWidth: !0
                })
            })]
        }, `1p-app-sidebar`), n[27] = f, n[28] = r, n[29] = c, n[30] = o, n[31] = v) : v = n[31];
        let y;
        return n[32] !== c || n[33] !== v ? (y = (0, j.jsx)(s, {
            className: C.SidebarContainer,
            transitionClassName: `h-full w-full`,
            initial: p,
            exit: h,
            "data-sidebar-open": c,
            children: v
        }), n[32] = c, n[33] = v, n[34] = y) : y = n[34], y
    }
}));
export {
    P as n, N as t
};
//# sourceMappingURL=d7ede44b-j2vbrp1ukubhwncx.js.map
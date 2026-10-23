import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    j5 as n,
    lq as r,
    rq as i
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as a,
    wn as o
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    T_t as s,
    m_t as c
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    d as l,
    t as u
} from "./707eab0c-iv8ek9kc5qu6c0ky.js";
import {
    t as d
} from "./4b68ab38-dt9ayp4by7y7cj82.js";
import {
    t as f
} from "./a35abcd6-byh6ggz75l0wrrkr.js";
import {
    n as p,
    t as m
} from "./5b203e1c-locljt79bdyh4khi.js";
import {
    n as h,
    t as g
} from "./cd7c6193-c38khf2nn57jm4p7.js";
import {
    n as _,
    t as v
} from "./18093cad-n00fxxrbtwbr8v1m.js";
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
    A = o(), p(), h(), t(), i(), u(), f(), v(), c(), w(), j = a(), M = 375, N = e => {
        "use forget";
        let t = (0, A.c)(35),
            {
                conversation: r
            } = e,
            i = n(T),
            a;
        t[0] === r ? a = t[1] : (a = () => g(r), t[0] = r, t[1] = a);
        let o = n(a),
            c = o?.chatSDK != null,
            u;
        t[2] === r ? u = t[3] : (u = () => {
            g.set(r, null)
        }, t[2] = r, t[3] = u);
        let f = u;
        if (!i) {
            let e;
            t[4] === f ? e = t[5] : (e = e => {
                e || f()
            }, t[4] = f, t[5] = e);
            let n = o?.focusedObject.title,
                i;
            t[6] === n ? i = t[7] : (i = (0, j.jsx)(_.Title, {
                children: n
            }), t[6] = n, t[7] = i);
            let a;
            t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, j.jsx)(_.Close, {
                children: (0, j.jsx)(l, {
                    color: `secondary`,
                    variant: `ghost`,
                    uniform: !0,
                    size: `md`,
                    iconSize: `lg`,
                    className: `-mx-2`,
                    children: (0, j.jsx)(d, {})
                })
            }), t[8] = a) : a = t[8];
            let s;
            t[9] === i ? s = t[10] : (s = (0, j.jsxs)(_.Header, {
                children: [i, a]
            }), t[9] = i, t[10] = s);
            let u;
            t[11] !== f || t[12] !== r || t[13] !== c || t[14] !== o ? (u = c && (0, j.jsx)(m, {
                conversation: r,
                focusedObject: o.focusedObject,
                chatSDK: o.chatSDK,
                displayMode: `modal`,
                headerHeight: null,
                onReady: E,
                onClose: f,
                onCanGoBack: D,
                forceFullWidth: !0
            }), t[11] = f, t[12] = r, t[13] = c, t[14] = o, t[15] = u) : u = t[15];
            let p;
            t[16] === u ? p = t[17] : (p = (0, j.jsx)(_.Body, {
                className: `p-0`,
                children: u
            }), t[16] = u, t[17] = p);
            let h;
            t[18] !== s || t[19] !== p ? (h = (0, j.jsxs)(_.Content, {
                children: [s, p]
            }), t[18] = s, t[19] = p, t[20] = h) : h = t[20];
            let g;
            return t[21] !== c || t[22] !== h || t[23] !== e ? (g = (0, j.jsx)(_, {
                open: c,
                onOpenChange: e,
                children: h
            }), t[21] = c, t[22] = h, t[23] = e, t[24] = g) : g = t[24], g
        }
        let p, h;
        t[25] === Symbol.for(`react.memo_cache_sentinel`) ? (p = {
            x: M,
            opacity: 1
        }, h = {
            x: M,
            opacity: 1
        }, t[25] = p, t[26] = h) : (p = t[25], h = t[26]);
        let v;
        t[27] !== f || t[28] !== r || t[29] !== c || t[30] !== o ? (v = c && (0, j.jsxs)(`div`, {
            className: C.SidebarContent,
            children: [(0, j.jsxs)(`div`, {
                className: C.SidebarHeader,
                children: [(0, j.jsx)(`span`, {
                    children: o.focusedObject.title
                }), (0, j.jsx)(l, {
                    color: `secondary`,
                    variant: `ghost`,
                    uniform: !0,
                    size: `md`,
                    iconSize: `lg`,
                    onClick: f,
                    children: (0, j.jsx)(d, {})
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
        }, `1p-app-sidebar`), t[27] = f, t[28] = r, t[29] = c, t[30] = o, t[31] = v) : v = t[31];
        let y;
        return t[32] !== c || t[33] !== v ? (y = (0, j.jsx)(s, {
            className: C.SidebarContainer,
            transitionClassName: `h-full w-full`,
            initial: p,
            exit: h,
            "data-sidebar-open": c,
            children: v
        }), t[32] = c, t[33] = v, t[34] = y) : y = t[34], y
    }
}));
export {
    P as n, N as t
};
//# sourceMappingURL=d7ede44b-dtpp47fcah2gbixr.js.map
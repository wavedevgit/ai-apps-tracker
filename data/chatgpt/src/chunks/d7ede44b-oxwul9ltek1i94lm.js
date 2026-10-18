import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B6 as t,
    NK as n,
    i5 as r,
    zK as i
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as a,
    wn as o
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    O_t as s,
    __t as c
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    t as l
} from "./4b68ab38-e2jtqfi6qknkay6v.js";
import {
    d as u,
    t as d
} from "./707eab0c-joqgzfzs0dn7ukcc.js";
import {
    t as f
} from "./a35abcd6-o5uzbzp1jprs3y1b.js";
import {
    n as p,
    t as m
} from "./5b203e1c-b6rv8ic7rrx85ml8.js";
import {
    n as h,
    t as g
} from "./cd7c6193-m7k5fj0c5qjkrbbc.js";
import {
    n as _,
    t as v
} from "./18093cad-ik1j6oyh5nr3ta5y.js";
var y, b, x, S, C, w = e((() => {
    y = `qjVA-W_SidebarBody`, b = `qjVA-W_SidebarContainer`, x = `qjVA-W_SidebarContent`, S = `qjVA-W_SidebarHeader`, C = {
        SidebarBody: y,
        SidebarContainer: b,
        SidebarContent: x,
        SidebarHeader: S
    }
}));

function T() {
    return i()
}

function E() {}

function D() {}

function O() {}

function k() {}
var A, j, M, N, P = e((() => {
    A = o(), p(), h(), t(), n(), d(), f(), v(), c(), w(), j = a(), M = 375, N = e => {
        "use forget";
        let t = (0, A.c)(35),
            {
                conversation: n
            } = e,
            i = r(T),
            a;
        t[0] === n ? a = t[1] : (a = () => g(n), t[0] = n, t[1] = a);
        let o = r(a),
            c = o?.chatSDK != null,
            d;
        t[2] === n ? d = t[3] : (d = () => {
            g.set(n, null)
        }, t[2] = n, t[3] = d);
        let f = d;
        if (!i) {
            let e;
            t[4] === f ? e = t[5] : (e = e => {
                e || f()
            }, t[4] = f, t[5] = e);
            let r = o?.focusedObject.title,
                i;
            t[6] === r ? i = t[7] : (i = (0, j.jsx)(_.Title, {
                children: r
            }), t[6] = r, t[7] = i);
            let a;
            t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, j.jsx)(_.Close, {
                children: (0, j.jsx)(u, {
                    color: `secondary`,
                    variant: `ghost`,
                    uniform: !0,
                    size: `md`,
                    iconSize: `lg`,
                    className: `-mx-2`,
                    children: (0, j.jsx)(l, {})
                })
            }), t[8] = a) : a = t[8];
            let s;
            t[9] === i ? s = t[10] : (s = (0, j.jsxs)(_.Header, {
                children: [i, a]
            }), t[9] = i, t[10] = s);
            let d;
            t[11] !== f || t[12] !== n || t[13] !== c || t[14] !== o ? (d = c && (0, j.jsx)(m, {
                conversation: n,
                focusedObject: o.focusedObject,
                chatSDK: o.chatSDK,
                displayMode: `modal`,
                headerHeight: null,
                onReady: E,
                onClose: f,
                onCanGoBack: D,
                forceFullWidth: !0
            }), t[11] = f, t[12] = n, t[13] = c, t[14] = o, t[15] = d) : d = t[15];
            let p;
            t[16] === d ? p = t[17] : (p = (0, j.jsx)(_.Body, {
                className: `p-0`,
                children: d
            }), t[16] = d, t[17] = p);
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
        t[27] !== f || t[28] !== n || t[29] !== c || t[30] !== o ? (v = c && (0, j.jsxs)(`div`, {
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
                    conversation: n,
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
        }, `1p-app-sidebar`), t[27] = f, t[28] = n, t[29] = c, t[30] = o, t[31] = v) : v = t[31];
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
//# sourceMappingURL=d7ede44b-oxwul9ltek1i94lm.js.map
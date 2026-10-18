const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/dedae8f8-mgjt8rcetxpgj1gc.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/58bafdef-daxzrhhugn56vduq.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/root-lelxp0l2.css", "assets/conversation-small-fym1zmu9zimymmm1.js", "assets/30901919-e33mbl5u1y88w5wu.js", "assets/c470f5ab-m68dth1hatzjj8yh.js", "assets/0e5afe53-dl0nq2u2siu8c8q5.js", "assets/conversation-small-iha453gv.css"]))) => i.map(i => d[i]);
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B6 as t,
    C0 as n,
    S0 as r,
    i5 as i
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as a,
    Ln as o,
    Rn as s,
    cn as c,
    ln as l,
    wn as u,
    zn as d
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    B7 as f,
    THn as p,
    b3t as m,
    f3t as h,
    g3t as g,
    n_ as _,
    okt as v,
    r_ as y,
    skt as b,
    wHn as x,
    y3t as S,
    z7 as C
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    mg as w,
    pg as T
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    a as E,
    i as D,
    n as O,
    r as k,
    t as A
} from "./58bafdef-daxzrhhugn56vduq.js";
var j, M = e((() => {
    s(), j = o({
        openFeedback: {
            id: `codeBlocks.feedback.button`,
            defaultMessage: `Give feedback`
        },
        popupAriaLabel: {
            id: `codeBlocks.visualizationFeedback.popupAriaLabel`,
            defaultMessage: `Give feedback`
        }
    })
}));

function N(e) {
    "use forget";
    let t = (0, H.c)(14),
        {
            onOpenChange: n,
            open: r,
            reference: a,
            target: o,
            triggerButton: s
        } = e,
        c = d();
    if (i(P)) return null;
    let l;
    t[0] === c ? l = t[1] : (l = c.formatMessage(j.popupAriaLabel), t[0] = c, t[1] = l);
    let u;
    t[2] === n ? u = t[3] : (u = () => n(!1), t[2] = n, t[3] = u);
    let f;
    t[4] !== a || t[5] !== u || t[6] !== o ? (f = (0, U.jsx)(D, {
        onClose: u,
        onSubmitted: A,
        reference: a,
        target: o
    }), t[4] = a, t[5] = u, t[6] = o, t[7] = f) : f = t[7];
    let p;
    return t[8] !== n || t[9] !== r || t[10] !== l || t[11] !== f || t[12] !== s ? (p = (0, U.jsx)(C, {
        open: r,
        onOpenChange: n,
        triggerButton: s,
        alignAgainstAnchor: `end`,
        side: `bottom`,
        sideOffset: 4,
        size: `none`,
        className: `z-50 flex w-70 flex-col p-2`,
        contentAriaLabel: l,
        children: f
    }), t[8] = n, t[9] = r, t[10] = l, t[11] = f, t[12] = s, t[13] = p) : p = t[13], p
}

function P() {
    return k()
}

function F(e) {
    "use forget";
    let t = (0, H.c)(9),
        {
            anchorName: n,
            onOpenChange: r,
            open: a,
            reference: o,
            source: s,
            target: c
        } = e,
        l = i(L);
    if (b(I), l) return null;
    let u;
    t[0] !== o || t[1] !== c ? (u = {
        reference: o,
        target: c
    }, t[0] = o, t[1] = c, t[2] = u) : u = t[2];
    let d = u,
        f;
    return t[3] !== n || t[4] !== r || t[5] !== a || t[6] !== s || t[7] !== d ? (f = (0, U.jsx)(S, {
        anchorName: n,
        className: `z-50`,
        for: W,
        onOpenChange: r,
        open: a,
        side: `bottom-end`,
        source: s,
        withProps: d
    }), t[3] = n, t[4] = r, t[5] = a, t[6] = s, t[7] = d, t[8] = f) : f = t[8], f
}

function I() {
    W.prefetch()
}

function L() {
    return k()
}

function R(e) {
    "use forget";
    let t = (0, H.c)(5),
        {
            gates: n,
            onSelectFeedback: r
        } = e,
        a = n ?? _(),
        o = d(),
        s = i(z);
    if (a.widgetFeedbackEnabled !== !0 || s) return null;
    let c;
    t[0] === o ? c = t[1] : (c = o.formatMessage(j.openFeedback), t[0] = o, t[1] = c);
    let l = c,
        u;
    return t[2] !== l || t[3] !== r ? (u = (0, U.jsx)(x.Item, {
        icon: w,
        onSelect: r,
        children: l
    }), t[2] = l, t[3] = r, t[4] = u) : u = t[4], u
}

function z() {
    return k()
}

function B(e) {
    "use forget";
    let t = (0, H.c)(7),
        {
            gates: n,
            onSelectFeedback: r
        } = e,
        a = n ?? _(),
        o = d(),
        s = i(V);
    if (a.widgetFeedbackEnabled !== !0 || s) return null;
    let c;
    t[0] === o ? c = t[1] : (c = o.formatMessage(j.openFeedback), t[0] = o, t[1] = c);
    let l = c,
        u;
    t[2] === r ? u = t[3] : (u = () => r(), t[2] = r, t[3] = u);
    let f;
    return t[4] !== l || t[5] !== u ? (f = (0, U.jsx)(h, {
        icon: w,
        onClick: u,
        children: l
    }), t[4] = l, t[5] = u, t[6] = f) : f = t[6], f
}

function V() {
    return k()
}
var H, U, W, G = e((() => {
    H = u(), E(), M(), O(), y(), p(), T(), f(), g(), m(), t(), v(), n(), s(), U = a(), l(), W = r(() => c(() => import(`./dedae8f8-mgjt8rcetxpgj1gc.js`).then(e => e.BlockFeedbackMenuContent), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])))
}));
export {
    G as a, N as i, F as n, B as r, R as t
};
//# sourceMappingURL=e01e2324-jx284x6tly228734.js.map
const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/dedae8f8-m99kb4tos4l2obcs.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/58bafdef-1h4o636e3pzxktef.js", "assets/4813494d-i89nb6zlze66idsz.js", "assets/root-lelxp0l2.css", "assets/conversation-small-fh0oqifngkf5rvl1.js", "assets/30901919-cmi3nh547dwrqkxv.js", "assets/c470f5ab-ctk9cdujw17c2exz.js", "assets/0e5afe53-fofrudqqfgiodxgc.js", "assets/conversation-small-7l2sfhqg.css"]))) => i.map(i => d[i]);
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    J5 as n,
    a2 as r,
    o2 as i
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    Bn as a,
    Ln as o,
    Rn as s,
    cn as c,
    ln as l,
    wn as u,
    zn as d
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    I7 as f,
    L7 as p,
    SUn as m,
    _3t as h,
    a_ as g,
    b3t as _,
    dkt as v,
    o_ as y,
    p3t as b,
    ukt as x,
    x3t as S,
    xUn as C
} from "./conversation-small-fh0oqifngkf5rvl1.js";
import {
    mg as w,
    pg as T
} from "./30901919-cmi3nh547dwrqkxv.js";
import {
    a as E,
    i as D,
    n as O,
    r as k,
    t as A
} from "./58bafdef-1h4o636e3pzxktef.js";
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
            onOpenChange: r,
            open: i,
            reference: a,
            target: o,
            triggerButton: s
        } = e,
        c = d();
    if (n(P)) return null;
    let l;
    t[0] === c ? l = t[1] : (l = c.formatMessage(j.popupAriaLabel), t[0] = c, t[1] = l);
    let u;
    t[2] === r ? u = t[3] : (u = () => r(!1), t[2] = r, t[3] = u);
    let p;
    t[4] !== a || t[5] !== u || t[6] !== o ? (p = (0, U.jsx)(D, {
        onClose: u,
        onSubmitted: A,
        reference: a,
        target: o
    }), t[4] = a, t[5] = u, t[6] = o, t[7] = p) : p = t[7];
    let m;
    return t[8] !== r || t[9] !== i || t[10] !== l || t[11] !== p || t[12] !== s ? (m = (0, U.jsx)(f, {
        open: i,
        onOpenChange: r,
        triggerButton: s,
        alignAgainstAnchor: `end`,
        side: `bottom`,
        sideOffset: 4,
        size: `none`,
        className: `z-50 flex w-70 flex-col p-2`,
        contentAriaLabel: l,
        children: p
    }), t[8] = r, t[9] = i, t[10] = l, t[11] = p, t[12] = s, t[13] = m) : m = t[13], m
}

function P() {
    return k()
}

function F(e) {
    "use forget";
    let t = (0, H.c)(9),
        {
            anchorName: r,
            onOpenChange: i,
            open: a,
            reference: o,
            source: s,
            target: c
        } = e,
        l = n(L);
    if (v(I), l) return null;
    let u;
    t[0] !== o || t[1] !== c ? (u = {
        reference: o,
        target: c
    }, t[0] = o, t[1] = c, t[2] = u) : u = t[2];
    let d = u,
        f;
    return t[3] !== r || t[4] !== i || t[5] !== a || t[6] !== s || t[7] !== d ? (f = (0, U.jsx)(_, {
        anchorName: r,
        className: `z-50`,
        for: W,
        onOpenChange: i,
        open: a,
        side: `bottom-end`,
        source: s,
        withProps: d
    }), t[3] = r, t[4] = i, t[5] = a, t[6] = s, t[7] = d, t[8] = f) : f = t[8], f
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
            gates: r,
            onSelectFeedback: i
        } = e,
        a = r ?? g(),
        o = d(),
        s = n(z);
    if (a.widgetFeedbackEnabled !== !0 || s) return null;
    let c;
    t[0] === o ? c = t[1] : (c = o.formatMessage(j.openFeedback), t[0] = o, t[1] = c);
    let l = c,
        u;
    return t[2] !== l || t[3] !== i ? (u = (0, U.jsx)(C.Item, {
        icon: w,
        onSelect: i,
        children: l
    }), t[2] = l, t[3] = i, t[4] = u) : u = t[4], u
}

function z() {
    return k()
}

function B(e) {
    "use forget";
    let t = (0, H.c)(7),
        {
            gates: r,
            onSelectFeedback: i
        } = e,
        a = r ?? g(),
        o = d(),
        s = n(V);
    if (a.widgetFeedbackEnabled !== !0 || s) return null;
    let c;
    t[0] === o ? c = t[1] : (c = o.formatMessage(j.openFeedback), t[0] = o, t[1] = c);
    let l = c,
        u;
    t[2] === i ? u = t[3] : (u = () => i(), t[2] = i, t[3] = u);
    let f;
    return t[4] !== l || t[5] !== u ? (f = (0, U.jsx)(b, {
        icon: w,
        onClick: u,
        children: l
    }), t[4] = l, t[5] = u, t[6] = f) : f = t[6], f
}

function V() {
    return k()
}
var H, U, W, G = e((() => {
    H = u(), E(), M(), O(), y(), m(), T(), p(), h(), S(), t(), x(), i(), s(), U = a(), l(), W = r(() => c(() => import(`./dedae8f8-m99kb4tos4l2obcs.js`).then(e => e.BlockFeedbackMenuContent), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])))
}));
export {
    G as a, N as i, F as n, B as r, R as t
};
//# sourceMappingURL=e01e2324-gv2o8632r5ybmsey.js.map
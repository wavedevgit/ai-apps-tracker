const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/dedae8f8-ilk4c3fnfyyimm54.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/58bafdef-g6g8glewe9cnq8cp.js", "assets/4813494d-bo7e0c29ngt4zgx0.js", "assets/root-lelxp0l2.css", "assets/conversation-small-ikg0dwuw782klweb.js", "assets/30901919-e8h11sw136qen6v0.js", "assets/c470f5ab-ab47eubabs8jspdc.js", "assets/0e5afe53-esm68l11os61djoy.js", "assets/conversation-small-oilgsqfa.css"]))) => i.map(i => d[i]);
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    P5 as t,
    X0 as n,
    Z0 as r,
    g8 as i
} from "./4813494d-bo7e0c29ngt4zgx0.js";
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
    G7 as f,
    IHn as p,
    LHn as m,
    W7 as h,
    a_ as g,
    d3t as _,
    h3t as v,
    hkt as y,
    m3t as b,
    mkt as x,
    o_ as S,
    s3t as C
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    mg as w,
    pg as T
} from "./30901919-e8h11sw136qen6v0.js";
import {
    a as E,
    i as D,
    n as O,
    r as k,
    t as A
} from "./58bafdef-g6g8glewe9cnq8cp.js";
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
    let n = (0, H.c)(14),
        {
            onOpenChange: r,
            open: i,
            reference: a,
            target: o,
            triggerButton: s
        } = e,
        c = d();
    if (t(P)) return null;
    let l;
    n[0] === c ? l = n[1] : (l = c.formatMessage(j.popupAriaLabel), n[0] = c, n[1] = l);
    let u;
    n[2] === r ? u = n[3] : (u = () => r(!1), n[2] = r, n[3] = u);
    let f;
    n[4] !== a || n[5] !== u || n[6] !== o ? (f = (0, U.jsx)(D, {
        onClose: u,
        onSubmitted: A,
        reference: a,
        target: o
    }), n[4] = a, n[5] = u, n[6] = o, n[7] = f) : f = n[7];
    let p;
    return n[8] !== r || n[9] !== i || n[10] !== l || n[11] !== f || n[12] !== s ? (p = (0, U.jsx)(h, {
        open: i,
        onOpenChange: r,
        triggerButton: s,
        alignAgainstAnchor: `end`,
        side: `bottom`,
        sideOffset: 4,
        size: `none`,
        className: `z-50 flex w-70 flex-col p-2`,
        contentAriaLabel: l,
        children: f
    }), n[8] = r, n[9] = i, n[10] = l, n[11] = f, n[12] = s, n[13] = p) : p = n[13], p
}

function P() {
    return k()
}

function F(e) {
    "use forget";
    let n = (0, H.c)(9),
        {
            anchorName: r,
            onOpenChange: i,
            open: a,
            reference: o,
            source: s,
            target: c
        } = e,
        l = t(L);
    if (y(I), l) return null;
    let u;
    n[0] !== o || n[1] !== c ? (u = {
        reference: o,
        target: c
    }, n[0] = o, n[1] = c, n[2] = u) : u = n[2];
    let d = u,
        f;
    return n[3] !== r || n[4] !== i || n[5] !== a || n[6] !== s || n[7] !== d ? (f = (0, U.jsx)(b, {
        anchorName: r,
        className: `z-50`,
        for: W,
        onOpenChange: i,
        open: a,
        side: `bottom-end`,
        source: s,
        withProps: d
    }), n[3] = r, n[4] = i, n[5] = a, n[6] = s, n[7] = d, n[8] = f) : f = n[8], f
}

function I() {
    W.prefetch()
}

function L() {
    return k()
}

function R(e) {
    "use forget";
    let n = (0, H.c)(5),
        {
            gates: r,
            onSelectFeedback: i
        } = e,
        a = r ?? g(),
        o = d(),
        s = t(z);
    if (a.widgetFeedbackEnabled !== !0 || s) return null;
    let c;
    n[0] === o ? c = n[1] : (c = o.formatMessage(j.openFeedback), n[0] = o, n[1] = c);
    let l = c,
        u;
    return n[2] !== l || n[3] !== i ? (u = (0, U.jsx)(p.Item, {
        icon: w,
        onSelect: i,
        children: l
    }), n[2] = l, n[3] = i, n[4] = u) : u = n[4], u
}

function z() {
    return k()
}

function B(e) {
    "use forget";
    let n = (0, H.c)(7),
        {
            gates: r,
            onSelectFeedback: i
        } = e,
        a = r ?? g(),
        o = d(),
        s = t(V);
    if (a.widgetFeedbackEnabled !== !0 || s) return null;
    let c;
    n[0] === o ? c = n[1] : (c = o.formatMessage(j.openFeedback), n[0] = o, n[1] = c);
    let l = c,
        u;
    n[2] === i ? u = n[3] : (u = () => i(), n[2] = i, n[3] = u);
    let f;
    return n[4] !== l || n[5] !== u ? (f = (0, U.jsx)(C, {
        icon: w,
        onClick: u,
        children: l
    }), n[4] = l, n[5] = u, n[6] = f) : f = n[6], f
}

function V() {
    return k()
}
var H, U, W, G = e((() => {
    H = u(), E(), M(), O(), S(), m(), T(), f(), _(), v(), i(), x(), r(), s(), U = a(), l(), W = n(() => c(() => import(`./dedae8f8-ilk4c3fnfyyimm54.js`).then(e => e.BlockFeedbackMenuContent), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])))
}));
export {
    G as a, N as i, F as n, B as r, R as t
};
//# sourceMappingURL=e01e2324-cbfr5offqgvi28tc.js.map
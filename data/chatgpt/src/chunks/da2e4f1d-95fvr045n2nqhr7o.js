import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $D as n,
    BU as r,
    C4 as i,
    CF as a,
    Ch as o,
    HU as s,
    K1 as c,
    L0 as l,
    Mz as u,
    Nz as d,
    P1 as f,
    Pz as p,
    R1 as m,
    S4 as h,
    X5 as g,
    Y5 as _,
    bR as v,
    dx as y,
    gst as b,
    hh as x,
    j0 as S,
    jz as C,
    nct as w,
    oO as T,
    vR as E,
    xF as D,
    yh as O,
    yx as k
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as A,
    N as j,
    Rn as M,
    Vn as N,
    s as P,
    wn as F,
    zn as I
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Mv as L,
    Nv as R,
    jv as z
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    gs as B,
    hs as V,
    ms as H,
    ps as U
} from "./c2675c8c-ejvs9hq3rwjwsbcv.js";

function W(e) {
    "use forget";
    let t = (0, q.c)(28),
        {
            isCurrentWorkspace: n,
            onBeforeSwitch: r,
            workspace: i,
            redirectUrl: o,
            showWorkspaceDetails: u,
            showWorkspaceChevron: f
        } = e,
        p = j(),
        m = v(),
        g = I(),
        _ = s(),
        [S, w] = (0, J.useState)(!1),
        E;
    t[0] !== g || t[1] !== n || t[2] !== r || t[3] !== p || t[4] !== o || t[5] !== _ || t[6] !== i.id ? (E = () => {
        n || (async () => {
            if (r && !await r()) return;
            w(!0);
            let {
                willRedirect: e,
                updatedAccount: t
            } = await c(p, i.id, g, _, !0, o);
            if (!t && !e) {
                a(), w(!1), _.danger(g.formatMessage(B.switchAccountError));
                return
            }
            l.set(!1), e || (a(), w(!1), o || h())
        })().catch(() => {
            a(), w(!1), _.danger(g.formatMessage(B.switchAccountError))
        })
    }, t[0] = g, t[1] = n, t[2] = r, t[3] = p, t[4] = o, t[5] = _, t[6] = i.id, t[7] = E) : E = t[7];
    let D = E,
        k = T(i),
        A;
    t[8] !== m || t[9] !== i.data || t[10] !== i.structure ? (A = i.structure === b.PERSONAL ? (0, Y.jsx)(O, {
        user: m
    }) : (0, Y.jsx)(x, {
        src: i.data.profilePictureUrl
    }), t[8] = m, t[9] = i.data, t[10] = i.structure, t[11] = A) : A = t[11];
    let M;
    t[12] !== n || t[13] !== u || t[14] !== i ? (M = u && n ? (0, Y.jsx)(U, {
        account: i,
        includeMemberCount: !0
    }) : void 0, t[12] = n, t[13] = u, t[14] = i, t[15] = M) : M = t[15];
    let N;
    t[16] !== n || t[17] !== S || t[18] !== f ? (N = S ? (0, Y.jsx)(C, {}) : n ? (0, Y.jsx)(d.CheckSm, {
        className: `icon-sm`
    }) : f ? (0, Y.jsx)(d.ChevronRightSm, {
        className: `icon-sm`
    }) : void 0, t[16] = n, t[17] = S, t[18] = f, t[19] = N) : N = t[19];
    let P = !i.canAccessWithCurrentSession,
        F;
    return t[20] !== D || t[21] !== A || t[22] !== M || t[23] !== N || t[24] !== P || t[25] !== i.id || t[26] !== k ? (F = (0, Y.jsx)(y, {
        as: L,
        hasManagedFocus: !0,
        value: i.id,
        role: `radio`,
        onPointerMove: G,
        onClick: D,
        size: `large`,
        icon: A,
        label: k,
        secondary: M,
        trailing: N,
        disabled: P
    }), t[20] = D, t[21] = A, t[22] = M, t[23] = N, t[24] = P, t[25] = i.id, t[26] = k, t[27] = F) : F = t[27], F
}

function G(e) {
    return e.currentTarget.focus()
}

function K(e) {
    "use forget";
    let t = (0, q.c)(19),
        {
            className: n,
            data: r,
            onBeforeSwitch: i,
            ref: a,
            redirectUrl: o,
            showWorkspaceChevron: s,
            showWorkspaceDetails: c,
            style: l
        } = e,
        u = s === void 0 || s,
        d = c !== void 0 && c,
        p;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (p = f(), t[0] = p) : p = t[0];
    let m = p,
        h;
    t[1] === n ? h = t[2] : (h = _(`static flex w-full flex-col rounded-2xl border py-1.5`, n), t[1] = n, t[2] = h);
    let g;
    if (t[3] !== r || t[4] !== i || t[5] !== o || t[6] !== u || t[7] !== d) {
        let e;
        t[9] !== i || t[10] !== o || t[11] !== u || t[12] !== d ? (e = e => (0, Y.jsx)(W, {
            isCurrentWorkspace: e.id === m?.id,
            onBeforeSwitch: i,
            workspace: e,
            redirectUrl: o,
            showWorkspaceChevron: u,
            showWorkspaceDetails: d
        }, e.id), t[9] = i, t[10] = o, t[11] = u, t[12] = d, t[13] = e) : e = t[13], g = r.map(e), t[3] = r, t[4] = i, t[5] = o, t[6] = u, t[7] = d, t[8] = g
    } else g = t[8];
    let v;
    return t[14] !== a || t[15] !== l || t[16] !== h || t[17] !== g ? (v = (0, Y.jsx)(z, {
        ref: a,
        type: `single`,
        className: h,
        style: l,
        value: m?.id,
        children: g
    }), t[14] = a, t[15] = l, t[16] = h, t[17] = g, t[18] = v) : v = t[18], v
}
var q, J, Y, X = e((() => {
    q = F(), w(), o(), V(), p(), k(), S(), u(), m(), E(), r(), D(), i(), R(), P(), g(), J = t(N()), M(), n(), H(), Y = A()
}));
export {
    X as n, K as t
};
//# sourceMappingURL=da2e4f1d-95fvr045n2nqhr7o.js.map
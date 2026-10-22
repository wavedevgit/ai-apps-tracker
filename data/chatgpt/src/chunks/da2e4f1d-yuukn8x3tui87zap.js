import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B0 as n,
    Bz as r,
    CR as i,
    EF as a,
    Fst as o,
    K0 as s,
    LU as c,
    N4 as l,
    OF as u,
    P4 as d,
    Rz as f,
    TR as p,
    U1 as m,
    Vz as h,
    bh as g,
    bx as _,
    dO as v,
    fx as y,
    gh as b,
    iO as x,
    l7 as S,
    q1 as C,
    t0 as w,
    u7 as T,
    wh as E,
    xct as D,
    zU as O,
    zz as k
} from "./4813494d-r54yv6lv29x4ew99.js";
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
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    _s as B,
    gs as V,
    hs as H,
    vs as U
} from "./c2675c8c-jg3tpj8mw86wdc0g.js";

function W(e) {
    "use forget";
    let t = (0, q.c)(28),
        {
            isCurrentWorkspace: n,
            onBeforeSwitch: i,
            workspace: a,
            redirectUrl: c,
            showWorkspaceDetails: d,
            showWorkspaceChevron: m
        } = e,
        h = j(),
        _ = p(),
        x = I(),
        S = O(),
        [C, T] = (0, J.useState)(!1),
        E;
    t[0] !== x || t[1] !== n || t[2] !== i || t[3] !== h || t[4] !== c || t[5] !== S || t[6] !== a.id ? (E = () => {
        n || (async () => {
            if (i && !await i()) return;
            T(!0);
            let {
                willRedirect: e,
                updatedAccount: t
            } = await w(h, a.id, x, S, !0, c);
            if (!t && !e) {
                u(), T(!1), S.danger(x.formatMessage(U.switchAccountError));
                return
            }
            s.set(!1), e || (u(), T(!1), c || l())
        })().catch(() => {
            u(), T(!1), S.danger(x.formatMessage(U.switchAccountError))
        })
    }, t[0] = x, t[1] = n, t[2] = i, t[3] = h, t[4] = c, t[5] = S, t[6] = a.id, t[7] = E) : E = t[7];
    let D = E,
        k = v(a),
        A;
    t[8] !== _ || t[9] !== a.data || t[10] !== a.structure ? (A = a.structure === o.PERSONAL ? (0, Y.jsx)(g, {
        user: _
    }) : (0, Y.jsx)(b, {
        src: a.data.profilePictureUrl
    }), t[8] = _, t[9] = a.data, t[10] = a.structure, t[11] = A) : A = t[11];
    let M;
    t[12] !== n || t[13] !== d || t[14] !== a ? (M = d && n ? (0, Y.jsx)(H, {
        account: a,
        includeMemberCount: !0
    }) : void 0, t[12] = n, t[13] = d, t[14] = a, t[15] = M) : M = t[15];
    let N;
    t[16] !== n || t[17] !== C || t[18] !== m ? (N = C ? (0, Y.jsx)(f, {}) : n ? (0, Y.jsx)(r.CheckSm, {
        className: `icon-sm`
    }) : m ? (0, Y.jsx)(r.ChevronRightSm, {
        className: `icon-sm`
    }) : void 0, t[16] = n, t[17] = C, t[18] = m, t[19] = N) : N = t[19];
    let P = !a.canAccessWithCurrentSession,
        F;
    return t[20] !== D || t[21] !== A || t[22] !== M || t[23] !== N || t[24] !== P || t[25] !== a.id || t[26] !== k ? (F = (0, Y.jsx)(y, {
        as: L,
        hasManagedFocus: !0,
        value: a.id,
        role: `radio`,
        onPointerMove: G,
        onClick: D,
        size: `large`,
        icon: A,
        label: k,
        secondary: M,
        trailing: N,
        disabled: P
    }), t[20] = D, t[21] = A, t[22] = M, t[23] = N, t[24] = P, t[25] = a.id, t[26] = k, t[27] = F) : F = t[27], F
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
        f;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (f = m(), t[0] = f) : f = t[0];
    let p = f,
        h;
    t[1] === n ? h = t[2] : (h = S(`static flex w-full flex-col rounded-2xl border py-1.5`, n), t[1] = n, t[2] = h);
    let g;
    if (t[3] !== r || t[4] !== i || t[5] !== o || t[6] !== u || t[7] !== d) {
        let e;
        t[9] !== i || t[10] !== o || t[11] !== u || t[12] !== d ? (e = e => (0, Y.jsx)(W, {
            isCurrentWorkspace: e.id === p?.id,
            onBeforeSwitch: i,
            workspace: e,
            redirectUrl: o,
            showWorkspaceChevron: u,
            showWorkspaceDetails: d
        }, e.id), t[9] = i, t[10] = o, t[11] = u, t[12] = d, t[13] = e) : e = t[13], g = r.map(e), t[3] = r, t[4] = i, t[5] = o, t[6] = u, t[7] = d, t[8] = g
    } else g = t[8];
    let _;
    return t[14] !== a || t[15] !== l || t[16] !== h || t[17] !== g ? (_ = (0, Y.jsx)(z, {
        ref: a,
        type: `single`,
        className: h,
        style: l,
        value: p?.id,
        children: g
    }), t[14] = a, t[15] = l, t[16] = h, t[17] = g, t[18] = _) : _ = t[18], _
}
var q, J, Y, X = e((() => {
    q = F(), D(), E(), B(), h(), _(), n(), k(), C(), i(), c(), a(), d(), R(), P(), T(), J = t(N()), M(), x(), V(), Y = A()
}));
export {
    X as n, K as t
};
//# sourceMappingURL=da2e4f1d-yuukn8x3tui87zap.js.map
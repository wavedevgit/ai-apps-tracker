import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B0 as n,
    Bz as r,
    CR as i,
    EF as a,
    Hst as o,
    K0 as s,
    K5 as c,
    LU as l,
    N4 as u,
    OF as d,
    Oct as f,
    P4 as p,
    Rz as m,
    TR as h,
    U1 as g,
    Vz as _,
    bh as v,
    bx as y,
    dO as b,
    fx as x,
    gh as S,
    iO as C,
    q1 as w,
    q5 as T,
    t0 as E,
    wh as D,
    zU as O,
    zz as k
} from "./4813494d-mdvd4786a87166cc.js";
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
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    _s as B,
    gs as V,
    hs as H,
    vs as U
} from "./c2675c8c-oz03twoan08d72ud.js";

function W(e) {
    "use forget";
    let t = (0, q.c)(28),
        {
            isCurrentWorkspace: n,
            onBeforeSwitch: i,
            workspace: a,
            redirectUrl: c,
            showWorkspaceDetails: l,
            showWorkspaceChevron: f
        } = e,
        p = j(),
        g = h(),
        _ = I(),
        y = O(),
        [C, w] = (0, J.useState)(!1),
        T;
    t[0] !== _ || t[1] !== n || t[2] !== i || t[3] !== p || t[4] !== c || t[5] !== y || t[6] !== a.id ? (T = () => {
        n || (async () => {
            if (i && !await i()) return;
            w(!0);
            let {
                willRedirect: e,
                updatedAccount: t
            } = await E(p, a.id, _, y, !0, c);
            if (!t && !e) {
                d(), w(!1), y.danger(_.formatMessage(U.switchAccountError));
                return
            }
            s.set(!1), e || (d(), w(!1), c || u())
        })().catch(() => {
            d(), w(!1), y.danger(_.formatMessage(U.switchAccountError))
        })
    }, t[0] = _, t[1] = n, t[2] = i, t[3] = p, t[4] = c, t[5] = y, t[6] = a.id, t[7] = T) : T = t[7];
    let D = T,
        k = b(a),
        A;
    t[8] !== g || t[9] !== a.data || t[10] !== a.structure ? (A = a.structure === o.PERSONAL ? (0, Y.jsx)(v, {
        user: g
    }) : (0, Y.jsx)(S, {
        src: a.data.profilePictureUrl
    }), t[8] = g, t[9] = a.data, t[10] = a.structure, t[11] = A) : A = t[11];
    let M;
    t[12] !== n || t[13] !== l || t[14] !== a ? (M = l && n ? (0, Y.jsx)(H, {
        account: a,
        includeMemberCount: !0
    }) : void 0, t[12] = n, t[13] = l, t[14] = a, t[15] = M) : M = t[15];
    let N;
    t[16] !== n || t[17] !== C || t[18] !== f ? (N = C ? (0, Y.jsx)(m, {}) : n ? (0, Y.jsx)(r.CheckSm, {
        className: `icon-sm`
    }) : f ? (0, Y.jsx)(r.ChevronRightSm, {
        className: `icon-sm`
    }) : void 0, t[16] = n, t[17] = C, t[18] = f, t[19] = N) : N = t[19];
    let P = !a.canAccessWithCurrentSession,
        F;
    return t[20] !== D || t[21] !== A || t[22] !== M || t[23] !== N || t[24] !== P || t[25] !== a.id || t[26] !== k ? (F = (0, Y.jsx)(x, {
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
            showWorkspaceDetails: l,
            style: u
        } = e,
        d = s === void 0 || s,
        f = l !== void 0 && l,
        p;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (p = g(), t[0] = p) : p = t[0];
    let m = p,
        h;
    t[1] === n ? h = t[2] : (h = c(`static flex w-full flex-col rounded-2xl border py-1.5`, n), t[1] = n, t[2] = h);
    let _;
    if (t[3] !== r || t[4] !== i || t[5] !== o || t[6] !== d || t[7] !== f) {
        let e;
        t[9] !== i || t[10] !== o || t[11] !== d || t[12] !== f ? (e = e => (0, Y.jsx)(W, {
            isCurrentWorkspace: e.id === m?.id,
            onBeforeSwitch: i,
            workspace: e,
            redirectUrl: o,
            showWorkspaceChevron: d,
            showWorkspaceDetails: f
        }, e.id), t[9] = i, t[10] = o, t[11] = d, t[12] = f, t[13] = e) : e = t[13], _ = r.map(e), t[3] = r, t[4] = i, t[5] = o, t[6] = d, t[7] = f, t[8] = _
    } else _ = t[8];
    let v;
    return t[14] !== a || t[15] !== u || t[16] !== h || t[17] !== _ ? (v = (0, Y.jsx)(z, {
        ref: a,
        type: `single`,
        className: h,
        style: u,
        value: m?.id,
        children: _
    }), t[14] = a, t[15] = u, t[16] = h, t[17] = _, t[18] = v) : v = t[18], v
}
var q, J, Y, X = e((() => {
    q = F(), f(), D(), B(), _(), y(), n(), k(), w(), i(), l(), a(), p(), R(), P(), T(), J = t(N()), M(), C(), V(), Y = A()
}));
export {
    X as n, K as t
};
//# sourceMappingURL=da2e4f1d-n3i0nlguv6reckjx.js.map
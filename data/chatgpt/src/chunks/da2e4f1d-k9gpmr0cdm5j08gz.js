import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A0 as n,
    Az as r,
    Ch as i,
    G1 as a,
    I0 as o,
    J5 as s,
    L1 as c,
    Mz as l,
    N1 as u,
    Nz as d,
    QD as f,
    S4 as p,
    SF as m,
    VU as h,
    Y5 as g,
    _R as _,
    aO as v,
    bF as y,
    dx as b,
    hh as x,
    hst as S,
    jz as C,
    tct as w,
    x4 as T,
    yR as E,
    yh as D,
    yx as O,
    zU as k
} from "./4813494d-dfpv67hlp00pbohr.js";
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
    Av as L,
    Mv as R,
    jv as z
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    gs as B,
    hs as V,
    ms as H,
    ps as U
} from "./c2675c8c-9bs3zsr3vq259es7.js";

function W(e) {
    "use forget";
    let t = (0, q.c)(28),
        {
            isCurrentWorkspace: n,
            onBeforeSwitch: i,
            workspace: s,
            redirectUrl: c,
            showWorkspaceDetails: u,
            showWorkspaceChevron: d
        } = e,
        f = j(),
        p = E(),
        g = I(),
        _ = h(),
        [y, C] = (0, J.useState)(!1),
        w;
    t[0] !== g || t[1] !== n || t[2] !== i || t[3] !== f || t[4] !== c || t[5] !== _ || t[6] !== s.id ? (w = () => {
        n || (async () => {
            if (i && !await i()) return;
            C(!0);
            let {
                willRedirect: e,
                updatedAccount: t
            } = await a(f, s.id, g, _, !0, c);
            if (!t && !e) {
                m(), C(!1), _.danger(g.formatMessage(B.switchAccountError));
                return
            }
            o.set(!1), e || (m(), C(!1), c || T())
        })().catch(() => {
            m(), C(!1), _.danger(g.formatMessage(B.switchAccountError))
        })
    }, t[0] = g, t[1] = n, t[2] = i, t[3] = f, t[4] = c, t[5] = _, t[6] = s.id, t[7] = w) : w = t[7];
    let O = w,
        k = v(s),
        A;
    t[8] !== p || t[9] !== s.data || t[10] !== s.structure ? (A = s.structure === S.PERSONAL ? (0, Y.jsx)(D, {
        user: p
    }) : (0, Y.jsx)(x, {
        src: s.data.profilePictureUrl
    }), t[8] = p, t[9] = s.data, t[10] = s.structure, t[11] = A) : A = t[11];
    let M;
    t[12] !== n || t[13] !== u || t[14] !== s ? (M = u && n ? (0, Y.jsx)(U, {
        account: s,
        includeMemberCount: !0
    }) : void 0, t[12] = n, t[13] = u, t[14] = s, t[15] = M) : M = t[15];
    let N;
    t[16] !== n || t[17] !== y || t[18] !== d ? (N = y ? (0, Y.jsx)(r, {}) : n ? (0, Y.jsx)(l.CheckSm, {
        className: `icon-sm`
    }) : d ? (0, Y.jsx)(l.ChevronRightSm, {
        className: `icon-sm`
    }) : void 0, t[16] = n, t[17] = y, t[18] = d, t[19] = N) : N = t[19];
    let P = !s.canAccessWithCurrentSession,
        F;
    return t[20] !== O || t[21] !== A || t[22] !== M || t[23] !== N || t[24] !== P || t[25] !== s.id || t[26] !== k ? (F = (0, Y.jsx)(b, {
        as: z,
        hasManagedFocus: !0,
        value: s.id,
        role: `radio`,
        onPointerMove: G,
        onClick: O,
        size: `large`,
        icon: A,
        label: k,
        secondary: M,
        trailing: N,
        disabled: P
    }), t[20] = O, t[21] = A, t[22] = M, t[23] = N, t[24] = P, t[25] = s.id, t[26] = k, t[27] = F) : F = t[27], F
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
            showWorkspaceChevron: c,
            showWorkspaceDetails: l,
            style: d
        } = e,
        f = c === void 0 || c,
        p = l !== void 0 && l,
        m;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (m = u(), t[0] = m) : m = t[0];
    let h = m,
        g;
    t[1] === n ? g = t[2] : (g = s(`static flex w-full flex-col rounded-2xl border py-1.5`, n), t[1] = n, t[2] = g);
    let _;
    if (t[3] !== r || t[4] !== i || t[5] !== o || t[6] !== f || t[7] !== p) {
        let e;
        t[9] !== i || t[10] !== o || t[11] !== f || t[12] !== p ? (e = e => (0, Y.jsx)(W, {
            isCurrentWorkspace: e.id === h?.id,
            onBeforeSwitch: i,
            workspace: e,
            redirectUrl: o,
            showWorkspaceChevron: f,
            showWorkspaceDetails: p
        }, e.id), t[9] = i, t[10] = o, t[11] = f, t[12] = p, t[13] = e) : e = t[13], _ = r.map(e), t[3] = r, t[4] = i, t[5] = o, t[6] = f, t[7] = p, t[8] = _
    } else _ = t[8];
    let v;
    return t[14] !== a || t[15] !== d || t[16] !== g || t[17] !== _ ? (v = (0, Y.jsx)(L, {
        ref: a,
        type: `single`,
        className: g,
        style: d,
        value: h?.id,
        children: _
    }), t[14] = a, t[15] = d, t[16] = g, t[17] = _, t[18] = v) : v = t[18], v
}
var q, J, Y, X = e((() => {
    q = F(), w(), i(), V(), d(), O(), n(), C(), c(), _(), k(), y(), p(), R(), P(), g(), J = t(N()), M(), f(), H(), Y = A()
}));
export {
    X as n, K as t
};
//# sourceMappingURL=da2e4f1d-k9gpmr0cdm5j08gz.js.map
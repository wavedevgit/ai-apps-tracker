import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J2 as n,
    Kb as r,
    PD as i,
    QL as a,
    Rot as o,
    VD as s,
    Xm as c,
    Y2 as l,
    b5 as u,
    dz as d,
    eR as f,
    eh as p,
    ex as m,
    fz as h,
    hU as g,
    iF as _,
    ih as v,
    l0 as y,
    mz as b,
    nF as x,
    o1 as S,
    pU as C,
    pz as w,
    r0 as T,
    u1 as E,
    v1 as D,
    wst as O,
    y5 as k
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as A,
    N as j,
    Rn as M,
    Vn as N,
    s as P,
    wn as F,
    zn as I
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Av as L,
    Ov as R,
    kv as z
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    As as B,
    Ds as V,
    Os as H,
    ks as U
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";

function W(e) {
    "use forget";
    let t = (0, q.c)(28),
        {
            isCurrentWorkspace: i,
            onBeforeSwitch: a,
            workspace: l,
            redirectUrl: u,
            showWorkspaceDetails: m,
            showWorkspaceChevron: h
        } = e,
        v = j(),
        b = f(),
        x = I(),
        S = g(),
        [C, T] = (0, J.useState)(!1),
        E;
    t[0] !== x || t[1] !== i || t[2] !== a || t[3] !== v || t[4] !== u || t[5] !== S || t[6] !== l.id ? (E = () => {
        i || (async () => {
            if (a && !await a()) return;
            T(!0);
            let {
                willRedirect: e,
                updatedAccount: t
            } = await D(v, l.id, x, S, !0, u);
            if (!t && !e) {
                _(), T(!1), S.danger(x.formatMessage(B.switchAccountError));
                return
            }
            y.set(!1), e || (_(), T(!1), u || n())
        })().catch(() => {
            _(), T(!1), S.danger(x.formatMessage(B.switchAccountError))
        })
    }, t[0] = x, t[1] = i, t[2] = a, t[3] = v, t[4] = u, t[5] = S, t[6] = l.id, t[7] = E) : E = t[7];
    let O = E,
        k = s(l),
        A;
    t[8] !== b || t[9] !== l.data || t[10] !== l.structure ? (A = l.structure === o.PERSONAL ? (0, Y.jsx)(p, {
        user: b
    }) : (0, Y.jsx)(c, {
        src: l.data.profilePictureUrl
    }), t[8] = b, t[9] = l.data, t[10] = l.structure, t[11] = A) : A = t[11];
    let M;
    t[12] !== i || t[13] !== m || t[14] !== l ? (M = m && i ? (0, Y.jsx)(V, {
        account: l,
        includeMemberCount: !0
    }) : void 0, t[12] = i, t[13] = m, t[14] = l, t[15] = M) : M = t[15];
    let N;
    t[16] !== i || t[17] !== C || t[18] !== h ? (N = C ? (0, Y.jsx)(d, {}) : i ? (0, Y.jsx)(w.CheckSm, {
        className: `icon-sm`
    }) : h ? (0, Y.jsx)(w.ChevronRightSm, {
        className: `icon-sm`
    }) : void 0, t[16] = i, t[17] = C, t[18] = h, t[19] = N) : N = t[19];
    let P = !l.canAccessWithCurrentSession,
        F;
    return t[20] !== O || t[21] !== A || t[22] !== M || t[23] !== N || t[24] !== P || t[25] !== l.id || t[26] !== k ? (F = (0, Y.jsx)(r, {
        as: z,
        hasManagedFocus: !0,
        value: l.id,
        role: `radio`,
        onPointerMove: G,
        onClick: O,
        size: `large`,
        icon: A,
        label: k,
        secondary: M,
        trailing: N,
        disabled: P
    }), t[20] = O, t[21] = A, t[22] = M, t[23] = N, t[24] = P, t[25] = l.id, t[26] = k, t[27] = F) : F = t[27], F
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
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (f = S(), t[0] = f) : f = t[0];
    let p = f,
        m;
    t[1] === n ? m = t[2] : (m = k(`static flex w-full flex-col rounded-2xl border py-1.5`, n), t[1] = n, t[2] = m);
    let h;
    if (t[3] !== r || t[4] !== i || t[5] !== o || t[6] !== u || t[7] !== d) {
        let e;
        t[9] !== i || t[10] !== o || t[11] !== u || t[12] !== d ? (e = e => (0, Y.jsx)(W, {
            isCurrentWorkspace: e.id === p?.id,
            onBeforeSwitch: i,
            workspace: e,
            redirectUrl: o,
            showWorkspaceChevron: u,
            showWorkspaceDetails: d
        }, e.id), t[9] = i, t[10] = o, t[11] = u, t[12] = d, t[13] = e) : e = t[13], h = r.map(e), t[3] = r, t[4] = i, t[5] = o, t[6] = u, t[7] = d, t[8] = h
    } else h = t[8];
    let g;
    return t[14] !== a || t[15] !== l || t[16] !== m || t[17] !== h ? (g = (0, Y.jsx)(R, {
        ref: a,
        type: `single`,
        className: m,
        style: l,
        value: p?.id,
        children: h
    }), t[14] = a, t[15] = l, t[16] = m, t[17] = h, t[18] = g) : g = t[18], g
}
var q, J, Y, X = e((() => {
    q = F(), O(), v(), U(), b(), m(), T(), h(), E(), a(), C(), x(), l(), L(), P(), u(), J = t(N()), M(), i(), H(), Y = A()
}));
export {
    X as n, K as t
};
//# sourceMappingURL=da2e4f1d-hjo3ad3fmcgvexi4.js.map
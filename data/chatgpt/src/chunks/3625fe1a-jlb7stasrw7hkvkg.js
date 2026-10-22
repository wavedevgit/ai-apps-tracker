import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    CR as t,
    IU as n,
    LU as r,
    Sl as i,
    TR as a,
    hl as o,
    ml as s,
    xl as c
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    N as l,
    O as u,
    Rn as d,
    p as f,
    s as p,
    wn as m,
    zn as h
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    dun as g,
    fun as _,
    gun as v,
    idn as y,
    pun as b,
    rdn as x,
    sun as S
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    i as C,
    n as w
} from "./5f4d7fa0-me27tfro8khlo54d.js";
import {
    a as T,
    c as E,
    d as D,
    f as O,
    l as k,
    o as A,
    s as j
} from "./e7a416e4-dveyocfmjgc82tp9.js";

function M() {
    "use forget";
    let e = (0, z.c)(37),
        t = l(),
        r = a(),
        i = h(),
        o = y(R),
        d = y(L),
        p = y(I),
        m = y(F),
        g = y(P),
        x = y(N),
        {
            connectorId: w
        } = C(),
        O = o ?? ``,
        k;
    e[0] !== w || e[1] !== O ? (k = [`wham`, `repository`, O, w], e[0] = w, e[1] = O, e[2] = k) : k = e[2];
    let A = !!o && x,
        M;
    e[3] !== w || e[4] !== o ? (M = () => s.getRepository(o ?? ``, w), e[3] = w, e[4] = o, e[5] = M) : M = e[5];
    let B;
    e[6] !== k || e[7] !== A || e[8] !== M ? (B = {
        queryKey: k,
        enabled: A,
        queryFn: M,
        staleTime: 3e5
    }, e[6] = k, e[7] = A, e[8] = M, e[9] = B) : B = e[9];
    let {
        data: V
    } = u(B), H;
    e[10] !== w || e[11] !== V ? (H = e => j(e, w, async () => {
        let t = V?.id === e ? V : await s.getRepository(e, w);
        return s.createEnvironment(E(t.id, t.name, w))
    }), e[10] = w, e[11] = V, e[12] = H) : H = e[12];
    let U;
    e[13] !== w || e[14] !== i || e[15] !== t || e[16] !== m || e[17] !== p || e[18] !== d || e[19] !== g || e[20] !== r?.email || e[21] !== r?.id || e[22] !== r?.name ? (U = async (e, a) => {
        let {
            environment: o,
            created: s
        } = e;
        s && v(t, o, {
            id: r?.id ?? ``,
            email: r?.email ?? ``,
            name: r?.name ?? ``
        }, {
            connectorId: w
        }), await Promise.all([b(t), _(t, o.id)]), t.setQueryData(S, e => [o, ...(e === void 0 ? [] : e).filter(e => e.id !== o.id)]), s && n().success(i.formatMessage({
            id: `wham.whamMutations.environmentCreatedSuccessfully`,
            defaultMessage: `Environment created successfully`
        }));
        let l = y.getState();
        l.selectedRepositoryId === a && l.useRepositoryAsEnvironment && (d(o.id, c(o)), l.branch || p(D(o)), s && m(o.id), g(!1))
    }, e[13] = w, e[14] = i, e[15] = t, e[16] = m, e[17] = p, e[18] = d, e[19] = g, e[20] = r?.email, e[21] = r?.id, e[22] = r?.name, e[23] = U) : U = e[23];
    let W;
    e[24] !== i || e[25] !== t ? (W = e => {
        n().danger(e instanceof T ? i.formatMessage({
            id: `wham.envlessEnvironment.selectionRequired`,
            defaultMessage: `Select an environment for this repository to continue.`
        }) : i.formatMessage({
            id: `wham.envlessEnvironment.resolveFailed`,
            defaultMessage: `Could not load or create an environment. Try again.`
        })), b(t)
    }, e[24] = i, e[25] = t, e[26] = W) : W = e[26];
    let G;
    e[27] !== H || e[28] !== U || e[29] !== W ? (G = {
        mutationFn: H,
        onSuccess: U,
        onError: W
    }, e[27] = H, e[28] = U, e[29] = W, e[30] = G) : G = e[30];
    let {
        mutateAsync: K,
        isPending: q
    } = f(G), J;
    e[31] === K ? J = e[32] : (J = async () => {
        let {
            environmentId: e,
            selectedRepositoryId: t,
            useRepositoryAsEnvironment: n
        } = y.getState();
        if (e) return e;
        if (!t) throw Error(`Repository is required to create an environment`);
        if (!n) return e;
        let {
            environment: r
        } = await K(t);
        return y.getState().environmentId === r.id ? r.id : null
    }, e[31] = K, e[32] = J);
    let Y = J,
        X = !!o && x,
        Z;
    return e[33] !== Y || e[34] !== q || e[35] !== X ? (Z = {
        isCreatingEnvironment: q,
        ensureEnvironment: Y,
        hasRepository: X
    }, e[33] = Y, e[34] = q, e[35] = X, e[36] = Z) : Z = e[36], Z
}

function N(e) {
    return e.useRepositoryAsEnvironment
}

function P(e) {
    return e.setUseRepositoryAsEnvironment
}

function F(e) {
    return e.setAutoCreatedEnvironment
}

function I(e) {
    return e.setBranch
}

function L(e) {
    return e.setEnvironmentId
}

function R(e) {
    return e.selectedRepositoryId
}
var z, B = e((() => {
    z = m(), p(), d(), t(), r(), O(), w(), i(), k(), A(), g(), o(), x()
}));
export {
    M as n, B as t
};
//# sourceMappingURL=3625fe1a-jlb7stasrw7hkvkg.js.map
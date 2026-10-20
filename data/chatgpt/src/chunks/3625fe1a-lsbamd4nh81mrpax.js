import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    RU as t,
    _R as n,
    bl as r,
    ml as i,
    pl as a,
    xl as o,
    yR as s,
    zU as c
} from "./4813494d-dfpv67hlp00pbohr.js";
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
    Gln as g,
    Hun as _,
    Vun as v,
    Xln as y,
    Yln as b,
    Zln as x,
    eun as S
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    i as C,
    n as w
} from "./5f4d7fa0-ecwvalz9rud7vc7c.js";
import {
    a as T,
    c as E,
    d as D,
    f as O,
    l as k,
    o as A,
    s as j
} from "./e7a416e4-kh49v4apq6fd000a.js";

function M() {
    "use forget";
    let e = (0, z.c)(37),
        n = l(),
        i = s(),
        o = h(),
        c = _(R),
        d = _(L),
        p = _(I),
        m = _(F),
        v = _(P),
        b = _(N),
        {
            connectorId: w
        } = C(),
        O = c ?? ``,
        k;
    e[0] !== w || e[1] !== O ? (k = [`wham`, `repository`, O, w], e[0] = w, e[1] = O, e[2] = k) : k = e[2];
    let A = !!c && b,
        M;
    e[3] !== w || e[4] !== c ? (M = () => a.getRepository(c ?? ``, w), e[3] = w, e[4] = c, e[5] = M) : M = e[5];
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
        let t = V?.id === e ? V : await a.getRepository(e, w);
        return a.createEnvironment(E(t.id, t.name, w))
    }), e[10] = w, e[11] = V, e[12] = H) : H = e[12];
    let U;
    e[13] !== w || e[14] !== o || e[15] !== n || e[16] !== m || e[17] !== p || e[18] !== d || e[19] !== v || e[20] !== i?.email || e[21] !== i?.id || e[22] !== i?.name ? (U = async (e, a) => {
        let {
            environment: s,
            created: c
        } = e;
        c && S(n, s, {
            id: i?.id ?? ``,
            email: i?.email ?? ``,
            name: i?.name ?? ``
        }, {
            connectorId: w
        }), await Promise.all([x(n), y(n, s.id)]), n.setQueryData(g, e => [s, ...(e === void 0 ? [] : e).filter(e => e.id !== s.id)]), c && t().success(o.formatMessage({
            id: `wham.whamMutations.environmentCreatedSuccessfully`,
            defaultMessage: `Environment created successfully`
        }));
        let l = _.getState();
        l.selectedRepositoryId === a && l.useRepositoryAsEnvironment && (d(s.id, r(s)), l.branch || p(D(s)), c && m(s.id), v(!1))
    }, e[13] = w, e[14] = o, e[15] = n, e[16] = m, e[17] = p, e[18] = d, e[19] = v, e[20] = i?.email, e[21] = i?.id, e[22] = i?.name, e[23] = U) : U = e[23];
    let W;
    e[24] !== o || e[25] !== n ? (W = e => {
        t().danger(e instanceof T ? o.formatMessage({
            id: `wham.envlessEnvironment.selectionRequired`,
            defaultMessage: `Select an environment for this repository to continue.`
        }) : o.formatMessage({
            id: `wham.envlessEnvironment.resolveFailed`,
            defaultMessage: `Could not load or create an environment. Try again.`
        })), x(n)
    }, e[24] = o, e[25] = n, e[26] = W) : W = e[26];
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
        } = _.getState();
        if (e) return e;
        if (!t) throw Error(`Repository is required to create an environment`);
        if (!n) return e;
        let {
            environment: r
        } = await K(t);
        return _.getState().environmentId === r.id ? r.id : null
    }, e[31] = K, e[32] = J);
    let Y = J,
        X = !!c && b,
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
    z = m(), p(), d(), n(), c(), O(), w(), o(), k(), A(), b(), i(), v()
}));
export {
    M as n, B as t
};
//# sourceMappingURL=3625fe1a-lsbamd4nh81mrpax.js.map
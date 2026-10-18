import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Jc as t,
    QL as n,
    Yc as r,
    eR as i,
    fU as a,
    nl as o,
    pU as s,
    tl as c
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    N as l,
    O as u,
    Rn as d,
    p as f,
    s as p,
    wn as m,
    zn as h
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Aln as g,
    Dun as _,
    Eun as v,
    Fln as y,
    Iln as b,
    Pln as x,
    zln as S
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    i as C,
    n as w
} from "./5f4d7fa0-h884rob3aq4wlepb.js";
import {
    a as T,
    c as E,
    d as D,
    f as O,
    l as k,
    o as A,
    s as j
} from "./e7a416e4-kuwsbzsm2eulf2ua.js";

function M() {
    "use forget";
    let e = (0, z.c)(37),
        n = l(),
        r = i(),
        o = h(),
        s = _(R),
        d = _(L),
        p = _(I),
        m = _(F),
        v = _(P),
        x = _(N),
        {
            connectorId: w
        } = C(),
        O = s ?? ``,
        k;
    e[0] !== w || e[1] !== O ? (k = [`wham`, `repository`, O, w], e[0] = w, e[1] = O, e[2] = k) : k = e[2];
    let A = !!s && x,
        M;
    e[3] !== w || e[4] !== s ? (M = () => t.getRepository(s ?? ``, w), e[3] = w, e[4] = s, e[5] = M) : M = e[5];
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
        let n = V?.id === e ? V : await t.getRepository(e, w);
        return t.createEnvironment(E(n.id, n.name, w))
    }), e[10] = w, e[11] = V, e[12] = H) : H = e[12];
    let U;
    e[13] !== w || e[14] !== o || e[15] !== n || e[16] !== m || e[17] !== p || e[18] !== d || e[19] !== v || e[20] !== r?.email || e[21] !== r?.id || e[22] !== r?.name ? (U = async (e, t) => {
        let {
            environment: i,
            created: s
        } = e;
        s && S(n, i, {
            id: r?.id ?? ``,
            email: r?.email ?? ``,
            name: r?.name ?? ``
        }, {
            connectorId: w
        }), await Promise.all([b(n), y(n, i.id)]), n.setQueryData(g, e => [i, ...(e === void 0 ? [] : e).filter(e => e.id !== i.id)]), s && a().success(o.formatMessage({
            id: `wham.whamMutations.environmentCreatedSuccessfully`,
            defaultMessage: `Environment created successfully`
        }));
        let l = _.getState();
        l.selectedRepositoryId === t && l.useRepositoryAsEnvironment && (d(i.id, c(i)), l.branch || p(D(i)), s && m(i.id), v(!1))
    }, e[13] = w, e[14] = o, e[15] = n, e[16] = m, e[17] = p, e[18] = d, e[19] = v, e[20] = r?.email, e[21] = r?.id, e[22] = r?.name, e[23] = U) : U = e[23];
    let W;
    e[24] !== o || e[25] !== n ? (W = e => {
        a().danger(e instanceof T ? o.formatMessage({
            id: `wham.envlessEnvironment.selectionRequired`,
            defaultMessage: `Select an environment for this repository to continue.`
        }) : o.formatMessage({
            id: `wham.envlessEnvironment.resolveFailed`,
            defaultMessage: `Could not load or create an environment. Try again.`
        })), b(n)
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
        X = !!s && x,
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
    z = m(), p(), d(), n(), s(), O(), w(), o(), k(), A(), x(), r(), v()
}));
export {
    M as n, B as t
};
//# sourceMappingURL=3625fe1a-ni2ff2ou63dy2qca.js.map
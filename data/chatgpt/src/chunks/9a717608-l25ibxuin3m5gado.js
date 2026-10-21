import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Qy as t,
    Zy as n,
    c7 as r,
    k8 as i,
    l7 as a,
    q5 as o
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    Bn as s,
    O as c,
    Q as l,
    Rn as u,
    it as d,
    s as f,
    wn as p,
    zn as m
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Hn as h,
    A5t as g,
    ALn as _,
    AUt as v,
    B5t as y,
    H9t as b,
    J5t as x,
    MUt as S,
    N5t as C,
    POt as w,
    R5t as T,
    TLn as E,
    U9t as D,
    eUn as O,
    kLn as k,
    sLn as A,
    zOt as j
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    i as M,
    r as N
} from "./55904901-dwsf7nh8hiucw8c6.js";
import {
    n as P,
    t as F
} from "./02df22f1-d8ysa67p8y91n01g.js";

function I(e) {
    "use forget";
    let t = (0, B.c)(32),
        {
            directoryPath: i,
            fileName: a,
            fileNameContent: s,
            libraryDirectoryId: l,
            libraryRootContent: u,
            onDirectoryClick: f,
            onLibraryClick: p,
            providerRoot: _,
            variant: v
        } = e,
        b = v === void 0 ? `default` : v,
        x = m(),
        C = b === `compact`,
        O = b === `google-drive-preview`,
        A = E(_?.id),
        j = l ?? (A?.kind === `root` && A.encodedAccountKey != null && A.providerSlug !== `gdrive` && S(A.providerSlug) ? _?.id : void 0),
        M;
    t[0] === j ? M = t[1] : (M = () => N(j ?? null), t[0] = j, t[1] = M);
    let P = o(M),
        I;
    t[2] === j ? I = t[3] : (I = () => y(j ?? null), t[2] = j, t[3] = I);
    let G = j != null && i == null,
        K;
    t[4] !== P || t[5] !== I || t[6] !== G ? (K = {
        queryKey: P,
        queryFn: I,
        enabled: G,
        staleTime: 3e4
    }, t[4] = P, t[5] = I, t[6] = G, t[7] = K) : K = t[7];
    let q = c(K),
        J, Y, X, Z;
    if (t[8] !== i || t[9] !== q || t[10] !== a || t[11] !== s || t[12] !== x || t[13] !== C || t[14] !== O || t[15] !== l || t[16] !== u || t[17] !== f || t[18] !== p || t[19] !== j || t[20] !== _) {
        let e = i == null ? q.data : {
                items: i.map(z)
            },
            o = T({
                currentDirectoryId: e?.items.length ? j ?? null : null,
                directoryPath: e,
                intl: x
            }),
            c = o.find(R),
            m = E(l),
            v = m?.providerSlug === `gdrive` ? g(m.encodedAccountKey) : null,
            y = _ ?? (O ? c ?? {
                id: v ?? `external-gdrive:root`,
                name: x.formatMessage(D.googleDriveBreadcrumb)
            } : void 0),
            b = E(y?.id),
            A = b?.kind === `root` && b.encodedAccountKey != null && b.providerSlug !== `gdrive`,
            M = A && S(b.providerSlug),
            N = M ? o.find(e => e.id === y?.id) ?? y : y,
            P = A && !M ? y?.id : void 0,
            I = N != null && !(M && o.some(e => e.id === N.id)) ? [o[0], N, ...o.slice(1).filter(e => e.id !== N.id)] : o,
            B = [...I, {
                id: null,
                name: a
            }],
            G = F({
                items: B,
                maxUncollapsedItems: C ? 3 : void 0,
                shouldCollapseAncestors: !0
            }),
            K = B.length - 1,
            Q = e => I.slice(1, e + 1).flatMap(L);
        Y = `library-artifact-viewer-breadcrumb`;
        let $ = C ? u == null ? `gap-1` : `gap-1.25` : O ? `gap-2` : `gap-2.5`;
        t[25] === $ ? X = t[26] : (X = r(`flex min-w-0 items-center text-sm font-normal leading-[18px]`, $), t[25] = $, t[26] = X), Z = u, J = G.map((e, t) => {
            let i = t > 0 ? (0, V.jsx)(`span`, {
                className: `text-token-text-tertiary shrink-0`,
                "aria-hidden": `true`,
                children: H
            }) : null;
            if (e.type === `collapsed`) return (0, V.jsxs)(`span`, {
                className: `contents`,
                children: [i, (0, V.jsxs)(h.Root, {
                    children: [(0, V.jsx)(h.BasicTrigger, {
                        asChild: !0,
                        children: (0, V.jsx)(`button`, {
                            type: `button`,
                            "aria-label": x.formatMessage(D.openParentFolders),
                            className: r(W, `shrink-0`),
                            children: U
                        })
                    }), (0, V.jsx)(h.Portal, {
                        children: (0, V.jsx)(h.Content, {
                            align: `start`,
                            size: `medium`,
                            children: e.hiddenItems.map(e => {
                                let {
                                    item: t,
                                    itemIndex: n
                                } = e;
                                return t.id === P ? (0, V.jsx)(h.Item, {
                                    disabled: !0,
                                    children: t.name
                                }, `${t.id}-${n}`) : f == null ? (0, V.jsx)(h.LinkItem, {
                                    to: w(`/library`, t.id),
                                    onClick: p,
                                    children: t.name
                                }, `${t.id??`root`}-${n}`) : (0, V.jsx)(h.Item, {
                                    onClick: () => f(Q(n)),
                                    children: t.name
                                }, `${t.id??`root`}-${n}`)
                            })
                        })
                    })]
                })]
            }, `collapsed-ancestors`);
            let {
                item: a,
                itemIndex: o
            } = e, c = o === K, l = o === 0;
            return (0, V.jsxs)(`span`, {
                className: `contents`,
                children: [i, c ? (0, V.jsx)(`span`, {
                    className: r(`text-token-text-primary min-w-0 truncate`, C && `flex-1`),
                    children: s ?? (0, V.jsx)(k, {
                        fileName: a.name,
                        legacy: a.name
                    })
                }) : l ? (0, V.jsx)(n, {
                    label: x.formatMessage(D.viewInLibrary),
                    children: (0, V.jsx)(d, {
                        "aria-label": a.name,
                        to: w(`/library`, a.id),
                        onClick: p,
                        className: r(W, `shrink-0`),
                        children: a.name
                    })
                }) : a.id === P ? (0, V.jsx)(`span`, {
                    className: `text-token-text-tertiary min-w-0 shrink truncate`,
                    children: a.name
                }) : f == null ? (0, V.jsx)(d, {
                    to: w(`/library`, a.id),
                    onClick: p,
                    className: r(W, C && !l ? `min-w-0 shrink truncate` : `shrink-0`),
                    children: a.name
                }) : (0, V.jsx)(`button`, {
                    type: `button`,
                    onClick: () => f(Q(o)),
                    className: r(W, C && !l ? `min-w-0 shrink truncate` : `shrink-0`),
                    children: a.name
                })]
            }, `${a.id??`root`}-${o}`)
        }), t[8] = i, t[9] = q, t[10] = a, t[11] = s, t[12] = x, t[13] = C, t[14] = O, t[15] = l, t[16] = u, t[17] = f, t[18] = p, t[19] = j, t[20] = _, t[21] = J, t[22] = Y, t[23] = X, t[24] = Z
    } else J = t[21], Y = t[22], X = t[23], Z = t[24];
    let Q;
    return t[27] !== J || t[28] !== Y || t[29] !== X || t[30] !== Z ? (Q = (0, V.jsxs)(`span`, {
        "data-testid": Y,
        className: X,
        children: [Z, J]
    }), t[27] = J, t[28] = Y, t[29] = X, t[30] = Z, t[31] = Q) : Q = t[31], Q
}

function L(e) {
    return e.id == null ? [] : [{
        id: e.id,
        name: e.name
    }]
}

function R(e) {
    let t = E(e.id);
    return t?.providerSlug === `gdrive` && t.kind === `root`
}

function z(e) {
    return {
        ...e,
        is_root: !1
    }
}
var B, V, H, U, W, G = e((() => {
    B = p(), i(), O(), t(), _(), b(), C(), A(), M(), j(), x(), P(), v(), f(), a(), u(), l(), V = s(), H = `/`, U = `...`, W = `tap-padding-auto text-token-text-tertiary hover:text-token-text-primary focus-visible:text-token-text-primary focus-visible:outline-token-border-heavy rounded-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2`
}));
export {
    G as n, I as t
};
//# sourceMappingURL=9a717608-l25ibxuin3m5gado.js.map
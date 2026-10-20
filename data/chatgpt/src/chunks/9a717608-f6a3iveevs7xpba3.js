import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    P5 as t,
    X5 as n,
    Xy as r,
    Y5 as i,
    Zy as a,
    g8 as o
} from "./4813494d-bo7e0c29ngt4zgx0.js";
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
    B5t as h,
    G5t as g,
    IHn as _,
    KOt as v,
    L5t as y,
    LHn as b,
    LUt as x,
    VOt as S,
    WIn as C,
    X9t as w,
    Y9t as T,
    cLn as E,
    fLn as D,
    pLn as O,
    q5t as k,
    t7t as A,
    zUt as j
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    i as M,
    r as N
} from "./55904901-is8koj9c1rakt3ty.js";
import {
    n as P,
    t as F
} from "./02df22f1-fdj04js2pi3933gq.js";

function I(e) {
    "use forget";
    let n = (0, B.c)(32),
        {
            directoryPath: a,
            fileName: o,
            fileNameContent: s,
            libraryDirectoryId: l,
            libraryRootContent: u,
            onDirectoryClick: f,
            onLibraryClick: p,
            providerRoot: h,
            variant: v
        } = e,
        b = v === void 0 ? `default` : v,
        x = m(),
        C = b === `compact`,
        T = b === `google-drive-preview`,
        O = E(h?.id),
        A = l ?? (O?.kind === `root` && O.encodedAccountKey != null && O.providerSlug !== `gdrive` && j(O.providerSlug) ? h?.id : void 0),
        M;
    n[0] === A ? M = n[1] : (M = () => N(A ?? null), n[0] = A, n[1] = M);
    let P = t(M),
        I;
    n[2] === A ? I = n[3] : (I = () => k(A ?? null), n[2] = A, n[3] = I);
    let G = A != null && a == null,
        K;
    n[4] !== P || n[5] !== I || n[6] !== G ? (K = {
        queryKey: P,
        queryFn: I,
        enabled: G,
        staleTime: 3e4
    }, n[4] = P, n[5] = I, n[6] = G, n[7] = K) : K = n[7];
    let q = c(K),
        J, Y, X, Z;
    if (n[8] !== a || n[9] !== q || n[10] !== o || n[11] !== s || n[12] !== x || n[13] !== C || n[14] !== T || n[15] !== l || n[16] !== u || n[17] !== f || n[18] !== p || n[19] !== A || n[20] !== h) {
        let e = a == null ? q.data : {
                items: a.map(z)
            },
            t = g({
                currentDirectoryId: e?.items.length ? A ?? null : null,
                directoryPath: e,
                intl: x
            }),
            c = t.find(R),
            m = E(l),
            v = m?.providerSlug === `gdrive` ? y(m.encodedAccountKey) : null,
            b = h ?? (T ? c ?? {
                id: v ?? `external-gdrive:root`,
                name: x.formatMessage(w.googleDriveBreadcrumb)
            } : void 0),
            O = E(b?.id),
            k = O?.kind === `root` && O.encodedAccountKey != null && O.providerSlug !== `gdrive`,
            M = k && j(O.providerSlug),
            N = M ? t.find(e => e.id === b?.id) ?? b : b,
            P = k && !M ? b?.id : void 0,
            I = N != null && !(M && t.some(e => e.id === N.id)) ? [t[0], N, ...t.slice(1).filter(e => e.id !== N.id)] : t,
            B = [...I, {
                id: null,
                name: o
            }],
            G = F({
                items: B,
                maxUncollapsedItems: C ? 3 : void 0,
                shouldCollapseAncestors: !0
            }),
            K = B.length - 1,
            Q = e => I.slice(1, e + 1).flatMap(L);
        Y = `library-artifact-viewer-breadcrumb`;
        let $ = C ? u == null ? `gap-1` : `gap-1.25` : T ? `gap-2` : `gap-2.5`;
        n[25] === $ ? X = n[26] : (X = i(`flex min-w-0 items-center text-sm font-normal leading-[18px]`, $), n[25] = $, n[26] = X), Z = u, J = G.map((e, t) => {
            let n = t > 0 ? (0, V.jsx)(`span`, {
                className: `text-token-text-tertiary shrink-0`,
                "aria-hidden": `true`,
                children: H
            }) : null;
            if (e.type === `collapsed`) return (0, V.jsxs)(`span`, {
                className: `contents`,
                children: [n, (0, V.jsxs)(_.Root, {
                    children: [(0, V.jsx)(_.BasicTrigger, {
                        asChild: !0,
                        children: (0, V.jsx)(`button`, {
                            type: `button`,
                            "aria-label": x.formatMessage(w.openParentFolders),
                            className: i(W, `shrink-0`),
                            children: U
                        })
                    }), (0, V.jsx)(_.Portal, {
                        children: (0, V.jsx)(_.Content, {
                            align: `start`,
                            size: `medium`,
                            children: e.hiddenItems.map(e => {
                                let {
                                    item: t,
                                    itemIndex: n
                                } = e;
                                return t.id === P ? (0, V.jsx)(_.Item, {
                                    disabled: !0,
                                    children: t.name
                                }, `${t.id}-${n}`) : f == null ? (0, V.jsx)(_.LinkItem, {
                                    to: S(`/library`, t.id),
                                    onClick: p,
                                    children: t.name
                                }, `${t.id??`root`}-${n}`) : (0, V.jsx)(_.Item, {
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
                children: [n, c ? (0, V.jsx)(`span`, {
                    className: i(`text-token-text-primary min-w-0 truncate`, C && `flex-1`),
                    children: s ?? (0, V.jsx)(D, {
                        fileName: a.name,
                        legacy: a.name
                    })
                }) : l ? (0, V.jsx)(r, {
                    label: x.formatMessage(w.viewInLibrary),
                    children: (0, V.jsx)(d, {
                        "aria-label": a.name,
                        to: S(`/library`, a.id),
                        onClick: p,
                        className: i(W, `shrink-0`),
                        children: a.name
                    })
                }) : a.id === P ? (0, V.jsx)(`span`, {
                    className: `text-token-text-tertiary min-w-0 shrink truncate`,
                    children: a.name
                }) : f == null ? (0, V.jsx)(d, {
                    to: S(`/library`, a.id),
                    onClick: p,
                    className: i(W, C && !l ? `min-w-0 shrink truncate` : `shrink-0`),
                    children: a.name
                }) : (0, V.jsx)(`button`, {
                    type: `button`,
                    onClick: () => f(Q(o)),
                    className: i(W, C && !l ? `min-w-0 shrink truncate` : `shrink-0`),
                    children: a.name
                })]
            }, `${a.id??`root`}-${o}`)
        }), n[8] = a, n[9] = q, n[10] = o, n[11] = s, n[12] = x, n[13] = C, n[14] = T, n[15] = l, n[16] = u, n[17] = f, n[18] = p, n[19] = A, n[20] = h, n[21] = J, n[22] = Y, n[23] = X, n[24] = Z
    } else J = n[21], Y = n[22], X = n[23], Z = n[24];
    let Q;
    return n[27] !== J || n[28] !== Y || n[29] !== X || n[30] !== Z ? (Q = (0, V.jsxs)(`span`, {
        "data-testid": Y,
        className: X,
        children: [Z, J]
    }), n[27] = J, n[28] = Y, n[29] = X, n[30] = Z, n[31] = Q) : Q = n[31], Q
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
    B = p(), o(), b(), a(), O(), T(), h(), C(), M(), v(), A(), P(), x(), f(), n(), u(), l(), V = s(), H = `/`, U = `...`, W = `tap-padding-auto text-token-text-tertiary hover:text-token-text-primary focus-visible:text-token-text-primary focus-visible:outline-token-border-heavy rounded-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2`
}));
export {
    G as n, I as t
};
//# sourceMappingURL=9a717608-f6a3iveevs7xpba3.js.map
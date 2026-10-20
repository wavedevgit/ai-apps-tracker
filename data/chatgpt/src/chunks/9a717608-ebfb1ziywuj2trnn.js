import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J5 as t,
    N5 as n,
    Xy as r,
    Y5 as i,
    Zy as a,
    h8 as o
} from "./4813494d-dfpv67hlp00pbohr.js";
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
    H5t as h,
    IUt as g,
    K9t as _,
    L5t as v,
    NHn as y,
    P5t as b,
    PHn as x,
    PUt as S,
    Q5t as C,
    ROt as w,
    UOt as T,
    VIn as E,
    W5t as D,
    aLn as O,
    lLn as k,
    q9t as A,
    uLn as j
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    i as M,
    r as N
} from "./55904901-jldq49nzssgkpqgh.js";
import {
    n as P,
    t as F
} from "./02df22f1-fh6jqowc1mly95ls.js";

function I(e) {
    "use forget";
    let i = (0, B.c)(32),
        {
            directoryPath: a,
            fileName: o,
            fileNameContent: s,
            libraryDirectoryId: l,
            libraryRootContent: u,
            onDirectoryClick: f,
            onLibraryClick: p,
            providerRoot: _,
            variant: v
        } = e,
        x = v === void 0 ? `default` : v,
        S = m(),
        C = x === `compact`,
        T = x === `google-drive-preview`,
        E = O(_?.id),
        j = l ?? (E?.kind === `root` && E.encodedAccountKey != null && E.providerSlug !== `gdrive` && g(E.providerSlug) ? _?.id : void 0),
        M;
    i[0] === j ? M = i[1] : (M = () => N(j ?? null), i[0] = j, i[1] = M);
    let P = n(M),
        I;
    i[2] === j ? I = i[3] : (I = () => D(j ?? null), i[2] = j, i[3] = I);
    let G = j != null && a == null,
        K;
    i[4] !== P || i[5] !== I || i[6] !== G ? (K = {
        queryKey: P,
        queryFn: I,
        enabled: G,
        staleTime: 3e4
    }, i[4] = P, i[5] = I, i[6] = G, i[7] = K) : K = i[7];
    let q = c(K),
        J, Y, X, Z;
    if (i[8] !== a || i[9] !== q || i[10] !== o || i[11] !== s || i[12] !== S || i[13] !== C || i[14] !== T || i[15] !== l || i[16] !== u || i[17] !== f || i[18] !== p || i[19] !== j || i[20] !== _) {
        let e = a == null ? q.data : {
                items: a.map(z)
            },
            n = h({
                currentDirectoryId: e?.items.length ? j ?? null : null,
                directoryPath: e,
                intl: S
            }),
            c = n.find(R),
            m = O(l),
            v = m?.providerSlug === `gdrive` ? b(m.encodedAccountKey) : null,
            x = _ ?? (T ? c ?? {
                id: v ?? `external-gdrive:root`,
                name: S.formatMessage(A.googleDriveBreadcrumb)
            } : void 0),
            E = O(x?.id),
            D = E?.kind === `root` && E.encodedAccountKey != null && E.providerSlug !== `gdrive`,
            M = D && g(E.providerSlug),
            N = M ? n.find(e => e.id === x?.id) ?? x : x,
            P = D && !M ? x?.id : void 0,
            I = N != null && !(M && n.some(e => e.id === N.id)) ? [n[0], N, ...n.slice(1).filter(e => e.id !== N.id)] : n,
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
        i[25] === $ ? X = i[26] : (X = t(`flex min-w-0 items-center text-sm font-normal leading-[18px]`, $), i[25] = $, i[26] = X), Z = u, J = G.map((e, n) => {
            let i = n > 0 ? (0, V.jsx)(`span`, {
                className: `text-token-text-tertiary shrink-0`,
                "aria-hidden": `true`,
                children: H
            }) : null;
            if (e.type === `collapsed`) return (0, V.jsxs)(`span`, {
                className: `contents`,
                children: [i, (0, V.jsxs)(y.Root, {
                    children: [(0, V.jsx)(y.BasicTrigger, {
                        asChild: !0,
                        children: (0, V.jsx)(`button`, {
                            type: `button`,
                            "aria-label": S.formatMessage(A.openParentFolders),
                            className: t(W, `shrink-0`),
                            children: U
                        })
                    }), (0, V.jsx)(y.Portal, {
                        children: (0, V.jsx)(y.Content, {
                            align: `start`,
                            size: `medium`,
                            children: e.hiddenItems.map(e => {
                                let {
                                    item: t,
                                    itemIndex: n
                                } = e;
                                return t.id === P ? (0, V.jsx)(y.Item, {
                                    disabled: !0,
                                    children: t.name
                                }, `${t.id}-${n}`) : f == null ? (0, V.jsx)(y.LinkItem, {
                                    to: w(`/library`, t.id),
                                    onClick: p,
                                    children: t.name
                                }, `${t.id??`root`}-${n}`) : (0, V.jsx)(y.Item, {
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
                    className: t(`text-token-text-primary min-w-0 truncate`, C && `flex-1`),
                    children: s ?? (0, V.jsx)(k, {
                        fileName: a.name,
                        legacy: a.name
                    })
                }) : l ? (0, V.jsx)(r, {
                    label: S.formatMessage(A.viewInLibrary),
                    children: (0, V.jsx)(d, {
                        "aria-label": a.name,
                        to: w(`/library`, a.id),
                        onClick: p,
                        className: t(W, `shrink-0`),
                        children: a.name
                    })
                }) : a.id === P ? (0, V.jsx)(`span`, {
                    className: `text-token-text-tertiary min-w-0 shrink truncate`,
                    children: a.name
                }) : f == null ? (0, V.jsx)(d, {
                    to: w(`/library`, a.id),
                    onClick: p,
                    className: t(W, C && !l ? `min-w-0 shrink truncate` : `shrink-0`),
                    children: a.name
                }) : (0, V.jsx)(`button`, {
                    type: `button`,
                    onClick: () => f(Q(o)),
                    className: t(W, C && !l ? `min-w-0 shrink truncate` : `shrink-0`),
                    children: a.name
                })]
            }, `${a.id??`root`}-${o}`)
        }), i[8] = a, i[9] = q, i[10] = o, i[11] = s, i[12] = S, i[13] = C, i[14] = T, i[15] = l, i[16] = u, i[17] = f, i[18] = p, i[19] = j, i[20] = _, i[21] = J, i[22] = Y, i[23] = X, i[24] = Z
    } else J = i[21], Y = i[22], X = i[23], Z = i[24];
    let Q;
    return i[27] !== J || i[28] !== Y || i[29] !== X || i[30] !== Z ? (Q = (0, V.jsxs)(`span`, {
        "data-testid": Y,
        className: X,
        children: [Z, J]
    }), i[27] = J, i[28] = Y, i[29] = X, i[30] = Z, i[31] = Q) : Q = i[31], Q
}

function L(e) {
    return e.id == null ? [] : [{
        id: e.id,
        name: e.name
    }]
}

function R(e) {
    let t = O(e.id);
    return t?.providerSlug === `gdrive` && t.kind === `root`
}

function z(e) {
    return {
        ...e,
        is_root: !1
    }
}
var B, V, H, U, W, G = e((() => {
    B = p(), o(), x(), a(), j(), _(), v(), E(), M(), T(), C(), P(), S(), f(), i(), u(), l(), V = s(), H = `/`, U = `...`, W = `tap-padding-auto text-token-text-tertiary hover:text-token-text-primary focus-visible:text-token-text-primary focus-visible:outline-token-border-heavy rounded-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2`
}));
export {
    G as n, I as t
};
//# sourceMappingURL=9a717608-ebfb1ziywuj2trnn.js.map
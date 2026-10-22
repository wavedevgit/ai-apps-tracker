import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    J5 as n,
    Qy as r,
    Zy as i,
    l7 as a,
    u7 as o
} from "./4813494d-i89nb6zlze66idsz.js";
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
    $5t as h,
    HOt as g,
    IUt as _,
    K5t as v,
    LOt as y,
    PUt as b,
    QLn as x,
    SUn as S,
    U5t as C,
    Z5t as w,
    ZLn as T,
    kLn as E,
    nen as D,
    qLn as O,
    s7t as k,
    ten as A,
    xUn as j
} from "./conversation-small-fh0oqifngkf5rvl1.js";
import {
    i as M,
    r as N
} from "./55904901-c0yefxsdvg57otbe.js";
import {
    n as P,
    t as F
} from "./02df22f1-gcxwqd5jc49wc03n.js";

function I(e) {
    "use forget";
    let t = (0, B.c)(32),
        {
            directoryPath: r,
            fileName: o,
            fileNameContent: s,
            libraryDirectoryId: l,
            libraryRootContent: u,
            onDirectoryClick: f,
            onLibraryClick: p,
            providerRoot: g,
            variant: v
        } = e,
        b = v === void 0 ? `default` : v,
        x = m(),
        S = b === `compact`,
        E = b === `google-drive-preview`,
        k = O(g?.id),
        A = l ?? (k?.kind === `root` && k.encodedAccountKey != null && k.providerSlug !== `gdrive` && _(k.providerSlug) ? g?.id : void 0),
        M;
    t[0] === A ? M = t[1] : (M = () => N(A ?? null), t[0] = A, t[1] = M);
    let P = n(M),
        I;
    t[2] === A ? I = t[3] : (I = () => h(A ?? null), t[2] = A, t[3] = I);
    let G = A != null && r == null,
        K;
    t[4] !== P || t[5] !== I || t[6] !== G ? (K = {
        queryKey: P,
        queryFn: I,
        enabled: G,
        staleTime: 3e4
    }, t[4] = P, t[5] = I, t[6] = G, t[7] = K) : K = t[7];
    let q = c(K),
        J, Y, X, Z;
    if (t[8] !== r || t[9] !== q || t[10] !== o || t[11] !== s || t[12] !== x || t[13] !== S || t[14] !== E || t[15] !== l || t[16] !== u || t[17] !== f || t[18] !== p || t[19] !== A || t[20] !== g) {
        let e = r == null ? q.data : {
                items: r.map(z)
            },
            n = w({
                currentDirectoryId: e?.items.length ? A ?? null : null,
                directoryPath: e,
                intl: x
            }),
            c = n.find(R),
            m = O(l),
            h = m?.providerSlug === `gdrive` ? C(m.encodedAccountKey) : null,
            v = g ?? (E ? c ?? {
                id: h ?? `external-gdrive:root`,
                name: x.formatMessage(D.googleDriveBreadcrumb)
            } : void 0),
            b = O(v?.id),
            k = b?.kind === `root` && b.encodedAccountKey != null && b.providerSlug !== `gdrive`,
            M = k && _(b.providerSlug),
            N = M ? n.find(e => e.id === v?.id) ?? v : v,
            P = k && !M ? v?.id : void 0,
            I = N != null && !(M && n.some(e => e.id === N.id)) ? [n[0], N, ...n.slice(1).filter(e => e.id !== N.id)] : n,
            B = [...I, {
                id: null,
                name: o
            }],
            G = F({
                items: B,
                maxUncollapsedItems: S ? 3 : void 0,
                shouldCollapseAncestors: !0
            }),
            K = B.length - 1,
            Q = e => I.slice(1, e + 1).flatMap(L);
        Y = `library-artifact-viewer-breadcrumb`;
        let $ = S ? u == null ? `gap-1` : `gap-1.25` : E ? `gap-2` : `gap-2.5`;
        t[25] === $ ? X = t[26] : (X = a(`flex min-w-0 items-center text-sm font-normal leading-[18px]`, $), t[25] = $, t[26] = X), Z = u, J = G.map((e, t) => {
            let n = t > 0 ? (0, V.jsx)(`span`, {
                className: `text-token-text-tertiary shrink-0`,
                "aria-hidden": `true`,
                children: H
            }) : null;
            if (e.type === `collapsed`) return (0, V.jsxs)(`span`, {
                className: `contents`,
                children: [n, (0, V.jsxs)(j.Root, {
                    children: [(0, V.jsx)(j.BasicTrigger, {
                        asChild: !0,
                        children: (0, V.jsx)(`button`, {
                            type: `button`,
                            "aria-label": x.formatMessage(D.openParentFolders),
                            className: a(W, `shrink-0`),
                            children: U
                        })
                    }), (0, V.jsx)(j.Portal, {
                        children: (0, V.jsx)(j.Content, {
                            align: `start`,
                            size: `medium`,
                            children: e.hiddenItems.map(e => {
                                let {
                                    item: t,
                                    itemIndex: n
                                } = e;
                                return t.id === P ? (0, V.jsx)(j.Item, {
                                    disabled: !0,
                                    children: t.name
                                }, `${t.id}-${n}`) : f == null ? (0, V.jsx)(j.LinkItem, {
                                    to: y(`/library`, t.id),
                                    onClick: p,
                                    children: t.name
                                }, `${t.id??`root`}-${n}`) : (0, V.jsx)(j.Item, {
                                    onClick: () => f(Q(n)),
                                    children: t.name
                                }, `${t.id??`root`}-${n}`)
                            })
                        })
                    })]
                })]
            }, `collapsed-ancestors`);
            let {
                item: r,
                itemIndex: o
            } = e, c = o === K, l = o === 0;
            return (0, V.jsxs)(`span`, {
                className: `contents`,
                children: [n, c ? (0, V.jsx)(`span`, {
                    className: a(`text-token-text-primary min-w-0 truncate`, S && `flex-1`),
                    children: s ?? (0, V.jsx)(T, {
                        fileName: r.name,
                        legacy: r.name
                    })
                }) : l ? (0, V.jsx)(i, {
                    label: x.formatMessage(D.viewInLibrary),
                    children: (0, V.jsx)(d, {
                        "aria-label": r.name,
                        to: y(`/library`, r.id),
                        onClick: p,
                        className: a(W, `shrink-0`),
                        children: r.name
                    })
                }) : r.id === P ? (0, V.jsx)(`span`, {
                    className: `text-token-text-tertiary min-w-0 shrink truncate`,
                    children: r.name
                }) : f == null ? (0, V.jsx)(d, {
                    to: y(`/library`, r.id),
                    onClick: p,
                    className: a(W, S && !l ? `min-w-0 shrink truncate` : `shrink-0`),
                    children: r.name
                }) : (0, V.jsx)(`button`, {
                    type: `button`,
                    onClick: () => f(Q(o)),
                    className: a(W, S && !l ? `min-w-0 shrink truncate` : `shrink-0`),
                    children: r.name
                })]
            }, `${r.id??`root`}-${o}`)
        }), t[8] = r, t[9] = q, t[10] = o, t[11] = s, t[12] = x, t[13] = S, t[14] = E, t[15] = l, t[16] = u, t[17] = f, t[18] = p, t[19] = A, t[20] = g, t[21] = J, t[22] = Y, t[23] = X, t[24] = Z
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
    B = p(), t(), S(), r(), x(), A(), v(), E(), M(), g(), k(), P(), b(), f(), o(), u(), l(), V = s(), H = `/`, U = `...`, W = `tap-padding-auto text-token-text-tertiary hover:text-token-text-primary focus-visible:text-token-text-primary focus-visible:outline-token-border-heavy rounded-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2`
}));
export {
    G as n, I as t
};
//# sourceMappingURL=9a717608-fgqr14dab4int8qf.js.map
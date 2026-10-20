import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J5 as t,
    M5 as n,
    Xy as r,
    Yy as i,
    m8 as a,
    q5 as o
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    $ as s,
    Bn as c,
    O as l,
    Tn as u,
    Vn as d,
    at as f,
    s as p,
    zn as m
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    BOt as h,
    FOt as g,
    G9t as _,
    I5t as v,
    K9t as y,
    KIn as b,
    N5t as x,
    NUt as S,
    RHn as C,
    U5t as w,
    V5t as T,
    Z5t as E,
    hLn as D,
    jUt as O,
    mLn as k,
    uLn as A,
    zHn as j
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    i as M,
    r as N
} from "./55904901-cwfwvpuf6sbjcgjd.js";
import {
    n as P,
    t as F
} from "./02df22f1-bc4b8tcspfptuq2c.js";

function I(e) {
    "use forget";
    let t = (0, B.c)(32),
        {
            directoryPath: r,
            fileName: a,
            fileNameContent: s,
            libraryDirectoryId: u,
            libraryRootContent: d,
            onDirectoryClick: p,
            onLibraryClick: m,
            providerRoot: h,
            variant: _
        } = e,
        v = _ === void 0 ? `default` : _,
        b = c(),
        E = v === `compact`,
        D = v === `google-drive-preview`,
        O = A(h?.id),
        j = u ?? (O?.kind === `root` && O.encodedAccountKey != null && O.providerSlug !== `gdrive` && S(O.providerSlug) ? h?.id : void 0),
        M;
    t[0] === j ? M = t[1] : (M = () => N(j ?? null), t[0] = j, t[1] = M);
    let P = n(M),
        I;
    t[2] === j ? I = t[3] : (I = () => w(j ?? null), t[2] = j, t[3] = I);
    let G = j != null && r == null,
        K;
    t[4] !== P || t[5] !== I || t[6] !== G ? (K = {
        queryKey: P,
        queryFn: I,
        enabled: G,
        staleTime: 3e4
    }, t[4] = P, t[5] = I, t[6] = G, t[7] = K) : K = t[7];
    let q = l(K),
        J, Y, X, Z;
    if (t[8] !== r || t[9] !== q || t[10] !== a || t[11] !== s || t[12] !== b || t[13] !== E || t[14] !== D || t[15] !== u || t[16] !== d || t[17] !== p || t[18] !== m || t[19] !== j || t[20] !== h) {
        let e = r == null ? q.data : {
                items: r.map(z)
            },
            n = T({
                currentDirectoryId: e?.items.length ? j ?? null : null,
                directoryPath: e,
                intl: b
            }),
            c = n.find(R),
            l = A(u),
            _ = l?.providerSlug === `gdrive` ? x(l.encodedAccountKey) : null,
            v = h ?? (D ? c ?? {
                id: _ ?? `external-gdrive:root`,
                name: b.formatMessage(y.googleDriveBreadcrumb)
            } : void 0),
            w = A(v?.id),
            O = w?.kind === `root` && w.encodedAccountKey != null && w.providerSlug !== `gdrive`,
            M = O && S(w.providerSlug),
            N = M ? n.find(e => e.id === v?.id) ?? v : v,
            P = O && !M ? v?.id : void 0,
            I = N != null && !(M && n.some(e => e.id === N.id)) ? [n[0], N, ...n.slice(1).filter(e => e.id !== N.id)] : n,
            B = [...I, {
                id: null,
                name: a
            }],
            G = F({
                items: B,
                maxUncollapsedItems: E ? 3 : void 0,
                shouldCollapseAncestors: !0
            }),
            K = B.length - 1,
            Q = e => I.slice(1, e + 1).flatMap(L);
        Y = `library-artifact-viewer-breadcrumb`;
        let $ = E ? d == null ? `gap-1` : `gap-1.25` : D ? `gap-2` : `gap-2.5`;
        t[25] === $ ? X = t[26] : (X = o(`flex min-w-0 items-center text-sm font-normal leading-[18px]`, $), t[25] = $, t[26] = X), Z = d, J = G.map((e, t) => {
            let n = t > 0 ? (0, V.jsx)(`span`, {
                className: `text-token-text-tertiary shrink-0`,
                "aria-hidden": `true`,
                children: H
            }) : null;
            if (e.type === `collapsed`) return (0, V.jsxs)(`span`, {
                className: `contents`,
                children: [n, (0, V.jsxs)(C.Root, {
                    children: [(0, V.jsx)(C.BasicTrigger, {
                        asChild: !0,
                        children: (0, V.jsx)(`button`, {
                            type: `button`,
                            "aria-label": b.formatMessage(y.openParentFolders),
                            className: o(W, `shrink-0`),
                            children: U
                        })
                    }), (0, V.jsx)(C.Portal, {
                        children: (0, V.jsx)(C.Content, {
                            align: `start`,
                            size: `medium`,
                            children: e.hiddenItems.map(e => {
                                let {
                                    item: t,
                                    itemIndex: n
                                } = e;
                                return t.id === P ? (0, V.jsx)(C.Item, {
                                    disabled: !0,
                                    children: t.name
                                }, `${t.id}-${n}`) : p == null ? (0, V.jsx)(C.LinkItem, {
                                    to: g(`/library`, t.id),
                                    onClick: m,
                                    children: t.name
                                }, `${t.id??`root`}-${n}`) : (0, V.jsx)(C.Item, {
                                    onClick: () => p(Q(n)),
                                    children: t.name
                                }, `${t.id??`root`}-${n}`)
                            })
                        })
                    })]
                })]
            }, `collapsed-ancestors`);
            let {
                item: r,
                itemIndex: a
            } = e, c = a === K, l = a === 0;
            return (0, V.jsxs)(`span`, {
                className: `contents`,
                children: [n, c ? (0, V.jsx)(`span`, {
                    className: o(`text-token-text-primary min-w-0 truncate`, E && `flex-1`),
                    children: s ?? (0, V.jsx)(k, {
                        fileName: r.name,
                        legacy: r.name
                    })
                }) : l ? (0, V.jsx)(i, {
                    label: b.formatMessage(y.viewInLibrary),
                    children: (0, V.jsx)(f, {
                        "aria-label": r.name,
                        to: g(`/library`, r.id),
                        onClick: m,
                        className: o(W, `shrink-0`),
                        children: r.name
                    })
                }) : r.id === P ? (0, V.jsx)(`span`, {
                    className: `text-token-text-tertiary min-w-0 shrink truncate`,
                    children: r.name
                }) : p == null ? (0, V.jsx)(f, {
                    to: g(`/library`, r.id),
                    onClick: m,
                    className: o(W, E && !l ? `min-w-0 shrink truncate` : `shrink-0`),
                    children: r.name
                }) : (0, V.jsx)(`button`, {
                    type: `button`,
                    onClick: () => p(Q(a)),
                    className: o(W, E && !l ? `min-w-0 shrink truncate` : `shrink-0`),
                    children: r.name
                })]
            }, `${r.id??`root`}-${a}`)
        }), t[8] = r, t[9] = q, t[10] = a, t[11] = s, t[12] = b, t[13] = E, t[14] = D, t[15] = u, t[16] = d, t[17] = p, t[18] = m, t[19] = j, t[20] = h, t[21] = J, t[22] = Y, t[23] = X, t[24] = Z
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
    let t = A(e.id);
    return t?.providerSlug === `gdrive` && t.kind === `root`
}

function z(e) {
    return {
        ...e,
        is_root: !1
    }
}
var B, V, H, U, W, G = e((() => {
    B = u(), a(), j(), r(), D(), _(), v(), b(), M(), h(), E(), P(), O(), p(), t(), m(), s(), V = d(), H = `/`, U = `...`, W = `tap-padding-auto text-token-text-tertiary hover:text-token-text-primary focus-visible:text-token-text-primary focus-visible:outline-token-border-heavy rounded-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2`
}));
export {
    G as n, I as t
};
//# sourceMappingURL=9a717608-dy9feawp9ew221gb.js.map
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B6 as t,
    My as n,
    b5 as r,
    i5 as i,
    jy as a,
    y5 as o
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as s,
    Bn as c,
    O as l,
    Rn as u,
    at as d,
    s as f,
    wn as p,
    zn as m
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    N9t as h,
    NOt as g,
    NUt as _,
    P9t as v,
    QIn as y,
    ROt as b,
    THn as x,
    ZIn as S,
    j5t as C,
    jUt as w,
    k5t as T,
    kIn as E,
    qIn as D,
    w5t as O,
    wHn as k,
    x5t as A,
    z5t as j
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    i as M,
    r as N
} from "./55904901-ijw2tgije8ad24dr.js";
import {
    n as P,
    t as F
} from "./02df22f1-hwozk71o4lp1b1lx.js";

function I(e) {
    "use forget";
    let t = (0, B.c)(32),
        {
            directoryPath: n,
            fileName: r,
            fileNameContent: s,
            libraryDirectoryId: c,
            libraryRootContent: u,
            onDirectoryClick: f,
            onLibraryClick: p,
            providerRoot: h,
            variant: y
        } = e,
        b = y === void 0 ? `default` : y,
        x = m(),
        w = b === `compact`,
        E = b === `google-drive-preview`,
        O = D(h?.id),
        j = c ?? (O?.kind === `root` && O.encodedAccountKey != null && O.providerSlug !== `gdrive` && _(O.providerSlug) ? h?.id : void 0),
        M;
    t[0] === j ? M = t[1] : (M = () => N(j ?? null), t[0] = j, t[1] = M);
    let P = i(M),
        I;
    t[2] === j ? I = t[3] : (I = () => C(j ?? null), t[2] = j, t[3] = I);
    let G = j != null && n == null,
        K;
    t[4] !== P || t[5] !== I || t[6] !== G ? (K = {
        queryKey: P,
        queryFn: I,
        enabled: G,
        staleTime: 3e4
    }, t[4] = P, t[5] = I, t[6] = G, t[7] = K) : K = t[7];
    let q = l(K),
        J, Y, X, Z;
    if (t[8] !== n || t[9] !== q || t[10] !== r || t[11] !== s || t[12] !== x || t[13] !== w || t[14] !== E || t[15] !== c || t[16] !== u || t[17] !== f || t[18] !== p || t[19] !== j || t[20] !== h) {
        let e = n == null ? q.data : {
                items: n.map(z)
            },
            i = T({
                currentDirectoryId: e?.items.length ? j ?? null : null,
                directoryPath: e,
                intl: x
            }),
            l = i.find(R),
            m = D(c),
            y = m?.providerSlug === `gdrive` ? A(m.encodedAccountKey) : null,
            b = h ?? (E ? l ?? {
                id: y ?? `external-gdrive:root`,
                name: x.formatMessage(v.googleDriveBreadcrumb)
            } : void 0),
            C = D(b?.id),
            O = C?.kind === `root` && C.encodedAccountKey != null && C.providerSlug !== `gdrive`,
            M = O && _(C.providerSlug),
            N = M ? i.find(e => e.id === b?.id) ?? b : b,
            P = O && !M ? b?.id : void 0,
            I = N != null && !(M && i.some(e => e.id === N.id)) ? [i[0], N, ...i.slice(1).filter(e => e.id !== N.id)] : i,
            B = [...I, {
                id: null,
                name: r
            }],
            G = F({
                items: B,
                maxUncollapsedItems: w ? 3 : void 0,
                shouldCollapseAncestors: !0
            }),
            K = B.length - 1,
            Q = e => I.slice(1, e + 1).flatMap(L);
        Y = `library-artifact-viewer-breadcrumb`;
        let $ = w ? u == null ? `gap-1` : `gap-1.25` : E ? `gap-2` : `gap-2.5`;
        t[25] === $ ? X = t[26] : (X = o(`flex min-w-0 items-center text-sm font-normal leading-[18px]`, $), t[25] = $, t[26] = X), Z = u, J = G.map((e, t) => {
            let n = t > 0 ? (0, V.jsx)(`span`, {
                className: `text-token-text-tertiary shrink-0`,
                "aria-hidden": `true`,
                children: H
            }) : null;
            if (e.type === `collapsed`) return (0, V.jsxs)(`span`, {
                className: `contents`,
                children: [n, (0, V.jsxs)(k.Root, {
                    children: [(0, V.jsx)(k.BasicTrigger, {
                        asChild: !0,
                        children: (0, V.jsx)(`button`, {
                            type: `button`,
                            "aria-label": x.formatMessage(v.openParentFolders),
                            className: o(W, `shrink-0`),
                            children: U
                        })
                    }), (0, V.jsx)(k.Portal, {
                        children: (0, V.jsx)(k.Content, {
                            align: `start`,
                            size: `medium`,
                            children: e.hiddenItems.map(e => {
                                let {
                                    item: t,
                                    itemIndex: n
                                } = e;
                                return t.id === P ? (0, V.jsx)(k.Item, {
                                    disabled: !0,
                                    children: t.name
                                }, `${t.id}-${n}`) : f == null ? (0, V.jsx)(k.LinkItem, {
                                    to: g(`/library`, t.id),
                                    onClick: p,
                                    children: t.name
                                }, `${t.id??`root`}-${n}`) : (0, V.jsx)(k.Item, {
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
                itemIndex: i
            } = e, c = i === K, l = i === 0;
            return (0, V.jsxs)(`span`, {
                className: `contents`,
                children: [n, c ? (0, V.jsx)(`span`, {
                    className: o(`text-token-text-primary min-w-0 truncate`, w && `flex-1`),
                    children: s ?? (0, V.jsx)(S, {
                        fileName: r.name,
                        legacy: r.name
                    })
                }) : l ? (0, V.jsx)(a, {
                    label: x.formatMessage(v.viewInLibrary),
                    children: (0, V.jsx)(d, {
                        "aria-label": r.name,
                        to: g(`/library`, r.id),
                        onClick: p,
                        className: o(W, `shrink-0`),
                        children: r.name
                    })
                }) : r.id === P ? (0, V.jsx)(`span`, {
                    className: `text-token-text-tertiary min-w-0 shrink truncate`,
                    children: r.name
                }) : f == null ? (0, V.jsx)(d, {
                    to: g(`/library`, r.id),
                    onClick: p,
                    className: o(W, w && !l ? `min-w-0 shrink truncate` : `shrink-0`),
                    children: r.name
                }) : (0, V.jsx)(`button`, {
                    type: `button`,
                    onClick: () => f(Q(i)),
                    className: o(W, w && !l ? `min-w-0 shrink truncate` : `shrink-0`),
                    children: r.name
                })]
            }, `${r.id??`root`}-${i}`)
        }), t[8] = n, t[9] = q, t[10] = r, t[11] = s, t[12] = x, t[13] = w, t[14] = E, t[15] = c, t[16] = u, t[17] = f, t[18] = p, t[19] = j, t[20] = h, t[21] = J, t[22] = Y, t[23] = X, t[24] = Z
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
    let t = D(e.id);
    return t?.providerSlug === `gdrive` && t.kind === `root`
}

function z(e) {
    return {
        ...e,
        is_root: !1
    }
}
var B, V, H, U, W, G = e((() => {
    B = p(), t(), x(), n(), y(), h(), O(), E(), M(), b(), j(), P(), w(), f(), r(), u(), s(), V = c(), H = `/`, U = `...`, W = `tap-padding-auto text-token-text-tertiary hover:text-token-text-primary focus-visible:text-token-text-primary focus-visible:outline-token-border-heavy rounded-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2`
}));
export {
    G as n, I as t
};
//# sourceMappingURL=9a717608-g475mfqktvjja4ct.js.map
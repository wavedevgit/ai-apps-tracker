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
} from "./4813494d-r54yv6lv29x4ew99.js";
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
    $9t as h,
    B5t as g,
    ELn as _,
    J5t as v,
    JLn as y,
    NUt as b,
    POt as x,
    Q9t as S,
    U5t as C,
    WLn as w,
    X5t as T,
    YLn as E,
    i7t as D,
    jUt as O,
    vUn as k,
    yUn as A,
    zOt as j
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    i as M,
    r as N
} from "./55904901-bw59ulw6e6pu0dqc.js";
import {
    n as P,
    t as F
} from "./02df22f1-mq6yav9awepdfhiy.js";

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
            providerRoot: _,
            variant: S
        } = e,
        C = S === void 0 ? `default` : S,
        E = m(),
        D = C === `compact`,
        O = C === `google-drive-preview`,
        A = w(_?.id),
        j = l ?? (A?.kind === `root` && A.encodedAccountKey != null && A.providerSlug !== `gdrive` && b(A.providerSlug) ? _?.id : void 0),
        M;
    t[0] === j ? M = t[1] : (M = () => N(j ?? null), t[0] = j, t[1] = M);
    let P = n(M),
        I;
    t[2] === j ? I = t[3] : (I = () => T(j ?? null), t[2] = j, t[3] = I);
    let G = j != null && r == null,
        K;
    t[4] !== P || t[5] !== I || t[6] !== G ? (K = {
        queryKey: P,
        queryFn: I,
        enabled: G,
        staleTime: 3e4
    }, t[4] = P, t[5] = I, t[6] = G, t[7] = K) : K = t[7];
    let q = c(K),
        J, Y, X, Z;
    if (t[8] !== r || t[9] !== q || t[10] !== o || t[11] !== s || t[12] !== E || t[13] !== D || t[14] !== O || t[15] !== l || t[16] !== u || t[17] !== f || t[18] !== p || t[19] !== j || t[20] !== _) {
        let e = r == null ? q.data : {
                items: r.map(z)
            },
            n = v({
                currentDirectoryId: e?.items.length ? j ?? null : null,
                directoryPath: e,
                intl: E
            }),
            c = n.find(R),
            m = w(l),
            S = m?.providerSlug === `gdrive` ? g(m.encodedAccountKey) : null,
            C = _ ?? (O ? c ?? {
                id: S ?? `external-gdrive:root`,
                name: E.formatMessage(h.googleDriveBreadcrumb)
            } : void 0),
            T = w(C?.id),
            A = T?.kind === `root` && T.encodedAccountKey != null && T.providerSlug !== `gdrive`,
            M = A && b(T.providerSlug),
            N = M ? n.find(e => e.id === C?.id) ?? C : C,
            P = A && !M ? C?.id : void 0,
            I = N != null && !(M && n.some(e => e.id === N.id)) ? [n[0], N, ...n.slice(1).filter(e => e.id !== N.id)] : n,
            B = [...I, {
                id: null,
                name: o
            }],
            G = F({
                items: B,
                maxUncollapsedItems: D ? 3 : void 0,
                shouldCollapseAncestors: !0
            }),
            K = B.length - 1,
            Q = e => I.slice(1, e + 1).flatMap(L);
        Y = `library-artifact-viewer-breadcrumb`;
        let $ = D ? u == null ? `gap-1` : `gap-1.25` : O ? `gap-2` : `gap-2.5`;
        t[25] === $ ? X = t[26] : (X = a(`flex min-w-0 items-center text-sm font-normal leading-[18px]`, $), t[25] = $, t[26] = X), Z = u, J = G.map((e, t) => {
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
                            "aria-label": E.formatMessage(h.openParentFolders),
                            className: a(W, `shrink-0`),
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
                                    to: x(`/library`, t.id),
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
                itemIndex: o
            } = e, c = o === K, l = o === 0;
            return (0, V.jsxs)(`span`, {
                className: `contents`,
                children: [n, c ? (0, V.jsx)(`span`, {
                    className: a(`text-token-text-primary min-w-0 truncate`, D && `flex-1`),
                    children: s ?? (0, V.jsx)(y, {
                        fileName: r.name,
                        legacy: r.name
                    })
                }) : l ? (0, V.jsx)(i, {
                    label: E.formatMessage(h.viewInLibrary),
                    children: (0, V.jsx)(d, {
                        "aria-label": r.name,
                        to: x(`/library`, r.id),
                        onClick: p,
                        className: a(W, `shrink-0`),
                        children: r.name
                    })
                }) : r.id === P ? (0, V.jsx)(`span`, {
                    className: `text-token-text-tertiary min-w-0 shrink truncate`,
                    children: r.name
                }) : f == null ? (0, V.jsx)(d, {
                    to: x(`/library`, r.id),
                    onClick: p,
                    className: a(W, D && !l ? `min-w-0 shrink truncate` : `shrink-0`),
                    children: r.name
                }) : (0, V.jsx)(`button`, {
                    type: `button`,
                    onClick: () => f(Q(o)),
                    className: a(W, D && !l ? `min-w-0 shrink truncate` : `shrink-0`),
                    children: r.name
                })]
            }, `${r.id??`root`}-${o}`)
        }), t[8] = r, t[9] = q, t[10] = o, t[11] = s, t[12] = E, t[13] = D, t[14] = O, t[15] = l, t[16] = u, t[17] = f, t[18] = p, t[19] = j, t[20] = _, t[21] = J, t[22] = Y, t[23] = X, t[24] = Z
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
    let t = w(e.id);
    return t?.providerSlug === `gdrive` && t.kind === `root`
}

function z(e) {
    return {
        ...e,
        is_root: !1
    }
}
var B, V, H, U, W, G = e((() => {
    B = p(), t(), A(), r(), E(), S(), C(), _(), M(), j(), D(), P(), O(), f(), o(), u(), l(), V = s(), H = `/`, U = `...`, W = `tap-padding-auto text-token-text-tertiary hover:text-token-text-primary focus-visible:text-token-text-primary focus-visible:outline-token-border-heavy rounded-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2`
}));
export {
    G as n, I as t
};
//# sourceMappingURL=9a717608-dpggl2y169km1rop.js.map
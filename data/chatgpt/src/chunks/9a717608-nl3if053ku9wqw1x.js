import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    K5 as n,
    Qy as r,
    Zy as i,
    j5 as a,
    q5 as o
} from "./4813494d-mdvd4786a87166cc.js";
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
    DUt as g,
    K5t as _,
    LOt as v,
    MOt as y,
    MUn as b,
    U5t as x,
    Z5t as S,
    cRn as C,
    jUn as w,
    kUt as T,
    nen as E,
    rRn as D,
    s7t as O,
    sRn as k,
    ten as A,
    zLn as j
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    i as M,
    r as N
} from "./55904901-djadg0k20igv00dk.js";
import {
    n as P,
    t as F
} from "./02df22f1-lgaa397rk3neiqbf.js";

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
            variant: _
        } = e,
        v = _ === void 0 ? `default` : _,
        b = m(),
        C = v === `compact`,
        O = v === `google-drive-preview`,
        A = D(g?.id),
        j = l ?? (A?.kind === `root` && A.encodedAccountKey != null && A.providerSlug !== `gdrive` && T(A.providerSlug) ? g?.id : void 0),
        M;
    t[0] === j ? M = t[1] : (M = () => N(j ?? null), t[0] = j, t[1] = M);
    let P = a(M),
        I;
    t[2] === j ? I = t[3] : (I = () => h(j ?? null), t[2] = j, t[3] = I);
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
    if (t[8] !== r || t[9] !== q || t[10] !== o || t[11] !== s || t[12] !== b || t[13] !== C || t[14] !== O || t[15] !== l || t[16] !== u || t[17] !== f || t[18] !== p || t[19] !== j || t[20] !== g) {
        let e = r == null ? q.data : {
                items: r.map(z)
            },
            a = S({
                currentDirectoryId: e?.items.length ? j ?? null : null,
                directoryPath: e,
                intl: b
            }),
            c = a.find(R),
            m = D(l),
            h = m?.providerSlug === `gdrive` ? x(m.encodedAccountKey) : null,
            _ = g ?? (O ? c ?? {
                id: h ?? `external-gdrive:root`,
                name: b.formatMessage(E.googleDriveBreadcrumb)
            } : void 0),
            v = D(_?.id),
            A = v?.kind === `root` && v.encodedAccountKey != null && v.providerSlug !== `gdrive`,
            M = A && T(v.providerSlug),
            N = M ? a.find(e => e.id === _?.id) ?? _ : _,
            P = A && !M ? _?.id : void 0,
            I = N != null && !(M && a.some(e => e.id === N.id)) ? [a[0], N, ...a.slice(1).filter(e => e.id !== N.id)] : a,
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
        let $ = C ? u == null ? `gap-1` : `gap-1.25` : O ? `gap-2` : `gap-2.5`;
        t[25] === $ ? X = t[26] : (X = n(`flex min-w-0 items-center text-sm font-normal leading-[18px]`, $), t[25] = $, t[26] = X), Z = u, J = G.map((e, t) => {
            let r = t > 0 ? (0, V.jsx)(`span`, {
                className: `text-token-text-tertiary shrink-0`,
                "aria-hidden": `true`,
                children: H
            }) : null;
            if (e.type === `collapsed`) return (0, V.jsxs)(`span`, {
                className: `contents`,
                children: [r, (0, V.jsxs)(w.Root, {
                    children: [(0, V.jsx)(w.BasicTrigger, {
                        asChild: !0,
                        children: (0, V.jsx)(`button`, {
                            type: `button`,
                            "aria-label": b.formatMessage(E.openParentFolders),
                            className: n(W, `shrink-0`),
                            children: U
                        })
                    }), (0, V.jsx)(w.Portal, {
                        children: (0, V.jsx)(w.Content, {
                            align: `start`,
                            size: `medium`,
                            children: e.hiddenItems.map(e => {
                                let {
                                    item: t,
                                    itemIndex: n
                                } = e;
                                return t.id === P ? (0, V.jsx)(w.Item, {
                                    disabled: !0,
                                    children: t.name
                                }, `${t.id}-${n}`) : f == null ? (0, V.jsx)(w.LinkItem, {
                                    to: y(`/library`, t.id),
                                    onClick: p,
                                    children: t.name
                                }, `${t.id??`root`}-${n}`) : (0, V.jsx)(w.Item, {
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
                children: [r, c ? (0, V.jsx)(`span`, {
                    className: n(`text-token-text-primary min-w-0 truncate`, C && `flex-1`),
                    children: s ?? (0, V.jsx)(k, {
                        fileName: a.name,
                        legacy: a.name
                    })
                }) : l ? (0, V.jsx)(i, {
                    label: b.formatMessage(E.viewInLibrary),
                    children: (0, V.jsx)(d, {
                        "aria-label": a.name,
                        to: y(`/library`, a.id),
                        onClick: p,
                        className: n(W, `shrink-0`),
                        children: a.name
                    })
                }) : a.id === P ? (0, V.jsx)(`span`, {
                    className: `text-token-text-tertiary min-w-0 shrink truncate`,
                    children: a.name
                }) : f == null ? (0, V.jsx)(d, {
                    to: y(`/library`, a.id),
                    onClick: p,
                    className: n(W, C && !l ? `min-w-0 shrink truncate` : `shrink-0`),
                    children: a.name
                }) : (0, V.jsx)(`button`, {
                    type: `button`,
                    onClick: () => f(Q(o)),
                    className: n(W, C && !l ? `min-w-0 shrink truncate` : `shrink-0`),
                    children: a.name
                })]
            }, `${a.id??`root`}-${o}`)
        }), t[8] = r, t[9] = q, t[10] = o, t[11] = s, t[12] = b, t[13] = C, t[14] = O, t[15] = l, t[16] = u, t[17] = f, t[18] = p, t[19] = j, t[20] = g, t[21] = J, t[22] = Y, t[23] = X, t[24] = Z
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
    B = p(), t(), b(), r(), C(), A(), _(), j(), M(), v(), O(), P(), g(), f(), o(), u(), l(), V = s(), H = `/`, U = `...`, W = `tap-padding-auto text-token-text-tertiary hover:text-token-text-primary focus-visible:text-token-text-primary focus-visible:outline-token-border-heavy rounded-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2`
}));
export {
    G as n, I as t
};
//# sourceMappingURL=9a717608-nl3if053ku9wqw1x.js.map
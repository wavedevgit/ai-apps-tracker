import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as n,
    B6 as r,
    aD as i,
    aE as a,
    b5 as o,
    dz as s,
    fz as c,
    i5 as l,
    kT as u,
    o1 as d,
    oE as f,
    pnt as p,
    qE as m,
    u1 as h,
    y5 as g,
    ynt as _
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as v,
    Bn as y,
    Ln as b,
    Nn as x,
    Pt as ee,
    Rn as S,
    Ut as C,
    Vn as w,
    at as T,
    wn as E,
    zn as te
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Hfn as ne,
    Ufn as D,
    ai as O,
    c as re,
    egn as ie,
    ii as ae,
    s as oe,
    tgn as k
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Bp as A,
    Dh as se,
    Rg as ce,
    Th as le,
    Vp as ue,
    zg as de
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    d as fe,
    f as j,
    g as M,
    h as N,
    m as P,
    p as F
} from "./8e42e080-e9xbt0oihy2aeelq.js";
import {
    n as I,
    t as L
} from "./fa6172b9-brmj21hglvqzfeo3.js";

function R() {
    "use forget";
    let e = (0, V.c)(31),
        t = d(),
        n = ee(),
        r = t?.isWorkspaceAccount(),
        i = l(z),
        [a, o] = (0, H.useState)(`mine`),
        s;
    e[0] === n ? s = e[1] : (s = {
        newChatAction: e => {
            ne(e, {
                location: `Keyboard command`
            }), e.defaultPrevented || k(n)
        }
    }, e[0] = n, e[1] = s), de(s);
    let c = te();
    if (t == null) return null;
    let u;
    e[2] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, U.jsx)(x, {
        id: `1pqG1A`,
        defaultMessage: `Created by me`
    }), e[2] = u) : u = e[2];
    let f = u,
        p;
    e[3] === Symbol.for(`react.memo_cache_sentinel`) ? (p = (0, U.jsx)(x, {
        id: `2oQjZs`,
        defaultMessage: `Shared with me`
    }), e[3] = p) : p = e[3];
    let m = p,
        h = i ? `px-5 pt-10` : `px-4`,
        _;
    e[4] === h ? _ = e[5] : (_ = g(`mx-auto max-w-3xl pb-12`, h), e[4] = h, e[5] = _);
    let v;
    e[6] === i ? v = e[7] : (v = i && (0, U.jsx)(N, {
        className: `mb-10`,
        showMigrationAction: !1
    }), e[6] = i, e[7] = v);
    let y = i ? `mb-6 text-2xl/7` : `mb-8 text-xl md:text-2xl`,
        b;
    e[8] === y ? b = e[9] : (b = g(`font-semibold`, y), e[8] = y, e[9] = b);
    let S;
    e[10] === Symbol.for(`react.memo_cache_sentinel`) ? (S = (0, U.jsx)(x, {
        id: `dgQTc/`,
        defaultMessage: `My GPTs`
    }), e[10] = S) : S = e[10];
    let C;
    e[11] === b ? C = e[12] : (C = (0, U.jsx)(`h1`, {
        className: b,
        children: S
    }), e[11] = b, e[12] = C);
    let w;
    e[13] !== r || e[14] !== a ? (w = r && (a === `mine` ? (0, U.jsxs)(`div`, {
        className: `mb-4 flex flex-row space-x-4`,
        children: [(0, U.jsx)(G, {
            children: f
        }), (0, U.jsx)(K, {
            onClick: () => o(`shared_with_me`),
            children: m
        })]
    }) : (0, U.jsxs)(`div`, {
        className: `mb-4 flex flex-row space-x-4`,
        children: [(0, U.jsx)(K, {
            onClick: () => o(`mine`),
            children: f
        }), (0, U.jsx)(G, {
            children: m
        })]
    })), e[13] = r, e[14] = a, e[15] = w) : w = e[15];
    let T;
    e[16] === a ? T = e[17] : (T = a === `mine` && (0, U.jsx)(fe, {
        type: j.Enabled
    }), e[16] = a, e[17] = T);
    let E;
    e[18] !== c || e[19] !== a ? (E = a === `shared_with_me` ? c.formatMessage({
        id: `zG4NW2`,
        defaultMessage: `No GPTs have been shared with you yet`
    }) : void 0, e[18] = c, e[19] = a, e[20] = E) : E = e[20];
    let D;
    e[21] !== a || e[22] !== E ? (D = (0, U.jsx)(B, {
        emptyMessage: E,
        cutId: a
    }, a), e[21] = a, e[22] = E, e[23] = D) : D = e[23];
    let O;
    return e[24] !== w || e[25] !== T || e[26] !== D || e[27] !== _ || e[28] !== v || e[29] !== C ? (O = (0, U.jsx)(`div`, {
        className: `relative`,
        children: (0, U.jsxs)(`div`, {
            className: _,
            children: [v, C, w, T, D]
        })
    }), e[24] = w, e[25] = T, e[26] = D, e[27] = _, e[28] = v, e[29] = C, e[30] = O) : O = e[30], O
}

function z() {
    return p(`2160578039`)
}

function B(e) {
    "use forget";
    let t = (0, V.c)(22),
        {
            cutId: n,
            emptyMessage: r
        } = e,
        [a, o] = (0, H.useState)(!0),
        c;
    t[0] !== n || t[1] !== a ? (c = {
        cutId: n,
        limit: W,
        enabled: a
    }, t[0] = n, t[1] = a, t[2] = c) : c = t[2];
    let {
        data: l,
        hasNextPage: d,
        fetchNextPage: f,
        isLoading: p
    } = i(c), m, h;
    if (t[3] !== l || t[4] !== r || t[5] !== d || t[6] !== p) {
        h = Symbol.for(`react.early_return_sentinel`);
        bb0: {
            let e = l?.pages.flatMap(me);
            if (p && l == null) {
                let e;
                t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, U.jsx)(`div`, {
                    className: `my-8 flex justify-center`,
                    children: (0, U.jsx)(s, {})
                }), t[9] = e) : e = t[9], h = e;
                break bb0
            }
            if (!p && l?.pages?.[0].list.items.length === 0 && !d) {
                let e;
                t[10] === r ? e = t[11] : (e = (0, U.jsx)(`span`, {
                    children: r
                }), t[10] = r, t[11] = e), h = e;
                break bb0
            }
            m = e?.map(pe)
        }
        t[3] = l, t[4] = r, t[5] = d, t[6] = p, t[7] = m, t[8] = h
    } else m = t[7], h = t[8];
    if (h !== Symbol.for(`react.early_return_sentinel`)) return h;
    let g;
    t[12] === m ? g = t[13] : (g = (0, U.jsx)(`div`, {
        children: m
    }), t[12] = m, t[13] = g);
    let _;
    t[14] !== a || t[15] !== f || t[16] !== d || t[17] !== p ? (_ = !a || d || p ? (0, U.jsx)(u, {
        color: `secondary`,
        onClick: () => {
            a ? f() : o(!0)
        },
        loading: p,
        fullWidth: !0,
        children: (0, U.jsx)(x, {
            ...q.discoveryLoadMore
        })
    }) : null, t[14] = a, t[15] = f, t[16] = d, t[17] = p, t[18] = _) : _ = t[18];
    let v;
    return t[19] !== g || t[20] !== _ ? (v = (0, U.jsxs)(`div`, {
        children: [g, _]
    }), t[19] = g, t[20] = _, t[21] = v) : v = t[21], v
}

function pe(e) {
    let {
        resource: t
    } = e;
    return (0, U.jsx)(F, {
        gizmoResource: t,
        showPluginMigration: !0,
        reloadDocument: !0
    }, t.gizmo.id)
}

function me(e) {
    return e.list.items
}
var V, H, U, W, G, K, q, he = e((() => {
    V = E(), n(), c(), ie(), D(), h(), M(), r(), ce(), _(), o(), H = t(w()), S(), v(), f(), m(), P(), U = y(), W = 20, G = a.div`border-b-2 border-b-token-text-primary pb-3`, K = a.div`cursor-pointer border-b-2 border-b-transparent pb-3 text-token-text-secondary`, q = b({
        discoveryLoadMore: {
            id: `gizmo.mygpts.loadMore`,
            defaultMessage: `Load more`
        }
    })
}));

function ge({
    children: e
}) {
    return d() == null ? null : (0, J.jsx)(`div`, {
        children: e
    })
}
var J, _e = e((() => {
        h(), J = y()
    })),
    Y, X, Z, Q, $, ve = e((() => {
        v(), Y = E(), he(), _e(), O(), I(), se(), ue(), h(), X = t(w()), S(), oe(), Z = y(), Q = () => (re(), null), $ = C(function() {
            "use forget";
            let e = (0, Y.c)(8),
                t, n;
            e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = d(), n = t?.hasPlusFeatures(), e[0] = t, e[1] = n) : (t = e[0], n = e[1]);
            let r = !!n,
                i, a;
            if (e[2] === Symbol.for(`react.memo_cache_sentinel`) ? (i = () => {
                    t != null && !r && window.location.replace(`/gpts`)
                }, a = [t, r], e[2] = i, e[3] = a) : (i = e[2], a = e[3]), (0, X.useEffect)(i, a), !r) return null;
            let o;
            e[4] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, Z.jsx)(ge, {
                children: (0, Z.jsx)(R, {})
            }), e[4] = o) : o = e[4];
            let s = o,
                c;
            e[5] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, Z.jsx)(A, {}), e[5] = c) : c = e[5];
            let l;
            e[6] === Symbol.for(`react.memo_cache_sentinel`) ? (l = (0, Z.jsx)(T, {
                className: `interactive-button interactive-button-secondary interactive-outline-secondary inline-flex h-9 shrink-0 items-center rounded-full px-3 text-sm leading-5 font-medium`,
                to: `/gpts`,
                reloadDocument: !0,
                children: (0, Z.jsx)(x, {
                    id: `gizmo.mygpts.allGpts`,
                    defaultMessage: `All GPTs`
                })
            }), e[6] = l) : l = e[6];
            let u;
            return e[7] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, Z.jsx)(L, {
                header: (0, Z.jsxs)(ae, {
                    children: [c, l, (0, Z.jsx)(`div`, {
                        className: `ms-auto`,
                        children: (0, Z.jsx)(le, {})
                    })]
                }),
                children: s
            }), e[7] = u) : u = e[7], u
        })
    }));
e((() => {
    ve()
}))();
export {
    Q as clientLoader, $ as
    default
};
//# sourceMappingURL=gpts.mine-iphmmtf8.js.map
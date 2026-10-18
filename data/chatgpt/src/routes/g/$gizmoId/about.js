import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Btt as n,
    Htt as r,
    VE as i,
    bV as a,
    lD as o,
    qE as s,
    xV as c
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as l,
    At as u,
    Bn as d,
    Nn as f,
    Rn as p,
    Rt as m,
    Ut as h,
    Vn as g,
    wn as _
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Ffn as v,
    Ifn as y,
    JYt as b,
    Xdn as x,
    Ydn as S,
    dSt as C,
    qYt as w,
    uSt as T
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    i as E,
    n as D,
    r as O
} from "./680ac424-bsx1e7bsj65hrunc.js";
import {
    i as k,
    r as A,
    t as j
} from "./a600b597-bag9mqk9d2z6v59q.js";
import {
    n as M,
    t as N
} from "./fa6172b9-brmj21hglvqzfeo3.js";

function P(e) {
    "use forget";
    let t = (0, F.c)(2),
        {
            disableReason: n,
            isFirstParty: r
        } = e,
        i = n === `workspaceDisallowsFedrampGizmo` ? S.fedrampIncompatibleGPTPlaceholder : r !== void 0 && r || n === `workspaceDisallowsOpenAIGizmo` ? S.openAIGPTsDisabledByWorkspacePlaceholder : S.disallowedByWorkspacePlaceholder,
        a;
    return t[0] === i ? a = t[1] : (a = (0, I.jsx)(T, {
        type: `danger`,
        children: (0, I.jsx)(f, {
            ...i
        })
    }), t[0] = i, t[1] = a), a
}
var F, I, L = e((() => {
    F = _(), C(), x(), p(), I = d()
}));

function R(e) {
    "use forget";
    let t = (0, B.c)(18),
        {
            gizmo: r,
            gizmoId: s,
            enableAnonChat: c,
            cmsSections: l,
            isAnonVisitor: u
        } = e,
        {
            data: d
        } = o(s),
        f = y(),
        [p, m] = (0, V.useState)(!0),
        h = (d ?? r)?.gizmo.tags,
        g;
    t[0] !== f || t[1] !== h ? (g = a(h, f), t[0] = f, t[1] = h, t[2] = g) : g = t[2];
    let _ = g;
    if (_ != null) {
        let e;
        return t[3] === _ ? e = t[4] : (e = (0, H.jsx)(z, {
            disableReason: _
        }), t[3] = _, t[4] = e), e
    }
    let v;
    t[5] !== s || t[6] !== d || t[7] !== p ? (v = d && p && (0, H.jsx)(j, {
        onClose: () => m(!1),
        gizmoId: s,
        creatorId: d.gizmo.author.user_id,
        children: (0, H.jsx)(A, {
            onClick: () => {
                n.logEvent(`Detail Click Chat`, {
                    gizmo_id: s
                }), m(!1), b(i(d))
            }
        })
    }), t[5] = s, t[6] = d, t[7] = p, t[8] = v) : v = t[8];
    let x;
    t[9] !== l || t[10] !== c || t[11] !== r || t[12] !== s || t[13] !== u ? (x = (0, H.jsx)(D, {
        gizmo: r,
        gizmoId: s,
        enableAnonChat: c,
        cmsSections: l,
        isAnonVisitor: u
    }, s), t[9] = l, t[10] = c, t[11] = r, t[12] = s, t[13] = u, t[14] = x) : x = t[14];
    let S;
    return t[15] !== v || t[16] !== x ? (S = (0, H.jsxs)(H.Fragment, {
        children: [v, x]
    }), t[15] = v, t[16] = x, t[17] = S) : S = t[17], S
}

function z(e) {
    "use forget";
    let t = (0, B.c)(2),
        {
            disableReason: n
        } = e,
        r;
    return t[0] === n ? r = t[1] : (r = (0, H.jsx)(N, {
        children: (0, H.jsx)(`div`, {
            className: `flex h-full w-full items-center justify-center px-4 py-10`,
            children: (0, H.jsx)(`div`, {
                className: `w-full max-w-xl`,
                children: (0, H.jsx)(P, {
                    disableReason: n
                })
            })
        })
    }), t[0] = n, t[1] = r), r
}
var B, V, H, U, W, G = e((() => {
    l(), B = _(), k(), s(), c(), M(), L(), v(), r(), w(), V = t(g()), E(), H = d(), U = t(g()), W = h(function() {
        "use forget";
        let e = (0, B.c)(5),
            t = u(),
            n = m().gizmoId;
        if (!n) {
            let t;
            return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = O(), e[0] = t) : t = e[0], t
        }
        if (!(`kind` in t) || t.kind !== `chat_page`) {
            let t;
            return e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (t = O(), e[1] = t) : t = e[1], t
        }
        let r;
        return e[2] !== n || e[3] !== t ? (r = (0, U.createElement)(R, {
            ...t,
            key: n,
            gizmoId: n
        }), e[2] = n, e[3] = t, e[4] = r) : r = e[4], r
    })
}));
e((() => {
    G()
}))();
export {
    W as
    default
};
//# sourceMappingURL=g._gizmoId.about-nr57pxmu.js.map
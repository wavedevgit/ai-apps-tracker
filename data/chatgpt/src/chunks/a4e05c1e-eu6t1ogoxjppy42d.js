import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    P5 as n,
    X5 as r,
    Y5 as i,
    g8 as a
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    Bn as o,
    Nn as s,
    Q as c,
    Rn as l,
    Vn as u,
    it as d,
    mt as f,
    wn as p,
    zn as m
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    ARt as h,
    FRt as g,
    IRt as _,
    I_t as v,
    MRt as y,
    ORt as b,
    T_t as x,
    jRt as S,
    kRt as C
} from "./conversation-small-nmt18uiom3b14vca.js";
import {
    wS as w,
    xS as T
} from "./c2675c8c-h5ybkhdzcoblzzdu.js";
import {
    S as E,
    x as D
} from "./82782bc9-g3liom11amtlr9kq.js";
import {
    F as O,
    rt as k,
    u as ee,
    yt as A
} from "./1c919af1-n3qwx9w7ipxrf1ap.js";
import {
    b as j,
    d as M,
    k as N,
    t as P
} from "./707eab0c-fwyop6b3ijt0i6j7.js";
import {
    t as F
} from "./a35abcd6-fl6iafxr1mqknzi0.js";
import {
    f as I,
    u as L
} from "./5579e947-mmd02rq7lp2xn8nm.js";
import {
    C as R,
    a as z,
    f as B,
    o as te,
    t as V,
    x as ne
} from "./4285e798-d12vw91yd8v2awo6.js";
import {
    G as H,
    W as U,
    a as re,
    c as ie,
    d as W,
    o as ae,
    s as oe,
    u as G
} from "./8e7d0a25-ep4dwm1n9g5w5jjr.js";
import {
    n as K,
    t as se
} from "./8e88ec39-ly2p52dkrwo6r0lt.js";
import {
    n as q,
    t as ce
} from "./36ecb4f8-f1kw5uyhui3xtabz.js";
import {
    t as le
} from "./a9fa9fda-hue807c8s8menlao.js";
import {
    n as J,
    t as ue
} from "./99af6606-i1f16hart63xeczv.js";
import {
    a as Y,
    o as de
} from "./5334be9f-oiklmqw4ben88qym.js";
var fe, pe, me, he, ge, _e, ve, X, ye = e((() => {
    fe = `EM7QRq_FileLinkText`, pe = `EM7QRq_FileNameInput`, me = `EM7QRq_FileRowButton`, he = `EM7QRq_FileRowContainer`, ge = `EM7QRq_FileRowInteractive`, _e = `EM7QRq_FileRowName`, ve = `EM7QRq_FileRowSurface`, X = {
        FileLinkText: fe,
        FileNameInput: pe,
        FileRowButton: me,
        FileRowContainer: he,
        FileRowInteractive: ge,
        FileRowName: _e,
        FileRowSurface: ve
    }
}));

function be(e) {
    return e.kind === `folder` ? B.FOLDER : B.FILE
}

function xe(e) {
    "use forget";
    let t = (0, Z.c)(17),
        {
            parentNodeId: n,
            siblings: r,
            skillId: i
        } = e,
        a = m(),
        o = re(n, i),
        [s, c] = (0, Q.useState)(null),
        l;
    t[0] !== o || t[1] !== r ? (l = async e => {
        if (o.isPending) return;
        let t = e.trim();
        if (t.length === 0 || r.some(e => e.name === t)) {
            L.set(!1);
            return
        }
        c(t), await o.mutateAsync(t), L.set(!1)
    }, t[0] = o, t[1] = r, t[2] = l) : l = t[2];
    let u = l;
    if (r.some(e => e.name === s)) return null;
    let d;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, $.jsx)(k, {
        className: `size-5 shrink-0`
    }), t[3] = d) : d = t[3];
    let f;
    t[4] === a ? f = t[5] : (f = a.formatMessage(_.newFolderNameInputLabel), t[4] = a, t[5] = f);
    let p;
    t[6] !== o.isPending || t[7] !== u || t[8] !== f ? (p = (0, $.jsxs)(`div`, {
        className: `text-token-text-primary flex items-center gap-2.5 border-b py-1.5 pe-10 text-sm`,
        children: [d, (0, $.jsx)(ke, {
            "aria-label": f,
            defaultValue: ``,
            onCancel: Ce,
            onSubmit: u,
            disabled: o.isPending
        })]
    }), t[6] = o.isPending, t[7] = u, t[8] = f, t[9] = p) : p = t[9];
    let h = !o.isPending,
        g;
    t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (g = (0, $.jsx)(A, {}), t[10] = g) : g = t[10];
    let v;
    t[11] !== o.isPending || t[12] !== h ? (v = (0, $.jsx)(`div`, {
        className: `absolute end-0 top-0 flex h-full w-7 items-center justify-center`,
        children: (0, $.jsx)(M, {
            type: `button`,
            size: `sm`,
            color: `secondary`,
            variant: `ghost`,
            onClick: Se,
            disabled: h,
            loading: o.isPending,
            uniform: !0,
            pill: !0,
            children: g
        })
    }), t[11] = o.isPending, t[12] = h, t[13] = v) : v = t[13];
    let y;
    return t[14] !== p || t[15] !== v ? (y = (0, $.jsxs)(`div`, {
        className: `relative`,
        children: [p, v]
    }), t[14] = p, t[15] = v, t[16] = y) : y = t[16], y
}

function Se(e) {
    return e.stopPropagation()
}

function Ce() {
    return L.set(!1)
}

function we(e) {
    "use forget";
    let t = (0, Z.c)(41),
        {
            node: n,
            skillId: r,
            onSelectNode: a,
            isReadonly: o,
            rootUrl: c
        } = e,
        l = o !== void 0 && o,
        u = m(),
        f = y(n.id) ? null : n.id,
        p = ae(n.id, r),
        g = oe(n.id, r),
        [b, x] = (0, Q.useState)(!1),
        [S, T] = (0, Q.useState)(Oe),
        E;
    t[0] === n ? E = t[1] : (E = C(n), t[0] = n, t[1] = E);
    let D = E,
        k;
    t[2] === n ? k = t[3] : (k = h(n), t[2] = n, t[3] = k);
    let j = k,
        N;
    if (t[4] !== S || t[5] !== n.clientMetadata?.uploadStatus || t[6] !== n.kind || t[7] !== n.updated_at) {
        let e = n.kind === `file` && n.clientMetadata?.uploadStatus === `uploaded` ? Date.parse(n.updated_at) : NaN;
        N = Number.isFinite(e) && S - e < Ne, t[4] = S, t[5] = n.clientMetadata?.uploadStatus, t[6] = n.kind, t[7] = n.updated_at, t[8] = N
    } else N = t[8];
    let P = N,
        F = p.isPending || g.isPending,
        I = j.indicator === `progress` ? j : null,
        L = !P && j.isInteractive && !p.isPending,
        R = f != null && L,
        B = j.indicator === `progress` || P,
        V;
    t[9] !== n || t[10] !== r ? (V = () => {
        z({
            actionType: te.FILE_OPEN,
            source: ne.FILES_DETAIL,
            file: {
                fileNodeId: n.id,
                parentFileNodeId: n.parent_node_id ?? void 0,
                fileKind: be(n)
            },
            ...r == null ? {} : {
                skill: {
                    skillId: r
                }
            }
        })
    }, t[9] = n, t[10] = r, t[11] = V) : V = t[11];
    let H = V,
        U;
    t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (U = () => {
        T(Date.now())
    }, t[12] = U) : U = t[12], w(U, P ? 100 : null);
    let re;
    t[13] !== n.name || t[14] !== g ? (re = async e => {
        if (g.isPending) return;
        let t = e.trim();
        if (t.length === 0 || t === n.name) {
            x(!1);
            return
        }
        await g.mutateAsync(t), x(!1)
    }, t[13] = n.name, t[14] = g, t[15] = re) : re = t[15];
    let ie = re,
        W;
    t[16] !== ie || t[17] !== u || t[18] !== b || t[19] !== H || t[20] !== n || t[21] !== a || t[22] !== g.isPending || t[23] !== c || t[24] !== R || t[25] !== D || t[26] !== j.isMuted ? (W = b ? (0, $.jsxs)(`div`, {
        className: `text-token-text-primary flex items-center gap-2.5 border-b py-1.5 pe-10 text-sm`,
        children: [(0, $.jsx)(Y, {
            node: n,
            className: `size-5 shrink-0`
        }), (0, $.jsx)(ke, {
            "aria-label": u.formatMessage(_.renameItemNameInputLabel),
            defaultValue: n.name,
            onCancel: () => x(!1),
            onSubmit: ie,
            disabled: g.isPending
        })]
    }) : R && a == null ? (0, $.jsxs)(d, {
        "data-assistant-focus": `file-row:${D}`,
        className: i(X.FileRowSurface, X.FileRowInteractive),
        "data-muted": j.isMuted ? `` : void 0,
        prefetch: `intent`,
        to: `${c}/${n.id}`,
        onClick: H,
        children: [(0, $.jsx)(Y, {
            node: n,
            className: `size-5 shrink-0`
        }), (0, $.jsx)(`span`, {
            className: X.FileLinkText,
            children: n.name
        })]
    }) : R && a != null ? (0, $.jsxs)(`button`, {
        "data-assistant-focus": `file-row:${D}`,
        className: i(X.FileRowSurface, X.FileRowInteractive),
        "data-muted": j.isMuted ? `` : void 0,
        onClick: () => {
            H(), a(n.id)
        },
        children: [(0, $.jsx)(Y, {
            node: n,
            className: `size-5 shrink-0`
        }), (0, $.jsx)(`span`, {
            className: X.FileLinkText,
            children: n.name
        })]
    }) : (0, $.jsxs)(`div`, {
        className: i(X.FileRowSurface, j.isMuted ? `text-token-text-tertiary opacity-70` : `text-token-text-primary`),
        children: [(0, $.jsx)(Y, {
            node: n,
            className: `size-5 shrink-0`
        }), (0, $.jsx)(`span`, {
            className: `flex-1`,
            children: n.name
        })]
    }), t[16] = ie, t[17] = u, t[18] = b, t[19] = H, t[20] = n, t[21] = a, t[22] = g.isPending, t[23] = c, t[24] = R, t[25] = D, t[26] = j.isMuted, t[27] = W) : W = t[27];
    let G;
    t[28] !== p || t[29] !== F || t[30] !== l || t[31] !== b || t[32] !== P || t[33] !== I || t[34] !== B ? (G = B ? (0, $.jsx)(Pe, {
        done: P,
        uploadVisualState: I
    }, `progress`) : !l && (0, $.jsxs)(J, {
        children: [(0, $.jsx)(J.Trigger, {
            children: (0, $.jsx)(M, {
                size: `sm`,
                color: `secondary`,
                variant: `ghost`,
                onClick: De,
                loading: F,
                disabled: b,
                uniform: !0,
                pill: !0,
                children: (0, $.jsx)(A, {})
            })
        }), (0, $.jsxs)(J.Content, {
            minWidth: `auto`,
            width: `auto`,
            align: `end`,
            children: [(0, $.jsxs)(J.Item, {
                onSelect: () => x(!0),
                onClick: Ee,
                children: [(0, $.jsx)(O, {
                    className: `size-4.5`
                }), (0, $.jsx)(s, {
                    ..._.renameLabel
                })]
            }), (0, $.jsxs)(J.Item, {
                className: `text-red-500`,
                color: `danger`,
                onSelect: () => p.mutate(),
                onClick: Te,
                children: [(0, $.jsx)(ee, {
                    className: `size-4.5`
                }), (0, $.jsx)(s, {
                    ...se.delete
                })]
            })]
        })]
    }, `actions`), t[28] = p, t[29] = F, t[30] = l, t[31] = b, t[32] = P, t[33] = I, t[34] = B, t[35] = G) : G = t[35];
    let K;
    t[36] === G ? K = t[37] : (K = (0, $.jsx)(v, {
        as: `div`,
        className: `absolute! end-0 top-0 bottom-0 w-7`,
        transitionClassName: `absolute inset-0 flex items-center justify-center`,
        children: G
    }), t[36] = G, t[37] = K);
    let q;
    return t[38] !== K || t[39] !== W ? (q = (0, $.jsxs)(`div`, {
        className: X.FileRowContainer,
        children: [W, K]
    }), t[38] = K, t[39] = W, t[40] = q) : q = t[40], q
}

function Te(e) {
    return e.stopPropagation()
}

function Ee(e) {
    return e.stopPropagation()
}

function De(e) {
    return e.stopPropagation()
}

function Oe() {
    return Date.now()
}

function ke(e) {
    "use forget";
    let t = (0, Z.c)(11),
        {
            "aria-label": n,
            defaultValue: r,
            onCancel: i,
            onSubmit: a,
            disabled: o
        } = e,
        s = (0, Q.useRef)(null),
        c = !o,
        l;
    t[0] === a ? l = t[1] : (l = e => {
        a(e.target.value)
    }, t[0] = a, t[1] = l);
    let u;
    t[2] === i ? u = t[3] : (u = e => {
        if (e.key === `Escape`) {
            e.preventDefault(), i();
            return
        }
        e.key === `Enter` && (e.preventDefault(), e.currentTarget.blur())
    }, t[2] = i, t[3] = u);
    let d;
    return t[4] !== n || t[5] !== r || t[6] !== o || t[7] !== c || t[8] !== l || t[9] !== u ? (d = (0, $.jsx)(q, {
        ref: s,
        "aria-label": n,
        defaultValue: r,
        autoSelect: c,
        onBlur: l,
        onKeyDown: u,
        className: X.FileNameInput,
        disabled: o,
        autoComplete: `off`,
        spellCheck: !1
    }), t[4] = n, t[5] = r, t[6] = o, t[7] = c, t[8] = l, t[9] = u, t[10] = d) : d = t[10], d
}

function Ae(e) {
    return !e.name.startsWith(`._`)
}

function je() {
    return Date.now()
}
var Z, Q, $, Me, Ne, Pe, Fe = e((() => {
    Z = p(), V(), G(), de(), K(), I(), a(), P(), F(), j(), ce(), ue(), x(), r(), Q = t(u()), D(), l(), c(), T(), U(), le(), g(), S(), ye(), $ = o(), Me = e => {
        "use forget";
        let t = (0, Z.c)(53),
            {
                queryNodeId: r,
                node: a,
                childNodes: o,
                rootUrl: c,
                skillId: l,
                isReadonly: u,
                onSelectNode: p
            } = e,
            m = u !== void 0 && u,
            g = n(L),
            {
                isPending: v
            } = W(),
            y = ie(r, l),
            b;
        t[0] === a ? b = t[1] : (b = h(a), t[0] = a, t[1] = b);
        let x = b,
            S = m || v || y.isPending || a.clientMetadata?.added === !0 || x.indicator === `progress`,
            C;
        t[2] === y ? C = t[3] : (C = e => {
            y.mutate({
                files: e,
                uploadSource: R.DRAG_AND_DROP
            })
        }, t[2] = y, t[3] = C);
        let w;
        t[4] !== S || t[5] !== C ? (w = {
            multiple: !0,
            noClick: !0,
            useFsAccessApi: !1,
            onDrop: C,
            disabled: S
        }, t[4] = S, t[5] = C, t[6] = w) : w = t[6];
        let T = E(w),
            D, O, k;
        if (t[7] !== a.recursive_parents || t[8] !== c) {
            let e = a.recursive_parents?.at(-1)?.id ?? null,
                n = a.recursive_parents?.length === 1;
            D = a.recursive_parents?.length === 0, O = n ? null : e, k = f(`${c}/:id?`, {
                id: O
            }), t[7] = a.recursive_parents, t[8] = c, t[9] = D, t[10] = O, t[11] = k
        } else D = t[9], O = t[10], k = t[11];
        let ee = k,
            A = !!l,
            j;
        t[12] === T ? j = t[13] : (j = T.getRootProps({
            "data-assistant-focus": `files-root`
        }), t[12] = T, t[13] = j);
        let M;
        t[14] === T ? M = t[15] : (M = T.getInputProps(), t[14] = T, t[15] = M);
        let N;
        t[16] === M ? N = t[17] : (N = (0, $.jsx)(`input`, {
            ...M
        }), t[16] = M, t[17] = N);
        let P;
        t[18] !== D || t[19] !== a || t[20] !== p || t[21] !== O || t[22] !== ee ? (P = !D && (0, $.jsx)(`div`, {
            className: X.FileRowContainer,
            children: p == null ? (0, $.jsxs)(d, {
                className: i(X.FileRowSurface, X.FileRowInteractive),
                to: ee,
                prefetch: `intent`,
                children: [(0, $.jsx)(Y, {
                    node: a,
                    className: `size-5`
                }), (0, $.jsx)(`span`, {
                    className: X.FileLinkText,
                    children: `..`
                })]
            }) : (0, $.jsxs)(`button`, {
                className: i(X.FileRowSurface, X.FileRowInteractive),
                onClick: () => p(O),
                children: [(0, $.jsx)(Y, {
                    node: a,
                    className: `size-5`
                }), (0, $.jsx)(`span`, {
                    className: X.FileLinkText,
                    children: `..`
                })]
            })
        }), t[18] = D, t[19] = a, t[20] = p, t[21] = O, t[22] = ee, t[23] = P) : P = t[23];
        let F;
        t[24] !== o || t[25] !== g || t[26] !== a.id || t[27] !== l ? (F = g && (0, $.jsx)(xe, {
            parentNodeId: a.id,
            siblings: o,
            skillId: l
        }), t[24] = o, t[25] = g, t[26] = a.id, t[27] = l, t[28] = F) : F = t[28];
        let I;
        t[29] !== o.length || t[30] !== g || t[31] !== m ? (I = !g && o.length === 0 && (0, $.jsx)(`div`, {
            className: `text-token-text-secondary border-b py-6 text-sm`,
            children: m ? (0, $.jsx)(s, {
                ..._.readonlyEmptyFilesDescription
            }) : (0, $.jsx)(s, {
                ..._.emptyFilesDescription
            })
        }), t[29] = o.length, t[30] = g, t[31] = m, t[32] = I) : I = t[32];
        let z;
        if (t[33] !== o || t[34] !== m || t[35] !== A || t[36] !== p || t[37] !== c || t[38] !== l) {
            let e;
            t[40] !== m || t[41] !== A || t[42] !== p || t[43] !== c || t[44] !== l ? (e = e => (0, $.jsx)(we, {
                node: e,
                skillId: l,
                onSelectNode: p,
                isReadonly: m || A && H(e),
                rootUrl: c
            }, e.clientMetadata?.id ?? e.id), t[40] = m, t[41] = A, t[42] = p, t[43] = c, t[44] = l, t[45] = e) : e = t[45], z = o.filter(Ae).map(e), t[33] = o, t[34] = m, t[35] = A, t[36] = p, t[37] = c, t[38] = l, t[39] = z
        } else z = t[39];
        let B;
        return t[46] !== F || t[47] !== I || t[48] !== z || t[49] !== j || t[50] !== N || t[51] !== P ? (B = (0, $.jsxs)(`div`, {
            ...j,
            children: [N, P, F, I, z]
        }), t[46] = F, t[47] = I, t[48] = z, t[49] = j, t[50] = N, t[51] = P, t[52] = B) : B = t[52], B
    }, Ne = 500, Pe = e => {
        "use forget";
        let t = (0, Z.c)(8),
            {
                done: n,
                uploadVisualState: r
            } = e,
            [i, a] = (0, Q.useState)(je),
            o = !n && r?.simulatedProgressRange != null,
            s;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (s = () => {
            a(Date.now())
        }, t[0] = s) : s = t[0], w(s, o ? 100 : null);
        let c;
        t[1] !== n || t[2] !== i || t[3] !== r ? (c = n || r == null ? void 0 : b({
            now: i,
            visualState: r
        }), t[1] = n, t[2] = i, t[3] = r, t[4] = c) : c = t[4];
        let l = c,
            u;
        return t[5] !== n || t[6] !== l ? (u = (0, $.jsx)(N, {
            done: n,
            progress: l,
            size: 20,
            trackActiveColor: `var(--text-primary)`,
            trackColor: `var(--alpha-15)`,
            className: `shrink-0`
        }), t[5] = n, t[6] = l, t[7] = u) : u = t[7], u
    }
}));
export {
    Fe as n, Me as t
};
//# sourceMappingURL=a4e05c1e-eu6t1ogoxjppy42d.js.map
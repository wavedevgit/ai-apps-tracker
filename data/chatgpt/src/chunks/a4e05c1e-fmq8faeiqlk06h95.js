import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J5 as n,
    M5 as r,
    m8 as i,
    q5 as a
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    $ as o,
    Bn as s,
    Hn as c,
    Pn as l,
    Tn as u,
    Vn as d,
    at as f,
    ht as p,
    zn as m
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    ARt as h,
    A_t as g,
    CRt as _,
    ERt as v,
    SRt as y,
    TRt as b,
    kRt as x,
    wRt as ee,
    y_t as S
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    aC as C,
    nC as w
} from "./c2675c8c-nxl2ic2ofk2vw70s.js";
import {
    S as T,
    x as E
} from "./82782bc9-jj605vonxg0iyc7p.js";
import {
    Mt as D,
    Xt as O,
    f as te,
    tt as k
} from "./1c919af1-md3slc2ht6it8c1k.js";
import {
    b as A,
    d as j,
    k as M,
    t as N
} from "./707eab0c-hquix1of0ixypvkq.js";
import {
    t as P
} from "./a35abcd6-kcua9d3wne9fesqf.js";
import {
    f as F,
    u as I
} from "./5579e947-c081u3twwehc9d6f.js";
import {
    C as L,
    a as R,
    f as z,
    o as ne,
    t as B,
    x as re
} from "./4285e798-fz6qvtcc03ci3y1q.js";
import {
    G as V,
    W as H,
    a as U,
    c as ie,
    d as W,
    o as ae,
    s as oe,
    u as G
} from "./8e7d0a25-c4oex49jr20n6c3r.js";
import {
    n as K,
    t as se
} from "./8e88ec39-e8ayg6urkotbwpkv.js";
import {
    n as q,
    t as ce
} from "./36ecb4f8-bkwzzk2piicn5d88.js";
import {
    t as le
} from "./a9fa9fda-h29un74yt44ueld7.js";
import {
    n as J,
    t as ue
} from "./99af6606-ome24evlktehl958.js";
import {
    a as Y,
    o as de
} from "./5334be9f-d06alxi343hy21r6.js";
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
    return e.kind === `folder` ? z.FOLDER : z.FILE
}

function xe(e) {
    "use forget";
    let t = (0, Z.c)(17),
        {
            parentNodeId: n,
            siblings: r,
            skillId: i
        } = e,
        a = s(),
        o = U(n, i),
        [c, l] = (0, Q.useState)(null),
        u;
    t[0] !== o || t[1] !== r ? (u = async e => {
        if (o.isPending) return;
        let t = e.trim();
        if (t.length === 0 || r.some(e => e.name === t)) {
            I.set(!1);
            return
        }
        l(t), await o.mutateAsync(t), I.set(!1)
    }, t[0] = o, t[1] = r, t[2] = u) : u = t[2];
    let d = u;
    if (r.some(e => e.name === c)) return null;
    let f;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (f = (0, $.jsx)(D, {
        className: `size-5 shrink-0`
    }), t[3] = f) : f = t[3];
    let p;
    t[4] === a ? p = t[5] : (p = a.formatMessage(h.newFolderNameInputLabel), t[4] = a, t[5] = p);
    let m;
    t[6] !== o.isPending || t[7] !== d || t[8] !== p ? (m = (0, $.jsxs)(`div`, {
        className: `text-token-text-primary flex items-center gap-2.5 border-b py-1.5 pe-10 text-sm`,
        children: [f, (0, $.jsx)(ke, {
            "aria-label": p,
            defaultValue: ``,
            onCancel: Ce,
            onSubmit: d,
            disabled: o.isPending
        })]
    }), t[6] = o.isPending, t[7] = d, t[8] = p, t[9] = m) : m = t[9];
    let g = !o.isPending,
        _;
    t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = (0, $.jsx)(O, {}), t[10] = _) : _ = t[10];
    let v;
    t[11] !== o.isPending || t[12] !== g ? (v = (0, $.jsx)(`div`, {
        className: `absolute end-0 top-0 flex h-full w-7 items-center justify-center`,
        children: (0, $.jsx)(j, {
            type: `button`,
            size: `sm`,
            color: `secondary`,
            variant: `ghost`,
            onClick: Se,
            disabled: g,
            loading: o.isPending,
            uniform: !0,
            pill: !0,
            children: _
        })
    }), t[11] = o.isPending, t[12] = g, t[13] = v) : v = t[13];
    let y;
    return t[14] !== m || t[15] !== v ? (y = (0, $.jsxs)(`div`, {
        className: `relative`,
        children: [m, v]
    }), t[14] = m, t[15] = v, t[16] = y) : y = t[16], y
}

function Se(e) {
    return e.stopPropagation()
}

function Ce() {
    return I.set(!1)
}

function we(e) {
    "use forget";
    let t = (0, Z.c)(41),
        {
            node: n,
            skillId: r,
            onSelectNode: i,
            isReadonly: o,
            rootUrl: c
        } = e,
        u = o !== void 0 && o,
        d = s(),
        p = v(n.id) ? null : n.id,
        m = ae(n.id, r),
        y = oe(n.id, r),
        [b, x] = (0, Q.useState)(!1),
        [S, w] = (0, Q.useState)(Oe),
        T;
    t[0] === n ? T = t[1] : (T = _(n), t[0] = n, t[1] = T);
    let E = T,
        D;
    t[2] === n ? D = t[3] : (D = ee(n), t[2] = n, t[3] = D);
    let A = D,
        M;
    if (t[4] !== S || t[5] !== n.clientMetadata?.uploadStatus || t[6] !== n.kind || t[7] !== n.updated_at) {
        let e = n.kind === `file` && n.clientMetadata?.uploadStatus === `uploaded` ? Date.parse(n.updated_at) : NaN;
        M = Number.isFinite(e) && S - e < Ne, t[4] = S, t[5] = n.clientMetadata?.uploadStatus, t[6] = n.kind, t[7] = n.updated_at, t[8] = M
    } else M = t[8];
    let N = M,
        P = m.isPending || y.isPending,
        F = A.indicator === `progress` ? A : null,
        I = !N && A.isInteractive && !m.isPending,
        L = p != null && I,
        z = A.indicator === `progress` || N,
        B;
    t[9] !== n || t[10] !== r ? (B = () => {
        R({
            actionType: ne.FILE_OPEN,
            source: re.FILES_DETAIL,
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
    }, t[9] = n, t[10] = r, t[11] = B) : B = t[11];
    let V = B,
        H;
    t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (H = () => {
        w(Date.now())
    }, t[12] = H) : H = t[12], C(H, N ? 100 : null);
    let U;
    t[13] !== n.name || t[14] !== y ? (U = async e => {
        if (y.isPending) return;
        let t = e.trim();
        if (t.length === 0 || t === n.name) {
            x(!1);
            return
        }
        await y.mutateAsync(t), x(!1)
    }, t[13] = n.name, t[14] = y, t[15] = U) : U = t[15];
    let ie = U,
        W;
    t[16] !== ie || t[17] !== d || t[18] !== b || t[19] !== V || t[20] !== n || t[21] !== i || t[22] !== y.isPending || t[23] !== c || t[24] !== L || t[25] !== E || t[26] !== A.isMuted ? (W = b ? (0, $.jsxs)(`div`, {
        className: `text-token-text-primary flex items-center gap-2.5 border-b py-1.5 pe-10 text-sm`,
        children: [(0, $.jsx)(Y, {
            node: n,
            className: `size-5 shrink-0`
        }), (0, $.jsx)(ke, {
            "aria-label": d.formatMessage(h.renameItemNameInputLabel),
            defaultValue: n.name,
            onCancel: () => x(!1),
            onSubmit: ie,
            disabled: y.isPending
        })]
    }) : L && i == null ? (0, $.jsxs)(f, {
        "data-assistant-focus": `file-row:${E}`,
        className: a(X.FileRowSurface, X.FileRowInteractive),
        "data-muted": A.isMuted ? `` : void 0,
        prefetch: `intent`,
        to: `${c}/${n.id}`,
        onClick: V,
        children: [(0, $.jsx)(Y, {
            node: n,
            className: `size-5 shrink-0`
        }), (0, $.jsx)(`span`, {
            className: X.FileLinkText,
            children: n.name
        })]
    }) : L && i != null ? (0, $.jsxs)(`button`, {
        "data-assistant-focus": `file-row:${E}`,
        className: a(X.FileRowSurface, X.FileRowInteractive),
        "data-muted": A.isMuted ? `` : void 0,
        onClick: () => {
            V(), i(n.id)
        },
        children: [(0, $.jsx)(Y, {
            node: n,
            className: `size-5 shrink-0`
        }), (0, $.jsx)(`span`, {
            className: X.FileLinkText,
            children: n.name
        })]
    }) : (0, $.jsxs)(`div`, {
        className: a(X.FileRowSurface, A.isMuted ? `text-token-text-tertiary opacity-70` : `text-token-text-primary`),
        children: [(0, $.jsx)(Y, {
            node: n,
            className: `size-5 shrink-0`
        }), (0, $.jsx)(`span`, {
            className: `flex-1`,
            children: n.name
        })]
    }), t[16] = ie, t[17] = d, t[18] = b, t[19] = V, t[20] = n, t[21] = i, t[22] = y.isPending, t[23] = c, t[24] = L, t[25] = E, t[26] = A.isMuted, t[27] = W) : W = t[27];
    let G;
    t[28] !== m || t[29] !== P || t[30] !== u || t[31] !== b || t[32] !== N || t[33] !== F || t[34] !== z ? (G = z ? (0, $.jsx)(Pe, {
        done: N,
        uploadVisualState: F
    }, `progress`) : !u && (0, $.jsxs)(J, {
        children: [(0, $.jsx)(J.Trigger, {
            children: (0, $.jsx)(j, {
                size: `sm`,
                color: `secondary`,
                variant: `ghost`,
                onClick: De,
                loading: P,
                disabled: b,
                uniform: !0,
                pill: !0,
                children: (0, $.jsx)(O, {})
            })
        }), (0, $.jsxs)(J.Content, {
            minWidth: `auto`,
            width: `auto`,
            align: `end`,
            children: [(0, $.jsxs)(J.Item, {
                onSelect: () => x(!0),
                onClick: Ee,
                children: [(0, $.jsx)(k, {
                    className: `size-4.5`
                }), (0, $.jsx)(l, {
                    ...h.renameLabel
                })]
            }), (0, $.jsxs)(J.Item, {
                className: `text-red-500`,
                color: `danger`,
                onSelect: () => m.mutate(),
                onClick: Te,
                children: [(0, $.jsx)(te, {
                    className: `size-4.5`
                }), (0, $.jsx)(l, {
                    ...se.delete
                })]
            })]
        })]
    }, `actions`), t[28] = m, t[29] = P, t[30] = u, t[31] = b, t[32] = N, t[33] = F, t[34] = z, t[35] = G) : G = t[35];
    let K;
    t[36] === G ? K = t[37] : (K = (0, $.jsx)(g, {
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
    Z = u(), B(), G(), de(), K(), F(), i(), N(), P(), A(), ce(), ue(), S(), n(), Q = t(c()), E(), m(), o(), w(), H(), le(), x(), b(), ye(), $ = d(), Me = e => {
        "use forget";
        let t = (0, Z.c)(53),
            {
                queryNodeId: n,
                node: i,
                childNodes: o,
                rootUrl: s,
                skillId: c,
                isReadonly: u,
                onSelectNode: d
            } = e,
            m = u !== void 0 && u,
            g = r(I),
            {
                isPending: _
            } = W(),
            v = ie(n, c),
            y;
        t[0] === i ? y = t[1] : (y = ee(i), t[0] = i, t[1] = y);
        let b = y,
            x = m || _ || v.isPending || i.clientMetadata?.added === !0 || b.indicator === `progress`,
            S;
        t[2] === v ? S = t[3] : (S = e => {
            v.mutate({
                files: e,
                uploadSource: L.DRAG_AND_DROP
            })
        }, t[2] = v, t[3] = S);
        let C;
        t[4] !== x || t[5] !== S ? (C = {
            multiple: !0,
            noClick: !0,
            useFsAccessApi: !1,
            onDrop: S,
            disabled: x
        }, t[4] = x, t[5] = S, t[6] = C) : C = t[6];
        let w = T(C),
            E, D, O;
        if (t[7] !== i.recursive_parents || t[8] !== s) {
            let e = i.recursive_parents?.at(-1)?.id ?? null,
                n = i.recursive_parents?.length === 1;
            E = i.recursive_parents?.length === 0, D = n ? null : e, O = p(`${s}/:id?`, {
                id: D
            }), t[7] = i.recursive_parents, t[8] = s, t[9] = E, t[10] = D, t[11] = O
        } else E = t[9], D = t[10], O = t[11];
        let te = O,
            k = !!c,
            A;
        t[12] === w ? A = t[13] : (A = w.getRootProps({
            "data-assistant-focus": `files-root`
        }), t[12] = w, t[13] = A);
        let j;
        t[14] === w ? j = t[15] : (j = w.getInputProps(), t[14] = w, t[15] = j);
        let M;
        t[16] === j ? M = t[17] : (M = (0, $.jsx)(`input`, {
            ...j
        }), t[16] = j, t[17] = M);
        let N;
        t[18] !== E || t[19] !== i || t[20] !== d || t[21] !== D || t[22] !== te ? (N = !E && (0, $.jsx)(`div`, {
            className: X.FileRowContainer,
            children: d == null ? (0, $.jsxs)(f, {
                className: a(X.FileRowSurface, X.FileRowInteractive),
                to: te,
                prefetch: `intent`,
                children: [(0, $.jsx)(Y, {
                    node: i,
                    className: `size-5`
                }), (0, $.jsx)(`span`, {
                    className: X.FileLinkText,
                    children: `..`
                })]
            }) : (0, $.jsxs)(`button`, {
                className: a(X.FileRowSurface, X.FileRowInteractive),
                onClick: () => d(D),
                children: [(0, $.jsx)(Y, {
                    node: i,
                    className: `size-5`
                }), (0, $.jsx)(`span`, {
                    className: X.FileLinkText,
                    children: `..`
                })]
            })
        }), t[18] = E, t[19] = i, t[20] = d, t[21] = D, t[22] = te, t[23] = N) : N = t[23];
        let P;
        t[24] !== o || t[25] !== g || t[26] !== i.id || t[27] !== c ? (P = g && (0, $.jsx)(xe, {
            parentNodeId: i.id,
            siblings: o,
            skillId: c
        }), t[24] = o, t[25] = g, t[26] = i.id, t[27] = c, t[28] = P) : P = t[28];
        let F;
        t[29] !== o.length || t[30] !== g || t[31] !== m ? (F = !g && o.length === 0 && (0, $.jsx)(`div`, {
            className: `text-token-text-secondary border-b py-6 text-sm`,
            children: m ? (0, $.jsx)(l, {
                ...h.readonlyEmptyFilesDescription
            }) : (0, $.jsx)(l, {
                ...h.emptyFilesDescription
            })
        }), t[29] = o.length, t[30] = g, t[31] = m, t[32] = F) : F = t[32];
        let R;
        if (t[33] !== o || t[34] !== m || t[35] !== k || t[36] !== d || t[37] !== s || t[38] !== c) {
            let e;
            t[40] !== m || t[41] !== k || t[42] !== d || t[43] !== s || t[44] !== c ? (e = e => (0, $.jsx)(we, {
                node: e,
                skillId: c,
                onSelectNode: d,
                isReadonly: m || k && V(e),
                rootUrl: s
            }, e.clientMetadata?.id ?? e.id), t[40] = m, t[41] = k, t[42] = d, t[43] = s, t[44] = c, t[45] = e) : e = t[45], R = o.filter(Ae).map(e), t[33] = o, t[34] = m, t[35] = k, t[36] = d, t[37] = s, t[38] = c, t[39] = R
        } else R = t[39];
        let z;
        return t[46] !== P || t[47] !== F || t[48] !== R || t[49] !== A || t[50] !== M || t[51] !== N ? (z = (0, $.jsxs)(`div`, {
            ...A,
            children: [M, N, P, F, R]
        }), t[46] = P, t[47] = F, t[48] = R, t[49] = A, t[50] = M, t[51] = N, t[52] = z) : z = t[52], z
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
        }, t[0] = s) : s = t[0], C(s, o ? 100 : null);
        let c;
        t[1] !== n || t[2] !== i || t[3] !== r ? (c = n || r == null ? void 0 : y({
            now: i,
            visualState: r
        }), t[1] = n, t[2] = i, t[3] = r, t[4] = c) : c = t[4];
        let l = c,
            u;
        return t[5] !== n || t[6] !== l ? (u = (0, $.jsx)(M, {
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
//# sourceMappingURL=a4e05c1e-fmq8faeiqlk06h95.js.map
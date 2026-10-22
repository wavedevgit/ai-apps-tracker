import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    c7 as n,
    k8 as r,
    l7 as i,
    q5 as a
} from "./4813494d-nxpmzchfjvwqts17.js";
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
    A_t as h,
    DRt as g,
    ERt as _,
    MRt as v,
    NRt as y,
    ORt as b,
    TRt as x,
    kRt as ee,
    y_t as S
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    SS as C,
    yS as w
} from "./c2675c8c-otyjprdiowg2v8hl.js";
import {
    S as T,
    x as E
} from "./82782bc9-ca5kcqz13rn6iprj.js";
import {
    N as D,
    _t as O,
    tt as k,
    u as A
} from "./1c919af1-l4n6ac3ef72w21fi.js";
import {
    b as j,
    d as M,
    k as N,
    t as P
} from "./707eab0c-ga79xj3x5cylmvgk.js";
import {
    t as F
} from "./a35abcd6-ckxh13c2nv3bytau.js";
import {
    f as I,
    u as te
} from "./5579e947-j6sqysbgee22gi32.js";
import {
    C as L,
    a as R,
    f as z,
    o as ne,
    t as B,
    x as re
} from "./4285e798-dp66nwf09gsij2gf.js";
import {
    G as V,
    W as H,
    a as U,
    c as ie,
    d as W,
    o as ae,
    s as oe,
    u as G
} from "./8e7d0a25-mxr3igm2xq2fndzb.js";
import {
    n as K,
    t as se
} from "./8e88ec39-ly2p52dkrwo6r0lt.js";
import {
    n as q,
    t as ce
} from "./36ecb4f8-lira3v29iqdqpkxr.js";
import {
    t as le
} from "./a9fa9fda-jd5mcg583izucfgi.js";
import {
    n as J,
    t as ue
} from "./99af6606-ijj2ujdtw6aat4n2.js";
import {
    a as Y,
    o as de
} from "./5334be9f-j7obwxmfs83reumf.js";
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
        a = m(),
        o = U(n, i),
        [s, c] = (0, Q.useState)(null),
        l;
    t[0] !== o || t[1] !== r ? (l = async e => {
        if (o.isPending) return;
        let t = e.trim();
        if (t.length === 0 || r.some(e => e.name === t)) {
            te.set(!1);
            return
        }
        c(t), await o.mutateAsync(t), te.set(!1)
    }, t[0] = o, t[1] = r, t[2] = l) : l = t[2];
    let u = l;
    if (r.some(e => e.name === s)) return null;
    let d;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, $.jsx)(k, {
        className: `size-5 shrink-0`
    }), t[3] = d) : d = t[3];
    let f;
    t[4] === a ? f = t[5] : (f = a.formatMessage(y.newFolderNameInputLabel), t[4] = a, t[5] = f);
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
    t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (g = (0, $.jsx)(O, {}), t[10] = g) : g = t[10];
    let _;
    t[11] !== o.isPending || t[12] !== h ? (_ = (0, $.jsx)(`div`, {
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
    }), t[11] = o.isPending, t[12] = h, t[13] = _) : _ = t[13];
    let v;
    return t[14] !== p || t[15] !== _ ? (v = (0, $.jsxs)(`div`, {
        className: `relative`,
        children: [p, _]
    }), t[14] = p, t[15] = _, t[16] = v) : v = t[16], v
}

function Se(e) {
    return e.stopPropagation()
}

function Ce() {
    return te.set(!1)
}

function we(e) {
    "use forget";
    let t = (0, Z.c)(41),
        {
            node: r,
            skillId: i,
            onSelectNode: a,
            isReadonly: o,
            rootUrl: c
        } = e,
        l = o !== void 0 && o,
        u = m(),
        f = ee(r.id) ? null : r.id,
        p = ae(r.id, i),
        v = oe(r.id, i),
        [b, x] = (0, Q.useState)(!1),
        [S, w] = (0, Q.useState)(Oe),
        T;
    t[0] === r ? T = t[1] : (T = _(r), t[0] = r, t[1] = T);
    let E = T,
        k;
    t[2] === r ? k = t[3] : (k = g(r), t[2] = r, t[3] = k);
    let j = k,
        N;
    if (t[4] !== S || t[5] !== r.clientMetadata?.uploadStatus || t[6] !== r.kind || t[7] !== r.updated_at) {
        let e = r.kind === `file` && r.clientMetadata?.uploadStatus === `uploaded` ? Date.parse(r.updated_at) : NaN;
        N = Number.isFinite(e) && S - e < Ne, t[4] = S, t[5] = r.clientMetadata?.uploadStatus, t[6] = r.kind, t[7] = r.updated_at, t[8] = N
    } else N = t[8];
    let P = N,
        F = p.isPending || v.isPending,
        I = j.indicator === `progress` ? j : null,
        te = !P && j.isInteractive && !p.isPending,
        L = f != null && te,
        z = j.indicator === `progress` || P,
        B;
    t[9] !== r || t[10] !== i ? (B = () => {
        R({
            actionType: ne.FILE_OPEN,
            source: re.FILES_DETAIL,
            file: {
                fileNodeId: r.id,
                parentFileNodeId: r.parent_node_id ?? void 0,
                fileKind: be(r)
            },
            ...i == null ? {} : {
                skill: {
                    skillId: i
                }
            }
        })
    }, t[9] = r, t[10] = i, t[11] = B) : B = t[11];
    let V = B,
        H;
    t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (H = () => {
        w(Date.now())
    }, t[12] = H) : H = t[12], C(H, P ? 100 : null);
    let U;
    t[13] !== r.name || t[14] !== v ? (U = async e => {
        if (v.isPending) return;
        let t = e.trim();
        if (t.length === 0 || t === r.name) {
            x(!1);
            return
        }
        await v.mutateAsync(t), x(!1)
    }, t[13] = r.name, t[14] = v, t[15] = U) : U = t[15];
    let ie = U,
        W;
    t[16] !== ie || t[17] !== u || t[18] !== b || t[19] !== V || t[20] !== r || t[21] !== a || t[22] !== v.isPending || t[23] !== c || t[24] !== L || t[25] !== E || t[26] !== j.isMuted ? (W = b ? (0, $.jsxs)(`div`, {
        className: `text-token-text-primary flex items-center gap-2.5 border-b py-1.5 pe-10 text-sm`,
        children: [(0, $.jsx)(Y, {
            node: r,
            className: `size-5 shrink-0`
        }), (0, $.jsx)(ke, {
            "aria-label": u.formatMessage(y.renameItemNameInputLabel),
            defaultValue: r.name,
            onCancel: () => x(!1),
            onSubmit: ie,
            disabled: v.isPending
        })]
    }) : L && a == null ? (0, $.jsxs)(d, {
        "data-assistant-focus": `file-row:${E}`,
        className: n(X.FileRowSurface, X.FileRowInteractive),
        "data-muted": j.isMuted ? `` : void 0,
        prefetch: `intent`,
        to: `${c}/${r.id}`,
        onClick: V,
        children: [(0, $.jsx)(Y, {
            node: r,
            className: `size-5 shrink-0`
        }), (0, $.jsx)(`span`, {
            className: X.FileLinkText,
            children: r.name
        })]
    }) : L && a != null ? (0, $.jsxs)(`button`, {
        "data-assistant-focus": `file-row:${E}`,
        className: n(X.FileRowSurface, X.FileRowInteractive),
        "data-muted": j.isMuted ? `` : void 0,
        onClick: () => {
            V(), a(r.id)
        },
        children: [(0, $.jsx)(Y, {
            node: r,
            className: `size-5 shrink-0`
        }), (0, $.jsx)(`span`, {
            className: X.FileLinkText,
            children: r.name
        })]
    }) : (0, $.jsxs)(`div`, {
        className: n(X.FileRowSurface, j.isMuted ? `text-token-text-tertiary opacity-70` : `text-token-text-primary`),
        children: [(0, $.jsx)(Y, {
            node: r,
            className: `size-5 shrink-0`
        }), (0, $.jsx)(`span`, {
            className: `flex-1`,
            children: r.name
        })]
    }), t[16] = ie, t[17] = u, t[18] = b, t[19] = V, t[20] = r, t[21] = a, t[22] = v.isPending, t[23] = c, t[24] = L, t[25] = E, t[26] = j.isMuted, t[27] = W) : W = t[27];
    let G;
    t[28] !== p || t[29] !== F || t[30] !== l || t[31] !== b || t[32] !== P || t[33] !== I || t[34] !== z ? (G = z ? (0, $.jsx)(Pe, {
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
                children: (0, $.jsx)(O, {})
            })
        }), (0, $.jsxs)(J.Content, {
            minWidth: `auto`,
            width: `auto`,
            align: `end`,
            children: [(0, $.jsxs)(J.Item, {
                onSelect: () => x(!0),
                onClick: Ee,
                children: [(0, $.jsx)(D, {
                    className: `size-4.5`
                }), (0, $.jsx)(s, {
                    ...y.renameLabel
                })]
            }), (0, $.jsxs)(J.Item, {
                className: `text-red-500`,
                color: `danger`,
                onSelect: () => p.mutate(),
                onClick: Te,
                children: [(0, $.jsx)(A, {
                    className: `size-4.5`
                }), (0, $.jsx)(s, {
                    ...se.delete
                })]
            })]
        })]
    }, `actions`), t[28] = p, t[29] = F, t[30] = l, t[31] = b, t[32] = P, t[33] = I, t[34] = z, t[35] = G) : G = t[35];
    let K;
    t[36] === G ? K = t[37] : (K = (0, $.jsx)(h, {
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
    Z = p(), B(), G(), de(), K(), I(), r(), P(), F(), j(), ce(), ue(), S(), i(), Q = t(u()), E(), l(), c(), w(), H(), le(), v(), b(), ye(), $ = o(), Me = e => {
        "use forget";
        let t = (0, Z.c)(53),
            {
                queryNodeId: r,
                node: i,
                childNodes: o,
                rootUrl: c,
                skillId: l,
                isReadonly: u,
                onSelectNode: p
            } = e,
            m = u !== void 0 && u,
            h = a(te),
            {
                isPending: _
            } = W(),
            v = ie(r, l),
            b;
        t[0] === i ? b = t[1] : (b = g(i), t[0] = i, t[1] = b);
        let x = b,
            ee = m || _ || v.isPending || i.clientMetadata?.added === !0 || x.indicator === `progress`,
            S;
        t[2] === v ? S = t[3] : (S = e => {
            v.mutate({
                files: e,
                uploadSource: L.DRAG_AND_DROP
            })
        }, t[2] = v, t[3] = S);
        let C;
        t[4] !== ee || t[5] !== S ? (C = {
            multiple: !0,
            noClick: !0,
            useFsAccessApi: !1,
            onDrop: S,
            disabled: ee
        }, t[4] = ee, t[5] = S, t[6] = C) : C = t[6];
        let w = T(C),
            E, D, O;
        if (t[7] !== i.recursive_parents || t[8] !== c) {
            let e = i.recursive_parents?.at(-1)?.id ?? null,
                n = i.recursive_parents?.length === 1;
            E = i.recursive_parents?.length === 0, D = n ? null : e, O = f(`${c}/:id?`, {
                id: D
            }), t[7] = i.recursive_parents, t[8] = c, t[9] = E, t[10] = D, t[11] = O
        } else E = t[9], D = t[10], O = t[11];
        let k = O,
            A = !!l,
            j;
        t[12] === w ? j = t[13] : (j = w.getRootProps({
            "data-assistant-focus": `files-root`
        }), t[12] = w, t[13] = j);
        let M;
        t[14] === w ? M = t[15] : (M = w.getInputProps(), t[14] = w, t[15] = M);
        let N;
        t[16] === M ? N = t[17] : (N = (0, $.jsx)(`input`, {
            ...M
        }), t[16] = M, t[17] = N);
        let P;
        t[18] !== E || t[19] !== i || t[20] !== p || t[21] !== D || t[22] !== k ? (P = !E && (0, $.jsx)(`div`, {
            className: X.FileRowContainer,
            children: p == null ? (0, $.jsxs)(d, {
                className: n(X.FileRowSurface, X.FileRowInteractive),
                to: k,
                prefetch: `intent`,
                children: [(0, $.jsx)(Y, {
                    node: i,
                    className: `size-5`
                }), (0, $.jsx)(`span`, {
                    className: X.FileLinkText,
                    children: `..`
                })]
            }) : (0, $.jsxs)(`button`, {
                className: n(X.FileRowSurface, X.FileRowInteractive),
                onClick: () => p(D),
                children: [(0, $.jsx)(Y, {
                    node: i,
                    className: `size-5`
                }), (0, $.jsx)(`span`, {
                    className: X.FileLinkText,
                    children: `..`
                })]
            })
        }), t[18] = E, t[19] = i, t[20] = p, t[21] = D, t[22] = k, t[23] = P) : P = t[23];
        let F;
        t[24] !== o || t[25] !== h || t[26] !== i.id || t[27] !== l ? (F = h && (0, $.jsx)(xe, {
            parentNodeId: i.id,
            siblings: o,
            skillId: l
        }), t[24] = o, t[25] = h, t[26] = i.id, t[27] = l, t[28] = F) : F = t[28];
        let I;
        t[29] !== o.length || t[30] !== h || t[31] !== m ? (I = !h && o.length === 0 && (0, $.jsx)(`div`, {
            className: `text-token-text-secondary border-b py-6 text-sm`,
            children: m ? (0, $.jsx)(s, {
                ...y.readonlyEmptyFilesDescription
            }) : (0, $.jsx)(s, {
                ...y.emptyFilesDescription
            })
        }), t[29] = o.length, t[30] = h, t[31] = m, t[32] = I) : I = t[32];
        let R;
        if (t[33] !== o || t[34] !== m || t[35] !== A || t[36] !== p || t[37] !== c || t[38] !== l) {
            let e;
            t[40] !== m || t[41] !== A || t[42] !== p || t[43] !== c || t[44] !== l ? (e = e => (0, $.jsx)(we, {
                node: e,
                skillId: l,
                onSelectNode: p,
                isReadonly: m || A && V(e),
                rootUrl: c
            }, e.clientMetadata?.id ?? e.id), t[40] = m, t[41] = A, t[42] = p, t[43] = c, t[44] = l, t[45] = e) : e = t[45], R = o.filter(Ae).map(e), t[33] = o, t[34] = m, t[35] = A, t[36] = p, t[37] = c, t[38] = l, t[39] = R
        } else R = t[39];
        let z;
        return t[46] !== F || t[47] !== I || t[48] !== R || t[49] !== j || t[50] !== N || t[51] !== P ? (z = (0, $.jsxs)(`div`, {
            ...j,
            children: [N, P, F, I, R]
        }), t[46] = F, t[47] = I, t[48] = R, t[49] = j, t[50] = N, t[51] = P, t[52] = z) : z = t[52], z
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
        t[1] !== n || t[2] !== i || t[3] !== r ? (c = n || r == null ? void 0 : x({
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
//# sourceMappingURL=a4e05c1e-etxige2ji7v5n0ue.js.map
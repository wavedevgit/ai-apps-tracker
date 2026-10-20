import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Fw as n,
    J5 as r,
    M5 as i,
    Nw as a,
    Sw as o,
    m8 as s,
    q5 as c,
    ww as l
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as u,
    Hn as d,
    Pn as f,
    Tn as p,
    Vn as m,
    zn as h
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    G9t as g,
    K9t as _
} from "./conversation-small-cawdu7il3ha6y70c.js";

function v(e) {
    return e.startsWith(`.`)
}

function y(e, t) {
    if (t.length !== 0 && v(t)) return e.formatMessage(_.createFolderHiddenName)
}
var b = e((() => {
        g()
    })),
    x, S, C, w, T, E = e((() => {
        x = p(), n(), l(), g(), b(), s(), r(), S = t(d()), h(), C = m(), w = e => {
            "use forget";
            let t = (0, x.c)(61),
                {
                    name$: n,
                    isCreating$: r,
                    overlayClassName: s,
                    onClose: l,
                    onCreate: d
                } = e,
                p = u(),
                m = (0, S.useId)(),
                h = `${m}-error`,
                g;
            t[0] !== r || t[1] !== n ? (g = () => ({
                name: n(),
                isCreating: r()
            }), t[0] = r, t[1] = n, t[2] = g) : g = t[2];
            let {
                name: v,
                isCreating: b
            } = i(g), w;
            t[3] !== p || t[4] !== v ? (w = y(p, v.trim()), t[3] = p, t[4] = v, t[5] = w) : w = t[5];
            let T = w,
                E;
            t[6] !== T || t[7] !== b || t[8] !== v ? (E = b || v.trim().length === 0 || T != null, t[6] = T, t[7] = b, t[8] = v, t[9] = E) : E = t[9];
            let D = E,
                O;
            t[10] !== r || t[11] !== l ? (O = () => {
                r() || l()
            }, t[10] = r, t[11] = l, t[12] = O) : O = t[12];
            let k = O,
                A;
            t[13] === p ? A = t[14] : (A = p.formatMessage(_.newFolder), t[13] = p, t[14] = A);
            let j;
            t[15] !== p || t[16] !== b ? (j = p.formatMessage(b ? _.creatingFolder : _.createFolder), t[15] = p, t[16] = b, t[17] = j) : j = t[17];
            let M;
            t[18] === d ? M = t[19] : (M = () => {
                d()
            }, t[18] = d, t[19] = M);
            let N;
            t[20] !== D || t[21] !== b || t[22] !== j || t[23] !== M ? (N = (0, C.jsx)(a.Button, {
                title: j,
                color: `primary`,
                onClick: M,
                disabled: D,
                loading: b
            }), t[20] = D, t[21] = b, t[22] = j, t[23] = M, t[24] = N) : N = t[24];
            let P;
            t[25] === p ? P = t[26] : (P = p.formatMessage(_.cancelCreateFolder), t[25] = p, t[26] = P);
            let F;
            t[27] !== k || t[28] !== P ? (F = (0, C.jsx)(a.Button, {
                title: P,
                color: `secondary`,
                onClick: k
            }), t[27] = k, t[28] = P, t[29] = F) : F = t[29];
            let I;
            t[30] === Symbol.for(`react.memo_cache_sentinel`) ? (I = (0, C.jsx)(f, {
                ..._.folderNameLabel
            }), t[30] = I) : I = t[30];
            let L;
            t[31] === m ? L = t[32] : (L = (0, C.jsx)(`label`, {
                className: `text-token-text-primary mb-2 block text-sm`,
                htmlFor: m,
                children: I
            }), t[31] = m, t[32] = L);
            let R = T != null && `border-token-text-error focus:ring-token-text-error`,
                z;
            t[33] === R ? z = t[34] : (z = c(`border-token-border-light bg-token-bg-primary text-token-text-primary focus:ring-token-text-primary w-full rounded-full border px-4 py-2 text-sm outline-none focus:ring-1`, R), t[33] = R, t[34] = z);
            let B;
            t[35] === n ? B = t[36] : (B = e => {
                n.set(e.target.value)
            }, t[35] = n, t[36] = B);
            let V;
            t[37] !== D || t[38] !== d ? (V = e => {
                e.key !== `Enter` || e.nativeEvent.isComposing || D || (e.preventDefault(), d())
            }, t[37] = D, t[38] = d, t[39] = V) : V = t[39];
            let H = T != null || void 0,
                U = T == null ? void 0 : h,
                W;
            t[40] !== m || t[41] !== b || t[42] !== v || t[43] !== z || t[44] !== B || t[45] !== V || t[46] !== H || t[47] !== U ? (W = (0, C.jsx)(`input`, {
                id: m,
                name: `createFolderName`,
                type: `text`,
                value: v,
                className: z,
                onChange: B,
                onKeyDown: V,
                disabled: b,
                "aria-invalid": H,
                "aria-describedby": U,
                autoFocus: !0
            }), t[40] = m, t[41] = b, t[42] = v, t[43] = z, t[44] = B, t[45] = V, t[46] = H, t[47] = U, t[48] = W) : W = t[48];
            let G;
            t[49] !== h || t[50] !== T ? (G = T == null ? null : (0, C.jsx)(`p`, {
                id: h,
                className: `text-token-text-error mt-2 px-4 text-sm`,
                role: `alert`,
                children: T
            }), t[49] = h, t[50] = T, t[51] = G) : G = t[51];
            let K;
            return t[52] !== k || t[53] !== s || t[54] !== F || t[55] !== L || t[56] !== W || t[57] !== G || t[58] !== A || t[59] !== N ? (K = (0, C.jsxs)(o, {
                testId: `modal-confirm`,
                isOpen: !0,
                onClose: k,
                overlayClassName: s,
                title: A,
                primaryButton: N,
                secondaryButton: F,
                children: [L, W, G]
            }), t[52] = k, t[53] = s, t[54] = F, t[55] = L, t[56] = W, t[57] = G, t[58] = A, t[59] = N, t[60] = K) : K = t[60], K
        }, T = e => {
            "use forget";
            let t = (0, x.c)(58),
                {
                    directory: n,
                    name$: r,
                    renamingDirectoryId$: s,
                    onClose: l,
                    onRename: d
                } = e,
                p = u(),
                m = (0, S.useId)(),
                h = `${m}-error`,
                g;
            t[0] !== r || t[1] !== s ? (g = () => ({
                name: r(),
                renamingDirectoryId: s()
            }), t[0] = r, t[1] = s, t[2] = g) : g = t[2];
            let {
                name: v,
                renamingDirectoryId: b
            } = i(g), w;
            t[3] !== p || t[4] !== v ? (w = y(p, v.trim()), t[3] = p, t[4] = v, t[5] = w) : w = t[5];
            let T = w,
                E = b === n.id,
                D;
            t[6] !== n.name || t[7] !== T || t[8] !== E || t[9] !== v ? (D = E || v.trim().length === 0 || T != null || v.trim() === n.name, t[6] = n.name, t[7] = T, t[8] = E, t[9] = v, t[10] = D) : D = t[10];
            let O = D,
                k;
            t[11] !== n.id || t[12] !== l || t[13] !== s ? (k = () => {
                s() !== n.id && l()
            }, t[11] = n.id, t[12] = l, t[13] = s, t[14] = k) : k = t[14];
            let A = k,
                j;
            t[15] === p ? j = t[16] : (j = p.formatMessage(_.renameFolder), t[15] = p, t[16] = j);
            let M;
            t[17] !== p || t[18] !== E ? (M = p.formatMessage(E ? _.renamingFolder : _.renameFolderConfirm), t[17] = p, t[18] = E, t[19] = M) : M = t[19];
            let N;
            t[20] === d ? N = t[21] : (N = () => {
                d()
            }, t[20] = d, t[21] = N);
            let P;
            t[22] !== O || t[23] !== E || t[24] !== M || t[25] !== N ? (P = (0, C.jsx)(a.Button, {
                title: M,
                color: `primary`,
                onClick: N,
                disabled: O,
                loading: E
            }), t[22] = O, t[23] = E, t[24] = M, t[25] = N, t[26] = P) : P = t[26];
            let F;
            t[27] === p ? F = t[28] : (F = p.formatMessage(_.cancelCreateFolder), t[27] = p, t[28] = F);
            let I;
            t[29] !== A || t[30] !== F ? (I = (0, C.jsx)(a.Button, {
                title: F,
                color: `secondary`,
                onClick: A
            }), t[29] = A, t[30] = F, t[31] = I) : I = t[31];
            let L;
            t[32] === Symbol.for(`react.memo_cache_sentinel`) ? (L = (0, C.jsx)(f, {
                ..._.folderNameLabel
            }), t[32] = L) : L = t[32];
            let R;
            t[33] === m ? R = t[34] : (R = (0, C.jsx)(`label`, {
                className: `text-token-text-primary mb-2 block text-sm`,
                htmlFor: m,
                children: L
            }), t[33] = m, t[34] = R);
            let z = T != null && `border-token-text-error focus:ring-token-text-error`,
                B;
            t[35] === z ? B = t[36] : (B = c(`border-token-border-light bg-token-bg-primary text-token-text-primary focus:ring-token-text-primary w-full rounded-full border px-4 py-2 text-sm outline-none focus:ring-1`, z), t[35] = z, t[36] = B);
            let V;
            t[37] === r ? V = t[38] : (V = e => {
                r.set(e.target.value)
            }, t[37] = r, t[38] = V);
            let H = T != null || void 0,
                U = T == null ? void 0 : h,
                W;
            t[39] !== m || t[40] !== E || t[41] !== v || t[42] !== B || t[43] !== V || t[44] !== H || t[45] !== U ? (W = (0, C.jsx)(`input`, {
                id: m,
                name: `renameFolderName`,
                type: `text`,
                value: v,
                className: B,
                onChange: V,
                disabled: E,
                "aria-invalid": H,
                "aria-describedby": U,
                autoFocus: !0
            }), t[39] = m, t[40] = E, t[41] = v, t[42] = B, t[43] = V, t[44] = H, t[45] = U, t[46] = W) : W = t[46];
            let G;
            t[47] !== h || t[48] !== T ? (G = T == null ? null : (0, C.jsx)(`p`, {
                id: h,
                className: `text-token-text-error mt-2 px-4 text-sm`,
                role: `alert`,
                children: T
            }), t[47] = h, t[48] = T, t[49] = G) : G = t[49];
            let K;
            return t[50] !== A || t[51] !== I || t[52] !== R || t[53] !== W || t[54] !== G || t[55] !== j || t[56] !== P ? (K = (0, C.jsxs)(o, {
                testId: `modal-rename-folder`,
                isOpen: !0,
                onClose: A,
                title: j,
                primaryButton: P,
                secondaryButton: I,
                children: [R, W, G]
            }), t[50] = A, t[51] = I, t[52] = R, t[53] = W, t[54] = G, t[55] = j, t[56] = P, t[57] = K) : K = t[57], K
        }
    }));
export {
    v as a, y as i, T as n, b as o, E as r, w as t
};
//# sourceMappingURL=71279aa0-jytafdgkhe06o5ro.js.map
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Cw as n,
    Iw as r,
    P5 as i,
    Pw as a,
    Tw as o,
    X5 as s,
    Y5 as c,
    g8 as l
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    Bn as u,
    Nn as d,
    Rn as f,
    Vn as p,
    wn as m,
    zn as h
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    X9t as g,
    Y9t as _
} from "./conversation-small-kzsalymynzuddxee.js";

function v(e) {
    return e.startsWith(`.`)
}

function y(e, t) {
    if (t.length !== 0 && v(t)) return e.formatMessage(g.createFolderHiddenName)
}
var b = e((() => {
        _()
    })),
    x, S, C, w, T, E = e((() => {
        x = m(), r(), o(), _(), b(), l(), s(), S = t(p()), f(), C = u(), w = e => {
            "use forget";
            let t = (0, x.c)(61),
                {
                    name$: r,
                    isCreating$: o,
                    overlayClassName: s,
                    onClose: l,
                    onCreate: u
                } = e,
                f = h(),
                p = (0, S.useId)(),
                m = `${p}-error`,
                _;
            t[0] !== o || t[1] !== r ? (_ = () => ({
                name: r(),
                isCreating: o()
            }), t[0] = o, t[1] = r, t[2] = _) : _ = t[2];
            let {
                name: v,
                isCreating: b
            } = i(_), w;
            t[3] !== f || t[4] !== v ? (w = y(f, v.trim()), t[3] = f, t[4] = v, t[5] = w) : w = t[5];
            let T = w,
                E;
            t[6] !== T || t[7] !== b || t[8] !== v ? (E = b || v.trim().length === 0 || T != null, t[6] = T, t[7] = b, t[8] = v, t[9] = E) : E = t[9];
            let D = E,
                O;
            t[10] !== o || t[11] !== l ? (O = () => {
                o() || l()
            }, t[10] = o, t[11] = l, t[12] = O) : O = t[12];
            let k = O,
                A;
            t[13] === f ? A = t[14] : (A = f.formatMessage(g.newFolder), t[13] = f, t[14] = A);
            let j;
            t[15] !== f || t[16] !== b ? (j = f.formatMessage(b ? g.creatingFolder : g.createFolder), t[15] = f, t[16] = b, t[17] = j) : j = t[17];
            let M;
            t[18] === u ? M = t[19] : (M = () => {
                u()
            }, t[18] = u, t[19] = M);
            let N;
            t[20] !== D || t[21] !== b || t[22] !== j || t[23] !== M ? (N = (0, C.jsx)(a.Button, {
                title: j,
                color: `primary`,
                onClick: M,
                disabled: D,
                loading: b
            }), t[20] = D, t[21] = b, t[22] = j, t[23] = M, t[24] = N) : N = t[24];
            let P;
            t[25] === f ? P = t[26] : (P = f.formatMessage(g.cancelCreateFolder), t[25] = f, t[26] = P);
            let F;
            t[27] !== k || t[28] !== P ? (F = (0, C.jsx)(a.Button, {
                title: P,
                color: `secondary`,
                onClick: k
            }), t[27] = k, t[28] = P, t[29] = F) : F = t[29];
            let I;
            t[30] === Symbol.for(`react.memo_cache_sentinel`) ? (I = (0, C.jsx)(d, {
                ...g.folderNameLabel
            }), t[30] = I) : I = t[30];
            let L;
            t[31] === p ? L = t[32] : (L = (0, C.jsx)(`label`, {
                className: `text-token-text-primary mb-2 block text-sm`,
                htmlFor: p,
                children: I
            }), t[31] = p, t[32] = L);
            let R = T != null && `border-token-text-error focus:ring-token-text-error`,
                z;
            t[33] === R ? z = t[34] : (z = c(`border-token-border-light bg-token-bg-primary text-token-text-primary focus:ring-token-text-primary w-full rounded-full border px-4 py-2 text-sm outline-none focus:ring-1`, R), t[33] = R, t[34] = z);
            let B;
            t[35] === r ? B = t[36] : (B = e => {
                r.set(e.target.value)
            }, t[35] = r, t[36] = B);
            let V;
            t[37] !== D || t[38] !== u ? (V = e => {
                e.key !== `Enter` || e.nativeEvent.isComposing || D || (e.preventDefault(), u())
            }, t[37] = D, t[38] = u, t[39] = V) : V = t[39];
            let H = T != null || void 0,
                U = T == null ? void 0 : m,
                W;
            t[40] !== p || t[41] !== b || t[42] !== v || t[43] !== z || t[44] !== B || t[45] !== V || t[46] !== H || t[47] !== U ? (W = (0, C.jsx)(`input`, {
                id: p,
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
            }), t[40] = p, t[41] = b, t[42] = v, t[43] = z, t[44] = B, t[45] = V, t[46] = H, t[47] = U, t[48] = W) : W = t[48];
            let G;
            t[49] !== m || t[50] !== T ? (G = T == null ? null : (0, C.jsx)(`p`, {
                id: m,
                className: `text-token-text-error mt-2 px-4 text-sm`,
                role: `alert`,
                children: T
            }), t[49] = m, t[50] = T, t[51] = G) : G = t[51];
            let K;
            return t[52] !== k || t[53] !== s || t[54] !== F || t[55] !== L || t[56] !== W || t[57] !== G || t[58] !== A || t[59] !== N ? (K = (0, C.jsxs)(n, {
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
                    directory: r,
                    name$: o,
                    renamingDirectoryId$: s,
                    onClose: l,
                    onRename: u
                } = e,
                f = h(),
                p = (0, S.useId)(),
                m = `${p}-error`,
                _;
            t[0] !== o || t[1] !== s ? (_ = () => ({
                name: o(),
                renamingDirectoryId: s()
            }), t[0] = o, t[1] = s, t[2] = _) : _ = t[2];
            let {
                name: v,
                renamingDirectoryId: b
            } = i(_), w;
            t[3] !== f || t[4] !== v ? (w = y(f, v.trim()), t[3] = f, t[4] = v, t[5] = w) : w = t[5];
            let T = w,
                E = b === r.id,
                D;
            t[6] !== r.name || t[7] !== T || t[8] !== E || t[9] !== v ? (D = E || v.trim().length === 0 || T != null || v.trim() === r.name, t[6] = r.name, t[7] = T, t[8] = E, t[9] = v, t[10] = D) : D = t[10];
            let O = D,
                k;
            t[11] !== r.id || t[12] !== l || t[13] !== s ? (k = () => {
                s() !== r.id && l()
            }, t[11] = r.id, t[12] = l, t[13] = s, t[14] = k) : k = t[14];
            let A = k,
                j;
            t[15] === f ? j = t[16] : (j = f.formatMessage(g.renameFolder), t[15] = f, t[16] = j);
            let M;
            t[17] !== f || t[18] !== E ? (M = f.formatMessage(E ? g.renamingFolder : g.renameFolderConfirm), t[17] = f, t[18] = E, t[19] = M) : M = t[19];
            let N;
            t[20] === u ? N = t[21] : (N = () => {
                u()
            }, t[20] = u, t[21] = N);
            let P;
            t[22] !== O || t[23] !== E || t[24] !== M || t[25] !== N ? (P = (0, C.jsx)(a.Button, {
                title: M,
                color: `primary`,
                onClick: N,
                disabled: O,
                loading: E
            }), t[22] = O, t[23] = E, t[24] = M, t[25] = N, t[26] = P) : P = t[26];
            let F;
            t[27] === f ? F = t[28] : (F = f.formatMessage(g.cancelCreateFolder), t[27] = f, t[28] = F);
            let I;
            t[29] !== A || t[30] !== F ? (I = (0, C.jsx)(a.Button, {
                title: F,
                color: `secondary`,
                onClick: A
            }), t[29] = A, t[30] = F, t[31] = I) : I = t[31];
            let L;
            t[32] === Symbol.for(`react.memo_cache_sentinel`) ? (L = (0, C.jsx)(d, {
                ...g.folderNameLabel
            }), t[32] = L) : L = t[32];
            let R;
            t[33] === p ? R = t[34] : (R = (0, C.jsx)(`label`, {
                className: `text-token-text-primary mb-2 block text-sm`,
                htmlFor: p,
                children: L
            }), t[33] = p, t[34] = R);
            let z = T != null && `border-token-text-error focus:ring-token-text-error`,
                B;
            t[35] === z ? B = t[36] : (B = c(`border-token-border-light bg-token-bg-primary text-token-text-primary focus:ring-token-text-primary w-full rounded-full border px-4 py-2 text-sm outline-none focus:ring-1`, z), t[35] = z, t[36] = B);
            let V;
            t[37] === o ? V = t[38] : (V = e => {
                o.set(e.target.value)
            }, t[37] = o, t[38] = V);
            let H = T != null || void 0,
                U = T == null ? void 0 : m,
                W;
            t[39] !== p || t[40] !== E || t[41] !== v || t[42] !== B || t[43] !== V || t[44] !== H || t[45] !== U ? (W = (0, C.jsx)(`input`, {
                id: p,
                name: `renameFolderName`,
                type: `text`,
                value: v,
                className: B,
                onChange: V,
                disabled: E,
                "aria-invalid": H,
                "aria-describedby": U,
                autoFocus: !0
            }), t[39] = p, t[40] = E, t[41] = v, t[42] = B, t[43] = V, t[44] = H, t[45] = U, t[46] = W) : W = t[46];
            let G;
            t[47] !== m || t[48] !== T ? (G = T == null ? null : (0, C.jsx)(`p`, {
                id: m,
                className: `text-token-text-error mt-2 px-4 text-sm`,
                role: `alert`,
                children: T
            }), t[47] = m, t[48] = T, t[49] = G) : G = t[49];
            let K;
            return t[50] !== A || t[51] !== I || t[52] !== R || t[53] !== W || t[54] !== G || t[55] !== j || t[56] !== P ? (K = (0, C.jsxs)(n, {
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
//# sourceMappingURL=71279aa0-neo6ed8jmgkjqum3.js.map
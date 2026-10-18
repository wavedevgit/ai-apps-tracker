import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Qit as t,
    cw as n,
    iat as r,
    iw as i,
    ow as a,
    sw as o
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as s,
    Ln as c,
    Nn as l,
    O as u,
    On as d,
    Rn as f,
    s as p,
    wn as m,
    zn as h
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    ACn as g,
    a$ as _,
    i$ as v,
    jCn as y
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    J_ as b,
    Y_ as x,
    Z_ as S,
    ev as C
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";

function w(e) {
    "use forget";
    let n = (0, O.c)(14),
        {
            pluginId: r,
            skillName: i,
            fallbackSkill: a,
            showReferences: o,
            onClose: s
        } = e,
        c = o !== void 0 && o,
        l = a && `id` in a ? a.id : void 0,
        d;
    n[0] !== r || n[1] !== i || n[2] !== l ? (d = g(r, i, l), n[0] = r, n[1] = i, n[2] = l, n[3] = d) : d = n[3];
    let f = u(d),
        p = f.error ?? f.failureReason,
        m;
    n[4] === p ? m = n[5] : (m = p instanceof t && [401, 403, 404].includes(p.status), n[4] = p, n[5] = m);
    let h = m,
        _ = h ? null : f.data,
        v = f.isError || h || !f.isLoading && !f.data,
        y;
    return n[6] !== a || n[7] !== s || n[8] !== c || n[9] !== f.isLoading || n[10] !== i || n[11] !== _ || n[12] !== v ? (y = (0, k.jsx)(T, {
        skillName: i,
        fallbackSkill: a,
        skillDetail: _,
        isLoading: f.isLoading,
        hasError: v,
        showReferences: c,
        onClose: s
    }), n[6] = a, n[7] = s, n[8] = c, n[9] = f.isLoading, n[10] = i, n[11] = _, n[12] = v, n[13] = y) : y = n[13], y
}

function T(e) {
    "use forget";
    let t = (0, O.c)(79),
        {
            skillName: n,
            fallbackSkill: r,
            skillDetail: a,
            isLoading: s,
            hasError: c,
            showReferences: u,
            onClose: f
        } = e,
        p = u !== void 0 && u,
        m = h(),
        g = a?.display_name ?? r?.name ?? a?.name ?? n,
        _ = a?.short_description ?? a?.description ?? r?.description ?? null,
        y = a?.icon_large_url ?? a?.icon_small_url ?? r?.iconUrl,
        x = r?.interface?.iconography ?? void 0,
        C;
    t[0] === x ? C = t[1] : (C = v(x), t[0] = x, t[1] = C);
    let w = C,
        T;
    t[2] === a ? T = t[3] : (T = a?.skill_md_contents ? S(a.skill_md_contents) : ``, t[2] = a, t[3] = T);
    let j = T,
        M, N, P, F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y;
    if (t[4] !== w || t[5] !== _ || t[6] !== c || t[7] !== y || t[8] !== m || t[9] !== s || t[10] !== f || t[11] !== j || t[12] !== p || t[13] !== a || t[14] !== g) {
        let e = p && !s ? a?.included_files.filter(D) ?? [] : [];
        M = i, N = !0, P = f, F = !1, I = !0, L = !0, R = `custom`, z = `flex h-[85vh]! max-h-[85vh] w-[min(720px,calc(100vw-64px))]! max-w-[calc(100vw-64px)]! flex-col`, B = `flex max-h-[85vh] min-h-0 flex-col`, V = !1, t[33] === m ? H = t[34] : (H = m.formatMessage(A.skillDetailsModalTitle), t[33] = m, t[34] = H), U = !0, W = `modal-plugin-skill-details`, J = `flex min-h-0 flex-1 flex-col`;
        let n;
        t[35] !== w || t[36] !== y ? (n = (0, k.jsx)(`div`, {
            className: `bg-token-bg-primary mb-3 flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-[10px] border border-black/10 dark:border-white/10`,
            children: y ? (0, k.jsx)(`img`, {
                src: y,
                alt: ``,
                "aria-hidden": `true`,
                className: `h-full w-full rounded-[6px] object-contain`
            }) : (0, k.jsx)(w, {
                className: `text-token-text-tertiary h-6 w-6`
            })
        }), t[35] = w, t[36] = y, t[37] = n) : n = t[37];
        let r;
        t[38] === g ? r = t[39] : (r = (0, k.jsx)(`h1`, {
            className: `text-token-text-primary text-2xl font-medium break-words sm:text-xl`,
            children: g
        }), t[38] = g, t[39] = r);
        let u;
        t[40] === _ ? u = t[41] : (u = _ ? (0, k.jsx)(`p`, {
            className: `text-token-text-secondary mt-1 text-sm leading-6`,
            children: _
        }) : null, t[40] = _, t[41] = u);
        let h;
        t[42] !== n || t[43] !== r || t[44] !== u ? (h = (0, k.jsxs)(`div`, {
            className: `min-w-0`,
            children: [n, r, u]
        }), t[42] = n, t[43] = r, t[44] = u, t[45] = h) : h = t[45];
        let v;
        t[46] === f ? v = t[47] : (v = (0, k.jsx)(o, {
            onClick: () => f(),
            className: `-me-2 -mt-1 aspect-square shrink-0`
        }), t[46] = f, t[47] = v), t[48] !== h || t[49] !== v ? (Y = (0, k.jsxs)(`div`, {
            className: `bg-token-bg-primary border-token-border-default flex shrink-0 items-start justify-between gap-3 border-b px-6 py-5 sm:px-5`,
            children: [h, v]
        }), t[48] = h, t[49] = v, t[50] = Y) : Y = t[50], G = `flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto px-6 py-6 sm:px-5`, t[51] !== c || t[52] !== s || t[53] !== j || t[54] !== a ? (K = s ? (0, k.jsx)(`div`, {
            className: `text-token-text-secondary text-base sm:text-sm`,
            children: (0, k.jsx)(l, {
                ...A.loadingSkillDetails
            })
        }) : c && !a ? (0, k.jsx)(`div`, {
            className: `text-token-text-secondary text-base sm:text-sm`,
            children: (0, k.jsx)(l, {
                ...A.skillDetailsUnavailable
            })
        }) : a ? (0, k.jsxs)(`section`, {
            children: [(0, k.jsx)(`h2`, {
                className: `text-token-text-primary text-base font-medium`,
                children: (0, k.jsx)(l, {
                    ...A.skillInstructionsHeading
                })
            }), j ? (0, k.jsx)(b, {
                markdown: j,
                className: `mt-3 max-w-none break-words`
            }) : (0, k.jsx)(`p`, {
                className: `text-token-text-secondary mt-3 text-sm leading-6`,
                children: (0, k.jsx)(l, {
                    ...A.noSkillInstructions
                })
            })]
        }) : null, t[51] = c, t[52] = s, t[53] = j, t[54] = a, t[55] = K) : K = t[55], q = e.length > 0 ? (0, k.jsxs)(`section`, {
            children: [(0, k.jsxs)(`h2`, {
                className: `text-token-text-primary border-token-border-default flex items-center gap-2 border-b pb-3 text-base font-medium`,
                children: [(0, k.jsx)(l, {
                    id: `chatgpt.plugins.skill_details.references.heading`,
                    defaultMessage: `References`
                }), (0, k.jsx)(`span`, {
                    className: `text-token-text-secondary font-normal`,
                    children: (0, k.jsx)(d, {
                        value: e.length
                    })
                })]
            }), (0, k.jsx)(`ul`, {
                className: `mt-3 space-y-2`,
                children: e.map(E)
            })]
        }) : null, t[4] = w, t[5] = _, t[6] = c, t[7] = y, t[8] = m, t[9] = s, t[10] = f, t[11] = j, t[12] = p, t[13] = a, t[14] = g, t[15] = M, t[16] = N, t[17] = P, t[18] = F, t[19] = I, t[20] = L, t[21] = R, t[22] = z, t[23] = B, t[24] = V, t[25] = H, t[26] = U, t[27] = W, t[28] = G, t[29] = K, t[30] = q, t[31] = J, t[32] = Y
    } else M = t[15], N = t[16], P = t[17], F = t[18], I = t[19], L = t[20], R = t[21], z = t[22], B = t[23], V = t[24], H = t[25], U = t[26], W = t[27], G = t[28], K = t[29], q = t[30], J = t[31], Y = t[32];
    let X;
    t[56] !== G || t[57] !== K || t[58] !== q ? (X = (0, k.jsxs)(`div`, {
        className: G,
        children: [K, q]
    }), t[56] = G, t[57] = K, t[58] = q, t[59] = X) : X = t[59];
    let Z;
    t[60] !== X || t[61] !== J || t[62] !== Y ? (Z = (0, k.jsxs)(`div`, {
        className: J,
        children: [Y, X]
    }), t[60] = X, t[61] = J, t[62] = Y, t[63] = Z) : Z = t[63];
    let Q;
    return t[64] !== M || t[65] !== N || t[66] !== P || t[67] !== F || t[68] !== I || t[69] !== L || t[70] !== R || t[71] !== z || t[72] !== B || t[73] !== V || t[74] !== H || t[75] !== U || t[76] !== W || t[77] !== Z ? (Q = (0, k.jsx)(M, {
        isOpen: N,
        onClose: P,
        showCloseButton: F,
        noPadding: I,
        hideSeparator: L,
        size: R,
        className: z,
        contentClassName: B,
        isScrollable: V,
        title: H,
        visuallyHiddenHeader: U,
        testId: W,
        children: Z
    }), t[64] = M, t[65] = N, t[66] = P, t[67] = F, t[68] = I, t[69] = L, t[70] = R, t[71] = z, t[72] = B, t[73] = V, t[74] = H, t[75] = U, t[76] = W, t[77] = Z, t[78] = Q) : Q = t[78], Q
}

function E(e) {
    return (0, k.jsx)(`li`, {
        className: `text-token-text-primary font-mono text-sm [overflow-wrap:anywhere]`,
        children: e.relative_path.slice(11)
    }, e.relative_path)
}

function D(e) {
    return e.relative_path.startsWith(`references/`)
}
var O, k, A, j = e((() => {
    O = m(), n(), a(), C(), _(), x(), y(), r(), p(), f(), k = s(), A = c({
        skillDetailsModalTitle: {
            id: `bb0BQK`,
            defaultMessage: `Plugin skill details`
        },
        loadingSkillDetails: {
            id: `FhYE8P`,
            defaultMessage: `Loading skill details...`
        },
        skillDetailsUnavailable: {
            id: `l669QV`,
            defaultMessage: `Unable to load skill details right now.`
        },
        skillInstructionsHeading: {
            id: `lUTGui`,
            defaultMessage: `Instructions`
        },
        noSkillInstructions: {
            id: `xjlxAG`,
            defaultMessage: `No instructions available yet.`
        }
    })
}));
export {
    j as n, w as t
};
//# sourceMappingURL=0d978407-k8fijh0261hihvvv.js.map
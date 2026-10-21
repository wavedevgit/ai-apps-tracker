import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    X5 as r,
    Y5 as i
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    Bn as a,
    Vn as o,
    wn as s
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    n as c,
    t as l
} from "./7b12be43-bb7bda6677m5h5jk.js";
import {
    n as u,
    t as d
} from "./0cb8459d-fvvcw3fspihh1m17.js";
import {
    r as f,
    t as p
} from "./ee72d6dc-ebud9mva9mojxuii.js";
import {
    n as m,
    t as h
} from "./32d3feda-jln4j3rt4oo5xtg9.js";
import {
    n as g,
    t as _
} from "./9225e854-lf9tyby1b7iurr0s.js";
import {
    n as v,
    t as y
} from "./409226b2-fqct788rovb22uv4.js";
var b = t({
    default: () => T
});

function x(e) {
    return (0, w.jsxs)(`article`, {
        className: i(`flex min-w-0 flex-col gap-6`, {
            "bg-token-bg-tertiary rounded-3xl p-6": !e.media
        }),
        children: [e.media && (0, w.jsx)(`div`, {
            className: `dots-media`,
            children: (0, w.jsx)(p, {
                ...e.media,
                rounding: `none`
            })
        }), (0, w.jsxs)(`div`, {
            className: `flex flex-col gap-3 px-2`,
            children: [(0, w.jsx)(`h3`, {
                className: `dots-h4`,
                children: e.title
            }), (0, w.jsx)(`p`, {
                className: `dots-body dots-muted`,
                children: e.description
            }), e.cta && (0, w.jsx)(y, {
                link: e.cta,
                className: `dots-cta`
            })]
        })]
    }, e.id)
}
var S, C, w, T, E = e((() => {
    S = s(), v(), f(), m(), c(), d(), r(), C = n(o()), g(), w = a(), T = e => {
        "use forget";
        let t = (0, S.c)(44),
            {
                id: n,
                data: r,
                children: a
            } = e,
            o = (0, C.useContext)(_),
            s = r.heading ?? `h2`,
            c = `${n}-heading`,
            d = r.variant && `dots-${r.variant}`,
            f;
        t[0] === d ? f = t[1] : (f = i(`dots-grid`, `dots-section`, d, `gap-y-10`), t[0] = d, t[1] = f);
        let m = r.variant === `character`,
            g;
        t[2] === m ? g = t[3] : (g = i(`dots-primary`, `dots-copy`, {
            "sr-only": m
        }, `flex flex-col items-center gap-6 text-center`), t[2] = m, t[3] = g);
        let v = `${n}-heading`,
            b = `dots-${s}`,
            T;
        t[4] === b ? T = t[5] : (T = i(b, `dots-heading`), t[4] = b, t[5] = T);
        let E;
        t[6] !== s || t[7] !== r.title || t[8] !== v || t[9] !== T ? (E = (0, w.jsx)(s, {
            id: v,
            className: T,
            children: r.title
        }), t[6] = s, t[7] = r.title, t[8] = v, t[9] = T, t[10] = E) : E = t[10];
        let D;
        t[11] === r.description ? D = t[12] : (D = r.description && (0, w.jsx)(`p`, {
            className: `dots-body dots-muted dots-description`,
            children: r.description
        }), t[11] = r.description, t[12] = D);
        let O;
        t[13] !== D || t[14] !== E ? (O = (0, w.jsxs)(`div`, {
            className: `dots-text flex flex-col gap-4`,
            children: [E, D]
        }), t[13] = D, t[14] = E, t[15] = O) : O = t[15];
        let k;
        t[16] !== r.cta || t[17] !== r.secondaryCta ? (k = (r.cta || r.secondaryCta) && (0, w.jsxs)(`div`, {
            className: `flex flex-wrap items-center justify-center gap-3`,
            children: [r.cta && (0, w.jsx)(y, {
                link: r.cta,
                className: `dots-cta`,
                showIcon: !1
            }), r.secondaryCta && (0, w.jsx)(y, {
                link: r.secondaryCta,
                className: `dots-cta`,
                showIcon: !1
            })]
        }), t[16] = r.cta, t[17] = r.secondaryCta, t[18] = k) : k = t[18];
        let A;
        t[19] !== O || t[20] !== k || t[21] !== g ? (A = (0, w.jsxs)(`div`, {
            className: g,
            children: [O, k]
        }), t[19] = O, t[20] = k, t[21] = g, t[22] = A) : A = t[22];
        let j;
        t[23] === r.media ? j = t[24] : (j = r.media && (0, w.jsx)(`div`, {
            className: `dots-secondary dots-media`,
            children: (0, w.jsx)(p, {
                ...r.media,
                rounding: `none`
            })
        }), t[23] = r.media, t[24] = j);
        let M;
        t[25] !== r.description || t[26] !== r.tabs || t[27] !== r.title || t[28] !== r.variant || t[29] !== o ? (M = r.tabs && r.tabs.length > 0 && (0, w.jsx)(`div`, {
            className: `dots-primary dots-tabs`,
            children: (0, w.jsx)(h, {
                tabs: r.tabs,
                fullWidth: !0,
                tabListClassName: `dots-tab-list`,
                tabClassName: `dots-tab`,
                tabListPosition: r.variant === `character` ? `after` : `before`,
                renderTabContent: r.variant === `character` ? e => (0, w.jsxs)(`div`, {
                    className: `flex flex-col items-center gap-12 text-center`,
                    children: [(0, w.jsx)(`div`, {
                        className: `w-full max-w-100`,
                        children: u(e.content, l)
                    }), (0, w.jsxs)(`div`, {
                        className: `flex max-w-143 flex-col gap-6`,
                        children: [(0, w.jsxs)(`h3`, {
                            className: `dots-h2`,
                            children: [r.title, ` `, e.label]
                        }), (0, w.jsx)(`p`, {
                            className: `dots-h4 dots-muted`,
                            children: r.description
                        })]
                    })]
                }) : void 0,
                onTabChange: e => o?.setActiveTab(e.id)
            })
        }), t[25] = r.description, t[26] = r.tabs, t[27] = r.title, t[28] = r.variant, t[29] = o, t[30] = M) : M = t[30];
        let N;
        t[31] === r.cards ? N = t[32] : (N = r.cards && r.cards.length > 0 && (0, w.jsx)(`div`, {
            className: `dots-full grid gap-4 min-[900px]:grid-cols-3`,
            children: r.cards.map(x)
        }), t[31] = r.cards, t[32] = N);
        let P;
        t[33] === a ? P = t[34] : (P = a && (0, w.jsx)(`div`, {
            className: `dots-secondary`,
            children: a
        }), t[33] = a, t[34] = P);
        let F;
        return t[35] !== n || t[36] !== c || t[37] !== A || t[38] !== j || t[39] !== M || t[40] !== N || t[41] !== P || t[42] !== f ? (F = (0, w.jsxs)(`section`, {
            id: n,
            "aria-labelledby": c,
            className: f,
            children: [A, j, M, N, P]
        }), t[35] = n, t[36] = c, t[37] = A, t[38] = j, t[39] = M, t[40] = N, t[41] = P, t[42] = f, t[43] = F) : F = t[43], F
    }
}));
export {
    b as n, E as r, T as t
};
//# sourceMappingURL=02cbba55-cfloslfyc2a3ca0o.js.map
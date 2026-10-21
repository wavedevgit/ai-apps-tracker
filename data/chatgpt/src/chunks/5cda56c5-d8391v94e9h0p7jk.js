import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Jot as t,
    Qnt as n,
    X5 as r,
    Y5 as i,
    Zot as a,
    trt as o
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    Bn as s,
    Ln as c,
    Rn as l,
    wn as u,
    zn as d
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Bwn as f,
    Iwn as p,
    zwn as m
} from "./conversation-small-kzsalymynzuddxee.js";

function h(e) {
    return e != null
}

function g(e) {
    return [e.id, e]
}
var _, v, y, b, x, S, C, w = e((() => {
        _ = u(), p(), o(), r(), l(), v = s(), y = c({
            SHOPPING: {
                id: `zNw0c7`,
                defaultMessage: `Shopping`
            },
            FOOD: {
                id: `LntqB+`,
                defaultMessage: `Food`
            },
            ENTERTAINMENT: {
                id: `EEji3Q`,
                defaultMessage: `Entertainment`
            },
            EDUCATION: {
                id: `rg1pww`,
                defaultMessage: `Education`
            },
            DESIGN: {
                id: `Vdqozv`,
                defaultMessage: `Design`
            },
            BUSINESS: {
                id: `ry3gwV`,
                defaultMessage: `Business`
            },
            DEVELOPER_TOOLS: {
                id: `jqIuSG`,
                defaultMessage: `Developer Tools`
            },
            PRODUCTIVITY: {
                id: `9wDocM`,
                defaultMessage: `Productivity`
            },
            COLLABORATION: {
                id: `Cl0J3B`,
                defaultMessage: `Collaboration`
            },
            FINANCE: {
                id: `5AmNYd`,
                defaultMessage: `Finance`
            },
            TRAVEL: {
                id: `STrKZ2`,
                defaultMessage: `Travel`
            },
            LIFESTYLE: {
                id: `/ZKngk`,
                defaultMessage: `Lifestyle`
            }
        }), c({
            productivity: {
                id: `9wDocM`,
                defaultMessage: `Productivity`
            },
            lifestyle: {
                id: `/ZKngk`,
                defaultMessage: `Lifestyle`
            }
        }), b = () => {
            "use forget";
            let e = n(`3701585807`),
                t = S();
            return e.get(`categories`, []).map(t).filter(h)
        }, x = () => {
            "use forget";
            let e = (0, _.c)(2),
                t = b(),
                n;
            return e[0] === t ? n = e[1] : (n = new Map(t.map(g)), e[0] = t, e[1] = n), n
        }, S = () => {
            "use forget";
            let e = (0, _.c)(2),
                t = d(),
                n;
            return e[0] === t ? n = e[1] : (n = e => m(e) && f(e.id) && (f(e.icon_url) || e.icon_url === void 0) && Object.keys(y).includes(e.id) ? {
                id: e.id,
                name: t.formatMessage(y[e.id]),
                icon: e.icon_url ? (0, v.jsx)(`img`, {
                    src: e.icon_url,
                    alt: t.formatMessage(y[e.id]),
                    className: `h-8 w-8 object-contain sm:h-6 sm:w-6`
                }) : null
            } : null, e[0] = t, e[1] = n), n
        }, C = e => {
            "use forget";
            let t = (0, _.c)(13),
                {
                    category: n,
                    selected: r,
                    onClick: a,
                    hideIcon: o
                } = e,
                s = r !== void 0 && r,
                c = !(o !== void 0 && o) && n.icon,
                l, u;
            if (t[0] !== n.icon || t[1] !== n.name || t[2] !== c || t[3] !== a || t[4] !== s) {
                u = Symbol.for(`react.early_return_sentinel`);
                bb0: {
                    let e = i(`flex-shrink-0 rounded-full px-4! py-2 text-sm select-none sm:rounded-full sm:px-2.5 sm:py-1.5`, s ? `bg-token-interactive-bg-secondary-selected text-token-interactive-label-secondary-selected` : `text-token-text-primary`),
                        r;t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (r = i(`flex items-center justify-center gap-2 sm:h-6`), t[7] = r) : r = t[7];
                    let o = c && n.icon,
                        d;t[8] === n.name ? d = t[9] : (d = (0, v.jsx)(`span`, {
                        className: `font-medium text-nowrap sm:font-normal`,
                        children: n.name
                    }), t[8] = n.name, t[9] = d);
                    let f;t[10] !== o || t[11] !== d ? (f = (0, v.jsxs)(`div`, {
                        className: r,
                        children: [o, d]
                    }), t[10] = o, t[11] = d, t[12] = f) : f = t[12];
                    let p = f;
                    if (a) {
                        u = (0, v.jsx)(`button`, {
                            type: `button`,
                            role: `tab`,
                            "aria-selected": s,
                            onClick: a,
                            className: i(e, !s && `hover:bg-token-interactive-bg-secondary-hover hover:text-token-interactive-label-secondary-hover`, `focus-visible:ring-token-text-primary focus:outline-none focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50`),
                            children: p
                        });
                        break bb0
                    }
                    l = (0, v.jsx)(`div`, {
                        className: e,
                        children: p
                    })
                }
                t[0] = n.icon, t[1] = n.name, t[2] = c, t[3] = a, t[4] = s, t[5] = l, t[6] = u
            } else l = t[5], u = t[6];
            return u === Symbol.for(`react.early_return_sentinel`) ? l : u
        }
    })),
    T, E, D, O, k, A = e((() => {
        t(), l(), T = function(e) {
            return e.FILE_SEARCH = `FILE_SEARCH`, e.SYNC = `SYNC`, e.WRITES = `WRITES`, e.INTERACTIVE = `INTERACTIVE`, e
        }({}), E = [`FILE_SEARCH`, `SYNC`, `WRITES`, `INTERACTIVE`], D = a(e => {
            let t = new Set;
            return e.knowledgeConfig.length > 0 && (t.add(`SYNC`), t.add(`FILE_SEARCH`)), e.primaryConnector.labels?.interactive === `true` && t.add(`INTERACTIVE`), e.primaryConnector.labels?.writes === `true` && t.add(`WRITES`), t
        }), O = c({
            fileSearchCapability: {
                id: `3y7k7+`,
                defaultMessage: `File Search`
            },
            syncCapability: {
                id: `Hlwc4F`,
                defaultMessage: `Sync`
            },
            interactiveCapability: {
                id: `xj2Avf`,
                defaultMessage: `Interactive`
            },
            writesCapability: {
                id: `lInLLY`,
                defaultMessage: `Writes`
            }
        }), k = (e, t) => {
            switch (e) {
                case `FILE_SEARCH`:
                    return t.formatMessage(O.fileSearchCapability);
                case `SYNC`:
                    return t.formatMessage(O.syncCapability);
                case `INTERACTIVE`:
                    return t.formatMessage(O.interactiveCapability);
                case `WRITES`:
                    return t.formatMessage(O.writesCapability);
                default:
                    return e
            }
        }
    }));
export {
    k as a, x as c, A as i, T as n, C as o, D as r, w as s, E as t
};
//# sourceMappingURL=5cda56c5-d8391v94e9h0p7jk.js.map
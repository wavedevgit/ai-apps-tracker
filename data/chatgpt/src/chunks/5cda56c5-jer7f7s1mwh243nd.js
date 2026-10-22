import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    c7 as t,
    cst as n,
    dst as r,
    frt as i,
    hrt as a,
    l7 as o
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bn as s,
    Ln as c,
    Rn as l,
    wn as u,
    zn as d
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    _Tn as f,
    gTn as p,
    pTn as m
} from "./conversation-small-m08q51xmfe7gjq3d.js";

function h(e) {
    return e != null
}

function g(e) {
    return [e.id, e]
}
var _, v, y, b, x, S, C, w = e((() => {
        _ = u(), m(), a(), o(), l(), v = s(), y = c({
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
            let e = i(`3701585807`),
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
            return e[0] === t ? n = e[1] : (n = e => p(e) && f(e.id) && (f(e.icon_url) || e.icon_url === void 0) && Object.keys(y).includes(e.id) ? {
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
            let n = (0, _.c)(13),
                {
                    category: r,
                    selected: i,
                    onClick: a,
                    hideIcon: o
                } = e,
                s = i !== void 0 && i,
                c = !(o !== void 0 && o) && r.icon,
                l, u;
            if (n[0] !== r.icon || n[1] !== r.name || n[2] !== c || n[3] !== a || n[4] !== s) {
                u = Symbol.for(`react.early_return_sentinel`);
                bb0: {
                    let e = t(`flex-shrink-0 rounded-full px-4! py-2 text-sm select-none sm:rounded-full sm:px-2.5 sm:py-1.5`, s ? `bg-token-interactive-bg-secondary-selected text-token-interactive-label-secondary-selected` : `text-token-text-primary`),
                        i;n[7] === Symbol.for(`react.memo_cache_sentinel`) ? (i = t(`flex items-center justify-center gap-2 sm:h-6`), n[7] = i) : i = n[7];
                    let o = c && r.icon,
                        d;n[8] === r.name ? d = n[9] : (d = (0, v.jsx)(`span`, {
                        className: `font-medium text-nowrap sm:font-normal`,
                        children: r.name
                    }), n[8] = r.name, n[9] = d);
                    let f;n[10] !== o || n[11] !== d ? (f = (0, v.jsxs)(`div`, {
                        className: i,
                        children: [o, d]
                    }), n[10] = o, n[11] = d, n[12] = f) : f = n[12];
                    let p = f;
                    if (a) {
                        u = (0, v.jsx)(`button`, {
                            type: `button`,
                            role: `tab`,
                            "aria-selected": s,
                            onClick: a,
                            className: t(e, !s && `hover:bg-token-interactive-bg-secondary-hover hover:text-token-interactive-label-secondary-hover`, `focus-visible:ring-token-text-primary focus:outline-none focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50`),
                            children: p
                        });
                        break bb0
                    }
                    l = (0, v.jsx)(`div`, {
                        className: e,
                        children: p
                    })
                }
                n[0] = r.icon, n[1] = r.name, n[2] = c, n[3] = a, n[4] = s, n[5] = l, n[6] = u
            } else l = n[5], u = n[6];
            return u === Symbol.for(`react.early_return_sentinel`) ? l : u
        }
    })),
    T, E, D, O, k, A = e((() => {
        n(), l(), T = function(e) {
            return e.FILE_SEARCH = `FILE_SEARCH`, e.SYNC = `SYNC`, e.WRITES = `WRITES`, e.INTERACTIVE = `INTERACTIVE`, e
        }({}), E = [`FILE_SEARCH`, `SYNC`, `WRITES`, `INTERACTIVE`], D = r(e => {
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
//# sourceMappingURL=5cda56c5-jer7f7s1mwh243nd.js.map
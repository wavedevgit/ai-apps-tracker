import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as r,
    S2 as i,
    b5 as a,
    bS as o,
    h$ as s,
    iN as c,
    kT as l,
    m$ as u,
    tN as d,
    x2 as f,
    y5 as p,
    yS as m
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as h,
    Vn as g
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $en as _,
    Qen as v,
    RVt as ee,
    etn as te,
    zVt as ne
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    n as re,
    t as ie
} from "./729752de-gc281142a2cv9j90.js";
import {
    n as y,
    t as b
} from "./8e7ce76b-c1j889pzxnevff4h.js";
import {
    n as x,
    t as S
} from "./d19c7695-cwsee37x2cbeqsvl.js";

function ae() {
    return (0, C.useReducer)(ue, ce)
}

function oe() {
    return (0, C.useContext)(fe)
}
var C, se, ce, le, ue, de, fe, pe, me = e((() => {
    y(), C = n(g()), se = h(), ce = {}, le = (0, C.createContext)(ce), ue = (e, t) => b({}, e, t), de = () => (0, C.useContext)(le), fe = (0, C.createContext)(() => {}), fe.displayName = `JVR.DispatchShowTools`, pe = e => {
        var {
            initial: t,
            dispatch: n,
            children: r
        } = e;
        return (0, se.jsx)(le.Provider, {
            value: t,
            children: (0, se.jsx)(fe.Provider, {
                value: n,
                children: r
            })
        })
    }, pe.displayName = `JVR.ShowTools`
}));

function he() {
    return (0, w.useReducer)(be, ve)
}

function ge() {
    return (0, w.useContext)(Se)
}
var w, _e, ve, ye, be, xe, Se, Ce, T = e((() => {
    y(), w = n(g()), _e = h(), ve = {}, ye = (0, w.createContext)(ve), be = (e, t) => b({}, e, t), xe = () => (0, w.useContext)(ye), Se = (0, w.createContext)(() => {}), Se.displayName = `JVR.DispatchExpands`, Ce = e => {
        var {
            initial: t,
            dispatch: n,
            children: r
        } = e;
        return (0, _e.jsx)(ye.Provider, {
            value: t,
            children: (0, _e.jsx)(Se.Provider, {
                value: n,
                children: r
            })
        })
    }, Ce.displayName = `JVR.Expands`
}));

function we() {
    return (0, E.useReducer)(Ae, Oe)
}

function Te() {
    return (0, E.useContext)(je)
}

function Ee(e) {
    var {
        initial: t,
        dispatch: n,
        children: r
    } = e;
    return (0, De.jsx)(ke.Provider, {
        value: t,
        children: (0, De.jsx)(je.Provider, {
            value: n,
            children: r
        })
    })
}
var E, De, Oe, ke, Ae, D, je, O = e((() => {
    y(), E = n(g()), De = h(), Oe = {
        Str: {
            as: `span`,
            "data-type": `string`,
            style: {
                color: `var(--w-rjv-type-string-color, #cb4b16)`
            },
            className: `w-rjv-type`,
            children: `string`
        },
        Url: {
            as: `a`,
            style: {
                color: `var(--w-rjv-type-url-color, #0969da)`
            },
            "data-type": `url`,
            className: `w-rjv-type`,
            children: `url`
        },
        Undefined: {
            style: {
                color: `var(--w-rjv-type-undefined-color, #586e75)`
            },
            as: `span`,
            "data-type": `undefined`,
            className: `w-rjv-type`,
            children: `undefined`
        },
        Null: {
            style: {
                color: `var(--w-rjv-type-null-color, #d33682)`
            },
            as: `span`,
            "data-type": `null`,
            className: `w-rjv-type`,
            children: `null`
        },
        Map: {
            style: {
                color: `var(--w-rjv-type-map-color, #268bd2)`,
                marginRight: 3
            },
            as: `span`,
            "data-type": `map`,
            className: `w-rjv-type`,
            children: `Map`
        },
        Nan: {
            style: {
                color: `var(--w-rjv-type-nan-color, #859900)`
            },
            as: `span`,
            "data-type": `nan`,
            className: `w-rjv-type`,
            children: `NaN`
        },
        Bigint: {
            style: {
                color: `var(--w-rjv-type-bigint-color, #268bd2)`
            },
            as: `span`,
            "data-type": `bigint`,
            className: `w-rjv-type`,
            children: `bigint`
        },
        Int: {
            style: {
                color: `var(--w-rjv-type-int-color, #268bd2)`
            },
            as: `span`,
            "data-type": `int`,
            className: `w-rjv-type`,
            children: `int`
        },
        Set: {
            style: {
                color: `var(--w-rjv-type-set-color, #268bd2)`,
                marginRight: 3
            },
            as: `span`,
            "data-type": `set`,
            className: `w-rjv-type`,
            children: `Set`
        },
        Float: {
            style: {
                color: `var(--w-rjv-type-float-color, #859900)`
            },
            as: `span`,
            "data-type": `float`,
            className: `w-rjv-type`,
            children: `float`
        },
        True: {
            style: {
                color: `var(--w-rjv-type-boolean-color, #2aa198)`
            },
            as: `span`,
            "data-type": `bool`,
            className: `w-rjv-type`,
            children: `bool`
        },
        False: {
            style: {
                color: `var(--w-rjv-type-boolean-color, #2aa198)`
            },
            as: `span`,
            "data-type": `bool`,
            className: `w-rjv-type`,
            children: `bool`
        },
        Date: {
            style: {
                color: `var(--w-rjv-type-date-color, #268bd2)`
            },
            as: `span`,
            "data-type": `date`,
            className: `w-rjv-type`,
            children: `date`
        }
    }, ke = (0, E.createContext)(Oe), Ae = (e, t) => b({}, e, t), D = () => (0, E.useContext)(ke), je = (0, E.createContext)(() => {}), je.displayName = `JVR.DispatchTypes`, Ee.displayName = `JVR.Types`
}));

function Me(e) {
    var {
        style: t
    } = e, n = S(e, Pe);
    return (0, Ne.jsx)(`svg`, b({
        viewBox: `0 0 24 24`,
        fill: `var(--w-rjv-arrow-color, currentColor)`,
        style: b({
            cursor: `pointer`,
            height: `1em`,
            width: `1em`,
            userSelect: `none`,
            display: `inline-flex`
        }, t)
    }, n, {
        children: (0, Ne.jsx)(`path`, {
            d: `M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z`
        })
    }))
}
var Ne, Pe, Fe = e((() => {
    y(), x(), g(), Ne = h(), Pe = [`style`], Me.displayName = `JVR.TriangleArrow`
}));

function Ie() {
    return (0, k.useReducer)(Ve, ze)
}

function Le() {
    return (0, k.useContext)(He)
}
var k, Re, ze, Be, Ve, A, He, Ue, j = e((() => {
    y(), k = n(g()), Fe(), Re = h(), ze = {
        Arrow: {
            as: `span`,
            className: `w-rjv-arrow`,
            style: {
                transform: `rotate(0deg)`,
                transition: `all 0.3s`
            },
            children: (0, Re.jsx)(Me, {})
        },
        Colon: {
            as: `span`,
            style: {
                color: `var(--w-rjv-colon-color, var(--w-rjv-color))`,
                marginLeft: 0,
                marginRight: 2
            },
            className: `w-rjv-colon`,
            children: `:`
        },
        Quote: {
            as: `span`,
            style: {
                color: `var(--w-rjv-quotes-color, #236a7c)`
            },
            className: `w-rjv-quotes`,
            children: `"`
        },
        ValueQuote: {
            as: `span`,
            style: {
                color: `var(--w-rjv-quotes-string-color, #cb4b16)`
            },
            className: `w-rjv-quotes`,
            children: `"`
        },
        BracketsLeft: {
            as: `span`,
            style: {
                color: `var(--w-rjv-brackets-color, #236a7c)`
            },
            className: `w-rjv-brackets-start`,
            children: `[`
        },
        BracketsRight: {
            as: `span`,
            style: {
                color: `var(--w-rjv-brackets-color, #236a7c)`
            },
            className: `w-rjv-brackets-end`,
            children: `]`
        },
        BraceLeft: {
            as: `span`,
            style: {
                color: `var(--w-rjv-curlybraces-color, #236a7c)`
            },
            className: `w-rjv-curlybraces-start`,
            children: `{`
        },
        BraceRight: {
            as: `span`,
            style: {
                color: `var(--w-rjv-curlybraces-color, #236a7c)`
            },
            className: `w-rjv-curlybraces-end`,
            children: `}`
        }
    }, Be = (0, k.createContext)(ze), Ve = (e, t) => b({}, e, t), A = () => (0, k.useContext)(Be), He = (0, k.createContext)(() => {}), He.displayName = `JVR.DispatchSymbols`, Ue = e => {
        var {
            initial: t,
            dispatch: n,
            children: r
        } = e;
        return (0, Re.jsx)(Be.Provider, {
            value: t,
            children: (0, Re.jsx)(He.Provider, {
                value: n,
                children: r
            })
        })
    }, Ue.displayName = `JVR.Symbols`
}));

function We() {
    return (0, M.useReducer)(Ye, qe)
}

function Ge() {
    return (0, M.useContext)(Xe)
}
var M, Ke, qe, Je, Ye, N, Xe, Ze, P = e((() => {
    y(), M = n(g()), Ke = h(), qe = {
        Copied: {
            className: `w-rjv-copied`,
            style: {
                height: `1em`,
                width: `1em`,
                cursor: `pointer`,
                verticalAlign: `middle`,
                marginLeft: 5
            }
        },
        CountInfo: {
            as: `span`,
            className: `w-rjv-object-size`,
            style: {
                color: `var(--w-rjv-info-color, #0000004d)`,
                paddingLeft: 8,
                fontStyle: `italic`
            }
        },
        CountInfoExtra: {
            as: `span`,
            className: `w-rjv-object-extra`,
            style: {
                paddingLeft: 8
            }
        },
        Ellipsis: {
            as: `span`,
            style: {
                cursor: `pointer`,
                color: `var(--w-rjv-ellipsis-color, #cb4b16)`,
                userSelect: `none`
            },
            className: `w-rjv-ellipsis`,
            children: `...`
        },
        Row: {
            as: `div`,
            className: `w-rjv-line`
        },
        KeyName: {
            as: `span`,
            className: `w-rjv-object-key`
        }
    }, Je = (0, M.createContext)(qe), Ye = (e, t) => b({}, e, t), N = () => (0, M.useContext)(Je), Xe = (0, M.createContext)(() => {}), Xe.displayName = `JVR.DispatchSection`, Ze = e => {
        var {
            initial: t,
            dispatch: n,
            children: r
        } = e;
        return (0, Ke.jsx)(Je.Provider, {
            value: t,
            children: (0, Ke.jsx)(Xe.Provider, {
                value: n,
                children: r
            })
        })
    }, Ze.displayName = `JVR.Section`
}));

function Qe(e, t) {
    return b({}, e, t)
}
var F, I, $e, et, tt, L, nt, R = e((() => {
    y(), F = n(g()), me(), T(), O(), j(), P(), I = h(), $e = {
        objectSortKeys: !1,
        indentWidth: 15
    }, et = (0, F.createContext)($e), et.displayName = `JVR.Context`, tt = (0, F.createContext)(() => {}), tt.displayName = `JVR.DispatchContext`, L = () => (0, F.useContext)(et), nt = e => {
        var {
            children: t,
            initialState: n,
            initialTypes: r
        } = e, [i, a] = (0, F.useReducer)(Qe, Object.assign({}, $e, n)), [o, s] = ae(), [c, l] = he(), [u, d] = we(), [f, p] = Ie(), [m, h] = We();
        return (0, F.useEffect)(() => a(b({}, n)), [n]), (0, I.jsx)(et.Provider, {
            value: i,
            children: (0, I.jsx)(tt.Provider, {
                value: a,
                children: (0, I.jsx)(pe, {
                    initial: o,
                    dispatch: s,
                    children: (0, I.jsx)(Ce, {
                        initial: c,
                        dispatch: l,
                        children: (0, I.jsx)(Ee, {
                            initial: b({}, u, r),
                            dispatch: d,
                            children: (0, I.jsx)(Ue, {
                                initial: f,
                                dispatch: p,
                                children: (0, I.jsx)(Ze, {
                                    initial: m,
                                    dispatch: h,
                                    children: t
                                })
                            })
                        })
                    })
                })
            })
        })
    }, nt.displayName = `JVR.Provider`
}));

function rt(e) {
    if (e == null) throw TypeError(`Cannot destructure ` + e)
}
var it = e((() => {})),
    z, at, ot, st, ct, lt, ut, dt, ft, pt, mt, B, ht, gt, _t, vt, yt = e((() => {
        it(), y(), x(), j(), T(), z = h(), at = [`isNumber`, `value`, `parentValue`, `keyName`, `keys`], ot = [`as`, `render`], st = [`as`, `render`], ct = [`as`, `render`], lt = [`as`, `style`, `render`], ut = [`as`, `render`], dt = [`as`, `render`], ft = [`as`, `render`], pt = [`as`, `render`], mt = e => {
            var {
                Quote: t = {}
            } = A(), {
                isNumber: n,
                value: r,
                parentValue: i,
                keyName: a,
                keys: o
            } = e, s = S(e, at);
            if (n) return null;
            var {
                as: c,
                render: l
            } = t, u = S(t, ot), d = c || `span`, f = b({}, s, u);
            return l && typeof l == `function` && l(f, {
                value: r,
                parentValue: i,
                keyName: a,
                keys: o || (a ? [a] : [])
            }) || (0, z.jsx)(d, b({}, f))
        }, mt.displayName = `JVR.Quote`, B = e => {
            var {
                ValueQuote: t = {}
            } = A(), n = b({}, (rt(e), e)), {
                as: r,
                render: i
            } = t, a = S(t, st), o = r || `span`, s = b({}, n, a);
            return i && typeof i == `function` && i(s, {}) || (0, z.jsx)(o, b({}, s))
        }, B.displayName = `JVR.ValueQuote`, ht = e => {
            var {
                value: t,
                parentValue: n,
                keyName: r,
                keys: i
            } = e, {
                Colon: a = {}
            } = A(), {
                as: o,
                render: s
            } = a, c = S(a, ct), l = o || `span`;
            return s && typeof s == `function` && s(c, {
                value: t,
                parentValue: n,
                keyName: r,
                keys: i || (r ? [r] : [])
            }) || (0, z.jsx)(l, b({}, c))
        }, ht.displayName = `JVR.Colon`, gt = e => {
            var {
                Arrow: t = {}
            } = A(), n = xe(), {
                expandKey: r,
                style: i,
                value: a,
                parentValue: o,
                keyName: s,
                keys: c
            } = e, l = !!n[r], {
                as: u,
                style: d,
                render: f
            } = t, p = S(t, lt), m = u || `span`, h = f && typeof f == `function`, g = b({}, p, {
                "data-expanded": l,
                style: b({}, d, i)
            });
            return h && f(g, {
                value: a,
                parentValue: o,
                keyName: s,
                keys: c || (s ? [s] : [])
            }) || (0, z.jsx)(m, b({}, p, {
                style: b({}, d, i)
            }))
        }, gt.displayName = `JVR.Arrow`, _t = e => {
            var {
                isBrackets: t,
                value: n,
                parentValue: r,
                keyName: i,
                keys: a
            } = e, {
                BracketsLeft: o = {},
                BraceLeft: s = {}
            } = A(), c = {
                value: n,
                parentValue: r,
                keyName: i,
                keys: a || (i ? [i] : [])
            };
            if (t) {
                var {
                    as: l,
                    render: u
                } = o, d = S(o, ut), f = l || `span`;
                return u && typeof u == `function` && u(d, c) || (0, z.jsx)(f, b({}, d))
            }
            var {
                as: p,
                render: m
            } = s, h = S(s, dt), g = p || `span`;
            return m && typeof m == `function` && m(h, c) || (0, z.jsx)(g, b({}, h))
        }, _t.displayName = `JVR.BracketsOpen`, vt = e => {
            var {
                isBrackets: t,
                isVisiable: n,
                value: r,
                parentValue: i,
                keyName: a,
                keys: o
            } = e, s = {
                value: r,
                parentValue: i,
                keyName: a,
                keys: o || (a ? [a] : [])
            };
            if (!n) return null;
            var {
                BracketsRight: c = {},
                BraceRight: l = {}
            } = A();
            if (t) {
                var {
                    as: u,
                    render: d
                } = c, f = S(c, ft), p = u || `span`;
                return d && typeof d == `function` && d(f, s) || (0, z.jsx)(p, b({}, f))
            }
            var {
                as: m,
                render: h
            } = l, g = S(l, pt), _ = m || `span`;
            return h && typeof h == `function` && h(g, s) || (0, z.jsx)(_, b({}, g))
        }, vt.displayName = `JVR.BracketsClose`
    })),
    bt, xt, St = e((() => {
        R(), T(), yt(), bt = h(), xt = e => {
            var {
                value: t,
                expandKey: n,
                level: r,
                keys: i = []
            } = e, a = xe(), o = Array.isArray(t), {
                collapsed: s,
                shouldExpandNodeInitially: c
            } = L(), l = t instanceof Set, u = typeof s == `boolean` ? s : typeof s == `number` && r > s, d = a[n] ?? u, f = Object.keys(t).length;
            return a[n] === void 0 && c && c(d, {
                value: t,
                keys: i,
                level: r
            }) || d || f === 0 ? null : (0, bt.jsx)(`div`, {
                style: {
                    paddingLeft: 4
                },
                children: (0, bt.jsx)(vt, {
                    isBrackets: o || l,
                    isVisiable: !0
                })
            })
        }, xt.displayName = `JVR.NestedClose`
    })),
    V, H, Ct, wt, Tt, Et, Dt, Ot, kt, At, jt, Mt, Nt, Pt, Ft, It, Lt, Rt, U, zt, Bt, Vt, Ht, Ut, Wt, Gt, Kt, qt, Jt, Yt, Xt = e((() => {
        y(), x(), V = n(g()), R(), O(), yt(), H = h(), Ct = [`as`, `render`], wt = [`as`, `render`], Tt = [`as`, `render`], Et = [`as`, `render`], Dt = [`as`, `render`], Ot = [`as`, `render`], kt = [`as`, `render`], At = [`as`, `render`], jt = [`as`, `render`], Mt = [`as`, `render`], Nt = [`as`, `render`], Pt = [`as`, `render`], Ft = [`as`, `render`], It = e => {
            if (e === void 0) return `0n`;
            if (typeof e == `string`) try {
                e = BigInt(e)
            } catch {
                return `0n`
            }
            return e ? e.toString() + `n` : `0n`
        }, Lt = e => {
            var {
                value: t,
                keyName: n
            } = e, {
                Set: r = {},
                displayDataTypes: i
            } = D();
            if (!(t instanceof Set) || !i) return null;
            var {
                as: a,
                render: o
            } = r, s = S(r, Ct);
            return o && typeof o == `function` && o(s, {
                type: `type`,
                value: t,
                keyName: n
            }) || (0, H.jsx)(a || `span`, b({}, s))
        }, Lt.displayName = `JVR.SetComp`, Rt = e => {
            var {
                value: t,
                keyName: n
            } = e, {
                Map: r = {},
                displayDataTypes: i
            } = D();
            if (!(t instanceof Map) || !i) return null;
            var {
                as: a,
                render: o
            } = r, s = S(r, wt);
            return o && typeof o == `function` && o(s, {
                type: `type`,
                value: t,
                keyName: n
            }) || (0, H.jsx)(a || `span`, b({}, s))
        }, Rt.displayName = `JVR.MapComp`, U = {
            opacity: .75,
            paddingRight: 4
        }, zt = e => {
            var {
                children: t = ``,
                keyName: n
            } = e, {
                Str: r = {},
                displayDataTypes: i
            } = D(), {
                shortenTextAfterLength: a = 30,
                stringEllipsis: o = `...`
            } = L(), {
                as: s,
                render: c
            } = r, l = S(r, Tt), u = t, [d, f] = (0, V.useState)(a && u.length > a);
            (0, V.useEffect)(() => f(a && u.length > a), [a]);
            var p = s || `span`,
                m = b({}, U, r.style || {});
            a > 0 && (l.style = b({}, l.style, {
                cursor: u.length <= a ? `initial` : `pointer`
            }), u.length > a && (l.onClick = () => {
                f(!d)
            }));
            var h = d ? `` + u.slice(0, a) + o : u,
                g = c && typeof c == `function`,
                _ = g && c(b({}, l, {
                    style: m
                }), {
                    type: `type`,
                    value: t,
                    keyName: n
                }),
                v = d ? `w-rjv-value w-rjv-value-short` : `w-rjv-value`,
                ee = g && c(b({}, l, {
                    children: h,
                    className: v
                }), {
                    type: `value`,
                    value: t,
                    keyName: n
                });
            return (0, H.jsxs)(V.Fragment, {
                children: [i && (_ || (0, H.jsx)(p, b({}, l, {
                    style: m
                }))), ee || (0, H.jsxs)(V.Fragment, {
                    children: [(0, H.jsx)(B, {}), (0, H.jsx)(p, b({}, l, {
                        className: v,
                        children: h
                    })), (0, H.jsx)(B, {})]
                })]
            })
        }, zt.displayName = `JVR.TypeString`, Bt = e => {
            var {
                children: t,
                keyName: n
            } = e, {
                True: r = {},
                displayDataTypes: i
            } = D(), {
                as: a,
                render: o
            } = r, s = S(r, Et), c = a || `span`, l = b({}, U, r.style || {}), u = o && typeof o == `function`, d = u && o(b({}, s, {
                style: l
            }), {
                type: `type`,
                value: t,
                keyName: n
            }), f = u && o(b({}, s, {
                children: t,
                className: `w-rjv-value`
            }), {
                type: `value`,
                value: t,
                keyName: n
            });
            return (0, H.jsxs)(V.Fragment, {
                children: [i && (d || (0, H.jsx)(c, b({}, s, {
                    style: l
                }))), f || (0, H.jsx)(c, b({}, s, {
                    className: `w-rjv-value`,
                    children: t?.toString()
                }))]
            })
        }, Bt.displayName = `JVR.TypeTrue`, Vt = e => {
            var {
                children: t,
                keyName: n
            } = e, {
                False: r = {},
                displayDataTypes: i
            } = D(), {
                as: a,
                render: o
            } = r, s = S(r, Dt), c = a || `span`, l = b({}, U, r.style || {}), u = o && typeof o == `function`, d = u && o(b({}, s, {
                style: l
            }), {
                type: `type`,
                value: t,
                keyName: n
            }), f = u && o(b({}, s, {
                children: t,
                className: `w-rjv-value`
            }), {
                type: `value`,
                value: t,
                keyName: n
            });
            return (0, H.jsxs)(V.Fragment, {
                children: [i && (d || (0, H.jsx)(c, b({}, s, {
                    style: l
                }))), f || (0, H.jsx)(c, b({}, s, {
                    className: `w-rjv-value`,
                    children: t?.toString()
                }))]
            })
        }, Vt.displayName = `JVR.TypeFalse`, Ht = e => {
            var {
                children: t,
                keyName: n
            } = e, {
                Float: r = {},
                displayDataTypes: i
            } = D(), {
                as: a,
                render: o
            } = r, s = S(r, Ot), c = a || `span`, l = b({}, U, r.style || {}), u = o && typeof o == `function`, d = u && o(b({}, s, {
                style: l
            }), {
                type: `type`,
                value: t,
                keyName: n
            }), f = u && o(b({}, s, {
                children: t,
                className: `w-rjv-value`
            }), {
                type: `value`,
                value: t,
                keyName: n
            });
            return (0, H.jsxs)(V.Fragment, {
                children: [i && (d || (0, H.jsx)(c, b({}, s, {
                    style: l
                }))), f || (0, H.jsx)(c, b({}, s, {
                    className: `w-rjv-value`,
                    children: t?.toString()
                }))]
            })
        }, Ht.displayName = `JVR.TypeFloat`, Ut = e => {
            var {
                children: t,
                keyName: n
            } = e, {
                Int: r = {},
                displayDataTypes: i
            } = D(), {
                as: a,
                render: o
            } = r, s = S(r, kt), c = a || `span`, l = b({}, U, r.style || {}), u = o && typeof o == `function`, d = u && o(b({}, s, {
                style: l
            }), {
                type: `type`,
                value: t,
                keyName: n
            }), f = u && o(b({}, s, {
                children: t,
                className: `w-rjv-value`
            }), {
                type: `value`,
                value: t,
                keyName: n
            });
            return (0, H.jsxs)(V.Fragment, {
                children: [i && (d || (0, H.jsx)(c, b({}, s, {
                    style: l
                }))), f || (0, H.jsx)(c, b({}, s, {
                    className: `w-rjv-value`,
                    children: t?.toString()
                }))]
            })
        }, Ut.displayName = `JVR.TypeInt`, Wt = e => {
            var {
                children: t,
                keyName: n
            } = e, {
                Bigint: r = {},
                displayDataTypes: i
            } = D(), {
                as: a,
                render: o
            } = r, s = S(r, At), c = a || `span`, l = b({}, U, r.style || {}), u = o && typeof o == `function`, d = u && o(b({}, s, {
                style: l
            }), {
                type: `type`,
                value: t,
                keyName: n
            }), f = u && o(b({}, s, {
                children: t,
                className: `w-rjv-value`
            }), {
                type: `value`,
                value: t,
                keyName: n
            });
            return (0, H.jsxs)(V.Fragment, {
                children: [i && (d || (0, H.jsx)(c, b({}, s, {
                    style: l
                }))), f || (0, H.jsx)(c, b({}, s, {
                    className: `w-rjv-value`,
                    children: It(t?.toString())
                }))]
            })
        }, Wt.displayName = `JVR.TypeFloat`, Gt = e => {
            var {
                children: t,
                keyName: n
            } = e, {
                Url: r = {},
                displayDataTypes: i
            } = D(), {
                as: a,
                render: o
            } = r, s = S(r, jt), c = a || `span`, l = b({}, U, r.style), u = o && typeof o == `function`, d = u && o(b({}, s, {
                style: l
            }), {
                type: `type`,
                value: t,
                keyName: n
            }), f = u && o(b({}, s, {
                children: t?.href,
                className: `w-rjv-value`
            }), {
                type: `value`,
                value: t,
                keyName: n
            });
            return (0, H.jsxs)(V.Fragment, {
                children: [i && (d || (0, H.jsx)(c, b({}, s, {
                    style: l
                }))), f || (0, H.jsxs)(`a`, b({
                    href: t?.href,
                    target: `_blank`
                }, s, {
                    className: `w-rjv-value`,
                    children: [(0, H.jsx)(B, {}), t?.href, (0, H.jsx)(B, {})]
                }))]
            })
        }, Gt.displayName = `JVR.TypeUrl`, Kt = e => {
            var {
                children: t,
                keyName: n
            } = e, {
                Date: r = {},
                displayDataTypes: i
            } = D(), {
                as: a,
                render: o
            } = r, s = S(r, Mt), c = a || `span`, l = b({}, U, r.style || {}), u = o && typeof o == `function`, d = u && o(b({}, s, {
                style: l
            }), {
                type: `type`,
                value: t,
                keyName: n
            }), f = t instanceof Date ? t.toLocaleString() : t, p = u && o(b({}, s, {
                children: f,
                className: `w-rjv-value`
            }), {
                type: `value`,
                value: t,
                keyName: n
            });
            return (0, H.jsxs)(V.Fragment, {
                children: [i && (d || (0, H.jsx)(c, b({}, s, {
                    style: l
                }))), p || (0, H.jsx)(c, b({}, s, {
                    className: `w-rjv-value`,
                    children: f
                }))]
            })
        }, Kt.displayName = `JVR.TypeDate`, qt = e => {
            var {
                children: t,
                keyName: n
            } = e, {
                Undefined: r = {},
                displayDataTypes: i
            } = D(), {
                as: a,
                render: o
            } = r, s = S(r, Nt), c = a || `span`, l = b({}, U, r.style || {}), u = o && typeof o == `function`, d = u && o(b({}, s, {
                style: l
            }), {
                type: `type`,
                value: t,
                keyName: n
            }), f = u && o(b({}, s, {
                children: t,
                className: `w-rjv-value`
            }), {
                type: `value`,
                value: t,
                keyName: n
            });
            return (0, H.jsxs)(V.Fragment, {
                children: [i && (d || (0, H.jsx)(c, b({}, s, {
                    style: l
                }))), f]
            })
        }, qt.displayName = `JVR.TypeUndefined`, Jt = e => {
            var {
                children: t,
                keyName: n
            } = e, {
                Null: r = {},
                displayDataTypes: i
            } = D(), {
                as: a,
                render: o
            } = r, s = S(r, Pt), c = a || `span`, l = b({}, U, r.style || {}), u = o && typeof o == `function`, d = u && o(b({}, s, {
                style: l
            }), {
                type: `type`,
                value: t,
                keyName: n
            }), f = u && o(b({}, s, {
                children: t,
                className: `w-rjv-value`
            }), {
                type: `value`,
                value: t,
                keyName: n
            });
            return (0, H.jsxs)(V.Fragment, {
                children: [i && (d || (0, H.jsx)(c, b({}, s, {
                    style: l
                }))), f]
            })
        }, Jt.displayName = `JVR.TypeNull`, Yt = e => {
            var {
                children: t,
                keyName: n
            } = e, {
                Nan: r = {},
                displayDataTypes: i
            } = D(), {
                as: a,
                render: o
            } = r, s = S(r, Ft), c = a || `span`, l = b({}, U, r.style || {}), u = o && typeof o == `function`, d = u && o(b({}, s, {
                style: l
            }), {
                type: `type`,
                value: t,
                keyName: n
            }), f = u && o(b({}, s, {
                children: t?.toString(),
                className: `w-rjv-value`
            }), {
                type: `value`,
                value: t,
                keyName: n
            });
            return (0, H.jsxs)(V.Fragment, {
                children: [i && (d || (0, H.jsx)(c, b({}, s, {
                    style: l
                }))), f]
            })
        }, Yt.displayName = `JVR.TypeNan`
    })),
    W, Zt, Qt, $t = e((() => {
        y(), Xt(), W = h(), Zt = e => Number(e) === e && e % 1 != 0 || isNaN(e), Qt = e => {
            var {
                value: t,
                keyName: n
            } = e, r = {
                keyName: n
            };
            return t instanceof URL ? (0, W.jsx)(Gt, b({}, r, {
                children: t
            })) : typeof t == `string` ? (0, W.jsx)(zt, b({}, r, {
                children: t
            })) : t === !0 ? (0, W.jsx)(Bt, b({}, r, {
                children: t
            })) : t === !1 ? (0, W.jsx)(Vt, b({}, r, {
                children: t
            })) : t === null ? (0, W.jsx)(Jt, b({}, r, {
                children: t
            })) : t === void 0 ? (0, W.jsx)(qt, b({}, r, {
                children: t
            })) : t instanceof Date ? (0, W.jsx)(Kt, b({}, r, {
                children: t
            })) : typeof t == `number` && isNaN(t) ? (0, W.jsx)(Yt, b({}, r, {
                children: t
            })) : typeof t == `number` && Zt(t) ? (0, W.jsx)(Ht, b({}, r, {
                children: t
            })) : typeof t == `bigint` ? (0, W.jsx)(Wt, b({}, r, {
                children: t
            })) : typeof t == `number` ? (0, W.jsx)(Ut, b({}, r, {
                children: t
            })) : null
        }, Qt.displayName = `JVR.Value`
    }));

function G(e, t, n) {
    var r = Le(),
        i = b({}, e, t, {
            className: [e.className, t.className].filter(Boolean).join(` `),
            style: b({}, e.style, t.style),
            children: t.children || e.children
        });
    (0, en.useEffect)(() => r({
        [n]: i
    }), [t])
}

function K(e, t, n) {
    var r = Te(),
        i = b({}, e, t, {
            className: [e.className, t.className].filter(Boolean).join(` `),
            style: b({}, e.style, t.style),
            children: t.children || e.children
        });
    (0, en.useEffect)(() => r({
        [n]: i
    }), [t])
}

function q(e, t, n) {
    var r = Ge(),
        i = b({}, e, t, {
            className: [e.className, t.className].filter(Boolean).join(` `),
            style: b({}, e.style, t.style),
            children: t.children || e.children
        });
    (0, en.useEffect)(() => r({
        [n]: i
    }), [t])
}
var en, J = e((() => {
        y(), en = n(g()), j(), O(), P()
    })),
    tn, nn, rn, an, on = e((() => {
        y(), x(), P(), J(), tn = h(), nn = [`as`, `render`], rn = e => {
            var {
                KeyName: t = {}
            } = N();
            return q(t, e, `KeyName`), null
        }, rn.displayName = `JVR.KeyName`, an = e => {
            var {
                children: t,
                value: n,
                parentValue: r,
                keyName: i,
                keys: a
            } = e, o = {
                color: typeof t == `number` ? `var(--w-rjv-key-number, #268bd2)` : `var(--w-rjv-key-string, #002b36)`
            }, {
                KeyName: s = {}
            } = N(), {
                as: c,
                render: l
            } = s, u = S(s, nn);
            u.style = b({}, u.style, o);
            var d = c || `span`;
            return l && typeof l == `function` && l(b({}, u, {
                children: t
            }), {
                value: n,
                parentValue: r,
                keyName: i,
                keys: a || (i ? [i] : [])
            }) || (0, tn.jsx)(d, b({}, u, {
                children: t
            }))
        }, an.displayName = `JVR.KeyNameComp`
    })),
    sn, cn, ln, un, dn, fn = e((() => {
        y(), x(), P(), J(), sn = h(), cn = [`children`, `value`, `parentValue`, `keyName`, `keys`], ln = [`as`, `render`, `children`], un = e => {
            var {
                Row: t = {}
            } = N();
            return q(t, e, `Row`), null
        }, un.displayName = `JVR.Row`, dn = e => {
            var {
                children: t,
                value: n,
                parentValue: r,
                keyName: i,
                keys: a
            } = e, o = S(e, cn), {
                Row: s = {}
            } = N(), {
                as: c,
                render: l
            } = s, u = S(s, ln), d = c || `div`;
            return l && typeof l == `function` && l(b({}, o, u, {
                children: t
            }), {
                value: n,
                keyName: i,
                parentValue: r,
                keys: a
            }) || (0, sn.jsx)(d, b({}, o, u, {
                children: t
            }))
        }, dn.displayName = `JVR.RowComp`
    }));

function pn(e) {
    var t = (0, hn.useRef)();
    return (0, hn.useEffect)(() => {
        t.current = e
    }), t.current
}

function mn(e) {
    var {
        value: t,
        highlightUpdates: n,
        highlightContainer: r
    } = e, i = pn(t), a = (0, hn.useMemo)(() => {
        if (!n || i === void 0) return !1;
        if (typeof t != typeof i) return !0;
        if (typeof t == `number`) return isNaN(t) && isNaN(i) ? !1 : t !== i;
        if (Array.isArray(t) !== Array.isArray(i)) return !0;
        if (typeof t == `object` || typeof t == `function`) return !1;
        if (t !== i) return !0
    }, [n, t]);
    (0, hn.useEffect)(() => {
        r && r.current && a && `animate` in r.current && r.current.animate([{
            backgroundColor: `var(--w-rjv-update-color, #ebcb8b)`
        }, {
            backgroundColor: ``
        }], {
            duration: 1e3,
            easing: `ease-in`
        })
    }, [a, t, r])
}
var hn, gn = e((() => {
        hn = n(g())
    })),
    _n, vn, yn, bn, xn, Sn = e((() => {
        y(), x(), _n = n(g()), R(), P(), me(), Xt(), vn = h(), yn = [`keyName`, `value`, `parentValue`, `expandKey`, `keys`], bn = [`as`, `render`], xn = e => {
            var {
                keyName: t,
                value: n,
                parentValue: r,
                expandKey: i,
                keys: a
            } = e, o = S(e, yn), {
                onCopied: s,
                enableClipboard: c
            } = L(), l = de()[i], [u, d] = (0, _n.useState)(!1), {
                Copied: f = {}
            } = N();
            if (c === !1 || !l) return null;
            var p = {
                    style: {
                        display: `inline-flex`
                    },
                    fill: u ? `var(--w-rjv-copied-success-color, #28a745)` : `var(--w-rjv-copied-color, currentColor)`,
                    onClick: e => {
                        e.stopPropagation();
                        var t = ``;
                        t = typeof n == `number` && n === 1 / 0 ? `Infinity` : typeof n == `number` && isNaN(n) ? `NaN` : typeof n == `bigint` ? It(n) : n instanceof Date ? n.toLocaleString() : JSON.stringify(n, (e, t) => typeof t == `bigint` ? It(t) : t, 2), s && s(t, n), d(!0), (navigator.clipboard || {
                            writeText(e) {
                                return new Promise((t, n) => {
                                    var r = document.createElement(`textarea`);
                                    r.style.position = `absolute`, r.style.opacity = `0`, r.style.left = `-99999999px`, r.value = e, document.body.appendChild(r), r.select(), document.execCommand(`copy`) ? t() : n(), r.remove()
                                })
                            }
                        }).writeText(t).then(() => {
                            var e = setTimeout(() => {
                                d(!1), clearTimeout(e)
                            }, 3e3)
                        }).catch(e => {})
                    }
                },
                {
                    render: m
                } = f,
                h = S(f, bn),
                g = b({}, h, o, p, {
                    style: b({}, h.style, o.style, p.style)
                });
            return m && typeof m == `function` && m(b({}, g, {
                "data-copied": u
            }), {
                value: n,
                keyName: t,
                keys: a,
                parentValue: r
            }) || (u ? (0, vn.jsx)(`svg`, b({
                viewBox: `0 0 32 36`
            }, g, {
                children: (0, vn.jsx)(`path`, {
                    d: `M27.5,33 L2.5,33 L2.5,12.5 L27.5,12.5 L27.5,15.2249049 C29.1403264,13.8627542 29.9736597,13.1778155 30,13.1700887 C30,11.9705278 30,10.0804982 30,7.5 C30,6.1 28.9,5 27.5,5 L20,5 C20,2.2 17.8,0 15,0 C12.2,0 10,2.2 10,5 L2.5,5 C1.1,5 0,6.1 0,7.5 L0,33 C0,34.4 1.1,36 2.5,36 L27.5,36 C28.9,36 30,34.4 30,33 L30,26.1114493 L27.5,28.4926435 L27.5,33 Z M7.5,7.5 L10,7.5 C10,7.5 12.5,6.4 12.5,5 C12.5,3.6 13.6,2.5 15,2.5 C16.4,2.5 17.5,3.6 17.5,5 C17.5,6.4 18.8,7.5 20,7.5 L22.5,7.5 C22.5,7.5 25,8.6 25,10 L5,10 C5,8.5 6.1,7.5 7.5,7.5 Z M5,27.5 L10,27.5 L10,25 L5,25 L5,27.5 Z M28.5589286,16 L32,19.6 L21.0160714,30.5382252 L13.5303571,24.2571429 L17.1303571,20.6571429 L21.0160714,24.5428571 L28.5589286,16 Z M17.5,15 L5,15 L5,17.5 L17.5,17.5 L17.5,15 Z M10,20 L5,20 L5,22.5 L10,22.5 L10,20 Z`
                })
            })) : (0, vn.jsx)(`svg`, b({
                viewBox: `0 0 32 36`
            }, g, {
                children: (0, vn.jsx)(`path`, {
                    d: `M27.5,33 L2.5,33 L2.5,12.5 L27.5,12.5 L27.5,20 L30,20 L30,7.5 C30,6.1 28.9,5 27.5,5 L20,5 C20,2.2 17.8,0 15,0 C12.2,0 10,2.2 10,5 L2.5,5 C1.1,5 0,6.1 0,7.5 L0,33 C0,34.4 1.1,36 2.5,36 L27.5,36 C28.9,36 30,34.4 30,33 L30,29 L27.5,29 L27.5,33 Z M7.5,7.5 L10,7.5 C10,7.5 12.5,6.4 12.5,5 C12.5,3.6 13.6,2.5 15,2.5 C16.4,2.5 17.5,3.6 17.5,5 C17.5,6.4 18.8,7.5 20,7.5 L22.5,7.5 C22.5,7.5 25,8.6 25,10 L5,10 C5,8.5 6.1,7.5 7.5,7.5 Z M5,27.5 L10,27.5 L10,25 L5,25 L5,27.5 Z M22.5,21.5 L22.5,16.5 L12.5,24 L22.5,31.5 L22.5,26.5 L32,26.5 L32,21.5 L22.5,21.5 Z M17.5,15 L5,15 L5,17.5 L17.5,17.5 L17.5,15 Z M10,20 L5,20 L5,22.5 L10,22.5 L10,20 Z`
                })
            })))
        }, xn.displayName = `JVR.Copied`
    }));

function Cn() {
    var e = (0, wn.useRef)(null);
    return e.current === null && (e.current = `custom-id-` + Math.random().toString(36).substr(2, 9)), e.current
}
var wn, Tn = e((() => {
        wn = n(g())
    })),
    En, Y, Dn, On, kn, An = e((() => {
        y(), En = n(g()), R(), T(), me(), $t(), on(), fn(), er(), yt(), gn(), Sn(), Tn(), Y = h(), Dn = e => {
            var {
                value: t,
                expandKey: n = ``,
                level: r,
                keys: i = []
            } = e, a = xe(), {
                objectSortKeys: o,
                indentWidth: s,
                collapsed: c,
                shouldExpandNodeInitially: l
            } = L(), u = Array.isArray(t), d = typeof c == `boolean` ? c : typeof c == `number` && r > c, f = a[n] ?? d;
            if (a[n] === void 0 && l && l(f, {
                    value: t,
                    keys: i,
                    level: r
                }) || f) return null;
            var p = u ? Object.entries(t).map(e => [Number(e[0]), e[1]]) : Object.entries(t);
            return o && (p = o === !0 ? p.sort((e, t) => {
                var [n] = e, [r] = t;
                return typeof n == `string` && typeof r == `string` ? n.localeCompare(r) : 0
            }) : p.sort((e, t) => {
                var [n, r] = e, [i, a] = t;
                return typeof n == `string` && typeof i == `string` ? o(n, i, r, a) : 0
            })), (0, Y.jsx)(`div`, {
                className: `w-rjv-wrap`,
                style: {
                    borderLeft: `var(--w-rjv-border-left-width, 1px) var(--w-rjv-line-style, solid) var(--w-rjv-line-color, #ebebeb)`,
                    paddingLeft: s,
                    marginLeft: 6
                },
                children: p.map((e, n) => {
                    var [a, o] = e;
                    return (0, Y.jsx)(kn, {
                        parentValue: t,
                        keyName: a,
                        keys: [...i, a],
                        value: o,
                        level: r
                    }, n)
                })
            })
        }, Dn.displayName = `JVR.KeyValues`, On = e => {
            var {
                keyName: t,
                parentValue: n,
                keys: r,
                value: i
            } = e, {
                highlightUpdates: a
            } = L(), o = typeof t == `number`, s = (0, En.useRef)(null);
            mn({
                value: i,
                highlightUpdates: a,
                highlightContainer: s
            });
            var c = {
                keyName: t,
                value: i,
                keys: r,
                parentValue: n
            };
            return (0, Y.jsxs)(En.Fragment, {
                children: [(0, Y.jsxs)(`span`, {
                    ref: s,
                    children: [(0, Y.jsx)(mt, b({
                        isNumber: o,
                        "data-placement": `left`
                    }, c)), (0, Y.jsx)(an, b({}, c, {
                        children: t
                    })), (0, Y.jsx)(mt, b({
                        isNumber: o,
                        "data-placement": `right`
                    }, c))]
                }), (0, Y.jsx)(ht, b({}, c))]
            })
        }, On.displayName = `JVR.KayName`, kn = e => {
            var {
                keyName: t,
                value: n,
                parentValue: r,
                level: i = 0,
                keys: a = []
            } = e, o = oe(), s = Cn(), c = Array.isArray(n), l = n instanceof Set, u = n instanceof Map, d = n instanceof Date, f = n instanceof URL;
            return n && typeof n == `object` && !c && !l && !u && !d && !f || c || l || u ? (0, Y.jsx)($n, {
                keyName: t,
                value: l ? Array.from(n) : u ? Object.fromEntries(n) : n,
                parentValue: r,
                initialValue: n,
                keys: a,
                level: i + 1
            }) : (0, Y.jsxs)(dn, b({
                className: `w-rjv-line`,
                value: n,
                keyName: t,
                keys: a,
                parentValue: r
            }, {
                onMouseEnter: () => o({
                    [s]: !0
                }),
                onMouseLeave: () => o({
                    [s]: !1
                })
            }, {
                children: [(0, Y.jsx)(On, {
                    keyName: t,
                    value: n,
                    keys: a,
                    parentValue: r
                }), (0, Y.jsx)(Qt, {
                    keyName: t,
                    value: n
                }), (0, Y.jsx)(xn, {
                    keyName: t,
                    value: n,
                    keys: a,
                    parentValue: r,
                    expandKey: s
                })]
            }))
        }, kn.displayName = `JVR.KeyValuesItem`
    })),
    jn, Mn, Nn, Pn, Fn, In = e((() => {
        y(), x(), P(), J(), jn = h(), Mn = [`value`, `keyName`], Nn = [`as`, `render`], Pn = e => {
            var {
                CountInfoExtra: t = {}
            } = N();
            return q(t, e, `CountInfoExtra`), null
        }, Pn.displayName = `JVR.CountInfoExtra`, Fn = e => {
            var {
                value: t = {},
                keyName: n
            } = e, r = S(e, Mn), {
                CountInfoExtra: i = {}
            } = N(), {
                as: a,
                render: o
            } = i, s = S(i, Nn);
            if (!o && !s.children) return null;
            var c = a || `span`,
                l = o && typeof o == `function`,
                u = b({}, s, r);
            return l && o(u, {
                value: t,
                keyName: n
            }) || (0, jn.jsx)(c, b({}, u))
        }, Fn.displayName = `JVR.CountInfoExtraComps`
    })),
    Ln, Rn, zn, Bn, Vn, Hn = e((() => {
        y(), x(), P(), J(), R(), Ln = h(), Rn = [`value`, `keyName`], zn = [`as`, `render`], Bn = e => {
            var {
                CountInfo: t = {}
            } = N();
            return q(t, e, `CountInfo`), null
        }, Bn.displayName = `JVR.CountInfo`, Vn = e => {
            var {
                value: t = {},
                keyName: n
            } = e, r = S(e, Rn), {
                displayObjectSize: i
            } = L(), {
                CountInfo: a = {}
            } = N();
            if (!i) return null;
            var {
                as: o,
                render: s
            } = a, c = S(a, zn), l = o || `span`;
            c.style = b({}, c.style, e.style);
            var u = Object.keys(t).length;
            c.children ||= u + ` item` + (u === 1 ? `` : `s`);
            var d = b({}, c, r);
            return s && typeof s == `function` && s(b({}, d, {
                "data-length": u
            }), {
                value: t,
                keyName: n
            }) || (0, Ln.jsx)(l, b({}, d))
        }, Vn.displayName = `JVR.CountInfoComp`
    })),
    Un, Wn, Gn, Kn, qn = e((() => {
        y(), x(), P(), J(), Un = h(), Wn = [`as`, `render`], Gn = e => {
            var {
                Ellipsis: t = {}
            } = N();
            return q(t, e, `Ellipsis`), null
        }, Gn.displayName = `JVR.Ellipsis`, Kn = e => {
            var {
                isExpanded: t,
                value: n,
                keyName: r
            } = e, {
                Ellipsis: i = {}
            } = N(), {
                as: a,
                render: o
            } = i, s = S(i, Wn), c = a || `span`;
            return o && typeof o == `function` && o(b({}, s, {
                "data-expanded": t
            }), {
                value: n,
                keyName: r
            }) || (!t || typeof n == `object` && Object.keys(n).length == 0 ? null : (0, Un.jsx)(c, b({}, s)))
        }, Kn.displayName = `JVR.EllipsisComp`
    })),
    X, Jn, Yn = e((() => {
        y(), An(), T(), R(), Sn(), In(), Hn(), yt(), qn(), Xt(), X = h(), Jn = e => {
            var {
                keyName: t,
                expandKey: n,
                keys: r = [],
                initialValue: i,
                value: a,
                parentValue: o,
                level: s
            } = e, c = xe(), l = ge(), {
                onExpand: u,
                collapsed: d,
                shouldExpandNodeInitially: f
            } = L(), p = Array.isArray(a), m = a instanceof Set, h = typeof d == `boolean` ? d : typeof d == `number` && s > d, g = typeof a == `object`, _ = c[n] ?? h, v = f && f(_, {
                value: a,
                keys: r,
                level: s
            });
            c[n] === void 0 && v !== void 0 && (_ = v);
            var ee = () => {
                    var e = {
                        expand: !_,
                        value: a,
                        keyid: n,
                        keyName: t
                    };
                    u && u(e), l({
                        [n]: e.expand
                    })
                },
                te = {
                    display: `inline-flex`,
                    alignItems: `center`
                },
                ne = {
                    transform: `rotate(` + (_ ? `-90` : `0`) + `deg)`,
                    transition: `all 0.3s`
                },
                re = Object.keys(a).length !== 0 && (p || m || g),
                ie = {
                    style: te
                };
            re && (ie.onClick = ee);
            var y = {
                keyName: t,
                value: a,
                keys: r,
                parentValue: o
            };
            return (0, X.jsxs)(`span`, b({}, ie, {
                children: [re && (0, X.jsx)(gt, b({
                    style: ne,
                    expandKey: n
                }, y)), (t || typeof t == `number`) && (0, X.jsx)(On, b({}, y)), (0, X.jsx)(Lt, {
                    value: i,
                    keyName: t
                }), (0, X.jsx)(Rt, {
                    value: i,
                    keyName: t
                }), (0, X.jsx)(_t, b({
                    isBrackets: p || m
                }, y)), (0, X.jsx)(Kn, {
                    keyName: t,
                    value: a,
                    isExpanded: _
                }), (0, X.jsx)(vt, b({
                    isVisiable: _ || !re,
                    isBrackets: p || m
                }, y)), (0, X.jsx)(Vn, {
                    value: a,
                    keyName: t
                }), (0, X.jsx)(Fn, {
                    value: a,
                    keyName: t
                }), (0, X.jsx)(xn, {
                    keyName: t,
                    value: a,
                    expandKey: n,
                    parentValue: o,
                    keys: r
                })]
            }))
        }, Jn.displayName = `JVR.NestedOpen`
    })),
    Xn, Zn, Qn, $n, er = e((() => {
        y(), x(), Xn = n(g()), St(), Yn(), An(), Tn(), me(), Zn = h(), Qn = [`className`, `children`, `parentValue`, `keyid`, `level`, `value`, `initialValue`, `keys`, `keyName`], $n = (0, Xn.forwardRef)((e, t) => {
            var {
                className: n = ``,
                parentValue: r,
                level: i = 1,
                value: a,
                initialValue: o,
                keys: s,
                keyName: c
            } = e, l = S(e, Qn), u = oe(), d = Cn();
            return (0, Zn.jsxs)(`div`, b({
                className: [n, `w-rjv-inner`].filter(Boolean).join(` `),
                ref: t
            }, l, {
                onMouseEnter: () => u({
                    [d]: !0
                }),
                onMouseLeave: () => u({
                    [d]: !1
                })
            }, {
                children: [(0, Zn.jsx)(Jn, {
                    expandKey: d,
                    value: a,
                    level: i,
                    keys: s,
                    parentValue: r,
                    keyName: c,
                    initialValue: o
                }), (0, Zn.jsx)(Dn, {
                    expandKey: d,
                    value: a,
                    level: i,
                    keys: s,
                    parentValue: r,
                    keyName: c
                }), (0, Zn.jsx)(xt, {
                    expandKey: d,
                    value: a,
                    level: i,
                    keys: s
                })]
            }))
        }), $n.displayName = `JVR.Container`
    })),
    tr, nr = e((() => {
        j(), J(), tr = e => {
            var {
                BraceLeft: t = {}
            } = A();
            return G(t, e, `BraceLeft`), null
        }, tr.displayName = `JVR.BraceLeft`
    })),
    rr, ir = e((() => {
        j(), J(), rr = e => {
            var {
                BraceRight: t = {}
            } = A();
            return G(t, e, `BraceRight`), null
        }, rr.displayName = `JVR.BraceRight`
    })),
    ar, or = e((() => {
        j(), J(), ar = e => {
            var {
                BracketsLeft: t = {}
            } = A();
            return G(t, e, `BracketsLeft`), null
        }, ar.displayName = `JVR.BracketsLeft`
    })),
    sr, cr = e((() => {
        j(), J(), sr = e => {
            var {
                BracketsRight: t = {}
            } = A();
            return G(t, e, `BracketsRight`), null
        }, sr.displayName = `JVR.BracketsRight`
    })),
    lr, ur = e((() => {
        j(), J(), lr = e => {
            var {
                Arrow: t = {}
            } = A();
            return G(t, e, `Arrow`), null
        }, lr.displayName = `JVR.Arrow`
    })),
    dr, fr = e((() => {
        j(), J(), dr = e => {
            var {
                Colon: t = {}
            } = A();
            return G(t, e, `Colon`), null
        }, dr.displayName = `JVR.Colon`
    })),
    pr, mr = e((() => {
        j(), J(), pr = e => {
            var {
                Quote: t = {}
            } = A();
            return G(t, e, `Quote`), null
        }, pr.displayName = `JVR.Quote`
    })),
    hr, gr = e((() => {
        j(), J(), hr = e => {
            var {
                ValueQuote: t = {}
            } = A();
            return G(t, e, `ValueQuote`), null
        }, hr.displayName = `JVR.ValueQuote`
    })),
    _r, vr = e((() => {
        O(), J(), _r = e => {
            var {
                Bigint: t = {}
            } = D();
            return K(t, e, `Bigint`), null
        }, _r.displayName = `JVR.Bigint`
    })),
    yr, br = e((() => {
        O(), J(), yr = e => {
            var {
                Date: t = {}
            } = D();
            return K(t, e, `Date`), null
        }, yr.displayName = `JVR.Date`
    })),
    xr, Sr = e((() => {
        O(), J(), xr = e => {
            var {
                False: t = {}
            } = D();
            return K(t, e, `False`), null
        }, xr.displayName = `JVR.False`
    })),
    Cr, wr = e((() => {
        O(), J(), Cr = e => {
            var {
                Float: t = {}
            } = D();
            return K(t, e, `Float`), null
        }, Cr.displayName = `JVR.Float`
    })),
    Tr, Er = e((() => {
        O(), J(), Tr = e => {
            var {
                Int: t = {}
            } = D();
            return K(t, e, `Int`), null
        }, Tr.displayName = `JVR.Int`
    })),
    Dr, Or = e((() => {
        O(), J(), Dr = e => {
            var {
                Map: t = {}
            } = D();
            return K(t, e, `Map`), null
        }, Dr.displayName = `JVR.Map`
    })),
    kr, Ar = e((() => {
        O(), J(), kr = e => {
            var {
                Nan: t = {}
            } = D();
            return K(t, e, `Nan`), null
        }, kr.displayName = `JVR.Nan`
    })),
    jr, Mr = e((() => {
        O(), J(), jr = e => {
            var {
                Null: t = {}
            } = D();
            return K(t, e, `Null`), null
        }, jr.displayName = `JVR.Null`
    })),
    Nr, Pr = e((() => {
        O(), J(), Nr = e => {
            var {
                Set: t = {}
            } = D();
            return K(t, e, `Set`), null
        }, Nr.displayName = `JVR.Set`
    })),
    Fr, Ir = e((() => {
        O(), J(), Fr = e => {
            var {
                Str: t = {}
            } = D();
            return K(t, e, `Str`), null
        }, Fr.displayName = `JVR.StringText`
    })),
    Lr, Rr = e((() => {
        O(), J(), Lr = e => {
            var {
                True: t = {}
            } = D();
            return K(t, e, `True`), null
        }, Lr.displayName = `JVR.True`
    })),
    zr, Br = e((() => {
        O(), J(), zr = e => {
            var {
                Undefined: t = {}
            } = D();
            return K(t, e, `Undefined`), null
        }, zr.displayName = `JVR.Undefined`
    })),
    Vr, Hr = e((() => {
        O(), J(), Vr = e => {
            var {
                Url: t = {}
            } = D();
            return K(t, e, `Url`), null
        }, Vr.displayName = `JVR.Url`
    })),
    Ur, Wr = e((() => {
        P(), J(), Ur = e => {
            var {
                Copied: t = {}
            } = N();
            return q(t, e, `Copied`), null
        }, Ur.displayName = `JVR.Copied`
    })),
    Gr, Kr, qr, Z, Jr = e((() => {
        y(), x(), Gr = n(g()), R(), er(), nr(), ir(), or(), cr(), ur(), fr(), mr(), gr(), vr(), br(), Sr(), wr(), Er(), Or(), Ar(), Mr(), Pr(), Ir(), Rr(), Br(), Hr(), Wr(), Hn(), In(), qn(), on(), fn(), Kr = h(), R(), T(), me(), j(), O(), yt(), qr = [`className`, `style`, `value`, `children`, `collapsed`, `shouldExpandNodeInitially`, `indentWidth`, `displayObjectSize`, `shortenTextAfterLength`, `stringEllipsis`, `highlightUpdates`, `enableClipboard`, `displayDataTypes`, `objectSortKeys`, `onExpand`, `onCopied`], Z = (0, Gr.forwardRef)((e, t) => {
            var {
                className: n = ``,
                style: r,
                value: i,
                children: a,
                collapsed: o,
                shouldExpandNodeInitially: s,
                indentWidth: c = 15,
                displayObjectSize: l = !0,
                shortenTextAfterLength: u = 30,
                stringEllipsis: d,
                highlightUpdates: f = !0,
                enableClipboard: p = !0,
                displayDataTypes: m = !0,
                objectSortKeys: h = !1,
                onExpand: g,
                onCopied: _
            } = e, v = S(e, qr), ee = b({
                lineHeight: 1.4,
                fontFamily: `var(--w-rjv-font-family, Menlo, monospace)`,
                color: `var(--w-rjv-color, #002b36)`,
                backgroundColor: `var(--w-rjv-background-color, #00000000)`,
                fontSize: 13
            }, r), te = [`w-json-view-container`, `w-rjv`, n].filter(Boolean).join(` `);
            return (0, Kr.jsxs)(nt, {
                initialState: {
                    value: i,
                    objectSortKeys: h,
                    indentWidth: c,
                    shouldExpandNodeInitially: s,
                    displayObjectSize: l,
                    collapsed: o,
                    enableClipboard: p,
                    shortenTextAfterLength: u,
                    stringEllipsis: d,
                    highlightUpdates: f,
                    onCopied: _,
                    onExpand: g
                },
                initialTypes: {
                    displayDataTypes: m
                },
                children: [(0, Kr.jsx)($n, b({
                    value: i
                }, v, {
                    ref: t,
                    className: te,
                    style: ee
                })), a]
            })
        }), Z.Bigint = _r, Z.Date = yr, Z.False = xr, Z.Float = Cr, Z.Int = Tr, Z.Map = Dr, Z.Nan = kr, Z.Null = jr, Z.Set = Nr, Z.String = Fr, Z.True = Lr, Z.Undefined = zr, Z.Url = Vr, Z.ValueQuote = hr, Z.Arrow = lr, Z.Colon = dr, Z.Quote = pr, Z.Ellipsis = Gn, Z.BraceLeft = tr, Z.BraceRight = rr, Z.BracketsLeft = ar, Z.BracketsRight = sr, Z.Copied = Ur, Z.CountInfo = Bn, Z.CountInfoExtra = Pn, Z.KeyName = rn, Z.Row = un, Z.displayName = `JVR.JsonView`
    })),
    Yr, Xr = e((() => {
        Yr = {
            "--w-rjv-font-family": `monospace`,
            "--w-rjv-color": `#6f42c1`,
            "--w-rjv-key-string": `#6f42c1`,
            "--w-rjv-background-color": `#ffffff`,
            "--w-rjv-line-color": `#ddd`,
            "--w-rjv-arrow-color": `#6e7781`,
            "--w-rjv-edit-color": `var(--w-rjv-color)`,
            "--w-rjv-info-color": `#0000004d`,
            "--w-rjv-update-color": `#ebcb8b`,
            "--w-rjv-copied-color": `#002b36`,
            "--w-rjv-copied-success-color": `#28a745`,
            "--w-rjv-curlybraces-color": `#6a737d`,
            "--w-rjv-colon-color": `#24292e`,
            "--w-rjv-brackets-color": `#6a737d`,
            "--w-rjv-quotes-color": `var(--w-rjv-key-string)`,
            "--w-rjv-quotes-string-color": `var(--w-rjv-type-string-color)`,
            "--w-rjv-type-string-color": `#032f62`,
            "--w-rjv-type-int-color": `#005cc5`,
            "--w-rjv-type-float-color": `#005cc5`,
            "--w-rjv-type-bigint-color": `#005cc5`,
            "--w-rjv-type-boolean-color": `#d73a49`,
            "--w-rjv-type-date-color": `#005cc5`,
            "--w-rjv-type-url-color": `#0969da`,
            "--w-rjv-type-null-color": `#d73a49`,
            "--w-rjv-type-nan-color": `#859900`,
            "--w-rjv-type-undefined-color": `#005cc5`
        }
    })),
    Zr, Qr = e((() => {
        Zr = {
            "--w-rjv-font-family": `monospace`,
            "--w-rjv-color": `#9cdcfe`,
            "--w-rjv-key-string": `#9cdcfe`,
            "--w-rjv-background-color": `#1e1e1e`,
            "--w-rjv-line-color": `#36334280`,
            "--w-rjv-arrow-color": `#838383`,
            "--w-rjv-edit-color": `var(--w-rjv-color)`,
            "--w-rjv-info-color": `#9c9c9c7a`,
            "--w-rjv-update-color": `#9cdcfe`,
            "--w-rjv-copied-color": `#9cdcfe`,
            "--w-rjv-copied-success-color": `#28a745`,
            "--w-rjv-curlybraces-color": `#d4d4d4`,
            "--w-rjv-colon-color": `#d4d4d4`,
            "--w-rjv-brackets-color": `#d4d4d4`,
            "--w-rjv-quotes-color": `var(--w-rjv-key-string)`,
            "--w-rjv-quotes-string-color": `var(--w-rjv-type-string-color)`,
            "--w-rjv-type-string-color": `#ce9178`,
            "--w-rjv-type-int-color": `#b5cea8`,
            "--w-rjv-type-float-color": `#b5cea8`,
            "--w-rjv-type-bigint-color": `#b5cea8`,
            "--w-rjv-type-boolean-color": `#569cd6`,
            "--w-rjv-type-date-color": `#b5cea8`,
            "--w-rjv-type-url-color": `#3b89cf`,
            "--w-rjv-type-null-color": `#569cd6`,
            "--w-rjv-type-nan-color": `#859900`,
            "--w-rjv-type-undefined-color": `#569cd6`
        }
    })),
    $r = t({
        JsonViewer: () => ti
    });

function ei(e, {
    parentPath: t,
    key: n,
    filters: r
}) {
    function a(e) {
        return e ? r.some(t => e.startsWith(t)) : !1
    }
    if (i(e))
        for (let i of e) ei(i, {
            parentPath: t,
            key: n,
            filters: r
        });
    else if (ne(e))
        for (let [n, i] of Object.entries(e)) {
            let o = t ? `${t}.${n}` : n;
            a(o) ? delete e[n] : ei(i, {
                parentPath: o,
                key: n,
                filters: r
            })
        }
}

function ti({
    json: e,
    jsonViewProps: t,
    jsonFiltersKey: n = `default`,
    isCompact: r = !1,
    minHeight: i = 360,
    useContainedFilterPanel: a = !1
}) {
    let o = c(),
        [s, l] = (0, Q.useState)(e),
        {
            style: u,
            ...d
        } = t ?? {};
    (0, Q.useEffect)(() => {
        l(e)
    }, [e]);
    let f = t => {
        if (!t) l(e);
        else {
            let n = ne(e) ? m(e) : e,
                r = t.filter(e => e.startsWith(`!`)).map(e => e.slice(1)),
                i = t.filter(e => !e.startsWith(`!`) && !e.startsWith(`#`)).reduce((e, t) => (e[t] = ni(n, t), e), {});
            ei(i, {
                parentPath: null,
                filters: r,
                key: ``
            }), l(i)
        }
    };
    return (0, $.jsxs)(`div`, {
        className: p(`relative`),
        style: !r && i !== void 0 ? {
            minHeight: i
        } : void 0,
        children: [(0, $.jsx)(Z, {
            enableClipboard: !0,
            displayDataTypes: !1,
            displayObjectSize: !1,
            value: s,
            style: {
                ...o ? Zr : Yr,
                whiteSpace: `pre-wrap`,
                ...u
            },
            shortenTextAfterLength: 120,
            ...d,
            children: (0, $.jsx)(Z.String, {
                render: (e, {
                    value: t
                }) => {
                    if (e[`data-type`] === `string`) {
                        let n = re(t);
                        if (n) return (0, $.jsx)(`span`, {
                            ...e,
                            children: n
                        })
                    }
                }
            })
        }), r ? null : (0, $.jsx)(`div`, {
            className: p(`absolute end-0 top-0 flex w-[450px] flex-col gap-2`, a && `max-w-full`),
            children: (0, $.jsx)(ri, {
                filtersKey: n,
                onFiltersChanged: f,
                useContainedFilterPanel: a
            })
        })]
    })
}

function ni(e, t) {
    if (!e) return {};

    function n(e) {
        let t = `<DOT_PLACEHOLDER>`;
        return e.replace(/\\\./g, t).split(`.`).map(e => e.replace(RegExp(t, `g`), `.`))
    }
    let r = n(t),
        a = e;
    for (let e of r) a = i(a) ? a.flatMap(t => u(t, e)) : u(a, e);
    return a
}

function ri({
    filtersKey: e,
    onFiltersChanged: t,
    useContainedFilterPanel: n
}) {
    let {
        jsonViewerFilters: r
    } = te(), [i, a] = (0, Q.useState)(r[e] ?? ``), [o, s] = (0, Q.useState)(!1), [c, u] = (0, Q.useState)(!1);
    (0, Q.useEffect)(() => {
        d()
    }, []);
    let d = n => {
        let a = n ?? i.trim();
        if (_({
                jsonViewerFilters: {
                    ...r,
                    [e]: a
                }
            }), !a) {
            t(null), u(!1);
            return
        }
        t(a.split(/[\n,]+/).map(e => e.trim()).filter(e => e)), u(!0)
    };
    return (0, $.jsxs)(`div`, {
        className: p(o && `bg-token-bg-primary`, o && n && `border-token-border-default rounded-lg border p-3`),
        children: [(0, $.jsx)(`div`, {
            className: `flex justify-end`,
            children: (0, $.jsxs)(l, {
                color: `ghost`,
                size: `small`,
                onClick: () => s(!o),
                children: [`JSON Filter`, c && (0, $.jsx)($.Fragment, {
                    children: `\xA0🔴`
                })]
            })
        }), o && (0, $.jsxs)(`div`, {
            className: p(`flex flex-col gap-2`, n && `w-full max-w-full`),
            children: [(0, $.jsx)(`div`, {
                className: `text-token-text-secondary text-xs`,
                children: `Filter JSON fields using newline-separated "lodash.get" syntax`
            }), (0, $.jsx)(`textarea`, {
                className: p(`border-token-border-default bg-token-bg-primary text-token-text-primary focus:border-token-text-primary focus:ring-token-text-primary rounded-lg border text-sm focus:shadow-none focus:outline-hidden`, n && `w-full max-w-full`),
                value: i,
                onChange: e => a(e.target.value),
                rows: 5,
                placeholder: [`status`, `metadata.model_switcher_deny`, `!metadata.model_switcher_deny.slug`, `# commented out filter`].join(`
`)
            }), (0, $.jsxs)(`div`, {
                className: `flex justify-end gap-2`,
                children: [(0, $.jsx)(l, {
                    color: `secondary`,
                    size: `small`,
                    disabled: !c,
                    onClick: () => {
                        a(``), d(``)
                    },
                    children: `Clear`
                }), (0, $.jsx)(l, {
                    color: `primary`,
                    size: `small`,
                    onClick: () => d(),
                    children: `Filter`
                })]
            })]
        })]
    })
}
var Q, $, ii = e((() => {
    r(), v(), ie(), d(), Jr(), Xr(), Qr(), a(), o(), s(), f(), ee(), Q = n(g()), $ = h()
}));
export {
    ii as n, $r as r, ti as t
};
//# sourceMappingURL=5a6ff04b-dxs6wezapyu1kujm.js.map
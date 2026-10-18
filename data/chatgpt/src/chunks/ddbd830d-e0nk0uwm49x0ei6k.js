import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    M4 as n,
    R4 as r,
    b5 as i,
    y5 as a
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as o,
    Kt as s,
    Ln as c,
    Rn as l,
    Vn as u,
    wn as d,
    zn as f
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Din as p,
    Ein as m,
    Oin as h,
    RRt as g,
    URt as _,
    uon as v
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Bm as ee,
    Ff as y,
    Hm as b,
    If as x,
    Lf as te,
    Nf as S,
    Vm as ne,
    _f as C,
    af as re,
    bf as w,
    df as ie,
    ff as T,
    hf as E,
    kf as D,
    lf as O,
    mf as k,
    pf as A,
    uf as j,
    vf as M,
    yf as N,
    zm as ae
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";

function P(e, t) {
    let n = Math.abs(t.top - e.y),
        r = Math.abs(t.bottom - e.y),
        i = Math.abs(t.right - e.x),
        a = Math.abs(t.left - e.x);
    switch (Math.min(n, r, i, a)) {
        case a:
            return `left`;
        case i:
            return `right`;
        case n:
            return `top`;
        case r:
            return `bottom`;
        default:
            throw Error(`unreachable`)
    }
}

function F(e, t, n = 5) {
    let r = [];
    switch (t) {
        case `top`:
            r.push({
                x: e.x - n,
                y: e.y + n
            }, {
                x: e.x + n,
                y: e.y + n
            });
            break;
        case `bottom`:
            r.push({
                x: e.x - n,
                y: e.y - n
            }, {
                x: e.x + n,
                y: e.y - n
            });
            break;
        case `left`:
            r.push({
                x: e.x + n,
                y: e.y - n
            }, {
                x: e.x + n,
                y: e.y + n
            });
            break;
        case `right`:
            r.push({
                x: e.x - n,
                y: e.y - n
            }, {
                x: e.x - n,
                y: e.y + n
            });
            break
    }
    return r
}

function I(e) {
    let {
        top: t,
        right: n,
        bottom: r,
        left: i
    } = e;
    return [{
        x: i,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: i,
        y: r
    }]
}

function L(e, t) {
    let {
        x: n,
        y: r
    } = e, i = !1, a = t.at(-1);
    for (let e of t) a && e.y > r != a.y > r && n < (a.x - e.x) * (r - e.y) / (a.y - e.y) + e.x && (i = !i), a = e;
    return i
}

function R(e) {
    let t = e.slice();
    return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : +(e.y > t.y)), z(t)
}

function z(e) {
    if (e.length <= 1) return e.slice();
    let t = [];
    for (let n of e) {
        for (; t.length >= 2;) {
            let e = t.at(-1),
                r = t.at(-2);
            if (e && r && (e.x - r.x) * (n.y - r.y) >= (e.y - r.y) * (n.x - r.x)) t.pop();
            else break
        }
        t.push(n)
    }
    t.pop();
    let n = [];
    for (let t of [...e].reverse()) {
        for (; n.length >= 2;) {
            let e = n.at(-1),
                r = n.at(-2);
            if (e && r && (e.x - r.x) * (t.y - r.y) >= (e.y - r.y) * (t.x - r.x)) n.pop();
            else break
        }
        n.push(t)
    }
    return n.pop(), t.length === 1 && n.length === 1 && t[0]?.x === n[0]?.x && t[0]?.y === n[0]?.y ? t : t.concat(n)
}
var B, oe = e((() => {
        B = (e, t) => {
            let n = e.currentTarget;
            if (!(n instanceof HTMLElement)) return [];
            let r = {
                    x: e.clientX,
                    y: e.clientY
                },
                i = F(r, P(r, n.getBoundingClientRect())),
                a = I(t.getBoundingClientRect());
            return R([...i, ...a])
        }
    })),
    se, ce, V, le = e((() => {
        se = t(u(), 1), ce = (0, se.createContext)(null), V = () => {
            let e = (0, se.use)(ce);
            if (!e) throw Error(`Popover components must be wrapped in <Popover />`);
            return e
        }
    })),
    ue, H, de, fe, pe, me, he = e((() => {
        ue = `_9pcEia_dark`, H = `_9pcEia_light`, de = `_9pcEia_Popover`, fe = `_9pcEia_shake`, pe = `_9pcEia_Transition`, me = {
            dark: ue,
            light: H,
            Popover: de,
            shake: fe,
            Transition: pe
        }
    })),
    U, W, ge, _e, ve, ye, be, xe = e((() => {
        i(), E(), U = t(u(), 1), g(), ie(), A(), y(), O(), re(), oe(), le(), he(), W = o(), ge = ({
            open: e,
            onOpenChange: t,
            showOnHover: n = !1,
            hoverOpenDelay: r = 150,
            children: i
        }) => {
            let [a, o] = (0, U.useState)(!1), [s, c] = (0, U.useState)(!1), l = (0, U.useRef)(null), [u, d] = (0, U.useState)(null), f = (0, U.useRef)(null), p = (0, U.useRef)(void 0), m = (0, U.useRef)(!1), h = (0, U.useRef)(!1), g = e ?? a, [v, ee] = (0, U.useState)(!1);
            _(() => ee(!1), v ? 500 : null);
            let y = k(t),
                b = k(e => {
                    clearTimeout(p.current), g !== e && (e || (c(!1), n && m.current && l.current?.focus(), m.current = !1), y.current?.(e), o(e), n && ee(e))
                }),
                x = (0, U.useCallback)(e => {
                    b.current(e)
                }, [b]),
                te = (0, U.useCallback)(() => {
                    p.current = setTimeout(() => x(!0), r)
                }, [x, r]),
                S = (0, U.useCallback)(() => {
                    clearTimeout(p.current)
                }, []);
            return (0, U.useEffect)(() => () => {
                clearTimeout(p.current)
            }, []), (0, W.jsx)(ce, {
                value: (0, U.useMemo)(() => ({
                    open: g,
                    setOpen: x,
                    shake: s,
                    setShake: c,
                    showOnHover: n,
                    temporarilyPreventClickToClose: v,
                    onTriggerEnter: te,
                    onTriggerLeave: S,
                    isPointerInTransitRef: h,
                    triggerRef: l,
                    triggerElement: u,
                    setTriggerElement: d,
                    contentRef: f,
                    hoverOpenFocusedWithTab: m
                }), [g, x, s, c, n, v, m, h, u, te, S]),
                children: (0, W.jsx)(N, {
                    open: g,
                    onOpenChange: x,
                    modal: !1,
                    children: i
                })
            })
        }, _e = ({
            children: e,
            onPointerDown: t,
            onClick: n
        }) => {
            let {
                setOpen: r,
                showOnHover: i,
                temporarilyPreventClickToClose: a,
                onTriggerEnter: o,
                onTriggerLeave: s,
                isPointerInTransitRef: c,
                triggerRef: l,
                setTriggerElement: u,
                contentRef: d
            } = V(), f = (0, U.useRef)(!1), p = (0, U.useCallback)(e => {
                l.current = e, u(e)
            }, [l, u]), m = e => {
                e.currentTarget.nodeName.toLocaleLowerCase() !== `a` && a && (e.preventDefault(), e.stopPropagation())
            };
            return (0, W.jsx)(w, {
                asChild: !0,
                ref: p,
                onPointerDown: e => {
                    m(e), t?.(e)
                },
                onClick: e => {
                    m(e), n?.(e)
                },
                onPointerMove: i ? e => {
                    e.pointerType !== `touch` && !f.current && !c.current && (o(), f.current = !0)
                } : void 0,
                onPointerLeave: i ? () => {
                    f.current &&= (s(), !1)
                } : void 0,
                onFocus: i ? () => r(!0) : void 0,
                onBlur: i ? () => {
                    setTimeout(() => {
                        d.current?.contains(document.activeElement) || r(!1)
                    }, 50)
                } : void 0,
                children: e
            })
        }, ve = ({
            children: e,
            avoidCollisions: t,
            width: n,
            minWidth: r,
            maxWidth: i,
            side: o,
            sideOffset: s = 8,
            align: c,
            alignOffset: l,
            translucent: u,
            className: d,
            autoFocus: f = !0,
            onCloseAutoFocus: p,
            preventCloseOnFocusOutside: m = !1
        }) => {
            let {
                showOnHover: h,
                shake: g,
                contentRef: _
            } = V();
            return (0, W.jsx)(C, {
                forceMount: !0,
                ref: _,
                className: a(me.Popover, d),
                style: te({
                    "popover-width": n,
                    "popover-min-width": r,
                    "popover-max-width": i
                }),
                onCloseAutoFocus: p ?? (h ? x : void 0),
                "data-animate": g ? `shake` : void 0,
                "data-translucent": u ? `true` : void 0,
                side: o,
                sideOffset: s,
                align: c,
                alignOffset: l ?? (c === `center` ? 0 : -5),
                avoidCollisions: t ?? !0,
                hideWhenDetached: !0,
                collisionPadding: 20,
                onFocusOutside: m ? x : void 0,
                onOpenAutoFocus: e => {
                    e.preventDefault();
                    let t = _.current;
                    f && !h && t && !t.contains(document.activeElement) && t.focus({
                        preventScroll: !0
                    })
                },
                onEscapeKeyDown: x,
                onKeyDown: e => {
                    let t = _.current;
                    if (t && e.target === t && e.key === `Tab` && e.shiftKey) {
                        e.preventDefault(), e.stopPropagation();
                        let n = S(t);
                        n[n.length - 1]?.focus()
                    }
                },
                children: e
            })
        }, ye = e => {
            let {
                setOpen: t,
                triggerRef: n,
                contentRef: r,
                isPointerInTransitRef: i,
                hoverOpenFocusedWithTab: a
            } = V(), [o, s] = (0, U.useState)(null), c = (0, U.useCallback)(() => {
                s(null), i.current = !1
            }, [i]), l = (0, U.useCallback)((e, t) => {
                let n = B(e, t);
                s(n), i.current = !0
            }, [i]);
            return (0, U.useEffect)(() => () => c(), [c]), (0, U.useEffect)(() => {
                let e = n.current,
                    t = r.current;
                if (!e || !t) return;
                let i = e => l(e, t),
                    a = t => l(t, e);
                return e.addEventListener(`pointerleave`, i), t.addEventListener(`pointerleave`, a), () => {
                    e.removeEventListener(`pointerleave`, i), t.removeEventListener(`pointerleave`, a)
                }
            }, [r, n, l, c]), (0, U.useEffect)(() => {
                if (!o) return;
                let e = e => {
                    let i = n.current,
                        a = r.current,
                        s = e.target;
                    if (!(s instanceof Element)) return;
                    let l = {
                            x: e.clientX,
                            y: e.clientY
                        },
                        u = i?.contains(s) || a?.contains(s),
                        d = !L(l, o),
                        f = s.hasAttribute(`aria-haspopup`);
                    u ? c() : (d || f) && (c(), t(!1))
                };
                return document.addEventListener(`pointermove`, e), () => document.removeEventListener(`pointermove`, e)
            }, [o, t, c, n, r]), (0, U.useEffect)(() => {
                let e = t => {
                    if (r.current && t.key === `Tab` && !t.shiftKey) {
                        let [n] = S(r.current);
                        n && (t.preventDefault(), n.focus(), a.current = !0, document.removeEventListener(`keydown`, e))
                    }
                };
                return document.addEventListener(`keydown`, e), () => {
                    document.removeEventListener(`keydown`, e)
                }
            }, [r, a]), (0, W.jsx)(ve, {
                ...e
            })
        }, be = e => {
            let {
                open: t,
                showOnHover: n,
                setOpen: r,
                triggerElement: i
            } = V(), a = j() ?? i?.closest(`[role="dialog"]`) ?? void 0;
            return T(t, () => {
                r(!1)
            }), (0, W.jsx)(M, {
                forceMount: !0,
                container: a,
                children: (0, W.jsx)(D, {
                    enterDuration: 600,
                    exitDuration: 300,
                    className: me.Transition,
                    children: t && (n ? (0, W.jsx)(ye, {
                        ...e
                    }, `popover-hover`) : (0, W.jsx)(ve, {
                        ...e
                    }, `popover`))
                })
            })
        }, ge.Trigger = _e, ge.Content = be
    })),
    Se = e((() => {
        u(), s(), y(), le()
    })),
    G = e((() => {
        xe(), Se()
    })),
    Ce, K = e((() => {
        r(), v(), Ce = ({
            intl: e,
            amount: t,
            currency: r
        }) => {
            let i = n(r),
                a = t / 10 ** i;
            return e.formatNumber(a, {
                currency: r,
                style: `currency`,
                minimumFractionDigits: i,
                maximumFractionDigits: i
            })
        }
    })),
    we, q, Te, Ee = e((() => {
        we = o(), u(), q = e => (0, we.jsx)(`svg`, {
            width: 16,
            height: 16,
            viewBox: `0 0 16 16`,
            fill: `currentColor`,
            xmlns: `http://www.w3.org/2000/svg`,
            ...e,
            children: (0, we.jsx)(`path`, {
                d: `M12.6289 5.87887C12.8339 5.67384 13.166 5.67384 13.3711 5.87887C13.5761 6.08389 13.5761 6.41603 13.3711 6.62105L8.60641 11.3857C8.27129 11.7204 7.72863 11.7204 7.39352 11.3857L2.62887 6.62105C2.42384 6.41603 2.42384 6.08389 2.62887 5.87887C2.83389 5.67384 3.16603 5.67384 3.37105 5.87887L7.99996 10.5078L12.6289 5.87887Z`,
                fill: `currentColor`
            })
        }), Te = q
    })),
    J, De, Oe, Y = e((() => {
        J = o(), u(), De = e => (0, J.jsx)(`svg`, {
            width: 20,
            height: 20,
            viewBox: `0 0 20 20`,
            fill: `currentColor`,
            xmlns: `http://www.w3.org/2000/svg`,
            ...e,
            children: (0, J.jsx)(`path`, {
                d: `M16.6665 10.665H3.3335C2.96623 10.665 2.66846 10.3673 2.66846 10C2.66846 9.63273 2.96623 9.33496 3.3335 9.33496H16.6665C17.0338 9.33496 17.3315 9.63273 17.3315 10C17.3315 10.3673 17.0338 10.665 16.6665 10.665Z`,
                fill: `currentColor`
            })
        }), Oe = De
    })),
    X, ke, Ae, je = e((() => {
        X = o(), u(), ke = e => (0, X.jsx)(`svg`, {
            width: 20,
            height: 20,
            viewBox: `0 0 20 20`,
            fill: `currentColor`,
            xmlns: `http://www.w3.org/2000/svg`,
            ...e,
            children: (0, X.jsx)(`path`, {
                fillRule: `evenodd`,
                clipRule: `evenodd`,
                d: `M11.6258 3.30375C13.0516 1.88123 15.3202 1.91012 16.6805 3.29496C18.0834 4.64996 18.1292 6.92825 16.6893 8.36821L9.68929 15.3682L9.68832 15.3672C8.9762 16.1131 8.0665 16.6184 7.11605 16.8389L7.11507 16.8399L3.24789 17.7276L3.24691 17.7256C3.08016 17.7653 2.74207 17.799 2.4725 17.5303C2.20162 17.2601 2.23613 16.9199 2.27621 16.753H2.27425L3.1639 12.8956C3.38813 11.8986 3.89924 11.028 4.6014 10.3272L11.6258 3.30375ZM5.54183 11.2686C5.00143 11.8078 4.62462 12.4592 4.46078 13.1905L4.4598 13.1944L3.7557 16.2461L6.81722 15.543C7.52306 15.3789 8.20539 15.0001 8.73617 14.4405L14.3944 8.78129L11.2118 5.5977L5.54183 11.2686ZM15.742 4.23637C14.9045 3.37296 13.4757 3.3368 12.5653 4.24516L12.1522 4.65727L15.3348 7.84086L15.7489 7.42778C16.6655 6.51112 16.6228 5.08792 15.7577 4.252L15.742 4.23637Z`,
                fill: `currentColor`
            })
        }), Ae = ke
    })),
    Me, Ne, Pe, Fe = e((() => {
        Me = o(), u(), Ne = e => (0, Me.jsx)(`svg`, {
            width: 20,
            height: 20,
            viewBox: `0 0 20 20`,
            fill: `currentColor`,
            xmlns: `http://www.w3.org/2000/svg`,
            ...e,
            children: (0, Me.jsx)(`path`, {
                d: `M10.0005 2.66846C10.3675 2.66872 10.6655 2.96639 10.6655 3.3335V9.33545H16.6665C17.0338 9.33545 17.3315 9.63322 17.3315 10.0005C17.3313 10.3675 17.0336 10.6655 16.6665 10.6655H10.6655V16.6665C10.6655 17.0336 10.3675 17.3313 10.0005 17.3315C9.63322 17.3315 9.33545 17.0338 9.33545 16.6665V10.6655H3.3335C2.96639 10.6655 2.66872 10.3675 2.66846 10.0005C2.66846 9.63322 2.96623 9.33545 3.3335 9.33545H9.33545V3.3335C9.33545 2.96623 9.63322 2.66846 10.0005 2.66846Z`,
                fill: `currentColor`
            })
        }), Pe = Ne
    }));

function Ie(e) {
    "use forget";
    let t = (0, He.c)(89),
        {
            amountPerCredit: n,
            creditQuantityStep: r,
            maximumCreditPurchaseQuantity: i,
            minimumChargeMinorUnits: o,
            minimumCreditPurchaseQuantityFloor: s,
            minorUnitExponent: c,
            onSelectCreditQuantity: l,
            pendingCreditsLabel: u,
            pendingDisplayAmountLabel: d,
            presetCreditQuantities: h,
            pricingCurrency: g,
            selectedCreditQuantity: _,
            variant: v
        } = e,
        y = v === void 0 ? `default` : v,
        b = f(),
        [x, te] = (0, Ue.useState)(!1),
        S;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (S = {
        kind: Q.Preset
    }, t[0] = S) : S = t[0];
    let [C, re] = (0, Ue.useState)(S), w, ie, T, E, D, O, k, A, j, M, N, P, F, I, L;
    if (t[1] !== n || t[2] !== C.creditQuantityDraft || t[3] !== C.kind || t[4] !== r || t[5] !== b || t[6] !== x || t[7] !== i || t[8] !== o || t[9] !== s || t[10] !== c || t[11] !== l || t[12] !== u || t[13] !== d || t[14] !== h || t[15] !== g || t[16] !== _ || t[17] !== y) {
        let e = ne({
                amountPerCredit: n,
                creditQuantityStep: r,
                minimumChargeMinorUnits: o,
                minimumCreditPurchaseQuantityFloor: s,
                minorUnitExponent: c
            }),
            f;
        t[33] === i ? f = t[34] : (f = e => i == null || e <= i, t[33] = i, t[34] = f);
        let v = ae({
                minimumCreditPurchaseQuantity: e,
                presetCreditQuantities: h
            }).filter(f),
            S;
        t[35] !== n || t[36] !== c ? (S = e => ({
            amountMinorUnits: n != null && c != null ? ee({
                amountPerCredit: n,
                creditQuantity: e,
                minorUnitExponent: c
            }) : null,
            creditQuantity: e,
            value: String(e)
        }), t[35] = n, t[36] = c, t[37] = S) : S = t[37];
        let R = v.map(S),
            z = n != null && c != null && _ != null ? ee({
                amountPerCredit: n,
                creditQuantity: _,
                minorUnitExponent: c
            }) : null,
            B;
        t[38] !== b || t[39] !== u || t[40] !== _ ? (B = _ == null ? u ?? b.formatMessage(p()) : b.formatMessage(m(), {
            credits: b.formatNumber(_)
        }), t[38] = b, t[39] = u, t[40] = _, t[41] = B) : B = t[41];
        let oe = B,
            se = _ != null && v.includes(_) ? String(_) : void 0,
            ce = n != null && c != null ? ee({
                amountPerCredit: n,
                creditQuantity: e,
                minorUnitExponent: c
            }) : null,
            V = C.kind === Q.Custom ? C.creditQuantityDraft : ``,
            le = Math.min(Math.max(V.length, String(e).length, 1), 7),
            ue = V.length > 0,
            H = C.kind !== Q.Custom || !ue ? null : Number.parseInt(V, 10),
            de = ze({
                creditQuantityStep: r,
                maximumCreditPurchaseQuantity: i,
                minimumCreditPurchaseQuantity: e,
                parsedCustomCreditQuantity: H
            }),
            fe = n != null && c != null && H != null ? ee({
                amountPerCredit: n,
                creditQuantity: H,
                minorUnitExponent: c
            }) : null,
            pe = fe != null && g ? Ce({
                amount: fe,
                currency: g,
                intl: b
            }) : null,
            me = H != null && !de,
            he;
        t[42] === Symbol.for(`react.memo_cache_sentinel`) ? (he = e => {
            re({
                creditQuantityDraft: String(e),
                kind: Q.Custom
            })
        }, t[42] = he) : he = t[42];
        let U = he,
            W = () => {
                U(Ve({
                    creditQuantityStep: r,
                    direction: `increment`,
                    maximumCreditPurchaseQuantity: i,
                    minimumCreditPurchaseQuantity: e,
                    parsedCustomCreditQuantity: H
                }))
            },
            _e = () => {
                U(Ve({
                    creditQuantityStep: r,
                    direction: `decrement`,
                    maximumCreditPurchaseQuantity: i,
                    minimumCreditPurchaseQuantity: e,
                    parsedCustomCreditQuantity: H
                }))
            },
            ve = Ve({
                creditQuantityStep: r,
                direction: `decrement`,
                maximumCreditPurchaseQuantity: i,
                minimumCreditPurchaseQuantity: e,
                parsedCustomCreditQuantity: H
            }) !== Math.max(e, H ?? e),
            ye = i == null || H == null || H < i,
            be;
        t[43] === l ? be = t[44] : (be = e => {
            te(!1), re({
                kind: Q.Preset
            }), l(e)
        }, t[43] = l, t[44] = be);
        let xe = be;
        ie = ge, O = x, t[45] === Symbol.for(`react.memo_cache_sentinel`) ? (k = e => {
            te(e), e || re({
                kind: Q.Preset
            })
        }, t[45] = k) : k = t[45];
        let Se = y === `standaloneCredit` ? `text-base leading-[18.4px]` : `text-[16px] leading-5`,
            G;
        t[46] === Se ? G = t[47] : (G = a(`flex min-w-0 flex-1 items-center justify-between gap-3`, Se), t[46] = Se, t[47] = G);
        let K;
        t[48] === oe ? K = t[49] : (K = (0, Z.jsx)(`span`, {
            className: `text-[#30313d] dark:text-white/92`,
            children: oe
        }), t[48] = oe, t[49] = K);
        let we = y === `standaloneCredit` ? `text-[#5d5d5d]` : `text-[#808080]`,
            q;
        t[50] === we ? q = t[51] : (q = a(`flex items-center gap-2 dark:text-white/55`, we), t[50] = we, t[51] = q);
        let Ee = z != null && g ? Ce({
                amount: z,
                currency: g,
                intl: b
            }) : d ?? b.formatMessage($.pendingDisplayAmount),
            J;
        t[52] === Ee ? J = t[53] : (J = (0, Z.jsx)(`span`, {
            children: Ee
        }), t[52] = Ee, t[53] = J);
        let De;
        t[54] === Symbol.for(`react.memo_cache_sentinel`) ? (De = (0, Z.jsx)(Te, {
            className: `h-4 w-4`
        }), t[54] = De) : De = t[54];
        let Y;
        t[55] !== q || t[56] !== J ? (Y = (0, Z.jsxs)(`span`, {
            className: q,
            children: [J, De]
        }), t[55] = q, t[56] = J, t[57] = Y) : Y = t[57], t[58] !== G || t[59] !== K || t[60] !== Y ? (A = (0, Z.jsx)(ge.Trigger, {
            children: (0, Z.jsx)(`button`, {
                type: `button`,
                className: `flex h-[52px] w-full items-center rounded-[16px] bg-[#f7f7f7] px-4 text-start dark:bg-[#303030]`,
                children: (0, Z.jsxs)(`div`, {
                    className: G,
                    children: [K, Y]
                })
            })
        }), t[58] = G, t[59] = K, t[60] = Y, t[61] = A) : A = t[61], w = ge.Content, I = `start`, L = 0, T = 4, E = !1, D = `z-[130] box-border rounded-[16px] border border-black/[0.06] bg-white! p-0 shadow-[0_4px_16px_0_rgba(0,0,0,0.04)]! [--popover-min-width:var(--radix-popover-trigger-width)] [--popover-width:var(--radix-popover-trigger-width)] dark:border-white/8 dark:bg-[#212121]! dark:shadow-[0_12px_32px_rgba(0,0,0,0.22)]!`, j = `overflow-hidden rounded-[16px]`;
        let X;
        t[62] !== xe || t[63] !== b || t[64] !== d || t[65] !== g || t[66] !== se ? (X = e => (0, Z.jsxs)(`button`, {
            type: `button`,
            className: a(`flex w-full items-center justify-between px-4 py-[13px] text-start text-[14px] leading-[22px] tracking-[-0.14px] hover:bg-black/5 dark:text-white/88 dark:hover:bg-white/8`, e.value === se && `bg-black/5 dark:bg-white/8`),
            onClick: () => {
                xe(e.creditQuantity)
            },
            children: [(0, Z.jsx)(`span`, {
                className: `text-[#30313d] dark:text-white/92`,
                children: b.formatMessage(m(), {
                    credits: b.formatNumber(e.creditQuantity)
                })
            }), (0, Z.jsx)(`span`, {
                className: `text-[#808080] dark:text-white/55`,
                children: e.amountMinorUnits != null && g ? Ce({
                    amount: e.amountMinorUnits,
                    currency: g,
                    intl: b
                }) : d ?? b.formatMessage($.pendingDisplayAmount)
            })]
        }, e.value), t[62] = xe, t[63] = b, t[64] = d, t[65] = g, t[66] = se, t[67] = X) : X = t[67], M = R.map(X), t[68] === Symbol.for(`react.memo_cache_sentinel`) ? (N = (0, Z.jsx)(`div`, {
            className: `h-px bg-black/10 dark:bg-white/10`
        }), t[68] = N) : N = t[68], P = C.kind === Q.Custom ? (0, Z.jsxs)(`div`, {
            className: `flex items-center justify-between gap-3 px-4 py-[13px]`,
            children: [(0, Z.jsxs)(`div`, {
                className: `flex min-w-0 flex-1 items-center justify-between gap-3 overflow-hidden`,
                children: [(0, Z.jsxs)(`div`, {
                    className: `flex min-w-0 items-center gap-2 overflow-hidden text-[14px] leading-5`,
                    children: [(0, Z.jsx)(`input`, {
                        autoFocus: !0,
                        "aria-label": b.formatMessage($.creditQuantityInput),
                        className: `max-w-[7ch] min-w-[1ch] appearance-none border-0 bg-transparent px-0 py-0 text-end text-[14px] leading-5 text-[#30313d] shadow-none ring-0 outline-none focus:border-0 focus:ring-0 focus:outline-none focus-visible:outline-none dark:text-white/92 dark:placeholder:text-white/35`,
                        inputMode: `numeric`,
                        onChange: e => {
                            let t = e.target.value.replace(/\D/g, ``);
                            re({
                                creditQuantityDraft: t.length > 0 ? t : ``,
                                kind: Q.Custom
                            })
                        },
                        onKeyDown: e => {
                            e.key === `Enter` && (e.preventDefault(), me && xe(H))
                        },
                        placeholder: String(e),
                        style: {
                            width: `${le}ch`
                        },
                        value: V
                    }), (0, Z.jsx)(`span`, {
                        className: `text-[#30313d] dark:text-white/92`,
                        children: b.formatMessage($.creditsSuffix)
                    })]
                }), pe == null ? null : (0, Z.jsx)(`span`, {
                    className: `shrink-0 text-[14px] leading-5 text-[#808080] dark:text-white/55`,
                    children: pe
                })]
            }), (0, Z.jsxs)(`div`, {
                className: `flex shrink-0 items-center gap-1.5`,
                children: [(0, Z.jsx)(`button`, {
                    type: `button`,
                    "aria-label": b.formatMessage($.decreaseCustomCredits),
                    className: a(`flex h-8 w-8 items-center justify-center rounded-[10px] border border-black/[0.08] text-[#30313d] transition-colors hover:bg-black/[0.03] dark:border-white/12 dark:text-white/92 dark:hover:bg-white/8`, !ve && `cursor-not-allowed text-black/25 hover:bg-transparent dark:text-white/30 dark:hover:bg-transparent`),
                    disabled: !ve,
                    onClick: () => {
                        _e()
                    },
                    children: (0, Z.jsx)(Oe, {
                        className: `h-4 w-4`
                    })
                }), (0, Z.jsx)(`button`, {
                    type: `button`,
                    "aria-label": b.formatMessage($.increaseCustomCredits),
                    className: a(`flex h-8 w-8 items-center justify-center rounded-[10px] border border-black/[0.08] text-[#30313d] transition-colors hover:bg-black/[0.03] dark:border-white/12 dark:text-white/92 dark:hover:bg-white/8`, !ye && `cursor-not-allowed text-black/25 hover:bg-transparent dark:text-white/30 dark:hover:bg-transparent`),
                    disabled: !ye,
                    onClick: () => {
                        W()
                    },
                    children: (0, Z.jsx)(Pe, {
                        className: `h-4 w-4`
                    })
                }), (0, Z.jsx)(`button`, {
                    type: `button`,
                    className: a(`shrink-0 rounded-full px-3 py-1.5 text-[12px] leading-4 font-medium text-white transition-colors dark:text-[#111111]`, me ? `bg-black dark:bg-white` : `cursor-not-allowed bg-black/20 dark:bg-white/18 dark:text-white/45`),
                    disabled: !me,
                    onClick: () => {
                        H != null && xe(H)
                    },
                    children: b.formatMessage($.applyCustomCredits)
                })]
            })]
        }) : (0, Z.jsxs)(`button`, {
            type: `button`,
            className: `flex w-full items-center gap-2 px-4 py-[13px] text-start text-[14px] leading-[22px] tracking-[-0.14px] text-[#667085] hover:bg-black/5 dark:text-white/60 dark:hover:bg-white/8`,
            onClick: () => {
                re({
                    creditQuantityDraft: String(_ ?? e),
                    kind: Q.Custom
                })
            },
            children: [(0, Z.jsx)(Ae, {
                className: `h-4 w-4 shrink-0 text-[#667085] dark:text-white/60`
            }), (0, Z.jsx)(`span`, {
                children: b.formatMessage($.customCredits)
            })]
        }), F = C.kind === Q.Custom && (0, Z.jsx)(`div`, {
            className: `border-t border-black/10 px-4 py-3 dark:border-white/10`,
            children: (0, Z.jsx)(`p`, {
                className: a(`text-[12px] leading-[18px] tracking-[-0.12px]`, de ? `text-[#C24343] dark:text-[#FF8B8B]` : `text-[#808080] dark:text-white/50`),
                children: Be({
                    hasCustomCreditQuantityValidationError: de,
                    intl: b,
                    maximumCreditPurchaseQuantity: i,
                    minimumCreditPurchaseQuantity: e,
                    minimumDisplayAmountMinorUnits: ce,
                    parsedCustomCreditQuantity: H,
                    pricingCurrency: g,
                    step: r
                })
            })
        }), t[1] = n, t[2] = C.creditQuantityDraft, t[3] = C.kind, t[4] = r, t[5] = b, t[6] = x, t[7] = i, t[8] = o, t[9] = s, t[10] = c, t[11] = l, t[12] = u, t[13] = d, t[14] = h, t[15] = g, t[16] = _, t[17] = y, t[18] = w, t[19] = ie, t[20] = T, t[21] = E, t[22] = D, t[23] = O, t[24] = k, t[25] = A, t[26] = j, t[27] = M, t[28] = N, t[29] = P, t[30] = F, t[31] = I, t[32] = L
    } else w = t[18], ie = t[19], T = t[20], E = t[21], D = t[22], O = t[23], k = t[24], A = t[25], j = t[26], M = t[27], N = t[28], P = t[29], F = t[30], I = t[31], L = t[32];
    let R;
    t[69] !== j || t[70] !== M || t[71] !== N || t[72] !== P || t[73] !== F ? (R = (0, Z.jsxs)(`div`, {
        className: j,
        children: [M, N, P, F]
    }), t[69] = j, t[70] = M, t[71] = N, t[72] = P, t[73] = F, t[74] = R) : R = t[74];
    let z;
    t[75] !== w || t[76] !== T || t[77] !== E || t[78] !== D || t[79] !== R || t[80] !== I || t[81] !== L ? (z = (0, Z.jsx)(w, {
        align: I,
        alignOffset: L,
        sideOffset: T,
        autoFocus: E,
        className: D,
        children: R
    }), t[75] = w, t[76] = T, t[77] = E, t[78] = D, t[79] = R, t[80] = I, t[81] = L, t[82] = z) : z = t[82];
    let B;
    return t[83] !== ie || t[84] !== O || t[85] !== k || t[86] !== A || t[87] !== z ? (B = (0, Z.jsxs)(ie, {
        open: O,
        onOpenChange: k,
        children: [A, z]
    }), t[83] = ie, t[84] = O, t[85] = k, t[86] = A, t[87] = z, t[88] = B) : B = t[88], B
}

function Le(e, t) {
    return Math.ceil(e / t) * t
}

function Re(e, t) {
    return Math.floor(e / t) * t
}

function ze({
    creditQuantityStep: e,
    maximumCreditPurchaseQuantity: t,
    minimumCreditPurchaseQuantity: n,
    parsedCustomCreditQuantity: r
}) {
    return r == null ? !1 : r % e !== 0 || r < n || t != null && r > t
}

function Be({
    hasCustomCreditQuantityValidationError: e,
    intl: t,
    maximumCreditPurchaseQuantity: n,
    minimumCreditPurchaseQuantity: r,
    minimumDisplayAmountMinorUnits: i,
    parsedCustomCreditQuantity: a,
    pricingCurrency: o,
    step: s
}) {
    let c = t.formatNumber(r),
        l = n == null ? null : t.formatNumber(n),
        u = t.formatNumber(s),
        d = i != null && o ? Ce({
            amount: i,
            currency: o,
            intl: t
        }) : null;
    return n != null && a != null && a > n ? t.formatMessage($.customCreditsMaximumError, {
        maximumCredits: t.formatNumber(n)
    }) : e ? l == null ? d == null ? t.formatMessage($.customCreditsRequirementError, {
        minimumCredits: c,
        step: u
    }) : t.formatMessage($.customCreditsRequirementErrorWithAmount, {
        minimumAmount: d,
        minimumCredits: c,
        step: u
    }) : t.formatMessage($.customCreditsRangeError, {
        maximumCredits: l,
        minimumCredits: c,
        step: u
    }) : l == null ? d == null ? t.formatMessage($.customCreditsRequirementHint, {
        minimumCredits: c,
        step: u
    }) : t.formatMessage($.customCreditsRequirementHintWithAmount, {
        minimumAmount: d,
        minimumCredits: c,
        step: u
    }) : t.formatMessage($.customCreditsRangeHint, {
        maximumCredits: l,
        minimumCredits: c,
        step: u
    })
}

function Ve({
    creditQuantityStep: e,
    direction: t,
    maximumCreditPurchaseQuantity: n,
    minimumCreditPurchaseQuantity: r,
    parsedCustomCreditQuantity: i
}) {
    if (i == null) return r;
    if (t === `increment`) {
        let t = Math.max(r, Le(i + 1, e));
        return n == null ? t : Math.min(n, t)
    }
    let a = Math.max(r, Re(i - 1, e));
    return n == null ? a : Math.min(n, a)
}
var He, Ue, Z, Q, $, We = e((() => {
    He = d(), G(), i(), Ue = t(u(), 1), l(), K(), Ee(), Y(), je(), Fe(), h(), b(), Z = o(), Q = function(e) {
        return e.Preset = `preset`, e.Custom = `custom`, e
    }(Q || {}), $ = c({
        pendingDisplayAmount: {
            id: `CheckoutForm.codexPendingDisplayAmount`,
            defaultMessage: `$20.00`
        },
        creditQuantityInput: {
            id: `CheckoutForm.codexCreditQuantityInput`,
            defaultMessage: `Credit quantity`
        },
        creditsSuffix: {
            id: `CheckoutForm.codexCreditsSuffix`,
            defaultMessage: `credits`
        },
        customCredits: {
            id: `CheckoutForm.codexCustomCredits`,
            defaultMessage: `Custom credits`
        },
        applyCustomCredits: {
            id: `CheckoutForm.codexApplyCustomCredits`,
            defaultMessage: `Apply`
        },
        decreaseCustomCredits: {
            id: `CheckoutForm.codexDecreaseCustomCredits`,
            defaultMessage: `Decrease credits`
        },
        increaseCustomCredits: {
            id: `CheckoutForm.codexIncreaseCustomCredits`,
            defaultMessage: `Increase credits`
        },
        customCreditsRangeHint: {
            id: `CheckoutForm.codexCustomCreditsRangeHint`,
            defaultMessage: `Enter between {minimumCredits} and {maximumCredits} credits in increments of {step}.`
        },
        customCreditsRangeError: {
            id: `CheckoutForm.codexCustomCreditsRangeError`,
            defaultMessage: `Credits must be between {minimumCredits} and {maximumCredits} in increments of {step}.`
        },
        customCreditsRequirementHint: {
            id: `CheckoutForm.codexCustomCreditsRequirementHint`,
            defaultMessage: `Enter credits in increments of {step}. Minimum purchase is {minimumCredits} credits.`
        },
        customCreditsRequirementHintWithAmount: {
            id: `CheckoutForm.codexCustomCreditsRequirementHintWithAmount`,
            defaultMessage: `Enter credits in increments of {step}. Minimum purchase is {minimumCredits} credits ({minimumAmount}).`
        },
        customCreditsRequirementError: {
            id: `CheckoutForm.codexCustomCreditsRequirementError`,
            defaultMessage: `Credits must be entered in increments of {step}. Minimum purchase is {minimumCredits} credits.`
        },
        customCreditsRequirementErrorWithAmount: {
            id: `CheckoutForm.codexCustomCreditsRequirementErrorWithAmount`,
            defaultMessage: `Credits must be entered in increments of {step}. Minimum purchase is {minimumCredits} credits ({minimumAmount}).`
        },
        customCreditsMaximumError: {
            id: `CheckoutForm.codexCustomCreditsMaximumError`,
            defaultMessage: `Maximum purchase is {maximumCredits} credits.`
        }
    })
}));
export {
    K as i, We as n, Ce as r, Ie as t
};
//# sourceMappingURL=ddbd830d-e0nk0uwm49x0ei6k.js.map
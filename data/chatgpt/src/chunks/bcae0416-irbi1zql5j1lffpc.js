import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    XT as n,
    YT as r,
    nT as i,
    rT as a,
    xb as o
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as s,
    Cn as c,
    Kt as l,
    Vn as u,
    _n as d,
    yn as f
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Mmn as p,
    _sn as m,
    jmn as h
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    $_ as g,
    J_ as _,
    Q_ as v,
    X_ as y,
    Y_ as b,
    Z_ as ee,
    _v as x,
    cv as te,
    dv as S,
    ev as C,
    fv as ne,
    gv as re,
    hv as ie,
    iv as ae,
    lv as oe,
    nv as se,
    ov as ce,
    pv as w,
    rv as le,
    sv as ue,
    tv as de,
    uv as T,
    vv as E,
    yv as D
} from "./c2675c8c-oz03twoan08d72ud.js";
var fe, pe, me, he, ge, _e, ve = e((() => {
    fe = t(u(), 1), w(), pe = s(), me = Object.freeze({
        position: `absolute`,
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: `hidden`,
        clip: `rect(0, 0, 0, 0)`,
        whiteSpace: `nowrap`,
        wordWrap: `normal`
    }), he = `VisuallyHidden`, ge = fe.forwardRef((e, t) => (0, pe.jsx)(S.span, {
        ...e,
        ref: t,
        style: {
            ...me,
            ...e.style
        }
    })), ge.displayName = he, _e = ge
}));

function O(e, t = []) {
    let n = [];

    function r(t, r) {
        let i = be.createContext(r);
        i.displayName = t + `Context`;
        let a = n.length;
        n = [...n, r];
        let o = t => {
            let {
                scope: n,
                children: r,
                ...o
            } = t, s = n?.[e]?.[a] || i, c = be.useMemo(() => o, Object.values(o));
            return (0, xe.jsx)(s.Provider, {
                value: c,
                children: r
            })
        };
        o.displayName = t + `Provider`;

        function s(n, o, s = {}) {
            let {
                optional: c = !1
            } = s, l = o?.[e]?.[a] || i, u = be.useContext(l);
            if (u) return u;
            if (r !== void 0) return r;
            if (!c) throw Error(`\`${n}\` must be used within \`${t}\``)
        }
        return [o, s]
    }
    let i = () => {
        let t = n.map(e => be.createContext(e));
        return function(n) {
            let r = n?.[e] || t;
            return be.useMemo(() => ({
                [`__scope${e}`]: {
                    ...n,
                    [e]: r
                }
            }), [n, r])
        }
    };
    return i.scopeName = e, [r, ye(i, ...t)]
}

function ye(...e) {
    let t = e[0];
    if (e.length === 1) return t;
    let n = () => {
        let n = e.map(e => ({
            useScope: e(),
            scopeName: e.scopeName
        }));
        return function(e) {
            let r = n.reduce((t, {
                useScope: n,
                scopeName: r
            }) => {
                let i = n(e)[`__scope${r}`];
                return {
                    ...t,
                    ...i
                }
            }, {});
            return be.useMemo(() => ({
                [`__scope${t.scopeName}`]: r
            }), [r])
        }
    };
    return n.scopeName = t.scopeName, n
}
var be, xe, k = e((() => {
    be = t(u(), 1), xe = s()
}));

function Se(e) {
    let t = e + `CollectionProvider`,
        [n, r] = O(t),
        [i, a] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }),
        o = e => {
            let {
                scope: t,
                children: n
            } = e, r = Ce.useRef(null), a = Ce.useRef(new Map).current;
            return (0, we.jsx)(i, {
                scope: t,
                itemMap: a,
                collectionRef: r,
                children: n
            })
        };
    o.displayName = t;
    let s = e + `CollectionSlot`,
        c = ie(s),
        l = Ce.forwardRef((e, t) => {
            let {
                scope: n,
                children: r
            } = e, i = D(t, a(s, n).collectionRef);
            return (0, we.jsx)(c, {
                ref: i,
                children: r
            })
        });
    l.displayName = s;
    let u = e + `CollectionItemSlot`,
        d = `data-radix-collection-item`,
        f = ie(u),
        p = Ce.forwardRef((e, t) => {
            let {
                scope: n,
                children: r,
                ...i
            } = e, o = Ce.useRef(null), s = D(t, o), c = a(u, n);
            return Ce.useEffect(() => (c.itemMap.set(o, {
                ref: o,
                ...i
            }), () => void c.itemMap.delete(o))), (0, we.jsx)(f, {
                [d]: ``,
                ref: s,
                children: r
            })
        });
    p.displayName = u;

    function m(t) {
        let n = a(e + `CollectionConsumer`, t);
        return Ce.useCallback(() => {
            let e = n.collectionRef.current;
            if (!e) return [];
            let t = Array.from(e.querySelectorAll(`[${d}]`));
            return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current))
        }, [n.collectionRef, n.itemMap])
    }
    return [{
        Provider: o,
        Slot: l,
        ItemSlot: p
    }, m, r]
}
var Ce, we, Te = e((() => {
        Ce = t(u(), 1), k(), E(), x(), we = s(), c(), d(), f(), u(), s()
    })),
    Ee, De, Oe = e((() => {
        Ee = t(u(), 1), De = globalThis?.document ? Ee.useLayoutEffect : () => {}
    }));

function A({
    prop: e,
    defaultProp: t,
    onChange: n = () => {},
    caller: r
}) {
    let [i, a, o] = ke({
        defaultProp: t,
        onChange: n
    }), s = e !== void 0, c = s ? e : i;
    {
        let t = je.useRef(e !== void 0);
        je.useEffect(() => {
            let e = t.current;
            e !== s && console.warn(`${r} is changing from ${e?`controlled`:`uncontrolled`} to ${s?`controlled`:`uncontrolled`}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), t.current = s
        }, [s, r])
    }
    return [c, je.useCallback(t => {
        if (s) {
            let n = Ae(t) ? t(e) : t;
            n !== e && o.current?.(n)
        } else a(t)
    }, [s, e, a, o])]
}

function ke({
    defaultProp: e,
    onChange: t
}) {
    let [n, r] = je.useState(e), i = je.useRef(n), a = je.useRef(t);
    return Me(() => {
        a.current = t
    }, [t]), je.useEffect(() => {
        i.current !== n && (a.current?.(n), i.current = n)
    }, [n, i]), [n, r, a]
}

function Ae(e) {
    return typeof e == `function`
}
var je, Me, Ne = e((() => {
    je = t(u(), 1), Oe(), u(), Me = je.useInsertionEffect || De
}));

function Pe(e, t) {
    return Be.useReducer((e, n) => t[e][n] ?? e, e)
}

function Fe(e) {
    let [t, n] = j.useState(), r = j.useRef(null), i = j.useRef(e), a = j.useRef(`none`), o = j.useRef(void 0), [s, c] = Pe(e ? `mounted` : `unmounted`, {
        mounted: {
            UNMOUNT: `unmounted`,
            ANIMATION_OUT: `unmountSuspended`
        },
        unmountSuspended: {
            MOUNT: `mounted`,
            ANIMATION_END: `unmounted`
        },
        unmounted: {
            MOUNT: `mounted`
        }
    });
    return j.useEffect(() => {
        s === `mounted` ? (a.current = o.current ?? Re(r.current), o.current = void 0) : a.current = `none`
    }, [s]), De(() => {
        let t = r.current,
            n = i.current;
        if (n !== e) {
            let r = a.current,
                s = Re(t);
            e ? (o.current = s, c(`MOUNT`)) : s === `none` || t?.display === `none` ? c(`UNMOUNT`) : c(n && r !== s ? `ANIMATION_OUT` : `UNMOUNT`), i.current = e
        }
    }, [e, c]), De(() => {
        if (t) {
            let e, n = t.ownerDocument.defaultView ?? window,
                o = a => {
                    let o = Re(r.current).includes(CSS.escape(a.animationName));
                    if (a.target === t && o && (c(`ANIMATION_END`), !i.current)) {
                        let r = t.style.animationFillMode;
                        t.style.animationFillMode = `forwards`, e = n.setTimeout(() => {
                            t.style.animationFillMode === `forwards` && (t.style.animationFillMode = r)
                        })
                    }
                },
                s = e => {
                    e.target === t && (a.current = Re(r.current))
                };
            return t.addEventListener(`animationstart`, s), t.addEventListener(`animationcancel`, o), t.addEventListener(`animationend`, o), () => {
                n.clearTimeout(e), t.removeEventListener(`animationstart`, s), t.removeEventListener(`animationcancel`, o), t.removeEventListener(`animationend`, o)
            }
        } else c(`ANIMATION_END`)
    }, [t, c]), {
        isPresent: [`mounted`, `unmountSuspended`].includes(s),
        ref: j.useCallback(e => {
            if (e) {
                let t = getComputedStyle(e);
                r.current = t, o.current = Re(t)
            } else r.current = null;
            n(e)
        }, [])
    }
}

function Ie(e, t) {
    if (typeof e == `function`) return e(t);
    e != null && (e.current = t)
}

function Le(...e) {
    let t = j.useRef(e);
    return t.current = e, j.useCallback(e => {
        let n = t.current,
            r = !1,
            i = n.map(t => {
                let n = Ie(t, e);
                return !r && typeof n == `function` && (r = !0), n
            });
        if (r) return () => {
            for (let e = 0; e < i.length; e++) {
                let t = i[e];
                typeof t == `function` ? t() : Ie(n[e], null)
            }
        }
    }, [])
}

function Re(e) {
    return e?.animationName || `none`
}

function ze(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, `ref`)?.get,
        n = t && `isReactWarning` in t && t.isReactWarning;
    return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, `ref`)?.get, n = t && `isReactWarning` in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var j, Be, M, Ve = e((() => {
    j = t(u(), 1), Oe(), Be = t(u(), 1), M = e => {
        let {
            present: t,
            children: n
        } = e, r = Fe(t), i = typeof n == `function` ? n({
            present: r.isPresent
        }) : j.Children.only(n), a = Le(r.ref, ze(i));
        return typeof n == `function` || r.isPresent ? j.cloneElement(i, {
            ref: a
        }) : null
    }, M.displayName = `Presence`
}));

function He(e) {
    let [t, n] = Ue.useState(We());
    return De(() => {
        e || n(e => e ?? String(Ge++))
    }, [e]), e || (t ? `radix-${t}` : ``)
}
var Ue, We, Ge, Ke = e((() => {
    Ue = t(u(), 1), Oe(), We = Ue.useId || (() => void 0), Ge = 0
}));

function qe(e) {
    let t = Je.useContext(Ye);
    return e || t || `ltr`
}
var Je, Ye, Xe = e((() => {
    Je = t(u(), 1), s(), Ye = Je.createContext(void 0)
}));

function Ze(e, {
    select: t = !1
} = {}) {
    let n = document.activeElement;
    for (let r of e)
        if (rt(r, {
                select: t
            }), document.activeElement !== n) return
}

function Qe(e) {
    let t = $e(e);
    return [et(t, e), et(t.reverse(), e)]
}

function $e(e) {
    let t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: e => {
                let t = e.tagName === `INPUT` && e.type === `hidden`;
                return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; n.nextNode();) t.push(n.currentNode);
    return t
}

function et(e, t) {
    let n = typeof t.checkVisibility == `function` && t.checkVisibility({
        checkVisibilityCSS: !0
    });
    for (let r of e)
        if (!(n ? !r.checkVisibility({
                checkVisibilityCSS: !0
            }) : tt(r, {
                upTo: t
            }))) return r
}

function tt(e, {
    upTo: t
}) {
    if (getComputedStyle(e).visibility === `hidden`) return !0;
    for (; e;) {
        if (t !== void 0 && e === t) return !1;
        if (getComputedStyle(e).display === `none`) return !0;
        e = e.parentElement
    }
    return !1
}

function nt(e) {
    return e instanceof HTMLInputElement && `select` in e
}

function rt(e, {
    select: t = !1
} = {}) {
    if (e && e.focus) {
        let n = document.activeElement;
        e.focus({
            preventScroll: !0
        }), e !== n && nt(e) && t && e.select()
    }
}

function it() {
    let e = [];
    return {
        add(t) {
            let n = e[0];
            t !== n && n?.pause(), e = at(e, t), e.unshift(t)
        },
        remove(t) {
            e = at(e, t), e[0]?.resume()
        }
    }
}

function at(e, t) {
    let n = [...e],
        r = n.indexOf(t);
    return r !== -1 && n.splice(r, 1), n
}

function ot(e) {
    return e.filter(e => e.tagName !== `A`)
}
var st, ct, lt, ut, dt, ft, pt, mt, ht = e((() => {
        st = t(u(), 1), E(), w(), oe(), ct = s(), lt = `focusScope.autoFocusOnMount`, ut = `focusScope.autoFocusOnUnmount`, dt = {
            bubbles: !1,
            cancelable: !0
        }, ft = `FocusScope`, pt = st.forwardRef((e, t) => {
            let {
                loop: n = !1,
                trapped: r = !1,
                onMountAutoFocus: i,
                onUnmountAutoFocus: a,
                ...o
            } = e, [s, c] = st.useState(null), l = T(i), u = T(a), d = st.useRef(null), f = D(t, c), p = st.useRef({
                paused: !1,
                pause() {
                    this.paused = !0
                },
                resume() {
                    this.paused = !1
                }
            }).current;
            st.useEffect(() => {
                if (r) {
                    let e = function(e) {
                            if (p.paused || !s) return;
                            let t = e.target;
                            s.contains(t) ? d.current = t : rt(d.current, {
                                select: !0
                            })
                        },
                        t = function(e) {
                            if (p.paused || !s) return;
                            let t = e.relatedTarget;
                            t !== null && (s.contains(t) || rt(d.current, {
                                select: !0
                            }))
                        },
                        n = function(e) {
                            if (document.activeElement === document.body)
                                for (let t of e) t.removedNodes.length > 0 && rt(s)
                        };
                    document.addEventListener(`focusin`, e), document.addEventListener(`focusout`, t);
                    let r = new MutationObserver(n);
                    return s && r.observe(s, {
                        childList: !0,
                        subtree: !0
                    }), () => {
                        document.removeEventListener(`focusin`, e), document.removeEventListener(`focusout`, t), r.disconnect()
                    }
                }
            }, [r, s, p.paused]), st.useEffect(() => {
                if (s) {
                    mt.add(p);
                    let e = document.activeElement;
                    if (!s.contains(e)) {
                        let t = new CustomEvent(lt, dt);
                        s.addEventListener(lt, l), s.dispatchEvent(t), t.defaultPrevented || (Ze(ot($e(s)), {
                            select: !0
                        }), document.activeElement === e && rt(s))
                    }
                    return () => {
                        s.removeEventListener(lt, l), setTimeout(() => {
                            let t = new CustomEvent(ut, dt);
                            s.addEventListener(ut, u), s.dispatchEvent(t), t.defaultPrevented || rt(e ?? document.body, {
                                select: !0
                            }), s.removeEventListener(ut, u), mt.remove(p)
                        }, 0)
                    }
                }
            }, [s, l, u, p]);
            let m = st.useCallback(e => {
                if (!n && !r || p.paused) return;
                let t = e.key === `Tab` && !e.altKey && !e.ctrlKey && !e.metaKey,
                    i = document.activeElement;
                if (t && i) {
                    let t = e.currentTarget,
                        [r, a] = Qe(t);
                    r && a ? !e.shiftKey && i === a ? (e.preventDefault(), n && rt(r, {
                        select: !0
                    })) : e.shiftKey && i === r && (e.preventDefault(), n && rt(a, {
                        select: !0
                    })) : i === t && e.preventDefault()
                }
            }, [n, r, p.paused]);
            return (0, ct.jsx)(S.div, {
                tabIndex: -1,
                ...o,
                ref: f,
                onKeyDown: m
            })
        }), pt.displayName = ft, mt = it()
    })),
    gt, _t, vt, yt, bt, xt = e((() => {
        gt = t(u(), 1), _t = t(l(), 1), w(), Oe(), vt = s(), yt = `Portal`, bt = gt.forwardRef((e, t) => {
            let {
                container: n,
                ...r
            } = e, [i, a] = gt.useState(!1);
            De(() => a(!0), []);
            let o = n || i && globalThis?.document?.body;
            return o ? _t.createPortal((0, vt.jsx)(S.div, {
                ...r,
                ref: t
            }), o) : null
        }), bt.displayName = yt
    }));

function St() {
    wt.useEffect(() => {
        Et ||= {
            start: Ct(),
            end: Ct()
        };
        let {
            start: e,
            end: t
        } = Et;
        return document.body.firstElementChild !== e && document.body.insertAdjacentElement(`afterbegin`, e), document.body.lastElementChild !== t && document.body.insertAdjacentElement(`beforeend`, t), Tt++, () => {
            Tt === 1 && (Et?.start.remove(), Et?.end.remove(), Et = null), Tt = Math.max(0, Tt - 1)
        }
    }, [])
}

function Ct() {
    let e = document.createElement(`span`);
    return e.setAttribute(`data-radix-focus-guard`, ``), e.tabIndex = 0, e.style.outline = `none`, e.style.opacity = `0`, e.style.position = `fixed`, e.style.pointerEvents = `none`, e
}
var wt, Tt, Et, Dt = e((() => {
    wt = t(u(), 1), Tt = 0, Et = null
}));

function Ot(e) {
    return e ? `open` : `closed`
}
var N, P, kt, At, jt, Mt, F, Nt, Pt, Ft, It, Lt, Rt, zt, Bt, Vt, Ht, Ut, Wt, Gt, Kt, qt, Jt, Yt, Xt, Zt, Qt, $t, en, tn = e((() => {
    N = t(u(), 1), n(), E(), k(), Ke(), Ne(), ue(), ht(), xt(), Ve(), w(), Dt(), le(), a(), x(), P = s(), kt = `Dialog`, [At, jt] = O(kt), [Mt, F] = At(kt), Nt = e => {
        let {
            __scopeDialog: t,
            children: n,
            open: r,
            defaultOpen: i,
            onOpenChange: a,
            modal: o = !0
        } = e, s = N.useRef(null), c = N.useRef(null), [l, u] = A({
            prop: r,
            defaultProp: i ?? !1,
            onChange: a,
            caller: kt
        });
        return (0, P.jsx)(Mt, {
            scope: t,
            triggerRef: s,
            contentRef: c,
            contentId: He(),
            titleId: He(),
            descriptionId: He(),
            open: l,
            onOpenChange: u,
            onOpenToggle: N.useCallback(() => u(e => !e), [u]),
            modal: o,
            children: n
        })
    }, Nt.displayName = kt, Pt = `DialogTrigger`, Ft = N.forwardRef((e, t) => {
        let {
            __scopeDialog: n,
            ...i
        } = e, a = F(Pt, n), o = D(t, a.triggerRef);
        return (0, P.jsx)(S.button, {
            type: `button`,
            "aria-haspopup": `dialog`,
            "aria-expanded": a.open,
            "aria-controls": a.open ? a.contentId : void 0,
            "data-state": Ot(a.open),
            ...i,
            ref: o,
            onClick: r(e.onClick, a.onOpenToggle)
        })
    }), Ft.displayName = Pt, It = `DialogPortal`, [Lt, Rt] = At(It, {
        forceMount: void 0
    }), zt = e => {
        let {
            __scopeDialog: t,
            forceMount: n,
            children: r,
            container: i
        } = e, a = F(It, t);
        return (0, P.jsx)(Lt, {
            scope: t,
            forceMount: n,
            children: N.Children.map(r, e => (0, P.jsx)(M, {
                present: n || a.open,
                children: (0, P.jsx)(bt, {
                    asChild: !0,
                    container: i,
                    children: e
                })
            }))
        })
    }, zt.displayName = It, Bt = `DialogOverlay`, Vt = N.forwardRef((e, t) => {
        let n = Rt(Bt, e.__scopeDialog),
            {
                forceMount: r = n.forceMount,
                ...i
            } = e,
            a = F(Bt, e.__scopeDialog);
        return a.modal ? (0, P.jsx)(M, {
            present: r || a.open,
            children: (0, P.jsx)(Ut, {
                ...i,
                ref: t
            })
        }) : null
    }), Vt.displayName = Bt, Ht = ie(`DialogOverlay.RemoveScroll`), Ut = N.forwardRef((e, t) => {
        let {
            __scopeDialog: n,
            ...r
        } = e, i = F(Bt, n), a = D(t, te());
        return (0, P.jsx)(ae, {
            as: Ht,
            allowPinchZoom: !0,
            shards: [i.contentRef],
            children: (0, P.jsx)(S.div, {
                "data-state": Ot(i.open),
                ...r,
                ref: a,
                style: {
                    pointerEvents: `auto`,
                    ...r.style
                }
            })
        })
    }), Wt = `DialogContent`, Gt = N.forwardRef((e, t) => {
        let n = Rt(Wt, e.__scopeDialog),
            {
                forceMount: r = n.forceMount,
                ...i
            } = e,
            a = F(Wt, e.__scopeDialog);
        return (0, P.jsx)(M, {
            present: r || a.open,
            children: a.modal ? (0, P.jsx)(Kt, {
                ...i,
                ref: t
            }) : (0, P.jsx)(qt, {
                ...i,
                ref: t
            })
        })
    }), Gt.displayName = Wt, Kt = N.forwardRef((e, t) => {
        let n = F(Wt, e.__scopeDialog),
            a = N.useRef(null),
            o = D(t, n.contentRef, a);
        return N.useEffect(() => {
            let e = a.current;
            if (e) return i(e)
        }, []), (0, P.jsx)(Jt, {
            ...e,
            ref: o,
            trapFocus: n.open,
            disableOutsidePointerEvents: n.open,
            onCloseAutoFocus: r(e.onCloseAutoFocus, e => {
                e.preventDefault(), n.triggerRef.current?.focus()
            }),
            onPointerDownOutside: r(e.onPointerDownOutside, e => {
                let t = e.detail.originalEvent,
                    n = t.button === 0 && t.ctrlKey === !0;
                (t.button === 2 || n) && e.preventDefault()
            }),
            onFocusOutside: r(e.onFocusOutside, e => e.preventDefault())
        })
    }), qt = N.forwardRef((e, t) => {
        let n = F(Wt, e.__scopeDialog),
            r = N.useRef(!1),
            i = N.useRef(!1);
        return (0, P.jsx)(Jt, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
                e.onCloseAutoFocus?.(t), t.defaultPrevented || (r.current || n.triggerRef.current?.focus(), t.preventDefault()), r.current = !1, i.current = !1
            },
            onInteractOutside: t => {
                e.onInteractOutside?.(t), t.defaultPrevented || (r.current = !0, t.detail.originalEvent.type === `pointerdown` && (i.current = !0));
                let a = t.target;
                n.triggerRef.current?.contains(a) && t.preventDefault(), t.detail.originalEvent.type === `focusin` && i.current && t.preventDefault()
            }
        })
    }), Jt = N.forwardRef((e, t) => {
        let {
            __scopeDialog: n,
            trapFocus: r,
            onOpenAutoFocus: i,
            onCloseAutoFocus: a,
            ...o
        } = e, s = F(Wt, n);
        return St(), (0, P.jsx)(P.Fragment, {
            children: (0, P.jsx)(pt, {
                asChild: !0,
                loop: !0,
                trapped: r,
                onMountAutoFocus: i,
                onUnmountAutoFocus: a,
                children: (0, P.jsx)(ce, {
                    role: `dialog`,
                    id: s.contentId,
                    "aria-describedby": s.descriptionId,
                    "aria-labelledby": s.titleId,
                    "data-state": Ot(s.open),
                    ...o,
                    ref: t,
                    deferPointerDownOutside: !0,
                    onDismiss: () => s.onOpenChange(!1)
                })
            })
        })
    }), Yt = `DialogTitle`, Xt = N.forwardRef((e, t) => {
        let {
            __scopeDialog: n,
            ...r
        } = e, i = F(Yt, n);
        return (0, P.jsx)(S.h2, {
            id: i.titleId,
            ...r,
            ref: t
        })
    }), Xt.displayName = Yt, Zt = `DialogDescription`, Qt = N.forwardRef((e, t) => {
        let {
            __scopeDialog: n,
            ...r
        } = e, i = F(Zt, n);
        return (0, P.jsx)(S.p, {
            id: i.descriptionId,
            ...r,
            ref: t
        })
    }), Qt.displayName = Zt, $t = `DialogClose`, en = N.forwardRef((e, t) => {
        let {
            __scopeDialog: n,
            ...i
        } = e, a = F($t, n);
        return (0, P.jsx)(S.button, {
            type: `button`,
            ...i,
            ref: t,
            onClick: r(e.onClick, () => a.onOpenChange(!1))
        })
    }), en.displayName = $t
}));

function nn(e) {
    let t = rn.useRef({
        value: e,
        previous: e
    });
    return rn.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
}
var rn, an = e((() => {
    rn = t(u(), 1)
}));

function on(e) {
    let [t, n] = sn.useState(void 0);
    return De(() => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            let t = new ResizeObserver(t => {
                if (!Array.isArray(t) || !t.length) return;
                let r = t[0],
                    i, a;
                if (`borderBoxSize` in r) {
                    let e = r.borderBoxSize,
                        t = Array.isArray(e) ? e[0] : e;
                    i = t.inlineSize, a = t.blockSize
                } else i = e.offsetWidth, a = e.offsetHeight;
                n({
                    width: i,
                    height: a
                })
            });
            return t.observe(e, {
                box: `border-box`
            }), () => t.unobserve(e)
        } else n(void 0)
    }, [e]), t
}
var sn, cn = e((() => {
    sn = t(u(), 1), Oe()
}));

function ln(e) {
    let {
        __scopeCheckbox: t,
        checked: n,
        children: r,
        defaultChecked: i,
        disabled: a,
        form: o,
        name: s,
        onCheckedChange: c,
        required: l,
        value: u = `on`,
        internal_do_not_use_render: d
    } = e, [f, p] = A({
        prop: n,
        defaultProp: i ?? !1,
        onChange: c,
        caller: mn
    }), [m, h] = I.useState(null), [g, _] = I.useState(null), v = I.useRef(!1), y = !m || !!o || !!m.closest(`form`), b = {
        checked: f,
        disabled: a,
        setChecked: p,
        control: m,
        setControl: h,
        name: s,
        form: o,
        value: u,
        hasConsumerStoppedPropagationRef: v,
        required: l,
        defaultChecked: !dn(i) && i,
        isFormControl: y,
        bubbleInput: g,
        setBubbleInput: _
    };
    return (0, pn.jsx)(_n, {
        scope: t,
        ...b,
        children: un(d) ? d(b) : r
    })
}

function un(e) {
    return typeof e == `function`
}

function dn(e) {
    return e === `indeterminate`
}

function fn(e) {
    return dn(e) ? `indeterminate` : e ? `checked` : `unchecked`
}
var I, pn, mn, hn, gn, _n, vn, yn, bn, xn, Sn, Cn, wn, Tn, En = e((() => {
        I = t(u(), 1), E(), k(), n(), Ne(), an(), cn(), Ve(), w(), pn = s(), mn = `Checkbox`, [hn, gn] = O(mn), [_n, vn] = hn(mn), yn = `CheckboxTrigger`, bn = I.forwardRef(({
            __scopeCheckbox: e,
            onKeyDown: t,
            onClick: n,
            ...i
        }, a) => {
            let {
                control: o,
                value: s,
                disabled: c,
                checked: l,
                required: u,
                setControl: d,
                setChecked: f,
                hasConsumerStoppedPropagationRef: p,
                isFormControl: m,
                bubbleInput: h
            } = vn(yn, e), g = D(a, d), _ = I.useRef(l);
            return I.useEffect(() => {
                let e = o?.form;
                if (e) {
                    let t = () => f(_.current);
                    return e.addEventListener(`reset`, t), () => e.removeEventListener(`reset`, t)
                }
            }, [o, f]), (0, pn.jsx)(S.button, {
                type: `button`,
                role: `checkbox`,
                "aria-checked": dn(l) ? `mixed` : l,
                "aria-required": u,
                "data-state": fn(l),
                "data-disabled": c ? `` : void 0,
                disabled: c,
                value: s,
                ...i,
                ref: g,
                onKeyDown: r(t, e => {
                    e.key === `Enter` && e.preventDefault()
                }),
                onClick: r(n, e => {
                    f(e => dn(e) ? !0 : !e), h && m && (p.current = e.isPropagationStopped(), p.current || e.stopPropagation())
                })
            })
        }), bn.displayName = yn, xn = I.forwardRef((e, t) => {
            let {
                __scopeCheckbox: n,
                name: r,
                checked: i,
                defaultChecked: a,
                required: o,
                disabled: s,
                value: c,
                onCheckedChange: l,
                form: u,
                ...d
            } = e;
            return (0, pn.jsx)(ln, {
                __scopeCheckbox: n,
                checked: i,
                defaultChecked: a,
                disabled: s,
                required: o,
                onCheckedChange: l,
                name: r,
                form: u,
                value: c,
                internal_do_not_use_render: ({
                    isFormControl: e
                }) => (0, pn.jsxs)(pn.Fragment, {
                    children: [(0, pn.jsx)(bn, {
                        ...d,
                        ref: t,
                        __scopeCheckbox: n
                    }), e && (0, pn.jsx)(Tn, {
                        __scopeCheckbox: n
                    })]
                })
            })
        }), xn.displayName = mn, Sn = `CheckboxIndicator`, Cn = I.forwardRef((e, t) => {
            let {
                __scopeCheckbox: n,
                forceMount: r,
                ...i
            } = e, a = vn(Sn, n);
            return (0, pn.jsx)(M, {
                present: r || dn(a.checked) || a.checked === !0,
                children: (0, pn.jsx)(S.span, {
                    "data-state": fn(a.checked),
                    "data-disabled": a.disabled ? `` : void 0,
                    ...i,
                    ref: t,
                    style: {
                        pointerEvents: `none`,
                        ...e.style
                    }
                })
            })
        }), Cn.displayName = Sn, wn = `CheckboxBubbleInput`, Tn = I.forwardRef(({
            __scopeCheckbox: e,
            ...t
        }, n) => {
            let {
                control: r,
                hasConsumerStoppedPropagationRef: i,
                checked: a,
                defaultChecked: o,
                required: s,
                disabled: c,
                name: l,
                value: u,
                form: d,
                bubbleInput: f,
                setBubbleInput: p
            } = vn(wn, e), m = D(n, p), h = nn(a), g = on(r);
            I.useEffect(() => {
                let e = f;
                if (!e) return;
                let t = window.HTMLInputElement.prototype,
                    n = Object.getOwnPropertyDescriptor(t, `checked`).set,
                    r = !i.current;
                if (h !== a && n) {
                    let t = new Event(`click`, {
                        bubbles: r
                    });
                    e.indeterminate = dn(a), n.call(e, !dn(a) && a), e.dispatchEvent(t)
                }
            }, [f, h, a, i]);
            let _ = I.useRef(!dn(a) && a);
            return (0, pn.jsx)(S.input, {
                type: `checkbox`,
                "aria-hidden": !0,
                defaultChecked: o ?? _.current,
                required: s,
                disabled: c,
                name: l,
                value: u,
                form: d,
                ...t,
                tabIndex: -1,
                ref: m,
                style: {
                    ...t.style,
                    ...g,
                    position: `absolute`,
                    pointerEvents: `none`,
                    opacity: 0,
                    margin: 0,
                    transform: `translateX(-100%)`
                }
            })
        }), Tn.displayName = wn
    })),
    Dn, On, kn, An, jn, Mn = e((() => {
        Dn = t(u(), 1), w(), On = s(), kn = `Arrow`, An = Dn.forwardRef((e, t) => {
            let {
                children: n,
                width: r = 10,
                height: i = 5,
                ...a
            } = e;
            return (0, On.jsx)(S.svg, {
                ...a,
                ref: t,
                width: r,
                height: i,
                viewBox: `0 0 30 10`,
                preserveAspectRatio: `none`,
                children: e.asChild ? n : (0, On.jsx)(`polygon`, {
                    points: `0,0 30,0 15,10`
                })
            })
        }), An.displayName = kn, jn = An
    }));

function Nn(e) {
    return e !== null
}

function Pn(e) {
    let [t, n = `center`] = e.split(`-`);
    return [t, n]
}
var L, Fn, In, Ln, Rn, zn, Bn, Vn, Hn, Un, Wn, Gn, Kn, qn, Jn, Yn, Xn, Zn, Qn, $n, er, tr, nr = e((() => {
    L = t(u(), 1), ee(), Mn(), E(), k(), w(), oe(), Oe(), cn(), Fn = s(), In = `Popper`, [Ln, Rn] = O(In), [zn, Bn] = Ln(In), Vn = e => {
        let {
            __scopePopper: t,
            children: n
        } = e, [r, i] = L.useState(null), [a, o] = L.useState(void 0);
        return (0, Fn.jsx)(zn, {
            scope: t,
            anchor: r,
            onAnchorChange: i,
            placementState: a,
            setPlacementState: o,
            children: n
        })
    }, Vn.displayName = In, Hn = `PopperAnchor`, Un = L.forwardRef((e, t) => {
        let {
            __scopePopper: n,
            virtualRef: r,
            ...i
        } = e, a = Bn(Hn, n), o = L.useRef(null), s = a.onAnchorChange, c = D(t, L.useCallback(e => {
            o.current = e, e && s(e)
        }, [s])), l = L.useRef(null);
        L.useEffect(() => {
            if (!r) return;
            let e = l.current;
            l.current = r.current, e !== l.current && s(l.current)
        });
        let u = a.placementState && Pn(a.placementState),
            d = u?.[0],
            f = u?.[1];
        return r ? null : (0, Fn.jsx)(S.div, {
            "data-radix-popper-side": d,
            "data-radix-popper-align": f,
            ...i,
            ref: c
        })
    }), Un.displayName = Hn, Wn = `PopperContent`, [Gn, Kn] = Ln(Wn), qn = L.forwardRef((e, t) => {
        let {
            __scopePopper: n,
            side: r = `bottom`,
            sideOffset: i = 0,
            align: a = `center`,
            alignOffset: s = 0,
            arrowPadding: c = 0,
            avoidCollisions: l = !0,
            collisionBoundary: u = [],
            collisionPadding: d = 0,
            sticky: f = `partial`,
            hideWhenDetached: p = !1,
            updatePositionStrategy: m = `optimized`,
            onPlaced: h,
            ...ee
        } = e, x = Bn(Wn, n), [te, ne] = L.useState(null), re = D(t, ne), [ie, ae] = L.useState(null), oe = on(ie), ce = oe?.width ?? 0, w = oe?.height ?? 0, le = r + (a === `center` ? `` : `-` + a), ue = typeof d == `number` ? d : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...d
        }, E = Array.isArray(u) ? u : [u], fe = E.length > 0, pe = {
            padding: ue,
            boundary: E.filter(Nn),
            altBoundary: fe
        }, {
            refs: me,
            floatingStyles: he,
            placement: ge,
            isPositioned: _e,
            middlewareData: ve
        } = se({
            strategy: `fixed`,
            placement: le,
            whileElementsMounted: (...e) => o(...e, {
                animationFrame: m === `always`
            }),
            elements: {
                reference: x.anchor
            },
            middleware: [g({
                mainAxis: i + w,
                alignmentAxis: s
            }), l && C({
                mainAxis: !0,
                crossAxis: !1,
                limiter: f === `partial` ? v() : void 0,
                ...pe
            }), l && b({
                ...pe
            }), de({
                ...pe,
                apply: ({
                    elements: e,
                    rects: t,
                    availableWidth: n,
                    availableHeight: r
                }) => {
                    let {
                        width: i,
                        height: a
                    } = t.reference, o = e.floating.style;
                    o.setProperty(`--radix-popper-available-width`, `${n}px`), o.setProperty(`--radix-popper-available-height`, `${r}px`), o.setProperty(`--radix-popper-anchor-width`, `${i}px`), o.setProperty(`--radix-popper-anchor-height`, `${a}px`)
                }
            }), ie && _({
                element: ie,
                padding: c
            }), Zn({
                arrowWidth: ce,
                arrowHeight: w
            }), p && y({
                strategy: `referenceHidden`,
                ...pe,
                boundary: fe ? pe.boundary : void 0
            })]
        }), O = x.setPlacementState;
        De(() => (O(ge), () => {
            O(void 0)
        }), [ge, O]);
        let [ye, be] = Pn(ge), xe = T(h);
        De(() => {
            _e && xe?.()
        }, [_e, xe]);
        let k = ve.arrow?.x,
            Se = ve.arrow?.y,
            Ce = ve.arrow?.centerOffset !== 0,
            [we, Te] = L.useState();
        return De(() => {
            te && Te(window.getComputedStyle(te).zIndex)
        }, [te]), (0, Fn.jsx)(`div`, {
            ref: me.setFloating,
            "data-radix-popper-content-wrapper": ``,
            style: {
                ...he,
                transform: _e ? he.transform : `translate(0, -200%)`,
                minWidth: `max-content`,
                zIndex: we,
                "--radix-popper-transform-origin": [ve.transformOrigin?.x, ve.transformOrigin?.y].join(` `),
                ...ve.hide?.referenceHidden && {
                    visibility: `hidden`,
                    pointerEvents: `none`
                }
            },
            dir: e.dir,
            children: (0, Fn.jsx)(Gn, {
                scope: n,
                placedSide: ye,
                placedAlign: be,
                onArrowChange: ae,
                arrowX: k,
                arrowY: Se,
                shouldHideArrow: Ce,
                children: (0, Fn.jsx)(S.div, {
                    "data-side": ye,
                    "data-align": be,
                    ...ee,
                    ref: re,
                    style: {
                        ...ee.style,
                        animation: _e ? void 0 : `none`
                    }
                })
            })
        })
    }), qn.displayName = Wn, Jn = `PopperArrow`, Yn = {
        top: `bottom`,
        right: `left`,
        bottom: `top`,
        left: `right`
    }, Xn = L.forwardRef(function(e, t) {
        let {
            __scopePopper: n,
            ...r
        } = e, i = Kn(Jn, n), a = Yn[i.placedSide];
        return (0, Fn.jsx)(`span`, {
            ref: i.onArrowChange,
            style: {
                position: `absolute`,
                left: i.arrowX,
                top: i.arrowY,
                [a]: 0,
                transformOrigin: {
                    top: ``,
                    right: `0 0`,
                    bottom: `center 0`,
                    left: `100% 0`
                } [i.placedSide],
                transform: {
                    top: `translateY(100%)`,
                    right: `translateY(50%) rotate(90deg) translateX(-50%)`,
                    bottom: `rotate(180deg)`,
                    left: `translateY(50%) rotate(-90deg) translateX(50%)`
                } [i.placedSide],
                visibility: i.shouldHideArrow ? `hidden` : void 0
            },
            children: (0, Fn.jsx)(jn, {
                ...r,
                ref: t,
                style: {
                    ...r.style,
                    display: `block`
                }
            })
        })
    }), Xn.displayName = Jn, Zn = e => ({
        name: `transformOrigin`,
        options: e,
        fn(t) {
            let {
                placement: n,
                rects: r,
                middlewareData: i
            } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = Pn(n), u = {
                start: `0%`,
                center: `50%`,
                end: `100%`
            } [l], d = (i.arrow?.x ?? 0) + o / 2, f = (i.arrow?.y ?? 0) + s / 2, p = ``, m = ``;
            return c === `bottom` ? (p = a ? u : `${d}px`, m = `${-s}px`) : c === `top` ? (p = a ? u : `${d}px`, m = `${r.floating.height+s}px`) : c === `right` ? (p = `${-s}px`, m = a ? u : `${f}px`) : c === `left` && (p = `${r.floating.width+s}px`, m = a ? u : `${f}px`), {
                data: {
                    x: p,
                    y: m
                }
            }
        }
    }), Qn = Vn, $n = Un, er = qn, tr = Xn
}));

function rr() {
    let [e, t] = sr.useState(cr);
    return sr.useEffect(() => {
        cr || (cr = !0, t(!0))
    }, []), e
}

function ir() {
    return () => {}
}

function ar() {
    return lr(ir, () => !0, () => !1)
}
var or, sr, cr, lr, ur, dr = e((() => {
    or = t(u(), 1), sr = t(u(), 1), cr = !1, lr = or.useSyncExternalStore, ur = typeof lr == `function` ? ar : rr
}));

function fr(e, t) {
    return t === `rtl` ? e === `ArrowLeft` ? `ArrowRight` : e === `ArrowRight` ? `ArrowLeft` : e : e
}

function pr(e, t, n) {
    let r = fr(e.key, n);
    if (!(t === `vertical` && [`ArrowLeft`, `ArrowRight`].includes(r)) && !(t === `horizontal` && [`ArrowUp`, `ArrowDown`].includes(r))) return jr[r]
}

function mr(e, t = !1) {
    let n = document.activeElement;
    for (let r of e)
        if (r === n || (r.focus({
                preventScroll: t
            }), document.activeElement !== n)) return
}

function hr(e, t) {
    return e.map((n, r) => e[(t + r) % e.length])
}
var R, gr, _r, vr, yr, br, xr, Sr, Cr, wr, Tr, Er, Dr, Or, kr, Ar, jr, Mr, Nr, Pr = e((() => {
    R = t(u(), 1), n(), Te(), E(), k(), Ke(), w(), oe(), Ne(), Xe(), Oe(), dr(), gr = s(), _r = `rovingFocusGroup.onEntryFocus`, vr = {
        bubbles: !1,
        cancelable: !0
    }, yr = `RovingFocusGroup`, [br, xr, Sr] = Se(yr), [Cr, wr] = O(yr, [Sr]), [Tr, Er] = Cr(yr), Dr = R.forwardRef((e, t) => (0, gr.jsx)(br.Provider, {
        scope: e.__scopeRovingFocusGroup,
        children: (0, gr.jsx)(br.Slot, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, gr.jsx)(Or, {
                ...e,
                ref: t
            })
        })
    })), Dr.displayName = yr, Or = R.forwardRef((e, t) => {
        let {
            __scopeRovingFocusGroup: n,
            orientation: i,
            loop: a = !1,
            dir: o,
            currentTabStopId: s,
            defaultCurrentTabStopId: c,
            onCurrentTabStopIdChange: l,
            onEntryFocus: u,
            preventScrollOnEntryFocus: d = !1,
            ...f
        } = e, p = R.useRef(null), m = D(t, p), h = qe(o), [g, _] = A({
            prop: s,
            defaultProp: c ?? null,
            onChange: l,
            caller: yr
        }), [v, y] = R.useState(!1), b = T(u), ee = xr(n), x = R.useRef(!1), [te, C] = R.useState(0);
        return R.useEffect(() => {
            let e = p.current;
            if (e) return e.addEventListener(_r, b), () => e.removeEventListener(_r, b)
        }, [b]), (0, gr.jsx)(Tr, {
            scope: n,
            orientation: i,
            dir: h,
            loop: a,
            currentTabStopId: g,
            onItemFocus: R.useCallback(e => _(e), [_]),
            onItemShiftTab: R.useCallback(() => y(!0), []),
            onFocusableItemAdd: R.useCallback(() => C(e => e + 1), []),
            onFocusableItemRemove: R.useCallback(() => C(e => e - 1), []),
            children: (0, gr.jsx)(S.div, {
                tabIndex: v || te === 0 ? -1 : 0,
                "data-orientation": i,
                ...f,
                ref: m,
                style: {
                    outline: `none`,
                    ...e.style
                },
                onMouseDown: r(e.onMouseDown, () => {
                    x.current = !0
                }),
                onFocus: r(e.onFocus, e => {
                    let t = !x.current;
                    if (e.target === e.currentTarget && t && !v) {
                        let t = new CustomEvent(_r, vr);
                        if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                            let e = ee().filter(e => e.focusable);
                            mr([e.find(e => e.active), e.find(e => e.id === g), ...e].filter(Boolean).map(e => e.ref.current), d)
                        }
                    }
                    x.current = !1
                }),
                onBlur: r(e.onBlur, () => y(!1))
            })
        })
    }), kr = `RovingFocusGroupItem`, Ar = R.forwardRef((e, t) => {
        let {
            __scopeRovingFocusGroup: n,
            focusable: i = !0,
            active: a = !1,
            tabStopId: o,
            children: s,
            ...c
        } = e, l = He(), u = o || l, d = Er(kr, n), f = d.currentTabStopId === u, p = xr(n), {
            onFocusableItemAdd: m,
            onFocusableItemRemove: h,
            currentTabStopId: g
        } = d, _ = ur();
        return De(() => {
            if (!(!_ || !i)) return m(), () => h()
        }, [_, i, m, h]), R.useEffect(() => {
            if (!(_ || !i)) return m(), () => h()
        }, [_, i, m, h]), (0, gr.jsx)(br.ItemSlot, {
            scope: n,
            id: u,
            focusable: i,
            active: a,
            children: (0, gr.jsx)(S.span, {
                tabIndex: f ? 0 : -1,
                "data-orientation": d.orientation,
                ...c,
                ref: t,
                onMouseDown: r(e.onMouseDown, e => {
                    i ? d.onItemFocus(u) : e.preventDefault()
                }),
                onFocus: r(e.onFocus, () => d.onItemFocus(u)),
                onKeyDown: r(e.onKeyDown, e => {
                    if (e.key === `Tab` && e.shiftKey) {
                        d.onItemShiftTab();
                        return
                    }
                    if (e.target !== e.currentTarget) return;
                    let t = pr(e, d.orientation, d.dir);
                    if (t !== void 0) {
                        if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                        e.preventDefault();
                        let n = p().filter(e => e.focusable).map(e => e.ref.current);
                        if (t === `last`) n.reverse();
                        else if (t === `prev` || t === `next`) {
                            t === `prev` && n.reverse();
                            let r = n.indexOf(e.currentTarget);
                            n = d.loop ? hr(n, r + 1) : n.slice(r + 1)
                        }
                        setTimeout(() => mr(n))
                    }
                }),
                children: typeof s == `function` ? s({
                    isCurrentTabStop: f,
                    hasTabStop: g != null
                }) : s
            })
        })
    }), Ar.displayName = kr, jr = {
        ArrowLeft: `prev`,
        ArrowUp: `prev`,
        ArrowRight: `next`,
        ArrowDown: `next`,
        PageUp: `first`,
        Home: `first`,
        PageDown: `last`,
        End: `last`
    }, Mr = Dr, Nr = Ar
}));

function Fr(e) {
    return e ? `open` : `closed`
}

function Ir(e) {
    return e === `indeterminate`
}

function Lr(e) {
    return Ir(e) ? `indeterminate` : e ? `checked` : `unchecked`
}

function Rr(e) {
    let t = document.activeElement;
    for (let n of e)
        if (n === t || (n.focus(), document.activeElement !== t)) return
}

function zr(e, t) {
    return e.map((n, r) => e[(t + r) % e.length])
}

function Br(e, t, n) {
    let r = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
        i = n ? e.indexOf(n) : -1,
        a = zr(e, Math.max(i, 0));
    r.length === 1 && (a = a.filter(e => e !== n));
    let o = a.find(e => e.toLowerCase().startsWith(r.toLowerCase()));
    return o === n ? void 0 : o
}

function Vr(e, t) {
    let {
        x: n,
        y: r
    } = e, i = !1;
    for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
        let o = t[e],
            s = t[a],
            c = o.x,
            l = o.y,
            u = s.x,
            d = s.y;
        l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (i = !i)
    }
    return i
}

function Hr(e, t) {
    return t ? Vr({
        x: e.clientX,
        y: e.clientY
    }, t) : !1
}

function Ur(e) {
    return t => t.pointerType === `mouse` ? e(t) : void 0
}
var z, B, Wr, Gr, Kr, qr, Jr, Yr, Xr, Zr, Qr, $r, ei, ti, ni, ri, ii, ai, oi, si, ci, li, ui, di, fi, pi, mi, V, hi, gi, _i, vi, yi, bi, xi, Si, Ci, wi, Ti, Ei, Di, Oi, ki, Ai, ji, Mi, Ni, Pi, Fi, Ii, Li, Ri, zi, Bi, Vi, Hi, Ui, Wi, Gi, Ki, qi, Ji, Yi, Xi, Zi, Qi, $i, ea, ta, na, ra, ia, aa, oa, sa, ca, la, ua, da, fa, pa, ma, ha, ga = e((() => {
        z = t(u(), 1), n(), Te(), E(), k(), Xe(), ue(), Dt(), ht(), Ke(), nr(), xt(), Ve(), w(), Pr(), x(), oe(), a(), le(), B = s(), Wr = [`Enter`, ` `], Gr = [`ArrowDown`, `PageUp`, `Home`], Kr = [`ArrowUp`, `PageDown`, `End`], qr = [...Gr, ...Kr], Jr = {
            ltr: [...Wr, `ArrowRight`],
            rtl: [...Wr, `ArrowLeft`]
        }, Yr = {
            ltr: [`ArrowLeft`],
            rtl: [`ArrowRight`]
        }, Xr = `Menu`, [Zr, Qr, $r] = Se(Xr), [ei, ti] = O(Xr, [$r, Rn, wr]), ni = Rn(), ri = wr(), [ii, ai] = ei(Xr), [oi, si] = ei(Xr), ci = e => {
            let {
                __scopeMenu: t,
                open: n = !1,
                children: r,
                dir: i,
                onOpenChange: a,
                modal: o = !0
            } = e, s = ni(t), [c, l] = z.useState(null), u = z.useRef(!1), d = T(a), f = qe(i);
            return z.useEffect(() => {
                let e = () => {
                        u.current = !0, document.addEventListener(`pointerdown`, t, {
                            capture: !0,
                            once: !0
                        }), document.addEventListener(`pointermove`, t, {
                            capture: !0,
                            once: !0
                        })
                    },
                    t = () => u.current = !1;
                return document.addEventListener(`keydown`, e, {
                    capture: !0
                }), () => {
                    document.removeEventListener(`keydown`, e, {
                        capture: !0
                    }), document.removeEventListener(`pointerdown`, t, {
                        capture: !0
                    }), document.removeEventListener(`pointermove`, t, {
                        capture: !0
                    })
                }
            }, []), z.useEffect(() => {
                if (!n) return;
                let e = () => d(!1);
                return window.addEventListener(`blur`, e), () => window.removeEventListener(`blur`, e)
            }, [n, d]), (0, B.jsx)(Qn, {
                ...s,
                children: (0, B.jsx)(ii, {
                    scope: t,
                    open: n,
                    onOpenChange: d,
                    content: c,
                    onContentChange: l,
                    children: (0, B.jsx)(oi, {
                        scope: t,
                        onClose: z.useCallback(() => d(!1), [d]),
                        isUsingKeyboardRef: u,
                        dir: f,
                        modal: o,
                        children: r
                    })
                })
            })
        }, ci.displayName = Xr, li = `MenuAnchor`, ui = z.forwardRef((e, t) => {
            let {
                __scopeMenu: n,
                ...r
            } = e, i = ni(n);
            return (0, B.jsx)($n, {
                ...i,
                ...r,
                ref: t
            })
        }), ui.displayName = li, di = `MenuPortal`, [fi, pi] = ei(di, {
            forceMount: void 0
        }), mi = e => {
            let {
                __scopeMenu: t,
                forceMount: n,
                children: r,
                container: i
            } = e, a = ai(di, t);
            return (0, B.jsx)(fi, {
                scope: t,
                forceMount: n,
                children: (0, B.jsx)(M, {
                    present: n || a.open,
                    children: (0, B.jsx)(bt, {
                        asChild: !0,
                        container: i,
                        children: r
                    })
                })
            })
        }, mi.displayName = di, V = `MenuContent`, [hi, gi] = ei(V), _i = z.forwardRef((e, t) => {
            let n = pi(V, e.__scopeMenu),
                {
                    forceMount: r = n.forceMount,
                    ...i
                } = e,
                a = ai(V, e.__scopeMenu),
                o = si(V, e.__scopeMenu);
            return (0, B.jsx)(Zr.Provider, {
                scope: e.__scopeMenu,
                children: (0, B.jsx)(M, {
                    present: r || a.open,
                    children: (0, B.jsx)(Zr.Slot, {
                        scope: e.__scopeMenu,
                        children: o.modal ? (0, B.jsx)(vi, {
                            ...i,
                            ref: t
                        }) : (0, B.jsx)(yi, {
                            ...i,
                            ref: t
                        })
                    })
                })
            })
        }), vi = z.forwardRef((e, t) => {
            let n = ai(V, e.__scopeMenu),
                a = z.useRef(null),
                o = D(t, a);
            return z.useEffect(() => {
                let e = a.current;
                if (e) return i(e)
            }, []), (0, B.jsx)(xi, {
                ...e,
                ref: o,
                trapFocus: n.open,
                disableOutsidePointerEvents: n.open,
                disableOutsideScroll: !0,
                onFocusOutside: r(e.onFocusOutside, e => e.preventDefault(), {
                    checkForDefaultPrevented: !1
                }),
                onDismiss: () => n.onOpenChange(!1)
            })
        }), yi = z.forwardRef((e, t) => {
            let n = ai(V, e.__scopeMenu);
            return (0, B.jsx)(xi, {
                ...e,
                ref: t,
                trapFocus: !1,
                disableOutsidePointerEvents: !1,
                disableOutsideScroll: !1,
                onDismiss: () => n.onOpenChange(!1)
            })
        }), bi = ie(`MenuContent.ScrollLock`), xi = z.forwardRef((e, t) => {
            let {
                __scopeMenu: n,
                loop: i = !1,
                trapFocus: a,
                onOpenAutoFocus: o,
                onCloseAutoFocus: s,
                disableOutsidePointerEvents: c,
                onEntryFocus: l,
                onEscapeKeyDown: u,
                onPointerDownOutside: d,
                onFocusOutside: f,
                onInteractOutside: p,
                onDismiss: m,
                disableOutsideScroll: h,
                ...g
            } = e, _ = ai(V, n), v = si(V, n), y = ni(n), b = ri(n), ee = Qr(n), [x, te] = z.useState(null), S = z.useRef(null), C = D(t, S, _.onContentChange), ne = z.useRef(0), re = z.useRef(``), ie = z.useRef(0), oe = z.useRef(null), se = z.useRef(`right`), w = z.useRef(0), le = h ? ae : z.Fragment, ue = h ? {
                as: bi,
                allowPinchZoom: !0
            } : void 0, de = e => {
                let t = re.current + e,
                    n = ee().filter(e => !e.disabled),
                    r = document.activeElement,
                    i = n.find(e => e.ref.current === r)?.textValue,
                    a = Br(n.map(e => e.textValue), t, i),
                    o = n.find(e => e.textValue === a)?.ref.current;
                (function e(t) {
                    re.current = t, window.clearTimeout(ne.current), t !== `` && (ne.current = window.setTimeout(() => e(``), 1e3))
                })(t), o && setTimeout(() => o.focus())
            };
            z.useEffect(() => () => window.clearTimeout(ne.current), []), St();
            let T = z.useCallback(e => se.current === oe.current?.side && Hr(e, oe.current?.area), []);
            return (0, B.jsx)(hi, {
                scope: n,
                searchRef: re,
                onItemEnter: z.useCallback(e => {
                    T(e) && e.preventDefault()
                }, [T]),
                onItemLeave: z.useCallback(e => {
                    T(e) || (S.current?.focus(), te(null))
                }, [T]),
                onTriggerLeave: z.useCallback(e => {
                    T(e) && e.preventDefault()
                }, [T]),
                pointerGraceTimerRef: ie,
                onPointerGraceIntentChange: z.useCallback(e => {
                    oe.current = e
                }, []),
                children: (0, B.jsx)(le, {
                    ...ue,
                    children: (0, B.jsx)(pt, {
                        asChild: !0,
                        trapped: a,
                        onMountAutoFocus: r(o, e => {
                            e.preventDefault(), S.current?.focus({
                                preventScroll: !0
                            })
                        }),
                        onUnmountAutoFocus: s,
                        children: (0, B.jsx)(ce, {
                            asChild: !0,
                            disableOutsidePointerEvents: c,
                            onEscapeKeyDown: u,
                            onPointerDownOutside: d,
                            onFocusOutside: f,
                            onInteractOutside: p,
                            onDismiss: m,
                            children: (0, B.jsx)(Mr, {
                                asChild: !0,
                                ...b,
                                dir: v.dir,
                                orientation: `vertical`,
                                loop: i,
                                currentTabStopId: x,
                                onCurrentTabStopIdChange: te,
                                onEntryFocus: r(l, e => {
                                    v.isUsingKeyboardRef.current || e.preventDefault()
                                }),
                                preventScrollOnEntryFocus: !0,
                                children: (0, B.jsx)(er, {
                                    role: `menu`,
                                    "aria-orientation": `vertical`,
                                    "data-state": Fr(_.open),
                                    "data-radix-menu-content": ``,
                                    dir: v.dir,
                                    ...y,
                                    ...g,
                                    ref: C,
                                    style: {
                                        outline: `none`,
                                        ...g.style
                                    },
                                    onKeyDown: r(g.onKeyDown, e => {
                                        let t = e.target.closest(`[data-radix-menu-content]`) === e.currentTarget,
                                            n = e.ctrlKey || e.altKey || e.metaKey,
                                            r = e.key.length === 1;
                                        t && (e.key === `Tab` && e.preventDefault(), !n && r && de(e.key));
                                        let i = S.current;
                                        if (e.target !== i || !qr.includes(e.key)) return;
                                        e.preventDefault();
                                        let a = ee().filter(e => !e.disabled).map(e => e.ref.current);
                                        Kr.includes(e.key) && a.reverse(), Rr(a)
                                    }),
                                    onBlur: r(e.onBlur, e => {
                                        e.currentTarget.contains(e.target) || (window.clearTimeout(ne.current), re.current = ``)
                                    }),
                                    onPointerMove: r(e.onPointerMove, Ur(e => {
                                        let t = e.target,
                                            n = w.current !== e.clientX;
                                        if (e.currentTarget.contains(t) && n) {
                                            let t = e.clientX > w.current ? `right` : `left`;
                                            se.current = t, w.current = e.clientX
                                        }
                                    }))
                                })
                            })
                        })
                    })
                })
            })
        }), _i.displayName = V, Si = `MenuGroup`, Ci = z.forwardRef((e, t) => {
            let {
                __scopeMenu: n,
                ...r
            } = e;
            return (0, B.jsx)(S.div, {
                role: `group`,
                ...r,
                ref: t
            })
        }), Ci.displayName = Si, wi = `MenuLabel`, Ti = z.forwardRef((e, t) => {
            let {
                __scopeMenu: n,
                ...r
            } = e;
            return (0, B.jsx)(S.div, {
                ...r,
                ref: t
            })
        }), Ti.displayName = wi, Ei = `MenuItem`, Di = `menu.itemSelect`, Oi = z.forwardRef((e, t) => {
            let {
                disabled: n = !1,
                onSelect: i,
                ...a
            } = e, o = z.useRef(null), s = si(Ei, e.__scopeMenu), c = gi(Ei, e.__scopeMenu), l = D(t, o), u = z.useRef(!1), d = () => {
                let e = o.current;
                if (!n && e) {
                    let t = new CustomEvent(Di, {
                        bubbles: !0,
                        cancelable: !0
                    });
                    e.addEventListener(Di, e => i?.(e), {
                        once: !0
                    }), ne(e, t), t.defaultPrevented ? u.current = !1 : s.onClose()
                }
            };
            return (0, B.jsx)(ki, {
                ...a,
                ref: l,
                disabled: n,
                onClick: r(e.onClick, d),
                onPointerDown: t => {
                    e.onPointerDown?.(t), u.current = !0
                },
                onPointerUp: r(e.onPointerUp, e => {
                    u.current || e.currentTarget?.click()
                }),
                onKeyDown: r(e.onKeyDown, e => {
                    n || e.target !== e.currentTarget || c.searchRef.current !== `` && e.key === ` ` || Wr.includes(e.key) && (e.currentTarget.click(), e.preventDefault())
                })
            })
        }), Oi.displayName = Ei, ki = z.forwardRef((e, t) => {
            let {
                __scopeMenu: n,
                disabled: i = !1,
                textValue: a,
                ...o
            } = e, s = gi(Ei, n), c = ri(n), l = z.useRef(null), u = D(t, l), [d, f] = z.useState(!1), [p, m] = z.useState(``);
            return z.useEffect(() => {
                let e = l.current;
                e && m((e.textContent ?? ``).trim())
            }, [o.children]), (0, B.jsx)(Zr.ItemSlot, {
                scope: n,
                disabled: i,
                textValue: a ?? p,
                children: (0, B.jsx)(Nr, {
                    asChild: !0,
                    ...c,
                    focusable: !i,
                    children: (0, B.jsx)(S.div, {
                        role: `menuitem`,
                        "data-highlighted": d ? `` : void 0,
                        "aria-disabled": i || void 0,
                        "data-disabled": i ? `` : void 0,
                        ...o,
                        ref: u,
                        onPointerMove: r(e.onPointerMove, Ur(e => {
                            i ? s.onItemLeave(e) : (s.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus({
                                preventScroll: !0
                            }))
                        })),
                        onPointerLeave: r(e.onPointerLeave, Ur(e => s.onItemLeave(e))),
                        onFocus: r(e.onFocus, () => f(!0)),
                        onBlur: r(e.onBlur, () => f(!1))
                    })
                })
            })
        }), Ai = `MenuCheckboxItem`, ji = z.forwardRef((e, t) => {
            let {
                checked: n = !1,
                onCheckedChange: i,
                ...a
            } = e;
            return (0, B.jsx)(zi, {
                scope: e.__scopeMenu,
                checked: n,
                children: (0, B.jsx)(Oi, {
                    role: `menuitemcheckbox`,
                    "aria-checked": Ir(n) ? `mixed` : n,
                    ...a,
                    ref: t,
                    "data-state": Lr(n),
                    onSelect: r(a.onSelect, () => i?.(Ir(n) ? !0 : !n), {
                        checkForDefaultPrevented: !1
                    })
                })
            })
        }), ji.displayName = Ai, Mi = `MenuRadioGroup`, [Ni, Pi] = ei(Mi, {
            value: void 0,
            onValueChange: () => {}
        }), Fi = z.forwardRef((e, t) => {
            let {
                value: n,
                onValueChange: r,
                ...i
            } = e, a = T(r);
            return (0, B.jsx)(Ni, {
                scope: e.__scopeMenu,
                value: n,
                onValueChange: a,
                children: (0, B.jsx)(Ci, {
                    ...i,
                    ref: t
                })
            })
        }), Fi.displayName = Mi, Ii = `MenuRadioItem`, Li = z.forwardRef((e, t) => {
            let {
                value: n,
                ...i
            } = e, a = Pi(Ii, e.__scopeMenu), o = n === a.value;
            return (0, B.jsx)(zi, {
                scope: e.__scopeMenu,
                checked: o,
                children: (0, B.jsx)(Oi, {
                    role: `menuitemradio`,
                    "aria-checked": o,
                    ...i,
                    ref: t,
                    "data-state": Lr(o),
                    onSelect: r(i.onSelect, () => a.onValueChange?.(n), {
                        checkForDefaultPrevented: !1
                    })
                })
            })
        }), Li.displayName = Ii, Ri = `MenuItemIndicator`, [zi, Bi] = ei(Ri, {
            checked: !1
        }), Vi = z.forwardRef((e, t) => {
            let {
                __scopeMenu: n,
                forceMount: r,
                ...i
            } = e, a = Bi(Ri, n);
            return (0, B.jsx)(M, {
                present: r || Ir(a.checked) || a.checked === !0,
                children: (0, B.jsx)(S.span, {
                    ...i,
                    ref: t,
                    "data-state": Lr(a.checked)
                })
            })
        }), Vi.displayName = Ri, Hi = `MenuSeparator`, Ui = z.forwardRef((e, t) => {
            let {
                __scopeMenu: n,
                ...r
            } = e;
            return (0, B.jsx)(S.div, {
                role: `separator`,
                "aria-orientation": `horizontal`,
                ...r,
                ref: t
            })
        }), Ui.displayName = Hi, Wi = `MenuArrow`, Gi = z.forwardRef((e, t) => {
            let {
                __scopeMenu: n,
                ...r
            } = e, i = ni(n);
            return (0, B.jsx)(tr, {
                ...i,
                ...r,
                ref: t
            })
        }), Gi.displayName = Wi, Ki = `MenuSub`, [qi, Ji] = ei(Ki), Yi = e => {
            let {
                __scopeMenu: t,
                children: n,
                open: r = !1,
                onOpenChange: i
            } = e, a = ai(Ki, t), o = ni(t), [s, c] = z.useState(null), [l, u] = z.useState(null), d = T(i);
            return z.useEffect(() => (a.open === !1 && d(!1), () => d(!1)), [a.open, d]), (0, B.jsx)(Qn, {
                ...o,
                children: (0, B.jsx)(ii, {
                    scope: t,
                    open: r,
                    onOpenChange: d,
                    content: l,
                    onContentChange: u,
                    children: (0, B.jsx)(qi, {
                        scope: t,
                        contentId: He(),
                        triggerId: He(),
                        trigger: s,
                        onTriggerChange: c,
                        children: n
                    })
                })
            })
        }, Yi.displayName = Ki, Xi = `MenuSubTrigger`, Zi = z.forwardRef((e, t) => {
            let n = ai(Xi, e.__scopeMenu),
                i = si(Xi, e.__scopeMenu),
                a = Ji(Xi, e.__scopeMenu),
                o = gi(Xi, e.__scopeMenu),
                s = z.useRef(null),
                {
                    pointerGraceTimerRef: c,
                    onPointerGraceIntentChange: l
                } = o,
                u = {
                    __scopeMenu: e.__scopeMenu
                },
                d = z.useCallback(() => {
                    s.current && window.clearTimeout(s.current), s.current = null
                }, []);
            z.useEffect(() => d, [d]), z.useEffect(() => {
                let e = c.current;
                return () => {
                    window.clearTimeout(e), l(null)
                }
            }, [c, l]);
            let f = D(t, a.onTriggerChange);
            return (0, B.jsx)(ui, {
                asChild: !0,
                ...u,
                children: (0, B.jsx)(ki, {
                    id: a.triggerId,
                    "aria-haspopup": `menu`,
                    "aria-expanded": n.open,
                    "aria-controls": n.open ? a.contentId : void 0,
                    "data-state": Fr(n.open),
                    ...e,
                    ref: f,
                    onClick: t => {
                        e.onClick?.(t), !(e.disabled || t.defaultPrevented) && (t.currentTarget.focus(), n.open || n.onOpenChange(!0))
                    },
                    onPointerMove: r(e.onPointerMove, Ur(t => {
                        o.onItemEnter(t), !t.defaultPrevented && !e.disabled && !n.open && !s.current && (o.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
                            n.onOpenChange(!0), d()
                        }, 100))
                    })),
                    onPointerLeave: r(e.onPointerLeave, Ur(e => {
                        d();
                        let t = n.content?.getBoundingClientRect();
                        if (t) {
                            let r = n.content?.dataset.side,
                                i = r === `right`,
                                a = i ? -5 : 5,
                                s = t[i ? `left` : `right`],
                                l = t[i ? `right` : `left`];
                            o.onPointerGraceIntentChange({
                                area: [{
                                    x: e.clientX + a,
                                    y: e.clientY
                                }, {
                                    x: s,
                                    y: t.top
                                }, {
                                    x: l,
                                    y: t.top
                                }, {
                                    x: l,
                                    y: t.bottom
                                }, {
                                    x: s,
                                    y: t.bottom
                                }],
                                side: r
                            }), window.clearTimeout(c.current), c.current = window.setTimeout(() => o.onPointerGraceIntentChange(null), 300)
                        } else {
                            if (o.onTriggerLeave(e), e.defaultPrevented) return;
                            o.onPointerGraceIntentChange(null)
                        }
                    })),
                    onKeyDown: r(e.onKeyDown, t => {
                        e.disabled || t.target !== t.currentTarget || o.searchRef.current !== `` && t.key === ` ` || Jr[i.dir].includes(t.key) && (n.onOpenChange(!0), n.content?.focus(), t.preventDefault())
                    })
                })
            })
        }), Zi.displayName = Xi, Qi = `MenuSubContent`, $i = z.forwardRef((e, t) => {
            let n = pi(V, e.__scopeMenu),
                {
                    forceMount: i = n.forceMount,
                    align: a = `start`,
                    ...o
                } = e,
                s = ai(V, e.__scopeMenu),
                c = si(V, e.__scopeMenu),
                l = Ji(Qi, e.__scopeMenu),
                u = z.useRef(null),
                d = D(t, u);
            return (0, B.jsx)(Zr.Provider, {
                scope: e.__scopeMenu,
                children: (0, B.jsx)(M, {
                    present: i || s.open,
                    children: (0, B.jsx)(Zr.Slot, {
                        scope: e.__scopeMenu,
                        children: (0, B.jsx)(xi, {
                            id: l.contentId,
                            "aria-labelledby": l.triggerId,
                            ...o,
                            ref: d,
                            align: a,
                            side: c.dir === `rtl` ? `left` : `right`,
                            disableOutsidePointerEvents: !1,
                            disableOutsideScroll: !1,
                            trapFocus: !1,
                            onOpenAutoFocus: e => {
                                c.isUsingKeyboardRef.current && u.current?.focus(), e.preventDefault()
                            },
                            onCloseAutoFocus: e => e.preventDefault(),
                            onFocusOutside: r(e.onFocusOutside, e => {
                                e.target !== l.trigger && s.onOpenChange(!1)
                            }),
                            onEscapeKeyDown: r(e.onEscapeKeyDown, e => {
                                c.onClose(), e.preventDefault()
                            }),
                            onKeyDown: r(e.onKeyDown, e => {
                                let t = e.currentTarget.contains(e.target),
                                    n = Yr[c.dir].includes(e.key);
                                t && n && (s.onOpenChange(!1), l.trigger?.focus(), e.preventDefault())
                            })
                        })
                    })
                })
            })
        }), $i.displayName = Qi, ea = ci, ta = ui, na = mi, ra = _i, ia = Ci, aa = Ti, oa = Oi, sa = ji, ca = Fi, la = Li, ua = Vi, da = Ui, fa = Gi, pa = Yi, ma = Zi, ha = $i
    })),
    H, U, _a, va, ya, W, ba, xa, Sa, Ca, wa, Ta, Ea, Da, Oa, ka, Aa, ja, Ma, Na, Pa, Fa, Ia, La, Ra, za, Ba, Va, Ha, Ua, Wa, Ga, Ka, qa, Ja, Ya, Xa, Za, Qa, $a, eo, to, no, ro, io, ao, oo, so, co, lo, uo, fo = e((() => {
        H = t(u(), 1), n(), E(), k(), Ne(), w(), ga(), Ke(), U = s(), _a = `DropdownMenu`, [va, ya] = O(_a, [ti]), W = ti(), [ba, xa] = va(_a), Sa = e => {
            let {
                __scopeDropdownMenu: t,
                children: n,
                dir: r,
                open: i,
                defaultOpen: a,
                onOpenChange: o,
                modal: s = !0
            } = e, c = W(t), l = H.useRef(null), [u, d] = A({
                prop: i,
                defaultProp: a ?? !1,
                onChange: o,
                caller: _a
            });
            return (0, U.jsx)(ba, {
                scope: t,
                triggerId: He(),
                triggerRef: l,
                contentId: He(),
                open: u,
                onOpenChange: d,
                onOpenToggle: H.useCallback(() => d(e => !e), [d]),
                modal: s,
                children: (0, U.jsx)(ea, {
                    ...c,
                    open: u,
                    onOpenChange: d,
                    dir: r,
                    modal: s,
                    children: n
                })
            })
        }, Sa.displayName = _a, Ca = `DropdownMenuTrigger`, wa = H.forwardRef((e, t) => {
            let {
                __scopeDropdownMenu: n,
                disabled: i = !1,
                ...a
            } = e, o = xa(Ca, n), s = W(n), c = D(t, o.triggerRef);
            return (0, U.jsx)(ta, {
                asChild: !0,
                ...s,
                children: (0, U.jsx)(S.button, {
                    type: `button`,
                    id: o.triggerId,
                    "aria-haspopup": `menu`,
                    "aria-expanded": o.open,
                    "aria-controls": o.open ? o.contentId : void 0,
                    "data-state": o.open ? `open` : `closed`,
                    "data-disabled": i ? `` : void 0,
                    disabled: i,
                    ...a,
                    ref: c,
                    onPointerDown: r(e.onPointerDown, e => {
                        !i && e.button === 0 && e.ctrlKey === !1 && (o.onOpenToggle(), o.open || e.preventDefault())
                    }),
                    onKeyDown: r(e.onKeyDown, e => {
                        i || ([`Enter`, ` `].includes(e.key) && o.onOpenToggle(), e.key === `ArrowDown` && o.onOpenChange(!0), [`Enter`, ` `, `ArrowDown`].includes(e.key) && e.preventDefault())
                    })
                })
            })
        }), wa.displayName = Ca, Ta = `DropdownMenuPortal`, Ea = e => {
            let {
                __scopeDropdownMenu: t,
                ...n
            } = e, r = W(t);
            return (0, U.jsx)(na, {
                ...r,
                ...n
            })
        }, Ea.displayName = Ta, Da = `DropdownMenuContent`, Oa = H.forwardRef((e, t) => {
            let {
                __scopeDropdownMenu: n,
                ...i
            } = e, a = xa(Da, n), o = W(n), s = H.useRef(!1);
            return (0, U.jsx)(ra, {
                id: a.contentId,
                "aria-labelledby": a.triggerId,
                ...o,
                ...i,
                ref: t,
                onCloseAutoFocus: r(e.onCloseAutoFocus, e => {
                    s.current || a.triggerRef.current?.focus(), s.current = !1, e.preventDefault()
                }),
                onInteractOutside: r(e.onInteractOutside, e => {
                    let t = e.detail.originalEvent,
                        n = t.button === 0 && t.ctrlKey === !0,
                        r = t.button === 2 || n;
                    (!a.modal || r) && (s.current = !0)
                }),
                style: {
                    ...e.style,
                    "--radix-dropdown-menu-content-transform-origin": `var(--radix-popper-transform-origin)`,
                    "--radix-dropdown-menu-content-available-width": `var(--radix-popper-available-width)`,
                    "--radix-dropdown-menu-content-available-height": `var(--radix-popper-available-height)`,
                    "--radix-dropdown-menu-trigger-width": `var(--radix-popper-anchor-width)`,
                    "--radix-dropdown-menu-trigger-height": `var(--radix-popper-anchor-height)`
                }
            })
        }), Oa.displayName = Da, ka = `DropdownMenuGroup`, Aa = H.forwardRef((e, t) => {
            let {
                __scopeDropdownMenu: n,
                ...r
            } = e, i = W(n);
            return (0, U.jsx)(ia, {
                ...i,
                ...r,
                ref: t
            })
        }), Aa.displayName = ka, ja = `DropdownMenuLabel`, Ma = H.forwardRef((e, t) => {
            let {
                __scopeDropdownMenu: n,
                ...r
            } = e, i = W(n);
            return (0, U.jsx)(aa, {
                ...i,
                ...r,
                ref: t
            })
        }), Ma.displayName = ja, Na = `DropdownMenuItem`, Pa = H.forwardRef((e, t) => {
            let {
                __scopeDropdownMenu: n,
                ...r
            } = e, i = W(n);
            return (0, U.jsx)(oa, {
                ...i,
                ...r,
                ref: t
            })
        }), Pa.displayName = Na, Fa = `DropdownMenuCheckboxItem`, Ia = H.forwardRef((e, t) => {
            let {
                __scopeDropdownMenu: n,
                ...r
            } = e, i = W(n);
            return (0, U.jsx)(sa, {
                ...i,
                ...r,
                ref: t
            })
        }), Ia.displayName = Fa, La = `DropdownMenuRadioGroup`, Ra = H.forwardRef((e, t) => {
            let {
                __scopeDropdownMenu: n,
                ...r
            } = e, i = W(n);
            return (0, U.jsx)(ca, {
                ...i,
                ...r,
                ref: t
            })
        }), Ra.displayName = La, za = `DropdownMenuRadioItem`, Ba = H.forwardRef((e, t) => {
            let {
                __scopeDropdownMenu: n,
                ...r
            } = e, i = W(n);
            return (0, U.jsx)(la, {
                ...i,
                ...r,
                ref: t
            })
        }), Ba.displayName = za, Va = `DropdownMenuItemIndicator`, Ha = H.forwardRef((e, t) => {
            let {
                __scopeDropdownMenu: n,
                ...r
            } = e, i = W(n);
            return (0, U.jsx)(ua, {
                ...i,
                ...r,
                ref: t
            })
        }), Ha.displayName = Va, Ua = `DropdownMenuSeparator`, Wa = H.forwardRef((e, t) => {
            let {
                __scopeDropdownMenu: n,
                ...r
            } = e, i = W(n);
            return (0, U.jsx)(da, {
                ...i,
                ...r,
                ref: t
            })
        }), Wa.displayName = Ua, Ga = `DropdownMenuArrow`, Ka = H.forwardRef((e, t) => {
            let {
                __scopeDropdownMenu: n,
                ...r
            } = e, i = W(n);
            return (0, U.jsx)(fa, {
                ...i,
                ...r,
                ref: t
            })
        }), Ka.displayName = Ga, qa = e => {
            let {
                __scopeDropdownMenu: t,
                children: n,
                open: r,
                onOpenChange: i,
                defaultOpen: a
            } = e, o = W(t), [s, c] = A({
                prop: r,
                defaultProp: a ?? !1,
                onChange: i,
                caller: `DropdownMenuSub`
            });
            return (0, U.jsx)(pa, {
                ...o,
                open: s,
                onOpenChange: c,
                children: n
            })
        }, Ja = `DropdownMenuSubTrigger`, Ya = H.forwardRef((e, t) => {
            let {
                __scopeDropdownMenu: n,
                ...r
            } = e, i = W(n);
            return (0, U.jsx)(ma, {
                ...i,
                ...r,
                ref: t
            })
        }), Ya.displayName = Ja, Xa = `DropdownMenuSubContent`, Za = H.forwardRef((e, t) => {
            let {
                __scopeDropdownMenu: n,
                ...r
            } = e, i = W(n);
            return (0, U.jsx)(ha, {
                ...i,
                ...r,
                ref: t,
                style: {
                    ...e.style,
                    "--radix-dropdown-menu-content-transform-origin": `var(--radix-popper-transform-origin)`,
                    "--radix-dropdown-menu-content-available-width": `var(--radix-popper-available-width)`,
                    "--radix-dropdown-menu-content-available-height": `var(--radix-popper-available-height)`,
                    "--radix-dropdown-menu-trigger-width": `var(--radix-popper-anchor-width)`,
                    "--radix-dropdown-menu-trigger-height": `var(--radix-popper-anchor-height)`
                }
            })
        }), Za.displayName = Xa, Qa = Sa, $a = wa, eo = Ea, to = Oa, no = Pa, ro = Ia, io = Ra, ao = Ba, oo = Ha, so = Wa, co = qa, lo = Ya, uo = Za
    }));

function po(e) {
    return e ? `open` : `closed`
}
var G, K, mo, ho, go, _o, vo, yo, bo, xo, So, Co, wo, To, Eo, Do, Oo, ko, Ao, jo, Mo, No, Po, Fo, Io, Lo, Ro, zo, Bo, Vo, Ho, Uo, Wo, Go = e((() => {
    G = t(u(), 1), n(), E(), k(), ue(), Dt(), ht(), Ke(), nr(), xt(), Ve(), w(), x(), Ne(), a(), le(), K = s(), mo = `Popover`, [ho, go] = O(mo, [Rn]), _o = Rn(), [vo, yo] = ho(mo), bo = e => {
        let {
            __scopePopover: t,
            children: n,
            open: r,
            defaultOpen: i,
            onOpenChange: a,
            modal: o = !1
        } = e, s = _o(t), c = G.useRef(null), [l, u] = G.useState(!1), [d, f] = A({
            prop: r,
            defaultProp: i ?? !1,
            onChange: a,
            caller: mo
        });
        return (0, K.jsx)(Qn, {
            ...s,
            children: (0, K.jsx)(vo, {
                scope: t,
                contentId: He(),
                triggerRef: c,
                open: d,
                onOpenChange: f,
                onOpenToggle: G.useCallback(() => f(e => !e), [f]),
                hasCustomAnchor: l,
                onCustomAnchorAdd: G.useCallback(() => u(!0), []),
                onCustomAnchorRemove: G.useCallback(() => u(!1), []),
                modal: o,
                children: n
            })
        })
    }, bo.displayName = mo, xo = `PopoverAnchor`, So = G.forwardRef((e, t) => {
        let {
            __scopePopover: n,
            ...r
        } = e, i = yo(xo, n), a = _o(n), {
            onCustomAnchorAdd: o,
            onCustomAnchorRemove: s
        } = i;
        return G.useEffect(() => (o(), () => s()), [o, s]), (0, K.jsx)($n, {
            ...a,
            ...r,
            ref: t
        })
    }), So.displayName = xo, Co = `PopoverTrigger`, wo = G.forwardRef((e, t) => {
        let {
            __scopePopover: n,
            ...i
        } = e, a = yo(Co, n), o = _o(n), s = D(t, a.triggerRef), c = (0, K.jsx)(S.button, {
            type: `button`,
            "aria-haspopup": `dialog`,
            "aria-expanded": a.open,
            "aria-controls": a.open ? a.contentId : void 0,
            "data-state": po(a.open),
            ...i,
            ref: s,
            onClick: r(e.onClick, a.onOpenToggle)
        });
        return a.hasCustomAnchor ? c : (0, K.jsx)($n, {
            asChild: !0,
            ...o,
            children: c
        })
    }), wo.displayName = Co, To = `PopoverPortal`, [Eo, Do] = ho(To, {
        forceMount: void 0
    }), Oo = e => {
        let {
            __scopePopover: t,
            forceMount: n,
            children: r,
            container: i
        } = e, a = yo(To, t);
        return (0, K.jsx)(Eo, {
            scope: t,
            forceMount: n,
            children: (0, K.jsx)(M, {
                present: n || a.open,
                children: (0, K.jsx)(bt, {
                    asChild: !0,
                    container: i,
                    children: r
                })
            })
        })
    }, Oo.displayName = To, ko = `PopoverContent`, Ao = G.forwardRef((e, t) => {
        let n = Do(ko, e.__scopePopover),
            {
                forceMount: r = n.forceMount,
                ...i
            } = e,
            a = yo(ko, e.__scopePopover);
        return (0, K.jsx)(M, {
            present: r || a.open,
            children: a.modal ? (0, K.jsx)(Mo, {
                ...i,
                ref: t
            }) : (0, K.jsx)(No, {
                ...i,
                ref: t
            })
        })
    }), Ao.displayName = ko, jo = ie(`PopoverContent.RemoveScroll`), Mo = G.forwardRef((e, t) => {
        let n = yo(ko, e.__scopePopover),
            a = G.useRef(null),
            o = D(t, a),
            s = G.useRef(!1);
        return G.useEffect(() => {
            let e = a.current;
            if (e) return i(e)
        }, []), (0, K.jsx)(ae, {
            as: jo,
            allowPinchZoom: !0,
            children: (0, K.jsx)(Po, {
                ...e,
                ref: o,
                trapFocus: n.open,
                disableOutsidePointerEvents: !0,
                onCloseAutoFocus: r(e.onCloseAutoFocus, e => {
                    e.preventDefault(), s.current || n.triggerRef.current?.focus()
                }),
                onPointerDownOutside: r(e.onPointerDownOutside, e => {
                    let t = e.detail.originalEvent,
                        n = t.button === 0 && t.ctrlKey === !0,
                        r = t.button === 2 || n;
                    s.current = r
                }, {
                    checkForDefaultPrevented: !1
                }),
                onFocusOutside: r(e.onFocusOutside, e => e.preventDefault(), {
                    checkForDefaultPrevented: !1
                })
            })
        })
    }), No = G.forwardRef((e, t) => {
        let n = yo(ko, e.__scopePopover),
            r = G.useRef(!1),
            i = G.useRef(!1);
        return (0, K.jsx)(Po, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
                e.onCloseAutoFocus?.(t), t.defaultPrevented || (r.current || n.triggerRef.current?.focus(), t.preventDefault()), r.current = !1, i.current = !1
            },
            onInteractOutside: t => {
                e.onInteractOutside?.(t), t.defaultPrevented || (r.current = !0, t.detail.originalEvent.type === `pointerdown` && (i.current = !0));
                let a = t.target;
                n.triggerRef.current?.contains(a) && t.preventDefault(), t.detail.originalEvent.type === `focusin` && i.current && t.preventDefault()
            }
        })
    }), Po = G.forwardRef((e, t) => {
        let {
            __scopePopover: n,
            trapFocus: r,
            onOpenAutoFocus: i,
            onCloseAutoFocus: a,
            disableOutsidePointerEvents: o,
            onEscapeKeyDown: s,
            onPointerDownOutside: c,
            onFocusOutside: l,
            onInteractOutside: u,
            ...d
        } = e, f = yo(ko, n), p = _o(n);
        return St(), (0, K.jsx)(pt, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: i,
            onUnmountAutoFocus: a,
            children: (0, K.jsx)(ce, {
                asChild: !0,
                disableOutsidePointerEvents: o,
                onInteractOutside: u,
                onEscapeKeyDown: s,
                onPointerDownOutside: c,
                onFocusOutside: l,
                onDismiss: () => f.onOpenChange(!1),
                deferPointerDownOutside: !0,
                children: (0, K.jsx)(er, {
                    "data-state": po(f.open),
                    role: `dialog`,
                    id: f.contentId,
                    ...p,
                    ...d,
                    ref: t,
                    style: {
                        ...d.style,
                        "--radix-popover-content-transform-origin": `var(--radix-popper-transform-origin)`,
                        "--radix-popover-content-available-width": `var(--radix-popper-available-width)`,
                        "--radix-popover-content-available-height": `var(--radix-popper-available-height)`,
                        "--radix-popover-trigger-width": `var(--radix-popper-anchor-width)`,
                        "--radix-popover-trigger-height": `var(--radix-popper-anchor-height)`
                    }
                })
            })
        })
    }), Fo = `PopoverClose`, Io = G.forwardRef((e, t) => {
        let {
            __scopePopover: n,
            ...i
        } = e, a = yo(Fo, n);
        return (0, K.jsx)(S.button, {
            type: `button`,
            ...i,
            ref: t,
            onClick: r(e.onClick, () => a.onOpenChange(!1))
        })
    }), Io.displayName = Fo, Lo = `PopoverArrow`, Ro = G.forwardRef((e, t) => {
        let {
            __scopePopover: n,
            ...r
        } = e, i = _o(n);
        return (0, K.jsx)(tr, {
            ...i,
            ...r,
            ref: t
        })
    }), Ro.displayName = Lo, zo = bo, Bo = So, Vo = wo, Ho = Oo, Uo = Ao, Wo = Ro
}));

function Ko(e) {
    let {
        __scopeSlider: t,
        name: n,
        children: r,
        internal_do_not_use_render: i
    } = e, a = hs(ks, t), o = us(t), [s, c] = q.useState(null), l = q.useMemo(() => s ? o().findIndex(e => e.ref.current === s) : -1, [o, s]), u = on(s), d = !s || !!a.form || !!s.closest(`form`), f = a.values[l], p = n ?? (a.name ? a.name + (a.values.length > 1 ? `[]` : ``) : void 0), m = f === void 0 ? 0 : Jo(f, a.min, a.max);
    q.useEffect(() => {
        if (s) return a.thumbs.add(s), () => {
            a.thumbs.delete(s)
        }
    }, [s, a.thumbs]);
    let h = {
        value: f,
        name: p,
        form: a.form,
        isFormControl: d,
        index: l,
        thumb: s,
        onThumbChange: c,
        percent: m,
        size: u
    };
    return (0, J.jsx)(Ds, {
        scope: t,
        ...h,
        children: is(i) ? i(h) : r
    })
}

function qo(e = [], t, n) {
    let r = [...e];
    return r[n] = t, r.sort((e, t) => e - t)
}

function Jo(e, t, n) {
    return h(100 / (n - t) * (e - t), [0, 100])
}

function Yo(e, t) {
    if (t > 2) return `Value ${e+1} of ${t}`;
    if (t === 2) return [`Minimum`, `Maximum`][e]
}

function Xo(e, t) {
    if (e.length === 1) return 0;
    let n = e.map(e => Math.abs(e - t)),
        r = Math.min(...n);
    return n.indexOf(r)
}

function Zo(e, t, n) {
    let r = e / 2;
    return (r - es([0, 50], [0, r])(t) * n) * n
}

function Qo(e) {
    return e.slice(0, -1).map((t, n) => e[n + 1] - t)
}

function $o(e, t) {
    if (t > 0) {
        let n = Qo(e);
        return Math.min(...n) >= t
    }
    return !0
}

function es(e, t) {
    return n => {
        if (e[0] === e[1] || t[0] === t[1]) return t[0];
        let r = (t[1] - t[0]) / (e[1] - e[0]);
        return t[0] + r * (n - e[0])
    }
}

function ts(e) {
    if (!Number.isFinite(e)) return 0;
    let t = e.toString();
    if (t.includes(`e`)) {
        let [e, n] = t.split(`e`), r = e.split(`.`)[1] || ``, i = Number(n);
        return Math.max(0, r.length - i)
    }
    let n = t.split(`.`)[1];
    return n ? n.length : 0
}

function ns(e, t) {
    let n = 10 ** t;
    return Math.round(e * n) / n
}

function rs(e, {
    min: t,
    step: n,
    direction: r,
    multiplier: i
}) {
    let a = ts(n),
        o = (e - t) / n,
        s = Math.round(o),
        c = ns(s * n + t, a) === ns(e, a),
        l;
    return l = c ? s + i * r : r > 0 ? Math.ceil(o) : Math.floor(o), ns(l * n + t, a)
}

function is(e) {
    return typeof e == `function`
}
var q, J, as, os, ss, cs, ls, us, ds, fs, ps, ms, hs, gs, _s, vs, ys, bs, xs, Ss, Cs, ws, Ts, Es, Ds, Os, ks, As, js, Ms, Ns, Ps, Fs = e((() => {
    q = t(u(), 1), p(), n(), E(), k(), Ne(), Xe(), an(), cn(), w(), Te(), J = s(), as = [`PageUp`, `PageDown`], os = [`ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight`], ss = {
        "from-left": [`Home`, `PageDown`, `ArrowDown`, `ArrowLeft`],
        "from-right": [`Home`, `PageDown`, `ArrowDown`, `ArrowRight`],
        "from-bottom": [`Home`, `PageDown`, `ArrowDown`, `ArrowLeft`],
        "from-top": [`Home`, `PageDown`, `ArrowUp`, `ArrowLeft`]
    }, cs = `Slider`, [ls, us, ds] = Se(cs), [fs, ps] = O(cs, [ds]), [ms, hs] = fs(cs), gs = q.forwardRef((e, t) => {
        let {
            name: n,
            min: i = 0,
            max: a = 100,
            step: o = 1,
            orientation: s = `horizontal`,
            disabled: c = !1,
            minStepsBetweenThumbs: l = 0,
            defaultValue: u = [i],
            value: d,
            onValueChange: f = () => {},
            onValueCommit: p = () => {},
            inverted: m = !1,
            form: g,
            ..._
        } = e, v = q.useRef(new Set), y = q.useRef(0), b = q.useRef(!1), ee = s === `horizontal` ? ys : bs, [x, te] = q.useState(null), S = D(t, te), [C = [], ne] = A({
            prop: d,
            defaultProp: u,
            onChange: e => {
                [...v.current][y.current]?.focus({
                    preventScroll: !0,
                    focusVisible: b.current
                }), b.current = !1, f(e)
            }
        }), re = q.useRef(C), ie = q.useRef(C);
        q.useEffect(() => {
            let e = g ? x?.ownerDocument.getElementById(g) : x?.closest(`form`);
            if (e instanceof HTMLFormElement) {
                let t = () => ne(ie.current);
                return e.addEventListener(`reset`, t), () => e.removeEventListener(`reset`, t)
            }
        }, [x, g, ne]);

        function ae(e) {
            ce(e, Xo(C, e))
        }

        function oe(e) {
            ce(e, y.current)
        }

        function se() {
            let e = re.current[y.current];
            C[y.current] !== e && p(C)
        }

        function ce(e, t, {
            commit: n
        } = {
            commit: !1
        }) {
            let r = ts(o),
                s = h(ns(Math.round((e - i) / o) * o + i, r), [i, a]);
            ne((e = []) => {
                let r = qo(e, s, t);
                if ($o(r, l * o)) {
                    y.current = r.indexOf(s);
                    let t = String(r) !== String(e);
                    return t && n && p(r), t ? r : e
                } else return e
            })
        }
        return (0, J.jsx)(ms, {
            scope: e.__scopeSlider,
            name: n,
            disabled: c,
            min: i,
            max: a,
            valueIndexToChangeRef: y,
            thumbs: v.current,
            values: C,
            orientation: s,
            form: g,
            children: (0, J.jsx)(ls.Provider, {
                scope: e.__scopeSlider,
                children: (0, J.jsx)(ls.Slot, {
                    scope: e.__scopeSlider,
                    children: (0, J.jsx)(ee, {
                        "aria-disabled": c,
                        "data-disabled": c ? `` : void 0,
                        ..._,
                        ref: S,
                        onPointerDown: r(_.onPointerDown, () => {
                            c || (re.current = C, b.current = !1)
                        }),
                        min: i,
                        max: a,
                        inverted: m,
                        onSlideStart: c ? void 0 : ae,
                        onSlideMove: c ? void 0 : oe,
                        onSlideEnd: c ? void 0 : se,
                        onHomeKeyDown: () => {
                            c || (b.current = !0, ce(i, 0, {
                                commit: !0
                            }))
                        },
                        onEndKeyDown: () => {
                            c || (b.current = !0, ce(a, C.length - 1, {
                                commit: !0
                            }))
                        },
                        onStepKeyDown: ({
                            event: e,
                            direction: t
                        }) => {
                            if (!c) {
                                b.current = !0;
                                let n = as.includes(e.key) || e.shiftKey && os.includes(e.key) ? 10 : 1,
                                    r = y.current,
                                    a = C[r];
                                ce(rs(a, {
                                    min: i,
                                    step: o,
                                    direction: t,
                                    multiplier: n
                                }), r, {
                                    commit: !0
                                })
                            }
                        }
                    })
                })
            })
        })
    }), gs.displayName = cs, [_s, vs] = fs(cs, {
        startEdge: `left`,
        endEdge: `right`,
        size: `width`,
        direction: 1
    }), ys = q.forwardRef((e, t) => {
        let {
            min: n,
            max: r,
            dir: i,
            inverted: a,
            onSlideStart: o,
            onSlideMove: s,
            onSlideEnd: c,
            onStepKeyDown: l,
            ...u
        } = e, [d, f] = q.useState(null), p = D(t, f), m = q.useRef(void 0), h = qe(i), g = h === `ltr`, _ = g && !a || !g && a;

        function v(e) {
            let t = m.current || d.getBoundingClientRect(),
                i = es([0, t.width], _ ? [n, r] : [r, n]);
            return m.current = t, i(e - t.left)
        }
        return (0, J.jsx)(_s, {
            scope: e.__scopeSlider,
            startEdge: _ ? `left` : `right`,
            endEdge: _ ? `right` : `left`,
            direction: _ ? 1 : -1,
            size: `width`,
            children: (0, J.jsx)(xs, {
                dir: h,
                "data-orientation": `horizontal`,
                ...u,
                ref: p,
                style: {
                    ...u.style,
                    "--radix-slider-thumb-transform": `translateX(-50%)`
                },
                onSlideStart: e => {
                    let t = v(e.clientX);
                    o?.(t)
                },
                onSlideMove: e => {
                    let t = v(e.clientX);
                    s?.(t)
                },
                onSlideEnd: () => {
                    m.current = void 0, c?.()
                },
                onStepKeyDown: e => {
                    let t = ss[_ ? `from-left` : `from-right`].includes(e.key);
                    l?.({
                        event: e,
                        direction: t ? -1 : 1
                    })
                }
            })
        })
    }), bs = q.forwardRef((e, t) => {
        let {
            min: n,
            max: r,
            inverted: i,
            onSlideStart: a,
            onSlideMove: o,
            onSlideEnd: s,
            onStepKeyDown: c,
            ...l
        } = e, u = q.useRef(null), d = D(t, u), f = q.useRef(void 0), p = !i;

        function m(e) {
            let t = f.current || u.current.getBoundingClientRect(),
                i = es([0, t.height], p ? [r, n] : [n, r]);
            return f.current = t, i(e - t.top)
        }
        return (0, J.jsx)(_s, {
            scope: e.__scopeSlider,
            startEdge: p ? `bottom` : `top`,
            endEdge: p ? `top` : `bottom`,
            size: `height`,
            direction: p ? 1 : -1,
            children: (0, J.jsx)(xs, {
                "data-orientation": `vertical`,
                ...l,
                ref: d,
                style: {
                    ...l.style,
                    "--radix-slider-thumb-transform": `translateY(50%)`
                },
                onSlideStart: e => {
                    let t = m(e.clientY);
                    a?.(t)
                },
                onSlideMove: e => {
                    let t = m(e.clientY);
                    o?.(t)
                },
                onSlideEnd: () => {
                    f.current = void 0, s?.()
                },
                onStepKeyDown: e => {
                    let t = ss[p ? `from-bottom` : `from-top`].includes(e.key);
                    c?.({
                        event: e,
                        direction: t ? -1 : 1
                    })
                }
            })
        })
    }), xs = q.forwardRef((e, t) => {
        let {
            __scopeSlider: n,
            onSlideStart: i,
            onSlideMove: a,
            onSlideEnd: o,
            onHomeKeyDown: s,
            onEndKeyDown: c,
            onStepKeyDown: l,
            ...u
        } = e, d = hs(cs, n);
        return (0, J.jsx)(S.span, {
            ...u,
            ref: t,
            onKeyDown: r(e.onKeyDown, e => {
                e.key === `Home` ? (s(e), e.preventDefault()) : e.key === `End` ? (c(e), e.preventDefault()) : as.concat(os).includes(e.key) && (l(e), e.preventDefault())
            }),
            onPointerDown: r(e.onPointerDown, e => {
                let t = e.target;
                t.setPointerCapture(e.pointerId), e.preventDefault(), d.thumbs.has(t) ? t.focus({
                    preventScroll: !0,
                    focusVisible: !1
                }) : i(e)
            }),
            onPointerMove: r(e.onPointerMove, e => {
                e.target.hasPointerCapture(e.pointerId) && a(e)
            }),
            onPointerUp: r(e.onPointerUp, e => {
                let t = e.target;
                t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), o(e))
            })
        })
    }), Ss = `SliderTrack`, Cs = q.forwardRef((e, t) => {
        let {
            __scopeSlider: n,
            ...r
        } = e, i = hs(Ss, n);
        return (0, J.jsx)(S.span, {
            "data-disabled": i.disabled ? `` : void 0,
            "data-orientation": i.orientation,
            ...r,
            ref: t
        })
    }), Cs.displayName = Ss, ws = `SliderRange`, Ts = q.forwardRef((e, t) => {
        let {
            __scopeSlider: n,
            ...r
        } = e, i = hs(ws, n), a = vs(ws, n), o = D(t, q.useRef(null)), s = i.values.length, c = i.values.map(e => Jo(e, i.min, i.max)), l = s > 1 ? Math.min(...c) : 0, u = 100 - Math.max(...c);
        return (0, J.jsx)(S.span, {
            "data-orientation": i.orientation,
            "data-disabled": i.disabled ? `` : void 0,
            ...r,
            ref: o,
            style: {
                ...e.style,
                [a.startEdge]: l + `%`,
                [a.endEdge]: u + `%`
            }
        })
    }), Ts.displayName = ws, Es = `SliderThumb`, [Ds, Os] = fs(Es), ks = `SliderThumbProvider`, Ko.displayName = ks, As = `SliderThumbTrigger`, js = q.forwardRef((e, t) => {
        let {
            __scopeSlider: n,
            ...i
        } = e, a = hs(As, n), o = vs(As, n), {
            index: s,
            value: c,
            percent: l,
            size: u,
            onThumbChange: d
        } = Os(As, n), f = D(t, d), p = Yo(s, a.values.length), m = u?.[o.size], h = m ? Zo(m, l, o.direction) : 0;
        return (0, J.jsx)(`span`, {
            style: {
                transform: `var(--radix-slider-thumb-transform)`,
                position: `absolute`,
                [o.startEdge]: `calc(${l}% + ${h}px)`
            },
            children: (0, J.jsx)(ls.ItemSlot, {
                scope: n,
                children: (0, J.jsx)(S.span, {
                    role: `slider`,
                    "aria-label": e[`aria-label`] || p,
                    "aria-valuemin": a.min,
                    "aria-valuenow": c,
                    "aria-valuemax": a.max,
                    "aria-orientation": a.orientation,
                    "data-orientation": a.orientation,
                    "data-disabled": a.disabled ? `` : void 0,
                    tabIndex: a.disabled ? void 0 : 0,
                    ...i,
                    ref: f,
                    style: c === void 0 ? {
                        display: `none`
                    } : e.style,
                    onFocus: r(e.onFocus, () => {
                        a.valueIndexToChangeRef.current = s
                    })
                })
            })
        })
    }), js.displayName = As, Ms = q.forwardRef((e, t) => {
        let {
            __scopeSlider: n,
            name: r,
            ...i
        } = e;
        return (0, J.jsx)(Ko, {
            __scopeSlider: n,
            name: r,
            internal_do_not_use_render: ({
                index: e,
                isFormControl: r
            }) => (0, J.jsxs)(J.Fragment, {
                children: [(0, J.jsx)(js, {
                    ...i,
                    ref: t,
                    __scopeSlider: n
                }), r ? (0, J.jsx)(Ps, {
                    __scopeSlider: n
                }, e) : null]
            })
        })
    }), Ms.displayName = Es, Ns = `SliderBubbleInput`, Ps = q.forwardRef(({
        __scopeSlider: e,
        ...t
    }, n) => {
        let {
            value: r,
            name: i,
            form: a
        } = Os(Ns, e), o = q.useRef(null), s = D(o, n), c = nn(r);
        return q.useEffect(() => {
            let e = o.current;
            if (!e) return;
            let t = window.HTMLInputElement.prototype,
                n = Object.getOwnPropertyDescriptor(t, `value`).set;
            if (c !== r && n) {
                let t = new Event(`input`, {
                    bubbles: !0
                });
                n.call(e, r), e.dispatchEvent(t)
            }
        }, [c, r]), (0, J.jsx)(S.input, {
            style: {
                display: `none`
            },
            name: i,
            form: a,
            ...t,
            ref: s,
            defaultValue: r
        })
    }), Ps.displayName = Ns
}));

function Is(e) {
    let {
        __scopeSwitch: t,
        checked: n,
        children: r,
        defaultChecked: i,
        disabled: a,
        form: o,
        name: s,
        onCheckedChange: c,
        required: l,
        value: u = `on`,
        internal_do_not_use_render: d
    } = e, [f, p] = A({
        prop: n,
        defaultProp: i ?? !1,
        onChange: c,
        caller: Bs
    }), [m, h] = Y.useState(null), [g, _] = Y.useState(null), v = {
        checked: f,
        setChecked: p,
        disabled: a,
        control: m,
        setControl: h,
        name: s,
        form: o,
        value: u,
        hasConsumerStoppedPropagationRef: Y.useRef(!1),
        required: l,
        defaultChecked: i,
        isFormControl: !m || !!o || !!m.closest(`form`),
        bubbleInput: g,
        setBubbleInput: _
    };
    return (0, zs.jsx)(Us, {
        scope: t,
        ...v,
        children: Ls(d) ? d(v) : r
    })
}

function Ls(e) {
    return typeof e == `function`
}

function Rs(e) {
    return e ? `checked` : `unchecked`
}
var Y, zs, Bs, Vs, Hs, Us, Ws, Gs, Ks, qs, Js, Ys, Xs, Zs, Qs = e((() => {
        Y = t(u(), 1), n(), E(), k(), Ne(), an(), cn(), w(), zs = s(), Bs = `Switch`, [Vs, Hs] = O(Bs), [Us, Ws] = Vs(Bs), Gs = `SwitchTrigger`, Ks = Y.forwardRef(({
            __scopeSwitch: e,
            onClick: t,
            ...n
        }, i) => {
            let {
                control: a,
                form: o,
                value: s,
                disabled: c,
                checked: l,
                required: u,
                setControl: d,
                setChecked: f,
                hasConsumerStoppedPropagationRef: p,
                isFormControl: m,
                bubbleInput: h
            } = Ws(Gs, e), g = D(i, d), _ = Y.useRef(l);
            return Y.useEffect(() => {
                let e = o ? a?.ownerDocument.getElementById(o) : a?.form;
                if (e instanceof HTMLFormElement) {
                    let t = () => f(_.current);
                    return e.addEventListener(`reset`, t), () => e.removeEventListener(`reset`, t)
                }
            }, [a, o, f]), (0, zs.jsx)(S.button, {
                type: `button`,
                role: `switch`,
                "aria-checked": l,
                "aria-required": u,
                "data-state": Rs(l),
                "data-disabled": c ? `` : void 0,
                disabled: c,
                value: s,
                ...n,
                ref: g,
                onClick: r(t, e => {
                    f(e => !e), h && m && (p.current = e.isPropagationStopped(), p.current || e.stopPropagation())
                })
            })
        }), Ks.displayName = Gs, qs = Y.forwardRef((e, t) => {
            let {
                __scopeSwitch: n,
                name: r,
                checked: i,
                defaultChecked: a,
                required: o,
                disabled: s,
                value: c,
                onCheckedChange: l,
                form: u,
                ...d
            } = e;
            return (0, zs.jsx)(Is, {
                __scopeSwitch: n,
                checked: i,
                defaultChecked: a,
                disabled: s,
                required: o,
                onCheckedChange: l,
                name: r,
                form: u,
                value: c,
                internal_do_not_use_render: ({
                    isFormControl: e
                }) => (0, zs.jsxs)(zs.Fragment, {
                    children: [(0, zs.jsx)(Ks, {
                        ...d,
                        ref: t,
                        __scopeSwitch: n
                    }), e && (0, zs.jsx)(Zs, {
                        __scopeSwitch: n
                    })]
                })
            })
        }), qs.displayName = Bs, Js = `SwitchThumb`, Ys = Y.forwardRef((e, t) => {
            let {
                __scopeSwitch: n,
                ...r
            } = e, i = Ws(Js, n);
            return (0, zs.jsx)(S.span, {
                "data-state": Rs(i.checked),
                "data-disabled": i.disabled ? `` : void 0,
                ...r,
                ref: t
            })
        }), Ys.displayName = Js, Xs = `SwitchBubbleInput`, Zs = Y.forwardRef(({
            __scopeSwitch: e,
            ...t
        }, n) => {
            let {
                control: r,
                hasConsumerStoppedPropagationRef: i,
                checked: a,
                defaultChecked: o,
                required: s,
                disabled: c,
                name: l,
                value: u,
                form: d,
                bubbleInput: f,
                setBubbleInput: p
            } = Ws(Xs, e), m = D(n, p), h = nn(a), g = on(r);
            Y.useEffect(() => {
                let e = f;
                if (!e) return;
                let t = window.HTMLInputElement.prototype,
                    n = Object.getOwnPropertyDescriptor(t, `checked`).set,
                    r = !i.current;
                if (h !== a && n) {
                    let t = new Event(`click`, {
                        bubbles: r
                    });
                    n.call(e, a), e.dispatchEvent(t)
                }
            }, [f, h, a, i]);
            let _ = Y.useRef(a);
            return (0, zs.jsx)(S.input, {
                type: `checkbox`,
                "aria-hidden": !0,
                defaultChecked: o ?? _.current,
                required: s,
                disabled: c,
                name: l,
                value: u,
                form: d,
                ...t,
                tabIndex: -1,
                ref: m,
                style: {
                    ...t.style,
                    ...g,
                    position: `absolute`,
                    pointerEvents: `none`,
                    opacity: 0,
                    margin: 0,
                    transform: `translateX(-100%)`
                }
            })
        }), Zs.displayName = Xs
    })),
    $s, ec, tc, nc, rc = e((() => {
        $s = t(u(), 1), n(), Ne(), w(), ec = s(), tc = `Toggle`, nc = $s.forwardRef((e, t) => {
            let {
                pressed: n,
                defaultPressed: i,
                onPressedChange: a,
                ...o
            } = e, [s, c] = A({
                prop: n,
                onChange: a,
                defaultProp: i ?? !1,
                caller: tc
            });
            return (0, ec.jsx)(S.button, {
                type: `button`,
                "aria-pressed": s,
                "data-state": s ? `on` : `off`,
                "data-disabled": e.disabled ? `` : void 0,
                ...o,
                ref: t,
                onClick: r(e.onClick, () => {
                    e.disabled || c(!s)
                })
            })
        }), nc.displayName = tc
    })),
    X, Z, ic, ac, oc, sc, cc, lc, uc, dc, fc, pc, mc, hc, gc, _c, vc, yc = e((() => {
        X = t(u(), 1), k(), w(), Pr(), rc(), Ne(), Xe(), Z = s(), ic = `ToggleGroup`, [ac, oc] = O(ic, [wr]), sc = wr(), cc = X.forwardRef((e, t) => {
            let {
                type: n,
                ...r
            } = e;
            if (n === `single`) return (0, Z.jsx)(dc, {
                role: `radiogroup`,
                ...r,
                ref: t
            });
            if (n === `multiple`) return (0, Z.jsx)(fc, {
                role: `toolbar`,
                ...r,
                ref: t
            });
            throw Error(`Missing prop \`type\` expected on \`${ic}\``)
        }), cc.displayName = ic, [lc, uc] = ac(ic), dc = X.forwardRef((e, t) => {
            let {
                value: n,
                defaultValue: r,
                onValueChange: i = () => {},
                ...a
            } = e, [o, s] = A({
                prop: n,
                defaultProp: r ?? ``,
                onChange: i,
                caller: ic
            });
            return (0, Z.jsx)(lc, {
                scope: e.__scopeToggleGroup,
                type: `single`,
                value: X.useMemo(() => o ? [o] : [], [o]),
                onItemActivate: s,
                onItemDeactivate: X.useCallback(() => s(``), [s]),
                children: (0, Z.jsx)(hc, {
                    ...a,
                    ref: t
                })
            })
        }), fc = X.forwardRef((e, t) => {
            let {
                value: n,
                defaultValue: r,
                onValueChange: i = () => {},
                ...a
            } = e, [o, s] = A({
                prop: n,
                defaultProp: r ?? [],
                onChange: i,
                caller: ic
            }), c = X.useCallback(e => s((t = []) => [...t, e]), [s]), l = X.useCallback(e => s((t = []) => t.filter(t => t !== e)), [s]);
            return (0, Z.jsx)(lc, {
                scope: e.__scopeToggleGroup,
                type: `multiple`,
                value: o,
                onItemActivate: c,
                onItemDeactivate: l,
                children: (0, Z.jsx)(hc, {
                    ...a,
                    ref: t
                })
            })
        }), cc.displayName = ic, [pc, mc] = ac(ic), hc = X.forwardRef((e, t) => {
            let {
                __scopeToggleGroup: n,
                disabled: r = !1,
                rovingFocus: i = !0,
                orientation: a,
                dir: o,
                loop: s = !0,
                ...c
            } = e, l = sc(n), u = qe(o), d = {
                dir: u,
                ...c
            };
            return (0, Z.jsx)(pc, {
                scope: n,
                rovingFocus: i,
                disabled: r,
                children: i ? (0, Z.jsx)(Mr, {
                    asChild: !0,
                    ...l,
                    orientation: a,
                    dir: u,
                    loop: s,
                    children: (0, Z.jsx)(S.div, {
                        ...d,
                        ref: t
                    })
                }) : (0, Z.jsx)(S.div, {
                    ...d,
                    ref: t
                })
            })
        }), gc = `ToggleGroupItem`, _c = X.forwardRef((e, t) => {
            let n = uc(gc, e.__scopeToggleGroup),
                r = mc(gc, e.__scopeToggleGroup),
                i = sc(e.__scopeToggleGroup),
                a = n.value.includes(e.value),
                o = r.disabled || e.disabled,
                s = {
                    ...e,
                    pressed: a,
                    disabled: o
                },
                c = X.useRef(null);
            return r.rovingFocus ? (0, Z.jsx)(Nr, {
                asChild: !0,
                ...i,
                focusable: !o,
                active: a,
                ref: c,
                children: (0, Z.jsx)(vc, {
                    ...s,
                    ref: t
                })
            }) : (0, Z.jsx)(vc, {
                ...s,
                ref: t
            })
        }), _c.displayName = gc, vc = X.forwardRef((e, t) => {
            let {
                __scopeToggleGroup: n,
                value: r,
                ...i
            } = e, a = uc(gc, n), o = {
                role: `radio`,
                "aria-checked": e.pressed,
                "aria-pressed": void 0
            };
            return (0, Z.jsx)(nc, {
                ...a.type === `single` ? o : void 0,
                ...i,
                ref: t,
                onPressedChange: e => {
                    e ? a.onItemActivate(r) : a.onItemDeactivate(r)
                }
            })
        })
    }));

function bc(e, t) {
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

function xc(e, t, n = 5) {
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

function Sc(e) {
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

function Cc(e, t) {
    let {
        x: n,
        y: r
    } = e, i = !1;
    for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
        let o = t[e],
            s = t[a],
            c = o.x,
            l = o.y,
            u = s.x,
            d = s.y;
        l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (i = !i)
    }
    return i
}

function wc(e) {
    let t = e.slice();
    return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : +(e.y > t.y)), Tc(t)
}

function Tc(e) {
    if (e.length <= 1) return e.slice();
    let t = [];
    for (let n = 0; n < e.length; n++) {
        let r = e[n];
        for (; t.length >= 2;) {
            let e = t[t.length - 1],
                n = t[t.length - 2];
            if ((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x)) t.pop();
            else break
        }
        t.push(r)
    }
    t.pop();
    let n = [];
    for (let t = e.length - 1; t >= 0; t--) {
        let r = e[t];
        for (; n.length >= 2;) {
            let e = n[n.length - 1],
                t = n[n.length - 2];
            if ((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x)) n.pop();
            else break
        }
        n.push(r)
    }
    return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var Q, $, Ec, Dc, Oc, kc, Ac, jc, Mc, Nc, Pc, Fc, Ic, Lc, Rc, zc, Bc, Vc, Hc, Uc, Wc, Gc, Kc, qc, Jc, Yc, Xc, Zc, Qc, $c, el, tl, nl, rl, il, al = e((() => {
        Q = t(u(), 1), n(), E(), k(), ue(), Ke(), nr(), xt(), Ve(), w(), x(), Ne(), ve(), $ = s(), [Ec, Dc] = O(`Tooltip`, [Rn]), Oc = Rn(), kc = `TooltipProvider`, Ac = 700, jc = `tooltip.open`, [Mc, Nc] = Ec(kc), Pc = e => {
            let {
                __scopeTooltip: t,
                delayDuration: n = Ac,
                skipDelayDuration: r = 300,
                disableHoverableContent: i = !1,
                children: a
            } = e, o = Q.useRef(!0), s = Q.useRef(!1), c = Q.useRef(0);
            return Q.useEffect(() => {
                let e = c.current;
                return () => window.clearTimeout(e)
            }, []), (0, $.jsx)(Mc, {
                scope: t,
                isOpenDelayedRef: o,
                delayDuration: n,
                onOpen: Q.useCallback(() => {
                    r <= 0 || (window.clearTimeout(c.current), o.current = !1)
                }, [r]),
                onClose: Q.useCallback(() => {
                    r <= 0 || (window.clearTimeout(c.current), c.current = window.setTimeout(() => o.current = !0, r))
                }, [r]),
                isPointerInTransitRef: s,
                onPointerInTransitChange: Q.useCallback(e => {
                    s.current = e
                }, []),
                disableHoverableContent: i,
                children: a
            })
        }, Pc.displayName = kc, Fc = `Tooltip`, [Ic, Lc] = Ec(Fc), Rc = e => {
            let {
                __scopeTooltip: t,
                children: n,
                open: r,
                defaultOpen: i,
                onOpenChange: a,
                disableHoverableContent: o,
                delayDuration: s
            } = e, c = Nc(Fc, e.__scopeTooltip), l = Oc(t), [u, d] = Q.useState(null), f = He(), p = Q.useRef(0), m = o ?? c.disableHoverableContent, h = s ?? c.delayDuration, g = Q.useRef(!1), [_, v] = A({
                prop: r,
                defaultProp: i ?? !1,
                onChange: e => {
                    e ? (c.onOpen(), document.dispatchEvent(new CustomEvent(jc))) : c.onClose(), a?.(e)
                },
                caller: Fc
            }), y = Q.useMemo(() => _ ? g.current ? `delayed-open` : `instant-open` : `closed`, [_]), b = Q.useCallback(() => {
                window.clearTimeout(p.current), p.current = 0, g.current = !1, v(!0)
            }, [v]), ee = Q.useCallback(() => {
                window.clearTimeout(p.current), p.current = 0, v(!1)
            }, [v]), x = Q.useCallback(() => {
                window.clearTimeout(p.current), p.current = window.setTimeout(() => {
                    g.current = !0, v(!0), p.current = 0
                }, h)
            }, [h, v]);
            return Q.useEffect(() => () => {
                p.current &&= (window.clearTimeout(p.current), 0)
            }, []), (0, $.jsx)(Qn, {
                ...l,
                children: (0, $.jsx)(Ic, {
                    scope: t,
                    contentId: f,
                    open: _,
                    stateAttribute: y,
                    trigger: u,
                    onTriggerChange: d,
                    onTriggerEnter: Q.useCallback(() => {
                        c.isOpenDelayedRef.current ? x() : b()
                    }, [c.isOpenDelayedRef, x, b]),
                    onTriggerLeave: Q.useCallback(() => {
                        m ? ee() : (window.clearTimeout(p.current), p.current = 0)
                    }, [ee, m]),
                    onOpen: b,
                    onClose: ee,
                    disableHoverableContent: m,
                    children: n
                })
            })
        }, Rc.displayName = Fc, zc = `TooltipTrigger`, Bc = Q.forwardRef((e, t) => {
            let {
                __scopeTooltip: n,
                ...i
            } = e, a = Lc(zc, n), o = Nc(zc, n), s = Oc(n), c = D(t, Q.useRef(null), a.onTriggerChange), l = Q.useRef(!1), u = Q.useRef(!1), d = Q.useCallback(() => l.current = !1, []);
            return Q.useEffect(() => () => document.removeEventListener(`pointerup`, d), [d]), (0, $.jsx)($n, {
                asChild: !0,
                ...s,
                children: (0, $.jsx)(S.button, {
                    "aria-describedby": a.open ? a.contentId : void 0,
                    "data-state": a.stateAttribute,
                    ...i,
                    ref: c,
                    onPointerMove: r(e.onPointerMove, e => {
                        e.pointerType !== `touch` && !u.current && !o.isPointerInTransitRef.current && (a.onTriggerEnter(), u.current = !0)
                    }),
                    onPointerLeave: r(e.onPointerLeave, () => {
                        a.onTriggerLeave(), u.current = !1
                    }),
                    onPointerDown: r(e.onPointerDown, () => {
                        a.open && a.onClose(), l.current = !0, document.addEventListener(`pointerup`, d, {
                            once: !0
                        })
                    }),
                    onFocus: r(e.onFocus, () => {
                        l.current || a.onOpen()
                    }),
                    onBlur: r(e.onBlur, a.onClose),
                    onClick: r(e.onClick, a.onClose)
                })
            })
        }), Bc.displayName = zc, Vc = `TooltipPortal`, [Hc, Uc] = Ec(Vc, {
            forceMount: void 0
        }), Wc = e => {
            let {
                __scopeTooltip: t,
                forceMount: n,
                children: r,
                container: i
            } = e, a = Lc(Vc, t);
            return (0, $.jsx)(Hc, {
                scope: t,
                forceMount: n,
                children: (0, $.jsx)(M, {
                    present: n || a.open,
                    children: (0, $.jsx)(bt, {
                        asChild: !0,
                        container: i,
                        children: r
                    })
                })
            })
        }, Wc.displayName = Vc, Gc = `TooltipContent`, Kc = Q.forwardRef((e, t) => {
            let n = Uc(Gc, e.__scopeTooltip),
                {
                    forceMount: r = n.forceMount,
                    side: i = `top`,
                    ...a
                } = e,
                o = Lc(Gc, e.__scopeTooltip);
            return (0, $.jsx)(M, {
                present: r || o.open,
                children: o.disableHoverableContent ? (0, $.jsx)(Zc, {
                    side: i,
                    ...a,
                    ref: t
                }) : (0, $.jsx)(qc, {
                    side: i,
                    ...a,
                    ref: t
                })
            })
        }), qc = Q.forwardRef((e, t) => {
            let n = Lc(Gc, e.__scopeTooltip),
                r = Nc(Gc, e.__scopeTooltip),
                i = Q.useRef(null),
                a = D(t, i),
                [o, s] = Q.useState(null),
                {
                    trigger: c,
                    onClose: l
                } = n,
                u = i.current,
                {
                    onPointerInTransitChange: d
                } = r,
                f = Q.useCallback(() => {
                    s(null), d(!1)
                }, [d]),
                p = Q.useCallback((e, t) => {
                    let n = e.currentTarget,
                        r = {
                            x: e.clientX,
                            y: e.clientY
                        },
                        i = xc(r, bc(r, n.getBoundingClientRect())),
                        a = Sc(t.getBoundingClientRect()),
                        o = wc([...i, ...a]);
                    s(o), d(!0)
                }, [d]);
            return Q.useEffect(() => () => f(), [f]), Q.useEffect(() => {
                if (c && u) {
                    let e = e => p(e, u),
                        t = e => p(e, c);
                    return c.addEventListener(`pointerleave`, e), u.addEventListener(`pointerleave`, t), () => {
                        c.removeEventListener(`pointerleave`, e), u.removeEventListener(`pointerleave`, t)
                    }
                }
            }, [c, u, p, f]), Q.useEffect(() => {
                if (o) {
                    let e = e => {
                        let t = e.target,
                            n = {
                                x: e.clientX,
                                y: e.clientY
                            },
                            r = c?.contains(t) || u?.contains(t),
                            i = !Cc(n, o);
                        r ? f() : i && (f(), l())
                    };
                    return document.addEventListener(`pointermove`, e), () => document.removeEventListener(`pointermove`, e)
                }
            }, [c, u, o, l, f]), (0, $.jsx)(Zc, {
                ...e,
                ref: a
            })
        }), [Jc, Yc] = Ec(Fc, {
            isInside: !1
        }), Xc = re(`TooltipContent`), Zc = Q.forwardRef((e, t) => {
            let {
                __scopeTooltip: n,
                children: r,
                "aria-label": i,
                onEscapeKeyDown: a,
                onPointerDownOutside: o,
                ...s
            } = e, c = Lc(Gc, n), l = Oc(n), {
                onClose: u
            } = c;
            return Q.useEffect(() => (document.addEventListener(jc, u), () => document.removeEventListener(jc, u)), [u]), Q.useEffect(() => {
                if (c.trigger) {
                    let e = e => {
                        e.target instanceof Node && e.target.contains(c.trigger) && u()
                    };
                    return window.addEventListener(`scroll`, e, {
                        capture: !0
                    }), () => window.removeEventListener(`scroll`, e, {
                        capture: !0
                    })
                }
            }, [c.trigger, u]), (0, $.jsx)(ce, {
                asChild: !0,
                disableOutsidePointerEvents: !1,
                onEscapeKeyDown: a,
                onPointerDownOutside: o,
                onFocusOutside: e => e.preventDefault(),
                onDismiss: u,
                children: (0, $.jsxs)(er, {
                    "data-state": c.stateAttribute,
                    ...l,
                    ...s,
                    ref: t,
                    style: {
                        ...s.style,
                        "--radix-tooltip-content-transform-origin": `var(--radix-popper-transform-origin)`,
                        "--radix-tooltip-content-available-width": `var(--radix-popper-available-width)`,
                        "--radix-tooltip-content-available-height": `var(--radix-popper-available-height)`,
                        "--radix-tooltip-trigger-width": `var(--radix-popper-anchor-width)`,
                        "--radix-tooltip-trigger-height": `var(--radix-popper-anchor-height)`
                    },
                    children: [(0, $.jsx)(Xc, {
                        children: r
                    }), (0, $.jsx)(Jc, {
                        scope: n,
                        isInside: !0,
                        children: (0, $.jsx)(_e, {
                            id: c.contentId,
                            role: `tooltip`,
                            children: i || r
                        })
                    })]
                })
            })
        }), Kc.displayName = Gc, Qc = `TooltipArrow`, $c = Q.forwardRef((e, t) => {
            let {
                __scopeTooltip: n,
                ...r
            } = e, i = Oc(n);
            return Yc(Qc, n).isInside ? null : (0, $.jsx)(tr, {
                ...i,
                ...r,
                ref: t
            })
        }), $c.displayName = Qc, el = Pc, tl = Rc, nl = Bc, rl = Wc, il = Kc
    })),
    ol = e((() => {
        En(), tn(), fo(), Go(), m(), Fs(), x(), Qs(), yc(), al()
    }));
export {
    eo as A, xn as B, zo as C, to as D, ro as E, co as F, Gt as G, En as H, uo as I, Xt as J, Qt as K, lo as L, ao as M, Qa as N, no as O, so as P, $a as R, Ho as S, Go as T, Nt as U, Cn as V, en as W, tn as X, Ft as Y, Cs as _, tl as a, Wo as b, cc as c, qs as d, Ys as f, Ms as g, Ts as h, el as i, io as j, oo as k, _c as l, gs as m, il as n, nl as o, Qs as p, zt as q, rl as r, al as s, ol as t, yc as u, Fs as v, Vo as w, Uo as x, Bo as y, fo as z
};
//# sourceMappingURL=bcae0416-irbi1zql5j1lffpc.js.map